---
title: Tarkista terässauvat mitoitusstandardin mukaan
summary: Tee kuormitusyhdistelmät ASCE 7:stä tai EN 1990:stä, tarkista jokainen teräksen I-profiili AISC 360:n tai EN 1993-1-1:n mukaan ja katso, kuinka suuren osan kapasiteetistaan kukin sauva käyttää. Apuväline, kunnes insinööri on tarkistanut sen.
keywords: mitoitus, mitoitustarkistus, teräsrakenteiden mitoitus, käyttöaste, kapasiteetti, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kuormitusyhdistelmät, LRFD, kansallinen liite, nurjahdus, kiepahdus, leikkaus, taivutus, yhdistetty, rakenne, opiskelijat, insinööri
from: 66b6d545
---

Analyysin ajon jälkeen {{ui:Design checks}}-lohko {{ui:Analysis}}-välilehdessä muuntaa voimat tuomioksi jokaiselle terässauvalle: kuinka suuren osan kapasiteetistaan pahin yhdistelmä käyttää.

:::warning
Se on **apuväline, kunnes insinööri on tarkistanut sen**. Se käyttää vain ensimmäisen kertaluvun voimia (ei toisen kertaluvun vaikutuksia), eikä se tarkista kiertymää, hoikkia (luokan 4) osia, hitsattuja muotoja eikä liitoksia, ja se jättää pois sen, mitä se ei pysty tarkistamaan, ja kertoo siitä. Se ei korvaa insinöörin tarkistusta, eikä sen tulokset ole hyväksyntä.
:::

## Valitse standardi

{{ui:Design code}} tallennetaan mallin mukana; valitse kaksi perheestä:

- **ASCE 7 + AISC 360** (USA, LRFD): ASCE 7-16 §2.3.1:n kuormitusyhdistelmät ja ANSI/AISC 360-16:n sauvatarkistukset.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990:n yhdistelmät (yhtälö 6.10 tai 6.10a ja 6.10b) ja EN 1993-1-1:n sauvatarkistukset.

Valitse sitten {{ui:Steel grade}} (A992, A36 ja muut; tai S235–S450, jossa myötölujuus on alempi yli 40 mm:n paksuuksilla).

## Tee yhdistelmät

Anna jokaiselle kuormitustapaukselle sen **laji** (kuolleet, hyötykuorma, katon hyötykuorma, lumi, tuuli, seismiset) kuormitustapausluettelossa ja paina {{ui:Make combinations}}. DetailCraft kirjoittaa standardin yhdistelmät kuormitustapauksiesi yhdistelminä: jokainen lujuusyhdistelmä, jonka standardi luettelee antamillesi lajeille, ja käyttörajatilayhdistelmät taipumalle. Itse kirjoittamasi säilyvät; niitä ei tarkisteta standardia vastaan. Lajin {{ui:Other}} kuormitustapausta ei yhdistellä.

Eurocodein kertoimet ovat EN 1990:n liitteen A1 **suositellut arvot** (γG 1.35, γQ 1.5, hyötykuormien, lumen ja tuulen ψ-arvot) ja EN 1993-1-1:n (γM0 = γM1 = 1.0). Maasi kansallinen liite muuttaa osaa niistä: avaa {{ui:National Annex values}}, kirjoita omasi ja tee yhdistelmät uudelleen. Ne tallennetaan malliin.

## Tarkista sauvat

Paina {{ui:Check members}}. Jokaiselle teräksen I-profiilille taulukko näyttää sen **käyttöasteen** (vaatimus kapasiteettia kohti: 100 % on raja), sen, läpäiseekö se, mikä tarkistus määrää ja mikä yhdistelmä. Sauvat värjätään mallissa: sininen vähän käytetty, vihreä noin puolet, okra lähellä rajaa, punainen rajan yli, harmaa ei tarkistettu. Napsauta sauvan nimeä valitaksesi sen.

Tarkistukset ja lauseke, jota kukin seuraa (ne on luetteloitu raportissa):

- veto, puristus taivutus- ja kiepahdusnurjahduksella, taivutus molempien akselien suhteen kiepahdusnurjahduksella, leikkaus ja taivutus aksiaalivoiman kanssa;
- käyttörajatilayhdistelmien taipuma verrattuna asettamaasi {{ui:Taipumaraja}}-arvoon (aluksi L/360; projektin arvo, ei standardin arvo).

**Pituudet.** Tuettu pituus on osuus kustakin analysoidusta kappaleesta (1 = tukematon); tuennat oletetaan tasavälein alusta alkaen. K-kertoimet kertovat pituuden nurjahdusta varten. Liitos, johon toinen sauva liittyy, jakaa sauvan, ja jokainen kappale tarkistetaan omalla pituudellaan tuettuna siinä.

## Mitä ei tarkisteta

Sauva näyttää **ei tarkistettu** perusteluineen numeron sijasta, kun sen poikkileikkaus ei ole tarkistusten tuntema I-profiili (putket, kulmateräkset, U-profiilit), kun se on mukautettu (hitsattu) muoto, tai kun osa on hoikka (AISC) tai luokan 4 (Eurocode) taivutuksessa. Hoikka osa puristuksessa jättää puristustarkistukset pois, ja sauva lukee *läpäisee, osittain tarkistettu*. Myös nämä ovat vielä toteuttamatta: toisen kertaluvun vaikutukset, kiertymä, leikkausnurjahdus yhdessä taivutuksen kanssa, liitokset, väsyminen, palo ja seisminen detaljointi. Betonisauvoilla ja seismisillä kuormilla on [omat tarkistuksensa](topic:concrete-and-seismic). Katso [Ei vielä toteutettu](topic:not-built-yet).

## Raportti

{{ui:Report (PDF)}} ja {{ui:Report (CSV)}} saavat mitoitustaulukot, kun olet tarkistanut: standardien versiot, asetukset ja kansallisen liitteen arvot, käyttöaste sauvoittain, jokainen käytetty lauseke sekä kullekin sauvalle vaatimus, kapasiteetti ja käyttöaste kunkin tarkistuksen määräävässä yhdistelmässä.
