/* SPDX-License-Identifier: Apache-2.0 */
/**
 * marks.js — part marks, assembly marks and the bill of materials. No DOM.
 *
 * Two parts share a part mark when they are the same piece of steel: same profile, material and
 * cut length, and the same holes and copes, all compared within a tolerance (default 1 mm), in any
 * way the part could be turned over that maps its section onto itself:
 *   end for end about v (x → L − x, u → −u), end for end about u (x → L − x, v → −v), and about its
 *   own axis (u → −u, v → −v). I-shapes, HSS and plates allow all three; channels only the turn about u
 *   (their web stays on the same side); angles and round HSS compare as placed.
 * An assembly is a main part (a member) plus the plates welded to it; assemblies share a mark when the
 * main parts share a mark and the attached parts (by mark) sit in the same places.
 * Part marks: b beam, c column, br brace, st stair stringer, p plate. Assembly marks: B, C, BR, ST (a stair), P.
 * Phases (0.4 D13): with perPhase and parts in more than one phase, each phase is numbered on its own and its marks
 * carry the phase: "2-b1", "2-B1", footings "2-F1". Identical pieces in different phases then have different marks
 * (they are made and shipped at different times). One phase in use, or perPhase off: marks as before, no prefix.
 */
import { toLocal, endX } from './geom.js';
import { t } from './i18n.js';

const PART_PREFIX = { beam: 'b', column: 'c', brace: 'br', stringer: 'st', plate: 'p' };
const ASM_PREFIX = { beam: 'B', column: 'C', brace: 'BR', stringer: 'ST', plate: 'P' };
const TYPE_ORDER = { column: 0, beam: 1, brace: 2, stringer: 3, plate: 4 };

const VARIANTS = {
  all: ['id', 'rv', 'ru', 'rx'],
  C: ['id', 'ru'],
  none: ['id'],
};
function variantsFor(profile) {
  if (profile.kind === 'C') return VARIANTS.C;
  if (profile.kind === 'L' || profile.kind === 'CHS') return VARIANTS.none;
  return VARIANTS.all;
}

/** A hole or cope seen after turning the part over by variant v. */
function turnHole(h, v, L) {
  let { face, x, y } = h;
  const flips = { rv: [true, true, false], ru: [true, false, true], rx: [false, true, true] }[v];
  if (!flips) return { face, x, y, d: h.d };
  const [rev, fu, fv] = flips;
  if (rev) x = L - x;
  if (face === 'web') { if (fv) y = -y; }
  else if (face === 'plate') { if (fu) y = -y; }
  else { if (fu) y = -y; if (fv) face = face === 'top' ? 'bottom' : 'top'; }
  return { face, x, y, d: h.d };
}
function turnCut(c, v) {
  const flips = { rv: [true, false], ru: [true, true], rx: [false, true] }[v];
  if (!flips) return c;
  return { ...c, end: flips[0] ? (c.end === 'start' ? 'end' : 'start') : c.end, side: flips[1] ? (c.side === 'top' ? 'bottom' : 'top') : c.side };
}
function turnPoint(p, v, L) {
  const flips = { rv: [true, true, false], ru: [true, false, true], rx: [false, true, true] }[v];
  if (!flips) return p;
  return { x: flips[0] ? L - p.x : p.x, u: flips[1] ? -p.u : p.u, v: flips[2] ? -p.v : p.v };
}

const r = (v, tol) => { const n = Math.round(v / tol) * tol; return Number((n === 0 ? 0 : n).toFixed(3)); };

/**
 * Plane-cut ends (mitres, 0.7.1 71.20) seen after turning by variant v: for each end, how far its face sits in from that end
 * at the four corners of the section box, in a fixed corner order. Square ends add nothing (older marks unchanged).
 */
