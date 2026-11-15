---
title: Rebar congestion map
summary: See how tight the rebar leaves each footing for concrete to get down, with the aggregate and vibrator you give.
section: tasks
order: 48
keywords: rebar, congestion, spacing, clear spacing, concrete placement, aggregate, vibrator, starters, hooks, footing, mat
---

The {{ui:Congestion}} tab draws a heat map of each footing as seen from above. Pale blue is open; yellow and orange are getting tight; red is tighter than the bars ask for. Dark cells are the bars themselves.

## What the map measures

Concrete goes down through the steel one layer after another and can move sideways between the layers. So at each point the map takes the narrowest free gap in any one layer: between the bottom-mat bars, between the next layer of bars, and between the starter bars' hook legs on top. The starters stand through all of them.

## What counts as tight

The need is the greater of 25 mm and the bar diameter (ACI 318-19 25.2.1), or, for BS 4449 bars, the greater of the bar diameter and 20 mm (EN 1992-1-1 8.2). Two boxes raise it:

- {{ui:Largest aggregate}}: the need becomes 4/3 of the aggregate size (ACI) or the aggregate plus 5 mm (EN).
- {{ui:Vibrator head}}: the need is at least the head's diameter.

Both start at 0, meaning not known: DetailCraft does not know your mix or your pump.

## Problems

A footing with a place tighter than the need is listed in the {{ui:Problems}} panel with the opening found and the opening needed. {{ui:Select}} next to a map selects the footing.

The map does not see ties, couplers, ducts or the column's own bars.
