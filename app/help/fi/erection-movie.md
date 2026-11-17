---
title: Asennussuunnitelma ja elokuva
summary: Lisää nosturi ja sen kuormituskaavio, katso jokainen nosto tarkistettuna kaavioon vaiheiden järjestyksessä ja tallenna asennuselokuva, joka toistuu ilman verkkoyhteyttä millä tahansa puhelimella.
keywords: asennus, nosturi, nosto, kuormituskaavio, ulottuma, kapasiteetti, nostoliitteet, järjestys, elokuva, animaatio, puhelin, offline, nostosuunnitelma
from: fa7b0133
---

{{ui:Erection}}-välilehti muuttaa mallin asennusjärjestykseksi ja tarkistaa jokaisen noston nosturia vastaan, jonka kuvaat. Se suunnittelee kirjoittamistasi numeroista. Se ei ole nostosuunnitelma: nostoliitoksen tekijä ja nosturinkuljettaja tekevät sen.

## Kuvaa nosturi

Valitse {{ui:Add a crane}} ja täytä:

- **Nosturin keskipiste X ja Y:** missä nosturi seisoo, millimetreinä.
- **Korkein koukku:** kuinka korkealle koukku voi nousta, millimetreinä. 0 tarkoittaa, ettei rajaa tarkisteta.
- **Koukkulohko ja nostoliitteet, joita ei ole kaaviossa:** kilogrammoja, jotka vähennetään kaaviosta ennen kuorman lisäämistä, jos kaaviosi ei jo tee sitä.
- **Kuormituskaavio:** yksi rivi kerrallaan, ulottuma metreinä ja sitten kapasiteetti kilogrammoina. Kopioi rivit nosturin omasta kaaviosta.

Kuormituskaaviota luetaan niin kuin kuormituskaaviota luetaan: riville merkitty kapasiteetti pätee siihen ulottumaan asti. Kuorma kahden rivin välisessä ulottumassa saa **kauemman** rivin kapasiteetin, ei koskaan välistä arvoa. Ensimmäisen rivin sisällä pätee ensimmäisen rivin kapasiteetti. Viimeisen rivin ulkopuolella nosturi ei nosta lainkaan. Nostoa varten laskettava ulottuma on suurempi nostoulottuma ja asetusulottuma.

Toinen nosturi lisätään samalla tavalla. Jokainen nosto menee ensimmäiselle nosturille, joka voi ottaa sen marginaalisi sisällä.

## Mitä suunnitelma tekee

- Yksi nosto kokoonpanoa kohti: palkki päätylevyineen, pilari pohjalevyineen, portaat.
- Järjestys seuraa ensin vaiheita, sitten kerros kerrokselta: pilarit, niiden kantamat palkit, jäykisteet, levyt, portaat. Osaa ei nosteta koskaan ennen sitä, mikä sen kantaa.
- Jokainen nosto näyttää painonsa (mallin bruttopaino, plus {{ui:Rigging added to each weight}}), ulottumansa, osuutensa kaaviosta ja minuutin, jolloin se alkaa.
- {{ui:Most of the chart a lift may use}} on turvamarginaalisi. Nosto, joka ylittää sen, on merkitty **Yli marginaalin**; yli kaavion **Yli kaavion**; kaavion viimeisen ulottuman ylittävä **Kaavion ulkopuolella**; ja osa, joka on korkeammalla kuin koukku, **Koukku liian matalalla**.

Reikiä ja leikkauksia ei vähennetä painoista, ja pultit kuuluvat nostoliitosprosenttiin.

## Ongelmat

Jokainen nosto, joka on yli marginaalin, kaavion ulkopuolella, liian korkea tai asetettu ennen kantajaansa, näkyy {{ui:Problems}}-paneelissa. Palkki, jolla ei ole liitosta, joka kantaisi sitä, luetellaan vaatimuksena tilapäisestä tuennasta.

## Tallenna elokuva

{{ui:Save movie}} kirjoittaa yhden HTML-tiedoston. Avaa se millä tahansa selaimella, myös puhelimella, ilman verkkoyhteyttä ja tiliä: toista ja keskeytä, vedä palkkia mihin tahansa minuuttiin, käännä mallia sormella, nipistä zoomataksesi. Teksti nimeää jokaisen noston, sen painon, ulottuman ja osuuden kaaviosta. Malli piirretään yksinkertaisina laatikoina: se näyttää järjestyksen ja nostot, ei todellisia profiileja.

Sama taulukko tallentuu CSV-tiedostona {{ui:CSV}}-painikkeella. Nosturi ja kaavio tallennetaan mallitiedostoon, ja jokainen muutos on yksi kumoamisvaihe.
