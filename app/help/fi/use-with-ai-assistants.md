---
title: DetailCraft tekoälyavustajan kanssa
summary: Anna oman tekoälyavustajasi tai komentosarjasi lukea malli, sen osat, ongelmat ja törmäykset, lisätä jäseniä ja liitoksia sekä tallentaa ja viedä (myös USD): käyttöoikeudet, yhdistäminen CadCraft Studion kautta ja toimintaloki.
keywords: tekoäly, avustaja, agentti, mcp, model context protocol, komentosarja, automaatio, osat, törmäykset, liitokset, käyttöoikeudet, katkaise yhteys, toiminta, kumoa
from: d624c9a0
---

## Mitä opit

Miten tekoälyavustaja (tai itse kirjoitettu komentosarja) voi työskennellä DetailCraftin kanssa ja miten päätät, mitä se saa koskea.

DetailCraft ei sisällä **omaa tekoälyä** eikä lähetä mitään minnekään. Avustaja tuodaan itse: mikä tahansa ohjelma, joka puhuu Model Context Protocolia (MCP). DetailCraft antaa sille vain työkaluja, ja valitaan, mitkä.

## Ota käyttöön

1. Avaa {{ui:Asetukset}} (sovelluspalkin ratas tai {{key:Mod+,}}) ja siirry {{ui:DetailCraft}}-välilehdelle.
2. Kohdassa {{ui:Avustajat}} rastita **Anna tekoälyavustajien ja komentosarjojen käyttää DetailCraftia**. Se on pois päältä, kunnes teet niin.
3. Valitse, mitä se saa tehdä: **Lukeminen** on valittuna alussa. Rastita **Muokkaus**, **Tallennus** tai **Vienti** vain silloin, kun tarvitset niitä.

Valittujen käyttöoikeuksien ulkopuoliset työkalut eivät ole avustajan käytettävissä. Jos avustaja pyytää jotakin niistä silti, DetailCraft kieltäytyy ja kirjaa pyynnön toimintalokiin. Kytkimen kääntäminen pois päältä katkaisee kaikki yhteydet heti.

## Yhdistä avustaja

Avustajat yhdistyvät **CadCraft Studion** kautta tietokoneellasi. Studio käynnistää pienen palvelimen, johon vain tämä tietokone pääsee, ja sitä suojaa tunnus, jonka Studio luo joka käynnistyksellä. Valitse Studiossa {{ui:Yhdistä avustaja}} ja kopioi osoite ja tunnus avustajaasi. Studio näyttää tarkat asetukset, jotka liitetään. Tunnusta ei saa koskaan jakaa.

:::note
Selainvälilehti ei voi avata yhteyttä avustajalle: selainsovelluksissa kytkin ei vaikuta, ennen kuin käytät CadCraft Studiota omalla tietokoneellasi.
:::

## Ohjat pysyvät käyttäjällä

- **Jokainen muutos on yksi kumoamisvaihe**, ja se on merkitty avustajan nimellä (esimerkiksi ”Avustaja: lisää palkki”, ”Avustaja: lisää jäykisteet”). {{key:Mod+Z}} kumoaa avustajan viimeisimmän muutoksen kokonaisuudessaan. Avustajan oma `undo` kumoaa vain sen omat vaiheet, ei koskaan käyttäjän, ellei se nimenomaan pyydä sitä.
- **Se odottaa.** Kun sijoitat jäsentä, siirrät osia tai liität, DetailCraft hylkää avustajan muutokset ja pyytää yrittämään uudelleen.
- **Tiedät, kun yhteys on.** Sovelluspalkin painike nimeää avustajan, kun se on yhteydessä. Napsauta sitä nähdäksesi, mitä se saa tehdä, tai **Katkaise yhteys**.
- **Toiminta.** {{ui:Asetukset}} › {{ui:DetailCraft}} › {{ui:Avustajat}} › {{ui:Toiminta}} listaa jokaisen kutsun: milloin, mikä työkalu ja tehtiinkö vai hylättiinkö. {{ui:Tallenna loki}} tallentaa kopion.

## Mitä avustaja voi pyytää

Kaikki mitat ovat millimetrejä. Pisteet `[x, y, z]`, z ylöspäin, kuten mallissa.

| Työkalu | Oikeus | Mitä se tekee |
|---|---|---|
| `app_info`, `model_describe` | Lukeminen | Avoin malli: ruudukot, tasot, vaiheet, jäsenet tyypin ja profiilin mukaan, liitokset, perustukset, portaat, osat, teräspaino, ongelmat |
| `parts_list` | Lukeminen | Osamerkinnät profiilin, materiaalin, leikkauspituuden, määrän, painon, vaiheen ja kokoonpanomerkintöjen kanssa; tyypin, profiilin, merkinnän tai vaiheen mukaan |
| `problems_list` | Lukeminen | Mitä {{ui:Ongelmat}}-välilehti listaa, kukin kuvauksineen |
| `clash_check` | Lukeminen | [Törmäystarkistus](topic:clash-check), toleransseineen ja vaiheineen |
| `selection_get` | Lukeminen | Mitä on valittuna |
| `selection_set` | Muokkaus | Valitsee jäseniä, liitoksia, perustuksia tai portaita (tunnuksen tai osamerkinnän mukaan) näytettäväksi käyttäjälle; ei muuta mitään |
| `member_add` | Muokkaus | Palkki, pilari, vinotuki tai levy kahden pisteen välillä |
| `connection_add` | Muokkaus | Päätylevyt, leikkausliitoslevyt, pohjalevyt, jatkokset tai kulmalevyt siihen, missä annetut jäsenet kohtaavat, kuten {{ui:Liitä}}-painikkeet tekevät |
| `undo` | Muokkaus | Kumoaa avustajan viimeisimmät vaiheet |
| `model_save` | Tallennus | DetailCraft-mallin tallennus |
| `model_export` | Vienti | IFC, NC-tiedostot, BOM, taivutusluettelo, KISS-tiedosto tai sahausluettelo, kuten {{ui:Tuloste}}-painikkeet ne tekevät |
| `usd_export` | Vienti | Teräsmalli USD-muodossa (.usda, .usdc tai .usdz), kuten {{ui:Tuloste}} › {{ui:USD}} sen kirjoittaa (ks. [Vie teräsmalli USD-muodossa](topic:usd)). Studiossa se voi kirjoittaa tiedoston kansioon, jonka olet sallinut |

## Jos jokin ei toimi

- **Avustaja ei näe DetailCraft-työkaluja:** tarkista, että kytkin on päällä tässä ikkunassa ja että ikkuna on auki Studiossa.
- **”vaatii muokkausoikeuden”** (tai tallennus- tai vientioikeuden): rastita se kohdassa {{ui:Avustajat}} ja pyydä uudelleen.
- **”Käyttäjä sijoittaa jäsentä”:** lopeta, mitä teet (tai paina {{key:Esc}}), ja anna avustajan yrittää uudelleen.
- **Virheet ”401” tai ”token”:** tunnus vaihtui (Studio käynnistettiin uudelleen tai {{ui:Uusi tunnus}}). Kopioi uusi tunnus avustajan asetuksiin.

## Katso myös

- [Reseptit tekoälyavustajille](common:assistants-recipes): toimivia esimerkkejä, kukin työkaluineen.
