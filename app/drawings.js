/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawings.js — general-arrangement (GA) and assembly drawings made from the built model, as display
 * lists for pdf.js (one landscape sheet each, mm, y up) and the in-page preview. No DOM.
 *
 *   drawingSet(state, built, marks, { date, paper }) → { sheets: [sheet], ref, paper }
 *   paper: a key of paper.js PAPERS (A4–A1, ANSI B–D; default A3, 0.4 D3). Every position on a sheet comes from its
 *   size: GA views fit the drawing area left by the frame and the title block band; assembly drawings grow their view
 *   rooms with the sheet's height (paper.k) and keep the dimension gaps and text sizes as they are, so a bigger sheet
 *   draws at a larger standard scale. The part list's columns are as wide as their contents.
 *   sheet = { id, kind: 'plan'|'elevation'|'anchor'|'assembly', number, title, w, h, items, dims, labels, scale }
 *   The anchor bolt plan (0.4 D18) comes after the GA plans and elevations when the model has base plates.
 *
 * Nothing here is stored: the set is made again from the model every time it is asked for, and each
 * title block carries the model ref (CRC-32 of the saved model text), so a print can be matched to
 * the model it came from.
 *
 * GA plans: one per level that has something on it, looking down; the view takes in everything from
 * halfway to the level below (at most 1 m) to halfway to the level above (at most 1 m). Members whose
 * axis runs into the view (columns in plan, beams crossing an elevation) are drawn as their real
 * section outline (the profile symbol); the others as their outline at scale (the box of their section
 * swept along their length) with a chain center line; sloped members in plan as a dashed line over
 * their full length on the level they reach. Footings dashed. Grid lines with bubbles, overall and
 * chained grid dimensions, assembly marks with the profile (GA drawings label the erection mark).
 * GA elevations: one per grid line that has something within 1 m of it, looking at the line (lettered
 * grids from the −y side, numbered grids from the +x side); level lines with their elevations, chained
 * level heights, crossing grid bubbles and dimensions.
 * Assembly drawings: one per assembly mark: the main part (front view at the web, top view, end views
 * where plates are fixed), its attached plates and their holes, chained dimensions to holes and plate
 * edges from the assembly's start, hole heights and plate hole positions, part list, loose bolts, welds.
 * Scales come from SCALES (ISO 5455 recommended reduction scales 1:2, 1:5, 1:10 × 10ⁿ, plus 1:25 and
 * 1:250, which building drawings also use): the largest that fits. A long thin assembly may get a
 * larger scale across its depth than along its length; the view title then says both.
 * Weld symbols (0.4 D8): AWS A2.4 fillet symbols in each assembly's front view — an arrow to the joint, a reference line,
 * the fillet triangle on the arrow side (below the line, its upright leg on the left), the size to its left and an
 * all-around circle where the weld runs all round; sheet.welds lists them ({ x, y, size, allAround }) for the tests.
 * Not drawn: hidden-line removal (outlines overlap), bolts (listed, their holes drawn).
 */
import { textWidth } from './pdf.js';
import { toWorld, toLocal, dot, add, mul, endX } from './geom.js';
import { faceThickness } from './profiles.js';
import { crc32 } from './zip.js';
import { cloudBase } from './issues.js';
import { paperOf, DEFAULT_PAPER } from './paper.js';
import { t } from './i18n.js';

/** The sheet being drawn on (drawingSet sets it for one set, then puts A3 back). */
export const SHEET = { w: 420, h: 297, key: 'A3', k: 1 };
export const SCALES = [1, 2, 5, 10, 20, 25, 50, 100, 200, 250, 500, 1000, 2000, 5000, 10000];
/** The largest standard scale (smallest denominator) at which `size` model mm fits in `room` paper mm. */
export const pickScale = (size, room) => SCALES.find((n) => size / n <= room) || SCALES[SCALES.length - 1];
const ratio = (n) => '1:' + n;
const fmt = (v) => String(Math.round(v));
const PLAN_BAND = 1000, ELEV_BAND = 1000;
let AREA = { x0: 15, x1: 405, y0: 58, y1: 270 };        // drawing area above the title block band
function usePaper(key) {
  const p = paperOf(key);
  Object.assign(SHEET, { w: p.w, h: p.h, key: p.key, k: p.k });
  AREA = { x0: 15, x1: p.w - 15, y0: 58, y1: p.h - 27 };
}

const STYLE = {
  outline: { w: 0.35 }, thick: { w: 0.5 }, thin: { w: 0.18 },
  hidden: { w: 0.18, dash: [1.5, 1] }, center: { w: 0.13, dash: [4, 1, 0.6, 1] },
  grid: { w: 0.18, dash: [8, 1.5, 1, 1.5] }, footing: { w: 0.18, dash: [2, 1.2] }, level: { w: 0.18, dash: [5, 1.5] },
};

/** A display-list builder with dimensions. */
function sheetBuilder() {
  const items = [], dims = [], labels = [], regions = [];
  const S = {
    items, dims, labels, regions,
    /** Where a part or footing is drawn (paper points), for revision clouds (0.4 D19). key 'part:<id>' / 'footing:<id>'. */
    region(key, pts) {
      if (!pts.length) return;
      const xs = pts.map((q) => q[0]), ys = pts.map((q) => q[1]);
      regions.push({ key, x0: Math.min(...xs), y0: Math.min(...ys), x1: Math.max(...xs), y1: Math.max(...ys) });
    },
    P(pts, o = {}) { if (pts.length >= 2) items.push({ k: 'path', pts, w: o.w ?? 0.35, dash: o.dash || null, closed: !!o.closed, fill: !!o.fill }); },
    T(s, x, y, h = 2.5, o = {}) { items.push({ k: 'text', s: String(s), x, y, h, align: o.align || 'left', rot: o.rot || 0, bold: !!o.bold }); },
    C(c, r, o = {}) { items.push({ k: 'circle', c, r, w: o.w ?? 0.3, dash: o.dash || null, fill: !!o.fill }); },
    rect(x0, y0, x1, y1, o = {}) { S.P([[x0, y0], [x1, y0], [x1, y1], [x0, y1]], { ...o, closed: true }); },
    /** Horizontal dimension from paper x1 to x2, dimension line at paper y, extension lines from `from`. */
    dimH(x1, x2, y, from, value, view, out = 0, avoid = null) {
      const sg = y < from ? -1 : 1;
      S.P([[x1, from], [x1, y + sg * 1.5]], STYLE.thin); S.P([[x2, from], [x2, y + sg * 1.5]], STYLE.thin);
      S.P([[x1, y], [x2, y]], STYLE.thin);
      for (const x of [x1, x2]) S.P([[x - 0.9, y - 0.9], [x + 0.9, y + 0.9]], { w: 0.35 });
      const label = fmt(value), tw = textWidth(label, 2.2), fits = Math.abs(x2 - x1) >= tw + 1;
      // too short for its figure: the figure goes outside the end nearer the chain's end
      const tx = fits || !out ? (x1 + x2) / 2 : out < 0 ? Math.min(x1, x2) - tw / 2 - 1.2 : Math.max(x1, x2) + tw / 2 + 1.2;
      let ty = y + (fits || out ? 0.8 : -3.2);
      // in a chain, a figure that would sit on the one before steps away from the drawing (small sheets, close holes)
      if (avoid) { for (let i = 0; i < 3 && avoid.some((b) => overlap(b, textBox(label, tx, ty, 2.2, { align: 'center' }))); i++) ty += sg * 2.8; avoid.push(textBox(label, tx, ty, 2.2, { align: 'center' })); }
      S.T(label, tx, ty, 2.2, { align: 'center' });
      dims.push({ dir: 'h', value: Math.round(value), view });
    },
    dimV(y1, y2, x, from, value, view, out = 0, avoid = null) {
      const sg = x < from ? -1 : 1;
      S.P([[from, y1], [x + sg * 1.5, y1]], STYLE.thin); S.P([[from, y2], [x + sg * 1.5, y2]], STYLE.thin);
      S.P([[x, y1], [x, y2]], STYLE.thin);
      for (const y of [y1, y2]) S.P([[x - 0.9, y - 0.9], [x + 0.9, y + 0.9]], { w: 0.35 });
      const label = fmt(value), tw = textWidth(label, 2.2), fits = Math.abs(y2 - y1) >= tw + 1;
      const ty = fits || !out ? (y1 + y2) / 2 : out < 0 ? Math.min(y1, y2) - tw / 2 - 1.2 : Math.max(y1, y2) + tw / 2 + 1.2;
      let tx = x - 0.8;
      const o = { align: 'center', rot: Math.PI / 2 };
      if (avoid) { for (let i = 0; i < 3 && avoid.some((b) => overlap(b, textBox(label, tx, ty, 2.2, o))); i++) tx += sg * 2.8; avoid.push(textBox(label, tx, ty, 2.2, o)); }
      S.T(label, tx, ty, 2.2, o);
      dims.push({ dir: 'v', value: Math.round(value), view });
    },
    /** A chain of horizontal dimensions through model positions `vals` (sorted), mapped by `X`, plus the overall. */
    chainH(vals, X, y, from, step, view) {
      if (vals.length < 2) return;
      const mid = (vals[0] + vals[vals.length - 1]) / 2;
      const avoid = [];
      if (vals.length > 2) for (let i = 1; i < vals.length; i++) S.dimH(X(vals[i - 1]), X(vals[i]), y, from, vals[i] - vals[i - 1], view, (vals[i - 1] + vals[i]) / 2 < mid ? -1 : 1, avoid);
      S.dimH(X(vals[0]), X(vals[vals.length - 1]), vals.length > 2 ? y + step : y, from, vals[vals.length - 1] - vals[0], view);
    },
    chainV(vals, Y, x, from, step, view) {
      if (vals.length < 2) return;
      const mid = (vals[0] + vals[vals.length - 1]) / 2;
      const avoid = [];
      if (vals.length > 2) for (let i = 1; i < vals.length; i++) S.dimV(Y(vals[i - 1]), Y(vals[i]), x, from, vals[i] - vals[i - 1], view, (vals[i - 1] + vals[i]) / 2 < mid ? -1 : 1, avoid);
      S.dimV(Y(vals[0]), Y(vals[vals.length - 1]), vals.length > 2 ? x + step : x, from, vals[vals.length - 1] - vals[0], view);
    },
    label(s, x, y, h = 2.2, o = {}) { S.T(s, x, y, h, o); labels.push(s); S.taken.push(textBox(s, x, y, h, o)); },
    /** Places a label at the first candidate [x, y, o] that overlaps no label placed before (else the first). */
    labelFree(s, cands, h = 2.2) {
      const free = cands.find(([x, y, o]) => { const b = textBox(s, x, y, h, o); return !S.taken.some((t) => overlap(t, b)); }) || cands[0];
      S.label(s, free[0], free[1], h, free[2]);
    },
    taken: [],
    welds: [],
    /** An AWS fillet weld symbol with its arrow at tip (paper mm); dir 1 = the reference line runs right, −1 left. */
    weldSymbol(tip, size, { allAround = false, dir = 1 } = {}) {
      const kx = tip[0] + dir * 5, ky = tip[1] + 6;                      // the leader's knee = the reference line's start
      S.P([tip, [kx, ky]], { w: 0.18 });
      const a = Math.atan2(ky - tip[1], kx - tip[0]), ah = 1.6, aw = 0.55;   // a filled arrowhead at the joint
      S.P([tip, [tip[0] + ah * Math.cos(a) - aw * Math.sin(a), tip[1] + ah * Math.sin(a) + aw * Math.cos(a)], [tip[0] + ah * Math.cos(a) + aw * Math.sin(a), tip[1] + ah * Math.sin(a) - aw * Math.cos(a)]], { w: 0.18, closed: true, fill: true });
      const rx = kx + dir * 14;
      S.P([[kx, ky], [rx, ky]], { w: 0.18 });
      const t0 = Math.min(kx, rx) + 6;                                   // fillet: upright leg on the left, below the line (arrow side)
      S.P([[t0, ky], [t0, ky - 2.6], [t0 + 2.6, ky]], { w: 0.18, closed: true });
      S.T(String(size), t0 - 0.8, ky - 2.4, 2, { align: 'right' });
      S.taken.push({ x0: Math.min(kx, rx) - 0.5, x1: Math.max(kx, rx) + 0.5, y0: ky - 3.2, y1: ky + 0.5 });
      if (allAround) S.C([kx, ky], 1.2, { w: 0.18 });
      S.welds.push({ x: tip[0], y: tip[1], size, allAround });
    },
  };
  return S;
}

