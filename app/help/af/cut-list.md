---
title: Snylys
summary: Rangskik die balke, kolomme, skoringe en trappestringers in voorraadlengtes met saagsnit, en sien hoeveel stawe om te koop en die afval.
keywords: snylys, rangskikking, voorraadlengte, staaf, saagsnit, saag, afsnit, afval, kombinering, aankoop, veelvuldig
from: 81d06ce5
---

Die {{ui:Snylys}}-oortjie, onder die aansig, bepaal hoe die model se lynêre onderdele uit voorraadstawe gesny word: hoeveel stawe van elke lengte om vir elke profiel en materiaal te koop, wat op elke staaf gaan, en die afval.

## Stel die voorraad

Bo-aan die oortjie:

- **Voorraadlengtes (mm):** die lengtes wat jy kan koop, geskei deur spasies, byvoorbeeld `6000 12000`, of 20 ft- en 40 ft-stawe as `6096 12192`. Tot agt.
- **Saagsnit (mm):** hoeveel elke snit neem (3 om mee te begin).
- **Eindafsnit (mm):** sny die einde van elke staaf af voor die eerste stuk (0 om mee te begin).
- **Hou afsnitte vanaf (mm):** 'n afsnit van minstens hierdie lengte gaan terug voorraad toe; korter is skrootmateriaal (500 om mee te begin).

Hierdie word in hierdie blaaier gehou, soos die ander [instellings](topic:settings).

## Hoe dit rangskik

- Elke balk, kolom, skoor en trappestringer, volgens onderdeelmerk en telling; plate word uit plaatmateriaal gesny en word hier nie gerangskik nie.
- Elke profiel en materiaal op sy eie.
- Die langste stukke eerste, elk in die eerste staaf waarin dit pas; 'n nuwe staaf begin as die langste voorraadlengte. Daarna word elke staaf gekoop as die korste voorraadlengte wat sy snitte steeds kan neem.
- Elke snit neem die saagsnit (geen na 'n snit wat presies aan die staaf se einde eindig nie); elke staaf verloor die eindafsnit.
- 'n Stuk wat langer is as elke voorraadlengte, word onder **Langer as enige voorraad** gelys, nie gerangskik nie: heg dit aaneen (sien [Aanhegtings](topic:splices)) of voeg 'n langer voorraadlengte by.

## Lees dit

- **Opsomming:** per profiel en materiaal, die stukke, die stawe om te koop (byvoorbeeld "2 × 12000, 1 × 6000"), die meters gekoop en gebruik, en die afval.
- **Stawe en hul snitte:** elke staaf, sy voorraadlengte, sy snitte as onderdeelmerk en lengte, en die afsnit, behou of skrootmateriaal.

{{ui:Laai CSV af}} stoor albei tabelle as `<name> cut list.csv`.

DetailCraft rangskik nie plate in blaaie nie, en meng nie profiele of materiale op 'n staaf nie.
