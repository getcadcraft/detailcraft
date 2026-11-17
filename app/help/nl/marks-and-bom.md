---
title: Markeringen controleren en de stuklijst
summary: Lees de onderdeel- en samenstellingsmerken die DetailCraft aan elk stuk geeft, controleer de stuklijst en download die als CSV.
keywords: markering, merken, nummering, onderdeelmerk, samenstellingsmerk, stukmerk, stuklijst, bom, materiaallijst, gewichten, boutenlijst, csv
from: caa2ee80
---

DetailCraft markeert het model zelf. Er is geen nummeringscommando en niets om uit te voeren: na elke wijziging bepaalt het welke onderdelen hetzelfde stuk staal zijn en geeft ze één merk.

## Waar merken zichtbaar zijn

- De lijst {{ui:Onderdeelmerken}} in het paneel {{ui:Model}}: elk merk met zijn profiel, lengte en aantal. Klik op een merk om het eerste onderdeel met dat merk te selecteren.
- Het paneel {{ui:Eigenschappen}} van een geselecteerde staaf (en de lijst **Onderdeelmerken** in het linkerpaneel): {{ui:Onderdeelmerk}} en {{ui:Samenstelling}}. De kop van het paneel draagt ook het merk, bijvoorbeeld "Balk b1".
- Het tabblad {{ui:Stuklijst}}, de CSV, de namen van de NC-bestanden, de werkplaatstekeningen en de IFC-export (als het tag van elk element).

## Hoe onderdelen worden gemerkt

- **Onderdeelmerken:** c voor kolommen, b voor balken, br voor verbanden, st voor trapbomen, p voor platen (inclusief eindplaten en voetplaten). Dan een nummer: c1, c2, b1, p1 … Wanneer onderdelen in meer dan één fase staan, komt er eerst een fasenummer, bijvoorbeeld 2-b1.
- **Samenstellingsmerken:** C, B, BR of P. Een samenstelling is een hoofdstaaf en de platen die eraan zijn gelast, zoals een balk met zijn twee eindplaten, of een kolom met zijn voetplaat.
- Twee onderdelen delen een merk als ze hetzelfde profiel, materiaal en snijlengte hebben, en dezelfde gaten en copings, allemaal binnen 1 mm, ook als het ene ten opzichte van het andere is omgekeerd of ondersteboven is gedraaid.
- De nummering loopt eerst langs de kolommen, dan de balken, verbanden en platen; binnen elk op profielnaam, de langste eerst.

De volledige regels, inclusief welke draaiingen voor U- en hoekprofielen tellen: [Merkregels](topic:mark-rules).

:::warning
Merken worden na elke wijziging opnieuw bepaald, dus de nummering kan veranderen. Een onderdeel toevoegen, een profiel wijzigen of een gat toevoegen kan b3 in b4 veranderen. Beschouw merken pas als definitief wanneer het model klaar is, en maak de stuklijst, NC-bestanden en werkplaatstekeningen van hetzelfde opgeslagen model.
:::

## De stuklijst lezen

Open onderaan het tabblad {{ui:Stuklijst}}. Het heeft drie tabellen.

**Onderdelen**, met het totale staalgewicht in de kop:

| Kolom | Betekenis |
|---|---|
| Onderdeelmerk | Klik erop om het eerste onderdeel met dit merk te selecteren |
| Type | balk, kolom, verband, trapboom of plaat |
| Profiel | Bijvoorbeeld W16x26 of PL20x180 |
| Materiaal | De kwaliteit die u hebt ingesteld |
| Lengte (mm) | Snijlengte, na de verbindingen |
| Aantal | Hoeveel |
| Eenheidsgewicht (kg) | Massa van het profiel per meter × lengte |
| Totaalgewicht (kg) | Eenheidsgewicht × aantal |

De laatste rij geeft het totale aantal en gewicht.

**Samenstellingen:** elk samenstellingsmerk, zijn hoofdonderdeel, al zijn onderdelen (bijvoorbeeld "b1 + p1 + p1"), aantal, eenheidsgewicht en totaalgewicht.

**Bouten en ankerbouten:** gegroepeerd op soort, diameter, lengte en kwaliteit, met een aantal.

:::note
De gewichten zijn bruto: gaten en copings worden er niet afgetrokken. Bouten, moeren, sluitringen en lassen zitten niet in het staalgewicht.
:::

## Downloaden

Kies {{ui:CSV downloaden}} in het tabblad, of {{ui:Stuklijst}} in de groep {{ui:Uitvoer}}. Het bestand `<name> BOM.csv` bevat de drie tabellen achter elkaar, elk onder zijn titel, met een lege regel ertussen. Het opent in elk spreadsheetprogramma.

## Controleren voordat u verstuurt

1. Open het tabblad {{ui:Problemen}} en los elke regel op. Een verbinding die niet kon worden gebouwd, voegt geen plaat, gaten of bouten toe, dus de stuklijst zou tekortschieten.
2. Let op merken die u niet verwachtte. Twee balken die u gelijk denkt maar met verschillende merken, verschillen meestal in een gat, een coping of een snijlengte; selecteer elk en vergelijk.
3. Sla het model op en maak daarna alle exports uit die opgeslagen staat.
