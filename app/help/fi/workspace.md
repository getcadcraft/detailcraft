---
title: Kierros näyttöön
summary: Jokainen DetailCraftin palkki, paneeli ja välilehti näyttönimellään ja se, mihin kukin on tarkoitettu.
keywords: näyttö, asettelu, työkalurivi, paneelit, ominaisuudet, tilarivi, raportit, käyttöliittymä, välilehdet
from: 454f74fd
---

DetailCraft täyttää selainikkunan sovelluspalkin alapuolella. Ylhäältä alas: työkalurivi, sitten kolme saraketta ({{ui:Malli}}-paneeli, näkymä, {{ui:Ominaisuudet}}-paneeli), sitten raporttivälilehdet ja tilarivi.

## Sovelluspalkki

Aivan ylhäällä oleva kapea palkki kuuluu CadCraft-sivustolle, ei mallille. Siinä näkyvät sovelluksen nimi ja versio, linkki kohtaan {{ui:Tietoja: DetailCraft}}, {{ui:Ohje}} (tai {{key:F1}}) tähän ohjeeseen, {{ui:Tallenna offline-käyttöön}}, näyttötilapainike sekä {{ui:Paperi}} / {{ui:Malli}} -kytkin.

- {{ui:Tallenna offline-käyttöön}} säilyttää DetailCraftin, sen 3D-näkymän ja tämän ohjeen selaimessasi, jotta se aukeaa ilman yhteyttä. Tallennuksen jälkeen siinä lukee {{ui:Offline valmis}}; napsauta sitä silloin saadaksesi {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}}. Katso [Työskentely offline-tilassa](common:offline).
- {{ui:Paperi}} antaa vaalean näytön ja {{ui:Malli}} tumman. 3D-näkymä seuraa heti; mikään mallissasi ei muutu.
- Näyttötilapainike ja {{key:Ctrl+Shift+F}} kiertävät normaalin, koko näytön ja koko näytön piilotetuin palkein. {{key:Ctrl+Shift+F}} käyttää Control-näppäintä kaikilla tietokoneilla, myös Macilla. Kun palkit on piilotettu, osoita näytön yläreunaa (tai napauta sitä) tuodaksesi ne takaisin. {{key:Esc}} poistuu koko näytöstä.

## Työkalurivi

Työkalurivillä on viisi ryhmää. Pidä osoitinta painikkeen päällä nähdäksesi, mitä se tekee, ja sen näppäimen.

| Ryhmä | Painikkeet | Mitä ne tekevät |
|---|---|---|
| {{ui:Tiedosto}} | {{ui:Uusi}}, {{ui:Avaa}}, {{ui:Tuo IFC}}, {{ui:Tallenna}}, {{ui:Esimerkki}} | Aloittaa mallin, avaa tallennetun `.detailcraft.json`-tiedoston tai IFC-tiedoston, tallentaa mallin tai avaa esimerkkirungon |
| {{ui:Aseta}} | {{ui:Valitse}}, {{ui:Palkki}}, {{ui:Pilari}}, {{ui:Tukisauva}}, {{ui:Levy}}, {{ui:Anturaperustus}}, {{ui:Portaat}} | Työkalu, jota näkymän seuraava napsautus käyttää |
| {{ui:Liitä}} | {{ui:Päätylevyt}}, {{ui:Pohjalevy}} ja kohdassa {{ui:Lisää}}: {{ui:Leikkausliitoslevyt}}, {{ui:Jatkos}}, {{ui:Liitoslevy}}, {{ui:Samanlaiset}} | Lisää liitoksen valittuun palkkiin, pilariin tai tukisauvaan tai kopioi valitun liitoksen jokaiseen sen kaltaiseen liitokseen |
| {{ui:Muokkaus}} | {{ui:Kumoa}}, {{ui:Tee uudelleen}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Lisää}} | Siirtyy taaksepäin ja eteenpäin muokkauksissa; kopioi valinnan ja liittää sen. {{ui:Lisää}} avaa valikon, jossa on {{ui:Leikkaa}}, {{ui:Kopioi}}, {{ui:Liitä}}, {{ui:Liitä samaan paikkaan}}, {{ui:Monista}}, {{ui:Poista}}, {{ui:Valitse kaikki}} ja {{ui:Poista valinta}}, kukin näppäimineen |
| {{ui:Tuloste}} | {{ui:IFC}}, {{ui:NC-tiedostot}}, {{ui:BOM}}, {{ui:Valmistuspiirustus}}, {{ui:Piirustukset}} ja kohdassa {{ui:Lisää}}: {{ui:Taivutus}}, {{ui:Painoraportti vaiheittain}}, {{ui:KISS-tiedosto valmistusohjelmistolle}} | Lataa viennin tai avaa piirustusarkit |

