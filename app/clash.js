/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash.js — clash check between the steel parts and footings (0.4 D15). No DOM. Millimeters.
 *
 *   clashCheck(state, built, { tol = 1, phases = null }) → { clashes: [clash], pairs, checked, ms }
 *   clash = { a, b (refs), aPart, bPart (part ids or 'footing:<id>'), depth (mm, how far one is in the other),
 *             at ([x, y, z] a point inside both), kind: 'steel' | 'concrete' }
 *
 * Two solids clash when one reaches more than `tol` into the other; parts that only touch (a plate on a flange, a
 * base plate on its footing) do not. Not reported, because the model means them to meet:
 *   - the parts of one connection with each other and with the members it joins (an end plate, its beam, the column
 *     flange it is bolted to; a base plate and its column), and the members a connection joins;
 *   - bolts and anchor rods (they pass through holes) and rebar;
 *   - the parts of one stair (0.4 D23: treads welded between its stringers);
 *   - a base plate's shear lug and a footing (0.4 D20: the lug sits in a grout pocket the concrete is formed with).
 * A brace or beam that runs into a column with no connection between them is a clash: that joint still needs one.
 * Hidden phases can be left out (`phases` = the phase numbers to check).
 *
 * How: a box round each part (section width × depth along its cut length; footings their concrete box) is tested
 * against every other with the separating-axis test; for boxes that meet, points across one part's section (corners,
 * edge midpoints, points just inside each edge and an inner grid) at stations along the stretch where it can meet the other are tested inside the
 * other's true section (with its copes), and the other way round. depth = the largest distance from such a point
 * to the outside of the other part.
 */
import { toLocal, toWorld, clipLoopV } from './geom.js';
import { membersOf } from './connections.js';
import { add3 as add, cross3 as cross, dot3 as dot, scale3 as mul, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)
import { pointInRing } from './geom2d.js';   // shared helpers (0.11 PERF.74)


/** A solid to check: { ref, id, kind, phase, frame {o, x, u, v}, L, loops (section, centered), voff, cuts, box (obb) }. */
export function solids(state, built, phases) {
  const keep = (ph) => !phases || phases.has(ph || 1);
  const out = [];
  for (const p of built.parts) {
    if (!keep(p.phase)) continue;
    const w = p.profile.width, d = p.profile.depth;
    const c = add(p.frame.o, add(mul(p.frame.x, p.length / 2), mul(p.frame.v, p.voff)));
    out.push({ ref: p.member ? { kind: 'member', id: p.member } : p.stair ? { kind: 'stair', id: p.stair } : { kind: 'conn', id: p.conn }, id: p.id, kind: 'steel', phase: p.phase || 1, conn: p.conn, member: p.member, stair: p.stair || null,
      frame: p.frame, L: p.length, loops: p.profile.loops, voff: p.voff, cuts: p.cuts.filter((k) => k.kind === 'cope'), depth: d, lug: !!p.conn && p.id === p.conn + '.lug',
      box: { c, ax: [p.frame.x, p.frame.u, p.frame.v], h: [p.length / 2, w / 2, d / 2] } });
  }
  for (const f of state.footings) {
    if (!keep(f.phase)) continue;
    const a = (Number(f.rotation) || 0) * Math.PI / 180;
    const x = [Math.cos(a), Math.sin(a), 0], u = [-Math.sin(a), Math.cos(a), 0], v = [0, 0, 1];
    const o = add([f.x, f.y, f.top - f.H / 2], mul(x, -f.L / 2));
    const loop = [[-f.B / 2, -f.H / 2], [f.B / 2, -f.H / 2], [f.B / 2, f.H / 2], [-f.B / 2, f.H / 2]];
    // the footing as a "part" along its length: section B × H (u across, v up)
    out.push({ ref: { kind: 'footing', id: f.id }, id: 'footing:' + f.id, kind: 'concrete', phase: f.phase || 1, frame: { o, x, u, v }, L: f.L, loops: [loop], voff: 0, cuts: [], depth: f.H,
      box: { c: [f.x, f.y, f.top - f.H / 2], ax: [x, u, v], h: [f.L / 2, f.B / 2, f.H / 2] } });
  }
  return out;
}

/**
 * A grid over the solids' boxes (0.10 PERF.36 / FX.144): `near(p)` gives the solids whose box (grown by `margin`) can hold the point p, in the
 * order of the list, so a loop over them finds the same first hit as a loop over every solid; `pairs()` gives every pair of indices whose
 * boxes share a grid cell, i < j, sorted, a superset of the pairs whose boxes overlap. Cost is O(solids), not O(solids squared).
 */
