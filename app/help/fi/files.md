---
title: Avaa, tallenna ja vie tiedostoja
summary: DetailCraftin mallitiedosto, jokainen sen kirjoittama vienti, minne tiedostot menevät ja mikä eroaa selaimen ja yhteyden mukaan.
keywords: avaa, tallenna, vie, lataa, tiedosto, json, ifc, nc1, dstv, csv, pdf, zip, muodot, tuo
from: bd715ea3
---

DetailCraftilla on yksi oma tiedosto, malli, ja viisi vientiä. Jokainen tallennus ja jokainen vienti on lataus. Mitään ei lähetetä, eikä mitään säilytetä palvelimella.

## Mallitiedosto

DetailCraft-malli tallennetaan tiedostona `<nimi>.detailcraft.json`, jossa `<nimi>` on mallin nimi {{ui:Malli}}-paneelissa. Se sisältää ruudukot, tasot, sauvat (reikineen ja loveuksineen), liitokset ja niiden asetukset, anturaperustukset ja omat profiilisi.

Osia, merkkejä, pultteja, hitsejä ja tankoja ei tallenneta: DetailCraft laskee ne uudelleen mallista aina kun se avautuu. Siksi mallitiedosto on pieni.

### Tallenna

1. Kirjoita nimi {{ui:Malli}}-paneelin yläreunan {{ui:Nimi}}-kenttään.
2. Valitse {{ui:Tiedosto}}-ryhmästä {{ui:Tallenna}} tai paina {{key:Mod+S}}.
3. Selain lataa tiedoston `<nimi>.detailcraft.json`. Tilarivi sanoo "Tallennettu … (ladattu).", ja selaimen välilehden otsikon alussa oleva piste häviää.

Jokainen tallennus on uusi lataus. Selain ei korvaa avaamaasi tiedostoa; asetuksistaan riippuen se lisää nimeen numeron, kuten `Frame (1).detailcraft.json`, tai kysyy, minne tallennetaan. Säilytä omat versiosi nimeämällä lataukset uudelleen.

:::chromium
Chrome ja Edge tallentavat Lataukset-kansioon, ellei selaimen lataus-asetuksissa ole päällä **Kysy, minne kukin tiedosto tallennetaan ennen lataamista**. Ota se käyttöön, jos haluat valita kansion ja tiedostonimen joka kerta.
:::

:::firefox
Firefox tallentaa Lataukset-kansioon tai kysyy joka kerta, jos asetuksissa on päällä **Kysy aina, minne tiedostot tallennetaan**.
:::

:::safari
Safari tallentaa Lataukset-kansioon. Voit vaihtaa kansion avaamalla **Safari, Asetukset, Yleiset, Ladattujen tiedostojen sijainti**.
:::

### Avaa

1. Valitse {{ui:Tiedosto}}-ryhmästä {{ui:Avaa}} tai paina {{key:Mod+O}}.
2. Valitse `.detailcraft.json`-tiedosto.

Tai vedä tiedosto kohteesta {{pick:mac=Finder|windows=Resurssienhallinta|linux=tiedostonhallinta}} ja pudota se näkymään. Näkymässä lukee "Pudota DetailCraft-malli tai IFC-tiedosto avataksesi sen", kun vedät.

Jos avoimessa mallissa on tallentamattomia muutoksia, DetailCraft kysyy ensin: {{ui:Peruuta}}, {{ui:Hylkää muutokset}} tai {{ui:Tallenna ensin}}.

DetailCraft tarkistaa tiedoston jokaisen kentän ennen kuin käyttää sitä. Kaikki, mitä se ei voi käyttää, jätetään pois ja tilarivi kertoo mitä, esimerkiksi "2 sauvaa oli virheellisiä ja jätettiin pois." Uudemman DetailCraftin tallentama malli hylätään viestillä sen sijaan, että se avattaisiin puolittain oikein.

### Mitä se avaa

