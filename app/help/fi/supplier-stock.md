---
title: Toimittajan varasto ja toimitusajat
summary: Tarkista sahausluettelon ostettavat tangot toimittajan varastoluetteloa vasten: onko niitä tarpeeksi ja kuinka pitkä odotusaika on?
keywords: toimittaja, varasto, toimitusaika, terästehdas, saatavuus, takatilaus, tangot, hankinta, toimitus
from: 1373f5a3
---

{{ui:Toimitus}}-välilehti etsii jokaisen {{ui:Sahausluettelo}}-luettelon ostaman poikkileikkauksen toimittajan varastoluettelosta. Tiedosto pysyy mallissa, eikä mitään lähetetä minnekään.

## Lisää toimittajan tiedosto

Paina {{ui:Lisää toimittajan tiedosto}} ja valitse toimittajaltasi CSV-tiedosto (pilkku-, puolipiste- tai sarkainerotteinen). Siinä tarvitaan sarake nimikkeelle tai poikkileikkaukselle (Item, Name, Description, Section, SKU) ja sarake varastomäärälle (In stock, Quantity, On hand) tai toimitusajalle. Yksikkö (each, metres, kilograms, tonnes), hinta, toimittaja ja täydennyspäivä luetaan, kun niille on sarake. Myös sanat tunnistetaan: "Out of stock", "In stock", "2-3 weeks", "backorder". Enintään viisi tiedostoa voi olla tallessa; saman nimisen tiedoston lisääminen korvaa vanhan.

## Mitä näet

Jokaisesta sahausluettelon ostamasta poikkileikkauksesta taulukko näyttää, mitä malli tarvitsee, mitä on varastossa, toimitusajan, toimittajan ja tuloksen:

- **Riittää:** varastossa on tarpeeksi.
- **Puuttuu:** varasto on tarvetta pienempi. Jos varasto on tarvetta pienempi ja olet asettanut pisimmän odotusajan, toimitusaika kertoo, kuinka kauan loput kestävät.
- **Liian myöhään:** varastomäärää ei ole, ja toimitusaika on pidempi kuin hyväksytty odotusaika.
- **Ei varastomäärää:** tiedosto ei sitä kerro.
- **Muu yksikkö:** toimittaja ilmoittaa poikkileikkauksen yksikössä, jota mallista ei voi laskea.

Mitä malli tarvitsee, ilmoitetaan tankoina (sisäkkäisestä sahausluettelosta varastopituuksilla), ostettuina tankometreinä ja kilogrammoina (poikkileikkauksen paino metriä kohden). Käytetään tiedoston omaa yksikköä. Poikkileikkaus tunnistetaan nimestään: "W16 X 26" ja "w16x26" ovat sama. Tiedostosta puuttuvat poikkileikkaukset luetellaan.

Puutteet ja myöhästyvät poikkileikkaukset ovat {{ui:Ongelmat}}-paneelissa. Mitään ei tilata täällä.

## Rajoitukset

Varastomäärät ja toimitusajat ovat tiedoston mukaiset sen laatimispäivänä. Levyjä ei sijoiteta levylle (nesting), joten niitä ei haeta. Tiedostoa vain luetaan: mikään sen sisältämä ohje ei ole muuta kuin tekstiä.
