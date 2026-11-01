/* SPDX-License-Identifier: Apache-2.0 */
/**
 * build.js — turns the stored model into the parts a fabricator gets. No DOM. Millimeters.
 *
 *   build(state) → { parts, bolts, welds, footings, problems, byId, infos (connection id → what its generator reports: a shear
 *                  tab's face/skew/slope, a gusset's mode, a mitre's angle and joint frame) }
 *
 * part = { id, member (stored member id or null), conn (connection id or null), type, role, ifc,
 *          name, profile (resolved), profileName, material, frame (o = the cut start; x, u, v; len = cut
 *          length), voff, length, holes: [{ face, x, y, d, conn? }], cuts: [cope …], attachTo (the
 *          main part an end/base plate is welded to), weight (kg) }
 * part.stair: the stair a stringer or tread belongs to (0.4 D23; ids "<stair>.stringerL", "<stair>.tread3" …; type
 * 'stringer' or 'plate'; the treads and the right stringer are attached to the left one, so a stair is one assembly).
 * part.phase: the member's phase; a plate's is its main member's (0.4 D13). bolt.phase: its connection's (the main
 * member's). footing.phase likewise.
 * Hole x is measured along the part from its cut start; y is across the face (u on flanges and
 * plates, v on webs: both from the section's center). Connections cut parts back (setbacks) and
 * add plates, holes, bolts and welds; nothing they make is stored.
 * A mitre (0.7.1 71.20) cuts an end on a plane instead (`planes`): the part then runs from the nearest to the farthest
 * point of its section box between its end faces (length = overall length, its smallest x is 0), and `part.endCuts`
 * { start, end } holds each cut face as { x0, ku, kv } (geom.js endX); a square end is null.
 */
import { getProfile } from './profiles.js';
import { frame, voffFor, toLocal, add, mul, sub, dot } from './geom.js';
import { buildEndPlate, buildBasePlate, buildShearTab, buildSplice, buildGusset, buildMitre, mainOf } from './connections.js';
import { footingBars, footingProblems } from './rebar.js';
import { stairGeometry } from './stair.js';
import { t } from './i18n.js';

export const IFC_CLASS = { beam: 'IfcBeam', column: 'IfcColumn', brace: 'IfcMember', plate: 'IfcPlate', stringer: 'IfcMember' };
const ROLE = { beam: 'build.role.beam', column: 'build.role.column', brace: 'build.role.brace', plate: 'build.role.plate' };