/** Paper box of a text item (axis-aligned around its turned outline), padded 0.4 mm. */
function textBox(s, x, y, h, o = {}) {
  const w = textWidth(s, h, o.bold), a = o.rot || 0, c = Math.cos(a), sn = Math.sin(a);
  const dx = o.align === 'center' ? -w / 2 : o.align === 'right' ? -w : 0;
  const pts = [[dx, -0.25 * h], [dx + w, -0.25 * h], [dx + w, h], [dx, h]].map(([u, v]) => [x + u * c - v * sn, y + u * sn + v * c]);
  return { x0: Math.min(...pts.map((p) => p[0])) - 0.4, x1: Math.max(...pts.map((p) => p[0])) + 0.4, y0: Math.min(...pts.map((p) => p[1])) - 0.4, y1: Math.max(...pts.map((p) => p[1])) + 0.4 };
}
const overlap = (a, b) => a.x0 < b.x1 && b.x0 < a.x1 && a.y0 < b.y1 && b.y0 < a.y1;

/** Unique sorted values (within tol). */
export function uniq(vals, tol = 0.5) {
  const s = [...vals].filter(Number.isFinite).sort((a, b) => a - b), o = [];
  for (const v of s) if (!o.length || v - o[o.length - 1] > tol) o.push(v);
  return o;
}

/** Convex hull (Andrew's monotone chain), counter-clockwise. */
export function hull(pts) {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], up = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 1e-9) lo.pop(); lo.push(q); }
  for (let i = p.length - 1; i >= 0; i--) { const q = p[i]; while (up.length >= 2 && cr(up[up.length - 2], up[up.length - 1], q) <= 1e-9) up.pop(); up.push(q); }
  return lo.slice(0, -1).concat(up.slice(0, -1));
}

/** Corners of a part's section box swept from t0 to t1 along it (world). */
/**
 * Hidden lines (0.4 D12). runsBehind(pts, closed, occluders) splits a polyline (paper points) where it passes inside any
 * occluder polygon (paper points; concave ones too): [{ pts, hidden }] in order. A point on an occluder's edge (within
 * 0.05 mm) counts as visible, so outlines that meet or share an edge stay drawn.
 */
export function runsBehind(pts, closed, occluders) {
  const segs = [];
  const n = pts.length;
  for (let i = 0; i < (closed ? n : n - 1); i++) segs.push([pts[i], pts[(i + 1) % n]]);
  const out = [];
  const push = (a, b, hidden) => {
    const last = out[out.length - 1];
    if (last && last.hidden === hidden && Math.hypot(last.pts[last.pts.length - 1][0] - a[0], last.pts[last.pts.length - 1][1] - a[1]) < 1e-9) last.pts.push(b);
    else out.push({ pts: [a, b], hidden });
  };
  for (const [a, b] of segs) {
    const ts = [0, 1];
    for (const o of occluders) for (let k = 0; k < o.length; k++) {
      const t = segX(a, b, o[k], o[(k + 1) % o.length]);
      if (t !== null && t > 1e-9 && t < 1 - 1e-9) ts.push(t);
    }
    ts.sort((x, y) => x - y);
    for (let k = 0; k + 1 < ts.length; k++) {
      if (ts[k + 1] - ts[k] < 1e-9) continue;
      const P = (t) => [a[0] + (b[0] - a[0]) * t, a[1] + (b[1] - a[1]) * t];
      const m = P((ts[k] + ts[k + 1]) / 2);
      const hidden = occluders.some((o) => inPoly(m, o) && edgeDist(m, o) > 0.05);
      push(P(ts[k]), P(ts[k + 1]), hidden);
    }
  }
  return out;
}
function segX(a, b, c, d) {
  const r = [b[0] - a[0], b[1] - a[1]], q = [d[0] - c[0], d[1] - c[1]];
  const den = r[0] * q[1] - r[1] * q[0];
  if (Math.abs(den) < 1e-12) return null;
  const t = ((c[0] - a[0]) * q[1] - (c[1] - a[1]) * q[0]) / den, u = ((c[0] - a[0]) * r[1] - (c[1] - a[1]) * r[0]) / den;
  return u >= -1e-9 && u <= 1 + 1e-9 ? t : null;
}
function inPoly(p, poly) {
  let inside = false;
  for (let i = 0, j = poly.length - 1; i < poly.length; j = i++) {
    const a = poly[i], b = poly[j];
    if ((a[1] > p[1]) !== (b[1] > p[1]) && p[0] < ((b[0] - a[0]) * (p[1] - a[1])) / (b[1] - a[1]) + a[0]) inside = !inside;
  }
  return inside;
}
function edgeDist(p, poly) {
  let best = Infinity;
  for (let i = 0; i < poly.length; i++) {
    const a = poly[i], b = poly[(i + 1) % poly.length], ab = [b[0] - a[0], b[1] - a[1]], L2 = ab[0] * ab[0] + ab[1] * ab[1];
    const k = L2 ? Math.max(0, Math.min(1, ((p[0] - a[0]) * ab[0] + (p[1] - a[1]) * ab[1]) / L2)) : 0;
    best = Math.min(best, Math.hypot(p[0] - a[0] - ab[0] * k, p[1] - a[1] - ab[1] * k));
  }
  return best;
}
let HIDDEN = true;                // hidden-line removal on (drawingSet's hiddenLines; off only to compare in tests)
/** Draws a polyline with its runs behind occluders left out (hidden = null) or in the hidden style. */
function drawHidden(S, pts, style, closed, occluders, hidden) {
  if (!occluders.length || !HIDDEN) { S.P(pts, { ...style, closed }); return; }
  const runs = runsBehind(pts, closed, occluders);
  if (runs.every((r) => !r.hidden)) { S.P(pts, { ...style, closed }); return; }
  for (const r of runs) if (!r.hidden) S.P(r.pts, style); else if (hidden) S.P(r.pts, hidden);
}

function boxCorners(part, t0 = 0, t1 = part.length) {
  const w = part.profile.width / 2, d = part.profile.depth / 2, out = [];
  // a plane-cut end (mitre) puts each corner on its cut face
  const at = (t, u, v) => (part.endCuts?.start && Math.abs(t) < 1e-9 ? endX(part, 'start', u, v) : part.endCuts?.end && Math.abs(t - part.length) < 1e-9 ? endX(part, 'end', u, v) : t);
  for (const t of [t0, t1]) for (const [u, v] of [[-w, -d], [w, -d], [w, d], [-w, d]]) out.push(toWorld(part.frame, at(t, u, v), u, v, part.voff));
  return out;
}

/** A hole's center (world), axis (world, unit) and the thickness it goes through. */
export function holeGeom(part, h) {
  const p = part.profile, f = part.frame;
  let u = 0, v = 0, axis;
  if (h.face === 'web') { v = h.y; if (p.kind === 'C') u = -p.bf / 2 + p.tw / 2; if (p.kind === 'L') u = -p.b / 2 + p.t / 2; axis = f.u; }   // a channel's web is at −u; an angle's leg along v too
  else if (h.face === 'plate') { u = h.y; axis = f.v; }
  else { u = h.y; const t = faceThickness(p, h.face); v = (h.face === 'top' ? 1 : -1) * (p.depth / 2 - t / 2); axis = f.v; }
  return { c: toWorld(f, h.x, u, v, part.voff), axis, t: faceThickness(p, h.face === 'plate' ? 'web' : h.face), d: h.d };
}

function frameOfSheet(S) { S.rect(10, 10, SHEET.w - 10, SHEET.h - 10, STYLE.thick); }

