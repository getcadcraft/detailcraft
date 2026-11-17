---
title: Katalóg profilov
summary: Každý vstavaný oceľový rozmer, spôsob zápisu názvov profilov, odkiaľ pochádzajú rozmery a ako sa pomenúvajú plechy a vlastné prierezy.
keywords: profily, prierezy, katalóg, rozmery, tvary W, široká pásnica, tvary S, profil U, uholník, hss, rúrka, potrubie, ipe, hea, heb, upn, uk, britský, ub, uc, pfc, ea, uea, nerovnoramenný uholník, shs, rhs, chs, za studena tvarované, za tepla valcované, modrá kniha, plech, aisc, en 10365, pomenovanie
from: cd9b2bc3
---

DetailCraft má 2,311 vstavaných rozmerov, každý skopírovaný z uverejnenej tabuľky a overený testami aplikácie: plocha vypočítaná z rozmerov sa musí zhodovať s uverejnenou plochou a uverejnená hmotnosť musí zodpovedať tejto ploche vynásobenej hustotou ocele. Plechy a vlastné profily sa tvoria z ich rozmerov.

## Pomenovanie

- **Americké tvary** sa zapisujú tak, ako ich tlačí príručka AISC, s malým x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Pri zadávaní nezáleží na veľkosti písmen.
- **Rúry** sa zapisujú ako v databáze AISC: Pipe4STD, Pipe4XS, Pipe4XXS (štandardná, extra silná, dvojito extra silná).
- **Európske tvary** sa zapisujú ako v EN 10365: IPE200, HEA240, HEB300, UPN200 (bez medzery).
- **Britské tvary** sa zapisujú najprv s označením skupiny, potom s rozmerom z Modrej knihy: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Za studena tvarované duté profily začínajú na CF: CFSHS100x100x5.0. Funguje aj zápis tak, ako ho výkresy bežne uvádzajú: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plechy** sú `PL<thickness>x<width>` v milimetroch: PL20x200 má hrúbku 20 mm a šírku 200 mm. Funguje akýkoľvek rozmer z nástroja {{ui:Doska}}.
- **Vlastné profily** majú názov, aký im dáte, pokiaľ nie je názvom z katalógu a nevyzerá ako názov plechu.

V zoznamoch {{ui:Profil}} nadpis každej skupiny uvádza jej zdroj, napríklad "tvary W — AISC Shapes Database v16.0".

## Zdroje

| Skupina | Zdroj | Poznámky |
|---|---|---|
| Tvary W, tvary S, profily U (C), uholníky (L), HSS, rúry | AISC Shapes Database v16.0 | Rozmery presne prevedené z palcov na milimetre; hmotnosť na meter z uverejnených lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetre a kg/m podľa uverejnenia |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabuľka v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetre a kg/m podľa uverejnenia |
| Plechy | Parametrický | Hmotnosť z plochy × 7850 kg/m³ |
| Vlastné | Vaše rozmery | Hmotnosť z plochy × 7850 kg/m³ |

Ako sa tvary kreslia:

- **Tvary W:** databáza AISC neuvádza polomer zaoblenia, preto DetailCraft kreslí zaoblenie ako r = kdes − tf.
- **Tvary S a profily U (C, UPN):** rovnobežné pásnice s uverejnenou priemernou hrúbkou, kolmé rohy (skutočná pásnica je sklonená).
- **Uholníky:** kolmé rohy.
- **Obdĺžnikový HSS:** návrhová hrúbka steny (0.93 × menovitá, ako dovoľuje AISC 360-22 B4.2) s polomerom vonkajšieho rohu dvojnásobným voči nej.
- **Kruhový HSS a rúry:** návrhová hrúbka steny (0.93 × menovitá).
- **IPE, HEA, HEB, UB, UC:** uverejnený polomer zaoblenia v koreni.
- **PFC, EA, UEA:** kolmé rohy (uverejnená hmotnosť a plocha stále obsahujú polomery).
- **SHS, RHS, CHS:** menovitá stena. Za tepla valcované rohy: vonkajší 1.5 t, vnútorný t. Za studena tvarované: vonkajší 2 t, vnútorný t do 6 mm; 2.5 t a 1.5 t do 10 mm; 3 t a 2 t nad 10 mm.

