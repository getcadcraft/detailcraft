/* SPDX-License-Identifier: Apache-2.0 */
/**
 * shell-mount.js — DetailCraft attaches the shell's seven modules (0.8 round 3, detail_PART_3; docs/apps/shell-modules.md § Mounting):
 * calc sheets (EG.18), design reasons (EG.34), running totals (EG.30), lessons (EG.23), Suggest (AC.12), the activity log (AC.13) and the
 * Ask box (AC.8). The block in mountShellModules is the doc's, unchanged; detailHost() is what DetailCraft hands over as `host`.
 *
 *   mountDetailShell(dc) — dc = { model(), built(), schedule(), selected(), setSelection(refs), describe(ref), control, onSelection(fn) → off,
 *                                 name(), path() }
 * Calc sheets and reasons are saved in the model file under `calcs` and `reasons` (model.js readModel keeps them; null removes the key).
 */
import { assistantPrefs, ASSIST_KEY, getHost } from './host.js';
import { t as tr } from './i18n.js';

/** The doc's block (shell-modules.md § Mounting 2). Kept as the doc has it; browser-mount-kit.mjs compares them. */
export function mountShellModules(host) {
  const when = (api, name, go) => (window[api] ? go() : document.addEventListener('cc-' + name + '-ready', go, { once: true }));
  // EG.18 calc sheets — parameters in, drives out, saved inside the app's own file
  when('ccCalc', 'calc', () => {
    ccCalc.attach({ units: host.units /* the build's unit-table.js, optional */, params: host.params /* { get, set, list } */,
                    step: host.step, persist: (json) => host.file.set('calcs', json) });
    ccCalc.registerTools(host.control);
  });
  // EG.34 design reasons — the selection, optionally the elements that should have a reason
  when('ccReasons', 'reasons', () => {
    ccReasons.attach({ selection: host.selection, onSelection: host.onSelection, select: host.select, expected: host.expected /* optional */,
                       step: host.step, persist: (json) => host.file.set('reasons', json) });
    ccReasons.registerTools(host.control);
  });
  // EG.30 running totals — one source per kind of number the app can stand behind (null until it has one)
  when('ccTotals', 'totals', () => {
    for (const s of host.totals || []) ccTotals.source(s);              // { id, measure: cost|carbon|weight|time, label, read: () => number | null }
    if (host.statusBar) ccTotals.mount(host.statusBar);                 // optional: the app's own status bar element
    ccTotals.registerTools(host.control);
  });
  // EG.23 lessons — the app's lessons, and where it already knows something happened
  when('ccLessons', 'lessons', () => {
    for (const l of host.lessons || []) ccLessons.register(l);          // { id, title, steps: [{ id, text, hints, done: { event, match } | { probe } }] }
    for (const [name, fn] of Object.entries(host.probes || {})) ccLessons.probe(name, fn);
    ccLessons.registerTools(host.control);
    host.emit = (event, data) => ccLessons.emit(event, data);           // the app calls host.emit('tool', { name: 'line' }) where it runs a command
  });
  // AC.12 Suggest, AC.13 activity log, AC.8 Ask box — they ride on host.control, so the app hands over very little
  when('ccSuggest', 'suggest', () => {
    ccSuggest.attach({ control: host.control, rev: host.rev, step: host.step, document: host.document, perms: host.perms, ghost: host.ghost });
    ccSuggest.registerTools(host.control);
    host.fileOpened = (why) => ccSuggest.reset(why || 'A file was opened.');   // call when another file opens  // i18n-ignore: the doc's block, unchanged; modelChanged passes the translated words
  });
  when('ccActivity', 'activity', () => {
    ccActivity.attach({ control: host.control, rev: host.rev, document: host.document, undoTo: host.undoTo, history: host.history, version: host.version });
  });
  when('ccAsk', 'ask', () => {
    ccAsk.attach({ control: host.control, context: host.askContext, system: host.skillPack /* the app's skill pack text, AC.5 */ });
    ccAsk.registerTools(host.control);
  });
  // when a file opens / saves (the app's own two places):  open: ccCalc.load(file.calcs); ccReasons.load(file.reasons);
  //                                                        save: file.calcs = ccCalc.save(); file.reasons = ccReasons.save();
}

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
  return {
    host,
    /** The page calls this after setModel (a new or opened file). */
    modelChanged() { watch(); if (host.fileOpened) host.fileOpened(tr('lesson.file.opened')); },
    /** The page calls this before the model is written: the sheets and reasons go into the file. */
    beforeSave() { const s = dc.model().state; for (const [k, api] of [['calcs', window.ccCalc], ['reasons', window.ccReasons]]) { const j = api ? api.save() : null; if (j) s[k] = j; else delete s[k]; } },
  };
}
