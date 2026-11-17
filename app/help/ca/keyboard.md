---
title: Accions de teclat i ratolí
summary: Cada drecera de teclat i cada acció de ratolí, trackpad i pantalla tàctil de DetailCraft, extretes del codi.
keywords: teclat, dreceres, tecles de drecera, tecles, ratolí, trackpad, tàctil, ctrl, ordre, full de referència
from: 05a2dea0
---

Com s'escriuen les tecles en aquesta ajuda: [Tecles, ratolins i trackpads](common:keys). Al Mac, {{key:Mod}} és la tecla Command; en la resta, Ctrl.

## Eines

Funcionen quan el cursor no és en un camp de text o de números.

| Tecla | Fa |
|---|---|
| {{key:V}} | {{ui:Selecciona}} |
| {{key:B}} | {{ui:Biga}} |
| {{key:C}} | {{ui:Pilar}} |
| {{key:R}} | {{ui:Reforç diagonal}} |
| {{key:P}} | {{ui:Placa}} |
| {{key:F}} | {{ui:Sabata}} |
| {{key:S}} | {{ui:Escala}} |
| {{key:M}} | Mou la selecció triant dues interseccions de quadrícula ([Selecciona per finestra, mou, gira, simetria i canvia molts](topic:select-and-change)) |
| {{key:Esc}} | Deixa una finestra de selecció que s'arrossega, o torna a posar les peces arrossegades; cancel·la un moviment, el primer punt d'una biga, un reforç diagonal o una placa, o una enganxada; premeu-la de nou per tornar a {{ui:Selecciona}}; en {{ui:Selecciona}}, neteja la selecció. Amb el menú {{ui:Més}} obert, el tanca |
| {{key:Delete}} o {{key:Backspace}} | Suprimeix la selecció (tot el que és seleccionat, en un sol pas de desfer) |

## Fitxer i edició

