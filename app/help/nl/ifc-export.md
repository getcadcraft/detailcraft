---
title: IFC exporteren voor coördinatie
summary: Schrijf een IFC4-bestand van het hele model, staal, bouten, funderingen en wapening, om te delen met architecten, ingenieurs en andere software.
keywords: ifc, ifc4, ifc2x3, bim, exporteren, importeren, ifc importeren, gaten, bouten, losse bouten, openingen, bevestigingsmiddelen, coördinatie, modeluitwisseling, step, openbim, clash, viewer
from: cfcb0cd6
---

De IFC-export schrijft het hele model als één IFC4-bestand dat BIM-software en IFC-viewers kunnen openen.

## Exporteren

1. Kies {{ui:IFC}} in de groep {{ui:Uitvoer}}.
2. De browser downloadt `<name>.ifc`. De statusbalk meldt wat erin is gegaan, bijvoorbeeld "IFC4 geëxporteerd: 25 onderdelen, 88 bevestigingsmiddelen, 7 funderingen, 132 wapeningsstaven."

Als het model geen onderdelen, funderingen of wapeningsstaven heeft, meldt de statusbalk "Nog niets om te exporteren."

## Wat er in het bestand zit

| In DetailCraft | In het IFC-bestand |
|---|---|
| Elke verdieping | Een gebouwverdieping (IfcBuildingStorey), onder één project, terrein en gebouw |
| Assen | Een IfcGrid met zijn assen en labels |
| Kolommen, balken, verbanden | IfcColumn, IfcBeam, IfcMember (verband), elk een extrusie van een standaardprofiel met de echte afmetingen |
| Platen, eindplaten, voetplaten | IfcPlate |
| Gaten en copings | Openingen (IfcOpeningElement) uit het onderdeel gesneden |
| Een staaf en zijn gelaste platen | Een samenstelling (IfcElementAssembly) met het samenstellingsmerk |
| Bouten en ankerbouten | IfcMechanicalFastener met diameter en lengte |
| Funderingen | IfcFooting (puntfundering), met de betontekst als materiaal |
| Elke wapeningsstaaf | IfcReinforcingBar met zijn staafmerk, diameter, oppervlak en lengte, langs de echte hartlijn gezet, met echte bogen in de buigingen |

Het merk van elk onderdeel is zijn onderdeelmerk. Elk element draagt ook een eigenschapsset "DetailCraft" met zijn merken, profiel en gewicht. Elk element hoort bij de hoogste verdieping op of onder zijn laagste punt. Materialen zijn gegroepeerd op kwaliteit.

## Stabiele id's bij opnieuw exporteren

Het IFC-id (GlobalId) van elk element wordt bepaald uit de modelnaam en het eigen id van het element in het model. Exporteert u hetzelfde model twee keer, dan komen de id's overeen, zodat software die versies vergelijkt kan zien wat er is veranderd.

:::warning
Het hernoemen van het model verandert elk id. Houd de modelnaam gelijk tussen de uitgiften van een project.
:::

## Controleren

De IFC-bestanden van DetailCraft worden in de testsuite teruggelezen door een onafhankelijke IFC-lezer. Programma's verschillen in hoe ze IFC lezen; open het bestand dus in de software die uw team gebruikt voordat u erop vertrouwt. De BimCraft-app van CadCraft opent ook IFC-bestanden.

## Nog niet

- Verbindingen, funderingen en wapening uit een IFC-bestand inlezen. {{ui:IFC importeren}} haalt balken, kolommen, verbanden, platen, assen, niveaus, gaten, copings en bouten binnen, en toont een lijst van wat het heeft overgeslagen.
- Analytische of constructieve-analysegegevens.
- Alles behalve de IFC4-referentieweergave.

## Importeren

{{ui:IFC importeren}} in de groep {{ui:Bestand}} (of een `.ifc`-bestand op de weergave slepen) maakt een nieuw model van een IFC2X3- of IFC4-bestand:

- **Balken, kolommen, verbanden en platen** waarvan het lichaam één geëxtrudeerd profiel is dat DetailCraft kent, gekoppeld aan de catalogus of bewaard als eigen profiel; **assen** en **niveaus** uit de assen en verdiepingen van het bestand.
- **Gaten:** elke ronde opening (IfcOpeningElement die een ingelezen onderdeel doorboort) loodrecht op een van de vlakken van het onderdeel: het lijf of de flenzen van een I- of U-profiel, de wanden van een buis, een plaat, de benen van een hoekprofiel. Een gat door beide wanden van een buis komt één keer binnen.
- **Copings:** een rechthoekige opening die de volle breedte van een I- of U-profiel vanaf één eind neemt, van boven naar beneden of van onder naar boven.
- **Bouten:** elk IfcMechanicalFastener of IfcFastener, met diameter, lengte, kwaliteit en soort (bout of ankerbout), als **losse bout**. Losse bouten zijn zichtbaar in de weergave, de stuklijst en de IFC-export, en blijven staan wanneer u staven verplaatst. Het paneel {{ui:Eigenschappen}}, met niets geselecteerd, telt ze en heeft {{ui:Losse bouten verwijderen}} voor als u in plaats daarvan verbindingen toevoegt.

Het rapport somt al het overige per klasse op, met de reden waarom het is overgeslagen: muren en vloeren, funderingen en wapening, sleufgaten, gaten in ronde buizen, verbindingen (een IFC-bestand bevat hun platen en bouten, maar niet de regel die ze heeft gemaakt).
