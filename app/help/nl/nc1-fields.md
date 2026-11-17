---
title: NC-bestandsvelden
summary: Wat DetailCraft in elk DSTV NC-bestand schrijft, veld voor veld, en hoe vlakken en coördinaten worden gemeten.
keywords: nc1, dstv, nc-bestand, st-blok, ak, bo, kop, vlakken, coördinaten, cnc, formaat
from: 1b676fc1
---

Elk `.nc1`-bestand beschrijft één onderdeelmerk. Regels eindigen met CR LF. Tekstvelden bevatten alleen gewone ASCII-tekens; andere tekens worden "?". De tweede regel is een opmerking, `** DetailCraft <mark>.nc1`.

## Kop (ST)

| Veld | I-profiel, U-profiel | Hoekstaal | Rechthoekige HSS | Ronde HSS | Plaat |
|---|---|---|---|---|---|
| Order | De modelnaam | ← | ← | ← | ← |
| Tekening, stuk | Onderdeelmerk | ← | ← | ← | ← |
| Fase | De fase van het onderdeel, of 1 | ← | ← | ← | ← |
| Staalkwaliteit | De materiaalkwaliteit | ← | ← | ← | ← |
| Aantal | Aantal onderdelen met dit merk | ← | ← | ← | ← |
| Profiel | De profielnaam, bijvoorbeeld W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profielcode | I of U (U-profiel) | L | M | RO | B |
| Lengte | Snijlengte | ← | ← | ← | Lengte |
| Hoogte | Hoogte d | Been | Hoogte | Diameter | Plaatbreedte |
| Flensbreedte | bf | Been | Breedte | Diameter | 0 |
| Flensdikte | tf | t | Wanddikte t | Wanddikte t | 0 |
| Lijfdikte | tw | t | Wanddikte t | Wanddikte t | Plaatdikte |
| Radius | Overgangsradius (0 voor AISC-U-profielen) | 0 | Buitenhoekradius | 0 | 0 |
| Gewicht per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Verfoppervlak per meter | Buitenomtrek, m²/m | ← | ← | ← | 2 (beide zijden, m²/m²) |
| Zaaghoeken (4 velden) | 0 (haaks) | ← | ← | ← | ← |
| Tekstvelden (4) | `-` | ← | ← | ← | ← |

Platen volgen de kolom voor platen van de norm. De norm heeft geen kolom voor ronde buizen: DetailCraft schrijft de diameter als zowel hoogte als flensbreedte, en de wand als beide dikten.

## Buitencontouren (AK)

- **I-profielen en U-profielen:** het lijf (v), met een rechthoekige inkeping voor elke coping; elke flens (o en u), aan één einde korter waar een coping minstens zo diep is als de flens.
- **Rechthoekige HSS:** beide zijwanden (v en h), ingesneden voor copings, en de boven- en onderwand (o en u).
- **Hoekstaal:** één rechthoek per been (v en u). Copings op hoekstaal worden niet geschreven: zo'n onderdeel staat als niet geschreven vermeld. Een hoekverband dat aan een [knoopplaat](topic:brace-gussets) is gebout, heeft zijn gaten op het gebouten been: v voor het been langs de u van het onderdeel, u voor het been langs zijn v.
- **Ronde HSS:** één rechthoek op v, de buis van voren gezien (lengte × diameter).
- **Platen:** één rechthoek op vlak v.

Elke contour is gesloten (het eerste punt wordt aan het eind herhaald) en loopt tegen de klok in.

## Gaten (BO)

Eén regel per gat: vlak, x, y, diameter, diepte 0 (doorgaand). Alle gaten zijn opgenomen, zowel de gaten die u heeft ingevoerd als die door verbindingen zijn gemaakt. Een gat door de zijwanden van een rechthoekige HSS wordt twee keer geschreven: één keer op v en één keer op h.

## Vlakken en coördinaten

Elk profiel wordt geplaatst zoals de profielfiguur van de norm het tekent (DSTV 1998, blz. 7): x langs het onderdeel, Y dwars erop, Z omhoog vanaf het achtervlak, met het nulpunt op de buitenhoek. DetailCraft spiegelt nooit een onderdeel om in de figuur te passen.

| Vlak | I-profiel | U-profiel | Hoekstaal | Rechthoekige HSS | Plaat |
|---|---|---|---|---|---|
| v | Lijf, voorzijde | Lijf, gezien vanaf de kant van de tenen | Het been langs de u van het onderdeel | Zijwand op −u | Het vlak van de plaat |
| h | | | | Zijwand op +u | |
| o | Bovenflens | **Onderflens** | | Bovenwand | |
| u | Onderflens | **Bovenflens** | Het been langs de v van het onderdeel | Onderwand | |

- **x** loopt langs het onderdeel vanaf het begin van de snede.
- **I-profielen en rechthoekige HSS:** y op het lijf of de zijwanden vanaf de onderkant van het profiel; y op een flens of op de boven- en onderwand vanaf de rand aan de achterzijde (de +u-zijde van het onderdeel).
- **U-profielen** liggen op hun rug met de tenen omhoog, zoals in de figuur van de norm. Dus y op het lijf loopt van de buitenkant van de bovenflens naar beneden, de bovenflens is vlak u en de onderflens vlak o, en y op een flens loopt van de achterkant van het lijf naar de teen.
- **Hoekstaal:** y op elk been vanaf de hiel.
- **Platen:** y vanaf de −u-rand van de plaat.

Controleer hoe uw machinesoftware de vlakken van U-profielen leest voordat u snijdt: sommige programma's draaien U-profielen andersom.

## Niet geschreven

Afschuiningen, binnencontouren, markeringen (SI), zaaghoeken anders dan haaks, langgaten, gaten in ronde buizen (DetailCraft heeft er geen), en copings op hoekstaal en ronde buizen.
