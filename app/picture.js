/* SPDX-License-Identifier: Apache-2.0 */
/**
 * picture.js — reference pictures in the model (0.8 D8.15): a copied area of a sheet (MarkupCraft's Copy area tool,
 * areaclip.js) pasted at its true size, lying flat on a level under the steel. DOM-free.
 *
 * DetailCraft has no 2D sheet of its own to draw on (drawings.js makes its sheets again from the model on every open and
 * stores nothing), so a picture is a plane in the model: horizontal, on a level's elevation, seen in 3D and in Plan (a
 * plan looks down on it), cut like the rest by Plan's and Elevation's clipping. Rotation is 0 (the picture's top is +y).
 *
 * state.pictures = [{ id: 'g<n>', name, hash, px: [w, h], mmPerPx, x, y, z, opacity, size: 'real' | 'paper' }]
 *   x, y = the picture's middle (mm), z = the level it lies on; mmPerPx = how big one pixel is in the model (from the
 *   clip's real scale, or its paper size when the sheet had none — `size` says which, so Properties can say so).
 *   Optional (absent = none; an older build drops the key with the same file version, as `problems` and `ids`).
 * The PNG itself (≤ 3 MB, areaclip.js's cap) is kept once in Model.pictureSrcs by hash, outside the undo snapshots — as
 * the IDS text is (model.js): 200 moves of a 3 MB picture cost 200 short references. Model.toJSON writes it back into
 * the file as `src`; readModel takes it out again.
 *
 *   pictureFromClip(clip, { at: [x, y, z] }) → { picture (no id), src, size } | null   (size 'real' | 'paper')
 *   cleanPicture(raw) → picture fields | null            untrusted (a file, a tx call); src / hash checked by the caller
 *   readPictures(list) → { pictures: [{ … , hash }], srcs: [src], dropped }   from a file
 *   pictureCorners(p) → [[x, y, z] × 4]                  the outline (ghost, window selection)
 *   pictureSizeMm(p) → [w, h]
 *   areaClipNewer(area, dcClip, dcAt) → bool            Ctrl+V's rule: the copied area wins when it was copied after
 *                                                       DetailCraft's own clipboard (or there is none)
 *   clipTime(dcClip) → ms | NaN                         when a DetailCraft clip was made (its `source` starts with Date.now() in base 36)
 */
import { cleanAreaClip, pngSize, sizeMm } from './areaclip.js';
import { idsHash as srcHash } from './ids/record.js';   // the same stable 53-bit hash; the store is ids/record.js idsTextStore

export const MAX_PICTURES = 50;
export const OPACITY_MIN = 0.05;
const fin = (v) => typeof v === 'number' && Number.isFinite(v);
const line = (v, n) => String(v ?? '').replace(/[\u0000-\u001f\u007f]/g, ' ').trim().slice(0, n);
const HASH = /^cc53-[0-9a-f]{14}$/;

export { srcHash };

export function cleanPicture(raw) {
  if (!raw || typeof raw !== 'object') return null;
  const px = Array.isArray(raw.px) ? raw.px.map(Number) : [];
  const k = Number(raw.mmPerPx), x = Number(raw.x), y = Number(raw.y), z = Number(raw.z), o = Number(raw.opacity);
  if (px.length !== 2 || px.some((v) => !Number.isInteger(v) || v < 1 || v > 8000)) return null;
  if (!(k > 0 && k <= 1e5) || ![x, y, z].every((v) => fin(v) && Math.abs(v) <= 1e7)) return null;
  return {
    name: line(raw.name, 120), hash: HASH.test(raw.hash) ? raw.hash : '', px, mmPerPx: k, x, y, z,
    opacity: fin(o) ? Math.max(OPACITY_MIN, Math.min(1, o)) : 1, size: raw.size === 'paper' ? 'paper' : 'real',
  };
}

/** A clip (untrusted, as read from localStorage) → the picture to add at `at` (its middle), with its PNG. */
export function pictureFromClip(raw, { at = [0, 0, 0] } = {}) {
  const clip = cleanAreaClip(raw);
  if (!clip) return null;
  const size = clip.real ? 'real' : 'paper';
  const [w] = sizeMm(clip, { use: size });
  const name = clip.label || clip.sheet || clip.source || '';
  const picture = cleanPicture({ name, px: clip.px, mmPerPx: w / clip.px[0], x: at[0], y: at[1], z: at[2], opacity: clip.overlay ? clip.overlay.opacity : 1, size, hash: srcHash(clip.src) });
  return picture ? { picture, src: clip.src, size, clip } : null;
}

/** The file's pictures: each with a PNG that reads (its header's size must be the picture's), at most MAX_PICTURES. */
export function readPictures(list) {
  const pictures = [], srcs = [];
  let dropped = 0;
  for (const raw of (Array.isArray(list) ? list : []).slice(0, MAX_PICTURES)) {
    const p = cleanPicture(raw), wh = pngSize(raw?.src);
    if (!p || !wh || wh[0] !== p.px[0] || wh[1] !== p.px[1]) { dropped++; continue; }
    p.hash = srcHash(raw.src);
    pictures.push({ id: raw.id, ...p });
    srcs.push(raw.src);
  }
  if (Array.isArray(list) && list.length > MAX_PICTURES) dropped += list.length - MAX_PICTURES;
  return { pictures, srcs, dropped };
}

export const pictureSizeMm = (p) => [p.px[0] * p.mmPerPx, p.px[1] * p.mmPerPx];
export function pictureCorners(p) {
  const [w, h] = pictureSizeMm(p);
  return [[p.x - w / 2, p.y - h / 2, p.z], [p.x + w / 2, p.y - h / 2, p.z], [p.x + w / 2, p.y + h / 2, p.z], [p.x - w / 2, p.y + h / 2, p.z]];
}

export function clipTime(dc) {
  const s = String(dc?.source || '').split('-')[0];
  return s ? parseInt(s, 36) : NaN;
}
/** Is the copied area newer than DetailCraft's own clipboard? `dcAt` (ms) when known, else from the clip's source. */
export function areaClipNewer(area, dcClip, dcAt = clipTime(dcClip)) {
  if (!area) return false;
  if (!dcClip) return true;
  const a = Date.parse(area.at);
  if (!Number.isFinite(a)) return false;
  return Number.isFinite(dcAt) && a > dcAt;   // a DetailCraft clip of unknown age keeps the paste
}
