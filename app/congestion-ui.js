/* SPDX-License-Identifier: Apache-2.0 */
/**
 * congestion-ui.js — DetailCraft's Congestion tab (0.8 round 2, EG.74): a heat map of how tight the rebar leaves each footing, with the aggregate
 * size and vibrator the person gives. congestion.js computes; this draws it on a canvas and lists the tight footings in Problems.
 *
 *   mountCongestion(app) → { panel() → [nodes], problems() → [problem], mapOf(footing) }
 *   app = { getModel, rerender(), setProblems(list), label(id), select(ref), print(text) }
 */
import { el } from './ui-util.js';
import { t } from './i18n.js';
import { readNum } from './numtext.js';
import { congestion, congestionProblems, heat, tightShare } from './congestion.js';

export function mountCongestion(app) {
  const o = { aggregate: 0, vibrator: 0 };   // this window's choices (not saved in the model)
  const cache = new Map();
  const mapOf = (f, version) => {
    const key = f.id + ':' + version + ':' + o.aggregate + ':' + o.vibrator;
    if (!cache.has(key)) { if (cache.size > 40) cache.clear(); cache.set(key, congestion(f, o)); }
    return cache.get(key);
  };
  const footings = () => app.getModel().state.footings;
  const problems = () => footings().flatMap((f) => congestionProblems(mapOf(f, app.getModel().version), { id: f.id, label: app.label(f.id), t: (k, v) => t(k, v) }));
  let fid = 0;
  const field = (text, input) => { input.id = input.id || 'dc-cg' + (++fid); return [el('label', { for: input.id }, text), input]; };
  const num = (value, onSet) => {
    const i = el('input', { type: 'text', className: 'dc-input dc-num', value: String(value), autocomplete: 'off', spellcheck: false });
    i.addEventListener('change', () => { const r = readNum(i.value); if (!r.ok || r.value < 0 || r.value > 500) { i.setAttribute('aria-invalid', 'true'); app.print(t('app.num.bad')); return; } i.removeAttribute('aria-invalid'); onSet(r.value); });
    return i;
  };
  function draw(canvas, map) {
    canvas.width = map.cols; canvas.height = map.rows;
    const ctx = canvas.getContext('2d'), img = ctx.createImageData(map.cols, map.rows);
    for (let j = 0; j < map.rows; j++) for (let i = 0; i < map.cols; i++) {
      const k = j * map.cols + i, o4 = ((map.rows - 1 - j) * map.cols + i) * 4;   // y up on the screen
      const rgb = map.opening[k] <= 0 ? [40, 40, 48] : heat(map.values[k]);        // a bar itself is dark
      img.data[o4] = rgb[0]; img.data[o4 + 1] = rgb[1]; img.data[o4 + 2] = rgb[2]; img.data[o4 + 3] = 255;
    }
    ctx.putImageData(img, 0, 0);
  }
  function panel() {
    const out = [el('div', { className: 'dc-rep-head' }, el('h3', {}, t('cong.title')))];
    out.push(el('p', { className: 'dc-note' }, t('cong.intro')));
    out.push(el('div', { className: 'dc-props' },
      ...field(t('cong.aggregate'), num(o.aggregate, (v) => { o.aggregate = v; app.rerender(); })),
      ...field(t('cong.vibrator'), num(o.vibrator, (v) => { o.vibrator = v; app.rerender(); }))));
    app.setProblems?.(problems());
    const list = footings();
    if (!list.length) { out.push(el('p', { className: 'dc-note', dataset: { congNone: '' } }, t('cong.none'))); return out; }
    const version = app.getModel().version;
    for (const f of list) {
      const map = mapOf(f, version), share = tightShare(map);
      const canvas = el('canvas', { className: 'dc-cong-map', dataset: { congMap: f.id, worst: map.worst.ratio.toFixed(3), over: String(map.over) }, role: 'img',
        'aria-label': t('cong.map.label', { mark: app.label(f.id), worst: Math.round(map.worst.opening * 10) / 10, need: Math.round(map.need * 10) / 10 }) });
      canvas.style.cssText = 'width:100%;max-width:22rem;aspect-ratio:' + (f.L / f.B).toFixed(3) + ';image-rendering:pixelated;border:1px solid var(--line, #888);display:block';
      draw(canvas, map);
      const tight = map.worst.ratio > 1 && share > 0;
      out.push(el('div', { className: 'dc-cong', dataset: { congFooting: f.id } },
        el('div', { className: 'dc-rep-head' }, el('h3', {}, app.label(f.id)), el('button', { type: 'button', className: 'dc-linkbtn', onclick: () => app.select({ kind: 'footing', id: f.id }) }, t('app.rep.select'))),
        canvas,
        el('p', { className: tight ? 'dc-note is-hard' : 'dc-note' }, tight ? t('cong.tight', { opening: Math.round(map.worst.opening * 10) / 10, need: Math.round(map.need * 10) / 10, pct: Math.round(share * 100) }) : t('cong.ok', { need: Math.round(map.need * 10) / 10, worst: Math.round(map.worst.opening) }))));
    }
    out.push(el('p', { className: 'dc-note' }, t('cong.note')));
    return out;
  }
  return { panel, problems, mapOf: (f) => mapOf(f, app.getModel().version) };
}
