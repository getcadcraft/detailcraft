/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — plan data and problem codes; the words the person reads come from the page's language file (erection-ui.js) */
/**
 * erection.js — the erection plan behind the erection movie (0.8 round 2, EG.72). No DOM: bin/test-detailcraft.mjs runs it in Node.
 *
 *   picks(state, built, marks) → [pick]            what the crane lifts, one pick per assembly (a beam with its end plates, a column with
 *                                                   its base plate, a stair): weight, where it is set, its boxes for drawing
 *   sequence(state, built, marks, ps) → [pick]     the same picks in erection order: phases first, then tier by tier (columns, then the beams
 *                                                   they carry, braces, plates, stairs), never a part before what carries it
 *   capacityAt(chart, radiusM) → kg                the chart's capacity at a radius (conservative, see below)
 *   plan(state, built, marks, setup) → plan        the picks with their crane, radius, load, share of the chart, hook height and times
 *   erectionProblems(plan) → [problem]             the shared Problems shape (docs/0.8-PROBLEMS-SPEC.md § 1), source kind engine
 *   movieData(plan) → data                  what the movie player draws (erection-html.js): plain JSON, mm
 *
 * setup = { cranes: [{ id, name, at: [x, y] (mm, the slew centre), chart: [{ radius (m), kg }], hookHeight (mm, the highest the hook goes),
 *                      deductKg (hook block and rigging the chart does not already take off), speed (m/min the load travels),
 *                      hookMin, setMin, releaseMin (minutes per pick) }],
 *           laydown: [x, y] | null (mm, where members are picked up; null = beside the crane, `laydownGap` away),
 *           laydownGap (mm), riggingPct (percent added for slings, bolts and weld metal), headroom (mm, the sling stands above a member),
 *           limit (0–1, the share of the chart a pick may use; the rest is the safety margin the person chooses), clearance (mm) }
 *
 * Nothing here is a lift plan. The numbers are the person's chart and the model's weights (gross: holes and copes are not deducted, bolts
 * are covered by the rigging percentage); a lift plan is the rigger's and the crane operator's.
 *
 * The chart: rows (radius, kg) are read as a load chart is: the capacity listed for a radius holds out to that radius, so a load at a radius
 * between two rows gets the capacity of the FARTHER row (never interpolated upwards); inside the first row the first row's capacity
 * holds; beyond the last row the crane cannot lift at all. The radius that counts is the larger of the pick-up and the set radius.
 */
import { mainOf, membersOf } from './connections.js';

const TYPE_RANK = { column: 0, stringer: 3, beam: 1, brace: 2, plate: 4 };
const r1 = (v) => Math.round(v * 10) / 10;
const r2 = (v) => Math.round(v * 100) / 100;
const dist2 = (a, b) => Math.hypot(a[0] - b[0], a[1] - b[1]);

export const SETUP_DEFAULTS = Object.freeze({ laydownGap: 6000, riggingPct: 5, headroom: 1500, limit: 0.85, clearance: 500 });
export const CRANE_DEFAULTS = Object.freeze({ speed: 20, hookMin: 4, setMin: 8, releaseMin: 2, deductKg: 0 });

/** A model with no crane entered: the setup the panel starts from (the person fills the chart in; nothing here stands for a real crane). */
export function emptySetup() { return { cranes: [], laydown: null, ...SETUP_DEFAULTS }; }

/** A chart row list cleaned: numbers only, sorted by radius, a capacity that does not rise with radius. */
export function cleanChart(rows) {
  const out = [];
  for (const r of Array.isArray(rows) ? rows : []) {
    const radius = Number(r?.radius), kg = Number(r?.kg);
    if (Number.isFinite(radius) && Number.isFinite(kg) && radius > 0 && radius <= 500 && kg >= 0 && kg <= 5e6) out.push({ radius, kg });
  }
  out.sort((a, b) => a.radius - b.radius);
  for (let i = 1; i < out.length; i++) if (out[i].kg > out[i - 1].kg) out[i] = { radius: out[i].radius, kg: out[i - 1].kg };
  return out.slice(0, 200);
}

export function capacityAt(chart, radiusM) {
  if (!chart?.length || !(radiusM >= 0)) return 0;
  if (radiusM > chart[chart.length - 1].radius + 1e-9) return 0;
  for (const row of chart) if (radiusM <= row.radius + 1e-9) return row.kg;   // the first row at or beyond the radius
  return 0;
}

