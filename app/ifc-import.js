/* SPDX-License-Identifier: Apache-2.0 */
import { t } from './i18n.js';
/**
 * ifc-import.js — opens an IFC2X3 or IFC4 file with cc-ifc (./ifc/api.js, passed in; it has web-ifc's call surface) and turns
 * what it can into a DetailCraft model. No DOM.
 *
 *   importIfc(WebIFC, api, bytes, { name }) → { state, report }
 *   report = { schema, unit, converted: { IfcBeam: n, … }, notConverted: [{ cls, n, why }], grids, levels, warnings: [] }
 *
 * Steel: IfcBeam / IfcColumn / IfcMember / IfcPlate (and their IFC4 …StandardCase types) become DetailCraft
 * beams / columns / braces / plates when their body is ONE IfcExtrudedAreaSolid (also through an
 * IfcMappedItem, or as the first operand of an IfcBooleanClippingResult — the clipping is then left
 * out and said in the report) of a profile DetailCraft can draw:
 *   IfcIShapeProfileDef → an I-shape; IfcUShapeProfileDef → a channel; IfcLShapeProfileDef (equal legs, or unequal when the catalog has the size)
 *   → an angle; IfcRectangleHollowProfileDef → rectangular HSS; IfcCircleHollowProfileDef → round HSS;
 *   IfcRectangleProfileDef → a plate PL<t>x<w> (IfcPlate, or anything thin) or a flat bar;
 *   IfcArbitraryClosedProfileDef that is a rectangle → as IfcRectangleProfileDef.
 * The profile is matched to the catalog when every dimension agrees within 0.5 mm (fillet radius not
 * compared: catalogs differ on it), otherwise kept as a custom parametric profile named after the file's
 * ProfileName. The member axis is the extrusion: start at the profile's position, end at Depth along the
 * extrusion direction, the section turned to match (rotation found from the profile's X axis); a profile
 * offset by half its depth comes in as position top / bottom. Plates: the thinnest of the three sizes is
 * the thickness, the longer of the other two the length.
 * IfcGrid axes parallel to world X / Y become grids (numbered: lines x = const; lettered: y = const);
 * IfcBuildingStorey → levels (elevation from the placement, else the Elevation attribute).
 * Every other product (walls, slabs, bolts, openings, footings, bars, spaces, annotations …; all but the
 * site, building, storeys and grids) is counted by class in the report with the reason; nothing is
 * dropped silently (the test checks the counts against IfcOpenShell's). Connections are not rebuilt (an IFC carries their
 * plates and bolts, not the rule).
 * Holes and copes (0.4 D11): an IfcOpeningElement voiding (IfcRelVoidsElement) a member that came in becomes
 *   - a hole when it is a round extrusion (IfcCircleProfileDef) square to a face the part has: an I-shape's or channel's
 *     web (axis along u) or flanges (along v; top or bottom by which side its middle is on), a tube's side walls or top
 *     and bottom, a plate's face, an angle's legs; one hole through both walls of a tube is kept once;
 *   - a cope when it is a rectangular extrusion that takes the full width of an I-shape or channel from one end down
 *     from the top or up from the bottom (length and depth = how far it reaches into the part);
 *   anything else (a slot, a round tube's hole, a notch in the middle) is reported with its reason.
 * Bolts (0.4 D11): IfcMechanicalFastener / IfcFastener become loose bolts (model bolts): head = where the body's
 *   extrusion starts (else the placement), axis = the extrusion (else the placement's Z), diameter and length from
 *   NominalDiameter / NominalLength (else the body), grade from ObjectType (else the material), ANCHORBOLT kept.
 * Length units: IfcSIUnit (any prefix) or an IfcConversionBasedUnit (foot, inch) — all converted to mm.
 */
import { CATALOG, getProfile, cleanCustom, plateName } from './profiles.js';
import { emptyState, Model, cleanText } from './model.js';
import { frame, cross, dot, norm, sub, add, mul, len, toLocal, voffFor } from './geom.js';
import { readRebar } from './rc/loose.js';   // 0.9 RC.1: IfcReinforcingBar back to its bars
import { BARS } from './rebar.js';
import { barFor } from './rc/loose.js';
import { centerLength } from './rc/bars.js';

const MAX_MEMBERS = 20000;
const TOL = 0.5;            // mm, catalog match

/** 4×4 affine as [X, Y, Z, O] (columns: axes then origin). */
const SCALED = {};   // marks a scaled mapped item in bodySolid
const I4 = () => ({ X: [1, 0, 0], Y: [0, 1, 0], Z: [0, 0, 1], O: [0, 0, 0] });
const apply = (M, p) => add(add(add(M.O, mul(M.X, p[0])), mul(M.Y, p[1])), mul(M.Z, p[2] || 0));
const applyDir = (M, d) => add(add(mul(M.X, d[0]), mul(M.Y, d[1])), mul(M.Z, d[2] || 0));
const compose = (A, B) => ({ X: applyDir(A, B.X), Y: applyDir(A, B.Y), Z: applyDir(A, B.Z), O: apply(A, B.O) });

export async function importIfc(WebIFC, api, bytes, { name = '' } = {}) {
  const mid = api.OpenModel(bytes instanceof Uint8Array ? bytes : new Uint8Array(bytes));
  if (mid < 0) throw new Error(t('ifc.err.open'));
  try { return convert(WebIFC, api, mid, name); }
  finally { api.CloseModel(mid); }
}

