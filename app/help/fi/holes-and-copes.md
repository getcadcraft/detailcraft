---
title: Lisää reikiä ja loveuksia
summary: Kirjoita reiät runkoihin, pinnoille ja levyihin, ja lovi palkin päähän laipoista, mitattuna kappaleen leikkauspäästä.
keywords: reikä, reiät, pulttireikä, lovi, loveus, leikkaus, loveaminen, poraus, lävistys, uumareikä, laipan reikä
from: 33d12398
---

Reiät ja loveukset kirjoitetaan paikan mukaan. Ne kuuluvat sauvaan ja liikkuvat sen mukana.

Liitosten (päälevyt, jalkalevyt) tekemät reiät lisätään puolestasi; et kirjoita niitä itse. Ne luetellaan muodossa ”… reikää liitoksista (muokkaa liitosta)”.

## Mistä paikat mitataan

- **x** kulkee kappaletta pitkin sen **leikkausalusta**: alkupää sen jälkeen, kun mikä tahansa liitos on leikannut sitä. Joten x = 0 on teräksen todellinen pää, ei ruudukkopiste.
- **y** mitataan pinnan poikki poikkileikkauksen keskiöstä:
   - **uumalla**: ylös (positiivinen) tai alas syvyyden keskikohdasta;
   - **laipalla** tai **levyllä**: leveyden poikki keskiviivasta.
- Sauvan alku on ensimmäinen piste, jonka klikkasit sitä sijoittaessasi. Rivit {{ui:Päät (x, y, z mm)}} näyttävät, mikä pää on mikä.

## Lisää reikä

1. Valitse sauva.
2. Valitse {{ui:Ominaisuudet}}-paneelin {{ui:Reiät}}-ruudusta {{ui:Pinta}}: {{ui:Uuma}}, {{ui:Yläpuolen laippa}} tai {{ui:Alapuolen laippa}} (I-profiilille, U-profiilille tai suorakaideputkelle) tai {{ui:Levyn pinta}} (levylle).
3. Kirjoita {{ui:x pituussuunnassa (mm)}}, {{ui:y poikittain (mm)}} ja {{ui:Halkaisija (mm)}}. Lomake alkaa arvoista x 100, y 0, halkaisija 22.
4. Valitse {{ui:Lisää reikä}}.

Tilarivi kertoo ”Reikä lisätty. x mitataan leikkausalusta; y poikkileikkauksen keskiöstä (uuma: ylös, laippa/levy: poikki).” Reikä näkyy luettelossa ja näkymässä tummana tulppana pinnan läpi.

Poistaaksesi reiän, valitse sen vieressä luettelossa oleva ×.

Kulmaterästä ja pyöreitä putkia ei voi vielä varustaa reiillä: niiden {{ui:Reiät}}-ruutu kertoo sen.

:::note
Kolmiulotteisessa näkymässä reiät piirretään tummina tulppina, eikä niitä leikata teräkseen. Ne ovat todellisia reikiä NC-tiedostoissa, valmistuspiirustuksissa ja IFC-viennissä.
:::

Reikä, jonka x on kappaleen jommankumman pään ulkopuolella, näkyy {{ui:Ongelmat}}-välilehdellä muodossa ”reikä on kappaleen pään ulkopuolella”.

## Lisää lovi

Loveukset ovat I-profiileille: ne leikkaavat pois yläpuolen tai alapuolen laipan (ja sen syvyisen uuman) toisesta päästä, jotta palkki väistää toista sauvaa.

1. Valitse I-profiilin sauva.
2. Valitse {{ui:Loveukset}}-ruudusta {{ui:Loppu}} ({{ui:Alku}} tai {{ui:Loppu}}) ja {{ui:Sivu}} ({{ui:Ylä}} tai {{ui:Ala}}).
3. Kirjoita {{ui:Pituus (mm)}} (palkkia pitkin tästä päästä) ja {{ui:Syvyys (mm)}} (alas yläreunasta tai ylös alareunasta). Lomake alkaa arvoista 100 x 40.
4. Valitse {{ui:Lisää lovi}}.

Näkymä näyttää loveuksen leikattuna teräksestä. Luettelo kertoo esimerkiksi ”Ylä alussa: 100 x 40”. Poista se ×-painikkeella.

Loveukset ovat suorakulmaisia: sisäkulmassa ei ole vielä pyöristystä.

## Miten reiät ja loveukset vaikuttavat merkintöihin

Kaksi osaa saa saman osamerkinnän vain, jos niiden reiät ja loveukset täsmäävät 1 mm:n tarkkuudella, kun sallitaan osan kääntäminen. Reiän lisääminen ryhmän yhteen palkkiin antaa sille uuden merkinnän. Katso [Merkintäsäännöt](topic:mark-rules).
