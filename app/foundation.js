/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — check ids and clause names; the words the person reads come from the language file (fnd.*) */
/**
 * foundation.js — design checks for footings, combined footings and mats, and calculators for pile groups and cantilever retaining walls
 * (0.8 round 2, EG.5). No DOM: tools/detailcraft-test/test-foundation.mjs runs it in Node.
 *
 *   checkFooting(footing, loads, soil) → { checks: [check], pressure, ... }   bearing, sliding, overturning (service) and shear, punching, flexure,
 *                                                                    development, minimum steel and depth (strength, ACI 318-19 chapters 13, 22, 25)
 *   pressureField(N, ex, ey, L, B) → plane   the contact pressure under a rigid rectangle, with part of it lifting off when the resultant is
 *                                                                    outside the kern (no tension in the soil)
 *   pileGroup(piles, load, capacity) → { reactions, checks }          the elastic method, R = P/n ± Mx·y/Σy² ± My·x/Σx²
 *   retainingWall(wall, soil) → { checks }                            cantilever wall on level backfill: Rankine pressure, overturning, sliding, bearing
 *   toFootingAxes(reaction, rotationDeg) → load                      an Analysis support reaction as the load on a footing, in the footing's axes
 *   check = { id, clause, demand, capacity, unit, ratio, status: 'ok' | 'fail' | 'note', vars, at? }
 *
 * Units: loads in kN and kN·m, geometry in mm, pressures in kPa, stresses in MPa. Axes: x along the footing's L, y along B, z up. A load is
 * { x, y (mm from the footing's middle), cx, cy (the column, mm), service: { P, Vx, Vy, Mx, My }, strength: { … } } with P down; Vx, Vy the
 * horizontal forces on the footing's top; Mx, My moments on the footing's top by the right-hand rule. So a positive My loads the +x side more and
 * a positive Mx loads the −y side more.
 *
 * What this is: first-order checks of a rigid footing on a uniform soil you describe, the pressure under it a plane (no soil springs), for an
 * engineer to review. The strength checks use the net pressure from the factored column loads alone (the footing's own weight and the fill
 * cancel). A combined footing or a mat is taken as rigid: shear and moment come from statics on cuts across the full width. Not covered: edge and
 * corner columns' punching (the critical perimeter would leave the footing: said, not checked), a column's own bars, settlement, the soil's
 * capacity (qa is yours), the footing as a flexible plate on springs (a mat of many columns), seismic detailing (ACI 318-19 chapter 18).
 * Clauses are cited from ACI 318-19 chapters 13 (foundations), 22 (sectional strength), 25 (development), 24.4.3 and 7.6.1 (minimum steel).
 */
import { BARS, hookLeg } from './rebar.js';
import { requiredAs, beamShear } from './frame/rc-aci318.js';
import { FORMAT as FRAME_FORMAT, VERSION as FRAME_VERSION, cleanFrame } from './frame/frame-model.js';
import { solveFrame } from './frame/frame-solve.js';
import { slabPlates } from './frame/plate-mesh.js';
import { plateNodeResults } from './frame/plate-solve.js';

export const SOIL_DEFAULTS = Object.freeze({ qa: 0, mu: 0, fill: 0, gammaSoil: 18, gammaConc: 24, fsSlide: 1.5, fsOt: 1.5, fy: 420, lambda: 1, Es: 0, nu: 0.3, slim: 25, ks: 0 });   // qa 0 and mu 0 = not entered: those two checks are skipped, and said
const PHI_FLEX = 0.9, PHI_SHEAR = 0.75;
const r1 = (v) => Math.round(v * 10) / 10, r2 = (v) => Math.round(v * 100) / 100;

/** The concrete's f'c in MPa from the footing's text: "4000 psi", "28 MPa", "C30/37" (f'ck of the cylinder). */
export function fcOf(text) {
  const s = String(text || '');
  let m = s.match(/(\d+(?:\.\d+)?)\s*psi/i); if (m) return Number(m[1]) * 0.00689476;
  m = s.match(/C(\d+)\s*\/\s*\d+/i); if (m) return Number(m[1]);
  m = s.match(/(\d+(?:\.\d+)?)\s*MPa/i); if (m) return Number(m[1]);
  return 28;
}

/** A support reaction of the Analysis (N, N·mm, global axes, the force the support puts on the structure) as the load on the footing under it. */
export function toFootingAxes(R, rotationDeg = 0) {
  const a = rotationDeg * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
  const F = [-R[0], -R[1], -R[2]], M = [-R[3], -R[4], -R[5]];   // what the structure puts on the footing
  const loc = (u, v) => [c * u + s * v, -s * u + c * v];
  const [Vx, Vy] = loc(F[0], F[1]), [Mx, My] = loc(M[0], M[1]);
  return { P: -F[2] / 1000, Vx: Vx / 1000, Vy: Vy / 1000, Mx: Mx / 1e6, My: My / 1e6 };
}

// ---- the pressure under a rigid rectangle ----

/** q(x, y) = a + b·x + c·y (kPa, x and y in metres from the middle) wherever that is positive. */
export function pressureField(N, ex, ey, L, B) {
  const Lm = L / 1000, Bm = B / 1000, exm = ex / 1000, eym = ey / 1000;
  if (!(N > 0)) return { ok: false, reason: 'no-compression', N };
  if (Math.abs(exm) >= Lm / 2 || Math.abs(eym) >= Bm / 2) return { ok: false, reason: 'outside', N, ex: exm, ey: eym };
  const A = Lm * Bm;
  const full = { a: N / A, b: 12 * N * exm / (A * Lm * Lm), c: 12 * N * eym / (A * Bm * Bm) };
  const make = (p, partial) => {
    const corners = [[-Lm / 2, -Bm / 2], [Lm / 2, -Bm / 2], [-Lm / 2, Bm / 2], [Lm / 2, Bm / 2]].map(([x, y]) => p.a + p.b * x + p.c * y);
    const qmax = Math.max(...corners);
    return { ok: true, ...p, qmax, qmin: partial ? 0 : Math.min(...corners), partial, N, ex: exm, ey: eym, L: Lm, B: Bm, q: (x, y) => Math.max(0, p.a + p.b * x + p.c * y) };
  };
  if (6 * Math.abs(exm) / Lm + 6 * Math.abs(eym) / Bm <= 1 + 1e-12) return make(full, false);
  // part of the base lifts off: Newton on the plane so that the positive part carries N at (ex, ey)
  const n = 80, dx = Lm / n, dy = Bm / n, dA = dx * dy;
  const xs = Array.from({ length: n }, (_, i) => -Lm / 2 + (i + 0.5) * dx), ys = Array.from({ length: n }, (_, j) => -Bm / 2 + (j + 0.5) * dy);
  const F = (p) => {
    const f = [-N, -N * exm, -N * eym], J = Array.from({ length: 3 }, () => [0, 0, 0]);
    for (const y of ys) for (const x of xs) {
      const q = p.a + p.b * x + p.c * y;
      if (q <= 0) continue;
      const phi = [1, x, y];
      for (let i = 0; i < 3; i++) { f[i] += q * phi[i] * dA; for (let k = 0; k < 3; k++) J[i][k] += phi[i] * phi[k] * dA; }
    }
    return { f, J };
  };
  const norm = (f) => Math.hypot(f[0], f[1] / (Lm / 2), f[2] / (Bm / 2)) / N;
  let p = { ...full }, cur = F(p);
  for (let it = 0; it < 200 && norm(cur.f) > 1e-7; it++) {
    const J = cur.J.map((r, i) => r.map((v, k) => v + (i === k ? 1e-9 * (r[0] + 1e-12) : 0)));
    const d = solve3(J, cur.f.map((v) => -v));
    if (!d) break;
    let step = 1, next = null;
    for (let h = 0; h < 30; h++) {
      const q = { a: p.a + step * d[0], b: p.b + step * d[1], c: p.c + step * d[2] };
      const nf = F(q);
      if (norm(nf.f) < norm(cur.f)) { next = { q, nf }; break; }
      step /= 2;
    }
    if (!next) break;
    p = next.q; cur = next.nf;
  }
  return { ...make(p, true), residual: norm(cur.f) };
}
function solve3(A, b) {
  const M = A.map((r, i) => [...r, b[i]]);
  for (let c = 0; c < 3; c++) {
    let piv = c;
    for (let r = c + 1; r < 3; r++) if (Math.abs(M[r][c]) > Math.abs(M[piv][c])) piv = r;
    if (Math.abs(M[piv][c]) < 1e-14) return null;
    [M[c], M[piv]] = [M[piv], M[c]];
    for (let r = c + 1; r < 3; r++) { const k = M[r][c] / M[c][c]; for (let q = c; q < 4; q++) M[r][q] -= k * M[c][q]; }
  }
  const x = [0, 0, 0];
  for (let r = 2; r >= 0; r--) { let s = M[r][3]; for (let q = r + 1; q < 3; q++) s -= M[r][q] * x[q]; x[r] = s / M[r][r]; }
  return x;
}

