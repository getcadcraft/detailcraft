---
title: Foundation checks
summary: Check footings, combined footings and mats on the soil you describe, settlement, a flexible mat on springs, pile groups and retaining walls. An aid for an engineer to check.
section: tasks
order: 49
keywords: foundation, footing, combined footing, mat, settlement, subgrade modulus, springs, edge column, corner column, bearing, sliding, overturning, punching, one-way shear, flexure, development, minimum steel, pile group, retaining wall, ACI 318-19
---

:::warning
These are first-order checks for an engineer to review, not a design sign-off. The allowable bearing pressure and the friction coefficient are yours: DetailCraft does not know your soil.
:::

The {{ui:Foundation}} tab checks the footings in the model against the column loads you give them.

## Describe the soil

Type the {{ui:Allowable bearing pressure}} and the {{ui:Base friction coefficient}}. Both start at 0, meaning not entered: the check then shows the pressure as a note and does not say it passes. For settlement, type the soil's modulus {{ui:Es}} (MPa), its Poisson's ratio and the settlement you allow (25 mm to start). For a flexible mat, type a subgrade modulus {{ui:ks}}. The fill over the footing, the soil's unit weight, the factors of safety for sliding and overturning (1.5 to start) and the bar yield strength are there too.

## Give the loads

Each footing has a list of column loads. Use {{ui:Add a column load}} and fill in the service row (for bearing, sliding and overturning) and the factored row (for the strength checks): the vertical load P down, the horizontal forces Vx and Vy on the footing's top, the moments Mx and My, the column's place on the footing and its size.

Or run the {{ui:Analysis}} tab and press {{ui:Take column loads from the Analysis}}: every support that stands on a footing becomes a column load, from the service and the factored sets you choose. A positive My loads the +x side of the footing more; a positive Mx loads the −y side more.

## What is checked

From the service loads, with the footing's own weight and the fill added:

- **Bearing:** the pressure under a rigid footing. Inside the middle third the whole base is in contact; outside it, part of the base lifts off and the peak is higher. A resultant outside the base fails.
- **Sliding:** friction times the vertical load against the horizontal force.
- **Overturning:** the resultant's distance from the edge.
- **Settlement:** the elastic settlement of the average pressure on a half-space with the modulus you gave, at the middle and at a corner (Timoshenko and Goodier's solution for a flexible rectangle), against the limit. It is an upper bound for a stiff footing and leaves out a soil layer of limited depth, relief by the excavated soil and consolidation. With no modulus it shows the pressure as a note.

From the factored column loads alone (ACI 318-19):

- **Flexure** at the column face, with the minimum steel (0.0018 for 420 MPa bars) and the bars you drew.
- **One-way shear** at d from the face.
- **Punching shear** at d/2 around each column, with the column's moment. For a column near an edge the critical section is cut off by the footing's edge (three sides at an edge, two at a corner, ACI 318-19 22.6.4.1 and the smaller αs in Table 22.6.5.2), and the moment about the section's own centre includes the shift of the load.
- **Development** of the bars past the column face, straight or with their hooks.
- **Depth** above the bottom bars (150 mm).

A combined footing or a mat is taken as rigid, and shear and moment come from statics on cuts across the full width.

## A flexible mat on springs

Tick {{ui:Analyse this footing as a flexible mat on springs}} when the footing carries many columns and the rigid footing is too coarse. The footing becomes a plate of four-node elements on a bed of springs (the {{ui:ks}} you typed, lumped on the nodes), every column's load spread over the nodes of its own footprint. A second table gives the largest soil pressure and settlement (and the difference between the most and the least), the bending moment each way with the steel it needs, tension on top against the plain concrete's strength (a footing has no top bars), one-way shear at d from the columns, and punching on the springs' own pressure. The mesh is refined until a column is three elements wide; a big mat takes a few seconds. The mat's own weight and the soil above it cancel and are left out.

Every failed check is in the {{ui:Problems}} panel with its clause.

## Pile groups and retaining walls

{{ui:Add a pile group}} puts a grid of piles under a rigid cap: type the load and moments and what one pile may carry in compression and in tension (the pile design's numbers, not this tab's). Each pile's reaction is P/n plus its share of the moments (the elastic method), and the largest compression and any tension are checked.

{{ui:Add a retaining wall}} checks a cantilever wall on level backfill, per metre: Rankine active pressure, overturning about the toe, sliding and the base pressure. Passive pressure in front of the toe is left out. Your assistant can run the same checks with `pile_group_check` and `retaining_wall_check`.

Pile groups, walls and the mat switch are saved in the model file, and a failed check is in {{ui:Problems}}.
