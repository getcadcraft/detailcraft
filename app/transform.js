/* SPDX-License-Identifier: Apache-2.0 */
/**
 * transform.js — move, rotate and mirror a selection, and change a property on many members (0.4 D1). No DOM.
 *
 * A transform is { A (3×3, rows), t ([x, y, z]), det (±1), kind, deg?, phi? }: a point p goes to A·p + t.
 *   moveXf(dx, dy, dz)          translation
 *   rotateXf([cx, cy], deg)     about the vertical line through (cx, cy), counter-clockwise seen from above
 *   mirrorXf([x1, y1], [x2, y2]) in the vertical plane through two plan points (a grid line, two nodes)
 * Only these three: rotation about z and mirroring in a vertical plane keep levels level and footings upright.
 *
 * transformRefs(tx, state, refs, xf) — inside model.change: every selected member and footing goes through xf.
 * A member keeps its real section orientation: its new rotation (and, for a mirror, which way it faces) is worked
 * out from where the transform sends its (u, v) axes, so a turned column stays turned with the frame and a mirrored
 * channel faces the other way. A mirror makes the mirror image, which every section DetailCraft knows is itself
 * turned over (I, tube, plate: about v; channel: about u; equal angle: about its diagonal), so the image is the same
 * profile placed the other way round — holes and copes follow (flange hole offsets change side, a channel's top and
 * bottom swap). Connections are not stored geometry: they follow their members. Returns
 *   { members, footings, connections (moved only with some of their members), notes[] }.
 *
 * snapOffset(raw, points, nodes, project, { mask, px, step }) — a drag's offset (D2): the held part's points snap onto a grid
 * node within px screen pixels (only nodes reachable in the drag's plane); otherwise the offset goes in `step` mm.
 *
 * manyPatchable(state, ids) / applyToMany(tx, state, ids, field, value) — one property on several members at once
 * (profile, plate thickness / width, material, position, rotation); members it does not apply to are counted.
 */
import { frame, voffFor, dot, sub } from './geom.js';
import { getProfile, plateName } from './profiles.js';
import { membersOf } from './connections.js';

const R = Math.PI / 180;
const I3 = [[1, 0, 0], [0, 1, 0], [0, 0, 1]];

export function moveXf(dx, dy, dz) {
  const t = [dx, dy, dz].map(Number);
  if (t.some((n) => !Number.isFinite(n) || Math.abs(n) > 1e6)) throw new Error('bad-offset');
  return { kind: 'move', A: I3, t, det: 1 };
}

export function rotateXf(center, deg) {
  const a = Number(deg) * R, [cx, cy] = center.map(Number);
  if (!Number.isFinite(a) || !Number.isFinite(cx) || !Number.isFinite(cy)) throw new Error('bad-angle');
  const c = Math.cos(a), s = Math.sin(a);
  const A = [[c, -s, 0], [s, c, 0], [0, 0, 1]];
  return { kind: 'rotate', A, t: [cx - (c * cx - s * cy), cy - (s * cx + c * cy), 0], det: 1, deg: Number(deg) };
}

export function mirrorXf(p1, p2) {
  const [x1, y1] = p1.map(Number), [x2, y2] = p2.map(Number);
  const dx = x2 - x1, dy = y2 - y1, L = Math.hypot(dx, dy);
  if (!(L > 1e-6) || ![x1, y1].every(Number.isFinite)) throw new Error('bad-mirror');
  const ux = dx / L, uy = dy / L;
  // reflection across the line through p1 with direction (ux, uy): A = 2·d·dᵀ − I in plan, z kept
  const A = [[2 * ux * ux - 1, 2 * ux * uy, 0], [2 * ux * uy, 2 * uy * uy - 1, 0], [0, 0, 1]];
  const t = [x1 - (A[0][0] * x1 + A[0][1] * y1), y1 - (A[1][0] * x1 + A[1][1] * y1), 0];
  return { kind: 'mirror', A, t, det: -1, phi: Math.atan2(uy, ux) / R };
}

export const applyPt = (xf, p) => [0, 1, 2].map((i) => xf.A[i][0] * p[0] + xf.A[i][1] * p[1] + xf.A[i][2] * p[2] + xf.t[i]);
export const applyDir = (xf, d) => [0, 1, 2].map((i) => xf.A[i][0] * d[0] + xf.A[i][1] * d[1] + xf.A[i][2] * d[2]);
const neg = (a) => [-a[0], -a[1], -a[2]];
const clean = (n) => (Math.abs(n - Math.round(n)) < 1e-6 ? Math.round(n) : Math.round(n * 1e6) / 1e6);
const cleanPt = (p) => p.map(clean);
const norm360 = (d) => clean(((d % 360) + 360) % 360) % 360;

