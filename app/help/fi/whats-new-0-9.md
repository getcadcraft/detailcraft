---
title: Uutta versiossa 0.9 (aiemmin)
summary: UK Blue Book -teräskoot ja epätasaiset kulmateräkset, työpiirustukset jokaiselle osalle yhdessä PDF-sarjassa, Omat profiilit mukautetuille poikkileikkauksille, P-Delta ja luonnontaajuudet, ASCE 7 -tuulikuormat, seisminen paikka ja yhdistelmät sekä elävät kursorit ja Seuraa.
keywords: uutta 0.9, aiempi julkaisu, uutta, mitä uutta, julkaisutiedot, muutosloki, 0.9, UK-teräs, blue book, ub, uc, pfc, shs, rhs, chs, epätasainen kulmaterästä, työpiirustus, työpiirustukset, arkkisarja, osamerkki, pdf, omat profiilit, mukautettu profiili, p-delta, toisen kertaluvun, luonnontaajuus, elementtimenetelmä, modaalinen massa, tuulikuorma, asce 7, seisminen, maaluokka, usgs, kuormitusyhdistelmät, lrfd, asd, live, kursorit, seuraa, ihmiset, työkaluvihjeet, muutokset, 0.8, 0.8.1, versio, uudet ominaisuudet, asennus, nosturi, kuormituskaavio, elokuva, autopilotti, liitokset, raudoitus, ahtaus, perustus, anturaperustus, laattaperustus, painuma, runko, puu, kevytrakenne, sahausluettelo, rakennettavuus, hitsin saavutettavuus, toimittaja, varasto, toimitusaika, mikä murtuu ensin, betoni, laatta, kielet, avustaja
from: ab0c7f05
---

Tämä on muuttunut DetailCraft 0.9:ssä verrattuna versioon 0.8.1. Versio 0.9 tuo UK-teräskoot, työpiirustuksen jokaiselle osalle kerralla, suuremman {{ui:Analyysi}}-välilehden runkoja varten ja näkymän toistensa kursoreihin, kun työskentelette yhdessä.

## Uutta

### UK-teräskoot ja työpiirustukset

- **UK-teräskoot.** Profiililuetteloissa on nyt 976 kokoa Steel for Life Blue Book -julkaisusta: UB, UC, PFC, EA, UEA, CHS, SHS ja RHS. Kylmämuovatut onttoprofiilit ovat erillään (niiden nimet alkavat CF). Nimet kirjoitetaan perhe ensin, kuten UB305x165x40 tai SHS100x100x5.0, ja myös piirustusten tapa kirjoittaa ne toimii: 305x165x40 UB, L100x100x10, SHS100x5. Katso [Profiililuettelo](topic:profile-catalog).
- **Epätasaiset kulmateräkset.** UEA-kulmateräkset säilyttävät molemmat jalkansa IFC-tuonnissa ja -viennissä sekä NC-tiedostoissa, ja peilaus kääntää kappaleen päästä päähän.
- **Kaikki työpiirustukset kerralla.** Valitse {{ui:Valmistuspiirustus}} ryhmässä {{ui:Tuloste}}, kun mitään ei ole valittu. Ikkuna luettelee kaikki osamerkit, esikatselee mitä tahansa niistä, ja {{ui:Lataa kaikki}} tallentaa yhden PDF-tiedoston, jossa on sivu per osamerkki, otsikolla ”Arkki 3 / 42”. {{ui:Lataa PDF}} tallentaa sen, jota katsot. Kanavat, kulmateräkset ja onttoprofiilit saavat nyt myös arkit. Katso [Tee työpiirustukset](topic:shop-drawings).
- **Omat profiilit.** Mukautettu profiili voidaan nyt säilyttää jokaista uutta mallia varten. Mukautetun profiilin lomakkeessa jätä {{ui:Säilytä omissa profiileissa}} valituksi; sen alla oleva {{ui:Omat profiilit}}-luettelo sisältää {{ui:Säilytä}}-, {{ui:Käytä tässä}}- ja {{ui:Poista}}-toiminnot. Luettelo säilyy tässä selaimessa (enintään 200), ei tililläsi. Katso [Levyt ja profiilit](topic:plates-and-profiles).

### Analyysi

