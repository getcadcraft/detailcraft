---
title: Raudoita suorakaiteen muotoinen betonipilari
summary: Esimerkki suorakaiteen muotoisen betonipilarin detaljoinnista DetailCraft-ohjelmalla: sijoita se, anna sille pituussuuntaiset tangot ja sidetangot, lue tarkistukset, sen yläpuolinen limitys ja tankomerkinnät ja piirrä sen valmistusarkki.
keywords: betonipilari, suorakaiteen muotoinen pilari, pilarin raudoitus, pituussuuntaiset tangot, pystytangot, sidetangot, koukut, poikkisidetangot, limitys, limitysliitos, aloitustangot, pilarin teräsprosentti, 1 prosentti, 8 prosenttia, sidetankojen väli, ACI 318-19 25.7.2, EN 1992-1-1 9.5, valmistuspiirustus, tankomerkinnät, 8C1, 3C2
from: aee2a3ca
---

Tämä aihe vie yhden neliöpilarin tyhjästä tarkistettuun, piirrettyyn ja aikataulutettuun detaljiin. Palkkien, laattojen ja seinien yleiset säännöt ovat kohdassa [Detaljoi teräsbetoni](topic:reinforced-concrete); tämä on pilarin puoli siitä, numeroin, jotka voit toistaa.

:::warning
DetailCraft detaljoi antamasi tangot. Se ei mitoita niitä. Alla olevat tangot ovat esimerkin lähtöarvoja, eivät suositus: vastuullinen insinööri valitsee koon, määrän ja välin.
:::

## Mitä pilari tässä on

Suorakaiteen muotoisella pilarilla on leveys (paikallisen x-akselin suunnassa) ja syvyys poikki (paikallisen y-akselin suunnassa), vapaa betonipeite sidetankoihin, pituussuuntaiset tangot jokaisella pinnalla ja suljetut sidetangot. Kiertäminen kiertää koko kokonaisuuden; pinnat säilyvät nimillään "leveyspinta" ja "syvyyspinta".

- Pituussuuntaiset tangot annetaan leveyspinnan lukumääränä ja syvyyspinnan lukumääränä. Kulmatangot lasketaan molempiin, joten 3 ja 3 tekevät 8 tankoa; 4 ja 4 tekevät 12.
- Sidetangot ovat suljettuja suorakaiteita, joissa on kaksi koukkua yhdessä kulmassa, 135° tai 90°. Ensimmäinen sidetanko on määrätyn etäisyyden päässä lattiasta (ja seuraavan alapuolella); päävyöhykkeillä väli on tiheämpi, keskellä harvempi.
- Mitä tangot tekevät yläpäässä: jatkuvat ja limittyvät yläpuolella oleviin tankoihin, kääntyvät 90° koukuilla lattiaan tai päättyvät yläpään alle.

## Esimerkkipilari

400 × 400 mm pilari, 3600 mm yläpuolisen ja alapuolisen lattian välillä, #8 pituussuuntaiset tangot, #3 sidetangot, 40 mm vapaa betonipeite, f'c 28 MPa, fy 420 MPa, ACI 318-19, sisäpilari.

1. Avaa {{ui:Betoni}}-välilehti ja aseta pilarin ruudukkoviivat ja tasot, joilla pilari seisoo (vasen paneeli).
2. Kohdassa {{ui:Lisää ruudukon mukaan}} valitse {{ui:Betonipilari}}, valitse ruudukon leikkauspiste ja kaksi tasoa, aseta {{ui:Leveys (mm)}} ja {{ui:Syvyys poikki (mm)}} arvoon 400 ja valitse {{ui:Lisää}}.
3. Aseta {{ui:Ominaisuudet}}-paneelissa:
   - {{ui:Puhdas betonipeite (mm)}} 40;
   - {{ui:Pituussuuntaiset tangot}} #8, {{ui:Tankoja leveyspinnalla}} 3, {{ui:Tankoja syvyyspinnalla}} 3;
   - {{ui:Sidetangot}} #3, {{ui:Koukut}} 135°, {{ui:Väli (mm)}} 300, {{ui:Päävyöhykkeen pituus (mm)}} 600, {{ui:Väli päävyöhykkeissä (mm)}} 150, {{ui:Ensimmäinen pinnasta (mm)}} 50;
   - {{ui:Tangot yläpäässä}} {{ui:Jatkuu ja limittyy yläpuolella oleviin tankoihin}}.

Jokainen muutos on yksi kumoamisvaihe.

### Mitä saat

