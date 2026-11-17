---
title: Bewegen in de 3D-weergave
summary: Draai, verschuif en zoom met een muis, een trackpad of een touchscreen, en wanneer u in plaats daarvan Plattegrond en gevel gebruikt.
keywords: draaien, roteren, verschuiven, zoomen, navigeren, weergave, camera, trackpad, aanraken, plattegrond, gevel, passend, muis
from: 02c9c7b9
---

De weergave heeft drie modi, gekozen in de weergavebalk erboven: {{ui:3D}}, {{ui:Plattegrond}} en {{ui:Gevel}}. De muisknoppen doen iets anders in 3D dan in Plattegrond en gevel, dus lees beide tabellen.

## In 3D

:::mouse
| Om | Doe dit |
|---|---|
| Rond het model draaien | Sleep met de linkerknop |
| Verschuiven | Sleep met de rechterknop, of houd {{key:Shift}} ingedrukt en sleep met de linkerknop |
| Zoomen | Draai het wiel, of sleep omhoog en omlaag met de middelste knop (wiel ingedrukt) |
| Een onderdeel selecteren | Klik erop (een klik die minder dan een paar pixels beweegt) |
| Het hele model zien | De passend-knop aan het rechteruiteinde van de weergavebalk |
:::

:::touch
| Om | Doe dit |
|---|---|
| Rond het model draaien | Sleep met één vinger |
| Verschuiven | Sleep met twee vingers |
| Zoomen | Knijp met twee vingers |
| Een onderdeel selecteren | Tik erop |
| Het hele model zien | De passend-knop aan het rechteruiteinde van de weergavebalk |
:::

De weergavekubus rechtsboven (onder de weergavebalk) draait mee met het model: klik op een vlak, rand of hoek om vanaf daar te kijken, sleep hem om te draaien, of klik op de huisknop om terug te gaan naar het begin. Zie [De weergavekubus](topic:view-cube).

Het model draait om het midden van de weergave, en het wiel zoomt naar het midden van de weergave, niet naar de aanwijzer. Om goed naar één hoek te kijken, verschuift u die eerst naar het midden en zoomt u daarna.

## In Plattegrond en gevel

Deze weergaven kijken recht naar het model en kunnen niet gedraaid worden.

:::mouse
| Om | Doe dit |
|---|---|
| Verschuiven | Sleep met de linker- of de rechterknop |
| Zoomen | Draai het wiel, of sleep omhoog en omlaag met de middelste knop |
| Een onderdeel selecteren | Klik erop |
:::

:::touch
| Om | Doe dit |
|---|---|
| Verschuiven | Sleep met één vinger |
| Zoomen | Knijp met twee vingers (slepen met twee vingers verschuift ook) |
| Een onderdeel selecteren | Tik erop |
:::

## Op een Mac-trackpad

:::mac
- **Zoomen:** veeg omhoog of omlaag met twee vingers, of knijp. Beide komen in de weergave aan als zoomen.
- **Draaien (3D):** druk op het trackpad en sleep met één vinger. Als u tikken om te klikken gebruikt, werkt dubbel tikken en slepen ook, wanneer slepen is ingeschakeld in **Systeeminstellingen, Toegankelijkheid, Aanwijzerbediening, Trackpadopties**.
- **Verschuiven (3D):** houd {{key:Shift}} ingedrukt en sleep. Met {{key:Ctrl}} of {{key:Mod}} ingedrukt tijdens het slepen verschuift u ook. Een klik met twee vingers is een rechtsklik, maar slepen daarmee is lastig op een trackpad.
- **Verschuiven (Plattegrond en gevel):** sleep gewoon.
- Een Magic Mouse heeft geen middelste knop: gebruik het slepen met {{key:Shift}} om te verschuiven en een veeg over het oppervlak om te zoomen.
:::

Meer over rechtsklikken en verschuiven zonder muis: [Toetsen, muizen en trackpads](common:keys).

## Plattegrond en gevel maken plaatsen makkelijk

In {{ui:3D}} kunnen kruispunten op verschillende niveaus op het scherm boven elkaar liggen, en een klik gaat naar het dichtstbijzijnde stipje. In {{ui:Plattegrond}} en {{ui:Gevel}} kunnen alleen de stipjes van het niveau of de rasterlijn waar u naar kijkt worden gekozen.

1. Kies {{ui:Plattegrond}}, en kies daarna een niveau in de lijst naast de knoppen. De weergave kijkt naar beneden op dat niveau; alles meer dan 1.5 m erboven wordt weggesneden.
2. Of kies {{ui:Gevel}}, en kies daarna een rasterlijn met letter ("Raster A", "Raster B" …). De weergave kijkt recht naar die lijn; alleen staal binnen 1 m ervan wordt getoond.

Gevels zijn alleen op rasterlijnen met letters. Om te werken aan een lijn van genummerde rasters (een spant van A tot B), gebruikt u {{ui:3D}}, of plaatst u door te typen in het formulier {{ui:Toevoegen via raster}}. Zie [Kolommen, liggers en verbanden plaatsen](topic:place-members#place-by-grid-without-clicking).

## Selecteren

- Klik op een onderdeel om het te selecteren. Het krijgt de markeerkleur en het paneel {{ui:Eigenschappen}} toont het.
- Klik op lege ruimte, of druk op {{key:Esc}}, om de selectie te wissen.
- Staal gaat voor beton: een klik op een kolom in een doorzichtige fundering selecteert de kolom. Klik op de fundering weg van de kolom, of op een van de staven, om de fundering te selecteren.
- Een klik op een bout of een kopplaat selecteert de verbinding.
- In Plattegrond en gevel kunnen onderdelen die zijn weggesneden niet worden aangeklikt.
- Houd {{key:Shift}} (of {{key:Ctrl}}, of {{key:Mod}}) ingedrukt en klik om een onderdeel aan de selectie toe te voegen of eruit te halen; {{key:Mod+A}} selecteert alles. Er is nog geen selectie met een venster (een kader slepen). Wat u met meerdere onderdelen kunt doen: [Kopiëren, plakken en dupliceren](topic:copy-paste).

U kunt ook selecteren vanuit lijsten: klik op een merk in {{ui:Onderdeelmerken}} links, op een onderdeelmerk in de tab {{ui:Stuklijst}}, of op {{ui:Selecteren}} naast een regel in {{ui:Problemen}}.

## Als de weergave er vreemd uitziet

- Model kwijt? Kies de passend-knop.
- De weergave is leeg of grijs met een melding over WebGL: zie [Problemen oplossen](topic:troubleshooting#the-3d-view-is-missing).
- Alles werkt nog zonder de 3D-weergave, behalve klikken erin: de panelen, rapporten en exports werken allemaal, en {{ui:Toevoegen via raster}} plaatst staven door te typen.