- **Toinen kertaluku (P-Delta).** Valitse {{ui:Toinen kertaluku (P-Delta)}} Suorita-painikkeen vieressä välilehdellä {{ui:Analyysi}}, jolloin normaalivoimat vaikuttavat taipuneeseen runkoon. Levyt ja jäykät lattiat pysyvät ensimmäisen kertaluvun mukaisina, ja niistä annetaan varoitus. Katso [Voimat, reaktiot ja taipumat](topic:frame-analysis).
- **Luonnontaajuudet.** Tulosten alla oleva {{ui:Elementtimenetelmä: luonnontaajuudet}}-lohko etsii saman mallin alimmat muodot jaksoineen ja tehollisine modaalisine massoineen sekä näyttää muodon mallissa. Katso [Voimat, reaktiot ja taipumat](topic:frame-analysis).
- **Tuulikuormat ja seisminen paikka.** Välilehdellä {{ui:Analyysi}} on kolme uutta lohkoa: {{ui:Tuulikuormat (ASCE 7 suunnattu menetelmä)}}, {{ui:Seisminen paikka ja järjestelmä (ASCE 7)}} ja {{ui:ASCE 7 kuormitusyhdistelmät}}. Katso [Tuuli, seisminen paikka ja ASCE 7 -yhdistelmät](topic:wind-seismic-combinations).

### Yhdessä työskentely

- **Kursorit ja nimet.** Live-istunnossa jokaisen henkilön osoitin piirretään malliin hänen nimensä ja värinsä kanssa, ja valittu kohde saa ruudun.
- **Seuraa henkilöä.** Avaa istunnossa {{ui:Ihmiset}} ja valitse nimen kohdalta {{ui:Seuraa}}; näkymäsi liikkuu hänen mukanaan. Isäntä voi valita {{ui:Pyydä kaikkia seuraamaan minua}}. Katso [Seuraa henkilöä Live-istunnossa](topic:follow-in-live).

### Kaikissa sovelluksissa

- Työkaluvihjeet ovat Bootstrap-työkaluvihjeitä, aloitusvihjekortissa on sulkupainike, välilehtirivit vierivät sivusuunnassa, kun ne eivät mahdu, ja selainvälilehti näyttää avoimen asiakirjan nimen, jota seuraa DetailCraft ja CadCraft.

## Korjattu

- Mukautettu profiili katosi, kun aloitit uuden mallin.
- Kanavat, kulmateräkset ja onttoprofiilit puuttuivat työpiirustussarjasta.

## Rajoitukset

- Tuuli-, seisminen- ja elementtimenetelmälohkot ovat tarkistusapuvälineitä. Insinöörisi tarkistaa tulokset; ne eivät ole standardin mukainen tarkistus. USGS-haku testattiin korvaajalla, ei oikealla palvelulla.
- Elementtimenetelmää ja P-Deltaa on verrattu käsin laskettuihin ja suljetun muodon ratkaisuihin, ei oikeaan rakennukseen. Nurjahdusanalyysi ei ole toteutettu.
- Yksikään UK-valmistaja ei ole vielä kokeillut UK-kokoja, eikä NC-tiedostoja epätasaisille kulmateräksille ole ajettu koneella.
- Työpiirustussarja on vain PDF-muodossa.
- Muut kielet kuin englanti ovat konekäännöksiä.
- Windows-asennusohjelmia ei ole allekirjoitettu (valitse Lisätietoja, sitten Suorita silti); macOS-levykuvaa ei ole notarisoitu (napsauta hiiren oikealla ja valitse Avaa).

Aiemmat muutokset ovat versioiden 0.8 ja 0.8.1 muistiinpanoissa tämän sivun alaosassa.

## Aiemmin: 0.8 ja 0.8.1

Tämä on muuttunut DetailCraft 0.8:ssa (1. marraskuuta 2026) ja 0.8.1:ssä (2. marraskuuta 2026) verrattuna versioon 0.7. Versio 0.7 tarkisti terässauvat; versio 0.8 suunnittelee nostot, ehdottaa liitokset, tarkistaa perustukset ja raudoituksen sekä rakentaa puu- ja kevytrakenteiset seinät, lattiat ja katot.

### Uutta

**Asennus**

- **Asennussuunnitelma ja elokuva.** Kuvaa välilehdellä {{ui:Asennus}} nosturi (missä se seisoo, sen korkein koukku, kuormituskaaviossa mainitsematon varustus) ja kirjoita sen kuormituskaavion rivit. DetailCraft nostaa mallin yhden kokoonpanon kerrallaan vaiheittain ja kerros kerrokselta ja tarkistaa jokaisen noston kaaviota vastaan sen ulottuvuudella ja asettamasi marginaalilla. {{ui:Tallenna elokuva}} kirjoittaa yhden HTML-tiedoston, joka toistuu offline-tilassa millä tahansa selaimella, myös puhelimella. Kaaviota ylittävät, sen ulkopuolelle menevät tai liian korkeat nostot ovat kohdassa {{ui:Ongelmat}}. Kyse on suunnitelmasta antamistasi luvuista, ei nostosuunnitelmasta. Katso [Asennussuunnitelma ja elokuva](topic:erection-movie).

