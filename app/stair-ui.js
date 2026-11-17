/* SPDX-License-Identifier: Apache-2.0 */
/**
 * stair-ui.js: the steel stair generator's settings and results in the Stair tool and in a selected stair's properties (0.10 SU.1814c). steelstair/steelstair.js decides
 * (the engine is lib/steelstair, copied byte for byte); this file only draws its fields and what it made: the rule set with where each number came from, the flights and
 * landings, the weight, the cut list with a CSV.
 *
 *   genForm(app, x, set, placing)     → [nodes]  the fields for a generator stair record x; set(patch) stores a change
 *   genResults(app, x, probs)         → [nodes]  results, the rule's sources, the cut list (a selected stair only)
 *   app = { el, tr, mm, r1, field, numIn, selectIn, check, fillDl, getProfile, profiles(), materialOptions(), catalogGroups(), download(name, data, type), safeName() }
 */
import { RULES, TREAD_TYPES, build as genBuild, cutList, cutListCsv } from './steelstair/steelstair.js';

import { defaults as genDefaultsOf } from './steelstair/steelstair.js';
export const genDefaults = genDefaultsOf;

export function genForm(app, x, set, placing) {
  const { el, tr, field, numIn, selectIn, check } = app;
  const p = el('div', { className: 'dc-props' });
  const prof = app.profiles();
  const kinds = (ks) => app.catalogGroups(prof).map((g) => ({ group: g.label + ' — ' + g.source, items: g.names.filter((n) => ks.includes(app.getProfile(n, prof)?.kind)).map((n) => [n, n]) })).filter((g) => g.items.length);
  const sel = (opts, value, on) => selectIn(opts, value, on);
  p.append(
    ...field(tr('app.stair.gen.rule'), sel(Object.values(RULES).map((r) => [r.id, r.name]), x.rule, (v) => set({ rule: v, railTop: genDefaultsOf(v).railTop, balusterGap: genDefaultsOf(v).balusterGap }))),
    ...field(tr('app.stair.dir'), numIn(x.dir, (v) => set({ dir: v }))),
    ...field(tr(placing ? 'app.stair.rise.tool' : 'app.stair.rise'), numIn(x.rise, (v) => set({ rise: v }), { min: 0 })),
    ...field(tr('app.stair.gen.run'), numIn(x.run, (v) => set({ run: v }), { min: 0 })),
    ...field(tr('app.stair.width'), numIn(x.width, (v) => set({ width: v }), { min: 400 })),
    ...field(tr('app.stair.gen.tread-type'), sel(TREAD_TYPES.map((k) => [k, tr('app.stair.gen.tread.' + k)]), x.treadType, (v) => set({ treadType: v }))),
    ...field(tr('app.stair.tread-t'), numIn(x.tread.t, (v) => set({ tread: { t: v } }), { min: 2 })),
    ...(x.treadType === 'folded' ? field(tr('app.stair.gen.fold'), numIn(x.tread.fold, (v) => set({ tread: { fold: v } }), { min: 20 })) : []),
    ...(x.treadType === 'grating' ? [
      ...field(tr('app.stair.gen.bar-depth'), numIn(x.tread.barDepth, (v) => set({ tread: { barDepth: v } }), { min: 15 })),
      ...field(tr('app.stair.gen.bar-t'), numIn(x.tread.barT, (v) => set({ tread: { barT: v } }), { min: 2 })),
      ...field(tr('app.stair.gen.bar-pitch'), numIn(x.tread.barPitch, (v) => set({ tread: { barPitch: v } }), { min: 15 })),
    ] : []),
    ...field(tr('app.stair.nosing'), numIn(x.tread.nosing, (v) => set({ tread: { nosing: v } }), { min: 0 })),
    ...field(tr('app.stair.gen.fix'), sel(['auto', 'weld', 'bolt'].map((k) => [k, tr('app.stair.gen.fix.' + k)]), x.fix, (v) => set({ fix: v }))),
    ...(x.fix !== 'weld' ? field(tr('app.stair.gen.bolt'), numIn(x.tread.bolt, (v) => set({ tread: { bolt: v } }), { min: 6 })) : []),
    ...field(tr('app.stair.stringer'), sel(kinds(['C', 'PL']), x.stringer, (v) => set({ stringer: v }))),
    ...field(tr('app.stair.gen.landings'), sel([[-1, tr('app.stair.gen.landings.auto')], [0, '0'], [1, '1'], [2, '2'], [3, '3']].map(([v, l]) => [String(v), l]), String(x.landings), (v) => set({ landings: Number(v) }))),
    ...field(tr('app.stair.gen.landing-depth'), numIn(x.landingDepth, (v) => set({ landingDepth: v }), { min: 0 })),
    ...field(tr('app.stair.gen.rails'), sel(['both', 'left', 'right', 'none'].map((k) => [k, tr('app.stair.gen.rails.' + k)]), x.rails, (v) => set({ rails: v }))),
  );
  if (x.rails !== 'none') p.append(
    ...field(tr('app.stair.gen.rail-top'), numIn(x.railTop, (v) => set({ railTop: v }), { min: 500 })),
    ...field(tr('app.stair.gen.rail-section'), sel(kinds(['CHS', 'RHS']), x.railSection, (v) => set({ railSection: v }))),
    ...field(tr('app.stair.gen.post-spacing'), numIn(x.postSpacing, (v) => set({ postSpacing: v }), { min: 400 })),
    ...field(tr('app.stair.gen.infill'), sel(['balusters', 'none'].map((k) => [k, tr('app.stair.gen.infill.' + k)]), x.infill, (v) => set({ infill: v }))),
    ...(x.infill === 'balusters' ? field(tr('app.stair.gen.baluster-gap'), numIn(x.balusterGap, (v) => set({ balusterGap: v }), { min: 20 })) : []));
  p.append(...field(tr('app.f.material'), selectIn(app.materialOptions(), x.material, (v) => set({ material: v }))));
  const out = [p];
  const tick = el('label', { className: 'dc-tick' }, check(x.landingPosts, (v) => set({ landingPosts: v })), ' ' + tr('app.stair.gen.landing-posts'));
  out.push(tick);
  out.push(el('p', { className: 'dc-note' }, tr('app.stair.gen.note')));
  return out;
}

