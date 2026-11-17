---
title: Detailleer gewapende beton-balke, kolomme, blaaie en mure
summary: Voeg betonbalke, kolomme, blaaie en mure by volgens rooster, gee hulle stawe, beugels en bande, kontroleer oorlappings en verankering teen ACI 318-19 of EN 1992-1-1, en maak werkswinkeltekeninge en buigblaaie.
keywords: gewapende beton, wapening, balk, kolom, blad, muur, beugels, bande, koppelings, haakies, oorlappings, oorlapping, verankering, ontwikkelingslengte, ld, ldh, lbd, dekking, spasiëring, randstawe, openings, matte, staafmerke, buigskedule, staafbuigskedule, bbs, werkswinkeltekening, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-invoer
from: 3835b7ec
---

Die {{ui:Beton}}-oortjie onder die aansig detailleer die stawe van betonbalke, kolomme, blaaie en mure. Jy gee die groottes en die stawe; DetailCraft plaas elke staaf, nommer dit, kontroleer die oorlappings, die verankering, die dekking en die spasiëring teen die klousule waaruit dit kom, en teken dit.

:::warning
DetailCraft detailleer die stawe wat jy aan dit gee. Dit ontwerp hulle nie. Elke resultaat is vir 'n ingenieur om na te gaan.
:::

## Maak die Beton-oortjie oop

Kies die {{ui:Beton}}-oortjie onder die aansig. In 'n lintuitleg is {{ui:Beton}} in die {{ui:Modellering}}-oortjie langs {{ui:Fondasie}}. Met die tekenstyl se opdragreël, tik {{cmd:CONCRETE}}.

## Voeg 'n element volgens rooster by

Betonelemente word op die model se roosterlyne en vlakke geplaas, so stel dié eers op (linkerpaneel).

1. In {{ui:Voeg by rooster}}, kies die {{ui:Element}}: {{ui:Betonbalk}}, {{ui:Betonkolom}}, {{ui:Blad}} of {{ui:Muur}}.
2. Kies die roosterlyne en vlakke:
   - 'n balk loop van een roosterkruising na 'n ander, sy bokant op die vlak;
   - 'n kolom staan op 'n kruising, van een vlak na 'n ander;
   - 'n blad vul die reghoek tussen twee genommerde en twee gelettelde roosterlyne, sy bokant op die vlak;
   - 'n muur loop langs sy middellyn van een kruising na 'n ander, van een vlak na 'n ander.
3. Gee die grootte en kies {{ui:Voeg by}}. Die element is gekies en sy velde open in die {{ui:Eienskappe}}-paneel.

Elke element begin met stawe wat beginwaardes is, nie ontwerp nie: verander hulle na die ingenieur se waardes.

## Verander die stawe

Kies die element (in die aansig, of sy naam in die {{ui:Beton}}-oortjie). Die {{ui:Eienskappe}}-paneel wys:

| Element | Wat jy stel |
|---|---|
| Balk | Breedte, diepte, skoon dekking; bo- en onderstawe (grootte, aantal, reguit of 90°-haak aan die punte); sybalke; beugels (grootte, 135°- of 90°-haakies, die eerste een se afstand vanaf die steunvlak, die lengte en spasiëring van die eindsone, die spasiëring tussenin); steunlengtes; oorlappingslengtes |
| Kolom | Breedte, diepte oor, rotasie, dekking; langsstawe op elke vlak; bande soos vir beugels; wat die stawe aan die bokant doen (oorlap met die kolom bo, haak in die vloer, of stop) |
| Blad | Dikte, grootte, bo, dekkings; onderste mat en bo-mat elke kant (grootte en spasiëring); U-stawe om die rande; randstawe; openings |
| Muur | Dikte, dekking, een of twee lae, horisontale en vertikale stawe, U-stawe aan die punte, vertikale stawe wat wel of nie bo-oor oorlap, randstawe, openings |

Elke verandering is een ontdoen-stap. 'n Verandering wat nie gebou kan word nie, word geweier en die statusbalk sê hoekom, byvoorbeeld "Die opening pas nie binne die element met sy dekking nie."

Beugels en bande is gesluit, met albei haakies by een hoek. 'n Balk se stawe loop by sy punte in 'n betonkolom tot by die kolom se verre vlak min dekking; waar daar geen kolom is nie, gee die {{ui:Steunlengte aan die begin (mm)}} en aan die einde.

## Oorlappings en verankering

Stawe langer as die {{ui:Voorraadstaaflengte (mm)}} (12000 om mee te begin) word in stukke van gelyke lengte gesny, geoorlap. Die tabel {{ui:Oorlappings en verankering}} lys elke oorlapping en elke verankering: wat nodig is, met die klousule en sy terme, en wat die detail het.

- 'n Oorlappingslengte van 0 beteken "soos nodig": die lengte wat die kode gee, na bo afgerond tot 25 mm.
- Tik jou eie oorlappingslengte om dit eerder te gebruik. As dit korter is as wat nodig is, is dit 'n probleem (sien hieronder), en dit word met * in die tabel gemerk.
- Verankering word gemeet vanaf die steunvlak tot die staaf se einde binne die steun. 'n Balk sonder bekende steun sê dit, in plaas daarvan om dit na te gaan.
- 'n Kolom wat op 'n fondasie staan, oorlap met die fondasie se aanloopstawe, en op 'n ander kolom met daardie kolom se stawe: hul oorlapping word ook nagegaan.

