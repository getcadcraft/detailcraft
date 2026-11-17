---
title: Profilkatalog
summary: Alle innebygde stålstørrelser, hvordan profilnavn skrives, hvor målene kommer fra, og hvordan plater og egendefinerte snitt navngis.
keywords: profiler, snitt, katalog, størrelser, w-profiler, bredflens, s-profiler, u-profil, vinkelstål, hss, rør, ipe, hea, heb, upn, uk, britisk, ub, uc, pfc, ea, uea, ulikebenet vinkelstål, shs, rhs, chs, kaldformet, blå bok, plate, aisc, en 10365, navngivning
from: cd9b2bc3
---

DetailCraft har 2,311 innebygde størrelser, hver kopiert fra en publisert tabell og kontrollert av appens tester: arealet beregnet fra målene må stemme med det publiserte arealet, og den publiserte vekten må stemme med dette arealet ganget med stålets tetthet. Plater og egendefinerte profiler lages ut fra målene sine.

## Navngivning

- **US-profiler** skrives slik AISC Manual skriver dem, med liten x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Store og små bokstaver spiller ingen rolle når du skriver.
- **Rør** skrives som i AISC-databasen: Pipe4STD, Pipe4XS, Pipe4XXS (standard, ekstra sterk, dobbelt ekstra sterk).
- **Europeiske profiler** skrives som i EN 10365: IPE200, HEA240, HEB300, UPN200 (uten mellomrom).
- **Britiske profiler** skrives med familien først, og så størrelsen fra Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kaldformede hule profiler starter med CF: CFSHS100x100x5.0. Det fungerer også å skrive slik tegninger ofte gjør: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plater** er `PL<tykkelse>x<bredde>` i millimeter: PL20x200 er 20 mm tykk og 200 mm bred. Enhver størrelse fra {{ui:Plate}}-verktøyet fungerer.
- **Egendefinerte profiler** har navnet du gir dem, så lenge det ikke er et katalognavn og ikke ligner et platenavn.

I listene under {{ui:Profil}} nevner overskriften for hver gruppe kilden, for eksempel «W shapes — AISC Shapes Database v16.0».

## Kilder

| Gruppe | Kilde | Merknader |
|---|---|---|
| W-profiler, S-profiler, U-profiler (C), vinkelstål (L), HSS, rør | AISC Shapes Database v16.0 | Mål konvertert fra tommer til millimeter nøyaktig; masse per meter fra publisert lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeter og kg/m som publisert |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabell v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeter og kg/m som publisert |
| Plater | Parametrisk | Masse fra areal × 7850 kg/m³ |
| Egendefinert | Dine mål | Masse fra areal × 7850 kg/m³ |

Slik tegnes profilene:

- **W-profiler:** AISC-databasen gir ingen filetradius, så DetailCraft tegner filet som r = kdes − tf.
- **S-profiler og U-profiler (C, UPN):** parallelle flenser med publisert gjennomsnittlig tykkelse, kantede hjørner (den virkelige flensen er skrå).
- **Vinkelstål:** kantede hjørner.
- **Rektangulær HSS:** den dimensjonerende veggtykkelsen (0.93 × nominell, slik AISC 360-22 B4.2 tillater) med en ytre hjørneradius på to ganger den.
- **Runde HSS og rør:** dimensjonerende veggtykkelse (0.93 × nominell).
- **IPE, HEA, HEB, UB, UC:** publisert rotradius.
- **PFC, EA, UEA:** kantede hjørner (publisert masse og areal inkluderer fortsatt radiene).
- **SHS, RHS, CHS:** nominell vegg. Varmferdige hjørner: ytre 1.5 t, indre t. Kaldformede: ytre 2 t, indre t opptil 6 mm; 2.5 t og 1.5 t opptil 10 mm; 3 t og 2 t over.

## Størrelsene

Alle størrelsene tabellene lister i disse gruppene, minste først:

| Gruppe | Størrelser |
|---|---|
| W-profiler (289) | W4x13 til W44x408 |
| S-profiler (28) | S3x5.7 til S24x121 |
| U-profiler (C) (32) | C3x3.5 til C15x50 |
| Vinkelstål, like ben (61) | L2x2x1/8 til L12x12x1-3/8 |
| HSS, rektangulær og kvadratisk (525) | HSS1-1/2x1-1/2x1/8 til HSS34x10x1 |
| HSS, rund (189) | HSS1.660x0.140 til HSS28.000x1.000 |
| Rør (51) | Pipe1/2STD til Pipe26XS |
| IPE (18) | IPE80 til IPE600 |
| HEA (24) | HEA100 til HEA1000 |
| HEB (24) | HEB100 til HEB1000 |
| UPN (18) | UPN50 til UPN400 |
| Vinkelstål, ulike ben (76) | L2-1/2x1-1/2x3/16 til L8x6x1 |
| UB (107) | UB127x76x13 til UB1016x305x584 |
| UC (46) | UC152x152x23 til UC356x406x1299 |
| PFC (16) | PFC100x50x10 til PFC430x100x64 |
| EA (42) | EA20x20x3.0 til EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 til UEA200x150x18.0 |
| SHS, varmferdig (123) | SHS40x40x3.2 til SHS400x400x17.5 |
| RHS, varmferdig (161) | RHS50x30x3.2 til RHS500x300x17.5 |
| CHS, varmferdig (103) | CHS42.4x3.2 til CHS508.0x17.5 |
| CFSHS, kaldformet (96) | CFSHS25x25x2.0 til CFSHS400x400x12.5 |
| CFRHS, kaldformet (137) | CFRHS50x25x2.0 til CFRHS500x300x12.5 |
| CFCHS, kaldformet (106) | CFCHS33.7x3.0 til CFCHS508.0x16.0 |

Et speilvendt ulikebenet vinkelstål er samme del snudd ende for ende, slik et verksted lager den motsatte varianten: hull, utklinkninger og knutepunktsplate følger med.

Velg et plasseringsverktøy og en størrelse for å se dybde, flensbredde, steg- og flenstykkelse, filetradius, areal (cm²), masse (kg/m) og kilde i boksen {{ui:Profil}} i panelet {{ui:Egenskaper}}.

## Hva hver form kan gjøre

| Form | Hull | Utklinkninger | Endeplater og fotplater | NC-fil | Verkstedtegning |
|---|---|---|---|---|---|
| I-profiler (W, S, IPE, HEA, HEB, UB, UC, egendefinert I) | Steg, øvre flens, nedre flens | Ja | Endeplater: bjelke og søyle. Fotplater: ja | Ja | Ja |
| U-profiler (C, UPN, PFC) | Steg, øvre flens, nedre flens | Nei | Kun fotplater | Ja | Ja |
| Rektangulær HSS, SHS, RHS | Sidevegg (steg), topp, bunn | Nei | Kun fotplater | Ja | Ja |
| Rund HSS, rør, CHS | Ikke ennå | Nei | Kun fotplater | Ja | Ja |
| Vinkelstål (L, EA, UEA) | Ikke ennå | Nei | Kun fotplater | Ja | Ja |
| Plater og egendefinerte flatstål | Platens flate | Nei | Nei | Ja | Ja |

For et rektangulært rør går et hull på «steg»-flaten gjennom begge sidevegger. Hva hver NC-fil inneholder, står i [NC-filfelter](topic:nc1-fields).

## Trenger du en annen størrelse?

Legg den til som en [egendefinert profil](topic:plates-and-profiles#add-a-custom-profile). Den innebygde listen kan ikke redigeres fra appen ennå.
