/* SPDX-License-Identifier: Apache-2.0 */
/**
 * xf-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountXf(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t as tr } from './i18n.js';
import { moveXf, selectionCenter, rotateXf, mirrorXf, transformRefs } from './transform.js';
import { pointAt } from './model.js';
import { copyClip, readClip, pasteInto } from './clipboard.js';

export function mountXf(ctx) {
  const { print, edit, setTool, setSelection, field, numIn, selectIn, ROW_START, mm } = ctx;

  /** "Move, rotate, mirror" for the selection's members and footings (connections follow). */
  function xfBlock(refs) {
    const own = refs.filter((r) => r.kind !== 'conn' && r.kind !== 'picture');   // a picture moves by dragging or its own Properties (D8.15)
    if (!own.length) return [];
    const s = ctx.model.state;
    const box = el('div', { className: 'dc-block', dataset: { xf: '' } }, el('p', { className: 'dc-sub' }, tr('xf.title')));
    const keep = el('input', { type: 'checkbox', id: 'dc-xf-copy', dataset: { xfCopy: '' } });
    box.append(el('div', { className: 'dc-props' }, ...field(tr('xf.copy'), keep)));
    // move by an offset, or by picking two grid intersections
    const off = [0, 0, 0];
    const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => { const i = numIn(0, (v) => { off[k] = v; }, { id: 'dc-xfoff' + k }); i.setAttribute('aria-label', tr('xf.move.axis', { axis: 'xyz'[k] })); return i; }));
    const mv = el('form', { className: 'dc-props', dataset: { xfMove: '' } }, el('span', { className: 'k' }, tr('xf.move.sub')), row,
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.move.go')),
        el('button', { type: 'button', className: 'btn-line btn-sm-dc', title: tr('xf.move.pick.title'), onclick: () => setTool('move') }, tr('xf.move.pick'))));
    mv.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of mv.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      let xf;
      try { xf = moveXf(...off); } catch { print(tr('xf.bad.offset')); return; }
      runXf(own, xf, keep.checked, { kind: 'move', d: off.slice() });
    });
    // rotate in plan about the selection's middle or a grid intersection
    const nodesO = [['', tr('xf.rotate.middle')]];
    for (const gy of s.grids.y) for (const gx of s.grids.x) nodesO.push([gy.label + '/' + gx.label, gy.label + '/' + gx.label]);
    let deg = 90, about = '';
    const ro = el('form', { className: 'dc-props', dataset: { xfRotate: '' } },
      el('span', { className: 'span dc-sub2' }, tr('xf.rotate.sub')),
      ...field(tr('xf.rotate.angle'), numIn(deg, (v) => { deg = v; }, { id: 'dc-xfdeg' })),
      ...field(tr('xf.rotate.about'), selectIn(nodesO, about, (v) => { about = v; }, { id: 'dc-xfabout' })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.rotate.go'))));
    ro.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of ro.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      let c;
      if (about) { const [gy, gx] = about.split('/'); const p = pointAt(s, gy, gx, s.levels[0].name); c = p && [p[0], p[1]]; }
      else { const m = selectionCenter(s, own); c = m && [m[0], m[1]]; }
      if (!c) return;
      let xf;
      try { xf = rotateXf(c, deg); } catch { print(tr('xf.bad.angle')); return; }
      runXf(own, xf, keep.checked, { kind: 'rotate', deg, about: about || tr('xf.rotate.middle.short') });
    });
    // mirror in a grid line
    const linesO = [...s.grids.y.map((g) => ['y:' + g.label, tr('xf.mirror.grid', { label: g.label })]), ...s.grids.x.map((g) => ['x:' + g.label, tr('xf.mirror.grid', { label: g.label })])];
    const parts = [ro];
    if (linesO.length) {
      let line = linesO[0][0];
      const mi = el('form', { className: 'dc-props', dataset: { xfMirror: '' } },
        el('span', { className: 'span dc-sub2' }, tr('xf.mirror.sub')),
        ...field(tr('xf.mirror.line'), selectIn(linesO, line, (v) => { line = v; }, { id: 'dc-xfline' })),
        el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('xf.mirror.go'))));
      mi.addEventListener('submit', (e) => {
        e.preventDefault();
        const [ax, label] = [line.slice(0, 1), line.slice(2)];
        const g = (ax === 'x' ? s.grids.x : s.grids.y).find((q) => q.label === label);
        if (!g) return;
        const xf = ax === 'x' ? mirrorXf([g.at, 0], [g.at, 1]) : mirrorXf([0, g.at], [1, g.at]);
        runXf(own, xf, keep.checked, { kind: 'mirror', line: label });
      });
      parts.push(mi);
    }
    box.append(mv, ...parts, el('p', { className: 'dc-note' }, tr('xf.note')));
    return [box];
  }

  /** One undo step: the refs (or a copy of them, with keep) through xf; the result selected and said. */
  function runXf(refs, xf, keep, how) {
    const s = ctx.model.state;
    let r = null;
    if (keep) {
      const c = copyClip(s, refs, { connections: ctx.settings.conns });
      if (!c) { print(tr('xf.none')); return; }
      const clip = readClip(c.clip);
      r = edit(tr('xf.undo.' + how.kind + '.copy'), (tx) => { const p = pasteInto(tx, clip, [0, 0, 0]); const x = transformRefs(tx, tx.s, p.refs, xf); return { ...x, refs: p.refs }; });
    } else {
      r = edit(tr('xf.undo.' + how.kind), (tx) => ({ ...transformRefs(tx, tx.s, refs, xf), refs }));
    }
    if (!r) return;
    setSelection(r.refs);
    const what = whatText(r.members, r.footings);
    const fills = { what, x: mm(how.d?.[0] ?? 0), y: mm(how.d?.[1] ?? 0), z: mm(how.d?.[2] ?? 0), deg: String(how.deg ?? ''), about: how.about || '', line: how.line || '' };
    print(tr('xf.done.' + how.kind + (keep ? '.copy' : ''), fills) + r.notes.map((n) => ' ' + tr(n.key, { n: n.n })).join('') + ' ' + tr('xf.undo.hint'));
  }
  const whatText = (members, footings) => [members ? tr('what.members', { n: members }) : '', footings ? tr('what.footings', { n: footings }) : ''].filter(Boolean).join(tr('what.and'));

  return { xfBlock, runXf, whatText };
}
