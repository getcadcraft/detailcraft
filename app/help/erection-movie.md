---
title: Erection plan and movie
summary: Enter a crane and its load chart, see every lift checked against the chart in phase order, and save an erection movie that plays offline on any phone.
section: tasks
order: 47
keywords: erection, crane, lift, load chart, radius, capacity, rigging, sequence, movie, animation, phone, offline, lift plan
---

The {{ui:Erection}} tab turns the model into an erection order and checks each lift against a crane you describe. It plans from numbers you type. It is not a lift plan: the rigger and the crane operator make that.

## Describe the crane

Choose {{ui:Add a crane}}, then fill in:

- **Crane centre X and Y:** where the crane stands, in millimetres.
- **Highest hook:** the most the hook can rise, in millimetres. 0 means no limit is checked.
- **Hook block and rigging not in the chart:** kilograms taken off the chart before a load is added, when your chart does not already do it.
- **Load chart:** one row to a line, radius in metres and then the capacity in kilograms. Copy the rows from the crane's own chart.

The chart is read the way a load chart is read: the capacity listed for a radius holds out to that radius. A load at a radius between two rows gets the capacity of the **farther** row, never a value between them. Inside the first row, the first row's capacity holds. Beyond the last row the crane cannot lift at all. The radius that counts for a lift is the larger of the pick-up radius and the set radius.

A second crane is added the same way. Each lift goes to the first crane that can take it within your margin.

## What the plan does

- One lift per assembly: a beam with its end plates, a column with its base plate, a stair.
- The order follows the phases first, then tier by tier: columns, the beams they carry, braces, plates, stairs. A part is never lifted before what carries it.
- Each lift shows its weight (the model's gross weight, plus {{ui:Rigging added to each weight}}), its radius, the share of the chart it uses and the minute it starts.
- {{ui:Most of the chart a lift may use}} is your safety margin. A lift above it is marked **Over your margin**; above the chart, **Over the chart**; beyond the chart's last radius, **Past the chart**; and a part higher than the hook, **Hook too low**.

Holes and copes are not deducted from the weights, and bolts are covered by the rigging percentage.

## Problems

Every lift that is over, past, too high or set before what carries it appears in the {{ui:Problems}} panel. A beam with no connection to carry it is listed as needing temporary support.

## Save the movie

{{ui:Save movie}} writes one HTML file. Open it in any browser, on a phone too, with no network and no account: play and pause, drag the bar to any minute, turn the model with a finger, pinch to zoom. The caption names each lift, its weight, radius and share of the chart. The model is drawn as plain boxes: it shows the order and the lifts, not the true profiles.

The same table saves as a CSV with the {{ui:CSV}} button. The crane and chart are saved in the model file, and every change is one undo step.
