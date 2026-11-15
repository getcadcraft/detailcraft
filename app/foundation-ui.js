/* SPDX-License-Identifier: Apache-2.0 */
/**
 * foundation-ui.js — DetailCraft's Foundation tab (0.8 round 2, EG.5): the soil you describe, the column loads on each footing (typed, or taken from
 * the Analysis tab's support reactions), and foundation.js's checks with their clauses. An aid for an engineer to check.
 *
 *   mountFoundation(app) → { panel() → [nodes], problems() → [problem], check(footingId) }
 *   app = { getModel, edit(label, fn), print(text), rerender(), setProblems(list), label(id), select(ref), analysisResult() → { frame, sol } | null }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { readNum } from './numtext.js';
import { SOIL_DEFAULTS, checkFooting, toFootingAxes, flexibleMat, pileGroup, retainingWall } from './foundation.js';

const SET_KEYS = ['P', 'Vx', 'Vy', 'Mx', 'My'];
const base = (id) => id.replace(/-[xy]$/, '');

export function mountFoundation(app) {
  const model = () => app.getModel();
  const fnd = () => model().state.foundation || { soil: { ...SOIL_DEFAULTS }, loads: {} };
  const soil = () => ({ ...SOIL_DEFAULTS, ...fnd().soil });
  const save = (label, fn) => app.edit(label, (tx) => {
    const cur = JSON.parse(JSON.stringify(fnd()));
    fn(cur);
    tx.s.foundation = cur;
  });
  const again = (label, fn) => { save(label, fn); app.rerender(); };
  const cache = new Map();
  function check(id) {
    const m = model(), f = m.state.footings.find((x) => x.id === id), loads = fnd().loads[id];
    if (!f || !loads?.length) return null;
    const key = id + ':' + m.version;
    if (!cache.has(key)) { if (cache.size > 60) cache.clear(); cache.set(key, checkFooting(f, loads, soil())); }
    return cache.get(key);
  }
  const matCache = new Map();
  /** The footing taken as a plate on springs (0.8 round 3, EG.5): only when the person switched it on and gave a subgrade modulus. */
  function matCheck(id) {
    const m = model(), f = m.state.footings.find((x) => x.id === id), loads = fnd().loads[id];
    if (!f || !loads?.length || !fnd().mats?.[id]) return null;
    const key = id + ':' + m.version;
    if (!matCache.has(key)) { if (matCache.size > 8) matCache.clear(); matCache.set(key, flexibleMat(f, loads, soil())); }
    return matCache.get(key);
  }
  const wallsOf = () => (fnd().walls || []).map((w) => ({ w, r: retainingWall(w, w.soil) }));
  const pilesOf = () => (fnd().piles || []).map((g) => ({ g, r: pileGroup(g.piles, g.load, g.cap) }));
  const textOf = (c) => t('fnd.chk.' + base(c.id), { ...c.vars, dir: c.vars?.dir ? c.vars.dir.toUpperCase() : '', n: c.vars?.where && c.vars.where !== 'interior' ? c.vars.n + ' (' + t('fnd.where.' + c.vars.where) + ')' : c.vars?.n, status: t('fnd.status.' + c.status) });
  function problems() {
    const out = [];
    for (const f of model().state.footings) {
      const r = check(f.id);
      if (!r) continue;
      const label = app.label(f.id);
      for (const c of r.checks) {
        if (c.status !== 'fail' && !(c.id === 'liftoff')) continue;
        out.push({ id: 'fnd:' + c.id + ':' + f.id + (c.vars?.n ? ':' + c.vars.n : ''), code: 'fnd.' + base(c.id), severity: c.status === 'fail' ? 'error' : 'warning', msg: { key: 'fnd.chk.' + base(c.id), vars: c.vars },
          text: label + ': ' + textOf(c) + ' (' + c.clause + ')', about: [{ kind: 'footing', id: f.id, label }], source: { kind: 'engine', name: 'detailcraft.foundation' }, clause: c.clause,
          ...(Number.isFinite(c.ratio) && c.capacity ? { req: { op: '<=', value: Math.round(c.capacity * 100) / 100, unit: c.unit }, found: { value: Math.round(c.demand * 100) / 100, unit: c.unit } } : {}) });
      }
    }
    const push = (c, label, about, idKey) => {
      if (c.status !== 'fail') return;
      out.push({ id: 'fnd:' + c.id + ':' + idKey, code: 'fnd.' + base(c.id), severity: 'error', msg: { key: 'fnd.chk.' + base(c.id), vars: c.vars }, text: label + ': ' + textOf(c) + ' (' + c.clause + ')', about,
        source: { kind: 'engine', name: 'detailcraft.foundation' }, clause: c.clause,
        ...(Number.isFinite(c.ratio) && c.capacity ? { req: { op: '<=', value: Math.round(c.capacity * 100) / 100, unit: c.unit }, found: { value: Math.round(c.demand * 100) / 100, unit: c.unit } } : {}) });
    };
    for (const f of model().state.footings) {
      const r = matCheck(f.id);
      if (r) for (const c of r.checks) push(c, app.label(f.id), [{ kind: 'footing', id: f.id, label: app.label(f.id) }], f.id + (c.vars?.n ? ':' + c.vars.n : ''));
    }
    for (const { w, r } of wallsOf()) for (const c of r.checks) push(c, w.name, [], w.id);
    for (const { g, r } of pilesOf()) for (const c of r.checks) push(c, g.name, [], g.id);
    return out;
  }
  // ---- the Analysis reactions as loads ----
  function takeFromAnalysis(serviceKey, strengthKey) {
    const res = app.analysisResult?.();
    if (!res?.sol?.results) { app.print(t('fnd.err.noanalysis')); return; }
    const nodes = new Map(res.frame.model.nodes.map((n) => [n.id, n])), idx = new Map(res.frame.model.nodes.map((n, k) => [n.id, k]));
    let got = 0;
    const next = {};
    for (const f of model().state.footings) {
      const a = (f.rotation || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
      const list = [];
      for (const sp of res.frame.model.supports) {
        const n = nodes.get(sp.node);
        if (!n) continue;
        const dx = n.x - f.x, dy = n.y - f.y, lx = c * dx + s * dy, ly = -s * dx + c * dy;
        if (Math.abs(lx) > f.L / 2 + 1 || Math.abs(ly) > f.B / 2 + 1 || n.z < f.top - f.H - 1 || n.z > f.top + f.H) continue;
        const k = idx.get(sp.node), at = (key) => { const R = res.sol.results[key]; return R ? toFootingAxes(Array.from(R.reactions.subarray(6 * k, 6 * k + 6)), f.rotation || 0) : null; };
        const col = model().state.members.find((m) => m.type === 'column' && Math.hypot(m.start[0] - n.x, m.start[1] - n.y) < 2);
        const w = col ? colSize(col) : [300, 300];
        list.push({ x: Math.round(lx), y: Math.round(ly), cx: w[0], cy: w[1], ...(at(serviceKey) ? { service: at(serviceKey) } : {}), ...(at(strengthKey) ? { strength: at(strengthKey) } : {}) });
      }
      if (list.length) { next[f.id] = list; got += list.length; }
    }
    if (!got) { app.print(t('fnd.err.nosupports')); return; }
    again(t('fnd.undo.take'), (x) => { x.loads = { ...x.loads, ...next }; });
    app.print(t('fnd.took', { n: got }));
  }
  function colSize(col) {
    const p = app.profileSize?.(col.profile);
    return p || [300, 300];
  }
  // ---- the panel ----
  let fid = 0;
  const field = (text, input) => { input.id = input.id || 'dc-fn' + (++fid); return [el('label', { for: input.id }, text), input]; };
  const num = (value, onSet, lo = -Infinity, hi = Infinity) => {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(Math.round(value * 1000) / 1000), autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => { const r = readNum(i.value); if (!r.ok || r.value < lo || r.value > hi) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } i.removeAttribute('aria-invalid'); onSet(r.value); });
    return i;
  };
  const sel = { service: null, strength: null };
  function sets() {
    const res = app.analysisResult?.();
    if (!res?.sol?.results) return [];
    const model_ = res.frame.model;
    return Object.entries(res.sol.results).map(([k, R]) => ({ key: k, name: R.name || k, limit: k.startsWith('combo:') ? model_.combos.find((c) => 'combo:' + c.id === k)?.limit : null }));
  }
  function panel() {
    const out = [el('div', { className: 'dc-rep-head' }, el('h3', {}, t('fnd.title')))];
    out.push(el('p', { className: 'dc-note' }, t('fnd.intro')));
    const s = soil();
    const sf = (key, lo, hi) => num(s[key], (v) => again(t('fnd.undo.soil'), (x) => { x.soil = { ...SOIL_DEFAULTS, ...x.soil, [key]: v }; }), lo, hi);
    out.push(el('div', { className: 'dc-props' },
      ...field(t('fnd.qa'), sf('qa', 0, 1e5)), ...field(t('fnd.mu'), sf('mu', 0, 2)), ...field(t('fnd.fill'), sf('fill', 0, 1e5)), ...field(t('fnd.gamma-soil'), sf('gammaSoil', 5, 30)),
      ...field(t('fnd.fs-slide'), sf('fsSlide', 1, 10)), ...field(t('fnd.fs-ot'), sf('fsOt', 1, 10)), ...field(t('fnd.fy'), sf('fy', 200, 700)),
      ...field(t('fnd.es'), sf('Es', 0, 1e4)), ...field(t('fnd.nu'), sf('nu', 0, 0.5)), ...field(t('fnd.slim'), sf('slim', 1, 1000)), ...field(t('fnd.ks'), sf('ks', 0, 1e6))));
    // the Analysis
    const ss = sets();
    if (ss.length) {
      const pick = (kind, wanted) => { const d = ss.find((x) => x.limit === wanted) || ss[0]; sel[kind] = ss.some((x) => x.key === sel[kind]) ? sel[kind] : d.key; return sel[kind]; };
      const sv = pick('service', 'service'), stg = pick('strength', 'strength');
      const mkSel = (kind, v) => { const e = el('select', { className: 'select-cc', dataset: { fndSet: kind } }, ...ss.map((x) => el('option', { value: x.key, selected: x.key === v }, x.name))); e.addEventListener('change', () => { sel[kind] = e.value; }); return e; };
      out.push(el('div', { className: 'dc-props' }, ...field(t('fnd.set-service'), mkSel('service', sv)), ...field(t('fnd.set-strength'), mkSel('strength', stg)),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { fndTake: '' }, onclick: () => takeFromAnalysis(sel.service, sel.strength) }, t('fnd.take'))));
    } else out.push(el('p', { className: 'dc-note' }, t('fnd.take.none')));
    app.setProblems?.(problems());
    const footings = model().state.footings;
    if (!footings.length) { out.push(el('p', { className: 'dc-note', dataset: { fndNone: '' } }, t('fnd.none'))); return out; }
    for (const f of footings) {
      const loads = fnd().loads[f.id] || [];
      const label = app.label(f.id);
      out.push(el('h4', { className: 'dc-fnd-h' }, label, ' ', el('span', { className: 'dc-note' }, `${f.L} × ${f.B} × ${f.H}`), ' ',
        el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => app.select({ kind: 'footing', id: f.id }) }, t('app.rep.select'))));
      const rows = loads.map((l, i) => {
        const cell = (v, set, w = 7) => { const n = num(v, set); n.size = w; return el('td', {}, n); };
        const upd = (fn) => again(t('fnd.undo.load'), (x) => { fn(x.loads[f.id][i]); });
        const setRow = (kind) => SET_KEYS.map((k) => cell(l[kind]?.[k] ?? 0, (v) => upd((q) => { q[kind] = { P: 0, Vx: 0, Vy: 0, Mx: 0, My: 0, ...q[kind], [k]: v }; })));
        return [
          el('tr', { dataset: { fndLoad: f.id + ':' + i } }, el('th', {}, t('fnd.row.service')), ...setRow('service'), cell(l.x, (v) => upd((q) => { q.x = v; })), cell(l.y, (v) => upd((q) => { q.y = v; })), cell(l.cx, (v) => upd((q) => { q.cx = v; })), cell(l.cy, (v) => upd((q) => { q.cy = v; })),
            el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('fnd.undo.load-del'), (x) => { x.loads[f.id].splice(i, 1); if (!x.loads[f.id].length) delete x.loads[f.id]; }) }, t('fnd.load.del')))),
          el('tr', {}, el('th', {}, t('fnd.row.strength')), ...setRow('strength'), el('td', { colSpan: 5 })),
        ];
      }).flat();
      if (loads.length) out.push(el('table', { className: 'dc-table', dataset: { fndLoads: f.id } },
        el('thead', {}, el('tr', {}, el('th', {}), ...SET_KEYS.map((k) => el('th', {}, t('fnd.col.' + k.toLowerCase()))), ...['x', 'y', 'cx', 'cy'].map((k) => el('th', {}, t('fnd.col.' + k))), el('th', {}))), el('tbody', {}, ...rows)));
      out.push(el('button', { type: 'button', className: 'dc-linkbtn', dataset: { fndAdd: f.id }, onclick: () => again(t('fnd.undo.load-add'), (x) => { (x.loads[f.id] ||= []).push({ x: 0, y: 0, cx: 300, cy: 300, service: { P: 0, Vx: 0, Vy: 0, Mx: 0, My: 0 }, strength: { P: 0, Vx: 0, Vy: 0, Mx: 0, My: 0 } }); }) }, t('fnd.load.add')));
      const r = check(f.id);
      if (!r) { out.push(el('p', { className: 'dc-note' }, t('fnd.noloads'))); continue; }
      const isMat = !!fnd().mats?.[f.id];
      out.push(el('label', { className: 'check dc-fnd-mat' }, el('input', { type: 'checkbox', checked: isMat, dataset: { fndMat: f.id }, onchange: (e) => again(t('fnd.undo.mat'), (x) => { x.mats = { ...(x.mats || {}) }; if (e.target.checked) x.mats[f.id] = true; else delete x.mats[f.id]; if (!Object.keys(x.mats).length) delete x.mats; }) }), ' ', t('fnd.mat.on')));
      out.push(el('table', { className: 'dc-table', dataset: { fndChecks: f.id } }, el('thead', {}, el('tr', {}, ...['check', 'result', 'clause'].map((k) => el('th', {}, t('fnd.col.' + k))))),
        el('tbody', {}, ...r.checks.map((c) => el('tr', { className: c.status === 'fail' ? 'is-hard' : '', dataset: { fndCheck: c.id, status: c.status } }, el('td', {}, textOf(c)), el('td', {}, t('fnd.status.' + c.status) + (c.status !== 'note' && Number.isFinite(c.ratio) ? ' ' + Math.round(c.ratio * 100) + '%' : '')), el('td', {}, c.clause))))));
      const mr = matCheck(f.id);
      if (mr) {
        out.push(el('h5', { className: 'dc-fnd-h' }, t('fnd.mat.title')));
        if (mr.ok) out.push(el('p', { className: 'dc-note', dataset: { fndMatInfo: f.id } }, t('fnd.mat.info', { nodes: mr.nodes, size: Math.round(mr.size), w: Math.round(mr.settleMax * 10) / 10, q: Math.round(mr.qMax), mx: Math.round(mr.MxPos), v: Math.round(mr.Vmax) })));
        out.push(el('table', { className: 'dc-table', dataset: { fndMatChecks: f.id } }, el('thead', {}, el('tr', {}, ...['check', 'result', 'clause'].map((k) => el('th', {}, t('fnd.col.' + k))))),
          el('tbody', {}, ...mr.checks.map((c) => el('tr', { className: c.status === 'fail' ? 'is-hard' : '', dataset: { fndCheck: c.id, status: c.status } }, el('td', {}, textOf(c)), el('td', {}, t('fnd.status.' + c.status) + (c.status !== 'note' && Number.isFinite(c.ratio) ? ' ' + Math.round(c.ratio * 100) + '%' : '')), el('td', {}, c.clause))))));
      }
    }
    out.push(...pileSection(), ...wallSection());
    out.push(el('p', { className: 'dc-note' }, t('fnd.note')));
    return out;
  }

  // ---- pile groups and retaining walls (0.8 round 3, EG.5): kept in the file, checked as you type ----
  const resultTable = (key, checks) => el('table', { className: 'dc-table', dataset: { [key]: '' } }, el('thead', {}, el('tr', {}, ...['check', 'result', 'clause'].map((k) => el('th', {}, t('fnd.col.' + k))))),
    el('tbody', {}, ...checks.map((c) => el('tr', { className: c.status === 'fail' ? 'is-hard' : '', dataset: { fndCheck: c.id, status: c.status } }, el('td', {}, textOf(c)), el('td', {}, t('fnd.status.' + c.status) + (c.status !== 'note' && Number.isFinite(c.ratio) ? ' ' + Math.round(c.ratio * 100) + '%' : '')), el('td', {}, c.clause)))));
  const nextId = (list, pre) => { let n = list.length + 1; while (list.some((x) => x.id === pre + n)) n++; return pre + n; };
  function pileSection() {
    const out = [el('h4', { className: 'dc-fnd-h' }, t('fnd.pile.title')), el('p', { className: 'dc-note' }, t('fnd.pile.intro'))];
    const groups = pilesOf();
    groups.forEach(({ g, r }, gi) => {
      const upd = (label, fn) => again(label, (x) => { fn(x.piles[gi]); });
      out.push(el('div', { className: 'dc-props', dataset: { fndPile: g.id } },
        ...field(t('fnd.pile.name'), (() => { const i = el('input', { type: 'text', className: 'dc-input', value: g.name, maxLength: 60 }); i.addEventListener('change', () => upd(t('fnd.undo.pile'), (q) => { q.name = i.value.trim().slice(0, 60) || q.name; })); return i; })()),
        ...field(t('fnd.col.p'), num(g.load.P, (v) => upd(t('fnd.undo.pile'), (q) => { q.load.P = v; }))), ...field(t('fnd.col.mx'), num(g.load.Mx, (v) => upd(t('fnd.undo.pile'), (q) => { q.load.Mx = v; }))),
        ...field(t('fnd.col.my'), num(g.load.My, (v) => upd(t('fnd.undo.pile'), (q) => { q.load.My = v; }))),
        ...field(t('fnd.pile.cap-c'), num(g.cap.compression, (v) => upd(t('fnd.undo.pile'), (q) => { q.cap.compression = v; }), 0)), ...field(t('fnd.pile.cap-t'), num(g.cap.tension, (v) => upd(t('fnd.undo.pile'), (q) => { q.cap.tension = v; }), 0))));
      out.push(el('p', { className: 'dc-note', dataset: { fndPileReactions: g.id } }, t('fnd.pile.reactions', { n: g.piles.length, list: r.reactions.map((v) => Math.round(v * 10) / 10).join(', ') })));
      out.push(resultTable('fndPileChecks', r.checks));
      out.push(el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('fnd.undo.pile-del'), (x) => { x.piles.splice(gi, 1); if (!x.piles.length) delete x.piles; }) }, t('fnd.load.del')));
    });
    // a new group from a grid: nx × ny piles at a spacing (mm)
    const grid = { nx: 2, ny: 2, s: 900 };
    const gf = (key, lo, hi) => num(grid[key], (v) => { grid[key] = v; }, lo, hi);
    out.push(el('div', { className: 'dc-props' }, ...field(t('fnd.pile.nx'), gf('nx', 1, 20)), ...field(t('fnd.pile.ny'), gf('ny', 1, 20)), ...field(t('fnd.pile.s'), gf('s', 100, 20000)),
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { fndPileAdd: '' }, onclick: () => {
        const nx = Math.round(grid.nx), ny = Math.round(grid.ny), piles = [];
        for (let i = 0; i < nx; i++) for (let j = 0; j < ny; j++) piles.push({ x: Math.round((i - (nx - 1) / 2) * grid.s), y: Math.round((j - (ny - 1) / 2) * grid.s) });
        again(t('fnd.undo.pile-add'), (x) => { x.piles = [...(x.piles || []), { id: nextId(x.piles || [], 'pg'), name: t('fnd.pile.default-name', { n: (x.piles || []).length + 1 }), piles, load: { P: 0, Mx: 0, My: 0 }, cap: { compression: 0, tension: 0 } }]; });
      } }, t('fnd.pile.add'))));
    return out;
  }
  function wallSection() {
    const out = [el('h4', { className: 'dc-fnd-h' }, t('fnd.wall.title')), el('p', { className: 'dc-note' }, t('fnd.wall.intro'))];
    wallsOf().forEach(({ w, r }, wi) => {
      const upd = (fn) => again(t('fnd.undo.wall'), (x) => { fn(x.walls[wi]); });
      const g = (key, lo, hi) => num(w[key], (v) => upd((q) => { q[key] = v; }), lo, hi), sg = (key, lo, hi) => num(w.soil[key], (v) => upd((q) => { q.soil[key] = v; }), lo, hi);
      out.push(el('div', { className: 'dc-props', dataset: { fndWall: w.id } },
        ...field(t('fnd.wall.h'), g('H', 500, 20000)), ...field(t('fnd.wall.hb'), g('hb', 100, 3000)), ...field(t('fnd.wall.t'), g('t', 100, 3000)), ...field(t('fnd.wall.toe'), g('toe', 0, 10000)), ...field(t('fnd.wall.heel'), g('heel', 0, 20000)),
        ...field(t('fnd.wall.gamma'), sg('gamma', 5, 30)), ...field(t('fnd.wall.phi'), sg('phi', 0, 50)), ...field(t('fnd.wall.surcharge'), sg('surcharge', 0, 1000)), ...field(t('fnd.qa'), sg('qa', 0, 1e5)), ...field(t('fnd.mu'), sg('mu', 0, 2))));
      out.push(el('p', { className: 'dc-note' }, t('fnd.wall.summary', { Ka: Math.round(r.Ka * 1000) / 1000, Pa: Math.round(r.Pa * 10) / 10, e: Math.round(r.e * 1000) / 1000 })));
      out.push(resultTable('fndWallChecks', r.checks));
      out.push(el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => again(t('fnd.undo.wall-del'), (x) => { x.walls.splice(wi, 1); if (!x.walls.length) delete x.walls; }) }, t('fnd.load.del')));
    });
    out.push(el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { fndWallAdd: '' }, onclick: () => again(t('fnd.undo.wall-add'), (x) => {
      x.walls = [...(x.walls || []), { id: nextId(x.walls || [], 'rw'), name: t('fnd.wall.default-name', { n: (x.walls || []).length + 1 }), H: 3000, hb: 450, t: 300, toe: 900, heel: 1800, soil: { gamma: 18, phi: 30, surcharge: 10, qa: 0, mu: 0 } }];
    }) }, t('fnd.wall.add')));
    return out;
  }
  return { panel, problems, check, matCheck };
}
