/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard.js — copy and paste for DetailCraft. No DOM.
 *
 *   copyClip(state, refs, { connections }) → { clip, counts } | null
 *       refs = [{ kind: 'member'|'conn'|'footing', id }]. Members are copied whole (profile, material, ends,
 *       rotation, position, name, holes, copes), with any custom profile they use; footings whole (mat and
 *       starter bars). A connection comes along (when `connections` is on) only if every member it joins is
 *       copied — `counts.leftOut` says how many did not. `clip.base` = the lowest corner of everything copied
 *       (min x, min y, min z): Paste puts that point on the grid intersection that is clicked.
 *   readClip(obj) → clip — the clipboard as read back from localStorage is untrusted (another tab, an old
 *       version, someone's hand): format and version checked, then the members, connections, footings and
 *       profiles go through model.js `readModel` field by field (the same checks as opening a file).
 *       Throws a plain message.
 *   pasteInto(tx, clip, offset) → { refs, profilesKept } — inside model.change(): new ids for everything
 *       (members, holes, copes, connections, footings), connections re-pointed at the new members, every point
 *       moved by `offset`. Part and assembly marks are not stored: marks.js numbers them again from the model,
 *       so a copy identical to its original shares its mark (same piece) and a changed one gets the next number.
 *   clipSegments(clip) → [[a, b]] relative to the base (the ghost that follows the pointer while pasting).
 * Stored as JSON in localStorage "detailcraft.clipboard" by the page, so another tab can paste it.
 */
import { readModel } from './model.js';
import { t } from './i18n.js';
import { membersOf } from './connections.js';
import { stairOutline } from './transform.js';

export const CLIP_FORMAT = 'detailcraft-clip';
export const CLIP_VERSION = 1;
export const CLIP_KEY = 'detailcraft.clipboard';
const MAX = { members: 20000, connections: 20000, footings: 5000, stairs: 2000, profiles: 500 };

const copy = (o) => JSON.parse(JSON.stringify(o));
const add = (p, o) => [p[0] + o[0], p[1] + o[1], p[2] + o[2]];

export function copyClip(state, refs, { connections = true } = {}) {
  const want = (kind) => new Set(refs.filter((r) => r && r.kind === kind).map((r) => r.id));
  const mIds = want('member'), fIds = want('footing'), cIds = want('conn'), sIds = want('stair');
  const members = state.members.filter((m) => mIds.has(m.id));
  const footings = state.footings.filter((f) => fIds.has(f.id));
  const stairs = (state.stairs || []).filter((x) => sIds.has(x.id));
  if (!members.length && !footings.length && !stairs.length) return null;
  const inSet = (c) => membersOf(c).every((id) => mIds.has(id));
  const touches = (c) => membersOf(c).some((id) => mIds.has(id)) || cIds.has(c.id);
  const conns = connections ? state.connections.filter(inSet) : [];
  const leftOut = state.connections.filter((c) => touches(c) && !conns.includes(c)).length;
  const used = new Set([...members.map((m) => m.profile.toUpperCase()), ...stairs.map((x) => x.stringer.toUpperCase())]);
  const profiles = state.profiles.filter((p) => used.has(p.name.toUpperCase()));
  const pts = [...members.flatMap((m) => [m.start, m.end]), ...footings.map((f) => [f.x, f.y, f.top]), ...stairs.map((x) => [x.x, x.y, x.z])];
  const base = [0, 1, 2].map((k) => Math.min(...pts.map((p) => p[k])));
  const clip = {
    format: CLIP_FORMAT, version: CLIP_VERSION,
    source: Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 8),
    from: state.name, base,
    members: copy(members), connections: copy(conns), footings: copy(footings), stairs: copy(stairs), profiles: copy(profiles),
  };
  return { clip, counts: { members: members.length, connections: conns.length, footings: footings.length, stairs: stairs.length, leftOut } };
}

