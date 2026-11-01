---
title: Maak lêers oop, stoor en voer uit
summary: Die DetailCraft-modellêer, elke uitvoer wat dit skryf, waar die lêers heen gaan, en wat per blaaier en verbinding verskil.
keywords: maak oop, stoor, uitvoer, aflaai, lêer, json, ifc, nc1, dstv, csv, pdf, zip, formate, invoer
from: bd715ea3
---

DetailCraft het een eie lêer, die model, en vyf uitvoere. Elke stoor- en uitvoerbewerking is 'n aflaai. Niks word opgelaai nie, en niks word op 'n bediener bewaar nie.

## Die modellêer

'n DetailCraft-model word gestoor as `<name>.detailcraft.json`, waar `<name>` die modelnaam in die {{ui:Model}}-paneel is. Dit bevat die roosters, vlakke, lede (met hul gate en uitsnydings), verbindings en hul instellings, fondasies en jou eie profiele.

Dele, merke, bute, lasse en stawe word nie gestoor nie: DetailCraft bereken dit elke keer weer uit die model wanneer dit oopmaak. Daarom is 'n modellêer klein.

### Stoor

1. Tik 'n naam in die {{ui:Naam}}-veld bo-aan die {{ui:Model}}-paneel.
2. Kies {{ui:Stoor}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+S}}.
3. Die blaaier laai `<name>.detailcraft.json` af. Die statusbalk sê "Gestoor … (afgelaai)", en die stippie aan die begin van die blaaieroortjie se titel verdwyn.

Elke stoorbewerking is 'n nuwe aflaai. Die blaaier oorskryf nie die lêer wat jy oopgemaak het nie; afhangend van sy instellings voeg dit 'n nommer by die naam, soos `Frame (1).detailcraft.json`, of vra waar dit moet stoor. Hou jou eie weergawes deur die aflaaie te hernoem.

:::chromium
Chrome en Edge stoor na jou Aflaaie-vouer, tensy **Vra waar om elke lêer te stoor voordat dit afgelaai word** in die blaaier se aflaai-instellings aan is. Skakel dit aan as jy elke keer 'n vouer en lêernaam wil kies.
:::

:::firefox
Firefox stoor na jou Aflaaie-vouer, of vra elke keer as **Vra my altyd waar lêers gestoor moet word** in sy instellings aan is.
:::

:::safari
Safari stoor na jou Aflaaie-vouer. Om die vouer te verander, maak **Safari, Instellings, Algemeen, Lêeraflaai-ligging** oop.
:::

### Maak oop

1. Kies {{ui:Maak oop}} in die {{ui:Lêer}}-groep, of druk {{key:Mod+O}}.
2. Kies 'n `.detailcraft.json`-lêer.

Of sleep die lêer van {{pick:mac=Finder|windows=File Explorer|linux=jou lêerbestuurder}} en laat dit op die aansig val. Die aansig sê "Laat 'n DetailCraft-model val om dit oop te maak" terwyl jy sleep.

As die oop model nie-gestoorde veranderinge het nie, vra DetailCraft eers: {{ui:Kanselleer}}, {{ui:Gooi veranderinge weg}} of {{ui:Stoor eerst}}.

DetailCraft kontroleer elke veld van 'n lêer voordat dit dit gebruik. Alles wat dit nie kan gebruik nie, word weggelaat, en die statusbalk sê wat, byvoorbeeld "2 lede was nie geldig nie en is weggelaat." 'n Model wat deur 'n nuwer DetailCraft gestoor is, word met 'n boodskap geweier in plaas daarvan om half reg oop te maak.

### Wat dit oopmaak

Sy eie modellêers (`.json`, tot 50 MB) en IFC-lêers (`.ifc`, IFC2X3 of IFC4, tot 200 MB). 'n IFC-lêer, oopgemaak of ingevoer met {{ui:Voer IFC in}}, word 'n nuwe model van sy balke, kolomme, lede, plate, roosters en vlakke, met die gate en uitsnydings daarin gesny en sy bute as los bute; 'n verslag lys wat weggelaat is. Sien [IFC-uitvoer](topic:ifc-export#import). Dit maak nog nie DWG, DXF of enige ander detailleringsprogram se model oop nie; probeer dit wys "DetailCraft maak sy eie modelle oop (.detailcraft.json) en IFC-lêers (.ifc)."

## Verlore werk, onlangse lêers, die rekenaarprogram