function titleBlock(S, tb) {
  const x0 = SHEET.w - 170, y0 = 10, x1 = SHEET.w - 10, y1 = 52, mid = SHEET.w - 90;
  S.rect(x0, y0, x1, y1, STYLE.thick);
  S.T(tb.title, x0 + 2, y1 - 6, 3.6, { bold: true });
  if (tb.subtitle) S.T(tb.subtitle, x0 + 2, y1 - 10.5, 2.2);
  const rows = [[t('sheet.tb.drawing'), tb.number, t('sheet.tb.scale'), tb.scale], [t('sheet.tb.model'), tb.model, t('sheet.tb.model-ref'), tb.ref], [t('sheet.tb.date'), tb.date, t('sheet.tb.sheet'), tb.sheet]];
  S.P([[x0, y1 - 12.5], [x1, y1 - 12.5]], STYLE.thin);
  rows.forEach((r, i) => {
    const y = y1 - 12.5 - (i + 1) * 8.5;
    S.P([[x0, y], [x1, y]], STYLE.thin);
    S.T(r[0], x0 + 2, y + 5.6, 1.8); S.T(r[1] || '', x0 + 2, y + 1.6, 2.6, { bold: i === 0 });
    S.T(r[2], mid + 2, y + 5.6, 1.8); S.T(r[3] || '', mid + 2, y + 1.6, 2.6);
  });
  S.P([[mid, y0 + 2.5], [mid, y1 - 12.5]], STYLE.thin);
  S.T(t('sheet.tb.footer'), x0 + 2, y0 + 1, 1.7);
}

// ---------------------------------------------------------------------------------------------
// General arrangement

const VIEW_DIR = {
  plan: () => ({ R: [1, 0, 0], U: [0, 1, 0], N: [0, 0, 1] }),
  elevY: () => ({ R: [1, 0, 0], U: [0, 0, 1], N: [0, -1, 0] }),   // on a lettered grid (y = at), seen from −y
  elevX: () => ({ R: [0, 1, 0], U: [0, 0, 1], N: [1, 0, 0] }),    // on a numbered grid (x = at), seen from +x
};

/** Parameter range [t0, t1] of a part's axis inside the slab lo ≤ p·A ≤ hi, or null. */
function clipAxis(part, A, lo, hi) {
  const s0 = dot(part.frame.o, A), k = dot(part.frame.x, A), L = part.length;
  if (Math.abs(k) < 1e-9) return s0 >= lo - 1e-6 && s0 <= hi + 1e-6 ? [0, L] : null;
  let a = (lo - s0) / k, b = (hi - s0) / k;
  if (a > b) [a, b] = [b, a];
  const t0 = Math.max(0, a), t1 = Math.min(L, b);
  return t1 - t0 > 1e-6 || (t1 >= t0 && L < 1e-6) ? [t0, t1] : null;
}

/**
 * The model in one GA view: { prims: [{ kind, pts (view mm), style, part, labelAt }], bbox }.
 * view = { kind, R, U, N, A (slab axis), lo, hi }.
 */
function gaContent(state, built, marks, view) {
  const prims = [];
  const P = (p) => [dot(p, view.R), dot(p, view.U)];
  const depthOf = (pts) => { const d = pts.map((p) => dot(p, view.N)); return [Math.min(...d), Math.max(...d)]; };   // toward the viewer
  for (const part of built.parts) {
    const x = part.frame.x, par = Math.abs(dot(x, view.N));
    const isMain = marks.asmOf.get(part.id) === part.id;
    const tag = isMain ? (marks.asmMark.get(part.id) || '') : '';
    if (view.kind === 'plan' && par > 0.02 && par < 0.98) {
      // sloped member in plan: dashed, full length, on the level its upper end reaches
      const top = part.start[2] >= part.end[2] ? part.start : part.end;
      if (top[2] < view.lo || top[2] > view.hi) continue;
      const a = P(toWorld(part.frame, 0, 0, 0, part.voff)), b = P(toWorld(part.frame, part.length, 0, 0, part.voff));
      prims.push({ kind: 'line', pts: [a, b], style: { w: 0.35, dash: [3, 1.5] }, part, tag, along: [a, b], depth: depthOf(boxCorners(part)) });
      continue;
    }
    const r = clipAxis(part, view.A, view.lo, view.hi);
    if (!r) continue;
    const depth = depthOf(boxCorners(part, r[0], r[1]));
    // a member slanting through an elevation's band belongs to another elevation: leave it out
    if (view.kind === 'elevation' && par < 0.98 && r[1] - r[0] < part.length - 1e-6) continue;
    if (par >= 0.98) {
      const tm = (r[0] + r[1]) / 2;
      for (const loop of part.profile.loops) prims.push({ kind: 'loop', pts: loop.map(([u, v]) => P(toWorld(part.frame, tm, u, v, part.voff))), style: STYLE.outline, part, tag, section: true, depth });
      continue;
    }
    const pts = hull(boxCorners(part, r[0], r[1]).map(P));
    const a = P(toWorld(part.frame, r[0], 0, 0, part.voff)), b = P(toWorld(part.frame, r[1], 0, 0, part.voff));
    const across = hullWidth(pts, a, b);
    if (across / view.scaleHint < 0.8) prims.push({ kind: 'line', pts: [a, b], style: STYLE.thick, part, tag, along: [a, b], depth });   // too thin to outline: one heavy line
    else prims.push({ kind: 'loop', pts, style: STYLE.outline, part, tag, along: [a, b], depth });
    // flange lines where the depth of an I or channel shows
    if ((part.profile.kind === 'I' || part.profile.kind === 'C') && Math.abs(dot(part.frame.v, view.N)) < 0.02) {
      for (const sg of [1, -1]) {
        const v = sg * (part.profile.depth / 2 - part.profile.tf);
        prims.push({ kind: 'line', pts: [P(toWorld(part.frame, r[0], 0, v, part.voff)), P(toWorld(part.frame, r[1], 0, v, part.voff))], style: STYLE.thin, owner: part.id, depth });
      }
    }
  }
  for (const ft of built.footings) {
    const f = ft.f, rot = (f.rotation || 0) * Math.PI / 180, c = Math.cos(rot), s = Math.sin(rot);
    const zs = [f.top - f.H, f.top];
    if (view.kind === 'plan') { if (f.top < view.lo || f.top - f.H > view.hi) continue; }
    else if (Math.abs(dot([f.x, f.y, 0], view.A) - (view.lo + view.hi) / 2) > ELEV_BAND + Math.max(f.L, f.B) / 2) continue;
    const corners = [];
    for (const z of zs) for (const [a, b] of [[-1, -1], [1, -1], [1, 1], [-1, 1]]) corners.push([f.x + c * a * f.L / 2 - s * b * f.B / 2, f.y + s * a * f.L / 2 + c * b * f.B / 2, z]);
    prims.push({ kind: 'loop', pts: hull(corners.map(P)), style: STYLE.footing, footing: f, tag: view.kind === 'plan' ? marks.footingMark?.get(f.id) || '' : '' });
  }
  let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
  for (const pr of prims) for (const [x, y] of pr.pts) { x0 = Math.min(x0, x); x1 = Math.max(x1, x); y0 = Math.min(y0, y); y1 = Math.max(y1, y); }
  return { prims, bbox: Number.isFinite(x0) ? { x0, y0, x1, y1 } : null };
}

/** Width of a projected outline across the line a→b (view mm). */
function hullWidth(pts, a, b) {
  const L = Math.hypot(b[0] - a[0], b[1] - a[1]);
  if (L < 1e-9) return Infinity;
  const nx = -(b[1] - a[1]) / L, ny = (b[0] - a[0]) / L;
  const d = pts.map(([x, y]) => (x - a[0]) * nx + (y - a[1]) * ny);
  return Math.max(...d) - Math.min(...d);
}

/** Draws the prims at scale, with labels. M maps view mm → paper. */
function drawPrims(S, prims, M, s) {
  // hidden lines (0.4 D12): a part's lines behind a part wholly in front of it (nearer by 1 mm or more) are left out;
  // occluders are the outlined parts and sections (not footings, not single heavy lines)
  const mapped = prims.map((pr) => pr.pts.map(M));
  const bb = (q) => { const xs = q.map((p) => p[0]), ys = q.map((p) => p[1]); return [Math.min(...xs), Math.min(...ys), Math.max(...xs), Math.max(...ys)]; };
  const occ = prims.map((pr, i) => (pr.kind === 'loop' && pr.part && pr.depth ? { i, id: pr.part.id, near: pr.depth[0], poly: mapped[i], box: bb(mapped[i]) } : null)).filter(Boolean);
  prims.forEach((pr, i) => {
    const q = mapped[i], closed = pr.kind === 'loop';
    const own = pr.part ? pr.part.id : pr.owner;
    let front = [];
    if (pr.depth && !pr.footing) {
      const b = bb(q);
      front = occ.filter((o) => o.id !== own && o.near >= pr.depth[1] + 1 && o.box[0] < b[2] && o.box[2] > b[0] && o.box[1] < b[3] && o.box[3] > b[1]).map((o) => o.poly);
    }
    drawHidden(S, q, pr.style, closed, front, null);
    if (pr.part) S.region('part:' + pr.part.id, q); else if (pr.footing) S.region('footing:' + pr.footing.id, q);
  });
  // one label per main part (its first prim), and per footing
  const done = new Set();
  for (const pr of prims) {
    if (!pr.tag) continue;
    const key = pr.part ? pr.part.id : pr.footing.id;
    if (done.has(key)) continue;
    done.add(key);
    const text = pr.part ? pr.tag + ' ' + pr.part.profileName : pr.tag;
    if (pr.along) {
      const a = M(pr.along[0]), b = M(pr.along[1]);
      let ang = Math.atan2(b[1] - a[1], b[0] - a[0]);
      if (ang > Math.PI / 2 + 1e-6) ang -= Math.PI; else if (ang <= -Math.PI / 2 + 1e-6) ang += Math.PI;
      // half the paper width of the part across its axis, then 1.2 mm clear; either side, then along it
      const half = pr.part ? Math.max(pr.part.profile.width, pr.part.profile.depth) / 2 / s : 0;
      const nx = -Math.sin(ang), ny = Math.cos(ang), tx = Math.cos(ang), ty = Math.sin(ang), off = Math.min(half, 6) + 1.2;
      const len = Math.hypot(b[0] - a[0], b[1] - a[1]);
      const cands = [];
      for (const along of [0, 0.25, -0.25, 0.4, -0.4]) for (const side of [off, -(off + 2.2), off + 3, -(off + 5.2)]) {
        cands.push([(a[0] + b[0]) / 2 + tx * along * len + nx * side, (a[1] + b[1]) / 2 + ty * along * len + ny * side, { align: 'center', rot: ang }]);
      }
      S.labelFree(text, cands);
    } else {
      let x0 = Infinity, y0 = Infinity, x1 = -Infinity, y1 = -Infinity;
      for (const p of pr.pts.map(M)) { x0 = Math.min(x0, p[0]); x1 = Math.max(x1, p[0]); y0 = Math.min(y0, p[1]); y1 = Math.max(y1, p[1]); }
      S.labelFree(text, [[x1 + 1, y1 + 0.8, {}], [x0 - 1, y1 + 0.8, { align: 'right' }], [x1 + 1, y0 - 3, {}], [x0 - 1, y0 - 3, { align: 'right' }], [x1 + 1, y1 + 4, {}], [x0 - 1, y0 - 6, { align: 'right' }]]);
    }
  }
}