export function readClip(obj) {
  let j = obj;
  if (typeof j === 'string') { try { j = JSON.parse(j); } catch { throw new Error(t('clip.err.not-parts')); } }
  if (!j || typeof j !== 'object' || j.format !== CLIP_FORMAT) throw new Error(t('clip.err.not-parts'));
  if (!Number.isInteger(j.version) || j.version < 1) throw new Error(t('clip.err.no-version'));
  if (j.version > CLIP_VERSION) throw new Error(t('clip.err.newer'));
  if (!Array.isArray(j.base) || j.base.length !== 3) throw new Error(t('clip.err.no-base'));
  const base = j.base.map(Number);
  if (base.some((n) => !Number.isFinite(n) || Math.abs(n) > 1e7)) throw new Error(t('clip.err.base'));
  const list = (k) => {
    if (j[k] === undefined) return [];
    if (!Array.isArray(j[k])) throw new Error(t('clip.err.damaged', { what: k }));
    if (j[k].length > MAX[k]) throw new Error(t('clip.err.too-many', { what: k }));
    return j[k];
  };
  // the same field-by-field checks as opening a model file
  const { state, warnings } = readModel({
    format: 'detailcraft', version: 1, name: 'Clipboard', grids: { x: [], y: [] }, levels: [{ name: 'Clipboard', z: 0 }],
    members: list('members'), connections: list('connections'), footings: list('footings'), stairs: list('stairs'), profiles: list('profiles'), seq: 1,
  });
  if (!state.members.length && !state.footings.length && !state.stairs.length) throw new Error(t('clip.err.empty'));
  return {
    format: CLIP_FORMAT, version: CLIP_VERSION,
    source: String(j.source ?? '').replace(/[^\w-]/g, '').slice(0, 40),
    from: String(j.from ?? '').replace(/[\u0000-\u001f\u007f]/g, '').slice(0, 80),
    base, members: state.members, connections: state.connections, footings: state.footings, stairs: state.stairs, profiles: state.profiles, warnings,
  };
}

export function pasteInto(tx, clip, offset = [0, 0, 0]) {
  const off = offset.map(Number);
  if (off.length !== 3 || off.some((n) => !Number.isFinite(n))) throw new Error(t('clip.err.offset'));
  let profilesKept = 0;
  for (const p of clip.profiles) {
    if (tx.s.profiles.some((x) => x.name.toUpperCase() === p.name.toUpperCase())) profilesKept++;   // the model's own profile of that name wins
    else tx.addProfile(p);
  }
  const ids = new Map(), refs = [];
  for (const m of clip.members) {
    const id = tx.addMember({ ...m, start: add(m.start, off), end: add(m.end, off) });
    for (const h of m.holes || []) tx.addHole(id, h);
    for (const c of m.cuts || []) tx.addCut(id, c);
    ids.set(m.id, id);
    refs.push({ kind: 'member', id });
  }
  for (const c of clip.connections) {
    if (!membersOf(c).every((m) => ids.has(m))) continue;
    const id = c.type === 'splice' ? tx.addConnection({ type: 'splice', a: ids.get(c.a), aEnd: c.aEnd, b: ids.get(c.b), params: c.params })
      : c.type === 'gusset' ? tx.addConnection({ type: 'gusset', brace: ids.get(c.brace), end: c.end, support: ids.get(c.support), params: c.params })
      : c.type === 'mitre' ? tx.addConnection({ type: 'mitre', a: ids.get(c.a), aEnd: c.aEnd, b: ids.get(c.b), bEnd: c.bEnd, params: c.params })
      : tx.addConnection({ type: c.type, beam: c.beam ? ids.get(c.beam) : undefined, end: c.end, column: ids.get(c.column), params: c.params });
    refs.push({ kind: 'conn', id });
  }
  for (const f of clip.footings) {
    const { id: _old, ...rest } = f;
    const id = tx.addFooting({ ...rest, x: f.x + off[0], y: f.y + off[1], top: f.top + off[2] });
    refs.push({ kind: 'footing', id });
  }
  for (const x of clip.stairs || []) {
    const { id: _old, ...rest } = x;
    const id = tx.addStair({ ...rest, x: x.x + off[0], y: x.y + off[1], z: x.z + off[2] });
    refs.push({ kind: 'stair', id });
  }
  return { refs, profilesKept };
}

/** Lines to draw for the ghost: member axes, and each footing's top outline (relative to the base). */
export function clipSegments(clip) {
  const b = clip.base, rel = (p) => [p[0] - b[0], p[1] - b[1], p[2] - b[2]];
  const segs = clip.members.map((m) => [rel(m.start), rel(m.end)]);
  for (const f of clip.footings) {
    const a = (f.rotation || 0) * Math.PI / 180, c = Math.cos(a), s = Math.sin(a);
    const pt = (u, v) => rel([f.x + u * c - v * s, f.y + u * s + v * c, f.top]);
    const q = [pt(-f.L / 2, -f.B / 2), pt(f.L / 2, -f.B / 2), pt(f.L / 2, f.B / 2), pt(-f.L / 2, f.B / 2)];
    for (let i = 0; i < 4; i++) segs.push([q[i], q[(i + 1) % 4]]);
  }
  for (const x of clip.stairs || []) segs.push(...stairOutline(x).map(([a, c]) => [rel(a), rel(c)]));
  return segs;
}

/** Members already in the model that the pasted ones would sit exactly on (same profile, same ends). */
export function overlaps(state, clip, offset) {
  const key = (m, o) => m.profile + '|' + [...add(m.start, o), ...add(m.end, o)].map((v) => Math.round(v)).join(',');
  const have = new Set(state.members.map((m) => key(m, [0, 0, 0])));
  return clip.members.filter((m) => have.has(key(m, offset))).length;
}
