/* SPDX-License-Identifier: Apache-2.0 */
/**
 * erection-ui.js — DetailCraft's Erection tab (0.8 round 2, EG.72): the person enters the crane and its load chart, sees every pick
 * (weight, radius, share of the chart, minute) and saves the erection movie as one HTML file that plays offline, on a phone too.
 * erection.js plans; erection-html.js writes the file. Not a lift plan.
 *
 *   mountErection(app) → { panel() → [nodes], problems() → [problem], plan() }
 *   app = { getModel, built(), marks(), edit(label, fn), print(text), download(name, data, type), safeName(), rerender(),
 *           setProblems(list) }
 */
import { el } from './ui-util.js';
import { t, has } from './i18n.js';
import { plan, cleanSetup, emptySetup, cleanCrane, erectionProblems, movieData } from './erection.js';
import { erectionHtml, MOVIE_WORDS } from './erection-html.js';
import { readNum } from './numtext.js';
import { sectionsCsv } from './csv.js';

const chartText = (chart) => chart.map((r) => r.radius + ' ' + r.kg).join('\n');
const chartFrom = (text) => String(text).split(/\n|;/).map((l) => l.trim().split(/[\s,]+/).map(Number)).filter((a) => a.length >= 2 && a.every(Number.isFinite)).map(([radius, kg]) => ({ radius, kg }));

