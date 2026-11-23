/* SPDX-License-Identifier: Apache-2.0 */
/**
 * zeman.js — one assembly as the file set a Zeman welding/assembly machine reads: one "WIA" XML file plus the DSTV NC files it
 * names (roadmap DC.133). No DOM, no imports: the host hands over its own NC writer (DetailCraft's nc1.js).
 *
 * THE ONLY SOURCE is one sample set a steel fabricator sent (an assembly "C1": a W360X79 column, a base plate, four plates and
 * two stiffeners; C1.Xml + C1.nc + 1.nc … 4.nc, and an IFC of the same assembly as a reference). There is no public
 * specification of this XML. Everything written here is what that sample shows; what it cannot settle is not written, or is
 * written exactly as the sample has it, and is listed under NOT CONFIRMED below. Do not add to the format from memory or guesswork.
 *
 * THE XML, as the sample has it, byte for byte (tools/detailcraft-test/test-zeman.mjs rebuilds the sample's file from its values):
 *   UTF-8 with a byte order mark, CRLF line ends, two-space indents, NO line end after the closing </WIA>.
 *   Line 1  <?xml version="1.0" encoding="utf-8"?>
 *   Line 2  <!--File written 2026-11-19 15:19:22 by Zeman Export Tool-->   (the time of writing, local time)
 *           The sample had "<>" here (its comment was emptied on the way to us). ProFit3D 24.1.1030.1286 refuses that line
 *           ("error on line 2 at column 2: StartTag: invalid element name") and reads the file once this comment is there:
 *           the requester's own test on lab pass 133, 2026-11-20 (roadmap FX.397). readWia keeps whatever line 2 a file has
 *           (`line2`), so the sample still reads and writes back byte for byte.
 *   <WIA VERSION="1.0">
 *     <HEAD NAME JOB_NR REVISION>     NAME = the assembly mark, JOB_NR = the order (the same text as the NC files' order line),
 *                                     REVISION = "" in the sample
 *       <STRING NAME="Description" VALUE />  <STRING NAME="MainProfileName" VALUE />  <STRING NAME="MainMaterialName" VALUE />
 *       <INT NAME="Quantity" VALUE />
 *       <DOUBLE NAME="Length" VALUE />  <DOUBLE NAME="Width" VALUE />  <DOUBLE NAME="Height" VALUE />  <DOUBLE NAME="Camber" VALUE="0.000" />
 *     <ASSEMBLY>
 *       <PART NAME ID="GUID_<uuid>" TYPE="LEADING_PART" | "ATTACHED_PART" REPRESENTATION="REFERENCE">    the leading part first
 *         <FRAME> <BASE X Y Z /> <RX X Y Z /> <RY X Y Z /> </FRAME>
 *         <REFERENCE DATA_TYPE="DSTV-NC" FILE_NAME="<piece mark>.nc" />
 *   Numbers: the shortest decimal text ("4000", "559.6", "98.65", "-1"); only Camber is "0.000".
 *
 * THE FRAME (worked out from the sample's IFC and checked on all 8 parts by the test):
 *   A part's FRAME is that part's OWN DSTV coordinate system, given in the LEADING part's DSTV coordinate system, in millimetres.
 *     BASE = where the part's NC zero point (x = 0, y = 0) is;  RX = the direction of its NC x;  RY = the direction of its NC y.
 *     RX × RY is the part's NC z (right-handed). A plate's material runs from BASE along +z by its thickness, so BASE is on the
 *     plate's face that is away from the viewer of the NC contour (face v is at z = thickness).
 *   The leading part's own frame is BASE 0 0 0, RX 1 0 0, RY 0 1 0. For an I-shape the DSTV system is (DSTV 7th ed., figure p. 7):
 *     x along the piece from its cut start, y from the outside of the bottom flange up to the top flange, z from the behind edge
 *     of the flanges toward the front. So the web's middle is at z = flange width / 2 and the column's top flange face at y = depth.
 *   HEAD Length / Height / Width = the size of the box round every part of the assembly along the leading part's x / y / z
 *     (the sample: 4000 = 20 base plate + 3980 column; Height 559.6 = 354 + 2 × 102.8; Width 550). Bolts are not in the file.
 *   Identical parts share one NC file (the sample: 2.nc three times, 4.nc twice), each with its own FRAME; a part that is the same
 *   piece turned over gets the frame of the turned piece (the sample's two stiffeners: one NC file, RX/RY opposite).
 *
 * DetailCraft's side (nc1.js): an I-shape's NC x, y, z are the part's x, v, −u with the zero point at (0, u = +bf/2, v = −d/2);
 * a plate's are x, u, v with the zero point at (0, u = −b/2, v = −t/2).
 *
 * NOT CONFIRMED by the sample (ask the requester; listed in the add-on's report too):
 *   - weld information ("optional" in her words): the sample has none, so none is written;
 *   - a leading part that is not an I-shape, an attached part that is not a plate: refused (zemanRefusal), not guessed;
 *   - REVISION (empty in the sample), Camber (0.000 in the sample: always written so), units other than millimetres;
 *   - how many decimals a machine reads (the sample has at most two: coordinates are rounded to 0.01 mm), and how a direction
 *     that is not along an axis is written (the sample has only 0, 1 and −1: up to six decimals are written);
 *   - the ID: the sample has "GUID_" + a UUID from the modelling program; here a UUID made from the order and the part's id, the
 *     same on every export of the same model;
 *   - the NC file of the leading part: the sample names every NC file after the piece mark in its header ("C1.nc" holds piece
 *     C1, which is also the assembly's mark); here always the piece mark, so a column c1 of assembly C1 is "c1.nc";
 *   - the quantity inside an NC file when the assembly is made more than once (the sample's Quantity is 1): here pieces in one
 *     assembly × the assembly's quantity;
 *   - parts set on loose (plate washers): left out, the XML lists welded parts only.
 */

