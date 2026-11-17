---
title: Profilu katalogs
summary: Katrs iebūvētais tērauda izmērs, kā tiek rakstīti profilu nosaukumi, no kurienes nāk izmēri un kā tiek nosauktas plāksnes un pielāgotās sekcijas.
keywords: profili, sekcijas, katalogs, izmēri, W shapes, S shapes, kanāls, leņķis, hss, caurule, pipe, ipe, hea, heb, upn, uk, britu, ub, uc, pfc, ea, uea, nevienādu malu leņķis, shs, rhs, chs, CFSHS, CFRHS, CFCHS, zilā grāmata, plāksne, aisc, en 10365, nosaukšana
from: cd9b2bc3
---

DetailCraft ir 2,311 iebūvēti izmēri, katrs nokopēts no publicētas tabulas un pārbaudīts ar lietotnes testiem: no izmēriem aprēķinātajam laukumam ir jāsakrīt ar publicēto laukumu, un publicētajai masai ir jābūt vienādai ar šo laukumu, reizinātu ar tērauda blīvumu. Plāksnes un pielāgotie profili tiek veidoti pēc to izmēriem.

## Nosaukšana

- **ASV profili** tiek rakstīti tā, kā AISC Manual tos drukā, ar mazo x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Rakstīšana nav reģistrjutīga.
- **Pipe** tiek rakstīts kā AISC datubāzē: Pipe4STD, Pipe4XS, Pipe4XXS (standarta, stiprā, īpaši stiprā).
- **Eiropas profili** tiek rakstīti kā EN 10365: IPE200, HEA240, HEB300, UPN200 (bez atstarpes).
- **Lielbritānijas profili** tiek rakstīti ar ģimeni pirmo, tad Blue Book izmēru: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Aukstā formēšanā veidotie dobie profili sākas ar CF: CFSHS100x100x5.0. Rakstīt tā, kā zīmējumos bieži teikts, arī darbojas: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plāksnes** ir `PL<biezums>x<platums>` milimetros: PL20x200 ir 20 mm biezs un 200 mm plats. Darbojas jebkurš izmērs no rīka {{ui:Plāksne}}.
- **Pielāgotajiem profiliem** ir jebkurš nosaukums, ko dodat, ja vien tas nav kataloga nosaukums un neizskatās kā plāksnes nosaukums.

Profilu sarakstos katras grupas virsraksts nosauc avotu, piemēram, "W shapes — AISC Shapes Database v16.0".

## Avoti

| Grupa | Avots | Piezīmes |
|---|---|---|
| W shapes, S shapes, kanāli (C), leņķi (L), HSS, Pipe | AISC Shapes Database v16.0 | Izmēri pārveidoti no collām uz milimetriem precīzi; masa uz metru no publicētajām lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetri un kg/m kā publicēts |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetri un kg/m kā publicēts |
| Plāksnes | Parametrisks | Masa no laukuma × 7850 kg/m³ |
| Pielāgots | Jūsu izmēri | Masa no laukuma × 7850 kg/m³ |

Kā tiek zīmētas formas:

- **W shapes:** AISC datubāze nedod noapaļojuma rādiusu, tāpēc DetailCraft zīmē noapaļojumu kā r = kdes − tf.
- **S shapes un kanāli (C, UPN):** paralēli flanši ar publicēto vidējo biezumu un taisni stūri (reālais flanšs ir slīps).
- **Leņķi:** taisni stūri.
- **Taisnstūra HSS:** projektēšanas sienas biezums (0.93 × nominālais, kā AISC 360-22 B4.2 atļauj) ar ārējo stūra rādiusu, kas ir divreiz lielāks par šo biezumu.
- **Apaļais HSS un Pipe:** projektēšanas sienas biezums (0.93 × nominālais).
- **IPE, HEA, HEB, UB, UC:** publicētais saknes rādiuss.
- **PFC, EA, UEA:** taisni stūri (publicētā masa un laukums joprojām ietver rādiusus).
- **SHS, RHS, CHS:** nominālā siena. Karstā apstrāde, stūri: ārējais 1.5 t, iekšējais t. Aukstā formēšana: ārējais 2 t, iekšējais t līdz 6 mm; 2.5 t un 1.5 t līdz 10 mm; 3 t un 2 t virs tā.

