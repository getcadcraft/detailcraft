/* SPDX-License-Identifier: Apache-2.0 */
/**
 * clipboard-ui.js: detailcraft.js's 18 bindings for this topic, moved out of start() unchanged (0.10 PERF.71, code-mains-10; no behaviour change).
 * mountClipboard(ctx) is called once by start(); ctx carries what the closure shared with this code: values by name, and
 * accessors for the variables start() assigns (read and written as ctx.<name>, exactly as the closure's own variable was).
 */
import { CLIP_KEY, readClip, copyClip, overlaps, pasteInto } from './clipboard.js';
import { t as tr } from './i18n.js';
import { cleanAreaClip, AREA_KEY, sameImage } from './areaclip.js';
import { areaClipNewer, pictureFromClip, pictureSizeMm, pictureCorners } from './picture.js';

export function mountClipboard(ctx) {
  const { ui, selected, print, edit, renderBar, setTool, setSelection, deleteRefs, mm } = ctx;

  function clipStored() { try { return localStorage.getItem(CLIP_KEY) !== null; } catch { return false; } }
  /** The newest copy: another tab's (read as untrusted) when it changed since, else this tab's. */
  function currentClip(say) {
    let raw = null;
    try { raw = localStorage.getItem(CLIP_KEY); } catch { /* private window: this tab's copy */ }
    if (raw && raw !== ctx.clipRaw) {
      try { ctx.clip = readClip(raw); ctx.clipRaw = raw; }
      catch (err) { if (say && !ctx.clip) print(tr('app.paste.bad', { error: err.message })); }
    }
    return ctx.clip;
  }
  function countText(c) {
    const out = [];
    if (c.members) out.push(tr('app.count.members', { n: c.members }));
    if (c.connections) out.push(tr('app.count.connections', { n: c.connections }));
    if (c.footings) out.push(tr('app.count.footings', { n: c.footings }));
    if (c.stairs) out.push(tr('app.count.stairs', { n: c.stairs }));
    return out.length ? out.join(tr('app.count.sep')) : tr('app.count.nothing');
  }
  /** Copies the selection into a clip (not yet the clipboard). Says why when it can't. */
  function takeCopy() {
    const refs = selected();
    if (!refs.length) { print(tr('app.copy.none')); return null; }
    const r = copyClip(ctx.model.state, refs, { connections: ctx.settings.conns });
    if (!r) { print(tr(refs.every((x) => x.kind === 'picture') ? 'pic.copy.no' : 'app.copy.conn-only')); return null; }
    return r;
  }
  function leftOutText(c) {
    if (!c.leftOut) return '';
    return ' ' + (ctx.settings.conns ? tr('app.copy.left-out', { n: c.leftOut }) : tr('app.copy.left-out.off'));
  }
  function copySelection() {
    const r = takeCopy();
    if (!r) return null;
    ctx.clip = readClip(r.clip);
    ctx.clipRaw = JSON.stringify(r.clip);
    try { localStorage.setItem(CLIP_KEY, ctx.clipRaw); }
    catch { ctx.clipRaw = null; try { localStorage.removeItem(CLIP_KEY); } catch { /* fine */ } }   // too big or private window: this tab still has it
    print(tr('app.copy.done', { what: countText(r.counts) }) + leftOutText(r.counts));
    renderBar();
    return r;
  }
  function cutSelection() {
    const refs = selected();
    const r = copySelection();
    if (!r) return;
    if (deleteRefs(refs, tr('app.undo.cut'))) print(tr('app.cut.done', { what: countText(r.counts) }) + leftOutText(r.counts));
  }
  function startPaste(inPlace) {
    const c = currentClip(true);
    if (!c) { if (!clipStored()) print(tr('app.paste.empty')); return; }
    if (inPlace) { if (ctx.tool !== 'select') setTool('select'); pasteClipAt(c, [0, 0, 0], 'in-place'); return; }
    setTool('paste');
  }
  // ---- reference pictures (0.8 D8.15): a copied area of a sheet, pasted at its true size ----
  function storedArea() { try { return cleanAreaClip(localStorage.getItem(AREA_KEY)); } catch { return null; } }
  /** Edit › Paste and Ctrl+V: the copied area when it was copied after DetailCraft's own clipboard, else the parts. */
  function pasteNewest() {
    const area = storedArea();
    if (area && areaClipNewer(area, currentClip(false))) return pastePicture(area);
    return startPaste(false);
  }
  /** The level a picture goes on: the plan's level in Plan, else the lowest. */
  function pictureLevel() {
    const lv = ctx.model.state.levels;
    return (ctx.viewMode === 'plan' && lv.find((l) => l.name === ui.vlevel.value)) || lv[0] || { name: '', z: 0 };
  }
  /** One undo step: the clip as a picture in the middle of the grid on that level, selected. */
  function pastePicture(area) {
    const s = ctx.model.state, lv = pictureLevel();
    const mid = (g) => (g.length ? (g[0].at + g[g.length - 1].at) / 2 : 0);
    const r = pictureFromClip(area, { at: [mid(s.grids.x), mid(s.grids.y), lv.z] });
    if (!r) { print(tr('pic.paste.bad')); return null; }
    const hash = ctx.model.pictureSrcs.put(r.src);
    const id = edit(tr('pic.undo.paste'), (tx) => tx.addPicture({ ...r.picture, hash }));
    if (!id) return null;
    if (ctx.tool !== 'select') setTool('select');
    setSelection([{ kind: 'picture', id }]);
    const [w, h] = pictureSizeMm(r.picture);
    print(tr(r.size === 'real' ? 'pic.paste.real' : 'pic.paste.paper', { w: mm(w), h: mm(h), level: lv.name })
      + (area.overlay ? ' ' + tr('pic.paste.overlay', { pct: String(Math.round(r.picture.opacity * 100)) }) : '') + ' ' + tr('pic.paste.drag') + ' ' + tr('app.paste.undo-hint'));
    return id;
  }
  /** The dashed outline of the pictures among refs (a drag's ghost). */
  function pictureGhost(refs) {
    const out = [];
    for (const r of refs) {
      const p = r.kind === 'picture' && ctx.model.picture(r.id);
      if (!p) continue;
      const c = pictureCorners(p);
      for (let i = 0; i < 4; i++) out.push([c[i], c[(i + 1) % 4]]);
    }
    return out;
  }
  /** A picture's pixel size (from the system clipboard), or null. */
  async function imageSize(file) {
    try { const b = await createImageBitmap(file); const wh = [b.width, b.height]; b.close?.(); return wh; } catch { return null; }
  }
  // Ctrl+V when the copied area is newer: the key leaves the browser's paste event to come (it shows what the system clipboard
  // holds); if none comes (a browser that sends none to a page with nothing to type in), the area is pasted after a moment
  let keyPaste = null;
  function keyPasteArea(area) {
    clearTimeout(keyPaste?.timer);
    keyPaste = { area, timer: setTimeout(() => { keyPaste = null; pastePicture(area); }, 200) };
  }
  document.addEventListener('paste', async (e) => {
    const kp = keyPaste;
    if (kp) { clearTimeout(kp.timer); keyPaste = null; }
    const t = e.target;
    if (!kp && (document.querySelector('dialog[open]') || (t instanceof HTMLElement && (t.isContentEditable || /^(INPUT|SELECT|TEXTAREA)$/.test(t.tagName))))) return;
    const item = [...(e.clipboardData?.items || [])].find((i) => i.kind === 'file' && /^image\//.test(i.type));
    if (!kp && !item) return;   // text and the like: not ours
    e.preventDefault();
    const area = kp?.area || storedArea();
    if (!item) { pastePicture(area); return; }   // Ctrl+V and no picture on the clipboard (some browsers keep it to themselves): the copied area
    const wh = await imageSize(item.getAsFile());
    if (area && wh && sameImage(area, wh[0], wh[1], kp ? { maxAgeMs: 0 } : {})) { pastePicture(area); return; }
    print(tr(kp ? 'pic.paste.other' : 'pic.paste.unknown'));
  });
  function duplicate() {
    const r = takeCopy();
    if (!r) return;
    const o = ctx.settings.offset;
    pasteClipAt(readClip(r.clip), o, 'duplicate', { x: String(o[0]), y: String(o[1]), z: String(o[2]) });
  }
  /** One undo step: the clip's contents at base + offset, selected afterwards. how: at | offset | in-place | duplicate
   * (the undo label and the message); fills: node (at) or x, y, z (offset, duplicate). */
  function pasteClipAt(c, offset, how, fills = {}) {
    const over = overlaps(ctx.model.state, c, offset);
    const label = tr(how === 'duplicate' ? 'app.undo.duplicate' : how === 'in-place' ? 'app.undo.paste-in-place' : 'app.undo.paste');
    const r = edit(label, (tx) => pasteInto(tx, c, offset));
    if (!r) return;
    if (ctx.tool !== 'select') setTool('select');
    setSelection(r.refs);
    const n = { members: c.members.length, connections: r.refs.filter((x) => x.kind === 'conn').length, footings: c.footings.length, stairs: (c.stairs || []).length };
    print(tr('app.paste.done.' + how, { ...fills, what: countText(n) })
      + (over ? ' ' + tr('app.paste.over', { n: over }) : '')
      + (r.profilesKept ? ' ' + tr('app.paste.profiles-kept') : '')
      + (c.warnings?.length ? ' ' + c.warnings.join(' ') : '') + ' ' + tr('app.paste.undo-hint'));
  }

  return { clipStored, currentClip, countText, copySelection, cutSelection, startPaste, storedArea, pasteNewest, pictureGhost, keyPasteArea, duplicate, pasteClipAt };
}
