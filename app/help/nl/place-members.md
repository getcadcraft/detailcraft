---
title: Kolommen, liggers en verbanden plaatsen
summary: Kies een profiel, materiaal en positie, en klik daarna op rasterkruisingen of typ ze in om stalen onderdelen te plaatsen.
keywords: kolom, ligger, verband, onderdeel, plaatsen, profiel, materiaal, draaiing, positie, verschuiving, invoegen, toevoegen via raster
from: d6db0dc1
---

Onderdelen worden op rasterkruisingen geplaatst: een kolom op één kruising, een ligger of verband tussen twee. Stel eerst [rasters en niveaus](topic:grids-and-levels) in.

## Kies een gereedschap en de opties

1. Kies {{ui:Kolom}} ({{key:C}}), {{ui:Ligger}} ({{key:B}}) of {{ui:Verband}} ({{key:R}}) in de groep {{ui:Plaatsen}}.
2. Het paneel {{ui:Eigenschappen}} rechts wordt "Een kolom plaatsen" (of ligger, of verband) en toont de opties voor het volgende onderdeel:
   - {{ui:Profiel}}: kies uit de lijst. Maten zijn gegroepeerd per catalogus (W-profielen, U-profielen, hoekstaal, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS en uw eigen profielen). Zie [Profielcatalogus](topic:profile-catalog).
   - {{ui:Materiaal}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 of S355.
   - {{ui:Positie}}: waar de doorsnede op de lijn tussen de twee punten zit: {{ui:Bovenkant staal op de lijn}}, {{ui:Gecentreerd op de lijn}} of {{ui:Onderkant op de lijn}}.
   - {{ui:Draaiing (°)}}: draait de doorsnede om de eigen as van het onderdeel.
   - {{ui:Tot}} (alleen kolommen): {{ui:Het volgende niveau omhoog}}, of een niveaunaam.
3. Onder de opties toont een vak {{ui:Profiel}} de afmetingen, oppervlakte, massa per meter en de catalogus van de gekozen doorsnede.

De standaardwaarden zijn W12x50 in A992 voor kolommen (gecentreerd), W16x26 in A992 voor liggers (bovenkant staal op de lijn) en HSS6x6x1/4 in A500 Gr C voor verbanden (gecentreerd). De opties blijven ingesteld totdat u ze wijzigt.

## Plaatsen door te klikken

### Een kolom

1. Kies {{ui:Plattegrond}} en kies het niveau waar de kolom begint.
2. Kies {{ui:Kolom}}.
3. Beweeg de aanwijzer naar een kruising. De dichtstbijzijnde stip licht op en de statusbalk noemt die.
4. Klik. De kolom loopt van dat niveau naar het volgende niveau omhoog (of naar het niveau {{ui:Tot}}). De statusbalk meldt bijvoorbeeld "Kolom W12x50 bij A/1, Niveau 1 tot Niveau 2."
5. Blijf klikken om meer te plaatsen. Druk op {{key:Esc}} als u klaar bent.

Als er geen niveau boven het aangeklikte niveau is, meldt de statusbalk "Er is geen niveau boven Niveau 2 dat de kolom kan bereiken. Voeg eerst een niveau toe."

### Een ligger

1. Kies {{ui:Plattegrond}} en kies het niveau van de ligger.
2. Kies {{ui:Ligger}}.
3. Klik op de eerste kruising. De statusbalk zegt "Van A/1 op Niveau 2. Klik nu op het andere uiteinde (Esc annuleert)." Een stippellijn volgt de aanwijzer.
4. Klik op de tweede kruising. De ligger verschijnt.
5. Klik opnieuw om de volgende ligger te beginnen, of druk op {{key:Esc}}.

{{key:Esc}} na de eerste klik annuleert alleen dat punt; een tweede {{key:Esc}} legt het gereedschap weg.

### Een verband

Een verband loopt tussen twee kruisingen op verschillende niveaus, dus dat gaat het makkelijkst in {{ui:Gevel}}.

1. Kies {{ui:Gevel}} en kies de rasterlijn met een letter waar het verband op ligt.
2. Kies {{ui:Verband}}.
3. Klik op het onderste uiteinde, en daarna op het bovenste uiteinde.

Gevels bestaan alleen voor rasterlijnen met een letter. Voor een verband in een raamwerk langs een genummerde lijn (van A naar B) gebruikt u {{ui:3D}} of het formulier {{ui:Toevoegen via raster}} hieronder.

:::touch
Op een touchscreen tikt u dicht bij de kruising: een tik kiest de dichtstbijzijnde stip binnen een korte afstand en doet niets als er geen stip in de buurt is. Er is geen markering voordat u tikt, dus controleer na elke tik het bericht in de statusbalk. Slepen met één vinger draait of verschuift de weergave in plaats van te plaatsen.
:::

## Plaatsen via raster, zonder klikken

Elk plaatsgereedschap heeft een formulier {{ui:Toevoegen via raster}} onderaan het paneel {{ui:Eigenschappen}}. Het werkt alleen met het toetsenbord en heeft de 3D-weergave niet nodig.

1. Kies het gereedschap, bijvoorbeeld {{ui:Ligger}}.
2. Kies in {{ui:Toevoegen via raster}} {{ui:Vanaf raster (letter)}}, {{ui:Vanaf raster (nummer)}} en {{ui:Vanaf niveau}}.
3. Kies {{ui:Tot raster (letter)}}, {{ui:Tot raster (nummer)}} en {{ui:Tot niveau}}.
4. Kies {{ui:Toevoegen}}.

Voor een kolom of fundering heeft het formulier maar één punt: {{ui:Raster (letter)}}, {{ui:Raster (nummer)}} en {{ui:Niveau}}.

## Een onderdeel wijzigen na het plaatsen

1. Druk op {{key:Esc}} (of kies {{ui:Selecteren}}, {{key:V}}) en klik op het onderdeel.
2. Wijzig in het paneel {{ui:Eigenschappen}} {{ui:Naam}}, {{ui:Profiel}}, {{ui:Materiaal}}, {{ui:Positie}} of {{ui:Draaiing (°)}}.
3. Om het te verplaatsen, bewerkt u de x, y en z van {{ui:Begin}} of {{ui:Einde}} onder {{ui:Uiteinden (x, y, z mm)}}. De rasternaam van elk uiteinde staat eronder, of de coördinaten als het niet op het raster ligt.

Elke wijziging is één ongedaan-maken-stap. Onder de velden ziet u het {{ui:Onderdeelmerk}}, de {{ui:Samenstelling}}, de {{ui:Snijlengte}}, het {{ui:Gewicht}} (bruto: gaten en copings worden niet afgetrokken) en uit welke catalogus het profiel komt.

Onderdelen kunnen nog niet worden versleept of als array geplaatst. Om een ander onderdeel zoals dit te maken, kopieert en plakt u het, of dupliceert u het ({{key:Mod+D}}): zie [Kopiëren, plakken en dupliceren](topic:copy-paste).

## Een onderdeel verwijderen

Selecteer het en druk op {{key:Delete}} of {{key:Backspace}}, of kies {{ui:Verwijderen}}. Verbindingen erop gaan mee weg. {{key:Mod+Z}} haalt alles terug.

## Let op

- **Welke kant een kolom op wijst.** Bij {{ui:Draaiing (°)}} 0 wijzen de flenzen van een kolom langs x, naar de naastgelegen genummerde rasterlijnen. Een ligger van raster 1 naar raster 2 sluit aan op een flens; een ligger van A naar B sluit aan op het lijf. Kopplaten worden alleen op flenzen gebouwd, dus als uw liggers van A naar B lopen, geeft u die kolommen een draaiing van 90.
- **Liggers op een niveau hangen eronder** bij de standaard {{ui:Bovenkant staal op de lijn}}. Kies {{ui:Gecentreerd op de lijn}} als uw niveaus hartlijnen van onderdelen zijn.
- **Kolommen lopen van niveau naar niveau.** Voor een kolom door twee verdiepingen zet u {{ui:Tot}} op het hogere niveau.
- **Hellende liggers** mogen (kies uiteinden op verschillende niveaus), maar er worden daarop nog geen kopplaten gebouwd.

Volgende: [Liggers aan kolommen verbinden met kopplaten](topic:end-plates).
