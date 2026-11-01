/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rule keys and problem codes; the words the person reads come from the language file (erect.* / auto.*) */
/**
 * autopilot.js — connection autopilot (0.8 round 2, EG.73). No DOM: bin/test-detailcraft.mjs and tools/detailcraft-test/test-autopilot.mjs run it in Node.
 *
 *   propose(state, opts) → proposal      every joint that has no connection yet, with the connection to put there and why
 *   apply(tx, proposal) → ids            adds them in the open change (one undo step for the whole lot)
 *   autopilotProblems(proposal) → [problem]   the joints it left for the person, in the shared Problems shape
 *
 * opts = { moment: [beam ids]            beams whose ends are moment connections (end plates); everything else is a simple shear connection
 *          reactionKN: { beamId: kN } | number   the end shear of each beam, when known
 *          uniformKNm: number            or a uniform load on every beam (kN per metre): end shear = w·L/2 (statics)
 *          mitres: true                  also put mitres where two members meet end to end at an angle (off: a mitre is the person's choice)
 *          grade: 'A325' | 'A490' }
 *
 * What it is: the starting values a detailer would pick, from the shapes and (when given) the end shear — not a connection design.
 * DetailCraft checks no connection strength (connections.js header), and neither does this. Where an end shear is given the bolt count
 * comes from the bolt's single-shear design strength φ·Fnv·Ab (AISC 360-16 J3.6, Table J3.2: φ = 0.75; Fnv = 372 MPa for A325-N and
 * 457 MPa for A490-N, threads in the shear plane); that count is checked only against how many bolts FIT. Bearing, block shear, plate and
 * weld strength, and the column's side, are the engineer's. The proposal says so on every line.
 */
import { getProfile } from './profiles.js';
import { SHEARTAB_DEFAULTS, ENDPLATE_DEFAULTS, BASEPLATE_DEFAULTS, GUSSET_DEFAULTS, SPLICE_DEFAULTS, MITRE_DEFAULTS, findJoints, freeSplices, freeBraceEnds, freeMitres, isBeamEnd, dg1Row } from './connections.js';

const FNV = { A325: 372, A490: 457 };   // MPa, threads in the shear plane (AISC 360-16 Table J3.2)
const PHI = 0.75;
const up = (v, step) => Math.ceil(v / step - 1e-9) * step;
const dist = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1], a[2] - b[2]);

/** One bolt's single-shear design strength in kN. */
export function boltShearKN(boltD, grade = 'A325') {
  const fnv = FNV[grade] || FNV.A325;
  return PHI * fnv * (Math.PI * boltD * boltD / 4) / 1000;
}
/** Bolt diameter by the beam's depth: 16 to 250 mm, 20 to 450, 22 to 700, then 24. */
export function boltFor(depth) { return depth <= 250 ? 16 : depth <= 450 ? 20 : depth <= 700 ? 22 : 24; }
const holeFor = (d) => d + (d >= 24 ? 3 : 2);

const sec = (m, custom) => { const p = getProfile(m.profile, custom); return p ? { d: p.d ?? p.depth, bf: p.bf ?? p.width, tw: p.tw ?? 8, tf: p.tf ?? 12, r: p.r ?? 0, depth: p.depth, width: p.width, kind: p.kind } : null; };

/** The end shear of a beam (kN) from the options, or null when none is known. */
function reactionOf(beam, opts) {
  const r = opts.reactionKN;
  if (typeof r === 'number' && r > 0) return r;
  if (r && Number(r[beam.id]) > 0) return Number(r[beam.id]);
  if (Number(opts.uniformKNm) > 0) return Number(opts.uniformKNm) * dist(beam.start, beam.end) / 1000 / 2;
  return null;
}

