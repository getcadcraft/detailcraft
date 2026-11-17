---
title: Het voorbeeldraamwerk verkennen
summary: Open het ingebouwde raamwerk met twee vakken en gebruik het om te leren wat DetailCraft maakt, van merken tot NC-bestanden.
keywords: voorbeeld, demo, raamwerk, leren, rondleiding, proberen
from: 5c5944dd
---

Het voorbeeldraamwerk is een klein, volledig model: elke soort ding die DetailCraft bouwt, komt er minstens één keer in voor. Het is de snelste manier om de app te leren kennen en een export te testen voordat u erop vertrouwt.

## Openen

1. Kies {{ui:Voorbeeld}} in de groep {{ui:Bestand}}.
2. Heeft uw huidige model niet-opgeslagen wijzigingen, kies dan {{ui:Eerst opslaan}} of {{ui:Wijzigingen weggooien}}.
3. De statusbalk zegt "Voorbeeldraamwerk: 6 kolommen met voetplaten, 4 liggers met eindplaten, een verband, 7 funderingen met wapening."

Het voorbeeld opent als een nieuw model met de naam "Voorbeeldraamwerk". Het verandert niets anders en heeft niets om ongedaan te maken.

## Wat erin zit

- **Rasters** 1, 2, 3 op 6000 mm en A, B op 7000 mm. **Niveaus** Niveau 1 op 0 en Niveau 2 op 4000.
- **Zes kolommen**, W12x50, van Niveau 1 tot Niveau 2 op elke kruising, elk op een voetplaat van 25 mm met vier ankerstaven.
- **Vier liggers**, W16x26, op Niveau 2 langs de rasterlijnen A en B, met de bovenkant van het staal op het niveau, en aan beide uiteinden een vlakke, geboute eindplaat (acht in totaal).
- **Eén verband**, HSS4x4x1/4, van A/1 op Niveau 1 tot A/2 op Niveau 2.
- **Zes plaatfunderingen**, 2000 x 2000 x 600, één onder elke kolom, met een onderste mat met haken in beide richtingen.
- **Eén extra fundering** naast het raster, 2400 x 1800 x 600, met zes gehaakte aansluitstaven die omhoog steken voor een betonnen pilaar.

## Dingen om te proberen

1. Klik een ligger. Lees zijn {{ui:Onderdeelmerk}}, {{ui:Samenstelling}}, {{ui:Snijlengte}} en {{ui:Ingekort}}: de snijlengte is korter dan de rasterafstand van 6000 mm, omdat elke eindplaat de balk inkort met de helft van de kolomdiepte plus de plaatdikte.
2. Klik een kolom. Onder {{ui:Gaten}} staan de gaten die de eindplaten in haar flens maakten ("8 gaten van verbindingen"; de middelste kolommen hebben er 16, één set in elke flens).
3. In de lijst {{ui:Onderdeelmerken}} links ziet u dat alle vier liggers één merk delen: het zijn hetzelfde stuk staal. De hoekkolommen delen ook een merk, ook al zijn hun gaten naar tegenovergestelde kanten gericht, omdat een kolom die van het ene uiteinde naar het andere is omgedraaid, hetzelfde stuk is. De middelste kolommen, met gaten in beide flenzen, krijgen een ander merk.
4. Klik een eindplaat (of een van zijn bouten). Het paneel {{ui:Eigenschappen}} toont de instellingen voor plaat, bout en las, de bouten die hij maakt (met hun lengte berekend uit de grip) en eventuele waarschuwingen over de randafstand.
5. Open het tabblad {{ui:Stuklijst}}. Onderdelen, samenstellingen, en bouten en ankerstaven staan erin, met gewichten. U zou zes onderdeelmerken moeten zien: c1 (de twee middelste kolommen) en c2 (de vier hoekkolommen), beide W12x50 op 3975 mm; b1, vier W16x26-liggers op 5650 mm; br1, het verband; p1, acht PL20x180-eindplaten; en p2, zes PL25x400-voetplaten. De bevestigingsmiddelen zijn 64 bouten 20 x 70 A325 en 24 ankerstaven 20 x 575.
6. Open het tabblad {{ui:Buigstaat}}. De zes identieke funderingen delen staafmerken; de extra pilaarfundering voegt er zijn eigen merken aan toe.
7. Klik het verband en kijk naar de groep {{ui:Uitvoer}}: {{ui:Werkplaatstekening}} is grijs, omdat werkplaatstekeningen tot nu toe alleen I-profielen en platen omvatten.
8. Kies {{ui:NC-bestanden}}. Het zip-bestand bevat een bestand voor elk I-profiel- en plaatmerk; de statusbalk somt het merk van het verband op als niet geschreven.
9. Kies {{ui:IFC}} en open het bestand in een willekeurige IFC-viewer om te zien hoe uw andere software het leest.

## Als startpunt gebruiken

Het voorbeeld is een gewoon model. Pas het aan, geef het dan een nieuwe naam in het veld {{ui:Naam}} en sla het op onder die nieuwe naam met {{key:Mod+S}}.
