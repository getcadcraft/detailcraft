#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/**
 * test-detailcraft.mjs — DetailCraft's DOM-free modules (the same files /lab/detailcraft loads from
 * public_html/assets/apps/detailcraft/<build>/), without a browser.
 *
 *   node bin/test-detailcraft.mjs [--build dev|x.y] [--keep] [--verbose]
 *
 * Profiles (every catalog row cross-checked: area from the dimensions vs the published area, weight vs
 * area × density), frames, the model's one edit path (undo/redo, refusals, untrusted files), the sample
 * frame built into parts (cut lengths, end plate and base plate holes lined up through both parts,
 * bolt lengths), joint finding and "apply to similar", part and assembly marks (turned-over parts,
 * tolerances, channels), the clipboard (copy/paste with new ids, connections re-pointed, marks numbered again, one
 * undo step, custom profiles, tampered clipboards refused), the bill of materials CSV, rebar (bar table, hooks, cut lengths worked two
 * ways, layouts, cover/spacing checks, the bending schedule CSV), IFC4 read back by the VENDORED
 * web-ifc (classes, counts, profile dimensions, extrusion depths, bolt and bar lengths, mesh extents
 * along each member), DSTV NC1 read back by a strict reader + the zip by `unzip -t` and by two independent
 * DSTV readers (DSTV.Net, the Rust dstv crate; tools/detailcraft-test/dstv/), shop drawings as PDF checked
 * by poppler (pdfinfo page size, pdftotext words), GA and assembly drawings (dimensions against the model,
 * an 11-page PDF read and rendered by poppler), and IFC import (DetailCraft's own export, IfcOpenShell-made
 * IFC2X3 / IFC4-in-feet fixtures, sample buildings; class counts checked against IfcOpenShell). --keep leaves the files in
 * tmp/detailcraft-test/. Exits non-zero on any failure.
 */
import path from 'node:path';
import fs from 'node:fs';
import os from 'node:os';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';

const ROOT = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const args = process.argv.slice(2);
const opt = (k, d) => { const i = args.indexOf(k); return i >= 0 ? args[i + 1] : d; };
const BUILD = opt('--build', 'dev');
const VERBOSE = args.includes('--verbose');
const KEEP = args.includes('--keep');
const APP = path.join(ROOT, 'public_html/assets/apps/detailcraft', BUILD);
const OUT = KEEP ? path.join(ROOT, 'tmp/detailcraft-test') : fs.mkdtempSync(path.join(os.tmpdir(), 'detailcraft-test-'));
fs.mkdirSync(OUT, { recursive: true });
const load = (f) => import(pathToFileURL(path.join(APP, f)).href);

// strings DOM-free modules make (model errors, report notes) come from the app's language file, as on the page
(await load('i18n.js')).init({ strings: JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8')) });
const Pr = await load('profiles.js');
const G = await load('geom.js');
const Md = await load('model.js');
const { build } = await load('build.js');
const Mk = await load('marks.js');
const Cn = await load('connections.js');
const Rb = await load('rebar.js');
const Csv = await load('csv.js');
const { writeIfc, guidFor, S: stepString } = await load('ifc.js');
const Nc = await load('nc1.js');
const { zip, crc32 } = await load('zip.js');
const { shopDrawing } = await load('shop.js');
const { toPdf } = await load('pdf.js');
const { sampleModel } = await load('sample.js');
const Dw = await load('drawings.js');
const { importIfc } = await load('ifc-import.js');

let pass = 0, fail = 0;
const ok = (cond, name, extra = '') => { if (cond) { pass++; if (VERBOSE) console.log('  ok   ' + name); } else { fail++; console.log('  FAIL ' + name + (extra ? ' — ' + extra : '')); } };
const near = (a, b, t = 1e-6) => Math.abs(a - b) <= t;
const throws = (fn, re) => { try { fn(); return false; } catch (e) { return re ? re.test(e.message) : true; } };
const section = (s) => console.log('\n' + s);
function tool(bin, file, extra = []) {
  const exe = ['/usr/bin/' + bin, '/usr/local/bin/' + bin].find((f) => fs.existsSync(f));
  if (!exe) return null;
  try { return execFileSync(exe, [...extra, file, ...(bin === 'pdftotext' ? ['-'] : [])], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { return 'Error: ' + (e.stderr || e.message); }
}

// ---------------------------------------------------------------------------
section('Profiles');
{
  const cat = [...Pr.CATALOG.values()];
  // the shared section table (lib/shapes/sections.js, 0.5 MQ.3): 1,259 sizes here (every family but unequal-leg angles)
  ok(cat.length === 1259, 'catalog has 1,259 cited sizes from the shared section table', String(cat.length));
  const legacy = ['W8x10', 'W10x49', 'W24x55', 'C12x20.7', 'L6x6x1/2', 'HSS8x8x1/2', 'HSS4.500x0.237', 'HSS6.625x0.280', 'IPE100', 'HEA300', 'HEB300'];
  ok(legacy.every((n) => Pr.isLegacyName(n) && Pr.CATALOG.get(n.toUpperCase())?.name === n), 'the 0.4 catalog names are all there, named as before');
  const w49 = Pr.getProfile('W10x49'), h45 = Pr.getProfile('HSS4.500x0.237');
  ok(near(w49.d, 9.98 * 25.4) && near(h45.massPub, 10.79 * 1.48816394) && near(Pr.getProfile('HSS6.625x0.280').D, 6.625 * 25.4), 'the three rows whose database value is rounded keep their 0.4 values (W10x49 d 9.98, HSS4.500x0.237 10.79 lb/ft, OD 6.625)');
  // families drawn with parallel flanges / square corners, and the Pipe rows whose published area the database rounds
  const famTol = { S: 0.02, UPN: 0.015, Pipe: 0.035, W: 0.008 };
  const ODD = new Set(['C3x3.5']);   // its nominal weight and area run 6% and 1.6% apart in the database itself
  const IN2 = 645.16, LBFT_PER_IN2 = 490 / 144;            // steel at 490 lb/ft³: lb/ft per in² of area
  for (const p0 of cat) {
    const p = Pr.getProfile(p0.name);
    const ex = Pr.exactArea(p);
    const tolA = famTol[p.family] ?? { I: 0.004, C: 0.015, L: 0.015, RHS: 0.008, CHS: 0.01 }[p.kind];
    ok(Math.abs(ex / p.areaPub - 1) <= (ODD.has(p.name) ? 0.02 : tolA), p.name + ': area from dimensions matches the published area', (ex / 100).toFixed(2) + ' vs ' + (p.areaPub / 100).toFixed(2) + ' cm²');
    if (p.source === 'en' && p.kind === 'I') ok(near(ex / 100 * 0.785, p.massPub, 0.051), p.name + ': EN mass = A × 7850 kg/m³ (to its 0.1 kg/m)', p.massPub + ' vs ' + (ex / 100 * 0.785).toFixed(2));
    else if (p.source === 'en') ok(near(p.pub.A * 0.785, p.massPub, 0.1), p.name + ': EN mass = published A × 7850 kg/m³ (both rounded)', p.massPub + ' vs ' + (p.pub.A * 0.785).toFixed(2));
    else if (p.kind === 'RHS' || p.kind === 'CHS') {
      // AISC HSS weights use the NOMINAL wall; areas the design wall (0.93 t)
      const nomArea = p.kind === 'RHS' ? 2 * p.pub.tNom * (p.pub.H + p.pub.B - 2 * p.pub.tNom) - (4 - Math.PI) * ((2 * p.pub.tNom) ** 2 - p.pub.tNom ** 2) : Math.PI * (p.pub.D - p.pub.tNom) * p.pub.tNom;
      ok(Math.abs(p.pub.W / (nomArea * LBFT_PER_IN2) - 1) < 0.005, p.name + ': weight = nominal-wall area × 490 lb/ft³', p.pub.W + ' vs ' + (nomArea * LBFT_PER_IN2).toFixed(2));
      ok(near(p.pub.t, Math.round(p.pub.tNom * 0.93 * 1000) / 1000, p.family === 'Pipe' ? 0.0025 : 0.0015), p.name + ': design wall = 0.93 × nominal');
    } else ok(Math.abs(p.pub.W / (p.pub.A * LBFT_PER_IN2) - 1) < (ODD.has(p.name) ? 0.06 : 0.025), p.name + ': nominal weight ≈ A × 490 lb/ft³', (p.pub.W / (p.pub.A * LBFT_PER_IN2)).toFixed(3));
    const outer = p.loops[0];
    ok(Pr.shoelace(outer) > 0, p.name + ': outer loop counter-clockwise');
    const net = p.loops.reduce((s, l) => s + Pr.shoelace(l), 0);
    ok(Math.abs(net / ex - 1) < 0.01, p.name + ': drawn outline area within 1% of the exact area', (net / ex).toFixed(4));
    const bb = Pr.bbox(outer);
    ok(near(bb.x0 + bb.x1, 0, 1e-6) && near(bb.y0 + bb.y1, 0, 1e-6), p.name + ': outline centered on its bounding box');
  }
  const w = Pr.getProfile('w16x26');
  ok(w && w.name === 'W16x26' && near(w.d, 15.7 * 25.4) && near(w.mass, 26 * 1.48816394, 1e-9), 'names are case-insensitive; W16x26 d = 398.78 mm, 38.69 kg/m');
  ok(near(Pr.getProfile('HEB200').area, 7808.0, 1), 'HEB200 exact area 78.08 cm²');
  const pl = Pr.getProfile('PL20x200');
  ok(pl && pl.kind === 'PL' && pl.t === 20 && pl.b === 200 && near(pl.mass, 0.02 * 0.2 * 7850), 'PL20x200: parametric plate, mass from area × 7850');
  ok(Pr.getProfile('PL0x200') === null && Pr.getProfile('W99x1') === null && Pr.getProfile(42) === null, 'unknown sizes resolve to null');
  ok(!Pr.cleanCustom({ name: 'W12x26', kind: 'I', d: 1, bf: 1, tw: 1, tf: 1, r: 0 }).ok, 'a custom profile cannot take a catalog name');
  {
    // a model saved before W12x35 joined the catalog, with a custom profile of that name: it opens, and its own profile wins
    const old = Pr.cleanCustom({ name: 'W12x35', kind: 'I', d: 300, bf: 150, tw: 8, tf: 12, r: 0 }, { saved: true });
    ok(old.ok && Pr.getProfile('W12x35', [old.profile]).d === 300 && Pr.getProfile('W12x35').d > 300, 'a saved custom profile named like a newer catalog size opens and wins in its model; elsewhere the name is the catalog size');
    ok(!Pr.cleanCustom({ name: 'W12x35', kind: 'I', d: 300, bf: 150, tw: 8, tf: 12, r: 0 }).ok && !Pr.cleanCustom({ name: 'W12x26', kind: 'I', d: 300, bf: 150, tw: 8, tf: 12, r: 0 }, { saved: true }).ok, 'new custom profiles still cannot take a catalog name, and a saved one cannot take a 0.4 catalog name');
  }
  ok(!Pr.cleanCustom({ name: 'X', kind: 'I', d: 100, bf: 50, tw: 60, tf: 5, r: 0 }).ok, 'custom I: web wider than flange refused');
  const cu = Pr.cleanCustom({ name: 'Built-up 600', kind: 'I', d: 600, bf: 250, tw: 10, tf: 20, r: 0 });
  ok(cu.ok && near(Pr.getProfile('Built-up 600', [cu.profile]).area, 2 * 250 * 20 + 560 * 10), 'custom welded I: area from its plates');
  ok(Pr.catalogGroups().every((g) => g.names.length && g.source), 'catalog groups name their source');
}

// ---------------------------------------------------------------------------
section('Frames');
{
  const f = G.frame([0, 0, 0], [6000, 0, 0]);
  ok(near(f.len, 6000) && f.v[2] === 1 && near(f.u[1], 1), 'level beam along x: v = +z, u = +y');
  const c = G.cross(f.x, f.u);
  ok(near(c[0], f.v[0]) && near(c[1], f.v[1]) && near(c[2], f.v[2]), 'x × u = v (right-handed)');
  const fc = G.frame([0, 0, 0], [0, 0, 4000]);
  ok(near(fc.v[0], 1) && near(fc.u[1], -1), 'vertical member: v = +x, u = −y');
  const fr = G.frame([0, 0, 0], [0, 0, 4000], 90);
  ok(near(fr.v[1], 1) && near(fr.u[0], 1), 'rotation 90° turns the column depth to +y');
  const fs2 = G.frame([0, 0, 0], [3000, 4000, 2000], 30);
  for (const [a, b, n] of [[fs2.x, fs2.u, 'x·u'], [fs2.u, fs2.v, 'u·v'], [fs2.v, fs2.x, 'v·x']]) ok(near(G.dot(a, b), 0, 1e-12), 'sloped, rotated frame: ' + n + ' = 0');
  const p = G.toWorld(fs2, 1200, -35, 80, -150);
  const l = G.toLocal(fs2, p, -150);
  ok(near(l.x, 1200, 1e-9) && near(l.u, -35, 1e-9) && near(l.v, 80, 1e-9), 'toWorld → toLocal round trip');
  ok(G.clipLoopV([[0, 0], [10, 0], [10, 10], [0, 10]], 4).length === 4 && near(Pr.shoelace(G.clipLoopV([[0, 0], [10, 0], [10, 10], [0, 10]], 4)), 40), 'clip a section below a cope line');
}

// ---------------------------------------------------------------------------
section('Model: one edit path, undo, files');
{
  const m = new Md.Model(Md.starterState('T'));
  ok(m.state.grids.x.length === 3 && m.state.grids.y.length === 2 && m.state.grids.x[2].at === 12000, 'starter grids 1–3 at 6 m, A–B');
  const id = m.change('Add beam', (tx) => tx.addMember({ type: 'beam', start: [0, 0, 4000], end: [6000, 0, 4000] }));
  ok(m.state.members.length === 1 && m.dirty && m.canUndo, 'add a beam: one undo step, dirty');
  m.change('Hole', (tx) => tx.addHole(id, { face: 'web', x: 100, y: 50, d: 22 }));
  const before = JSON.stringify(m.state);
  ok(throws(() => m.change('Bad', (tx) => { tx.addHole(id, { face: 'web', x: 1, y: 1, d: 22 }); tx.addMember({ type: 'beam', profile: 'W99x1', start: [0, 0, 0], end: [1, 0, 0] }); }), /Unknown profile/), 'a bad edit throws');
  ok(JSON.stringify(m.state) === before, '… and changes nothing (half an edit is rolled back)');
  ok(throws(() => m.change('Zero', (tx) => tx.addMember({ type: 'beam', start: [0, 0, 0], end: [0.2, 0, 0] })), /same/), 'zero-length member refused');
  ok(throws(() => m.change('Hole', (tx) => tx.addHole(id, { face: 'web', x: 1, y: 1, d: 0 })), /diameter/), 'zero-diameter hole refused');
  m.undo();
  ok(m.state.members[0].holes.length === 0, 'undo removes the hole');
  m.redo();
  ok(m.state.members[0].holes.length === 1, 'redo puts it back');
  m.undo(); m.undo();
  ok(m.state.members.length === 0 && !m.canUndo && m.canRedo, 'undo back to empty');
  m.redo(); m.redo();
  m.change('Cope', (tx) => tx.addCut(id, { kind: 'cope', end: 'start', side: 'top', length: 120, depth: 40 }));
  m.change('Levels', (tx) => tx.setLevels([{ name: 'Roof', z: 8000 }, { name: 'Level 1', z: 0 }]));
  ok(m.state.levels[0].name === 'Level 1', 'levels sorted by elevation');
  ok(throws(() => m.change('L', (tx) => tx.setLevels([{ name: 'A', z: 0 }, { name: 'A', z: 1 }])), /Two levels/), 'duplicate level names refused');
  const text = m.toJSON();
  const m2 = new Md.Model();
  const { warnings } = m2.load(text);
  ok(!warnings.length && JSON.stringify(m2.state) === JSON.stringify(m.state), 'save → open: identical model, no warnings');
  ok(!m2.dirty && !m2.canUndo, 'an opened model starts clean, no undo history');
  ok(JSON.parse(text).format === 'detailcraft' && JSON.parse(text).version === 2, 'file carries format + version (2 since phases, 0.4 D13)');
  ok(throws(() => Md.readModel('{"format":"detailcraft","version":3}'), /newer/), 'a newer file version is refused plainly');
  ok(throws(() => Md.readModel('not json'), /not a DetailCraft model/), 'not JSON → plain refusal');
  ok(throws(() => Md.readModel('{"format":"other","version":1}'), /not a DetailCraft model/), 'another format → refusal');
  const bad = JSON.parse(text);
  bad.name = 'Evil <img src=x onerror=alert(1)>\u0000';
  bad.members.push({ id: 'm1', type: 'beam', profile: 'W16x26', start: [0, 0, 'x'], end: [1, 1, 1] });
  bad.members.push({ id: 'm1', type: 'rocket', profile: 'W16x26', start: [0, 0, 0], end: [5, 0, 0], holes: [{ face: 'web', x: 1, y: 1, d: -4 }, { face: 'web', x: 2, y: 2, d: 18 }] });
  bad.connections = [{ id: 'j9', type: 'endplate', beam: 'nope', column: 'nope', end: 'start' }, { id: 'j8', type: 'baseplate', column: 'm1', params: { tp: 'DROP', width: 1e9 } }];
  bad.footings = [{ id: 'f1', x: 0, y: 0, top: 0, L: 10, B: 10, H: 10 }];
  const r = Md.readModel(JSON.stringify(bad));
  ok(r.state.name === 'Evil <img src=x onerror=alert(1)>', 'control characters stripped (text stays text; the UI shows it with textContent)');
  ok(r.state.members.length === 2 && r.state.members[1].type === 'beam' && r.state.members[1].holes.length === 1, 'bad member dropped, unknown type → beam, bad hole dropped');
  ok(new Set(r.state.members.map((x) => x.id)).size === 2, 'duplicate ids renumbered');
  ok(r.state.connections.length === 1 && r.state.connections[0].params.tp === Cn.BASEPLATE_DEFAULTS.tp && r.state.connections[0].params.width === Cn.BASEPLATE_DEFAULTS.width, 'connection to missing parts dropped; bad params fall back to defaults');
  ok(r.state.footings.length === 0 && r.warnings.length >= 3, 'invalid footing dropped with warnings');
  const g = Md.gridsFromSpacings('A B C', '6000, 7500', '1 2', '5000');
  ok(g.x[2].at === 13500 && g.y[1].at === 5000 && Md.spacingsOf(g.x) === '6000 7500', 'grids from labels + spacings and back');
  ok(throws(() => Md.gridsFromSpacings('A B C', '6000', '', ''), /one spacing/), 'spacing count must match');
}

// ---------------------------------------------------------------------------
section('Sample frame built into parts');
const sample = sampleModel();
const built = build(sample.state);
const W12 = Pr.getProfile('W12x50'), W16 = Pr.getProfile('W16x26');
{
  const S = sample.state;
  ok(S.members.length === 11 && S.connections.length === 14 && S.footings.length === 7, 'sample: 11 members, 14 connections, 7 footings');
  ok(built.problems.length === 0, 'sample builds without problems', JSON.stringify(built.problems.slice(0, 3)));
  const beams = built.parts.filter((p) => p.type === 'beam'), cols = built.parts.filter((p) => p.type === 'column');
  const plates = built.parts.filter((p) => p.type === 'plate');
  ok(beams.length === 4 && cols.length === 6 && plates.length === 14, '4 beams, 6 columns, 14 plates (8 end, 6 base)');
  const beamLen = 6000 - 2 * (W12.d / 2 + Cn.ENDPLATE_DEFAULTS.tp);
  ok(beams.every((b) => near(b.length, beamLen, 1e-6)), 'beams cut back to the end plates: 6000 − 2 × (309.88/2 + 20) = ' + beamLen.toFixed(2));
  ok(cols.every((c) => near(c.length, 4000 - Cn.BASEPLATE_DEFAULTS.tp, 1e-9) && near(c.start[2], 25, 1e-9)), 'columns stand on their 25 mm base plates (3975 long)');
  const b0 = beams[0];
  ok(near(b0.start[2] + b0.voff + W16.d / 2, 4000, 1e-6) && near(b0.voff, -W16.d / 2, 1e-9), 'beam top of steel on Level 2');
  const ep = plates.find((p) => p.role === 'End plate' && p.attachTo === b0.member);
  ok(ep && ep.holes.length === 8 && near(ep.length, W16.d, 1e-9), 'end plate: flush (beam depth tall), 8 holes');
  // every end-plate hole has a column flange hole on the same axis
  let aligned = 0, total = 0;
  for (const pl of plates.filter((p) => p.role === 'End plate')) {
    const conn = S.connections.find((c) => c.id === pl.conn);
    const col = built.byId.get(conn.column);
    for (const h of pl.holes) {
      total++;
      const wp = G.toWorld(pl.frame, h.x, h.y, 0, pl.voff);
      const axis = pl.frame.v;
      const hit = col.holes.find((ch) => {
        const tf = col.profile.tf, sgn = ch.face === 'top' ? 1 : -1;
        const wc = G.toWorld(col.frame, ch.x, ch.y, sgn * (col.profile.d / 2 - tf / 2), col.voff);
        const d = G.sub(wc, wp), along = G.dot(d, axis), off = G.len(G.sub(d, G.mul(axis, along)));
        return off < 1e-6 && Math.abs(along) < 40;
      });
      if (hit && hit.d === h.d) aligned++;
    }
  }
  ok(total === 64 && aligned === 64, 'all 64 end plate holes line up with a column flange hole (same axis, same diameter)', aligned + '/' + total);
  const edgeCol = cols.find((c) => Math.abs(c.start[0]) < 1);
  const midCol = cols.find((c) => Math.abs(c.start[0] - 6000) < 1);
  ok(edgeCol.holes.length === 8 && midCol.holes.length === 16, 'edge columns: 8 flange holes; middle columns: 16 (beams both sides)');
  ok(new Set(midCol.holes.map((h) => h.face)).size === 2 && new Set(edgeCol.holes.map((h) => h.face)).size === 1, '… on both flanges / one flange');
  const zc = 4000 - W16.d / 2;
  const colZ = edgeCol.holes.map((h) => edgeCol.start[2] + h.x).sort((a, b) => a - b);
  ok(near(colZ[0], zc - 1.5 * 75, 1e-6) && near(colZ[7], zc + 1.5 * 75, 1e-6), 'bolt rows centered on the beam, 75 mm pitch');
  ok(edgeCol.holes.every((h) => near(Math.abs(h.y), 50, 1e-6)), 'gauge 100: holes ±50 across the flange');
  const bolts = built.bolts.filter((b) => b.kind === 'BOLT'), rods = built.bolts.filter((b) => b.kind === 'ANCHORBOLT');
  const grip = 20 + W12.tf;
  ok(bolts.length === 64 && bolts.every((b) => b.length === Math.ceil((grip + 30) / 5) * 5 && near(b.grip, grip, 1e-9)), 'bolts: 64, grip 20 + 16.26, length rounded up to 70', String(bolts[0].length));
  ok(rods.length === 24 && rods.every((b) => b.length === 450 + 25 + 100), '24 anchor rods, 575 long (embed + plate + projection)');
  const bp = plates.find((p) => p.role === 'Base plate');
  ok(bp.holes.length === 4 && bp.holes.every((h) => near(Math.abs(h.y), 150, 1e-6) && (near(h.x, 50, 1e-6) || near(h.x, 400, 1e-6))), 'base plate rod holes at ±175 along, ±150 across');
  ok(built.welds.length === 14 && built.welds.every((w) => w.size === 8 && w.length > 0), 'a fillet weld (8 mm, all round) per connection');
}

// ---------------------------------------------------------------------------
section('Joints, refusals, apply to similar');
{
  const m = new Md.Model(Md.starterState('J'));
  let c1, c2, c3, bA, bB;
  m.change('frame', (tx) => {
    c1 = tx.addMember({ type: 'column', start: [0, 0, 0], end: [0, 0, 4000] });
    c2 = tx.addMember({ type: 'column', start: [6000, 0, 0], end: [6000, 0, 4000] });
    c3 = tx.addMember({ type: 'column', start: [12000, 0, 0], end: [12000, 0, 4000], rotation: 90 });
    bA = tx.addMember({ type: 'beam', start: [0, 0, 4000], end: [6000, 0, 4000] });
    bB = tx.addMember({ type: 'beam', start: [6000, 0, 4000], end: [12000, 0, 4000] });
  });
  const joints = Cn.findJoints(m.state);
  ok(joints.length === 4, 'four beam ends meet columns', String(joints.length));
  ok(joints.filter((j) => j.face === 'flange').length === 3 && joints.find((j) => j.column === c3).face === 'web', 'the turned column is met at its web');
  m.change('ep', (tx) => tx.addConnection({ type: 'endplate', beam: bA, end: 'start', column: c1 }));
  const sim = Cn.similarJoints(m.state, m.state.connections[0]);
  ok(sim.length === 2 && sim.every((j) => j.face === 'flange'), 'apply to similar: the two other flange joints (not the web one)');
  m.change('similar', (tx) => { for (const j of sim) tx.addConnection({ type: 'endplate', beam: j.beam, end: j.end, column: j.column, params: m.state.connections[0].params }); });
  ok(m.state.connections.length === 3 && Cn.similarJoints(m.state, m.state.connections[0]).length === 0, '… added once; nothing similar left');
  ok(throws(() => m.change('dup', (tx) => tx.addConnection({ type: 'endplate', beam: bA, end: 'start', column: c1 })), /already/), 'a second connection on the same beam end is refused');
  m.change('web', (tx) => tx.addConnection({ type: 'endplate', beam: bB, end: 'end', column: c3 }));
  const b = build(m.state);
  const W12x = Pr.getProfile('W12x50');
  const webPlate = b.parts.find((p) => p.conn === m.state.connections[3].id);
  ok(webPlate && !b.problems.some((p) => p.ref === m.state.connections[3].id && p.hard), 'a web joint now builds an end plate on the column web (0.4 D6)');
  ok(near(b.byId.get(bB).length, 6000 - (309.88 / 2 + 20) - (W12x.tw / 2 + 20), 1e-6), '… the beam is cut back to the web face + plate (tw/2 + tp)');
  ok(b.byId.get(c3).holes.filter((h) => h.face === 'web').length === 8, '… with 8 bolt holes in the column web');
  m.change('tight', (tx) => tx.updateConnection(m.state.connections[0].id, { pitch: 30, gauge: 40 }));
  const b2 = build(m.state);
  ok(b2.problems.some((p) => /pitch 30 mm is under/.test(p.text)) && b2.problems.some((p) => /web or its fillet/.test(p.text)), 'tight pitch and gauge warned (EN 1993-1-8 Table 3.3, column web)');
  ok(throws(() => m.change('neg', (tx) => tx.updateConnection(m.state.connections[0].id, { tp: -3 }))), 'negative plate thickness refused');
  m.change('bp', (tx) => tx.addConnection({ type: 'baseplate', column: c1 }));
  const simC = Cn.similarColumns(m.state, m.state.connections.find((c) => c.type === 'baseplate'));
  ok(simC.length === 2, 'base plate: two similar columns (same profile, standing on nothing)');
  m.change('move', (tx) => tx.updateMember(c1, { start: [0, 0, 0], end: [0, 0, 5000] }));
  ok(build(m.state).byId.get(c1).length === 5000 - 25, 'moving a column end: the base plate cut follows (nothing stored to go stale)');
  m.change('del', (tx) => tx.removeMembers([bA]));
  ok(!m.state.connections.some((c) => c.beam === bA), 'deleting a beam deletes its connections');
}

// ---------------------------------------------------------------------------
section('Marks and bill of materials');
const marks = Mk.markParts(built);
{
  const by = (mk) => marks.parts.find((p) => p.mark === mk);
  ok(marks.parts.map((p) => p.mark).join(' ') === 'c1 c2 b1 br1 p1 p2', 'part marks: c1 c2 b1 br1 p1 p2', marks.parts.map((p) => p.mark).join(' '));
  ok(by('b1').count === 4 && by('c1').count === 2 && by('c2').count === 4 && by('p1').count === 8 && by('p2').count === 6, 'identical parts share a mark (4 beams, 2 middle + 4 edge columns, 8 end plates, 6 base plates)');
  ok(marks.assemblies.map((a) => a.mark + ':' + a.count).join(' ') === 'C1:2 C2:4 B1:4 BR1:1', 'assembly marks C1 C2 B1 BR1');
  ok(marks.assemblies.find((a) => a.mark === 'B1').members.join('+') === 'b1+p1+p1', 'B1 = beam + two end plates');
  const asmW = marks.assemblies.find((a) => a.mark === 'B1').weight;
  ok(near(asmW, by('b1').unitWeight + 2 * by('p1').unitWeight, 1e-9), 'assembly weight = its parts');
  ok(near(by('b1').unitWeight, W16.mass * built.parts.find((p) => p.type === 'beam').length / 1000, 1e-9), 'beam weight = 38.69 kg/m × cut length');
  // turned-over parts, tolerance, channels
  const mk = (profile, holes, opts = {}) => {
    const m = new Md.Model(Md.starterState('M'));
    m.change('x', (tx) => {
      const a = tx.addMember({ type: 'beam', profile, start: [0, 0, 0], end: [5000, 0, 0] });
      const b = tx.addMember({ type: 'beam', profile, start: opts.reversed ? [5000, 9000, 0] : [0, 9000, 0], end: opts.reversed ? [0, 9000, 0] : [5000, 9000, 0] });
      tx.addHole(a, holes[0]);
      tx.addHole(b, holes[1]);
      if (opts.cope) { tx.addCut(a, opts.cope[0]); tx.addCut(b, opts.cope[1]); }
    });
    return Mk.markParts(build(m.state)).parts.length;
  };
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 4900, y: -50, d: 22 }]) === 1, 'I-shape: a hole near one end = the same hole near the other end turned over (one mark)');
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 100, y: 50.4, d: 22 }]) === 1, 'within 1 mm tolerance: one mark');
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 103, y: 50, d: 22 }]) === 2, '3 mm off: two marks');
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 100, y: 50, d: 24 }]) === 2, 'different hole size: two marks');
  ok(mk('W16x26', [{ face: 'top', x: 300, y: 40, d: 22 }, { face: 'bottom', x: 300, y: -40, d: 22 }]) === 1, 'top-flange hole = bottom-flange hole when turned over about its axis');
  ok(mk('C10x15.3', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 100, y: -50, d: 22 }]) === 2, 'channel: up-down mirror is a different part');
  ok(mk('C10x15.3', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 4900, y: -50, d: 22 }]) === 1, 'channel: end for end about its u axis is the same part');
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 50, d: 22 }, { face: 'web', x: 100, y: 50, d: 22 }], { reversed: true }) === 1, 'a beam drawn end to start gets the same mark as its twin (holes measured from each cut start)');
  ok(mk('W16x26', [{ face: 'web', x: 100, y: 0, d: 22 }, { face: 'web', x: 100, y: 0, d: 22 }], { cope: [{ kind: 'cope', end: 'start', side: 'top', length: 120, depth: 40 }, { kind: 'cope', end: 'start', side: 'bottom', length: 120, depth: 40 }] }) === 1, 'top cope = bottom cope turned over');
  const tables = Mk.bomTables(marks, built.bolts);
  const csv = Csv.sectionsCsv([['Parts', tables.parts], ['Assemblies', tables.assemblies], ['Bolts', tables.bolts]]);
  const rows = Csv.parseCsv(csv);
  const partRows = rows.slice(2, 2 + marks.parts.length);
  ok(rows[0][0] === 'Parts' && rows[1][0] === 'Part mark' && partRows.length === 6, 'BOM CSV: Parts table with header');
  const sumW = partRows.reduce((s, r) => s + Number(r[7]), 0);
  const totalRow = rows[2 + marks.parts.length];
  ok(totalRow[0] === 'Total' && near(Number(totalRow[7]), sumW, 0.31) && near(Number(totalRow[7]), built.parts.reduce((s, p) => s + p.weight, 0), 0.06), 'BOM total weight = sum of rows = sum of parts', totalRow[7]);
  ok(partRows.every((r) => near(Number(r[7]), Number(r[6]) * Number(r[5]), 0.05 * Number(r[5]) + 0.051)), 'each row: total = unit × count (to the rounding)');
  ok(rows.some((r) => r[0] === 'Bolt' && r[1] === '20' && r[2] === '70' && r[4] === '64') && rows.some((r) => r[0] === 'Anchor rod' && r[4] === '24'), 'bolt list: 64 × 20 × 70, 24 anchor rods');
  ok(Csv.cell('=HYPERLINK("x")') === '"\'=HYPERLINK(""x"")"' && Csv.cell('-12.5') === '-12.5' && Csv.cell('@SUM') === "'@SUM", 'CSV: formula-looking cells neutralised, numbers kept');
}

