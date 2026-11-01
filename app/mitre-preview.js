/* SPDX-License-Identifier: Apache-2.0 */
/**
 * mitre-preview.js — what the Mitre dialog draws (0.7.1 71.20). No DOM. Millimeters.
 *
 *   mitrePreview(state, joint, params, id) → { ok, problems [{ text, hard }], angle, cut, shapes, bolts, callouts, box }
 *
 * joint = { a, aEnd, b, bEnd } (connections.js findMitres); params = the mitre's parameters (missing ones from MITRE_DEFAULTS);
 * id = the connection being edited (its stored version is left out), or none for a new one. The two members and the mitre are
 * built on their own (the rest of the model is left out, so a large model stays quick) with build.js, the same code the model
 * uses, and drawn square to the plane the two members share: x along the mitre plane's normal (from a toward b), y toward the
 * outside corner, origin where the center lines meet. Each member is drawn for 1.6 × the deeper section from its cut.
 *   shapes   [{ kind: member|plate|stiffener|flange, pts, closed }]
 *   bolts    [[p, q]] each bolt from its head along its shank
 *   callouts [{ n, at }] the dialog's numbered fields, at the thing each one sets: 1 gap, 2 end plate, 3 bolts, 4 / 5 the
 *            plate's outside / inside end, 6 / 7 the stiffeners (only the ones that are there)
 *   box      [x0, y0, x1, y1] round all of it
 */
import { build } from './build.js';
import { MITRE_DEFAULTS } from './connections.js';
import { toWorld, endX, sub, dot, add, mul } from './geom.js';

/** Convex hull (monotone chain) of 2D points, counter-clockwise. */
function hull2(pts) {
  const p = [...pts].sort((a, b) => a[0] - b[0] || a[1] - b[1]);
  if (p.length < 3) return p;
  const cr = (o, a, b) => (a[0] - o[0]) * (b[1] - o[1]) - (a[1] - o[1]) * (b[0] - o[0]);
  const lo = [], hi = [];
  for (const q of p) { while (lo.length >= 2 && cr(lo[lo.length - 2], lo[lo.length - 1], q) <= 0) lo.pop(); lo.push(q); }
  for (const q of p.reverse()) { while (hi.length >= 2 && cr(hi[hi.length - 2], hi[hi.length - 1], q) <= 0) hi.pop(); hi.push(q); }
  return lo.slice(0, -1).concat(hi.slice(0, -1));
}

export function mitrePreview(state, joint, params, id = null) {
  const cid = id || 'mitre-preview';
  const conn = { id: cid, type: 'mitre', a: joint.a, aEnd: joint.aEnd, b: joint.b, bEnd: joint.bEnd, params: { ...MITRE_DEFAULTS, ...(params || {}) } };
  const mini = { ...state, members: state.members.filter((m) => m.id === joint.a || m.id === joint.b), connections: [conn], footings: [], stairs: [], bolts: [] };
  const built = build(mini);
  const problems = built.problems.filter((x) => x.ref === cid || x.ref === joint.a || x.ref === joint.b).map((x) => ({ text: x.text, hard: !!x.hard }));
  const info = built.infos.get(cid);
  if (!info || problems.some((x) => x.hard)) return { ok: false, problems };
  const { J, n, out } = info;
  const P2 = (w) => { const d = sub(w, J); return [dot(d, n), dot(d, out)]; };
  const shapes = [], callouts = [];
  const R = 1.6 * Math.max(...[joint.a, joint.b].map((m) => built.byId.get(m)?.profile.depth || 0));
  for (const [mid, end] of [[joint.a, joint.aEnd], [joint.b, joint.bEnd]]) {
    const part = built.byId.get(mid);
    if (!part) continue;
    const pr = part.profile, w2 = pr.width / 2, h2 = pr.depth / 2, box = [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]];
    const faces = box.map(([u, v]) => endX(part, end, u, v));
    const far = end === 'end' ? Math.max(0, Math.min(...faces) - R) : Math.min(part.length, Math.max(...faces) + R);
    const pts = [];
    for (const [u, v] of box) pts.push(P2(toWorld(part.frame, endX(part, end, u, v), u, v, part.voff)), P2(toWorld(part.frame, far, u, v, part.voff)));
    shapes.push({ kind: 'member', pts: hull2(pts), closed: true, id: mid });
    // the flanges' inner faces, seen through the web
    for (const sg of [-1, 1]) {
      const v = sg * (h2 - pr.tf);
      shapes.push({ kind: 'flange', pts: [P2(toWorld(part.frame, endX(part, end, 0, v), 0, v, part.voff)), P2(toWorld(part.frame, far, 0, v, part.voff))], closed: false });
    }
  }
  const sub_ = built.parts.filter((p) => p.conn === cid);
  for (const p of sub_) {
    const w2 = p.profile.width / 2, h2 = p.profile.depth / 2, pts = [];
    for (const x of [0, p.length]) for (const [u, v] of [[-w2, -h2], [w2, -h2], [w2, h2], [-w2, h2]]) pts.push(P2(toWorld(p.frame, x, u, v, p.voff)));
    shapes.push({ kind: /\.s[ab][12]$/.test(p.id) ? 'stiffener' : 'plate', pts: hull2(pts), closed: true, id: p.id });
  }
  const bolts = built.bolts.filter((b) => b.conn === cid).map((b) => [P2(b.head), P2(add(b.head, mul(b.axis, b.length)))]);
  const mid = (pts) => [pts.reduce((s, q) => s + q[0], 0) / pts.length, pts.reduce((s, q) => s + q[1], 0) / pts.length];
  callouts.push({ n: 1, at: [0, 0] });
  const pa = shapes.find((s) => s.id === cid + '.pa');
  if (pa) {
    callouts.push({ n: 2, at: mid(pa.pts) });
    const ys = pa.pts.map((q) => q[1]);
    const top = pa.pts[ys.indexOf(Math.max(...ys))], bot = pa.pts[ys.indexOf(Math.min(...ys))];
    callouts.push({ n: 4, at: top }, { n: 5, at: bot });
  }
  if (bolts.length) callouts.push({ n: 3, at: mid(bolts.flatMap((b) => b)) });
  const sa = shapes.find((s) => s.id === cid + '.sa1'), sb = shapes.find((s) => s.id === cid + '.sb1');
  if (sa) callouts.push({ n: 6, at: mid(sa.pts) });
  if (sb) callouts.push({ n: 7, at: mid(sb.pts) });
  const all = [...shapes.flatMap((s) => s.pts), ...bolts.flat()];
  const xs = all.map((q) => q[0]), ys = all.map((q) => q[1]);
  const m = 0.12 * Math.max(Math.max(...xs) - Math.min(...xs), Math.max(...ys) - Math.min(...ys));
  return { ok: true, problems, angle: info.angle, cut: info.cut, shapes, bolts, callouts, box: [Math.min(...xs) - m, Math.min(...ys) - m, Math.max(...xs) + m, Math.max(...ys) + m] };
}
