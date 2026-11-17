/* SPDX-License-Identifier: Apache-2.0 */
/**
 * drawings-ui.js: detailcraft.js's 23 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountDrawings(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { drawingSet } from './drawings.js';
import { toPdf } from './pdf.js';
import { t as tr } from './i18n.js';
import { PAPER_KEYS, paperLabel, DEFAULT_PAPER } from './paper.js';
import { sheetStatus, planIssue } from './issues.js';
import { el } from './ui-util.js';
import { sheetDxf, sheetModel } from './dwgout.js';
import { zip } from './zip.js';
import { shopSet } from './shop.js';

export function mountDrawings(ctx) {
  const { ui, print, fillPaper, setSetting, edit, selectedPart, safeName, download, exportNc, exportIfc, restoreFocus, mm } = ctx;

  function makeDrawings(paper = ctx.settings.paper, titleBlock = null) { return drawingSet(ctx.model.state, ctx.built, ctx.marks, { date: (titleBlock?.use && titleBlock.date) || new Date().toISOString().slice(0, 10), paper, titleBlock }); }
  /** The whole set as one PDF and its download: the drawings dialog's "all sheets" button, and the export set's entry (exportSet). */
  async function saveSetPdf(set) {
    const { bytes, missing } = await toPdf(set.sheets, { title: tr('app.dwg.pdf-title', { name: ctx.model.state.name }) });
    download(safeName() + ' ' + tr('app.dwg.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.dwg.saved.pdf', { n: set.sheets.length, ref: set.ref }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  }
  /**
   * The export set's entry (SuperCad Studio's Finalize and export, SC.7): the Output menu's writers run with options instead of the drawings dialog; the files
   * leave through the same download. sheets() → the drawing set's sheets with their issue revision; can(kind) → null | 'empty' | 'unknown';
   * run(kind, o) → [{ sheets }] for the PDF (one entry per page, in page order). o = { paper: 'iso-a3' | 'A3' … (else the sheet size in Settings) }
   */
  const paperOf = (k) => { const x = k === 'tabloid' ? 'ANSI-B' : String(k || '').replace(/^iso-/i, '').toUpperCase(); return PAPER_KEYS.includes(x) ? x : ctx.settings.paper; };   // tabloid is this app's ANSI B
  const sheetRows = (set, block = false) => { const st = sheetStatus(set.sheets, ctx.model.state.issues); return set.sheets.map((sh) => ({ id: sh.id, number: sh.number, title: sh.title, scale: sh.scale, revision: st.get(sh.id)?.rev || '', paper: set.paper, block })); };
  const exportSet = {
    kinds: ['pdf', 'dstv', 'ifc'],
    sheets: () => (ctx.built.parts.length ? sheetRows(makeDrawings()) : []),
    can: (kind) => (!exportSet.kinds.includes(kind) ? 'unknown' : ctx.built.parts.length ? null : 'empty'),
    async run(kind, o = {}) {
      if (kind === 'pdf') { const set = makeDrawings(paperOf(o.paper), o.titleBlock || null); if (!set.sheets.length) return []; await saveSetPdf(set); return [{ sheets: sheetRows(set, !!o.titleBlock) }]; }   // o.titleBlock: the project's fields go in the sheets' own title block
      if (kind === 'dstv') await exportNc(); else if (kind === 'ifc') await exportIfc();
      return [];
    },
  };
  function openDrawings() {
    if (!ctx.built.parts.length) { print(tr('app.dwg.nothing')); return; }
    if (!fillDrawings(0)) return;
    ctx.lastFocus = document.activeElement;
    ui.dwg.showModal();
    requestAnimationFrame(() => drawList(ui.dwgCanvas, ctx.dwgSet.sheets[Number(ui.dwgSheet.value) || 0]));
    ui.dwgSheet.focus();
  }
  /** (Re)makes the set on the chosen sheet size and fills the dialog; keeps the sheet shown. */
  function fillDrawings(at) {
    ctx.dwgSet = makeDrawings();
    if (!ctx.dwgSet.sheets.length) { print(tr('app.dwg.empty')); return false; }
    const st = sheetStatus(ctx.dwgSet.sheets, ctx.model.state.issues);
    const tag = (sh) => { const x = st.get(sh.id); return !x.issued ? '' : x.changed ? ' ' + tr('issue.tag.changed', { rev: x.rev }) : ' ' + tr('issue.tag.rev', { rev: x.rev }); };
    ui.dwgSheet.replaceChildren(...ctx.dwgSet.sheets.map((sh, i) => el('option', { value: String(i) }, sh.number + ' — ' + sh.title + ' (' + sh.scale + ')' + tag(sh))));
    ui.dwgSheet.value = String(Math.min(at, ctx.dwgSet.sheets.length - 1));
    syncIssue();
    fillPaper(ui.dwgPaper);
    ui.dwgNote.textContent = tr('dwg.note', { n: ctx.dwgSet.sheets.length, paper: paperLabel(ctx.dwgSet.paper), ref: ctx.dwgSet.ref });
    return true;
  }
  ui.dwgPaper.addEventListener('change', () => {
    setSetting('paper', PAPER_KEYS.includes(ui.dwgPaper.value) ? ui.dwgPaper.value : DEFAULT_PAPER, tr('dwg.paper.set', { paper: paperLabel(ui.dwgPaper.value) }));
    if (ctx.dwgSet && fillDrawings(Number(ui.dwgSheet.value) || 0)) drawList(ui.dwgCanvas, ctx.dwgSet.sheets[Number(ui.dwgSheet.value)]);
  });
  ui.dwgSheet.addEventListener('change', () => { if (ctx.dwgSet) { drawList(ui.dwgCanvas, ctx.dwgSet.sheets[Number(ui.dwgSheet.value)]); syncIssue(); } });
  // ---- issue log (D17) ----
  function syncIssue() {
    if (!ctx.dwgSet) return;
    const st = sheetStatus(ctx.dwgSet.sheets, ctx.model.state.issues);
    const sh = ctx.dwgSet.sheets[Number(ui.dwgSheet.value)], x = st.get(sh.id);
    ui.issueStatus.textContent = !x.issued ? tr('issue.st.new') : x.changed ? tr('issue.st.changed', { rev: x.rev, date: x.date }) : tr('issue.st.current', { rev: x.rev, date: x.date });
    ui.issueStatus.classList.toggle('is-changed', x.issued && x.changed);
    ui.issueOne.disabled = x.issued && !x.changed;
    ui.issueOne.title = ui.issueOne.disabled ? tr('issue.one.why') : '';
    const n = ctx.dwgSet.sheets.filter((s2) => st.get(s2.id).changed).length;
    ui.issueAll.textContent = tr('issue.all', { n });
    ui.issueAll.disabled = !n;
  }
  function issueSheets(ids) {
    const date = new Date().toISOString().slice(0, 10);
    const list = planIssue(ctx.dwgSet.sheets, ctx.model.state.issues, ids, { date, note: ui.issueNote.value });
    if (!list.length) return;
    if (!edit(tr('issue.undo'), (tx) => tx.addIssues(list))) return;
    const at = Number(ui.dwgSheet.value) || 0;
    if (fillDrawings(at)) drawList(ui.dwgCanvas, ctx.dwgSet.sheets[Number(ui.dwgSheet.value)]);
    print(list.length === 1 ? tr('issue.done.one', { number: list[0].number, rev: list[0].rev }) : tr('issue.done.all', { n: list.length }));
  }
  ui.issueOne.addEventListener('click', () => { if (ctx.dwgSet) issueSheets([ctx.dwgSet.sheets[Number(ui.dwgSheet.value)].id]); });
  ui.issueAll.addEventListener('click', () => { if (ctx.dwgSet) { const st = sheetStatus(ctx.dwgSet.sheets, ctx.model.state.issues); issueSheets(ctx.dwgSet.sheets.filter((s2) => st.get(s2.id).changed).map((s2) => s2.id)); } });
  ui.dwgClose.addEventListener('click', () => ui.dwg.close());
  ui.dwg.addEventListener('close', () => { ctx.dwgSet = null; restoreFocus(); });
  // PDF, DWG (cc-dwg's writer, loaded on first use) or DXF R12 (dwgout.js); several DWG / DXF sheets go in one zip
  const fmtName = () => ui.dwgFormat.selectedOptions[0]?.textContent || 'PDF';
  function syncFormat() {
    ui.dwgOneLabel.textContent = tr('dwg.one', { format: fmtName() });
    ui.dwgAllLabel.textContent = tr('dwg.all', { format: fmtName() });
  }
  ui.dwgFormat.addEventListener('change', syncFormat);
  syncFormat();
  let dwgWriter = null;
  async function cadFiles(sheets) {
    const f = ui.dwgFormat.value;
    const name = (sh) => safeName() + ' ' + sh.number + (f === 'dxf' ? '.dxf' : '.dwg');
    if (f === 'dxf') {
      let fills = 0;
      const files = sheets.map((sh) => { const r = sheetDxf(sh, { title: sh.title }); fills += r.notes.reduce((t, n) => t + n.n, 0); return { name: name(sh), data: latin1(r.text) }; });
      return { files, notes: fills ? [tr('dxf.note.fills', { n: fills })] : [] };
    }
    if (!dwgWriter) {
      try { dwgWriter = await import('./dwg/write.js'); }
      catch { print(tr('dwg.nowriter')); return null; }
    }
    const version = f.slice(4), notes = [];
    const files = sheets.map((sh) => { const r = dwgWriter.writeDwg(sheetModel(sh, { title: sh.title }), { version }); notes.push(...r.report.notes); return { name: name(sh), data: r.bytes }; });
    return { files, notes };
  }
  const latin1 = (s) => Uint8Array.from(s, (c) => c.charCodeAt(0) & 255);
  async function saveCad(sheets, all) {
    const r = await cadFiles(sheets);
    if (!r) return;
    const ext = ui.dwgFormat.value === 'dxf' ? 'DXF' : 'DWG';
    if (r.files.length === 1) download(r.files[0].name, new Blob([r.files[0].data], { type: 'application/octet-stream' }));
    else download(safeName() + ' ' + tr('app.dwg.file') + ' ' + ext + '.zip', new Blob([zip(r.files)], { type: 'application/zip' }));
    print(tr(all ? 'dwg.saved.all' : 'dwg.saved.one', { n: r.files.length, format: fmtName(), paper: paperLabel(ctx.dwgSet.paper) }) + (r.notes.length ? ' ' + r.notes.join(' ') : ''));
  }
  ui.dwgAll.addEventListener('click', async () => {
    if (!ctx.dwgSet) return;
    if (ui.dwgFormat.value !== 'pdf') return saveCad(ctx.dwgSet.sheets, true);
    await saveSetPdf(ctx.dwgSet);
  });
  ui.dwgOne.addEventListener('click', async () => {
    if (!ctx.dwgSet) return;
    const sh = ctx.dwgSet.sheets[Number(ui.dwgSheet.value)];
    if (ui.dwgFormat.value !== 'pdf') return saveCad([sh], false);
    const { bytes } = await toPdf(sh, { title: sh.number + ' ' + sh.title });
    download(safeName() + ' ' + sh.number + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.dwg.saved.sheet', { number: sh.number }));
  });

  // ---- shop drawing dialog ----
  let shopSheets = null, shopList = null, shopMark = '';
  function openShop() {
    if (!ctx.built.parts.length) { print(tr('app.dwg.nothing')); return; }
    const part = selectedPart();
    if (!fillShop(part ? part.id : null, 0)) return;
    ctx.lastFocus = document.activeElement;
    ui.shop.showModal();
    requestAnimationFrame(drawShop);
    ui.shopPdf.focus();
  }
  /** (Re)makes the set: one sheet per part mark, on the chosen sheet size. Opens on the part's own mark, else on sheet `at`. */
  function fillShop(partId, at) {
    const date = new Date().toISOString().slice(0, 10);
    const weld = (part) => { const w = ctx.built.welds.find((x) => x.between.includes(part.id)); return w ? tr('app.shop.weld', { size: w.size, where: w.where.toLowerCase() }) : ''; };
    const set = shopSet(ctx.built, ctx.marks, { model: ctx.model.state.name, date, paper: ctx.settings.paper, weld });
    if (!set.sheets.length) { print(tr('app.dwg.empty')); return false; }
    shopSheets = set.sheets;
    const own = partId ? shopSheets.findIndex((s) => s.ids.includes(partId)) : -1;
    ui.shopSheet.replaceChildren(...shopSheets.map((s, i) => el('option', { value: String(i) }, s.mark + ' — ' + s.profileName + ' x ' + mm(s.length) + (s.count > 1 ? ' (' + s.count + ')' : ''))));
    ui.shopSheet.value = String(own >= 0 ? own : Math.min(at, shopSheets.length - 1));
    ui.shopAll.lastChild.textContent = ' ' + tr('shop.all', { n: shopSheets.length });
    fillPaper(ui.shopPaper);
    showShop();
    return true;
  }
  function showShop() {
    const s = shopSheets[Number(ui.shopSheet.value)] || shopSheets[0];
    shopList = s; shopMark = s.mark;
    ui.shopH.textContent = tr('app.shop.title', { mark: shopMark });
    ui.shopNote.textContent = tr('shop.note', { part: s.profileName + ' x ' + mm(s.length), n: s.count, paper: paperLabel(s.paper) });
  }
  ui.shopSheet.addEventListener('change', () => { if (shopSheets) { showShop(); drawShop(); } });
  ui.shopPaper.addEventListener('change', () => {
    setSetting('paper', PAPER_KEYS.includes(ui.shopPaper.value) ? ui.shopPaper.value : DEFAULT_PAPER, tr('dwg.paper.set', { paper: paperLabel(ui.shopPaper.value) }));
    if (shopSheets && fillShop(null, Number(ui.shopSheet.value) || 0)) drawShop();
  });
  function drawShop() { if (shopList) drawList(ui.shopCanvas, shopList); }
  /** Paints a display list (pdf.js items, mm, y up) on a canvas, white paper, black ink. */
  function drawList(c, list) {
    if (!list) return;
    const r = c.getBoundingClientRect(), dpr = Math.min(window.devicePixelRatio || 1, 2);
    c.width = Math.max(1, Math.round(r.width * dpr)); c.height = Math.max(1, Math.round(r.height * dpr));
    const ctx = c.getContext('2d');
    const k = Math.min(c.width / list.w, c.height / list.h);
    ctx.fillStyle = '#ffffff'; ctx.fillRect(0, 0, c.width, c.height);
    ctx.setTransform(k, 0, 0, -k, (c.width - list.w * k) / 2, (c.height + list.h * k) / 2);
    ctx.strokeStyle = '#000'; ctx.fillStyle = '#000'; ctx.lineCap = 'round'; ctx.lineJoin = 'round';
    for (const it of list.items) {
      if (it.k === 'path' || it.k === 'circle') {
        ctx.lineWidth = Math.max(it.w ?? 0.25, 0.6 / k * dpr * 0.5);
        ctx.setLineDash(it.dash || []);
        ctx.beginPath();
        if (it.k === 'circle') ctx.arc(it.c[0], it.c[1], it.r, 0, Math.PI * 2);
        else { ctx.moveTo(it.pts[0][0], it.pts[0][1]); for (const p of it.pts.slice(1)) ctx.lineTo(p[0], p[1]); if (it.closed) ctx.closePath(); }
        if (it.fill) ctx.fill(); else ctx.stroke();
      } else if (it.k === 'text') {
        ctx.save();
        ctx.translate(it.x, it.y); ctx.rotate(it.rot || 0); ctx.scale(1, -1);
        ctx.font = (it.bold ? '700 ' : '400 ') + it.h + 'px Helvetica, Arial, sans-serif';   // i18n-ignore (CSS font)
        ctx.textAlign = it.align || 'left'; ctx.textBaseline = 'alphabetic';
        ctx.fillText(it.s, 0, 0);
        ctx.restore();
      }
    }
    ctx.setLineDash([]);
  }
  ui.shopPdf.addEventListener('click', async () => {
    if (!shopList) return;
    const { bytes, missing } = await toPdf(shopList, { title: tr('app.shop.title', { mark: shopMark }) });
    download(safeName() + ' ' + shopMark + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.shop.saved', { mark: shopMark }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  });
  ui.shopAll.addEventListener('click', async () => {
    if (!shopSheets) return;
    const { bytes, missing } = await toPdf(shopSheets, { title: tr('app.shop.set-title', { name: ctx.model.state.name }) });
    download(safeName() + ' ' + tr('app.shop.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.shop.saved.all', { n: shopSheets.length }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  });
  ui.shopClose.addEventListener('click', () => ui.shop.close());
  ui.shop.addEventListener('close', () => { shopSheets = null; shopList = null; restoreFocus(); });

  return { makeDrawings, exportSet, openDrawings, openShop, drawList };
}