/** ∫ q over the part of the base with x > xc (or y > yc), with the first moment about the cut: { V (kN), M (kN·m) }. */
function strip(field, axis, cut, n = 200) {
  const Lm = field.L, Bm = field.B;
  const len = axis === 'x' ? Lm : Bm, wid = axis === 'x' ? Bm : Lm;
  const t0 = Math.max(cut, -len / 2), t1 = len / 2;
  if (t1 <= t0) return { V: 0, M: 0 };
  const ds = (t1 - t0) / n, m = 80, dw = wid / m;
  let V = 0, M = 0;
  for (let i = 0; i < n; i++) {
    const t = t0 + (i + 0.5) * ds;
    let q = 0;
    for (let j = 0; j < m; j++) { const w = -wid / 2 + (j + 0.5) * dw; q += axis === 'x' ? field.q(t, w) : field.q(w, t); }
    const f = q * dw * ds;
    V += f; M += f * (t - cut);
  }
  return { V, M };
}

// ---- the checks ----

const mk = (id, clause, demand, capacity, unit, vars = {}, extra = {}) => {
  const ratio = capacity > 0 ? demand / capacity : (demand > 0 ? Infinity : 0);
  return { id, clause, demand, capacity, unit, ratio, status: ratio <= 1 + 1e-9 ? 'ok' : 'fail', vars, ...extra };
};
const note = (id, clause, vars = {}) => ({ id, clause, status: 'note', unit: '', demand: 0, capacity: 0, ratio: 0, vars });

/** Straight development length of a bar in tension, ACI 318-19 Table 25.4.2.3 with ψt = ψe = 1 (bottom bars, uncoated), mm. `easy` = spacing and cover at least db. */
export function developmentLength(bar, fy, fc, lambda = 1, easy = true) {
  const small = bar.db <= 19.1;   // #6 and smaller
  const k = easy ? (small ? 2.1 : 1.7) : (small ? 1.4 : 1.1);
  return Math.max(300, fy / (k * lambda * Math.sqrt(fc)) * bar.db);
}
/** Hook development, ACI 318-19 25.4.3.1: 0.24·ψe·fy/(λ√f'c)·db, at least 8 db and 150 mm. */
export function hookDevelopment(bar, fy, fc, lambda = 1) { return Math.max(8 * bar.db, 150, 0.24 * fy / (lambda * Math.sqrt(fc)) * bar.db); }