| Tecla | Fa |
|---|---|
| {{key:Mod+S}} | Desa el model (baixada). Funciona fins i tot mentre s'escriu en un camp |
| {{key:Mod+O}} | Obre un model. Funciona fins i tot mentre s'escriu en un camp |
| {{key:Mod+Z}} | Desfés (fora dels camps de text; dins d'un camp desfà el que heu escrit) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Refés |

## Copia i enganxa

Funcionen quan el cursor no és en un camp de text o de números (allà copien, enganxen i seleccionen el text com de costum). Cada enganxada, retallada, duplicació o supressió és un sol pas de desfer. Més: [Copia, enganxa i duplica](topic:copy-paste).

| Tecla | Fa |
|---|---|
| {{key:Mod+C}} | {{ui:Copia}} les barres i les sabates seleccionades (amb els seus forats, osques i connexions) |
| {{key:Mod+X}} | {{ui:Retalla}}: copia la selecció i després la suprimeix |
| {{key:Mod+V}} | {{ui:Enganxa}}: la còpia segueix el punter; cliqueu una intersecció de quadrícula per situar-la |
| {{key:Mod+Shift+V}} | {{ui:Enganxa al mateix lloc}}: a les coordenades des d'on es va copiar |
| {{key:Mod+D}} | {{ui:Duplica}}: una còpia a l'instant, desplaçada pel desplaçament de la [configuració de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Selecciona-ho tot}}: cada barra, connexió i sabata |
| {{key:Esc}} | {{ui:Neteja la selecció}} |

Si heu seleccionat text a la pàgina (en una taula d'informe, per exemple) i res del model, {{key:Mod+C}} copia el text, com de costum.

{{ui:Nou}}, {{ui:Exemple}} i les exportacions no tenen tecles; useu la barra d'eines.

Cap d'aquestes tecles no fa res mentre hi hagi un diàleg obert (la vista prèvia del plànol de taller o una pregunta).

## Camps i panells

| Tecla | Fa |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Aplica un valor escrit (cada canvi és un pas de desfer) |
| {{key:Enter}} en un camp de {{ui:Quadrícules}}, {{ui:Nivells}}, {{ui:Perfil personalitzat}}, de forat o d'osca | Igual que prémer el botó d'aquell formulari |
| {{key:Left}} {{key:Right}} | Canvia entre les pestanyes {{ui:Problemes}}, {{ui:Llista de materials}} i {{ui:Quadre de doblegat}} quan una pestanya té el focus |
| {{key:Esc}} | Tanca la vista prèvia del plànol de taller o un diàleg de pregunta (igual que {{ui:Cancel·la}}) |

## Pantalla i ajuda

| Tecla | Fa |
|---|---|
| {{key:Ctrl+Shift+F}} | Canvia entre normal, pantalla completa i pantalla completa amb les barres amagades. Control en tots els ordinadors, també al Mac |
| {{key:Mod+,}} | Obre {{ui:Configuració}} ([configuració de DetailCraft](topic:settings)) |
| {{key:Esc}} | Surt de la pantalla completa |
| {{key:F1}} | Obre aquesta ajuda |

## Ratolí

| Acció | En 3D | En planta i alçat |
|---|---|---|
| Clic | Selecciona una peça, o col·loca-la a la intersecció més propera quan hi ha una eina de col·locació activa (o l'enganxa allà mentre s'enganxa) | Igual |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} i clic | Afegeix la peça a la selecció, o la treu | Igual |
| Premeu sobre una peça seleccionada i arrossegueu | Mou la selecció per tot el nivell; amb {{key:Mod}} premut, amunt i avall | Mou la selecció (en un alçat: al llarg i amunt i avall) |
| Arrossegar amb el botó esquerre | Gira el model | Amb {{ui:Selecciona}}: una finestra de selecció (cap a la dreta: totalment dins; cap a l'esquerra: tocant). En col·locar: desplaça |
| {{key:Shift}} i arrossegar amb el botó esquerre | Amb {{ui:Selecciona}}: una finestra de selecció, afegida a la selecció. En col·locar: desplaça | Amb {{ui:Selecciona}}: una finestra de selecció, afegida a la selecció |
| {{key:Ctrl}} o {{key:Mod}} i arrossegar amb el botó esquerre | Desplaça | Res |
| Arrossegar amb el botó dret | Desplaça | Desplaça |
| Roda | Fa zoom cap al centre de la vista | Zoom |
| Arrossegar amb el botó del mig | Zoom | Amb {{ui:Selecciona}}: desplaça. Si no, zoom |
| Deixar anar un fitxer `.detailcraft.json` a l'aplicació | L'obre | L'obre |

Un clic només compta si el punter es mou menys d'uns 5 píxels entre prémer i deixar anar; un moviment més llarg és un arrossegament.

## Trackpad

| Acció | Fa |
|---|---|
| Lliscament de dos dits amunt o avall, o pinça | Zoom |
| Premer i arrossegar | Gira (3D) o desplaça (planta i alçat) |
| {{key:Shift}} i premer i arrossegar | Desplaça en 3D |
| Clic amb dos dits | Clic dret (no hi ha menú a la vista) |

## Tàctil

En una tauleta o una pantalla tàctil:

| Acció | Fa |
|---|---|
| Toc | Selecciona una peça, o col·loca-la a la intersecció de quadrícula més propera quan hi ha una eina de col·locació activa (un toc a menys d'una amplada de dit en compta) |
| Premsa llarga sobre una peça | L'afegeix a la selecció, o la treu (el que fa {{key:Shift}}+clic amb el ratolí) |
| Un dit sobre una peça seleccionada, i després arrossegar | Mou la selecció, ajustant-la a les interseccions de quadrícula |
| Un dit en un altre lloc | Gira el model (3D) o desplaça (planta i alçat) |
| Dos dits | Pinça per fer zoom; desplaçar-los junts per desplaçar |

Els botons, les llistes i els camps són més grans quan la pantalla és només tàctil. Les finestres de selecció necessiten ratolí; amb els dits, useu el toc i la premsa llarga.

## Dreceres que el navegador es reserva

Algunes dreceres són del navegador i cap pàgina no les pot usar, per exemple {{key:Mod+W}} (tanca la pestanya), {{key:Mod+T}} (pestanya nova) i {{key:Mod+N}} (finestra nova). Si {{key:Mod+Y}} obre l'historial del navegador en lloc de refer, useu {{key:Mod+Shift+Z}}.

Les dreceres només arriben a DetailCraft quan la pàgina té el teclat. Si una tecla no fa res, o el navegador hi actua, cliqueu primer una part buida de la finestra de DetailCraft (per exemple, després d'escriure a la barra d'adreces).

## On és Mou

No hi ha cap ordre Mou: seleccioneu una peça i arrossegueu-la pel nivell (manteniu {{key:Mod}} per arrossegar amunt i avall), o editeu el seu {{ui:Inici}} i {{ui:Final}} a {{ui:Propietats}}.
