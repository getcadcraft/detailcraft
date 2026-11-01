/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ifc.js — IFC4 export, written by hand as ISO 10303-21 (STEP) text. No DOM, no library.
 *
 *   writeIfc(state, built, marks, schedule, { name, now }) → string
 *
 * Spatial structure: IfcProject → IfcSite → IfcBuilding → one IfcBuildingStorey per level. Each element
 * is contained in the highest storey at or below its lowest point. Length unit millimeter.
 * Steel parts: IfcBeam / IfcColumn / IfcMember (.BRACE.) / IfcPlate (.SHEET.), each an IfcExtrudedAreaSolid
 * of a parameterized profile (IfcIShapeProfileDef, IfcUShapeProfileDef, IfcLShapeProfileDef,
 * IfcRectangleHollowProfileDef, IfcCircleHollowProfileDef, IfcRectangleProfileDef) placed with
 * Axis = the part's x, RefDirection = its u (so profile X = u, profile Y = v). Holes and copes are
 * IfcOpeningElement + IfcRelVoidsElement. Tag = part mark. Plates welded to a member are grouped with
 * it in an IfcElementAssembly (.FACTORY.), Tag = assembly mark. Bolts and anchor rods:
 * IfcMechanicalFastener (.BOLT. / .ANCHORBOLT.) with NominalDiameter, NominalLength and a cylinder.
 * Footings: IfcFooting (.PAD_FOOTING.); each placed bar an IfcReinforcingBar (.MAIN.) with NominalDiameter,
 * CrossSectionArea, BarLength and an IfcSweptDiskSolid along an IfcIndexedPolyCurve (lines + true arcs).
 * Grids: IfcGrid with IfcGridAxis polylines. Materials: IfcMaterial per grade. Properties: a "DetailCraft"
 * property set (part mark, assembly mark, profile, weight).
 * GlobalIds are derived from the model name + part ids, so exporting the same model twice gives the same ids.
 * A plane-cut end (a mitre, 0.7.1 71.20): the extrusion runs the overall length and each cut is an IfcBooleanClippingResult
 * (.DIFFERENCE.) with an IfcHalfSpaceSolid on an IfcPlane (normal out of the part, AgreementFlag .F.: the half space taken away
 * is on the side the normal points to); the body representation is then 'Clipping'.
 */
import { add, mul, sub, cross, norm, dot, toWorld } from './geom.js';
import { centerline2d, BARS } from './rebar.js';
import { t } from './i18n.js';

const B64 = '0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz_$';

/** 128 bits from a string (cyrb128) → a 22-character IFC GlobalId. */
export function guidFor(seed) {
  let h1 = 1779033703, h2 = 3144134277, h3 = 1013904242, h4 = 2773480762;
  for (let i = 0; i < seed.length; i++) {
    const k = seed.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067); h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213); h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067); h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213); h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= h2 ^ h3 ^ h4; h2 ^= h1; h3 ^= h1; h4 ^= h1;
  let n = 0n;
  for (const h of [h1, h2, h3, h4]) n = (n << 32n) | BigInt(h >>> 0);
  let s = '';
  for (let i = 0; i < 22; i++) { s = B64[Number(n & 63n)] + s; n >>= 6n; }
  return s;
}

/** A STEP real: always with a decimal point. */
export function R(v) {
  if (!Number.isFinite(v)) return '0.';
  let s = Number((Math.abs(v) < 1e-9 ? 0 : v).toFixed(6)).toString();
  if (s.includes('e')) { const [m, e] = s.split('e'); s = (m.includes('.') ? m : m + '.') + 'E' + e; }
  else if (!s.includes('.')) s += '.';
  return s;
}
/** A STEP string: '' for a quote, \\ for a backslash, \X2\…\X0\ for anything outside printable ASCII. */
export function S(str) {
  let out = '';
  for (const ch of String(str ?? '')) {
    const c = ch.codePointAt(0);
    if (c === 39) out += "''";
    else if (c === 92) out += '\\\\';
    else if (c >= 32 && c < 127) out += ch;
    else {
      const units = [];
      for (let i = 0; i < ch.length; i++) units.push(ch.charCodeAt(i).toString(16).toUpperCase().padStart(4, '0'));
      out += '\\X2\\' + units.join('') + '\\X0\\';
    }
  }
  return "'" + out + "'";
}
const E = (v) => '.' + v + '.';

