---
title: Profiililuettelo
summary: Jokainen sisäänrakennettu teräskoko, miten profiilien nimet kirjoitetaan, mistä mitat tulevat ja miten levyt ja omat poikkileikkaukset nimetään.
keywords: profiilit, poikkileikkaukset, luettelo, koot, w-profiilit, leveälaippainen, s-profiilit, u-profiili, kulmateräs, hss, putki, pipe, ipe, hea, heb, upn, uk, brittiläinen, ub, uc, pfc, ea, uea, epätasakylkinen kulmateräs, shs, rhs, chs, kylmämuovattu, kuumavalssattu, blue book, levy, aisc, en 10365, nimeäminen
from: cd9b2bc3
---

DetailCraftissa on 2,311 sisäänrakennettua kokoa, joista jokainen on kopioitu julkaistusta taulukosta ja tarkistettu sovelluksen testeillä: mitoista lasketun pinta-alan on vastattava julkaistua pinta-alaa, ja julkaistun painon on vastattava tätä pinta-alaa kerrottuna teräksen tiheydellä. Levyt ja omat profiilit tehdään mitoistaan.

## Nimeäminen

- **US-profiilit** kirjoitetaan niin kuin AISC Manual ne tulostaa, pienellä x-kirjaimella: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Kirjoitus ei erottele isoja ja pieniä kirjaimia.
- **Pipe** kirjoitetaan kuten AISC-tietokannassa: Pipe4STD, Pipe4XS, Pipe4XXS (standard, extra strong, double extra strong).
- **Eurooppalaiset profiilit** kirjoitetaan kuten EN 10365: IPE200, HEA240, HEB300, UPN200 (ilman välilyöntiä).
- **Brittiläiset profiilit** kirjoitetaan niin, että ensin tulee perhe ja sitten Blue Bookin koko: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Kylmämuovatut onttoprofiilit alkavat CF:llä: CFSHS100x100x5.0. Piirustuksissa usein esitetty tapa kirjoittaa toimii myös: 305x165x40 UB, L100x100x10, SHS100x5.
- **Levyt** ovat `PL<paksuus>x<leveys>` millimetreinä: PL20x200 on 20 mm paksu ja 200 mm leveä. Mikä tahansa koko {{ui:Levy}}-työkalusta toimii.
- **Omat profiilit** saavat mikä nimi tahansa, kunhan se ei ole luettelonimi eikä muistuta levyn nimeä.

Profiililuetteloissa kunkin ryhmän otsikko nimeää lähteensä, esimerkiksi "W-profiilit — AISC Shapes Database v16.0".

## Lähteet

| Ryhmä | Lähde | Huomautukset |
|---|---|---|
| W-profiilit, S-profiilit, U-profiilit (C), kulmateräkset (L), HSS, Pipe | AISC Shapes Database v16.0 | Mitat muunnettu tuumista millimetreiksi tarkasti; massa metriä kohti julkaistusta lb/ft-arvosta |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimetrit ja kg/m julkaistuina |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), taulukko v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimetrit ja kg/m julkaistuina |
| Levyt | Parametrinen | Massa pinta-alasta × 7850 kg/m³ |
| Oma | Omat mitat | Massa pinta-alasta × 7850 kg/m³ |

Miten muodot piirretään:

- **W-profiilit:** AISC-tietokanta ei anna pyöristyssädettä, joten DetailCraft piirtää pyöristyksen muodossa r = kdes − tf.
- **S-profiilit ja U-profiilit (C, UPN):** rinnakkaiset laipat julkaistulla keskimääräisellä paksuudella, suorat kulmat (todellinen laippa on viisto).
- **Kulmateräkset:** suorat kulmat.
- **Suorakaide-HSS:** suunniteltu seinämän paksuus (0.93 × nimellinen, kuten AISC 360-22 B4.2 sallii), ulkokulman säde kaksinkertainen tähän arvoon nähden.
- **Pyöreä HSS ja Pipe:** suunniteltu seinämän paksuus (0.93 × nimellinen).
- **IPE, HEA, HEB, UB, UC:** julkaistu juurisäde.
- **PFC, EA, UEA:** suorat kulmat (julkaistu massa ja pinta-ala sisältävät yhä säteet).
- **SHS, RHS, CHS:** nimellinen seinä. Kuumavalssatut kulmat: ulko 1.5 t, sisä t. Kylmämuovatut: ulko 2 t, sisä t, kun paksuus on enintään 6 mm; 2.5 t ja 1.5 t, kun enintään 10 mm; 3 t ja 2 t sen yli.

