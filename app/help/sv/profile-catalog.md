---
title: Profilkatalog
summary: Alla inbyggda stålstorlekar, hur profilnamn skrivs, varifrån måtten kommer och hur plåtar och egna sektioner namnges.
keywords: profiler, sektioner, katalog, storlekar, w-profiler, s-profiler, u-profil, vinkelstål, hss, rör, pipe, ipe, hea, heb, upn, uk, brittisk, ub, uc, pfc, ea, uea, olika ben, shs, rhs, chs, kallformad, varmvalsad, blue book, plåt, aisc, en 10365, namngivning
from: cd9b2bc3
---

DetailCraft har 2,311 inbyggda storlekar, var och en kopierad från en publicerad tabell och kontrollerad av appens tester: arean som räknas ut från måtten måste stämma med den publicerade arean, och den publicerade vikten måste stämma med den arean gånger stålets densitet. Plåtar och egna profiler görs utifrån sina mått.

## Namngivning

- **US-profiler** skrivs som AISC Manual skriver dem, med liten bokstav x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Skrivning är inte skiftlägeskänslig.
- **Rör** skrivs som i AISC-databasen: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra stark, dubbelt extra stark).
- **Europeiska profiler** skrivs som i EN 10365: IPE200, HEA240, HEB300, UPN200 (utan mellanslag).
- **Brittiska profiler** skrivs med familjen först, sedan Blue Books storlek: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kallformade ihåliga sektioner börjar med CF: CFSHS100x100x5.0. Att skriva som ritningar ofta gör fungerar också: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plåtar** skrivs `PL<tjocklek>x<bredd>` i millimeter: PL20x200 är 20 mm tjock och 200 mm bred. Alla storlekar från verktyget {{ui:Plate}} fungerar.
- **Egna profiler** har vilket namn du än ger dem, så länge det inte är ett katalognamn och inte liknar ett plåtnamn.

I listorna {{ui:Profile}} anger varje grupprubrik sin källa, till exempel "W shapes — AISC Shapes Database v16.0".

## Källor

| Grupp | Källa | Anmärkningar |
|---|---|---|
| W shapes, S shapes, U-profiler (C), vinkelstål (L), HSS, Rör | AISC Shapes Database v16.0 | Mått omräknade från tum till millimeter exakt; massa per meter från publicerad lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeter och kg/m enligt publicering |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabell v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeter och kg/m enligt publicering |
| Plåtar | Parametrisk | Massa från area × 7850 kg/m³ |
| Egna | Dina mått | Massa från area × 7850 kg/m³ |

Så ritas profilerna:

- **W-profiler:** AISC-databasen ger ingen filéradie, så DetailCraft ritar filéen som r = kdes − tf.
- **S-profiler och U-profiler (C, UPN):** parallella flänsar med den publicerade medeltjockleken, raka hörn (den verkliga flänsen är lutande).
- **Vinkelstål:** raka hörn.
- **Rektangulär HSS:** dimensionerande väggtjocklek (0.93 × nominell, som AISC 360-22 B4.2 tillåter) med en yttre hörnradie på dubbla den.
- **Rund HSS och rör:** dimensionerande väggtjocklek (0.93 × nominell).
- **IPE, HEA, HEB, UB, UC:** den publicerade rotradien.
- **PFC, EA, UEA:** raka hörn (den publicerade massan och arean inkluderar fortfarande radierna).
- **SHS, RHS, CHS:** den nominella väggen. Varmvalsade hörn: yttre 1.5 t, inre t. Kallformade: yttre 2 t, inre t upp till 6 mm; 2.5 t och 1.5 t upp till 10 mm; 3 t och 2 t över.

## Storlekarna

Varje storlek som tabellerna listar i dessa grupper, minsta först:

| Grupp | Storlekar |
|---|---|
| W-profiler (289) | W4x13 till W44x408 |
| S-profiler (28) | S3x5.7 till S24x121 |
| U-profiler (32) | C3x3.5 till C15x50 |
| Vinkelstål, lika ben (61) | L2x2x1/8 till L12x12x1-3/8 |
| HSS, rektangulär och kvadratisk (525) | HSS1-1/2x1-1/2x1/8 till HSS34x10x1 |
| HSS, rund (189) | HSS1.660x0.140 till HSS28.000x1.000 |
| Rör (51) | Pipe1/2STD till Pipe26XS |
| IPE (18) | IPE80 till IPE600 |
| HEA (24) | HEA100 till HEA1000 |
| HEB (24) | HEB100 till HEB1000 |
| UPN (18) | UPN50 till UPN400 |
| Vinkelstål, olika ben (76) | L2-1/2x1-1/2x3/16 till L8x6x1 |
| UB (107) | UB127x76x13 till UB1016x305x584 |
| UC (46) | UC152x152x23 till UC356x406x1299 |
| PFC (16) | PFC100x50x10 till PFC430x100x64 |
| EA (42) | EA20x20x3.0 till EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 till UEA200x150x18.0 |
| SHS, varmvalsad (123) | SHS40x40x3.2 till SHS400x400x17.5 |
| RHS, varmvalsad (161) | RHS50x30x3.2 till RHS500x300x17.5 |
| CHS, varmvalsad (103) | CHS42.4x3.2 till CHS508.0x17.5 |
| CFSHS, kallformad (96) | CFSHS25x25x2.0 till CFSHS400x400x12.5 |
| CFRHS, kallformad (137) | CFRHS50x25x2.0 till CFRHS500x300x12.5 |
| CFCHS, kallformad (106) | CFCHS33.7x3.0 till CFCHS508.0x16.0 |

Ett spegelvänt vinkelstål med olika ben är samma del vänd ände för ände, så som en verkstad gör den motsatta varianten: dess hål, urtag och knutplåt följer med.

Välj ett placeringsverktyg och välj en storlek för att se dess djup, flänsbredd, liv- och flänstjocklek, filéradie, area (cm²), massa (kg/m) och källa i rutan {{ui:Profile}} i panelen {{ui:Properties}}.

## Vad varje form kan göra

| Form | Hål | Urtag | Ändplattor och fotplåtar | NC-fil | Verkstadsritning |
|---|---|---|---|---|---|
| I-balkar (W, S, IPE, HEA, HEB, UB, UC, egna I) | Liv, övre fläns, nedre fläns | Ja | Ändplattor: balk och pelare. Fotplåtar: ja | Ja | Ja |
| U-profiler (C, UPN, PFC) | Liv, övre fläns, nedre fläns | Nej | Endast fotplåtar | Ja | Ja |
| Rektangulär HSS, SHS, RHS | Sidovägg (liv), översta, understa | Nej | Endast fotplåtar | Ja | Ja |
| Rund HSS, rör, CHS | Inte ännu | Nej | Endast fotplåtar | Ja | Ja |
| Vinkelstål (L, EA, UEA) | Inte ännu | Nej | Endast fotplåtar | Ja | Ja |
| Plåtar och egna plattstänger | Plåtens yta | Nej | Nej | Ja | Ja |

För en rektangulär rör går ett hål på ytan ”liv” genom båda sidoväggarna. Vad varje NC-fil innehåller finns i [NC-filens fält](topic:nc1-fields).

## Behöver du en annan storlek?

Lägg till den som en [egen profil](topic:plates-and-profiles#add-a-custom-profile). Den inbyggda listan kan inte redigeras från appen ännu.
