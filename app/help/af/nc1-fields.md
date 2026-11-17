---
title: NC-lêervelde
summary: Wat DetailCraft in elke DSTV NC-lêer skryf, veld vir veld, en hoe vlakke en koördinate gemeet word.
keywords: nc1, dstv, nc-lêer, st-blok, ak, bo, kop, vlakke, koördinate, cnc, formaat
from: 1b676fc1
---

Elke `.nc1`-lêer beskryf een deelmerk. Lyne eindig met CR LF. Teksvelde dra gewone ASCII; ander karakters word "?". Die tweede lyn is 'n kommentaar, `** DetailCraft <mark>.nc1`.

## Kop (ST)

| Veld | I-vorm, kanaal | Hoek | Reghoekige HSS | Ronde HSS | Plaat |
|---|---|---|---|---|---|
| Bestelling | Die modelnaam | ← | ← | ← | ← |
| Tekening, stuk | Deelmerk | ← | ← | ← | ← |
| Fase | Die deel se fase, of 1 | ← | ← | ← | ← |
| Staalkwaliteit | Die materiaalgraad | ← | ← | ← | ← |
| Hoeveelheid | Aantal dele met hierdie merk | ← | ← | ← | ← |
| Profiel | Die profielnaam, byvoorbeeld W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profielkode | I of U (kanaal) | L | M | RO | B |
| Lengte | Snitlengte | ← | ← | ← | Lengte |
| Hoogte | Diepte d | Been | Hoogte | Deursnee | Plaatwydte |
| Flenswydte | bf | Been | Wydte | Deursnee | 0 |
| Flensdikte | tf | t | Wand t | Wand t | 0 |
| Lyfdikte | tw | t | Wand t | Wand t | Plaatdikte |
| Radius | Vulradius (0 vir AISC-kanale) | 0 | Buitehoekradius | 0 | 0 |
| Gewig per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Verfoppervlak per meter | Buitenste omtrek, m²/m | ← | ← | ← | 2 (beide vlakke, m²/m²) |
| Saagshoeke (4 velde) | 0 (reguit) | ← | ← | ← | ← |
| Teksvelde (4) | `-` | ← | ← | ← | ← |

Plaat volg die standaard se kolom "vir die plate". Die standaard het geen kolom vir ronde buise nie: DetailCraft skryf die deursnee as beide hoogte en flenswydte en die wand as albei dikhede.

## Buitelyne (AK)

- **I-vorms en kanale:** die lyf (v), met 'n reghoekige insnit vir elke uitsnit; elke flens (o en u), korter aan een punt waar 'n uitsnit minstens so diep as die flens is.
- **Reghoekige HSS:** albei sydwande (v en h), uitgekerf vir uitsnitte, en die bo- en onderwande (o en u).
- **Hoeke:** een reghoek per been (v en u). Uitsnitte op hoeke word nie geskryf nie: so 'n deel word as nie geskryf gelys nie. 'n Hoekskoor wat aan 'n [skoorkopplaat](topic:brace-gussets) gebout is, het sy gate op die been wat gebout is: v vir die been langs die deel se u, u vir die been langs sy v.
- **Ronde HSS:** een reghoek op v, die buis gesien van voor (lengte × deursnee).
- **Plate:** een reghoek op vlak v.

Elke buitelyn is gesluit (die eerste punt word aan die einde herhaal) en loop anti-kloksgewys.

## Gate (BO)

Een lyn per gat: vlak, x, y, deursnee, diepte 0 (deurlopend). Alle gate word ingesluit, die wat jy ingetik het en die wat verbindings gemaak het. 'n Gat deur die sydwande van 'n reghoekige HSS word twee keer geskryf, een keer op v en een keer op h.

## Vlakke en koördinate

Elke profiel word geplaas soos die standaard se figuur van profielposisies dit teken (DSTV 1998, bl. 7): x langs die deel, Y oor die breedte, Z op vanaf die agtervlak, met die nulpunt by die buitehoek. DetailCraft spieël nooit 'n deel om by die figuur te pas nie.

| Vlak | I-vorm | Kanaal | Hoek | Reghoekige HSS | Plaat |
|---|---|---|---|---|---|
| v | Lyf, voor | Lyf, gesien vanaf die kant van die punte | Die been langs die deel se u | Sydwand by −u | Die plaatvlak |
| h | | | | Sydwand by +u | |
| o | Boonste flens | **Onderste** flens | | Boonste wand | |
| u | Onderste flens | **Boonste** flens | Die been langs die deel se v | Onderste wand | |

- **x** loop langs die deel vanaf sy snit-begin.
- **I-vorms en reghoekige HSS:** y op die lyf of sydwande vanaf die onderkant van die profiel; y op 'n flens of die bo- en onderwande vanaf sy rand aan die agterkant (die deel se +u-kant).
- **Kanale** lê op hul rug met die punte op, soos in die standaard se figuur. So loop y op die lyf vanaf die buitekant van die boonste flens af; die boonste flens is vlak u en die onderste flens vlak o; en y op 'n flens loop vanaf die agterkant van die lyf na die flenspunt.
- **Hoeke:** y op elke been vanaf die hak.
- **Plate:** y vanaf die plaat se −u-rand.

Kontroleer hoe jou masjienprogram kanaalvlakke lees voordat jy sny: sommige programme draai kanale die ander kant bo.

## Nie geskryf nie

Skuinssnitte, binnelyne, merkings (SI), saagshoeke anders as reguit, gleufgate, gate in ronde buise (DetailCraft het geen), en uitsnitte op hoeke en ronde buise.
