---
title: Analyse the frame
summary: Forces, reactions and deflections of the beams, columns and braces as drawn, under load cases and combinations you set. An analysis aid, not a code check; the design checks are a separate step.
section: tasks
order: 40
keywords: analysis, structural analysis, frame analysis, stiffness method, loads, load case, combination, dead load, live load, self weight, own weight, reactions, bending moment, shear, axial force, deflection, deflected shape, supports, pinned, fixed, release, report, pdf, csv, craftscript, frame3d
---

The {{ui:Analysis}} tab at the bottom finds the forces in every beam, column and brace of the model, the reactions at the column bases and how far the members bend, for the loads you give it.

:::warning
It is an **analysis aid, not a code check**. The analysis applies no design code: it does not size members, check capacities or connections, or pick load factors. An engineer checks the model, its loads and supports, and decides what the numbers mean. For member checks to ASCE 7 / AISC 360 or EN 1990 / EN 1993-1-1 see [Check steel members to a design code](topic:design-checks), a separate step that is an aid too.
:::

## Run it

1. Open the {{ui:Analysis}} tab.
2. Select one or more members in the view, pick a {{ui:Case}}, a {{ui:Load}} and a {{ui:Direction}}, type the value and press {{ui:Add load}}. A load spread along a member is in kN/m, a point load in kN. {{ui:Down (gravity)}} is the usual one.
3. Press {{ui:Run analysis}}.

The table lists each member's largest axial force N, shears Vz and Vy, bending moments My and Mz, torsion T and its deflection, largest moment first; click a member's name to select it. Below are the reactions at each support. {{ui:On the model}} draws the deflected shape, or one action as a diagram beside each member with its largest value written at its place. The results go out of date as soon as the model changes: run it again.

Every load, case and setting is one undo step ({{key:Mod+Z}}) and is saved in the model file.

## Load cases and combinations

The analysis starts with three: **Dead** (the members' own weight, from their drawn sections and 7850 kg/m³), **Live** (empty) and **Dead + live**. Add cases of your own (wind, snow …) and combinations: a combination adds the cases up with the factors you type. The analysis is linear, so each case is solved once and combinations are sums. Type the factors yourself, or choose a design code and let {{ui:Make combinations}} write the code's ([Check steel members to a design code](topic:design-checks)).

## What the frame is made of

- Beams, columns and braces, each on its work line (the line you drew), with the section's real properties worked out from its outline. Plates, stairs, footings and bolts are not part of the frame.
- A member is split where another member's end lands on it, so a beam framing into a column at mid-height joins the column there.
- **Column bases**: fixed (the start) or pinned (held in place and against twisting, free to turn). A base plate always makes a support.
- **Beam ends**: an end plate is rigid, a shear tab is pinned. {{ui:Beam ends with no connection}} sets the rest. **Braces** are pinned at both ends.
- Select one member to give its ends, or a column's base, a rule of its own.
- Steel everywhere: E = 200 GPa, G = 77 GPa.

If the frame can move without bending anything — a mechanism, such as pinned bases with no bracing in one direction — the run stops and says where and which way; hold it there with a support, a rigid joint or a brace.

## Signs

N > 0 is tension. My > 0 puts the member's local −z side in tension: a beam sagging under gravity has My > 0. Mz > 0 puts the local −y side in tension. Deflection is measured from the straight line between the member's ends. A member's local z points up (for a column: along X); its local axes turn with the member's rotation.

## The report

{{ui:Report (PDF)}} and {{ui:Report (CSV)}} hold everything: the assumptions the frame was built on, sections, cases and combinations, then for each case and combination the reactions (with the sums of loads and reactions, which balance), the member forces and the displacements, and an envelope of every case. {{ui:Export as CraftScript}} writes the same frame as a script for PartCraft's Script workspace, where the library function `frame3d` solves it step by step in readable code.

## Method

The direct stiffness method, first order and linear: two-node beam-columns with axial, torsion and two bending stiffnesses (no shear deformation, no warping), end releases by static condensation, loads along members through the members' own shape functions. Its answers are checked against the classic textbook cases (cantilevers, simple, fixed and continuous beams, a portal frame, a grid in torsion, a truss).

Not built yet: second-order (P-Δ) effects, buckling analysis, dynamic and seismic analysis, area and wind loads made for you, member offsets, tension-only braces. See [Not built yet](topic:not-built-yet).
