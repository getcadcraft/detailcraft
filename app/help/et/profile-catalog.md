---
title: Profiilikataloog
summary: Iga sisseehitatud terasmõõt, kuidas profiilinimed kirjutatakse, kust mõõtmed pärinevad ja kuidas plaate ning kohandatud lõike nimetatakse.
keywords: profiilid, lõiked, kataloog, suurused, w-profiilid, laiatiivaline, s-profiilid, kanal, nurgik, hss, toru, ipe, hea, heb, upn, uk, briti, ub, uc, pfc, ea, uea, erivõrsete tiibadega nurk, shs, rhs, chs, külmvormitud, kuumvaltsitud, blue book, plaat, aisc, en 10365, nimetamine
from: cd9b2bc3
---

DetailCraft'il on 2,311 sisseehitatud suurust, igaüks kopeeritud avaldatud tabelist ja kontrollitud rakenduse testidega: mõõtmetest arvutatud pindala peab vastama avaldatud pindalale ning avaldatud kaal peab vastama sellele pindalale korrutatuna terase tihedusega. Plaadid ja kohandatud profiilid tehakse mõõtmete järgi.

## Nimetamine

- **USA profiilid** kirjutatakse nii, nagu AISC Manual need prindib, väikese x-ga: W12x50, C10x15.3, L4x4x1/2, HSS6x6x1/4, HSS6.625x0.280. Sisestamisel ei ole suur- ja väiketähed tähtsad.
- **Toru** kirjutatakse nagu AISC andmebaasis: Pipe4STD, Pipe4XS, Pipe4XXS (standard, tugev, topelt tugev).
- **Euroopa profiilid** kirjutatakse nagu standardis EN 10365: IPE200, HEA240, HEB300, UPN200 (tühikuta).
- **Briti profiilid** kirjutatakse nii, et ees on perekond ja seejärel Blue Booki suurus: UB305x165x40, UC203x203x46, PFC200x90x30, EA100x100x10.0, UEA150x90x10.0, SHS100x100x5.0, RHS200x100x8.0, CHS88.9x5.0. Külmvormitud õõnsad lõigud algavad CF-iga: CFSHS100x100x5.0. Kui kirjutad nii, nagu jooniselt tavaliselt loetakse, töötab ka: 305x165x40 UB, L100x100x10, SHS100x5.
- **Plaadid** on `PL<paksus>x<laius>` millimeetrites: PL20x200 on 20 mm paksune ja 200 mm lai. Iga suurus tööriistast {{ui:Plate}} töötab.
- **Kohandatud profiilid** kannavad nime, mille sa annad, kui see pole kataloogi nimi ega näe välja nagu plaadi nimi.

{{ui:Profile}} nimekirjades nimetab iga grupi pealkiri allikat, näiteks „W shapes — AISC Shapes Database v16.0“.

## Allikad

| Rühm | Allikas | Märkused |
|---|---|---|
| W-profiilid, S-profiilid, kanalid (C), nurgikud (L), HSS, toru | AISC Shapes Database v16.0 | Mõõtmed teisendatud tollidest millimeetriteks täpselt; mass meetri kohta avaldatud lb/ft-st |
| IPE, HEA, HEB, UPN | EN 10365:2017 | Millimeetrites ja kg/m nagu avaldatud |
| UB, UC, PFC, EA, UEA, SHS, RHS, CHS, CFSHS, CFRHS, CFCHS | Steel for Life Blue Book (UK), table v18 (BS EN 10365, BS EN 10056-1, BS EN 10210-2, BS EN 10219-2) | Millimeetrites ja kg/m nagu avaldatud |
| Plaadid | Parameetriline | Mass pindalast × 7850 kg/m³ |
| Kohandatud | Sinu mõõtmed | Mass pindalast × 7850 kg/m³ |

Kuidas kujud joonistatakse:

- **W-profiilid:** AISC andmebaas ei anna ümarduse raadiust, seega joonistab DetailCraft ümarduse r = kdes − tf järgi.
- **S-profiilid ja kanalid (C, UPN):** paralleelsed tiivad avaldatud keskmise paksusega, ruudukujulised nurgad (tegelik tiib on kaldus).
- **Nurgikud:** ruudukujulised nurgad.
- **Ristkülikukujuline HSS:** kavandatud seina paksus (0.93 × nominaalne, nagu AISC 360-22 B4.2 lubab) välisnurga raadiusega, mis on kaks korda sellest.
- **Ümmargune HSS ja toru:** kavandatud seina paksus (0.93 × nominaalne).
- **IPE, HEA, HEB, UB, UC:** avaldatud juuraadius.
- **PFC, EA, UEA:** ruudukujulised nurgad (avaldatud mass ja pindala sisaldavad ikka raadiusi).
- **SHS, RHS, CHS:** nominaalne sein. Kuumvaltsitud nurgad: väline 1.5 t, sisemine t. Külmvormitud: väline 2 t, sisemine t kuni 6 mm; 2.5 t ja 1.5 t kuni 10 mm; 3 t ja 2 t üle selle.

