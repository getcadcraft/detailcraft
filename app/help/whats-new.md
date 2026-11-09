---
title: What's new in 0.8 and 0.8.1
summary: An erection movie from a crane's load chart, a connection autopilot, a rebar congestion map, foundation checks, timber and light-gauge framing panels, constructability and weld access checks, supplier stock, what breaks first, a live re-solve, more concrete checks and the 0.8.1 fixes.
section: start
order: 5
keywords: whats new, what's new, release notes, changelog, changes, 0.8, 0.8.1, version, new features, erection, crane, load chart, movie, autopilot, connections, rebar, congestion, foundation, footing, mat, settlement, framing, timber, light-gauge, cut list, constructability, weld access, supplier, stock, lead time, what breaks first, live, concrete, seismic, slab, languages, assistant
---

This is what changed in DetailCraft 0.8 (1 November 2026) and 0.8.1 (2 November 2026), compared with 0.7. 0.7 checked steel members; 0.8 plans the lifts, proposes the connections, checks the foundations and the rebar, and frames timber and light-gauge walls, floors and roofs.

## New

### Erection

- **Erection plan and movie.** In the {{ui:Erection}} tab, describe a crane (where it stands, its highest hook, the rigging that is not in the chart) and type the rows of its load chart. DetailCraft lifts the model one assembly at a time, in phase order and tier by tier, and checks each lift against the chart at its radius and against the margin you set. {{ui:Save movie}} writes one HTML file that plays offline in any browser, on a phone too. Lifts that are over the chart, past it or too high are in {{ui:Problems}}. It is a plan from your numbers, not a lift plan. See [Erection plan and movie](topic:erection-movie).

### Connections

- **Connection autopilot.** The {{ui:Autopilot}} tab looks at every joint that has no connection and proposes one from the shapes: base plates, shear tabs, end plates for the beams you mark as moment beams, splices and gussets. Give a uniform load or one end shear and the bolt count follows the bolt's design strength. {{ui:Add them all}} adds the proposals as one undo step. They are starting values to review, not a connection design.
- **Constructability checks.** {{ui:Problems}} for a bolt a wrench cannot reach, bolts too close for the socket, fillet welds outside their size limits and hollow sections that hold water. Weld access is new: an all-round fillet weld that a welder's torch cannot reach is listed with the part in the way and the share of the weld affected. See [Constructability checks](topic:constructability).

### Foundations and rebar

- **Foundation checks.** The {{ui:Foundation}} tab checks footings, combined footings and mats on the soil you describe: bearing, sliding and overturning from service loads; flexure, shear, punching, development and minimum steel from factored loads (ACI 318-19). A column near an edge or a corner is checked with the section cut off by the footing's edge. Settlement comes from the soil's modulus, a flexible mat is solved on springs from a subgrade modulus, and pile groups and retaining walls have panels of their own. Column loads can be typed or taken from the {{ui:Analysis}}. See [Foundation checks](topic:foundation-checks).
- **Rebar congestion map.** The {{ui:Congestion}} tab draws a heat map of each footing as seen from above: where the bars leave too little room for concrete to get down, against the clear-spacing rule and, if you give them, the largest aggregate and the vibrator head. See [Rebar congestion map](topic:rebar-congestion).

### Framing and supply

- **Timber and light-gauge framing.** The {{ui:Framing}} tab frames wall, floor and roof panels with every piece, a cut list, the stock to buy and a shop drawing to scale. {{ui:Place as members}} puts the pieces in the model, and {{ui:PDF sheets}} saves one sheet for each panel. The sizes, spacing and headers are yours: DetailCraft does not check that they carry the load. See [Timber and light-gauge framing panels](topic:framing-panels).
- **Supplier stock and lead times.** The {{ui:Supply}} tab reads a supplier's stock list (CSV) and shows, for each section the cut list buys, whether there is enough in stock and how long the wait is. Shorts and late sections are in {{ui:Problems}}. Nothing is ordered. See [Supplier stock and lead times](topic:supplier-stock).

### Analysis and design

- **What breaks first?** In the {{ui:Analysis}} tab, the button finds the strength combination that governs, the weakest member, how far the loads can grow before the first member reaches its limit, and the weakest end plate or shear tab where its bolts' shear strength is known. It needs the combinations and a design code first. Bearing, block shear, welds and prying are not checked. Your connected assistant can ask the same.
- **Live.** Tick {{ui:Live: solve again after each edit}} and the frame is solved again after each edit.
- **Concrete, more.** A slender column in a non-sway frame is designed for its magnified moment (ACI 318-19 6.6.4.5). The seismic period can be taken from the analysis by Rayleigh's method. A slab made of plates gets the steel each layer needs from its moments, and the one-way shear. See [Check concrete members and make seismic loads](topic:concrete-and-seismic).
- **For an engineer to check.** The foundation, concrete and What breaks first results are aids. Wind loads are not built.

### In every app

- **Languages.** The help is in 54 languages. Those beyond English are machine drafts until a native speaker reads them; ten are new (Lithuanian, Latvian, Bosnian, Marathi, Telugu, Albanian, Afrikaans, Filipino, Swahili, Uzbek).
- **Toolbar rows.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} chooses wrap, 2 rows or 1 row. A bar that already fits stays as it is; the rest scroll sideways.
- **Property grid.** The footing's fields use the shared grid: collapsible categories and a compact density. Typed arithmetic such as 2*450 still works.
- **Input devices.** Trackpad, pen, 3D mouse, controller and MIDI can drive the apps. See [Navigate in 3D](topic:navigate-3d).
- **Problems panel.** The warnings of the new checks above appear in the same {{ui:Problems}} panel as before.
- **Connect your AI.** Your own assistant, connected through CadCraft Studio, works with all eight apps and sees only what you allow. One-click connect, the hosted connector and your own API key in Studio are still to come. See [Use DetailCraft with an AI assistant](topic:use-with-ai-assistants).

## Fixed in 0.8.1

- **Languages in Studio.** Studio and the packed editions can switch language at run time; before, they were English only. It is not yet tested on every platform: tell us if the language does not change.
- **Crossing-window select.** The 0.8.1 installers carry the select-by-window behavior already right in the 0.8 web build; an older installer did not.
- **Tablets in portrait.** Spare grid height goes to the canvas, and the sheet layout starts at 760 px or less.

## Not in this version yet

- **Send NC to a machine** is not released.
- **Wind loads** for concrete are not built, and the concrete and foundation checks are for an engineer to review.
- **Code signing.** The Windows installers and the macOS .dmg are not signed, so Windows may warn and macOS asks for a right-click, then Open.

Earlier changes are in [What's new in 0.7](topic:whats-new-0-7).
