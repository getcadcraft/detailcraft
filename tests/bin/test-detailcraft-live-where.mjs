#!/usr/bin/env node
/* SPDX-License-Identifier: Apache-2.0 */
/** 0.8 round 3 (detail_PART_3): DetailCraft's live adapter answers where(ops) for EG.41 (assistant scope in Studio Live). Run: node bin/test-detailcraft-live-where.mjs */
import path from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';
const REPO = path.resolve(path.dirname(fileURLToPath(import.meta.url)), '..');
const APP = path.join(REPO, 'public_html/assets/apps/detailcraft/dev');
const mod = (f) => import(pathToFileURL(path.join(APP, f)).href);
const { Model, starterState } = await mod('model.js');
const { createLive } = await mod('live.js');
let pass = 0, fail = 0;
const ok = (c, m, x) => { if (c) pass++; else { fail++; console.log('FAIL ' + m + (x !== undefined ? ' — ' + JSON.stringify(x) : '')); } };
const m = new Model(starterState('t'));
m.change('cols', (tx) => {
  tx.addMember({ type: 'column', profile: 'W10X49', material: 'A992', position: 'middle', rotation: 0, start: [0, 0, 0], end: [0, 0, 4000], phase: 1 });
  tx.addMember({ type: 'column', profile: 'W10X49', material: 'A992', position: 'middle', rotation: 0, start: [6000, 2000, 0], end: [6000, 2000, 4000], phase: 1 });
  tx.addMember({ type: 'beam', profile: 'W16X31', material: 'A992', position: 'middle', rotation: 0, start: [0, 0, 4000], end: [6000, 2000, 4000], phase: 1 });
});
const [c1, c2, b1] = m.state.members.map((x) => x.id);
m.change('plate', (tx) => tx.addConnection({ type: 'endplate', beam: b1, end: 'start', column: c1 }));
const conn = m.state.connections[0].id;
const lv = createLive(() => m);
ok(typeof lv.where === 'function', 'the adapter can tell where a step landed (Studio offers the scope controls)');
ok(/model|live\.where\.model/i.test(lv.sheetLabel('')), 'sheet label', lv.sheetLabel(''));
let w = lv.where([{ o: 'put', path: ['members', '#' + c2, 'profile'], v: 'W12X65' }]);
ok(w && w.sheet === '' && JSON.stringify(w.box) === '[6000,2000,6000,2000]', 'a change to a column is located by its plan point', w);
w = lv.where([{ o: 'put', path: ['members', '#' + b1, 'material'], v: 'A36' }]);
ok(JSON.stringify(w.box) === '[0,0,6000,2000]' && JSON.stringify(w.cur) === '[3000,1000]', 'a beam is located by its two ends; the cursor is the centre', w);
w = lv.where([{ o: 'add', path: ['members'], id: 'm99', v: { id: 'm99', type: 'beam', start: [-500, 100, 3000], end: [100, 900, 3000] } }]);
ok(JSON.stringify(w.box) === '[-500,100,100,900]', 'an added member is located by its own ends', w);
w = lv.where([{ o: 'add', path: ['connections'], id: 'c9', v: { id: 'c9', type: 'endplate', beam: b1, end: 'end', column: c2 } }]);
ok(JSON.stringify(w.box) === '[0,0,6000,2000]', 'a connection is located by the members it joins', w);
w = lv.where([{ o: 'put', path: ['connections', '#' + conn, 'params', 'plateT'], v: 20 }]);
ok(w && w.box && w.box[0] === 0 && w.box[2] === 6000, 'a change inside a connection is located the same way', w);
w = lv.where([{ o: 'add', path: ['footings'], id: 'f1', v: { id: 'f1', x: 1000, y: 1000, L: 2000, B: 1000 } }]);
ok(JSON.stringify(w.box) === '[0,0,2000,2000]', 'a footing is located by its larger side', w);
w = lv.where([{ o: 'g', g: 's1' }, { o: 'put', path: ['members', '#' + c1, 'profile'], v: 'W10X60' }, { o: 'put', path: ['members', '#' + c2, 'profile'], v: 'W10X60' }]);
ok(JSON.stringify(w.box) === '[0,0,6000,2000]', 'steps are joined into one area; the group mark is ignored', w);
w = lv.where([{ o: 'del', path: ['members'], id: c1 }]);
ok(w && w.box && w.box[0] === 0, 'a removed member that is still in the model is located', w);
w = lv.where([{ o: 'del', path: ['members'], id: 'gone' }]);
ok(w && w.box === null && w.sheet === '', 'a removal of something unknown has no area (unbounded)', w);
ok(lv.where([{ o: 'put', path: ['name'], v: 'x' }]) === null, 'a step with nothing in space cannot be placed (refused under a scope)');
ok(lv.where([]) === null, 'no ops');
console.log(pass + ' passed, ' + fail + ' failed'); process.exit(fail ? 1 : 0);
