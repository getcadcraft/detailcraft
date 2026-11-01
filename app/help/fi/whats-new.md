---
title: Uutta versiossa 0.7
summary: Teräksisten I-profiilien mitoitustarkastukset kuormitusyhdistelmin ASCE 7:n tai EN 1990:n mukaan ja sauvatarkastukset AISC 360:n tai EN 1993-1-1:n mukaan, terässmallin USD-vienti, USD-työkalu avustajalle, Teräs-valintanauha suurilla ja pienillä painikkeilla, paneelit jotka siirtyvät pois tieltä ja valintaikkunat jotka liikkuvat.
keywords: uutta, mitä uutta, versiotiedot, muutosloki, muutokset, 0.7, versio, uudet ominaisuudet, mitoitustarkastukset, teräsmitoitus, käyttöaste, kuormitusyhdistelmät, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurokoodi, kansallinen liite, kattokuorma, taipumaraja, usd, usda, usdc, usdz, openusd, avustaja, mcp, teräsvalintanauha, valintanauha, jaettu painike, yksiköt, tiivis, paneelit, valintaikkunat, portugali
from: 17d1e0bb
---

Tämä on luettelo siitä, mikä muuttui DetailCraftissa versiossa 0.7 verrattuna versioon 0.6. Version 0.6 kehysanalyysillä on nyt toinen vaihe: terässauvojen tarkistus mitoitusstandardia vasten.

## Uutta

### Jiirausliitokset (0.7.1)

- **Kaksi I-profiilia kohtaa kulmassa**, kuten portaalin kulma tai harja: valitse molemmat, valitse {{ui:Liitä}}-ryhmän {{ui:Lisää}}-valikosta {{ui:Jiiri}}, ja molemmat päät leikataan kulman puolittavalla tasolla. Yhteen pultatut päätylevyt ja uumajäykisteet ovat valintaruutuja uudessa Jiiri-valintaikkunassa, jonka numeroidut kentät vastaavat kirjoittaessasi tehtävää piirrosta liitoksestasi. Jiiri seuraa sauvoja, kun ne siirtyvät, ja kulkee mukana piirustuksiin, NC-tiedostoihin (vinot leikkaukset), IFC:hen ja osaluetteloon. Katso [Jiirausliitokset](topic:mitres).

### Mitoitustarkastukset