// ---------------------------------------------------------------------------
section('Clipboard: copy, paste, marks, undo, tampered clipboards');
{
  const Cb = await load('clipboard.js');
  const marksOf = (st) => Mk.markParts(build(st)).parts.map((p) => p.mark + ':' + p.count).join(' ');
  const m = sampleModel();
  const s = m.state;
  const all = [...s.members.map((x) => ({ kind: 'member', id: x.id })), ...s.connections.map((c) => ({ kind: 'conn', id: c.id })), ...s.footings.map((f) => ({ kind: 'footing', id: f.id }))];
  ok(Cb.copyClip(s, []) === null && Cb.copyClip(s, [{ kind: 'conn', id: s.connections[0].id }]) === null, 'nothing, or a connection without its members: nothing to copy');
  const beam = s.members.find((x) => x.type === 'beam');
  m.change('Hole + cope', (tx) => { tx.addHole(beam.id, { face: 'web', x: 300, y: 40, d: 22 }); tx.addCut(beam.id, { kind: 'cope', end: 'start', side: 'top', length: 120, depth: 40 }); });
  const one = Cb.copyClip(s, [{ kind: 'member', id: beam.id }]);
  ok(one.counts.members === 1 && one.counts.connections === 0 && one.counts.leftOut === 2, 'one beam: copied; its two end plates left out (the columns were not copied) and counted');
  ok(one.clip.format === 'detailcraft-clip' && one.clip.version === 1 && one.clip.base.join() === beam.start.join(), 'clip carries format, version and the base point (lowest corner)');
  ok(one.clip.members[0].holes.length === 1 && one.clip.members[0].cuts.length === 1, 'the beam\'s holes and copes come along');
  const whole = Cb.copyClip(s, all);
  ok(whole.counts.members === 11 && whole.counts.connections === 14 && whole.counts.footings === 7 && whole.counts.leftOut === 0, 'everything: 11 members, 14 connections, 7 footings');
  ok(Cb.copyClip(s, all, { connections: false }).counts.connections === 0, 'connections off: members only');
  const before = marksOf(s);
  const wire = JSON.stringify(whole.clip);
  const back = Cb.readClip(wire);
  ok(back.members.length === 11 && back.connections.length === 14 && back.footings.length === 7 && !back.warnings.length, 'stored as JSON and read back (as untrusted) unchanged in count, no warnings');
  const steps = m.undoStack.length;
  const r1 = m.change('Paste in place', (tx) => Cb.pasteInto(tx, back, [0, 0, 0]));
  ok(m.undoStack.length === steps + 1 && r1.refs.length === 32, 'paste in place: one undo step, 32 new things');
  const allIds = [...s.members, ...s.connections, ...s.footings].map((x) => x.id);
  ok(new Set(allIds).size === allIds.length && allIds.length === 64, 'every id unique after the paste (64)');
  ok(r1.refs.filter((x) => x.kind === 'conn').every((x) => { const c = m.connection(x.id); return r1.refs.some((y) => y.id === c.column) && (c.type !== 'endplate' || r1.refs.some((y) => y.id === c.beam)); }), 'pasted connections point at the pasted members, not the originals');
  ok(marksOf(m.state) === before.replace(/:(\d+)/g, (_, n) => ':' + 2 * n), 'marks numbered again from the model: identical copies share their part mark, every count doubles (' + marksOf(m.state) + ')');
  ok(Cb.overlaps(m.state, back, [0, 0, 0]) === 11 && Cb.overlaps(m.state, back, [0, 20000, 0]) === 0, 'overlaps() finds members pasted exactly on others');
  m.undo();
  ok(marksOf(m.state) === before && m.state.members.length === 11 && m.state.connections.length === 14, 'one undo takes the whole paste away');
  m.redo(); m.undo();
  // paste with an offset: points moved, marks for a changed piece renumbered
  const r2 = m.change('Paste', (tx) => Cb.pasteInto(tx, Cb.readClip(JSON.stringify(one.clip)), [0, 0, -4000]));
  const nb = m.member(r2.refs[0].id);
  ok(nb.start.join() === '0,0,0' && nb.end.join() === '6000,0,0' && nb.holes.length === 1 && nb.cuts.length === 1 && nb.holes[0].id !== beam.holes[0].id, 'paste with offset (0, 0, -4000): the beam lands 4 m lower with its own hole and cope (new ids)');
  const mk = Mk.markParts(build(m.state));
  ok(mk.partMark.get(nb.id) && mk.partMark.get(nb.id) !== mk.partMark.get(beam.id) && new Set(mk.parts.map((p) => p.mark)).size === mk.parts.length, 'a pasted beam without end plates is a different piece: its own mark (' + mk.partMark.get(nb.id) + '), marks stay unique');
  m.undo();
  // footing offset and ghost lines
  const fc = Cb.copyClip(s, [{ kind: 'footing', id: s.footings[0].id }]);
  const r3 = m.change('Paste', (tx) => Cb.pasteInto(tx, Cb.readClip(JSON.stringify(fc.clip)), [500, 250, -100]));
  const nf = m.footing(r3.refs[0].id);
  ok(nf.x === s.footings[0].x + 500 && nf.y === s.footings[0].y + 250 && nf.top === s.footings[0].top - 100 && nf.mat.barX === s.footings[0].mat.barX, 'footing pasted with its offset and bottom mat');
  m.undo();
  ok(Cb.clipSegments(back).length === 11 + 7 * 4, 'ghost: one line per member, four per footing outline');
  // custom profiles travel with the members; the model's own of that name wins
  const m3 = new Md.Model(Md.starterState('C'));
  m3.change('P', (tx) => { tx.addProfile({ name: 'MY-I', kind: 'I', d: 300, bf: 150, tw: 8, tf: 12, r: 10 }); tx.addMember({ type: 'beam', profile: 'MY-I', start: [0, 0, 4000], end: [6000, 0, 4000] }); });
  const cc = Cb.copyClip(m3.state, [{ kind: 'member', id: m3.state.members[0].id }]);
  ok(cc.clip.profiles.length === 1 && cc.clip.profiles[0].name === 'MY-I', 'a custom profile is copied with the member that uses it');
  const m4 = new Md.Model(Md.starterState('D'));
  const r4 = m4.change('Paste', (tx) => Cb.pasteInto(tx, Cb.readClip(JSON.stringify(cc.clip)), [0, 0, 0]));
  ok(m4.state.profiles.length === 1 && m4.state.members[0].profile === 'MY-I' && r4.profilesKept === 0, 'pasted into another model: the profile is added there');
  ok(m3.change('Again', (tx) => Cb.pasteInto(tx, Cb.readClip(JSON.stringify(cc.clip)), [0, 7000, 0])).profilesKept === 1 && m3.state.profiles.length === 1, 'pasted where the name exists: kept, not doubled');
  // tampered or foreign clipboards are refused plainly; bad parts inside are dropped like a bad file's
  ok(throws(() => Cb.readClip('not json'), /does not hold DetailCraft/), 'not JSON → refused');
  ok(throws(() => Cb.readClip({ format: 'modelcraft-clip', version: 1 }), /does not hold DetailCraft/), 'another app\'s clipboard → refused');
  ok(throws(() => Cb.readClip({ format: 'detailcraft-clip', version: 9, base: [0, 0, 0], members: [] }), /newer DetailCraft/), 'a newer clipboard version → refused');
  ok(throws(() => Cb.readClip({ format: 'detailcraft-clip', version: 1, base: [0, 'x', 0], members: [] }), /base point/), 'a bad base point → refused');
  ok(throws(() => Cb.readClip({ format: 'detailcraft-clip', version: 1, base: [0, 0, 0], members: { length: 1 } }), /damaged/), 'members not a list → refused');
  ok(throws(() => Cb.readClip({ format: 'detailcraft-clip', version: 1, base: [0, 0, 0], members: new Array(20001).fill(0) }), /too many/), 'too many members → refused before reading them');
  ok(throws(() => Cb.readClip({ format: 'detailcraft-clip', version: 1, base: [0, 0, 0], members: [{ id: 'm1', type: 'beam', profile: '<script>', start: [0, 0, 0], end: [1000, 0, 0] }] }), /empty/), 'only an unknown profile inside → nothing left → refused');
  const t = JSON.parse(wire);
  t.members[0].name = 'Evil\u0000 <b>';
  t.members[1].start = [0, 0, 'x'];
  t.connections.push({ id: 'j999', type: 'endplate', beam: 'nope', column: 'nope', end: 'start' });
  t.footings[0].L = -5;
  t.from = 'Model\u0007 <i>';
  const tc = Cb.readClip(JSON.stringify(t));
  ok(tc.members.length === 10 && tc.members[0].name === 'Evil <b>' && tc.footings.length === 6 && tc.warnings.length >= 3 && tc.from === 'Model <i>', 'a tampered clipboard: bad member, bad footing and stray connection dropped with warnings, control characters stripped');
  ok(tc.connections.every((c) => tc.members.some((x) => x.id === c.column)), '… and no connection left pointing at a dropped member');
  const steps2 = m.undoStack.length, json2 = JSON.stringify(m.state);
  ok(throws(() => m.change('Paste', (tx) => Cb.pasteInto(tx, back, [0, NaN, 0])), /offset/) && JSON.stringify(m.state) === json2 && m.undoStack.length === steps2, 'a bad offset throws and changes nothing');
}

// ---------------------------------------------------------------------------
section('Move, rotate, mirror a selection; one property on many members; window selection (D1)');
{
  const Tf = await load('transform.js');
  const Ws = await load('winsel.js');
  const refsOf = (st) => [...st.members.map((x) => ({ kind: 'member', id: x.id })), ...st.footings.map((f) => ({ kind: 'footing', id: f.id }))];
  const marksOf = (st) => Mk.markParts(build(st)).parts.map((p) => p.profile + ' ' + p.length.toFixed(3) + ' ×' + p.count).sort().join(' | ');
  const boltHeads = (st) => build(st).bolts.map((b) => b.head);
  const sameSet = (a, b, tol = 1e-6) => a.length === b.length && a.every((p) => b.some((q) => G.dist(p, q) <= tol));
  const before = marksOf(sample.state), heads0 = boltHeads(sample.state);
  for (const [label, xf] of [['move (1000, −2500, 300)', Tf.moveXf(1000, -2500, 300)], ['rotate 90° about B/2', Tf.rotateXf([6000, 7000], 90)], ['rotate 37° about (1234, −50)', Tf.rotateXf([1234, -50], 37)], ['mirror in grid line 3 (x = 12000)', Tf.mirrorXf([12000, 0], [12000, 1])], ['mirror in a 30° plan line', Tf.mirrorXf([500, 200], [500 + Math.cos(Math.PI / 6), 200 + Math.sin(Math.PI / 6)])]]) {
    const m = sampleModel();
    const steps = m.undoStack.length;
    const r = m.change('Transform', (tx) => Tf.transformRefs(tx, m.state, refsOf(m.state), xf));
    const b2 = build(m.state);
    ok(r.members === 11 && r.footings === 7 && r.connections === 0 && m.undoStack.length === steps + 1, label + ': 11 members and 7 footings in one undo step, no connection split');
    ok(b2.problems.length === 0, label + ': the whole frame still builds without problems (every end plate and base plate fits)', JSON.stringify(b2.problems.slice(0, 2)));
    ok(marksOf(m.state) === before, label + ': same parts (profile, cut length, count)');
    ok(sameSet(boltHeads(m.state), heads0.map((p) => Tf.applyPt(xf, p)), 1e-4), label + ': every bolt and anchor rod lands where the transform sends it (64 + 24)');
    m.undo();
    ok(marksOf(m.state) === before && sameSet(boltHeads(m.state), heads0), label + ': one undo puts it all back');
  }
  // a mirror gives the mirror image: every section kind, sloped, turned, offset
  const mx = Tf.mirrorXf([1000, -300], [1000 + 0.6, -300 + 0.8]);
  const custom = [{ name: 'MY-C', kind: 'C', d: 250, bf: 80, tw: 8, tf: 11 }];
  for (const [name, type, pos] of [['W16x26', 'beam', 'top'], ['C10x15.3', 'beam', 'top'], ['L4x4x3/8', 'brace', 'middle'], ['L4x4x3/8', 'brace', 'top'], ['HSS6x4x1/4', 'brace', 'bottom'], ['HSS6.625x0.280', 'brace', 'middle'], ['PL20x300', 'plate', 'middle'], ['IPE300', 'column', 'middle'], ['MY-C', 'beam', 'bottom']]) {
    const prof = Pr.getProfile(name, custom);
    if (!prof) { ok(false, 'profile ' + name + ' exists'); continue; }
    const m0 = { id: 'm1', type, profile: name, material: 'A36', start: [200, 300, 1000], end: type === 'column' ? [200, 300, 5000] : [5200, 2100, 2600], rotation: 30, position: pos, name: '', holes: [], cuts: [] };
    const out = Tf.transformMember(m0, mx, prof.kind);
    const m1 = { ...m0, ...out };
    if (out.note === 'angle-offset') { const tx = { updateMember: (id, p) => Object.assign(m1, p) }; Tf.transformRefs(tx, { members: [m0], footings: [], connections: [], profiles: custom }, [{ kind: 'member', id: 'm1' }], mx); }
    const img = Tf.worldSection(m0, prof, 700).map((p) => Tf.applyPt(mx, p));
    const got = Tf.worldSection(m1, prof, 700);
    ok(sameSet(got, img, 1e-6), 'mirror of ' + name + ' (' + type + ', ' + pos + ', turned 30°) is its mirror image, section for section');
  }
  // holes and copes follow a mirror
  {
    const m = new Md.Model(Md.starterState('H'));
    const id = m.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [6000, 0, 4000] }));
    const cid = m.change('C', (tx) => tx.addMember({ type: 'beam', profile: 'C10x15.3', start: [0, 3000, 4000], end: [6000, 3000, 4000], position: 'top' }));
    m.change('Holes', (tx) => { tx.addHole(id, { face: 'top', x: 500, y: 40, d: 22 }); tx.addHole(id, { face: 'web', x: 900, y: 60, d: 18 }); tx.addHole(cid, { face: 'top', x: 400, y: 10, d: 14 }); tx.addHole(cid, { face: 'web', x: 800, y: -30, d: 14 }); tx.addCut(cid, { kind: 'cope', end: 'start', side: 'top', length: 80, depth: 30 }); });
    const holeWorld = (st) => build(st).parts.flatMap((p) => p.holes.map((h) => {
      const pr = p.profile;
      if (h.face === 'web') return G.toWorld(p.frame, h.x, pr.kind === 'C' ? -pr.bf / 2 + pr.tw / 2 : 0, h.y, p.voff);
      const s = h.face === 'top' ? 1 : -1;
      return G.toWorld(p.frame, h.x, h.y, s * (pr.depth / 2 - pr.tf / 2), p.voff);
    }));
    const w0 = holeWorld(m.state);
    const xf = Tf.mirrorXf([3000, 0], [3000, 1]);
    m.change('Mirror', (tx) => Tf.transformRefs(tx, m.state, refsOf(m.state), xf));
    ok(sameSet(holeWorld(m.state), w0.map((p) => Tf.applyPt(xf, p)), 1e-6), 'mirror: flange and web holes of a W and a channel land on the mirror image of where they were');
    const c = m.member(cid);
    ok(c.position === 'bottom' && c.cuts[0].side === 'bottom' && c.holes.find((h) => h.face === 'bottom'), 'mirrored channel: turned over about u — position, cope and flange hole swap top and bottom');
    const xf2 = Tf.mirrorXf([0, 1500], [1, 1500]);
    m.undo();
    m.change('Mirror', (tx) => Tf.transformRefs(tx, m.state, refsOf(m.state), xf2));
    ok(sameSet(holeWorld(m.state), w0.map((p) => Tf.applyPt(xf2, p)), 1e-6), 'mirror across the beams (y = 1500): holes still on the image');
  }
  // columns turn with a rotation; footings turn and mirror
  {
    const m = new Md.Model(Md.starterState('R'));
    const id = m.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [6000, 0, 0], end: [6000, 0, 4000], rotation: 0 }));
    const fid = m.change('F', (tx) => tx.addFooting({ x: 6000, y: 0, top: 0, L: 2400, B: 1600, H: 600, rotation: 10 }));
    m.change('Rotate', (tx) => Tf.transformRefs(tx, m.state, refsOf(m.state), Tf.rotateXf([0, 0], 90)));
    const c = m.member(id), f = m.footing(fid);
    ok(near(c.start[0], 0, 1e-9) && near(c.start[1], 6000, 1e-9) && c.rotation === 90, 'a column rotated 90° about the origin moves to (0, 6000) and turns 90° with it', c.rotation + '');
    ok(near(f.x, 0, 1e-9) && near(f.y, 6000, 1e-9) && f.rotation === 100, 'its footing moves and turns 10° → 100°');
    m.change('Mirror', (tx) => Tf.transformRefs(tx, m.state, refsOf(m.state), Tf.mirrorXf([0, 0], [1, 1])));
    ok(m.footing(fid).rotation === 350 && near(m.footing(fid).x, 6000, 1e-9), 'footing mirrored in the 45° line: 2 × 45 − 100 = −10 → 350°');
    ok(Tf.ghostLines(m.state, refsOf(m.state), [6000, 0, 0]).length === 1 + 4, 'ghost: a line per member, four per footing');
    ok(Tf.selectionCenter(m.state, refsOf(m.state)).join() === '6000,0,0', 'selection center (plan middle, lowest z)');
  }
  // moving part of a joint is counted
  {
    const m = sampleModel();
    const beam = m.state.members.find((x) => x.type === 'beam');
    const r = m.change('Move', (tx) => Tf.transformRefs(tx, m.state, [{ kind: 'member', id: beam.id }], Tf.moveXf(0, 0, -500)));
    ok(r.connections === 2 && r.notes[0]?.key === 'xf.note.split' && build(m.state).problems.length === 0, 'one beam moved 500 mm down its columns: its 2 end plates are counted as joining moved and staying members, and still build (they follow the beam)');
    m.undo();
    m.change('Move', (tx) => Tf.transformRefs(tx, m.state, [{ kind: 'member', id: beam.id }], Tf.moveXf(0, 800, 0)));
    ok(build(m.state).problems.filter((x) => /not on the column line/.test(x.text)).length === 2, 'moved sideways off its columns: both end plates say so in Problems');
  }
  ok(throws(() => Tf.moveXf(0, NaN, 0)) && throws(() => Tf.mirrorXf([0, 0], [0, 0])) && throws(() => Tf.rotateXf([0, 0], 'x')), 'a bad offset, a mirror line of no length and a bad angle are refused');
  // dragging (D2): the held part snaps onto grid nodes reachable in the drag's plane, else 10 mm steps
  {
    const proj = (p) => ({ x: p[0] / 10, y: -p[1] / 10, behind: false });           // plan, 1 px = 10 mm
    const nodes = Md.nodes(sample.state).map((n) => n.p);
    const beamEnds = [[0, 0, 4000], [6000, 0, 4000]];
    const a = Tf.snapOffset([5930, 120, 0], beamEnds, nodes, proj, { mask: [1, 1, 0] });
    ok(a.offset.join() === '6000,0,0' && a.node.join() === '6000,0,4000', 'a beam dragged 5930, 120 across Level 2 snaps 6000, 0 onto A/2 (within 18 px)', JSON.stringify(a));
    const b = Tf.snapOffset([2345, 1234, 0], beamEnds, nodes, proj, { mask: [1, 1, 0] });
    ok(b.offset.join() === '2350,1230,0' && b.node === null, 'no node near: 10 mm steps (2350, 1230)', JSON.stringify(b));
    const c = Tf.snapOffset([0, 7020, 0], [[0, 0, 0], [0, 0, 4000]], nodes, proj, { mask: [1, 1, 0] });
    ok(c.offset.join() === '0,7000,0', 'a column dragged across a plan snaps onto B/1 (its own level\'s node, z unchanged)', JSON.stringify(c));
    const d = Tf.snapOffset([0, 7000, 3990], beamEnds, nodes, proj, { mask: [1, 1, 0] });
    ok(d.offset[2] === 0, 'a plan drag never changes z, even with a raw z');
    const side = (p) => ({ x: p[0] / 10, y: -p[2] / 10, behind: false });
    const e = Tf.snapOffset([20, 0, -3980], beamEnds, nodes, side, { mask: [1, 0, 1] });
    ok(e.offset.join() === '0,0,-4000', 'in an elevation a beam dragged down snaps onto Level 1 (x and z only)', JSON.stringify(e));
    const f = Tf.snapOffset([0, 0, 1234], beamEnds, nodes, side, { mask: [0, 0, 1] });
    ok(f.offset.join() === '0,0,1230', 'up-and-down drag: z only, 10 mm steps');
  }
  // one property on many members
  {
    const m = sampleModel();
    m.change('Plate', (tx) => tx.addMember({ type: 'plate', profile: 'PL20x200', start: [0, -1000, 0], end: [1000, -1000, 0] }));
    const ids = m.state.members.map((x) => x.id);
    const p0 = Tf.manyPatchable(m.state, ids);
    ok(p0.profile.varies && p0.profile.applies === 11 && p0.profile.skipped === 1 && p0.material.varies && p0.plateT.value === 20 && p0.plateT.applies === 1, 'many: profile varies over 11 (the plate skipped), material varies, plate thickness 20');
    const steps = m.undoStack.length;
    const r = m.change('Material', (tx) => Tf.applyToMany(tx, m.state, ids, 'material', 'S355'));
    ok(r.changed === 12 && m.undoStack.length === steps + 1 && m.state.members.every((x) => x.material === 'S355'), 'material S355 on all 12 in one undo step');
    const beams = m.state.members.filter((x) => x.type === 'beam').map((x) => x.id);
    m.change('Profile', (tx) => Tf.applyToMany(tx, m.state, [...beams, ids[11]], 'profile', 'W18x35'));
    ok(m.state.members.filter((x) => x.type === 'beam').every((x) => x.profile === 'W18x35') && m.state.members[11].profile === 'PL20x200', 'profile W18x35 on the beams; the plate keeps its plate size');
    m.change('T', (tx) => Tf.applyToMany(tx, m.state, [ids[11]], 'plateT', 25));
    ok(m.state.members[11].profile === 'PL25x200', 'plate thickness 25 → PL25x200');
    const json = JSON.stringify(m.state);
    ok(throws(() => m.change('Bad', (tx) => Tf.applyToMany(tx, m.state, ids, 'profile', 'NOPE'))) && JSON.stringify(m.state) === json, 'an unknown profile on many: refused, nothing changed');
    ok(Tf.manyPatchable(m.state, beams).profile.value === 'W18x35' && !Tf.manyPatchable(m.state, beams).profile.varies, 'shared value shown when all agree');
  }
  // window and crossing selection
  {
    const S = sample.state;
    const items = Ws.selectionItems(S, built);
    ok(items.length === 11 + 14 + 7, 'selection items: 11 members, 14 connections, 7 footings');
    const top = (p) => ({ x: p[0] / 10, y: -p[1] / 10, behind: false });           // plan, 1 px = 10 mm
    const all = Ws.windowSelect(items, top, Ws.rectPath({ x: -200, y: -1000 }, { x: 2000, y: 200 }), 'window');
    ok(all.length === 32, 'a window round everything selects all 32', String(all.length));
    const planL1 = [{ n: [0, 0, -1], d: 1500 }];
    const l1 = Ws.windowSelect(items, top, Ws.rectPath({ x: -200, y: -1000 }, { x: 2000, y: 200 }), 'window', planL1);
    ok(!l1.some((r) => r.kind === 'member' && S.members.find((x) => x.id === r.id).type === 'beam') && l1.filter((r) => r.kind === 'member').length === 7, 'Level 1 plan (cut at 1.5 m): beams above are not picked; 6 columns and the brace are');
    // around column A/1 only (footing 2 m wide: a 1 m window misses it in window mode, touches it in crossing)
    const win = Ws.windowSelect(items, top, Ws.rectPath({ x: -30, y: -30 }, { x: 30, y: 30 }), 'window');
    const col = S.members.find((x) => x.type === 'column' && x.start[0] === 0 && x.start[1] === 0);
    ok(win.some((r) => r.id === col.id) && !win.some((r) => r.kind === 'footing') && !win.some((r) => r.kind === 'member' && r.id !== col.id), 'a 600 mm window round A/1: the column (and its base plate) — not the 2 m footing, not the beams running out of it', JSON.stringify(win));
    const cross = Ws.windowSelect(items, top, Ws.rectPath({ x: 30, y: -30 }, { x: -30, y: 30 }), 'crossing');
    ok(cross.some((r) => r.kind === 'footing') && cross.filter((r) => r.kind === 'member').length >= 3, 'the same box as crossing also takes the footing, the beam, and the brace touching it', String(cross.length));
    const elev = [{ n: [0, -1, 0], d: 1000 }, { n: [0, 1, 0], d: 1000 }];
    const front = (p) => ({ x: p[0] / 10, y: -p[2] / 10, behind: false });
    const ea = Ws.windowSelect(items, front, Ws.rectPath({ x: -200, y: -800 }, { x: 2000, y: 200 }), 'window', elev);
    ok(ea.filter((r) => r.kind === 'member').length === 6 && ea.every((r) => r.kind !== 'member' || S.members.find((x) => x.id === r.id).start[1] === 0), 'elevation on grid A (±1 m): only grid A\'s 3 columns, 2 beams and the brace', String(ea.length));
    ok(Ws.clipSeg([0, 0, 0], [0, 0, 4000], planL1).map((p) => p[2]).join() === '0,1500' && Ws.clipSeg([0, 0, 2000], [0, 0, 4000], planL1) === null, 'clipSeg keeps the part below the plan cut');
  }
}

