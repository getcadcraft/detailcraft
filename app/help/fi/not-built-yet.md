---
title: Mitä ei ole vielä toteutettu
summary: Mitä tämä varhainen DetailCraft-versio ei vielä osaa ja mitä voit tehdä sen sijaan tänään.
keywords: rajat, rajoitukset, puuttuu, tiekartta, ei tueta, tulossa, suunniteltu, kiertotie, todo
from: ea411885
---

DetailCraft on varhainen versio. Tämä sivu luettelee, mitä se ei vielä tee, jotta voit suunnitella sen mukaan. Mikään tässä ei ole lupaus päivämäärästä.

## Mallinnus

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Sauvan toisen pään vetäminen (venyttäminen) | Muokkaa {{ui:Alku}} tai {{ui:Loppu}} kohdassa {{ui:Päät (x, y, z mm)}} {{ui:Ominaisuudet}}-paneelissa |
| Valintasuodatin (vain palkit, vain yksi profiili) | Vedä ikkuna ja napsauta {{key:Shift}}+napsautus poistaaksesi osia valinnasta |
| Valinnan matriisi; kiertäminen viistoakselin ympäri; peilaaminen viistotasossa | Kopioi ja liitä se siirrettynä, tai {{ui:Monista}} se; kierto ja peilaus toimivat pohjakuvassa ([Valitse ikkunalla, siirrä, kierrä, peilaa, muuta useita](topic:select-and-change)) |
| Pisteet ruudukon ulkopuolella napsautettaessa | Aseta ruudukolle ja kirjoita sitten päätekoordinaatit |
| Julkisivut numeroitujen ruudukkoviivojen suuntaisesti; tallennetut näkymät; työtasot | Käytä {{ui:3D}}-näkymää tai {{ui:Lisää ruudukon mukaan}} |
| Reiät piirrettynä todellisina leikkauksina 3D-näkymässä | Reiät näkyvät tummina tulppina; ne ovat todellisia jokaisessa viennissä |
| Pyöristetyt tai viistetyt lovet, muut leikkaukset ja liitososat | Vain suorat lovet I-profiileissa |
| Kulmaterästen ja pyöreiden putkien reiät, jotka lisäät | Kulmaterästen reiät tulevat vain [vahvistelevyistä](topic:brace-gussets) |
| Tuuma-yksiköt syötteenä | Kirjoita millimetreinä (25.4 per tuuma) |
| Oman profiilin muokkaaminen tai poistaminen | Lisää korjattu profiili uudella nimellä |

## Portaat

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Kaiteet, tasanteet, varvaslevyt, askelmaritilät, kierreportaat ja kaksoiskäännöksiset portaat | Vain suorat juoksut; katso [Portaat](topic:stairs) |
| Reunapalkkien päätyleikkaukset kerroksiin nähden | Suoraan leikatut reunapalkit; leikkaa ne verstasohjelmistossasi |

## Liitokset

DetailCraft rakentaa kuusi liitostyyppiä: diagonaalisauvan vahvistelevyn (ks. [Vahvistelevyt](topic:brace-gussets)); pultatun jatkoksen kahden saman I-profiilin osan välillä (ks. [Jatkokset](topic:splices)); viistoliitoksen kahden kulmassa kohtaavan I-profiilin välillä, pelkkänä leikkauksena tai pultatuilla päätylevyillä (ks. [Viistoliitokset](topic:mitres)); tasossa olevasta, pystyssä olevasta I-profiilipalkista I-profiilipilarin laippaan tai uumaan tehdyn tasaisen tai jatketun pultatun päätylevyn; palkista (neliö, vino tai viisto) pilarin laippaan tai uumaan tehdyn leikkauslevyn; ja pilarin pohjalevyn neljällä ankkuripultilla.

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Vinot tai viistot päätylevyt | Käytä [leikkauslevyjä](topic:shear-tabs), jotka sopivat vinoille ja viistoille palkeille |
| Kulmateräskiinnikkeet; täyttölevyt jatkoksissa ja jatkokset eri kokojen välillä; palkkiin ja pilariin hitsatut kulmavahvikkeet; viistetyt vahvikkeet | Detaljoi ne muulla ohjelmistolla tai lisää levyt ja reiät käsin irrallisina osina; katso [Jatkokset](topic:splices), [Vahvistelevyt](topic:brace-gussets) |
| Viistetyt tai kapenevat pohjajäykisteet; valutareiät; anturaperustuksen lovi leikkausnokkaa varten | Suorakaiteen muotoiset jäykisteet; katso [Pohjalevyt](topic:base-plates) |
| Kulmavahvikkeet (haunch); hitsatut viistoliitokset päittishitsillä; jäykisteet samassa linjassa toisen sauvan laippojen kanssa | [Viistoliitos](topic:mitres) päätylevyillä ja uumajäykisteillä, tai tavallinen viistoleikkaus; lisää muut levyt käsin irrallisina osina |
| Liitosten mitoitustarkistukset (lujuus) | Tarkista liitokset insinöörisi laskelmilla; DetailCraft varoittaa vain reunaetäisyydestä ja välistä |
| Pitkäreiät | Vain pyöreät reiät |

