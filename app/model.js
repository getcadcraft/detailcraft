/* SPDX-License-Identifier: Apache-2.0 */
/**
 * model.js — the DetailCraft model and its one edit path. No DOM.
 *
 * state = {
 *   format: 'detailcraft', version: 1, name,
 *   grids: { x: [{label, at}], y: [{label, at}] }   x-grids are lines x = at (labels 1, 2, 3 …),
 *                                                     y-grids are lines y = at (labels A, B, C …)
 *   levels: [{ name, z }]                              sorted by z
 *   members: [{ id, type: beam|column|brace|plate, profile, material, start:[x,y,z], end:[x,y,z],
 *               rotation (deg), position: top|middle|bottom, name,
 *               cuts:  [{ id, kind: 'cope', end: start|end, side: top|bottom, length, depth }],
 *               holes: [{ id, face: web|top|bottom|plate, x, y, d }] }]   x from the part's cut start, y across
 *   connections: [{ id, type: 'endplate', beam, end: start|end, column, params }
 *                 { id, type: 'baseplate', column, params }
 *                 { id, type: 'splice', a, aEnd: start|end, b, params }   (0.4 D21)
 *                 { id, type: 'gusset', brace, end: start|end, support, params }   (0.4 D22)
 *                 { id, type: 'mitre', a, aEnd: start|end, b, bEnd: start|end, params }]   (0.7.1 71.20; same file version: an
 *                 older build drops it as an unknown connection type, with a warning)
 *   footings: [{ id, x, y, top, L, B, H, rotation, concrete, mat:{…}, starters:{…}, phase }]
 *   bolts: [{ id, d, length, grade, kind: BOLT|ANCHORBOLT, head, axis, phase }]   loose bolts, from an IFC import (0.4 D11):
 *           they stay where they are (connections make their own bolts)
 *   stairs: [{ id, x, y, z, dir, rise, going, width, maxRiser, stringer, tread:{ t, nosing }, material, phase }]   (0.4 D23,
 *           stair.js; built into stringers and treads by build.js; an older file without it opens with none)
 *   profiles: [custom parametric profiles]
 *   phases: [{ n, name }]            (0.4 D13, format version 2) phase numbers 1–999; name '' = "Phase n"
 *   issues: [{ sheet, number, rev, date, note, hash, parts? }]   drawing issue log (0.4 D17, issues.js; parts 0.4 D19)
 *   numbering: { perPhase }          marks counted per phase ("2-b1") when more than one phase is used
 *   problems: { accepted: [{ id, by, reason, date, fp }] }   (0.7.1 → 0.8, docs/0.8-PROBLEMS-SPEC.md) the problems accepted as intended;
 *           optional (absent = none; an older build drops the key, same file version)
 *   ids: { name, hash }              (0.7.1 71.25) the client's IDS this model's IFC export is checked against (ids-ui.js); optional,
 *           an older build drops the key. The text is kept once in model.idsTexts (outside the undo snapshots; lead 2026-10-26) and
 *           written into the file as ids.text by toJSON()
 *   pictures: [{ id, name, hash, px, mmPerPx, x, y, z, opacity, size }]   (0.8 D8.15, picture.js) reference pictures (a copied
 *           area of a sheet) lying on a level; optional, an older build drops the key (same file version). The PNG is kept once
 *           in model.pictureSrcs by hash (outside the undo snapshots, as the IDS text) and written into the file as src by toJSON()
 *   rc: { settings, elements: [{ id 'r<n>', kind beam|column|slab|wall, phase, … }], loose: [{ id 'x<n>', bar, db, pts, rc, mark, host? }] }
 *           (0.9 RC.1, rc-detail.js over cc-rc in ./rc/) reinforced concrete elements with their bars, and bars read from an IFC file;
 *           optional, an older build drops the key (same file version)
 *   seq: next id number
 * }
 * Members and footings carry `phase` (a number in phases; 1 when a version 1 file is opened). A connection is in the
 * phase of its main member (the beam of an end plate, the column of a base plate). A phase a member names that the
 * list lacks is added (a pasted part from another model brings its phase along).
 * Every edit goes through `change(label, fn)` — one undo step (JSON snapshots, 200 deep).
 * `load(json)` checks an untrusted file field by field.
 */
import { getProfile, cleanCustom } from './profiles.js';
import { BASEPLATE_DEFAULTS, isBeamEnd, DEFAULTS_OF, membersOf, mainOf } from './connections.js';
import { FOOTING_DEFAULTS, cleanFooting } from './rebar.js';
import { STAIR_DEFAULTS, cleanStair } from './stair.js';
import { cleanAnalysis } from './analysis.js';
import { readSupply } from './lib-supply/supply.js';   // 0.8 round 3 (EG.51): the supplier stock rows kept in the file
import { cleanFraming } from './framing.js';   // 0.8 EG.6: timber and light-gauge framing panels
import { cleanFoundation } from './foundation.js';   // 0.8 EG.5: soil settings and column loads of the footing checks
import { cleanSetup as cleanErection } from './erection.js';   // 0.8 EG.72: the crane setup of the erection movie
import { cleanAcceptedDc } from './problems-detailcraft.js';
import { cleanIdsRecord, cleanIdsRef, idsHash, idsTextStore } from './ids/record.js';   // 0.7.1 71.25 (cc-ids, lib/ids synced)
import { cleanPicture, readPictures, MAX_PICTURES } from './picture.js';   // 0.8 D8.15: reference pictures (a copied area of a sheet)
import { cleanRc, cleanOne, mergeInto, cleanSettingsRc, MAX_ELEMENTS } from './rc-detail.js';   // 0.9 RC.1: reinforced concrete detailing
import { t } from './i18n.js';
import { ChunkHistory, chunkJournal, recoverState, recoverExtras, join } from './history/index.js';
import { openBlock, nextNumber, savedCounter, dropBlocks, idNumbers, narrowIds, maxOf, OLD_LIMIT, FILE_IDS } from './history/ids.js';   // 0.11 DC.27: each session's ids from its own random tag   // 0.10 PERF.21 / PERF.24: undo by change records, autosave that writes what changed

export const FORMAT = 'detailcraft';
export const VERSION = 2;              // 2: phases (0.4 D13)
export const MAX_PHASE = 999;
export const MEMBER_TYPES = ['beam', 'column', 'brace', 'plate'];
export const MATERIALS = ['A992', 'A36', 'A572 Gr 50', 'A500 Gr C', 'S235', 'S275', 'S355'];
const UNDO_DEPTH = 200;
const UNDO_BYTES = 96e6;
/** How the state is cut into chunks (lib/history): the lists of objects with an id are one chunk per object. */
export const HISTORY_SPEC = Object.freeze({ arrays: { members: 'id', connections: 'id', footings: 'id', stairs: 'id', bolts: 'id', profiles: 'id', pictures: 'id', issues: 'id' } });

