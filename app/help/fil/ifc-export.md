---
title: I-export ang IFC para sa coordination
summary: Sumulat ng IFC4 file ng buong model, bakal, bolt, footing at rebar, para ibahagi sa mga arkitekto, inhinyero at iba pang software.
keywords: ifc, ifc4, ifc2x3, bim, export, import, import ifc, butas, bolts, maluwag na bolt, openings, fasteners, coordination, palitan ng model, step, openbim, clash, viewer
from: cfcb0cd6
---

Isinusulat ng IFC export ang buong model bilang isang IFC4 file na mabubuksan ng BIM software at mga IFC viewer.

## I-export

1. Piliin ang {{ui:IFC}} sa grupong {{ui:Output}}.
2. Dina-download ng browser ang `<name>.ifc`. Sinasabi ng status bar kung ano ang isinama, halimbawa "Na-export ang IFC4: 25 part, 88 fastener, 7 footing, 132 bar."

Kung walang part, footing o bar ang model, sinasabi ng status bar na "Wala pang ie-export."

## Ano ang nasa file

| Sa DetailCraft | Sa IFC file |
|---|---|
| Bawat level | Isang building storey (IfcBuildingStorey), sa ilalim ng iisang project, site at building |
| Grids | Isang IfcGrid na may mga axis at label nito |
| Columns, beams, braces | IfcColumn, IfcBeam, IfcMember (brace), bawat isa ay extrusion ng standard profile shape na may totoong sukat nito |
| Plates, end plates, base plates | IfcPlate |
| Holes and copes | Openings (IfcOpeningElement) na pinutol mula sa part |
| Isang member at mga plato nitong dinikitan | Isang assembly (IfcElementAssembly) na may tag na assembly mark |
| Bolts and anchor rods | IfcMechanicalFastener na may diameter at haba |
| Footings | IfcFooting (pad footing), na may teksto ng kongkreto bilang materyal nito |
| Bawat bar | IfcReinforcingBar na may bar mark, diameter, area at haba, dumadaan sa totoong centerline nito, na may totoong arko sa mga liko |

Ang tag ng bawat part ay ang part mark nito. Bawat elemento ay may dala ring property set na "DetailCraft" na may mga mark, profile at timbang nito. Nasa pinakamataas na storey na nasa o mas mababa sa pinakamababang punto nito ang bawat elemento. Ipinapangkat ang mga materyal ayon sa grade.

## Matatag na id para sa muling pag-export

Hinango ang IFC id (GlobalId) ng bawat elemento mula sa pangalan ng model at sa sarili nitong id sa model. I-export ang parehong model nang dalawang beses at magtutugma ang mga id, kaya matutukoy ng software na naghahambing ng mga bersyon kung ano ang nagbago.

:::warning
Binabago ng pagpapalit ng pangalan ng model ang bawat id. Panatilihing pareho ang pangalan ng model sa pagitan ng mga isyu ng isang project.
:::

## Suriin ito

Binabasa muli ng isang independent na IFC reader sa test suite ng DetailCraft ang mga IFC file nito. Nagkakaiba ang mga program sa pagbasa ng IFC, kaya buksan ang file sa software na ginagamit ng team ninyo bago ka umasa rito. Nagbubukas din ng mga IFC file ang BimCraft app ng CadCraft.

## Hindi pa

- Pag-import ng mga connection, footing at rebar mula sa IFC file. Dinadala ng {{ui:Import IFC}} ang mga biga, column, member, plato, grid, level, butas, copes at bolt, at inililista kung ano ang iniwan nito.
- Analytical o structural-analysis data.
- Anumang iba pa sa IFC4 reference view.

## Import

Ang {{ui:Import IFC}} sa grupong {{ui:File}} (o pag-drop ng `.ifc` file sa view) ay gumagawa ng bagong model mula sa IFC2X3 o IFC4 file:

- **Mga biga, column, member (brace) at plato** na ang body ay iisang extruded profile na kilala ng DetailCraft, tumutugma sa catalog o itinatago bilang custom profile; **grids** at **levels** mula sa grid at storey ng file.
- **Butas:** bawat round opening (IfcOpeningElement na nagva-void sa part na pumasok) na parisukat sa isa sa mga mukha ng part: web o flange ng I-shape o channel, mga wall ng tube, plato, o leg ng angle. Ang butas na dumadaan sa parehong wall ng tube ay pumapasok nang isang beses.
- **Copes:** parihabang opening na kumukuha sa buong lapad ng I-shape o channel mula sa isang dulo, pababa mula sa itaas o paitaas mula sa ibaba.
- **Bolts:** bawat IfcMechanicalFastener o IfcFastener, may diameter, haba, grade at uri nito (bolt o anchor rod), bilang **loose bolt**. Lumalabas ang mga loose bolt sa view, sa bill of materials at sa IFC export, at nananatili kung nasaan sila kapag inilipat mo ang mga member. Binibilang sila ng panel na {{ui:Properties}} kapag walang napili, at may {{ui:Alisin ang maluwag na bolt}} para sa mga pagkakataong nagdaragdag ka ng connection sa halip.

Inililista ng ulat ang lahat ng iba pa ayon sa klase, kasama ang dahilan kung bakit iniwan ang mga ito: wall at slab, footing at bar, slotted hole, butas sa round tube, connection (dinadala ng IFC file ang kanilang plato at bolt, hindi ang panuntunang lumikha sa mga ito).
