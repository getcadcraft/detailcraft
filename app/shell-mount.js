/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — DetailCraft attaches the shell's seven modules (0.8 round 3, detail_PART_3; docs/apps/shell-modules.md § Mounting):
 * calc sheets (EG.18), design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the
 * Ask box (AC.8). The block in mountShellModules is the doc's, unchanged; detailHost() is what DetailCraft hands over as `host`.
 *
 *   mountDetailShell(dc) — dc = { model(), built(), schedule(), selected(), setSelection(refs), describe(ref), control, onSelection(fn) → off,
 *                                 name(), path() }
 * Calc sheets, reasons and the drawing details are saved in the model file under `calcs`, `reasons` and `docinfo` (the details are stamped by beforeSave) (model.js readModel keeps them; null removes the key).
 */
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { t as tr } from './i18n.js';
import { mountShellModules as mountCore } from './shell-mount-core.js';   // the doc's block, shared (0.11 PERF.74)

/** The doc's block, now the shared shell-mount-core.js (0.11 PERF.74), with this app's two differences. */
export function mountShellModules(host) { return mountCore(host, { titleFollow: false, opened: () => 'A file was opened.' }); }   // i18n-ignore: the words this app's copy of the block had; modelChanged passes the translated words

const sum = (list, f) => list.reduce((s, x) => s + (Number(f(x)) || 0), 0);

/** The first lesson: steps the model itself can answer (probes), so nothing is taken on trust. */
function lessonsOf(dc) {
  const st = () => dc.model().state;
  return {
    lessons: [{
      id: 'first-frame', title: tr('lesson.frame.title'), intro: tr('lesson.frame.intro'), level: 'beginner',
      steps: [
        { id: 'columns', text: tr('lesson.frame.columns'), hints: [tr('lesson.frame.columns.h1'), tr('lesson.frame.columns.h2')], done: { probe: 'dc-columns' } },
        { id: 'beam', text: tr('lesson.frame.beam'), hints: [tr('lesson.frame.beam.h1')], done: { probe: 'dc-beam' } },
        { id: 'plates', text: tr('lesson.frame.plates'), hints: [tr('lesson.frame.plates.h1')], done: { probe: 'dc-endplates' } },
        { id: 'save', text: tr('lesson.frame.save'), hints: [tr('lesson.frame.save.h1')], done: { probe: 'dc-saved' } },
      ],
      badge: { title: tr('lesson.frame.badge') },
    }],
    probes: {
      'dc-columns': () => st().members.filter((m) => m.type === 'column').length >= 2,
      'dc-beam': () => st().members.some((m) => m.type === 'beam'),
      'dc-endplates': () => st().connections.some((c) => c.type === 'endplate'),
      'dc-saved': () => !dc.model().dirty && st().members.length > 0,
    },
  };
}

/** What DetailCraft hands over (the doc's table, § 3). */
export function detailHost(dc) {
  const model = () => dc.model();
  let inStep = false;
  const ASSIST = () => assistantPrefs(getHost({ app: 'detailcraft' }));
  const host = {
    control: dc.control,
    // one undo step: the module's changes (and what file.set writes) are kept in the model's snapshot
    step: (label, fn) => { inStep = true; try { return model().change(label, () => fn()); } finally { inStep = false; } },
    file: {
      // a file key set outside a step still makes the model "unsaved"; inside a step the snapshot already differs
      set: (key, json) => {
        const m = model();
        if (json == null) { if (!(key in m.state)) return; delete m.state[key]; } else m.state[key] = json;
        if (!inStep) { m.version++; m.emit('file'); }
      },
    },
    selection: () => {
      const r = dc.selected()[0];
      return r ? { kind: r.kind, id: r.id, label: dc.describe(r).replace(/\.$/, '') } : null;
    },
    onSelection: (fn) => dc.onSelection(fn),
    select: (el) => { if (el && el.id) dc.setSelection([{ kind: el.kind || 'member', id: el.id }]); },
    totals: [
      { id: 'detail.steel', measure: 'weight', label: tr('totals.steel'), read: () => (dc.built() ? sum(dc.built().parts, (p) => p.weight) : null) },
      { id: 'detail.rebar', measure: 'weight', label: tr('totals.rebar'), read: () => (dc.schedule() ? sum(dc.schedule().rows, (r) => r.totalWeight) : null) },
    ],
    // DI.1: real counts of what the model holds; no size or triangle count (no model-wide extents are kept, the 3D parts are built on demand)
    docinfo: {
      read: () => {
        const st = model().state, n = (a) => (Array.isArray(a) ? a.length : 0);
        return { path: dc.path() || dc.name(), counts: { elements: n(st.members) + n(st.connections) + n(st.footings) + n(st.stairs) + n(st.bolts), levels: n(st.levels) } };
      },
      onChange: (fn) => model().on(() => fn()),
    },
    ...lessonsOf(dc),
    rev: () => model().version,
    document: () => ({ docId: dc.name(), path: dc.path() || '', name: dc.name() }),
    perms: {
      get: () => ASSIST(),
      set: (rec) => { try { localStorage.setItem(ASSIST_KEY + 'detailcraft', JSON.stringify(rec)); } catch { /* private mode */ } },
    },
    undoTo: (i) => { const m = model(); while (m.undoStack.length > i && m.canUndo) m.undo(); },
    version: () => String(model().version),
    askContext: () => ({ file: dc.name(), selection: host.selection() }),
  };
  return host;
}

/** Mounts everything and keeps the calc sheets and reasons in step with the model (open, undo, redo). */
export function mountDetailShell(dc) {
  const host = detailHost(dc);
  mountShellModules(host);
  const reload = () => {
    const s = dc.model().state;
    if (window.ccCalc) ccCalc.load(s.calcs || null);
    if (window.ccReasons) ccReasons.load(s.reasons || null);
    if (window.ccDocInfo) ccDocInfo.load(s.docinfo || null);
    if (window.ccLessons) ccLessons.emit('model', {});
  };
  let watched = null;
  const watch = () => {
    const m = dc.model();
    if (m === watched) return;
    watched = m;
    m.on((why) => {
      if (why === 'load' || why === 'undo' || why === 'redo') reload();
      else if (window.ccLessons) ccLessons.emit('model', {});
      if (window.ccTotals) ccTotals.invalidate();
    });
    reload();
  };
  watch();
  document.addEventListener('cc-calc-ready', reload, { once: true });
  document.addEventListener('cc-reasons-ready', reload, { once: true });
  document.addEventListener('cc-docinfo-ready', reload, { once: true });
  return {
    host,
    /** The page calls this after setModel (a new or opened file). */
    modelChanged() { watch(); if (host.fileOpened) host.fileOpened(tr('lesson.file.opened')); },
    /** The page calls this before the model is written: the sheets and reasons go into the file. */
    beforeSave() { const s = dc.model().state; for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons], ['docinfo', window.ccDocInfo]]) { const j = api ? api.save() : null; if (j) s[k] = j; else delete s[k]; } },
  };
}