/** A shear tab for a beam end: bolts in one column, as many as the end shear needs and the web depth takes. */
export function sizeShearTab(beam, opts, custom) {
  const s = sec(beam, custom);
  if (!s) return null;
  const boltD = boltFor(s.d), edge = boltD >= 22 ? 45 : 38, pitch = 75;
  const clear = s.d - 2 * (s.tf + s.r);                      // the straight part of the web
  const maxRows = Math.max(1, Math.floor((clear - 2 * edge) / pitch) + 1);
  const R = reactionOf(beam, opts);
  const per = boltShearKN(boltD, opts.grade);
  const need = R == null ? Math.max(2, Math.min(maxRows, Math.round((clear - 2 * edge) / 150) + 1)) : Math.max(2, Math.ceil(R / per));
  const fits = need <= maxRows;
  const rows = Math.min(need, maxRows);
  return { fits, need, maxRows, R, per, params: { ...SHEARTAB_DEFAULTS, boltD, hole: holeFor(boltD), edge, pitch, rows, tp: Math.max(8, Math.min(16, 2 * Math.round(boltD / 4))), grade: opts.grade || 'A325' } };
}
/** An end plate: as wide as the beam's flange (rounded up to 10); rows of two bolts, four rows at least, more when the end shear needs them and the depth takes them. */
export function sizeEndPlate(beam, opts, custom) {
  const s = sec(beam, custom);
  if (!s) return null;
  const boltD = boltFor(s.d), pitch = 75;
  const R = reactionOf(beam, opts);
  const per = boltShearKN(boltD, opts.grade);
  const maxRows = Math.max(2, Math.floor((s.d - 2 * 40) / pitch) + 1);
  const wanted = Math.max(4, R == null ? 4 : 2 * Math.ceil(R / per / 4));   // two bolts a row
  const rows = Math.min(maxRows - (maxRows % 2), wanted);
  return { fits: wanted <= maxRows - (maxRows % 2), need: wanted, maxRows, R, per, params: { ...ENDPLATE_DEFAULTS, boltD, hole: holeFor(boltD), pitch, rows: Math.max(2, rows), tp: Math.max(16, up(boltD, 2)), width: Math.max(150, up(s.bf, 10)), gauge: Math.max(90, Math.round((s.bf * 0.55) / 5) * 5), grade: opts.grade || 'A325' } };
}
/** A base plate: the column's footprint plus 75 mm each way (rounded up to 25), rods inside it. */
export function sizeBasePlate(col, custom) {
  const s = sec(col, custom);
  if (!s) return null;
  const length = Math.max(300, up(s.depth + 150, 25)), width = Math.max(300, up(s.width + 150, 25));
  const rodD = s.depth >= 400 ? 24 : 20;
  const row = dg1Row(rodD);
  const tp = s.depth >= 400 ? 32 : 25;
  return { ...BASEPLATE_DEFAULTS, length, width, tp, rodD, hole: row ? Math.round(row.hole) : BASEPLATE_DEFAULTS.hole, sx: length - 100, sy: width - 100 };
}

/** Columns that stand on the ground side: no other column ends where this one starts. */
function baseColumns(state) {
  const cols = state.members.filter((m) => m.type === 'column' && Math.abs(m.start[0] - m.end[0]) < 1 && Math.abs(m.start[1] - m.end[1]) < 1);
  return cols.filter((c) => {
    const low = c.start[2] <= c.end[2] ? c.start : c.end;
    return !cols.some((o) => o !== c && Math.abs(o.start[0] - low[0]) < 1 && Math.abs(o.start[1] - low[1]) < 1 && Math.max(o.start[2], o.end[2]) >= low[2] - 1 && Math.min(o.start[2], o.end[2]) < low[2] - 1);
  });
}

