/* SPDX-License-Identifier: Apache-2.0 */
/**
 * conn-props-ui.js: detailcraft.js's 3 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountConnProps(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { t as tr, has as hasKey } from './i18n.js';
import { isBeamEnd, PARAM_LABELS, PARAM_CHOICES, PARAM_HELP, dg1Row, similarMitres, similarBraceEnds, similarSplices, similarJoints, similarColumns } from './connections.js';
import { el, fillDl } from './ui-util.js';
import { shopRefusal } from './shop.js';
import { nodeName } from './model.js';
import { pictureSizeMm, OPACITY_MIN } from './picture.js';

export function mountConnProps(ctx) {
  const { ST, print, edit, deleteSelection, openMitre, applySimilar, renderProps, field, numIn, textIn, selectIn } = ctx;

  function connProps(c) {
    const out = [];
    const mInfo = c.type === 'mitre' ? ST.built.infos?.get(c.id) : null;
    const joined = c.type === 'mitre' ? [[tr('app.k.piece-a'), partLabel(c.a)], [tr('app.k.piece-b'), partLabel(c.b)], ...(mInfo ? [[tr('app.k.angle'), tr('app.conn.mitre-angle', { angle: ctx.r1(mInfo.angle), cut: ctx.r1(mInfo.cut) })]] : [])]
      : c.type === 'splice' ? [[tr('app.k.piece-a'), partLabel(c.a)], [tr('app.k.piece-b'), partLabel(c.b)]]
      : c.type === 'gusset' ? [[tr('app.k.brace'), partLabel(c.brace)], [tr('app.k.end'), hasKey('app.word.' + c.end) ? tr('app.word.' + c.end) : c.end], [tr('app.k.support'), partLabel(c.support)]] : isBeamEnd(c)
      ? [[tr('app.k.beam'), partLabel(c.beam)], [tr('app.k.end'), hasKey('app.word.' + c.end) ? tr('app.word.' + c.end) : c.end], [tr('app.k.column'), partLabel(c.column)]]
      : [[tr('app.k.column'), partLabel(c.column)]];
    const dl = el('dl', { className: 'dc-props' });
    for (const [k, v] of joined) dl.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
    out.push(dl);
    const p = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.conn.params')));
    for (const [k, v] of Object.entries(c.params)) {
      const set = (val) => edit(tr('app.undo.change', { what: (PARAM_LABELS[k] || k).toLowerCase() }), (tx) => tx.updateConnection(c.id, { [k]: val }));
      const choices = PARAM_CHOICES[k];
      const input = choices ? selectIn(choices.map((n) => [String(n), tr('app.conn.choice.' + k.toLowerCase() + '.' + n)]), String(v), (val) => set(Number(val)))
        : typeof v === 'number' ? numIn(v, set, { min: 0 }) : textIn(v, set, { max: 30 });
      if (PARAM_HELP[k]) input.title = PARAM_HELP[k];
      p.append(...field(PARAM_LABELS[k] || k, input));
    }
    if (c.type === 'baseplate' && c.params.washers && !(c.params.washerSize && c.params.washerT)) {
      const row = dg1Row(c.params.rodD);
      p.append(el('p', { className: 'dc-note' }, row ? tr('app.conn.washer-dg1', { size: ctx.r1(c.params.washerSize || row.washer), t: ctx.r1(c.params.washerT || row.washerT), rod: ctx.r1(row.rod) }) : tr('conn.warn.washer-size')));
    }
    out.push(p);
    const bolts = ST.built.bolts.filter((b) => b.conn === c.id), weld = ST.built.welds.find((w) => w.conn === c.id);
    const info = el('dl', { className: 'dc-props dc-block' });
    const rows = [];
    // one row per bolt length (a splice has flange and web bolts)
    const byLen = new Map();
    for (const b of bolts) { const k = b.length + '|' + ctx.r1(b.grip); if (!byLen.has(k)) byLen.set(k, []); byLen.get(k).push(b); }
    for (const g of byLen.values()) rows.push([tr(c.type !== 'baseplate' ? 'app.k.bolts' : 'app.k.anchor-rods'), tr('app.conn.bolts', { n: g.length, d: g[0].d, length: g[0].length, grade: g[0].grade, grip: ctx.r1(g[0].grip) })]);
    if (weld) rows.push([tr('app.k.weld'), tr('app.conn.weld', { size: weld.size, where: weld.where.toLowerCase(), length: ctx.mm(weld.length) })]);
    const plate = ST.built.byId.get(c.id + '.plate');
    if (plate) rows.push([tr('app.k.plate'), plate.profileName + ' x ' + ctx.r1(plate.length) + ' — ' + (ST.marks.partMark.get(plate.id) || '')]);
    for (const [k, v] of rows) info.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
    if (rows.length) out.push(info);
    out.push(el('p', { className: 'dc-note' }, tr('app.conn.note')));
    const probs = ST.built.problems.filter((x) => x.ref === c.id);
    if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.text))));
    const n = c.type === 'mitre' ? similarMitres(ST.model.state, c).length : c.type === 'gusset' ? similarBraceEnds(ST.model.state, c).length : c.type === 'splice' ? similarSplices(ST.model.state, c).length : isBeamEnd(c) ? similarJoints(ST.model.state, c).length : similarColumns(ST.model.state, c).length;
    const acts = el('div', { className: 'dc-actions' },
      el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: applySimilar, disabled: !n }, tr('app.conn.similar', { n })));
    if (c.type === 'mitre') acts.prepend(el('button', { type: 'button', className: 'btn-line btn-sm-dc', dataset: { mitreOpen: '' }, onclick: () => openMitre({ conn: c }) }, tr('app.conn.mitre-dialog')));
    if (plate && !shopRefusal(plate)) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: ctx.openShop }, tr('app.btn.plate-drawing')));
    acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    return out;
  }
  const partLabel = (id) => { const m = ST.model.member(id); return m ? m.profile + ' ' + (ST.marks.partMark.get(id) || '') + ' (' + nodeName(ST.model.state, m.start) + ')' : tr('app.conn.missing'); };

  /** D8.15: a reference picture — where it lies, how big a pixel is, how strong it shows. */
  function pictureProps(p) {
    const upd = (label, patch) => edit(label, (tx) => tx.updatePicture(p.id, patch));
    const [w, h] = pictureSizeMm(p);
    const lv = ST.model.state.levels.find((l) => Math.abs(l.z - p.z) < 0.5);
    const g = el('div', { className: 'dc-props' });
    g.append(...field(tr('pic.f.x'), numIn(p.x, (v) => upd(tr('pic.undo.move'), { x: v }))),
      ...field(tr('pic.f.y'), numIn(p.y, (v) => upd(tr('pic.undo.move'), { y: v }))),
      ...field(tr('pic.f.z'), numIn(p.z, (v) => upd(tr('pic.undo.move'), { z: v }))),
      ...field(tr('pic.f.scale'), numIn(p.mmPerPx, (v) => { if (!(v > 0)) { print(tr('pic.err.value')); renderProps(); return; } upd(tr('pic.undo.scale'), { mmPerPx: v }); })),
      ...field(tr('pic.f.opacity'), numIn(Math.round(p.opacity * 100), (v) => { if (!(v >= OPACITY_MIN * 100 && v <= 100)) { print(tr('pic.err.opacity')); renderProps(); return; } upd(tr('pic.undo.opacity'), { opacity: v / 100 }); })));
    const info = el('dl', { className: 'dc-props dc-block' });
    fillDl(info, [[tr('pic.k.name'), p.name || tr('pic.unnamed')], [tr('pic.k.pixels'), tr('pic.k.pixels.v', { w: String(p.px[0]), h: String(p.px[1]) })], [tr('pic.k.size'), tr('pic.k.size.v', { w: ctx.mm(w), h: ctx.mm(h) })], [tr('pic.k.level'), lv ? lv.name : tr('pic.k.level.none')]]);
    for (const n of info.querySelectorAll('dt')) n.className = 'k';
    for (const n of info.querySelectorAll('dd')) n.className = 'v';
    return [g, info, el('p', { className: 'dc-note' }, tr(p.size === 'paper' ? 'pic.note.paper' : 'pic.note.real')),
      el('div', { className: 'dc-actions' }, el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')))];
  }

  return { connProps, pictureProps };
}
