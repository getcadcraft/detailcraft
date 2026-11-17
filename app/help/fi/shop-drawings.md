---
title: Tee valmistuspiirustukset
summary: Yksi arkki osamerkkiä kohden, kaikki kerralla: esikatsele mitä tahansa niistä ja lataa yksi arkki tai koko sarja PDF-tiedostona A4–A1- tai ANSI B–D-koossa, reikineen, lovineen, mittoineen ja piirustusotsikkoineen.
keywords: valmistuspiirustus, valmistuspiirustukset, kaikki osat, erä, koko sarja, yhden osan piirustus, valmistuspiirros, pdf, yksityiskohtapiirustus, osapiirustus, tulostus
from: d25fe035
---

DetailCraft tekee yhden arkin osamerkkiä kohden jokaiselle palkille, pilarille, tukisauvalle ja levylle mallissa, kaikki kerralla: niitä ei tarvitse valita yksi kerrallaan. Samanlaiset kappaleet saavat saman merkinnän, joten ne jakavat saman arkin. Arkit tehdään paikan päällä mallista; niitä ei tallenneta eikä muokata.

## Tee koko sarja

1. Valitse {{ui:Valmistuspiirustus}} ryhmästä {{ui:Tuloste}}. Mitään ei tarvitse valita. Kun osa on valittuna, ikkuna aukeaa sen osan arkille. {{ui:Ominaisuudet}}-paneelissa sama painike on nimeltään {{ui:Valmistuspiirustus}} sauvoille ja {{ui:Levypiirustus}} liitoksille.
2. Esikatselu avautuu, ja sen otsikossa on osamerkki, esimerkiksi ”Valmistuspiirustus b1”. Otsikon vieressä oleva ensimmäinen luettelo sisältää jokaisen osamerkin profiilinsa, pituutensa ja määränsä kanssa: valitse yksi nähdäksesi sen arkin. Toinen luettelo vaihtaa arkin koon; koko sarja tehdään uudelleen sillä (katso [Yleisjärjestely- ja kokoonpanopiirustukset](topic:drawings#choose-the-sheet-size)).
3. Valitse {{ui:Lataa kaikki}} (painike näyttää arkkien määrän) yhdeksi PDF-tiedostoksi, jossa on sivu osamerkkiä kohden: `<name> Shop drawings.pdf`. Jokaisessa arkissa lukee piirustusotsikossa ”Arkki 3 / 42”. Tai valitse {{ui:Lataa PDF}} katsomallesi arkille: `<name> <mark>.pdf`.
4. Sulje esikatselu ×-painikkeella tai {{key:Esc}}-näppäimellä.

Jos {{ui:Valmistuspiirustus}} on harmaana, mallissa ei ole vielä osia.

## Mitä arkilla on

I-profiilille:

- **Julkisivu**, uumaa kohti katsottuna: osa leikattuine lovineen, uuman reiät ympyröinä ja laippojen reiät piilotettuina (katkoviivoina).
- **Ylälaipan pohjakuva**, ylhäältä katsottuna, kun jossakin laipassa on reikiä. Alalaipan reiät näkyvät katkoviivoina.
- **Leikkaus** profiilin läpi.
- **Mitat:** reikien peräkkäiset sijainnit osan pituudelta sekä kokonaispituus, uuman reikien korkeudet, poikittaisväli ja lovien koot.
- **Reikäluettelo:** jokainen reikäryhmä, esimerkiksi ”8 x Ø22 ylälaipassa”.
- **Hitsi**, kun osaan on hitsattu levyjä.
- **Piirustusotsikko:** osamerkki, kokoonpanomerkki, profiili, materiaali, pituus, määrä, paino kappaletta ja yhteensä, mallin nimi ja päiväys.

U-profiilille, kulmateräkselle tai onttoprofiilille arkki on sama, katsottuna uumaan tai sivuun: putken seinät ovat piilotettuja (katkoviivoja) viivoja, ja leikkaus antaa seinämän paksuuden.

Levylle: levyn pinta reikineen ja sen reuna leikkauksena.

## Mittakaavat

Mittakaava valitaan luettelosta (1:1–1:200), jotta osa mahtuu arkille. Pitkä ja matala osa olisi yhdellä mittakaavalla liian ohut luettavaksi, joten kun syvyys paperilla jäisi alle 30 mm:n, syvyys piirretään suuremmalla mittakaavalla kuin pituus. Näkymän otsikko kertoo sen, esimerkiksi ”pituus 1:20, syvyys 1:5 (ei yhtä mittakaavaa; mitat ratkaisevat)”. Lue aina koot mitoista, älä mittaa arkkia.

## Hyvä tietää

- Määrä on mallissa tällä merkillä olevien osien lukumäärä. Merkinnät voivat numeroitua uudelleen muutoksen jälkeen; katso [Tarkista merkinnät ja osaluettelo](topic:marks-and-bom).
- Jokainen arkki on yksi osa sellaisenaan, ilman hitsimerkintöjä; kokoonpanopiirustukset (hitsimerkinnöin) ja yleisjärjestelypiirustukset ovat kohdassa [Piirustukset](topic:drawings). DetailCraft-sovelluksessa arkkia ei voi muokata eikä merkitä. Merkitsemistä varten avaa PDF PDF-merkintäsovelluksessa, kuten MarkupCraft-sovelluksessa.
- Piirustusotsikossa lukee ”DetailCraft lab build — millimeters”.
- Teksti käyttää vakio-PDF-fonttia Helvetica. Länsieurooppalaisen merkistön ulkopuoliset merkit tulostuvat ”?”-merkkinä, ja tilarivi laskee ne.

## Tulosta

Avaa ladattu PDF PDF-katselimessa ja tulosta se 100 %:n koossa (ei ”Sovita sivulle”) valitsemallesi paperikoolle, jos haluat ilmoitetut mittakaavat pitävän. Pienemmälle arkille skaalaa tulostus ja luota mittoihin.
