---
title: NC-filfelter
summary: Hva DetailCraft skriver i hver DSTV NC-fil, felt for felt, og hvordan flater og koordinater måles.
keywords: nc1, dstv, nc-fil, st-blokk, ak, bo, hode, flater, koordinater, cnc, format
from: 1b676fc1
---

Hver `.nc1`-fil beskriver ett delenummer. Linjer avsluttes med CR LF. Tekstfelt bruker vanlig ASCII; andre tegn blir "?". Andre linje er en kommentar, `** DetailCraft <mark>.nc1`.

## Hode (ST)

| Felt | I-profil, U-profil | Vinkelstål | Rektangulær HSS | Rund HSS | Plate |
|---|---|---|---|---|---|
| Ordre | Modellnavnet | ← | ← | ← | ← |
| Tegning, stykke | Delenummer | ← | ← | ← | ← |
| Fase | Delens fase, eller 1 | ← | ← | ← | ← |
| Stålkvalitet | Materialkvaliteten | ← | ← | ← | ← |
| Antall | Antall deler med dette delenummeret | ← | ← | ← | ← |
| Profil | Profilnavnet, for eksempel W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profilkode | I eller U (U-profil) | L | M | RO | B |
| Lengde | Kuttelengde | ← | ← | ← | Lengde |
| Høyde | Dybde d | Ben | Høyde | Diameter | Platebredde |
| Flensbredde | bf | Ben | Bredde | Diameter | 0 |
| Flenstykkelse | tf | t | Veggtykkelse t | Veggtykkelse t | 0 |
| Stegtykkelse | tw | t | Veggtykkelse t | Veggtykkelse t | Platetykkelse |
| Radius | Filetradius (0 for AISC-U-profiler) | 0 | Ytre hjørneradius | 0 | 0 |
| Masse per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Malt flate per meter | Ytre omkrets, m²/m | ← | ← | ← | 2 (begge flater, m²/m²) |
| Sagvinkler (4 felt) | 0 (vinkelrett) | ← | ← | ← | ← |
| Tekstfelt (4) | `-` | ← | ← | ← | ← |

Plater følger standardens kolonne «for platene». Standarden har ingen kolonne for runde rør: DetailCraft skriver diameteren som både høyde og flensbredde, og veggtykkelsen som begge tykkelsene.

## Ytre konturer (AK)

- **I-profiler og U-profiler:** steget (v), med en rektangulær utskjæring for hver utklinkning; hver flens (o og u), forkortet i en ende der en utklinkning er minst like dyp som flensen.
- **Rektangulær HSS:** begge sidevegger (v og h), med utklinkninger, og topp- og bunnveggene (o og u).
- **Vinkelstål:** ett rektangel per ben (v og u). Utklinkninger på vinkelstål skrives ikke: en slik del står oppført som ikke skrevet. En vinkelavstivning som er boltet til en [knutepunktsplate](topic:brace-gussets) har hullene sine på benet som er boltet: v for benet langs delens u, u for benet langs dens v.
- **Rund HSS:** ett rektangel på v, røret sett forfra (lengde × diameter).
- **Plater:** ett rektangel på flate v.

Hver kontur er lukket (første punkt gjentas til slutt) og går mot klokken.

## Hull (BO)

En linje per hull: flate, x, y, diameter, dybde 0 (gjennom). Alle hull er med, både de du skrev inn og de forbindelsene laget. Et hull gjennom sidevreggene på en rektangulær HSS skrives to ganger, én gang på v og én gang på h.

## Flater og koordinater

Hver profil plasseres slik standardens figur for profilposisjoner tegner den (DSTV 1998, s. 7): x langs delen, Y på tvers, Z opp fra bakflaten, med nullpunktet i det ytre hjørnet. DetailCraft speiler aldri en del for å passe til figuren.

| Flate | I-profil | U-profil | Vinkelstål | Rektangulær HSS | Plate |
|---|---|---|---|---|---|
| v | Steg, forside | Steg, sett fra tåsiden | Benet langs delens u | Sidevegg ved −u | Platens flate |
| h | | | | Sidevegg ved +u | |
| o | Øverste flens | **Nedre** flens | | Topvegg | |
| u | Nedre flens | **Øvre** flens | Benet langs delens v | Bunnvegg | |

- **x** går langs delen fra kuttstarten.
- **I-profiler og rektangulær HSS:** y på steget eller sideveggene fra underkanten av profilet; y på en flens eller topp- og bunnveggene fra kanten på baksiden (delens +u-side).
- **U-profiler** ligger på ryggen med tåen opp, slik figuren i standarden viser. Så y på steget går fra utsiden av øvre flens nedover, øvre flens er flate u og nedre flens er flate o, og y på en flens går fra baksiden av steget mot tåen.
- **Vinkelstål:** y på hvert ben fra hælen.
- **Plater:** y fra platens −u-kant.

Kontroller hvordan maskinprogramvaren leser flatene på U-profiler før du kutter: noen programmer snur U-profiler opp ned.

## Ikke skrevet

Avfasinger, indre konturer, merking (SI), sagvinkler annet enn vinkelrett, langhull, hull i runde rør (DetailCraft har ingen), og utklinkninger på vinkelstål og runde rør.
