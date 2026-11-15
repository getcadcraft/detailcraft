/* SPDX-License-Identifier: Apache-2.0 */
/**
 * problems-detailcraft.js — DetailCraft's checks as shared Problems (0.7.1 → 0.8; spec docs/0.8-PROBLEMS-SPEC.md § Migration). No DOM:
 * bin/test-problems.mjs runs it in Node. detailcraft.js hands the results to the shell's window.ccProblems (manifest "problems").
 *
 *   dcProblems(built, state, { strings, labelOf }) → [problem]   build.js's problems ({ ref, text, hard }) in the shared shape
 *   anchorOf(state, ref) → [x, y, z] | null                       where a ⚠ marker sits: a member's middle, a connection's joint, a footing's
 *                                                                  top centre, a stair's start (mm, model axes)
 *   cleanAcceptedDc(list)                                         the file's `problems.accepted` (model.js), the same rules as the core's cleanAccepted
 *
 * The connection generators still hand back finished sentences (connections.js, rebar.js, stair.js: t(key, vars)). Until they hand back
 * { key, vars } (the spec's migration step), the code and numbers are found again by matching the sentence against the page's own
 * templates (`strings` = the language catalog): the code is the language-free key, so an acceptance survives a change of language, and
 * the numbers give "required vs found". A sentence no template matches still gets a stable code (text.<hash>).
 */

// which numbers of a message are "found" and which the limit, by key: [found var | null, op, required var(s)]
const MEASURES = {
  'conn.warn.e1': ['e', '>=', 'min'], 'conn.warn.e2': ['e', '>=', 'min'], 'conn.warn.st-e2': ['e', '>=', 'min'],
  'conn.warn.pitch': ['pitch', '>=', 'min'], 'conn.warn.gauge': ['gauge', '>=', 'min'], 'conn.warn.rod-edge': [null, '>=', 'min'],
  'conn.warn.web-plate-wide': ['w', '<=', 'clear'], 'conn.warn.web-beam-wide': ['bf', '<=', 'clear'], 'conn.warn.st-tab-deep': ['l', '<=', 'clear'],
  'conn.warn.sp-edge': ['e', '>=', 'min'], 'conn.warn.sp-gauge': ['g', '>=', 'min'], 'conn.warn.sp-gauge-edge': ['e', '>=', 'min'],
  'conn.warn.sp-web-deep': ['h', '<=', 'clear'], 'conn.warn.gu-toe': ['e', '>=', 'min'], 'conn.warn.lug-grout': ['d', '>=', 'g'],
  'conn.warn.washer-projection': [null, '>=', 'min'], 'conn.warn.mi-out-row': [null, '>=', 'min'],
  'rebar.warn.clear': [null, '>=', 'min'], 'rebar.warn.hooks': ['need', '<=', 'room'],
  'stair.prob.riser': ['r', 'between', [102, 178]], 'stair.prob.going': ['g', '>=', 279], 'stair.prob.blondel': ['v', 'between', [600, 650]],
};
const NOTES = new Set(['stair.prob.blondel', 'conn.warn.sp-turned', 'conn.warn.mi-twisted']);   // worth a look, not wrong
const PREFIXES = ['conn.warn.', 'conn.err.', 'build.err.', 'rebar.warn.', 'stair.prob.'];

const reEsc = (s) => s.replace(/[.*+?^${}()|[\]\\]/g, '\\$&');
let cache = { strings: null, list: [] };
/** The catalog's problem templates as regular expressions (once per catalog). */
function templates(strings) {
  if (cache.strings === strings) return cache.list;
  const list = [];
  for (const [key, tpl] of Object.entries(strings || {})) {
    if (typeof tpl !== 'string' || !PREFIXES.some((p) => key.startsWith(p))) continue;
    const names = [];
    const src = tpl.split(/(\{[A-Za-z_][A-Za-z0-9_]*\})/).map((part) => {
      const m = /^\{([A-Za-z_][A-Za-z0-9_]*)\}$/.exec(part);
      if (m) { names.push(m[1]); return '(.*?)'; }
      return reEsc(part.replace(/\{\{/g, '{').replace(/\}\}/g, '}'));
    }).join('');
    list.push({ key, names, re: new RegExp('^' + src + '$', 's'), fixed: tpl.replace(/\{[^}]*\}/g, '').length });
  }
  list.sort((a, b) => b.fixed - a.fixed);   // the most specific template first
  cache = { strings, list };
  return list;
}
/** A finished sentence → { key, vars } (numbers as numbers) or null. */
export function codeOf(text, strings) {
  for (const t of templates(strings)) {
    const m = t.re.exec(text);
    if (!m) continue;
    const vars = {};
    t.names.forEach((n, i) => { const v = m[i + 1], x = Number(v); vars[n] = v !== '' && Number.isFinite(x) ? x : v; });
    return { key: t.key, vars };
  }
  return null;
}
function hash(s) { let h = 2166136261; for (let i = 0; i < s.length; i++) { h ^= s.charCodeAt(i); h = Math.imul(h, 16777619); } return (h >>> 0).toString(36); }

