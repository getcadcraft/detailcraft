/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file: a KISS file is a data format read by fabrication software; its codes and notes are the standard's. */
/**
 * kiss.js — the bill of materials as a KISS file for fabrication management software (0.4 D16). No DOM.
 *
 * Written to "The Keep It Simple Steel (KISS) Standard", SteelKiss.org / FabTrol Systems, updated March 2005 with the
 * enhancements for Version 1.1 (the published PDF, 21 pages): a comma-delimited ASCII file, extension .KSS, no line over
 * 254 characters, dates mm/dd/yy. Lines written, in this order:
 *   KISS,1.1,DetailCraft                         identification line
 *   H,job #,job name,,date,time,T|F,Final Bill    header; Metric T = metric size designations, F = imperial
 *   for each assembly mark (and its phase): the main part's D line (quantity = how many of the assembly), its W drawing
 *   line and M assembly line, S sequence lines (the phase, as the standard's sequence; quantities add up to the
 *   assembly's), L labor lines; then a D line per attached part mark (total quantity: per assembly × assemblies, as
 *   the standard asks), each with its labor
 *   loose bolts and anchor rods: D lines on drawing BOLTS, assembly mark FIELD (type HS, AB), shipped to site
 * D line (v1.1): drawing no, revision, assembly mark, part mark, quantity, type (W C L HSS PL FB MI HS AB), size,
 *   grade (≤ 8), length (mm, two decimals — the standard's unit whatever the Metric flag), finish, notes, part name,
 *   cost code, part weight (kg if metric, lb if imperial), net weight (left empty: DetailCraft does not take holes
 *   off), net area (plates: width × length, m² or sq ft).
 * Sizes: AISC shapes by their designation (W 16X26, HSS 6X6X.250 — wall in decimals as the standard shows), EN shapes
 *   by theirs (IPE300) under metric; plates thickness × width (mm, or inches to 1/16 under imperial); bolts
 *   diameter × length. The standard has no quoting: commas in text are replaced by spaces and each field is cut to
 *   its length. Labor (L): Holes (count per piece, diameter, thickness through), Copes (count, web cut, flange cut),
 *   Weld (welds per piece, length, size, Fillet) — sizes in mm with two decimals, as the standard says.
 *
 *   kissFile(state, built, marks, { metric, date, revs, job }) → { text, lines, counts, metric }
 *   kissMetric(built) → true when any part is not an AISC shape or a plate (the default for the Metric flag)
 * Imperial files convert DetailCraft's millimeter plates and bolts to the nearest 1/16 in (sizes only; lengths stay mm).
 */
import { assemblyGeometry } from './drawings.js';
import { boltList } from './marks.js';

const KG_LB = 2.20462262185;
const IN = 25.4;
const clean = (s, n) => String(s ?? '').replace(/[,\r\n\u0000-\u001f\u007f]/g, ' ').replace(/\s+/g, ' ').trim().slice(0, n);
const f2 = (v) => (Math.round(v * 100) / 100).toFixed(2);
const pad2 = (n) => String(n).padStart(2, '0');

/** Inches to a fraction string to 1/16: 12.375 → "12-3/8", 0.5 → "1/2", 3 → "3". */
export function inchFraction(inches, denom = 16) {
  let n = Math.round(inches * denom);
  const whole = Math.floor(n / denom);
  let num = n - whole * denom, den = denom;
  while (num && num % 2 === 0) { num /= 2; den /= 2; }
  if (!num) return String(whole);
  return (whole ? whole + '-' : '') + num + '/' + den;
}
const decWall = (s) => { const m = String(s).match(/^(\d+)\/(\d+)$/); const v = m ? Number(m[1]) / Number(m[2]) : Number(s); return Number.isFinite(v) ? v.toFixed(3).replace(/^0/, '') : s; };

export function kissMetric(built) {
  return built.parts.some((p) => !(p.profile.source === 'aisc' || p.profile.kind === 'PL'));
}