// ---------------------------------------------------------------------------
section('Phases: model, file version 2, marks numbered per phase (D13)');
{
  const Cb = await load('clipboard.js');
  // a version 1 file opens: every part in phase 1
  const v1 = JSON.parse(sampleModel().toJSON());
  v1.version = 1; delete v1.phases; delete v1.numbering;
  for (const m of v1.members) delete m.phase;
  for (const f of v1.footings) delete f.phase;
  const r1 = Md.readModel(JSON.stringify(v1));
  ok(!r1.warnings.length && r1.state.version === 2 && JSON.stringify(r1.state.phases) === '[{"n":1,"name":""}]' && r1.state.members.every((m) => m.phase === 1) && r1.state.footings.every((f) => f.phase === 1) && r1.state.numbering.perPhase === true, 'a version 1 file opens with every part in phase 1, saved again as version 2');
  // phases in the edit path
  const m = sampleModel();
  const rowA = m.state.members.filter((x) => x.start[1] === 0 && x.end[1] === 0).map((x) => ({ kind: 'member', id: x.id }));
  const footA = m.state.footings.filter((f) => f.y === 0).map((f) => ({ kind: 'footing', id: f.id }));
  const n2 = m.change('Add phase', (tx) => tx.addPhase('Erection 2'));
  ok(n2 === 2 && m.state.phases.length === 2 && m.state.phases[1].name === 'Erection 2', 'addPhase → phase 2 with its name');
  m.change('Phase', (tx) => tx.setPhaseOf([...rowA, ...footA], 2));
  ok(rowA.length === 6 && m.state.members.filter((x) => x.phase === 2).length === 6 && m.state.footings.filter((f) => f.phase === 2).length === 3, 'grid A (3 columns, 2 beams, the brace) and its 3 footings put in phase 2 in one step');
  ok(throws(() => m.change('Remove', (tx) => tx.removePhase(2)), /still has 9 parts/), 'a phase with parts cannot be removed (says how many)');
  ok(throws(() => m.change('X', (tx) => tx.setPhaseOf(rowA, 0)), /whole number/) && throws(() => m.change('X', (tx) => tx.updateMember(rowA[0].id, { phase: 'x' })), /whole number/), 'phase 0 or not a number refused');
  const b2 = build(m.state);
  const plateOf = (beamId) => b2.parts.find((p) => p.attachTo === beamId);
  const beamA = m.state.members.find((x) => x.type === 'beam' && x.start[1] === 0);
  ok(plateOf(beamA.id).phase === 2 && b2.bolts.filter((b) => b.phase === 2).length === 32 + 12, 'end plates, base plates and bolts take their main member\'s phase (32 bolts + 12 rods in phase 2)');
  const mk = Mk.markParts(b2, { perPhase: true });
  ok(mk.phased && mk.parts.every((p) => new RegExp('^' + p.phase + '-').test(p.mark)), 'per phase: every mark starts with its phase (' + mk.parts.map((p) => p.mark + '×' + p.count).join(' ') + ')');
  const beamB = m.state.members.find((x) => x.type === 'beam' && x.start[1] === 7000);
  ok(mk.partMark.get(beamA.id) === '2-b1' && mk.partMark.get(beamB.id) === '1-b1' && mk.asmMark.get(beamA.id) === '2-B1', 'identical beams in phases 1 and 2: 1-b1 and 2-b1 (assemblies 1-B1, 2-B1), each phase numbered from 1');
  ok(mk.parts.filter((p) => p.phase === 2).reduce((t, p) => t + p.count, 0) === 6 + 4 + 3, 'phase 2 holds 6 members, 4 end plates and 3 base plates');
  const sched2 = Rb.bendingSchedule(m.state.footings);
  const ifcText = writeIfc(m.state, b2, Object.assign(mk, { footingMark: Mk.markFootings(m.state.footings, { perPhase: true }) }), sched2, {});
  ok((ifcText.match(/IFCPROPERTYSINGLEVALUE\('Phase',\$,IFCINTEGER\(2\),\$\)/g) || []).length === 13 && /IFCPROPERTYSINGLEVALUE\('PartMark',\$,IFCLABEL\('2-b1'\),\$\)/.test(ifcText), 'IFC: each part\'s DetailCraft property set carries Phase (13 parts in phase 2) and its per-phase mark');
  const flat = Mk.markParts(b2, { perPhase: false });
  ok(!flat.phased && flat.partMark.get(beamA.id) === flat.partMark.get(beamB.id) && flat.partMark.get(beamA.id) === 'b1', 'numbering per phase off: identical beams share b1 again, no prefix');
  const single = Mk.markParts(built, { perPhase: true });
  ok(!single.phased && single.parts.map((p) => p.mark).join() === Mk.markParts(built).parts.map((p) => p.mark).join(), 'one phase in use: marks exactly as before');
  const fm = Mk.markFootings(m.state.footings, { perPhase: true });
  ok(fm.get(footA[0].id) === '2-F1' && [...fm.values()].filter((v) => v.startsWith('1-')).length === 4, 'footing marks per phase: 2-F1 …, 1-F1 …');
  // round trip and tampered phases
  const back = Md.readModel(m.toJSON());
  const phaseView = (st) => JSON.stringify([st.phases, st.numbering, st.members.map((x) => x.id + ':' + x.phase), st.footings.map((x) => x.id + ':' + x.phase)]);
  ok(!back.warnings.length && phaseView(back.state) === phaseView(m.state), 'phases, names, numbering and every part\'s phase survive save → open');
  const t = JSON.parse(m.toJSON());
  t.phases = [{ n: 'x' }, { n: 1, name: 'A\u0000<b>' }, { n: 1, name: 'dup' }];
  t.members[0].phase = 7; t.members[1].phase = -3;
  const tr2 = Md.readModel(JSON.stringify(t)).state;
  ok(tr2.phases.map((p) => p.n).join() === '1,2,7' && tr2.phases[0].name === 'A<b>' && tr2.members[1].phase === 1, 'a tampered phase list: bad numbers and repeats dropped, phases members name added (2, 7), a bad member phase → 1');
  // a part pasted into a model without its phase brings the phase along
  const c = Cb.copyClip(m.state, rowA.slice(0, 1));
  const m3 = new Md.Model(Md.starterState('P'));
  m3.change('Paste', (tx) => Cb.pasteInto(tx, Cb.readClip(JSON.stringify(c.clip)), [0, 0, 0]));
  ok(m3.state.members[0].phase === 2 && m3.state.phases.map((p) => p.n).join() === '1,2', 'pasted into a model with phase 1 only: the part keeps phase 2 and the phase is added');
  // last phase, rename
  const m4 = new Md.Model(Md.starterState('Q'));
  ok(throws(() => m4.change('R', (tx) => tx.removePhase(1)), /at least one phase/), 'the last phase cannot be removed');
  m4.change('N', (tx) => tx.renamePhase(1, ' Ground floor '));
  ok(m4.state.phases[0].name === 'Ground floor', 'rename trims the name');
}

// ---------------------------------------------------------------------------
section('Material and weight report per phase: CSV and PDF (D14)');
{
  const Rp = await load('report.js');
  const { textWidth } = await load('pdf.js');
  const m = sampleModel();
  m.change('Phase', (tx) => { tx.addPhase('Erection 2'); tx.setPhaseOf([...m.state.members.filter((x) => x.start[1] === 0 && x.end[1] === 0).map((x) => ({ kind: 'member', id: x.id })), ...m.state.footings.filter((f) => f.y === 0).map((f) => ({ kind: 'footing', id: f.id }))], 2); });
  const b = build(m.state), mk = Mk.markParts(b, { perPhase: true }), sch = Rb.bendingSchedule(m.state.footings);
  const rep = Rp.phaseReport(m.state, b, mk, sch);
  ok(rep.phases.length === 2 && near(rep.totals.weight, b.parts.reduce((t, p) => t + p.weight, 0), 1e-6) && rep.totals.parts === 25, 'two phases; all 25 parts and the whole steel weight are in the report');
  ok(near(rep.phases[0].totals.weight + rep.phases[1].totals.weight, rep.totals.weight, 1e-9) && rep.phases[1].totals.parts === 13, 'phase totals add up; phase 2 has 13 parts (6 members, 4 end plates, 3 base plates)');
  ok(rep.phases.every((p) => p.totals.bolts === 44) && near(rep.totals.rebar, sch.rows.reduce((t, r) => t + r.totalWeight, 0), 1e-6), 'bolts and rods: 32 + 12 in each phase; rebar of both phases = the bending schedule\'s total');
  // paint areas against hand formulas (outside perimeter × cut length)
  const W16 = Pr.getProfile('W16x26'), PL = Pr.getProfile('PL20x180'), HS = Pr.getProfile('HSS4x4x1/4');
  const iPerim = (q) => 2 * q.bf + 2 * (q.bf - q.tw) + 2 * (q.d - 2 * q.tf) + 4 * q.tf - 4 * (2 * q.r - Math.PI * q.r / 2);
  const rhsPerim = (q) => 2 * (q.h + q.b) - 8 * q.ro + 2 * Math.PI * q.ro;
  ok(Math.abs(W16.perimeter / iPerim(W16) - 1) < 0.002 && near(PL.perimeter, 2 * (20 + 180), 1e-9) && Math.abs(HS.perimeter / rhsPerim(HS) - 1) < 0.003, 'section perimeters: W16x26 ' + W16.perimeter.toFixed(1) + ' mm (hand ' + iPerim(W16).toFixed(1) + '), PL20x180 400, HSS4x4x1/4 ' + HS.perimeter.toFixed(1) + ' (hand ' + rhsPerim(HS).toFixed(1) + ')');
  const beamRow = rep.phases[0].rows.find((r) => r.mark === '1-b1');
  ok(beamRow && near(beamRow.paint, 2 * W16.perimeter * beamRow.length / 1e6, 1e-9), 'paint of 1-b1 × 2 = 2 × perimeter × ' + Math.round(beamRow.length) + ' mm = ' + beamRow.paint.toFixed(2) + ' m²');
  // CSV read back
  const csv = Rp.reportCsv(rep);
  const rows = Csv.parseCsv(csv);
  const sumRow = rows.findIndex((r) => r[0] === 'Phase' && r[1] === 'Parts');
  ok(sumRow > 0 && rows[sumRow + 1][0] === 'Phase 1' && rows[sumRow + 2][0] === 'Phase 2: Erection 2' && rows[sumRow + 3][0] === 'Total' && rows[sumRow + 3][1] === '25', 'CSV: summary by phase (Phase 1, Phase 2: Erection 2, Total 25 parts)');
  ok(near(Number(rows[sumRow + 3][2]), Math.round(rep.totals.weight * 10) / 10, 1e-9) && rows.some((r) => r[0] === '2-br1' && r[2] === 'HSS4x4x1/4'), 'CSV: total kg as reported; phase 2 lists 2-br1 HSS4x4x1/4');
  // PDF
  const tb = (it) => { const w = textWidth(it.s, it.h, it.bold), dx = it.align === 'center' ? -w / 2 : it.align === 'right' ? -w : 0; return { x0: it.x + dx, x1: it.x + dx + w, y0: it.y - 0.2 * it.h, y1: it.y + 0.8 * it.h }; };
  const fine = (pg) => pg.items.filter((i) => i.k === 'text').every((i) => { const b2 = tb(i); return b2.x0 >= 10 && b2.x1 <= pg.w - 10 && b2.y0 >= 10 && b2.y1 <= pg.h - 10; }) && (() => { const bs = pg.items.filter((i) => i.k === 'text').map(tb); for (let i = 0; i < bs.length; i++) for (let j = i + 1; j < bs.length; j++) if (bs[i].x0 < bs[j].x1 - 0.3 && bs[j].x0 < bs[i].x1 - 0.3 && bs[i].y0 < bs[j].y1 - 0.3 && bs[j].y0 < bs[i].y1 - 0.3) return false; return true; })();
  const pages = Rp.reportSheets(rep, { paper: 'A4', model: m.state.name, date: '2026-10-13' });
  ok(pages.length >= 1 && pages.every(fine), 'PDF pages (A4): every word inside the frame, none overlapping (' + pages.length + ' page(s))');
  const { bytes } = await toPdf(pages, { title: 'Report' });
  const f = path.join(OUT, 'report.pdf');
  fs.writeFileSync(f, bytes);
  const txt = tool('pdftotext', f, ['-layout']);
  if (txt === null) console.log('  (pdftotext not installed: report PDF text not checked)');
  else ok(/Material and weight report/.test(txt) && /Phase 2: Erection 2/.test(txt) && /2-br1/.test(txt) && /Page 1 of/.test(txt), 'pdftotext finds the title, Phase 2: Erection 2, 2-br1 and the page numbers');
  // a big model runs over pages: headings carried over
  const big = sampleModel();
  const all = big.state.members.map((x) => ({ kind: 'member', id: x.id }));
  const Cb = await load('clipboard.js');
  const clip = Cb.readClip(JSON.stringify(Cb.copyClip(big.state, all).clip));
  for (let i = 1; i <= 12; i++) big.change('Paste', (tx) => { const r = Cb.pasteInto(tx, clip, [0, 20000 * i, 0]); tx.setPhaseOf(r.refs.filter((x) => x.kind !== 'conn'), i + 1); });
  const bb = build(big.state), bm = Mk.markParts(bb, { perPhase: true });
  const brep = Rp.phaseReport(big.state, bb, bm, Rb.bendingSchedule(big.state.footings));
  const bp = Rp.reportSheets(brep, { paper: 'A4' });
  const btxt = bp.flatMap((p) => p.items.filter((i) => i.k === 'text').map((i) => i.s));
  ok(bp.length > 2 && bp.every(fine) && btxt.includes('Page ' + bp.length + ' of ' + bp.length), '13 phases on A4: ' + bp.length + ' pages, numbered, nothing outside or overlapping');
}

// ---------------------------------------------------------------------------
section('Clash check, intended connection overlaps left out (D15)');
{
  const Cl = await load('clash.js');
  const Cb = await load('clipboard.js');
  const typeOf = (st, r) => r.kind === 'member' ? st.members.find((x) => x.id === r.id).type : r.kind;
  const m = sampleModel();
  const r = Cl.clashCheck(m.state, build(m.state));
  const pairsOf = (res, st) => res.clashes.map((c) => [typeOf(st, c.a), typeOf(st, c.b)].sort().join('×')).sort();
  ok(r.clashes.length === 6 && r.clashes.every((c) => typeOf(m.state, c.a) === 'brace' || typeOf(m.state, c.b) === 'brace'), 'sample: 6 clashes, every one the brace (it has no gusset: it runs into both columns, a base plate, an end plate, a beam and a footing)', pairsOf(r, m.state).join(' '));
  ok(!r.clashes.some((c) => typeOf(m.state, c.a) !== 'brace' && typeOf(m.state, c.b) !== 'brace'), 'no clash reported between end plates, beams, columns, base plates and footings: the connections mean those to meet');
  const brace = m.state.members.find((x) => x.type === 'brace');
  m.change('Del', (tx) => tx.removeMembers([brace.id]));
  ok(Cl.clashCheck(m.state, build(m.state)).clashes.length === 0, 'without the brace: no clashes');
  // a beam into a column with no connection: a clash; with end plates: none
  const m2 = new Md.Model(Md.starterState('C'));
  const col = m2.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] }));
  const col2 = m2.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [6000, 0, 0], end: [6000, 0, 4000] }));
  const beam = m2.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [6000, 0, 4000] }));
  const r2 = Cl.clashCheck(m2.state, build(m2.state));
  ok(r2.clashes.length === 2 && r2.clashes.every((c) => [c.a.id, c.b.id].includes(beam)) && r2.clashes[0].depth > 5, 'a beam run into two columns with no connection: 2 clashes (overlap up to ' + r2.clashes[0].depth + ' mm)');
  m2.change('EP', (tx) => { tx.addConnection({ type: 'endplate', beam, end: 'start', column: col }); tx.addConnection({ type: 'endplate', beam, end: 'end', column: col2 }); });
  ok(Cl.clashCheck(m2.state, build(m2.state)).clashes.length === 0, 'with end plates at both ends: none (the beam is cut back; plate on flange only touches)');
  // a copy pasted in place sits in its original
  const m3 = new Md.Model(Md.starterState('D'));
  m3.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [6000, 0, 4000] }));
  const cl = Cb.readClip(JSON.stringify(Cb.copyClip(m3.state, [{ kind: 'member', id: m3.state.members[0].id }]).clip));
  m3.change('P', (tx) => Cb.pasteInto(tx, cl, [0, 0, 0]));
  const r3 = Cl.clashCheck(m3.state, build(m3.state));
  ok(r3.clashes.length === 1 && r3.clashes[0].depth >= Pr.getProfile('W16x26').tf / 2 - 0.1, 'a beam pasted in place on itself: 1 clash');
  m3.undo();
  m3.change('P', (tx) => Cb.pasteInto(tx, cl, [0, 0, -Pr.getProfile('W16x26').d]));
  ok(Cl.clashCheck(m3.state, build(m3.state)).clashes.length === 0, 'the same beam one depth lower: flange on flange only touches — no clash');
  m3.undo();
  m3.change('P', (tx) => Cb.pasteInto(tx, cl, [0, 0, -Pr.getProfile('W16x26').d + 3]));
  ok(Cl.clashCheck(m3.state, build(m3.state)).clashes.length === 1 && Cl.clashCheck(m3.state, build(m3.state), { tol: 5 }).clashes.length === 0, '3 mm into it: a clash at 1 mm tolerance, none at 5 mm');
  // concrete: a column pushed into its footing
  const m4 = new Md.Model(Md.starterState('F'));
  m4.change('C', (tx) => { tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] }); tx.addFooting({ x: 0, y: 0, top: 0, L: 1500, B: 1500, H: 500 }); });
  ok(Cl.clashCheck(m4.state, build(m4.state)).clashes.length === 0, 'a column standing on its footing: touching, no clash');
  m4.change('Sink', (tx) => tx.updateMember(m4.state.members[0].id, { start: [0, 0, -100] }));
  const r4 = Cl.clashCheck(m4.state, build(m4.state));
  ok(r4.clashes.length === 1 && r4.clashes[0].kind === 'concrete' && r4.clashes[0].depth >= 50, 'sunk 100 mm into it: a concrete clash (' + r4.clashes[0]?.depth + ' mm)');
  // phases: a hidden phase is not checked
  const m5 = sampleModel();
  m5.change('P', (tx) => { tx.addPhase(); tx.setPhaseOf([{ kind: 'member', id: m5.state.members.find((x) => x.type === 'brace').id }], 2); });
  ok(Cl.clashCheck(m5.state, build(m5.state), { phases: new Set([1]) }).clashes.length === 0 && Cl.clashCheck(m5.state, build(m5.state), { phases: new Set([1, 2]) }).clashes.length === 6, 'checking phase 1 only leaves the brace (phase 2) out');
  // the separating-axis test itself
  const box = (c, h, deg = 0) => { const a = deg * Math.PI / 180; return { c, ax: [[Math.cos(a), Math.sin(a), 0], [-Math.sin(a), Math.cos(a), 0], [0, 0, 1]], h }; };
  ok(Cl.obbOverlap(box([0, 0, 0], [1, 1, 1]), box([1.9, 0, 0], [1, 1, 1])) && !Cl.obbOverlap(box([0, 0, 0], [1, 1, 1]), box([2.1, 0, 0], [1, 1, 1])) && !Cl.obbOverlap(box([0, 0, 0], [1, 1, 1]), box([2.3, 2.3, 0], [1, 1, 1], 45)) && Cl.obbOverlap(box([0, 0, 0], [1, 1, 1]), box([2.3, 0, 0], [1, 1, 1], 45)), 'oriented boxes: apart, touching and turned 45° told apart correctly');
  // speed: 13 copies of the frame
  const big = sampleModel();
  const clip = Cb.readClip(JSON.stringify(Cb.copyClip(big.state, [...big.state.members.map((x) => ({ kind: 'member', id: x.id })), ...big.state.footings.map((f) => ({ kind: 'footing', id: f.id }))]).clip));
  for (let i = 1; i <= 12; i++) big.change('P', (tx) => Cb.pasteInto(tx, clip, [0, 20000 * i, 0]));
  const rb = Cl.clashCheck(big.state, build(big.state));
  ok(rb.clashes.length === 13 * 6 && rb.ms < 5000, '13 frames (' + rb.checked + ' solids): 78 clashes (6 per brace) in ' + rb.ms + ' ms');
}

// ---------------------------------------------------------------------------
section('KISS export for fabrication software (D16)');
{
  const K = await load('kiss.js');
  const mk = Mk.markParts(built);
  const date = new Date(2026, 9, 13, 9, 5, 7);
  const r = K.kissFile(sample.state, built, mk, { date });
  const { records, problems } = K.readKiss(r.text);
  ok(!problems.length, 'KISS 1.1 read back by a strict reader: every field within the standard\'s lengths, no line over 254, required D fields there', problems.slice(0, 3).join(' | '));
  ok(records[0].join() === 'KISS,1.1,DetailCraft' && records[1].join() === 'H,SAMPLEFR,Sample frame,,10/13/26,09:05:07,F,Final Bill', 'identification line, then the H header: job # (8 DOS characters), name, mm/dd/yy, hh:mm:ss, Metric F (all AISC shapes), Final Bill');
  ok(/\r\n$/.test(r.text) && r.text.split('\r\n').every((l) => !/[^\x20-\x7e]/.test(l)), 'plain ASCII, CRLF lines');
  const D = records.filter((f) => f[0] === 'D'), M = records.filter((f) => f[0] === 'M');
  const steel = D.filter((f) => f[1] !== 'BOLTS');
  // quantities: main parts = assembly count; attached parts = per assembly × assemblies; together = every part
  const qtyByMark = {};
  for (const f of steel) qtyByMark[f[4]] = (qtyByMark[f[4]] || 0) + Number(f[5]);
  ok(Object.entries(qtyByMark).every(([mark, n]) => mk.parts.find((p) => p.mark === mark).count === n) && steel.reduce((t, f) => t + Number(f[5]), 0) === 25, 'part quantities are totals (8 end plates p1 across 4 B1s, 6 base plates p2 across C1 and C2): 25 parts, each mark\'s count as in the BOM');
  ok(M.length === mk.assemblies.length && M.every((f) => mk.assemblies.find((a) => a.mark === f[1]).count === Number(f[2])), 'one M line per assembly mark with its quantity');
  const order = records.map((f) => f[0]).join('');
  ok(/^KISSHDWMS/.test(order.replace('KISS', 'KISS')) && records.findIndex((f) => f[0] === 'M' && f[1] === 'B1') > records.findIndex((f) => f[0] === 'D' && f[3] === 'B1'), 'W and M lines follow the first D line of their drawing / assembly');
  const seqOk = mk.assemblies.every((a) => { const i = records.findIndex((f) => f[0] === 'M' && f[1] === a.mark); let n = 0; for (let k = i + 1; k < records.length && records[k][0] !== 'D'; k++) if (records[k][0] === 'S') n += Number(records[k][2]); return n === a.count; });
  ok(seqOk, 'S lines (the phases) add up to each assembly\'s quantity, as v1.1 requires');
  const b1 = steel.find((f) => f[4] === 'b1'), p1 = steel.find((f) => f[4] === 'p1');
  ok(b1[6] === 'W' && b1[7] === '16X26' && b1[8] === 'A992' && Number(b1[9]) === Math.round(built.parts.find((p) => p.type === 'beam').length * 100) / 100 && near(Number(b1[14]), 218.6 * 2.20462262185, 0.2), 'b1: W 16X26 A992, cut length in mm with two decimals, weight in lb (imperial file)');
  ok(p1[6] === 'PL' && p1[7] === '13/16X7-1/16' && near(Number(p1[16]), 180 * 398.78 / 1e6 * 10.7639, 0.02), 'p1 (PL20x180) under imperial: 13/16 X 7-1/16 in (nearest 1/16), net area in sq ft');
  const br = steel.find((f) => f[4] === 'br1');
  ok(br[6] === 'HSS' && br[7] === '4X4X.250' && br[8] === 'A500-C', 'br1: HSS 4X4X.250 (wall in decimals, as the standard shows), grade A500 Gr C cut to 8 as A500-C');
  const lab = records.filter((f) => f[0] === 'L');
  ok(lab.some((f) => f.join() === 'L,Holes,16,22.00,16.26,Round') && lab.some((f) => f[1] === 'Weld' && f[2] === '2' && f[5] === 'Fillet'), 'labor: the middle column\'s 16 holes Ø22 through its 16.26 flange; B1\'s two end plate welds as Weld × 2');
  const bolts = D.filter((f) => f[1] === 'BOLTS');
  ok(bolts.length === 2 && bolts.some((f) => f[6] === 'AB' && f[5] === '24') && bolts.some((f) => f[6] === 'HS' && f[5] === '64' && f[8] === 'A325'), 'loose fasteners: 24 anchor rods (AB) and 64 bolts (HS, A325) on drawing BOLTS, assembly FIELD');
  // metric: EN shapes, phases as sequences, weights in kg
  const m = sampleModel();
  m.change('EN', (tx) => { for (const x of m.state.members) if (x.type === 'beam') tx.updateMember(x.id, { profile: 'IPE300' }); tx.addPhase(); tx.setPhaseOf([{ kind: 'member', id: m.state.members.find((x) => x.type === 'brace').id }], 2); });
  const b2 = build(m.state), mk2 = Mk.markParts(b2, { perPhase: false });
  const r2 = K.kissFile(m.state, b2, mk2, { date });
  const R2 = K.readKiss(r2.text).records;
  ok(r2.metric && R2[1][6] === 'T' && R2.some((f) => f[0] === 'D' && f[6] === 'W' && f[7] === 'IPE300') && R2.some((f) => f[0] === 'D' && f[7] === '20X180') && R2.some((f) => f[0] === 'S' && f[1] === '2'), 'an EN beam makes the file metric: Metric T, W IPE300, plates 20X180 in mm, the brace in sequence 2');
  ok(near(Number(R2.find((f) => f[0] === 'D' && f[4] === 'br1')[14]), b2.parts.find((p) => p.type === 'brace').weight, 0.006), 'metric weights in kg (br1 ' + b2.parts.find((p) => p.type === 'brace').weight.toFixed(2) + ')');
  ok(K.inchFraction(12.375) === '12-3/8' && K.inchFraction(0.5) === '1/2' && K.inchFraction(3) === '3' && K.inchFraction(0.03) === '0', 'inch fractions to 1/16');
  const evil = sampleModel('Job, "X"\nY');
  ok(!K.readKiss(K.kissFile(evil.state, build(evil.state), Mk.markParts(build(evil.state)), { date }).text).problems.length, 'a model name with commas, quotes and a line break still makes a clean file (commas become spaces)');
  fs.writeFileSync(path.join(OUT, 'sample.kss'), r.text);
}

// ---------------------------------------------------------------------------
section('Drawing issue log: revisions, revision table, needs re-issue (D17)');
{
  const Is = await load('issues.js');
  const K = await load('kiss.js');
  ok(Is.nextRev('') === 'A' && Is.nextRev('A') === 'B' && Is.nextRev('H') === 'J' && Is.nextRev('N') === 'P' && Is.nextRev('Z') === 'AA' && Is.nextRev('AZ') === 'BA', 'revision letters A, B … skipping I and O; after Z: AA; after AZ: BA');
  const m = sampleModel();
  const mkOf = (st) => { const b = build(st); const k = Mk.markParts(b); k.footingMark = Mk.markFootings(st.footings); return [b, k]; };
  const setOf = (date = '2026-10-13') => { const [b, k] = mkOf(m.state); return Dw.drawingSet(m.state, b, k, { date }); };
  const s1 = setOf();
  ok(s1.sheets.every((sh) => /^[0-9A-F]{8}$/.test(sh.hash)) && setOf('2027-01-01').sheets.every((sh, i) => sh.hash === s1.sheets[i].hash), 'every sheet has a content hash; another date (title block only) does not change it');
  const st0 = Is.sheetStatus(s1.sheets, m.state.issues);
  ok([...st0.values()].every((x) => !x.issued && x.changed), 'nothing issued yet: every sheet is to be issued');
  const steps = m.undoStack.length;
  m.change('Issue', (tx) => tx.addIssues(Is.planIssue(s1.sheets, m.state.issues, s1.sheets.map((x) => x.id), { date: '2026-10-13', note: 'Issued for approval' })));
  const s2 = setOf();
  const st1 = Is.sheetStatus(s2.sheets, m.state.issues);
  ok(m.undoStack.length === steps + 1 && m.state.issues.length === 12 && [...st1.values()].every((x) => x.issued && x.rev === 'A' && !x.changed), 'Issue all: 12 sheets at rev A in one undo step, all current');
  ok(s2.sheets.every((sh, i) => sh.hash === s1.sheets[i].hash), 'issuing (title block rev, revision table) does not itself change any content hash');
  const b1 = s2.sheets.find((x) => x.id === 'assembly:B1');
  const words = b1.items.filter((i) => i.k === 'text').map((i) => i.s);
  ok(words.includes('A-B1  rev A') && words.includes('Rev') && words.includes('Issued for approval'), 'B1\'s title block says "A-B1  rev A", its revision table lists rev A and the note');
  ok(Is.planIssue(s2.sheets, m.state.issues, ['assembly:B1'], { date: 'x' }).length === 0, 'an unchanged issued sheet is not issued again');
  // a hole in one beam: its assembly sheet (and only drawings that show it) need re-issue
  const beam = m.state.members.find((x) => x.type === 'beam');
  m.change('Hole', (tx) => tx.addHole(beam.id, { face: 'web', x: 900, y: 60, d: 22 }));
  const s3 = setOf();
  const st3 = Is.sheetStatus(s3.sheets, m.state.issues);
  const changed = s3.sheets.filter((sh) => st3.get(sh.id).changed).map((sh) => sh.number);
  ok(changed.length >= 1 && !changed.includes('A-C1') && !changed.includes('A-C2') && s3.sheets.some((sh) => st3.get(sh.id).changed && sh.kind === 'assembly'), 'a hole added to one beam: its new assembly drawing needs issuing; the column drawings stay current (' + changed.join(', ') + ')');
  m.change('Re', (tx) => tx.addIssues(Is.planIssue(s3.sheets, m.state.issues, s3.sheets.filter((sh) => st3.get(sh.id).changed).map((sh) => sh.id), { date: '2026-10-14', note: 'Hole added' })));
  const st4 = Is.sheetStatus(setOf().sheets, m.state.issues);
  ok([...st4.values()].every((x) => !x.changed), 'after "issue changed sheets" everything is current again');
  // file round trip and a tampered log
  const back = Md.readModel(m.toJSON()).state;
  ok(JSON.stringify(back.issues) === JSON.stringify(m.state.issues), 'the issue log survives save → open');
  const t = JSON.parse(m.toJSON());
  t.issues.push({ sheet: 'x', number: 'A-1', rev: 'a1', date: 'yesterday', hash: 'zz' }, { sheet: 'y', number: 'A-2', rev: 'b', date: '2026-01-01', hash: 'ABCDEF01', note: 'ok\u0000' });
  const ti = Md.readModel(JSON.stringify(t)).state.issues;
  ok(ti.length === m.state.issues.length + 1 && ti[ti.length - 1].rev === 'B' && ti[ti.length - 1].note === 'ok', 'a tampered log: a bad record dropped, a lower-case rev made upper case, control characters stripped');
  // the KISS file carries the revisions
  const [bk, kk] = mkOf(m.state);
  const kiss = K.readKiss(K.kissFile(m.state, bk, kk, { revs: Is.revsByNumber(m.state.issues), date: new Date(2026, 9, 14) }).text).records;
  ok(kiss.filter((f) => f[0] === 'D' && f[1] === 'A-C1').every((f) => f[2] === 'A') && kiss.some((f) => f[0] === 'W' && f[2] === 'B'), 'KISS: drawing revision field = the latest issue (A-C1 rev A; the re-issued assembly rev B)');
}

