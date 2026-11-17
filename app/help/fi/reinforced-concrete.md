---
title: Betonipalkkien, pilarien, laattojen ja seinien raudoitus
summary: Lisää betonipalkkeja, pilareita, laattoja ja seiniä ruudukon mukaan, anna niille tangot, pystyraudoitus ja sidelenkit, tarkista limitykset ja ankkurointi ACI 318-19- tai EN 1992-1-1 -standardia vasten sekä tee valmistuspiirustukset ja taivutusluettelot.
keywords: betoniraudoitus, tangot, palkki, pilari, laatta, seinä, pystyraudoitus, sidelenkit, koukut, limitykset, limityspituus, ankkurointi, kehityspituus, ld, ldh, lbd, betonipeite, väli, aukkojen reunatangot, verkot, tankonumerot, taivutusluettelo, bbs, valmistuspiirustus, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-tuonti
from: 3835b7ec
---

Näkymän alla oleva {{ui:Betoni}}-välilehti esittää betonipalkkien, pilarien, laattojen ja seinien tankojen tiedot. Sinä annat koot ja tangot; DetailCraft sijoittaa jokaisen tangon, numeroi sen, tarkistaa limitykset, ankkuroinnin, betonipeitteen ja välit niitä koskevaa kohtaa vasten ja piirtää sen.

:::warning
DetailCraft esittää antamasi tangot. Se ei suunnittele niitä. Jokainen tulos on insinöörin tarkistettavaksi.
:::

## Avaa Betoni-välilehti

Valitse näkymän alla oleva {{ui:Betoni}}-välilehti. Valintanauhan asettelussa {{ui:Betoni}} on {{ui:Mallinnus}}-välilehdellä {{ui:Anturaperustus}}-painikkeen vieressä. Piirustustyylin komentorivillä kirjoita {{cmd:CONCRETE}}.

## Lisää elementti ruudukon mukaan

Betonielementit sijoitetaan mallin ruudukkoviivoille ja tasoille, joten määritä ne ensin (vasen paneeli).

1. Kohdassa {{ui:Lisää ruudukon mukaan}} valitse {{ui:Elementti}}: {{ui:Betonipalkki}}, {{ui:Betonipilari}}, {{ui:Laatta}} tai {{ui:Seinä}}.
2. Valitse ruudukkoviivat ja tasot:
   - palkki kulkee ruudukon leikkauspisteestä toiseen, sen yläpinta tasolla;
   - pilari seisoo leikkauspisteessä, yhdeltä tasolta toiselle;
   - laatta täyttää suorakulmion kahden numeroidun ja kahden kirjainruudukkoviivan välillä, sen yläpinta tasolla;
   - seinä kulkee keskilinjansa mukaisesti leikkauspisteestä toiseen, yhdeltä tasolta toiselle.
3. Anna koko ja valitse {{ui:Lisää}}. Elementti valitaan ja sen kentät avautuvat {{ui:Ominaisuudet}}-paneelissa.

Jokainen elementti alkaa tangoilla, jotka ovat lähtöarvoja eivätkä suunnitelmaa: vaihda ne insinöörin arvoihin.

## Muuta tankoja

Valitse elementti (näkymästä tai sen nimestä {{ui:Betoni}}-välilehdellä). {{ui:Ominaisuudet}}-paneeli näyttää:

| Elementti | Asetettavat |
|---|---|
| Palkki | Leveys, syvyys, vapaa betonipeite; ylä- ja alatangot (koko, lukumäärä, suora tai 90° koukku päissä); sivutangot; pystyraudoitus (koko, 135° tai 90° koukut, ensimmäisen etäisyys tuen pinnasta, päävyöhykkeen pituus ja väli, väli muualla); tukipituudet; limityspituudet |
| Pilari | Leveys, syvyys poikittain, kierto, betonipeite; pituustangot kullakin pinnalla; sidelenkit kuten pystyraudoituksessa; mitä tangot tekevät yläpäässä (limitys pilarin yläpuolelle, koukku lattiaan tai pysäytys) |
| Laatta | Paksuus, koko, yläosa, betonipeitteet; alaverkko ja yläverkko molempiin suuntiin (koko ja väli); U-tangot reunojen ympärillä; aukkojen reunatangot; aukot |
| Seinä | Paksuus, betonipeite, yksi tai kaksi kerrosta, vaakatangot ja pystytangot, U-tangot päissä, pystytangot limitettyinä yläpuolelle tai eivät, aukkojen reunatangot, aukot |