/** The rotation (deg) whose frame on start → end has its v along `want`. */
function rotationFor(start, end, want) {
  const f0 = frame(start, end, 0);
  return norm360(Math.atan2(-dot(want, f0.u), dot(want, f0.v)) / R);
}

/**
 * One member through xf: { start, end, rotation, position, holes, cuts, shift? }.
 * For a mirror the section is re-placed by its own symmetry (see the header); `kind` is the profile kind.
 */
export function transformMember(m, xf, kind, unequal = false) {
  const f = frame(m.start, m.end, m.rotation);
  let start = applyPt(xf, m.start), end = applyPt(xf, m.end);
  const U = applyDir(xf, f.u), V = applyDir(xf, f.v);
  let wantV = V, position = m.position, holes = m.holes.map((h) => ({ ...h })), cuts = m.cuts.map((c) => ({ ...c }));
  let note = null, turned = false;
  if (xf.det < 0) {
    if (kind === 'C') {
      // channel: the image is the channel turned over about u — v' = −V, top and bottom swap
      wantV = neg(V);
      position = m.position === 'top' ? 'bottom' : m.position === 'bottom' ? 'top' : m.position;
      for (const h of holes) {
        if (h.face === 'web') h.y = -h.y;
        else if (h.face === 'top') h.face = 'bottom';
        else if (h.face === 'bottom') h.face = 'top';
      }
      for (const c of cuts) c.side = c.side === 'top' ? 'bottom' : 'top';
    } else if (kind === 'L' && unequal) {
      // unequal angle: its legs must stay on U and V, and U, V and the mirrored axis are left-handed, so the piece runs the other way
      // (the same piece of steel turned end for end, which is how a shop makes the opposite hand): holes and copes follow it
      const L = Math.hypot(...sub(m.end, m.start));
      [start, end] = [end, start];
      for (const h of holes) h.x = clean(L - h.x);
      for (const c of cuts) c.end = c.end === 'start' ? 'end' : 'start';
      turned = true;
    } else if (kind === 'L') {
      // equal angle: symmetric about its diagonal — u' = V, v' = U; the line keeps the section where it was
      wantV = U;
      if (m.position !== 'middle') note = 'angle-offset';
    } else {
      // I-shapes, tubes, round tubes, plates, flats: symmetric about v — v' = V, u' = −U: flange and plate holes change side
      for (const h of holes) if (h.face !== 'web') h.y = -h.y;
    }
  }
  start = cleanPt(start); end = cleanPt(end);
  const rotation = rotationFor(start, end, wantV);
  for (const h of holes) h.y = clean(h.y);
  return { start, end, rotation, position, holes, cuts, note, turned };
}

/** An angle mirrored with a top/bottom position: its line moves so the steel lands where the image is. */
function angleShift(m, prof, out, xf) {
  const f = frame(m.start, m.end, m.rotation);
  const off = voffFor(m.position, prof.depth);
  const want = applyDir(xf, f.v).map((n) => n * off);           // where the section center went
  const nf = frame(out.start, out.end, out.rotation);
  const have = nf.v.map((n) => n * voffFor(m.position, prof.depth));
  const d = sub(want, have);
  out.start = cleanPt(out.start.map((n, i) => n + d[i]));
  out.end = cleanPt(out.end.map((n, i) => n + d[i]));
}

/**
 * Moves / rotates / mirrors every member and footing in refs, inside a model.change (tx). Connections in refs are
 * ignored (they follow their members); connections joining a moved and a staying member are counted.
 */
