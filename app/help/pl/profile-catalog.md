---
title: Katalog profili
summary: Każdy wbudowany rozmiar stali, sposób zapisu nazw profili, źródło wymiarów oraz sposób nazywania blach i przekrojów własnych.
keywords: profile, przekroje, katalog, rozmiary, kształty W, szeroki pas, kształty S, ceownik, kątownik, hss, rura, rura okrągła, ipe, hea, heb, upn, uk, brytyjski, ub, uc, pfc, ea, uea, kątownik nierównoramienny, shs, rhs, chs, kształtowniki zimnogięte, walcowane na gorąco, blue book, blacha, aisc, en 10365, nazewnictwo
from: cd9b2bc3
---

DetailCraft ma 2,311 wbudowanych rozmiarów, każdy skopiowany z opublikowanej tabeli i sprawdzony testami aplikacji: pole wyliczone z wymiarów musi zgadzać się z opublikowanym polem, a opublikowana masa musi zgadzać się z tym polem pomnożonym przez gęstość stali. Blachy i profile niestandardowe powstają z wymiarów.

## Nazewnictwo

- **Kształty amerykańskie** zapisuje się tak, jak drukuje je AISC Manual, z małą literą x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Wielkość liter przy wpisywaniu nie ma znaczenia.
- **Rury** zapisuje się jak w bazie AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standardowa, mocna, bardzo mocna).
- **Kształty europejskie** zapisuje się jak w EN 10365: IPE200, HEA240, HEB300, UPN200 (bez spacji).
- **Kształty brytyjskie** zapisuje się od rodziny, a potem od rozmiaru z Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kształtowniki zimnogięte zaczynają się od CF: CFSHS100x100x5.0. Działa też wpisywanie w sposób, w jaki często podaje się to na rysunkach: 305x165x40 UB, L100x100x10, SHS100x5.
- **Blachy** mają postać `PL<grubość>x<szerokość>` w milimetrach: PL20x200 to blacha o grubości 20 mm i szerokości 200 mm. Działa każdy rozmiar z narzędzia {{ui:Blacha}}.
- **Profile niestandardowe** mają dowolną nazwę, pod warunkiem że nie jest to nazwa z katalogu i nie wygląda jak nazwa blachy.

Na listach {{ui:Przekrój}} nagłówek każdej grupy podaje jej źródło, na przykład „Kształty W — AISC Shapes Database v16.0”.

## Źródła

| Grupa | Źródło | Uwagi |
|---|---|---|
| Kształty W, kształty S, ceowniki (C), kątowniki (L), HSS, rury | AISC Shapes Database v16.0 | Wymiary przeliczone z cali na milimetry dokładnie; masa na metr z opublikowanych lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetry i kg/m, jak opublikowano |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabela v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetry i kg/m, jak opublikowano |
| Blachy | Parametryczne | Masa z pola × 7850 kg/m³ |
| Własne | Wymiary podane przez użytkownika | Masa z pola × 7850 kg/m³ |

Sposób rysowania kształtów:

- **Kształty W:** baza AISC nie podaje promienia zaokrąglenia, więc DetailCraft rysuje zaokrąglenie jako r = kdes − tf.
- **Kształty S i ceowniki (C, UPN):** pasy równoległe o opublikowanej średniej grubości, narożniki proste (rzeczywisty pas jest pochylony).
- **Kątowniki:** narożniki proste.
- **Prostokątne HSS:** projektowa grubość ścianki (0,93 × nominalna, jak dopuszcza AISC 360-22 B4.2) z promieniem zewnętrznego narożnika dwukrotnie większym.
- **Okrągłe HSS i rury:** projektowa grubość ścianki (0,93 × nominalna).
- **IPE, HEA, HEB, UB, UC:** opublikowany promień zaokrąglenia u nasady.
- **PFC, EA, UEA:** narożniki proste (opublikowana masa i pole nadal uwzględniają promienie).
- **SHS, RHS, CHS:** nominalna ścianka. Narożniki walcowane na gorąco: zewnętrzny 1,5 t, wewnętrzny t. Kształtowane na zimno: zewnętrzny 2 t, wewnętrzny t do 6 mm; 2,5 t i 1,5 t do 10 mm; 3 t i 2 t powyżej.