export function solidIndex(S, { cell = 1000, margin = 3 } = {}) {
  // 0.11 PERF.36: a cell's key is one number (16 bits a coordinate: +-32,768 cells, 32.7 km at 1 m cells; a model past that only aliases far cells, which adds candidates the box test drops), not a string, and the
  // boxes' reach is worked without arrays: same cells, same lists, about a third of the time and far less garbage at 58,000 solids
  const grid = new Map(), O = 32768, key = (x, y, z) => ((x + O) * 65536 + (y + O)) * 65536 + (z + O);
  S.forEach((q, i) => {
    const A = q.box.ax, h = q.box.h, c = q.box.c;
    const ex = Math.abs(A[0][0]) * h[0] + Math.abs(A[1][0]) * h[1] + Math.abs(A[2][0]) * h[2] + margin;
    const ey = Math.abs(A[0][1]) * h[0] + Math.abs(A[1][1]) * h[1] + Math.abs(A[2][1]) * h[2] + margin;
    const ez = Math.abs(A[0][2]) * h[0] + Math.abs(A[1][2]) * h[1] + Math.abs(A[2][2]) * h[2] + margin;
    const x0 = Math.floor((c[0] - ex) / cell), x1 = Math.floor((c[0] + ex) / cell);
    const y0 = Math.floor((c[1] - ey) / cell), y1 = Math.floor((c[1] + ey) / cell);
    const z0 = Math.floor((c[2] - ez) / cell), z1 = Math.floor((c[2] + ez) / cell);
    for (let x = x0; x <= x1; x++) for (let y = y0; y <= y1; y++) for (let z = z0; z <= z1; z++) {
      const k = key(x, y, z);
      const l = grid.get(k);
      if (l) l.push(i); else grid.set(k, [i]);
    }
  });
  const none = [], solidsOf = new Map();   // a cell's solids, mapped once
  const inCell = (k) => { let m = solidsOf.get(k); if (!m) { const l = grid.get(k); m = l ? l.map((i) => S[i]) : none; solidsOf.set(k, m); } return m; };
  return {
    near(p) { return inCell(key(Math.floor(p[0] / cell), Math.floor(p[1] / cell), Math.floor(p[2] / cell))); },
    /** The solids whose box can reach the axis-aligned box [lo, hi] (grown by `reach`), once each, in the list's order: what a check that looks `reach` away must see. */
    within(lo, hi, reach = 0) {
      const a = [0, 1, 2].map((k) => Math.floor((lo[k] - reach) / cell)), b = [0, 1, 2].map((k) => Math.floor((hi[k] + reach) / cell));
      const ids = new Set();
      for (let x = a[0]; x <= b[0]; x++) for (let y = a[1]; y <= b[1]; y++) for (let z = a[2]; z <= b[2]; z++) { const l = grid.get(key(x, y, z)); if (l) for (const i of l) ids.add(i); }
      return [...ids].sort((p, q) => p - q).map((i) => S[i]);
    },
    pairs() {
      const seen = new Set(), out = [];
      for (const l of grid.values()) for (let a = 0; a < l.length; a++) for (let b = a + 1; b < l.length; b++) {
        const i = l[a], j = l[b], k = i * S.length + j;   // l is ascending, so i < j
        if (!seen.has(k)) { seen.add(k); out.push([i, j]); }
      }
      return out.sort((p, q) => p[0] - q[0] || p[1] - q[1]);
    },
  };
}

/** Oriented boxes overlap (separating-axis test, 15 axes), allowing `tol` of contact. */
export function obbOverlap(A, B, tol = 0) {
  const T = sub(B.c, A.c);
  const axes = [...A.ax, ...B.ax];
  for (const a of A.ax) for (const b of B.ax) { const c = cross(a, b); if (Math.hypot(...c) > 1e-9) axes.push(c); }
  for (const L of axes) {
    const n = Math.hypot(...L), l = mul(L, 1 / n);
    const ra = A.h.reduce((s, h, i) => s + h * Math.abs(dot(A.ax[i], l)), 0);
    const rb = B.h.reduce((s, h, i) => s + h * Math.abs(dot(B.ax[i], l)), 0);
    if (Math.abs(dot(T, l)) > ra + rb - tol) return false;
  }
  return true;
}

