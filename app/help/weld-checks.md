---
title: Check the welds where members meet
summary: After the design check, test the fillet and butt welds all round each member where it meets another member or a support, against AISC 360-16 Chapter J or EN 1993-1-8, and see which weld group is most used and under which combination. An aid until an engineer has reviewed it.
section: tasks
order: 42
keywords: weld, welds, weld check, fillet weld, butt weld, full penetration, AISC 360, EN 1993-1-8, weld group, utilisation, utilization, capacity, joint, connection, structural, engineer
---

The {{ui:Weld checks}} block in the {{ui:Analysis}} tab, under {{ui:Design checks}}, takes the forces of the last solved frame and the strength combinations you made, and tests the weld all round each member at every joint: where a member meets another member, or stands on a support.

:::warning
It is an **aid until an engineer has reviewed it**. It checks a weld drawn all round the section, as one group, from the frame's own end forces. It does not read the size or length of the welds you drew in the shop drawings, and it does not check bolts, plates, bearing, block shear or prying. Its results are not a stamp.
:::

## Run it

1. Solve the frame in the {{ui:Analysis}} tab and pick a {{ui:Design code}} in {{ui:Design checks}}, then press {{ui:Make combinations}} (the weld check needs the same strength combinations).
2. In {{ui:Weld checks}}, set the {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 means the leg follows the thinner wall of the section, up to 8 mm. Under the AISC code, {{ui:Weld metal strength F_EXX (MPa)}} is the weld metal's strength (482.6 MPa is an E70 electrode). Under EN 1993 the steel grade gives the weld metal's strength and the correlation factor.
3. Press {{ui:Check welds}}.

Each line of the table is one weld group (a joint end of a member). The numbers: the **utilisation** of its governing check, the state (passes or fails), and which check and clause governed under which combination. A group the check cannot judge says why (no steel grade, no correlation factor for the grade in EN 1993-1-8 Table 4.1, no weld on that section) instead of showing a number.

Changing the leg or the weld metal, or editing the model, clears the table: it was for the old values. Press {{ui:Check welds}} again.

## What is checked

- **ASCE 7 + AISC 360:** fillet weld metal (the angle of the load to the weld counts, J2.4), base metal shear rupture (J4.2), and full-penetration butt welds (Table J2.5).
- **EN 1990 + EN 1993:** fillet welds by the simplified method of EN 1993-1-8 4.5.3.3 and butt welds from 4.7.1.
- Detailing warnings against the minimum and maximum leg and the minimum length, with the value they were compared with.

The weld group is treated as a line section and loaded by the elastic vector method: every part of the weld takes the force from the member's axial force, both shears, torsion and both bending moments, added as vectors.

## What is not checked

Partial-penetration welds, skewed fillets, plug and slot welds, intermittent welds, the instantaneous-centre method, the EN directional method, fatigue and the base metal's block shear are not built. Some of the standards' constants were written from the standards and have not been compared with a printed copy yet; the report lists where each number comes from (the {{ui:Report (PDF)}} gains the weld tables once you have checked). See [Check steel members](topic:design-checks) and [Not built yet](topic:not-built-yet).
