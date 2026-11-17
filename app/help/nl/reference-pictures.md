---
title: Een gekopieerd gebied plakken als referentieafbeelding
summary: Kopieer een deel van een PDF-blad in MarkupCraft en plak het in DetailCraft op ware grootte, liggend op een niveau onder het staal, om erover te modelleren.
keywords: afbeelding, referentieafbeelding, onderlegger, achtergrond, gebied kopiëren, markupcraft, PDF, overtrekken, ware grootte, schaal, ondoorzichtigheid, overlay
from: 0c48445f
---

Het gereedschap **Een gebied kopiëren** van MarkupCraft kopieert een deel van een blad als afbeelding die weet hoe groot die is. Plakt u die in DetailCraft, dan ligt ze plat op een niveau, op ware grootte, onder het raster en het staal, zodat u liggers over een plattegrond uit de tekeningen kunt plaatsen.

## Plakken

1. Kopieer in MarkupCraft het gebied met {{ui:Meer}} › {{ui:Een gebied van de pagina kopiëren…}}, daarna {{ui:Kopiëren}} (of {{ui:Kopiëren als overlay}}, waardoor het papier doorzichtig wordt).
2. Druk in DetailCraft (in dezelfde browser) op {{key:Mod+V}} of kies {{ui:Plakken}}.

De afbeelding komt in het midden van het raster, op het niveau dat in {{ui:Plattegrond}} wordt getoond (in 3D of een gevel: op het laagste niveau), en ze is geselecteerd. De statusbalk zegt hoe groot ze is.

- **Ware grootte:** heeft het blad een tekeningschaal, dan wordt één pixel getekend als de lengte die hij op de tekening toont.
- **Papierformaat:** heeft het blad geen schaal, dan is de afbeelding even groot als het gebied op papier was, en de statusbalk zegt dat. Typ een nieuwe **mm per pixel** in {{ui:Eigenschappen}} om haar te schalen.

Een gebied dat als overlay is gekopieerd, begint met de ondoorzichtigheid waarmee het is gekopieerd.

{{key:Mod+V}} plakt wat u het laatst kopieerde: het gebied uit MarkupCraft, of leden en funderingen die in DetailCraft zijn gekopieerd. Is er na het gebied een andere afbeelding op het klembord gezet (uit een ander programma), dan wordt niets geplakt; kopieer het gebied dan opnieuw.

## Verplaatsen, wijzigen en verwijderen

- Klik op de afbeelding om haar te selecteren (wat ervoor ligt, wordt eerst gekozen). Een blauwe omlijning toont dat ze geselecteerd is.
- Sleep haar om haar over het niveau te verplaatsen. Haar midden en hoeken klikken vast op rasterkruisingen.
- Typ in {{ui:Eigenschappen}} waar haar midden komt (x, y) en het niveau waarop ze ligt (z), haar **mm per pixel** en haar **ondoorzichtigheid**.
- {{key:Delete}} of {{ui:Verwijderen}} verwijdert haar.

Elk plakken, verplaatsen, wijzigen en verwijderen is één stap: {{key:Mod+Z}} maakt het ongedaan.

De afbeelding wordt opgeslagen in het modelbestand, dus ze opent samen met het model. Ze is alleen een referentie: ze staat niet in tekeningen, exports, de stuklijst of een kopie.
