---
title: Detail reinforced concrete beams, columns, slabs and walls
summary: Add concrete beams, columns, slabs and walls by grid, give them bars, stirrups and ties, check laps and anchorage against ACI 318-19 or EN 1992-1-1, and make shop drawings and bar-bending sheets.
section: tasks
order: 91
keywords: reinforced concrete, rebar, reinforcement, beam, column, slab, wall, stirrups, ties, links, hooks, laps, lap splice, anchorage, development length, ld, ldh, lbd, cover, spacing, trimmers, openings, mats, bar marks, bending schedule, bar bending schedule, bbs, shop drawing, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC import
---

The {{ui:Concrete}} tab below the view details the bars of concrete beams, columns, slabs and walls. You give the sizes and the bars; DetailCraft places every bar, numbers it, checks the laps, the anchorage, the cover and the spacing against the clause they come from, and draws it.

:::warning
DetailCraft details the bars you give it. It does not design them. Every result is for checking by an engineer.
:::

## Open the Concrete tab

Choose the {{ui:Concrete}} tab below the view. In a ribbon layout, {{ui:Concrete}} is in the {{ui:Modeling}} tab beside {{ui:Footing}}. With the drafting style's command line, type {{cmd:CONCRETE}}.

## Add an element by grid

Concrete elements are placed on the model's grid lines and levels, so set those up first (left panel).

1. In {{ui:Add by grid}}, choose the {{ui:Element}}: {{ui:Concrete beam}}, {{ui:Concrete column}}, {{ui:Slab}} or {{ui:Wall}}.
2. Pick the grid lines and levels:
   - a beam runs from one grid intersection to another, its top at the level;
   - a column stands at an intersection, from one level to another;
   - a slab fills the rectangle between two numbered and two lettered grid lines, its top at the level;
   - a wall runs along its centre line from one intersection to another, from one level to another.
3. Give the size and choose {{ui:Add}}. The element is selected and its fields open in the {{ui:Properties}} panel.

Each element starts with bars that are starting values, not design: change them to the engineer's.

## Change the bars

Select the element (in the view, or its name in the {{ui:Concrete}} tab). The {{ui:Properties}} panel shows:

