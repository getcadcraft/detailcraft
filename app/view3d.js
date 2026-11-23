/* SPDX-License-Identifier: Apache-2.0 */
/**
 * view3d.js — the DetailCraft model in three.js: true profile extrusions (copes cut, holes shown as dark
 * cylinders), bolts and anchor rods, footings (see-through) with their bars, grids with labels, levels,
 * and the grid-intersection nodes members are placed on. Z up, scene in meters (the model is mm).
 * Renders on demand.
 *
 *   const v = new View3D(canvas, { onPick(ref|null), onNode(node), onHoverNode(node|null) });
 *   v.setModel(state, built, marks);  v.setSelection(refs);  v.setMode('3d' | 'plan' | 'elevation', { level, grid });
 *   v.placing = true; v.rubberFrom = [x,y,z] | null;  v.fit();
 *   v.ghost = [[a, b], …] | null  — lines relative to the hovered node, drawn there while placing (paste follows the pointer)
 *   v.showBolts = false hides bolts and anchor rods (and they are not picked) — Settings › DetailCraft
 *   v.onRender = () => {} runs after each frame (the view cube follows the camera)
 *   v.focusPoint([x, y, z], span) brings a point to the middle of the view, about `span` mm across (D15)
 *   v.hiddenPhases = Set of phase numbers not drawn (and not picked): parts, their bolts, footings (0.4 D13)
 *   v.boxSelect = true (the Select tool): a drag draws a selection window — in Plan and Elevation a plain left drag,
 *     in 3D Shift+drag (a plain drag turns the model). To the right = window (wholly inside, solid), to the left =
 *     crossing (touching, dashed). On release onWindow({ path, mode, add }) gets the four screen corners; the caller
 *     picks with winsel.js through v.project(p) and v.cutPlanes(). Plan / elevation panning moves to the right or
 *     middle button while boxSelect is on.
 *   v.lasso = true (W2.4, Settings › Dragging to select: lasso): the same drag draws a freehand lasso through lasso-core.js —
 *     its mode follows the first sideways move (right = window, left = crossing); Space while dragging cycles window →
 *     crossing → fence. On release onWindow({ path (the thinned screen path), mode, add, lasso: true }).
 *   v.dragParts = { can(ref), start(ref) → { points, ghost } | null, move(offset, node), end(offset), cancel() } (D2): with the
 *     Select tool, pressing on a part that is already selected and dragging moves the selection — across the level in
 *     3D and Plan (Ctrl/Cmd held in 3D: up and down), within the elevation's plane in Elevation. The held part's points
 *     snap onto grid intersections (transform.js snapOffset), else the offset goes in 10 mm steps; a dashed ghost
 *     follows. Esc (v.cancelDrag()) drops it. A press on an unselected part still turns or pans the view.
 *   Touch (0.4 S.8): a tap selects or places (a finger may wander 12 px; grid intersections snap from 34 px away), a long
 *     press (0.55 s) calls onLongPress(ref) — the app adds the part to the selection or takes it out, as Shift+click
 *     does — and one finger on a selected part drags it as the mouse does. Two fingers pinch and pan (OrbitControls).
 *   Reference pictures (0.8 D8.15, picture.js): state.pictures drawn as see-through textured planes lying on their level, under
 *     the steel (2 mm below the level, no depth writes, drawn first), at the picture's opacity; picked last (anything else
 *     in front wins); selected = a blue outline. v.pictureSrc = (hash) → PNG data URL (the Model keeps the PNGs, not the
 *     state); textures are kept by hash between rebuilds and let go when no picture uses them.
 * ref = { kind: 'member'|'conn'|'footing'|'stair'|'picture', id }.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { clipLoopV, endX } from './geom.js';
import { nodes as gridNodes } from './model.js';
import { barPolyline, BARS } from './rebar.js';
import { barOf as rcBarOf } from './rc-detail.js';   // 0.9 RC.1
import { tessellate } from './rc/bars.js';
import { lassoMode, nextMode, thin } from './lasso-core.js';
import { snapOffset } from './transform.js';
import { onMouse, panButton } from './input-mouse.js';   // 0.5 IP.3: the menu style's wheel and buttons (input-detailcraft.js)

const MM = 0.001;
const SNAP_PX = 18, SNAP_TOUCH = 34, TAP_PX = 5, TAP_TOUCH = 12, LONG_MS = 550;

export class View3D {
  constructor(canvas, { onPick = () => {}, onNode = () => {}, onHoverNode = () => {}, onWindow = () => {} } = {}) {
    this.canvas = canvas;
    this.onPick = onPick; this.onNode = onNode; this.onHoverNode = onHoverNode; this.onWindow = onWindow;
    this._boxSelect = false;
    this.renderer = new THREE.WebGLRenderer({ canvas, antialias: true, preserveDrawingBuffer: true });
    this.renderer.setPixelRatio(Math.min(window.devicePixelRatio || 1, 2));
    this.renderer.localClippingEnabled = true;     // plan/elevation cut the model, never the labels
    this.clipPlanes = [];
    this.scene = new THREE.Scene();
    this.persp = new THREE.PerspectiveCamera(45, 1, 0.05, 2000);
    this.persp.up.set(0, 0, 1);
    this.ortho = new THREE.OrthographicCamera(-10, 10, 10, -10, -1000, 1000);
    this.camera = this.persp;
    this.scene.add(new THREE.HemisphereLight(0xffffff, 0x8a8f96, 2.0));
    const sun = new THREE.DirectionalLight(0xffffff, 1.5);
    sun.position.set(0.5, -0.8, 1);
    this.scene.add(sun);
    this.root = new THREE.Group();
    this.root.scale.setScalar(MM);
    this.scene.add(this.root);
    this.overlay = new THREE.Group();
    this.overlay.scale.setScalar(MM);
    this.scene.add(this.overlay);
    this.mode = '3d';
    this.modeOpts = {};
    this.selection = [];
    this.placing = false;
    this.rubberFrom = null;
    this.ghost = null;
    this.showBolts = true;
    this.hiddenPhases = new Set();
    try { if (localStorage.getItem('detailcraft.nobatch') === '1') this.batchParts = false; } catch (e) { /* no storage: batched */ }   // a switch for telling a drawing problem from a batching one (0.10 PERF.36)
    this.hoverNode = null;
    this.pickables = [];
    this.pictureSrc = null;
    this.picTex = new Map();   // hash → THREE.Texture, kept between rebuilds
    this.picMats = [];
    this.box = new THREE.Box3();
    this._mouse = null;
    this.makeControls();
    // the menu style's mouse (Settings › DetailCraft › Menus, keys and mouse): which buttons pan the plan and elevations,
    // what each button does in 3D, the wheel's direction and speed (0.5 IP.3)
    onMouse((m) => { this._mouse = m; this.applyMouse(); });
    // the wheel turned round: a copy of the event with the other sign (a pinch, ctrl+wheel, is never turned round)
    canvas.addEventListener('wheel', (e) => {
      if (!this._mouse || this._mouse.wheel !== -1 || e.ctrlKey || e.ccFlipped) return;
      e.stopImmediatePropagation();
      e.preventDefault();
      const f = new WheelEvent('wheel', { deltaX: e.deltaX, deltaY: -e.deltaY, deltaZ: e.deltaZ, deltaMode: e.deltaMode, clientX: e.clientX, clientY: e.clientY, screenX: e.screenX, screenY: e.screenY, shiftKey: e.shiftKey, altKey: e.altKey, metaKey: e.metaKey, bubbles: true, cancelable: true });
      f.ccFlipped = true;
      canvas.dispatchEvent(f);
    }, { capture: true, passive: false });
    this.applyTheme();
    new MutationObserver(() => { this.applyTheme(); if (this.state) this.setModel(this.state, this.built, this.marks); })
      .observe(document.documentElement, { attributes: true, attributeFilter: ['data-space'] });
    this.resizeObserver = new ResizeObserver(() => this.resize());
    this.resizeObserver.observe(canvas.parentElement);
    this.resizeObserver.observe(canvas);   // a workspace layout (0.7 WS.13) insets the canvas inside its stage
    this.resize();
    this.bindPointer();
  }

  get boxSelect() { return this._boxSelect; }
  set boxSelect(on) {
    on = !!on;
    if (on === this._boxSelect) return;
    this._boxSelect = on;
    if (this.camera.isOrthographicCamera) this.makeControls();
  }

  /** Screen point (CSS px in the canvas) of a model point in mm — for winsel.js. */
  project(p) { return this.toScreen(p); }
  /** The view's cut as winsel.js planes (mm): kept where n·p + d ≥ 0. */
  cutPlanes() {
    if (this.mode === 'plan' && this.modeOpts.level) return [{ n: [0, 0, -1], d: this.modeOpts.level.z + 1500 }];
    if (this.mode === 'elevation' && this.modeOpts.grid) { const y = this.modeOpts.grid.at; return [{ n: [0, -1, 0], d: y + 1000 }, { n: [0, 1, 0], d: -(y - 1000) }]; }
    return [];
  }

  makeControls() {
    this.controls?.dispose();
    this.controls = new OrbitControls(this.camera, this.canvas);
    this.controls.enableDamping = false;
    this.controls.screenSpacePanning = true;
    if (this.camera.isOrthographicCamera) {
      this.controls.enableRotate = false;
      // with the Select tool a left drag draws a selection window: pan with the right or middle button
      this.controls.mouseButtons = { LEFT: this._boxSelect ? null : THREE.MOUSE.PAN, MIDDLE: this._boxSelect ? THREE.MOUSE.PAN : THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
      this.controls.touches = { ONE: THREE.TOUCH.PAN, TWO: THREE.TOUCH.DOLLY_PAN };
    }
    this.applyMouse();
    this.controls.addEventListener('change', () => { this.render(); this.updateHover(); });
  }
  /** The menu style's mouse on the controls (0.5 IP.3). Without a style (or with DetailCraft's own) nothing changes. */
  applyMouse() {
    const m = this._mouse, c = this.controls;
    if (!m || !c) return;
    c.zoomSpeed = m.zoomSpeed;
    if (this.camera.isOrthographicCamera) {
      // plan and elevations: the middle and right buttons pan only where the style says so (the left keeps the selection window)
      const b = c.mouseButtons;
      c.mouseButtons = { LEFT: b.LEFT, MIDDLE: this._boxSelect ? (panButton(1) ? THREE.MOUSE.PAN : null) : b.MIDDLE, RIGHT: panButton(2) ? THREE.MOUSE.PAN : null };
    } else {
      const ACT = { orbit: THREE.MOUSE.ROTATE, pan: THREE.MOUSE.PAN, zoom: THREE.MOUSE.DOLLY, none: null };
      const o = m.orbit3d;
      c.mouseButtons = o ? { LEFT: ACT[o.left], MIDDLE: ACT[o.middle], RIGHT: ACT[o.right] } : { LEFT: THREE.MOUSE.ROTATE, MIDDLE: THREE.MOUSE.DOLLY, RIGHT: THREE.MOUSE.PAN };
    }
  }

  applyTheme() {
    const cs = getComputedStyle(document.documentElement);
    const t = (n, d) => (cs.getPropertyValue(n).trim() || d);
    this.colors = {
      bg: t('--sheet', '#f3f6f8'), ink: t('--ink', '#17202b'), ink2: t('--ink-2', '#34404e'), grid: t('--line', '#7a8796'),
      column: t('--layer-violet', '#5b3cc4'), beam: t('--layer-cyan', '#00707e'), brace: t('--layer-green', '#17703a'),
      plate: t('--layer-orange', '#a84a00'), bolt: t('--layer-ochre', '#8a6200'), bar: t('--layer-red', '#b3122e'),
      concrete: t('--line', '#7a8796'), pick: t('--layer-blue', '#1e48c8'), sheet2: t('--sheet-2', '#ffffff'),
    };
    this.scene.background = new THREE.Color(this.colors.bg);
    this.mats = {};
    const lam = (c, o = {}) => new THREE.MeshLambertMaterial({ color: new THREE.Color(c), side: THREE.DoubleSide, polygonOffset: true, polygonOffsetFactor: 1, polygonOffsetUnits: 1, ...o });
    for (const k of ['column', 'beam', 'brace', 'plate', 'bolt', 'bar']) this.mats[k] = lam(this.colors[k]);
    this.mats.concrete = lam(this.colors.concrete, { transparent: true, opacity: 0.22, depthWrite: false });
    this.mats.hole = new THREE.MeshBasicMaterial({ color: new THREE.Color(this.colors.ink) });
    this.mats.pick = lam(this.colors.pick, { emissive: new THREE.Color(this.colors.pick), emissiveIntensity: 0.35 });
    this.mats.pickGlass = lam(this.colors.pick, { transparent: true, opacity: 0.35, depthWrite: false });
    this.mats.edge = new THREE.LineBasicMaterial({ color: new THREE.Color(this.colors.ink), transparent: true, opacity: 0.6 });
    this.mats.grid = new THREE.LineBasicMaterial({ color: new THREE.Color(this.colors.grid), transparent: true, opacity: 0.8 });
    this.mats.gridFaint = new THREE.LineBasicMaterial({ color: new THREE.Color(this.colors.grid), transparent: true, opacity: 0.3 });
    this.mats.node = new THREE.PointsMaterial({ color: new THREE.Color(this.colors.ink2), size: 5, sizeAttenuation: false });
    this.mats.hover = new THREE.MeshBasicMaterial({ color: new THREE.Color(this.colors.pick), depthTest: false, transparent: true, opacity: 0.9 });
    this.mats.pickLine = new THREE.LineBasicMaterial({ color: new THREE.Color(this.colors.pick) });
    this.mats.rubber = new THREE.LineDashedMaterial({ color: new THREE.Color(this.colors.pick), dashSize: 150, gapSize: 90, depthTest: false });
    if (this.clipPlanes) this.applyClipping();
    this.render();
  }

  resize() {
    // the canvas's own box (it fills the stage in classic; a workspace layout insets it between its blocks), else the stage's
    const host = this.canvas.clientWidth && this.canvas.clientHeight ? this.canvas : this.canvas.parentElement;
    const w = Math.max(1, host.clientWidth), h = Math.max(1, host.clientHeight);
    this.renderer.setSize(w, h, false);
    this.persp.aspect = w / h;
    this.persp.updateProjectionMatrix();
    this.fitOrtho(false);
    this.render();
  }

  render() {
    if (this._raf) return;
    this._raf = requestAnimationFrame(() => { this._raf = 0; this.renderer.render(this.scene, this.camera); this.onRender?.(); });
  }
  renderNow() { this.renderer.render(this.scene, this.camera); }

  clearGroup(g) {
    g.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.isBatchedMesh) o.dispose(); if (o.material?.map && !o.material.map.userData.kept) o.material.map.dispose(); });
    g.clear();
  }

  /** Rebuild everything from the model; after an edit that changed only some parts, just those parts (0.11 PERF.36, see updateParts). */
  setModel(state, built, marks) {
    if (this.updateParts(state, built, marks)) return;
    this.inc = null;
    this.state = state; this.built = built; this.marks = marks;
    this.clearGroup(this.root);
    this.recByKey = null;
    this.pickables = [];
    this.box.makeEmpty();
    const addPick = (mesh, ref, matKey) => { mesh.userData.ref = ref; mesh.userData.mat = matKey; this.pickables.push(mesh); this.root.add(mesh); };

    // grids and levels
    const gx = state.grids.x, gy = state.grids.y;
    const levels = state.levels;
    if (gx.length && gy.length) {
      const pad = 1500;
      const x0 = gx[0].at - pad, x1 = gx[gx.length - 1].at + pad, y0 = gy[0].at - pad, y1 = gy[gy.length - 1].at + pad;
      levels.forEach((lv, i) => {
        const pts = [];
        for (const g of gx) pts.push(g.at, y0, lv.z, g.at, y1, lv.z);
        for (const g of gy) pts.push(x0, g.at, lv.z, x1, g.at, lv.z);
        const geo = new THREE.BufferGeometry();
        geo.setAttribute('position', new THREE.Float32BufferAttribute(pts, 3));
        this.root.add(new THREE.LineSegments(geo, i === 0 ? this.mats.grid : this.mats.gridFaint));
        this.root.add(this.label(lv.name + ' (' + Math.round(lv.z) + ')', [x1 + 300, y0, lv.z], 'start'));
      });
      const z0 = levels[0].z;
      for (const g of gx) { this.root.add(this.bubble(g.label, [g.at, y0 - 700, z0])); }
      for (const g of gy) { this.root.add(this.bubble(g.label, [x0 - 700, g.at, z0])); }
      this.box.expandByPoint(new THREE.Vector3(x0, y0, levels[0].z)).expandByPoint(new THREE.Vector3(x1, y1, levels[levels.length - 1].z));
    }
    // nodes
    this.nodeList = gridNodes(state);
    if (this.nodeList.length) {
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(this.nodeList.flatMap((n) => n.p), 3));
      this.nodePoints = new THREE.Points(geo, this.mats.node);
      this.root.add(this.nodePoints);
    }

    // parts
    const holeGeo = new THREE.CylinderGeometry(0.5, 0.5, 1, 14);
    holeGeo.rotateX(Math.PI / 2);          // axis along z
    const holes = [];
    const shown = (ph) => !this.hiddenPhases.has(ph || 1);
    // 0.10 PERF.36: a scene of one Mesh + one edge object per part is 2 draw calls a part (1,925 for 948 parts). With BatchedMesh the parts are one draw call per
    // material and all the edges one object; a selected part is drawn by a mesh of its own (see applySelection), so every material and pick stays what it was.
    const batch = this.batchParts !== false && typeof THREE.BatchedMesh === 'function';
    const recs = [], edgeChunks = [], partBox = new THREE.Box3();
    this.selMeshes = []; this.batches = [];
    for (const p of built.parts) {
      if (!shown(p.phase)) continue;
      const ent = this.partEntry(p), geo = ent.geo;   // 0.10 PERF.36: one geometry (and its edges) per profile, length and cuts, shared by the parts that are alike and kept between rebuilds
      const matKey = p.type === 'plate' ? 'plate' : p.type === 'stringer' ? 'beam' : p.type;
      const f = p.frame;
      const basis = new THREE.Matrix4().makeBasis(v3(f.u), v3(f.v), v3(f.x));
      basis.setPosition(new THREE.Vector3(...f.o).addScaledVector(v3(f.v), p.voff));
      const ref = p.member ? { kind: 'member', id: p.member } : p.stair ? { kind: 'stair', id: p.stair } : { kind: 'conn', id: p.conn };
      let rec = null;
      if (batch) {
        const ch = transformed(ent.edges, basis);
        edgeChunks.push(ch);
        rec = { p, ent, geo, basis, ref, matKey, shared: true, edges: ch, holes: [], wbox: null };
        recs.push(rec);
      } else {
        const m = new THREE.Mesh(geo, this.mats[matKey]);
        m.applyMatrix4(basis);
        addPick(m, ref, matKey);
        const edges = new THREE.LineSegments(ent.edgesGeo, this.mats.edge);
        edges.applyMatrix4(basis);
        this.root.add(edges);
      }
      const wbox = ent.bbox.clone().applyMatrix4(basis);
      partBox.union(wbox);   // the parts' box is kept apart from the rest (grids, footings, pictures) so an update can work it again; joined below
      if (rec) rec.wbox = wbox;
      const pr = p.profile;
      for (const h of p.holes) {
        // a dark plug through the face, a little proud of both sides
        let c, axis, len;
        if (h.face === 'web') { c = [pr.kind === 'C' ? -pr.bf / 2 + pr.tw / 2 : pr.kind === 'L' ? -pr.b / 2 + pr.t / 2 : 0, h.y, h.x]; axis = [1, 0, 0]; len = (pr.kind === 'RHS' ? pr.b : pr.kind === 'L' ? pr.t : pr.tw) + 2; }
        else if (h.face === 'plate') { c = [h.y, 0, h.x]; axis = [0, 1, 0]; len = pr.t + 2; }
        else { const s = h.face === 'top' ? 1 : -1, t = pr.kind === 'RHS' || pr.kind === 'L' ? pr.t : pr.tf; c = [h.y, s * (pr.depth / 2 - t / 2), h.x]; axis = [0, 1, 0]; len = t + 2; }
        const local = new THREE.Matrix4().compose(new THREE.Vector3(...c), new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...axis)), new THREE.Vector3(h.d, h.d, len));
        const hm = basis.clone().multiply(local);
        holes.push(hm);
        if (rec) rec.holes.push(hm);
      }
    }
    // the holes: room for more (an edit that adds parts draws their holes in it; PERF.36)
    let holeMesh = null;
    if (holes.length || batch) {
      holeMesh = new THREE.InstancedMesh(holeGeo, this.mats.hole, Math.max(1, batch ? holes.length + Math.max(256, Math.ceil(holes.length * 0.05)) : holes.length));
      holes.forEach((mx, i) => holeMesh.setMatrixAt(i, mx));
      holeMesh.count = holes.length;
      if (batch) holeMesh.frustumCulled = false;   // it grows in place (updateParts): no box worked once
      this.root.add(holeMesh);
    }
    // bolts and rods
    const bolts = built.bolts.filter((b) => shown(b.phase));
    let boltMesh = null;
    if (bolts.length) {
      const g = new THREE.CylinderGeometry(0.5, 0.5, 1, 12);
      g.translate(0, 0.5, 0);               // from the head along +y
      const im = new THREE.InstancedMesh(g, this.mats.bolt, bolts.length);
      bolts.forEach((b, i) => {
        const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v3(b.axis));
        im.setMatrixAt(i, new THREE.Matrix4().compose(v3(b.head), q, new THREE.Vector3(b.d, b.length, b.d)));
      });
      im.userData.bolts = bolts;
      im.visible = this.showBolts;
      addPick(im, null, 'bolt');
      boltMesh = im;
    }
    // footings and bars
    for (const ft of built.footings) {
      const f = ft.f;
      if (!shown(f.phase)) continue;
      const geo = new THREE.BoxGeometry(f.L, f.B, f.H);
      const m = new THREE.Mesh(geo, this.mats.concrete);
      m.position.set(f.x, f.y, f.top - f.H / 2);
      m.rotation.z = (f.rotation || 0) * Math.PI / 180;
      m.renderOrder = 2;
      addPick(m, { kind: 'footing', id: f.id }, 'concrete');
      const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo), this.mats.edge);
      e.position.copy(m.position); e.rotation.copy(m.rotation);
      this.root.add(e);
      m.updateMatrixWorld();
      this.box.union(new THREE.Box3().setFromObject(m).applyMatrix4(new THREE.Matrix4().makeScale(1 / MM, 1 / MM, 1 / MM)));
      for (const g of ft.bars) {
        const r = BARS.get(g.bar).db / 2;
        for (const set of g.sets) {
          const pts = barPolyline(g, set, 4).map((p) => v3(p));
          const path = new THREE.CurvePath();
          for (let i = 1; i < pts.length; i++) path.add(new THREE.LineCurve3(pts[i - 1], pts[i]));
          const make = () => new THREE.TubeGeometry(path, pts.length * 2, r, 6, false);
          if (batch) { const tg = make(); tg.deleteAttribute('uv'); recs.push({ geo: tg, basis: new THREE.Matrix4(), ref: { kind: 'footing', id: f.id }, matKey: 'bar', make }); }
          else addPick(new THREE.Mesh(make(), this.mats.bar), { kind: 'footing', id: f.id }, 'bar');
        }
      }
    }
    // reinforced concrete elements and their bars (0.9 RC.1, rc-detail.js): see-through bodies (openings cut), bars as tubes
    // (lines past 3000 bars, so a big slab stays quick); loose bars read from a file pick as themselves
    const rcb = built.rc;
    if (rcb) {
      const nBars = rcb.items.reduce((s, it) => s + it.res.groups.reduce((t2, g) => t2 + g.polys.length, 0), 0) + rcb.loose.reduce((s, g) => s + g.polys.length, 0);
      const tubes = nBars <= 3000;
      const drawBar = (pts, r, ref) => {
        const v = pts.map((p) => v3(p));
        if (!tubes) { const geo = new THREE.BufferGeometry().setFromPoints(v); const l = new THREE.Line(geo, this.mats.barLine || (this.mats.barLine = new THREE.LineBasicMaterial({ color: this.colors.bar }))); this.root.add(l); return; }
        const path = new THREE.CurvePath();
        for (let i = 1; i < v.length; i++) path.add(new THREE.LineCurve3(v[i - 1], v[i]));
        const make = () => new THREE.TubeGeometry(path, Math.max(2, v.length * 2), r, 6, false);
        if (batch) { const tg = make(); tg.deleteAttribute('uv'); recs.push({ geo: tg, basis: new THREE.Matrix4(), ref, matKey: 'bar', make }); }
        else addPick(new THREE.Mesh(make(), this.mats.bar), ref, 'bar');
      };
      for (const it of rcb.items) {
        const el = it.el;
        if (!shown(el.phase)) continue;
        const B = it.res.body, [a, b, c] = B.size;
        const shp = new THREE.Shape([new THREE.Vector2(0, 0), new THREE.Vector2(a, 0), new THREE.Vector2(a, b), new THREE.Vector2(0, b)]);
        for (const [u0, v0, u1, v1] of B.openings || []) shp.holes.push(new THREE.Path([new THREE.Vector2(u0, v0), new THREE.Vector2(u0, v1), new THREE.Vector2(u1, v1), new THREE.Vector2(u1, v0)]));
        const geo = new THREE.ExtrudeGeometry(shp, { depth: c, bevelEnabled: false });
        const basis = new THREE.Matrix4().makeBasis(v3(B.ex), v3(B.ey), v3(B.ez));
        basis.setPosition(new THREE.Vector3(...B.o));
        const m = new THREE.Mesh(geo, this.mats.concrete);
        m.applyMatrix4(basis);
        m.renderOrder = 2;
        addPick(m, { kind: 'rc', id: el.id }, 'concrete');
        const e = new THREE.LineSegments(new THREE.EdgesGeometry(geo), this.mats.edge);
        e.applyMatrix4(basis);
        this.root.add(e);
        geo.computeBoundingBox();
        this.box.union(geo.boundingBox.clone().applyMatrix4(basis));
        for (const g of it.res.groups) {
          const bar = rcBarOf(g.bar);
          for (const pts of g.polys) drawBar(tessellate(pts, g.rc, 4), bar.db / 2, { kind: 'rc', id: el.id });
        }
      }
      for (const g of rcb.loose) {
        const bar = rcBarOf(g.bar);
        g.polys.forEach((pts, i) => drawBar(tessellate(pts, g.rc, 4), bar.db / 2, { kind: 'rcbar', id: g.ids[i] }));
        for (const pts of g.polys) for (const p of pts) this.box.expandByPoint(v3(p));
      }
    }
    const edgeLines = recs.length ? this.addBatches(recs, edgeChunks, batch) : null;
    this.addPictures(state.pictures || [], addPick);
    const restBox = this.box.clone();
    this.box.union(partBox);
    if (batch && edgeLines) {
      // what updateParts needs to change only the parts an edit touched: each shown part's record, the batches by material, the box of everything but the parts
      const parts = new Map();
      let h = 0;
      for (const r of recs) if (r.p) { r.holeOff = h; h += r.holes.length; parts.set(r.p, r); }
      this.inc = { key: this.staticKey(state), mats: this.mats, parts, edgeLines, holeMesh, holeUsed: holes.length, boltMesh, boltNums: boltMesh ? boltNumbers(bolts) : null,
        byMat: new Map(this.batches.map((bm) => [bm.userData.mat, bm])), restBox, changes: 0 };
    }
    this.applySelection();
    this.applyClipping();
    if (!this.fitted && !this.box.isEmpty()) { this.fit(); this.fitted = true; }
    this.render();
  }

  /** What a scene holds besides the steel parts and bolts: when this text is the same, an update may keep all of it (0.11 PERF.36). */
  staticKey(state) {
    return JSON.stringify([state.grids, state.levels, state.footings, state.rc || null, (state.pictures || []).map((p) => [p.id, p.hash, p.x, p.y, p.z, p.px, p.mmPerPx, p.opacity, !!this.pictureSrc?.(p.hash)]),
      [...this.hiddenPhases].sort(), this.showBolts, this.mode]);
  }

  /**
   * 0.11 PERF.36: after an edit, change only the parts that changed. build() hands back the same part object for a part an edit did not touch (its cache),
   * so the parts that went are the old objects not in the new list and the new ones are those not in the old: their batch instances, edge lines and holes
   * are taken out and put in; the rest of the scene (and every other instance) stays as it is. Bolts are compared number by number and only those that moved
   * are set again. Returns false (and the caller rebuilds everything) when anything else changed (grids, levels, footings, concrete, pictures, phases shown,
   * the theme, the bolts switch), when there is no room left, or when the edit touched more than a quarter of the parts.
   * The picture is the same as a rebuild's: the same instances with the same matrices and geometry, the same edge segments and hole matrices; only their
   * order in the buffers differs (a part that went leaves a gap: its instance is deleted, its edge segments are folded to one point, its holes to nothing).
   */
  updateParts(state, built, marks) {
    const inc = this.inc;
    if (!inc || this.batchParts === false || !built || inc.mats !== this.mats || inc.key !== this.staticKey(state)) return false;
    const shown = (ph) => !this.hiddenPhases.has(ph || 1);
    const now = [];
    for (const p of built.parts) if (shown(p.phase)) now.push(p);
    const keep = new Set();
    const add = [];
    for (const p of now) { if (inc.parts.has(p)) keep.add(p); else add.push(p); }
    const gone = [];
    for (const [p, r] of inc.parts) if (!keep.has(p)) gone.push(r);
    if (add.length + gone.length > Math.max(64, now.length / 4)) return false;
    // room: instances in each batch, vertices for geometries not in it yet, edge floats, hole matrices
    const pos = inc.edgeLines.geometry.attributes.position, arr = pos.array;
    const prepared = [];
    let edgeNeed = 0, holeNeed = 0;
    const needBy = new Map();
    for (const p of add) {
      const ent = this.partEntry(p);
      const matKey = p.type === 'plate' ? 'plate' : p.type === 'stringer' ? 'beam' : p.type;
      const bm = inc.byMat.get(matKey);
      if (!bm) return false;
      const nb = needBy.get(bm) || { inst: 0, v: 0, i: 0, geos: new Set() };
      nb.inst++;
      if (!bm.userData.gids.has(ent.geo) && !nb.geos.has(ent.geo)) { nb.geos.add(ent.geo); nb.v += ent.geo.attributes.position.count; nb.i += ent.geo.index ? ent.geo.index.count : 0; }
      needBy.set(bm, nb);
      edgeNeed += ent.edges.length;
      holeNeed += p.holes.length;
      prepared.push({ p, ent, matKey, bm });
    }
    for (const [bm, nb] of needBy) {
      // a deleted instance's id is used again; a geometry needs fresh room at the end of the batch's buffers
      if (bm.instanceCount + nb.inst > bm.maxInstanceCount) return false;
      if (nb.v > bm.unusedVertexCount || (bm.geometry.index && nb.i > bm.unusedIndexCount)) return false;
    }
    const usedE = inc.edgeLines.geometry.userData.used;
    if (usedE + edgeNeed > arr.length || inc.holeUsed + holeNeed > inc.holeMesh.instanceMatrix.count) return false;
    const bolts = built.bolts.filter((b) => shown(b.phase));
    if (!!inc.boltMesh !== !!bolts.length) return false;

    // the selection's parts go back into their batches first (a deleted instance cannot be shown again)
    for (const r of this.batchHidden || []) r.bm.setVisibleAt(r.iid, true);
    this.batchHidden = [];
    const zero = new THREE.Matrix4().makeScale(0, 0, 0);
    // the bytes that go to the GPU: one range per part changed (a part that went sits anywhere in the buffer; one range from it to the end would send nearly all of it)
    const eR = [], hR = [];
    const touchE = (a, b) => eR.push([a, b - a]);
    const touchH = (a, b) => hR.push([a * 16, (b - a) * 16]);
    for (const r of gone) {
      r.bm.deleteInstance(r.iid);
      r.bm.userData.refs[r.iid] = undefined;
      const len = r.edges.length;
      if (len) { const x = arr[r.edgeOff], y = arr[r.edgeOff + 1], z = arr[r.edgeOff + 2]; for (let i = r.edgeOff; i < r.edgeOff + len; i += 3) { arr[i] = x; arr[i + 1] = y; arr[i + 2] = z; } touchE(r.edgeOff, r.edgeOff + len); }
      for (let i = 0; i < r.holes.length; i++) inc.holeMesh.setMatrixAt(r.holeOff + i, zero);
      if (r.holes.length) touchH(r.holeOff, r.holeOff + r.holes.length);
      inc.parts.delete(r.p);
      const k = r.ref.kind + ':' + r.ref.id, l = this.recByKey.get(k);
      if (l) { const j = l.indexOf(r); if (j >= 0) l.splice(j, 1); if (!l.length) this.recByKey.delete(k); }
    }
    let at = usedE;
    for (const { p, ent, matKey, bm } of prepared) {
      const f = p.frame;
      const basis = new THREE.Matrix4().makeBasis(v3(f.u), v3(f.v), v3(f.x));
      basis.setPosition(new THREE.Vector3(...f.o).addScaledVector(v3(f.v), p.voff));
      const ref = p.member ? { kind: 'member', id: p.member } : p.stair ? { kind: 'stair', id: p.stair } : { kind: 'conn', id: p.conn };
      let gid = bm.userData.gids.get(ent.geo);
      if (gid === undefined) { gid = bm.addGeometry(ent.geo); bm.userData.gids.set(ent.geo, gid); }
      const iid = bm.addInstance(gid);
      bm.setMatrixAt(iid, basis);
      bm.userData.refs[iid] = ref;
      const ch = transformed(ent.edges, basis);
      arr.set(ch, at);
      const r = { p, ent, geo: null, basis, ref, matKey, shared: true, edges: ch, edgeOff: at, holes: [], holeOff: inc.holeUsed, wbox: ent.bbox.clone().applyMatrix4(basis), bm, iid };
      touchE(at, at + ch.length);
      at += ch.length;
      const pr = p.profile;
      for (const h of p.holes) {   // as the rebuild draws them
        let c, axis, len;
        if (h.face === 'web') { c = [pr.kind === 'C' ? -pr.bf / 2 + pr.tw / 2 : pr.kind === 'L' ? -pr.b / 2 + pr.t / 2 : 0, h.y, h.x]; axis = [1, 0, 0]; len = (pr.kind === 'RHS' ? pr.b : pr.kind === 'L' ? pr.t : pr.tw) + 2; }
        else if (h.face === 'plate') { c = [h.y, 0, h.x]; axis = [0, 1, 0]; len = pr.t + 2; }
        else { const sg = h.face === 'top' ? 1 : -1, t = pr.kind === 'RHS' || pr.kind === 'L' ? pr.t : pr.tf; c = [h.y, sg * (pr.depth / 2 - t / 2), h.x]; axis = [0, 1, 0]; len = t + 2; }
        const local = new THREE.Matrix4().compose(new THREE.Vector3(...c), new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...axis)), new THREE.Vector3(h.d, h.d, len));
        const hm = basis.clone().multiply(local);
        r.holes.push(hm);
        inc.holeMesh.setMatrixAt(inc.holeUsed, hm);
        inc.holeUsed++;
      }
      if (r.holes.length) touchH(r.holeOff, inc.holeUsed);
      inc.parts.set(p, r);
      const k = ref.kind + ':' + ref.id;
      if (!this.recByKey.has(k)) this.recByKey.set(k, []);
      this.recByKey.get(k).push(r);
    }
    inc.edgeLines.geometry.userData.used = at;
    inc.edgeLines.geometry.setDrawRange(0, at / 3);
    if (eR.length) { for (const [a, n] of eR) pos.addUpdateRange(a, n); pos.needsUpdate = true; }
    inc.holeMesh.count = inc.holeUsed;
    if (hR.length) { for (const [a, n] of hR) inc.holeMesh.instanceMatrix.addUpdateRange(a, n); inc.holeMesh.instanceMatrix.needsUpdate = true; }
    // bolts: the ones whose head, axis, diameter or length moved are set again; a different count is a new bolt mesh
    if (inc.boltMesh) {
      const nums = boltNumbers(bolts), old = inc.boltNums, im = inc.boltMesh;
      if (nums.length === old.length) {
        const runs = [];   // runs of moved bolts, each sent on its own
        for (let i = 0, n = bolts.length; i < n; i++) {
          let same = true;
          for (let k = i * 8; k < i * 8 + 8; k++) if (nums[k] !== old[k]) { same = false; break; }
          if (same) continue;
          const b = bolts[i], q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v3(b.axis));
          im.setMatrixAt(i, new THREE.Matrix4().compose(v3(b.head), q, new THREE.Vector3(b.d, b.length, b.d)));
          const last = runs[runs.length - 1];
          if (last && last[1] === i) last[1] = i + 1; else runs.push([i, i + 1]);
        }
        if (runs.length) { for (const [a, b] of runs) im.instanceMatrix.addUpdateRange(a * 16, (b - a) * 16); im.instanceMatrix.needsUpdate = true; im.boundingSphere = null; im.boundingBox = null; }
        im.userData.bolts = bolts;
      } else {
        const g = im.geometry;
        const nm = new THREE.InstancedMesh(g, this.mats.bolt, bolts.length);
        bolts.forEach((b, i) => {
          const q = new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 1, 0), v3(b.axis));
          nm.setMatrixAt(i, new THREE.Matrix4().compose(v3(b.head), q, new THREE.Vector3(b.d, b.length, b.d)));
        });
        nm.userData.bolts = bolts; nm.userData.ref = null; nm.userData.mat = 'bolt';
        nm.visible = im.visible;
        this.root.remove(im); im.dispose();
        this.pickables[this.pickables.indexOf(im)] = nm;
        this.root.add(nm);
        inc.boltMesh = nm;
      }
      inc.boltNums = nums;
    }
    for (const bm of needBy.keys()) { bm.boundingBox = null; bm.boundingSphere = null; }
    for (const r of gone) { r.bm.boundingBox = null; r.bm.boundingSphere = null; }
    // the box: everything but the parts (kept from the rebuild) and every part shown now
    this.box.copy(inc.restBox);
    for (const r of inc.parts.values()) this.box.union(r.wbox);
    inc.changes += add.length + gone.length;
    this.state = state; this.built = built; this.marks = marks;
    this.lastUpdate = { added: add.length, removed: gone.length, kept: keep.size };   // for tests
    this.applySelection();
    this.render();
    return true;
  }

  /** The geometry of a part with its edge lines (local, 35 degrees) and box, made once per profile, length and cuts (PERF.36). Shared: never edited by a caller. */
  partEntry(p) {
    if (!this.geoCache) this.geoCache = new Map();
    const pr = p.profile, loops = pr.loops;
    // the profile is told apart by its name and its measured shape (a model's own profile may share a catalog name): width, depth, area and the outline's size
    const key = pr.name + '|' + pr.width + '|' + pr.depth + '|' + pr.area + '|' + loops.length + '|' + loops.reduce((n, l) => n + l.length, 0) + '|' + Math.round(p.length * 1000)
      + '|' + (p.cuts.length ? JSON.stringify(p.cuts) : '') + '|' + (p.endCuts ? JSON.stringify(p.endCuts) : '');
    let ent = this.geoCache.get(key);
    if (!ent) {
      if (this.geoCache.size > 6000) this.geoCache.clear();
      const geo = partGeometry(p);
      geo.deleteAttribute('uv');   // a batch holds geometries of one attribute set; mitred and coped parts have no uv, and no part material uses one
      const eg = new THREE.EdgesGeometry(geo, 35);
      geo.computeBoundingBox();
      ent = { geo, edgesGeo: eg, edges: eg.attributes.position.array, bbox: geo.boundingBox.clone() };
      this.geoCache.set(key, ent);
    }
    return ent;
  }

  /**
   * The shown parts (and footing / RC bar tubes) as one BatchedMesh per material and one object for all the parts' edges (PERF.36). `recs`: [{ p | make, geo, basis, ref, matKey }]; `make()` builds a tube's geometry again for the picked copy.
   * 0.11 PERF.36: parts that are alike share one geometry in their batch (an instance each), and every batch, the edge lines and the holes keep room for more,
   * so an edit that changes a few parts changes those instances only (updateParts). `room` false: exactly sized, as before.
   */
  addBatches(recs, edgeChunks, room = true) {
    const byMat = new Map();
    for (const r of recs) { if (!byMat.has(r.matKey)) byMat.set(r.matKey, []); byMat.get(r.matKey).push(r); }
    this.recByKey = new Map();
    this.batchHidden = [];
    for (const [matKey, list] of byMat) {
      let nv = 0, ni = 0;
      const once = new Set();
      for (const r of list) { if (r.shared) { if (once.has(r.geo)) continue; once.add(r.geo); } nv += r.geo.attributes.position.count; ni += r.geo.index ? r.geo.index.count : 0; }
      const extra = room ? Math.max(64, Math.ceil(list.length * 0.05)) : 0, gx = (n) => (room ? n + Math.max(20000, Math.ceil(n * 0.05)) : n);
      const bm = new THREE.BatchedMesh(list.length + extra, gx(nv), gx(ni), this.mats[matKey]);
      bm.sortObjects = false;
      const refs = [], gids = new Map();
      for (const r of list) {
        let gid = r.shared ? gids.get(r.geo) : undefined;
        if (gid === undefined) { gid = bm.addGeometry(r.geo); if (r.shared) gids.set(r.geo, gid); }
        const iid = bm.addInstance(gid);
        bm.setMatrixAt(iid, r.basis);
        refs[iid] = r.ref; r.bm = bm; r.iid = iid;
        if (!r.shared) r.geo.dispose();   // the batch holds the vertices (a shared part geometry stays in the cache)
        r.geo = null;
        const k = r.ref.kind + ':' + r.ref.id;
        if (!this.recByKey.has(k)) this.recByKey.set(k, []);
        this.recByKey.get(k).push(r);
      }
      bm.userData.refs = refs; bm.userData.mat = matKey; bm.userData.gids = gids;
      this.root.add(bm); this.pickables.push(bm); this.batches.push(bm);
    }
    let n = 0;
    for (const c of edgeChunks) n += c.length;
    const all = new Float32Array(room ? n + Math.max(60000, Math.ceil(n * 0.05 / 6) * 6) : n);   // room in whole segments (6 floats): a part-vertex tail would read as NaN
    let at = 0;
    const withEdges = recs.filter((r) => r.edges);
    for (let i = 0; i < edgeChunks.length; i++) { const c = edgeChunks[i]; all.set(c, at); if (withEdges[i]) { withEdges[i].edgeOff = at; } at += c.length; }
    const eg = new THREE.BufferGeometry();
    eg.setAttribute('position', new THREE.BufferAttribute(all, 3));
    eg.setDrawRange(0, at / 3);
    eg.userData.used = at;
    const lines = new THREE.LineSegments(eg, this.mats.edge);
    if (room) lines.frustumCulled = false;   // it grows in place (updateParts): no sphere worked once
    this.root.add(lines);
    return lines;
  }

  /** Reference pictures (D8.15): a textured plane per picture, flat on its level, under everything else. */
  addPictures(list, addPick) {
    this.picMats = [];
    const used = new Set();
    for (const p of list) {
      const src = this.pictureSrc?.(p.hash);
      if (!src) continue;
      used.add(p.hash);
      let tex = this.picTex.get(p.hash);
      if (!tex) {
        tex = new THREE.TextureLoader().load(src, () => this.render());
        tex.colorSpace = THREE.SRGBColorSpace;
        tex.userData.kept = true;
        this.picTex.set(p.hash, tex);
      }
      const w = p.px[0] * p.mmPerPx, h = p.px[1] * p.mmPerPx;
      const mat = new THREE.MeshBasicMaterial({ map: tex, transparent: true, opacity: p.opacity, depthWrite: false, side: THREE.DoubleSide });
      const m = new THREE.Mesh(new THREE.PlaneGeometry(w, h), mat);
      m.position.set(p.x, p.y, p.z - 2);   // 2 mm under the level: the grid, the steel and their edges draw over it
      m.renderOrder = -1;
      m.userData.picMat = mat;
      addPick(m, { kind: 'picture', id: p.id }, 'picture');
      const q = [[-w / 2, -h / 2], [w / 2, -h / 2], [w / 2, h / 2], [-w / 2, h / 2]].flatMap(([a, b]) => [p.x + a, p.y + b, p.z - 1]);
      const geo = new THREE.BufferGeometry();
      geo.setAttribute('position', new THREE.Float32BufferAttribute(q, 3));
      const outline = new THREE.LineLoop(geo, this.mats.gridFaint);
      m.userData.outline = outline;
      this.root.add(outline);
      this.picMats.push(mat);
      this.box.expandByPoint(new THREE.Vector3(p.x - w / 2, p.y - h / 2, p.z)).expandByPoint(new THREE.Vector3(p.x + w / 2, p.y + h / 2, p.z));
    }
    for (const [h, tex] of this.picTex) if (!used.has(h)) { tex.dispose(); this.picTex.delete(h); }
  }

  label(text, p, align = 'center', size = 340) {
    const c = document.createElement('canvas');
    const ctx = c.getContext('2d');
    const font = '600 40px system-ui, sans-serif';
    ctx.font = font;
    const w = Math.ceil(ctx.measureText(text).width) + 16;
    c.width = w; c.height = 56;
    ctx.font = font;
    ctx.fillStyle = this.colors.ink2;
    ctx.textBaseline = 'middle';
    ctx.fillText(text, 8, 28);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
    s.scale.set(size * w / 56, size, 1);
    s.center.set(align === 'left' ? 1 : align === 'start' ? 0 : 0.5, 0.5);
    s.position.set(...p);
    s.renderOrder = 5;
    return s;
  }
  bubble(text, p) {
    const c = document.createElement('canvas');
    c.width = c.height = 96;
    const ctx = c.getContext('2d');
    ctx.strokeStyle = this.colors.ink2; ctx.lineWidth = 5;
    ctx.fillStyle = this.colors.sheet2;
    ctx.beginPath(); ctx.arc(48, 48, 42, 0, Math.PI * 2); ctx.fill(); ctx.stroke();
    ctx.fillStyle = this.colors.ink;
    ctx.font = '700 ' + (text.length > 2 ? 30 : 44) + 'px system-ui, sans-serif';   // i18n-ignore (a CSS font)
    ctx.textAlign = 'center'; ctx.textBaseline = 'middle';
    ctx.fillText(text, 48, 50);
    const tex = new THREE.CanvasTexture(c);
    tex.colorSpace = THREE.SRGBColorSpace;
    const s = new THREE.Sprite(new THREE.SpriteMaterial({ map: tex, depthTest: false, transparent: true }));
    s.scale.set(700, 700, 1);
    s.position.set(...p);
    s.renderOrder = 5;
    return s;
  }

  setSelection(refs) { this.selection = refs || []; this.applySelection(); this.render(); }
  applySelection() {
    const key = (r) => r && r.kind + ':' + r.id;
    const sel = new Set(this.selection.map(key));
    if (this.recByKey) {   // batched parts: the picked ones leave their batch and are drawn, and picked, as meshes of their own
      for (const r of this.batchHidden) r.bm.setVisibleAt(r.iid, true);
      this.batchHidden = [];
      for (const m of this.selMeshes) { this.root.remove(m); m.geometry.dispose(); }
      this.pickables = this.pickables.filter((m) => !this.selMeshes.includes(m));
      this.selMeshes = [];
      for (const k of sel) for (const r of this.recByKey.get(k) || []) {
        r.bm.setVisibleAt(r.iid, false); this.batchHidden.push(r);
        const m = new THREE.Mesh(r.make ? r.make() : partGeometry(r.p), this.mats.pick);
        m.applyMatrix4(r.basis);
        m.userData.ref = r.ref; m.userData.mat = r.matKey;
        this.root.add(m); this.pickables.push(m); this.selMeshes.push(m);
      }
    }
    for (const m of this.pickables) {
      if (!m.userData.ref) continue;
      const on = sel.has(key(m.userData.ref));
      if (m.userData.mat === 'picture') { m.userData.outline.material = on ? this.mats.pickLine : this.mats.gridFaint; continue; }   // the picture stays itself; its outline shows it is picked
      m.material = on ? (m.userData.mat === 'concrete' ? this.mats.pickGlass : this.mats.pick) : this.mats[m.userData.mat];
    }
  }

  /** Plan: look down on a level (things more than 1.5 m above it are cut away). Elevation: look north at a lettered grid line (±1 m kept). */
  setMode(mode, opts = {}) {
    this.mode = mode; this.modeOpts = opts;
    this.camera = mode === '3d' ? this.persp : this.ortho;
    if (mode === 'plan') this.ortho.up.set(0, 1, 0);
    if (mode === 'elevation') this.ortho.up.set(0, 0, 1);
    this.makeControls();
    this.applyClipping();
    this.fit();
  }
  applyClipping() {
    const planes = [];
    if (this.mode === 'plan' && this.modeOpts.level) planes.push(new THREE.Plane(new THREE.Vector3(0, 0, -1), (this.modeOpts.level.z + 1500) * MM));
    if (this.mode === 'elevation' && this.modeOpts.grid) {
      const y = this.modeOpts.grid.at;
      planes.push(new THREE.Plane(new THREE.Vector3(0, -1, 0), (y + 1000) * MM), new THREE.Plane(new THREE.Vector3(0, 1, 0), -(y - 1000) * MM));
    }
    this.clipPlanes = planes;
    for (const [k, m] of Object.entries(this.mats || {})) if (!['hover', 'rubber', 'node'].includes(k)) { m.clippingPlanes = planes; m.needsUpdate = true; }
    for (const m of this.picMats || []) { m.clippingPlanes = planes; m.needsUpdate = true; }
    this.render();
  }

  /** Nodes that can be picked in this view. */
  activeNodes() {
    const list = this.nodeList || [];
    if (this.mode === 'plan' && this.modeOpts.level) return list.filter((n) => Math.abs(n.p[2] - this.modeOpts.level.z) < 0.5);
    if (this.mode === 'elevation' && this.modeOpts.grid) return list.filter((n) => Math.abs(n.p[1] - this.modeOpts.grid.at) < 0.5);
    return list;
  }

  fit() {
    if (this.box.isEmpty()) this.box.set(new THREE.Vector3(-5000, -5000, 0), new THREE.Vector3(5000, 5000, 3000));
    const b = this.box.clone(); b.min.multiplyScalar(MM); b.max.multiplyScalar(MM);
    const c = b.getCenter(new THREE.Vector3()), size = b.getSize(new THREE.Vector3());
    if (this.mode === '3d') {
      const radius = Math.max(size.length() / 2, 1);
      const dist = radius / Math.sin(THREE.MathUtils.degToRad(this.persp.fov / 2)) * 0.85;
      const d = new THREE.Vector3(-0.9, -1.3, 0.85).normalize();
      this.persp.near = Math.max(dist / 1000, 0.01); this.persp.far = dist * 30;
      this.persp.updateProjectionMatrix();
      this.persp.position.copy(c).addScaledVector(d, dist);
      this.controls.target.copy(c);
    } else {
      const plan = this.mode === 'plan';
      if (plan) {
        const z = (this.modeOpts.level?.z ?? 0) * MM;
        this.ortho.position.set(c.x, c.y, z + 100);
        this.controls.target.set(c.x, c.y, z);
      } else {
        const y = (this.modeOpts.grid?.at ?? c.y / MM) * MM;
        this.ortho.position.set(c.x, y - 100, c.z);
        this.controls.target.set(c.x, y, c.z);
      }
      this.orthoSpan = plan ? [size.x, size.y] : [size.x, Math.max(size.z, 1)];
      this.fitOrtho(true);
    }
    this.controls.update();
    this.render();
    this.updateHover();
  }
  fitOrtho(reset) {
    if (!this.orthoSpan) return;
    const host = this.canvas.parentElement;
    const aspect = Math.max(1, host.clientWidth) / Math.max(1, host.clientHeight);
    const [w, h] = this.orthoSpan;
    const half = Math.max(w / aspect, h) / 2 * 1.15 + 0.5;
    this.ortho.left = -half * aspect; this.ortho.right = half * aspect; this.ortho.top = half; this.ortho.bottom = -half;
    if (reset) this.ortho.zoom = 1;
    this.ortho.near = -1000; this.ortho.far = 1000;
    this.ortho.updateProjectionMatrix();
  }

  /** Brings a model point (mm) to the middle of the view, close up (a clash, D15). */
  focusPoint(p, span = 3000) {
    const c = new THREE.Vector3(p[0] * MM, p[1] * MM, p[2] * MM);
    if (this.mode === '3d') {
      const dir = this.persp.position.clone().sub(this.controls.target).normalize();
      this.controls.target.copy(c);
      this.persp.position.copy(c).addScaledVector(dir, span * MM);
    } else {
      const off = this.ortho.position.clone().sub(this.controls.target);
      this.controls.target.copy(c);
      this.ortho.position.copy(c).add(off);
      const [w, h] = this.orthoSpan || [1, 1];
      this.ortho.zoom = Math.max(1, Math.max(w, h) / (span * MM));
      this.ortho.updateProjectionMatrix();
    }
    this.controls.update();
    this.render();
  }

  /** Screen position (CSS px within the canvas) of a model point (mm). */
  toScreen(p) {
    const v = new THREE.Vector3(p[0] * MM, p[1] * MM, p[2] * MM).project(this.camera);
    const r = this.canvas.getBoundingClientRect();
    return { x: (v.x + 1) / 2 * r.width, y: (1 - v.y) / 2 * r.height, behind: v.z > 1 };
  }

  nearestNode(px, py, touch = false) {
    let best = null, bd = touch ? SNAP_TOUCH : SNAP_PX;
    for (const n of this.activeNodes()) {
      const s = this.toScreen(n.p);
      if (s.behind) continue;
      const d = Math.hypot(s.x - px, s.y - py);
      if (d < bd) { bd = d; best = n; }
    }
    return best;
  }

  updateHover() {
    if (!this.placing || !this.lastPointer) { this.setHover(null); return; }
    this.setHover(this.nearestNode(this.lastPointer.x, this.lastPointer.y));
  }
  setHover(node) {
    const same = (a, b) => (a && b ? a.p.join() === b.p.join() : a === b);
    if (!same(node, this.hoverNode)) { this.hoverNode = node; this.onHoverNode(node); }
    this.drawOverlay();
  }
  drawOverlay() {
    this.clearGroup(this.overlay);
    if (this.placing && this.hoverNode) {
      const s = new THREE.Mesh(new THREE.SphereGeometry(140, 16, 12), this.mats.hover);
      s.position.set(...this.hoverNode.p);
      s.renderOrder = 20;
      this.overlay.add(s);
    }
    if (this.placing && this.ghost && this.hoverNode) {
      const o = this.hoverNode.p;
      const pts = this.ghost.flatMap(([a, b]) => [v3([a[0] + o[0], a[1] + o[1], a[2] + o[2]]), v3([b[0] + o[0], b[1] + o[1], b[2] + o[2]])]);
      const l = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), this.mats.rubber);
      l.computeLineDistances();
      l.renderOrder = 20;
      this.overlay.add(l);
    }
    if (this.partDrag?.moved) {
      const o = this.partDrag.offset;
      const pts = this.partDrag.ghost.flatMap(([a, b]) => [v3([a[0] + o[0], a[1] + o[1], a[2] + o[2]]), v3([b[0] + o[0], b[1] + o[1], b[2] + o[2]])]);
      const l = new THREE.LineSegments(new THREE.BufferGeometry().setFromPoints(pts), this.mats.rubber);
      l.computeLineDistances();
      l.renderOrder = 20;
      this.overlay.add(l);
      if (this.partDrag.node) {
        const s = new THREE.Mesh(new THREE.SphereGeometry(140, 16, 12), this.mats.hover);
        s.position.set(...this.partDrag.node);
        s.renderOrder = 20;
        this.overlay.add(s);
      }
    }
    if (this.placing && this.rubberFrom) {
      const to = this.hoverNode ? this.hoverNode.p : null;
      const a = new THREE.Mesh(new THREE.SphereGeometry(110, 16, 12), this.mats.hover);
      a.position.set(...this.rubberFrom);
      this.overlay.add(a);
      if (to) {
        const geo = new THREE.BufferGeometry().setFromPoints([v3(this.rubberFrom), v3(to)]);
        const l = new THREE.Line(geo, this.mats.rubber);
        l.computeLineDistances();
        l.renderOrder = 20;
        this.overlay.add(l);
      }
    }
    this.render();
  }

  /** The part under a canvas point (CSS px) and where the ray meets it (mm), clipping respected. */
  pickRef(l) {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(l.x / l.w * 2 - 1, -(l.y / l.h) * 2 + 1), this.camera);
    const planes = this.clipPlanes;
    const hits = ray.intersectObjects(this.pickables, false).filter((h) => h.object.visible && planes.every((pl) => pl.distanceToPoint(h.point) >= 0));
    if (this.debugPick) this.lastHits = hits.map((h) => ({ mat: h.object.userData.mat, ref: h.object.userData.refs ? h.object.userData.refs[h.batchId] : h.object.userData.ref, batchId: h.batchId, d: h.distance, p: [h.point.x / MM, h.point.y / MM, h.point.z / MM] }));   // for tests
    // solid steel before see-through concrete, and a reference picture (under everything) last
    const rank = (o) => (o.userData.mat === 'picture' ? 2 : o.userData.mat === 'concrete' ? 1 : 0);
    hits.sort((a, b) => rank(a.object) - rank(b.object) || a.distance - b.distance);
    const h = hits[0];
    if (!h) return { ref: null, point: null };
    let ref;
    if (h.object.userData.bolts) { const b = h.object.userData.bolts[h.instanceId]; ref = b && b.conn ? { kind: 'conn', id: b.conn } : null; }
    else if (h.object.userData.refs) ref = h.object.userData.refs[h.batchId] || null;   // a batch of parts: the instance hit
    else ref = h.object.userData.ref;
    return { ref, point: [h.point.x / MM, h.point.y / MM, h.point.z / MM] };
  }

  /** Where the pointer's ray meets a plane (normal n through p, mm); null when parallel. */
  rayPlane(l, n, p) {
    const ray = new THREE.Raycaster();
    ray.setFromCamera(new THREE.Vector2(l.x / l.w * 2 - 1, -(l.y / l.h) * 2 + 1), this.camera);
    const pl = new THREE.Plane().setFromNormalAndCoplanarPoint(v3(n).normalize(), v3(p).multiplyScalar(MM));
    const out = new THREE.Vector3();
    return ray.ray.intersectPlane(pl, out) ? [out.x / MM, out.y / MM, out.z / MM] : null;
  }

  bindPointer() {
    let down = null, win = null, drag = null, long = null;
    const touches = new Set();
    const stopLong = () => { if (long) { clearTimeout(long.timer); long = null; } };
    const local = (e) => { const r = this.canvas.getBoundingClientRect(); return { x: e.clientX - r.left, y: e.clientY - r.top, w: r.width, h: r.height }; };
    const box = document.createElement('div');
    box.className = 'dc-winsel';
    box.hidden = true;
    this.canvas.parentElement.append(box);
    this.winBox = box;
    // the lasso (W2.4, T.5): a freehand path instead of the rectangle when this.lasso is on (Settings)
    const NS = 'http://www.w3.org/2000/svg';
    const lsvg = document.createElementNS(NS, 'svg');
    lsvg.setAttribute('class', 'dc-lasso');
    lsvg.setAttribute('aria-hidden', 'true');
    const lpath = document.createElementNS(NS, 'path');
    lsvg.append(lpath);
    lsvg.style.display = 'none';
    this.canvas.parentElement.append(lsvg);
    const drawLasso = () => {
      const r = this.canvas.getBoundingClientRect(), pr = this.canvas.parentElement.getBoundingClientRect();
      Object.assign(lsvg.style, { display: 'block', left: (r.left - pr.left) + 'px', top: (r.top - pr.top) + 'px', width: r.width + 'px', height: r.height + 'px' });
      const pts = win.path;
      lpath.setAttribute('d', 'M' + pts.map((q) => q.x.toFixed(1) + ' ' + q.y.toFixed(1)).join(' L') + (win.mode === 'fence' ? '' : ' Z'));
      lsvg.setAttribute('class', 'dc-lasso is-' + (win.mode || 'window'));
    };
    const hideLasso = () => { lsvg.style.display = 'none'; };
    window.addEventListener('keydown', (e) => {
      if (!win || !win.lasso || !win.moved || e.key !== ' ') return;
      e.preventDefault(); e.stopPropagation();
      win.mode = nextMode(win.mode || 'window'); win.fixed = true;
      drawLasso();
    }, true);
    const drawBox = () => {
      const a = win.start, b = win.cur;
      Object.assign(box.style, { left: Math.min(a.x, b.x) + 'px', top: Math.min(a.y, b.y) + 'px', width: Math.abs(b.x - a.x) + 'px', height: Math.abs(b.y - a.y) + 'px' });
      box.classList.toggle('is-crossing', win.mode === 'crossing');
      box.hidden = false;
    };
    // capture phase: decided before OrbitControls sees the press (a Shift+drag in 3D must not pan)
    this.canvas.addEventListener('pointerdown', (e) => {
      if (e.button !== 0) return;
      const touch = e.pointerType === 'touch';
      if (touch) { touches.add(e.pointerId); if (touches.size > 1) { stopLong(); down = null; if (drag) this.cancelDrag(); return; } }
      down = { x: e.clientX, y: e.clientY, touch };
      // a long press with one finger: the app's Shift+click (add to the selection or take away)
      stopLong();
      if (touch && !this.placing && this._boxSelect) {
        const l0 = local(e);
        long = { x: e.clientX, y: e.clientY, timer: setTimeout(() => {
          const hit = this.pickRef(l0);
          long = null; down = null;
          if (drag) { drag = null; this.partDrag = null; this.canvas.classList.remove('is-dragging'); this.drawOverlay(); }
          if (hit.ref) this.onLongPress?.(hit.ref);
        }, LONG_MS) };
      }
      if (this.placing || !this._boxSelect || !e.isPrimary) return;
      // a press on a selected part: drag it (and the rest of the selection)
      if (this.dragParts && !e.shiftKey && !e.altKey) {
        const l = local(e);
        const hit = this.pickRef(l);
        if (hit.ref && this.dragParts.can(hit.ref)) {
          const got = this.dragParts.start(hit.ref);
          if (got) {
            const vertical = this.mode === '3d' && (e.ctrlKey || e.metaKey);
            const mask = this.mode === 'elevation' ? [1, 0, 1] : vertical ? [0, 0, 1] : [1, 1, 0];
            let n = this.mode === 'elevation' ? [0, 1, 0] : [0, 0, 1];
            if (vertical) { const d = new THREE.Vector3(); this.camera.getWorldDirection(d); n = [d.x, d.y, 0]; if (Math.hypot(n[0], n[1]) < 1e-6) n = [0, 1, 0]; }
            drag = { id: e.pointerId, start: { x: l.x, y: l.y }, grab: hit.point, n, mask, points: got.points, ref: hit.ref, moved: false };
            this.partDrag = { ghost: got.ghost, offset: [0, 0, 0], node: null, moved: false };
            e.stopImmediatePropagation();
            try { this.canvas.setPointerCapture(e.pointerId); } catch { /* fine */ }
            return;
          }
        }
      }
      if (touch || (this.mode === '3d' && !e.shiftKey)) return;    // a finger pans or turns; windows are for the mouse
      const l = local(e);
      win = { start: { x: l.x, y: l.y }, cur: { x: l.x, y: l.y }, mode: null, add: e.shiftKey, id: e.pointerId, moved: false, lasso: !!this.lasso, path: [{ x: l.x, y: l.y }], fixed: false };
      if (this.mode === '3d') e.stopImmediatePropagation();
      try { this.canvas.setPointerCapture(e.pointerId); } catch { /* fine */ }
    }, true);
    this.canvas.addEventListener('pointermove', (e) => {
      const l = local(e);
      if (e.pointerType !== 'touch') this.lastPointer = l;
      if (long && Math.hypot(e.clientX - long.x, e.clientY - long.y) > TAP_TOUCH) stopLong();
      if (drag && e.pointerId === drag.id) {
        if (!drag.moved && Math.hypot(l.x - drag.start.x, l.y - drag.start.y) > (e.pointerType === 'touch' ? TAP_TOUCH : TAP_PX)) { drag.moved = true; this.partDrag.moved = true; this.canvas.classList.add('is-dragging'); }
        if (!drag.moved) return;
        const q = this.rayPlane(l, drag.n, drag.grab);
        if (!q) return;
        const raw = [0, 1, 2].map((i) => (drag.mask[i] ? q[i] - drag.grab[i] : 0));
        const nodes = this.activeNodes().map((nd) => nd.p);
        const r = snapOffset(raw, drag.points, nodes, (p) => this.toScreen(p), { mask: drag.mask, px: SNAP_PX });
        this.partDrag.offset = r.offset; this.partDrag.node = r.node;
        this.dragParts.move(r.offset, r.node);
        this.drawOverlay();
        return;
      }
      if (win && e.pointerId === win.id) {
        win.cur = { x: l.x, y: l.y };
        if (!win.moved && Math.hypot(l.x - win.start.x, l.y - win.start.y) > 5) win.moved = true;
        if (win.lasso) {
          win.path.push({ x: l.x, y: l.y });
          if (win.moved) { if (!win.fixed) win.mode = win.mode || lassoMode(win.start, win.cur, 6); drawLasso(); }
          return;
        }
        if (win.moved) { win.mode = lassoMode(win.start, win.cur, 1) || win.mode || 'window'; drawBox(); }
        return;
      }
      if (this.placing) this.updateHover();
    });
    this.canvas.addEventListener('pointerleave', () => { this.lastPointer = null; if (this.placing) this.setHover(null); });
    const endWindow = (e, cancel) => {
      const w = win;
      win = null;
      box.hidden = true;
      hideLasso();
      try { this.canvas.releasePointerCapture(e.pointerId); } catch { /* fine */ }
      if (!cancel && w?.moved && w.lasso) { this.onWindow({ path: thin(w.path, 2), mode: w.mode || 'window', add: w.add, lasso: true }); return true; }
      if (!cancel && w?.moved) { this.onWindow({ path: [w.start, { x: w.cur.x, y: w.start.y }, w.cur, { x: w.start.x, y: w.cur.y }], mode: w.mode || 'window', add: w.add }); return true; }
      return false;
    };
    const endDrag = (e) => {
      const d = drag;
      drag = null;
      const off = this.partDrag?.offset || [0, 0, 0];
      this.partDrag = null;
      this.canvas.classList.remove('is-dragging');
      try { this.canvas.releasePointerCapture(e.pointerId); } catch { /* fine */ }
      this.drawOverlay();
      return { d, off };
    };
    this.canvas.addEventListener('pointercancel', (e) => { touches.delete(e.pointerId); stopLong(); if (win) endWindow(e, true); if (drag) { endDrag(e); this.dragParts?.cancel(); } down = null; });
    /** Esc while dragging a window: drop it. */
    this.cancelWindow = () => { if (!win) return false; win = null; box.hidden = true; hideLasso(); return true; };
    /** Esc while dragging parts: put them back (nothing was changed yet). */
    this.cancelDrag = () => { if (!drag) return false; drag = null; this.partDrag = null; this.canvas.classList.remove('is-dragging'); this.drawOverlay(); this.dragParts?.cancel(); return true; };
    this.canvas.addEventListener('pointerup', (e) => {
      touches.delete(e.pointerId);
      stopLong();
      if (drag && e.pointerId === drag.id) {
        const { d, off } = endDrag(e);
        down = null;
        if (d.moved) { if (off.some((v) => v !== 0)) this.dragParts.end(off); else this.dragParts.cancel(); }
        else this.onPick(d.ref, e);               // a press without a drag is a click
        return;
      }
      if (win && e.pointerId === win.id && endWindow(e, false)) { down = null; return; }
      if (e.button !== 0 || !down || Math.hypot(e.clientX - down.x, e.clientY - down.y) > (down.touch ? TAP_TOUCH : TAP_PX)) { down = null; return; }
      const touch = down.touch;
      down = null;
      const l = local(e);
      this.lastPointer = touch ? null : l;
      if (this.placing) {
        const n = this.nearestNode(l.x, l.y, touch);
        if (n) this.onNode(n);
        return;
      }
      this.onPick(this.pickRef(l).ref, e);
    });
  }

  snapshot() { this.renderNow(); return this.canvas.toDataURL('image/png'); }
}

