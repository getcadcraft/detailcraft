/* SPDX-License-Identifier: Apache-2.0 */
/**
 * connections.js — the two connections DetailCraft builds, as generators. No DOM. Millimeters.
 * A connection stores only its type, the parts it joins and its parameters; its plate, holes, bolts,
 * welds and the cut-back of the parts it joins are made again from those whenever the model is built
 * (build.js), so moving or resizing a member carries its connections along.
 *
 *   endplate  — beam to column flange or web (0.4 D6), bolted end plate (flush, or extended with extTop/extBottom)
 *   sheartab  — beam to column flange or web, square, skewed in plan or sloped (0.4 D5, D7): a plate shop-welded to the
 *               column, the beam web bolted to it with one vertical row; the beam is cut back clear of the column by
 *               `gap` at its nearest corner, so a skewed or sloped beam is cut further back (the shop cuts its end to suit)
 *   baseplate — column base plate with anchor rods
 *   gusset    — a brace end at a column or beam (0.4 D22): a gusset plate shop-welded to that support, in the plane of
 *               the brace and the support's axis; an angle (through the leg lying in that plane) or a flat bar is bolted to
 *               it with one line of bolts, a tube is slotted over it and welded (knife plate). The brace is cut back clear
 *               of every member at the joint and of a base plate there. Stored as { brace, end, support }.
 *   splice    — two I-shapes of one profile end to end (beam or column, 0.4 D21): bolted flange cover plates outside both
 *               flanges and web cover plates on both sides of the web; each piece is cut back so the ends are jointGap apart. Stored as
 *               { a, aEnd (a's end at the joint), b }; the plates ship bolted to a (its assembly), not welded.
 *   mitre     — two I-shapes meeting at an angle (0.7.1 71.20, DC-AUTO-CONNECTIONS): both ends cut on the plane that halves the
 *               angle (a plane cut, `planes` below, not a setback), and optionally an end plate welded to each end, the two plates
 *               bolted together, and a pair of web stiffeners in each member. Stored as { a, aEnd, b, bEnd }; each plate and its
 *               stiffeners belong to their own member's assembly; the bolts are site bolts of the connection.
 *
 * The defaults are starting values to edit, not design values: DetailCraft does not design
 * connections (no strength checks). Spacing and edge checks use EN 1993-1-8:2005 Table 3.3 minimums
 * (e1, e2 ≥ 1.2·d0; p1 ≥ 2.2·d0; p2 ≥ 2.4·d0, d0 = hole diameter) and are warnings.
 */
import { frame, add, sub, mul, dot, norm, len, cross } from './geom.js';
import { getProfile } from './profiles.js';
import { t } from './i18n.js';

export const ENDPLATE_DEFAULTS = Object.freeze({
  tp: 20, width: 180, extTop: 0, extBottom: 0,
  boltD: 20, hole: 22, grade: 'A325', rows: 4, pitch: 75, gauge: 100, allowance: 30,
  weld: 8, plateGrade: 'A36',
});
export const SHEARTAB_DEFAULTS = Object.freeze({
  tp: 10, width: 115, boltD: 20, hole: 22, grade: 'A325', rows: 3, pitch: 75, edge: 38, ev: 0, gap: 13, eh: 65, allowance: 30,
  weld: 6, plateGrade: 'A36',
});
export const BASEPLATE_DEFAULTS = Object.freeze({
  tp: 25, length: 450, width: 400, rodD: 20, hole: 33, grade: 'F1554 Gr 36', sx: 350, sy: 300,
  projection: 100, embed: 450, weld: 8, plateGrade: 'A36',
  // 0.4 D20 base details, all off by default (models made before keep their parts):
  grout: 0,                                   // grout gap under the plate; the rods get longer by it
  stiffeners: 0, stiffT: 12, stiffH: 150,     // 0, 2 (in line with the web) or 4 (and square to it)
  lugD: 0, lugT: 25, lugW: 150,               // shear lug below the plate; depth 0 = none
  washers: 0, washerSize: 0, washerT: 0,      // plate washers on the rods (1 = on); 0 size / thickness = DG1 Table 2.3
});
export const SPLICE_DEFAULTS = Object.freeze({
  jointGap: 10, boltD: 20, hole: 22, grade: 'A325', allowance: 30, plateGrade: 'A36',
  flangeT: 12, flangeRows: 3, flangePitch: 75, flangeGauge: 0, flangeEdge: 40,   // gauge 0 = bf − 2·40 (two lines)
  webT: 8, webRows: 3, webCols: 2, webPitch: 75, webPitchX: 75, webEdge: 40, webH: 0, // webH 0 = the clear web depth less 2 × 10
});
/**
 * Mitre (0.7.1 71.20). The numbers are the dialog's numbered fields: (1) mGap, (2) tp with the plates tick box, (3) the bolt rows,
 * (4) extOuter, (5) extInner, (6) stiffDist with the stiffeners tick box, (7) stiffT.
 */
export const MITRE_DEFAULTS = Object.freeze({
  mGap: 0, plates: 1, tp: 20, mWidth: 0, extOuter: 0, extInner: 0,     // mWidth 0 = as wide as the cut section (the flange)
  boltD: 20, hole: 22, grade: 'A325', rows: 4, mPitch: 0, mGauge: 0, outRow: 0, allowance: 30,   // mPitch 0 = spread between the flanges; mGauge 0 = half the plate width
  weld: 8, stiffs: 0, stiffT: 10, stiffDist: 50, plateGrade: 'A36',
});
export const GUSSET_DEFAULTS = Object.freeze({
  tp: 12, braceGap: 25, boltD: 20, hole: 22, grade: 'A325', bolts: 3, bracePitch: 75, braceEdge: 40, braceGauge: 0, allowance: 30,
  lap: 200, weld: 6, plateGrade: 'A36',     // braceGauge 0 = the middle of the leg (angles) or the center (flats); lap = tube over the gusset
});
/**
 * AISC Design Guide 1, 2nd ed., Table 2.3 "Recommended sizes for anchor rod holes in base plates":
 * [rod diameter, hole diameter, min. washer dimension, min. washer thickness], inches.
 */
export const DG1_TABLE_2_3 = Object.freeze([
  [0.75, 1 + 5 / 16, 2, 0.25], [0.875, 1 + 9 / 16, 2.5, 5 / 16], [1, 1 + 13 / 16, 3, 0.375], [1.25, 2 + 1 / 16, 3, 0.5],
  [1.5, 2 + 5 / 16, 3.5, 0.5], [1.75, 2.75, 4, 0.625], [2, 3.25, 5, 0.75], [2.5, 3.25, 5.5, 0.875],
]);
/** The DG1 row for a rod (mm): the smallest tabulated rod at least as big (a metric rod takes the next inch size up). */
export function dg1Row(rodD) {
  const r = DG1_TABLE_2_3.find(([d]) => d * 25.4 >= rodD - 0.5);
  return r ? { rod: r[0] * 25.4, hole: r[1] * 25.4, washer: r[2] * 25.4, washerT: r[3] * 25.4, inch: r } : null;
}
export const PARAM_CHOICES = { stiffeners: [0, 2, 4], washers: [0, 1], plates: [0, 1], outRow: [0, 1], stiffs: [0, 1] };
// labels and help read the language file when asked (the table is looked up by key on the page)
const byKey = (keys) => Object.defineProperties({}, Object.fromEntries(Object.entries(keys).map(([k, key]) => [k, { get: () => t(key), enumerable: true }])));
const PARAM_LABEL_KEYS = {
  bolts: 'conn.param.bolts', lap: 'conn.param.lap', braceGap: 'conn.param.brace-gap', braceEdge: 'conn.param.brace-edge', bracePitch: 'conn.param.brace-pitch', braceGauge: 'conn.param.brace-gauge',
  jointGap: 'conn.param.joint-gap',
  mGap: 'conn.param.m-gap', mWidth: 'conn.param.width', plates: 'conn.param.plates', extOuter: 'conn.param.ext-outer', extInner: 'conn.param.ext-inner', mPitch: 'conn.param.m-pitch',
  mGauge: 'conn.param.m-gauge', outRow: 'conn.param.out-row', stiffs: 'conn.param.stiffs', stiffDist: 'conn.param.stiff-dist',
  flangeT: 'conn.param.flange-t', flangeRows: 'conn.param.flange-rows', flangePitch: 'conn.param.flange-pitch', flangeGauge: 'conn.param.flange-gauge', flangeEdge: 'conn.param.flange-edge',
  webT: 'conn.param.web-t', webRows: 'conn.param.web-rows', webCols: 'conn.param.web-cols', webPitch: 'conn.param.web-pitch', webPitchX: 'conn.param.web-pitch-x', webEdge: 'conn.param.web-edge', webH: 'conn.param.web-h',
};
export const PARAM_LABELS = byKey({
  ...PARAM_LABEL_KEYS,
  tp: 'conn.param.tp', width: 'conn.param.width', length: 'conn.param.length', extTop: 'conn.param.ext-top', extBottom: 'conn.param.ext-bottom',
  boltD: 'conn.param.bolt-d', hole: 'conn.param.hole', grade: 'conn.param.grade', rows: 'conn.param.rows', pitch: 'conn.param.pitch', gauge: 'conn.param.gauge',
  allowance: 'conn.param.allowance', weld: 'conn.param.weld', rodD: 'conn.param.rod-d', sx: 'conn.param.sx', sy: 'conn.param.sy',
  projection: 'conn.param.projection', embed: 'conn.param.embed', plateGrade: 'conn.param.plate-grade',
  grout: 'conn.param.grout', stiffeners: 'conn.param.stiffeners', stiffT: 'conn.param.stiff-t', stiffH: 'conn.param.stiff-h',
  lugD: 'conn.param.lug-d', lugT: 'conn.param.lug-t', lugW: 'conn.param.lug-w', washers: 'conn.param.washers', washerSize: 'conn.param.washer-size', washerT: 'conn.param.washer-t',
  edge: 'conn.param.edge', ev: 'conn.param.ev', gap: 'conn.param.gap', eh: 'conn.param.eh',
});
export const PARAM_HELP = byKey({
  allowance: 'conn.help.allowance',
  hole: 'conn.help.hole',
  grout: 'conn.help.grout', stiffeners: 'conn.help.stiffeners', lugD: 'conn.help.lug-d', washers: 'conn.help.washers', washerSize: 'conn.help.washer-size', washerT: 'conn.help.washer-size',
  ev: 'conn.help.ev', gap: 'conn.help.gap', eh: 'conn.help.eh',
  lap: 'conn.help.lap', bolts: 'conn.help.gu-bolts', braceGap: 'conn.help.brace-gap', braceGauge: 'conn.help.brace-gauge',
  mGap: 'conn.help.m-gap', mWidth: 'conn.help.m-width', mPitch: 'conn.help.m-pitch', mGauge: 'conn.help.m-gauge', outRow: 'conn.help.out-row', stiffDist: 'conn.help.stiff-dist',
  extOuter: 'conn.help.ext-outer', extInner: 'conn.help.ext-inner',
  jointGap: 'conn.help.joint-gap', flangeGauge: 'conn.help.flange-gauge', webH: 'conn.help.web-h', flangeEdge: 'conn.help.sp-edge', webEdge: 'conn.help.sp-edge',
});