export function checkFooting(f, loads, soilIn = {}) {
  const soil = { ...SOIL_DEFAULTS, ...soilIn };
  const L = f.L, B = f.B, H = f.H, c = f.mat.cover;
  const checks = [];
  const fc = fcOf(f.concrete), fy = soil.fy, lam = soil.lambda;
  const bx = BARS.get(f.mat.barX), by = BARS.get(f.mat.barY);
  const dX = H - c - bx.db / 2, dY = H - c - bx.db - by.db / 2, dAvg = (dX + dY) / 2;
  const A = L * B / 1e6, h = H / 1000;
  if (!loads.length) return { checks: [note('loads', 'fnd')], pressure: null, soil };
  // -- service: bearing, sliding, overturning
  const sv = loads.map((l) => ({ ...l, ...(l.service || {}) }));
  const sumP = sv.reduce((s, l) => s + (l.service?.P || 0), 0);
  const W = soil.gammaConc * A * h + soil.gammaSoil * A * soil.fill / 1000;
  const N = sumP + W;
  const moment = (key) => sv.reduce((s, l) => s + (l.service?.[key] || 0), 0);
  const Vx = moment('Vx'), Vy = moment('Vy');
  const ex = N > 0 ? (sv.reduce((s, l) => s + (l.service?.P || 0) * l.x / 1000, 0) + moment('My') + h * Vx) / N * 1000 : 0;
  const ey = N > 0 ? (sv.reduce((s, l) => s + (l.service?.P || 0) * l.y / 1000, 0) - moment('Mx') - h * Vy) / N * 1000 : 0;
  const field = pressureField(N, ex, ey, L, B);
  const info = { N: r1(N), W: r1(W), ex: r1(ex), ey: r1(ey), qmax: field.ok ? r1(field.qmax) : null, partial: !!field.partial };
  if (!field.ok) checks.push({ id: 'bearing', clause: 'ACI 318-19 13.2.6.1', status: 'fail', unit: 'kPa', demand: Infinity, capacity: soil.qa, ratio: Infinity, vars: { reason: field.reason, N: r1(N), ex: r1(ex), ey: r1(ey) } });
  else if (soil.qa > 0) checks.push(mk('bearing', 'ACI 318-19 13.2.6.1', field.qmax, soil.qa, 'kPa', { q: r1(field.qmax), qa: soil.qa, partial: field.partial ? 1 : 0, ex: r1(ex), ey: r1(ey) }));
  else checks.push(note('bearing', 'ACI 318-19 13.2.6.1', { q: r1(field.qmax), partial: field.partial ? 1 : 0 }));
  if (field.partial) checks.push(note('liftoff', 'ACI 318-19 13.2.6.1', { pct: Math.round(100 * (1 - contactShare(field))) }));
  if (field.ok && N > 0) {
    if (soil.Es > 0) {
      const q = N / A, w = settlement(L, B, q, soil.Es, soil.nu);
      checks.push(mk('settlement', 'elastic half-space, Boussinesq', w.centre, soil.slim, 'mm', { q: r1(q), centre: r1(w.centre), corner: r1(w.corner), diff: r1(w.centre - w.corner), lim: soil.slim }));
    } else checks.push(note('settlement', 'elastic half-space, Boussinesq', { q: r1(N / A) }));
  }
  const H0 = Math.hypot(Vx, Vy);
  if (H0 > 1e-9) {
    if (soil.mu > 0 && N > 0) checks.push(mk('sliding', 'ACI 318-19 13.2.6.1', soil.fsSlide * H0, soil.mu * N, 'kN', { fs: r2(soil.mu * N / H0), need: soil.fsSlide, H: r1(H0), N: r1(N) }));
    else checks.push(note('sliding', 'ACI 318-19 13.2.6.1', { H: r1(H0) }));
  }
  if (N > 0) {
    const eMax = Math.max(Math.abs(ex) / (L / 2), Math.abs(ey) / (B / 2));   // 1 = at the edge
    const fsOt = eMax > 0 ? 1 / eMax : Infinity;
    if (eMax > 1e-6) checks.push(mk('overturning', 'ACI 318-19 13.2.6.1', soil.fsOt, fsOt, '', { fs: r2(fsOt), need: soil.fsOt }));
  }
  // -- strength: pressure from the factored column loads alone
  const st = loads.map((l) => ({ ...l, s: l.strength || {} }));
  const Nu = st.reduce((s, l) => s + (l.s.P || 0), 0);
  if (!st.some((l) => l.strength) || !(Nu > 0)) { checks.push(note('strength-loads', 'ACI 318-19 13.2.6.1')); return { checks, pressure: field.ok ? field : null, info, soil }; }
  const sumU = (k) => st.reduce((s, l) => s + (l.s[k] || 0), 0);
  const exu = (st.reduce((s, l) => s + (l.s.P || 0) * l.x / 1000, 0) + sumU('My') + h * sumU('Vx')) / Nu * 1000;
  const eyu = (st.reduce((s, l) => s + (l.s.P || 0) * l.y / 1000, 0) - sumU('Mx') - h * sumU('Vy')) / Nu * 1000;
  const fu = pressureField(Nu, exu, eyu, L, B);
  if (!fu.ok) { checks.push({ id: 'strength-pressure', clause: 'ACI 318-19 13.2.6.1', status: 'fail', unit: '', demand: Infinity, capacity: 0, ratio: Infinity, vars: { reason: fu.reason } }); return { checks, pressure: field.ok ? field : null, info, soil }; }
  // moment per metre and one-way shear from statics on cuts across the full width, in each direction
  const cols = st.map((l) => ({ x: l.x / 1000, y: l.y / 1000, cx: (l.cx || 300) / 1000, cy: (l.cy || 300) / 1000, P: l.s.P || 0, Mx: l.s.Mx || 0, My: l.s.My || 0, Vx: l.s.Vx || 0, Vy: l.s.Vy || 0 }));
  const cutX = (xc) => {   // loads on the +x side of the cut
    const s = strip(fu, 'x', xc);
    let V = s.V, M = s.M;
    for (const k of cols) if (k.x > xc) { V -= k.P; M -= k.P * (k.x - xc) + k.My + h * k.Vx; }
    return { V, M };
  };
  const cutY = (yc) => {
    const s = strip(fu, 'y', yc);
    let V = s.V, M = s.M;
    for (const k of cols) if (k.y > yc) { V -= k.P; M -= k.P * (k.y - yc) - k.Mx - h * k.Vy; }
    return { V, M };
  };
  const insideX = (xc) => cols.some((k) => xc > k.x - k.cx / 2 + 1e-9 && xc < k.x + k.cx / 2 - 1e-9);
  const insideY = (yc) => cols.some((k) => yc > k.y - k.cy / 2 + 1e-9 && yc < k.y + k.cy / 2 - 1e-9);
  const scan = (axis) => {
    const len = (axis === 'x' ? L : B) / 1000, cut = axis === 'x' ? cutX : cutY, inside = axis === 'x' ? insideX : insideY;
    const faces = cols.flatMap((k) => (axis === 'x' ? [k.x - k.cx / 2, k.x + k.cx / 2] : [k.y - k.cy / 2, k.y + k.cy / 2]));
    const at = [...faces, ...Array.from({ length: 41 }, (_, i) => -len / 2 + (i + 0.5) * len / 41)].filter((v) => v > -len / 2 + 1e-6 && v < len / 2 - 1e-6 && !inside(v));
    let best = { M: 0, at: 0 };
    for (const v of at) { const r = cut(v); if (Math.abs(r.M) > Math.abs(best.M)) best = { M: r.M, at: v }; }
    return best;
  };
  const wide = (axis) => (axis === 'x' ? B : L);
  const layers = { x: { bar: bx, s: f.mat.sX, d: dX, name: f.mat.barX }, y: { bar: by, s: f.mat.sY, d: dY, name: f.mat.barY } };
  const fcr = Math.sqrt(fc);
  for (const axis of ['x', 'y']) {
    const lay = layers[axis], b = wide(axis);
    // flexure: the largest moment on a cut across this direction's bars; positive M = tension at the bottom
    const sc = scan(axis);
    const MuPerM = Math.abs(sc.M) / (b / 1000) * 1e6;   // N·mm per metre of width
    const AsProv = lay.bar.area * 1000 / lay.s;
    const AsReq = MuPerM > 0 ? requiredAs({ b: 1000, d: lay.d, fc, fy, Mu: MuPerM, phi: PHI_FLEX }) : 0;
    const rhoMin = fy < 420 ? 0.0020 : Math.max(0.0014, 0.0018 * 420 / fy);
    const AsMin = rhoMin * 1000 * H;
    if (AsReq === null) checks.push({ id: 'flexure-' + axis, clause: 'ACI 318-19 13.3.3, 22.3', status: 'fail', unit: 'mm²/m', demand: Infinity, capacity: AsProv, ratio: Infinity, vars: { dir: axis, Mu: r1(Math.abs(sc.M) / (b / 1000)), d: Math.round(lay.d), reason: 'depth' } });
    else checks.push(mk('flexure-' + axis, 'ACI 318-19 13.3.3, 22.3', Math.max(AsReq, AsMin), AsProv, 'mm²/m', { dir: axis, bar: lay.name, s: lay.s, req: Math.round(AsReq), min: Math.round(AsMin), prov: Math.round(AsProv), Mu: r1(Math.abs(sc.M) / (b / 1000)), at: r2(sc.at) }));
    // one-way shear at d from every column face, in this direction
    const cutsV = cols.flatMap((k) => (axis === 'x' ? [k.x - k.cx / 2 - lay.d / 1000, k.x + k.cx / 2 + lay.d / 1000] : [k.y - k.cy / 2 - lay.d / 1000, k.y + k.cy / 2 + lay.d / 1000])).filter((v) => Math.abs(v) < (axis === 'x' ? L : B) / 2000 - 1e-6 && !(axis === 'x' ? insideX(v) : insideY(v)));
    let Vmax = 0;
    for (const v of cutsV) { const r = axis === 'x' ? cutX(v) : cutY(v); Vmax = Math.max(Vmax, Math.abs(r.V)); }
    if (cutsV.length) {
      const bs = beamShear({ bw: b, d: lay.d, h: H, fc, fyt: 420, Av: 0, s: 0, Vu: Vmax * 1000, As: AsProv * b / 1000, lambda: lam });
      checks.push(mk('shear-' + axis, 'ACI 318-19 13.2.6.2, 22.5.5.1', Vmax, PHI_SHEAR * bs.Vc / 1000, 'kN', { dir: axis, Vu: r1(Vmax), phiVc: r1(PHI_SHEAR * bs.Vc / 1000), d: Math.round(lay.d) }));
    }
    // development of the bars past the critical section (the column face)
    const face = Math.max(...cols.map((k) => (axis === 'x' ? Math.abs(k.x) + k.cx / 2 : Math.abs(k.y) + k.cy / 2))) * 1000;
    const avail = (axis === 'x' ? L : B) / 2 - face - c;
    const ld = developmentLength(lay.bar, fy, fc, lam, lay.s - lay.bar.db >= lay.bar.db && c >= lay.bar.db);
    const ldh = f.mat.hooks ? hookDevelopment(lay.bar, fy, fc, lam) : Infinity;
    const asRatio = AsReq && AsProv > 0 ? Math.min(1, Math.max(AsReq, AsMin) / AsProv) : 1;
    const need = ld;
    if (avail >= need) checks.push(mk('development-' + axis, 'ACI 318-19 25.4.2.3', need, avail, 'mm', { dir: axis, ld: Math.round(need), avail: Math.round(avail), by: 'straight' }));
    else if (f.mat.hooks && avail + 0 >= ldh) checks.push(mk('development-' + axis, 'ACI 318-19 25.4.3.1', ldh, avail, 'mm', { dir: axis, ld: Math.round(ldh), avail: Math.round(avail), by: 'hook' }));
    else checks.push(mk('development-' + axis, 'ACI 318-19 25.4.2.3', need, avail, 'mm', { dir: axis, ld: Math.round(need), avail: Math.round(avail), by: f.mat.hooks ? 'hook-too' : 'straight', asRatio: r2(asRatio) }));
  }
  // minimum depth above the bottom bars
  const above = H - c - bx.db - by.db;
  checks.push(mk('depth', 'ACI 318-19 13.3.1.2', 150, above, 'mm', { above: Math.round(above) }));
  // punching shear at d/2 of every column; at an edge or a corner the perimeter is cut off by the footing's edge (ACI 318-19 22.6.4.1)
  for (const [i, k] of cols.entries()) checks.push(...punching(k, i + 1, { fu, L, B, dAvg, fcr, lam }));
  return { checks, pressure: field.ok ? field : null, strength: fu, info, soil };
}
// ---- punching at the critical section, interior, edge or corner ----