export function mountErection(app) {
  let cached = null;   // { version, plan }
  const model = () => app.getModel();
  const setup = () => model().state.erection || emptySetup();
  const compute = () => {
    const m = model();
    if (cached && cached.version === m.version) return cached.plan;
    const pl = plan(m.state, app.built(), app.marks(), setup());
    cached = { version: m.version, plan: pl };
    return pl;
  };
  const save = (label, fn) => app.edit(label, (tx) => {
    const next = cleanSetup(fn(JSON.parse(JSON.stringify(setup()))));
    if (next.cranes.length) tx.s.erection = next; else delete tx.s.erection;
  });
  const again = (label, fn) => { save(label, fn); app.rerender(); };

  function problems() {
    if (!model().state.erection?.cranes.length) return [];
    const pl = compute();
    return erectionProblems(pl, { t: (k, v) => t(k, v) });
  }

  const words = () => {
    const w = {};
    for (const k of Object.keys(MOVIE_WORDS)) w[k] = has('erect.w.' + k) ? t('erect.w.' + k) : MOVIE_WORDS[k];
    return w;
  };
  function saveMovie() {
    const pl = compute();
    if (!pl.picks.length) { app.print(t('erect.empty')); return; }
    const name = model().state.name || app.safeName();
    const html = erectionHtml({ title: name, data: movieData(pl, { title: name }), words: words(), lang: document.documentElement.lang || 'en' });
    app.download(app.safeName() + ' ' + t('erect.file') + '.html', html, 'text/html');
    app.print(t('erect.saved', { n: pl.picks.length, min: Math.round(pl.summary.minutes) }));
  }
  function saveCsv() {
    const pl = compute();
    if (!pl.picks.length) { app.print(t('erect.empty')); return; }
    const cols = ['n', 'mark', 'phase', 'crane', 'kg', 'radius', 'cap', 'pct', 'status', 'start', 'end'];
    const rows = [cols.map((k) => t('erect.col.' + k)),
      ...pl.picks.map((p) => [p.n, p.mark, p.phase, p.crane, Math.round(p.weight), Math.round(p.radius * 10) / 10, Math.round(p.capacity), Number.isFinite(p.util) ? Math.round(p.util * 100) : '', t('erect.status.' + p.status), Math.round(p.start * 10) / 10, Math.round(p.end * 10) / 10])];
    app.download(app.safeName() + ' ' + t('erect.file') + '.csv', '﻿' + sectionsCsv([[t('erect.title'), rows]]), 'text/csv');
    app.print(t('erect.saved.csv', { n: pl.picks.length }));
  }

  const num = (value, onSet, o = {}) => {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(Math.round(value * 1000) / 1000), autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => {
      const r = readNum(i.value);
      if (!r.ok) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; }
      i.removeAttribute('aria-invalid');
      onSet(Math.min(o.max ?? Infinity, Math.max(o.min ?? -Infinity, r.value)));
    });
    return i;
  };
  let fid = 0;
  const field = (text, input) => { input.id = input.id || 'dc-er' + (++fid); return [el('label', { for: input.id }, text), input]; };

  function cranePanel(c, i) {
    const body = chartText(c.chart);
    const chart = el('textarea', { className: 'dc-input', rows: Math.max(4, c.chart.length + 1), dataset: { craneChart: String(i) }, spellcheck: false }, body);
    chart.addEventListener('change', () => {
      const rows = chartFrom(chart.value);
      if (!rows.length) { app.print(t('erect.err.chart')); chart.value = body; return; }
      again(t('erect.undo.chart'), (s) => { s.cranes[i].chart = rows; return s; });
    });
    const name = el('input', { type: 'text', className: 'dc-input', value: c.name, maxLength: 80, dataset: { craneName: String(i) } });
    name.addEventListener('change', () => again(t('erect.undo.crane'), (s) => { s.cranes[i].name = name.value; return s; }));
    const set = (key, o) => num(c[key], (v) => again(t('erect.undo.crane'), (s) => { s.cranes[i][key] = v; return s; }), o);
    return el('fieldset', { className: 'dc-props dc-erect-crane', dataset: { crane: String(i) } },
      el('legend', {}, c.name || t('erect.crane.n', { n: i + 1 })),
      ...field(t('erect.crane.name'), name),
      ...field(t('erect.crane.x'), num(c.at[0], (v) => again(t('erect.undo.crane'), (s) => { s.cranes[i].at[0] = v; return s; }))),
      ...field(t('erect.crane.y'), num(c.at[1], (v) => again(t('erect.undo.crane'), (s) => { s.cranes[i].at[1] = v; return s; }))),
      ...field(t('erect.crane.hook'), set('hookHeight', { min: 0 })),
      ...field(t('erect.crane.deduct'), set('deductKg', { min: 0 })),
      ...field(t('erect.crane.speed'), set('speed', { min: 0.5 })),
      ...field(t('erect.crane.chart'), chart),
      el('p', { className: 'dc-note' }, t('erect.crane.chart.help')),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { craneDel: String(i) }, onclick: () => again(t('erect.undo.del'), (s) => { s.cranes.splice(i, 1); return s; }) }, t('erect.crane.del')));
  }

  function panel() {
    const s = setup(), out = [];
    out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, t('erect.title')),
      el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { erectMovie: '' }, onclick: saveMovie }, t('erect.movie')),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { erectCsv: '' }, onclick: saveCsv }, t('app.rep.csv'))));
    out.push(el('p', { className: 'dc-note' }, t('erect.intro')));
    s.cranes.forEach((c, i) => out.push(cranePanel(c, i)));
    out.push(el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { craneAdd: '' }, onclick: () => again(t('erect.undo.add'), (x) => { x.cranes.push(cleanCrane({ id: 'c' + (x.cranes.length + 1), name: '', at: [0, -8000], chart: [] }, x.cranes.length)); return x; }) }, t('erect.crane.add')));
    out.push(el('div', { className: 'dc-props' },
      ...field(t('erect.rigging'), num(s.riggingPct, (v) => again(t('erect.undo.setup'), (x) => { x.riggingPct = v; return x; }), { min: 0, max: 100 })),
      ...field(t('erect.limit'), num(Math.round(s.limit * 100), (v) => again(t('erect.undo.setup'), (x) => { x.limit = v / 100; return x; }), { min: 10, max: 100 })),
      ...field(t('erect.gap'), num(s.laydownGap, (v) => again(t('erect.undo.setup'), (x) => { x.laydownGap = v; return x; }), { min: 0 }))));
    app.setProblems?.(problems());
    if (!s.cranes.some((c) => c.chart.length)) { out.push(el('p', { className: 'dc-note', dataset: { erectNone: '' } }, t('erect.prob.nocrane'))); return out; }
    const pl = compute();
    if (!pl.picks.length) { out.push(el('p', { className: 'dc-note' }, t('erect.empty'))); return out; }
    const sm = pl.summary;
    out.push(el('p', { className: 'dc-note', dataset: { erectSummary: '' } }, t('erect.summary', { picks: sm.picks, kg: Math.round(sm.totalKg), min: Math.round(sm.minutes), over: sm.over, high: sm.high })));
    const head = el('tr', {}, ...['n', 'mark', 'phase', 'kg', 'radius', 'pct', 'status', 'start'].map((k) => el('th', {}, t('erect.col.' + k))));
    const rows = pl.picks.map((p) => el('tr', { className: p.status === 'ok' ? '' : 'is-' + p.status },
      el('td', {}, String(p.n)), el('td', {}, p.mark), el('td', {}, String(p.phase)), el('td', {}, String(Math.round(p.weight))), el('td', {}, String(Math.round(p.radius * 10) / 10)),
      el('td', {}, Number.isFinite(p.util) ? Math.round(p.util * 100) + '%' : '–'), el('td', {}, t('erect.status.' + p.status)), el('td', {}, String(Math.round(p.start)))));
    out.push(el('table', { className: 'dc-table', dataset: { erectTable: '' } }, el('thead', {}, head), el('tbody', {}, ...rows)));
    out.push(el('p', { className: 'dc-note' }, t('erect.note')));
    return out;
  }
  return { panel, problems, plan: compute };
}