const v3 = (a) => new THREE.Vector3(a[0], a[1], a[2]);
/** A bolt's numbers that place it (head, axis, diameter, length), 8 a bolt: an update sets again only the bolts whose numbers moved (0.11 PERF.36). */
function boltNumbers(bolts) {
  const out = new Float64Array(bolts.length * 8);
  bolts.forEach((b, i) => { const k = i * 8; out[k] = b.head[0]; out[k + 1] = b.head[1]; out[k + 2] = b.head[2]; out[k + 3] = b.axis[0]; out[k + 4] = b.axis[1]; out[k + 5] = b.axis[2]; out[k + 6] = b.d; out[k + 7] = b.length; });
  return out;
}

/** A part's solid in its own frame (u, v, x) — the profile extruded along +z, copes cut by splitting the length. */
/** A copy of triangle-soup positions (x y z ...) moved by the matrix m. */
function transformed(src, m) {
  const e = m.elements, out = new Float32Array(src.length);
  for (let i = 0; i < src.length; i += 3) {
    const x = src[i], y = src[i + 1], z = src[i + 2];
    out[i] = e[0] * x + e[4] * y + e[8] * z + e[12]; out[i + 1] = e[1] * x + e[5] * y + e[9] * z + e[13]; out[i + 2] = e[2] * x + e[6] * y + e[10] * z + e[14];
  }
  return out;
}

