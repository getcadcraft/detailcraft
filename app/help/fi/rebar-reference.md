---
title: Raudoitustiedot
summary: Tankokoot, koukkujen mitat, muotokoodit, katkaisupituudet ja taivutusluettelon sarakkeet, joita DetailCraft käyttää.
keywords: raudoitus, tankokoot, koukut, taivutuksen halkaisija, muotokoodit, katkaisupituus, taivutusluettelo, tankoluettelo, astm a615, aci 318
from: 1583535e
---

## Tankokoot

Taulukko perustuu standardin ASTM A615/A615M taulukkoon 1 (tuumamerkinnät). Millimetrit ja kg/m ovat julkaistujen tuuma- ja lb/ft-arvojen tarkkoja muunnoksia. Luetteloissa kukin koko näkyy esimerkiksi muodossa "#5 (15.9 mm)".

| Tanko | Halkaisija (mm) | Massa (kg/m) | Pinta-ala (mm²) | Taivutuksen sisähalkaisija | 90° koukun varsi, ulkomitta (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Kohdassa [DetailCraft-asetukset](topic:settings) ({{ui:Raudoitus}}) **ASTM-tankonimet** voivat näyttää nämä tangot sen sijaan pehmeän metrisen A615M-nimensä mukaan: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (samat tangot; ACI 315-99 taulukko 1 luettelee molemmat).

### Metriset tangot (BS 4449)

| Tanko | Halkaisija (mm) | kg/m | Pienin taivutussäde r (mm) | Koukun varsi = päätyuloke P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massa on nimellinen poikkipinta kerrottuna luvulla 7850 kg/m³. Säde ja päätyuloke ovat standardin BS 8666:2020 vähimmäisarvoja (sen vähimmäismittojen taulukko; entinen halkaisija on 2r). Anturoiden BS-tangoissa koukun varsi on P, ja katkaisupituudet lasketaan alla olevilla BS 8666 -kaavoilla. Kun asetuksissa valitaan eurooppalainen teräs, uudet anturat saavat oletuksena H16-verkot ja H20-lähtötangot betonilaatuun C30/37.

## Koukut

ASTM-tangot: vakiokoukut standardin ACI 318-19 taulukon 25.3.1 mukaan: taivutuksen sisähalkaisija 6 db kooille #3–#8 ja 8 db kooille #9–#11, taivutuksen jälkeen suora jatke 12 db. Koukun varsi ulkomitattuna on puolet taivutuksen halkaisijasta + db + 12 db.

Jos raudoitusverkon tangon koukku ei mahdu anturan syvyyteen betonipeitteen sisäpuolella, DetailCraft lyhentää varren sopivaksi ja antaa varoituksen.

## Muodot

DetailCraft tallentaa kolme muotoa. Taivutusluettelo tulostaa ne DetailCraftin koodeina, ACI 315 -tyyppeinä tai BS 8666 -muotokoodeina: valitse **Taivutusluettelon muotokoodit** kohdassa [DetailCraft-asetukset](topic:settings) ({{ui:Raudoitus}}).

| Koodi | Muoto | Mitat |
|---|---|---|
| S | Suora | A = pituus |
| L | Yksi 90° taivutus | A = päävarsi, B = koukun varsi, molemmat ulkomitta |
| U | Kaksi 90° taivutusta samalla puolella | A = keskiosa, B ja C = kaksi vartta, ulkomitta |

Raudoitusverkon tangot, joissa {{ui:Päätykoukut}} on päällä, ovat U; ilman sitä S. Lähtötangot, joissa {{ui:Koukku alapäässä}} on päällä, ovat L; ilman sitä S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (kuva 10) |
|---|---|---|
| S | 00, L = A | ei tyyppinumeroa |
| L | 11, L = A + B − 0.5r − d | ei tyyppinumeroa: kuvassa ei ole tankoa, jossa on yksi koukku |
| U | 21, A ja C varret, B keskiosa: L = A + B + C − r − 2d | Tyyppi 2, koukut A ja G, suora B |

Kun käytetään BS 8666- tai ACI 315 -koodeja, taivutusluettelon sarakkeet A, B ja C noudattavat kyseisen standardin kirjainmerkintöjä (U-muodon keskiosa on B).

## Katkaisupituus

BS 4449 -tangoissa katkaisupituus on tangon muotokoodin BS 8666 -kaava (yllä). ASTM-tangoissa se on tangon keskilinjan tarkka pituus: suorat osat ja taivutukset kaarina, joiden säde on puolet taivutuksen halkaisijasta plus puolet tangon halkaisijasta. Sitä ei lasketa taivutusvähennysten taulukosta, joten se voi poiketa muutamalla millimetrillä taulukkoa käyttävästä luettelosta.

## Asettelu

- Alempi raudoitusverkko: L-suuntaiset tangot muodostavat alemman kerroksen, B-suuntaiset tangot lepäävät niiden päällä. Kukin sarja jakautuu tasaisesti anturan alueelle betonipeitteen sisäpuolella, antamallasi tai sitä tiheämmällä välillä, vähintään kahdella tangolla.
- Lähtötangot: ruudukko L- ja B-suuntaisia tankoja antamillasi väleillä, keskitettynä anturaan, seisomassa verkon päällä ja ulottuen yläpuolelle antamasi ulokkeen verran. Jokainen koukku osoittaa ulospäin.

## Tarkistukset

| Tarkistus | Sääntö | Tulos |
|---|---|---|
| Tila tangoille | Molemmat betonipeitteet jättävät tilaa tangoille | Hylätään, jos ei |
| Syvyys kahdelle kerrokselle | Syvyys miinus kaksi betonipeitettä riittää molemmille verkkokerroksille | Hylätään, jos ei |
| Lähtötangot mahtuvat | Lähtötankoruudukko mahtuu betonipeitteen sisään | Hylätään, jos ei |
| Vapaa väli | Vähintään suurempi arvoista 25.4 mm ja db (ACI 318-19 25.2.1; kiviaineen kokoa ei tarkisteta) | Varoitus |
| Koukun syvyys | Koukun varsi mahtuu betonipeitteen sisäpuoliseen syvyyteen | Varoitus, varsi lyhennetään |
| Lähtökoukut | Koukut pysyvät betonipeitteen ulkopuolella | Varoitus |

## Taivutusluettelon sarakkeet

Välilehdellä {{ui:Taivutusluettelo}} ja sen CSV-tiedostolla on nämä sarakkeet: Tankonumero, Koko, Muoto, A (mm), B (mm), C (mm), Lukumäärä, Katkaisupituus (mm), Kokonaispituus (m), kg/m, Paino per kappale (kg), Kokonaispaino (kg), Käyttö. Viimeinen rivi laskee yhteen lukumäärän, pituuden ja painon.
