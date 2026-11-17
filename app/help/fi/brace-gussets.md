---
title: Tukisauvojen liitoslevyt
summary: Liitä tukisauvan pää pilariin tai palkkiin liitoslevyllä: kulmateräkset ja tasoteräkset pultattuina, putket uritettuina ja hitsattuina.
keywords: liitoslevy, liitoslevyt, tukisauva, pystysuora jäykistys, kulmatukisauva, tasoteräs, nauha, HSS-tukisauva, veitsilevy, uritettu putki, liitä
from: 22f6598d
---

Tukisauvan liitoslevy on tehtaalla hitsattu levy pilariin (tai palkkiin), jonka päähän tukisauva tulee, tukisauvan tasoon. DetailCraft lyhentää tukisauvaa niin, että se jää vapaaksi kaikesta liitoksessa, sijoittaa ja mitoittaa liitoslevyn ja liittää sauvan siihen: **kulmateräs** tai **tasoteräs** yhdellä pulttirivillä tai **putki** (neliö-, suorakaide- tai pyöreä HSS), joka on uritettu liitoslevyn päälle ja hitsattu.

## Missä se toimii

- Tukisauvan pää on pilarin tai palkin linjalla (1 mm:n tarkkuudella), eikä sauva ole lähes samansuuntainen tämän linjan kanssa. Tuki on pilari, jos sellainen on; muuten palkki.
- Liitoslevy on tukisauvan tasossa ja tuen linjalla. **Kulmateräksen** toisen siiven on oltava tuossa tasossa, ja **tasoterästen** pinnan: käännä sauvaa ({{ui:Kierto (°)}}), kunnes se on. Jos kulmateräksen siivet ovat 45° kulmassa tasoon nähden, DetailCraft ilmoittaa siitä eikä rakenna mitään.
- I-profiileja ja U-profiileja tukisauvoina ei liitetä.

## Lisää liitoslevyt

1. Valitse yksi tai useampi tukisauva.
2. Valitse {{ui:Liitoslevy}} ryhmän {{ui:Liitä}} valikosta {{ui:Lisää}}.
3. Jokaiseen valitun tukisauvan päähän, joka osuu pilariin tai palkkiin eikä siinä ole liitoslevyä, tulee liitoslevy.

Valitse liitoslevy (napsauta levyä) muuttaaksesi sen asetuksia. {{ui:Käytä samanlaisiin (n)}} kopioi sen jokaiseen vapaaseen tukisauvan päähän, jolla on sama sauva- ja tukiprofiili.

## Mitä DetailCraft laskee

- **Lyhennys.** Tukisauvaa lyhennetään sen päästä, kunnes sen kulmat vapautuvat {{ui:Tukisauvan väljyys}} (25) verran, liitoksen jokaisesta sauvasta (sen vierestä tai sen pään ohi, kun sauva päättyy siihen) ja pilarin alla olevasta pohjalevystä.
- **Pultit (kulmateräkset, tasoteräkset).** {{ui:Pultit}} (3) yhdellä rivillä sauvaa pitkin, ensimmäinen {{ui:Pultin päätyetäisyys}} (40) leikatusta päästä, {{ui:Pulttien jako}} (75) välein. Kulmateräksessä ne menevät liitoslevyn tasossa olevan siiven läpi, {{ui:Pulttien poikittaisväli}} kantapäästä (0 = siiven keskellä); tasoterästä keskiviivallaan (tai siitä poikittaisvälin verran sivussa). Pulttiote = siipi tai tasoteräs + liitoslevy.
- **Liitoslevy.** Suorakaide: tuen pinnasta ulospäin viimeisen pultin ohi päätyetäisyyden verran, ja tukea pitkin niin pitkälle kuin pultit vaativat. Se asettuu kulmateräksen siiven taakse (tai tasoterästen pinnalle). Putkelle se kulkee putken keskellä, {{ui:Putken limitys liitoslevyllä}} (200) putken päälle, hitsejä varten jätetty tila mukaan lukien.
- **Liitokset.** Pilarin jalassa liitoslevy jatkuu alas pohjalevylle. Kun palkki kulkee liitoksen läpi (tukisauva nousee palkin ja pilarin kulmaan), liitoslevy jää palkin alle tai päälle. Jos tämä jättää pultit tai limityksen ilman päätyetäisyyttään, DetailCraft varoittaa.
- **Hitsit.** Liitoslevy tukeensa, molemmin puolin. Putki liitoslevyyn, neljä linjaa limityksen matkalla.

## Hyvä tietää

- Liitoslevy kuuluu tuen kokoonpanoon (hitsattu tehtaalla). Tukisauva toimitetaan reiät porattuina, ja se menee omaan NC-tiedostoonsa.
- Putken uraa ei leikata malliin; [törmäystarkistus](topic:clash-check) jättää tukisauvan ja sen liitoslevyn rauhaan.
- Liitoslevyä ei hitsata siihen palkkiin, johon se koskettaa, eikä seuraavia ole vielä tehty: palkkiin ja pilariin molempiin hitsatut nurkkaliitoslevyt, viistetyt nurkat ja Uniform Force Method -liitoksen työpistesijoittelu.
- DetailCraft ei mitoita liitoslevyä eikä pultteja (ei lujuustarkistuksia); varoitukset koskevat välejä ja sovitusta.
