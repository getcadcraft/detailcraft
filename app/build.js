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
import { buildEndPlate, buildBasePlate, buildShearTab, buildSplice, buildGusset, buildMitre, mainOf, membersOf } from './connections.js';
import { footingBars, footingProblems } from './rebar.js';
import { stairGeometry } from './stair.js';
import { t } from './i18n.js';

export const IFC_CLASS = { beam: 'IfcBeam', column: 'IfcColumn', brace: 'IfcMember', plate: 'IfcPlate', stringer: 'IfcMember' };
const ROLE = { beam: 'build.role.beam', column: 'build.role.column', brace: 'build.role.brace', plate: 'build.role.plate' };

/** 0.11 PERF.78 (perf-finish-11 r2): the generator for each connection type (was a ?: chain in build()); the gusset also reads the other connections. */
const CONN_BUILDERS = {
  endplate: (c, parts) => buildEndPlate(c, { parts }),
  sheartab: (c, parts) => buildShearTab(c, { parts }),
  baseplate: (c, parts) => buildBasePlate(c, { parts }),
  splice: (c, parts) => buildSplice(c, { parts }),
  gusset: (c, parts, conns) => buildGusset(c, { parts, conns }),
  mitre: (c, parts) => buildMitre(c, { parts }),
};

/**
 * build(state, { cache }) (0.11 PERF.36): `cache` is any object the caller keeps between calls. A connection's generator result is a pure function
 * of the connection and the members it names (the gusset also reads the other members near its node, so it is never kept), so it is kept under
 * the text of those and found again by id after an edit elsewhere; only the connections an edit touched run their generator. The answer is the same
 * as with no cache (tools/detailcraft-test/test-perf-11.mjs compares whole JSON). Entries that were not used by this call are let go.
 */
