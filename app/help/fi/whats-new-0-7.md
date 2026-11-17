---
title: Uutta versiossa 0.7 (aiemmin)
summary: Teräksisten I-profiilien mitoitustarkastukset ASCE 7:n tai EN 1990:n kuormitusyhdistelmillä ja sauvatarkistukset AISC 360:n tai EN 1993-1-1:n mukaan, teräsmallin vienti USD-muodossa, USD-apuväline avustajille, teräksen valintanauha suurilla ja pienillä painikkeilla, paneelit, jotka siistiytyvät piiloon, ja siirrettävät valintaikkunat.
keywords: uutta versiossa 0.7, aiempi julkaisu, julkaisutiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, mitoitustarkastukset, teräksen mitoitus, käyttöaste, kuormitusyhdistelmät, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, kansallinen liite, katon hyötykuorma, taipumaraja, usd, usda, usdc, usdz, openusd, avustaja, mcp, teräksen valintanauha, valintanauha, jaettu painike, yksiköt, tiivis, paneelit, valintaikkunat, portugali
from: 54a7a8f0
---

Tämä on, mitä muuttui DetailCraft 0.7:ssä verrattuna versioon 0.6. Version 0.6 kehäanalyysissä on nyt toinen vaihe: teräksen sauvat tarkistetaan suunnitteluohjeen mukaan.

## Uutta

### Jiirisaumat (0.7.1)

- **Kaksi I-profiilia, jotka kohtaavat kulmassa**, kuten kehän nurkka tai harja: valitse molemmat, valitse {{ui:Liitä}}-ryhmän {{ui:Lisää}}-valikosta {{ui:Jiiri}}, ja molemmat päät leikataan kulmaa puolittavalla tasolla. Yhteen pultatut päätylevyt ja uuran jäykisteet ovat uudessa Jiiri-valintaikkunassa valintaruutuja. Sen numeroidut kentät vastaavat liitoksesta piirrettyä kuvaa, joka päivittyy kirjoittaessa. Jiiri seuraa sauvoja, kun ne siirretään, ja siirtyy piirustuksiin, NC-tiedostoihin (vinoleikkaukset), IFC-malliin ja määräluetteloon. Katso [Jiirisaumat](topic:mitres).

### Mitoitustarkastukset

