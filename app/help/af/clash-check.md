---
title: Kontroleer vir botsings
summary: Vind lede, plate en fondasies wat in mekaar inreik, met die onderdele wat 'n verbinding laat ontmoet uitgelaat, en gaan na elke botsing.
keywords: botsing, botsingskontrole, bots, inmenging, oorvleueling, kruising, harde botsing, koördinasie, modelkontrole
from: 04d72d3b
---

Maak die {{ui:Botsings}}-oortjie onder die aansig oop en kies {{ui:Toets nou}}. DetailCraft kyk na elke paar onderdele in die getoonde fases: staal in staal, en staal in 'n fondasie. Die oortjie lys elke botsing, die diepste eerste, met:

- die twee onderdele, volgens onderdeelmerk (of fondasiemerk) en profiel;
- **Oorvleueling (mm)**: hoe ver 'n punt van een onderdeel binne die ander is, tot by die naaste vlak;
- **Naby**: die roosterkruising en vlak waar dit is, of sy koördinate;
- {{ui:Wys}}: kies albei onderdele en bring die plek na die middel van die aansig.

Die oortjie se titel wys hoeveel botsings die laaste kontrole gevind het. Die kontrole loop nie self nie: nadat jy die model verander, sê die lys dit, en {{ui:Toets nou}} loop dit weer.

## Wat nie 'n botsing is nie

- Onderdele wat net raak: 'n plaat teen 'n flens, 'n basisplaat op sy fondasie, twee lede end-tot-end. **Toleransie (mm)** stel hoe ver twee onderdele in mekaar mag inloop voordat dit tel (1 mm om mee te begin; tot 50).
- Onderdele wat 'n verbinding verbind: 'n eindplaat met sy balk en met die kolomflens waaraan dit gebout is, die balk en die kolom van daardie knoop, 'n basisplaat met sy kolom, 'n splitsing se plate met albei stukke, 'n skoor met sy kopplaat ('n buis se gleuf word nie in die model gesny nie). Die verbinding bedoel dat hulle ontmoet.
- 'n Basisplaat se skuifnok in die fondasie daaronder (dit sit in 'n mortelholte).
- Bolte en ankerstawe (hulle gaan deur gate) en wapening.
- Onderdele in verborge fases. Sien [Fases](topic:phases).

'n Skoor of balk wat in 'n kolom inloop sonder 'n verbinding tussen hulle **is** 'n botsing: daardie knoop het steeds 'n verbinding nodig. Die voorbeeldraamwerk se skoor wys dit: dit het geen kopplaat nie. Kies dit en kies {{ui:Kopplaat}} ([Kopplate vir skore](topic:brace-gussets)) en sy botsings verdwyn.

## Goed om te weet

- Oorvleueling meet die diepte in materiaal, so 'n lid wat in 'n kolom se dun lyf of flens inloop, wys net 'n paar millimeter, selfs as dit ver inloop.
- Onderdele word gekontroleer soos hulle gesny is: uitsnydings en die terugsny van 'n balk by sy eindplate word in ag geneem. Gate word nie.