const TOL = 1;   // mm
/** Connections at a beam's end (they join a beam and a column; the beam is the main member). */
export const isBeamEnd = (c) => c && (c.type === 'endplate' || c.type === 'sheartab');
export const DEFAULTS_OF = { endplate: ENDPLATE_DEFAULTS, sheartab: SHEARTAB_DEFAULTS, baseplate: BASEPLATE_DEFAULTS, splice: SPLICE_DEFAULTS, gusset: GUSSET_DEFAULTS, mitre: MITRE_DEFAULTS };
/** The members a connection joins, main first (the one whose assembly its plates join). */
export const membersOf = (c) => (c.type === 'splice' || c.type === 'mitre' ? [c.a, c.b] : c.type === 'gusset' ? [c.support, c.brace] : isBeamEnd(c) ? [c.beam, c.column] : [c.column]);

/** Distance from point P to the segment a–b. */
function segDist(P, a, b) {
  const ab = sub(b, a), L2 = dot(ab, ab);
  const k = L2 > 0 ? Math.max(0, Math.min(1, dot(sub(P, a), ab) / L2)) : 0;
  return len(sub(P, add(a, mul(ab, k))));
}
/** The members (other than `skip`) whose reference line passes within 1 mm of P. */
const membersAt = (members, P, skip) => members.filter((m) => m.id !== skip && segDist(P, m.start, m.end) <= TOL);
/**
 * Brace ends that land on another member: [{ brace, end, support, others }] — the support is a column there if there is
 * one, else the first member; others are the rest meeting at that point (a beam at a beam-column joint).
 */
export function findBraceEnds(state, ids = null) {
  const out = [];
  for (const b of state.members) {
    if (b.type !== 'brace' || (ids && !ids.includes(b.id))) continue;
    for (const end of ['start', 'end']) {
      const at = membersAt(state.members, b[end], b.id).filter((m) => m.type !== 'brace');
      if (!at.length) continue;
      const sup = at.find((m) => m.type === 'column') || at[0];
      out.push({ brace: b.id, end, support: sup.id, others: at.filter((m) => m !== sup).map((m) => m.id) });
    }
  }
  return out;
}
/** Brace ends with a support and no gusset yet, among `ids` (all braces if null). */
export function freeBraceEnds(state, ids = null) {
  const taken = new Set(state.connections.filter((c) => c.type === 'gusset').map((c) => c.brace + ':' + c.end));
  return findBraceEnds(state, ids).filter((j) => !taken.has(j.brace + ':' + j.end));
}
/** Free brace ends like the given gusset's (same brace profile, same support profile). */
export function similarBraceEnds(state, conn) {
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const key = (j) => byId.get(j.brace)?.profile.toUpperCase() + '|' + byId.get(j.support)?.profile.toUpperCase();
  const k = key(conn);
  return freeBraceEnds(state).filter((j) => key(j) === k);
}
export const mainOf = (c) => membersOf(c)[0];

/**
 * Where two members meet end to end in line: [{ a, aEnd, b, bEnd, gap }] — a's end within 50 mm of b's end, the two
 * parallel and on one line (within 1 mm), both I-shapes of one profile is not required here (buildSplice checks).
 */
export function findSplices(state, ids = null) {
  const ms = state.members.filter((m) => !ids || ids.includes(m.id));
  const out = [];
  for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) {
    const A = ms[i], B = ms[j];
    const da = norm(sub(A.end, A.start)), db = norm(sub(B.end, B.start));
    if (Math.abs(dot(da, db)) < 0.9999) continue;
    for (const aEnd of ['start', 'end']) for (const bEnd of ['start', 'end']) {
      const P = A[aEnd], Q = B[bEnd], d = sub(Q, P), along = dot(d, da), off = len(sub(d, mul(da, along)));
      if (off > TOL || len(d) > 50) continue;
      // b must lie beyond a's end, not overlap it
      const out_ = aEnd === 'end' ? 1 : -1;
      const bOther = B[bEnd === 'start' ? 'end' : 'start'];
      if (dot(sub(bOther, P), da) * out_ <= 0) continue;
      out.push({ a: A.id, aEnd, b: B.id, bEnd, gap: Math.abs(along) });
    }
  }
  return out;
}

const isVertical = (m) => Math.abs(m.start[0] - m.end[0]) < TOL && Math.abs(m.start[1] - m.end[1]) < TOL && Math.abs(m.start[2] - m.end[2]) >= TOL;

/** Where a beam end meets a column: [{ beam, end, column, face: 'flange'|'web'|'skew', away }]. */
export function findJoints(state) {
  const cols = state.members.filter((m) => m.type === 'column' && isVertical(m));
  const out = [];
  for (const b of state.members) {
    if (b.type !== 'beam') continue;
    for (const end of ['start', 'end']) {
      const N = b[end], O = end === 'start' ? b.end : b.start;
      for (const c of cols) {
        const z0 = Math.min(c.start[2], c.end[2]), z1 = Math.max(c.start[2], c.end[2]);
        if (Math.abs(N[0] - c.start[0]) > TOL || Math.abs(N[1] - c.start[1]) > TOL || N[2] < z0 - TOL || N[2] > z1 + TOL) continue;
        const away = norm([O[0] - N[0], O[1] - N[1], 0]);
        if (len(away) < 0.5) continue;
        const fc = frame(c.start, c.end, c.rotation);
        const dv = dot(away, fc.v), du = dot(away, fc.u);
        const face = Math.abs(dv) > 0.9999 ? 'flange' : Math.abs(du) > 0.9999 ? 'web' : 'skew';
        out.push({ beam: b.id, end, column: c.id, face, away });
        break;
      }
    }
  }
  return out;
}