## Analyysi

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Mitoitustarkistukset teräksisille I-profiileille laajemmin: putket, kulmateräkset, U-profiilit, hitsatut muodot, hoikat tai luokan 4 osat, vääntö, liitokset; betoni: sivusiirtymän hoikkuus, vääntö, maanjäristysdetaljointi, laatat ja seinät | Analyysi-välilehti tarkistaa teräksiset I-profiilit standardin AISC 360 tai EN 1993-1-1 mukaan ([Tarkista teräsosat mitoitusstandardin mukaan](topic:design-checks)); muut se jättää merkiten ”ei tarkistettu”; insinööri tarkistaa kaiken |
| Nurjahdusanalyysi, värinä | Toisen kertaluvun analyysi on vain P-Delta (elastinen); ei nurjahdusanalyysia (modaalinen, vastespektri, aikahistoria ja pushover ovat Analyysi-välilehdellä) |
| Insinöörin tarkastamat mitoitustarkistukset | Ne ovat apuväline siihen asti: tarkista kaksi tai kolme sauvaa käsin tai insinöörisi omalla ohjelmistolla ennen kuin luotat niihin |
| Lattia-, tuuli- ja lumikuormat, jotka lasketaan puolestasi pinta-aloista | Aseta kuormat sauvoille käsin, kN/m tai kN |
| Sauvojen siirrot, epäkeskiset liitokset, vain vetoa kestävät diagonaalit, levyt ja anturat kehässä | Sauvat analysoidaan niiden työlinjoilla; diagonaalit kantavat vetoa ja puristusta |

