---
title: Eksporter IFC for koordinering
summary: Skriv en IFC4-fil av hele modellen, stål, bolter, fundamenter og armering, for deling med arkitekter, ingeniører og annen programvare.
keywords: ifc, ifc4, ifc2x3, bim, eksport, import, importer ifc, hull, bolter, løse bolter, åpninger, festemidler, koordinering, modellutveksling, step, openbim, kollisjon, visningsprogram
from: cfcb0cd6
---

IFC-eksporten skriver hele modellen som én IFC4-fil som BIM-programvare og IFC-visningsprogrammer kan åpne.

## Eksporter

1. Velg {{ui:IFC}} i gruppen {{ui:Utdata}}.
2. Nettleseren laster ned `<name>.ifc`. Statuslinjen sier hva som ble med, for eksempel «IFC4 eksportert: 25 deler, 88 festemidler, 7 fundamenter, 132 armeringsjern.»

Hvis modellen ikke har deler, fundamenter eller armeringsjern, sier statuslinjen «Ingenting å eksportere ennå.»

## Hva som er i filen

| I DetailCraft | I IFC-filen |
|---|---|
| Hver etasje | En bygningsetasje (IfcBuildingStorey), under ett prosjekt, én tomt og ett bygg |
| Akser | En IfcGrid med aksene og merkelappene |
| Søyler, bjelker, avstivninger | IfcColumn, IfcBeam, IfcMember (avstivning), hver en ekstrudering av en standard profilform med de virkelige målene |
| Plater, endeplater, fotplater | IfcPlate |
| Hull og utklinkninger | Åpninger (IfcOpeningElement) kuttet fra delen |
| En stav og dens sveiste plater | En sammenstilling (IfcElementAssembly) merket med sammenstillingsmerket |
| Bolter og ankerstenger | IfcMechanicalFastener med diameter og lengde |
| Fundamenter | IfcFooting (pute-fundament), med betongtekst som materiale |
| Hver armeringsstang | IfcReinforcingBar med sitt posisjonsnummer, diameter, areal og lengde, feid langs sin virkelige senterlinje med ekte buer i bøyene |

Hver delens merkelapp er delenummeret. Hvert element har også et egenskapssett «DetailCraft» med sine merker, profil og vekt. Hvert element står i den høyeste etasjen ved eller under sitt laveste punkt. Materialer grupperes etter kvalitet.

## Stabile ID-er for nye eksporter

Hvert elements IFC-ID (GlobalId) regnes ut fra modellnavnet og elementets egen ID i modellen. Eksporterer du samme modell to ganger, stemmer ID-ene, slik at programvare som sammenligner versjoner kan se hva som er endret.

:::warning
Å gi modellen nytt navn endrer hver ID. Behold modellnavnet likt mellom utgavene av et prosjekt.
:::

## Kontroller den

DetailCraft sine IFC-filer leses tilbake av en uavhengig IFC-leser i testpakken. Programmer leser IFC ulikt, så åpne filen i programvaren teamet ditt bruker før du stoler på den. Appen BimCraft fra CadCraft åpner også IFC-filer.

## Ikke ennå

- Å hente tilkoblinger, fundamenter og armering inn fra en IFC-fil. {{ui:Importer IFC}} henter inn bjelker, søyler, avstivninger, plater, akser, etasjer, hull, utklinkninger og bolter, og lister det den lot være.
- Analytiske data eller data for konstruksjonsanalyse.
- Alt annet enn IFC4-referansevisningen.

## Import

{{ui:Importer IFC}} i gruppen {{ui:Fil}} (eller ved å slippe en `.ifc`-fil på visningen) lager en ny modell fra en IFC2X3- eller IFC4-fil:

- **Bjelker, søyler, avstivninger (braces) og plater** der kroppen er én ekstrudert profil DetailCraft kjenner, koblet til katalogen eller beholdt som egendefinert profil; **akser** og **etasjer** fra filens akse- og etasjedata.
- **Hull:** hvert runde hull (IfcOpeningElement som gjør hull i en del som ble importert) normalt på en av delens flater: en I-profils eller U-profils liv eller flenser, et rørs vegger, en plate, et vinkeljerns ben. Et hull gjennom begge veggene i et rør kommer inn én gang.
- **Utklinkninger:** en rektangulær åpning som tar hele bredden av en I-profil eller U-profil fra én ende, nedover fra toppen eller oppover fra bunnen.
- **Bolter:** hver IfcMechanicalFastener eller IfcFastener, med diameter, lengde, kvalitet og type (bolt eller ankerstang), som **løs bolt**. Løse bolter vises i visningen, stykklisten og IFC-eksporten, og blir stående der de er når du flytter stavene. Panelet {{ui:Egenskaper}}, uten noe valgt, teller dem og har {{ui:Fjern løse bolter}} for når du legger til forbindelser i stedet.

Rapporten lister alt annet etter klasse, med årsaken til at det ble utelatt: vegger og dekker, fundamenter og armeringsjern, sporede hull, hull i runde rør, forbindelser (en IFC-fil har med platene og boltene deres, ikke regelen som laget dem).