/** [x, y] point in a loop: the shared ray cast (lib/geom2d pointInRing, the same arithmetic; 0.11 PERF.74). */
function inPoly(p, loop) { return pointInRing(p[0], p[1], loop); }
function edgeDist(p, loop) {
  let best = Infinity;
  for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
    const a = loop[j], b = loop[i], dx = b[0] - a[0], dy = b[1] - a[1], L2 = dx * dx + dy * dy;
    const t = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * dx + (p[1] - a[1]) * dy) / L2)) : 0;
    best = Math.min(best, Math.hypot(p[0] - a[0] - t * dx, p[1] - a[1] - t * dy));
  }
  return best;
}
/** The section of a solid at station x (copes cut away), as loops. */
function loopsAt(S, x) {
  let loops = S.loops;
  for (const c of S.cuts) {
    const inCope = c.end === 'start' ? x < c.length : x > S.L - c.length;
    if (!inCope) continue;
    loops = loops.map((l, k) => (k === 0 ? (c.side === 'top' ? clipLoopV(l, S.depth / 2 - c.depth, true) : clipLoopV(l, -S.depth / 2 + c.depth, false)) : l)).filter((l) => l && l.length);
  }
  return loops;
}
/** How far a world point is inside solid S (≤ 0: outside). 0.11 PERF.36: the same sums as toLocal, inPoly and edgeDist, without the arrays. */
export function depthIn(S, w) {
  const f = S.frame, o = f.o;
  const d0 = w[0] - o[0], d1 = w[1] - o[1], d2 = w[2] - o[2];
  const x = d0 * f.x[0] + d1 * f.x[1] + d2 * f.x[2];
  if (x <= 0 || x >= S.L) return 0;
  const loops = S.cuts.length ? loopsAt(S, x) : S.loops;
  if (!loops.length) return 0;
  const p = [d0 * f.u[0] + d1 * f.u[1] + d2 * f.u[2], d0 * f.v[0] + d1 * f.v[1] + d2 * f.v[2] - S.voff];
  if (!inPoly(p, loops[0])) return 0;
  for (let k = 1; k < loops.length; k++) if (inPoly(p, loops[k])) return 0;
  let best = Math.min(x, S.L - x);
  for (let k = 0; k < loops.length; k++) { const e = edgeDist(p, loops[k]); if (e < best) best = e; }
  return best;
}
/** How far a ray from p along d runs before it meets an edge of the loops (Infinity if never). */
function rayExit(p, d, loops) {
  let best = Infinity;
  for (const loop of loops) for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
    const a = loop[j], b = loop[i], e = [b[0] - a[0], b[1] - a[1]];
    const den = d[0] * e[1] - d[1] * e[0];
    if (Math.abs(den) < 1e-12) continue;
    const w = [a[0] - p[0], a[1] - p[1]];
    const t = (w[0] * e[1] - w[1] * e[0]) / den, u = (w[0] * d[1] - w[1] * d[0]) / den;
    if (t > 1e-6 && u >= -1e-9 && u <= 1 + 1e-9) best = Math.min(best, t);
  }
  return best;
}
/** Points across A's section (corners, edge midpoints, an inner grid) at stations over [t0, t1]. */
function samples(A, t0, t1, tol) {
  const sec = sectionPoints(A, tol);
  const pts = [];
  const n = Math.max(2, Math.min(40, Math.ceil((t1 - t0) / 10)));
  for (let k = 0; k <= n; k++) {
    const x = t0 + (t1 - t0) * k / n;
    for (const [u, v] of sec) pts.push(toWorld(A.frame, x, u, v, A.voff));
  }
  return pts;
}
/** The points across A's section that samples() takes at each station; worked once per solid and tolerance (0.11 PERF.36: they were worked per pair). */
function sectionPoints(A, tol) {
  if (A._sec && A._secTol === tol) return A._sec;
  const sec = [];
  const inside = (q) => inPoly(q, A.loops[0]) && !A.loops.slice(1).some((h) => inPoly(q, h));
  const step = tol + 1;                                        // just inside each edge: thin webs and flanges are sampled too
  for (const loop of A.loops) for (let i = 0; i < loop.length; i++) {
    const a = loop[i], b = loop[(i + 1) % loop.length], m = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2];
    sec.push(a, m);
    const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
    if (L < 1e-9) continue;
    const n = [-(b[1] - a[1]) / L, (b[0] - a[0]) / L];
    for (const sg of [1, -1]) {
      const q = [m[0] + sg * n[0] * step, m[1] + sg * n[1] * step];
      if (!inside(q)) continue;
      sec.push(q);
      // halfway across the material from this edge (the middle of a flange or web)
      const d = [sg * n[0], sg * n[1]], tx = rayExit(m, d, A.loops);
      if (tx > 2 * step) sec.push([m[0] + d[0] * tx / 2, m[1] + d[1] * tx / 2]);
    }
  }
  let x0 = Infinity, x1 = -Infinity, y0 = Infinity, y1 = -Infinity;
  for (const [u, v] of A.loops[0]) { x0 = Math.min(x0, u); x1 = Math.max(x1, u); y0 = Math.min(y0, v); y1 = Math.max(y1, v); }
  const N = 7;
  for (let i = 0; i <= N; i++) for (let j = 0; j <= N; j++) {
    const q = [x0 + (x1 - x0) * i / N, y0 + (y1 - y0) * j / N];
    if (inside(q)) sec.push(q);
  }
  A._sec = sec; A._secTol = tol;
  return sec;
}
/** The stretch of A (along its axis) whose box can reach B's box: [t0, t1] or null. */
function reach(A, B) {
  // B's box corners in A's frame; A's x-range clipped to them, padded by A's own half size
  const corners = [];
  for (const sx of [-1, 1]) for (const su of [-1, 1]) for (const sv of [-1, 1]) corners.push(add(B.box.c, add(mul(B.box.ax[0], sx * B.box.h[0]), add(mul(B.box.ax[1], su * B.box.h[1]), mul(B.box.ax[2], sv * B.box.h[2])))));
  const xs = corners.map((c) => dot(sub(c, A.frame.o), A.frame.x));
  const pad = Math.hypot(A.box.h[1], A.box.h[2]);
  const t0 = Math.max(0, Math.min(...xs) - pad), t1 = Math.min(A.L, Math.max(...xs) + pad);
  return t1 > t0 ? [t0, t1] : null;
}

