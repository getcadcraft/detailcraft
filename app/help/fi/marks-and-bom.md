---
title: Tarkista merkinnät ja osaluettelo
summary: Lue DetailCraftin antamat osa- ja kokoonpanomerkinnät, tarkista osaluettelo ja lataa se CSV-tiedostona.
keywords: merkinnät, numerointi, osamerkki, kokoonpanomerkki, kappalemerkki, osaluettelo, bom, materiaaliluettelo, painot, pulttiluettelo, csv, numerointi
from: caa2ee80
---

DetailCraft merkitsee mallin itse. Erillistä numerointikomentoa ei ole eikä mitään ajettavaa: jokaisen muutoksen jälkeen se selvittää, mitkä osat ovat samaa terästä, ja antaa niille yhden merkinnän.

## Missä merkinnät näkyvät

- {{ui:Osamerkit}}-luettelo {{ui:Malli}}-paneelissa: jokainen merkki profiilinsa, pituutensa ja määränsä kanssa. Napsauta merkkiä, niin valitaan ensimmäinen osa, jolla on se merkki.
- Valitun sauvan {{ui:Ominaisuudet}}-paneeli (ja vasemman paneelin **Osamerkit**-luettelo): {{ui:Osamerkki}} ja {{ui:Kokoonpano}}. Paneelin otsikossa on myös merkki, esimerkiksi ”Palkki b1”.
- Välilehti {{ui:Osaluettelo}}, CSV, NC-tiedostojen nimet, valmistuspiirustukset ja IFC-vienti (elementin tunnisteena).

## Miten osat merkitään

- **Osamerkit:** c pilareille, b palkeille, br tukisauvoille, st portaan reunapalkeille, p levyille (myös päätylevyille ja pohjalevyille). Sen jälkeen numero: c1, c2, b1, p1 … Kun osat ovat useammassa vaiheessa, vaiheen numero tulee ensin, esimerkiksi 2-b1.
- **Kokoonpanomerkit:** C, B, BR tai P. Kokoonpano on pääsauva ja siihen hitsatut levyt, esimerkiksi palkki kahden päätylevynsä kanssa tai pilari pohjalevynsä kanssa.
- Kaksi osaa saa saman merkinnän, kun niillä on sama profiili, materiaali ja leikkauspituus sekä samat reiät ja lovet, kaikki 1 mm:n tarkkuudella, vaikka toinen on käännetty päinvastoin tai ylösalaisin toiseen nähden.
- Numerointi alkaa pilareista, sitten palkeista, tukisauvoista ja levyistä. Kussakin ryhmässä järjestys on profiilin nimen mukaan ja sitten pisimmästä ensin.

Täydelliset säännöt, myös se, mitkä käännöt lasketaan U-profiileille ja kulmateräksille: [Merkintäsäännöt](topic:mark-rules).

:::warning
Merkinnät lasketaan uudelleen jokaisen muutoksen jälkeen, joten ne voivat numeroitua uudelleen. Osan lisääminen, profiilin vaihtaminen tai reiän lisääminen voi siirtää b3:n kohdalle b4. Pidä merkintöjä lopullisina vain, kun malli on valmis, ja tee osaluettelo, NC-tiedostot ja valmistuspiirustukset samasta tallennetusta mallista.
:::

## Lue osaluettelo

Avaa alareunan {{ui:Osaluettelo}}-välilehti. Siinä on kolme taulukkoa.

**Osat**, ja otsikossa kokonaisteräspaino:

| Sarake | Merkitys |
|---|---|
| Osamerkki | Napsauta sitä, niin valitaan ensimmäinen tällä merkillä oleva osa |
| Tyyppi | palkki, pilari, tukisauva, reunapalkki tai levy |
| Profiili | Esimerkiksi W16x26 tai PL20x180 |
| Materiaali | Asettamasi laatu |
| Pituus (mm) | Leikkauspituus liitosten jälkeen |
| Määrä | Kuinka monta |
| Yksikköpaino (kg) | Profiilin massa metriä kohti × pituus |
| Kokonaispaino (kg) | Yksikköpaino × määrä |

Viimeisellä rivillä on kokonaismäärä ja -paino.

**Kokoonpanot:** jokainen kokoonpanomerkki, sen pääosa, kaikki sen osat (esimerkiksi ”b1 + p1 + p1”), määrä, yksikköpaino ja kokonaispaino.

**Pultit ja ankkuripultit:** ryhmiteltynä lajin, halkaisijan, pituuden ja laadun mukaan, määrineen.

:::note
Painot ovat brutto: reikiä ja lovia ei vähennetä. Pultit, mutterit, aluslevyt ja hitsit eivät sisälly teräspainoon.
:::

## Lataa se

Valitse välilehdessä {{ui:Lataa CSV}} tai valitse {{ui:BOM}} ryhmästä {{ui:Tuloste}}. Tiedosto `<name> BOM.csv` sisältää kolme taulukkoa peräkkäin, kukin otsikkonsa alla, ja niiden välissä on tyhjä rivi. Sen voi avata millä tahansa taulukkolaskentaohjelmalla.

## Tarkista ennen lähettämistä

1. Avaa {{ui:Ongelmat}}-välilehti ja korjaa jokainen rivi. Liitos, jota ei voitu rakentaa, ei lisää levyä, reikiä eikä pultteja, joten osaluettelo jäisi vajaaksi.
2. Etsi odottamattomia merkintöjä. Kaksi palkkia, joiden luulet olevan samoja mutta joilla on eri merkinnät, eroavat yleensä reiän, lovin tai leikkauspituuden osalta; valitse kumpikin ja vertaa.
3. Tallenna malli ja tee sitten kaikki viennit tallennetusta tilasta.
