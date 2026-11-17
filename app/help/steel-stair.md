---
title: Steel stair generator
summary: A steel stair from the floor-to-floor height, the run and the width: the rise and going by a rule set you choose, landings, rails and balusters, shop drawings and a cut list with weights.
section: tasks
order: 37
keywords: steel stair, stair generator, stringer, tread, chequer plate, grating, folded pan, landing, handrail, balusters, rise, going, osha, ibc, approved document k, cut list, weights, shop drawing
---

The stair generator makes a whole steel stair from a few numbers: the stringers, the treads, landings when the flight is too high, handrails with posts and balusters, the fixing holes in the stringers, a cut list with weights, and the shop drawings. It starts from the {{ui:Stair}} tool, like the plain stair (see Stairs), with one switch added.

## Place a steel stair

1. Choose {{ui:Stair}} in the {{ui:Place}} group, or press {{key:S}}.
2. On the right, tick {{ui:Use the steel stair generator}}.
3. Choose the **rule set** for where the stair is built, the **rise** (floor to floor; 0 = up to the next level), the **run available** (0 = let the rule decide), the **clear width** and the **tread type**: chequer plate, grating or folded plate pan.
4. Set the stringer section, the landings (by the rule, or a number), the handrails (both sides, one, none), the rail height and the baluster gap.
5. Click a grid intersection: that is the foot of the first riser.

Select the stair (click a stringer, tread or rail) to change any setting; the properties show the risers, going, pitch, flights and landings, the steel in it, the cut list and the rule set's sources.

## The rule sets

The rule set limits the shape of the stair: the rise and going, 2 × riser + going, the pitch, the landing, the rail height and the largest opening. DetailCraft offers the ones below; the region is a setting, not a guess. Open **Where this rule set's numbers come from** in the properties: each number names its source and says how well it was checked.

- **International Building Code 2021**: riser 4 to 7 in., tread at least 11 in., rails 34 to 38 in. The 12 ft limit between landings is shown as *not read* and the rail numbers as read in handouts quoting the code: confirm them before relying on them.
- **OSHA 29 CFR 1910.25 and 1910.29** (industrial standard stairs): 30° to 50°, riser at most 9.5 in., tread at least 9.5 in., at least 22 in. wide, landings as wide as the stair and 30 in. deep, a top rail used as the handrail 36 to 38 in. These were read in the regulation itself.
- **Approved Document K 2013, England** (general access and utility stairs): the rise and going ranges and 2 × riser + going 550 to 700 mm, read in the government-commissioned report that tabulates them. The document gives DetailCraft no rail height, so the height you set is used and the Problems list says so.

A rule set that is not here is not guessed: the stair then follows the plain 600 to 650 mm comfort rule and says it has no rule.

## What it works out

- **Risers and going.** The fewest risers whose 2 × riser + going sits in the middle of the rule's range, without the going falling under the rule's minimum. With a run given, the going is the run over the treads and anything outside the rule is said.
- **Flights and landings.** A flight higher than the rule allows is split with a landing as wide as the stair and not less than the rule's minimum; you can also ask for landings. A landing is a frame of two side beams and two cross angles under a cover, on two posts.
- **Treads.** Chequer plate is a welded plate (6 mm by default, the pattern is not added to the weight). A folded plate pan has a return at the nosing and is bolted through the stringer web: two holes 2 mm larger than the bolt at 0.3 and 0.7 of the depth. Grating is drawn as the plate of equal weight (bearing bar depth × thickness ÷ pitch); the cross bars and banding are not counted and the cut list says so.
- **Rails.** A pipe top rail on posts along each flight and each landing, a baluster gap that no sphere larger than the rule's opening passes (100 mm at most by default).

## Drawings, cut list, export

- The flight is one assembly; the rails are another (both sides are the same assembly, made twice). Each has its assembly drawing, and the stringer's drawing shows its holes.
- The **stair sheet** (ST-…) shows each flight's stringer straight with the hole stations written from the lower end, and the tread detail: section, nosing, return and the end flange with its holes.
- {{ui:Cut list and weights}} in the properties lists every section and length with quantities and kilograms; {{ui:Download the cut list (CSV)}} saves it.
- Everything goes to the bill of materials, NC files and IFC as ordinary parts (IfcMember, IfcColumn, IfcPlate).

## Good to know

- This is a starting point, not a design. Nothing is checked for strength or deflection; the rule set only limits the shape.
- Stringer ends against the floors are cut square and not detailed; landing posts stand to the floor below and have no base plates.
- Placing the stair as one element in BimCraft is not wired yet.