/**
 * The critical section for punching at d/2 from a column face (ACI 318-19 22.6.4.1), as line segments of the slab depth d, with the sides that
 * fall outside the footing dropped and the others cut off at its edge. The footing runs from −L/2 to L/2 and −B/2 to B/2 (m). Returns the
 * segments, their total length bo (m), the centroid, and the section moduli J about each axis through the centroid (m⁴, ACI R22.6.5.3: the sides
 * along the bending direction add d·l³/12 + l·d³/12, the others only the transfer term d·l·arm²) with the farthest distance c to a segment end.
 */
export function punchSection(k, d, L, B) {
  const bx = k.cx + d, by = k.cy + d, x0 = k.x - bx / 2, x1 = k.x + bx / 2, y0 = k.y - by / 2, y1 = k.y + by / 2;
  const e = 1e-9, segs = [];
  const ya = Math.max(y0, -B / 2), yb = Math.min(y1, B / 2), xa = Math.max(x0, -L / 2), xb = Math.min(x1, L / 2);
  if (yb > ya + e) for (const x of [x0, x1]) if (x > -L / 2 + e && x < L / 2 - e) segs.push({ dir: 'y', len: yb - ya, mx: x, my: (ya + yb) / 2 });
  if (xb > xa + e) for (const y of [y0, y1]) if (y > -B / 2 + e && y < B / 2 - e) segs.push({ dir: 'x', len: xb - xa, mx: (xa + xb) / 2, my: y });
  const bo = segs.reduce((a, g) => a + g.len, 0);
  if (!(bo > e)) return { segs, bo: 0, x0, x1, y0, y1, bx, by };
  const xc = segs.reduce((a, g) => a + g.len * g.mx, 0) / bo, yc = segs.reduce((a, g) => a + g.len * g.my, 0) / bo;
  let Jx = 0, Jy = 0, cx = 0, cy = 0;
  for (const g of segs) {
    Jx += (g.dir === 'x' ? d * g.len ** 3 / 12 + g.len * d ** 3 / 12 : 0) + d * g.len * (g.mx - xc) ** 2;
    Jy += (g.dir === 'y' ? d * g.len ** 3 / 12 + g.len * d ** 3 / 12 : 0) + d * g.len * (g.my - yc) ** 2;
    cx = Math.max(cx, g.dir === 'x' ? Math.abs(g.mx - xc) + g.len / 2 : Math.abs(g.mx - xc));
    cy = Math.max(cy, g.dir === 'y' ? Math.abs(g.my - yc) + g.len / 2 : Math.abs(g.my - yc));
  }
  return { segs, bo, xc, yc, Jx, Jy, cx, cy, x0, x1, y0, y1, bx, by };
}

/**
 * Punching of one column (k: m and kN, kN·m) on the strength pressure field fu. The stress is Vu/(bo·d) plus γv·M·c/J in each direction, M being the
 * column's moment plus Vu times the distance from the column to the section's centroid (edge and corner columns), the two directions and the two
 * terms added without signs: slightly conservative. vc is the least of ACI 318-19 Table 22.6.5.2 (a)–(c) with the size effect λs.
 */
