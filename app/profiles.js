/* SPDX-License-Identifier: Apache-2.0 */
/**
 * profiles.js — steel profile catalogs and parametric section shapes. No DOM.
 *
 * The catalog is the canonical section table shapes/sections.js (a byte-identical copy of lib/shapes/sections.js, kept in
 * step by tools/shapes/sync.mjs; 0.5 MQ.3): every size copied from a published table and cross-checked row by row
 * (bin/test-shapes.mjs, and bin/test-detailcraft.mjs for the catalog here). Its header says which table each family comes
 * from and how each is drawn:
 *   AISC — "AISC Shapes Database v16.0": W, S, C, equal-leg L, HSS (rectangular, square, round) and Pipe, US units.
 *   EN   — EN 10365:2017: IPE, HEA, HEB, UPN, mm.
 *   UK   — the Blue Book: UB, UC, PFC, EA, UEA, SHS, RHS, CHS (hot finished), CFSHS, CFRHS, CFCHS (cold formed), mm.
 * Angles carry b (the leg along u) and, when the legs differ, h (the leg along v): members, holes, IFC and NC files use both.
 * The 45 sizes DetailCraft listed before the shared table (LEGACY below) resolve exactly as they did. A model saved before
 * a size joined the catalog may carry a custom profile of that name: it still opens, and the model's own profile wins.
 * Plates (PL<t>x<w>) are parametric: any thickness and width. Users can add custom parametric profiles.
 *
 * Model units are millimeters. Sections live in the (u, v) plane: v is "up" (the depth), u across.
 * Every outline is centered on its bounding box.
 */

import { t } from './i18n.js';
import { sectionRows, findSection, outline, exactArea, bbox, shoelace, loopLength, STEEL_DENSITY } from './shapes/sections.js';

export { outline, exactArea, bbox, shoelace, loopLength, STEEL_DENSITY };

export const SOURCES = {
  aisc: 'AISC Shapes Database v16.0',   // i18n-ignore (a published table's title)
  en: 'EN 10365:2017',
  uk: 'Steel for Life Blue Book (UK)',   // i18n-ignore (a published table's title)
  get param() { return t('prof.source.param'); },
  get custom() { return t('prof.source.custom'); },
};

/** The catalog before the shared table (0.4): these names always mean the catalog size, never a model's custom profile. */
const LEGACY = new Set(['W8X10', 'W8X31', 'W10X33', 'W10X49', 'W12X26', 'W12X40', 'W12X50', 'W14X22', 'W14X30', 'W14X90', 'W16X26',
  'W16X31', 'W18X35', 'W21X44', 'W24X55', 'C8X11.5', 'C10X15.3', 'C12X20.7', 'L3X3X1/4', 'L4X4X3/8', 'L4X4X1/2', 'L5X5X1/2',
  'L6X6X1/2', 'HSS4X4X1/4', 'HSS6X4X1/4', 'HSS6X6X1/4', 'HSS8X8X3/8', 'HSS8X8X1/2', 'HSS4.500X0.237', 'HSS6.625X0.280', 'IPE100',
  'IPE160', 'IPE200', 'IPE240', 'IPE300', 'IPE360', 'IPE400', 'HEA160', 'HEA200', 'HEA240', 'HEA300', 'HEB160', 'HEB200', 'HEB240',
  'HEB300']);
export const isLegacyName = (name) => LEGACY.has(String(name).trim().toUpperCase());

function build() {
  const out = new Map();
  for (const p of sectionRows()) out.set(p.name.toUpperCase(), p);
  return out;
}

export const CATALOG = build();

const NAMES_BY_FAMILY = new Map();   // the picker is rebuilt on every selection: 2,311 sizes, so do not walk them per family each time
for (const p of CATALOG.values()) { if (!NAMES_BY_FAMILY.has(p.family)) NAMES_BY_FAMILY.set(p.family, []); NAMES_BY_FAMILY.get(p.family).push(p.name); }

