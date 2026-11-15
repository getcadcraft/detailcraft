---
title: Constructability checks
summary: Problems for the things a detailer catches by eye: a bolt a wrench cannot reach, bolts too close for the socket, fillet welds outside their size limits, welds a torch cannot reach, and tubes that hold water.
section: reference
order: 30
keywords: constructability, wrench, socket, bolt access, tightening, weld size, fillet weld, minimum weld, maximum weld, water, vent hole, drain hole, galvanising, hollow section, problems
---

DetailCraft looks for four kinds of trouble that no strength check finds, and lists them in the {{ui:Problems}} panel. They are warnings and notes to look at, not errors: the model still builds.

## A bolt a wrench cannot reach

For every bolt, DetailCraft puts a socket over the head and over the nut. The socket is a cylinder as wide as the nut across its corners plus a wall of 4 mm, 60 mm long. If a beam web, a flange, a plate or a brace stands inside that cylinder, the problem names the connection, how many bolts, which part is in the way and how far from the bolt it is.

The socket is a typical impact socket. A spanner needs less room and a bigger tool more. Ask your connected assistant to run `constructability_check` with another `socketLength` to see how the answer changes.

## Bolts too close for the socket

A socket over one bolt must not touch the head of the next. The bolts of a connection that are nearer than the socket's width plus the neighbour's head are listed with the spacing found and the spacing needed.

## Fillet weld sizes

AISC 360-16 Table J2.4 sets the smallest fillet weld by the thickness of the thinner part (3 mm up to 6.35 mm thick, 5 mm to 12.7, 6 mm to 19.05, 8 mm above), and J2.2b the largest along an edge of material: no bigger than the material when it is thinner than 6.35 mm, otherwise 1.6 mm less. Connections with the same size on the same thickness are listed as one problem.

The thickness used is the thinnest part named by the weld, so an 8 mm weld all round a beam with a 6.35 mm web is listed.

## Water and vents

- An **open upper end** of a hollow section that stands upright or slopes by more than 10° lets rain in.
- A hollow section **closed at both ends** needs a vent and a drain hole; hot-dip galvanising and the pressure of heated air both ask for one.

## Can the welder reach it

A fillet weld is made with the torch half way between the two faces it joins. For each all-round fillet weld (an end plate, a base plate, a mitre plate) the check takes the member's section outline at the plate and, every 20 mm, runs a torch path out at 45° from where its nozzle (10 mm radius to start) first clears both faces, for another 30 mm. If the path meets the beam's own flange or another part, that share of the weld is listed with the part and the distance. These numbers are typical, not a standard's: ask your fabricator for the process and nozzle. Welds along two edges (a shear tab) are not located and are not checked.
