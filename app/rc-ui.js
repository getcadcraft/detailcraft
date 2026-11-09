/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rc-ui.js — DetailCraft's Concrete tab, the concrete element's properties and the reinforcement shop drawings window (0.9 RC.1, session
 * rc-09). rc-detail.js + cc-rc (./rc/) do the work; this only asks and shows. An aid for an engineer to check, said on the tab.
 *
 *   mountRc(app) → { panel() → [nodes], props(el) → [nodes], openSheets(id | null), sheets(id | null) → [sheet], refresh() }
 *   app = { getModel, rb() (rcBuild of the model now), edit(label, fn) → result | undefined, print(text), select(ref), rerender(), barLabel(name),
 *           paper() → key, numIn, textIn, selectIn, field, download(name, data, type), safeName(), root, drawList(canvas, list), toPdf,
 *           remember() (focus to come back to), restoreFocus(), shapeCode(shape), scheduleDims(shape, dims), schedule() → merged schedule }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { BARS, BAR_SETS, BAR_SOURCE, BAR_SOURCE_BS } from './rebar.js';
import { DEFAULTS, checkText, barOf } from './rc-detail.js';
import { elementSheet, bendingSheets } from './rc/sheets.js';
import { textWidth } from './pdf.js';
import { paperOf } from './paper.js';
import { modelRef } from './drawings.js';

const mm = (v) => String(Math.round(v));
const kgs = (v) => (Math.round(v * 10) / 10).toFixed(1);