/** Joints like the given beam-end connection's (same beam profile, column profile and face) that have no connection yet. */
export function similarJoints(state, conn) {
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const joints = findJoints(state);
  const src = joints.find((j) => j.beam === conn.beam && j.end === conn.end);
  if (!src) return [];
  const key = (j) => byId.get(j.beam).profile.toUpperCase() + '|' + byId.get(j.column).profile.toUpperCase() + '|' + j.face;
  const k = key(src);
  const taken = new Set(state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
  return joints.filter((j) => key(j) === k && !taken.has(j.beam + ':' + j.end));
}
/** Free splice joints (no splice yet) between two I-shapes of one profile, among `ids` (all members if null). */
export function freeSplices(state, ids = null) {
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const taken = new Set(state.connections.filter((c) => c.type === 'splice').flatMap((c) => [c.a + '|' + c.b, c.b + '|' + c.a]));
  const seen = new Set();
  return findSplices(state).filter((j) => {
    if (ids && !ids.includes(j.a) && !ids.includes(j.b)) return false;
    const a = byId.get(j.a), b = byId.get(j.b);
    if (a.profile.toUpperCase() !== b.profile.toUpperCase() || taken.has(j.a + '|' + j.b)) return false;
    const k = [j.a, j.b].sort().join('|');
    if (seen.has(k)) return false;
    seen.add(k);
    return true;
  });
}
/** Free splice joints like the given splice's (same profile). */
export function similarSplices(state, conn) {
  const a = state.members.find((m) => m.id === conn.a);
  if (!a) return [];
  return freeSplices(state).filter((j) => state.members.find((m) => m.id === j.a).profile.toUpperCase() === a.profile.toUpperCase());
}
/** Columns like the given base plate's column (same profile, standing on nothing) without a base plate. */
export function similarColumns(state, conn) {
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const src = byId.get(conn.column);
  if (!src) return [];
  const taken = new Set(state.connections.filter((c) => c.type === 'baseplate').map((c) => c.column));
  const cols = state.members.filter((m) => m.type === 'column' && isVertical(m));
  const bottomOf = (m) => (m.start[2] <= m.end[2] ? m.start : m.end);
  const topOf = (m) => (m.start[2] <= m.end[2] ? m.end : m.start);
  const standsOnColumn = (m) => cols.some((o) => o !== m && Math.abs(topOf(o)[0] - bottomOf(m)[0]) < TOL && Math.abs(topOf(o)[1] - bottomOf(m)[1]) < TOL && Math.abs(topOf(o)[2] - bottomOf(m)[2]) < TOL);
  return cols.filter((m) => m.id !== src.id && !taken.has(m.id) && m.profile.toUpperCase() === src.profile.toUpperCase() && !standsOnColumn(m)).map((m) => m.id);
}

const ceil5 = (v) => Math.ceil(v / 5 - 1e-9) * 5;

/**
 * End plate. ctx: { parts (Map member id → resolved part draft: { m, profile, frame, voff, setback }) }.
 * Returns { setbacks: [{ member, end, by }], plates: [plate part drafts], holes: [{ member|plateKey, world, face, d }],
 *           bolts: [...], welds: [...], problems: [string] } or { problems } when it cannot be built.
 */
export function buildEndPlate(conn, ctx) {
  const B = ctx.parts.get(conn.beam), C = ctx.parts.get(conn.column);
  const p = conn.params;
  if (!B || !C) return { problems: [t('conn.err.part-missing')] };
  if (B.profile.kind !== 'I') return { problems: [t('conn.err.ep-beam-i')] };
  if (C.profile.kind !== 'I') return { problems: [t('conn.err.ep-column-i')] };
  if (!isVertical(C.m)) return { problems: [t('conn.err.column-not-vertical')] };
  const N = B.m[conn.end], O = conn.end === 'start' ? B.m.end : B.m.start;
  const z0 = Math.min(C.m.start[2], C.m.end[2]), z1 = Math.max(C.m.start[2], C.m.end[2]);
  if (Math.abs(N[0] - C.m.start[0]) > TOL || Math.abs(N[1] - C.m.start[1]) > TOL || N[2] < z0 - TOL || N[2] > z1 + TOL) return { problems: [t('conn.err.beam-off-column')] };
  if (Math.abs(N[2] - O[2]) > TOL) return { problems: [t('conn.err.ep-level-only')] };
  if (Math.abs(B.frame.v[2] - 1) > 1e-6) return { problems: [t('conn.err.ep-upright')] };
  const away = norm([O[0] - N[0], O[1] - N[1], 0]);
  const fc = C.frame;
  const dv = dot(away, fc.v);
  const du = dot(away, fc.u);
  const onWeb = Math.abs(du) > 0.9999;
  if (Math.abs(dv) < 0.9999 && !onWeb) return { problems: [t('conn.err.skew')] };
  const problems = [];
  const bp = B.profile, cp = C.profile;
  const faceOff = onWeb ? cp.tw / 2 : cp.d / 2;            // column axis → the face the plate bears on (flange outside, or web)
  const beamTop = N[2] + B.voff + bp.d / 2;
  const hp = bp.d + p.extTop + p.extBottom;
  const zBot = beamTop - bp.d - p.extBottom, zTop = beamTop + p.extTop;
  const ctr = add(N, mul(away, faceOff + p.tp / 2));
  const rot = Math.atan2(away[1], away[0]) * 180 / Math.PI;
  const plate = { key: conn.id + '.plate', role: t('conn.role.endplate'), profileName: 'PL' + num(p.tp) + 'x' + num(p.width), material: p.plateGrade || 'A36',
    start: [ctr[0], ctr[1], zBot], end: [ctr[0], ctr[1], zTop], rotation: rot, position: 'middle', attachTo: conn.beam };
  const w = norm([away[1], -away[0], 0]);                 // across the joint, horizontal (= the plate's u)
  const zc = (zBot + zTop) / 2;
  const rows = Math.max(1, Math.round(p.rows));
  const holes = [], bolts = [];
  const faceName = onWeb ? 'web' : dv > 0 ? 'top' : 'bottom';   // which column face (section +v = 'top' flange)
  const flangeFace = add(N, mul(away, faceOff));
  const grip = p.tp + (onWeb ? cp.tw : cp.tf);
  const boltLen = ceil5(grip + p.allowance);
  for (let i = 0; i < rows; i++) {
    const z = zc + ((rows - 1) / 2 - i) * p.pitch;
    for (const sgn of [1, -1]) {
      const onFace = [flangeFace[0] + w[0] * sgn * p.gauge / 2, flangeFace[1] + w[1] * sgn * p.gauge / 2, z];
      holes.push({ target: plate.key, world: add(onFace, mul(away, p.tp / 2)), face: 'plate', d: p.hole });
      holes.push({ target: conn.column, world: onFace, face: faceName, d: p.hole });
      bolts.push({ conn: conn.id, d: p.boltD, length: boltLen, grip, grade: p.grade, head: add(onFace, mul(away, p.tp)), axis: mul(away, -1), kind: 'BOLT' });
    }
  }
  // checks (warnings)
  const d0 = p.hole;
  const e1 = (hp - (rows - 1) * p.pitch) / 2, e2 = (p.width - p.gauge) / 2;
  if (e1 < 1.2 * d0) problems.push(t('conn.warn.e1', { e: num(e1), min: num(1.2 * d0) }));
  if (e2 < 1.2 * d0) problems.push(t('conn.warn.e2', { e: num(e2), min: num(1.2 * d0) }));
  if (rows > 1 && p.pitch < 2.2 * d0) problems.push(t('conn.warn.pitch', { pitch: num(p.pitch), min: num(2.2 * d0) }));
  if (p.gauge < 2.4 * d0) problems.push(t('conn.warn.gauge', { gauge: num(p.gauge), min: num(2.4 * d0) }));
  if (onWeb) {
    // between the column flanges: the plate, and the beam flanges, must clear the flanges and their fillets
    const clear = cp.d - 2 * cp.tf - 2 * cp.r;
    if (p.width > clear + 1e-6) problems.push(t('conn.warn.web-plate-wide', { w: num(p.width), clear: num(clear) }));
    if (bp.bf > cp.d - 2 * cp.tf + 1e-6) problems.push(t('conn.warn.web-beam-wide', { bf: num(bp.bf), clear: num(cp.d - 2 * cp.tf) }));
  } else {
    if (p.gauge / 2 - d0 / 2 < cp.tw / 2 + cp.r) problems.push(t('conn.warn.holes-web'));
    if (p.gauge / 2 + d0 / 2 > cp.bf / 2) problems.push(t('conn.warn.holes-off-flange'));
    if (p.width > cp.bf + 1e-6) problems.push(t('conn.warn.plate-wide'));
  }
  for (let i = 0; i < rows; i++) {
    const z = zc + ((rows - 1) / 2 - i) * p.pitch;
    const inBeam = z > beamTop - bp.d && z < beamTop;
    if (inBeam && (Math.abs(z - (beamTop - bp.d / 2)) + d0 / 2 > bp.d / 2 - bp.tf - p.weld)) problems.push(t('conn.warn.row-near-flange', { row: i + 1 }));
    if (inBeam && p.gauge / 2 - d0 / 2 < bp.tw / 2 + p.weld) problems.push(t('conn.warn.gauge-tight'));
  }
  return {
    setbacks: [{ member: conn.beam, end: conn.end, by: faceOff + p.tp }],
    plates: [plate], holes, bolts,
    welds: [{ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.beam, plate.key], length: bp.perimeter, where: t('conn.weld.beam-end'), allRound: true }],
    problems: [...new Set(problems)],
  };
}

/**
 * Shear tab (single plate): beam web to column flange or web, square or skewed in plan, level or sloped.
 * The support face is the column face the beam's axis points at (flange outside, or web); the tab lies against the beam
 * web on its +u side, in the web's plane, from the support face out by `width`; the bolt row runs along the beam's own
 * vertical (v) at `eh` from the face, `rows` bolts `pitch` apart, centered on the beam depth plus `ev`.
 */
