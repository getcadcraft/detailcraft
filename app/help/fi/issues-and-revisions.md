---
title: Julkaisut, revisiot ja piirustusten muutosloki
summary: Pidä yksi julkaisuhistoria arkkitehdin mallin kanssa: lue julkaisut sisään, kirjaa työmaaohjeet, työpiirustukset ja linkitetyt mallit julkaisua vastaan ja lue piirustusten muutosloki.
keywords: julkaisu, revisio, revisiot, muutosloki, piirustusten muutosloki, piirustusrekisteri, työmaaohje, työpiirustus, linkitetty malli, tarjouskilpailu, rakentaminen, julkaisuhistoria, työpiirustukset, valmistus
from: 4b9a1b7b
---

## Mitä teet

Työskentele samasta julkaisuhistoriasta kuin muu tiimi. Näet, mitkä arkit on julkaistu mihinkin revisioon, ja kirjaat työmaalla tapahtuvan sen julkaisua vastaan, johon se kuuluu.

## Vaiheet

1. Avaa **Julkaisut ja revisiot**.
2. Valitse **Lue julkaisuhistoria** ja valitse BimCraftista tai muusta sovelluksesta tallennettu `.issues.json`-tiedosto. Sen julkaisut ja kirjaukset lisätään omiisi. Mitään ei korvata.
3. Valitse **Lisää kirjaus** työmaaohjeelle, työpiirustukselle, merkintäsarjalle, linkitetylle mallille tai huomautukselle. Valitse julkaisu, johon se kohdistuu, ja sen tila. Valitsemasi tiedosto kirjataan nimensä, kokonsa ja SHA-256-tiivisteensä perusteella; tiedosto pysyy paikallaan.
4. **Piirustusten muutosloki** näyttää yhden rivin kullekin arkille ja yhden sarakkeen kullekin julkaisulle. Sulkeissa oleva revisio on julkaistu uudelleen muuttamattomana.
5. **Lataa muutosloki (CSV)** tallentaa julkaisut, arkkitaulukon ja kirjaukset. **Tallenna julkaisuhistoria** kirjoittaa tiedoston, jonka muut sovellukset lukevat.

## Hyvä tietää

- Arkit julkaistaan edelleen Piirustukset-välilehdeltä arkki kerrallaan. Ne julkaisut näkyvät tässä: samana päivänä yhdellä huomautuksella julkaistut arkit ovat yksi julkaisu.
- Sisään luetut kirjaukset ja julkaisut tallennetaan mallitiedostoon. Jokainen muutos on yksi Kumoa-vaihe.
- Saman tiedoston lukeminen kahdesti ei lisää mitään kahteen kertaan. Kun kahdessa kopiossa on sama kirjaus, uudempi säilytetään.
