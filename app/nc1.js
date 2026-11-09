/* SPDX-License-Identifier: Apache-2.0 */
/**
 * nc1.js — DSTV NC files (.nc1) for I-shapes, channels, angles, rectangular and round HSS, and plates. No DOM. Millimeters.
 *
 * Written to DSTV "Standard Description for Steel Structure Pieces for the Numerical Controls",
 * 7th edition, July 1998 (English translation; the German text governs), as hosted by Tekla at
 * support.tekla.com/dist/sxf/document/dstv_nc_eng.pdf. Page numbers below are that document's.
 * One file per part mark:
 *   ST  header, 24 lines, each "2 spaces + value" (p. 9): order, drawing, phase, piece, steel quality,
 *       quantity, profile, profile code (I, U, L, M, RO or B; p. 7), length, profile height, flange width, flange thickness,
 *       web thickness, radius, weight per m, paint surface per m, web start / end cut, flange start / end
 *       cut (degrees), four text lines. For plates ("For the sheets", p. 9): height = plate width, flange
 *       width 0.0, flange thickness 0.0, web thickness = plate thickness, weight in kg/m² and paint
 *       surface in m²/m² (both faces: 2).
 *   AK  outer contours, closed, counter-clockwise ("mathematic orientation", p. 13), row: face, x, y, radius.
 *   BO  holes (p. 10), row: face, x, y, diameter, depth (0.00 = through).
 *   EN  end.
 * Faces (p. 10): o = top flange, v = front web, u = bottom flange (plates: v).
 * Coordinates (figure p. 7): the zero point is on the outside of the bottom flange, on the behind (h)
 * side; Y runs from the bottom flange toward the top flange, Z from the behind face toward the front.
 * So on the web y is measured from the underside of the profile, and on a flange from its edge on the
 * BEHIND side. DetailCraft puts the front (v) at the part's −u side, so the behind edge is +u:
 * flange y = bf/2 − u. (Up to 2026-10-10 flange y was measured from the front edge: mirrored.)
 * x runs from the part's cut start. On a plate y is measured from the plate's −u edge.
 * Other profiles (0.4 D10), each placed as the p. 7 figure draws it, with x, Y, Z right-handed like DetailCraft's
 * x, u, v (so nothing comes out mirrored):
 *   U  channel: lying on its back, toes up (Z = u + bf/2). Y = d/2 − v, so DSTV's u flange (Y = 0) is DetailCraft's TOP
 *      flange and o is the bottom one. Web y from the u flange's outside; flange y from the back of the web.
 *   L  angle: heel at the zero point, the leg along u lying flat (face v, y = u + b/2), the leg along v standing at
 *      the u face (y = v + b/2 up from the heel). Holes only come from brace gussets (0.4 D22): DetailCraft's face
 *      'bottom' is the leg along u (→ v), 'web' the leg along v (→ u).
 *   M  rectangular HSS: like an I (Z = b/2 − u, Y = v + h/2): o = top wall, u = bottom wall, v and h the side walls.
 *      A DetailCraft web hole goes through both side walls: one BO row on v and one on h. Header: height h, flange
 *      width b, both thicknesses t, radius = the outside corner radius.
 *   RO round HSS: the p. 9 header has no column for tubes; written as height D, flange width D, both thicknesses t,
 *      radius 0, and one contour, the tube seen from the front (v): L × D. No holes (DetailCraft has no tube holes).
 * Copes on channels and RHS are notched like an I's; an angle or a round tube with a cope is refused.
 * Mitre ends (0.7.1 71.20, I-shapes only: DetailCraft makes them only on I-shapes): the header's skew cut angles (p. 9: "must be
 * given in any case"; web cuts as seen on the front face, flange cuts on the bottom face; positive anti-clockwise, p. 6 — from the
 * p. 9 figure, a start whose top reaches further out than its bottom is +), and the contours follow the cut: the web's at its
 * middle plane, each flange's at its outside face. The length is the overall length (the smallest x is 0, p. 8); no saw length.
 * Any other profile with a plane-cut end is refused.
 * Read back in the test by two independent readers (DSTV.Net 1.3.0 and the Rust crate dstv 0.8.0).
 * Not written: bevels, markings (SI), saw cuts, unrolled hole positions on round tubes.
 */

import { STEEL_DENSITY as STEEL_KG_PER_M3 } from './profiles.js';
import { t } from './i18n.js';
import { endX } from './geom.js';

const f2 = (v) => (Math.abs(v) < 0.005 ? 0 : v).toFixed(2);
const pad = (s, n = 12) => String(s).padStart(n);
const txt = (s) => String(s ?? '').replace(/[^\x20-\x7e]/g, '?').slice(0, 50) || '-';

