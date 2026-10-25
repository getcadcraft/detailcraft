---
title: What's new in 0.7
summary: Design checks of steel I-shapes with load combinations from ASCE 7 or EN 1990 and member checks to AISC 360 or EN 1993-1-1, USD export of the steel model, an assistant tool for USD, a Steel ribbon with large and small buttons, panels that tidy away and dialogs that move.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.7, version, new features, design checks, steel design, utilisation, utilization, load combinations, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, National Annex, roof live, deflection limit, usd, usda, usdc, usdz, openusd, assistant, mcp, steel ribbon, ribbon, split button, units, compact, panels, dialogs, portuguese
---

This is what changed in DetailCraft 0.7, compared with 0.6. The frame analysis of 0.6 now has a second step: checking the steel members to a design code.

## New

### Design checks

- **Load combinations from the code.** In the {{ui:Analysis}} tab, the new {{ui:Design checks}} block has a {{ui:Design code}}: ASCE 7 + AISC 360 (US, LRFD) or EN 1990 + EN 1993-1-1 (Eurocode). Give each load case its kind (dead, live, the new roof live, snow, wind, seismic), press {{ui:Make combinations}}, and DetailCraft writes the code's strength and serviceability combinations of your cases. The combinations you typed yourself stay. See [Make the combinations](topic:design-checks#make-the-combinations).
- **National Annex values.** For the Eurocode the factors start at the recommended values; {{ui:National Annex values}} lets you type your country's, and they are saved in the model. See [Make the combinations](topic:design-checks#make-the-combinations).
- **Check members.** {{ui:Check members}} checks every steel I-shape for tension, compression with buckling, bending with lateral-torsional buckling, shear, bending with axial force and deflection against the {{ui:Deflection limit}} you set. The table shows each member's utilisation, the check that governs and its combination, and the members are coloured on the model (blue, green, ochre, red, grey for not checked). See [Check the members](topic:design-checks#check-the-members).
- **In the report.** {{ui:Report (PDF)}} and {{ui:Report (CSV)}} add the code editions, the settings, utilisation by member and every clause used. See [The report](topic:design-checks#the-report).
- **An aid until an engineer has reviewed it.** It uses first-order forces only. Tubes, angles, channels, welded shapes and slender or class 4 parts read "not checked", with the reason; torsion, connections and concrete are not checked. See [What is not checked](topic:design-checks#what-is-not-checked).

### USD

- **Export the steel model as USD.** {{ui:USD}} in the {{ui:Output}} group writes the model as {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} or {{ui:Package (.usdz)}} for rendering programs and scene assembly: each assembly holds its parts, each part is its section run along its length with copes cut, and each carries its part mark, profile, grade, length and weight. Bolt holes, bolts, welds and footings are not in the USD meshes. See [Export the steel model as USD](topic:usd).

### AI assistants

- **USD for assistants.** Your own assistant, connected through CadCraft Studio, can export the model as USD (`usd_export`), and in Studio write it to a folder you allowed. See [What an assistant can ask for](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Changed

- **The Steel ribbon** has large and small buttons: a large {{ui:Beam}} beside small {{ui:Column}}, {{ui:Brace}} and {{ui:Plate}} on {{ui:Modeling}} › {{ui:Members}}; a large {{ui:End plates}} on {{ui:Detailing}} › {{ui:Connections}}, with {{ui:Splice}} and {{ui:Gusset}} sharing one split button; a large {{ui:Paste}} on {{ui:Edit}} › {{ui:Clipboard}}, with {{ui:Paste in place}} and {{ui:Duplicate}} behind the group's arrow. {{ui:Fabrication}} › {{ui:Exchange}} has {{ui:Export USD}} beside IFC. The other menu styles look as they did. See [Menus, keys and mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analyse the frame](topic:frame-analysis) now points to the design checks, and its combinations can be made by the code.

## In every app

- **Units.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} has one list each for length, area, volume, angle and slope, with the exact sizes the units' definitions give (the US survey foot is its own unit). Switch off the units you never use and they leave the unit lists; star one and new work starts in it. A file always keeps its own unit. DetailCraft's own boxes don't follow the lists yet: its lengths are still typed in millimetres. See [Units, typed values and the unit lists](common:unit-lists).
- **A denser layout and panels that tidy away.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} fits more on the screen (touch screens and phones keep their large buttons). Each side panel has a slim title bar: drag it to dock or float the panel, drop it on another panel's bar to share one frame as tabs, pin it to slide away to the edge, or hide it and bring it back from the edge. See [Arrange the panels](common:arrange-panels#make-the-layout-denser).
- **Dialogs move.** Drag a dialog by its title bar out of the way of the drawing; it comes back where you left it. Double-click the title bar to centre it again. See [Move a dialog](common:arrange-panels#move-a-dialog).
- **Recipes for AI assistants.** Ten worked requests for your own assistant (tidy a drawing, plot a set, check drawings, ask a model questions, total a takeoff, try a part variant…), each with the tools it calls and the permissions it needs, and each replayed by our tests. The apps contain no AI. See [Recipes for AI assistants](common:assistants-recipes).
- **Languages.** **Português (Portugal)** is new in {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. It, **Português (Brasil)**, **Español (México)** and **Bahasa Indonesia** now have every word of the apps, as drafts not yet reviewed by a native speaker. Help topics are in English.
- **CadCraft Studio** says why an update check failed (no file for your system yet, no network, a bad signature) instead of just "Done", and stops bringing back a What's new card you closed until there is a newer release.

## Not in this version yet

- **0.7 is not code-signed.** Signing, and the Microsoft Store package, moved to 0.8 because the certificate validation has not come through yet. Check the SHA-256 beside each file on getcadcraft.com/download. On Windows, if SmartScreen stops the installer, choose {{ui:More info}}, then {{ui:Run anyway}}. On a Mac, the first time, right-click CadCraft Studio and choose {{ui:Open}}. CadCraft Studio is not in an app store yet, and there is no iPad or iPhone build yet.
- The angle and slope lists in {{ui:Units}} are saved, but no box reads them yet.
- **The design checks have not been reviewed by an engineer yet.** Our tests compare them with printed table values and formulas worked by hand, not yet with a design guide's worked examples. Until a review, they are an aid: check members that matter by hand.
- The design checks use first-order forces (no second-order effects) and check I-shapes only. Not built: tubes, angles, channels, welded shapes, slender (AISC) or class 4 (Eurocode) parts in bending, torsion, shear buckling together with bending, connections, fatigue, fire, seismic detailing and concrete. A slender part in compression leaves the compression checks out, and the member reads "passes, partly checked".
- Frame analysis is still first-order and linear, and it hasn't been tried by an engineer on a real job yet.
- Bolt holes, bolts, welds and footings are not in the USD export.

Everything else is in [What is not built yet](topic:not-built-yet).
