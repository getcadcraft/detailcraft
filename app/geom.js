/* SPDX-License-Identifier: Apache-2.0 */
/**
 * geom.js — 3D vectors and member frames. No DOM. Millimeters, z up.
 *
 * A member runs from `start` to `end` along its local x. Its section lies in the (u, v) plane:
 *   non-vertical members: v = global Z made square to x (the profile's "up"), u = v × x;
 *   vertical members (columns): v = global X, u = v × x = −Y.
 * `rotation` (degrees) then turns (u, v) about +x (right hand). x × u = v, so (u, v, x) is a
 * right-handed frame: the profile's (X, Y) and the extrusion's Z in IFC terms.
 * `position` places the section on the line: 'middle' (center on the line), 'top' (top of steel on
 * the line: beams), 'bottom'. voff is the v shift of the section's center.
 */

export const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
export const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
export const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
export const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];
export const len = (a) => Math.hypot(a[0], a[1], a[2]);
export const norm = (a) => { const l = len(a); return l > 0 ? mul(a, 1 / l) : [0, 0, 0]; };
export const dist = (a, b) => len(sub(a, b));
export const lerp = (a, b, t) => add(a, mul(sub(b, a), t));
export const near = (a, b, tol = 0.5) => dist(a, b) <= tol;

/** Frame of a line from s to e with rotation (deg): { o, x, u, v, len }. */
export function frame(s, e, rotation = 0) {
  const d = sub(e, s), L = len(d);
  const x = L > 0 ? mul(d, 1 / L) : [1, 0, 0];
  let v;
  if (Math.abs(x[2]) > 0.999999) v = [1, 0, 0];
  else v = norm(sub([0, 0, 1], mul(x, x[2])));
  let u = cross(v, x);
  if (rotation) {
    const a = rotation * Math.PI / 180, c = Math.cos(a), sn = Math.sin(a);
    // rotate about +x: u' = c·u + s·v, v' = −s·u + c·v
    const u2 = add(mul(u, c), mul(v, sn)), v2 = add(mul(u, -sn), mul(v, c));
    u = u2; v = v2;
  }
  return { o: s, x, u, v, len: L };
}

/** v offset of the section center for a reference position. */
export function voffFor(position, depth) {
  return position === 'top' ? -depth / 2 : position === 'bottom' ? depth / 2 : 0;
}

/** World point of local (x along, u, v) in a frame with a v offset (section coordinates centered). */
export function toWorld(f, x, u, v, voff = 0) {
  return add(add(add(f.o, mul(f.x, x)), mul(f.u, u)), mul(f.v, v + voff));
}
/** Local {x, u, v} (section-centered) of a world point. */
export function toLocal(f, p, voff = 0) {
  const d = sub(p, f.o);
  return { x: dot(d, f.x), u: dot(d, f.u), v: dot(d, f.v) - voff };
}

/**
 * Where a part's end face is, along the part (x from its cut start), at section point (u, v) (v from the section's center):
 * a square end is at 0 / length; a plane cut (a mitre, 0.7.1 71.20) is `part.endCuts[end]` = { x0, ku, kv }, x = x0 + ku·u + kv·v.
 */
export function endX(part, end, u = 0, v = 0) {
  const c = part.endCuts && part.endCuts[end];
  if (!c) return end === 'start' ? 0 : part.length;
  return c.x0 + c.ku * u + c.kv * v;
}

/** Rounds to a tolerance grid (for signatures). */
export const q = (v, tol = 1) => Math.round(v / tol) * tol + 0;

/** The four outline corners of a section bbox in world space at station x (for plan/elevation sketches). */
export function sectionBoxAt(f, x, w, h, voff) {
  return [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]].map(([u, v]) => toWorld(f, x, u, v, voff));
}

/** Clips a section loop to v ≤ vmax (or v ≥ vmin with below = false). Sutherland–Hodgman on one line. */
export function clipLoopV(loop, limit, keepBelow = true) {
  const inside = (p) => keepBelow ? p[1] <= limit + 1e-9 : p[1] >= limit - 1e-9;
  const out = [];
  for (let i = 0; i < loop.length; i++) {
    const a = loop[i], b = loop[(i + 1) % loop.length];
    const ia = inside(a), ib = inside(b);
    if (ia) out.push(a);
    if (ia !== ib) {
      const t = (limit - a[1]) / (b[1] - a[1]);
      out.push([a[0] + (b[0] - a[0]) * t, limit]);
    }
  }
  return out.length >= 3 ? out : [];
}