export function emptyState(name = t('model.name.untitled')) {
  return {
    format: FORMAT, version: VERSION, name,
    grids: { x: [], y: [] }, levels: [{ name: t('model.level', { n: 1 }), z: 0 }],
    members: [], connections: [], footings: [], stairs: [], bolts: [], profiles: [], seq: 1,
    phases: [{ n: 1, name: '' }], numbering: { perPhase: true }, issues: [],
  };
}
/** A phase number 1–999, or null. */
export function cleanPhase(v) {
  const n = Number(v);
  return Number.isInteger(n) && n >= 1 && n <= MAX_PHASE ? n : null;
}
/** The phase list with every phase a member or footing names (sorted). */
function withUsedPhases(phases, state) {
  const out = phases.map((p) => ({ ...p }));
  for (const x of [...state.members, ...state.footings, ...(state.stairs || []), ...(state.rc?.elements || [])]) if (!out.some((p) => p.n === x.phase)) out.push({ n: x.phase, name: '' });
  return out.sort((a, b) => a.n - b.n);
}
/** Which phase a connection is in: its main member's. */
export function connPhase(state, c) {
  const main = state.members.find((m) => m.id === mainOf(c));
  return main?.phase || 1;
}

/** A starter model: 3 × 2 grid bays at 6 m, two levels. */
export function starterState(name = t('model.name.untitled')) {
  const s = emptyState(name);
  s.grids = gridsFromSpacings('1 2 3', '6000 6000', 'A B', '6000');
  s.levels = [{ name: t('model.level', { n: 1 }), z: 0 }, { name: t('model.level', { n: 2 }), z: 4000 }];
  return s;
}

/** Grid lines from labels + spacings ("A B C", "6000 6000"). Returns { x, y } or throws a plain message. */
export function gridsFromSpacings(xLabels, xSpacings, yLabels, ySpacings) {
  const axis = (labels, spacings, which) => {
    const ls = String(labels).split(/[\s,]+/).filter(Boolean);
    const ss = String(spacings).split(/[\s,]+/).filter(Boolean).map(Number);
    if (ls.length > 60) throw new Error(t('model.err.grid-max', { max: 60 }));
    if (ls.length && ss.length !== ls.length - 1) throw new Error(t('model.err.grid-spacings', { which, n: Math.max(0, ls.length - 1) }));
    if (ss.some((v) => !Number.isFinite(v) || v <= 0 || v > 200000)) throw new Error(t('model.err.grid-positive', { which }));
    if (new Set(ls).size !== ls.length) throw new Error(t('model.err.grid-labels', { which }));
    let at = 0;
    return ls.map((label, i) => { if (i) at += ss[i - 1]; return { label: label.slice(0, 8), at }; });
  };
  return { x: axis(xLabels, xSpacings, t('model.grids.numbered')), y: axis(yLabels, ySpacings, t('model.grids.lettered')) };
}
export function spacingsOf(lines) {
  return lines.slice(1).map((g, i) => +(g.at - lines[i].at).toFixed(3)).join(' ');
}

/** All grid intersections × levels: [{ p:[x,y,z], gx, gy, level }]. */
export function nodes(state) {
  const out = [];
  for (const lv of state.levels) for (const gx of state.grids.x) for (const gy of state.grids.y) {
    out.push({ p: [gx.at, gy.at, lv.z], gx: gx.label, gy: gy.label, level: lv.name });
  }
  return out;
}
/** "B/2 at Level 1" for a point on a node, else coordinates. */
export function nodeName(state, p) {
  const gx = state.grids.x.find((g) => Math.abs(g.at - p[0]) < 0.5), gy = state.grids.y.find((g) => Math.abs(g.at - p[1]) < 0.5);
  const lv = state.levels.find((l) => Math.abs(l.z - p[2]) < 0.5);
  const xy = gx && gy ? gy.label + '/' + gx.label : '(' + Math.round(p[0]) + ', ' + Math.round(p[1]) + ')';
  return lv ? t('model.node.at', { xy, level: lv.name }) : t('model.node.atz', { xy, z: Math.round(p[2]) });
}
/** Point from grid labels + level name ("B", "2", "Level 1"); null if any is unknown. */
export function pointAt(state, gy, gx, level) {
  const X = state.grids.x.find((g) => g.label === gx), Y = state.grids.y.find((g) => g.label === gy), L = state.levels.find((l) => l.name === level);
  return X && Y && L ? [X.at, Y.at, L.z] : null;
}

export function defaultsFor(type) {
  switch (type) {
    case 'column': return { profile: 'W12x50', material: 'A992', position: 'middle', rotation: 0 };
    case 'brace': return { profile: 'HSS6x6x1/4', material: 'A500 Gr C', position: 'middle', rotation: 0 };
    case 'plate': return { profile: 'PL20x200', material: 'A36', position: 'middle', rotation: 0 };
    default: return { profile: 'W16x26', material: 'A992', position: 'top', rotation: 0 };
  }
}

export class Model {
  static verifyHints = typeof process !== 'undefined' && process.env?.HISTORY_VERIFY === '1';   // tests: check every hinted commit against a full look
  constructor(state = starterState()) {
    this.h = new ChunkHistory({ spec: HISTORY_SPEC, limit: UNDO_DEPTH, maxBytes: UNDO_BYTES });
    this.state = state;
    this.version = 0;
    this.savedVersion = 0;
    this.listeners = new Set();
    this.idsTexts = idsTextStore();   // 0.7.1 71.25: IDS texts by hash, once, outside the undo snapshots (state.ids is { name, hash })
    this.pictureSrcs = idsTextStore();   // 0.8 D8.15: the pictures' PNGs (data URLs) by hash, the same way (state.pictures[].hash)
  }
  /** The document. Putting a whole new one in starts the history again from it. */
  get state() { return this._state; }
  set state(v) { this._state = v; this.h.reset(v); }
  /** The steps (0.10: change records, see lib/history; `label` on each, `before` the state's JSON before the step, newest step only). */
  get undoStack() { return this.h.undoStack; }
  set undoStack(v) { this.h.undoStack.length = 0; if (v && v.length) throw new Error('The undo stack can only be cleared.'); }
  get redoStack() { return this.h.redoStack; }
  set redoStack(v) { this.h.redoStack.length = 0; if (v && v.length) throw new Error('The redo stack can only be cleared.'); }
  get dirty() { return this.version !== this.savedVersion; }
  markSaved() { this.savedVersion = this.version; }
  on(fn) { this.listeners.add(fn); return () => this.listeners.delete(fn); }
  emit(why) { for (const fn of this.listeners) fn(why); }
  /** 0.11 PERF.36: which chunks each version changed (the keys of `lib/history`: `e:members:<id>`, `o:members`, ...; null = unknown, everything). `dirtySince(v)` is what changed after version v,
   *  or null when the log does not reach back to v without a gap (a version bumped from outside, a file opened): the caller then looks at everything. */
  _note(keys) { const log = this._log || (this._log = []); log.push({ v: this.version, keys }); if (log.length > 64) log.shift(); }
  dirtySince(v) {
    if (v === this.version) return new Set();
    const log = this._log || [], need = this.version - v;
    if (!(need > 0) || log.length < need) return null;
    const tail = log.slice(-need), out = new Set();
    for (let i = 0; i < tail.length; i++) { if (tail[i].v !== v + 1 + i || !tail[i].keys) return null; for (const k of tail[i].keys) out.add(k); }
    return out;
  }

