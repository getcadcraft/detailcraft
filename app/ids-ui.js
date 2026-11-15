/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ids-ui.js — Output › Check against IDS… (0.7.1 71.25; map docs/apps/ids.md): the client's .ids file (buildingSMART Information
 * Delivery Specification) checked against the IFC this model exports (ifc.js writeIfc, read back by cc-ifc) with cc-ids (./ids/,
 * lib/ids synced). The IDS is remembered in the model file (state.ids, one undo step); every failure is a Problem (source
 * detailcraft.ids, kind check, warning) about the exported element by GlobalId — the export's GlobalIds come from the model name and
 * part ids, so they stay the same between runs and a click selects the member, connection, stair or footing it came from.
 * Re-checked a moment after every change (the store's debounce and time budget); the check report lists the IDS and each specification.
 *
 *   mountIds({ root, el, t, print, ifc() → IfcFile | null | Promise, readRecord(), writeRecord(rec | null) }) → { open(), changed() }
 */
import { cleanIdsRecord } from './ids/record.js';   // tiny; the checker (./ids/session.js and cc-ifc's schemas) loads only with an IDS

export function mountIds({ root, el, t, print = () => {}, ifc, readRecord, writeRecord }) {
  let session = null, src = null, dlg = null, busy = false, last = '';
  const ready = async () => session || (session = (await import('./ids/session.js')).idsSession({ t, setKey: 'ids', ifc }));
  const view = () => (session ? session.view() : null);
  const input = el('input', { type: 'file', accept: '.ids,.xml,application/xml,text/xml', hidden: true, dataset: { idsInput: '' } });
  input.addEventListener('change', () => { const f = input.files?.[0]; input.value = ''; loadFile(f); });
  root.append(input);

  function body() {
    const v = view();
    const rows = [el('p', { className: 'dc-note' }, t('ids.intro', { what: t('ids.what.export') }))];
    if (!v) rows.push(el('p', { dataset: { idsNone: '' } }, t('ids.none')));
    else {
      rows.push(el('h3', { className: 'dc-h', dataset: { idsTitle: '' } }, v.title));
      if (v.meta.length) rows.push(el('p', { className: 'dc-note' }, v.meta.join(', ')));
      rows.push(el('p', { className: 'dc-note' }, t('ids.remembered', { where: t('ids.where.project') })));
      if (v.changed) rows.push(el('p', { className: 'dc-warn' }, v.changed));
      if (v.error) rows.push(el('p', { className: 'dc-warn', role: 'alert' }, t('ids.err.read', { msg: v.error })));
      if (v.ifcError) rows.push(el('p', { className: 'dc-warn', role: 'alert' }, t('ids.err.ifc', { msg: v.ifcError })));
      if (v.issues.length) rows.push(el('details', {}, el('summary', { className: 'dc-note' }, t('ids.issues', { n: v.issues.length })), el('ul', {}, v.issues.slice(0, 50).map((x) => el('li', { className: 'dc-note' }, x)))));
      if (v.sum) rows.push(el('p', { dataset: { idsSum: '' } }, v.sum));
      if (v.specs.length) rows.push(el('ul', { className: 'dc-ids-specs', dataset: { idsSpecs: '' } }, v.specs.map((s) => el('li', { dataset: { idsSpec: s.status } },
        el('strong', { className: s.status === 'pass' ? 'dc-ids-pass' : 'dc-ids-fail' }, t('ids.spec.' + s.status)), ' ', s.name, el('br'), el('span', { className: 'dc-note' }, s.line + (s.mismatch ? ' ' + s.mismatch : ''))))));
    }
    return rows;
  }
  function render() {
    if (!dlg) return;
    const v = session?.state.record;
    dlg.querySelector('[data-ids-body]').replaceChildren(...body());
    dlg.querySelector('[data-ids-foot]').replaceChildren(
      el('button', { type: 'button', className: (v ? 'btn-line' : 'btn-plot') + ' btn-sm-dc', dataset: { idsLoad: '' }, onclick: () => input.click() }, v ? t('ids.load.other') : t('ids.load')),
      v ? el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { idsRun: '' }, disabled: busy, onclick: () => recheck() }, busy ? t('ids.running') : t('ids.run')) : null,
      v && window.ccProblems ? el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => { dlg.close(); window.ccProblems.open({}); } }, t('ids.show.problems')) : null,
      v ? el('button', { type: 'button', className: 'dc-linkbtn', dataset: { idsForget: '' }, onclick: () => forget() }, t('ids.forget')) : null,
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { key: 'close' }, onclick: () => dlg.close() }, t('ids.close')));
  }
  function open() {
    if (dlg) { dlg.querySelector('[data-ids-load], [data-ids-run]')?.focus(); return; }
    const before = document.activeElement;
    dlg = el('dialog', { className: 'dc-dialog dc-ids-dlg', 'aria-labelledby': 'dc-ids-h', dataset: { idsDialog: '' } },
      el('div', { className: 'dc-dlg' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-ids-h' }, t('ids.title'))),
        el('div', { className: 'dc-ids-body', dataset: { idsBody: '' } }),
        el('div', { className: 'dc-dlg-foot', dataset: { idsFoot: '' } })));
    dlg.addEventListener('close', () => { dlg.remove(); dlg = null; try { before?.focus?.(); } catch (e) { /* gone */ } });
    root.append(dlg);
    render();
    dlg.showModal();
    dlg.querySelector('[data-ids-load], [data-ids-run]')?.focus();
  }

  async function recheck() {
    busy = true; render();
    try {
      await ready();
      if (src) await src.recheck(); else await session.run();
      const r = session.state.result;
      if (r) print(t('ids.done', { title: session.state.ids?.info?.title || session.state.record?.name || '', pass: r.counts.pass, n: r.counts.specs }));
    } finally { busy = false; render(); }
  }
  async function loadFile(f) {
    if (!f) return;
    try { await ready(); session.load(await f.text(), f.name); } catch (e) { print(t('ids.err.read', { msg: String(e?.message || e) })); render(); return; }
    last = session.state.record.hash;
    writeRecord(session.state.record);   // one undo step; the model's change hook calls changed()
    await recheck();
  }
  function forget() { session?.clear(); last = ''; writeRecord(null); src?.clear(); render(); }

  const go = () => {
    const P = window.ccProblems;
    if (!P || src) return;
    src = P.source({ id: 'detailcraft.ids', kind: 'check', label: t('ids.source'), run: () => (session ? session.run().then((list) => { render(); return list; }) : []), summary: () => session?.summary() || null, budgetMs: 150 });
    if (session?.state.record) src.invalidate();
  };
  if (document.getElementById('cc-problems')) { if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true }); }

  /** The model changed (an edit, undo, redo, a file opened): read the remembered IDS again and re-check. */
  async function changed() {
    const rec = cleanIdsRecord(readRecord());
    const h = rec ? rec.hash || rec.text.length + ':' + rec.text.slice(0, 64) : '';
    if (h !== last) {
      last = h;
      if (rec) await ready();
      if (h !== last) return;   // another change came in while the checker loaded: that call carries on
      session?.use(rec);
      if (!rec) src?.clear();
    }
    if (session?.state.record) { if (src) src.invalidate(); else session.run().then(render); }
    render();
  }
  changed();
  return { open, changed, session, recheck };
}
