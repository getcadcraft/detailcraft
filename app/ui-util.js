/* SPDX-License-Identifier: Apache-2.0 */
/**
 * ui-util.js — small DOM helpers (copied from the CadCraft drafting app; an app never imports another's folder).
 * el() is the only way model text reaches the page: children are appended as text nodes
 * (textContent semantics), never parsed as HTML. An opened model file is untrusted input.
 */
import { makeEl, fillDlWith, bytes, num, fmt, frame } from './ui-util-core.js';
export { bytes, num, fmt, frame };

export const el = makeEl();   // PERF.74: the shared builder with this app's own rules (ui-util-core.js)

export function fillDl(dl, rows) { fillDlWith(el, dl, rows); }

