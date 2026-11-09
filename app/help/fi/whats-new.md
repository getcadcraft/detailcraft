---
title: Uutta versioissa 0.8 ja 0.8.1
summary: Nosturin kuormituskaaviosta tehty asennuselokuva, liitosautopilotti, raudoituksen ahtauskartta, perustustarkistukset, puu- ja kevytrakenteiset runkopaneelit, rakennettavuus- ja hitsin saavutettavuustarkistukset, toimittajan varasto, Mikä hajoaa ensin?, reaaliaikainen uudelleenratkaisu, lisää betonitarkistuksia ja versio 0.8.1:n korjaukset.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, asennus, nosturi, kuormituskaavio, elokuva, autopilotti, liitokset, raudoitus, ahtaus, perustus, anturaperustus, laattaperustus, painuma, runko, puu, kevytrakenne, sahausluettelo, rakennettavuus, hitsin saavutettavuus, toimittaja, varasto, toimitusaika, mikä hajoaa ensin, live, betoni, seisminen, laatta, kielet, avustaja
from: 6e33e052
---

Tässä ovat DetailCraft 0.8:n (1. marraskuuta 2026) ja 0.8.1:n (2. marraskuuta 2026) muutokset verrattuna versioon 0.7. Versio 0.7 tarkisti terässauvat; versio 0.8 suunnittelee nostot, ehdottaa liitokset, tarkistaa perustukset ja raudoituksen sekä kehystää puu- ja kevytrakenteiset seinät, lattiat ja katot.

## Uutta

### Asennus

- **Asennussuunnitelma ja elokuva.** Kuvaa {{ui:Asennus}}-välilehdessä nosturi (missä se seisoo, sen korkein koukku ja nostovarusteet, jotka eivät ole kuormituskaaviossa) ja kirjoita sen kuormituskaavion rivit. DetailCraft nostaa mallin yksi kokoonpano kerrallaan vaihejärjestyksessä ja kerros kerrokselta ja tarkistaa jokaisen noston kaavioon sen ulottuman kohdalla ja asettamasi marginaalia vastaan. {{ui:Tallenna elokuva}} kirjoittaa yhden HTML-tiedoston, joka toistuu offline-tilassa millä tahansa selaimella, myös puhelimella. Kaavion ylittävät, sen ulkopuolelle menevät tai liian korkeat nostot ovat kohdassa {{ui:Ongelmat}}. Kyse on suunnitelmasta antamistasi lukuarvoista, ei nostosuunnitelmasta. Katso [Asennussuunnitelma ja elokuva](topic:erection-movie).

### Liitokset

- **Liitosautopilotti.** {{ui:Autopilotti}}-välilehti tarkastelee jokaista liitosta, jolla ei ole liitosta, ja ehdottaa yhden muotojen perusteella: {{ui:Pohjalevy}}t, {{ui:Leikkausliitoslevyt}}, päätylevyt niille palkeille, jotka merkitsit momenttipalkeiksi, {{ui:Jatkos}}t ja {{ui:Liitoslevy}}t. Anna tasainen kuorma tai yksi päätyleikkausvoima, ja pulttien määrä seuraa pultin mitoituslujuutta. {{ui:Lisää ne kaikki}} lisää ehdotukset yhtenä kumoamisvaiheena. Ne ovat tarkistettavia lähtöarvoja, eivät liitossuunnittelua.
- **Rakennettavuustarkistukset.** {{ui:Ongelmat}} näyttää pultit, joihin avain ei yllä, pultit, jotka ovat liian lähellä hylsyä varten, kulmahitsit kokorajojensa ulkopuolella ja onttoprofiilit, jotka pidättävät vettä. Hitsin saavutettavuus on uusi: täyskehän kulmahitsi, johon hitsaajan polttimo ei yllä, luetellaan yhdessä esteenä olevan osan kanssa ja hitsin siitä kärsivän osuuden kanssa. Katso [Rakennettavuustarkistukset](topic:constructability).

### Perustukset ja raudoitus

- **Perustustarkistukset.** {{ui:Perustus}}-välilehti tarkistaa anturaperustukset, yhdistetyt anturat ja laattaperustukset kuvaamallasi maaperällä: kantavuuden, liukumisen ja kaatumisen käyttökuormista; taipuman, leikkauksen, lävistyksen, ankkuroinnin ja vähimmäisteräksen mitoituskuormista (ACI 318-19). Reunan tai nurkan lähellä olevan pilarin tarkistuksessa käytetään leikkausta, joka on katkaistu perustuksen reunaan. Painuma lasketaan maaperän muodonmuutosmoduulista, joustava laattaperustus ratkaistaan jousilla alustan moduulista, ja paaluryhmille ja tukimuureille on omat paneelinsa. Pilarikuormat voi kirjoittaa itse tai ottaa kohdasta {{ui:Analyysi}}. Katso [Perustustarkistukset](topic:foundation-checks).
- **Raudoituksen ahtauskartta.** {{ui:Ahtaus}}-välilehti piirtää jokaisesta anturasta lämpökartan ylhäältä katsottuna: kohdat, joissa tangot jättävät liian vähän tilaa betonin valumiselle alas, vertailtuna vapaan välin sääntöön ja, jos annat ne, suurimpaan kiviainekseen ja tärypäähän. Katso [Raudoituksen ahtauskartta](topic:rebar-congestion).

### Runkorakenteet ja toimitus