export const XML_BOM = '﻿';
const EOL = '\r\n';
const TOL = 1e-6;

const add = (a, b) => [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
const sub = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
const mul = (a, s) => [a[0] * s, a[1] * s, a[2] * s];
const dot = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2];
export const cross = (a, b) => [a[1] * b[2] - a[2] * b[1], a[2] * b[0] - a[0] * b[2], a[0] * b[1] - a[1] * b[0]];

/** A number as the sample writes them: the shortest decimal text, at most `places` decimals, never "-0". */
export function num(v, places = 2) {
  const n = Number(Number(v).toFixed(places));
  return String(Object.is(n, -0) || Math.abs(n) < 0.5 * 10 ** -places ? 0 : n);
}
/** A direction component: 0, 1, −1 as the sample has them; anything else with up to six decimals. */
const dir = (v) => num(v, 6);
/** Text inside an XML attribute. */
export const attr = (s) => String(s ?? '').replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g, '').replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;').replace(/[\r\n\t]+/g, ' ');

const pad2 = (n) => String(n).padStart(2, '0');
/** Line 2 of the XML: "<!--File written YYYY-MM-DD hh:mm:ss by Zeman Export Tool-->" in local time (a Date, or that text as given). */
export function writtenLine(when) {
  if (typeof when === 'string' && /^\d{4}-\d\d-\d\d \d\d:\d\d:\d\d$/.test(when)) return '<!--File written ' + when + ' by Zeman Export Tool-->';
  const d = when instanceof Date && !Number.isNaN(when.getTime()) ? when : new Date();
  const t = d.getFullYear() + '-' + pad2(d.getMonth() + 1) + '-' + pad2(d.getDate()) + ' ' + pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
  return '<!--File written ' + t + ' by Zeman Export Tool-->';
}

/**
 * The WIA XML text (with the byte order mark; write it as UTF-8).
 * Line 2 is a.line2 when given (a file read back by readWia keeps its own), else writtenLine(a.written) (a.written: a Date, default now).
 * a = { name, jobNr, revision, description, mainProfile, mainMaterial, quantity, length, width, height,
 *       parts: [{ name, id (a UUID, without "GUID_"), leading, base [x, y, z], rx, ry, file }] } — the leading part first.
 */
