---
title: Uutta versiossa 0.9
summary: Ison-Britannian Blue Book -teräskoot ja epäsymmetriset kulmateräkset, valmistuspiirustukset jokaiselle osalle yhdessä PDF-sarjassa, Omat profiilit mukautetuille poikkileikkauksille, P-Delta ja luonnontaajuudet, ASCE 7 -tuulikuormat, seisminen paikka ja yhdistelmät sekä elävät osoittimet ja seuraaminen.
keywords: uutta, mitä uutta, julkaisutiedot, muutosloki, 0.9, uk-teräs, blue book, ub, uc, pfc, shs, rhs, chs, epäsymmetrinen kulmarauta, valmistuspiirustus, valmistuspiirustukset, arkkisarja, osamerkintä, pdf, omat profiilit, mukautettu profiili, p-delta, toisen kertaluvun, luonnontaajuus, elementtimenetelmä, modaalinen massa, tuulikuorma, asce 7, seisminen, paikkaluokka, usgs, kuormitusyhdistelmät, lrfd, asd, elävä, osoittimet, seuraa, ihmiset, työkaluvihjeet, mitä uutta, julkaisutiedot, muutosloki, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, asennus, nosturi, kuormituskaavio, elokuva, autopilotti, liitokset, raudoitus, ahtaus, perustus, anturat, laatta, painuma, runko, puu, kevytpalkki, leikkuulista, rakennettavuus, hitsin saatavuus, toimittaja, varasto, toimitusaika, mikä hajoaa ensin, betoni, seisminen, laatta, kielet, avustaja
from: 4c95a2de
---

Tämä on, mitä muuttui DetailCraft 0.9:ssä verrattuna versioon 0.8.1. Version 0.9 mukana tulevat Ison-Britannian teräskoot, valmistuspiirustus jokaiselle osalle kerralla, suurempi {{ui:Analyysi}}-välilehti kehille ja näkymä toistenne osoittimista, kun työskentelette yhdessä.

## Uutta

### Ison-Britannian teräs ja valmistuspiirustukset

- **Ison-Britannian teräskoot.** Profiililuettelot sisältävät nyt 976 kokoa Steel for Life Blue Book -julkaisusta: UB, UC, PFC, EA, UEA, CHS, SHS ja RHS. Kylmämuokatut onttoprofiilit on pidetty erillään (niiden nimet alkavat CF). Nimet kirjoitetaan ensin suvun mukaan, kuten UB305x165x40 tai SHS100x100x5.0. Myös piirustuksissa käytettävällä tavalla kirjoitettu nimi toimii: 305x165x40 UB, L100x100x10, SHS100x5. Katso [Profiilikirjasto](topic:profile-catalog).
- **Epäsymmetriset kulmateräkset.** UEA-kulmateräkset säilyttävät molemmat siipensä IFC-tuonnissa ja -viennissä sekä NC-tiedostoissa, ja peilaus kääntää kappaleen päästä päähän.
- **Kaikki valmistuspiirustukset kerralla.** Valitse {{ui:Valmistuspiirustus}} ryhmästä {{ui:Tuloste}}, kun mitään ei ole valittu. Ikkuna listaa jokaisen osamerkinnän, esikatselee mitä tahansa niistä, ja {{ui:Lataa kaikki}} tallentaa yhden PDF-tiedoston, jossa on sivu jokaiselle merkinnälle, kukin otsikoitu "Arkki 3 / 42". {{ui:Lataa PDF}} tallentaa sen arkin, jota katsot. Kanavilla, kulmateräksillä ja onttoprofiileilla on nyt myös arkit. Katso [Tee valmistuspiirustuksia](topic:shop-drawings).
- **Omat profiilit.** Mukautetun profiilin voi nyt säilyttää jokaiselle uudelle mallille. Mukautetun profiilin lomakkeessa jätä {{ui:Säilytä omissa profiileissa}} valituksi. Sen alla oleva {{ui:Omat profiilit}}-luettelo sisältää {{ui:Säilytä}}, {{ui:Käytä tässä}} ja {{ui:Poista}}. Luettelo säilyy tässä selaimessa (enintään 200), ei tililläsi. Katso [Levyt ja profiilit](topic:plates-and-profiles).

### Analyysi

