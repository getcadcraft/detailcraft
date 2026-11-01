/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — problem codes; the words the person reads come from the language file (cong.*) */
/**
 * congestion.js — the rebar congestion map of a pad footing (0.8 round 2, EG.74). No DOM: tools/detailcraft-test/test-congestion.mjs runs it in Node.
 *
 *   congestion(footing, opts) → map      a grid over the footing's plan: how tight the opening is for concrete to get down at each cell
 *   congestionProblems(map, { labelOf, t }) → [problem]   the footing's worst place, in the shared Problems shape
 *
 * The opening at a point is the narrowest free gap in any one layer of steel the concrete passes down through: between the bars along x (the
 * bottom layer), between the bars along y (the next), between the starters' hook legs on top, each with the starters, which stand in all of them.
 * Concrete moves sideways between the layers, so gaps are not added up across them. The cell's value is `need / opening`. Over 1 means concrete (and its vibrator) will not
 * pass freely. What counts as `need`: ACI 318-19 25.2.1, the clear spacing between parallel bars is at least the greater of 25 mm, db and,
 * when an aggregate size is given, 4/3 of it (26.4.2.1(a)(3)); bars of BS 4449 sets use EN 1992-1-1 8.2: db, aggregate + 5 mm, 20 mm. A vibrator
 * diameter, when given, raises `need` to it. Both are inputs the person gives: DetailCraft does not know the mix or the pump.
 *
 * map = { cols, rows, cell (mm), x0, y0 (local mm, the footing's centre is 0,0), values (Float32Array rows × cols, row-major from y0 up),
 *         opening (Float32Array, mm), need (mm), worst { x, y, ratio, opening }, over (cells over 1), share (0–1), bars: [{ kind, x, y, w, h }] }
 */
import { BARS, layout, hookLeg } from './rebar.js';

/** The clear spacing a bar of this size asks for between parallel bars (mm). */
export function clearNeed(bar, { aggregate = 0 } = {}) {
  if (bar.set === 'bs') return Math.max(bar.db, aggregate ? aggregate + 5 : 0, 20);
  return Math.max(25.4, bar.db, aggregate ? aggregate * 4 / 3 : 0);
}

/** The free interval containing `at` among blocking intervals [a, b] on a line from lo to hi. Returns its length (0 when `at` is inside a bar). */
function gapAt(at, intervals, lo, hi) {
  let left = lo, right = hi;
  for (const [a, b] of intervals) {
    if (at >= a && at <= b) return 0;
    if (b <= at && b > left) left = b;
    if (a >= at && a < right) right = a;
  }
  return Math.max(0, right - left);
}