| Osa | Tulos |
|---|---|
| Pituussuuntaiset tangot | 8 tankoa #8 (3 × 3 rengas), kukin 4375 mm pitkä: 3600 mm pilari ja sen yläpuolinen 775 mm limitys |
| Limitys | Puristuslimitykseen tarvitaan 757 mm (ACI 318-19 25.5.5.1, fy 420), toteutunut 775 mm: tarve pyöristetty ylöspäin seuraavaan 25 mm:iin |
| Sidetangot | 17 sidetankoa #3, kukin leikkauspituus noin 1359 mm, väli 150 mm kahdella 600 mm päävyöhykkeellä ja 300 mm niiden välissä |
| Teräsprosentti | 2.5 % bruttopoikkileikkauksesta (rajat 1 % – 8 %, ACI 318-19 10.6.1.1) |
| Tankojen vapaa väli | 112 mm (vaaditaan vähintään 40 mm, ACI 318-19 25.2.3) |
| Sidetankojen väli | 300 mm (sallittu 400 mm: pienin seuraavista: 16 tangon halkaisijaa, 48 sidetangon halkaisijaa ja pienempi sivu, ACI 318-19 25.7.2.1) |
| Sidetangon koko | #3 (sallittu 9.5 mm:iin asti, ACI 318-19 25.7.2.2) |

Kaikki nämä ovat elementin {{ui:Tarkistukset}}-luettelossa; limitys on myös kohdassa {{ui:Limitykset ja ankkurointi}}.

## Poikkisidetangot

Yhdellä kehäsidetangolla tuetaan vain kulmatankoja. ACI 318-19 25.7.2.3 sallii pinnan keskitangon olla ilman tukea, jos se on enintään 150 mm:n vapaan välin päässä kulmatangosta. Kun pinnalla on 3 tankoa kuten yllä, tämä täyttyy. Kun pinnalla on 4 tai enemmän tankoja, se ei täyty, ja DetailCraft kertoo siitä varoituksena ({{ui:Tarkistukset}} ja {{ui:Ongelmat}}): tarvitaan "poikkisidetankoja". **Poikkisidetankoja ei vielä piirretä**: lisää ne piirustukseen käsin tai valitse pinnalle vähemmän tankoja.

EN 1992-1-1:n mukaan DetailCraft tarkistaa tangon koon (vähintään 8 mm), tankojen määrän (vähintään 4), teräspinta-alan (0.2 % – 4 % poikkileikkauksesta), vapaan välin ja sidetankojen välin (9.5.2 ja 9.5.3).

## Limitys, antura ja alapuolinen pilari

- Kun **mallin antura on pilarin alla**, pilari limittyy anturan aloitustankojen kanssa, ja niiden limitys tarkistetaan myös.
- Kun **mallin toinen pilari on sen alla**, se limittyy sen pilarin tankojen kanssa.
- Anna oma {{ui:Limityspituus (mm, 0 = tarpeen mukaan)}} ohittaaksesi; liian lyhyt limitys on ongelma ja merkitty taulukkoon *-merkillä.
- Puristuslimityksiä käytetään oletuksena ({{ui:Puristuslimitys}} asetuksissa); valitse {{ui:Vetolimitys}}, kun pilari voi olla vedossa.

## Merkinnät, luettelo ja valmistusarkki

Samanlaisilla tangoilla on yksi merkintä: yllä olevan pilarin pituussuuntaiset tangot ovat 8C1, sen sidetangot 17C2 (ensin lukumäärä, sitten lajikirjain C pilarille ja juokseva numero). Ne näkyvät välilehdessä {{ui:Taivutusluettelo}} leikkauspituuden ja painon kanssa sekä CSV-tiedostossa {{ui:Tuloste}} › {{ui:Lisää}} › {{ui:Taivutus}} -kohdasta.

Valitse pilarin vierestä {{ui:Valmistuspiirustus}} saadaksesi arkin, jossa pilari on julkisivussa (jokainen tanko, sen merkintä, sidetankovyöhykkeet ja limitys mitoitettuina) ja poikkileikkaus keskikohdalla, perässään tankojen taivutusarkki. Tallenna {{ui:Tämä arkki PDF-tiedostona}}.

## Mitä tämä ei tee

- Pyöreät pilarit ja spiraalit sekä suorakaiteesta poikkeavat pilarit: ei vielä toteutettu.
- Kulma- ja poikkisidetangot poikkileikkauksen sisällä sekä seisminen detaljointi (ACI 318-19, luku 18): ei vielä toteutettu.
- Jatkokset valitsemissasi kohdissa tai porrastettuina: kaikki tangot limittyvät yhdessä poikkileikkauksessa.
- Riittävätkö tangot kuormalle: se on insinöörin mitoitus.
