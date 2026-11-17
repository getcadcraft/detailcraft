---
title: NC faila lauki
summary: Ko DetailCraft raksta katrā DSTV NC failā, lauks pa laukam, un kā tiek mērītas virsmas un koordinātas.
keywords: nc1, dstv, nc fails, ST bloks, AK, BO, galvene, virsmas, koordinātas, cnc, formāts
from: 1b676fc1
---

Katrs `.nc1` fails apraksta vienu detaļas zīmi. Rindas beidzas ar CR LF. Teksta lauki satur vienkāršu ASCII; citas rakstzīmes kļūst par "?". Otrā rinda ir komentārs `** DetailCraft <mark>.nc1`.

## Galvene (ST)

| Lauks | I profils, kanāls | Leņķis | Taisnstūra HSS | Apaļais HSS | Plāksne |
|---|---|---|---|---|---|
| Pasūtījums | Modeļa nosaukums | ← | ← | ← | ← |
| Rasējums, gabals | Detaļas zīme | ← | ← | ← | ← |
| Fāze | Detaļas fāze vai 1 | ← | ← | ← | ← |
| Tērauda kvalitāte | Materiāla marka | ← | ← | ← | ← |
| Daudzums | Detaļu skaits ar šo zīmi | ← | ← | ← | ← |
| Profils | Profila nosaukums, piemēram, W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Profila kods | I vai U (kanāls) | L | M | RO | B |
| Garums | Griešanas garums | ← | ← | ← | Garums |
| Augstums | Dziļums d | Mala | Augstums | Diametrs | Plāksnes platums |
| Flanša platums | bf | Mala | Platums | Diametrs | 0 |
| Flanša biezums | tf | t | Siena t | Siena t | 0 |
| Stīpas biezums | tw | t | Siena t | Siena t | Plāksnes biezums |
| Rādiuss | Noapaļojuma rādiuss (0 AISC kanāliem) | 0 | Ārējā stūra rādiuss | 0 | 0 |
| Masa uz metru | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Krāsojamā virsma uz metru | Ārējais perimetrs, m²/m | ← | ← | ← | 2 (abas virsmas, m²/m²) |
| Zāģa leņķi (4 lauki) | 0 (taisns) | ← | ← | ← | ← |
| Teksta lauki (4) | `-` | ← | ← | ← | ← |

Plāksnes seko standarta kolonnai "for the sheets". Standartam nav kolonnas apaļām caurulēm: DetailCraft raksta diametru gan kā augstumu, gan kā flanša platumu, un sienu kā abus biezumus.

## Ārējie kontūri (AK)

- **I profili un kanāli:** stīpa (v) ar taisnstūrveida izgriezumu katram izgriezumam; katrs flanšs (o un u) saīsināts galā, kur izgriezums ir vismaz tikpat dziļš kā flanšs.
- **Taisnstūra HSS:** abas sānu sienas (v un h), izgriezumi iegriezti, kā arī augšējā un apakšējā siena (o un u).
- **Leņķi:** viens taisnstūris katrai malai (v un u). Izgriezumi uz leņķiem netiek ierakstīti: šāda detaļa tiek uzskaitīta kā neierakstīta. Leņķa saite, kas pieskrūvēta pie [fasējuma plāksnes](topic:brace-gussets), kā caurumus ir malā, kas ir pieskrūvēta: v malai gar detaļas u un u malai gar tās v.
- **Apaļais HSS:** viens taisnstūris uz v, caurule no priekšpuses (garums × diametrs).
- **Plāksnes:** viens taisnstūris uz virsmas v.

Katrs kontūrs ir slēgts (pirmais punkts atkārtots beigās) un iet pretēji pulksteņrādītāja virzienam.

## Caurumi (BO)

Viena rinda katram caurumam: virsma, x, y, diametrs, dziļums 0 (caurs). Ietverti visi caurumi: tie, ko ievadījāt, un tie, ko izveidoja savienojumi. Caurums caur taisnstūra HSS sānu sienām ierakstīts divreiz: vienreiz uz v un vienreiz uz h.

## Virsmas un koordinātas

Katrs profils ir novietots tā, kā standarta profilu pozīciju attēls to zīmē (DSTV 1998, 7. lpp.): x gar detaļu, Y šķērsām, Z augšup no aizmugurējās virsmas, ar nulles punktu ārējā stūrī. DetailCraft nekad nespoguļo detaļu, lai tā atbilstu attēlam.

| Virsma | I profils | Kanāls | Leņķis | Taisnstūra HSS | Plāksne |
|---|---|---|---|---|---|
| v | Stīpa, priekšpusē | Stīpa, skatoties no kājiņu puses | Mala gar detaļas u | Sānu siena pie −u | Plāksnes virsma |
| h | | | | Sānu siena pie +u | |
| o | Augšējais flanšs | **Apakšējais** flanšs | | Augšējā siena | |
| u | Apakšējais flanšs | **Augšējais** flanšs | Mala gar detaļas v | Apakšējā siena | |

- **x** iet gar detaļu no tās griešanas sākuma.
- **I profili un taisnstūra HSS:** y uz stīpas vai sānu sienām no profila apakšpuses; y uz flanša vai augšējās un apakšējās sienas no tā malas aizmugurējā pusē (detaļas +u puse).
- **Kanāli** guļ uz muguras ar kājiņām augšup, kā standarta attēlā. Tāpēc y uz stīpas iet no augšējā flanša ārējās puses uz leju, augšējais flanšs ir virsma u un apakšējais flanšs ir virsma o, un y uz flanša iet no stīpas muguras uz kājiņu pusi.
- **Leņķi:** y uz katras malas no papēža.
- **Plāksnes:** y no plāksnes −u malas.

Pirms griešanas pārbaudiet, kā jūsu mašīnas programmatūra nolasa kanālu virsmas: dažas programmas kanālus pagriež otrādi.

## Netiek ierakstīts

Slīpumi, iekšējie kontūri, marķējumi (SI), zāģa leņķi, kas nav taisni, garenie caurumi, caurumi apaļās caurulēs (DetailCraft tādus neveido) un izgriezumi uz leņķiem un apaļām caurulēm.
