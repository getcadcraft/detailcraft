---
title: Bestanden openen, opslaan en exporteren
summary: Het DetailCraft-modelbestand, elke export die het schrijft, waar de bestanden terechtkomen en wat er verschilt per browser en verbinding.
keywords: openen, opslaan, exporteren, downloaden, bestand, json, ifc, nc1, dstv, csv, pdf, zip, formaten, importeren
from: 6fbc8e8f
---

DetailCraft heeft één eigen bestand, het model, en vijf exports. Elke opslag en elke export is een download. Er wordt niets geüpload en niets op een server bewaard.

## Het modelbestand

Een DetailCraft-model wordt opgeslagen als `<name>.detailcraft.json`, waarbij `<name>` de modelnaam in het paneel {{ui:Model}} is. Het bevat de rasters, niveaus, elementen (met hun gaten en uitsparingen), verbindingen en hun instellingen, funderingen en uw eigen profielen.

Onderdelen, merken, bouten, lassen en staven worden niet opgeslagen: DetailCraft berekent ze opnieuw uit het model telkens wanneer het wordt geopend. Daarom is een modelbestand klein.

### Opslaan

1. Typ een naam in het veld {{ui:Naam}} bovenaan het paneel {{ui:Model}}.
2. Kies {{ui:Opslaan}} in de groep {{ui:Bestand}} of druk op {{key:Mod+S}}.
3. De browser downloadt `<name>.detailcraft.json`. De statusbalk zegt "Opgeslagen … (gedownload)", en de stip aan het begin van de titel van het browsertabblad verdwijnt.

Elke keer opslaan is een nieuwe download. De browser overschrijft het geopende bestand niet; afhankelijk van zijn instellingen voegt hij een nummer aan de naam toe, zoals `Frame (1).detailcraft.json`, of vraagt hij waar u wilt opslaan. Bewaar uw eigen versies door de downloads te hernoemen.

:::chromium
Chrome en Edge slaan op in uw map Downloads, tenzij **Vragen waar elk bestand moet worden opgeslagen voordat het wordt gedownload** aan staat in de downloadinstellingen van de browser. Zet dit aan als u elke keer een map en bestandsnaam wilt kiezen.
:::

:::firefox
Firefox slaat op in uw map Downloads, of vraagt elke keer, als **Altijd vragen waar bestanden moeten worden opgeslagen** aan staat in de instellingen.
:::

:::safari
Safari slaat op in uw map Downloads. Om de map te wijzigen, opent u **Safari, Instellingen, Algemeen, Locatie voor bestandsdownloads**.
:::

### Openen

1. Kies {{ui:Openen}} in de groep {{ui:Bestand}} of druk op {{key:Mod+O}}.
2. Kies een `.detailcraft.json`-bestand.

Of sleep het bestand vanuit {{pick:mac=Finder|windows=Verkenner|linux=uw bestandsbeheer}} en zet het neer op de weergave. De weergave zegt "Zet een DetailCraft-model neer om het te openen" terwijl u sleept.

Als het geopende model niet-opgeslagen wijzigingen heeft, vraagt DetailCraft eerst: {{ui:Annuleren}}, {{ui:Wijzigingen weggooien}} of {{ui:Eerst opslaan}}.

DetailCraft controleert elk veld van een bestand voordat het dat gebruikt. Wat het niet kan gebruiken, wordt weggelaten, en de statusbalk zegt wat, bijvoorbeeld "2 elementen waren niet geldig en zijn weggelaten." Een model dat door een nieuwere DetailCraft is opgeslagen, wordt geweigerd met een melding in plaats van half goed geopend.

### Wat er wordt geopend

