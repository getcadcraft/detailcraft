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
import { Model, olderCopy, starterState, gridsFromSpacings, spacingsOf, nodeName, pointAt, MATERIALS, defaultsFor, connPhase, recoverText } from './model.js';
import { followJournal } from './history/index.js';   // 0.10 PERF.24
import { getProfile, catalogGroups, plateName, CUSTOM_KINDS, describe, holeFaces, cleanCustom, cleanLibrary } from './profiles.js';
import { build } from './build.js';
import { markParts, bomTables, markFootings } from './marks.js';
import { findJoints, similarJoints, similarColumns, freeSplices, similarSplices, freeBraceEnds, similarBraceEnds, freeMitres, similarMitres, PARAM_LABELS, PARAM_HELP, PARAM_CHOICES, dg1Row, isBeamEnd } from './connections.js';
import { STAIR_DEFAULTS, stairGeometry } from './stair.js';
import { barLabel, bendingSchedule, scheduleTable, FOOTING_DEFAULTS, shapeCode, scheduleDims } from './rebar.js';
import { nestBars, piecesFromMarks, cutListTables } from './nest.js';
import { installAgents } from './agents.js';
import { mountDetailShell } from './shell-mount.js';   // 0.8 round 3: the shell's seven modules (calc, reasons, totals, lessons, Suggest, activity, Ask)
import { writeIfc, guidFor } from './ifc.js';
import { mountIds } from './ids-ui.js';   // 0.7.1 71.25: Output › Check against IDS… (cc-ids in ./ids/)
import { shopRefusal } from './shop.js';
import { toPdf } from './pdf.js';
import { sampleModel } from './sample.js';
import { PAPER_KEYS, paperLabel, DEFAULT_PAPER } from './paper.js';
import { phaseReport, reportTables } from './report.js';
import { getHost } from "./host.js";
import { Autosave } from "./app-autosave.js";
import { handoffParam, takeHandoff } from "./handoff.js";
import { clipSegments, CLIP_KEY } from './clipboard.js';
import { pictureSizeMm, pictureCorners, areaClipNewer, OPACITY_MIN } from './picture.js';
import { mountViewCube, mountAxisIcon } from './viewcube.js';
import { t as tr, has as hasKey } from './i18n.js';   // t() of the language files, named tr here: t is a common local name in this file
import { catalog as langCatalog } from './i18n.js';
import { dcProblems, anchorOf } from './problems-detailcraft.js';   // 0.7.1 → 0.8: the shell's Problems (docs/0.8-PROBLEMS-SPEC.md)
import { readNum } from './numtext.js';   // 0.6 DF.3: arithmetic in number boxes
import { moveXf, transformRefs, ghostLines, manyPatchable, applyToMany } from './transform.js';
import { selectionItems, windowSelect } from './winsel.js';
import { threeCubeOptions } from './viewcube-three.js';
import { constructability } from './constructability.js';   // 0.8 EG.43: constructability checks in Problems
import { mountDetailIssues } from './issues-detail.js';   // 0.10 BK.48 (bk-r3-stages-10): the shared issue history: DetailCraft's sheet issues, records against them
import { mountSupply } from './supply-ui.js';   // 0.8 round 3, EG.51: the Supply tab (supplier stock and lead times against the cut list's bars)
import { mountFraming } from './framing-ui.js';   // 0.8 EG.6: the Framing tab (timber / light-gauge panels, cut lists, shop drawings)
import { mountFoundation } from './foundation-ui.js';   // 0.8 EG.5: the Foundation tab (footing design checks)
import { mountCongestion } from './congestion-ui.js';   // 0.8 EG.74: the Congestion tab (rebar heat map per footing)
import { rcBuild, mergeSchedule, rcProblems, rcAnchor, barOf as rcBarOf } from './rc-detail.js';
import { dcInterfaces } from './interfaces-detailcraft.js';   // 0.10 BK.20 (bk-r3-checks-10): LOD 350 interface rules on walls with openings (lib/modelaudit)   // 0.9 RC.1: reinforced concrete detailing (cc-rc in ./rc/)
import { mountRc } from './rc-ui.js';   // 0.9 RC.1: the Concrete tab, an element's properties, reinforcement shop drawings
import { genDefaults } from './stair-ui.js';   // 0.10 SU.1814c: the steel stair generator's fields and results
import { mountAutopilot } from './autopilot-ui.js';   // 0.8 EG.73: the Autopilot tab (connections for the open joints)
import { mountErection } from './erection-ui.js';   // 0.8 EG.72: the Erection tab (crane chart, picks, the movie file)
import { mountAnalysis } from './analysis-ui.js';   // 0.6 LC.4: the Analysis tab (frame analysis, an aid, not a code check)
import { mountUndoHook } from './undo-hook.js';   // 0.9 EG.77: tells Studio each finished step
import { mountExports } from './export-ui.js';
import { mountMitre } from './mitre-ui.js';
import { mountXf } from './xf-ui.js';
import { mountClipboard } from './clipboard-ui.js';
import { mountDrawings } from './drawings-ui.js';
import { mountIfcImport } from './ifc-import-ui.js';
import { mountFootingStair } from './footing-stair-ui.js';
import { mountClash } from './clash-ui.js';
import { mountReportPanel } from './report-panel-ui.js';
import { mountConnProps } from './conn-props-ui.js';
import { mountMemberProps } from './member-props-ui.js';
import { mountManyProps } from './many-props-ui.js';
import { mountToolOptions } from './tool-options-ui.js';
import { mountConnAdd } from './conn-add-ui.js';
import { mountPlace } from './place-ui.js';

const root = document.querySelector('[data-detailcraft]');
if (root) start(root);

const r1 = (v) => String(Math.round(v * 10) / 10);
const mm = (v) => String(Math.round(v));
const kg = (v) => v.toFixed(1);

