---
title: Teräsportaiden generaattori
summary: Teräsportaat lattiasta lattiaan -korkeuden, kulun ja leveyden mukaan: nousu ja kulku valitsemasi sääntöjoukon mukaan, välitasot, kaiteet ja tolpat, työpiirustukset ja sahausluettelo painoineen.
keywords: teräsportaat, portaiden generaattori, reunapalkki, askelma, ruutulevy, ritilä, taitettu levyaskelma, välitaso, käsijohde, tolpat, nousu, kulku, osha, ibc, approved document k, sahausluettelo, painot, työpiirustus
from: a4f0a985
---

Portaiden generaattori tekee koko teräsportaikon muutamasta luvusta: reunapalkit, askelmat, välitasot, kun porrassuora on liian korkea, käsijohteet tolppineen ja tolpat, kiinnitysreiät reunapalkkeihin, sahausluettelon painoineen ja työpiirustukset. Se lähtee liikkeelle {{ui:Portaat}}-työkalusta kuten tavallisetkin portaat (katso Portaat), yhdellä lisävalinnalla.

## Aseta teräsportaat

1. Valitse {{ui:Portaat}} ryhmästä {{ui:Aseta}} tai paina {{key:S}}.
2. Oikealla ruuduta {{ui:Käytä teräsportaiden generaattoria}}.
3. Valitse **sääntöjoukko** sen mukaan, missä portaat rakennetaan, **nousu** (lattiasta lattiaan; 0 = seuraavaan tasoon asti), **käytettävissä oleva pituus** (0 = anna säännön päättää), **vapaa leveys** ja **askelmatyyppi**: ruutulevy, ritilä tai taitettu levyaskelma.
4. Aseta reunapalkin profiili, välitasot (säännön mukaan tai lukuna), käsijohteet (molemmilla puolilla, yhdellä tai ei ollenkaan), kaiteen korkeus ja tolppaväli.
5. Napsauta akselien leikkauspistettä: se on ensimmäisen nousun juuri.

Valitse portaat (napsauta reunapalkkia, askelmaa tai kaidetta) muuttaaksesi mitä tahansa asetusta; ominaisuuksissa näkyvät nousut, kulku, kaltevuus, porrassuorat ja välitasot, niiden teräs, sahausluettelo ja sääntöjoukon lähteet.

## Sääntöjoukot

Sääntöjoukko rajaa portaiden muodon: nousun ja kulun, 2 × nousu + kulku, kaltevuuden, välitason, kaiteen korkeuden ja suurimman aukon. DetailCraft tarjoaa alla olevat; alue on asetus, ei arvaus. Avaa ominaisuuksista **Mistä tämän sääntöjoukon luvut tulevat**: jokainen luku nimeää lähteensä ja kertoo, kuinka hyvin se on tarkistettu.

- **International Building Code 2021**: nousu 4–7 in., askelma vähintään 11 in., kaiteet 34–38 in. Välitasojen 12 ft:n raja näkyy merkittynä *ei luettu* -tilaan, ja kaidelukuja on luettu koodia lainaavista julkaisuista: vahvista ne ennen kuin luotat niihin.
- **OSHA 29 CFR 1910.25 ja 1910.29** (teolliset normaaliportaat): 30–50°, nousu enintään 9.5 in., askelma vähintään 9.5 in., leveys vähintään 22 in., välitasot portaan levyisiä ja 30 in. syviä, yläkaide käytettynä käsijohteena 36–38 in. Nämä on luettu itse säädöksestä.
- **Approved Document K 2013, England** (yleiset kulku- ja hyötyportaat): nousu- ja kulkualueet sekä 2 × nousu + kulku 550–700 mm, luettu valtion teettämästä raportista, joka taulukoi ne. Asiakirja ei anna DetailCraftille kaiteen korkeutta, joten käytetään asettamaasi korkeutta ja Ongelmat-luettelo kertoo siitä.

Sääntöjoukkoa, jota ei ole tässä, ei arvata: porras noudattaa silloin tavallista 600–650 mm:n mukavuussääntöä ja kertoo, ettei sillä ole sääntöä.

## Mitä se laskee

- **Nousut ja kulku.** Vähimmäismäärä nousuja, joiden 2 × nousu + kulku on säännön alueen keskellä, niin että kulku ei jää säännön vähimmäisarvon alle. Kun pituus on annettu, kulku on pituus jaettuna askelmilla, ja kaikki säännön ulkopuolelle jäävä kerrotaan.
- **Porrassuorat ja välitasot.** Porrassuora, joka on korkeampi kuin sääntö sallii, jaetaan välitasolla, joka on portaan levyinen ja vähintään säännön vähimmäisarvon kokoinen; voit myös pyytää välitasoja. Välitaso on kehikko, jossa on kaksi sivupalkkia ja kaksi poikittaista kulmaterästä kannen alla, kahdella tolpalla.
- **Askelmat.** Ruutulevy on hitsattu levy (oletuksena 6 mm; kuviointia ei lisätä painoon). Taitetussa levyaskelmassa on käännös nosingissa, ja se pultataan reunapalkin uumaan: kaksi reikää, jotka ovat 2 mm pulttia suuremmat, syvyyden 0.3 ja 0.7 kohdalla. Ritilä piirretään yhtä painavana levynä (kantavan palkin syvyys × paksuus ÷ jako); poikkipalkkeja ja nauhoja ei lasketa, ja sahausluettelo kertoo tämän.
- **Kaiteet.** Putkiyläkaide tolpilla jokaista porrassuoraa ja välitasoa pitkin, ja tolppaväli, jonka läpi ei mene yhtään säännön aukkoa suurempaa palloa (oletuksena enintään 100 mm).

## Piirustukset, sahausluettelo, vienti

- Porrassuora on yksi kokoonpano; kaiteet ovat toinen (molemmat puolet ovat sama kokoonpano, tehty kahdesti). Kummallakin on oma kokoonpanopiirustus, ja reunapalkin piirustus näyttää sen reiät.
- **Portaiden arkki** (ST-…) näyttää kunkin porrassuoran reunapalkin suorana, reikien asemat kirjoitettuina alemmasta päästä, ja askelman yksityiskohdan: leikkauksen, nosingin, käännöksen ja päätylaipan reikineen.
- {{ui:Sahausluettelo ja painot}} ominaisuuksissa luettelee jokaisen profiilin ja pituuden määrineen ja kiloineen; {{ui:Lataa sahausluettelo (CSV)}} tallentaa sen.
- Kaikki menee osaluetteloon, NC-tiedostoihin ja IFC-vientiin tavallisina osina (IfcMember, IfcColumn, IfcPlate).

## Hyvä tietää

- Tämä on lähtökohta, ei suunnitelma. Mitään ei tarkisteta lujuuden tai taipuman osalta; sääntöjoukko vain rajaa muodon.
- Reunapalkkien päät lattioita vasten leikataan suoriksi eikä niitä yksityiskohtaisteta; välitason tolpat seisovat alla olevaan lattiaan asti, eikä niissä ole pohjalevyjä.
- Portaiden sijoittaminen yhtenä elementtinä BimCraft-ohjelmistoon ei ole vielä kytketty.