function gridBubble(S, c, label) {
  S.C(c, 4, { w: 0.3 });
  S.taken.push({ x0: c[0] - 4.4, x1: c[0] + 4.4, y0: c[1] - 4.4, y1: c[1] + 4.4 });
  S.T(label, c[0], c[1] - 1.25, 3.2, { align: 'center' });
}

/** Fit: the scale and the paper origin for a view bbox with paper margins m = {l, r, b, t}. */
function fit(bbox, m) {
  const W = bbox.x1 - bbox.x0, H = bbox.y1 - bbox.y0;
  const roomW = AREA.x1 - AREA.x0 - m.l - m.r, roomH = AREA.y1 - AREA.y0 - m.b - m.t;
  const s = SCALES.find((n) => W / n <= roomW && H / n <= roomH) || SCALES[SCALES.length - 1];
  const ox = AREA.x0 + m.l + (roomW - W / s) / 2 - bbox.x0 / s, oy = AREA.y0 + m.b + (roomH - H / s) / 2 - bbox.y0 / s;
  return { s, M: ([x, y]) => [ox + x / s, oy + y / s] };
}
const grow = (b, x0, y0, x1, y1) => ({ x0: Math.min(b.x0, x0), y0: Math.min(b.y0, y0), x1: Math.max(b.x1, x1), y1: Math.max(b.y1, y1) });

export function planSheet(state, built, marks, level, i) {
  const lv = [...state.levels].sort((a, b) => a.z - b.z), k = lv.findIndex((l) => l.name === level.name);
  const below = k > 0 ? Math.min(PLAN_BAND, (level.z - lv[k - 1].z) / 2) : PLAN_BAND;
  const above = k < lv.length - 1 ? Math.min(PLAN_BAND, (lv[k + 1].z - level.z) / 2) : PLAN_BAND;
  const view = { kind: 'plan', ...VIEW_DIR.plan(), A: [0, 0, 1], lo: level.z - below, hi: level.z + above, scaleHint: 1e-9 };
  let { prims, bbox } = gaContent(state, built, marks, view);
  if (!prims.length) return null;
  const gx = state.grids.x, gy = state.grids.y;
  let bb = bbox;
  if (gx.length) bb = grow(bb, Math.min(...gx.map((g) => g.at)), bb.y0, Math.max(...gx.map((g) => g.at)), bb.y1);
  if (gy.length) bb = grow(bb, bb.x0, Math.min(...gy.map((g) => g.at)), bb.x1, Math.max(...gy.map((g) => g.at)));
  const { s, M } = fit(bb, { l: gy.length ? 34 : 6, r: gy.length ? 18 : 6, b: gx.length ? 18 : 6, t: gx.length ? 34 : 6 });
  prims = gaContent(state, built, marks, { ...view, scaleHint: s }).prims;
  const S = sheetBuilder();
  frameOfSheet(S);
  const [px0, py0] = M([bb.x0, bb.y0]), [px1, py1] = M([bb.x1, bb.y1]);
  // grids
  for (const g of gx) {
    const [x] = M([g.at, 0]);
    S.P([[x, py0 - 6], [x, py1 + 6]], STYLE.grid);
    gridBubble(S, [x, py1 + 10], g.label); gridBubble(S, [x, py0 - 10], g.label);
  }
  for (const g of gy) {
    const [, y] = M([0, g.at]);
    S.P([[px0 - 6, y], [px1 + 6, y]], STYLE.grid);
    gridBubble(S, [px0 - 10, y], g.label); gridBubble(S, [px1 + 10, y], g.label);
  }
  if (gx.length > 1) S.chainH(gx.map((g) => g.at), (v) => M([v, 0])[0], py1 + 19, py1 + 15, 7, 'grids');
  if (gy.length > 1) S.chainV(gy.map((g) => g.at), (v) => M([0, v])[1], px0 - 19, px0 - 15, -7, 'grids');
  drawPrims(S, prims, M, s);
  S.T(t('sheet.plan.title', { level: level.name }) + ' (' + (level.z >= 0 ? '+' : '') + fmt(level.z) + ')  ' + ratio(s), AREA.x0 + 2, AREA.y1 + 8, 3.5, { bold: true });
  S.T(t('sheet.plan.sub', { below: fmt(below), above: fmt(above) }), AREA.x0 + 2, AREA.y1 + 3.5, 2);
  return { id: 'plan:' + level.name, kind: 'plan', title: t('sheet.plan.title', { level: level.name }), scale: ratio(s), S, sortKey: i };
}

export function elevationSheet(state, built, marks, grid, axis, i) {
  const isY = axis === 'y';                                   // a lettered grid: the line y = at
  const dir = isY ? VIEW_DIR.elevY() : VIEW_DIR.elevX();
  const A = isY ? [0, 1, 0] : [1, 0, 0];
  const view = { kind: 'elevation', ...dir, A, lo: grid.at - ELEV_BAND, hi: grid.at + ELEV_BAND, scaleHint: 1e-9 };
  let { prims, bbox } = gaContent(state, built, marks, view);
  if (!prims.some((p) => p.part)) return null;
  const cross = isY ? state.grids.x : state.grids.y;          // grids that cross this one, along R
  const levels = [...state.levels].sort((a, b) => a.z - b.z);
  let bb = bbox;
  if (cross.length) bb = grow(bb, Math.min(...cross.map((g) => g.at)), bb.y0, Math.max(...cross.map((g) => g.at)), bb.y1);
  bb = grow(bb, bb.x0, Math.min(...levels.map((l) => l.z)), bb.x1, Math.max(...levels.map((l) => l.z)));
  const { s, M } = fit(bb, { l: levels.length > 1 ? 28 : 8, r: 34, b: cross.length > 1 ? 24 : 8, t: cross.length ? 18 : 6 });
  prims = gaContent(state, built, marks, { ...view, scaleHint: s }).prims;
  const S = sheetBuilder();
  frameOfSheet(S);
  const [px0, py0] = M([bb.x0, bb.y0]), [px1, py1] = M([bb.x1, bb.y1]);
  for (const g of cross) {
    const [x] = M([g.at, 0]);
    S.P([[x, py0 - 3], [x, py1 + 6]], STYLE.grid);
    gridBubble(S, [x, py1 + 10], g.label);
  }
  for (const l of levels) {
    const [, y] = M([0, l.z]);
    S.P([[px0 - 4, y], [px1 + 8, y]], STYLE.level);
    S.P([[px1 + 8, y], [px1 + 10.5, y + 2.5], [px1 + 5.5, y + 2.5]], { w: 0.25, closed: true });
    S.label(l.name, px1 + 12, y + 0.8, 2.5, { bold: true });
    S.T((l.z >= 0 ? '+' : '') + fmt(l.z), px1 + 12, y - 2.8, 2.2);
  }
  if (cross.length > 1) S.chainH(cross.map((g) => g.at), (v) => M([v, 0])[0], py0 - 12, py0 - 4, -7, 'grids');
  if (levels.length > 1) S.chainV(levels.map((l) => l.z), (v) => M([0, v])[1], px0 - 14, px0 - 5, -7, 'levels');
  drawPrims(S, prims, M, s);
  const from = isY ? t('sheet.elev.from-y') : t('sheet.elev.from-x');
  S.T(t('sheet.elev.title', { grid: grid.label }) + '  ' + ratio(s), AREA.x0 + 2, AREA.y1 + 8, 3.5, { bold: true });
  S.T(t('sheet.elev.sub', { grid: grid.label, from, band: fmt(ELEV_BAND) }), AREA.x0 + 2, AREA.y1 + 3.5, 2);
  return { id: 'elevation:' + axis + ':' + grid.label, kind: 'elevation', title: t('sheet.elev.title', { grid: grid.label }), scale: ratio(s), S, sortKey: i };
}

// ---------------------------------------------------------------------------------------------
// Assembly drawings

/**
 * Everything in an assembly in the main part's own frame: { main, subs, boxes, holes, bolts, welds, ext }.
 * Local coordinates [x, u, v]: x along the main part from its cut start, (u, v) from its section center.
 */
export function assemblyGeometry(built, marks, mainId) {
  const main = built.byId.get(mainId);
  const subs = built.parts.filter((p) => p.id !== mainId && marks.asmOf.get(p.id) === mainId);
  const f = main.frame;
  const loc = (w) => { const l = toLocal(f, w, main.voff); return [l.x, l.u, l.v]; };
  const dir = (a) => [dot(a, f.x), dot(a, f.u), dot(a, f.v)];
  const boxes = subs.map((p) => ({ part: p, pts: boxCorners(p).map(loc), mark: marks.partMark.get(p.id), center: loc(toWorld(p.frame, p.length / 2, 0, 0, p.voff)) }));
  const holes = [];
  for (const p of [main, ...subs]) for (const h of p.holes) { const g = holeGeom(p, h); holes.push({ part: p, c: loc(g.c), a: dir(g.axis), t: g.t, d: g.d }); }
  const conns = new Set(subs.map((p) => p.conn).filter(Boolean));
  const bolts = built.bolts.filter((b) => conns.has(b.conn));
  const ids = new Set([mainId, ...subs.map((p) => p.id)]);
  const welds = built.welds.filter((w) => w.between.every((x) => ids.has(x)));
  const pd = main.profile;
  const all = [[0, -pd.width / 2, -pd.depth / 2], [main.length, pd.width / 2, pd.depth / 2], ...boxes.flatMap((b) => b.pts)];
  const ext = [0, 1, 2].map((k) => [Math.min(...all.map((p) => p[k])), Math.max(...all.map((p) => p[k]))]);
  return { main, subs, boxes, holes, bolts, welds, ext };
}

