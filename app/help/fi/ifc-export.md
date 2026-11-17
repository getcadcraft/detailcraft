---
title: Vie IFC koordinointia varten
summary: Kirjoita koko mallin IFC4-tiedosto, teräs, pultit, perustukset ja raudoitus mukaan lukien, jaettavaksi arkkitehtien, insinöörien ja muiden ohjelmien kanssa.
keywords: ifc, ifc4, ifc2x3, bim, vienti, tuonti, tuo ifc, reiät, pultit, irtopultit, aukot, kiinnittimet, koordinointi, mallin vaihto, step, openbim, törmäys, katselin
from: cfcb0cd6
---

IFC-vienti kirjoittaa koko mallin yhdeksi IFC4-tiedostoksi, jonka BIM-ohjelmat ja IFC-katselimet voivat avata.

## Vienti

1. Valitse {{ui:IFC}} ryhmästä {{ui:Tuloste}}.
2. Selain lataa tiedoston `<name>.ifc`. Tilarivillä kerrotaan, mitä tiedostoon meni, esimerkiksi ”IFC4 viety: 25 osaa, 88 kiinnitintä, 7 perustusta, 132 raudoitustankoa.”

Jos mallissa ei ole osia, perustuksia tai raudoitustankoja, tilarivillä lukee ”Ei vietävää vielä.”

## Tiedoston sisältö

| DetailCraft-mallissa | IFC-tiedostossa |
|---|---|
| Jokainen taso | Rakennuskerros (IfcBuildingStorey), yhden projektin, tontin ja rakennuksen alla |
| Akselistot | IfcGrid akseleineen ja nimilappuineen |
| Pilarit, palkit, tukisauvat | IfcColumn, IfcBeam, IfcMember (tukisauva), kukin vakioprofiilin pursotus todellisilla mitoilla |
| Levyt, päätylevyt, pohjalevyt | IfcPlate |
| Reiät ja lovet | Aukot (IfcOpeningElement), leikattu osasta |
| Sauva ja sen hitsatut levyt | Kokoonpano (IfcElementAssembly), jolla on kokoonpanomerkki |
| Pultit ja ankkuripultit | IfcMechanicalFastener halkaisijalla ja pituudella |
| Perustukset | IfcFooting (anturaperustus), jonka materiaalina on betonimääritys |
| Jokainen tanko | IfcReinforcingBar, jolla on tankomerkki, halkaisija, pinta-ala ja pituus; kulkee todellista keskilinjaa pitkin ja taipeiden kohdalla todelliset kaaret |

Kunkin osan tunniste on sen osamerkki. Jokaisella elementillä on myös ominaisuusjoukko ”DetailCraft”, jossa ovat sen merkinnät, profiili ja paino. Jokainen elementti sijoittuu korkeimpaan kerrokseen, joka on sen alimman kohdan tasolla tai sen alapuolella. Materiaalit ryhmitellään laadun mukaan.

## Pysyvät tunnukset uusille vienneille

Jokaisen elementin IFC-tunnus (GlobalId) lasketaan mallin nimestä ja elementin omasta tunnuksesta mallissa. Kun sama malli viedään kahdesti, tunnukset täsmäävät, joten versioita vertaava ohjelma näkee, mikä on muuttunut.

:::warning
Mallin nimen muuttaminen muuttaa jokaisen tunnuksen. Pidä mallin nimi samana projektin julkaisujen välillä.
:::

## Tarkista

DetailCraftin IFC-tiedostot luetaan testipaketissa takaisin erillisellä IFC-lukijalla. Ohjelmat lukevat IFC-tiedostoja eri tavoin, joten avaa tiedosto tiimisi käyttämässä ohjelmassa ennen kuin luotat siihen. Myös BimCraft (CadCraft) avaa IFC-tiedostoja.

## Ei vielä

- Liitosten, perustusten ja raudoituksen tuonti IFC-tiedostosta. {{ui:Tuo IFC}} tuo palkit, pilarit, sauvat, levyt, akselistot, tasot, reiät, lovet ja pultit ja luettelee, mitä jätti pois.
- Analyyttiset tai rakenteellisen analyysin tiedot.
- Mikä tahansa muu kuin IFC4 Reference View -näkymä.

## Tuonti

{{ui:Tuo IFC}} ryhmästä {{ui:Tiedosto}} (tai pudottamalla `.ifc`-tiedosto näkymään) luo uuden mallin IFC2X3- tai IFC4-tiedostosta:

- **Palkit, pilarit, sauvat (tukisauvat) ja levyt**, joiden runko on yksi DetailCraftin tuntema pursotettu profiili; profiili yhdistetään luetteloon tai säilytetään mukautettuna profiilina. **Akselistot** ja **tasot** tiedoston akselistosta ja kerroksista.
- **Reiät:** jokainen pyöreä aukko (IfcOpeningElement, joka tyhjentää tuodun osan), joka on kohtisuorassa osan jonkin pinnan suhteen: I-profiilin tai U-profiilin uuma tai laipat, putken seinät, levy, kulmateräksen siivet. Putken molemmat seinät läpäisevä reikä tuodaan kerran.
- **Lovet:** suorakaiteen muotoinen aukko, joka vie I-profiilin tai U-profiilin koko leveyden toisesta päästä, ylhäältä alas tai alhaalta ylös.
- **Pultit:** jokainen IfcMechanicalFastener tai IfcFastener halkaisijoineen, pituuksineen, laatuineen ja lajeineen (pultti tai ankkuripultti) **irtopulttina**. Irtopultit näkyvät näkymässä, osaluettelossa ja IFC-viennissä, ja pysyvät paikallaan, kun siirrät sauvoja. {{ui:Ominaisuudet}}-paneeli näyttää, kun mitään ei ole valittu, niiden määrän, ja siinä on {{ui:Poista irtopultit}} -painike silloin, kun lisäät liitoksia sen sijaan.

Raportissa luetellaan kaikki muu luokittain ja syy, miksi se jätettiin pois: seinät ja laatat, perustukset ja raudoitus, uritetut reiät, reiät pyöreissä putkissa, liitokset (IFC-tiedosto kuljettaa niiden levyt ja pultit, ei sääntöä, joka ne loi).
