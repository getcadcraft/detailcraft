/* SPDX-License-Identifier: Apache-2.0 */
/**
 * place-ui.js: detailcraft.js's 2 bindings for this topic, moved out of start() unchanged (0.11 PERF.71 round two + PERF.78 panel sections, perf-finish-11 r2 civil-detail; no behaviour change).
 * mountPlace(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { ghostLines, moveXf } from './transform.js';
import { t as tr } from './i18n.js';
import { nodeName } from './model.js';
import { stairGeometry } from './stair.js';
import { getProfile, plateName } from './profiles.js';

export function mountPlace(ctx) {
  const { ST, opts, print, edit, setTool } = ctx;

  // ---- placing ----
  function placeAt(n) {
    const s = ST.model.state;
    if (ST.tool === 'move') {
      if (!ST.pending) {
        ST.pending = n;
        if (ST.view) { ST.view.rubberFrom = n.p; ST.view.ghost = ghostLines(s, ST.moveRefs, n.p); ST.view.drawOverlay(); }
        print(tr('xf.move.to', { from: nodeName(s, n.p) }));
        return;
      }
      if (ST.pending.p.join() === n.p.join()) { print(tr('xf.move.same')); return; }
      const d = [n.p[0] - ST.pending.p[0], n.p[1] - ST.pending.p[1], n.p[2] - ST.pending.p[2]];
      const refs = ST.moveRefs;
      setTool('select');
      ctx.runXf(refs, moveXf(...d), false, { kind: 'move', d });
      return;
    }
    if (ST.tool === 'paste') {
      if (!ST.pasteClip) return setTool('select');
      const b = ST.pasteClip.base;
      ctx.pasteClipAt(ST.pasteClip, [n.p[0] - b[0], n.p[1] - b[1], n.p[2] - b[2]], 'at', { node: nodeName(s, n.p) });
      return;
    }
    if (ST.tool === 'column') {
      const above = s.levels.filter((l) => l.z > n.p[2] + 0.5);
      const top = above.find((l) => l.name === opts.column.to) || above[0];
      if (!top) { print(tr('app.place.column.no-level', { level: n.level })); return; }
      const o = opts.column;
      const id = edit(tr('app.undo.place.column'), (tx) => tx.addMember({ type: 'column', profile: o.profile, material: o.material, position: o.position, rotation: o.rotation, start: n.p, end: [n.p[0], n.p[1], top.z], phase: ST.curPhase }));
      if (id) print(tr('app.place.column.done', { profile: o.profile, gy: n.gy, gx: n.gx, level: n.level, top: top.name }));
      return;
    }
    if (ST.tool === 'footing') {
      const o = opts.footing;
      const id = edit(tr('app.undo.place.footing'), (tx) => tx.addFooting({ x: n.p[0], y: n.p[1], top: n.p[2], L: o.L, B: o.B, H: o.H, concrete: o.concrete, mat: o.mat, starters: o.starters, phase: ST.curPhase }));
      if (id) print(tr('app.place.footing.done', { l: ctx.mm(o.L), b: ctx.mm(o.B), h: ctx.mm(o.H), gy: n.gy, gx: n.gx }));
      return;
    }
    if (ST.tool === 'stair') {
      const o = opts.useGen ? opts.steelStair : opts.stair;
      let rise = o.rise;
      if (!rise) {
        const up = s.levels.filter((l) => l.z > n.p[2] + 0.5).sort((a, b) => a.z - b.z)[0];
        if (!up) { print(tr('app.place.stair.no-level', { level: n.level })); return; }
        rise = up.z - n.p[2];
      }
      const id = edit(tr('app.undo.place.stair'), (tx) => tx.addStair({ ...o, tread: { ...o.tread }, x: n.p[0], y: n.p[1], z: n.p[2], rise, phase: ST.curPhase }));
      if (id) {
        const g = stairGeometry(ST.model.stair(id), (nm) => getProfile(nm, ST.model.state.profiles));
        print(opts.useGen ? tr('app.stair.gen.done', { n: g.n, r: ctx.r1(g.riser), g: ctx.r1(g.going), f: g.gen.flights.length, l: g.gen.landings.length }) : tr('app.place.stair.done', { n: g.n, r: ctx.r1(g.riser), gy: n.gy, gx: n.gx }));
      }
      return;
    }
    if (!['beam', 'brace', 'plate'].includes(ST.tool)) return;
    if (!ST.pending) {
      ST.pending = n;
      if (ST.view) { ST.view.rubberFrom = n.p; ST.view.drawOverlay(); }
      print(tr('app.place.from', { node: nodeName(s, n.p) }));
      return;
    }
    if (ST.pending.p.join() === n.p.join()) { print(tr('app.place.same')); return; }
    const a = ST.pending.p, b = n.p;
    ST.pending = null;
    if (ST.view) { ST.view.rubberFrom = null; ST.view.drawOverlay(); }
    placeLine(a, b);
  }
  function placeLine(a, b) {
    const o = opts[ST.tool];
    const profile = ST.tool === 'plate' ? plateName(o.t, o.w) : o.profile;
    const id = edit(tr('app.undo.place.' + ST.tool), (tx) => tx.addMember({ type: ST.tool, profile, material: o.material, position: o.position, rotation: o.rotation, start: a, end: b, phase: ST.curPhase }));
    if (id) print(tr('app.place.done.' + ST.tool, { profile, from: nodeName(ST.model.state, a), to: nodeName(ST.model.state, b) }));
  }

  return { placeAt, placeLine };
}
