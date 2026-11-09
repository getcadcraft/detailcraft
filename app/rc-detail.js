/* SPDX-License-Identifier: Apache-2.0 */
/**
 * rc-detail.js — DetailCraft's thin adapter over cc-rc (./rc/, a byte-identical copy of lib/rc by `node tools/rc/sync.mjs detailcraft`;
 * 0.9 RC.1, session rc-09): reinforced concrete beams, columns, slabs and walls with their bars, imported loose bars, the checks as shared
 * Problems (source `detailcraft.rebar`), and the bending schedule over the whole structure. No DOM: tools/rc/test.mjs runs it in Node.
 *
 *   cleanRc(j, uid)           → state.rc | null      the file's `rc` (untrusted): { settings, elements: [{ id, phase, …element }], loose: [{ id, …bar }] }
 *   rcBuild(state)            → { items: [{ el, res, checks }], loose: { groups, byGroup }, schedule: { rows, byElement }, byId, labels }
 *   mergeSchedule(foot, rc)   → the schedule detailcraft.js keeps: footing rows then the structure's rows (one table, one CSV, one total)
 *   rcProblems(rb, labelOf)   → [problem]                                  the checks that fail (and supports nobody gave), shared shape
 *   checkText(c)              → the check in words (rc.chk.<code>)
 *   barOf(name)               → a bar of rebar.js, or a size read from a file (Ø<d>)
 *   rcAnchor(state, ref)      → [x, y, z] where a ⚠ marker sits
 *   mergeInto(obj, patch)     → a deep merge (objects only; arrays and values replace)
 * State `rc` is optional (an older build drops the key; same file version 2), so every older model opens unchanged.
 */
import { BARS } from './rebar.js';
import { cleanElement, cleanSettings, elementBars, checkElement, bodyOf, SETTINGS_DEFAULTS, DEFAULTS, KINDS } from './rc/elements.js';
import { rcSchedule } from './rc/schedule.js';
import { cleanLoose, classify } from './rc/loose.js';
import { outDims, centerLength } from './rc/bars.js';
import { t } from './i18n.js';

export { SETTINGS_DEFAULTS, DEFAULTS, KINDS, cleanSettings as cleanSettingsRc };
export const MAX_ELEMENTS = 5000, MAX_LOOSE = 200000;

const custom = new Map();
/** A bar of the table, or one read from a file at a size the table does not have (named by its diameter). */
export function barOf(name) {
  if (BARS.has(name)) return BARS.get(name);
  const m = /^Ø(\d+(?:\.\d+)?)$/.exec(String(name || ''));
  if (!m) return null;
  if (!custom.has(name)) {
    const db = Number(m[1]), area = Math.PI * db * db / 4;
    custom.set(name, Object.freeze({ name, num: db, db, area, mass: area * 7850 * 1e-6, bendD: 4 * db, set: 'other', markPre: 'D' + Math.round(db), metric: name }));
  }
  return custom.get(name);
}
/** The bar map the engine reads (the table, plus any file sizes in use). */
const barsMap = { get: (n) => barOf(n), has: (n) => !!barOf(n), values: () => BARS.values() };

export function mergeInto(obj, patch) {
  const out = Array.isArray(obj) ? obj.slice() : { ...(obj || {}) };
  for (const [k, v] of Object.entries(patch || {})) out[k] = v && typeof v === 'object' && !Array.isArray(v) && obj && typeof obj[k] === 'object' && !Array.isArray(obj[k]) ? mergeInto(obj[k], v) : v;
  return out;
}

/** The words of an element's refusal (rc.err.<code>). */
export const errText = (r) => t('rc.err.' + r.code, r.vars || {});

/** One element, checked (throws the refusal in words). */
export function cleanOne(e) { const r = cleanElement(e, barsMap); if (!r.ok) throw new Error(errText(r)); return r.element; }

export function cleanRc(j, uid = (id, p) => id || p + '1') {
  if (!j || typeof j !== 'object') return null;
  const out = { settings: cleanSettings(j.settings), elements: [], loose: [] };
  const warnings = [];
  for (const e of (Array.isArray(j.elements) ? j.elements : []).slice(0, MAX_ELEMENTS)) {
    const r = cleanElement(e, barsMap);
    if (!r.ok) { warnings.push(errText(r)); continue; }
    const ph = Number(e.phase);
    out.elements.push({ id: uid(e.id, 'r'), phase: Number.isInteger(ph) && ph >= 1 && ph <= 999 ? ph : 1, ...r.element });
  }
  let dropped = 0;
  for (const b of (Array.isArray(j.loose) ? j.loose : []).slice(0, MAX_LOOSE)) {
    const c = cleanLoose(b, BARS);
    if (!c) { dropped++; continue; }
    if (!c.bar) c.bar = 'Ø' + Math.round(c.db * 10) / 10;
    out.loose.push({ id: uid(b.id, 'x'), ...c });
  }
  if (dropped) warnings.push(t('rc.warn.loose-dropped', { n: dropped }));
  out.warnings = warnings;
  return out.elements.length || out.loose.length || j.settings ? out : null;
}

/** Element labels: its name, else "Concrete beam 2" (numbered per kind in the model's order). */
export function rcLabels(rc) {
  const n = {}, out = new Map();
  for (const el of rc?.elements || []) { n[el.kind] = (n[el.kind] || 0) + 1; out.set(el.id, el.name || t('rc.label', { kind: t('rc.kind.' + el.kind), n: n[el.kind] })); }
  return out;
}

