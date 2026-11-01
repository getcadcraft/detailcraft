/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shop.js — a single-part shop drawing as a display list (a landscape sheet, A3 unless info.paper names another of
 * paper.js PAPERS; mm, y up) for pdf.js and the in-page preview. No DOM.
 *
 *   shopDrawing(part, info) → { w, h, paper, items, dims, scale, refused? }
 * The layout comes from the sheet (A3: length room 265, depth 60, section at 372, 205): rooms grow with paper.k,
 * text sizes and dimension gaps stay.
 *
 * I-shapes: elevation looking at the web (web holes as circles, flange holes as hidden lines, copes
 * notched), a top-flange plan when there are flange holes, a section, hole and cope dimensions, a title
 * block. Plates: the plate face with its holes, and its edge as the section. Other profiles are refused.
 * Long parts are drawn with the length at one scale and the depth at a larger one when the depth would
 * otherwise be under 30 mm on paper; the view title then says both scales (dimensions govern).
 */
import { textWidth } from './pdf.js';
import { paperOf } from './paper.js';
import { t } from './i18n.js';
import { endX } from './geom.js';

const SCALES = [1, 2, 2.5, 5, 10, 15, 20, 25, 30, 40, 50, 75, 100, 150, 200];
const pickScale = (size, room) => SCALES.find((n) => size / n <= room) || SCALES[SCALES.length - 1];
const fmtLen = (v) => String(Math.round(v));
const ratio = (n) => '1:' + String(n);
const HOLES_IN = { plate: 'shopdwg.holes.plate', web: 'shopdwg.holes.web', top: 'shopdwg.holes.top', bottom: 'shopdwg.holes.bottom' };

export function shopRefusal(part) {
  if (!part) return t('shopdwg.err.select');
  if (part.profile.kind === 'I' || part.profile.kind === 'PL') return null;
  return t('shopdwg.err.kind', { profile: part.profileName });
}

