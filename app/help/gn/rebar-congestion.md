---
title: Mapa de congestión de armadura
summary: Mirá cuán apretada deja la armadura cada zapata para que el hormigón llegue hasta abajo, con el agregado y el vibrador que indiques.
keywords: armadura, congestión, separación, separación libre, colocación de hormigón, agregado, vibrador, esperas, ganchos, zapata, malla
from: 40d029e6
---

La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba. Azul pálido es abierto; amarillo y naranja son cada vez más apretados; rojo es más apretado de lo que piden las barras. Las celdas oscuras son las barras mismas.

## Qué mide el mapa

El hormigón baja a través del acero capa por capa y puede moverse de costado entre las capas. Entonces, en cada punto el mapa toma la separación libre más estrecha en cualquier capa: entre las barras de la malla inferior, entre la siguiente capa de barras, y entre las patas de gancho de las barras de espera arriba. Las esperas atraviesan todas ellas.

## Qué cuenta como apretado

La necesidad es el mayor entre 25 mm y el diámetro de la barra (ACI 318-19 25.2.1), o, para barras BS 4449, el mayor entre el diámetro de la barra y 20 mm (EN 1992-1-1 8.2). Dos casillas la suben:

- {{ui:Agregado más grande}}: la necesidad pasa a ser 4/3 del tamaño del agregado (ACI) o el agregado más 5 mm (EN).
- {{ui:Cabezal del vibrador}}: la necesidad es al menos el diámetro del cabezal.

Ambos empiezan en 0, que significa desconocido: DetailCraft no conoce tu mezcla ni tu bomba.

## Problemas

Una zapata con un lugar más apretado que la necesidad figura en el panel {{ui:Problemas}} con la abertura encontrada y la abertura necesaria. {{ui:Seleccionar}} junto a un mapa selecciona la zapata.

El mapa no ve estribos, acopladores, conductos ni las barras propias de la columna.
