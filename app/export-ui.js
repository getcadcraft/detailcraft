/* SPDX-License-Identifier: Apache-2.0 */
/**
 * export-ui.js: detailcraft.js's 12 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountExports(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t as tr } from './i18n.js';
import { writeIfc } from './ifc.js';
import { ncRefusal, writeNc1 } from './nc1.js';
import { zip } from './zip.js';
import { bomTables } from './marks.js';
import { sectionsCsv, toCsv } from './csv.js';
import { cutListTables } from './nest.js';
import { phaseReport, reportCsv, reportSheets } from './report.js';
import { toPdf } from './pdf.js';
import { paperLabel } from './paper.js';
import { kissMetric, kissFile } from './kiss.js';
import { revsByNumber } from './issues.js';
import { scheduleTable } from './rebar.js';

export function mountExports(ctx) {
  const { print, safeName, download, nestResult, ask } = ctx;

  // ---- exports ----
  function exportIfc() {
    if (!ctx.built.parts.length && !ctx.model.state.footings.length && !ctx.rcb.items.length && !ctx.rcb.loose.length) { print(tr('app.export.nothing')); return; }
    const txt = writeIfc(ctx.model.state, ctx.built, ctx.marks, ctx.schedule, {});
    download(safeName() + '.ifc', txt, 'application/x-step');
    print(tr('app.export.ifc', { parts: ctx.built.parts.length, bolts: ctx.built.bolts.length, footings: ctx.model.state.footings.length, bars: ctx.built.footings.reduce((s, f) => s + f.bars.reduce((t, g) => t + g.count, 0), 0) }));
    if (ctx.rcb.items.length || ctx.rcb.loose.length) print(tr('app.export.ifc', { parts: ctx.built.parts.length, bolts: ctx.built.bolts.length, footings: ctx.model.state.footings.length, bars: ctx.built.footings.reduce((s, f) => s + f.bars.reduce((t, g) => t + g.count, 0), 0) }) + ' ' + tr('rc.export.ifc', { n: ctx.rcb.items.length, bars: ctx.rcb.items.reduce((s, i) => s + i.res.groups.reduce((t2, g) => t2 + g.count, 0), 0) + ctx.rcb.loose.reduce((s, g) => s + g.count, 0) }));
  }
  // 0.7 XF.8 (session usd): the steel model as USD — usd-detailcraft.js on cc-usd (./usd/, lib/usd synced)
  async function exportUsd() {
    if (!ctx.built.parts.length) { print(tr('app.export.nothing')); return; }
    const k = await ask({ title: tr('usd.dialog.title'), text: tr('usd.export.lede'), buttons: [['cancel', tr('app.ask.cancel'), 'btn-line'], ['usda', tr('usd.dialog.format.usda'), 'btn-line'], ['usdc', tr('usd.dialog.format.usdc'), 'btn-line'], ['usdz', tr('usd.dialog.format.usdz'), 'btn-plot']] });
    if (!['usda', 'usdc', 'usdz'].includes(k)) return;
    try {
      const { steelUsd } = await import('./usd-detailcraft.js');
      const r = steelUsd(ctx.built, ctx.marks, { format: k, name: safeName() });
      download(safeName() + '.' + k, new Blob([r.data], { type: k === 'usda' ? 'model/vnd.usda' : k === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream' }));
      print(tr('usd.done', { name: safeName() + '.' + k, n: r.report.parts }) + (r.report.notes.length ? ' ' + tr('usd.steel.not_in') : ''));
    } catch (err) { print(tr('usd.export.failed', { why: String(err.message || err) })); }
  }
  /** The NC1 files of every part that can have one: { files: [{ name, data }], skipped: [marks] }. */
  function ncFiles() {
    const files = [], skipped = [];
    for (const row of ctx.marks.parts) {
      const part = ctx.built.byId.get(row.ids[0]);
      const why = ncRefusal(part);
      if (why) { skipped.push(row.mark); continue; }
      files.push({ name: row.mark + '.nc1', data: writeNc1(part, { order: ctx.model.state.name, mark: row.mark, count: row.count, phase: String(part.phase || 1) }) });
    }
    return { files, skipped };
  }
  // 0.8 round 3 (EG.40): "Send NC to a machine…". Studio's desktop shell offers `window.ccSendToMachine({ app, kind, files: [{ name, bytes }], note }) → Promise<{ ok, sent, error? }>`
  // (the dialog that picks the machine, studio_PART_3) and the bridge `cadcraftDesktop.machines`; without both the button stays hidden. Files are uploaded, never started from here.
  const machinesReady = () => !!(window.ccSendToMachine && window.cadcraftDesktop && window.cadcraftDesktop.machines);
  async function sendNc() {
    if (!machinesReady()) { print(tr('ncsend.none')); return; }
    const { files, skipped } = ncFiles();
    if (!files.length) { print(tr(ctx.built.parts.length ? 'app.export.nc.none2' : 'app.export.nothing')); return; }
    const enc = new TextEncoder();
    try {
      const r = await window.ccSendToMachine({ app: 'detailcraft', kind: 'nc1', files: files.map((f) => ({ name: f.name, bytes: typeof f.data === 'string' ? enc.encode(f.data) : f.data })), note: ctx.model.state.name });
      if (r && r.ok) print(tr('ncsend.done', { n: r.sent ?? files.length }) + (skipped.length ? ' ' + tr('app.export.nc.skipped2', { marks: skipped.join(', ') }) : '') + ' ' + tr('app.export.nc.check'));
      else if (r && r.cancelled) print(tr('ncsend.cancelled'));
      else print(tr('ncsend.failed', { error: String((r && r.error) || '') }));
    } catch (err) { print(tr('ncsend.failed', { error: String(err && err.message || err) })); }
  }
  function exportNc() {
    const { files, skipped } = ncFiles();
    if (!files.length) { print(tr(ctx.built.parts.length ? 'app.export.nc.none2' : 'app.export.nothing')); return; }
    download(safeName() + ' NC.zip', new Blob([zip(files)], { type: 'application/zip' }));
    print(tr('app.export.nc.done', { n: files.length }) + (skipped.length ? ' ' + tr('app.export.nc.skipped2', { marks: skipped.join(', ') }) : '') + ' ' + tr('app.export.nc.check'));
  }
  function exportBom() {
    const t = bomTables(ctx.marks, ctx.built.bolts);
    download(safeName() + ' BOM.csv', '﻿' + sectionsCsv([[tr('app.k.parts'), t.parts], [tr('app.k.assemblies'), t.assemblies], [tr('app.rep.bolts'), t.bolts]]), 'text/csv');
    print(tr('app.export.bom', { n: ctx.marks.parts.length }));
  }

  function exportNest() {
    const T = cutListTables(nestResult());
    download(safeName() + ' ' + tr('nest.file') + '.csv', '\ufeff' + sectionsCsv([[tr('nest.summary'), T.summary], [tr('nest.bars'), T.bars]]), 'text/csv');
    print(tr('nest.saved'));
  }
  function exportReport() {
    const rep = phaseReport(ctx.model.state, ctx.built, ctx.marks, ctx.schedule);
    download(safeName() + ' ' + tr('rep.file') + '.csv', '\ufeff' + reportCsv(rep), 'text/csv');
    print(tr('rep.saved.csv', { n: rep.phases.length }));
  }
  async function exportReportPdf() {
    const rep = phaseReport(ctx.model.state, ctx.built, ctx.marks, ctx.schedule);
    const pages = reportSheets(rep, { paper: ctx.settings.paper, model: ctx.model.state.name, date: new Date().toISOString().slice(0, 10) });
    const { bytes, missing } = await toPdf(pages, { title: tr('rep.title') });
    download(safeName() + ' ' + tr('rep.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('rep.saved.pdf', { n: pages.length, paper: paperLabel(ctx.settings.paper) }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  }
  function exportKiss() {
    if (!ctx.built.parts.length) { print(tr('kiss.empty')); return; }
    const metric = ctx.settings.kiss === 'auto' ? kissMetric(ctx.built) : ctx.settings.kiss === 'metric';
    const r = kissFile(ctx.model.state, ctx.built, ctx.marks, { metric, revs: revsByNumber(ctx.model.state.issues) });
    download(safeName() + '.kss', r.text, 'text/plain');
    print(tr('kiss.saved', { job: r.job, units: tr(metric ? 'kiss.metric' : 'kiss.imperial'), d: r.counts.D, m: r.counts.M }));
  }
  function exportBending() {
    if (!ctx.schedule.rows.length) { print(tr('app.export.bending.none')); return; }
    download(safeName() + ' ' + tr('app.export.bending.file') + '.csv', '﻿' + toCsv(scheduleTable(ctx.schedule.rows, { codes: ctx.settings.shapeCodes, naming: ctx.settings.barNames })), 'text/csv');
    print(tr('app.export.bending', { n: ctx.schedule.rows.length }));
  }

  return { exportIfc, exportUsd, machinesReady, sendNc, exportNc, exportBom, exportNest, exportReport, exportReportPdf, exportKiss, exportBending };
}
