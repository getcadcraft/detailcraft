/* SPDX-License-Identifier: Apache-2.0 */
/**
 * report-panel-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountReportPanel(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { dcProblems } from './problems-detailcraft.js';
import { catalog as langCatalog } from './i18n.js';
import { el } from './ui-util.js';
import { t as tr } from './i18n.js';
import { bomTables } from './marks.js';
import { reportTables, phaseReport } from './report.js';
import { scheduleTable } from './rebar.js';

export function mountReportPanel(ctx) {
  const { ST, ui, setTool, select, refForPart, nestPanel, root } = ctx;

  function renderReport() {
    for (const t of root.querySelectorAll('[data-tab]')) { const on = t.dataset.tab === ST.reportTab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; }
    ui.countProblems.textContent = ST.built.problems.length ? '(' + ST.built.problems.length + ')' : '';
    ui.countClashes.textContent = ST.clashRes && ST.clashRes.clashes.length ? '(' + ST.clashRes.clashes.length + ')' : '';
    const out = [];
    if (ST.reportTab === 'problems') {
      // 0.7.1 → 0.8: with the shell's Problems panel, a line that opens it, and the problems accepted there marked here
      const sharedIds = window.ccProblems && ST.problemsSync ? dcProblems(ST.built, ST.model.state, { strings: langCatalog().strings }).map((p) => 'detailcraft.build:' + p.code + ':' + (p.about[0] ? p.about[0].kind + ':' + p.about[0].id : '') + (p.part ? '#' + p.part : '')) : null;
      if (sharedIds && ST.built.problems.length) out.push(el('p', { className: 'dc-note', dataset: { problemsShared: '' } }, tr('problems.tab.shared'), ' ', el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => window.ccProblems.open() }, tr('problems.tab.open'))));
      if (!ST.built.problems.length) out.push(el('p', { className: 'dc-note' }, tr('app.rep.problems.none')));
      else out.push(el('ul', { className: 'dc-msgs' }, ...ST.built.problems.map((x, i) => {
        const ref = x.ref?.startsWith('m') ? { kind: 'member', id: x.ref } : x.ref?.startsWith('j') ? { kind: 'conn', id: x.ref } : x.ref?.startsWith('f') ? { kind: 'footing', id: x.ref } : x.ref?.startsWith('s') ? { kind: 'stair', id: x.ref } : null;
        const acc = sharedIds && window.ccProblems.store.get(sharedIds[i])?.accepted;
        return el('li', { className: (x.hard ? 'is-hard' : '') + (acc ? ' is-accepted' : '') }, x.text, acc ? el('span', { className: 'dc-note' }, ' ' + tr('problems.tab.accepted', { reason: acc.reason })) : null, ref ? el('button', { type: 'button', onclick: () => { setTool('select'); select(ref); } }, tr('app.rep.select')) : null);
      })));
    } else if (ST.reportTab === 'bom') {
      const t = bomTables(ST.marks, ST.built.bolts);
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.parts', { kg: ctx.kg(t.totalWeight) })), el('button', { type: 'button', className: 'dc-linkbtn', onclick: ctx.exportBom }, tr('app.rep.csv'))));
      out.push(table(t.parts, [4, 5, 6, 7], (row) => { const p = ST.marks.parts.find((x) => x.mark === row[0]); return p ? refForPart(p.ids[0]) : null; }));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.assemblies'))), table(t.assemblies, [3, 4, 5]));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.bolts'))), table(t.bolts, [1, 2, 4]));
    } else if (ST.reportTab === 'clashes') {
      out.push(...ctx.clashPanel());
    } else if (ST.reportTab === 'nest') {
      out.push(...nestPanel());
    } else if (ST.reportTab === 'supply') {
      out.push(...ST.supply.panel());
    } else if (ST.reportTab === 'framing') {
      out.push(...ST.framing.panel());
    } else if (ST.reportTab === 'foundation') {
      out.push(...ST.foundation.panel());
    } else if (ST.reportTab === 'rc') {
      out.push(...ST.rcUi.panel());
    } else if (ST.reportTab === 'congestion') {
      out.push(...ST.congestion.panel());
    } else if (ST.reportTab === 'autopilot') {
      out.push(...ST.autopilot.panel());
    } else if (ST.reportTab === 'erection') {
      out.push(...ST.erection.panel());
    } else if (ST.reportTab === 'analysis') {
      out.push(...(ST.analysis ? ST.analysis.panel() : []));
    } else if (ST.reportTab === 'phases') {
      const T = reportTables(phaseReport(ST.model.state, ST.built, ST.marks, ST.schedule));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('rep.summary')),
        el('button', { type: 'button', className: 'dc-linkbtn', dataset: { repCsv: '' }, onclick: ctx.exportReport }, tr('rep.csv')),
        el('button', { type: 'button', className: 'dc-linkbtn', dataset: { repPdf: '' }, onclick: ctx.exportReportPdf }, tr('rep.pdf'))));
      out.push(table(T.summary, [1, 2, 3, 4, 5]));
      for (const p of T.phases) {
        out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, p.title)), table(p.parts, [4, 5, 6, 7, 8]));
        if (p.bolts.length > 1) out.push(table(p.bolts, [1, 2, 4]));
      }
      out.push(el('p', { className: 'dc-note' }, tr('rep.note')));
    } else {
      const rows = scheduleTable(ST.schedule.rows, { codes: ST.settings.shapeCodes, naming: ST.settings.barNames });
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.bending2', { codes: tr('app.codes.' + ST.settings.shapeCodes) })), el('button', { type: 'button', className: 'dc-linkbtn', onclick: ctx.exportBending }, tr('app.rep.csv'))));
      if (ST.schedule.rows.length) out.push(table(rows, [3, 4, 5, 6, 7, 8, 9, 10, 11]));
      else out.push(el('p', { className: 'dc-note' }, tr('app.rep.bending.none')));
    }
    ui.report.replaceChildren(...out);
  }
  /** A table's total row, in whichever words the reports wrote it (marks.js, rebar.js, report.js). */
  const isTotal = (c) => [tr('marks.total'), tr('rebar.total'), tr('rep.total')].includes(c);
  function table(rows, numeric = [], refOf = null) {
    const [head, ...body] = rows;
    const n = new Set(numeric);
    return el('table', { className: 'dc-table' },
      el('thead', {}, el('tr', {}, ...head.map((h, i) => el('th', { className: n.has(i) ? 'n' : '', scope: 'col' }, h)))),
      el('tbody', {}, ...body.map((r) => el('tr', { className: isTotal(r[0]) ? 'total' : '' }, ...r.map((c, i) => {
        if (i === 0 && refOf && !isTotal(r[0])) { const ref = refOf(r); if (ref) return el('td', {}, el('button', { type: 'button', onclick: () => { setTool('select'); select(ref); } }, c)); }
        return el('td', { className: n.has(i) ? 'n' : '' }, c);
      })))));
  }

  return { renderReport, table };
}
