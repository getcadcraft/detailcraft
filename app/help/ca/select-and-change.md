---
title: Selecciona amb finestra, mou, gira, simetria i canvia-ne molts
summary: Arrossegar una finestra per seleccionar, arrossegar les peces seleccionades per moure-les, moure, girar o fer la simetria de la selecció (o d'una còpia), o canviar el perfil, el material, la posició o la rotació de molts elements alhora.
keywords: llaç, tanca, selecció a mà alçada, arrossegar, arrossegar i deixar anar, moure arrossegant, pas, finestra, intersecció, selecció en quadre, selecció per arrossegament, seleccionar molts, moure, girar, simetria, copiar, canviar molts, diversos elements, perfil, material, posició, rotació, varia, línia de quadrícula
from: 50b16f9a
---

Cadascuna d'aquestes accions és un sol pas per desfer: una {{key:Mod+Z}} ho desfà tot.

## Selecciona amb una finestra

- A {{ui:Planta}} i {{ui:Alçat}}, arrossegueu amb el botó esquerre des d'un lloc buit. A {{ui:3D}}, manteniu premuda {{key:Shift}} i arrossegueu (un arrossegament simple gira el model).
- Arrossegueu **cap a la dreta** per a una finestra: agafa el que queda completament dins, dibuixada amb una línia contínua.
- Arrossegueu **cap a l'esquerra** per a una finestra d'intersecció: agafa tot el que toca, dibuixada amb línia discontínua.
- Manteniu {{key:Shift}} mentre comenceu l'arrossegament per afegir a la selecció en lloc de substituir-la.
- Una planta o un alçat només ofereixen el que mostren: les peces retallades per sobre de la planta, o a més d'1 m de la línia de quadrícula de l'alçat, no es trien.
- {{key:Esc}} mentre arrossegueu anul·la la finestra.

### Llaç

Trieu **Llaç** sota {{ui:Arrossegament per seleccionar}} a [Configuració de DetailCraft](topic:settings) i el mateix arrossegament dibuixa una línia a mà alçada en lloc d'un rectangle.

- El primer moviment lateral decideix com selecciona: **cap a la dreta**, el que queda completament dins (línia contínua); **cap a l'esquerra**, el que toca (discontínua).
- Premeu {{key:Space}} mentre arrossegueu per canviar entre dins, tocant i **tanca**: una línia oberta que agafa tot el que travessa (de punts, taronja).
- {{key:Shift}} per afegir i {{key:Esc}} per anul·lar-ho funcionen com amb la finestra.

:::touch
En una pantalla tàctil, un dit desplaça la planta i l'alçat com abans; seleccioneu les peces tocant-les.
:::

A {{ui:Planta}} i {{ui:Alçat}}, desplaceu amb el botó dret o el central mentre l'eina {{ui:Selecciona}} està activa.

## Arrossegueu peces per moure-les

1. Seleccioneu primer les peces (clic, {{key:Shift}}+clic o una finestra).
2. Premeu sobre una de les peces seleccionades i arrossegueu. Tota la selecció es mou; un contorn discontinu indica on va.
3. Deixeu anar per col·locar-la. {{key:Esc}} abans de deixar anar ho torna tot al seu lloc.

- A {{ui:3D}} i {{ui:Planta}} les peces es mouen pel nivell. Manteniu {{key:Mod}} en començar l'arrossegament a {{ui:3D}} per moure-les amunt i avall.
- A {{ui:Alçat}} es mouen dins de l'alçat: al llarg de la línia de quadrícula i amunt i avall.
- La peça que sosteniu s'ajusta a una intersecció de la quadrícula quan el seu extrem arriba a pocs píxels d'una (la intersecció s'il·lumina i la barra d'estat la nomena). En cas contrari, el moviment va per passos de 10 mm.
- Prémer sobre una peça que no és seleccionada encara gira o desplaça la vista, de manera que un arrossegament mai mou res per accident.
- L'arrossegament és un sol pas per desfer, igual que {{ui:Mou}}. Les connexions segueixen les seves barres.

## Canvia una propietat de moltes barres

Seleccioneu dues o més barres. Sota **Canvia en tots** al tauler {{ui:Propietats}}:

- {{ui:Perfil}}, {{ui:Posició}}: per a les bigues, columnes i reforços que hi hagi.
- {{ui:Gruix de la placa (mm)}} i {{ui:Amplada de la placa (mm)}}: per a les plaques.
- {{ui:Material}} i {{ui:Rotació (°)}}: per a totes.

Un camp mostra **Varia** quan les barres no coincideixen. Trieu o escriviu un valor i cada barra a la qual s'aplica l'adopta; la barra d'estat diu quantes han canviat i quantes han conservat la seva.

Els camps numèrics del tauler {{ui:Propietats}} accepten també un càlcul: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un càlcul que no es pot llegir es rebutja, i la barra d'estat diu on ha fallat.

## Mou, gira o fes simetria

Seleccioneu barres i sabates (també funciona una sola), i després useu **Mou, gira, simetria** al tauler {{ui:Propietats}}. Les connexions no es mouen soles: segueixen les seves barres. Si moveu una biga però no la seva columna, la barra d'estat diu quantes connexions uneixen ara una barra moguda amb una que s'ha quedat, i [Problemes](topic:troubleshooting) diu si ja no hi encaixen.

- **Mou:** escriviu x, y i z en mil·límetres i trieu {{ui:Mou}}. O trieu {{ui:Selecciona dos punts}} (o premeu {{key:M}}): feu clic a la intersecció de la quadrícula des d'on es mou i després a la de destí. Un contorn discontinu segueix el punter.
- **Gira en planta:** escriviu l'angle (en sentit antihorari, vist des de dalt) i trieu al voltant de què girar: el centre de la selecció, o una intersecció de la quadrícula. Les columnes giren amb el marc.
- **Simetria:** trieu una línia de quadrícula. La imatge simètrica és el mateix perfil girat de l'altra manera: un perfil en I conserva les seves ales, un perfil en U mira cap a l'altra banda (la seva part superior i inferior s'intercanvien), i els forats i les entalladures van amb la peça.
- Marqueu **Conserva l'original (fes una còpia)** per deixar la selecció on és i moure, girar o fer la simetria d'una còpia. Les seves connexions la segueixen quan {{ui:Copia les plaques d'extrem i les de base amb els seus membres}} està activat a [Configuració de DetailCraft](topic:settings).

Girar és fer voltes al voltant d'una línia vertical, i la simetria es fa en un pla vertical; per tant, els nivells es mantenen nivells i les sabates es mantenen dretes.
