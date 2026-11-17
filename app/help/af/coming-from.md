---
title: Vanaf ander detailleringsagteware
summary: Hoe die gewoontes van 'n volledige detailleringspakket na DetailCraft oorgedra word, en die verskille wat ervare detailleerders laat struikel.
keywords: oorskakel, migreer, bekend, werkvloei, vergelyking, verskille, nommering, komponente, katalogus, tekeninge, gewoontes
from: 39639a5d
---

As jy in Tekla Structures detailleer, sal die meeste van DetailCraft bekend voorkom: roosters, vlakke, profiele uit 'n katalogus, onderdele en samestellings, verbindings, nommering, NC-lêers, IFC. Die skaal is baie anders: Tekla Structures is 'n volledige produksiestelsel, en DetailCraft is 'n klein, vroeë blaiertoepassing wat 'n paar take van begin tot einde doen. Hierdie bladsy wys waar jou gewoontes oordra en waar hulle nie.

:::tip
As jou hande die lint van Tekla Structures ken, kies die {{ui:Staallint}}-kieslysstyl in {{ui:Instellings}} › {{ui:DetailCraft}} › {{ui:Kieslyste, sleutels en muis}}: Modellering-, Detaillering-, Redigeer-, Tekeninge-, Vervaardiging- en Aansig-oortjies, en die middelknoppie pan. As jy van AutoCAD kom en graag opdragte tik, voeg {{ui:Klassieke tekening}} 'n opdragreël by (BEAM, COLUMN, ENDPLATE, ZOOM …). Sien [Kieslyste, sleutels en muis](topic:menus-keys-and-mouse).
:::

## Vinnige kaart

