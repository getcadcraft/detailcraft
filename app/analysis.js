/* SPDX-License-Identifier: Apache-2.0 */
/**
 * analysis.js — structural frame analysis of a DetailCraft model (0.6 LC.4). No DOM. An analysis aid, not a code check:
 * it finds forces, reactions and deflections of the members as drawn; it checks no design code.
 *
 * The solver is lib/frame (copied into ./frame/ by `node tools/frame/sync.mjs`; never edit the copy): frame-model.js (the
 * analytical model, section properties), frame-solve.js (the direct stiffness method), frame-report.js + frame-pdf.js
 * (the report), frame-craft.js (the same model as a CraftScript file for PartCraft's frame3d). This module turns the
 * drawn model into that analytical model and maps results back onto the drawn members.
 *
 * state.analysis (kept in the model file; undoable through model.change like any edit; an older file has none):
 *   { bases: 'fixed' | 'pinned', beamEnds: 'rigid' | 'pinned', braces: 'pinned' | 'rigid',
 *     cases: [{ id, name, kind, selfWeight, loads: [load] }], combos: [{ id, name, factors: [{ case, f }] }],
 *     supports: [{ at: [x, y, z], fix: [6] }],              a node's own support, over the bases rule (none = all false)
 *     ends: [{ member, end: 'start' | 'end', kind: 'rigid' | 'pinned' }] }   a member end's own release, over the rules
 *   load = { type: 'udl', member, dir, w, w2?, a?, b? }      along a drawn member (a, b from its start, mm; N/mm)
 *        | { type: 'point', member, dir, P, a }               (N)
 *        | { type: 'node', at: [x, y, z], F: [6] }           at a point of the frame (N, N·mm)
 *
 * Building the analytical model (`frameOf`):
 *   - beams, columns and braces, on their work lines (start → end); plates, stairs, footings, bolts are not in it;
 *   - a member is split wherever another member's end, or a node load, lies on it (within 2 mm); points within 1 mm are
 *     one node;
 *   - sections from the profile's own outline (frame-model.js polySection, exact for the drawn shape) and torsionJ;
 *     an angle is analysed on its principal axes; the member's rotation turns the axes as it turns the drawn part;
 *   - steel E 200 GPa, G 77 GPa, 7850 kg/m³ for every grade (frame-model.js STEEL);
 *   - supports at the foot of every column that nothing continues below: `bases` fixed = all six held, pinned = the
 *     three translations and the twist about the column (a base plate's rods resist that) held;
 *   - end releases: a beam end with a shear tab is pinned (both bending moments free), with an end plate rigid; a beam
 *     end with no connection follows `beamEnds`; braces follow `braces` at both ends; `ends` overrides any of them.
 *
 *   ANALYSIS_DEFAULTS(t) → a starting analysis (Dead with self weight, Live, Dead + Live)
 *   cleanAnalysis(a)    → untrusted → clean (model.js readModel calls it)
 *   frameOf(state, analysis) → { model, parts: Map(memberId → [{ k, s0, s1 }]), skipped: [{ id, why }], notes: [{ key, n }] }
 *   analyse(state, analysis) → { frame, sol } (sol from solveFrame; sol.ok false = sol.error)
 * Results per drawn member: frame-panel.js partResults(frame.parts, sol, key); the panel itself: analysis-ui.js.
 */
import { getProfile, outline } from './profiles.js';
import { isBeamEnd } from './connections.js';
import { cleanFrame, sectionOf, STEEL, RELEASES, FORMAT, VERSION } from './frame/frame-model.js';
import { solveFrame } from './frame/frame-solve.js';
import { defaultAnalysis, cleanAnalysis } from './frame/frame-panel.js';
import { t } from './i18n.js';

export const SPLIT_TOL = 2;        // mm: a point this close to a member's line splits it
export const MERGE_TOL = 1;        // mm: points this close are one node
export const MEMBER_KINDS = ['beam', 'column', 'brace'];

/** The I-shape a design check reads (0.7 SU.878): catalogue shapes as rolled; a custom one is marked welded (not checked). */
const shapeOf = (p) => (p.kind === 'I' && p.d > 0 && p.bf > 0 && p.tw > 0 && p.tf > 0 ? { kind: 'I', d: p.d, bf: p.bf, tw: p.tw, tf: p.tf, r: p.r || 0, ...(p.source === 'custom' || p.family === 'custom' ? { welded: true } : {}) } : null);
export const ANALYSIS_DEFAULTS = (tr = t) => defaultAnalysis(tr);
export { cleanAnalysis };   // shared with BimCraft (frame/frame-panel.js)

const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