export function assemblySheet(built, marks, row, i) {
  const G = assemblyGeometry(built, marks, row.ids[0]);
  const { main, boxes, holes, ext } = G;
  const p = main.profile, L = main.length;
  const S = sheetBuilder();
  frameOfSheet(S);
  const [ex, eu, ev] = ext;
  // the layout from the sheet (A3: length room 262, depth 48, width 32, front view at 192, top view at 168, end views at
  // x 362 in rooms 62 × 56, part list and notes from y 104 down): rooms grow with k, dimension gaps stay
  const k = SHEET.k, W = SHEET.w, Hs = SHEET.h;
  const roomX = W - 28 - 62 * k - 68, roomV = 48 * k, roomU = 32 * k;
  // scales: length, then depth / width across where they would be too thin to read
  const nx = pickScale(ex[1] - ex[0], roomX);
  let nv = nx, nu = nx;
  if ((ev[1] - ev[0]) / nx < 20) nv = pickScale(ev[1] - ev[0], roomV);
  if ((eu[1] - eu[0]) / nx < 15) nu = pickScale(eu[1] - eu[0], roomU);
  const X0 = 28, X = (x) => X0 + (x - ex[0]) / nx;
  // front view: x across, v up; on sheets bigger than A3 it hangs from the top (under the assembly's heading)
  const yb = k > 1 ? Hs - 50 - (ev[1] - ev[0]) / nv : Hs - 105 * k, Yf = (v) => yb + (v - ev[0]) / nv;
  const yt = yb - 24, Yt = (u) => yt - (eu[1] - u) / nu;                 // top view: x across, u up (its top at yt)
  const band = Math.min(104, yt - roomU - 8);                             // part list and notes start here, going down
  const mainMark = row.main, asmMark = row.mark;

  // ---- front view (looking at the web): main outline with copes, flange lines, plates, holes ----
  const cope = (end, side) => main.cuts.find((c) => c.kind === 'cope' && c.end === end && c.side === side);
  const h2 = p.depth / 2;
  const out = [];
  const bs = cope('start', 'bottom'), be = cope('end', 'bottom'), te = cope('end', 'top'), ts = cope('start', 'top');
  // square ends at 0 and L; a mitre's (0.7.1 71.20) where its cut face crosses the web's plane
  const xs0 = (v) => endX(main, 'start', 0, v), xs1 = (v) => endX(main, 'end', 0, v);
  if (bs) out.push([0, -h2 + bs.depth], [bs.length, -h2 + bs.depth], [bs.length, -h2]); else out.push([xs0(-h2), -h2]);
  if (be) out.push([L - be.length, -h2], [L - be.length, -h2 + be.depth], [L, -h2 + be.depth]); else out.push([xs1(-h2), -h2]);
  if (te) out.push([L, h2 - te.depth], [L - te.length, h2 - te.depth], [L - te.length, h2]); else out.push([xs1(h2), h2]);
  if (ts) out.push([ts.length, h2], [ts.length, h2 - ts.depth], [0, h2 - ts.depth]); else out.push([xs0(h2), h2]);
  S.P(out.map(([x, v]) => [X(x), Yf(v)]), { ...STYLE.thick, closed: true });
  S.region('part:' + main.id, out.map(([x, v]) => [X(x), Yf(v)]));
  const inner = p.kind === 'I' || p.kind === 'C' ? p.tf : p.kind === 'RHS' || p.kind === 'CHS' ? p.t : 0;
  if (inner) for (const side of ['top', 'bottom']) {
    const v = side === 'top' ? h2 - inner : -h2 + inner;
    const a = cope('start', side), b = cope('end', side);
    const x0 = a && a.depth > inner ? a.length : xs0(v), x1 = b && b.depth > inner ? L - b.length : xs1(v);
    if (x1 > x0) S.P([[X(x0), Yf(v)], [X(x1), Yf(v)]], p.kind === 'I' || p.kind === 'C' ? STYLE.outline : STYLE.hidden);
  }
  S.P([[X(ex[0]) - 3, Yf(0)], [X(ex[1]) + 3, Yf(0)]], STYLE.center);
  const projBox = (b, i1, i2, Fi, Fj) => hull(b.pts.map((q) => [Fi(q[i1]), Fj(q[i2])]));
  // hidden lines (0.4 D12): the front view looks from −u, the top view from +v; a plate wholly behind the main part's
  // web (front) or top flange (top) is drawn dashed where the main part covers it
  const k0 = p.kind;
  const webFar = k0 === 'I' ? p.tw / 2 : k0 === 'C' ? -p.width / 2 + p.tw : k0 === 'RHS' || k0 === 'CHS' ? -p.width / 2 + p.t : k0 === 'L' ? -p.width / 2 + p.t : null;
  const flangeUnder = k0 === 'I' || k0 === 'C' ? p.depth / 2 - p.tf : k0 === 'RHS' || k0 === 'CHS' ? p.depth / 2 - p.t : null;
  const frontOcc = webFar === null ? [] : [out.map(([x, v]) => [X(x), Yf(v)])];
  const behindWeb = (b) => webFar !== null && Math.min(...b.pts.map((q) => q[1])) >= webFar - 0.01;
  for (const b of boxes) {
    const pts = projBox(b, 0, 2, X, Yf);
    drawHidden(S, pts, STYLE.outline, true, behindWeb(b) ? frontOcc : [], STYLE.hidden);
    S.region('part:' + b.part.id, pts);
    const top = Math.max(...pts.map((q) => q[1])), cx = pts.reduce((s, q) => s + q[0], 0) / pts.length;
    S.label(b.mark, cx, top + 2, 2.2, { align: 'center' });
  }
  S.label(mainMark, X((ex[0] + ex[1]) / 2), Yf(ev[1]) + 2.5, 2.6, { align: 'center', bold: true });
  drawHoles(S, holes, 0, 2, 1, X, Yf, 1 / nv);
  // weld symbols: at each welded part's joint with the main part (the top corner where they meet), one per part
  const xMidPaper = (X(ex[0]) + X(ex[1])) / 2;
  for (const w of G.welds) {
    const b = boxes.find((bx) => w.between.includes(bx.part.id));
    if (!b) continue;
    const xs = b.pts.map((q) => q[0]), vs = b.pts.map((q) => q[2]);
    const bx0 = Math.min(...xs), bx1 = Math.max(...xs), bv1 = Math.max(...vs), bv0 = Math.min(...vs);
    let tip;
    if (bx0 >= -0.5 && bx1 <= L + 0.5) {                         // beside the main part (a tab on a column face): at the face
      const above = bv0 >= h2 - 0.5;
      tip = [X((bx0 + bx1) / 2), Yf(above ? h2 : bv1 <= -h2 + 0.5 ? -h2 : Math.min(bv1, h2))];
    } else {                                                       // at an end (end plate, base plate): the end's top corner
      const xc = bx1 <= L / 2 ? Math.max(0, bx1) : Math.min(L, bx0);
      tip = [X(xc), Yf(Math.min(bv1, h2))];
    }
    S.weldSymbol(tip, w.size, { allAround: !!w.allRound, dir: tip[0] <= xMidPaper ? 1 : -1 });
  }

  // dimensions: stations along x (holes seen in this or the top view, plate edges), overall below
  const xs = uniq([ex[0], ex[1], ...boxes.flatMap((b) => { const v = b.pts.map((q) => q[0]); return [Math.min(...v), Math.max(...v)]; }),
    ...holes.filter((h) => Math.abs(h.a[0]) < 0.5).map((h) => h.c[0])]);
  S.chainH(xs, X, Yf(ev[0]) - 8, Yf(ev[0]) - 1, -7, 'front');
  const vsFront = uniq([ev[0], ev[1], ...holes.filter((h) => Math.abs(h.a[1]) > 0.99).map((h) => h.c[2]), ...boxes.flatMap((b) => { const v = b.pts.map((q) => q[2]); return [Math.min(...v), Math.max(...v)]; })]);
  S.chainV(vsFront, Yf, X(ex[1]) + 8, X(ex[1]) + 1, 7, 'front');
  const fTitle = nx === nv ? ratio(nx) : t('sheet.view.two-scales', { length: ratio(nx), depth: ratio(nv) });
  S.T(t('sheet.view.front') + '  ' + fTitle, X0, Yf(ev[1]) + 4 + 5 * Math.min(k, 1), 2.8, { bold: true });

  // ---- top view (from above the main part's v): flange holes, plate widths ----
  // the top flange's outline (a mitre's ends where its cut face crosses the top of the section)
  const topOut = [[endX(main, 'start', -p.width / 2, h2), -p.width / 2], [endX(main, 'end', -p.width / 2, h2), -p.width / 2], [endX(main, 'end', p.width / 2, h2), p.width / 2], [endX(main, 'start', p.width / 2, h2), p.width / 2]];
  S.P(topOut.map(([x, u]) => [X(x), Yt(u)]), { ...STYLE.thick, closed: true });
  if (p.kind === 'I') for (const sg of [-1, 1]) S.P([[X(endX(main, 'start', sg * p.tw / 2, h2)), Yt(sg * p.tw / 2)], [X(endX(main, 'end', sg * p.tw / 2, h2)), Yt(sg * p.tw / 2)]], STYLE.hidden);
  S.region('part:' + main.id, [[X(0), Yt(-p.width / 2)], [X(L), Yt(p.width / 2)]]);
  const topOcc = flangeUnder === null ? [] : [[[X(0), Yt(-p.width / 2)], [X(L), Yt(-p.width / 2)], [X(L), Yt(p.width / 2)], [X(0), Yt(p.width / 2)]]];
  const underFlange = (b) => flangeUnder !== null && Math.max(...b.pts.map((q) => q[2])) <= flangeUnder + 0.01;
  for (const b of boxes) { const q = projBox(b, 0, 1, X, Yt); drawHidden(S, q, STYLE.outline, true, underFlange(b) ? topOcc : [], STYLE.hidden); S.region('part:' + b.part.id, q); }
  drawHoles(S, holes, 0, 1, 2, X, Yt, 1 / nu);
  const usTop = uniq([eu[0], eu[1], ...holes.filter((h) => Math.abs(h.a[2]) > 0.99 && h.part === main).map((h) => h.c[1])]);
  S.chainV(usTop, Yt, X(ex[1]) + 8, X(ex[1]) + 1, 7, 'top');
  S.T(t('sheet.view.top') + (nu === nx ? '' : '  ' + t('sheet.view.width', { scale: ratio(nu) })), X0, Yt(eu[1]) + 2, 2.4, { bold: true });

  // ---- end views: one per end that carries plates (or one section view) ----
  const ends = [];
  const half = L / 2;
  const at = (end) => boxes.filter((b) => (end === 'start' ? b.center[0] < half : b.center[0] >= half));
  if (at('start').length) ends.push('start');
  if (at('end').length) ends.push('end');
  if (!ends.length) ends.push('section');
  const top1 = Hs - 52 - 28 * k;                                          // big sheets: end views hang from the top too
  const slots = k > 1 ? (ends.length === 1 ? [top1] : [top1, top1 - 56 * k - 24])
    : ends.length === 1 ? [yb + 13 * k] : [yb + 36 * k, Math.max(yb - 46 * k, band + 28 * k + 12)];
  ends.forEach((end, k) => {
    const bx = end === 'section' ? [] : at(end);
    const hs = holes.filter((h) => h.part !== main && bx.some((b) => b.part === h.part));
    const mir = end === 'start' ? -1 : 1;                                    // seen from −x: u runs right to left
    const pts = [...p.loops[0].map(([u, v]) => [mir * u, v]), ...bx.flatMap((b) => b.pts.map((q) => [mir * q[1], q[2]]))];
    const ux0 = Math.min(...pts.map((q) => q[0])), ux1 = Math.max(...pts.map((q) => q[0])), vy0 = Math.min(...pts.map((q) => q[1])), vy1 = Math.max(...pts.map((q) => q[1]));
    const ne = pickScale(Math.max((ux1 - ux0) / (62 * SHEET.k), (vy1 - vy0) / (56 * SHEET.k)), 1);
    const cx = W - 58 * SHEET.k, cy = slots[k];
    const U = (u) => cx + (u - (ux0 + ux1) / 2) / ne, V = (v) => cy + (v - (vy0 + vy1) / 2) / ne;
    for (const loop of p.loops) S.P(loop.map(([u, v]) => [U(mir * u), V(v)]), { ...STYLE.outline, closed: true });
    for (const b of bx) {
      const q = hull(b.pts.map((r) => [U(mir * r[1]), V(r[2])]));
      S.P(q, { ...STYLE.thick, closed: true });
    }
    drawHoles(S, hs.map((h) => ({ ...h, c: [h.c[0], mir * h.c[1], h.c[2]], a: [h.a[0], mir * h.a[1], h.a[2]] })), 1, 2, 0, U, V, 1 / ne);
    const seen = hs.filter((h) => Math.abs(h.a[0]) > 0.99);
    S.chainH(uniq([ux0, ux1, ...seen.map((h) => mir * h.c[1])]), U, V(vy0) - 7, V(vy0) - 1, -6.5, 'end');
    S.chainV(uniq([vy0, vy1, ...seen.map((h) => h.c[2])]), V, U(ux0) - 7, U(ux0) - 1, -6.5, 'end');
    const name = end === 'section' ? t('sheet.view.section') : end === 'start' ? t('sheet.view.end-start') : t('sheet.view.end-end', { x: fmt(L) });
    S.T(name + '  ' + ratio(ne), cx, V(vy1) + 4, 2.3, { bold: true, align: 'center' });
  });

  // ---- part list, loose bolts, welds ----
  const groups = new Map();
  for (const q of [main, ...G.subs]) {
    const m = marks.partMark.get(q.id);
    if (!groups.has(m)) groups.set(m, { mark: m, n: 0, part: q });
    groups.get(m).n++;
  }
  const rowsT = [['part', 'qty', 'profile', 'length', 'material', 'kg-each', 'kg'].map((k) => t('sheet.parts.col.' + k))];
  let total = 0;
  for (const g of groups.values()) { total += g.n * g.part.weight; rowsT.push([g.mark, String(g.n), g.part.profileName, fmt(g.part.length), g.part.material, g.part.weight.toFixed(1), (g.n * g.part.weight).toFixed(1)]); }
  rowsT.push([t('sheet.asm.title', { mark: asmMark }), '', '', '', '', '', total.toFixed(1)]);
  // columns as wide as their contents (2.2 mm text), 3 mm apart; numbers right-aligned
  const right = new Set([1, 3, 5, 6]);
  const widths = rowsT[0].map((_, ci) => Math.max(...rowsT.map((r, ri) => textWidth(r[ci] || '', 2.2, ri === 0 || ri === rowsT.length - 1))));
  widths[0] = Math.max(widths[0], 8);
  const colX = [];
  let cxx = 22;
  widths.forEach((wd, ci) => { colX.push(right.has(ci) ? cxx + wd : cxx); cxx += wd + 3; });
  const listRight = cxx - 3;
  let y = band;
  S.T(t('sheet.parts.title', { count: row.count }), 22, y + 2, 2.6, { bold: true });
  y -= 3;
  rowsT.forEach((r, ri) => {
    y -= 4.6;
    r.forEach((c, ci) => {
      const xx = colX[ci];
      S.T(c, xx, y, 2.2, { bold: ri === 0 || ri === rowsT.length - 1, align: right.has(ci) ? 'right' : 'left' });
    });
    if (ri === 0 || ri === rowsT.length - 2) S.P([[20, y - 1.3], [listRight, y - 1.3]], STYLE.thin);
  });
  const bl = new Map();
  for (const b of G.bolts) { const k = [b.kind, b.d, b.length, b.grade].join('|'); bl.set(k, (bl.get(k) || 0) + 1); }
  if (bl.size) {
    y -= 7;
    S.T(t('sheet.loose.title'), 22, y, 2.4, { bold: true });
    for (const [k, n] of bl) { y -= 4.4; const [kind, d, len, grade] = k.split('|'); S.T(t(kind === 'ANCHORBOLT' ? 'sheet.loose.rod' : 'sheet.loose.bolt', { n, d, length: len, grade }), 22, y, 2.2); }
  }
  let ny = band;
  const notesX = W - 165;
  S.T(t('sheet.notes'), notesX, ny + 2, 2.6, { bold: true });
  const notes = [];
  const count = (list) => { const m = new Map(); for (const x of list) m.set(x, (m.get(x) || 0) + 1); return m; };
  const to = ' ' + t('sheet.weld.to') + ' ';
  for (const [weld, n] of count(G.welds.map((w) => t('sheet.weld', { size: w.size, where: w.where.toLowerCase(), between: w.between.map((id) => marks.partMark.get(id)).join(to) }))))
    notes.push(t('sheet.weld.note', { weld, n }));
  // holes per part, said once per part mark
  const perPart = new Map();
  for (const h of holes) { const k = h.part.id + '|' + h.d; perPart.set(k, (perPart.get(k) || 0) + 1); }
  for (const note of new Set([...perPart].map(([k, n]) => { const [id, d] = k.split('|'); return t(id === main.id ? 'sheet.holes' : 'sheet.holes.each', { n, d, mark: marks.partMark.get(id) }); }))) notes.push(note);
  notes.push(t('sheet.dims-from'));
  for (const n of notes) { ny -= 4.4; S.T(n, notesX, ny, 2.1); }

  S.T(t('sheet.asm.title', { mark: asmMark }), 22, Hs - 18, 4.2, { bold: true });
  S.T(t('sheet.asm.sub', { role: main.role, profile: main.profileName, length: fmt(L), n: G.subs.length, count: row.count }), 22, Hs - 24, 2.6);
  return { id: 'assembly:' + asmMark, kind: 'assembly', title: t('sheet.asm.title', { mark: asmMark }), scale: nx !== nv ? ratio(nx) + ' / ' + ratio(nv) : ratio(nx), S, sortKey: i, asm: G };
}

