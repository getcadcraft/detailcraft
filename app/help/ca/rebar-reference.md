---
title: Referència d'armadures
summary: Mides de barres, dimensions de ganxos, codis de forma, longituds de tall i les columnes del quadre de doblegat que fa servir DetailCraft.
keywords: armadura, mides de barres, ganxos, diàmetre de doblegat, codis de forma, longitud de tall, quadre de doblegat, llista de barres, astm a615, aci 318
from: 1583535e
---

## Mides de barres

Segons ASTM A615/A615M Taula 1 (designacions en unitats imperials). Els mil·límetres i els kg/m són conversions exactes dels valors publicats en polzades i lb/ft. Les llistes mostren cada mida com, per exemple, "#5 (15.9 mm)".

| Barra | Diàmetre (mm) | Massa (kg/m) | Àrea (mm²) | Diàmetre interior de doblegat | Cama del ganxo de 90°, de fora a fora (mm) |
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

A [Configuració de DetailCraft](topic:settings) ({{ui:Armadura}}), els **Noms de barres ASTM** poden mostrar aquestes barres amb els seus noms mètrics A615M en lloc dels ASTM: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (les mateixes barres; l'ACI 315-99 Taula 1 n'enumera tots dos).

### Barres mètriques (BS 4449)

| Barra | Diàmetre (mm) | kg/m | Radi mínim de doblegat r (mm) | Cama del ganxo = projecció a l'extrem P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

La massa és la secció nominal per 7850 kg/m³. El radi i la projecció a l'extrem són els mínims de BS 8666:2020 (la seva taula de dimensions mínimes; l'antic diàmetre és 2r). Les sabates amb barres BS reben cames de ganxo de P i longituds de tall segons les fórmules de BS 8666 de més avall. Triar acer europeu a la configuració fa que les sabates noves comencin amb malles H16 i barres d'espera H20 en formigó C30/37.

## Ganxos

Barres ASTM: ganxos normals de 90° segons ACI 318-19 Taula 25.3.1: diàmetre interior de doblegat de 6 db per a #3 a #8 i de 8 db per a #9 a #11, amb una prolongació recta de 12 db després del doblegat. La cama del ganxo, mesurada de fora a fora, és la meitat del diàmetre de doblegat + db + 12 db.

Si el ganxo d'una barra de malla no hi cap a la profunditat de la sabata dins del recobriment, DetailCraft escurça la cama perquè hi càpiga i mostra un avís.

## Formes

DetailCraft guarda tres formes. El quadre de doblegat les imprimeix amb els codis de DetailCraft, com a tipus de l'ACI 315 o com a codis de forma de BS 8666: trieu **Codis de forma del quadre de doblegat** a [Configuració de DetailCraft](topic:settings) ({{ui:Armadura}}).

| Codi | Forma | Dimensions |
|---|---|---|
| S | Recta | A = longitud |
| L | Un doblegat de 90° | A = cama principal, B = cama del ganxo, totes dues de fora a fora |
| U | Dos doblegats de 90° al mateix costat | A = central, B i C = les dues cames, de fora a fora |

Les barres de malla amb {{ui:Ganxos d'extrem}} activat són U; sense, són S. Les barres d'espera amb {{ui:Ganxo a la part inferior}} activat són L; sense, són S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sense número de tipus |
| L | 11, L = A + B − 0.5r − d | sense número de tipus: la figura no té cap barra amb un sol ganxo |
| U | 21, A i C les cames, B la central: L = A + B + C − r − 2d | Tipus 2, ganxos A i G, B recta |

Amb codis BS 8666 o ACI 315, les columnes A, B i C del quadre segueixen la lletra d'aquella norma (la central d'una U és B).

## Longitud de tall

Per a barres BS 4449, la longitud de tall és la fórmula de BS 8666 del codi de forma de la barra (més amunt). Per a barres ASTM és la longitud exacta de l'eix de la barra: les parts rectes més els doblegs com a arcs de la meitat del diàmetre de doblegat més la meitat del diàmetre de la barra. No es calcula a partir d'una taula de deduccions de doblegat, de manera que pot diferir uns quants mil·límetres d'un quadre que n'utilitzi una.

## Disposició

- Malla inferior: les barres al llarg de L formen la capa inferior, i les barres al llarg de B hi descansen a sobre. Cada conjunt es reparteix de manera uniforme per la sabata dins del recobriment, amb l'espaiat que doneu o més petit, i amb almenys dues barres.
- Barres d'espera: una graella de barres al llarg de L i de B amb els espaiats que doneu, centrada a la sabata, sobre la malla i sobresortint per sobre de la part superior en la projecció que doneu. Cada ganxo apunta cap enfora.

## Comprovacions

| Comprovació | Regla | Resultat |
|---|---|---|
| Espai per a les barres | El recobriment a cada costat deixa espai per a les barres | Es rebutja si no hi cap |
| Profunditat per a dues capes | La profunditat menys dos recobriments aguanta les dues capes de malla | Es rebutja si no hi cap |
| Les barres d'espera hi caben | La graella d'espera cap dins del recobriment | Es rebutja si no hi cap |
| Espai lliure entre barres | Almenys el més gran entre 25.4 mm i db (ACI 318-19 25.2.1; la mida de l'àrid no es comprova) | Avís |
| Profunditat del ganxo | La cama del ganxo cap dins de la profunditat del recobriment | Avís; cama escurçada |
| Ganxos de les barres d'espera | Els ganxos queden fora del recobriment | Avís |

## Columnes del quadre de doblegat

La pestanya {{ui:Quadre de doblegat}} i el seu CSV tenen aquestes columnes: Marca de barra, Mida, Forma, A (mm), B (mm), C (mm), Quantitat, Longitud de tall (mm), Longitud total (m), kg/m, Pes unitari (kg), Pes total (kg), Ús. L'última fila suma la quantitat, la longitud i el pes.
