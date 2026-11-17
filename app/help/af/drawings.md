---
title: Algemene rangskikking- en samestellingstekeninge
summary: Maak planne, aansigte en een samestellingstekening per samestellingsmerk uit die model, op A4- tot A1- of ANSI B- tot D-blaaie, gee dit uit met hersieningsletters, en laai dit af as PDF, DWG of DXF.
keywords: verborge lyne, verborge lyn verwydering, stippel, hersieningswolk, wolke, hersieningsdriehoek, ankerboutplan, ankerstawe, staafskedule, grondplaatskedule, uitsetting, uitgee, hersiening, rev, hersieningstabel, heruitgawe, uitgawelog, transmittal, dwg, dxf, cad-lêer, uitvoer tekeninge, tekeninge, algemene rangskikking, ga, plan, aansig, samestellingstekening, blaaigrootte, papiergrootte, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, druk, skaal, titelblok, modelverwysing
from: 709f8604
---

Kies {{ui:Tekeninge}} in die {{ui:Uitvoer}}-groep. DetailCraft maak die hele stel uit die model soos dit nou is. Niks word gestoor nie: verander die model, maak {{ui:Tekeninge}} weer oop, en die stel word weer gemaak.

## Wat in die stel is

- **Planne**, een per vlak wat iets op het, gesien van bo af.
- **Aansigte**, een per roosterlyn met lede binne 1 m daarvan.
- **Die ankerboutplan**, wanneer die model basisplate het: elke basisplaat van bo gesien met sy kolom en ankerstawe, die roosters met hul afmetings, 'n tipiese detail van elke stawepatroon (BP1, BP2 …) met die stawespasiëring en randafstande, en twee skedules: die ankerstawe volgens merk (R1, R2 …: hoeveelheid, deursnee, lengte, uitsteek bo die plaat, inbedding, graad) en die basisplate volgens rooster (kolom, patroon, plaat, stawe, bo-kant van plaat). 'n Kolom buite die rooster word volgens sy koördinate geplaas.
- **Samestellingstekeninge**, een per samestellingsmerk: voor-, bo- en eindaansigte, kettingafmetings na gate en plaatrande, die onderdeellys, los boute en stawe, en sweis- en gatnotas. Elke gesweisde plaat het 'n kantlasimbool in die voorafsig (AWS A2.4): die pyltjie wys na die verbinding, die driehoek onder die verwysingslyn beteken die pylkant, die getal links daarvan is die sweisgrootte in mm, en 'n sirkel waar die pyltjie die lyn raak beteken rondom.

**Verborge lyne.** Planne en aansigte laat die lyne van 'n deel weg waar 'n deel wat heeltemal voor dit staan, dit bedek ('n balk wat van kant gesien word agter 'n kolom). Samestellingstekeninge trek 'n plaat stippellyn waar die hoofdeel dit bedek: agter die lyf in die voorafsig (gesien van die deel se −u-kant), onder die boonste flens in die boonaansig. Dele wat op dieselfde diepte sit, of in diepte oorvleuel, word albei volledig getrek.

Elke blad het 'n titelblok met die tekeningnommer, die skaal, die modelnaam, die datum, die bladnommer met die blaaigrootte, en die modelverwysing: 'n kode wat uit die gestoorde model gemaak is, sodat 'n afdruk na die model gekoppel kan word waar dit vandaan kom.

## Kies die blaaigrootte

