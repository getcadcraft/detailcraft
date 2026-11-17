---
title: Sahausluettelo
summary: Sijoita palkit, pilarit, jäykisteet ja portaiden kaiteet varastopituuksiin sahausrakoineen ja katso, montako tankoa on ostettava ja paljonko hukkaa syntyy.
keywords: sahausluettelo, sijoittelu, varastopituus, tanko, sahausrako, sahaus, jäännös, hukka, yhdistäminen, osto, useita
from: 81d06ce5
---

{{ui:Cut list}}-välilehti näkymän alla selvittää, miten mallin suorat osat leikataan varastotangoista: montako tankoa kutakin pituutta ostetaan kullekin profiilille ja materiaalille, mitä kukin tanko sisältää ja paljonko hukkaa syntyy.

## Aseta varasto

Välilehden yläosassa:

- **Varastopituudet (mm):** pituudet, jotka voit ostaa, välilyönnein erotettuina, esimerkiksi `6000 12000`, tai 20 jalan ja 40 jalan tangot `6096 12192`. Enintään kahdeksan.
- **Sahausrako (mm):** kunkin leikkauksen vievä tila (aluksi 3).
- **Päätyleikkaus (mm):** leikataan pois jokaisen tangon päästä ennen ensimmäistä kappaletta (aluksi 0).
- **Säilytä jäännökset alkaen (mm):** vähintään tämän pituinen jäännös palaa varastoon; lyhyempi on romua (aluksi 500).

Nämä tallennetaan tähän selaimeen kuten muutkin [asetukset](topic:settings).

## Miten sijoittelu tehdään

- Jokainen palkki, pilari, jäykiste ja portaiden reunapalkki sauvamerkinnän ja määrän mukaan; levyt leikataan levystä, eikä niitä sijoitella tässä.
- Kukin profiili ja materiaali erikseen.
- Pisimmät kappaleet ensin, kukin ensimmäiseen tankoon, johon se mahtuu; uusi tanko alkaa pisimmästä varastopituudesta. Sitten jokainen tanko ostetaan lyhimpänä varastopituutena, joka vielä riittää sen leikkauksiin.
- Jokainen leikkaus vie sahausraon (ei mitään leikkauksen jälkeen, joka päättyy täsmälleen tangon päähän); jokainen tanko menettää päätyleikkauksen.
- Kappale, joka on pidempi kuin mikään varastopituus, listataan kohdassa **Pidempi kuin mikään varasto**, eikä sitä sijoitella: jatka se (katso [Jatkokset](topic:splices)) tai lisää pidempi varastopituus.

## Lue tulos

- **Yhteenveto:** profiilia ja materiaalia kohti kappaleet, ostettavat tangot (esimerkiksi ”2 × 12000, 1 × 6000”), ostetut ja käytetyt metrit sekä hukka.
- **Tangot ja niiden leikkaukset:** jokainen tanko, sen varastopituus, sen leikkaukset sauvamerkinnän ja pituuden mukaan sekä jäännös, joko säilytetty tai romu.

{{ui:Download CSV}} tallentaa molemmat taulukot tiedostoon `<name> cut list.csv`.

DetailCraft ei sijoittele levyjä arkeille eikä sekoita profiileja tai materiaaleja samaan tankoon.
