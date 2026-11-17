---
title: Leveranciersvoorraad en levertijden
summary: Controleer de staven die uw snijlijst inkoopt tegen de voorraadlijst van een leverancier: is er genoeg, en hoe lang duurt het wachten?
keywords: leverancier, voorraad, levertijd, staalopslag, walserij, beschikbaarheid, nalevering, staven, inkoop, levering
from: 1373f5a3
---

Het tabblad {{ui:Levering}} zoekt elk profiel dat de {{ui:Snijlijst}} inkoopt op in de voorraadlijst van een leverancier. Het bestand blijft in het model; er wordt niets ergens naartoe gestuurd.

## Het bestand van de leverancier toevoegen

Druk op {{ui:Een leveranciersbestand toevoegen}} en kies een CSV van uw leverancier (gescheiden door komma's, puntkomma's of tabs). Het heeft een kolom nodig voor het item of profiel (Item, Name, Description, Section, SKU), en een voor de voorraad (In stock, Quantity, On hand) of voor de levertijd. De eenheid (each, metres, kilograms, tonnes), de prijs, de leverancier en een datum van bijbestelling worden gelezen wanneer er een kolom voor is. Ook woorden worden begrepen: "Out of stock", "In stock", "2-3 weeks", "backorder". Tot vijf bestanden kunnen worden bewaard; een bestand met dezelfde naam toevoegen vervangt het.

## Wat u ziet

Voor elk profiel dat de snijlijst inkoopt, toont de tabel wat het model nodig heeft, wat er op voorraad is, de levertijd, de leverancier en een resultaat:

- **Gedekt:** genoeg op voorraad.
- **Tekort van:** de voorraad is lager dan de behoefte. Als de voorraad lager is dan de behoefte en u een langste wachttijd instelt, vertelt de levertijd hoe lang de rest duurt.
- **Te laat:** er is geen voorraadcijfer en de levertijd is langer dan de wachttijd die u accepteert.
- **Geen voorraadcijfer:** het bestand vermeldt het niet.
- **Andere eenheid:** de leverancier vermeldt het profiel in een eenheid die het model niet kan geven.

Wat het model nodig heeft, wordt gegeven in staven (uit de geneste snijlijst, met uw voorraadlengten), in meter ingekochte staaf en in kilogram (het gewicht per meter van het profiel); de eigen eenheid van het bestand wordt gebruikt. Een profiel wordt gekoppeld op zijn naam ("W16 X 26" en "w16x26" zijn gelijk). Profielen die niet in het bestand staan, worden vermeld.

Tekorten en late profielen staan in het paneel {{ui:Problemen}}. Hier wordt niets besteld.

## Beperkingen

De voorraadcijfers en levertijden zijn van het bestand, zoals op de dag dat het is gemaakt. Platen worden niet genest en daarom niet opgezocht. Het bestand wordt alleen gelezen: elke instructie erin is gewoon tekst.
