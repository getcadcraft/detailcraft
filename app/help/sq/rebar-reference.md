---
title: Referenca e armaturës
summary: Përmasat e shufrave, dimensionet e grepave, kodet e formave, gjatësitë e prerjes dhe kolonat e tabelës së përkuljes që përdor DetailCraft.
keywords: armaturë, përmasat e shufrave, grepa, diametri i përkuljes, kodet e formave, gjatësia e prerjes, tabela e përkuljes, lista e shufrave, astm a615, aci 318
from: 1583535e
---

## Përmasat e shufrave

Nga ASTM A615/A615M Tabela 1 (designimet inç-funt). Milimetrat dhe kg/m janë konvertime të sakta të vlerave të publikuara në inç dhe lb/ft. Listat tregojnë çdo përmasë si, për shembull, "#5 (15.9 mm)".

| Shufra | Diametri (mm) | Masa (kg/m) | Sipërfaqja (mm²) | Diametri i brendshëm i përkuljes | Krahu i grepit 90°, jashtë për jashtë (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Te [cilësimet e DetailCraft](topic:settings) ({{ui:Armatura}}), **emrat ASTM të shufrave** mund t'i shfaqin këto shufra me emrat e tyre metrikë të butë A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (të njëjtat shufra; ACI 315-99 Tabela 1 i liston të dyja).

### Shufra metrike (BS 4449)

| Shufra | Diametri (mm) | kg/m | Rrezja minimale e përkuljes r (mm) | Krahu i grepit = projeksioni në skaj P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Masa është seksioni nominal shumëzuar me 7850 kg/m³. Rrezja dhe projeksioni në skaj janë minimumet e BS 8666:2020 (tabela e tij e dimensioneve minimale; diametri i mëparshëm është 2r). Themelet me shufra BS marrin krahë grepi P dhe gjatësi prerjeje sipas formulave BS 8666 më poshtë. Zgjedhja e çelikut evropian në cilësime fillon themelet e rinj me rrjete H16 dhe shufra nisëse H20 në betonin C30/37.

## Grepat

Shufrat ASTM: grepa standardë 90° nga ACI 318-19 Tabela 25.3.1: diametri i brendshëm i përkuljes 6 db për #3 deri #8 dhe 8 db për #9 deri #11, me një zgjatje të drejtë 12 db pas përkuljes. Krahu i grepit, i matur jashtë për jashtë, është gjysma e diametrit të përkuljes + db + 12 db.

Nëse grepi i një shufre rrjete nuk përshtatet në thellësinë e themelit brenda mbulesës, DetailCraft e shkurton krahun për ta përshtatur dhe shfaq një paralajmërim.

## Format

DetailCraft ruan tre forma. Tabela e përkuljes i shtyp si kodet e DetailCraft, si tipe ACI 315 ose si kode formash BS 8666: zgjidhni **Kodet e formave të tabelës së përkuljes** te [cilësimet e DetailCraft](topic:settings) ({{ui:Armatura}}).

| Kodi | Forma | Dimensionet |
|---|---|---|
| S | E drejtë | A = gjatësia |
| L | Një përkulje 90° | A = krahu kryesor, B = krahu i grepit, të dyja jashtë për jashtë |
| U | Dy përkulje 90° në të njëjtën anë | A = mesi, B dhe C = dy krahët, jashtë për jashtë |

Shufrat e rrjetës me {{ui:Grepat në skaje}} të ndezur janë U; pa to, S. Shufrat nisëse me {{ui:Grepi në fund}} të ndezur janë L; pa to, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | pa numër tipi |
| L | 11, L = A + B − 0.5r − d | pa numër tipi: figura nuk ka shufër me një grep |
| U | 21, A dhe C krahët, B mesi: L = A + B + C − r − 2d | Tipi 2, grepat A dhe G, B e drejtë |

Me kodet BS 8666 ose ACI 315, kolonat A, B dhe C të tabelës ndjekin shkronjëzimin e atij standardi (mesi i një U është B).

## Gjatësia e prerjes

Për shufrat BS 4449, gjatësia e prerjes është formula BS 8666 e kodit të formës së shufrës (më sipër). Për shufrat ASTM, është gjatësia e saktë e boshtit qendror të shufrës: pjesët e drejta plus përkuljet si harqe me rreze gjysmën e diametrit të përkuljes plus gjysmën e diametrit të shufrës. Nuk llogaritet nga një tabelë zbritjesh përkuljeje, prandaj mund të ndryshojë për disa milimetra nga një tabelë që përdor një të tillë.

## Vendosja

- Rrjeta e poshtme: shufrat përgjatë L formojnë shtresën e poshtme, shufrat përgjatë B qëndrojnë mbi to. Çdo grup shpërndahet në mënyrë të barabartë në të gjithë themelin brenda mbulesës, me hapësirën që jepni ose më të dendur, me të paktën dy shufra.
- Shufrat nisëse: një rrjet shufrash përgjatë L dhe përgjatë B me hapësirat që jepni, i qendërzuar në themel, që qëndron mbi rrjetën dhe del mbi krye me projeksionin që jepni. Çdo grep drejtohet nga jashtë.

## Kontrollet

| Kontrolli | Rregulli | Rezultati |
|---|---|---|
| Hapësirë për shufrat | Mbulesa në të dyja anët lë hapësirë për shufrat | Refuzohet nëse jo |
| Thellësia për dy shtresa | Thellësia minus dy mbulesat mban të dyja shtresat e rrjetës | Refuzohet nëse jo |
| Shufrat nisëse përshtaten | Rrjeti nisës përshtatet brenda mbulesës | Refuzohet nëse jo |
| Hapësira e lirë | Të paktën më e madhja ndër 25.4 mm dhe db (ACI 318-19 25.2.1; madhësia e agregatit nuk kontrollohet) | Paralajmërim |
| Thellësia e grepit | Krahu i grepit përshtatet në thellësinë brenda mbulesës | Paralajmërim, krahu shkurtohet |
| Grepat nisës | Grepat qëndrojnë jashtë mbulesës | Paralajmërim |

## Kolonat e tabelës së përkuljes

Skeda {{ui:Tabela e përkuljes}} dhe CSV-ja e saj kanë këto kolona: Shenja e shufrës, Madhësia, Forma, A (mm), B (mm), C (mm), Numri, Gjatësia e prerjes (mm), Gjatësia totale (m), kg/m, Pesha për copë (kg), Pesha totale (kg), Përdoret për. Rreshti i fundit përmbledh numrin, gjatësinë dhe peshën.