function punching(k, n, { fu, L, B, dAvg, fcr, lam }) {
  const d = dAvg / 1000, sec = punchSection(k, d, L / 1000, B / 1000);
  if (!(sec.bo > 0)) return [note('punching', 'ACI 318-19 22.6', { n, why: 'edge' })];
  const where = sec.segs.length >= 4 ? 'interior' : sec.segs.length === 3 ? 'edge' : 'corner';
  let inside = 0;
  const xa = Math.max(sec.x0, -L / 2000), xb = Math.min(sec.x1, L / 2000), ya = Math.max(sec.y0, -B / 2000), yb = Math.min(sec.y1, B / 2000);
  const m = 24, dx = (xb - xa) / m, dy = (yb - ya) / m;
  for (let a = 0; a < m; a++) for (let q = 0; q < m; q++) inside += fu.q(xa + (a + 0.5) * dx, ya + (q + 0.5) * dy) * dx * dy;
  const Vu = Math.max(0, k.P - inside);
  const gvx = 1 - 1 / (1 + (2 / 3) * Math.sqrt(sec.bx / sec.by)), gvy = 1 - 1 / (1 + (2 / 3) * Math.sqrt(sec.by / sec.bx));
  const eX = Math.abs(k.x - sec.xc), eY = Math.abs(k.y - sec.yc);
  const vu = Vu / (sec.bo * d) / 1000 + gvx * (Math.abs(k.My) + Vu * eX) * sec.cx / sec.Jx / 1000 + gvy * (Math.abs(k.Mx) + Vu * eY) * sec.cy / sec.Jy / 1000;   // MPa
  const beta = Math.max(k.cx, k.cy) / Math.min(k.cx, k.cy), lamS = Math.min(1, Math.sqrt(2 / (1 + 0.004 * dAvg)));
  const alphaS = where === 'interior' ? 40 : where === 'edge' ? 30 : 20;
  const vc = Math.min(0.33, 0.17 * (1 + 2 / beta), 0.083 * (2 + alphaS * d / sec.bo)) * lamS * lam * fcr;
  return [mk('punching', 'ACI 318-19 13.2.6.3, 22.6.5.2', vu, PHI_SHEAR * vc, 'MPa', { n, where, Vu: r1(Vu), vu: r2(vu), phivc: r2(PHI_SHEAR * vc), bo: Math.round(sec.bo * 1000), d: Math.round(dAvg) })];
}

const contactShare = (field) => {
  const n = 40; let k = 0;
  for (let i = 0; i < n; i++) for (let j = 0; j < n; j++) if (field.a + field.b * (-field.L / 2 + (i + 0.5) * field.L / n) + field.c * (-field.B / 2 + (j + 0.5) * field.B / n) > 0) k++;
  return k / (n * n);
};

// ---- settlement ----

/** The settlement (mm) at the corner of a flexible rectangle b × l (m) carrying q (kPa) on an elastic half-space (E MPa, ν): Timoshenko and Goodier, m = l/b ≥ 1. */
const cornerSettlement = (b, l, q, E, nu) => {
  const m = Math.max(l, b) / Math.min(l, b), sh = Math.min(l, b), r = Math.sqrt(m * m + 1);
  return q * sh * (1 - nu * nu) / (Math.PI * E * 1000) * (m * Math.log((1 + r) / m) + Math.log(m + r)) * 1000;
};
/**
 * Elastic settlement of a loaded L × B (mm) rectangle at pressure q (kPa) on a half-space with modulus Es (MPa) and Poisson's ratio nu: the centre
 * is four corners of the quarter rectangles, the corner is one corner of the whole. Flexible loading, so the centre is an upper bound for a stiff
 * footing's average; a layer of limited depth, the overburden relief and consolidation are left out (the soil is yours).
 */
export function settlement(L, B, q, Es, nu = 0.3) {
  const l = L / 1000, b = B / 1000;
  const corner = cornerSettlement(b, l, q, Es, nu), centre = 4 * cornerSettlement(b / 2, l / 2, q, Es, nu);
  return { centre, corner };
}

// ---- a flexible mat on springs ----

/**
 * A footing taken as a plate on elastic springs instead of a rigid body (a mat under many columns). The footing's L × B × H is meshed by the
 * frame library's plate elements (lib/frame/plate-mesh.js, MITC4 Mindlin plates), the soil is a Winkler bed of subgrade modulus soil.ks (kN/m³) lumped
 * on the nodes by their tributary area, and every column load is spread over the nodes of its own footprint (the load, then a linear share for the
 * moments) so that no node carries a point singularity. Two sets run: the service loads (settlement, contact pressure) and the strength loads (the
 * bending moment and shear per metre, then the same punching as above on the springs' pressure). The mat's own weight and the soil above are left
 * out (they cancel in the net pressure), as in checkFooting.
 *
 *   flexibleMat(f, loads, soil, { size }) → { ok, checks, nodes, grid, settleMax, qMax, MxPos, MxNeg, MyPos, MyNeg, … } | { ok: false, reason }
 */
