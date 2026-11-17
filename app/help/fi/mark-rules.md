---
title: Merkintäsäännöt
summary: Tarkalleen milloin kaksi osaa tai kaksi kokoonpanoa saa saman merkin, miten merkit numeroidaan sekä miten anturaperustus- ja tankomerkit toimivat.
keywords: merkinnät, numerointi, osamerkki, kokoonpanomerkki, kappalemerkki, etuliite, toleranssi, samanlaiset osat, tankomerkit, anturamerkit
from: ce02c98e
---

DetailCraft laskee kaikki merkit uudelleen jokaisen muutoksen jälkeen. Mitään ei tallenneta, joten merkit kuvaavat aina mallin nykyistä tilaa. Katso, miten niitä käytetään: [Tarkista merkit ja osaluettelo](topic:marks-and-bom).

## Osamerkit

Kaksi osaa saa saman osamerkin, kun kaikki seuraavat täsmäävät:

1. Osatyyppi (palkki, pilari, tukisauva tai levy).
2. Profiilin nimi (kirjainkoolla ei ole merkitystä).
3. Materiaali (kirjainkoolla ei ole merkitystä).
4. Leikkauspituus, 1 mm:n tarkkuudella.
5. Jokainen reikä: pinta, sijainti pituus- ja poikkisuunnassa 1 mm:n tarkkuudella sekä halkaisija 0.1 mm:n tarkkuudella.
6. Jokainen lovi: pää, sivu, pituus ja syvyys, 1 mm:n tarkkuudella.

Sauvan {{ui:Nimi}} ei vaikuta. Eivät myöskään sen sijainti mallissa, kierto eikä piirtämissuunta, kunhan itse osa on sama.

### Käännetyt osat

Osa verrataan kaikilla tavoilla, joilla se voidaan kääntää niin, että sen poikkileikkaus osuu itsensä päälle. Jos jokin näistä tekee siitä vastaavan toisen osan kanssa, ne saavat saman merkin.

| Muoto | Huomioitavat käännöt |
|---|---|
| I-profiilit, suorakaiteen muotoiset HSS-profiilit, levyt | Päät vaihdettuna (pystyakselin ympäri), päät vaihdettuna (vaaka-akselin ympäri) ja ylösalaisin oman pituusakselinsa ympäri |
| U-profiilit | Vain päät vaihdettuna vaaka-akselin ympäri, jolloin uuma pysyy samalla puolella |
| Kulmaraudat, pyöreät HSS-profiilit | Ei mitään: verrataan sellaisina kuin ne on sijoitettu |

Eli palkki, jossa on reikä lähellä vasenta päätä, vastaa palkkia, jossa on sama reikä lähellä oikeaa päätä, ja pilari, jossa on reikiä yhdessä laipassa, vastaa pilaria, jossa on samat reiät toisessa laipassa.

### Numerointi

| Tyyppi | Osan etuliite | Kokoonpanon etuliite |
|---|---|---|
| Pilari | c | C |
| Palkki | b | B |
| Tukisauva | br | BR |
| Levy (sijoitettu, päätylevy tai pohjalevy) | p | P |

Merkit numeroidaan etuliitteittäin alkaen 1:stä. Järjestys on: pilarit, sitten palkit, tukisauvat ja levyt; tyypin sisällä profiilin nimen mukaan luonnollisessa järjestyksessä (W8x10 ennen W12x26); sen jälkeen pidemmät osat ensin.

Koska numerointi noudattaa tätä järjestystä, yhden osan lisääminen tai muuttaminen voi siirtää muiden numeroita.

## Kokoonpanomerkit

- Jokainen osa, jota ei ole hitsattu toiseen osaan, on oman kokoonpanonsa pääosa.
- Päätylevyt on hitsattu palkkiinsa ja pohjalevyt pilariinsa, joten ne kuuluvat sauvan kokoonpanoon.
- Kaksi kokoonpanoa saa saman merkin, kun niiden pääosilla on sama osamerkki ja niiden kiinnitetyillä osilla on samat merkit samoissa kohdissa (1 mm:n tarkkuudella), sallien samat käännökset kuin pääosalle.
- Kokoonpanon etuliite seuraa pääosaa: palkki, jolla on kaksi päätylevyä, on B-kokoonpano.

{{ui:Levy}}-työkalulla sijoittamasi levyt eivät ole hitsattuja mihinkään, joten kukin on oma P-kokoonpanonsa.

## Anturamerkit

Anturaperustukset, joilla on sama pituus, leveys, syvyys, betonimerkintä, alaverkko ja lähtöraudat, saavat saman merkin: F1, F2 … siinä järjestyksessä kuin ne sijoitettiin. Sijainti ja kierto eivät vaikuta.

## Tankomerkit

Tangot, joilla on sama koko, muoto ja mitat A, B ja C (pyöristettynä millimetriin), saavat saman merkin kaikissa anturoissa. Merkki on tangon numero, F sekä laskuri kutakin tankokokoa kohti: 5F1, 5F2, 6F1. Neliöanturan pitkäsuuntainen ja lyhytsuuntainen tanko ovat sama tanko ja saavat saman merkin; luettelon {{ui:Käyttökohde}}-sarake luettelee molemmat käyttökohteet.