## Rozmery

Každý rozmer uvedený v tabuľkách týchto skupín, od najmenšieho:

| Skupina | Rozmery |
|---|---|
| Tvary W (289) | W4x13 až W44x408 |
| Tvary S (28) | S3x5.7 až S24x121 |
| Profily U (32) | C3x3.5 až C15x50 |
| Uholníky, rovnaké ramená (61) | L2x2x1/8 až L12x12x1-3/8 |
| HSS, obdĺžnikové a štvorcové (525) | HSS1-1/2x1-1/2x1/8 až HSS34x10x1 |
| HSS, kruhové (189) | HSS1.660x0.140 až HSS28.000x1.000 |
| Rúry (51) | Pipe1/2STD až Pipe26XS |
| IPE (18) | IPE80 až IPE600 |
| HEA (24) | HEA100 až HEA1000 |
| HEB (24) | HEB100 až HEB1000 |
| UPN (18) | UPN50 až UPN400 |
| Uholníky, rôzne ramená (76) | L2-1/2x1-1/2x3/16 až L8x6x1 |
| UB (107) | UB127x76x13 až UB1016x305x584 |
| UC (46) | UC152x152x23 až UC356x406x1299 |
| PFC (16) | PFC100x50x10 až PFC430x100x64 |
| EA (42) | EA20x20x3.0 až EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 až UEA200x150x18.0 |
| SHS, za tepla valcované (123) | SHS40x40x3.2 až SHS400x400x17.5 |
| RHS, za tepla valcované (161) | RHS50x30x3.2 až RHS500x300x17.5 |
| CHS, za tepla valcované (103) | CHS42.4x3.2 až CHS508.0x17.5 |
| CFSHS, za studena tvarované (96) | CFSHS25x25x2.0 až CFSHS400x400x12.5 |
| CFRHS, za studena tvarované (137) | CFRHS50x25x2.0 až CFRHS500x300x12.5 |
| CFCHS, za studena tvarované (106) | CFCHS33.7x3.0 až CFCHS508.0x16.0 |

Zrkadlový nerovnoramenný uholník je ten istý kus otočený opačne, tak ako dielňa vyrába opačnú verziu: jeho otvory, výrezy aj uzlový plech idú s ním.

Vyberte nástroj na umiestňovanie a zvoľte rozmer, aby ste v poli {{ui:Profil}} na paneli {{ui:Vlastnosti}} videli hĺbku, šírku pásnice, hrúbku stojiny a pásnice, polomer zaoblenia, plochu (cm²), hmotnosť (kg/m) a zdroj.

## Čo každý tvar dokáže

| Tvar | Otvory | Výrezy | Čelné dosky a pätné dosky | Súbor NC | Dielenský výkres |
|---|---|---|---|---|---|
| Profily I (W, S, IPE, HEA, HEB, UB, UC, vlastný I) | Stojina, horná pásnica, spodná pásnica | Áno | Čelné dosky: nosník aj stĺpec. Pätné dosky: áno | Áno | Áno |
| Profily U (C, UPN, PFC) | Stojina, horná pásnica, spodná pásnica | Nie | Iba pätné dosky | Áno | Áno |
| Obdĺžnikový HSS, SHS, RHS | Bočná stena (stojina), horná, spodná | Nie | Iba pätné dosky | Áno | Áno |
| Kruhový HSS, rúry, CHS | Zatiaľ nie | Nie | Iba pätné dosky | Áno | Áno |
| Uholníky (L, EA, UEA) | Zatiaľ nie | Nie | Iba pätné dosky | Áno | Áno |
| Plechy a vlastné ploché ocele | Plocha plechu | Nie | Nie | Áno | Áno |

Pri obdĺžnikovej rúrke otvor na ploche "stojina" prechádza oboma bočnými stenami. Čo obsahuje každý súbor NC, je v [Polia súboru NC](topic:nc1-fields).

## Potrebujete iný rozmer?

Pridajte ho ako [vlastný profil](topic:plates-and-profiles#add-a-custom-profile). Vstavaný zoznam sa z aplikácie zatiaľ nedá upravovať.