// ---------------------------------------------------------------------------
section('Revision clouds round changed parts (D19)');
{
  const Is = await load('issues.js');
  const m = sampleModel();
  const mkOf = (st) => { const b = build(st); const k = Mk.markParts(b); k.footingMark = Mk.markFootings(st.footings); return [b, k]; };
  const setOf = () => { const [b, k] = mkOf(m.state); return Dw.drawingSet(m.state, b, k, { date: '2026-10-13' }); };
  const issue = (set, ids, note) => m.change('Issue', (tx) => tx.addIssues(Is.planIssue(set.sheets, m.state.issues, ids, { date: '2026-10-13', note })));
  const s1 = setOf();
  ok(s1.sheets.every((sh) => sh.clouds.length === 0) && s1.sheets.filter((sh) => sh.kind !== 'anchor').every((sh) => Object.keys(sh.prints).length > 0), 'every sheet knows the parts it draws; nothing issued: no clouds');
  issue(s1, s1.sheets.map((x) => x.id), 'For approval');
  ok(m.state.issues.every((x) => x.parts && Object.values(x.parts).every((v) => /^[0-9A-F]{8}$/.test(v))), 'an issue stores a print of each part on the sheet');
  ok(setOf().sheets.every((sh) => sh.clouds.length === 0), 'rev A (the first issue): no clouds');
  const beam = m.state.members.find((x) => x.type === 'beam');
  m.change('Hole', (tx) => tx.addHole(beam.id, { face: 'web', x: 900, y: 60, d: 22 }));
  const [b2, k2] = mkOf(m.state);
  const bp = b2.parts.find((p) => p.member === beam.id);
  const s2 = setOf();
  const st2 = Is.sheetStatus(s2.sheets, m.state.issues);
  const clouded = s2.sheets.filter((sh) => sh.clouds.length);
  // the hole makes the beam a new assembly, so the other beams' mark goes B1 → B2: on plans and elevations their labels change
  const relabeled = new Set(b2.parts.filter((p) => p.type === 'beam' && p.id !== bp.id).map((p) => 'part:' + p.id));
  ok(clouded.length >= 2 && clouded.every((sh) => st2.get(sh.id).changed && sh.clouds.every((c) => c.key === 'part:' + bp.id || (sh.kind !== 'assembly' && relabeled.has(c.key)))), 'a hole added to one beam: clouds on the changed sheets only, round that beam, and on plans / elevations round the beams whose mark changed (' + clouded.map((sh) => sh.number).join(', ') + ')');
  ok(clouded.filter((sh) => sh.kind === 'assembly').every((sh) => sh.clouds.every((c) => c.key === 'part:' + bp.id)), '… the assembly drawing clouds the beam only (a hole is drawn there; GA sheets draw no holes)');
  ok(clouded.some((sh) => sh.kind === 'assembly') && clouded.some((sh) => sh.kind !== 'assembly'), '… on its assembly drawing and on the GA sheets that show it');
  ok(s2.sheets.filter((sh) => !st2.get(sh.id).changed).every((sh) => sh.clouds.length === 0), 'sheets that did not change carry no cloud');
  const asm = clouded.find((sh) => sh.kind === 'assembly');
  const tri = asm.items.filter((i) => i.k === 'text' && i.s === 'B');
  ok(tri.length === asm.clouds.length, 'each cloud has a revision triangle with the coming revision, B');
  const reg = asm.clouds[0];
  const cloudItem = asm.items.find((i) => i.k === 'path' && i.closed && i.pts.length > 40 && i.pts.every(([x, y]) => x >= reg.x0 - 1.4 && x <= reg.x1 + 1.4 && y >= reg.y0 - 1.4 && y <= reg.y1 + 1.4));
  ok(!!cloudItem && cloudItem.pts.every(([x, y]) => x <= reg.x0 + 1e-6 || x >= reg.x1 - 1e-6 || y <= reg.y0 + 1e-6 || y >= reg.y1 - 1e-6), 'the cloud is a closed scalloped outline whose arcs bulge outward from the box round the part');
  issue(s2, s2.sheets.filter((sh) => st2.get(sh.id).changed).map((sh) => sh.id), 'Hole added');
  const s3 = setOf();
  const st3 = Is.sheetStatus(s3.sheets, m.state.issues);
  ok([...st3.values()].every((x) => !x.changed) && s3.sheets.filter((sh) => sh.clouds.length).map((sh) => sh.id).join() === clouded.map((sh) => sh.id).join(), 'issued as rev B: the clouds stay on rev B, and do not make the sheets need issuing again');
  ok(s3.sheets.find((sh) => sh.id === asm.id).items.some((i) => i.k === 'text' && i.s === 'B'), '… still marked B');
  // the next change clouds only what changed after rev B
  const col = b2.parts.find((p) => p.type === 'column');
  m.change('Hole 2', (tx) => tx.addHole(col.member, { face: 'web', x: 1500, y: 0, d: 22 }));
  const s4 = setOf();
  const c4 = s4.sheets.filter((sh) => sh.clouds.length);
  const st4 = Is.sheetStatus(s4.sheets, m.state.issues);
  ok(c4.filter((sh) => st4.get(sh.id).changed).every((sh) => sh.clouds.every((c) => c.key !== 'part:' + bp.id)) && c4.some((sh) => sh.clouds.some((c) => c.key === 'part:' + col.id)), 'the next change (a hole in a column): changed sheets cloud what changed since their last issue, not the beam');
  ok(s4.sheets.find((sh) => sh.id === asm.id).clouds.every((c) => c.key === 'part:' + bp.id) && !st4.get(asm.id).changed, '… while the beam\'s rev B sheet, unchanged, keeps its rev B cloud');
  const back = Md.readModel(m.toJSON()).state;
  ok(JSON.stringify(back.issues) === JSON.stringify(m.state.issues), 'the prints survive save → open');
  const tj = JSON.parse(m.toJSON());
  tj.issues[0].parts = { 'part:ok': 'ABCDEF01', 'bad key': 'ABCDEF01', 'part:x': 'nothex!!' };
  ok(JSON.stringify(Md.readModel(JSON.stringify(tj)).state.issues[0].parts) === '{"part:ok":"ABCDEF01"}', 'tampered prints: bad keys and values dropped');
}

// ---------------------------------------------------------------------------
section('Column base details: grout gap, stiffeners, shear lug, plate washers (D20)');
{
  const Cn = await load('connections.js');
  const Cl = await load('clash.js');
  ok(Cn.DG1_TABLE_2_3.length === 8 && Cn.dg1Row(19.05).washer === 2 * 25.4 && near(Cn.dg1Row(19.05).hole, (1 + 5 / 16) * 25.4) && Cn.dg1Row(20).rod === 0.875 * 25.4 && Cn.dg1Row(25.4).washerT === 0.375 * 25.4 && Cn.dg1Row(70) === null,
    'AISC DG1 Table 2.3: 3/4 in. rod → 1-5/16 hole, 2 in. washer; an M20 rod takes the 7/8 in. row; 1 in. → 3/8 thick; none past 2-1/2 in.');
  const m = sampleModel();
  const bp = m.state.connections.find((c) => c.type === 'baseplate');
  const before = build(m.state);
  const nBefore = before.parts.length;
  ok(Object.entries({ grout: 0, stiffeners: 0, lugD: 0, washers: 0 }).every(([k, v]) => bp.params[k] === v), 'all off by default: a model made before D20 builds the same parts');
  m.change('Base', (tx) => tx.updateConnection(bp.id, { grout: 40, stiffeners: 4, stiffT: 12, stiffH: 150, lugD: 120, lugT: 25, lugW: 150, washers: 1, projection: 25 }));
  const b = build(m.state);
  const mine = b.parts.filter((p) => p.conn === bp.id);
  const st = mine.filter((p) => /\.st\d$/.test(p.id)), lug = mine.find((p) => p.id.endsWith('.lug')), ws = mine.filter((p) => /\.w\d$/.test(p.id));
  ok(st.length === 4 && !!lug && ws.length === 4 && b.parts.length === nBefore + 9, '4 stiffeners, a shear lug and 4 plate washers (' + (b.parts.length - nBefore) + ' new parts)');
  const col = b.byId.get(bp.column), plate = b.byId.get(bp.id + '.plate'), P = bp.params;
  const z0 = Math.min(col.start[2], col.end[2]) - P.tp;          // underside of the base plate (the column is set back by tp)
  const zr = (p) => [Math.min(p.start[2], p.end[2]), p];
  ok(st.every((s) => near(s.start[2], z0 + P.tp + 75) && s.profile.b === 150 && s.profile.t === 12 && near(Math.abs(s.frame.v[2]), 0, 1e-9)), 'stiffeners stand on the plate: vertical (thickness horizontal), 150 high, centered 75 above its top');
  const cp = col.profile;
  const lens = st.map((s) => Math.round(s.length)).sort((a, c) => a - c);
  ok(near(lens[0], P.length / 2 - cp.depth / 2, 0.6) && near(lens[1], lens[0]) && near(lens[2], P.width / 2 - cp.tw / 2, 0.6) && near(lens[3], lens[2]), 'two run from the flanges out to the plate ends (' + lens[0] + '), two from the web, between the flanges, out to the plate sides (' + lens[2] + ')');
  ok(near(lug.start[2], z0 - 60) && lug.profile.b === 120 && near(lug.length, 150), 'the shear lug hangs 120 below the plate (centered 60 under it), 150 wide');
  ok(ws.every((w) => w.loose && near(w.start[2], z0 + P.tp + Cn.dg1Row(P.rodD).washerT / 2, 1e-6) && near(w.profile.b, Cn.dg1Row(P.rodD).washer) && w.holes.length === 1), 'washers: loose, sized by DG1 for the rod, on the plate, one hole each');
  const rods = b.bolts.filter((x) => x.conn === bp.id);
  ok(rods.every((r) => near(r.length, P.embed + 40 + P.tp + P.projection)), 'the grout gap makes each rod 40 longer (' + Math.round(rods[0].length) + ')');
  const pr = b.problems.filter((x) => x.ref === bp.id).map((x) => x.text);
  ok(pr.some((x) => /stick out far enough/.test(x)), 'warns: the rods may not stick out enough for washer and nut', pr.join(' | '));
  ok(b.welds.filter((w) => w.conn === bp.id).length === 1 + 4 + 1, 'welds: column base all round, each stiffener, the lug');
  const list = Cl.clashCheck(m.state, b).clashes;
  const brace = m.state.members.find((x) => x.type === 'brace').id;
  ok(!list.some((c) => c.a.id !== brace && c.b.id !== brace), 'no new clashes: stiffeners and washers meet only what they are welded or set on; the lug in the footing is meant (its grout pocket)', JSON.stringify(list.map((c) => [c.a.id, c.b.id])));
  m.change('Lug', (tx) => tx.updateConnection(bp.id, { lugD: 30 }));
  ok(build(m.state).problems.some((x) => x.ref === bp.id && /grout gap/.test(x.text)), 'a lug no deeper than the grout gap is warned about');
  const marks = Mk.markParts(b);
  ok(marks.asmOf.get(lug.id) === col.id && ws.every((w) => marks.asmOf.get(w.id) === col.id), 'the lug, stiffeners and washers belong to the column\'s assembly');
}

// ---------------------------------------------------------------------------
section('Bolted splices with cover plates, beam and column (D21)');
{
  const Cn = await load('connections.js');
  const Cl = await load('clash.js');
  const Cb = await load('clipboard.js');
  const m = new Md.Model(Md.starterState('Sp'));
  const ids = {};
  m.change('Set up', (tx) => {
    ids.a = tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [3000, 0, 4000] });
    ids.b = tx.addMember({ type: 'beam', profile: 'W16x26', start: [6000, 0, 4000], end: [3000, 0, 4000] });   // runs back toward a
    ids.c1 = tx.addMember({ type: 'column', profile: 'W12x50', start: [10000, 0, 0], end: [10000, 0, 3000] });
    ids.c2 = tx.addMember({ type: 'column', profile: 'W12x50', start: [10000, 0, 3000], end: [10000, 0, 7000] });
    ids.x = tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 5000, 4000], end: [3000, 5000, 4000] });
    ids.y = tx.addMember({ type: 'beam', profile: 'W12x50', start: [3000, 5000, 4000], end: [6000, 5000, 4000] });
  });
  const found = Cn.findSplices(m.state);
  ok(found.some((f) => f.a === ids.a && f.aEnd === 'end' && f.b === ids.b && f.bEnd === 'end') && found.some((f) => [f.a, f.b].sort().join() === [ids.c1, ids.c2].sort().join()), 'findSplices: the two beams meeting end to end (one reversed) and the two column lifts', JSON.stringify(found));
  m.change('Splices', (tx) => { ids.s = tx.addConnection({ type: 'splice', a: ids.a, aEnd: 'end', b: ids.b }); ids.sc = tx.addConnection({ type: 'splice', a: ids.c1, aEnd: 'end', b: ids.c2 }); ids.sx = tx.addConnection({ type: 'splice', a: ids.x, aEnd: 'end', b: ids.y }); });
  let threw = false; try { m.change('Again', (tx) => tx.addConnection({ type: 'splice', a: ids.b, aEnd: 'end', b: ids.a })); } catch { threw = true; }
  ok(threw, 'a second splice on the same two pieces is refused');
  const b = build(m.state);
  const P = Cn.SPLICE_DEFAULTS;
  const pl = b.parts.filter((x) => x.conn === ids.s);
  ok(pl.map((x) => x.id.split('.')[1]).sort().join() === 'fb,ft,w1,w2', 'beam splice: top and bottom flange plates, two web plates');
  const A = b.byId.get(ids.a), B = b.byId.get(ids.b), W = Pr.getProfile('W16x26');
  ok(near(A.length, 3000 - P.jointGap / 2) && near(B.length, 3000 - P.jointGap / 2), 'each beam cut back by half the 10 mm gap (' + A.length + ', ' + B.length + ')');
  const bolts = b.bolts.filter((x) => x.conn === ids.s);
  ok(bolts.length === 2 * 2 * 3 * 2 + 2 * 2 * 3, '36 bolts: 3 rows × 2 lines × 2 sides on each flange, 3 × 2 × 2 in the web (' + bolts.length + ')');
  const fl = bolts.filter((x) => Math.abs(x.axis[2]) > 0.99), wb = bolts.filter((x) => Math.abs(x.axis[2]) < 0.01);
  ok(fl.every((x) => near(x.grip, W.tf + P.flangeT)) && wb.every((x) => near(x.grip, W.tw + 2 * P.webT)), 'grips: flange + its plate; web + both web plates');
  const gF = W.bf - 80;
  const ah = A.holes.filter((h) => h.face === 'top'), bh = B.holes.filter((h) => h.face === 'top');
  ok(ah.length === 6 && bh.length === 6 && ah.every((h) => near(Math.abs(h.y), gF / 2, 0.01)) && near(Math.max(...ah.map((h) => h.x)), A.length - P.flangeEdge, 0.01), 'a\'s top flange: 6 holes on the gauge lines, the nearest 40 from its cut end');
  ok(near(Math.min(...bh.map((h) => h.x)), B.length - P.flangeEdge - 2 * P.flangePitch, 0.01) && B.holes.filter((h) => h.face === 'bottom').length === 6 && B.holes.filter((h) => h.face === 'web').length === 6, 'b (reversed): its top flange is still "top"; 6 bottom flange and 6 web holes, at its cut end');
  const ft = pl.find((x) => x.id.endsWith('.ft')), w1 = pl.find((x) => x.id.endsWith('.w1'));
  ok(near(ft.length, P.jointGap + 2 * (2 * P.flangeEdge + 2 * P.flangePitch)) && near(ft.profile.b, W.bf) && near(ft.start[2], 4000 + A.voff + W.d / 2 + P.flangeT / 2, 0.01), 'flange plate: 10 + 2 × (2 × 40 + 2 × 75) = 470 long, flange wide, on top of the top flange (top of steel at the reference line)');
  const clear = W.d - 2 * (W.tf + W.r);
  ok(near(w1.profile.b, Math.floor((clear - 20) / 5) * 5) && near(Math.abs(w1.start[1]), W.tw / 2 + P.webT / 2, 0.01) && Math.abs(w1.frame.u[2]) > 0.999, 'web plates: clear web less 20 (' + w1.profile.b + '), against the web, standing upright');
  ok(pl.every((x) => x.holes.length === (x.id.endsWith('.ft') || x.id.endsWith('.fb') ? 12 : 12)), 'each plate has its 12 holes');
  ok(!b.problems.some((x) => x.ref === ids.s), 'no warnings with the defaults on W16x26', b.problems.filter((x) => x.ref === ids.s).map((x) => x.text).join(' | '));
  const col = b.parts.filter((x) => x.conn === ids.sc);
  ok(col.length === 4 && near(b.byId.get(ids.c1).length + b.byId.get(ids.c2).length, 7000 - P.jointGap, 0.01) && col.every((x) => Math.abs(x.frame.x[2]) > 0.999), 'column splice: 4 vertical plates, the two lifts 10 apart');
  ok(b.problems.some((x) => x.ref === ids.sx && x.hard), 'a splice between different sizes is refused (W16x26 to W12x50)');
  const mk = Mk.markParts(b);
  ok(pl.every((x) => mk.asmOf.get(x.id) === ids.a), 'the plates ship with the first piece (its assembly)');
  const cl = Cl.clashCheck(m.state, b).clashes.filter((c) => [c.a.id, c.b.id].some((r) => [ids.s, ids.sc, ids.a, ids.b, ids.c1, ids.c2].includes(r)));
  ok(cl.length === 0, 'no clashes between the plates and the pieces they join', JSON.stringify(cl.map((c) => [c.aPart, c.bPart, c.depth])));
  // copy, paste, save, open, delete
  const clip = Cb.copyClip(m.state, [{ kind: 'member', id: ids.a }, { kind: 'member', id: ids.b }], { connections: true });
  ok(clip && clip.clip.connections.length === 1 && clip.clip.connections[0].type === 'splice', 'copying both beams takes their splice');
  const back = Md.readModel(m.toJSON()).state;
  ok(JSON.stringify(back.connections) === JSON.stringify(m.state.connections), 'splices survive save → open');
  m.change('Del', (tx) => tx.removeMembers([ids.b]));
  ok(!m.state.connections.some((c) => c.id === ids.s), 'deleting a piece deletes its splice');
}

// ---------------------------------------------------------------------------
section('Brace gussets: angles and flats bolted, tubes slotted (D22)');
{
  const dot3 = (a, b) => a[0] * b[0] + a[1] * b[1] + a[2] * b[2], sub3 = (a, b) => [a[0] - b[0], a[1] - b[1], a[2] - b[2]];
  const Cn = await load('connections.js');
  const Cl = await load('clash.js');
  const Dg = await load('drawings.js');
  const m = sampleModel();
  const brace = m.state.members.find((x) => x.type === 'brace');
  const ends = Cn.freeBraceEnds(m.state);
  const cols = m.state.members.filter((x) => x.type === 'column').map((x) => x.id);
  ok(ends.length === 2 && ends.every((j) => cols.includes(j.support)) && ends.find((j) => j.end === 'end').others.length === 2, 'the sample\'s brace lands on a column base and on a column top where two beams meet');
  const before = Cl.clashCheck(m.state, build(m.state)).clashes.length;
  m.change('G', (tx) => { for (const j of ends) tx.addConnection({ type: 'gusset', brace: j.brace, end: j.end, support: j.support }); });
  const b = build(m.state);
  const gs = m.state.connections.filter((c) => c.type === 'gusset');
  const gp = b.parts.filter((x) => gs.some((g) => g.id === x.conn));
  ok(before === 6 && Cl.clashCheck(m.state, b).clashes.length === 0, 'its 6 clashes (no gusset) are gone with gussets at both ends');
  ok(!b.problems.some((x) => gs.some((g) => g.id === x.ref)) && gp.length === 2 && !b.bolts.some((x) => gs.some((g) => g.id === x.conn)) && b.welds.filter((w) => gs.some((g) => g.id === w.conn)).length === 4, 'a tube: slotted over the gusset and welded (no bolts), each gusset welded to its column; no warnings');
  const P = Cn.GUSSET_DEFAULTS, BP = m.state.connections.find((c) => c.type === 'baseplate' && c.column === ends[0].support).params;
  const g0 = gp.find((x) => x.conn === gs.find((g) => g.end === 'start').id), g1 = gp.find((x) => x.conn === gs.find((g) => g.end === 'end').id);
  ok(near(Math.min(g0.start[2], g0.end[2]), BP.tp, 0.01), 'at the column base the gusset sits on the base plate (from z = ' + BP.tp + ')');
  const W16 = Pr.getProfile('W16x26'), top = Math.max(brace.start[2], brace.end[2]);
  ok(Math.max(g1.start[2], g1.end[2]) <= top - W16.d + 0.01, 'at the column top it stays under the beams (top ' + Math.round(Math.max(g1.start[2], g1.end[2])) + ' ≤ ' + Math.round(top - W16.d) + ')');
  ok(gp.every((x) => near(x.start[1], 0, 0.01) && near(x.end[1], 0, 0.01) && near(Math.abs(x.frame.v[1]), 1, 1e-6)), 'both gussets in the brace\'s plane through the column axes (thickness across it)');
  const br = b.byId.get(brace.id);
  ok(br.length < Math.hypot(6000, 4000) - 600, 'the brace is cut back at both ends to clear the columns, the base plate and the beams (' + Math.round(br.length) + ')');
  // an angle brace and a flat bar, bolted
  const mk = (profile, rotation) => {
    const mm = new Md.Model(Md.starterState('G'));
    const ids = {};
    mm.change('Set', (tx) => {
      ids.c = tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] });
      ids.b = tx.addMember({ type: 'brace', profile, start: [0, 0, 1000], end: [4000, 0, 4000], rotation });
    });
    mm.change('G', (tx) => { ids.g = tx.addConnection({ type: 'gusset', brace: ids.b, end: 'start', support: ids.c }); });
    return { mm, ids, b: build(mm.state) };
  };
  const A = mk('L4X4X3/8', 0);
  const L4 = Pr.getProfile('L4X4X3/8');
  const ab = A.b.byId.get(A.ids.b), ag = A.b.parts.find((x) => x.conn === A.ids.g);
  ok(ab.holes.length === 3 && ab.holes.every((h) => h.face === 'web' && near(h.y, 0, 0.01)) && A.b.bolts.filter((x) => x.conn === A.ids.g).length === 3, 'angle, rotation 0: the leg along v lies in the gusset plane; 3 bolts on the middle of that leg');
  const bl = A.b.bolts.filter((x) => x.conn === A.ids.g);
  ok(bl.every((x) => near(x.grip, L4.t + P.tp)), 'bolt grip = leg + gusset');
  const nP = [0, 1, 0];
  const plane = Math.abs(dot3(sub3(ag.start, ab.start), nP));
  ok(near(plane, L4.b / 2 + P.tp / 2, 0.01), 'the gusset\'s mid-plane is b/2 + t/2 from the brace axis: against the back of the leg (' + plane.toFixed(2) + ')');
  // each bolt goes through the brace hole and the gusset hole (same line along the bolt axis)
  const hb = ab.holes.map((h) => Dg.holeGeom(ab, h).c), hg = ag.holes.map((h) => Dg.holeGeom(ag, h).c);
  ok(hb.every((c) => hg.some((q) => near(Math.hypot(c[0] - q[0], c[2] - q[2]), 0, 0.01))), 'every brace hole lines up with a gusset hole');
  const first = Math.min(...ab.holes.map((h) => h.x));
  ok(near(first, P.braceEdge, 0.01), 'the first bolt is the end distance (40) from the brace\'s cut end');
  ok(Cl.clashCheck(A.mm.state, A.b).clashes.length === 0, 'no clashes');
  const nc = Nc.readNc1(Nc.writeNc1(ab, { order: 'T', mark: 'a1', count: 1 }));
  const bo = nc.blocks.filter((x) => x.type === 'BO').flatMap((x) => x.rows);
  ok(bo.length === 3 && bo.every((r) => r.face === 'u' && near(r.nums[1], L4.b / 2, 0.01)), 'NC: the angle\'s holes on DSTV face u (its leg along v), y = 50.8 from the heel');
  const A90 = mk('L4X4X3/8', 90);
  ok(A90.b.byId.get(A90.ids.b).holes.every((h) => h.face === 'bottom') && !A90.b.problems.some((x) => x.hard), 'rotation 90: the other leg (along u) is bolted');
  const A45 = mk('L4X4X3/8', 45);
  ok(A45.b.problems.some((x) => x.ref === A45.ids.g && x.hard && /Turn the brace/.test(x.text)), 'rotation 45: refused, no leg lies in the gusset plane');
  const F = mk('PL10x100', 90);
  const fb = F.b.byId.get(F.ids.b), fg = F.b.parts.find((x) => x.conn === F.ids.g);
  ok(fb.holes.length === 3 && fb.holes.every((h) => h.face === 'plate' && near(h.y, 0, 0.01)) && near(Math.abs(dot3(sub3(fg.start, fb.start), nP)), 5 + P.tp / 2, 0.01), 'flat bar (turned 90° so its face lies in the plane): 3 bolts on its center, the gusset against its face');
  const W = mk('W8X31', 0);
  ok(W.b.problems.some((x) => x.ref === W.ids.g && x.hard), 'an I-shape brace is refused');
  // freeBraceEnds / similar / delete
  ok(Cn.freeBraceEnds(m.state).length === 0, 'both ends taken: no free brace ends left');
  m.change('Del', (tx) => tx.removeMembers([brace.id]));
  ok(!m.state.connections.some((c) => c.type === 'gusset'), 'deleting the brace deletes its gussets');
}

// ---------------------------------------------------------------------------
section('Hidden lines on drawings (D12)');
{
  // the clipper on its own: a line through a square is hidden inside it, visible on its edge
  const sq = [[0, 0], [10, 0], [10, 10], [0, 10]];
  const r = Dw.runsBehind([[-5, 5], [15, 5]], false, [sq]);
  ok(r.length === 3 && !r[0].hidden && r[1].hidden && !r[2].hidden && near(r[1].pts[0][0], 0) && near(r[1].pts[1][0], 10), 'a line through a square: visible, hidden from x 0 to 10, visible');
  ok(Dw.runsBehind([[0, 0], [10, 0]], false, [sq]).every((q) => !q.hidden), 'a line along the square\'s edge stays visible');
  const L = [[0, 0], [10, 0], [10, 3], [3, 3], [3, 10], [0, 10]];
  const r2 = Dw.runsBehind([[5, -2], [5, 12]], false, [L]);
  ok(r2.filter((q) => q.hidden).length === 1 && near(r2.find((q) => q.hidden).pts[0][1], 0) && near(r2.find((q) => q.hidden).pts[1][1], 3), 'a concave (L-shaped) occluder hides only where the line is inside it');
  // on the sample: plans and elevations draw less where parts are behind others; nothing is drawn twice
  const [b, k] = [built, Object.assign(Mk.markParts(built), { footingMark: Mk.markFootings(sample.state.footings) })];
  const len = (sh) => sh.items.filter((i) => i.k === 'path' && !i.dash).reduce((t, i) => t + i.pts.slice(1).reduce((u, p, j) => u + Math.hypot(p[0] - i.pts[j][0], p[1] - i.pts[j][1]), 0), 0);
  const on = Dw.drawingSet(sample.state, b, k, { date: '2026-10-13' }), off = Dw.drawingSet(sample.state, b, k, { date: '2026-10-13', hiddenLines: false });
  const ga = on.sheets.filter((sh) => sh.kind === 'elevation').map((sh, i) => [sh.number, len(sh), len(off.sheets.find((x) => x.id === sh.id))]);
  ok(ga.some(([, a, c]) => a < c - 5) && ga.every(([, a, c]) => a <= c + 1e-6), 'elevations: the beams seen end-on behind the columns lose their hidden outline (' + ga.map(([n, a, c]) => n + ' ' + Math.round(c - a) + ' mm less').join(', ') + ')');
}
  // assembly drawings: a plate wholly behind the main part's web is drawn dashed where the part covers it
  {
    const mc = new Md.Model(Md.starterState('HLR'));
    let col, bp;
    mc.change('c', (tx) => { col = tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] }); bp = tx.addConnection({ type: 'baseplate', column: col }); });
    mc.change('s', (tx) => tx.updateConnection(bp, { stiffeners: 4 }));
    const bc = build(mc.state), kc = Object.assign(Mk.markParts(bc), { footingMark: new Map() });
    const sheetOf = (hl) => Dw.drawingSet(mc.state, bc, kc, { date: '2026-10-13', hiddenLines: hl }).sheets.find((sh) => sh.kind === 'assembly');
    const dashed = (sh) => sh.items.filter((i) => i.k === 'path' && i.dash && i.dash[0] === 1.5 && i.dash[1] === 1).length;
    const a1 = sheetOf(true), a0 = sheetOf(false);
    ok(dashed(a1) > dashed(a0), 'column base with 4 stiffeners: the one behind the web is dashed in the front view (' + (dashed(a1) - dashed(a0)) + ' dashed runs more)');
  }

