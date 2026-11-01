/* SPDX-License-Identifier: Apache-2.0 */
/**
 * check.js — DetailCraft's connection checks against a regulation pack (0.8 REG.1 step 4, session `regs_PART_3`): bolt edge distance, spacing in the
 * line of force and spacing across it, each as a multiple of the hole diameter, per connection. The app's own file of the `regs` add-on (the engine
 * files beside it are BimCraft's, byte-identical). No DOM.
 *
 *   connRows(model, profile, t) → [row]    kind 'conn' (ref = the connection's id, which the Problems markers know); one row per connection per rule,
 *                                          found = the tightest ratio of that connection (value / hole diameter)
 *
 * Rules (regs.js RULES, applies 'connection'): conn.bolt.edge.min · conn.bolt.pitch.min · conn.bolt.gauge.min. The first pack is EN 1993-1-8 Table 3.3
 * (1.2, 2.2, 2.4 times d0), the same numbers connections.js warns with by itself; a pack of another standard changes the numbers, not the code.
 * Edge distances: end plate (beam end, side), shear tab (edge, tab side), splice (flange, web), gusset (brace edge). Pitch: rows of an end plate or tab,
 * splice flange rows, gusset bolts. Gauge: end plate gauge, splice web pitch. A connection with no such bolts gets no row for that rule.
 * A guide only: the registered professional and the local authority decide.
 */
import { row } from './rows.js';
import { getProfile } from '../../../profiles.js';

const num = (v) => (Number.isFinite(Number(v)) ? Number(v) : null);

/** The distances of one connection, in mm: { d0, edge: [], pitch: [], gauge: [] }; null when it has no hole size. */
export function boltDistances(c, model) {
  const p = c.params || {}, d0 = num(p.hole);
  if (!d0 || d0 <= 0) return null;
  const out = { d0, edge: [], pitch: [], gauge: [] };
  const push = (k, v) => { const n = num(v); if (n !== null) out[k].push(n); };
  const rows = Math.max(1, Math.round(num(p.rows) || 1));
  if (c.type === 'endplate') {
    const beam = model.member ? model.member(c.beam) : null;
    const prof = beam ? getProfile(beam.profile, model.state?.profiles || []) : null;
    if (prof && num(prof.d) !== null) push('edge', (prof.d + (num(p.extTop) || 0) + (num(p.extBottom) || 0) - (rows - 1) * p.pitch) / 2);
    push('edge', (p.width - p.gauge) / 2);
    if (rows > 1) push('pitch', p.pitch);
    push('gauge', p.gauge);
  } else if (c.type === 'sheartab') {
    push('edge', p.edge); push('edge', p.width - p.eh);
    if (rows > 1) push('pitch', p.pitch);
  } else if (c.type === 'splice') {
    push('edge', p.flangeEdge); push('edge', p.webEdge);
    if ((num(p.flangeRows) || 0) > 1) push('pitch', p.flangePitch);
    if ((num(p.webRows) || 0) > 1) push('gauge', p.webPitch);
  } else if (c.type === 'gusset') {
    push('edge', p.braceEdge);
    if ((num(p.bolts) || 0) > 1) push('pitch', p.bracePitch);
  } else return null;
  return out;
}

export function connRows(model, profile, t = (k) => k) {
  if (!profile || !model || !model.state) return [];
  const rules = { edge: profile.rule('conn.bolt.edge.min'), pitch: profile.rule('conn.bolt.pitch.min'), gauge: profile.rule('conn.bolt.gauge.min') };
  if (!rules.edge && !rules.pitch && !rules.gauge) return [];
  const out = [];
  for (const c of model.state.connections || []) {
    const d = boltDistances(c, model);
    if (!d) continue;
    const where = t('regs.conn.type.' + c.type) + ' ' + c.id;
    for (const k of ['edge', 'pitch', 'gauge']) {
      if (!rules[k] || !d[k].length) continue;
      out.push(row('conn', where, rules[k], Math.min(...d[k]) / d.d0, c.id));
    }
  }
  return out;
}
