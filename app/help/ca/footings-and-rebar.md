---
title: Col·locació de sabates amb armadura
summary: Col·loqueu sabates aïllades rectangulars amb una malla inferior i barres d'arrencada, comproveu-les i baixeu el quadre de doblegat.
keywords: sabata, sabata aïllada, fonamentació, armadura, reforç, barres, malla, arrencades, passadors, quadre de doblegat, llista de barres, formigó, ganxos, recobriment
from: 41a048be
---

Aquest tema tracta de sabates aïllades rectangulars. Bigues, pilars, lloses i murs són a [Detall de formigó armat](topic:reinforced-concrete). Cada sabata rep una malla inferior en les dues direccions i, si les voleu, barres d'arrencada que surten cap amunt. Les barres són de mides US #3 a #11.

## Col·locar una sabata

1. Trieu {{ui:Plan}} i seleccioneu el nivell de la part superior de la sabata.
2. Trieu {{ui:Footing}} al grup {{ui:Place}}, o premeu {{key:F}}.
3. Definiu la sabata al tauler {{ui:Properties}} (vegeu més avall), o mantingueu els valors per defecte.
4. Feu clic en una intersecció de quadrícula. La sabata queda centrada a sobre, amb la part superior al nivell. La barra d'estat diu, per exemple, "Sabata 2000 x 2000 x 600 sota A/1."

També podeu usar el formulari {{ui:Add by grid}} a la part inferior del tauler.

La sabata es dibuixa transparent perquè se'n vegin les barres, que es dibuixen com a tubs sòlids.

## Paràmetres de la sabata

| Camp | Valor per defecte | Observacions |
|---|---|---|
| Llargada L (mm) | 2000 | Segons x; de 300 a 50000 |
| Amplada B (mm) | 2000 | Segons y; de 300 a 50000 |
| Cantell H (mm) | 600 | De 150 a 10000 |
| Formigó | 4000 psi | Text, impressió a l'exportació IFC |

**Malla inferior**

| Camp | Valor per defecte | Observacions |
|---|---|---|
| Barres llargues | #5 | Barres en la direcció de L, la capa inferior |
| Separació (mm) | 250 | La separació màxima permesa; les barres es reparteixen uniformement a aquesta separació o més juntes |
| Barres curtes | #5 | Barres en la direcció de B, col·locades sobre les llargues |
| Separació (mm) | 250 | Com més amunt |
| Recobriment (mm) | 75 | Recobriment lliure a totes les cares |
| Ganxos als extrems | Activa | Doblega els dos extrems de cada barra de la malla amb un ganxo estàndard de 90° (forma U); desactivat dona barres rectes (forma S) |

**Barres d'arrencada**

| Camp | Valor per defecte | Observacions |
|---|---|---|
| Barres d'arrencada | Activa | Desactiveu-les per a una sabata sense arrencades |
| Barra | #6 | |
| Barres segons L / Barres segons B | 2 / 2 | Una quadrícula de barres, centrada a la sabata |
| Separació segons L / Separació segons B | 250 / 250 | Entre centres de barra |
| Sortida per sobre de la part superior | 600 | Quant sobresurten les barres per sobre de la part superior de la sabata |
| Ganxo a la part inferior | Activa | Un ganxo de 90° cap a fora, recolzat sobre la malla (forma L) |

Sota els camps, DetailCraft mostra la cama del ganxo de les barres llargues, per exemple "Cama del ganxo per a #5: 254 mm d'extrem a extrem."

## Canviar una sabata col·locada

Seleccioneu la sabata (feu clic al formigó lluny de qualsevol pilar, o en una de les barres). Obtindreu els mateixos camps més {{ui:Center x}}, {{ui:Center y}}, {{ui:Top z}} i {{ui:Rotation (°)}}. Sota ells, una taula enumera les barres d'aquesta sabata amb les seves marques, quantitats i longituds, i el volum de formigó en metres cúbics.

Cada canvi es comprova abans de conservar-se. Un canvi que no es pot construir es rebutja i la barra d'estat n'explica el motiu, per exemple "El recobriment no deixa espai per a barres en aquesta sabata.", "La sabata és massa poc profunda per a dues capes de barres dins del recobriment." o "Les barres d'arrencada no caben dins la sabata amb un recobriment de 75 mm."

Els canvis que es poden construir però que necessiten una revisió es llisten sota la sabata i a la pestanya {{ui:Problems}}:

- "Les barres #11 a 59.6 mm deixen menys de 35.8 mm de separació lliure (ACI 318-19 25.2.1)." La separació lliure entre barres ha de ser com a mínim el diàmetre de la barra i com a mínim 25.4 mm.
- "Els ganxos #5 necessiten 254 mm de cantell; només caben 150 mm dins del recobriment." Les cames dels ganxos es retallen aleshores perquè càpiguen, de manera que ja no són ganxos estàndard.
- "Els ganxos de les barres d'arrencada arriben dins del recobriment."
- "Les barres d'arrencada estan més juntes que la separació lliure mínima."

## Marques de barra i quadre de doblegat

Les barres idèntiques (mateixa mida, forma i dimensions al mil·límetre) comparteixen una marca de barra a totes les sabates. Les marques s'escriuen `<número de barra>F<n>`: 5F1, 5F2 per a barres #5, 6F1 per a la primera barra #6, i així successivament. Les sabates amb la mateixa mida, formigó, malla i arrencades comparteixen una marca de sabata: F1, F2 …

1. Obriu la pestanya {{ui:Bending schedule}} a la part inferior. Cada fila és una marca de barra: mida, forma, dimensions A, B i C, quantitat, longitud de tall, longitud total, massa per metre, pes de cada barra, pes total i per a què s'usa la barra.
2. Trieu {{ui:Download CSV}} a la pestanya, o {{ui:Bending}} al menú {{ui:More}} del grup {{ui:Output}}, per obtenir `<name> bending schedule.csv`.

Les formes són codis propis de DetailCraft, no d'una norma: S recta, L una doblegada, U dues doblegades. Les dimensions són d'extrem a extrem; la longitud de tall és la longitud exacta de l'eix a través de les doblegades. Vegeu [Referència de l'armadura](topic:rebar-reference).

## Què no comprova DetailCraft

- Les longituds d'ancoratge i de solapament, i si les barres d'arrencada són prou llargues per al pilar de sobre.
- La part de la mida del àrid de la regla de separació lliure (no coneix la dosificació).
- Qualsevol cosa sobre el pilar o la placa de base de sobre: sabates i acer són elements separats.

Vegeu també [Encara no implementat](topic:not-built-yet).
