---
title: Aseta levyt ja lisää omia profiileja
summary: Aseta irralliset levyt paksuuden ja leveyden mukaan ja määritä omat I-, U-, kulma-, putki- tai tankoprofiilit.
keywords: levy, litteä, oma profiili, käyttäjäprofiili, parametrinen, profiili, muoto, poikkileikkaus, pl
from: c24c3b51
---

## Aseta levy

Levy asetetaan kuin palkki: se kulkee kahden leikkauspisteen välillä, leveys poikittain ja paksuus ylös.

1. Valitse {{ui:Levy}} {{ui:Aseta}}-ryhmästä tai paina {{key:P}}.
2. Aseta {{ui:Ominaisuudet}}-paneelissa {{ui:Paksuus (mm)}} ja {{ui:Leveys (mm)}}. Oletus on 20 x 200 materiaalilla A36.
3. Aseta tarvittaessa {{ui:Materiaali}} ja {{ui:Kierto (°)}}. Kierto 90 pystyttää levyn kantilleen.
4. Napsauta kahta leikkauspistettä tai käytä {{ui:Lisää ruudukon mukaan}} -lomaketta.

Levyprofiilin nimi kirjoitetaan `PL<paksuus>x<leveys>`, esimerkiksi PL20x200. Sen pituus on kahden pisteen välinen etäisyys.

Muuttaaksesi asetetun levyn kokoa valitse se ja muuta {{ui:Paksuus (mm)}} tai {{ui:Leveys (mm)}}.

Asettamasi levyt ovat omia osiaan (merkki p, kokoonpano P). Liitosten tekemät päätylevyt ja pohjalevyt ovat myös levyjä, mutta muutat niitä liitoksensa kautta; katso [Päätylevyt](topic:end-plates).

## Lisää oma profiili

Kun tarvitsemaasi poikkileikkausta ei ole luettelossa, tee se mittojensa mukaan. Oma profiili kuuluu malliin ja tallennetaan sen mukana. Jos haluat käyttää sitä jokaisessa uudessa mallissa, pidä se kohdassa {{ui:Omat profiilit}}, joka on kuvattu alla kohdassa ”Säilytä profiili uusille malleille”.

1. Avaa vasemmalla olevassa {{ui:Malli}}-paneelissa {{ui:Oma profiili}}.
2. Kirjoita {{ui:Nimi}}, esimerkiksi `W8x18-custom` tai `RHS 120x80x5`. Se ei voi olla luettelonimi eikä muistuttaa levyn nimeä.
3. Valitse {{ui:Muoto}}: {{ui:I-profiili}}, {{ui:U-profiili}}, {{ui:Tasakylkinen kulmateräs}}, {{ui:Suorakaideputki}}, {{ui:Pyöreä putki}} tai {{ui:Tankoteräs}}.
4. Täytä ilmestyvät mitat, kaikki millimetreinä:

| Muoto | Mitat |
|---|---|
| I-profiili | Syvyys d, laippaleveys bf, uuma tw, laippa tf, pyöristyssäde r (voi olla 0) |
| U-profiili | Syvyys d, laippaleveys bf, uuma tw, laippa tf (suorat kulmat) |
| Tasakylkinen kulmateräs | Leveys b (kumpikin jalka), paksuus t |
| Suorakaideputki | Korkeus h, leveys b, paksuus t (ulkokulman säde 2t) |
| Pyöreä putki | Halkaisija D, paksuus t |
| Tankoteräs | Leveys b, paksuus t |

5. Jätä {{ui:Säilytä omissa profiileissa}} valituksi, jos haluat profiilin jokaiseen uuteen malliin (ks. alla), tai poista valinta, jos haluat sen vain tähän malliin.
6. Valitse {{ui:Lisää profiili}}.

Tilarivi kertoo ”Profiili ”…” lisätty; se on jokaisessa profiililuettelossa kohdassa Oma profiili.” Se näkyy lomakkeen alla olevassa luettelossa ja jokaisen {{ui:Profiili}}-luettelon lopussa.

DetailCraft tarkistaa, että muoto voi olla olemassa. Näet viestejä, kuten ”Uuma ja laipat eivät mahdu syvyyden ja leveyden sisään.”, ”Pyöristyssäde on liian suuri laipalle.” tai ”Seinä on liian paksu.” Korjaa luvut ja valitse {{ui:Lisää profiili}} uudelleen.

### Mitä omat profiilit saavat

- Massa metriä kohti pinta-alasta × 7850 kg/m³ (luettelokoot käyttävät julkaistua painoa).
- Omat I-profiilit saavat reiät, lovet, päätylevyt, NC-tiedostot ja valmistuspiirustukset kuten luettelon I-profiilit.
- Omat tankoteräkset toimivat kuten levyt.
- Omat U-profiilit ja putket saavat reiät; kulmateräkset ja pyöreät putket eivät vielä.

Omaa profiilia ei voi muokata tai poistaa mallista, kun se on lisätty (käytä heti {{key:Mod+Z}}, jos teit virheen). Anna korjatulle profiilille uusi nimi.

## Säilytä profiili uusille malleille

{{ui:Omat profiilit}} lomakkeen alla on oma luettelosi omista profiileistasi. Se säilytetään tässä selaimessa, tällä tietokoneella, ei mallitiedostossa eikä tilillä.

- Profiili, joka lisätään niin, että {{ui:Säilytä omissa profiileissa}} on valittu, menee luetteloon. Jokainen uusi malli, myös se, jonka DetailCraft avaa käynnistyessään, alkaa kaikilla luettelon profiileilla profiililuetteloissaan.
- Profiilin, joka on jo mallissa mutta ei luettelossa, vieressä on {{ui:Säilytä}}-painike.
- Mallissa, jossa ei ole yhtä omistasi profiileista (esimerkiksi vanhemmassa tiedostossa), valitse {{ui:Käytä tässä}} lisätäksesi sen.
- {{ui:Poista}} poistaa profiilin luettelosta. Mallit, jotka käyttävät sitä jo, säilyttävät oman kopionsa.
- Avaamasi malli säilyttää tiedostoonsa tallennetut profiilit. Tiedoston avaaminen ei koskaan muuta luetteloasi.
- Nimi, joka on jo luettelossa eri mitoilla, hylätään: anna uudelle profiilille toinen nimi.
- Selaimen sivustotietojen tyhjentäminen tai toisen selaimen tai tietokoneen käyttäminen aloittaa tyhjällä luettelolla. Yksityinen ikkuna ei voi säilyttää luetteloa; sovellus kertoo siitä.