- **Puu- ja kevytrakenteinen runko.** {{ui:Runko}}-välilehti rakentaa seinä-, lattia- ja kattopaneelit kaikkine osineen, sahausluettelon, ostettavan varaston ja valmistuspiirustuksen mittakaavassa. {{ui:Aseta sauvoiksi}} asettaa osat malliin, ja {{ui:PDF-arkit}} tallentaa yhden arkin jokaisesta paneelista. Mitat, jaot ja ylipalkit määrittää käyttäjä: DetailCraft ei tarkista, kantavatko ne kuorman. Katso [Puu- ja kevytrakenteiset runkopaneelit](topic:framing-panels).
- **Toimittajan varasto ja toimitusajat.** {{ui:Toimitus}}-välilehti lukee toimittajan varastoluettelon (CSV) ja näyttää jokaisesta sahausluettelon profiilista, onko sitä varastossa riittävästi ja kuinka pitkä odotus on. Puutteelliset ja myöhässä olevat profiilit ovat kohdassa {{ui:Ongelmat}}. Mitään ei tilata. Katso [Toimittajan varasto ja toimitusajat](topic:supplier-stock).

### Analyysi ja suunnittelu

- **Mikä hajoaa ensin?** {{ui:Analyysi}}-välilehden painike etsii hallitsevan lujuusyhdistelmän, heikoimman sauvan, sen kuinka pitkälle kuormat voivat kasvaa ennen kuin ensimmäinen sauva saavuttaa rajansa, sekä heikoimman päätylevyn tai leikkausliitoslevyn, jos sen pulttien leikkauslujuus tunnetaan. Se tarvitsee ensin yhdistelmät ja mitoitusnormin. Kantavuutta, lohkoleikkausta, hitsejä ja vipuvoimaa ei tarkisteta. Yhdistetty avustaja voi kysyä saman.
- **Live.** Rastita {{ui:Live: ratkaise uudelleen jokaisen muokkauksen jälkeen}}, niin runko ratkaistaan uudelleen jokaisen muokkauksen jälkeen.
- **Betoni ja muuta.** Hoikka pilari siirtymättömässä kehyksessä mitoitetaan suurennetulle momentilleen (ACI 318-19 6.6.4.5). Seismisen jakson voi ottaa analyysistä Rayleighin menetelmällä. Levystä tehty laatta saa kustakin kerroksesta tarvittavan teräksen sen momenteista sekä yksisuuntaisen leikkauksen tarkistuksen. Katso [Betonirakenteiden tarkistus ja seismiset kuormat](topic:concrete-and-seismic).
- **Insinöörin tarkistettavaksi.** Perustus-, betoni- ja Mikä hajoaa ensin? -tulokset ovat apuvälineitä. Tuulikuormia ei ole vielä toteutettu.

### Kaikissa sovelluksissa

- **Kielet.** Ohje on 54 kielellä. Muut kuin englanninkieliset ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne; kymmenen on uusia (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili, uzbek).
- **Työkalurivin rivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} valitsee rivityksen, 2 riviä tai 1 rivi. Työkalurivi, joka mahtuu jo, pysyy ennallaan; loput vierittyvät sivusuunnassa.
- **Ominaisuusruudukko.** Anturan kentät käyttävät yhteistä ruudukkoa: taitettavat luokat ja tiivis asettelu. Kirjoitettu laskutoimitus, kuten 2*450, toimii edelleen.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, ohjain ja MIDI voivat ohjata sovelluksia. Katso [Liiku 3D-näkymässä](topic:navigate-3d).
- **Ongelmat-paneeli.** Yllä mainittujen uusien tarkistusten varoitukset näkyvät samassa {{ui:Ongelmat}}-paneelissa kuin ennenkin.
- **Yhdistä tekoäly.** Oma avustaja, joka on yhdistetty CadCraft Studion kautta, toimii kaikkien kahdeksan sovelluksen kanssa ja näkee vain sen, minkä käyttäjä sallii. Yhden napsautuksen yhdistäminen, isännöity liitin ja oma API-avain Studiossa ovat vielä tulossa. Katso [Käyttö tekoälyavustajan kanssa: DetailCraft](topic:use-with-ai-assistants).

## Korjattu versiossa 0.8.1

- **Kielet: Studio.** Studio ja pakatut versiot voivat vaihtaa kieltä ajon aikana; aiemmin ne olivat vain englanniksi. Sitä ei ole vielä testattu kaikilla alustoilla: ilmoita, jos kieli ei vaihdu.
- **Leikkaava ikkunavalinta.** 0.8.1:n asennusohjelmat sisältävät jo 0.8:n verkkoversiossa oikein toimivan ikkunavalinnan; vanhempi asennusohjelma ei sisältänyt sitä.
- **Tabletit pystyasennossa.** Ylimääräinen ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu vaihtuu, kun leveys on 760 px tai alle.

## Ei vielä tässä versiossa

- **Lähetys NC-koneelle** ei ole julkaistu.
- **Tuulikuormat** betonille eivät ole vielä toteutettu, ja betoni- ja perustustarkistukset ovat insinöörin tarkistettavaksi.
- **Koodin allekirjoitus.** Windows-asennusohjelmia ja macOS:n .dmg-tiedostoa ei ole allekirjoitettu, joten Windows voi varoittaa ja macOS pyytää napsauttamaan hiiren oikealla painikkeella ja valitsemaan sitten Avaa.

Aiemmat muutokset ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).