export function congestion(f, opts = {}) {
  const c = f.mat.cover, bx = BARS.get(f.mat.barX), by = BARS.get(f.mat.barY);
  const L = f.L, B = f.B;
  // bars as rectangles in the footing's local plan (x along L, y along B), centre 0,0
  const bars = [];
  const lx = layout(B - 2 * c - bx.db, f.mat.sX), ly = layout(L - 2 * c - by.db, f.mat.sY);
  for (let i = 0; i < lx.n; i++) { const y = -B / 2 + c + bx.db / 2 + i * lx.spacing; bars.push({ kind: 'x', x: -L / 2 + c, y: y - bx.db / 2, w: L - 2 * c, h: bx.db }); }   // along x
  for (let i = 0; i < ly.n; i++) { const x = -L / 2 + c + by.db / 2 + i * ly.spacing; bars.push({ kind: 'y', x: x - by.db / 2, y: -B / 2 + c, w: by.db, h: B - 2 * c }); }    // along y
  let starter = null;
  if (f.starters?.on) {
    const s = f.starters, sb = BARS.get(s.bar);
    starter = sb;
    for (let i = 0; i < s.nx; i++) for (let j = 0; j < s.ny; j++) {
      const px = (i - (s.nx - 1) / 2) * s.sx, py = (j - (s.ny - 1) / 2) * s.sy;
      bars.push({ kind: 'starter', x: px - sb.db / 2, y: py - sb.db / 2, w: sb.db, h: sb.db });
      if (s.hook) {   // the hook points outward along x (or y when the bar is further out that way), as footingBars places it
        const alongX = Math.abs(px) >= Math.abs(py) || (Math.abs(px) < 1e-9 && Math.abs(py) < 1e-9);
        const leg = hookLeg(sb), dir = alongX ? (px >= 0 ? 1 : -1) : (py >= 0 ? 1 : -1);
        if (alongX) bars.push({ kind: 'hook', x: dir > 0 ? px : px - leg, y: py - sb.db / 2, w: leg, h: sb.db });
        else bars.push({ kind: 'hook', x: px - sb.db / 2, y: dir > 0 ? py : py - leg, w: sb.db, h: leg });
      }
    }
  }
  // what the concrete needs: the biggest clear-spacing rule among the bars in the footing, or the vibrator
  const need = Math.max(Number(opts.vibrator) || 0, clearNeed(bx, opts), clearNeed(by, opts), starter ? clearNeed(starter, opts) : 0);
  const cell = Math.max(5, Number(opts.cell) || Math.max(10, Math.ceil(Math.max(L, B) / 160 / 5) * 5));
  const cols = Math.max(1, Math.round(L / cell)), rows = Math.max(1, Math.round(B / cell));
  const x0 = -L / 2, y0 = -B / 2, cw = L / cols, ch = B / rows;
  // the concrete goes down through the layers one after the other and can move sideways between them, so the opening at a point is the
  // narrowest free gap in any one layer: the bottom layer (bars along x), the next (bars along y), the hooks on top. A starter stands in all.
  const through = (kinds, y) => bars.filter((r) => kinds.includes(r.kind) && y >= r.y && y <= r.y + r.h).map((r) => [r.x, r.x + r.w]);      // blocks along x at line y
  const throughY = (kinds, x) => bars.filter((r) => kinds.includes(r.kind) && x >= r.x && x <= r.x + r.w).map((r) => [r.y, r.y + r.h]);     // blocks along y at line x
  const LAYER_Y = ['x', 'starter'], LAYER_X = ['y', 'starter'], LAYER_H = ['hook', 'starter'];
  const values = new Float32Array(cols * rows), opening = new Float32Array(cols * rows);
  let worst = { x: 0, y: 0, ratio: 0, opening: Infinity }, over = 0;
  const colLists = [];
  for (let i = 0; i < cols; i++) { const x = x0 + (i + 0.5) * cw; colLists.push([throughY(LAYER_Y, x), throughY(LAYER_H, x)]); }
  for (let j = 0; j < rows; j++) {
    const y = y0 + (j + 0.5) * ch, rowX = through(LAYER_X, y), rowH = through(LAYER_H, y);
    for (let i = 0; i < cols; i++) {
      const x = x0 + (i + 0.5) * cw;
      const gap = Math.min(gapAt(x, rowX, -L / 2 + c, L / 2 - c), gapAt(y, colLists[i][0], -B / 2 + c, B / 2 - c),
        gapAt(x, rowH, -L / 2 + c, L / 2 - c), gapAt(y, colLists[i][1], -B / 2 + c, B / 2 - c));
      opening[j * cols + i] = gap;
      const ratio = gap > 0 ? need / gap : need / 0.5;   // inside a bar: its own number, large
      values[j * cols + i] = ratio;
      if (gap > 0 && ratio > 1) over++;   // a cell inside a bar is a bar, not a tight opening
      if (gap > 0 && ratio > worst.ratio) worst = { x, y, ratio, opening: gap };
    }
  }
  return { cols, rows, cell: cw, x0, y0, values, opening, need, worst, over, share: over / Math.max(1, values.reduce((n, _, k) => n + (opening[k] > 0 ? 1 : 0), 0)), bars, aggregate: Number(opts.aggregate) || 0, vibrator: Number(opts.vibrator) || 0 };
}

/**
 * The cells over 1 that are NOT a bar itself: concrete has to get down there. Cells inside a bar are ratio need/0.5 and skipped
 * (a bar is not an opening). Returns the share of the free cells that are too tight.
 */
export function tightShare(map) {
  let free = 0, tight = 0;
  for (let k = 0; k < map.values.length; k++) { if (map.opening[k] <= 0) continue; free++; if (map.values[k] > 1) tight++; }
  return free ? tight / free : 0;
}

/** Colour of a ratio for the map: free (0) to over (1+). Returns [r, g, b]. */
export function heat(ratio) {
  const v = Math.max(0, Math.min(1.5, ratio)) / 1.5;
  // pale blue → yellow → red; the same ramp in light and dark pages, drawn on a white ground
  const stops = [[0, [226, 236, 247]], [0.5, [247, 213, 118]], [0.67, [236, 140, 70]], [1, [196, 48, 43]]];
  for (let i = 1; i < stops.length; i++) if (v <= stops[i][0]) {
    const [a, A] = stops[i - 1], [b, Bc] = stops[i], k = (v - a) / (b - a);
    return A.map((u, n) => Math.round(u + (Bc[n] - u) * k));
  }
  return stops[stops.length - 1][1];
}

export function congestionProblems(map, { label = '', id = '', t = null, footing = null } = {}) {
  const share = tightShare(map);
  if (map.worst.ratio <= 1 || share === 0) return [];
  const vars = { mark: label, opening: Math.round(map.worst.opening * 10) / 10, need: Math.round(map.need * 10) / 10, pct: Math.round(share * 100), x: Math.round(map.worst.x), y: Math.round(map.worst.y) };
  const text = t ? t('cong.prob.tight', vars) : `${label}: the tightest place leaves ${vars.opening} mm for concrete to get down; ${vars.need} mm is needed (${vars.pct}% of the open area is tighter).`;
  return [{ id: 'cong:tight:' + id, code: 'cong.tight', severity: map.worst.opening < map.need / 2 ? 'error' : 'warning', msg: { key: 'cong.prob.tight', vars }, text, about: [{ kind: 'footing', id, label }],
    source: { kind: 'engine', name: 'detailcraft.congestion' }, req: { op: '>=', value: Math.round(map.need * 10) / 10, unit: 'mm' }, found: { value: vars.opening, unit: 'mm' } }];
}
