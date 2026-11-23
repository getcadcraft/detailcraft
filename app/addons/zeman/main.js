/* SPDX-License-Identifier: Apache-2.0 */
/**
 * main.js — the Zeman export add-on for DetailCraft (roadmap DC.133; add-on API 1.4, `api.files.exporter`). Off until the person switches it on
 * (Settings › Add-ons). It adds one choice to Output › NC files: the selected assemblies (nothing selected = every assembly) as folders named after
 * the assembly mark, each with one WIA XML and the DSTV NC files it names, in one zip. Everything about the format is in lib/zeman.js, which holds
 * only what the one sample file set shows. DetailCraft hands over the model's parts and marks and its own NC writer (export-ui.js exportInput).
 */
import { zemanExport } from './lib/zeman.js';

export function activate(api) {
  const t = api.t;
  api.files.exporter({
    id: 'zeman', label: t('zeman.label'), extension: '.zip', mime: 'application/zip',
    write(doc) {
      if (!doc || !doc.built || !doc.built.parts.length) return { data: null, message: t('zeman.empty') };
      const r = zemanExport(doc);
      const notes = [];
      if (r.skipped.length) notes.push(t('zeman.skipped', { list: r.skipped.map((s) => t('zeman.skipped.item', { mark: s.mark, why: t('zeman.refuse.' + s.code, s.fills) })).join('; ') }));
      if (!r.done.length) return { data: null, message: [t('zeman.none'), ...notes].join(' ') };
      if (r.loose) notes.push(t('zeman.loose', { n: r.loose }));
      if (r.turned) notes.push(t('zeman.turned'));
      if (r.misfit > 0.5) notes.push(t('zeman.misfit', { mm: Number.isFinite(r.misfit) ? r.misfit.toFixed(1) : '?' }));
      const name = (r.done.length === 1 ? r.done[0].folder : doc.name + ' Zeman') + '.zip';
      return { name, data: doc.zip(r.files), message: [t('zeman.done', { marks: r.done.map((d) => d.mark).join(', '), file: name }), ...notes, t('zeman.check')].join(' ') };
    },
  });
}