function convert(W, api, mid, fallbackName) {
  const schema = String(api.GetModelSchema(mid) || '');
  if (!/^IFC(2X3|4)/i.test(schema)) throw new Error(t('ifcimp.err.schema', { schema: schema || t('ifcimp.schema.unknown') }));
  const line = (id) => api.GetLine(mid, id, false);
  const ref = (x) => (x && typeof x === 'object' && 'value' in x && x.type === 5 ? x.value : (typeof x === 'number' ? x : null));
  const val = (x) => (x && typeof x === 'object' && 'value' in x ? x.value : x);
  const ids = (type) => { if (type === undefined) return []; const v = api.GetLineIDsWithType(mid, type), o = []; for (let i = 0; i < v.size(); i++) o.push(v.get(i)); return o; };
  const clsName = (l) => (l && l.constructor && /^Ifc/.test(l.constructor.name) ? l.constructor.name : 'IfcEntity');
  const warnings = [];

  // ---- units ----
  let toMm = 1000, unitName = 'metre';
  const prefix = { EXA: 1e18, PETA: 1e15, TERA: 1e12, GIGA: 1e9, MEGA: 1e6, KILO: 1e3, HECTO: 100, DECA: 10, DECI: 0.1, CENTI: 0.01, MILLI: 1e-3, MICRO: 1e-6, NANO: 1e-9 };
  const siScale = (u) => (u && val(u.Name) === 'METRE' ? (u.Prefix ? prefix[val(u.Prefix)] ?? 1 : 1) : null);
  for (const ua of ids(W.IFCUNITASSIGNMENT).slice(0, 1)) {
    for (const r of line(ua).Units || []) {
      const u = line(ref(r));
      if (!u || val(u.UnitType) !== 'LENGTHUNIT') continue;
      const s = siScale(u);
      if (s !== null) { toMm = s * 1000; unitName = (u.Prefix ? String(val(u.Prefix)).toLowerCase() : '') + 'metre'; }
      else if (u.ConversionFactor) {
        const mwu = line(ref(u.ConversionFactor));
        const f = Number(val(mwu?.ValueComponent));
        const base = siScale(line(ref(mwu?.UnitComponent)));
        if (Number.isFinite(f) && base !== null) { toMm = f * base * 1000; unitName = String(val(u.Name) || t('ifcimp.unit.converted')).toLowerCase(); }
        else warnings.push(t('ifcimp.warn.unit'));
      }
    }
  }

  // ---- placements ----
  const placeCache = new Map();
  const axis3 = (id) => {
    const a = line(id);
    if (!a) return I4();
    const O = coords(ref(a.Location));
    if (clsName(a) === 'IfcAxis2Placement2D') {
      const X = a.RefDirection ? norm(dirOf(ref(a.RefDirection))) : [1, 0, 0];
      return { X, Y: [-X[1], X[0], 0], Z: [0, 0, 1], O };
    }
    const Z = a.Axis ? norm(dirOf(ref(a.Axis))) : [0, 0, 1];
    let X = a.RefDirection ? dirOf(ref(a.RefDirection)) : (Math.abs(Z[0]) > 0.9 ? [0, 0, 1] : [1, 0, 0]);
    X = norm(sub(X, mul(Z, dot(X, Z))));
    if (len(X) < 0.5) X = norm(cross(Math.abs(Z[2]) < 0.9 ? [0, 0, 1] : [0, 1, 0], Z));
    return { X, Y: cross(Z, X), Z, O };
  };
  function coords(id) { const p = line(id); const c = (p?.Coordinates || []).map((v) => Number(val(v))); return [c[0] || 0, c[1] || 0, c[2] || 0]; }
  function dirOf(id) { const d = line(id); const r = (d?.DirectionRatios || []).map((v) => Number(val(v))); return [r[0] || 0, r[1] || 0, r[2] || 0]; }
  const placement = (id, depth = 0) => {
    if (!id || depth > 50) return I4();
    if (placeCache.has(id)) return placeCache.get(id);
    const lp = line(id);
    let M = I4();
    if (lp && clsName(lp) === 'IfcLocalPlacement') {
      const rel = ref(lp.RelativePlacement);
      const local = rel ? axis3(rel) : I4();
      const parent = ref(lp.PlacementRelTo);
      M = parent ? compose(placement(parent, depth + 1), local) : local;
    } else if (lp) warnings.push(t('ifcimp.warn.placement', { cls: clsName(lp) }));
    placeCache.set(id, M);
    return M;
  };
  const cartOp = (id) => {
    const op = line(id);
    if (!op) return I4();
    const s = op.Scale !== undefined && op.Scale !== null ? Number(val(op.Scale)) : 1;
    const X = op.Axis1 ? norm(dirOf(ref(op.Axis1))) : [1, 0, 0];
    let Z = op.Axis3 ? norm(dirOf(ref(op.Axis3))) : [0, 0, 1];
    let Y = op.Axis2 ? norm(dirOf(ref(op.Axis2))) : norm(cross(Z, X));
    if (!op.Axis3) Z = cross(X, Y);
    return { X: mul(X, s), Y: mul(Y, s), Z: mul(Z, s), O: coords(ref(op.LocalOrigin)), scale: s };
  };

  // ---- one extruded solid per element (through mapped items and boolean results) ----
  function bodySolid(el) {
    const pds = line(ref(el.Representation));
    if (!pds) return { why: t('ifcimp.why.no-shape') };
    const reps = (pds.Representations || []).map((r) => line(ref(r))).filter(Boolean);
    const rep = reps.find((r) => /^body$/i.test(val(r.RepresentationIdentifier) || '')) || reps.find((r) => /swept|solid|brep|clipping|csg|mapped/i.test(val(r.RepresentationType) || '')) || reps[0];
    if (!rep) return { why: t('ifcimp.why.no-body') };
    const found = [];
    let clipped = false;
    const walk = (id, M, d = 0) => {
      const it = line(id);
      if (!it || d > 10) return;
      const c = clsName(it);
      if (c === 'IfcExtrudedAreaSolid' || c === 'IfcExtrudedAreaSolidTapered') found.push({ solid: it, M, tapered: c !== 'IfcExtrudedAreaSolid' });
      else if (c === 'IfcBooleanClippingResult' || c === 'IfcBooleanResult') { clipped = true; walk(ref(it.FirstOperand), M, d + 1); }
      else if (c === 'IfcMappedItem') {
        const src = line(ref(it.MappingSource));
        const origin = src ? axis3(ref(src.MappingOrigin)) : I4();
        const target = cartOp(ref(it.MappingTarget));
        if (target.scale !== undefined && Math.abs(target.scale - 1) > 1e-9) { found.push({ bad: SCALED }); return; }
        const rp = src ? line(ref(src.MappedRepresentation)) : null;
        for (const sub of rp?.Items || []) walk(ref(sub), compose(compose(M, target), origin), d + 1);
      } else found.push({ bad: c });
    };
    for (const it of rep.Items || []) walk(ref(it), I4());
    if (found.some((f) => f.bad)) return { why: found.find((f) => f.bad).bad === SCALED ? t('ifcimp.why.scaled') : t('ifcimp.why.not-extrusion', { cls: found.find((f) => f.bad).bad }) };
    if (found.length !== 1) return { why: found.length ? t('ifcimp.why.solids', { n: found.length }) : t('ifcimp.why.no-extrusion') };
    if (found[0].tapered) return { why: t('ifcimp.why.tapered') };
    return { ...found[0], clipped };
  }

  // ---- profiles ----
  const n = (x) => Number(val(x)) * toMm;
  function readProfile(pd) {
    const c = clsName(pd);
    const pname = cleanText(val(pd.ProfileName) || '', 40);
    const pos = pd.Position ? axis3(ref(pd.Position)) : I4();      // 2D position in the profile plane
    switch (c) {
      case 'IfcIShapeProfileDef': return { kind: 'I', pname, pos, dims: { d: n(pd.OverallDepth), bf: n(pd.OverallWidth), tw: n(pd.WebThickness), tf: n(pd.FlangeThickness), r: pd.FilletRadius ? n(pd.FilletRadius) : 0 } };
      case 'IfcUShapeProfileDef': return { kind: 'C', pname, pos, dims: { d: n(pd.Depth), bf: n(pd.FlangeWidth), tw: n(pd.WebThickness), tf: n(pd.FlangeThickness) } };
      case 'IfcLShapeProfileDef': {
        const d = n(pd.Depth), w = pd.Width ? n(pd.Width) : d;
        if (Math.abs(d - w) > TOL) {
          const dims = { b: w, h: d, t: n(pd.Thickness) };
          if (!catalogMatch('L', dims, pname)) return { why: t('ifcimp.why.unequal-angle', { w: r1(w), d: r1(d) }) };
          return { kind: 'L', pname, pos, dims };
        }
        return { kind: 'L', pname, pos, dims: { b: d, t: n(pd.Thickness) } };
      }
      case 'IfcRectangleHollowProfileDef': return { kind: 'RHS', pname, pos, dims: { h: n(pd.YDim), b: n(pd.XDim), t: n(pd.WallThickness) } };
      case 'IfcCircleHollowProfileDef': return { kind: 'CHS', pname, pos, dims: { D: 2 * n(pd.Radius), t: n(pd.WallThickness) } };
      case 'IfcRectangleProfileDef': return { kind: 'RECT', pname, pos, dims: { x: n(pd.XDim), y: n(pd.YDim) } };
      case 'IfcArbitraryClosedProfileDef': {
        const rect = rectangleOf(ref(pd.OuterCurve));
        if (!rect) return { why: t('ifcimp.why.not-rect') };
        const M = { X: rect.X, Y: rect.Y, Z: [0, 0, 1], O: rect.c };
        return { kind: 'RECT', pname, pos: M, dims: { x: rect.w, y: rect.h } };
      }
      default: return { why: t('ifcimp.why.profile-kind', { cls: c }) };
    }
  }
  /** A closed IfcPolyline / IfcIndexedPolyCurve that is a rectangle: { c, X, Y, w, h } (mm) or null. */
  function rectangleOf(id) {
    const cv = line(id);
    if (!cv) return null;
    let pts = [];
    if (clsName(cv) === 'IfcPolyline') pts = (cv.Points || []).map((p) => coords(ref(p)));
    else if (clsName(cv) === 'IfcIndexedPolyCurve' && !cv.Segments) {
      const list = line(ref(cv.Points));
      pts = (list?.CoordList || []).map((p) => p.map((v) => Number(val(v))).concat([0]).slice(0, 3));
    } else return null;
    if (pts.length > 1 && len(sub(pts[0], pts[pts.length - 1])) < 1e-6) pts.pop();
    if (pts.length !== 4) return null;
    const e = pts.map((p, i) => sub(pts[(i + 1) % 4], p));
    for (let i = 0; i < 4; i++) if (Math.abs(dot(norm(e[i]), norm(e[(i + 1) % 4]))) > 1e-4) return null;
    const c = mul(pts.reduce((s, p) => add(s, p), [0, 0, 0]), 0.25);
    return { c, X: norm(e[0]), Y: norm(cross([0, 0, 1], norm(e[0]))), w: len(e[0]) * toMm, h: len(e[1]) * toMm };   // c in file units, like any placement
  }

  /** Catalog name for profile dims of a kind, or null. */
  function catalogMatch(kind, d, pname) {
    const fit = (p) => {
      switch (kind) {
        case 'I': return p.kind === 'I' && close(p.d, d.d) && close(p.bf, d.bf) && close(p.tw, d.tw) && close(p.tf, d.tf);
        case 'C': return p.kind === 'C' && close(p.d, d.d) && close(p.bf, d.bf) && close(p.tw, d.tw) && close(p.tf, d.tf);
        case 'L': return p.kind === 'L' && close(p.b, d.b) && close(p.h ?? p.b, d.h ?? d.b) && close(p.t, d.t);
        case 'RHS': return p.kind === 'RHS' && close(p.t, d.t) && ((close(p.h, d.h) && close(p.b, d.b)) || (close(p.h, d.b) && close(p.b, d.h)));
        case 'CHS': return p.kind === 'CHS' && close(p.D, d.D) && close(p.t, d.t);
        default: return false;
      }
    };
    const byName = pname && (CATALOG.get(pname.toUpperCase().replace(/\s+/g, '')) || getProfile(pname));
    if (byName && fit(byName)) return byName.name;
    for (const p of CATALOG.values()) if (fit(p)) return p.name;
    return null;
  }
  const close = (a, b) => Math.abs(a - b) <= TOL;

  // ---- the new model ----
  const projects = ids(W.IFCPROJECT);
  const projName = projects.length ? cleanText(val(line(projects[0]).Name) || '', 80) : '';
  const state = emptyState(projName || fallbackName || t('ifcimp.name.default'));
  const model = new Model(state);
  const converted = {}, notConverted = new Map();
  const skip = (cls, why) => { const k = cls + '|' + why; notConverted.set(k, (notConverted.get(k) || 0) + 1); };

  // levels
  const levels = [];
  for (const id of ids(W.IFCBUILDINGSTOREY)) {
    const s = line(id);
    const M = s.ObjectPlacement ? placement(ref(s.ObjectPlacement)) : null;
    let z = M ? M.O[2] * toMm : null;
    if ((z === null || (z === 0 && s.Elevation)) && s.Elevation !== null && s.Elevation !== undefined) z = Number(val(s.Elevation)) * toMm;
    let nm = cleanText(val(s.Name) || '', 40) || t('ifcimp.level.default', { n: levels.length + 1 });
    while (levels.some((l) => l.name === nm)) nm = nm.slice(0, 36) + ' (' + (levels.length + 1) + ')';
    if (Number.isFinite(z)) levels.push({ name: nm, z: round3(z) });
  }

  // grids
  const gx = [], gy = [];
  let skewAxes = 0;
  for (const id of ids(W.IFCGRID)) {
    const g = line(id);
    const M = g.ObjectPlacement ? placement(ref(g.ObjectPlacement)) : I4();
    for (const list of [g.UAxes, g.VAxes, g.WAxes]) for (const a of list || []) {
      const ax = line(ref(a));
      const cv = ax ? line(ref(ax.AxisCurve)) : null;
      const pts = cv && clsName(cv) === 'IfcPolyline' ? (cv.Points || []).map((p) => apply(M, coords(ref(p))).map((v) => v * toMm)) : [];
      if (pts.length < 2) { skewAxes++; continue; }
      const dvec = norm(sub(pts[pts.length - 1], pts[0]));
      const tag = cleanText(val(ax.AxisTag) || '', 8) || '?';
      if (Math.abs(dvec[1]) > 0.9999) gx.push({ label: tag, at: round3(pts[0][0]) });
      else if (Math.abs(dvec[0]) > 0.9999) gy.push({ label: tag, at: round3(pts[0][1]) });
      else skewAxes++;
    }
  }
  if (skewAxes) skip('IfcGridAxis', t('ifcimp.why.grid-skew'));
  const tidy = (list) => {
    const out = [];
    for (const g of list.sort((a, b) => a.at - b.at)) {
      if (out.some((o) => Math.abs(o.at - g.at) < 0.5)) continue;
      let label = g.label, k = 2;
      while (out.some((o) => o.label === label)) label = g.label.slice(0, 6) + "'" + (k++);
      out.push({ label, at: g.at });
    }
    return out.slice(0, 60);
  };

  // steel
  const STEEL = [
    ['IFCBEAM', 'beam'], ['IFCBEAMSTANDARDCASE', 'beam'], ['IFCCOLUMN', 'column'], ['IFCCOLUMNSTANDARDCASE', 'column'],
    ['IFCMEMBER', 'brace'], ['IFCMEMBERSTANDARDCASE', 'brace'], ['IFCPLATE', 'plate'], ['IFCPLATESTANDARDCASE', 'plate'],
  ];
  const materialOf = materialMap(W, api, mid, ids, line, ref, val, clsName);
  const steelIds = new Set();
  // ---- reinforced concrete (0.9 RC.1) ----
  // DetailCraft's own concrete elements carry their definition (property "Definition") in the "DetailCraft" property set: they come back as themselves, and the
  // bars aggregated to them are made again from it (not doubled as loose bars). Any other IfcReinforcingBar comes in as a loose bar
  // (its swept disk back to legs and bends, lib/rc/loose.js). A beam, column, slab or wall that hosts bars, or whose material is
  // concrete, is not steel: it is reported, not drawn as a flat bar or a plate.
  const rcDefs = new Map();
  for (const rid of ids(W.IFCRELDEFINESBYPROPERTIES)) {
    const r = line(rid), ps = line(ref(r?.RelatingPropertyDefinition));
    if (!ps || !/^DetailCraft( RC)?$/.test(String(val(ps.Name) || ''))) continue;
    const prop = (ps.HasProperties || []).map((x) => line(ref(x))).find((x) => x && val(x.Name) === 'Definition');
    let def = null;
    try { def = JSON.parse(String(val(prop?.NominalValue) || '')); } catch { def = null; }
    if (!def || def.format !== 'detailcraft-rc' || !def.element) continue;
    for (const o of r.RelatedObjects || []) rcDefs.set(ref(o), def.element);
  }
  const hostIds = new Set();
  for (const rid of [...ids(W.IFCRELAGGREGATES), ...ids(W.IFCRELNESTS)]) {
    const r = line(rid);
    if ((r.RelatedObjects || []).some((o) => clsName(line(ref(o))) === 'IfcReinforcingBar')) hostIds.add(ref(r.RelatingObject));
  }
  const CONCRETE = /concrete|hormig|b[ée]ton|bet[ãa]o|calcestruzzo|^C\d{2}\/\d{2}|^HA-?\d/i;
  const isConcrete = (id) => hostIds.has(id) || CONCRETE.test(materialOf.get(id) || '');
  const handledRc = new Set(rcDefs.keys());
  const members = [], customs = new Map();
  for (const [T, type] of STEEL) {
    for (const id of ids(W[T])) {
      steelIds.add(id);
      const el = line(id);
      const cls = clsName(el);
      if (rcDefs.has(id)) continue;   // DetailCraft's own concrete element: below
      if (isConcrete(id)) { skip(cls, t('ifcimp.why.concrete')); continue; }
      if (members.length >= MAX_MEMBERS) { skip(cls, t('ifcimp.why.too-many', { max: MAX_MEMBERS })); continue; }
      const b = bodySolid(el);
      if (b.why) { skip(cls, b.why); continue; }
      const pd = line(ref(b.solid.SweptArea));
      const prof = pd ? readProfile(pd) : { why: t('ifcimp.why.no-profile') };
      if (prof.why) { skip(cls, prof.why); continue; }
      // the solid in world: element placement ∘ item transform ∘ solid position ∘ profile position
      const Mel = el.ObjectPlacement ? placement(ref(el.ObjectPlacement)) : I4();
      const Msolid = compose(compose(Mel, b.M), b.solid.Position ? axis3(ref(b.solid.Position)) : I4());
      const Mprof = compose(Msolid, prof.pos);
      const O = mul(apply(Msolid, prof.pos.O), toMm);                    // the profile's origin (section center), mm
      const ext = norm(applyDir(Msolid, dirOf(ref(b.solid.ExtrudedDirection))));
      const depth = Number(val(b.solid.Depth)) * toMm;
      let U = norm(Mprof.X), V = norm(Mprof.Y);
      if (Math.abs(dot(ext, U)) > 1e-4 || Math.abs(dot(ext, V)) > 1e-4) { skip(cls, t('ifcimp.why.not-square')); continue; }
      if (!(depth > 0)) { skip(cls, t('ifcimp.why.zero-length')); continue; }
      // DetailCraft's frame: (u, v, x) right-handed; a mirrored placement is walked the other way
      let start = O, end = add(O, mul(ext, depth));
      if (dot(cross(U, V), ext) < 0) [start, end] = [end, start];
      let profileName, voff = 0, position = 'middle', kind = prof.kind;
      if (kind === 'RECT') {
        // plate or flat bar: thinnest size = thickness, along v
        const sizes = [['x', prof.dims.x, U], ['y', prof.dims.y, V], ['z', depth, ext]].sort((a, c) => a[1] - c[1]);
        const [thin, mid2, long] = sizes;
        if (type === 'plate' || thin[1] < 0.25 * mid2[1]) {
          const c = add(O, mul(ext, depth / 2));                      // box center
          const xDir = long[2], vDir = thin[2];
          const uDir = cross(vDir, xDir);
          start = sub(c, mul(xDir, long[1] / 2)); end = add(c, mul(xDir, long[1] / 2));
          U = uDir; V = vDir;
          profileName = plateName(thin[1], mid2[1]);
          if (!getProfile(profileName)) { skip(cls, t('ifcimp.why.plate-range')); continue; }
          if (type !== 'plate') kind = 'PL';
        } else {
          const key = 'FLAT ' + r1(prof.dims.x) + 'x' + r1(prof.dims.y);
          profileName = custom(customs, prof.pname, { kind: 'FLAT', b: prof.dims.x, t: prof.dims.y }, key);
        }
      } else {
        const cat = catalogMatch(kind, prof.dims, prof.pname);
        if (cat) profileName = cat;
        else {
          const p = { kind, ...prof.dims };
          if (kind === 'I' && !(p.r >= 0)) p.r = 0;
          profileName = custom(customs, prof.pname, p, kind + ' ' + Object.values(prof.dims).map(r1).join('x'));
        }
        // a profile offset by half its depth along v: top / bottom of steel on the line (only when U is the profile's X)
        const off = prof.pos.O.map((v) => v * toMm);
        if (Math.abs(off[0]) < 0.01 && off[1] !== 0) {
          const pr = getProfile(profileName, [...customs.values()].map((c) => c.profile));
          const dd = pr ? pr.depth : 0;
          if (Math.abs(off[1] + dd / 2) < 0.01) { position = 'top'; voff = off[1]; }
          else if (Math.abs(off[1] - dd / 2) < 0.01) { position = 'bottom'; voff = off[1]; }
        }
      }
      if (profileName === null) { skip(cls, t('ifcimp.why.profile-hold')); continue; }
      // move the line from the section center back to the reference line for top / bottom
      if (voff) { start = sub(start, mul(V, voff)); end = sub(end, mul(V, voff)); }
      const f0 = frame(start, end, 0);
      const rot = Math.atan2(dot(U, f0.v), dot(U, f0.u)) * 180 / Math.PI;
      const f1 = frame(start, end, rot);
      if (len(sub(f1.u, U)) > 1e-4 || len(sub(f1.v, V)) > 1e-4) { skip(cls, t('ifcimp.why.axes')); continue; }
      if ([...start, ...end].some((v) => !Number.isFinite(v) || Math.abs(v) > 1e7)) { skip(cls, t('ifcimp.why.far')); continue; }
      members.push({ type, profile: profileName, material: cleanText(materialOf.get(id) || '', 30), start: start.map(round3), end: end.map(round3), rotation: round3(((rot % 360) + 360) % 360), position, name: cleanText(val(el.Name) || val(el.Tag) || '', 40), cls, clipped: b.clipped, src: id });
    }
  }

  // openings (holes, copes) and fasteners: handled below, so not counted again with "everything else"
  const handled = new Set();
  const voidsOf = new Map();
  for (const rid of ids(W.IFCRELVOIDSELEMENT)) {
    const r = line(rid), el = ref(r?.RelatingBuildingElement), op = ref(r?.RelatedOpeningElement);
    if (el && op) { if (!voidsOf.has(op)) voidsOf.set(op, el); }
  }
  const openingIds = [...ids(W.IFCOPENINGELEMENT), ...ids(W.IFCOPENINGSTANDARDCASE)];
  const fastenerIds = [...ids(W.IFCMECHANICALFASTENER), ...ids(W.IFCFASTENER)];
  for (const x of [...openingIds, ...fastenerIds, ...handledRc, ...ids(W.IFCREINFORCINGBAR)]) handled.add(x);
  // openings voiding a concrete element of ours are part of its definition (made again from it)
  const rcOpenings = new Set([...voidsOf].filter(([, el]) => rcDefs.has(el)).map(([op]) => op));
  /** An opening's or fastener's extrusion in world mm: { O (base of the profile's center), ext, depth, prof } or { why }. */
  const extrusionOf = (el) => {
    const b = bodySolid(el);
    if (b.why) return { why: b.why };
    const pd = line(ref(b.solid.SweptArea));
    if (!pd) return { why: t('ifcimp.why.no-profile') };
    const Mel = el.ObjectPlacement ? placement(ref(el.ObjectPlacement)) : I4();
    const Ms = compose(compose(Mel, b.M), b.solid.Position ? axis3(ref(b.solid.Position)) : I4());
    const c = clsName(pd);
    const pos = pd.Position ? axis3(ref(pd.Position)) : I4();
    const O = mul(apply(Ms, pos.O), toMm), ext = norm(applyDir(Ms, dirOf(ref(b.solid.ExtrudedDirection)))), depth = Number(val(b.solid.Depth)) * toMm;
    if (c === 'IfcCircleProfileDef') return { O, ext, depth, prof: { kind: 'circle', r: n(pd.Radius) } };
    if (c === 'IfcRectangleProfileDef') return { O, ext, depth, prof: { kind: 'rect', x: n(pd.XDim), y: n(pd.YDim), X: norm(applyDir(Ms, pos.X)), Y: norm(applyDir(Ms, pos.Y)) } };
    return { why: t('ifcimp.why.opening-shape', { cls: c }) };
  };

  // everything else that is a physical element, counted by class
  const REASON = {
    IfcElementAssembly: 'ifcimp.why.assembly',
    IfcFooting: 'ifcimp.why.footings',
    IfcReinforcingBar: 'ifcimp.why.rebar',
  };
  // loose bars: every IfcReinforcingBar not aggregated to one of our own concrete elements
  const rebar = readRebar({
    ids: (k) => ids(k), line, ref, val, clsName, toMm, apply,
    placementOf: (el) => (el.ObjectPlacement ? placement(ref(el.ObjectPlacement)) : I4()),
    axisOf: (id, M) => compose(M, axis3(id)),
    mapped: (M, src, it) => compose(compose(M, cartOp(ref(it.MappingTarget))), src ? axis3(ref(src.MappingOrigin)) : I4()),
    T: { REINFORCINGBAR: W.IFCREINFORCINGBAR, RELAGGREGATES: W.IFCRELAGGREGATES, RELNESTS: W.IFCRELNESTS },
  });
  const ownGuids = new Set([...rcDefs.keys()].map((id) => String(val(line(id)?.GlobalId) || '')));
  const looseIn = rebar.bars.filter((b) => !(b.host && ownGuids.has(b.host.guid)));
  const regenerated = rebar.bars.length - looseIn.length;
  for (const sk of rebar.skipped) for (let i = 0; i < sk.n; i++) skip('IfcReinforcingBar', t('ifcimp.why.bar-' + sk.code));
  for (const ty of api.GetAllTypesOfModel(mid) || []) {
    if (!api.IsIfcElement(ty.typeID) || /^IFC(SITE|BUILDING|BUILDINGSTOREY|GRID|PROJECT)$/i.test(String(ty.typeName))) continue;
    const list = ids(ty.typeID).filter((x) => !steelIds.has(x) && !handled.has(x));
    if (!list.length) continue;
    const cls = clsName(line(list[0]));
    const why = t(REASON[cls] || 'ifcimp.why.not-steel');
    for (let i = 0; i < list.length; i++) skip(cls, why);
  }

  let clippedN = 0;
  const rcReport = { elements: 0, openings: 0, regenerated, loose: 0, sizes: {}, unknownSize: 0, lengthDiff: 0, hosts: new Map() };
  model.change(t('ifcimp.undo'), (tx) => {
    if (levels.length) tx.setLevels(levels);
    for (const [id, def] of rcDefs) {
      const el = line(id), cls = clsName(el);
      try { tx.addRc(def); converted[cls] = (converted[cls] || 0) + 1; rcReport.elements++; } catch (e) { skip(cls, e.message); }
    }
    if (looseIn.length) {
      const list = [];
      for (const b of looseIn) {
        const size = barFor(b.db, BARS);
        const bar = size ? size.name : 'Ø' + Math.round(b.db * 10) / 10;
        if (!size) rcReport.unknownSize++;
        rcReport.sizes[bar] = (rcReport.sizes[bar] || 0) + 1;
        const hk = b.host ? (b.host.name || b.host.cls) : '';
        if (hk) rcReport.hosts.set(hk, (rcReport.hosts.get(hk) || 0) + 1);
        const item = { bar, db: b.db, pts: b.pts, rc: b.rc, mark: cleanText(b.mark, 20) };
        if (b.host) item.host = { guid: cleanText(b.host.guid, 22), cls: cleanText(b.host.cls, 40), name: cleanText(b.host.name, 60) };
        if (b.fileLength) { item.fileLength = b.fileLength; if (Math.abs(centerLength(b.pts, b.rc) - b.fileLength) > 1) rcReport.lengthDiff++; }
        list.push(item);
      }
      tx.addLoose(list);
      rcReport.loose = list.length;
      converted.IfcReinforcingBar = (converted.IfcReinforcingBar || 0) + list.length;
    }
    if (regenerated) converted.IfcReinforcingBar = (converted.IfcReinforcingBar || 0) + regenerated;
    tx.setGrids({ x: tidy(gx), y: tidy(gy) });
    for (const c of customs.values()) tx.addProfile(c.profile);
    const memberOf = new Map();
    for (const m of members) {
      try { const nid = tx.addMember({ ...m, material: m.material || undefined }); memberOf.set(m.src, nid); converted[m.cls] = (converted[m.cls] || 0) + 1; if (m.clipped) clippedN++; }
      catch (e) { skip(m.cls, e.message); }
    }
    const got = (cls) => { converted[cls] = (converted[cls] || 0) + 1; };
    // holes and copes
    for (const oid of openingIds) {
      const op = line(oid), cls = clsName(op);
      if (rcOpenings.has(oid)) { got(cls); rcReport.openings++; continue; }
      const host = voidsOf.get(oid), mid2 = host !== undefined ? memberOf.get(host) : undefined;
      if (mid2 === undefined) { skip(cls, t(host === undefined ? 'ifcimp.why.opening-alone' : 'ifcimp.why.opening-host')); continue; }
      const e = extrusionOf(op);
      if (e.why) { skip(cls, e.why); continue; }
      const m = tx.s.members.find((x) => x.id === mid2);
      const pr = getProfile(m.profile, tx.s.profiles);
      const f = frame(m.start, m.end, m.rotation), voff = voffFor(m.position, pr.depth);
      const ax = dot(e.ext, f.x), au = dot(e.ext, f.u), av = dot(e.ext, f.v);
      if (e.prof.kind === 'circle') {
        const mid = add(e.O, mul(e.ext, e.depth / 2)), l = toLocal(f, mid, voff);
        const k = pr.kind;
        let face = null, y = 0;
        if (Math.abs(ax) > 0.02) { skip(cls, t('ifcimp.why.hole-slanted')); continue; }
        if (k === 'CHS') { skip(cls, t('ifcimp.why.hole-tube')); continue; }
        if (Math.abs(au) > 0.98 && k !== 'PL') { face = 'web'; y = l.v; }
        else if (Math.abs(av) > 0.98) { if (k === 'PL') face = 'plate'; else if (k === 'L') face = 'bottom'; else face = l.v > 0 ? 'top' : 'bottom'; y = l.u; }
        if (!face) { skip(cls, t('ifcimp.why.hole-face')); continue; }
        if (l.x < -0.5 || l.x > f.len + 0.5) { skip(cls, t('ifcimp.why.hole-off')); continue; }
        const d = Math.round(2 * e.prof.r * 10) / 10, x = round3(l.x), yy = round3(y);
        if (!m.holes.some((h) => h.face === face && Math.abs(h.x - x) < 0.5 && Math.abs(h.y - yy) < 0.5 && Math.abs(h.d - d) < 0.05)) {
          try { tx.addHole(mid2, { face, x, y: yy, d }); } catch (err) { skip(cls, err.message); continue; }
        }
        got(cls);
        continue;
      }
      // a rectangle: a cope when it takes the full width from one end, from the top or the bottom
      const pts = [];
      for (const s0 of [0, e.depth]) for (const a of [-1, 1]) for (const b of [-1, 1]) pts.push(toLocal(f, add(add(add(e.O, mul(e.ext, s0)), mul(e.prof.X, a * e.prof.x / 2)), mul(e.prof.Y, b * e.prof.y / 2)), voff));
      const lo = (k) => Math.min(...pts.map((q) => q[k])), hi = (k) => Math.max(...pts.map((q) => q[k]));
      const L = f.len, h2 = pr.depth / 2, w2 = pr.width / 2;
      const okKind = pr.kind === 'I' || pr.kind === 'C';
      const atStart = lo('x') <= 0.5 && hi('x') > 0.5, atEnd = hi('x') >= L - 0.5 && lo('x') < L - 0.5;
      const fromTop = hi('v') >= h2 - 0.5 && lo('v') > -h2 + 0.5, fromBottom = lo('v') <= -h2 + 0.5 && hi('v') < h2 - 0.5;
      if (!okKind || lo('u') > -w2 + 0.5 || hi('u') < w2 - 0.5 || atStart === atEnd || fromTop === fromBottom) { skip(cls, t('ifcimp.why.opening-rect')); continue; }
      const length = Math.round((atStart ? Math.min(hi('x'), L) : L - Math.max(lo('x'), 0)) * 2) / 2;
      const depth = Math.round((fromTop ? h2 - lo('v') : hi('v') + h2) * 2) / 2;
      try { tx.addCut(mid2, { kind: 'cope', end: atStart ? 'start' : 'end', side: fromTop ? 'top' : 'bottom', length, depth }); got(cls); }
      catch (err) { skip(cls, err.message); }
    }
    // bolts
    for (const fid of fastenerIds) {
      const fe = line(fid), cls = clsName(fe);
      const e = extrusionOf(fe);
      const Mel = fe.ObjectPlacement ? placement(ref(fe.ObjectPlacement)) : I4();
      const head = e.why ? mul(Mel.O, toMm) : e.O, axis = e.why ? norm(Mel.Z) : e.ext;
      const d = fe.NominalDiameter !== undefined && fe.NominalDiameter !== null ? n(fe.NominalDiameter) : e.prof?.kind === 'circle' ? 2 * e.prof.r : NaN;
      const L = fe.NominalLength !== undefined && fe.NominalLength !== null ? n(fe.NominalLength) : e.why ? NaN : e.depth;
      if (!(d > 0) || !(L > 0)) { skip(cls, t('ifcimp.why.bolt-size')); continue; }
      const kind = /ANCHOR/i.test(String(val(fe.PredefinedType) || '')) ? 'ANCHORBOLT' : 'BOLT';
      const grade = cleanText(val(fe.ObjectType) || materialOf.get(fid) || '', 20);
      try { tx.addBolt({ d: Math.round(d * 10) / 10, length: Math.round(L * 10) / 10, grade, kind, head: head.map(round3), axis }); got(cls); }
      catch (err) { skip(cls, err.message); }
    }
  });
  if (clippedN) warnings.push(t('ifcimp.warn.clipped', { n: clippedN }));
  const notList = [...notConverted].map(([k, nn]) => { const [cls, why] = k.split('|'); return { cls, n: nn, why }; }).sort((a, b) => b.n - a.n || a.cls.localeCompare(b.cls));
  return {
    state: model.state,
    report: { schema, unit: unitName, toMm, converted, notConverted: notList, rc: { ...rcReport, hosts: [...rcReport.hosts].map(([name, n]) => ({ name, n })) }, grids: model.state.grids.x.length + model.state.grids.y.length, levels: levels.length, customProfiles: [...customs.values()].map((c) => c.profile.name), warnings: [...new Set(warnings)] },
  };
}