export function partGeometry(p) {
  const pr = p.profile, L = p.length;
  const copes = p.cuts.filter((c) => c.kind === 'cope');
  const cuts = new Set([0, L]);
  for (const c of copes) cuts.add(c.end === 'start' ? Math.min(c.length, L) : Math.max(L - c.length, 0));
  const xs = [...cuts].sort((a, b) => a - b);
  const geos = [];
  for (let i = 1; i < xs.length; i++) {
    const a = xs[i - 1], b = xs[i];
    if (b - a < 0.01) continue;
    const mid = (a + b) / 2;
    let loops = pr.loops;
    for (const c of copes) {
      const inCope = c.end === 'start' ? mid < c.length : mid > L - c.length;
      if (!inCope) continue;
      if (c.side === 'top') loops = loops.map((l, k) => (k === 0 ? clipLoopV(l, pr.depth / 2 - c.depth, true) : null)).filter((l) => l && l.length);
      else loops = loops.map((l, k) => (k === 0 ? clipLoopV(l, -pr.depth / 2 + c.depth, false) : null)).filter((l) => l && l.length);
    }
    if (!loops.length) continue;
    const shape = new THREE.Shape(loops[0].map(([u, v]) => new THREE.Vector2(u, v)));
    for (const h of loops.slice(1)) shape.holes.push(new THREE.Path(h.map(([u, v]) => new THREE.Vector2(u, v))));
    const g = new THREE.ExtrudeGeometry(shape, { depth: b - a, bevelEnabled: false, steps: 1, curveSegments: 1 });
    g.translate(0, 0, a);
    geos.push(g);
  }
  const g = geos.length === 1 ? geos[0] : mergeSimple(geos);
  if (p.endCuts) cutEnds(g, p);
  return g;
}