/** Catalog groups for pickers: [{label, source, names[]}] in a sensible order. */
export function catalogGroups(custom = []) {
  const groups = [
    [t('prof.group.w'), 'W'], [t('prof.group.c'), 'C'], [t('prof.group.l'), 'L'], ['HSS', 'HSS'],
    ['IPE', 'IPE'], ['HEA', 'HEA'], ['HEB', 'HEB'],
    [t('prof.group.s'), 'S'], [t('prof.group.pipe'), 'Pipe'], ['UPN', 'UPN'],
    ...['UB', 'UC', 'PFC', 'EA', 'UEA', 'SHS', 'RHS', 'CHS', 'CFSHS', 'CFRHS', 'CFCHS'].map((f) => [f, f]),
  ].map(([label, fam]) => {
    const names = NAMES_BY_FAMILY.get(fam);
    const src = CATALOG.get(names[0].toUpperCase()).source;
    return { label, source: SOURCES[src], names };
  });
  if (custom.length) groups.push({ label: t('prof.group.custom'), source: SOURCES.custom, names: custom.map((c) => c.name) });
  return groups;
}

const PL_RE = /^PL\s*(\d+(?:\.\d+)?)\s*[xX*]\s*(\d+(?:\.\d+)?)$/;
/** "PL20x200" = 20 mm thick, 200 mm wide. */
export function plateName(t, w) { return 'PL' + num(t) + 'x' + num(w); }
const num = (v) => String(Number(Number(v).toFixed(2)));

export const CUSTOM_KINDS = {
  I: ['d', 'bf', 'tw', 'tf', 'r'],
  C: ['d', 'bf', 'tw', 'tf'],
  L: ['b', 't'],
  RHS: ['h', 'b', 't'],
  CHS: ['D', 't'],
  FLAT: ['b', 't'],
};

/**
 * Checks a custom profile definition (untrusted: from a file or a form). Returns { ok, profile | error }.
 * `saved`: it comes from a model file, which may predate a catalog size of that name (allowed unless it is a LEGACY name).
 */
export function cleanCustom(c, { saved = false } = {}) {
  if (!c || typeof c !== 'object') return { ok: false, error: t('prof.err.not-profile') };
  const name = String(c.name || '').replace(/[\u0000-\u001f\u007f]/g, '').trim().slice(0, 40);
  if (!name) return { ok: false, error: t('prof.err.name') };
  if ((CATALOG.has(name.toUpperCase()) && (!saved || LEGACY.has(name.toUpperCase()))) || PL_RE.test(name)) return { ok: false, error: t('prof.err.catalog-name', { name }) };
  const kind = String(c.kind || '');
  if (!CUSTOM_KINDS[kind]) return { ok: false, error: t('prof.err.shape', { kind }) };
  const p = { name, kind, family: 'custom', source: 'custom' };
  for (const k of CUSTOM_KINDS[kind]) {
    const v = Number(c[k]);
    if (!Number.isFinite(v) || v < 0 || v > 5000 || (k !== 'r' && v === 0)) return { ok: false, error: t('prof.err.size', { name: k }) };
    p[k] = v;
  }
  if (kind === 'I' || kind === 'C') {
    if (p.tw >= p.bf || 2 * p.tf >= p.d) return { ok: false, error: t('prof.err.web-flanges') };
    if (kind === 'I' && p.tw / 2 + p.r > p.bf / 2) return { ok: false, error: t('prof.err.fillet-flange') };
    if (kind === 'I' && 2 * (p.tf + p.r) >= p.d) return { ok: false, error: t('prof.err.fillet-depth') };
  }
  const dn = Number(c.density);   // 0.8 round 3: a profile of another material (a placed timber panel, EG.6) says its density in kg/m³
  if (c.density !== undefined && Number.isFinite(dn) && dn >= 100 && dn <= 8000) p.density = dn;
  if (kind === 'L' && p.t >= p.b) return { ok: false, error: t('prof.err.leg') };
  if (kind === 'RHS') { if (2 * p.t >= Math.min(p.h, p.b)) return { ok: false, error: t('prof.err.wall') }; p.ro = 2 * p.t; p.ri = p.t; }
  if (kind === 'CHS' && 2 * p.t >= p.D) return { ok: false, error: t('prof.err.wall') };
  return { ok: true, profile: p };
}

/** My profiles (kept in the browser for every new model): an untrusted stored list -> the valid, distinct entries, at most 200. */
export function cleanLibrary(raw) {
  const out = [];
  for (const c of Array.isArray(raw) ? raw : []) {
    const r = cleanCustom(c);
    if (r.ok && !out.some((x) => x.name.toUpperCase() === r.profile.name.toUpperCase())) out.push(r.profile);
    if (out.length >= 200) break;
  }
  return out;
}

