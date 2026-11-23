/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — rule ids and problem codes; the words the person reads come from the language file (cons.*) */
/**
 * constructability.js — the things an experienced detailer catches (0.8 round 2, EG.43). No DOM: tools/detailcraft-test/test-constructability.mjs
 * runs it in Node. Rules in Problems, building on the spacing and edge warnings DetailCraft's connections already give (EN 1993-1-8 Table 3.3).
 *
 *   constructability(state, built, opts) → [problem]
 *
 * Five rules:
 *   cons.access   a bolt or nut a wrench cannot reach: the socket's cylinder, from the bearing face outward for the socket's length, runs into
 *                 another part (the beam's web or flange, the column's other flange, a plate).
 *   cons.bolts    bolts so close that the socket over one touches the head of the next.
 *   cons.weld     fillet weld sizes outside the limits of AISC 360-16 J2.2b and Table J2.4: the smallest by the thinner part's thickness
 *                 (3 mm to 6.35 mm thick, 5 mm to 12.7, 6 mm to 19.05, 8 mm above) and, along an edge of material under 6.35 mm, no bigger than
 *                 the material, else 1.6 mm less.
 *   cons.water    a hollow section that holds water or cannot be galvanised: an open upper end of an upright or sloping tube (rain runs in), and a
 *                 tube closed at both ends (it needs a vent and a drain hole: hot-dip galvanising practice, ISO 14713-2).
 *
 * The wrench numbers are typical, not a catalogue's, and can be changed: a heavy hex nut is about 1.7·d across flats, so about 1.96·d across corners;
 * the socket adds a wall of `socketWall` mm to that and is `socketLength` mm long. Defaults: 60 mm long, 4 mm wall (an impact socket). A bolt tightened
 * by hand with a spanner needs less room; one tightened by a bigger tool, more.
 *
 *   cons.weldaccess  a fillet weld the welder cannot reach (0.8 round 3). The model does not keep a weld's line in space, so only an all-round fillet
 *                 weld (an end plate, a base plate, a mitre plate: the weld runs round the member's section where the plate meets it) is located: its
 *                 line is the member's section outline at the end nearest the plate. A fillet is made with the torch on the bisector of the angle it
 *                 fills (half way between the member's outer face and the plate's face, 45° to each), so from each point of the line, every 20 mm,
 *                 a cylinder of `torchRadius` (a gun nozzle is 16 to 22 mm across) runs out along that bisector, from where it first clears both faces of the fillet (radius × √2) for `torchReach` mm; if it meets the member's
 *                 own flange or another part, the weld there is blocked. Typical numbers, not a standard's: ask the fabricator for the process and nozzle.
 */
import { solids, depthIn, solidIndex } from './clash.js';
import { membersOf } from './connections.js';
import { add3 as add, cross3 as cross, dot3 as dot, scale3 as mul, sub3 as sub } from './geom-vec.js';   // shared helpers (0.11 PERF.74; tools/perf/util-copies.mjs)

export const CONS_DEFAULTS = Object.freeze({ socketLength: 60, socketWall: 4, nutRatio: 0.8, headRatio: 0.65, cornersRatio: 1.96, torchRadius: 10, torchReach: 30, rules: ['access', 'bolts', 'weld', 'weldaccess', 'water'] });
const unit = (a) => { const n = Math.hypot(...a) || 1; return mul(a, 1 / n); };
const r1 = (v) => Math.round(v * 10) / 10;

/** Two vectors across an axis. */
function perp(a) {
  const h = Math.abs(a[0]) < 0.9 ? [1, 0, 0] : [0, 1, 0];
  const u = unit(cross(a, h));
  return [u, cross(a, u)];
}

/** Does a point lie inside the OBB of a solid (with margin)? */
function inBox(S, p, m = 2) {   // the same sums as dot(sub(p, c), axis), without a vector per call
  const c = S.box.c, ax = S.box.ax, h = S.box.h, x = p[0] - c[0], y = p[1] - c[1], z = p[2] - c[2];
  for (let i = 0; i < 3; i++) { const a = ax[i]; if (Math.abs(x * a[0] + y * a[1] + z * a[2]) > h[i] + m) return false; }
  return true;
}