const refOf = (id) => (!id ? null : /^m/.test(id) ? { kind: 'member', id } : /^j/.test(id) ? { kind: 'conn', id } : /^f/.test(id) ? { kind: 'footing', id } : /^s/.test(id) ? { kind: 'stair', id } : null);

export function dcProblems(built, state, { strings = {}, labelOf = null } = {}) {
  const out = [], seen = new Map();
  for (const x of built?.problems || []) {
    const ref = refOf(x.ref);
    const c = codeOf(String(x.text || ''), strings);
    const code = c ? c.key : 'text.' + hash(String(x.text || ''));
    const p = { code, severity: x.hard ? 'error' : NOTES.has(code) ? 'note' : 'warning', text: String(x.text || ''), about: ref ? [{ ...ref, ...(labelOf ? { label: labelOf(ref) || '' } : {}) }] : [], source: { name: 'detailcraft.' + (code.split('.')[0] || 'build') } };
    if (c) {
      p.msg = { key: c.key, vars: c.vars };
      const m = MEASURES[c.key];
      if (m) {
        const [fv, op, rv] = m, unit = 'mm';
        const req = Array.isArray(rv) ? rv : typeof rv === 'number' ? rv : c.vars[rv];
        if (typeof req === 'number' || Array.isArray(req)) p.req = { op, value: req, unit };
        if (fv && typeof c.vars[fv] === 'number') p.found = { value: c.vars[fv], unit };
      }
    }
    // the same message twice on one object (two stiffeners with no room): one problem with a count in its id
    const k = code + '|' + (x.ref || '');
    const n = (seen.get(k) || 0) + 1;
    seen.set(k, n);
    if (n > 1) p.part = String(n);
    out.push(p);
  }
  return out;
}

const mid = (a, b) => [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2, (a[2] + b[2]) / 2];
const endOf = (m, which) => (m ? (which === 'start' ? m.start : m.end) : null);
export function anchorOf(state, ref) {
  if (!ref || !state) return null;
  const mem = (id) => (state.members || []).find((m) => m.id === id) || null;
  if (ref.kind === 'member') { const m = mem(ref.id); return m ? mid(m.start, m.end) : null; }
  if (ref.kind === 'footing') { const f = (state.footings || []).find((q) => q.id === ref.id); return f ? [f.x, f.y, Number(f.top) || 0] : null; }
  if (ref.kind === 'stair') { const s = (state.stairs || []).find((q) => q.id === ref.id); return s ? [s.x, s.y, Number(s.z) || 0] : null; }
  if (ref.kind === 'conn') {
    const c = (state.connections || []).find((q) => q.id === ref.id);
    if (!c) return null;
    if (c.beam) return endOf(mem(c.beam), c.end) ? [...endOf(mem(c.beam), c.end)] : null;
    if (c.brace) return endOf(mem(c.brace), c.end) ? [...endOf(mem(c.brace), c.end)] : null;
    if (c.a) return endOf(mem(c.a), c.aEnd) ? [...endOf(mem(c.a), c.aEnd)] : null;
    if (c.column) { const m = mem(c.column); return m ? [...(m.start[2] <= m.end[2] ? m.start : m.end)] : null; }
  }
  return null;
}

const CTRL = new RegExp('[\\u0000-\\u001f\\u007f\\u2028\\u2029\\u202a-\\u202e\\u2066-\\u2069]', 'g');
const str = (v, max) => (typeof v === 'string' || typeof v === 'number' ? String(v).replace(CTRL, ' ').replace(/\s+/g, ' ').trim().slice(0, max) : '');
/** The file's accepted list (untrusted) — the same rules as problems.js cleanAccepted (bin/test-problems.mjs compares them). */
export function cleanAcceptedDc(list) {
  const out = [], seen = new Set();
  for (const r of (Array.isArray(list) ? list : []).slice(0, 5000)) {
    if (!r || typeof r !== 'object') continue;
    const id = str(r.id, 240);
    if (!id || seen.has(id)) continue;
    seen.add(id);
    const date = typeof r.date === 'string' && /^\d{4}-\d{2}-\d{2}(T[\d:.]+Z?)?$/.test(r.date) ? r.date.slice(0, 30) : '';
    out.push({ id, by: str(r.by, 80), reason: str(r.reason, 500), date, fp: str(r.fp, 16) });
  }
  return out;
}
