/* SPDX-License-Identifier: Apache-2.0 */
/**
 * conn-add-ui.js: detailcraft.js's 7 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountConnAdd(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { findJoints, isBeamEnd, freeSplices, freeBraceEnds, freeMitres, similarMitres, similarBraceEnds, similarSplices, similarJoints, similarColumns } from './connections.js';
import { t as tr } from './i18n.js';

export function mountConnAdd(ctx) {
  const { ST, selected, print, refresh, edit } = ctx;

  // ---- connections ----
  function addEndPlates() {
    if (ST.sel?.kind !== 'member') return;
    const id = ST.sel.id;
    const joints = findJoints(ST.model.state).filter((j) => j.beam === id);
    const taken = new Set(ST.model.state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
    const free = joints.filter((j) => !taken.has(j.beam + ':' + j.end));
    const flange = free.filter((j) => j.face === 'flange' || j.face === 'web');   // square joints (D6: a column web too)
    if (!joints.length) { print(tr('app.endplate.no-joint')); return; }
    if (!flange.length) { print(tr(free.length ? 'app.endplate.skew' : 'app.endplate.both')); return; }
    const ids = edit(tr('app.undo.endplates'), (tx) => flange.map((j) => tx.addConnection({ type: 'endplate', beam: j.beam, end: j.end, column: j.column })));
    if (ids) { ST.sel = { kind: 'conn', id: ids[0] }; refresh(); print(tr('app.endplate.added', { n: flange.length })); }
  }
  /** Shear tabs (D5, D7) at every end of the selected beam that meets a column, square or not. */
  function addShearTabs() {
    if (ST.sel?.kind !== 'member') return;
    const id = ST.sel.id;
    const joints = findJoints(ST.model.state).filter((j) => j.beam === id);
    const taken = new Set(ST.model.state.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
    const free = joints.filter((j) => !taken.has(j.beam + ':' + j.end));
    if (!joints.length) { print(tr('app.endplate.no-joint')); return; }
    if (!free.length) { print(tr('app.endplate.both')); return; }
    const ids = edit(tr('app.undo.sheartabs'), (tx) => free.map((j) => tx.addConnection({ type: 'sheartab', beam: j.beam, end: j.end, column: j.column })));
    if (ids) { ST.sel = { kind: 'conn', id: ids[0] }; refresh(); print(tr('app.sheartab.added', { n: free.length })); }
  }
  /** Bolted splices (D21) wherever a selected beam or column meets another piece of its profile end to end. */
  function addSplices() {
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    if (!ids.length) return;
    const free = freeSplices(ST.model.state, ids);
    if (!free.length) { print(tr('app.splice.none')); return; }
    const cids = edit(tr('app.undo.splice'), (tx) => free.map((j) => tx.addConnection({ type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b })));
    if (cids) { ST.sel = { kind: 'conn', id: cids[0] }; refresh(); print(tr('app.splice.added2', { n: free.length })); }
  }
  /** Brace gussets (D22) at every end of the selected braces that lands on a column or beam. */
  function addGussets() {
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    if (!ids.length) return;
    const free = freeBraceEnds(ST.model.state, ids);
    if (!free.length) { print(tr('app.gusset.none')); return; }
    const cids = edit(tr('app.undo.gusset'), (tx) => free.map((j) => tx.addConnection({ type: 'gusset', brace: j.brace, end: j.end, support: j.support })));
    if (cids) { ST.sel = { kind: 'conn', id: cids[0] }; refresh(); print(tr('app.gusset.added', { n: free.length })); }
  }
  /**
   * Mitres (0.7.1 71.20) where the selected I-shaped members meet end to end at an angle: the Mitre dialog, with a preview,
   * then one undo step for every joint found (the same parameters on each). A selected mitre opens it to change.
   */
  function addMitres() {
    if (ST.sel?.kind === 'conn' && ST.model.connection(ST.sel.id)?.type === 'mitre') { ctx.openMitre({ conn: ST.model.connection(ST.sel.id) }); return; }
    const ids = selected().filter((r) => r.kind === 'member').map((r) => r.id);
    const joints = ids.length >= 2 ? freeMitres(ST.model.state, ids) : [];
    // two members that already have their mitre: open it (a plain cut has no plate to click)
    const had = !joints.length && ST.model.state.connections.find((c) => c.type === 'mitre' && ids.includes(c.a) && ids.includes(c.b));
    if (had) { ctx.openMitre({ conn: had }); return; }
    if (!joints.length) { print(tr('app.mitre.none')); return; }
    ctx.openMitre({ joints });
  }

  function addBasePlate() {
    if (ST.sel?.kind !== 'member') return;
    const id = ST.sel.id;
    if (ST.model.state.connections.some((c) => c.type === 'baseplate' && c.column === id)) { print(tr('app.baseplate.has')); return; }
    const cid = edit(tr('app.undo.baseplate'), (tx) => tx.addConnection({ type: 'baseplate', column: id }));
    if (cid) { ST.sel = { kind: 'conn', id: cid }; refresh(); print(tr('app.baseplate.added')); }
  }
  function applySimilar() {
    if (ST.sel?.kind !== 'conn') return;
    const c = ST.model.connection(ST.sel.id);
    if (c.type === 'mitre') {
      const js = similarMitres(ST.model.state, c);
      if (!js.length) { print(tr('app.mitre.none')); return; }
      edit(tr('app.undo.mitre'), (tx) => { for (const j of js) tx.addConnection({ type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd, params: c.params }); });
      print(tr('app.mitre.added', { n: js.length }));
    } else if (c.type === 'gusset') {
      const js = similarBraceEnds(ST.model.state, c);
      if (!js.length) { print(tr('app.gusset.none')); return; }
      edit(tr('app.undo.gusset'), (tx) => { for (const j of js) tx.addConnection({ type: 'gusset', brace: j.brace, end: j.end, support: j.support, params: c.params }); });
      print(tr('app.gusset.added', { n: js.length }));
    } else if (c.type === 'splice') {
      const js = similarSplices(ST.model.state, c);
      if (!js.length) { print(tr('app.splice.none')); return; }
      edit(tr('app.undo.splice'), (tx) => { for (const j of js) tx.addConnection({ type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b, params: c.params }); });
      print(tr('app.splice.added2', { n: js.length }));
    } else if (isBeamEnd(c)) {
      const js = similarJoints(ST.model.state, c);
      if (!js.length) { print(tr('app.similar.endplate.none')); return; }
      edit(tr('app.undo.similar.endplate'), (tx) => { for (const j of js) tx.addConnection({ type: c.type, beam: j.beam, end: j.end, column: j.column, params: c.params }); });
      print(tr('app.similar.joints', { n: js.length }));
    } else {
      const cols = similarColumns(ST.model.state, c);
      if (!cols.length) { print(tr('app.similar.baseplate.none')); return; }
      edit(tr('app.undo.similar.baseplate'), (tx) => { for (const col of cols) tx.addConnection({ type: 'baseplate', column: col, params: c.params }); });
      print(tr('app.similar.columns', { n: cols.length }));
    }
  }

  return { addEndPlates, addShearTabs, addSplices, addGussets, addMitres, addBasePlate, applySimilar };
}