Painikkeet ja valikon kohdat, jotka eivät voi toimia juuri nyt, ovat harmaina, ja osoittimen vieminen niiden päälle kertoo syyn. {{ui:Päätylevyt}} tarvitsee valitun palkin, {{ui:Pohjalevy}} valitun pilarin, {{ui:Samanlaiset}} valitun liitoksen, {{ui:Valmistuspiirustus}} valitun I-profiilin tai levyosan, {{ui:Kopioi}} valitun sauvan tai anturaperustuksen ja {{ui:Liitä}} jotakin kopioitua. Katso [Kopioi, liitä ja monista](topic:copy-paste).

## Malli-paneeli (vasen)

- {{ui:Malli}}: mallin {{ui:Nimi}}. Se nimeää jokaisen tallentamasi tai viemäsi tiedoston.
- {{ui:Ruudukot}}: ruudukkoviivat ja niiden välit sekä {{ui:Käytä ruudukkoja}}. Katso [Aseta ruudukot ja tasot](topic:grids-and-levels).
- {{ui:Tasot}}: yksi rivi kutakin tasoa kohti (nimi ja korko millimetreinä), {{ui:Lisää taso}} ja {{ui:Käytä tasoja}}.
- {{ui:Oma profiili}}: tee oma parametrinen poikkileikkaus. Suljettu, kunnes avaat sen.
- {{ui:Osamerkit}}: mallin jokainen osamerkki profiileineen, pituuksineen ja määrineen. Napsauta merkkiä valitaksesi ensimmäisen sen osan.

{{ui:Ruudukot}}, {{ui:Tasot}} ja {{ui:Oma profiili}} taittuvat pois: napsauta niiden otsikkoja.

## Näkymä (keskellä)

Näkymä näyttää mallin 3D:nä. Sen yläpuolella näkymäpalkissa on kolme painiketta ja luettelo:

- {{ui:3D}}: kierrä mallia vapaasti.
- {{ui:Pohjakuva}}: katso suoraan alas yhtä tasoa. Painikkeiden viereen ilmestyy tasoluettelo. Kaikki yli 1,5 m tason yläpuolella oleva leikataan pois, jotta näet ja voit napsauttaa tasoa selvästi.
- {{ui:Julkisivu}}: katso suoraan yhtä kirjaimella merkittyä ruudukkoviivaa (Ruudukko A, Ruudukko B …). Kirjainruudukkojen luettelo ilmestyy. Vain enintään 1 m:n päässä viivasta oleva teräs näytetään.
- Näkymäpalkin oikeassa päässä oleva sovitusnappi zoomaa näyttämään koko mallin.

Pienet pisteet merkitsevät jokaisen ruudukon leikkauspisteen jokaisella tasolla. Kun asetustyökalu on päällä, osoittimen lähin piste syttyy ja tilarivi nimeää sen, esimerkiksi "A/2 tasolla Taso 1". Värit erottavat sauvatyypit: pilareilla, palkeilla, tukisauvoilla ja levyillä on kullakin oma värinsä, pulteilla ja tangoilla toinen, anturaperustukset ovat läpinäkyviä ja raudoitus piirretään putkina. Reiät näkyvät tummina tulppina; loveukset on leikattu.

Miten kierrät, panoroit ja zoomaat: [Liiku 3D-näkymässä](topic:navigate-3d).