  /** One undo step. fn(tx) edits through tx (see Tx). Throws (and changes nothing) if fn throws. */
  change(label, fn) {
    const tx = new Tx(this.state);
    let result;
    try { result = fn(hintedTx(tx)); }
    catch (e) { this.h.rollback(this.state); throw e; }
    // 0.10: an edit made only through the hinted methods names its chunks; anything else (or a closure that edits the state itself) is looked at in full
    const step = this.h.commit(this.state, label, { keys: tx.full || !tx.keys.size ? null : tx.keys, verify: Model.verifyHints });
    if (!step) return result;
    Object.defineProperty(step, 'before', { configurable: true, get: () => this.beforeText(step) });   // live.js reads the newest step's `before`
    if (this.idsTexts.size > 1) this.pruneIds();
    if (this.pictureSrcs.size > (this.state.pictures?.length || 0) + 4) this.prunePictures();   // a few deleted ones kept for undo without searching the snapshots each edit
    this.version++;
    this._note([...step.undo.keys()]);
    this.emit('change');
    return result;
  }
  /** The state's JSON as it was before `step` (the newest step: the chunks it changed put back). */
  beforeText(step) {
    const table = new Map(this.h.cur);
    for (const [k, s] of step.undo) { if (s === null) table.delete(k); else table.set(k, s); }
    return JSON.stringify(join(table, HISTORY_SPEC));
  }
  get canUndo() { return this.h.canUndo; }
  get canRedo() { return this.h.canRedo; }
  undo() {
    const top = this.undoStack[this.undoStack.length - 1], keys = top && top.undo ? [...top.undo.keys()] : null;
    const label = this.h.undo(this.state);
    if (label === null) return null;
    this.version++;
    this._note(keys);
    this.emit('undo');
    return label;
  }
  redo() {
    const top = this.redoStack[this.redoStack.length - 1], keys = top && top.redo ? [...top.redo.keys()] : null;
    const label = this.h.redo(this.state);
    if (label === null) return null;
    this.version++;
    this._note(keys);
    this.emit('redo');
    return label;
  }

  /**
   * Autosave that writes what changed (0.10 PERF.24): the journal the shell's Autosave.doc({ journal }) takes. Its base is every chunk of the
   * state (once), then only the chunks each edit changed. The IDS text and the pictures' PNGs live outside the state: they go along as extra chunks.
   */
  autosaveJournal() { return chunkJournal(this.h, { meta: () => ({ name: this.state.name }), prepare: () => this.syncExtras() }); }
  syncExtras() {
    const want = new Map(), ih = this.state.ids?.hash;
    if (ih) { const text = this.idsTexts.get(ih); if (text) want.set('x:ids:' + ih, text); }
    for (const p of this.state.pictures || []) { const src = this.pictureSrcs.get(p.hash); if (src) want.set('x:pic:' + p.hash, src); }
    for (const k of this.h.extraKeys()) if (!want.has(k)) this.h.setExtra(k, null);
    for (const [k, v] of want) this.h.setExtra(k, v);
  }

  /** Every chunk string the steps hold (what an undo or redo could bring back). */
  stepStrings() {
    const out = [];
    for (const st of [...this.undoStack, ...this.redoStack]) { for (const v of st.undo.values()) if (v) out.push(v); for (const v of st.redo.values()) if (v) out.push(v); }
    return out;
  }

  /** IDS texts no state and no undo / redo snapshot refers to any more are let go (0.7.1 71.25). */
  pruneIds() {
    const refs = [JSON.stringify(this.state.ids || null), ...this.stepStrings()];
    this.idsTexts.prune((h) => refs.some((r) => r.includes(h)));
  }
  /** PNGs no state and no snapshot refers to any more are let go (0.8 D8.15); one a redo could bring back stays. */
  prunePictures() {
    const refs = [JSON.stringify(this.state.pictures || null), ...this.stepStrings()];
    this.pictureSrcs.prune((h) => refs.some((r) => r.includes(h)));
  }
  /** The text of the IDS the model refers to now, or null. */
  idsText() { return this.state.ids ? this.idsTexts.get(this.state.ids.hash) : null; }

  toJSON() {
    const text = this.idsText();   // the file carries the IDS text itself; the snapshots only its { name, hash }
    const out = text ? { ...this.state, ids: { ...this.state.ids, text } } : { ...this.state };
    out.seq = savedCounter(this, this.state.seq);   // 0.11 DC.27: the file's own counter while this session handed out nothing from its block
    out.formatVersion = FILE_IDS;                    // 0.11 DC.27 (b): ids from session blocks; older builds ignore it
    // the pictures carry their PNG in the file (0.8 D8.15); one whose PNG went missing is left out rather than saved blank
    if (this.state.pictures) out.pictures = this.state.pictures.filter((p) => this.pictureSrcs.has(p.hash)).map((p) => ({ ...p, src: this.pictureSrcs.get(p.hash) }));
    return JSON.stringify(out, null, 1);
  }
  picture(id) { return (this.state.pictures || []).find((p) => p.id === id) || null; }

  /** Replaces the model with a file's contents (untrusted). Returns { warnings }. Throws a plain message. */
  load(text) {
    const { state, warnings, idsText, pictureSrcs } = readModel(text);
    this.state = state;
    dropBlocks(this);   // 0.11 DC.27: the opener takes a new block (takeIdBlock)
    this.idsTexts = idsTextStore();
    if (idsText) this.idsTexts.put(idsText);
    this.pictureSrcs = idsTextStore();
    for (const src of pictureSrcs || []) this.pictureSrcs.put(src);
    this.undoStack = []; this.redoStack = [];
    this.version++; this.savedVersion = this.version;
    this._note(null);
    this.emit('load');
    return { warnings };
  }
  /** 0.11 DC.27: a file was opened: this session hands out its new ids from a random tag of its own (history/ids.js), so two people
   *  adding members to the same file do not make the same id. `seq` is the next number; the raise is not an undo step. */
  takeIdBlock() {
    const s = this.state;
    s.seq = openBlock(this, s.seq || 1, idNumbers(s));
    this.h.sync(s, { keys: ['k:seq'] });
    return s.seq;
  }
  reset(state) {
    this.state = state;
    dropBlocks(this);
    this.undoStack = []; this.redoStack = [];
    this.version++; this.savedVersion = this.version;
    this._note(null);
    this.emit('load');
  }

  member(id) { return this.state.members.find((m) => m.id === id) || null; }
  connection(id) { return this.state.connections.find((c) => c.id === id) || null; }
  footing(id) { return this.state.footings.find((f) => f.id === id) || null; }
  stair(id) { return (this.state.stairs || []).find((x) => x.id === id) || null; }
}

/** The Tx methods that say which chunks they touch (`keys`); a call to any other method, or to `tx.s`, makes the history look at everything. */
const HINTED = new Set(['nextId', 'ensurePhase', 'addMember', 'updateMember', 'removeMembers', 'addConnection', 'addHole', 'removeHole', 'addCut', 'removeCut']);
function hintedTx(tx) {
  return new Proxy(tx, { get(target, k) {
    const v = target[k];
    if (typeof v !== 'function' || HINTED.has(k)) return typeof v === 'function' ? v.bind(target) : v;
    return (...a) => { target.full = true; return v.apply(target, a); };
  } });
}