export function cleanCrane(c, i = 0) {
  const at = Array.isArray(c?.at) && c.at.length >= 2 && c.at.slice(0, 2).every(Number.isFinite) ? [Number(c.at[0]), Number(c.at[1])] : [0, 0];
  const num = (v, d, lo, hi) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };
  return {
    id: String(c?.id || 'c' + (i + 1)).slice(0, 40), name: String(c?.name || '').slice(0, 80), at, chart: cleanChart(c?.chart),
    hookHeight: num(c?.hookHeight, 0, 0, 500000), deductKg: num(c?.deductKg, CRANE_DEFAULTS.deductKg, 0, 5e6),
    speed: num(c?.speed, CRANE_DEFAULTS.speed, 0.5, 600), hookMin: num(c?.hookMin, CRANE_DEFAULTS.hookMin, 0, 600),
    setMin: num(c?.setMin, CRANE_DEFAULTS.setMin, 0, 6000), releaseMin: num(c?.releaseMin, CRANE_DEFAULTS.releaseMin, 0, 600),
  };
}

export function cleanSetup(s) {
  const num = (v, d, lo, hi) => { const n = Number(v); return Number.isFinite(n) && n >= lo && n <= hi ? n : d; };
  const ld = Array.isArray(s?.laydown) && s.laydown.length >= 2 && s.laydown.slice(0, 2).every(Number.isFinite) ? [Number(s.laydown[0]), Number(s.laydown[1])] : null;
  return {
    cranes: (Array.isArray(s?.cranes) ? s.cranes : []).slice(0, 8).map(cleanCrane), laydown: ld,
    laydownGap: num(s?.laydownGap, SETUP_DEFAULTS.laydownGap, 0, 200000), riggingPct: num(s?.riggingPct, SETUP_DEFAULTS.riggingPct, 0, 100),
    headroom: num(s?.headroom, SETUP_DEFAULTS.headroom, 0, 50000), limit: num(s?.limit, SETUP_DEFAULTS.limit, 0.1, 1),
    clearance: num(s?.clearance, SETUP_DEFAULTS.clearance, 0, 50000),
  };
}

/** The boxes a part is drawn as: its centre line, its section's width and depth, and the section's turn (mm). */
function boxOf(p) {
  const f = p.frame, w = p.profile?.width ?? p.profile?.bf ?? 100, d = p.profile?.depth ?? p.profile?.d ?? 100;
  const o = f.o, x = f.x;
  const a = o, b = [o[0] + x[0] * f.len, o[1] + x[1] * f.len, o[2] + x[2] * f.len];
  return { a, b, u: f.u, v: f.v, w, d, voff: p.voff || 0, type: p.type };
}

/** What the crane lifts: one pick per assembly. */
export function picks(state, built, marks) {
  const groups = new Map();
  for (const p of built.parts) {
    const main = marks.asmOf?.get(p.id) || p.id;
    (groups.get(main) || groups.set(main, []).get(main)).push(p);
  }
  const out = [];
  for (const [mainId, parts] of groups) {
    const main = built.byId.get(mainId) || parts[0];
    const bx = parts.map(boxOf);
    const pts = bx.flatMap((b) => [b.a, b.b]);
    const lo = [0, 1, 2].map((i) => Math.min(...pts.map((q) => q[i]))), hi = [0, 1, 2].map((i) => Math.max(...pts.map((q) => q[i])));
    const weight = parts.reduce((t, q) => t + q.weight, 0);
    // the centre of gravity of the assembly: weight-weighted centres of its parts (bolts and welds add to the rigging percentage, not here)
    const cg = [0, 1, 2].map((i) => parts.reduce((t, q, k) => t + q.weight * (bx[k].a[i] + bx[k].b[i]) / 2, 0) / (weight || 1));
    out.push({
      id: mainId, mark: marks.asmMark?.get(mainId) || marks.partMark?.get(mainId) || mainId, type: main.type, member: main.member || null, stair: main.stair || null,
      profile: main.profileName, phase: main.phase || 1, parts: parts.map((q) => q.id), weight, cg, lo, hi, boxes: bx,
    });
  }
  return out;
}

