---
title: Montageplan en film
summary: Voer een kraan en zijn belastingtabel in, zie elke hijs in fasevolgorde gecontroleerd tegen de tabel, en sla een montagefilm op die offline op elke telefoon speelt.
keywords: montage, kraan, hijs, belastingtabel, radius, capaciteit, rigging, volgorde, film, animatie, telefoon, offline, hijsplan
from: fa7b0133
---

Het tabblad {{ui:Erection}} zet het model om in een montageopdracht en controleert elke hijs tegen een kraan die u beschrijft. Het plant op basis van getallen die u typt. Het is geen hijsplan: de rigger en de kraanmachinist maken dat.

## Beschrijf de kraan

Kies {{ui:Add a crane}}, en vul in:

- **Kraanmiddelpunt X en Y:** waar de kraan staat, in millimeters.
- **Hoogste haak:** het meeste dat de haak omhoog kan, in millimeters. 0 betekent dat geen limiet wordt gecontroleerd.
- **Haakblok en rigging niet in de tabel:** kilogram die van de tabel worden afgetrokken voordat een belasting wordt toegevoegd, wanneer uw tabel dat nog niet doet.
- **Belastingtabel:** één rij per regel, radius in meters en dan de capaciteit in kilogram. Kopieer de rijen uit de eigen tabel van de kraan.

De tabel wordt gelezen zoals een belastingtabel gelezen wordt: de capaciteit die bij een radius staat, geldt tot die radius. Een belasting op een radius tussen twee rijen krijgt de capaciteit van de **verdere** rij, nooit een waarde ertussen. Binnen de eerste rij geldt de capaciteit van de eerste rij. Voorbij de laatste rij kan de kraan helemaal niet hijsen. De radius die voor een hijs telt, is de grootste van de oppakradius en de zetradius.

Een tweede kraan wordt op dezelfde manier toegevoegd. Elke hijs gaat naar de eerste kraan die hem binnen uw marge aankan.

## Wat het plan doet

- Eén hijs per montage: een ligger met zijn kopplaten, een kolom met zijn voetplaat, een trap.
- De volgorde volgt eerst de fasen, dan laag voor laag: kolommen, de liggers die ze dragen, verbanden, platen, trappen. Een onderdeel wordt nooit gehesen vóór wat het draagt.
- Elke hijs toont zijn gewicht (het bruto gewicht van het model, plus {{ui:Rigging added to each weight}}), zijn radius, het aandeel van de tabel dat hij gebruikt en de minuut waarop hij begint.
- {{ui:Most of the chart a lift may use}} is uw veiligheidsmarge. Een hijs boven die marge wordt gemarkeerd als **Boven uw marge**; boven de tabel als **Boven de tabel**; voorbij de laatste radius van de tabel als **Voorbij de tabel**; en een onderdeel dat hoger ligt dan de haak als **Haak te laag**.

Gaten en uitsnijdingen worden niet van de gewichten afgetrokken, en bouten vallen onder het riggingpercentage.

## Problemen

Elke hijs die boven, voorbij of te hoog is, of die gepland staat vóór wat hem draagt, verschijnt in het paneel {{ui:Problems}}. Een ligger zonder verbinding die hem draagt, wordt vermeld als ligger die tijdelijke ondersteuning nodig heeft.

## De film opslaan

{{ui:Save movie}} schrijft één HTML-bestand. Open het in elke browser, ook op een telefoon, zonder netwerk en zonder account: afspelen en pauzeren, de balk naar elke minuut slepen, het model draaien met een vinger, knijpen om te zoomen. Het bijschrift noemt elke hijs, zijn gewicht, radius en aandeel van de tabel. Het model wordt getekend als eenvoudige blokken: het toont de volgorde en de hijsen, niet de echte profielen.

Dezelfde tabel wordt opgeslagen als CSV met de knop {{ui:CSV}}. De kraan en de tabel worden in het modelbestand opgeslagen, en elke wijziging is één stap voor ongedaan maken.