Omat mallitiedostonsa (`.json`, enintään 50 Mt) ja IFC-tiedostot (`.ifc`, IFC2X3 tai IFC4, enintään 200 Mt). IFC-tiedostosta, joka avataan tai tuodaan komennolla {{ui:Tuo IFC}}, tulee uusi malli sen palkeista, pilareista, sauvoista, levyistä, ruudukoista ja tasoista niihin leikattuine reikineen ja loveuksineen ja sen pultit irtopultteina; raportti luettelee, mitä jätettiin pois. Katso [IFC-vienti](topic:ifc-export#import). Se ei vielä avaa DWG:tä, DXF:ää eikä minkään muun detaljointiohjelman mallia; yritys näyttää "DetailCraft avaa omia mallejaan (.detailcraft.json) ja IFC-tiedostoja (.ifc)."

## Menetetty työ, viimeisimmät tiedostot, työpöytäsovellus

- Kun mallissa on tallentamattomia muutoksia, DetailCraft säilyttää kopion tässä selaimessa. Jos välilehti tai selain pysähtyy ennen tallennusta, DetailCraft kysyy seuraavalla avauskerralla **Palautetaanko työsi?**: palauta kopio tai hylkää se. Katso [Palauta työsi](common:recover).
- Äskettäin avaamasi mallit luetellaan aloitusnäytöllä, kun selain antaa DetailCraftin avata ne uudelleen; napsauta yhtä avataksesi sen uudelleen.
- Työpöytäsovelluksessa {{ui:Tallenna}} kirjoittaa mallin takaisin avaamaasi tiedostoon (selaimessa se lataa kopion), ja DetailCraft-mallin tai IFC-tiedoston kaksoisnapsautus avaa sen DetailCraftissa.

## Viennit

Kaikki viennit käyttävät mallin nimeä. Valitse ne {{ui:Tuloste}}-ryhmästä.

| Painike | Tiedosto | Mitä siinä on |
|---|---|---|
| {{ui:IFC}} | `<nimi>.ifc` | IFC4: kerrokset, ruudukot, jokainen teräsosa profiilipursotuksena reikineen ja loveuksineen, kokoonpanot, pultit ja ankkuripultit, anturaperustukset ja jokainen tanko. Katso [Vie IFC](topic:ifc-export). |
| {{ui:NC-tiedostot}} | `<nimi> NC.zip` | Yksi DSTV `.nc1`-tiedosto osamerkkiä kohti. Katso [Lähetä NC-tiedostot konepajalle](topic:nc-export). |
| {{ui:BOM}} | `<nimi> BOM.csv` | Kolme taulukkoa yhdessä tiedostossa: osat, kokoonpanot sekä pultit ja ankkuripultit. Katso [Merkit ja osaluettelo](topic:marks-and-bom). |
| {{ui:Taivutus}} | `<nimi> bending schedule.csv` | Jokainen anturaperustusten tankomerkki. Katso [Anturaperustukset ja raudoitus](topic:footings-and-rebar). |
| {{ui:Valmistuspiirustus}} | `<nimi> <merkki>.pdf` | Yksi arkki (A3, ellet valinnut toista kokoa) valitulle osalle (I-profiilit ja levyt). Katso [Tee valmistuspiirustus](topic:shop-drawings). |
| {{ui:Piirustukset}} | `<nimi> drawings.pdf`, `<nimi> <arkki>.pdf`; `<nimi> <arkki>.dwg` tai `.dxf`, useita tiedostossa `<nimi> drawings DWG.zip` (tai `DXF.zip`) | Pohjakuvat, julkisivut ja kokoonpanopiirustukset valitsemallasi arkkikoolla; DWG ja DXF täydessä koossa, 1 yksikkö = 1 mm paperilla. Katso [Yleisjärjestely- ja kokoonpanopiirustukset](topic:drawings). |

### Huomautuksia CSV-tiedostoista

- Ne alkavat tavujärjestysmerkillä, jotta taulukkolaskentaohjelmat lukevat ääkköset oikein.
- Solu, joka alkaa merkillä `=`, `+`, `-` tai `@` (eikä ole pelkkä luku), saa alkuun heittomerkin, jotta taulukkolaskenta ei koskaan suorita sitä kaavana.
- Pituudet ovat millimetreinä ja painot kilogrammoina.

### Huomautuksia PDF:stä

PDF:n teksti käyttää Helvetica-vakiofonttia. Merkit, joita siinä ei ole (länsieurooppalaisen joukon ulkopuolella), tulostuvat merkkinä "?", ja tilarivi kertoo, kuinka monta.

## Yksiköt

DetailCraft käyttää kauttaaltaan millimetrejä: ruudukot, tasot, koordinaatit, profiilit, reiät ja jokainen vienti. Profiilinimet säilyttävät julkaistun muotonsa (W12x50 on yhdysvaltalainen merkintä, vaikka sen mitat näytetään millimetreinä). Brittiläisiä tai yhdysvaltalaisia yksiköitä ei voi vielä syöttää.

## Online ja offline

Avaaminen, tallennus ja vienti tapahtuvat kaikki selaimessasi, joten ne toimivat samoin yhteydellä tai ilman, kun DetailCraft on latautunut.

Jos haluat käyttää DetailCraftia myöhemmin ilman yhteyttä, valitse sovelluspalkista {{ui:Tallenna offline-käyttöön}} online-tilassa. Painike laskee ylöspäin ("Tallennetaan 3 / 20") ja näyttää sitten {{ui:Offline valmis}}. Tallennettu kopio sisältää 3D-grafiikkakirjaston (noin 2,6 Mt) ja tämän ohjeen, joten tallennuksen jälkeen 3D-näkymä, jokainen vienti ja ohje toimivat kaikki offline-tilassa. Lisätietoja ja se, mikä vielä tarvitsee yhteyden: [Työskentely offline-tilassa](common:offline).

:::offline
Olet offline-tilassa. Jos sovelluspalkissa lukee {{ui:Offline valmis}}, avaaminen, tallennus ja vienti toimivat tavalliseen tapaan. Jos ei, pidä tämä välilehti auki, älä lataa sitä uudelleen ennen kuin olet taas online-tilassa ja tallenna mallisi nyt.
:::

Pilvitallennus ei ole vielä käytettävissä, eikä työpöytäversioita ole vielä. Varmuuskopioi `.detailcraft.json`-tiedostosi kuten mikä tahansa muu työtiedosto. Lisää aiheessa [Minne tiedostosi menevät](common:your-files).

## Tallentamaton työ

DetailCraft säilyttää mallin vain avoimessa välilehdessä. Jos suljet tai lataat välilehden uudelleen tallentamattomin muutoksin, selain kysyy, poistutaanko sivulta; sen sanamuoto on selaimen oma. Tallenna usein komennolla {{key:Mod+S}}.
