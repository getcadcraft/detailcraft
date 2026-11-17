---
title: Katalog profilů
summary: Každá vestavěná ocelová velikost, způsob zápisu názvů profilů, odkud pocházejí rozměry, a jak se pojmenovávají plechy a vlastní průřezy.
keywords: profily, průřezy, katalog, velikosti, tvary W, široké pásnice, tvary S, U-profil, úhelník, HSS, trubka, potrubí, IPE, HEA, HEB, UPN, UK, britský, UB, UC, PFC, EA, UEA, nerovnoramenný úhelník, SHS, RHS, CHS, za studena tvarované, za tepla válcované, blue book, plech, AISC, EN 10365, pojmenování
from: cd9b2bc3
---

DetailCraft má 2,311 vestavěných velikostí, každou zkopírovanou z publikované tabulky a ověřenou testy aplikace: plocha vypočtená z rozměrů se musí shodovat s publikovanou plochou a publikovaná hmotnost se musí shodovat s touto plochou násobenou hustotou oceli. Plechy a vlastní profily se vytvářejí z jejich rozměrů.

## Pojmenování

- **Americké tvary** se zapisují tak, jak je tiskne AISC Manual, s malým x: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Psaní nerozlišuje velká a malá písmena.
- **Potrubí** se zapisuje jako v databázi AISC: Pipe4STD, Pipe4XS, Pipe4XXS (standardní, silnostěnné, velmi silnostěnné).
- **Evropské tvary** se zapisují podle EN 10365: IPE200, HEA240, HEB300, UPN200 (bez mezery).
- **Britské tvary** se zapisují nejdřív rodinou, pak velikostí z Blue Book: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Za studena tvarované dutiny začínají CF: CFSHS100x100x5.0. Zápis, jak ho často uvádějí výkresy, také funguje: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plechy** jsou `PL<thickness>x<width>` v milimetrech: PL20x200 je 20 mm silný a 200 mm široký. Jakákoli velikost z nástroje {{ui:Plech}} funguje.
- **Vlastní profily** mají jakýkoli název, který zadáte, pokud není názvem z katalogu a nevypadá jako název plechu.

V seznamech {{ui:Profil}} uvádí nadpis každé skupiny svůj zdroj, například "tvary W — AISC Shapes Database v16.0".

## Zdroje

| Skupina | Zdroj | Poznámky |
|---|---|---|
| Tvary W, tvary S, U-profily (C), úhelníky (L), HSS, potrubí | AISC Shapes Database v16.0 | Rozměry převedeny z palců na milimetry přesně; hmotnost na metr z publikovaných lb/ft |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milimetry a kg/m tak, jak jsou publikovány |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), tabulka v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milimetry a kg/m tak, jak jsou publikovány |
| Plechy | Parametrické | Hmotnost z plochy × 7850 kg/m³ |
| Vlastní | Vaše rozměry | Hmotnost z plochy × 7850 kg/m³ |

Jak se tvary kreslí:

- **Tvary W:** databáze AISC neuvádí poloměr zaoblení, takže DetailCraft kreslí zaoblení jako r = kdes − tf.
- **Tvary S a U-profily (C, UPN):** rovnoběžné pásnice o publikované průměrné tloušťce, ostré rohy (skutečná pásnice je šikmá).
- **Úhelníky:** ostré rohy.
- **Obdélníková HSS:** návrhová tloušťka stěny (0.93 × jmenovitá, jak AISC 360-22 B4.2 dovoluje) s vnějším poloměrem rohu dvojnásobným.
- **Kruhová HSS a potrubí:** návrhová tloušťka stěny (0.93 × jmenovitá).
- **IPE, HEA, HEB, UB, UC:** publikovaný poloměr zaoblení kořene.
- **PFC, EA, UEA:** ostré rohy (publikovaná hmotnost a plocha stále zahrnují zaoblení).
- **SHS, RHS, CHS:** jmenovitá stěna. Rohy za tepla válcovaných profilů: vnější 1.5 t, vnitřní t. Za studena tvarované: vnější 2 t, vnitřní t do 6 mm; 2.5 t a 1.5 t do 10 mm; 3 t a 2 t nad tím.