- **Kuormitusyhdistelmät suunnitteluohjeesta.** {{ui:Analyysi}}-välilehdellä uudella {{ui:Mitoitustarkastukset}}-lohkolla on {{ui:Mitoitusstandardi}}: ASCE 7 + AISC 360 (USA, LRFD) tai EN 1990 + EN 1993-1-1 (Eurocode). Anna jokaiselle kuormitustapaukselle sen laji (pysyvä, hyötykuorma, uusi katon hyötykuorma, lumi, tuuli, seisminen), paina {{ui:Tee yhdistelmät}}, ja DetailCraft kirjoittaa tapauksistasi ohjeen lujuus- ja käyttörajatilan yhdistelmät. Itse kirjoittamasi yhdistelmät säilyvät. Katso [Tee yhdistelmät](topic:design-checks#make-the-combinations).
- **Kansallisen liitteen arvot.** Eurocodea varten kertoimet alkavat suositelluista arvoista. {{ui:Kansallisen liitteen arvot}} antaa kirjoittaa maasi arvot, ja ne tallentuvat malliin. Katso [Tee yhdistelmät](topic:design-checks#make-the-combinations).
- **Tarkista sauvat.** {{ui:Tarkista sauvat}} tarkistaa jokaisen teräksisen I-profiilin vedon, puristuksen ja nurjahduksen, taivutuksen ja kiepahduksen, leikkauksen, normaalivoiman kanssa yhdistetyn taivutuksen sekä taipuman asetettua {{ui:Taipumaraja}}a vastaan. Taulukossa näkyy kunkin sauvan käyttöaste, ratkaiseva tarkistus ja sen yhdistelmä. Sauvat värjätään mallissa (sininen, vihreä, ocker, punainen, harmaa tarkistamattomille). Katso [Tarkista sauvat](topic:design-checks#check-the-members).
- **Raportissa.** {{ui:Raportti (PDF)}} ja {{ui:Raportti (CSV)}} lisäävät ohjeiden painokset, asetukset, käyttöasteen sauvoittain ja jokaisen käytetyn kohdan. Katso [Raportti](topic:design-checks#the-report).
- **Apu, kunnes insinööri on tarkistanut sen.** Se käyttää vain ensimmäisen kertaluvun voimia. Putket, kulmateräkset, kanavat, hitsatut profiilit sekä hoikat tai luokan 4 osat saavat tilan "ei tarkistettu" ja syyn. Vääntöä, liitoksia ja betonia ei tarkisteta. Katso [Mitä ei tarkisteta](topic:design-checks#what-is-not-checked).

### USD

- **Teräsmallin vienti USD-muodossa.** {{ui:USD}} ryhmässä {{ui:Tuloste}} kirjoittaa mallin muotoon {{ui:Teksti (.usda)}}, {{ui:Binääri (.usdc)}} tai {{ui:Paketti (.usdz)}} renderöintiohjelmia ja kohtauksen kokoamista varten. Jokainen kokoonpano sisältää osansa, jokainen osa on poikkileikkauksensa pituussuunnassa kulkeva kappale, jossa on leikatut päät, ja jokaisella on osamerkintä, profiili, laatu, pituus ja paino. Pulttireiät, pultit, hitsit ja perustukset eivät ole USD-verkoissa. Katso [Teräsmallin vienti USD-muodossa](topic:usd).

### Tekoälyavustajat

- **USD avustajille.** Oma avustajasi, yhdistettynä CadCraft Studioon, voi viedä mallin USD-muodossa (`usd_export`), ja Studiossa se voi kirjoittaa sen kansioon, jonka olet sallinut. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Muutettu

- **Teräksen valintanauhassa** on suuria ja pieniä painikkeita: suuri {{ui:Palkki}} pienten {{ui:Pilari}}, {{ui:Tukisauva}} ja {{ui:Levy}} rinnalla kohdassa {{ui:Mallinnus}} › {{ui:Sauvat}}. Suuri {{ui:Päätylevyt}} on kohdassa {{ui:Detaljointi}} › {{ui:Liitokset}}, ja {{ui:Jatkos}} ja {{ui:Liitoslevy}} jakavat yhden jaetun painikkeen. Suuri {{ui:Liitä}} on kohdassa {{ui:Muokkaus}} › {{ui:Leikepöytä}}, ja {{ui:Liitä samaan paikkaan}} sekä {{ui:Monista}} ovat ryhmän nuolen takana. Kohdassa {{ui:Valmistus}} › {{ui:Tiedonsiirto}} on {{ui:Vie USD}} IFC:n vieressä. Muut valikkotyylit näyttävät samalta kuin ennen. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse#the-three-styles).
- [Kehän analyysi](topic:frame-analysis) viittaa nyt mitoitustarkastuksiin, ja sen yhdistelmät voidaan tehdä ohjeen mukaan.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää kullekin pituudelle, pinta-alalle, tilavuudelle, kulmalle ja kaltevuudelle oman luettelon yksikön määritelmien tarkkoine kokoineen (USA:n peninkulma on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista. Tähdellä merkitty yksikkö on uusien töiden oletus. Tiedosto säilyttää aina oman yksikkönsä. DetailCraftin omat ruudut eivät vielä seuraa luetteloita: pituudet kirjoitetaan yhä millimetreinä. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka siistiytyvät piiloon.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahtuu näytölle enemmän (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä se kiinnittääksesi tai irrottaaksesi paneelin, pudota toisen paneelin palkkiin jakaaksesi yhden kehyksen välilehdiksi, kiinnitä se liukumaan reunaan tai piilota ja tuo takaisin reunasta. Katso [Paneelien järjestäminen](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat siirtyvät.** Vedä valintaikkunaa otsikkopalkista piirustuksen tieltä. Se palaa siihen, mistä lähdit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Ohjeet tekoälyavustajille.** Kymmenen valmista pyyntöä omalle avustajallesi (siisti piirustus, tulosta sarja, tarkista piirustuksia, kysy mallilta, laske määrälaskennan yhteissumma, kokeile osan muunnelmaa ...), kukin työkaluineen ja tarvittavine oikeuksineen. Testimme toistavat jokaisen. Sovelluksissa ei ole tekoälyä. Katso [Ohjeet tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt kaikki sovellusten sanat luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (tiedostoa järjestelmällesi ei vielä ole, ei verkkoa, virheellinen allekirjoitus), eikä "Valmis" ilmoita pelkästään. Se lakkaa tuomasta takaisin Mitä uutta -korttia, jonka suljit, ennen kuin on uudempi julkaisu.

## Ei vielä tässä versiossa

- **Versio 0.7 ei ole koodilla allekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska sertifikaatin vahvistus ei ole vielä valmis. Tarkista jokaisen tiedoston SHA-256-tiiviste sivulla getcadcraft.com/download. Windowsissa, jos SmartScreen pysäyttää asennusohjelman, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa CadCraft Studio avataan ensimmäisellä kerralla napsauttamalla sitä hiiren oikealla painikkeella ja valitsemalla {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPadille tai iPhonelle ole vielä versiota.
- Kohdan {{ui:Yksiköt}} kulma- ja kaltevuusluettelot tallentuvat, mutta mikään ruutu ei vielä lue niitä.
- **Mitoitustarkastuksia ei ole vielä insinööri tarkistanut.** Testimme vertaavat niitä painettuihin taulukkoarvoihin ja käsin laskettuihin kaavoihin, ei vielä suunnitteluoppaiden esimerkkilaskelmiin. Tarkistukseen asti ne ovat apuvälineitä: tarkista tärkeät sauvat käsin.
- Mitoitustarkastukset käyttävät ensimmäisen kertaluvun voimia (ei toisen kertaluvun vaikutuksia) ja tarkistavat vain I-profiilit. Ei vielä toteutettu: putket, kulmateräkset, kanavat, hitsatut profiilit, hoikat (AISC) tai luokan 4 (Eurocode) osat taivutuksessa, vääntö, leikkausnurjahdus yhdessä taivutuksen kanssa, liitokset, väsyminen, palo, seisminen detaljointi ja betoni. Hoikka puristettu osa jättää puristustarkistukset pois, ja sauva saa tilan "läpäisee, osittain tarkistettu".
- Kehän analyysi on yhä ensimmäisen kertaluvun ja lineaarinen, eikä insinööri ole vielä kokeillut sitä oikeassa työssä.
- Pulttireiät, pultit, hitsit ja perustukset eivät ole USD-viennissä.

Muu on kohdassa [Mitä ei ole vielä toteutettu](topic:not-built-yet).
