/* SPDX-License-Identifier: Apache-2.0 */
/**
 * autopilot-ui.js — DetailCraft's Autopilot tab (0.8 round 2, EG.73): choose how the open joints are to be read (the end shear if known,
 * which beams are moment beams), see what would go where and why, add them all as one undo step. autopilot.js decides.
 *
 *   mountAutopilot(app) → { panel() → [nodes], problems() → [problem] }
 *   app = { getModel, edit(label, fn), print(text), selected() → refs, rerender(), setProblems(list), label(id) }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { readNum } from './numtext.js';
import { propose, apply, autopilotProblems } from './autopilot.js';

export function mountAutopilot(app) {
  const o = { uniformKNm: 0, reactionKN: 0, grade: 'A325', moment: [], mitres: false };   // this window's choices; they are not saved in the model
  let fid = 0;
  const field = (text, input) => { input.id = input.id || 'dc-ap' + (++fid); return [el('label', { for: input.id }, text), input]; };
  const num = (value, onSet) => {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(value), autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => { const r = readNum(i.value); if (!r.ok || r.value < 0) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } i.removeAttribute('aria-invalid'); onSet(r.value); });
    return i;
  };
  const run = () => propose(app.getModel().state, { ...o, reactionKN: o.reactionKN > 0 ? o.reactionKN : undefined, uniformKNm: o.uniformKNm > 0 ? o.uniformKNm : 0 });
  const problems = () => autopilotProblems(run(), { labelOf: app.label, t: (k, v) => t(k, v) });

  function panel() {
    const pr = run(), out = [];
    out.push(el('div', { className: 'dc-rep-head' }, el('h3', {}, t('auto.title', { n: pr.items.length })),
      el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { autoApply: '' }, disabled: pr.items.length === 0, onclick: () => {
        const again = run();
        if (!again.items.length) return;
        app.edit(t('auto.undo'), (tx) => { apply(tx, again); });
        app.print(t('auto.done', { n: again.items.length, left: again.left.length }));
        app.rerender();
      } }, t('auto.apply'))));
    out.push(el('p', { className: 'dc-note' }, t('auto.intro')));
    out.push(el('div', { className: 'dc-props' },
      ...field(t('auto.uniform'), num(o.uniformKNm, (v) => { o.uniformKNm = v; app.rerender(); })),
      ...field(t('auto.reaction'), num(o.reactionKN, (v) => { o.reactionKN = v; app.rerender(); })),
      ...field(t('auto.grade'), (() => { const s = el('select', { className: 'select-cc' }, ...['A325', 'A490'].map((g) => el('option', { value: g, selected: g === o.grade }, g))); s.addEventListener('change', () => { o.grade = s.value; app.rerender(); }); return s; })())));
    const sel = app.selected().filter((r) => r.kind === 'member' && app.getModel().member(r.id)?.type === 'beam').map((r) => r.id);
    out.push(el('p', { className: 'dc-note' }, t('auto.moment', { n: o.moment.length }), ' ',
      el('button', { type: 'button', className: 'dc-linkbtn', dataset: { autoMoment: '' }, disabled: !sel.length, onclick: () => { o.moment = [...new Set([...o.moment, ...sel])]; app.rerender(); } }, t('auto.moment.add', { n: sel.length })), ' ',
      el('button', { type: 'button', className: 'dc-linkbtn', disabled: !o.moment.length, onclick: () => { o.moment = []; app.rerender(); } }, t('auto.moment.clear'))));
    app.setProblems?.(problems());
    if (!pr.items.length && !pr.left.length) { out.push(el('p', { className: 'dc-note', dataset: { autoNone: '' } }, t('auto.none'))); return out; }
    const rows = pr.items.map((i) => el('tr', {}, el('td', {}, t('auto.type.' + i.conn.type)), el('td', {}, app.label(i.about)), el('td', {}, t('auto.rule.' + i.rule, i.vars))));
    for (const l of pr.left) rows.push(el('tr', { className: 'is-hard' }, el('td', {}, t('auto.left')), el('td', {}, app.label(l.about[0].id)), el('td', {}, t('auto.prob.' + l.code, { ...l.vars, mark: app.label(l.about[0].id) }))));
    out.push(el('table', { className: 'dc-table', dataset: { autoTable: '' } }, el('thead', {}, el('tr', {}, ...['type', 'about', 'why'].map((k) => el('th', {}, t('auto.col.' + k))))), el('tbody', {}, ...rows)));
    out.push(el('p', { className: 'dc-note' }, t('auto.note')));
    return out;
  }
  return { panel, problems, options: o };
}
