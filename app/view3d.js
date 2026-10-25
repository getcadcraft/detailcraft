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
 * ref = { kind: 'member'|'conn'|'footing', id }.
 */
import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { clipLoopV } from './geom.js';
import { nodes as gridNodes } from './model.js';
import { barPolyline, BARS } from './rebar.js';
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
    this.hoverNode = null;
    this.pickables = [];
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
    g.traverse((o) => { if (o.geometry) o.geometry.dispose(); if (o.material?.map) o.material.map.dispose(); });
    g.clear();
  }

  /** Rebuild everything from the model. */
  setModel(state, built, marks) {
    this.state = state; this.built = built; this.marks = marks;
    this.clearGroup(this.root);
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
    for (const p of built.parts) {
      if (!shown(p.phase)) continue;
      const geo = partGeometry(p);
      const m = new THREE.Mesh(geo, this.mats[p.type === 'plate' ? 'plate' : p.type === 'stringer' ? 'beam' : p.type]);
      const f = p.frame;
      const basis = new THREE.Matrix4().makeBasis(v3(f.u), v3(f.v), v3(f.x));
      basis.setPosition(new THREE.Vector3(...f.o).addScaledVector(v3(f.v), p.voff));
      m.applyMatrix4(basis);
      const ref = p.member ? { kind: 'member', id: p.member } : p.stair ? { kind: 'stair', id: p.stair } : { kind: 'conn', id: p.conn };
      addPick(m, ref, p.type === 'plate' ? 'plate' : p.type === 'stringer' ? 'beam' : p.type);
      const edges = new THREE.LineSegments(new THREE.EdgesGeometry(geo, 35), this.mats.edge);
      edges.applyMatrix4(basis);
      this.root.add(edges);
      geo.computeBoundingBox();
      this.box.union(geo.boundingBox.clone().applyMatrix4(basis));
      const pr = p.profile;
      for (const h of p.holes) {
        // a dark plug through the face, a little proud of both sides
        let c, axis, len;
        if (h.face === 'web') { c = [pr.kind === 'C' ? -pr.bf / 2 + pr.tw / 2 : pr.kind === 'L' ? -pr.b / 2 + pr.t / 2 : 0, h.y, h.x]; axis = [1, 0, 0]; len = (pr.kind === 'RHS' ? pr.b : pr.kind === 'L' ? pr.t : pr.tw) + 2; }
        else if (h.face === 'plate') { c = [h.y, 0, h.x]; axis = [0, 1, 0]; len = pr.t + 2; }
        else { const s = h.face === 'top' ? 1 : -1, t = pr.kind === 'RHS' || pr.kind === 'L' ? pr.t : pr.tf; c = [h.y, s * (pr.depth / 2 - t / 2), h.x]; axis = [0, 1, 0]; len = t + 2; }
        const local = new THREE.Matrix4().compose(new THREE.Vector3(...c), new THREE.Quaternion().setFromUnitVectors(new THREE.Vector3(0, 0, 1), new THREE.Vector3(...axis)), new THREE.Vector3(h.d, h.d, len));
        holes.push(basis.clone().multiply(local));
      }
    }
    if (holes.length) {
      const im = new THREE.InstancedMesh(holeGeo, this.mats.hole, holes.length);
      holes.forEach((mx, i) => im.setMatrixAt(i, mx));
      this.root.add(im);
    }
    // bolts and rods
    const bolts = built.bolts.filter((b) => shown(b.phase));
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
          const tube = new THREE.Mesh(new THREE.TubeGeometry(path, pts.length * 2, r, 6, false), this.mats.bar);
          addPick(tube, { kind: 'footing', id: f.id }, 'bar');
        }
      }
    }
    this.applySelection();
    this.applyClipping();
    if (!this.fitted && !this.box.isEmpty()) { this.fit(); this.fitted = true; }
    this.render();
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
    for (const m of this.pickables) {
      if (!m.userData.ref) continue;
      const on = sel.has(key(m.userData.ref));
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
    // solid steel before see-through concrete
    hits.sort((a, b) => (a.object.userData.mat === 'concrete') - (b.object.userData.mat === 'concrete') || a.distance - b.distance);
    const h = hits[0];
    if (!h) return { ref: null, point: null };
    let ref;
    if (h.object.userData.bolts) { const b = h.object.userData.bolts[h.instanceId]; ref = b && b.conn ? { kind: 'conn', id: b.conn } : null; }
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

/** A part's solid in its own frame (u, v, x) — the profile extruded along +z, copes cut by splitting the length. */
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
  if (geos.length === 1) return geos[0];
  return mergeSimple(geos);
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