| Waarvan jy gewoond is | In DetailCraft |
|---|---|
| Roosters skep met koördinate in 'n roosterdialoog | {{ui:Roosters}} in die linkerpaneel: etikette en die afstande tussen lyne, nie absolute koördinate nie. Genommerde lyne loop een rigting, letterlyne die ander |
| Vlakke as rooster-Z-koördinate | 'n Aparte {{ui:Vlakke}}-lys, naam en hoogte per ry, toegepas met {{ui:Pas vlakke toe}} |
| Punte oral kies met snaps | Klikke snap net na roosterkruisings. Punte buite die rooster word in 'n lid se {{ui:Eindpunte (x, y, z mm)}} getik |
| Die kolom-, balk- en plaatopdragte | {{ui:Kolom}} ({{key:C}}), {{ui:Balk}} ({{key:B}}), {{ui:Skoor}} ({{key:R}}), {{ui:Plaat}} ({{key:P}}), {{ui:Fondasie}} ({{key:F}}) |
| Onderdeeleienskappe-dialoog (dubbelklik op 'n onderdeel) | Eenmaal klik: die {{ui:Eienskappe}}-paneel regs is altyd aktief; daar is geen dialoog en geen Wysig- of Pas toe-knoppie nie |
| Posisie op vlak, rotasie en diepte-instellings | {{ui:Posisie}} (bo-kant van staal, gesentreer of onder op die lyn) en {{ui:Rotasie (°)}}. Geen aparte horisontale verskuiwings nie |
| Die profielkatalogus | 'n Vaste lys van 2,311 gepubliseerde groottes (AISC W, S, C, L, HSS, Pipe; Europese IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS en koudgevormde holafdelings), plus parametriese plate en jou eie {{ui:Pasgemaakte profiel}}-afdelings |
| Materiaalkatalogus | Sewe grade in 'n lys: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Toepassing van 'n verbindingskomponent en sy dialoog | Kies die balk, kies {{ui:Eindplate}}. Die instellings verskyn in die {{ui:Eienskappe}}-paneel. Net twee verbindings bestaan (eindplaat na kolomflens, basisplaat) |
| Outo-verbinding, of kopieer 'n knoop na soortgelyke knope | Kies 'n verbinding, kies {{ui:Pas op soortgelyke toe (n)}} |
| Nommering met reekse en beginnommers | Geen opdrag nie: merke werk self by na elke verandering, met vaste voorvoegsels c, b, br, p en C, B, BR, P |
| Bout- en gatdialoë | Gate word getik volgens vlak en posisie. Bolte kom net uit verbindings |
| Sny-, pas- en veelhoeksnyhulpmiddele | Uitsnydings (bo of onder, by enige einde) op I-profiele alleen. Verbindingsterugsnydings is outomaties |
| Verslae en sjablone | Drie vaste verslae in oortjies onderaan, en CSV-aflaaie |
| Tekeningskepping en die tekeninglys | Een werkswinkeltekening per onderdeelmerk, almal tegelyk gemaak, eers voorgeskou en dan as een PDF of blad vir blad afgelaai. Niks word bewaar of geredigeer nie |
| NC-lêeruitvoer | {{ui:NC-lêers}}: een DSTV-lêer per onderdeelmerk, net I-profiele en plate, saamgepak in 'n zip-lêer |
| IFC-uitvoer | {{ui:IFC}}: IFC4 van die hele model, met wapening |
| Wapening in enige betononderdeel | Wapening net in reghoekige blokfondasies, VSA-staafgroottes, met 'n onderste mat en beginstawe |
| Model gestoor in 'n projekgids, multi-gebruiker | Een `.detailcraft.json`-lêer wat jy aflaai. Enkelgebruiker, op jou rekenaar |
| Ontdoen-geskiedenis | {{key:Mod+Z}} en {{key:Mod+Y}}, tot 200 stappe, behou totdat jy 'n ander model oopmaak of begin |

## Verskille wat mense laat struikel

### Merke verander self

Daar is geen nommeringsstap nie. Merke word na elke verandering herbereken, so hulle is altyd huidig, maar hulle kan ook hernommer: voeg 'n kolom by, en gister se c3 kan nou c4 wees. Daar is geen "nommeringsgeskiedenis" om ou merke te hou nie. Voltooi die model, en maak dan die hoeveelheidslys, NC-lêers en werkswinkeltekeninge saam uit een gestoorde lêer.

### Middelmuisknoppie zoem; dit pan nie

In die 3D-aansig: linksklik-sleep draai, regsklik-sleep pan, die wiel zoem, en sleep met die middelknoppie zoem ook. {{key:Shift}} hou terwyl jy linksklik-sleep, pan ook. Die wiel zoem na die middel van die aansig, nie na die wyser nie. Daar is geen draaisentrum-keuse nie: die model draai om die middel van die aansig. Sien [Beweeg rondom die 3D-aansig](topic:navigate-3d).

### Kolomme wys standaard een rigting

By rotasie 0 wys 'n kolom se flense langs die genommerde roosterrigting. Balke wat tussen letterroosterlyne loop, raam in die lyf in, en eindplate word daar geweier ("Balke wat in 'n kolomlyf inraam, is nog nie gebou nie"). Draai daardie kolomme 90° voordat jy verbindings byvoeg.

### Aansigte slegs op letterlyne

{{ui:Aansig}} kyk net langs letterroosterlyne. Daar is geen aansigte langs genommerde lyne nie, geen gestoorde aansigte nie en geen werkvlakke nie. Gebruik {{ui:3D}} of {{ui:Voeg by rooster}} vir raamwerke op genommerde lyne.

### Keuse, kopieer en skuif

Kies verskeie onderdele met {{key:Shift}}+klik of {{key:Mod+A}}, en kopieer, knip, plak (op 'n roosterkruising, by 'n getikte verskuiwing, of op dieselfde plek) en dupliseer hulle, verbindings ingesluit ([Kopieer, plak en dupliseer](topic:copy-paste)). Daar is geen vensterkeuse, geen keuringsfilter, geen skuif, spieël of skikking nie, en eienskappe word een lid op 'n slag in die {{ui:Eienskappe}}-paneel verander.

### Roosters sleep nie lede saam nie

Lede hou hul koördinate wanneer jy die roosterafstand verander; niks beweeg saam met die roosterlyne nie. Verander die rooster voordat jy staal plaas, of wysig elke lid se eindkoördinate daarna.

### Verbindings word nie ontwerp nie

Die twee verbindings plaas plate, gate, bolte en sweislasse uit die getalle wat jy gee. Daar is geen ontwerpkontrole van enige aard nie, net rand- en afstandwaarskuwings (uit EN 1993-1-8 Tabel 3.3).

### Gate word nie in die 3D-aansig gesny nie

Gate wys as donker proppe. Dit is werklike gate in die NC-lêers, die werkswinkeltekeninge en die IFC-lêer. Uitsnydings word in die aansig gesny.

### Gewigte is bruto

Die staalgewig trek nie gate of uitsnydings af nie, en die boltgewig is nie ingesluit nie.

### Millimeter alleen

Alles word in millimeter getik en gewys, selfs vir AISC-profiele. Profielname hou hul gepubliseerde vorm (W12x50, HSS6x6x1/4).

### Geen tekeninge om te bestuur nie

Daar is geen tekeninglys, geen tekeningredigeerder, geen algemene skikkings- of samestellingstekeninge nie. 'n Werkswinkeltekening word gemaak wanneer jy dit vra en afgelaai; om dit te verander, verander die model en maak dit weer.

### Dit loop in 'n blaier

Stoor laai 'n lêer af. Sleutelbordkortpaaie wat die blaier self hou, kan nie gebruik word nie. Jou modelle verlaat nooit jou rekenaar nie: sien [Waarheen jou lêers gaan](common:your-files).

## Wat om in jou huidige sagteware te bly doen

Vandag pas DetailCraft by klein raamwerke, om 'n idee te toets, onderrig, of om NC-lêers en werkswinkeltekeninge te maak vir eenvoudige balk- en kolomwerk. Hou komplekse verbindings, algemene skikkingstekeninge, opstellingstekeninge, multi-gebruiker-projekte en enigiets wat onder [Wat nog nie gebou is nie](topic:not-built-yet) gelys word, in die sagteware wat jy nou gebruik.