/** The results of the generator for stair record x (not while placing): the numbers, the rule's sources, the cut list. */
export function genResults(app, x, probs = []) {
  const { el, tr, mm, r1 } = app;
  const out = [];
  const g = genBuild(x, { profileOf: (n) => app.getProfile(n, app.profiles()) });
  const list = cutList(g, { profileOf: (n) => app.getProfile(n, app.profiles()) });
  out.push(el('h4', { className: 'dc-sub' }, tr('app.stair.gen.sec.results')));
  const dl = el('dl', { className: 'dc-props dc-block' });
  app.fillDl(dl, [[tr('app.stair.risers'), tr('app.stair.risers.v', { n: g.n, r: r1(g.riser) })], [tr('app.stair.going'), mm(g.going)],
    [tr('app.stair.treads'), tr('app.stair.treads.v', { n: g.stats.treadCount, run: mm(g.run) })], [tr('app.stair.gen.flights'), tr('app.stair.gen.flights.v', { f: g.flights.length, l: g.landings.length })],
    [tr('app.stair.pitch'), r1(g.pitch) + '°'], [tr('app.stair.blondel'), mm(g.blondel)], [tr('app.stair.gen.weight'), tr('app.stair.gen.weight.v', { kg: list.totalKg, n: list.count })]]);
  for (const n of dl.querySelectorAll('dt')) n.className = 'k';
  for (const n of dl.querySelectorAll('dd')) n.className = 'v';
  out.push(dl);
  if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((q) => el('li', { className: q.hard ? 'is-hard' : '' }, q.text))));
  out.push(el('p', { className: 'dc-note' }, tr('app.stair.gen.props-note')));
  const ru = RULES[g.rule];
  out.push(el('details', { className: 'dc-fold', dataset: { stairRule: '' } }, el('summary', {}, tr('app.stair.gen.sec.rule')),
    el('p', { className: 'dc-note' }, ru.name),
    el('ul', { className: 'dc-msgs' }, ...ru.cite.map((c) => el('li', { className: c.checked === 'unverified' ? 'is-hard' : '' }, c.ref + ': ' + c.says + ' (' + tr('app.stair.gen.checked.' + c.checked) + '). ' + c.note)))));
  const heads = tr('app.stair.gen.cutlist.col').split('|');
  out.push(el('details', { className: 'dc-fold', open: false, dataset: { stairCutlist: '' } }, el('summary', {}, tr('app.stair.gen.sec.cutlist')),
    el('div', { className: 'dc-scroll' }, el('table', { className: 'dc-table' }, el('thead', {}, el('tr', {}, ...heads.map((h) => el('th', {}, h)))),
      el('tbody', {}, ...list.rows.map((r) => el('tr', {}, el('td', {}, r.group), el('td', {}, r.role), el('td', {}, r.section), el('td', {}, String(r.length)), el('td', {}, String(r.qty)), el('td', {}, String(r.unitKg)), el('td', {}, String(r.totalKg))))))),
    el('p', { className: 'dc-note' }, tr('app.stair.gen.cutlist.total', { kg: list.totalKg })),
    el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { stairCsv: '' }, onclick: () => app.download((app.safeName() || 'stair') + '-' + x.id + '-cutlist.csv', cutListCsv(list), 'text/csv') }, tr('app.stair.gen.cutlist.csv'))));
  return out;
}
