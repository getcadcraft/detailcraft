---
title: Reitir NC-skráa
summary: Hvað DetailCraft skrifar í hverja DSTV NC-skrá, reit fyrir reit, og hvernig fletir og hnit eru mæld.
keywords: nc1, dstv, nc-skrá, ST-reitur, ak, bo, haus, fletir, hnit, cnc, skráarsnið
from: 1b676fc1
---

Hver `.nc1`-skrá lýsir einu auðkenni hlutar. Línur enda á CR LF. Textareitir innihalda venjulegan ASCII-texta; aðrir stafir verða „?“. Önnur línan er athugasemd, `** DetailCraft <mark>.nc1`.

## Haus (ST)

| Reitur | I-snið, rás | Horn | Ferhyrnt HSS | Kringlótt HSS | Plata |
|---|---|---|---|---|---|
| Pöntun | Heiti líkans | ← | ← | ← | ← |
| Teikning, stykki | Auðkenni hlutar | ← | ← | ← | ← |
| Áfangi | Áfangi hlutarins, eða 1 | ← | ← | ← | ← |
| Stálgæði | Efnisgæði | ← | ← | ← | ← |
| Magn | Fjöldi hluta með þessu auðkenni | ← | ← | ← | ← |
| Snið | Heiti sniðs, til dæmis W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Sniðkóði | I eða U (rás) | L | M | RO | B |
| Lengd | Sniðlengd | ← | ← | ← | Lengd |
| Hæð | Hæð d | Fótur | Hæð | Þvermál | Breidd plötu |
| Breidd flans | bf | Fótur | Breidd | Þvermál | 0 |
| Þykkt flans | tf | t | Veggþykkt t | Veggþykkt t | 0 |
| Þykkt sálar | tw | t | Veggþykkt t | Veggþykkt t | Þykkt plötu |
| Radíus | Sveigjuradíus (0 fyrir AISC-rásir) | 0 | Ytri hornradíus | 0 | 0 |
| Þyngd á metra | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Málningarflötur á metra | Ytri ummál, m²/m | ← | ← | ← | 2 (báðir fletir, m²/m²) |
| Sagarhorn (4 reitir) | 0 (ferhyrnt) | ← | ← | ← | ← |
| Textareitir (4) | `-` | ← | ← | ← | ← |

Plötur fylgja dálki staðalsins „fyrir plöturnar“. Staðallinn hefur engan dálk fyrir kringlótt rör: DetailCraft skrifar þvermálið sem bæði hæð og breidd flans og veggþykktina sem bæði flans- og sálarþykkt.

## Ytri útlínur (AK)

- **I-snið og rásir:** sálin (v), með ferhyrndri skurðrauf fyrir hverja úrtöku; hvor flans (o og u), styttur við enda þar sem úrtaka er a.m.k. jafn djúp og flansinn.
- **Ferhyrnt HSS:** báðir hliðarveggir (v og h), með úrtökum, og efri og neðri veggir (o og u).
- **Horn:** einn ferhyrningur fyrir hvern fót (v og u). Úrtökur á hornum eru ekki skrifaðar: slíkur hluti er talinn upp sem ekki skrifaður. Hornstífa sem er boltuð við [hornplötu](topic:brace-gussets) hefur göt á þeim fæti sem er boltaður: v fyrir fótinn meðfram u hlutans, u fyrir fótinn meðfram v hans.
- **Kringlótt HSS:** einn ferhyrningur á v, rörið séð framan frá (lengd × þvermál).
- **Plötur:** einn ferhyrningur á fleti v.

Hver útlína er lokuð (fyrsti punkturinn er endurtekinn í lokin) og liggur rangsælis.

## Göt (BO)

Ein lína fyrir hvert gat: flötur, x, y, þvermál, dýpt 0 (í gegn). Öll göt eru með, bæði þau sem þú slóst inn og þau sem tengingar búa til. Gat í gegnum hliðarveggi ferhyrnts HSS er skrifað tvisvar, einu sinni á v og einu sinni á h.

## Fletir og hnit

Hvert snið er staðsett eins og mynd staðalsins af staðsetningum sniða sýnir hana (DSTV 1998, bls. 7): x eftir hlutanum, Y þvert yfir, Z upp frá bakfleti, með núllpunktinn í ytra horni. DetailCraft speglar aldrei hlut til að passa við myndina.

| Flötur | I-snið | Rás | Horn | Ferhyrnt HSS | Plata |
|---|---|---|---|---|---|
| v | Sál, framan | Sál, séð frá hlið táa flansanna | Fóturinn meðfram u hlutans | Hliðarveggur við −u | Plötuflöturinn |
| h | | | | Hliðarveggur við +u | |
| o | Efri flans | **Neðri** flans | | Efri veggur | |
| u | Neðri flans | **Efri** flans | Fóturinn meðfram v hlutans | Neðri veggur | |

- **x** liggur eftir hlutanum frá upphafi skurðarins.
- **I-snið og ferhyrnt HSS:** y á sálinni eða hliðarveggjum mælt frá undirhlið sniðsins; y á flans eða efri og neðri veggjum mælt frá brún hans á bakhliðinni (+u hlið hlutans).
- **Rásir** liggja á bakinu með tærnar upp, eins og á mynd staðalsins. Y á sálinni er því mælt frá ytri hlið efri flansins niður, efri flansinn er flötur u og neðri flansinn flötur o, og y á flans er mælt frá baki sálarinnar í átt að tánni.
- **Horn:** y á hverjum fæti mælt frá hælnum.
- **Plötur:** y mælt frá −u brún plötunnar.

Athugaðu hvernig hugbúnaður vélarinnar les fleti rása áður en skorið er: sum forrit snúa rásum á hvolf.

## Ekki skrifað

Skávalir, innri útlínur, merkingar (SI), sagarhorn önnur en ferhyrnt, langgöt, göt í kringlóttum rörum (DetailCraft hefur engin) og úrtökur á hornum og kringlóttum rörum.