export function buildShearTab(conn, ctx) {
  const B = ctx.parts.get(conn.beam), C = ctx.parts.get(conn.column);
  const p = conn.params;
  if (!B || !C) return { problems: [t('conn.err.part-missing')] };
  if (B.profile.kind !== 'I' && B.profile.kind !== 'C') return { problems: [t('conn.err.st-beam')] };
  if (C.profile.kind !== 'I') return { problems: [t('conn.err.st-column-i')] };
  if (!isVertical(C.m)) return { problems: [t('conn.err.column-not-vertical')] };
  const N = B.m[conn.end], O = conn.end === 'start' ? B.m.end : B.m.start;
  const z0 = Math.min(C.m.start[2], C.m.end[2]), z1 = Math.max(C.m.start[2], C.m.end[2]);
  if (Math.abs(N[0] - C.m.start[0]) > TOL || Math.abs(N[1] - C.m.start[1]) > TOL || N[2] < z0 - TOL || N[2] > z1 + TOL) return { problems: [t('conn.err.beam-off-column')] };
  const dir = norm(sub(O, N));                             // along the beam, away from the column (3D: may slope)
  const awayH = norm([dir[0], dir[1], 0]);
  if (len(awayH) < 0.5) return { problems: [t('conn.err.st-vertical-beam')] };
  const fc = C.frame, bp = B.profile, cp = C.profile;
  const dv = dot(awayH, fc.v), du = dot(awayH, fc.u);
  const onWeb = Math.abs(du) > Math.abs(dv);
  const n = onWeb ? mul(fc.u, Math.sign(du)) : mul(fc.v, Math.sign(dv));      // the support face's outward normal
  const faceOff = onWeb ? cp.tw / 2 : cp.d / 2;
  const cosA = dot(dir, n);                                                    // how square the beam meets the face
  if (cosA < 0.5) return { problems: [t('conn.err.st-too-skewed')] };
  const problems = [];
  // the beam's own axes at this end (its frame), pointing away from the column
  const bf = B.frame;
  const U = bf.u, V = bf.v;                                  // the beam's own section axes (a channel's web stays on −u)
  // cut-back: every corner of the beam's end section clear of the face by gap
  const w2 = bp.width / 2, d2 = bp.depth / 2;
  let setback = 0;
  for (const [u, v] of [[-w2, -d2], [w2, -d2], [w2, d2], [-w2, d2]]) {
    const off = dot(add(mul(U, u), mul(V, v + B.voff)), n);
    setback = Math.max(setback, (faceOff + p.gap - off) / cosA);
  }
  const at = (s, u, v) => add(N, add(mul(dir, s), add(mul(U, u), mul(V, v + B.voff))));
  // the tab: against the web on +u, from the face (its nearest corner) out by width, centered on the bolt group
  const uWeb = bp.kind === 'C' ? -bp.bf / 2 + bp.tw : bp.tw / 2;              // the web face the tab bears on (a channel's inside)
  const uMid = uWeb + p.tp / 2;
  let sFace = 0;
  for (const u of [uWeb, uWeb + p.tp]) sFace = Math.max(sFace, (faceOff - dot(mul(U, u), n)) / cosA);
  const rows = Math.max(1, Math.round(p.rows));
  const vc = p.ev, len_ = (rows - 1) * p.pitch + 2 * p.edge;
  const sMid = sFace + p.width / 2, sBolt = sFace + p.eh;
  const c0 = at(sMid, uMid, vc - len_ / 2), c1 = at(sMid, uMid, vc + len_ / 2);
  // plate frame: length along the beam's v; its thickness (the plate section's v) along the beam's u
  const f0 = frame(c0, c1, 0);
  const rot = Math.atan2(-dot(U, f0.u), dot(U, f0.v)) * 180 / Math.PI;
  const plate = { key: conn.id + '.plate', role: t('conn.role.sheartab'), profileName: 'PL' + num(p.tp) + 'x' + num(p.width), material: p.plateGrade || 'A36',
    start: c0, end: c1, rotation: rot, position: 'middle', attachTo: conn.column };
  const holes = [], bolts = [];
  const grip = p.tp + bp.tw, boltLen = ceil5(grip + p.allowance);
  for (let i = 0; i < rows; i++) {
    const v = vc + ((rows - 1) / 2 - i) * p.pitch;
    holes.push({ target: conn.beam, world: at(sBolt, uWeb - bp.tw / 2, v), face: 'web', d: p.hole });
    holes.push({ target: plate.key, world: at(sBolt, uMid, v), face: 'plate', d: p.hole });
    bolts.push({ conn: conn.id, d: p.boltD, length: boltLen, grip, grade: p.grade, head: at(sBolt, uWeb + p.tp, v), axis: mul(U, -1), kind: 'BOLT' });
  }
  // checks (warnings; EN 1993-1-8 Table 3.3 minimums as for end plates)
  const d0 = p.hole;
  if (p.edge < 1.2 * d0) problems.push(t('conn.warn.e1', { e: num(p.edge), min: num(1.2 * d0) }));
  if (p.width - p.eh < 1.2 * d0) problems.push(t('conn.warn.st-e2', { e: num(p.width - p.eh), min: num(1.2 * d0) }));
  if (rows > 1 && p.pitch < 2.2 * d0) problems.push(t('conn.warn.pitch', { pitch: num(p.pitch), min: num(2.2 * d0) }));
  const clearDepth = bp.depth - 2 * (bp.tf + (bp.r || 0));
  if (Math.abs(vc) + len_ / 2 > clearDepth / 2 + 1e-6) problems.push(t('conn.warn.st-tab-deep', { l: num(len_), clear: num(clearDepth) }));
  if (p.eh - setback + sFace < 1.5 * d0) problems.push(t('conn.warn.st-beam-edge', { e: num(p.eh - (setback - sFace)) }));
  if (onWeb && bp.bf > cp.d - 2 * cp.tf + 1e-6) problems.push(t('conn.warn.web-beam-wide', { bf: num(bp.bf), clear: num(cp.d - 2 * cp.tf) }));
  if (!onWeb && p.tp > cp.bf) problems.push(t('conn.warn.plate-wide'));
  const skew = Math.acos(Math.min(1, dot(awayH, n))) * 180 / Math.PI, slope = Math.asin(Math.min(1, Math.abs(dir[2]))) * 180 / Math.PI;
  return {
    setbacks: [{ member: conn.beam, end: conn.end, by: setback }],
    plates: [plate], holes, bolts,
    welds: [{ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.column, plate.key], length: 2 * len_, where: t('conn.weld.tab') }],
    problems: [...new Set(problems)],
    info: { face: onWeb ? 'web' : 'flange', skew, slope },
  };
}

/** Column base plate with four anchor rods, and (0.4 D20) a grout gap, stiffeners, a shear lug and plate washers. */
export function buildBasePlate(conn, ctx) {
  const C = ctx.parts.get(conn.column);
  const p = conn.params;
  if (!C) return { problems: [t('conn.err.column-missing')] };
  if (!isVertical(C.m)) return { problems: [t('conn.err.bp-vertical')] };
  const bottomEnd = C.m.start[2] <= C.m.end[2] ? 'start' : 'end';
  const Bn = C.m[bottomEnd];
  const fc = C.frame;
  const cv = norm([fc.v[0], fc.v[1], 0]), cu = norm([fc.u[0], fc.u[1], 0]);
  const zc = Bn[2] + p.tp / 2;
  const s = add(add(Bn, mul(cv, -p.length / 2)), [0, 0, p.tp / 2]), e = add(add(Bn, mul(cv, p.length / 2)), [0, 0, p.tp / 2]);
  // plate x runs along the column depth; its u must be the column's u (or −u): rotation 0 gives u = Z × x
  const plate = { key: conn.id + '.plate', role: t('conn.role.baseplate'), profileName: 'PL' + num(p.tp) + 'x' + num(p.width), material: p.plateGrade || 'A36',
    start: [s[0], s[1], zc], end: [e[0], e[1], zc], rotation: 0, position: 'middle', attachTo: conn.column };
  const holes = [], bolts = [];
  const grout = p.grout || 0;
  const rodLen = p.embed + grout + p.tp + p.projection;
  for (const a of [-1, 1]) for (const b of [-1, 1]) {
    const pt = add(add(Bn, mul(cv, a * p.sx / 2)), mul(cu, b * p.sy / 2));
    holes.push({ target: plate.key, world: [pt[0], pt[1], zc], face: 'plate', d: p.hole });
    bolts.push({ conn: conn.id, d: p.rodD, length: rodLen, grip: p.tp, grade: p.grade, head: [pt[0], pt[1], Bn[2] + p.tp + p.projection], axis: [0, 0, -1], kind: 'ANCHORBOLT' });
  }
  const problems = [];
  const cp = C.profile, d0 = p.hole;
  const plates = [plate], welds = [{ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.column, plate.key], length: cp.perimeter, where: t('conn.weld.column-base'), allRound: true }];
  const top = Bn[2] + p.tp;
  // stiffeners: vertical plates on the base plate, from the column face out to the plate edge
  if (p.stiffeners === 2 || p.stiffeners === 4) {
    const hd = cp.depth / 2, hw = cp.kind === 'I' || cp.kind === 'C' ? cp.tw / 2 : cp.width / 2;
    const runs = [[cv, hd, p.length / 2], [mul(cv, -1), hd, p.length / 2]];
    if (p.stiffeners === 4) runs.push([cu, hw, p.width / 2], [mul(cu, -1), hw, p.width / 2]);
    runs.forEach(([dir, from, to], i) => {
      if (to - from < 20) { problems.push(t('conn.warn.stiff-room')); return; }
      const a = add(Bn, mul(dir, from)), b = add(Bn, mul(dir, to)), z = top + p.stiffH / 2;
      const st = { key: conn.id + '.st' + (i + 1), role: t('conn.role.stiffener'), profileName: 'PL' + num(p.stiffT) + 'x' + num(p.stiffH), material: p.plateGrade || 'A36',
        start: [a[0], a[1], z], end: [b[0], b[1], z], rotation: 90, position: 'middle', attachTo: conn.column };
      plates.push(st);
      welds.push({ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.column, st.key], length: 2 * (p.stiffH + (to - from)), where: t('conn.weld.stiffener') });
    });
  } else if (p.stiffeners) problems.push(t('conn.warn.stiff-count'));
  // shear lug: a vertical plate under the base plate, in line with the column depth
  if (p.lugD > 0) {
    const a = add(Bn, mul(cv, -p.lugW / 2)), b = add(Bn, mul(cv, p.lugW / 2)), z = Bn[2] - p.lugD / 2;
    const lug = { key: conn.id + '.lug', role: t('conn.role.lug'), profileName: 'PL' + num(p.lugT) + 'x' + num(p.lugD), material: p.plateGrade || 'A36',
      start: [a[0], a[1], z], end: [b[0], b[1], z], rotation: 90, position: 'middle', attachTo: conn.column };
    plates.push(lug);
    welds.push({ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.column, lug.key], length: 2 * (p.lugW + p.lugT), where: t('conn.weld.lug'), allRound: true });
    if (p.lugD <= grout + 1e-6) problems.push(t('conn.warn.lug-grout', { d: num(p.lugD), g: num(grout) }));
    if (p.lugW > p.length || p.lugT > p.width) problems.push(t('conn.warn.lug-big'));
  }
  // plate washers (loose: shipped with the column, not welded — DG1 2.6)
  if (p.washers) {
    const row = dg1Row(p.rodD);
    const ws = p.washerSize || row?.washer, wt = p.washerT || row?.washerT;
    if (!ws || !wt) problems.push(t('conn.warn.washer-size'));
    else {
      bolts.forEach((bt, i) => {
        const c0 = [bt.head[0], bt.head[1]], z = top + wt / 2;
        const w = { key: conn.id + '.w' + (i + 1), role: t('conn.role.washer'), profileName: 'PL' + num(wt) + 'x' + num(ws), material: p.plateGrade || 'A36',
          start: [c0[0] - cv[0] * ws / 2, c0[1] - cv[1] * ws / 2, z], end: [c0[0] + cv[0] * ws / 2, c0[1] + cv[1] * ws / 2, z], rotation: 0, position: 'middle', attachTo: conn.column, loose: true };
        plates.push(w);
        holes.push({ target: w.key, world: [c0[0], c0[1], z], face: 'plate', d: p.rodD + 25.4 / 16 });
      });
      if (row && !p.washerSize && ws < p.hole + 1e-6) problems.push(t('conn.warn.washer-hole'));
      if (p.projection < wt + p.rodD) problems.push(t('conn.warn.washer-projection', { min: num(wt + p.rodD) }));
    }
  }
  if ((p.length - p.sx) / 2 < 1.2 * d0 || (p.width - p.sy) / 2 < 1.2 * d0) problems.push(t('conn.warn.rod-edge', { min: num(1.2 * d0) }));
  if (p.sx / 2 - d0 / 2 < cp.depth / 2 && p.sy / 2 - d0 / 2 < cp.width / 2) problems.push(t('conn.warn.rods-inside'));
  if (p.length < cp.depth || p.width < cp.width) problems.push(t('conn.warn.plate-small'));
  return { setbacks: [{ member: conn.column, end: bottomEnd, by: p.tp }], plates, holes, bolts, welds, problems: [...new Set(problems)] };
}

