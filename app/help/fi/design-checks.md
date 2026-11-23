---
title: Tarkista terässauvat mitoitusstandardin mukaan
summary: Muodosta kuormitusyhdistelmät ASCE 7:n tai EN 1990:n mukaan, tarkista jokainen teräs-I-profiili AISC 360:n tai EN 1993-1-1:n mukaan ja katso, kuinka suuren osan kapasiteetistaan kukin sauva käyttää. Apuväline, kunnes insinööri on tarkistanut sen.
keywords: mitoitus, mitoitustarkastus, teräsmitoitus, käyttöaste, utilisation, kapasiteetti, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, kuormitusyhdistelmät, LRFD, kansallinen liite, nurjahdus, kiepahdus, leikkaus, taivutus, yhteisvaikutus, rakenteellinen, opiskelijat, insinööri
from: 15685c4e
---

Kun olet suorittanut analyysin, {{ui:Mitoitustarkastukset}}-lohko välilehdellä {{ui:Analyysi}} muuntaa voimat tuomioksi jokaiselle terässauvalle: kuinka suuren osan kapasiteetistaan vaikein yhdistelmä käyttää.

:::warning
Se on **apuväline, kunnes insinööri on tarkistanut sen**. Se käyttää vain ensimmäisen kertaluvun voimia (ei toisen kertaluvun vaikutuksia), ei tarkista vääntöä, hoikkia osia (luokka 4), hitsattuja profiileja eikä liitoksia, ja jättää pois sen, mitä se ei pysty tarkistamaan, ja kertoo siitä. Se ei korvaa insinöörin tarkistusta, eikä sen tulokset ole leima.
:::

## Valitse standardi

{{ui:Mitoitusstandardi}} tallentuu mallin mukana. Valitse jompikumpi kahdesta perheestä:

- **ASCE 7 + AISC 360** (USA, LRFD): ASCE 7-16 §2.3.1:n kuormitusyhdistelmät ja ANSI/AISC 360-16:n sauvatarkistukset.
- **EN 1990 + EN 1993-1-1** (Eurocode): EN 1990:n yhdistelmät (yhtälö 6.10, tai 6.10a ja 6.10b) ja EN 1993-1-1:n sauvatarkistukset.

Valitse sitten {{ui:Teräslaatu}} (A992, A36 ja muut; tai S235–S450, jossa myötöraja on alempi yli 40 mm:n paksuudella).

## Muodosta yhdistelmät

Anna jokaiselle kuormitustapaukselle sen **laji** (pysyvä, hyötykuorma, kattohyötykuorma, lumi, tuuli, seisminen) kuormitustapausluettelossa ja paina sitten {{ui:Tee yhdistelmät}}. DetailCraft kirjoittaa standardin yhdistelmät kuormitustapauksiesi yhdistelminä: kaikki lujuusyhdistelmät, jotka standardi luettelee antamillesi lajeille, ja käyttörajatilayhdistelmät taipumaa varten. Itse kirjoittamasi yhdistelmät säilyvät; niitä ei tarkisteta standardia vastaan. Lajin {{ui:Muu}} kuormitustapausta ei yhdistellä.

Eurocodea varten kertoimet ovat EN 1990:n liitteen A1 **suositusarvoja** (γG 1.35, γQ 1.5, hyötykuormien, lumi- ja tuulikuormien ψ-arvot) ja EN 1993-1-1:n arvoja (γM0 = γM1 = 1.0). Kansallinen liite muuttaa osaa niistä: avaa {{ui:Kansallisen liitteen arvot}}, kirjoita omasi ja muodosta yhdistelmät uudelleen. Ne tallentuvat malliin.

## Tarkista sauvat

Paina {{ui:Tarkista sauvat}}. Jokaisesta teräs-I-profiilista taulukko näyttää sen **käyttöasteen** (vaatimus kapasiteetin yli; 100 % on raja), täyttyykö se, mikä tarkistus ohjaa ja mikä yhdistelmä. Sauvat värjätään mallissa: sininen vähän käytetty, vihreä noin puolet, okra lähellä rajaa, punainen rajan yli, harmaa ei tarkistettu. Valitse sauva napsauttamalla sen nimeä.

Tarkistukset ja lauseke, jota kukin noudattaa (ne on lueteltu raportissa):

- veto, puristus taivutus- ja vääntönurjahduksella, taivutus molempien akselien suhteen kiepahduksen kanssa, leikkaus sekä taivutus normaalivoiman kanssa;
- käyttörajatilayhdistelmien taipuma verrattuna asettamaasi {{ui:Taipumaraja}}-arvoon (aluksi L/360; projektiarvo, ei standardin arvo).

**Pituudet.** Tuettu pituus on osuus kustakin analysoidusta osasta (1 = tukematon); tuet otetaan tasavälein alusta. K-kertoimet kertovat pituuden nurjahdusta varten. Liitos, johon toinen sauva päättyy, jakaa sauvan, ja jokainen pala tarkistetaan omalla pituudellaan, tuettuna siinä.

## Mitä ei tarkisteta

Sauva näyttää **ei tarkistettu** -tilan syineen numeron sijaan, kun sen poikkileikkaus ei ole tarkistusten tuntema muoto (kulmateräkset, U-profiilit; suorakaide- ja pyöreät putket tarkistetaan, kun seinät ovat kompakteja), kun se on mukautettu (hitsattu) muoto, tai kun osa on hoikka (AISC) tai luokan 4 (Eurocode) taivutuksessa. Hoikka osa puristuksessa jättää puristustarkistukset pois, ja sauva näkyy *hyväksytty, osittain tarkistettu*. Sauvojen liitosten hitseillä on [oma tarkistuksensa](topic:weld-checks). Myös seuraavat eivät ole vielä toteutettu: toisen kertaluvun vaikutukset, vääntö, leikkausnurjahdus yhdessä taivutuksen kanssa, pulttiliitokset, väsyminen, palosuojaus ja seisminen detaljointi. Betonisauvoilla ja seismisillä kuormilla on [omat tarkistuksensa](topic:concrete-and-seismic). Katso [Ei vielä toteutettu](topic:not-built-yet).

## Raportti

{{ui:Raportti (PDF)}} ja {{ui:Raportti (CSV)}} saavat mitoitustaulukot, kun olet tehnyt tarkistuksen: standardien versiot, asetukset ja kansallisen liitteen arvot, käyttöaste sauvoittain, jokainen käytetty lauseke sekä kullekin sauvalle jokaisen tarkistuksen vaatimus, kapasiteetti ja käyttöaste sen ohjaavassa yhdistelmässä.
