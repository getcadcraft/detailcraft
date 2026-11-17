---
title: Merkreëls
summary: Presies wanneer twee dele of twee samestellings 'n merk deel, hoe merke genommer word, en hoe fondasie- en staafmerke werk.
keywords: merke, nommering, deelmerk, samestellingsmerk, stukmerk, voorvoegsel, toleransie, identiese dele, staafmerke, fondasiemerke
from: ce02c98e
---

DetailCraft bereken elke merk na elke verandering weer. Niks word gestoor nie, so die merke beskryf altyd die model soos dit nou is. Sien [Kontroleer merke en die materiaallys](topic:marks-and-bom) vir hoe om hulle te gebruik.

## Deelmerke

Twee dele deel 'n deelmerk wanneer almal hiervan ooreenstem:

1. Die deeltipe (balk, kolom, skoor of plaat).
2. Die profielnaam (nie hoofletter-gevoelig nie).
3. Die materiaal (nie hoofletter-gevoelig nie).
4. Die snylengte, binne 1 mm.
5. Elke gat: vlak, posisie langs en dwars, binne 1 mm, en deursnee binne 0.1 mm.
6. Elke uitsnyding: punt, kant, lengte en diepte, binne 1 mm.

Die lid se {{ui:Naam}} tel nie. Ook nie sy posisie in die model, sy rotasie, of hoe dit geteken is nie, solank die deel self dieselfde is.

### Omgedraaide dele

'n Deel word vergelyk op elke manier waarop dit omgedraai kan word wat sy snit op homself afbeeld. As enige hiervan dit laat ooreenstem met 'n ander deel, deel hulle 'n merk.

| Vorm | Draaie wat tel |
|---|---|
| I-vorms, reghoekige HSS, plate | Punt vir punt (om die vertikale as), punt vir punt (om die horisontale as), en onderstebo om sy eie lengte |
| Kanale | Punt vir punt net om die horisontale as, sodat die lyf aan dieselfde kant bly |
| Hoeke, ronde HSS | Geen: vergelyk soos geplaas |

So pas 'n balk met 'n gat naby sy linkerpunt by 'n balk met dieselfde gat naby sy regterpunt, en 'n kolom met gate in een flens pas by 'n kolom met dieselfde gate in die ander flens.

### Nommering

| Tipe | Deelvoorvoegsel | Samestellingsvoorvoegsel |
|---|---|---|
| Kolom | c | C |
| Balk | b | B |
| Skoor | br | BR |
| Plaat (geplaas, eindplaat of voetplaat) | p | P |

Merke word vanaf 1 binne elke voorvoegsel genommer. Die volgorde is: kolomme, dan balke, skore en plate; binne 'n tipe, volgens profielnaam in natuurlike volgorde (W8x10 voor W12x26); dan langer dele eerste.

Omdat nommering daardie volgorde volg, kan die byvoeg of verander van een deel die nommers van ander verskuif.

## Samestellingsmerke

- Elke deel wat nie aan 'n ander deel gelas is nie, is die hoofdeel van sy eie samestelling.
- Eindplate word aan hul balk gelas, en voetplate aan hul kolom, so hulle behoort tot daardie lid se samestelling.
- Twee samestellings deel 'n merk wanneer hul hoofdele 'n deelmerk deel en hul geheg dele dieselfde merke op dieselfde plekke het (binne 1 mm), met dieselfde draaie as die hoofdeel toegelaat.
- Die samestellingsvoorvoegsel volg die hoofdeel: 'n balk met twee eindplate is 'n B-samestelling.

Plate wat jy met die {{ui:Plaat}}-instrument plaas, is aan niks gelas nie, so elkeen is sy eie P-samestelling.

## Fondasiemerke

Fondasies met dieselfde lengte, breedte, diepte, betonteks, onderste matjie en beginstawe deel 'n merk: F1, F2 … in die volgorde waarin hulle geplaas is. Posisie en rotasie tel nie.

## Staafmerke

Stawe met dieselfde grootte, vorm en afmetings A, B en C (afgerond tot die millimeter) deel 'n merk oor alle fondasies. Die merk is die staafnommer, F, en 'n teller per staafgrootte: 5F1, 5F2, 6F1. 'n Lang-rigting-staaf en 'n kort-rigting-staaf van 'n vierkantige fondasie is dieselfde staaf en deel 'n merk; die skedule se {{ui:Gebruik vir}}-kolom lys albei gebruike.