/** Bolted splice with flange and web cover plates (0.4 D21). */
export function buildSplice(conn, ctx) {
  const A = ctx.parts.get(conn.a), B = ctx.parts.get(conn.b);
  const p = conn.params;
  if (!A || !B) return { problems: [t('conn.err.part-missing')] };
  if (A.profile.kind !== 'I' || B.profile.kind !== 'I') return { problems: [t('conn.err.sp-i')] };
  const ap = A.profile, bpf = B.profile;
  if (Math.abs(ap.d - bpf.d) > 1 || Math.abs(ap.bf - bpf.bf) > 1) return { problems: [t('conn.err.sp-size')] };
  const J = A.m[conn.aEnd];
  const ax = A.frame.x, out_ = conn.aEnd === 'end' ? ax : mul(ax, -1);          // from a, across the joint, into b
  const bAx = B.frame.x;
  if (Math.abs(dot(ax, bAx)) < 0.9999) return { problems: [t('conn.err.sp-line')] };
  const bNear = dot(sub(B.m.start, J), out_) < dot(sub(B.m.end, J), out_) ? 'start' : 'end';
  const dJ = sub(B.m[bNear], J);
  if (len(sub(dJ, mul(ax, dot(dJ, ax)))) > TOL || len(dJ) > 50) return { problems: [t('conn.err.sp-line')] };
  const problems = [];
  // b turned against a? (a channel's web side, a beam's top) — the section axes must agree
  if (dot(A.frame.v, B.frame.v) < 0.9999 || Math.abs(A.voff - B.voff) > 0.5) problems.push(t('conn.warn.sp-turned'));
  const U = A.frame.u, V = A.frame.v;
  const mid = add(J, mul(out_, dot(dJ, out_) / 2));                                 // the middle of the joint
  const W = (s, u, v) => add(mid, add(mul(out_, s), add(mul(U, u), mul(V, v + A.voff))));
  const d2 = ap.d / 2, gap = p.jointGap;
  const setbacks = [{ member: conn.a, end: conn.aEnd, by: Math.max(0, gap / 2 - dot(dJ, out_) / 2) }, { member: conn.b, end: bNear, by: Math.max(0, gap / 2 - dot(dJ, out_) / 2) }];
  const plates = [], holes = [], bolts = [];
  const plateAlong = (key, role, t_, width, length, u, v, Wdir) => {
    const c0 = W(-length / 2, u, v), c1 = W(length / 2, u, v);
    const f0 = frame(c0, c1, 0);
    const rot = Math.atan2(dot(Wdir, f0.v), dot(Wdir, f0.u)) * 180 / Math.PI;
    const pl = { key: conn.id + '.' + key, role, profileName: 'PL' + num(t_) + 'x' + num(width), material: p.plateGrade || 'A36', start: c0, end: c1, rotation: rot, position: 'middle', attachTo: conn.a };
    plates.push(pl);
    return pl;
  };
  const faceOf = (part, normal) => (dot(normal, part.frame.v) > 0 ? 'top' : 'bottom');
  // flange plates: outside each flange, as wide as the flange, two gauge lines of bolts
  const nF = Math.max(1, Math.round(p.flangeRows));
  const LF = gap + 2 * (2 * p.flangeEdge + (nF - 1) * p.flangePitch);
  const gF = p.flangeGauge || ap.bf - 80;
  for (const sg of [1, -1]) {
    const pl = plateAlong(sg > 0 ? 'ft' : 'fb', t(sg > 0 ? 'conn.role.sp-flange-top' : 'conn.role.sp-flange-bottom'), p.flangeT, ap.bf, LF, 0, sg * (d2 + p.flangeT / 2), U);
    const grip = ap.tf + p.flangeT, bl = ceil5(grip + p.allowance);
    for (const side of [-1, 1]) for (let i = 0; i < nF; i++) for (const gu of [-gF / 2, gF / 2]) {
      const sx = side * (gap / 2 + p.flangeEdge + i * p.flangePitch);
      const memberId = side < 0 ? conn.a : conn.b, part = side < 0 ? A : B;
      holes.push({ target: memberId, world: W(sx, gu, sg * (d2 - ap.tf / 2)), face: faceOf(part, mul(V, sg)), d: p.hole });
      holes.push({ target: pl.key, world: W(sx, gu, sg * (d2 + p.flangeT / 2)), face: 'plate', d: p.hole });
      bolts.push({ conn: conn.id, d: p.boltD, length: bl, grip, grade: p.grade, head: W(sx, gu, sg * (d2 + p.flangeT)), axis: mul(V, -sg), kind: 'BOLT' });
    }
  }
  // web plates: both sides of the web, between the fillets
  const clear = ap.d - 2 * (ap.tf + (ap.r || 0));
  const nW = Math.max(1, Math.round(p.webRows)), cW = Math.max(1, Math.round(p.webCols));
  const HW = p.webH || Math.floor((clear - 20) / 5) * 5;
  const LW = gap + 2 * (2 * p.webEdge + (cW - 1) * p.webPitchX);
  const wps = [];
  for (const sg of [1, -1]) wps.push(plateAlong(sg > 0 ? 'w1' : 'w2', t('conn.role.sp-web'), p.webT, HW, LW, sg * (ap.tw / 2 + p.webT / 2), 0, V));
  const gripW = ap.tw + 2 * p.webT, blW = ceil5(gripW + p.allowance);
  for (const side of [-1, 1]) for (let j = 0; j < cW; j++) for (let i = 0; i < nW; i++) {
    const sx = side * (gap / 2 + p.webEdge + j * p.webPitchX), v = ((nW - 1) / 2 - i) * p.webPitch;
    holes.push({ target: side < 0 ? conn.a : conn.b, world: W(sx, 0, v), face: 'web', d: p.hole });
    for (const [k, pl] of wps.entries()) holes.push({ target: pl.key, world: W(sx, (k === 0 ? 1 : -1) * (ap.tw / 2 + p.webT / 2), v), face: 'plate', d: p.hole });
    bolts.push({ conn: conn.id, d: p.boltD, length: blW, grip: gripW, grade: p.grade, head: W(sx, ap.tw / 2 + p.webT, v), axis: mul(U, -1), kind: 'BOLT' });
  }
  // checks (warnings): EN 1993-1-8 Table 3.3 minimums, plates within the member
  const d0 = p.hole;
  for (const [e, name] of [[p.flangeEdge, 'flangeEdge'], [p.webEdge, 'webEdge']]) if (e < 1.2 * d0) problems.push(t('conn.warn.sp-edge', { name: t(PARAM_LABEL_KEYS[name]), e: num(e), min: num(1.2 * d0) }));
  if (nF > 1 && p.flangePitch < 2.2 * d0) problems.push(t('conn.warn.pitch', { pitch: num(p.flangePitch), min: num(2.2 * d0) }));
  if (nW > 1 && p.webPitch < 2.4 * d0) problems.push(t('conn.warn.pitch', { pitch: num(p.webPitch), min: num(2.4 * d0) }));
  if (gF < 2.4 * d0) problems.push(t('conn.warn.sp-gauge', { g: num(gF), min: num(2.4 * d0) }));
  if ((ap.bf - gF) / 2 < 1.2 * d0) problems.push(t('conn.warn.sp-gauge-edge', { e: num((ap.bf - gF) / 2), min: num(1.2 * d0) }));
  if (gF / 2 - d0 / 2 < ap.tw / 2 + (ap.r || 0)) problems.push(t('conn.warn.sp-gauge-web'));
  if (HW > clear + 1e-6) problems.push(t('conn.warn.sp-web-deep', { h: num(HW), clear: num(clear) }));
  if ((nW - 1) * p.webPitch + 2 * 1.2 * d0 > HW + 1e-6) problems.push(t('conn.warn.sp-web-rows'));
  return { setbacks, plates, holes, bolts, welds: [], problems: [...new Set(problems)] };
}

