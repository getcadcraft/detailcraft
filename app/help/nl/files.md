---
title: Bestanden openen, opslaan en exporteren
summary: Het DetailCraft-modelbestand, elke export die het schrijft, waar de bestanden heen gaan en wat verschilt per browser en verbinding.
keywords: openen, opslaan, exporteren, downloaden, bestand, json, ifc, nc1, dstv, csv, pdf, zip, formaten, importeren
from: bd715ea3
---

DetailCraft heeft één eigen bestand, het model, en vijf exports. Elke keer opslaan en elke export is een download. Er wordt niets geüpload en er wordt niets op een server bewaard.

## Het modelbestand

Een DetailCraft-model wordt opgeslagen als `<naam>.detailcraft.json`, waarbij `<naam>` de modelnaam in het paneel {{ui:Model}} is. Het bevat de rasters, niveaus, staven (met hun gaten en coperingen), verbindingen en hun instellingen, funderingen en uw eigen profielen.

Onderdelen, merken, bouten, lassen en staven worden niet opgeslagen: DetailCraft rekent ze elke keer dat het opent opnieuw uit het model uit. Daarom is een modelbestand klein.

### Opslaan

1. Typ een naam in het veld {{ui:Naam}} bovenaan het paneel {{ui:Model}}.
2. Kies {{ui:Opslaan}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+S}}.
3. De browser downloadt `<naam>.detailcraft.json`. De statusbalk zegt "… opgeslagen (gedownload)" en de punt aan het begin van de titel van het browsertabblad verdwijnt.

Elke keer opslaan is een nieuwe download. De browser overschrijft het bestand dat u hebt geopend niet; afhankelijk van zijn instellingen voegt hij een nummer aan de naam toe, zoals `Frame (1).detailcraft.json`, of vraagt hij waar het moet worden opgeslagen. Bewaar uw eigen versies door de downloads te hernoemen.

:::chromium
Chrome en Edge slaan op in uw map Downloads, tenzij **Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload** aanstaat in de downloadinstellingen van de browser. Zet het aan als u elke keer een map en bestandsnaam wilt kiezen.
:::

:::firefox
Firefox slaat op in uw map Downloads, of vraagt het elke keer als **Altijd vragen waar bestanden moeten worden opgeslagen** aanstaat in zijn instellingen.
:::

:::safari
Safari slaat op in uw map Downloads. Om de map te wijzigen, opent u **Safari, Instellingen, Algemeen, Locatie voor gedownloade bestanden**.
:::

### Openen

1. Kies {{ui:Openen}} in de groep {{ui:Bestand}}, of druk op {{key:Mod+O}}.
2. Kies een `.detailcraft.json`-bestand.

Of sleep het bestand uit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheerder}} en zet het op de weergave neer. De weergave zegt "Zet een DetailCraft-model of een IFC-bestand hier neer om het te openen" terwijl u sleept.

Heeft het geopende model niet-opgeslagen wijzigingen, dan vraagt DetailCraft eerst: {{ui:Annuleren}}, {{ui:Wijzigingen weggooien}} of {{ui:Eerst opslaan}}.

DetailCraft controleert elk veld van een bestand voordat het het gebruikt. Alles wat het niet kan gebruiken, wordt weggelaten en de statusbalk zegt wat, bijvoorbeeld "2 staven waren niet geldig en zijn weggelaten." Een model dat door een nieuwere DetailCraft is opgeslagen, wordt met een melding geweigerd in plaats van half goed geopend.

### Wat het opent

