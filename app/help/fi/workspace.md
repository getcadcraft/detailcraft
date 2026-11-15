---
title: Näytön esittely
summary: Jokainen palkki, paneeli ja välilehti näytöllä näkyvällä nimellään sekä sen tehtävä.
keywords: näyttö, asettelu, työkalurivi, paneelit, ominaisuudet, tilarivi, raportit, käyttöliittymä, ui, välilehdet
from: 94f81073
---

DetailCraft täyttää selainikkunan sovelluspalkin alapuolella. Ylhäältä alas: työkalurivi, sitten kolme saraketta ({{ui:Malli}}-paneeli, näkymä, {{ui:Ominaisuudet}}-paneeli), sitten raportti-välilehdet ja lopuksi tilarivi.

## Sovelluspalkki

Kapea palkki aivan yläreunassa kuuluu CadCraft-sivustolle, ei malliin. Siinä näkyvät sovelluksen nimi ja versio, linkki kohtaan {{ui:Tietoja: DetailCraft}}, {{ui:Ohje}} (tai {{key:F1}}) tätä ohjetta varten, {{ui:Tallenna offline-käyttöön}}, näyttötilapainike ja {{ui:Paperi}} / {{ui:Malli}} -vaihtokytkin.

- {{ui:Tallenna offline-käyttöön}} säilyttää sovelluksen, sen 3D-näkymän ja tämän ohjeen selaimessa, jotta se avautuu ilman yhteyttä. Tallentamisen jälkeen painike näyttää {{ui:Offline valmis}}, ja sitä napsauttamalla saat valinnat {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. Katso [Työskentely offline-tilassa](common:offline).
- {{ui:Paperi}} antaa vaalean näytön ja {{ui:Malli}} tumman. 3D-näkymä seuraa heti; mallissa ei muutu mitään.
- Näyttötilapainike ja {{key:Ctrl+Shift+F}} kiertävät tavallisen, koko näytön ja koko näytön palkit piilotettuina -tilojen välillä. {{key:Ctrl+Shift+F}} käyttää Control-näppäintä kaikilla tietokoneilla, myös Macilla. Kun palkit ovat piilotettuina, osoita näytön yläreunaa (tai kosketa sitä), niin ne palautuvat. {{key:Esc}} poistuu koko näytöstä.

## Työkalurivi

Työkalurivillä on viisi ryhmää. Vie osoitin painikkeen päälle nähdäksesi, mitä se tekee ja mikä on sen pikanäppäin.

| Ryhmä | Painikkeet | Mitä ne tekevät |
|---|---|---|
| {{ui:Tiedosto}} | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tuo IFC}}, {{ui:Tallenna}}, {{ui:Esimerkki}} | Aloita malli, avaa tallennettu `.detailcraft.json`- tai IFC-tiedosto, tallenna malli tai avaa esimerkkirunko |
| {{ui:Aseta}} | {{ui:Valitse}}, {{ui:Palkki}}, {{ui:Pilari}}, {{ui:Tukisauva}}, {{ui:Levy}}, {{ui:Anturaperustus}}, {{ui:Portaat}} | Työkalu, jota seuraava napsautus näkymässä käyttää |
| {{ui:Liitä}} | {{ui:Päätylevyt}}, {{ui:Pohjalevy}}, ja kohdassa {{ui:Lisää}}: {{ui:Leikkausliitoslevyt}}, {{ui:Jatkos}}, {{ui:Liitoslevy}}, {{ui:Samanlaiset}} | Lisää liitos valittuun palkkiin, pilariin tai tukisauvaan, tai kopioi valittu liitos jokaiseen vastaavaan liitokseen |
| {{ui:Muokkaus}} | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Lisää}} | Siirry taaksepäin ja eteenpäin muokkauksissa; kopioi valinta ja liitä se. {{ui:Lisää}} avaa valikon, jossa ovat {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}} ja {{ui:Poista valinta}}, kukin pikanäppäimineen |
| {{ui:Tuloste}} | {{ui:IFC}}, {{ui:NC-tiedostot}}, {{ui:BOM}}, {{ui:Valmistuspiirustus}}, {{ui:Piirustukset}}, ja kohdassa {{ui:Lisää}}: {{ui:Taivutus}}, {{ui:Painoraportti vaiheittain}}, {{ui:KISS-tiedosto valmistusohjelmistolle}} | Lataa vienti tai avaa piirustusarkit |

