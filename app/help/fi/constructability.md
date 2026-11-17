---
title: Rakentamisen tarkistukset
summary: Ongelmat asioille, jotka suunnittelija huomaa silmällä: pultti, johon momenttiavain ei yllä, pultit liian lähellä hylsylle, kulmahitsit kokorajojensa ulkopuolella, hitsit, joihin polttimella ei yllä, ja putket, jotka keräävät vettä.
keywords: rakentamisen tarkistus, momenttiavain, hylsy, pultin saavutettavuus, kiristys, hitsin koko, kulmahitsi, pienin hitsi, suurin hitsi, vesi, tuuletusreikä, tyhjennysreikä, kuumasinkitys, ontto profiili, ongelmat
from: 72315151
---

DetailCraft etsii neljää ongelmatyyppiä, joita mikään lujuustarkistus ei löydä, ja luettelee ne {{ui:Ongelmat}}-paneelissa. Ne ovat varoituksia ja huomautuksia, joihin kannattaa katsoa, eivät virheitä: malli rakentuu silti.

## Pultti, johon momenttiavain ei yllä

Jokaisen pultin päälle ja mutterin päälle DetailCraft asettaa hylsyn. Hylsy on sylinteri, jonka leveys on mutterin kulmien välinen leveys plus 4 mm:n seinä, pituus 60 mm. Jos palkin uuma, laippa, levy tai tukisauva on tämän sylinterin sisällä, ongelma nimeää liitoksen, pulttien määrän, sen osan, joka on tiellä, ja kuinka kaukana pultista se on.

Hylsy on tyypillinen iskuhylsy. Momenttiavain tarvitsee vähemmän tilaa ja suurempi työkalu enemmän. Pyydä yhdistettyä avustajaasi suorittamaan `constructability_check` toisella `socketLength`-arvolla nähdäksesi, miten vastaus muuttuu.

## Pultit liian lähellä hylsylle

Yhden pultin päällä oleva hylsy ei saa koskettaa seuraavan pultin päätä. Liitoksen pultit, jotka ovat lähempänä kuin hylsyn leveys plus naapuripultin pää, luetellaan löydetyn ja vaaditun välin kanssa.

## Kulmahitsien koot

AISC 360-16 taulukko J2.4 asettaa pienimmän kulmahitsin ohuemman osan paksuuden mukaan (3 mm, kun paksuus on enintään 6.35 mm; 5 mm, kun enintään 12.7; 6 mm, kun enintään 19.05; 8 mm sen yli), ja J2.2b suurimman materiaalin reunaa pitkin: ei suurempi kuin materiaali, kun se on ohuempi kuin 6.35 mm, muuten 1.6 mm vähemmän. Liitokset, joilla on sama koko samalla paksuudella, luetellaan yhtenä ongelmana.

Käytetty paksuus on hitsin nimeämä ohuin osa, joten 8 mm:n hitsi palkin ympäri, jonka uuma on 6.35 mm, luetellaan.

## Vesi ja tuuletus

- Ontossa profiilissa, joka on pystyssä tai jonka kaltevuus on yli 10°, **avoin yläpää** päästää sadevettä sisään.
- Ontto profiili, joka on **suljettu molemmista päistä**, tarvitsee tuuletus- ja tyhjennysreiän; kuumasinkitys ja kuumennetun ilman paine vaativat molemmat sen.

## Yltääkö hitsaaja

Kulmahitsi tehdään polttimella puolivälissä niiden kahden pinnan välissä, jotka se liittää. Jokaiselle ympärikulkevalle kulmahitsille (päätylevy, pohjalevy, viistolevy) tarkistus ottaa sauvan poikkileikkausviivan levyn kohdalta ja joka 20 mm kohdalla ajaa polttimen polun ulos 45° kulmassa siitä kohdasta, jossa suutin (aluksi 10 mm säde) ensimmäisenä vapautuu molemmista pinnoista, vielä 30 mm. Jos polku osuu palkin omaan laippaan tai toiseen osaan, tämä hitsin osuus luetellaan osan ja etäisyyden kanssa. Nämä luvut ovat tyypillisiä, eivät standardin lukuja: kysy valmistajaltasi prosessi ja suutin. Kahta reunaa pitkin tehtäviä hitsejä (leikkauslevy) ei paikanneta eikä tarkisteta.
