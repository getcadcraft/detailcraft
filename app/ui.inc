<?php
// SPDX-License-Identifier: Apache-2.0
/**
 * DetailCraft UI (rendered inside app-shell.inc; $app, $__area, $__build and $__manifest are set).
 * Server-rendered: toolbar, panels, the 3D stage, report tabs and the status bar. detailcraft.js runs
 * the model. Models open and save on this computer; nothing here posts anywhere.
 *
 *   top     toolbar (role=toolbar, a direct child of <main>, so screen modes can hide it): File · Place · Connect ·
 *           Edit (Undo, Redo, Copy, Paste + the "More" menu: cut, copy, paste, paste in place, duplicate, delete,
 *           select all, select none — each with its key) · Output
 *   left    model name · grids · levels · phases (show/hide, names, current phase, marks per phase) · custom profiles · part marks
 *   stage   three.js view (3D / plan / elevation) · view bar · hints
 *   right   tool options or the selection's properties
 *   bottom  reports: problems · bill of materials · bending schedule
 *   dialogs shop drawing (preview + PDF; sheet size) · drawings (GA + assembly sheets, preview; sheet size; PDF, DWG or DXF) ·
 *           IFC import report
 */
// more actions in a group's "More" menu, so the toolbar stays one row at 1440 px: group id → [summary title, items]
$__groupMore = [
    'connect' => [Lang::t('tool.conn.more.title'), [
        ['sheartabs', Lang::t('page.tool.sheartabs'), Lang::t('page.tool.sheartabs.title')],
        ['splice', Lang::t('page.tool.splice'), Lang::t('page.tool.splice.title')],
        ['gusset', Lang::t('page.tool.gusset'), Lang::t('page.tool.gusset.title')],
        ['similar', Lang::t('page.tool.similar'), Lang::t('page.tool.similar.title')],
    ]],
    'output' => [Lang::t('tool.out.more.title'), [
        ['bending', Lang::t('page.tool.bending'), Lang::t('page.tool.bending.title')],
        ['report', Lang::t('tool.report'), Lang::t('tool.report.title')],
        ['kiss', Lang::t('tool.kiss'), Lang::t('tool.kiss.title')],
    ]],
];
// groups keyed by a stable id; the label is the language file's
$__tools = [
    'file' => [Lang::t('page.group.file'), [
        ['new', 'file-earmark-plus', Lang::t('page.tool.new'), Lang::t('page.tool.new.title')],
        ['open', 'folder2-open', Lang::t('page.tool.open'), Lang::t('page.tool.open.title', ['key' => 'Ctrl+O'])],
        ['import', 'box-arrow-in-down', Lang::t('page.tool.import'), Lang::t('page.tool.import.title')],
        ['save', 'download', Lang::t('page.tool.save'), Lang::t('page.tool.save.title', ['key' => 'Ctrl+S'])],
        ['sample', 'buildings', Lang::t('page.tool.sample'), Lang::t('page.tool.sample.title')],
    ]],
    'place' => [Lang::t('page.group.place'), [
        ['tool:select', 'cursor', Lang::t('page.tool.select'), Lang::t('page.tool.select.title', ['key' => 'V'])],
        ['tool:beam', 'dash-lg', Lang::t('page.tool.beam'), Lang::t('page.tool.beam.title', ['key' => 'B'])],
        ['tool:column', 'grip-vertical', Lang::t('page.tool.column'), Lang::t('page.tool.column.title', ['key' => 'C'])],
        ['tool:brace', 'slash-lg', Lang::t('page.tool.brace'), Lang::t('page.tool.brace.title', ['key' => 'R'])],
        ['tool:plate', 'square', Lang::t('page.tool.plate'), Lang::t('page.tool.plate.title', ['key' => 'P'])],
        ['tool:footing', 'bricks', Lang::t('page.tool.footing'), Lang::t('page.tool.footing.title', ['key' => 'F'])],
        ['tool:stair', 'bar-chart-steps', Lang::t('page.tool.stair'), Lang::t('page.tool.stair.title', ['key' => 'S'])],
    ]],
    'connect' => [Lang::t('page.group.connect'), [
        ['endplates', 'layout-sidebar-inset', Lang::t('page.tool.endplates'), Lang::t('page.tool.endplates.title')],
        ['baseplate', 'border-bottom', Lang::t('page.tool.baseplate'), Lang::t('page.tool.baseplate.title')],
    ]],
    'edit' => [Lang::t('page.group.edit'), [
        ['undo', 'arrow-counterclockwise', Lang::t('page.tool.undo'), Lang::t('page.tool.undo.title', ['key' => 'Ctrl+Z'])],
        ['redo', 'arrow-clockwise', Lang::t('page.tool.redo'), Lang::t('page.tool.redo.title', ['key' => 'Ctrl+Y'])],
        ['copy', 'copy', Lang::t('page.tool.copy'), Lang::t('page.tool.copy.title', ['key' => 'Ctrl+C'])],
        ['paste', 'clipboard-plus', Lang::t('page.tool.paste'), Lang::t('page.tool.paste.title', ['key' => 'Ctrl+V'])],
    ]],
    'output' => [Lang::t('page.group.output'), [
        ['ifc', 'box', Lang::t('page.tool.ifc'), Lang::t('page.tool.ifc.title')],
        ['usd', 'box-arrow-up-right', Lang::t('usd.export.button'), Lang::t('usd.export.title')],   // 0.7 XF.8 (session usd)
        ['nc', 'gear-wide-connected', Lang::t('page.tool.nc'), Lang::t('page.tool.nc.title')],
        ['bom', 'list-columns', Lang::t('page.tool.bom'), Lang::t('page.tool.bom.title')],
        ['shop', 'file-earmark-ruled', Lang::t('page.tool.shop'), Lang::t('page.tool.shop.title')],
        ['drawings', 'files', Lang::t('page.tool.drawings'), Lang::t('page.tool.drawings.title')],
    ]],
];
?>
<main id="main" class="dc" data-detailcraft>
  <h1 class="visually-hidden"><?= Lang::e('page.h1', ['app' => $app['name']]) ?></h1>

  <div class="dc-tools" role="toolbar" aria-label="<?= Lang::e('page.tools.label') ?>">
    <?php foreach ($__tools as $__group => [$__groupLabel, $__items]): ?>
      <div class="dc-tool-group" role="group" aria-label="<?= e($__groupLabel) ?>">
        <span class="dc-tool-label" aria-hidden="true"><?= e($__groupLabel) ?></span>
        <div class="dc-tool-row">
          <?php foreach ($__items as [$__act, $__icon, $__label, $__title]): ?>
            <button type="button" class="dc-tool" data-act="<?= e($__act) ?>" title="<?= e($__title) ?>"<?= str_starts_with($__act, 'tool:') ? ' aria-pressed="false"' : '' ?>>
              <i class="bi bi-<?= e($__icon) ?>" aria-hidden="true"></i><span><?= e($__label) ?></span>
            </button>
          <?php endforeach; ?>
          <?php if ($__group === 'edit' /* i18n-ignore (a key, not shown) */): ?>
            <details class="dc-menu" data-edit-menu>
              <summary class="dc-tool" title="<?= Lang::e('page.edit.more.title') ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('page.edit.more') ?></span></summary>
              <div class="dc-menu-list" role="menu">
                <button type="button" role="menuitem" data-act="cut"><?= Lang::e('page.edit.cut') ?> <kbd>Ctrl+X</kbd></button>
                <button type="button" role="menuitem" data-act="copy"><?= Lang::e('page.edit.copy') ?> <kbd>Ctrl+C</kbd></button>
                <button type="button" role="menuitem" data-act="paste"><?= Lang::e('page.edit.paste') ?> <kbd>Ctrl+V</kbd></button>
                <button type="button" role="menuitem" data-act="paste-in-place"><?= Lang::e('page.edit.paste-in-place') ?> <kbd>Ctrl+Shift+V</kbd></button>
                <button type="button" role="menuitem" data-act="duplicate"><?= Lang::e('page.edit.duplicate') ?> <kbd>Ctrl+D</kbd></button>
                <button type="button" role="menuitem" data-act="move"><?= Lang::e('page.edit.move') ?> <kbd>M</kbd></button>
                <button type="button" role="menuitem" data-act="delete"><?= Lang::e('page.edit.delete') ?> <kbd>Delete</kbd></button>
                <hr>
                <button type="button" role="menuitem" data-act="select-all"><?= Lang::e('page.edit.select-all') ?> <kbd>Ctrl+A</kbd></button>
                <button type="button" role="menuitem" data-act="select-none"><?= Lang::e('page.edit.select-none') ?> <kbd>Esc</kbd></button>
              </div>
            </details>
          <?php endif; ?>
          <?php if (isset($__groupMore[$__group])): ?>
            <details class="dc-menu" data-<?= e($__group) ?>-menu>
              <summary class="dc-tool" title="<?= e($__groupMore[$__group][0]) ?>"><i class="bi bi-three-dots" aria-hidden="true"></i><span><?= Lang::e('tool.out.more') ?></span></summary>
              <div class="dc-menu-list" role="menu">
                <?php foreach ($__groupMore[$__group][1] as [$__act, $__label, $__title]): ?>
                  <button type="button" role="menuitem" data-act="<?= e($__act) ?>" title="<?= e($__title) ?>"><?= e($__label) ?></button>
                <?php endforeach; ?>
              </div>
            </details>
          <?php endif; ?>
        </div>
      </div>
    <?php endforeach; ?>
    <input type="file" class="visually-hidden" accept=".json,.ifc,application/json" tabindex="-1" aria-hidden="true" data-file>
  </div>

  <aside class="dc-panel dc-left" aria-label="<?= Lang::e('page.left.model') ?>">
    <section class="dc-sec">
      <h2 class="dc-h"><?= Lang::e('page.left.model') ?></h2>
      <div class="dc-props">
        <label for="dc-name"><?= Lang::e('page.left.name') ?></label>
        <input type="text" id="dc-name" class="dc-input" maxlength="80" autocomplete="off" data-model-name>
      </div>
      <p class="dc-note"><?= Lang::e('page.left.model.note') ?></p>
    </section>
    <details class="dc-sec dc-fold" open>
      <summary class="dc-h"><?= Lang::e('page.left.grids.title') ?></summary>
      <form class="dc-props" data-grid-form>
        <label for="dc-gx"><?= Lang::e('page.left.grids.numbered') ?></label><input type="text" id="dc-gx" class="dc-input" data-gx autocomplete="off" spellcheck="false">
        <label for="dc-gxs"><?= Lang::e('page.left.grids.spacings') ?></label><input type="text" id="dc-gxs" class="dc-input" data-gxs autocomplete="off" spellcheck="false">
        <label for="dc-gy"><?= Lang::e('page.left.grids.lettered') ?></label><input type="text" id="dc-gy" class="dc-input" data-gy autocomplete="off" spellcheck="false">
        <label for="dc-gys"><?= Lang::e('page.left.grids.spacings') ?></label><input type="text" id="dc-gys" class="dc-input" data-gys autocomplete="off" spellcheck="false">
        <div class="span dc-row"><button type="submit" class="btn-line btn-sm-dc"><?= Lang::e('page.left.grids.apply') ?></button></div>
      </form>
      <p class="dc-note"><?= Lang::e('page.left.grids.note.a') ?> <kbd>1 2 3</kbd> <?= Lang::e('page.left.grids.note.and') ?> <kbd>6000 6000</kbd>. <?= Lang::e('page.left.grids.note.b') ?></p>
    </details>
    <details class="dc-sec dc-fold" open>
      <summary class="dc-h"><?= Lang::e('page.left.levels.title') ?></summary>
      <form data-level-form>
        <ol class="dc-levels" data-levels></ol>
        <div class="dc-row">
          <button type="button" class="dc-linkbtn" data-level-add><i class="bi bi-plus-lg" aria-hidden="true"></i> <?= Lang::e('page.left.levels.add') ?></button>
          <button type="submit" class="btn-line btn-sm-dc"><?= Lang::e('page.left.levels.apply') ?></button>
        </div>
      </form>
    </details>
    <details class="dc-sec dc-fold" open data-phase-sec>
      <summary class="dc-h"><?= Lang::e('phase.title') ?></summary>
      <div data-phases></div>
    </details>
    <details class="dc-sec dc-fold">
      <summary class="dc-h"><?= Lang::e('page.left.profile.title') ?></summary>
      <form class="dc-props" data-profile-form>
        <label for="dc-pname"><?= Lang::e('page.left.profile.name') ?></label><input type="text" id="dc-pname" class="dc-input" maxlength="40" data-pname autocomplete="off">
        <label for="dc-pkind"><?= Lang::e('page.left.profile.shape') ?></label>
        <select id="dc-pkind" class="dc-select" data-pkind>
          <option value="I"><?= Lang::e('page.left.profile.shape.i') ?></option><option value="C"><?= Lang::e('page.left.profile.shape.c') ?></option><option value="L"><?= Lang::e('page.left.profile.shape.l') ?></option>
          <option value="RHS"><?= Lang::e('page.left.profile.shape.rhs') ?></option><option value="CHS"><?= Lang::e('page.left.profile.shape.chs') ?></option><option value="FLAT"><?= Lang::e('page.left.profile.shape.flat') ?></option>
        </select>
        <div class="span dc-props" data-pdims></div>
        <div class="span dc-row"><button type="submit" class="btn-line btn-sm-dc"><?= Lang::e('page.left.profile.add') ?></button></div>
      </form>
      <ul class="dc-list" data-custom-list></ul>
    </details>
    <section class="dc-sec">
      <h2 class="dc-h"><?= Lang::e('page.left.marks.title') ?></h2>
      <ul class="dc-marks" data-marks></ul>
    </section>
  </aside>

  <section class="dc-stage" aria-label="<?= Lang::e('page.stage.label') ?>" data-stage>
    <div class="dc-viewbar" role="group" aria-label="<?= Lang::e('page.view.label') ?>">
      <div class="dc-seg" role="radiogroup" aria-label="<?= Lang::e('page.view.label') ?>">
        <button type="button" role="radio" aria-checked="true" data-view="3d"><?= Lang::e('page.view.3d') ?></button>
        <button type="button" role="radio" aria-checked="false" data-view="plan"><?= Lang::e('page.view.plan') ?></button>
        <button type="button" role="radio" aria-checked="false" data-view="elevation"><?= Lang::e('page.view.elevation') ?></button>
      </div>
      <label class="visually-hidden" for="dc-vlevel"><?= Lang::e('page.view.level') ?></label>
      <select id="dc-vlevel" class="dc-select dc-vsel" data-vlevel hidden></select>
      <label class="visually-hidden" for="dc-vgrid"><?= Lang::e('page.view.grid') ?></label>
      <select id="dc-vgrid" class="dc-select dc-vsel" data-vgrid hidden></select>
      <button type="button" class="dc-vbtn" data-act="fit" title="<?= Lang::e('page.view.fit.title') ?>"><i class="bi bi-arrows-fullscreen" aria-hidden="true"></i><span class="visually-hidden"><?= Lang::e('page.view.fit') ?></span></button>
    </div>
    <canvas class="dc-canvas" data-canvas aria-label="<?= Lang::e('page.stage.canvas') ?>"></canvas>
    <div class="dc-hint" data-hint>
      <p class="dc-hint-h"><?= Lang::e('page.hint.start') ?></p>
      <ul>
        <li><?= Lang::e('page.hint.grids.a') ?> <strong><?= Lang::e('page.tool.beam') ?></strong>, <strong><?= Lang::e('page.tool.column') ?></strong> <?= Lang::e('page.hint.or') ?> <strong><?= Lang::e('page.tool.brace') ?></strong> <?= Lang::e('page.hint.grids.b') ?> <strong><?= Lang::e('page.view.plan') ?></strong> <?= Lang::e('page.hint.and') ?> <strong><?= Lang::e('page.view.elevation') ?></strong> <?= Lang::e('page.hint.grids.c') ?></li>
        <li><?= Lang::e('page.hint.conn.a') ?> <strong><?= Lang::e('page.tool.endplates') ?></strong>; <?= Lang::e('page.hint.conn.b') ?> <strong><?= Lang::e('page.tool.baseplate') ?></strong>; <strong><?= Lang::e('page.tool.similar') ?></strong> <?= Lang::e('page.hint.conn.c') ?></li>
        <li><strong><?= Lang::e('page.tool.footing') ?></strong> <?= Lang::e('page.hint.footing') ?></li>
        <li><?= Lang::e('page.hint.sample.a') ?> <strong><?= Lang::e('page.tool.sample') ?></strong> <?= Lang::e('page.hint.sample.b') ?></li>
      </ul>
      <div data-recent-files data-max="6"></div>
    </div>
    <div class="dc-drop" data-drop hidden><span><i class="bi bi-box-arrow-in-down-right" aria-hidden="true"></i> <?= Lang::e('page.stage.drop') ?></span></div>
    <p class="dc-nogl" data-nogl hidden><?= Lang::e('page.stage.nogl') ?></p>
  </section>

  <aside class="dc-panel dc-right" aria-label="<?= Lang::e('page.right.props') ?>">
    <section class="dc-sec">
      <h2 class="dc-h" data-props-h><?= Lang::e('page.right.props') ?></h2>
      <div data-props></div>
    </section>
  </aside>

  <section class="dc-reports" aria-label="<?= Lang::e('page.rep.label') ?>">
    <div class="dc-tabs" role="tablist" aria-label="<?= Lang::e('page.rep.label') ?>">
      <button type="button" role="tab" class="dc-tab" aria-selected="true" aria-controls="dc-rep" data-tab="problems"><?= Lang::e('page.rep.problems') ?> <span data-count-problems></span></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="bom" tabindex="-1"><?= Lang::e('page.rep.bom') ?></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="bending" tabindex="-1"><?= Lang::e('page.rep.bending') ?></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="phases" tabindex="-1"><?= Lang::e('rep.tab') ?></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="nest" tabindex="-1"><?= Lang::e('nest.tab') ?></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="clashes" tabindex="-1"><?= Lang::e('clash.tab') ?> <span data-count-clashes></span></button>
      <button type="button" role="tab" class="dc-tab" aria-selected="false" aria-controls="dc-rep" data-tab="analysis" tabindex="-1"><?= Lang::e('frame.ui.tab') ?></button>
    </div>
    <div class="dc-rep" id="dc-rep" role="tabpanel" tabindex="0" data-report></div>
  </section>

  <dialog class="dc-dialog" data-shop aria-labelledby="dc-shop-h">
    <div class="dc-dlg">
      <div class="dc-dlg-head">
        <h2 class="dc-h" id="dc-shop-h" data-shop-h><?= Lang::e('page.tool.shop') ?></h2>
        <label class="visually-hidden" for="dc-shop-paper"><?= Lang::e('dwg.paper.label') ?></label>
        <select id="dc-shop-paper" class="dc-select dc-paper-sel" data-shop-paper title="<?= Lang::e('dwg.paper.title') ?>"></select>
        <button type="button" class="dc-x" data-shop-close aria-label="<?= Lang::e('page.dlg.close') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div class="dc-shop-body"><canvas data-shop-canvas aria-label="<?= Lang::e('page.dlg.shop.preview') ?>"></canvas></div>
      <div class="dc-dlg-foot">
        <span class="dc-note" data-shop-note></span>
        <button type="button" class="btn-plot btn-sm-dc" data-shop-pdf><i class="bi bi-download" aria-hidden="true"></i> <?= Lang::e('page.dlg.shop.pdf') ?></button>
      </div>
    </div>
  </dialog>

  <dialog class="dc-dialog" data-dwg aria-labelledby="dc-dwg-h">
    <div class="dc-dlg">
      <div class="dc-dlg-head">
        <h2 class="dc-h" id="dc-dwg-h"><?= Lang::e('page.dlg.drawings.title') ?></h2>
        <label class="visually-hidden" for="dc-dwg-sheet"><?= Lang::e('page.dlg.drawings.sheet') ?></label>
        <select id="dc-dwg-sheet" class="dc-select dc-dwg-sel" data-dwg-sheet></select>
        <label class="visually-hidden" for="dc-dwg-paper"><?= Lang::e('dwg.paper.label') ?></label>
        <select id="dc-dwg-paper" class="dc-select dc-paper-sel" data-dwg-paper title="<?= Lang::e('dwg.paper.title') ?>"></select>
        <button type="button" class="dc-x" data-dwg-close aria-label="<?= Lang::e('page.dlg.close') ?>"><i class="bi bi-x-lg" aria-hidden="true"></i></button>
      </div>
      <div class="dc-issue" data-issue>
        <span class="dc-issue-st" data-issue-status></span>
        <label class="visually-hidden" for="dc-issue-note"><?= Lang::e('issue.note.label') ?></label>
        <input type="text" id="dc-issue-note" class="dc-input" maxlength="60" data-issue-note placeholder="<?= Lang::e('issue.note.placeholder') ?>" value="<?= Lang::e('issue.note.default') ?>">
        <button type="button" class="btn-line btn-sm-dc" data-issue-one><?= Lang::e('issue.one') ?></button>
        <button type="button" class="btn-line btn-sm-dc" data-issue-all></button>
      </div>
      <div class="dc-shop-body"><canvas data-dwg-canvas aria-label="<?= Lang::e('page.dlg.drawings.preview') ?>"></canvas></div>
      <div class="dc-dlg-foot">
        <span class="dc-note" data-dwg-note></span>
        <label class="visually-hidden" for="dc-dwg-format"><?= Lang::e('dwg.format.label') ?></label>
        <select id="dc-dwg-format" class="dc-select dc-paper-sel" data-dwg-format title="<?= Lang::e('dwg.format.title') ?>">
          <option value="pdf"><?= 'PDF' /* i18n-ignore (a format's name) */ ?></option>
          <option value="dwg-AC1032"><?= Lang::e('dwg.format.dwg', ['year' => '2018']) ?></option>
          <option value="dwg-AC1027"><?= Lang::e('dwg.format.dwg', ['year' => '2013']) ?></option>
          <option value="dwg-AC1024"><?= Lang::e('dwg.format.dwg', ['year' => '2010']) ?></option>
          <option value="dwg-AC1021"><?= Lang::e('dwg.format.dwg', ['year' => '2007']) ?></option>
          <option value="dwg-AC1018"><?= Lang::e('dwg.format.dwg', ['year' => '2004']) ?></option>
          <option value="dwg-AC1015"><?= Lang::e('dwg.format.dwg', ['year' => '2000']) ?></option>
          <option value="dxf"><?= Lang::e('dwg.format.dxf') ?></option>
        </select>
        <button type="button" class="btn-line btn-sm-dc" data-dwg-one><i class="bi bi-download" aria-hidden="true"></i> <span data-dwg-one-label><?= Lang::e('page.dlg.drawings.one') ?></span></button>
        <button type="button" class="btn-plot btn-sm-dc" data-dwg-all><i class="bi bi-download" aria-hidden="true"></i> <span data-dwg-all-label><?= Lang::e('page.dlg.drawings.all') ?></span></button>
      </div>
    </div>
  </dialog>

  <footer class="dc-status" aria-label="<?= Lang::e('page.status.label') ?>">
    <output class="dc-node" data-node></output>
    <span class="dc-status-msg" data-status role="status" aria-live="polite"></span>
    <span class="dc-counts" data-counts></span>
  </footer>
</main>