export function build(state, opts = {}) {
  const cache = opts.cache || null;
  let seen = null, fast = null;
  if (cache) {
    const gk = JSON.stringify(state.profiles || []) + '|' + t('build.role.beam');   // a model's own sections change what every generator sees; the words of a kept part (its role) follow the language
    if (cache.gk !== gk || !cache.conns) { cache.gk = gk; cache.rsn = new WeakMap(); cache.conns = new Map(); cache.parts = new Map(); cache.foot = new Map(); cache.pl = new Map(); cache.mver = new Map(); cache.mtext = new Map(); cache.cver = new Map(); cache.ctext = new Map(); cache.base = new Map(); cache.n = 0; cache.state = null; }
    seen = new Map();
    // opts.dirty: the chunk keys the model says changed since the last call (Model.dirtySince). When only elements changed, not the order of the members or connections,
    // the members and connections it does not name are not even read: their versions stand. Otherwise every one is compared by its text.
    if (opts.dirty && cache.state === state) {
      const mem = new Set(), con = new Set();
      for (const k of opts.dirty) {
        if (k.startsWith('e:members:')) mem.add(k.slice(10));
        else if (k.startsWith('e:connections:')) con.add(k.slice(14));
        else if (k === 'o:members' || k === 'o:connections' || k === 'k:members' || k === 'k:connections' || k === '#keys') { mem.clear(); con.clear(); fast = null; break; }
        fast = { members: mem, conns: con };
      }
      if (!opts.dirty.size) fast = { members: mem, conns: con };
    }
    if (!cache.rsn) cache.rsn = new WeakMap();
    cache.state = state;
  }
  const problems = [];
  const drafts = new Map();
  for (const m of state.members) {
    let ver;
    if (cache) {
      if (fast && !fast.members.has(m.id) && cache.mver.has(m.id)) ver = cache.mver.get(m.id);
      else { const tx = JSON.stringify(m); if (cache.mtext.get(m.id) !== tx) { cache.mtext.set(m.id, tx); cache.mver.set(m.id, ++cache.n); } ver = cache.mver.get(m.id); }
    }
    let base = cache && cache.base.get(m.id);
    if (!base || base.ver !== ver) {
      const profile = getProfile(m.profile, state.profiles);
      base = profile ? { ver, profile, frame: frame(m.start, m.end, m.rotation), voff: voffFor(m.position, profile.depth) } : { ver, profile: null };
      if (cache) cache.base.set(m.id, base);
    }
    if (!base.profile) { problems.push({ ref: m.id, text: t('build.err.profile', { name: m.profile }) }); continue; }
    drafts.set(m.id, { m, profile: base.profile, frame: base.frame, voff: base.voff, setback: { start: 0, end: 0 }, plane: { start: null, end: null }, extraHoles: [] });
  }
  if (cache && !fast && (cache.mver.size > state.members.length || cache.cver.size > state.connections.length)) {   // a member or connection went: let its entries go
    const ids = new Set(state.members.map((m) => m.id));
    for (const id of [...cache.mver.keys()]) if (!ids.has(id)) { cache.mver.delete(id); cache.mtext.delete(id); cache.base.delete(id); }
    const cids = new Set(state.connections.map((c) => c.id));
    for (const id of [...cache.cver.keys()]) if (!cids.has(id)) { cache.cver.delete(id); cache.ctext.delete(id); }
  }
  const plates = [], worldHoles = [], holeConn = [], bolts = [], welds = [], infos = new Map();
  // 0.11 PERF.36: what drilled each part, as one short token per generator result (a kept result keeps its serial, so its holes are the same holes):
  // a part's key compares these instead of the JSON of every hole in every part on every edit. A result that is never kept (a gusset) gives its holes' text.
  const holeSrc = cache ? new Map() : null;
  for (const c of state.connections) {
    let r, ck = null;
    if (cache && c.type !== 'gusset') {
      let cv;
      if (fast && !fast.conns.has(c.id) && cache.cver.has(c.id)) cv = cache.cver.get(c.id);
      else { const tx = JSON.stringify(c); if (cache.ctext.get(c.id) !== tx) { cache.ctext.set(c.id, tx); cache.cver.set(c.id, ++cache.n); } cv = cache.cver.get(c.id); }
      ck = c.id + '#' + cv + '#' + membersOf(c).map((id) => cache.mver.get(id) ?? '-').join(',');
      r = cache.conns.get(ck);
    }
    if (!r) r = Object.hasOwn(CONN_BUILDERS, c.type) ? CONN_BUILDERS[c.type](c, drafts, state.connections) : { problems: [t('build.err.connection')] };   // 0.11 PERF.78: the table above build()
    if (ck) { seen.set(ck, r); if (!cache.rsn.has(r)) cache.rsn.set(r, ++cache.n); }
    for (const text of r.problems || []) problems.push({ ref: c.id, text, hard: !r.plates });
    if (r.info) infos.set(c.id, r.info);
    if (!r.plates) continue;
    for (const s of r.setbacks) { const d = drafts.get(s.member); if (d) d.setback[s.end] = Math.max(d.setback[s.end], s.by); }
    for (const pl of r.planes || []) { const d = drafts.get(pl.member); if (d) d.plane[pl.end] = pl; }
    r.plates.forEach((p, i) => plates.push({ ...p, conn: c.id, r, i }));   // r, i: where a kept plate part is found again (0.11 PERF.36)
    for (const h of r.holes) { worldHoles.push(h); holeConn.push(c.id); }   // 0.11 PERF.36: no copy of every hole per build; read below for the parts made fresh
    if (holeSrc && r.holes.length) {
      const sn = ck ? '#' + cache.rsn.get(r) : null, by = new Map();
      for (const h of r.holes) { const l = by.get(h.target); if (l) l.push(h); else by.set(h.target, [h]); }
      for (const [tg, hs] of by) {
        const tok = sn || JSON.stringify(hs.map((h) => ({ ...h, conn: c.id })));
        const l = holeSrc.get(tg); if (l) l.push(tok); else holeSrc.set(tg, [tok]);
      }
    }
    const main = drafts.get(mainOf(c));
    bolts.push(...r.bolts.map((b) => ({ ...b, phase: main?.m.phase || 1 })));
    welds.push(...r.welds);
  }

  const parts = [];
  const byId = new Map();
  const fresh = new Set();   // parts made by this call (a part kept from the last call is finished already: holes sorted, weight set)
  const finish = (part) => { parts.push(part); byId.set(part.id, part); fresh.add(part); };
  const keep = (part) => { parts.push(part); byId.set(part.id, part); };
  let seenParts = null;
  if (cache) {
    seenParts = new Map();
    if (!cache.parts) cache.parts = new Map();
  }
  for (const [id, d] of drafts) {
    // a member's part is a function of the member, its section, the cuts connections made on it and the holes they drilled (0.11 PERF.36)
    let pk = null;
    if (cache) {
      pk = cache.mver.get(id) + '|' + d.setback.start + '|' + d.setback.end + '|' + (d.plane.start ? JSON.stringify(d.plane.start) : '') + '|' + (d.plane.end ? JSON.stringify(d.plane.end) : '') + '|' + (holeSrc.has(id) ? holeSrc.get(id).join('|') : '');
      const had = cache.parts.get(id);
      if (had && had.pk === pk) { keep(had.part); seenParts.set(id, had); continue; }
    }
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
    const made = {
      id, member: id, conn: null, type: d.m.type, role: ROLE[d.m.type] && t(ROLE[d.m.type]), ifc: IFC_CLASS[d.m.type], name: d.m.name,
      profile: d.profile, profileName: d.profile.name, material: d.m.material, frame: f, voff: d.voff, length: f.len,
      start: o, end: add(o, mul(f.x, f.len)), position: d.m.position, rotation: d.m.rotation, phase: d.m.phase || 1,
      holes: d.m.holes.map((h) => ({ face: h.face, x: h.x, y: h.y, d: h.d, id: h.id })), cuts: d.m.cuts.map((c) => ({ ...c })),
      setback: { ...d.setback }, endCuts, attachTo: null,
    };
    finish(made);
    if (cache) seenParts.set(id, { pk, part: made });
  }
  const plSeen = cache ? new Map() : null;
  for (const p of plates) {
    let plk = null;
    if (cache && p.r && !p.r.nokeep) {   // a plate part of a kept generator result: found again when its main member's phase and the holes drilled in it are the same
      plk = (drafts.get(p.attachTo)?.m.phase || 1) + '|' + (holeSrc.has(p.key) ? holeSrc.get(p.key).join('|') : '');
      const row = cache.pl && cache.pl.get(p.r), had = row && row[p.i];
      if (had && had.plk === plk) { keep(had.part); if (!plSeen.has(p.r)) plSeen.set(p.r, []); plSeen.get(p.r)[p.i] = had; continue; }
    }
    const profile = getProfile(p.profileName, state.profiles);
    const f = frame(p.start, p.end, p.rotation);
    const madeP = {
      id: p.key, member: null, conn: p.conn, type: 'plate', role: p.role, ifc: 'IfcPlate', name: p.role,
      profile, profileName: profile.name, material: p.material, frame: f, voff: 0, length: f.len, start: p.start, end: p.end,
      position: 'middle', rotation: p.rotation, holes: [], cuts: [], setback: { start: 0, end: 0 }, attachTo: p.attachTo, loose: !!p.loose,
      phase: drafts.get(p.attachTo)?.m.phase || 1,
    };
    finish(madeP);
    if (plk !== null) { if (!plSeen.has(p.r)) plSeen.set(p.r, []); plSeen.get(p.r)[p.i] = { plk, part: madeP }; }
  }
  for (const b of state.bolts || []) bolts.push({ conn: null, loose: b.id, d: b.d, length: b.length, grip: 0, grade: b.grade, head: b.head, axis: b.axis, kind: b.kind, phase: b.phase || 1 });
  for (const st of state.stairs || []) {
    const g = stairGeometry(st, (name) => getProfile(name, state.profiles));
    for (const pr of g.problems) problems.push({ ref: st.id, text: t(pr.text, pr.fills), hard: pr.code === 'stringer' });
    if (g.problems.some((pr) => pr.code === 'stringer')) continue;
    for (const q of g.parts) {
      const profile = getProfile(q.profileName, state.profiles);
      if (!profile) { problems.push({ ref: st.id, text: t('stair.gen.prob.section', { name: q.profileName }), hard: true }); continue; }   // a generator stair names more sections (posts, rails, balusters)
      let f = frame(q.start, q.end, q.rotation), a0 = 0, endCuts = null, start = q.start, end = q.end;
      if (q.planes) {   // 0.11 SU.1814c: a stringer's ends cut on planes (level on the floor, plumb at the floor's edge): as a mitre, the part runs between the faces' extreme points
        const turned = Math.abs(q.rotation % 180) === 90;   // a flat bar on edge: its depth lies where the frame's v is, so the box turns with it
        const w2 = (turned ? profile.depth : profile.width) / 2, h2 = (turned ? profile.width : profile.depth) / 2, box = [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]], faces = {};
        let a = 0, b = f.len, bad = false;
        for (const e of ['start', 'end']) {
          const pl = q.planes[e];
          if (!pl) continue;
          const nx = dot(pl.n, f.x);
          if (e === 'start' ? nx > -0.1 : nx < 0.1) { problems.push({ ref: st.id, text: t('build.err.cut-plane'), hard: true }); bad = true; continue; }
          const F = { c: dot(pl.n, sub(pl.p, f.o)) / nx, ku: -dot(pl.n, f.u) / nx, kv: -dot(pl.n, f.v) / nx };
          const xs = box.map(([u, v]) => F.c + F.ku * u + F.kv * v);
          if (e === 'start') a = Math.min(...xs); else b = Math.max(...xs);
          faces[e] = F;
        }
        if (!bad && b - a >= 1) {
          a0 = a;
          start = add(f.o, mul(f.x, a)); end = add(start, mul(f.x, b - a));
          endCuts = { start: faces.start ? { x0: faces.start.c - a, ku: faces.start.ku, kv: faces.start.kv } : null, end: faces.end ? { x0: faces.end.c - a, ku: faces.end.ku, kv: faces.end.kv } : null };
          f = { ...f, o: start, len: b - a };
        }
      }
      finish({
        endCuts,
        id: st.id + '.' + q.key, member: null, conn: null, stair: st.id, type: q.type, role: q.role, ifc: q.type === 'stringer' ? 'IfcMember' : q.type === 'column' ? 'IfcColumn' : 'IfcPlate', name: q.role,
        profile, profileName: profile.name, material: q.material, frame: f, voff: 0, length: f.len, start, end,
        position: 'middle', rotation: q.rotation, holes: (q.holes || []).map((h) => ({ face: h.face, x: h.x - a0, y: h.y, d: h.d, conn: null })), cuts: [], setback: { start: 0, end: 0 }, attachTo: q.attachTo ? st.id + '.' + q.attachTo : null,
        phase: st.phase || 1,
      });
    }
    for (const w of g.welds) welds.push({ stair: st.id, kind: 'fillet', size: w.size, between: w.between.map((k) => st.id + '.' + k), length: w.length, where: w.where });
  }
  for (let k = 0; k < worldHoles.length; k++) {
    const h = worldHoles[k], part = byId.get(h.target);
    if (!part || !fresh.has(part)) continue;
    const l = toLocal(part.frame, h.world, part.voff);
    part.holes.push({ face: h.face, x: l.x, y: h.face === 'web' ? l.v : l.u, d: h.d, conn: holeConn[k] });
  }
  for (const p of parts) {
    if (fresh.has(p)) {
      p.holes.sort((a, b) => a.x - b.x || a.y - b.y);
      p.weight = p.profile.mass * p.length / 1000;        // gross: holes and copes are not deducted
    }
    for (const h of p.holes) if (h.x < -0.5 || h.x > p.length + 0.5) problems.push({ ref: p.member || p.conn || p.stair, text: t('build.err.hole-off', { part: p.role + ' ' + (p.name || '') }) });
  }
  const footSeen = cache ? new Map() : null;
  const footings = state.footings.map((f) => {
    if (!cache) return { f, bars: footingBars(f), problems: footingProblems(f) };
    const fk = JSON.stringify(f), had = cache.foot && cache.foot.get(fk);
    const r = had || { bars: footingBars(f), problems: footingProblems(f) };
    footSeen.set(fk, r);
    return { f, bars: r.bars, problems: r.problems };   // the bars of a footing are a function of the footing (kept under its text)
  });
  for (const ft of footings) for (const pr of ft.problems) problems.push({ ref: ft.f.id, text: pr.text });
  if (cache) { cache.conns = seen; cache.parts = seenParts; cache.foot = footSeen; cache.pl = plSeen; }
  return { parts, byId, bolts, welds, footings, problems, infos };
}