export function propose(state, opts = {}) {
  const custom = state.customProfiles || [];
  const byId = new Map(state.members.map((m) => [m.id, m]));
  const moment = new Set(opts.moment || []);
  const items = [], left = [];
  const note = (about, code, vars) => left.push({ about: [{ kind: 'member', id: about }], code, vars });
  const taken = new Set(state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
  for (const j of findJoints(state)) {
    if (taken.has(j.beam + ':' + j.end)) continue;
    const beam = byId.get(j.beam);
    const wantsMoment = moment.has(j.beam);
    if (wantsMoment && j.face !== 'flange') { note(j.beam, 'moment-face', { face: j.face }); }
    let size, type;
    if (wantsMoment && j.face === 'flange') { type = 'endplate'; size = sizeEndPlate(beam, opts, custom); }
    else { type = 'sheartab'; size = sizeShearTab(beam, opts, custom); }
    if (!size) { note(j.beam, 'no-profile', {}); continue; }
    if (!size.fits) {
      if (type === 'sheartab' && j.face === 'flange') {   // too much shear for the web depth: the end plate takes more bolts
        const alt = sizeEndPlate(beam, opts, custom);
        if (alt?.fits) { items.push({ conn: { type: 'endplate', beam: j.beam, end: j.end, column: j.column, params: alt.params }, about: j.beam, rule: 'upgrade', vars: { rows: alt.params.rows, kn: Math.round(size.R), need: size.need, max: size.maxRows } }); continue; }
      }
      note(j.beam, 'no-fit', { kn: Math.round(size.R || 0), need: size.need, max: size.maxRows, type });
      continue;
    }
    items.push({ conn: { type, beam: j.beam, end: j.end, column: j.column, params: size.params }, about: j.beam, rule: size.R == null ? type + '-geom' : type + '-shear', vars: { rows: size.params.rows, boltD: size.params.boltD, kn: size.R == null ? 0 : Math.round(size.R), per: Math.round(size.per * 10) / 10 } });
  }
  const based = new Set(state.connections.filter((c) => c.type === 'baseplate').map((c) => c.column));
  for (const c of baseColumns(state)) {
    if (based.has(c.id)) continue;
    const params = sizeBasePlate(c, custom);
    if (!params) { note(c.id, 'no-profile', {}); continue; }
    items.push({ conn: { type: 'baseplate', column: c.id, params }, about: c.id, rule: 'baseplate', vars: { length: params.length, width: params.width, tp: params.tp, rodD: params.rodD } });
  }
  for (const j of freeSplices(state)) items.push({ conn: { type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b, params: { ...SPLICE_DEFAULTS } }, about: j.a, rule: 'splice', vars: {} });
  for (const j of freeBraceEnds(state)) items.push({ conn: { type: 'gusset', brace: j.brace, end: j.end, support: j.support, params: { ...GUSSET_DEFAULTS } }, about: j.brace, rule: 'gusset', vars: {} });
  if (opts.mitres) {   // a mitre is a design choice (a knee, a ridge): only when asked for, and never on an end that already has its connection here
    const used = new Set(items.filter((i) => i.conn.beam).map((i) => i.conn.beam + ':' + i.conn.end));
    for (const j of freeMitres(state)) if (!used.has(j.a + ':' + j.aEnd) && !used.has(j.b + ':' + j.bEnd)) items.push({ conn: { type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd, params: { ...MITRE_DEFAULTS } }, about: j.a, rule: 'mitre', vars: {} });
  }
  const counts = {};
  for (const i of items) counts[i.conn.type] = (counts[i.conn.type] || 0) + 1;
  return { items, left, counts, opts: { grade: opts.grade || 'A325', moment: [...moment], uniformKNm: opts.uniformKNm || 0, withShear: items.some((i) => i.rule.endsWith('-shear') || i.rule === 'upgrade') } };
}

/** Adds the proposal in the open change; returns the new connection ids. */
export function apply(tx, proposal) { return proposal.items.map((i) => tx.addConnection(i.conn)); }

/** The joints left for the person, as Problems (notes: nothing is wrong yet, a joint is waiting). */
export function autopilotProblems(proposal, { labelOf = (id) => id, t = null } = {}) {
  const say = (key, vars, fb) => (t ? t(key, vars) : fb);
  const source = { kind: 'engine', name: 'detailcraft.autopilot' };
  return proposal.left.map((l, i) => {
    const vars = { mark: labelOf(l.about[0].id), ...l.vars };
    const key = 'auto.prob.' + l.code;
    return { id: 'auto:' + l.code + ':' + l.about[0].id + ':' + i, code: 'auto.' + l.code, severity: 'note', msg: { key, vars }, about: l.about.map((a) => ({ ...a, label: vars.mark })), source,
      text: say(key, vars, l.code === 'no-fit' ? `${vars.mark}: ${vars.kn} kN needs ${vars.need} bolts; ${vars.max} fit in the web.` : l.code === 'moment-face' ? `${vars.mark} is marked moment but meets the column's ${vars.face}: no end plate fits.` : `${vars.mark}: no section to size a connection from.`) };
  });
}
