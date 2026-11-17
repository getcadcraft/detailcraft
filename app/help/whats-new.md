---
title: What's new in 0.10
summary: Real models open because the constructability check no longer runs over the whole model on open, clash checks between disciplines with BimCraft, and a drawing changelog for the tender and construction stage.
section: start
order: 5
keywords: whats new, what's new, 0.10, release notes, changelog, changes, version, new features, big models, open, constructability, constructability check, freeze, clash, clash check, disciplines, lod 350, interfaces, bimcraft, drawing changelog, issues, revisions, tender, construction stage, sample, regulations, pro layouts, tour
---

This is what changed in DetailCraft 0.10, compared with 0.9. It is a small release for this app: real models open, and clash checks and a drawing changelog work with BimCraft.

## New

- **Real models open.** The constructability check no longer runs over the whole model on open and after every edit, so a 2,820-member grid that never finished opening now opens. See [Constructability checks](topic:constructability).
- **Clash checks between disciplines** (LOD 350 interfaces) with BimCraft. See [Check for clashes](topic:clash-check).
- **A drawing changelog** for the tender and construction stage. See [Issues, revisions and the drawing changelog](topic:issues-and-revisions).

## Fixed

- Opening a sample threw "Cannot set property bytes of #<ChunkHistory> which has only a getter".
- The Regulations add-on's language files had drifted, and a pack with no rules could not be ticked.

## In every app

- **Docking tool groups.** In a layout with a ribbon, tool rows or a toolbox, a group of tools can be docked as a palette beside the model. See [Dock a group of tools](common:dock-tool-groups).
- **Four Pro layouts** (Ribbon, Workbench, Review, Studio) in an optional Pro skin, in {{ui:Settings}} › {{ui:Global}} › {{ui:Layout}}.
- **Tour tips** have one {{ui:Next}} button; the X closes the tour.

## Said plainly

- The open times were measured on a busy server, so no number is claimed here. The sample-open fix was not re-run in the real page.
- The clash rule module is tested in Node only in DetailCraft.
- Docking tool groups has not been tried on two monitors.
- The new tools were checked by automated tests in a browser, not yet by a person on a real project.
- Languages beyond English are machine drafts, and some words new in 0.10 are still English only.

For the version before this one, see [What's new in 0.9](topic:whats-new-0-9).