/** [type code, size string] for a part's profile. */
export function kissShape(profile, metric) {
  const p = profile, name = String(p.name).toUpperCase();
  if (p.kind === 'PL') {
    const t = p.t, w = p.b;
    return ['PL', metric ? f2c(t) + 'X' + f2c(w) : inchFraction(t / IN) + 'X' + inchFraction(w / IN)];
  }
  if (p.source === 'aisc') {
    const m = name.match(/^(W|S|C|L|HSS)(.*)$/);
    if (m) {
      if (m[1] === 'HSS') { const parts = m[2].split('X'); parts[parts.length - 1] = decWall(parts[parts.length - 1]); return ['HSS', parts.join('X')]; }
      return [m[1], m[2]];
    }
  }
  if (p.source === 'en') return [p.kind === 'C' ? 'C' : 'W', name];   // UPN is a channel
  if (p.source === 'uk') return [{ I: 'W', C: 'C', L: 'L', RHS: 'HSS', CHS: 'HSS' }[p.kind], name];
  return [{ I: 'MI', C: 'MI', L: 'MI', RHS: 'MI', CHS: 'MI' }[p.kind] || 'MI', name];
}
const f2c = (v) => String(Math.round(v * 100) / 100);
const grade = (g) => clean(String(g).replace(/\s+Gr\s+/i, '-').replace(/\s+/g, ''), 8);
const ROLE = { beam: 'Beam', column: 'Column', brace: 'Brace', plate: 'Plate' };
const ASM_TYPE = { beam: 'B', column: 'C', brace: 'BR', plate: 'P' };

export function kissFile(state, built, marks, { metric = kissMetric(built), date = new Date(), job = '', revs = null } = {}) {
  const lines = [];
  const counts = { D: 0, M: 0, W: 0, S: 0, L: 0 };
  const put = (...f) => { const l = f.map((x) => (x === undefined || x === null ? '' : String(x))).join(',').slice(0, 254); lines.push(l); counts[f[0]] = (counts[f[0]] || 0) + 1; };
  const d = date instanceof Date ? date : new Date(date);
  const mmddyy = pad2(d.getMonth() + 1) + '/' + pad2(d.getDate()) + '/' + pad2(d.getFullYear() % 100);
  const hhmmss = pad2(d.getHours()) + ':' + pad2(d.getMinutes()) + ':' + pad2(d.getSeconds());
  const jobNo = (clean(job || state.job || state.name, 50).replace(/[^A-Za-z0-9_-]/g, '').toUpperCase().slice(0, 8)) || 'JOB';
  const W = (kg) => f2(metric ? kg : kg * KG_LB);
  const area = (m2) => f2(metric ? m2 : m2 * 10.7639104167);
  put('KISS', '1.1', 'DetailCraft');
  put('H', jobNo, clean(state.name, 50), '', mmddyy, hhmmss, metric ? 'T' : 'F', 'Final Bill');

  /** Labor lines for one piece of this part. */
  const labor = (part) => {
    const holes = new Map();
    for (const h of part.holes) {
      const t = part.profile.kind === 'PL' ? part.profile.t : h.face === 'web' ? (part.profile.kind === 'RHS' ? part.profile.t * 2 : part.profile.tw) : (part.profile.kind === 'RHS' ? part.profile.t : part.profile.tf);
      const k = f2(h.d) + '|' + f2(t);
      holes.set(k, (holes.get(k) || 0) + 1);
    }
    for (const [k, n] of holes) { const [dd, t] = k.split('|'); put('L', 'Holes', n, dd, t, 'Round'); }
    for (const c of part.cuts.filter((x) => x.kind === 'cope')) put('L', 'Copes', 1, f2(c.depth), f2(c.length), clean('Cope ' + c.side + ' at ' + c.end, 40));
  };
  const weldsOf = (main) => built.welds.filter((w) => w.between.includes(main.id) || w.between.some((id) => marks.asmOf.get(id) === main.id));
  const dline = (dwg, rev, asm, mark, qty, part) => {
    const [type, size] = kissShape(part.profile, metric);
    put('D', clean(dwg, 30), clean(rev, 5), clean(asm, 16), clean(mark, 16), Math.round(qty), type, clean(size, 24), grade(part.material), f2(part.length), '', clean(part.role || ROLE[part.type], 40),
      clean(part.name || part.role || ROLE[part.type], 30), '', W(part.weight), '', part.profile.kind === 'PL' ? area(part.profile.b * part.length / 1e6) : '');
  };

  for (const a of marks.assemblies) {
    const main = built.byId.get(a.ids[0]);
    const G = assemblyGeometry(built, marks, a.ids[0]);
    const dwg = 'A-' + a.mark, rev = revs?.get?.(dwg) || '';
    dline(dwg, rev, a.mark, a.main, a.count, main);
    put('W', clean(dwg, 30), clean(rev, 5), clean('Assembly ' + a.mark, 30), mmddyy, 'DC');
    const [ex, eu, ev] = G.ext;
    put('M', clean(a.mark, 20), a.count, clean(ROLE[main.type] + ' ' + main.profileName, 30), ASM_TYPE[main.type], clean(ROLE[main.type] + ' assembly', 50), '', W(a.weight), '', f2(ex[1] - ex[0]), f2(ev[1] - ev[0]), f2(eu[1] - eu[0]));
    // sequences: the phases this assembly's instances are in
    const seq = new Map();
    for (const id of a.ids) { const ph = built.byId.get(id).phase || 1; seq.set(ph, (seq.get(ph) || 0) + 1); }
    for (const [ph, n] of [...seq].sort((x, y) => x[0] - y[0])) put('S', clean(String(ph), 10), n, clean('Phase ' + ph, 16));
    labor(main);
    const welds = new Map();
    for (const w of weldsOf(main)) { const k = f2(w.length || 0) + '|' + f2(w.size || 0); welds.set(k, (welds.get(k) || 0) + 1); }
    for (const [k, n] of welds) { const [len, size] = k.split('|'); put('L', 'Weld', n, len, size, 'Fillet'); }
    // attached parts by mark: total quantity
    const subs = new Map();
    for (const s of G.subs) { const m = marks.partMark.get(s.id); if (!subs.has(m)) subs.set(m, { part: s, n: 0 }); subs.get(m).n++; }
    for (const [m, { part, n }] of subs) { dline(dwg, rev, a.mark, m, n * a.count, part); labor(part); }
  }
  // loose bolts and anchor rods
  const bolts = boltList(built.bolts);
  bolts.forEach((b, i) => {
    const anchor = b.kind === 'ANCHORBOLT';
    const size = metric ? b.d + 'X' + b.length : inchFraction(b.d / IN) + 'X' + inchFraction(b.length / IN);
    put('D', 'BOLTS', '', 'FIELD', (anchor ? 'AB' : 'HS') + (i + 1), b.count, anchor ? 'AB' : 'HS', clean(size, 24), grade(b.grade), f2(b.length), '', anchor ? 'Anchor rod - Field' : 'Bolt - Field', anchor ? 'Anchor rod' : 'Bolt', '', '', '', '');
  });
  return { text: lines.join('\r\n') + '\r\n', lines, counts, metric, job: jobNo };
}

