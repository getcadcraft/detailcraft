---
title: Tiedostojen avaaminen, tallentaminen ja vienti
summary: DetailCraft-mallitiedosto, kaikki sen kirjoittamat viennit, minne tiedostot menevät ja mitkä asiat eroavat selaimen tai yhteyden mukaan.
keywords: avaa, tallenna, vie, lataa, tiedosto, json, ifc, nc1, dstv, csv, pdf, zip, muodot, tuo
from: 6fbc8e8f
---

Sovelluksella on yksi oma tiedosto, malli, sekä viisi vientiä. Jokainen tallennus ja jokainen vienti on lataus. Mitään ei lähetetä, eikä mitään säilytetä palvelimella.

## Mallitiedosto

Malli tallennetaan nimellä `<name>.detailcraft.json`, missä `<name>` on mallin nimi {{ui:Malli}}-paneelissa. Tiedostoon tallentuvat ruudukot, tasot, sauvat (reikineen ja lovineen), liitokset ja niiden asetukset, anturaperustukset sekä omat profiilit.

Osia, merkkejä, pultteja, hitsejä ja raudoitustankoja ei tallenneta: DetailCraft laskee ne uudelleen mallista joka kerta, kun se avataan. Siksi mallitiedosto on pieni.

### Tallenna

1. Kirjoita nimi {{ui:Nimi}}-kenttään {{ui:Malli}}-paneelin yläosassa.
2. Valitse {{ui:Tallenna}} {{ui:Tiedosto}}-ryhmästä tai paina {{key:Mod+S}}.
3. Selain lataa tiedoston `<name>.detailcraft.json`. Tilarivillä lukee ”Tallennettu … (ladattu)”, ja selainvälilehden otsikon alussa oleva piste katoaa.

Jokainen tallennus on uusi lataus. Selain ei korvaa avattua tiedostoa; asetuksistaan riippuen se lisää nimeen numeron, kuten `Frame (1).detailcraft.json`, tai kysyy, minne tallennetaan. Säilytä omat versiot nimeämällä lataukset uudelleen.

:::chromium
Chrome ja Edge tallentavat Lataukset-kansioon, ellei selaimen latausasetuksissa ole päällä **Kysy, minne kukin tiedosto tallennetaan ennen latausta**. Ota se käyttöön, jos haluat valita kansion ja tiedostonimen joka kerta.
:::

:::firefox
Firefox tallentaa Lataukset-kansioon tai kysyy joka kerta, jos asetuksissa on päällä **Kysy aina, minne tiedostot tallennetaan**.
:::

:::safari
Safari tallentaa Lataukset-kansioon. Kansion vaihtamiseksi avaa **Safari, Asetukset, Yleiset, Tiedostojen latauspaikka**.
:::

### Avaa

1. Valitse {{ui:Avaa}} {{ui:Tiedosto}}-ryhmästä tai paina {{key:Mod+O}}.
2. Valitse `.detailcraft.json`-tiedosto.

Tai vedä tiedosto kohteesta {{pick:mac=Finder|windows=File Explorer|linux=tiedostonhallinta}} ja pudota se näkymään. Näkymässä lukee vedettäessä ”Pudota DetailCraft-malli avattavaksi”.

Jos avoimessa mallissa on tallentamattomia muutoksia, DetailCraft kysyy ensin: {{ui:Peruuta}}, {{ui:Hylkää muutokset}} tai {{ui:Tallenna ensin}}.

DetailCraft tarkistaa tiedoston jokaisen kentän ennen käyttöä. Kaikki, mitä se ei voi käyttää, jätetään pois, ja tilarivillä kerrotaan mitä, esimerkiksi ”2 sauvaa ei kelvannut ja jätettiin pois.” Uudemmalla DetailCraft-versiolla tallennettu malli hylätään ilmoituksella sen sijaan, että se avattaisiin puolittain oikein.

### Mitä se avaa