/** What a bar does, in words, for the schedule's "used for" column. */
export function roleText(el, g) {
  const base = g.role.replace(/:.*$/, '');
  if (el.kind === 'loose') return g.hostName ? t('rc.role.loose-in', { host: g.hostName }) : t('rc.role.loose');
  return t('rc.role.' + base) + ' (' + t('rc.kind.' + el.kind).toLowerCase() + ')';
}

/** Loose bars as groups (identical bars of one host together), for the schedule, the view and the IFC writer. */
export function looseGroups(list) {
  const groups = [], byKey = new Map();
  for (const b of list || []) {
    const bar = barOf(b.bar);
    if (!bar) continue;
    const shape = classify(b.pts);
    const dims = outDims(shape === 'T' || shape === 'K' || shape === 'S' || shape === 'L' || shape === 'U' ? shape : 'K', b.pts, bar, b.rc);
    const length = centerLength(b.pts, b.rc);
    const key = [b.bar, shape, b.mark || '', b.host?.guid || '', ...Object.values(dims).map((v) => Math.round(v)), Math.round(length)].join('|');
    let g = byKey.get(key);
    if (!g) { g = { role: 'loose', bar: b.bar, shape, dims, length, rc: b.rc, polys: [], ids: [], count: 0, mark: b.mark || '', hostName: b.host?.name || '', host: b.host || null }; byKey.set(key, g); groups.push(g); }
    g.polys.push(b.pts); g.ids.push(b.id); g.count++;
  }
  return groups;
}

export function rcBuild(state) {
  const rc = state.rc || null;
  const settings = rc ? rc.settings : cleanSettings({});
  const elements = rc?.elements || [];
  const ctx = { bars: barsMap, settings, elements, footings: state.footings || [] };
  const items = [], byId = new Map();
  for (const el of elements) {
    let res, checks;
    try { res = elementBars(el, ctx); checks = checkElement(el, res, ctx); }
    catch (e) { res = { groups: [], laps: [], anchors: [], body: bodyOf(el), info: {} }; checks = [{ id: 'build', code: 'build', clause: '', status: 'fail', severity: 'error', vars: { why: String(e.message || e).slice(0, 80) } }]; }
    const it = { el, res, checks };
    items.push(it); byId.set(el.id, it);
  }
  const loose = looseGroups(rc?.loose || []);
  const schedule = rcSchedule([...items.map((i) => ({ el: i.el, groups: i.res.groups })), ...(loose.length ? [{ el: { id: 'loose', kind: 'loose' }, groups: loose }] : [])], { bars: barsMap, barOf, roleLabel: roleText });
  return { items, loose, schedule, byId, settings, labels: rcLabels(rc) };
}

export function mergeSchedule(foot, rcs) {
  return { rows: [...foot.rows, ...rcs.schedule.rows], byFooting: foot.byFooting, byElement: rcs.schedule.byElement, footRows: foot.rows, rcRows: rcs.schedule.rows };
}

const r1 = (v) => (typeof v === 'number' ? Math.round(v * 10) / 10 : v);
/** A check in words. */
export function checkText(c) {
  const vars = { ...c.vars, clause: c.clause, found: r1(c.found?.value), req: r1(c.req?.value), unit: c.req?.unit === 'pct' ? '%' : c.req?.unit || '' };
  if (vars.role) vars.role = t('rc.role.' + String(vars.role).replace(/:.*$/, ''));
  if (vars.end !== undefined) vars.end = t(vars.end ? 'rc.end.end' : 'rc.end.start');
  if (vars.zone) vars.zone = t('rc.zone.' + vars.zone);
  if (vars.exposure) vars.exposure = t('rc.exposure.' + vars.exposure);
  if (vars.from) vars.from = t('rc.from.' + vars.from);
  if (vars.dir) vars.dir = vars.dir.toUpperCase();
  if (vars.kind) vars.kind = t('rc.lapkind.' + vars.kind);
  return t('rc.chk.' + c.code, vars);
}
/** The checks the Problems panel shows: failures, and anchorage nobody can check because the support is not known. */
export function rcProblems(rb, labelOf = (id) => rb.labels.get(id) || id) {
  const out = [];
  for (const { el, checks } of rb.items) {
    const label = labelOf(el.id);
    for (const c of checks) {
      if (c.status === 'ok' || (c.status === 'note' && c.code !== 'anchor-unknown')) continue;
      out.push({
        id: 'rc:' + el.id + ':' + c.id, code: 'rc.' + c.code, severity: c.status === 'note' ? 'note' : c.severity,
        msg: { key: 'rc.chk.' + c.code, vars: Object.fromEntries(Object.entries(c.vars || {}).filter(([, v]) => typeof v === 'number' || (typeof v === 'string' && v.length < 60))) },
        text: label + ': ' + checkText(c) + (c.clause ? ' (' + c.clause + ')' : ''),
        about: [{ kind: 'rc', id: el.id, label }], source: { kind: 'check', name: 'detailcraft.rebar' }, clause: c.clause,
        ...(c.req ? { req: c.req } : {}), ...(c.found ? { found: c.found } : {}),
      });
    }
  }
  return out;
}

export function rcAnchor(state, ref) {
  if (!ref || !state?.rc) return null;
  if (ref.kind === 'rcbar') { const b = state.rc.loose.find((x) => x.id === ref.id); return b ? b.pts[Math.floor(b.pts.length / 2)].slice() : null; }
  if (ref.kind !== 'rc') return null;
  const el = state.rc.elements.find((x) => x.id === ref.id);
  if (!el) return null;
  const B = bodyOf(el), [a, b, c] = B.size;
  return [0, 1, 2].map((i) => B.o[i] + B.ex[i] * a / 2 + B.ey[i] * b / 2 + B.ez[i] * c);
}