/**
 * Holes in a view: paper axes i, j of the local [x, u, v] point, view axis k. A hole whose axis runs into
 * the view is a circle with crosshair center lines; one square to the view is a pair of hidden lines
 * through the thickness it goes through. r is paper mm per model mm for hole sizes (the across scale).
 */
function drawHoles(S, holes, i, j, k, Fi, Fj, r) {
  for (const h of holes) {
    const a = h.a;
    const c = [Fi(h.c[i]), Fj(h.c[j])];
    if (Math.abs(a[k]) > 0.99) {
      const rr = Math.max(0.5, h.d / 2 * r);
      S.C(c, rr, { w: 0.3 });
      S.P([[c[0] - rr - 1, c[1]], [c[0] + rr + 1, c[1]]], STYLE.center);
      S.P([[c[0], c[1] - rr - 1], [c[0], c[1] + rr + 1]], STYLE.center);
    } else if (Math.abs(a[k]) < 0.01) {
      // axis direction on paper, and the hole's sides either side of it
      const ai = a[i], aj = a[j];
      const half = h.t / 2, rad = h.d / 2;
      const P = (s, n) => [Fi(h.c[i] + ai * s - aj * n), Fj(h.c[j] + aj * s + ai * n)];
      for (const n of [-rad, rad]) S.P([P(-half, n), P(half, n)], STYLE.hidden);
      S.P([P(-half - 2 / r * 0.5, 0), P(half + 2 / r * 0.5, 0)], STYLE.center);
    }
  }
}


// ---------------------------------------------------------------------------------------------
// Anchor bolt plan (0.4 D18)

/**
 * The anchor bolt plan: every base plate in plan with its column's section and its rods, the grids with chained
 * dimensions, a typical detail per rod pattern at a larger scale (rod spacing, edge distances, the column's center
 * lines), and two schedules: anchor rods by mark (quantity, diameter, length, projection above the plate, embedment,
 * grade) and base plates by grid (plate mark and size, pattern, rods, top of plate). Rod groups are set out from the
 * grid intersection their column stands on; a group off it says by how much. Null when there are no base plates.
 */