/**
 * Brace gusset (0.4 D22). ctx: { parts (Map member id → draft), conns (the model's connections, for a base plate under
 * the support) }.
 */
export function buildGusset(conn, ctx) {
  const B = ctx.parts.get(conn.brace), S = ctx.parts.get(conn.support);
  const p = conn.params;
  if (!B || !S) return { problems: [t('conn.err.part-missing')] };
  const bp = B.profile, kind = bp.kind;
  if (!['L', 'PL', 'RHS', 'CHS'].includes(kind)) return { problems: [t('conn.err.gu-brace')] };
  const N = B.m[conn.end];
  if (segDist(N, S.m.start, S.m.end) > TOL) return { problems: [t('conn.err.gu-off')] };
  const d = norm(sub(conn.end === 'start' ? B.m.end : B.m.start, N));      // from the joint into the brace
  const sx = S.frame.x;
  const cr = [d[1] * sx[2] - d[2] * sx[1], d[2] * sx[0] - d[0] * sx[2], d[0] * sx[1] - d[1] * sx[0]];
  if (len(cr) < 0.2) return { problems: [t('conn.err.gu-along')] };
  const nP = norm(cr);                                                     // the gusset's normal
  let wv = norm([nP[1] * sx[2] - nP[2] * sx[1], nP[2] * sx[0] - nP[0] * sx[2], nP[0] * sx[1] - nP[1] * sx[0]]);
  if (dot(wv, d) < 0) wv = mul(wv, -1);                                    // across the gusset, away from the support
  const U = B.frame.u, V = B.frame.v, bv = B.voff;
  const problems = [];
  const tg = p.tp;
  // how the brace sits on the gusset: o = the gusset's mid-plane, as an offset along nP from the joint
  let mode, o = 0, hole = null, legT = 0;
  const at = (s_, u, v) => add(N, add(mul(d, s_), add(mul(U, u), mul(V, v + bv))));
  if (kind === 'RHS' || kind === 'CHS') mode = 'knife';
  else if (kind === 'PL') {
    if (Math.abs(dot(V, nP)) < 0.99) return { problems: [t('conn.err.gu-turn')] };
    mode = 'bolt'; legT = bp.t;
    o = dot(V, nP) * (-bp.t / 2 + bv - tg / 2);                           // the gusset against the flat's −v face
    hole = { face: 'plate', u: p.braceGauge || 0, v: 0 };
  } else {
    const leg1 = Math.abs(dot(V, nP)) > 0.99, leg2 = Math.abs(dot(U, nP)) > 0.99;
    if (!leg1 && !leg2) return { problems: [t('conn.err.gu-turn')] };
    mode = 'bolt'; legT = bp.t;
    const g = p.braceGauge || bp.b / 2, h = bp.b / 2;
    // the gusset against the back of the leg lying in its plane: the leg along u (back face v = −b/2) or along v (u = −b/2)
    if (leg1) { o = dot(V, nP) * (-h + bv - tg / 2); hole = { face: 'bottom', u: -h + g, v: -h + bp.t / 2 }; }
    else { o = dot(U, nP) * (-h - tg / 2) + dot(V, nP) * bv; hole = { face: 'web', u: -h + bp.t / 2, v: -h + g }; }
    if (bp.b - g < 1.2 * p.hole) problems.push(t('conn.warn.gu-toe', { e: num(bp.b - g), min: num(1.2 * p.hole) }));
    if (g - p.hole / 2 < bp.t) problems.push(t('conn.warn.gu-heel'));
  }
  // cut back: the brace's end corners clear of every member at the joint (beside it, or past its end) and of a base plate
  const w2 = bp.width / 2, h2 = bp.depth / 2;
  const corners = [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]].map(([u, v]) => add(mul(U, u), mul(V, v + bv)));
  const others = [...ctx.parts.values()].filter((x) => x.m.id !== B.m.id && segDist(N, x.m.start, x.m.end) <= TOL);
  let setback = 0;
  const need = (n, off) => { const dn = dot(d, n); if (dn < 0.05) return Infinity; return Math.max(0, ...corners.map((c) => (off + p.braceGap - dot(c, n)) / dn)); };
  for (const X of others) {
    const xa = X.frame.x, nl = sub(d, mul(xa, dot(d, xa)));
    const xc = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => add(mul(X.frame.u, a * X.profile.width / 2), mul(X.frame.v, b * X.profile.depth / 2 + X.voff)));
    let sX = Infinity;
    if (len(nl) > 1e-6) { const n = norm(nl); sX = need(n, Math.max(...xc.map((c) => dot(c, n)))); }
    for (const e of ['start', 'end']) {                                      // or past the member's end, if it ends here
      if (len(sub(X.m[e], N)) > TOL) continue;
      const ax = e === 'end' ? xa : mul(xa, -1);
      sX = Math.min(sX, need(ax, 0));
    }
    if (Number.isFinite(sX)) setback = Math.max(setback, sX);
  }
  const base = (ctx.conns || []).find((c) => c.type === 'baseplate' && c.column === S.m.id);
  const sBottom = S.m.start[2] <= S.m.end[2] ? 'start' : 'end';
  const onBase = base && len(sub(S.m[sBottom], N)) <= TOL;
  if (onBase) setback = Math.max(setback, need([0, 0, 1], base.params.tp));
  const setbacks = [{ member: conn.brace, end: conn.end, by: setback }];
  // in the gusset's own coordinates: a along the support, w across (from the support's axis)
  const G = (P) => [dot(sub(P, N), sx), dot(sub(P, N), wv)];
  const onPlane = (P) => add(P, mul(nP, o - dot(sub(P, N), nP)));
  const plates = [], holes = [], bolts = [], welds = [];
  const pts = [];
  const gkey = conn.id + '.gusset';
  if (mode === 'bolt') {
    const n = Math.max(1, Math.round(p.bolts));
    const away = Math.sign(o - dot(at(0, hole.u, hole.v), nP)) || 1;     // from the brace toward the gusset
    const grip = legT + tg, bl = ceil5(grip + p.allowance);
    for (let k = 0; k < n; k++) {
      const sK = setback + p.braceEdge + k * p.bracePitch;
      const P = at(sK, hole.u, hole.v), Q = onPlane(P);
      holes.push({ target: conn.brace, world: P, face: hole.face, d: p.hole });
      holes.push({ target: gkey, world: Q, face: 'plate', d: p.hole });
      bolts.push({ conn: conn.id, d: p.boltD, length: bl, grip, grade: p.grade, head: add(Q, mul(nP, -away * (tg / 2 + legT))), axis: mul(nP, away), kind: 'BOLT' });
      pts.push(G(Q));
    }
    if (p.braceEdge < 1.2 * p.hole) problems.push(t('conn.warn.e1', { e: num(p.braceEdge), min: num(1.2 * p.hole) }));
    if (n > 1 && p.bracePitch < 2.2 * p.hole) problems.push(t('conn.warn.pitch', { pitch: num(p.bracePitch), min: num(2.2 * p.hole) }));
  } else {
    for (const s_ of [setback, setback + p.lap]) for (const c of corners) pts.push(G(onPlane(add(add(N, mul(d, s_)), c))));
    welds.push({ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.brace, gkey], length: 4 * p.lap, where: t('conn.weld.knife') });
  }
  // the plate: from the support's face out past the bolts (or the lap), along the support as far as they need
  const sc = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => add(mul(S.frame.u, a * S.profile.width / 2), mul(S.frame.v, b * S.profile.depth / 2 + S.voff)));
  const w0 = Math.max(...sc.map((c) => dot(c, wv)));
  // margin round what the gusset carries: the bolts' end distance; for a tube, room for the welds where it leaves the slot
  const mg = mode === 'bolt' ? p.braceEdge : 2 * p.weld + 10;
  let a0 = Math.min(...pts.map((q) => q[0])) - mg, a1 = Math.max(...pts.map((q) => q[0])) + mg;
  const w1 = Math.max(...pts.map((q) => q[1])) + mg;
  const need0 = Math.min(...pts.map((q) => q[0])), need1 = Math.max(...pts.map((q) => q[0]));
  // stay on the support (above a base plate), and clear of a member crossing the joint (a beam over the gusset)
  const sA = [dot(sub(S.m.start, N), sx), dot(sub(S.m.end, N), sx)];
  let lo = Math.min(...sA), hi = Math.max(...sA);
  if (onBase) { if (sBottom === 'start') lo = Math.max(lo, dot(sub(S.m.start, N), sx) + base.params.tp); else hi = Math.min(hi, dot(sub(S.m.end, N), sx) - base.params.tp); }
  for (const X of others) {
    if (X === S || Math.abs(dot(X.frame.x, wv)) < 0.5) continue;
    const xs = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([a, b]) => dot(add(add(sub(X.m.start, N), mul(X.frame.u, a * X.profile.width / 2)), mul(X.frame.v, b * X.profile.depth / 2 + X.voff)), sx));
    const xlo = Math.min(...xs), xhi = Math.max(...xs);
    if (need1 <= xlo) hi = Math.min(hi, xlo); else if (need0 >= xhi) lo = Math.max(lo, xhi);
  }
  // on a base plate the gusset sits down on it (welded to it as well as to the column)
  if (onBase && sBottom === 'start' && dot(d, sx) > 0) a0 = lo;
  if (onBase && sBottom === 'end' && dot(d, sx) < 0) a1 = hi;
  a0 = Math.max(a0, lo); a1 = Math.min(a1, hi);
  const room = mode === 'bolt' ? Math.min(p.braceEdge, 1.2 * p.hole) : p.weld;
  if (a0 > need0 - room + 1e-6 || a1 < need1 + room - 1e-6 || a1 - a0 < 20) problems.push(t('conn.warn.gu-fit'));
  if (a1 - a0 < 20) return { problems: [...problems, t('conn.err.gu-room')] };
  const wm = (w0 + w1) / 2, Qa = (a) => add(N, add(mul(nP, o), add(mul(sx, a), mul(wv, wm))));
  const c0 = Qa(a0), c1 = Qa(a1), f0 = frame(c0, c1, 0);
  const rot = Math.atan2(dot(wv, f0.v), dot(wv, f0.u)) * 180 / Math.PI;
  plates.push({ key: gkey, role: t('conn.role.gusset'), profileName: 'PL' + num(tg) + 'x' + num(Math.round(w1 - w0)), material: p.plateGrade || 'A36', start: c0, end: c1, rotation: rot, position: 'middle', attachTo: conn.support });
  welds.unshift({ conn: conn.id, kind: 'fillet', size: p.weld, between: [conn.support, gkey], length: 2 * (a1 - a0), where: t('conn.weld.gusset') });
  return { setbacks, plates, holes, bolts, welds, problems: [...new Set(problems)], info: { mode, setback } };
}

