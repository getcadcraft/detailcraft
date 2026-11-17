---
title: Toetsen en muisacties
summary: Elke sneltoets en elke muis-, trackpad- en aanraakactie in DetailCraft, uit de code.
keywords: toetsenbord, sneltoetsen, toetsen, muis, trackpad, aanraken, ctrl, command, spiekbrief
from: 05a2dea0
---

Hoe toetsen in deze help worden geschreven: [Toetsen, muizen en trackpads](common:keys). Op een Mac is {{key:Mod}} de Command-toets; elders is het Ctrl.

## Gereedschappen

Deze werken wanneer de cursor niet in een tekst- of getalveld staat.

| Toets | Doet |
|---|---|
| {{key:V}} | {{ui:Selecteren}} |
| {{key:B}} | {{ui:Ligger}} |
| {{key:C}} | {{ui:Kolom}} |
| {{key:R}} | {{ui:Verband}} |
| {{key:P}} | {{ui:Plaat}} |
| {{key:F}} | {{ui:Fundering}} |
| {{key:S}} | {{ui:Trap}} |
| {{key:M}} | Verplaats de selectie door twee rasterkruispunten aan te wijzen ([Selecteren met een venster, verplaatsen, roteren, spiegelen, meerdere wijzigen](topic:select-and-change)) |
| {{key:Esc}} | Laat een selectievenster dat wordt gesleept los, of plaats gesleepte onderdelen terug; annuleer een verplaatsing, het eerste punt van een ligger, verband of plaat, of een plakactie; druk opnieuw om terug te gaan naar {{ui:Selecteren}}; in {{ui:Selecteren}} wist u de selectie. Met het geopende {{ui:Meer}}-menu sluit u het |
| {{key:Delete}} of {{key:Backspace}} | Verwijder de selectie (alles wat geselecteerd is, in één ongedaan-maken-stap) |

## Bestand en bewerken

| Toets | Doet |
|---|---|
| {{key:Mod+S}} | Sla het model op (downloaden). Werkt ook als u in een veld typt |
| {{key:Mod+O}} | Open een model. Werkt ook als u in een veld typt |
| {{key:Mod+Z}} | Ongedaan maken (buiten tekstvelden; binnen een tekstveld maakt het uw typen ongedaan) |
| {{key:Mod+Y}} of {{key:Mod+Shift+Z}} | Opnieuw |

## Kopiëren en plakken

Deze werken wanneer de cursor niet in een tekst- of getalveld staat (daar kopiëren, plakken en selecteren ze uw tekst zoals gewoonlijk). Elke plak-, knip-, dupliceer- of verwijderactie is één ongedaan-maken-stap. Meer: [Kopiëren, plakken en dupliceren](topic:copy-paste).

| Toets | Doet |
|---|---|
| {{key:Mod+C}} | {{ui:Kopiëren}}: de geselecteerde staven en funderingen (met hun gaten, copings en verbindingen) |
| {{key:Mod+X}} | {{ui:Knippen}}: kopieer de selectie en verwijder die daarna |
| {{key:Mod+V}} | {{ui:Plakken}}: de kopie volgt de aanwijzer; klik op een rasterkruispunt om hem daar te plaatsen |
| {{key:Mod+Shift+V}} | {{ui:Op dezelfde plaats plakken}}: op de coördinaten waar hij vandaan is gekopieerd |
| {{key:Mod+D}} | {{ui:Dupliceren}}: direct een kopie, verschoven met de offset in [DetailCraft-instellingen](topic:settings) |
| {{key:Mod+A}} | {{ui:Alles selecteren}}: elke staaf, verbinding en fundering |
| {{key:Esc}} | {{ui:Niets selecteren}} |

Als u tekst op de pagina hebt geselecteerd (bijvoorbeeld in een rapporttabel) en niets in het model, kopieert {{key:Mod+C}} de tekst, zoals gewoonlijk.

{{ui:Nieuw}}, {{ui:Voorbeeld}} en de exports hebben geen toetsen; gebruik de werkbalk.

Geen van deze toetsen doet iets terwijl een dialoogvenster (het voorbeeld van de werkplaatstekening of een vraag) open is.

## Velden en panelen

| Toets | Doet |
|---|---|
| {{key:Enter}} of {{key:Tab}} | Pas een getypte waarde toe (elke wijziging is één ongedaan-maken-stap) |
| {{key:Enter}} in een veld {{ui:Rasters}}, {{ui:Niveaus}}, {{ui:Eigen profiel}}, gat- of coping-veld | Hetzelfde als op de knop van dat formulier klikken |
| {{key:Left}} {{key:Right}} | Verplaats tussen de tabbladen {{ui:Problemen}}, {{ui:Stuklijst}} en {{ui:Buigstaat}} wanneer een tabblad de focus heeft |
| {{key:Esc}} | Sluit het voorbeeld van de werkplaatstekening of een vraagdialoogvenster (hetzelfde als {{ui:Annuleren}}) |

