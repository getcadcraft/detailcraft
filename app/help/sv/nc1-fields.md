---
title: NC-filens fält
summary: Vad DetailCraft skriver i varje DSTV NC-fil, fält för fält, och hur ytor och koordinater mäts.
keywords: nc1, dstv, nc-fil, st-block, ak, bo, huvud, ytor, koordinater, cnc, format
from: 1b676fc1
---

Varje `.nc1`-fil beskriver ett delmärke. Rader avslutas med CR LF. Textfält innehåller vanlig ASCII; andra tecken blir "?". Andra raden är en kommentar, `** DetailCraft <mark>.nc1`.

## Huvud (ST)

| Fält | I-balk, U-profil | Vinkelstål | Rektangulär HSS | Rund HSS | Plåt |
|---|---|---|---|---|---|
| Order | Modellnamnet | ← | ← | ← | ← |
| Drawing, piece | Delmärket | ← | ← | ← | ← |
| Phase | Delens etapp, eller 1 | ← | ← | ← | ← |
| Steel quality | Materialets kvalitet | ← | ← | ← | ← |
| Quantity | Antal delar med detta delmärke | ← | ← | ← | ← |
| Profile | Profilnamnet, till exempel W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profile code | I eller U (U-profil) | L | M | RO | B |
| Length | Kapad längd | ← | ← | ← | Längd |
| Height | Djup d | Ben | Höjd | Diameter | Plåtbredd |
| Flange width | bf | Ben | Bredd | Diameter | 0 |
| Flange thickness | tf | t | Väggtjocklek t | Väggtjocklek t | 0 |
| Web thickness | tw | t | Väggtjocklek t | Väggtjocklek t | Plåttjocklek |
| Radius | Filéradie (0 för AISC-U-profiler) | 0 | Yttre hörnradie | 0 | 0 |
| Weight per meter | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Paint surface per meter | Yttre omkrets, m²/m | ← | ← | ← | 2 (båda ytorna, m²/m²) |
| Saw angles (4 fields) | 0 (rät) | ← | ← | ← | ← |
| Text fields (4) | `-` | ← | ← | ← | ← |

Plåtar följer standardens kolumn ”för plåtar”. Standarden har ingen kolumn för runda rör: DetailCraft skriver diametern som både höjd och flänsbredd och väggtjockleken som båda tjocklekarna.

## Ytterkonturer (AK)

- **I-balkar och U-profiler:** livet (v), med en rektangulär urtagning för varje urtag; varje fläns (o och u), förkortad i ena änden där ett urtag är minst lika djupt som flänsen.
- **Rektangulär HSS:** båda sidoväggarna (v och h), urtagna för urtag, samt de översta och understa väggarna (o och u).
- **Vinkelstål:** en rektangel per ben (v och u). Urtag på vinkelstål skrivs inte: en sådan del listas som ej skriven. Ett vinkelstag som bultas till en [stagknutplåt](topic:brace-gussets) har sina hål på det bultade benet: v för benet längs delens u, u för benet längs dess v.
- **Rund HSS:** en rektangel på v, röret sett framifrån (längd × diameter).
- **Plåtar:** en rektangel på yta v.

Varje kontur är sluten (första punkten upprepas i slutet) och går moturs.

## Hål (BO)

En rad per hål: yta, x, y, diameter, djup 0 (genomgående). Alla hål ingår, både de du skrev in och de som förbindelser skapat. Ett hål genom sidoväggarna på en rektangulär HSS skrivs två gånger, en gång på v och en gång på h.

## Ytor och koordinater

Varje profil placeras som standardens figur över profilpositioner visar den (DSTV 1998, s. 7): x längs delen, Y tvärs, Z uppåt från den bakre ytan, med nollpunkten i ytterhörnet. DetailCraft speglar aldrig en del för att passa figuren.

| Yta | I-balk | U-profil | Vinkelstål | Rektangulär HSS | Plåt |
|---|---|---|---|---|---|
| v | Liv, framsida | Liv, sett från flänsspetsarnas sida | Benet längs delens u | Sidovägg vid −u | Plåtens yta |
| h | | | | Sidovägg vid +u | |
| o | Överfläns | **Nedre** fläns | | Översta väggen | |
| u | Nedre fläns | **Övre** fläns | Benet längs delens v | Understa väggen | |

- **x** går längs delen från dess kapstart.
- **I-balkar och rektangulär HSS:** y på livet eller sidoväggarna mäts från profilens undersida; y på en fläns eller de översta och understa väggarna mäts från dess kant på bakre sidan (delens +u-sida).
- **U-profiler** ligger på ryggen med flänsspetsarna uppåt, som i standardens figur. Y på livet går alltså från utsidan av överflänsen nedåt, överflänsen är yta u och underflänsen yta o, och y på en fläns går från livets baksida mot flänsspetsen.
- **Vinkelstål:** y på varje ben mäts från hälen.
- **Plåtar:** y mäts från plåtens −u-kant.

Kontrollera hur maskinprogramvaran läser U-profilernas ytor innan du kapar: vissa program vänder U-profiler upp och ner.

## Vad som inte skrivs

Fasningar, innerkonturer, märkningar (SI), sågvinklar som inte är räta, långhål, hål i runda rör (DetailCraft har inga) och urtag på vinkelstål och runda rör.