**Liitokset**

- **Liitosautopilotti.** Välilehti {{ui:Autopilotti}} tarkastelee jokaista liitosta, jolla ei ole liitosta, ja ehdottaa sellaisen muotojen perusteella: pohjalevyt, leikkauskorvakkeet, päätylevyt palkeille, jotka merkitset momenttipalkeiksi, jatkokset ja vahvikkeet. Anna tasainen kuorma tai yksi päävoima, ja pulttien määrä seuraa pultin mitoituslujuutta. {{ui:Lisää ne kaikki}} lisää ehdotukset yhtenä kumoamisvaiheena. Ne ovat lähtöarvoja tarkistettavaksi, eivät liitossuunnittelu.
- **Rakennettavuustarkistukset.** {{ui:Ongelmat}} kertoo pultista, johon momenttiavain ei yllä, pulteista, jotka ovat liian lähellä toisiaan hylsylle, pienahitseistä, jotka ylittävät kokorajansa, ja onttoprofiileista, jotka keräävät vettä. Hitsin saavutettavuus on uusi: pienahitsi ympäri, johon hitsaajan poltin ei yllä, luetellaan sen tiellä olevan osan ja vaikuttuneen hitsin osuuden kanssa. Katso [Rakennettavuustarkistukset](topic:constructability).

**Perustukset ja raudoitus**

- **Perustustarkistukset.** Välilehti {{ui:Perustus}} tarkistaa anturat, yhdistetyt anturat ja laattaperustukset kuvaamallasi maalla: kantavuus, liukuminen ja kaatuminen käyttökuormista; taivutus, leikkaus, lävistys, tartunta ja vähimmäisteräs mitoituskuormista (ACI 318-19). Reunan tai kulman lähellä oleva pilari tarkistetaan sillä poikkileikkauksella, joka jää antura­n reunan ulkopuolelle. Painuma lasketaan maan kimmokertoimesta, joustava laattaperustus ratkaistaan jousilla aluskerroinen perusteella, ja paalujoukoilla ja tukiseinillä on omat paneelinsa. Pilarikuormat voidaan kirjoittaa tai ottaa välilehdeltä {{ui:Analyysi}}. Katso [Perustustarkistukset](topic:foundation-checks).
- **Raudoituksen ahtauskartta.** Välilehti {{ui:Ahtaus}} piirtää jokaisesta anturasta lämpökartan ylhäältä katsottuna: kohdat, joissa tangot jättävät liian vähän tilaa betonille laskeutua, verrattuna vapaan välin sääntöön ja, jos annat ne, suurimpaan kiviainekseen ja tärypäähän. Katso [Raudoituksen ahtauskartta](topic:rebar-congestion).

**Runko ja toimitus**

- **Puu- ja kevytrakenneruoto.** Välilehti {{ui:Runko}} rakentaa seinä-, lattia- ja kattopaneelit jokaisen kappaleen, sahausluettelon, ostettavan varaston ja mittakaavassa olevan työpiirustuksen kanssa. {{ui:Aseta sauvoiksi}} sijoittaa kappaleet malliin, ja {{ui:PDF-arkit}} tallentaa yhden arkin jokaisesta paneelista. Koot, välit ja ylä- ja alapuolen palkit ovat sinun päätettävissäsi: DetailCraft ei tarkista, että ne kantavat kuorman. Katso [Puu- ja kevytrakenteiset paneelit](topic:framing-panels).
- **Toimittajan varasto ja toimitusajat.** Välilehti {{ui:Toimitus}} lukee toimittajan varastoluettelon (CSV) ja näyttää kullekin sahausluettelon poikkileikkaukselle, onko varastossa riittävästi ja kuinka pitkä odotus on. Puutteet ja myöhästyvät poikkileikkaukset ovat kohdassa {{ui:Ongelmat}}. Mitään ei tilata. Katso [Toimittajan varasto ja toimitusajat](topic:supplier-stock).

**Analyysi ja mitoitus**

