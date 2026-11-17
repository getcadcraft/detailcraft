---
title: Kopiëren, plakken en dupliceren
summary: Selecteer meerdere onderdelen, kopieer ze met hun gaten, uitsnijdingen en verbindingen, en plak ze op een rasterkruising, met een verschuiving, op dezelfde plaats of in een ander tabblad. Knippen, dupliceren, verwijderen en alles selecteren.
keywords: kopiëren, plakken, knippen, dupliceren, klembord, op dezelfde plaats plakken, alles selecteren, niets selecteren, meervoudig selecteren, shift klikken, meerdere, travee herhalen, portaal kopiëren, verschuiving, meerdere verwijderen, menu bewerken, menu meer
from: f25f1829
---

De groep {{ui:Edit}} op de werkbalk heeft {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} en {{ui:Paste}}. Het menu {{ui:More}} bevat de rest: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} en {{ui:Select none}}, elk met de bijbehorende toets. Een knop of menu-item dat op dit moment niet kan werken, is grijs weergegeven; houd de aanwijzer erop om te lezen waarom (bijvoorbeeld "nog niets gekopieerd").

Elk plakken, knippen, dupliceren en verwijderen is één stap: met {{key:Mod+Z}} neemt u alles in één keer terug.

## Meerdere onderdelen selecteren

- Klik op een onderdeel om het te selecteren. Houd {{key:Shift}} (of {{key:Ctrl}}, of {{key:Mod}}) ingedrukt en klik op meer onderdelen om ze toe te voegen; klik op een geselecteerd onderdeel om het op dezelfde manier uit de selectie te halen.
- {{key:Mod+A}} of {{ui:Select all}} selecteert elke staaf, verbinding en fundering.
- {{key:Esc}} of {{ui:Select none}} heft de selectie op.

Met meerdere dingen geselecteerd heeft het paneel {{ui:Properties}} de kop "4 geselecteerd" (of het juiste aantal) en somt het de staven per type op, de verbindingen, de funderingen en het bruto staalgewicht, met de knoppen {{ui:Copy}}, {{ui:Duplicate}} en {{ui:Delete}}.

## Kopiëren

1. Selecteer de staven en funderingen die u wilt.
2. Kies {{ui:Copy}} of druk op {{key:Mod+C}}.

Wat er meekomt:

- Elke staaf volledig: profiel, materiaal, uiteinden, positie, rotatie, naam, gaten en uitsnijdingen. Een eigen profiel dat hij gebruikt, wordt ook gekopieerd.
- Elke fundering volledig: afmetingen, beton, onderste wapeningsmat en aansluitwapening.
- Kopplaten en voetplaten, maar alleen wanneer elke staaf die een verbinding verbindt ook wordt gekopieerd: de kopplaat van een ligger heeft de ligger en zijn kolom nodig. De statusbalk zegt hoeveel verbindingen zijn weggelaten. Om verbindingen bewust weg te laten, schakelt u **Kopplaten en voetplaten kopiëren met hun staven** uit in [DetailCraft-instellingen](topic:settings).