## Izmēri

Katrs izmērs, ko tabulas uzskaita šajās grupās, mazākais pirmais:

| Grupa | Izmēri |
|---|---|
| W shapes (289) | W4x13 līdz W44x408 |
| S shapes (28) | S3x5.7 līdz S24x121 |
| Kanāli (32) | C3x3.5 līdz C15x50 |
| Leņķi, vienādas malas (61) | L2x2x1/8 līdz L12x12x1-3/8 |
| HSS, taisnstūra un kvadrātveida (525) | HSS1-1/2x1-1/2x1/8 līdz HSS34x10x1 |
| HSS, apaļi (189) | HSS1.660x0.140 līdz HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD līdz Pipe26XS |
| IPE (18) | IPE80 līdz IPE600 |
| HEA (24) | HEA100 līdz HEA1000 |
| HEB (24) | HEB100 līdz HEB1000 |
| UPN (18) | UPN50 līdz UPN400 |
| Leņķi, nevienādas malas (76) | L2-1/2x1-1/2x3/16 līdz L8x6x1 |
| UB (107) | UB127x76x13 līdz UB1016x305x584 |
| UC (46) | UC152x152x23 līdz UC356x406x1299 |
| PFC (16) | PFC100x50x10 līdz PFC430x100x64 |
| EA (42) | EA20x20x3.0 līdz EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 līdz UEA200x150x18.0 |
| SHS, karstā apstrāde (123) | SHS40x40x3.2 līdz SHS400x400x17.5 |
| RHS, karstā apstrāde (161) | RHS50x30x3.2 līdz RHS500x300x17.5 |
| CHS, karstā apstrāde (103) | CHS42.4x3.2 līdz CHS508.0x17.5 |
| CFSHS, aukstā formēšana (96) | CFSHS25x25x2.0 līdz CFSHS400x400x12.5 |
| CFRHS, aukstā formēšana (137) | CFRHS50x25x2.0 līdz CFRHS500x300x12.5 |
| CFCHS, aukstā formēšana (106) | CFCHS33.7x3.0 līdz CFCHS508.0x16.0 |

Spoguļots nevienādu malu leņķis ir tā pati detaļa, pagriezta galu galā, tāpat kā cehs izgatavo pretējo variantu: tā caurumi, izgriezumi un fasējuma plāksne iet līdzi.

Izvēlieties novietošanas rīku un izmēru, lai redzētu tā dziļumu, flanša platumu, stīpas un flanša biezumu, noapaļojuma rādiusu, laukumu (cm²), masu (kg/m) un avotu lodziņā {{ui:Profils}} panelī {{ui:Rekvizīti}}.

## Ko katra forma var

| Forma | Caurumi | Izgriezumi | Galu un pamatnes plāksnes | NC fails | Darbnīcas rasējums |
|---|---|---|---|---|---|
| I profili (W, S, IPE, HEA, HEB, UB, UC, pielāgots I) | Stīpa, augšējais flanšs, apakšējais flanšs | Jā | Galu plāksnes: sija un kolonna. Pamatnes plāksnes: jā | Jā | Jā |
| Kanāli (C, UPN, PFC) | Stīpa, augšējais flanšs, apakšējais flanšs | Nē | Tikai pamatnes plāksnes | Jā | Jā |
| Taisnstūra HSS, SHS, RHS | Sānu siena (stīpa), augšā, apakšā | Nē | Tikai pamatnes plāksnes | Jā | Jā |
| Apaļais HSS, Pipe, CHS | Vēl nav | Nē | Tikai pamatnes plāksnes | Jā | Jā |
| Leņķi (L, EA, UEA) | Vēl nav | Nē | Tikai pamatnes plāksnes | Jā | Jā |
| Plāksnes un pielāgotās plakanās joslas | Plāksnes virsma | Nē | Nē | Jā | Jā |

Taisnstūra caurulē caurums uz "stīpas" virsmas iet caur abām sānu sienām. To, ko katrs NC fails satur, skatiet [NC faila lauki](topic:nc1-fields).

## Vajag citu izmēru?

Pievienojiet to kā [pielāgotu profilu](topic:plates-and-profiles#add-a-custom-profile). Iebūvēto sarakstu lietotnē vēl nevar rediģēt.
