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

The direct stiffness method, linear and first order unless you tick Second order (P-Delta): two-node beam-columns with axial, torsion and two bending stiffnesses (no shear deformation, no warping), end releases by static condensation, loads along members through the members' own shape functions. Its answers are checked against the classic textbook cases (cantilevers, simple, fixed and continuous beams, a portal frame, a grid in torsion, a truss).

**Second order (P-Delta).** Tick *Second order (P-Delta)* beside Run: each combination is solved again with the members' axial forces acting on the deflected frame (each member cut into 4 pieces, so the bending of a member between its ends counts too), until the axial forces settle. The result line gives the number of passes and how much the sway grew; the moments, deflections, design checks and report then use these results. Above the frame's elastic critical load the run stops and says so. It is elastic with small rotations, flexural only, with no stiffness reduction or notional loads (not the AISC direct analysis method by itself); slabs, walls and rigid floors stay first order.

**Natural frequencies (finite elements).** The {{ui:Finite elements: natural frequencies}} block under the results finds the lowest modes of the same model with the finite element engine: beams with their end releases, slabs and walls as flat four-node shells, rigid floors, supports. Choose how many modes (3, 6, 10 or 20) and the slab element (the four-node shell for thick or thin slabs, or the thin-slab one) and press {{ui:Find the frequencies}}. The table gives each mode's frequency in Hz, its period in seconds and its effective modal mass along X, Y and Z as a share of the mass that can move; {{ui:Show on the model}} draws any mode the way the deflected shape is drawn. Mass is the material density times the volume: loads do not add mass, and a material with no density has none. The report (PDF, CSV) carries the table. It is elastic and small-movement only, and no seismic or wind load is made from a code here. Not a code check; your engineer reviews the results.

**Response spectrum, time history and pushover.** Three more blocks sit below the frequencies, using the same finite element model. Mass for all of them is the material density plus the downward loads of the cases you tick, each times a factor you type (for example Dead at 1 and Live at the share you count as mass).

{{ui:Response spectrum}} reads each mode off a spectrum you give (a table of period and acceleration, or the ASCE 7 shape from SDS, SD1 and TL; the {{ui:Use the Seismic block values}} button copies those from the Seismic block) and combines the modes by CQC, SRSS, the ten percent rule or an absolute sum, then puts the X, Y and Z directions together (100 % + 30 % or SRSS). It gives the base shear, storey drifts, member end forces and a mode table that warns when the modes used carry less than 90 % of the mass. You can scale the results by a factor or up to a base shear you type; the block never computes that base shear itself. Results have no sign.

{{ui:Time history}} runs a ground acceleration by modal superposition (exact for the record's straight lines between points) or by direct integration (Newmark average acceleration with Rayleigh damping). The input is a made-up sine or pulse (always labelled synthetic), a record you paste, or a text file you open (time and acceleration, one acceleration per line with a step, or a PEER-style file with a DT= header; in g or m/s²). It gives the roof displacement and base shear against time, the drift of each level, and the envelope of the member end forces. Models with a very long record keep it for the session only.

{{ui:Pushover}} pushes the roof sideways in small steps (pattern like the first mode, or uniform), with plastic hinges at the ends of members that have an I shape. A hinge yields at the plastic moment, which falls as the axial force grows (worked out from the drawn shape, fillets ignored); hardening is optional, P-delta is optional, and a gravity combination can be applied first. It gives the capacity curve (base shear against roof displacement), the first hinge, and the state and plastic rotation of each hinge. {{ui:Run the nonlinear time history}} runs the same hinges under the Time history block's record on small models. Hinges form at member ends only (put a node where one should form inside a span); a member released at both ends gets none, and yielding and buckling of braces are not modelled; slabs and walls stay elastic; no acceptance criteria are given. Not a code check; your engineer reviews the results. The settings are saved with the model, and the report carries the tables.

Not built yet: buckling analysis, a missing-mass correction for the response spectrum, record scaling, acceptance criteria for hinges (dynamic response is there, above), area and wind loads made for you (earthquake forces on floors are in [Check concrete members and make seismic loads](topic:concrete-and-seismic)), member offsets, tension-only braces. See [Not built yet](topic:not-built-yet).