export function anchorSheet(state, built, marks, i) {
  const conns = state.connections.filter((c) => c.type === 'baseplate');
  const groups = [];
  for (const c of conns) {
    const plate = built.byId.get(c.id + '.plate'), col = built.byId.get(c.column);
    const rods = built.bolts.filter((b) => b.conn === c.id && b.kind === 'ANCHORBOLT');
    if (!plate || !col || !rods.length) continue;
    const p = c.params;
    groups.push({ c, plate, col, rods, p, top: Math.max(...rods.map((r) => r.head[2])) - p.projection });
  }
  if (!groups.length) return null;
  // marks: rods by (diameter, length, projection, embedment, grade); patterns by (sx, sy, plate size, rods)
  const rodKey = (g) => [g.p.rodD, g.rods[0].length, g.p.projection, g.p.embed, g.p.grade].join('|');
  const patKey = (g) => [g.p.sx, g.p.sy, g.plate.profileName, g.plate.length, g.rods.length, g.p.hole].join('|');
  const rodMark = new Map(), patMark = new Map();
  for (const g of groups) { if (!rodMark.has(rodKey(g))) rodMark.set(rodKey(g), 'R' + (rodMark.size + 1)); if (!patMark.has(patKey(g))) patMark.set(patKey(g), 'BP' + (patMark.size + 1)); }
  const gx = state.grids.x, gy = state.grids.y;
  const near = (list, v) => list.reduce((b, g) => (!b || Math.abs(g.at - v) < Math.abs(b.at - v) ? g : b), null);
  const where = (g) => { const x = near(gx, g.col.start[0]), y = near(gy, g.col.start[1]); return x && y && Math.abs(x.at - g.col.start[0]) < 0.5 && Math.abs(y.at - g.col.start[1]) < 0.5 ? y.label + '/' + x.label : '(' + fmt(g.col.start[0]) + ', ' + fmt(g.col.start[1]) + ')'; };

  const S = sheetBuilder();
  frameOfSheet(S);
  // tables on the right, the plan in what is left of the drawing area
  const rodRows = [[t('dwg.anchor.col.mark'), t('dwg.anchor.col.qty'), t('dwg.anchor.col.dia'), t('dwg.anchor.col.length'), t('dwg.anchor.col.proj'), t('dwg.anchor.col.embed'), t('dwg.anchor.col.grade')]];
  for (const [k, m] of rodMark) { const [d, len, pr, em, gr] = k.split('|'); rodRows.push([m, String(groups.filter((g) => rodKey(g) === k).reduce((t, g) => t + g.rods.length, 0)), d, len, pr, em, gr]); }
  const bpRows = [[t('dwg.anchor.col.grid'), t('dwg.anchor.col.column'), t('dwg.anchor.col.pattern'), t('dwg.anchor.col.plate'), t('dwg.anchor.col.rods'), t('dwg.anchor.col.top')]];
  for (const g of [...groups].sort((a, b) => where(a).localeCompare(where(b), 'en', { numeric: true }))) bpRows.push([where(g), marks.asmMark.get(marks.asmOf.get(g.col.id)) || '', patMark.get(patKey(g)), g.plate.profileName + ' x ' + fmt(g.plate.length), g.rods.length + ' ' + rodMark.get(rodKey(g)), (g.top >= 0 ? '+' : '') + fmt(g.top)]);
  const colW = (rows) => rows[0].map((_, c) => Math.max(...rows.map((r) => textWidth(r[c], 2.2, true))) + 3);
  const wR = colW(rodRows), wB = colW(bpRows);
  const tableW = Math.max(wR.reduce((a, b) => a + b, 0), wB.reduce((a, b) => a + b, 0));
  const right = AREA.x1, tx0 = right - Math.max(tableW, 70);
  const drawTable = (rows, widths, title, y) => {
    S.T(title, tx0, y, 2.8, { bold: true });
    y -= 5;
    rows.forEach((r, ri) => {
      let x = tx0;
      r.forEach((c, ci) => { S.T(c, x, y, 2.2, { bold: ri === 0 }); x += widths[ci]; });
      if (ri === 0) S.P([[tx0, y - 1.3], [tx0 + widths.reduce((a, b) => a + b, 0), y - 1.3]], STYLE.thin);
      y -= 4.4;
    });
    return y - 4;
  };
  let ty = AREA.y1 - 2;
  // typical pattern details, then the schedules
  // pattern details get what the schedules leave (at most 70 mm tall each, none under 30)
  const tablesH = (rodRows.length + bpRows.length) * 4.4 + 2 * 9 + 10;
  const detW = Math.max(tableW, 70), detH = Math.min(70, (AREA.y1 - AREA.y0 - 6 - tablesH) / patMark.size - 10);
  for (const [k, pm] of patMark) {
    const g = groups.find((x) => patKey(x) === k);
    if (detH < 30) break;
    const cx = tx0 + detW / 2, cy = ty - 6 - detH / 2;
    const pl = hull(boxCorners(g.plate).map((w) => [w[0], w[1]]));
    const cc = [g.col.start[0], g.col.start[1]];
    const ext = Math.max(...pl.map((q) => Math.max(Math.abs(q[0] - cc[0]), Math.abs(q[1] - cc[1])))) * 2 + 60;
    const n = pickScale(ext, Math.min(detW, detH) - 14);
    const D = ([x, y]) => [cx + (x - cc[0]) / n, cy + (y - cc[1]) / n];
    S.P(pl.map(D), { ...STYLE.outline, closed: true });
    for (const loop of g.col.profile.loops) S.P(loop.map(([u, v]) => { const w = toWorld(g.col.frame, 0, u, v, g.col.voff); return D([w[0], w[1]]); }), { ...STYLE.thin, closed: true });
    const half = ext / 2 / n;
    S.P([[cx - half, cy], [cx + half, cy]], STYLE.center); S.P([[cx, cy - half], [cx, cy + half]], STYLE.center);
    const xs = uniq(g.rods.map((r) => r.head[0])), ys = uniq(g.rods.map((r) => r.head[1]));
    for (const r of g.rods) { const q = D([r.head[0], r.head[1]]); S.C(q, Math.max(0.5, g.p.rodD / 2 / n), { w: 0.3 }); }
    const px = pl.map((q) => q[0]), py = pl.map((q) => q[1]);
    S.chainH(uniq([Math.min(...px), ...xs, Math.max(...px)]), (v) => D([v, 0])[0], cy - half - 3, D([0, Math.min(...py)])[1] - 1, -5, 'anchor');
    S.chainV(uniq([Math.min(...py), ...ys, Math.max(...py)]), (v) => D([0, v])[1], cx - half - 3, D([Math.min(...px), 0])[0] - 1, -5, 'anchor');
    S.T(pm + '  ' + ratio(n), tx0, ty, 2.6, { bold: true });
    S.T(t('dwg.anchor.typical', { n: g.rods.length, mark: rodMark.get(rodKey(g)), hole: fmt(g.p.hole) }), tx0 + 22, ty, 2.1);
    ty -= detH + 10;
  }
  ty = drawTable(rodRows, wR, t('dwg.anchor.rods'), ty);
  ty = drawTable(bpRows, wB, t('dwg.anchor.plates'), ty);
  S.T(t('dwg.anchor.note1'), tx0, ty, 1.9);
  S.T(t('dwg.anchor.note2'), tx0, ty - 3.2, 1.9);

  // the plan: plates, column sections, rods, grids with chained dimensions
  const pts = groups.flatMap((g) => boxCorners(g.plate).map((w) => [w[0], w[1]]));
  let bb = { x0: Math.min(...pts.map((q) => q[0])), y0: Math.min(...pts.map((q) => q[1])), x1: Math.max(...pts.map((q) => q[0])), y1: Math.max(...pts.map((q) => q[1])) };
  if (gx.length) bb = grow(bb, Math.min(...gx.map((g) => g.at)), bb.y0, Math.max(...gx.map((g) => g.at)), bb.y1);
  if (gy.length) bb = grow(bb, bb.x0, Math.min(...gy.map((g) => g.at)), bb.x1, Math.max(...gy.map((g) => g.at)));
  const saved = AREA;
  AREA = { ...AREA, x1: tx0 - 8 };
  const { s, M } = fit(bb, { l: gy.length ? 34 : 6, r: gy.length ? 18 : 6, b: gx.length ? 18 : 6, t: gx.length ? 34 : 6 });
  AREA = saved;
  const [px0, py0] = M([bb.x0, bb.y0]), [px1, py1] = M([bb.x1, bb.y1]);
  for (const g of gx) { const [x] = M([g.at, 0]); S.P([[x, py0 - 6], [x, py1 + 6]], STYLE.grid); gridBubble(S, [x, py1 + 10], g.label); gridBubble(S, [x, py0 - 10], g.label); }
  for (const g of gy) { const [, y] = M([0, g.at]); S.P([[px0 - 6, y], [px1 + 6, y]], STYLE.grid); gridBubble(S, [px0 - 10, y], g.label); gridBubble(S, [px1 + 10, y], g.label); }
  if (gx.length > 1) S.chainH(gx.map((g) => g.at), (v) => M([v, 0])[0], py1 + 19, py1 + 15, 7, 'grids');
  if (gy.length > 1) S.chainV(gy.map((g) => g.at), (v) => M([0, v])[1], px0 - 19, px0 - 15, -7, 'grids');
  for (const g of groups) {
    const pl = hull(boxCorners(g.plate).map((w) => [w[0], w[1]]));
    S.P(pl.map(M), { ...STYLE.outline, closed: true });
    S.region('part:' + g.plate.id, pl.map(M));
    for (const loop of g.col.profile.loops) S.P(loop.map(([u, v]) => { const w = toWorld(g.col.frame, 0, u, v, g.col.voff); return M([w[0], w[1]]); }), { ...STYLE.thin, closed: true });
    for (const r of g.rods) S.C(M([r.head[0], r.head[1]]), Math.max(0.4, g.p.rodD / 2 / s), { w: 0.25 });
    const cx = g.rods.reduce((t, r) => t + r.head[0], 0) / g.rods.length, cy = g.rods.reduce((t, r) => t + r.head[1], 0) / g.rods.length;
    const off = Math.hypot(cx - g.col.start[0], cy - g.col.start[1]) > 0.5 ? ' ' + t('dwg.anchor.off', { x: fmt(cx - g.col.start[0]), y: fmt(cy - g.col.start[1]) }) : '';
    const q = pl.map(M), x1 = Math.max(...q.map((v) => v[0])), y1 = Math.max(...q.map((v) => v[1])), x0 = Math.min(...q.map((v) => v[0])), y0 = Math.min(...q.map((v) => v[1]));
    S.labelFree(patMark.get(patKey(g)) + off, [[x1 + 1, y1 + 0.8, {}], [x0 - 1, y1 + 0.8, { align: 'right' }], [x1 + 1, y0 - 3, {}], [x0 - 1, y0 - 3, { align: 'right' }]]);
  }
  const lowest = Math.min(...groups.map((g) => g.top));
  S.T(t('dwg.anchor.title') + '  ' + ratio(s), AREA.x0 + 2, AREA.y1 + 8, 3.5, { bold: true });
  S.T(t('dwg.anchor.sub', { z: (lowest >= 0 ? '+' : '') + fmt(lowest) }), AREA.x0 + 2, AREA.y1 + 3.5, 2);
  return { id: 'anchor', kind: 'anchor', title: t('dwg.anchor.title'), scale: ratio(s), S, sortKey: i, rods: { marks: [...rodMark.values()], count: groups.reduce((t, g) => t + g.rods.length, 0), rows: rodRows, plates: bpRows } };
}

