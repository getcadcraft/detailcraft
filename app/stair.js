/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stair.js — a straight steel stair from its rise, going and width (0.4 D23). No DOM. Millimeters, z up.
 *
 * A stair is stored like a footing (state.stairs, model.js) and made into parts by build.js, like a connection: nothing
 * derived is stored.
 *   stair = { id, x, y, z (the foot of the first riser, on the stair's center line), dir (plan angle of the climb, deg,
 *             0 = +x), rise (floor to floor), going (tread going), width (clear width between the stringers), maxRiser,
 *             stringer (a channel, toes in, or a flat bar such as PL12x250, on edge), tread { t (plate), nosing }, material, phase }
 *   stairGeometry(stair) → { n (risers), riser, treads, going, run, pitch (deg), blondel (2·riser + going), parts, welds,
 *                            problems }
 *     parts: two stringers (type 'stringer', the channel's toes facing in, top edge 50 mm above the nosing line) and one
 *     tread plate per step (type 'plate', role 'Tread', top at k · riser, nosing in front of the riser line), each with
 *     { key, type, role, profileName, material, start, end, rotation, position, attachTo } — the left stringer is the main
 *     part; the right stringer and the treads are welded to it in the shop (attachTo), so the stair is one assembly.
 *     welds: each tread to each stringer (fillet, both sides of the tread's ends).
 *     problems: checks against IBC 2021 1011.5.2 (riser 4–7 in = 102–178 mm, tread depth ≥ 11 in = 279 mm) and the
 *     comfort rule 2·riser + going = 600–650 mm (Blondel); a stringer too shallow for the nosing offset. Starting values,
 *     not design: the stringers are not checked for strength.
 *   cleanStair(obj) → { ok, stair } | { ok: false, error } — the checks a stored or pasted stair goes through.
 * The stringers run square-ended between where their axis meets the floor and the upper floor; their end cuts against the
 * floors and the landing are not modeled (said in the help).
 */

import { t } from './i18n.js';
import { clean as genClean, build as genBuild } from './steelstair/steelstair.js';   // 0.10 SU.1814c: the steel stair generator (lib/steelstair)

export const STAIR_DEFAULTS = Object.freeze({ dir: 0, rise: 3000, going: 280, width: 1000, maxRiser: 178, stringer: 'C10x15.3', tread: { t: 6, nosing: 25 }, material: 'A36' });
const R = Math.PI / 180;
const num = (v, lo, hi) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : null; };

export function cleanStair(s) {
  if (!s || typeof s !== 'object') return { ok: false, error: 'stair' };
  if (s.gen) { const g = genClean(s); return g ? { ok: true, stair: g } : { ok: false, error: 'stair' }; }   // a generator stair (gen: 1) is checked by the generator
  const d = STAIR_DEFAULTS;
  const out = {
    x: num(s.x ?? 0, -1e7, 1e7), y: num(s.y ?? 0, -1e7, 1e7), z: num(s.z ?? 0, -1e7, 1e7), dir: num(s.dir ?? d.dir, -3600, 3600),
    rise: num(s.rise ?? d.rise, 300, 10000), going: num(s.going ?? d.going, 150, 600), width: num(s.width ?? d.width, 400, 5000),
    maxRiser: num(s.maxRiser ?? d.maxRiser, 100, 300),
    stringer: String(s.stringer ?? d.stringer).trim().slice(0, 40),
    tread: { t: num(s.tread?.t ?? d.tread.t, 3, 50), nosing: num(s.tread?.nosing ?? d.tread.nosing, 0, 100) },
    material: String(s.material ?? d.material).replace(/[\u0000-\u001f]/g, '').trim().slice(0, 30) || d.material,
  };
  const bad = Object.entries(out).find(([, v]) => v === null) || Object.entries(out.tread).find(([, v]) => v === null);
  if (bad) return { ok: false, error: bad[0] };
  if (!out.stringer) return { ok: false, error: 'stringer' };
  out.dir = ((out.dir % 360) + 360) % 360;
  return { ok: true, stair: out };
}

/**
 * profileOf(name) → the stringer's profile (profiles.js getProfile, passed in so this module needs no catalog).
 */
export function stairGeometry(s, profileOf) {
  if (s.gen) {   // 0.10 SU.1814c: flights, landings, treads, rails and balusters from lib/steelstair; the same shape of answer
    const g = genBuild(s, { profileOf });
    return { n: g.n, riser: g.riser, treads: g.stats.treadCount, going: g.going, run: g.run, pitch: g.pitch, blondel: g.blondel, parts: g.parts, welds: g.welds, gen: g,
      problems: g.problems.map((p) => ({ code: p.code, text: 'stair.gen.prob.' + p.code, fills: p.fills })) };
  }
  const problems = [];
  const n = Math.max(2, Math.ceil(s.rise / s.maxRiser - 1e-9));
  const r = s.rise / n, g = s.going, treads = n - 1, run = treads * g;
  const pitch = Math.atan2(r, g) / R;
  const c = Math.cos(s.dir * R), sn = Math.sin(s.dir * R);
  const fwd = [c, sn, 0], side = [-sn, c, 0];                         // climb direction, left (seen climbing)
  const P = (along, across, up) => [s.x + fwd[0] * along + side[0] * across, s.y + fwd[1] * along + side[1] * across, s.z + up];
  const prof = profileOf(s.stringer);
  if (!prof) problems.push({ code: 'stringer', text: 'stair.prob.stringer', fills: { name: s.stringer } });
  // a flat-bar stringer stands on edge (its width up, turned 90°); a channel's toes face in
  const isPL = prof?.kind === 'PL';
  const sw = prof ? (isPL ? prof.t : prof.width) : 100, sd = prof ? (isPL ? prof.b : prof.depth) : 250;
  // nosing line: through (along −g, up 0) … (along (n−1)·g − g, up n·r): z = r·(along + g) / g; the stringer's axis lies
  // (sd/2 − 50) below it, measured square to the slope, so its top edge is 50 mm above the nosings
  const k = r / g, cosA = Math.cos(Math.atan(k)), drop = (sd / 2 - 50) / cosA;
  if (sd / 2 - 50 < s.tread.t + 10) problems.push({ code: 'shallow', text: 'stair.prob.shallow', fills: { name: s.stringer } });
  const axisZ = (along) => k * (along + g) - drop;
  const a0 = drop / k - g, a1 = (s.rise + drop) / k - g;           // where the axis meets the lower and the upper floor
  const half = s.width / 2 + sw / 2;
  const parts = [];
  for (const [key, sideSign, role] of [['L', 1, t('stair.role.left')], ['R', -1, t('stair.role.right')]]) {
    // a channel's web is on its −u side (profiles.js): turn it so the toes point into the stair
    parts.push({ key: 'stringer' + key, type: 'stringer', role, profileName: s.stringer, material: s.material,
      start: P(a0, sideSign * half, axisZ(a0)), end: P(a1, sideSign * half, axisZ(a1)), rotation: prof && prof.kind === 'C' ? (sideSign > 0 ? 180 : 0) : isPL ? 90 : 0,
      position: 'middle', attachTo: key === 'L' ? null : 'stringerL' });
  }
  const depth = g + s.tread.nosing;
  for (let i = 1; i <= treads; i++) {
    // tread i: front (nosing) edge at along (i − 1)·g − nosing, back edge at i·g; top at i·r
    const mid = (i - 1) * g - s.tread.nosing + depth / 2;
    parts.push({ key: 'tread' + i, type: 'plate', role: t('stair.role.tread'), profileName: 'PL' + s.tread.t + 'x' + Math.round(depth * 10) / 10, material: s.material,
      start: P(mid, s.width / 2, i * r - s.tread.t / 2), end: P(mid, -s.width / 2, i * r - s.tread.t / 2), rotation: 0, position: 'middle', attachTo: 'stringerL' });
  }
  const welds = [];
  for (let i = 1; i <= treads; i++) for (const sg of ['stringerL', 'stringerR']) welds.push({ between: [sg, 'tread' + i], size: Math.min(6, s.tread.t), length: 2 * depth, where: t('stair.weld.where') });
  // checks (starting values, not design)
  if (r > 178 + 1e-6 || r < 102 - 1e-6) problems.push({ code: 'riser', text: 'stair.prob.riser', fills: { r: Math.round(r * 10) / 10 } });
  if (g + 1e-6 < 279) problems.push({ code: 'going', text: 'stair.prob.going', fills: { g } });
  const bl = 2 * r + g;
  if (bl < 600 || bl > 650) problems.push({ code: 'blondel', text: 'stair.prob.blondel', fills: { v: Math.round(bl) } });
  return { n, riser: r, treads, going: g, run, pitch, blondel: bl, parts, welds, problems };
}