| Element | What you set |
|---|---|
| Beam | Width, depth, clear cover; top and bottom bars (size, number, straight or 90° hook at the ends); side bars; stirrups (size, 135° or 90° hooks, the first one's distance from the support face, the end zone length and spacing, the spacing between); support lengths; lap lengths |
| Column | Width, depth across, rotation, cover; longitudinal bars on each face; ties as for stirrups; what the bars do at the top (lap with the column above, hook into the floor, or stop) |
| Slab | Thickness, size, top, covers; bottom mat and top mat each way (size and spacing); U-bars round the edges; trimmer bars; openings |
| Wall | Thickness, cover, one or two layers, horizontal and vertical bars, U-bars at the ends, vertical bars lapped above or not, trimmer bars, openings |

Each change is one undo step. A change that cannot be built is refused and the status bar says why, for example "The opening does not fit inside the element with its cover."

Stirrups and ties are closed, with both hooks at one corner. A beam's bars run into a concrete column at its ends to the column's far face less cover; where no column is there, give the {{ui:Support length at the start (mm)}} and at the end.

## Laps and anchorage

Bars longer than the {{ui:Stock bar length (mm)}} (12000 to start with) are cut into pieces of equal length, lapped. The table {{ui:Laps and anchorage}} lists every lap and every anchorage: what is needed, with the clause and its terms, and what the detail has.

- A lap length of 0 means "as needed": the length the code gives, rounded up to 25 mm.
- Type your own lap length to use it instead. If it is shorter than needed, it is a problem (see below), and it is marked * in the table.
- Anchorage is measured from the support face to the bar's end inside the support. A beam with no known support says so instead of checking it.
- A column standing on a footing laps with the footing's starter bars, and on another column with that column's bars: their lap is checked too.

**ACI 318-19** (SI): straight bars in tension 25.4.2.3 (the table, with ψt, ψe, ψg, λ), standard hooks 25.4.3.1 (ψr 1.6 and ψo 1.25 taken unless known otherwise), bars in compression 25.4.9.2, tension laps 25.5.2.1 (Class B, or Class A in the settings), compression laps 25.5.5.1.

**EN 1992-1-1**: anchorage 8.4.4 with fbd from 8.4.2 (good or poor bond), laps 8.7.3 with α6 for every bar lapped at one section. γc, γs and αct start at the recommended values; set your national annex's.

## The checks

Every check that fails is in the shell's Problems panel (source {{ui:Reinforcement checks}}), and in the element's {{ui:Checks}} list:

| Check | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Cover | Table 20.5.1.3.1, by exposure | Bond minimum, Table 4.2 (durability cover is yours to give) |
| Clear spacing of bars | 25.2.1 (beams, slabs, walls), 25.2.3 (columns) | 8.2 (2) |
| Stirrup spacing | 9.7.6.2.2 | 9.2.2 (6) |
| Beam minimum steel | 9.6.1.2 | 9.2.1.1 (1) |
| Beam side bars over 900 mm deep | 9.7.2.3 | not checked |
| Column steel ratio, number of bars | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Ties: spacing, size, cross-ties | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Slab spacing, minimum steel | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Wall spacing, minimum steel, two layers | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Laps, anchorage | as above | as above |

The aggregate size is not known, so the clear spacing is checked without it.

## Openings, trimmers and edge bars

Choose {{ui:Add an opening}} under a selected slab or wall and set where it is and its size. Bars it crosses stop at cover from its edge. Trimmer bars are added each side, in the same layer, carrying half the area of the bars cut, one anchorage length past the opening. That is DetailCraft's starting rule, not a code clause: change the {{ui:Trimmer bars}} to the engineer's. Corner bars are not added.

U-bars round a slab's free edges and at a wall's ends have legs one lap length long.

## Bar marks and the bending schedule

Identical bars share one mark: footings keep F marks (5F1), beams get B, columns C, slabs S and walls W (7B1, 8C1, 4S2). The {{ui:Bending schedule}} tab and its CSV now list every bar of the structure, footings first. {{ui:Output}} › {{ui:More}} › {{ui:Bending}} downloads it.

## Shop drawings

Choose {{ui:Output}} › {{ui:More}} › {{ui:Reinforcement drawings}}, {{ui:Reinforcement drawings}} in the {{ui:Concrete}} tab, or {{ui:Shop drawing}} beside one element. Each element gets a sheet with an elevation (a plan for a slab) showing every bar and its mark, the stirrup or tie zones and the laps dimensioned, and a section at the middle; then bar-bending sheets list every mark with a sketch of its shape, its dimensions, the number, the cut length and the weight.

The sheets are made from the model each time, and again after every change while the window is open: the title block carries the model ref. Save {{ui:This sheet as PDF}} or {{ui:All sheets as PDF}}.

## Bars from an IFC file

{{ui:File}} › {{ui:Import IFC}} now reads IfcReinforcingBar: the swept disk along its centre line comes back as straight legs and bends, with its diameter, its mark and the element that holds it. The bars are kept as they were read (they are not turned into a beam's or a slab's rules), shown in the view, listed in the bending schedule and written out again with the IFC export. The import report says how many bars were read, of which sizes, in how many elements, and what was left out and why.

A beam, column, slab or wall of that file that holds bars or whose material is concrete is not taken for steel; the report says so. DetailCraft's own IFC export carries each concrete element's definition, so it comes back as itself, and its bars are made again from it.

:::note
Reading a structural design program's own files (not IFC) is not built: export IFC from it.
:::

## The IFC export

Concrete beams, columns, slabs (with openings) and walls go out as IfcBeam, IfcColumn, IfcSlab and IfcWall, each with its bars as IfcReinforcingBar (main bars, ligatures for stirrups and ties, edge bars) aggregated to it, each bar a swept disk along its centre line with true arcs at the bends, its mark and its cut length.