/** The file text of a model an autosave journal (base + changes) holds: the app opens it with Model.load, like any file, so it is checked the same way. */
export function recoverText(rec) {
  const tmp = new Model(recoverState(rec, HISTORY_SPEC));
  for (const [k, v] of recoverExtras(rec)) { if (k.startsWith('x:ids:')) tmp.idsTexts.put(v); else if (k.startsWith('x:pic:')) tmp.pictureSrcs.put(v); }
  return tmp.toJSON();
}

/** The edit vocabulary; each checks its input so a bad edit throws before anything is kept. */
class Tx {
  constructor(state) { this._s = state; this.keys = new Set(); this.full = false; }
  /** 0.11 PERF.36: member and connection lookups by id, and the "is this end / column taken" checks, through tables made once per change instead of a scan of the list per call
   *  (a 10x paste called addHole and addConnection 29,000 times each). A table is rebuilt when the list was replaced or changed length behind its back (tx.s). */
  _mem(id) {
    const a = this._s.members;
    if (this._mi?.a !== a || this._mi.n !== a.length) { const m = new Map(); for (const x of a) m.set(x.id, x); this._mi = { a, n: a.length, m }; }
    return this._mi.m.get(id);
  }
  _conTable() {
    const a = this._s.connections;
    if (this._ci?.a !== a || this._ci.n !== a.length) {
      const ends = new Set(), bases = new Set();
      for (const x of a) { if (isBeamEnd(x)) ends.add(x.beam + ':' + x.end); else if (x.type === 'baseplate') bases.add(x.column); }
      this._ci = { a, n: a.length, ends, bases };
    }
    return this._ci;
  }
  _conPushed(c) {
    const t = this._ci; if (!t) return;
    t.n = this._s.connections.length;
    if (isBeamEnd(c)) t.ends.add(c.beam + ':' + c.end); else if (c.type === 'baseplate') t.bases.add(c.column);
  }
  _memPushed(m) { const t = this._mi; if (t) { t.n = this._s.members.length; t.m.set(m.id, m); } }
  /** The raw state, for an edit that is not one of the hinted methods below: the history then looks at everything (0.10 PERF.21). */
  get s() { this.full = true; return this._s; }
  nextId(prefix) { this.keys.add('k:seq'); const n = nextNumber(this._s.seq || 1); this._s.seq = n + 1; return prefix + n; }   // 0.11 DC.27: past its tag's last number, a new tag

  setName(name) { this._s.name = cleanText(name, 80) || t('model.name.untitled'); }
  setGrids(grids) { this._s.grids = { x: grids.x.map((g) => ({ ...g })), y: grids.y.map((g) => ({ ...g })) }; }
  setLevels(levels) {
    if (!levels.length) throw new Error(t('model.err.level-keep'));
    const names = new Set();
    const out = levels.map((l) => {
      const name = cleanText(l.name, 40), z = Number(l.z);
      if (!name) throw new Error(t('model.err.level-name'));
      if (names.has(name)) throw new Error(t('model.err.level-twice', { name }));
      if (!Number.isFinite(z) || Math.abs(z) > 1e6) throw new Error(t('model.err.level-z'));
      names.add(name);
      return { name, z };
    });
    this._s.levels = out.sort((a, b) => a.z - b.z);
  }

  // ---- phases (D13) ----
  ensurePhase(n) {
    if (!Array.isArray(this._s.phases)) this._s.phases = [{ n: 1, name: '' }];   // a state made before phases (an IFC import, a test)
    if (!this._s.numbering) this._s.numbering = { perPhase: true };
    if (!this._s.phases.some((p) => p.n === n)) { this._s.phases.push({ n, name: '' }); this._s.phases.sort((a, b) => a.n - b.n); }
    this.keys.add('k:phases').add('k:numbering');
  }
  addPhase(name = '') {
    const n = Math.max(0, ...this._s.phases.map((p) => p.n)) + 1;
    if (n > MAX_PHASE) throw new Error(t('phase.err.max', { max: MAX_PHASE }));
    this._s.phases.push({ n, name: cleanText(name, 40) });
    return n;
  }
  renamePhase(n, name) {
    const p = this._s.phases.find((x) => x.n === n);
    if (!p) throw new Error(t('phase.err.gone'));
    p.name = cleanText(name, 40);
  }
  removePhase(n) {
    const used = [...this._s.members, ...this._s.footings, ...(this._s.stairs || []), ...(this._s.rc?.elements || [])].filter((x) => x.phase === n).length;
    if (used) throw new Error(t('phase.err.used', { n: used, phase: n }));
    if (this._s.phases.length <= 1) throw new Error(t('phase.err.last'));
    this._s.phases = this._s.phases.filter((p) => p.n !== n);
  }
  setNumbering(o) { this._s.numbering = { perPhase: !!o.perPhase }; }
  /** The problems accepted as intended (the shell's Problems panel; one undo step like any edit). [] removes the key. */
  setAcceptedProblems(list) { const a = cleanAcceptedDc(list); if (a.length) this._s.problems = { accepted: a }; else delete this._s.problems; }
  /** The IDS the IFC export is checked against (0.7.1 71.25): its { name, hash } (put the text in Model.idsTexts first); null forgets it. */
  setIds(ref) { const r = cleanIdsRef(ref); if (r) this._s.ids = { name: r.name, hash: r.hash }; else delete this._s.ids; }   // the text: Model.idsTexts
  /** Adds drawing issues (issues.js planIssue records). */
  addIssues(list) {
    if (!Array.isArray(this._s.issues)) this._s.issues = [];
    for (const x of list) { const c = cleanIssue(x); if (!c) throw new Error(t('issue.err.bad')); this._s.issues.push(c); }
  }
  /** Puts members and footings (refs) in phase n. */
  setPhaseOf(refs, n) {
    const ph = cleanPhase(n);
    if (!ph) throw new Error(t('phase.err.number', { max: MAX_PHASE }));
    this.ensurePhase(ph);
    const ids = new Set(refs.map((r) => r.kind + ':' + r.id));
    for (const m of this._s.members) if (ids.has('member:' + m.id)) m.phase = ph;
    for (const f of this._s.footings) if (ids.has('footing:' + f.id)) f.phase = ph;
    for (const x of this._s.rc?.elements || []) if (ids.has('rc:' + x.id)) x.phase = ph;
    for (const x of this._s.stairs || []) if (ids.has('stair:' + x.id)) x.phase = ph;
  }

