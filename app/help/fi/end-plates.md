---
title: Liitä palkit pilareihin päätylevyillä
summary: Lisää pultatut päätylevyt kohtiin, joissa palkki kohtaa pilarin laipan tai uuman, aseta levy, pultit ja hitsi ja kopioi liitos kaikkiin samankaltaisiin liitoksiin.
keywords: päätylevy, päätylevyliitos, momenttiliitos, pultattu liitos, liitos, pultit, hitsi, pidennetty päätylevy, tasainen, samankaltainen, kopioi liitos, komponentti
from: 21e028b2
---

Päätylevyliitos hitsaa levyn palkin päähän ja pultittaa sen pilarin laippaan tai uumaan. DetailCraft sijoittaa levyn, leikkaa palkin takaisin, poraa vastaavat reiät levyyn ja pilarin laippaan, lisää pultit ja hitsin sekä tarkistaa reunaetäisyydet ja välit.

:::warning
DetailCraft ei mitoita liitoksia. Asetukset ovat aloitusarvoja, jotka sinun on muutettava; mitään ei tarkisteta lujuuden suhteen. Reuna- ja välivaroitukset käyttävät EN 1993-1-8:n taulukon 3.3 vähimmäisarvoja, jotka voivat poiketa säännöistä, joita sinä noudatat.
:::

## Mihin se voi liittää

- **Tasainen** palkki (molemmat päät samalla korkeudella), pystyssä (kierto 0), jossa on I-profiili.
- Pystysuoran I-profiilipilarin **laippaan** tai **uumaan**, sen suhteen suorassa kulmassa.
- Palkin pään on sijaittava pilarin linjalla pilarin alareunan ja yläreunan välissä.

Vinot tai kaltevat palkit ja muut kuin I-muotoiset poikkileikkaukset hylätään perusteluineen: käytä niihin [leikkausliitoksia](topic:shear-tabs). Uumaan kiinnitettäessä levyn ja palkin laippojen on mahduttava pilarin laippojen väliin; DetailCraft varoittaa, jos ne eivät mahdu.

:::tip
Kierrolla 0 pilarin laipat osoittavat numeroidun ruudukkosuunnan (x) suuntaan. Palkki, joka kulkee A:sta B:hen, kohtaa uuman ja saa päätylevyn uumaan.
:::

## Lisää päätylevyjä palkkiin

1. Valitse {{ui:Select}} ({{key:V}}) ja napsauta palkkia.
2. Valitse {{ui:End plates}} {{ui:Connect}}-ryhmästä tai {{ui:Add end plates}} {{ui:Properties}}-paneelista.
3. Jokaiseen vapaaseen palkin päähän, joka kohtaa pilarin laipan tai uuman suorassa kulmassa, tulee levy. Tilarivi sanoo ”2 päätylevyä lisätty. Valitse yksi muuttaaksesi sen levyä, pultteja ja hitsiä; Samanlaiset kopioi sen samankaltaisiin liitoksiin.”
4. Ensimmäinen uusi päätylevy on valittuna, ja sen asetukset ovat {{ui:Properties}}-paneelissa.

Jos mitään ei tapahdu, lue tilarivi:

- ”Tämä palkki ei pääty pilarin linjalle. Päätylevyt tehdään kohtiin, joissa palkin pää kohtaa pystysuoran pilarin.”
- ”Tämä palkki kohtaa pilarin kulmassa tai on kaltevassa: päätylevyt on tehty suorille, tasaisille liitoksille. Käytä leikkausliitoksia.”
- ”Molemmissa päissä on jo liitokset.”

## Muuta levyä, pultteja ja hitsiä

Napsauta päätylevyä (tai yhtä sen pulttia) valitaksesi liitoksen. Kohdassa {{ui:Plate, bolts and weld (mm)}}:

| Asetus | Oletus | Mitä se tekee |
|---|---|---|
| Levyn paksuus | 20 | Levyn paksuus; myös se, kuinka pitkälle palkki leikataan takaisin laipan ohi |
| Levyn leveys | 180 | Liitoksen poikki |
| Jatke palkin yläpuolella | 0 | Yläpaarteen yläpuolella; yli 0 tekee pidennetyn päätylevyn |
| Jatke palkin alapuolella | 0 | Alapaarteen alapuolella |
| Pultin halkaisija | 20 | Pultin nimellinen koko |
| Reiän halkaisija | 22 | Väljyys reiälle levyssä ja pilarin laipassa |
| Pultin laatu | A325 | Teksti; tulostuu materiaaliluetteloon |
| Pulttirivit | 4 | Kahden pultin rivejä, keskitettynä levyn korkeudelle |
| Rivin väli | 75 | Pystysuora väli rivien välillä |
| Pulttiväli | 100 | Vaakasuora väli rivin kahden pultin välillä |
| Pultin pituusvara | 30 | Lisätään puristusalueeseen mutteria, aluslevyä ja kierrettä varten; katso alla |
| Kulmahitsin koko | 8 | Ympäri palkin päätä |
| Levyn materiaali | A36 | Teksti |

Kirjoita uusi arvo ja paina {{key:Enter}} tai {{key:Tab}}. Levy, reiät, pultit ja palkin leikkauspituus päivittyvät heti. Jokainen muutos on yksi kumoamisvaihe.

Asetusten alapuolella näet, mitä liitos tekee:

- {{ui:Bolts}}: esimerkiksi ”8 × 20 × 70 A325 (puristus 36.2)”.
- {{ui:Weld}}: koko, missä ja sen pituus.
- {{ui:Plate}}: sen koko ja osamerkki.

### Miten luvut lasketaan

- Palkki leikataan takaisin puolella pilarin syvyydestä (uumaan kiinnitettäessä puolella uuman paksuudesta) plus levyn paksuus, jotta levy istuu pinnalle.
- Levyn korkeus on palkin syvyys plus kaksi jatketta.
- Pultin pituus = puristus (levyn paksuus + pilarin laipan tai uuman paksuus) + varaus, pyöristettynä ylöspäin seuraavaan 5 mm:iin.
- Näytetty hitsin pituus on palkin poikkileikkauksen ympärysmitta.

### Varoitukset

Liitos rakentuu silti, mutta nämä näkyvät sen alla ja {{ui:Problems}}-välilehdellä:

- Pulttirivit tai pultit lähempänä levyn reunaa kuin 1.2 × reiän halkaisija.
- Rivin väli alle 2.2 × reiän halkaisija tai pulttiväli alle 2.4 × reiän halkaisija.
- Reiät, jotka ulottuvat pilarin uumaan tai sen pyöristykseen, tai pois pilarin laipalta.
- Levy, joka on leveämpi kuin pilarin laippa, tai (uumaan kiinnitettäessä) leveämpi kuin laippojen väli; palkin laipat, jotka eivät mahdu niiden väliin.
- Pulttirivi liian lähellä palkin laippaa, tai pulttiväli liian tiukka palkin uumalle ja sen hitsille.

## Kopioi jokaiseen samankaltaiseen liitokseen

1. Valitse valmistelemasi liitos.
2. Valitse {{ui:Apply to similar (n)}} {{ui:Properties}}-paneelissa tai {{ui:Similar}} {{ui:Connect}}-ryhmän {{ui:More}}-valikosta. Suluissa oleva luku on liitosten määrä, jotka saavat sen.
3. Jokainen liitos, jolla on sama palkin profiili ja pilarin profiili, palkki samantyyppiseen pintaan, ja jossa ei vielä ole liitosta, saa kopion samoilla asetuksilla. Tilarivi kertoo, montako.

Kopiot ovat riippumattomia: yhden muuttaminen myöhemmin ei muuta muita. Liitoksia, joissa on jo liitos, ei kosketa; poista ne ensin, jos haluat ne korvattaviksi.

## Siirtäminen ja poistaminen

Liitokset rakennetaan uudelleen asetuksistaan aina kun malli muuttuu, joten palkin tai pilarin siirtäminen tai koon muuttaminen vie päätylevyt mukanaan. Jos muutos tarkoittaa, ettei liitos enää sovi, liitos jää malliin ja {{ui:Problems}}-välilehti kertoo syyn, esimerkiksi ”Palkin pää ei ole enää pilarin linjalla.”

Poista liitos valitsemalla se ja painamalla {{key:Delete}}. Palkin tai pilarin poistaminen poistaa myös sen liitokset.

Seuraavaksi: [Lisää pohjalevyt ja ankkurisauvat](topic:base-plates).