Zijn eigen modelbestanden (`.json`, tot 50 MB) en IFC-bestanden (`.ifc`, IFC2X3 of IFC4, tot 200 MB). Een IFC-bestand, geopend of binnengehaald met {{ui:IFC importeren}}, wordt een nieuw model van zijn liggers, kolommen, staven, platen, rasters en niveaus, met de gaten en coperingen erin uitgesneden en zijn bouten als losse bouten; een rapport somt op wat is weggelaten. Zie [IFC-export](topic:ifc-export#import). Het opent nog geen DWG, DXF of het model van een ander detailleringsprogramma; proberen toont "DetailCraft opent zijn eigen modellen (.detailcraft.json) en IFC-bestanden (.ifc)."

## Verloren werk, recente bestanden, de desktopapp

- Zolang het model wijzigingen heeft die u niet hebt opgeslagen, bewaart DetailCraft een kopie in deze browser. Stopt het tabblad of de browser voordat u opslaat, dan vraagt DetailCraft de volgende keer dat u het opent **Uw werk herstellen?**: herstel de kopie, of laat haar gaan. Zie [Uw werk herstellen](common:recover).
- Modellen die u onlangs hebt geopend, staan op het startscherm als de browser DetailCraft ze opnieuw laat openen; klik op een model om het opnieuw te openen.
- In de desktopapp schrijft {{ui:Opslaan}} het model terug naar het bestand dat u hebt geopend (in de browser downloadt het een kopie), en dubbelklikken op een DetailCraft-model of IFC-bestand opent het in DetailCraft.

## Exports

Alle exports gebruiken de modelnaam. Kies ze in de groep {{ui:Uitvoer}}.

| Knop | Bestand | Wat erin staat |
|---|---|---|
| {{ui:IFC}} | `<naam>.ifc` | IFC4: verdiepingen, rasters, elk stalen onderdeel als profielextrusie met zijn gaten en coperingen, samenstellingen, bouten en ankerbouten, funderingen en elke staaf. Zie [IFC exporteren](topic:ifc-export). |
| {{ui:NC-bestanden}} | `<naam> NC.zip` | Eén DSTV-`.nc1`-bestand per onderdeelmerk. Zie [NC-bestanden naar de werkplaats sturen](topic:nc-export). |
| {{ui:Stuklijst}} | `<naam> BOM.csv` | Drie tabellen in één bestand: onderdelen, samenstellingen, en bouten en ankerbouten. Zie [Merken en de stuklijst](topic:marks-and-bom). |
| {{ui:Buigen}} | `<naam> bending schedule.csv` | Elk staafmerk in de funderingen. Zie [Funderingen en wapening](topic:footings-and-rebar). |
| {{ui:Werkplaatstekening}} | `<naam> <merk>.pdf` | Eén blad (A3, tenzij u een ander formaat koos) voor het geselecteerde onderdeel (I-profielen en platen). Zie [Een werkplaatstekening maken](topic:shop-drawings). |
| {{ui:Tekeningen}} | `<naam> drawings.pdf`, `<naam> <blad>.pdf`; `<naam> <blad>.dwg` of `.dxf`, meerdere in `<naam> drawings DWG.zip` (of `DXF.zip`) | De plattegronden, gevels en samenstellingstekeningen op het bladformaat dat u koos; DWG en DXF op ware grootte, 1 eenheid = 1 mm op het papier. Zie [Algemene-opstellings- en samenstellingstekeningen](topic:drawings). |

### Opmerkingen over de CSV-bestanden

- Ze beginnen met een byte-order mark zodat spreadsheetprogramma's tekens met accenten goed lezen.
- Een cel die begint met `=`, `+`, `-` of `@` (en geen gewoon getal is), krijgt een apostrof ervoor, zodat een spreadsheet hem nooit als formule uitvoert.
- Lengtes zijn in millimeters en gewichten in kilogrammen.

### Opmerkingen over de PDF

Tekst in de pdf gebruikt het standaardlettertype Helvetica. Tekens die het niet heeft (buiten de West-Europese set) worden als "?" afgedrukt, en de statusbalk zegt hoeveel.

## Eenheden

DetailCraft werkt overal in millimeters: rasters, niveaus, coördinaten, profielen, gaten en elke export. Profielnamen behouden hun gepubliceerde vorm (W12x50 is een Amerikaanse aanduiding, ook al worden de afmetingen in mm getoond). Er is nog geen invoer in imperiale eenheden.

## Online en offline

Openen, opslaan en exporteren gebeuren allemaal in uw browser, dus ze werken hetzelfde met of zonder verbinding zodra DetailCraft is geladen.

Om DetailCraft later zonder verbinding te gebruiken, kiest u terwijl u online bent {{ui:Opslaan voor offline gebruik}} in de appbalk. De knop telt op ("Opslaan 3 van 20") en toont daarna {{ui:Klaar voor offline gebruik}}. De opgeslagen kopie bevat de 3D-graphicsbibliotheek (circa 2,6 MB) en deze Help, dus zodra hij is opgeslagen werken de 3D-weergave, elke export en de Help allemaal offline. Details, en wat nog een verbinding nodig heeft: [Offline werken](common:offline).

:::offline
U bent offline. Toont de appbalk {{ui:Klaar voor offline gebruik}}, dan werken openen, opslaan en exporteren zoals gewoonlijk. Zo niet, houd dan dit tabblad open, laad het niet opnieuw totdat u weer online bent en sla uw model nu op.
:::

Opslaan in de cloud is nog niet beschikbaar en er zijn nog geen desktopbuilds. Maak een back-up van uw `.detailcraft.json`-bestanden zoals van elk ander werkbestand. Meer in [Waar uw bestanden heen gaan](common:your-files).

## Niet-opgeslagen werk

DetailCraft bewaart het model alleen in het geopende tabblad. Sluit of herlaadt u het tabblad met niet-opgeslagen wijzigingen, dan vraagt de browser of u de pagina wilt verlaten; de tekst is van de browser zelf. Sla vaak op met {{key:Mod+S}}.
