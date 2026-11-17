---
title: Voer IFC uit vir koördinasie
summary: Skryf 'n IFC4-lêer van die hele model, staal, bouts, fondasies en wapening, om met argiteke, ingenieurs en ander sagteware te deel.
keywords: ifc, ifc4, ifc2x3, bim, uitvoer, invoer, voer ifc in, gate, bouts, los bouts, openings, bevestigers, koördinasie, modeluitruil, step, openbim, botsing, kyker
from: cfcb0cd6
---

Die IFC-uitvoer skryf die hele model as een IFC4-lêer wat BIM-sagteware en IFC-kykers kan oopmaak.

## Uitvoer

1. Kies {{ui:IFC}} in die {{ui:Output}}-groep.
2. Die blaaier laai `<name>.ifc` af. Die statusbalk sê wat ingegaan het, byvoorbeeld "IFC4 uitgevoer: 25 onderdele, 88 bevestigers, 7 fondasies, 132 wapeningstawe."

As die model geen onderdele, fondasies of stawe het nie, sê die statusbalk "Niks om uit te voer nie."

## Wat in die lêer is

| In DetailCraft | In die IFC-lêer |
|---|---|
| Elke vlak | 'n Gebouverdieping (IfcBuildingStorey), onder een projek, terrein en gebou |
| Roosters | 'n IfcGrid met sy asse en etikette |
| Kolomme, balke, diagonale | IfcColumn, IfcBeam, IfcMember (diagonaal), elk 'n ekstrusie van 'n standaardprofielvorm met sy werklike afmetings |
| Plate, eindplate, basisplate | IfcPlate |
| Gate en uitsnyings | Openings (IfcOpeningElement) uit die onderdeel gesny |
| 'n Lid en sy gesweisde plate | 'n Samestelling (IfcElementAssembly) gemerk met die samestellingsmerk |
| Bouts en ankerstawe | IfcMechanicalFastener met deursnee en lengte |
| Fondasies | IfcFooting (padfondasie), met die betonteks as sy materiaal |
| Elke staaf | IfcReinforcingBar met sy staafmerk, deursnee, oppervlakte en lengte, langs sy ware middellyn gevee met werklike boë by die buiging |

Elke onderdeel se etiket is sy deelmerk. Elke element dra ook 'n "DetailCraft"-eienskapstel met sy merke, profiel en gewig. Elke element sit in die hoogste verdieping op of onder sy laagste punt. Materiale word volgens graad gegroepeer.

## Stabiele ID's vir hervoere

Elke element se IFC-ID (GlobalId) word uit die modelnaam en die element se eie ID in die model bereken. Voer dieselfde model twee keer uit, en die ID's pas; sagteware wat weergawes vergelyk, kan dus sien wat verander het.

:::warning
As die model hernoem word, verander elke ID. Hou die modelnaam dieselfde tussen uitgawes van 'n projek.
:::

## Kontroleer dit

DetailCraft se IFC-lêers word teruggelees deur 'n onafhanklike IFC-leser in sy toetsreeks. Programme verskil in hoe hulle IFC lees, so maak die lêer oop in die sagteware wat jou span gebruik voordat jy daarop staatmaak. CadCraft se BimCraft-program maak ook IFC-lêers oop.

## Nog nie

- Verbindings, fondasies en wapening uit 'n IFC-lêer invoer. {{ui:Import IFC}} bring balke, kolomme, lede, plate, roosters, vlakke, gate, uitsnyings en bouts in, en lys wat dit gelaat het.
- Analitiese of struktuuranalise-data.
- Enigiets anders as die IFC4-verwysingsaansig.

## Invoer

{{ui:Import IFC}} in die {{ui:File}}-groep (of 'n `.ifc`-lêer op die aansig sleep) maak 'n nuwe model uit 'n IFC2X3- of IFC4-lêer:

- **Balke, kolomme, lede (diagonale) en plate** waarvan die liggaam een geëkstrueerde profiel is wat DetailCraft ken, gepas by die katalogus of as 'n pasgemaakte profiel behou; **roosters** en **vlakke** uit die lêer se rooster en verdiepings.
- **Gate:** elke ronde opening (IfcOpeningElement wat 'n onderdeel wat ingekom het, omvou) vierkant op een van die onderdeel se vlakke: 'n I-profiel se of kanaal se lyf of flense, 'n buis se wande, 'n plaat, 'n hoek se bene. 'n Gat deur albei wande van 'n buis kom een keer in.
- **Uitsnyings:** 'n reghoekige opening wat die volle breedte van 'n I-profiel of kanaal vanaf een ent neem, af vanaf die bo of op vanaf die onder.
- **Bouts:** elke IfcMechanicalFastener of IfcFastener, met sy deursnee, lengte, graad en soort (bout of ankerstaaf), as 'n **los bout**. Los bouts wys in die aansig, die materiaallys en die IFC-uitvoer, en bly waar hulle is wanneer jy lede skuif. Die {{ui:Properties}}-paneel, met niks gekies nie, tel hulle en het {{ui:Remove loose bolts}} vir wanneer jy verbindings in plaas daarvan byvoeg.

Die verslag lys al die ander dinge per klas, met die rede waarom dit weggelaat is: mure en plate, fondasies en stawe, geslote gate, gate in ronde buise, verbindings ('n IFC-lêer dra hul plate en bouts, nie die reël wat hulle gemaak het nie).
