---
title: Constructiecontroles
summary: Problemen voor de dingen die een detailleur met het oog ziet: een bout die een moersleutel niet bereikt, bouten te dicht op elkaar voor de dop, hoeklassen buiten hun maatgrenzen, lassen die een brander niet bereikt, en buizen die water vasthouden.
keywords: constructiecontrole, moersleutel, dop, bereikbaarheid bouten, aandraaien, lasmaat, hoeklas, minimale las, maximale las, water, ontluchtingsgat, afvoergat, verzinken, holle profiel, problemen
from: 72315151
---

DetailCraft zoekt naar vier soorten problemen die geen sterktecontrole vindt, en zet ze in het paneel {{ui:Problemen}}. Het zijn waarschuwingen en opmerkingen om te bekijken, geen fouten: het model wordt nog steeds gebouwd.

## Een bout die een moersleutel niet bereikt

Voor elke bout zet DetailCraft een dop over de kop en over de moer. De dop is een cilinder zo breed als de moer over zijn hoeken plus een wand van 4 mm, 60 mm lang. Als een lijf van een ligger, een flens, een plaat of een verband binnen die cilinder staat, noemt het probleem de verbinding, hoeveel bouten, welk onderdeel in de weg zit en hoe ver het van de bout af is.

De dop is een typische slagdop. Een steeksleutel heeft minder ruimte nodig, een groter gereedschap meer. Vraag uw verbonden assistent om `constructability_check` te draaien met een andere `socketLength` om te zien hoe het antwoord verandert.

## Bouten te dicht op elkaar voor de dop

Een dop over één bout mag de kop van de volgende niet raken. De bouten van een verbinding die dichter bij elkaar staan dan de breedte van de dop plus de kop van de buur, worden vermeld met de gevonden afstand en de nodige afstand.

## Maten van hoeklassen

AISC 360-16 tabel J2.4 stelt de kleinste hoeklas in op basis van de dikte van het dunste deel (3 mm tot 6.35 mm dik, 5 mm tot 12.7, 6 mm tot 19.05, 8 mm daarboven), en J2.2b de grootste langs een materiaalrand: niet groter dan het materiaal wanneer het dunner is dan 6.35 mm, anders 1.6 mm minder. Verbindingen met dezelfde maat op dezelfde dikte worden als één probleem vermeld.

De gebruikte dikte is het dunste deel dat de las noemt, dus een las van 8 mm rondom een ligger met een lijf van 6.35 mm wordt vermeld.

## Water en ontluchting

- Een **open bovenkant** van een holle profiel dat rechtop staat of meer dan 10° hellt, laat regen binnen.
- Een holle profiel **aan beide uiteinden gesloten** heeft een ontluchtings- en een afvoergat nodig; hete dompelverzinking en de druk van verhitte lucht vragen er beide om.

## Kan de lasser erbij

Een hoeklas wordt gemaakt met de brander halverwege de twee vlakken die hij verbindt. Voor elke rondlopende hoeklas (een kopplaat, een voetplaat, een verstekplaat) neemt de controle de doorsnedecontour van het onderdeel bij de plaat en loopt, elke 20 mm, een brandertraject naar buiten onder 45° vanaf waar de mond (straal 10 mm om mee te beginnen) beide vlakken voor het eerst vrijmaakt, voor nog 30 mm. Raakt het traject de eigen flens van de ligger of een ander onderdeel, dan wordt dat deel van de las vermeld met het onderdeel en de afstand. Deze getallen zijn typische waarden, geen norm: vraag uw fabrikant naar het proces en de mond. Lassen langs twee randen (een schuifplaatje) worden niet gelokaliseerd en niet gecontroleerd.
