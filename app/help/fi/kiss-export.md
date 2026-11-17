---
title: Vie KISS-tiedosto valmistusohjelmistolle
summary: Lähetä määräluettelo valmistuksenhallintaohjelmaan (MIS) KISS 1.1 -tiedostona: kokoonpanot, osat, vaiheet sekvensseinä, reiät, loveukset ja hitsit.
keywords: kiss, kss, mis, valmistuksenhallinta, tuotannonohjaus, kustannusarvio, bom, osaluettelo, vienti, fabtrol, sekvenssi
from: 30cf3951
---

{{ui:Tuloste}}-ryhmässä avaa {{ui:Lisää}} ja valitse {{ui:KISS-tiedosto valmistusohjelmistolle}}. DetailCraft lataa tiedoston `<name>.kss`, KISS-tiedoston (”Keep It Simple, Steel”, versio 1.1). Se on pelkkää tekstiä oleva muoto, josta useimmat valmistuksenhallintaohjelmat tuovat osaluettelon.

## Mitä tiedostoon sisältyy

- Otsikko: työnumero (mallin nimen ensimmäiset kahdeksan kirjainta ja numeroa), mallin nimi, päivämäärä ja kellonaika sekä se, ovatko mitat metrisiä.
- Jokaiselle kokoonpanomerkille: sen pääosa (määrä = kokoonpanojen lukumäärä), piirustusrivi (A-B1 ja niin edelleen, kokoonpanopiirustuksen numero), kokoonpanorivi (nimi, tyyppi, paino, kokonaispituus, syvyys ja leveys), yksi sekvenssirivi kutakin [vaihetta](topic:phases) kohti, johon kokoonpano kuuluu, sekä työrivit: reiät (kuinka monta, halkaisija, läpi menevä paksuus), loveukset ja hitsit.
- Sen jälkeen jokainen siihen kiinnitetty osa **yhteismäärällä** (kokoonpanoa kohti × kokoonpanot), kuten standardi vaatii.
- Irralliset pultit ja ankkuripultit piirustuksella BOLTS, kokoonpanossa FIELD.
- Jokaisella rivillä on tyyppi (W, C, L, HSS, PL tai MI omalle profiilille), koko, laatu, leikkauspituus (mm), osan nimi ja paino.

## Tuumat vai metrit

[DetailCraftin asetuksissa](topic:settings) **KISS-tiedoston mitat** valitsee:

- **Automaattinen** (oletus): imperiaaliset, kun jokainen sauva on AISC-profiili, muuten metriset.
- **Imperiaaliset**: profiilit AISC-nimityksellään (W 16X26, HSS 4X4X.250); levyt ja pultit, joita DetailCraft pitää millimetreinä, lähimpään 1/16 in; painot paunoina (lb).
- **Metriset**: eurooppalaiset profiilit nimellään (IPE300), levyt paksuus X leveys millimetreinä; painot kilogrammoina.

Pituudet ovat aina millimetreinä (mm) kahdella desimaalilla asetuksesta riippumatta: KISS-standardi edellyttää sitä, ja vastaanottava ohjelma muuntaa ne.

:::note
Laadut lyhennetään standardin kahdeksaan merkkiin: A572 Gr 50 muuttuu muotoon A572-50. Nimien pilkut muuttuvat välilyönneiksi, koska muodossa ei ole lainausmerkkejä. Tarkista yksi tuonti omassa ohjelmassasi ennen kuin luotat siihen: DetailCraftin KISS-tiedostot tarkistetaan tässä standardia vasten, eivät vielä valmistusohjelmassa.
:::
