/* SPDX-License-Identifier: Apache-2.0 */
/**
 * framing-ui.js — DetailCraft's Framing tab (0.8 round 2, EG.6): timber and light-gauge steel wall, floor and roof panels, each with its pieces,
 * cut list and shop drawing, and the stock to buy for all of them. framing.js frames; this edits the panels the model file keeps (state.framing).
 *
 *   mountFraming(app) → { panel() → [nodes], problems() → [problem] }
 *   app = { getModel, edit(label, fn), print(text), download(name, data, type), safeName(), rerender(), setProblems(list) }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { readNum } from './numtext.js';
import { sectionsCsv } from './csv.js';
import { panelOf, cutList, nestPanels, panelSvg, panelProblems, cleanPanelSpec, placePanel, panelsPdf, TIMBER, STEEL, WALL_DEFAULTS, FLOOR_DEFAULTS, ROOF_DEFAULTS } from './framing.js';

const FIELDS = {
  wall: [['length', 'num'], ['height', 'num'], ['spacing', 'num'], ['size', 'size'], ['topPlates', 'num'], ['headerSize', 'size'], ['headerPlies', 'num']],
  floor: [['width', 'num'], ['span', 'num'], ['spacing', 'num'], ['size', 'size'], ['rim', 'bool'], ['blocking', 'bool']],
  roof: [['length', 'num'], ['run', 'num'], ['rise', 'num'], ['overhang', 'num'], ['spacing', 'num'], ['size', 'size'], ['ridge', 'size']],
};
const DEFAULTS = { wall: WALL_DEFAULTS, floor: FLOOR_DEFAULTS, roof: ROOF_DEFAULTS };

export function mountFraming(app) {
  const model = () => app.getModel();
  const panels = () => model().state.framing?.panels || [];
  const save = (label, fn) => app.edit(label, (tx) => {
    const cur = JSON.parse(JSON.stringify(panels()));
    fn(cur);
    const clean = cur.map(cleanPanelSpec).filter(Boolean).map((p, i) => ({ ...p, id: p.id || 'p' + (i + 1) }));
    if (clean.length) tx.s.framing = { panels: clean }; else delete tx.s.framing;
  });
  const again = (label, fn) => { save(label, fn); app.rerender(); };
  const cache = new Map();
  const built = (spec) => { const key = JSON.stringify(spec); if (!cache.has(key)) { if (cache.size > 80) cache.clear(); cache.set(key, panelOf(spec)); } return cache.get(key); };
  const nameOf = (p, i) => p.name || t('frm.kind.' + p.kind) + ' ' + (i + 1);
  const problems = () => panels().flatMap((p, i) => panelProblems(built(p), undefined, { name: nameOf(p, i) }).map((q) => ({ ...q, text: t('frm.prob.' + q.code.slice(4), { name: nameOf(p, i), ...q.msg.vars }) })));

  let fid = 0;
  const field = (text, input) => { input.id = input.id || 'dc-fr' + (++fid); return [el('label', { for: input.id }, text), input]; };
  const num = (value, onSet) => {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(Math.round(value * 100) / 100), autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => { const r = readNum(i.value); if (!r.ok || r.value < 0) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } i.removeAttribute('aria-invalid'); onSet(r.value); });
    return i;
  };
  const select = (value, options, onSet, label = (v) => v) => { const s = el('select', { className: 'select-cc' }, ...options.map((o) => el('option', { value: o, selected: o === value }, label(o)))); s.addEventListener('change', () => onSet(s.value)); return s; };
  const saveSvg = (p, i) => { app.download(app.safeName() + ' ' + nameOf(p, i) + '.svg', panelSvg(built(p), { title: nameOf(p, i) }), 'image/svg+xml'); app.print(t('frm.saved.svg')); };
  const cutRows = (p) => cutList(built(p)).map((r) => [r.mark, t('frm.piece.' + r.kind), r.size, Math.round(r.length * 10) / 10, r.count, r.total]);
  const heads = () => ['mark', 'piece', 'size', 'length', 'count', 'total'].map((k) => t('frm.col.' + k));
  const saveCsv = () => {
    const sections = panels().map((p, i) => [nameOf(p, i), [heads(), ...cutRows(p)]]);
    const nest = nestPanels(panels().map(built));
    sections.push([t('frm.stock'), [[t('frm.col.size'), t('frm.col.stock'), t('frm.col.cuts'), t('frm.col.drop')], ...nest.groups.flatMap((g) => g.bars.map((b) => [g.profile, b.stock, b.cuts.length, Math.round(b.drop)]))]]);
    app.download(app.safeName() + ' ' + t('frm.file') + '.csv', '﻿' + sectionsCsv(sections), 'text/csv');
    app.print(t('frm.saved.csv', { n: panels().length }));
  };

  const placedCount = (p) => model().state.members.filter((m) => m.panel && m.panel === p.id).length;
  /** The panel's pieces as members at its place (replacing the ones placed before): one undo step. */
  function placeIn(p, i) {
    const r = placePanel(built(p), p.place || {});
    if (!r.members.length) { app.print(t('frm.place.none')); return; }
    const done = app.edit(t('frm.undo.place'), (tx) => {
      tx.removeMembers(tx.s.members.filter((m) => m.panel && m.panel === p.id).map((m) => m.id));
      for (const pr of r.profiles) { try { tx.addProfile(pr); } catch (e) { /* the same size placed before */ } }
      for (const m of r.members) tx.addMember(m);
    });
    if (done !== null) { app.print(t('frm.placed', { n: r.members.length, name: nameOf(p, i) })); app.rerender(); }
  }
  function unplace(p, i) {
    const ids = model().state.members.filter((m) => m.panel && m.panel === p.id).map((m) => m.id);
    if (!ids.length) return;
    app.edit(t('frm.undo.unplace'), (tx) => { tx.removeMembers(ids); });
    app.print(t('frm.unplaced', { n: ids.length, name: nameOf(p, i) }));
    app.rerender();
  }
  const pdfWords = () => ({ sheet: t('frm.title'), mark: t('frm.col.mark'), piece: t('frm.col.piece'), size: t('frm.col.size'), length: t('frm.col.length'), count: t('frm.col.count'), total: t('frm.col.total'), scale: t('frm.pdf.scale'), pieces: t('frm.pdf.pieces'), note: t('frm.pdf.note'),
    kinds: Object.fromEntries(['stud', 'king', 'jack', 'header', 'cripple', 'sill', 'plate', 'joist', 'rim', 'blocking', 'rafter', 'ridge'].map((k) => [k, t('frm.piece.' + k)])) });
  async function savePdf() {
    const list = panels();
    if (!list.length) return;
    const r = await panelsPdf(list.map(built), { names: list.map(nameOf), project: model().state.name, words: pdfWords(), title: t('frm.title'), date: new Date().toISOString().slice(0, 10) });
    app.download(app.safeName() + ' ' + t('frm.file') + '.pdf', r.bytes, 'application/pdf');
    app.print(t('frm.saved.pdf', { n: list.length }));
  }

  function panelCard(p, i) {
    const set = (key, v) => again(t('frm.undo.edit'), (x) => { x[i][key] = v; });
    const sizes = Object.keys(p.material === 'lgs' ? STEEL : TIMBER);
    const rows = [
      ...field(t('frm.f.name'), (() => { const n = el('input', { type: 'text', className: 'dc-input', value: p.name || '', maxLength: 60 }); n.addEventListener('change', () => set('name', n.value)); return n; })()),
      ...field(t('frm.f.material'), select(p.material, ['timber', 'lgs'], (v) => again(t('frm.undo.edit'), (x) => { x[i].material = v; delete x[i].size; delete x[i].headerSize; delete x[i].ridge; }), (v) => t('frm.material.' + v))),
    ];
    for (const [key, type] of FIELDS[p.kind]) {
      const label = t('frm.f.' + key.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase()));
      if (type === 'num') rows.push(...field(label, num(p[key] ?? DEFAULTS[p.kind][key], (v) => set(key, v))));
      else if (type === 'size') rows.push(...field(label, select(p[key], sizes, (v) => set(key, v))));
      else rows.push(...field(label, (() => { const c = el('input', { type: 'checkbox', checked: !!p[key] }); c.addEventListener('change', () => set(key, c.checked)); return c; })()));
    }
    const out = [el('fieldset', { className: 'dc-props dc-frm', dataset: { panel: String(i) } }, el('legend', {}, nameOf(p, i)), ...rows,
      el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('frm.undo.del'), (x) => { x.splice(i, 1); }) }, t('frm.del')))];
    if (p.kind === 'wall') {
      const ops = (p.openings || []).map((o, k) => el('tr', {}, ...['x', 'width', 'height', 'sill'].map((key) => el('td', {}, num(o[key], (v) => again(t('frm.undo.edit'), (x) => { x[i].openings[k][key] = v; })))),
        el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('frm.undo.edit'), (x) => { x[i].openings.splice(k, 1); }) }, t('frm.opening.del')))));
      out.push(el('table', { className: 'dc-table', dataset: { openings: String(i) } }, el('thead', {}, el('tr', {}, ...['x', 'width', 'height', 'sill'].map((k) => el('th', {}, t('frm.op.' + k))), el('th', {}))), el('tbody', {}, ...ops)),
        el('button', { type: 'button', className: 'dc-linkbtn', dataset: { openingAdd: String(i) }, onclick: () => again(t('frm.undo.edit'), (x) => { x[i].openings.push({ x: 900, width: 900, height: 2100, sill: 0 }); }) }, t('frm.opening.add')));
    }
    const pn = built(p);
    out.push(el('p', { className: 'dc-note', dataset: { frmSummary: String(i) } }, t('frm.summary', { pieces: pn.summary.pieces, metres: pn.summary.metres })));
    const drawing = el('div', { className: 'dc-frm-svg', dataset: { frmDrawing: String(i) } });
    drawing.innerHTML = panelSvg(pn, { title: nameOf(p, i) });   // framing.js escapes every word it writes; the numbers are ours
    drawing.style.cssText = 'max-width:46rem';
    out.push(drawing);
    out.push(el('table', { className: 'dc-table', dataset: { frmCuts: String(i) } }, el('thead', {}, el('tr', {}, ...heads().map((h) => el('th', {}, h)))),
      el('tbody', {}, ...cutRows(p).map((r) => el('tr', {}, ...r.map((c) => el('td', {}, String(c))))))));
    out.push(el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => saveSvg(p, i) }, t('frm.save.svg')));
    // placed in the model as members (0.8 round 3, EG.6): where, then the button
    const pl = p.place || { x: 0, y: 0, z: 0, angle: 0 }, setPl = (key, v) => again(t('frm.undo.edit'), (x) => { x[i].place = { ...(x[i].place || { x: 0, y: 0, z: 0, angle: 0 }), [key]: v }; });
    const signed = (value, onSet) => { const n = el('input', { type: 'text', className: 'dc-input dc-num', value: String(Math.round(value * 100) / 100), autocomplete: 'off', spellcheck: false }); n.addEventListener('change', () => { const r = readNum(n.value); if (!r.ok) { n.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } n.removeAttribute('aria-invalid'); onSet(r.value); }); return n; };
    out.push(el('div', { className: 'dc-props dc-frm-place', dataset: { framePlace: String(i) } }, ...field(t('frm.place.x'), signed(pl.x, (v) => setPl('x', v))), ...field(t('frm.place.y'), signed(pl.y, (v) => setPl('y', v))),
      ...field(t('frm.place.z'), signed(pl.z, (v) => setPl('z', v))), ...field(t('frm.place.angle'), signed(pl.angle, (v) => setPl('angle', v))),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { frmPlace: String(i) }, onclick: () => placeIn(p, i) }, placedCount(p) ? t('frm.place.again') : t('frm.place')),
      placedCount(p) ? el('button', { type: 'button', className: 'dc-linkbtn', dataset: { frmUnplace: String(i) }, onclick: () => unplace(p, i) }, t('frm.unplace', { n: placedCount(p) })) : null));
    return out;
  }
  function panel() {
    const list = panels();
    const out = [el('div', { className: 'dc-rep-head' }, el('h3', {}, t('frm.title')),
      ...['wall', 'floor', 'roof'].map((k) => el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { frmAdd: k }, onclick: () => again(t('frm.undo.add'), (x) => { x.push({ ...DEFAULTS[k], id: 'p' + (x.length + 1) + k[0], openings: [] }); }) }, t('frm.add.' + k))),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { frmCsv: '' }, disabled: !list.length, onclick: saveCsv }, t('app.rep.csv')),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { frmPdf: '' }, disabled: !list.length, onclick: savePdf }, t('frm.save.pdf')))];
    out.push(el('p', { className: 'dc-note' }, t('frm.intro')));
    app.setProblems?.(problems());
    if (!list.length) { out.push(el('p', { className: 'dc-note', dataset: { frmNone: '' } }, t('frm.none'))); return out; }
    list.forEach((p, i) => out.push(...panelCard(p, i)));
    const nest = nestPanels(list.map(built));
    out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, t('frm.stock.title', { bars: nest.totals.bars, waste: (nest.totals.waste * 100).toFixed(1) }))));
    out.push(el('table', { className: 'dc-table', dataset: { frmStock: '' } }, el('thead', {}, el('tr', {}, ...['size', 'stock', 'cuts', 'drop'].map((k) => el('th', {}, t('frm.col.' + k))))),
      el('tbody', {}, ...nest.groups.flatMap((g) => g.bars.map((b) => el('tr', {}, el('td', {}, g.profile), el('td', {}, String(b.stock)), el('td', {}, String(b.cuts.length)), el('td', {}, String(Math.round(b.drop)))))))));
    out.push(el('p', { className: 'dc-note' }, t('frm.note')));
    return out;
  }
  return { panel, problems };
}