## Scherm en help

| Toets | Doet |
|---|---|
| {{key:Ctrl+Shift+F}} | Wissel tussen normaal, volledig scherm en volledig scherm met verborgen balken. Control op elke computer, ook een Mac |
| {{key:Mod+,}} | Open {{ui:Instellingen}} ([DetailCraft-instellingen](topic:settings)) |
| {{key:Esc}} | Verlaat volledig scherm |
| {{key:F1}} | Open deze help |

## Muis

| Actie | In 3D | In Plattegrond en gevel |
|---|---|---|
| Klik | Selecteer een onderdeel, of plaats het op het dichtstbijzijnde kruispunt wanneer een plaatsgereedschap aan staat (of plak daar terwijl u plakt) | Hetzelfde |
| {{key:Shift}}, {{key:Ctrl}} of {{key:Mod}} en klik | Voeg het onderdeel toe aan de selectie, of haal het eruit | Hetzelfde |
| Druk op een geselecteerd onderdeel en sleep | Verplaats de selectie over het niveau; met {{key:Mod}} ingedrukt, omhoog en omlaag | Verplaats de selectie (in een gevel: langs en omhoog en omlaag) |
| Sleep met de linkerknop | Draai het model | Met {{ui:Selecteren}}: een selectievenster (naar rechts: volledig binnen; naar links: aanrakend). Tijdens het plaatsen: verschuiven |
| {{key:Shift}} en sleep met de linkerknop | Met {{ui:Selecteren}}: een selectievenster, toegevoegd aan de selectie. Tijdens het plaatsen: verschuiven | Met {{ui:Selecteren}}: een selectievenster, toegevoegd aan de selectie |
| {{key:Ctrl}} of {{key:Mod}} en sleep met de linkerknop | Verschuiven | Niets |
| Sleep met de rechterknop | Verschuiven | Verschuiven |
| Wiel | Zoom naar het midden van de weergave | Zoomen |
| Sleep met de middelste knop | Zoomen | Met {{ui:Selecteren}}: verschuiven. Anders zoomen |
| Zet een `.detailcraft.json`-bestand op de app | Open het | Open het |

Een klik telt alleen als de aanwijzer tussen indrukken en loslaten minder dan ongeveer 5 pixels beweegt; een langere beweging is een slepen.

## Trackpad

| Actie | Doet |
|---|---|
| Veeg met twee vingers omhoog of omlaag, of knijp | Zoomen |
| Druk en sleep | Draaien (3D) of verschuiven (Plattegrond en gevel) |
| {{key:Shift}} en druk en sleep | Verschuiven in 3D |
| Klik met twee vingers | Rechtsklik (er is geen menu in de weergave) |

## Aanraken

Op een tablet of touchscreen:

| Actie | Doet |
|---|---|
| Tik | Selecteer een onderdeel, of plaats het op het dichtstbijzijnde rasterkruispunt wanneer een plaatsgereedschap aan staat (een tik binnen ongeveer de breedte van een vinger telt) |
| Lang indrukken op een onderdeel | Voeg het toe aan de selectie, of haal het eruit (wat {{key:Shift}}+klik doet met een muis) |
| Eén vinger op een geselecteerd onderdeel, en dan slepen | Verplaats de selectie, vastklikkend op rasterkruispunten |
| Eén vinger elders | Draai het model (3D) of verschuif (Plattegrond en gevel) |
| Twee vingers | Knijpen om te zoomen, samen bewegen om te verschuiven |

Knoppen, lijsten en velden zijn groter wanneer het scherm alleen aanraking ondersteunt. Selectievensters hebben een muis nodig; met vingers tikt u en houdt u lang ingedrukt.

## Toetsen die de browser behoudt

Sommige sneltoetsen horen bij de browser en geen enkele pagina kan ze gebruiken, bijvoorbeeld {{key:Mod+W}} (tabblad sluiten), {{key:Mod+T}} (nieuw tabblad) en {{key:Mod+N}} (nieuw venster). Als {{key:Mod+Y}} de geschiedenis van uw browser opent in plaats van opnieuw uit te voeren, gebruik dan {{key:Mod+Shift+Z}}.

Sneltoetsen bereiken DetailCraft alleen wanneer de pagina het toetsenbord heeft. Als een toets niets doet, of de browser er iets mee doet, klik dan eerst op een leeg deel van het DetailCraft-venster (bijvoorbeeld na typen in de adresbalk).

## Waar Verplaatsen zit

Er is geen opdracht Verplaatsen: selecteer een onderdeel en sleep het over het niveau (houd {{key:Mod}} ingedrukt om omhoog en omlaag te slepen), of wijzig de {{ui:Begin}} en {{ui:Einde}} in {{ui:Eigenschappen}}.
