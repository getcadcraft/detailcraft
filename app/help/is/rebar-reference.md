---
title: Viðmið um steypustyrktarstál
summary: Stangastærðir, krókamál, lögunarkóðar, skurðarlengdir og dálkar beygjulistans sem DetailCraft notar.
keywords: steypustyrktarstál, stangastærðir, krókar, beygjuþvermál, lögunarkóðar, skurðarlengd, beygjulisti, stangalisti, ASTM A615, ACI 318
from: 1583535e
---

## Stangastærðir

Samkvæmt ASTM A615/A615M töflu 1 (tommu-punda tilnefningar). Millimetrar og kg/m eru nákvæmar umreikningar á birtum tommu- og lb/ft gildum. Listarnir sýna hverja stærð sem til dæmis „#5 (15.9 mm)“.

| Stöng | Þvermál (mm) | Þyngd (kg/m) | Flatarmál (mm²) | Innra beygjuþvermál | Krókarfótur 90°, utan í utan (mm) |
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

Í [Stillingar DetailCraft](topic:settings) ({{ui:Steypustyrktarstál}}) geta **ASTM-stangaheiti** sýnt þessar stangir undir mjúku metra-heitunum A615M í staðinn: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (sömu stangir; ACI 315-99 tafla 1 listar bæði).

### Metrastangir (BS 4449)

| Stöng | Þvermál (mm) | kg/m | Lágmarksbeygjuradíus r (mm) | Krókarfótur = endaútskot P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

Massinn er nafnsnið sinnum 7850 kg/m³. Radíusinn og endaútskotið eru lágmörk úr BS 8666:2020 (lágmarksmálatöflu hennar; fyrra þvermálið er 2r). Undirstöður með BS-stöngum fá krókarfætur P og skurðarlengdir eftir formúlum BS 8666 hér að neðan. Ef evrópskt stál er valið í stillingum byrja nýjar undirstöður með H16-lagnetum og H20-tengistöngum í C30/37 steypu.

## Krókar

ASTM-stangir: staðlaðir 90° krókar samkvæmt ACI 318-19 töflu 25.3.1: innra beygjuþvermál 6 db fyrir #3 til #8 og 8 db fyrir #9 til #11, með beinni framlengingu 12 db fram yfir beygjuna. Krókarfóturinn, mældur utan í utan, er hálft beygjuþvermálið + db + 12 db.

Ef krókur lagnetsstangar kemst ekki fyrir í dýpt undirstöðunnar innan steypuþekjunnar styttir DetailCraft fótinn svo hann passi og birtir viðvörun.

## Lögun

DetailCraft geymir þrjár lögun. Beygjulistinn prentar þær sem kóða DetailCraft, sem gerðir ACI 315 eða sem lögunarkóða BS 8666: veldu **Lögunarkóðar beygjulista** í [Stillingar DetailCraft](topic:settings) ({{ui:Steypustyrktarstál}}).

| Kóði | Lögun | Mál |
|---|---|---|
| S | Bein | A = lengd |
| L | Ein 90° beygja | A = aðalfótur, B = krókarfótur, báðir utan í utan |
| U | Tvær 90° beygjur á sömu hlið | A = miðja, B og C = fæturnir tveir, utan í utan |

Lagnetsstangir með {{ui:Endakrókar}} á eru U, án eru S. Tengistangir með {{ui:Krókur neðst}} á eru L, án eru S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (mynd 10) |
|---|---|---|
| S | 00, L = A | engin gerðarnúmer |
| L | 11, L = A + B − 0.5r − d | engin gerðarnúmer: myndin hefur enga stöng með einum krók |
| U | 21, A og C eru fæturnir, B er miðjan: L = A + B + C − r − 2d | Gerð 2, krókar A og G, bein B |

Með kóðum BS 8666 eða ACI 315 fylgja dálkarnir A, B og C í beygjulistanum stafsetningu þess staðals (miðja U er B).

## Skurðarlengd

Fyrir BS 4449-stangir er skurðarlengdin formúla BS 8666 fyrir lögunarkóða stangarinnar (hér að ofan). Fyrir ASTM-stangir er hún nákvæm lengd miðlínu stangarinnar: beinu hlutarnir og beygjurnar sem bogar með geisla sem er hálft beygjuþvermálið að viðbættu hálfu þvermáli stangarinnar. Hún er ekki reiknuð út frá töflu um frádrátt vegna beygju, svo hún getur munað nokkrum millimetrum frá lista sem notar slíka töflu.

## Uppsetning

- Neðra lagnet: stangir eftir L mynda neðra lagið og stangir eftir B liggja ofan á þeim. Hvert sett dreifist jafnt yfir undirstöðuna innan steypuþekjunnar, með bilinu sem þú gefur eða þéttara, og með að minnsta kosti tveimur stöngum.
- Tengistangir: net stanga eftir L og eftir B með bilunum sem þú gefur, miðjað á undirstöðunni, stendur á lagnetinu og gengur upp fyrir efri brún um útskotið sem þú gefur. Hver krókur vísar út á við.

## Athuganir

| Athugun | Regla | Niðurstaða |
|---|---|---|
| Pláss fyrir stangir | Þekja beggja vegna skilur eftir pláss fyrir stangirnar | Hafnað ef ekki |
| Dýpt fyrir tvö lög | Dýpt að frádregnum tveimur þekjum rúmar bæði lagnetslögin | Hafnað ef ekki |
| Tengistangir passa | Tengistanganetið passar innan þekjunnar | Hafnað ef ekki |
| Hreint bil | Að minnsta kosti það sem er stærra af 25.4 mm og db (ACI 318-19 25.2.1; stærð fyllefnis ekki athuguð) | Viðvörun |
| Dýpt króks | Krókarfótur passar í dýptina innan þekjunnar | Viðvörun, fótur styttur |
| Krókar tengistanga | Krókar haldast utan þekjunnar | Viðvörun |

## Dálkar beygjulistans

Flipinn {{ui:Beygjulisti}} og CSV-skráin hans hafa þessa dálka: Auðkenni stangar, Stærð, Lögun, A (mm), B (mm), C (mm), Fjöldi, Skurðarlengd (mm), Heildarlengd (m), kg/m, Þyngd hverrar (kg), Heildarþyngd (kg), Notað fyrir. Síðasta línan tekur saman fjölda, lengd og þyngd.