// ---- mitre (0.7.1 71.20) ----
const otherEnd = (e) => (e === 'start' ? 'end' : 'start');
const MITRE_MIN_ANGLE = 15;   // degrees between the two members; sharper is refused (the cut would run along the member)
/**
 * Where two I-shaped members meet end to end at an angle: [{ a, aEnd, b, bEnd, angle }] — a's end within 1 mm of b's end (their
 * reference lines share the node), not in line, among `ids` (all members if null). The angle is between the two members (90 = square).
 */
export function findMitres(state, ids = null) {
  const ms = state.members.filter((m) => m.type !== 'plate' && (!ids || ids.includes(m.id)) && getProfile(m.profile, state.profiles)?.kind === 'I');
  const out = [];
  for (let i = 0; i < ms.length; i++) for (let j = i + 1; j < ms.length; j++) {
    const A = ms[i], B = ms[j];
    for (const aEnd of ['start', 'end']) for (const bEnd of ['start', 'end']) {
      if (len(sub(A[aEnd], B[bEnd])) > TOL) continue;
      const eA = norm(sub(A[otherEnd(aEnd)], A[aEnd])), eB = norm(sub(B[otherEnd(bEnd)], B[bEnd]));
      const c = dot(eA, eB);
      if (c < -0.9998) continue;                                             // in line: a splice, not a mitre
      out.push({ a: A.id, aEnd, b: B.id, bEnd, angle: Math.acos(Math.max(-1, Math.min(1, c))) * 180 / Math.PI });
    }
  }
  return out;
}
/** Free mitre joints (neither end has a mitre yet) among `ids`. */
export function freeMitres(state, ids = null) {
  const taken = new Set(state.connections.filter((c) => c.type === 'mitre').flatMap((c) => [c.a + ':' + c.aEnd, c.b + ':' + c.bEnd]));
  return findMitres(state, ids).filter((j) => !taken.has(j.a + ':' + j.aEnd) && !taken.has(j.b + ':' + j.bEnd));
}
/** Free mitre joints like the given mitre (same two profiles, the same angle within half a degree). */
export function similarMitres(state, conn) {
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const src = findMitres(state, [conn.a, conn.b]).find((j) => j.a === conn.a && j.aEnd === conn.aEnd && j.b === conn.b && j.bEnd === conn.bEnd)
    || findMitres(state, [conn.a, conn.b]).find((j) => j.b === conn.a && j.a === conn.b);
  if (!src) return [];
  const key = (j) => [byId.get(j.a).profile.toUpperCase(), byId.get(j.b).profile.toUpperCase()].sort().join('|');
  const k = key(src);
  return freeMitres(state).filter((j) => key(j) === k && Math.abs(j.angle - src.angle) <= 0.5);
}

/**
 * Mitre (0.7.1 71.20). ctx: { parts }. The section center lines of the two members must meet (within 1 mm; members on one
 * node meet there, or wherever their offsets take the center lines in the plane they share). n, the mitre plane's normal, points
 * from a's side to b's; `out` runs in the plane toward the outside corner; `w` across (the joint plane's normal).
 * Returns the usual connection result with `planes` [{ member, end, n (outward), p }] in place of setbacks.
 */