- **Toisen kertaluvun (P-Delta).** Valitse {{ui:Toisen kertaluvun (P-Delta)}} kohdassa {{ui:Suorita}} {{ui:Analyysi}}-välilehdellä, ja normaalivoimat vaikuttavat taipuneeseen kehään. Levyt ja jäykät lattiat pysyvät ensimmäisen kertaluvun mukaisina, ja siitä annetaan varoitus. Katso [Voimat, reaktiot ja taipumat](topic:frame-analysis).
- **Luonnontaajuudet.** Tulosten alla oleva {{ui:Elementtimenetelmä: luonnontaajuudet}}-lohko löytää saman mallin alimmat muodot jaksoineen ja tehollisine modaalisine massoineen ja näyttää muodon mallissa. Katso [Voimat, reaktiot ja taipumat](topic:frame-analysis).
- **Tuulikuormat ja seisminen paikka.** Kolme uutta lohkoa {{ui:Analyysi}}-välilehdellä: {{ui:Tuulikuormat (ASCE 7 suunnattu menetelmä)}}, {{ui:Seisminen paikka ja järjestelmä (ASCE 7)}} ja {{ui:ASCE 7 kuormitusyhdistelmät}}. Katso [Tuuli, seisminen paikka ja ASCE 7 -yhdistelmät](topic:wind-seismic-combinations).

### Yhdessä työskentely

- **Osoittimet ja nimet.** Live-istunnossa jokaisen henkilön osoitin piirtyy malliin nimensä ja värinsä kanssa, ja valittu kohde saa ruudun.
- **Seuraa henkilöä.** Avaa istunnon {{ui:Henkilöt}} ja valitse nimen kohdalta {{ui:Seuraa}}; näkymäsi liikkuu heidän mukanaan. Isäntä voi valita {{ui:Pyydä kaikkia seuraamaan minua}}. Katso [Seuraa henkilöä Live-istunnossa](topic:follow-in-live).

### Kaikissa sovelluksissa

- Työkaluvihjeet ovat Bootstrap-työkaluvihjeitä, aloitusvihjekortissa on sulkupainike, välilehtirivit vierivät sivusuunnassa, kun ne eivät mahdu, ja selaimen välilehti näyttää avoimen asiakirjan nimen, jota seuraavat DetailCraft ja CadCraft.

## Korjattu

- Mukautettu profiili hävisi, kun aloitit uuden mallin.
- Kanavat, kulmateräkset ja onttoprofiilit puuttuivat valmistuspiirustussarjasta.

## Rajoitukset

- Tuuli-, seisminen ja elementtimenetelmälohko ovat tarkistusapuja. Insinöörisi tarkistaa tulokset; ne eivät ole mitoitustarkistus. USGS-haku testattiin korvaavalla palvelulla, ei oikealla palvelulla.
- Elementtimenetelmää ja P-Deltaa on verrattu käsin ja suljetuilla kaavoilla laskettuihin tuloksiin, ei oikeaan rakennukseen. Nurjahdusanalyysi ei ole toteutettu.
- Yksikään Ison-Britannian valmistaja ei ole vielä kokeillut Ison-Britannian kokoja, eikä epäsymmetristen kulmateräksten NC-tiedostot ole ajettu koneella.
- Valmistuspiirustussarja on vain PDF-muodossa.
- Muut kielet kuin englanti ovat konekäännöksiä.
- Windows-asennusohjelmat eivät ole koodilla allekirjoitettuja (Lisätietoja, sitten Suorita silti); macOS-levykuvaa ei ole notarisoitu (napsauta hiiren oikealla, sitten Avaa).

Aiemmat muutokset ovat tämän sivun version 0.8 ja 0.8.1 muistiinpanoissa.

## Aiemmin: 0.8 ja 0.8.1

Tämä on, mitä muuttui DetailCraft 0.8:ssa (1. marraskuuta 2026) ja 0.8.1:ssä (2. marraskuuta 2026) verrattuna versioon 0.7. Versio 0.7 tarkisti terässauvat; versio 0.8 suunnittelee nostot, ehdottaa liitokset, tarkistaa perustukset ja raudoituksen sekä rakentaa puu- ja kevytrakenteiset seinät, lattiat ja katot.

### Uutta

**Asennus**