**ACI 318-19** (SI): reguit stawe in trek 25.4.2.3 (die tabel, met ψt, ψe, ψg, λ), standaard haakies 25.4.3.1 (ψr 1.6 en ψo 1.25 geneem tensy anders bekend), stawe in druk 25.4.9.2, trekoorlappings 25.5.2.1 (Klas B, of Klas A in die instellings), drukoorlappings 25.5.5.1.

**EN 1992-1-1**: verankering 8.4.4 met fbd uit 8.4.2 (goeie of swak verband), oorlappings 8.7.3 met α6 vir elke staaf wat by een snit oorlap. γc, γs en αct begin by die aanbevole waardes; stel die van jou nasionale bylae.

## Die kontroles

Elke kontrole wat misluk, staan in die skil se Probleme-paneel (bron {{ui:Wapeningskontroles}}), en in die element se {{ui:Kontroles}}-lys:

| Kontrole | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Dekking | Tabel 20.5.1.3.1, volgens blootstelling | Verbandminimum, Tabel 4.2 (duursaamheidsdekking is joune om te gee) |
| Vry spasiëring van stawe | 25.2.1 (balke, blaaie, mure), 25.2.3 (kolomme) | 8.2 (2) |
| Beugelspasiëring | 9.7.6.2.2 | 9.2.2 (6) |
| Minimum staal in balke | 9.6.1.2 | 9.2.1.1 (1) |
| Sybalke van meer as 900 mm diep | 9.7.2.3 | nie nagegaan nie |
| Kolom-staalverhouding, aantal stawe | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Bande: spasiëring, grootte, kruisbande | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Blad-spasiëring, minimum staal | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Muur-spasiëring, minimum staal, twee lae | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Oorlappings, verankering | soos hierbo | soos hierbo |

Die aggregaatgrootte is nie bekend nie, so die vrye spasiëring word sonder dit nagegaan.

## Openings, randstawe en kantstawe

Kies {{ui:Voeg 'n opening by}} onder 'n gekose blad of muur en stel waar dit is en sy grootte. Stawe wat dit kruis, eindig op dekking vanaf sy rand. Randstawe word aan elke kant bygevoeg, in dieselfde laag, en dra die helfte van die oppervlakte van die stawe wat gesny is, een verankeringslengte verby die opening. Dit is DetailCraft se beginreël, nie 'n kodeklousule nie: verander die {{ui:Randstawe}} na die ingenieur se waardes. Hoekstawe word nie bygevoeg nie.

U-stawe om 'n blad se vrye rande en by 'n muur se punte het pote wat een oorlappingslengte lank is.

## Staafmerke en die buigskedule

Identiese stawe deel een merk: fondasies behou F-merke (5F1), balke kry B, kolomme C, blaaie S en muure W (7B1, 8C1, 4S2). Die {{ui:Buigskedule}}-oortjie en sy CSV lys nou elke staaf van die struktuur, fondasies eerste. {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Buig}} laai dit af.

## Werkswinkeltekeninge

Kies {{ui:Uitvoer}} › {{ui:Meer}} › {{ui:Wapeningstekeninge}}, {{ui:Wapeningstekeninge}} in die {{ui:Beton}}-oortjie, of {{ui:Werkswinkeltekening}} langs een element. Elke element kry 'n blad met 'n aansig (of 'n plan vir 'n blad) wat elke staaf en sy merk wys, die beugel- of bandsones en die oorlappings met maatlyne, en 'n snit by die middel; daarna lys buigblaaie elke merk met 'n skets van sy vorm, sy afmetings, die aantal, die snitlengte en die gewig.

Die blaaie word elke keer weer uit die model gemaak, en weer ná elke verandering solank die venster oop is: die titelblok dra die modelverwysing. Stoor {{ui:Hierdie blad as PDF}} of {{ui:Alle blaaie as PDF}}.

## Staafs uit 'n IFC-lêer

{{ui:Lêer}} › {{ui:Voer IFC in}} lees nou IfcReinforcingBar: die gesweepte skyf langs sy middellyn kom terug as reguit pote en buigings, met sy deursnee, sy merk en die element wat dit hou. Die stawe word bewaar soos hulle gelees is (hulle word nie in 'n balk se of 'n blad se reëls omgeskakel nie), in die aansig gewys, in die buigskedule gelys en weer met die IFC-uitvoer uitgeskryf. Die invoerverslag sê hoeveel stawe gelees is, van watter groottes, in hoeveel elemente, en wat weggelaat is en hoekom.

'n Balk, kolom, blad of muur van daardie lêer wat staaf hou of wie se materiaal beton is, word nie as staal geneem nie; die verslag sê so. DetailCraft se eie IFC-uitvoer dra elke betonelement se definisie, so dit kom terug as sigself, en sy stawe word weer uit dit gemaak.

:::note
Die lees van 'n strukturele ontwerpprogram se eie lêers (nie IFC nie) is nie gebou nie: voer IFC daaruit uit.
:::

## Die IFC-uitvoer

Betonbalke, kolomme, blaaie (met openings) en mure gaan uit as IfcBeam, IfcColumn, IfcSlab en IfcWall, elk met sy stawe as IfcReinforcingBar (hoofstawe, lusse vir beugels en bande, randstawe) wat daaraan saamgevoeg is, elke staaf 'n gesweepte skyf langs sy middellyn met ware boë by die buigings, sy merk en sy snitlengte.
