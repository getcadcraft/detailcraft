---
title: Siirtyminen muista suunnitteluohjelmista
summary: Miten täyden suunnitteluohjelman tavat vastaavat DetailCraftia ja erot, jotka yllättävät kokeneet suunnittelijat.
keywords: vaihto, siirtyminen, tuttu, työnkulku, vertailu, erot, numerointi, komponentit, luettelo, piirustukset, tavat
from: 39639a5d
---

Jos suunnittelet ohjelmalla Tekla Structures, suurin osa DetailCraftin toiminnoista näyttää tutulta: ruudukot, tasot, profiilit katalogista, osat ja kokoonpanot, liitokset, numerointi, NC-tiedostot, IFC. Mittakaava on hyvin erilainen: Tekla Structures on täysi tuotantojärjestelmä, ja DetailCraft on pieni, varhainen selainsovellus, joka hoitaa muutamia töitä alusta loppuun. Tämä sivu kertoo, missä tavat siirtyvät mukana ja missä eivät.

:::tip
Jos käsiesi muisti tuntee valintanauhan ohjelmasta Tekla Structures, valitse {{ui:Asetukset}} › {{ui:DetailCraft}} › {{ui:Valikot, näppäimet ja hiiri}} -kohdasta valikkotyyliksi {{ui:Terästyönauha}}: välilehdet Mallinnus, Detaljointi, Muokkaus, Piirustukset, Valmistus ja Näkymä, ja keskipainike panoroi. Jos tulet ohjelmasta AutoCAD ja pidät komentojen kirjoittamisesta, {{ui:Piirustusklassikko}} lisää komentorivin (BEAM, COLUMN, ENDPLATE, ZOOM …). Katso [Valikot, näppäimet ja hiiri](topic:menus-keys-and-mouse).
:::

## Pikakartta

| Mihin olet tottunut | DetailCraft-sovelluksessa |
|---|---|
| Ruudukoiden luonti koordinaateilla ruudukkoikkunassa | Vasemmassa paneelissa {{ui:Ruudukot}}: nimet ja viivojen välit, ei absoluuttisia koordinaatteja. Numeroidut viivat kulkevat yhteen suuntaan, kirjaimilla merkityt toiseen |
| Tasot ruudukon Z-koordinaatteina | Erillinen {{ui:Tasot}}-luettelo, nimi ja korkeus riveittäin, otetaan käyttöön {{ui:Käytä tasoja}}-painikkeella |
| Pisteiden poimiminen mihin tahansa tarttumalla | Napsautukset tarttuvat vain ruudukon leikkauspisteisiin. Ruudukon ulkopuoliset pisteet kirjoitetaan sauvan {{ui:Päät (x, y, z mm)}} -kenttiin |
| Pilari-, palkki- ja levykomennot | {{ui:Pilari}} ({{key:C}}), {{ui:Palkki}} ({{key:B}}), {{ui:Tukisauva}} ({{key:R}}), {{ui:Levy}} ({{key:P}}), {{ui:Anturaperustus}} ({{key:F}}) |
| Osan ominaisuusikkuna (kaksoisnapsauta osaa) | Yksi napsautus: oikeanpuoleinen {{ui:Ominaisuudet}}-paneeli on aina käytössä; ikkunaa ei ole, eikä Muokkaa- tai Käytä-painiketta |
| Sijainti tasossa, kierto ja syvyysasetukset | {{ui:Sijainti}} (teräksen yläpinta, keskellä tai alapinta linjalla) ja {{ui:Kierto (°)}}. Erillisiä vaakasuuntaisia siirtymiä ei ole |
| Profiilikatalogi | Kiinteä luettelo 2,311 julkaistusta koosta (AISC W, S, C, L, HSS, Pipe; eurooppalaiset IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS sekä kylmämuokatut ontot profiilit), lisäksi parametriset levyt ja omat {{ui:Oma profiili}} -poikkileikkaukset |
| Materiaaliluettelo | Seitsemän laatua luettelossa: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Liitoskomponentin lisääminen ja sen ikkuna | Valitse palkki ja valitse {{ui:Päätylevyt}}. Asetukset näkyvät {{ui:Ominaisuudet}}-paneelissa. Liitoksia on vain kaksi (päätylevy pilarin laippaan, pohjalevy) |
| Automaattinen liitos tai liitoksen kopiointi samankaltaisiin liitoksiin | Valitse liitos ja valitse {{ui:Käytä samankaltaisiin (n)}} |
| Numerointi sarjoina ja aloitusnumeroina | Ei komentoa: merkinnät päivittyvät itsestään jokaisen muutoksen jälkeen, kiinteillä etuliitteillä c, b, br, p ja C, B, BR, P |
| Pultti- ja reikäikkunat | Reiät kirjoitetaan pinnan ja sijainnin mukaan. Pultit tulevat vain liitoksista |
| Leikkaus-, sovitus- ja monikulmioleikkaustyökalut | Lovet (yläreuna tai alareuna, kummassakin päässä) vain I-profiileissa. Liitosten takaisinleikkaukset tehdään automaattisesti |
| Raportit ja mallipohjat | Kolme kiinteää raporttia alareunan välilehdissä ja CSV-lataukset |
| Piirustuksen luonti ja piirustusluettelo | Yksi valmistuspiirustus osamerkintää kohti, kaikki luodaan kerralla, esikatsellaan ja ladataan yhtenä PDF-tiedostona tai arkki kerrallaan. Mitään ei tallenneta eikä muokata |
| NC-tiedostojen vienti | {{ui:NC-tiedostot}}: yksi DSTV-tiedosto osamerkintää kohti, vain I-profiilit ja levyt, pakattuna zip-tiedostoksi |
| IFC-vienti | {{ui:IFC}}: koko mallin IFC4, raudoituksineen |
| Raudoitus missä tahansa betoniosassa | Raudoitus vain suorakaiteen muotoisissa levyantureissa, USA:n tankokoot, alaverkko ja aloitustangot |
| Malli tallennettuna projektikansioon, monikäyttäjä | Yksi `.detailcraft.json`-tiedosto, jonka lataat. Yksi käyttäjä, omalla tietokoneellasi |
| Kumoushistoria | {{key:Mod+Z}} ja {{key:Mod+Y}}, enintään 200 vaihetta, säilyy, kunnes avaat tai aloitat toisen mallin |

