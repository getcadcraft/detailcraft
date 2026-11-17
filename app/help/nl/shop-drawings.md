---
title: Werkplaatstekeningen maken
summary: Eén blad per onderdeelmerk, allemaal tegelijk gemaakt: bekijk elk ervan of download één blad of de hele set als PDF op A4 tot A1 of ANSI B tot D, met gaten, copings, maatvoering en titelblok.
keywords: werkplaatstekening, werkplaatstekeningen, alle onderdelen, batch, hele set, tekening van één onderdeel, fabricagetekening, pdf, detailtekening, stukkentekening, afdrukken
from: d25fe035
---

DetailCraft maakt één blad per onderdeelmerk, voor elke balk, kolom, verband en plaat in het model, allemaal tegelijk: u hoeft ze niet één voor één te selecteren. Identieke stukken delen een merk, en dus een blad. De bladen worden op het moment zelf uit het model gemaakt; ze worden niet opgeslagen of bewerkt.

## De hele set maken

1. Kies {{ui:Werkplaatstekening}} in de groep {{ui:Uitvoer}}. Er hoeft niets geselecteerd te zijn. Met een onderdeel geselecteerd opent het venster op het blad van dat onderdeel. In het paneel {{ui:Eigenschappen}} heet dezelfde knop {{ui:Werkplaatstekening}} voor staven en {{ui:Plaattekening}} voor verbindingen.
2. Er opent een voorbeeld, met als titel het onderdeelmerk, bijvoorbeeld "Werkplaatstekening b1". De eerste lijst naast de titel bevat elk onderdeelmerk met zijn profiel, lengte en aantal: kies er één om het blad ervan te zien. De tweede lijst wijzigt het bladformaat; de hele set wordt dan opnieuw op dat formaat gemaakt (zie [Algemene opstelling- en montagetekeningen](topic:drawings#choose-the-sheet-size)).
3. Kies {{ui:Alles downloaden}} (de knop toont het aantal bladen) voor één PDF met een pagina per onderdeelmerk, `<name> Shop drawings.pdf`. Elk blad zegt "Blad 3 van 42" in zijn titelblok. Of kies {{ui:PDF downloaden}} voor het blad dat u bekijkt, `<name> <mark>.pdf`.
4. Sluit het voorbeeld met de × of {{key:Esc}}.

Als {{ui:Werkplaatstekening}} grijs is, heeft het model nog geen onderdelen.

## Wat op het blad staat

Voor een I-profiel:

- **Gevel**, gezien op het lijf: het onderdeel met zijn copings uitgesneden, gaten in het lijf als cirkels en gaten in de flenzen als verborgen (gestippelde) lijnen.
- **Plattegrond van de bovenflens**, van bovenaf gezien, als die flens gaten heeft. Gaten in de onderflens worden gestippeld getoond.
- **Doorsnede** door het profiel.
- **Maatvoering:** geketende gatposities langs het onderdeel plus de totale lengte, de hoogten van de gaten in het lijf, de hartafstand en de copingmaten.
- **Gatenlijst:** elke groep gaten, bijvoorbeeld "8 x Ø22 in de bovenflens".
- **Las**, als het onderdeel platen heeft die erop zijn gelast.
- **Titelblok:** onderdeelmerk, samenstellingsmerk, profiel, materiaal, lengte, aantal, gewicht per stuk en totaal, modelnaam en datum.

Voor een U-profiel, hoekprofiel of holle doorsnede is het blad hetzelfde, gezien op het lijf of de zijkant: de wanden van een buis zijn verborgen (gestippelde) lijnen, en de doorsnede geeft de wanddikte.

Voor een plaat: het vlak van de plaat met zijn gaten, en zijn rand als doorsnede.

## Schalen

De schaal wordt uit een lijst gekozen (1:1 tot 1:200) zodat het onderdeel op het blad past. Een lang, ondiep onderdeel zou bij één schaal te dun zijn om te lezen; daarom wordt de diepte, wanneer die op papier onder 30 mm zou komen, op een grotere schaal getekend dan de lengte. De weergavetitel zegt dat dan, bijvoorbeeld "lengte 1:20, diepte 1:5 (niet op één schaal; de maten gelden)". Lees afmetingen altijd van de maatvoering af, niet door het blad op te meten.

## Goed om te weten

- Het aantal is het aantal onderdelen met dat merk in het model. Merken kunnen na een wijziging van nummer veranderen; zie [Markeringen controleren en de stuklijst](topic:marks-and-bom).
- Elk blad is één onderdeel op zich, zonder lassymbolen; montagetekeningen (met lassymbolen) en algemene opstellingstekeningen staan in [Tekeningen](topic:drawings). Het blad kan in DetailCraft niet worden bewerkt of geannoteerd. Om het te markeren, opent u de PDF in een PDF-markup-app zoals MarkupCraft.
- Het titelblok zegt "DetailCraft-labbouw — millimeters".
- De tekst gebruikt het standaard PDF-lettertype Helvetica. Tekens buiten de West-Europese set worden als "?" afgedrukt, en de statusbalk telt ze.

## Afdrukken

Open de gedownloade PDF in uw PDF-viewer en druk af op 100% (geen "Passend op pagina") op papier van het gekozen formaat, als de vermelde schalen moeten kloppen. Op een kleiner blad schaalt u het en vertrouwt u op de maatvoering.
