---
title: Mitre joints
summary: Join two I-shape members that meet at an angle: both ends cut on the plane that halves the angle, with end plates, bolts and stiffeners if you want them.
section: tasks
order: 35
keywords: mitre, miter, mitre joint, knee, haunch, portal frame, ridge, corner, angle cut, skew cut, end plate, bolted end plate, stiffener, connect
---

A mitre joins two I-shape members whose ends meet at an angle, such as the knee of a portal frame, a ridge, or two beams turning a corner in plan. DetailCraft cuts both ends on the plane that halves the angle between them, so the two cut faces match. If you want, it adds an end plate to each cut end, bolts the two plates together, and puts a pair of web stiffeners in each member.

## Where it works

- Two **I-shapes** (IPE, HEA, HEB, W and the like) whose **ends meet on the same node**. Either member can be drawn in either direction.
- The angle between the members must be at least 15°. Members in line are refused: use a [splice](topic:splices).
- The plain cut (no plates) works however the members meet. **End plates** need the two members to meet in the plane of their webs, as at a portal knee or a ridge. Two beams turning a corner in plan meet in the plane of their flanges, so they get the plain cut only.
- Members of different sizes are joined, but with a warning: their cut faces do not match.

## Add a mitre

1. Select the two members: click one, then {{key:Shift}}+click the other.
2. Choose {{ui:Mitre}} in the {{ui:Connect}} group's {{ui:More}} menu. The Mitre dialog opens.
3. Set the numbered fields. The drawing beside them is made from your numbers as you type, and its numbered circles show what each field sets.
4. Choose {{ui:Add the mitre}}. If you selected more than two members, every free joint among them gets the same mitre.

To change a mitre later, select it (click one of its plates) and choose {{ui:Mitre dialog with preview}} in the right panel, or change its settings there directly. A plain cut has no plates to click: select its two members and choose {{ui:Mitre}} again, and the dialog opens on that mitre. {{ui:Apply to similar (n)}} copies it to every free joint between members of the same two profiles at the same angle.

## The numbered fields (mm)

| No. | Setting | Default | What it does |
|---|---|---|---|
| 1 | Gap between the plates (or the cut ends) | 0 | Clear gap at the joint. Each side keeps half of it |
| 2 | End plates, plate thickness | on, 20 | An end plate welded all around each cut end. Untick for a plain cut |
| 3 | Bolt rows, row pitch, gauge, outside row | 4, 0, 0, off | Pitch 0 spreads the rows evenly between the flanges. Gauge 0 = half the plate width, at least 2.4 × the hole. The outside row goes in the plate's extension past the outside flange |
| 4 | Plate past the outside flange | 0 | How far the plates reach past the outside flange, along the cut |
| 5 | Plate past the inside flange | 0 | The same on the inside |
| 6 | Web stiffeners, distance past the cut | off, 50 | A pair in each member, both sides of the web, square to the member, this far past the far end of its cut |
| 7 | Stiffener thickness | 10 | |

Under {{ui:Bolts}}: bolt diameter, hole, grade and length allowance (20, 22, A325, 30), as for end plates. Under {{ui:Plates and welds}}: plate width (0 = the flange width), fillet weld size (8) and plate material (A36).

## What you get

- **The cuts.** Each member's end is cut on its plane. Its length in lists, drawings and NC files is the **overall length**, from its square end to the farthest point of the cut.
- **The plates** belong to their own member: each member's assembly is the member, its end plate and its stiffeners. The bolts are site bolts of the joint: the bill of materials counts them once, and each member's assembly drawing lists them as loose bolts.
- **Drawings** show the slanted ends and the plates; the shop drawing of a mitred member notes each cut's angle from square.
- **NC files** (DSTV) carry the skew cut angles in the header, as the standard asks, and contours that follow the cut. Check them in your shop's own NC viewer before cutting, as for every NC file.
- **IFC** clips each member's extrusion by its cut plane, so other programs show the true cut.
- **Marks:** a mitred member is a different piece from a square-cut one of the same length. Two members with the same cuts share a mark, as the two rafters of a ridge do.

## Good to know

- The mitre stays live. Move or resize either member and the cut, plates and bolts follow. Delete either member and the mitre goes, and the other member's end is square again.
- Warnings use the same EN 1993-1-8 minimums as the other connections (end and edge distance 1.2 × hole, pitch 2.2 × hole, gauge 2.4 × hole), plus bolt rows too close to a flange, plates narrower than the flanges and stiffeners with no room.
- The values are starting values, not a design. DetailCraft does not check the connection's strength, and it makes no haunch, no welded mitre with a butt weld, and no stiffeners in line with the other member's flanges.
