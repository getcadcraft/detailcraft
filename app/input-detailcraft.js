/* SPDX-License-Identifier: Apache-2.0 */
/**
 * input-detailcraft.js — DetailCraft's command registry for the shell's input engine (0.5 track IP.3; engine
 * assets/js/app-input.js + app-input-ui.js, map docs/apps/app-input.md; manifest "input": "input-detailcraft.js").
 * DOM-free data, plus hooks() which runs only on the page.
 *
 * COMMANDS: every toolbar command (ui.inc $__tools, the Connect / Edit / Output "More" menus) and the stage's view bar
 * (3D / Plan / Elevation, Fit).
 *   id       stable id (people's own styles and .ccinput.json files name it — never rename one)
 *   sel      the app's own button the shell clicks (one code path for every style); the Edit menu repeats Copy and Paste,
 *            so the toolbar's own buttons are found as direct children of their row
 *   defKeys  DetailCraft's own keys (detailcraft.js's keydown handler): the DetailCraft style
 * Labels are text keys `input.cmd.<id>` in lang/en.json.
 *
 * STYLES: DetailCraft (today's toolbar), Drafting classic (a small ribbon and a command line of typed words: DetailCraft has
 * no command line of its own), Steel ribbon (tabs the way steel detailing programs arrange them: Modeling, Detailing, Edit,
 * Drawings, Fabrication, View). Named for a way of working, never for a product.
 */

import { setMouse } from './input-mouse.js';

const C = (id, group, icon, sel, more = {}) => ({ id, group, icon, sel, label: 'input.cmd.' + id, defKeys: [], ...more });
const T = (act) => `.dc-tool-row > [data-act="${act}"]`;   // a toolbar button (not its menu's copy)
const M = (menu, act) => `[${menu}] [data-act="${act}"]`;    // an item of a toolbar "More" menu

export const COMMANDS = [
  C('file.new', 'file', 'bi-file-earmark-plus', T('new')),
  C('file.open', 'file', 'bi-folder2-open', T('open'), { defKeys: ['Ctrl+O'] }),
  C('file.import', 'file', 'bi-box-arrow-in-down', T('import')),
  C('file.save', 'file', 'bi-download', T('save'), { defKeys: ['Ctrl+S'] }),
  C('file.sample', 'file', 'bi-buildings', T('sample')),

  C('place.select', 'place', 'bi-cursor', T('tool:select'), { defKeys: ['V'] }),
  C('place.beam', 'place', 'bi-dash-lg', T('tool:beam'), { defKeys: ['B'] }),
  C('place.column', 'place', 'bi-grip-vertical', T('tool:column'), { defKeys: ['C'] }),
  C('place.brace', 'place', 'bi-slash-lg', T('tool:brace'), { defKeys: ['R'] }),
  C('place.plate', 'place', 'bi-square', T('tool:plate'), { defKeys: ['P'] }),
  C('place.footing', 'place', 'bi-bricks', T('tool:footing'), { defKeys: ['F'] }),
  C('place.stair', 'place', 'bi-bar-chart-steps', T('tool:stair'), { defKeys: ['S'] }),

  C('connect.endplates', 'connect', 'bi-layout-sidebar-inset', T('endplates')),
  C('connect.baseplate', 'connect', 'bi-border-bottom', T('baseplate')),
  C('connect.sheartabs', 'connect', 'bi-layout-three-columns', M('data-connect-menu', 'sheartabs')),
  C('connect.splice', 'connect', 'bi-distribute-horizontal', M('data-connect-menu', 'splice')),
  C('connect.gusset', 'connect', 'bi-triangle', M('data-connect-menu', 'gusset')),
  C('connect.similar', 'connect', 'bi-files', M('data-connect-menu', 'similar')),

  C('edit.undo', 'edit', 'bi-arrow-counterclockwise', T('undo'), { defKeys: ['Ctrl+Z'] }),
  C('edit.redo', 'edit', 'bi-arrow-clockwise', T('redo'), { defKeys: ['Ctrl+Y', 'Ctrl+Shift+Z'] }),
  C('edit.copy', 'edit', 'bi-copy', T('copy'), { defKeys: ['Ctrl+C'] }),
  C('edit.paste', 'edit', 'bi-clipboard-plus', T('paste'), { defKeys: ['Ctrl+V'] }),
  C('edit.cut', 'edit', 'bi-scissors', M('data-edit-menu', 'cut'), { defKeys: ['Ctrl+X'] }),
  C('edit.paste-in-place', 'edit', 'bi-clipboard-check', M('data-edit-menu', 'paste-in-place'), { defKeys: ['Ctrl+Shift+V'] }),
  C('edit.duplicate', 'edit', 'bi-files', M('data-edit-menu', 'duplicate'), { defKeys: ['Ctrl+D'] }),
  C('edit.move', 'edit', 'bi-arrows-move', M('data-edit-menu', 'move'), { defKeys: ['M'] }),   // the M key (0.5 final sweep: Edit › More › Move)
  C('edit.delete', 'edit', 'bi-trash', M('data-edit-menu', 'delete'), { defKeys: ['Delete'], fixed: true }),
  C('edit.select-all', 'edit', 'bi-check2-all', M('data-edit-menu', 'select-all'), { defKeys: ['Ctrl+A'] }),
  C('edit.select-none', 'edit', 'bi-x-square', M('data-edit-menu', 'select-none'), { defKeys: ['Escape'], fixed: true }),

  C('output.ifc', 'output', 'bi-box', T('ifc')),
  C('output.usd', 'output', 'bi-box-arrow-up-right', T('usd')),   // 0.7 XF.8 (session usd)
  C('output.nc', 'output', 'bi-gear-wide-connected', T('nc')),
  C('output.bom', 'output', 'bi-list-columns', T('bom')),
  C('output.shop', 'output', 'bi-file-earmark-ruled', T('shop')),
  C('output.drawings', 'output', 'bi-files', T('drawings')),
  C('output.bending', 'output', 'bi-bezier2', M('data-output-menu', 'bending')),
  C('output.report', 'output', 'bi-clipboard-data', M('data-output-menu', 'report')),
  C('output.kiss', 'output', 'bi-file-earmark-arrow-down', M('data-output-menu', 'kiss')),

  // the stage's view bar
  C('view.3d', 'view', 'bi-box', '[data-view="3d"]'),
  C('view.plan', 'view', 'bi-grid-3x3', '[data-view="plan"]'),
  C('view.elevation', 'view', 'bi-building', '[data-view="elevation"]'),
  C('view.fit', 'view', 'bi-arrows-fullscreen', '.dc-viewbar [data-act="fit"]'),

  C('app.settings', 'app', 'bi-gear', '[data-settings-open]', { defKeys: ['Ctrl+,'], keyOnly: true }),
  C('app.palette', 'app', 'bi-search', '[data-palette-open]', { defKeys: ['Ctrl+K'], keyOnly: true }),
  C('app.help', 'app', 'bi-question-circle', '[data-help-open]', { defKeys: ['F1'], keyOnly: true }),
];
export const GROUPS = ['file', 'place', 'connect', 'edit', 'output', 'view', 'app'];