## Koot

Jokainen koko, jonka taulukot luettelevat näissä ryhmissä, pienimmästä alkaen:

| Ryhmä | Koot |
|---|---|
| W-profiilit (289) | W4x13 – W44x408 |
| S-profiilit (28) | S3x5.7 – S24x121 |
| U-profiilit (32) | C3x3.5 – C15x50 |
| Kulmateräkset, tasakylkiset (61) | L2x2x1/8 – L12x12x1-3/8 |
| HSS, suorakaide ja neliö (525) | HSS1-1/2x1-1/2x1/8 – HSS34x10x1 |
| HSS, pyöreä (189) | HSS1.660x0.140 – HSS28.000x1.000 |
| Pipe (51) | Pipe1/2STD – Pipe26XS |
| IPE (18) | IPE80 – IPE600 |
| HEA (24) | HEA100 – HEA1000 |
| HEB (24) | HEB100 – HEB1000 |
| UPN (18) | UPN50 – UPN400 |
| Kulmateräkset, epätasakylkiset (76) | L2-1/2x1-1/2x3/16 – L8x6x1 |
| UB (107) | UB127x76x13 – UB1016x305x584 |
| UC (46) | UC152x152x23 – UC356x406x1299 |
| PFC (16) | PFC100x50x10 – PFC430x100x64 |
| EA (42) | EA20x20x3.0 – EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 – UEA200x150x18.0 |
| SHS, kuumavalssattu (123) | SHS40x40x3.2 – SHS400x400x17.5 |
| RHS, kuumavalssattu (161) | RHS50x30x3.2 – RHS500x300x17.5 |
| CHS, kuumavalssattu (103) | CHS42.4x3.2 – CHS508.0x17.5 |
| CFSHS, kylmämuovattu (96) | CFSHS25x25x2.0 – CFSHS400x400x12.5 |
| CFRHS, kylmämuovattu (137) | CFRHS50x25x2.0 – CFRHS500x300x12.5 |
| CFCHS, kylmämuovattu (106) | CFCHS33.7x3.0 – CFCHS508.0x16.0 |

Peilattu epätasakylkinen kulmateräs on sama kappale käännettynä päinvastoin, niin kuin verstas tekee vastakkaisen käden: sen reiät, lovet ja vahvistelevy kulkevat mukana.

Valitse asetustyökalu ja valitse koko nähdäksesi sen syvyyden, laippaleveyden, uuman ja laipan paksuuden, pyöristyssäteen, pinta-alan (cm²), massan (kg/m) ja lähteen {{ui:Ominaisuudet}}-paneelin {{ui:Profiili}}-laatikossa.

## Mitä kukin muoto osaa

| Muoto | Reiät | Lovet | Päätylevyt ja pohjalevyt | NC-tiedosto | Valmistuspiirustus |
|---|---|---|---|---|---|
| I-profiilit (W, S, IPE, HEA, HEB, UB, UC, oma I) | Uuma, yläpuolen laippa, alalaippa | Kyllä | Päätylevyt: palkki ja pilari. Pohjalevyt: kyllä | Kyllä | Kyllä |
| U-profiilit (C, UPN, PFC) | Uuma, yläpuolen laippa, alalaippa | Ei | Vain pohjalevyt | Kyllä | Kyllä |
| Suorakaide-HSS, SHS, RHS | Sivuseinä (uuma), yläseinä, alaseinä | Ei | Vain pohjalevyt | Kyllä | Kyllä |
| Pyöreä HSS, Pipe, CHS | Ei vielä | Ei | Vain pohjalevyt | Kyllä | Kyllä |
| Kulmateräkset (L, EA, UEA) | Ei vielä | Ei | Vain pohjalevyt | Kyllä | Kyllä |
| Levyt ja omat tankoteräkset | Levyn pinta | Ei | Ei | Kyllä | Kyllä |

Suorakaideputkessa ”uuma”-pinnan reikä kulkee molempien sivuseinien läpi. Mitä kukin NC-tiedosto sisältää, on kohdassa [NC-tiedoston kentät](topic:nc1-fields).

## Tarvitsetko toisen koon?

Lisää se [omana profiilina](topic:plates-and-profiles#add-a-custom-profile). Sisäänrakennettua luetteloa ei voi vielä muokata sovelluksesta.