const REF = (b) => (b.conn ? { kind: 'conn', id: b.conn } : b.loose ? { kind: 'bolt', id: b.loose } : null);

export function constructability(state, built, optsIn = {}) {
  const o = { ...CONS_DEFAULTS, ...optsIn };
  const on = new Set(o.rules);
  const out = [], source = { kind: 'engine', name: 'detailcraft.constructability' };
  const S = solids(state, built, null).filter((s) => s.kind === 'steel');
  const index = solidIndex(S), near = index.near;   // 0.10 FX.144: a sample point meets only the few solids whose box holds it, in the list's order
  const byPartId = new Map();   // the first solid of an id, as S.find gave it
  for (const q of S) if (!byPartId.has(q.id)) byPartId.set(q.id, q);
  // 0.10 PERF.36: `optsIn.cache` (a Map the caller keeps) holds each connection's access and bolt-spacing problems with a fingerprint of its bolts and of the steel
  // within reach of them; an edit re-checks only the connections whose fingerprint moved. Other options change the answer, so they clear it.
  const cache = optsIn.cache instanceof Map ? optsIn.cache : null;
  const optKey = cache ? JSON.stringify({ ...o, cache: undefined }) : '';
  if (cache && cache.get('\0opts') !== optKey) { cache.clear(); cache.set('\0opts', optKey); }
  const solidSig = new Map();
  const rounded = (k, v) => (typeof v === 'number' ? Math.round(v * 100) : v);   // 0.01 mm: below what a drawing shows
  const sigOf = (q) => { let g = solidSig.get(q); if (g === undefined) { g = JSON.stringify([q.id, q.kind, q.box, q.frame, q.L, q.voff, q.loops, q.cuts, q.depth], rounded); solidSig.set(q, g); } return g; };
  const connPrint = (list) => {
    const near2 = new Set();
    let sig = '';
    for (const b of list) {
      const ax = unit(b.axis), tip = add(b.head, mul(ax, b.grip)), reach = o.socketLength + (o.cornersRatio / 2 + o.nutRatio) * b.d + o.socketWall + 4;
      for (const q of index.within([Math.min(b.head[0], tip[0]), Math.min(b.head[1], tip[1]), Math.min(b.head[2], tip[2])], [Math.max(b.head[0], tip[0]), Math.max(b.head[1], tip[1]), Math.max(b.head[2], tip[2])], reach)) near2.add(q);
      sig += [...b.head, ...b.axis, b.d, b.grip].map((v) => Math.round(v * 100)).join(',') + ';';
    }
    return sig + '|' + [...near2].map(sigOf).join(';');
  };
  const partLabel = (id) => id;
  const discs = new Map();
  const push = (code, severity, vars, about, key) => out.push({ id: 'cons:' + code + ':' + key, code: 'cons.' + code, severity, msg: { key: 'cons.prob.' + code, vars }, about, source });

  if (on.has('access') || on.has('bolts')) {
    const byConn = new Map();
    for (const b of built.bolts) {
      if (b.kind !== 'BOLT' || !b.conn || !b.head || !b.axis) continue;
      if (!byConn.has(b.conn)) byConn.set(b.conn, []);
      byConn.get(b.conn).push(b);
    }
    for (const [conn, list] of byConn) {
      const first0 = out.length;
      let print = null;
      if (cache) {
        print = connPrint(list);
        const hit = cache.get(conn);
        if (hit && hit.print === print) { out.push(...hit.items); continue; }
      }
      const hits = new Map();   // side|part → { n, free }
      for (const b of list) {
        const ax = unit(b.axis), d = b.d;
        const corners = o.cornersRatio * d, Rs = corners / 2 + o.socketWall;
        const nutT = o.nutRatio * d;
        const sides = [
          { side: 'head', from: add(b.head, mul(ax, -2)), dir: mul(ax, -1) },
          { side: 'nut', from: add(b.head, mul(ax, b.grip + nutT + 2)), dir: ax },
        ];
        if (on.has('access')) for (const sd of sides) {
          const [u, v] = perp(sd.dir);
          let first = null;
          let pts = discs.get(Rs);   // a grid over the socket's disc, fine enough to meet a 6 mm web; one per radius
          if (!pts) {
            const step = Math.max(2.5, Rs / 8); pts = [[0, 0]];
            for (let gx = -Rs; gx <= Rs; gx += step) for (let gy = -Rs; gy <= Rs; gy += step) if ((gx || gy) && gx * gx + gy * gy <= Rs * Rs) pts.push([gx, gy]);
            discs.set(Rs, pts);
          }
          for (let k = 0; k <= 4 && !first; k++) {
            const s = k === 0 ? 0 : (o.socketLength * k) / 4;
            for (const [gx, gy] of (k === 0 ? [[0, 0]] : pts)) {
              const p = add(add(sd.from, mul(sd.dir, s)), add(mul(u, gx), mul(v, gy)));
              for (const q of near(p)) {
                if (!inBox(q, p)) continue;
                if (depthIn(q, p) > 0.5) { first = { q, s, r: Math.hypot(gx, gy) }; break; }
              }
              if (first) break;
            }
          }
          if (first) {
            const key = sd.side + '|' + first.q.id;
            const h = hits.get(key) || { n: 0, free: Infinity, side: sd.side, part: first.q };
            h.n++; h.free = Math.min(h.free, first.s);
            hits.set(key, h);
          }
        }
      }
      if (on.has('access')) for (const h of hits.values()) {
        const owner = h.part.member || h.part.conn || h.part.id;
        push('access', 'warning', { conn, n: h.n, side: h.side, part: partLabel(h.part.id), free: r1(h.free), need: o.socketLength }, [{ kind: 'conn', id: conn }], conn + ':' + h.side + ':' + h.part.id);
      }
      if (on.has('bolts')) {
        let worst = null;
        for (let i = 0; i < list.length; i++) for (let j = i + 1; j < list.length; j++) {
          const a = list[i], c = list[j], A = unit(a.axis), C = unit(c.axis);
          if (Math.abs(dot(A, C)) < 0.999) continue;
          const sameSide = dot(A, C) > 0;
          const dv = sub(c.head, a.head), along = dot(dv, A), lat = Math.hypot(...sub(dv, mul(A, along)));
          const need = Math.max(a.d, c.d) * o.cornersRatio / 2 + o.socketWall + Math.min(a.d, c.d) * o.cornersRatio / 2;
          const headH = o.headRatio * Math.max(a.d, c.d);
          if (sameSide && Math.abs(along) <= headH + 1 && lat < need - 1e-6 && (!worst || lat < worst.lat)) worst = { lat, need, d: Math.max(a.d, c.d) };
          if (!sameSide && Math.abs(along - b2grip(a)) <= headH + 1 && lat < need - 1e-6 && (!worst || lat < worst.lat)) worst = { lat, need, d: Math.max(a.d, c.d) };
        }
        if (worst) push('bolts', 'warning', { conn, spacing: r1(worst.lat), need: r1(worst.need), d: worst.d }, [{ kind: 'conn', id: conn }], conn);
      }
      if (cache) cache.set(conn, { print, items: out.slice(first0) });
    }
    if (cache) for (const k of [...cache.keys()]) if (k[0] !== '\0' && !byConn.has(k)) cache.delete(k);
  }
  if (on.has('weld')) {
    const groups = new Map();   // the same size on the same thickness is one problem naming every connection that has it
    for (const w of built.welds || []) {
      if (w.kind !== 'fillet' || !w.size) continue;
      const th = (id) => { const p = built.byId.get(id); const pr = p?.profile; if (!pr) return null; const t = pr.t ?? Math.min(pr.tf ?? Infinity, pr.tw ?? Infinity); return Number.isFinite(t) ? t : null; };
      const ts = (w.between || []).map(th).filter((t) => t != null);
      if (!ts.length) continue;
      const thin = Math.min(...ts);
      const min = thin <= 6.35 ? 3 : thin <= 12.7 ? 5 : thin <= 19.05 ? 6 : 8;
      const max = thin < 6.35 ? thin : thin - 1.6;
      const which = w.size < min - 1e-6 ? 'min' : w.size > max + 1e-6 ? 'max' : null;
      if (!which) continue;
      const key = which + ':' + w.size + ':' + r1(thin);
      if (!groups.has(key)) groups.set(key, { which, size: w.size, limit: which === 'min' ? min : r1(max), t: r1(thin), conns: new Set() });
      groups.get(key).conns.add(w.conn);
    }
    for (const [key, g] of groups) push('weld', 'warning', { n: g.conns.size, conns: [...g.conns].slice(0, 6).join(', '), size: g.size, limit: g.limit, t: g.t, which: g.which }, [...g.conns].map((id) => ({ kind: 'conn', id })), key);
  }
  if (on.has('weldaccess')) {
    const groups = new Map(), weldKeys = new Set();
    const partOf = (id) => byPartId.get(id);
    for (const w of built.welds || []) {
      if (w.kind !== 'fillet' || !w.allRound || !w.between || w.between.length < 2 || !w.conn) continue;
      const A = partOf(w.between[0]), B = partOf(w.between[1]);
      if (!A || !B || !A.loops?.[0]) continue;
      // PERF.36: the trial of one weld depends on the weld, its two parts and the steel within the torch's reach of the member; same print = same answer
      let wkey = null, trial = null;
      if (cache) {
        const bx = A.box, e = [0, 1, 2].map((k) => Math.abs(bx.ax[0][k]) * bx.h[0] + Math.abs(bx.ax[1][k]) * bx.h[1] + Math.abs(bx.ax[2][k]) * bx.h[2]);
        const reachW = o.torchRadius * Math.SQRT2 + 1 + o.torchReach + 1.5 * o.torchRadius + 5;
        wkey = JSON.stringify(w, rounded) + '|' + sigOf(A) + '|' + sigOf(B) + '|' + index.within([0, 1, 2].map((k) => bx.c[k] - e[k]), [0, 1, 2].map((k) => bx.c[k] + e[k]), reachW).map(sigOf).join(';');
        let wm = cache.get('\0welds'); if (!wm) cache.set('\0welds', wm = new Map());
        trial = wm.get(wkey); weldKeys.add(wkey);
      }
      if (!trial) trial = (() => {
      // the end of the member nearest the plate; the direction away from the plate along the member
      const atStart = Math.hypot(...sub(A.frame.o, B.box.c)) <= Math.hypot(...sub(add(A.frame.o, mul(A.frame.x, A.L)), B.box.c));
      const lx = atStart ? 0 : A.L, away = atStart ? A.frame.x : mul(A.frame.x, -1);
      const world = (u, v) => add(add(A.frame.o, mul(A.frame.x, lx)), add(mul(A.frame.u, u), mul(A.frame.v, v + A.voff)));
      const s0 = o.torchRadius * Math.SQRT2 + 1;   // where the nozzle's side first clears both faces of the fillet
      let blocked = 0, total = 0, free = Infinity, by = null;
      for (const loop of A.loops) {
        for (let i = 0, j = loop.length - 1; i < loop.length; j = i++) {
          const a = loop[j], b = loop[i], e = [b[0] - a[0], b[1] - a[1]], len = Math.hypot(e[0], e[1]);
          if (len < 1e-6) continue;
          const steps = Math.max(1, Math.min(40, Math.round(len / 20)));
          let nrm = [e[1] / len, -e[0] / len];
          // the outward side is the one that leaves the member's section
          const mid = [(a[0] + b[0]) / 2, (a[1] + b[1]) / 2], probe = world(mid[0] + nrm[0] * 0.8, mid[1] + nrm[1] * 0.8);
          const inside = (pt) => depthIn(A, add(pt, mul(away, 0.01))) > 0 || depthIn(A, pt) > 0;
          if (inside(probe)) nrm = [-nrm[0], -nrm[1]];
          const outW = add(mul(A.frame.u, nrm[0]), mul(A.frame.v, nrm[1]));
          const dir = unit(add(outW, away));   // 45° between the member's face and the plate's face
          const [pu, pv] = perp(dir);
          for (let k = 0; k < steps; k++) {
            const f = (k + 0.5) / steps, p0 = world(a[0] + e[0] * f, a[1] + e[1] * f);
            total++;
            let hit = null;
            const rings = [[0, 0], [1, 0], [-1, 0], [0, 1], [0, -1], [0.7, 0.7], [-0.7, 0.7], [0.7, -0.7], [-0.7, -0.7]];
            for (let s = s0; s <= s0 + o.torchReach && !hit; s += 5) {
              for (const [gx, gy] of rings) {
                const pt = add(add(p0, mul(dir, s)), add(mul(pu, gx * o.torchRadius), mul(pv, gy * o.torchRadius)));
                for (const q of near(pt)) {
                  if (q.id === B.id || !inBox(q, pt)) continue;
                  if (depthIn(q, pt) > 0.5) { hit = { q, s }; break; }
                }
                if (hit) break;
              }
            }
            if (hit) { blocked++; if (hit.s < free) { free = hit.s; by = hit.q; } }
          }
        }
      }
      return { blocked, total, free, byId: by ? by.id : null };
      })();
      if (cache && !cache.get('\0welds').has(wkey)) cache.get('\0welds').set(wkey, trial);
      const { blocked, total, free } = trial, by = trial.byId == null ? null : byPartId.get(trial.byId);
      if (!blocked || !by) continue;
      const key = w.conn + ':' + by.id;
      const g = groups.get(key) || { conn: w.conn, part: by.id, blocked: 0, total: 0, free: Infinity, size: w.size, where: w.where };
      g.blocked += blocked; g.total += total; g.free = Math.min(g.free, free);
      groups.set(key, g);
    }
    for (const g of groups.values()) push('weldaccess', 'warning', { conn: g.conn, part: partLabel(g.part), pct: Math.round(100 * g.blocked / g.total), free: r1(g.free), need: o.torchReach, size: g.size, where: g.where || '' }, [{ kind: 'conn', id: g.conn }], g.conn + ':' + g.part);
    if (cache?.has('\0welds')) for (const k of [...cache.get('\0welds').keys()]) if (!weldKeys.has(k)) cache.get('\0welds').delete(k);   // keep only this run's welds
  }
  if (on.has('water')) {
    const closing = new Set(['endplate', 'baseplate']);
    const closed = new Set(), memberById = new Map();
    for (const m of state.members) if (!memberById.has(m.id)) memberById.set(m.id, m);
    for (const c of state.connections) {
      if (!closing.has(c.type)) continue;
      closed.add((c.type === 'baseplate' ? c.column : c.beam) + ':' + (c.type === 'baseplate' ? bottomEnd(memberById, c.column) : c.end));
    }
    for (const m of state.members) {
      const p = built.byId.get(m.id)?.profile;
      if (!p || (p.kind !== 'RHS' && p.kind !== 'CHS')) continue;
      const dz = m.end[2] - m.start[2], len = Math.hypot(m.end[0] - m.start[0], m.end[1] - m.start[1], dz);
      if (len < 1) continue;
      const upper = dz >= 0 ? 'end' : 'start', lower = upper === 'end' ? 'start' : 'end';
      const slope = Math.asin(Math.abs(dz) / len) * 180 / Math.PI;
      const upClosed = closed.has(m.id + ':' + upper), lowClosed = closed.has(m.id + ':' + lower);
      if (upClosed && lowClosed) out.push({ id: 'cons:water:' + m.id + ':closed', code: 'cons.water', severity: 'note', msg: { key: 'cons.prob.water-closed', vars: { member: m.id, kind: 'closed' } }, about: [{ kind: 'member', id: m.id }], source });
      else if (!upClosed && slope > 10) push('water', 'note', { member: m.id, kind: 'open' }, [{ kind: 'member', id: m.id }], m.id + ':open');
    }
  }
  return out;
}
const b2grip = (b) => b.grip + 0;
function bottomEnd(memberById, colId) {
  const m = memberById.get(colId);
  return m && m.start[2] <= m.end[2] ? 'start' : 'end';
}
