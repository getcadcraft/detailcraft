---
title: Overstappen vanuit andere detailleersoftware
summary: Hoe de gewoonten van een volledig detailleerpakket aansluiten op DetailCraft, en de verschillen waarop ervaren detailleurs struikelen.
keywords: overstappen, migreren, vertrouwd, werkstroom, vergelijking, verschillen, nummering, componenten, catalogus, tekeningen, gewoonten
from: 39639a5d
---

Als u in Tekla Structures detailleert, komt het meeste van DetailCraft u bekend voor: rasters, niveaus, profielen uit een catalogus, onderdelen en samenstellingen, verbindingen, nummering, NC-bestanden, IFC. De schaal is heel anders: Tekla Structures is een volledig productiesysteem, en DetailCraft is een kleine, vroege browser-app die een paar taken van begin tot eind doet. Deze pagina laat zien waar uw gewoonten meegaan en waar niet.

:::tip
Als uw handen het lint van Tekla Structures kennen, kies dan de menustijl {{ui:Staallint}} in {{ui:Instellingen}} › {{ui:DetailCraft}} › {{ui:Menu's, toetsen en muis}}: de tabbladen Modeling, Detailing, Edit, Drawings, Fabrication en View, en de middelste knop verschuift het beeld. Als u van AutoCAD komt en graag commando's typt, voegt {{ui:Klassiek tekenen}} een opdrachtregel toe (BEAM, COLUMN, ENDPLATE, ZOOM …). Zie [Menu's, toetsen en muis](topic:menus-keys-and-mouse).
:::

## Snelle vergelijking

| U bent gewend | In DetailCraft |
|---|---|
| Rasters maken met coördinaten in een rasterdialoog | {{ui:Rasters}} in het linker paneel: labels en de afstanden tussen de lijnen, geen absolute coördinaten. Genummerde lijnen lopen de ene kant op, letterlijnen de andere |
| Niveaus als Z-coördinaten van het raster | Een aparte lijst {{ui:Niveaus}}, met naam en hoogte per rij, toegepast met {{ui:Niveaus toepassen}} |
| Punten overal kiezen met snaps | Klikken snappen alleen op rasterkruispunten. Punten buiten het raster typt u in de {{ui:Uiteinden (x, y, z mm)}} van een onderdeel |
| De commando's voor kolom, ligger en plaat | {{ui:Kolom}} ({{key:C}}), {{ui:Ligger}} ({{key:B}}), {{ui:Verband}} ({{key:R}}), {{ui:Plaat}} ({{key:P}}), {{ui:Fundering}} ({{key:F}}) |
| Dialoog met onderdeeleigenschappen (dubbelklik op een onderdeel) | Eén klik: het paneel {{ui:Eigenschappen}} rechts is altijd actief; er is geen dialoog en geen knop Wijzigen of Toepassen |
| Positie op vlak, draaiing en diepte-instellingen | {{ui:Positie}} (bovenkant staal, gecentreerd of onderkant op de lijn) en {{ui:Draaiing (°)}}. Geen aparte horizontale verschuivingen |
| De profielcatalogus | Een vaste lijst van 2,311 gepubliceerde maten (AISC W, S, C, L, HSS, Pipe; Europese IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS en koudgevormde holle profielen), plus parametrische platen en uw eigen {{ui:Eigen profiel}}-secties |
| Materiaalcatalogus | Zeven kwaliteiten in een lijst: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Een verbindingscomponent toepassen en zijn dialoog | Selecteer de ligger en kies {{ui:Kopplaten}}. De instellingen verschijnen in het paneel {{ui:Eigenschappen}}. Er bestaan maar twee verbindingen (kopplaat aan kolomflens, voetplaat) |
| Automatisch verbinden, of een verbinding kopiëren naar vergelijkbare verbindingen | Selecteer een verbinding en kies {{ui:Toepassen op gelijke (n)}} |
| Nummering met reeksen en beginnummers | Geen commando: merken worden na elke wijziging vanzelf bijgewerkt, met vaste voorvoegsels c, b, br, p en C, B, BR, P |
| Bout- en gatdialogen | Gaten worden ingetypt per vlak en positie. Bouten komen alleen uit verbindingen |
| Knip-, pas- en veelhoekige knipgereedschappen | Uitsparingen (boven of onder, aan elk uiteinde) alleen op I-profielen. Terugsnijden bij verbindingen gaat automatisch |
| Rapporten en sjablonen | Drie vaste rapporten in tabbladen onderaan, en CSV-downloads |
| Tekeningcreatie en de tekeningenlijst | Eén werkplaatstekening per onderdeelmerk, allemaal tegelijk gemaakt, eerst bekeken en dan als één PDF of blad voor blad gedownload. Niets wordt bewaard of bewerkt |
| NC-bestandexport | {{ui:NC-bestanden}}: één DSTV-bestand per onderdeelmerk, alleen I-profielen en platen, gezipt |
| IFC-export | {{ui:IFC}}: IFC4 van het hele model, met wapening |
| Wapening in elk betononderdeel | Wapening alleen in rechthoekige funderingsplaten, Amerikaanse staafmaten, met een onderlaag en startstaven |
| Model opgeslagen in een projectmap, meerdere gebruikers | Eén `.detailcraft.json`-bestand dat u downloadt. Eén gebruiker, op uw computer |
| Geschiedenis van ongedaan maken | {{key:Mod+Z}} en {{key:Mod+Y}}, tot 200 stappen, bewaard tot u een ander model opent of start |

## Verschillen waar mensen over struikelen

### Merken veranderen vanzelf

Er is geen nummeringsstap. Merken worden na elke wijziging opnieuw berekend, dus ze zijn altijd actueel, maar ze kunnen ook hernummerd worden: voeg een kolom toe en de c3 van gisteren kan nu c4 zijn. Er is geen nummeringsgeschiedenis om oude merken te bewaren. Maak het model af en geef daarna de stuklijst, NC-bestanden en werkplaatstekeningen tegelijk uit één opgeslagen bestand.

### De middelste muisknop zoomt; hij verschuift niet

In de 3D-weergave: slepen met links draait, slepen met rechts verschuift, het wiel zoomt, en slepen met de middelste knop zoomt ook. Met {{key:Shift}} ingedrukt en links slepen verschuift ook. Het wiel zoomt naar het midden van de weergave, niet naar de aanwijzer. Er is geen keuze van het draaipunt: het model draait om het midden van de weergave. Zie [Door de 3D-weergave bewegen](topic:navigate-3d).

### Kolommen kijken standaard één kant op

Bij draaiing 0 wijzen de flenzen van een kolom langs de richting van de genummerde rasters. Liggers die tussen letterrasterlijnen lopen, sluiten aan op het lijf, en kopplaten worden daar geweigerd ("Liggers die op een kolomlijf aansluiten zijn nog niet beschikbaar"). Draai die kolommen 90° voordat u verbindingen toevoegt.

### Aanzichten alleen op letterlijnen

{{ui:Gevel}} kijkt alleen langs de letterrasterlijnen. Er zijn geen aanzichten langs genummerde lijnen, geen opgeslagen weergaven en geen werkvlakken. Gebruik {{ui:3D}} of {{ui:Toevoegen via raster}} voor frames op genummerde lijnen.

### Selecteren, kopiëren en verplaatsen

Selecteer meerdere onderdelen met {{key:Shift}}+klik of {{key:Mod+A}}, kopieer, knip, plak (op een rasterkruispunt, op een ingetypte verschuiving, of op dezelfde plaats) en dupliceer ze, verbindingen inbegrepen ([Kopiëren, plakken en dupliceren](topic:copy-paste)). Er is geen vensterselectie, geen selectiefilter, geen verplaatsen, spiegelen of array, en eigenschappen worden per onderdeel gewijzigd in het paneel {{ui:Eigenschappen}}.

### Rasters slepen onderdelen niet mee

Onderdelen behouden hun coördinaten wanneer u de rasterafstand wijzigt; niets beweegt mee met de rasterlijnen. Wijzig het raster voordat u staal plaatst, of bewerk daarna de eindcoördinaten van elk onderdeel.

### Verbindingen worden niet ontworpen

De twee verbindingen plaatsen platen, gaten, bouten en lassen op basis van de getallen die u geeft. Er is geen ontwerpcontrole van welke soort ook, alleen waarschuwingen over rand- en hartafstanden (uit EN 1993-1-8 tabel 3.3).

### Gaten worden niet gesneden in de 3D-weergave

Gaten zijn zichtbaar als donkere stoppen. Het zijn echte gaten in de NC-bestanden, de werkplaatstekeningen en het IFC-bestand. Uitsparingen worden wel in de weergave gesneden.

### Gewichten zijn bruto

Het staalgewicht trekt geen gaten of uitsparingen af, en het boutgewicht is niet meegerekend.

### Alleen millimeters

Alles wordt getypt en getoond in millimeters, ook voor AISC-profielen. Profielnamen behouden hun gepubliceerde vorm (W12x50, HSS6x6x1/4).

### Geen tekeningen om te beheren

Er is geen tekeningenlijst, geen tekeningeditor, geen algemene opstelling en geen montagetekeningen. Een werkplaatstekening wordt gemaakt wanneer u erom vraagt en gedownload; om hem te wijzigen, wijzigt u het model en maakt u hem opnieuw.

### Het draait in een browser

Opslaan downloadt een bestand. Sneltoetsen die de browser voor zichzelf houdt, kunnen niet worden gebruikt. Uw modellen verlaten nooit uw computer: zie [Waar uw bestanden naartoe gaan](common:your-files).

## Wat u in uw huidige software moet blijven doen

Vandaag is DetailCraft geschikt voor kleine frames, het toetsen van een idee, onderwijs, of het maken van NC-bestanden en werkplaatstekeningen voor eenvoudig ligger- en kolomwerk. Houd complexe verbindingen, algemene opstellingstekeningen, montagetekeningen, projecten met meerdere gebruikers en alles wat in [Wat nog niet beschikbaar is](topic:not-built-yet) staat, in de software die u nu gebruikt.
