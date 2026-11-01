/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Building regulations add-on for DetailCraft (0.8 REG.1 step 4, session `regs_PART_3`; add-on API 1.4). Off until the person switches it
 * on (Settings › Add-ons). The same screens as BimCraft's (lib/ui.js) and the same Problems source (lib/adapter.js); DetailCraft's own are lib/check.js
 * (connection standards: bolt edge distance and spacing as multiples of the hole diameter) and where a model keeps its ticks: `state.regs` in the model
 * file. DetailCraft does not design connections: the pack only sets the minimums its warnings are judged by. A guide only: the registered professional
 * and the local authority decide.
 */
import { startRegs } from './lib/adapter.js';
import { connRows } from './lib/check.js';

export async function activate(api) {
  await startRegs(api, {
    applies: ['connection'],
    trades: ['conn'],
    rows: (prof) => api.model.read((m) => connRows(m, prof, api.t)),
    about: (r) => ({ kind: 'conn', id: r.ref, label: r.where }),
    host: {
      lenText: (mm) => Math.round(mm) + ' mm',
      areaText: (m2) => (Math.round(m2 * 100) / 100) + ' m²',
      drawing: {
        read: () => api.model.read((m) => (typeof m.state.regs === 'string' ? m.state.regs : null)),
        write: (label, json) => api.model.read((m) => { m.change(label, (tx) => { tx.s.regs = json; }); return true; }),
      },
    },
  });
}
