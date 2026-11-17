---
title: Sijoita anturat raudoituksineen
summary: Sijoita suorakaiteen muotoiset laattaanturat alapohjaverkolla ja odotusteräksillä, tarkista ne ja lataa taivutusluettelo.
keywords: antura, laattaantura, perustus, raudoitus, raudoitusteräs, tangot, pohjaverkko, odotusteräkset, tapit, taivutusluettelo, tankoluettelo, betoni, koukut, betonipeite
from: 41a048be
---

Tämä aihe koskee suorakaiteen muotoisia laattanturoita. Palkit, pilarit, laatat ja seinät ovat kohdassa [Yksityiskohtainen raudoitettu betoni](topic:reinforced-concrete). Jokainen antura saa alapohjaverkon molempiin suuntiin ja halutessasi pystyssä ulkonevat odotusteräkset. Tangot ovat US-kokoja #3 – #11.

## Sijoita antura

1. Valitse {{ui:Pohjakuva}} ja valitse anturan yläpinnan taso.
2. Valitse {{ui:Aseta}}-ryhmästä {{ui:Anturaperustus}} tai paina {{key:F}}.
3. Aseta anturan asetukset {{ui:Ominaisuudet}}-paneelissa (katso alla) tai jätä oletukset.
4. Klikkaa ruudukon leikkauspistettä. Antura keskitetään siihen ja sen yläpinta tulee tasolle. Tilarivi kertoo esimerkiksi ”Anturaperustus 2000 x 2000 x 600 kohdassa A/1.”

Voit myös käyttää {{ui:Lisää ruudukon mukaan}}-lomaketta paneelin alareunassa.

Antura piirretään läpinäkyvänä, jotta näet sen tangot, jotka piirretään täytteisinä putkina.

## Anturan asetukset

| Kenttä | Oletus | Huomautukset |
|---|---|---|
| Pituus L (mm) | 2000 | x-suunnassa; 300–50000 |
| Leveys B (mm) | 2000 | y-suunnassa; 300–50000 |
| Syvyys H (mm) | 600 | 150–10000 |
| Betoni | 4000 psi | Teksti, tulee IFC-vientiin |

**Alapohjaverkko**

| Kenttä | Oletus | Huomautukset |
|---|---|---|
| Pitkät tangot | #5 | Tangot L-suunnassa, alempi kerros |
| Väli (mm) | 250 | Suurin sallittu väli; tangot jaetaan tasaisesti tämän välin mukaan tai tiheämmin |
| Lyhyet tangot | #5 | Tangot B-suunnassa, pitkien tankojen päällä |
| Väli (mm) | 250 | Kuten yllä |
| Betonipeite (mm) | 75 | Vapaa betonipeite joka pinnalla |
| Päätykoukut | Päällä | Kääntää kunkin pohjatangon molemmat päät ylös 90° vakiokoukkuun (muoto U); pois päältä tangot ovat suoria (muoto S) |

**Odotusteräkset**

| Kenttä | Oletus | Huomautukset |
|---|---|---|
| Odotusteräkset | Päällä | Kytke pois anturalle, jossa ei ole odotusteräksiä |
| Tanko | #6 | |
| Tankoja L-suuntaan / Tankoja B-suuntaan | 2 / 2 | Tankoruudukko, keskitetty anturan keskelle |
| Väli L-suunnassa / Väli B-suunnassa | 250 / 250 | Tankojen keskiöiden välissä |
| Ulkonema yläpinnan yläpuolella | 600 | Kuinka pitkälle tangot ulkonevat anturan yläpinnan yläpuolelle |
| Alapään koukku | Päällä | 90° koukku osoittaa ulospäin ja lepää pohjaverkon päällä (muoto L) |

Kenttien alla DetailCraft näyttää pitkien tankojen koukun varren, esimerkiksi ”Koukun varsi kohteelle #5: 254 mm ulkoreunasta ulkoreunaan.”

## Muokkaa sijoitettua anturaa

Valitse antura (klikkaa sen betonia kaukana pilareista tai jotakin sen tangoista). Saat samat kentät sekä {{ui:Keskipiste x}}, {{ui:Keskipiste y}}, {{ui:Yläpinta z}} ja {{ui:Kierto (°)}}. Niiden alla taulukko luettelee tämän anturan tangot merkintöineen, lukumäärineen ja pituuksineen sekä betonitilavuuden kuutiometreinä.

Jokainen muutos tarkistetaan ennen kuin se säilytetään. Muutos, jota ei voi rakentaa, hylätään ja tilarivi kertoo syyn, esimerkiksi ”Betonipeite ei jätä tilaa tangoille tässä anturassa.”, ”Antura on liian matala kahdelle tankokerrokselle betonipeitteen sisällä.” tai ”Odotusteräkset eivät mahdu anturan sisään 75 mm:n betonipeitteellä.”

Muutokset, jotka voidaan rakentaa mutta jotka vaativat tarkastelua, luetellaan anturan alla ja {{ui:Ongelmat}}-välilehdellä:

- ”#11-tangot 59.6 mm:n välein jättävät alle 35.8 mm vapaata tilaa (ACI 318-19 25.2.1).” Vapaan välin tankojen välillä on oltava vähintään tangon halkaisija ja vähintään 25.4 mm.
- ”#5-koukut tarvitsevat 254 mm syvyyden; betonipeitteen sisään mahtuu vain 150 mm.” Koukun varret katkaistaan silloin lyhyiksi mahtumaan, joten ne eivät ole enää vakiokoukkuja.
- ”Odotusteräksen koukut ulottuvat betonipeitteeseen.”
- ”Odotusteräkset ovat lähempänä kuin vähimmäisvapaaväli.”

## Tankonumerot ja taivutusluettelo

Samanlaiset tangot (sama koko, muoto ja mitat millimetriin asti) jakavat tankonumeron kaikissa anturoissa. Merkinnät kirjoitetaan muodossa `<tangon numero>F<n>`: 5F1, 5F2 #5-tangoille, 6F1 ensimmäiselle #6-tangolle ja niin edelleen. Anturat, joilla on sama koko, betoni, verkko ja odotusteräkset, jakavat anturamerkinnän: F1, F2 …

1. Avaa alareunassa {{ui:Taivutusluettelo}}-välilehti. Jokainen rivi on yksi tankonumero: koko, muoto, mitat A, B ja C, lukumäärä, leikkauspituus, kokonaispituus, massa metriä kohti, kunkin paino, kokonaispaino ja tangon käyttötarkoitus.
2. Valitse välilehdeltä {{ui:Lataa CSV}} tai {{ui:Tuloste}}-ryhmän {{ui:Lisää}}-valikosta {{ui:Taivutus}}, tiedostolle `<name> bending schedule.csv`.

Muodot ovat DetailCraft-koodeja, eivät standardin koodeja: S suora, L yksi taive, U kaksi taivetta. Mitat ovat ulkoreunasta ulkoreunaan; leikkauspituus on tarkka keskiviivan pituus taipeiden kautta. Katso [Raudoitusviite](topic:rebar-reference).

## Mitä DetailCraft ei tarkista

- Ankkurointi- ja limityspituudet sekä se, ovatko odotusteräkset tarpeeksi pitkiä yllä olevalle pilarille.
- Vapaan välin säännön kiviaineen kokoa koskeva osa (se ei tunne seosta).
- Mitään yllä olevasta pilarista tai jalkalevystä: anturat ja teräs ovat erillisiä.

Katso myös [Ei vielä toteutettu](topic:not-built-yet).