export function shopDrawing(part, info = {}) {
  const refused = shopRefusal(part);
  if (refused) return { refused };
  const SHEET = paperOf(info.paper), k = SHEET.k;
  const items = [], dims = [];
  const P = (pts, o = {}) => items.push({ k: 'path', pts, w: o.w ?? 0.35, dash: o.dash || null, closed: !!o.closed, fill: !!o.fill });
  const T = (s, x, y, h = 2.5, o = {}) => items.push({ k: 'text', s: String(s), x, y, h, align: o.align || 'left', rot: o.rot || 0, bold: !!o.bold });
  const C = (c, r, o = {}) => items.push({ k: 'circle', c, r, w: o.w ?? 0.3, dash: o.dash || null });
  const thin = { w: 0.18 }, hidden = { w: 0.18, dash: [1.5, 1] }, center = { w: 0.13, dash: [4, 1, 0.6, 1] };

  /** Horizontal dimension between paper x1 and x2 at paper y; value in model mm. */
  const dimH = (x1, x2, y, from, value, label = fmtLen(value)) => {
    P([[x1, from], [x1, y - 1.5]], thin); P([[x2, from], [x2, y - 1.5]], thin);
    P([[x1, y], [x2, y]], thin);
    for (const x of [x1, x2]) P([[x - 0.9, y - 0.9], [x + 0.9, y + 0.9]], { w: 0.35 });
    const tw = textWidth(label, 2.2);
    const above = Math.abs(x2 - x1) >= tw + 1;
    T(label, (x1 + x2) / 2, y + (above ? 0.8 : -3.2), 2.2, { align: 'center' });
    dims.push({ dir: 'h', value: Math.round(value), label });
  };
  const dimV = (y1, y2, x, from, value, label = fmtLen(value)) => {
    P([[from, y1], [x + 1.5, y1]], thin); P([[from, y2], [x + 1.5, y2]], thin);
    P([[x, y1], [x, y2]], thin);
    for (const y of [y1, y2]) P([[x - 0.9, y - 0.9], [x + 0.9, y + 0.9]], { w: 0.35 });
    T(label, x - 0.8, (y1 + y2) / 2, 2.2, { align: 'center', rot: Math.PI / 2 });
    dims.push({ dir: 'v', value: Math.round(value), label });
  };
  /** Unique sorted positions (within 0.5 mm). */
  const uniq = (vals) => { const s = [...vals].sort((a, b) => a - b), o = []; for (const v of s) if (!o.length || v - o[o.length - 1] > 0.5) o.push(v); return o; };

  // sheet frame
  P([[10, 10], [SHEET.w - 10, 10], [SHEET.w - 10, SHEET.h - 10], [10, SHEET.h - 10]], { w: 0.5, closed: true });

  const p = part.profile, L = part.length, isPlate = p.kind === 'PL';
  const H = isPlate ? p.b : p.d;                                    // height of the face view
  const faceHoles = part.holes.filter((h) => (isPlate ? h.face === 'plate' : h.face === 'web'));
  const flangeHoles = isPlate ? [] : part.holes.filter((h) => h.face === 'top' || h.face === 'bottom');

  // scales
  const X0 = 30, Y0 = SHEET.h - 122 * k;                            // elevation: left end, bottom of part
  const roomH = SHEET.h - 52 - Y0;                                  // up to the view title, under the sheet heading
  let nx = pickScale(L, SHEET.w - 30 - 55 * k - 70);
  if (H / nx > roomH) nx = pickScale(H, roomH);                     // a wide plate: its height decides
  let ny = nx;
  if (H / nx < 30 * Math.min(k, 1)) ny = pickScale(H, Math.min(60 * k, roomH));
  const sx = 1 / nx, sy = 1 / ny;
  const ex = (x) => X0 + x * sx, ey = (y) => Y0 + (y + H / 2) * sy;
  const viewName = isPlate ? t('shopdwg.view.plate') : t('shopdwg.view.elevation');
  T(viewName + (nx === ny ? ' ' + ratio(nx) : ' — ' + t('shopdwg.view.two-scales', { length: ratio(nx), depth: ratio(ny) })), X0, Math.min(ey(H / 2) + 14, SHEET.h - 37), 3, { bold: true });

  // outline (with copes) and flange lines
  const copes = part.cuts.filter((c) => c.kind === 'cope');
  const cope = (end, side) => copes.find((c) => c.end === end && c.side === side);
  const out = [];
  const h2 = H / 2;
  const bs = cope('start', 'bottom'), be = cope('end', 'bottom'), te = cope('end', 'top'), ts = cope('start', 'top');
  // a mitre's ends (0.7.1 71.20) where the cut face crosses the web's plane; square ends at 0 and L
  const xs0 = (v) => (isPlate ? 0 : endX(part, 'start', 0, v)), xs1 = (v) => (isPlate ? L : endX(part, 'end', 0, v));
  if (bs) out.push([0, -h2 + bs.depth], [bs.length, -h2 + bs.depth], [bs.length, -h2]); else out.push([xs0(-h2), -h2]);
  if (be) out.push([L - be.length, -h2], [L - be.length, -h2 + be.depth], [L, -h2 + be.depth]); else out.push([xs1(-h2), -h2]);
  if (te) out.push([L, h2 - te.depth], [L - te.length, h2 - te.depth], [L - te.length, h2]); else out.push([xs1(h2), h2]);
  if (ts) out.push([ts.length, h2], [ts.length, h2 - ts.depth], [0, h2 - ts.depth]); else out.push([xs0(h2), h2]);
  P(out.map(([x, y]) => [ex(x), ey(y)]), { w: 0.5, closed: true });
  if (!isPlate) {
    for (const [side, y] of [['top', h2 - p.tf], ['bottom', -h2 + p.tf]]) {
      const a = cope('start', side), b = cope('end', side);
      const x0 = a && a.depth > p.tf ? a.length : xs0(y), x1 = b && b.depth > p.tf ? L - b.length : xs1(y);
      if (x1 > x0) P([[ex(x0), ey(y)], [ex(x1), ey(y)]], { w: 0.3 });
    }
  }
  // holes
  for (const h of faceHoles) {
    const r = Math.max(0.6, h.d / 2 * sy);
    C([ex(h.x), ey(h.y)], r, { w: 0.3 });
    P([[ex(h.x) - r - 1, ey(h.y)], [ex(h.x) + r + 1, ey(h.y)]], center);
  }
  for (const h of flangeHoles) {
    const yA = h.face === 'top' ? h2 : -h2, yB = h.face === 'top' ? h2 - p.tf : -h2 + p.tf;
    for (const dx of [-h.d / 2, h.d / 2]) P([[ex(h.x + dx), ey(yA)], [ex(h.x + dx), ey(yB)]], hidden);
    P([[ex(h.x), ey(yA) + (h.face === 'top' ? 1.5 : -1.5)], [ex(h.x), ey(yB) + (h.face === 'top' ? -1.5 : 1.5)]], center);
  }

  // dimensions: hole stations along the bottom, overall length below that
  const stations = uniq([0, ...part.holes.map((h) => h.x), L]);
  const yChain = ey(-h2) - 9, yAll = ey(-h2) - 17;
  if (stations.length > 2) for (let i = 1; i < stations.length; i++) dimH(ex(stations[i - 1]), ex(stations[i]), yChain, ey(-h2) - 1, stations[i] - stations[i - 1]);
  dimH(ex(0), ex(L), yAll, ey(-h2) - 1, L);
  // face hole heights on the right, from the underside
  const ys = uniq(faceHoles.map((h) => h.y));
  if (ys.length) {
    const chain = [-h2, ...ys, h2];
    for (let i = 1; i < chain.length; i++) dimV(ey(chain[i - 1]), ey(chain[i]), ex(L) + 10, ex(L) + 1, chain[i] - chain[i - 1]);
  }
  dimV(ey(-h2), ey(h2), ex(L) + 18, ex(L) + 1, H);
  copes.forEach((c, i) => {
    const x = c.end === 'start' ? ex(c.length / 2) : ex(L - c.length / 2);
    T(t('shopdwg.cope', { length: fmtLen(c.length), depth: fmtLen(c.depth) }), x, c.side === 'top' ? ey(h2) + 3 + i * 3 : ey(-h2) - 4 - i * 3, 2.2, { align: 'center' });
  });

  // top flange plan (I-shapes with flange holes)
  if (flangeHoles.length) {
    const bf = p.bf, nf = pickScale(bf, 40 * k), sf = Math.max(sy, 1 / nf);
    const Y1 = Y0 - 80 * k;
    const fy = (u) => Y1 + (u + bf / 2) * sf;
    T(t('shopdwg.view.top-flange', { scale: ratio(Math.round(1 / sf * 100) / 100) }), X0, fy(bf / 2) + 5, 2.6, { bold: true });
    const a = cope('start', 'top'), b = cope('end', 'top');
    const x0 = a && a.depth > p.tf ? a.length : 0, x1 = b && b.depth > p.tf ? L - b.length : L;
    P([[ex(x0), fy(-bf / 2)], [ex(x1), fy(-bf / 2)], [ex(x1), fy(bf / 2)], [ex(x0), fy(bf / 2)]], { w: 0.5, closed: true });
    P([[ex(0) - 3, fy(0)], [ex(L) + 3, fy(0)]], center);
    for (const h of flangeHoles) C([ex(h.x), fy(h.y)], Math.max(0.6, h.d / 2 * sf), h.face === 'top' ? { w: 0.3 } : hidden);
    const us = uniq(flangeHoles.map((h) => h.y));
    const chain = [-bf / 2, ...us, bf / 2];
    for (let i = 1; i < chain.length; i++) dimV(fy(chain[i - 1]), fy(chain[i]), ex(L) + 10, ex(L) + 1, chain[i] - chain[i - 1]);
  }

  // section
  {
    const W = isPlate ? p.b : p.width, D = isPlate ? p.t : p.depth;
    const ns = pickScale(Math.max(W, D), 55 * k), ss = 1 / ns;
    const CX = SHEET.w - 48 * Math.max(k, 1), CY = SHEET.h - 92 * k;
    T(t('shopdwg.view.section', { scale: ratio(ns) }), CX, CY + Math.max(D * ss, 20) / 2 + 12, 3, { bold: true, align: 'center' });
    if (isPlate) {
      // edge view: width across, thickness up
      P([[CX - W / 2 * ss, CY - D / 2 * ss], [CX + W / 2 * ss, CY - D / 2 * ss], [CX + W / 2 * ss, CY + D / 2 * ss], [CX - W / 2 * ss, CY + D / 2 * ss]], { w: 0.5, closed: true });
      for (const u of uniq(faceHoles.map((h) => h.y))) P([[CX + u * ss, CY - D / 2 * ss - 2], [CX + u * ss, CY + D / 2 * ss + 2]], center);
      dimH(CX - W / 2 * ss, CX + W / 2 * ss, CY - D / 2 * ss - 8, CY - D / 2 * ss - 1, W);
      T('t = ' + fmtLen(D), CX + W / 2 * ss + 3, CY - 1, 2.2);
    } else {
      for (const loop of p.loops) P(loop.map(([u, v]) => [CX + u * ss, CY + v * ss]), { w: 0.5, closed: true });
      for (const y of uniq(faceHoles.map((h) => h.y))) P([[CX - p.tw * ss / 2 - 3, CY + y * ss], [CX + p.tw * ss / 2 + 3, CY + y * ss]], center);
      for (const h of flangeHoles) { const v = h.face === 'top' ? D / 2 : -D / 2; P([[CX + h.y * ss, CY + v * ss + (h.face === 'top' ? 2 : -2)], [CX + h.y * ss, CY + (v - Math.sign(v) * p.tf) * ss + (h.face === 'top' ? -2 : 2)]], center); }
      dimH(CX - W / 2 * ss, CX + W / 2 * ss, CY - D / 2 * ss - 8, CY - D / 2 * ss - 1, W);
      dimV(CY - D / 2 * ss, CY + D / 2 * ss, CX - W / 2 * ss - 6, CX - W / 2 * ss - 1, D);
    }
  }

  // hole schedule
  const groups = new Map();
  for (const h of part.holes) { const k = (isPlate ? 'plate' : h.face === 'web' ? 'web' : h.face) + '|' + h.d; groups.set(k, (groups.get(k) || 0) + 1); }
  let ly = Math.min(72, Y0 - 103 * k);
  T(t('shopdwg.holes'), 30, ly, 2.8, { bold: true });
  if (!groups.size) { ly -= 4.5; T(t('shopdwg.holes.none'), 30, ly, 2.5); }
  for (const [k, n] of groups) { ly -= 4.5; const [where, d] = k.split('|'); T(HOLES_IN[where] ? t(HOLES_IN[where], { n, d }) : n + ' x Ø' + d + ' ' + where, 30, ly, 2.5); }
  if (info.weld) { ly -= 6; T(t('shopdwg.weld', { weld: info.weld }), 30, ly, 2.5); }
  // mitre cuts (0.7.1 71.20): each cut end's angle from square, in the web's plane and across the flanges
  const deg = (k) => (Math.atan(Math.abs(k)) * 180 / Math.PI).toFixed(1);
  for (const end of ['start', 'end']) {
    const c = !isPlate && part.endCuts && part.endCuts[end];
    if (!c) continue;
    ly -= 4.5;
    T(t('shopdwg.endcut', { end: t('shopdwg.end.' + end), web: deg(c.kv), flange: deg(c.ku) }), 30, ly, 2.5);
  }

  // title block
  const tb = [SHEET.w - 190, 10, SHEET.w - 10, 64];
  P([[tb[0], tb[1]], [tb[2], tb[1]], [tb[2], tb[3]], [tb[0], tb[3]]], { w: 0.5, closed: true });
  const rows = [
    [t('shopdwg.tb.part-mark'), info.mark || '', t('shopdwg.tb.assembly'), info.asmMark || ''],
    [t('shopdwg.tb.profile'), part.profileName, t('shopdwg.tb.material'), part.material],
    [t('shopdwg.tb.length'), fmtLen(L) + ' mm', t('shopdwg.tb.quantity'), String(info.count || 1)],
    [t('shopdwg.tb.weight-each'), part.weight.toFixed(1) + ' kg', t('shopdwg.tb.total'), (part.weight * (info.count || 1)).toFixed(1) + ' kg'],
    [t('shopdwg.tb.model'), info.model || '', t('shopdwg.tb.date'), info.date || ''],
  ];
  rows.forEach((r, i) => {
    const y = tb[3] - 9 - i * 9;
    P([[tb[0], y - 2.2], [tb[2], y - 2.2]], thin);
    T(r[0], tb[0] + 2, y + 2.6, 1.9); T(r[1], tb[0] + 2, y - 0.6, 3, { bold: i === 0 });
    T(r[2], tb[0] + 92, y + 2.6, 1.9); T(r[3], tb[0] + 92, y - 0.6, 3, { bold: i === 0 });
  });
  P([[tb[0] + 90, tb[1]], [tb[0] + 90, tb[3]]], thin);
  T(t('shopdwg.tb.footer'), tb[0] + 2, tb[1] + 2.5, 1.9);
  T(t('shopdwg.title', { mark: info.mark || '' }), 30, SHEET.h - 22, 5, { bold: true });
  T(t(info.count > 1 ? 'shopdwg.sub.off' : 'shopdwg.sub', { role: part.role, profile: part.profileName, length: fmtLen(L), count: info.count }), 30, SHEET.h - 29, 3);

  T(SHEET.key.replace('-', ' '), tb[2] - 2, tb[1] + 2.5, 1.9, { align: 'right' });
  return { w: SHEET.w, h: SHEET.h, paper: SHEET.key, items, dims, scale: { length: nx, depth: ny } };
}