- **Asennussuunnitelma ja elokuva.** Kohdassa {{ui:Asennus}} kuvaat nosturin (missä se seisoo, sen korkein koukku, varustus, joka ei ole kuormituskaaviossa) ja kirjoitat sen kuormituskaavion rivit. DetailCraft nostaa mallia yhden kokoonpanon kerrallaan vaihejärjestyksessä ja kerros kerrokselta, ja tarkistaa jokaisen noston kaaviota vasten sen ulottuvuudella ja asettamaasi marginaalia vasten. {{ui:Tallenna elokuva}} kirjoittaa yhden HTML-tiedoston, joka toistuu ilman verkkoa millä tahansa selaimella, myös puhelimella. Nostot, jotka ylittävät kaavion, menevät sen yli tai ovat liian korkealla, ovat kohdassa {{ui:Ongelmat}}. Kyseessä on suunnitelma antamistasi luvuista, ei nostosuunnitelma. Katso [Asennussuunnitelma ja elokuva](topic:erection-movie).

**Liitokset**

- **Liitosautopilotti.** {{ui:Autopilotti}}-välilehti katsoo jokaista liitosta, jolla ei ole liitosta, ja ehdottaa yhtä muotojen perusteella: pohjalevyt, leikkauslevyt, päätylevyt palkeille, jotka merkitset momenttipalkeiksi, jatkokset ja liitoslevyt. Anna tasainen kuorma tai toisen pään leikkausvoima, ja pulttien määrä seuraa pultin mitoituslujuutta. {{ui:Lisää ne kaikki}} lisää ehdotukset yhtenä kumoamisvaiheena. Ne ovat lähtöarvoja tarkistettavaksi, eivät liitossuunnittelua.
- **Rakennettavuustarkistukset.** {{ui:Ongelmat}} kertoo pultista, johon avain ei yllä, pulteista, jotka ovat liian lähellä hylsylle, kulmahitseistä, jotka ylittävät kokorajansa, ja onttoprofiileista, jotka keräävät vettä. Hitsin saatavuus on uusi: kehähitsi, johon hitsaajan poltin ei ylety, luetellaan osan kanssa, joka on tiellä, ja hitsin osuuden kanssa, johon se vaikuttaa. Katso [Rakennettavuustarkistukset](topic:constructability).

**Perustukset ja raudoitus**

- **Perustustarkistukset.** {{ui:Perustus}}-välilehti tarkistaa anturat, yhdistetyt anturat ja laatat kuvaamallasi maaperällä: kantavuus, liukuminen ja kaatuminen käyttökuormista; taivutus, leikkaus, lävistys, ankkurointi ja vähimmäisteräs mitoituskuormista (ACI 318-19). Pilari reunan tai nurkan lähellä tarkistetaan osalla, joka leikataan perustuksen reunasta. Painuma saadaan maan kimmokertoimesta, joustava laatta ratkaistaan jousilla alustan kimmokertoimesta, ja paaluryhmillä ja tukimuureilla on omat paneelinsa. Pilarikuormat voi kirjoittaa tai ottaa {{ui:Analyysi}}-välilehdeltä. Katso [Perustustarkistukset](topic:foundation-checks).
- **Raudoituksen tiiviyskartta.** {{ui:Ahtaus}}-välilehti piirtää jokaisesta anturasta lämpökartan ylhäältä katsottuna: kohdat, joissa tangot jättävät liian vähän tilaa betonin laskeutua, verrattuna vapaan välin sääntöön ja, jos annat ne, suurimpaan kiviainekseen ja tärypään. Katso [Raudoituksen tiiviyskartta](topic:rebar-congestion).

**Runko ja toimitus**

- **Puu- ja kevytrakenteinen runko.** {{ui:Runko}}-välilehti rakentaa seinä-, lattia- ja kattopaneelit jokaisella kappaleella, leikkuuluettelon, ostettavan varaston ja mittakaavassa olevan valmistuspiirustuksen. {{ui:Aseta sauvoiksi}} asettaa kappaleet malliin, ja {{ui:PDF-arkit}} tallentaa yhden arkin jokaisesta paneelista. Koot, välit ja ylityksset ovat sinun; DetailCraft ei tarkista, kantavatko ne kuormaa. Katso [Puu- ja kevytrakenteiset rakennepaneelit](topic:framing-panels).
- **Toimittajan varasto ja toimitusajat.** {{ui:Toimitus}}-välilehti lukee toimittajan varastoluettelon (CSV) ja näyttää jokaiselle leikkuuluettelon profiilille, onko varastossa riittävästi ja kuinka pitkä odotusaika on. Puutteet ja myöhässä olevat profiilit ovat kohdassa {{ui:Ongelmat}}. Mitään ei tilata. Katso [Toimittajan varasto ja toimitusajat](topic:supplier-stock).

