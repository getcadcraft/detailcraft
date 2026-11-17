---
title: Saada NC-failid tootmisse
summary: Ekspordi DSTV NC-failid igale detailimärgisele (I-profiilid, kanalid, nurgikud, HSS, plaadid), pakitud zip-faili, ja kontrolli neid enne, kui need masinani jõuavad.
keywords: nc, nc1, dstv, cnc, masin, talade liin, puurimisliin, plaatide lõikamine, eksport, valmistamine, zip
from: 598b6091
---

DetailCraft kirjutab igale detailimärgisele ühe DSTV NC-faili (`.nc1`) I-profiilidele, kanalitele, nurgikutele, ristkülikukujulistele ja ümmargustele HSS-idele ning plaatidele ning pakib need kokku. Talade liinid ja plaadimasinad loevad neid faile, et saagida, puurida ja lõigata.

## Eksport

1. Tühjenda kõigepealt vahekaart {{ui:Probleemid}}: ühendus, mida ei saanud ehitada, ei lisa auke.
2. Salvesta mudel ({{key:Mod+S}}), et NC-failid vastaksid salvestatud mudelile.
3. Vali {{ui:NC-failid}} rühmas {{ui:Väljund}}.
4. Brauser laadib alla faili `<nimi> NC.zip`. Olekuriba ütleb, mitu faili see sisaldab, ja loetleb märgised, mida ta ei kirjutanud (nurk või ümmargune toru väljalõikega).

Zip-failis on iga fail nimetatud oma detailimärgi järgi: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip-fail on tihendamata ja avaneb mis tahes arhiivitööriistaga.

Kui mudelis pole detaile, ütleb olekuriba seda.

## Mida iga fail sisaldab

- **Päis (ST):** mudeli nimi tellimusena, detailimärgis joonise ja tükina, faas 1, materjaliklass, kogus, profiil ja selle mõõtmed, mass meetri kohta ja värvitav pind meetri kohta. Saelõiked on risti.
- **Välismääratlus (AK):** vööduti piirjoon koos väljalõigetega ning iga tiiva piirjoon lühendatud seal, kus väljalõige selle eemaldab.
- **Augud (BO):** iga auk oma tahu, asukoha ja läbimõõduga, kaasa arvatud otsplaatide ja aluseplaatide augud.

Väli-väljalt, tahkude ja koordinaatide reeglitega: [NC-faili väljad](topic:nc1-fields).

## Mida ei kirjutata

- Nurgikud ja ümmargused torud väljalõikega: NC-faili ei tule. Nende märgised on loetletud olekuribal.
- Augud ümmargustes torudes (DetailCraft neid ei tee).
- Viltlõiked, sisemised kontuurid, detailide märgistus (kriipsutamine) ja muud kui risti saenurgad.
- Pikkaugud (DetailCraft teeb ainult ümmargusi auke).

## Kontrolli enne töötlemist

DetailCraft'i NC-faile loetakse tagasi selle enda testkomplektiga, kuid neid pole veel teie tootmise masinates käivitatud.

1. Ava failid oma tootmise NC-vaatajas või masinatarkvaras ja võrdle neid tootmisjoonistega.
2. Kontrolli masinas igast liigist ühte detaili enne partii käivitamist.
3. Kontrolli, kuidas sinu tarkvara loeb tiiva y-koordinaate ja kanalite tahke: DetailCraft mõõdab tiiva y tagumisest servast ning paneb kanalid selga, nagu standard need joonistab (vt [NC-faili väljad](topic:nc1-fields#faces-and-coordinates)).
