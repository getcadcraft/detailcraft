---
title: Cartel·les de reforços diagonals
summary: Connecteu l'extrem d'un reforç diagonal a una columna o biga amb una cartela: cantoneres i pletines cargolades, tubs amb ranura i soldats.
keywords: cartela, placa de cartela, reforç diagonal, arriostrament, arriostrament vertical, reforç de cantonera, pletina, fleja, reforç HSS, placa ganivet, tub amb ranura, connectar
from: 22f6598d
---

Una cartela de reforç diagonal és una placa soldada en taller a la columna (o biga) on arriba el reforç, al pla del reforç. DetailCraft talla el reforç enrere fins que queda lliure de tot el que hi ha a la unió, col·loca i dimensiona la cartela, i uneix el reforç a aquesta: una **cantonera** o una **pletina** amb una línia de cargols, o un **tub** (HSS quadrat, rectangular o circular) amb ranura sobre la cartela i soldat.

## On funciona

- L'extrem del reforç queda sobre la línia d'una columna o d'una biga (a 1 mm), i el reforç no és gairebé paral·lel a aquesta línia. Una columna és el suport quan n'hi ha; si no, la biga.
- La cartela queda al pla del reforç i a la línia del suport. Una **cantonera** ha de tenir una aleta en aquest pla, i una **pletina** la seva cara: gireu el reforç (la seva {{ui:Rotació (°)}}) fins que ho compleixi. Amb les aletes de la cantonera a 45° respecte del pla, DetailCraft ho diu i no construeix res.
- Els perfils en I i en U com a reforços no es connecten.

## Afegeix cartel·les

1. Seleccioneu un o més reforços.
2. Trieu {{ui:Cartela}} al menú {{ui:More}} del grup {{ui:Connect}}.
3. Cada extrem dels reforços seleccionats que arriba a una columna o biga i que no té cartela en rep una.

Seleccioneu una cartela (feu clic a la placa) per canviar-ne la configuració. {{ui:Aplica a similars (n)}} la copia a cada extrem de reforç lliure amb els mateixos perfils de reforç i de suport.

## Què calcula DetailCraft

- **Retall.** El reforç s'escurça en aquest extrem fins que les cantonades quedin a una distància de {{ui:Separació del contravent}} (25) de cada barra de la unió (al costat, o més enllà del seu extrem quan la barra hi acaba) i de la placa de base sota la columna.
- **Cargols (cantoneres, pletines).** {{ui:Cargols}} (3) en una línia al llarg del reforç, el primer a {{ui:Distància d'extrem del cargol}} (40) de l'extrem tallat, amb un {{ui:Pas dels cargols}} (75). En una cantonera passen per l'aleta del pla de la cartela, a {{ui:Gàlib dels cargols}} del taló (0 = el mig de l'aleta); en una pletina, per la seva línia central (o desplaçats d'ella pel gàlib). Gruix de subjecció = l'aleta o la pletina + la cartela.
- **La cartela.** Un rectangle: des de la cara del suport cap enfora, més enllà de l'últim cargol, la distància d'extrem; i al llarg del suport tant com necessitin els cargols. Va enganxat al darrere de l'aleta de la cantonera (o a la cara de la pletina). En un tub passa pel mig del tub, sota {{ui:Solapament del tub a la placa de cartela}} (200) del tub, amb espai per a les soldadures.
- **Unions.** A la base d'una columna la cartela baixa fins a la placa de base. On una biga creua la unió (un reforç que puja fins a la cantonada biga-columna), la cartela queda sota o sobre la biga. Si això deixa els cargols o el solapament sense la distància d'extrem, DetailCraft avisa.
- **Soldadures.** La cartela al seu suport, per tots dos costats. Un tub a la cartela, quatre línies al llarg del solapament.

## Coses a tenir en compte

- La cartela pertany al conjunt del suport (soldada en taller). El reforç s'envia amb els forats fets i va al seu propi fitxer NC.
- La ranura d'un tub no es talla al model; la [revisió de col·lisions](topic:clash-check) deixa fora el reforç i la seva cartela.
- La cartela no se solda a una biga que toca. Encara no estan implementades les cartel·les de cantonada soldades a la biga i a la columna alhora, les cantonades xamfranades, ni la disposició pel punt de treball d'una unió del Uniform Force Method.
- DetailCraft no dissenya la cartela ni els cargols (sense comprovacions de resistència); els avisos són de separació i d'ajust.
