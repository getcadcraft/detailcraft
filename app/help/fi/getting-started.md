---
title: Aloittaminen: DetailCraft
summary: Mitä DetailCraft tekee tänään, miten se avataan ja ensimmäinen malli ruudukoista valmistuspiirustukseen kymmenessä minuutissa.
keywords: aloitus, ensimmäinen malli, johdanto, teräsdetaljointi, raudoitus, pikaopas, opetusohjelma, yleiskatsaus
from: e4f16bbe
---

Teräksen ja raudoituksen detaljointisovellus: DetailCraft, osa CadCraft-perhettä. Rakennetaan 3D-malli teräsrungosta ruudukoille ja tasoille, liitetään se, ja tuloksena saadaan verstaan tarvitsemat: osamerkit ja kokoonpanomerkit, osaluettelo, yksittäisten osien valmistuspiirustukset, DSTV NC -tiedostot, IFC-malli ja anturoiden taivutusluettelo.

Tämä on varhainen versio. Se tekee lyhyen luettelon asioita huolellisesti sen sijaan, että tekisi kaiken kerralla. Lue ennen työn suunnittelua [Mitä ei ole vielä toteutettu](topic:not-built-yet).

## Mitä se tekee tänään

- Ruudukot ja tasot, jotka kirjoitetaan millimetreinä.
- Pilarit, palkit, tukisauvat ja levyt julkaistuista profiilikatalogeista (AISC W, S, C, L, HSS ja Pipe; eurooppalaiset IPE, HEA, HEB ja UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS ja CHS), sekä omat parametriset profiilit.
- Kaksi liitosta: pultattu päätylevy palkista pilarin laippaan ja pilarin pohjalevy neljällä ankkuripultilla. Kumpikin voidaan kopioida jokaiseen samanlaiseen liitokseen.
- Reiät ja lovet, jotka kirjoitetaan paikan mukaan.
- Suorakaiteen muotoiset anturat, joissa on alapuolen raudoitusverkko ja lähtötangot.
- Osamerkit ja kokoonpanomerkit, jotka päivittyvät itsestään jokaisen muutoksen jälkeen.
- Viennit: IFC4, DSTV NC -tiedostot (I-profiilit ja levyt), osaluettelo CSV-tiedostona, taivutusluettelo CSV-tiedostona ja yhden osan valmistuspiirustus PDF-tiedostona.

## Avaa DetailCraft

1. Avaa DetailCraft pöytäkoneen selaimessa: Chrome, Edge, Firefox tai Safari. Katso [Selaimet ja tietokoneet](common:browsers).
2. Odota, että näyttö täyttyy. Alareunan tilarivillä lukee ”Valmis. Avaa Esimerkki tai määritä ruudukot ja tasot ja aloita sauvojen sijoittaminen.”

Mallin näkymä tarvitsee 3D-grafiikan (WebGL). Jos näytön keskellä lukee ”Tämä selain ei voinut käynnistää 3D-grafiikkaa (WebGL)”, katso [Vianetsintä](topic:troubleshooting#the-3d-view-is-missing).

:::note
Mallit pysyvät tietokoneellasi. Mallin avaaminen lukee sen selaimessa, ja tallentaminen lataa tiedoston. Mitään ei lähetetä. Pilvitallennus ei ole vielä käytettävissä. Katso [Minne tiedostot menevät](common:your-files). Jotta sovellusta voi käyttää myöhemmin ilman yhteyttä, valitse kerran yhteydessä ollessa sovelluspalkista {{ui:Tallenna offline-käyttöön}}; katso [Työskentely offline-tilassa](common:offline).
:::

:::offline
Olet offline-tilassa. DetailCraft toimii ilman yhteyttä vain, jos se on tallennettu offline-käyttöön ensin: sovelluspalkin {{ui:Tallenna offline-käyttöön}} -painikkeessa lukee sitten {{ui:Offline valmis}}. Katso [Työskentely offline-tilassa](common:offline).
:::

## Tutustu ensin esimerkkiin

Nopein tapa nähdä, mitä DetailCraft tekee, on esimerkkirunko.

1. Valitse {{ui:Esimerkki}} työkalurivin {{ui:Tiedosto}}-ryhmästä.
2. Näkymässä on kaksiaukkoinen runko: kuusi pilaria pohjalevyineen, neljä palkkia päätylevyineen, yksi tukisauva ja seitsemän anturaa raudoituksineen.
3. Napsauta palkkia. Oikealla oleva {{ui:Ominaisuudet}}-paneeli näyttää sen osamerkin, leikkauspituuden, painon ja päätylevyjen tekemät reiät.
4. Avaa alareunassa oleva {{ui:Osaluettelo}}-välilehti nähdäksesi jokaisen osamerkin määrän ja painon.

Opastus [Tutustu esimerkkirunkoon](topic:sample-model) käy sen läpi osa kerrallaan.

## Ensimmäinen malli

Uudessa mallissa on valmiina ruudukot 1–3 ja A–B 6000 mm:n välein sekä kaksi tasoa: Taso 1 korkeudella 0 ja Taso 2 korkeudella 4000.

1. Valitse {{ui:Uusi}}. Jos nykyisessä mallissa on muutoksia, DetailCraft kysyy, halutaanko ne tallentaa ensin.
2. Valitse {{ui:Pohjakuva}} näkymän yläpuolelta. Sen vieressä oleva tasoluettelo valitsee Taso 1:n.
3. Valitse työkalurivistä {{ui:Pilari}} tai paina {{key:C}}.
4. Napsauta ruudukon leikkauspistettä A/1. Pilari W12x50 ilmestyy tasolta Taso 1 tasolle Taso 2. Tilarivi kertoo, minne se meni.
5. Napsauta B/1, A/2 ja B/2, niin kolme lisää asettuu.
6. Valitse Taso 2 tasoluettelosta ja valitse sitten {{ui:Palkki}} tai paina {{key:B}}.
7. Napsauta A/1 ja sitten A/2. Palkki W16x26 yhdistää kaksi pilarin yläpäätä, ja sen teräksen yläpinta on tasolla.
8. Palaa painamalla {{key:Esc}} kohtaan {{ui:Valitse}} ja napsauta sitten palkkia.
9. Valitse {{ui:Päätylevyt}} {{ui:Liitä}}-ryhmästä. Molempiin päihin tulee pultattu päätylevy, palkki lyhennetään sopivaksi ja ensimmäinen päätylevy on nyt valittuna.
10. Napsauta palkkia uudelleen.
11. Valitse {{ui:Valmistuspiirustus}} {{ui:Tuloste}}-ryhmästä. Palkin valmistuspiirustuksen esikatselu avautuu. Valitse {{ui:Lataa PDF}}.
12. Tallenna malli painamalla {{key:Mod+S}}. Selain lataa tiedoston `Untitled.detailcraft.json`.

Nimeä malli uudelleen {{ui:Nimi}}-kentässä vasemmassa yläreunassa ennen tallentamista, jotta tiedosto ja jokainen vienti kantavat sen nimeä.

## Mihin siirtyä seuraavaksi

- [Näytön esittely](topic:workspace)
- [Ruudukkojen ja tasojen määrittäminen](topic:grids-and-levels)
- [Liikkuminen 3D-näkymässä](topic:navigate-3d) hiirellä, kosketuslevyllä tai kosketusnäytöllä
- [Siirtyminen muista detaljointiohjelmista](topic:coming-from), jos tunnet jonkin suuren detaljointiohjelmiston
- [Tämän ohjeen käyttö](common:help)
