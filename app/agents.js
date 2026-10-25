/* SPDX-License-Identifier: Apache-2.0 */
/* i18n-ignore-file — tool names, descriptions and results are read by the assistant program, not shown to the person (AGENTS-SPEC §5). */
/**
 * agents.js — DetailCraft for AI assistants and scripts (0.4 part 2 X.12; docs/AGENTS-SPEC.md §5.2, §6.3). The apps contain no
 * AI: this gives the person's own assistant tools on the open model; Settings › Assistants (host.js) decides which groups.
 *
 *   detailTools(app) → [tool definitions] (DOM-free; bin/test-detailcraft.mjs runs them through host.js's dispatcher)
 *   installAgents(app) → registers them on host.control and configures it (the page calls it once)
 *
 * app = { model() (the open Model), built(), marks(), selected() → refs, select(refs) (the page shows it), busy() → null |
 *         what the person is in the middle of, save(), exports: { ifc, nc, bom, bending, kiss, cutlist } }
 * Units: millimetres; points [x, y, z] in the model's coordinates (z up).
 *
 * Tools:
 *   app_info         read    the window: model name, unsaved?, counts, steel and rebar weight, problems, allowed groups
 *   model_describe   read    grids, levels, phases, members by type and profile, connections by type, footings, stairs
 *   parts_list       read    part marks (type, profile, material, length, count, weights, phase), filtered and paged
 *   problems_list    read    what the Problems tab lists, each with what it is about
 *   clash_check      read    the clash check (as Clashes › Check now), tolerance and phases optional
 *   selection_get    read    what is selected, described
 *   selection_set    edit    select members, connections, footings or stairs (by id or part mark); changes no model
 *   member_add       edit    a beam, column, brace or plate between two points (one undo step "Assistant: add <type>")
 *   connection_add   edit    end plates, shear tabs, a base plate, splices or gussets where the given members meet
 *                            (as the Connect buttons do; one undo step)
 *   undo             edit    undoes the assistant's last steps (others' only with any: true)
 *   model_save       save    the app's own Save
 *   model_export     export  IFC, NC files, BOM, bending schedule, KISS or cut list: the app's own download
 *   usd_export       export  the steel model as OpenUSD (.usda, .usdc, .usdz), to a path in Studio or a download (0.7 AS.6)
 * (app.usd(format) → { data, report, name, type } and app.download(name, data, type) are the page's)
 */
import { getHost } from './host.js';
import { findJoints, freeSplices, freeBraceEnds, isBeamEnd } from './connections.js';
import { clashCheck } from './clash.js';