- **Mikä murtuu ensin?** Välilehden {{ui:Analyysi}} painike etsii ohjaavan lujuusyhdistelmän, heikoimman sauvan, sen kuinka paljon kuormat voivat kasvaa ennen kuin ensimmäinen sauva saavuttaa rajansa, sekä heikoimman päälevyn tai leikkauskorvakkeen, jos sen pulttien leikkauslujuus tunnetaan. Se tarvitsee ensin yhdistelmät ja mitoitusstandardin. Tukipainetta, lohkon leikkausta, hitsejä ja vipuvoimaa ei tarkisteta. Yhdistetty avustajasi voi pyytää saman.
- **Live.** Valitse {{ui:Live: ratkaise uudelleen jokaisen muokkauksen jälkeen}}, jolloin runko ratkaistaan uudelleen jokaisen muokkauksen jälkeen.
- **Betonia ja muuta.** Ei-kehällisen rungon hoikka pilari mitoitetaan suurennetulle momentilleen (ACI 318-19 6.6.4.5). Seisminen jakso voidaan ottaa analyysistä Rayleighin menetelmällä. Levyistä tehdyn laatan teräs saadaan kunkin kerroksen tarvitsemaan momentista sekä yksisuuntaisesta leikkauksesta. Katso [Betonisauvojen tarkistus ja seismiset kuormat](topic:concrete-and-seismic).
- **Insinöörin tarkistettavaksi.** Perustus-, betoni- ja Mikä murtuu ensin? -tulokset ovat apuvälineitä. Tuulikuormia ei ole toteutettu.

**Kaikissa sovelluksissa**

- **Kielet.** Ohje on 54 kielellä. Englannin lisäksi kielet ovat konekäännöksiä, kunnes äidinkielinen puhuja on lukenut ne; kymmenen on uusia (liettua, latvia, bosnia, marathi, telugu, albania, afrikaans, filipino, swahili, uzbek).
- **Työkalurivit.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Työkalurivin rivit}} valitsee rivitys-, 2 rivi- tai 1 rivi -tilan. Palkki, joka jo mahtuu, pysyy ennallaan; loput vierivät sivusuunnassa.
- **Ominaisuusruudukko.** Perustuksen kentät käyttävät yhteistä ruudukkoa: supistettavat ryhmät ja tiivis tiheys. Kirjoitettu laskutoimitus, kuten 2*450, toimii edelleen.
- **Syöttölaitteet.** Kosketuslevy, kynä, 3D-hiiri, ohjain ja MIDI voivat ohjata sovelluksia. Katso [Liiku 3D:ssä](topic:navigate-3d).
- **Ongelmat-paneeli.** Yllä mainittujen uusien tarkistusten varoitukset näkyvät samassa {{ui:Ongelmat}}-paneelissa kuin ennenkin.
- **Yhdistä tekoälysi.** Oma avustajasi, yhdistettynä CadCraft Studion kautta, toimii kaikkien kahdeksan sovelluksen kanssa ja näkee vain sen, minkä sallit. Yhden napsautuksen yhdistäminen, isännöity liitin ja oma API-avaimesi Studiossa ovat vielä tulossa. Katso [Käytä DetailCraftia tekoälyavustajan kanssa](topic:use-with-ai-assistants).

### Korjattu versiossa 0.8.1

- **Kielet Studiossa.** Studio ja paketoidut versiot voivat vaihtaa kieltä ajon aikana; aiemmin ne olivat vain englanniksi. Sitä ei ole vielä testattu jokaisella alustalla: kerro, jos kieli ei vaihdu.
- **Ikkunalla valinta.** Versio 0.8.1:n asennusohjelmat sisältävät ikkunavalinnan toimivan käytöksen, joka oli jo oikein versiossa 0.8:n verkkoversiossa; vanhempi asennusohjelma ei tehnyt sitä.
- **Tabletit pystysuunnassa.** Vapaa ruudukon korkeus menee piirtoalueelle, ja arkkiasettelu alkaa 760 px tai vähemmän.

### Ei vielä tässä versiossa

- **NC-tiedoston lähettäminen koneelle** ei ole julkaistu.
- **Tuulikuormat** betonille eivät ole toteutettuja, ja betoni- ja perustustarkistukset ovat insinöörin arvioitavaksi.
- **Koodin allekirjoitus.** Windows-asennusohjelmia ja macOS:n .dmg-tiedostoa ei ole allekirjoitettu, joten Windows saattaa varoittaa ja macOS pyytää napsauttamaan hiiren oikealla ja valitsemaan Avaa.

Aiemmat muutokset ovat kohdassa [Uutta versiossa 0.7](topic:whats-new-0-7).