/** Can this part go to an NC file? null if yes, else the reason. */
const CODE = { I: 'I', C: 'U', L: 'L', RHS: 'M', CHS: 'RO', PL: 'B' };
export function ncRefusal(part) {
  const k = part.profile.kind;
  const KIND = { L: 'nc.kind.l', CHS: 'nc.kind.chs' };
  if ((k === 'L' || k === 'CHS') && (part.cuts || []).some((c) => c.kind === 'cope')) return t('nc.refusal.cope', { profile: part.profileName, kind: t(KIND[k]) });
  if (part.endCuts && k !== 'I') return t('nc.refusal.endcut', { profile: part.profileName });
  if (CODE[k]) return null;
  return t('nc.refusal.profile', { profile: part.profileName });
}

/**
 * The web's outline with copes notched, y up from the side at v = −h/2 (counter-clockwise). x0(y) / x1(y): where the start / end
 * face is at height y (square ends: 0 and L; a mitre: its cut face at the web's middle).
 */
function webOutline(L, h, copes, x0 = () => 0, x1 = () => L) {
  const cs = (end, side) => copes.find((c) => c.end === end && c.side === side);
  const pts = [];
  const bs = cs('start', 'bottom'), be = cs('end', 'bottom'), te = cs('end', 'top'), ts = cs('start', 'top');
  if (bs) pts.push([0, bs.depth], [bs.length, bs.depth], [bs.length, 0]); else pts.push([x0(0), 0]);
  if (be) pts.push([L - be.length, 0], [L - be.length, be.depth], [L, be.depth]); else pts.push([x1(0), 0]);
  if (te) pts.push([L, h - te.depth], [L - te.length, h - te.depth], [L - te.length, h]); else pts.push([x1(h), h]);
  if (ts) pts.push([ts.length, h], [ts.length, h - ts.depth], [0, h - ts.depth]); else pts.push([x0(h), h]);
  return pts;
}
/** [x0, x1] of a flange (or wall) of thickness t after the copes on its side. */
function flangeSpan(L, copes, side, t) {
  const a = copes.find((c) => c.end === 'start' && c.side === side), b = copes.find((c) => c.end === 'end' && c.side === side);
  return [a && a.depth >= t ? a.length : 0, b && b.depth >= t ? L - b.length : L];
}

/**
 * NC1 text for a part. info: { order, mark, count, phase }.
 */
export function writeNc1(part, info) {
  const p = part.profile, L = part.length;
  const isPlate = p.kind === 'PL', k = p.kind;
  const lines = ['ST', '** DetailCraft ' + txt(info.mark) + '.nc1'];
  const field = (v) => lines.push('  ' + v);
  field(txt(info.order));
  field(txt(info.mark));
  field(txt(info.phase || '1'));
  field(txt(info.mark));
  field(txt(part.material));
  field(String(info.count || 1));
  field(txt(isPlate ? 'PL' + p.t + '*' + p.b : part.profileName));
  field(CODE[k]);
  const per = p.perimeter / 1000;
  const nums = isPlate ? [L, p.b, 0, 0, p.t, 0, p.t * STEEL_KG_PER_M3 / 1000, 2]
    : k === 'L' ? [L, p.b, p.h ?? p.b, p.t, p.t, 0, p.mass, per]
      : k === 'RHS' ? [L, p.h, p.b, p.t, p.t, p.ro, p.mass, per]
        : k === 'CHS' ? [L, p.D, p.D, p.t, p.t, 0, p.mass, per]
          : [L, p.d, p.bf, p.tf, p.tw, p.r, p.mass, per];
  for (const n of nums) lines.push(pad(f2(n)));
  // skew cuts (mitres): web on the front face (y = v + h/2: −atan(dx/dy)), flange on the bottom face (y = bf/2 − u: +atan(ku))
  const ec = k === 'I' && part.endCuts ? part.endCuts : null;
  const ang = (c, web) => (!c ? 0 : (web ? -1 : 1) * Math.atan(web ? c.kv : c.ku) * 180 / Math.PI);
  const skew = ec ? [ang(ec.start, true), ang(ec.end, true), ang(ec.start, false), ang(ec.end, false)] : [0, 0, 0, 0];
  for (const a of skew) lines.push(pad((Math.abs(a) < 0.000005 ? 0 : a).toFixed(5)));
  for (let i = 0; i < 4; i++) field('-');

  // outer contours
  const ak = (face, pts) => {
    lines.push('AK');
    const closed = [...pts, pts[0]];
    for (const [x, y] of closed) lines.push('  ' + face + pad(f2(x)) + pad(f2(y)) + pad('0.00'));
  };
  const copes = (part.cuts || []).filter((c) => c.kind === 'cope');
  const rect = (face, x0, x1, w) => ak(face, [[x0, 0], [x1, 0], [x1, w], [x0, w]]);
  if (isPlate) rect('v', 0, L, p.b);
  else if (k === 'L') { rect('v', 0, L, p.b); rect('u', 0, L, p.h ?? p.b); }
  else if (k === 'CHS') rect('v', 0, L, p.D);
  else if (k === 'C') {
    // Y = d/2 − v: the web outline mirrored top for bottom (reversed to stay counter-clockwise)
    ak('v', webOutline(L, p.d, copes).map(([x, y]) => [x, p.d - y]).reverse());
    for (const [face, side] of [['o', 'bottom'], ['u', 'top']]) { const [x0, x1] = flangeSpan(L, copes, side, p.tf); rect(face, x0, x1, p.bf); }
  } else {
    const h = k === 'RHS' ? p.h : p.d, tf = k === 'RHS' ? p.t : p.tf, w = k === 'RHS' ? p.b : p.bf;
    if (ec) {
      ak('v', webOutline(L, h, copes, (y) => endX(part, 'start', 0, y - h / 2), (y) => endX(part, 'end', 0, y - h / 2)));
      // each flange's outside face: y = w/2 − u from the behind edge (the copes' notches are square, as before)
      for (const [face, side, v] of [['o', 'top', h / 2], ['u', 'bottom', -h / 2]]) {
        const [x0, x1] = flangeSpan(L, copes, side, tf), sq0 = x0 > 0, sq1 = x1 < L;
        const at = (end, y) => endX(part, end, w / 2 - y, v);
        ak(face, [[sq0 ? x0 : at('start', 0), 0], [sq1 ? x1 : at('end', 0), 0], [sq1 ? x1 : at('end', w), w], [sq0 ? x0 : at('start', w), w]]);
      }
    } else {
      ak('v', webOutline(L, h, copes));
      if (k === 'RHS') ak('h', webOutline(L, h, copes));
      for (const [face, side] of [['o', 'top'], ['u', 'bottom']]) { const [x0, x1] = flangeSpan(L, copes, side, tf); rect(face, x0, x1, w); }
    }
  }

  // holes
  const holes = part.holes.flatMap((hh) => {
    if (isPlate) return [['v', hh.x, hh.y + p.b / 2, hh.d]];
    if (k === 'C') {
      if (hh.face === 'web') return [['v', hh.x, p.d / 2 - hh.y, hh.d]];
      return [[hh.face === 'top' ? 'u' : 'o', hh.x, hh.y + p.bf / 2, hh.d]];      // from the back of the web
    }
    if (k === 'RHS') {
      if (hh.face === 'web') return [['v', hh.x, hh.y + p.h / 2, hh.d], ['h', hh.x, hh.y + p.h / 2, hh.d]];
      return [[hh.face === 'top' ? 'o' : 'u', hh.x, p.b / 2 - hh.y, hh.d]];
    }
    if (k === 'L') return [hh.face === 'web' ? ['u', hh.x, hh.y + (p.h ?? p.b) / 2, hh.d] : ['v', hh.x, hh.y + p.b / 2, hh.d]];
    if (hh.face === 'web') return [['v', hh.x, hh.y + p.d / 2, hh.d]];
    return [[hh.face === 'top' ? 'o' : 'u', hh.x, p.bf / 2 - hh.y, hh.d]];          // from the behind (+u) edge
  });
  if (holes.length) {
    lines.push('BO');
    for (const [face, x, y, d] of holes) lines.push('  ' + face + pad(f2(x)) + pad(f2(y)) + pad(f2(d)) + pad(f2(0)));
  }
  lines.push('EN');
  return lines.join('\r\n') + '\r\n';
}

