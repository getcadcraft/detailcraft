---
title: Mou-te per la vista 3D
summary: Gireu, desplaceu i feu zoom amb un ratolí, un trackpad o una pantalla tàctil, i quan usar Planta i Alçat.
keywords: òrbita, girar, desplaçar, zoom, navegar, vista, càmera, trackpad, tàctil, planta, alçat, ajustar, ratolí
from: 02c9c7b9
---

La vista té tres modes, que es trien a la barra de vista de dalt: {{ui:3D}}, {{ui:Planta}} i {{ui:Alçat}}. Els botons del ratolí fan coses diferents en 3D que en Planta i Alçat; llegiu les dues taules.

## En 3D

:::mouse
| Per a | Feu això |
|---|---|
| Girar al voltant del model | Arrossegueu amb el botó esquerre |
| Desplaçar | Arrossegueu amb el botó dret, o manteniu {{key:Shift}} i arrossegueu amb el botó esquerre |
| Fer zoom | Gireu la roda, o arrossegueu amunt i avall amb el botó del mig (roda premuda) |
| Seleccionar una peça | Cliqueu-la (un clic que es mou menys de pocs píxels) |
| Veure tot el model | El botó d'ajustar a l'extrem dret de la barra de vista |
:::

:::touch
| Per a | Feu això |
|---|---|
| Girar al voltant del model | Arrossegueu amb un dit |
| Desplaçar | Arrossegueu amb dos dits |
| Fer zoom | Pinça amb dos dits |
| Seleccionar una peça | Toqueu-la |
| Veure tot el model | El botó d'ajustar a l'extrem dret de la barra de vista |
:::

El cub de vista de dalt a la dreta (sota la barra de vista) gira amb el model: cliqueu una cara, aresta o vèrtex per mirar des d'allà, arrossegueu-lo per girar-lo, o cliqueu el seu botó de casa per tornar a l'inici. Vegeu [El cub de vista](topic:view-cube).

El model gira al voltant del centre de la vista, i la roda fa zoom cap al centre de la vista, no cap al punter. Per mirar de prop un racó, desplaceu-lo primer al centre i després feu zoom.

## En Planta i Alçat

Aquestes vistes miren el model de cara i no es poden girar.

:::mouse
| Per a | Feu això |
|---|---|
| Desplaçar | Arrossegueu amb el botó esquerre o el dret |
| Fer zoom | Gireu la roda, o arrossegueu amunt i avall amb el botó del mig |
| Seleccionar una peça | Cliqueu-la |
:::

:::touch
| Per a | Feu això |
|---|---|
| Desplaçar | Arrossegueu amb un dit |
| Fer zoom | Pinça amb dos dits (arrossegar amb dos dits també desplaça) |
| Seleccionar una peça | Toqueu-la |
:::

## Al trackpad d'un Mac

:::mac
- **Zoom:** llisqueu amunt o avall amb dos dits, o feu pinça. Totes dues arriben a la vista com a zoom.
- **Girar (3D):** premeu el trackpad i arrossegueu amb un dit. Si useu tocar per fer clic, el doble toc i arrossegar també funciona quan l'arrossegament està activat a **Configuració del sistema, Accessibilitat, Control del punter, Opcions del trackpad**.
- **Desplaçar (3D):** manteniu {{key:Shift}} i arrossegueu. Mantenir {{key:Ctrl}} o {{key:Mod}} mentre s'arrossega també desplaça. Un clic amb dos dits és un clic dret, però arrossegar-hi amb el trackpad és incòmode.
- **Desplaçar (Planta i Alçat):** només cal arrossegar.
- Un Magic Mouse no té botó del mig: useu l'arrossegament amb {{key:Shift}} per desplaçar i un lliscament a la superfície per fer zoom.
:::

Més sobre el clic dret i el desplaçament sense ratolí: [Tecles, ratolins i trackpads](common:keys).

## Planta i Alçat faciliten la col·locació

En {{ui:3D}}, les interseccions de nivells diferents poden quedar una sobre l'altra a la pantalla, i un clic va al punt més proper. En {{ui:Planta}} i {{ui:Alçat}} només es poden triar els punts del nivell o de la línia de quadrícula que esteu mirant.

1. Trieu {{ui:Planta}}, i després un nivell de la llista al costat dels botons. La vista mira cap avall a aquest nivell; tot el que estigui a més d'1,5 m per sobre queda retallat.
2. O trieu {{ui:Alçat}}, i després una línia de quadrícula amb lletra ("Quadrícula A", "Quadrícula B" …). La vista mira de cara a aquesta línia; només es mostra l'acer a menys d'1 m.

Els alçats només són a les línies de quadrícula amb lletra. Per treballar en una línia de quadrícules numerades (un pòrtic de A a B), useu {{ui:3D}}, o col·loqueu escrivint al formulari {{ui:Afegeix per quadrícula}}. Vegeu [Col·loca columnes, bigues i reforços diagonals](topic:place-members#place-by-grid-without-clicking).

## Seleccionar

- Cliqueu una peça per seleccionar-la. Es posa del color de ressaltat i el panell {{ui:Propietats}} la mostra.
- Cliqueu un espai buit, o premeu {{key:Esc}}, per netejar la selecció.
- L'acer guanya al formigó: un clic en una columna dins d'una sabata transparent selecciona la columna. Cliqueu la sabata lluny de la columna, o en una de les seves barres, per seleccionar la sabata.
- Cliqueu un cargol o una placa d'extrem per seleccionar la seva connexió.
- En Planta i Alçat, les peces retallades no es poden clicar.
- Manteniu {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) i cliqueu per afegir una peça a la selecció o per treure-la; {{key:Mod+A}} ho selecciona tot. Encara no hi ha selecció per finestra (arrossegar un quadre). Què podeu fer amb diverses peces: [Copia, enganxa i duplica](topic:copy-paste).

També podeu seleccionar des de llistes: cliqueu una marca a {{ui:Marques de peça}} a l'esquerra, una marca de peça a la pestanya {{ui:Llista de materials}}, o {{ui:Selecciona}} al costat d'una línia de {{ui:Problemes}}.

## Si la vista sembla malament

- Heu perdut el model? Trieu el botó d'ajustar.
- La vista és en blanc o grisa amb un missatge sobre WebGL: vegeu [Resolució de problemes](topic:troubleshooting#the-3d-view-is-missing).
- Tot funciona encara sense la vista 3D, excepte fer clic a dins: els panells, els informes i les exportacions s'executen, i {{ui:Afegeix per quadrícula}} col·loca les barres escrivint.