/** A strict reader for the tests: splits lines into fields and checks the standard's limits. Returns { records, problems }. */
export function readKiss(text) {
  const problems = [], records = [];
  const lines = String(text).split(/\r?\n/).filter((l) => l.length);
  if (!/^KISS,1\.[01](,|$)/.test(lines[0] || '')) problems.push('first line is not KISS,1.x');
  const LEN = { H: [1, 8, 50, 40, 8, 8, 1, 20], D: [1, 30, 5, 16, 16, 4, 3, 24, 8, 12, 24, 254, 30, 6, 10, 10, 10], M: [1, 20, 6, 30, 4, 50, 6, 10, 10, 10, 10, 10], W: [1, 30, 5, 30, 8, 8], S: [1, 10, 4, 16], L: [1, 15, 6, 12, 12, 40] };
  lines.forEach((l, i) => {
    if (l.length > 254) problems.push('line ' + (i + 1) + ' is longer than 254 characters');
    const f = l.split(',');
    records.push(f);
    const lim = LEN[f[0]];
    if (i && !lim && f[0] !== '*') problems.push('line ' + (i + 1) + ': unknown record ' + f[0]);
    if (lim) f.forEach((v, k) => { if (lim[k] !== undefined && v.length > lim[k]) problems.push('line ' + (i + 1) + ' field ' + (k + 1) + ' longer than ' + lim[k]); });
    if (f[0] === 'D' && (!f[1] || !f[3] || !f[4] || !/^\d+$/.test(f[5]) || !f[6] || !f[7] || !/^\d+\.\d\d$/.test(f[9]))) problems.push('line ' + (i + 1) + ': a required D field is missing or malformed');
    if (f[0] === 'H' && !/^[TF]$/.test(f[6])) problems.push('H line: Metric is not T or F');
    if (f[0] === 'H' && i !== 1) problems.push('the H line is not the second line');
  });
  return { records, problems };
}
