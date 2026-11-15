/* SPDX-License-Identifier: Apache-2.0 */
/**
 * analysis-ui.js — DetailCraft's Analysis tab (0.6 LC.4): the shared frame analysis panel (frame/frame-panel.js, the same
 * in BimCraft) on this app's model, selection, undo, downloads and 3D view. analysis.js builds the analytical model;
 * analysis-view.js draws results on the view. An analysis aid, not a code check.
 *
 *   mountAnalysis(app) → the panel ({ panel(), run(), modelChanged(), clear(), result, setMode, setSet })
 *   app = { getModel, getView, edit(label, fn), selected() → refs, select(ref), print(text), download(name, data, type),
 *           safeName(), rerender(), setFrameProblems(list), setBreakProblems(list) }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { ANALYSIS_DEFAULTS, cleanAnalysis, analyse, sectionsOf, MEMBER_KINDS } from './analysis.js';
import { framePanel } from './frame/frame-panel.js';
import { modalOfFrame, modeSolution, MODAL_NOTE } from './fem/frame-fem.js';
import { DYN } from './fem/frame-dyn.js';   // 0.9 SU.1056: response spectrum, time history, pushover (lib/fem)   // 0.9 SU.908: natural frequencies (lib/fem)
import { showResults, clearResults, showUtilisation, clearUtilisation } from './analysis-view.js';
import * as B from './study/breakit.js';   // 0.8 round 3 (EG.31): findings, reserve, Problems (lib/study, copied by tools/study/sync.mjs)
import { frameLive } from './study/live.js';   // 0.8 round 3 (EG.29): live re-solve
import { boltShearKN } from './autopilot.js';

/**
 * The joints Break it can speak of: the end plates and shear tabs, by what their bolts carry in shear (autopilot.js boltShearKN: AISC 360-16 J3.6, φ = 0.75). A shear tab has one
 * column of `rows` bolts, an end plate `rows` rows of two. Nothing else about a joint (bearing, block shear, welds, prying) is stated, so nothing else is checked. The ends are
 * the beam's end pieces in the analytical model (frame ids are the drawn id, or the drawn id and .n where it was split).
 */
export function breakConnections(state, frame) {
  const out = [];
  for (const c of state.connections || []) {
    if (c.type !== 'endplate' && c.type !== 'sheartab') continue;
    const p = c.params || {}, rows = Math.round(p.rows);
    if (!(rows > 0) || !(p.boltD > 0)) continue;
    const list = frame.parts.get(c.beam);
    if (!list || !list.length) continue;
    const start = c.end === 'start', piece = start ? list[0] : list[list.length - 1], mem = frame.model.members[piece.k];
    if (!mem) continue;
    out.push({ id: c.id, label: c.id, ends: [{ member: mem.id, end: start ? 'i' : 'j' }], shear: (c.type === 'endplate' ? 2 : 1) * rows * boltShearKN(p.boltD, p.grade) * 1000 });
  }
  return out;
}
const drawnId = (id) => String(id).replace(/\.\d+$/, '');
/** Findings point at analytical ids: back to what the person drew (a split member's pieces → the member; a connection is a `conn`). */
export function breakAbout(list) {
  // the reserve finding is about the same combination as the governing one: its own id and words (it has a load factor and no utilisation)
  const own = (p) => (p.code === 'breakit.combo' && p.msg?.vars && p.msg.vars.util === undefined ? { ...p, id: p.id + ':reserve', code: 'breakit.reserve', msg: { key: 'breakit.p.reserve' + (p.severity === 'error' ? '.fail' : ''), vars: p.msg.vars } } : p);
  return list.map(own).map((p) => ({ ...p, about: p.about.filter((a) => a.kind !== 'combo').map((a) => (a.kind === 'connection' ? { ...a, kind: 'conn' } : a.kind === 'member' ? { ...a, id: drawnId(a.id) } : a)) }));
}

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
    fem: { modal: modalOfFrame, modeSolution, note: MODAL_NOTE, dyn: DYN },   // 0.9 SU.908: the Finite elements block (natural frequencies)
    concrete: true,     // 0.8 SU.1056: the Concrete and Seismic blocks
    sections: () => sectionsOf(model().state),
    problems: (list) => app.setFrameProblems?.(list),
    breakit: { B, source: 'detailcraft.breakit', connections: (frame) => breakConnections(model().state, frame), setProblems: (list) => app.setBreakProblems?.(breakAbout(list)) },
    live: { frameLive },
    rerender: app.rerender,
  });
}
