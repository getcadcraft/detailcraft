---
title: Knoopplaten voor verbanden
summary: Verbind het eind van een verband met een kolom of balk via een knoopplaat: hoekprofielen en platte staven worden gebout, buizen worden ingesleuft en gelast.
keywords: knoopplaat, knoopplaten, verband, verbanden, verbanding, hoekverband, platte staaf, band, hss-verband, messenplaat, ingesleufde buis, verbinden
from: 22f6598d
---

Een verbandknoopplaat is een plaat die in de werkplaats is gelast aan de kolom (of balk) waarop het verband aansluit, in het vlak van het verband. DetailCraft snijdt het verband bij de verbinding vrij van alles, plaatst en maatvoert de knoopplaat, en verbindt het verband ermee: een **hoekprofiel** of een **platte staaf** met één rij bouten, of een **buis** (vierkant, rechthoekig of rond HSS) die over de knoopplaat wordt ingesleuft en gelast.

## Waar het werkt

- Het eind van het verband ligt op de lijn van een kolom of balk (binnen 1 mm), en het verband loopt niet bijna evenwijdig aan die lijn. Een kolom is de steun waar die aanwezig is; anders de balk.
- De knoopplaat ligt in het vlak van het verband en in de lijn van de steun. Een **hoekprofiel** moet één been in dat vlak hebben, en een **platte staaf** zijn vlak: draai het verband (de {{ui:Draaiing (°)}}) tot dat zo is. Met de benen van het hoekprofiel onder 45° ten opzichte van het vlak meldt DetailCraft dat en bouwt niets.
- I-profielen en U-profielen als verband worden niet aangesloten.

## Knoopplaten toevoegen

1. Selecteer een of meer verbanden.
2. Kies {{ui:Knoopplaat}} in het menu {{ui:Meer}} van de groep {{ui:Verbinden}}.
3. Elk eind van de geselecteerde verbanden dat op een kolom of balk aansluit en nog geen knoopplaat heeft, krijgt er een.

Selecteer een knoopplaat (klik op de plaat) om de instellingen te wijzigen. {{ui:Toepassen op gelijke (n)}} kopieert hem naar elk vrij verbandeinde met hetzelfde verband- en steunprofiel.

## Wat DetailCraft uitrekent

- **Inkorten.** Het verband wordt aan dat eind ingekort tot de hoeken vrij zijn, met {{ui:Vrije ruimte van het verband}} (25), van elk onderdeel bij de verbinding (ernaast, of voorbij het eind als het onderdeel daar eindigt) en van een voetplaat onder de kolom.
- **Bouten (hoekprofielen, platte staven).** {{ui:Bouten}} (3) in één rij langs het verband, de eerste {{ui:Randafstand bouten}} (40) vanaf het gesneden eind, op {{ui:Boutafstand}} (75). Bij een hoekprofiel gaan ze door het been in het vlak van de knoopplaat, op {{ui:Hartafstand bouten}} vanaf de hiel (0 = het midden van het been); bij een platte staaf op de middellijn (of ernaast op de hartafstand). Klemlengte bout = het been of de platte staaf + de knoopplaat.
- **De knoopplaat.** Een rechthoek: van het steunvlak uit, voorbij de laatste bout met de randafstand, en langs de steun zover als de bouten nodig hebben. Hij ligt tegen de achterkant van het been van het hoekprofiel (of het vlak van de platte staaf). Bij een buis loopt hij door het midden van de buis, over {{ui:Buislas over de knoopplaat}} (200) van de buis, met ruimte voor de lassen.
- **Verbindingen.** Bij een kolomvoet wordt de knoopplaat tot op de voetplaat doorgetrokken. Waar een balk de verbinding kruist (een verband omhoog in een balk-kolomhoek), blijft de knoopplaat onder of boven de balk. Laat dat de bouten of de overlap zonder hun randafstand, dan waarschuwt DetailCraft.
- **Lassen.** De knoopplaat aan zijn steun, aan beide zijden. Een buis aan de knoopplaat, vier lijnen langs de overlap.

## Goed om te weten

- De knoopplaat hoort bij de samenstelling van de steun (in de werkplaats gelast). Het verband wordt geleverd met zijn gaten geboord en gaat naar een eigen NC-bestand.
- Een sleuf in een buis wordt niet in het model gesneden; de [clashcontrole](topic:clash-check) laat het verband en zijn knoopplaat met rust.
- De knoopplaat wordt niet gelast aan een balk die hij raakt. Hoekknoopplaten die aan zowel balk als kolom zijn gelast, afgeschuinde hoeken en de werkpuntindeling van een Uniform Force Method-verbinding zijn nog niet gemaakt.
- DetailCraft ontwerpt de knoopplaat of de bouten niet (geen sterkteberekeningen); de waarschuwingen gaan over afstanden en passing.
