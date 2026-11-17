---
title: NC-tiedoston kentät
summary: Mitä DetailCraft kirjoittaa jokaiseen DSTV NC -tiedostoon kenttä kerrallaan ja miten pinnat ja koordinaatit mitataan.
keywords: nc1, dstv, nc-tiedosto, st-lohko, ak, bo, otsikko, pinnat, koordinaatit, cnc, muoto
from: 1b676fc1
---

Jokainen `.nc1`-tiedosto kuvaa yhden osamerkin. Rivit päättyvät CR LF -merkkeihin. Tekstikentissä on pelkkää ASCII-merkistöä; muut merkit muuttuvat merkiksi "?". Toinen rivi on kommentti `** DetailCraft <mark>.nc1`.

## Otsikko (ST)

| Kenttä | I-profiili, U-profiili | Kulmateräs | Suorakaide-HSS | Pyöreä HSS | Levy |
|---|---|---|---|---|---|
| Tilaus | Mallin nimi | ← | ← | ← | ← |
| Piirustus, kappale | Osamerkki | ← | ← | ← | ← |
| Vaihe | Osan vaihe tai 1 | ← | ← | ← | ← |
| Teräslaatu | Materiaalin laatu | ← | ← | ← | ← |
| Määrä | Tämän osamerkin osien lukumäärä | ← | ← | ← | ← |
| Profiili | Profiilin nimi, esimerkiksi W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profiilikoodi | I tai U (U-profiili) | L | M | RO | B |
| Pituus | Katkaisupituus | ← | ← | ← | Pituus |
| Korkeus | Syvyys d | Jalka | Korkeus | Halkaisija | Levyn leveys |
| Laippaleveys | bf | Jalka | Leveys | Halkaisija | 0 |
| Laipan paksuus | tf | t | Seinän t | Seinän t | 0 |
| Uuman paksuus | tw | t | Seinän t | Seinän t | Levyn paksuus |
| Säde | Pyöristyssäde (0 AISC-U-profiileille) | 0 | Ulkokulman säde | 0 | 0 |
| Paino metriä kohti | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Maalauspinta metriä kohti | Ulkoreunan piiri, m²/m | ← | ← | ← | 2 (molemmat pinnat, m²/m²) |
| Sahauskulmat (4 kenttää) | 0 (suora) | ← | ← | ← | ← |
| Tekstikentät (4) | `-` | ← | ← | ← | ← |

Levyt noudattavat standardin saraketta ”levyille”. Standardissa ei ole saraketta pyöreille putkille: DetailCraft kirjoittaa halkaisijan sekä korkeudeksi että laippaleveydeksi ja seinän molemmiksi paksuuksiksi.

## Ulkoreunat (AK)

- **I-profiilit ja U-profiilit:** uuma (v), jossa on suorakaiteen muotoinen lovi jokaiselle loveukselle; jokainen laippa (o ja u) lyhennettynä siltä päästä, jossa lovi on vähintään yhtä syvä kuin laippa.
- **Suorakaide-HSS:** molemmat sivuseinät (v ja h), lovet leikattuina, sekä ylä- ja alaseinät (o ja u).
- **Kulmateräkset:** yksi suorakulmio jokaiselle jalalle (v ja u). Kulmaterästen lovia ei kirjoiteta: tällainen osa luetellaan kirjoittamattomana. Vahvistelevyyn pultattu kulmateräksinen diagonaalisauva saa reikänsä pultatusta jalasta: v sille jalalle, joka kulkee osan u-suunnassa, ja u sille, joka kulkee sen v-suunnassa (ks. [vahvistelevyt](topic:brace-gussets)).
- **Pyöreä HSS:** yksi suorakulmio pinnalla v, putki nähtynä edestä (pituus × halkaisija).
- **Levyt:** yksi suorakulmio pinnalla v.

Jokainen ääriviiva on suljettu (ensimmäinen piste toistetaan lopussa) ja kulkee vastapäivään.

## Reiät (BO)

Yksi rivi jokaista reikää kohden: pinta, x, y, halkaisija, syvyys 0 (läpi). Mukana ovat kaikki reiät, sekä ne jotka kirjoitit että ne, jotka liitokset tekivät. Suorakaide-HSS:n sivuseinien läpi kulkeva reikä kirjoitetaan kahdesti, kerran pinnalle v ja kerran pinnalle h.

## Pinnat ja koordinaatit

Jokainen profiili sijoitetaan niin kuin standardin profiilien sijaintikuva sen piirtää (DSTV 1998, s. 7): x kulkee osan suuntaisesti, Y poikittain ja Z ylös takapinnasta, ja nollapiste on ulkokulmassa. DetailCraft ei koskaan peilaa osaa kuvaan sopivaksi.

| Pinta | I-profiili | U-profiili | Kulmateräs | Suorakaide-HSS | Levy |
|---|---|---|---|---|---|
| v | Uuma, edessä | Uuma, nähtynä laipan ulkoreunojen puolelta | Jalka, joka kulkee osan u-suunnassa | Sivuseinä kohdassa −u | Levyn pinta |
| h | | | | Sivuseinä kohdassa +u | |
| o | Yläpuolen laippa | **Alalaippa** | | Yläseinä | |
| u | Alalaippa | **Yläpuolen laippa** | Jalka, joka kulkee osan v-suunnassa | Alaseinä | |

- **x** kulkee osan suuntaisesti sen leikkauksen alusta.
- **I-profiilit ja suorakaide-HSS:** y uumalla tai sivuseinillä mitataan profiilin alapinnasta; y laipalla tai ylä- ja alaseinällä mitataan sen reunasta takapuolelta (osan +u-puoli).
- **U-profiilit** ovat selällään laipan ulkoreunat ylöspäin, kuten standardin kuvassa. Siis y uumalla kulkee yläpuolen laipan ulkoreunasta alas, yläpuolen laippa on pinta u ja alalaippa pinta o, ja y laipalla kulkee uuman takaa kohti laipan ulkoreunaa.
- **Kulmateräkset:** y kullakin jalalla mitataan kulmasta.
- **Levyt:** y mitataan levyn −u-reunasta.

Tarkista ennen leikkaamista, miten koneen ohjelmisto lukee U-profiilien pinnat: jotkin ohjelmat kääntävät U-profiilit ympäri.

## Ei kirjoiteta

Viisteet, sisäreunat, merkinnät (SI), muut kuin suorat sahauskulmat, pitkäreiät, pyöreiden putkien reiät (DetailCraft ei tee niitä) sekä kulmaterästen ja pyöreiden putkien lovet.
