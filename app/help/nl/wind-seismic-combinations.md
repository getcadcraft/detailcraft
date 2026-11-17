---
title: Wind, seismische locatie en ASCE 7-combinaties
summary: Maak windbelastinggevallen voor een omsloten stijf gebouw, bepaal de seismische ontwerpwaarden voor een locatie en maak de ASCE 7-combinaties, op het tabblad Analyse.
keywords: wind, windbelasting, asce 7, richtingsprocedure, blootstelling, afsluiting, seismisch, grondklasse, ss, s1, sds, sd1, usgs, ontwerpspectrum, belastingcombinaties, lrfd, asd, kzt, kd, windstoot
from: 676fcbf3
---

Drie blokken op het tabblad {{ui:Analyse}} maken de wind- en seismische invoer van een raamwerk en combineren die: {{ui:Windbelastingen (ASCE 7, richtingsprocedure)}}, {{ui:Seismische locatie en systeem (ASCE 7)}} en {{ui:ASCE 7-belastingcombinaties}}. Het zijn hulpmiddelen: **geen normcontrole; uw constructeur beoordeelt de resultaten.**

## Wat u gaat doen

Maak windbelastinggevallen voor een omsloten, stijf gebouw, neem de seismische waarden voor een locatie over en maak de combinaties die ze gebruiken. Het model heeft vloeren nodig, dus voer eerst de analyse uit (zie [Krachten, reacties en doorbuigingen](topic:frame-analysis)).

## Stappen

1. Open het tabblad {{ui:Analyse}} en kies {{ui:Uitvoeren}}, zodat de vloeren en de afmeting van het gebouw bekend zijn. Als een blok zegt dat er geen vloeren zijn, kies dan {{ui:Verdiepingen zoeken}} erin.
2. Kies in {{ui:Windbelastingen (ASCE 7, richtingsprocedure)}} de {{ui:Editie}}, typ de {{ui:Basiswindsnelheid V}} van uw windkaart en kies de {{ui:Snelheidseenheid}}, daarna de {{ui:Blootstelling}} en de {{ui:Afsluiting}}. Kzt, Kd, G, de grondhoogte, de Cp aan de lijzijde, de excentriciteit en de richting staan er ook in.
3. Lees de druk op elke vloer en de kracht op elke vloer in de tabel af, kies dan {{ui:Windgevallen maken}}. De gevallen zijn +X, -X, +Y en -Y.
4. Kies in {{ui:Seismische locatie en systeem (ASCE 7)}} de editie en typ Ss en S1 (SMS, SM1 en S1 voor ASCE 7-22), de grondklasse A tot D, de risicocategorie en het seismische krachtweerstandssysteem. Of typ de geografische breedte en lengte en kies {{ui:Opzoeken bij USGS (online)}}; de online dienst wordt alleen geraadpleegd wanneer u erop drukt.
5. Lees Fa, Fv, SDS en SD1, R, Cd en Omega0 en het ontwerpspectrum af, kies dan {{ui:Gebruiken in het seismische blok}}. Druk in het seismische blok op {{ui:Seismische gevallen maken}} (zie [Betonelementen controleren en seismische belastingen maken](topic:concrete-and-seismic)).
6. Kies in {{ui:ASCE 7-belastingcombinaties}} de {{ui:Methode}} (LRFD of ASD) en kies {{ui:ASCE 7-combinaties maken}}. Voer de analyse opnieuw uit.

## Goed om te weten

- Wind: alleen een omsloten stijf gebouw, de richtingsprocedure. Een flexibel gebouw heeft een windstootfactor uit de norm nodig, die DetailCraft niet maakt.
- Grondklasse E en F vragen een locatieonderzoek en zijn nog niet beschikbaar.
- Een bronnenlijst onderaan de blokken zegt waar elk getal vandaan komt en wat is weggelaten.
- De USGS-opzoeking is getest op een stand-in, niet op de live dienst.