Kun malli on tyhjä, näkymä näyttää lyhyen "Aloita malli" -luettelon. Voit myös pudottaa tallennetun mallitiedoston mihin tahansa näkymään avataksesi sen.

## Ominaisuudet-paneeli (oikea)

Se, mitä tämä paneeli näyttää, riippuu siitä, mitä olet tekemässä, ja sen otsikko kertoo sen: "Malli", "Aseta palkki", "Palkki b2", "Päätylevyliitos", "Pohjalevy", "Anturaperustus F1", "3 valittu" tai "Liitä".

- **Mitään ei ole valittu:** yhteenveto mallista (sauvat, liitokset, anturaperustukset, osat, merkit, pultit, teräksen ja raudoituksen paino, ruudukot, tasot).
- **Asetustyökalu päällä:** seuraavan kappaleen asetukset (profiili, materiaali, sijainti, kierto ja pilareille {{ui:Ylös asti}}), valitun profiilin yhteenveto ja {{ui:Lisää ruudukon mukaan}} -lomake asettamiseen ilman napsautusta näkymässä.
- **Sauva valittu:** sen nimi, profiili, materiaali, sijainti, kierto, sen kahden pään koordinaatit, merkit, leikkauspituus ja paino, reiät ja loveukset sekä painikkeet liitoksille, sen valmistuspiirustukselle ja {{ui:Poista}}.
- **Liitos valittu:** jokaisen levyn, pultin ja hitsin asetus, sen tekemät pultit ja hitsi, sen varoitukset ja {{ui:Käytä samanlaisiin}}.
- **Anturaperustus valittu:** sen sijainti ja koko, alamatto, aloitusteräkset ja sen käyttämät tankomerkit.
- **Useita asioita valittu:** kuinka monta sauvaa kutakin tyyppiä, liitosta ja anturaperustusta, niiden teräspaino sekä {{ui:Kopioi}}, {{ui:Monista}} ja {{ui:Poista}}.
- **Liittäminen:** mitä leikepöydällä on, sekä lomakkeet liittämiseen kirjoitetulla siirtymällä tai luetteloista valitsemaasi ruudukon leikkauspisteeseen.

Lukukentät tulevat voimaan, kun painat {{key:Enter}} tai poistut kentästä. Jokainen muutos on yksi kumottavissa oleva vaihe.

## Raporttivälilehdet (alareunassa)

- {{ui:Ongelmat}}: kaikki, mitä DetailCraft ei voinut rakentaa tai mitä se haluaa sinun tarkistavan, {{ui:Valitse}}-painikkeella jokaisella rivillä. Välilehti näyttää määrän sulkeissa.
- {{ui:Osaluettelo}}: osat, kokoonpanot sekä pultit ja ankkuripultit painoineen ja {{ui:Lataa CSV}} -linkki. Napsauta osamerkkiä valitaksesi sen osan.
- {{ui:Taivutusluettelo}}: jokainen tankomerkki jokaisessa anturaperustuksessa ja {{ui:Lataa CSV}} -linkki.

Kun välilehti on kohdistettu, {{key:Left}} ja {{key:Right}} siirtävät välilehtien välillä.

## Tilarivi

Alareunan palkissa on kolme osaa: asetettaessa osoittimen kohdalla oleva ruudukon leikkauspiste, viimeisin viesti (mitä juuri tapahtui tai miksi jokin evättiin) sekä osien, pulttien, teräspainon ja raudoituspainon juokseva summa. Kun toiminto näyttää jäävän tekemättä mitään, lue ensin viesti tästä.

Selaimen välilehden otsikko alkaa pisteellä (•), kun mallissa on muutoksia, joita et ole tallentanut.

## Kapealla näytöllä

Alle noin 760 pikselin leveydellä sarakkeet pinotaan: työkalurivi, näkymä, tilarivi, {{ui:Ominaisuudet}}, raporttivälilehdet ja viimeisenä {{ui:Malli}}-paneeli. Vieritä sivua päästäksesi niihin. DetailCraft on asettelultaan tarkoitettu työpöytä- tai kannettavan näytölle; puhelimella voi katsella, mutta ei detaljoida.