export function mountRc(app) {
  const model = () => app.getModel();
  const S = () => model().state;
  // what the add form remembers in this window (not saved)
  const add = { kind: 'beam', x1: '', y1: '', x2: '', y2: '', lv: '', lv2: '', w: 0, h: 0, t: 0 };
  const barOptions = () => [
    ...BAR_SETS.astm.map((b) => [b, app.barLabel(b) + ' (' + (Math.round(BARS.get(b).db * 10) / 10) + ' mm)']),
    ...BAR_SETS.bs.map((b) => [b, b + ' (' + BARS.get(b).db + ' mm)']),
  ];
  const kindWord = (k) => t('rc.kind.' + k);
  const editEl = (id, patch, label = t('rc.undo.change')) => app.edit(label, (tx) => tx.updateRc(id, patch));

  // ---------------------------------------------------------------- settings
  function settingsBlock() {
    const s = (S().rc?.settings) || app.rb().settings, aci = s.code !== 'ec2';
    const set = (patch) => app.edit(t('rc.undo.settings'), (tx) => tx.setRcSettings(patch));
    const rows = [
      ...app.field(t('rc.set.code'), app.selectIn([['aci', t('rc.code.aci')], ['ec2', t('rc.code.ec2')]], s.code, (v) => set({ code: v }), { id: 'dc-rc-code' })),
      ...app.field(t(aci ? 'rc.set.fc' : 'rc.set.fck'), app.numIn(s.fc, (v) => set({ fc: v }), { id: 'dc-rc-fc' })),
      ...app.field(t(aci ? 'rc.set.fy' : 'rc.set.fyk'), app.numIn(s.fy, (v) => set({ fy: v }), { id: 'dc-rc-fy' })),
      ...app.field(t('rc.set.stock'), app.numIn(s.stock, (v) => set({ stock: v }), { id: 'dc-rc-stock' })),
      ...app.field(t('rc.set.collap'), app.selectIn([['compression', t('rc.collap.compression')], ['tension', t('rc.collap.tension')]], s.colLap, (v) => set({ colLap: v }), { id: 'dc-rc-collap' })),
    ];
    if (aci) rows.push(
      ...app.field(t('rc.set.lambda'), app.selectIn([['1', t('rc.lambda.normal')], ['0.75', t('rc.lambda.light')]], String(s.lambda), (v) => set({ lambda: Number(v) }), { id: 'dc-rc-lambda' })),
      ...app.field(t('rc.set.coating'), app.selectIn([['none', t('rc.coating.none')], ['epoxy', t('rc.coating.epoxy')], ['galvanized', t('rc.coating.galvanized')]], s.coating, (v) => set({ coating: v }), { id: 'dc-rc-coating' })),
      ...app.field(t('rc.set.exposure'), app.selectIn([['interior', t('rc.exposure.interior')], ['exposed', t('rc.exposure.exposed')], ['earth', t('rc.exposure.earth')]], s.exposure, (v) => set({ exposure: v }), { id: 'dc-rc-exposure' })),
      ...app.field(t('rc.set.lapclass'), app.selectIn([['B', t('rc.lapclass.b')], ['A', t('rc.lapclass.a')]], s.lapClass, (v) => set({ lapClass: v }), { id: 'dc-rc-lapclass' })));
    else rows.push(
      ...app.field(t('rc.set.gammac'), app.numIn(s.gammaC, (v) => set({ gammaC: v }), { id: 'dc-rc-gc' })),
      ...app.field(t('rc.set.gammas'), app.numIn(s.gammaS, (v) => set({ gammaS: v }), { id: 'dc-rc-gs' })),
      ...app.field(t('rc.set.alphact'), app.numIn(s.alphaCt, (v) => set({ alphaCt: v }), { id: 'dc-rc-act' })));
    return [el('h4', { className: 'dc-sub' }, t('rc.set.title')), el('div', { className: 'dc-props', dataset: { rcSettings: '' } }, ...rows),
      el('p', { className: 'dc-note' }, t(aci ? 'rc.set.note.aci' : 'rc.set.note.ec2'))];
  }

  // ---------------------------------------------------------------- adding by grid
  const gridX = () => S().grids.x, gridY = () => S().grids.y, levels = () => S().levels;
  const atX = (lab) => gridX().find((g) => g.label === lab)?.at, atY = (lab) => gridY().find((g) => g.label === lab)?.at, atL = (n) => levels().find((l) => l.name === n)?.z;
  function addBlock() {
    const gx = gridX(), gy = gridY(), lv = levels();
    if (!gx.length || !gy.length || !lv.length) return [el('p', { className: 'dc-note' }, t('rc.add.nogrid'))];
    const pickX = (k) => app.selectIn(gx.map((g) => [g.label, g.label]), add[k] || gx[k === 'x2' ? Math.min(1, gx.length - 1) : 0].label, (v) => { add[k] = v; }, { id: 'dc-rc-add-' + k });
    const pickY = (k) => app.selectIn(gy.map((g) => [g.label, g.label]), add[k] || gy[k === 'y2' && add.kind !== 'beam' ? Math.min(1, gy.length - 1) : 0].label, (v) => { add[k] = v; }, { id: 'dc-rc-add-' + k });
    const pickL = (k, i) => app.selectIn(lv.map((l) => [l.name, l.name]), add[k] || lv[Math.min(i, lv.length - 1)].name, (v) => { add[k] = v; }, { id: 'dc-rc-add-' + k });
    const D = DEFAULTS[add.kind];
    const rows = [...app.field(t('rc.add.kind'), app.selectIn(['beam', 'column', 'slab', 'wall'].map((k) => [k, kindWord(k)]), add.kind, (v) => { add.kind = v; add.w = add.h = add.t = 0; app.rerender(); }, { id: 'dc-rc-add-kind' }))];
    if (add.kind === 'column') rows.push(...app.field(t('rc.add.gridx'), pickX('x1')), ...app.field(t('rc.add.gridy'), pickY('y1')), ...app.field(t('rc.add.from'), pickL('lv', 0)), ...app.field(t('rc.add.to'), pickL('lv2', 1)));
    else rows.push(...app.field(t('rc.add.x1'), pickX('x1')), ...app.field(t('rc.add.y1'), pickY('y1')), ...app.field(t('rc.add.x2'), pickX('x2')), ...app.field(t('rc.add.y2'), pickY('y2')),
      ...app.field(add.kind === 'wall' ? t('rc.add.from') : t('rc.add.level'), pickL('lv', add.kind === 'wall' ? 0 : 1)), ...(add.kind === 'wall' ? app.field(t('rc.add.to'), pickL('lv2', 1)) : []));
    if (add.kind === 'beam' || add.kind === 'column') rows.push(...app.field(t('rc.f.w'), app.numIn(add.w || D.w, (v) => { add.w = v; }, { id: 'dc-rc-add-w' })), ...app.field(t(add.kind === 'beam' ? 'rc.f.h' : 'rc.f.d'), app.numIn(add.h || (D.h || D.d), (v) => { add.h = v; }, { id: 'dc-rc-add-h' })));
    else rows.push(...app.field(t('rc.f.t'), app.numIn(add.t || D.t, (v) => { add.t = v; }, { id: 'dc-rc-add-t' })));
    return [el('h4', { className: 'dc-sub' }, t('rc.add.title')), el('div', { className: 'dc-props', dataset: { rcAdd: '' } }, ...rows),
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { rcAddGo: '' }, onclick: addNow }, t('rc.add.go')))];
  }
  function addNow() {
    const g = (k, fb) => document.getElementById('dc-rc-add-' + k)?.value ?? fb;
    const k = add.kind, D = DEFAULTS[k];
    const x1 = atX(g('x1')), y1 = atY(g('y1')), x2 = atX(g('x2')), y2 = atY(g('y2')), z = atL(g('lv')), z2 = atL(g('lv2'));
    let e;
    if (k === 'beam') e = { kind: k, a: [x1, y1, z], b: [x2, y2, z], w: add.w || D.w, h: add.h || D.h };
    else if (k === 'column') e = { kind: k, x: x1, y: y1, z0: Math.min(z, z2), z1: Math.max(z, z2), w: add.w || D.w, d: add.h || D.d };
    else if (k === 'slab') e = { kind: k, x: (x1 + x2) / 2, y: (y1 + y2) / 2, L: Math.abs(x2 - x1), B: Math.abs(y2 - y1), z, t: add.t || D.t };
    else e = { kind: k, a: [x1, y1], b: [x2, y2], z0: Math.min(z, z2), z1: Math.max(z, z2), t: add.t || D.t };
    // a bar set to match the steel the person works in: BS bars when the design code is EN 1992-1-1
    if ((S().rc?.settings?.code) === 'ec2') Object.assign(e, euroBars(k));
    const id = app.edit(t('rc.undo.add', { kind: kindWord(k) }), (tx) => tx.addRc({ ...e, phase: app.phase?.() || 1 }));
    if (id) { app.print(t('rc.add.done', { kind: kindWord(k) })); app.select({ kind: 'rc', id }); }
  }
  /** Starting bars for EN 1992-1-1 (BS 4449 sizes): starting values, not design. */
  function euroBars(k) {
    if (k === 'beam') return { top: { bar: 'H16', n: 2 }, bot: { bar: 'H20', n: 3 }, skin: { bar: 'H12', n: 0 }, stir: { ...DEFAULTS.beam.stir, bar: 'H10' } };
    if (k === 'column') return { long: { bar: 'H25', nw: 3, nd: 3 }, ties: { ...DEFAULTS.column.ties, bar: 'H10' } };
    if (k === 'slab') return { bot: { u: { bar: 'H12', s: 200 }, v: { bar: 'H12', s: 200 } }, top: { on: true, u: { bar: 'H10', s: 250 }, v: { bar: 'H10', s: 250 } }, edges: { on: false, bar: 'H10', s: 250 }, trim: { bar: 'H16' } };
    return { u: { bar: 'H10', s: 250 }, v: { bar: 'H12', s: 250 }, ends: { on: true, bar: 'H10' }, trim: { bar: 'H16' } };
  }

  // ---------------------------------------------------------------- the tab
  function panel() {
    const rb = app.rb(), out = [];
    out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, t('rc.title')),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { rcSheetsAll: '' }, onclick: () => openSheets(null) }, t('rc.sheets.open'))));
    out.push(el('p', { className: 'dc-note' }, t('rc.intro')));
    out.push(...addBlock());
    // the elements
    const rows = rb.items.map((it) => {
      const fails = it.checks.filter((c) => c.status === 'fail').length;
      const kg = it.res.groups.reduce((s, g) => s + barOf(g.bar).mass * g.length / 1000 * g.count, 0), n = it.res.groups.reduce((s, g) => s + g.count, 0);
      return el('tr', { dataset: { rcRow: it.el.id } },
        el('td', {}, el('button', { type: 'button', onclick: () => app.select({ kind: 'rc', id: it.el.id }) }, rb.labels.get(it.el.id))),
        el('td', {}, sizeText(it.el)), el('td', { className: 'n' }, String(n)), el('td', { className: 'n' }, kgs(kg)),
        el('td', { className: 'n' }, fails ? String(fails) : '—'),
        el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', dataset: { rcSheet: it.el.id }, onclick: () => openSheets(it.el.id) }, t('rc.sheet.one'))));
    });
    out.push(el('h4', { className: 'dc-sub' }, t('rc.list.title', { n: rb.items.length })));
    if (rows.length) out.push(el('table', { className: 'dc-table', dataset: { rcList: '' } },
      el('thead', {}, el('tr', {}, ...['rc.col.element', 'rc.col.size', 'rc.col.bars', 'rc.col.kg', 'rc.col.problems', 'rc.col.drawing'].map((k, i) => el('th', { className: i >= 2 && i <= 4 ? 'n' : '', scope: 'col' }, t(k))))),
      el('tbody', {}, ...rows)));
    else out.push(el('p', { className: 'dc-note', dataset: { rcNone: '' } }, t('rc.list.none')));
    // bars read from a file
    const nl = S().rc?.loose?.length || 0;
    if (nl) {
      const hosts = new Map();
      for (const g of rb.loose) hosts.set(g.hostName || t('rc.loose.nohost'), (hosts.get(g.hostName || t('rc.loose.nohost')) || 0) + g.count);
      out.push(el('h4', { className: 'dc-sub' }, t('rc.loose.title', { n: nl })),
        el('p', { className: 'dc-note', dataset: { rcLoose: String(nl) } }, t('rc.loose.note', { hosts: [...hosts].slice(0, 12).map(([h, n]) => h + ' (' + n + ')').join(', ') })),
        el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { rcLooseRemove: '' }, onclick: () => { if (app.edit(t('rc.undo.loose-remove'), (tx) => tx.removeLoose(null))) app.print(t('rc.loose.removed', { n: nl })); } }, t('rc.loose.remove'))));
    }
    out.push(...settingsBlock());
    out.push(el('p', { className: 'dc-note' }, t('rc.engineer')));
    return out;
  }
  const sizeText = (e) => (e.kind === 'beam' ? mm(e.w) + ' × ' + mm(e.h) : e.kind === 'column' ? mm(e.w) + ' × ' + mm(e.d) : e.kind === 'slab' ? mm(e.L) + ' × ' + mm(e.B) + ' × ' + mm(e.t) : mm(Math.hypot(e.b[0] - e.a[0], e.b[1] - e.a[1])) + ' × ' + mm(e.z1 - e.z0) + ' × ' + mm(e.t));   // i18n-ignore: sizes

  // ---------------------------------------------------------------- properties of one element
  function props(e) {
    const it = app.rb().byId.get(e.id);
    if (!it) return [];
    const set = (patch) => editEl(e.id, patch);
    const N = (label, v, fn, id) => app.field(label, app.numIn(v, fn, { id: 'dc-rc-' + id }));
    const B = (label, v, fn, id) => app.field(label, app.selectIn(barOptions(), v, fn, { id: 'dc-rc-' + id }));
    const C = (label, v, fn, id) => { const i = el('input', { type: 'checkbox', checked: !!v, id: 'dc-rc-' + id }); i.addEventListener('change', () => fn(i.checked)); return app.field(label, i); };
    const E = (label, opts, v, fn, id) => app.field(label, app.selectIn(opts, v, fn, { id: 'dc-rc-' + id }));
    const rows = [...app.field(t('rc.f.name'), app.textIn(e.name, (v) => set({ name: v }), { id: 'dc-rc-name' })), ...(app.phaseField ? app.phaseField([{ kind: 'rc', id: e.id }], e.phase || 1) : [])];
    if (e.kind === 'beam') {
      rows.push(...N(t('rc.f.w'), e.w, (v) => set({ w: v }), 'w'), ...N(t('rc.f.h'), e.h, (v) => set({ h: v }), 'h'), ...N(t('rc.f.cover'), e.cover, (v) => set({ cover: v }), 'cover'),
        ...B(t('rc.f.top.bar'), e.top.bar, (v) => set({ top: { bar: v } }), 'top-bar'), ...N(t('rc.f.top.n'), e.top.n, (v) => set({ top: { n: v } }), 'top-n'),
        ...B(t('rc.f.bot.bar'), e.bot.bar, (v) => set({ bot: { bar: v } }), 'bot-bar'), ...N(t('rc.f.bot.n'), e.bot.n, (v) => set({ bot: { n: v } }), 'bot-n'),
        ...E(t('rc.f.ends.top'), [['hook', t('rc.end.hook')], ['straight', t('rc.end.straight')]], e.ends.top, (v) => set({ ends: { top: v } }), 'ends-top'),
        ...E(t('rc.f.ends.bot'), [['hook', t('rc.end.hook')], ['straight', t('rc.end.straight')]], e.ends.bot, (v) => set({ ends: { bot: v } }), 'ends-bot'),
        ...B(t('rc.f.skin.bar'), e.skin.bar, (v) => set({ skin: { bar: v } }), 'skin-bar'), ...N(t('rc.f.skin.n'), e.skin.n, (v) => set({ skin: { n: v } }), 'skin-n'),
        ...B(t('rc.f.stir.bar'), e.stir.bar, (v) => set({ stir: { bar: v } }), 'stir-bar'), ...E(t('rc.f.stir.hook'), [['135', '135°'], ['90', '90°']], String(e.stir.hook), (v) => set({ stir: { hook: Number(v) } }), 'stir-hook'),
        ...N(t('rc.f.stir.first'), e.stir.first, (v) => set({ stir: { first: v } }), 'stir-first'), ...N(t('rc.f.stir.endlen'), e.stir.ends.len, (v) => set({ stir: { ends: { len: v } } }), 'stir-endlen'),
        ...N(t('rc.f.stir.ends'), e.stir.ends.s, (v) => set({ stir: { ends: { s: v } } }), 'stir-ends'), ...N(t('rc.f.stir.s'), e.stir.s, (v) => set({ stir: { s: v } }), 'stir-s'),
        ...N(t('rc.f.sup0'), e.sup[0], (v) => set({ sup: [v, e.sup[1]] }), 'sup0'), ...N(t('rc.f.sup1'), e.sup[1], (v) => set({ sup: [e.sup[0], v] }), 'sup1'),
        ...N(t('rc.f.lap.top'), e.lap.top, (v) => set({ lap: { top: v } }), 'lap-top'), ...N(t('rc.f.lap.bot'), e.lap.bot, (v) => set({ lap: { bot: v } }), 'lap-bot'));
    } else if (e.kind === 'column') {
      rows.push(...N(t('rc.f.w'), e.w, (v) => set({ w: v }), 'w'), ...N(t('rc.f.d'), e.d, (v) => set({ d: v }), 'd'), ...N(t('rc.f.rot'), e.rot, (v) => set({ rot: v }), 'rot'), ...N(t('rc.f.cover'), e.cover, (v) => set({ cover: v }), 'cover'),
        ...B(t('rc.f.long.bar'), e.long.bar, (v) => set({ long: { bar: v } }), 'long-bar'), ...N(t('rc.f.long.nw'), e.long.nw, (v) => set({ long: { nw: v } }), 'long-nw'), ...N(t('rc.f.long.nd'), e.long.nd, (v) => set({ long: { nd: v } }), 'long-nd'),
        ...B(t('rc.f.tie.bar'), e.ties.bar, (v) => set({ ties: { bar: v } }), 'tie-bar'), ...E(t('rc.f.stir.hook'), [['135', '135°'], ['90', '90°']], String(e.ties.hook), (v) => set({ ties: { hook: Number(v) } }), 'tie-hook'),
        ...N(t('rc.f.stir.first'), e.ties.first, (v) => set({ ties: { first: v } }), 'tie-first'), ...N(t('rc.f.stir.endlen'), e.ties.ends.len, (v) => set({ ties: { ends: { len: v } } }), 'tie-endlen'),
        ...N(t('rc.f.stir.ends'), e.ties.ends.s, (v) => set({ ties: { ends: { s: v } } }), 'tie-ends'), ...N(t('rc.f.stir.s'), e.ties.s, (v) => set({ ties: { s: v } }), 'tie-s'),
        ...E(t('rc.f.coltop'), [['splice', t('rc.coltop.splice')], ['hook', t('rc.coltop.hook')], ['straight', t('rc.coltop.straight')]], e.top, (v) => set({ top: v }), 'top'),
        ...N(t('rc.f.lap'), e.lap, (v) => set({ lap: v }), 'lap'));
    } else if (e.kind === 'slab') {
      rows.push(...N(t('rc.f.t'), e.t, (v) => set({ t: v }), 't'), ...N(t('rc.f.len'), e.L, (v) => set({ L: v }), 'L'), ...N(t('rc.f.wid'), e.B, (v) => set({ B: v }), 'B'), ...N(t('rc.f.z'), e.z, (v) => set({ z: v }), 'z'),
        ...N(t('rc.f.cover.bot'), e.cover.bot, (v) => set({ cover: { bot: v } }), 'cover-bot'), ...N(t('rc.f.cover.top'), e.cover.top, (v) => set({ cover: { top: v } }), 'cover-top'),
        ...B(t('rc.f.bot.u'), e.bot.u.bar, (v) => set({ bot: { u: { bar: v } } }), 'bot-u'), ...N(t('rc.f.s'), e.bot.u.s, (v) => set({ bot: { u: { s: v } } }), 'bot-us'),
        ...B(t('rc.f.bot.v'), e.bot.v.bar, (v) => set({ bot: { v: { bar: v } } }), 'bot-v'), ...N(t('rc.f.s'), e.bot.v.s, (v) => set({ bot: { v: { s: v } } }), 'bot-vs'),
        ...C(t('rc.f.top.on'), e.top.on, (v) => set({ top: { on: v } }), 'top-on'));
      if (e.top.on) rows.push(...B(t('rc.f.top.u'), e.top.u.bar, (v) => set({ top: { u: { bar: v } } }), 'top-u'), ...N(t('rc.f.s'), e.top.u.s, (v) => set({ top: { u: { s: v } } }), 'top-us'),
        ...B(t('rc.f.top.v'), e.top.v.bar, (v) => set({ top: { v: { bar: v } } }), 'top-v'), ...N(t('rc.f.s'), e.top.v.s, (v) => set({ top: { v: { s: v } } }), 'top-vs'));
      rows.push(...C(t('rc.f.edges'), e.edges.on, (v) => set({ edges: { on: v } }), 'edges'));
      if (e.edges.on) rows.push(...B(t('rc.f.edge.bar'), e.edges.bar, (v) => set({ edges: { bar: v } }), 'edge-bar'), ...N(t('rc.f.s'), e.edges.s, (v) => set({ edges: { s: v } }), 'edge-s'));
      rows.push(...B(t('rc.f.trim'), e.trim.bar, (v) => set({ trim: { bar: v } }), 'trim'), ...N(t('rc.f.lap'), e.lap, (v) => set({ lap: v }), 'lap'));
    } else {
      rows.push(...N(t('rc.f.t'), e.t, (v) => set({ t: v }), 't'), ...N(t('rc.f.cover'), e.cover, (v) => set({ cover: v }), 'cover'),
        ...E(t('rc.f.faces'), [['2', t('rc.faces.2')], ['1', t('rc.faces.1')]], String(e.faces), (v) => set({ faces: Number(v) }), 'faces'),
        ...B(t('rc.f.wall.u'), e.u.bar, (v) => set({ u: { bar: v } }), 'u'), ...N(t('rc.f.s'), e.u.s, (v) => set({ u: { s: v } }), 'us'),
        ...B(t('rc.f.wall.v'), e.v.bar, (v) => set({ v: { bar: v } }), 'v'), ...N(t('rc.f.s'), e.v.s, (v) => set({ v: { s: v } }), 'vs'),
        ...C(t('rc.f.wall.ends'), e.ends.on, (v) => set({ ends: { on: v } }), 'ends'), ...(e.ends.on ? B(t('rc.f.edge.bar'), e.ends.bar, (v) => set({ ends: { bar: v } }), 'ends-bar') : []),
        ...E(t('rc.f.walltop'), [['straight', t('rc.coltop.straight')], ['splice', t('rc.coltop.splice')]], e.top, (v) => set({ top: v }), 'top'),
        ...B(t('rc.f.trim'), e.trim.bar, (v) => set({ trim: { bar: v } }), 'trim'), ...N(t('rc.f.lap'), e.lap, (v) => set({ lap: v }), 'lap'));
    }
    const out = [el('div', { className: 'dc-props', dataset: { rcProps: e.id } }, ...rows)];
    if (e.kind === 'slab' || e.kind === 'wall') out.push(...openingsBlock(e));
    out.push(...lapsBlock(it), ...checksBlock(it), ...barsBlock(it));
    out.push(el('div', { className: 'dc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { rcSheet: e.id }, onclick: () => openSheets(e.id) }, t('rc.sheet.one')),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: () => app.deleteSelection() }, t('app.btn.delete'))));
    return out;
  }
  function openingsBlock(e) {
    const list = e.open || [];
    const wall = e.kind === 'wall';
    const keys = wall ? ['at', 'sill', 'w', 'h'] : ['x', 'y', 'w', 'h'];
    const rows = list.map((o, i) => el('tr', {}, ...keys.map((k) => el('td', {}, app.numIn(o[k], (v) => { const next = list.map((x) => ({ ...x })); next[i][k] = v; editEl(e.id, { open: next }, t('rc.undo.opening')); }, { id: 'dc-rc-op' + i + '-' + k }))),
      el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => editEl(e.id, { open: list.filter((_, j) => j !== i) }, t('rc.undo.opening-remove')) }, t('rc.open.remove')))));
    const addOne = () => {
      const o = wall ? { at: Math.max(e.cover + 100, 500), sill: 900, w: 900, h: 1200 } : { x: 0, y: 0, w: 600, h: 600 };
      if (editEl(e.id, { open: [...list, o] }, t('rc.undo.opening')) !== undefined) app.print(t('rc.open.added'));
    };
    return [el('h4', { className: 'dc-sub' }, t('rc.open.title', { n: list.length })),
      list.length ? el('table', { className: 'dc-table', dataset: { rcOpenings: e.id } }, el('thead', {}, el('tr', {}, ...keys.map((k) => el('th', { scope: 'col' }, t('rc.open.' + (wall ? 'wall.' : '') + k))), el('th', {}, ''))), el('tbody', {}, ...rows)) : null,
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { rcOpenAdd: '' }, onclick: addOne }, t('rc.open.add'))),
      el('p', { className: 'dc-note' }, t(wall ? 'rc.open.note.wall' : 'rc.open.note.slab'))];
  }
  /** Laps and anchorage: required (with the clause and its terms), what the detail has, and where the person typed their own. */
  function lapsBlock(it) {
    const rows = [];
    for (const l of it.res.laps) rows.push(el('tr', { dataset: { rcLap: l.role } }, el('td', {}, t('rc.role.' + l.role.replace(/:.*$/, ''))), el('td', {}, t('rc.lapkind.' + l.kind)), el('td', { className: 'n' }, mm(l.req)), el('td', { className: 'n' }, mm(l.provided) + (l.auto ? '' : ' *')), el('td', {}, l.clause), el('td', { className: 'dc-terms' }, termsText(l.terms))));
    for (const a of it.res.anchors) rows.push(el('tr', { dataset: { rcAnchor: a.role + ':' + a.end } }, el('td', {}, t('rc.role.' + a.role) + ', ' + t(a.end ? 'rc.end.end' : 'rc.end.start')), el('td', {}, t(a.hooked ? 'rc.anchor.hook' : 'rc.anchor.straight')), el('td', { className: 'n' }, mm(a.req)), el('td', { className: 'n' }, a.provided === null ? '—' : mm(a.provided)), el('td', {}, a.clause), el('td', { className: 'dc-terms' }, termsText(a.terms))));
    if (!rows.length) return [];
    return [el('h4', { className: 'dc-sub' }, t('rc.laps.title')),
      el('table', { className: 'dc-table', dataset: { rcLaps: it.el.id } }, el('thead', {}, el('tr', {}, ...['rc.laps.what', 'rc.laps.kind', 'rc.laps.req', 'rc.laps.has', 'rc.laps.clause', 'rc.laps.terms'].map((k, i) => el('th', { className: i === 2 || i === 3 ? 'n' : '', scope: 'col' }, t(k))))), el('tbody', {}, ...rows)),
      el('p', { className: 'dc-note' }, t('rc.laps.note'))];
  }
  const termsText = (o) => Object.entries(o || {}).map(([k, v]) => k + ' ' + v).join(', ');   // i18n-ignore: symbols and numbers
  function checksBlock(it) {
    const list = it.checks.filter((c) => c.status !== 'ok' || c.code === 'lap');
    if (!list.length) return [el('p', { className: 'dc-note' }, t('rc.chk.none'))];
    return [el('h4', { className: 'dc-sub' }, t('rc.chk.title')), el('ul', { className: 'dc-msgs', dataset: { rcChecks: it.el.id } }, ...list.map((c) => el('li', { className: c.status === 'fail' ? (c.severity === 'error' ? 'is-hard' : '') : 'is-note' }, (c.status === 'ok' ? '✓ ' : '') + checkText(c) + (c.clause ? ' (' + c.clause + ')' : ''))))];
  }
  function barsBlock(it) {
    const list = app.schedule().byElement.get(it.el.id) || [];
    return [el('h4', { className: 'dc-sub' }, t('rc.bars.title')), el('table', { className: 'dc-table', dataset: { rcBars: it.el.id } },
      el('thead', {}, el('tr', {}, ...['rc.bars.mark', 'rc.bars.what', 'rc.bars.shape', 'rc.bars.n', 'rc.bars.len'].map((k, i) => el('th', { className: i >= 3 ? 'n' : '', scope: 'col' }, t(k))))),
      el('tbody', {}, ...list.map(({ group: g, mark }) => el('tr', {}, el('td', {}, mark), el('td', {}, app.barLabel(g.bar) + ' ' + t('rc.role.' + g.role.replace(/:.*$/, '')).toLowerCase()), el('td', {}, app.shapeCode(g.shape)), el('td', { className: 'n' }, String(g.count)), el('td', { className: 'n' }, mm(g.length))))))];
  }

  // ---------------------------------------------------------------- shop drawings (made again on every change)
  function sheets(only = null) {
    const rb = app.rb(), sch = app.schedule();
    const paper = paperOf(app.paper());
    const ref = modelRef(S());
    const date = new Date().toISOString().slice(0, 10);
    const s = rb.settings;
    const base = { paper, textWidth, w: (k, v) => t(k, v), model: S().name, ref, date, bar: barOf, barLabel: app.barLabel, shapeCode: app.shapeCode, scheduleDims: app.scheduleDims, codeName: t('rc.code.' + s.code) };
    const items = rb.items.filter((it) => !only || it.el.id === only);
    const out = [];
    const total = items.length + Math.max(1, Math.ceil((only ? (sch.byElement.get(only) || []).length : sch.rows.length) / Math.max(8, Math.floor((paper.h - 110) / 9))));
    items.forEach((it, i) => {
      const marks = sch.byElement.get(it.el.id) || [];
      const notes = [t('rc.sheet.note.cover', { cover: it.el.kind === 'slab' ? mm(it.el.cover.bot) + ' / ' + mm(it.el.cover.top) : mm(it.el.cover) }), t('rc.sheet.note.mat', { code: t('rc.code.' + s.code), fc: s.fc, fy: s.fy }),
        t('rc.sheet.note.checks', { n: it.checks.filter((c) => c.status === 'fail').length })];
      out.push(elementSheet({ el: { ...it.el, name: rb.labels.get(it.el.id) }, res: it.res, marks, notes, n: i + 1, total }, base));
    });
    const rows = only ? sch.rcRows.filter((r) => r.elements.includes(only)) : sch.rows;
    out.push(...bendingSheets(rows, { ...base, first: items.length, total, codesName: '' }));
    return out;
  }
  let dlg = null, list = [], off = null;
  function openSheets(only) {
    if (!app.rb().items.length && !app.schedule().rows.length) { app.print(t('rc.sheets.nothing')); return; }
    app.remember();
    const sel = el('select', { className: 'dc-select dc-dwg-sel', id: 'dc-rc-sheet', dataset: { rcSheetPick: '' } });
    const canvas = el('canvas', { dataset: { rcCanvas: '' }, 'aria-label': t('rc.sheets.preview') });
    const note = el('span', { className: 'dc-note', dataset: { rcSheetsNote: '' } });
    const fill = () => {
      list = sheets(only);
      const keep = Number(sel.value) || 0;
      sel.replaceChildren(...list.map((s, i) => el('option', { value: String(i) }, (i + 1) + '. ' + s.title)));
      sel.value = String(Math.min(keep, list.length - 1));
      note.textContent = t('rc.sheets.note', { n: list.length, ref: modelRef(S()) });
      requestAnimationFrame(() => app.drawList(canvas, list[Number(sel.value) || 0]));
    };
    sel.addEventListener('change', () => app.drawList(canvas, list[Number(sel.value) || 0]));
    const pdf = async (all) => {
      const pages = all ? list : [list[Number(sel.value) || 0]];
      const { bytes, missing } = await app.toPdf(pages, { title: t('rc.sheets.pdf-title', { name: S().name }) });
      app.download(app.safeName() + ' ' + t('rc.sheets.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
      app.print(t('rc.sheets.saved', { n: pages.length }) + (missing ? ' ' + t('app.pdf.missing', { n: missing }) : ''));
    };
    dlg = el('dialog', { className: 'dc-dialog', 'aria-labelledby': 'dc-rc-sheets-h', dataset: { rcSheets: '' } },
      el('div', { className: 'dc-dlg' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-rc-sheets-h' }, t('rc.sheets.title')),
          el('label', { className: 'visually-hidden', for: 'dc-rc-sheet' }, t('rc.sheets.sheet')), sel,
          el('button', { type: 'button', className: 'dc-x', dataset: { rcClose: '' }, 'aria-label': t('page.dlg.close'), onclick: () => dlg.close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
        el('div', { className: 'dc-shop-body' }, canvas),
        el('div', { className: 'dc-dlg-foot' }, note,
          el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { rcPdfOne: '' }, onclick: () => pdf(false) }, t('rc.sheets.pdf-one')),
          el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { rcPdfAll: '' }, onclick: () => pdf(true) }, t('rc.sheets.pdf-all')))));
    off = model().on(() => { if (dlg?.open) fill(); });   // a change while the window is open: the sheets are made again
    dlg.addEventListener('close', () => { off?.(); off = null; dlg.remove(); dlg = null; app.restoreFocus(); });
    app.root.append(dlg);
    dlg.showModal();
    fill();
    sel.focus();
  }
  return { panel, props, openSheets, sheets, get dialog() { return dlg; } };
}
