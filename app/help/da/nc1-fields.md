---
title: NC-filens felter
summary: Hvad DetailCraft skriver i hver DSTV NC-fil, felt for felt, og hvordan flader og koordinater måles.
keywords: nc1, dstv, nc-fil, st-blok, ak, bo, hoved, flader, koordinater, cnc, format
from: 1b676fc1
---

Hver `.nc1`-fil beskriver ét positionsnummer. Linjer slutter med CR LF. Tekstfelter bruger almindelig ASCII; andre tegn bliver til "?". Anden linje er en kommentar, `** DetailCraft <mark>.nc1`.

## Hoved (ST)

| Felt | I-profil, U-profil | Vinkelstål | Rektangulær HSS | Rund HSS | Plade |
|---|---|---|---|---|---|
| Ordre | Modelnavnet | ← | ← | ← | ← |
| Tegning, stykke | Positionsnummer | ← | ← | ← | ← |
| Fase | Delens fase, eller 1 | ← | ← | ← | ← |
| Stålkvalitet | Materialekvaliteten | ← | ← | ← | ← |
| Antal | Antal dele med dette nummer | ← | ← | ← | ← |
| Profil | Profilnavnet, for eksempel W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profilkode | I eller U (U-profil) | L | M | RO | B |
| Længde | Tilskæringslængde | ← | ← | ← | Længde |
| Højde | Højde d | Ben | Højde | Diameter | Pladebredde |
| Flangebredde | bf | Ben | Bredde | Diameter | 0 |
| Flangetykkelse | tf | t | Væg t | Væg t | 0 |
| Stegtykkelse | tw | t | Væg t | Væg t | Pladetykkelse |
| Radius | Hjørneradius (0 for AISC-U-profiler) | 0 | Udvendig hjørneradius | 0 | 0 |
| Vægt pr. meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Malet overflade pr. meter | Udvendig omkreds, m²/m | ← | ← | ← | 2 (begge flader, m²/m²) |
| Savvinkler (4 felter) | 0 (vinkelret) | ← | ← | ← | ← |
| Tekstfelter (4) | `-` | ← | ← | ← | ← |

Plader følger standardens kolonne "for pladerne". Standarden har ingen kolonne for runde rør: DetailCraft skriver diameteren både som højde og flangebredde og væggen som begge tykkelser.

## Ydre konturer (AK)

- **I-profiler og U-profiler:** stegets (v) omrids med en rektangulær udskæring for hver udskæring; hver flange (o og u), forkortet i en ende, hvor en udskæring er mindst lige så dyb som flangen.
- **Rektangulær HSS:** begge sidevægge (v og h), med udskæringer, samt top- og bundvæggene (o og u).
- **Vinkelstål:** ét rektangel pr. ben (v og u). Udskæringer på vinkelstål skrives ikke: sådan et stykke står på listen over ikke-skrevne. En vinkelafstivning boltet til en [samleplade](topic:brace-gussets) har sine huller på det ben, der er boltet: v for benet langs delens u, u for benet langs dens v.
- **Rund HSS:** ét rektangel på v, røret set forfra (længde × diameter).
- **Plader:** ét rektangel på flade v.

Hver kontur er lukket (første punkt gentages til sidst) og løber mod uret.

## Huller (BO)

Én linje pr. hul: flade, x, y, diameter, dybde 0 (gennemgående). Alle huller er med, både dem du skrev og dem forbindelserne laver. Et hul gennem sidevæggene i en rektangulær HSS skrives to gange, én gang på v og én gang på h.

## Flader og koordinater

Hver profil placeres, som standardens figur for profilpositioner tegner den (DSTV 1998, s. 7): x langs stykket, Y på tværs, Z op fra bagsiden, med nulpunktet i det ydre hjørne. DetailCraft spejler aldrig et stykke for at passe til figuren.

| Flade | I-profil | U-profil | Vinkelstål | Rektangulær HSS | Plade |
|---|---|---|---|---|---|
| v | Steg, forside | Steg, set fra flangeenderne | Benet langs delens u | Sidevæg ved −u | Pladens flade |
| h | | | | Sidevæg ved +u | |
| o | Øverste flange | **Nederste** flange | | Øverste væg | |
| u | Nederste flange | **Øverste** flange | Benet langs delens v | Nederste væg | |

- **x** løber langs stykket fra dets skærestart.
- **I-profiler og rektangulær HSS:** y på steget eller sidevæggene måles fra profilets underside; y på en flange eller på top- og bundvæggene måles fra dens kant på bagsiden (delens +u-side).
- **U-profiler** ligger på ryggen med flangeenderne opad, som i standardens figur. Y på steget løber altså fra den øverste flanges yderside og ned; den øverste flange er flade u og den nederste flange flade o, og y på en flange løber fra stegets bagside mod flangeenden.
- **Vinkelstål:** y på hvert ben måles fra hælen.
- **Plader:** y måles fra pladens −u-kant.

Kontrollér, hvordan din maskinsoftware læser U-profilers flader, før du skærer: nogle programmer vender U-profiler den anden vej.

## Ikke skrevet

Affasninger, indre konturer, markeringer (SI), savvinkler der ikke er vinkelrette, langhuller, huller i runde rør (DetailCraft har ingen) og udskæringer på vinkelstål og runde rør.
