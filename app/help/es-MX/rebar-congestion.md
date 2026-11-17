---
title: Mapa de congestión de varillas
summary: Vea qué tan apretadas dejan las varillas cada cimentación para que el concreto pase, con el agregado y el vibrador que indique.
keywords: varillas, congestión, espaciamiento, separación libre, colocación de concreto, agregado, vibrador, arranques, ganchos, cimentación, parrilla
from: 40d029e6
---

La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada cimentación vista desde arriba. El azul claro indica espacio libre; el amarillo y el naranja indican que se está cerrando; el rojo indica que es más estrecho de lo que exigen las varillas. Las celdas oscuras son las propias varillas.

## Qué mide el mapa

El concreto pasa a través del acero capa por capa y puede moverse de lado entre las capas. Por eso, en cada punto, el mapa toma el hueco libre más estrecho en cualquier capa: entre las varillas de la parrilla inferior, entre la siguiente capa de varillas, y entre las patas de gancho de las varillas de arranque por arriba. Los arranques atraviesan todas ellas.

## Qué se considera apretado

La separación requerida es el mayor de 25 mm y el diámetro de la varilla (ACI 318-19 25.2.1), o, para varillas BS 4449, el mayor entre el diámetro de la varilla y 20 mm (EN 1992-1-1 8.2). Dos casillas la elevan:

- {{ui:Agregado más grande}}: la separación requerida pasa a ser 4/3 del tamaño del agregado (ACI) o el agregado más 5 mm (EN).
- {{ui:Cabezal del vibrador}}: la separación requerida es al menos el diámetro del cabezal.

Ambas empiezan en 0, lo que significa desconocido: DetailCraft no conoce su mezcla ni su bomba.

## Problemas

Una cimentación con un punto más estrecho que la separación requerida aparece en el panel {{ui:Problemas}}, con la abertura encontrada y la abertura necesaria. {{ui:Seleccionar}} junto a un mapa selecciona la cimentación.

El mapa no ve estribos, acopladores, ductos ni las propias varillas de la columna.
