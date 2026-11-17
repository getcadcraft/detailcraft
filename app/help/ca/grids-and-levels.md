---
title: Configuració de quadrícules i nivells
summary: Escriviu les línies de quadrícula, les seves separacions i els nivells on se situa cada barra.
keywords: quadrícula, quadrícules, eixos, línies de quadrícula, nivells, cotes d'alçada, plantes, forjats, separació, configuració
from: 9cad233c
---

Cada barra de DetailCraft se situa en una intersecció de quadrícula a un nivell. Configureu primer les quadrícules i els nivells; més tard els podeu canviar.

## Com funcionen aquí les quadrícules

- Les **línies numerades** van en una direcció, les **línies amb lletres** en l'altra. Els noms són només costum: una etiqueta pot ser qualsevol text de fins a 8 caràcters (1, 2, 3 o A1, A2, o 10, 20).
- Escriviu les etiquetes i les separacions entre elles, no les coordenades. La primera línia de cada conjunt és a 0.
- Les línies numerades són línies de x constant; les línies amb lletres són línies de y constant. Així, una biga de la quadrícula 1 a la 2 va en la direcció de x, i una biga de A a B va en la de y.
- Tots els valors són en mil·límetres.

Un model nou comença amb les línies numerades 1 2 3 a 6000 6000, les línies amb lletres A B a 6000, i dos nivells.

## Configurar les quadrícules

1. Al tauler {{ui:Model}} de l'esquerra, obriu {{ui:Grids}} si està plegat.
2. A {{ui:Numbered lines}}, escriviu les etiquetes separades per espais, per exemple `1 2 3 4 5`.
3. Al camp {{ui:Spacings}} que hi ha a sota, escriviu una separació per a cada espai, per exemple `6000 6000 7500 6000`. Quatre espais per a cinc línies.
4. Feu el mateix a {{ui:Lettered lines}} i al seu {{ui:Spacings}}, per exemple `A B C` i `8000 8000`.
5. Premeu {{ui:Apply grids}}.

La barra d'estat diu "Quadrícules actualitzades." i la vista fa zoom a la nova quadrícula. Les comes també funcionen com a separadors.

Si alguna cosa no quadra, no canvia res i la barra d'estat diu per què, per exemple "Quadrícules numerades: doneu una separació entre cada parell de línies (4)." Altres comprovacions: les separacions han de ser mil·límetres positius, les etiquetes han de ser diferents, i pot haver-hi com a màxim 60 línies en cada direcció.

:::note
Les barres mantenen les seves coordenades quan es mouen les quadrícules. Si canvieu una separació després de col·locar acer, l'acer es queda on era i ja no és sobre la quadrícula. Canvieu primer la quadrícula, o mogueu les barres editant les coordenades dels seus extrems.
:::

## Configurar els nivells

1. Obriu {{ui:Levels}} al tauler {{ui:Model}}.
2. Cada fila té un nom de nivell i la seva cota en mil·límetres. Editeu-los com vulgueu.
3. Trieu {{ui:Add level}} per a una altra fila. Es diu "Nivell 3" (i així successivament) i se situa a 4000 mm per sobre del nivell més alt; canvieu les dues coses si cal.
4. Per eliminar un nivell, trieu el botó × al final de la seva fila.
5. Premeu {{ui:Apply levels}}.

No canvia res fins que premeu {{ui:Apply levels}}. Els nivells s'ordenen per cota en aplicar-los. Cada nivell necessita un nom, dos nivells no poden compartir un nom, i heu de mantenir com a mínim un nivell.

Els nivells poden estar per sota de zero (un soterrani a `-3500`) i no cal que estiguin equidistants.

## Com s'usen els nivells

- Un pilar col·locat en un nivell arriba fins al següent nivell, o fins al nivell que trieu a {{ui:Up to}}.
- Les bigues i les plaques es col·loquen entre dues interseccions al nivell on feu clic.
- Les sabates es col·loquen amb la part superior al nivell on feu clic.
- {{ui:Plan}} mira cap avall a un nivell cada vegada.
- L'exportació IFC crea una planta d'edifici per cada nivell.

## Desfer

Els canvis de quadrícula i de nivell són edicions com qualsevol altra: {{key:Mod+Z}} torna a posar la quadrícula anterior.

## Següent

[Col·locació de pilars, bigues i reforços diagonals](topic:place-members)