  addMember(m) {
    const type = MEMBER_TYPES.includes(m.type) ? m.type : 'beam';
    const d = defaultsFor(type);
    const mem = {
      id: this.nextId('m'), type,
      profile: m.profile || d.profile, material: m.material || d.material,
      start: vec(m.start), end: vec(m.end),
      rotation: Number(m.rotation ?? d.rotation) || 0, position: m.position || d.position,
      name: cleanText(m.name ?? '', 40), cuts: [], holes: [], phase: cleanPhase(m.phase) || 1,
    };
    if (m.panel) mem.panel = cleanText(m.panel, 40);   // 0.8 round 3 (EG.6): a piece of a placed framing panel
    checkMember(mem, this._s.profiles);
    this.ensurePhase(mem.phase);
    this._s.members.push(mem);
    this._memPushed(mem);
    this.keys.add('o:members').add('e:members:' + mem.id);
    return mem.id;
  }
  updateMember(id, patch) {
    const m = this._mem(id);
    if (!m) throw new Error(t('model.err.member-gone'));
    const next = { ...m, ...patch };
    if (patch.start) next.start = vec(patch.start);
    if (patch.end) next.end = vec(patch.end);
    if (patch.name !== undefined) next.name = cleanText(patch.name, 40);
    if (patch.rotation !== undefined) next.rotation = Number(patch.rotation);
    if (patch.phase !== undefined) { next.phase = cleanPhase(patch.phase); if (!next.phase) throw new Error(t('phase.err.number', { max: MAX_PHASE })); this.ensurePhase(next.phase); }
    checkMember(next, this._s.profiles);
    Object.assign(m, next);
    this.keys.add('e:members:' + id);
  }
  removeMembers(ids) {
    const set = new Set(ids);
    this._s.members = this._s.members.filter((m) => !set.has(m.id));
    // a connection without its parts goes too
    const gone = this._s.connections.filter((c) => membersOf(c).some((id) => set.has(id)));
    this._s.connections = this._s.connections.filter((c) => !membersOf(c).some((id) => set.has(id)));
    this.keys.add('o:members').add('o:connections');
    for (const id of set) this.keys.add('e:members:' + id);
    for (const c of gone) this.keys.add('e:connections:' + c.id);
  }
  addHole(memberId, h) {
    const m = this._mem(memberId);
    if (!m) throw new Error(t('model.err.member-gone'));
    const hole = cleanHole(h);
    if (!hole) throw new Error(t('model.err.hole'));
    hole.id = this.nextId('h');
    m.holes.push(hole);
    this.keys.add('e:members:' + memberId);
    return hole.id;
  }
  removeHole(memberId, holeId) {
    const m = this._mem(memberId);
    if (m) { m.holes = m.holes.filter((h) => h.id !== holeId); this.keys.add('e:members:' + memberId); }
  }
  addCut(memberId, c) {
    const m = this._mem(memberId);
    if (!m) throw new Error(t('model.err.member-gone'));
    const cut = cleanCut(c);
    if (!cut) throw new Error(t('model.err.cope'));
    cut.id = this.nextId('k');
    m.cuts.push(cut);
    this.keys.add('e:members:' + memberId);
    return cut.id;
  }
  removeCut(memberId, cutId) {
    const m = this._mem(memberId);
    if (m) { m.cuts = m.cuts.filter((c) => c.id !== cutId); this.keys.add('e:members:' + memberId); }
  }

  addConnection(c) {
    const id = this.nextId('j');
    if (isBeamEnd(c)) {
      if (this._conTable().ends.has(c.beam + ':' + c.end)) throw new Error(t('model.err.end-taken'));
      const row = { id, type: c.type, beam: c.beam, end: c.end === 'start' ? 'start' : 'end', column: c.column, params: { ...DEFAULTS_OF[c.type], ...(c.params || {}) } };
      this._s.connections.push(row); this._conPushed(row);
    } else if (c.type === 'baseplate') {
      if (this._conTable().bases.has(c.column)) throw new Error(t('model.err.base-taken'));
      const row = { id, type: 'baseplate', column: c.column, params: { ...BASEPLATE_DEFAULTS, ...(c.params || {}) } };
      this._s.connections.push(row); this._conPushed(row);
    } else if (c.type === 'splice') {
      if (!this._s.members.some((m) => m.id === c.a) || !this._s.members.some((m) => m.id === c.b) || c.a === c.b) throw new Error(t('model.err.conn-gone'));
      const aEnd = c.aEnd === 'start' ? 'start' : 'end';
      if (this._s.connections.some((x) => x.type === 'splice' && ((x.a === c.a && x.aEnd === aEnd) || (x.a === c.b && x.b === c.a) || (x.a === c.a && x.b === c.b)))) throw new Error(t('model.err.splice-taken'));
      this._s.connections.push({ id, type: 'splice', a: c.a, aEnd, b: c.b, params: { ...DEFAULTS_OF.splice, ...(c.params || {}) } });
    } else if (c.type === 'gusset') {
      const br = this._s.members.find((m) => m.id === c.brace);
      if (!br || br.type !== 'brace' || !this._s.members.some((m) => m.id === c.support) || c.brace === c.support) throw new Error(t('model.err.conn-gone'));
      const end = c.end === 'start' ? 'start' : 'end';
      if (this._s.connections.some((x) => x.type === 'gusset' && x.brace === c.brace && x.end === end)) throw new Error(t('model.err.end-taken'));
      this._s.connections.push({ id, type: 'gusset', brace: c.brace, end, support: c.support, params: { ...DEFAULTS_OF.gusset, ...(c.params || {}) } });
    } else if (c.type === 'mitre') {
      if (!this._s.members.some((m) => m.id === c.a) || !this._s.members.some((m) => m.id === c.b) || c.a === c.b) throw new Error(t('model.err.conn-gone'));
      const aEnd = c.aEnd === 'start' ? 'start' : 'end', bEnd = c.bEnd === 'start' ? 'start' : 'end';
      const ends = new Set(this._s.connections.filter((x) => x.type === 'mitre').flatMap((x) => [x.a + ':' + x.aEnd, x.b + ':' + x.bEnd]));
      if (ends.has(c.a + ':' + aEnd) || ends.has(c.b + ':' + bEnd)) throw new Error(t('model.err.end-taken'));
      this._s.connections.push({ id, type: 'mitre', a: c.a, aEnd, b: c.b, bEnd, params: { ...DEFAULTS_OF.mitre, ...(c.params || {}) } });
    } else throw new Error(t('model.err.conn-unknown'));
    this.keys.add('o:connections').add('e:connections:' + id);
    return id;
  }
  updateConnection(id, params) {
    const c = this._s.connections.find((x) => x.id === id);
    if (!c) throw new Error(t('model.err.conn-gone'));
    const next = { ...c.params };
    for (const [k, v] of Object.entries(params)) {
      if (!(k in next)) continue;
      if (typeof next[k] === 'number') { const n = Number(v); if (!Number.isFinite(n) || n < 0 || n > 10000) throw new Error(t('model.err.param-mm', { name: k })); next[k] = n; }
      else next[k] = cleanText(v, 30);
    }
    c.params = next;
  }
  swapConnectionEnd(id) { const c = this._s.connections.find((x) => x.id === id); if (c) c.end = c.end === 'start' ? 'end' : 'start'; }
  removeConnections(ids) { const set = new Set(ids); this._s.connections = this._s.connections.filter((c) => !set.has(c.id)); }

  addFooting(f) {
    const id = this.nextId('f');
    const r = cleanFooting({ ...FOOTING_DEFAULTS, ...f, mat: { ...FOOTING_DEFAULTS.mat, ...(f.mat || {}) }, starters: { ...FOOTING_DEFAULTS.starters, ...(f.starters || {}) } });
    if (!r.ok) throw new Error(r.error);
    const phase = cleanPhase(f.phase) || 1;
    this.ensurePhase(phase);
    this._s.footings.push({ id, ...r.footing, phase });
    return id;
  }
  updateFooting(id, patch) {
    const i = this._s.footings.findIndex((x) => x.id === id);
    if (i < 0) throw new Error(t('model.err.footing-gone'));
    const f = this._s.footings[i];
    const r = cleanFooting({ ...f, ...patch, mat: { ...f.mat, ...(patch.mat || {}) }, starters: { ...f.starters, ...(patch.starters || {}) } });
    if (!r.ok) throw new Error(r.error);
    const phase = patch.phase !== undefined ? cleanPhase(patch.phase) : f.phase || 1;
    if (!phase) throw new Error(t('phase.err.number', { max: MAX_PHASE }));
    this.ensurePhase(phase);
    this._s.footings[i] = { id, ...r.footing, phase };
  }
  removeFootings(ids) { const set = new Set(ids); this._s.footings = this._s.footings.filter((f) => !set.has(f.id)); }