const LIMIT = 1000;
const r1 = (v) => (Number.isFinite(v) ? Math.round(v * 10) / 10 : null);
const obj = (properties, required = []) => ({ type: 'object', properties, required, additionalProperties: false });
const PT = { type: 'array', items: { type: 'number' }, minItems: 3, maxItems: 3 };
const REF = obj({ kind: { type: 'string', enum: ['member', 'conn', 'footing', 'stair'] }, id: { type: 'string' } }, ['kind', 'id']);
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
      name: 'model_describe', group: 'read', title: 'Describe the model',
      description: 'The open DetailCraft model in millimetres: grids (numbered lines at x, lettered at y), levels (z), phases, members by type and profile, connections by type, footings and stairs.',
      run: () => describeModel(M()),
    },
    {
      name: 'parts_list', group: 'read', title: 'List part marks',
      description: 'The bill of materials by part mark: type, profile, material, cut length (mm), count, weight each and in all (kg, gross), phase, assembly marks and the part ids. Filters: type, profile, mark, phase.',
      inputSchema: obj({ type: { type: 'string', enum: ['beam', 'column', 'brace', 'plate', 'stringer'] }, profile: { type: 'string' }, mark: { type: 'string' }, phase: { type: 'integer', minimum: 1 },
        offset: { type: 'integer', minimum: 0 }, limit: { type: 'integer', minimum: 1, maximum: LIMIT } }),
      run: (a) => partsRows(app.built(), app.marks(), a),
    },
    {
      name: 'problems_list', group: 'read', title: 'List problems',
      description: 'What the Problems tab lists: connections that cannot be built or need a look, holes off their parts, footings without room for their bars, stair checks. Each with the member, connection, footing or stair it is about.',
      run: () => ({ problems: app.built().problems.map((p) => ({ text: p.text, hard: !!p.hard, about: p.ref ? { kind: /^m/.test(p.ref) ? 'member' : /^j/.test(p.ref) ? 'conn' : /^f/.test(p.ref) ? 'footing' : /^s/.test(p.ref) ? 'stair' : 'other', id: p.ref } : null })) }),
    },
    {
      name: 'clash_check', group: 'read', title: 'Check clashes',
      description: 'The clash check: steel parts and footings that reach into each other by more than the tolerance (mm), leaving out what a connection means to meet. Optionally only some phases.',
      inputSchema: obj({ tolerance: { type: 'number', minimum: 0, maximum: 50 }, phases: { type: 'array', items: { type: 'integer', minimum: 1 }, maxItems: 999 } }),
      run: (a) => {
        const r = clashCheck(M().state, app.built(), { tol: a.tolerance ?? 1, phases: a.phases ? new Set(a.phases) : null });
        const mk = app.marks();
        return { checked: r.checked, clashes: r.clashes.slice(0, LIMIT).map((c) => ({ a: { ...c.a, part: mk.partMark.get(c.aPart) || c.aPart }, b: { ...c.b, part: mk.partMark.get(c.bPart) || c.bPart }, depth: c.depth, at: c.at, kind: c.kind })), total: r.clashes.length };
      },
    },
    {
      name: 'selection_get', group: 'read', title: 'What is selected',
      description: 'What the person has selected in DetailCraft, each described (member: type, profile, mark, ends; connection: type and members; footing; stair).',
      run: () => ({ selected: app.selected().slice(0, LIMIT).filter(refOk).map(describeRef) }),
    },
    {
      name: 'selection_set', group: 'edit', title: 'Select',
      description: 'Select members, connections, footings or stairs to show them to the person: by refs ({kind, id}) or by part marks (every member with that mark). Changes nothing in the model.',
      inputSchema: obj({ refs: { type: 'array', items: REF, maxItems: 100000 }, marks: { type: 'array', items: { type: 'string' }, maxItems: 1000 }, mode: { type: 'string', enum: ['replace', 'add', 'remove'] } }),
      run: (a) => {
        let refs = [];
        if (a.refs) { const bad = a.refs.filter((r) => !refOk(r)); if (bad.length) throw new Error('Unknown: ' + bad.slice(0, 10).map((r) => r.kind + ' ' + r.id).join(', ') + '. Nothing selected.'); refs = a.refs; }
        if (a.marks) for (const mk of a.marks) refs.push(...byMark(mk));
        if (!a.refs && !a.marks) throw new Error('Say what to select: refs or marks.');
        const key = (r) => r.kind + ':' + r.id, cur = app.selected();
        const next = a.mode === 'add' ? [...cur, ...refs] : a.mode === 'remove' ? cur.filter((r) => !refs.some((q) => key(q) === key(r))) : refs;
        return { selected: app.select(next) };
      },
    },
    {
      name: 'member_add', group: 'edit', title: 'Add a member',
      description: 'Add a beam, column, brace or plate between two points (mm). Profile by name (catalog, e.g. W16x26, IPE300, HSS4x4x1/4, or PL20x200 for a plate); position top|middle|bottom puts the reference line on the top of steel, the middle or the bottom; rotation in degrees about its axis. One undo step.',
      inputSchema: obj({ type: { type: 'string', enum: ['beam', 'column', 'brace', 'plate'] }, start: PT, end: PT, profile: { type: 'string' }, material: { type: 'string' },
        position: { type: 'string', enum: ['top', 'middle', 'bottom'] }, rotation: { type: 'number' }, name: { type: 'string', maxLength: 40 }, phase: { type: 'integer', minimum: 1 } }, ['type', 'start', 'end']),
      run: (a) => {
        const id = step('add ' + a.type, (tx) => tx.addMember({ ...a }));
        return { id, mark: app.marks().partMark.get(id) || null };
      },
    },
    {
      name: 'connection_add', group: 'edit', title: 'Add connections',
      description: 'Connect where the given members meet, as the Connect buttons do: endplate or sheartab (at every free end of the beams that meets a column), baseplate (under each column), splice (where the pieces meet another of their profile end to end), gusset (at every brace end on a column or beam). Default parameters; one undo step. Returns the new connection ids and any problems they report.',
      inputSchema: obj({ type: { type: 'string', enum: ['endplate', 'sheartab', 'baseplate', 'splice', 'gusset'] }, members: { type: 'array', items: { type: 'string' }, minItems: 1, maxItems: 1000 } }, ['type', 'members']),
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
        else todo = freeBraceEnds(s, a.members).map((j) => ({ type: 'gusset', brace: j.brace, end: j.end, support: j.support }));
        if (!todo.length) throw new Error('Nowhere to add a ' + a.type + ' on those members (no free joint of that kind).');
        const ids = step('add ' + a.type + (todo.length > 1 ? 's' : ''), (tx) => todo.map((c) => tx.addConnection(c)));
        const probs = app.built().problems.filter((p) => ids.includes(p.ref)).map((p) => ({ connection: p.ref, text: p.text, hard: !!p.hard }));
        return { added: ids, problems: probs };
      },
    },
    {
      name: 'undo', group: 'edit', title: 'Undo',
      description: 'Undo the assistant\'s last steps (labelled "Assistant: …"); steps the person made are only undone with any: true.',
      inputSchema: obj({ steps: { type: 'integer', minimum: 1, maximum: 50 }, any: { type: 'boolean' } }),
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
      inputSchema: obj({ format: { type: 'string', enum: ['ifc', 'nc', 'bom', 'bending', 'kiss', 'cutlist'] } }, ['format']),
      run: async (a) => { await app.exports[a.format](); return { exported: a.format }; },
    },
    {
      name: 'usd_export', group: 'export', title: 'Export USD',
      description: 'The steel model as OpenUSD (parts and assemblies as prims, with marks, profiles and weights), .usda (default), .usdc or .usdz, as Output › USD writes it. With a path (Studio) it is written there, else it downloads.',
      inputSchema: obj({ format: { type: 'string', enum: ['usda', 'usdc', 'usdz'] }, path: { type: 'string', minLength: 1, maxLength: 4096, description: 'Studio: a file inside the folders the person allowed (Settings › Assistants › Folders); without it the file downloads.' }, overwrite: { type: 'boolean', default: false } }),
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
  C.configure({ title: 'DetailCraft', busy: () => app.busy?.() || null, info: () => modelSummary(app.model(), app.built(), app.marks()) });
  for (const def of detailTools(app)) C.tool(def);
  return C;
}