Een verbinding op zich kan niet worden gekopieerd; selecteer in plaats daarvan de staven. Om andere verbindingen dezelfde verbinding te geven, gebruikt u {{ui:Similar}} (zie [Kopplaten](topic:end-plates#copy-it-to-every-similar-joint)).

De kopie blijft in deze browser staan totdat u iets anders kopieert. Een ander DetailCraft-tabblad of -venster in dezelfde browser kan hem plakken, zodat u een portaal uit het ene model kunt kopiëren en in een ander model kunt plakken.

## Plakken op een rasterkruising

1. Kies {{ui:Paste}} of druk op {{key:Mod+V}}.
2. Beweeg de aanwijzer over het aanzicht. Een gestreepte omtrek van de kopie volgt de rasterkruising die het dichtst bij de aanwijzer ligt.
3. Klik op een kruising. Het basispunt van de kopie (de laagste hoek: de kleinste x, y en z van alles wat is gekopieerd) komt daar terecht.

De geplakte onderdelen zijn daarna geselecteerd, zodat u ze elders opnieuw kunt plakken of wijzigen. {{key:Esc}} annuleert een plakactie; de kopie blijft op het klembord. {{ui:Plan}} en {{ui:Elevation}} maken de juiste kruising makkelijker te raken.

:::tip
Om een travee te herhalen, selecteert u de staven van de travee (of alles met {{key:Mod+A}}), kopieert, plakt en klikt op de kruising één travee verder dan waar het laagste hoekpunt van de kopie was.
:::

## Plakken met het toetsenbord

Tijdens het plakken toont het paneel {{ui:Properties}} wat op het klembord staat en twee formulieren:

- {{ui:Paste by offset (mm, from the original)}}: typ x, y en z en kies {{ui:Paste at this offset}}. Het begint met de verschuiving uit [DetailCraft-instellingen](topic:settings).
- {{ui:Paste onto a grid intersection}}: kies een letterraster, een nummerraster en een niveau, en kies {{ui:Paste here}}. Het basispunt gaat daarheen.

## Op dezelfde plaats plakken

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) zet de kopie precies op de coördinaten waar hij vandaan is gekopieerd. Gebruik dit na {{ui:Cut}}, of om onderdelen uit een ander model op dezelfde plek te brengen. Als de originelen er nog staan, ligt de kopie er bovenop en waarschuwt de statusbalk u: verplaats de kopieën via hun {{ui:Start}} en {{ui:End}} in {{ui:Properties}}, of maak ongedaan.

## Dupliceren

{{ui:Duplicate}} ({{key:Mod+D}}) kopieert de selectie en plakt die meteen, verplaatst met de verschuiving uit [DetailCraft-instellingen](topic:settings) (in het begin 6000 mm langs x). Het verandert niets aan wat op het klembord staat. De kopieën zijn daarna geselecteerd, zodat {{key:Mod+D}} opnieuw de volgende kopie van hen maakt.

## Knippen en verwijderen

- {{ui:Cut}} ({{key:Mod+X}}) kopieert de selectie en verwijdert hem daarna. Plak hem waar hij hoort.
- {{ui:Delete}} ({{key:Delete}} of {{key:Backspace}}) verwijdert de selectie. Een staaf verwijderen verwijdert ook zijn verbindingen.

## Markeringen na een plakactie

Onderdeel- en montagemarkeringen worden nooit opgeslagen; DetailCraft nummert ze na elke wijziging opnieuw vanuit het model ([Hoe markeringen worden toegekend](topic:mark-rules)). Dus:

- Een kopie die hetzelfde stuk is als het origineel (zelfde profiel, kwaliteit, snijlengte, gaten en uitsnijdingen) deelt de markering van het origineel, en het aantal in {{ui:Part marks}} en de materiaallijst gaat omhoog.
- Een kopie die anders uitvalt, krijgt een eigen markering. Een ligger die zonder zijn kopplaten is geplakt, wordt bijvoorbeeld niet teruggesneden en is dus een ander stuk. Markeringen worden over het hele model opnieuw genummerd, dus ook de nummers van andere onderdelen kunnen veranderen.

Elke geplakte staaf, elk gat, elke uitsnijding, verbinding en fundering krijgt een nieuw id, zodat niets in het model ooit wordt gedeeld tussen een kopie en het origineel.

## Als het klembord wordt geweigerd

Wat op het klembord staat, wordt even zorgvuldig gecontroleerd als een modelbestand dat u opent: alles wat geen geldig DetailCraft-onderdeel is, wordt weggelaten, en de statusbalk zegt wat. Een klembord dat door een nieuwere DetailCraft of door iets anders is gevuld, wordt geweigerd met een melding en er wordt niets geplakt. Als een privévenster de kopie niet in de browseropslag kan bewaren, werkt de kopie nog wel in dat tabblad.
