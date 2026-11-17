---
title: Regles de marques
summary: Quan exactament dues peces o dos conjunts comparteixen marca, com es numeren les marques i com funcionen les marques de sabata i de barra.
keywords: marques, numeració, marca de peça, marca de conjunt, prefix, tolerància, peces idèntiques, marques de barra, marques de sabata
from: ce02c98e
---

DetailCraft recalcula cada marca després de cada canvi. No s'emmagatzema res, de manera que les marques sempre descriuen el model tal com és ara. Vegeu [Revisa les marques i la llista de materials](topic:marks-and-bom) per saber com usar-les.

## Marques de peça

Dues peces comparteixen marca de peça quan coincideixen totes aquestes condicions:

1. El tipus de peça (biga, columna, reforç diagonal o placa).
2. El nom del perfil (sense distingir majúscules).
3. El material (sense distingir majúscules).
4. La longitud de tall, dins d'1 mm.
5. Cada forat: cara, posició al llarg i a través, dins d'1 mm, i diàmetre dins de 0,1 mm.
6. Cada osca: extrem, costat, longitud i profunditat, dins d'1 mm.

El {{ui:Nom}} de la barra no compta. Tampoc no compten la seva posició al model, la seva rotació, ni en quin sentit s'ha dibuixat, mentre la peça sigui la mateixa.

### Peces girades

Una peça es compara en totes les maneres en què es pot girar de manera que la seva secció es projecti sobre si mateixa. Si alguna d'aquestes fa que coincideixi amb una altra peça, comparteixen marca.

| Forma | Girs que compten |
|---|---|
| Perfils en I, HSS rectangulars, plaques | D'extrem a extrem (sobre l'eix vertical), d'extrem a extrem (sobre l'eix horitzontal), i cap per avall sobre la seva pròpia longitud |
| Perfils en U | D'extrem a extrem sobre l'eix horitzontal només, perquè l'ànima quedi al mateix costat |
| Cantoneres, HSS circulars | Cap: es comparen tal com estan col·locades |

Així, una biga amb un forat a prop de l'extrem esquerre coincideix amb una biga amb el mateix forat a prop de l'extrem dret, i una columna amb forats en una ala coincideix amb una columna amb els mateixos forats a l'altra ala.

### Numeració

| Tipus | Prefix de peça | Prefix de conjunt |
|---|---|---|
| Columna | c | C |
| Biga | b | B |
| Reforç diagonal | br | BR |
| Placa (col·locada, placa d'extrem o placa de base) | p | P |

Les marques es numeren des de 1 dins de cada prefix. L'ordre és: columnes, després bigues, reforços diagonals i plaques; dins d'un tipus, per nom de perfil en ordre natural (W8x10 abans de W12x26); i després les peces més llargues primer.

Com que la numeració segueix aquest ordre, afegir o canviar una peça pot desplaçar els números d'altres.

## Marques de conjunt

- Cada peça que no està soldada a una altra peça és la barra principal del seu propi conjunt.
- Les plaques d'extrem se solden a la seva biga, i les plaques de base a la seva columna, de manera que pertanyen al conjunt d'aquella barra.
- Dos conjunts comparteixen marca quan les seves barres principals comparteixen marca de peça i les seves peces adjuntes tenen les mateixes marques en els mateixos llocs (dins d'1 mm), permetent els mateixos girs que la barra principal.
- El prefix del conjunt segueix la barra principal: una biga amb dues plaques d'extrem és un conjunt B.

Les plaques que col·loqueu amb l'eina {{ui:Placa}} no se solden a res, així que cadascuna és el seu propi conjunt P.

## Marques de sabata

Les sabates amb la mateixa longitud, amplada, profunditat, text de formigó, malla inferior i barres d'arrencada comparteixen marca: F1, F2 … en l'ordre en què es van col·locar. La posició i la rotació no compten.

## Marques de barra

Les barres amb la mateixa mida, forma i dimensions A, B i C (arrodonides al mil·límetre) comparteixen marca a totes les sabates. La marca és el número de barra, F, i un comptador per mida de barra: 5F1, 5F2, 6F1. Una barra en sentit llarg i una en sentit curt d'una sabata quadrada són la mateixa barra i comparteixen marca; la columna {{ui:Utilitzada per a}} del {{ui:Quadre de doblegat}} enumera els dos usos.
