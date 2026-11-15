/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * agents.js — DetailCraft for AI assistants and scripts (0.4 part 2 X.12; docs/AGENTS-SPEC.md §5.2, §6.3). The apps contain no
 * AI: this gives the person's own assistant tools on the open model; Settings › Assistants (host.js) decides which groups.
 *
 *   detailTools(app) → [tool definitions] (DOM-free; bin/test-detailcraft.mjs runs them through host.js's dispatcher)
 *   installAgents(app) → registers them on host.control and configures it (the page calls it once)
 *
 * app = { model() (the open Model), analysis() (the Analysis tab's panel, for frame_break), built(), marks(), selected() → refs, select(refs) (the page shows it), busy() → null |
 *         what the person is in the middle of, save(), exports: { ifc, nc, bom, bending, kiss, cutlist } }
 * Units: millimetres; points [x, y, z] in the model's coordinates (z up).
 *
 * Tools:
 *   app_info         read    the window: model name, unsaved?, counts, steel and rebar weight, problems, allowed groups
 *   model_describe   read    grids, levels, phases, members by type and profile, connections by type, footings, stairs
 *   parts_list       read    part marks (type, profile, material, length, count, weights, phase), filtered and paged
 *   problems_list    read    what the Problems tab lists, each with what it is about
 *   frame_break      read    what breaks first in the analysed frame (the Analysis tab's Break it; 0.8 round 3, EG.31)
 *   clash_check      read    the clash check (as Clashes › Check now), tolerance and phases optional
 *   selection_get    read    what is selected, described
 *   selection_set    edit    select members, connections, footings or stairs (by id or part mark); changes no model
 *   member_add       edit    a beam, column, brace or plate between two points (one undo step "Assistant: add <type>")
 *   connection_add   edit    end plates, shear tabs, a base plate, splices, gussets or mitres where the given members meet
 *                            (as the Connect buttons do; one undo step)
 *   undo             edit    undoes the assistant's last steps (others' only with any: true)
 *   model_save       save    the app's own Save
 *   model_export     export  IFC, NC files, BOM, bending schedule, KISS or cut list: the app's own download
 *   usd_export       export  the steel model as OpenUSD (.usda, .usdc, .usdz), to a path in Studio or a download (0.7 AS.6)
 * (app.usd(format) → { data, report, name, type } and app.download(name, data, type) are the page's)
 */
import { constructability } from './constructability.js';   // 0.8 EG.43
import { panelOf, cutList as framingCutList, cleanPanelSpec } from './framing.js';   // 0.8 EG.6
import { SOIL_DEFAULTS, checkFooting, pileGroup, retainingWall } from './foundation.js';   // 0.8 EG.5
import { congestion, tightShare } from './congestion.js';   // 0.8 EG.74
import { propose as autopilotPropose, apply as autopilotApply } from './autopilot.js';   // 0.8 EG.73
import { plan as erectionPlan, emptySetup, cleanCrane, cleanSetup } from './erection.js';   // 0.8 EG.72
import { getHost, stackRollback, peekUndo, ToolError } from './host.js';
import { findJoints, freeSplices, freeBraceEnds, freeMitres, isBeamEnd } from './connections.js';
import { clashCheck } from './clash.js';

const LIMIT = 1000;
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const PT = { type: 'array', items: { type: 'number' }, minItems: 3, maxItems: 3 };
const REF = obj({ kind: { type: 'string', enum: ['member', 'conn', 'footing', 'stair'] }, id: { type: 'string', maxLength: 255 } }, ['kind', 'id']);
const COUNT = (list, key) => { const m = new Map(); for (const x of list) m.set(key(x), (m.get(key(x)) || 0) + 1); return [...m].map(([k, n]) => ({ [typeof k === 'string' ? 'name' : 'key']: k, count: n })); };

/** What the window has open, in short (app_info's body). */
export function modelSummary(model, built, marks) {
  const s = model.state;
  return {
    name: s.name, unsaved: model.dirty, members: s.members.length, connections: s.connections.length, footings: s.footings.length,
    stairs: (s.stairs || []).length, looseBolts: (s.bolts || []).length, parts: built.parts.length, partMarks: marks.parts.length, assemblies: marks.assemblies.length,
    bolts: built.bolts.length, steelKg: r1(built.parts.reduce((t, p) => t + p.weight, 0)), problems: built.problems.length,
  };
}

/** The model laid out (model_describe's body). */
export function describeModel(model) {
  const s = model.state;
  const byType = {};
  for (const m of s.members) (byType[m.type] ||= []).push(m);
  return {
    name: s.name, units: 'mm',
    grids: { numbered: s.grids.x.map((g) => ({ label: g.label, x: g.at })), lettered: s.grids.y.map((g) => ({ label: g.label, y: g.at })) },
    levels: s.levels.map((l) => ({ name: l.name, z: l.z })),
    phases: s.phases.map((p) => ({ n: p.n, name: p.name })),
    members: Object.entries(byType).map(([type, list]) => ({ type, count: list.length, profiles: COUNT(list, (m) => m.profile) })),
    connections: COUNT(s.connections, (c) => c.type).map((x) => ({ type: x.name, count: x.count })),
    footings: s.footings.length, stairs: (s.stairs || []).map((x) => ({ id: x.id, foot: [x.x, x.y, x.z], rise: x.rise, width: x.width, direction: x.dir })),
  };
}

/** Part mark rows (parts_list's body), filtered and paged. */
export function partsRows(built, marks, a = {}) {
  const rows = marks.parts.filter((p) => (!a.type || p.type === a.type) && (!a.profile || p.profile.toUpperCase() === String(a.profile).toUpperCase())
    && (!a.mark || p.mark.toLowerCase() === String(a.mark).toLowerCase()) && (!a.phase || (built.byId.get(p.ids[0])?.phase || 1) === a.phase));
  const offset = a.offset || 0, limit = a.limit || 100;
  return {
    total: rows.length, offset,
    parts: rows.slice(offset, offset + limit).map((p) => {
      const part = built.byId.get(p.ids[0]);
      return { mark: p.mark, type: p.type, profile: p.profile, material: p.material, length: r1(p.length), count: p.count, weightEachKg: r1(part?.weight), weightKg: r1((part?.weight || 0) * p.count),
        phase: part?.phase || 1, assemblies: [...new Set(p.ids.map((id) => marks.asmMark.get(marks.asmOf.get(id))).filter(Boolean))], ids: p.ids.slice(0, 50) };
    }),
  };
}

export function detailTools(app) {
  const M = () => app.model();
  const refOk = (r) => { const s = M().state; return r.kind === 'member' ? s.members.some((x) => x.id === r.id) : r.kind === 'conn' ? s.connections.some((x) => x.id === r.id) : r.kind === 'footing' ? s.footings.some((x) => x.id === r.id) : (s.stairs || []).some((x) => x.id === r.id); };
  const describeRef = (r) => {
    const s = M().state, mk = app.marks();
    if (r.kind === 'member') { const m = s.members.find((x) => x.id === r.id); return { ...r, type: m.type, profile: m.profile, mark: mk.partMark.get(r.id) || null, start: m.start, end: m.end }; }
    if (r.kind === 'conn') { const c = s.connections.find((x) => x.id === r.id); return { ...r, type: c.type, members: [c.beam, c.column, c.a, c.b, c.brace, c.support].filter(Boolean) }; }
    if (r.kind === 'footing') { const f = s.footings.find((x) => x.id === r.id); return { ...r, mark: mk.footingMark?.get(r.id) || null, center: [f.x, f.y, f.top], size: [f.L, f.B, f.H] }; }
    const x = (s.stairs || []).find((q) => q.id === r.id); return { ...r, foot: [x.x, x.y, x.z], rise: x.rise, width: x.width };
  };
  /** One undo step labelled as the assistant's; the model's own checks refuse bad input (and nothing changes). */
  const step = (label, fn) => {
    const why = app.busy?.();
    if (why) throw new Error('The person is ' + why + ': try again when they finish.');
    return M().change('Assistant: ' + label, fn);
  };
  const byMark = (mark) => {
    const p = app.marks().parts.find((x) => x.mark.toLowerCase() === String(mark).toLowerCase());
    if (!p) throw new Error('No part mark "' + mark + '".');
    return p.ids.map((id) => (M().state.members.some((m) => m.id === id) ? { kind: 'member', id } : null)).filter(Boolean);
  };
  return [
    {
      name: 'app_info', group: 'read', title: 'About this window',
      description: 'DetailCraft\'s window: the model open (name, unsaved changes), how many members, connections, footings, stairs, parts, marks and bolts it has, its steel weight, how many problems, and what the person is in the middle of.',
      run: () => ({ app: 'detailcraft', title: 'DetailCraft', busy: app.busy?.() || null, ...modelSummary(M(), app.built(), app.marks()) }),
    },
    {
      name: 'model_describe', group: 'read', untrusted: true, title: 'Describe the model',
      description: 'The open DetailCraft model in millimetres: grids (numbered lines at x, lettered at y), levels (z), phases, members by type and profile, connections by type, footings and stairs.',
      run: () => describeModel(M()),
    },
    {
      name: 'parts_list', group: 'read', untrusted: true, title: 'List part marks',
      description: 'The bill of materials by part mark: type, profile, material, cut length (mm), count, weight each and in all (kg, gross), phase, assembly marks and the part ids. Filters: type, profile, mark, phase.',
      inputSchema: obj({ type: { description: 'Only parts of this type.', type: 'string', enum: ['beam', 'column', 'brace', 'plate', 'stringer'] }, profile: { description: 'Only parts with this profile.', type: 'string', maxLength: 255 }, mark: { description: 'Only the part with this mark.', type: 'string', maxLength: 255 }, phase: { description: 'Only parts of this phase number.', type: 'integer', minimum: 1 },
        offset: { description: 'How many results to skip, for paging (default 0).', type: 'integer', minimum: 0 }, limit: { description: 'Most results to return in one call (use offset for the next page).', type: 'integer', minimum: 1, maximum: LIMIT } }),
      run: (a) => partsRows(app.built(), app.marks(), a),
    },
    {
      name: 'problems_list', group: 'read', untrusted: true, title: 'List problems',
      description: 'What the Problems tab lists: connections that cannot be built or need a look, holes off their parts, footings without room for their bars, stair checks. Each with the member, connection, footing or stair it is about.',
      run: () => ({ problems: app.built().problems.map((p) => ({ text: p.text, hard: !!p.hard, about: p.ref ? { kind: /^m/.test(p.ref) ? 'member' : /^j/.test(p.ref) ? 'conn' : /^f/.test(p.ref) ? 'footing' : /^s/.test(p.ref) ? 'stair' : 'other', id: p.ref } : null })) }),
    },
    {
      name: 'clash_check', group: 'read', title: 'Check clashes',
      description: 'The clash check: steel parts and footings that reach into each other by more than the tolerance (mm), leaving out what a connection means to meet. Optionally only some phases.',
      inputSchema: obj({ tolerance: { description: 'Overlap smaller than this (millimetres) is not a clash.', type: 'number', minimum: 0, maximum: 50 }, phases: { description: 'Only check parts of these phase numbers.', type: 'array', items: { type: 'integer', minimum: 1 }, maxItems: 999 } }),
      run: (a) => {
        const r = clashCheck(M().state, app.built(), { tol: a.tolerance ?? 1, phases: a.phases ? new Set(a.phases) : null });
        const mk = app.marks();
        return { checked: r.checked, clashes: r.clashes.slice(0, LIMIT).map((c) => ({ a: { ...c.a, part: mk.partMark.get(c.aPart) || c.aPart }, b: { ...c.b, part: mk.partMark.get(c.bPart) || c.bPart }, depth: c.depth, at: c.at, kind: c.kind })), total: r.clashes.length };
      },
    },
    {
      name: 'footing_congestion', group: 'read', title: 'Rebar congestion',
      description: 'How tight the rebar leaves each footing: the narrowest opening for concrete to get down through the mat and the starters, against the clear spacing the bars ask for (ACI 318-19 25.2.1). Optionally with the largest aggregate and the vibrator head. Returns one row per footing; a ratio over 1 is tighter than asked.',
      inputSchema: obj({ aggregate: { description: 'Largest aggregate in millimetres (0 = not known).', type: 'number', minimum: 0, maximum: 100 }, vibrator: { description: 'Vibrator head diameter in millimetres (0 = not known).', type: 'number', minimum: 0, maximum: 200 } }),
      run: (a) => ({ footings: M().state.footings.slice(0, LIMIT).map((f) => { const m = congestion(f, a); return { id: f.id, mark: app.marks().footingMark?.get(f.id) || null, needMm: Math.round(m.need * 10) / 10, tightestMm: Math.round(m.worst.opening * 10) / 10, ratio: Math.round(m.worst.ratio * 100) / 100, atMm: [Math.round(m.worst.x), Math.round(m.worst.y)], tightShare: Math.round(tightShare(m) * 100) / 100 }; }) }),
    },
    {
      name: 'footing_check', group: 'read', title: 'Check a footing',
      description: 'Foundation checks for the footings that have column loads (typed or taken from the Analysis tab): bearing, sliding and overturning from service loads; flexure, one-way shear, punching, development and minimum steel from factored loads (ACI 318-19). Returns each check with its clause, demand, capacity and status. A check for an engineer to review, not a sign-off.',
      inputSchema: obj({ footing: { description: 'Only this footing id (from model_describe).', type: 'string', maxLength: 40 } }),
      run: (a) => {
        const st = M().state, fd = st.foundation, out = [];
        for (const f of st.footings) {
          if (a.footing && f.id !== a.footing) continue;
          const loads = fd?.loads?.[f.id];
          if (!loads?.length) continue;
          const r = checkFooting(f, loads, { ...SOIL_DEFAULTS, ...(fd.soil || {}) });
          out.push({ id: f.id, mark: app.marks().footingMark?.get(f.id) || null, checks: r.checks.map((c) => ({ id: c.id, clause: c.clause, status: c.status, demand: Number.isFinite(c.demand) ? Math.round(c.demand * 100) / 100 : null, capacity: Math.round(c.capacity * 100) / 100, unit: c.unit, ratio: Number.isFinite(c.ratio) ? Math.round(c.ratio * 1000) / 1000 : null, vars: c.vars })) });
        }
        if (!out.length) throw new Error('No footing has column loads yet: type them in the Foundation tab or take them from the Analysis.');
        return { footings: out };
      },
    },
    {
      name: 'pile_group_check', group: 'read', title: 'Check a pile group',
      description: 'Pile reactions of a rigid cap by the elastic method, R = P/n plus the moment shares, for piles at the given points (mm), and whether the biggest compression and any tension stay within the capacities you give. Returns each pile\'s reaction in kN (positive is compression).',
      inputSchema: obj({ piles: { description: 'Pile positions in the cap\'s plan, millimetres.', type: 'array', minItems: 1, maxItems: 500, items: obj({ x: { description: 'x in millimetres.', type: 'number', minimum: -1e6, maximum: 1e6 }, y: { description: 'y in millimetres.', type: 'number', minimum: -1e6, maximum: 1e6 } }, ['x', 'y']) },
        P: { description: 'Vertical load on the cap in kN, down.', type: 'number', minimum: -1e7, maximum: 1e7 }, Mx: { description: 'Moment about x in kN·m.', type: 'number', minimum: -1e8, maximum: 1e8 }, My: { description: 'Moment about y in kN·m.', type: 'number', minimum: -1e8, maximum: 1e8 },
        compression: { description: 'What one pile may carry in compression, kN (the pile design\'s, not this tool\'s).', type: 'number', minimum: 0, maximum: 1e7 }, tension: { description: 'What one pile may carry in tension, kN (0 = none).', type: 'number', minimum: 0, maximum: 1e7 } }, ['piles', 'P']),
      run: (a) => { const g = pileGroup(a.piles, { P: a.P, Mx: a.Mx || 0, My: a.My || 0 }, { compression: a.compression, tension: a.tension }); return { reactionsKN: g.reactions.map((v) => Math.round(v * 100) / 100), checks: g.checks, equilibrium: g.equilibrium }; },
    },
    {
      name: 'retaining_wall_check', group: 'read', title: 'Check a retaining wall',
      description: 'Overturning, sliding and base pressure of a cantilever retaining wall on level backfill with Rankine active pressure, per metre of wall. Passive pressure in front is left out. Returns the factors of safety and the base pressure; the soil values are yours.',
      inputSchema: obj({ H: { description: 'Retained height of soil above the base, millimetres.', type: 'number', minimum: 500, maximum: 20000 }, baseThickness: { description: 'Base slab thickness, millimetres.', type: 'number', minimum: 150, maximum: 3000 }, stem: { description: 'Stem thickness, millimetres.', type: 'number', minimum: 150, maximum: 3000 }, toe: { description: 'Toe length in front of the stem, millimetres.', type: 'number', minimum: 0, maximum: 10000 }, heel: { description: 'Heel length behind the stem, millimetres.', type: 'number', minimum: 0, maximum: 20000 },
        gamma: { description: 'Soil unit weight, kN per cubic metre.', type: 'number', minimum: 5, maximum: 30 }, phi: { description: 'Soil friction angle, degrees.', type: 'number', minimum: 0, maximum: 50 }, surcharge: { description: 'Surcharge on the backfill, kPa.', type: 'number', minimum: 0, maximum: 500 }, qa: { description: 'Allowable bearing pressure, kPa (0 = not entered).', type: 'number', minimum: 0, maximum: 100000 }, mu: { description: 'Base friction coefficient (0 = not entered).', type: 'number', minimum: 0, maximum: 2 } }, ['H', 'baseThickness', 'stem', 'toe', 'heel']),
      run: (a) => { const w = retainingWall({ H: a.H, hb: a.baseThickness, t: a.stem, toe: a.toe, heel: a.heel }, { gamma: a.gamma, phi: a.phi, surcharge: a.surcharge, qa: a.qa, mu: a.mu }); return { Ka: Math.round(w.Ka * 1e4) / 1e4, PaKNperM: Math.round(w.Pa * 100) / 100, weightKNperM: Math.round(w.W * 100) / 100, eccentricityM: Math.round(w.e * 1000) / 1000, baseQmaxKPa: w.field.ok ? Math.round(w.field.qmax * 10) / 10 : null, checks: w.checks }; },
    },
    {
      name: 'framing_panels', group: 'read', untrusted: true, title: 'List framing panels',
      description: 'The timber and light-gauge steel framing panels in the model (Framing tab): each panel\'s spec, its piece count and its cut list by mark (size, length in millimetres, count), and the issues that stop it being framed. Returns none until panels are added with framing_panel_add.',
      run: () => ({ panels: (M().state.framing?.panels || []).map((p) => { const pn = panelOf(p); return { id: p.id, name: p.name, kind: p.kind, material: p.material, spec: p, summary: pn.summary, cutList: framingCutList(pn).map((r) => ({ mark: r.mark, piece: r.kind, size: r.size, lengthMm: r.length, count: r.count })), issues: pn.issues.map((i) => i.code) }; }) }),
    },
    {
      name: 'framing_panel_add', group: 'edit', title: 'Add a framing panel',
      description: 'Adds a wall, floor or roof framing panel in timber or light-gauge steel (millimetres) with the Framing tab\'s defaults for what you leave out. Walls take openings (x from the left, width, rough-opening top and bottom measured from the subfloor). Returns the panel as kept, its piece count and any issue. The sizes are yours: nothing here checks them against a code.',
      inputSchema: obj({ kind: { description: 'wall, floor or roof.', type: 'string', enum: ['wall', 'floor', 'roof'] }, name: { description: 'A name for the panel.', type: 'string', maxLength: 60 }, material: { description: 'timber or lgs (light-gauge steel).', type: 'string', enum: ['timber', 'lgs'] }, size: { description: 'Member size such as 2x4 or C92-1.2.', type: 'string', maxLength: 20 },
        length: { description: 'Wall or roof length in millimetres.', type: 'number', minimum: 300, maximum: 30000 }, height: { description: 'Wall height in millimetres.', type: 'number', minimum: 600, maximum: 8000 }, width: { description: 'Floor width in millimetres.', type: 'number', minimum: 300, maximum: 30000 }, span: { description: 'Floor span in millimetres.', type: 'number', minimum: 600, maximum: 12000 },
        run: { description: 'Roof run (half the span) in millimetres.', type: 'number', minimum: 600, maximum: 12000 }, rise: { description: 'Roof rise in millimetres.', type: 'number', minimum: 100, maximum: 12000 }, spacing: { description: 'Stud, joist or rafter spacing in millimetres.', type: 'number', minimum: 200, maximum: 1200 },
        openings: { description: 'Wall openings.', type: 'array', maxItems: 40, items: obj({ x: { description: 'Left edge from the wall\'s left end, millimetres.', type: 'number', minimum: 0, maximum: 30000 }, width: { description: 'Opening width in millimetres.', type: 'number', minimum: 200, maximum: 10000 }, height: { description: 'Rough-opening top from the subfloor, millimetres.', type: 'number', minimum: 200, maximum: 6000 }, sill: { description: 'Rough-opening bottom from the subfloor, millimetres (0 for a door).', type: 'number', minimum: 0, maximum: 6000 } }, ['x', 'width', 'height']) } }, ['kind']),
      preview: (a) => { const spec = cleanPanelSpec({ ...a, id: 'preview' }); const pn = panelOf(spec); return { wouldAdd: spec, summary: pn.summary, issues: pn.issues.map((i) => i.code) }; },
      run: (a) => {
        const spec = cleanPanelSpec({ ...a, id: 'p' + ((M().state.framing?.panels.length || 0) + 1) + a.kind[0] });
        const pn = panelOf(spec);
        step('add framing panel', (tx) => { tx.s.framing = { panels: [...(tx.s.framing?.panels || []), spec] }; });
        return { panel: spec, summary: pn.summary, issues: pn.issues.map((i) => i.code) };
      },
    },
    {
      name: 'constructability_check', group: 'read', title: 'Check constructability',
      description: 'The constructability rules of the Problems panel: bolts a socket wrench cannot reach, bolts too close for the socket, fillet welds outside the AISC 360-16 size limits, all-round fillet welds a torch cannot reach, and hollow sections that collect water or need a vent. Returns each problem with the connection or member it is about. The socket size is a typical impact socket and can be changed.',
      inputSchema: obj({ socketLength: { description: 'Room a socket and wrench need along the bolt, millimetres (default 60).', type: 'number', minimum: 10, maximum: 500 }, socketWall: { description: 'Socket wall around the nut\'s corners, millimetres (default 4).', type: 'number', minimum: 0, maximum: 20 },
        rules: { description: 'Only these rules: access, bolts, weld, weldaccess, water.', type: 'array', maxItems: 5, items: { description: 'A rule name.', type: 'string', enum: ['access', 'bolts', 'weld', 'weldaccess', 'water'] } },
        torchRadius: { description: 'Radius of the welding torch\'s nozzle path for the weld access rule, millimetres (default 10).', type: 'number', minimum: 2, maximum: 50 }, torchReach: { description: 'How far past the nozzle\'s start the path runs, millimetres (default 30).', type: 'number', minimum: 2, maximum: 200 } }),
      run: (a) => ({ problems: constructability(M().state, app.built(), a).slice(0, LIMIT).map((p) => ({ code: p.code, severity: p.severity, about: p.about, ...p.msg.vars })) }),
    },
    {
      name: 'frame_break', group: 'read', title: 'What breaks first',
      description: 'Finds what gives way first in the analysed frame: the strength combination that governs, the weakest member, how far the loads can grow before the first member reaches its limit, and the weakest end plate or shear tab where its bolts\' shear strength is known (AISC 360-16 J3.6). Needs a design code and strength combinations in the Analysis tab; runs the analysis if needed. Findings come worst first. Changes nothing.',
      inputSchema: obj({}),
      run: async () => {
        const an = app.analysis ? app.analysis() : null;
        if (!an || !an.runBreak) throw new ToolError('unsupported', 'Break it is not available in this window.', { next: ['Open the Analysis tab in DetailCraft.'] });
        const r = await an.runBreak();
        if (!r || r.ok === false) throw new ToolError('invalid_argument', 'Break it could not run: ' + String((r && r.error) || 'no result') + '.', { next: ['Choose a design code and make the strength combinations in the Analysis tab (Design checks), then try again.'] });
        const f = r.findings.slice(0, LIMIT);
        return { first: f[0] ? { kind: f[0].kind, subject: f[0].subject.label || f[0].subject.id, util: r1(f[0].util), factor: r1(f[0].factor) } : null,
          findings: f.map((x) => ({ kind: x.kind, subject: x.subject.label || x.subject.id, util: x.util === null || x.util === undefined ? null : Math.round(x.util * 1000) / 1000, factor: x.factor === null || x.factor === undefined ? null : Math.round(x.factor * 100) / 100, failing: !!x.failing, clause: x.clause || null })),
          combo: r.combo ? { name: r.combo.name, util: Math.round(r.combo.util * 1000) / 1000, member: r.combo.member } : null,
          reserve: r.reserve ? { factor: r.reserve.factor === null ? null : Math.round(r.reserve.factor * 100) / 100, bounded: r.reserve.bounded !== false } : null, notChecked: r.notChecked.length };
      },
    },
    {
      name: 'selection_get', group: 'read', title: 'What is selected',
      description: 'What the person has selected in DetailCraft, each described (member: type, profile, mark, ends; connection: type and members; footing; stair).',
      run: () => ({ selected: app.selected().slice(0, LIMIT).filter(refOk).map(describeRef) }),
    },
    {
      name: 'selection_set', group: 'edit', dryRun: true, title: 'Select',
      description: 'Select members, connections, footings or stairs to show them to the person: by refs ({kind, id}) or by part marks (every member with that mark). Changes nothing in the model.',
      inputSchema: obj({ refs: { description: 'Things to select as {kind, id} (member, conn, footing, stair).', type: 'array', items: REF, maxItems: 100000 }, marks: { description: 'Part marks: every member with that mark is selected.', type: 'array', items: { type: 'string', maxLength: 255 }, maxItems: 1000 }, mode: { description: 'replace (default) selects only these; add keeps the current selection too; remove deselects these.', type: 'string', enum: ['replace', 'add', 'remove'] } }),
      run: (a, ctx) => {
        let refs = [];
        if (a.refs) { const bad = a.refs.filter((r) => !refOk(r)); if (bad.length) throw new Error('Unknown: ' + bad.slice(0, 10).map((r) => r.kind + ' ' + r.id).join(', ') + '. Nothing selected.'); refs = a.refs; }
        if (a.marks) for (const mk of a.marks) refs.push(...byMark(mk));
        if (!a.refs && !a.marks) throw new Error('Say what to select: refs or marks.');
        const key = (r) => r.kind + ':' + r.id, cur = app.selected();
        const next = a.mode === 'add' ? [...cur, ...refs] : a.mode === 'remove' ? cur.filter((r) => !refs.some((q) => key(q) === key(r))) : refs;
        return { selected: ctx.preview ? next.length : app.select(next) };
      },
    },
    {
      name: 'member_add', group: 'edit', rollbackPreview: true, title: 'Add a member',
      description: 'Add a beam, column, brace or plate between two points (mm). Profile by name (catalog, e.g. W16x26, IPE300, HSS4x4x1/4, or PL20x200 for a plate); position top|middle|bottom puts the reference line on the top of steel, the middle or the bottom; rotation in degrees about its axis. One undo step.',
      inputSchema: obj({ type: { description: 'beam, column, brace or plate.', type: 'string', enum: ['beam', 'column', 'brace', 'plate'] }, start: { ...PT, description: 'Start point [x, y, z] in millimetres.' }, end: { ...PT, description: 'End point [x, y, z] in millimetres.' }, profile: { description: 'Profile by name from the catalog (W16x26, IPE300, HSS4x4x1/4, PL20x200 for a plate).', type: 'string', maxLength: 255 }, material: { description: 'Material name (default: the model\'s).', type: 'string', maxLength: 255 },
        position: { description: 'Where the line sits on the profile: top, middle or bottom.', type: 'string', enum: ['top', 'middle', 'bottom'] }, rotation: { description: 'Rotation about its own axis in degrees.', type: 'number' }, name: { description: 'Name for the member.', type: 'string', maxLength: 40 }, phase: { description: 'Phase number for erection (from 1).', type: 'integer', minimum: 1 } }, ['type', 'start', 'end']),
      run: (a) => {
        const id = step('add ' + a.type, (tx) => tx.addMember({ ...a }));
        return { id, mark: app.marks().partMark.get(id) || null };
      },
    },
    {
      name: 'connection_add', group: 'edit', rollbackPreview: true, title: 'Add connections',
      description: 'Connect where the given members meet, as the Connect buttons do: endplate or sheartab (at every free end of the beams that meets a column), baseplate (under each column), splice (where the pieces meet another of their profile end to end), gusset (at every brace end on a column or beam), mitre (where two of the I-shaped members meet end to end at an angle). Default parameters; one undo step. Returns the new connection ids and any problems they report.',
      inputSchema: obj({ type: { description: 'endplate, sheartab, baseplate, splice, gusset or mitre.', type: 'string', enum: ['endplate', 'sheartab', 'baseplate', 'splice', 'gusset', 'mitre'] }, members: { description: 'Member ids (or marks) to connect where they meet.', type: 'array', items: { type: 'string', maxLength: 255 }, minItems: 1, maxItems: 1000 } }, ['type', 'members']),
      run: (a) => {
        const s = M().state;
        const bad = a.members.filter((id) => !s.members.some((m) => m.id === id));
        if (bad.length) throw new Error('Unknown members: ' + bad.slice(0, 10).join(', ') + '.');
        let todo = [];
        if (a.type === 'endplate' || a.type === 'sheartab') {
          const taken = new Set(s.connections.filter(isBeamEnd).map((c) => c.beam + ':' + c.end));
          todo = findJoints(s).filter((j) => a.members.includes(j.beam) && !taken.has(j.beam + ':' + j.end) && (a.type === 'sheartab' || j.face !== 'skew')).map((j) => ({ type: a.type, beam: j.beam, end: j.end, column: j.column }));
        } else if (a.type === 'baseplate') {
          todo = a.members.filter((id) => s.members.find((m) => m.id === id).type === 'column' && !s.connections.some((c) => c.type === 'baseplate' && c.column === id)).map((id) => ({ type: 'baseplate', column: id }));
        } else if (a.type === 'splice') todo = freeSplices(s, a.members).map((j) => ({ type: 'splice', a: j.a, aEnd: j.aEnd, b: j.b }));
        else if (a.type === 'mitre') todo = freeMitres(s, a.members).map((j) => ({ type: 'mitre', a: j.a, aEnd: j.aEnd, b: j.b, bEnd: j.bEnd }));
        else todo = freeBraceEnds(s, a.members).map((j) => ({ type: 'gusset', brace: j.brace, end: j.end, support: j.support }));
        if (!todo.length) throw new Error('Nowhere to add a ' + a.type + ' on those members (no free joint of that kind).');
        const ids = step('add ' + a.type + (todo.length > 1 ? 's' : ''), (tx) => todo.map((c) => tx.addConnection(c)));
        const probs = app.built().problems.filter((p) => ids.includes(p.ref)).map((p) => ({ connection: p.ref, text: p.text, hard: !!p.hard }));
        return { added: ids, problems: probs };
      },
    },
    {
      name: 'erection_describe', group: 'read', untrusted: true, title: 'Describe the erection plan',
      description: 'The erection plan for the cranes the person entered (Erection tab): each lift in order with part mark, weight (kg, gross), radius (m), share of the crane chart, status and minute, and the total time. Returns no lifts until a crane with a load chart is entered; erection_crane_set adds one.',
      inputSchema: obj({ limit: { description: 'Most lifts to return in one call.', type: 'integer', minimum: 1, maximum: LIMIT } }),
      outputSchema: { type: 'object', properties: { cranes: { type: 'array' }, summary: { type: 'object' }, notALiftPlan: { type: 'boolean' }, lifts: { type: 'array' } } },
      run: (a) => {
        const s = M().state.erection || emptySetup();
        const pl = erectionPlan(M().state, app.built(), app.marks(), s);
        return { cranes: pl.cranes.map((c) => ({ id: c.id, name: c.name, at: c.at, chartRows: c.chart.length })), summary: pl.summary, notALiftPlan: true,
          lifts: pl.picks.slice(0, a.limit || LIMIT).map((p) => ({ n: p.n, mark: p.mark, type: p.type, phase: p.phase, crane: p.crane, kg: Math.round(p.weight), radiusM: Math.round(p.radius * 10) / 10, chartKg: Math.round(p.capacity), share: Number.isFinite(p.util) ? Math.round(p.util * 100) / 100 : null, status: p.status, startMin: Math.round(p.start * 10) / 10 })) };
      },
    },
    {
      name: 'erection_crane_set', group: 'edit', title: 'Set a crane and its chart',
      description: 'Adds a crane, or changes the one with the same id: where it stands (millimetres), its highest hook and its load chart as rows of radius (metres) and capacity (kg). Returns the crane as kept. Use erection_describe afterwards to see every lift against the chart.',
      inputSchema: obj({ id: { description: 'The crane\'s id, such as c1; a new id adds a crane.', type: 'string', minLength: 1, maxLength: 40 }, name: { description: 'A name for the crane.', type: 'string', maxLength: 80 }, x: { description: 'Slew centre X in millimetres.', type: 'number', minimum: -1e7, maximum: 1e7 }, y: { description: 'Slew centre Y in millimetres.', type: 'number', minimum: -1e7, maximum: 1e7 },
        hookHeight: { description: 'The highest the hook goes, millimetres (0 = no limit).', type: 'number', minimum: 0, maximum: 500000 },
        chart: { description: 'The load chart: capacity in kg that holds out to each radius in metres.', type: 'array', minItems: 1, maxItems: 200, items: obj({ radius: { description: 'Radius in metres.', type: 'number', minimum: 0.1, maximum: 500 }, kg: { description: 'Capacity in kilograms at that radius.', type: 'number', minimum: 0, maximum: 5000000 } }, ['radius', 'kg']) } }, ['id', 'chart']),
      preview: (a) => ({ wouldSet: cleanCrane({ id: a.id, name: a.name, at: [a.x ?? 0, a.y ?? 0], hookHeight: a.hookHeight, chart: a.chart }) }),
      run: (a) => {
        let kept = null;
        step('Set crane ' + a.id, (tx) => {
          const cur = JSON.parse(JSON.stringify(tx.s.erection || emptySetup()));
          const old = cur.cranes.find((c) => c.id === a.id);
          const next = cleanCrane({ ...(old || {}), id: a.id, name: a.name ?? old?.name, at: [a.x ?? old?.at[0] ?? 0, a.y ?? old?.at[1] ?? 0], hookHeight: a.hookHeight ?? old?.hookHeight, chart: a.chart });
          if (old) cur.cranes[cur.cranes.indexOf(old)] = next; else cur.cranes.push(next);
          tx.s.erection = cleanSetup(cur);
          kept = next;
        });
        return { crane: kept };
      },
    },
    {
      name: 'connection_autopilot', group: 'edit', title: 'Connect every open joint',
      description: 'Adds a connection at every joint that has none: base plates under columns, shear tabs (or end plates for the moment beams you list) at beam ends on columns, splices and gussets. Sizes come from the shapes and, if given, the end shear; they are starting values, not a connection design. Returns what was added and the joints left for the person.',
      inputSchema: obj({ moment: { description: 'Ids of beams whose ends are moment connections (end plates).', type: 'array', items: { type: 'string', maxLength: 40 }, maxItems: 500 },
        uniformKNm: { description: 'A uniform load on every beam in kilonewtons per metre: end shear = w times length over two.', type: 'number', minimum: 0, maximum: 100000 },
        reactionKN: { description: 'One end shear for every beam in kilonewtons.', type: 'number', minimum: 0, maximum: 1000000 },
        grade: { description: 'Bolt grade.', type: 'string', enum: ['A325', 'A490'] }, mitres: { description: 'true also adds mitres where members meet end to end at an angle (default false).', type: 'boolean' } }),
      preview: (a) => { const p = autopilotPropose(M().state, a); return { wouldAdd: p.counts, left: p.left.map((l) => ({ about: l.about[0].id, reason: l.code })) }; },
      run: (a) => {
        const p = autopilotPropose(M().state, a);
        if (!p.items.length) throw new Error('No open joint to connect' + (p.left.length ? ' (' + p.left.length + ' left for the person: see problems_list)' : '') + '.');
        const ids = step('connection autopilot', (tx) => autopilotApply(tx, p));
        return { added: ids, counts: p.counts, left: p.left.map((l) => ({ about: l.about[0].id, reason: l.code })), startingValues: true };
      },
    },
    {
      name: 'undo', group: 'edit', title: 'Undo',
      description: 'Undo the assistant\'s last steps (labelled "Assistant: …"); steps the person made are only undone with any: true.',
      inputSchema: obj({ steps: { description: 'How many steps to undo (default 1).', type: 'integer', minimum: 1, maximum: 50 }, any: { description: 'true also undoes steps the person made, not only the assistant\'s (default false).', type: 'boolean' } }),
      preview: (a) => ({ wouldUndo: peekUndo(M().undoStack, a.steps || 1, a.any) }),
      run: (a) => {
        const m = M(), undone = [];
        for (let i = 0; i < (a.steps || 1); i++) {
          const top = m.undoStack[m.undoStack.length - 1];
          if (!top) break;
          if (!a.any && !String(top.label).startsWith('Assistant: ')) { if (!undone.length) throw new Error('The last step is the person\'s ("' + top.label + '"): pass any: true to undo it.'); break; }
          undone.push(m.undo());
        }
        return { undone };
      },
    },
    {
      name: 'model_save', group: 'save', title: 'Save the model',
      description: 'DetailCraft\'s own Save: the model as .detailcraft.json (desktop: in place; browser: downloaded).',
      run: async () => { await app.save(); return { saved: M().state.name, unsaved: M().dirty }; },
    },
    {
      name: 'model_export', group: 'export', title: 'Export',
      description: 'One of DetailCraft\'s own exports, downloaded as the Output buttons do: ifc (IFC4), nc (DSTV NC files, zipped), bom (CSV), bending (bending schedule CSV), kiss (KISS file), cutlist (cut list CSV).',
      inputSchema: obj({ format: { description: 'ifc, nc, bom, bending, kiss or cutlist.', type: 'string', enum: ['ifc', 'nc', 'bom', 'bending', 'kiss', 'cutlist'] } }, ['format']),
      run: async (a) => { await app.exports[a.format](); return { exported: a.format }; },
    },
    {
      name: 'usd_export', group: 'export', title: 'Export USD',
      description: 'The steel model as OpenUSD (parts and assemblies as prims, with marks, profiles and weights), .usda (default), .usdc or .usdz, as Output › USD writes it. With a path (Studio) it is written there, else it downloads.',
      inputSchema: obj({ format: { description: 'usda (text, default), usdc (binary) or usdz (packed with its textures).', type: 'string', enum: ['usda', 'usdc', 'usdz'] }, path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads.' }, overwrite: { description: 'true replaces an existing file at the path (default false: an existing file is never overwritten).', type: 'boolean', default: false } }),
      run: async (a) => {
        const F = getHost({ app: 'detailcraft' }).control.files;
        const fmt = a.format || (a.path && /\.(usd[acz])$/i.exec(a.path)?.[1].toLowerCase()) || 'usda';
        if (a.path && !new RegExp('\\.' + fmt + '$', 'i').test(a.path)) throw new Error('A .' + fmt + ' file ends in .' + fmt + '.');
        const r = await app.usd(fmt);
        const bytes = typeof r.data === 'string' ? new TextEncoder().encode(r.data) : r.data;
        if (a.path) { if (!F.available) throw new Error('File paths work only in CadCraft Studio (the desktop app).'); return { format: fmt, bytes: bytes.length, report: r.report, path: await F.write(a.path, bytes, { overwrite: a.overwrite }) }; }
        app.download(r.name + '.' + fmt, new Blob([bytes], { type: r.type }), r.type);
        return { format: fmt, bytes: bytes.length, report: r.report, downloaded: r.name + '.' + fmt };
      },
    },
  ];
}

/** Registers the tools on this window's host.control (the page calls it once). */
export function installAgents(app) {
  const C = getHost({ app: 'detailcraft' }).control;
  C.configure({ title: 'DetailCraft', rollback: stackRollback(() => app.model()), busy: () => app.busy?.() || null, info: () => modelSummary(app.model(), app.built(), app.marks()) });
  for (const def of detailTools(app)) C.tool(def);
  // 0.8 P.5: the shell's Problems tools (problems_list / _show / _fix / _accept / _unaccept / _report; spec § 8), once the module is there; DetailCraft's own problems_list keeps its rows for older assistants
  { const reg = () => window.ccProblems?.registerTools?.(C, { skip: ['problems_list'] }); if (window.ccProblems) reg(); else document.addEventListener('cc-problems-ready', reg, { once: true }); }
  return C;
}
