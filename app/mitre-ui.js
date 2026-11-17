/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mitre-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountMitre(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { MITRE_DEFAULTS, PARAM_LABELS, PARAM_HELP } from './connections.js';
import { t as tr } from './i18n.js';
import { el } from './ui-util.js';
import { mitrePreview } from './mitre-preview.js';

export function mountMitre(ctx) {
  const { print, refresh, edit, numIn, textIn, restoreFocus, root, r1 } = ctx;

  const svgEl = (tag, attrs = {}) => { const n = document.createElementNS('http://www.w3.org/2000/svg', tag); for (const [k, v] of Object.entries(attrs)) n.setAttribute(k, String(v)); return n; };
  /** The Mitre dialog: the numbered fields beside our own drawing of the joint, made from the parameters as they are typed. */
  function openMitre({ joints = null, conn = null }) {
    const joint = conn ? { a: conn.a, aEnd: conn.aEnd, b: conn.b, bEnd: conn.bEnd } : joints[0];
    const params = { ...MITRE_DEFAULTS, ...(conn ? conn.params : {}) };
    ctx.lastFocus = document.activeElement;
    const fig = svgEl('svg', { class: 'dc-mitre-svg', role: 'img', 'aria-label': tr('mitre.dlg.preview') });
    const lede = el('p', { className: 'dc-note dc-mitre-lede' });
    const msgs = el('ul', { className: 'dc-msgs', dataset: { mitreMsgs: '' }, 'aria-live': 'polite' });
    const applyBtn = el('button', { type: 'button', className: 'btn-plot btn-sm-dc', dataset: { mitreApply: '' } }, tr(conn ? 'mitre.dlg.apply' : 'mitre.dlg.add'));
    let bad = new Set();
    const num_ = (k) => {
      const i = numIn(params[k], (v) => {
        if (!(v >= 0 && v <= 10000)) { i.setAttribute('aria-invalid', 'true'); bad.add(k); print(tr('mitre.dlg.bad', { name: PARAM_LABELS[k] || k })); update(); return; }
        bad.delete(k); params[k] = v; update();
      }, { id: 'dc-mi-' + k });
      i.dataset.mitreParam = k;
      if (PARAM_HELP[k]) i.title = PARAM_HELP[k];
      return i;
    };
    const text_ = (k) => { const i = textIn(params[k], (v) => { params[k] = String(v).trim() || MITRE_DEFAULTS[k]; update(); }, { id: 'dc-mi-' + k, max: 30 }); i.dataset.mitreParam = k; return i; };
    const tick = (k, label) => {
      const c = el('input', { type: 'checkbox', id: 'dc-mi-' + k, checked: !!params[k], dataset: { mitreParam: k } });
      c.addEventListener('change', () => { params[k] = c.checked ? 1 : 0; update(); });
      return el('label', { className: 'dc-mitre-tick', for: c.id }, c, ' ', label);
    };
    const lab = (k) => el('label', { for: 'dc-mi-' + k }, PARAM_LABELS[k] || k);
    const row = (n, ...kids) => el('div', { className: 'dc-mitre-row', dataset: { mitreRow: String(n) } },
      el('span', { className: 'dc-mitre-n', 'aria-hidden': 'true' }, String(n)), el('span', { className: 'dc-mitre-t' }, tr('mitre.dlg.n' + n)), el('div', { className: 'dc-mitre-f' }, ...kids));
    const pair = (k) => [lab(k), num_(k)];
    const fields = el('div', { className: 'dc-mitre-fields' },
      row(1, ...pair('mGap')),
      row(2, tick('plates', tr('mitre.dlg.tick.plates')), ...pair('tp')),
      row(3, ...pair('rows'), ...pair('mPitch'), ...pair('mGauge'), tick('outRow', tr('mitre.dlg.tick.outrow'))),
      row(4, ...pair('extOuter')),
      row(5, ...pair('extInner')),
      row(6, tick('stiffs', tr('mitre.dlg.tick.stiffs')), ...pair('stiffDist')),
      row(7, ...pair('stiffT')),
      el('details', { className: 'dc-mitre-more' }, el('summary', {}, tr('mitre.dlg.bolts')),
        el('div', { className: 'dc-props' }, ...pair('boltD'), ...pair('hole'), lab('grade'), text_('grade'), ...pair('allowance'))),
      el('details', { className: 'dc-mitre-more' }, el('summary', {}, tr('mitre.dlg.plate')),
        el('div', { className: 'dc-props' }, ...pair('mWidth'), ...pair('weld'), lab('plateGrade'), text_('plateGrade'))));
    const dlg = el('dialog', { className: 'dc-dialog dc-mitre', 'aria-labelledby': 'dc-mitre-h', dataset: { mitre: '' } },
      el('div', { className: 'dc-dlg' },
        el('div', { className: 'dc-dlg-head' }, el('h2', { className: 'dc-h', id: 'dc-mitre-h' }, tr('mitre.dlg.title')),
          el('button', { type: 'button', className: 'dc-x', 'aria-label': tr('mitre.dlg.close'), onclick: () => dlg.close() }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))),
        el('div', { className: 'dc-mitre-body' },
          el('div', { className: 'dc-mitre-left' }, lede, el('figure', { className: 'dc-mitre-fig' }, fig, el('figcaption', { className: 'dc-note' }, tr('mitre.dlg.preview'))), msgs),
          fields),
        el('div', { className: 'dc-dlg-foot' }, el('span', { className: 'dc-note' }, tr('mitre.dlg.note')),
          el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: () => dlg.close() }, tr('mitre.dlg.cancel')), applyBtn)));
    let ok = false;
    function update() {
      for (const k of ['tp', 'extOuter', 'extInner', 'mPitch', 'mGauge', 'outRow', 'mWidth']) for (const n of dlg.querySelectorAll('[data-mitre-param="' + k + '"]')) n.disabled = !params.plates;
      for (const n of dlg.querySelectorAll('[data-mitre-param="rows"]')) n.disabled = !params.plates;
      for (const k of ['stiffDist', 'stiffT']) dlg.querySelector('[data-mitre-param="' + k + '"]').disabled = !params.stiffs;
      const pv = mitrePreview(ctx.model.state, joint, params, conn?.id);
      ok = pv.ok && !bad.size;
      applyBtn.disabled = !ok;
      const A = ctx.model.member(joint.a), B = ctx.model.member(joint.b);
      lede.textContent = pv.ok ? tr('mitre.dlg.joint', { a: (A?.profile || '') + ' ' + (ctx.marks.partMark.get(joint.a) || ''), b: (B?.profile || '') + ' ' + (ctx.marks.partMark.get(joint.b) || ''), angle: r1(pv.angle), cut: r1(pv.cut) })
        + (joints && joints.length > 1 ? ' ' + tr('mitre.dlg.joints', { n: joints.length }) : '') : '';
      msgs.replaceChildren(...(pv.problems.length ? pv.problems.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.hard ? tr('mitre.dlg.refused', { why: x.text }) : x.text))
        : [el('li', { className: 'is-ok' }, tr('mitre.dlg.ok'))]));
      drawMitre(fig, pv);
    }
    applyBtn.addEventListener('click', () => {
      for (const i of fields.querySelectorAll('input[type="text"]')) i.dispatchEvent(new Event('change'));
      if (!ok) return;
      if (conn) {
        const changed = Object.fromEntries(Object.entries(params).filter(([k, v]) => conn.params[k] !== v));
        if (Object.keys(changed).length && edit(tr('app.undo.mitre-edit'), (tx) => tx.updateConnection(conn.id, changed)) !== null) print(tr('app.mitre.changed'));
      } else {
        const cids = edit(tr('app.undo.mitre'), (tx) => joints.map((j) => tx.addConnection({ type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd, params: { ...params } })));
        if (cids) { ctx.sel = { kind: 'conn', id: cids[0] }; ctx.multi = []; refresh(); print(tr('app.mitre.added', { n: joints.length })); }
      }
      dlg.close();
    });
    dlg.addEventListener('close', () => { dlg.remove(); restoreFocus(); });
    root.append(dlg);
    update();
    dlg.showModal();
    dlg.querySelector('#dc-mi-mGap')?.focus();
  }
  /** Our own drawing of the joint (mitre-preview.js): members, plates, stiffeners, bolts and the numbered callouts. */
  function drawMitre(svg, pv) {
    svg.replaceChildren();
    if (!pv.ok) { svg.setAttribute('viewBox', '0 0 100 60'); return; }
    const [x0, y0, x1, y1] = pv.box, size = Math.max(x1 - x0, y1 - y0);
    svg.setAttribute('viewBox', [x0, -y1, x1 - x0, y1 - y0].map((v) => Math.round(v * 10) / 10).join(' '));
    const pts = (ps) => ps.map(([x, y]) => (Math.round(x * 10) / 10) + ',' + (Math.round(-y * 10) / 10)).join(' ');
    for (const sh of pv.shapes) svg.append(svgEl(sh.closed ? 'polygon' : 'polyline', { points: pts(sh.pts), class: 'dc-mi-' + sh.kind }));
    for (const [a, b] of pv.bolts) svg.append(svgEl('line', { x1: a[0], y1: -a[1], x2: b[0], y2: -b[1], class: 'dc-mi-bolt' }));
    const cx = (x0 + x1) / 2, cy = (y0 + y1) / 2, r = size * 0.032;
    // each number leaves its point its own way (1, 2, 3 sit close together at the plates), the stiffeners' outward from the middle
    const AWAY = { 1: [1, 0.45], 2: [-1, 0.45], 3: [1, -0.45], 4: [0, 1], 5: [0, -1] };
    for (const c of pv.callouts) {
      let [dx, dy] = AWAY[c.n] || [c.at[0] - cx, c.at[1] - cy];
      const d = Math.hypot(dx, dy);
      if (d < 1e-6) { dx = -1; dy = 1; } else { dx /= d; dy /= d; }
      const p = [c.at[0] + dx * size * 0.11, c.at[1] + dy * size * 0.11];
      svg.append(svgEl('line', { x1: c.at[0], y1: -c.at[1], x2: p[0], y2: -p[1], class: 'dc-mi-leader' }));
      svg.append(svgEl('circle', { cx: p[0], cy: -p[1], r, class: 'dc-mi-callout' }));
      const tx = svgEl('text', { x: p[0], y: -p[1], class: 'dc-mi-num', 'font-size': r * 1.25, 'text-anchor': 'middle', 'dominant-baseline': 'central' });
      tx.textContent = String(c.n);
      svg.append(tx);
    }
  }

  return { openMitre };
}