## Suurused

Iga suurus, mida tabelid nendes rühmades loetlevad, väiksemast suuremani:

| Rühm | Suurused |
|---|---|
| W-profiilid (289) | W4x13 kuni W44x408 |
| S-profiilid (28) | S3x5.7 kuni S24x121 |
| Kanalid (32) | C3x3.5 kuni C15x50 |
| Nurgikud, võrdsed tiivad (61) | L2x2x1/8 kuni L12x12x1-3/8 |
| HSS, ristkülikukujuline ja ruudukujuline (525) | HSS1-1/2x1-1/2x1/8 kuni HSS34x10x1 |
| HSS, ümmargune (189) | HSS1.660x0.140 kuni HSS28.000x1.000 |
| Toru (51) | Pipe1/2STD kuni Pipe26XS |
| IPE (18) | IPE80 kuni IPE600 |
| HEA (24) | HEA100 kuni HEA1000 |
| HEB (24) | HEB100 kuni HEB1000 |
| UPN (18) | UPN50 kuni UPN400 |
| Nurgikud, erivõrsed tiivad (76) | L2-1/2x1-1/2x3/16 kuni L8x6x1 |
| UB (107) | UB127x76x13 kuni UB1016x305x584 |
| UC (46) | UC152x152x23 kuni UC356x406x1299 |
| PFC (16) | PFC100x50x10 kuni PFC430x100x64 |
| EA (42) | EA20x20x3.0 kuni EA200x200x24.0 |
| UEA (39) | UEA30x20x3.0 kuni UEA200x150x18.0 |
| SHS, kuumvaltsitud (123) | SHS40x40x3.2 kuni SHS400x400x17.5 |
| RHS, kuumvaltsitud (161) | RHS50x30x3.2 kuni RHS500x300x17.5 |
| CHS, kuumvaltsitud (103) | CHS42.4x3.2 kuni CHS508.0x17.5 |
| CFSHS, külmvormitud (96) | CFSHS25x25x2.0 kuni CFSHS400x400x12.5 |
| CFRHS, külmvormitud (137) | CFRHS50x25x2.0 kuni CFRHS500x300x12.5 |
| CFCHS, külmvormitud (106) | CFCHS33.7x3.0 kuni CFCHS508.0x16.0 |

Peegelpildis erivõrne nurgik on sama detail, mis on otsast otsa pööratud, nagu tootmine teeb vastupidise käe: selle augud, väljalõiked ja sõlmeplaat lähevad kaasa.

Vali paigutustööriist ja suurus, et näha selle sügavust, tiiva laiust, vööti ja tiiva paksust, ümarduse raadiust, pindala (cm²), massi (kg/m) ja allikat paneeli {{ui:Omadused}} kastis {{ui:Profile}}.

## Mida iga kuju võib

| Kuju | Augud | Väljalõiked | Otsplaadid ja aluseplaadid | NC-fail | Tootmisjoonis |
|---|---|---|---|---|---|
| I-profiilid (W, S, IPE, HEA, HEB, UB, UC, kohandatud I) | Vööt, ülemine tiib, alumine tiib | Jah | Otsplaadid: tala ja post. Aluseplaadid: jah | Jah | Jah |
| Kanalid (C, UPN, PFC) | Vööt, ülemine tiib, alumine tiib | Ei | Ainult aluseplaadid | Jah | Jah |
| Ristkülikukujuline HSS, SHS, RHS | Külgsein (vööt), ülemine, alumine | Ei | Ainult aluseplaadid | Jah | Jah |
| Ümmargune HSS, toru, CHS | Veel mitte | Ei | Ainult aluseplaadid | Jah | Jah |
| Nurgikud (L, EA, UEA) | Veel mitte | Ei | Ainult aluseplaadid | Jah | Jah |
| Plaadid ja kohandatud lamerauad | Plaadi tahk | Ei | Ei | Jah | Jah |

Ristkülikukujulise toru puhul läbib auk „vööt“-tahul mõlemat külgseina. Mida iga NC-fail sisaldab, on [NC-faili väljade](topic:nc1-fields) all.

## Vajad muud suurust?

Lisa see [kohandatud profiilina](topic:plates-and-profiles#add-a-custom-profile). Sisseehitatud nimekirja ei saa rakendusest veel muuta.
