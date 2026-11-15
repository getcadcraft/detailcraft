---
title: Paste a copied area as a reference picture
summary: Copy part of a PDF sheet in MarkupCraft and paste it into DetailCraft at its true size, lying on a level under the steel, to model over it.
section: tasks
order: 46
keywords: picture, reference picture, underlay, background, copy area, markupcraft, pdf, trace, true size, scale, opacity, overlay
---

MarkupCraft's Copy area tool copies part of a sheet as a picture that knows how big it is. Paste it into DetailCraft and it lies flat on a level, at its true size, under the grid and the steel, so you can place members over a plan from the drawings.

## Paste it

1. In MarkupCraft, copy the area with {{ui:More}} › {{ui:Copy an area of the page…}}, then {{ui:Copy}} (or {{ui:Copy as overlay}}, which makes the paper see-through).
2. In DetailCraft (same browser), press {{key:Mod+V}} or choose {{ui:Paste}}.

The picture lands in the middle of the grid on the level shown in Plan (in 3D or an elevation, on the lowest level) and is selected. The status bar says how big it is.

- **True size:** when the sheet had a drawing scale, one pixel is drawn as the length it shows on the drawing.
- **Paper size:** when the sheet had no scale, the picture is as big as the area was on paper, and the status bar says so. Type a new **mm per pixel** in {{ui:Properties}} to scale it.

An area copied as an overlay starts at the opacity it was copied with.

{{key:Mod+V}} pastes whichever you copied last: the area from MarkupCraft, or members and footings copied in DetailCraft. If a different picture was copied to the clipboard after the area (from another program), nothing is pasted; copy the area again.

## Move, change and delete it

- Click the picture to select it (anything in front of it is picked first). A blue outline shows it is selected.
- Drag it to move it across the level. Its middle and corners snap onto grid intersections.
- In {{ui:Properties}}, type where its middle goes (x, y) and the level it lies at (z), its **mm per pixel** and its **opacity**.
- {{key:Delete}} or {{ui:Delete}} removes it.

Each paste, move, change and delete is one step: {{key:Mod+Z}} takes it back.

The picture is saved in the model file, so it opens with the model. It is a reference only: it is not in drawings, exports, the bill of materials or a copy.