- Solank die model veranderinge het wat jy nie gestoor het nie, hou DetailCraft 'n kopie in hierdie blaaier. As die oortjie of die blaaier stop voordat jy stoor, vra DetailCraft die volgende keer as jy DetailCraft oopmaak **Herstel jou werk?**: herstel die kopie, of laat dit gaan. Sien [Herstel jou werk](common:recover).
- Modelle wat jy onlangs oopgemaak het, word op die beginskerm gelys wanneer die blaaier DetailCraft toelaat om hulle weer oop te maak; klik op een om dit weer oop te maak.
- In die rekenaarprogram skryf {{ui:Stoor}} die model terug na die lêer wat jy oopgemaak het (in die blaaier laai dit 'n kopie af), en dubbelklik op 'n DetailCraft-model of 'n IFC-lêer maak dit oop in DetailCraft.

## Uitvoere

Alle uitvoere gebruik die modelnaam. Kies hulle in die {{ui:Uitvoer}}-groep.

| Knoppie | Lêer | Wat daarin is |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: verdiepings, roosters, elke staaldeel as 'n profielekstrusie met sy gate en uitsnydings, samestellings, bute en ankerstawe, fondasies en elke staaf. Sien [IFC-uitvoer](topic:ifc-export). |
| {{ui:NC-lêers}} | `<name> NC.zip` | Een DSTV `.nc1`-lêer per deelmerk. Sien [Stuur NC-lêers na die werkswinkel](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Drie tabelle in een lêer: dele, samestellings, en bute en ankerstawe. Sien [Merke en die materiaallys](topic:marks-and-bom). |
| {{ui:Buig}} | `<name> bending schedule.csv` | Elke staafmerk in die fondasies. Sien [Fondasies en wapening](topic:footings-and-rebar). |
| {{ui:Werkswinkeltekening}} | `<name> <mark>.pdf` | Een blad (A3 tensy jy 'n ander grootte gekies het) vir die gekose deel (I-profiele en plate). Sien [Maak 'n werkswinkeltekening](topic:shop-drawings). |
| {{ui:Tekeninge}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` of `.dxf`, verskeie in `<name> drawings DWG.zip` (of `DXF.zip`) | Die planne, aansigte en samestellingstekeninge op die bladgrootte wat jy gekies het; DWG en DXF op volle grootte, 1 eenheid = 1 mm op die papier. Sien [Algemene rangskikkings- en samestellingstekeninge](topic:drawings). |

### Notas oor die CSV-lêers

- Hulle begin met 'n greinmerk (byte-order mark), sodat sigblaaiprogramme aksentkarakters korrek lees.
- 'n Sel wat met `=`, `+`, `-` of `@` begin (en nie 'n gewone getal is nie), kry 'n voorste apostrof, sodat 'n sigblad dit nooit as 'n formule uitvoer nie.
- Lengtes is in millimeter en gewigte in kilogram.

### Notas oor die PDF

Teks in die PDF gebruik die standaard Helvetica-lettertipe. Karakters wat dit nie het nie (buite die Wes-Europese stel), druk as "?", en die statusbalk sê vir jou hoeveel.

## Eenhede

DetailCraft werk deurgaans in millimeter: roosters, vlakke, koördinate, profiele, gate en elke uitvoer. Profielname behou hul gepubliseerde vorm (W12x50 is 'n VSA-aanduiding, al word die afmetings in mm gewys). Daar is nog geen imperiale invoer nie.

## Aanlyn en vanlyn

Oopmaak, stoor en uitvoer gebeur almal in jou blaaier, so hulle werk dieselfde met of sonder 'n verbinding sodra DetailCraft gelaai het.

Om DetailCraft later sonder verbinding te gebruik, kies {{ui:Stoor vir vanlyn}} in die programbalk terwyl jy aanlyn is. Die knoppie tel op ("Stoor 3 van 20") en wys dan {{ui:Vanlyn gereed}}. Die gestoorde kopie sluit die 3D-grafiekbiblioteek (ongeveer 2,6 MB) en hierdie hulp in, so sodra dit gestoor is, werk die 3D-aansig, elke uitvoer en die hulp almal vanlyn. Besonderhede, en wat steeds 'n verbinding nodig het: [Werk vanlyn](common:offline).

:::offline
Jy is vanlyn. As die programbalk {{ui:Vanlyn gereed}} wys, werk oopmaak, stoor en uitvoer soos gewoonlik. As nie, hou hierdie oortjie oop, moenie dit herlaai totdat jy weer aanlyn is nie, en stoor jou model nou.
:::

Wolkstoor is nog nie beskikbaar nie, en daar is nog geen rekenaarprogramweergawes nie. Rugsteun jou `.detailcraft.json`-lêers soos jy enige ander werkslêer rugsteun. Meer in [Waar jou lêers heen gaan](common:your-files).

## Nie-gestoorde werk

DetailCraft hou die model net in die oop oortjie. As jy die oortjie met nie-gestoorde veranderinge sluit of herlaai, vra die blaaier of die bladsy verlaat moet word; die woording is die blaaier s'n. Stoor gereeld met {{key:Mod+S}}.