function endTrims(p, v, tol) {
  if (!p.endCuts) return null;
  const flips = { rv: [true, true, false], ru: [true, false, true], rx: [false, true, true] }[v] || [false, false, false];
  const [rev, fu, fv] = flips, L = p.length, w = p.profile.width / 2, h = p.profile.depth / 2;
  return ['start', 'end'].map((end) => {
    const src = rev ? (end === 'start' ? 'end' : 'start') : end;
    return [[-w, -h], [w, -h], [w, h], [-w, h]].map(([u, vv]) => {
      const x = endX(p, src, fu ? -u : u, fv ? -vv : vv);
      return r(src === 'start' ? x : L - x, tol);
    });
  });
}
/** The part's own signature in variant v. */
function partSig(p, v, tol) {
  const L = p.length;
  const holes = p.holes.map((h) => turnHole(h, v, L)).map((h) => [h.face, r(h.x, tol), r(h.y, tol), r(h.d, 0.1)]).sort(cmpArr);
  const cuts = p.cuts.map((c) => turnCut(c, v)).map((c) => [c.kind, c.end, c.side, r(c.length, tol), r(c.depth, tol)]).sort(cmpArr);
  const ends = endTrims(p, v, tol);
  return JSON.stringify([p.type === 'plate' ? 'plate' : p.type, p.profileName.toUpperCase(), p.material.toUpperCase(), r(L, tol), holes, cuts, ...(ends ? [ends] : [])]);
}
function cmpArr(a, b) { for (let i = 0; i < Math.max(a.length, b.length); i++) { if (a[i] < b[i]) return -1; if (a[i] > b[i]) return 1; } return 0; }

/**
 * Marks for a built model. Returns {
 *   partMark: Map(part id → mark), asmMark: Map(main part id → mark), asmOf: Map(part id → main part id),
 *   parts: [{ mark, type, profile, material, length, count, unitWeight, ids }],
 *   assemblies: [{ mark, main, count, weight, ids, members: [part marks] }]
 * }
 */
export function markParts(built, { tol = 1, perPhase = false } = {}) {
  const { parts } = built;
  const phased = perPhase && new Set(parts.map((p) => p.phase || 1)).size > 1;
  const ph = (p) => (phased ? p.phase || 1 : 0);
  const pre0 = (p) => (phased ? (p.phase || 1) + '-' : '');
  const sigOf = new Map(), ownSig = new Map();          // ownSig: the part's own canonical form, without the phase
  for (const p of parts) {
    const vs = variantsFor(p.profile);
    let best = null;
    for (const v of vs) { const s = partSig(p, v, tol); if (best === null || s < best) best = s; }
    ownSig.set(p.id, best);
    sigOf.set(p.id, phased ? (p.phase || 1) + '|' + best : best);
  }
  // number groups in a stable, readable order
  const groups = new Map();
  for (const p of parts) {
    const s = sigOf.get(p.id);
    if (!groups.has(s)) groups.set(s, { sig: s, type: p.type, profile: p.profileName, material: p.material, length: p.length, ids: [], weight: p.weight, first: p, phase: p.phase || 1 });
    groups.get(s).ids.push(p.id);
  }
  const ordered = [...groups.values()].sort((a, b) => ph(a.first) - ph(b.first) || TYPE_ORDER[a.type] - TYPE_ORDER[b.type] || a.profile.localeCompare(b.profile, 'en', { numeric: true }) || b.length - a.length || (a.sig < b.sig ? -1 : 1));
  const counters = {};
  const partMark = new Map();
  const partRows = [];
  for (const g of ordered) {
    const pre = pre0(g.first) + PART_PREFIX[g.type];
    counters[pre] = (counters[pre] || 0) + 1;
    g.mark = pre + counters[pre];
    for (const id of g.ids) partMark.set(id, g.mark);
    partRows.push({ mark: g.mark, type: g.type, profile: g.profile, material: g.material, length: g.length, count: g.ids.length, unitWeight: g.weight, ids: g.ids, phase: g.phase });
  }

  // assemblies: every part that is not attached to another is a main part
  const asmOf = new Map();
  const attached = new Map();
  for (const p of parts) {
    const main = p.attachTo && built.byId.has(p.attachTo) ? p.attachTo : p.id;
    asmOf.set(p.id, main);
    if (main !== p.id) { if (!attached.has(main)) attached.set(main, []); attached.get(main).push(p); }
  }
  const asmSig = new Map();
  for (const p of parts) {
    if (asmOf.get(p.id) !== p.id) continue;
    const subs = attached.get(p.id) || [];
    let best = null;
    for (const v of variantsFor(p.profile)) {
      const own = partSig(p, v, tol);
      if (own !== ownSig.get(p.id)) continue;          // only turns that give the part's own canonical form
      const at = subs.map((s) => {
        const c = toLocal(p.frame, [(s.start[0] + s.end[0]) / 2, (s.start[1] + s.end[1]) / 2, (s.start[2] + s.end[2]) / 2], p.voff);
        const tp = turnPoint(c, v, p.length);
        return [partMark.get(s.id), r(tp.x, tol), r(tp.u, tol), r(tp.v, tol)];
      }).sort(cmpArr);
      const s = JSON.stringify([partMark.get(p.id), at]);
      if (best === null || s < best) best = s;
    }
    asmSig.set(p.id, best);
  }
  const agroups = new Map();
  for (const [id, s] of asmSig) {
    if (!agroups.has(s)) agroups.set(s, { sig: s, ids: [], main: built.byId.get(id) });
    agroups.get(s).ids.push(id);
  }
  const aordered = [...agroups.values()].sort((a, b) => ph(a.main) - ph(b.main) || TYPE_ORDER[a.main.type] - TYPE_ORDER[b.main.type] || partMark.get(a.main.id).localeCompare(partMark.get(b.main.id), 'en', { numeric: true }) || (a.sig < b.sig ? -1 : 1));
  const acount = {};
  const asmMark = new Map();
  const asmRows = [];
  for (const g of aordered) {
    const pre = pre0(g.main) + ASM_PREFIX[g.main.type];
    acount[pre] = (acount[pre] || 0) + 1;
    g.mark = pre + acount[pre];
    for (const id of g.ids) asmMark.set(id, g.mark);
    const subs = attached.get(g.main.id) || [];
    asmRows.push({ mark: g.mark, main: partMark.get(g.main.id), count: g.ids.length, weight: g.main.weight + subs.reduce((s, x) => s + x.weight, 0), ids: g.ids, members: [partMark.get(g.main.id), ...subs.map((s) => partMark.get(s.id))], phase: g.main.phase || 1 });
  }
  return { partMark, asmMark, asmOf, parts: partRows, assemblies: asmRows, phased };
}