## Rozmiary

Wszystkie rozmiary z tabel w tych grupach, od najmniejszego:

| Grupa | Rozmiary |
|---|---|
| Kształty W (289) | W4x13 do W44x408 |
| Kształty S (28) | S3x5.7 do S24x121 |
| Ceowniki (32) | C3x3.5 do C15x50 |
| Kątowniki równoramienne (61) | L2x2x1/8 do L12x12x1-3/8 |
| HSS, prostokątne i kwadratowe (525) | HSS1-1/2x1-1/2x1/8 do HSS34x10x1 |
| HSS, okrągłe (189) | HSS1.660x0.140 do HSS28.000x1.000 |
| Rury (51) | Pipe1/2STD do Pipe26XS |
| IPE (18) | IPE80 do IPE600 |
| HEA (24) | HEA100 do HEA1000 |
| HEB (24) | HEB100 do HEB1000 |
| UPN (18) | UPN50 do UPN400 |
| Kątowniki nierównoramienne (76) | L2-1/2x1-1/2x3/16 do L8x6x1 |
| UB (107) | UB127x76x13 do UB1016x305x584 |
| UC (46) | UC152x152x23 do UC356x406x1299 |
| PFC (16) | PFC100x50x10 do PFC430x100x64 |
| EA (42) | EA20x20x3.0 do EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 do UEA200x150x18.0 |
| SHS, walcowane na gorąco (123) | SHS40x40x3.2 do SHS400x400x17.5 |
| RHS, walcowane na gorąco (161) | RHS50x30x3.2 do RHS500x300x17.5 |
| CHS, walcowane na gorąco (103) | CHS42.4x3.2 do CHS508.0x17.5 |
| CFSHS, kształtowane na zimno (96) | CFSHS25x25x2.0 do CFSHS400x400x12.5 |
| CFRHS, kształtowane na zimno (137) | CFRHS50x25x2.0 do CFRHS500x300x12.5 |
| CFCHS, kształtowane na zimno (106) | CFCHS33.7x3.0 do CFCHS508.0x16.0 |

Odbity kątownik nierównoramienny to ten sam element obrócony końcami, tak jak warsztat wykonuje wersję przeciwną: jego otwory, wycięcia i blacha węzłowa idą razem z nim.

Wybierz narzędzie umieszczania i rozmiar, aby zobaczyć wysokość, szerokość pasa, grubość środnika i pasa, promień zaokrąglenia, pole (cm²), masę (kg/m) i źródło w polu {{ui:Przekrój}} w panelu {{ui:Właściwości}}.

## Co może każdy kształt

| Kształt | Otwory | Wycięcia | Blachy czołowe i blachy podstawy | Plik NC | Rysunek warsztatowy |
|---|---|---|---|---|---|
| Dwuteowniki (W, S, IPE, HEA, HEB, UB, UC, własne I) | Środnik, pas górny, pas dolny | Tak | Blachy czołowe: belka i słup. Blachy podstawy: tak | Tak | Tak |
| Ceowniki (C, UPN, PFC) | Środnik, pas górny, pas dolny | Nie | Tylko blachy podstawy | Tak | Tak |
| Prostokątne HSS, SHS, RHS | Ścianka boczna (środnik), góra, dół | Nie | Tylko blachy podstawy | Tak | Tak |
| Okrągłe HSS, rury, CHS | Jeszcze nie | Nie | Tylko blachy podstawy | Tak | Tak |
| Kątowniki (L, EA, UEA) | Jeszcze nie | Nie | Tylko blachy podstawy | Tak | Tak |
| Blachy i własne płaskowniki | Powierzchnia blachy | Nie | Nie | Tak | Tak |

Dla rury prostokątnej otwór na ścianie „środnik” przechodzi przez obie ścianki boczne. Zawartość każdego pliku NC opisano w [Pola pliku NC](topic:nc1-fields).

## Potrzebujesz innego rozmiaru?

Dodaj go jako [profil niestandardowy](topic:plates-and-profiles#add-a-custom-profile). Wbudowanej listy nie można jeszcze edytować w aplikacji.