  // ---- reinforced concrete (0.9 RC.1, rc-detail.js) ----
  rcState() { if (!this._s.rc) this._s.rc = { settings: cleanSettingsRc({}), elements: [], loose: [] }; return this._s.rc; }
  dropRcIfEmpty() { const r = this._s.rc; if (r && !r.elements.length && !r.loose.length && !r.touched) delete this._s.rc; }
  addRc(e) {
    const rc = this.rcState();
    if (rc.elements.length >= MAX_ELEMENTS) throw new Error(t('rc.err.too-many', { n: MAX_ELEMENTS }));
    const el = cleanOne(e);
    const phase = cleanPhase(e.phase) || 1;
    this.ensurePhase(phase);
    const id = this.nextId('r');
    rc.elements.push({ id, phase, ...el });
    return id;
  }
  updateRc(id, patch) {
    const rc = this.rcState(), i = rc.elements.findIndex((x) => x.id === id);
    if (i < 0) throw new Error(t('rc.err.gone'));
    const cur = rc.elements[i];
    const el = cleanOne(mergeInto(cur, patch));
    const phase = patch.phase !== undefined ? cleanPhase(patch.phase) : cur.phase || 1;
    if (!phase) throw new Error(t('phase.err.number', { max: MAX_PHASE }));
    this.ensurePhase(phase);
    rc.elements[i] = { id, phase, ...el };
  }
  removeRc(ids) { if (!this._s.rc || !ids.length) return; const set = new Set(ids); this._s.rc.elements = this._s.rc.elements.filter((x) => !set.has(x.id)); this.dropRcIfEmpty(); }
  setRcSettings(patch) { const rc = this.rcState(); rc.settings = cleanSettingsRc({ ...rc.settings, ...patch }); rc.touched = true; }
  /** Bars read from a file (already checked by cleanRc / the importer). */
  addLoose(list) { const rc = this.rcState(); const ids = []; for (const b of list) { const id = this.nextId('x'); rc.loose.push({ id, ...b }); ids.push(id); } return ids; }
  removeLoose(ids = null) { if (!this._s.rc) return; const set = ids && new Set(ids); this._s.rc.loose = set ? this._s.rc.loose.filter((b) => !set.has(b.id)) : []; this.dropRcIfEmpty(); }

  addStair(x) {
    const id = this.nextId('s');
    const r = cleanStair({ ...STAIR_DEFAULTS, ...x, tread: { ...STAIR_DEFAULTS.tread, ...(x.tread || {}) } });
    if (!r.ok) throw new Error(t('stair.err.field', { name: r.error }));
    const phase = cleanPhase(x.phase) || 1;
    this.ensurePhase(phase);
    if (!Array.isArray(this._s.stairs)) this._s.stairs = [];
    this._s.stairs.push({ id, ...r.stair, phase });
    return id;
  }
  updateStair(id, patch) {
    const i = (this._s.stairs || []).findIndex((x) => x.id === id);
    if (i < 0) throw new Error(t('stair.err.gone'));
    const x = this._s.stairs[i];
    const r = cleanStair({ ...x, ...patch, tread: { ...x.tread, ...(patch.tread || {}) } });
    if (!r.ok) throw new Error(t('stair.err.field', { name: r.error }));
    const phase = patch.phase !== undefined ? cleanPhase(patch.phase) : x.phase || 1;
    if (!phase) throw new Error(t('phase.err.number', { max: MAX_PHASE }));
    this.ensurePhase(phase);
    this._s.stairs[i] = { id, ...r.stair, phase };
  }
  addBolt(b) {
    const c = cleanBolt(b);
    if (!c) throw new Error(t('model.err.bolt'));
    if (!Array.isArray(this._s.bolts)) this._s.bolts = [];
    const id = this.nextId('k');
    this._s.bolts.push({ id, ...c });
    return id;
  }
  /** Removes loose bolts (ids), or all of them (null). */
  removeBolts(ids = null) { const set = ids && new Set(ids); this._s.bolts = set ? (this._s.bolts || []).filter((b) => !set.has(b.id)) : []; }
  removeStairs(ids) { const set = new Set(ids); this._s.stairs = (this._s.stairs || []).filter((x) => !set.has(x.id)); }

  // ---- reference pictures (0.8 D8.15, picture.js): put the PNG in Model.pictureSrcs first, then add it by its hash ----
  addPicture(p) {
    const c = cleanPicture(p);
    if (!c || !c.hash) throw new Error(t('pic.err.bad'));
    if (!Array.isArray(this._s.pictures)) this._s.pictures = [];
    if (this._s.pictures.length >= MAX_PICTURES) throw new Error(t('pic.err.max', { max: MAX_PICTURES }));
    const id = this.nextId('g');
    this._s.pictures.push({ id, ...c });
    return id;
  }
  /** Changes x, y, z, opacity or mmPerPx (checked as a whole picture; the PNG stays). */
  updatePicture(id, patch) {
    const i = (this._s.pictures || []).findIndex((p) => p.id === id);
    if (i < 0) throw new Error(t('pic.err.gone'));
    const keep = this._s.pictures[i], next = { ...keep };
    for (const k of ['x', 'y', 'z', 'opacity', 'mmPerPx']) if (patch[k] !== undefined) next[k] = Number(patch[k]);
    const c = cleanPicture(next);
    if (!c) throw new Error(t('pic.err.value'));
    this._s.pictures[i] = { id, ...c, hash: keep.hash };
  }
  movePictures(ids, d) {
    const set = new Set(ids);
    for (const p of this._s.pictures || []) if (set.has(p.id)) this.updatePicture(p.id, { x: p.x + d[0], y: p.y + d[1], z: p.z + d[2] });
  }
  removePictures(ids) {
    const set = new Set(ids);
    if (!this._s.pictures) return;
    this._s.pictures = this._s.pictures.filter((p) => !set.has(p.id));
    if (!this._s.pictures.length) delete this._s.pictures;
  }

  addProfile(p) {
    const r = cleanCustom(p);
    if (!r.ok) throw new Error(r.error);
    if (this._s.profiles.some((x) => x.name.toUpperCase() === r.profile.name.toUpperCase())) throw new Error(t('model.err.profile-taken', { name: r.profile.name }));
    this._s.profiles.push(r.profile);
  }
}

