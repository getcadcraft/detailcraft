/* SPDX-License-Identifier: Apache-2.0 */
/**
 * interfaces-detailcraft.js: DetailCraft's thin adapter for the LOD 350 interface rules (0.10 booklet row BK.20, session
 * bk-r3-checks-10). DOM-free: node tools/modelaudit/test-detailcraft.mjs. The rules are ./modelaudit/interfaces.js (lib/modelaudit,
 * the same file BimCraft runs); this only reads DetailCraft's model into the plain shapes they take.
 *
 * What DetailCraft has of those interfaces: walls with openings. Framed wall panels (framing.js: state.framing.panels, kind wall;
 * an opening { x, width, height, sill } and the panel's header over every opening) and reinforced concrete walls (rc/elements.js:
 * state.rc.elements, kind wall; an opening { at, sill, w, h } with trimmer bars round it). So here the rules say: an opening fits
 * inside its wall, two openings do not overlap, and a wide opening has its header (a framed panel with a header size) or its
 * trimmers (a concrete wall with a trim bar). DetailCraft draws no pipes, ducts or trays, so the penetration rule has nothing to
 * read here: it runs in BimCraft, where the services are.
 *
 *   dcInterfaceInput(state) → { walls, openings }
 *   dcInterfaces(state, { limits, t }) → { findings, problems, pairs }      problems: the shared shape, about kinds 'panel' and 'rc'
 */
import { openingRules, interfaceProblems, byPair } from './modelaudit/interfaces.js';

export function dcInterfaceInput(state) {
  const walls = [], openings = [];
  for (const p of state?.framing?.panels || []) {
    if (p.kind !== 'wall') continue;
    const id = 'panel:' + p.id, name = p.name || p.id;
    walls.push({ id, ref: 'panel', label: name, length: p.length, height: p.height, discipline: 'structure' });
    (p.openings || []).forEach((o, i) => openings.push({ id: id + ':o' + (i + 1), ref: 'panel', label: name + ' opening ' + (i + 1), kind: 'opening', host: id, hasVoid: true,   // i18n-ignore: an object label, as the panel list writes it
      offset: o.x, width: o.width, sill: o.sill || 0, height: o.height, lintel: p.headerSize ? { element: true } : null }));
  }
  for (const e of state?.rc?.elements || []) {
    if (e.kind !== 'wall' || !Array.isArray(e.a) || !Array.isArray(e.b)) continue;
    const id = e.id, name = e.name || e.mark || e.id;
    walls.push({ id, ref: 'rc', label: name, length: Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1]), height: e.z1 - e.z0, discipline: 'structure' });
    (e.open || []).forEach((o, i) => openings.push({ id: id + ':o' + (i + 1), ref: 'rc', label: name + ' opening ' + (i + 1), kind: 'opening', host: id, hasVoid: true,   // i18n-ignore: an object label
      offset: o.at, width: o.w, sill: o.sill || 0, height: o.h, lintel: e.trim?.bar ? { element: true } : null }));
  }
  return { walls, openings };
}

export function dcInterfaces(state, { limits = undefined, t = null } = {}) {
  const { walls, openings } = dcInterfaceInput(state);
  const findings = openingRules(walls, openings, limits);
  // an opening is not an object DetailCraft can pick: a finding points at its wall
  const problems = interfaceProblems(findings.map((f) => ({ ...f, about: f.about.filter((a) => !/:o\d+$/.test(String(a.id))).map((a) => ({ ...a, id: String(a.id).replace(/^panel:/, '') })) })), { t })
    .map((p, i) => ({ ...p, part: p.part + '.' + findings[i].about[0].id.replace(/^.*:o/, 'o') }));   // which opening: two findings on one wall stay two problems
  return { findings, problems, pairs: byPair(findings), checked: openings.length };
}
