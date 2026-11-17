---
title: Jatkokset
summary: Liitä kahden palkin tai pilarin pää päähän pultatuilla laippa- ja uumapeitelevyillä.
keywords: jatkos, palkin jatkos, pilarin jatkos, peitelevy, jatkoslevy, laippalevy, uumalevy, pultattu jatkos, liitos, nosto, liitä
from: 97d141c2
---

Pultattu jatkos liittää kaksi I-profiilin osaa päästä päähän: peitelevy kunkin laipan ulkopuolella ja levy uuman kummallekin puolelle, pultattuna molempien osien läpi. DetailCraft leikkaa osat takaisin rakoon, asettaa neljä levyä, poraa reiät levyihin ja molempiin osiin, lisää pultit ja varoittaa reunaetäisyyksistä, välistä ja sovitteesta.

## Missä se toimii

- Kaksi palkkia tai kaksi pilarin nousua, joilla on **sama I-profiili** ja jotka kohtaavat päästä päähän **samalla linjalla**: päiden väli enintään 50 mm, osat yhdensuuntaiset ja samalla suoralla (1 mm:n tarkkuudella). Kumpi tahansa osa voi olla piirretty kumpaan suuntaan tahansa.
- Vaakasuorat, kaltevat ja pystysuorat osat toimivat kaikki.
- Kaksi osaa, joilla on eri syvyys tai laippaleveys, hylätään, samoin kanavat, kulmaraudat ja putket.

## Lisää jatkoksia

1. Piirrä kaksi osaa niin, että ne kohtaavat päästä päähän. Jos jäsen on jo piirretty, piirrä se uudelleen kahtena osana.
2. Valitse toinen tai molemmat ja valitse {{ui:Jatkos}} ryhmän {{ui:Liitä}} valikosta {{ui:Lisää}}.
3. Jokainen valittujen osien vapaa liitos toisen saman profiilin osan kanssa saa jatkoksen. Tilarivi kertoo, kuinka monta.

Valitse jatkos (napsauta yhtä sen levyistä), niin voit muuttaa sen asetuksia oikeassa paneelissa. {{ui:Käytä samanlaisiin (n)}} kopioi jatkoksen jokaiseen muuhun vapaaseen liitokseen saman profiilin osien välillä.

## Asetukset (mm)

| Asetus | Oletus | Mitä se tekee |
|---|---|---|
| Rako päiden välillä | 10 | Kumpikin osa leikataan takaisin puolella siitä |
| Pultin halkaisija, reikä, lujuusluokka, pituusvara | 20, 22, A325, 30 | Kuten päälevyissä |
| Laippalevyn paksuus | 12 | Levy on yhtä leveä kuin laippa |
| Laipan pulttirivit (kummallakin puolella) | 3 | Rivit laipan poikki liitoksen kummallakin puolella |
| Laipan pulttiväli | 75 | Jäsenen suunnassa |
| Laipan pulttiratka | 0 | Kahden pulttilinjan välissä; 0 = laippaleveys miinus 80 |
| Laipan päätyetäisyys | 40 | Jäsenen päästä ensimmäiseen pulttiin ja viimeisestä pultista levyn päähän |
| Uumalevyn paksuus | 8 | Yksi uuman kummallekin puolelle |
| Uuman pulttirivit | 3 | Ylös uumaa, keskitettynä |
| Uuman pulttisarakkeet (kummallakin puolella) | 2 | Jäsenen suunnassa liitoksen kummallakin puolella |
| Uuman pulttiväli ylös uumaa / jäsenen suunnassa | 75, 75 | |
| Uuman päätyetäisyys | 40 | Kuten laipoissa |
| Uumalevyn korkeus | 0 | 0 = uuman vapaa osa filettien välissä miinus 10 ylhäältä ja alhaalta |
| Levyn materiaali | A36 | Teksti |

Levyjen pituudet seuraavat pulteista: laippalevy = rako + 2 × (2 × päätyetäisyys + (rivit − 1) × väli); uumalevyt samoin sarakkeineen. Oletusarvoilla laippalevyt ovat 470 pitkiä.

## Hyvä tietää

- Levyt kuuluvat **ensin piirretylle osalle** (sen ominaisuuksissa sitä kutsutaan ensimmäiseksi osaksi): ne näkyvät sen kokoonpanopiirustuksessa ja toimitetaan sen mukana pultattuina, ei hitsattuina. Toisen osan kokoonpanopiirustuksessa näkyvät vain sen reiät.
- Laippapultit kiinnittyvät laippaan ja sen levyyn; uumapultit kiinnittyvät uumaan ja molempiin uumalevyihin. Pulttien pituudet on lueteltu erikseen ominaisuuksissa.
- Varoitukset käyttävät samoja EN 1993-1-8 -vähimmäisarvoja kuin muut liitokset (päätyetäisyys ja reunaetäisyys 1.2 × reikä, väli 2.2 × reikä pituussuunnassa ja 2.4 × reikä poikittain), sekä lisäksi varoitukset uumalevystä, joka on syvempi kuin uuman vapaa osa, ja laippapulteista, jotka ovat liian lähellä uumaa filettiin nähden.
- DetailCraft ei suunnittele jatosta (ei lujuustarkastusta) eikä tee täytelevyjä eri paksuisille osille.
- Kun kopioit molemmat osat, niiden jatkos kopioituu myös. Kummankin osan poistaminen poistaa jatkoksen.