/** The pairs a connection means to meet: Set of "idA|idB" (part ids, both ways). */
function intended(state, built) {
  const ok = new Set();
  const pair = (a, b) => { ok.add(a + '|' + b); ok.add(b + '|' + a); };
  // 0.11 PERF.36: the parts of each connection grouped once (it was a filter over every part per connection: connections x parts, 8 s at 28,500)
  const byConn = new Map();
  for (const p of built.parts) if (p.conn) { const l = byConn.get(p.conn); if (l) l.push(p); else byConn.set(p.conn, [p]); }
  for (const c of state.connections) {
    const ids = membersOf(c);
    if (ids.length === 2) pair(ids[0], ids[1]);
    for (const p of byConn.get(c.id) || []) for (const id of ids) pair(p.id, id);
  }
  return ok;
}

export function clashCheck(state, built, { tol = 1, phases = null } = {}) {
  const t0 = Date.now();
  const S = solids(state, built, phases);
  const skip = intended(state, built);
  const clashes = [];
  let pairs = 0;
  for (const [i, j] of solidIndex(S, { margin: tol + 1 }).pairs()) {
    const A = S[i], B = S[j];
    if (A.kind === 'concrete' && B.kind === 'concrete') continue;
    if (skip.has(A.id + '|' + B.id)) continue;
    if (A.conn && A.conn === B.conn) continue;                  // two plates of one connection
    if (A.stair && A.stair === B.stair) continue;                // the stringers and treads of one stair (welded together)
    if ((A.kind === 'concrete' && B.lug) || (B.kind === 'concrete' && A.lug)) continue;
    if (!obbOverlap(A.box, B.box, tol)) continue;
    pairs++;
    let best = null;
    for (const [P, Q] of [[A, B], [B, A]]) {
      const r = reach(P, Q);
      if (!r) continue;
      for (const w of samples(P, r[0], r[1], tol)) {
        const d = depthIn(Q, w);
        if (d > tol && (!best || d > best.depth)) best = { depth: d, at: w };
      }
    }
    if (best) clashes.push({ a: A.ref, b: B.ref, aPart: A.id, bPart: B.id, depth: Math.round(best.depth * 10) / 10, at: best.at.map((v) => Math.round(v * 10) / 10), kind: A.kind === 'concrete' || B.kind === 'concrete' ? 'concrete' : 'steel' });
  }
  clashes.sort((a, b) => b.depth - a.depth);
  return { clashes, pairs, checked: S.length, ms: Date.now() - t0 };
}

