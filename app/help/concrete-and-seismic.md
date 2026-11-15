---
title: Check concrete members and make seismic loads
summary: Set up the bars of concrete beams and columns, check them to ACI 318-19, make equivalent lateral forces to ASCE 7-22 on rigid floors, and see storey drift. An aid for an engineer to check.
section: tasks
order: 42
keywords: concrete, reinforced concrete, ACI 318, ACI 318-19, rebar, beam, column, shear, ties, seismic, earthquake, equivalent lateral force, ELF, ASCE 7-22, drift, storey drift, floors, rigid diaphragm, story weight, utilisation, utilization, structural, engineer
---

The {{ui:Concrete members}} and {{ui:Seismic loads}} blocks in the {{ui:Analysis}} tab check reinforced concrete beams and columns, and make the sideways forces of an earthquake on the floors of a frame. Both follow the {{ui:Analysis}} tab's run and are saved with the model.

:::warning
The results are **for checking by an engineer**: an aid until one has reviewed it. Concrete checks use first-order forces, except that a column in a frame you call non-sway is designed for its magnified moment, with no sway magnification, no torsion design, no seismic detailing (ACI chapter 18) and no tie detailing. The seismic loads leave out the redundancy factor, the vertical seismic effect, torsional amplification and P-delta effects. Wind loads are not built yet.
:::

## Draw the members

Draw concrete members as rectangles: a {{ui:Plate}} profile such as `PL400x400` for a column and `PL300x600` for a beam gives the section. Columns and beams are placed like any other member.

## Set up the sections

The {{ui:Concrete members}} block lists every section the members use. Press {{ui:Set up as concrete…}} on the ones that are concrete. DetailCraft reads the width **b** (along the member's own y axis) and depth **h** (along z) from the drawn profile, then asks for:

- the **cover** to the centre of the bars, and the **top**, **bottom** and **side** bars (how many and which diameter) for a beam, or a **column cage** (bars along b and along h, which diameter, spiral ties) for a column;
- the **ties**: legs, diameter and spacing;
- what the member **acts as**: a beam, a column, or decided from its forces (a vertical member, or one carrying more than 0.10 f′c Ag, is a column).

Set f′c, the bar yield fy and the tie yield fyt (420 MPa at most counts for shear), K and whether the frame is sway or non-sway above them. A section set up as concrete is analysed as concrete: E = 4700 √f′c, 2400 kg/m³, and by default with **cracked sections** (columns 0.70 Ig, beams 0.35 Ig; ACI 318-19 Table 6.6.3.1.1(a)). Choose {{ui:Gross sections}} to turn that off.

## Make combinations and check

Give the load cases their kind, then {{ui:Make combinations}}: ACI 318-19 takes the strength combinations of ASCE 7 (§5.3.1). Press {{ui:Check concrete}} and every member gets a utilisation, coloured on the model like the steel checks: flexure and minimum steel (22.2, 9.6.1.2), tension-controlled strain (9.3.3.1), shear with the ties (22.5, 9.6.3), tie spacing, and axial load with moment for columns (22.4, with Bresler's method for two-way bending). A member where the drawn section differs from the b × h you typed reads *partly checked*, as does a slender column or torsion above the threshold: those are not designed.

Members over their capacity are listed in {{ui:Problems}}; accept one with a reason, or fix the section.

## Floors and seismic loads

A floor is a level where the frame is held together by a rigid slab (a **rigid diaphragm**). In the {{ui:Seismic loads}} block press {{ui:Find floors}}: it takes the levels where two or more beams meet. Then give each floor its **seismic weight**, typed or read: {{ui:Take weights from cases}} sums the vertical loads of the cases you give a factor (the dead case is 1; add 0.25 on a storage live case or snow on a flat roof as ASCE 7-22 12.7.2 asks). Each node's vertical load goes to the floor at or above it, so a column between two floors gives half its weight to each.

Fill in the design values: SDS, SD1, S1, R, Ie, Cd, TL, the structural system (for the period) and the risk category. {{ui:Make seismic cases}} then works out the period from the building height (12.8.2.1), the base shear V = Cs W (12.8.1), spreads it up the floors (12.8.3) and writes four load cases, in X and Y with the 5 % accidental torsion each way (12.8.4.2). The storey forces and the storey drift check (12.8.6, Table 12.12-1, the drift Cd δxe / Ie against 0.020 hsx) appear after a run; a drift over its limit is a problem too. Press {{ui:Make combinations}} again to bring the seismic cases into the combinations.

**The period from the analysis.** The approximate period Ta comes from the building's height. When you have run the analysis with the seismic cases, {{ui:Take the period from the analysis}} reads how far each floor moved under the forces and works out the period by Rayleigh's method, T = 2π √(Σ w δ² / (g Σ f δ)), once for X and once for Y; the seismic cases are made again with it. The period used is never more than Cu·Ta (ASCE 7-22 12.8.2), so a soft model cannot lower the base shear below that. Take the period again after the second run: it settles in a step or two. Un-tick {{ui:Period from the analysis}} to go back to Ta.

**Slender columns (ACI 318-19 6.6.4.5).** For a frame you call non-sway, a column whose k·ℓu/r is over 34 + 12·M1/M2 (at most 40) is designed for the magnified moment Mc = δns · M2: δns = Cm / (1 − Pu / 0.75 Pc), Pc = π² (EI)eff / (k ℓu)² with (EI)eff = 0.4 Ec Ig / (1 + βdns), and the minimum moment Pu (15 + 0.03 h). βdns (0.6 to start) is the share of the factored axial load that is sustained: type your own. A column whose Pu reaches 0.75 Pc fails with its own check. The report lists each slender column's numbers. In a **sway** frame a slender column is still "partly checked": its magnification needs a second-order analysis, which is not built.

**Slabs.** When the model has plates, a {{ui:Slab reinforcement}} block takes the plate moments of every strength combination and, by the Wood–Armer rule (bending and twisting together), works out the steel each layer needs per metre: bottom and top, in x and in y. You give the thickness, the cover and the bars; the table shows needed against given and the one-way shear against φVc, and a layer that falls short is a problem with its clause. Deflection, punching at columns and trimmer bars at openings are not covered, and a moment over a support converges slowly with four-node plates.

Every floor you list becomes a rigid diaphragm in the analysis: its beams carry no axial force from the floor's movement. The CraftScript export is not made for a model with floors.

## The report

{{ui:Report (PDF)}} and {{ui:Report (CSV)}} gain the concrete tables (assumptions, utilisation by member, every clause), the seismic parameters and base shear, the forces on the floors and the drift table.
