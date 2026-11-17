---
title: Uneix bigues a pilars amb plaques d'extrem
summary: Afegiu plaques d'extrem cargolades on una biga arriba a un ala o a una ànima de pilar, definiu la placa, els cargols i la soldadura, i copieu la connexió a totes les unions semblants.
keywords: placa d'extrem, connexió a flexió, connexió cargolada, unió, cargols, soldadura, placa d'extrem estesa, a ras, semblant, copia la connexió, component
from: 21e028b2
---

Una connexió amb placa d'extrem solda una placa a l'extrem de la biga i la cargola a l'ala o a l'ànima del pilar. DetailCraft col·loca la placa, retalla la biga, fa forats coincidents a la placa i a l'ala del pilar, afegeix els cargols i la soldadura, i comprova les distàncies als cants i els espaiaments.

:::warning
DetailCraft no dimensiona connexions. Els valors de la configuració són valors inicials perquè els canvieu; no hi ha cap comprovació de resistència. Els avisos de distància als cants i d'espaiament utilitzen els mínims de l'EN 1993-1-8 taula 3.3, que poden diferir de les regles que feu servir.
:::

## Què pot connectar

- Una biga **nivellada** (els dos extrems a la mateixa alçada), vertical (rotació 0), amb un perfil en doble T.
- A l'**ala** o a l'**ànima** d'un pilar en doble T **vertical**, perpendicular a aquest.
- L'extrem de la biga ha de situar-se sobre la línia del pilar, entre la part inferior i la superior del pilar.

Les bigues esbiaixades o inclinades i les seccions que no siguin en doble T es rebutgen amb un motiu: per a aquests casos useu [Plaques de tall](topic:shear-tabs). En una ànima, la placa i les ales de la biga han de cabre entre les ales del pilar; DetailCraft avisa quan no hi caben.

:::tip
A rotació 0, les ales d'un pilar miren al llarg de la direcció de la quadrícula numerada (x). Una biga que va de A a B arriba a l'ànima i rep una placa d'extrem a l'ànima.
:::

## Afegeix plaques d'extrem a una biga

1. Trieu {{ui:Select}} ({{key:V}}) i feu clic a la biga.
2. Trieu {{ui:End plates}} al grup {{ui:Connect}}, o {{ui:Add end plates}} al tauler {{ui:Properties}}.
3. Cada extrem lliure de la biga que arriba perpendicular a un ala o una ànima d'un pilar rep una placa. La barra d'estat diu: "2 plaques d'extrem afegides. Seleccioneu-ne una per canviar-ne la placa, els cargols i la soldadura; Similar la copia a unions com aquesta."
4. La primera placa d'extrem nova queda seleccionada i la seva configuració apareix al tauler {{ui:Properties}}.

Si no passa res, llegiu la barra d'estat:

- "Aquesta biga no acaba en una línia de pilar. Les plaques d'extrem es posen on l'extrem d'una biga arriba a un pilar vertical."
- "Aquesta biga arriba a un pilar en angle o té pendent: les plaques d'extrem són per a unions quadrades i nivellades. Useu Plaques de tall."
- "Els dos extrems ja tenen connexions."

## Canvia la placa, els cargols i la soldadura

Feu clic a la placa d'extrem (o en un dels seus cargols) per seleccionar la connexió. Sota {{ui:Plate, bolts and weld (mm)}}:

| Configuració | Per defecte | Què fa |
|---|---|---|
| Gruix de la placa | 20 | El gruix de la placa; també és quant es retalla la biga enrere més enllà de l'ala |
| Amplada de la placa | 180 | Transversal a la unió |
| Prolongació per sobre de la biga | 0 | Per sobre de l'ala superior; amb un valor superior a 0 fa una placa d'extrem estesa |
| Prolongació per sota de la biga | 0 | Per sota de l'ala inferior |
| Diàmetre del cargol | 20 | Mida nominal del cargol |
| Diàmetre del forat | 22 | El vostre forat de joc a la placa i a l'ala del pilar |
| Qualitat del cargol | A325 | Text; s'imprimeix a la llista de materials |
| Files de cargols | 4 | Files de dos cargols, centrades en l'alçada de la placa |
| Pas entre files | 75 | Espaiament vertical entre files |
| Gramil | 100 | Espaiament horitzontal entre els dos cargols d'una fila |
| Marge de longitud del cargol | 30 | Afegit al gruix a unir per a la femella, la volandera i la rosca; vegeu més avall |
| Mida del cordó de soldadura | 8 | Tot al voltant de l'extrem de la biga |
| Material de la placa | A36 | Text |

Escriviu un valor nou i premeu {{key:Enter}} o {{key:Tab}}. La placa, els forats, els cargols i la longitud de tall de la biga s'actualitzen de seguida. Cada canvi és un pas per desfer.

Sota la configuració veieu què genera la connexió:

- {{ui:Bolts}}: per exemple, "8 × 20 × 70 A325 (gruix 36.2)".
- {{ui:Weld}}: mida, on és i la seva longitud.
- {{ui:Plate}}: la seva mida i la seva marca de peça.

### Com es calculen els números

- La biga es retalla la meitat de la profunditat del pilar (en una ànima: la meitat del gruix de l'ànima) més el gruix de la placa, de manera que la placa queda sobre la cara.
- L'alçada de la placa és la profunditat de la biga més les dues prolongacions.
- Longitud del cargol = gruix a unir (gruix de la placa + gruix de l'ala o de l'ànima del pilar) + marge, arrodonit al múltiple de 5 mm superior.
- La longitud de soldadura mostrada és el perímetre de la secció de la biga.

### Avisos

La connexió es construeix igualment, però aquests avisos apareixen sota ella i a la pestanya {{ui:Problems}}:

- Files de cargols, o cargols, més a prop del cant de la placa que 1.2 × el diàmetre del forat.
- Pas entre files inferior a 2.2 × el diàmetre del forat, o gramil inferior a 2.4 × el diàmetre del forat.
- Forats que entren a l'ànima del pilar o al seu arrodoniment, o fora de l'ala del pilar.
- Una placa més ampla que l'ala del pilar o, en una ànima, més ampla que l'espai entre les ales; ales de biga que no hi caben.
- Una fila de cargols massa a prop d'una ala de la biga, o un gramil massa estret per a l'ànima de la biga i la seva soldadura.

## Copia-la a totes les unions semblants

1. Seleccioneu la connexió que heu configurat.
2. Trieu {{ui:Aplica a les semblants (n)}} al tauler {{ui:Properties}}, o {{ui:Similar}} al menú {{ui:More}} del grup {{ui:Connect}}. El número entre parèntesis és quantes unions la rebran.
3. Cada unió amb el mateix perfil de biga i el mateix perfil de pilar, amb la biga arribant al mateix tipus de cara, que encara no té cap connexió, rep una còpia amb la mateixa configuració. La barra d'estat indica quantes n'hi ha.

Les còpies són independents: canviar-ne una després no canvia les altres. Les unions que ja tenen una connexió es deixen tal qual; suprimiu-les primer si les voleu substituir.

## Moure i suprimir

Les connexions es tornen a construir a partir de la seva configuració cada cop que canvia el model, de manera que moure o redimensionar una biga o un pilar arrossega també les seves plaques d'extrem. Si un canvi fa que la unió ja no encaixi, la connexió es manté al model i la pestanya {{ui:Problems}} n'indica el motiu, per exemple: "L'extrem de la biga ja no és sobre la línia del pilar."

Per suprimir una connexió, seleccioneu-la i premeu {{key:Delete}}. Suprimir la biga o el pilar suprimeix també les seves connexions.

A continuació: [Afegeix plaques de base i barres d'ancoratge](topic:base-plates).
