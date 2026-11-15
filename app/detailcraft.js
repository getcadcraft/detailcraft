/* SPDX-License-Identifier: Apache-2.0 */
/**
 * detailcraft.js — the DetailCraft page: toolbar, panels, the 3D view, reports and exports.
 * Every model edit goes through model.change() (one undo step). The model is rebuilt into parts
 * (build.js), marked (marks.js) and scheduled (rebar.js) after every change; the view and panels
 * redraw from that. Model text reaches the page only through el() (text nodes) — files are untrusted.
 * Nothing is uploaded: open reads a local file, save and exports download.
 * Edit: several things can be selected (Shift/Ctrl+click adds or takes away, Ctrl+A selects all); Copy/Cut put the
 * members and footings (with their connections, holes and copes) on a clipboard kept in memory and in localStorage
 * "detailcraft.clipboard" (another tab can paste; read back through clipboard.js readClip, as untrusted as a file);
 * Paste follows the pointer and lands on the grid intersection clicked (or a typed offset / grid in Properties),
 * Paste in place keeps the coordinates, Duplicate pastes at the Settings offset. Each is one undo step.
 * Settings › DetailCraft (settings.inc; localStorage "detailcraft.settings"): steel for new members (US / EN),
 * the duplicate/paste offset, copy connections with members, show bolts in 3D.
 * Select and change (0.4 D1): a drag in Plan / Elevation (Shift+drag in 3D) draws a selection window (winsel.js: to the
 * right = wholly inside, to the left = touching; Shift adds); Properties of a selection has "Change on all of them" (one
 * property on many members, transform.js applyToMany) and "Move, rotate, mirror" (transform.js; by offset, by picking two
 * grid intersections with the Move tool (M), rotate about the selection's middle or a node, mirror in a grid line; optionally
 * keeping the original). Each is one undo step. New strings since 0.4 go through t() (lang/en.json).
 * Phases (0.4 D13): the Phases panel lists the model's phases (show / hide in the view and window selection, names, part
 * counts, add, remove an empty one), which phase new parts go in, and "Number marks per phase" (marks.js perPhase).
 * Properties set a part's phase; several selected: one phase for all.
 * Files (0.4 W2.19, 1.4): open, drop, save, exports, files the desktop app starts with and the start screen's recent list
 * all go through the shell's host.js — the browser's picker and downloads, or the desktop's dialogs and saving in place.
 * Autosave (0.4 1.2, the shell's app-autosave.js): the open model is one document; a copy is kept while it has unsaved
 * changes and offered back by the shell's "Recover your work?" after a crash.
 * Reference pictures (0.8 D8.15, picture.js): a copied area of a sheet (MarkupCraft's Copy area: the PNG on the system
 * clipboard, the clip in localStorage "cadcraft.areaclip", areaclip.js) pastes as a picture lying on a level at its true size.
 * Ctrl+V / Edit › Paste take the copied area when it was copied after DetailCraft's own clipboard; else the parts as before.
 * On Ctrl+V the browser's paste event shows what the system clipboard holds: a picture of another size there (copied later,
 * from somewhere else) stops the area paste. A picture pasted another way (the browser's menu) whose size is the clip's
 * (areaclip.js sameImage) uses the clip's size too. Selected alone, moved by dragging, deleted, one undo step each.
 * window.detailcraft exposes the model and actions for the browser check.
 */
