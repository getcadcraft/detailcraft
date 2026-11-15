---
title: Make shop drawings
summary: One sheet per part mark, made all at once: preview any of them and download one sheet or the whole set as a PDF on A4 to A1 or ANSI B to D, with holes, copes, dimensions and title block.
section: tasks
order: 110
keywords: shop drawing, shop drawings, all parts, batch, whole set, single part drawing, fabrication drawing, pdf, detail drawing, piece drawing, print
---

DetailCraft makes one sheet per part mark, for every member and plate in the model, all at once: you do not need to select them one by one. Identical pieces share a mark, so they share a sheet. The sheets are made on the spot from the model; they are not stored or edited.

## Make the whole set

1. Choose {{ui:Shop drawing}} in the {{ui:Output}} group. Nothing needs to be selected. With a part selected, the window opens on that part's sheet. In the {{ui:Properties}} panel the same button is called {{ui:Shop drawing}} for members and {{ui:Plate drawing}} for connections.
2. A preview opens, titled with the part mark, for example "Shop drawing b1". The first list next to the title holds every part mark with its profile, length and quantity: choose one to see its sheet. The second list changes the sheet size; the whole set is made again on it (see [General-arrangement and assembly drawings](topic:drawings#choose-the-sheet-size)).
3. Choose {{ui:Download all}} for one PDF with a page per part mark, `<name> Shop drawings.pdf`. Each sheet says "Sheet 3 of 42" in its title block. Or choose {{ui:Download this sheet}} for the one you are looking at, `<name> <mark>.pdf`.
4. Close the preview with the × or {{key:Esc}}.

If {{ui:Shop drawing}} is grayed out, the model has no parts yet.

## What is on the sheet

For an I-shape:

- **Elevation**, looking at the web: the part with its copes notched, web holes as circles and flange holes as hidden (dashed) lines.
- **Top flange plan**, seen from above, when any flange has holes. Bottom-flange holes show dashed.
- **Section** through the profile.
- **Dimensions:** chained hole positions along the part plus the overall length, web hole heights, the gauge, and cope sizes.
- **Hole list:** each group of holes, for example "8 x Ø22 in the top flange".
- **Weld**, when the part has plates welded to it.
- **Title block:** part mark, assembly mark, profile, material, length, quantity, weight each and total, model name and date.

For a channel, angle or hollow section the sheet is the same, looking at the web or the side: a tube's walls are hidden (dashed) lines, the section gives the wall thickness.

For a plate: the plate face with its holes, and its edge as the section.

## Scales

The scale is picked from a list (1:1 up to 1:200) so the part fits the sheet. A long, shallow part would be too thin to read at one scale, so when the depth would come out under 30 mm on paper the depth is drawn at a larger scale than the length. The view title then says so, for example "length 1:20, depth 1:5 (not to one scale; dimensions govern)". Always read sizes from the dimensions, not by measuring the sheet.

## Things to know

- The quantity is the number of parts with that mark in the model. Marks can renumber after a change; see [Check marks and the bill of materials](topic:marks-and-bom).
- Each sheet is one part on its own, without weld symbols; assembly drawings (with weld symbols) and general arrangement drawings are in [Drawings](topic:drawings). The sheet cannot be edited or annotated in DetailCraft. To mark it up, open the PDF in a PDF markup app such as MarkupCraft.
- The title block says "DetailCraft lab build — millimeters".
- Text uses the standard PDF Helvetica font. Characters outside the Western European set print as "?", and the status bar counts them.

## Print it

Open the downloaded PDF in your PDF viewer and print it at 100% (no "fit to page") on paper of the size you chose if you want the stated scales to hold. On a smaller sheet, scale it and rely on the dimensions.
