---
title: Tarkista törmäykset
summary: Etsi sauvat, levyt ja anturat, jotka ulottuvat toistensa sisään, jättäen pois osat, joiden liitoksen on tarkoitus koskettaa, ja siirry jokaiseen törmäykseen.
keywords: törmäys, törmäystarkistus, yhteentörmäys, häiriö, päällekkäisyys, leikkaus, kova törmäys, koordinointi, mallitarkistus
from: 04d72d3b
---

Avaa näkymän alla oleva {{ui:Törmäykset}}-välilehti ja valitse {{ui:Tarkista nyt}}. DetailCraft tarkastelee jokaista osaparia näytetyissä vaiheissa: teräs teräkseen ja teräs anturaan. Välilehdessä luetellaan jokainen törmäys, syvin ensin, ja kunkin tiedot:

- kaksi osaa osamerkinnän (tai anturan merkinnän) ja profiilin mukaan;
- **Päällekkäisyys (mm)**: kuinka syvällä yhden osan piste on toisen sisällä lähimpään pintaan asti;
- **Lähellä**: ruudukon leikkauspiste ja taso, tai sen koordinaatit;
- {{ui:Näytä}}: valitsee molemmat osat ja tuo kohdan näkymän keskelle.

Välilehden otsikko näyttää, montako törmäystä viimeisin tarkistus löysi. Tarkistus ei käynnisty itsestään: kun muutat mallia, luettelo kertoo siitä, ja {{ui:Tarkista nyt}} ajaa tarkistuksen uudelleen.

## Mikä ei ole törmäys

- Osat, jotka vain koskettavat: levy laippaa vasten, pohjalevy omalla anturallaan, kaksi sauvaa päästä päähän. **Toleranssi (mm)** määrittää, kuinka pitkälle kaksi osaa saa mennä toistensa sisään ennen kuin se lasketaan (aluksi 1 mm; enintään 50).
- Osat, jotka liitos yhdistää: päätylevy palkkiinsa ja siihen pultattuun pilarin laippaan, liitoksen palkki ja pilari, pohjalevy pilariinsa, jatkoksen levyt molempiin palasiin, tukisauva liitoslevyynsä (putken rakoa ei leikata mallissa). Liitos tarkoittaa, että ne kohtaavat.
- Pohjalevyn leikkausnokka sen alla olevassa anturassa (se on valutaskussa).
- Pultit ja ankkuripultit (ne kulkevat reikien läpi) sekä raudoitus.
- Piilotetuissa vaiheissa olevat osat. Katso [Vaiheet](topic:phases).

Tukisauva tai palkki, joka työntyy pilariin ilman niiden välistä liitosta, **on** törmäys: liitos tarvitsee vielä liitoksen. Esimerkkikehyksen tukisauvasta näkee tämän: siinä ei ole liitoslevyä. Valitse se ja valitse {{ui:Liitoslevy}} ([Tukisauvojen liitoslevyt](topic:brace-gussets)), jolloin sen törmäykset poistuvat.

## Hyvä tietää

- Päällekkäisyys mittaa syvyyttä materiaaliin, joten sauva, joka on työntynyt pilarin ohuen uuman tai laipan sisään, näyttää vain muutaman millimetrin, vaikka se olisi mennyt pitkälle sisään.
- Osat tarkistetaan leikattuina: lovet ja palkin takaisinleikkaus päätylevyjen kohdalla otetaan huomioon. Reikiä ei oteta huomioon.