Omat mallitiedostot (`.json`, enintään 50 MB) ja IFC-tiedostot (`.ifc`, IFC2X3 tai IFC4, enintään 200 MB). IFC-tiedosto, joka avataan tai tuodaan kohdasta {{ui:Tuo IFC}}, muuttuu uudeksi malliksi sen palkeista, pilareista, sauvoista, levyistä, ruudukoista ja tasoista; siihen leikataan reiät ja lovet, ja sen pultit tulevat irrallisina pultteina. Raportti luettelee, mitä jätettiin pois. Katso [IFC-vienti](topic:ifc-export#import). Se ei avaa vielä DWG- eikä DXF-tiedostoja eikä muiden detaljointiohjelmien malleja; yritys näyttää ilmoituksen: ”DetailCraft avaa omat mallinsa (.detailcraft.json) ja IFC-tiedostot (.ifc).”

## Menetetty työ, viimeisimmät tiedostot ja työpöytäsovellus

- Kun mallissa on tallentamattomia muutoksia, DetailCraft säilyttää kopion tähän selaimeen. Jos välilehti tai selain pysähtyy ennen tallennusta, seuraavalla avauskerralla DetailCraft kysyy **Palautetaanko työ?**: palauta kopio tai hylkää se. Katso [Työn palauttaminen](common:recover).
- Äskettäin avatut mallit näkyvät aloitusnäytössä, kun selain sallii avata ne uudelleen; napsauta mallia, niin se avautuu uudelleen.
- Työpöytäsovelluksessa {{ui:Tallenna}} kirjoittaa mallin takaisin avattuun tiedostoon (selaimessa se lataa kopion), ja kaksoisnapsautus DetailCraft-mallista tai IFC-tiedostosta avaa sen sovelluksessa.

## Viennit

Kaikki viennit käyttävät mallin nimeä. Valitse ne {{ui:Tuloste}}-ryhmästä.

| Painike | Tiedosto | Mitä siinä on |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: kerrokset, ruudukot, jokainen teräsosa profiilipursotuksena reikineen ja lovineen, kokoonpanot, pultit ja ankkuripultit, anturaperustukset ja jokainen raudoitustanko. Katso [IFC-vienti](topic:ifc-export). |
| {{ui:NC-tiedostot}} | `<name> NC.zip` | Yksi DSTV-tiedosto `.nc1` jokaista osamerkkiä kohden. Katso [Lähetä NC-tiedostot verstaalle](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Kolme taulukkoa yhdessä tiedostossa: osat, kokoonpanot sekä pultit ja ankkuripultit. Katso [Merkinnät ja osaluettelo](topic:marks-and-bom). |
| {{ui:Taivutus}} | `<name> bending schedule.csv` | Jokainen tankonumero anturoissa. Katso [Anturaperustukset ja raudoitus](topic:footings-and-rebar). |
| {{ui:Valmistuspiirustus}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` sisältää arkin jokaista osamerkkiä kohden; {{ui:Lataa PDF}} antaa näkyvän arkin (A3, ellei valitse toista kokoa). Katso [Valmistuspiirustusten tekeminen](topic:shop-drawings). |
| {{ui:Piirustukset}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` tai `.dxf`, useita tiedostoon `<name> drawings DWG.zip` (tai `DXF.zip`) | Pohjakuvat, julkisivut ja kokoonpanopiirustukset valitsemallasi arkkikoolla; DWG ja DXF täysikokoisina, 1 yksikkö = 1 mm paperilla. Katso [Yleisjärjestelypiirustukset ja kokoonpanopiirustukset](topic:drawings). |

### CSV-tiedostot

- Ne alkavat tavujärjestysmerkillä, jotta taulukkolaskentaohjelmat lukevat ääkköset oikein.
- Solu, joka alkaa merkillä `=`, `+`, `-` tai `@` (eikä ole tavallinen luku), saa alkuun heittomerkin, jotta taulukkolaskenta ei koskaan suorita sitä kaavana.
- Pituudet ovat millimetrejä ja painot kilogrammoja.

### PDF-tiedostot

PDF-tiedoston teksti käyttää vakiofonttia Helvetica. Merkit, joita siinä ei ole (Länsi-Euroopan merkistön ulkopuolella), tulostuvat muodossa ”?”, ja tilarivi kertoo, kuinka monta.

## Yksiköt

DetailCraft toimii kauttaaltaan millimetreillä: ruudukot, tasot, koordinaatit, profiilit, reiät ja jokainen vienti. Profiilinimet säilyttävät julkaistun muotonsa (W12x50 on yhdysvaltalainen merkintä, vaikka sen mitat näytetään mm:nä). Imperiaalisia mittoja ei voi syöttää vielä.

## Online ja offline

Avaaminen, tallentaminen ja vieminen tapahtuvat kaikki selaimessa, joten ne toimivat samalla tavalla yhteydellä tai ilman, kun DetailCraft on latautunut.

Jotta sovellusta voi käyttää myöhemmin ilman yhteyttä, valitse sovelluspalkista {{ui:Tallenna offline-käyttöön}}, kun olet yhteydessä. Painike laskee ylöspäin (”Tallennetaan 3/20”) ja näyttää sitten {{ui:Offline valmis}}. Tallennettuun kopioon kuuluu 3D-grafiikkakirjasto (noin 2.6 MB) ja tämä ohje, joten tallennuksen jälkeen 3D-näkymä, kaikki viennit ja ohje toimivat offline-tilassa. Lisätietoja ja siitä, mikä vaatii yhä yhteyden: [Työskentely offline-tilassa](common:offline).

:::offline
Olet offline-tilassa. Jos sovelluspalkissa lukee {{ui:Offline valmis}}, avaaminen, tallentaminen ja vieminen toimivat tavalliseen tapaan. Jos ei, pidä tämä välilehti auki, älä lataa sitä uudelleen ennen kuin yhteys palaa, ja tallenna malli heti.
:::

Pilvitallennus ei ole vielä käytettävissä, eikä työpöytäversioita ole vielä. Varmuuskopioi `.detailcraft.json`-tiedostot samalla tavalla kuin muutkin työtiedostot. Lisätietoja: [Minne tiedostot menevät](common:your-files).

## Tallentamaton työ

DetailCraft säilyttää mallin vain avoimessa välilehdessä. Jos suljet tai lataat välilehden uudelleen tallentamattomin muutoksin, selain kysyy, halutaanko poistua sivulta; sanamuoto on selaimen oma. Tallenna usein painamalla {{key:Mod+S}}.
