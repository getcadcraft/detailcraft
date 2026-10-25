/* SPDX-License-Identifier: Apache-2.0 */
/**
 * usd-detailcraft.js — the steel model as OpenUSD (0.7 XF.8, session `usd`; docs/USD-CONVENTIONS.md § 10). DOM-free.
 * The library is cc-usd (./usd/, a copy of lib/usd written by tools/usd/sync.mjs).
 *
 *   steelUsd(built, marks, { format = 'usda' | 'usdc' | 'usdz', name }) → { data, report: { parts, assemblies, notes } }
 *     built = build.js build(state); marks = marks.js markParts(built)
 *
 * One Xform per assembly (kind component; its assembly mark, else the main part's name) holding its parts (kind
 * subcomponent): the main member and every part attached to it (plates of connections, stair parts). Each part is its
 * section extruded along its frame, copes cut as the 3D view cuts them (the section clipped where a cope runs), caps
 * triangulated (hollow sections keep their hole), in metres, Z up. On each part: `ifc:class`, `cadcraft:mark`,
 * `cadcraft:profile`, `cadcraft:grade`, `cadcraft:length` (m) and `cadcraft:weight` (kg, gross). Not in the meshes: bolt
 * holes, bolts, welds and footings (they are in the IFC, NC and BOM outputs) — the report says so.
 */
import { UsdBuilder, V } from './usd/index.js';
import { earcut } from './usd/earcut.js';
import { toWorld, clipLoopV } from './geom.js';

const M = (p) => [p[0] / 1000, p[1] / 1000, p[2] / 1000];

export function steelUsd(built, marks, { format = 'usda', name = 'model' } = {}) {
  const b = new UsdBuilder({ app: 'DetailCraft', source: name, doc: name });
  const report = { parts: 0, assemblies: 0, notes: [] };
  const steel = b.material('Steel', { base_color: [0.56, 0.57, 0.58], base_metalness: 1, specular_roughness: 0.45 });
  const mainOf = (p) => (marks && marks.asmOf && marks.asmOf.get(p.id)) || p.attachTo || p.id;
  const groups = new Map();
  for (const p of built.parts) { const m = mainOf(p); if (!groups.has(m)) groups.set(m, []); groups.get(m).push(p); }
  const unit = (u) => ({ customData: V('dictionary', new Map([['unit', V('string', u)]])) });
  for (const [mainId, parts] of groups) {
    const main = built.byId.get(mainId) || parts[0];
    const amark = marks && marks.asmMark ? marks.asmMark.get(mainId) : null;
    const nm = amark || main.name || main.role || mainId;
    const ap = b.group(b.root, nm, { kind: 'component', displayName: nm });
    if (amark) b.attr(ap, 'cadcraft:assemblyMark', 'string', amark, { custom: true, uniform: true });
    report.assemblies++;
    for (const p of parts) {
      const mark = marks && marks.partMark ? marks.partMark.get(p.id) : null;
      const pn = mark || p.name || p.role || p.id;
      const pp = b.group(ap, pn, { kind: 'subcomponent', displayName: pn });
      b.attr(pp, 'ifc:class', 'token', p.ifc || 'IfcMember', { custom: true, uniform: true });
      if (mark) b.attr(pp, 'cadcraft:mark', 'string', mark, { custom: true, uniform: true });
      b.attr(pp, 'cadcraft:profile', 'string', p.profileName, { custom: true, uniform: true });
      if (p.material) b.attr(pp, 'cadcraft:grade', 'string', p.material, { custom: true, uniform: true });
      b.attr(pp, 'cadcraft:length', 'double', p.length / 1000, { custom: true, uniform: true, meta: unit('m') });
      if (Number.isFinite(p.weight)) b.attr(pp, 'cadcraft:weight', 'double', p.weight, { custom: true, uniform: true, meta: unit('kg') });
      const geo = partMesh(p);
      if (geo) b.mesh(pp, 'Body', geo, { material: steel });
      report.parts++;
    }
  }
  if (built.bolts && built.bolts.length) report.notes.push('bolts');
  if (built.footings && built.footings.length) report.notes.push('footings');
  const data = format === 'usdz' ? b.usdz() : b.write(format);
  return { data, report };
}

