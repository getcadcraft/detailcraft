---
title: Overzichts- en montagetekeningen
summary: Maak plattegronden, gevels en één montagetekening per montagemarkering uit het model, op A4 tot A1 of ANSI B tot D bladen; geef ze uit met revisieletters en download ze als PDF, DWG of DXF.
keywords: verborgen lijnen, verborgen lijn verwijderen, gestreept, revisiewolk, wolken, revisiedriehoek, verankeringsplattegrond, ankerbouten, ankerstaven, staat ankerstaven, staat voetplaten, uitzetten, uitgeven, revisie, revisietabel, opnieuw uitgeven, uitgavelog, transmittal, dwg, dxf, cad-bestand, tekeningen exporteren, tekeningen, overzichtstekening, plattegrond, gevel, montagetekening, bladformaat, papierformaat, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, afdrukken, schaal, titelblok, modelref
from: 709f8604
---

Kies {{ui:Drawings}} in de groep {{ui:Output}}. DetailCraft maakt de hele set uit het model zoals het nu is. Er wordt niets opgeslagen: wijzig het model, open {{ui:Drawings}} opnieuw, en de set wordt opnieuw gemaakt.

## Wat er in de set zit

- **Plattegronden**, één per niveau dat iets bevat, van bovenaf gezien.
- **Gevels**, één per rasterlijn met staven binnen 1 m ervan.
- **De verankeringsplattegrond**, wanneer het model voetplaten heeft: elke voetplaat van bovenaf gezien met zijn kolom en ankerstaven, de rasters met hun maten, een typisch detail van elk stavenpatroon (BP1, BP2 …) met de stavafstand en randafstanden, en twee staten: de ankerstaven per markering (R1, R2 …: aantal, diameter, lengte, uitsteeksel boven de plaat, inbedding, kwaliteit) en de voetplaten per raster (kolom, patroon, plaat, staven, bovenkant van de plaat). Een kolom buiten het raster wordt op zijn coördinaten geplaatst.
- **Montagetekeningen**, één per montagemarkering: voor-, boven- en zijaanzichten, geketende maten naar gaten en plaatranden, de onderdeellijst, losse bouten en staven, en opmerkingen over lassen en gaten. Elke gelaste plaat heeft in het voorachtaanzicht een hoeklasymbool (AWS A2.4): de pijl wijst naar de verbinding, de driehoek onder de referentielijn betekent de pijlzijde, het getal links ervan is de lasmaat in mm, en een cirkel waar de pijl de lijn raakt betekent rondom.

**Verborgen lijnen.** Plattegronden en gevels laten de lijnen van een onderdeel weg waar een onderdeel dat er volledig vóór staat het bedekt (een ligger van de kant gezien achter een kolom). Montagetekeningen tekenen een plaat gestreept waar het hoofdonderdeel hem bedekt: achter het lijf in het voor-aanzicht (gezien vanaf de −u-zijde van het onderdeel), onder de bovenflens in het bovenaanzicht. Onderdelen die op dezelfde diepte staan of elkaar in diepte overlappen, worden allebei volledig getekend.

Elk blad heeft een titelblok met het tekeningnummer, de schaal, de modelnaam, de datum, het bladnummer met het bladformaat, en de modelref: een code die uit het opgeslagen model wordt gemaakt, zodat een afdruk kan worden gekoppeld aan het model waar hij vandaan komt.

## Kies het bladformaat

