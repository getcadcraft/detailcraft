/* SPDX-License-Identifier: Apache-2.0 */
/**
 * tool-options-ui.js: detailcraft.js's 7 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountToolOptions(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { catalogGroups, getProfile, plateName, describe } from './profiles.js';
import { MATERIALS, pointAt, nodeName } from './model.js';
import { t as tr } from './i18n.js';
import { el } from './ui-util.js';

export function mountToolOptions(ctx) {
  const { ST, opts, print, act, placeAt, placeLine, deleteSelection, pasteClipAt, phaseField, renderProps, field, numIn, selectIn, deepAssign } = ctx;

  const profileOptions = () => catalogGroups(ST.model.state.profiles).map((g) => ({ group: g.label + ' — ' + g.source, items: g.names.map((n) => [n, n]) }));
  const materialOptions = () => MATERIALS.map((m) => [m, m]);
  const positionOptions = [['top', tr('app.pos.top')], ['middle', tr('app.pos.middle')], ['bottom', tr('app.pos.bottom')]];

  function toolOptions() {
    const out = [];
    if (ST.tool === 'footing') return ctx.footingForm(opts.footing, (patch) => { deepAssign(opts.footing, patch); renderProps(); }, true);
    if (ST.tool === 'stair') return ctx.stairForm(opts.stair, (patch) => { deepAssign(opts.stair, patch); renderProps(); }, true);
    const o = opts[ST.tool];
    const p = el('div', { className: 'dc-props' });
    if (ST.tool === 'plate') {
      p.append(...field(tr('app.f.thickness'), numIn(o.t, (v) => { o.t = v; renderProps(); }, { min: 1 })), ...field(tr('app.f.width'), numIn(o.w, (v) => { o.w = v; renderProps(); }, { min: 1 })));
    } else p.append(...field(tr('app.f.profile'), selectIn(profileOptions(), o.profile, (v) => { o.profile = v; renderProps(); })));
    p.append(...field(tr('app.f.material'), selectIn(materialOptions(), o.material, (v) => { o.material = v; })));
    if (ST.tool !== 'plate') p.append(...field(tr('app.f.position'), selectIn(positionOptions, o.position, (v) => { o.position = v; })));
    p.append(...field(tr('app.f.rotation'), numIn(o.rotation, (v) => { o.rotation = v; })));
    if (ST.tool === 'column') {
      const lv = ST.model.state.levels.map((l) => [l.name, l.name]);
      p.append(...field(tr('app.f.up-to'), selectIn([['', tr('app.f.up-to.next')], ...lv], o.to, (v) => { o.to = v; })));
    }
    out.push(p);
    const prof = ST.tool === 'plate' ? getProfile(plateName(o.t, o.w)) : getProfile(o.profile, ST.model.state.profiles);
    if (prof) {
      const dl = el('dl', { className: 'dc-props' });
      for (const [k, v] of describe(prof)) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
      out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.f.profile')), dl));
    }
    out.push(addByGridForm());
    return out;
  }

  /** Placing by keyboard: pick grid lines and levels from lists. */
  function addByGridForm() {
    const s = ST.model.state;
    const gyO = s.grids.y.map((g) => [g.label, g.label]), gxO = s.grids.x.map((g) => [g.label, g.label]), lvO = s.levels.map((l) => [l.name, l.name]);
    if (!gyO.length || !gxO.length) return el('p', { className: 'dc-note' }, tr('app.grid.add.none'));
    const two = ['beam', 'brace', 'plate'].includes(ST.tool);
    const sels = {};
    const mk = (key, options, value, label) => { const s2 = selectIn(options, value, () => {}); sels[key] = s2; return field(label, s2); };
    const top = s.levels[s.levels.length - 1]?.name;
    const form = el('form', { className: 'dc-props dc-block', dataset: { byGrid: '' } },
      el('p', { className: 'dc-sub' }, tr('app.grid.add.title')),
      ...mk('gy1', gyO, gyO[0][0], tr(two ? 'app.grid.from.letter' : 'app.grid.letter')),
      ...mk('gx1', gxO, gxO[0][0], tr(two ? 'app.grid.from.number' : 'app.grid.number')),
      ...mk('l1', lvO, ST.tool === 'beam' || ST.tool === 'plate' ? top : lvO[0][0], tr(two ? 'app.grid.from.level' : 'app.grid.level')),
      ...(two ? [...mk('gy2', gyO, gyO[0][0], tr('app.grid.to.letter')), ...mk('gx2', gxO, gxO[Math.min(1, gxO.length - 1)][0], tr('app.grid.to.number')), ...mk('l2', lvO, ST.tool === 'brace' ? top : (ST.tool === 'beam' || ST.tool === 'plate' ? top : lvO[0][0]), tr('app.grid.to.level'))] : []),
      el('div', { className: ctx.ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.grid.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const a = pointAt(s, sels.gy1.value, sels.gx1.value, sels.l1.value);
      const n = { p: a, gy: sels.gy1.value, gx: sels.gx1.value, level: sels.l1.value };
      if (!two) { placeAt(n); return; }
      const b = pointAt(s, sels.gy2.value, sels.gx2.value, sels.l2.value);
      if (a.join() === b.join()) { print(tr('app.grid.same')); return; }
      ST.pending = null;
      placeLine(a, b);
    });
    return form;
  }

  /** Paste tool: what is on the clipboard, then pasting by typed offset or onto a grid intersection (keyboard). */
  function pasteOptions() {
    const c = ST.pasteClip;
    if (!c) return [];
    const s = ST.model.state;
    const dl = el('dl', { className: 'dc-props' });
    const rows = [[tr('app.paste.k.from'), c.from], [tr('app.k.members'), c.members.length || ''], [tr('app.k.connections'), c.connections.length || ''], [tr('app.k.footings'), c.footings.length || ''], [tr('app.paste.k.base'), tr('app.unit.mm', { v: c.base.map(ctx.mm).join(', ') })]];
    for (const [k, v] of rows) if (v !== '' && v !== undefined) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, String(v)));
    const out = [dl, el('p', { className: 'dc-note' }, tr('app.paste.note'))];
    const off = ST.settings.offset.slice();
    const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => { const i = numIn(off[k], (v) => { off[k] = v; }, { id: 'dc-poff' + k }); i.setAttribute('aria-label', tr('app.paste.offset.axis', { axis: 'xyz'[k] })); return i; }));
    const form = el('form', { className: 'dc-props dc-block', dataset: { pasteOffset: '' } },
      el('p', { className: 'dc-sub' }, tr('app.paste.offset.title')), el('span', { className: 'k' }, tr('app.paste.offset.axes')), row,
      el('div', { className: ctx.ROW_START },
        el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.paste.offset.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => pasteClipAt(c, [0, 0, 0], 'in-place') }, tr('app.paste.in-place'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      pasteClipAt(c, off, 'offset', { x: String(off[0]), y: String(off[1]), z: String(off[2]) });
    });
    out.push(form);
    const gyO = s.grids.y.map((g) => [g.label, g.label]), gxO = s.grids.x.map((g) => [g.label, g.label]), lvO = s.levels.map((l) => [l.name, l.name]);
    if (gyO.length && gxO.length) {
      const sels = {};
      const mk = (key, options, label) => { const s2 = selectIn(options, options[0][0], () => {}); sels[key] = s2; return field(label, s2); };
      const g = el('form', { className: 'dc-props dc-block', dataset: { pasteGrid: '' } },
        el('p', { className: 'dc-sub' }, tr('app.paste.grid.title')),
        ...mk('gy', gyO, tr('app.grid.letter')), ...mk('gx', gxO, tr('app.grid.number')), ...mk('lv', lvO, tr('app.grid.level')),
        el('div', { className: ctx.ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.paste.grid.go'))));
      g.addEventListener('submit', (e) => {
        e.preventDefault();
        const p = pointAt(s, sels.gy.value, sels.gx.value, sels.lv.value);
        if (!p) { print(tr('app.paste.grid.none')); return; }
        pasteClipAt(c, [p[0] - c.base[0], p[1] - c.base[1], p[2] - c.base[2]], 'at', { node: nodeName(s, p) });
      });
      out.push(g);
    }
    return out;
  }

  /** Several things selected: what they are, their weight, and what can be done to all of them. */
  function multiProps() {
    const of = (k) => ST.multi.filter((r) => r.kind === k).map((r) => r.id);
    const mem = of('member').map((id) => ST.model.member(id)).filter(Boolean), conns = of('conn'), foots = of('footing');
    const types = {};
    for (const m of mem) types[m.type] = (types[m.type] || 0) + 1;
    const typeText = Object.entries(types).map(([t, n]) => tr('app.count.type.' + t, { n })).join(tr('app.count.sep'));
    const steel = [...mem.map((m) => ST.built.byId.get(m.id)), ...conns.map((id) => ST.built.byId.get(id + '.plate'))].reduce((t, p) => t + (p ? p.weight : 0), 0);
    const dl = el('dl', { className: 'dc-props' });
    const rows = [[tr('app.k.members'), mem.length ? mem.length + ' (' + typeText + ')' : ''], [tr('app.k.connections'), conns.length || ''], [tr('app.k.footings'), foots.length || ''], [tr('pic.k.pictures'), of('picture').length || ''], [tr('app.k.steel'), steel ? tr('app.multi.steel', { kg: ctx.kg(steel) }) : '']];
    for (const [k, v] of rows) if (v !== '') dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, String(v)));
    const copyable = mem.length + foots.length > 0;
    const acts = el('div', { className: 'dc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => act('copy'), disabled: !copyable }, tr('app.btn.copy')),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => act('duplicate'), disabled: !copyable }, tr('app.btn.duplicate')),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    const phs = new Set([...mem.map((m) => m.phase || 1), ...foots.map((id) => ST.model.footing(id)?.phase || 1)]);
    const phaseRow = mem.length + foots.length ? [el('div', { className: 'dc-props dc-block' }, ...phaseField(ST.multi, phs.size === 1 ? [...phs][0] : null))] : [];
    return [dl, ...phaseRow, ...ctx.manyEditor(mem.map((m) => m.id)), ...ctx.xfBlock(ST.multi), acts, el('p', { className: 'dc-note' }, tr('app.multi.note'))];
  }

  return { profileOptions, materialOptions, positionOptions, toolOptions, addByGridForm, pasteOptions, multiProps };
}
