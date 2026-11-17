---
title: Mapa de congestión de armaduras
summary: Vea lo estrecha que deja la armadura a cada zapata para que llegue el hormigón, con el árido y el vibrador que indique.
keywords: armadura, congestión, separación, separación libre, colocación de hormigón, árido, vibrador, barras de arranque, ganchos, zapata, parrilla
from: 40d029e6
---

La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba. El azul claro es espacio libre; el amarillo y el naranja indican que se estrecha; el rojo es más estrecho de lo que exigen las barras. Las celdas oscuras son las propias barras.

## Qué mide el mapa

El hormigón baja a través del acero capa a capa y puede desplazarse lateralmente entre capas. Así, en cada punto el mapa toma el hueco libre más estrecho en cualquier capa: entre las barras de la parrilla inferior, entre la capa siguiente de barras y entre las patas de los ganchos de las barras de arranque, en la parte superior. Las barras de arranque atraviesan todas ellas.

## Qué se considera estrecho

La necesidad es el mayor de 25 mm y el diámetro de la barra (ACI 318-19 25.2.1), o, para barras BS 4449, el mayor entre el diámetro de la barra y 20 mm (EN 1992-1-1 8.2). Dos casillas la elevan:

- {{ui:Árido máximo}}: la necesidad pasa a ser 4/3 del tamaño del árido (ACI) o el árido más 5 mm (EN).
- {{ui:Cabezal del vibrador}}: la necesidad es al menos el diámetro del cabezal.

Ambas empiezan en 0, lo que significa desconocido: DetailCraft no conoce su dosificación ni su bomba.

## Problemas

Una zapata con un punto más estrecho que la necesidad aparece en el panel {{ui:Problemas}}, con el hueco encontrado y el hueco necesario. {{ui:Seleccionar}} junto a un mapa selecciona la zapata.

El mapa no ve estribos, acopladores, conductos ni las propias barras del pilar.
