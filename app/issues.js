/* SPDX-License-Identifier: Apache-2.0 */
/**
 * issues.js — the drawing issue log (0.4 D17). No DOM.
 *
 * Every drawing sheet (drawings.js) has a content hash: CRC-32 of what is drawn on it, title block and revision table
 * left out, so the date or the sheet count never count as a change. Issuing a sheet stores, in the model,
 *   state.issues: [{ sheet (drawings.js sheet id, e.g. "assembly:B1"), number (e.g. "A-B1"), rev, date (yyyy-mm-dd),
 *                    note, hash }]
 * The first issue of a sheet is revision A, then B, C … (I and O skipped, as drawing practice does; after Z: AA, AB …).
 * A sheet whose hash differs from the one at its last issue "needs re-issue".
 *
 *   nextRev(rev) → the letter after rev ('' → 'A')
 *   sheetLog(issues, sheetId) → that sheet's issues, oldest first
 *   sheetStatus(sheets, issues) → Map(sheet id → { issued, rev, date, note, changed, count })
 *   planIssue(sheets, issues, ids, { date, note }) → the new issue records (one per id; a sheet issued unchanged is left out
 *     unless `force`)
 *   revsByNumber(issues) → Map(drawing number → its latest rev) for the KISS file's revision field
 *
 * Revision clouds (0.4 D19): an issue also stores `parts`, a print (CRC-32) of every part and footing drawn on the sheet
 * (drawings.js partPrints). cloudBase(log, hash) picks what a sheet's clouds compare against: while the sheet has changed
 * since its last issue, that issue (the clouds show the coming revision); once it is issued, the issue before it (the
 * clouds stay on the revision that made them, as on a printed sheet). No base → no clouds (the first issue, or issues
 * made before 0.4 D19, which have no prints).
 */
// 0.10 BK.48: the revision letters are the shared issue history's (issuelog/history.js: moved there from here, the same rule)
import { nextRev } from './issuelog/history.js';
export { nextRev };

export const sheetLog = (issues, id) => (issues || []).filter((x) => x.sheet === id);

export function sheetStatus(sheets, issues) {
  const out = new Map();
  for (const sh of sheets) {
    const log = sheetLog(issues, sh.id);
    const last = log[log.length - 1];
    out.set(sh.id, last ? { issued: true, rev: last.rev, date: last.date, note: last.note, changed: last.hash !== sh.hash, count: log.length } : { issued: false, rev: '', date: '', note: '', changed: true, count: 0 });
  }
  return out;
}

export function planIssue(sheets, issues, ids, { date, note = '', force = false } = {}) {
  const st = sheetStatus(sheets, issues);
  const out = [];
  for (const id of ids) {
    const sh = sheets.find((x) => x.id === id), s = st.get(id);
    if (!sh || (!force && s.issued && !s.changed)) continue;
    out.push({ sheet: id, number: sh.number, rev: nextRev(s.rev), date, note: String(note).slice(0, 60), hash: sh.hash, ...(sh.prints ? { parts: sh.prints } : {}) });
  }
  return out;
}

export function cloudBase(log, hash) {
  const last = log[log.length - 1];
  if (!last) return null;
  const changed = last.hash !== hash;
  const base = changed ? last : log[log.length - 2];
  return base && base.parts ? { parts: base.parts, rev: changed ? nextRev(last.rev) : last.rev } : null;
}

export function revsByNumber(issues) {
  const m = new Map();
  for (const x of issues || []) m.set(x.number, x.rev);
  return m;
}
