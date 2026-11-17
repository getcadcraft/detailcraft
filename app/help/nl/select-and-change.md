---
title: Selecteren met een venster, verplaatsen, roteren, spiegelen, veel tegelijk wijzigen
summary: Sleep een venster om te selecteren, sleep geselecteerde onderdelen om ze te verplaatsen, verplaats, roteer of spiegel de selectie (of een kopie ervan), of wijzig profiel, materiaal, positie of rotatie van veel staven tegelijk.
keywords: lasso, hekje, vrije selectie, slepen, slepen en neerzetten, verplaatsen door slepen, snap, venster, kruisvenster, kaderselectie, slepen om te selecteren, veel selecteren, verplaatsen, roteren, spiegelen, omdraaien, kopiëren, veel wijzigen, meerdere staven, profiel, materiaal, positie, rotatie, varieert, rasterlijn
from: 50b16f9a
---

Elk van deze handelingen is één stap die ongedaan kan worden gemaakt: één keer {{key:Mod+Z}} maakt alles in één keer ongedaan.

## Selecteren met een venster

- In {{ui:Plattegrond}} en {{ui:Gevel}} sleept u met de linkermuisknop vanaf een lege plek. In {{ui:3D}} houdt u {{key:Shift}} ingedrukt en sleept u (een gewone sleep draait het model).
- Sleep **naar rechts** voor een venster: het neemt wat helemaal binnen ligt, getekend met een volle rand.
- Sleep **naar links** voor een kruisvenster: het neemt alles wat het raakt, getekend met een stippellijn.
- Houd {{key:Shift}} ingedrukt bij het begin van de sleep om aan de selectie toe te voegen in plaats van die te vervangen.
- Een plattegrond of gevel biedt alleen aan wat het toont: onderdelen die boven de plattegrond zijn weggesneden, of meer dan 1 m van de rasterlijn van de gevel, worden niet geselecteerd.
- {{key:Esc}} tijdens het slepen laat het venster vallen.

### Lasso

Kies **Lasso** onder {{ui:Slepen om te selecteren}} in de [DetailCraft-instellingen](topic:settings), en dezelfde sleep tekent een vrije lijn in plaats van een rechthoek.

- De eerste zijwaartse beweging bepaalt hoe er wordt geselecteerd: **naar rechts** wat helemaal binnen ligt (volle lijn); **naar links** wat het raakt (stippellijn).
- Druk tijdens het slepen op {{key:Space}} om te wisselen tussen binnen, raken en **hekje**: een open lijn die alles neemt wat hij kruist (stippellijn, oranje).
- {{key:Shift}} om toe te voegen en {{key:Esc}} om hem te laten vallen werken zoals bij het venster.

:::touch
Op een touchscreen verschuift één vinger de plattegrond en gevel zoals voorheen; selecteer onderdelen door ze aan te tikken.
:::

In {{ui:Plattegrond}} en {{ui:Gevel}} verschuift u met de rechter- of middelste knop terwijl het gereedschap {{ui:Selecteren}} aan staat.

## Onderdelen slepen om ze te verplaatsen

1. Selecteer eerst de onderdelen (klik, {{key:Shift}}+klik of een venster).
2. Druk op een van de geselecteerde onderdelen en sleep. De hele selectie verplaatst; een stippellijn toont waar hij naartoe gaat.
3. Laat los om te plaatsen. {{key:Esc}} voordat u loslaat zet alles terug.

- In {{ui:3D}} en {{ui:Plattegrond}} verplaatsen de onderdelen over de verdieping. Houd {{key:Mod}} ingedrukt bij het begin van de sleep in {{ui:3D}} om ze in plaats daarvan omhoog en omlaag te verplaatsen.
- In {{ui:Gevel}} verplaatsen ze binnen de gevel: langs de rasterlijn en omhoog en omlaag.
- Het onderdeel dat u vasthoudt, klikt vast op een rastersnijpunt zodra zijn eind binnen enkele pixels komt (het snijpunt licht op en de statusbalk noemt het). Anders gaat de verplaatsing in stappen van 10 mm.
- Drukt u op een onderdeel dat niet geselecteerd is, dan draait of verschuift de weergave nog steeds, zodat een sleep nooit per ongeluk iets verplaatst.
- De sleep is één stap ongedaan te maken, net als {{ui:Verplaatsen}}. Verbindingen volgen hun staven.

## Een eigenschap bij veel staven wijzigen

Selecteer twee of meer staven. Onder **Wijzigen bij alle** in het paneel {{ui:Eigenschappen}}:

- {{ui:Profiel}}, {{ui:Positie}}: voor de balken, kolommen en verbanden onder hen.
- {{ui:Plaatdikte (mm)}} en {{ui:Plaatbreedte (mm)}}: voor de platen.
- {{ui:Materiaal}} en {{ui:Draaiing (°)}}: voor allemaal.

Een veld toont **Varieert** wanneer de staven het niet eens zijn. Kies of typ een waarde, en elke staaf waarop die van toepassing is neemt hem over; de statusbalk zegt hoeveel er zijn gewijzigd en hoeveel hun eigen waarde hebben behouden.

Getalvelden in het paneel {{ui:Eigenschappen}} accepteren ook een berekening: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Een berekening die niet kan worden gelezen, wordt geweigerd, en de statusbalk zegt waar het misging.

## Verplaatsen, roteren of spiegelen

Selecteer staven en funderingen (ook één werkt), gebruik dan **Verplaatsen, roteren, spiegelen** in het paneel {{ui:Eigenschappen}}. Verbindingen worden niet apart verplaatst: ze volgen hun staven. Als u een balk verplaatst maar niet zijn kolom, meldt de statusbalk hoeveel verbindingen nu een verplaatste staaf verbinden met een die is blijven staan, en [Problemen](topic:troubleshooting) zegt of ze niet meer passen.

- **Verplaatsen:** typ x, y en z in millimeters en kies {{ui:Verplaatsen}}. Of kies {{ui:Twee punten kiezen}} (of druk op {{key:M}}): klik op het rastersnijpunt waarvandaan, en daarna op het punt waarnaartoe. Een stippellijn volgt de aanwijzer.
- **Roteren in plattegrond:** typ de hoek (tegen de klok in, gezien van boven) en kies waarom te draaien: het middelpunt van de selectie, of een rastersnijpunt. Kolommen draaien mee met het raster.
- **Spiegelen:** kies een rasterlijn. Het spiegelbeeld is hetzelfde profiel de andere kant op gedraaid: een I-profiel houdt zijn flenzen, een U-profiel wijst de andere kant op (boven en onder wisselen), en gaten en copings gaan mee met het onderdeel.
- Vink **Origineel behouden (kopie maken)** aan om de selectie op zijn plaats te laten en een kopie te verplaatsen, roteren of spiegelen. De verbindingen komen mee wanneer {{ui:Kopplaten en voetplaten meekopiëren met hun staven}} aan staat in de [DetailCraft-instellingen](topic:settings).

Roteren gebeurt om een verticale lijn en spiegelen in een verticaal vlak, zodat verdiepingen waterpas blijven en funderingen rechtop staan.