// ---------------------------------------------------------------------------
section('Anchor bolt plan with rod schedule (D18)');
{
  const mkOf = (st) => { const b = build(st); const k = Mk.markParts(b); k.footingMark = Mk.markFootings(st.footings); return [b, k]; };
  const m = sampleModel();
  let [b, k] = mkOf(m.state);
  const sh = Dw.drawingSet(m.state, b, k, { date: '2026-10-13' }).sheets.find((x) => x.kind === 'anchor');
  ok(sh && sh.number === 'GA-08' && sh.title === 'Anchor bolt plan', 'the anchor bolt plan is GA-08, after the plans and elevations');
  const rodsOnSheet = sh.items.filter((i) => i.k === 'circle' && near(i.r, Math.max(0.4, 10 / Number(sh.scale.slice(2))), 1e-6)).length;
  ok(rodsOnSheet === 24, 'all 24 anchor rods drawn in the plan at their diameter (' + rodsOnSheet + ')');
  ok(JSON.stringify(sh.rods.rows) === JSON.stringify([['Mark', 'Qty', 'Dia', 'Length', 'Projection', 'Embedment', 'Grade'], ['R1', '24', '20', '575', '100', '450', 'F1554 Gr 36']]), 'rod schedule: R1, 24 off, Ø20 × 575 (projection 100 + plate 25 + embedment 450), F1554 Gr 36');
  ok(sh.rods.plates.length === 7 && sh.rods.plates.slice(1).map((r) => r[0]).join() === 'A/1,A/2,A/3,B/1,B/2,B/3' && sh.rods.plates.slice(1).every((r) => r[2] === 'BP1' && r[4] === '4 R1' && r[5] === '+25'), 'base plate schedule: six grids, pattern BP1, 4 R1 each, top of plate +25');
  const words = sh.items.filter((i) => i.k === 'text').map((i) => i.s);
  ok(words.includes('350') && words.includes('300') && words.includes('BP1  1:10') || words.some((w) => /^BP1  1:\d+$/.test(w)), 'a typical BP1 detail with its rod spacing 350 × 300 dimensioned');
  // a second pattern, a column off the grid
  const col = m.state.connections.find((c) => c.type === 'baseplate');
  m.change('Rods', (tx) => tx.updateConnection(col.id, { sx: 250, rodD: 24 }));
  m.change('Off', (tx) => { const id = tx.addMember({ type: 'column', profile: 'W12x50', start: [3000, 3500, 0], end: [3000, 3500, 4000] }); tx.addConnection({ type: 'baseplate', column: id }); });
  [b, k] = mkOf(m.state);
  const sh2 = Dw.drawingSet(m.state, b, k, { date: '2026-10-13' }).sheets.find((x) => x.kind === 'anchor');
  ok(sh2.rods.rows.length === 3 && sh2.rods.rows.some((r) => r[2] === '24' && r[1] === '4') && sh2.rods.count === 28 && sh2.rods.plates.some((r) => r[0] === '(3000, 3500)') && new Set(sh2.rods.plates.slice(1).map((r) => r[2])).size === 2, 'a plate with Ø24 rods at 250: R2 and BP2; a column off the grids is located by coordinates');
  const m3 = new Md.Model(Md.starterState('N'));
  m3.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] }));
  [b, k] = mkOf(m3.state);
  ok(!Dw.drawingSet(m3.state, b, k, {}).sheets.some((x) => x.kind === 'anchor'), 'no base plates: no anchor bolt plan');
}

// ---------------------------------------------------------------------------
section('Cut-list nesting into stock lengths with kerf (D24)');
{
  const N = await load('nest.js');
  const one = (pieces, o) => N.nestBars(pieces, o).groups[0];
  const a = one([{ mark: 'b1', profile: 'W16x26', material: 'A992', length: 1700, count: 7 }], { stock: [6000], kerf: 3 });
  ok(a.bars.length === 3 && a.bars.map((b) => b.cuts.length).join() === '3,3,1' && a.bars[0].drop === 6000 - 5100 - 9, '7 × 1700 from 6 m bars, 3 mm kerf: 3 bars (3 + 3 + 1), drop 891 on a full bar');
  const b = one([{ mark: 'x', profile: 'C', material: 'A36', length: 2998.5, count: 2 }], { stock: [6000], kerf: 3 });
  ok(b.bars.length === 1 && b.bars[0].drop === 0, 'two cuts of 2998.5 + 2 kerfs fill a 6 m bar exactly (no kerf after the last cut)');
  const c = one([{ mark: 'y', profile: 'C', material: 'A36', length: 3000, count: 2 }], { stock: [6000, 12000], kerf: 3 });
  ok(c.bars.length === 1 && c.bars[0].stock === 12000, 'two 3000 cuts with kerfs do not fit 6 m: one 12 m bar (shrunk only as far as it fits)');
  const d = one([{ mark: 'z', profile: 'L', material: 'A36', length: 2500, count: 4 }, { mark: 'w', profile: 'L', material: 'A36', length: 7000, count: 1 }], { stock: [6000, 9000, 12000], kerf: 3 });
  const total = d.bars.reduce((t, x) => t + x.used + 3 * x.cuts.length + x.drop, 0);
  ok(d.bars.length === 2 && d.bars[0].cuts[0].length === 7000 && near(total, d.bought, 3 * 2 + 1e-6), 'longest first: 7000 + 2500 on one bar, 3 × 2500 on another; used + kerfs + drop = bought (' + d.bars.map((x) => x.stock).join(' + ') + ')');
  ok(d.bars.every((x) => [6000, 9000, 12000].includes(x.stock)) && d.bars.some((x) => x.stock === 9000 || x.stock === 12000), 'bars shrunk to the shortest stock length that still takes their cuts');
  const e = one([{ mark: 'long', profile: 'W', material: 'A992', length: 13000, count: 1 }], { stock: [6000, 12000] });
  ok(e.tooLong.join() === 'long' && e.bars.length === 0, 'a piece longer than every stock length is listed, not nested');
  const f = one([{ mark: 'k', profile: 'W', material: 'A992', length: 1000, count: 3 }], { stock: [6000], kerf: 3, trim: 20, keep: 500 });
  ok(f.bars[0].drop === 6000 - 20 - 3000 - 9 && !f.bars[0].scrap, 'end trim 20 taken once; a 2971 drop is kept (≥ 500), not scrap');
  const mk = Mk.markParts(built);
  const r = N.nestBars(N.piecesFromMarks(mk), { stock: [12000], kerf: 3 });
  ok(r.groups.length === 3 && r.groups.every((g) => g.bars.every((x) => x.used + 3 * x.cuts.length <= 12000 + 3)) && near(r.totals.used, mk.parts.filter((p) => p.type !== 'plate').reduce((t, p) => t + Math.round(p.length * 10) / 10 * p.count, 0), 1e-6), 'the sample\'s beams, columns and brace (3 profiles) nested into 12 m bars; plates left to sheet cutting');
  const T = N.cutListTables(r);
  ok(T.summary.length === 1 + 3 + 1 && T.summary[0][0] === 'Profile' && T.summary[T.summary.length - 1][0] === 'Total' && T.summary[T.summary.length - 1][3] === String(r.totals.bars), 'cut list tables: a summary row per profile and a total (bars to buy ' + r.totals.bars + ')');
  ok(T.bars.length === 1 + r.totals.bars && T.bars.slice(1).every((row) => /^(\S+ \d+)( \+ \S+ \d+)*$/.test(row[3])), 'one row per bar, its cuts as "mark length + …"');
}

// ---------------------------------------------------------------------------
section('Straight steel stair from rise, going and width (D23, geometry)');
{
  const St = await load('stair.js');
  const pr = (nm) => Pr.getProfile(nm);
  const cs = St.cleanStair({ x: 1000, y: 2000, z: 0, dir: 90, rise: 3000, going: 280, width: 1000, stringer: 'C10x15.3' });
  ok(cs.ok && cs.stair.maxRiser === 178 && cs.stair.tread.t === 6, 'cleanStair fills the defaults (max riser 178, 6 mm treads)');
  ok(!St.cleanStair({ rise: 'x' }).ok && !St.cleanStair({ rise: 20000 }).ok && !St.cleanStair({ going: 50 }).ok, 'bad rise, going refused');
  const g = St.stairGeometry(cs.stair, pr);
  ok(g.n === 17 && near(g.riser, 3000 / 17, 1e-9) && g.treads === 16 && g.run === 16 * 280, '3000 rise at ≤ 178: 17 risers of 176.5, 16 treads, run 4480');
  ok(g.parts.length === 2 + 16 && g.parts.filter((p) => p.type === 'stringer').length === 2 && g.parts.filter((p) => p.type === 'plate').every((p) => p.profileName === 'PL6x305' && p.attachTo === 'stringerL'), 'two stringers and 16 tread plates PL6x305 (going + 25 nosing), all welded to the left stringer');
  const t1 = g.parts.find((p) => p.key === 'tread1'), t16 = g.parts.find((p) => p.key === 'tread16');
  ok(near(t1.start[2] + 3, g.riser, 1e-9) && near(t16.start[2] + 3, 16 * g.riser, 1e-9), 'tread tops at 1 × and 16 × the riser');
  ok(near(Math.hypot(t1.end[0] - t1.start[0], t1.end[1] - t1.start[1]), 1000, 1e-9) && near((t1.start[0] + t1.end[0]) / 2, 1000, 1e-9), 'treads span the 1000 clear width, across the climb (dir 90°: along x)');
  // the nosing of tread i sits (i − 1)·going along the climb, in front by 25: tread center along = (i − 1)·280 − 25 + 305/2
  ok(near(t1.start[1] - 2000, -25 + 152.5, 1e-9) && near(t16.start[1] - 2000, 15 * 280 - 25 + 152.5, 1e-9), 'treads step 280 along the climb, nosings 25 in front of each riser');
  const sL = g.parts.find((p) => p.key === 'stringerL');
  const C = pr('C10x15.3'), slope = (sL.end[2] - sL.start[2]) / Math.hypot(sL.end[0] - sL.start[0], sL.end[1] - sL.start[1]);
  ok(near(slope, g.riser / 280, 1e-9) && near(sL.start[2], 0, 1e-9) && near(sL.end[2], 3000, 1e-9) && near(Math.abs(sL.start[0] - 1000), 500 + C.width / 2, 1e-9), 'stringers at the stair\'s pitch (' + g.pitch.toFixed(1) + '°), from floor to floor, outside the clear width');
  // top edge 50 above the nosing line: the axis is (d/2 − 50) below it square to the slope
  const along = (p) => p[1] - 2000, nose = (a) => g.riser * (a + 280) / 280;
  const mid = sL.start.map((v, i) => (v + sL.end[i]) / 2);
  ok(near(nose(along(mid)) - mid[2], (C.depth / 2 - 50) / Math.cos(Math.atan(g.riser / 280)), 1e-6), 'the stringer\'s top edge runs 50 mm above the nosings');
  ok(!g.problems.length && near(g.blondel, 2 * 3000 / 17 + 280, 1e-9), 'a good stair: no warnings (2r + g = ' + g.blondel.toFixed(0) + ')');
  const steep = St.stairGeometry(St.cleanStair({ rise: 3000, going: 220, maxRiser: 220, stringer: 'C10x15.3' }).stair, pr);
  ok(['riser', 'going'].every((c) => steep.problems.some((p) => p.code === c)) && steep.problems.every((p) => typeof p.text === 'string'), 'a steep one: riser and going warnings (IBC 1011.5.2)');
  ok(St.stairGeometry(St.cleanStair({ stringer: 'NOPE' }).stair, pr).problems.some((p) => p.code === 'stringer'), 'an unknown stringer says so');
  ok(g.welds.length === 32 && g.welds.every((w) => w.size === 6), 'each tread welded to both stringers (32 welds, 6 mm)');
}

// ---------------------------------------------------------------------------
section('Stairs in the model: build, marks, clash, move, copy, files (D23)');
{
  const St = await load('stair.js');
  const Tf = await load('transform.js');
  const Cb = await load('clipboard.js');
  const Cl = await load('clash.js');
  const m = new Md.Model(Md.starterState('Stairs'));
  let id;
  m.change('Stair', (tx) => { id = tx.addStair({ x: 1000, y: 2000, z: 0, dir: 90, rise: 3000, phase: 1 }); });
  ok(/^s\d+$/.test(id) && m.stair(id).stringer === 'C10x15.3' && m.stair(id).going === 280, 'addStair fills the defaults (C10x15.3 stringers, going 280)');
  const b = build(m.state);
  const parts = b.parts.filter((p) => p.stair === id);
  ok(parts.length === 18 && parts.filter((p) => p.type === 'stringer').length === 2 && parts.every((p) => p.id.startsWith(id + '.')), 'build: 2 stringers + 16 treads, ids under the stair');
  ok(parts.filter((p) => p.type === 'stringer').every((p) => p.ifc === 'IfcMember') && parts.filter((p) => p.type === 'plate').every((p) => p.ifc === 'IfcPlate' && p.attachTo === id + '.stringerL'), 'stringers are IfcMember, treads IfcPlate welded to the left stringer');
  ok(b.welds.filter((w) => w.stair === id).length === 32 && b.problems.filter((x) => x.ref === id).length === 0, '32 tread welds, no warnings');
  const mk = Mk.markParts(b);
  const asm = mk.asmMark.get(id + '.stringerL');
  ok(asm === 'ST1' && parts.every((p) => mk.asmOf.get(p.id) === id + '.stringerL') && /^st\d$/.test(mk.partMark.get(id + '.stringerL')), 'one assembly ST1 (part marks st…, treads p…)');
  ok(Cl.clashCheck(m.state, b).clashes.length === 0, 'its treads and stringers do not clash with each other');
  // a stair whose rise is out of range is warned about, an unknown stringer refused (hard)
  m.change('Steep', (tx) => tx.updateStair(id, { going: 220, maxRiser: 220 }));
  ok(build(m.state).problems.some((x) => x.ref === id && /IBC 2021/.test(x.text)), 'a steep stair: the IBC warning shows in the problems');
  m.change('Back', (tx) => tx.updateStair(id, { going: 280, maxRiser: 178 }));
  let threw = false; try { m.change('Bad', (tx) => tx.updateStair(id, { rise: 'x' })); } catch { threw = true; }
  ok(threw && m.stair(id).rise === 3000, 'a bad rise is refused and nothing changes');
  // a flat-bar stringer stands on edge
  m.change('PL', (tx) => tx.updateStair(id, { stringer: 'PL12x250' }));
  const pl = build(m.state).byId.get(id + '.stringerL');
  ok(pl && Math.abs(pl.frame.u[2]) > 0.5 && pl.profile.kind === 'PL', 'a PL12x250 stringer stands on edge (its width up the slope)');
  m.change('C', (tx) => tx.updateStair(id, { stringer: 'C10x15.3' }));
  // rotate 90° about (0, 0): the foot moves, the climb turns
  m.change('Rot', (tx) => Tf.transformRefs(tx, m.state, [{ kind: 'stair', id }], Tf.rotateXf([0, 0], 90)));
  ok(near(m.stair(id).x, -2000, 1e-6) && near(m.stair(id).y, 1000, 1e-6) && near(m.stair(id).dir, 180, 1e-9), 'rotate 90°: foot (1000, 2000) → (−2000, 1000), climb 90° → 180°');
  m.change('Mir', (tx) => Tf.transformRefs(tx, m.state, [{ kind: 'stair', id }], Tf.mirrorXf([0, 0], [1, 0])));
  ok(near(m.stair(id).y, -1000, 1e-6) && near(m.stair(id).dir, 180, 1e-9), 'mirror in y = 0: the foot flips, a climb along −x stays −x');
  ok(Tf.ghostLines(m.state, [{ kind: 'stair', id }], [0, 0, 0]).length === 5, 'its ghost while moving: plan outline and climb line');
  // copy and paste
  const cp = Cb.copyClip(m.state, [{ kind: 'stair', id }]);
  ok(cp && cp.counts.stairs === 1, 'a stair copies');
  const rc = Cb.readClip(JSON.parse(JSON.stringify(cp.clip)));
  let pasted;
  m.change('Paste', (tx) => { pasted = Cb.pasteInto(tx, rc, [0, 5000, 0]); });
  ok(pasted.refs.length === 1 && pasted.refs[0].kind === 'stair' && near(m.state.stairs[1].y, m.stair(id).y + 5000, 1e-6), 'pasted 5000 along y');
  const b2 = build(m.state);
  const mk2 = Mk.markParts(b2);
  ok(mk2.asmMark.get(m.state.stairs[1].id + '.stringerL') === mk2.asmMark.get(id + '.stringerL'), 'the copy is the same assembly mark');
  // phases, delete, save and open
  m.change('Ph', (tx) => tx.setPhaseOf([{ kind: 'stair', id }], 2));
  ok(m.stair(id).phase === 2 && build(m.state).byId.get(id + '.tread1').phase === 2, 'a stair goes to phase 2 with its parts');
  const back = Md.readModel(m.toJSON());
  ok(JSON.stringify(back.state.stairs) === JSON.stringify(m.state.stairs) && back.warnings.length === 0, 'stairs survive save → open');
  const tj = JSON.parse(m.toJSON()); tj.stairs.push({ rise: -5 }); delete tj.stairs[0].going;
  const rb = Md.readModel(JSON.stringify(tj));
  ok(rb.state.stairs.length === 2 && rb.state.stairs[0].going === 280 && rb.warnings.length === 1, 'a broken stair in a file is left out with a warning; a missing field takes its default');
  const old = JSON.parse(m.toJSON()); delete old.stairs;
  ok(Md.readModel(JSON.stringify(old)).state.stairs.length === 0, 'a file from before stairs opens with none');
  // IFC and NC
  const ifc = writeIfc(m.state, b2, Object.assign(mk2, { footingMark: new Map() }), Rb.bendingSchedule([]), {});
  ok((ifc.match(/IFCMEMBER\(/g) || []).length === 4 && (ifc.match(/IFCPLATE\(/g) || []).length === 32, 'IFC: 4 stringers as IfcMember, 32 treads as IfcPlate');
  const sl = b2.byId.get(id + '.stringerL');
  ok(Nc.readNc1(Nc.writeNc1(sl, { order: 'S', mark: 'st1', count: 2 })).header.code === 'U', 'NC: a channel stringer goes out as a U profile');
  // drawings: the stair has its assembly sheet; plans show it
  const mkD = Object.assign(Mk.markParts(b2), { footingMark: new Map() });
  let set = null, err = '';
  try { set = Dw.drawingSet(m.state, b2, mkD, { date: '2026-10-13' }); } catch (e) { err = e.message; }
  const stSheet = set?.sheets.find((sh) => sh.id === 'assembly:' + mkD.asmMark.get(id + '.stringerL'));
  ok(!!stSheet && stSheet.items.length > 50 && set.sheets.some((sh) => sh.kind === 'plan' && sh.prints && Object.keys(sh.prints).some((k) => k.startsWith('part:' + id + '.'))), 'drawings: an assembly sheet for the stair, and the plans draw it', err);
  m.change('Del', (tx) => tx.removeStairs([id]));
  ok(m.state.stairs.length === 1 && !build(m.state).parts.some((p) => p.stair === id), 'delete removes the stair and all its parts');
}

// ---------------------------------------------------------------------------
section('Shear tabs: square, on a web, skewed and sloped (D5, D6, D7)');
{
  const Cl = await load('clash.js');
  const W12 = Pr.getProfile('W12x50'), W16 = Pr.getProfile('W16x26'), STD = Cn.SHEARTAB_DEFAULTS;
  /** One column at the origin (turned `rot`) and one beam from it toward (dx, dy, dz). */
  const joint = (dx, dy, dz = 0, rot = 0) => {
    const m = new Md.Model(Md.starterState('T'));
    const c = m.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 6000], rotation: rot }));
    const b = m.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [dx, dy, 4000 + dz] }));
    const j = m.change('ST', (tx) => tx.addConnection({ type: 'sheartab', beam: b, end: 'start', column: c }));
    return { m, c, b, j, built: build(m.state) };
  };
  const coaxial = (bt, j) => {
    const plate = bt.parts.find((p) => p.conn === j), beam = bt.parts.find((p) => p.type === 'beam');
    const bolts = bt.bolts.filter((x) => x.conn === j);
    const ph = plate.holes.map((h) => Dw.holeGeom(plate, h).c), bh = beam.holes.map((h) => Dw.holeGeom(beam, h).c);
    const onAxis = (b, q) => { const d = G.sub(q, b.head), along = G.dot(d, b.axis); return G.len(G.sub(d, G.mul(b.axis, along))) < 1e-6 && along > 0 && along < b.length; };
    return bolts.length === 3 && bolts.every((b) => ph.some((q) => onAxis(b, q)) && bh.some((q) => onAxis(b, q)));
  };
  const sq = joint(6000, 0);
  ok(!sq.built.problems.length, 'square shear tab on a flange: builds with no problems', JSON.stringify(sq.built.problems));
  const beamPart = sq.built.byId.get(sq.b);
  ok(near(beamPart.setback.start, W12.d / 2 + STD.gap, 1e-6), 'the beam is cut back to the flange face + the 13 mm gap (' + beamPart.setback.start.toFixed(2) + ')');
  ok(beamPart.holes.filter((h) => h.face === 'web').length === 3 && sq.built.parts.find((p) => p.conn === sq.j).holes.length === 3, '3 holes in the beam web, 3 in the tab');
  ok(coaxial(sq.built, sq.j), 'each of the 3 bolts runs through a tab hole and a web hole');
  const tabPart = sq.built.parts.find((p) => p.conn === sq.j);
  ok(tabPart.attachTo === sq.c && tabPart.profileName === 'PL10x115' && near(tabPart.length, 2 * 75 + 2 * 38, 1e-6), 'the tab PL10x115 × 226 is shop-welded to the column (part of its assembly)');
  ok(sq.built.bolts.filter((x) => x.conn === sq.j).every((x) => near(x.grip, 10 + W16.tw, 1e-9) && x.length === Math.ceil((10 + W16.tw + 30) / 5) * 5), 'bolt grip = tab + beam web; length rounded up to 5');
  ok(Cl.clashCheck(sq.m.state, sq.built).clashes.length === 0, 'clash check: beam, tab and column do not run into each other');
  const web = joint(6000, 0, 0, 90);
  ok(!web.built.problems.length && near(web.built.byId.get(web.b).setback.start, W12.tw / 2 + STD.gap, 1e-6) && Cl.clashCheck(web.m.state, web.built).clashes.length === 0, 'on a column web: cut back to tw/2 + gap, no clash, no problems');
  for (const [label, dx, dy, dz] of [['skewed 30° in plan', 6000 * Math.cos(Math.PI / 6), 6000 * Math.sin(Math.PI / 6), 0], ['skewed 45°', 4243, 4243, 0], ['sloped 1 in 10', 6000, 0, 600], ['skewed 20° and sloped down', 5638, 2052, -400]]) {
    const k = joint(dx, dy, dz);
    const hard = k.built.problems.filter((p) => p.hard);
    ok(!hard.length && coaxial(k.built, k.j) && Cl.clashCheck(k.m.state, k.built).clashes.length === 0, label + ': builds, bolts through both holes, no clash (cut back ' + k.built.byId.get(k.b).setback.start.toFixed(1) + ' mm)', JSON.stringify(hard));
  }
  const far = joint(2000, 0, 6000);
  ok(far.built.problems.some((p) => p.hard), 'a beam rising at 72° (more than 60° off the face): refused with a reason');
  // end plate on a web, and the similar joints keep the connection's type
  const ew = (() => { const m = new Md.Model(Md.starterState('E')); const c = m.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 6000], rotation: 90 })); const b = m.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 4000], end: [6000, 0, 4000] })); m.change('EP', (tx) => tx.addConnection({ type: 'endplate', beam: b, end: 'start', column: c })); return { m, b, built: build(m.state) }; })();
  ok(!ew.built.problems.some((p) => p.hard) && Cl.clashCheck(ew.m.state, ew.built).clashes.length === 0, 'end plate on a column web: builds, no clash');
  ok(throws(() => sq.m.change('dup', (tx) => tx.addConnection({ type: 'endplate', beam: sq.b, end: 'start', column: sq.c })), /already/), 'an end plate where a shear tab is: refused (one connection per beam end)');
  const back = Md.readModel(sq.m.toJSON()).state;
  ok(back.connections.length === 1 && back.connections[0].type === 'sheartab' && back.connections[0].params.eh === 65, 'a shear tab survives save → open');
}

// ---------------------------------------------------------------------------
section('Weld symbols on assembly drawings (D8)');
{
  const mkOf = (st) => { const b = build(st); const k = Mk.markParts(b); k.footingMark = Mk.markFootings(st.footings); return [b, k]; };
  const [b0, k0] = mkOf(sample.state);
  const set = Dw.drawingSet(sample.state, b0, k0, { date: '2026-10-13' });
  const B1 = set.sheets.find((x) => x.number === 'A-B1'), C1 = set.sheets.find((x) => x.number === 'A-C1');
  ok(B1.welds.length === 2 && B1.welds.every((w) => w.size === 8 && w.allAround), 'A-B1: two fillet symbols, 8 mm, all around (one per end plate)');
  ok(C1.welds.length === 1 && C1.welds[0].allAround, 'A-C1: one all-around symbol at the base plate');
  const tris = B1.items.filter((i) => i.k === 'path' && i.closed && !i.fill && i.pts.length === 3);
  ok(tris.length === 2 && tris.every((q) => near(q.pts[0][0], q.pts[1][0], 1e-9) && q.pts[1][1] < q.pts[0][1]), 'each a fillet triangle below its reference line, upright leg on the left (AWS A2.4 arrow side)');
  ok(B1.items.filter((i) => i.k === 'circle' && near(i.r, 1.2, 1e-9)).length === 2 && B1.items.filter((i) => i.k === 'path' && i.fill && i.pts.length === 3).length === 2, '… with the all-around circle and a filled arrowhead');
  const xs = B1.welds.map((w) => w.x).sort((a, b) => a - b);
  ok(xs[1] - xs[0] > 100, 'the two arrows point at the two ends of the beam');
  // a shear tab on a column: one symbol, both sides (not all around)
  const m = new Md.Model(Md.starterState('W'));
  const c = m.change('C', (tx) => tx.addMember({ type: 'column', profile: 'W12x50', start: [0, 0, 0], end: [0, 0, 4000] }));
  const bm = m.change('B', (tx) => tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 3500], end: [6000, 0, 3500] }));
  m.change('ST', (tx) => tx.addConnection({ type: 'sheartab', beam: bm, end: 'start', column: c }));
  const [b1, k1] = mkOf(m.state);
  const colSheet = Dw.drawingSet(m.state, b1, k1, {}).sheets.find((x) => x.kind === 'assembly' && x.number.startsWith('A-C'));
  ok(colSheet.welds.length === 1 && colSheet.welds[0].size === 6 && !colSheet.welds[0].allAround, 'a shear tab on a column: one 6 mm fillet symbol, not all around');
}