/** A custom profile for dims: reuses one with the same dims; name from the file (made unique). Returns its name or null. */
function custom(customs, pname, p, fallback) {
  const key = JSON.stringify(Object.entries(p).map(([k, v]) => [k, typeof v === 'number' ? Math.round(v * 100) / 100 : v]));
  if (customs.has(key)) return customs.get(key).profile.name;
  let base = cleanText(pname || fallback, 34) || fallback;
  let name = base, i = 2;
  const taken = (nm) => CATALOG.has(nm.toUpperCase()) || /^PL\s*\d/i.test(nm) || [...customs.values()].some((c) => c.profile.name.toUpperCase() === nm.toUpperCase());
  if (taken(name)) name = base + ' (file)';
  while (taken(name)) name = base + ' (' + i++ + ')';
  const r = cleanCustom({ ...p, name });
  if (!r.ok) return null;
  customs.set(key, r);
  return r.profile.name;
}

/** Element id → material name (IfcMaterial, or the first of a layer / profile / constituent set). */
function materialMap(W, api, mid, ids, line, ref, val, clsName) {
  const out = new Map();
  const nameOf = (id, d = 0) => {
    const m = line(id);
    if (!m || d > 4) return '';
    const c = clsName(m);
    if (c === 'IfcMaterial') return val(m.Name) || '';
    if (c === 'IfcMaterialProfileSetUsage' || c === 'IfcMaterialProfileSetUsageTapering') return nameOf(ref(m.ForProfileSet), d + 1);
    if (c === 'IfcMaterialLayerSetUsage') return nameOf(ref(m.ForLayerSet), d + 1);
    if (c === 'IfcMaterialProfileSet') return nameOf(ref((m.MaterialProfiles || [])[0]), d + 1);
    if (c === 'IfcMaterialLayerSet') return nameOf(ref((m.MaterialLayers || [])[0]), d + 1);
    if (c === 'IfcMaterialConstituentSet') return nameOf(ref((m.MaterialConstituents || [])[0]), d + 1);
    if (c === 'IfcMaterialProfile' || c === 'IfcMaterialLayer' || c === 'IfcMaterialConstituent') return nameOf(ref(m.Material), d + 1);
    if (c === 'IfcMaterialList') return nameOf(ref((m.Materials || [])[0]), d + 1);
    return '';
  };
  for (const id of ids(W.IFCRELASSOCIATESMATERIAL)) {
    const r = line(id);
    const nm = nameOf(ref(r.RelatingMaterial));
    if (!nm) continue;
    for (const o of r.RelatedObjects || []) out.set(ref(o), nm);
  }
  return out;
}