export function build(state) {
  const problems = [];
  const drafts = new Map();
  for (const m of state.members) {
    const profile = getProfile(m.profile, state.profiles);
    if (!profile) { problems.push({ ref: m.id, text: t('build.err.profile', { name: m.profile }) }); continue; }
    const f = frame(m.start, m.end, m.rotation);
    drafts.set(m.id, { m, profile, frame: f, voff: voffFor(m.position, profile.depth), setback: { start: 0, end: 0 }, plane: { start: null, end: null }, extraHoles: [] });
  }
  const plates = [], worldHoles = [], bolts = [], welds = [], infos = new Map();
  for (const c of state.connections) {
    const r = c.type === 'endplate' ? buildEndPlate(c, { parts: drafts }) : c.type === 'sheartab' ? buildShearTab(c, { parts: drafts }) : c.type === 'baseplate' ? buildBasePlate(c, { parts: drafts }) : c.type === 'splice' ? buildSplice(c, { parts: drafts }) : c.type === 'gusset' ? buildGusset(c, { parts: drafts, conns: state.connections }) : c.type === 'mitre' ? buildMitre(c, { parts: drafts }) : { problems: [t('build.err.connection')] };
    for (const text of r.problems || []) problems.push({ ref: c.id, text, hard: !r.plates });
    if (r.info) infos.set(c.id, r.info);
    if (!r.plates) continue;
    for (const s of r.setbacks) { const d = drafts.get(s.member); if (d) d.setback[s.end] = Math.max(d.setback[s.end], s.by); }
    for (const pl of r.planes || []) { const d = drafts.get(pl.member); if (d) d.plane[pl.end] = pl; }
    for (const p of r.plates) plates.push({ ...p, conn: c.id });
    for (const h of r.holes) worldHoles.push({ ...h, conn: c.id });
    const main = drafts.get(mainOf(c));
    bolts.push(...r.bolts.map((b) => ({ ...b, phase: main?.m.phase || 1 })));
    welds.push(...r.welds);
  }

  const parts = [];
  const byId = new Map();
  const finish = (part) => { parts.push(part); byId.set(part.id, part); };
  for (const [id, d] of drafts) {
    const L0 = d.frame.len;
    // each end: square at its setback, or on a cut plane (the face's x along the full line at section point u, v = c + ku·u + kv·v)
    const faces = {};
    let a = d.setback.start, b = L0 - d.setback.end;
    const w2 = d.profile.width / 2, h2 = d.profile.depth / 2, box = [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]];
    for (const end of ['start', 'end']) {
      const pl = d.plane[end];
      if (!pl) continue;
      const nx = dot(pl.n, d.frame.x);
      if (end === 'start' ? nx > -0.1 : nx < 0.1) { problems.push({ ref: id, text: t('build.err.cut-plane'), hard: true }); continue; }
      const F = { c: (dot(pl.n, sub(pl.p, d.frame.o)) - d.voff * dot(pl.n, d.frame.v)) / nx, ku: -dot(pl.n, d.frame.u) / nx, kv: -dot(pl.n, d.frame.v) / nx };
      const xs = box.map(([u, v]) => F.c + F.ku * u + F.kv * v);
      if (end === 'start') a = Math.min(...xs); else b = Math.max(...xs);
      faces[end] = F;
    }
    if (b - a < 1) { problems.push({ ref: id, text: t('build.err.cut-to-nothing'), hard: true }); continue; }
    const o = add(d.frame.o, mul(d.frame.x, a));
    const f = { ...d.frame, o, len: b - a };
    const endCuts = faces.start || faces.end ? { start: faces.start ? { x0: faces.start.c - a, ku: faces.start.ku, kv: faces.start.kv } : null,
      end: faces.end ? { x0: faces.end.c - a, ku: faces.end.ku, kv: faces.end.kv } : null } : null;
    finish({
      id, member: id, conn: null, type: d.m.type, role: ROLE[d.m.type] && t(ROLE[d.m.type]), ifc: IFC_CLASS[d.m.type], name: d.m.name,
      profile: d.profile, profileName: d.profile.name, material: d.m.material, frame: f, voff: d.voff, length: f.len,
      start: o, end: add(o, mul(f.x, f.len)), position: d.m.position, rotation: d.m.rotation, phase: d.m.phase || 1,
      holes: d.m.holes.map((h) => ({ face: h.face, x: h.x, y: h.y, d: h.d, id: h.id })), cuts: d.m.cuts.map((c) => ({ ...c })),
      setback: { ...d.setback }, endCuts, attachTo: null,
    });
  }
  for (const p of plates) {
    const profile = getProfile(p.profileName, state.profiles);
    const f = frame(p.start, p.end, p.rotation);
    finish({
      id: p.key, member: null, conn: p.conn, type: 'plate', role: p.role, ifc: 'IfcPlate', name: p.role,
      profile, profileName: profile.name, material: p.material, frame: f, voff: 0, length: f.len, start: p.start, end: p.end,
      position: 'middle', rotation: p.rotation, holes: [], cuts: [], setback: { start: 0, end: 0 }, attachTo: p.attachTo, loose: !!p.loose,
      phase: drafts.get(p.attachTo)?.m.phase || 1,
    });
  }
  for (const b of state.bolts || []) bolts.push({ conn: null, loose: b.id, d: b.d, length: b.length, grip: 0, grade: b.grade, head: b.head, axis: b.axis, kind: b.kind, phase: b.phase || 1 });
  for (const st of state.stairs || []) {
    const g = stairGeometry(st, (name) => getProfile(name, state.profiles));
    for (const pr of g.problems) problems.push({ ref: st.id, text: t(pr.text, pr.fills), hard: pr.code === 'stringer' });
    if (g.problems.some((pr) => pr.code === 'stringer')) continue;
    for (const q of g.parts) {
      const profile = getProfile(q.profileName, state.profiles);
      const f = frame(q.start, q.end, q.rotation);
      finish({
        id: st.id + '.' + q.key, member: null, conn: null, stair: st.id, type: q.type, role: q.role, ifc: q.type === 'stringer' ? 'IfcMember' : 'IfcPlate', name: q.role,
        profile, profileName: profile.name, material: q.material, frame: f, voff: 0, length: f.len, start: q.start, end: q.end,
        position: 'middle', rotation: q.rotation, holes: [], cuts: [], setback: { start: 0, end: 0 }, attachTo: q.attachTo ? st.id + '.' + q.attachTo : null,
        phase: st.phase || 1,
      });
    }
    for (const w of g.welds) welds.push({ stair: st.id, kind: 'fillet', size: w.size, between: w.between.map((k) => st.id + '.' + k), length: w.length, where: w.where });
  }
  for (const h of worldHoles) {
    const part = byId.get(h.target);
    if (!part) continue;
    const l = toLocal(part.frame, h.world, part.voff);
    part.holes.push({ face: h.face, x: l.x, y: h.face === 'web' ? l.v : l.u, d: h.d, conn: h.conn });
  }
  for (const p of parts) {
    p.holes.sort((a, b) => a.x - b.x || a.y - b.y);
    p.weight = p.profile.mass * p.length / 1000;        // gross: holes and copes are not deducted
    for (const h of p.holes) if (h.x < -0.5 || h.x > p.length + 0.5) problems.push({ ref: p.member || p.conn || p.stair, text: t('build.err.hole-off', { part: p.role + ' ' + (p.name || '') }) });
  }
  const footings = state.footings.map((f) => ({ f, bars: footingBars(f), problems: footingProblems(f) }));
  for (const ft of footings) for (const pr of ft.problems) problems.push({ ref: ft.f.id, text: pr.text });
  return { parts, byId, bolts, welds, footings, problems, infos };
}