// ---------------------------------------------------------------------------
section('Metric bars (BS 4449 / BS 8666) and shape codes (ACI 315, BS 8666) (D9)');
{
  ok(Rb.BAR_SETS.bs.join() === 'H8,H10,H12,H16,H20,H25,H32,H40', 'BS 4449 bars H8–H40');
  const h16 = Rb.BARS.get('H16'), h25 = Rb.BARS.get('H25');
  ok(Rb.BAR_SETS.bs.every((n) => { const b = Rb.BARS.get(n); return near(b.mass, Math.PI * b.db * b.db / 4 * 7850e-6, 1e-12); }) && near(h16.mass, 1.578, 0.0005), 'nominal mass = nominal section × 7850 kg/m³ (H16 ' + h16.mass.toFixed(3) + ' kg/m)');
  ok(h16.r === 32 && h16.bendD === 64 && h16.P === 130 && h25.r === 87 && h25.P === 240 && Rb.hookLeg(h25) === 240, 'BS 8666:2020 minimums: H16 r 32 (former 64), P 130; H25 r 87, P 240; a hook leg = P');
  ok(near(Rb.cutLength('L', { A: 1500, B: 240 }, h25), 1500 + 240 - 0.5 * 87 - 25, 1e-9) && near(Rb.cutLength('U', { A: 1850, B: 130, C: 130 }, h16), 1850 + 130 + 130 - 32 - 32, 1e-9), 'cut lengths by BS 8666 shape 11 (A + B − 0.5r − d) and 21 (A + B + C − r − 2d)');
  ok(Rb.shapeCode('S', 'bs8666') === '00' && Rb.shapeCode('L', 'bs8666') === '11' && Rb.shapeCode('U', 'bs8666') === '21' && Rb.shapeCode('U', 'aci') === '2' && Rb.shapeCode('L', 'aci') === '' && Rb.shapeCode('L') === 'L', 'shape codes: BS 8666 00 / 11 / 21, ACI 315 Type 2 for a bar hooked both ends, DetailCraft S / L / U');
  ok(Rb.barLabel('#5', 'metric') === '#16' && Rb.barLabel('#11', 'metric') === '#36' && Rb.barLabel('#3', 'metric') === '#10' && Rb.barLabel('H16', 'metric') === 'H16', 'soft-metric names (ACI 315 Table 1): #3 = #10, #5 = #16, #11 = #36');
  // a footing in BS bars: marks, schedule in BS 8666 codes, hook legs P, BS cut lengths
  const m = new Md.Model(Md.starterState('BS'));
  m.change('F', (tx) => tx.addFooting({ x: 0, y: 0, top: 0, L: 2000, B: 2000, H: 600, concrete: 'C30/37', mat: { barX: 'H16', sX: 200, barY: 'H16', sY: 200, cover: 75, hooks: true }, starters: { on: true, bar: 'H20', nx: 2, ny: 2, sx: 250, sy: 250, projection: 600, hook: true } }));
  const sch = Rb.bendingSchedule(m.state.footings);
  ok(sch.rows.length === 2 && sch.rows.every((r) => /^H(16|20)F1$/.test(r.mark)), 'marks H16F1, H20F1 (no clash with ASTM #… marks)', sch.rows.map((r) => r.mark).join());
  const mat = sch.rows.find((r) => r.bar === 'H16'), st = sch.rows.find((r) => r.bar === 'H20');
  ok(mat.shape === 'U' && mat.dims.B === 130 && near(mat.length, (2000 - 150) + 130 + 130 - 32 - 32, 1e-9), 'mat bars: U with 130 hook legs (P), cut 2046 by BS 8666 21');
  ok(st.shape === 'L' && st.dims.B === 190 && near(st.length, st.dims.A + 190 - 35 - 20, 1e-9), 'starters: L with a 190 leg (P for H20), cut by shape 11');
  const tb = Rb.scheduleTable(sch.rows, { codes: 'bs8666' });
  const row = tb.find((r) => r[0] === 'H16F1');
  ok(row[2] === '21' && row[3] === '130' && row[4] === '1850' && row[5] === '130', 'schedule in BS 8666: shape 21 with A, B (the middle), C = 130, 1850, 130');
  ok(Rb.footingProblems(m.state.footings[0]).length === 0, 'no warnings for a sound BS footing (spacing to EN 1992-1-1 8.2: ≥ max(20, d))');
  const us = Rb.scheduleTable(Rb.bendingSchedule(sample.state.footings).rows, { codes: 'aci', naming: 'metric' });
  ok(us.slice(1, -1).every((r) => /^#(1[0369]|2[25]|29|3[26])$/.test(r[1])) && us.slice(1, -1).some((r) => r[2] === '2'), 'the sample\'s schedule with soft-metric names and ACI types (#16, Type 2 …)');
}

// ---------------------------------------------------------------------------
section('Rebar');
const schedule = Rb.bendingSchedule(sample.state.footings);
{
  const b5 = Rb.BARS.get('#5'), b9 = Rb.BARS.get('#9');
  ok(Rb.BAR_SETS.astm.length === 9 && near(b5.db, 15.875) && near(b5.mass, 1.043 * 1.48816394) && near(b5.area, 0.31 * 645.16), '#3–#11 (ASTM A615 Table 1); #5 = 15.875 mm, 1.552 kg/m, 200 mm²');
  ok(near(b5.bendD, 6 * b5.db) && near(b9.bendD, 8 * b9.db), 'bend diameters 6·db (#3–#8), 8·db (#9–#11) (ACI 318-19 Table 25.3.1)');
  ok(near(Rb.hookLeg(b5), 3 * b5.db + b5.db + 12 * b5.db), '90° hook leg = D/2 + db + 12·db = 16·db for #5');
  // cut length two ways: the formula and the drawn centerline
  for (const [shape, dims] of [['S', { A: 1850 }], ['L', { A: 1243, B: 305 }], ['U', { A: 1850, B: 254, C: 254 }], ['U', { A: 3000, B: 400, C: 250 }]]) {
    for (const bar of ['#4', '#5', '#9']) {
      const b = Rb.BARS.get(bar);
      const f = Rb.cutLength(shape, dims, b), c = Rb.centerlineLength(Rb.centerline2d(shape, dims, b));
      ok(near(f, c, 1e-9), shape + ' ' + bar + ': cut length formula = centerline length (' + f.toFixed(1) + ')');
    }
  }
  const u = Rb.centerline2d('U', { A: 1850, B: 254, C: 254 }, b5);
  const xs = u.flatMap((s) => [s.a[0], s.b[0]]), ys = u.flatMap((s) => [s.a[1], s.b[1]]);
  ok(near(Math.min(...xs) - b5.db / 2, 0, 1e-9) && near(Math.max(...xs) + b5.db / 2, 1850, 1e-9) && near(Math.max(...ys), 254, 1e-9), 'U bar centerline spans exactly A out-to-out and B tall');
  const lay = Rb.layout(2000 - 150 - b5.db, 250);
  ok(lay.n === 9 && lay.spacing <= 250, '2000 footing, 75 cover, #5 at 250 max → 9 bars at ' + lay.spacing.toFixed(1));
  const rows = schedule.rows;
  ok(rows.map((r) => r.mark).join(' ') === '5F1 5F2 5F3 6F1', 'bar marks 5F1 5F2 5F3 6F1 (identical bars share a mark across footings)');
  ok(rows[0].count === 6 * 18 && rows[0].shape === 'U' && near(rows[0].dims.A, 1850) && near(rows[0].dims.B, Rb.hookLeg(b5)), '5F1: 108 U-bars, A 1850, hooks ' + Rb.hookLeg(b5).toFixed(0));
  const pier = sample.state.footings[6];
  const st = rows.find((r) => r.mark === '6F1');
  const b6 = Rb.BARS.get('#6');
  const z0 = -600 + 75 + 2 * b5.db;
  ok(st.count === 6 && near(st.dims.A, 750 - z0, 1e-9) && near(st.dims.B, Rb.hookLeg(b6), 1e-9), 'starters: 6 L-bars sitting on the mat, projecting 750 (A = ' + st.dims.A.toFixed(1) + ')');
  ok(near(st.unitWeight, b6.mass * st.length / 1000, 1e-9) && near(st.totalWeight, st.unitWeight * 6, 1e-9), 'weights = kg/m × cut length × count');
  const pierBars = Rb.footingBars(pier);
  const longBars = pierBars[0];
  const poly = Rb.barPolyline(longBars, longBars.sets[0]);
  const plen = poly.slice(1).reduce((s, p, i) => s + G.dist(p, poly[i]), 0);
  ok(Math.abs(plen - longBars.length) / longBars.length < 0.001, 'placed bar polyline length ≈ cut length (tessellated bends)');
  const zMin = Math.min(...poly.map((p) => p[2])), xMin = Math.min(...poly.map((p) => p[0]));
  ok(near(zMin - b5.db / 2, -600 + 75, 1e-6) && near(xMin - b5.db / 2, 16000 - 1200 + 75, 1e-6), 'bottom bar: 75 mm cover below and at the end');
  const tight = Rb.footingProblems({ ...pier, mat: { ...pier.mat, sX: 30 } });
  ok(tight.some((p) => /less than .* clear/.test(p.text)), 'bars too close: clear spacing warning (ACI 318-19 25.2.1)');
  const shallow = Rb.footingProblems({ ...pier, H: 300 });
  ok(shallow.some((p) => /hooks need/.test(p.text)), 'hooks that do not fit the depth are reported');
  ok(!Rb.cleanFooting({ ...pier, mat: { ...pier.mat, cover: 290 }, L: 600, B: 600 }).ok, 'cover leaving no room: refused');
  ok(!Rb.cleanFooting({ ...pier, starters: { ...pier.starters, sx: 2000 } }).ok, 'starters outside the footing: refused');
  const table = Rb.scheduleTable(rows);
  const back = Csv.parseCsv(Csv.toCsv(table));
  ok(back.length === rows.length + 2 && back[0][0] === 'Bar mark' && back[back.length - 1][0] === 'Total', 'bending schedule CSV: header, one row per mark, total');
  ok(near(Number(back[back.length - 1][11]), rows.reduce((s, r) => s + r.totalWeight, 0), 0.06), 'schedule total weight');
}

// ---------------------------------------------------------------------------
section('IFC4 out, read back by cc-ifc (and the vendored web-ifc when it is still here)');
{
  marks.footingMark = Mk.markFootings(sample.state.footings);
  const txt = writeIfc(sample.state, built, marks, schedule, { now: new Date('2026-10-10T12:00:00Z') });
  const again = writeIfc(sample.state, built, marks, schedule, { now: new Date('2026-10-10T12:00:00Z') });
  fs.writeFileSync(path.join(OUT, 'sample.ifc'), txt);
  ok(txt === again, 'same model → byte-identical IFC (GlobalIds derived, not random)');
  ok(/^ISO-10303-21;\nHEADER;[\s\S]*FILE_SCHEMA\(\('IFC4'\)\);[\s\S]*END-ISO-10303-21;\n$/.test(txt), 'STEP envelope, IFC4 schema');
  const guids = [...txt.matchAll(/=IFC[A-Z]+\('([0-9A-Za-z_$]{22})'/g)].map((m) => m[1]);
  ok(guids.length > 500 && new Set(guids).size === guids.length && guids.every((g) => '0123'.includes(g[0])), 'every GlobalId is 22 chars, unique, first char 0–3 (' + guids.length + ')');
  ok(guidFor('a') !== guidFor('b') && guidFor('a') === guidFor('a'), 'guidFor is deterministic and spreads');
  ok(stepString("O'Brien \\ Ø") === "'O''Brien \\\\ \\X2\\00D8\\X0\\'", 'STEP strings: quotes doubled, backslash, \\X2\\ for non-ASCII');
  const WN = await import(pathToFileURL(path.join(ROOT, 'tools/detailcraft-test/webifc-node.mjs')).href);
  const { W, api } = await WN.loadCcIfc(APP);
  console.log('  (cc-ifc from ' + BUILD + '/ifc/, the engine DetailCraft imports with)');
  const mid = api.OpenModel(new TextEncoder().encode(txt));
  const ids = (t) => { const v = api.GetLineIDsWithType(mid, t), o = []; for (let i = 0; i < v.size(); i++) o.push(v.get(i)); return o; };
  const counts = { IFCBEAM: 4, IFCCOLUMN: 6, IFCMEMBER: 1, IFCPLATE: 14, IFCMECHANICALFASTENER: 88, IFCFOOTING: 7, IFCREINFORCINGBAR: 132, IFCELEMENTASSEMBLY: 10, IFCBUILDINGSTOREY: 2, IFCGRID: 1 };
  for (const [k, n] of Object.entries(counts)) ok(ids(W[k]).length === n, k + ': ' + n, String(ids(W[k]).length));
  if (WN.hasWebIfc(ROOT)) {   // web-ifc is a test-only oracle now (I.11): same classes, same counts
    const O = await WN.loadWebIfc(ROOT);
    const om = O.api.OpenModel(new TextEncoder().encode(txt));
    const oc = (t) => O.api.GetLineIDsWithType(om, t).size();
    ok(Object.entries(counts).every(([k, n]) => oc(O.W[k]) === n), 'the vendored web-ifc ' + O.version + ' (oracle only) reads the same class counts');
    O.api.CloseModel(om);
  } else console.log('  (web-ifc no longer vendored: oracle check skipped)');
  const nHoles = built.parts.reduce((s, p) => s + p.holes.length + p.cuts.length, 0);
  ok(ids(W.IFCOPENINGELEMENT).length === nHoles && ids(W.IFCRELVOIDSELEMENT).length === nHoles, 'one opening + void relation per hole (' + nHoles + ')');
  const proj = api.GetLine(mid, ids(W.IFCPROJECT)[0]);
  ok(proj.Name.value === 'Sample frame', 'project name read back');
  // beams: profile, depth, tag
  const val = (x) => (x && typeof x === 'object' && 'value' in x ? x.value : x);
  const solidOf = (el) => {
    const pds = api.GetLine(mid, el.Representation.value);
    const rep = api.GetLine(mid, pds.Representations[0].value);
    return api.GetLine(mid, rep.Items[0].value);
  };
  let okBeams = 0;
  for (const id of ids(W.IFCBEAM)) {
    const el = api.GetLine(mid, id);
    const s = solidOf(el), prof = api.GetLine(mid, s.SweptArea.value);
    if (prof.type === W.IFCISHAPEPROFILEDEF && near(val(prof.OverallDepth), W16.d, 1e-6) && near(val(prof.OverallWidth), W16.bf, 1e-6) && near(val(prof.WebThickness), W16.tw, 1e-6) && near(val(s.Depth), 6000 - 2 * (W12.d / 2 + 20), 1e-6) && val(el.Tag) === 'b1' && val(el.ObjectType) === 'W16x26') okBeams++;
  }
  ok(okBeams === 4, 'IfcBeam ×4: IfcIShapeProfileDef 398.78 × 139.7, web 6.35, extruded 5650.12, Tag b1', String(okBeams));
  const colEl = api.GetLine(mid, ids(W.IFCCOLUMN)[0]);
  ok(near(val(solidOf(colEl).Depth), 3975, 1e-6) && /^c[12]$/.test(val(colEl.Tag)), 'IfcColumn extruded 3975, Tag c1/c2');
  const brace = api.GetLine(mid, ids(W.IFCMEMBER)[0]);
  const bprof = api.GetLine(mid, solidOf(brace).SweptArea.value);
  ok(bprof.type === W.IFCRECTANGLEHOLLOWPROFILEDEF && near(val(bprof.WallThickness), 0.233 * 25.4, 1e-6) && near(val(solidOf(brace).Depth), Math.hypot(6000, 4000), 1e-6) && val(brace.PredefinedType) === 'BRACE', 'IfcMember .BRACE.: HSS4x4x1/4 hollow profile, 7211.1 long');
  const bolts = ids(W.IFCMECHANICALFASTENER).map((i) => api.GetLine(mid, i));
  ok(bolts.filter((b) => val(b.PredefinedType) === 'BOLT' && near(val(b.NominalDiameter), 20) && near(val(b.NominalLength), 70)).length === 64, '64 IfcMechanicalFastener .BOLT. 20 × 70');
  ok(bolts.filter((b) => val(b.PredefinedType) === 'ANCHORBOLT' && near(val(b.NominalLength), 575)).length === 24, '24 .ANCHORBOLT. 575 long');
  const bars = ids(W.IFCREINFORCINGBAR).map((i) => api.GetLine(mid, i));
  const sum = bars.reduce((s, b) => s + val(b.BarLength), 0);
  ok(near(sum, schedule.rows.reduce((s, r) => s + r.totalLength, 0), 0.01), 'sum of IfcReinforcingBar.BarLength = schedule total length (' + (sum / 1000).toFixed(2) + ' m)');
  ok(bars.every((b) => val(b.PredefinedType) === 'MAIN' && /^\d+F\d+$/.test(val(b.Tag)) && val(b.NominalDiameter) > 9), 'bars: .MAIN., tagged with their bar marks, nominal diameter');
  const footings = ids(W.IFCFOOTING).map((i) => api.GetLine(mid, i));
  ok(footings.every((f) => val(f.PredefinedType) === 'PAD_FOOTING') && footings.filter((f) => val(f.Tag) === 'F1').length === 6 && footings.filter((f) => val(f.Tag) === 'F2').length === 1, 'IfcFooting .PAD_FOOTING.: F1 ×6, F2 ×1');
  // geometry: extents along each member from web-ifc's own meshes (meters or millimeters: scale found from a footing)
  const meshes = new Map();
  api.StreamAllMeshes(mid, (mesh) => {
    const pts = [];
    for (let i = 0; i < mesh.geometries.size(); i++) {
      const pg = mesh.geometries.get(i), geo = api.GetGeometry(mid, pg.geometryExpressID);
      const v = api.GetVertexArray(geo.GetVertexData(), geo.GetVertexDataSize()), m = pg.flatTransformation;
      for (let k = 0; k < v.length; k += 6) { const x = v[k], y = v[k + 1], z = v[k + 2]; pts.push([m[0] * x + m[4] * y + m[8] * z + m[12], m[1] * x + m[5] * y + m[9] * z + m[13], m[2] * x + m[6] * y + m[10] * z + m[14]]); }
      geo.delete?.();
    }
    meshes.set(mesh.expressID, pts);
  });
  ok(meshes.size === 4 + 6 + 1 + 14 + 88 + 7 + 132, 'web-ifc made geometry for every element (' + meshes.size + ')');
  // web-ifc returns y-up meshes in meters; find the scale from a footing (2000 × 2000 × 600 mm)
  const fpts = meshes.get(footings.find((f) => val(f.Tag) === 'F1').expressID);
  const ext = (pts, a) => Math.max(...pts.map((p) => p[a])) - Math.min(...pts.map((p) => p[a]));
  const scale = ext(fpts, 0) / 2000;
  ok(near(scale, 0.001, 1e-6) || near(scale, 1, 1e-6), 'mesh units found from a footing (' + scale + ' per mm)');
  const fe = [0, 1, 2].map((a) => ext(fpts, a) / scale).sort((a, b) => a - b);
  ok(near(fe[0], 600, 0.01) && near(fe[1], 2000, 0.01) && near(fe[2], 2000, 0.01), 'footing mesh 2000 × 2000 × 600');
  let lenOk = 0;
  for (const id of ids(W.IFCBEAM)) { const e = Math.max(...[0, 1, 2].map((a) => ext(meshes.get(id), a))) / scale; if (near(e, 6000 - 2 * (W12.d / 2 + 20), 0.01)) lenOk++; }
  ok(lenOk === 4, 'beam meshes are 5650.12 long', String(lenOk));
  const colExt = ids(W.IFCCOLUMN).map((id) => [0, 1, 2].map((a) => ext(meshes.get(id), a) / scale).sort((a, b) => a - b));
  ok(colExt.every((e) => near(e[2], 3975, 0.01) && near(e[1], W12.d, 0.01) && near(e[0], W12.bf, 0.01)), 'column meshes 3975 tall, 309.9 × 205.2 section');
  const barExt = meshes.get(bars.find((b) => val(b.Tag) === '6F1').expressID);
  ok(barExt && barExt.length > 50, 'swept-disk bars meshed (' + (barExt?.length || 0) + ' vertices)');
  const holeyBeam = meshes.get(ids(W.IFCCOLUMN).find((id) => val(api.GetLine(mid, id).Tag) === 'c1'));
  ok(holeyBeam.length > 300, 'column with 16 flange holes meshed with its openings cut (' + holeyBeam.length + ' vertices)');
  api.CloseModel(mid);
}

// ---------------------------------------------------------------------------
section('DSTV NC1');
{
  const files = [];
  const refused = [];
  for (const row of marks.parts) {
    const part = built.byId.get(row.ids[0]);
    const why = Nc.ncRefusal(part);
    if (why) { refused.push(row.mark); continue; }
    files.push({ name: row.mark + '.nc1', data: Nc.writeNc1(part, { order: 'Sample frame', mark: row.mark, count: row.count }), part, row });
  }
  ok(files.length === 6 && refused.length === 0, 'NC files for every part mark, the HSS brace too (D10)');
  for (const f of files) {
    const r = Nc.readNc1(f.data);
    const p = f.part, isPl = p.profile.kind === 'PL';
    const CODE = { I: 'I', PL: 'B', RHS: 'M', C: 'U', L: 'L', CHS: 'RO' };
    ok(r.header.piece === f.row.mark && r.header.quantity === f.row.count && r.header.code === CODE[p.profile.kind] && near(r.header.length, Math.round(p.length * 100) / 100, 0.005), f.name + ': ST header (mark, quantity ' + f.row.count + ', code, length ' + r.header.length + ')');
    if (p.profile.kind !== 'I' && !isPl) continue;   // other profiles: below
    ok(near(r.header.height, isPl ? p.profile.b : p.profile.d, 0.005) && near(r.header.kgPerM, isPl ? p.profile.t * 7.85 : p.profile.mass, 0.005), f.name + ': height and weight (' + (isPl ? 'kg/m² for a plate' : 'kg/m') + ')');
    if (isPl) ok(r.header.flangeWidth === 0 && r.header.flangeThickness === 0 && near(r.header.webThickness, p.profile.t) && r.header.paintPerM === 2, f.name + ': plate header as the standard\'s "for the sheets" column (0, 0, thickness, m²/m² = 2)');
    const bo = r.blocks.filter((b) => b.type === 'BO').flatMap((b) => b.rows);
    ok(bo.length === p.holes.length, f.name + ': BO has every hole (' + bo.length + ')');
    // holes back to part coordinates
    const back = bo.map((h) => {
      if (isPl) return { face: 'plate', x: h.nums[0], y: h.nums[1] - p.profile.b / 2, d: h.nums[2] };
      if (h.face === 'v') return { face: 'web', x: h.nums[0], y: h.nums[1] - p.profile.d / 2, d: h.nums[2] };
      return { face: h.face === 'o' ? 'top' : 'bottom', x: h.nums[0], y: p.profile.bf / 2 - h.nums[1], d: h.nums[2] };   // from the behind (+u) edge
    });
    const allMatch = p.holes.every((h) => back.some((b) => b.face === h.face && near(b.x, h.x, 0.006) && near(b.y, h.y, 0.006) && b.d === h.d));
    ok(allMatch, f.name + ': every hole read back at its place (face, x, y, Ø)');
    const ak = r.blocks.filter((b) => b.type === 'AK');
    ok(ak.length === (isPl ? 1 : 3) && ak.every((b) => b.rows.length >= 5 && near(b.rows[0].nums[0], b.rows[b.rows.length - 1].nums[0]) && near(b.rows[0].nums[1], b.rows[b.rows.length - 1].nums[1])), f.name + ': closed AK contours (' + ak.map((b) => b.face || b.rows[0].face).join('') + ')');
  }
  // copes in the contour
  const m = new Md.Model(Md.starterState('C'));
  let id;
  m.change('cope', (tx) => { id = tx.addMember({ type: 'beam', start: [0, 0, 0], end: [3000, 0, 0] }); tx.addCut(id, { kind: 'cope', end: 'start', side: 'top', length: 120, depth: 50 }); tx.addHole(id, { face: 'web', x: 60, y: 0, d: 22 }); });
  const cb = build(m.state).byId.get(id);
  const r = Nc.readNc1(Nc.writeNc1(cb, { order: 'C', mark: 'b9', count: 1 }));
  const web = r.blocks.find((b) => b.type === 'AK' && b.rows[0].face === 'v').rows.map((x) => x.nums.slice(0, 2));
  ok(web.length === 7 && web.some(([x, y]) => near(x, 120) && near(y, W16.d - 50, 0.006)) && web.some(([x, y]) => near(x, 0) && near(y, W16.d - 50, 0.006)), 'top cope 120 × 50 notched into the web contour');
  const top = r.blocks.find((b) => b.type === 'AK' && b.rows[0].face === 'o').rows;
  ok(near(top[0].nums[0], 120), '… and the top flange starts after the cope');
  const z = zip(files.map((f) => ({ name: f.name, data: f.data })), new Date('2026-10-10T12:00:00'));
  const zf = path.join(OUT, 'nc-files.zip');
  fs.writeFileSync(zf, z);
  const t = tool('unzip', zf, ['-t']);
  if (t === null) console.log('  (unzip not installed: zip check skipped)');
  else ok(/No errors detected/.test(t) && (t.match(/OK/g) || []).length === 6, 'zip: unzip -t finds 6 files, no errors');
  ok(crc32(new TextEncoder().encode('123456789')) === 0xcbf43926, 'CRC-32 check value');
}

// ---------------------------------------------------------------------------
section('DSTV NC1 read by two independent readers');
{
  // DSTV.Net 1.3.0 (C#, MIT, github.com/Baseflow/DSTV.Net) and the Rust crate dstv 0.8.0 (MIT,
  // github.com/tluijken/dstv), each wrapped by a small runner in tools/detailcraft-test/dstv/ (built by
  // tools/detailcraft-test/dstv/build.sh; binaries git-ignored). Expected values are worked out here from
  // the standard's rules (DSTV 7th ed. 1998: p. 7 zero point and axes, p. 9 header, p. 10 holes), not from nc1.js.
  const BIN = path.join(ROOT, 'tools/detailcraft-test/dstv/bin');
  const net = path.join(BIN, 'dstvnet/dstvnet-runner'), rs = path.join(BIN, 'dstv-rs');
  const dir = path.join(OUT, 'nc');
  fs.mkdirSync(dir, { recursive: true });
  // the sample's parts + a beam with off-center flange holes, a raised web hole and a bottom cope
  const m = new Md.Model(Md.starterState('N'));
  let id;
  m.change('nc', (tx) => {
    id = tx.addMember({ type: 'beam', profile: 'IPE300', start: [0, 0, 0], end: [4000, 0, 0] });
    tx.addHole(id, { face: 'top', x: 500, y: 40, d: 18 });
    tx.addHole(id, { face: 'bottom', x: 700, y: -30, d: 18 });
    tx.addHole(id, { face: 'web', x: 900, y: 60, d: 22 });
    tx.addCut(id, { kind: 'cope', end: 'end', side: 'bottom', length: 150, depth: 40 });
  });
  const odd = build(m.state).byId.get(id);
  const cases = [];
  for (const row of marks.parts) {
    const part = built.byId.get(row.ids[0]);
    if (!Nc.ncRefusal(part)) cases.push({ name: row.mark, part, count: row.count });
  }
  cases.push({ name: 'b9', part: odd, count: 1 });
  // D10: a channel (holes in the web and both flanges, a top cope at the start), an angle, a rectangular HSS (web,
  // top and bottom holes, a bottom cope at the end), a round HSS
  const m2 = new Md.Model(Md.starterState('N2'));
  const ids = {};
  m2.change('nc2', (tx) => {
    ids.ch = tx.addMember({ type: 'beam', profile: 'C10X15.3', start: [0, 0, 0], end: [3000, 0, 0] });
    tx.addHole(ids.ch, { face: 'web', x: 300, y: 50, d: 22 });
    tx.addHole(ids.ch, { face: 'top', x: 600, y: 10, d: 18 });
    tx.addHole(ids.ch, { face: 'bottom', x: 800, y: -5, d: 18 });
    tx.addCut(ids.ch, { kind: 'cope', end: 'start', side: 'top', length: 100, depth: 40 });
    ids.an = tx.addMember({ type: 'brace', profile: 'L4X4X3/8', start: [0, 3000, 0], end: [2500, 3000, 1500] });
    ids.rh = tx.addMember({ type: 'beam', profile: 'HSS6X4X1/4', start: [0, 6000, 0], end: [3500, 6000, 0] });
    tx.addHole(ids.rh, { face: 'web', x: 400, y: 30, d: 22 });
    tx.addHole(ids.rh, { face: 'top', x: 700, y: 20, d: 18 });
    tx.addHole(ids.rh, { face: 'bottom', x: 900, y: -20, d: 18 });
    tx.addCut(ids.rh, { kind: 'cope', end: 'end', side: 'bottom', length: 120, depth: 60 });
    ids.ro = tx.addMember({ type: 'brace', profile: 'HSS4.500X0.237', start: [0, 9000, 0], end: [3000, 9000, 2000] });
  });
  const b2 = build(m2.state);
  for (const [k, n] of [['ch', 'ch'], ['an', 'an'], ['rh', 'rh'], ['ro', 'ro']]) cases.push({ name: n, part: b2.byId.get(ids[k]), count: 1 });
  ok(cases.slice(-4).every((c) => c.part && !Nc.ncRefusal(c.part)), 'D10: a channel, an angle, a rectangular and a round HSS are written', cases.slice(-4).map((c) => c.part?.profileName).join());
  for (const c of cases) { c.file = path.join(dir, c.name + '.nc1'); fs.writeFileSync(c.file, Nc.writeNc1(c.part, { order: 'T', mark: c.name, count: c.count })); }
  /** A hole where the standard puts it: face letter, x from the cut start, y per face. */
  const expectHole = (p, h) => {
    const pr = p.profile;
    if (pr.kind === 'PL') return ['v', h.x, h.y + pr.b / 2, h.d];
    if (pr.kind === 'C') {   // lying on its back, toes up (Z = u + bf/2, right-handed): Y = d/2 − v, so the top flange is DSTV u
      if (h.face === 'web') return ['v', h.x, pr.d / 2 - h.y, h.d];
      return [h.face === 'top' ? 'u' : 'o', h.x, h.y + pr.bf / 2, h.d];
    }
    if (pr.kind === 'RHS') {   // like an I: o = top wall; a web hole goes through both side walls (v and h)
      if (h.face === 'web') return [['v', h.x, h.y + pr.h / 2, h.d], ['h', h.x, h.y + pr.h / 2, h.d]];
      return [h.face === 'top' ? 'o' : 'u', h.x, pr.b / 2 - h.y, h.d];
    }
    if (h.face === 'web') return ['v', h.x, h.y + pr.d / 2, h.d];                    // web: from the underside
    return [h.face === 'top' ? 'o' : 'u', h.x, pr.bf / 2 - h.y, h.d];               // flange: from the behind (h) edge; front = −u
  };
  const same = (got, exp) => got.length === exp.length && exp.every((e) => got.some((g) => g[0] === e[0] && near(g[1], e[1], 0.006) && near(g[2], e[2], 0.006) && near(g[3], e[3], 1e-9)));
  const odds = odd.holes.map((h) => expectHole(odd, h));
  ok(odds.some((e) => e[0] === 'o' && near(e[2], 75 - 40)) && odds.some((e) => e[0] === 'u' && near(e[2], 75 + 30)), 'expected: off-center flange holes at y 35 (top) and 105 (bottom) from the behind edge of a 150 flange');
  if (!fs.existsSync(net)) console.log('  (DSTV.Net runner not built: run tools/detailcraft-test/dstv/build.sh — skipped)');
  else {
    let out = '', code = 0;
    try { out = execFileSync(net, cases.map((c) => c.file), { encoding: 'utf8' }); } catch (e) { out = e.stdout || ''; code = e.status; }
    const res = out.trim().split('\n').map((l) => JSON.parse(l));
    ok(code === 0 && res.length === cases.length && res.every((r) => r.result.ok && !r.libraryLog), 'DSTV.Net reads all ' + cases.length + ' files with no error or warning (exit ' + code + ')');
    for (const c of cases) {
      const r = res.find((x) => x.result.file === c.file)?.result;
      if (!r) { ok(false, c.name + ': DSTV.Net result'); continue; }
      const h = r.header, pr = c.part.profile, isPl = pr.kind === 'PL';
      // p. 9 columns: length, height, flange width, flange thickness, web thickness, radius, kg/m, m²/m (per profile, see nc1.js)
      const L0 = c.part.length, per = pr.perimeter / 1000;
      const hdr = isPl ? [L0, pr.b, 0, 0, pr.t, 0, pr.t * 7.85, 2] : pr.kind === 'L' ? [L0, pr.b, pr.b, pr.t, pr.t, 0, pr.mass, per]
        : pr.kind === 'RHS' ? [L0, pr.h, pr.b, pr.t, pr.t, pr.ro, pr.mass, per] : pr.kind === 'CHS' ? [L0, pr.D, pr.D, pr.t, pr.t, 0, pr.mass, per]
          : [L0, pr.d, pr.bf, pr.tf, pr.tw, pr.r, pr.mass, per];
      const CODE = { I: 'I', PL: 'B', C: 'U', L: 'L', RHS: 'M', CHS: 'RO' }, NAK = { I: 3, PL: 1, C: 3, L: 2, RHS: 4, CHS: 1 };
      const got = [h.Length, h.ProfileHeight, h.FlangeWidth, h.FlangeThickness, h.WebThickness, h.Radius, h.WeightByMeter, h.PaintingSurfaceByMeter];
      ok(h.PieceIdentification === c.name && h.QuantityOfPieces === c.count && h.CodeProfile === CODE[pr.kind] && hdr.every((v, i) => near(got[i], v, 0.006)), c.name + ': DSTV.Net header = the standard\'s fields (' + got.join(' ') + ')');
      ok(same(r.holes.map((x) => [x.face, x.x, x.y, x.d]), c.part.holes.flatMap((hh) => { const e = expectHole(c.part, hh); return Array.isArray(e[0]) ? e : [e]; })) && r.holes.every((x) => x.depth === 0), c.name + ': DSTV.Net holes at the standard\'s places (' + r.holes.length + ')');
      ok(r.contours.length === NAK[pr.kind] && r.contours.every((k) => k.type === 'AK' && k.closed), c.name + ': DSTV.Net sees ' + r.contours.length + ' closed outer contours (' + r.contours.map((k) => k.face).join('') + ')');
      const area = (pts) => pts.reduce((s2, p, i) => { const q = pts[(i + 1) % pts.length]; return s2 + p[0] * q[1] - q[0] * p[1]; }, 0) / 2;
      ok(r.contours.every((k) => area(k.points) > 0), c.name + ': contours counter-clockwise ("mathematic orientation")');
    }
    const web = res.find((x) => x.result.file.endsWith('b9.nc1')).result.contours.find((k) => k.face === 'v').points;
    ok(web.length === 7 && web.some(([x, y]) => near(x, 4000 - 150) && near(y, 40)) && web.some(([x, y]) => near(x, 4000) && near(y, 40)), 'DSTV.Net: bottom cope 150 × 40 in the web contour at the end');
    const conts = (n) => res.find((x) => x.result.file.endsWith('/' + n + '.nc1')).result.contours;
    const chWeb = conts('ch').find((k) => k.face === 'v').points, chU = conts('ch').find((k) => k.face === 'u').points;
    ok(chWeb.length === 7 && chWeb.some(([x, y]) => near(x, 100) && near(y, 40)) && chWeb.some(([x, y]) => near(x, 0) && near(y, 40)) && near(Math.min(...chU.map((p) => p[0])), 100),
      'DSTV.Net: the channel\'s top cope 100 × 40 at Y = 0..40 (the top flange is DSTV u), and the u flange starts at 100');
    const rhV = conts('rh').find((k) => k.face === 'v').points, rhH = conts('rh').find((k) => k.face === 'h').points;
    ok([rhV, rhH].every((w) => w.length === 7 && w.some(([x, y]) => near(x, 3500 - 120) && near(y, 60))), 'DSTV.Net: the RHS bottom cope 120 × 60 on both side walls (v and h)');
    // the reader must actually object to a bad file
    const bad = path.join(dir, 'bad.nc1');
    fs.writeFileSync(bad, Nc.writeNc1(odd, { order: 'T', mark: 'bad', count: 1 }).replace(/\r\n  o( +500\.00)/, '\r\n  x$1'));
    let badCode = 0;
    try { execFileSync(net, [bad], { encoding: 'utf8', stdio: ['ignore', 'pipe', 'pipe'] }); } catch (e) { badCode = e.status; }
    ok(badCode === 1, 'DSTV.Net refuses a file with an unknown face letter (exit ' + badCode + ')');
  }
  if (!fs.existsSync(rs)) console.log('  (dstv (Rust) runner not built: run tools/detailcraft-test/dstv/build.sh — skipped)');
  else {
    let out = '', code = 0;
    try { out = execFileSync(rs, cases.map((c) => c.file), { encoding: 'utf8' }); } catch (e) { out = e.stdout || ''; code = e.status; }
    ok(code === 0 && (out.match(/rows parsed == rows in file/g) || []).length === cases.length, 'dstv (Rust) parses every row of all ' + cases.length + ' files (exit ' + code + ')');
    const FACE = { Front: 'v', Top: 'o', Bottom: 'u', Behind: 'h' };
    for (const c of cases) {
      const blockText = out.split(c.file)[1]?.split(dir)[0] || '';
      const holes = [...blockText.matchAll(/BO face=(\w+) x=([\d.-]+) y=([\d.-]+) d=([\d.]+)/g)].map((x) => [FACE[x[1]], Number(x[2]), Number(x[3]), Number(x[4])]);
      ok(same(holes, c.part.holes.flatMap((hh) => { const e = expectHole(c.part, hh); return Array.isArray(e[0]) ? e : [e]; })), c.name + ': dstv (Rust) holes at the standard\'s places (' + holes.length + ')');
    }
  }
}

// ---------------------------------------------------------------------------
section('Shop drawings');
{
  const beam = built.parts.find((p) => p.type === 'beam');
  const row = marks.parts.find((p) => p.mark === 'b1');
  const d = shopDrawing(beam, { mark: 'b1', asmMark: 'B1', count: row.count, model: 'Sample frame', date: '2026-10-10' });
  ok(!d.refused && d.w === 420 && d.h === 297, 'A3 landscape sheet');
  const overall = d.dims.filter((x) => x.dir === 'h' && x.value === Math.round(beam.length));
  ok(overall.length === 1, 'overall length dimension ' + Math.round(beam.length));
  const m = new Md.Model(Md.starterState('S'));
  let id;
  m.change('beam', (tx) => {
    id = tx.addMember({ type: 'beam', start: [0, 0, 0], end: [4000, 0, 0] });
    tx.addCut(id, { kind: 'cope', end: 'end', side: 'top', length: 150, depth: 60 });
    for (const x of [80, 160]) for (const y of [-60, 60]) tx.addHole(id, { face: 'web', x, y, d: 22 });
    tx.addHole(id, { face: 'top', x: 2000, y: 45, d: 18 }); tx.addHole(id, { face: 'top', x: 2000, y: -45, d: 18 });
  });
  const part = build(m.state).byId.get(id);
  const sd = shopDrawing(part, { mark: 'b7', count: 2, model: 'S', date: '2026-10-10' });
  const chain = sd.dims.filter((x) => x.dir === 'h').map((x) => x.value);
  ok(JSON.stringify(chain.slice(0, 4)) === JSON.stringify([80, 80, 1840, 2000]) && chain.includes(4000), 'hole stations chained from the left end: 80 80 1840 2000, overall 4000', chain.join(' '));
  const vert = sd.dims.filter((x) => x.dir === 'v').map((x) => x.value);
  ok(vert.includes(Math.round(W16.d / 2 - 60)) && vert.includes(120) && vert.includes(Math.round(W16.d)), 'web hole heights from the underside: ' + vert.slice(0, 4).join(' '));
  ok(vert.includes(45) || vert.includes(90), 'flange gauge dimensioned in the flange plan');
  const pdf = await toPdf(sd, { title: 'b7' });
  const pf = path.join(OUT, 'b7.pdf');
  fs.writeFileSync(pf, pdf.bytes);
  ok(pdf.missing === 0, 'every character printable in WinAnsi');
  const info = tool('pdfinfo', pf);
  if (info === null) console.log('  (poppler not installed: PDF checks skipped)');
  else {
    ok(/Pages:\s+1/.test(info) && /Page size:\s+1190\.55 x 841\.89 pts/.test(info) && /Producer:\s+DetailCraft/.test(info), 'pdfinfo: one A3 landscape page, producer DetailCraft', (info.match(/Page size:.*/) || [''])[0]);
    const text = tool('pdftotext', pf, ['-layout']);
    for (const w of ['b7', 'W16x26', '4000', 'Cope 150 x 60', '4 x Ø22 in the web', '2 x Ø18 in the top flange', 'Section', 'A992']) ok(text.includes(w), 'pdftotext finds "' + w + '"');
  }
  const ep = built.parts.find((p) => p.role === 'End plate');
  const pd = shopDrawing(ep, { mark: 'p1', count: 8 });
  ok(!pd.refused && pd.dims.some((x) => x.value === Math.round(ep.length)) && pd.dims.some((x) => x.value === 75), 'plate drawing: length and 75 pitch dimensioned');
  const pdfP = await toPdf(pd, { title: 'p1' });
  fs.writeFileSync(path.join(OUT, 'p1.pdf'), pdfP.bytes);
  const tp = tool('pdftotext', path.join(OUT, 'p1.pdf'));
  if (tp !== null) ok(tp.includes('PL20x180') && tp.includes('8 x Ø22 in the plate'), 'plate PDF text: PL20x180, 8 × Ø22');
  ok(shopDrawing(built.parts.find((p) => p.type === 'brace'), {}).refused, 'HSS shop drawing refused with a reason (not faked)');
}

// ---------------------------------------------------------------------------
section('General-arrangement and assembly drawings');
{
  const set = Dw.drawingSet(sample.state, built, marks, { date: '2026-10-10' });
  const sh = (t) => set.sheets.find((x) => x.title === t);
  ok(set.sheets.length === 12 && set.sheets.every((x) => x.w === 420 && x.h === 297), '12 A3 sheets: 2 plans, 5 elevations, the anchor bolt plan, 4 assemblies (' + set.sheets.map((x) => x.number).join(' ') + ')');
  ok(set.sheets.map((x) => x.title).join('|') === 'Plan at Level 1|Plan at Level 2|Elevation on grid A|Elevation on grid B|Elevation on grid 1|Elevation on grid 2|Elevation on grid 3|Anchor bolt plan|' + marks.assemblies.map((a) => 'Assembly ' + a.mark).join('|'), 'sheet order: plans by level, elevations on lettered then numbered grids, the anchor bolt plan, then one per assembly mark');
  ok(Dw.SCALES.includes(sh('Plan at Level 2').scale.replace('1:', '') * 1) && sh('Plan at Level 2').scale === '1:50' && sh('Plan at Level 1').scale === '1:100', 'plan scales from the standard list: Level 2 1:50, Level 1 (with the pier footing at x 16 m) 1:100');
  const p2 = sh('Plan at Level 2');
  const lab = (x, t) => x.labels.filter((l) => l === t).length;
  ok(lab(p2, 'B1 W16x26') === 4 && lab(p2, 'C1 W12x50') === 2 && lab(p2, 'C2 W12x50') === 4 && lab(p2, 'BR1 HSS4x4x1/4') === 1, 'Level 2 plan labels every member once with its mark and profile (4 B1, 2 C1, 4 C2, BR1)');
  const dv = (x, view) => x.dims.filter((d) => d.view === view).map((d) => d.value);
  ok(JSON.stringify(dv(p2, 'grids').sort((a, b) => a - b)) === JSON.stringify([6000, 6000, 7000, 12000]), 'plan grid dimensions: 6000 + 6000 = 12000 across, 7000 up');
  const pi = (x) => x.items.filter((i) => i.k === 'circle' && Math.abs(i.r - 4) < 1e-9).length;
  ok(pi(p2) === 10, 'plan: grid bubbles at both ends of 5 grid lines (' + pi(p2) + ')');
  // columns in plan are their real section outline: the loop spans bf × d at 1:50
  const W12 = Pr.getProfile('W12x50');
  const loops = p2.items.filter((i) => i.k === 'path' && i.closed && i.pts.length === W12.loops[0].length);
  const span = (l, a) => Math.max(...l.pts.map((q) => q[a])) - Math.min(...l.pts.map((q) => q[a]));
  ok(loops.length === 6 && loops.every((l) => near(span(l, 0), W12.d / 50, 1e-6) && near(span(l, 1), W12.bf / 50, 1e-6)), 'plan: 6 column sections drawn as the W12x50 outline at 1:50 (' + (W12.d / 50).toFixed(2) + ' × ' + (W12.bf / 50).toFixed(2) + ' mm)');
  const eA = sh('Elevation on grid A');
  ok(JSON.stringify(dv(eA, 'levels')) === '[4000]' && JSON.stringify(dv(eA, 'grids').sort((a, b) => a - b)) === JSON.stringify([6000, 6000, 12000]) && lab(eA, 'BR1 HSS4x4x1/4') === 1 && lab(eA, 'Level 2') === 1, 'elevation A: level height 4000, grid dimensions 6000 6000 12000, the brace and the level markers');
  ok(lab(sh('Elevation on grid 1'), 'BR1 HSS4x4x1/4') === 0, 'elevation 1 leaves out the brace that only slants through its band');
  ok(lab(sh('Elevation on grid 2'), 'B1 W16x26') === 4, 'elevation 2: the four beam ends framing in, drawn as sections');
  // assembly B1: beam + two flush end plates. Expected values from the connection parameters, not from the drawing code
  const ep = Cn.ENDPLATE_DEFAULTS, beamL = 6000 - 2 * (W12.d / 2 + ep.tp);
  const B1 = sh('Assembly B1');
  ok(dv(B1, 'front').includes(Math.round(beamL + 2 * ep.tp)) && dv(B1, 'front').includes(ep.tp) && dv(B1, 'front').includes(Math.round(beamL)), 'B1 front view: overall ' + Math.round(beamL + 2 * ep.tp) + ' = beam ' + Math.round(beamL) + ' + two ' + ep.tp + ' mm end plates');
  const endD = dv(B1, 'end');
  ok(endD.filter((v) => v === ep.pitch).length === 2 * (ep.rows - 1) && endD.filter((v) => v === ep.gauge).length === 2 && endD.filter((v) => v === ep.width).length === 2 && endD.filter((v) => v === Math.round(W16.d)).length === 2, 'B1 end views (both ends): pitch ' + ep.pitch + ' ×' + (ep.rows - 1) + ', gauge ' + ep.gauge + ', plate ' + ep.width + ' × ' + Math.round(W16.d));
  const e1 = Math.round((W16.d - (ep.rows - 1) * ep.pitch) / 2), e2 = (ep.width - ep.gauge) / 2;
  ok(endD.filter((v) => v === e1).length === 4 && endD.filter((v) => v === e2).length === 4, 'B1 end views: edge distances ' + e1 + ' (top and bottom) and ' + e2 + ' (sides)');
  const holesB1 = B1.items.filter((i) => i.k === 'circle' && Math.abs(i.r - ep.hole / 2 / 10) < 1e-6).length;
  ok(holesB1 === 2 * ep.rows * 2, 'B1: ' + 2 * ep.rows * 2 + ' plate holes drawn as Ø' + ep.hole + ' circles in the two end views at 1:10 (' + holesB1 + ')');
  ok(B1.asm.subs.length === 2 && B1.asm.bolts.length === 2 * ep.rows * 2, 'B1 assembly: 2 end plates, ' + 2 * ep.rows * 2 + ' loose bolts');
  const bp = Cn.BASEPLATE_DEFAULTS, C1 = sh('Assembly ' + marks.assemblies.find((a) => a.main === 'c1').mark);
  const cf = C1.dims.filter((d) => d.view === 'front' && d.dir === 'h').map((d) => d.value);
  ok(cf[cf.length - 1] === 4000 && cf[0] === bp.tp && near(cf.slice(0, -1).reduce((a, b) => a + b, 0), 4000, 2), 'column assembly: base plate ' + bp.tp + ', chain to the flange holes, overall 4000 = column 3975 + plate (' + cf.join(' ') + ')');
  ok(dv(C1, 'end').includes(bp.sx) && dv(C1, 'end').includes(bp.sy) && dv(C1, 'end').includes(bp.length) && dv(C1, 'end').includes(bp.width), 'column assembly end view: rods ' + bp.sx + ' × ' + bp.sy + ' on a ' + bp.length + ' × ' + bp.width + ' plate');
  ok(dv(C1, 'front').filter((v) => v === ep.pitch).length >= 3, 'column assembly: flange hole rows chained at ' + ep.pitch);
  // made again from the model: change the end plate pitch and the model ref and the dimensions follow
  const m2 = sampleModel();
  m2.change('pitch', (tx) => { for (const c of tx.s.connections) if (c.type === 'endplate') tx.updateConnection(c.id, { pitch: 80 }); });
  const b2 = build(m2.state), k2 = Mk.markParts(b2); k2.footingMark = Mk.markFootings(m2.state.footings);
  const set2 = Dw.drawingSet(m2.state, b2, k2, { date: '2026-10-10' });
  ok(set2.ref !== set.ref && /^[0-9A-F]{8}$/.test(set2.ref), 'model ref changes with the model (' + set.ref + ' → ' + set2.ref + ')');
  ok(set2.sheets.find((x) => x.title === 'Assembly B1').dims.filter((d) => d.view === 'end' && d.value === 80).length === 2 * (ep.rows - 1), 'drawings made again: B1 end views now dimension pitch 80');
  // PDF: all sheets, read back by poppler
  const pdf = await toPdf(set.sheets, { title: 'Sample frame drawings' });
  const pf = path.join(OUT, 'drawings.pdf');
  fs.writeFileSync(pf, pdf.bytes);
  ok(pdf.missing === 0, 'every drawing character printable in WinAnsi');
  const info = tool('pdfinfo', pf);
  if (info === null) console.log('  (poppler not installed: drawing PDF checks skipped)');
  else {
    ok(/Pages:\s+12/.test(info) && /Page size:\s+1190\.55 x 841\.89 pts/.test(info), 'pdfinfo: 12 A3 landscape pages');
    const page = (n) => tool('pdftotext', pf, ['-layout', '-f', String(n), '-l', String(n)]);
    const t2 = page(2), t3 = page(3), t10 = page(set.sheets.findIndex((x) => x.title === 'Assembly B1') + 1);
    for (const w of ['Plan at Level 2', '1:50', 'B1 W16x26', 'C2 W12x50', '12000', '7000', 'GA-02', '2 of 12', set.ref]) ok(t2.includes(w), 'page 2 text has "' + w + '"');
    for (const w of ['Elevation on grid A', 'Level 2', '+4000', 'B1 W16x26']) ok(t3.includes(w), 'page 3 text has "' + w + '"');
    for (const w of ['Assembly B1', 'Part list', 'PL20x180', 'W16x26', '5690', '16 x bolt Ø20 x 70 A325', 'fillet weld', '4 off']) ok(t10.includes(w), 'assembly page text has "' + w + '"');
    // poppler renders every page with ink on it
    const ppm = path.join(OUT, 'pg');
    try { execFileSync('pdftoppm', ['-gray', '-r', '20', pf, ppm]); } catch { /* checked below */ }
    const pgms = fs.readdirSync(OUT).filter((f) => f.startsWith('pg') && f.endsWith('.pgm'));
    const inked = pgms.filter((f) => { const b = fs.readFileSync(path.join(OUT, f)); let dark = 0; for (let i = b.length - 230 * 165; i < b.length; i++) if (b[i] < 128) dark++; return dark > 300; });
    ok(pgms.length === 12 && inked.length === 12, 'pdftoppm renders 12 pages, each with drawing on it (' + inked.length + ')');
  }
}

// ---------------------------------------------------------------------------
section('Sheet sizes: A4–A1, ANSI B–D (D3)');
{
  const Pa = await load('paper.js');
  const { textWidth } = await load('pdf.js');
  const mk = Mk.markParts(built); mk.footingMark = Mk.markFootings(sample.state.footings);
  const tbox = (it) => { const w = textWidth(it.s, it.h, it.bold), a = it.rot || 0, c = Math.cos(a), s = Math.sin(a); const dx = it.align === 'center' ? -w / 2 : it.align === 'right' ? -w : 0; const pts = [[dx, -0.2 * it.h], [dx + w, -0.2 * it.h], [dx + w, 0.8 * it.h], [dx, 0.8 * it.h]].map(([u, v]) => [it.x + u * c - v * s, it.y + u * s + v * c]); return { x0: Math.min(...pts.map((p) => p[0])), x1: Math.max(...pts.map((p) => p[0])), y0: Math.min(...pts.map((p) => p[1])), y1: Math.max(...pts.map((p) => p[1])) }; };
  const inside = (sh) => sh.items.every((it) => { const pts = it.k === 'path' ? it.pts : it.k === 'circle' ? [[it.c[0] - it.r, it.c[1] - it.r], [it.c[0] + it.r, it.c[1] + it.r]] : (({ x0, y0, x1, y1 }) => [[x0, y0], [x1, y1]])(tbox(it)); return pts.every(([x, y]) => x >= 9.9 && y >= 9.9 && x <= sh.w - 9.9 && y <= sh.h - 9.9); });
  const clashes = (sh) => { const b = sh.items.filter((i) => i.k === 'text').map(tbox); let n = 0; for (let i = 0; i < b.length; i++) for (let j = i + 1; j < b.length; j++) if (b[i].x0 < b[j].x1 - 0.3 && b[j].x0 < b[i].x1 - 0.3 && b[i].y0 < b[j].y1 - 0.3 && b[j].y0 < b[i].y1 - 0.3) n++; return n; };
  const den = (sc) => Number(String(sc).split(' / ')[0].replace('1:', ''));
  const beam = built.parts.find((p) => p.type === 'beam'), plate = built.parts.find((p) => p.type === 'plate');
  const sets = {};
  ok(Pa.PAPER_KEYS.join() === 'A4,A3,A2,A1,ANSI-B,ANSI-C,ANSI-D' && near(Pa.paperOf('ANSI-D').w, 863.6, 1e-9) && Pa.paperOf('nope').key === 'A3', 'sheet sizes: A4, A3, A2, A1, ANSI B, C, D (34 × 22 in = 863.6 mm); unknown → A3');
  for (const key of Pa.PAPER_KEYS) {
    const p = Pa.paperOf(key);
    const set = Dw.drawingSet(sample.state, built, mk, { date: '2026-10-13', paper: key });
    sets[key] = set;
    ok(set.paper === key && set.sheets.length === 12 && set.sheets.every((sh) => sh.w === p.w && sh.h === p.h && sh.paper === key), key + ': 12 sheets, each ' + Math.round(p.w * 10) / 10 + ' × ' + Math.round(p.h * 10) / 10 + ' mm');
    ok(set.sheets.every(inside), key + ': every line, circle and word inside the sheet frame');
    ok(set.sheets.every((sh) => clashes(sh) === 0), key + ': no two words overlap on any sheet', set.sheets.map(clashes).join(','));
    ok(set.sheets.every((sh) => sh.scale.split(' / ').every((x) => Dw.SCALES.includes(Number(x.replace('1:', ''))))), key + ': every scale from the standard list');
    const shops = [shopDrawing(beam, { mark: 'b1', paper: key }), shopDrawing(plate, { mark: 'p1', paper: key })];
    ok(shops.every((sh) => sh.w === p.w && sh.paper === key && inside(sh) && clashes(sh) === 0), key + ': shop drawings of a beam and a plate fit the sheet, no words overlap');
  }
  ok(Dw.SHEET.key === 'A3' && Dw.SHEET.w === 420, 'after a set on another size, the module is back on A3');
  ok(sets.A1.sheets.every((sh, i) => den(sh.scale) <= den(sets.A3.sheets[i].scale)) && sets.A1.sheets.some((sh, i) => den(sh.scale) < den(sets.A3.sheets[i].scale)), 'A1 draws every sheet at the same or a larger scale than A3 (' + sets.A1.sheets.map((s) => s.scale).join(' ') + ')');
  ok(sets.A4.sheets.every((sh, i) => den(sh.scale) >= den(sets.A3.sheets[i].scale)), 'A4 at the same or a smaller scale than A3');
  const s3 = JSON.stringify(Dw.drawingSet(sample.state, built, mk, { date: '2026-10-13' }).sheets.map((x) => x.items.filter((i) => i.k !== 'text' || !/ of 12/.test(i.s))));
  ok(s3 === JSON.stringify(sets.A3.sheets.map((x) => x.items.filter((i) => i.k !== 'text' || !/ of 12/.test(i.s)))), 'no paper given = A3, the same drawings');
  for (const key of ['A4', 'ANSI-D']) {
    const { bytes } = await toPdf([...sets[key].sheets, shopDrawing(beam, { mark: 'b1', paper: key })], { title: key });
    const f = path.join(OUT, 'drawings-' + key + '.pdf');
    fs.writeFileSync(f, bytes);
    const info = tool('pdfinfo', f);
    if (info === null) { console.log('  (pdfinfo not installed: page size check skipped)'); continue; }
    const want = key === 'A4' ? '841.89 x 595.276' : '2448 x 1584';
    ok(/Pages:\s+13/.test(info) && new RegExp('Page size:\\s+' + want.replace(/\./g, '\\.')).test(info), key + ' PDF: 13 pages of ' + want + ' pt (pdfinfo)', (info.match(/Page size:.*$/m) || [''])[0]);
  }
}

// ---------------------------------------------------------------------------
section('Drawings as DWG and DXF (D4)');
{
  const O = await load('dwgout.js');
  const appWriter = path.join(APP, 'dwg/write.js');
  const W = await import(pathToFileURL(fs.existsSync(appWriter) ? appWriter : path.join(ROOT, 'lib/dwg/write.js')).href);
  if (fs.existsSync(appWriter)) {
    let out = '', code = 0;
    try { out = execFileSync('node', [path.join(ROOT, 'tools/dwg-test/writer-sync.mjs'), '--check', 'detailcraft'], { encoding: 'utf8' }); } catch (e) { out = (e.stdout || '') + (e.stderr || ''); code = e.status; }
    ok(code === 0 && /identical/.test(out), 'dev/dwg is cad-files\' writer, byte-identical to lib/dwg (writer-sync --check)', out.trim().split('\n').pop());
  }
  const { readDwg } = await import(pathToFileURL(path.join(ROOT, 'lib/dwg/read.js')).href);
  if (!fs.existsSync(appWriter)) console.log('  (no dev/dwg/ copy yet: the writer comes from lib/dwg — asked of cad-files)');
  const mk = Mk.markParts(built); mk.footingMark = Mk.markFootings(sample.state.footings);
  const set = Dw.drawingSet(sample.state, built, mk, { date: '2026-10-13' });
  const shop = shopDrawing(built.parts.find((p) => p.type === 'beam'), { mark: 'b1', model: 'Ünïcode ★ Ø22' });
  const sheets = [...set.sheets, { ...shop, number: 'S-b1', title: 'Shop drawing b1' }];
  const kindCount = (sh) => { const c = { LINE: 0, POLY: 0, CIRCLE: 0, TEXT: 0 }; for (const it of sh.items) { if (it.k === 'text') { if (String(it.s).trim()) c.TEXT++; } else if (it.k === 'circle') c.CIRCLE++; else if (it.pts.length >= 2) c[it.pts.length === 2 && !it.closed ? 'LINE' : 'POLY']++; } return c; };
  const texts = (sh) => sh.items.filter((i) => i.k === 'text' && String(i.s).trim()).map((i) => String(i.s)).sort();
  const PY = path.join(ROOT, 'tools/detailcraft-test/venv/bin/python'), CHK = path.join(ROOT, 'tools/detailcraft-test/dxf_check.py');
  const hasPy = fs.existsSync(PY) && (() => { try { execFileSync(PY, ['-c', 'import ezdxf']); return true; } catch { return false; } })();
  if (!hasPy) console.log('  (ezdxf not in tools/detailcraft-test/venv: DXF read-back by ezdxf skipped — pip install -r tools/detailcraft-test/requirements.txt)');
  const dump = (f, extra = []) => JSON.parse(execFileSync(PY, [CHK, f, ...extra], { encoding: 'utf8', maxBuffer: 1 << 28 }));
  // pens → layers
  const pens = O.layersOf(set.sheets[8]).map((l) => l.name + ':' + l.w + ':' + l.lt).sort().join(' ');
  ok(/DC-CENTER:13:DC_CENTER/.test(pens) && /DC-HIDDEN:18:DC_HIDDEN/.test(pens) && /DC-OUTLINE:35:CONTINUOUS/.test(pens) && /DC-THICK:50:CONTINUOUS/.test(pens) && /DC-TEXT/.test(pens), 'each pen is a layer with its lineweight and linetype (' + pens + ')');
  // DXF R12, every sheet, read by ezdxf
  let dxfOk = 0, txtOk = 0, ltOk = 0, extOk = 0, audit = 0;
  for (const sh of sheets) {
    const r = O.sheetDxf(sh, { title: sh.title });
    const f = path.join(OUT, 'sheet-' + sh.number + '.dxf');
    fs.writeFileSync(f, r.text, 'latin1');
    const c = kindCount(sh);
    if (r.counts.LINE === c.LINE && (r.counts.POLYLINE || 0) === c.POLY && (r.counts.CIRCLE || 0) === c.CIRCLE && r.counts.TEXT === c.TEXT) dxfOk++;
    if (!hasPy) continue;
    const d = dump(f, ['--encoding', 'cp1252']);
    audit += d.audit_errors;
    if (d.version === 'AC1009' && d.counts.LINE === c.LINE && (d.counts.POLYLINE || 0) === c.POLY && (d.counts.CIRCLE || 0) === c.CIRCLE && d.counts.TEXT === c.TEXT) dxfOk++;
    const want = texts(sh).map((t) => t.replace(/[^\x20-\x7e\u00a0-\u00ff]/g, (ch) => '\\U+' + ch.codePointAt(0).toString(16).toUpperCase().padStart(4, '0')));
    if (JSON.stringify(d.texts.map((t) => t[0]).sort()) === JSON.stringify(want.sort())) txtOk++;
    if (O.layersOf(sh).every((l) => !l.dash || JSON.stringify(d.linetypes[l.lt]) === JSON.stringify(l.dash.map((v) => Math.round(v * 1e4) / 1e4)))) ltOk++;
    if (d.extents[0] >= 9.9 && d.extents[1] >= 9.9 && d.extents[2] <= sh.w - 9.9 && d.extents[3] <= sh.h - 9.9) extOk++;
  }
  const n = sheets.length;
  ok(dxfOk === (hasPy ? 2 : 1) * n, 'DXF R12 of all ' + n + ' sheets (11 drawings + a shop drawing): one LINE / POLYLINE / CIRCLE / TEXT per line, outline, circle and word' + (hasPy ? ', read back so by ezdxf' : ''), dxfOk + '/' + (hasPy ? 2 : 1) * n);
  if (hasPy) {
    ok(audit === 0, 'ezdxf audits every DXF with no errors');
    ok(txtOk === n, 'every word on every sheet comes back from the DXF (characters outside Windows-1252 as \\U+XXXX)', txtOk + '/' + n);
    ok(ltOk === n, 'linetypes: hidden, center, grid … patterns read back as written (mm on paper)', ltOk + '/' + n);
    ok(extOk === n, 'everything inside the sheet frame at full size (1 unit = 1 mm on the paper)', extOk + '/' + n);
  }
  // DWG: cc-dwg's writer, read back by cc-dwg's reader and by LibreDWG, libdxfrw and the ODA File Converter
  const dwgFiles = [];
  for (const [version, sh] of [['AC1015', set.sheets[0]], ['AC1032', set.sheets[8]], ['AC1018', sheets[sheets.length - 1]]]) {
    const { bytes, report } = W.writeDwg(O.sheetModel(sh, { title: sh.title }), { version });
    const f = path.join(OUT, 'sheet-' + sh.number + '-' + version + '.dwg');
    fs.writeFileSync(f, bytes);
    dwgFiles.push({ f, sh, version });
    const back = readDwg(bytes);
    const ms = back.blocks.find((b) => b.name === '*Model_Space');
    const c = {}; for (const e of ms.entities) c[e.type] = (c[e.type] || 0) + 1;
    const k = kindCount(sh);
    ok(!report.notes.length && back.version === version && c.LINE === k.LINE && (c.LWPOLYLINE || 0) === k.POLY && (c.CIRCLE || 0) === k.CIRCLE && c.TEXT === k.TEXT, sh.number + ' as DWG ' + version + ': written without notes, read back by cc-dwg with the same ' + (k.LINE + k.POLY + k.CIRCLE + k.TEXT) + ' objects', JSON.stringify({ notes: report.notes, c }));
    const lw = Object.fromEntries(back.tables.layers.map((l) => [l.name, l.lineweight]));
    const tv = ms.entities.filter((e) => e.type === 'TEXT').map((e) => e.value).sort();
    ok(lw['DC-OUTLINE'] === 35 && lw['DC-THIN'] === 18 && back.header.INSUNITS === 4 && JSON.stringify(tv) === JSON.stringify(texts(sh)), sh.number + ' ' + version + ': layer lineweights, millimeters, every word (Unicode too)');
  }
  const Rd = await import(pathToFileURL(path.join(ROOT, 'tools/civilcraft-test/dwg-readers.mjs')).href);
  const readers = Rd.availableReaders(path.join(ROOT, 'tools/civilcraft-test'));
  if (!readers.length) console.log('  (no DWG readers in tools/civilcraft-test/venv/dwg-readers: run setup-dwg-readers.sh — skipped)');
  for (const rd of readers) {
    const res = rd.run(dwgFiles.map((x) => x.f), OUT);
    let good = 0;
    const why = [];
    for (const { f, sh, version } of dwgFiles) {
      const r = res.get(f);
      // LibreDWG warns "Skip HATCH common handles" on every HATCH, AutoCAD's own sample files included (cadcraft-test notes the same)
      const probs = r.problems.filter((x) => !/Skip HATCH common handles/.test(x));
      if (probs.length) { why.push(path.basename(f) + ': ' + probs[0]); continue; }
      if (!hasPy) { good++; continue; }
      const d = dump(r.dxf, r.encoding ? ['--encoding', r.encoding] : []);
      const k = kindCount(sh), lines = (d.counts.LINE || 0), polys = (d.counts.LWPOLYLINE || 0) + (d.counts.POLYLINE || 0);
      if (lines + polys >= k.LINE + k.POLY && (d.counts.CIRCLE || 0) === k.CIRCLE && (d.counts.TEXT || 0) + (d.counts.MTEXT || 0) === k.TEXT) good++;
      else why.push(path.basename(f) + ' ' + version + ': ' + JSON.stringify(d.counts));
    }
    ok(good === dwgFiles.length, rd.name + ' reads all three DWG sheets (R2000, R2004, R2018) with no problem, every line, circle and word there', why.slice(0, 2).join(' | '));
  }
}

// ---------------------------------------------------------------------------
section('IFC import (cc-ifc)');
{
  const { W, api } = await (await import(pathToFileURL(path.join(ROOT, 'tools/detailcraft-test/webifc-node.mjs')).href)).loadCcIfc(APP);
  // 1. DetailCraft's own export, back in
  const txt = writeIfc(sample.state, built, marks, schedule, { now: new Date('2026-10-10T12:00:00Z') });
  const { state: st, report: rp } = await importIfc(W, api, new TextEncoder().encode(txt));
  const nHoles = built.parts.reduce((s2, p) => s2 + p.holes.length + p.cuts.length, 0);
  ok(JSON.stringify(rp.converted) === JSON.stringify({ IfcBeam: 4, IfcColumn: 6, IfcMember: 1, IfcPlate: 14, IfcOpeningElement: nHoles, IfcMechanicalFastener: 88 }), 'own export: 4 beams, 6 columns, 1 member, 14 plates, ' + nHoles + ' openings (holes) and 88 fasteners (bolts) brought in (D11)', JSON.stringify(rp.converted));
  const nc = Object.fromEntries(rp.notConverted.map((r) => [r.cls, r.n]));
  ok(nc.IfcReinforcingBar === 132 && nc.IfcFooting === 7 && nc.IfcElementAssembly === 10 && rp.notConverted.length === 3, 'own export: the rest counted by class with a reason (132 bars, 7 footings, 10 assemblies)');
  ok(JSON.stringify(st.levels) === JSON.stringify(sample.state.levels) && JSON.stringify(st.grids) === JSON.stringify(sample.state.grids), 'own export: levels and grids identical');
  const b2 = build(st);
  let same = 0;
  for (const p of built.parts) {
    const q = b2.parts.find((x) => x.profileName === p.profileName && G.dist(G.toWorld(x.frame, 0, 0, 0, x.voff), G.toWorld(p.frame, 0, 0, 0, p.voff)) < 0.01 && Math.abs(x.length - p.length) < 0.01);
    if (q && G.dist(q.frame.x, p.frame.x) < 1e-6 && (G.dist(q.frame.v, p.frame.v) < 1e-6 || (p.profile.kind === 'PL' && G.dist(q.frame.v, G.mul(p.frame.v, -1)) < 1e-6))) same++;
  }
  ok(same === built.parts.length, 'own export: every part comes back as a member with the same profile, section center line, length and orientation (' + same + '/' + built.parts.length + ')');
  // D11: holes, copes and bolts come back where they were
  let holesSame = 0, holesAll = 0;
  for (const p of built.parts) {
    const q = b2.parts.find((x) => x.profileName === p.profileName && G.dist(G.toWorld(x.frame, 0, 0, 0, x.voff), G.toWorld(p.frame, 0, 0, 0, p.voff)) < 0.01 && Math.abs(x.length - p.length) < 0.01);
    const flip = q && p.profile.kind === 'PL' && G.dist(q.frame.v, G.mul(p.frame.v, -1)) < 1e-6 ? -1 : 1;
    for (const h of p.holes) { holesAll++; if (q && q.holes.some((g) => g.face === h.face && near(g.x, h.x, 0.01) && near(g.y, flip * h.y, 0.01) && near(g.d, h.d, 0.05))) holesSame++; }
  }
  ok(holesAll > 100 && holesSame === holesAll, 'own export: every hole back on its face at its x, y and diameter (' + holesSame + '/' + holesAll + ')');
  const bk = b2.bolts.filter((x) => x.loose);
  const boltKey = (b) => [b.d, b.length, b.grade, b.kind, ...b.head.map((v) => Math.round(v)), ...b.axis.map((v) => Math.round(v * 1000))].join('|');
  const want = new Map(); for (const b of built.bolts) want.set(boltKey(b), (want.get(boltKey(b)) || 0) + 1);
  for (const b of bk) want.set(boltKey(b), (want.get(boltKey(b)) || 0) - 1);
  ok(bk.length === 88 && [...want.values()].every((v) => v === 0) && st.bolts.length === 88, 'own export: 88 bolts and anchor rods back as loose bolts, same diameter, length, grade, kind, head and axis');
  // a cope survives the trip: a beam with a top cope at its start and a bottom one at its end
  {
    const mc = new Md.Model(Md.starterState('Cope'));
    let cid;
    mc.change('c', (tx) => { cid = tx.addMember({ type: 'beam', profile: 'W16x26', start: [0, 0, 3000], end: [5000, 0, 3000] }); tx.addCut(cid, { kind: 'cope', end: 'start', side: 'top', length: 120, depth: 40 }); tx.addCut(cid, { kind: 'cope', end: 'end', side: 'bottom', length: 95.5, depth: 30 }); tx.addHole(cid, { face: 'web', x: 60, y: 50, d: 22 }); });
    const bc = build(mc.state), mkc = Mk.markParts(bc);
    const { state: sc } = await importIfc(W, api, new TextEncoder().encode(writeIfc(mc.state, bc, Object.assign(mkc, { footingMark: new Map() }), Rb.bendingSchedule([]), {})));
    const cm = sc.members[0];
    ok(JSON.stringify(cm.cuts.map(({ id, ...c }) => c)) === JSON.stringify([{ kind: 'cope', end: 'start', side: 'top', length: 120, depth: 40 }, { kind: 'cope', end: 'end', side: 'bottom', length: 95.5, depth: 30 }]) && cm.holes.length === 1, 'copes come back as copes (top at the start 120 × 40, bottom at the end 95.5 × 30), the hole as a hole', JSON.stringify(cm.cuts));
  }
  ok(st.members.filter((m) => m.type === 'beam').every((m) => m.position === 'top'), 'own export: beams come back with top of steel on their line (profile offset read as position top)');
  ok(near(b2.parts.reduce((s2, p) => s2 + p.weight, 0), built.parts.reduce((s2, p) => s2 + p.weight, 0), 1e-6), 'own export: total steel weight unchanged');
  // 2. IfcOpenShell-made files (tools/detailcraft-test/make_ifc.py): IFC2X3 in mm, IFC4 in feet
  const FX = path.join(ROOT, 'tools/detailcraft-test/fixtures');
  for (const f of ['ios-steel-ifc2x3.ifc', 'ios-steel-ifc4-feet.ifc']) {
    const { state: s2, report: r2 } = await importIfc(W, api, fs.readFileSync(path.join(FX, f)));
    const tag = f + ': ';
    ok(r2.schema === (f.includes('2x3') ? 'IFC2X3' : 'IFC4') && near(r2.toMm, f.includes('feet') ? 304.8 : 1, 1e-9), tag + r2.schema + ', ' + r2.unit + ' (× ' + r2.toMm + ' to mm)');
    ok(JSON.stringify(r2.converted) === JSON.stringify({ IfcBeam: 4, IfcColumn: 2, IfcMember: 1, IfcPlate: 1, IfcOpeningElement: 2, IfcMechanicalFastener: 1 }), tag + 'brought in 4 beams, 2 columns, a member, a plate, 2 holes and a bolt', JSON.stringify(r2.converted));
    const why = (cls) => r2.notConverted.filter((r) => r.cls === cls).map((r) => r.n + ' ' + r.why).join('; ');
    ok(/1 its profile is an IfcCircleProfileDef/.test(why('IfcBeam')) && /1 unequal-leg angle/.test(why('IfcMember')) && why('IfcWall').startsWith('1 ') && why('IfcSlab').startsWith('1 ') && r2.notConverted.length === 4, tag + 'reported, not dropped: round bar, unequal angle, wall, slab');
    ok(r2.warnings.some((w) => /1 member had clipped ends/.test(w)), tag + 'the clipped beam is said in the report');
    ok(JSON.stringify(s2.levels) === JSON.stringify([{ name: 'Ground', z: 0 }, { name: 'First', z: 3600 }]), tag + 'storeys → levels Ground 0, First 3600');
    ok(JSON.stringify(s2.grids) === JSON.stringify({ x: [{ label: '1', at: 1000 }, { label: '2', at: 7000 }], y: [{ label: 'A', at: 2000 }, { label: 'B', at: 7000 }] }), tag + 'grid axes → grids 1, 2 at x 1000, 7000; A, B at y 2000, 7000 (building placed at 1000, 2000)');
    const m = (nm) => s2.members.find((x) => x.name === nm);
    const vEq = (a, b) => a.every((v, i) => near(v, b[i], 0.01));
    ok(m('B-A') && m('B-A').profile === 'IPE300' && m('B-A').position === 'top' && vEq(m('B-A').start, [1000, 2000, 3600]) && vEq(m('B-A').end, [7000, 2000, 3600]) && m('B-A').material === 'S355', tag + 'B-A: IPE300 from the catalog, top of steel on its line 1000,2000,3600 → 7000,2000,3600, S355');
    const pw = s2.profiles.find((p) => p.name === 'WELDED 500x250');
    ok(m('B-B')?.profile === 'WELDED 500x250' && pw && near(pw.d, 500, 1e-6) && near(pw.bf, 250, 1e-6) && near(pw.tw, 10, 1e-6) && near(pw.tf, 20, 1e-6), tag + 'B-B: not in the catalog → custom I profile 500 × 250, web 10, flanges 20');
    ok(m('B-1')?.profile === 'IPE300' && vEq(m('B-1').start, [1000, 2000, 3450]) && vEq(m('B-1').end, [1000, 7000, 3450]), tag + 'B-1 through an IfcMappedItem: IPE300 along Y, 5000 long');
    ok(m('B-2')?.profile === 'IPE300' && vEq(m('B-2').end, [7000, 7000, 3450]), tag + 'B-2 (boolean clipping): its extrusion');
    const fc = (mm) => G.frame(mm.start, mm.end, mm.rotation);
    const cA1 = m('C-A1'), cA2 = m('C-A2');
    ok(cA1?.profile === 'HEA200' && vEq(cA1.start, [1000, 2000, 0]) && vEq(cA1.end, [1000, 2000, 3600]) && G.dist(fc(cA1).v, [0, 1, 0]) < 1e-6, tag + 'C-A1: HEA200, depth along world Y as placed (rotation ' + cA1?.rotation + ')');
    ok(cA2?.profile === 'HEA200' && G.dist(fc(cA2).v, [-1, 0, 0]) < 1e-6, tag + 'C-A2: turned 90° in the file → depth along world X (rotation ' + cA2?.rotation + ')');
    const br = m('BR-1'), pl = s2.profiles.find((p) => p.name === 'L100x100x10');
    ok(br?.type === 'brace' && br.profile === 'L100x100x10' && pl?.kind === 'L' && near(pl.b, 100, 1e-6) && near(pl.t, 10, 1e-6) && vEq(br.start, [1000, 2000, 0]) && vEq(br.end, [7000, 2000, 3600]) && near(br.rotation, 0, 1e-6), tag + 'BR-1: IfcMember → brace, equal angle 100 × 10 (custom), 1000,2000,0 → 7000,2000,3600, legs as placed');
    const bp1 = m('BP-1'), bpp = bp1 && G.frame(bp1.start, bp1.end, bp1.rotation);
    // D11: the holes (made by IfcOpenShell: one placed relative to the plate, one in the storey) and the bolt
    const hb = bp1?.holes[0], ha = m('B-A')?.holes[0];
    const bpw = bp1 && G.toWorld(bpp, hb.x, hb.y, 0, 0);
    ok(bp1?.holes.length === 1 && hb.face === 'plate' && near(hb.d, 22, 0.05) && vEq(bpw, [1100, 2150, -10]), tag + 'BP-1: a Ø22 plate hole at (100, 150) from its center → world 1100, 2150', JSON.stringify(hb));
    ok(m('B-A')?.holes.length === 1 && ha.face === 'top' && near(ha.x, 500, 0.01) && near(ha.y, 40, 0.01) && near(ha.d, 18, 0.05), tag + 'B-A: a Ø18 top-flange hole 500 along it, 40 toward +y (u)', JSON.stringify(ha));
    const bl = s2.bolts[0];
    ok(s2.bolts.length === 1 && near(bl.d, 20, 0.05) && near(bl.length, 80, 0.05) && bl.grade === 'A325' && bl.kind === 'BOLT' && vEq(bl.head, [1100, 2150, 40]) && vEq(bl.axis, [0, 0, -1]), tag + 'a loose bolt Ø20 × 80 A325, head at 1100, 2150, 40 pointing down', JSON.stringify(bl));
    ok(bp1?.type === 'plate' && bp1.profile === 'PL20x300' && near(G.dist(bp1.start, bp1.end), 400, 0.01) && vEq(G.lerp(bp1.start, bp1.end, 0.5), [1000, 2000, -10]) && Math.abs(bpp.v[2]) > 0.999999, tag + 'BP-1: arbitrary rectangle 300 × 400 extruded 20 → PL20x300 × 400, flat, centered under A/1');
  }
  // 3. nothing dropped silently: per class, converted + reported = what IfcOpenShell counts in the file
  const PY = path.join(ROOT, 'tools/detailcraft-test/venv/bin/python');
  const samples = ['/var/www/CADCRAFT/testfiles/samples/AC20-FZK-Haus.ifc', '/var/www/CADCRAFT/testfiles/samples/Ifc2x3_Duplex_Architecture.ifc', '/var/www/CADCRAFT/testfiles/samples/Ifc4_SampleHouse.ifc'].filter((f) => fs.existsSync(f));
  if (!fs.existsSync(PY)) console.log('  (IfcOpenShell venv missing: python3 -m venv tools/detailcraft-test/venv && …/pip install ifcopenshell — class counts skipped)');
  else {
    for (const f of [path.join(FX, 'ios-steel-ifc2x3.ifc'), path.join(FX, 'ios-steel-ifc4-feet.ifc'), ...samples]) {
      const counts = JSON.parse(execFileSync(PY, ['-I', '-c', 'import sys, json, collections, ifcopenshell\nf = ifcopenshell.open(sys.argv[1])\nprint(json.dumps(collections.Counter(e.is_a() for e in f.by_type("IfcProduct") if e.is_a() not in ("IfcSite", "IfcBuilding", "IfcBuildingStorey", "IfcGrid"))))', f], { encoding: 'utf8' }));
      const { report: r3 } = await importIfc(W, api, fs.readFileSync(f));
      const ours = {};
      for (const [k, v] of Object.entries(r3.converted)) ours[k] = (ours[k] || 0) + v;
      for (const r of r3.notConverted) if (r.cls !== 'IfcGridAxis') ours[r.cls] = (ours[r.cls] || 0) + r.n;
      const keys = new Set([...Object.keys(counts), ...Object.keys(ours)]);
      const diff = [...keys].filter((k) => counts[k] !== ours[k]).map((k) => k + ' ' + counts[k] + '≠' + ours[k]);
      ok(!diff.length, path.basename(f) + ': every product IfcOpenShell finds (but site, building, storeys, grids) is brought in or reported (' + Object.values(counts).reduce((a, b) => a + b, 0) + ' in ' + keys.size + ' classes)', diff.join(', '));
    }
  }
  if (samples.length) {
    const { report: r4 } = await importIfc(W, api, fs.readFileSync(samples[0]));
    ok(r4.schema === 'IFC4' && r4.unit === 'metre' && r4.levels === 2 && (r4.converted.IfcBeam || 0) >= 1, 'AC20-FZK-Haus (another tool, metres): its extruded beam comes in; Brep beams and members are reported');
  }
}

// ---------------------------------------------------------------------------
section('Assistants and scripts: DetailCraft\'s live tools (X.12)');
{
  const AG = await load('agents.js');
  const { createDispatcher } = await load('host.js');
  let model = sampleModel(), sel = [], saved = 0, exported = [], downloaded = [];
  const cache = { v: -1 };
  const cur = () => { if (cache.v !== model.version || cache.m !== model) { cache.b = build(model.state); cache.k = Object.assign(Mk.markParts(cache.b), { footingMark: Mk.markFootings(model.state.footings) }); cache.v = model.version; cache.m = model; } return cache; };
  const app = {
    model: () => model, built: () => cur().b, marks: () => cur().k, selected: () => sel, select: (r) => { sel = r; return sel.length; }, busy: () => null,
    usd: async (format) => { const { steelUsd } = await load('usd-detailcraft.js'); const r = steelUsd(cur().b, cur().k, { format, name: 'frame' }); return { data: r.data, report: r.report, name: 'frame', type: 'model/vnd.usda' }; },
    download: (name, data) => { downloaded.push(name); },
    save: async () => { saved++; model.markSaved(); }, exports: Object.fromEntries(['ifc', 'nc', 'bom', 'bending', 'kiss', 'cutlist'].map((f) => [f, async () => { exported.push(f); }])),
  };
  let allowed = ['read'];
  const d = createDispatcher({ server: { name: 'detailcraft', title: 'DetailCraft', version: 'test' }, allowed: () => allowed });
  for (const def of AG.detailTools(app)) d.tool(def);
  const call = async (name, a = {}) => { const r = await d.call(name, a); return { r, v: r.structuredContent, text: r.content?.[0]?.text || '' }; };
  ok(d.list().map((t) => t.name).join() === 'app_info,model_describe,parts_list,problems_list,clash_check,selection_get', 'read: app_info, model_describe, parts_list, problems_list, clash_check, selection_get');
  allowed = ['read', 'edit', 'save', 'export'];
  ok(d.list().length === 13, 'with edit, save and export: 13 tools (0.7 AS.6: + usd_export)');
  allowed = ['read'];
  let x = await call('member_add', { type: 'beam', start: [0, 0, 0], end: [1000, 0, 0] });
  ok(x.r.isError && /edit permission/.test(x.text) && model.undoStack.length === 0, 'member_add refused without edit; nothing changes');
  x = await call('app_info');
  ok(x.v.app === 'detailcraft' && x.v.members === 11 && x.v.connections === 14 && x.v.footings === 7 && x.v.parts === 25 && x.v.problems === 0 && x.v.steelKg > 3000, 'app_info: the sample (11 members, 14 connections, 7 footings, 25 parts, ' + x.v.steelKg + ' kg)');
  x = await call('model_describe');
  ok(x.v.units === 'mm' && x.v.grids.numbered.length === 3 && x.v.levels.length === 2 && x.v.members.find((m) => m.type === 'column').count === 6 && x.v.connections.find((c) => c.type === 'baseplate').count === 6, 'model_describe: 3 numbered grids, 2 levels, 6 columns, 6 base plates');
  x = await call('parts_list', { type: 'column' });
  ok(x.v.total >= 1 && x.v.parts.every((p) => p.type === 'column' && p.profile === 'W12x50' && p.assemblies.length) && x.v.parts.reduce((t, p) => t + p.count, 0) === 6, 'parts_list type column: W12x50 marks counting 6, with their assembly marks');
  x = await call('parts_list', { limit: 5000 });
  ok(x.r.isError && /Invalid arguments/.test(x.text), 'a limit over 1000 is refused by the schema');
  x = await call('clash_check');
  ok(x.v.total === 6 && x.v.clashes.every((c) => c.a.part && c.b.part), 'clash_check: the sample brace\'s 6 clashes, with part marks');
  allowed = ['read', 'edit'];
  x = await call('selection_set', { marks: [cur().k.parts.find((p) => p.type === 'beam').mark] });
  ok(!x.r.isError && x.v.selected >= 1 && sel.every((r) => r.kind === 'member'), 'selection_set by part mark selects its members (' + x.v.selected + ')');
  x = await call('selection_get');
  ok(x.v.selected.length === sel.length && x.v.selected[0].type === 'beam' && x.v.selected[0].profile === 'W16x26', 'selection_get describes them');
  x = await call('selection_set', { refs: [{ kind: 'member', id: 'nope' }] });
  ok(x.r.isError && /Unknown/.test(x.text), 'an unknown ref is refused');
  const steps = model.undoStack.length;
  x = await call('member_add', { type: 'beam', profile: 'W16x26', start: [0, 7000, 4000], end: [6000, 7000, 4000] });
  ok(!x.r.isError && /^m\d+$/.test(x.v.id) && model.undoStack.length === steps + 1 && model.undoStack.at(-1).label === 'Assistant: add beam', 'member_add: one undo step "Assistant: add beam"');
  x = await call('member_add', { type: 'beam', profile: 'NOPE', start: [0, 0, 0], end: [1, 0, 0] });
  ok(x.r.isError && /Unknown profile/.test(x.text) && model.undoStack.length === steps + 1, 'an unknown profile is refused by the model; nothing changes');
  const brace = model.state.members.find((m) => m.type === 'brace').id;
  x = await call('connection_add', { type: 'gusset', members: [brace] });
  ok(!x.r.isError && x.v.added.length === 2 && model.undoStack.at(-1).label === 'Assistant: add gussets', 'connection_add gusset on the brace: 2 gussets, one step');
  x = await call('clash_check');
  ok(!x.v.clashes.some((c) => c.a.id === brace || c.b.id === brace), '… and the brace\'s clashes are gone');
  x = await call('connection_add', { type: 'gusset', members: [brace] });
  ok(x.r.isError && /Nowhere/.test(x.text), 'again: nowhere to add one');
  model.change('Person', (tx) => tx.renameModel ? tx.renameModel('X') : tx.addHole(brace, { face: 'web', x: 500, y: 0, d: 18 }));
  x = await call('undo');
  ok(x.r.isError && /person/.test(x.text), 'undo will not take back the person\'s step');
  model.undo();
  x = await call('undo', { steps: 2 });
  ok(x.v.undone.join('|') === 'Assistant: add gussets|Assistant: add beam' && model.undoStack.length === steps, 'undo × 2: the gussets, then the beam (the assistant\'s steps only)');
  allowed = ['read', 'edit', 'save', 'export'];
  x = await call('model_export', { format: 'nc' });
  ok(!x.r.isError && exported.join() === 'nc', 'model_export nc: the app\'s own export');
  x = await call('usd_export', {});
  ok(!x.r.isError && x.v.format === 'usda' && x.v.downloaded === 'frame.usda' && downloaded.join() === 'frame.usda' && x.v.report.parts > 0, 'usd_export: the steel model as OpenUSD (a download without a path)', x.v);
  x = await call('usd_export', { path: 'frame.usda' });
  ok(x.r.isError && /Studio/.test(x.text), 'usd_export with a path needs Studio (no folder grant in the browser)');
  x = await call('usd_export', { format: 'usdc', path: 'frame.usda' });
  ok(x.r.isError, 'usd_export: the file name must match the format');
  x = await call('model_save');
  ok(!x.r.isError && saved === 1 && x.v.unsaved === false, 'model_save: the app\'s own Save');
  const all = [];
  for (const t of d.list()) { try { all.push(await d.call(t.name, { bogus: 1 })); } catch (e) { all.push(null); } }
  ok(all.every((r) => r && (r.isError || r.structuredContent)), 'no tool ever throws (bad arguments come back as error results)');
}

// view cube (docs/apps/viewcube.md): byte-identical copies of ModelCraft's modules, and the Corner indicator setting
section('view cube copies');
{
  const canon = path.join(APP, '../../modelcraft/dev');
  if (fs.existsSync(canon)) for (const f of ['viewcube.js', 'viewcube-three.js']) {   // a one-app clone has no ModelCraft (0.8)
    const mine = path.join(APP, f);
    ok(fs.existsSync(mine) && fs.readFileSync(mine).equals(fs.readFileSync(path.join(canon, f))), `detailcraft ${f} is byte-identical to modelcraft/dev/${f}`);
  }
  const inc = fs.readFileSync(path.join(APP, 'settings.inc'), 'utf8');
  const en = JSON.parse(fs.readFileSync(path.join(APP, 'lang/en.json'), 'utf8'));
  ok(['cube', 'axes', 'none'].every((v) => inc.includes(`value="${v}"`)) && /Lang::e\('settings\.corner\.legend'\)/.test(inc) && en['settings.corner.legend'] === 'Corner indicator', 'settings.inc offers Corner indicator (from the language file): View cube | Axis icon | None');
}

console.log('\n' + pass + ' passed, ' + fail + ' failed' + (KEEP ? ' (files in ' + OUT + ')' : ''));
if (!KEEP) fs.rmSync(OUT, { recursive: true, force: true });
process.exit(fail ? 1 : 0);