## Velikosti

Každá velikost, kterou tabulky v těchto skupinách uvádějí, od nejmenší:

| Skupina | Velikosti |
|---|---|
| Tvary W (289) | W4x13 až W44x408 |
| Tvary S (28) | S3x5.7 až S24x121 |
| U-profily (C) (32) | C3x3.5 až C15x50 |
| Úhelníky, stejná ramena (61) | L2x2x1/8 až L12x12x1-3/8 |
| HSS, obdélníková a čtvercová (525) | HSS1-1/2x1-1/2x1/8 až HSS34x10x1 |
| HSS, kruhová (189) | HSS1.660x0.140 až HSS28.000x1.000 |
| Potrubí (51) | Pipe1/2STD až Pipe26XS |
| IPE (18) | IPE80 až IPE600 |
| HEA (24) | HEA100 až HEA1000 |
| HEB (24) | HEB100 až HEB1000 |
| UPN (18) | UPN50 až UPN400 |
| Úhelníky, různá ramena (76) | L2-1/2x1-1/2x3/16 až L8x6x1 |
| UB (107) | UB127x76x13 až UB1016x305x584 |
| UC (46) | UC152x152x23 až UC356x406x1299 |
| PFC (16) | PFC100x50x10 až PFC430x100x64 |
| EA (42) | EA20x20x3.0 až EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 až UEA200x150x18.0 |
| SHS, za tepla válcované (123) | SHS40x40x3.2 až SHS400x400x17.5 |
| RHS, za tepla válcované (161) | RHS50x30x3.2 až RHS500x300x17.5 |
| CHS, za tepla válcované (103) | CHS42.4x3.2 až CHS508.0x17.5 |
| CFSHS, za studena tvarované (96) | CFSHS25x25x2.0 až CFSHS400x400x12.5 |
| CFRHS, za studena tvarované (137) | CFRHS50x25x2.0 až CFRHS500x300x12.5 |
| CFCHS, za studena tvarované (106) | CFCHS33.7x3.0 až CFCHS508.0x16.0 |

Zrcadlený nerovnoramenný úhelník je stejný kus otočený naopak, tak jak dílna vyrábí opačnou variantu: jeho otvory, vybrání a ztužidlový plech jdou s ním.

Zvolte nástroj pro umísťování a vyberte velikost. Hloubku, šířku pásnice, tloušťku stojiny a pásnice, poloměr zaoblení, plochu (cm²), hmotnost (kg/m) a zdroj uvidíte v poli {{ui:Profil}} na panelu {{ui:Vlastnosti}}.

## Co který tvar umí

| Tvar | Otvory | Vybrání | Koncové a patní plechy | Soubor NC | Výrobní výkres |
|---|---|---|---|---|---|
| I-profily (W, S, IPE, HEA, HEB, UB, UC, vlastní I) | Stojina, horní pásnice, spodní pásnice | Ano | Koncové plechy: nosník a sloup. Patní plechy: ano | Ano | Ano |
| U-profily (C, UPN, PFC) | Stojina, horní pásnice, spodní pásnice | Ne | Jen patní plechy | Ano | Ano |
| Obdélníková HSS, SHS, RHS | Boční stěna (stojina), horní, spodní | Ne | Jen patní plechy | Ano | Ano |
| Kruhová HSS, potrubí, CHS | Zatím ne | Ne | Jen patní plechy | Ano | Ano |
| Úhelníky (L, EA, UEA) | Zatím ne | Ne | Jen patní plechy | Ano | Ano |
| Plechy a vlastní ploché tyče | Plocha plechu | Ne | Ne | Ano | Ano |

U obdélníkové trubky vede otvor na "stojině" skrz obě boční stěny. Co každý soubor NC obsahuje, je v [Pole souboru NC](topic:nc1-fields).

## Potřebujete jinou velikost?

Přidejte ji jako [vlastní profil](topic:plates-and-profiles#add-a-custom-profile). Vestavěný seznam zatím v aplikaci nejde upravit.