Kies die grootte in die lys bo-aan die {{ui:Tekeninge}}-venster: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) of {{ui:ANSI D}} (22 × 34 in). Elke blad is landskap. Die stel word dadelik op die nuwe grootte weer gemaak, en dieselfde grootte word vir werkswinkeltekeninge gebruik. Dit is ook in [DetailCraft-instellings](topic:settings#drawings), en hierdie blaaier onthou dit.

- 'n Groter blad word op 'n groter skaal getrek. Skale is altyd standaardskale (1:10, 1:20, 1:25, 1:50, 1:100 en so meer).
- Teks bly dieselfde grootte op elke blad, sodat dit leesbaar bly wanneer dit gedruk word.
- Op 'n klein blad kan 'n lang, dun samestelling 'n groter skaal oor sy diepte kry as oor sy lengte. Die aansigtitel sê dan albei skale, en die afmetings geld.

## Gee tekeninge uit en hersienings

Die lyn bo die voorskou sê waar die getoonde blad staan: **Nog nie uitgegee nie**, **Rev B, uitgegee … ; sedertdien onveranderd**, of, in rooi, **Verander sedert rev B: moet heruitgegee word**. Die bladlys merk uitgegeë blaaie met hul hersiening, en die wat heruitgegee moet word.

- Tik waarvoor die uitgawe is (dit begin as "Uitgereik vir vervaardiging") en kies {{ui:Gee hierdie blad uit}}, of {{ui:Gee veranderde blaaie uit}} vir elke blad wat nuut is of sedert sy laaste uitgawe verander het.
- Die eerste uitgawe van 'n blad is hersiening A, dan B, C en so aan (I en O word oorgeslaan).
- Die titelblok wys die tekeningnommer met sy hersiening ("A-B1  rev B"), en 'n hersieningstabel langsaan lys die jongste uitgawes: hersiening, datum en beskrywing. Op 'n klein blad wys dit soveel as wat pas.
- 'n Blad "verander" wanneer wat daarop getrek is, verander: 'n geskuifde lid, 'n nuwe gat, 'n hernommerde merk. Die datum, die bladtelling en die hersieningstabel self tel nie. Die verandering van die blaaigrootte verander elke blad.
- Die uitgavelog word in die modellêer gestoor, en uitgee is een ontdoen-stap. Die [KISS-lêer](topic:kiss-export) dra elke tekening se jongste hersiening.

### Hersieningswolke

Vanaf die tweede uitgawe van 'n blad word elke onderdeel of fondasie wat verander het, binne 'n hersieningswolk met 'n hersieningsdriehoek wat die letter dra, getrek.

- Terwyl 'n blad sedert sy laaste uitgawe verander het, wys die wolke wat sedertdien verander het, met die komende hersiening in die driehoek (rev B uitgegee en verander: die driehoeke sê C).
- Sodra jy dit uitgee, bly die wolke op daardie hersiening se blad, soos op 'n gedrukte stel, totdat die blad weer verander.
- Elke blad omwolk net veranderinge wat dit wys. Planne en aansigte trek geen gate of uitsnydings nie, so hulle omwolk 'n lid wat geskuif, gedraai of van grootte verander het, of wie se merk verander het. Samestellingstekeninge en die ankerboutplan omwolk ook nuwe of geskuifde gate en uitsnydings.
- 'n Hernommerde merk tel: wanneer 'n verandering 'n balk 'n nuwe samestelling maak, word die balke wie se merk opgeskuif het (B1 na B2) op planne en aansigte omwolk.
- 'n Onderdeel wat geskrap is, laat niks oor om te omwolk nie.
- Blaaie wat uitgegee is voordat hersieningswolke ingekom het (DetailCraft 0.4), begin wolke vanaf hul volgende uitgawe.
- Wolke is in die PDF-, DXF- en DWG-aflaaie, en tel nooit self as 'n verandering nie.

## Aflaai

Kies die formaat in die lys langs die knoppies, dan {{ui:Hierdie blad}} vir die getoonde blad of {{ui:Alle blaaie}} vir die hele stel.

- **PDF**: om te druk of te stuur. {{ui:Alle blaaie}} maak een PDF, een bladsy per blad, elke bladsy die gekose grootte.
- **DWG**, in die 2018-, 2013-, 2010-, 2007-, 2004- of 2000-formaat: om die blaaie in 'n CAD-program oop te maak. Kies 'n ouer formaat vir 'n ouer program.
- **DXF (R12)**: die weergawe wat byna elke CAD-program oopmaak.

'n DWG- of DXF-blad word op volle grootte getrek: een tekeningeenheid is een millimeter op die papier, so dit druk op 1:1 en elke aansig hou die skaal wat sy titel sê. Elke pen is sy eie laag: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID en so aan, met sy lyndikte (DWG) en sy strepe. Woorde is teks in die DetailCraft-teksstyl (Arial). Afmetings is die lyne en syfers wat jy sien, nie afmetingsobjekte nie. {{ui:Alle blaaie}} plaas die DWG- of DXF-lêers in een zip, een lêer per blad.

:::note
DXF R12 het geen lyndikte en geen vulling nie: die lae behou hul name, so stel die penne per laag in wanneer jy plot, en gevulde vorms word weggelaat (die statusbalk sê hoeveel).
:::

Druk teen 100% (geen "pas op bladsy") op papier van dieselfde grootte as jy wil hê die gestelde skale moet geld.