async function start(root) {
  // PERF.71 round two (perf-finish-11 code): the closure's mutable state in one object (tools/perf/main-state.mjs); was one `let` each
  const ST = { mine: undefined, model: undefined, built: undefined, marks: undefined, schedule: undefined, tool: undefined, sel: undefined, multi: undefined, pickReady: undefined, pickLast: undefined, pickGuids: undefined, shellMount: undefined, pasteClip: undefined, moveRefs: undefined, curPhase: undefined, pending: undefined, viewMode: undefined, reportTab: undefined, idsUi: undefined, frameProblems: undefined, frameProblemsSet: undefined, problemsSync: undefined, breakSet: undefined, breakProblems: undefined, consSet: undefined, consTimer: undefined, consCache: undefined, supply: undefined, supplySet: undefined, framing: undefined, frmSet: undefined, foundation: undefined, fndSet: undefined, congestion: undefined, congSet: undefined, rcUi: undefined, rcSet: undefined, ifaceSet: undefined, rcb: undefined, autopilot: undefined, erection: undefined, extraProblems: undefined, extraSet: undefined, autoProblems: undefined, autoSet: undefined, analysis: undefined, workspace: undefined, view: undefined, viewCube: undefined, axisIcon: undefined, cubeOpts: undefined, cornerShown: undefined, settings: undefined, buildVer: undefined, clip: undefined, clipRaw: undefined, fid: undefined, saveTarget: undefined, leaving: undefined, clashRes: undefined, clashTol: undefined, dwgSet: undefined, lastFocus: undefined, copyPending: undefined, guidMap: undefined, guidBuilt: undefined, guidName: undefined };
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
  // 0.11 PERF.78 (perf-finish-11 r2): the Properties panel section for each kind of selected thing (was an else-if chain in renderProps; same
  // order of work, same nodes). Each entry sets the panel head and pushes its rows into `body`.
  // Declared up here (it only names closure bindings inside the entries) so renderProps can run at any point of the start-up.
  const PROPS_BY_KIND = {
    member: (body) => { const m = ST.model.member(ST.sel.id); ui.propsH.textContent = typeName(m.type) + (ST.marks.partMark.get(m.id) ? ' ' + ST.marks.partMark.get(m.id) : ''); body.push(...memberProps(m)); },
    conn: (body) => { const c = ST.model.connection(ST.sel.id); ui.propsH.textContent = tr('app.props.' + c.type); body.push(...connProps(c)); },
    stair: (body) => { const x = ST.model.stair(ST.sel.id); ui.propsH.textContent = tr('app.props.stair', { mark: (ST.marks.asmMark.get(x.id + '.stringerL') || ST.marks.asmMark.get(x.id + '.f1stringerL') || '') }); body.push(...stairProps(x)); },
    picture: (body) => { const p = ST.model.picture(ST.sel.id); ui.propsH.textContent = tr('pic.props'); body.push(...pictureProps(p)); },
    footing: (body) => { const f = ST.model.footing(ST.sel.id); ui.propsH.textContent = tr('app.props.footing', { mark: ST.marks.footingMark.get(f.id) || '' }); body.push(...footingProps(f)); },
    rc: (body) => { const x = ST.model.state.rc.elements.find((q) => q.id === ST.sel.id); ui.propsH.textContent = ST.rcb.labels.get(x.id) || tr('rc.kind.' + x.kind); body.push(...ST.rcUi.props(x)); },
    rcbar: (body) => { ui.propsH.textContent = tr('rc.props.loose'); body.push(el('p', { className: 'dc-note' }, describeRef(ST.sel)), el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')))); },
  };
  // My profiles: custom profiles kept in this browser (localStorage), copied into every new model
  const MY_KEY = 'detailcraft.myprofiles';
  const readMine = () => { try { return cleanLibrary(JSON.parse(localStorage.getItem(MY_KEY) || '[]')); } catch { return []; } };
  ST.mine = readMine();
  const writeMine = () => { try { localStorage.setItem(MY_KEY, JSON.stringify(ST.mine)); return true; } catch { print(tr('app.mine.nosave')); return false; } };
  const freshState = () => { const s = starterState(tr('app.model.untitled')); s.profiles = ST.mine.map((p) => ({ ...p })); return s; };
  /** Keeps a profile in My profiles; false (and a message) when another one already has its name. */
  function keepProfile(p) {
    const r = cleanCustom(p);
    if (!r.ok) { print(r.error); return false; }
    const old = ST.mine.find((x) => x.name.toUpperCase() === r.profile.name.toUpperCase());
    if (old) {
      if (JSON.stringify(old) === JSON.stringify(r.profile)) return true;
      print(tr('app.mine.taken', { name: r.profile.name })); return false;
    }
    if (ST.mine.length >= 200) { print(tr('app.mine.full')); return false; }
    ST.mine = [...ST.mine, r.profile];
    return writeMine();
  }

  ST.model = new Model(freshState());
  const undoHook = mountUndoHook({ getModel: () => ST.model });   // 0.9 EG.77 undo across apps (follows the model when a file opens: attach)
  ST.built = null;
  ST.marks = null;
  ST.schedule = null;
  ST.tool = 'select';
  ST.sel = null;                      // { kind: 'member'|'conn'|'footing'|'stair', id } when one thing is selected
  ST.multi = [];                      // two or more refs when several are (sel is then null)
  function selected() { return ST.multi.length ? ST.multi : ST.sel ? [ST.sel] : []; }
  const selListeners = new Set();      // the shell's design reasons listen for the selection (shell-mount.js)
  ST.pickReady = false;
  ST.pickLast = '';
  ST.pickGuids = null;   // SC.5: the pick adapter (announcePick, near the end): on once the page is up
  ST.shellMount = null;               // the shell's seven modules, attached after the assistants below
  ST.pasteClip = null;                // the clipboard being placed by the paste tool
  ST.moveRefs = null;                 // what the Move tool moves (the selection when it started)
  ST.curPhase = 1;                    // new members and footings go in this phase (D13)
  const hiddenPhases = new Set();      // phases not drawn, not picked, not selected by Ctrl+A or a window (view only)
  ST.pending = null;                  // first node of a two-point placement
  ST.viewMode = '3d';
  ST.reportTab = 'problems';
  ST.idsUi = null;                    // 0.7.1 71.25: the IDS check of the IFC export (ids-ui.js)
  ST.frameProblems = null;
  ST.frameProblemsSet = null;   // the Analysis tab's concrete / seismic problems (0.8 SU.1056): kept until the shell's Problems is there
  ST.problemsSync = null;             // the shell's Problems (manifest "problems"): hands build.js's problems over after every rebuild
  ST.breakSet = null;
  ST.breakProblems = [];
  ST.consSet = null;
  ST.consTimer = 0;
  ST.consCache = new Map();
  ST.supply = null;
  ST.supplySet = null;
  ST.framing = null;
  ST.frmSet = null;
  ST.foundation = null;
  ST.fndSet = null;
  ST.congestion = null;
  ST.congSet = null;
  ST.rcUi = null;
  ST.rcSet = null;
  ST.ifaceSet = null;
  ST.rcb = null;
  ST.autopilot = null;
  ST.erection = null;
  ST.extraProblems = [];
  ST.extraSet = null;
  ST.autoProblems = [];
  ST.autoSet = null;   // the Erection tab (0.8 EG.72) and the problems of the round-2 checks, kept until the shell's Problems is there
  ST.analysis = null;                 // the Analysis tab (0.6 LC.4, analysis-ui.js), mounted with the reports below
  ST.workspace = null;                // the workspace layouts (0.7 WS.13, workspace-detailcraft.js): told after every redraw
  const opts = {
    beam: { ...defaultsFor('beam') }, column: { ...defaultsFor('column'), to: '' }, brace: { ...defaultsFor('brace') },
    plate: { t: 20, w: 200, material: 'A36', position: 'middle', rotation: 0 },
    footing: { L: FOOTING_DEFAULTS.L, B: FOOTING_DEFAULTS.B, H: FOOTING_DEFAULTS.H, concrete: FOOTING_DEFAULTS.concrete, mat: { ...FOOTING_DEFAULTS.mat }, starters: { ...FOOTING_DEFAULTS.starters } },
    stair: { ...STAIR_DEFAULTS, tread: { ...STAIR_DEFAULTS.tread }, rise: 0 },      // rise 0 = up to the next level (D23)
    steelStair: { ...genDefaults(), tread: { ...genDefaults().tread }, rise: 0 }, useGen: false,   // 0.10 SU.1814c: the generator's settings, and whether the Stair tool places one
  };

  // ---- the 3D view (WebGL may be missing: everything else still works) ----
  ST.view = null;
  const { placeAt, placeLine } = mountPlace({
    ST, opts, print, edit, setTool,
    get runXf() { return runXf; },
    get pasteClipAt() { return pasteClipAt; },
    get mm() { return mm; },
    get r1() { return r1; },
  });
  try {
    const { View3D } = await import('./view3d.js');
    ST.view = new View3D(ui.canvas, {
      onPick: (ref, e) => { pick(ref, e); },
      onNode: placeAt,
      onHoverNode: (n) => { ui.node.value = n ? nodeName(ST.model.state, n.p) : ''; },
      onWindow: windowPicked,
    });
  } catch (err) {
    ui.nogl.hidden = false;
    ui.canvas.hidden = true;
    console.warn('DetailCraft: no 3D view —', err?.message || err);
  }

  function print(msg) { ui.status.textContent = msg; }
  if (ST.view) ST.view.pictureSrc = (h) => ST.model.pictureSrcs.get(h);   // D8.15: the PNGs are the Model's, not the state's

  // ---- corner indicator (Settings › DetailCraft): the view cube (viewcube.js through viewcube-three.js) | the X/Y/Z axis
  // icon | none — in the 3D view only (plan and elevation are fixed square views)
  ST.viewCube = null;
  ST.axisIcon = null;
  ST.cubeOpts = null;
  ST.cornerShown = '';
  if (ST.view) {
    ST.cubeOpts = threeCubeOptions({ camera: () => ST.view.camera, controls: () => ST.view.controls, render: () => ST.view.render(), home: () => ST.view.fit() });
    ST.viewCube = mountViewCube(ui.stage, { ...ST.cubeOpts, i18n: { t: tr, has: hasKey } });   // the view cube's words from our language file
    ST.axisIcon = mountAxisIcon(ui.stage, { getView: ST.cubeOpts.getView, i18n: { t: tr, has: hasKey } });
    ST.view.onRender = () => { syncCorner(); ST.viewCube.update(); ST.axisIcon.update(); };
    ui.canvas.addEventListener('pointerdown', () => ST.cubeOpts.stop(), true);
    // touch (S.8): a long press adds the part to the selection or takes it out — a tablet has no Shift
    ST.view.onLongPress = (ref) => {
      if (ST.tool !== 'select') return;
      pick(ref, { shiftKey: true });
      navigator.vibrate?.(15);
    };
    // D2: press on a selected part and drag moves the selection (snapping the held part onto grid intersections)
    let dragRefs = null;
    ST.view.dragParts = {
      can: (ref) => ST.tool === 'select' && ref.kind !== 'conn' && selected().some((r) => refKey(r) === refKey(ref)),
      start: (ref) => {
        dragRefs = selected().filter((r) => r.kind !== 'conn');
        if (!dragRefs.length) return null;
        const m = ref.kind === 'member' ? ST.model.member(ref.id) : null, f = ref.kind === 'footing' ? ST.model.footing(ref.id) : null, st = ref.kind === 'stair' ? ST.model.stair(ref.id) : null;
        const pic = ref.kind === 'picture' ? ST.model.picture(ref.id) : null;   // D8.15: its middle and corners snap onto grid intersections
        const points = m ? [m.start, m.end] : f ? [[f.x, f.y, f.top]] : st ? [[st.x, st.y, st.z]] : pic ? [[pic.x, pic.y, pic.z], ...pictureCorners(pic)] : [];
        return { points, ghost: [...ghostLines(ST.model.state, dragRefs, [0, 0, 0]), ...pictureGhost(dragRefs)] };
      },
      move: (off, node) => print(tr(node ? 'drag.snap' : 'drag.free', { x: mm(off[0]), y: mm(off[1]), z: mm(off[2]), node: node ? nodeName(ST.model.state, node) : '' })),
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
    const oc = () => ST.view.controls;
    (window.ccViews ||= []).push({ el: ui.canvas, get kind() { return ST.view.mode === '3d' ? '3d' : '2d'; },
      pan(dx, dy) { ST.cubeOpts.stop(); const c = oc(); if (!c.enablePan) return; c._pan(dx * c.panSpeed, dy * c.panSpeed); c.update(); },
      zoom(f, x, y) {
        ST.cubeOpts.stop(); const c = oc(); if (!c.enableZoom || !(f > 0)) return;
        if (x != null && y != null) { const r = ui.canvas.getBoundingClientRect(); c._updateZoomParameters(r.left + x, r.top + y); }   // only acts with zoomToCursor, as the wheel
        c._dollyIn(1 / f); c.update();
      },
      orbit(dx, dy) {
        ST.cubeOpts.stop(); const c = oc(); if (ST.view.mode !== '3d' || !c.enableRotate) return;
        const k = 2 * Math.PI * c.rotateSpeed / Math.max(1, ui.canvas.clientHeight);
        c._rotateLeft(dx * k); c._rotateUp(dy * k); c.update();
      },
      fit: () => ST.view.fit() });
  }
  function syncCorner() {
    if (!ST.viewCube) return;
    const want = ST.view.mode === '3d' ? ST.settings.corner : 'none';
    if (want !== ST.cornerShown) { ST.cornerShown = want; ST.viewCube.setVisible(want === 'cube'); ST.axisIcon.setVisible(want === 'axes'); }
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
  ST.settings = readSettings();
  const persistSettings = () => { try { localStorage.setItem(SET_KEY, JSON.stringify(ST.settings)); } catch { /* private window: this visit only */ } };
  const settingsDlg = document.querySelector('[data-app-settings]');
  function applySteel() {
    const st = STEEL[ST.settings.steel];
    for (const t of ['beam', 'column', 'brace']) { opts[t].profile = st[t][0]; opts[t].material = st[t][1]; }
    opts.plate.material = st.plate;
    // new footings: ASTM bars and psi concrete with US steel; BS 4449 bars and a C-class with European steel (D9)
    const eu = ST.settings.steel === 'eu';
    Object.assign(opts.footing.mat, { barX: eu ? 'H16' : FOOTING_DEFAULTS.mat.barX, barY: eu ? 'H16' : FOOTING_DEFAULTS.mat.barY });
    opts.footing.starters.bar = eu ? 'H20' : FOOTING_DEFAULTS.starters.bar;
    opts.footing.concrete = eu ? 'C30/37' : FOOTING_DEFAULTS.concrete;
  }
  function applyBolts() {
    if (!ST.view) return;
    ST.view.showBolts = ST.settings.bolts;
    if (ST.built) { ST.view.setModel(ST.model.state, ST.built, ST.marks); ST.view.setSelection(selected()); }
  }
  function syncSettingsForm() {
    if (!settingsDlg) return;
    const q = (n) => settingsDlg.querySelector('[name="' + n + '"]');
    settingsDlg.querySelectorAll('input[name="dcSteel"]').forEach((r) => { r.checked = r.value === ST.settings.steel; });
    ['dcOffX', 'dcOffY', 'dcOffZ'].forEach((n, i) => { const f = q(n); if (f && document.activeElement !== f) { f.value = String(ST.settings.offset[i]); f.removeAttribute('aria-invalid'); } });
    const c = q('dcConns'), b = q('dcBolts');
    if (c) c.checked = ST.settings.conns;
    if (b) b.checked = ST.settings.bolts;
    settingsDlg.querySelectorAll('input[name="dcCorner"]').forEach((r) => { r.checked = r.value === ST.settings.corner; });
    settingsDlg.querySelectorAll('input[name="dcKiss"]').forEach((r) => { r.checked = r.value === ST.settings.kiss; });
    settingsDlg.querySelectorAll('input[name="dcDragSel"]').forEach((r) => { r.checked = r.value === ST.settings.dragSel; });
    settingsDlg.querySelectorAll('input[name="dcBarNames"]').forEach((r) => { r.checked = r.value === ST.settings.barNames; });
    settingsDlg.querySelectorAll('input[name="dcShapeCodes"]').forEach((r) => { r.checked = r.value === ST.settings.shapeCodes; });
    const pp = q('dcPaper');
    if (pp) { fillPaper(pp); pp.value = ST.settings.paper; }
  }
  /** A sheet-size list (Settings, the Drawings and Shop drawing dialogs). */
  function fillPaper(sel) {
    if (sel.options.length !== PAPER_KEYS.length) sel.replaceChildren(...PAPER_KEYS.map((k) => el('option', { value: k }, paperLabel(k))));
    sel.value = ST.settings.paper;
  }
  function setSetting(k, v, say) {
    ST.settings[k] = v;
    persistSettings();
    if (k === 'steel') { applySteel(); if (ST.tool !== 'select') renderProps(); }
    if (k === 'bolts') applyBolts();
    if (k === 'corner') syncCorner();
    syncSettingsForm();
    if (say) print(say);
  }
  /** Settings changed elsewhere (another tab, or before the dialog opened): take them, re-applying only what moved. */
  function reloadSettings() {
    const prev = ST.settings;
    ST.settings = readSettings();
    if (ST.settings.steel !== prev.steel) { applySteel(); if (ST.tool !== 'select') renderProps(); }
    if (ST.settings.bolts !== prev.bolts) applyBolts();
    if (ST.settings.corner !== prev.corner) syncCorner();
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
        const off = ST.settings.offset.slice();
        off['XYZ'.indexOf(t.name.slice(-1))] = v;
        setSetting('offset', off, tr('app.set.offset.done', { x: String(off[0]), y: String(off[1]), z: String(off[2]) }));
      } else if (t.name === 'dcConns') setSetting('conns', t.checked, tr(t.checked ? 'app.set.conns.on' : 'app.set.conns.off'));
      else if (t.name === 'dcCorner') setSetting('corner', ['cube', 'axes', 'none'].includes(t.value) ? t.value : 'cube');
      else if (t.name === 'dcBarNames') { setSetting('barNames', t.value === 'metric' ? 'metric' : 'imperial'); renderProps(); renderReport(); }
      else if (t.name === 'dcShapeCodes') { setSetting('shapeCodes', ['dc', 'aci', 'bs8666'].includes(t.value) ? t.value : 'dc'); renderReport(); }
      else if (t.name === 'dcDragSel') { setSetting('dragSel', t.value === 'lasso' ? 'lasso' : 'rect'); if (ST.view) ST.view.lasso = ST.settings.dragSel === 'lasso'; }
      else if (t.name === 'dcKiss') setSetting('kiss', ['auto', 'imperial', 'metric'].includes(t.value) ? t.value : 'auto');
      else if (t.name === 'dcPaper') setSetting('paper', PAPER_KEYS.includes(t.value) ? t.value : DEFAULT_PAPER, tr('dwg.paper.set', { paper: paperLabel(t.value) }));
      else if (t.name === 'dcBolts') setSetting('bolts', t.checked, tr(t.checked ? 'app.set.bolts.on' : 'app.set.bolts.off'));
    });
    settingsDlg.addEventListener('cc-settings-reset', () => { ST.settings = freshSettings(); persistSettings(); applySteel(); applyBolts(); syncCorner(); if (ST.tool !== 'select') renderProps(); syncSettingsForm(); });
    // the shared dialog has no "open" event of its own: watch its open attribute and fill the fields each time
    new MutationObserver(() => { if (settingsDlg.open) reloadSettings(); }).observe(settingsDlg, { attributes: true, attributeFilter: ['open'] });
  }
  window.addEventListener('storage', (e) => {
    if (e.key === SET_KEY) reloadSettings();
    if (e.key === CLIP_KEY || e.key === null) renderBar();
  });
  applySteel();
  if (ST.view) { ST.view.showBolts = ST.settings.bolts; ST.view.lasso = ST.settings.dragSel === 'lasso'; }
  syncSettingsForm();

  // ---- model → parts → marks; then redraw ----
  const buildCache = {};
  ST.buildVer = -1;
  function recompute() {
    ST.built = build(ST.model.state, { cache: buildCache, dirty: ST.model.dirtySince?.(ST.buildVer) ?? null });   // 0.11 PERF.36: an edit runs only the connections it touched; the model says which chunks changed since the last build
    ST.buildVer = ST.model.version;
    const perPhase = ST.model.state.numbering?.perPhase !== false;
    ST.marks = markParts(ST.built, { perPhase });
    ST.marks.footingMark = markFootings(ST.model.state.footings, { perPhase });
    ST.rcb = rcBuild(ST.model.state);   // 0.9 RC.1: concrete elements, their bars and checks; loose bars read from a file
    ST.built.rc = ST.rcb;
    ST.schedule = mergeSchedule(bendingSchedule(ST.model.state.footings), ST.rcb);   // one bending schedule over the whole structure
  }
  function refresh() {
    for (const n of [...hiddenPhases]) if (!ST.model.state.phases.some((p) => p.n === n)) hiddenPhases.delete(n);
    if (!ST.model.state.phases.some((p) => p.n === ST.curPhase)) ST.curPhase = ST.model.state.phases[0]?.n || 1;
    if (ST.view) ST.view.hiddenPhases = hiddenPhases;
    if (ST.sel && !exists(ST.sel)) ST.sel = null;
    ST.multi = ST.multi.filter(exists);
    if (ST.multi.length === 1) { ST.sel = ST.multi[0]; ST.multi = []; }
    recompute();
    if (ST.view) { ST.view.setModel(ST.model.state, ST.built, ST.marks); ST.view.setSelection(selected()); }
    announcePick();   // SC.5: a selection set without setSelection (a connection just added) and one that lost its object end here
    renderLeft();
    // while someone is typing or tabbing in the properties panel, redraw it once focus has settled
    if (ui.props.contains(ui.props.ownerDocument.activeElement)) setTimeout(renderProps, 0); else renderProps();   // ownerDocument: the panel may be in the panels window
    ST.analysis?.modelChanged();
    if (ST.extraSet) { ST.extraSet(ST.erection.problems()); ST.autoSet?.(ST.autopilot.problems()); ST.congSet?.(ST.congestion.problems()); ST.fndSet?.(ST.foundation.problems()); ST.frmSet?.(ST.framing.problems()); ST.rcSet?.(rcProblems(ST.rcb)); ST.ifaceSet?.(dcInterfaces(ST.model.state).problems); if (ST.consSet) { clearTimeout(ST.consTimer); ST.consTimer = setTimeout(() => ST.consSet?.(constructability(ST.model.state, ST.built, { cache: ST.consCache })), 400); } }   // 0.8 EG.72/73: their Problems follow the model, not the open tab
    ST.problemsSync?.();
    ST.idsUi?.changed();   // 0.7.1 71.25: re-check the IFC export against the IDS
    renderReport();
    renderBar();
    ui.hint.hidden = ST.model.state.members.length > 0 || ST.model.state.footings.length > 0 || !!ST.model.state.rc?.elements.length || !!ST.model.state.rc?.loose.length;
  }
  ST.model.on(refresh);
  ST.model.on(() => refreshAutosave());
  // The add-on host (add-on API 1.4, addons.js): the open model, for the Building regulations add-on. `model` is replaced when a file is opened.
  window.ccAddonModel = { current: () => ({ name: ST.model.state.name || '' }), read: (fn) => fn(ST.model) };
  const addonModelChanged = () => window.dispatchEvent(new CustomEvent('cc-addon-model-changed'));
  ST.model.on(addonModelChanged);
  const exists = (r) => (r.kind === 'member' ? !!ST.model.member(r.id) : r.kind === 'conn' ? !!ST.model.connection(r.id) : r.kind === 'stair' ? !!ST.model.stair(r.id) : r.kind === 'picture' ? !!ST.model.picture(r.id)
    : r.kind === 'rc' ? !!ST.model.state.rc?.elements.some((x) => x.id === r.id) : r.kind === 'rcbar' ? !!ST.model.state.rc?.loose.some((x) => x.id === r.id) : !!ST.model.footing(r.id));

  /** One undo step; a refused edit is said in the status bar and nothing changes. */
  function edit(label, fn) {
    try { const r = ST.model.change(label, fn); return r === undefined ? true : r; }
    catch (err) { print(err.message || String(err)); renderProps(); return null; }
  }

  function setModel(m) {
    ST.model = m;
    undoHook.attach();
    ST.model.on(refresh);
    ST.model.on(() => refreshAutosave());
    ST.model.on(addonModelChanged); addonModelChanged();
    ST.sel = null; ST.multi = []; ST.pending = null;
    ST.shellMount?.modelChanged();
    hiddenPhases.clear(); ST.curPhase = ST.model.state.phases?.[0]?.n || 1;
    ST.saveTarget = null;
    if (ST.view) ST.view.fitted = false;
    syncViewSelects();
    refresh();
    if (ST.view) setView(ST.viewMode);
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
  root.querySelector('.dc-viewbar [data-act="fit"]').addEventListener('click', () => ST.view?.fit());
  function act(a) {
    if (a.startsWith('tool:')) return setTool(a.slice(5));
    switch (a) {
      case 'new': return newModel();
      case 'open': return pickAndOpen(OPEN_TYPES);
      case 'import': return pickAndOpen(IFC_TYPES);
      case 'save': return saveModel();
      case 'save-older': return saveOlder();   // 0.11 DC.27
      case 'sample': return openSample();
      case 'endplates': return addEndPlates();
      case 'baseplate': return addBasePlate();
      case 'sheartabs': return addShearTabs();
      case 'splice': return addSplices();
      case 'gusset': return addGussets();
      case 'mitre': return addMitres();
      case 'similar': return applySimilar();
      case 'undo': { const l = ST.model.undo(); print(l ? tr('app.undo.done', { label: l }) : tr('app.undo.nothing')); return; }
      case 'redo': { const l = ST.model.redo(); print(l ? tr('app.redo.done', { label: l }) : tr('app.redo.nothing')); return; }
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
      case 'ids': return ST.idsUi?.open();   // 0.7.1 71.25
      case 'usd': return exportUsd();   // 0.7 XF.8 (session usd)
      case 'nc': return exportNc();
      case 'nc-send': return sendNc();
      case 'bom': return exportBom();
      case 'bending': return exportBending();
      case 'rc-sheets': return ST.rcUi.openSheets(null);   // 0.9 RC.1: reinforcement shop drawings and bending sheets
      case 'rc-tab': ST.reportTab = 'rc'; renderReport(); ui.report.focus(); print(tr('rc.tab.opened')); return;
      case 'shop': return openShop();
      case 'drawings': return openDrawings();
      case 'kiss': return exportKiss();
      case 'report': ST.reportTab = 'phases'; renderReport(); ui.report.focus(); print(tr('rep.opened')); return;
      case 'fit': return ST.view?.fit();
    }
  }
  function renderBar() {
    const btn = (a) => ui.tools.querySelector('[data-act="' + a + '"]');
    // the Edit buttons and their twins in the More menu: disabled with the reason in the title
    const setEdit = (a, on, title, why) => { for (const b of ui.tools.querySelectorAll('[data-act="' + a + '"]')) { b.disabled = !on; b.title = on ? title : tr('app.bar.why', { title, why }); } };
    const lastLabel = (stack) => stack[stack.length - 1]?.label || '';
    setEdit('undo', ST.model.canUndo, ST.model.canUndo ? tr('app.bar.undo.label', { label: lastLabel(ST.model.undoStack) }) : tr('app.bar.undo'), tr('app.bar.undo.why'));
    setEdit('redo', ST.model.canRedo, ST.model.canRedo ? tr('app.bar.redo.label', { label: lastLabel(ST.model.redoStack) }) : tr('app.bar.redo'), tr('app.bar.redo.why'));
    const picked = selected(), copyable = picked.some((r) => r.kind !== 'conn' && r.kind !== 'picture');
    const needCopy = tr(picked.length ? 'app.bar.copy.why.conn' : 'app.bar.copy.why.none');
    setEdit('copy', copyable, tr('app.bar.copy'), needCopy);
    setEdit('cut', copyable, tr('app.bar.cut'), needCopy);
    setEdit('duplicate', copyable, tr('app.bar.duplicate'), needCopy);
    setEdit('move', copyable, tr('app.bar.move'), needCopy);
    setEdit('delete', picked.length > 0, tr('app.bar.delete'), tr('app.bar.delete.why'));
    const canPaste = !!ST.clip || clipStored();
    setEdit('paste', canPaste || !!storedArea(), tr('app.bar.paste'), tr('app.bar.paste.why'));
    setEdit('paste-in-place', canPaste, tr('app.bar.paste-in-place'), tr('app.bar.paste.why'));
    const any = ST.model.state.members.length + ST.model.state.footings.length > 0;
    setEdit('select-all', any, tr('app.bar.select-all'), tr('app.bar.select-all.why'));
    const st = ST.model.state, content = any || st.stairs.length + st.connections.length > 0 || !!st.rc?.elements.length || !!st.rc?.loose.length;
    for (const b of ui.tools.querySelectorAll('[data-act]')) {
      const a = b.dataset.act;
      if (a === 'new') b.disabled = !content && !ST.model.dirty;
      else if (['save', 'ifc', 'nc', 'bom', 'bending', 'drawings', 'kiss', 'fit'].includes(a)) b.disabled = !content;
      else if (a === 'nc-send') { b.hidden = !machinesReady(); b.disabled = !content; }
    }
    setEdit('select-none', picked.length > 0, tr('app.bar.select-none'), tr('app.bar.select-none.why'));
    btn('endplates').disabled = !(ST.sel?.kind === 'member' && ST.model.member(ST.sel.id)?.type === 'beam');
    btn('baseplate').disabled = !(ST.sel?.kind === 'member' && ST.model.member(ST.sel.id)?.type === 'column');
    btn('sheartabs').disabled = btn('endplates').disabled;
    btn('gusset').disabled = !picked.some((r) => r.kind === 'member' && ST.model.member(r.id)?.type === 'brace');
    btn('splice').disabled = !picked.some((r) => r.kind === 'member' && ['beam', 'column'].includes(ST.model.member(r.id)?.type));
    btn('mitre').disabled = picked.filter((r) => r.kind === 'member').length < 2 && !(ST.sel?.kind === 'conn' && ST.model.connection(ST.sel.id)?.type === 'mitre');
    btn('similar').disabled = !(ST.sel?.kind === 'conn');
    const part = selectedPart();
    btn('shop').disabled = !ST.built.parts.length;   // no selection needed: the dialog holds every part mark
    for (const b of ui.tools.querySelectorAll('[data-act^="tool:"]')) b.setAttribute('aria-pressed', String(b.dataset.act === 'tool:' + ST.tool));
    const steel = ST.built.parts.reduce((s, p) => s + p.weight, 0), bars = ST.schedule.rows.reduce((s, r) => s + r.totalWeight, 0);
    ui.counts.textContent = tr('app.bar.counts', { parts: ST.built.parts.length, bolts: ST.built.bolts.length, steel: kg(steel) }) + (bars ? ' ' + tr('app.bar.counts.rebar', { rebar: kg(bars) }) : '');
    window.ccSetDocTitle ? window.ccSetDocTitle(ST.model.state.name, ST.model.dirty) : (document.title = (ST.model.dirty ? '• ' : '') + ST.model.state.name + ' — DetailCraft | CadCraft');   // 2026-11-09: the shell's one title pattern
    ST.workspace?.refresh();
  }

  function setTool(t) {
    if (t === 'move') {
      ST.moveRefs = selected().filter((r) => r.kind !== 'conn');
      if (!ST.moveRefs.length) { print(tr('xf.none')); return; }
    } else ST.moveRefs = null;
    ST.tool = t;
    ST.pending = null;
    ST.pasteClip = t === 'paste' ? currentClip(true) : null;
    if (t === 'paste' && !ST.pasteClip) ST.tool = t = 'select';
    if (ST.view) { ST.view.placing = t !== 'select'; ST.view.boxSelect = t === 'select'; ST.view.rubberFrom = null; ST.view.ghost = ST.pasteClip ? clipSegments(ST.pasteClip) : null; ST.view.updateHover(); }
    ui.stage.classList.toggle('is-placing', t !== 'select');
    if (t !== 'select') ST.sel = null, ST.multi = [], ST.view?.setSelection(ST.moveRefs || []);
    renderBar();
    renderProps();
    if (t === 'move') { print(tr('xf.move.from')); return; }
    if (t === 'select') { print(tr('tool.select.how')); return; }
    const how = ['beam', 'brace', 'plate', 'column', 'footing', 'stair', 'select', 'paste'].includes(t) ? tr('app.tool.how.' + t) : '';
    print(how || '');
  }

  // ---- views ----
  function syncViewSelects() {
    const s = ST.model.state;
    const lv = ui.vlevel.value, gv = ui.vgrid.value;
    ui.vlevel.replaceChildren(...s.levels.map((l) => el('option', { value: l.name }, l.name)));
    ui.vgrid.replaceChildren(...s.grids.y.map((g) => el('option', { value: g.label }, tr('app.view.grid', { label: g.label }))));
    if (s.levels.some((l) => l.name === lv)) ui.vlevel.value = lv;
    if (s.grids.y.some((g) => g.label === gv)) ui.vgrid.value = gv;
  }
  function setView(mode) {
    ST.viewMode = mode;
    for (const b of root.querySelectorAll('[data-view]')) b.setAttribute('aria-checked', String(b.dataset.view === mode));
    ui.vlevel.hidden = mode !== 'plan';
    ui.vgrid.hidden = mode !== 'elevation';
    const level = ST.model.state.levels.find((l) => l.name === ui.vlevel.value) || ST.model.state.levels[ST.model.state.levels.length - 1];
    const grid = ST.model.state.grids.y.find((g) => g.label === ui.vgrid.value) || ST.model.state.grids.y[0];
    if (mode === 'plan' && level) ui.vlevel.value = level.name;
    if (mode === 'elevation' && grid) ui.vgrid.value = grid.label;
    ST.view?.setMode(mode, { level, grid });
    ST.workspace?.refresh();
  }
  ui.vlevel.addEventListener('change', () => setView('plan'));
  ui.vgrid.addEventListener('change', () => setView('elevation'));

  // ---- selection ----
  function select(ref) {
    if (ST.tool !== 'select') return;
    setSelection(ref && exists(ref) ? [ref] : []);
    if (ST.sel) print(describeRef(ST.sel));
  }
  /** Any number of refs (missing ones and repeats dropped): one → sel, several → multi. */
  function setSelection(refs) {
    const seen = new Set(), list = [];
    for (const r of refs) { if (!r || !exists(r) || seen.has(refKey(r))) continue; seen.add(refKey(r)); list.push(r); }
    if (list.length <= 1) { ST.sel = list[0] || null; ST.multi = []; } else { ST.sel = null; ST.multi = list; }
    ST.view?.setSelection(selected());
    renderProps();
    renderBar();
    for (const fn of selListeners) { try { fn(); } catch (e) { /* a listener must not stop the selection */ } }
    if (ST.reportTab === 'analysis') renderReport();   // 0.6 LC.4: the Analysis tab loads the selected members
  }
  /** A click in the view: plain = select that; Shift/Ctrl/Cmd = add it or take it away. */
  function pick(ref, e) {
    if (ST.tool !== 'select') return;
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
    if (ST.tool !== 'select' || !ST.view || !ST.built) return;
    const got = windowSelect(selectionItems(ST.model.state, ST.built, hiddenPhases), (p) => ST.view.project(p), w.path, w.mode, ST.view.cutPlanes());
    const kind = w.mode === 'fence' ? 'fence' : w.mode === 'crossing' ? 'crossing' : 'window';
    if (!got.length) { if (!w.add) setSelection([]); print(tr('sel.' + kind + '.none')); return; }
    const next = w.add ? [...selected(), ...got] : got;
    setSelection(next);
    print(tr('sel.' + kind + '.got', { n: got.length }) + (w.add ? ' ' + tr('sel.total', { n: selected().length }) : ''));
  }
  function selectAll() {
    if (ST.tool !== 'select') setTool('select');
    const s = ST.model.state;
    const vis = (x) => !hiddenPhases.has(x.phase || 1);
    const mem = s.members.filter(vis), foot = s.footings.filter(vis), conns = s.connections.filter((c) => !hiddenPhases.has(connPhase(s, c))), sts = (s.stairs || []).filter(vis);
    const refs = [...mem.map((m) => ({ kind: 'member', id: m.id })), ...conns.map((c) => ({ kind: 'conn', id: c.id })), ...foot.map((f) => ({ kind: 'footing', id: f.id })), ...sts.map((x) => ({ kind: 'stair', id: x.id }))];
    if (!refs.length) { print(hiddenPhases.size ? tr('phase.all.hidden') : tr('app.sel.all.empty')); return; }
    setSelection(refs);
    print(tr('app.sel.all.done', { what: countText({ members: mem.length, connections: conns.length, footings: foot.length, stairs: sts.length }) }) + (hiddenPhases.size ? ' ' + tr('phase.all.note') : ''));
  }
  function describeRef(r) {
    if (r.kind === 'member') { const m = ST.model.member(r.id); const mk = ST.marks.partMark.get(r.id); return mk ? tr('app.ref.member.marked', { type: typeName(m.type), profile: m.profile, part: mk, asm: ST.marks.asmMark.get(r.id) || '' }) : tr('app.ref.member', { type: typeName(m.type), profile: m.profile }); }
    if (r.kind === 'conn') { const c = ST.model.connection(r.id); return tr('app.ref.' + c.type, { id: c.id }); }
    if (r.kind === 'stair') { const x = ST.model.stair(r.id); return tr('app.ref.stair', { mark: (ST.marks.asmMark.get(r.id + '.stringerL') || ST.marks.asmMark.get(r.id + '.f1stringerL') || ''), rise: mm(x.rise), width: mm(x.width) }); }
    if (r.kind === 'picture') { const p = ST.model.picture(r.id), [w, h] = pictureSizeMm(p); return tr('pic.ref', { name: p.name || tr('pic.unnamed'), w: mm(w), h: mm(h) }); }
    if (r.kind === 'rc') { const x = ST.model.state.rc.elements.find((q) => q.id === r.id), it = ST.rcb?.byId.get(r.id); return tr('rc.ref', { name: ST.rcb?.labels.get(r.id) || r.id, n: it ? it.res.groups.reduce((a, g) => a + g.count, 0) : 0, fails: it ? it.checks.filter((c) => c.status === 'fail').length : 0, kind: tr('rc.kind.' + x.kind) }); }
    if (r.kind === 'rcbar') { const b = ST.model.state.rc.loose.find((q) => q.id === r.id); return tr('rc.ref.loose', { bar: barLabel(b.bar, ST.settings.barNames), mark: b.mark || '—', host: b.host?.name || b.host?.cls || tr('rc.loose.nohost') }); }
    const f = ST.model.footing(r.id); return tr('app.ref.footing', { mark: ST.marks.footingMark.get(f.id) || '', l: mm(f.L), b: mm(f.B), h: mm(f.H) });
  }
  function selectedPart() {
    if (!ST.sel) return null;
    if (ST.sel.kind === 'member') return ST.built.byId.get(ST.sel.id) || null;
    if (ST.sel.kind === 'conn') return ST.built.byId.get(ST.sel.id + '.plate') || null;
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
    const label = refs.length > 1 ? tr('app.undo.delete.many', { n: refs.length }) : r.kind === 'member' ? tr('app.undo.delete.' + ST.model.member(r.id).type) : tr(r.kind === 'conn' ? 'app.undo.delete.conn' : r.kind === 'picture' ? 'pic.undo.delete' : r.kind === 'rc' ? 'rc.undo.delete' : r.kind === 'rcbar' ? 'rc.undo.delete-bar' : 'app.undo.delete.footing');
    if (deleteRefs(refs, label)) print(refs.length > 1 ? tr('app.delete.done.many', { n: refs.length }) : tr('app.delete.done.one'));
  }

  // ---- clipboard: this tab's copy in memory, and in localStorage so another tab can paste it ----
  ST.clip = null;
  ST.clipRaw = null;     // the last copy (checked by readClip) and the stored text it came from
  const { clipStored, currentClip, countText, copySelection, cutSelection, startPaste, storedArea, pasteNewest, pictureGhost, keyPasteArea, duplicate, pasteClipAt } = mountClipboard({
    ui, selected, print, edit, renderBar, setTool, setSelection, deleteRefs, mm,
    get clipRaw() { return ST.clipRaw; }, set clipRaw(v) { ST.clipRaw = v; },
    get clip() { return ST.clip; }, set clip(v) { ST.clip = v; },
    get model() { return ST.model; },
    get settings() { return ST.settings; },
    get tool() { return ST.tool; },
    get viewMode() { return ST.viewMode; },
  });

  const { addEndPlates, addShearTabs, addSplices, addGussets, addMitres, addBasePlate, applySimilar } = mountConnAdd({
    ST, selected, print, refresh, edit,
    get openMitre() { return openMitre; },
  });
  const { openMitre } = mountMitre({
    print, refresh, edit, numIn, textIn, restoreFocus, root, r1,
    get lastFocus() { return ST.lastFocus; }, set lastFocus(v) { ST.lastFocus = v; },
    get model() { return ST.model; },
    get marks() { return ST.marks; },
    get sel() { return ST.sel; }, set sel(v) { ST.sel = v; },
    get multi() { return ST.multi; }, set multi(v) { ST.multi = v; },
  });

  // ---- left panel ----
  function renderLeft() {
    const s = ST.model.state;
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
    const kept = (p) => ST.mine.some((x) => x.name.toUpperCase() === p.name.toUpperCase());
    ui.customList.replaceChildren(...s.profiles.map((p) => el('li', {}, el('span', { className: 'dc-ellip' }, p.name + ' · ' + kindName(p.kind)),
      kept(p) ? el('span', { className: 'dc-muted' }, tr('app.mine.kept'))
        : el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { if (keepProfile(p)) { print(tr('app.mine.added', { name: p.name })); refresh(); } } }, tr('app.mine.keep')))));
    ui.myList.replaceChildren(...ST.mine.map((p) => el('li', {}, el('span', { className: 'dc-ellip' }, p.name + ' · ' + kindName(p.kind)),
      el('span', { className: 'dc-row' },
        s.profiles.some((x) => x.name.toUpperCase() === p.name.toUpperCase()) ? '' : el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { if (edit(tr('app.undo.add-profile', { name: p.name }), (tx) => tx.addProfile(p))) print(tr('app.mine.used', { name: p.name })); } }, tr('app.mine.use')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => { ST.mine = ST.mine.filter((x) => x !== p); if (writeMine()) { print(tr('app.mine.removed', { name: p.name })); refresh(); } } }, tr('app.mine.remove'))))));
    if (!ST.mine.length) ui.myList.append(el('li', { className: 'dc-muted' }, tr('app.mine.none')));
    ui.marks.replaceChildren(...ST.marks.parts.map((p) => el('li', {},
      el('button', { type: 'button', onclick: () => { setTool('select'); select(refForPart(p.ids[0])); }, title: tr('app.marks.select-first', { mark: p.mark }) },
        el('span', { className: 'dc-mk' }, p.mark), el('span', { className: 'dc-ellip' }, p.profile + ' x ' + mm(p.length))),
      el('span', { className: 'dc-muted' }, '× ' + p.count))));
    if (!ST.marks.parts.length) ui.marks.append(el('li', { className: 'dc-muted' }, tr('app.marks.none')));
  }
  const kindName = (k) => { const key = ({ I: 'app.kind.i', C: 'app.kind.c', L: 'app.kind.l', RHS: 'app.kind.rhs', CHS: 'app.kind.chs', FLAT: 'app.kind.flat', PL: 'app.kind.pl' })[k]; return key ? tr(key) : k; };
  const refForPart = (pid) => { const p = ST.built.byId.get(pid); return p?.member ? { kind: 'member', id: p.member } : p?.conn ? { kind: 'conn', id: p.conn } : null; };

  // ---- phases (D13) ----
  const phaseName = (n) => ST.model.state.phases.find((p) => p.n === n)?.name || tr('phase.default', { n });
  const phaseOptions = () => ST.model.state.phases.map((p) => [String(p.n), phaseName(p.n)]);
  function renderPhases() {
    const s = ST.model.state;
    const count = (n) => s.members.filter((m) => (m.phase || 1) === n).length + s.footings.filter((f) => (f.phase || 1) === n).length;
    const list = el('ul', { className: 'dc-phases' }, ...s.phases.map((p) => {
      const show = el('input', { type: 'checkbox', checked: !hiddenPhases.has(p.n), 'aria-label': tr('phase.show', { phase: phaseName(p.n) }), dataset: { phaseShow: String(p.n) } });
      show.addEventListener('change', () => setPhaseShown(p.n, show.checked));
      const name = el('input', { type: 'text', className: 'dc-input', value: p.name, placeholder: tr('phase.default', { n: p.n }), maxLength: 40, 'aria-label': tr('phase.name', { n: p.n }), dataset: { phaseName: String(p.n) } });
      name.addEventListener('change', () => edit(tr('phase.undo.rename'), (tx) => tx.renamePhase(p.n, name.value)));
      const del = el('button', { type: 'button', className: 'shell-x', 'aria-label': tr('phase.remove', { phase: phaseName(p.n) }), title: tr('phase.remove', { phase: phaseName(p.n) }), dataset: { phaseRemove: String(p.n) }, onclick: () => { if (edit(tr('phase.undo.remove'), (tx) => tx.removePhase(p.n))) print(tr('phase.removed', { phase: phaseName(p.n) })); } }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }));
      return el('li', { className: hiddenPhases.has(p.n) ? 'is-hidden' : '' }, show, el('span', { className: 'dc-mk' }, String(p.n)), name, el('span', { className: 'dc-muted' }, tr('phase.count', { n: count(p.n) })), del);
    }));
    const add = el('button', { type: 'button', className: 'dc-linkbtn', dataset: { phaseAdd: '' }, onclick: () => { const n = edit(tr('phase.undo.add'), (tx) => tx.addPhase()); if (n) { ST.curPhase = n; renderPhases(); print(tr('phase.added', { phase: phaseName(n) })); } } }, el('i', { className: 'bi bi-plus-lg', 'aria-hidden': 'true' }), ' ', tr('phase.add'));
    const cur = selectIn(phaseOptions(), String(ST.curPhase), (v) => { ST.curPhase = Number(v); print(tr('phase.current.set', { phase: phaseName(ST.curPhase) })); }, { id: 'dc-phase-cur' });
    cur.dataset.phaseCurrent = '';
    const per = el('input', { type: 'checkbox', id: 'dc-phase-per', checked: s.numbering?.perPhase !== false, dataset: { phasePer: '' } });
    per.addEventListener('change', () => { if (edit(tr('phase.undo.numbering'), (tx) => tx.setNumbering({ perPhase: per.checked }))) print(tr(per.checked ? 'phase.per.on' : 'phase.per.off')); });
    ui.phases.replaceChildren(list, el('div', { className: 'dc-row' }, add),
      el('div', { className: 'dc-props' }, ...field(tr('phase.current'), cur), ...field(tr('phase.per'), per)),
      el('p', { className: 'dc-note' }, tr('phase.per.hint')));
  }
  function setPhaseShown(n, on) {
    if (on) hiddenPhases.delete(n); else hiddenPhases.add(n);
    if (ST.view) { ST.view.setModel(ST.model.state, ST.built, ST.marks); }
    // what is hidden cannot stay selected
    setSelection(selected().filter((r) => !hiddenPhases.has(r.kind === 'conn' ? connPhase(ST.model.state, ST.model.connection(r.id)) : (r.kind === 'member' ? ST.model.member(r.id) : r.kind === 'stair' ? ST.model.stair(r.id) : ST.model.footing(r.id))?.phase || 1)));
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
    renderLevels(ST.model.state.levels);
  });
  ui.gridForm.addEventListener('submit', (e) => {
    e.preventDefault();
    let g;
    try { g = gridsFromSpacings(ui.gx.value, ui.gxs.value, ui.gy.value, ui.gys.value); }
    catch (err) { print(err.message); return; }
    if (edit(tr('app.undo.grids'), (tx) => tx.setGrids(g))) { print(tr('app.grids.done')); if (ST.view) { ST.view.fitted = false; ST.view.fit(); } }
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
    ST.fid = 0;
    const body = [];
    if (ST.tool === 'paste') { ui.propsH.textContent = tr('app.props.paste'); body.push(...pasteOptions()); }
    else if (ST.tool === 'move') { ui.propsH.textContent = tr('xf.move.title'); body.push(el('p', { className: 'dc-note' }, tr('xf.move.help'))); }
    else if (ST.tool !== 'select') { ui.propsH.textContent = tr('app.props.place.' + ST.tool); body.push(...toolOptions()); }
    else if (ST.multi.length) { ui.propsH.textContent = tr('app.props.selected', { n: ST.multi.length }); body.push(...multiProps()); }
    else if (ST.sel && Object.hasOwn(PROPS_BY_KIND, ST.sel.kind)) PROPS_BY_KIND[ST.sel.kind](body);   // 0.11 PERF.78: one entry per kind of selection, below
    else { ui.propsH.textContent = tr('app.props.model'); body.push(...modelSummary()); }
    const pdoc = ui.props.ownerDocument;   // the panel may be in the panels window
    const focusedId = pdoc.activeElement && ui.props.contains(pdoc.activeElement) ? pdoc.activeElement.id : null;
    const focusedRow = pdoc.activeElement && ui.props.contains(pdoc.activeElement) ? pdoc.activeElement.getAttribute('data-pg-row') : null;   // a property grid row (0.8)
    ui.props.replaceChildren(...body);   // field ids are numbered in order (fid reset below), so focus comes back to the same field
    if (focusedRow) [...ui.props.querySelectorAll('[data-pg-row]')].find((e) => e.getAttribute('data-pg-row') === focusedRow)?.focus();
    else if (focusedId) pdoc.getElementById(focusedId)?.focus();
  }

  ST.fid = 0;
  /** A labeled field row pair for a .dc-props grid. */
  function field(label, input) { if (!input.id) input.id = 'dc-f' + (++ST.fid); return [el('label', { for: input.id }, label), input]; }
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
  const { profileOptions, materialOptions, positionOptions, toolOptions, addByGridForm, pasteOptions, multiProps } = mountToolOptions({
    ST, opts, print, act, placeAt, placeLine, deleteSelection, pasteClipAt, phaseField, renderProps, field, numIn, selectIn, deepAssign,
    get footingForm() { return footingForm; },
    get stairForm() { return stairForm; },
    get ROW_START() { return ROW_START; },
    get manyEditor() { return manyEditor; },
    get xfBlock() { return xfBlock; },
    get mm() { return mm; },
    get kg() { return kg; },
  });

  const { ROW_START, manyEditor } = mountManyProps({
    ST, print, edit, field, numIn, selectIn, profileOptions, materialOptions, positionOptions,
  });

  const { xfBlock, runXf, whatText } = mountXf({
    print, edit, setTool, setSelection, field, numIn, selectIn, ROW_START, mm,
    get model() { return ST.model; },
    get settings() { return ST.settings; },
  });

  const { memberProps } = mountMemberProps({
    ST, print, edit, deleteSelection, addEndPlates, addShearTabs, addBasePlate, phaseField, field, numIn, textIn, selectIn, profileOptions, materialOptions, positionOptions, ROW_START, xfBlock,
    get openShop() { return openShop; },
    get r1() { return r1; },
    get kg() { return kg; },
  });

  const { connProps, pictureProps } = mountConnProps({
    ST, print, edit, deleteSelection, openMitre, applySimilar, renderProps, field, numIn, textIn, selectIn,
    get openShop() { return openShop; },
    get r1() { return r1; },
    get mm() { return mm; },
  });

  const { footingProps, footingForm, stairForm, stairProps } = mountFootingStair({
    opts, print, edit, deleteSelection, phaseField, renderProps, field, numIn, textIn, selectIn, materialOptions, addByGridForm, xfBlock, check, deepAssign, download, mm, r1,
    get built() { return ST.built; },
    get schedule() { return ST.schedule; },
    get settings() { return ST.settings; },
    get model() { return ST.model; },
    get safeName() { return safeName; },
  });
  function check(value, onSet) {
    const i = el('input', { type: 'checkbox', checked: !!value });
    i.addEventListener('change', () => onSet(i.checked));
    return i;
  }
  function deepAssign(o, patch) { for (const [k, v] of Object.entries(patch)) { if (v && typeof v === 'object' && !Array.isArray(v)) Object.assign(o[k], v); else o[k] = v; } }

  function modelSummary() {
    const s = ST.model.state;
    const steel = ST.built.parts.reduce((t, p) => t + p.weight, 0), bars = ST.schedule.rows.reduce((t, r) => t + r.totalWeight, 0);
    const dl = el('dl', { className: 'dc-props' });
    fillDl(dl, [[tr('app.k.members'), s.members.length], [tr('app.k.connections'), s.connections.length], [tr('app.k.footings'), s.footings.length], [tr('app.k.parts'), ST.built.parts.length], [tr('app.k.part-marks'), ST.marks.parts.length], [tr('app.k.assemblies'), ST.marks.assemblies.length], [tr('app.k.bolts-rods'), ST.built.bolts.length], [tr('app.k.steel'), tr('app.unit.kg', { v: kg(steel) })], [tr('app.k.rebar'), tr('app.unit.kg', { v: kg(bars) })], [tr('app.k.grids'), s.grids.x.length + ' × ' + s.grids.y.length], [tr('app.k.levels'), s.levels.length]]);
    for (const n of dl.querySelectorAll('dt')) n.className = 'k';
    for (const n of dl.querySelectorAll('dd')) n.className = 'v';
    const out = [dl, el('p', { className: 'dc-note' }, tr('app.model.note'))];
    // loose bolts from an IFC import (D11): they stay where they are; one click takes them all out
    const nb = (s.bolts || []).length;
    if (nb) out.push(el('div', { className: 'dc-block' }, el('p', { className: 'dc-note' }, tr('app.bolts.loose', { n: nb })),
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { removeBolts: '' }, onclick: () => { if (edit(tr('app.undo.bolts-remove'), (tx) => tx.removeBolts(null))) print(tr('app.bolts.removed', { n: nb })); } }, tr('app.btn.bolts-remove')))));
    return out;
  }

  const { renderReport, table } = mountReportPanel({
    ST, ui, setTool, select, refForPart, nestPanel, root,
    get exportBom() { return exportBom; },
    get clashPanel() { return clashPanel; },
    get exportReport() { return exportReport; },
    get exportReportPdf() { return exportReportPdf; },
    get exportBending() { return exportBending; },
    get kg() { return kg; },
  });
  const { exportIfc, exportUsd, machinesReady, sendNc, exportNc, exportBom, exportNest, exportReport, exportReportPdf, exportKiss, exportBending } = mountExports({
    print, safeName, download, nestResult, ask,
    get built() { return ST.built; },
    get model() { return ST.model; },
    get rcb() { return ST.rcb; },
    get marks() { return ST.marks; },
    get selection() { return selected(); },   // for an add-on's exporter (export-ui.js exportInput)
    get schedule() { return ST.schedule; },
    get settings() { return ST.settings; },
  });
  // ---- reports ----
  ST.erection = mountErection({ getModel: () => ST.model, built: () => ST.built, marks: () => ST.marks, edit, print, download, safeName, rerender: renderReport, setProblems: (list) => { ST.extraProblems = list; ST.extraSet?.(list); } });
  window.detailcraftIssues = mountDetailIssues({ root, t: tr, model: () => ST.model, download: (data, name, type) => download(name, data, type) });   // 0.10 BK.48; tests
  ST.supply = mountSupply({ getModel: () => ST.model, edit, print, nest: nestResult, built: () => ST.built, rerender: renderReport, setProblems: (list) => ST.supplySet?.(list) });
  ST.framing = mountFraming({ getModel: () => ST.model, edit, print, download, safeName, rerender: renderReport, setProblems: (list) => ST.frmSet?.(list) });
  ST.foundation = mountFoundation({ getModel: () => ST.model, edit, print, rerender: renderReport, select, label: (id) => ST.marks?.footingMark?.get(id) || id, analysisResult: () => ST.analysis?.result || null, profileSize: (name) => { const p = getProfile(name, ST.model.state.customProfiles || []); return p ? [Math.round(p.width), Math.round(p.depth)] : null; }, setProblems: (list) => ST.fndSet?.(list) });
  // 0.9 RC.1: the Concrete tab, a concrete element's properties and the reinforcement shop drawings (rc-ui.js)
  ST.rcUi = mountRc({ getModel: () => ST.model, rb: () => ST.rcb, schedule: () => ST.schedule, edit, print, select: (ref) => { setTool('select'); select(ref); }, rerender: renderReport,
    barLabel: (b) => (rcBarOf(b)?.set === 'other' ? b : barLabel(b, ST.settings.barNames)), paper: () => ST.settings.paper, numIn, textIn, selectIn, field, phaseField, deleteSelection,
    download, safeName, root, drawList: (c, l) => drawList(c, l), toPdf, remember: () => { ST.lastFocus = document.activeElement; }, restoreFocus,
    shapeCode: (sh) => shapeCode(sh, ST.settings.shapeCodes) || sh, scheduleDims: (sh, d) => scheduleDims(sh, d, ST.settings.shapeCodes), phase: () => ST.curPhase });
  ST.congestion = mountCongestion({ getModel: () => ST.model, rerender: renderReport, print, select, label: (id) => { const m = ST.marks?.footingMark?.get(id); return m || id; }, setProblems: (list) => ST.congSet?.(list) });
  ST.autopilot = mountAutopilot({ getModel: () => ST.model, edit, print, selected, rerender: renderReport, label: (id) => ST.marks?.partMark.get(id) || ST.model.member(id)?.name || id, setProblems: (list) => { ST.autoProblems = list; ST.autoSet?.(list); } });
  ST.analysis = mountAnalysis({ getModel: () => ST.model, getView: () => ST.view, edit, selected, select, print, download, safeName, rerender: renderReport, setFrameProblems: (list) => { ST.frameProblems = list; ST.frameProblemsSet?.(list); }, setBreakProblems: (list) => { ST.breakProblems = list; ST.breakSet?.(list); } });
  root.querySelector('.dc-tabs').addEventListener('click', (e) => { const t = e.target.closest('[data-tab]'); if (t) { ST.reportTab = t.dataset.tab; renderReport(); } });
  root.querySelector('.dc-tabs').addEventListener('keydown', (e) => {
    if (e.key !== 'ArrowRight' && e.key !== 'ArrowLeft') return;
    const tabs = [...root.querySelectorAll('[data-tab]')], i = tabs.findIndex((t) => t.dataset.tab === ST.reportTab);
    const n = tabs[(i + (e.key === 'ArrowRight' ? 1 : tabs.length - 1)) % tabs.length];
    ST.reportTab = n.dataset.tab; renderReport(); n.focus();
  });

  // ---- files ----
  function safeName() { return (ST.model.state.name || 'model').replace(/[\\/:*?"<>|\u0000-\u001f]+/g, '-').trim().slice(0, 80) || 'model'; }
  // the shell's host adapter: the browser's picker and downloads, or the desktop's dialogs (saving in place there)
  const fileHost = getHost({ app: 'detailcraft' });
  const MODEL_TYPES = [{ description: 'DetailCraft', extensions: ['.json'] }];   // i18n-ignore: a file type label the OS shows
  const IFC_TYPES = [{ description: 'IFC', extensions: ['.ifc'] }];             // i18n-ignore
  const OPEN_TYPES = [{ description: 'DetailCraft, IFC, project bundle', extensions: ['.json', '.ifc', '.ccbundle', '.zip'] }];   // i18n-ignore
  ST.saveTarget = null;               // the HostFile the open model came from, when it can be written in place
  /** Every export and download: a copy (the browser downloads it; the desktop asks where). */
  function download(name, data, type) { fileHost.download(data, name, type); }
  // ---- AI assistants and scripts (0.4 X.12; agents.js on host.js's control channel): off until Settings › Assistants ----
  window.detailcraftControl = installAgents({
    model: () => ST.model, built: () => ST.built, marks: () => ST.marks, selected, analysis: () => ST.analysis,
    select: (refs) => { setTool('select'); setSelection(refs); return selected().length; },
    busy: () => (ST.pending ? 'placing a member' : ST.moveRefs ? 'moving parts' : ST.tool === 'paste' ? 'pasting' : null),   // i18n-ignore: read by the assistant
    save: saveModel,
    usd: async (format) => {   // 0.7 AS.6: as Output › USD (exportUsd) makes it
      const { steelUsd } = await import('./usd-detailcraft.js');
      const r = steelUsd(ST.built, ST.marks, { format, name: safeName() });
      return { data: r.data, report: r.report, name: safeName(), type: format === 'usda' ? 'model/vnd.usda' : format === 'usdz' ? 'model/vnd.usdz+zip' : 'application/octet-stream' };
    },
    download,
    exports: { ifc: exportIfc, nc: exportNc, bom: exportBom, bending: exportBending, kiss: exportKiss, cutlist: exportNest },
  });
  // ---- the shell's modules (0.8 round 3; docs/apps/shell-modules.md § Mounting): calc sheets, design reasons, running totals, lessons, Suggest, activity, Ask ----
  ST.shellMount = mountDetailShell({
    model: () => ST.model, built: () => ST.built, schedule: () => ST.schedule, selected, setSelection: (refs) => { setTool('select'); setSelection(refs); },
    describe: describeRef, control: window.detailcraftControl, name: () => ST.model.state.name, path: () => ST.saveTarget?.path || ST.saveTarget?.name || '',
    onSelection: (fn) => { selListeners.add(fn); return () => selListeners.delete(fn); },
  });
  // ---- drafting without sight (0.8 round 3, EG.52; assets/js/app-access.js): the model's members, connections, stairs and footings in order, each said with its mark ----
  {
    const refKey2 = (r) => r.kind + ':' + r.id;
    const rows = () => { const m = ST.model.state; return [...m.members.map((x) => ({ kind: 'member', id: x.id })), ...m.connections.map((x) => ({ kind: 'conn', id: x.id })), ...(m.stairs || []).map((x) => ({ kind: 'stair', id: x.id })), ...m.footings.map((x) => ({ kind: 'footing', id: x.id }))].filter(exists); };
    const goAccess = () => window.ccAccess.mount({
      stage: ui.canvas, label: () => tr('app.access.stage'),
      walk: () => rows().map((r) => ({ id: refKey2(r), ref: r, label: describeRef(r) })),
      describe: () => { const m = ST.model.state, n = m.members.length + m.connections.length + m.footings.length + (m.stairs || []).length; return n ? tr('app.access.model', { name: m.name || '', what: countText({ members: m.members.length, connections: m.connections.length, footings: m.footings.length, stairs: (m.stairs || []).length }) }) : tr('app.access.empty'); },
      selection: () => { const l = selected(); return l.length ? tr('app.access.selected', { n: l.length, what: l.slice(0, 5).map(describeRef).join(' ') }) : tr('app.access.nosel'); },
      pick: (p, item) => { if (item) { setTool('select'); setSelection([item.ref]); window.ccAccess.say(tr('app.access.selected', { n: 1, what: item.label })); } else window.ccAccess.say(tr('app.access.nosel')); },
    });
    const goStatus = () => window.ccAccess.follow(ui.status, { max: 240 });
    for (const f of [goAccess, goStatus]) { if (window.ccAccess) f(); else document.addEventListener('cc-access-ready', f, { once: true }); }
  }
  async function saveModel() {
    ST.shellMount?.beforeSave();
    const name = safeName() + '.detailcraft.json';
    const r = await fileHost.save({ target: ST.saveTarget, data: ST.model.toJSON(), name, types: MODEL_TYPES });
    if (!r.ok) { if (!r.cancelled) print(tr('file.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
    if (r.target?.writable) ST.saveTarget = r.target;
    ST.model.markSaved();
    renderBar();
    refreshAutosave();
    print(r.how === 'written' ? tr('file.save.written', { file: r.path || r.name || name }) : tr('app.file.saved', { file: name }));
    return true;
  }
  /** 0.11 DC.27: Save for 0.10: a copy whose new ids are numbered again into the range 0.10 and older read (model.js olderCopy).
   *  Only when someone picks it; Save (Ctrl+S) always writes the model as it is. The copy is not this model's file. */
  async function saveOlder() {
    ST.shellMount?.beforeSave();
    let data;
    try { data = olderCopy(ST.model.toJSON()); } catch { print(tr('file.older.full')); return false; }
    const name = safeName() + ' (0.10).detailcraft.json';   // i18n-ignore: a file name
    const r = await fileHost.save({ target: null, data, name, types: MODEL_TYPES });
    if (!r.ok) { if (!r.cancelled) print(tr('file.save.failed', { error: String(r.error?.message || r.error || '') })); return false; }
    print(tr('file.older.saved', { file: r.path || r.name || name }));
    return true;
  }
  async function pickAndOpen(types) {
    let files;
    try { files = await fileHost.openFile({ types }); } catch (err) { print(tr('file.open.failed', { error: err.message || String(err) })); return; }
    if (files?.[0]) await openFile(files[0]);
  }
  fileHost.onOpenFiles(async (files) => { if (files?.[0]) await openFile(files[0]); });
  async function confirmDiscard() {
    if (!ST.model.dirty) return true;
    const c = await ask({ title: tr('app.ask.unsaved.title'), text: tr('app.ask.unsaved.text', { name: ST.model.state.name }), buttons: [['cancel', tr('app.ask.cancel'), 'btn-line'], ['discard', tr('app.ask.unsaved.discard'), 'btn-line'], ['save', tr('app.ask.unsaved.save'), 'btn-plot']] });
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
  root.querySelectorAll('[data-sample-open]').forEach((b) => b.addEventListener('click', openSample));
  // i18n-ignore: CSS, selector, class name or search keywords: no words a person reads (words-11)
  { const regSample = () => window.ccPalette?.register?.([{ id: 'detail-sample', label: tr('ui.hint.trysample'), group: 'file', keywords: 'sample example demo try frame', run: openSample }]); if (window.ccPalette) regSample(); else window.addEventListener('load', regSample); }
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
    if (file.size > 400 * 1024 * 1024) { print(tr('app.file.too-big')); return; }   // PERF.20 (scale-11): one string still fits at 400 MB; the model keeps its first 20,000 members and says so in a warning
    if (!(await confirmDiscard())) return;
    const text = await file.text();
    const m = new Model();
    try { const { warnings } = m.load(text); m.takeIdBlock(); setModel(m); ST.saveTarget = file.writable ? file : null; setTool('select'); print(tr('app.file.opened', { file: file.name }) + (warnings.length ? ' ' + warnings.join(' ') : '')); }
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
  ST.leaving = false;
  window.addEventListener('beforeunload', (e) => { if (ST.model.dirty && !ST.leaving) { e.preventDefault(); e.returnValue = ''; } });
  document.addEventListener('click', async (e) => {
    const a = e.target.closest?.('a[href]');
    if (!a || !ST.model.dirty || e.defaultPrevented || e.button || e.ctrlKey || e.metaKey || e.shiftKey || e.altKey || a.hasAttribute('download') || (a.target && a.target !== '_self')) return;
    const url = new URL(a.href, location.href);
    if (!/^https?:$/.test(url.protocol) || (url.hash && url.href.split('#')[0] === location.href.split('#')[0])) return;
    e.preventDefault();
    if (!(await confirmDiscard())) return;
    ST.leaving = true;
    setTimeout(() => location.assign(url.href), ST.model.dirty ? 0 : 800);
  });

  // ---- clash check (D15): on demand, visible phases only; the result is kept until the model changes ----
  ST.clashRes = null;
  ST.clashTol = 1;
  const { clashPanel } = mountClash({
    hiddenPhases, print, exists, setTool, setSelection, numIn, renderReport,
    get model() { return ST.model; },
    get clashRes() { return ST.clashRes; }, set clashRes(v) { ST.clashRes = v; },
    get built() { return ST.built; },
    get clashTol() { return ST.clashTol; }, set clashTol(v) { ST.clashTol = v; },
    get reportTab() { return ST.reportTab; }, set reportTab(v) { ST.reportTab = v; },
    get marks() { return ST.marks; },
    get tool() { return ST.tool; },
    get view() { return ST.view; },
  });

  /** Cut list (D24): the linear parts nested into stock lengths; the stock, kerf, trim and keep length are settings. */
  function nestResult() { const o = ST.settings.nest; return nestBars(piecesFromMarks(ST.marks), { stock: o.stock, kerf: o.kerf, trim: o.trim, keep: o.keep }); }
  function nestPanel() {
    const o = ST.settings.nest;
    const setN = (patch) => { setSetting('nest', { ...ST.settings.nest, ...patch }); renderReport(); };
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

  const { openIfc } = mountIfcImport({
    print, setModel, setTool, table, confirmDiscard, bytesOf, restoreFocus, root,
    get lastFocus() { return ST.lastFocus; }, set lastFocus(v) { ST.lastFocus = v; },
  });

  // ---- drawings dialog: GA plans and elevations + assembly drawings, made from the model on every open ----
  ST.dwgSet = null;
  const { makeDrawings, exportSet, openDrawings, openShop, drawList } = mountDrawings({
    ui, print, fillPaper, setSetting, edit, selectedPart, safeName, download, exportNc, exportIfc, restoreFocus, mm,
    get settings() { return ST.settings; },
    get model() { return ST.model; },
    get built() { return ST.built; },
    get marks() { return ST.marks; },
    get lastFocus() { return ST.lastFocus; }, set lastFocus(v) { ST.lastFocus = v; },
    get dwgSet() { return ST.dwgSet; }, set dwgSet(v) { ST.dwgSet = v; },
  });

  // ---- in-page question dialog (never window.confirm) ----
  ST.lastFocus = null;
  function restoreFocus() {
    const t = ST.lastFocus && document.contains(ST.lastFocus) && !ST.lastFocus.disabled ? ST.lastFocus : ui.tools.querySelector('[data-act="tool:select"]');
    ST.lastFocus = null;
    if (!t) return;
    if (document.activeElement === t) t.blur();
    t.focus({ preventScroll: true });
  }
  function ask({ title, text, buttons }) {
    return new Promise((done) => {
      ST.lastFocus = document.activeElement;
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
        if (area && ST.tool !== 'paste' && areaClipNewer(area, currentClip(false))) { keyPasteArea(area); return; }   // D8.15: no preventDefault — the paste event decides
        e.preventDefault(); act('paste');
      }
      else if (k === 'd') { e.preventDefault(); act('duplicate'); }
      else if (k === 'a') { e.preventDefault(); act('select-all'); }
      return;
    }
    if (typing || e.altKey) return;
    if (e.key === 'Escape') {
      if (ST.view?.cancelWindow()) { print(tr('sel.window.cancel')); return; }
      if (ST.view?.cancelDrag()) return;
      if (ST.tool === 'move') { const refs = ST.moveRefs; setTool('select'); setSelection(refs || []); print(tr('xf.move.cancel')); return; }
      if (ST.pending) { ST.pending = null; if (ST.view) { ST.view.rubberFrom = null; ST.view.drawOverlay(); } print(tr('app.place.cancelled')); }
      else if (ST.tool === 'paste') { setTool('select'); print(tr('app.paste.cancelled')); }
      else if (ST.tool !== 'select') setTool('select');
      else if (selected().length) act('select-none');
      return;
    }
    if (e.key === 'Delete' || e.key === 'Backspace') { if (selected().length) { e.preventDefault(); deleteSelection(); } return; }
    const tools = { v: 'select', b: 'beam', c: 'column', r: 'brace', p: 'plate', f: 'footing', s: 'stair', m: 'move' };
    if (tools[k]) { e.preventDefault(); setTool(tools[k]); }
  });

  window.detailcraft = {
    get exportSet() { return exportSet; },   // Finalize and export in SuperCad Studio (SC.7): the outputs with options, no dialogs
    get model() { return ST.model; }, get built() { return ST.built; }, get marks() { return ST.marks; }, get schedule() { return ST.schedule; },
    get view() { return ST.view; }, get viewMode() { return ST.viewMode; }, get selection() { return ST.sel; }, get selected() { return selected(); }, get tool() { return ST.tool; },
    get settings() { return ST.settings; }, get toolOptions() { return opts; }, clipboard: () => currentClip(),
    get viewCube() { return ST.viewCube; }, get axisIcon() { return ST.axisIcon; }, cubeView: () => ST.cubeOpts?.getView(),
    setTool, select, setSelection, setView, act, nodeScreen: (p) => ST.view?.toScreen(p),
    drawings: () => makeDrawings(), get openDrawingSet() { return ST.dwgSet; },
    print,   // Studio Live (0.5 LV.22, live.js): its messages
    get analysis() { return ST.analysis; },
    get erection() { return ST.erection; },
    get autopilot() { return ST.autopilot; },
    get congestion() { return ST.congestion; },
    get foundation() { return ST.foundation; },
    get framing() { return ST.framing; },
    get rc() { return ST.rcUi; }, get rcBuild() { return ST.rcb; },   // 0.9 RC.1 (tests)   // 0.8 EG.6 (tests)   // 0.8 EG.5 (tests)   // 0.8 EG.74 (tests)   // 0.8 EG.73 (tests)
  };
  // the menu styles (0.5 IP.3, input-detailcraft.js + the shell's app-input-ui.js): their messages go to the status line, and
  // letters stay DetailCraft's while a placement or a paste is under way
  window.ccInputHooks = { status: (text) => print(text || ''), busy: () => !!ST.pending || ST.tool === 'paste' || ST.tool === 'move' };

  // ---- autosave and crash recovery (0.4 1.2): the open model is the document ----
  const autosave = new Autosave({ app: 'detailcraft' });
  // 0.10 PERF.24: the first copy is the whole model, then only what each edit changed (lib/history; the open model is followed when a file opens)
  const adoc = autosave.doc({ id: 'open', name: ST.model.state.name, journal: followJournal(() => ST.model.autosaveJournal()) });
  ST.copyPending = false;
  function refreshAutosave() {
    if (ST.model.dirty) { adoc.rename(ST.model.state.name); adoc.changed(); ST.copyPending = true; }
    else if (ST.copyPending) { adoc.clean(); ST.copyPending = false; }
  }
  window.detailcraftAutosave = autosave;
  // automated browsers (tests, which leave edits open mid-run) see "Recover your work?" only when they ask: ?autosave=offer
  if (!navigator.webdriver || new URLSearchParams(location.search).get('autosave') === 'offer') autosave.offer({
    onRecover: async (rec) => {
      const text = rec.data?.kind === 'chunks' ? recoverText(rec) : rec.data?.text;
      if (typeof text !== 'string') throw new Error('This copy is empty.');   // i18n-ignore: shown by the shell's dialog for a damaged copy
      if (!(await confirmDiscard())) throw new Error('Kept the open model.');  // i18n-ignore: the copy stays, the shell says why
      const m = new Model();
      const { warnings } = m.load(text);
      m.takeIdBlock();                      // 0.11 DC.27
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
  ST.guidMap = null;
  ST.guidBuilt = null;
  ST.guidName = null;
  function refOfGuid(g) {
    if (ST.guidBuilt !== ST.built || ST.guidName !== ST.model.state.name) {
      ST.guidBuilt = ST.built; ST.guidName = ST.model.state.name; ST.guidMap = new Map();
      const seed = (k) => guidFor(ST.model.state.name + '|' + k);
      for (const p of ST.built.parts) { const r = p.member ? { kind: 'member', id: p.member } : p.conn ? { kind: 'conn', id: p.conn } : p.stair ? { kind: 'stair', id: p.stair } : null; if (r) ST.guidMap.set(seed('part' + p.id), r); }
      for (const f of ST.model.state.footings) ST.guidMap.set(seed('footing' + f.id), { kind: 'footing', id: f.id });
    }
    return ST.guidMap.get(g) || null;
  }
  // ---- SC.5 (sc-r5-select): the pick is announced to the page (SuperCad Studio hears `cc-pick` and keeps one selection across its panels) and a pick from another
  // panel comes back through window.ccPickers.detailcraft. Both are inert outside Super. Ids are the project's object registry's: a member by its id, `conn:<id>`,
  // `footing:<id>`, `stair:<id>`. Each ref also carries the GlobalIds its parts get in the IFC export (ifc.js: stable), so the same steel in the building model is
  // found; a ref that is a GlobalId is taken back to the member, connection, stair or footing it came from (refOfGuid).
  const PICK_PREFIX = { member: '', conn: 'conn:', footing: 'footing:', stair: 'stair:' };
  const pickRefKey = (r) => r.kind + '\u0001' + r.id;
  function guidsOfRef(r) {
    if (!ST.built) return [];
    refOfGuid('');   // (re)builds the map for the model as built now
    if (ST.pickGuids?.map !== ST.guidMap) { ST.pickGuids = { map: ST.guidMap, by: new Map() }; for (const [g, x] of ST.guidMap) { const k = pickRefKey(x); if (!ST.pickGuids.by.has(k)) ST.pickGuids.by.set(k, []); ST.pickGuids.by.get(k).push(g); } }
    return ST.pickGuids.by.get(pickRefKey(r)) || [];
  }
  function pickRefs() {
    const list = selected().filter((r) => Object.hasOwn(PICK_PREFIX, r.kind)).slice(0, 2000);
    return list.map((r) => { const g = guidsOfRef(r); return { id: PICK_PREFIX[r.kind] + r.id, ...(g.length ? { guid: g[0] } : {}), ...(g.length > 1 ? { aka: g.slice(1, 9) } : {}) }; });
  }
  function announcePick() {
    if (!ST.pickReady) return;
    const refs = pickRefs();
    const key = refs.map((r) => r.id).join(',');
    if (key === ST.pickLast) return;
    ST.pickLast = key;
    try { window.dispatchEvent(new CustomEvent('cc-pick', { detail: { app: 'detailcraft', ids: refs.map((r) => r.id), refs } })); } catch { /* no window */ }
  }
  selListeners.add(announcePick);
  ST.pickReady = true;
  const pickRefOf = (raw) => {
    const id = String(raw ?? '');
    for (const [kind, pre] of Object.entries(PICK_PREFIX)) {
      if (pre ? !id.startsWith(pre) : id.includes(':')) continue;
      const own = id.slice(pre.length), list = kind === 'member' ? ST.model.state.members : kind === 'conn' ? ST.model.state.connections : kind === 'footing' ? ST.model.state.footings : ST.model.state.stairs;
      const o = (list || []).find((x) => String(x.id) === own);
      if (o) return { kind, id: o.id };
    }
    return ST.built && /^[0-9A-Za-z_$]{22}$/.test(id) ? refOfGuid(id) : null;
  };
  /** Show a pick from another panel. → the ids shown, or false */
  function pickApply(refs) {
    const list = (refs || []).slice(0, 5000).map((r) => (r ? pickRefOf(r.id) : null)).filter(Boolean);
    if (!list.length) return false;
    if (ST.tool !== 'select') setTool('select');
    setSelection(list);
    return selected().filter((r) => Object.hasOwn(PICK_PREFIX, r.kind)).map((r) => PICK_PREFIX[r.kind] + r.id);
  }
  (window.ccPickers = window.ccPickers || {}).detailcraft = { apply: pickApply, get: () => { const refs = pickRefs(); return { ids: refs.map((r) => r.id), refs }; }, clear: () => { if (selected().length) setSelection([]); return true; },
    has: (id) => !!pickRefOf(id) };   // has: is this id (or GlobalId) something of the open model? (the same steel in the building model, with no link needed)
  // ---- Problems (0.7.1 → 0.8; docs/0.8-PROBLEMS-SPEC.md): build.js's problems in the shell's ⚠ panel, ⚠ markers in the 3D view and in
  // plan / elevation, accepted problems saved in the file (model.state.problems, one undo step). Only with the shell's module (manifest
  // "problems"); the Problems tab below the view keeps working either way.
  if (document.getElementById('cc-problems')) {
    const go = () => {
      const P = window.ccProblems;
      if (!P) return;
      const src = P.source({ id: 'detailcraft.build', kind: 'check', label: tr('problems.src.build') });
      const label = (r) => { try { return exists(r) ? describeRef(r).replace(/\.$/, '') : ''; } catch (e) { return ''; } };
      ST.problemsSync = () => {
        src.set(dcProblems(ST.built, ST.model.state, { strings: langCatalog().strings, labelOf: label }));
        P.store.loadAccepted(ST.model.state.problems?.accepted || []);
      };
      // an IDS problem (0.7.1 71.25) names the exported element by GlobalId: back to the member, connection, stair or footing it came from
      const refs = (p) => p.about.map((r) => (r.kind === 'element' ? refOfGuid(r.id) : r)).filter((r) => r && ['member', 'conn', 'footing', 'stair', 'rc', 'rcbar'].includes(r.kind) && exists(r));
      P.adapter({
        t: tr,
        file: () => ST.model.state.name,
        select: (p) => { const r = refs(p); if (!r.length) return; if (ST.tool !== 'select') setTool('select'); setSelection(r); if (r.length === 1) print(describeRef(r[0])); },
        focus: (p) => { const at = refs(p).map((r) => anchorOf(ST.model.state, r) || rcAnchor(ST.model.state, r)).find(Boolean); if (at) ST.view?.focusPoint(at, 2500); },
        saveAccepted: (list) => { edit(tr('problems.undo.accept'), (tx) => tx.setAcceptedProblems(list)); },
      });
      if (ST.view) P.markers({
        stage: ui.stage,
        anchor: (p) => refs(p).map((r) => anchorOf(ST.model.state, r) || rcAnchor(ST.model.state, r)).find(Boolean) || null,
        // 0.11 UI.17: view.toScreen is canvas-relative and the markers layer sits on the stage; in a layout that puts a region left of or above the
        // canvas (Toolbox, Vector, Pro) the ⚠ marks landed over the toolbox. Add the canvas's offset inside the stage (0 in the classic page).
        toScreen: (pt) => {
          const s = ST.view.toScreen(pt); if (!s) return s;
          const c = ST.view.canvas?.getBoundingClientRect?.(), st = ui.stage.getBoundingClientRect();
          return c ? { ...s, x: s.x + c.left - st.left - ui.stage.clientLeft, y: s.y + c.top - st.top - ui.stage.clientTop } : s;
        },
        onView: (fn) => { const prev = ST.view.onRender; ST.view.onRender = () => { prev?.(); fn(); }; return () => { ST.view.onRender = prev; }; },
      });
      const frameSrc = P.source({ id: 'detailcraft.frame', kind: 'engine', label: tr('problems.src.frame') });
      const extraSrc = P.source({ id: 'detailcraft.erection', kind: 'engine', label: tr('problems.src.erection') });
      ST.extraSet = (list) => extraSrc.set(list);
      ST.extraSet(ST.erection.problems());
      const autoSrc = P.source({ id: 'detailcraft.autopilot', kind: 'engine', label: tr('problems.src.autopilot') });
      ST.autoSet = (list) => autoSrc.set(list);
      ST.autoSet(ST.autopilot.problems());
      const congSrc = P.source({ id: 'detailcraft.congestion', kind: 'engine', label: tr('problems.src.congestion') });
      ST.congSet = (list) => congSrc.set(list);
      ST.congSet(ST.congestion.problems());
      const rcSrc = P.source({ id: 'detailcraft.rebar', kind: 'check', label: tr('problems.src.rebar') });   // 0.9 RC.1: laps, anchorage, cover, spacing, steel
      ST.rcSet = (list) => rcSrc.set(list);
      ST.rcSet(rcProblems(ST.rcb));
      // 0.10 BK.20: the shared LOD 350 interface rules, read on DetailCraft's walls with openings (framed panels, concrete walls): advisory
      const ifaceSrc = P.source({ id: 'detailcraft.interfaces', kind: 'check', label: tr('problems.src.interfaces') });
      ST.ifaceSet = (list) => ifaceSrc.set(list);
      ST.ifaceSet(dcInterfaces(ST.model.state).problems);
      const fndSrc = P.source({ id: 'detailcraft.foundation', kind: 'engine', label: tr('problems.src.foundation') });
      ST.fndSet = (list) => fndSrc.set(list);
      ST.fndSet(ST.foundation.problems());
      const brkSrc = P.source({ id: 'detailcraft.breakit', kind: 'engine', label: tr('problems.src.breakit') });
      ST.breakSet = (list) => brkSrc.set(list);
      ST.breakSet(ST.breakProblems);
      const supSrc = P.source({ id: 'detailcraft.supply', kind: 'engine', label: tr('problems.src.supply') });
      ST.supplySet = (list) => supSrc.set(list);
      ST.supplySet(ST.supply ? ST.supply.problems() : []);
      const frmSrc = P.source({ id: 'detailcraft.framing', kind: 'engine', label: tr('problems.src.framing') });
      ST.frmSet = (list) => frmSrc.set(list);
      ST.frmSet(ST.framing.problems());
      const consSrc = P.source({ id: 'detailcraft.constructability', kind: 'engine', label: tr('problems.src.constructability') });
      ST.consSet = (list) => consSrc.set(list);
      ST.consSet(constructability(ST.model.state, ST.built, { cache: ST.consCache }));
      ST.frameProblemsSet = (list) => frameSrc.set(list);
      if (ST.frameProblems) ST.frameProblemsSet(ST.frameProblems);
      ST.problemsSync();
      renderReport();
    };
    if (window.ccProblems) go(); else document.addEventListener('cc-problems-ready', go, { once: true });
  }
  // ---- Check against IDS (0.7.1 71.25; ids-ui.js, cc-ids in ./ids/): the IFC this model exports (writeIfc, read back by cc-ifc) against the
  // client's IDS, remembered in the file (state.ids, one undo step); failures in the shell's Problems, named by the export's GlobalIds
  // (guidFor(model name | part id): stable, so refOfGuid finds the member, connection, stair or footing a click should select)
  ST.idsUi = mountIds({
    root, el, t: tr, print,
    ifc: async () => {
      if (!ST.built.parts.length && !ST.model.state.footings.length && !ST.rcb.items.length && !ST.rcb.loose.length) throw new Error(tr('app.export.nothing'));
      const { IfcFile } = await import('./ifc/model.js');
      return IfcFile.open(new TextEncoder().encode(writeIfc(ST.model.state, ST.built, ST.marks, ST.schedule, {})));
    },
    readRecord: () => (ST.model.state.ids ? { ...ST.model.state.ids, text: ST.model.idsText() } : null),
    // the text once in model.idsTexts, the undo step holds only { name, hash } (lead 2026-10-26: no IDS text in the snapshots)
    writeRecord: (rec) => edit(tr(rec ? 'ids.undo.set' : 'ids.undo.clear'), (tx) => tx.setIds(rec ? { name: rec.name, hash: ST.model.idsTexts.put(rec.text) } : null)),
  });
  window.detailcraftIds = ST.idsUi;   // for tests (tools/ids/browser-detailcraft.mjs)
  // workspace layouts (Settings › Global › Layout; 0.7 WS.13): the shell's engine builds the chosen layout, workspace-detailcraft.js fills it
  import('./workspace-detailcraft.js').then((m) => m.mountDetailcraftWorkspace({ root, dc: window.detailcraft })).then((w) => { ST.workspace = w; })
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
