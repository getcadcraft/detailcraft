---
title: Aan de slag met DetailCraft
summary: Wat DetailCraft nu doet, hoe u het opent, en een eerste model van rasters tot een werkplaatstekening in tien minuten.
keywords: aan de slag, eerste model, introductie, staaldetaillering, wapening, snelstart, zelfstudie, overzicht
from: e4f16bbe
---

DetailCraft is de app voor staal- en wapeningsdetaillering in de CadCraft-familie. U bouwt een 3D-model van een staalskelet op rasters en niveaus, verbindt het, en krijgt wat de werkplaats nodig heeft: onderdeel- en samenstellingsmerken, een stuklijst, werkplaatstekeningen per onderdeel, DSTV NC-bestanden, een IFC-model, en een buigstaat voor de funderingen.

Dit is een vroege versie. Ze doet een korte lijst van dingen zorgvuldig in plaats van alles tegelijk. Lees [Wat nog niet beschikbaar is](topic:not-built-yet) voordat u echt werk erop plant.

## Wat het nu doet

- Rasters en niveaus die u intypt, in millimeter.
- Kolommen, liggers, verbanden en platen uit gepubliceerde profielcatalogi (AISC W, S, C, L, HSS en Pipe; Europese IPE, HEA, HEB en UPN; Britse UB, UC, PFC, EA, UEA, SHS, RHS en CHS), plus uw eigen parametrische profielen.
- Twee verbindingen: een bouten-kopplaat van een ligger naar een kolomflens, en een kolomvoetplaat met vier ankerstaven. Elk kan naar elke gelijke verbinding worden gekopieerd.
- Gaten en uitsparingen die u op positie intypt.
- Rechthoekige paalvoetfunderingen met een onderlaag en startstaven.
- Onderdeel- en samenstellingsmerken die zich na elke wijziging zelf bijwerken.
- Exports: IFC4, DSTV NC-bestanden (I-profielen en platen), stuklijst als CSV, buigstaat als CSV, en een werkplaatstekening-PDF van één onderdeel.

## DetailCraft openen

1. Open DetailCraft in een desktopbrowser: Chrome, Edge, Firefox of Safari. Zie [Browsers en computers](common:browsers).
2. Wacht tot het scherm is gevuld. De statusbalk onderaan zegt "Gereed. Open het Voorbeeld, of stel rasters en niveaus in en begin met het plaatsen van elementen."

De modelweergave heeft 3D-grafische ondersteuning nodig (WebGL). Als het midden van het scherm zegt "Deze browser kon geen 3D-grafische ondersteuning (WebGL) starten", zie [Problemen oplossen](topic:troubleshooting#the-3d-view-is-missing).

:::note
Uw modellen blijven op uw computer. Een model openen leest het in de browser, en opslaan downloadt een bestand. Er wordt niets geüpload. Cloudopslag is nog niet beschikbaar. Zie [Waar uw bestanden terechtkomen](common:your-files). Om DetailCraft later zonder verbinding te gebruiken, kiest u eenmaal {{ui:Opslaan voor offline gebruik}} in de app-balk terwijl u online bent; zie [Offline werken](common:offline).
:::

:::offline
U bent offline. DetailCraft werkt zonder verbinding alleen als het eerst voor offline gebruik is opgeslagen: de knop {{ui:Opslaan voor offline gebruik}} in de app-balk toont dan {{ui:Klaar voor offline gebruik}}. Zie [Offline werken](common:offline).
:::

## Bekijk eerst het voorbeeld

De snelste manier om te zien wat DetailCraft maakt, is het voorbeeldframe.

1. Kies {{ui:Voorbeeld}} in de groep {{ui:Bestand}} van de werkbalk.
2. De weergave toont een tweevaks-frame: zes kolommen met voetplaten, vier liggers met kopplaten, één verband en zeven funderingen met wapening.
3. Klik op een ligger. Het paneel {{ui:Eigenschappen}} rechts toont zijn onderdeelmerk, zaaglengte, gewicht en de gaten die de kopplaten hebben gemaakt.
4. Open het tabblad {{ui:Stuklijst}} onderaan om elk onderdeelmerk met zijn aantal en gewicht te zien.

De zelfstudie [Het voorbeeldframe verkennen](topic:sample-model) loopt het stuk voor stuk door.

## Uw eerste model

Een nieuw model heeft al rasters 1 tot 3 bij A tot B op 6000 mm en twee niveaus, Niveau 1 op 0 en Niveau 2 op 4000.

1. Kies {{ui:Nieuw}}. Als het huidige model wijzigingen heeft, vraagt DetailCraft of u die eerst wilt opslaan.
2. Kies {{ui:Plattegrond}} boven de weergave. De niveaulijst ernaast kiest Niveau 1.
3. Kies {{ui:Kolom}} in de werkbalk, of druk op {{key:C}}.
4. Klik op het rasterkruispunt A/1. Een kolom W12x50 verschijnt van Niveau 1 tot Niveau 2. De statusbalk zegt waar hij is geplaatst.
5. Klik op B/1, A/2 en B/2 om er drie te plaatsen.
6. Kies Niveau 2 in de niveaulijst, en kies daarna {{ui:Ligger}} of druk op {{key:B}}.
7. Klik op A/1, en daarna op A/2. Een W16x26-ligger verbindt de twee kolomkoppen, met zijn staalbovenkant op het niveau.
8. Druk op {{key:Esc}} om terug te gaan naar {{ui:Selecteren}}, en klik daarna op de ligger.
9. Kies {{ui:Kopplaten}} in de groep {{ui:Verbinden}}. Beide uiteinden krijgen een bouten-kopplaat, de ligger wordt ingekort om te passen, en de eerste kopplaat is nu geselecteerd.
10. Klik nogmaals op de ligger.
11. Kies {{ui:Werkplaatstekening}} in de groep {{ui:Uitvoer}}. Een voorbeeld van de werkplaatstekening van de ligger opent. Kies {{ui:PDF downloaden}}.
12. Druk op {{key:Mod+S}} om het model op te slaan. De browser downloadt `Untitled.detailcraft.json`.

Hernoem het model in het veld {{ui:Naam}} linksboven voordat u opslaat, zodat het bestand en elke export de naam dragen.

## Waar u verder kunt gaan

- [Een rondleiding door het scherm](topic:workspace)
- [Rasters en niveaus instellen](topic:grids-and-levels)
- [Bewegen in de 3D-weergave](topic:navigate-3d), met een muis, een trackpad of een touchscreen
- [Overstappen van andere detailleersoftware](topic:coming-from), als u een groot detailleerpakket kent
- [Deze help gebruiken](common:help)
