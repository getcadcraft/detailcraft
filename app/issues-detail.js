/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issues-detail.js: DetailCraft's side of the shared issue history (0.10 BK.48; session bk-r3-stages-10). DetailCraft already issues
 * its shop drawings sheet by sheet (issues.js: revision letters, content prints, revision clouds). Those issues are shown through
 * the shared model (issuelog/history.js fromSheetIssues: the entries of one date and note are one issue), never stored twice; what
 * is added is kept in the model file under `issuelog`: records against an issue (a site instruction, a shop drawing sent back,
 * a linked model) and issues read from another app's `*.issues.json`. One undo step per change; older builds ignore the key.
 *
 *   ownHistory(state, titles) → history (DetailCraft's own issues in the shared shape)
 *   mountDetailIssues({ root, t, model() → Model, titles() → Map(sheet id → title), download(data, name, type) }) → { panel, render } | null
 */
import { mountIssuePanel } from './issuelog/panel.js';
import { fileHost } from './issuelog/host.js';
import { fromSheetIssues } from './issuelog/history.js';

export const ownHistory = (state, titles = null) => fromSheetIssues(state?.issues || [], { app: 'detailcraft', purpose: 'construction', titles });

export function mountDetailIssues({ root, t, model, titles = () => null, download }) {
  const box = root?.querySelector('[data-issues]');
  if (!box) return null;
  const host = fileHost({
    t, app: 'detailcraft', read: () => model().state.issuelog || null,
    write: (history, label) => { const m = model(); m.change(label || t('issues.title'), () => { m.state.issuelog = history; }); },
    own: () => ownHistory(model().state, titles()),
    cls: { button: 'btn-line btn-sm-cc', input: 'dc-input', table: 'dc-table', muted: 'dc-muted', note: 'dc-note' },
    download: (name, data, type) => download(data, name, type), today: () => new Date().toISOString().slice(0, 10), who: () => '',
    fileBase: () => String(model().state.name || 'model'),
  });
  const panel = mountIssuePanel(box, host);
  const note = () => { if (!box.querySelector('[data-il-own]')) { const p = document.createElement('p'); p.className = 'dc-muted'; p.dataset.ilOwn = ''; p.textContent = t('issues.own.note'); box.prepend(p); } };
  const render = () => { if (box.isConnected) { panel.render(); note(); } };
  root.querySelector('[data-issues-details]')?.addEventListener('toggle', (e) => { if (e.target.open) render(); });
  note();
  return { panel, render, host };
}
