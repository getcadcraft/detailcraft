---
title: Diagonaal-kopplate
summary: Verbind 'n diagonaal se ent met 'n kolom of balk met 'n kopplaat: hoeke en plat stawe met bout, buise ingesny en gesweis.
keywords: kopplaat, diagonaal, verstywing, vertikale verstywing, hoekdiagonaal, plat staaf, band, hss-diagonaal, messplaat, ingesnyde buis, verbind
from: 22f6598d
---

'n Diagonaal-kopplaat is 'n plaat wat in die werkswinkel aan die kolom (of balk) gesweis word waarop die diagonaal land, in die vlak van die diagonaal. DetailCraft sny die diagonaal terug sodat dit by die verbinding van alles af wegbly, plaas en dimensioneer die kopplaat, en koppel die diagonaal daaraan: 'n **hoek** of 'n **plat staaf** met een lyn bouts, of 'n **buis** (vierkant, reghoekig of rond HSS) oor die kopplaat ingesny en gesweis.

## Waar dit werk

- Die diagonaal se ent lê op die lyn van 'n kolom of balk (binne 1 mm), en die diagonaal is nie byna parallel aan daardie lyn nie. 'n Kolom is die steun waar daar een is; anders die balk.
- Die kopplaat lê in die vlak van die diagonaal en die steun se lyn. 'n **Hoek** moet een been in daardie vlak hê, en 'n **plat staaf** sy vlak: draai die diagonaal ({{ui:Rotation (°)}}) totdat dit so is. Met die hoek se bene op 45° tot die vlak sê DetailCraft dit en bou niks nie.
- I-profiele en kanale as diagonale word nie verbind nie.

## Voeg kopplate by

1. Kies een of meer diagonale.
2. Kies {{ui:Gusset}} in die {{ui:More}}-kieslys van die {{ui:Connect}}-groep.
3. Elke ent van die gekose diagonale wat op 'n kolom of balk land en nog geen kopplaat het nie, kry een.

Kies 'n kopplaat (klik op die plaat) om die instellings te verander. {{ui:Pas op soortgelyke (n) toe}} kopieer dit na elke vrye diagonaal-ent met dieselfde diagonaal- en steunprofiele.

## Wat DetailCraft uitwerk

- **Terugsny.** Die diagonaal word aan daardie ent korter gemaak totdat sy hoeke vrymaak, deur {{ui:Brace clearance}} (25), elke lid by die verbinding (langs dit, of verby sy ent wanneer die lid daar eindig) en 'n basisplaat onder die kolom.
- **Bouts (hoeke, plat stawe).** {{ui:Bolts}} (3) in een lyn langs die diagonaal, die eerste {{ui:Bolt end distance}} (40) vanaf die gesnyde ent, teen {{ui:Bolt pitch}} (75). By 'n hoek gaan hulle deur die been in die kopplaat se vlak, {{ui:Bolt gauge}} vanaf die hak (0 = die middel van die been); by 'n plat staaf op sy middellyn (of daarvan af deur die spoor). Boutgreep = die been of plat + die kopplaat.
- **Die kopplaat.** 'n Reghoek: vanaf die steun se vlak uit verby die laaste bout deur die eindafstand, en langs die steun so ver as wat die bouts nodig het. Dit lê teen die agterkant van die hoek se been (of die plat se vlak). By 'n buis loop dit deur die buis se middel, onder {{ui:Tube lap on the gusset}} (200) van die buis, met ruimte vir die sweislasse.
- **Verbindings.** By 'n kolombasis word die kopplaat tot op die basisplaat afgedra. Waar 'n balk die verbinding kruis ('n diagonaal op in 'n balk-kolomhoek), bly die kopplaat onder of bo die balk. As dit die bouts of die oorlap sonder hul eindafstand laat, waarsku DetailCraft.
- **Sweislasse.** Die kopplaat na sy steun, aan albei kante. 'n Buis na die kopplaat, vier lyne langs die oorlap.

## Goed om te weet

- Die kopplaat hoort by die steun se samestelling (in die werkswinkel gesweis). Die diagonaal word met sy gate geboor en gaan na sy eie NC-lêer.
- 'n Buis se gleuf word nie in die model gesny nie; die [botsingskontrole](topic:clash-check) laat die diagonaal en sy kopplaat ongemoeid.
- Die kopplaat word nie aan 'n balk wat dit raak gesweis nie, en hoekkopplate wat aan beide balk en kolom gesweis is, afgeskuinste hoeke en die werkspunt-uitleg van 'n Uniform Force Method-verbinding word nog nie gemaak nie.
- DetailCraft ontwerp nie die kopplaat of die bouts nie (geen sterktetoetse nie); die waarskuwings is oor afstand en passing.
