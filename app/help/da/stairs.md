---
title: Trapper
summary: Placér en lige ståltrappe ud fra dens stighøjde, trinddybde og bredde: to trappevanger og trinplader, én svejst samling.
keywords: trappe, trapper, trappevange, trin, stigtrin, trinddybde, næsing, trappeløb, ståltrappe, ibc 1011, blondel
from: 62fa3845
---

En lige ståltrappe: to trappevanger (kanaler med tæerne indad, eller fladjern stillet på kant) og en pladetrin ved hvert trin, svejst mellem dem. DetailCraft udregner antallet af stigtrin ud fra stighøjden, kontrollerer dem mod bygningsreglementets grænser og laver trappen som én samling i værkstedet.

## Placér en trappe

1. Vælg {{ui:Trappe}} i gruppen {{ui:Placér}}, eller tryk {{key:S}}.
2. Indstil trappen til højre: **stigretningen** (0° stiger langs +x, 90° langs +y), **stighøjden** (0 = op til næste niveau), **trinddybden**, det **frie mål** mellem trappevangerne, det **højeste tilladte stigtrin**, **trappevangen**, **trinpladens tykkelse**, **næsingen** og materialet.
3. Klik på et akseskæringspunkt: det er foden af det første stigtrin, på trappens midterlinje.

Statuslinjen siger, hvor mange stigtrin den lavede. Vælg trappen (klik på en trappevange eller et trin) for at ændre nogen af dens indstillinger, dens position eller dens fase; egenskaberne viser også stigtrin, trin, løbelængde, hældning og 2 × stigtrin + trinddybde.

## Hvad DetailCraft udregner

- **Stigtrin.** Så få som holder hvert stigtrin ved eller under det højeste tilladte: en stighøjde på 3000 mm ved højst 178 mm giver 17 stigtrin à 176.5 mm. Der er ét trin færre end stigtrin (øverste etage er sidste trin).
- **Trin.** En plade trinddybde + næsing dyb (280 + 25 = PL6x305 som standard) og lige så lang som det frie mål, dens top ved hver stigtrinshøjde, dens forkant (næsingen) foran stigtrinslinjen.
- **Trappevanger.** I trappens hældning, fra hvor de møder den nedre etage til hvor de møder den øvre, lige uden for det frie mål, deres øverste kant 50 mm over linjen af næsingerne. En kanals tæer vender ind mod trappen; et fladjern såsom PL12x250 står på kant.
- **Svejsninger.** Hvert trin til begge trappevanger. Trinene og den højre trappevange er svejst til den venstre trappevange, så trappen får ét samlingsmærke (ST1) og sin egen samlingstegning; trappevangerne får positionsnumre st…, trinene p….
- **Kontroller.** Advarsler, når et stigtrin ligger uden for 4 til 7 in. (102 til 178 mm) eller trinddybden er under 11 in. (279 mm), grænserne i IBC 2021 afsnit 1011.5.2; når 2 × stigtrin + trinddybde ligger uden for 600 til 650 mm (en almindelig komfortregel); og når trappevangen er for lav til at bære trinene. En ukendt trappevangeprofil forhindrer, at trappen bygges.

## Godt at vide

- Flyt, roter, spejl, kopiér, indsæt, slet og faser virker på en trappe, som på en stålprofil. En rotation drejer klatringen; en spejling sender den den spejlede vej.
- Trappevanger eksporteres til IFC som IfcMember og trin som IfcPlate; begge går til NC-filer og stykliste. Kollisionstjekket lader trappens egne dele være i fred (de er svejst sammen).
- Denne simple trappe er ét løb med pladetrin. For repos, håndlister med balustre, trin i foldet bakke eller riste, et regelsæt du vælger, en tilskæringsliste og hulteningerne i trappevangen, sæt kryds ved {{ui:Brug generatoren for ståltrapper}} i trappeværktøjet (se Generator for ståltrapper).
- Trappevangerne er skåret vinkelret: deres endeskæringer mod etagerne er ikke lavet.
- DetailCraft dimensionerer ikke trappen: trappevangerne og trinene kontrolleres ikke for styrke eller nedbøjning.
