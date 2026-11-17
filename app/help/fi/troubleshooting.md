---
title: Vianmääritys
summary: Mitä DetailCraftin viestit tarkoittavat ja mitä tehdä, puuttuvasta 3D-näkymästä liitoksiin, joita ei voi rakentaa.
keywords: ongelma, virhe, ei toimi, ohje, korjaus, viesti, hylätty, webgl, tyhjä, varoitus, ei voi, ongelma
from: f8c3b2b1
---

Useimmat hylkäykset selitetään näytön alareunan tilarivillä tai {{ui:Ongelmat}}-välilehdellä. Lue ne ensin. Alla olevat viestit on lainattu sellaisina kuin DetailCraft ne näyttää.

## 3D-näkymä puuttuu

**”Tämä selain ei voinut käynnistää 3D-grafiikkaa (WebGL). Malli, raportit ja viennit toimivat yhä.”**

Selain ei voinut käynnistää WebGL:ää, 3D-grafiikkaa, jolla DetailCraft piirtää.

1. Päivitä selain uusimpaan versioon.
2. Ota laitteistokiihdytys käyttöön ja käynnistä selain uudelleen (ks. alla).
3. Päivitä näytönohjaimen ajuri tai kokeile toista selainta. Etätyöpöydillä ja virtuaalikoneilla ei usein ole WebGL:ää.
4. Voit silti työskennellä: sijoita jäseniä {{ui:Lisää ruudukon mukaan}} -lomakkeella, lue raportit ja vie tiedostoja. Vain näkymässä napsauttaminen vaatii WebGL:n.

:::chromium
Ota laitteistokiihdytys käyttöön avaamalla **Asetukset, Järjestelmä** ja ota käyttöön **Käytä grafiikkakiihdytystä, kun se on käytettävissä**, ja käynnistä sitten uudelleen.
:::

:::firefox
Ota laitteistokiihdytys käyttöön avaamalla **Asetukset, Yleiset, Suorituskyky**, poista valinta kohdasta **Käytä suositeltuja suorituskykyasetuksia** ja valitse **Käytä laitteistokiihdytystä, kun se on käytettävissä**. Käynnistä Firefox uudelleen.
:::

:::safari
Safarissa WebGL on oletuksena päällä. Päivitä macOS, jos näkymä ei vieläkään käynnisty, ja tarkista, ettei mikään laajennus estä sitä.
:::

Lisää aiheesta: [Selaimet ja tietokoneet](common:browsers).

## Näkymää napsauttaminen ei tee mitään

- **Napsautuksen lähellä ei ole leikkauspistettä.** Sijoitustyökalut kiinnittyvät vain ruudukon leikkauspisteisiin. Napsautus kaukana pisteistä ei tee mitään. Siirry lähemmäs, kunnes piste syttyy.
- **Työkalu on {{ui:Valitse}} ja napsautit tyhjää kohtaa.** Se tyhjentää valinnan.
- **Vedit.** Painallus ja vapautus, jotka ovat yli muutaman pikselin päässä toisistaan, on veto, joka kääntää tai siirtää näkymää.
- **Osa on leikattu pois.** {{ui:Pohjakuva}}- ja {{ui:Julkisivu}}-näkymissä leikkauksen ulkopuolinen teräs on piilossa, eikä sitä voi napsauttaa. Vaihda {{ui:3D}}-näkymään.
- **Leikkauspiste on väärällä tasolla.** {{ui:3D}}-näkymässä useiden tasojen leikkauspisteet voivat mennä päällekkäin, ja napsautus ottaa lähimmän. Käytä {{ui:Pohjakuva}}- tai {{ui:Julkisivu}}-näkymää.

## Sijoitusviestit

| Viesti | Mitä tehdä |
|---|---|
| Pilarille ei ole tasoa Level 2:n yläpuolella, johon se ylettyisi. Lisää ensin taso. | Lisää taso kohdassa {{ui:Tasot}} tai napsauta alempaa tasoa |
| Valitse toisen pään eri leikkauspiste. | Napsautit samaa pistettä kahdesti |
| Päät ovat sama piste. | Kohdassa {{ui:Lisää ruudukon mukaan}} lähtö- ja kohdepiste ovat samat |
| Lisää ruudukkoviivoja vasemmalle, jotta jäseniä voi sijoittaa. | Mallissa ei ole ruudukkoviivoja yhteen suuntaan |
| Tuntematon profiili ”…” | Profiilia ei ole luettelossa eikä mallin omissa profiileissa. Valitse luettelosta |
| Kirjoita numero. | Numerokenttä jäi tyhjäksi tai siinä on tekstiä |

## Liitoksia ei voi rakentaa

### ”Tämä palkki ei pääty pilarin linjalle.”

Päätylevyt vaativat palkin pään olemaan tarkalleen pilarin pystylinjalla sen alareunan ja yläreunan välillä (1 mm:n tarkkuudella). Tarkista palkin {{ui:Päät (x, y, z mm)}} ja pilarin sijainti.