export function transformRefs(tx, state, refs, xf) {
  const memberIds = new Set(refs.filter((r) => r.kind === 'member').map((r) => r.id));
  const footingIds = new Set(refs.filter((r) => r.kind === 'footing').map((r) => r.id));
  const stairIds = new Set(refs.filter((r) => r.kind === 'stair').map((r) => r.id));
  const notes = [];
  let n = 0, nf = 0;
  for (const m of state.members) {
    if (!memberIds.has(m.id)) continue;
    const prof = getProfile(m.profile, state.profiles);
    const out = transformMember(m, xf, prof?.kind, prof?.kind === 'L' && prof.h !== undefined && prof.h !== prof.b);
    if (out.note === 'angle-offset' && prof) angleShift(m, prof, out, xf);
    tx.updateMember(m.id, { start: out.start, end: out.end, rotation: out.rotation, position: out.position, holes: out.holes, cuts: out.cuts });
    if (out.turned) for (const c of state.connections) if (c.type === 'gusset' && c.brace === m.id) tx.swapConnectionEnd(c.id);   // its gusset stays on the same physical end
    n++;
  }
  for (const f of state.footings) {
    if (!footingIds.has(f.id)) continue;
    const p = cleanPt(applyPt(xf, [f.x, f.y, f.top]));
    let rotation = Number(f.rotation) || 0;
    if (xf.kind === 'rotate') rotation = norm360(rotation + xf.deg);
    else if (xf.kind === 'mirror') rotation = norm360(2 * xf.phi - rotation);
    tx.updateFooting(f.id, { x: p[0], y: p[1], top: p[2], rotation });
    nf++;
  }
  // a stair (0.4 D23): its foot moves; it turns with a rotation; a mirror sends its climb the mirrored way (a straight
  // stair is its own mirror image about its center line)
  let ns = 0;
  for (const x of state.stairs || []) {
    if (!stairIds.has(x.id)) continue;
    const p = cleanPt(applyPt(xf, [x.x, x.y, x.z]));
    let dir = Number(x.dir) || 0;
    if (xf.kind === 'rotate') dir = norm360(dir + xf.deg);
    else if (xf.kind === 'mirror') dir = norm360(2 * xf.phi - dir);
    tx.updateStair(x.id, { x: p[0], y: p[1], z: p[2], dir });
    ns++;
  }
  let split = 0;
  for (const c of state.connections) {
    const parts = membersOf(c);
    const moved = parts.filter((id) => memberIds.has(id)).length;
    if (moved && moved < parts.length) split++;
  }
  if (split) notes.push({ key: 'xf.note.split', n: split });
  return { members: n, footings: nf, stairs: ns, connections: split, notes };
}

/** Lines of the selection (members as their axes, footings as their outline at the top) relative to a base point. */
export function ghostLines(state, refs, base) {
  const ids = new Set(refs.map((r) => r.kind + ':' + r.id));
  const rel = (p) => [p[0] - base[0], p[1] - base[1], p[2] - base[2]];
  const out = [];
  for (const m of state.members) if (ids.has('member:' + m.id)) out.push([rel(m.start), rel(m.end)]);
  for (const f of state.footings) {
    if (!ids.has('footing:' + f.id)) continue;
    const a = (Number(f.rotation) || 0) * R, c = Math.cos(a), s = Math.sin(a);
    const k = [[-1, -1], [1, -1], [1, 1], [-1, 1]].map(([i, j]) => [f.x + c * i * f.L / 2 - s * j * f.B / 2, f.y + s * i * f.L / 2 + c * j * f.B / 2, f.top]);
    for (let i = 0; i < 4; i++) out.push([rel(k[i]), rel(k[(i + 1) % 4])]);
  }
  for (const x of state.stairs || []) if (ids.has('stair:' + x.id)) out.push(...stairOutline(x).map(([a, b]) => [rel(a), rel(b)]));
  return out;
}
/** A stair as lines: its plan rectangle at the foot (width × run) and the climb up its middle. */
export function stairOutline(x) {
  const a = (Number(x.dir) || 0) * R, c = Math.cos(a), s = Math.sin(a);
  const n = Math.max(2, Math.ceil(x.rise / x.maxRiser - 1e-9)), run = (n - 1) * x.going;
  const P = (al, ac, up) => [x.x + c * al - s * ac, x.y + s * al + c * ac, x.z + up];
  const q = [P(0, -x.width / 2, 0), P(run, -x.width / 2, 0), P(run, x.width / 2, 0), P(0, x.width / 2, 0)];
  return [...q.map((p, i) => [p, q[(i + 1) % 4]]), [P(0, 0, 0), P(run, 0, x.rise)]];
}

/** The plan center of the selection's members and footings (for "rotate about the selection's middle"). */
export function selectionCenter(state, refs) {
  const ids = new Set(refs.map((r) => r.kind + ':' + r.id));
  let x0 = Infinity, y0 = Infinity, z0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  const take = (p) => { x0 = Math.min(x0, p[0]); y0 = Math.min(y0, p[1]); z0 = Math.min(z0, p[2]); x1 = Math.max(x1, p[0]); y1 = Math.max(y1, p[1]); };
  for (const m of state.members) if (ids.has('member:' + m.id)) { take(m.start); take(m.end); }
  for (const f of state.footings) if (ids.has('footing:' + f.id)) take([f.x, f.y, f.top]);
  for (const x of state.stairs || []) if (ids.has('stair:' + x.id)) for (const [a, b] of stairOutline(x)) { take(a); take(b); }
  if (!Number.isFinite(x0)) return null;
  return [clean((x0 + x1) / 2), clean((y0 + y1) / 2), clean(z0)];
}