Jokainen muutos on yksi kumoamisvaihe. Muutos, jota ei voi toteuttaa, hylätään ja tilarivi kertoo syyn, esimerkiksi "Aukko ei mahdu elementin sisään betonipeitteineen."

Pystyraudoitus ja sidelenkit ovat suljettuja, molemmat koukut yhdessä kulmassa. Palkin tangot ulottuvat päissään betonipilariin pilarin kauempaan pintaan miinus betonipeite; jos pilaria ei ole, anna {{ui:Tuen pituus alussa (mm)}} sekä lopussa.

## Limitykset ja ankkurointi

Tangot, jotka ovat pidempiä kuin {{ui:Raudoitustangon varastopituus (mm)}} (aluksi 12000), katkaistaan yhtä pitkiksi paloiksi ja limitetään. Taulukko {{ui:Limitykset ja ankkurointi}} luettelee jokaisen limityksen ja jokaisen ankkuroinnin: mitä tarvitaan, kohta ja sen ehdot sekä mitä detaljissa on.

- Limityspituus 0 tarkoittaa "tarpeen mukaan": standardin antama pituus, pyöristettynä ylöspäin 25 mm:iin.
- Kirjoita oma limityspituus käyttääksesi sitä. Jos se on lyhyempi kuin tarvittava, se on ongelma (katso alla), ja se merkitään taulukossa *-merkillä.
- Ankkurointi mitataan tuen pinnasta tangon päähän tuen sisällä. Palkki, jonka tukea ei tunneta, ilmoittaa sen tarkistamatta.
- Anturalle seisova pilari limittyy anturan lähtötankojen kanssa ja toiselle pilarille sen tankojen kanssa: myös niiden limitys tarkistetaan.

**ACI 318-19** (SI): suorat vetotangot 25.4.2.3 (taulukko, kertoimilla ψt, ψe, ψg, λ), vakiokoukut 25.4.3.1 (ψr 1.6 ja ψo 1.25, ellei muuta tiedetä), puristetut tangot 25.4.9.2, vetolimitykset 25.5.2.1 (luokka B tai asetuksissa valittu luokka A), puristuslimitykset 25.5.5.1.

**EN 1992-1-1**: ankkurointi 8.4.4, jossa fbd on kohdasta 8.4.2 (hyvä tai huono tartunta), limitykset 8.7.3 kertoimella α6 jokaiselle samassa poikkileikkauksessa limitetylle tangolle. γc, γs ja αct alkavat suositelluista arvoista; aseta oman kansallisen liitteesi arvot.

## Tarkistukset

Jokainen epäonnistunut tarkistus on ohjelman {{ui:Ongelmat}}-paneelissa (lähde {{ui:Raudoitustarkistukset}}) ja elementin {{ui:Tarkistukset}}-luettelossa:

| Tarkistus | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Betonipeite | Taulukko 20.5.1.3.1, ympäristöluokan mukaan | Tartunnan vähimmäisarvo, taulukko 4.2 (kestävyyspeitteen antaa sinä) |
| Tankojen vapaa väli | 25.2.1 (palkit, laatat, seinät), 25.2.3 (pilarit) | 8.2 (2) |
| Pystyraudoituksen väli | 9.7.6.2.2 | 9.2.2 (6) |
| Palkin vähimmäisteräs | 9.6.1.2 | 9.2.1.1 (1) |
| Palkin sivutangot yli 900 mm syvyydellä | 9.7.2.3 | ei tarkisteta |
| Pilarin terässuhde, tankojen määrä | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Sidelenkit: väli, koko, poikkisidelenkit | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Laatan väli, vähimmäisteräs | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Seinän väli, vähimmäisteräs, kaksi kerrosta | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Limitykset, ankkurointi | kuten yllä | kuten yllä |

Kiviaineen kokoa ei tiedetä, joten vapaa väli tarkistetaan ilman sitä.

## Aukot, aukkojen reunatangot ja reunatangot