### ”Tämä palkki liittyy pilarin uumaan tai on kulmassa”

Tai {{ui:Ongelmat}}-listassa: ”Pilarin uumaan liittyviä palkkeja ei vielä rakenneta: käännä pilaria 90° tai käytä toista liitosta.”

Palkki liittyy pilarin uumaan. Valitse pilari, aseta {{ui:Kierto (°)}} arvoon 90 ja yritä uudelleen. Vinoja liitoksia ei vielä rakenneta.

### ”Päätylevyt rakennetaan vain vaakasuorille palkeille (tämä palkki on kalteva).”

Palkin molempien päiden on oltava samalla korkeudella.

### ”Päätylevyt vaativat palkin pystyasennossa (kierto 0).”

Aseta palkin {{ui:Kierto (°)}} takaisin arvoon 0.

### ”Päätylevyt vaativat I-profiilin palkin.” / ”Päätylevyt vaativat I-profiilin pilarin.”

Vain I-profiilit (W, IPE, HEA, HEB tai oma I-profiili) saavat päätylevyt.

### ”Palkin pää ei ole enää pilarin linjalla.”

Siirsit palkin tai pilarin liitoksen lisäämisen jälkeen. Siirrä se takaisin tai poista liitos.

### ”Liitokset leikkaavat tämän jäsenen olemattomiin.”

Molempien päiden liitokset leikkaavat jäsentä takaisin enemmän kuin sen pituus on, esimerkiksi hyvin lyhyt palkki kahden syvän pilarin välissä. Tarkista jäsenen päät ja levyn paksuus.

### ”Ei muita tämän kaltaisia liitoksia ilman liitosta …”

{{ui:Samanlaiset}} kopioi vain liitoksiin, joissa on sama palkkiprofiili, sama pilariprofiili ja sama liitostyyppi (palkki laipan kohdalla), ja joissa ei vielä ole liitosta.

### ”Molemmissa päissä on jo liitokset.” / ”Tässä pilarissa on jo pohjalevy.”

Valitse olemassa oleva liitos muuttaaksesi sitä, tai poista se ensin.

## Varoitukset Ongelmat-välilehdellä

Varoitukset eivät estä liitoksen tai perustuksen rakentamista; ne pyytävät tarkistamaan sen. Reuna- ja väliin liittyvät varoitukset käyttävät EN 1993-1-8 -taulukon 3.3 vähimmäisarvoja (reuna 1.2 × reikä, väli 2.2 × reikä, ratka 2.4 × reikä). Jos projektissa on muut säännöt, varoitus ei välttämättä päde, sillä DetailCraft ei suunnittele liitoksia.

”Reikä on osan päästä ulkopuolella” tarkoittaa, että reiän x on pienempi kuin 0 tai suurempi kuin leikkauspituus. Muista, että x mitataan leikkauksen alusta sen jälkeen, kun liitokset ovat leikanneet osaa takaisin.

## Perustusmuutokset hylätään

| Viesti | Mitä tehdä |
|---|---|
| Betonipeite ei jätä tilaa raudoitukselle tässä perustuksessa. | Tee perustuksesta suurempi tai betonipeitteestä pienempi |
| Perustus on liian matala kahdelle raudoituskerrokselle betonipeitteen sisällä. | Tee siitä syvempi tai pienennä betonipeitettä |
| Aloituspalkit eivät mahdu perustukseen 75 mm:n betonipeitteellä. | Vähennä aloituspalkkeja, tiivistä väliä tai suurenna perustusta |
| Tankojen välin on oltava 50–1000 mm. | Kirjoita väli tältä väliltä |
| Pituuden on oltava 300–50000 mm. | Perustuksen kooilla on rajat: pituus ja leveys 300–50000, syvyys 150–10000 |

## Ruudukot ja tasot hylätään

| Viesti | Mitä tehdä |
|---|---|
| Numeroiduissa ruudukoissa anna yksi väli jokaisen viivaparin väliin (4). | Laske välit: viisi viivaa tarvitsee neljä väliä |
| Kirjaimilla merkityissä ruudukoissa välien on oltava positiivisia millimetrejä. | Ei nollia, negatiivisia arvoja eikä tekstiä |
| Numeroiduissa ruudukoissa ruudukon tunnisteiden on oltava erilaisia. | Kahdella viivalla on sama tunniste |
| Enintään 60 ruudukkoviivaa kumpaankin suuntaan. | Jaa malli |
| Säilytä vähintään yksi taso. | Poistit kaikki tasorivit |
| Jokaisella tasolla on oltava nimi. / Kahdella tasolla on nimi ”…”. | Anna jokaiselle tasolle eri nimi |

## Tiedoston avaaminen epäonnistuu