Kies het formaat in de lijst bovenaan het venster {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) of {{ui:ANSI D}} (22 × 34 in). Elk blad is liggend. De set wordt meteen opnieuw gemaakt op het nieuwe formaat, en hetzelfde formaat wordt gebruikt voor werkplaatstekeningen. Het staat ook in [DetailCraft-instellingen](topic:settings#drawings), en deze browser onthoudt het.

- Een groter blad tekent op een grotere schaal. Schalen zijn altijd standaardschalen (1:10, 1:20, 1:25, 1:50, 1:100 enzovoort).
- Tekst blijft even groot op elk blad, zodat hij leesbaar blijft wanneer u afdrukt.
- Op een klein blad kan een lange, dunne montage over de diepte een grotere schaal krijgen dan over de lengte. De aanzichttitel vermeldt dan beide schalen, en de maten zijn leidend.

## Tekeningen uitgeven en revisies

De regel boven het voorbeeld zegt waar het getoonde blad staat: **Nog niet uitgegeven**, **Rev B, uitgegeven …; sindsdien ongewijzigd**, of, in rood, **Gewijzigd sinds rev B: moet opnieuw worden uitgegeven**. De bladenlijst markeert uitgegeven bladen met hun revisie, en de bladen die opnieuw moeten worden uitgegeven.

- Typ waarvoor de uitgave is (hij begint als "Uitgegeven voor fabricage") en kies {{ui:Issue this sheet}}, of {{ui:Issue changed sheets}} voor elk blad dat nieuw is of sinds zijn laatste uitgave is gewijzigd.
- De eerste uitgave van een blad is revisie A, dan B, C enzovoort (I en O worden overgeslagen).
- Het titelblok toont het tekeningnummer met zijn revisie ("A-B1  rev B"), en naast het titelblok staat een revisietabel met de laatste uitgaven: revisie, datum en omschrijving. Op een klein blad worden er zoveel getoond als er passen.
- Een blad "wijzigt" wanneer wat erop getekend is verandert: een verplaatst onderdeel, een nieuw gat, een hernummerde markering. De datum, het aantal bladen en de revisietabel zelf tellen niet mee. Het wijzigen van het bladformaat wijzigt elk blad.
- Het uitgavelog wordt in het modelbestand opgeslagen, en uitgeven is één stap voor ongedaan maken. Het [KISS-bestand](topic:kiss-export) bevat de laatste revisie van elke tekening.

### Revisiewolken

Vanaf de tweede uitgave van een blad wordt elk onderdeel of elke fundering die is gewijzigd, binnen een revisiewolk getekend, met een revisiedriehoek met de letter.

- Zolang een blad sinds zijn laatste uitgave is gewijzigd, tonen de wolken wat sindsdien is veranderd, met de komende revisie in de driehoek (rev B uitgegeven en gewijzigd: de driehoeken zeggen C).
- Zodra u het uitgeeft, blijven de wolken op het blad van die revisie staan, zoals op een afgedrukte set, tot het blad opnieuw verandert.
- Elk blad omcirkelt alleen wijzigingen die het laat zien. Plattegronden en gevels tekenen geen gaten of uitsnijdingen, dus ze omcirkelen een staaf die is verplaatst, gedraaid of van formaat veranderd, of wiens markering is veranderd. Montagetekeningen en de verankeringsplattegrond omcirkelen ook nieuwe of verplaatste gaten en uitsnijdingen.
- Een hernummerde markering telt mee: wanneer een wijziging ervoor zorgt dat een ligger een nieuwe montage wordt, worden de liggers wier markering is opgeschoven (B1 naar B2) op plattegronden en gevels omcirkeld.
- Een onderdeel dat is verwijderd, laat niets over om te omcirkelen.
- Bladen die zijn uitgegeven voordat revisiewolken werden ingevoerd (DetailCraft 0.4), beginnen bij hun volgende uitgave met omcirkelen.
- Wolken staan in de PDF-, DXF- en DWG-downloads en tellen nooit zelf als wijziging.

## Downloaden

Kies het formaat in de lijst naast de knoppen, en dan {{ui:This sheet}} voor het getoonde blad of {{ui:All sheets}} voor de hele set.

- **PDF**: om af te drukken of te versturen. {{ui:All sheets}} maakt één PDF, één pagina per blad, elke pagina op het gekozen formaat.
- **DWG**, in het 2018-, 2013-, 2010-, 2007-, 2004- of 2000-formaat: om de bladen in een CAD-programma te openen. Kies een ouder formaat voor een ouder programma.
- **DXF (R12)**: de versie die bijna elk CAD-programma opent.

Een DWG- of DXF-blad wordt op volledige grootte getekend: één tekeneenheid is één millimeter op papier, dus het wordt op 1:1 afgedrukt en elk aanzicht behoudt de schaal die in zijn titel staat. Elke pen is een eigen laag: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID enzovoort, met zijn lijndikte (DWG) en zijn streepjes. Woorden zijn tekst in de DetailCraft-tekststijl (Arial). Maten zijn de lijnen en cijfers die u ziet, geen maatvoeringsobjecten. {{ui:All sheets}} zet de DWG- of DXF-bestanden in één zip, met één bestand per blad.

:::note
DXF R12 heeft geen lijndiktes en geen vullingen: de lagen behouden hun namen, dus stel de pennen per laag in wanneer u plottet, en gevulde vormen worden weggelaten (de statusbalk zegt hoeveel).
:::

Druk af op 100% (niet "op pagina passend") op papier van hetzelfde formaat als u wilt dat de vermelde schalen kloppen.