import { el, fillDl } from './ui-util.js';
import { Model, starterState, gridsFromSpacings, spacingsOf, nodeName, pointAt, MATERIALS, defaultsFor, connPhase, MAX_PHASE } from './model.js';
import { getProfile, catalogGroups, plateName, CUSTOM_KINDS, describe, holeFaces, cleanCustom, cleanLibrary } from './profiles.js';
import { build } from './build.js';
import { markParts, bomTables, markFootings } from './marks.js';
import { findJoints, similarJoints, similarColumns, freeSplices, similarSplices, freeBraceEnds, similarBraceEnds, freeMitres, similarMitres, MITRE_DEFAULTS, PARAM_LABELS, PARAM_HELP, PARAM_CHOICES, dg1Row, isBeamEnd } from './connections.js';
import { mitrePreview } from './mitre-preview.js';   // 0.7.1 71.20: the Mitre dialog's drawing
import { STAIR_DEFAULTS, stairGeometry } from './stair.js';
import { BARS, BAR_SOURCE, BAR_SOURCE_BS, BAR_SETS, barLabel, bendingSchedule, scheduleTable, footingVolume, FOOTING_DEFAULTS, hookLeg, shapeCode, scheduleDims } from './rebar.js';
import { sectionsCsv, toCsv } from './csv.js';
import { nestBars, piecesFromMarks, cutListTables } from './nest.js';
import { installAgents } from './agents.js';
import { mountDetailShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { writeIfc, guidFor } from './ifc.js';
import { mountIds } from './ids-ui.js';   // 0.7.1 71.25: Output › Check against IDS… (cc-ids in ./ids/)
import { writeNc1, ncRefusal } from './nc1.js';
import { zip } from './zip.js';
import { shopSet, shopRefusal } from './shop.js';
import { toPdf } from './pdf.js';
import { sampleModel } from './sample.js';
import { drawingSet } from './drawings.js';
import { PAPER_KEYS, paperLabel, DEFAULT_PAPER } from './paper.js';
import { sheetModel, sheetDxf } from './dwgout.js';
import { phaseReport, reportTables, reportCsv, reportSheets } from './report.js';
import { clashCheck } from './clash.js';
import { kissFile, kissMetric } from './kiss.js';
import { sheetStatus, planIssue, revsByNumber } from './issues.js';
import { getHost } from "./host.js";
import { Autosave } from "./app-autosave.js";
import { handoffParam, takeHandoff } from "./handoff.js";
import { importIfc, reportLines } from './ifc-import.js';
import { copyClip, readClip, pasteInto, clipSegments, overlaps, CLIP_KEY } from './clipboard.js';
import { AREA_KEY, cleanAreaClip, sameImage } from './areaclip.js';   // 0.8 D8.15: MarkupCraft's copied area (byte-identical copy; never edit)
import { pictureFromClip, pictureSizeMm, pictureCorners, areaClipNewer, OPACITY_MIN } from './picture.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import { t as tr, has as hasKey } from './i18n.js';   // t() of the language files, named tr here: t is a common local name in this file
import { catalog as langCatalog } from './i18n.js';
import { dcProblems, anchorOf } from './problems-detailcraft.js';   // 0.7.1 → 0.8: the shell's Problems (docs/0.8-PROBLEMS-SPEC.md)
import { readNum } from './numtext.js';   // 0.6 DF.3: arithmetic in number boxes
import { moveXf, rotateXf, mirrorXf, transformRefs, ghostLines, selectionCenter, manyPatchable, applyToMany } from './transform.js';
import { selectionItems, windowSelect } from './winsel.js';
import { threeCubeOptions } from './viewcube-three.js';
import { constructability } from './constructability.js';   // 0.8 EG.43: constructability checks in Problems
import { mountSupply } from './supply-ui.js';   // 0.8 round 3, EG.51: the Supply tab (supplier stock and lead times against the cut list's bars)
import { mountFraming } from './framing-ui.js';   // 0.8 EG.6: the Framing tab (timber / light-gauge panels, cut lists, shop drawings)
import { mountFoundation } from './foundation-ui.js';   // 0.8 EG.5: the Foundation tab (footing design checks)
import { mountCongestion } from './congestion-ui.js';   // 0.8 EG.74: the Congestion tab (rebar heat map per footing)
import { rcBuild, mergeSchedule, rcProblems, rcAnchor, barOf as rcBarOf } from './rc-detail.js';   // 0.9 RC.1: reinforced concrete detailing (cc-rc in ./rc/)
import { mountRc } from './rc-ui.js';   // 0.9 RC.1: the Concrete tab, an element's properties, reinforcement shop drawings
import { mountAutopilot } from './autopilot-ui.js';   // 0.8 EG.73: the Autopilot tab (connections for the open joints)
import { mountErection } from './erection-ui.js';   // 0.8 EG.72: the Erection tab (crane chart, picks, the movie file)
import { mountAnalysis } from './analysis-ui.js';   // 0.6 LC.4: the Analysis tab (frame analysis, an aid, not a code check)
import { mountUndoHook } from './undo-hook.js';   // 0.9 EG.77: tells Studio each finished step

const root = document.querySelector('[data-detailcraft]');
if (root) start(root);

const r1 = (v) => String(Math.round(v * 10) / 10);
const mm = (v) => String(Math.round(v));
const kg = (v) => v.toFixed(1);

async function start(root) {
  const $ = (s) => root.querySelector(s);
  const ui = {
    tools: $('.dc-tools'), file: $('[data-file]'), name: $('[data-model-name]'),
    gridForm: $('[data-grid-form]'), gx: $('[data-gx]'), gxs: $('[data-gxs]'), gy: $('[data-gy]'), gys: $('[data-gys]'),
    levelForm: $('[data-level-form]'), levels: $('[data-levels]'), levelAdd: $('[data-level-add]'),
    profileForm: $('[data-profile-form]'), pkeep: $('[data-pkeep]'), myList: $('[data-my-list]'), pname: $('[data-pname]'), pkind: $('[data-pkind]'), pdims: $('[data-pdims]'), customList: $('[data-custom-list]'),
    marks: $('[data-marks]'), phases: $('[data-phases]'), stage: $('[data-stage]'), canvas: $('[data-canvas]'), hint: $('[data-hint]'), drop: $('[data-drop]'), nogl: $('[data-nogl]'),
    vlevel: $('[data-vlevel]'), vgrid: $('[data-vgrid]'),
    propsH: $('[data-props-h]'), props: $('[data-props]'),
    report: $('[data-report]'), countProblems: $('[data-count-problems]'), countClashes: $('[data-count-clashes]'),
    shop: $('[data-shop]'), shopH: $('[data-shop-h]'), shopCanvas: $('[data-shop-canvas]'), shopNote: $('[data-shop-note]'), shopPdf: $('[data-shop-pdf]'), shopAll: $('[data-shop-all]'), shopSheet: $('[data-shop-sheet]'), shopClose: $('[data-shop-close]'),
    node: $('[data-node]'), status: $('[data-status]'), counts: $('[data-counts]'),
    dwg: $('[data-dwg]'), dwgSheet: $('[data-dwg-sheet]'), dwgCanvas: $('[data-dwg-canvas]'), dwgNote: $('[data-dwg-note]'),
    dwgOne: $('[data-dwg-one]'), dwgAll: $('[data-dwg-all]'), dwgClose: $('[data-dwg-close]'),
    dwgPaper: $('[data-dwg-paper]'), shopPaper: $('[data-shop-paper]'), dwgFormat: $('[data-dwg-format]'),
    dwgOneLabel: $('[data-dwg-one-label]'), dwgAllLabel: $('[data-dwg-all-label]'),
    issueStatus: $('[data-issue-status]'), issueNote: $('[data-issue-note]'), issueOne: $('[data-issue-one]'), issueAll: $('[data-issue-all]'),
  };

  // My profiles: custom profiles kept in this browser (localStorage), copied into every new model
  const MY_KEY = 'detailcraft.myprofiles';
  const readMine = () => { try { return cleanLibrary(JSON.parse(localStorage.getItem(MY_KEY) || '[]')); } catch { return []; } };
  let mine = readMine();
  const writeMine = () => { try { localStorage.setItem(MY_KEY, JSON.stringify(mine)); return true; } catch { print(tr('app.mine.nosave')); return false; } };
  const freshState = () => { const s = starterState(tr('app.model.untitled')); s.profiles = mine.map((p) => ({ ...p })); return s; };
  /** Keeps a profile in My profiles; false (and a message) when another one already has its name. */
  function keepProfile(p) {
    const r = cleanCustom(p);
    if (!r.ok) { print(r.error); return false; }
    const old = mine.find((x) => x.name.toUpperCase() === r.profile.name.toUpperCase());
    if (old) {
      if (JSON.stringify(old) === JSON.stringify(r.profile)) return true;
      print(tr('app.mine.taken', { name: r.profile.name })); return false;
    }
    if (mine.length >= 200) { print(tr('app.mine.full')); return false; }
    mine = [...mine, r.profile];
    return writeMine();
  }

  let model = new Model(freshState());
  const undoHook = mountUndoHook({ getModel: () => model });   // 0.9 EG.77 undo across apps (follows the model when a file opens: attach)
  let built = null, marks = null, schedule = null;
  let tool = 'select';
  let sel = null;                      // { kind: 'member'|'conn'|'footing'|'stair', id } when one thing is selected
  let multi = [];                      // two or more refs when several are (sel is then null)
  const selected = () => (multi.length ? multi : sel ? [sel] : []);
  const selListeners = new Set();      // the shell's design reasons listen for the selection (shell-mount.js)
  let shellMount = null;               // the shell's seven modules, attached after the assistants below
  let pasteClip = null;                // the clipboard being placed by the paste tool
  let moveRefs = null;                 // what the Move tool moves (the selection when it started)
  let curPhase = 1;                    // new members and footings go in this phase (D13)
  const hiddenPhases = new Set();      // phases not drawn, not picked, not selected by Ctrl+A or a window (view only)
  let pending = null;                  // first node of a two-point placement
  let viewMode = '3d';
  let reportTab = 'problems';
  let idsUi = null;                    // 0.7.1 71.25: the IDS check of the IFC export (ids-ui.js)
  let frameProblems = null, frameProblemsSet = null;   // the Analysis tab's concrete / seismic problems (0.8 SU.1056): kept until the shell's Problems is there
  let problemsSync = null;             // the shell's Problems (manifest "problems"): hands build.js's problems over after every rebuild
  let breakSet = null, breakProblems = [], consSet = null, consTimer = 0, supply = null, supplySet = null, framing = null, frmSet = null, foundation = null, fndSet = null, congestion = null, congSet = null, rcUi = null, rcSet = null, rcb = null, autopilot = null, erection = null, extraProblems = [], extraSet = null, autoProblems = [], autoSet = null;   // the Erection tab (0.8 EG.72) and the problems of the round-2 checks, kept until the shell's Problems is there
  let analysis = null;                 // the Analysis tab (0.6 LC.4, analysis-ui.js), mounted with the reports below
  let workspace = null;                // the workspace layouts (0.7 WS.13, workspace-detailcraft.js): told after every redraw
  const opts = {
    beam: { ...defaultsFor('beam') }, column: { ...defaultsFor('column'), to: '' }, brace: { ...defaultsFor('brace') },
    plate: { t: 20, w: 200, material: 'A36', position: 'middle', rotation: 0 },
    footing: { L: FOOTING_DEFAULTS.L, B: FOOTING_DEFAULTS.B, H: FOOTING_DEFAULTS.H, concrete: FOOTING_DEFAULTS.concrete, mat: { ...FOOTING_DEFAULTS.mat }, starters: { ...FOOTING_DEFAULTS.starters } },
    stair: { ...STAIR_DEFAULTS, tread: { ...STAIR_DEFAULTS.tread }, rise: 0 },      // rise 0 = up to the next level (D23)
  };

  // ---- the 3D view (WebGL may be missing: everything else still works) ----
  let view = null;
  try {
    const { View3D } = await import('./view3d.js');
    view = new View3D(ui.canvas, {
      onPick: (ref, e) => { pick(ref, e); },
      onNode: (n) => placeAt(n),
      onHoverNode: (n) => { ui.node.value = n ? nodeName(model.state, n.p) : ''; },
      onWindow: (w) => windowPicked(w),
    });
  } catch (err) {
    ui.nogl.hidden = false;
    ui.canvas.hidden = true;
    console.warn('DetailCraft: no 3D view —', err?.message || err);
  }

  function print(msg) { ui.status.textContent = msg; }
  if (view) view.pictureSrc = (h) => model.pictureSrcs.get(h);   // D8.15: the PNGs are the Model's, not the state's

  // ---- corner indicator (Settings › DetailCraft): the view cube (viewcube.js through viewcube-three.js) | the X/Y/Z axis
  // icon | none — in the 3D view only (plan and elevation are fixed square views)
  let viewCube = null, axisIcon = null, cubeOpts = null, cornerShown = '';
  if (view) {
    cubeOpts = threeCubeOptions({ camera: () => view.camera, controls: () => view.controls, render: () => view.render(), home: () => view.fit() });
    viewCube = mountViewCube(ui.stage, { ...cubeOpts, i18n: { t: tr, has: hasKey } });   // the view cube's words from our language file
    axisIcon = mountAxisIcon(ui.stage, { getView: cubeOpts.getView, i18n: { t: tr, has: hasKey } });
    view.onRender = () => { syncCorner(); viewCube.update(); axisIcon.update(); };
    ui.canvas.addEventListener('pointerdown', () => cubeOpts.stop(), true);
    // touch (S.8): a long press adds the part to the selection or takes it out — a tablet has no Shift
    view.onLongPress = (ref) => {
      if (tool !== 'select') return;
      pick(ref, { shiftKey: true });
      navigator.vibrate?.(15);
    };
    // D2: press on a selected part and drag moves the selection (snapping the held part onto grid intersections)
    let dragRefs = null;
    view.dragParts = {
      can: (ref) => tool === 'select' && ref.kind !== 'conn' && selected().some((r) => refKey(r) === refKey(ref)),
      start: (ref) => {
        dragRefs = selected().filter((r) => r.kind !== 'conn');
        if (!dragRefs.length) return null;
        const m = ref.kind === 'member' ? model.member(ref.id) : null, f = ref.kind === 'footing' ? model.footing(ref.id) : null, st = ref.kind === 'stair' ? model.stair(ref.id) : null;
        const pic = ref.kind === 'picture' ? model.picture(ref.id) : null;   // D8.15: its middle and corners snap onto grid intersections
        const points = m ? [m.start, m.end] : f ? [[f.x, f.y, f.top]] : st ? [[st.x, st.y, st.z]] : pic ? [[pic.x, pic.y, pic.z], ...pictureCorners(pic)] : [];
        return { points, ghost: [...ghostLines(model.state, dragRefs, [0, 0, 0]), ...pictureGhost(dragRefs)] };
      },
      move: (off, node) => print(tr(node ? 'drag.snap' : 'drag.free', { x: mm(off[0]), y: mm(off[1]), z: mm(off[2]), node: node ? nodeName(model.state, node) : '' })),
      end: (off) => {
        const refs = dragRefs; dragRefs = null;
        const pics = refs.filter((r) => r.kind === 'picture').map((r) => r.id), parts = refs.filter((r) => r.kind !== 'picture');
        if (!pics.length) { runXf(refs, moveXf(...off), false, { kind: 'move', d: off }); return; }
        // pictures (and any parts with them) move in one undo step
        const r = edit(tr('xf.undo.move'), (tx) => { const x = parts.length ? transformRefs(tx, tx.s, parts, moveXf(...off)) : { members: 0, footings: 0, notes: [] }; tx.movePictures(pics, off); return x; });
        if (!r) return;
        setSelection(refs);
        print(tr('pic.moved', { n: pics.length, x: mm(off[0]), y: mm(off[1]), z: mm(off[2]) }) + (parts.length ? ' ' + tr('xf.done.move', { what: whatText(r.members, r.footings), x: mm(off[0]), y: mm(off[1]), z: mm(off[2]) }) : '') + ' ' + tr('xf.undo.hint'));
      },
      cancel: () => { dragRefs = null; print(tr('drag.cancel')); },
    };
    // 0.8 Track ID: hand the view to the input-device layer (assets/js/app-devices-ui.js) — one canvas for 3D, Plan and Elevation
    // (kind follows view.mode; Plan / Elevation don't orbit, their controls have rotate off). Moves go through the view's OrbitControls
    // as its own drag and wheel do (_pan × panSpeed, _rotateLeft/_rotateUp at 2π·px/height × rotateSpeed, _dollyIn(1 / f), then
    // update(), whose change event renders); a view cube turn in progress stops first, as a press does; fit = Fit
    const oc = () => view.controls;
    (window.ccViews ||= []).push({ el: ui.canvas, get kind() { return view.mode === '3d' ? '3d' : '2d'; },
      pan(dx, dy) { cubeOpts.stop(); const c = oc(); if (!c.enablePan) return; c._pan(dx * c.panSpeed, dy * c.panSpeed); c.update(); },
      zoom(f, x, y) {
        cubeOpts.stop(); const c = oc(); if (!c.enableZoom || !(f > 0)) return;
        if (x != null && y != null) { const r = ui.canvas.getBoundingClientRect(); c._updateZoomParameters(r.left + x, r.top + y); }   // only acts with zoomToCursor, as the wheel
        c._dollyIn(1 / f); c.update();
      },
      orbit(dx, dy) {
        cubeOpts.stop(); const c = oc(); if (view.mode !== '3d' || !c.enableRotate) return;
        const k = 2 * Math.PI * c.rotateSpeed / Math.max(1, ui.canvas.clientHeight);
        c._rotateLeft(dx * k); c._rotateUp(dy * k); c.update();
      },
      fit: () => view.fit() });
  }
  function syncCorner() {
    if (!viewCube) return;
    const want = view.mode === '3d' ? settings.corner : 'none';
    if (want !== cornerShown) { cornerShown = want; viewCube.setVisible(want === 'cube'); axisIcon.setVisible(want === 'axes'); }
  }

  // ---- settings (Settings › DetailCraft, settings.inc; conveniences for this viewer, kept in this browser) ----
  const SET_KEY = 'detailcraft.settings';
  const SET_DEFAULTS = { steel: 'us', offset: [6000, 0, 0], conns: true, bolts: true, corner: 'cube', paper: DEFAULT_PAPER, kiss: 'auto', barNames: 'imperial', shapeCodes: 'dc', dragSel: 'rect', nest: { stock: [6000, 12000], kerf: 3, trim: 0, keep: 500 } };
  const STEEL = {
    us: { beam: ['W16x26', 'A992'], column: ['W12x50', 'A992'], brace: ['HSS6x6x1/4', 'A500 Gr C'], plate: 'A36' },
    eu: { beam: ['IPE300', 'S355'], column: ['HEB200', 'S355'], brace: ['HEA160', 'S355'], plate: 'S355' },
  };
  const freshSettings = () => ({ ...SET_DEFAULTS, offset: [...SET_DEFAULTS.offset] });
  function readSettings() {
    const out = freshSettings();
    try {
      const v = JSON.parse(localStorage.getItem(SET_KEY) || '{}');
      if (v && typeof v === 'object') {
        if (v.steel === 'us' || v.steel === 'eu') out.steel = v.steel;
        if (Array.isArray(v.offset) && v.offset.length === 3 && v.offset.every((n) => typeof n === 'number' && Number.isFinite(n) && Math.abs(n) <= 1e6)) out.offset = v.offset.slice();
        if (typeof v.conns === 'boolean') out.conns = v.conns;
        if (typeof v.bolts === 'boolean') out.bolts = v.bolts;
        if (['cube', 'axes', 'none'].includes(v.corner)) out.corner = v.corner;
        if (PAPER_KEYS.includes(v.paper)) out.paper = v.paper;
        if (['auto', 'imperial', 'metric'].includes(v.kiss)) out.kiss = v.kiss;
        if (['rect', 'lasso'].includes(v.dragSel)) out.dragSel = v.dragSel;
        if (v.nest && typeof v.nest === 'object') {
          const st = (Array.isArray(v.nest.stock) ? v.nest.stock : []).map(Number).filter((x) => x >= 100 && x <= 30000).slice(0, 8);
          const nb = (x, lo, hi, d) => (Number.isFinite(Number(x)) && Number(x) >= lo && Number(x) <= hi ? Number(x) : d);
          out.nest = { stock: st.length ? st : [6000, 12000], kerf: nb(v.nest.kerf, 0, 20, 3), trim: nb(v.nest.trim, 0, 500, 0), keep: nb(v.nest.keep, 0, 30000, 500) };
        }
        if (['imperial', 'metric'].includes(v.barNames)) out.barNames = v.barNames;
        if (['dc', 'aci', 'bs8666'].includes(v.shapeCodes)) out.shapeCodes = v.shapeCodes;
      }
    } catch { /* private window or a damaged value: the defaults */ }
    return out;
  }
  let settings = readSettings();
  const persistSettings = () => { try { localStorage.setItem(SET_KEY, JSON.stringify(settings)); } catch { /* private window: this visit only */ } };
  const settingsDlg = document.querySelector('[data-app-settings]');
  function applySteel() {
    const st = STEEL[settings.steel];
    for (const t of ['beam', 'column', 'brace']) { opts[t].profile = st[t][0]; opts[t].material = st[t][1]; }
    opts.plate.material = st.plate;
    // new footings: ASTM bars and psi concrete with US steel; BS 4449 bars and a C-class with European steel (D9)
    const eu = settings.steel === 'eu';
    Object.assign(opts.footing.mat, { barX: eu ? 'H16' : FOOTING_DEFAULTS.mat.barX, barY: eu ? 'H16' : FOOTING_DEFAULTS.mat.barY });
    opts.footing.starters.bar = eu ? 'H20' : FOOTING_DEFAULTS.starters.bar;
    opts.footing.concrete = eu ? 'C30/37' : FOOTING_DEFAULTS.concrete;
  }
  function applyBolts() {
    if (!view) return;
    view.showBolts = settings.bolts;
    if (built) { view.setModel(model.state, built, marks); view.setSelection(selected()); }
  }
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const q = (n) => settingsDlg.querySelector('[name="' + n + '"]');
    settingsDlg.querySelectorAll('input[name="dcSteel"]').forEach((r) => { r.checked = r.value === settings.steel; });
    ['dcOffX', 'dcOffY', 'dcOffZ'].forEach((n, i) => { const f = q(n); if (f && document.activeElement !== f) { f.value = String(settings.offset[i]); f.removeAttribute('aria-invalid'); } });
    const c = q('dcConns'), b = q('dcBolts');
    if (c) c.checked = settings.conns;
    if (b) b.checked = settings.bolts;
    settingsDlg.querySelectorAll('input[name="dcCorner"]').forEach((r) => { r.checked = r.value === settings.corner; });
    settingsDlg.querySelectorAll('input[name="dcKiss"]').forEach((r) => { r.checked = r.value === settings.kiss; });
    settingsDlg.querySelectorAll('input[name="dcDragSel"]').forEach((r) => { r.checked = r.value === settings.dragSel; });
    settingsDlg.querySelectorAll('input[name="dcBarNames"]').forEach((r) => { r.checked = r.value === settings.barNames; });
    settingsDlg.querySelectorAll('input[name="dcShapeCodes"]').forEach((r) => { r.checked = r.value === settings.shapeCodes; });
    const pp = q('dcPaper');
    if (pp) { fillPaper(pp); pp.value = settings.paper; }
  }
  /** A sheet-size list (Settings, the Drawings and Shop drawing dialogs). */
  function fillPaper(sel) {
    if (sel.options.length !== PAPER_KEYS.length) sel.replaceChildren(...PAPER_KEYS.map((k) => el('option', { value: k }, paperLabel(k))));
    sel.value = settings.paper;
  }
  function setSetting(k, v, say) {
    settings[k] = v;
    persistSettings();
    if (k === 'steel') { applySteel(); if (tool !== 'select') renderProps(); }
    if (k === 'bolts') applyBolts();
    if (k === 'corner') syncCorner();
    syncSettingsForm();
    if (say) print(say);
  }
  /** Settings changed elsewhere (another tab, or before the dialog opened): take them, re-applying only what moved. */
  function reloadSettings() {
    const prev = settings;
    settings = readSettings();
    if (settings.steel !== prev.steel) { applySteel(); if (tool !== 'select') renderProps(); }
    if (settings.bolts !== prev.bolts) applyBolts();
    if (settings.corner !== prev.corner) syncCorner();
    syncSettingsForm();
  }
  if (settingsDlg) {
    settingsDlg.addEventListener('change', (e) => {
      const t = e.target;
      if (t.name === 'dcSteel') setSetting('steel', t.value === 'eu' ? 'eu' : 'us', tr(t.value === 'eu' ? 'app.set.steel.eu' : 'app.set.steel.us'));
      else if (/^dcOff[XYZ]$/.test(t.name)) {
        const v = Number(t.value);
        if (t.value === '' || !Number.isFinite(v) || Math.abs(v) > 1e6) { t.setAttribute('aria-invalid', 'true'); print(tr('app.set.offset.bad')); return; }
        t.removeAttribute('aria-invalid');
        const off = settings.offset.slice();
        off['XYZ'.indexOf(t.name.slice(-1))] = v;
        setSetting('offset', off, tr('app.set.offset.done', { x: String(off[0]), y: String(off[1]), z: String(off[2]) }));
      } else if (t.name === 'dcConns') setSetting('conns', t.checked, tr(t.checked ? 'app.set.conns.on' : 'app.set.conns.off'));
      else if (t.name === 'dcCorner') setSetting('corner', ['cube', 'axes', 'none'].includes(t.value) ? t.value : 'cube');
      else if (t.name === 'dcBarNames') { setSetting('barNames', t.value === 'metric' ? 'metric' : 'imperial'); renderProps(); renderReport(); }
      else if (t.name === 'dcShapeCodes') { setSetting('shapeCodes', ['dc', 'aci', 'bs8666'].includes(t.value) ? t.value : 'dc'); renderReport(); }
      else if (t.name === 'dcDragSel') { setSetting('dragSel', t.value === 'lasso' ? 'lasso' : 'rect'); if (view) view.lasso = settings.dragSel === 'lasso'; }
      else if (t.name === 'dcKiss') setSetting('kiss', ['auto', 'imperial', 'metric'].includes(t.value) ? t.value : 'auto');
      else if (t.name === 'dcPaper') setSetting('paper', PAPER_KEYS.includes(t.value) ? t.value : DEFAULT_PAPER, tr('dwg.paper.set', { paper: paperLabel(t.value) }));
      else if (t.name === 'dcBolts') setSetting('bolts', t.checked, tr(t.checked ? 'app.set.bolts.on' : 'app.set.bolts.off'));
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { settings = freshSettings(); persistSettings(); applySteel(); applyBolts(); syncCorner(); if (tool !== 'select') renderProps(); syncSettingsForm(); });
    // the shared dialog has no "open" event of its own: watch its open attribute and fill the fields each time
    new MutationObserver(() => { if (settingsDlg.open) reloadSettings(); }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
  }
  window.addEventListener('storage', (e) => {
    if (e.key === SET_KEY) reloadSettings();
    if (e.key === CLIP_KEY || e.key === null) renderBar();
  });
  applySteel();
  if (view) { view.showBolts = settings.bolts; view.lasso = settings.dragSel === 'lasso'; }
  syncSettingsForm();

  // ---- model → parts → marks; then redraw ----
  function recompute() {
    built = build(model.state);
    const perPhase = model.state.numbering?.perPhase !== false;
    marks = markParts(built, { perPhase });
    marks.footingMark = markFootings(model.state.footings, { perPhase });
    rcb = rcBuild(model.state);   // 0.9 RC.1: concrete elements, their bars and checks; loose bars read from a file
    built.rc = rcb;
    schedule = mergeSchedule(bendingSchedule(model.state.footings), rcb);   // one bending schedule over the whole structure
  }
  function refresh() {
    for (const n of [...hiddenPhases]) if (!model.state.phases.some((p) => p.n === n)) hiddenPhases.delete(n);
    if (!model.state.phases.some((p) => p.n === curPhase)) curPhase = model.state.phases[0]?.n || 1;
    if (view) view.hiddenPhases = hiddenPhases;
    if (sel && !exists(sel)) sel = null;
    multi = multi.filter(exists);
    if (multi.length === 1) { sel = multi[0]; multi = []; }
    recompute();
    if (view) { view.setModel(model.state, built, marks); view.setSelection(selected()); }
    renderLeft();
    // while someone is typing or tabbing in the properties panel, redraw it once focus has settled
    if (ui.props.contains(ui.props.ownerDocument.activeElement)) setTimeout(renderProps, 0); else renderProps();   // ownerDocument: the panel may be in the panels window
    analysis?.modelChanged();
    if (extraSet) { extraSet(erection.problems()); autoSet?.(autopilot.problems()); congSet?.(congestion.problems()); fndSet?.(foundation.problems()); frmSet?.(framing.problems()); rcSet?.(rcProblems(rcb)); if (consSet) { clearTimeout(consTimer); consTimer = setTimeout(() => consSet?.(constructability(model.state, built)), 400); } }   // 0.8 EG.72/73: their Problems follow the model, not the open tab
    problemsSync?.();
    idsUi?.changed();   // 0.7.1 71.25: re-check the IFC export against the IDS
    renderReport();
    renderBar();
    ui.hint.hidden = model.state.members.length > 0 || model.state.footings.length > 0 || !!model.state.rc?.elements.length || !!model.state.rc?.loose.length;
  }
  model.on(refresh);
  model.on(() => refreshAutosave());
  // The add-on host (add-on API 1.4, addons.js): the open model, for the Building regulations add-on. `model` is replaced when a file is opened.
  window.ccAddonModel = { current: () => ({ name: model.state.name || '' }), read: (fn) => fn(model) };
  const addonModelChanged = () => window.dispatchEvent(new CustomEvent('cc-addon-model-changed'));
  model.on(addonModelChanged);
  const exists = (r) => (r.kind === 'member' ? !!model.member(r.id) : r.kind === 'conn' ? !!model.connection(r.id) : r.kind === 'stair' ? !!model.stair(r.id) : r.kind === 'picture' ? !!model.picture(r.id)
    : r.kind === 'rc' ? !!model.state.rc?.elements.some((x) => x.id === r.id) : r.kind === 'rcbar' ? !!model.state.rc?.loose.some((x) => x.id === r.id) : !!model.footing(r.id));

  /** One undo step; a refused edit is said in the status bar and nothing changes. */
  function edit(label, fn) {
    try { const r = model.change(label, fn); return r === undefined ? true : r; }
    catch (err) { print(err.message || String(err)); renderProps(); return null; }
  }

  function setModel(m) {
    model = m;
    undoHook.attach();
    model.on(refresh);
    model.on(() => refreshAutosave());
    model.on(addonModelChanged); addonModelChanged();
    sel = null; multi = []; pending = null;
    shellMount?.modelChanged();
    hiddenPhases.clear(); curPhase = model.state.phases?.[0]?.n || 1;
    saveTarget = null;
    if (view) view.fitted = false;
    syncViewSelects();
    refresh();
    if (view) setView(viewMode);
  }

  // ---- toolbar ----
  ui.tools.addEventListener('click', (e) => {
    const b = e.target.closest('[data-act]');
    if (!b) return;
    const menu = b.closest('details.dc-menu');
    if (menu) menu.open = false;
    act(b.dataset.act);
  });
  // the More menu closes on a click anywhere else
  document.addEventListener('click', (e) => { for (const d of root.querySelectorAll('details.dc-menu[open]')) if (!d.contains(e.target)) d.open = false; });
  // on the controls themselves, not the bar: a workspace layout moves the 3D / Plan / Elevation picker into its info box (0.7 WS.13)
  root.querySelector('.dc-viewbar .dc-seg').addEventListener('click', (e) => { const v = e.target.closest('[data-view]'); if (v) setView(v.dataset.view); });
  root.querySelector('.dc-viewbar [data-act="fit"]').addEventListener('click', () => view?.fit());
  function act(a) {
    if (a.startsWith('tool:')) return setTool(a.slice(5));
    switch (a) {
      case 'new': return newModel();
      case 'open': return pickAndOpen(OPEN_TYPES);
      case 'import': return pickAndOpen(IFC_TYPES);
      case 'save': return saveModel();
      case 'sample': return openSample();
      case 'endplates': return addEndPlates();
      case 'baseplate': return addBasePlate();
      case 'sheartabs': return addShearTabs();
      case 'splice': return addSplices();
      case 'gusset': return addGussets();
      case 'mitre': return addMitres();
      case 'similar': return applySimilar();
      case 'undo': { const l = model.undo(); print(l ? tr('app.undo.done', { label: l }) : tr('app.undo.nothing')); return; }
      case 'redo': { const l = model.redo(); print(l ? tr('app.redo.done', { label: l }) : tr('app.redo.nothing')); return; }
      case 'delete': return deleteSelection();
      case 'copy': return void copySelection();
      case 'cut': return cutSelection();
      case 'paste': return pasteNewest();   // D8.15: the copied area when it is newer than DetailCraft's clipboard
      case 'paste-in-place': return startPaste(true);
      case 'duplicate': return duplicate();
      case 'move': return setTool('move');   // the M key's command (Edit › More), so menu styles can place and remap it
      case 'select-all': return selectAll();
      case 'select-none': { const had = selected().length; setSelection([]); print(tr(had ? 'app.sel.none.done' : 'app.sel.none.already')); return; }
      case 'ifc': return exportIfc();
      case 'ids': return idsUi?.open();   // 0.7.1 71.25
      case 'usd': return exportUsd();   // 0.7 XF.8 (session usd)
      case 'nc': return exportNc();
      case 'nc-send': return sendNc();
      case 'bom': return exportBom();
      case 'bending': return exportBending();
      case 'rc-sheets': return rcUi.openSheets(null);   // 0.9 RC.1: reinforcement shop drawings and bending sheets
      case 'rc-tab': reportTab = 'rc'; renderReport(); ui.report.focus(); print(tr('rc.tab.opened')); return;
      case 'shop': return openShop();
      case 'drawings': return openDrawings();
      case 'kiss': return exportKiss();
      case 'report': reportTab = 'phases'; renderReport(); ui.report.focus(); print(tr('rep.opened')); return;
      case 'fit': return view?.fit();
    }
  }
  function renderBar() {
    const btn = (a) => ui.tools.querySelector('[data-act="' + a + '"]');
    // the Edit buttons and their twins in the More menu: disabled with the reason in the title
    const setEdit = (a, on, title, why) => { for (const b of ui.tools.querySelectorAll('[data-act="' + a + '"]')) { b.disabled = !on; b.title = on ? title : tr('app.bar.why', { title, why }); } };
    const lastLabel = (stack) => stack[stack.length - 1]?.label || '';
    setEdit('undo', model.canUndo, model.canUndo ? tr('app.bar.undo.label', { label: lastLabel(model.undoStack) }) : tr('app.bar.undo'), tr('app.bar.undo.why'));
    setEdit('redo', model.canRedo, model.canRedo ? tr('app.bar.redo.label', { label: lastLabel(model.redoStack) }) : tr('app.bar.redo'), tr('app.bar.redo.why'));
    const picked = selected(), copyable = picked.some((r) => r.kind !== 'conn' && r.kind !== 'picture');
    const needCopy = tr(picked.length ? 'app.bar.copy.why.conn' : 'app.bar.copy.why.none');
    setEdit('copy', copyable, tr('app.bar.copy'), needCopy);
    setEdit('cut', copyable, tr('app.bar.cut'), needCopy);
    setEdit('duplicate', copyable, tr('app.bar.duplicate'), needCopy);
    setEdit('move', copyable, tr('app.bar.move'), needCopy);
    setEdit('delete', picked.length > 0, tr('app.bar.delete'), tr('app.bar.delete.why'));
    const canPaste = !!clip || clipStored();
    setEdit('paste', canPaste || !!storedArea(), tr('app.bar.paste'), tr('app.bar.paste.why'));
    setEdit('paste-in-place', canPaste, tr('app.bar.paste-in-place'), tr('app.bar.paste.why'));
    const any = model.state.members.length + model.state.footings.length > 0;
    setEdit('select-all', any, tr('app.bar.select-all'), tr('app.bar.select-all.why'));
    const st = model.state, content = any || st.stairs.length + st.connections.length > 0 || !!st.rc?.elements.length || !!st.rc?.loose.length;
    for (const b of ui.tools.querySelectorAll('[data-act]')) {
      const a = b.dataset.act;
      if (a === 'new') b.disabled = !content && !model.dirty;
      else if (['save', 'ifc', 'nc', 'bom', 'bending', 'drawings', 'kiss', 'fit'].includes(a)) b.disabled = !content;
      else if (a === 'nc-send') { b.hidden = !machinesReady(); b.disabled = !content; }
    }
    setEdit('select-none', picked.length > 0, tr('app.bar.select-none'), tr('app.bar.select-none.why'));
    btn('endplates').disabled = !(sel?.kind === 'member' && model.member(sel.id)?.type === 'beam');
    btn('baseplate').disabled = !(sel?.kind === 'member' && model.member(sel.id)?.type === 'column');
    btn('sheartabs').disabled = btn('endplates').disabled;
    btn('gusset').disabled = !picked.some((r) => r.kind === 'member' && model.member(r.id)?.type === 'brace');
    btn('splice').disabled = !picked.some((r) => r.kind === 'member' && ['beam', 'column'].includes(model.member(r.id)?.type));
    btn('mitre').disabled = picked.filter((r) => r.kind === 'member').length < 2 && !(sel?.kind === 'conn' && model.connection(sel.id)?.type === 'mitre');
    btn('similar').disabled = !(sel?.kind === 'conn');
    const part = selectedPart();
    btn('shop').disabled = !built.parts.length;   // no selection needed: the dialog holds every part mark
    for (const b of ui.tools.querySelectorAll('[data-act^="tool:"]')) b.setAttribute('aria-pressed', String(b.dataset.act === 'tool:' + tool));
    const steel = built.parts.reduce((s, p) => s + p.weight, 0), bars = schedule.rows.reduce((s, r) => s + r.totalWeight, 0);
    ui.counts.textContent = tr('app.bar.counts', { parts: built.parts.length, bolts: built.bolts.length, steel: kg(steel) }) + (bars ? ' ' + tr('app.bar.counts.rebar', { rebar: kg(bars) }) : '');
    window.ccSetDocTitle ? window.ccSetDocTitle(model.state.name, model.dirty) : (document.title = (model.dirty ? '• ' : '') + model.state.name + ' — DetailCraft | CadCraft');   // 2026-11-09: the shell's one title pattern
    workspace?.refresh();
  }

  function setTool(t) {
    if (t === 'move') {
      moveRefs = selected().filter((r) => r.kind !== 'conn');
      if (!moveRefs.length) { print(tr('xf.none')); return; }
    } else moveRefs = null;
    tool = t;
    pending = null;
    pasteClip = t === 'paste' ? currentClip(true) : null;
    if (t === 'paste' && !pasteClip) tool = t = 'select';
    if (view) { view.placing = t !== 'select'; view.boxSelect = t === 'select'; view.rubberFrom = null; view.ghost = pasteClip ? clipSegments(pasteClip) : null; view.updateHover(); }
    ui.stage.classList.toggle('is-placing', t !== 'select');
    if (t !== 'select') sel = null, multi = [], view?.setSelection(moveRefs || []);
    renderBar();
    renderProps();
    if (t === 'move') { print(tr('xf.move.from')); return; }
    if (t === 'select') { print(tr('tool.select.how')); return; }
    const how = ['beam', 'brace', 'plate', 'column', 'footing', 'stair', 'select', 'paste'].includes(t) ? tr('app.tool.how.' + t) : '';
    print(how || '');
  }

  // ---- views ----
  function syncViewSelects() {
    const s = model.state;
    const lv = ui.vlevel.value, gv = ui.vgrid.value;
    ui.vlevel.replaceChildren(...s.levels.map((l) => el('option', { value: l.name }, l.name)));
    ui.vgrid.replaceChildren(...s.grids.y.map((g) => el('option', { value: g.label }, tr('app.view.grid', { label: g.label }))));
    if (s.levels.some((l) => l.name === lv)) ui.vlevel.value = lv;
    if (s.grids.y.some((g) => g.label === gv)) ui.vgrid.value = gv;
  }
  function setView(mode) {
    viewMode = mode;
    for (const b of root.querySelectorAll('[data-view]')) b.setAttribute('aria-checked', String(b.dataset.view === mode));
    ui.vlevel.hidden = mode !== 'plan';
    ui.vgrid.hidden = mode !== 'elevation';
    const level = model.state.levels.find((l) => l.name === ui.vlevel.value) || model.state.levels[model.state.levels.length - 1];
    const grid = model.state.grids.y.find((g) => g.label === ui.vgrid.value) || model.state.grids.y[0];
    if (mode === 'plan' && level) ui.vlevel.value = level.name;
    if (mode === 'elevation' && grid) ui.vgrid.value = grid.label;
    view?.setMode(mode, { level, grid });
    workspace?.refresh();
  }
  ui.vlevel.addEventListener('change', () => setView('plan'));
  ui.vgrid.addEventListener('change', () => setView('elevation'));

  // ---- placing ----
  function placeAt(n) {
    const s = model.state;
    if (tool === 'move') {
      if (!pending) {
        pending = n;
        if (view) { view.rubberFrom = n.p; view.ghost = ghostLines(s, moveRefs, n.p); view.drawOverlay(); }
        print(tr('xf.move.to', { from: nodeName(s, n.p) }));
        return;
      }
      if (pending.p.join() === n.p.join()) { print(tr('xf.move.same')); return; }
      const d = [n.p[0] - pending.p[0], n.p[1] - pending.p[1], n.p[2] - pending.p[2]];
      const refs = moveRefs;
      setTool('select');
      runXf(refs, moveXf(...d), false, { kind: 'move', d });
      return;
    }
    if (tool === 'paste') {
      if (!pasteClip) return setTool('select');
      const b = pasteClip.base;
      pasteClipAt(pasteClip, [n.p[0] - b[0], n.p[1] - b[1], n.p[2] - b[2]], 'at', { node: nodeName(s, n.p) });
      return;
    }
    if (tool === 'column') {
      const above = s.levels.filter((l) => l.z > n.p[2] + 0.5);
      const top = above.find((l) => l.name === opts.column.to) || above[0];
      if (!top) { print(tr('app.place.column.no-level', { level: n.level })); return; }
      const o = opts.column;
      const id = edit(tr('app.undo.place.column'), (tx) => tx.addMember({ type: 'column', profile: o.profile, material: o.material, position: o.position, rotation: o.rotation, start: n.p, end: [n.p[0], n.p[1], top.z], phase: curPhase }));
      if (id) print(tr('app.place.column.done', { profile: o.profile, gy: n.gy, gx: n.gx, level: n.level, top: top.name }));
      return;
    }
    if (tool === 'footing') {
      const o = opts.footing;
      const id = edit(tr('app.undo.place.footing'), (tx) => tx.addFooting({ x: n.p[0], y: n.p[1], top: n.p[2], L: o.L, B: o.B, H: o.H, concrete: o.concrete, mat: o.mat, starters: o.starters, phase: curPhase }));
      if (id) print(tr('app.place.footing.done', { l: mm(o.L), b: mm(o.B), h: mm(o.H), gy: n.gy, gx: n.gx }));
      return;
    }
    if (tool === 'stair') {
      const o = opts.stair;
      let rise = o.rise;
      if (!rise) {
        const up = s.levels.filter((l) => l.z > n.p[2] + 0.5).sort((a, b) => a.z - b.z)[0];
        if (!up) { print(tr('app.place.stair.no-level', { level: n.level })); return; }
        rise = up.z - n.p[2];
      }
      const id = edit(tr('app.undo.place.stair'), (tx) => tx.addStair({ ...o, tread: { ...o.tread }, x: n.p[0], y: n.p[1], z: n.p[2], rise, phase: curPhase }));
      if (id) { const g = stairGeometry(model.stair(id), (nm) => getProfile(nm, model.state.profiles)); print(tr('app.place.stair.done', { n: g.n, r: r1(g.riser), gy: n.gy, gx: n.gx })); }
      return;
    }
    if (!['beam', 'brace', 'plate'].includes(tool)) return;
    if (!pending) {
      pending = n;
      if (view) { view.rubberFrom = n.p; view.drawOverlay(); }
      print(tr('app.place.from', { node: nodeName(s, n.p) }));
      return;
    }
    if (pending.p.join() === n.p.join()) { print(tr('app.place.same')); return; }
    const a = pending.p, b = n.p;
    pending = null;
    if (view) { view.rubberFrom = null; view.drawOverlay(); }
    placeLine(a, b);
  }
  function placeLine(a, b) {
    const o = opts[tool];
    const profile = tool === 'plate' ? plateName(o.t, o.w) : o.profile;
    const id = edit(tr('app.undo.place.' + tool), (tx) => tx.addMember({ type: tool, profile, material: o.material, position: o.position, rotation: o.rotation, start: a, end: b, phase: curPhase }));
    if (id) print(tr('app.place.done.' + tool, { profile, from: nodeName(model.state, a), to: nodeName(model.state, b) }));
  }

  // ---- selection ----
  function select(ref) {
    if (tool !== 'select') return;
    setSelection(ref && exists(ref) ? [ref] : []);
    if (sel) print(describeRef(sel));
  }
  /** Any number of refs (missing ones and repeats dropped): one → sel, several → multi. */
  function setSelection(refs) {
    const seen = new Set(), list = [];
    for (const r of refs) { if (!r || !exists(r) || seen.has(refKey(r))) continue; seen.add(refKey(r)); list.push(r); }
    if (list.length <= 1) { sel = list[0] || null; multi = []; } else { sel = null; multi = list; }
    view?.setSelection(selected());
    renderProps();
    renderBar();
    for (const fn of selListeners) { try { fn(); } catch (e) { /* a listener must not stop the selection */ } }
    if (reportTab === 'analysis') renderReport();   // 0.6 LC.4: the Analysis tab loads the selected members
  }
  /** A click in the view: plain = select that; Shift/Ctrl/Cmd = add it or take it away. */
  function pick(ref, e) {
    if (tool !== 'select') return;
    if (!(e && (e.shiftKey || e.ctrlKey || e.metaKey))) return select(ref);
    if (!ref) return;
    const cur = selected();
    const next = cur.some((r) => refKey(r) === refKey(ref)) ? cur.filter((r) => refKey(r) !== refKey(ref)) : [...cur, ref];
    setSelection(next);
    print(next.length === 1 ? describeRef(next[0]) : tr('app.sel.many', { n: next.length }));
  }
  const refKey = (r) => r.kind + ':' + r.id;
  /** A selection window let go in the view: what it takes (winsel.js), added with Shift. */
  function windowPicked(w) {
    if (tool !== 'select' || !view || !built) return;
    const got = windowSelect(selectionItems(model.state, built, hiddenPhases), (p) => view.project(p), w.path, w.mode, view.cutPlanes());
    const kind = w.mode === 'fence' ? 'fence' : w.mode === 'crossing' ? 'crossing' : 'window';
    if (!got.length) { if (!w.add) setSelection([]); print(tr('sel.' + kind + '.none')); return; }
    const next = w.add ? [...selected(), ...got] : got;
    setSelection(next);
    print(tr('sel.' + kind + '.got', { n: got.length }) + (w.add ? ' ' + tr('sel.total', { n: selected().length }) : ''));
  }
  function selectAll() {
    if (tool !== 'select') setTool('select');
    const s = model.state;
    const vis = (x) => !hiddenPhases.has(x.phase || 1);
    const mem = s.members.filter(vis), foot = s.footings.filter(vis), conns = s.connections.filter((c) => !hiddenPhases.has(connPhase(s, c))), sts = (s.stairs || []).filter(vis);
    const refs = [...mem.map((m) => ({ kind: 'member', id: m.id })), ...conns.map((c) => ({ kind: 'conn', id: c.id })), ...foot.map((f) => ({ kind: 'footing', id: f.id })), ...sts.map((x) => ({ kind: 'stair', id: x.id }))];
    if (!refs.length) { print(hiddenPhases.size ? tr('phase.all.hidden') : tr('app.sel.all.empty')); return; }
    setSelection(refs);
    print(tr('app.sel.all.done', { what: countText({ members: mem.length, connections: conns.length, footings: foot.length, stairs: sts.length }) }) + (hiddenPhases.size ? ' ' + tr('phase.all.note') : ''));
  }
  function describeRef(r) {
    if (r.kind === 'member') { const m = model.member(r.id); const mk = marks.partMark.get(r.id); return mk ? tr('app.ref.member.marked', { type: typeName(m.type), profile: m.profile, part: mk, asm: marks.asmMark.get(r.id) || '' }) : tr('app.ref.member', { type: typeName(m.type), profile: m.profile }); }
    if (r.kind === 'conn') { const c = model.connection(r.id); return tr('app.ref.' + c.type, { id: c.id }); }
    if (r.kind === 'stair') { const x = model.stair(r.id); return tr('app.ref.stair', { mark: marks.asmMark.get(r.id + '.stringerL') || '', rise: mm(x.rise), width: mm(x.width) }); }
    if (r.kind === 'picture') { const p = model.picture(r.id), [w, h] = pictureSizeMm(p); return tr('pic.ref', { name: p.name || tr('pic.unnamed'), w: mm(w), h: mm(h) }); }
    if (r.kind === 'rc') { const x = model.state.rc.elements.find((q) => q.id === r.id), it = rcb?.byId.get(r.id); return tr('rc.ref', { name: rcb?.labels.get(r.id) || r.id, n: it ? it.res.groups.reduce((a, g) => a + g.count, 0) : 0, fails: it ? it.checks.filter((c) => c.status === 'fail').length : 0, kind: tr('rc.kind.' + x.kind) }); }
    if (r.kind === 'rcbar') { const b = model.state.rc.loose.find((q) => q.id === r.id); return tr('rc.ref.loose', { bar: barLabel(b.bar, settings.barNames), mark: b.mark || '—', host: b.host?.name || b.host?.cls || tr('rc.loose.nohost') }); }
    const f = model.footing(r.id); return tr('app.ref.footing', { mark: marks.footingMark.get(f.id) || '', l: mm(f.L), b: mm(f.B), h: mm(f.H) });
  }
  function selectedPart() {
    if (!sel) return null;
    if (sel.kind === 'member') return built.byId.get(sel.id) || null;
    if (sel.kind === 'conn') return built.byId.get(sel.id + '.plate') || null;
    return null;
  }
  const cap = (s) => s.charAt(0).toUpperCase() + s.slice(1);
  /** A member type's name (beam, column, brace, plate), capitalized. */
  const typeName = (t) => (hasKey('app.type.' + t) ? tr('app.type.' + t) : cap(t));

  function deleteRefs(refs, label) {
    const ids = (k) => refs.filter((r) => r.kind === k).map((r) => r.id);
    const ms = ids('member'), cs = ids('conn'), fs = ids('footing'), ss = ids('stair'), ps = ids('picture'), rs = ids('rc'), xs = ids('rcbar');
    const ok = edit(label, (tx) => { tx.removeConnections(cs); tx.removeMembers(ms); tx.removeFootings(fs); tx.removeStairs(ss); tx.removePictures(ps); tx.removeRc(rs); if (xs.length) tx.removeLoose(xs); });
    setSelection([]);
    return ok;
  }
  function deleteSelection() {
    const refs = selected();
    if (!refs.length) { print(tr('app.delete.none')); return; }
    const r = refs[0];
    const label = refs.length > 1 ? tr('app.undo.delete.many', { n: refs.length }) : r.kind === 'member' ? tr('app.undo.delete.' + model.member(r.id).type) : tr(r.kind === 'conn' ? 'app.undo.delete.conn' : r.kind === 'picture' ? 'pic.undo.delete' : r.kind === 'rc' ? 'rc.undo.delete' : r.kind === 'rcbar' ? 'rc.undo.delete-bar' : 'app.undo.delete.footing');
    if (deleteRefs(refs, label)) print(refs.length > 1 ? tr('app.delete.done.many', { n: refs.length }) : tr('app.delete.done.one'));
  }

  // ---- clipboard: this tab's copy in memory, and in localStorage so another tab can paste it ----
  let clip = null, clipRaw = null;     // the last copy (checked by readClip) and the stored text it came from
  function clipStored() { try { return localStorage.getItem(CLIP_KEY) !== null; } catch { return false; } }
  /** The newest copy: another tab's (read as untrusted) when it changed since, else this tab's. */
  function currentClip(say) {
    let raw = null;
    try { raw = localStorage.getItem(CLIP_KEY); } catch { /* private window: this tab's copy */ }
    if (raw && raw !== clipRaw) {
      try { clip = readClip(raw); clipRaw = raw; }
      catch (err) { if (say && !clip) print(tr('app.paste.bad', { error: err.message })); }
    }
    return clip;
  }
  function countText(c) {
    const out = [];
    if (c.members) out.push(tr('app.count.members', { n: c.members }));
    if (c.connections) out.push(tr('app.count.connections', { n: c.connections }));
    if (c.footings) out.push(tr('app.count.footings', { n: c.footings }));
    if (c.stairs) out.push(tr('app.count.stairs', { n: c.stairs }));
    return out.length ? out.join(tr('app.count.sep')) : tr('app.count.nothing');
  }
  /** Copies the selection into a clip (not yet the clipboard). Says why when it can't. */
  function takeCopy() {
    const refs = selected();
    if (!refs.length) { print(tr('app.copy.none')); return null; }
    const r = copyClip(model.state, refs, { connections: settings.conns });
    if (!r) { print(tr(refs.every((x) => x.kind === 'picture') ? 'pic.copy.no' : 'app.copy.conn-only')); return null; }
    return r;
  }
  function leftOutText(c) {
    if (!c.leftOut) return '';
    return ' ' + (settings.conns ? tr('app.copy.left-out', { n: c.leftOut }) : tr('app.copy.left-out.off'));
  }
  function copySelection() {
    const r = takeCopy();
    if (!r) return null;
    clip = readClip(r.clip);
    clipRaw = JSON.stringify(r.clip);
    try { localStorage.setItem(CLIP_KEY, clipRaw); }
    catch { clipRaw = null; try { localStorage.removeItem(CLIP_KEY); } catch { /* fine */ } }   // too big or private window: this tab still has it
    print(tr('app.copy.done', { what: countText(r.counts) }) + leftOutText(r.counts));
    renderBar();
    return r;
  }
  function cutSelection() {
    const refs = selected();
    const r = copySelection();
    if (!r) return;
    if (deleteRefs(refs, tr('app.undo.cut'))) print(tr('app.cut.done', { what: countText(r.counts) }) + leftOutText(r.counts));
  }
  function startPaste(inPlace) {
    const c = currentClip(true);
    if (!c) { if (!clipStored()) print(tr('app.paste.empty')); return; }
    if (inPlace) { if (tool !== 'select') setTool('select'); pasteClipAt(c, [0, 0, 0], 'in-place'); return; }
    setTool('paste');
  }
  // ---- reference pictures (0.8 D8.15): a copied area of a sheet, pasted at its true size ----
  function storedArea() { try { return cleanAreaClip(localStorage.getItem(AREA_KEY)); } catch { return null; } }
  /** Edit › Paste and Ctrl+V: the copied area when it was copied after DetailCraft's own clipboard, else the parts. */
  function pasteNewest() {
    const area = storedArea();
    if (area && areaClipNewer(area, currentClip(false))) return pastePicture(area);
    return startPaste(false);
  }
  /** The level a picture goes on: the plan's level in Plan, else the lowest. */
  function pictureLevel() {
    const lv = model.state.levels;
    return (viewMode === 'plan' && lv.find((l) => l.name === ui.vlevel.value)) || lv[0] || { name: '', z: 0 };
  }
  /** One undo step: the clip as a picture in the middle of the grid on that level, selected. */
  function pastePicture(area) {
    const s = model.state, lv = pictureLevel();
    const mid = (g) => (g.length ? (g[0].at + g[g.length - 1].at) / 2 : 0);
    const r = pictureFromClip(area, { at: [mid(s.grids.x), mid(s.grids.y), lv.z] });
    if (!r) { print(tr('pic.paste.bad')); return null; }
    const hash = model.pictureSrcs.put(r.src);
    const id = edit(tr('pic.undo.paste'), (tx) => tx.addPicture({ ...r.picture, hash }));
    if (!id) return null;
    if (tool !== 'select') setTool('select');
    setSelection([{ kind: 'picture', id }]);
    const [w, h] = pictureSizeMm(r.picture);
    print(tr(r.size === 'real' ? 'pic.paste.real' : 'pic.paste.paper', { w: mm(w), h: mm(h), level: lv.name })
      + (area.overlay ? ' ' + tr('pic.paste.overlay', { pct: String(Math.round(r.picture.opacity * 100)) }) : '') + ' ' + tr('pic.paste.drag') + ' ' + tr('app.paste.undo-hint'));
    return id;
  }
  /** The dashed outline of the pictures among refs (a drag's ghost). */
  function pictureGhost(refs) {
    const out = [];
    for (const r of refs) {
      const p = r.kind === 'picture' && model.picture(r.id);
      if (!p) continue;
      const c = pictureCorners(p);
      for (let i = 0; i < 4; i++) out.push([c[i], c[(i + 1) % 4]]);
    }
    return out;
  }
  /** A picture's pixel size (from the system clipboard), or null. */
  async function imageSize(file) {
    try { const b = await createImageBitmap(file); const wh = [b.width, b.height]; b.close?.(); return wh; } catch { return null; }
  }
  // Ctrl+V when the copied area is newer: the key leaves the browser's paste event to come (it shows what the system clipboard
  // holds); if none comes (a browser that sends none to a page with nothing to type in), the area is pasted after a moment
  let keyPaste = null;
  function keyPasteArea(area) {
    clearTimeout(keyPaste?.timer);
    keyPaste = { area, timer: setTimeout(() => { keyPaste = null; pastePicture(area); }, 200) };
  }
  document.addEventListener('paste', async (e) => {
    const kp = keyPaste;
    if (kp) { clearTimeout(kp.timer); keyPaste = null; }
    const t = e.target;
    if (!kp && (document.querySelector('dialog[open]') || (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName))))) return;
    const item = [...(e.clipboardData?.items || [])].find((i) => i.kind === 'file' && /^image\//.test(i.type));
    if (!kp && !item) return;   // text and the like: not ours
    e.preventDefault();
    const area = kp?.area || storedArea();
    if (!item) { pastePicture(area); return; }   // Ctrl+V and no picture on the clipboard (some browsers keep it to themselves): the copied area
    const wh = await imageSize(item.getAsFile());
    if (area && wh && sameImage(area, wh[0], wh[1], kp ? { maxAgeMs: 0 } : {})) { pastePicture(area); return; }
    print(tr(kp ? 'pic.paste.other' : 'pic.paste.unknown'));
  });
  function duplicate() {
    const r = takeCopy();
    if (!r) return;
    const o = settings.offset;
    pasteClipAt(readClip(r.clip), o, 'duplicate', { x: String(o[0]), y: String(o[1]), z: String(o[2]) });
  }
  /** One undo step: the clip's contents at base + offset, selected afterwards. how: at | offset | in-place | duplicate
   * (the undo label and the message); fills: node (at) or x, y, z (offset, duplicate). */
  function pasteClipAt(c, offset, how, fills = {}) {
    const over = overlaps(model.state, c, offset);
    const label = tr(how === 'duplicate' ? 'app.undo.duplicate' : how === 'in-place' ? 'app.undo.paste-in-place' : 'app.undo.paste');
    const r = edit(label, (tx) => pasteInto(tx, c, offset));
    if (!r) return;
    if (tool !== 'select') setTool('select');
    setSelection(r.refs);
    const n = { members: c.members.length, connections: r.refs.filter((x) => x.kind === 'conn').length, footings: c.footings.length, stairs: (c.stairs || []).length };
    print(tr('app.paste.done.' + how, { ...fills, what: countText(n) })
      + (over ? ' ' + tr('app.paste.over', { n: over }) : '')
      + (r.profilesKept ? ' ' + tr('app.paste.profiles-kept') : '')
      + (c.warnings?.length ? ' ' + c.warnings.join(' ') : '') + ' ' + tr('app.paste.undo-hint'));
  }

  // ---- connections ----
  function addEndPlates() {
    if (sel?.kind !== 'member') return;
    const id = sel.id;
    const joints = findJoints(model.state).filter((j) => j.beam === id);
    const taken = new Set(model.state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
    const free = joints.filter((j) => !taken.has(j.beam + ':' + j.end));
    const flange = free.filter((j) => j.face === 'flange' || j.face === 'web');   // square joints (D6: a column web too)
    if (!joints.length) { print(tr('app.endplate.no-joint')); return; }
    if (!flange.length) { print(tr(free.length ? 'app.endplate.skew' : 'app.endplate.both')); return; }
    const ids = edit(tr('app.undo.endplates'), (tx) => flange.map((j) => tx.addConnection({ type: 'endplate', beam: j.beam, end: j.end, column: j.column })));
    if (ids) { sel = { kind: 'conn', id: ids[0] }; refresh(); print(tr('app.endplate.added', { n: flange.length })); }
  }
  /** Shear tabs (D5, D7) at every end of the selected beam that meets a column, square or not. */
  function addShearTabs() {
    if (sel?.kind !== 'member') return;
    const id = sel.id;
    const joints = findJoints(model.state).filter((j) => j.beam === id);
    const taken = new Set(model.state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
    const free = joints.filter((j) => !taken.has(j.beam + ':' + j.end));
    if (!joints.length) { print(tr('app.endplate.no-joint')); return; }
    if (!free.length) { print(tr('app.endplate.both')); return; }
    const ids = edit(tr('app.undo.sheartabs'), (tx) => free.map((j) => tx.addConnection({ type: 'sheartab', beam: j.beam, end: j.end, column: j.column })));
    if (ids) { sel = { kind: 'conn', id: ids[0] }; refresh(); print(tr('app.sheartab.added', { n: free.length })); }
  }
  /** Bolted splices (D21) wherever a selected beam or column meets another piece of its profile end to end. */
  function addSplices() {
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    if (!ids.length) return;
    const free = freeSplices(model.state, ids);
    if (!free.length) { print(tr('app.splice.none')); return; }
    const cids = edit(tr('app.undo.splice'), (tx) => free.map((j) => tx.addConnection({ type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b })));
    if (cids) { sel = { kind: 'conn', id: cids[0] }; refresh(); print(tr('app.splice.added2', { n: free.length })); }
  }
  /** Brace gussets (D22) at every end of the selected braces that lands on a column or beam. */
  function addGussets() {
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    if (!ids.length) return;
    const free = freeBraceEnds(model.state, ids);
    if (!free.length) { print(tr('app.gusset.none')); return; }
    const cids = edit(tr('app.undo.gusset'), (tx) => free.map((j) => tx.addConnection({ type: 'gusset', brace: j.brace, end: j.end, support: j.support })));
    if (cids) { sel = { kind: 'conn', id: cids[0] }; refresh(); print(tr('app.gusset.added', { n: free.length })); }
  }
  /**
   * Mitres (0.7.1 71.20) where the selected I-shaped members meet end to end at an angle: the Mitre dialog, with a preview,
   * then one undo step for every joint found (the same parameters on each). A selected mitre opens it to change.
   */
  function addMitres() {
    if (sel?.kind === 'conn' && model.connection(sel.id)?.type === 'mitre') { openMitre({ conn: model.connection(sel.id) }); return; }
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    const joints = ids.length >= 2 ? freeMitres(model.state, ids) : [];
    // two members that already have their mitre: open it (a plain cut has no plate to click)
    const had = !joints.length && model.state.connections.find((c) => c.type === 'mitre' && ids.includes(c.a) && ids.includes(c.b));
    if (had) { openMitre({ conn: had }); return; }
    if (!joints.length) { print(tr('app.mitre.none')); return; }
    openMitre({ joints });
  }
  const svgEl = (tag, attrs = {}) => { const n = document.createElementNS('http://www.w3.org/2000/svg', tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v)); return n; };
  /** The Mitre dialog: the numbered fields beside our own drawing of the joint, made from the parameters as they are typed. */
  function openMitre({ joints = null, conn = null }) {
    const joint = conn ? { a: conn.a, aEnd: conn.aEnd, b: conn.b, bEnd: conn.bEnd } : joints[0];
    const params = { ...MITRE_DEFAULTS, ...(conn ? conn.params : {}) };
    lastFocus = document.activeElement;
    const fig = svgEl('svg', { class: 'dc-mitre-svg', role: 'img', 'aria-label': tr('mitre.dlg.preview') });
    const lede = el('p', { className: 'dc-note dc-mitre-lede' });
    const msgs = el('ul', { className: 'dc-msgs', dataset: { mitreMsgs: '' }, 'aria-live': 'polite' });
    const applyBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { mitreApply: '' } }, tr(conn ? 'mitre.dlg.apply' : 'mitre.dlg.add'));
    let bad = new Set();
    const num_ = (k) => {
      const i = numIn(params[k], (v) => {
        if (!(v >= 0 && v <= 10000)) { i.setAttribute('aria-invalid', 'true'); bad.add(k); print(tr('mitre.dlg.bad', { name: PARAM_LABELS[k] || k })); update(); return; }
        bad.delete(k); params[k] = v; update();
      }, { id: 'dc-mi-' + k });
      i.dataset.mitreParam = k;
      if (PARAM_HELP[k]) i.title = PARAM_HELP[k];
      return i;
    };
    const text_ = (k) => { const i = textIn(params[k], (v) => { params[k] = String(v).trim() || MITRE_DEFAULTS[k]; update(); }, { id: 'dc-mi-' + k, max: 30 }); i.dataset.mitreParam = k; return i; };
    const tick = (k, label) => {
      const c = el('input', { type: 'checkbox', id: 'dc-mi-' + k, checked: !!params[k], dataset: { mitreParam: k } });
      c.addEventListener('change', () => { params[k] = c.checked ? 1 : 0; update(); });
      return el('label', { className: 'dc-mitre-tick', for: c.id }, c, ' ', label);
    };
    const lab = (k) => el('label', { for: 'dc-mi-' + k }, PARAM_LABELS[k] || k);
    const row = (n, ...kids) => el('div', { className: 'dc-mitre-row', dataset: { mitreRow: String(n) } },
      el('span', { className: 'dc-mitre-n', 'aria-hidden': 'true' }, String(n)), el('span', { className: 'dc-mitre-t' }, tr('mitre.dlg.n' + n)), el('div', { className: 'dc-mitre-f' }, ...kids));
    const pair = (k) => [lab(k), num_(k)];
    const fields = el('div', { className: 'dc-mitre-fields' },
      row(1, ...pair('mGap')),
      row(2, tick('plates', tr('mitre.dlg.tick.plates')), ...pair('tp')),
      row(3, ...pair('rows'), ...pair('mPitch'), ...pair('mGauge'), tick('outRow', tr('mitre.dlg.tick.outrow'))),
      row(4, ...pair('extOuter')),
      row(5, ...pair('extInner')),
      row(6, tick('stiffs', tr('mitre.dlg.tick.stiffs')), ...pair('stiffDist')),
      row(7, ...pair('stiffT')),
      el('details', { className: 'dc-mitre-more' }, el('summary', {}, tr('mitre.dlg.bolts')),
        el('div', { className: 'dc-props' }, ...pair('boltD'), ...pair('hole'), lab('grade'), text_('grade'), ...pair('allowance'))),
      el('details', { className: 'dc-mitre-more' }, el('summary', {}, tr('mitre.dlg.plate')),
        el('div', { className: 'dc-props' }, ...pair('mWidth'), ...pair('weld'), lab('plateGrade'), text_('plateGrade'))));
    const dlg = el('dialog', { className: 'dc-dialog dc-mitre', 'aria-labelledby': 'dc-mitre-h', dataset: { mitre: '' } },
      el('div', { className: 'dc-dlg' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-mitre-h' }, tr('mitre.dlg.title')),
          el('button', { type: 'button', className: 'dc-x', 'aria-label': tr('mitre.dlg.close'), onclick: () => dlg.close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
        el('div', { className: 'dc-mitre-body' },
          el('div', { className: 'dc-mitre-left' }, lede, el('figure', { className: 'dc-mitre-fig' }, fig, el('figcaption', { className: 'dc-note' }, tr('mitre.dlg.preview'))), msgs),
          fields),
        el('div', { className: 'dc-dlg-foot' }, el('span', { className: 'dc-note' }, tr('mitre.dlg.note')),
          el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => dlg.close() }, tr('mitre.dlg.cancel')), applyBtn)));
    let ok = false;
    function update() {
      for (const k of ['tp', 'extOuter', 'extInner', 'mPitch', 'mGauge', 'outRow', 'mWidth']) for (const n of dlg.querySelectorAll('[data-mitre-param="' + k + '"]')) n.disabled = !params.plates;
      for (const n of dlg.querySelectorAll('[data-mitre-param="rows"]')) n.disabled = !params.plates;
      for (const k of ['stiffDist', 'stiffT']) dlg.querySelector('[data-mitre-param="' + k + '"]').disabled = !params.stiffs;
      const pv = mitrePreview(model.state, joint, params, conn?.id);
      ok = pv.ok && !bad.size;
      applyBtn.disabled = !ok;
      const A = model.member(joint.a), B = model.member(joint.b);
      lede.textContent = pv.ok ? tr('mitre.dlg.joint', { a: (A?.profile || '') + ' ' + (marks.partMark.get(joint.a) || ''), b: (B?.profile || '') + ' ' + (marks.partMark.get(joint.b) || ''), angle: r1(pv.angle), cut: r1(pv.cut) })
        + (joints && joints.length > 1 ? ' ' + tr('mitre.dlg.joints', { n: joints.length }) : '') : '';
      msgs.replaceChildren(...(pv.problems.length ? pv.problems.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.hard ? tr('mitre.dlg.refused', { why: x.text }) : x.text))
        : [el('li', { className: 'is-ok' }, tr('mitre.dlg.ok'))]));
      drawMitre(fig, pv);
    }
    applyBtn.addEventListener('click', () => {
      for (const i of fields.querySelectorAll('input[type="text"]')) i.dispatchEvent(new Event('change'));
      if (!ok) return;
      if (conn) {
        const changed = Object.fromEntries(Object.entries(params).filter(([k, v]) => conn.params[k] !== v));
        if (Object.keys(changed).length && edit(tr('app.undo.mitre-edit'), (tx) => tx.updateConnection(conn.id, changed)) !== null) print(tr('app.mitre.changed'));
      } else {
        const cids = edit(tr('app.undo.mitre'), (tx) => joints.map((j) => tx.addConnection({ type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd, params: { ...params } })));
        if (cids) { sel = { kind: 'conn', id: cids[0] }; multi = []; refresh(); print(tr('app.mitre.added', { n: joints.length })); }
      }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); restoreFocus(); });
    root.append(dlg);
    update();
    dlg.showModal();
    dlg.querySelector('#dc-mi-mGap')?.focus();
  }
  /** Our own drawing of the joint (mitre-preview.js): members, plates, stiffeners, bolts and the numbered callouts. */
  function drawMitre(svg, pv) {
    svg.replaceChildren();
    if (!pv.ok) { svg.setAttribute('viewBox', '0 0 100 60'); return; }
    const [x0, y0, x1, y1] = pv.box, size = Math.max(x1 - x0, y1 - y0);
    svg.setAttribute('viewBox', [x0, -y1, x1 - x0, y1 - y0].map((v) => Math.round(v * 10) / 10).join(' '));
    const pts = (ps) => ps.map(([x, y]) => (Math.round(x * 10) / 10) + ',' + (Math.round(-y * 10) / 10)).join(' ');
    for (const sh of pv.shapes) svg.append(svgEl(sh.closed ? 'polygon' : 'polyline', { points: pts(sh.pts), class: 'dc-mi-' + sh.kind }));
    for (const [a, b] of pv.bolts) svg.append(svgEl('line', { x1: a[0], y1: -a[1], x2: b[0], y2: -b[1], class: 'dc-mi-bolt' }));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, r = size * 0.032;
    // each number leaves its point its own way (1, 2, 3 sit close together at the plates), the stiffeners' outward from the middle
    const AWAY = { 1: [1, 0.45], 2: [-1, 0.45], 3: [1, -0.45], 4: [0, 1], 5: [0, -1] };
    for (const c of pv.callouts) {
      let [dx, dy] = AWAY[c.n] || [c.at[0] - cx, c.at[1] - cy];
      const d = Math.hypot(dx, dy);
      if (d < 1e-6) { dx = -1; dy = 1; } else { dx /= d; dy /= d; }
      const p = [c.at[0] + dx * size * 0.11, c.at[1] + dy * size * 0.11];
      svg.append(svgEl('line', { x1: c.at[0], y1: -c.at[1], x2: p[0], y2: -p[1], class: 'dc-mi-leader' }));
      svg.append(svgEl('circle', { cx: p[0], cy: -p[1], r, class: 'dc-mi-callout' }));
      const tx = svgEl('text', { x: p[0], y: -p[1], class: 'dc-mi-num', 'font-size': r * 1.25, 'text-anchor': 'middle', 'dominant-baseline': 'central' });
      tx.textContent = String(c.n);
      svg.append(tx);
    }
  }
  function addBasePlate() {
    if (sel?.kind !== 'member') return;
    const id = sel.id;
    if (model.state.connections.some((c) => c.type === 'baseplate' && c.column === id)) { print(tr('app.baseplate.has')); return; }
    const cid = edit(tr('app.undo.baseplate'), (tx) => tx.addConnection({ type: 'baseplate', column: id }));
    if (cid) { sel = { kind: 'conn', id: cid }; refresh(); print(tr('app.baseplate.added')); }
  }
  function applySimilar() {
    if (sel?.kind !== 'conn') return;
    const c = model.connection(sel.id);
    if (c.type === 'mitre') {
      const js = similarMitres(model.state, c);
      if (!js.length) { print(tr('app.mitre.none')); return; }
      edit(tr('app.undo.mitre'), (tx) => { for (const j of js) tx.addConnection({ type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd, params: c.params }); });
      print(tr('app.mitre.added', { n: js.length }));
    } else if (c.type === 'gusset') {
      const js = similarBraceEnds(model.state, c);
      if (!js.length) { print(tr('app.gusset.none')); return; }
      edit(tr('app.undo.gusset'), (tx) => { for (const j of js) tx.addConnection({ type: 'gusset', brace: j.brace, end: j.end, support: j.support, params: c.params }); });
      print(tr('app.gusset.added', { n: js.length }));
    } else if (c.type === 'splice') {
      const js = similarSplices(model.state, c);
      if (!js.length) { print(tr('app.splice.none')); return; }
      edit(tr('app.undo.splice'), (tx) => { for (const j of js) tx.addConnection({ type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b, params: c.params }); });
      print(tr('app.splice.added2', { n: js.length }));
    } else if (isBeamEnd(c)) {
      const js = similarJoints(model.state, c);
      if (!js.length) { print(tr('app.similar.endplate.none')); return; }
      edit(tr('app.undo.similar.endplate'), (tx) => { for (const j of js) tx.addConnection({ type: c.type, beam: j.beam, end: j.end, column: j.column, params: c.params }); });
      print(tr('app.similar.joints', { n: js.length }));
    } else {
      const cols = similarColumns(model.state, c);
      if (!cols.length) { print(tr('app.similar.baseplate.none')); return; }
      edit(tr('app.undo.similar.baseplate'), (tx) => { for (const col of cols) tx.addConnection({ type: 'baseplate', column: col, params: c.params }); });
      print(tr('app.similar.columns', { n: cols.length }));
    }
  }

  // ---- left panel ----
  function renderLeft() {
    const s = model.state;
    const focused = ui.name.ownerDocument.activeElement;   // the panel's own document: it may be in the panels window
    if (focused !== ui.name) ui.name.value = s.name;
    const inGrid = ui.gridForm.contains(focused);
    if (!inGrid) {
      ui.gx.value = s.grids.x.map((g) => g.label).join(' '); ui.gxs.value = spacingsOf(s.grids.x);
      ui.gy.value = s.grids.y.map((g) => g.label).join(' '); ui.gys.value = spacingsOf(s.grids.y);
    }
    if (!ui.levelForm.contains(focused)) renderLevels(s.levels);
    if (!ui.phases.contains(focused)) renderPhases();
    syncViewSelects();
    const kept = (p) => mine.some((x) => x.name.toUpperCase() === p.name.toUpperCase());
    ui.customList.replaceChildren(...s.profiles.map((p) => el('li', {}, el('span', { className: 'dc-ellip' }, p.name + ' · ' + kindName(p.kind)),
      kept(p) ? el('span', { className: 'dc-muted' }, tr('app.mine.kept'))
        : el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { if (keepProfile(p)) { print(tr('app.mine.added', { name: p.name })); refresh(); } } }, tr('app.mine.keep')))));
    ui.myList.replaceChildren(...mine.map((p) => el('li', {}, el('span', { className: 'dc-ellip' }, p.name + ' · ' + kindName(p.kind)),
      el('span', { className: 'dc-row' },
        s.profiles.some((x) => x.name.toUpperCase() === p.name.toUpperCase()) ? '' : el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { if (edit(tr('app.undo.add-profile', { name: p.name }), (tx) => tx.addProfile(p))) print(tr('app.mine.used', { name: p.name })); } }, tr('app.mine.use')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { mine = mine.filter((x) => x !== p); if (writeMine()) { print(tr('app.mine.removed', { name: p.name })); refresh(); } } }, tr('app.mine.remove'))))));
    if (!mine.length) ui.myList.append(el('li', { className: 'dc-muted' }, tr('app.mine.none')));
    ui.marks.replaceChildren(...marks.parts.map((p) => el('li', {},
      el('button', { type: 'button', onclick: () => { setTool('select'); select(refForPart(p.ids[0])); }, title: tr('app.marks.select-first', { mark: p.mark }) },
        el('span', { className: 'dc-mk' }, p.mark), el('span', { className: 'dc-ellip' }, p.profile + ' x ' + mm(p.length))),
      el('span', { className: 'dc-muted' }, '× ' + p.count))));
    if (!marks.parts.length) ui.marks.append(el('li', { className: 'dc-muted' }, tr('app.marks.none')));
  }
  const kindName = (k) => { const key = ({ I: 'app.kind.i', C: 'app.kind.c', L: 'app.kind.l', RHS: 'app.kind.rhs', CHS: 'app.kind.chs', FLAT: 'app.kind.flat', PL: 'app.kind.pl' })[k]; return key ? tr(key) : k; };
  const refForPart = (pid) => { const p = built.byId.get(pid); return p?.member ? { kind: 'member', id: p.member } : p?.conn ? { kind: 'conn', id: p.conn } : null; };

  // ---- phases (D13) ----
  const phaseName = (n) => model.state.phases.find((p) => p.n === n)?.name || tr('phase.default', { n });
  const phaseOptions = () => model.state.phases.map((p) => [String(p.n), phaseName(p.n)]);
  function renderPhases() {
    const s = model.state;
    const count = (n) => s.members.filter((m) => (m.phase || 1) === n).length + s.footings.filter((f) => (f.phase || 1) === n).length;
    const list = el('ul', { className: 'dc-phases' }, ...s.phases.map((p) => {
      const show = el('input', { type: 'checkbox', checked: !hiddenPhases.has(p.n), 'aria-label': tr('phase.show', { phase: phaseName(p.n) }), dataset: { phaseShow: String(p.n) } });
      show.addEventListener('change', () => setPhaseShown(p.n, show.checked));
      const name = el('input', { type: 'text', className: 'dc-input', value: p.name, placeholder: tr('phase.default', { n: p.n }), maxLength: 40, 'aria-label': tr('phase.name', { n: p.n }), dataset: { phaseName: String(p.n) } });
      name.addEventListener('change', () => edit(tr('phase.undo.rename'), (tx) => tx.renamePhase(p.n, name.value)));
      const del = el('button', { type: 'button', className: 'shell-x', 'aria-label': tr('phase.remove', { phase: phaseName(p.n) }), title: tr('phase.remove', { phase: phaseName(p.n) }), dataset: { phaseRemove: String(p.n) }, onclick: () => { if (edit(tr('phase.undo.remove'), (tx) => tx.removePhase(p.n))) print(tr('phase.removed', { phase: phaseName(p.n) })); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
      return el('li', { className: hiddenPhases.has(p.n) ? 'is-hidden' : '' }, show, el('span', { className: 'dc-mk' }, String(p.n)), name, el('span', { className: 'dc-muted' }, tr('phase.count', { n: count(p.n) })), del);
    }));
    const add = el('button', { type: 'button', className: 'dc-linkbtn', dataset: { phaseAdd: '' }, onclick: () => { const n = edit(tr('phase.undo.add'), (tx) => tx.addPhase()); if (n) { curPhase = n; renderPhases(); print(tr('phase.added', { phase: phaseName(n) })); } } }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ', tr('phase.add'));
    const cur = selectIn(phaseOptions(), String(curPhase), (v) => { curPhase = Number(v); print(tr('phase.current.set', { phase: phaseName(curPhase) })); }, { id: 'dc-phase-cur' });
    cur.dataset.phaseCurrent = '';
    const per = el('input', { type: 'checkbox', id: 'dc-phase-per', checked: s.numbering?.perPhase !== false, dataset: { phasePer: '' } });
    per.addEventListener('change', () => { if (edit(tr('phase.undo.numbering'), (tx) => tx.setNumbering({ perPhase: per.checked }))) print(tr(per.checked ? 'phase.per.on' : 'phase.per.off')); });
    ui.phases.replaceChildren(list, el('div', { className: 'dc-row' }, add),
      el('div', { className: 'dc-props' }, ...field(tr('phase.current'), cur), ...field(tr('phase.per'), per)),
      el('p', { className: 'dc-note' }, tr('phase.per.hint')));
  }
  function setPhaseShown(n, on) {
    if (on) hiddenPhases.delete(n); else hiddenPhases.add(n);
    if (view) { view.setModel(model.state, built, marks); }
    // what is hidden cannot stay selected
    setSelection(selected().filter((r) => !hiddenPhases.has(r.kind === 'conn' ? connPhase(model.state, model.connection(r.id)) : (r.kind === 'member' ? model.member(r.id) : r.kind === 'stair' ? model.stair(r.id) : model.footing(r.id))?.phase || 1)));
    renderPhases();
    print(tr(on ? 'phase.shown' : 'phase.hidden', { phase: phaseName(n) }));
  }
  /** Phase select for the properties panel: puts refs (members and footings) in a phase, one undo step. */
  function phaseField(refs, value) {
    const own = refs.filter((r) => r.kind !== 'conn');
    const s2 = selectIn(phaseOptions(), value ? String(value) : '', (v) => {
      if (!v) return;
      const n = Number(v);
      if (edit(tr('phase.undo.set'), (tx) => tx.setPhaseOf(own, n))) print(tr('phase.set', { what: whatText(own.filter((r) => r.kind === 'member').length, own.filter((r) => r.kind === 'footing').length), phase: phaseName(n) }));
    }, { id: 'dc-phase-of' });
    if (!value) { s2.prepend(el('option', { value: '', className: 'dc-varies' }, tr('many.varies'))); s2.value = ''; s2.classList.add('dc-varies'); }
    s2.dataset.phaseOf = '';
    return field(tr('phase.prop'), s2);
  }

  function renderLevels(levels) {
    ui.levels.replaceChildren(...levels.map((l, i) => levelRow(l.name, l.z, i)));
  }
  function levelRow(name, z, i) {
    const li = el('li', {},
      el('input', { type: 'text', className: 'dc-input', value: name, 'aria-label': tr('app.levels.name'), maxLength: 40, dataset: { lname: '' } }),
      el('input', { type: 'number', className: 'dc-input', value: String(z), step: 'any', 'aria-label': tr('app.levels.z'), dataset: { lz: '' } }),
      el('button', { type: 'button', className: 'shell-x', title: tr('app.levels.remove', { n: i + 1 }), 'aria-label': tr('app.levels.remove', { n: i + 1 }), onclick: () => { li.remove(); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' })));
    return li;
  }
  ui.levelAdd.addEventListener('click', () => {
    const zs = [...ui.levels.querySelectorAll('[data-lz]')].map((i) => Number(i.value) || 0);
    const z = zs.length ? Math.max(...zs) + 4000 : 0;
    const row = levelRow(tr('app.levels.default', { n: zs.length + 1 }), z, zs.length);
    ui.levels.append(row);
    row.querySelector('input').focus();
  });
  ui.levelForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const rows = [...ui.levels.children].map((li) => ({ name: li.querySelector('[data-lname]').value, z: li.querySelector('[data-lz]').value }));
    if (edit(tr('app.undo.levels'), (tx) => tx.setLevels(rows))) print(tr('app.levels.done'));
    renderLevels(model.state.levels);
  });
  ui.gridForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let g;
    try { g = gridsFromSpacings(ui.gx.value, ui.gxs.value, ui.gy.value, ui.gys.value); }
    catch (err) { print(err.message); return; }
    if (edit(tr('app.undo.grids'), (tx) => tx.setGrids(g))) { print(tr('app.grids.done')); if (view) { view.fitted = false; view.fit(); } }
  });
  ui.name.addEventListener('change', () => edit(tr('app.undo.rename-model'), (tx) => tx.setName(ui.name.value)));

  // custom profiles
  const DIM_LABEL = { d: 'depth', bf: 'flange-width', tw: 'web', tf: 'flange', r: 'fillet', b: 'width', t: 'thickness', h: 'height', D: 'diameter' };   // app.dim.<name>
  function renderProfileDims() {
    const kind = ui.pkind.value;
    ui.pdims.replaceChildren(...CUSTOM_KINDS[kind].flatMap((k) => {
      const id = 'dc-pd-' + k;
      return [el('label', { for: id }, tr('app.dim.' + DIM_LABEL[k])), el('input', { type: 'number', id, className: 'dc-input', min: '0', step: 'any', dataset: { pdim: k } })];
    }));
  }
  ui.pkind.addEventListener('change', renderProfileDims);
  renderProfileDims();
  ui.profileForm.addEventListener('submit', (e) => {
    e.preventDefault();
    const p = { name: ui.pname.value, kind: ui.pkind.value };
    for (const i of ui.pdims.querySelectorAll('[data-pdim]')) p[i.dataset.pdim] = i.value === '' ? NaN : Number(i.value);
    if (edit(tr('app.undo.add-profile', { name: p.name }), (tx) => tx.addProfile(p))) {
      const name = p.name.trim();
      print(tr('app.profile.added', { name }) + (ui.pkeep.checked && keepProfile(p) ? ' ' + tr('app.mine.added', { name }) : ''));
      ui.pname.value = ''; refresh();
    }
  });

  // ---- properties panel ----
  function renderProps() {
    fid = 0;
    const body = [];
    if (tool === 'paste') { ui.propsH.textContent = tr('app.props.paste'); body.push(...pasteOptions()); }
    else if (tool === 'move') { ui.propsH.textContent = tr('xf.move.title'); body.push(el('p', { className: 'dc-note' }, tr('xf.move.help'))); }
    else if (tool !== 'select') { ui.propsH.textContent = tr('app.props.place.' + tool); body.push(...toolOptions()); }
    else if (multi.length) { ui.propsH.textContent = tr('app.props.selected', { n: multi.length }); body.push(...multiProps()); }
    else if (sel?.kind === 'member') { const m = model.member(sel.id); ui.propsH.textContent = typeName(m.type) + (marks.partMark.get(m.id) ? ' ' + marks.partMark.get(m.id) : ''); body.push(...memberProps(m)); }
    else if (sel?.kind === 'conn') { const c = model.connection(sel.id); ui.propsH.textContent = tr('app.props.' + c.type); body.push(...connProps(c)); }
    else if (sel?.kind === 'stair') { const x = model.stair(sel.id); ui.propsH.textContent = tr('app.props.stair', { mark: marks.asmMark.get(x.id + '.stringerL') || '' }); body.push(...stairProps(x)); }
    else if (sel?.kind === 'picture') { const p = model.picture(sel.id); ui.propsH.textContent = tr('pic.props'); body.push(...pictureProps(p)); }
    else if (sel?.kind === 'footing') { const f = model.footing(sel.id); ui.propsH.textContent = tr('app.props.footing', { mark: marks.footingMark.get(f.id) || '' }); body.push(...footingProps(f)); }
    else if (sel?.kind === 'rc') { const x = model.state.rc.elements.find((q) => q.id === sel.id); ui.propsH.textContent = rcb.labels.get(x.id) || tr('rc.kind.' + x.kind); body.push(...rcUi.props(x)); }
    else if (sel?.kind === 'rcbar') { ui.propsH.textContent = tr('rc.props.loose'); body.push(el('p', { className: 'dc-note' }, describeRef(sel)), el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')))); }
    else { ui.propsH.textContent = tr('app.props.model'); body.push(...modelSummary()); }
    const pdoc = ui.props.ownerDocument;   // the panel may be in the panels window
    const focusedId = pdoc.activeElement && ui.props.contains(pdoc.activeElement) ? pdoc.activeElement.id : null;
    const focusedRow = pdoc.activeElement && ui.props.contains(pdoc.activeElement) ? pdoc.activeElement.getAttribute('data-pg-row') : null;   // a property grid row (0.8)
    ui.props.replaceChildren(...body);   // field ids are numbered in order (fid reset below), so focus comes back to the same field
    if (focusedRow) [...ui.props.querySelectorAll('[data-pg-row]')].find((e) => e.getAttribute('data-pg-row') === focusedRow)?.focus();
    else if (focusedId) pdoc.getElementById(focusedId)?.focus();
  }

  let fid = 0;
  /** A labeled field row pair for a .dc-props grid. */
  function field(label, input) { if (!input.id) input.id = 'dc-f' + (++fid); return [el('label', { for: input.id }, label), input]; }
  // a number box reads arithmetic too (0.6 DF.3, numtext.js: 2*450, 4500/3): a text box, refusals say where they went wrong
  function numIn(value, onSet, o = {}) {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(Math.round(value * 1000) / 1000), id: o.id, autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => {
      if (i.value.trim() === '') { i.setAttribute('aria-invalid', 'true'); print(tr('app.num.bad')); return; }
      const r = readNum(i.value);
      if (!r.ok) { i.setAttribute('aria-invalid', 'true'); print(tr('calc.err.' + r.code, { pos: r.pos + 1, text: r.text })); return; }
      i.removeAttribute('aria-invalid');
      onSet(r.value);
    });
    return i;
  }
  function textIn(value, onSet, o = {}) {
    const i = el('input', { type: 'text', className: 'dc-input', value: value ?? '', maxLength: o.max || 40, id: o.id, autocomplete: 'off' });
    i.addEventListener('change', () => onSet(i.value));
    return i;
  }
  function selectIn(options, value, onSet, o = {}) {
    const s = el('select', { className: 'dc-select', id: o.id });
    for (const opt of options) {
      if (opt.group) s.append(el('optgroup', { label: opt.group }, ...opt.items.map(([v, l]) => el('option', { value: v }, l))));
      else s.append(el('option', { value: opt[0] }, opt[1]));
    }
    s.value = value;
    if (s.value !== value && value) { s.prepend(el('option', { value }, value)); s.value = value; }
    s.addEventListener('change', () => onSet(s.value));
    return s;
  }
  const profileOptions = () => catalogGroups(model.state.profiles).map((g) => ({ group: g.label + ' — ' + g.source, items: g.names.map((n) => [n, n]) }));
  const materialOptions = () => MATERIALS.map((m) => [m, m]);
  const positionOptions = [['top', tr('app.pos.top')], ['middle', tr('app.pos.middle')], ['bottom', tr('app.pos.bottom')]];

  function toolOptions() {
    const out = [];
    if (tool === 'footing') return footingForm(opts.footing, (patch) => { deepAssign(opts.footing, patch); renderProps(); }, true);
    if (tool === 'stair') return stairForm(opts.stair, (patch) => { deepAssign(opts.stair, patch); renderProps(); }, true);
    const o = opts[tool];
    const p = el('div', { className: 'dc-props' });
    if (tool === 'plate') {
      p.append(...field(tr('app.f.thickness'), numIn(o.t, (v) => { o.t = v; renderProps(); }, { min: 1 })), ...field(tr('app.f.width'), numIn(o.w, (v) => { o.w = v; renderProps(); }, { min: 1 })));
    } else p.append(...field(tr('app.f.profile'), selectIn(profileOptions(), o.profile, (v) => { o.profile = v; renderProps(); })));
    p.append(...field(tr('app.f.material'), selectIn(materialOptions(), o.material, (v) => { o.material = v; })));
    if (tool !== 'plate') p.append(...field(tr('app.f.position'), selectIn(positionOptions, o.position, (v) => { o.position = v; })));
    p.append(...field(tr('app.f.rotation'), numIn(o.rotation, (v) => { o.rotation = v; })));
    if (tool === 'column') {
      const lv = model.state.levels.map((l) => [l.name, l.name]);
      p.append(...field(tr('app.f.up-to'), selectIn([['', tr('app.f.up-to.next')], ...lv], o.to, (v) => { o.to = v; })));
    }
    out.push(p);
    const prof = tool === 'plate' ? getProfile(plateName(o.t, o.w)) : getProfile(o.profile, model.state.profiles);
    if (prof) {
      const dl = el('dl', { className: 'dc-props' });
      for (const [k, v] of describe(prof)) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
      out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.f.profile')), dl));
    }
    out.push(addByGridForm());
    return out;
  }

  /** Placing by keyboard: pick grid lines and levels from lists. */
  function addByGridForm() {
    const s = model.state;
    const gyO = s.grids.y.map((g) => [g.label, g.label]), gxO = s.grids.x.map((g) => [g.label, g.label]), lvO = s.levels.map((l) => [l.name, l.name]);
    if (!gyO.length || !gxO.length) return el('p', { className: 'dc-note' }, tr('app.grid.add.none'));
    const two = ['beam', 'brace', 'plate'].includes(tool);
    const sels = {};
    const mk = (key, options, value, label) => { const s2 = selectIn(options, value, () => {}); sels[key] = s2; return field(label, s2); };
    const top = s.levels[s.levels.length - 1]?.name;
    const form = el('form', { className: 'dc-props dc-block', dataset: { byGrid: '' } },
      el('p', { className: 'dc-sub' }, tr('app.grid.add.title')),
      ...mk('gy1', gyO, gyO[0][0], tr(two ? 'app.grid.from.letter' : 'app.grid.letter')),
      ...mk('gx1', gxO, gxO[0][0], tr(two ? 'app.grid.from.number' : 'app.grid.number')),
      ...mk('l1', lvO, tool === 'beam' || tool === 'plate' ? top : lvO[0][0], tr(two ? 'app.grid.from.level' : 'app.grid.level')),
      ...(two ? [...mk('gy2', gyO, gyO[0][0], tr('app.grid.to.letter')), ...mk('gx2', gxO, gxO[Math.min(1, gxO.length - 1)][0], tr('app.grid.to.number')), ...mk('l2', lvO, tool === 'brace' ? top : (tool === 'beam' || tool === 'plate' ? top : lvO[0][0]), tr('app.grid.to.level'))] : []),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.grid.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      const a = pointAt(s, sels.gy1.value, sels.gx1.value, sels.l1.value);
      const n = { p: a, gy: sels.gy1.value, gx: sels.gx1.value, level: sels.l1.value };
      if (!two) { placeAt(n); return; }
      const b = pointAt(s, sels.gy2.value, sels.gx2.value, sels.l2.value);
      if (a.join() === b.join()) { print(tr('app.grid.same')); return; }
      pending = null;
      placeLine(a, b);
    });
    return form;
  }

  /** Paste tool: what is on the clipboard, then pasting by typed offset or onto a grid intersection (keyboard). */
  function pasteOptions() {
    const c = pasteClip;
    if (!c) return [];
    const s = model.state;
    const dl = el('dl', { className: 'dc-props' });
    const rows = [[tr('app.paste.k.from'), c.from], [tr('app.k.members'), c.members.length || ''], [tr('app.k.connections'), c.connections.length || ''], [tr('app.k.footings'), c.footings.length || ''], [tr('app.paste.k.base'), tr('app.unit.mm', { v: c.base.map(mm).join(', ') })]];
    for (const [k, v] of rows) if (v !== '' && v !== undefined) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, String(v)));
    const out = [dl, el('p', { className: 'dc-note' }, tr('app.paste.note'))];
    const off = settings.offset.slice();
    const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => { const i = numIn(off[k], (v) => { off[k] = v; }, { id: 'dc-poff' + k }); i.setAttribute('aria-label', tr('app.paste.offset.axis', { axis: 'xyz'[k] })); return i; }));
    const form = el('form', { className: 'dc-props dc-block', dataset: { pasteOffset: '' } },
      el('p', { className: 'dc-sub' }, tr('app.paste.offset.title')), el('span', { className: 'k' }, tr('app.paste.offset.axes')), row,
      el('div', { className: ROW_START },
        el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.paste.offset.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => pasteClipAt(c, [0, 0, 0], 'in-place') }, tr('app.paste.in-place'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      pasteClipAt(c, off, 'offset', { x: String(off[0]), y: String(off[1]), z: String(off[2]) });
    });
    out.push(form);
    const gyO = s.grids.y.map((g) => [g.label, g.label]), gxO = s.grids.x.map((g) => [g.label, g.label]), lvO = s.levels.map((l) => [l.name, l.name]);
    if (gyO.length && gxO.length) {
      const sels = {};
      const mk = (key, options, label) => { const s2 = selectIn(options, options[0][0], () => {}); sels[key] = s2; return field(label, s2); };
      const g = el('form', { className: 'dc-props dc-block', dataset: { pasteGrid: '' } },
        el('p', { className: 'dc-sub' }, tr('app.paste.grid.title')),
        ...mk('gy', gyO, tr('app.grid.letter')), ...mk('gx', gxO, tr('app.grid.number')), ...mk('lv', lvO, tr('app.grid.level')),
        el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.paste.grid.go'))));
      g.addEventListener('submit', (e) => {
        e.preventDefault();
        const p = pointAt(s, sels.gy.value, sels.gx.value, sels.lv.value);
        if (!p) { print(tr('app.paste.grid.none')); return; }
        pasteClipAt(c, [p[0] - c.base[0], p[1] - c.base[1], p[2] - c.base[2]], 'at', { node: nodeName(s, p) });
      });
      out.push(g);
    }
    return out;
  }

  /** Several things selected: what they are, their weight, and what can be done to all of them. */
  function multiProps() {
    const of = (k) => multi.filter((r) => r.kind === k).map((r) => r.id);
    const mem = of('member').map((id) => model.member(id)).filter(Boolean), conns = of('conn'), foots = of('footing');
    const types = {};
    for (const m of mem) types[m.type] = (types[m.type] || 0) + 1;
    const typeText = Object.entries(types).map(([t, n]) => tr('app.count.type.' + t, { n })).join(tr('app.count.sep'));
    const steel = [...mem.map((m) => built.byId.get(m.id)), ...conns.map((id) => built.byId.get(id + '.plate'))].reduce((t, p) => t + (p ? p.weight : 0), 0);
    const dl = el('dl', { className: 'dc-props' });
    const rows = [[tr('app.k.members'), mem.length ? mem.length + ' (' + typeText + ')' : ''], [tr('app.k.connections'), conns.length || ''], [tr('app.k.footings'), foots.length || ''], [tr('pic.k.pictures'), of('picture').length || ''], [tr('app.k.steel'), steel ? tr('app.multi.steel', { kg: kg(steel) }) : '']];
    for (const [k, v] of rows) if (v !== '') dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, String(v)));
    const copyable = mem.length + foots.length > 0;
    const acts = el('div', { className: 'dc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => act('copy'), disabled: !copyable }, tr('app.btn.copy')),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => act('duplicate'), disabled: !copyable }, tr('app.btn.duplicate')),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    const phs = new Set([...mem.map((m) => m.phase || 1), ...foots.map((id) => model.footing(id)?.phase || 1)]);
    const phaseRow = mem.length + foots.length ? [el('div', { className: 'dc-props dc-block' }, ...phaseField(multi, phs.size === 1 ? [...phs][0] : null))] : [];
    return [dl, ...phaseRow, ...manyEditor(mem.map((m) => m.id)), ...xfBlock(multi), acts, el('p', { className: 'dc-note' }, tr('app.multi.note'))];
  }

  /** "Change on all of them": one property on every selected member it applies to (one undo step). */
  const ROW_START = 'span dc-row start';   // i18n-ignore (class names)
  const manyKey = (f) => 'many.' + f.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());   // plateT → many.plate-t
  function manyEditor(ids) {
    if (ids.length < 2) return [];
    const st = manyPatchable(model.state, ids);
    const box = el('div', { className: 'dc-props dc-block', dataset: { manyEdit: '' } }, el('p', { className: 'dc-sub' }, tr('many.sub')));
    const set = (key, value) => {
      const r = edit(tr('many.undo', { field: tr(manyKey(key)) }), (tx) => applyToMany(tx, model.state, ids, key, value));
      if (r) print(tr('many.done', { field: tr(manyKey(key)), n: r.changed }) + (r.skipped ? ' ' + tr('many.skipped', { n: r.skipped }) : ''));
    };
    const varies = (sel) => { sel.prepend(el('option', { value: '', className: 'dc-varies' }, tr('many.varies'))); sel.value = ''; sel.classList.add('dc-varies'); return sel; };
    const choice = (key, options) => {
      const f = st[key];
      if (!f.applies) return [];
      const s2 = selectIn(options, f.varies ? '' : f.value, (v) => { if (v) set(key, v); }, { id: 'dc-many-' + key });
      if (f.varies) varies(s2);
      s2.dataset.many = key;
      return field(tr(manyKey(key)), s2);
    };
    const number = (key, o = {}) => {
      const f = st[key];
      if (!f.applies) return [];
      const i = numIn(f.varies ? 0 : f.value, (v) => set(key, v), { id: 'dc-many-' + key, ...o });
      if (f.varies) { i.value = ''; i.placeholder = tr('many.varies'); }
      i.dataset.many = key;
      return field(tr(manyKey(key)), i);
    };
    box.append(...choice('profile', profileOptions()), ...number('plateT', { min: 1 }), ...number('plateW', { min: 1 }),
      ...choice('material', materialOptions()), ...choice('position', positionOptions), ...number('rotation'),
      el('p', { className: 'span dc-note' }, tr('many.note')));
    return [box];
  }

  /** "Move, rotate, mirror" for the selection's members and footings (connections follow). */
  function xfBlock(refs) {
    const own = refs.filter((r) => r.kind !== 'conn' && r.kind !== 'picture');   // a picture moves by dragging or its own Properties (D8.15)
    if (!own.length) return [];
    const s = model.state;
    const box = el('div', { className: 'dc-block', dataset: { xf: '' } }, el('p', { className: 'dc-sub' }, tr('xf.title')));
    const keep = el('input', { type: 'checkbox', id: 'dc-xf-copy', dataset: { xfCopy: '' } });
    box.append(el('div', { className: 'dc-props' }, ...field(tr('xf.copy'), keep)));
    // move by an offset, or by picking two grid intersections
    const off = [0, 0, 0];
    const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => { const i = numIn(0, (v) => { off[k] = v; }, { id: 'dc-xfoff' + k }); i.setAttribute('aria-label', tr('xf.move.axis', { axis: 'xyz'[k] })); return i; }));
    const mv = el('form', { className: 'dc-props', dataset: { xfMove: '' } }, el('span', { className: 'k' }, tr('xf.move.sub')), row,
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.move.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', title: tr('xf.move.pick.title'), onclick: () => setTool('move') }, tr('xf.move.pick'))));
    mv.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of mv.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      let xf;
      try { xf = moveXf(...off); } catch { print(tr('xf.bad.offset')); return; }
      runXf(own, xf, keep.checked, { kind: 'move', d: off.slice() });
    });
    // rotate in plan about the selection's middle or a grid intersection
    const nodesO = [['', tr('xf.rotate.middle')]];
    for (const gy of s.grids.y) for (const gx of s.grids.x) nodesO.push([gy.label + '/' + gx.label, gy.label + '/' + gx.label]);
    let deg = 90, about = '';
    const ro = el('form', { className: 'dc-props', dataset: { xfRotate: '' } },
      el('span', { className: 'span dc-sub2' }, tr('xf.rotate.sub')),
      ...field(tr('xf.rotate.angle'), numIn(deg, (v) => { deg = v; }, { id: 'dc-xfdeg' })),
      ...field(tr('xf.rotate.about'), selectIn(nodesO, about, (v) => { about = v; }, { id: 'dc-xfabout' })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.rotate.go'))));
    ro.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of ro.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      let c;
      if (about) { const [gy, gx] = about.split('/'); const p = pointAt(s, gy, gx, s.levels[0].name); c = p && [p[0], p[1]]; }
      else { const m = selectionCenter(s, own); c = m && [m[0], m[1]]; }
      if (!c) return;
      let xf;
      try { xf = rotateXf(c, deg); } catch { print(tr('xf.bad.angle')); return; }
      runXf(own, xf, keep.checked, { kind: 'rotate', deg, about: about || tr('xf.rotate.middle.short') });
    });
    // mirror in a grid line
    const linesO = [...s.grids.y.map((g) => ['y:' + g.label, tr('xf.mirror.grid', { label: g.label })]), ...s.grids.x.map((g) => ['x:' + g.label, tr('xf.mirror.grid', { label: g.label })])];
    const parts = [ro];
    if (linesO.length) {
      let line = linesO[0][0];
      const mi = el('form', { className: 'dc-props', dataset: { xfMirror: '' } },
        el('span', { className: 'span dc-sub2' }, tr('xf.mirror.sub')),
        ...field(tr('xf.mirror.line'), selectIn(linesO, line, (v) => { line = v; }, { id: 'dc-xfline' })),
        el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.mirror.go'))));
      mi.addEventListener('submit', (e) => {
        e.preventDefault();
        const [ax, label] = [line.slice(0, 1), line.slice(2)];
        const g = (ax === 'x' ? s.grids.x : s.grids.y).find((q) => q.label === label);
        if (!g) return;
        const xf = ax === 'x' ? mirrorXf([g.at, 0], [g.at, 1]) : mirrorXf([0, g.at], [1, g.at]);
        runXf(own, xf, keep.checked, { kind: 'mirror', line: label });
      });
      parts.push(mi);
    }
    box.append(mv, ...parts, el('p', { className: 'dc-note' }, tr('xf.note')));
    return [box];
  }

  /** One undo step: the refs (or a copy of them, with keep) through xf; the result selected and said. */
  function runXf(refs, xf, keep, how) {
    const s = model.state;
    let r = null;
    if (keep) {
      const c = copyClip(s, refs, { connections: settings.conns });
      if (!c) { print(tr('xf.none')); return; }
      const clip = readClip(c.clip);
      r = edit(tr('xf.undo.' + how.kind + '.copy'), (tx) => { const p = pasteInto(tx, clip, [0, 0, 0]); const x = transformRefs(tx, tx.s, p.refs, xf); return { ...x, refs: p.refs }; });
    } else {
      r = edit(tr('xf.undo.' + how.kind), (tx) => ({ ...transformRefs(tx, tx.s, refs, xf), refs }));
    }
    if (!r) return;
    setSelection(r.refs);
    const what = whatText(r.members, r.footings);
    const fills = { what, x: mm(how.d?.[0] ?? 0), y: mm(how.d?.[1] ?? 0), z: mm(how.d?.[2] ?? 0), deg: String(how.deg ?? ''), about: how.about || '', line: how.line || '' };
    print(tr('xf.done.' + how.kind + (keep ? '.copy' : ''), fills) + r.notes.map((n) => ' ' + tr(n.key, { n: n.n })).join('') + ' ' + tr('xf.undo.hint'));
  }
  const whatText = (members, footings) => [members ? tr('what.members', { n: members }) : '', footings ? tr('what.footings', { n: footings }) : ''].filter(Boolean).join(tr('what.and'));

  function memberProps(m) {
    const part = built.byId.get(m.id);
    const upd = (label, patch) => edit(label, (tx) => tx.updateMember(m.id, patch));
    const out = [];
    const p = el('div', { className: 'dc-props' });
    p.append(...field(tr('app.f.name'), textIn(m.name, (v) => upd(tr('app.undo.rename'), { name: v }))));
    if (m.type === 'plate') {
      const pr = getProfile(m.profile, model.state.profiles);
      p.append(...field(tr('app.f.thickness'), numIn(pr?.t ?? 20, (v) => upd(tr('app.undo.plate-size'), { profile: plateName(v, pr?.b ?? 200) }), { min: 1 })),
        ...field(tr('app.f.width'), numIn(pr?.b ?? 200, (v) => upd(tr('app.undo.plate-size'), { profile: plateName(pr?.t ?? 20, v) }), { min: 1 })));
    } else p.append(...field(tr('app.f.profile'), selectIn(profileOptions(), m.profile, (v) => upd(tr('app.undo.profile'), { profile: v }))));
    p.append(...field(tr('app.f.material'), selectIn(materialOptions(), m.material, (v) => upd(tr('app.undo.material'), { material: v }))));
    if (m.type !== 'plate') p.append(...field(tr('app.f.position'), selectIn(positionOptions, m.position, (v) => upd(tr('app.undo.position'), { position: v }))));
    p.append(...field(tr('app.f.rotation'), numIn(m.rotation, (v) => upd(tr('app.undo.rotate'), { rotation: v }))));
    p.append(...phaseField([{ kind: 'member', id: m.id }], m.phase || 1));
    out.push(p);
    const ends = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.member.ends')));
    for (const end of ['start', 'end']) {
      const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => numIn(m[end][k], (v) => { const pt = [...m[end]]; pt[k] = v; upd(tr('app.undo.move.' + end), { [end]: pt }); }, { id: 'dc-' + end + k })));
      for (const [k, inp] of [...row.children].entries()) inp.setAttribute('aria-label', tr('app.member.' + end + '.axis', { axis: 'xyz'[k] }));
      ends.append(el('span', { className: 'k' }, tr('app.member.' + end)), row, el('span', { className: 'v span dc-muted' }, nodeName(model.state, m[end])));   // i18n-ignore (class names)
    }
    out.push(ends);
    if (part) {
      const info = el('dl', { className: 'dc-props dc-block' });
      const rows = [[tr('app.k.part-mark'), marks.partMark.get(m.id)], [tr('app.k.assembly'), marks.asmMark.get(marks.asmOf.get(m.id))], [tr('app.k.cut-length'), tr('app.unit.mm', { v: r1(part.length) })], [tr('app.k.weight'), tr('app.member.weight', { kg: kg(part.weight), mass: part.profile.mass.toFixed(2) })], [tr('app.k.profile-from'), part.profile.massPub !== undefined ? PROFILE_SOURCES[part.profile.source] : part.profile.massFrom]];
      if (part.setback.start || part.setback.end) rows.push([tr('app.k.cut-back'), tr('app.member.cut-back', { start: r1(part.setback.start), end: r1(part.setback.end) })]);
      for (const [k, v] of rows) if (v) info.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
      out.push(info);
    }
    out.push(...holeEditor(m, part), ...copeEditor(m), ...xfBlock([{ kind: 'member', id: m.id }]));
    const acts = el('div', { className: 'dc-actions' });
    if (m.type === 'beam') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addEndPlates }, tr('app.btn.endplates')));
    if (m.type === 'beam') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addShearTabs }, tr('app.btn.sheartabs')));
    if (m.type === 'column') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addBasePlate }, tr('app.btn.baseplate')));
    if (part && !shopRefusal(part)) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: openShop }, tr('app.btn.shop')));
    acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    const probs = built.problems.filter((x) => x.ref === m.id);
    if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.text))));
    return out;
  }

  const PROFILE_SOURCES = { aisc: 'AISC Shapes Database v16.0', en: 'EN 10365:2017' };   // i18n-ignore: names of the published tables
  const FACE_NAME = { web: tr('app.face.web'), top: tr('app.face.top'), bottom: tr('app.face.bottom'), plate: tr('app.face.plate') };
  function holeEditor(m, part) {
    const prof = getProfile(m.profile, model.state.profiles);
    const faces = holeFaces(prof);
    const box = el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.holes.title')));
    const list = el('ul', { className: 'dc-list' });
    for (const h of m.holes) list.append(el('li', {}, el('span', {}, tr('app.holes.item', { face: FACE_NAME[h.face], d: r1(h.d), x: r1(h.x), y: r1(h.y) })),
      el('button', { type: 'button', className: 'shell-x', title: tr('app.holes.remove'), 'aria-label': tr('app.holes.remove'), onclick: () => edit(tr('app.undo.remove-hole'), (tx) => tx.removeHole(m.id, h.id)) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))));
    const fromConn = part ? part.holes.filter((h) => h.conn) : [];
    if (fromConn.length) list.append(el('li', { className: 'dc-muted' }, tr('app.holes.from-conn', { n: fromConn.length })));
    if (!m.holes.length && !fromConn.length) list.append(el('li', { className: 'dc-muted' }, tr('app.holes.none')));
    box.append(list);
    if (!faces.length) { box.append(el('p', { className: 'dc-note' }, tr('app.holes.where'))); return [box]; }
    const f = { face: faces[0], x: 100, y: 0, d: 22 };
    const form = el('form', { className: 'dc-props' },
      ...field(tr('app.holes.face'), selectIn(faces.map((x) => [x, FACE_NAME[x]]), f.face, (v) => { f.face = v; })),
      ...field(tr('app.holes.x'), numIn(f.x, (v) => { f.x = v; })),
      ...field(tr('app.holes.y'), numIn(f.y, (v) => { f.y = v; })),
      ...field(tr('app.holes.d'), numIn(f.d, (v) => { f.d = v; }, { min: 1 })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.holes.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      if (edit(tr('app.undo.add-hole'), (tx) => tx.addHole(m.id, f))) print(tr('app.holes.added'));
    });
    box.append(form);
    return [box];
  }
  function copeEditor(m) {
    const prof = getProfile(m.profile, model.state.profiles);
    if (!prof || prof.kind !== 'I') return [];
    const box = el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.copes.title')));
    const list = el('ul', { className: 'dc-list' });
    for (const c of m.cuts) list.append(el('li', {}, el('span', {}, tr('app.copes.item', { side: tr('app.side.' + c.side), end: tr('app.word.' + c.end), length: r1(c.length), depth: r1(c.depth) })),
      el('button', { type: 'button', className: 'shell-x', title: tr('app.copes.remove'), 'aria-label': tr('app.copes.remove'), onclick: () => edit(tr('app.undo.remove-cope'), (tx) => tx.removeCut(m.id, c.id)) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))));
    if (!m.cuts.length) list.append(el('li', { className: 'dc-muted' }, tr('app.copes.none')));
    const f = { kind: 'cope', end: 'start', side: 'top', length: 100, depth: 40 };
    const form = el('form', { className: 'dc-props' },
      ...field(tr('app.copes.end'), selectIn([['start', tr('app.member.start')], ['end', tr('app.member.end')]], f.end, (v) => { f.end = v; })),
      ...field(tr('app.copes.side'), selectIn([['top', tr('app.side.top')], ['bottom', tr('app.side.bottom')]], f.side, (v) => { f.side = v; })),
      ...field(tr('app.copes.length'), numIn(f.length, (v) => { f.length = v; }, { min: 1 })),
      ...field(tr('app.copes.depth'), numIn(f.depth, (v) => { f.depth = v; }, { min: 1 })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.copes.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      edit(tr('app.undo.add-cope'), (tx) => tx.addCut(m.id, f));
    });
    box.append(list, form);
    return [box];
  }

  function connProps(c) {
    const out = [];
    const mInfo = c.type === 'mitre' ? built.infos?.get(c.id) : null;
    const joined = c.type === 'mitre' ? [[tr('app.k.piece-a'), partLabel(c.a)], [tr('app.k.piece-b'), partLabel(c.b)], ...(mInfo ? [[tr('app.k.angle'), tr('app.conn.mitre-angle', { angle: r1(mInfo.angle), cut: r1(mInfo.cut) })]] : [])]
      : c.type === 'splice' ? [[tr('app.k.piece-a'), partLabel(c.a)], [tr('app.k.piece-b'), partLabel(c.b)]]
      : c.type === 'gusset' ? [[tr('app.k.brace'), partLabel(c.brace)], [tr('app.k.end'), hasKey('app.word.' + c.end) ? tr('app.word.' + c.end) : c.end], [tr('app.k.support'), partLabel(c.support)]] : isBeamEnd(c)
      ? [[tr('app.k.beam'), partLabel(c.beam)], [tr('app.k.end'), hasKey('app.word.' + c.end) ? tr('app.word.' + c.end) : c.end], [tr('app.k.column'), partLabel(c.column)]]
      : [[tr('app.k.column'), partLabel(c.column)]];
    const dl = el('dl', { className: 'dc-props' });
    for (const [k, v] of joined) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
    out.push(dl);
    const p = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.conn.params')));
    for (const [k, v] of Object.entries(c.params)) {
      const set = (val) => edit(tr('app.undo.change', { what: (PARAM_LABELS[k] || k).toLowerCase() }), (tx) => tx.updateConnection(c.id, { [k]: val }));
      const choices = PARAM_CHOICES[k];
      const input = choices ? selectIn(choices.map((n) => [String(n), tr('app.conn.choice.' + k.toLowerCase() + '.' + n)]), String(v), (val) => set(Number(val)))
        : typeof v === 'number' ? numIn(v, set, { min: 0 }) : textIn(v, set, { max: 30 });
      if (PARAM_HELP[k]) input.title = PARAM_HELP[k];
      p.append(...field(PARAM_LABELS[k] || k, input));
    }
    if (c.type === 'baseplate' && c.params.washers && !(c.params.washerSize && c.params.washerT)) {
      const row = dg1Row(c.params.rodD);
      p.append(el('p', { className: 'dc-note' }, row ? tr('app.conn.washer-dg1', { size: r1(c.params.washerSize || row.washer), t: r1(c.params.washerT || row.washerT), rod: r1(row.rod) }) : tr('conn.warn.washer-size')));
    }
    out.push(p);
    const bolts = built.bolts.filter((b) => b.conn === c.id), weld = built.welds.find((w) => w.conn === c.id);
    const info = el('dl', { className: 'dc-props dc-block' });
    const rows = [];
    // one row per bolt length (a splice has flange and web bolts)
    const byLen = new Map();
    for (const b of bolts) { const k = b.length + '|' + r1(b.grip); if (!byLen.has(k)) byLen.set(k, []); byLen.get(k).push(b); }
    for (const g of byLen.values()) rows.push([tr(c.type !== 'baseplate' ? 'app.k.bolts' : 'app.k.anchor-rods'), tr('app.conn.bolts', { n: g.length, d: g[0].d, length: g[0].length, grade: g[0].grade, grip: r1(g[0].grip) })]);
    if (weld) rows.push([tr('app.k.weld'), tr('app.conn.weld', { size: weld.size, where: weld.where.toLowerCase(), length: mm(weld.length) })]);
    const plate = built.byId.get(c.id + '.plate');
    if (plate) rows.push([tr('app.k.plate'), plate.profileName + ' x ' + r1(plate.length) + ' — ' + (marks.partMark.get(plate.id) || '')]);
    for (const [k, v] of rows) info.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
    if (rows.length) out.push(info);
    out.push(el('p', { className: 'dc-note' }, tr('app.conn.note')));
    const probs = built.problems.filter((x) => x.ref === c.id);
    if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.text))));
    const n = c.type === 'mitre' ? similarMitres(model.state, c).length : c.type === 'gusset' ? similarBraceEnds(model.state, c).length : c.type === 'splice' ? similarSplices(model.state, c).length : isBeamEnd(c) ? similarJoints(model.state, c).length : similarColumns(model.state, c).length;
    const acts = el('div', { className: 'dc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: applySimilar, disabled: !n }, tr('app.conn.similar', { n })));
    if (c.type === 'mitre') acts.prepend(el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { mitreOpen: '' }, onclick: () => openMitre({ conn: c }) }, tr('app.conn.mitre-dialog')));
    if (plate && !shopRefusal(plate)) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: openShop }, tr('app.btn.plate-drawing')));
    acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    return out;
  }
  const partLabel = (id) => { const m = model.member(id); return m ? m.profile + ' ' + (marks.partMark.get(id) || '') + ' (' + nodeName(model.state, m.start) + ')' : tr('app.conn.missing'); };

  /** D8.15: a reference picture — where it lies, how big a pixel is, how strong it shows. */
  function pictureProps(p) {
    const upd = (label, patch) => edit(label, (tx) => tx.updatePicture(p.id, patch));
    const [w, h] = pictureSizeMm(p);
    const lv = model.state.levels.find((l) => Math.abs(l.z - p.z) < 0.5);
    const g = el('div', { className: 'dc-props' });
    g.append(...field(tr('pic.f.x'), numIn(p.x, (v) => upd(tr('pic.undo.move'), { x: v }))),
      ...field(tr('pic.f.y'), numIn(p.y, (v) => upd(tr('pic.undo.move'), { y: v }))),
      ...field(tr('pic.f.z'), numIn(p.z, (v) => upd(tr('pic.undo.move'), { z: v }))),
      ...field(tr('pic.f.scale'), numIn(p.mmPerPx, (v) => { if (!(v > 0)) { print(tr('pic.err.value')); renderProps(); return; } upd(tr('pic.undo.scale'), { mmPerPx: v }); })),
      ...field(tr('pic.f.opacity'), numIn(Math.round(p.opacity * 100), (v) => { if (!(v >= OPACITY_MIN * 100 && v <= 100)) { print(tr('pic.err.opacity')); renderProps(); return; } upd(tr('pic.undo.opacity'), { opacity: v / 100 }); })));
    const info = el('dl', { className: 'dc-props dc-block' });
    fillDl(info, [[tr('pic.k.name'), p.name || tr('pic.unnamed')], [tr('pic.k.pixels'), tr('pic.k.pixels.v', { w: String(p.px[0]), h: String(p.px[1]) })], [tr('pic.k.size'), tr('pic.k.size.v', { w: mm(w), h: mm(h) })], [tr('pic.k.level'), lv ? lv.name : tr('pic.k.level.none')]]);
    for (const n of info.querySelectorAll('dt')) n.className = 'k';
    for (const n of info.querySelectorAll('dd')) n.className = 'v';
    return [g, info, el('p', { className: 'dc-note' }, tr(p.size === 'paper' ? 'pic.note.paper' : 'pic.note.real')),
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')))];
  }
  function footingProps(f) {
    const out = [el('div', { className: 'dc-props' }, ...phaseField([{ kind: 'footing', id: f.id }], f.phase || 1)), ...footingForm(f, (patch) => edit(tr('app.undo.footing'), (tx) => tx.updateFooting(f.id, patch)), false)];
    const ft = built.footings.find((x) => x.f.id === f.id);
    const list = schedule.byFooting.get(f.id) || [];
    const t = el('table', { className: 'dc-table' }, el('thead', {}, el('tr', {}, el('th', {}, tr('app.bars.mark')), el('th', {}, tr('app.bars.bars')), el('th', { className: 'n' }, tr('app.bars.no')), el('th', { className: 'n' }, tr('app.bars.length')))),
      el('tbody', {}, ...list.map(({ group, mark }) => el('tr', {}, el('td', {}, mark), el('td', {}, barLabel(group.bar, settings.barNames) + ' ' + group.role.toLowerCase()), el('td', { className: 'n' }, String(group.count)), el('td', { className: 'n' }, mm(group.length))))));
    out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.bars.title')), t,
      el('p', { className: 'dc-note' }, tr(BARS.get(f.mat.barX)?.set === 'bs' ? 'app.bars.note.bs' : 'app.bars.note', { m3: footingVolume(f).toFixed(2), source: BARS.get(f.mat.barX)?.set === 'bs' ? BAR_SOURCE_BS : BAR_SOURCE }))));
    if (ft?.problems.length) out.push(el('ul', { className: 'dc-msgs' }, ...ft.problems.map((x) => el('li', {}, x.text))));
    out.push(...xfBlock([{ kind: 'footing', id: f.id }]));
    out.push(el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete'))));
    return out;
  }
  /** 0.8 PANEL-COMPACT: the footing's fields in the shared property grid (assets/js/app-propgrid.js, manifest "propgrid"): categories,
   *  label / value columns, the same arithmetic in number rows (numtext.js through the grid's parse) and the same refusal words as numIn. */
  function footingGrid(f, set, placing, barO) {
    const opts = barO.flatMap((g) => g.items.map(([value, label]) => ({ value, label })));
    const P = tr('app.foot.cat.position'), Z = tr('app.foot.cat.size'), M = tr('app.foot.mat'), S = tr('app.foot.starters');
    const n = (id, category, label, value) => ({ id, category, label, type: 'number', value: Math.round(value * 1000) / 1000, parse: readNum });
    const rows = [];
    if (!placing) rows.push(n('x', P, tr('app.foot.cx'), f.x), n('y', P, tr('app.foot.cy'), f.y), n('top', P, tr('app.foot.top'), f.top), n('rotation', P, tr('app.f.rotation'), f.rotation));
    rows.push(n('L', Z, tr('app.foot.l'), f.L), n('B', Z, tr('app.foot.b'), f.B), n('H', Z, tr('app.foot.h'), f.H),
      { id: 'concrete', category: Z, label: tr('app.foot.concrete'), type: 'text', value: f.concrete ?? '', maxLength: 30 },
      { id: 'mat.barX', category: M, label: tr('app.foot.long'), type: 'select', value: f.mat.barX, options: opts }, n('mat.sX', M, tr('app.foot.spacing.x'), f.mat.sX),
      { id: 'mat.barY', category: M, label: tr('app.foot.short'), type: 'select', value: f.mat.barY, options: opts }, n('mat.sY', M, tr('app.foot.spacing.y'), f.mat.sY),
      n('mat.cover', M, tr('app.foot.cover'), f.mat.cover), { id: 'mat.hooks', category: M, label: tr('app.foot.hooks'), type: 'checkbox', value: !!f.mat.hooks },
      { id: 'starters.on', category: S, label: tr('app.foot.starters'), type: 'checkbox', value: !!f.starters.on });
    if (f.starters.on) {
      const s = f.starters;
      rows.push({ id: 'starters.bar', category: S, label: tr('app.foot.bar'), type: 'select', value: s.bar, options: opts }, n('starters.nx', S, tr('app.foot.nx'), s.nx), n('starters.ny', S, tr('app.foot.ny'), s.ny),
        n('starters.sx', S, tr('app.foot.sx'), s.sx), n('starters.sy', S, tr('app.foot.sy'), s.sy), n('starters.projection', S, tr('app.foot.projection'), s.projection),
        { id: 'starters.hook', category: S, label: tr('app.foot.hook'), type: 'checkbox', value: !!s.hook });
    }
    const host = el('div', { className: 'dc-grid' });
    ccPropGrid.create(host, {
      label: tr('app.props.footing', { mark: '' }).trim(), key: 'footing', rows,
      onChange: (id, v) => { const path = id.split('.'); const patch = {}; let at = patch; path.forEach((k, i) => { if (i === path.length - 1) at[k] = v; else at = at[k] = {}; }); set(patch); },
      onInvalid: (id, r, text) => { if (r && r.code) print(tr('calc.err.' + r.code, { pos: r.pos + 1, text: r.text })); else print(tr('app.num.bad')); },
    });
    return host;
  }
  function footingForm(f, set, placing) {
    const opt = (b) => [b, barLabel(b, settings.barNames) + ' (' + r1(BARS.get(b).db) + ' mm)'];
    const barO = [{ group: BAR_SOURCE, items: BAR_SETS.astm.map(opt) }, { group: BAR_SOURCE_BS, items: BAR_SETS.bs.map(opt) }];
    if (window.ccPropGrid) {   // 0.8: the shared grid where the shell has it (a build or edition without it keeps the form below)
      const g = [footingGrid(f, set, placing, barO)];
      if (placing) { g.push(el('p', { className: 'dc-note' }, tr('app.foot.hook-leg', { bar: barLabel(f.mat.barX, settings.barNames), leg: mm(hookLeg(BARS.get(f.mat.barX))) }))); g.push(addByGridForm()); }
      return g;
    }
    const p = el('div', { className: 'dc-props' });
    if (!placing) p.append(...field(tr('app.foot.cx'), numIn(f.x, (v) => set({ x: v }))), ...field(tr('app.foot.cy'), numIn(f.y, (v) => set({ y: v }))), ...field(tr('app.foot.top'), numIn(f.top, (v) => set({ top: v }))), ...field(tr('app.f.rotation'), numIn(f.rotation, (v) => set({ rotation: v }))));
    p.append(...field(tr('app.foot.l'), numIn(f.L, (v) => set({ L: v }), { min: 300 })), ...field(tr('app.foot.b'), numIn(f.B, (v) => set({ B: v }), { min: 300 })), ...field(tr('app.foot.h'), numIn(f.H, (v) => set({ H: v }), { min: 150 })),
      ...field(tr('app.foot.concrete'), textIn(f.concrete, (v) => set({ concrete: v }), { max: 30 })));
    const m = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.foot.mat')),
      ...field(tr('app.foot.long'), selectIn(barO, f.mat.barX, (v) => set({ mat: { barX: v } }))), ...field(tr('app.foot.spacing.x'), numIn(f.mat.sX, (v) => set({ mat: { sX: v } }), { min: 50 })),
      ...field(tr('app.foot.short'), selectIn(barO, f.mat.barY, (v) => set({ mat: { barY: v } }))), ...field(tr('app.foot.spacing.y'), numIn(f.mat.sY, (v) => set({ mat: { sY: v } }), { min: 50 })),
      ...field(tr('app.foot.cover'), numIn(f.mat.cover, (v) => set({ mat: { cover: v } }), { min: 20 })),
      ...field(tr('app.foot.hooks'), check(f.mat.hooks, (v) => set({ mat: { hooks: v } }))));
    const s = f.starters;
    const st = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.foot.starters')),
      ...field(tr('app.foot.starters'), check(s.on, (v) => set({ starters: { on: v } }))));
    if (s.on) st.append(...field(tr('app.foot.bar'), selectIn(barO, s.bar, (v) => set({ starters: { bar: v } }))),
      ...field(tr('app.foot.nx'), numIn(s.nx, (v) => set({ starters: { nx: v } }), { min: 1, step: 1 })), ...field(tr('app.foot.ny'), numIn(s.ny, (v) => set({ starters: { ny: v } }), { min: 1, step: 1 })),
      ...field(tr('app.foot.sx'), numIn(s.sx, (v) => set({ starters: { sx: v } }), { min: 50 })), ...field(tr('app.foot.sy'), numIn(s.sy, (v) => set({ starters: { sy: v } }), { min: 50 })),
      ...field(tr('app.foot.projection'), numIn(s.projection, (v) => set({ starters: { projection: v } }), { min: 0 })),
      ...field(tr('app.foot.hook'), check(s.hook, (v) => set({ starters: { hook: v } }))));
    const out = [p, m, st];
    if (placing) { out.push(el('p', { className: 'dc-note' }, tr('app.foot.hook-leg', { bar: barLabel(f.mat.barX, settings.barNames), leg: mm(hookLeg(BARS.get(f.mat.barX))) }))); out.push(addByGridForm()); }
    return out;
  }
  /** A stair's settings (D23): in the Stair tool's options (placing) or for a selected stair. */
  function stairForm(x, set, placing) {
    const p = el('div', { className: 'dc-props' });
    if (!placing) p.append(...field(tr('app.foot.cx'), numIn(x.x, (v) => set({ x: v }))), ...field(tr('app.foot.cy'), numIn(x.y, (v) => set({ y: v }))), ...field(tr('app.stair.z'), numIn(x.z, (v) => set({ z: v }))));
    const strO = catalogGroups(model.state.profiles).map((g) => ({ group: g.label + ' — ' + g.source, items: g.names.filter((n) => ['C', 'PL'].includes(getProfile(n, model.state.profiles)?.kind)).map((n) => [n, n]) })).filter((g) => g.items.length);
    p.append(...field(tr('app.stair.dir'), numIn(x.dir, (v) => set({ dir: v }))),
      ...field(tr(placing ? 'app.stair.rise.tool' : 'app.stair.rise'), numIn(x.rise, (v) => set({ rise: v }), { min: 0 })),
      ...field(tr('app.stair.going'), numIn(x.going, (v) => set({ going: v }), { min: 150 })),
      ...field(tr('app.stair.width'), numIn(x.width, (v) => set({ width: v }), { min: 400 })),
      ...field(tr('app.stair.max-riser'), numIn(x.maxRiser, (v) => set({ maxRiser: v }), { min: 100 })),
      ...field(tr('app.stair.stringer'), selectIn(strO, x.stringer, (v) => set({ stringer: v }))),
      ...field(tr('app.stair.tread-t'), numIn(x.tread.t, (v) => set({ tread: { t: v } }), { min: 3 })),
      ...field(tr('app.stair.nosing'), numIn(x.tread.nosing, (v) => set({ tread: { nosing: v } }), { min: 0 })),
      ...field(tr('app.f.material'), selectIn(materialOptions(), x.material, (v) => set({ material: v }))));
    const out = [p];
    if (placing) out.push(el('p', { className: 'dc-note' }, tr('app.stair.note')));
    return out;
  }
  function stairProps(x) {
    const out = [el('div', { className: 'dc-props' }, ...phaseField([{ kind: 'stair', id: x.id }], x.phase || 1)), ...stairForm(x, (patch) => edit(tr('app.undo.stair'), (tx) => tx.updateStair(x.id, patch)), false)];
    const g = stairGeometry(x, (nm) => getProfile(nm, model.state.profiles));
    const dl = el('dl', { className: 'dc-props dc-block' });
    fillDl(dl, [[tr('app.stair.risers'), tr('app.stair.risers.v', { n: g.n, r: r1(g.riser) })], [tr('app.stair.treads'), tr('app.stair.treads.v', { n: g.treads, run: mm(g.run) })],
      [tr('app.stair.pitch'), r1(g.pitch) + '°'], [tr('app.stair.blondel'), mm(g.blondel)]]);
    for (const n of dl.querySelectorAll('dt')) n.className = 'k';
    for (const n of dl.querySelectorAll('dd')) n.className = 'v';
    out.push(dl);
    const probs = built.problems.filter((q) => q.ref === x.id);
    if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((q) => el('li', { className: q.hard ? 'is-hard' : '' }, q.text))));
    out.push(el('p', { className: 'dc-note' }, tr('app.stair.props-note')));
    out.push(...xfBlock([{ kind: 'stair', id: x.id }]));
    const acts = el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    return out;
  }
  function check(value, onSet) {
    const i = el('input', { type: 'checkbox', checked: !!value });
    i.addEventListener('change', () => onSet(i.checked));
    return i;
  }
  function deepAssign(o, patch) { for (const [k, v] of Object.entries(patch)) { if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(o[k], v); else o[k] = v; } }

  function modelSummary() {
    const s = model.state;
    const steel = built.parts.reduce((t, p) => t + p.weight, 0), bars = schedule.rows.reduce((t, r) => t + r.totalWeight, 0);
    const dl = el('dl', { className: 'dc-props' });
    fillDl(dl, [[tr('app.k.members'), s.members.length], [tr('app.k.connections'), s.connections.length], [tr('app.k.footings'), s.footings.length], [tr('app.k.parts'), built.parts.length], [tr('app.k.part-marks'), marks.parts.length], [tr('app.k.assemblies'), marks.assemblies.length], [tr('app.k.bolts-rods'), built.bolts.length], [tr('app.k.steel'), tr('app.unit.kg', { v: kg(steel) })], [tr('app.k.rebar'), tr('app.unit.kg', { v: kg(bars) })], [tr('app.k.grids'), s.grids.x.length + ' × ' + s.grids.y.length], [tr('app.k.levels'), s.levels.length]]);
    for (const n of dl.querySelectorAll('dt')) n.className = 'k';
    for (const n of dl.querySelectorAll('dd')) n.className = 'v';
    const out = [dl, el('p', { className: 'dc-note' }, tr('app.model.note'))];
    // loose bolts from an IFC import (D11): they stay where they are; one click takes them all out
    const nb = (s.bolts || []).length;
    if (nb) out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-note' }, tr('app.bolts.loose', { n: nb })),
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { removeBolts: '' }, onclick: () => { if (edit(tr('app.undo.bolts-remove'), (tx) => tx.removeBolts(null))) print(tr('app.bolts.removed', { n: nb })); } }, tr('app.btn.bolts-remove')))));
    return out;
  }

  // ---- reports ----
  erection = mountErection({ getModel: () => model, built: () => built, marks: () => marks, edit, print, download: (n, d, ty) => download(n, d, ty), safeName: () => safeName(), rerender: () => renderReport(), setProblems: (list) => { extraProblems = list; extraSet?.(list); } });
  supply = mountSupply({ getModel: () => model, edit, print, nest: () => nestResult(), built: () => built, rerender: () => renderReport(), setProblems: (list) => supplySet?.(list) });
  framing = mountFraming({ getModel: () => model, edit, print, download: (n, d, ty) => download(n, d, ty), safeName: () => safeName(), rerender: () => renderReport(), setProblems: (list) => frmSet?.(list) });
  foundation = mountFoundation({ getModel: () => model, edit, print, rerender: () => renderReport(), select, label: (id) => marks?.footingMark?.get(id) || id, analysisResult: () => analysis?.result || null, profileSize: (name) => { const p = getProfile(name, model.state.customProfiles || []); return p ? [Math.round(p.width), Math.round(p.depth)] : null; }, setProblems: (list) => fndSet?.(list) });
  // 0.9 RC.1: the Concrete tab, a concrete element's properties and the reinforcement shop drawings (rc-ui.js)
  rcUi = mountRc({ getModel: () => model, rb: () => rcb, schedule: () => schedule, edit, print, select: (ref) => { setTool('select'); select(ref); }, rerender: () => renderReport(),
    barLabel: (b) => (rcBarOf(b)?.set === 'other' ? b : barLabel(b, settings.barNames)), paper: () => settings.paper, numIn, textIn, selectIn, field, phaseField, deleteSelection,
    download: (n, d, ty) => download(n, d, ty), safeName: () => safeName(), root, drawList: (c, l) => drawList(c, l), toPdf, remember: () => { lastFocus = document.activeElement; }, restoreFocus: () => restoreFocus(),
    shapeCode: (sh) => shapeCode(sh, settings.shapeCodes) || sh, scheduleDims: (sh, d) => scheduleDims(sh, d, settings.shapeCodes), phase: () => curPhase });
  congestion = mountCongestion({ getModel: () => model, rerender: () => renderReport(), print, select, label: (id) => { const m = marks?.footingMark?.get(id); return m || id; }, setProblems: (list) => congSet?.(list) });
  autopilot = mountAutopilot({ getModel: () => model, edit, print, selected, rerender: () => renderReport(), label: (id) => marks?.partMark.get(id) || model.member(id)?.name || id, setProblems: (list) => { autoProblems = list; autoSet?.(list); } });
  analysis = mountAnalysis({ getModel: () => model, getView: () => view, edit, selected, select, print, download: (n, d, ty) => download(n, d, ty), safeName: () => safeName(), rerender: () => renderReport(), setFrameProblems: (list) => { frameProblems = list; frameProblemsSet?.(list); }, setBreakProblems: (list) => { breakProblems = list; breakSet?.(list); } });
  root.querySelector('.dc-tabs').addEventListener('click', (e) => { const t = e.target.closest('[data-tab]'); if (t) { reportTab = t.dataset.tab; renderReport(); } });
  root.querySelector('.dc-tabs').addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const tabs = [...root.querySelectorAll('[data-tab]')], i = tabs.findIndex((t) => t.dataset.tab === reportTab);
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    reportTab = n.dataset.tab; renderReport(); n.focus();
  });
  function renderReport() {
    for (const t of root.querySelectorAll('[data-tab]')) { const on = t.dataset.tab === reportTab; t.setAttribute('aria-selected', String(on)); t.tabIndex = on ? 0 : -1; }
    ui.countProblems.textContent = built.problems.length ? '(' + built.problems.length + ')' : '';
    ui.countClashes.textContent = clashRes && clashRes.clashes.length ? '(' + clashRes.clashes.length + ')' : '';
    const out = [];
    if (reportTab === 'problems') {
      // 0.7.1 → 0.8: with the shell's Problems panel, a line that opens it, and the problems accepted there marked here
      const sharedIds = window.ccProblems && problemsSync ? dcProblems(built, model.state, { strings: langCatalog().strings }).map((p) => 'detailcraft.build:' + p.code + ':' + (p.about[0] ? p.about[0].kind + ':' + p.about[0].id : '') + (p.part ? '#' + p.part : '')) : null;
      if (sharedIds && built.problems.length) out.push(el('p', { className: 'dc-note', dataset: { problemsShared: '' } }, tr('problems.tab.shared'), ' ', el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => window.ccProblems.open() }, tr('problems.tab.open'))));
      if (!built.problems.length) out.push(el('p', { className: 'dc-note' }, tr('app.rep.problems.none')));
      else out.push(el('ul', { className: 'dc-msgs' }, ...built.problems.map((x, i) => {
        const ref = x.ref?.startsWith('m') ? { kind: 'member', id: x.ref } : x.ref?.startsWith('j') ? { kind: 'conn', id: x.ref } : x.ref?.startsWith('f') ? { kind: 'footing', id: x.ref } : x.ref?.startsWith('s') ? { kind: 'stair', id: x.ref } : null;
        const acc = sharedIds && window.ccProblems.store.get(sharedIds[i])?.accepted;
        return el('li', { className: (x.hard ? 'is-hard' : '') + (acc ? ' is-accepted' : '') }, x.text, acc ? el('span', { className: 'dc-note' }, ' ' + tr('problems.tab.accepted', { reason: acc.reason })) : null, ref ? el('button', { type: 'button', onclick: () => { setTool('select'); select(ref); } }, tr('app.rep.select')) : null);
      })));
    } else if (reportTab === 'bom') {
      const t = bomTables(marks, built.bolts);
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.parts', { kg: kg(t.totalWeight) })), el('button', { type: 'button', className: 'dc-linkbtn', onclick: exportBom }, tr('app.rep.csv'))));
      out.push(table(t.parts, [4, 5, 6, 7], (row) => { const p = marks.parts.find((x) => x.mark === row[0]); return p ? refForPart(p.ids[0]) : null; }));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.assemblies'))), table(t.assemblies, [3, 4, 5]));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.bolts'))), table(t.bolts, [1, 2, 4]));
    } else if (reportTab === 'clashes') {
      out.push(...clashPanel());
    } else if (reportTab === 'nest') {
      out.push(...nestPanel());
    } else if (reportTab === 'supply') {
      out.push(...supply.panel());
    } else if (reportTab === 'framing') {
      out.push(...framing.panel());
    } else if (reportTab === 'foundation') {
      out.push(...foundation.panel());
    } else if (reportTab === 'rc') {
      out.push(...rcUi.panel());
    } else if (reportTab === 'congestion') {
      out.push(...congestion.panel());
    } else if (reportTab === 'autopilot') {
      out.push(...autopilot.panel());
    } else if (reportTab === 'erection') {
      out.push(...erection.panel());
    } else if (reportTab === 'analysis') {
      out.push(...(analysis ? analysis.panel() : []));
    } else if (reportTab === 'phases') {
      const T = reportTables(phaseReport(model.state, built, marks, schedule));
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('rep.summary')),
        el('button', { type: 'button', className: 'dc-linkbtn', dataset: { repCsv: '' }, onclick: exportReport }, tr('rep.csv')),
        el('button', { type: 'button', className: 'dc-linkbtn', dataset: { repPdf: '' }, onclick: exportReportPdf }, tr('rep.pdf'))));
      out.push(table(T.summary, [1, 2, 3, 4, 5]));
      for (const p of T.phases) {
        out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, p.title)), table(p.parts, [4, 5, 6, 7, 8]));
        if (p.bolts.length > 1) out.push(table(p.bolts, [1, 2, 4]));
      }
      out.push(el('p', { className: 'dc-note' }, tr('rep.note')));
    } else {
      const rows = scheduleTable(schedule.rows, { codes: settings.shapeCodes, naming: settings.barNames });
      out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('app.rep.bending2', { codes: tr('app.codes.' + settings.shapeCodes) })), el('button', { type: 'button', className: 'dc-linkbtn', onclick: exportBending }, tr('app.rep.csv'))));
      if (schedule.rows.length) out.push(table(rows, [3, 4, 5, 6, 7, 8, 9, 10, 11]));
      else out.push(el('p', { className: 'dc-note' }, tr('app.rep.bending.none')));
    }
    ui.report.replaceChildren(...out);
  }
  /** A table's total row, in whichever words the reports wrote it (marks.js, rebar.js, report.js). */
  const isTotal = (c) => [tr('marks.total'), tr('rebar.total'), tr('rep.total')].includes(c);
  function table(rows, numeric = [], refOf = null) {
    const [head, ...body] = rows;
    const n = new Set(numeric);
    return el('table', { className: 'dc-table' },
      el('thead', {}, el('tr', {}, ...head.map((h, i) => el('th', { className: n.has(i) ? 'n' : '', scope: 'col' }, h)))),
      el('tbody', {}, ...body.map((r) => el('tr', { className: isTotal(r[0]) ? 'total' : '' }, ...r.map((c, i) => {
        if (i === 0 && refOf && !isTotal(r[0])) { const ref = refOf(r); if (ref) return el('td', {}, el('button', { type: 'button', onclick: () => { setTool('select'); select(ref); } }, c)); }
        return el('td', { className: n.has(i) ? 'n' : '' }, c);
      })))));
  }

  // ---- files ----
  const safeName = () => (model.state.name || 'model').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, '-').trim().slice(0, 80) || 'model';
  // the shell's host adapter: the browser's picker and downloads, or the desktop's dialogs (saving in place there)
  const fileHost = getHost({ app: 'detailcraft' });
  const MODEL_TYPES = [{ description: 'DetailCraft', extensions: ['.json'] }];   // i18n-ignore: a file type label the OS shows
  const IFC_TYPES = [{ description: 'IFC', extensions: ['.ifc'] }];             // i18n-ignore
  const OPEN_TYPES = [{ description: 'DetailCraft, IFC, project bundle', extensions: ['.json', '.ifc', '.ccbundle', '.zip'] }];   // i18n-ignore
  let saveTarget = null;               // the HostFile the open model came from, when it can be written in place
  /** Every export and download: a copy (the browser downloads it; the desktop asks where). */
  function download(name, data, type) { fileHost.download(data, name, type); }
  // ---- AI assistants and scripts (0.4 X.12; agents.js on host.js's control channel): off until Settings › Assistants ----
  window.detailcraftControl = installAgents({
    model: () => model, built: () => built, marks: () => marks, selected: () => selected(), analysis: () => analysis,
    select: (refs) => { setTool('select'); setSelection(refs); return selected().length; },
    busy: () => (pending ? 'placing a member' : moveRefs ? 'moving parts' : tool === 'paste' ? 'pasting' : null),   // i18n-ignore: read by the assistant
    save: () => saveModel(),
    usd: async (format) => {   // 0.7 AS.6: as Output › USD (exportUsd) makes it
      const { steelUsd } = await import('./usd-detailcraft.js');
      const r = steelUsd(built, marks, { format, name: safeName() });
      return { data: r.data, report: r.report, name: safeName(), type: format === 'usda' ? 'model/vnd.usda' : format === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream' };
    },
    download: (name, data, type) => download(name, data, type),
    exports: { ifc: () => exportIfc(), nc: () => exportNc(), bom: () => exportBom(), bending: () => exportBending(), kiss: () => exportKiss(), cutlist: () => exportNest() },
  });
  // ---- the shell's modules (0.8 round 3; docs/apps/shell-modules.md § Mounting): calc sheets, design reasons, running totals, lessons, Suggest, activity, Ask ----
  shellMount = mountDetailShell({
    model: () => model, built: () => built, schedule: () => schedule, selected: () => selected(), setSelection: (refs) => { setTool('select'); setSelection(refs); },
    describe: (r) => describeRef(r), control: window.detailcraftControl, name: () => model.state.name, path: () => saveTarget?.path || saveTarget?.name || '',
    onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the model's members, connections, stairs and footings in order, each said with its mark ----
  {
    const refKey2 = (r) => r.kind + ':' + r.id;
    const rows = () => { const m = model.state; return [...m.members.map((x) => ({ kind: 'member', id: x.id })), ...m.connections.map((x) => ({ kind: 'conn', id: x.id })), ...(m.stairs || []).map((x) => ({ kind: 'stair', id: x.id })), ...m.footings.map((x) => ({ kind: 'footing', id: x.id }))].filter(exists); };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.canvas, label: () => tr('app.access.stage'),
      walk: () => rows().map((r) => ({ id: refKey2(r), ref: r, label: describeRef(r) })),
      describe: () => { const m = model.state, n = m.members.length + m.connections.length + m.footings.length + (m.stairs || []).length; return n ? tr('app.access.model', { name: m.name || '', what: countText({ members: m.members.length, connections: m.connections.length, footings: m.footings.length, stairs: (m.stairs || []).length }) }) : tr('app.access.empty'); },
      selection: () => { const l = selected(); return l.length ? tr('app.access.selected', { n: l.length, what: l.slice(0, 5).map(describeRef).join(' ') }) : tr('app.access.nosel'); },
      pick: (p, item) => { if (item) { setTool('select'); setSelection([item.ref]); window.ccAccess.say(tr('app.access.selected', { n: 1, what: item.label })); } else window.ccAccess.say(tr('app.access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  async function saveModel() {
    shellMount?.beforeSave();
    const name = safeName() + '.detailcraft.json';
    const r = await fileHost.save({ target: saveTarget, data: model.toJSON(), name, types: MODEL_TYPES });
    if (!r.ok) { if (!r.cancelled) print(tr('file.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
    if (r.target?.writable) saveTarget = r.target;
    model.markSaved();
    renderBar();
    refreshAutosave();
    print(r.how === 'written' ? tr('file.save.written', { file: r.path || r.name || name }) : tr('app.file.saved', { file: name }));
    return true;
  }
  async function pickAndOpen(types) {
    let files;
    try { files = await fileHost.openFile({ types }); } catch (err) { print(tr('file.open.failed', { error: err.message || String(err) })); return; }
    if (files?.[0]) await openFile(files[0]);
  }
  fileHost.onOpenFiles(async (files) => { if (files?.[0]) await openFile(files[0]); });
  async function confirmDiscard() {
    if (!model.dirty) return true;
    const c = await ask({ title: tr('app.ask.unsaved.title'), text: tr('app.ask.unsaved.text', { name: model.state.name }), buttons: [['cancel', tr('app.ask.cancel'), 'btn-line'], ['discard', tr('app.ask.unsaved.discard'), 'btn-line'], ['save', tr('app.ask.unsaved.save'), 'btn-plot']] });
    if (c === 'save') return saveModel();
    return c === 'discard';
  }
  async function newModel() {
    if (!(await confirmDiscard())) return;
    setModel(new Model(freshState()));
    setTool('select');
    print(tr('app.file.new'));
  }
  async function openSample() {
    if (!(await confirmDiscard())) return;
    setModel(sampleModel());
    setTool('select');
    print(tr('app.file.sample'));
  }
  ui.file.addEventListener('change', () => { const f = ui.file.files[0]; ui.file.value = ''; if (f) openFile(f); });
  /** A File or a host.js HostFile (both have name, size, text(); bytes from either). */
  const bytesOf = async (f) => (f.bytes ? f.bytes() : new Uint8Array(await f.arrayBuffer()));
  /** 0.8 BIM-BUNDLE-OPEN: a project bundle (.ccbundle.zip) opens as its model (shared reader and plan, ./bundle/plan.js). */
  async function openBundleModel(file) {
    const r = await (await import('./bundle/plan.js')).expandBundles([file], 'detailcraft', { prefer: ['model'], limit: 1 });
    const n = r.notes[0];
    if (!n || n.code === 'failed') { print(tr('bundle.failed', { file: file.name, why: n ? n.why : '' })); return; }
    if (n.code === 'empty' || !r.files.length) { print(tr('bundle.nomodel', { file: file.name })); return; }
    print(tr('bundle.model', { file: file.name }));
    return openIfc(r.files[0]);
  }
  async function openFile(file) {
    if (/\.ccbundle$|ccbundle\.zip$/i.test(file.name)) return openBundleModel(file);
    if (/\.ifc$/i.test(file.name)) return openIfc(file);
    if (!/\.json$/i.test(file.name)) { print(tr('app.file.wrong-type')); return; }
    if (file.size > 50 * 1024 * 1024) { print(tr('app.file.too-big')); return; }
    if (!(await confirmDiscard())) return;
    const text = await file.text();
    const m = new Model();
    try { const { warnings } = m.load(text); setModel(m); saveTarget = file.writable ? file : null; setTool('select'); print(tr('app.file.opened', { file: file.name }) + (warnings.length ? ' ' + warnings.join(' ') : '')); }
    catch (err) { print(tr('app.file.open.error', { file: file.name, error: err.message })); }
  }
  root.addEventListener('dragover', (e) => { if ([...(e.dataTransfer?.types || [])].includes('Files')) { e.preventDefault(); ui.drop.hidden = false; } });
  root.addEventListener('dragleave', (e) => { if (e.target === ui.drop || !root.contains(e.relatedTarget)) ui.drop.hidden = true; });
  root.addEventListener('drop', async (e) => {
    e.preventDefault(); ui.drop.hidden = true;
    let files = [];
    try { files = await fileHost.fromDrop(e.dataTransfer); } catch { files = [...(e.dataTransfer?.files || [])]; }
    if (files[0]) openFile(files[0]);
  });
  // Leaving by a link on the page asks in the page; the browser's own "Leave site?" is left for what no page can
  // catch (closing the tab, reloading, typing an address). After "save first", wait for the download to start.
  let leaving = false;
  window.addEventListener('beforeunload', (e) => { if (model.dirty && !leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    leaving = true;
    setTimeout(() => location.assign(url.href), model.dirty ? 0 : 800);
  });

  // ---- exports ----
  function exportIfc() {
    if (!built.parts.length && !model.state.footings.length && !rcb.items.length && !rcb.loose.length) { print(tr('app.export.nothing')); return; }
    const txt = writeIfc(model.state, built, marks, schedule, {});
    download(safeName() + '.ifc', txt, 'application/x-step');
    print(tr('app.export.ifc', { parts: built.parts.length, bolts: built.bolts.length, footings: model.state.footings.length, bars: built.footings.reduce((s, f) => s + f.bars.reduce((t, g) => t + g.count, 0), 0) }));
    if (rcb.items.length || rcb.loose.length) print(tr('app.export.ifc', { parts: built.parts.length, bolts: built.bolts.length, footings: model.state.footings.length, bars: built.footings.reduce((s, f) => s + f.bars.reduce((t, g) => t + g.count, 0), 0) }) + ' ' + tr('rc.export.ifc', { n: rcb.items.length, bars: rcb.items.reduce((s, i) => s + i.res.groups.reduce((t2, g) => t2 + g.count, 0), 0) + rcb.loose.reduce((s, g) => s + g.count, 0) }));
  }
  // 0.7 XF.8 (session usd): the steel model as USD — usd-detailcraft.js on cc-usd (./usd/, lib/usd synced)
  async function exportUsd() {
    if (!built.parts.length) { print(tr('app.export.nothing')); return; }
    const k = await ask({ title: tr('usd.dialog.title'), text: tr('usd.export.lede'), buttons: [['cancel', tr('app.ask.cancel'), 'btn-line'], ['usda', tr('usd.dialog.format.usda'), 'btn-line'], ['usdc', tr('usd.dialog.format.usdc'), 'btn-line'], ['usdz', tr('usd.dialog.format.usdz'), 'btn-plot']] });
    if (!['usda', 'usdc', 'usdz'].includes(k)) return;
    try {
      const { steelUsd } = await import('./usd-detailcraft.js');
      const r = steelUsd(built, marks, { format: k, name: safeName() });
      download(safeName() + '.' + k, new Blob([r.data], { type: k === 'usda' ? 'model/vnd.usda' : k === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream' }));
      print(tr('usd.done', { name: safeName() + '.' + k, n: r.report.parts }) + (r.report.notes.length ? ' ' + tr('usd.steel.not_in') : ''));
    } catch (err) { print(tr('usd.export.failed', { why: String(err.message || err) })); }
  }
  /** The NC1 files of every part that can have one: { files: [{ name, data }], skipped: [marks] }. */
  function ncFiles() {
    const files = [], skipped = [];
    for (const row of marks.parts) {
      const part = built.byId.get(row.ids[0]);
      const why = ncRefusal(part);
      if (why) { skipped.push(row.mark); continue; }
      files.push({ name: row.mark + '.nc1', data: writeNc1(part, { order: model.state.name, mark: row.mark, count: row.count, phase: String(part.phase || 1) }) });
    }
    return { files, skipped };
  }
  // 0.8 round 3 (EG.40): "Send NC to a machine…". Studio's desktop shell offers `window.ccSendToMachine({ app, kind, files: [{ name, bytes }], note }) → Promise<{ ok, sent, error? }>`
  // (the dialog that picks the machine, studio_PART_3) and the bridge `cadcraftDesktop.machines`; without both the button stays hidden. Files are uploaded, never started from here.
  const machinesReady = () => !!(window.ccSendToMachine && window.cadcraftDesktop && window.cadcraftDesktop.machines);
  async function sendNc() {
    if (!machinesReady()) { print(tr('ncsend.none')); return; }
    const { files, skipped } = ncFiles();
    if (!files.length) { print(tr(built.parts.length ? 'app.export.nc.none2' : 'app.export.nothing')); return; }
    const enc = new TextEncoder();
    try {
      const r = await window.ccSendToMachine({ app: 'detailcraft', kind: 'nc1', files: files.map((f) => ({ name: f.name, bytes: typeof f.data === 'string' ? enc.encode(f.data) : f.data })), note: model.state.name });
      if (r && r.ok) print(tr('ncsend.done', { n: r.sent ?? files.length }) + (skipped.length ? ' ' + tr('app.export.nc.skipped2', { marks: skipped.join(', ') }) : '') + ' ' + tr('app.export.nc.check'));
      else if (r && r.cancelled) print(tr('ncsend.cancelled'));
      else print(tr('ncsend.failed', { error: String((r && r.error) || '') }));
    } catch (err) { print(tr('ncsend.failed', { error: String(err && err.message || err) })); }
  }
  function exportNc() {
    const { files, skipped } = ncFiles();
    if (!files.length) { print(tr(built.parts.length ? 'app.export.nc.none2' : 'app.export.nothing')); return; }
    download(safeName() + ' NC.zip', new Blob([zip(files)], { type: 'application/zip' }));
    print(tr('app.export.nc.done', { n: files.length }) + (skipped.length ? ' ' + tr('app.export.nc.skipped2', { marks: skipped.join(', ') }) : '') + ' ' + tr('app.export.nc.check'));
  }
  function exportBom() {
    const t = bomTables(marks, built.bolts);
    download(safeName() + ' BOM.csv', '﻿' + sectionsCsv([[tr('app.k.parts'), t.parts], [tr('app.k.assemblies'), t.assemblies], [tr('app.rep.bolts'), t.bolts]]), 'text/csv');
    print(tr('app.export.bom', { n: marks.parts.length }));
  }
  // ---- clash check (D15): on demand, visible phases only; the result is kept until the model changes ----
  let clashRes = null, clashTol = 1;
  function runClashes() {
    const phases = new Set(model.state.phases.map((p) => p.n).filter((n) => !hiddenPhases.has(n)));
    clashRes = { ...clashCheck(model.state, built, { tol: clashTol, phases }), version: model.version, hidden: hiddenPhases.size };
    reportTab = 'clashes';
    renderReport();
    const n = clashRes.clashes.length;
    print(tr(n ? 'clash.found' : 'clash.none', { n, parts: clashRes.checked, ms: clashRes.ms }));
  }
  const refLabel = (r) => {
    if (r.kind === 'member') { const m = model.member(r.id); return (marks.partMark.get(r.id) || '') + ' ' + (m ? m.profile : ''); }
    if (r.kind === 'conn') { const p = built.byId.get(r.id + '.plate') || built.parts.find((x) => x.conn === r.id); return (p ? marks.partMark.get(p.id) + ' ' + p.profileName : r.id); }
    return (marks.footingMark.get(r.id) || '') + ' ' + tr('clash.footing');
  };
  function clashPanel() {
    const tol = numIn(clashTol, (v) => { clashTol = Math.max(0, Math.min(50, v)); }, { min: 0, max: 50, step: 0.5, id: 'dc-clash-tol' });
    tol.dataset.clashTol = '';
    const head = el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('clash.title')),
      el('label', { for: 'dc-clash-tol', className: 'dc-muted' }, tr('clash.tol')), tol,
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { clashRun: '' }, onclick: () => { tol.dispatchEvent(new Event('change')); runClashes(); } }, tr('clash.run')));
    const out = [head];
    if (!clashRes) { out.push(el('p', { className: 'dc-note' }, tr('clash.intro'))); return out; }
    if (clashRes.version !== model.version) out.push(el('p', { className: 'dc-warn' }, tr('clash.stale')));
    if (!clashRes.clashes.length) out.push(el('p', { className: 'dc-note' }, tr('clash.clean', { parts: clashRes.checked })));
    else {
      const rows = clashRes.clashes.map((c) => el('tr', { dataset: { clash: '' } },
        el('td', {}, refLabel(c.a)), el('td', {}, refLabel(c.b)), el('td', { className: 'n' }, String(c.depth)), el('td', {}, nodeName(model.state, c.at)),
        el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => { if (tool !== 'select') setTool('select'); setSelection([c.a, c.b].filter(exists)); view?.focusPoint(c.at, 2500); print(tr('clash.shown', { a: refLabel(c.a), b: refLabel(c.b), d: c.depth })); } }, tr('clash.show')))));
      out.push(el('table', { className: 'dc-table' },
        el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, tr('clash.col.a')), el('th', { scope: 'col' }, tr('clash.col.b')), el('th', { scope: 'col', className: 'n' }, tr('clash.col.depth')), el('th', { scope: 'col' }, tr('clash.col.at')), el('th', { scope: 'col' }, ''))),
        el('tbody', {}, ...rows)));
    }
    out.push(el('p', { className: 'dc-note' }, tr('clash.note') + (clashRes.hidden ? ' ' + tr('clash.hidden') : '')));
    return out;
  }

  /** Cut list (D24): the linear parts nested into stock lengths; the stock, kerf, trim and keep length are settings. */
  function nestResult() { const o = settings.nest; return nestBars(piecesFromMarks(marks), { stock: o.stock, kerf: o.kerf, trim: o.trim, keep: o.keep }); }
  function nestPanel() {
    const o = settings.nest;
    const setN = (patch) => { setSetting('nest', { ...settings.nest, ...patch }); renderReport(); };
    const stock = el('input', { type: 'text', className: 'dc-input', value: o.stock.join(' '), dataset: { nestStock: '' }, size: 18 });
    stock.addEventListener('change', () => { const v = stock.value.split(/[\s,;]+/).map(Number).filter((x) => x >= 100 && x <= 30000).slice(0, 8); if (v.length) setN({ stock: v }); else { stock.value = o.stock.join(' '); print(tr('nest.err.stock')); } });
    const form = el('div', { className: 'dc-props dc-nest-form' }, ...field(tr('nest.stock'), stock),
      ...field(tr('nest.kerf'), numIn(o.kerf, (v) => setN({ kerf: Math.min(20, v) }), { min: 0 })), ...field(tr('nest.trim'), numIn(o.trim, (v) => setN({ trim: Math.min(500, v) }), { min: 0 })),
      ...field(tr('nest.keep-from'), numIn(o.keep, (v) => setN({ keep: v }), { min: 0 })));
    const res = nestResult(), T = cutListTables(res);
    const out = [el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('nest.title', { bars: res.totals.bars, waste: (res.totals.waste * 100).toFixed(1) })),
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { nestCsv: '' }, onclick: exportNest }, tr('app.rep.csv'))), form];
    if (!res.groups.length) { out.push(el('p', { className: 'dc-note' }, tr('nest.none'))); return out; }
    out.push(table(T.summary, [2, 4, 5, 6]), el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('nest.bars'))), table(T.bars, [1, 2, 4]), el('p', { className: 'dc-note' }, tr('nest.note')));
    return out;
  }
  function exportNest() {
    const T = cutListTables(nestResult());
    download(safeName() + ' ' + tr('nest.file') + '.csv', '\ufeff' + sectionsCsv([[tr('nest.summary'), T.summary], [tr('nest.bars'), T.bars]]), 'text/csv');
    print(tr('nest.saved'));
  }
  function exportReport() {
    const rep = phaseReport(model.state, built, marks, schedule);
    download(safeName() + ' ' + tr('rep.file') + '.csv', '\ufeff' + reportCsv(rep), 'text/csv');
    print(tr('rep.saved.csv', { n: rep.phases.length }));
  }
  async function exportReportPdf() {
    const rep = phaseReport(model.state, built, marks, schedule);
    const pages = reportSheets(rep, { paper: settings.paper, model: model.state.name, date: new Date().toISOString().slice(0, 10) });
    const { bytes, missing } = await toPdf(pages, { title: tr('rep.title') });
    download(safeName() + ' ' + tr('rep.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('rep.saved.pdf', { n: pages.length, paper: paperLabel(settings.paper) }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  }
  function exportKiss() {
    if (!built.parts.length) { print(tr('kiss.empty')); return; }
    const metric = settings.kiss === 'auto' ? kissMetric(built) : settings.kiss === 'metric';
    const r = kissFile(model.state, built, marks, { metric, revs: revsByNumber(model.state.issues) });
    download(safeName() + '.kss', r.text, 'text/plain');
    print(tr('kiss.saved', { job: r.job, units: tr(metric ? 'kiss.metric' : 'kiss.imperial'), d: r.counts.D, m: r.counts.M }));
  }
  function exportBending() {
    if (!schedule.rows.length) { print(tr('app.export.bending.none')); return; }
    download(safeName() + ' ' + tr('app.export.bending.file') + '.csv', '﻿' + toCsv(scheduleTable(schedule.rows, { codes: settings.shapeCodes, naming: settings.barNames })), 'text/csv');
    print(tr('app.export.bending', { n: schedule.rows.length }));
  }

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
    lastFocus = document.activeElement;
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

  // ---- drawings dialog: GA plans and elevations + assembly drawings, made from the model on every open ----
  let dwgSet = null;
  function makeDrawings() { return drawingSet(model.state, built, marks, { date: new Date().toISOString().slice(0, 10), paper: settings.paper }); }
  function openDrawings() {
    if (!built.parts.length) { print(tr('app.dwg.nothing')); return; }
    if (!fillDrawings(0)) return;
    lastFocus = document.activeElement;
    ui.dwg.showModal();
    requestAnimationFrame(() => drawList(ui.dwgCanvas, dwgSet.sheets[Number(ui.dwgSheet.value) || 0]));
    ui.dwgSheet.focus();
  }
  /** (Re)makes the set on the chosen sheet size and fills the dialog; keeps the sheet shown. */
  function fillDrawings(at) {
    dwgSet = makeDrawings();
    if (!dwgSet.sheets.length) { print(tr('app.dwg.empty')); return false; }
    const st = sheetStatus(dwgSet.sheets, model.state.issues);
    const tag = (sh) => { const x = st.get(sh.id); return !x.issued ? '' : x.changed ? ' ' + tr('issue.tag.changed', { rev: x.rev }) : ' ' + tr('issue.tag.rev', { rev: x.rev }); };
    ui.dwgSheet.replaceChildren(...dwgSet.sheets.map((sh, i) => el('option', { value: String(i) }, sh.number + ' — ' + sh.title + ' (' + sh.scale + ')' + tag(sh))));
    ui.dwgSheet.value = String(Math.min(at, dwgSet.sheets.length - 1));
    syncIssue();
    fillPaper(ui.dwgPaper);
    ui.dwgNote.textContent = tr('dwg.note', { n: dwgSet.sheets.length, paper: paperLabel(dwgSet.paper), ref: dwgSet.ref });
    return true;
  }
  ui.dwgPaper.addEventListener('change', () => {
    setSetting('paper', PAPER_KEYS.includes(ui.dwgPaper.value) ? ui.dwgPaper.value : DEFAULT_PAPER, tr('dwg.paper.set', { paper: paperLabel(ui.dwgPaper.value) }));
    if (dwgSet && fillDrawings(Number(ui.dwgSheet.value) || 0)) drawList(ui.dwgCanvas, dwgSet.sheets[Number(ui.dwgSheet.value)]);
  });
  ui.dwgSheet.addEventListener('change', () => { if (dwgSet) { drawList(ui.dwgCanvas, dwgSet.sheets[Number(ui.dwgSheet.value)]); syncIssue(); } });
  // ---- issue log (D17) ----
  function syncIssue() {
    if (!dwgSet) return;
    const st = sheetStatus(dwgSet.sheets, model.state.issues);
    const sh = dwgSet.sheets[Number(ui.dwgSheet.value)], x = st.get(sh.id);
    ui.issueStatus.textContent = !x.issued ? tr('issue.st.new') : x.changed ? tr('issue.st.changed', { rev: x.rev, date: x.date }) : tr('issue.st.current', { rev: x.rev, date: x.date });
    ui.issueStatus.classList.toggle('is-changed', x.issued && x.changed);
    ui.issueOne.disabled = x.issued && !x.changed;
    ui.issueOne.title = ui.issueOne.disabled ? tr('issue.one.why') : '';
    const n = dwgSet.sheets.filter((s2) => st.get(s2.id).changed).length;
    ui.issueAll.textContent = tr('issue.all', { n });
    ui.issueAll.disabled = !n;
  }
  function issueSheets(ids) {
    const date = new Date().toISOString().slice(0, 10);
    const list = planIssue(dwgSet.sheets, model.state.issues, ids, { date, note: ui.issueNote.value });
    if (!list.length) return;
    if (!edit(tr('issue.undo'), (tx) => tx.addIssues(list))) return;
    const at = Number(ui.dwgSheet.value) || 0;
    if (fillDrawings(at)) drawList(ui.dwgCanvas, dwgSet.sheets[Number(ui.dwgSheet.value)]);
    print(list.length === 1 ? tr('issue.done.one', { number: list[0].number, rev: list[0].rev }) : tr('issue.done.all', { n: list.length }));
  }
  ui.issueOne.addEventListener('click', () => { if (dwgSet) issueSheets([dwgSet.sheets[Number(ui.dwgSheet.value)].id]); });
  ui.issueAll.addEventListener('click', () => { if (dwgSet) { const st = sheetStatus(dwgSet.sheets, model.state.issues); issueSheets(dwgSet.sheets.filter((s2) => st.get(s2.id).changed).map((s2) => s2.id)); } });
  ui.dwgClose.addEventListener('click', () => ui.dwg.close());
  ui.dwg.addEventListener('close', () => { dwgSet = null; restoreFocus(); });
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
    print(tr(all ? 'dwg.saved.all' : 'dwg.saved.one', { n: r.files.length, format: fmtName(), paper: paperLabel(dwgSet.paper) }) + (r.notes.length ? ' ' + r.notes.join(' ') : ''));
  }
  ui.dwgAll.addEventListener('click', async () => {
    if (!dwgSet) return;
    if (ui.dwgFormat.value !== 'pdf') return saveCad(dwgSet.sheets, true);
    const { bytes, missing } = await toPdf(dwgSet.sheets, { title: tr('app.dwg.pdf-title', { name: model.state.name }) });
    download(safeName() + ' ' + tr('app.dwg.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.dwg.saved.pdf', { n: dwgSet.sheets.length, ref: dwgSet.ref }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  });
  ui.dwgOne.addEventListener('click', async () => {
    if (!dwgSet) return;
    const sh = dwgSet.sheets[Number(ui.dwgSheet.value)];
    if (ui.dwgFormat.value !== 'pdf') return saveCad([sh], false);
    const { bytes } = await toPdf(sh, { title: sh.number + ' ' + sh.title });
    download(safeName() + ' ' + sh.number + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.dwg.saved.sheet', { number: sh.number }));
  });

  // ---- shop drawing dialog ----
  let shopSheets = null, shopList = null, shopMark = '';
  function openShop() {
    if (!built.parts.length) { print(tr('app.dwg.nothing')); return; }
    const part = selectedPart();
    if (!fillShop(part ? part.id : null, 0)) return;
    lastFocus = document.activeElement;
    ui.shop.showModal();
    requestAnimationFrame(drawShop);
    ui.shopPdf.focus();
  }
  /** (Re)makes the set: one sheet per part mark, on the chosen sheet size. Opens on the part's own mark, else on sheet `at`. */
  function fillShop(partId, at) {
    const date = new Date().toISOString().slice(0, 10);
    const weld = (part) => { const w = built.welds.find((x) => x.between.includes(part.id)); return w ? tr('app.shop.weld', { size: w.size, where: w.where.toLowerCase() }) : ''; };
    const set = shopSet(built, marks, { model: model.state.name, date, paper: settings.paper, weld });
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
    const { bytes, missing } = await toPdf(shopSheets, { title: tr('app.shop.set-title', { name: model.state.name }) });
    download(safeName() + ' ' + tr('app.shop.file') + '.pdf', new Blob([bytes], { type: 'application/pdf' }));
    print(tr('app.shop.saved.all', { n: shopSheets.length }) + (missing ? ' ' + tr('app.pdf.missing', { n: missing }) : ''));
  });
  ui.shopClose.addEventListener('click', () => ui.shop.close());
  ui.shop.addEventListener('close', () => { shopSheets = null; shopList = null; restoreFocus(); });

  // ---- in-page question dialog (never window.confirm) ----
  let lastFocus = null;
  function restoreFocus() {
    const t = lastFocus && document.contains(lastFocus) && !lastFocus.disabled ? lastFocus : ui.tools.querySelector('[data-act="tool:select"]');
    lastFocus = null;
    if (!t) return;
    if (document.activeElement === t) t.blur();
    t.focus({ preventScroll: true });
  }
  function ask({ title, text, buttons }) {
    return new Promise((done) => {
      lastFocus = document.activeElement;
      const dlg = el('dialog', { className: 'dc-dialog dc-ask', 'aria-labelledby': 'dc-ask-h' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-ask-h' }, title)),
        el('p', { className: 'dc-ask-text' }, text),
        el('div', { className: 'dc-dlg-foot' }, ...buttons.map(([key, label, cls]) => el('button', { type: 'button', className: cls + ' btn-sm-dc', dataset: { key } }, label))));
      let result = 'cancel';
      dlg.addEventListener('click', (e) => { const b = e.target.closest('button[data-key]'); if (b) { result = b.dataset.key; dlg.close(); } });
      dlg.addEventListener('close', () => { dlg.remove(); restoreFocus(); done(result); });
      root.append(dlg);
      dlg.showModal();
      dlg.querySelector('button[data-key="cancel"]')?.focus();
    });
  }

  // ---- keys ----
  document.addEventListener('keydown', (e) => {
    if (document.querySelector('dialog[open]')) return;
    const menu = root.querySelector('details.dc-menu[open]');
    if (menu && e.key === 'Escape') { e.preventDefault(); menu.open = false; menu.querySelector('summary').focus(); return; }
    const t = e.target;
    const typing = t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName));
    const k = e.key.toLowerCase();
    if (e.ctrlKey || e.metaKey) {
      if (e.altKey) return;
      if (e.shiftKey) {
        if (typing) return;
        if (k === 'z') { e.preventDefault(); act('redo'); }
        else if (k === 'v') { e.preventDefault(); act('paste-in-place'); }
        return;
      }
      if (k === 's') { e.preventDefault(); void saveModel(); return; }
      if (k === 'o') { e.preventDefault(); act('open'); return; }
      if (typing) return;
      if (k === 'z') { e.preventDefault(); act('undo'); }
      else if (k === 'y') { e.preventDefault(); act('redo'); }
      else if (k === 'c' || k === 'x') {
        if (!selected().length && String(window.getSelection?.() || '')) return;   // copying text from a panel or the status bar
        e.preventDefault(); act(k === 'c' ? 'copy' : 'cut');
      }
      else if (k === 'v') {
        const area = storedArea();
        if (area && tool !== 'paste' && areaClipNewer(area, currentClip(false))) { keyPasteArea(area); return; }   // D8.15: no preventDefault — the paste event decides
        e.preventDefault(); act('paste');
      }
      else if (k === 'd') { e.preventDefault(); act('duplicate'); }
      else if (k === 'a') { e.preventDefault(); act('select-all'); }
      return;
    }
    if (typing || e.altKey) return;
    if (e.key === 'Escape') {
      if (view?.cancelWindow()) { print(tr('sel.window.cancel')); return; }
      if (view?.cancelDrag()) return;
      if (tool === 'move') { const refs = moveRefs; setTool('select'); setSelection(refs || []); print(tr('xf.move.cancel')); return; }
      if (pending) { pending = null; if (view) { view.rubberFrom = null; view.drawOverlay(); } print(tr('app.place.cancelled')); }
      else if (tool === 'paste') { setTool('select'); print(tr('app.paste.cancelled')); }
      else if (tool !== 'select') setTool('select');
      else if (selected().length) act('select-none');
      return;
    }
    if (e.key === 'Delete' || e.key === 'Backspace') { if (selected().length) { e.preventDefault(); deleteSelection(); } return; }
    const tools = { v: 'select', b: 'beam', c: 'column', r: 'brace', p: 'plate', f: 'footing', s: 'stair', m: 'move' };
    if (tools[k]) { e.preventDefault(); setTool(tools[k]); }
  });

  window.detailcraft = {
    get model() { return model; }, get built() { return built; }, get marks() { return marks; }, get schedule() { return schedule; },
    get view() { return view; }, get viewMode() { return viewMode; }, get selection() { return sel; }, get selected() { return selected(); }, get tool() { return tool; },
    get settings() { return settings; }, get toolOptions() { return opts; }, clipboard: () => currentClip(),
    get viewCube() { return viewCube; }, get axisIcon() { return axisIcon; }, cubeView: () => cubeOpts?.getView(),
    setTool, select, setSelection, setView, act, nodeScreen: (p) => view?.toScreen(p),
    drawings: () => makeDrawings(), get openDrawingSet() { return dwgSet; },
    print: (m) => print(m),   // Studio Live (0.5 LV.22, live.js): its messages
    get analysis() { return analysis; },
    get erection() { return erection; },
    get autopilot() { return autopilot; },
    get congestion() { return congestion; },
    get foundation() { return foundation; },
    get framing() { return framing; },
    get rc() { return rcUi; }, get rcBuild() { return rcb; },   // 0.9 RC.1 (tests)   // 0.8 EG.6 (tests)   // 0.8 EG.5 (tests)   // 0.8 EG.74 (tests)   // 0.8 EG.73 (tests)
  };
  // the menu styles (0.5 IP.3, input-detailcraft.js + the shell's app-input-ui.js): their messages go to the status line, and
  // letters stay DetailCraft's while a placement or a paste is under way
  window.ccInputHooks = { status: (text) => print(text || ''), busy: () => !!pending || tool === 'paste' || tool === 'move' };

  // ---- autosave and crash recovery (0.4 1.2): the open model is the document ----
  const autosave = new Autosave({ app: 'detailcraft' });
  const adoc = autosave.doc({ id: 'open', name: model.state.name, snapshot: async () => ({ data: { text: model.toJSON() }, meta: { name: model.state.name } }) });
  let copyPending = false;
  function refreshAutosave() {
    if (model.dirty) { adoc.rename(model.state.name); adoc.changed(); copyPending = true; }
    else if (copyPending) { adoc.clean(); copyPending = false; }
  }
  window.detailcraftAutosave = autosave;
  // automated browsers (tests, which leave edits open mid-run) see "Recover your work?" only when they ask: ?autosave=offer
  if (!navigator.webdriver || new URLSearchParams(location.search).get('autosave') === 'offer') autosave.offer({
    onRecover: async (rec) => {
      const text = rec.data?.text;
      if (typeof text !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      if (!(await confirmDiscard())) throw new Error('Kept the open model.');  // i18n-ignore: the copy stays, the shell says why
      const m = new Model();
      const { warnings } = m.load(text);
      m.savedVersion = -1;                  // recovered work is not saved to a file yet
      setModel(m);
      setTool('select');
      print(tr('file.recovered', { name: m.state.name }) + (warnings.length ? ' ' + warnings.join(' ') : ''));
    },
  });

  refresh();
  setView('3d');
  print(tr('app.status.ready'));
  /** The model object an exported IFC element came from (0.7.1 71.25): ifc.js names parts 'part' + id and footings 'footing' + id. */
  let guidMap = null, guidBuilt = null, guidName = null;
  function refOfGuid(g) {
    if (guidBuilt !== built || guidName !== model.state.name) {
      guidBuilt = built; guidName = model.state.name; guidMap = new Map();
      const seed = (k) => guidFor(model.state.name + '|' + k);
      for (const p of built.parts) { const r = p.member ? { kind: 'member', id: p.member } : p.conn ? { kind: 'conn', id: p.conn } : p.stair ? { kind: 'stair', id: p.stair } : null; if (r) guidMap.set(seed('part' + p.id), r); }
      for (const f of model.state.footings) guidMap.set(seed('footing' + f.id), { kind: 'footing', id: f.id });
    }
    return guidMap.get(g) || null;
  }
  // ---- Problems (0.7.1 → 0.8; docs/0.8-PROBLEMS-SPEC.md): build.js's problems in the shell's ⚠ panel, ⚠ markers in the 3D view and in
  // plan / elevation, accepted problems saved in the file (model.state.problems, one undo step). Only with the shell's module (manifest
  // "problems"); the Problems tab below the view keeps working either way.
  if (document.getElementById('cc-problems')) {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const src = P.source({ id: 'detailcraft.build', kind: 'check', label: tr('problems.src.build') });
      const label = (r) => { try { return exists(r) ? describeRef(r).replace(/\.$/, '') : ''; } catch (e) { return ''; } };
      problemsSync = () => {
        src.set(dcProblems(built, model.state, { strings: langCatalog().strings, labelOf: label }));
        P.store.loadAccepted(model.state.problems?.accepted || []);
      };
      // an IDS problem (0.7.1 71.25) names the exported element by GlobalId: back to the member, connection, stair or footing it came from
      const refs = (p) => p.about.map((r) => (r.kind === 'element' ? refOfGuid(r.id) : r)).filter((r) => r && ['member', 'conn', 'footing', 'stair', 'rc', 'rcbar'].includes(r.kind) && exists(r));
      P.adapter({
        t: tr,
        file: () => model.state.name,
        select: (p) => { const r = refs(p); if (!r.length) return; if (tool !== 'select') setTool('select'); setSelection(r); if (r.length === 1) print(describeRef(r[0])); },
        focus: (p) => { const at = refs(p).map((r) => anchorOf(model.state, r) || rcAnchor(model.state, r)).find(Boolean); if (at) view?.focusPoint(at, 2500); },
        saveAccepted: (list) => { edit(tr('problems.undo.accept'), (tx) => tx.setAcceptedProblems(list)); },
      });
      if (view) P.markers({
        stage: ui.stage,
        anchor: (p) => refs(p).map((r) => anchorOf(model.state, r) || rcAnchor(model.state, r)).find(Boolean) || null,
        toScreen: (pt) => view.toScreen(pt),
        onView: (fn) => { const prev = view.onRender; view.onRender = () => { prev?.(); fn(); }; return () => { view.onRender = prev; }; },
      });
      const frameSrc = P.source({ id: 'detailcraft.frame', kind: 'engine', label: tr('problems.src.frame') });
      const extraSrc = P.source({ id: 'detailcraft.erection', kind: 'engine', label: tr('problems.src.erection') });
      extraSet = (list) => extraSrc.set(list);
      extraSet(erection.problems());
      const autoSrc = P.source({ id: 'detailcraft.autopilot', kind: 'engine', label: tr('problems.src.autopilot') });
      autoSet = (list) => autoSrc.set(list);
      autoSet(autopilot.problems());
      const congSrc = P.source({ id: 'detailcraft.congestion', kind: 'engine', label: tr('problems.src.congestion') });
      congSet = (list) => congSrc.set(list);
      congSet(congestion.problems());
      const rcSrc = P.source({ id: 'detailcraft.rebar', kind: 'check', label: tr('problems.src.rebar') });   // 0.9 RC.1: laps, anchorage, cover, spacing, steel
      rcSet = (list) => rcSrc.set(list);
      rcSet(rcProblems(rcb));
      const fndSrc = P.source({ id: 'detailcraft.foundation', kind: 'engine', label: tr('problems.src.foundation') });
      fndSet = (list) => fndSrc.set(list);
      fndSet(foundation.problems());
      const brkSrc = P.source({ id: 'detailcraft.breakit', kind: 'engine', label: tr('problems.src.breakit') });
      breakSet = (list) => brkSrc.set(list);
      breakSet(breakProblems);
      const supSrc = P.source({ id: 'detailcraft.supply', kind: 'engine', label: tr('problems.src.supply') });
      supplySet = (list) => supSrc.set(list);
      supplySet(supply ? supply.problems() : []);
      const frmSrc = P.source({ id: 'detailcraft.framing', kind: 'engine', label: tr('problems.src.framing') });
      frmSet = (list) => frmSrc.set(list);
      frmSet(framing.problems());
      const consSrc = P.source({ id: 'detailcraft.constructability', kind: 'engine', label: tr('problems.src.constructability') });
      consSet = (list) => consSrc.set(list);
      consSet(constructability(model.state, built));
      frameProblemsSet = (list) => frameSrc.set(list);
      if (frameProblems) frameProblemsSet(frameProblems);
      problemsSync();
      renderReport();
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  // ---- Check against IDS (0.7.1 71.25; ids-ui.js, cc-ids in ./ids/): the IFC this model exports (writeIfc, read back by cc-ifc) against the
  // client's IDS, remembered in the file (state.ids, one undo step); failures in the shell's Problems, named by the export's GlobalIds
  // (guidFor(model name | part id): stable, so refOfGuid finds the member, connection, stair or footing a click should select)
  idsUi = mountIds({
    root, el, t: tr, print,
    ifc: async () => {
      if (!built.parts.length && !model.state.footings.length && !rcb.items.length && !rcb.loose.length) throw new Error(tr('app.export.nothing'));
      const { IfcFile } = await import('./ifc/model.js');
      return IfcFile.open(new TextEncoder().encode(writeIfc(model.state, built, marks, schedule, {})));
    },
    readRecord: () => (model.state.ids ? { ...model.state.ids, text: model.idsText() } : null),
    // the text once in model.idsTexts, the undo step holds only { name, hash } (lead 2026-10-26: no IDS text in the snapshots)
    writeRecord: (rec) => edit(tr(rec ? 'ids.undo.set' : 'ids.undo.clear'), (tx) => tx.setIds(rec ? { name: rec.name, hash: model.idsTexts.put(rec.text) } : null)),
  });
  window.detailcraftIds = idsUi;   // for tests (tools/ids/browser-detailcraft.mjs)
  // workspace layouts (Settings › Global › Layout; 0.7 WS.13): the shell's engine builds the chosen layout, workspace-detailcraft.js fills it
  import('./workspace-detailcraft.js').then((m) => m.mountDetailcraftWorkspace({ root, dc: window.detailcraft })).then((w) => { workspace = w; })
    .catch((err) => { console.warn('DetailCraft: no workspace layouts —', err?.message || err); document.documentElement.removeAttribute('data-cc-ws-boot'); });   // i18n-ignore: a console note
  // desktop: the file the app was started with (double-click, "Open with")
  fileHost.launchFiles().then((files) => { if (files?.[0]) openFile(files[0]); }).catch(() => {});
  // Studio Live from a link (#live=<code> on a host's LAN page, ?live=<ROOM>#<secret> from an invite): join; the model comes from the host
  if (/[#&]live=|[?&]live=/.test(location.hash + location.search)) import('./live.js').then((m) => m.joinFromPage(window.detailcraft, fileHost), (err) => print(err.message));
  // another app handed a file over ("Open in DetailCraft" in BimCraft: ?handoff=<id>, 0.4 1.5 / handoff.js): open it as if dropped
  const hid = handoffParam(location.search);
  if (hid) {
    history.replaceState(null, '', location.pathname);
    print(tr('handoff.wait'));
    takeHandoff(hid).then((got) => {
      if (got?.file) { openFile(got.file); return; }
      print(tr('handoff.gone'));
    }).catch(() => print(tr('handoff.gone')));
  }
}