/** The analytical model of a DetailCraft model. */
export function frameOf(state, analysis) {
  const A = analysis || ANALYSIS_DEFAULTS();
  const skipped = [], notes = [];
  const drawn = [];
  for (const m of state.members) {
    if (!MEMBER_KINDS.includes(m.type)) continue;
    const p = getProfile(m.profile, state.profiles || []);
    if (!p || !p.loops) { skipped.push({ id: m.id, why: 'profile' }); continue; }
    if (dist(m.start, m.end) < 1) { skipped.push({ id: m.id, why: 'short' }); continue; }
    drawn.push({ m, p });
  }
  // nodes: one per point (merged within MERGE_TOL)
  const nodes = [];
  const nodeAt = (p) => {
    for (const n of nodes) if (dist(n.p, p) <= MERGE_TOL) return n;
    const n = { id: 'n' + (nodes.length + 1), p: [...p] };
    nodes.push(n);
    return n;
  };
  const points = [];
  for (const { m } of drawn) points.push(m.start, m.end);
  for (const c of A.cases) for (const l of c.loads) if (l.type === 'node') points.push(l.at);
  // sections: one per profile name
  const sections = new Map();
  const secOf = (p) => {
    const key = p.name.toUpperCase();
    if (!sections.has(key)) { const s = sectionOf({ ...p, loops: outline(p, 16) }); sections.set(key, { id: 's' + (sections.size + 1), ...s, shape: shapeOf(p) }); }   // fillets in 16 steps: I to 0.01 %
    return sections.get(key);
  };
  const materials = new Map();
  const matOf = (name) => { const key = name || 'steel'; if (!materials.has(key)) materials.set(key, { id: 'g' + (materials.size + 1), name: key, ...STEEL }); return materials.get(key); };
  // end rules
  const endKind = new Map();         // 'memberId:start|end' → 'rigid' | 'pinned'
  const counts = { sheartab: 0, endplate: 0, free: 0, brace: 0, own: 0 };
  for (const c of state.connections || []) {
    if (!isBeamEnd(c)) continue;
    const k = c.beam + ':' + c.end;
    if (c.type === 'sheartab') { endKind.set(k, 'pinned'); counts.sheartab++; } else { endKind.set(k, 'rigid'); counts.endplate++; }
  }
  for (const { m } of drawn) for (const end of ['start', 'end']) {
    const k = m.id + ':' + end;
    if (m.type === 'brace') { endKind.set(k, A.braces); counts.brace++; }
    else if (m.type === 'beam' && !endKind.has(k)) { endKind.set(k, A.beamEnds); counts.free++; }
  }
  const drawnIds = new Set(drawn.map((d) => d.m.id));
  for (const e of A.ends) if (drawnIds.has(e.member)) { endKind.set(e.member + ':' + e.end, e.kind); counts.own++; }
  // split every drawn member at the points on it
  const members = [], parts = new Map();
  for (const { m, p } of drawn) {
    const d = sub(m.end, m.start), L = Math.hypot(...d), ux = d.map((v) => v / L);
    const cuts = [0, L];
    for (const q of points) {
      const s = dot(sub(q, m.start), ux);
      if (s <= SPLIT_TOL || s >= L - SPLIT_TOL) continue;
      const foot = [m.start[0] + ux[0] * s, m.start[1] + ux[1] * s, m.start[2] + ux[2] * s];
      if (dist(foot, q) <= SPLIT_TOL) cuts.push(s);
    }
    cuts.sort((a, b) => a - b);
    const at = cuts.filter((s, i) => i === 0 || s - cuts[i - 1] > MERGE_TOL);
    if (L - at[at.length - 1] > MERGE_TOL) at.push(L); else at[at.length - 1] = L;
    const sec = secOf(p), mat = matOf(m.material);
    const list = [];
    for (let k = 0; k + 1 < at.length; k++) {
      const s0 = at[k], s1 = at[k + 1];
      const pa = k === 0 ? m.start : m.start.map((v, i) => v + ux[i] * s0), pb = k + 2 === at.length ? m.end : m.start.map((v, i) => v + ux[i] * s1);
      const ni = nodeAt(pa), nj = nodeAt(pb);
      if (ni === nj) continue;
      const rel = { i: [...RELEASES.rigid], j: [...RELEASES.rigid] };
      // a brace pinned at both ends is also free to twist at its start (else it could spin about its own axis); a beam
      // keeps its torsion: the columns it frames into hold that
      const pinS = endKind.get(m.id + ':start') === 'pinned', pinE = endKind.get(m.id + ':end') === 'pinned';
      if (k === 0 && pinS) rel.i = [...(m.type === 'brace' && pinE ? RELEASES.truss : RELEASES.pinned)];
      if (k + 2 === at.length && pinE) rel.j = [...RELEASES.pinned];
      const id = m.id + (at.length > 2 ? '.' + (k + 1) : '');
      members.push({ id, i: ni.id, j: nj.id, section: sec.id, material: mat.id, roll: (m.rotation || 0) + (sec.roll || 0), rel, from: { app: 'detailcraft', ref: m.name || m.id } });
      list.push({ k: members.length - 1, s0, s1 });
    }
    parts.set(m.id, list);
  }
  // supports: the foot of each column that has a base plate, or that no member at that node goes below
  const byId = new Map(nodes.map((n) => [n.id, n]));
  const lowest = new Map();         // node id → the lowest z of any member end meeting there
  for (const mb of members) {
    const a = byId.get(mb.i).p[2], b = byId.get(mb.j).p[2];
    lowest.set(mb.i, Math.min(lowest.get(mb.i) ?? Infinity, b)); lowest.set(mb.j, Math.min(lowest.get(mb.j) ?? Infinity, a));
  }
  const basePlated = new Set((state.connections || []).filter((c) => c.type === 'baseplate').map((c) => c.column));
  const supports = new Map();
  const baseFix = A.bases === 'pinned' ? [true, true, true, false, false, true] : [true, true, true, true, true, true];
  let nBases = 0;
  for (const { m } of drawn) {
    if (m.type !== 'column') continue;
    const foot = m.start[2] <= m.end[2] ? m.start : m.end;
    const n = nodes.find((x) => dist(x.p, foot) <= MERGE_TOL);
    if (!n || supports.has(n.id)) continue;
    if (basePlated.has(m.id) || lowest.get(n.id) >= n.p[2] - MERGE_TOL) { supports.set(n.id, baseFix); nBases++; }
  }
  for (const s of A.supports) {
    const n = nodes.find((x) => dist(x.p, s.at) <= MERGE_TOL);
    if (!n) continue;
    if (s.fix.some(Boolean)) supports.set(n.id, s.fix); else supports.delete(n.id);
  }
  // loads
  const cases = A.cases.map((c) => {
    const loads = [];
    for (const l of c.loads) {
      if (l.type === 'node') {
        const n = nodes.find((x) => dist(x.p, l.at) <= MERGE_TOL);
        if (n) loads.push({ type: 'node', node: n.id, F: l.F });
        continue;
      }
      const list = parts.get(l.member);
      if (!list || !list.length) continue;
      if (l.type === 'point') {
        const pc = list.find((q) => l.a >= q.s0 - 1e-9 && l.a <= q.s1 + 1e-9) || list[list.length - 1];
        loads.push({ type: 'point', member: members[pc.k].id, dir: l.dir, P: l.P, a: Math.max(0, l.a - pc.s0) });
        continue;
      }
      const L = list[list.length - 1].s1;
      const a = l.a ?? 0, b = l.b ?? L, w2 = l.w2 ?? l.w;
      const wAt = (s) => (b > a ? l.w + (w2 - l.w) * (s - a) / (b - a) : l.w);
      for (const q of list) {
        const s0 = Math.max(a, q.s0), s1 = Math.min(b, q.s1);
        if (s1 - s0 <= 1e-6) continue;
        loads.push({ type: 'udl', member: members[q.k].id, dir: l.dir, w: wAt(s0), w2: wAt(s1), a: s0 - q.s0, b: s1 - q.s0 });
      }
    }
    return { id: c.id, name: c.name, kind: c.kind, selfWeight: c.selfWeight, loads };
  });
  const raw = {
    format: FORMAT, version: VERSION, name: state.name || '',
    nodes: nodes.map((n) => ({ id: n.id, x: n.p[0], y: n.p[1], z: n.p[2] })),
    materials: [...materials.values()].map(({ id, name, E, G, rho }) => ({ id, name, E, G, rho })),
    sections: [...sections.values()].map(({ id, name, A: Ar, Iy, Iz, J, shape }) => ({ id, name, A: Ar, Iy, Iz, J, ...(shape ? { shape } : {}) })),
    members, supports: [...supports].map(([node, fix]) => ({ node, fix })), cases, combos: A.combos,
  };
  const { model, warnings } = cleanFrame(raw);
  notes.push({ key: A.bases === 'pinned' ? 'frame.note.bases-pinned' : 'frame.note.bases-fixed', n: nBases });
  if (counts.endplate) notes.push({ key: 'frame.note.endplate', n: counts.endplate });
  if (counts.sheartab) notes.push({ key: 'frame.note.sheartab', n: counts.sheartab });
  if (counts.free) notes.push({ key: A.beamEnds === 'pinned' ? 'frame.note.free-pinned' : 'frame.note.free-rigid', n: counts.free });
  if (counts.brace) notes.push({ key: A.braces === 'pinned' ? 'frame.note.braces-pinned' : 'frame.note.braces-rigid', n: counts.brace / 2 });
  if (counts.own) notes.push({ key: 'frame.note.own-ends', n: counts.own });
  if (A.supports.length) notes.push({ key: 'frame.note.own-supports', n: A.supports.length });
  notes.push({ key: 'frame.note.worklines', n: drawn.length }, { key: 'frame.note.steel', n: 0 });
  if (skipped.length) notes.push({ key: 'frame.note.skipped', n: skipped.length });
  return { model, parts, nodes, skipped, notes, warnings };
}

export function analyse(state, analysis) {
  const frame = frameOf(state, analysis);
  const sol = solveFrame(frame.model);
  return { frame, sol };
}
