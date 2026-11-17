---
title: Escales
summary: Col·locar una escala metàl·lica recta a partir del desnivell, la fondària de petjada i l'amplada: dos limons i petjades de planxa, en un únic conjunt soldat.
keywords: escala, escales, tram d'escala, limó, petjada, contrapetjada, fondària de petjada, morro, tram, escala metàl·lica, IBC 1011, blondel
from: 62fa3845
---

Una escala recta metàl·lica: dos limons (perfils en U amb les ales cap a dins, o pletines de cant) i una petjada de planxa a cada graó, soldats entre ells. DetailCraft calcula el nombre de contrapetjades a partir del desnivell, les comprova amb els límits del codi d'edificació, i fa de l'escala un únic conjunt de taller.

## Col·loca una escala

1. Trieu {{ui:Escala}} al grup {{ui:Col·loca}}, o premeu {{key:S}}.
2. Definiu l'escala a la dreta: la **direcció de pujada** (0° puja al llarg de +x, 90° al llarg de +y), el **desnivell** (0 = fins al següent nivell), la **fondària de petjada**, l'**amplada lliure** entre els limons, la **contrapetjada més alta permesa**, el **limó**, el **gruix de la petjada de planxa**, el **morro** i el material.
3. Feu clic en una intersecció de la quadrícula: és el peu de la primera contrapetjada, sobre l'eix de l'escala.

La barra d'estat diu quantes contrapetjades ha fet. Seleccioneu l'escala (feu clic en un limó o en una petjada) per canviar qualsevol dels seus paràmetres, la seva posició o la seva fase; les propietats mostren també les contrapetjades, les petjades, el recorregut, la inclinació i 2 × contrapetjada + fondària de petjada.

## Què calcula DetailCraft

- **Contrapetjades.** Les mínimes que mantenen cada contrapetjada igual o per sota de la més alta permesa: un desnivell de 3000 mm a 178 mm o menys dona 17 contrapetjades de 176.5 mm. Hi ha una petjada menys que contrapetjades (el pis superior és l'últim graó).
- **Petjades.** Una planxa de fondària de petjada + morro (280 + 25 = PL6x305 per defecte) i de la mateixa llargada que l'amplada lliure, amb la seva cara superior a l'alçada de cada contrapetjada, i la seva vora frontal (el morro) davant de la línia de la contrapetjada.
- **Limons.** A la inclinació de l'escala, des d'on es troben amb el forjat inferior fins on es troben amb el superior, just fora de l'amplada lliure, amb la seva vora superior 50 mm per sobre de la línia dels morros. Les ales d'un perfil en U miren cap a dins de l'escala; una pletina com la PL12x250 va de cant.
- **Soldadures.** Cada petjada als dos limons. Les petjades i el limó dret se solden al limó esquerre, de manera que l'escala rep una marca de conjunt (ST1) i el seu propi plànol de conjunt; els limons reben marques de peça st…, les petjades p….
- **Comprovacions.** Avisos quan una contrapetjada és fora de 4 a 7 in. (102 a 178 mm) o la fondària de petjada és inferior a 11 in. (279 mm), els límits de l'IBC 2021, secció 1011.5.2; quan 2 × contrapetjada + fondària de petjada és fora de 600 a 650 mm (una regla de confort habitual); i quan el limó és massa baix per aguantar les petjades. Un perfil de limó desconegut impedeix construir l'escala.

## Coses a tenir en compte

- Moure, girar, fer la simetria, copiar, enganxar, suprimir i les fases funcionen amb una escala com amb una barra. Un gir fa girar la pujada; una simetria la fa anar en el sentit simètric.
- Els limons s'exporten a IFC com a IfcMember i les petjades com a IfcPlate; tots dos van als fitxers NC i a la llista de materials. La revisió de col·lisions deixa en pau les peces pròpies de l'escala (estan soldades entre elles).
- Aquesta escala senzilla és un sol tram amb petjades de planxa. Per a replans, passamans amb barrots, petjades de safata plegada o de reixa, un joc de regles que trieu, una llista de talls i els plànols dels forats dels limons, marqueu {{ui:Usa el generador d'escales metàl·liques}} a l'eina Escala (vegeu Generador d'escales metàl·liques).
- Els limons es tallen a escaire: els seus talls contra els forjats no es fan.
- DetailCraft no dissenya l'escala: els limons i les petjades no es comproven per resistència ni per flexió.
