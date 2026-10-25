/* SPDX-License-Identifier: Apache-2.0 */
/**
 * analysis-ui.js — DetailCraft's Analysis tab (0.6 LC.4): the shared frame analysis panel (frame/frame-panel.js, the same
 * in BimCraft) on this app's model, selection, undo, downloads and 3D view. analysis.js builds the analytical model;
 * analysis-view.js draws results on the view. An analysis aid, not a code check.
 *
 *   mountAnalysis(app) → the panel ({ panel(), run(), modelChanged(), clear(), result, setMode, setSet })
 *   app = { getModel, getView, edit(label, fn), selected() → refs, select(ref), print(text), download(name, data, type),
 *           safeName(), rerender() }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ANALYSIS_DEFAULTS, cleanAnalysis, analyse, MEMBER_KINDS } from './analysis.js';
import { framePanel } from './frame/frame-panel.js';
import { showResults, clearResults, showUtilisation, clearUtilisation } from './analysis-view.js';

export function mountAnalysis(app) {
  const model = () => app.getModel();
  return framePanel({
    el, t,
    cls: { block: 'dc-block', note: 'dc-note', head: 'dc-rep-head', table: 'dc-table fa-table', btn: 'btn-line btn-sm-dc', primary: 'btn-plot btn-sm-dc', link: 'dc-linkbtn', select: 'select-cc fa-select', input: 'form-control fa-input', error: 'fa-error' },
    version: () => model().version,
    analysis: () => model().state.analysis || ANALYSIS_DEFAULTS(t),
    setAnalysis: (label, next) => { const clean = cleanAnalysis(next); return app.edit(label, (tx) => { tx.s.analysis = clean; }); },
    analyse: () => analyse(model().state, model().state.analysis || ANALYSIS_DEFAULTS(t)),
    selection: () => app.selected().filter((r) => r.kind === 'member' && MEMBER_KINDS.includes(model().member(r.id)?.type)).map((r) => r.id),
    member: (id) => {
      const m = model().member(id);
      return m ? { label: m.name || id, type: m.type, profile: m.profile, start: m.start, end: m.end } : null;
    },
    select: (id) => app.select({ kind: 'member', id }),
    print: app.print,
    download: app.download,
    fileName: app.safeName,
    show: (frame, sol, key, o) => showResults(app.getView(), frame, sol, key, o),
    hide: () => clearResults(app.getView()),
    design: true,       // sections carry an I shape (analysis.js shapeOf), so the Design checks block shows
    showUtil: (frame, map) => (map ? showUtilisation(app.getView(), frame, map) : clearUtilisation(app.getView())),
    rerender: app.rerender,
  });
}
