---
title: Timber and light-gauge framing panels
summary: Frame wall, floor and roof panels in timber or light-gauge steel, with every piece, a cut list, a shop drawing and the stock to buy.
section: tasks
order: 50
keywords: framing, timber, lumber, wood, light-gauge steel, cold-formed, stud, joist, rafter, header, king stud, jack stud, cripple, cut list, shop drawing, panel
---

The {{ui:Framing}} tab frames panels you describe and gives you what a framing crew and a lumber yard ask for. The panels are saved in the model file.

:::warning
The sizes, the spacing and the headers are yours. DetailCraft does not check that a stud at that spacing carries that wall or that a header spans that opening: that is for your code's tables and your engineer.
:::

## Add a panel

Choose {{ui:Add a wall}}, {{ui:Add a floor}} or {{ui:Add a roof}}, then fill in the dimensions in millimetres, the material (timber or light-gauge steel) and the member size. Timber sizes are the nominal names with their dressed sizes (2×4 is 38 × 89 mm). Steel studs are named by depth and thickness, for example `C92-1.2`.

## Walls

A wall has a bottom plate, one or more top plates (one track for steel), end studs, studs on the spacing you give, and for each opening: two king studs, two jack studs, a header of the size and plies you choose, and cripples over the header (and under the sill of a window). Give each opening its distance from the left end, its width, and its rough-opening top and bottom measured from the subfloor; a door has a bottom of 0.

## Floors and roofs

A floor has joists across its width along its span, rim joists at both ends and, if you tick it, blocking at mid-span. A roof panel is a gable: a pair of rafters on the spacing you give (their length includes the eaves overhang along the slope) and a ridge board.

## What you get

Each panel shows its pieces on a drawing to scale with every piece marked, a cut list by mark, and a total. The {{ui:Stock to buy}} table nests all the panels' cuts into stock lengths, the shortest that takes each bar's cuts. {{ui:Save the shop drawing (SVG)}} writes the drawing; the {{ui:CSV}} button writes every cut list and the stock list.

## Place a panel in the model

Under each panel, give where it goes (x, y, z in millimetres and the angle) and press {{ui:Place as members}}: every piece becomes a member of the model, with the dressed section of its size and the weight of the material (about 500 kg/m³ for the timber, steel for the studs). A wall runs along the angle from its lower left end with its bottom at z; a floor's joists lie with their underside at z; a roof's gable elevation runs along the angle with z at the top of the wall plates. Each header ply is a member side by side. Pressing it again replaces the members placed before, and {{ui:Remove the placed members}} takes them out; each is one undo step. The Analysis leaves these members out: they are not steel frame members.

## PDF sheets

{{ui:PDF sheets}} saves one A3 page for each panel: the panel to scale with every piece marked, the overall dimensions, the cut list and a title strip.

Problems in the {{ui:Problems}} panel: an opening too near the end of a wall or to another, a header that does not fit under the top plates, a piece longer than the longest stock.