Painikkeet ja valikkokohdat, jotka eivät voi toimia juuri nyt, ovat harmaana, ja niiden päälle osoittaminen kertoo syyn. {{ui:Päätylevyt}} vaatii valitun palkin, {{ui:Pohjalevy}} valitun pilarin, {{ui:Samanlaiset}} valitun liitoksen, {{ui:Valmistuspiirustus}} mallin, jossa on osia, {{ui:Kopioi}} valitun sauvan tai anturan ja {{ui:Liitä}} jotain kopioitua. Katso [Kopiointi, liittäminen ja monistaminen](topic:copy-paste).

## Malli-paneeli (vasen)

- {{ui:Malli}}: mallin {{ui:Nimi}}. Se nimeää jokaisen tallennettavan tai vietävän tiedoston.
- {{ui:Ruudukot}}: ruudukkoviivat ja niiden välit sekä {{ui:Käytä ruudukkoja}}. Katso [Ruudukkojen ja tasojen määrittäminen](topic:grids-and-levels).
- {{ui:Tasot}}: yksi rivi kutakin tasoa kohden (nimi ja korkeus mm:nä), {{ui:Lisää taso}} ja {{ui:Käytä tasoja}}.
- {{ui:Oma profiili}}: tee oma parametrinen poikkileikkaus. Suljettuna, kunnes avaat sen.
- {{ui:Osamerkit}}: jokainen osamerkki mallissa profiilinsa, pituutensa ja määränsä kanssa. Napsauta merkkiä, niin valitaan ensimmäinen sillä merkitty osa.

{{ui:Ruudukot}}, {{ui:Tasot}} ja {{ui:Oma profiili}} taittuvat piiloon: napsauta niiden otsikoita.

## Näkymä (keskellä)

Näkymä esittää mallin 3D:nä. Sen yläpuolella näkymäpalkissa on kolme painiketta ja luettelo:

- {{ui:3D}}: kierrä mallia vapaasti.
- {{ui:Pohjakuva}}: katso suoraan alas yhdelle tasolle. Painikkeiden viereen ilmestyy tasoluettelo. Kaikki yli 1.5 m tason yläpuolella oleva leikataan pois, jotta tason voi nähdä ja napsauttaa selvästi.
- {{ui:Julkisivu}}: katso suoraan yhtä kirjaimellista ruudukkoviivaa (Ruudukko A, Ruudukko B …). Kirjaimellisten ruudukoiden luettelo ilmestyy. Näkyviin tulee vain teräs enintään 1 m:n päässä kyseisestä viivasta.
- Sovita-painike näkymäpalkin oikeassa päässä zoomaa näyttämään koko mallin.

Pienet pisteet merkitsevät jokaisen ruudukon leikkauspisteen jokaisella tasolla. Kun asetustyökalu on päällä, lähimpänä osoitinta oleva piste syttyy ja tilarivi nimeää sen, esimerkiksi ”A/2 tasolla Taso 1”. Värit erottavat sauvatyypit toisistaan: pilareilla, palkeilla, tukisauvoilla ja levyillä on kullakin oma värinsä, pulteilla ja ankkuripultit toisella, anturat ovat läpinäkyviä ja raudoitus piirretään putkina. Reiät näkyvät tummina tulppina; lovet ovat leikattuina.

Kääntäminen, panorointi ja zoomaus: [Liikkuminen 3D-näkymässä](topic:navigate-3d).

Kun malli on tyhjä, näkymässä on lyhyt luettelo ”Aloita malli”. Tallennetun mallitiedoston voi myös pudottaa mihin tahansa näkymän kohtaan, jolloin se avautuu.