export function flexibleMat(f, loads, soilIn = {}, opts = {}) {
  const soil = { ...SOIL_DEFAULTS, ...soilIn };
  if (!(soil.ks > 0)) return { ok: false, reason: 'ks', checks: [note('mat-ks', 'plate on springs')] };
  const L = f.L, B = f.B, H = f.H, fc = fcOf(f.concrete);
  const withLoads = loads.filter((l) => l.service || l.strength);
  if (!withLoads.length) return { ok: false, reason: 'loads', checks: [note('loads', 'fnd')] };
  // the mesh must resolve the column footprints (the peak moment under a column keeps rising until a column is three or more elements wide), within ~8000 nodes
  const smallest = Math.min(...withLoads.map((l) => Math.min(l.cx || 300, l.cy || 300)));
  let size = opts.size || Math.min(Math.min(600, Math.max(150, Math.min(L, B) / 14)), Math.max(100, smallest / 3));
  size = Math.max(size, Math.sqrt(L * B / 8000));
  const Ec = 4700 * Math.sqrt(fc), nu = 0.2;
  const json = { format: FRAME_FORMAT, version: FRAME_VERSION, name: 'mat', nodes: [], materials: [{ id: 'c', name: 'C', E: Ec, G: Ec / (2 * (1 + nu)), rho: 2400 }], sections: [], members: [], supports: [], cases: [], combos: [] };
  const pts = [];
  for (const l of withLoads) for (const sx of [-1, 1]) for (const sy of [-1, 1]) pts.push([l.x + sx * (l.cx || 300) / 2, l.y + sy * (l.cy || 300) / 2]);
  const m = slabPlates(json, { id: 'm', outline: [[-L / 2, -B / 2], [L / 2, -B / 2], [L / 2, B / 2], [-L / 2, B / 2]], z: 0, t: H, material: 'c', size, points: pts.filter(([x, y]) => Math.abs(x) <= L / 2 && Math.abs(y) <= B / 2) });
  if (!json.plates.length) return { ok: false, reason: 'mesh', checks: [note('mat-mesh', 'plate on springs')] };
  const byId = new Map(json.nodes.map((n) => [n.id, n]));
  const trib = new Map();
  for (const p of json.plates) {
    const q = p.nodes.map((i) => byId.get(i));
    const A = Math.abs((q[2].x - q[0].x) * (q[3].y - q[1].y) - (q[3].x - q[1].x) * (q[2].y - q[0].y)) / 2;
    for (const i of p.nodes) trib.set(i, (trib.get(i) || 0) + A / 4);
  }
  const ks = soil.ks * 1e-6;   // kN/m³ → N/mm³
  json.supports = json.nodes.map((n) => ({ node: n.id, fix: [true, true, false, false, false, true], k: [0, 0, ks * trib.get(n.id), 0, 0, 0] }));
  // a column's load on the nodes inside its footprint: P/n plus the moment shares, as a pile group would take them
  const spread = (l, set) => {
    const hw = (l.cx || 300) / 2 + 1, hh = (l.cy || 300) / 2 + 1;
    let at = json.nodes.filter((n) => Math.abs(n.x - l.x) <= hw && Math.abs(n.y - l.y) <= hh);
    if (!at.length) { let best = null; for (const n of json.nodes) { const d = Math.hypot(n.x - l.x, n.y - l.y); if (!best || d < best.d) best = { n, d }; } at = [best.n]; }
    const sx2 = at.reduce((a, n) => a + ((n.x - l.x) / 1000) ** 2, 0), sy2 = at.reduce((a, n) => a + ((n.y - l.y) / 1000) ** 2, 0);
    return at.map((n) => {
      const dx = (n.x - l.x) / 1000, dy = (n.y - l.y) / 1000;
      const R = (set.P || 0) / at.length + (sx2 > 1e-12 ? (set.My || 0) * dx / sx2 : 0) - (sy2 > 1e-12 ? (set.Mx || 0) * dy / sy2 : 0);   // kN, down; My loads the +x side more, Mx the −y side
      return { type: 'node', node: n.id, F: [0, 0, -R * 1000, 0, 0, 0] };
    });
  };
  for (const kind of ['service', 'strength']) {
    const list = withLoads.filter((l) => l[kind]);
    if (list.length) json.cases.push({ id: kind, name: kind, kind: 'other', selfWeight: 0, loads: list.flatMap((l) => spread(l, l[kind])) });
  }
  const { model, warnings } = cleanFrame(json);
  const sol = solveFrame(model);
  if (!sol.ok) return { ok: false, reason: 'solve', error: sol.error, checks: [{ id: 'mat-solve', clause: 'plate on springs', status: 'fail', unit: '', demand: Infinity, capacity: 0, ratio: Infinity, vars: { reason: String(sol.error?.code || sol.error || '') } }] };
  const idx = new Map(model.nodes.map((n, k) => [n.id, k]));
  const checks = [], out = { ok: true, checks, size, nodes: json.nodes.length, plates: json.plates.length, warnings };
  const R = { service: sol.results['case:service'], strength: sol.results['case:strength'] };
  if (R.service) {
    let w = 0, q = 0, wMin = Infinity;
    const a = new Map();
    for (const n of json.nodes) { const k = idx.get(n.id), uz = -R.service.u[6 * k + 2]; w = Math.max(w, uz); wMin = Math.min(wMin, uz); q = Math.max(q, soil.ks * uz / 1000); a.set(n.id, uz); }
    out.settleMax = w; out.settleMin = wMin; out.qMax = q;
    out.reaction = json.nodes.reduce((t, n) => t + ks * trib.get(n.id) * a.get(n.id), 0) / 1000;   // kN: the springs' total, equal to the service loads
    if (soil.qa > 0) checks.push(mk('mat-bearing', 'plate on springs; ACI 318-19 13.2.6.1', q, soil.qa, 'kPa', { q: r1(q), qa: soil.qa, w: r2(w), diff: r2(w - wMin) }));
    else checks.push(note('mat-bearing', 'plate on springs; ACI 318-19 13.2.6.1', { q: r1(q), w: r2(w), diff: r2(w - wMin) }));
    checks.push(note('mat-settlement', 'plate on springs', { max: r2(w), min: r2(wMin), diff: r2(w - wMin) }));
  }
  if (R.strength) {
    const nr = plateNodeResults(sol.prep, R.strength);
    let mxP = 0, mxN = 0, myP = 0, myN = 0, qv = 0;
    const dd = (H - f.mat.cover - BARS.get(f.mat.barX).db) ;
    const nearColumn = (n) => withLoads.some((l) => Math.abs(n.x - l.x) < (l.cx || 300) / 2 + dd && Math.abs(n.y - l.y) < (l.cy || 300) / 2 + dd);
    for (const n of json.nodes) {
      const v = nr.get(idx.get(n.id))?.[0]?.values || nr.get(idx.get(n.id))?.values;
      if (!v) continue;
      mxP = Math.max(mxP, v[3]); mxN = Math.min(mxN, v[3]); myP = Math.max(myP, v[4]); myN = Math.min(myN, v[4]);
      if (!nearColumn(n)) qv = Math.max(qv, Math.hypot(v[6], v[7]));   // shear is read at d from the column faces, not under the load
    }
    // N·mm/mm → kN·m/m; N/mm → kN/m
    const M = { xP: mxP / 1000, xN: mxN / 1000, yP: myP / 1000, yN: myN / 1000, V: qv };
    Object.assign(out, { MxPos: M.xP, MxNeg: M.xN, MyPos: M.yP, MyNeg: M.yN, Vmax: M.V });
    const c = f.mat.cover, bx = BARS.get(f.mat.barX), by = BARS.get(f.mat.barY), fy = soil.fy;
    const rhoMin = fy < 420 ? 0.0020 : Math.max(0.0014, 0.0018 * 420 / fy), AsMin = rhoMin * 1000 * H;
    const layers = { x: { bar: bx, s: f.mat.sX, d: H - c - bx.db / 2, pos: M.xP, neg: M.xN, name: f.mat.barX }, y: { bar: by, s: f.mat.sY, d: H - c - bx.db - by.db / 2, pos: M.yP, neg: M.yN, name: f.mat.barY } };
    // Mx is the moment that bends along x (its tension runs along x bars: the bottom bars barX); a positive value is tension on the plate's −z (bottom) face
    for (const axis of ['x', 'y']) {
      const lay = layers[axis], AsProv = lay.bar.area * 1000 / lay.s;
      const Mu = lay.pos * 1e6;   // N·mm per metre
      const req = Mu > 0 ? requiredAs({ b: 1000, d: lay.d, fc, fy, Mu, phi: PHI_FLEX }) : 0;
      if (req === null) checks.push({ id: 'mat-flexure-' + axis, clause: 'ACI 318-19 13.3.3, 22.3', status: 'fail', unit: 'mm²/m', demand: Infinity, capacity: AsProv, ratio: Infinity, vars: { dir: axis, Mu: r1(lay.pos) } });
      else checks.push(mk('mat-flexure-' + axis, 'ACI 318-19 13.3.3, 22.3', Math.max(req, AsMin), AsProv, 'mm²/m', { dir: axis, bar: lay.name, s: lay.s, req: Math.round(req), min: Math.round(AsMin), prov: Math.round(AsProv), Mu: r1(lay.pos) }));
      // hogging (tension on the top face): the footing has no top bars, so the plain concrete's flexural strength is the capacity (ACI 318-19 14.5.2, Sm = h²/6 per metre)
      const hog = -lay.neg;
      if (hog > 0.02 * Math.max(1, lay.pos)) {
        const cap = PHI_PLAIN * 0.42 * lam0(soil) * Math.sqrt(fc) * (H * H / 6) * 1000 / 1e6;   // kN·m/m
        checks.push(mk('mat-hogging-' + axis, 'ACI 318-19 14.5.2.1', hog, cap, 'kN·m/m', { dir: axis, Mu: r1(hog), cap: r1(cap) }));
      }
    }
    // one-way shear at the plate's largest transverse force against the concrete's strength at d
    const dAvg = (layers.x.d + layers.y.d) / 2, vcap = PHI_SHEAR * 0.17 * lam0(soil) * Math.sqrt(fc) * dAvg;   // N/mm
    checks.push(mk('mat-shear', 'ACI 318-19 22.5.5.1', M.V, vcap, 'kN/m', { Vu: r1(M.V), phiVc: r1(vcap), d: Math.round(dAvg) }));
    // punching: the strength pressure is the springs' own, so the column load less the reaction inside its critical section
    const q = (x, y) => interp(R.strength, model, idx, json, x * 1000, y * 1000, soil.ks);
    const fu = { q };
    const fcr = Math.sqrt(fc);
    for (const [i, l] of withLoads.filter((l) => l.strength).entries()) {
      const k = { x: l.x / 1000, y: l.y / 1000, cx: (l.cx || 300) / 1000, cy: (l.cy || 300) / 1000, P: l.strength.P || 0, Mx: l.strength.Mx || 0, My: l.strength.My || 0 };
      checks.push(...punching(k, i + 1, { fu, L, B, dAvg, fcr, lam: soil.lambda }));
    }
  }
  return out;
}
const PHI_PLAIN = 0.60;
const lam0 = (soil) => soil.lambda;