/** What each pick has to wait for (pick ids): the member that carries it. */
function supports(state, ps) {
  const pickOfMember = new Map();
  for (const k of ps) for (const pid of k.parts) pickOfMember.set(pid, k.id);
  const memberPick = (mid) => pickOfMember.get(mid) || null;
  const deps = new Map(ps.map((k) => [k.id, new Set()]));
  const add = (k, mid) => { const s = memberPick(mid); if (s && s !== k) deps.get(k)?.add(s); };
  for (const c of state.connections) {
    const main = memberPick(mainOf(c));
    if (!main) continue;
    if (c.type === 'endplate' || c.type === 'sheartab') add(main, c.column);
    else if (c.type === 'gusset') add(memberPick(c.brace), c.support);
    else if (c.type === 'splice' || c.type === 'mitre') {
      // the upper one waits for the lower one; level pieces: the second named waits for the first
      const A = state.members.find((m) => m.id === c.a), B = state.members.find((m) => m.id === c.b);
      if (A && B) { const za = Math.min(A.start[2], A.end[2]), zb = Math.min(B.start[2], B.end[2]); if (zb > za + 1) add(memberPick(B.id), A.id); else if (za > zb + 1) add(memberPick(A.id), B.id); else add(memberPick(B.id), A.id); }
    }
  }
  return deps;
}

/** The picks in the order they are erected. */
export function sequence(state, built, marks, ps = picks(state, built, marks)) {
  const levels = [...(state.levels || [])].map((l) => l.z).sort((a, b) => a - b);
  const tol = 50;
  // tier = the storey a pick belongs to: a column by where it starts, anything else by the storey it sits on top of
  const tierOf = (k) => {
    if (k.type === 'column') return Math.max(0, levels.filter((z) => z <= k.lo[2] + tol).length - 1);
    return Math.max(0, levels.filter((z) => z < k.cg[2] - tol).length - 1);
  };
  const key = (k) => [k.phase, tierOf(k), TYPE_RANK[k.type] ?? 5, k.cg[0], k.cg[1], k.id];
  const cmp = (a, b) => { const x = key(a), y = key(b); for (let i = 0; i < x.length; i++) if (x[i] !== y[i]) return x[i] < y[i] ? -1 : 1; return 0; };
  const deps = supports(state, ps);
  const left = new Set(ps.map((k) => k.id)), done = new Set(), out = [];
  const byId = new Map(ps.map((k) => [k.id, k]));
  const sorted = [...ps].sort(cmp);
  while (out.length < ps.length) {
    let next = sorted.find((k) => !done.has(k.id) && [...deps.get(k.id)].every((d) => done.has(d)));
    if (!next) next = sorted.find((k) => !done.has(k.id));   // a loop of supports: take the lowest, the plan flags it
    done.add(next.id); left.delete(next.id); out.push(next);
  }
  out.deps = deps; out.byId = byId;
  return out;
}