## Ominaisuudet-paneeli (oikealla)

Tämä paneeli näyttää sen mukaan, mitä tehdään, ja sen otsikko kertoo mitä: ”Malli”, ”Aseta palkki”, ”Palkki b2”, ”Päätylevyliitos”, ”Pohjalevy”, ”Anturaperustus F1”, ”3 valittu” tai ”Liitä”.

- **Ei mitään valittuna:** yhteenveto mallista (sauvat, liitokset, anturat, osat, merkit, pultit, teräksen ja raudoituksen paino, ruudukot, tasot).
- **Asetustyökalu päällä:** seuraavan osan asetukset (profiili, materiaali, sijainti, kierto ja pilareille {{ui:Ylös asti}}), valitun profiilin yhteenveto sekä {{ui:Lisää ruudukon mukaan}} -lomake asettamista varten ilman napsauttamista näkymässä.
- **Sauva valittuna:** sen nimi, profiili, materiaali, sijainti, kierto, kahden päänsä koordinaatit, sen merkit, leikkauspituus ja paino, sen reiät ja lovet sekä painikkeet liitoksille, sen valmistuspiirustukselle ja {{ui:Poista}}.
- **Liitos valittuna:** kaikki levy-, pultti- ja hitsiasetukset, sen tekemät pultit ja hitsi, sen varoitukset sekä {{ui:Käytä samanlaisiin}}.
- **Anturaperustus valittuna:** sen sijainti ja koko, alin raudoitusverkko, lähtötangot ja tankonumerot, joita se käyttää.
- **Useita kohteita valittuna:** kuinka monta sauvaa kutakin tyyppiä, liitosta ja anturaa, niiden teräspaino sekä {{ui:Kopioi}}, {{ui:Monista}} ja {{ui:Poista}}.
- **Liittäminen:** mitä leikepöydällä on, ja lomakkeet liittämiseen kirjoitetulla siirtymällä tai ruudukon leikkauspisteeseen, jonka valitset luetteloista.

Numerokentät ottavat muutoksen käyttöön, kun painat {{key:Enter}} tai poistut kentästä. Jokainen muutos on yksi vaihe, jonka voi kumota.

## Raportti-välilehdet (alla)

- {{ui:Ongelmat}}: kaikki, mitä DetailCraft ei voinut rakentaa tai mitä se haluaa tarkistettavan, ja jokaisella rivillä {{ui:Valitse}}-painike. Välilehti näyttää määrän sulkeissa.
- {{ui:Osaluettelo}}: osat, kokoonpanot sekä pultit ja ankkuripultit painoineen ja {{ui:Lataa CSV}}-linkillä. Napsauta osamerkkiä, niin kyseinen osa valitaan.
- {{ui:Taivutusluettelo}}: jokainen tankonumero kaikissa anturoissa ja {{ui:Lataa CSV}}-linkki.

Kun välilehti on kohdistettuna, {{key:Left}} ja {{key:Right}} siirtävät välilehtien välillä.

## Tilarivi

Alareunan palkissa on kolme osaa: ruudukon leikkauspiste osoittimen alla asettamisen aikana, viimeisin viesti (mitä juuri tapahtui tai miksi jokin hylättiin) sekä käynnissä olevat yhteissummat osista, pulteista, teräksen painosta ja raudoituksen painosta. Kun toiminto ei näytä tekevän mitään, lue ensin tämän palkin viesti.

Selainvälilehden otsikko alkaa pisteellä (•), kun mallissa on tallentamattomia muutoksia.

## Kapealla näytöllä

Alle noin 760 pikselin leveydellä sarakkeet pinotaan: työkalurivi, näkymä, tilarivi, {{ui:Ominaisuudet}}, raportti-välilehdet ja viimeisenä {{ui:Malli}}-paneeli. Vieritä sivua päästäksesi niihin. DetailCraft on asetettu pöytä- tai kannettavan tietokoneen näytölle; puhelin sopii katseluun, ei detaljointiin.