function vec(p) {
  if (!Array.isArray(p) || p.length !== 3) throw new Error(t('model.err.point'));
  const v = p.map(Number);
  if (v.some((n) => !Number.isFinite(n) || Math.abs(n) > 1e7)) throw new Error(t('model.err.coords'));
  return v;
}
function checkMember(m, custom) {
  if (!getProfile(m.profile, custom)) throw new Error(t('model.err.profile-unknown', { name: m.profile }));
  if (!MATERIALS.includes(m.material) && !cleanText(m.material, 30)) throw new Error(t('model.err.material'));
  m.material = cleanText(m.material, 30);
  if (!['top', 'middle', 'bottom'].includes(m.position)) throw new Error(t('model.err.position'));
  if (!Number.isFinite(m.rotation)) throw new Error(t('model.err.rotation'));
  m.rotation = ((m.rotation % 360) + 360) % 360;
  const dx = m.end[0] - m.start[0], dy = m.end[1] - m.start[1], dz = m.end[2] - m.start[2];
  if (Math.hypot(dx, dy, dz) < 1) throw new Error(t('model.err.same-points'));
}
export function cleanText(s, max) {
  return String(s ?? '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, max);
}
/** A loose bolt (untrusted): d 3–100, length 5–5000 mm, head anywhere within 10 km, axis any non-zero direction. */
function cleanBolt(b) {
  if (!b || typeof b !== 'object') return null;
  const d = Number(b.d), L = Number(b.length);
  const head = Array.isArray(b.head) ? b.head.map(Number) : [], ax = Array.isArray(b.axis) ? b.axis.map(Number) : [];
  if (!(d >= 3 && d <= 100) || !(L >= 5 && L <= 5000) || head.length !== 3 || ax.length !== 3 || [...head, ...ax].some((v) => !Number.isFinite(v)) || head.some((v) => Math.abs(v) > 1e7)) return null;
  const n = Math.hypot(...ax);
  if (n < 1e-9) return null;
  const r = (v) => Math.round(v * 1000) / 1000;
  return { d: r(d), length: r(L), grade: cleanText(b.grade, 20), kind: b.kind === 'ANCHORBOLT' ? 'ANCHORBOLT' : 'BOLT', head: head.map(r), axis: ax.map((v) => Math.round(v / n * 1e6) / 1e6), phase: cleanPhase(b.phase) || 1 };
}
/** One issue record (untrusted). */
function cleanIssue(x) {
  if (!x || typeof x !== 'object') return null;
  const sheet = cleanText(x.sheet, 120), number = cleanText(x.number, 30), rev = cleanText(x.rev, 5).toUpperCase();
  const date = /^\d{4}-\d{2}-\d{2}$/.test(String(x.date)) ? String(x.date) : '';
  const hash = /^[0-9A-F]{8}$/i.test(String(x.hash)) ? String(x.hash).toUpperCase() : '';
  if (!sheet || !number || !/^[A-Z]{1,5}$/.test(rev) || !hash) return null;
  const out = { sheet, number, rev, date, note: cleanText(x.note, 60), hash };
  // what each part drawn on the sheet looked like at this issue (0.4 D19): { 'part:<id>' | 'footing:<id>': 8-hex print }
  if (x.parts && typeof x.parts === 'object' && !Array.isArray(x.parts)) {
    const parts = {};
    for (const [k, v] of Object.entries(x.parts).slice(0, 5000)) if (/^(part|footing):[\w.:-]{1,80}$/.test(k) && /^[0-9A-F]{8}$/i.test(String(v))) parts[k] = String(v).toUpperCase();
    out.parts = parts;
  }
  return out;
}
function cleanHole(h) {
  if (!h || !['web', 'top', 'bottom', 'plate'].includes(h.face)) return null;
  const x = Number(h.x), y = Number(h.y), d = Number(h.d);
  if (![x, y, d].every(Number.isFinite) || d <= 0 || d > 200 || Math.abs(x) > 1e6 || Math.abs(y) > 1e4) return null;
  return { face: h.face, x, y, d };
}
function cleanCut(c) {
  if (!c || c.kind !== 'cope' || !['start', 'end'].includes(c.end) || !['top', 'bottom'].includes(c.side)) return null;
  const length = Number(c.length), depth = Number(c.depth);
  if (!(length > 0 && length < 1e5 && depth > 0 && depth < 5000)) return null;
  return { kind: 'cope', end: c.end, side: c.side, length, depth };
}

/** Reads a saved model (untrusted). { state, warnings } or throws a plain message. */
/**
 * 0.11 DC.27: Save for an older version (0.10 and before): the model file (toJSON text) with every id above 2^31 - 1 numbered again
 * from the lowest free number, every reference rewritten (history/ids.js narrowIds), seq after the highest id, no formatVersion.
 * Throws when the ids do not fit. → the file's text.
 */
export function olderCopy(text) {
  const file = JSON.parse(text);
  const { obj } = narrowIds(file, { limit: OLD_LIMIT });
  delete obj.formatVersion;
  obj.seq = Math.max(Number.isInteger(file.seq) && file.seq <= OLD_LIMIT ? file.seq : 1, maxOf(idNumbers(obj)) + 1);
  return JSON.stringify(obj, null, 1);
}
export function readModel(text) {
  let j;
  try { j = typeof text === 'string' ? JSON.parse(text) : text; } catch { throw new Error(t('model.err.not-json')); }
  if (!j || j.format !== FORMAT) throw new Error(t('model.err.not-model'));
  if (!Number.isInteger(j.version) || j.version < 1) throw new Error(t('model.err.no-version'));
  if (j.version > VERSION) throw new Error(t('model.err.newer', { version: j.version }));
  const warnings = [];
  const s = emptyState(cleanText(j.name, 80) || t('model.name.untitled'));
  const gl = (arr) => (Array.isArray(arr) ? arr : []).slice(0, 60).map((g) => ({ label: cleanText(g?.label, 8), at: Number(g?.at) })).filter((g) => g.label && Number.isFinite(g.at));
  s.grids = { x: gl(j.grids?.x).sort((a, b) => a.at - b.at), y: gl(j.grids?.y).sort((a, b) => a.at - b.at) };
  const lv = (Array.isArray(j.levels) ? j.levels : []).slice(0, 200).map((l) => ({ name: cleanText(l?.name, 40), z: Number(l?.z) })).filter((l) => l.name && Number.isFinite(l.z));
  s.levels = lv.length ? lv.sort((a, b) => a.z - b.z) : s.levels;
  for (const p of (Array.isArray(j.profiles) ? j.profiles : []).slice(0, 500)) {
    const r = cleanCustom(p, { saved: true });
    if (r.ok && !s.profiles.some((x) => x.name.toUpperCase() === r.profile.name.toUpperCase())) s.profiles.push(r.profile); else warnings.push(t('model.warn.profile'));
  }
  const ids = new Set();
  const uid = (id, prefix) => { let v = cleanText(id, 20); if (!/^[a-z]\d+$/.test(v) || ids.has(v)) v = prefix + (100000 + ids.size); ids.add(v); return v; };
  let dropped = 0;
  for (const m of (Array.isArray(j.members) ? j.members : []).slice(0, 20000)) {
    try {
      const mem = {
        id: uid(m.id, 'm'), type: MEMBER_TYPES.includes(m.type) ? m.type : 'beam', profile: cleanText(m.profile, 40), material: cleanText(m.material, 30) || 'A992',
        start: vec(m.start), end: vec(m.end), rotation: Number(m.rotation) || 0, position: ['top', 'middle', 'bottom'].includes(m.position) ? m.position : 'middle',
        name: cleanText(m.name, 40),
        cuts: (Array.isArray(m.cuts) ? m.cuts : []).slice(0, 50).map((c) => { const k = cleanCut(c); if (k) k.id = uid(c.id, 'k'); return k; }).filter(Boolean),
        holes: (Array.isArray(m.holes) ? m.holes : []).slice(0, 2000).map((h) => { const k = cleanHole(h); if (k) k.id = uid(h.id, 'h'); return k; }).filter(Boolean),
        phase: cleanPhase(m.phase) || 1,
      };
      if (m.panel) mem.panel = cleanText(m.panel, 40);
      checkMember(mem, s.profiles);
      s.members.push(mem);
    } catch { dropped++; }
  }
  if (dropped) warnings.push(t('model.warn.members', { n: dropped }));
  const memberIds = new Set(s.members.map((m) => m.id));
  let droppedC = 0;
  for (const c of (Array.isArray(j.connections) ? j.connections : []).slice(0, 20000)) {
    const base = DEFAULTS_OF[c?.type] || null;
    if (!base || !membersOf(c).every((id) => memberIds.has(id)) || ((c.type === 'splice' || c.type === 'mitre') && c.a === c.b) || (c.type === 'gusset' && c.brace === c.support)) { droppedC++; continue; }
    const params = { ...base };
    for (const k of Object.keys(base)) {
      const v = c.params?.[k];
      if (v === undefined) continue;
      if (typeof base[k] === 'number') { const n = Number(v); if (Number.isFinite(n) && n >= 0 && n <= 10000) params[k] = n; }
      else params[k] = cleanText(v, 30) || base[k];
    }
    const conn = c.type === 'splice' ? { id: uid(c.id, 'j'), type: 'splice', a: c.a, aEnd: c.aEnd === 'start' ? 'start' : 'end', b: c.b, params }
      : c.type === 'gusset' ? { id: uid(c.id, 'j'), type: 'gusset', brace: c.brace, end: c.end === 'start' ? 'start' : 'end', support: c.support, params }
        : c.type === 'mitre' ? { id: uid(c.id, 'j'), type: 'mitre', a: c.a, aEnd: c.aEnd === 'start' ? 'start' : 'end', b: c.b, bEnd: c.bEnd === 'start' ? 'start' : 'end', params }
        : { id: uid(c.id, 'j'), type: c.type, column: c.column, params };
    if (isBeamEnd(c)) { conn.beam = c.beam; conn.end = c.end === 'start' ? 'start' : 'end'; }
    s.connections.push(conn);
  }
  if (droppedC) warnings.push(t('model.warn.connections', { n: droppedC }));
  for (const f of (Array.isArray(j.footings) ? j.footings : []).slice(0, 5000)) {
    const r = cleanFooting(f);
    if (r.ok) s.footings.push({ id: uid(f.id, 'f'), ...r.footing, phase: cleanPhase(f.phase) || 1 }); else warnings.push(t('model.warn.footing', { error: r.error }));
  }
  s.bolts = [];
  for (const b of (Array.isArray(j.bolts) ? j.bolts : []).slice(0, 200000)) { const c = cleanBolt(b); if (c) s.bolts.push({ id: uid(b.id, 'k'), ...c }); }
  s.stairs = [];
  for (const x of (Array.isArray(j.stairs) ? j.stairs : []).slice(0, 2000)) {
    const r = cleanStair(x);
    if (r.ok) s.stairs.push({ id: uid(x.id, 's'), ...r.stair, phase: cleanPhase(x.phase) || 1 }); else warnings.push(t('model.warn.stair', { name: r.error }));
  }
  const rc = cleanRc(j.rc, uid);   // 0.9 RC.1: reinforced concrete elements and loose bars (rc-detail.js)
  if (rc) { warnings.push(...rc.warnings); delete rc.warnings; if (j.rc?.touched) rc.touched = true; s.rc = rc; }
  // phases: the file's list (numbers 1–999, names ≤ 40, no repeats), plus any a member or footing names
  const ph = [];
  for (const p of (Array.isArray(j.phases) ? j.phases : []).slice(0, MAX_PHASE)) {
    const n = cleanPhase(p?.n);
    if (n && !ph.some((x) => x.n === n)) ph.push({ n, name: cleanText(p?.name, 40) });
  }
  s.phases = withUsedPhases(ph.length ? ph : [{ n: 1, name: '' }], s);
  s.numbering = { perPhase: j.numbering?.perPhase !== false };
  s.issues = (Array.isArray(j.issues) ? j.issues : []).slice(0, 20000).map(cleanIssue).filter(Boolean);
  if (typeof j.regs === 'string' && j.regs.length < 2e5) s.regs = j.regs;   // 0.8 REG.1 step 4: the model's own regulation ticks (JSON text, add-on regs)
  const pa = cleanAcceptedDc(j.problems?.accepted);   // 0.7.1 → 0.8: accepted problems (docs/0.8-PROBLEMS-SPEC.md § File)
  if (pa.length) s.problems = { accepted: pa };
  const idsRec = cleanIdsRecord(j.ids);   // 0.7.1 71.25: the IDS the IFC export is checked against; its text goes to Model.idsTexts
  if (idsRec) s.ids = { name: idsRec.name, hash: idsHash(idsRec.text) };
  const an = cleanAnalysis(j.analysis);   // 0.6 LC.4: frame analysis settings and loads (optional; analysis.js)
  if (an) s.analysis = an;
  const er = cleanErection(j.erection);   // 0.8 EG.72: cranes and their load charts, as the person entered them (erection.js)
  if (er.cranes.length) s.erection = er;
  const fd = cleanFoundation(j.foundation);   // 0.8 EG.5: soil and column loads for the footing checks (foundation.js)
  if (fd) s.foundation = fd;
  const fr = cleanFraming(j.framing);   // 0.8 EG.6: framing panels (framing.js)
  if (fr) s.framing = fr;
  const sp = readSupply(j.supply);   // 0.8 round 3, EG.51: supplier stock and lead-time rows (lib/supply)
  if (sp) s.supply = sp;
  for (const k of ['calcs', 'reasons', 'docinfo']) {   // 0.9 DI.1 docinfo; 0.8 round 3: the shell's calc sheets and design reasons, kept as saved (the shell's modules clean them on load)
    const v = j[k];
    if (v && typeof v === 'object' && !Array.isArray(v) && v.format === 'cadcraft-' + k && JSON.stringify(v).length <= 2e6) s[k] = v;
  }
  if (j.issuelog && typeof j.issuelog === 'object' && j.issuelog.format === 'cadcraft-issues' && JSON.stringify(j.issuelog).length <= 8e6) s.issuelog = j.issuelog;   // 0.10 BK.48: the shared issue history (issues-detail.js; issuelog/history.js cleans it)
  const pics = readPictures(j.pictures);   // 0.8 D8.15: reference pictures, each with its PNG (kept by the Model, outside the state)
  if (pics.pictures.length) s.pictures = pics.pictures.map((p) => ({ ...p, id: uid(p.id, 'g') }));
  if (pics.dropped) warnings.push(t('pic.warn.dropped', { n: pics.dropped }));
  let maxSeq = 0;
  for (const id of ids) maxSeq = Math.max(maxSeq, Number(id.slice(1)) || 0);
  s.seq = Math.max(Number(j.seq) || 1, maxSeq + 1);
  return { state: s, warnings, idsText: idsRec ? idsRec.text : null, pictureSrcs: pics.srcs };
}