/** The springs' pressure (kPa) at a point (mm): the bilinear field of the node settlements times ks. */
function interp(Rs, model, idx, json, x, y, ks) {
  // nodes lie on a grid-ish mesh: find the plate containing the point and interpolate by its bilinear shape in plate coordinates (a quad here is near rectangular)
  const byId = json._byId || (json._byId = new Map(json.nodes.map((n) => [n.id, n])));
  const hit = json._plates || (json._plates = json.plates.map((p) => { const q = p.nodes.map((i) => byId.get(i)); return { p, q, x0: Math.min(...q.map((n) => n.x)), x1: Math.max(...q.map((n) => n.x)), y0: Math.min(...q.map((n) => n.y)), y1: Math.max(...q.map((n) => n.y)) }; }));
  const e = hit.find((h) => x >= h.x0 - 1e-6 && x <= h.x1 + 1e-6 && y >= h.y0 - 1e-6 && y <= h.y1 + 1e-6);
  if (!e) return 0;
  const u = (n) => -Rs.u[6 * idx.get(n.id) + 2];
  const tx = e.x1 > e.x0 ? (x - e.x0) / (e.x1 - e.x0) : 0, ty = e.y1 > e.y0 ? (y - e.y0) / (e.y1 - e.y0) : 0;
  const at = (cx, cy) => e.q.find((n) => Math.abs(n.x - cx) < 1e-6 && Math.abs(n.y - cy) < 1e-6);
  const g = (cx, cy) => { const n = at(cx, cy); return n ? u(n) : 0; };
  return ks / 1000 * ((1 - tx) * (1 - ty) * g(e.x0, e.y0) + tx * (1 - ty) * g(e.x1, e.y0) + tx * ty * g(e.x1, e.y1) + (1 - tx) * ty * g(e.x0, e.y1));
}

// ---- pile groups ----

/**
 * The elastic method: every pile takes P/n plus the moment shares, R_i = P/n + Mx·y_i/Σy² + My·x_i/Σx² (a rigid cap, equal piles, with x and y from
 * the group's centroid). `cap` = { compression, tension } in kN a pile may carry (yours: from the pile's design, not from here).
 */
export function pileGroup(piles, load, cap = {}) {
  const n = piles.length;
  const cx = piles.reduce((s, p) => s + p.x, 0) / n, cy = piles.reduce((s, p) => s + p.y, 0) / n;
  const xs = piles.map((p) => (p.x - cx) / 1000), ys = piles.map((p) => (p.y - cy) / 1000);
  const sx2 = xs.reduce((s, v) => s + v * v, 0), sy2 = ys.reduce((s, v) => s + v * v, 0);
  const P = load.P || 0, Mx = load.Mx || 0, My = load.My || 0;
  const reactions = piles.map((p, i) => P / n + (sy2 > 1e-12 ? Mx * ys[i] / sy2 : 0) + (sx2 > 1e-12 ? My * xs[i] / sx2 : 0));
  const checks = [];
  const top = Math.max(...reactions), bot = Math.min(...reactions);
  if (cap.compression > 0) checks.push(mk('pile-compression', 'pile group, elastic method', top, cap.compression, 'kN', { n, R: r1(top), cap: cap.compression, pile: reactions.indexOf(top) + 1 }));
  else checks.push(note('pile-compression', 'pile group, elastic method', { R: r1(top) }));
  if (bot < -1e-9) {
    if (cap.tension > 0) checks.push(mk('pile-tension', 'pile group, elastic method', -bot, cap.tension, 'kN', { R: r1(bot), cap: cap.tension, pile: reactions.indexOf(bot) + 1 }));
    else checks.push({ id: 'pile-tension', clause: 'pile group, elastic method', status: cap.tension === 0 ? 'fail' : 'note', unit: 'kN', demand: -bot, capacity: 0, ratio: Infinity, vars: { R: r1(bot), pile: reactions.indexOf(bot) + 1 } });
  }
  const sum = reactions.reduce((s, v) => s + v, 0);
  return { reactions, sum, centroid: [cx, cy], checks, equilibrium: Math.abs(sum - P) < 1e-6 * Math.max(1, Math.abs(P)) };
}

// ---- cantilever retaining wall ----

/**
 * A cantilever wall with a level backfill. wall = { H (retained height of soil above the base's top, mm), hb (base thickness), t (stem thickness,
 * constant), toe, heel (mm), embed (soil over the toe, mm, ignored for passive) }. soil = { gamma (kN/m³), phi (degrees), surcharge (kPa), qa,
 * mu (base friction), fsSlide, fsOt, gammaConc }. Active pressure is Rankine, Ka = tan²(45° − φ/2), on the vertical plane through the heel,
 * with the soil on the heel and the stem as weight; passive pressure is left out.
 */