// ---- dragging (D2) ----

/**
 * raw: the pointer's offset in mm (already in the drag's plane); points: the held part's own points (member ends,
 * footing center); nodes: grid nodes [x, y, z]; project(p) → { x, y, behind } screen px; mask: which axes the drag moves
 * ([1, 1, 0] across a plan, [1, 0, 1] in an elevation, [0, 0, 1] up and down). Returns { offset, node, point }.
 */
export function snapOffset(raw, points, nodes, project, { mask = [1, 1, 1], px = 18, step = 10 } = {}) {
  let best = null;
  for (const p of points) {
    const q = [p[0] + raw[0], p[1] + raw[1], p[2] + raw[2]];
    const sq = project(q);
    if (sq.behind) continue;
    for (const n of nodes) {
      const d = [n[0] - p[0], n[1] - p[1], n[2] - p[2]];
      if (d.some((v, i) => !mask[i] && Math.abs(v) > 0.5)) continue;          // not reachable in this drag's plane
      const sn = project(n);
      if (sn.behind) continue;
      const k = Math.hypot(sn.x - sq.x, sn.y - sq.y);
      if (k <= px && (!best || k < best.k)) best = { k, d, n, p };
    }
  }
  if (best) return { offset: best.d.map((v, i) => (mask[i] ? clean(v) : 0)), node: best.n, point: best.p };
  return { offset: raw.map((v, i) => (mask[i] ? clean(Math.round(v / step) * step) : 0)), node: null, point: null };
}

// ---- one property on many members ----

export const MANY_FIELDS = ['profile', 'plateT', 'plateW', 'material', 'position', 'rotation'];

/**
 * For each field: { value (shared) | varies: true, applies (members it can change), skipped (members it can't) }.
 * Profile and position are for beams, columns and braces; plate thickness and width for plates.
 */
export function manyPatchable(state, ids) {
  const set = new Set(ids);
  const mem = state.members.filter((m) => set.has(m.id));
  const out = {};
  const gather = (field, ok, get) => {
    const use = mem.filter(ok);
    const vals = [...new Set(use.map(get).map((v) => (typeof v === 'number' ? clean(v) : v)))];
    out[field] = { applies: use.length, skipped: mem.length - use.length, varies: vals.length > 1, value: vals.length === 1 ? vals[0] : null };
  };
  const plateDim = (m, k) => getProfile(m.profile, state.profiles)?.[k];
  gather('profile', (m) => m.type !== 'plate', (m) => m.profile);
  gather('plateT', (m) => m.type === 'plate', (m) => plateDim(m, 't'));
  gather('plateW', (m) => m.type === 'plate', (m) => plateDim(m, 'b'));
  gather('material', () => true, (m) => m.material);
  gather('position', (m) => m.type !== 'plate', (m) => m.position);
  gather('rotation', () => true, (m) => m.rotation);
  return out;
}

/** Sets one field on every member in ids it applies to (inside model.change). Returns { changed, skipped }. */
export function applyToMany(tx, state, ids, field, value) {
  if (!MANY_FIELDS.includes(field)) throw new Error('unknown-field');
  const set = new Set(ids);
  let changed = 0, skipped = 0;
  for (const m of state.members) {
    if (!set.has(m.id)) continue;
    let patch = null;
    if (field === 'profile' && m.type !== 'plate') patch = { profile: value };
    else if ((field === 'plateT' || field === 'plateW') && m.type === 'plate') {
      const p = getProfile(m.profile, state.profiles);
      const t = field === 'plateT' ? Number(value) : p?.t ?? 20, w = field === 'plateW' ? Number(value) : p?.b ?? 200;
      if (!(t > 0 && w > 0)) throw new Error('bad-plate');
      patch = { profile: plateName(t, w) };
    } else if (field === 'material') patch = { material: value };
    else if (field === 'position' && m.type !== 'plate') patch = { position: value };
    else if (field === 'rotation') patch = { rotation: Number(value) };
    if (!patch) { skipped++; continue; }
    tx.updateMember(m.id, patch);
    changed++;
  }
  return { changed, skipped };
}

/** Section outline of a member in world space at station x (for tests: a mirror must give the mirror image). */
export function worldSection(m, prof, x = 0) {
  const f = frame(m.start, m.end, m.rotation);
  const voff = voffFor(m.position, prof.depth);
  return prof.loops[0].map(([u, v]) => [0, 1, 2].map((i) => f.o[i] + f.x[i] * x + f.u[i] * u + f.v[i] * (v + voff)));
}
