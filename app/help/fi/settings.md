---
title: DetailCraft-asetukset
summary: Aloita uudet sauvat amerikkalaisina tai eurooppalaisina profiileina, aseta, kuinka pitkälle Monista siirtää kopion, valitse tuovatko kopiot liitoksensa, ja näytä tai piilota pultit 3D-näkymässä.
keywords: asetukset, mieltymykset, arkin koko, paperikoko, piirustukset, vaihtoehdot, teräs, aisc, en, eurooppalainen, amerikkalaiset profiilit, metriset profiilit, oletusprofiili, lujuusluokka, S355, A992, monistuksen siirtymä, liitä siirtymällä, kopioi liitokset, pultit, ankkuripultit, piilota pultit, palauta
from: e46cea57
---

Avaa {{ui:Asetukset}} sovelluspalkin hammasrattaasta tai {{key:Mod+,}}. Ensimmäinen välilehti, {{ui:DetailCraft}}, sisältää tähän sovellukseen kuuluvat asetukset; {{ui:Yleiset}} sisältää ne, jotka kaikki CadCraft-sovellukset jakavat (teema, työkalurivi, paneelit). DetailCraftin asetukset ovat vain tässä sovelluksessa: muutat niitä täällä, ne tulevat voimaan heti, ja tämä selain muistaa ne. Niitä ei tallenneta mallitiedostoon.

## Uudet sauvat

Profiilit ja lujuusluokat, joilla sijoitustyökalut alkavat:

| Työkalu | Amerikkalaiset profiilit (AISC), A992 | Eurooppalaiset profiilit (EN), S355 |
|---|---|---|
| {{ui:Palkki}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilari}} | W12x50, A992 | HEB200, S355 |
| {{ui:Tukisauva}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Levy}} | A36 | S355 |

Amerikkalaiset profiilit ovat lähtökohta. Eurooppalainen valinta käyttää tukisauvoihin HEA160-profiilia, koska DetailCraftin EN-luettelossa ei ole vielä onttoprofiileja ([Profiililuettelo](topic:profile-catalog)). Voit silti valita minkä tahansa profiilin ja lujuusluokan seuraavalle kappaleelle {{ui:Ominaisuudet}}-paneelissa, kun sijoitustyökalu on päällä. Mallissa jo olevat sauvat säilyttävät oman profiilinsa ja lujuusluokkansa.

## Monista ja liitä

- **Siirtymä (mm)**: x, y ja z. {{ui:Monista}} ({{key:Mod+D}}) asettaa kopion tämän etäisyyden päähän alkuperäisestä, ja lomake {{ui:Liitä siirtymällä (mm, alkuperäisestä)}} alkaa tällä arvolla. Se alkaa arvosta 6000, 0, 0: yksi 6 m väli numeroitujen ruudukkoviivojen suuntaan. Aseta se kenttäsi väliksi tai z-suuntaan tason korkeudeksi, jos haluat kopioida kerroksen ylös.
- **Kopioi päätylevyt ja pohjalevyt sauvojensa mukana** (alussa päällä): liitos tulee kopion mukaan vain, kun jokainen sen yhdistämä sauva kopioidaan. Poista valinta kopioidaksesi sauvat ja anturat ilman liitoksiaan, esimerkiksi kokeillaksesi kopiossa eri liitosta.

Katso [Kopiointi, liittäminen ja monistaminen](topic:copy-paste).

## 3D-näkymä

**Näytä pultit ja ankkuripultit** (alussa päällä). Poista valinta piilottaaksesi ne näkymästä ja nähdäksesi vilkkaan liitoksen reiät ja levyt. Piilotettuja pultteja ei voi napsauttaa; napsauta levyä valitaksesi liitoksen. Osaluettelo, piirustukset ja kaikki viennit sisältävät silti jokaisen pultin ja ankkuripultin.

## Kulmaindikaattori

Mitä 3D-näkymän kulmassa näkyy: **Näkymäkuutio** (alussa; oikeassa yläkulmassa — napsauta pintaa, reunaa tai kulmaa katsoaksesi sieltä, vedä kiertääksesi sitä, vedä sen kompassirengasta kääntääksesi mallia), **Akselikuvake** (pieni X-, Y- ja Z-merkki vasemmassa alakulmassa, joka kääntyy näkymän mukana: X punainen, Y vihreä, Z sininen) tai **Ei mitään**. Vain {{ui:3D}}-näkymässä; {{ui:Pohjakuva}} ja {{ui:Julkisivu}} eivät näytä kumpaakaan. Katso [Näkymäkuutio](topic:view-cube).

## Palautus

{{ui:Palauta DetailCraft-asetukset}} valintaikkunan alareunassa palauttaa nämä alkuperäisiin arvoihinsa (amerikkalaiset profiilit, siirtymä 6000, 0, 0, liitokset kopioidaan, pultit näytetään) sekä {{ui:Yleiset}}-asetukset.

## Piirustukset

**Arkin koko**: arkkipiirustukset ja valmistuspiirustukset tehdään vaakasuunnassa: A4, A3 (alussa), A2, A1, ANSI B, ANSI C tai ANSI D. {{ui:Piirustukset}}- ja valmistuspiirustusikkunoissa on sama luettelo. Katso [Yleisjärjestely- ja kokoonpanopiirustukset](topic:drawings).

## Raudoitus

- **ASTM-tankonimet**: #3–#11 tai pehmeä metrinen #10–#36 samoille tangoille.
- **Taivutusluettelon muotokoodit**: DetailCraftin S, L, U; ACI 315 -tyypit; tai BS 8666 -muotokoodit. Katso [Raudoitustiedot](topic:rebar-reference).

## Valinta vetämällä

**Suorakulmio** (kuten ennen) tai **Lasso**: vapaamuotoinen viiva, ja {{key:Space}} vaihtaa sisällä, koskettaen ja aita -tilojen välillä vedon aikana. Katso [Valitse ikkunalla](topic:select-and-change#select-with-a-window).