export function retainingWall(wall, soil = {}) {
  const s = { gamma: 18, phi: 30, surcharge: 0, qa: 0, mu: 0, fsSlide: 1.5, fsOt: 1.5, gammaConc: 24, ...soil };
  const H = wall.H / 1000, hb = wall.hb / 1000, t = wall.t / 1000, toe = wall.toe / 1000, heel = wall.heel / 1000;
  const Bw = toe + t + heel, Ht = H + hb;
  const Ka = Math.tan((45 - s.phi / 2) * Math.PI / 180) ** 2;
  const Pa = 0.5 * Ka * s.gamma * Ht * Ht, Ps = Ka * s.surcharge * Ht;
  const MoPa = Pa * Ht / 3, MoPs = Ps * Ht / 2;
  // weights per metre of wall, arms about the toe's front edge
  const parts = [
    { name: 'base', W: s.gammaConc * Bw * hb, x: Bw / 2 },
    { name: 'stem', W: s.gammaConc * t * H, x: toe + t / 2 },
    { name: 'soil', W: s.gamma * heel * H, x: toe + t + heel / 2 },
    { name: 'surcharge', W: s.surcharge * heel, x: toe + t + heel / 2 },
  ];
  const W = parts.reduce((a, p) => a + p.W, 0), Mr = parts.reduce((a, p) => a + p.W * p.x, 0);
  const Ho = Pa + Ps, Mo = MoPa + MoPs;
  const e = Bw / 2 - (Mr - Mo) / W;   // eccentricity of the resultant from the middle of the base
  const field = pressureField(W, e * 1000, 0, Bw * 1000, 1000);
  const checks = [];
  checks.push(mk('wall-overturning', 'Rankine; overturning about the toe', s.fsOt * Mo, Mr, 'kN·m/m', { fs: r2(Mr / Mo), need: s.fsOt, Mo: r1(Mo), Mr: r1(Mr) }));
  if (s.mu > 0) checks.push(mk('wall-sliding', 'Rankine; sliding on the base', s.fsSlide * Ho, s.mu * W, 'kN/m', { fs: r2(s.mu * W / Ho), need: s.fsSlide, H: r1(Ho), W: r1(W) }));
  else checks.push(note('wall-sliding', 'Rankine; sliding on the base', { H: r1(Ho) }));
  if (!field.ok) checks.push({ id: 'wall-bearing', clause: 'base pressure', status: 'fail', unit: 'kPa', demand: Infinity, capacity: s.qa, ratio: Infinity, vars: { reason: field.reason, e: r2(e) } });
  else if (s.qa > 0) checks.push(mk('wall-bearing', 'base pressure', field.qmax, s.qa, 'kPa', { q: r1(field.qmax), qa: s.qa, e: r2(e), kern: r2(Bw / 6) }));
  else checks.push(note('wall-bearing', 'base pressure', { q: r1(field.qmax) }));
  return { Ka, Pa, Ps, W, Mr, Mo, e, Bw, field, parts, checks };
}

// ---- what the model file keeps ----

const fin = (v, lo, hi, d) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };
const cleanSet = (s) => (s && typeof s === 'object' ? { P: fin(s.P, -1e7, 1e7, 0), Vx: fin(s.Vx, -1e7, 1e7, 0), Vy: fin(s.Vy, -1e7, 1e7, 0), Mx: fin(s.Mx, -1e8, 1e8, 0), My: fin(s.My, -1e8, 1e8, 0) } : null);
export function cleanLoad(l) {
  if (!l || typeof l !== 'object') return null;
  const out = { x: fin(l.x, -1e5, 1e5, 0), y: fin(l.y, -1e5, 1e5, 0), cx: fin(l.cx, 50, 5000, 300), cy: fin(l.cy, 50, 5000, 300) };
  const sv = cleanSet(l.service), st = cleanSet(l.strength);
  if (sv) out.service = sv;
  if (st) out.strength = st;
  return out;
}
/** The foundation settings and column loads of a model file (untrusted): { soil, loads: { footingId: [load] } }, or null when empty. */
export function cleanFoundation(j) {
  if (!j || typeof j !== 'object') return null;
  const s = j.soil || {}, soil = {};
  for (const [k, lo, hi] of [['qa', 0, 1e5], ['mu', 0, 2], ['fill', 0, 1e5], ['gammaSoil', 5, 30], ['gammaConc', 15, 30], ['fsSlide', 1, 10], ['fsOt', 1, 10], ['fy', 200, 700], ['lambda', 0.5, 1], ['Es', 0, 1e4], ['nu', 0, 0.5], ['slim', 1, 1000], ['ks', 0, 1e6]]) soil[k] = fin(s[k], lo, hi, SOIL_DEFAULTS[k]);
  const loads = {};
  for (const [id, list] of Object.entries(j.loads && typeof j.loads === 'object' ? j.loads : {}).slice(0, 5000)) {
    const clean = (Array.isArray(list) ? list : []).slice(0, 100).map(cleanLoad).filter(Boolean);
    if (clean.length && /^[A-Za-z0-9_-]{1,40}$/.test(id)) loads[id] = clean;
  }
  const out = { soil, loads };
  // 0.8 round 3 (EG.5): footings analysed as a flexible mat, pile groups and retaining walls kept in the file
  const mats = {};
  for (const [id, v] of Object.entries(j.mats && typeof j.mats === 'object' ? j.mats : {}).slice(0, 5000)) if (v === true && /^[A-Za-z0-9_-]{1,40}$/.test(id)) mats[id] = true;
  if (Object.keys(mats).length) out.mats = mats;
  const piles = (Array.isArray(j.piles) ? j.piles : []).slice(0, 20).map(cleanPileGroup).filter(Boolean);
  if (piles.length) out.piles = piles;
  const walls = (Array.isArray(j.walls) ? j.walls : []).slice(0, 20).map(cleanWall).filter(Boolean);
  if (walls.length) out.walls = walls;
  const changed = Object.keys(soil).some((k) => soil[k] !== SOIL_DEFAULTS[k]) || out.mats || out.piles || out.walls;
  return changed || Object.keys(loads).length ? out : null;
}

const idOf = (v, d) => (typeof v === 'string' && /^[A-Za-z0-9_-]{1,40}$/.test(v) ? v : d);
const nameOf = (v, d) => (typeof v === 'string' ? v.replace(/[\u0000-\u001f]/g, ' ').trim().slice(0, 60) || d : d);
/** A pile group as the model file keeps it: { id, name, piles: [{ x, y }] (mm), load: { P, Mx, My } (kN, kN·m), cap: { compression, tension } (kN a pile may carry; 0 = not entered) }. */
export function cleanPileGroup(g) {
  if (!g || typeof g !== 'object') return null;
  const piles = (Array.isArray(g.piles) ? g.piles : []).slice(0, 500).map((p) => ({ x: fin(p?.x, -1e5, 1e5, NaN), y: fin(p?.y, -1e5, 1e5, NaN) })).filter((p) => Number.isFinite(p.x) && Number.isFinite(p.y));
  if (!piles.length) return null;
  const l = g.load || {}, c = g.cap || {};
  return { id: idOf(g.id, 'pg1'), name: nameOf(g.name, 'Pile group'), piles, load: { P: fin(l.P, -1e7, 1e7, 0), Mx: fin(l.Mx, -1e8, 1e8, 0), My: fin(l.My, -1e8, 1e8, 0) }, cap: { compression: fin(c.compression, 0, 1e7, 0), tension: fin(c.tension, 0, 1e7, 0) } };
}
/** A cantilever retaining wall: geometry in mm, the soil it holds back (gamma kN/m³, phi degrees, surcharge kPa, qa kPa, mu). */
export function cleanWall(w) {
  if (!w || typeof w !== 'object') return null;
  const H = fin(w.H, 500, 20000, NaN), hb = fin(w.hb, 100, 3000, NaN), t = fin(w.t, 100, 3000, NaN), toe = fin(w.toe, 0, 10000, NaN), heel = fin(w.heel, 0, 20000, NaN);
  if ([H, hb, t, toe, heel].some((v) => !Number.isFinite(v))) return null;
  const q = w.soil || {};
  return { id: idOf(w.id, 'rw1'), name: nameOf(w.name, 'Retaining wall'), H, hb, t, toe, heel, soil: { gamma: fin(q.gamma, 5, 30, 18), phi: fin(q.phi, 0, 50, 30), surcharge: fin(q.surcharge, 0, 1000, 0), qa: fin(q.qa, 0, 1e5, 0), mu: fin(q.mu, 0, 2, 0) } };
}
