/* SPDX-License-Identifier: Apache-2.0 */
/**
 * workspace-detailcraft.js — DetailCraft's adapter for the shell's workspace layout engine (assets/js/app-workspace.js; 0.7 WS.13,
 * session ws-detailcraft; maps docs/apps/app-workspace.md and docs/apps/detailcraft.md § Workspace layouts). The engine builds the
 * blocks a layout file names; this file fills them with DetailCraft's own things. Every tool runs through the menu-style registry
 * (input-detailcraft.js: the app's own button is clicked), so a layout never has a second code path.
 *
 *   ribbon     the person's menu style when it is a ribbon (Drafting classic or Steel ribbon, or their own copy of one), else the
 *              Steel ribbon (tabs named for steel work: Modeling, Detailing, Edit, Drawings, Fabrication, View)
 *   toolbox    Place · Connect · Edit · Output (the placing tools, every connection, the edits that move parts, the outputs)
 *   views      3D, a plan per level and an elevation per lettered grid line ('open' tabs or 'all' tabs); the view bar of classic
 *              (3D / Plan / Elevation, level, grid line, Fit) is the view tabs' and slots' job in a layout
 *   slots      level (the view: 3D / Plan / Elevation with the plan level and elevation grid pickers), document (the model's name),
 *              layout and fit (Fit)
 *   palettes   properties (the right panel's Properties: tool options or the selection), browser (members, connections and
 *              drawings of the model: a click selects, a drawing opens on its sheet), panel (the left panel's own sections)
 *
 *   mountDetailcraftWorkspace({ root, dc }) → { refresh }   dc = window.detailcraft (model, selected, tool, setTool, setSelection,
 *   act, drawings, print, viewMode); detailcraft.js calls refresh() after every redraw of its bar and view.
 */
import { mountWorkspaces } from 'cc-workspace';
import { fromInput } from '/assets/js/app-workspace-input.js';
import { panelLayout } from '/assets/js/app-input.js';
import { t as tr } from './i18n.js';

const MAP = { open: 'file.open', save: 'file.save', undo: 'edit.undo', redo: 'edit.redo', select: 'place.select', clear: 'edit.select-none', fit: 'view.fit' };
const TOOLBOX = [
  ['place', ['place.select', 'place.beam', 'place.column', 'place.brace', 'place.plate', 'place.footing', 'place.stair']],
  ['connect', ['connect.endplates', 'connect.baseplate', 'connect.sheartabs', 'connect.splice', 'connect.gusset', 'connect.similar']],
  ['edit', ['edit.move', 'edit.duplicate', 'edit.copy', 'edit.paste', 'edit.delete']],
  ['output', ['output.drawings', 'output.shop', 'output.bom', 'output.report']],
];
const MEMBER_KINDS = ['beam', 'column', 'brace', 'plate'];
const CONN_KINDS = ['endplate', 'baseplate', 'sheartab', 'splice', 'gusset'];
const VIEW_ICON = { '3d': 'bi-box', plan: 'bi-grid-3x3', elevation: 'bi-building' };

function el(tag, attrs = {}, ...kids) {
  const e = document.createElement(tag);
  for (const [k, v] of Object.entries(attrs)) {
    if (v === null || v === undefined || v === false) continue;
    if (k === 'className') e.className = v; else e.setAttribute(k, v === true ? '' : String(v));
  }
  for (const c of kids.flat(Infinity)) if (c !== null && c !== undefined && c !== false) e.append(c instanceof Node ? c : String(c));   // text nodes only: model names are untrusted
  return e;
}
const noStop = (s) => String(s).replace(/[.。]\s*$/, '');