/** Resolves a profile name against the catalog, plates and the model's custom profiles. Null if unknown. */
export function getProfile(name, custom = []) {
  if (typeof name !== 'string') return null;
  const key = name.trim().toUpperCase();
  const own = LEGACY.has(key) ? null : custom.find((x) => x.name.toUpperCase() === key);   // a model's own profile of a newer catalog name
  const cat = own ? null : CATALOG.get(key);
  if (cat) return withDerived(cat);
  const m = name.trim().match(PL_RE);
  if (m) {
    const t = Number(m[1]), w = Number(m[2]);
    if (t > 0 && w > 0 && t <= 500 && w <= 5000) return withDerived({ name: plateName(t, w), family: 'PL', kind: 'PL', source: 'param', t, b: w });
    return null;
  }
  const c = custom.find((x) => x.name.toUpperCase() === key);
  if (c) {
    const k = c.kind === 'FLAT' ? { ...c, kind: 'PL' } : c;
    return withDerived(k);
  }
  const alias = findSection(name);   // the way a UK size is written on drawings: "305x165x40 UB", "L100x100x10"
  return alias ? withDerived(CATALOG.get(alias.name.toUpperCase())) : null;
}

const derived = new WeakMap();
function withDerived(p) {
  if (derived.has(p)) return derived.get(p);
  const q = { ...p };
  q.loops = outline(q);
  q.area = exactArea(q);
  const rho = q.density || STEEL_DENSITY;
  q.mass = q.massPub ?? q.area * 1e-6 * rho;        // kg/m: published where there is one
  q.massFrom = q.massPub !== undefined ? SOURCES[q.source] : 'Area × ' + rho + ' kg/m³';
  const bb = bbox(q.loops[0]);
  q.width = bb.w; q.depth = bb.h;
  q.perimeter = loopLength(q.loops[0]);
  q.label = q.name;
  Object.freeze(q);
  if (Object.isFrozen(p)) derived.set(p, q);
  return q;
}

/** Which hole faces a profile has (see geom.js holeFrame). */
export function holeFaces(p) {
  if (!p) return [];
  if (p.kind === 'I' || p.kind === 'C') return ['web', 'top', 'bottom'];
  if (p.kind === 'RHS') return ['web', 'top', 'bottom'];
  if (p.kind === 'PL') return ['plate'];
  return [];
}

/** Thickness a hole on a face goes through. */
export function faceThickness(p, face) {
  if (p.kind === 'PL' || p.kind === 'L') return p.t;                // an angle's legs (connection holes only: 'bottom' = the leg along u, 'web' = along v)
  if (face === 'web') return p.kind === 'RHS' ? p.b : p.tw;
  if (p.kind === 'RHS') return p.t;
  return p.tf;
}

/** Profile summary in published units for the properties panel. */
export function describe(p) {
  const KIND = { I: 'i', C: 'c', L: 'l', RHS: 'rhs', CHS: 'chs', PL: 'pl' };
  const L = (k) => t('prof.row.' + k);
  const rows = [[L('shape'), KIND[p.kind] ? t('prof.kind.' + KIND[p.kind]) : p.kind]];
  const mm = (v) => Number(v.toFixed(1)) + ' mm';
  if (p.kind === 'I' || p.kind === 'C') rows.push([L('depth'), mm(p.d)], [L('flange-width'), mm(p.bf)], [L('web'), mm(p.tw)], [L('flange'), mm(p.tf)]);
  if (p.kind === 'I') rows.push([L('fillet'), mm(p.r) + (p.source === 'aisc' ? ' (kdes − tf)' : '')]);   // i18n-ignore (symbols)
  if (p.kind === 'L') rows.push([L('legs'), mm(p.h ?? p.b) + ' × ' + mm(p.b)], [L('thickness'), mm(p.t)]);
  if (p.kind === 'RHS') rows.push([L('size'), mm(p.h) + ' × ' + mm(p.b)], [L('wall'), mm(p.t)]);
  if (p.kind === 'CHS') rows.push([L('diameter'), mm(p.D)], [L('wall'), mm(p.t)]);
  if (p.kind === 'PL') rows.push([L('thickness'), mm(p.t)], [L('width'), mm(p.b)]);
  rows.push([L('area'), Number((p.area / 100).toFixed(2)) + ' cm²'], [L('mass'), Number(p.mass.toFixed(2)) + ' kg/m'], [L('from'), p.massPub !== undefined ? SOURCES[p.source] : SOURCES[p.source] || '']);
  return rows;
}