## Erot, jotka yllättävät

### Merkinnät muuttuvat itsestään

Numerointivaihetta ei ole. Merkinnät lasketaan uudelleen jokaisen muutoksen jälkeen, joten ne ovat aina ajan tasalla, mutta ne voivat myös numeroitua uudelleen: lisää pilari, ja eilisen c3 voi olla nyt c4. Vanhoja merkintöjä ei säilytetä "numerointihistoriana". Viimeistele malli ja tuota sitten osaluettelo, NC-tiedostot ja valmistuspiirustukset yhdestä tallennetusta tiedostosta kerralla.

### Keskirulla zoomaa, se ei panoroi

3D-näkymässä: vasen vetäminen kääntää, oikea vetäminen panoroi, rulla zoomaa, ja keskipainikkeella vetäminen zoomaa myös. Kun pidät {{key:Shift}}-näppäintä ja vedät vasemmalla, se panoroi myös. Rulla zoomaa näkymän keskelle, ei osoittimeen. Kiertokeskuksen valintaa ei ole: malli kääntyy näkymän keskikohdan ympäri. Katso [Liiku 3D-näkymässä](topic:navigate-3d).

### Pilarit osoittavat oletuksena yhteen suuntaan

Kierrolla 0 pilarin laipat osoittavat numeroitujen ruudukkoviivojen suuntaan. Palkit, jotka kulkevat kirjaimilla merkittyjen ruudukkoviivojen välissä, liittyvät uumaan, ja päätylevyt estetään siellä ("Beams framing into a column web are not built yet"). Kierrä nämä pilarit 90° ennen liitosten lisäämistä.

### Julkisivut vain kirjaimilla merkityillä viivoilla

{{ui:Julkisivu}} katsoo vain kirjaimilla merkittyjen ruudukkoviivojen suuntaan. Numeroitujen viivojen suuntaisia näkymiä ei ole, eikä tallennettuja näkymiä tai työtasoja. Käytä {{ui:3D}}-näkymää tai {{ui:Lisää ruudukon mukaan}} -toimintoa kehyksille numeroiduilla viivoilla.

### Valinta, kopiointi ja siirto

Valitse useita osia {{key:Shift}}+napsautuksella tai {{key:Mod+A}}, sitten kopioi, leikkaa, liitä (ruudukon leikkauspisteeseen, kirjoitettuun siirtymään tai samaan paikkaan) ja monista ne liitokset mukaan lukien ([Kopioi, liitä ja monista](topic:copy-paste)). Ikkunavalintaa, valintasuodatinta, siirtoa, peilausta tai matriisia ei ole, ja ominaisuuksia muutetaan yksi sauva kerrallaan {{ui:Ominaisuudet}}-paneelissa.

### Ruudukot eivät vedä sauvoja mukanaan

Sauvat säilyttävät koordinaattinsa, kun muutat ruudukon välejä; mikään ei liiku ruudukkoviivojen mukana. Muuta ruudukkoa ennen teräksen sijoittamista tai muokkaa jälkikäteen kunkin sauvan päätekoordinaatteja.

### Liitoksia ei mitoiteta

Kaksi liitosta sijoittavat levyt, reiät, pultit ja hitsit antamiesi lukujen mukaan. Mitään mitoitustarkistusta ei ole, vain reunojen ja välien varoitukset (EN 1993-1-8 taulukko 3.3).

### Reikiä ei leikata 3D-näkymässä

Reiät näkyvät tummina tulppina. Ne ovat todellisia reikiä NC-tiedostoissa, valmistuspiirustuksissa ja IFC-tiedostossa. Lovet leikataan näkymään.

### Painot ovat bruttopainoja

Teräspainosta ei vähennetä reikiä tai lovia, eikä pulttien paino ole mukana.

### Vain millimetrit

Kaikki kirjoitetaan ja näytetään millimetreinä, myös AISC-profiileille. Profiilinimet säilyttävät julkaistun muotonsa (W12x50, HSS6x6x1/4).

### Ei hallittavia piirustuksia

Piirustusluetteloa, piirustuseditoria, yleisjärjestelypiirustuksia tai kokoonpanopiirustuksia ei ole. Valmistuspiirustus tehdään, kun sitä pyydät, ja se ladataan; jos haluat muuttaa sitä, muuta mallia ja tee se uudelleen.

### Se toimii selaimessa

Tallentaminen lataa tiedoston. Näppäinoikoteitä, joita selain varaa itselleen, ei voi käyttää. Mallisi eivät koskaan poistu tietokoneeltasi: katso [Minne tiedostosi menevät](common:your-files).

## Mitä jatkaa nykyisessä ohjelmistossasi

Tänään DetailCraft sopii pieniin kehyksiin, idean tarkistamiseen, opetukseen tai NC-tiedostojen ja valmistuspiirustusten tekemiseen yksinkertaisiin palkki- ja pilarityön. Pidä monimutkaiset liitokset, yleisjärjestelypiirustukset, asennuspiirustukset, monikäyttäjäprojektit ja kaikki, mitä luetellaan kohdassa [Ei vielä toteutettu](topic:not-built-yet), siinä ohjelmistossa, jota käytät nyt.