export async function mountDetailcraftWorkspace({ root, dc }) {
  const $ = (s) => root.querySelector(s);
  const stage = $('[data-stage]'), left = $('.dc-left'), right = $('.dc-right');
  const base = await fromInput({ app: 'detailcraft', root, stage, panels: { left, right }, status: $('.dc-status'), map: MAP, say: (text) => dc.print(text || '') });
  if (!base) { document.documentElement.removeAttribute('data-cc-ws-boot'); return { refresh() {} }; }
  const I = window.ccInput;
  let engine = null, ctx = null, frame = 0;
  const soon = () => { if (!frame) frame = requestAnimationFrame(() => { frame = 0; engine?.refresh(); }); };
  const viewtabs = () => ctx?.block('viewtabs')?.mode || null;

  // ---- the ribbon: from DetailCraft's ribbon styles ----
  const byId = new Map(I.commands.map((c) => [c.id, c]));
  const tx = (k) => (k && window.ccShellT?.has?.(k) ? window.ccShellT(k) : tr(k));
  function ribbonStyle() {
    const now = I.current?.();
    return now && now.layout === 'ribbon' && Array.isArray(now.tabs) && now.tabs.length ? now : I.styles.steel || Object.values(I.styles).find((p) => p?.layout === 'ribbon');
  }
  function ribbon() {
    const style = ribbonStyle(); if (!style) return [];
    const sid = String(style.id || 'ribbon').replace(/[^a-z0-9-]/gi, '');
    return (style.tabs || []).map((tab, ti) => ({
      tab: sid + '-' + ti, label: tx(tab.label),
      groups: (tab.panels || []).map((pn, pi) => {
        const large = [], stacks = []; let stack = null;
        for (const it of panelLayout(pn)) {
          const id = it.kind === 'cmd' ? it.id : it.kind === 'split' ? it.ids[0] : null;
          if (!id || !byId.has(id)) continue;
          if (it.size === 'sm') { if (!stack || stack.length === 3) { stack = []; stacks.push(stack); } stack.push(id); }
          else { large.push(id); stack = null; }
        }
        return { id: sid + '-' + ti + '-' + pi, label: tx(pn.label), large, stacks };
      }).filter((g) => g.large.length || g.stacks.length),
    })).filter((t) => t.groups.length);
  }
  const label = (id) => { const s = ribbonStyle(); return tx(s?.labels?.[id] || byId.get(id)?.label || id); };
  // a new menu style (Settings › Menus) brings its ribbon along
  new MutationObserver(() => soon()).observe(root, { attributes: true, attributeFilter: ['data-input-style'] });

  // ---- the views ----
  const S = () => dc.model.state;
  const gridName = (g) => tr('app.view.grid', { label: g.label });
  function listViews() {
    const s = S();
    return [{ id: '3d', kind: '3d', name: tr('page.view.3d'), icon: VIEW_ICON['3d'] },
      ...s.levels.map((l) => ({ id: 'plan:' + l.name, kind: 'plan', key: l.name, name: tr('ws.view.plan', { name: l.name }), icon: VIEW_ICON.plan })),
      ...s.grids.y.map((g) => ({ id: 'elev:' + g.label, kind: 'elevation', key: g.label, name: tr('ws.view.elev', { name: gridName(g) }), icon: VIEW_ICON.elevation }))];
  }
  const vlevel = $('[data-vlevel]'), vgrid = $('[data-vgrid]');
  function currentView() {
    const mode = dc.viewMode;
    if (mode === 'plan') return 'plan:' + vlevel.value;
    if (mode === 'elevation') return 'elev:' + vgrid.value;
    return '3d';
  }
  function showView(id) {
    const v = listViews().find((x) => x.id === id); if (!v) return;
    if (v.kind === '3d') { $('[data-view="3d"]').click(); return; }
    const sel = v.kind === 'plan' ? vlevel : vgrid;
    if (![...sel.options].some((o) => o.value === v.key)) return;
    sel.value = v.key; sel.dispatchEvent(new Event('change', { bubbles: true }));
  }
  /** The view command of the ribbon or toolbox in a layout with view tabs: the view opens as a tab. */
  function viewFor(kind) {
    const s = S();
    if (kind === '3d') return '3d';
    if (kind === 'plan') { const l = s.levels.find((x) => x.name === vlevel.value) || s.levels[s.levels.length - 1]; return l ? 'plan:' + l.name : null; }
    const g = s.grids.y.find((x) => x.label === vgrid.value) || s.grids.y[0]; return g ? 'elev:' + g.label : null;
  }

  // ---- the browser: members, connections, drawings ----
  const browser = el('nav', { className: 'dc-ws-browser', 'data-ws-dc-browser': '', 'aria-label': tr('ws.browser') });
  const groups = {
    members: el('details', { className: 'dc-ws-br', open: true, 'data-br': 'members' }, el('summary', {}), el('div', { className: 'dc-ws-br-body' })),
    connections: el('details', { className: 'dc-ws-br', open: true, 'data-br': 'connections' }, el('summary', {}), el('div', { className: 'dc-ws-br-body' })),
    drawings: el('details', { className: 'dc-ws-br', 'data-br': 'drawings' }, el('summary', {}), el('div', { className: 'dc-ws-br-body' })),
  };
  browser.append(groups.members, groups.connections, groups.drawings);
  groups.drawings.addEventListener('toggle', () => { if (groups.drawings.open) renderDrawings(true); });
  let browserSig = '', drawingSig = '', sheets = null;
  const item = (attrs, text, current) => el('li', {}, el('button', { type: 'button', className: 'dc-ws-br-item', 'aria-current': current ? 'true' : 'false', ...attrs }, text));
  const sub = (title, items) => (items.length ? el('div', { className: 'dc-ws-br-sub' }, el('h3', {}, title + ' (' + items.length + ')'), el('ul', {}, items)) : null);
  function renderBrowser() {
    const s = S(), m = dc.marks, picked = new Set(dc.selected.map((r) => r.kind + ':' + r.id));
    const sig = JSON.stringify([dc.model.version, s.members.length, s.connections.length, [...picked], document.documentElement.lang]);
    if (sig === browserSig) return;
    browserSig = sig;
    const asm = (id) => m?.asmMark?.get(id) || '';
    const mem = MEMBER_KINDS.map((k) => sub(tr('ws.br.' + k), s.members.filter((x) => x.type === k).map((x) =>
      item({ 'data-br-ref': 'member:' + x.id }, [asm(x.id) ? asm(x.id) + '  ' : '', x.profile].join(''), picked.has('member:' + x.id)))));
    mem.push(sub(tr('ws.br.footing'), s.footings.map((f) => item({ 'data-br-ref': 'footing:' + f.id }, (m?.footingMark?.get(f.id) || f.id) + '  ' + Math.round(f.L) + ' × ' + Math.round(f.B), picked.has('footing:' + f.id)))));   // i18n-ignore: a size
    mem.push(sub(tr('ws.br.stair'), (s.stairs || []).map((x) => item({ 'data-br-ref': 'stair:' + x.id }, asm(x.id + '.stringerL') || x.id, picked.has('stair:' + x.id)))));
    const nMem = s.members.length + s.footings.length + (s.stairs || []).length;
    groups.members.querySelector('summary').textContent = tr('ws.br.members', { n: nMem });
    groups.members.lastChild.replaceChildren(...(nMem ? mem.filter(Boolean) : [el('p', { className: 'dc-note' }, tr('ws.br.members.none'))]));
    const con = CONN_KINDS.map((k) => sub(tr('ws.br.conn.' + k), s.connections.filter((c) => c.type === k).map((c) =>
      item({ 'data-br-ref': 'conn:' + c.id }, noStop(tr('app.ref.' + c.type, { id: c.id })), picked.has('conn:' + c.id)))));
    groups.connections.querySelector('summary').textContent = tr('ws.br.connections', { n: s.connections.length });
    groups.connections.lastChild.replaceChildren(...(s.connections.length ? con.filter(Boolean) : [el('p', { className: 'dc-note' }, tr('ws.br.connections.none'))]));
    renderDrawings(false);
  }
  /** The drawing set is made from the model: only while its list is open, and again only after the model changed. */
  function renderDrawings(force) {
    const sig = dc.model.version + ':' + S().members.length + ':' + document.documentElement.lang;
    const body = groups.drawings.lastChild, summary = groups.drawings.querySelector('summary');
    if (!groups.drawings.open) { if (sig !== drawingSig) { sheets = null; summary.textContent = tr('ws.br.drawings.closed'); } return; }
    if (!force && sig === drawingSig && sheets) return;
    drawingSig = sig;
    try { sheets = dc.built?.parts?.length ? dc.drawings().sheets : []; } catch (e) { sheets = []; }
    summary.textContent = tr('ws.br.drawings', { n: sheets.length });
    body.replaceChildren(...(sheets.length ? [el('ul', {}, sheets.map((sh, i) => item({ 'data-br-sheet': i }, sh.number + '  ' + sh.title, false)))]
      : [el('p', { className: 'dc-note' }, tr('ws.br.drawings.none'))]));
  }
  browser.addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    if (b.dataset.brRef) {
      const [kind, ...rest] = b.dataset.brRef.split(':');
      if (dc.tool !== 'select') dc.setTool('select');
      if (e.shiftKey || e.ctrlKey || e.metaKey) {
        const ref = { kind, id: rest.join(':') }, cur = dc.selected, k = (r) => r.kind + ':' + r.id;
        dc.setSelection(cur.some((r) => k(r) === k(ref)) ? cur.filter((r) => k(r) !== k(ref)) : [...cur, ref]);
      } else dc.select({ kind, id: rest.join(':') });
      soon();
    } else if (b.dataset.brSheet !== undefined) {
      dc.act('drawings');
      const pick = $('[data-dwg-sheet]');
      if (pick && root.querySelector('[data-dwg]')?.open) { pick.value = b.dataset.brSheet; pick.dispatchEvent(new Event('change', { bubbles: true })); }
    }
  });

  // ---- Properties (the right panel's section) ----
  const propsH = $('[data-props-h]'), propsBody = $('[data-props]');
  const propTitle = el('span', {}, propsH.textContent);

  // ---- the view bar's and info box's controls ----
  const fitSlot = (c) => [c.tool('fit', c.has('viewbar') ? 'viewbar' : 'quickbar', true)];
  const empty3d = el('button', { type: 'button', className: 'ws-tool', 'data-ws-dc-open3d': '' }, el('i', { className: 'bi bi-box ws-icon-bi', 'aria-hidden': 'true' }), el('span', {}, tr('ws.view.open3d')));
  empty3d.addEventListener('click', () => ctx?.open('3d'));

  const toolLabel = (t) => (t === 'select' ? '' : byId.has('place.' + t) ? label('place.' + t) : t === 'move' ? label('edit.move') : t === 'paste' ? label('edit.paste') : t);
  const adapter = {
    ...base,
    t: (k, v) => tr(k, v),
    actions: Object.keys(MAP),
    hide: ['.dc-viewbar'],
    fill: '.dc-canvas',
    ribbon,
    toolbox: () => TOOLBOX.map(([g, tools]) => ({ id: g, label: tr('page.group.' + g), tools: tools.filter((id) => byId.has(id)) })),
    tool(id, block) { const t = base.tool(id, block); return { ...t, label: label(MAP[id] || id) }; },
    run(id, block, button) {
      const cid = MAP[id] || id;
      // a view command in a layout with view tabs opens that view's tab (classic and 'all' tabs: the app's own button)
      if (viewtabs() === 'open' && /^view\.(3d|plan|elevation)$/.test(cid)) { const v = viewFor(cid.slice(5)); if (v) { ctx.open(v); return; } }
      return base.run(id, block, button);
    },
    pressed: (id, block) => base.pressed(id, block),
    state() {
      const tool = dc.tool || 'select';
      return { document: dc.model, name: S().name, dirty: dc.model.dirty, busy: !!window.ccInputHooks?.busy?.(), selection: dc.selected, tool, toolLabel: toolLabel(tool) };
    },
    endTool() { if (dc.tool && dc.tool !== 'select') dc.setTool('select'); },
    options(s) {
      const running = s.tool && s.tool !== 'select';
      const how = running ? tr('app.tool.how.' + s.tool) : '';
      return { title: running ? s.toolLabel : tr('ws.opt.title'),
        text: running ? (how && how !== 'app.tool.how.' + s.tool ? how : tr('ws.opt.tool')) : s.selection.length ? tr('ws.opt.sel', { n: s.selection.length }) : tr('tool.select.how') };
    },
    showProperties() { if (ctx?.has('palettes')) return; window.ccShellPanels?.show?.('right'); propsH.scrollIntoView({ block: 'nearest' }); },
    slots: {
      level: { label: tr('page.view.label'), nodes: () => [$('.dc-viewbar .dc-seg'), vlevel, vgrid].filter(Boolean) },
      document: { label: tr('page.left.model'), nodes: () => [$('[data-model-name]')?.closest('.dc-props')].filter(Boolean) },
      layout: { label: '', nodes: fitSlot },
      fit: { label: tr('page.view.fit'), nodes: fitSlot },
    },
    palettes: {
      properties: { label: tr('page.right.props'), title: propTitle, body: () => propsBody },
      browser: { label: tr('ws.browser'), hint: tr('ws.browser.hint'), body: () => browser },
      panel: { label: tr('page.left.model') },
    },
    views: {
      list: listViews, token: () => dc.model, initial: () => '3d',
      current: currentView,
      go: (id) => { showView(id); soon(); },
      empty: () => empty3d,
    },
    entered(c) {
      ctx = c;
      // Properties moved into the left panel's palette: the right panel steps aside. In the right panel (the toolbox layout's navigator) it stays.
      const onLeft = c.block('palettes')?.place === 'left-panel';
      root.classList.toggle('dc-ws-noright', onLeft);
      if (onLeft) right.classList.add('ws-hide');
      browserSig = ''; soon();
    },
    leaving() { root.classList.remove('dc-ws-noright'); right.classList.remove('ws-hide'); },
    left() { ctx = null; },
    resized() { dc.view?.resize?.(); },
    refresh(c) {
      if (c.has('palettes')) {
        if (propTitle.textContent !== propsH.textContent) propTitle.textContent = propsH.textContent;
        renderBrowser();
      }
    },
  };
  engine = mountWorkspaces(adapter);
  window.detailcraftWorkspace = Object.freeze({ engine, inspect: () => engine.inspect() });   // for tests and the console
  engine.refresh();
  return { refresh: soon };
}