/** The erection plan for a crane setup. */
export function plan(state, built, marks, setupIn) {
  const setup = cleanSetup(setupIn);
  const ps = sequence(state, built, marks);
  const deps = ps.deps;
  const issues = [];
  const cranes = setup.cranes.filter((c) => c.chart.length);
  const result = { setup, cranes: setup.cranes, picks: [], issues, assumptions: [], summary: null };
  if (!cranes.length) { issues.push({ code: 'erect.nocrane' }); result.summary = summaryOf([], 0); return result; }
  const free = new Map(cranes.map((c) => [c.id, 0]));
  const finish = new Map();
  const order = new Map(ps.map((k, i) => [k.id, i]));
  const laydownFor = (c) => setup.laydown || [c.at[0] + setup.laydownGap, c.at[1]];
  for (const k of ps) {
    const setAt = [k.cg[0], k.cg[1]];
    const load0 = k.weight * (1 + setup.riggingPct / 100);
    const checks = cranes.map((c) => {
      const ld = laydownFor(c);
      const rPick = dist2(c.at, ld) / 1000, rSet = dist2(c.at, setAt) / 1000;
      const radius = Math.max(rPick, rSet);
      const cap = capacityAt(c.chart, radius);
      const load = load0 + c.deductKg;
      const hookNeed = k.hi[2] + setup.headroom + setup.clearance;
      return { crane: c, rPick, rSet, radius, cap, load, util: cap > 0 ? load / cap : Infinity, hookNeed, hookOk: !c.hookHeight || hookNeed <= c.hookHeight, reach: radius <= c.chart[c.chart.length - 1].radius + 1e-9, ld };
    });
    const ok = checks.filter((x) => x.cap > 0 && x.util <= setup.limit && x.hookOk);
    const pick = ok[0] || [...checks].sort((a, b) => (a.reach === b.reach ? a.util - b.util : a.reach ? -1 : 1))[0];
    const c = pick.crane;
    const travel = (Math.hypot(pick.ld[0] - setAt[0], pick.ld[1] - setAt[1], 0) + Math.max(0, k.hi[2] - 0)) / 1000;   // a straight lift and carry, metres
    const minutes = c.hookMin + travel / c.speed + c.setMin + c.releaseMin;
    const ready = Math.max(0, ...[...deps.get(k.id)].map((d) => finish.get(d) ?? 0));
    const start = Math.max(free.get(c.id), ready);
    const end = start + minutes;
    free.set(c.id, end); finish.set(k.id, end);
    const status = !pick.reach || pick.cap <= 0 ? 'out' : pick.util > 1 ? 'over' : pick.util > setup.limit ? 'high' : !pick.hookOk ? 'hook' : 'ok';
    const early = [...deps.get(k.id)].some((d) => order.get(d) > order.get(k.id) || (ps[order.get(d)]?.phase ?? 0) > k.phase);
    const loose = (k.type === 'beam' || k.type === 'brace') && !state.connections.some((cn) => membersOf(cn).includes(k.member));
    result.picks.push({
      n: result.picks.length + 1, id: k.id, mark: k.mark, type: k.type, profile: k.profile, phase: k.phase, weight: k.weight, load: pick.load, crane: c.id,
      pickAt: pick.ld, setAt, cg: k.cg, top: k.hi[2], rPick: pick.rPick, rSet: pick.rSet, radius: pick.radius, capacity: pick.cap, util: pick.util,
      hookNeed: pick.hookNeed, boxes: k.boxes, hookMin: c.hookMin, travelMin: travel / c.speed, status, start, end, minutes, wait: deps.size ? [...deps.get(k.id)] : [], early,
    });
    if (loose) issues.push({ code: 'erect.loose', pick: k.id });
  }
  for (const p of result.picks) if (p.status !== 'ok') issues.push({ code: 'erect.' + p.status, pick: p.id });
  result.summary = summaryOf(result.picks, cranes.length);
  result.assumptions = ['weights-gross', 'chart-conservative', 'radius-larger', 'not-a-lift-plan'];
  return result;
}

function summaryOf(list, nCranes) {
  const heavy = list.reduce((a, p) => (!a || p.weight > a.weight ? p : a), null);
  const tight = list.reduce((a, p) => (!a || p.util > a.util ? p : a), null);
  return {
    picks: list.length, cranes: nCranes, minutes: list.reduce((t, p) => Math.max(t, p.end), 0), totalKg: list.reduce((t, p) => t + p.weight, 0),
    heaviest: heavy ? { id: heavy.id, mark: heavy.mark, kg: heavy.weight } : null, tightest: tight && Number.isFinite(tight.util) ? { id: tight.id, mark: tight.mark, util: tight.util } : null,
    over: list.filter((p) => p.status === 'over' || p.status === 'out' || p.status === 'hook').length, high: list.filter((p) => p.status === 'high').length,
  };
}