Eigen modelbestanden (`.json`, tot 50 MB) en IFC-bestanden (`.ifc`, IFC2X3 of IFC4, tot 200 MB). Een IFC-bestand, geopend of ingebracht met {{ui:IFC importeren}}, wordt een nieuw model van zijn liggers, kolommen, elementen, platen, rasters en niveaus, met de gaten en uitsparingen erin gesneden en de bouten als losse bouten; een rapport somt op wat is weggelaten. Zie [IFC-export](topic:ifc-export#import). DWG-, DXF- of een ander detailleerprogramma-model wordt nog niet geopend; een poging toont "DetailCraft opent de eigen modellen (.detailcraft.json) en IFC-bestanden (.ifc)."

## Verloren werk, recente bestanden, de desktop-app

- Zolang het model wijzigingen heeft die u niet heeft opgeslagen, bewaart DetailCraft een kopie in deze browser. Als het tabblad of de browser stopt voordat u opslaat, vraagt DetailCraft de volgende keer dat u het opent **Uw werk herstellen?**: herstel de kopie, of laat hem vallen. Zie [Uw werk herstellen](common:recover).
- Modellen die u onlangs heeft geopend, staan op het startscherm wanneer de browser DetailCraft toestaat ze opnieuw te openen; klik op een model om het weer te openen.
- In de desktop-app schrijft {{ui:Opslaan}} het model terug naar het bestand dat u heeft geopend (in de browser downloadt het een kopie), en dubbelklikken op een DetailCraft-model of IFC-bestand opent het in DetailCraft.

## Exports

Alle exports gebruiken de modelnaam. Kies ze in de groep {{ui:Uitvoer}}.

| Knop | Bestand | Wat erin zit |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: verdiepingen, rasters, elk staalonderdeel als profielextrusie met zijn gaten en uitsparingen, samenstellingen, bouten en ankerstaven, funderingen en elke staaf. Zie [IFC exporteren](topic:ifc-export). |
| {{ui:NC-bestanden}} | `<name> NC.zip` | Eén DSTV `.nc1`-bestand per onderdeelmerk. Zie [NC-bestanden naar de werkplaats sturen](topic:nc-export). |
| {{ui:Stuklijst}} | `<name> BOM.csv` | Drie tabellen in één bestand: onderdelen, samenstellingen, en bouten en ankerstaven. Zie [Merken en de stuklijst](topic:marks-and-bom). |
| {{ui:Buigen}} | `<name> bending schedule.csv` | Elk staafmerk in de funderingen. Zie [Funderingen en wapening](topic:footings-and-rebar). |
| {{ui:Werkplaatstekening}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` bevat per onderdeelmerk een blad; {{ui:PDF downloaden}} geeft het getoonde blad (A3, tenzij u een ander formaat koos). Zie [Werkplaatstekeningen maken](topic:shop-drawings). |
| {{ui:Tekeningen}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` of `.dxf`, meerdere in `<name> drawings DWG.zip` (of `DXF.zip`) | De plattegronden, gevels en samenstellingstekeningen op het bladformaat dat u koos; DWG en DXF op ware grootte, 1 eenheid = 1 mm op het papier. Zie [Algemene opstelling- en samenstellingstekeningen](topic:drawings). |

### Opmerkingen bij de CSV-bestanden

- Ze beginnen met een byte-order-markering, zodat spreadsheetprogramma's accenten goed lezen.
- Een cel die begint met `=`, `+`, `-` of `@` (en geen gewoon getal is), krijgt een voorloopapostrof, zodat een spreadsheet die nooit als formule uitvoert.
- Lengten zijn in millimeter en gewichten in kilogram.

### Opmerkingen bij de PDF

Tekst in de PDF gebruikt het standaardlettertype Helvetica. Tekens die het niet heeft (buiten de West-Europese set) worden afgedrukt als "?", en de statusbalk vertelt u hoeveel.

## Eenheden

DetailCraft werkt overal in millimeter: rasters, niveaus, coördinaten, profielen, gaten en elke export. Profielnamen behouden hun gepubliceerde vorm (W12x50 is een Amerikaanse aanduiding, ook al worden de afmetingen in mm getoond). Er is nog geen invoer in Engelse eenheden.

## Online en offline

Openen, opslaan en exporteren gebeuren allemaal in uw browser, dus ze werken hetzelfde met of zonder verbinding zodra DetailCraft is geladen.

Om DetailCraft later zonder verbinding te gebruiken, kiest u {{ui:Opslaan voor offline gebruik}} in de app-balk terwijl u online bent. De knop telt op ("Opslaan 3 van 20") en toont daarna {{ui:Klaar voor offline gebruik}}. De opgeslagen kopie bevat de 3D-grafische bibliotheek (ongeveer 2,6 MB) en deze help, dus zodra hij is opgeslagen werken de 3D-weergave, elke export en de help offline. Details, en wat nog een verbinding nodig heeft: [Offline werken](common:offline).

:::offline
U bent offline. Als de app-balk {{ui:Klaar voor offline gebruik}} toont, werken openen, opslaan en exporteren zoals gewoonlijk. Zo niet, houd dit tabblad open, laad het niet opnieuw totdat u weer online bent, en sla uw model nu op.
:::

Cloudopslag is nog niet beschikbaar, en er zijn nog geen desktop-builds. Maak een back-up van uw `.detailcraft.json`-bestanden zoals u elk ander werkbestand back-up. Meer in [Waar uw bestanden terechtkomen](common:your-files).

## Niet-opgeslagen werk

DetailCraft bewaart het model alleen in het geopende tabblad. Als u het tabblad met niet-opgeslagen wijzigingen sluit of opnieuw laadt, vraagt de browser of de pagina mag worden verlaten; de tekst daarvan is van de browser zelf. Sla vaak op met {{key:Mod+S}}.
