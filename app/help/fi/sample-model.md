---
title: Tutustu esimerkkikehykseen
summary: Avaa sisäänrakennettu kaksilahkoinen kehys ja opi sen avulla, mitä DetailCraft tekee, merkeistä NC-tiedostoihin.
keywords: esimerkki, malli, demo, kehys, opi, esittely, kokeile
from: 5c5944dd
---

Esimerkkikehys on pieni, valmis malli: jokainen DetailCraftin rakentama kohdetyyppi esiintyy siinä vähintään kerran. Se on nopein tapa oppia sovellus ja testata vienti ennen kuin luotat siihen.

## Avaa se

1. Valitse {{ui:Esimerkki}} {{ui:Tiedosto}}-ryhmästä.
2. Jos nykyisessä mallissasi on tallentamattomia muutoksia, valitse {{ui:Tallenna ensin}} tai {{ui:Hylkää muutokset}}.
3. Tilarivi kertoo: "Esimerkkikehys: 6 pilaria pohjalevyillä, 4 palkkia päätylevyillä, jäykiste, 7 anturaa raudoituksella."

Esimerkki avautuu uutena mallina nimeltä "Esimerkkikehys". Se ei muuta mitään muuta, eikä siinä ole mitään kumottavaa.

## Mitä siinä on

- **Ruudukot** 1, 2, 3 välein 6000 mm ja A, B välein 7000 mm. **Tasot** Level 1 kohdassa 0 ja Level 2 kohdassa 4000.
- **Kuusi pilaria**, W12x50, tasolta Level 1 tasolle Level 2 jokaisessa leikkauspisteessä, kukin 25 mm pohjalevyllä neljällä ankkuripultilla.
- **Neljä palkkia**, W16x26, tasolla Level 2 ruudukkoviivojen A ja B suuntaisesti, teräksen yläpinta tasolla, ja molemmissa päissä tasainen pultattu päätylevy (yhteensä kahdeksan).
- **Yksi jäykiste**, HSS4x4x1/4, tasolta Level 1 kohdasta A/1 ylös tasolle Level 2 kohtaan A/2.
- **Kuusi levyanturaa**, 2000 x 2000 x 600, yksi jokaisen pilarin alla, joissa molempiin suuntiin koukullinen alaverkko.
- **Yksi lisäantura** kehyksen vieressä, 2400 x 1800 x 600, ja kuusi koukullista lähtötankoa pystyssä betonipilaria varten.

## Kokeiltavaa

1. Napsauta palkkia. Lue sen {{ui:Osamerkki}}, {{ui:Kokoonpano}}, {{ui:Katkaisupituus}} ja {{ui:Typistys}}: katkaisupituus on lyhyempi kuin 6000 mm ruudukkoväli, koska jokainen päätylevy typistää palkkia pilarin syvyyden puolikkaan ja levyn paksuuden verran.
2. Napsauta pilaria. Kohdassa {{ui:Reiät}} luetellaan päätylevyjen laippaan tekemät reiät ("8 reikää liitoksista"; keskipilareissa on 16, yksi sarja kummassakin laipassa).
3. Vasemman puolen {{ui:Osamerkit}}-luettelosta näet, että kaikki neljä palkkia jakavat yhden merkin: ne ovat sama teräskappale. Kulmapilarit jakavat myös merkin, vaikka niiden reiät osoittavat eri suuntiin, koska pilari, joka on käännetty päittäin, on sama kappale. Keskipilarit, joissa on reiät molemmissa laipoissa, saavat toisen merkin.
4. Napsauta päätylevyä (tai jotakin sen pultteja). {{ui:Ominaisuudet}}-paneeli näyttää levyn, pultin ja hitsin asetukset, sen tekemät pultit (niiden pituus lasketaan otteesta) ja mahdolliset reunaetäisyysvaroitukset.
5. Avaa {{ui:Osaluettelo}}-välilehti. Osat, kokoonpanot (palkki kahden päätylevynsä kanssa on yksi kokoonpano) sekä pultit ja ankkuripultit luetellaan painoineen. Sinun pitäisi nähdä kuusi osamerkkiä: c1 (kaksi keskipilaria) ja c2 (neljä kulmapilaria), molemmat W12x50 pituudella 3975 mm; b1, neljä W16x26-palkkia pituudella 5650 mm; br1, jäykiste; p1, kahdeksan PL20x180-päätylevyä; ja p2, kuusi PL25x400-pohjalevyä. Kiinnittimet ovat 64 pulttia 20 x 70 A325 ja 24 ankkuripulttia 20 x 575.
6. Avaa {{ui:Taivutusluettelo}}-välilehti. Kuusi samanlaista anturaa jakavat tankomerkit; pilariantura lisää omansa.
7. Napsauta jäykistettä ja katso {{ui:Tuloste}}-ryhmää: {{ui:Valmistuspiirustus}} on harmaana, koska valmistuspiirustukset kattavat toistaiseksi vain I-profiilit ja levyt.
8. Valitse {{ui:NC-tiedostot}}. Zip-tiedostossa on tiedosto jokaiselle I-profiilin ja levyn merkille; tilarivi luettelee jäykisteen merkin kirjoittamattomana.
9. Valitse {{ui:IFC}} ja avaa tiedosto millä tahansa IFC-katselimella tarkistaaksesi, miten muut ohjelmasi sen lukevat.

## Käytä lähtökohtana

Esimerkki on tavallinen malli. Muuta sitä, anna sille uusi nimi kenttään {{ui:Nimi}} ja tallenna uudella nimellä näppäimillä {{key:Mod+S}}.
