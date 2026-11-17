---
title: NC-fájl mezői
summary: Mit ír a DetailCraft az egyes DSTV NC-fájlokba, mezőnként, és hogyan mérik a síkokat és a koordinátákat.
keywords: nc1, dstv, nc-fájl, st blokk, ak, bo, fejléc, síkok, koordináták, cnc, formátum
from: 1b676fc1
---

Minden `.nc1` fájl egy alkatrészjelet ír le. A sorok CR LF karakterrel végződnek. A szöveges mezők egyszerű ASCII-karaktereket tartalmaznak; a többi karakter helyére „?” kerül. A második sor megjegyzés: `** DetailCraft <mark>.nc1`.

## Fejléc (ST)

| Mező | I-szelvény, U-szelvény | Szögacél | Négyszög HSS | Kör HSS | Lemez |
|---|---|---|---|---|---|
| Megrendelés | A modell neve | ← | ← | ← | ← |
| Rajz, darab | Alkatrészjel | ← | ← | ← | ← |
| Fázis | Az alkatrész fázisa, vagy 1 | ← | ← | ← | ← |
| Acélminőség | Az anyagminőség | ← | ← | ← | ← |
| Mennyiség | Az ezzel a jellel rendelkező alkatrészek száma | ← | ← | ← | ← |
| Szelvény | A szelvény neve, például W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Szelvénykód | I vagy U (U-szelvény) | L | M | RO | B |
| Hossz | Vágott hossz | ← | ← | ← | Hossz |
| Magasság | Mélység d | Szár | Magasság | Átmérő | Lemezszélesség |
| Övszélesség | bf | Szár | Szélesség | Átmérő | 0 |
| Övvastagság | tf | t | Falvastagság t | Falvastagság t | 0 |
| Gerincvastagság | tw | t | Falvastagság t | Falvastagság t | Lemezvastagság |
| Sugár | Kerekítési sugár (0 az AISC U-szelvényeknél) | 0 | Külső sarokkerekítés sugara | 0 | 0 |
| Tömeg méterenként | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Festendő felület méterenként | Külső kerület, m²/m | ← | ← | ← | 2 (mindkét oldal, m²/m²) |
| Fűrészszögek (4 mező) | 0 (derékszög) | ← | ← | ← | ← |
| Szöveges mezők (4) | `-` | ← | ← | ← | ← |

A lemezek a szabvány „lemezekre” vonatkozó oszlopát követik. A szabványban nincs oszlop kör keresztmetszetű csövekre: a DetailCraft az átmérőt magasságként és övszélességként, a falvastagságot pedig mindkét vastagságként írja.

## Külső kontúrok (AK)

- **I-szelvények és U-szelvények:** a gerinc (v), minden kivágáshoz egy téglalap alakú bemetszéssel; minden öv (o és u), ahol a kivágás legalább olyan mély, mint az öv, az egyik végén rövidebb.
- **Négyszög HSS:** mindkét oldalfal (v és h), a kivágásoknál bemetszve, valamint a felső és alsó fal (o és u).
- **Szögacélok:** egy téglalap száranként (v és u). Szögacélokon a kivágások nem íródnak: az ilyen alkatrész a nem írt elemek közé kerül. A szögacél-merevítőt, amelyet [merevítő-csomólemezhez](topic:brace-gussets) csavaroznak, a csavarozott szárán lévő lyukak kapják: v a rész u mentén futó szárnál, u a rész v mentén futó szárnál.
- **Kör HSS:** egy téglalap a v síkon, a cső elölről nézve (hossz × átmérő).
- **Lemezek:** egy téglalap a v síkon.

Minden kontúr zárt (az első pont a végén megismétlődik), és az óramutató járásával ellentétes irányban fut.

## Lyukak (BO)

Egy sor minden lyukhoz: sík, x, y, átmérő, mélység 0 (átmenő). Minden lyuk szerepel, a beírtak és a kapcsolatok által készítettek is. A négyszög HSS oldalfalain átmenő lyuk kétszer íródik: egyszer a v, egyszer az h síkon.

## Síkok és koordináták

Minden szelvény úgy kerül elhelyezésre, ahogyan a szabvány szelvényelhelyezési ábrája rajzolja (DSTV 1998, 7. o.): x az alkatrész mentén, Y keresztben, Z felfelé a hátoldali síktól, a nullapont a külső sarokban. A DetailCraft soha nem tükröz alkatrészt, hogy illeszkedjen az ábrához.

| Sík | I-szelvény | U-szelvény | Szögacél | Négyszög HSS | Lemez |
|---|---|---|---|---|---|
| v | Gerinc, elöl | Gerinc, a talpak oldaláról nézve | A rész u mentén futó szár | Oldalfal a −u oldalon | A lemez síkja |
| h | | | | Oldalfal a +u oldalon | |
| o | Felső öv | **Alsó** öv | | Felső fal | |
| u | Alsó öv | **Felső** öv | A rész v mentén futó szár | Alsó fal | |

- **x** az alkatrész mentén fut a vágás kezdetétől.
- **I-szelvények és négyszög HSS:** y a gerincen vagy oldalfalon a szelvény alsó oldalától; y az övön vagy a felső és alsó falon annak szélétől, a hátoldali oldalon (az alkatrész +u oldalán).
- **U-szelvények** a hátukon fekszenek, a talpakkal felfelé, a szabvány ábrájának megfelelően. Így a gerincen az y a felső öv külső oldalától lefelé fut, a felső öv az u sík, az alsó öv az o sík, az övön pedig az y a gerinc hátoldalától a talp felé fut.
- **Szögacélok:** y minden szárán a sarokponttól.
- **Lemezek:** y a lemez −u széléről.

Vágás előtt ellenőrizze, hogyan olvassa a gépvezérlő szoftver az U-szelvények síkjait: egyes programok a szelvényeket fordítva fogják fel.

## Nem íródó elemek

Élletörések, belső kontúrok, jelölések (SI), a derékszögtől eltérő fűrészszögek, hosszúlyukak, lyukak kör keresztmetszetű csövekben (a DetailCraft nem készít ilyet), valamint kivágások szögacélokon és kör keresztmetszetű csöveken.
