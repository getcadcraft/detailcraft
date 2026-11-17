/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc-import-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountIfcImport(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t as tr } from './i18n.js';
import { importIfc, reportLines } from './ifc-import.js';
import { Model } from './model.js';
import { el } from './ui-util.js';

export function mountIfcImport(ctx) {
  const { print, setModel, setTool, table, confirmDiscard, bytesOf, restoreFocus, root } = ctx;

  // ---- IFC import (cc-ifc, ./ifc/, loads on first use) ----
  let ifcLib = null;
  async function openIfc(file) {
    if (file.size > 200 * 1024 * 1024) { print(tr('app.ifc.too-big')); return; }
    if (!(await confirmDiscard())) return;
    print(tr('app.ifc.reading', { file: file.name }));
    try {
      if (!ifcLib) {
        const W = await import('./ifc/api.js');   // cc-ifc, our own IFC engine (0.4 I.11; was web-ifc)
        const api = new W.IfcAPI();
        await api.Init();
        ifcLib = { W, api };
      }
      const { state, report } = await importIfc(ifcLib.W, ifcLib.api, await bytesOf(file), { name: file.name.replace(/\.ifc$/i, '') });
      const m = new Model(state);
      m.version = 1;                      // an imported model is not saved yet
      setModel(m);
      setTool('select');
      const n = state.members.length;
      print(tr('app.ifc.imported', { file: file.name, n, levels: state.levels.length, grids: state.grids.x.length + state.grids.y.length, other: report.notConverted.reduce((t, r) => t + r.n, 0) }));
      showImportReport(file.name, report);
    } catch (err) { print(tr('app.ifc.error', { file: file.name, error: String(err.message || err) })); }
  }
  function showImportReport(fileName, report) {
    ctx.lastFocus = document.activeElement;
    const body = [...reportLines(report).map((t) => el('p', {}, t)), ...report.warnings.map((t) => el('p', { className: 'dc-warn' }, t))];
    if (report.notConverted.length) {
      body.push(el('p', {}, tr('app.ifc.rep.by-class')));
      body.push(table([[tr('app.ifc.rep.class'), tr('app.ifc.rep.count'), tr('app.ifc.rep.why')], ...report.notConverted.map((r) => [r.cls, String(r.n), r.why])], [1]));
    } else body.push(el('p', {}, tr('app.ifc.rep.all')));
    body.push(el('p', { className: 'dc-note' }, tr('app.ifc.rep.note')));
    const dlg = el('dialog', { className: 'dc-dialog dc-report-dlg', 'aria-labelledby': 'dc-rep-h' },
      el('div', { className: 'dc-dlg' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-rep-h' }, tr('app.ifc.rep.title', { file: fileName }))),
        el('div', { className: 'dc-report-body', dataset: { importReport: '' } }, ...body),
        el('div', { className: 'dc-dlg-foot' }, el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { key: 'ok' } }, tr('app.ok')))));
    dlg.addEventListener('click', (e) => { if (e.target.closest('button[data-key]')) dlg.close(); });
    dlg.addEventListener('close', () => { dlg.remove(); restoreFocus(); });
    root.append(dlg);
    dlg.showModal();
    dlg.querySelector('button[data-key]').focus();
  }

  return { openIfc };
}
