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

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

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

function inPoly(p, loop) {
  let inside = false;
  for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
    const a = loop[i], b = loop[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
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
/** How far a world point is inside solid S (≤ 0: outside). */
export function depthIn(S, w) {
  const l = toLocal(S.frame, w, S.voff);
  if (l.x <= 0 || l.x >= S.L) return 0;
  const loops = loopsAt(S, l.x);
  if (!loops.length) return 0;
  const p = [l.u, l.v];
  if (!inPoly(p, loops[0]) || loops.slice(1).some((h) => inPoly(p, h))) return 0;
  return Math.min(l.x, S.L - l.x, ...loops.map((lp) => edgeDist(p, lp)));
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
  const pts = [];
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
  const n = Math.max(2, Math.min(40, Math.ceil((t1 - t0) / 10)));
  for (let k = 0; k <= n; k++) {
    const x = t0 + (t1 - t0) * k / n;
    for (const [u, v] of sec) pts.push(toWorld(A.frame, x, u, v, A.voff));
  }
  return pts;
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
  for (const c of state.connections) {
    const ids = membersOf(c);
    if (ids.length === 2) pair(ids[0], ids[1]);
    for (const p of built.parts.filter((x) => x.conn === c.id)) for (const id of ids) pair(p.id, id);
  }
  return ok;
}

export function clashCheck(state, built, { tol = 1, phases = null } = {}) {
  const t0 = Date.now();
  const S = solids(state, built, phases);
  const skip = intended(state, built);
  const clashes = [];
  let pairs = 0;
  for (let i = 0; i < S.length; i++) for (let j = i + 1; j < S.length; j++) {
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

