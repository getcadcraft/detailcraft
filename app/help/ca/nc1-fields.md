---
title: Camps del fitxer NC
summary: Què escriu DetailCraft a cada fitxer NC DSTV, camp per camp, i com es mesuren les cares i les coordenades.
keywords: nc1, dstv, fitxer nc, bloc st, ak, bo, capçalera, cares, coordenades, cnc, format
from: 1b676fc1
---

Cada fitxer `.nc1` descriu una marca de peça. Les línies acaben amb CR LF. Els camps de text porten ASCII simple; la resta de caràcters es converteixen en "?". La segona línia és un comentari, `** DetailCraft <mark>.nc1`.

## Capçalera (ST)

| Camp | Perfil I, canal | Cornièra | HSS rectangular | HSS rodó | Placa |
|---|---|---|---|---|---|
| Comanda | El nom del model | ← | ← | ← | ← |
| Plànol, peça | Marca de peça | ← | ← | ← | ← |
| Fase | La fase de la peça, o 1 | ← | ← | ← | ← |
| Qualitat de l'acer | El grau del material | ← | ← | ← | ← |
| Quantitat | Nombre de peces amb aquesta marca | ← | ← | ← | ← |
| Perfil | El nom del perfil, per exemple W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Codi de perfil | I o U (canal) | L | M | RO | B |
| Longitud | Longitud de tall | ← | ← | ← | Longitud |
| Alçada | Alçada d | Ala | Alçada | Diàmetre | Amplada de la placa |
| Amplada d'ala | bf | Ala | Amplada | Diàmetre | 0 |
| Gruix d'ala | tf | t | Paret t | Paret t | 0 |
| Gruix d'ànima | tw | t | Paret t | Paret t | Gruix de la placa |
| Radi | Radi de l'arrodoniment interior (0 per als canals AISC) | 0 | Radi de la cantonada exterior | 0 | 0 |
| Pes per metre | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superfície de pintura per metre | Perímetre exterior, m²/m | ← | ← | ← | 2 (les dues cares, m²/m²) |
| Angles de serra (4 camps) | 0 (a escaire) | ← | ← | ← | ← |
| Camps de text (4) | `-` | ← | ← | ← | ← |

Les plaques segueixen la columna de la norma "per a les planxes". La norma no té columna per als tubs rodons: DetailCraft escriu el diàmetre com a alçada i com a amplada d'ala, i el gruix de paret com als dos gruixos.

## Contorns exteriors (AK)

- **Perfils I i canals:** l'ànima (v), amb una osca rectangular per a cada osca de tall; cada ala (o i u), escurçada en un extrem on una osca és com a mínim tan profunda com l'ala.
- **HSS rectangular:** les dues parets laterals (v i h), amb osques, i les parets superior i inferior (o i u).
- **Cornières:** un rectangle per ala (v i u). Les osques de les cornières no s'escriuen: aquesta peça apareix com a no escrita. Un reforç diagonal de cornière cargolat a una [cartel·la](topic:brace-gussets) té els seus forats a l'ala cargolada: v per a l'ala al llarg de la u de la peça, u per a l'ala al llarg de la seva v.
- **HSS rodó:** un rectangle a la v, el tub vist de davant (longitud × diàmetre).
- **Plaques:** un rectangle a la cara v.

Cada contorn és tancat (el primer punt es repeteix al final) i va en sentit antihorari.

## Forats (BO)

Una línia per forat: cara, x, y, diàmetre, profunditat 0 (passant). Hi són tots els forats, els que heu introduït i els que han fet les connexions. Un forat que travessa les parets laterals d'un HSS rectangular s'escriu dues vegades, una a la v i una a la h.

## Cares i coordenades

Cada perfil es col·loca tal com ho dibuixa la figura de posicions de perfil de la norma (DSTV 1998, p. 7): x al llarg de la peça, Y transversal, Z cap amunt des de la cara posterior, amb el punt zero a la cantonada exterior. DetailCraft mai no reflecteix una peça per ajustar-la a la figura.

| Cara | Perfil I | Canal | Cornièra | HSS rectangular | Placa |
|---|---|---|---|---|---|
| v | Ànima, davant | Ànima, vista des del costat de les puntes | L'ala al llarg de la u de la peça | Paret lateral a −u | La cara de la placa |
| h | | | | Paret lateral a +u | |
| o | Ala superior | **Ala inferior** | | Paret superior | |
| u | Ala inferior | **Ala superior** | L'ala al llarg de la v de la peça | Paret inferior | |

- **x** va al llarg de la peça des del seu inici de tall.
- **Perfils I i HSS rectangulars:** la y de l'ànima o de les parets laterals es mesura des de la cara inferior del perfil; la y d'una ala o de les parets superior i inferior es mesura des de la seva vora del costat posterior (el costat +u de la peça).
- **Els canals** van estirats sobre l'esquena amb les puntes cap amunt, tal com a la figura de la norma. Així, la y a l'ànima va des de l'exterior de l'ala superior cap avall, l'ala superior és la cara u i l'ala inferior la cara o, i la y en una ala va des del darrere de l'ànima cap a la punta.
- **Cornières:** la y de cada ala es mesura des del taló.
- **Plaques:** la y es mesura des de la vora −u de la placa.

Comproveu com el programari de la màquina llegeix les cares dels canals abans de tallar: alguns programes giren els canals del revés.

## No s'escriu

Biselats, contorns interiors, marques (SI), angles de serra que no siguin a escaire, forats allargats, forats en tubs rodons (DetailCraft n'hi té cap) i osques en cornières i tubs rodons.
