/* SPDX-License-Identifier: Apache-2.0 */
/**
 * member-props-ui.js: detailcraft.js's 5 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountMemberProps(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { el } from './ui-util.js';
import { t as tr } from './i18n.js';
import { getProfile, plateName, holeFaces } from './profiles.js';
import { nodeName } from './model.js';
import { shopRefusal } from './shop.js';

export function mountMemberProps(ctx) {
  const { ST, print, edit, deleteSelection, addEndPlates, addShearTabs, addBasePlate, phaseField, field, numIn, textIn, selectIn, profileOptions, materialOptions, positionOptions, ROW_START, xfBlock } = ctx;

  function memberProps(m) {
    const part = ST.built.byId.get(m.id);
    const upd = (label, patch) => edit(label, (tx) => tx.updateMember(m.id, patch));
    const out = [];
    const p = el('div', { className: 'dc-props' });
    p.append(...field(tr('app.f.name'), textIn(m.name, (v) => upd(tr('app.undo.rename'), { name: v }))));
    if (m.type === 'plate') {
      const pr = getProfile(m.profile, ST.model.state.profiles);
      p.append(...field(tr('app.f.thickness'), numIn(pr?.t ?? 20, (v) => upd(tr('app.undo.plate-size'), { profile: plateName(v, pr?.b ?? 200) }), { min: 1 })),
        ...field(tr('app.f.width'), numIn(pr?.b ?? 200, (v) => upd(tr('app.undo.plate-size'), { profile: plateName(pr?.t ?? 20, v) }), { min: 1 })));
    } else p.append(...field(tr('app.f.profile'), selectIn(profileOptions(), m.profile, (v) => upd(tr('app.undo.profile'), { profile: v }))));
    p.append(...field(tr('app.f.material'), selectIn(materialOptions(), m.material, (v) => upd(tr('app.undo.material'), { material: v }))));
    if (m.type !== 'plate') p.append(...field(tr('app.f.position'), selectIn(positionOptions, m.position, (v) => upd(tr('app.undo.position'), { position: v }))));
    p.append(...field(tr('app.f.rotation'), numIn(m.rotation, (v) => upd(tr('app.undo.rotate'), { rotation: v }))));
    p.append(...phaseField([{ kind: 'member', id: m.id }], m.phase || 1));
    out.push(p);
    const ends = el('div', { className: 'dc-props dc-block' }, el('p', { className: 'dc-sub' }, tr('app.member.ends')));
    for (const end of ['start', 'end']) {
      const row = el('div', { className: 'dc-xyz' }, ...[0, 1, 2].map((k) => numIn(m[end][k], (v) => { const pt = [...m[end]]; pt[k] = v; upd(tr('app.undo.move.' + end), { [end]: pt }); }, { id: 'dc-' + end + k })));
      for (const [k, inp] of [...row.children].entries()) inp.setAttribute('aria-label', tr('app.member.' + end + '.axis', { axis: 'xyz'[k] }));
      ends.append(el('span', { className: 'k' }, tr('app.member.' + end)), row, el('span', { className: 'v span dc-muted' }, nodeName(ST.model.state, m[end])));   // i18n-ignore (class names)
    }
    out.push(ends);
    if (part) {
      const info = el('dl', { className: 'dc-props dc-block' });
      const rows = [[tr('app.k.part-mark'), ST.marks.partMark.get(m.id)], [tr('app.k.assembly'), ST.marks.asmMark.get(ST.marks.asmOf.get(m.id))], [tr('app.k.cut-length'), tr('app.unit.mm', { v: ctx.r1(part.length) })], [tr('app.k.weight'), tr('app.member.weight', { kg: ctx.kg(part.weight), mass: part.profile.mass.toFixed(2) })], [tr('app.k.profile-from'), part.profile.massPub !== undefined ? PROFILE_SOURCES[part.profile.source] : part.profile.massFrom]];
      if (part.setback.start || part.setback.end) rows.push([tr('app.k.cut-back'), tr('app.member.cut-back', { start: ctx.r1(part.setback.start), end: ctx.r1(part.setback.end) })]);
      for (const [k, v] of rows) if (v) info.append(el('dt', { className: 'k' }, k), el('dd', { className: 'v' }, v));
      out.push(info);
    }
    out.push(...holeEditor(m, part), ...copeEditor(m), ...xfBlock([{ kind: 'member', id: m.id }]));
    const acts = el('div', { className: 'dc-actions' });
    if (m.type === 'beam') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addEndPlates }, tr('app.btn.endplates')));
    if (m.type === 'beam') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addShearTabs }, tr('app.btn.sheartabs')));
    if (m.type === 'column') acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: addBasePlate }, tr('app.btn.baseplate')));
    if (part && !shopRefusal(part)) acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc', onclick: ctx.openShop }, tr('app.btn.shop')));
    acts.append(el('button', { type: 'button', className: 'btn-line btn-sm-dc dc-danger', onclick: deleteSelection }, tr('app.btn.delete')));
    out.push(acts);
    const probs = ST.built.problems.filter((x) => x.ref === m.id);
    if (probs.length) out.push(el('ul', { className: 'dc-msgs' }, ...probs.map((x) => el('li', { className: x.hard ? 'is-hard' : '' }, x.text))));
    return out;
  }

  const PROFILE_SOURCES = { aisc: 'AISC Shapes Database v16.0', en: 'EN 10365:2017' };   // i18n-ignore: names of the published tables
  const FACE_NAME = { web: tr('app.face.web'), top: tr('app.face.top'), bottom: tr('app.face.bottom'), plate: tr('app.face.plate') };
  function holeEditor(m, part) {
    const prof = getProfile(m.profile, ST.model.state.profiles);
    const faces = holeFaces(prof);
    const box = el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.holes.title')));
    const list = el('ul', { className: 'dc-list' });
    for (const h of m.holes) list.append(el('li', {}, el('span', {}, tr('app.holes.item', { face: FACE_NAME[h.face], d: ctx.r1(h.d), x: ctx.r1(h.x), y: ctx.r1(h.y) })),
      el('button', { type: 'button', className: 'shell-x', title: tr('app.holes.remove'), 'aria-label': tr('app.holes.remove'), onclick: () => edit(tr('app.undo.remove-hole'), (tx) => tx.removeHole(m.id, h.id)) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))));
    const fromConn = part ? part.holes.filter((h) => h.conn) : [];
    if (fromConn.length) list.append(el('li', { className: 'dc-muted' }, tr('app.holes.from-conn', { n: fromConn.length })));
    if (!m.holes.length && !fromConn.length) list.append(el('li', { className: 'dc-muted' }, tr('app.holes.none')));
    box.append(list);
    if (!faces.length) { box.append(el('p', { className: 'dc-note' }, tr('app.holes.where'))); return [box]; }
    const f = { face: faces[0], x: 100, y: 0, d: 22 };
    const form = el('form', { className: 'dc-props' },
      ...field(tr('app.holes.face'), selectIn(faces.map((x) => [x, FACE_NAME[x]]), f.face, (v) => { f.face = v; })),
      ...field(tr('app.holes.x'), numIn(f.x, (v) => { f.x = v; })),
      ...field(tr('app.holes.y'), numIn(f.y, (v) => { f.y = v; })),
      ...field(tr('app.holes.d'), numIn(f.d, (v) => { f.d = v; }, { min: 1 })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.holes.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      if (edit(tr('app.undo.add-hole'), (tx) => tx.addHole(m.id, f))) print(tr('app.holes.added'));
    });
    box.append(form);
    return [box];
  }
  function copeEditor(m) {
    const prof = getProfile(m.profile, ST.model.state.profiles);
    if (!prof || prof.kind !== 'I') return [];
    const box = el('div', { className: 'dc-block' }, el('p', { className: 'dc-sub' }, tr('app.copes.title')));
    const list = el('ul', { className: 'dc-list' });
    for (const c of m.cuts) list.append(el('li', {}, el('span', {}, tr('app.copes.item', { side: tr('app.side.' + c.side), end: tr('app.word.' + c.end), length: ctx.r1(c.length), depth: ctx.r1(c.depth) })),
      el('button', { type: 'button', className: 'shell-x', title: tr('app.copes.remove'), 'aria-label': tr('app.copes.remove'), onclick: () => edit(tr('app.undo.remove-cope'), (tx) => tx.removeCut(m.id, c.id)) }, el('i', { className: 'bi bi-x-lg', 'aria-hidden': 'true' }))));
    if (!m.cuts.length) list.append(el('li', { className: 'dc-muted' }, tr('app.copes.none')));
    const f = { kind: 'cope', end: 'start', side: 'top', length: 100, depth: 40 };
    const form = el('form', { className: 'dc-props' },
      ...field(tr('app.copes.end'), selectIn([['start', tr('app.member.start')], ['end', tr('app.member.end')]], f.end, (v) => { f.end = v; })),
      ...field(tr('app.copes.side'), selectIn([['top', tr('app.side.top')], ['bottom', tr('app.side.bottom')]], f.side, (v) => { f.side = v; })),
      ...field(tr('app.copes.length'), numIn(f.length, (v) => { f.length = v; }, { min: 1 })),
      ...field(tr('app.copes.depth'), numIn(f.depth, (v) => { f.depth = v; }, { min: 1 })),
      el('div', { className: ROW_START }, el('button', { type: 'submit', className: 'btn-line btn-sm-dc' }, tr('app.copes.add'))));
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      for (const i of form.querySelectorAll('input')) i.dispatchEvent(new Event('change'));
      edit(tr('app.undo.add-cope'), (tx) => tx.addCut(m.id, f));
    });
    box.append(list, form);
    return [box];
  }

  return { memberProps };
}
