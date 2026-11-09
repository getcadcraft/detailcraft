---
title: Reinforce a rectangular concrete column
summary: A worked example of detailing a rectangular concrete column in DetailCraft: place it, give it longitudinal bars and ties, read the checks, the lap above it and the bar marks, and draw its shop sheet.
section: tasks
order: 92
keywords: concrete column, rectangular column, column reinforcement, longitudinal bars, vertical bars, ties, hoops, cross-ties, lap splice, splice, starter bars, column steel ratio, 1 percent, 8 percent, tie spacing, ACI 318-19 25.7.2, EN 1992-1-1 9.5, shop drawing, bar marks, 8C1, 3C2
---

This topic takes one square column from nothing to a checked, drawn and scheduled detail. The general rules for beams, slabs and walls are in [Detail reinforced concrete](topic:reinforced-concrete); this is the column's side of it, with numbers you can reproduce.

:::warning
DetailCraft details the bars you give it. It does not design them. The bars below are starting values for the example, not a recommendation: the engineer of record chooses the size, the number and the spacing.
:::

## What a column is here

A rectangular column has a width (along its local x) and a depth across (along its local y), a clear cover to the ties, longitudinal bars on each face and closed ties. Rotating it turns the whole thing; the faces stay "width face" and "depth face".

- The longitudinal bars are given as the number on a width face and the number on a depth face. The corner bars count on both, so 3 and 3 make 8 bars; 4 and 4 make 12.
- The ties are closed rectangles with two hooks at one corner, 135° or 90°. The first tie is a set distance above the floor (and below the next), the end zones have a closer spacing, the middle has a wider one.
- What the bars do at the top: run on and lap with the bars above, turn in with 90° hooks into the floor, or stop under the top.

## The worked column

A 400 × 400 mm column, 3600 mm between the floor above and the floor below, #8 longitudinal bars, #3 ties, 40 mm clear cover, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Open the {{ui:Concrete}} tab and set up the grid lines and levels the column stands on (left panel).
2. In {{ui:Add by grid}}, choose {{ui:Concrete column}}, pick the grid intersection and the two levels, set {{ui:Width (mm)}} and {{ui:Depth across (mm)}} to 400 and choose {{ui:Add}}.
3. In the {{ui:Properties}} panel set:
   - {{ui:Clear cover (mm)}} 40;
   - {{ui:Longitudinal bars}} #8, {{ui:Bars on a width face}} 3, {{ui:Bars on a depth face}} 3;
   - {{ui:Ties}} #3, {{ui:Hooks}} 135°, {{ui:Spacing between (mm)}} 300, {{ui:End zone length (mm)}} 600, {{ui:Spacing in the end zones (mm)}} 150, {{ui:First one from the face (mm)}} 50;
   - {{ui:Bars at the top}} {{ui:Run on and lap with the bars above}}.

Each change is one undo step.

### What you get

| Part | Result |
|---|---|
| Longitudinal bars | 8 bars #8 (a 3 × 3 ring), each 4375 mm long: the 3600 mm column plus a 775 mm lap above it |
| Lap | 757 mm needed for a compression lap (ACI 318-19 25.5.5.1, fy 420), 775 mm provided: the need rounded up to the next 25 mm |
| Ties | 17 ties #3, each with a cut length of about 1359 mm, spaced 150 mm in the two 600 mm end zones and 300 mm between |
| Steel ratio | 2.5 % of the gross section (limits 1 % to 8 %, ACI 318-19 10.6.1.1) |
| Clear spacing of the bars | 112 mm (needs at least 40 mm, ACI 318-19 25.2.3) |
| Tie spacing | 300 mm (allowed 400 mm: the least of 16 bar diameters, 48 tie diameters and the smaller side, ACI 318-19 25.7.2.1) |
| Tie size | #3 (allowed down to 9.5 mm, ACI 318-19 25.7.2.2) |

All of these are in the element's {{ui:Checks}} list; the lap is also in {{ui:Laps and anchorage}}.

## Cross-ties

With one perimeter tie, only the corner bars are held. ACI 318-19 25.7.2.3 lets a middle bar on a face go without support if it is within 150 mm clear of a corner bar. With 3 bars on a face, as above, that is met. With 4 or more bars on a face it is not, and DetailCraft says so as a warning ({{ui:Checks}} and Problems): "cross-ties" are needed. **Cross-ties are not drawn yet**: add them in the drawing by hand, or choose fewer bars on the face.

For EN 1992-1-1, DetailCraft checks the bar size (at least 8 mm), the number of bars (at least 4), the steel area (0.2 % to 4 % of the section), the clear spacing and the link spacing (9.5.2 and 9.5.3).

## The lap, the footing and the column below

- Where **a footing of the model stands under the column**, the column laps with the footing's starter bars, and their lap is checked too.
- Where **another column of the model stands under it**, it laps with that column's bars.
- Give your own {{ui:Lap length (mm, 0 = as needed)}} to override; one shorter than needed is a problem and is marked * in the table.
- Compression laps are used by default ({{ui:Compression lap}} in the settings); choose {{ui:Tension lap}} when the column can be in tension.

## Marks, schedule and the shop sheet

Identical bars share one mark: the longitudinal bars of the column above are 8C1, its ties 17C2 (the number first, then the kind letter C for column and the running number). They appear in the {{ui:Bending schedule}} tab, with the cut length and the weight, and in the CSV from {{ui:Output}} › {{ui:More}} › {{ui:Bending}}.

Choose {{ui:Shop drawing}} beside the column for a sheet with the column in elevation (every bar, its mark, the tie zones and the lap dimensioned) and a section at the middle, followed by the bar-bending sheet. Save {{ui:This sheet as PDF}}.

## What this does not do

- Round columns and spirals, and columns that are not rectangular: not built.
- Corner and cross-ties inside the section, and seismic detailing (ACI 318-19 chapter 18): not built.
- Splices at positions you choose, or staggered: all bars lap at one section.
- Whether the bars are enough for the load: that is the engineer's design.