export function buildMitre(conn, ctx) {
  const A = ctx.parts.get(conn.a), B = ctx.parts.get(conn.b);
  const p = conn.params;
  if (!A || !B) return { problems: [t('conn.err.part-missing')] };
  if (A.profile.kind !== 'I' || B.profile.kind !== 'I') return { problems: [t('conn.err.mi-i')] };
  // the section center lines, and where they come closest
  const oA = add(A.frame.o, mul(A.frame.v, A.voff)), oB = add(B.frame.o, mul(B.frame.v, B.voff));
  const xA = A.frame.x, xB = B.frame.x;
  const bxd = dot(xA, xB), den = 1 - bxd * bxd;
  if (den < 1e-8) return { problems: [t('conn.err.mi-line')] };
  const r = sub(oA, oB), da = dot(xA, r), db = dot(xB, r);
  const sA = (bxd * db - da) / den, sB = (db - bxd * da) / den;
  const PA = add(oA, mul(xA, sA)), PB = add(oB, mul(xB, sB));
  if (len(sub(PA, PB)) > TOL) return { problems: [t('conn.err.mi-meet', { d: num(len(sub(PA, PB))) })] };
  const J = mul(add(PA, PB), 0.5);
  // each member must reach the joint with the end named (its far end on the other side)
  const reach = 2 * Math.max(A.profile.depth, B.profile.depth) + 50;
  const eA = conn.aEnd === 'end' ? mul(xA, -1) : xA, eB = conn.bEnd === 'end' ? mul(xB, -1) : xB;   // from the joint into each member
  for (const [P, e, end, o] of [[A, eA, conn.aEnd, oA], [B, eB, conn.bEnd, oB]]) {
    const near_ = add(o, mul(P.frame.x, end === 'start' ? 0 : P.frame.len));
    const far_ = add(o, mul(P.frame.x, end === 'start' ? P.frame.len : 0));
    if (len(sub(near_, J)) > reach || dot(sub(far_, J), e) <= 0) return { problems: [t('conn.err.mi-meet', { d: num(len(sub(near_, J))) })] };
  }
  const cosT = dot(eA, eB), angle = Math.acos(Math.max(-1, Math.min(1, cosT))) * 180 / Math.PI;
  if (cosT < -0.9998) return { problems: [t('conn.err.mi-line')] };
  if (angle < MITRE_MIN_ANGLE) return { problems: [t('conn.err.mi-sharp', { a: num(angle), min: MITRE_MIN_ANGLE })] };
  const n = norm(sub(eB, eA)), out = norm(mul(add(eA, eB), -1)), w = norm(cross(eA, eB));
  const problems = [];
  const inWebPlane = (P) => Math.abs(dot(w, P.frame.u)) > 0.9999;
  const square = (P) => inWebPlane(P) || Math.abs(dot(w, P.frame.v)) > 0.9999;
  if (!square(A) || !square(B)) problems.push(t('conn.warn.mi-twisted'));
  const ap = A.profile, bp = B.profile;
  if (Math.abs(ap.d - bp.d) > 1 || Math.abs(ap.bf - bp.bf) > 1) problems.push(t('conn.warn.mi-size', { a: ap.name, b: bp.name }));
  const plates = p.plates ? 1 : 0;
  if (plates && !(inWebPlane(A) && inWebPlane(B))) return { problems: [...problems, t('conn.err.mi-plates-web')] };
  const off = p.mGap / 2 + (plates ? p.tp : 0);
  const faceA = sub(J, mul(n, off)), faceB = add(J, mul(n, off));
  const planes = [{ member: conn.a, end: conn.aEnd, n, p: faceA }, { member: conn.b, end: conn.bEnd, n: mul(n, -1), p: faceB }];
  // a member's section edge lines (u, v from its center) cut by its face: [along out, across w] from the face's point
  const cutAt = (P, face, nn, u, v) => {
    const Q = add(add(P.frame.o, mul(P.frame.u, u)), mul(P.frame.v, v + P.voff));
    const k = dot(nn, sub(face, Q)) / dot(nn, P.frame.x);
    const X = sub(add(Q, mul(P.frame.x, k)), face);
    return [dot(X, out), dot(X, w)];
  };
  const corners = (P) => { const u2 = P.profile.width / 2, v2 = P.profile.depth / 2; return [[-u2, -v2], [u2, -v2], [u2, v2], [-u2, v2]]; };
  const cutA = corners(A).map(([u, v]) => cutAt(A, faceA, n, u, v)), cutB = corners(B).map(([u, v]) => cutAt(B, faceB, n, u, v));
  const all = [...cutA, ...cutB];
  const o0 = Math.min(...all.map((q) => q[0])), o1 = Math.max(...all.map((q) => q[0]));
  const w0 = Math.min(...all.map((q) => q[1])), w1 = Math.max(...all.map((q) => q[1]));
  const wm = (w0 + w1) / 2;
  const out_ = { setbacks: [], planes, plates: [], holes: [], bolts: [], welds: [], problems, info: { angle, cut: (180 - angle) / 2, J, n, out, w } };
  const d0 = p.hole;
  if (plates) {
    const width = p.mWidth || Math.round(w1 - w0);
    const s0 = o0 - p.extInner, s1 = o1 + p.extOuter;
    const plate = (key, member, face, toward) => {
      const c = add(add(face, mul(n, toward * p.tp / 2)), mul(w, wm));
      const st = add(c, mul(out, s0)), en = add(c, mul(out, s1));
      const f0 = frame(st, en, 0);
      const rot = Math.atan2(-dot(n, f0.u), dot(n, f0.v)) * 180 / Math.PI;
      return { key: conn.id + '.' + key, role: t('conn.role.mitre-plate'), profileName: 'PL' + num(p.tp) + 'x' + num(width), material: p.plateGrade || 'A36',
        start: st, end: en, rotation: rot, position: 'middle', attachTo: member };
    };
    const pa = plate('pa', conn.a, faceA, 1), pb = plate('pb', conn.b, faceB, -1);
    out_.plates.push(pa, pb);
    // bolt rows along `out`: between the flanges (spread, or at a pitch about the middle), and one in the outside extension
    const inner = (P, face, nn) => [-1, 1].map((sg) => cutAt(P, face, nn, 0, sg * (P.profile.depth / 2 - P.profile.tf))[0]);
    const ia = inner(A, faceA, n), ib = inner(B, faceB, mul(n, -1));
    const c0 = Math.max(Math.min(...ia), Math.min(...ib)), c1 = Math.min(Math.max(...ia), Math.max(...ib));   // clear of both members' flanges
    const rows = Math.max(1, Math.round(p.rows));
    const ts = [];
    if (p.mPitch > 0) for (let i = 0; i < rows; i++) ts.push((c0 + c1) / 2 + ((rows - 1) / 2 - i) * p.mPitch);
    else {
      const a = c0 + p.weld + d0, b = c1 - p.weld - d0;
      for (let i = 0; i < rows; i++) ts.push(rows === 1 ? (a + b) / 2 : a + i * (b - a) / (rows - 1));
    }
    if (p.outRow) ts.push(o1 + p.extOuter / 2);
    const g = p.mGauge || Math.max(Math.ceil(2.4 * d0 / 5) * 5, Math.round(width / 2 / 5) * 5);
    const grip = 2 * p.tp + p.mGap, boltLen = ceil5(grip + p.allowance);
    for (const tt of ts) for (const sg of [1, -1]) {
      const M = add(J, add(mul(out, tt), mul(w, wm + sg * g / 2)));
      out_.holes.push({ target: pa.key, world: sub(M, mul(n, p.mGap / 2 + p.tp / 2)), face: 'plate', d: d0 });
      out_.holes.push({ target: pb.key, world: add(M, mul(n, p.mGap / 2 + p.tp / 2)), face: 'plate', d: d0 });
      out_.bolts.push({ conn: conn.id, d: p.boltD, length: boltLen, grip, grade: p.grade, head: sub(M, mul(n, p.mGap / 2 + p.tp)), axis: n, kind: 'BOLT' });
    }
    for (const [P, key] of [[A, pa.key], [B, pb.key]]) {
      const cosX = Math.abs(dot(n, P.frame.x));
      out_.welds.push({ conn: conn.id, kind: 'fillet', size: p.weld, between: [P.m.id, key], length: P.profile.perimeter / cosX, where: t('conn.weld.mitre'), allRound: true });
    }
    // checks (warnings; EN 1993-1-8 Table 3.3 minimums as for end plates)
    const e2 = (width - g) / 2;
    if (e2 < 1.2 * d0) problems.push(t('conn.warn.e2', { e: num(e2), min: num(1.2 * d0) }));
    if (g < 2.4 * d0) problems.push(t('conn.warn.gauge', { gauge: num(g), min: num(2.4 * d0) }));
    const sorted = [...ts].sort((x, y) => x - y);
    for (let i = 1; i < sorted.length; i++) if (sorted[i] - sorted[i - 1] < 2.2 * d0 - 1e-6) { problems.push(t('conn.warn.pitch', { pitch: num(sorted[i] - sorted[i - 1]), min: num(2.2 * d0) })); break; }
    const e1 = Math.min(sorted[0] - s0, s1 - sorted[sorted.length - 1]);
    if (e1 < 1.2 * d0) problems.push(t('conn.warn.e1', { e: num(e1), min: num(1.2 * d0) }));
    const between = ts.slice(0, rows);
    if (between.some((tt) => tt - d0 / 2 < c0 + p.weld - 1e-6 || tt + d0 / 2 > c1 - p.weld + 1e-6)) problems.push(t('conn.warn.mi-row-flange'));
    if (g / 2 - d0 / 2 < Math.max(ap.tw, bp.tw) / 2 + p.weld) problems.push(t('conn.warn.gauge-tight'));
    if (p.outRow && p.extOuter < 2 * 1.2 * d0) problems.push(t('conn.warn.mi-out-row', { min: num(2 * 1.2 * d0) }));
    if (width < Math.max(ap.bf, bp.bf) - 1e-6) problems.push(t('conn.warn.mi-plate-narrow'));
  }
  // web stiffeners: a pair in each member, square to it, stiffDist past the far end of its cut
  if (p.stiffs) {
    for (const [P, e, face, nn, tag, end, o] of [[A, eA, faceA, n, 'a', conn.aEnd, oA], [B, eB, faceB, mul(n, -1), 'b', conn.bEnd, oB]]) {
      const pr = P.profile;
      const far = Math.max(...corners(P).map(([u, v]) => {
        const Q = add(add(P.frame.o, mul(P.frame.u, u)), mul(P.frame.v, v + P.voff));
        const k = dot(nn, sub(face, Q)) / dot(nn, P.frame.x);
        return dot(sub(add(Q, mul(P.frame.x, k)), J), e);
      }));
      const at = far + p.stiffDist + p.stiffT / 2;
      const reachFar = dot(sub(add(o, mul(P.frame.x, end === 'start' ? P.frame.len : 0)), J), e);   // the member's other end, from the joint
      if (at + p.stiffT / 2 > reachFar - 1e-6) { problems.push(t('conn.warn.mi-stiff-room')); continue; }
      const hS = pr.d - 2 * pr.tf, wS = (pr.bf - pr.tw) / 2;
      const C = add(J, mul(e, at));
      for (const sg of [1, -1]) {
        const c = add(C, mul(P.frame.u, sg * (pr.tw / 2 + wS / 2)));
        const st = sub(c, mul(P.frame.v, hS / 2)), en = add(c, mul(P.frame.v, hS / 2));
        const f0 = frame(st, en, 0);
        const rot = Math.atan2(-dot(e, f0.u), dot(e, f0.v)) * 180 / Math.PI;
        const key = conn.id + '.s' + tag + (sg > 0 ? '1' : '2');
        out_.plates.push({ key, role: t('conn.role.mitre-stiffener'), profileName: 'PL' + num(p.stiffT) + 'x' + num(wS), material: p.plateGrade || 'A36',
          start: st, end: en, rotation: rot, position: 'middle', attachTo: P.m.id });
        out_.welds.push({ conn: conn.id, kind: 'fillet', size: Math.min(p.weld, p.stiffT), between: [P.m.id, key], length: 2 * hS + 4 * wS, where: t('conn.weld.mitre-stiffener') });
      }
    }
  }
  out_.problems = [...new Set(problems)];
  return out_;
}

const num = (v) => String(Number(Number(v).toFixed(1)));
export { isVertical };
