---
title: Materiaal- en gewichtsrapport per fase
summary: Snijlengten, aantallen, gewichten en verfoppervlakken per fase, met de bouten en wapening, als tabel, CSV of PDF.
keywords: rapport, gewicht, tonnage, kg, verf, verfoppervlak, oppervlak, coating, snijlengte, materiaallijst, fase, materiaalstaat, csv, pdf
from: 337d6d92
---

In de groep {{ui:Uitvoer}} opent u {{ui:Meer}} en kiest u {{ui:Gewichtsrapport per fase}}, of u opent het tabblad {{ui:Per fase}} onder de weergave. Het toont:

- **Samenvatting per fase**: voor elke fase het aantal onderdelen, het staalgewicht, het verfoppervlak, de bouten en ankerstaven, en de wapening; daarna de totalen.
- **Eén tabel per fase**: elk onderdeelmerk erin met zijn type, profiel, materiaal, snijlengte, aantal, gewicht per stuk, gewicht en verfoppervlak; daarna zijn bouten en ankerstaven.

{{ui:CSV downloaden}} slaat dezelfde tabellen op in één CSV-bestand (`<naam> gewichtsrapport.csv`). {{ui:PDF downloaden}} maakt een rapport op het papierformaat uit de [DetailCraft-instellingen](topic:settings#drawings), met eerst de samenvatting, daarna elke fase, lange tabellen doorlopend op de volgende pagina, en elke pagina genummerd.

## Hoe de cijfers worden berekend

- **Gewichten** zijn bruto, zoals in de materiaallijst: het gewicht van het profiel per meter maal de snijlengte. Gaten en copes worden niet afgetrokken.
- **Verfoppervlak** is de buitenkant van de doorsnede over de snijlengte: voor een I-profiel elk vlak van de flenzen en het lijf, voor een plaat beide vlakken en de randen, voor een buis alleen de buitenkant. De uiteinden en de gaten worden niet meegerekend.
- **Wapening** is het gewicht van de staven in de funderingen van de fase, uit de [buigstaat](topic:footings-and-rebar).
- De platen en bouten van een verbinding tellen mee in de fase van het hoofdonderdeel ervan. Zie [Fasen](topic:phases).

Met [markeringen per fase](topic:phases#marks-per-phase) aan heeft elke fase zijn eigen merken (1-b1, 2-b1). Met de optie uit kan een merk in meer dan één fase voorkomen: elke fase toont de stukken die erin zitten.