Valitse valitun laatan tai seinän alta {{ui:Lisää aukko}} ja aseta sen sijainti ja koko. Aukon ylittävät tangot pysähtyvät betonipeitteen etäisyydelle sen reunasta. Aukkojen reunatangot lisätään molemmille puolille samaan kerrokseen, ja ne kantavat puolet katkaistujen tankojen pinta-alasta, yhden ankkurointipituuden verran aukon ohi. Tämä on DetailCraftin aloitussääntö, ei standardin kohta: muuta {{ui:Aukkojen reunatangot}} insinöörin arvoihin. Kulmatankoja ei lisätä.

Laatan vapaiden reunojen ympärillä ja seinän päissä olevien U-tankojen varret ovat yhden limityspituuden pituisia.

## Tankonumerot ja taivutusluettelo

Samanlaiset tangot saavat saman merkin: anturat säilyttävät F-merkinnät (5F1), palkit saavat B-merkin, pilarit C-merkin, laatat S-merkin ja seinät W-merkin (7B1, 8C1, 4S2). {{ui:Taivutusluettelo}}-välilehti ja sen CSV luettelevat nyt rakenteen jokaisen tangon, anturat ensin. {{ui:Tuloste}} › {{ui:Lisää}} › {{ui:Taivutus}} lataa sen.

## Valmistuspiirustukset

Valitse {{ui:Tuloste}} › {{ui:Lisää}} › {{ui:Raudoituspiirustukset}}, {{ui:Raudoituspiirustukset}} {{ui:Betoni}}-välilehdellä tai {{ui:Valmistuspiirustus}} yhden elementin vierestä. Jokainen elementti saa arkin, jossa on julkisivu (laatalle pohjakuva), joka näyttää jokaisen tangon ja sen merkin, pystyraudoituksen tai sidelenkkien vyöhykkeet ja mitoitetut limitykset, sekä keskikohdan leikkauksen. Taivutusarkit luettelevat sitten jokaisen merkin, sen muodon luonnoksen, mitat, lukumäärän, katkaisupituuden ja painon.

Arkit tehdään joka kerta uudelleen mallista ja jälleen jokaisen muutoksen jälkeen, kun ikkuna on auki: piirustusotsikko kantaa mallin viitteen. Tallenna {{ui:Tämä arkki PDF-tiedostona}} tai {{ui:Kaikki arkit PDF-tiedostona}}.

## Tangot IFC-tiedostosta

{{ui:Tiedosto}} › {{ui:Tuo IFC}} lukee nyt IfcReinforcingBar-tyypin: keskilinjaa pitkin pyyhkäisty sylinteri palautuu suorina varsina ja taivutuksina, halkaisijoineen, merkkeineen ja elementtinä, johon se kuuluu. Tangot säilytetään siinä muodossa kuin ne luettiin (niitä ei muunneta palkin tai laatan sääntöjen mukaisiksi), ne näkyvät näkymässä, luetellaan taivutusluettelossa ja kirjoitetaan uudelleen IFC-viennin mukana. Tuontiraportti kertoo, kuinka monta tankoa luettiin, minkä kokoisia ne olivat, kuinka monessa elementissä ja mitä jätettiin pois ja miksi.

Tiedoston palkkia, pilaria, laattaa tai seinää, joka sisältää tankoja tai jonka materiaali on betoni, ei oteta teräkseksi; raportti kertoo tästä. DetailCraftin oma IFC-vienti sisältää jokaisen betonielementin määritelmän, joten se palautuu itsekseen, ja sen tangot luodaan siitä uudelleen.

:::note
Rakennesuunnitteluohjelman omien tiedostojen (ei IFC) lukeminen ei ole vielä toteutettu: vie siitä IFC.
:::

## IFC-vienti

Betonipalkit, -pilarit, laatat (aukkoineen) ja seinät viedään tyyppeinä IfcBeam, IfcColumn, IfcSlab ja IfcWall. Kullakin on tangot IfcReinforcingBar-tyyppeinä (pääverkot, pysty- ja sidelenkkien sidokset, reunatangot) koottuna siihen, ja jokainen tanko on keskilinjaa pitkin pyyhkäisty sylinteri, jossa taivutuksissa todelliset kaaret, sekä sen merkki ja katkaisupituus.
