---
title: NC-faili väljad
summary: Mida DetailCraft kirjutab igasse DSTV NC-faili, väli väljalt, ning kuidas tahud ja koordinaadid mõõdetakse.
keywords: nc1, dstv, nc-fail, ST-plokk, AK, BO, päis, tahud, koordinaadid, cnc, vorming
from: 1b676fc1
---

Iga `.nc1`-fail kirjeldab ühte detailimärgist. Read lõppevad reavahetusega CR LF. Tekstiväljad sisaldavad lihtsat ASCII-d; muud märgid muutuvad märgiks „?“. Teine rida on kommentaar: `** DetailCraft <mark>.nc1`.

## Päis (ST)

| Väli | I-profiil, kanal | Nurk | Ristkülikukujuline HSS | Ümmargune HSS | Plaat |
|---|---|---|---|---|---|
| Tellimus | Mudeli nimi | ← | ← | ← | ← |
| Joonis, tükk | Detailimärgis | ← | ← | ← | ← |
| Faas | Detaili faas või 1 | ← | ← | ← | ← |
| Terasklass | Materjali klass | ← | ← | ← | ← |
| Kogus | Selle märgisega detailide arv | ← | ← | ← | ← |
| Profiil | Profiili nimi, näiteks W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profiili kood | I või U (kanal) | L | M | RO | B |
| Pikkus | Lõikepikkus | ← | ← | ← | Pikkus |
| Kõrgus | Sügavus d | Tiib | Kõrgus | Läbimõõt | Plaadi laius |
| Tiiva laius | bf | Tiib | Laius | Läbimõõt | 0 |
| Tiiva paksus | tf | t | Seina t | Seina t | 0 |
| Vöödi paksus | tw | t | Seina t | Seina t | Plaadi paksus |
| Raadius | Ümarduse raadius (0 AISC-kanalitel) | 0 | Välisnurga raadius | 0 | 0 |
| Mass meetri kohta | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Värvitav pind meetri kohta | Välispiirjoon, m²/m | ← | ← | ← | 2 (mõlemad pinnad, m²/m²) |
| Saenurgad (4 välja) | 0 (risti) | ← | ← | ← | ← |
| Tekstiväljad (4) | `-` | ← | ← | ← | ← |

Plaadid järgivad standardi veeru „lehtedele“ andmeid. Standardis pole ümmargustele torudele veergu: DetailCraft kirjutab läbimõõdu nii kõrgusena kui ka tiiva laiusena ning seina paksuse mõlemana paksusväljale.

## Välismääratlus (AK)

- **I-profiilid ja kanalid:** vööt (v), kus on iga väljalõike jaoks ristkülikukujuline sälk; iga tiib (o ja u), lühendatud otsast seal, kus väljalõige on vähemalt tiiva sügav.
- **Ristkülikukujuline HSS:** mõlemad külgseinad (v ja h), väljalõigete jaoks sälgud, ning ülemine ja alumine sein (o ja u).
- **Nurgikud:** üks ristkülik iga tiiva kohta (v ja u). Nurkade väljalõikeid ei kirjutata, selline detail on loetletud kui mitte kirjutatud. Nurgast diagonaal, mis on poldituna [sõlmeplaadiga](topic:brace-gussets), on augud poldituna tiival: v tiivale, mis on detaili u-telje sihis, u tiivale, mis on detaili v-telje sihis.
- **Ümmargune HSS:** üks ristkülik v-tahul, toru eestvaates (pikkus × läbimõõt).
- **Plaadid:** üks ristkülik tahul v.

Iga kontuur on suletud (esimest punkti korratakse lõpus) ja kulgeb vastupäeva.

## Augud (BO)

Üks rida iga augu kohta: tahk, x, y, läbimõõt, sügavus 0 (läbi). Kõik augud on kaasatud, nii need, mille sisestasid, kui ka need, mille tekitasid ühendused. Ristkülikukujulise HSS-i külgseinte läbiv auk kirjutatakse kaks korda: üks kord v-tahul ja üks kord h-tahul.

## Tahud ja koordinaadid

Iga profiil paigutatakse nii, nagu standardi profiilide asendite joonis seda joonistab (DSTV 1998, lk 7): x mööda detaili, Y üle, Z üles tagumisest tahust, nullpunkt välisnurgas. DetailCraft ei peegelda detaili kunagi joonisele sobivaks.

| Tahk | I-profiil | Kanal | Nurk | Ristkülikukujuline HSS | Plaat |
|---|---|---|---|---|---|
| v | Vööt, ees | Vööt, vaadatuna servade poolt | Tiib detaili u-telje sihis | Külgsein kohal −u | Plaadi tahk |
| h | | | | Külgsein kohal +u | |
| o | Ülemine tiib | **Alumine** tiib | | Ülemine sein | |
| u | Alumine tiib | **Ülemine** tiib | Tiib detaili v-telje sihis | Alumine sein | |

- **x** kulgeb mööda detaili algusest lõikest.
- **I-profiilid ja ristkülikukujuline HSS:** y vöödil või külgseintel mõõdetakse profiili alumisest küljest; y tiival või ülemisel ja alumisel seinal mõõdetakse tagumise poole servast (detaili +u pool).
- **Kanalid** lamavad selga, servad üleval, nagu standardi joonisel. Seega y vöödil kulgeb ülemise tiiva välisküljelt allapoole, ülemine tiib on tahk u ja alumine tahk o ning y tiival kulgeb vöödi tagumisest küljest servale poole.
- **Nurgikud:** y igal tiival mõõdetakse kannast.
- **Plaadid:** y mõõdetakse plaadi −u servast.

Enne lõikamist kontrolli, kuidas sinu masintarkvara loeb kanalite tahke: mõned programmid pööravad kanaleid teistpidi.

## Ei kirjutata

Viltlõiked, sisemised kontuurid, märgistused (SI), muud kui risti saenurgad, pikkaugud, augud ümmargustes torudes (DetailCraft neid ei tee) ning väljalõiked nurkades ja ümmargustes torudes.
