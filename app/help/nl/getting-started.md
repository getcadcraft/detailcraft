---
title: Aan de slag met DetailCraft
summary: Wat DetailCraft nu doet, hoe u het opent en in tien minuten een eerste model, van rasters tot een werkplaatstekening.
keywords: starten, eerste model, introductie, staaldetaillering, wapening, snelstart, handleiding, overzicht
from: 3682c0d8
---

DetailCraft is de app voor staal- en wapeningsdetaillering in de CadCraft-familie. U bouwt een 3D-model van een stalen raamwerk op rasters en niveaus, verbindt het en krijgt wat de werkplaats nodig heeft: onderdeel- en samenstellingsmerken, een stuklijst, werkplaatstekeningen van afzonderlijke onderdelen, DSTV NC-bestanden, een IFC-model en een buigstaat voor de funderingen.

Dit is een vroege build. Hij doet een korte lijst dingen zorgvuldig in plaats van alles tegelijk. Lees [Wat nog niet is gebouwd](topic:not-built-yet) voordat u echt werk eromheen plant.

## Wat het nu doet

- Rasters en niveaus die u typt, in millimeters.
- Kolommen, liggers, verbanden en platen uit gepubliceerde profielcatalogi (AISC W, S, C, L, HSS en Pipe; Europese IPE, HEA, HEB en UPN), plus uw eigen parametrische profielen.
- Twee verbindingen: een gebouwde kopplaat van een ligger op een kolomflens, en een voetplaat met vier ankerbouten. Elk kan naar elke gelijke aansluiting worden gekopieerd.
- Gaten en coperingen die u op positie typt.
- Rechthoekige poerfunderingen met een onderwapening en aansluitwapening.
- Onderdeel- en samenstellingsmerken die na elke wijziging vanzelf bijwerken.
- Exports: IFC4, DSTV NC-bestanden (I-profielen en platen), stuklijst als CSV, buigstaat als CSV en een werkplaatstekening als PDF van één onderdeel.

## DetailCraft openen

1. Open DetailCraft in een desktopbrowser: Chrome, Edge, Firefox of Safari. Zie [Browsers en computers](common:browsers).
2. Wacht tot het scherm zich vult. De statusbalk onderaan zegt "Klaar. Open het voorbeeld, of stel rasters en niveaus in en begin met staven plaatsen."

De modelweergave heeft 3D-graphics (WebGL) nodig. Zegt het midden van het scherm "Deze browser kon geen 3D-graphics starten (WebGL)", zie dan [Problemen oplossen](topic:troubleshooting#the-3d-view-is-missing).

:::note
Uw modellen blijven op uw computer. Een model openen leest het in de browser en opslaan downloadt een bestand. Er wordt niets geüpload. Opslaan in de cloud is nog niet beschikbaar. Zie [Waar uw bestanden heen gaan](common:your-files). Om DetailCraft later zonder verbinding te gebruiken, kiest u eenmalig terwijl u online bent {{ui:Opslaan voor offline gebruik}} in de appbalk; zie [Offline werken](common:offline).
:::

:::offline
U bent offline. DetailCraft werkt alleen zonder verbinding als het eerst voor offline gebruik is opgeslagen: de knop {{ui:Opslaan voor offline gebruik}} in de appbalk staat dan op {{ui:Klaar voor offline gebruik}}. Zie [Offline werken](common:offline).
:::

## Kijk eerst naar het voorbeeld

De snelste manier om te zien wat DetailCraft maakt, is het voorbeeldraamwerk.

1. Kies {{ui:Voorbeeld}} in de groep {{ui:Bestand}} van de werkbalk.
2. De weergave toont een raamwerk met twee velden: zes kolommen met voetplaten, vier liggers met kopplaten, één verband en zeven funderingen met wapening.
3. Klik op een ligger. Het paneel {{ui:Eigenschappen}} rechts toont zijn onderdeelmerk, zaaglengte, gewicht en de gaten die de kopplaten maakten.
4. Open onderaan het tabblad {{ui:Stuklijst}} om elk onderdeelmerk met zijn aantal en gewicht te zien.

De rondleiding [Het voorbeeldraamwerk verkennen](topic:sample-model) loopt er stuk voor stuk doorheen.

## Uw eerste model

Een nieuw model heeft al rasters 1 tot 3 bij A tot B op 6000 mm en twee niveaus, Niveau 1 op 0 en Niveau 2 op 4000.

1. Kies {{ui:Nieuw}}. Heeft het huidige model wijzigingen, dan vraagt DetailCraft of u die eerst wilt opslaan.
2. Kies boven de weergave {{ui:Plattegrond}}. De niveaulijst ernaast kiest Niveau 1.
3. Kies {{ui:Kolom}} in de werkbalk, of druk op {{key:C}}.
4. Klik op de rasterkruising A/1. Er verschijnt een W12x50-kolom van Niveau 1 tot Niveau 2. De statusbalk zegt waar hij terechtkwam.
5. Klik op B/1, A/2 en B/2 om er nog drie te plaatsen.
6. Kies Niveau 2 in de niveaulijst en kies daarna {{ui:Ligger}} of druk op {{key:B}}.
7. Klik op A/1 en daarna op A/2. Een W16x26-ligger verbindt de twee kolomkoppen, met zijn bovenkant staal op het niveau.
8. Druk op {{key:Esc}} om terug te gaan naar {{ui:Selecteren}} en klik daarna op de ligger.
9. Kies {{ui:Kopplaten}} in de groep {{ui:Verbinden}}. Beide uiteinden krijgen een gebouwde kopplaat, de ligger wordt ingekort om te passen en de eerste kopplaat is nu geselecteerd.
10. Klik nogmaals op de ligger.
11. Kies {{ui:Werkplaatstekening}} in de groep {{ui:Uitvoer}}. Er opent een voorbeeld van de werkplaatstekening van de ligger. Kies {{ui:PDF downloaden}}.
12. Druk op {{key:Mod+S}} om het model op te slaan. De browser downloadt `Untitled.detailcraft.json`.

Hernoem het model in het veld {{ui:Naam}} linksboven voordat u opslaat, zodat het bestand en elke export zijn naam dragen.

## Waar u daarna naartoe kunt

- [Een rondleiding langs het scherm](topic:workspace)
- [Rasters en niveaus instellen](topic:grids-and-levels)
- [U verplaatsen in de 3D-weergave](topic:navigate-3d), met een muis, een trackpad of een aanraakscherm
- [Als u van andere detailleringssoftware komt](topic:coming-from), als u een groot detailleringspakket kent
- [Deze Help gebruiken](common:help)
