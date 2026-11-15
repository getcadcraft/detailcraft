---
title: Check the IFC export against a client's IDS
summary: Load the .ids file you were given and see every exported part that does not meet it in Problems, before you send the IFC.
section: tasks
order: 45
keywords: ids, information delivery specification, buildingsmart, requirements, delivery, check, validation, qa, ifc export, property, material, procurement
---

## What you'll do

An IDS (Information Delivery Specification, a buildingSMART standard) is the list of what an IFC must contain. DetailCraft checks the IFC it would export (the same file {{ui:IFC}} writes) against the IDS you were given, and lists every part that falls short.

## Steps

1. Open or draw your model.
2. Click {{ui:Check against IDS…}} in the {{ui:Output}} group of the toolbar.
3. Click {{ui:Load an .ids file…}} and pick the file. Nothing is uploaded.
4. Read the result: each specification with {{ui:Pass}} or {{ui:Fail}} and how many elements it applies to.
5. Open Problems ({{key:Ctrl+Shift+M}}) and click a failure: the member, connection, stair or footing it came from is selected and the view zooms to it.

## What you should see

- One warning per exported element and requirement it misses, with the specification's name, what the IDS asks for and what the export has.
- The check report (in Problems) starts with the IDS: its title, version, author and each specification's counts.

## Good to know

- The IDS is saved in the model file, so it is checked again when you open the model. Loading or forgetting it is one step you can undo.
- Each change is checked again a moment later; on a large model the check waits a little longer between runs.
- The export's GlobalIds come from the model name and the part numbers inside DetailCraft, so they stay the same from one check to the next. Renaming the model gives every element new GlobalIds.
- Numbers are compared in SI units (the export is in millimetres; lengths are converted to metres first).

- Patterns in the IDS are read as the whole value. A `^` at the start and a `$` at the end are taken as "the whole value" too, as most IDS files mean them.

## Next

- [Export IFC](topic:ifc-export)