/** Bolts grouped by kind, diameter, length and grade. */
export function boltList(bolts) {
  const m = new Map();
  for (const b of bolts) {
    const k = [b.kind, b.d, b.length, b.grade].join('|');
    if (!m.has(k)) m.set(k, { kind: b.kind, d: b.d, length: b.length, grade: b.grade, count: 0 });
    m.get(k).count++;
  }
  return [...m.values()].sort((a, b) => a.kind.localeCompare(b.kind) || a.d - b.d || a.length - b.length);
}

/** The bill of materials as table rows (header first), parts then assemblies then bolts. */
export function bomTables(marks, bolts) {
  const kg = (v) => v.toFixed(1);
  const col = (k) => t('marks.col.' + k);
  const parts = [['part-mark', 'type', 'profile', 'material', 'length', 'count', 'unit-weight', 'total-weight'].map(col),
    ...marks.parts.map((p) => [p.mark, p.type, p.profile, p.material, String(Math.round(p.length)), String(p.count), kg(p.unitWeight), kg(p.unitWeight * p.count)])];
  const tw = marks.parts.reduce((s, p) => s + p.unitWeight * p.count, 0);
  parts.push([t('marks.total'), '', '', '', '', String(marks.parts.reduce((s, p) => s + p.count, 0)), '', kg(tw)]);
  const asm = [['assembly-mark', 'main-part', 'parts', 'count', 'unit-weight', 'total-weight'].map(col),
    ...marks.assemblies.map((a) => [a.mark, a.main, a.members.join(' + '), String(a.count), kg(a.weight), kg(a.weight * a.count)])];
  const bl = [['fastener', 'diameter', 'length', 'grade', 'count'].map(col),
    ...boltList(bolts).map((b) => [b.kind === 'ANCHORBOLT' ? t('marks.anchor-rod') : t('marks.bolt'), String(b.d), String(b.length), b.grade, String(b.count)])];
  return { parts, assemblies: asm, bolts: bl, totalWeight: tw };
}

/** Footing marks: footings with the same size, concrete, mat and starters share "F<n>" ("2-F1" per phase). Map(id → mark). */
export function markFootings(footings, { perPhase = false } = {}) {
  const phased = perPhase && new Set(footings.map((f) => f.phase || 1)).size > 1;
  const out = new Map(), seen = new Map(), count = new Map();
  const list = phased ? [...footings].sort((a, b) => (a.phase || 1) - (b.phase || 1)) : footings;
  for (const f of list) {
    const pre = phased ? (f.phase || 1) + '-' : '';
    const k = pre + JSON.stringify([f.L, f.B, f.H, f.concrete, f.mat, f.starters]);
    if (!seen.has(k)) { count.set(pre, (count.get(pre) || 0) + 1); seen.set(k, pre + 'F' + count.get(pre)); }
    out.set(f.id, seen.get(k));
  }
  return out;
}
