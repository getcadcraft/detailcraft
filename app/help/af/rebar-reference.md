---
title: Wapeningsverwysing
summary: Staafgroottes, haakafmetings, vormkodes, snitlengtes en die kolomme van die buigskedule wat DetailCraft gebruik.
keywords: wapening, staafgroottes, haakies, buigdeursnee, vormkodes, snitlengte, buigskedule, staaflys, astm a615, aci 318
from: 1583535e
---

## Staafgroottes

Uit ASTM A615/A615M Tabel 1 (duim-pond-benamings). Millimeter- en kg/m-waardes is presiese omrekeninge van die gepubliseerde duim- en lb/ft-waardes. Die lyste wys elke grootte as, byvoorbeeld, "#5 (15.9 mm)".

| Staaf | Deursnee (mm) | Massa (kg/m) | Oppervlakte (mm²) | Binnekant buigdeursnee | 90°-haakpoot, buite-tot-buite (mm) |
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

In [DetailCraft-instellings](topic:settings) ({{ui:Wapening}}) kan **ASTM-staafname** hierdie stawe deur hul sagte metriese A615M-name wys: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (dieselfde stawe; ACI 315-99 Tabel 1 lys albei).

### Metriese stawe (BS 4449)

| Staaf | Deursnee (mm) | kg/m | Min. buigradius r (mm) | Haakpoot = eienuitsteking P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Die massa is die nominale deursnee maal 7850 kg/m³. Die radius en eienuitsteking is die minimums van BS 8666:2020 (sy tabel van minimum afmetings; die vorige deursnee is 2r). Fondasies in BS-stawe kry haakpoote van P en snitlengtes volgens die BS 8666-formules hieronder. Om Europese staal in instellings te kies, begin nuwe fondasies met H16-matte en H20-aanloopstawe in C30/37-beton.

## Haakies

ASTM-stawe: standaard 90°-haakies uit ACI 318-19 Tabel 25.3.1: binnekant buigdeursnee 6 db vir #3 tot #8 en 8 db vir #9 tot #11, met 'n reguit verlenging van 12 db verby die buig. Die haakpoot, gemeet buite-tot-buite, is die helfte van die buigdeursnee + db + 12 db.

As die haak van 'n matstaaf nie in die fondasiediepte binne die dekking pas nie, verkort DetailCraft die poot om te pas en lys 'n waarskuwing.

## Vorms

DetailCraft berg drie vorms. Die buigskedule druk hulle as DetailCraft se kodes, as ACI 315-tipes of as BS 8666-vormkodes: kies **Buigskedule-vormkodes** in [DetailCraft-instellings](topic:settings) ({{ui:Wapening}}).

| Kode | Vorm | Afmetings |
|---|---|---|
| S | Reguit | A = lengte |
| L | Een 90°-buig | A = hoofpoot, B = haakpoot, albei buite-tot-buite |
| U | Twee 90°-buigings aan dieselfde kant | A = middel, B en C = die twee pote, buite-tot-buite |

Matstawe met {{ui:Eindhaakies}} aan is U; sonder, S. Aanloopstawe met {{ui:Haak onderaan}} aan is L; sonder, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | geen tipenommer |
| L | 11, L = A + B − 0.5r − d | geen tipenommer: die figuur het geen staaf met een haak nie |
| U | 21, A en C die pote, B die middel: L = A + B + C − r − 2d | Tipe 2, haakies A en G, reguit B |

Met BS 8666- of ACI 315-kodes volg die skedule se A-, B- en C-kolomme daardie standaard se letters (die middel van 'n U is B).

## Snitlengte

Vir BS 4449-stawe is die snitlengte die BS 8666-formule van die staaf se vormkode (hierbo). Vir ASTM-stawe is dit die presiese lengte van die staaf se middellyn: die reguit dele plus die buigings as boë teen die helfte van die buigdeursnee plus die helfte van die staafdeursnee. Dit word nie uit 'n tabel van buigaftrekkings bereken nie, so dit kan 'n paar millimeter verskil van 'n skedule wat een gebruik.

## Uitleg

- Onderste mat: stawe langs L vorm die onderste laag, stawe langs B lê daarop. Elke stel word eweredig oor die fondasie binne die dekking versprei, teen die spasiëring wat jy gee of nouer, met minstens twee stawe.
- Aanloopstawe: 'n rooster van stawe langs L en langs B teen die spasiëring wat jy gee, gesentreer op die fondasie, staan op die mat en steek bo-oor die bokant uit met die uitsteking wat jy gee. Elke haak wys na buite.

## Kontroles

| Kontrole | Reël | Resultaat |
|---|---|---|
| Ruimte vir stawe | Dekking aan albei kante laat ruimte vir die stawe | Geweier as nie |
| Diepte vir twee lae | Diepte minus twee dekkings hou albei matlae | Geweier as nie |
| Aanloopstawe pas | Die aanloopgrid pas binne die dekking | Geweier as nie |
| Vry spasiëring | Minstens die groter van 25.4 mm en db (ACI 318-19 25.2.1; aggregaatgrootte nie gekontroleer nie) | Waarskuwing |
| Haakdiepte | Haakpoot pas in die diepte binne die dekking | Waarskuwing, poot verkort |
| Aanloophake | Haakies bly uit die dekking | Waarskuwing |

## Kolomme van die buigskedule

Die {{ui:Buigskedule}}-oortjie en sy CSV het hierdie kolomme: Staafmerk, Grootte, Vorm, A (mm), B (mm), C (mm), Aantal, Snitlengte (mm), Totale lengte (m), kg/m, Gewig elk (kg), Totale gewig (kg), Gebruik vir. Die laaste ry totaal die aantal, lengte en gewig.
