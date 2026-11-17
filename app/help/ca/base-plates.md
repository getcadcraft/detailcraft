---
title: Afegeix plaques de base i ancoratges
summary: Col·loca una placa de base soldada amb quatre ancoratges sota una columna, defineix-ne les mides i copia-la a totes les columnes similars.
keywords: placa de base, placabase, ancoratges, cargols d'ancoratge, cargols de subjecció, base de columna, cargols de fonamentació, similar
from: 619ebc64
---

Una connexió amb placa de base posa una placa sota la columna, escurça la columna pel gruix de la placa, les solda entre si i afegeix quatre ancoratges que passen per forats de la placa.

:::warning
Les mides són valors inicials, no un disseny. DetailCraft no comprova la pressió d'apoiament, la resistència dels ancoratges ni l'encastament.
:::

## Afegeix una placa de base

1. Trieu {{ui:Selecciona}} ({{key:V}}) i feu clic en una columna. Ha de ser vertical.
2. Trieu {{ui:Placa de base}} al grup {{ui:Connect}}, o {{ui:Afegeix placa de base}} al tauler {{ui:Propietats}}.
3. La barra d'estat diu "S'ha afegit una placa de base amb quatre ancoratges." La connexió nova queda seleccionada.

Una columna pot tenir una sola placa de base. Si ja en té una, la barra d'estat diu "Aquesta columna ja té una placa de base."

## Canvia-la

Seleccioneu la placa de base (feu clic a la placa o a un ancoratge). Sota {{ui:Placa, cargols i soldadura (mm)}}:

| Paràmetre | Per defecte | Què fa |
|---|---|---|
| Gruix de la placa | 25 | La columna s'escurça per aquesta quantitat |
| Llargada de la placa | 450 | Al llarg de la fondària de la columna |
| Amplada de la placa | 400 | Travessa la columna |
| Diàmetre de l'ancoratge | 20 | Mida de l'ancoratge |
| Diàmetre del forat | 33 | Forat de la placa |
| Classe del cargol | F1554 Gr 36 | La classe de l'ancoratge, com a text |
| Separació dels ancoratges (al llarg de la fondària) | 350 | Entre els centres dels ancoratges, al llarg de la llargada de la placa |
| Separació dels ancoratges (transversal) | 300 | Entre els centres dels ancoratges, transversalment |
| Sortida de l'ancoratge per sobre de la placa | 100 | De la cara superior de la placa fins al cim de l'ancoratge |
| Encastament de l'ancoratge sota la placa | 450 | De la cara inferior de la placa fins dins del formigó |
| Mida del cordó de soldadura | 8 | Tot al voltant de la base de la columna |
| Material de la placa | A36 | Text |
| Espai de morter | 0 | Espai entre la part superior del formigó i la cara inferior de la placa |
| Rigiditzadors | Cap | Trieu Cap, 2 (alineats amb l'ànima) o 4 (també perpendiculars a aquesta); vegeu més avall |
| Gruix i alçada del rigiditzador | 12, 150 | |
| Profunditat del ressalt de cisallament | 0 | Fins on arriba el ressalt sota la placa; 0 = sense ressalt |
| Gruix i amplada del ressalt de cisallament | 25, 150 | |
| Volanderes de placa | Cap | A tots els ancoratges, o cap |
| Mida i gruix de la volandera | 0, 0 | 0 = el mínim de l'AISC Design Guide 1 per a l'ancoratge |

Longitud de l'ancoratge = encastament + espai de morter + gruix de la placa + sortida. Amb els valors per defecte són 575 mm.

## Detalls de la base: morter, rigiditzadors, ressalt de cisallament, volanderes

Les quatre opcions estan desactivades en una placa de base nova i en les placas de base de models fets abans de DetailCraft 0.4.

- **Espai de morter.** La placa queda aquesta distància per sobre de la part superior del formigó, i els ancoratges s'allarguen en la mateixa quantitat. AISC Design Guide 1 (2.10) suggereix 1 in. sobre un terra acabat i entre 1½ i 2 in. sobre una sabata o un pilar; més per a les plaques grans i les que tenen ressalt de cisallament.
- **Rigiditzadors.** Plaques verticals soldades a la columna i a la placa, des de la cara de la columna fins a la vora de la placa, com a rectangles (encara sense xamfrà ni conicitat). **2** es col·loquen alineats amb l'ànima, més enllà de cada ala; **4** n'afegeix dos perpendiculars a l'ànima, entre les ales, fins als costats de la placa. En una columna tubular se situen al mig de cada cara. Cadascun va soldat a la columna i a la placa per tots dos costats.
- **Ressalt de cisallament.** Una placa soldada per tot el perímetre sota la placa de base, alineada amb la fondària de la columna i centrada. DetailCraft avisa si no és més profund que l'espai de morter. No talla la cavitat de la sabata; per això la [revisió de col·lisions](topic:clash-check) deixa fora el ressalt i la sabata.
- **Volanderes de placa.** Una volandera quadrada de placa a cada ancoratge, apoiada sobre la placa de base, i llistada al conjunt de la columna com a solta (s'envia amb la columna, no soldada: Design Guide 1, 2.6). Amb mida i gruix 0, DetailCraft pren la volandera mínima de l'AISC Design Guide 1, 2a ed., taula 2.3, per a l'ancoratge; un ancoratge mètric pren la mida en polzades immediatament superior (un ancoratge M20 agafa la fila de 7/8 in.: 2½ in. × 5/16 in.). El tauler de propietats mostra la mida usada. El forat de la volandera és el diàmetre de l'ancoratge + 1/16 in.: és una elecció de DetailCraft, la taula no n'indica cap. DetailCraft avisa quan els ancoratges podrien no sobresortir prou per a la volandera i una femella (sortida inferior al gruix de la volandera + el diàmetre de l'ancoratge).

La taula 2.3 de la Design Guide 1 també recomana el forat de l'ancoratge a la placa: 1-5/16 in. per a un ancoratge de ¾ in., 1-9/16 in. per a ⅞ in., 1-13/16 in. per a 1 in. DetailCraft no canvia la mida del vostre forat.

També hi ha avisos quan els forats dels ancoratges són més a prop de la vora de la placa que 1.2 × el diàmetre del forat, quan els ancoratges cauen dins del contorn de la columna, o quan la placa és més petita que la columna.

## Copia-la a columnes similars

1. Seleccioneu la placa de base.
2. Trieu {{ui:Aplica a similars (n)}}, o {{ui:Similar}} al menú {{ui:More}} del grup {{ui:Connect}}.
3. Cada columna vertical amb el mateix perfil que no té placa de base i que no descansa sobre una altra columna rep una còpia.

## Plaques de base i sabates

Una placa de base no necessita sabata, i una sabata no coneix la placa de base que té a sobre: els ancoratges no s'uneixen a les barres de la sabata. Col·loqueu les sabates amb {{ui:Sabata}}; vegeu [Col·loca sabates amb armadura](topic:footings-and-rebar).
