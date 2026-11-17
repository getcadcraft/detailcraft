---
title: Profilkatalog
summary: Alle indbyggede stålstørrelser, hvordan profilnavne skrives, hvor målene kommer fra, og hvordan plader og egne tværsnit navngives.
keywords: profiler, tværsnit, katalog, størrelser, w-profiler, bredflange, s-profiler, u-profil, kanal, vinkel, hss, rør, pipe, ipe, hea, heb, upn, uk, britisk, ub, uc, pfc, ea, uea, ulighedsbenet vinkel, shs, rhs, chs, koldformet, varmvalset, blue book, plade, aisc, en 10365, navngivning
from: cd9b2bc3
---

DetailCraft har 2.311 indbyggede størrelser, hver kopieret fra en publiceret tabel og kontrolleret af appens tests: arealet, der regnes ud fra målene, skal stemme med det publicerede areal, og den publicerede vægt skal stemme med arealet gange stålets densitet. Plader og egne profiler laves ud fra deres mål.

## Navngivning

- **US-profiler** skrives, som AISC Manual udskriver dem, med lille x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Skrivning er ikke versalfølsom.
- **Rør** skrives som i AISC-databasen: Pipe4STD, Pipe4XS, Pipe4XXS (standard, ekstra kraftig, dobbelt ekstra kraftig).
- **Europæiske profiler** skrives som i EN 10365: IPE200, HEA240, HEB300, UPN200 (uden mellemrum).
- **UK-profiler** skrives med familien først, efterfulgt af Blue Book-størrelsen: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Koldformede hule profiler starter med CF: CFSHS100x100x5.0. Det virker også at skrive det, som tegninger ofte gør: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plader** er `PL<tykkelse>x<bredde>` i millimeter: PL20x200 er 20 mm tyk og 200 mm bred. Enhver størrelse fra værktøjet {{ui:Plade}} virker.
- **Egne profiler** har det navn, du giver dem, så længe det ikke er et katalognavn og ikke ligner et pladenavn.

I profillisterne navngiver hver gruppes overskrift sin kilde, for eksempel "W-profiler — AISC Shapes Database v16.0".

## Kilder

| Gruppe | Kilde | Noter |
|---|---|---|
| W-profiler, S-profiler, U-profiler (C), vinkelstål (L), HSS, Pipe | AISC Shapes Database v16.0 | Mål omregnet fra tommer til millimeter nøjagtigt; masse pr. meter fra den publicerede lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeter og kg/m som publiceret |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabel v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeter og kg/m som publiceret |
| Plader | Parametrisk | Masse fra areal × 7850 kg/m³ |
| Egne | Dine mål | Masse fra areal × 7850 kg/m³ |

Sådan tegnes profilerne:

- **W-profiler:** AISC-databasen giver ingen hjørneradius, så DetailCraft tegner hjørnet som r = kdes − tf.
- **S-profiler og U-profiler (C, UPN):** parallelle flanger med den publicerede gennemsnitstykkelse, skarpe hjørner (den rigtige flange er skrå).
- **Vinkelstål:** skarpe hjørner.
- **Rektangulær HSS:** den dimensionerende vægtykkelse (0.93 × nominel, som AISC 360-22 B4.2 tillader) med en udvendig hjørneradius på det dobbelte.
- **Rund HSS og Pipe:** dimensionerende vægtykkelse (0.93 × nominel).
- **IPE, HEA, HEB, UB, UC:** den publicerede rodradius.
- **PFC, EA, UEA:** skarpe hjørner (den publicerede masse og areal inkluderer stadig radierne).
- **SHS, RHS, CHS:** den nominelle væg. Varmvalsede hjørner: udvendig 1.5 t, indvendig t. Koldformet: udvendig 2 t, indvendig t op til 6 mm; 2.5 t og 1.5 t op til 10 mm; 3 t og 2 t over.

## Størrelserne

Alle størrelser, tabellerne lister i disse grupper, mindste først:

| Gruppe | Størrelser |
|---|---|
| W-profiler (289) | W4x13 til W44x408 |
| S-profiler (28) | S3x5.7 til S24x121 |
| U-profiler (32) | C3x3.5 til C15x50 |
| Vinkelstål, lige ben (61) | L2x2x1/8 til L12x12x1-3/8 |
| HSS, rektangulær og kvadratisk (525) | HSS1-1/2x1-1/2x1/8 til HSS34x10x1 |
| HSS, rund (189) | HSS1.660x0.140 til HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD til Pipe26XS |
| IPE (18) | IPE80 til IPE600 |
| HEA (24) | HEA100 til HEA1000 |
| HEB (24) | HEB100 til HEB1000 |
| UPN (18) | UPN50 til UPN400 |
| Vinkelstål, ulige ben (76) | L2-1/2x1-1/2x3/16 til L8x6x1 |
| UB (107) | UB127x76x13 til UB1016x305x584 |
| UC (46) | UC152x152x23 til UC356x406x1299 |
| PFC (16) | PFC100x50x10 til PFC430x100x64 |
| EA (42) | EA20x20x3.0 til EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 til UEA200x150x18.0 |
| SHS, varmvalset (123) | SHS40x40x3.2 til SHS400x400x17.5 |
| RHS, varmvalset (161) | RHS50x30x3.2 til RHS500x300x17.5 |
| CHS, varmvalset (103) | CHS42.4x3.2 til CHS508.0x17.5 |
| CFSHS, koldformet (96) | CFSHS25x25x2.0 til CFSHS400x400x12.5 |
| CFRHS, koldformet (137) | CFRHS50x25x2.0 til CFRHS500x300x12.5 |
| CFCHS, koldformet (106) | CFCHS33.7x3.0 til CFCHS508.0x16.0 |

Et spejlvendt ulige vinkelstål er det samme stykke vendt ende for ende, sådan som et værksted laver den modsatte hånd: dets huller, udskæringer og samleplade følger med.

Vælg et placeringsværktøj og en størrelse for at se dens højde, flangebredde, steg- og flangetykkelse, hjørneradius, areal (cm²), masse (kg/m) og kilde i boksen {{ui:Profil}} i panelet {{ui:Egenskaber}}.

## Hvad hver form kan

| Form | Huller | Udskæringer | Endeplader og fodplader | NC-fil | Værkstedstegning |
|---|---|---|---|---|---|
| I-profiler (W, S, IPE, HEA, HEB, UB, UC, egen I) | Steg, øverste flange, nederste flange | Ja | Endeplader: bjælke og søjle. Fodplader: ja | Ja | Ja |
| U-profiler (C, UPN, PFC) | Steg, øverste flange, nederste flange | Nej | Kun fodplader | Ja | Ja |
| Rektangulær HSS, SHS, RHS | Sidevæg (steg), top, bund | Nej | Kun fodplader | Ja | Ja |
| Rund HSS, Pipe, CHS | Endnu ikke | Nej | Kun fodplader | Ja | Ja |
| Vinkelstål (L, EA, UEA) | Endnu ikke | Nej | Kun fodplader | Ja | Ja |
| Plader og egne fladstål | Pladeflade | Nej | Nej | Ja | Ja |

For et rektangulært rør går et hul på "steg"-fladen gennem begge sidevægge. Hvad hver NC-fil indeholder, står i [NC-filens felter](topic:nc1-fields).

## Brug for en anden størrelse?

Tilføj den som en [egen profil](topic:plates-and-profiles#add-a-custom-profile). Den indbyggede liste kan ikke redigeres fra appen endnu.