class Step {
  constructor() { this.lines = []; this.n = 0; this.cache = new Map(); }
  add(s) { this.n++; this.lines.push('#' + this.n + '=' + s + ';'); return '#' + this.n; }
  /** Shared entities (points, directions) written once. */
  once(s) { if (!this.cache.has(s)) this.cache.set(s, this.add(s)); return this.cache.get(s); }
  pt(p) { return this.once('IFCCARTESIANPOINT((' + p.map(R).join(',') + '))'); }
  dir(d) { return this.once('IFCDIRECTION((' + d.map(R).join(',') + '))'); }
}

const anyPerp = (a) => norm(Math.abs(a[2]) < 0.9 ? cross([0, 0, 1], a) : cross([1, 0, 0], a));

export function writeIfc(state, built, marks, schedule, { name = state.name || 'DetailCraft model', now = new Date() } = {}) {
  const w = new Step();
  const seed = (k) => guidFor(state.name + '|' + k);
  const O = w.pt([0, 0, 0]), DZ = w.dir([0, 0, 1]), DX = w.dir([1, 0, 0]);
  const WCS = w.add('IFCAXIS2PLACEMENT3D(' + O + ',$,$)');
  const ctx = w.add("IFCGEOMETRICREPRESENTATIONCONTEXT($,'Model',3,1.E-05," + WCS + ',$)');
  const body = w.add("IFCGEOMETRICREPRESENTATIONSUBCONTEXT('Body','Model',*,*,*,*," + ctx + ',$,.MODEL_VIEW.,$)');
  const units = [
    w.add('IFCSIUNIT(*,.LENGTHUNIT.,.MILLI.,.METRE.)'), w.add('IFCSIUNIT(*,.AREAUNIT.,$,.SQUARE_METRE.)'),
    w.add('IFCSIUNIT(*,.VOLUMEUNIT.,$,.CUBIC_METRE.)'), w.add('IFCSIUNIT(*,.PLANEANGLEUNIT.,$,.RADIAN.)'),
    w.add('IFCSIUNIT(*,.MASSUNIT.,.KILO.,.GRAM.)'),
  ];
  const ua = w.add('IFCUNITASSIGNMENT((' + units.join(',') + '))');
  const project = w.add('IFCPROJECT(' + S(seed('project')) + ',$,' + S(name) + ',$,$,$,$,(' + ctx + '),' + ua + ')');
  const siteLP = w.add('IFCLOCALPLACEMENT($,' + WCS + ')');
  const site = w.add('IFCSITE(' + S(seed('site')) + ",$,'Site',$,$," + siteLP + ',$,$,.ELEMENT.,$,$,$,$,$)');
  const bldLP = w.add('IFCLOCALPLACEMENT(' + siteLP + ',' + WCS + ')');
  const bld = w.add('IFCBUILDING(' + S(seed('building')) + ",$,'Building',$,$," + bldLP + ',$,$,.ELEMENT.,$,$,$)');
  w.add('IFCRELAGGREGATES(' + S(seed('rel-site')) + ',$,$,$,' + project + ',(' + site + '))');
  w.add('IFCRELAGGREGATES(' + S(seed('rel-bld')) + ',$,$,$,' + site + ',(' + bld + '))');
  const levels = [...state.levels].sort((a, b) => a.z - b.z);
  const storeys = levels.map((lv, i) => {
    const lp = w.add('IFCLOCALPLACEMENT(' + bldLP + ',' + w.add('IFCAXIS2PLACEMENT3D(' + w.pt([0, 0, lv.z]) + ',$,$)') + ')');
    const id = w.add('IFCBUILDINGSTOREY(' + S(seed('storey' + i + lv.name)) + ',$,' + S(lv.name) + ',$,$,' + lp + ',$,$,.ELEMENT.,' + R(lv.z) + ')');
    return { lv, lp, id, contents: [] };
  });
  w.add('IFCRELAGGREGATES(' + S(seed('rel-storeys')) + ',$,$,$,' + bld + ',(' + storeys.map((s) => s.id).join(',') + '))');
  const storeyFor = (z) => { let s = storeys[0]; for (const t of storeys) if (t.lv.z <= z + 0.5) s = t; return s; };

  /** Local placement relative to a storey: origin p (world), axis z, ref x. */
  const place = (st, p, axis, ref) => {
    const loc = w.pt([p[0], p[1], p[2] - st.lv.z]);
    return w.add('IFCLOCALPLACEMENT(' + st.lp + ',' + w.add('IFCAXIS2PLACEMENT3D(' + loc + ',' + w.dir(axis) + ',' + w.dir(ref) + ')') + ')');
  };
  const shape = (items, type = 'SweptSolid', c = body, id = 'Body') => {
    const rep = w.add('IFCSHAPEREPRESENTATION(' + c + ',' + S(id) + ',' + S(type) + ',(' + items.join(',') + '))');
    return w.add('IFCPRODUCTDEFINITIONSHAPE($,$,(' + rep + '))');
  };
  const pos2 = (x, y) => w.add('IFCAXIS2PLACEMENT2D(' + w.pt([x, y]) + ',$)');
  const extrude = (profile, depth, posZ = 0) => w.add('IFCEXTRUDEDAREASOLID(' + profile + ',' + w.add('IFCAXIS2PLACEMENT3D(' + w.pt([0, 0, posZ]) + ',$,$)') + ',' + DZ + ',' + R(depth) + ')');

  const profileDef = (p, voff) => {
    const pos = pos2(0, voff), nm = S(p.name);
    switch (p.kind) {
      case 'I': return w.add('IFCISHAPEPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + [p.bf, p.d, p.tw, p.tf].map(R).join(',') + ',' + (p.r > 0 ? R(p.r) : '$') + ',$,$)');
      case 'C': return w.add('IFCUSHAPEPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + [p.d, p.bf, p.tw, p.tf].map(R).join(',') + ',$,$,$)');
      case 'L': return w.add('IFCLSHAPEPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + [p.b, p.b, p.t].map(R).join(',') + ',$,$,$)');
      case 'RHS': return w.add('IFCRECTANGLEHOLLOWPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + [p.b, p.h, p.t, p.ri, p.ro].map(R).join(',') + ')');
      case 'CHS': return w.add('IFCCIRCLEHOLLOWPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + R(p.D / 2) + ',' + R(p.t) + ')');
      case 'PL': return w.add('IFCRECTANGLEPROFILEDEF(.AREA.,' + nm + ',' + pos + ',' + R(p.b) + ',' + R(p.t) + ')');
      default: throw new Error(t('ifcout.err.profile', { kind: p.kind }));
    }
  };

  const voids = [];
  const materials = new Map();
  const psets = [];
  const elementOf = new Map();
  const PRED = { IfcBeam: '.BEAM.', IfcColumn: '.COLUMN.', IfcMember: '.BRACE.', IfcPlate: '.SHEET.' };
  for (const part of built.parts) {
    const st = storeyFor(Math.min(part.start[2], part.end[2]));   // lowest point of the part's reference line
    const f = part.frame;
    const lp = place(st, f.o, f.x, f.u);
    let solid = extrude(profileDef(part.profile, part.voff), part.length);
    // mitre ends: clip the extrusion by each cut plane (local X = u, Y = v + voff, Z = x; the face is x = x0 + ku·u + kv·v)
    for (const end of ['start', 'end']) {
      const c = part.endCuts && part.endCuts[end];
      if (!c) continue;
      const sg = end === 'start' ? -1 : 1, nrm = norm([-sg * c.ku, -sg * c.kv, sg]);
      const pl = w.add('IFCPLANE(' + w.add('IFCAXIS2PLACEMENT3D(' + w.pt([0, part.voff, c.x0]) + ',' + w.dir(nrm) + ',' + w.dir(anyPerp(nrm)) + ')') + ')');
      solid = w.add('IFCBOOLEANCLIPPINGRESULT(.DIFFERENCE.,' + solid + ',' + w.add('IFCHALFSPACESOLID(' + pl + ',.F.)') + ')');
    }
    const mark = marks.partMark.get(part.id) || '';
    const nm = part.name ? part.name : part.role;
    const id = w.add(part.ifc.toUpperCase() + '(' + S(seed('part' + part.id)) + ',$,' + S(nm) + ',$,' + S(part.profileName) + ',' + lp + ',' + shape([solid], part.endCuts ? 'Clipping' : 'SweptSolid') + ',' + S(mark) + ',' + PRED[part.ifc] + ')');
    elementOf.set(part.id, { id, st, lp });
    if (!materials.has(part.material)) materials.set(part.material, []);
    materials.get(part.material).push(id);
    psets.push([id, [['PartMark', 'IFCLABEL', mark], ['AssemblyMark', 'IFCLABEL', marks.asmMark.get(marks.asmOf.get(part.id)) || ''], ['Profile', 'IFCLABEL', part.profileName], ['Length', 'IFCLENGTHMEASURE', part.length], ['Weight', 'IFCMASSMEASURE', part.weight], ['Phase', 'IFCINTEGER', part.phase || 1]]]);
    // holes
    const p = part.profile;
    part.holes.forEach((h, i) => {
      let c, axis, depth;
      if (h.face === 'web') { c = [0, h.y + part.voff, h.x]; axis = [1, 0, 0]; depth = (p.kind === 'RHS' ? p.b : p.tw) + 2; }
      else if (h.face === 'plate') { c = [h.y, part.voff, h.x]; axis = [0, 1, 0]; depth = p.t + 2; }
      else { const sg = h.face === 'top' ? 1 : -1, t = p.kind === 'RHS' ? p.t : p.tf; c = [h.y, part.voff + sg * (p.depth / 2 - t / 2), h.x]; axis = [0, 1, 0]; depth = t + 2; }
      const start = sub(c, mul(axis, depth / 2));
      const olp = w.add('IFCLOCALPLACEMENT(' + lp + ',' + w.add('IFCAXIS2PLACEMENT3D(' + w.pt(start) + ',' + w.dir(axis) + ',' + w.dir(anyPerp(axis)) + ')') + ')');
      const circ = w.add('IFCCIRCLEPROFILEDEF(.AREA.,$,' + pos2(0, 0) + ',' + R(h.d / 2) + ')');
      const op = w.add('IFCOPENINGELEMENT(' + S(seed('hole' + part.id + ':' + i)) + ",$,'Hole',$,$," + olp + ',' + shape([extrude(circ, depth)]) + ',$,.OPENING.)');
      voids.push([id, op, 'hole' + part.id + ':' + i]);
    });
    part.cuts.forEach((c, i) => {
      if (c.kind !== 'cope') return;
      const sg = c.side === 'top' ? 1 : -1;
      const vC = part.voff + sg * (p.depth / 2 - c.depth / 2 + 0.5);
      const x0 = c.end === 'start' ? -1 : part.length - c.length;
      const olp = w.add('IFCLOCALPLACEMENT(' + lp + ',' + w.add('IFCAXIS2PLACEMENT3D(' + w.pt([0, vC, x0]) + ',$,$)') + ')');
      const rect = w.add('IFCRECTANGLEPROFILEDEF(.AREA.,$,' + pos2(0, 0) + ',' + R(p.width + 2) + ',' + R(c.depth + 1) + ')');
      const op = w.add('IFCOPENINGELEMENT(' + S(seed('cope' + part.id + ':' + i)) + ",$,'Cope',$,$," + olp + ',' + shape([extrude(rect, c.length + 1)]) + ',$,.OPENING.)');
      voids.push([id, op, 'cope' + part.id + ':' + i]);
    });
  }
  for (const [el, op, k] of voids) w.add('IFCRELVOIDSELEMENT(' + S(seed('void' + k)) + ',$,$,$,' + el + ',' + op + ')');

  // assemblies: a member with plates welded to it
  for (const a of marks.assemblies) {
    for (const mainId of a.ids) {
      const subs = built.parts.filter((p) => marks.asmOf.get(p.id) === mainId && p.id !== mainId);
      const main = elementOf.get(mainId);
      if (!subs.length) { main.st.contents.push(main.id); continue; }
      const asm = w.add('IFCELEMENTASSEMBLY(' + S(seed('asm' + mainId)) + ',$,' + S(a.mark) + ",$,'Assembly'," + w.add('IFCLOCALPLACEMENT(' + main.st.lp + ',' + WCS + ')') + ',$,' + S(a.mark) + ',.FACTORY.,.NOTDEFINED.)');
      w.add('IFCRELAGGREGATES(' + S(seed('rel-asm' + mainId)) + ',$,$,$,' + asm + ',(' + [main.id, ...subs.map((s) => elementOf.get(s.id).id)].join(',') + '))');
      main.st.contents.push(asm);
    }
  }

  // fasteners
  built.bolts.forEach((b, i) => {
    const st = storeyFor(Math.min(b.head[2], b.head[2] + b.axis[2] * b.length));
    const lp = place(st, b.head, b.axis, anyPerp(b.axis));
    const circ = w.add('IFCCIRCLEPROFILEDEF(.AREA.,$,' + pos2(0, 0) + ',' + R(b.d / 2) + ')');
    const label = (b.kind === 'ANCHORBOLT' ? 'Anchor rod ' : 'Bolt ') + b.d + ' x ' + b.length + ' ' + b.grade;   // i18n-ignore (IFC element name, a data format)
    const id = w.add('IFCMECHANICALFASTENER(' + S(seed('bolt' + (b.conn || b.loose) + ':' + i)) + ',$,' + S(label) + ',$,' + S(b.grade) + ',' + lp + ',' + shape([extrude(circ, b.length)]) + ',$,' + R(b.d) + ',' + R(b.length) + ',' + E(b.kind) + ')');
    st.contents.push(id);
  });

  // footings and their bars
  for (const ft of built.footings) {
    const f = ft.f, rot = (f.rotation || 0) * Math.PI / 180;
    const st = storeyFor(f.top - f.H);
    const lp = place(st, [f.x, f.y, f.top - f.H], [0, 0, 1], [Math.cos(rot), Math.sin(rot), 0]);
    const rect = w.add('IFCRECTANGLEPROFILEDEF(.AREA.,$,' + pos2(0, 0) + ',' + R(f.L) + ',' + R(f.B) + ')');
    const fmark = marks.footingMark?.get(f.id) || f.id;
    const fid = w.add('IFCFOOTING(' + S(seed('footing' + f.id)) + ',$,' + S('Footing ' + fmark) + ',$,' + S(f.concrete) + ',' + lp + ',' + shape([extrude(rect, f.H)]) + ',' + S(fmark) + ',.PAD_FOOTING.)');
    st.contents.push(fid);
    if (!materials.has('Concrete ' + f.concrete)) materials.set('Concrete ' + f.concrete, []);
    materials.get('Concrete ' + f.concrete).push(fid);
    const markList = schedule?.byFooting.get(f.id) || [];          // same order as footingBars
    ft.bars.forEach((g, gi) => {
      const b = BARS.get(g.bar);
      const segs = centerline2d(g.shape, g.dims, b);
      g.sets.forEach((set, si) => {
        const Wp = ([s, t]) => add(add(set.origin, mul(set.sDir, s)), mul(set.tDir, t));
        const pts = [Wp(segs[0].a)];
        const idx = [];
        for (const sg of segs) {
          const i0 = pts.length;
          if (sg.k === 'L') { pts.push(Wp(sg.b)); idx.push('IFCLINEINDEX((' + i0 + ',' + (i0 + 1) + '))'); }
          else { pts.push(Wp(sg.m), Wp(sg.b)); idx.push('IFCARCINDEX((' + i0 + ',' + (i0 + 1) + ',' + (i0 + 2) + '))'); }
        }
        const rel = pts.map((p) => [p[0], p[1], p[2] - st.lv.z]);
        const list = w.add('IFCCARTESIANPOINTLIST3D((' + rel.map((p) => '(' + p.map(R).join(',') + ')').join(',') + '),$)');
        const curve = w.add('IFCINDEXEDPOLYCURVE(' + list + ',(' + idx.join(',') + '),.F.)');
        const disk = w.add('IFCSWEPTDISKSOLID(' + curve + ',' + R(b.db / 2) + ',$,$,$)');
        const blp = w.add('IFCLOCALPLACEMENT(' + st.lp + ',' + w.add('IFCAXIS2PLACEMENT3D(' + O + ',$,$)') + ')');
        const mk = markList[gi]?.mark || '';
        const id = w.add('IFCREINFORCINGBAR(' + S(seed('bar' + f.id + ':' + gi + ':' + si)) + ',$,' + S(mk + ' ' + g.bar) + ',' + S(g.role) + ',' + S(g.shape) + ',' + blp + ',' + shape([disk], 'AdvancedSweptSolid') + ',' + S(mk) + ",$," + R(b.db) + ',' + R(b.area) + ',' + R(g.length) + ',.MAIN.,.TEXTURED.)');
        st.contents.push(id);
      });
    });
  }

  // grids
  if (state.grids.x.length && state.grids.y.length) {
    const xs = state.grids.x.map((g) => g.at), ys = state.grids.y.map((g) => g.at);
    const pad = 1500, x0 = Math.min(...xs) - pad, x1 = Math.max(...xs) + pad, y0 = Math.min(...ys) - pad, y1 = Math.max(...ys) + pad;
    const axis = (tag, a, b) => w.add('IFCGRIDAXIS(' + S(tag) + ',' + w.add('IFCPOLYLINE((' + w.pt(a) + ',' + w.pt(b) + '))') + ',.T.)');
    const U = state.grids.x.map((g) => axis(g.label, [g.at, y0], [g.at, y1]));
    const V = state.grids.y.map((g) => axis(g.label, [x0, g.at], [x1, g.at]));
    const st = storeys[0];
    const glp = w.add('IFCLOCALPLACEMENT(' + st.lp + ',' + w.add('IFCAXIS2PLACEMENT3D(' + O + ',$,$)') + ')');
    const gid = w.add('IFCGRID(' + S(seed('grid')) + ",$,'Grid',$,$," + glp + ',$,(' + U.join(',') + '),(' + V.join(',') + '),$,.RECTANGULAR.)');
    st.contents.push(gid);
  }

  for (const s of storeys) if (s.contents.length) w.add('IFCRELCONTAINEDINSPATIALSTRUCTURE(' + S(seed('contain' + s.lv.name)) + ',$,$,$,(' + s.contents.join(',') + '),' + s.id + ')');
  for (const [mat, els] of materials) {
    const m = w.add('IFCMATERIAL(' + S(mat) + ',$,$)');
    w.add('IFCRELASSOCIATESMATERIAL(' + S(seed('mat' + mat)) + ',$,$,$,(' + els.join(',') + '),' + m + ')');
  }
  psets.forEach(([el, props], i) => {
    const ps = props.map(([n, t, v]) => w.add('IFCPROPERTYSINGLEVALUE(' + S(n) + ',$,' + t + '(' + (t === 'IFCINTEGER' ? String(Math.round(v)) : typeof v === 'number' ? R(v) : S(v)) + '),$)'));
    const set = w.add('IFCPROPERTYSET(' + S(seed('pset' + i)) + ",$,'DetailCraft',$,(" + ps.join(',') + '))');
    w.add('IFCRELDEFINESBYPROPERTIES(' + S(seed('rdp' + i)) + ',$,$,$,(' + el + '),' + set + ')');
  });

  const stamp = now.toISOString().slice(0, 19);
  const header = [
    'ISO-10303-21;', 'HEADER;',
    "FILE_DESCRIPTION(('ViewDefinition [ReferenceView_V1.2]'),'2;1');",
    'FILE_NAME(' + S(name + '.ifc') + ',' + S(stamp) + ",(''),(''),'DetailCraft','DetailCraft lab build','');",
    "FILE_SCHEMA(('IFC4'));", 'ENDSEC;', 'DATA;',
  ];
  return [...header, ...w.lines, 'ENDSEC;', 'END-ISO-10303-21;', ''].join('\n');
}