export function wiaXml(a) {
  const L = [];
  L.push('<?xml version="1.0" encoding="utf-8"?>');
  L.push(typeof a.line2 === 'string' && /^(<>|<!--[^\r\n]*-->)$/.test(a.line2) ? a.line2 : writtenLine(a.written));
  L.push('<WIA VERSION="1.0">');
  L.push(`  <HEAD NAME="${attr(a.name)}" JOB_NR="${attr(a.jobNr)}" REVISION="${attr(a.revision ?? '')}">`);
  L.push(`    <STRING NAME="Description" VALUE="${attr(a.description)}" />`);
  L.push(`    <STRING NAME="MainProfileName" VALUE="${attr(a.mainProfile)}" />`);
  L.push(`    <STRING NAME="MainMaterialName" VALUE="${attr(a.mainMaterial)}" />`);
  L.push(`    <INT NAME="Quantity" VALUE="${Math.max(1, Math.round(Number(a.quantity) || 1))}" />`);
  L.push(`    <DOUBLE NAME="Length" VALUE="${num(a.length)}" />`);
  L.push(`    <DOUBLE NAME="Width" VALUE="${num(a.width)}" />`);
  L.push(`    <DOUBLE NAME="Height" VALUE="${num(a.height)}" />`);
  L.push('    <DOUBLE NAME="Camber" VALUE="0.000" />');
  L.push('  </HEAD>');
  L.push('  <ASSEMBLY>');
  const xyz = (v, f) => `X="${f(v[0])}" Y="${f(v[1])}" Z="${f(v[2])}"`;
  for (const p of a.parts) {
    L.push(`    <PART NAME="${attr(p.name)}" ID="GUID_${attr(p.id)}" TYPE="${p.leading ? 'LEADING_PART' : 'ATTACHED_PART'}" REPRESENTATION="REFERENCE">`);
    L.push('      <FRAME>');
    L.push(`        <BASE ${xyz(p.base, num)} />`);
    L.push(`        <RX ${xyz(p.rx, dir)} />`);
    L.push(`        <RY ${xyz(p.ry, dir)} />`);
    L.push('      </FRAME>');
    L.push(`      <REFERENCE DATA_TYPE="DSTV-NC" FILE_NAME="${attr(p.file)}" />`);
    L.push('    </PART>');
  }
  L.push('  </ASSEMBLY>');
  L.push('</WIA>');
  return XML_BOM + L.join(EOL);   // no line end after </WIA>: the sample has none
}

