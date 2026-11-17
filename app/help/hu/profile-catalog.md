---
title: Szelvénykatalógus
summary: Minden beépített acélméret, a szelvénynevek írásmódja, a méretek forrása, valamint a lemezek és egyéni szelvények elnevezése.
keywords: profilok, szelvények, katalógus, méretek, w-szelvények, széles öv, s-szelvények, u-szelvény, szögacél, hss, cső, pipe, ipe, hea, heb, upn, uk, brit, ub, uc, pfc, ea, uea, egyenlőtlen szögacél, shs, rhs, chs, hidegen alakított, melegen hengerelt, blue book, lemez, aisc, en 10365, elnevezés
from: cd9b2bc3
---

A DetailCraft 2 311 beépített mérettel rendelkezik. Mindegyik egy közzétett táblázatból van másolva, és az alkalmazás tesztjei ellenőrzik: a méretekből számított területnek egyeznie kell a közzétett területtel, a közzétett tömegnek pedig az adott terület és az acél sűrűségének szorzatával. A lemezeket és az egyéni szelvényeket a méreteikből készítjük.

## Elnevezés

- **US-szelvények** úgy vannak írva, ahogyan az AISC Manual közli, kisbetűs x-szel: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. A beírás nem tesz különbséget a kis- és nagybetűk között.
- **Csövek** az AISC adatbázis szerint: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra erős, kétszeresen extra erős).
- **Európai szelvények** az EN 10365 szerint: IPE200, HEA240, HEB300, UPN200 (szóköz nélkül).
- **Brit szelvények** a családnévvel kezdődnek, majd a Blue Book méretével: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. A hidegen alakított üreges szelvények CF-fel kezdődnek: CFSHS100x100x5.0. A rajzokon gyakran használt írásmód is működik: 305x165x40 UB, L100x100x10, SHS100x5.
- **Lemezek** `PL<thickness>x<width>` alakban, milliméterben: a PL20x200 20 mm vastag és 200 mm széles. A {{ui:Lemez}} eszközzel bármilyen méret működik.
- **Egyéni szelvények** bármilyen nevet kaphatnak, feltéve, hogy nem katalógusnév, és nem nézhet ki lemeznévnek.

A {{ui:Szelvény}} listákban minden csoport fejléce megnevezi a forrását, például „W-szelvények — AISC Shapes Database v16.0”.

## Források

