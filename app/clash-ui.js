/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clash-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountClash(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { clashCheck } from './clash.js';
import { t as tr } from './i18n.js';
import { el } from './ui-util.js';
import { nodeName } from './model.js';

export function mountClash(ctx) {
  const { hiddenPhases, print, exists, setTool, setSelection, numIn, renderReport } = ctx;

  function runClashes() {
    const phases = new Set(ctx.model.state.phases.map((p) => p.n).filter((n) => !hiddenPhases.has(n)));
    ctx.clashRes = { ...clashCheck(ctx.model.state, ctx.built, { tol: ctx.clashTol, phases }), version: ctx.model.version, hidden: hiddenPhases.size };
    ctx.reportTab = 'clashes';
    renderReport();
    const n = ctx.clashRes.clashes.length;
    print(tr(n ? 'clash.found' : 'clash.none', { n, parts: ctx.clashRes.checked, ms: ctx.clashRes.ms }));
  }
  const refLabel = (r) => {
    if (r.kind === 'member') { const m = ctx.model.member(r.id); return (ctx.marks.partMark.get(r.id) || '') + ' ' + (m ? m.profile : ''); }
    if (r.kind === 'conn') { const p = ctx.built.byId.get(r.id + '.plate') || ctx.built.parts.find((x) => x.conn === r.id); return (p ? ctx.marks.partMark.get(p.id) + ' ' + p.profileName : r.id); }
    return (ctx.marks.footingMark.get(r.id) || '') + ' ' + tr('clash.footing');
  };
  function clashPanel() {
    const tol = numIn(ctx.clashTol, (v) => { ctx.clashTol = Math.max(0, Math.min(50, v)); }, { min: 0, max: 50, step: 0.5, id: 'dc-clash-tol' });
    tol.dataset.clashTol = '';
    const head = el('div', { className: 'dc-rep-head' }, el('h3', {}, tr('clash.title')),
      el('label', { for: 'dc-clash-tol', className: 'dc-muted' }, tr('clash.tol')), tol,
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { clashRun: '' }, onclick: () => { tol.dispatchEvent(new Event('change')); runClashes(); } }, tr('clash.run')));
    const out = [head];
    if (!ctx.clashRes) { out.push(el('p', { className: 'dc-note' }, tr('clash.intro'))); return out; }
    if (ctx.clashRes.version !== ctx.model.version) out.push(el('p', { className: 'dc-warn' }, tr('clash.stale')));
    if (!ctx.clashRes.clashes.length) out.push(el('p', { className: 'dc-note' }, tr('clash.clean', { parts: ctx.clashRes.checked })));
    else {
      const rows = ctx.clashRes.clashes.map((c) => el('tr', { dataset: { clash: '' } },
        el('td', {}, refLabel(c.a)), el('td', {}, refLabel(c.b)), el('td', { className: 'n' }, String(c.depth)), el('td', {}, nodeName(ctx.model.state, c.at)),
        el('td', {}, el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => { if (ctx.tool !== 'select') setTool('select'); setSelection([c.a, c.b].filter(exists)); ctx.view?.focusPoint(c.at, 2500); print(tr('clash.shown', { a: refLabel(c.a), b: refLabel(c.b), d: c.depth })); } }, tr('clash.show')))));
      out.push(el('table', { className: 'dc-table' },
        el('thead', {}, el('tr', {}, el('th', { scope: 'col' }, tr('clash.col.a')), el('th', { scope: 'col' }, tr('clash.col.b')), el('th', { scope: 'col', className: 'n' }, tr('clash.col.depth')), el('th', { scope: 'col' }, tr('clash.col.at')), el('th', { scope: 'col' }, ''))),
        el('tbody', {}, ...rows)));
    }
    out.push(el('p', { className: 'dc-note' }, tr('clash.note') + (ctx.clashRes.hidden ? ' ' + tr('clash.hidden') : '')));
    return out;
  }

  return { clashPanel };
}
