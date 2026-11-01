/* SPDX-License-Identifier: Apache-2.0 */
/**
 * supply-ui.js — DetailCraft's Supply tab (0.8 round 3, EG.51, the DetailCraft side): a supplier's stock and lead-time file (CSV) against the stock bars the
 * model's cut list buys (nest.js): is there enough of each section in stock, and how long is the wait? The engine is the shared lib/supply (also behind
 * TakeoffCraft); this builds the needs from the model, keeps the file's rows in the model (state.supply, one undo step) and lists what is short or late in
 * the shell's Problems. The person brings the file; nothing is sent anywhere.
 *
 *   mountSupply(app) → { panel() → [nodes], problems() → [problem], needs() }
 *   app = { getModel, edit(label, fn), print(text), rerender(), setProblems(list), nest() → nestBars result, built() }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { readNum } from './numtext.js';
import { readSupplyCsv, addSource, check, problemsOf, emptySupply, readSupply, writeSupply } from './lib-supply/supply.js';

/** What the model buys, per section: stock bars (ea), their length in metres and their weight in kilograms (the profile's kg/m). */
export function needsOf(nest, built) {
  const mass = new Map();
  for (const p of built?.parts || []) if (p.profile) mass.set(String(p.profile.name).toUpperCase(), p.profile.mass || 0);
  return (nest?.groups || []).filter((g) => g.bars.length).map((g) => {
    const metres = g.bars.reduce((a, b) => a + b.stock, 0) / 1000;
    return { id: g.profile.toUpperCase() + '|' + String(g.material).toUpperCase(), name: g.profile, unit: 'ea', need: g.bars.length, units: { m: Math.round(metres * 100) / 100, kg: Math.round(metres * (mass.get(g.profile.toUpperCase()) || 0) * 10) / 10 },
      about: null };
  });
}

export function mountSupply(app) {
  const model = () => app.getModel();
  const supply = () => model().state.supply || null;
  const save = (label, fn) => app.edit(label, (tx) => {
    const cur = supply() ? writeSupply(supply()) : emptySupply();
    const next = fn(cur) || cur;
    const clean = readSupply(next);
    if (clean) tx.s.supply = clean; else delete tx.s.supply;
  });
  const again = (label, fn) => { save(label, fn); app.rerender(); };
  const cache = new Map();
  const needs = () => needsOf(app.nest(), app.built());
  function result() {
    const m = model(), key = m.version + ':' + (app.built()?.parts.length || 0);
    if (!cache.has(key)) { if (cache.size > 6) cache.clear(); cache.set(key, check(needs(), supply())); }
    return cache.get(key);
  }
  const fmt = (n) => String(Math.round(n * 100) / 100);
  function problems() {
    const s = supply();
    if (!s) return [];
    const kinds = { short: 'supply.prob.short', lead: 'supply.prob.lead', back: 'supply.prob.back' };
    return problemsOf(result(), { t, fmt, app: 'detailcraft', keys: kinds });
  }
  async function readFile(file) {
    if (!file) return;
    if (file.size > 5e6) { app.print(t('supply.err.big')); return; }
    const r = readSupplyCsv(await file.text());
    if (!r.ok) { app.print(t('supply.err.read', { error: t('supply.err.' + r.code) })); return; }
    const need = needs();
    let got = null;
    again(t('supply.undo.add'), (cur) => { got = addSource(cur, { name: String(file.name).slice(0, 120), at: new Date().toISOString().slice(0, 10), rows: r.rows }, need); return got.supply; });
    app.print(t('supply.read', { n: got ? got.kept : r.rows.length, matched: got ? got.matched : 0, name: file.name }) + (r.warnings.length ? ' ' + r.warnings[0] : ''));
  }
  const unitWord = (u) => (u === 'ea' ? t('supply.unit.ea') : u);
  function panel() {
    const out = [el('div', { className: 'dc-rep-head' }, el('h3', {}, t('supply.title')))];
    out.push(el('p', { className: 'dc-note' }, t('supply.intro')));
    const pick = el('input', { type: 'file', accept: '.csv,.tsv,.txt,text/csv', hidden: true, dataset: { supplyFile: '' } });
    pick.addEventListener('change', () => { readFile(pick.files[0]); pick.value = ''; });
    const s = supply();
    out.push(el('div', { className: 'dc-props' }, pick, el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { supplyAdd: '' }, onclick: () => pick.click() }, t('supply.add')),
      el('label', { for: 'dc-supply-lead' }, t('supply.limit')),
      (() => { const i = el('input', { id: 'dc-supply-lead', type: 'text', className: 'dc-input dc-num', value: String(s?.leadDays ?? 14), dataset: { supplyLimit: '' } });
        i.addEventListener('change', () => { const r = readNum(i.value); if (!r.ok || r.value < 0 || r.value > 3650) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } again(t('supply.undo.limit'), (cur) => { cur.leadDays = r.value; return cur; }); }); return i; })()));
    app.setProblems?.(problems());
    if (!s) { out.push(el('p', { className: 'dc-note', dataset: { supplyNone: '' } }, t('supply.none'))); return out; }
    out.push(el('ul', { className: 'dc-sources', dataset: { supplySources: '' } }, ...s.sources.map((src, i) => el('li', {}, t('supply.source', { name: src.name, n: src.rows.length, at: src.at || '' }), ' ',
      el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('supply.undo.remove'), (cur) => { cur.sources.splice(i, 1); return cur; }) }, t('supply.remove'))))));
    const res = result();
    if (!res.rows.length && !res.unmatched.length) { out.push(el('p', { className: 'dc-note' }, t('supply.nothing'))); return out; }
    const head = ['section', 'need', 'stock', 'lead', 'supplier', 'status'].map((k) => el('th', {}, t('supply.col.' + k)));
    out.push(el('table', { className: 'dc-table', dataset: { supplyRows: '' } }, el('thead', {}, el('tr', {}, ...head)), el('tbody', {},
      ...res.rows.map((r) => el('tr', { className: r.status === 'short' ? 'is-hard' : '', dataset: { supplyRow: r.name, status: r.status } }, el('td', {}, r.name), el('td', {}, fmt(r.need) + ' ' + unitWord(r.unit)),
        el('td', {}, r.stock === null ? (r.row.inStock === true ? t('supply.instock') : r.row.inStock === false ? '0' : '?') : fmt(r.stock)),
        el('td', {}, r.backorder ? t('supply.backorder') : r.lead === null ? '?' : t('supply.days', { n: fmt(r.lead) })), el('td', {}, r.supplier || ''), el('td', {}, t('supply.status.' + r.status) + (r.status === 'short' ? ' ' + fmt(r.short) : '')))))));
    if (res.unmatched.length) out.push(el('p', { className: 'dc-note', dataset: { supplyUnmatched: '' } }, t('supply.unmatched', { n: res.unmatched.length, list: res.unmatched.map((n) => n.name).slice(0, 8).join(', ') })));
    if (res.critical) out.push(el('p', { className: 'dc-note', dataset: { supplyCritical: '' } }, t('supply.critical', { name: res.critical.name, lead: fmt(res.critical.lead) })));
    out.push(el('p', { className: 'dc-note' }, t('supply.note')));
    return out;
  }
  return { panel, problems, needs, result };
}
