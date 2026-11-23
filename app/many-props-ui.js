/* SPDX-License-Identifier: Apache-2.0 */
/**
 * many-props-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountManyProps(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { manyPatchable, applyToMany } from './transform.js';
import { el } from './ui-util.js';
import { t as tr } from './i18n.js';

export function mountManyProps(ctx) {
  const { ST, print, edit, field, numIn, selectIn, profileOptions, materialOptions, positionOptions } = ctx;

  /** "Change on all of them": one property on every selected member it applies to (one undo step). */
  const ROW_START = 'span dc-row start';   // i18n-ignore (class names)
  const manyKey = (f) => 'many.' + f.replace(/[A-Z]/g, (c) => '-' + c.toLowerCase());   // plateT → many.plate-t
  function manyEditor(ids) {
    if (ids.length < 2) return [];
    const st = manyPatchable(ST.model.state, ids);
    const box = el('div', { className: 'dc-props dc-block', dataset: { manyEdit: '' } }, el('p', { className: 'dc-sub' }, tr('many.sub')));
    const set = (key, value) => {
      const r = edit(tr('many.undo', { field: tr(manyKey(key)) }), (tx) => applyToMany(tx, ST.model.state, ids, key, value));
      if (r) print(tr('many.done', { field: tr(manyKey(key)), n: r.changed }) + (r.skipped ? ' ' + tr('many.skipped', { n: r.skipped }) : ''));
    };
    const varies = (sel) => { sel.prepend(el('option', { value: '', className: 'dc-varies' }, tr('many.varies'))); sel.value = ''; sel.classList.add('dc-varies'); return sel; };
    const choice = (key, options) => {
      const f = st[key];
      if (!f.applies) return [];
      const s2 = selectIn(options, f.varies ? '' : f.value, (v) => { if (v) set(key, v); }, { id: 'dc-many-' + key });
      if (f.varies) varies(s2);
      s2.dataset.many = key;
      return field(tr(manyKey(key)), s2);
    };
    const number = (key, o = {}) => {
      const f = st[key];
      if (!f.applies) return [];
      const i = numIn(f.varies ? 0 : f.value, (v) => set(key, v), { id: 'dc-many-' + key, ...o });
      if (f.varies) { i.value = ''; i.placeholder = tr('many.varies'); }
      i.dataset.many = key;
      return field(tr(manyKey(key)), i);
    };
    box.append(...choice('profile', profileOptions()), ...number('plateT', { min: 1 }), ...number('plateW', { min: 1 }),
      ...choice('material', materialOptions()), ...choice('position', positionOptions), ...number('rotation'),
      el('p', { className: 'span dc-note' }, tr('many.note')));
    return [box];
  }

  return { ROW_START, manyEditor };
}