/** A part's solid: its section loops extruded from x = 0 to its length, split where copes start, in metres. */
function partMesh(p) {
  const pr = p.profile, L = p.length, f = p.frame, voff = p.voff || 0;
  if (!pr || !pr.loops || !pr.loops.length || !(L > 0)) return null;
  const copes = (p.cuts || []).filter((c) => c.type === undefined || c.type === 'cope' || c.length);
  const xs = [...new Set([0, L, ...copes.map((c) => (c.end === 'start' ? Math.min(c.length, L) : Math.max(L - c.length, 0)))])].sort((a, c) => a - c);
  const P = [], C = [], I = [];
  const vert = (x, u, v) => { P.push(...M(toWorld(f, x, u, v, voff))); return P.length / 3 - 1; };
  for (let s = 1; s < xs.length; s++) {
    const a = xs[s - 1], z = xs[s];
    if (z - a < 0.01) continue;
    const mid = (a + z) / 2;
    let loops = pr.loops;
    for (const c of copes) {
      const inCope = c.end === 'start' ? mid < c.length : mid > L - c.length;
      if (!inCope) continue;
      if (c.side === 'top') loops = loops.map((l, k) => (k === 0 ? clipLoopV(l, pr.depth / 2 - c.depth, true) : null)).filter((l) => l && l.length);
      else loops = loops.map((l, k) => (k === 0 ? clipLoopV(l, -pr.depth / 2 + c.depth, false) : null)).filter((l) => l && l.length);
    }
    if (!loops.length || loops[0].length < 3) continue;
    // outer loop counter-clockwise in (u, v), holes clockwise: then (u, v, x) right-handed puts every side face outward
    const area = (l) => { let s2 = 0; for (let i = 0; i < l.length; i++) { const [u1, v1] = l[i], [u2, v2] = l[(i + 1) % l.length]; s2 += u1 * v2 - u2 * v1; } return s2 / 2; };
    const ordered = loops.map((l, k) => ((k === 0) === (area(l) > 0) ? l : l.slice().reverse()));
    for (const l of ordered) {
      for (let i = 0; i < l.length; i++) {
        const [u1, v1] = l[i], [u2, v2] = l[(i + 1) % l.length];
        const q = [vert(a, u1, v1), vert(a, u2, v2), vert(z, u2, v2), vert(z, u1, v1)];
        C.push(4); I.push(...q);
      }
    }
    // caps: one triangulation, used at both ends (the near end turned round)
    const flat = [], holes = [];
    for (const [k, l] of ordered.entries()) { if (k) holes.push(flat.length / 2); for (const [u, v] of l) flat.push(u, v); }
    const tris = earcut(flat, holes);
    const n = flat.length / 2;
    const at = (x) => { const base = P.length / 3; for (let i = 0; i < n; i++) vert(x, flat[i * 2], flat[i * 2 + 1]); return base; };
    const b0 = at(a), b1 = at(z);
    for (let t = 0; t < tris.length; t += 3) {
      // counter-clockwise in (u, v) faces +x (the far end); the near end gets the other turn
      let [i0, i1, i2] = [tris[t], tris[t + 1], tris[t + 2]];
      const cr = (flat[i1 * 2] - flat[i0 * 2]) * (flat[i2 * 2 + 1] - flat[i0 * 2 + 1]) - (flat[i1 * 2 + 1] - flat[i0 * 2 + 1]) * (flat[i2 * 2] - flat[i0 * 2]);
      if (cr < 0) [i1, i2] = [i2, i1];
      C.push(3, 3);
      I.push(b0 + i0, b0 + i2, b0 + i1);
      I.push(b1 + i0, b1 + i1, b1 + i2);
    }
  }
  if (!C.length) return null;
  return { points: Float32Array.from(P), counts: C, indices: I };
}