const r1 = (v) => String(Math.round(v * 10) / 10);
const round3 = (v) => Math.round(v * 1000) / 1000 + 0;

/** The report as plain lines (for the dialog and the status bar). */
export function reportLines(report) {
  const conv = Object.entries(report.converted);
  const lines = [];
  lines.push(t('ifcimp.rep.schema', { schema: report.schema, unit: report.unit, factor: Number(report.toMm.toPrecision(6)) }));
  lines.push(t('ifcimp.rep.brought', { what: conv.length ? conv.map(([k, nn]) => nn + ' ' + k).join(', ') : t('ifcimp.rep.no-steel'), levels: report.levels, grids: report.grids }));
  if (report.customProfiles.length) lines.push(t('ifcimp.rep.custom', { list: report.customProfiles.join(', ') }));
  const holes = (report.converted.IfcOpeningElement || 0) + (report.converted.IfcOpeningStandardCase || 0) - (report.rc?.openings || 0), bolts = (report.converted.IfcMechanicalFastener || 0) + (report.converted.IfcFastener || 0);
  if (holes || bolts) lines.push(t('ifcimp.rep.holes', { holes, bolts }));
  const rc = report.rc;   // 0.9 RC.1: what was read of the reinforcement
  if (rc && (rc.elements || rc.loose || rc.regenerated)) {
    if (rc.elements) lines.push(t('ifcimp.rep.rc-elements', { n: rc.elements, bars: rc.regenerated }));
    if (rc.loose) lines.push(t('ifcimp.rep.rc-loose', { n: rc.loose, sizes: Object.entries(rc.sizes).map(([k, v]) => v + ' × ' + k).join(', '), hosts: rc.hosts.length }));   // i18n-ignore: counts
    if (rc.unknownSize) lines.push(t('ifcimp.rep.rc-unknown', { n: rc.unknownSize }));
    if (rc.lengthDiff) lines.push(t('ifcimp.rep.rc-length', { n: rc.lengthDiff }));
  }
  return lines;
}