- **Kuormitusyhdistelmät standardista.** {{ui:Analyysi}}-välilehden uudessa {{ui:Mitoitustarkastukset}}-lohkossa on {{ui:Mitoitusstandardi}}: ASCE 7 + AISC 360 (US, LRFD) tai EN 1990 + EN 1993-1-1 (Eurokoodi). Anna kullekin kuormitustapaukselle laji (pysyvä, hyöty, uusi kattokuorma, lumi, tuuli, maanjäristys), paina {{ui:Tee yhdistelmät}}, ja DetailCraft kirjoittaa standardin murtorajatilan ja käyttörajatilan yhdistelmät tapauksistasi. Itse kirjoittamasi yhdistelmät säilyvät. Katso [Tee yhdistelmät](topic:design-checks#make-the-combinations).
- **Kansallisen liitteen arvot.** Eurokoodissa kertoimet alkavat suositusarvoista; {{ui:Kansallisen liitteen arvot}} antaa kirjoittaa oman maasi arvot, ja ne tallennetaan malliin. Katso [Tee yhdistelmät](topic:design-checks#make-the-combinations).
- **Tarkista sauvat.** {{ui:Tarkista sauvat}} tarkistaa jokaisen teräksisen I-profiilin vedon, nurjahtavan puristuksen, kiepahtavan taivutuksen, leikkauksen, taivutuksen ja normaalivoiman sekä taipuman asettamaasi rajaa ({{ui:Taipumaraja}}) vasten. Taulukko näyttää kunkin sauvan käyttöasteen, määräävän tarkastuksen ja sen yhdistelmän, ja sauvat väritetään mallissa (sininen, vihreä, okra, punainen, harmaa tarkistamattomille). Katso [Tarkista sauvat](topic:design-checks#check-the-members).
- **Raportissa.** {{ui:Raportti (PDF)}} ja {{ui:Raportti (CSV)}} lisäävät standardien painokset, asetukset, käyttöasteen sauvoittain ja jokaisen käytetyn kohdan. Katso [Raportti](topic:design-checks#the-report).
- **Apu, kunnes suunnittelija on tarkistanut sen.** Se käyttää vain ensimmäisen kertaluvun voimia. Putkiprofiilit, kulmaprofiilit, U-profiilit, hitsatut profiilit sekä hoikat tai luokan 4 osat sanovat "ei tarkistettu" syineen; vääntöä, liitoksia ja betonia ei tarkisteta. Katso [Mitä ei tarkisteta](topic:design-checks#what-is-not-checked).

### USD

- **Vie terässmalli USD-muodossa.** {{ui:USD}} {{ui:Tuloste}}-ryhmässä kirjoittaa mallin muodossa {{ui:Teksti (.usda)}}, {{ui:Binääri (.usdc)}} tai {{ui:Paketti (.usdz)}} renderöintiohjelmille ja näyttämökokoonpanoon: kukin kokoonpano sisältää osansa, kukin osa on poikkileikkauksensa pituutta pitkin vedettynä loveuksineen, ja kukin kantaa osamerkkinsä, profiilinsa, lujuusluokkansa, pituutensa ja painonsa. Pulttireikiä, pultteja, hitsejä ja anturaperustuksia ei ole USD-verkoissa. Katso [Vie terässmalli USD-muodossa](topic:usd).

### Tekoälyavustajat

- **USD avustajille.** Oma avustajasi, joka on yhdistetty CadCraft Studion kautta, voi viedä mallin USD-muodossa (`usd_export`) ja Studiossa kirjoittaa sen sallimaasi kansioon. Katso [Mitä avustaja voi pyytää](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Muutettu

- **Teräs-valintanauhassa** on suuria ja pieniä painikkeita: suuri {{ui:Palkki}} pienten {{ui:Pilari}}, {{ui:Tukisauva}} ja {{ui:Levy}} vieressä kohdassa {{ui:Mallinnus}} › {{ui:Sauvat}}; suuri {{ui:Päätylevyt}} kohdassa {{ui:Detaljointi}} › {{ui:Liitokset}}, ja {{ui:Jatkos}} ja {{ui:Liitoslevy}} jakavat yhden jaetun painikkeen; suuri {{ui:Liitä}} kohdassa {{ui:Muokkaus}} › {{ui:Leikepöytä}}, ja {{ui:Liitä samaan paikkaan}} ja {{ui:Monista}} ryhmän nuolen takana. Kohdassa {{ui:Valmistus}} › {{ui:Tiedonsiirto}} on {{ui:Vie USD}} IFC:n vieressä. Muut valikkotyylit näyttävät samalta kuin ennen. Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse#the-three-styles).
- [Analysoi runko](topic:frame-analysis) viittaa nyt mitoitustarkastuksiin, ja sen yhdistelmät voi tehdä standardin mukaan.

## Kaikissa sovelluksissa

- **Yksiköt.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Yksiköt}} sisältää yhden luettelon pituudelle, alalle, tilavuudelle, kulmalle ja kaltevuudelle, täsmälleen yksiköiden määritelmien mukaisilla kooilla (Yhdysvaltain maanmittausjalka on oma yksikkönsä). Kytke pois yksiköt, joita et koskaan käytä, niin ne poistuvat yksikköluetteloista; merkitse yksi tähdellä, niin uusi työ alkaa siinä. Tiedosto säilyttää aina oman yksikkönsä. DetailCraftin omat kentät eivät vielä seuraa luetteloita: sen pituudet kirjoitetaan yhä millimetreinä. Katso [Yksiköt, kirjoitetut arvot ja yksikköluettelot](common:unit-lists).
- **Tiiviimpi asettelu ja paneelit, jotka siirtyvät pois tieltä.** {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Asettelun tiheys}} › {{ui:Tiivis}} mahduttaa enemmän näytölle (kosketusnäytöt ja puhelimet säilyttävät suuret painikkeensa). Jokaisella sivupaneelilla on kapea otsikkopalkki: vedä sitä kiinnittääksesi paneelin tai irrottaaksesi sen kelluvaksi, pudota se toisen paneelin palkkiin jakaaksesi yhden kehyksen välilehtinä, kiinnitä se liukumaan reunaan tai piilota se ja tuo takaisin reunasta. Katso [Järjestä paneelit](common:arrange-panels#make-the-layout-denser).
- **Valintaikkunat liikkuvat.** Vedä valintaikkunaa otsikkopalkista pois piirroksen tieltä; se palaa siihen, mihin sen jätit. Kaksoisnapsauta otsikkopalkkia keskittääksesi sen uudelleen. Katso [Siirrä valintaikkunaa](common:arrange-panels#move-a-dialog).
- **Reseptejä tekoälyavustajille.** Kymmenen läpikäytyä pyyntöä omalle avustajallesi (siivoa piirustus, plottaa sarja, tarkista piirustuksia, kysy malleista, laske määrälaskenta yhteen, kokeile osan varianttia…), kussakin kutsutut työkalut ja tarvittavat oikeudet, ja testeissämme kukin toistettu. Sovellukset eivät sisällä tekoälyä. Katso [Reseptejä tekoälyavustajille](common:assistants-recipes).
- **Kielet.** **Português (Portugal)** on uusi kohdassa {{ui:Asetukset}} › {{ui:Yleiset}} › {{ui:Kieli}}. Se, **Português (Brasil)**, **Español (México)** ja **Bahasa Indonesia** sisältävät nyt jokaisen sovellusten sanan luonnoksina, joita äidinkielinen puhuja ei ole vielä tarkistanut. Ohjeaiheet ovat englanniksi.
- **CadCraft Studio** kertoo, miksi päivitystarkistus epäonnistui (ei vielä tiedostoa järjestelmällesi, ei verkkoa, virheellinen allekirjoitus) pelkän "Valmis" sijaan, eikä enää tuo takaisin sulkemaasi Uutta-korttia ennen kuin uudempi julkaisu on olemassa.

## Ei vielä tässä versiossa

- **Versiota 0.7 ei ole koodiallekirjoitettu.** Allekirjoitus ja Microsoft Store -paketti siirtyivät versioon 0.8, koska varmenteen vahvistus ei ole vielä mennyt läpi. Tarkista SHA-256 kunkin tiedoston vieressä osoitteessa getcadcraft.com/download. Jos SmartScreen pysäyttää asennusohjelman Windowsissa, valitse {{ui:Lisätietoja}} ja sitten {{ui:Suorita silti}}. Macissa napsauta ensimmäisellä kerralla CadCraft Studiota hiiren oikealla painikkeella ja valitse {{ui:Avaa}}. CadCraft Studio ei ole vielä sovelluskaupassa, eikä iPad- tai iPhone-versiota ole vielä.
- {{ui:Yksiköt}}-kohdan kulma- ja kaltevuusluettelot tallennetaan, mutta mikään kenttä ei vielä lue niitä.
- **Suunnittelija ei ole vielä tarkistanut mitoitustarkastuksia.** Testimme vertaavat niitä painettuihin taulukkoarvoihin ja käsin laskettuihin kaavoihin, eivät vielä suunnitteluoppaan laskuesimerkkeihin. Kunnes ne on tarkistettu, ne ovat apu: tarkista tärkeät sauvat käsin.
- Mitoitustarkastukset käyttävät ensimmäisen kertaluvun voimia (ei toisen kertaluvun vaikutuksia) ja tarkistavat vain I-profiileja. Ei rakennettu: putkiprofiilit, kulmaprofiilit, U-profiilit, hitsatut profiilit, hoikat (AISC) tai luokan 4 (Eurokoodi) osat taivutuksessa, vääntö, leikkausnurjahdus yhdessä taivutuksen kanssa, liitokset, väsyminen, palo, seisminen detaljointi ja betoni. Hoikka puristettu osa jättää puristustarkastukset pois, ja sauva saa tuloksen "kelpaa, tarkistettu osittain".
- Kehysanalyysi on yhä ensimmäisen kertaluvun ja lineaarinen, eikä suunnittelija ole vielä kokeillut sitä oikeassa työssä.
- Pulttireikiä, pultteja, hitsejä ja anturaperustuksia ei ole USD-viennissä.

Kaikki muu on aiheessa [Mitä ei ole vielä rakennettu](topic:not-built-yet).