/** The plan's trouble in the shared Problems shape (spec § 1). `labelOf(id)` names a pick; ids are stable: erect:<code>:<pick>. */
export function erectionProblems(pl, { labelOf = (id) => pl.picks.find((p) => p.id === id)?.mark || id, t = null } = {}) {
  const out = [];
  const say = (key, vars, fallback) => (t ? t(key, vars) : fallback);
  const source = { kind: 'engine', name: 'detailcraft.erection' };
  if (pl.issues.some((i) => i.code === 'erect.nocrane')) {
    out.push({ id: 'erect:nocrane', code: 'erect.nocrane', severity: 'note', msg: { key: 'erect.prob.nocrane', vars: {} }, text: say('erect.prob.nocrane', {}, 'No crane with a load chart is entered.'), about: [], source });
    return out;
  }
  for (const p of pl.picks) {
    const about = [{ kind: 'member', id: p.id, label: labelOf(p.id) }];
    const vars = { mark: labelOf(p.id), kg: Math.round(p.weight), load: Math.round(p.load), r: r1(p.radius), cap: Math.round(p.capacity), pct: Math.round(p.util * 100), limit: Math.round(pl.setup.limit * 100), hook: Math.round(p.hookNeed / 10) / 100 };
    if (p.status === 'out') out.push({ id: 'erect:out:' + p.id, code: 'erect.out', severity: 'error', msg: { key: 'erect.prob.out', vars }, text: say('erect.prob.out', vars, `${vars.mark} is at ${vars.r} m: past the end of the crane's chart.`), about, source, req: { op: '<=', value: pl.cranes.find((c) => c.id === p.crane)?.chart.at(-1)?.radius ?? 0, unit: 'm' }, found: { value: r1(p.radius), unit: 'm' } });
    else if (p.status === 'over') out.push({ id: 'erect:over:' + p.id, code: 'erect.over', severity: 'error', msg: { key: 'erect.prob.over', vars }, text: say('erect.prob.over', vars, `${vars.mark}: ${vars.load} kg at ${vars.r} m is over the chart's ${vars.cap} kg.`), about, source, req: { op: '<=', value: Math.round(p.capacity), unit: 'kg' }, found: { value: Math.round(p.load), unit: 'kg' } });
    else if (p.status === 'high') out.push({ id: 'erect:high:' + p.id, code: 'erect.high', severity: 'warning', msg: { key: 'erect.prob.high', vars }, text: say('erect.prob.high', vars, `${vars.mark} uses ${vars.pct}% of the chart (limit ${vars.limit}%).`), about, source, req: { op: '<=', value: Math.round(pl.setup.limit * 100), unit: 'pct' }, found: { value: Math.round(p.util * 100), unit: 'pct' } });
    else if (p.status === 'hook') out.push({ id: 'erect:hook:' + p.id, code: 'erect.hook', severity: 'error', msg: { key: 'erect.prob.hook', vars }, text: say('erect.prob.hook', vars, `${vars.mark} needs the hook ${vars.hook} m up: higher than the crane's.`), about, source, req: { op: '<=', value: pl.cranes.find((c) => c.id === p.crane)?.hookHeight / 1000, unit: 'm' }, found: { value: vars.hook, unit: 'm' } });
    if (p.early) out.push({ id: 'erect:order:' + p.id, code: 'erect.order', severity: 'warning', msg: { key: 'erect.prob.order', vars }, text: say('erect.prob.order', vars, `${vars.mark} is set before what carries it.`), about, source });
  }
  for (const i of pl.issues) if (i.code === 'erect.loose') {
    const vars = { mark: labelOf(i.pick) };
    out.push({ id: 'erect:loose:' + i.pick, code: 'erect.loose', severity: 'note', msg: { key: 'erect.prob.loose', vars }, text: say('erect.prob.loose', vars, `${vars.mark} has no connection to carry it: it needs temporary support.`), about: [{ kind: 'member', id: i.pick, label: vars.mark }], source });
  }
  return out;
}

/** What the movie player draws: the phases' picks in order with their routes, the boxes, the cranes (plain JSON, mm, z up). */
export function movieData(pl, { title = '' } = {}) {
  const members = [];
  for (const p of pl.picks) {
    for (const b of p.boxes || []) members.push({ pick: p.n, type: b.type, a: b.a.map(Math.round), b: b.b.map(Math.round), u: b.u, v: b.v, w: Math.round(b.w), d: Math.round(b.d), voff: Math.round(b.voff) });
  }
  return {
    format: 'cadcraft-erection', version: 1, title,
    cranes: pl.cranes.map((c) => ({ id: c.id, name: c.name, at: c.at, hookHeight: c.hookHeight, chart: c.chart })),
    picks: pl.picks.map((p) => ({
      n: p.n, mark: p.mark, type: p.type, profile: p.profile, phase: p.phase, kg: Math.round(p.weight), crane: p.crane, from: p.pickAt.map(Math.round), to: p.setAt.map(Math.round),
      top: Math.round(p.top), radius: r1(p.radius), cap: Math.round(p.capacity), pct: Number.isFinite(p.util) ? Math.round(p.util * 100) : null, status: p.status,
      t0: Math.round(p.start * 100) / 100, t1: Math.round(p.end * 100) / 100, h: r2(p.hookMin), tr: r2(p.travelMin), cg: p.cg.map(Math.round),
    })),
    members, minutes: pl.summary.minutes,
  };
}