/** A strict reader for what writeNc1 writes (and the common subset others write): { header, blocks }. */
export function readNc1(text) {
  const lines = text.split(/\r?\n/).filter((l) => l.trim() !== '' && !l.startsWith('**'));
  if (lines[0] !== 'ST') throw new Error(t('nc.read.start'));
  const header = [];
  let i = 1;
  while (i < lines.length && !/^[A-Z]{2}$/.test(lines[i])) header.push(lines[i++].trim());
  if (header.length < 20) throw new Error(t('nc.read.fields', { n: header.length, min: 20 }));
  const h = {
    order: header[0], drawing: header[1], phase: header[2], piece: header[3], steel: header[4], quantity: Number(header[5]),
    profile: header[6], code: header[7], length: Number(header[8]), height: Number(header[9]), flangeWidth: Number(header[10]),
    flangeThickness: Number(header[11]), webThickness: Number(header[12]), radius: Number(header[13]), kgPerM: Number(header[14]), paintPerM: Number(header[15]),
  };
  const blocks = [];
  let cur = null;
  for (; i < lines.length; i++) {
    const l = lines[i];
    if (/^[A-Z]{2}$/.test(l)) { if (l === 'EN') { blocks.push({ type: 'EN', rows: [] }); cur = null; continue; } cur = { type: l, rows: [] }; blocks.push(cur); continue; }
    if (!cur) throw new Error(t('nc.read.outside', { line: l }));
    const m = l.match(/^\s+([vohu])\s+(.*)$/);
    if (!m) throw new Error(t('nc.read.bad-line', { block: cur.type, line: l }));
    const nums = m[2].trim().split(/\s+/).map((s) => Number(s.replace(/[a-z]$/, '')));
    if (nums.some((n) => !Number.isFinite(n))) throw new Error(t('nc.read.nan', { block: cur.type, line: l }));
    cur.rows.push({ face: m[1], nums });
  }
  if (!blocks.length || blocks[blocks.length - 1].type !== 'EN') throw new Error(t('nc.read.no-en'));
  return { header: h, blocks };
}
