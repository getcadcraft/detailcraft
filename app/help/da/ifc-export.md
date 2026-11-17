---
title: Eksportér IFC til koordinering
summary: Skriv en IFC4-fil af hele modellen, stål, bolte, fundamenter og armering, til deling med arkitekter, ingeniører og anden software.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, importér ifc, huller, bolte, løse bolte, åbninger, fastgørelser, koordinering, modeludveksling, step, openbim, kollision, viewer
from: cfcb0cd6
---

IFC-eksporten skriver hele modellen som én IFC4-fil, som BIM-software og IFC-viewere kan åbne.

## Eksportér

1. Vælg {{ui:IFC}} i gruppen {{ui:Uddata}}.
2. Browseren downloader `<name>.ifc`. Statuslinjen siger, hvad der blev med, for eksempel »IFC4 eksporteret: 25 dele, 88 fastgørelser, 7 punktfundamenter, 132 armeringsstænger.«

Hvis modellen ikke har dele, fundamenter eller stænger, siger statuslinjen »Intet at eksportere endnu.«

## Hvad er i filen

| I DetailCraft | I IFC-filen |
|---|---|
| Hver etage | En bygningsetage (IfcBuildingStorey), under ét projekt, én grund og én bygning |
| Akser | En IfcGrid med dens akser og mærkater |
| Søjler, bjælker, afstivninger | IfcColumn, IfcBeam, IfcMember (afstivning), hver en ekstrudering af en standardprofilform med dens reelle mål |
| Plader, endeplader, fodplader | IfcPlate |
| Huller og udskæringer | Åbninger (IfcOpeningElement) skåret ud af delen |
| En stålprofil og dens svejste plader | En samling (IfcElementAssembly) mærket med samlingsmærket |
| Bolte og ankerbolte | IfcMechanicalFastener med diameter og længde |
| Fundamenter | IfcFooting (punktfundament), med betonteksten som materiale |
| Hver stang | IfcReinforcingBar med dens stangmærke, diameter, areal og længde, trukket langs dens rigtige centerlinje med rigtige buer ved bøjningerne |

Hver dels mærke er dens positionsnummer. Hvert element har også et egenskabssæt »DetailCraft« med sine mærker, profil og vægt. Hvert element sidder i den højeste etage ved eller under sit laveste punkt. Materialer grupperes efter kvalitet.

## Stabile id'er ved gen-eksport

Hvert elements IFC-id (GlobalId) udregnes ud fra modelnavnet og elementets eget id i modellen. Eksporteres den samme model to gange, passer id'erne, så software der sammenligner versioner kan se, hvad der er ændret.

:::warning
Omdøbning af modellen ændrer hvert id. Behold modelnavnet mellem udgaver af et projekt.
:::

## Kontrollér den

DetailCraft's IFC-filer læses tilbage af en uafhængig IFC-læser i dets testpakke. Programmer læser IFC forskelligt, så åbn filen i den software, dit team bruger, før du stoler på den. CadCrafts app BimCraft åbner også IFC-filer.

## Ikke endnu

- At hente forbindelser, fundamenter og armering ind fra en IFC-fil. {{ui:Importér IFC}} henter bjælker, søjler, stålprofiler, plader, akser, etager, huller, udskæringer og bolte, og viser en liste over det, den lod være.
- Analytiske eller konstruktionsanalytiske data.
- Alt andet end IFC4-referencevisningen.

## Import

{{ui:Importér IFC}} i gruppen {{ui:Fil}} (eller at slippe en `.ifc`-fil på visningen) laver en ny model ud fra en IFC2X3- eller IFC4-fil:

- **Bjælker, søjler, stålprofiler (afstivninger) og plader**, hvis krop er én ekstruderet profil DetailCraft kender, matchet med kataloget eller bevaret som brugerprofil; **akser** og **etager** fra filens akse- og etagedata.
- **Huller:** hver rund åbning (IfcOpeningElement der hulner en del, der blev importeret), vinkelret på en af delens flader: en I-profils eller U-profils liv eller flanger, et rørs vægge, en plade, en vinkels ben. Et hul gennem begge vægge på et rør kommer ind én gang.
- **Udskæringer:** en rektangulær åbning, der tager hele bredden af en I-profil eller U-profil fra den ene ende, nedefra eller opefra.
- **Bolte:** hver IfcMechanicalFastener eller IfcFastener, med diameter, længde, kvalitet og type (bolt eller ankerbolt), som en **løs bolt**. Løse bolte vises i visningen, stykliste og IFC-eksporten, og bliver på deres plads, når du flytter stålprofiler. {{ui:Egenskaber}}-panelet, når intet er valgt, tæller dem og har {{ui:Fjern løse bolte}}, til når du i stedet tilføjer forbindelser.

Rapporten viser alt andet efter klasse med årsagen til, at det blev udeladt: vægge og dæk, fundamenter og stænger, slidsede huller, huller i runde rør, forbindelser (en IFC-fil medbringer deres plader og bolte, ikke reglen der lavede dem).