/** Plane-cut ends (mitres, 0.7.1 71.20): the end caps' vertices moved onto the cut faces, so the solid ends on the plane. */
function cutEnds(g, p) {
  const pos = g.attributes.position, L = p.length;
  for (let i = 0; i < pos.count; i++) {
    const z = pos.getZ(i);
    if (p.endCuts.start && Math.abs(z) < 1e-6) pos.setZ(i, endX(p, 'start', pos.getX(i), pos.getY(i)));
    else if (p.endCuts.end && Math.abs(z - L) < 1e-6) pos.setZ(i, endX(p, 'end', pos.getX(i), pos.getY(i)));
  }
  pos.needsUpdate = true;
  g.computeVertexNormals();
}

/** Merges non-indexed/indexed position+normal geometries (avoids pulling in BufferGeometryUtils). */
function mergeSimple(geos) {
  const pos = [], nor = [];
  for (const g0 of geos) {
    const g = g0.index ? g0.toNonIndexed() : g0;
    pos.push(...g.attributes.position.array);
    nor.push(...g.attributes.normal.array);
    g0.dispose(); if (g !== g0) g.dispose();
  }
  const out = new THREE.BufferGeometry();
  out.setAttribute('position', new THREE.Float32BufferAttribute(pos, 3));
  out.setAttribute('normal', new THREE.Float32BufferAttribute(nor, 3));
  return out;
}
