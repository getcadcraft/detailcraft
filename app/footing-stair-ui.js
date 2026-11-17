/* SPDX-License-Identifier: Apache-2.0 */
/**
 * footing-stair-ui.js: detailcraft.js's 7 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountFootingStair(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el, fillDl } from './ui-util.js';
import { t as tr } from './i18n.js';
import { barLabel, BARS, footingVolume, BAR_SOURCE_BS, BAR_SOURCE, BAR_SETS, hookLeg } from './rebar.js';
import { readNum } from './numtext.js';
import { getProfile, catalogGroups } from './profiles.js';
import { genForm, genResults } from './stair-ui.js';
import { stairGeometry } from './stair.js';

export function mountFootingStair(ctx) {
  const { opts, print, edit, deleteSelection, phaseField, renderProps, field, numIn, textIn, selectIn, materialOptions, addByGridForm, xfBlock, check, deepAssign, download, mm, r1 } = ctx;

  function footingProps(f) {
    const out = [el('div', { className: 'dc-props' }, ...phaseField([{ kind: 'footing', id: f.id }], f.phase || 1)), ...footingForm(f, (patch) => edit(tr('app.undo.footing'), (tx) => tx.updateFooting(f.id, patch)), false)];
    const ft = ctx.built.footings.find((x) => x.f.id === f.id);
    const list = ctx.schedule.byFooting.get(f.id) || [];
    const t = el('table', { className: 'dc-table' }, el('thead', {}, el('tr', {}, el('th', {}, tr('app.bars.mark')), el('th', {}, tr('app.bars.bars')), el('th', { className: 'n' }, tr('app.bars.no')), el('th', { className: 'n' }, tr('app.bars.length')))),
      el('tbody', {}, ...list.map(({ group, mark }) => el('tr', {}, el('td', {}, mark), el('td', {}, barLabel(group.bar, ctx.settings.barNames) + ' ' + group.role.toLowerCase()), el('td', { className: 'n' }, String(group.count)), el('td', { className: 'n' }, mm(group.length))))));
    out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.bars.title')), t,
      el('p', { className: 'dc-note' }, tr(BARS.get(f.mat.barX)?.set === 'bs' ? 'app.bars.note.bs' : 'app.bars.note', { m3: footingVolume(f).toFixed(2), source: BARS.get(f.mat.barX)?.set === 'bs' ? BAR_SOURCE_BS : BAR_SOURCE }))));
    if (ft?.problems.length) out.push(el('ul', { className: 'dc-msgs' }, ...ft.problems.map((x) => el('li', {}, x.text))));
    out.push(...xfBlock([{ kind: 'footing', id: f.id }]));
    out.push(el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete'))));
    return out;
  }
  /** 0.8 PANEL-COMPACT: the footing's fields in the shared property grid (assets/js/app-propgrid.js, manifest "propgrid"): categories,
   *  label / value columns, the same arithmetic in number rows (numtext.js through the grid's parse) and the same refusal words as numIn. */
  function footingGrid(f, set, placing, barO) {
    const opts = barO.flatMap((g) => g.items.map(([value, label]) => ({ value, label })));
    const P = tr('app.foot.cat.position'), Z = tr('app.foot.cat.size'), M = tr('app.foot.mat'), S = tr('app.foot.starters');
    const n = (id, category, label, value) => ({ id, category, label, type: 'number', value: Math.round(value * 1000) / 1000, parse: readNum });
    const rows = [];
    if (!placing) rows.push(n('x', P, tr('app.foot.cx'), f.x), n('y', P, tr('app.foot.cy'), f.y), n('top', P, tr('app.foot.top'), f.top), n('rotation', P, tr('app.f.rotation'), f.rotation));
    rows.push(n('L', Z, tr('app.foot.l'), f.L), n('B', Z, tr('app.foot.b'), f.B), n('H', Z, tr('app.foot.h'), f.H),
      { id: 'concrete', category: Z, label: tr('app.foot.concrete'), type: 'text', value: f.concrete ?? '', maxLength: 30 },
      { id: 'mat.barX', category: M, label: tr('app.foot.long'), type: 'select', value: f.mat.barX, options: opts }, n('mat.sX', M, tr('app.foot.spacing.x'), f.mat.sX),
      { id: 'mat.barY', category: M, label: tr('app.foot.short'), type: 'select', value: f.mat.barY, options: opts }, n('mat.sY', M, tr('app.foot.spacing.y'), f.mat.sY),
      n('mat.cover', M, tr('app.foot.cover'), f.mat.cover), { id: 'mat.hooks', category: M, label: tr('app.foot.hooks'), type: 'checkbox', value: !!f.mat.hooks },
      { id: 'starters.on', category: S, label: tr('app.foot.starters'), type: 'checkbox', value: !!f.starters.on });
    if (f.starters.on) {
      const s = f.starters;
      rows.push({ id: 'starters.bar', category: S, label: tr('app.foot.bar'), type: 'select', value: s.bar, options: opts }, n('starters.nx', S, tr('app.foot.nx'), s.nx), n('starters.ny', S, tr('app.foot.ny'), s.ny),
        n('starters.sx', S, tr('app.foot.sx'), s.sx), n('starters.sy', S, tr('app.foot.sy'), s.sy), n('starters.projection', S, tr('app.foot.projection'), s.projection),
        { id: 'starters.hook', category: S, label: tr('app.foot.hook'), type: 'checkbox', value: !!s.hook });
    }
    const host = el('div', { className: 'dc-grid' });
    ccPropGrid.create(host, {
      label: tr('app.props.footing', { mark: '' }).trim(), key: 'footing', rows,
      onChange: (id, v) => { const path = id.split('.'); const patch = {}; let at = patch; path.forEach((k, i) => { if (i === path.length - 1) at[k] = v; else at = at[k] = {}; }); set(patch); },
      onInvalid: (id, r, text) => { if (r && r.code) print(tr('calc.err.' + r.code, { pos: r.pos + 1, text: r.text })); else print(tr('app.num.bad')); },
    });
    return host;
  }
  function footingForm(f, set, placing) {
    const opt = (b) => [b, barLabel(b, ctx.settings.barNames) + ' (' + r1(BARS.get(b).db) + ' mm)'];
    const barO = [{ group: BAR_SOURCE, items: BAR_SETS.astm.map(opt) }, { group: BAR_SOURCE_BS, items: BAR_SETS.bs.map(opt) }];
    if (window.ccPropGrid) {   // 0.8: the shared grid where the shell has it (a build or edition without it keeps the form below)
      const g = [footingGrid(f, set, placing, barO)];
      if (placing) { g.push(el('p', { className: 'dc-note' }, tr('app.foot.hook-leg', { bar: barLabel(f.mat.barX, ctx.settings.barNames), leg: mm(hookLeg(BARS.get(f.mat.barX))) }))); g.push(addByGridForm()); }
      return g;
    }
    const p = el('div', { className: 'dc-props' });
    if (!placing) p.append(...field(tr('app.foot.cx'), numIn(f.x, (v) => set({ x: v }))), ...field(tr('app.foot.cy'), numIn(f.y, (v) => set({ y: v }))), ...field(tr('app.foot.top'), numIn(f.top, (v) => set({ top: v }))), ...field(tr('app.f.rotation'), numIn(f.rotation, (v) => set({ rotation: v }))));
    p.append(...field(tr('app.foot.l'), numIn(f.L, (v) => set({ L: v }), { min: 300 })), ...field(tr('app.foot.b'), numIn(f.B, (v) => set({ B: v }), { min: 300 })), ...field(tr('app.foot.h'), numIn(f.H, (v) => set({ H: v }), { min: 150 })),
      ...field(tr('app.foot.concrete'), textIn(f.concrete, (v) => set({ concrete: v }), { max: 30 })));
    const m = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.foot.mat')),
      ...field(tr('app.foot.long'), selectIn(barO, f.mat.barX, (v) => set({ mat: { barX: v } }))), ...field(tr('app.foot.spacing.x'), numIn(f.mat.sX, (v) => set({ mat: { sX: v } }), { min: 50 })),
      ...field(tr('app.foot.short'), selectIn(barO, f.mat.barY, (v) => set({ mat: { barY: v } }))), ...field(tr('app.foot.spacing.y'), numIn(f.mat.sY, (v) => set({ mat: { sY: v } }), { min: 50 })),
      ...field(tr('app.foot.cover'), numIn(f.mat.cover, (v) => set({ mat: { cover: v } }), { min: 20 })),
      ...field(tr('app.foot.hooks'), check(f.mat.hooks, (v) => set({ mat: { hooks: v } }))));
    const s = f.starters;
    const st = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.foot.starters')),
      ...field(tr('app.foot.starters'), check(s.on, (v) => set({ starters: { on: v } }))));
    if (s.on) st.append(...field(tr('app.foot.bar'), selectIn(barO, s.bar, (v) => set({ starters: { bar: v } }))),
      ...field(tr('app.foot.nx'), numIn(s.nx, (v) => set({ starters: { nx: v } }), { min: 1, step: 1 })), ...field(tr('app.foot.ny'), numIn(s.ny, (v) => set({ starters: { ny: v } }), { min: 1, step: 1 })),
      ...field(tr('app.foot.sx'), numIn(s.sx, (v) => set({ starters: { sx: v } }), { min: 50 })), ...field(tr('app.foot.sy'), numIn(s.sy, (v) => set({ starters: { sy: v } }), { min: 50 })),
      ...field(tr('app.foot.projection'), numIn(s.projection, (v) => set({ starters: { projection: v } }), { min: 0 })),
      ...field(tr('app.foot.hook'), check(s.hook, (v) => set({ starters: { hook: v } }))));
    const out = [p, m, st];
    if (placing) { out.push(el('p', { className: 'dc-note' }, tr('app.foot.hook-leg', { bar: barLabel(f.mat.barX, ctx.settings.barNames), leg: mm(hookLeg(BARS.get(f.mat.barX))) }))); out.push(addByGridForm()); }
    return out;
  }
  /** A stair's settings (D23): in the Stair tool's options (placing) or for a selected stair. */
  const stairUi = () => ({ el, tr, mm, r1, field, numIn, selectIn, check, fillDl, getProfile, profiles: () => ctx.model.state.profiles, materialOptions, catalogGroups, download: (n, d, ty) => download(n, d, ty), safeName: () => ctx.safeName() });
  function stairForm(x, set, placing) {
    if (placing) {   // 0.10 SU.1814c: the generator is a switch in the tool's options; a selected generator stair shows its own fields
      const tick = el('label', { className: 'dc-tick', dataset: { stairGen: '' } }, check(opts.useGen, (v) => { opts.useGen = v; renderProps(); }), ' ' + tr('app.stair.gen.tick'));
      if (opts.useGen) return [tick, ...genForm(stairUi(), opts.steelStair, (patch) => { deepAssign(opts.steelStair, patch); renderProps(); }, true)];
      const rest = stairFormLegacy(x, set, placing);
      return [tick, ...rest];
    }
    return x.gen ? genForm(stairUi(), x, set, false) : stairFormLegacy(x, set, placing);
  }
  function stairFormLegacy(x, set, placing) {
    const p = el('div', { className: 'dc-props' });
    if (!placing) p.append(...field(tr('app.foot.cx'), numIn(x.x, (v) => set({ x: v }))), ...field(tr('app.foot.cy'), numIn(x.y, (v) => set({ y: v }))), ...field(tr('app.stair.z'), numIn(x.z, (v) => set({ z: v }))));
    const strO = catalogGroups(ctx.model.state.profiles).map((g) => ({ group: g.label + ' — ' + g.source, items: g.names.filter((n) => ['C', 'PL'].includes(getProfile(n, ctx.model.state.profiles)?.kind)).map((n) => [n, n]) })).filter((g) => g.items.length);
    p.append(...field(tr('app.stair.dir'), numIn(x.dir, (v) => set({ dir: v }))),
      ...field(tr(placing ? 'app.stair.rise.tool' : 'app.stair.rise'), numIn(x.rise, (v) => set({ rise: v }), { min: 0 })),
      ...field(tr('app.stair.going'), numIn(x.going, (v) => set({ going: v }), { min: 150 })),
      ...field(tr('app.stair.width'), numIn(x.width, (v) => set({ width: v }), { min: 400 })),
      ...field(tr('app.stair.max-riser'), numIn(x.maxRiser, (v) => set({ maxRiser: v }), { min: 100 })),
      ...field(tr('app.stair.stringer'), selectIn(strO, x.stringer, (v) => set({ stringer: v }))),
      ...field(tr('app.stair.tread-t'), numIn(x.tread.t, (v) => set({ tread: { t: v } }), { min: 3 })),
      ...field(tr('app.stair.nosing'), numIn(x.tread.nosing, (v) => set({ tread: { nosing: v } }), { min: 0 })),
      ...field(tr('app.f.material'), selectIn(materialOptions(), x.material, (v) => set({ material: v }))));
    const out = [p];
    if (placing) out.push(el('p', { className: 'dc-note' }, tr('app.stair.note')));
    return out;
  }
  function stairProps(x) {
    const out = [el('div', { className: 'dc-props' }, ...phaseField([{ kind: 'stair', id: x.id }], x.phase || 1)), ...stairForm(x, (patch) => edit(tr('app.undo.stair'), (tx) => tx.updateStair(x.id, patch)), false)];
    const probs = ctx.built.problems.filter((q) => q.ref === x.id);
    if (x.gen) out.push(...genResults(stairUi(), x, probs));
    else {
      const g = stairGeometry(x, (nm) => getProfile(nm, ctx.model.state.profiles));
      const dl = el('dl', { className: 'dc-props dc-block' });
      fillDl(dl, [[tr('app.stair.risers'), tr('app.stair.risers.v', { n: g.n, r: r1(g.riser) })], [tr('app.stair.treads'), tr('app.stair.treads.v', { n: g.treads, run: mm(g.run) })],
        [tr('app.stair.pitch'), r1(g.pitch) + '°'], [tr('app.stair.blondel'), mm(g.blondel)]]);
      for (const n of dl.querySelectorAll('dt')) n.className = 'k';
      for (const n of dl.querySelectorAll('dd')) n.className = 'v';
      out.push(dl);
      if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((q) => el('li', { className: q.hard ? 'is-hard' : '' }, q.text))));
      out.push(el('p', { className: 'dc-note' }, tr('app.stair.props-note')));
    }
    out.push(...xfBlock([{ kind: 'stair', id: x.id }]));
    const acts = el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    return out;
  }

  return { footingProps, footingForm, stairForm, stairProps };
}