/** A strict reader of what wiaXml writes (and of the sample): the same object wiaXml takes. For the tests and the round trip. */
export function readWia(text) {
  const s = String(text).replace(/^﻿/, '');
  const at = (tag, src) => { const o = {}; const m = src.match(new RegExp('<' + tag + '\\b([^>]*)>')); if (!m) return null; for (const q of m[1].matchAll(/([A-Z_a-z]+)="([^"]*)"/g)) o[q[1]] = q[2].replace(/&quot;/g, '"').replace(/&lt;/g, '<').replace(/&gt;/g, '>').replace(/&amp;/g, '&'); return o; };
  const head = at('HEAD', s);
  if (!/<WIA VERSION="1\.0">/.test(s) || !head) throw new Error('not a WIA 1.0 file');
  const val = (kind, name) => { const m = s.match(new RegExp('<' + kind + ' NAME="' + name + '" VALUE="([^"]*)" />')); return m ? m[1] : null; };
  const v3 = (o) => [Number(o.X), Number(o.Y), Number(o.Z)];
  const parts = [...s.matchAll(/<PART\b[\s\S]*?<\/PART>/g)].map((m) => {
    const p = at('PART', m[0]);
    return { name: p.NAME, id: p.ID.replace(/^GUID_/, ''), leading: p.TYPE === 'LEADING_PART', type: p.TYPE, representation: p.REPRESENTATION,
      base: v3(at('BASE', m[0])), rx: v3(at('RX', m[0])), ry: v3(at('RY', m[0])), dataType: at('REFERENCE', m[0]).DATA_TYPE, file: at('REFERENCE', m[0]).FILE_NAME };
  });
  return { name: head.NAME, jobNr: head.JOB_NR, revision: head.REVISION, description: val('STRING', 'Description'), mainProfile: val('STRING', 'MainProfileName'),
    mainMaterial: val('STRING', 'MainMaterialName'), quantity: Number(val('INT', 'Quantity')), length: Number(val('DOUBLE', 'Length')), width: Number(val('DOUBLE', 'Width')),
    height: Number(val('DOUBLE', 'Height')), camber: val('DOUBLE', 'Camber'), line2: s.split(/\r?\n/)[1] ?? '', parts };
}

// ------------------------------------------------------------------ frames

/** The three ways a piece can be turned over onto itself (marks.js): signs of (x, u, v); x reversed means x → L − x. */
export const TURNS = { id: [1, 1, 1], rx: [1, -1, -1], rv: [-1, -1, 1], ru: [-1, 1, -1] };

const toWorld = (part, x, u, v) => add(add(add(part.frame.o, mul(part.frame.x, x)), mul(part.frame.u, u)), mul(part.frame.v, v + (part.voff || 0)));

/**
 * A part's DSTV coordinate system in the world: { o, x, y, z } (unit axes, right-handed), as nc1.js writes the part.
 * `turn` (a key of TURNS) gives the system of the SAME NC file laid on a part that is that piece turned over.
 * null for a profile the sample does not show (only I-shapes and plates).
 */
export function ncFrame(part, turn = 'id') {
  const k = part.profile.kind, f = part.frame, L = part.length;
  const [sx, su, sv] = TURNS[turn] || TURNS.id;
  // a point / a direction of the piece as the NC file has it (x along, u, v from the section's centre) → on this part
  const pt = (x, u, v) => toWorld(part, sx < 0 ? L - x : x, su * u, sv * v);
  const X = mul(f.x, sx), U = mul(f.u, su), V = mul(f.v, sv);
  if (k === 'I') return { o: pt(0, part.profile.bf / 2, -part.profile.d / 2), x: X, y: V, z: mul(U, -1) };
  if (k === 'PL') return { o: pt(0, -part.profile.b / 2, -part.profile.t / 2), x: X, y: U, z: V };
  return null;
}

/** A frame (ncFrame) seen from the leading part's frame: { base, rx, ry } — the XML's BASE, RX, RY. */
export function relFrame(lead, f) {
  const inLead = (v) => [dot(v, lead.x), dot(v, lead.y), dot(v, lead.z)];
  return { base: inLead(sub(f.o, lead.o)), rx: inLead(f.x), ry: inLead(f.y) };
}

/** The size of a part's box in its own NC system: [along x, along y, along z]. */
function ncSize(part) {
  const p = part.profile;
  return p.kind === 'I' ? [part.length, p.d, p.bf] : [part.length, p.b, p.t];
}

/** The box round the parts in the leading part's system: { length (x), height (y), width (z) } — HEAD Length / Height / Width. */
export function assemblyBox(lead, placed) {
  const lo = [Infinity, Infinity, Infinity], hi = [-Infinity, -Infinity, -Infinity];
  for (const { part, frame } of placed) {
    const [a, b, c] = ncSize(part), r = relFrame(lead, frame), rz = cross(r.rx, r.ry);
    for (const i of [0, 1]) for (const j of [0, 1]) for (const k of [0, 1]) {
      const q = add(add(add(r.base, mul(r.rx, i * a)), mul(r.ry, j * b)), mul(rz, k * c));
      for (let n = 0; n < 3; n++) { lo[n] = Math.min(lo[n], q[n]); hi[n] = Math.max(hi[n], q[n]); }
    }
  }
  return { length: hi[0] - lo[0], height: hi[1] - lo[1], width: hi[2] - lo[2] };
}

/** How far part `p`, turned over by `turn`, is from being the piece `ref` (the largest difference of a hole, mm; Infinity = not the same piece). */
export function turnMisfit(ref, p, turn) {
  const [sx, su, sv] = TURNS[turn];
  if (Math.abs(ref.length - p.length) > 2 || ref.holes.length !== p.holes.length) return Infinity;
  const L = p.length;
  // the piece `ref` has a hole at (face, x, y); laid on p by this turn it is at:
  const laid = ref.holes.map((h) => {
    const flange = h.face === 'top' || h.face === 'bottom';
    return { face: flange && sv < 0 ? (h.face === 'top' ? 'bottom' : 'top') : h.face, x: sx < 0 ? L - h.x : h.x, y: h.y * (h.face === 'web' ? sv : su), d: h.d };
  });
  const left = p.holes.slice();
  let worst = 0;
  for (const h of laid) {
    let best = -1, bd = Infinity;
    left.forEach((q, i) => { if (q.face !== h.face || Math.abs(q.d - h.d) > 0.1) return; const d = Math.hypot(q.x - h.x, q.y - h.y); if (d < bd) { bd = d; best = i; } });
    if (best < 0) return Infinity;
    left.splice(best, 1);
    worst = Math.max(worst, bd);
  }
  return worst;
}
/** The turn that lays the piece `ref` on part `p` best: the part as it stands when that fits ('id' first). */
export function bestTurn(ref, p) {
  let best = 'id', bd = Infinity;
  for (const t of ['id', 'rx', 'rv', 'ru']) { const d = turnMisfit(ref, p, t); if (d < bd - TOL) { bd = d; best = t; } }
  return { turn: best, misfit: bd };
}

/** A UUID (the shape the sample's IDs have) from a text, the same for the same text (cyrb128). */
export function uuidFor(seed) {
  let h1 = 1779033703, h2 = 3144134277, h3 = 1013904242, h4 = 2773480762;
  for (let i = 0; i < seed.length; i++) {
    const k = seed.charCodeAt(i);
    h1 = h2 ^ Math.imul(h1 ^ k, 597399067); h2 = h3 ^ Math.imul(h2 ^ k, 2869860233);
    h3 = h4 ^ Math.imul(h3 ^ k, 951274213); h4 = h1 ^ Math.imul(h4 ^ k, 2716044179);
  }
  h1 = Math.imul(h3 ^ (h1 >>> 18), 597399067); h2 = Math.imul(h4 ^ (h2 >>> 22), 2869860233);
  h3 = Math.imul(h1 ^ (h3 >>> 17), 951274213); h4 = Math.imul(h2 ^ (h4 >>> 19), 2716044179);
  h1 ^= h2 ^ h3 ^ h4; h2 ^= h1; h3 ^= h1; h4 ^= h1;
  const hex = [h1, h2, h3, h4].map((h) => (h >>> 0).toString(16).padStart(8, '0')).join('').split('');
  hex[12] = '4'; hex[16] = '89ab'[parseInt(hex[16], 16) & 3];   // the sample's are version 4 UUIDs
  const s = hex.join('');
  return `${s.slice(0, 8)}-${s.slice(8, 12)}-${s.slice(12, 16)}-${s.slice(16, 20)}-${s.slice(20)}`;
}

/** A name that is safe as a file or folder name on every system. */
export const fileSafe = (s) => String(s ?? '').replace(/[^A-Za-z0-9._-]/g, '_').replace(/^\.+/, '_').slice(0, 60) || '_';

// ------------------------------------------------------------------ one assembly

/**
 * Why an assembly cannot be written, as { code, fills } (the add-on's words: zeman.refuse.<code>), or null.
 * main = the main part, subs = the parts welded to it, ncRefusal = the host's (part) → reason | null.
 */
export function zemanRefusal(main, subs, ncRefusal) {
  if (main.profile.kind !== 'I') return { code: 'lead', fills: { profile: main.profileName } };
  const odd = subs.find((s) => s.profile.kind !== 'PL');
  if (odd) return { code: 'attached', fills: { profile: odd.profileName } };
  for (const p of [main, ...subs]) { const why = ncRefusal ? ncRefusal(p) : null; if (why) return { code: 'nc', fills: { why } }; }
  return null;
}

/**
 * The file set of one assembly.
 *   o = { mark (assembly mark), quantity, order, main (part), attached: [parts welded to it, loose ones already left out],
 *         partMark: (part) → mark, name: (part) → the name shown, phase?: (part) → text,
 *         writeNc: (part, { order, mark, count, phase }) → DSTV text (DetailCraft's writeNc1) }
 *   → { folder, xmlName, files: [{ name, data }] (the XML first; names without the folder), parts: n, ncFiles: n, turned: n, misfit: mm }
 */
export function zemanAssembly(o) {
  const lead = ncFrame(o.main);
  if (!lead) throw new Error('zeman: the leading part must be an I-shape');
  const folder = fileSafe(o.mark);
  const files = [], parts = [], placed = [{ part: o.main, frame: lead }];
  const qty = Math.max(1, Math.round(Number(o.quantity) || 1));
  const nc = (part, mark, pieces) => {
    const name = fileSafe(mark) + '.nc';
    const text = String(o.writeNc(part, { order: o.order, mark, count: pieces * qty, phase: o.phase ? o.phase(part) : String(part.phase || 1) }));
    // the sample's comment line names the file itself ("** C1.nc")
    files.push({ name, data: text.replace(/^(ST\r?\n)\*\*[^\r\n]*/, '$1** ' + name) });
    return name;
  };
  const id = (part) => uuidFor(String(o.order ?? '') + '|' + part.id);
  const mainMark = o.partMark(o.main);
  parts.push({ name: o.name(o.main), id: id(o.main), leading: true, base: [0, 0, 0], rx: [1, 0, 0], ry: [0, 1, 0], file: nc(o.main, mainMark, 1) });
  // identical parts share one NC file: the first of each mark is the piece the file describes
  const groups = new Map();
  for (const p of o.attached) { const m = o.partMark(p); if (!groups.has(m)) groups.set(m, []); groups.get(m).push(p); }
  const fileOf = new Map();
  for (const [m, list] of groups) fileOf.set(m, nc(list[0], m, list.length));
  let turned = 0, misfit = 0;
  for (const p of o.attached) {
    const m = o.partMark(p), ref = groups.get(m)[0];
    let turn = 'id';
    if (p !== ref) { const b = bestTurn(ref, p); turn = b.turn; if (Number.isFinite(b.misfit)) misfit = Math.max(misfit, b.misfit); else { turn = 'id'; misfit = Infinity; } if (turn !== 'id') turned++; }
    const f = ncFrame(p, turn);
    if (!f) throw new Error('zeman: an attached part must be a plate');
    placed.push({ part: p, frame: f });
    parts.push({ name: o.name(p), id: id(p), leading: false, ...relFrame(lead, f), file: fileOf.get(m) });
  }
  const box = assemblyBox(lead, placed);
  const xmlName = folder + '.Xml';   // the sample: "C1.Xml"
  const xml = wiaXml({ name: o.mark, jobNr: o.order, revision: '', description: o.name(o.main), mainProfile: o.main.profileName, mainMaterial: o.main.material,
    quantity: qty, length: box.length, width: box.width, height: box.height, written: o.written, parts });
  return { folder, xmlName, files: [{ name: xmlName, data: xml }, ...files], parts: parts.length, ncFiles: files.length, turned, misfit };
}

/**
 * The export of a model: every assembly asked for, each in a folder named after its mark.
 *   doc = { order, built: { parts, byId }, marks: { partMark, asmOf, assemblies: [{ mark, count, ids }] }, selection: [part ids] (none = every assembly),
 *           ncRefusal, writeNc }
 *   → { files: [{ name: '<mark>/<file>', data }], done: [{ mark, parts, ncFiles }], skipped: [{ mark, code, fills }], loose: n, turned: n, misfit }
 */
export function zemanExport(doc) {
  const { built, marks } = doc;
  const wanted = new Set((doc.selection || []).map((id) => marks.asmOf.get(id)).filter(Boolean));
  const out = { files: [], done: [], skipped: [], loose: 0, turned: 0, misfit: 0 };
  for (const row of marks.assemblies) {
    const mainId = wanted.size ? row.ids.find((id) => wanted.has(id)) : row.ids[0];
    if (!mainId) continue;
    const main = built.byId.get(mainId);
    const all = built.parts.filter((p) => p.id !== mainId && marks.asmOf.get(p.id) === mainId);
    const subs = all.filter((p) => !p.loose);
    const why = zemanRefusal(main, subs, doc.ncRefusal);
    if (why) { out.skipped.push({ mark: row.mark, ...why }); continue; }
    const r = zemanAssembly({ mark: row.mark, quantity: row.count, order: doc.order, main, attached: subs, partMark: (p) => marks.partMark.get(p.id),
      name: (p) => String(p.name || p.role || p.type || ''), writeNc: doc.writeNc, written: doc.written });
    for (const f of r.files) out.files.push({ name: r.folder + '/' + f.name, data: f.data });
    out.done.push({ mark: row.mark, folder: r.folder, parts: r.parts, ncFiles: r.ncFiles });
    out.loose += all.length - subs.length;
    out.turned += r.turned;
    out.misfit = Math.max(out.misfit, r.misfit);
  }
  return out;
}
