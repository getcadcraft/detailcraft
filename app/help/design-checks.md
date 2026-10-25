---
title: Check steel members to a design code
summary: Make load combinations from ASCE 7 or EN 1990, check each steel I-shape against AISC 360 or EN 1993-1-1, and see how much of its capacity every member uses. An aid until an engineer has reviewed it.
section: tasks
order: 41
keywords: design, design check, steel design, utilisation, utilization, capacity, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, load combinations, LRFD, National Annex, buckling, lateral-torsional buckling, shear, bending, interaction, structural, students, engineer
---

After you run the analysis, the {{ui:Design checks}} block in the {{ui:Analysis}} tab turns its forces into a verdict for every steel member: how much of its capacity the worst combination uses.

:::warning
It is an **aid until an engineer has reviewed it**. It uses first-order forces only (no second-order effects), checks no torsion, no slender (class 4) parts, no welded shapes and no connections, and it leaves out what it cannot check and says so. It does not replace an engineer's check, and its results are not a stamp.
:::

## Choose a code

{{ui:Design code}} is saved with the model; pick one of two families:

- **ASCE 7 + AISC 360** (US, LRFD): the load combinations of ASCE 7-16 §2.3.1 and the member checks of ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): the combinations of EN 1990 (Eq. 6.10, or 6.10a and 6.10b) and the member checks of EN 1993-1-1.

Then pick the {{ui:Steel grade}} (A992, A36 and others; or S235 to S450, with the lower yield strength above 40 mm).

## Make the combinations

Give each load case its **kind** (dead, live, roof live, snow, wind, seismic) in the case list, then press {{ui:Make combinations}}. DetailCraft writes the code's combinations as combinations of your cases: every strength combination the code lists for the kinds you have, and serviceability combinations for deflection. The ones you typed yourself stay; they are not checked against the code. A case of kind {{ui:Other}} is not combined.

For the Eurocode the factors are the **recommended values** of EN 1990 Annex A1 (γG 1.35, γQ 1.5, the ψ values of imposed, snow and wind loads) and EN 1993-1-1 (γM0 = γM1 = 1.0). Your country's National Annex changes some of them: open {{ui:National Annex values}}, type yours, and make the combinations again. They are saved in the model.

## Check the members

Press {{ui:Check members}}. For each steel I-shape the table shows its **utilisation** (demand over capacity: 100 % is the limit), whether it passes, which check governs, and which combination. Members are coloured on the model: blue little used, green about half, ochre near the limit, red over it, grey not checked. Click a member's name to select it.

The checks, with the clause each one follows (they are listed in the report):

- tension, compression with flexural and torsional buckling, bending about both axes with lateral-torsional buckling, shear, and bending with axial force;
- deflection of the serviceability combinations against the {{ui:Deflection limit}} you set (L/360 to start; a project value, not a code value).

**Lengths.** The braced length is a share of each analysed piece (1 = unbraced); braces are taken equally spaced from the start. K factors multiply the length for buckling. A joint where another member lands splits a member, and each piece is checked on its own length, as braced there.

## What is not checked

A member shows **not checked**, with the reason, instead of a number when its section is not an I-shape the checks know (tubes, angles, channels), when it is a custom (welded) shape, or when a part is slender (AISC) or class 4 (Eurocode) in bending. A slender part in compression leaves the compression checks out and the member reads *passes, partly checked*. Also not built: second-order effects, torsion, shear buckling together with bending, connections, fatigue, fire, seismic detailing, concrete and slabs. See [Not built yet](topic:not-built-yet).

## The report

{{ui:Report (PDF)}} and {{ui:Report (CSV)}} gain the design tables once you have checked: the code editions, the settings and National Annex values, utilisation by member, every clause used, and for each member the demand, capacity and utilisation of each check in its governing combination.