const DEFAULT_KEYS = Object.fromEntries(COMMANDS.filter((c) => c.defKeys.length && !c.fixed).map((c) => [c.id, c.defKeys.slice()]));
const CTRL_KEYS = Object.fromEntries(Object.entries(DEFAULT_KEYS).filter(([, k]) => k.every((x) => /^(Ctrl|F\d)/.test(x))));

const m = (label, items) => ({ label: 'input.m.' + label, items });
// A panel is [name, items, more?]: items are ids or { id, size: 'lg' | 'sm' } / { split: [ids] } (0.7 RIBBON-COMPACT, docs/apps/app-input.md); `more` = the group's extra tools (its arrow).
const tab = (label, panels) => ({ label: 'input.m.' + label, panels: panels.map(([l, items, more]) => ({ label: 'input.m.' + l, items, ...(more ? { more } : {}) })) });
const sm = (id) => ({ id, size: 'sm' });

const FILE_MENU = ['file.new', 'file.open', 'file.import', 'file.sample', '-', 'file.save', '-', 'app.settings', 'app.palette', 'app.help'];

export const STYLES = {
  detailcraft: {
    format: 'cadcraft-input', version: 1, id: 'detailcraft', name: 'input.style.detailcraft', builtin: true, layout: 'toolbar',
    keys: DEFAULT_KEYS,
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle', 'right'], orbit3d: null },   // null: the 3D view's own buttons
  },
  drafting: {
    format: 'cadcraft-input', version: 1, id: 'drafting', name: 'input.style.drafting', builtin: true, layout: 'ribbon', commandLine: true,
    menus: [m('file', FILE_MENU)],
    quick: ['file.new', 'file.open', 'file.save', 'output.drawings', 'edit.undo', 'edit.redo'],
    tabs: [
      tab('home', [
        ['draw', ['place.beam', 'place.column', 'place.brace', 'place.plate', 'place.footing', 'place.stair']],
        ['modify', ['place.select', 'edit.move', 'edit.copy', 'edit.paste', 'edit.duplicate', 'edit.delete']],
        ['connections', ['connect.endplates', 'connect.baseplate', 'connect.sheartabs', 'connect.splice', 'connect.gusset', 'connect.similar']],
        ['clipboard', ['edit.cut', 'edit.paste-in-place', 'edit.select-all', 'edit.select-none']],
      ]),
      tab('view', [['views', ['view.3d', 'view.plan', 'view.elevation', 'view.fit']]]),
      tab('output', [['plot', ['output.drawings', 'output.shop']], ['export', ['output.ifc', 'output.usd', 'output.nc', 'output.kiss']], ['reports', ['output.bom', 'output.bending', 'output.report']]]),
    ],
    labels: { 'output.drawings': 'input.lbl.drafting.drawings' },
    keys: { ...CTRL_KEYS },
    typed: {
      'place.select': ['SELECT'], 'place.beam': ['BEAM', 'BM'], 'place.column': ['COLUMN', 'COL'], 'place.brace': ['BRACE', 'BR'],
      'place.plate': ['PLATE', 'PL'], 'place.footing': ['FOOTING', 'FTG'], 'place.stair': ['STAIR'],
      'connect.endplates': ['ENDPLATE', 'EP'], 'connect.baseplate': ['BASEPLATE', 'BP'], 'connect.sheartabs': ['SHEARTAB', 'ST'],
      'connect.splice': ['SPLICE'], 'connect.gusset': ['GUSSET'], 'connect.similar': ['SIMILAR', 'MATCH'],
      'edit.undo': ['U', 'UNDO'], 'edit.redo': ['REDO'], 'edit.copy': ['COPYCLIP', 'CP'], 'edit.paste': ['PASTECLIP'], 'edit.cut': ['CUTCLIP'],
      'edit.paste-in-place': ['PASTEORIG'], 'edit.duplicate': ['DUPLICATE', 'DUP'], 'edit.move': ['MOVE', 'M'], 'edit.delete': ['ERASE', 'E'], 'edit.select-all': ['SELECTALL', 'AI_SELALL'],
      'output.ifc': ['IFCOUT', 'IFC'], 'output.usd': ['USDOUT', 'USD'], 'output.nc': ['NC', 'DSTV'], 'output.bom': ['BOM'], 'output.shop': ['SHOP', 'SHOPDRAWING'],
      'output.drawings': ['DRAWINGS', 'PLOT'], 'output.bending': ['BENDING'], 'output.report': ['REPORT'], 'output.kiss': ['KISS'],
      'view.3d': ['3D'], 'view.plan': ['PLAN'], 'view.elevation': ['ELEVATION', 'ELEV'], 'view.fit': ['ZOOM', 'Z', 'ZE'],
      'file.new': ['NEW'], 'file.open': ['OPEN'], 'file.import': ['IMPORT', 'IFCIN'], 'file.save': ['SAVE', 'QSAVE'], 'file.sample': ['SAMPLE'],
      'app.settings': ['OPTIONS', 'SETTINGS'], 'app.help': ['HELP'],
    },
    // the classic program: the middle button pans the plan and elevations; in 3D the middle button pans, Shift + middle orbits
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'none', middle: 'pan', right: 'none' } },
  },
  steel: {
    format: 'cadcraft-input', version: 1, id: 'steel', name: 'input.style.steel', builtin: true, layout: 'ribbon',
    menus: [m('file', FILE_MENU)],
    quick: ['file.open', 'file.save', 'edit.undo', 'edit.redo'],
    tabs: [
      tab('modeling', [['select', ['place.select']], ['members', ['place.beam', sm('place.column'), sm('place.brace'), sm('place.plate')]], ['concrete', ['place.footing']], ['stairs', ['place.stair']]]),
      tab('detailing', [['connections', ['connect.endplates', sm('connect.baseplate'), sm('connect.sheartabs'), { split: ['connect.splice', 'connect.gusset'], size: 'sm' }]], ['apply', ['connect.similar']]]),
      tab('edit', [['clipboard', ['edit.paste', sm('edit.cut'), sm('edit.copy'), sm('edit.delete')], ['edit.paste-in-place', 'edit.duplicate']], ['transform', ['edit.move']], ['selection', ['edit.select-all', 'edit.select-none']]]),
      tab('drawings', [['drawings', ['output.drawings', 'output.shop']], ['reports', ['output.bom', 'output.bending', 'output.report']]]),
      tab('fabrication', [['nc', ['output.nc', 'output.kiss']], ['exchange', ['output.ifc', 'output.usd', 'file.import']]]),
      tab('view', [['views', ['view.3d', 'view.plan', 'view.elevation']], ['navigate', ['view.fit']]]),
    ],
    labels: { 'place.select': 'input.lbl.steel.select' },
    keys: { ...DEFAULT_KEYS },
    // steel detailing programs: the middle button pans everywhere, the right button is left for menus
    mouse: { wheel: 1, zoomSpeed: 1, pan2d: ['middle'], orbit3d: { left: 'orbit', middle: 'pan', right: 'none' } },
  },
};
export const STYLE_ORDER = ['detailcraft', 'drafting', 'steel'];

/** IP.4: each style's family ("use this style in every app"). No menu-bar style: that family keeps DetailCraft's own. */
export const FAMILY = { detailcraft: 'own', drafting: 'classic', steel: 'ribbon' };
export const STORE = 'detailcraft.input';

/** The page side (app-input-ui.js): the mouse goes to the view (input-mouse.js → view3d.js). detailcraft.js sets
 *  window.ccInputHooks = { status, busy }. */
export function hooks() {
  return { mouse: (mm) => setMouse(mm) };
}