// ---------------------------------------------------------------------------------------------

/** The model ref printed in title blocks: CRC-32 of the model text, 8 hex digits. */
export function modelRef(state) {
  return crc32(new TextEncoder().encode(JSON.stringify(state))).toString(16).toUpperCase().padStart(8, '0');
}

/** Every GA plan and elevation, then every assembly drawing, with title blocks. */
export function drawingSet(state, built, marks, { date = '', paper = DEFAULT_PAPER, hiddenLines = true } = {}) {
  usePaper(paper);
  HIDDEN = hiddenLines;
  try { return makeSet(state, built, marks, date); } finally { usePaper(DEFAULT_PAPER); HIDDEN = true; }
}
/** The sheet's content hash (issues.js): CRC-32 of what is drawn, before the title block and revision table. */
function contentHash(items) {
  const r = (v) => Math.round(v * 100) / 100;
  const flat = items.map((it) => it.k === 'text' ? ['t', it.s, r(it.x), r(it.y), r(it.h), r(it.rot || 0), it.align] : it.k === 'circle' ? ['c', r(it.c[0]), r(it.c[1]), r(it.r)] : ['p', it.pts.map((p) => [r(p[0]), r(p[1])]), it.closed, it.dash]);
  return crc32(new TextEncoder().encode(JSON.stringify(flat))).toString(16).toUpperCase().padStart(8, '0');
}

/**
 * Prints of every part and footing (0.4 D19), CRC-32 of what a sheet shows of it, so a cloud marks only a change you can
 * see there: { detail (assembly drawings, anchor plan): profile, material, ends, turn, holes, cuts; ga (plans and
 * elevations, which draw no holes or copes): profile, material, ends, turn, and the assembly mark written beside it }.
 * A footing: its size, place, bars and mark.
 */
export function partPrints(built, marks) {
  const r = (v) => Math.round(v * 10) / 10;
  const crc = (o) => crc32(new TextEncoder().encode(JSON.stringify(o))).toString(16).toUpperCase().padStart(8, '0');
  const detail = new Map(), ga = new Map();
  for (const p of built.parts) {
    const body = [p.profileName, p.material, p.start.map(r), p.end.map(r), r(p.rotation || 0), r(p.voff || 0), r(p.length)];
    detail.set('part:' + p.id, crc([...body, p.holes.map((h) => [h.face, r(h.x), r(h.y), r(h.d)]), (p.cuts || []).map((c) => [c.kind, c.end, c.side, r(c.length), r(c.depth)])]));
    ga.set('part:' + p.id, crc([...body, marks.asmOf.get(p.id) === p.id ? marks.asmMark.get(p.id) || '' : '']));
  }
  for (const ft of built.footings || []) { const { id, ...f } = ft.f; const v = crc([f, marks.footingMark?.get(id) || '']); detail.set('footing:' + id, v); ga.set('footing:' + id, v); }
  return { detail, ga };
}

/**
 * Revision clouds (0.4 D19) round every region whose part is new or changed since the sheet's cloud base (issues.js
 * cloudBase), each with a revision triangle carrying the revision letter. Scalloped: arcs bulging outward, about 4 mm.
 * Drawn after the content hash, so a cloud never counts as a change itself. Returns the clouds' boxes.
 */
function revisionClouds(S, prints, base) {
  const byKey = new Map();
  for (const g of S.regions) {
    if (base.parts[g.key] !== undefined && base.parts[g.key] === prints.get(g.key)) continue;
    (byKey.get(g.key) || byKey.set(g.key, []).get(g.key)).push(g);
  }
  const clouds = [];
  for (const [key, list] of byKey) for (const g of list) {
    const pad = 2.5;
    const b = { x0: Math.max(AREA.x0, g.x0 - pad), y0: Math.max(11, g.y0 - pad), x1: Math.min(SHEET.w - 11, g.x1 + pad), y1: Math.min(SHEET.h - 11, g.y1 + pad) };
    if (clouds.some((c) => c.key === key && c.x0 <= b.x0 + 0.1 && c.y0 <= b.y0 + 0.1 && c.x1 >= b.x1 - 0.1 && c.y1 >= b.y1 - 0.1)) continue;
    S.P(cloudPath(b), { w: 0.3, closed: true });
    // the revision triangle at the cloud's top right corner
    const tx = b.x1, ty = b.y1 + 0.6;
    S.P([[tx - 2.6, ty], [tx + 2.6, ty], [tx, ty + 4.5]], { w: 0.25, closed: true });
    S.T(base.rev, tx, ty + 0.9, 2, { align: 'center' });
    clouds.push({ key, ...b });
  }
  return clouds;
}
/** A closed scalloped outline round a box (counter-clockwise, arcs bulging out). */
function cloudPath(b) {
  const pts = [], side = (ax, ay, bx, by) => {
    const L = Math.hypot(bx - ax, by - ay), n = Math.max(1, Math.round(L / 4)), nx = (by - ay) / L, ny = -(bx - ax) / L;   // outward normal (ccw)
    for (let i = 0; i < n; i++) for (let j = 0; j < 6; j++) {
      const f = (i + j / 6) / n, bulge = Math.sin(Math.PI * j / 6) * Math.min(1.3, L / n / 3);
      pts.push([ax + (bx - ax) * f + nx * bulge, ay + (by - ay) * f + ny * bulge]);
    }
  };
  side(b.x0, b.y0, b.x1, b.y0); side(b.x1, b.y0, b.x1, b.y1); side(b.x1, b.y1, b.x0, b.y1); side(b.x0, b.y1, b.x0, b.y0);
  return pts;
}

/** The revision table beside the title block (to its left, in the bottom band): latest issue first, at most 6 rows. */
function revisionTable(S, log) {
  if (!log.length) return;
  const x1 = SHEET.w - 172, x0 = x1 - 108, h = 5.2;
  // as many rows (up to 6) as fit under whatever is already drawn in that corner (a small sheet's part list)
  let low = 52;
  for (const it of S.items) {
    const ys = it.k === 'text' ? (() => { const b = textBox(it.s, it.x, it.y, it.h, it); return b.x1 > x0 && b.x0 < x1 ? [b.y0] : []; })()
      : it.k === 'circle' ? (it.c[0] + it.r > x0 && it.c[0] - it.r < x1 ? [it.c[1] - it.r] : []) : it.pts.filter((p) => p[0] > x0 && p[0] < x1).map((p) => p[1]);
    for (const y of ys) if (y > 11 && y < low + 1.5) low = Math.min(low, y - 1.5);
  }
  const fit = Math.floor((low - 10) / h) - 1;
  if (fit < 1) return;
  const rows = log.slice(-Math.min(6, fit)).reverse();
  const y1 = Math.min(52, low), y0 = y1 - h * (rows.length + 1);
  S.rect(x0, y0, x1, y1, STYLE.thin);
  S.P([[x0 + 12, y0], [x0 + 12, y1]], STYLE.thin); S.P([[x0 + 33, y0], [x0 + 33, y1]], STYLE.thin);
  for (const [s, x] of [[t('dwg.rev.rev'), x0 + 2], [t('dwg.rev.date'), x0 + 14], [t('dwg.rev.desc'), x0 + 35]]) S.T(s, x, y1 - h + 1.6, 2, { bold: true });
  S.P([[x0, y1 - h], [x1, y1 - h]], STYLE.thin);
  rows.forEach((r, i) => {
    const y = y1 - h * (i + 2) + 1.6;
    S.T(r.rev, x0 + 2, y, 2.2, { bold: i === 0 }); S.T(r.date, x0 + 14, y, 2); S.T(String(r.note || '').slice(0, 40), x0 + 35, y, 2);
  });
}

function makeSet(state, built, marks, date) {
  const ref = modelRef(state);
  const raw = [];
  [...state.levels].sort((a, b) => a.z - b.z).forEach((lv, i) => { const s = planSheet(state, built, marks, lv, i); if (s) raw.push(s); });
  for (const g of state.grids.y) { const s = elevationSheet(state, built, marks, g, 'y'); if (s) raw.push(s); }
  for (const g of state.grids.x) { const s = elevationSheet(state, built, marks, g, 'x'); if (s) raw.push(s); }
  const anchor = anchorSheet(state, built, marks, raw.length);
  if (anchor) raw.push(anchor);
  const nGa = raw.length;
  for (const a of marks.assemblies) raw.push(assemblySheet(built, marks, a));
  const printSets = partPrints(built, marks);
  const sheets = raw.map((r, k) => {
    const number = r.kind === 'assembly' ? 'A-' + r.id.slice('assembly:'.length) : 'GA-' + String(k + 1).padStart(2, '0');
    const hash = contentHash(r.S.items);
    const log = (state.issues || []).filter((x) => x.sheet === r.id);
    const rev = log.length ? log[log.length - 1].rev : '';
    const allPrints = r.kind === 'plan' || r.kind === 'elevation' ? printSets.ga : printSets.detail;
    const prints = {};
    for (const g of r.S.regions) if (allPrints.has(g.key)) prints[g.key] = allPrints.get(g.key);
    const base = cloudBase(log, hash);
    const clouds = base ? revisionClouds(r.S, allPrints, base) : [];
    titleBlock(r.S, { title: r.title, subtitle: r.kind === 'assembly' ? t('sheet.sub.assembly') : t('sheet.sub.ga'), number: rev ? t('dwg.rev.number', { number, rev }) : number, scale: r.scale, model: state.name, ref, date, sheet: t('sheet.tb.sheet-of', { n: k + 1, total: raw.length }) + '  ' + SHEET.key.replace('-', ' ') });
    revisionTable(r.S, log);
    return { id: r.id, kind: r.kind, number, title: r.title, scale: r.scale, w: SHEET.w, h: SHEET.h, paper: SHEET.key, items: r.S.items, dims: r.S.dims, labels: r.S.labels, asm: r.asm, rods: r.rods, welds: r.S.welds, hash, rev, prints, clouds };
  });
  return { sheets, ref, gaCount: nGa, paper: SHEET.key };
}