**Analyysi ja mitoitus**

- **Mikä hajoaa ensin?** {{ui:Analyysi}}-välilehden painike löytää hallitsevan lujuusyhdistelmän, heikoimman sauvan, kuinka paljon kuormat voivat kasvaa ennen kuin ensimmäinen sauva saavuttaa rajansa, ja heikoimman päätylevyn tai leikkauslevyn, jos sen pulttien leikkauslujuus tunnetaan. Se tarvitsee ensin yhdistelmät ja mitoitusstandardin. Kantavuutta, lohkoleikkausta, hitsejä ja vääntöä ei tarkisteta. Yhdistetty avustajasi voi pyytää samaa.
- **Live.** Valitse {{ui:Live: ratkaise uudelleen jokaisen muokkauksen jälkeen}}, ja kehä ratkaistaan uudelleen jokaisen muokkauksen jälkeen.
- **Betonia ja muuta.** Hoikka pilari kehässä, joka ei heilu, mitoitetaan suurennetulle momentilleen (ACI 318-19 6.6.4.5). Seismisen jakson voi ottaa analyysistä Rayleighin menetelmällä. Levyistä tehty laatta saa kullekin kerrokselle tarvitsemansa teräksen sen momenteista ja yksisuuntaisesta leikkauksesta. Katso [Tarkista betonirakenteet ja tee seismiset kuormat](topic:concrete-and-seismic).
- **Insinöörin tarkistettavaksi.** Perustus-, betoni- ja Mikä hajoaa ensin -tulokset ovat apuvälineitä. Tuulikuormia ei ole toteutettu.

**Kaikissa sovelluksissa**

- **Kielet.** Ohje on 54 kielellä. Muut kuin englanti ovat konekäännöksiä, kunnes äidinkielinen puhuja lukee ne. Kymmenen on uutta: liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filippiini, swahili ja uzbekki.
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} valitsee rivitys, 2 riviä tai 1 rivi. Palkki, joka jo mahtuu, pysyy ennallaan; muut vierivät sivusuunnassa.
- **Ominaisuusruudukko.** Perustuksen kentät käyttävät yhteistä ruudukkoa: taitettavat ryhmät ja tiivis tiheys. Kirjoitettu laskutoimitus, kuten 2*450, toimii yhä.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, ohjain ja MIDI voivat ohjata sovelluksia. Katso [Liikkuminen 3D:ssä](topic:navigate-3d).
- **Ongelmapaneeli.** Yllä olevien uusien tarkistusten varoitukset näkyvät samassa {{ui:Ongelmat}}-paneelissa kuin ennenkin.
- **Yhdistä tekoälysi.** Oma avustajasi, yhdistettynä CadCraft Studioon, toimii kaikkien kahdeksan sovelluksen kanssa ja näkee vain sen, minkä sallit. Yhden napsautuksen yhdistäminen, hostattu liitin ja oma API-avaimesi Studiossa ovat vielä tulossa. Katso [Käytä DetailCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **Kielet Studiossa.** Studio ja pakatut versiot voivat vaihtaa kieltä ajon aikana; aiemmin ne olivat vain englanniksi. Sitä ei ole vielä testattu jokaisella alustalla: kerro, jos kieli ei vaihdu.
- **Ikkunalla valitseminen.** Versio 0.8.1 asennusohjelmat sisältävät ikkunalla valinnan käyttäytymisen, joka oli jo oikein versiossa 0.8:n verkkoversiossa; vanhempi asennusohjelma ei sitä sisältänyt.
- **Tabletit pystysuunnassa.** Ylimääräinen ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu alkaa 760 pikselistä tai vähemmästä.

### Ei vielä tässä versiossa

- **NC-tiedoston lähetys koneelle** ei ole julkaistu.
- **Tuulikuormat** betonille eivät ole toteutettuja, ja betoni- ja perustustarkistukset ovat insinöörin tarkistettavaksi.
- **Koodin allekirjoitus.** Windows-asennusohjelmat ja macOS:n .dmg-tiedosto eivät ole allekirjoitettuja, joten Windows saattaa varoittaa ja macOS pyytää hiiren oikeaa painiketta ja sitten Avaa.

Aiemmat muutokset ovat kohdassa [Mitä uutta versiossa 0.7](topic:whats-new-0-7).