| Viesti | Syy |
|---|---|
| DetailCraft avaa omat mallinsa (.detailcraft.json). IFC-tuontia ei ole vielä toteutettu. | Tiedosto ei ole `.json`-tiedosto |
| Tämä ei ole DetailCraft-malli (ei JSON). | Tiedosto on vioittunut tai se on jokin muu JSON-tiedosto |
| Tämä ei ole DetailCraft-malli. | JSON-tiedosto toisesta ohjelmasta |
| Tämän mallin tallensi uudempi DetailCraft (muoto 2). | Avaa se sillä uudemmalla DetailCraft-versiolla, joka sen tallensi |
| Tiedosto on liian suuri DetailCraft-malliksi. | Yli 50 MB |

Kun tiedosto avautuu varoituksilla, kuten ”2 members were not valid and left out.”, muu malli on kunnossa. Älä tallenna alkuperäisen päälle ennen kuin olet tarkistanut, mitä jätettiin pois.

## Viennit

| Viesti | Syy |
|---|---|
| Vietävää ei ole vielä. | {{ui:IFC}} tyhjällä mallilla |
| Ei I-profiilin tai levyjen osia, joista kirjoitetaan NC-tiedostoja. | Mallissa on vain kanavia, kulmaraudoja tai putkia |
| Ei kirjoitettu (toistaiseksi vain I-profiilit ja levyt): … | Nämä merkinnät eivät ole I-profiileja tai levyjä; muut kirjoitettiin |
| Perustuksia ei ole, joten taivutusluetteloon ei tule tankoja. | {{ui:Taivutus}} ilman perustuksia |
| … merkkiä PDF-fontin ulkopuolella tulostetaan merkillä ”?”. | Mallin nimessä tai lujuusluokassa on merkkejä, joita PDF-fontista puuttuu |

{{ui:Valmistuspiirustus}} on harmaana: mallissa ei ole vielä osia.

## Lataukset eivät näy

Jokainen tallennus ja vienti on selaimen lataus. Tarkista selaimen latausluettelo. Jos selain kysyy ennen useiden tiedostojen lataamista tai estää lataukset tältä sivustolta, salli ne. Safarissa tarkista työkalurivin latauspainike.

## Näppäimet eivät tee mitään

- Kursori on teksti- tai numerokentässä: työkaluavaimet ja {{key:Delete}} ohitetaan siellä, jotta voit kirjoittaa. Paina {{key:Tab}} tai napsauta näkymää.
- Valintaikkuna on auki: sulje se ensin.
- Selain hallitsee näppäimistöä (esimerkiksi osoiteriviä): napsauta DetailCraftin sisällä.
- {{key:Ctrl+Shift+F}} käyttää Controlia myös Macissa.

## Offline-ongelmat

Sovelluspalkin {{ui:Tallenna offline-käyttöön}} -painike näyttää offline-kopion tilan. Tallentamisen toiminta: [Offline-työskentely](common:offline).

| Painikkeen teksti | Mitä se tarkoittaa | Mitä tehdä |
|---|---|---|
| {{ui:Tallenna offline-käyttöön}} | Tässä selaimessa ei ole vielä offline-kopiota | Valitse se ollessasi verkossa |
| Saving 5 of 20 | Tallennus on käynnissä | Odota, kunnes näkyy {{ui:Offline valmis}}. Pidä välilehti auki |
| {{ui:Offline valmis}} | DetailCraft, sen 3D-näkymä, kaikki viennit ja tämä ohje toimivat ilman yhteyttä | Ei mitään. Napsauta painiketta, jos haluat {{ui:Tallenna uudelleen (hae uusin versio)}} tai {{ui:Poista offline-kopio}} |
| {{ui:Tallennus ei onnistunut}} | Osa tiedostoista ei latautunut | Tarkista yhteys ja napsauta painiketta yrittääksesi uudelleen |
| {{ui:Offline ei käytettävissä}} | Tämä ikkuna ei voi säilyttää offline-kopiota: yksityiset ikkunat ja jotkin hallitut tietokoneet estävät sen | Käytä tavallista ikkunaa tai työskentele verkossa |

Jos olet offline-tilassa etkä painike näytä {{ui:Offline valmis}}, älä lataa sivua uudelleen äläkä sulje välilehteä: se, mikä on jo ladattu, toimii edelleen. Tallenna malli painikkeella {{key:Mod+S}} ja odota, kunnes olet taas verkossa.

## Tallentamattomat työt

Jos selain kysyy, poistutaanko sivulta, mallissa on tallentamattomia muutoksia. Valitse jää sivulle ja paina sitten {{key:Mod+S}}. DetailCraft ei voi palauttaa mallia sen jälkeen, kun välilehti on suljettu.

## Yhä ongelmia

Kirjaa ylös, mitä teit ja täsmälleen mikä viesti tuli, ja kerro siitä [tukisivun](https://getcadcraft.com/support) kautta.