| Csoport | Forrás | Megjegyzés |
|---|---|---|
| W-szelvények, S-szelvények, U-szelvények (C), szögacélok (L), HSS, Pipe | AISC Shapes Database v16.0 | A méretek hüvelykből milliméterre pontosan átszámítva; méterenkénti tömeg a közzétett lb/ft értékből |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Milliméterben és kg/m-ben, a közzétett módon |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), v18 táblázat (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Milliméterben és kg/m-ben, a közzétett módon |
| Lemezek | Paraméteres | Tömeg a terület × 7850 kg/m³ alapján |
| Egyéni | Az Ön méretei | Tömeg a terület × 7850 kg/m³ alapján |

Hogyan rajzolódnak a szelvények:

- **W-szelvények:** az AISC adatbázis nem ad kerekítési sugarat, ezért a DetailCraft a kerekítést r = kdes − tf értékkel rajzolja.
- **S-szelvények és U-szelvények (C, UPN):** párhuzamos övek a közzétett átlagos vastagsággal, derékszögű sarkokkal (a valódi öv ferde).
- **Szögacélok:** derékszögű sarkok.
- **Négyszög HSS:** a tervezési falvastagság (0,93 × névleges, ahogy az AISC 360-22 B4.2 megengedi), kétszeres külső sarokkerekítési sugárral.
- **Kör HSS és Pipe:** tervezési falvastagság (0,93 × névleges).
- **IPE, HEA, HEB, UB, UC:** a közzétett gyökkerekítési sugár.
- **PFC, EA, UEA:** derékszögű sarkok (a közzétett tömeg és terület még tartalmazza a sarokkerekítéseket).
- **SHS, RHS, CHS:** a névleges fal. Melegen hengerelt sarkok: külső 1,5 t, belső t. Hidegen alakított: külső 2 t, belső t 6 mm-ig; 2,5 t és 1,5 t 10 mm-ig; 3 t és 2 t 10 mm fölött.

## A méretek

Az összes méret, amelyet ezek a csoportok a táblázatokban felsorolnak, a legkisebbtől kezdve:

| Csoport | Méretek |
|---|---|
| W-szelvények (289) | W4x13-tól W44x408-ig |
| S-szelvények (28) | S3x5.7-től S24x121-ig |
| U-szelvények (32) | C3x3.5-től C15x50-ig |
| Szögacélok, egyenlő szárú (61) | L2x2x1/8-tól L12x12x1-3/8-ig |
| HSS, négyszög és négyzetes (525) | HSS1-1/2x1-1/2x1/8-tól HSS34x10x1-ig |
| HSS, kör (189) | HSS1.660x0.140-től HSS28.000x1.000-ig |
| Pipe (51) | Pipe1/2STD-től Pipe26XS-ig |
| IPE (18) | IPE80-tól IPE600-ig |
| HEA (24) | HEA100-tól HEA1000-ig |
| HEB (24) | HEB100-tól HEB1000-ig |
| UPN (18) | UPN50-tól UPN400-ig |
| Szögacélok, egyenlőtlen szárú (76) | L2-1/2x1-1/2x3/16-tól L8x6x1-ig |
| UB (107) | UB127x76x13-tól UB1016x305x584-ig |
| UC (46) | UC152x152x23-tól UC356x406x1299-ig |
| PFC (16) | PFC100x50x10-tól PFC430x100x64-ig |
| EA (42) | EA20x20x3.0-tól EA200x200x24.0-ig |
| UEA (39) | UEA30x20x3.0-tól UEA200x150x18.0-ig |
| SHS, melegen hengerelt (123) | SHS40x40x3.2-tól SHS400x400x17.5-ig |
| RHS, melegen hengerelt (161) | RHS50x30x3.2-tól RHS500x300x17.5-ig |
| CHS, melegen hengerelt (103) | CHS42.4x3.2-tól CHS508.0x17.5-ig |
| CFSHS, hidegen alakított (96) | CFSHS25x25x2.0-tól CFSHS400x400x12.5-ig |
| CFRHS, hidegen alakított (137) | CFRHS50x25x2.0-tól CFRHS500x300x12.5-ig |
| CFCHS, hidegen alakított (106) | CFCHS33.7x3.0-tól CFCHS508.0x16.0-ig |

A tükrözött egyenlőtlen szögacél ugyanaz a darab, megfordítva, ahogyan a műhely az ellenkező kezes darabot készíti: lyukai, kivágásai és csomólemeze vele együtt fordul.

Válasszon elhelyezőeszközt, majd egy méretet, hogy lássa a mélységét, övszélességét, gerinc- és övvastagságát, kerekítési sugarát, területét (cm²), tömegét (kg/m) és forrását a {{ui:Tulajdonságok}} panel {{ui:Szelvény}} dobozában.

## Mit tud az egyes alak

| Alak | Lyukak | Kivágások | Véglemezek és talpalemezek | NC-fájl | Gyártmányrajz |
|---|---|---|---|---|---|
| I-szelvények (W, S, IPE, HEA, HEB, UB, UC, egyéni I) | Gerinc, felső öv, alsó öv | Igen | Véglemezek: gerenda és oszlop. Talpalemezek: igen | Igen | Igen |
| U-szelvények (C, UPN, PFC) | Gerinc, felső öv, alsó öv | Nem | Csak talpalemezek | Igen | Igen |
| Négyszög HSS, SHS, RHS | Oldalfal (gerinc), felső, alsó | Nem | Csak talpalemezek | Igen | Igen |
| Kör HSS, Pipe, CHS | Még nem | Nem | Csak talpalemezek | Igen | Igen |
| Szögacélok (L, EA, UEA) | Még nem | Nem | Csak talpalemezek | Igen | Igen |
| Lemezek és egyéni laposacélok | Lemezsík | Nem | Nem | Igen | Igen |

Négyszög csőnél a „gerinc” síkon lévő lyuk mindkét oldalfalon átmegy. Az egyes NC-fájlok tartalmát lásd: [NC-fájl mezői](topic:nc1-fields).

## Más méretre van szüksége?

Adja hozzá egyéni szelvényként ([Egyéni szelvény hozzáadása](topic:plates-and-profiles#add-a-custom-profile)). A beépített listát az alkalmazásból még nem lehet szerkeszteni.