## Raudoitus

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Pyöreät pilarit, spiraalit, vinot tai kaarevat palkit, muut kuin suorakulmaiset laatat, suorat seinät | Suorakulmaiset palkit, pilarit, laatat ja seinät ([Raudoita teräsbetoni](topic:reinforced-concrete)) |
| Taivutetut tangot jatkokseen, porrastetut jatkokset, jatkokset valitsemaasi kohtaan | Jatkokset tasavälein; kaikki tangot jatkettu yhdessä leikkauksessa (ACI-luokka B, EN α6 = 1.5) |
| Kulmatangot aukkojen kohdalla, lävistysleikkausraudoitus, maanjäristysdetaljointi (ACI 318-19 luku 18) | Aukon kummallakin puolella olevat reunatangot; tarkista muut itse |
| Rakennesuunnitteluohjelman omien tiedostojen lukeminen | Vie IFC-malli siitä: sen IfcReinforcingBar-osat tuodaan tankoina ([Tangot IFC-tiedostosta](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Muotokoodit suoran, yhden taivutuksen ja U:n lisäksi; ACI 315 -tyypit suorille tangoille ja yhden koukun tangoille | Kolme muotoa tulostuvat koodeina BS 8666 00, 11, 21 tai ACI Type 2; katso [Raudoituksen viite](topic:rebar-reference) |
| Muut metriset tangot kuin BS 4449 H8–H40 (esim. CSA 10M–35M) | ASTM-pehmeän metrin nimet #10–#36 tai BS-tangot |

## Piirustukset ja viennit

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Pystysuuntaiset arkit, A0 ja omankokoiset arkit; yleisjärjestelykuvat vinoilla ruudukoilla | Vaakasuuntaiset A4–A1 ja ANSI B–D ([Yleisjärjestely- ja kokoonpanopiirustukset](topic:drawings)); skaalaa PDF tulostaaksesi toiselle koolle |
| Hitsimerkit yksiosaisissa valmistuspiirustuksissa; muut merkit kuin kulmahitsit | Kokoonpanopiirustukset sisältävät kulmahitsimerkit; valmistuspiirustus antaa hitsin tekstinä |
| Piirustuksen muokkaaminen sovelluksessa | Muuta mallia ja tee piirustus uudelleen; merkitse PDF PDF-sovelluksessa, kuten MarkupCraft |
| Piirustukset DWG-muodossa mittaobjekteina tai malli täysmittakaavassa mallitilassa, arkit asetteluina | Jokainen arkki on täysikokoinen DWG- tai DXF-tiedosto paperista, mitat viivoina ja lukuina ([Yleisjärjestely- ja kokoonpanopiirustukset](topic:drawings#download)) |
| NC-reiät pyöreissä putkissa, lovet kulmaterästen ja pyöreiden putkien NC-tiedostoissa | Ei kirjoiteta; katso [NC-tiedoston kentät](topic:nc1-fields) |
| Viisteet, merkinnät ja sisäreunat NC-tiedostoissa | Ei tällä hetkellä |
| Pulttireiät, pultit, hitsit ja anturat USD-viennissä | Ne ovat IFC-, NC- ja osaluettelovienneissä; katso [Vie teräsmalli USD-muodossa](topic:usd) |
| Liitosten, anturoiden, pitkäreikien tai suorakaiteen muotoisten reikien ja pyöreiden putkien reikien tuonti IFC-tiedostosta | {{ui:Tuo IFC}} tuo palkit, pilarit, sauvat, levyt, ruudukot, tasot, pyöreät reiät, lovet, pultit ja raudoitustangot, ja sen raportti luettelee, mitä jätti pois |
| Omat raporttiasettelut | Kolme CSV-tiedostoa |

## Paneelit

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Alareunan raporttien siirtäminen ({{ui:Ongelmat}}, {{ui:Osaluettelo}}, {{ui:Taivutusluettelo}}) | Vain {{ui:Malli}}- ja {{ui:Ominaisuudet}}-paneelit liikkuvat. Katso [Järjestä paneelit](common:arrange-panels) |

## Yhteistyö ja tallennus

| Ei vielä | Sen sijaan, tänään |
|---|---|
| Pilvitallennus ja synkronointi tietokoneiden välillä | Tallenna `.detailcraft.json`-tiedostot ja jaa ne kuten mitä tahansa tiedostoa. Pilvitallennus ei ole vielä käytettävissä |
| Muiden kursorit ja ”muokkaa”-merkinnät Live TeamWork -istunnossa; ruudukot, tasot ja vaiheet yhdistettynä kohde kerrallaan | Muutokset yhdistyvät silti (ruudukot, tasot ja vaiheet siirtyvät kokonaisina, myöhempi muutos voittaa); katso [Muokkaa yhtä rakennetta yhdessä reaaliajassa](topic:work-live) |
| Kutsulinkit Live TeamWork -istuntoon internetin yli | Liity lyhyellä koodilla samassa verkossa |

## Alustat

- DetailCraft on tehty työpöydän, kannettavan tai tabletin näytölle. Se toimii myös puhelimella: malli säilyttää näytön ja paneelit, ja raportit avautuvat arkkeina sovelluspalkin alareunasta, mutta paneeleille on vähän tilaa.
- Offline-käyttö vaatii, että DetailCraft on ensin tallennettu offline-käyttöön sovelluspalkin painikkeella {{ui:Tallenna offline-käyttöön}}. Kun siinä lukee {{ui:Offline valmis}}, kaikki tässä versiossa toimii ilman yhteyttä. Katso [Työskentely offline-tilassa](common:offline).

Jos joku näistä puutteista estää työsi, kerro meille [tukisivun](https://getcadcraft.com/support) kautta; se auttaa päättämään, mitä rakennetaan seuraavaksi.
