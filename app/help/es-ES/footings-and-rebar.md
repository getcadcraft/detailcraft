---
title: Colocar zapatas con armadura
summary: Colocar zapatas aisladas rectangulares con parrilla inferior y barras de arranque, comprobarlas y descargar la tabla de doblado.
keywords: zapata, zapata aislada, cimentación, armadura, barras, losa de cimentación, arranques, espigas, tabla de doblado, lista de barras, hormigón, ganchos, recubrimiento
from: 41a048be
---

Este tema trata de zapatas aisladas rectangulares. Las vigas, los pilares, los forjados y los muros se tratan en [Detallar hormigón armado](topic:reinforced-concrete). Cada zapata lleva una parrilla inferior en ambos sentidos y, si lo desea, barras de arranque que salen hacia arriba desde ella. Las barras son de tamaños US #3 a #11.

## Colocar una zapata

1. Elija {{ui:Planta}} y seleccione el nivel de la cara superior de la zapata.
2. Elija {{ui:Zapata}} en el grupo {{ui:Colocar}}, o pulse {{key:F}}.
3. Defina la zapata en el panel {{ui:Propiedades}} (véase abajo), o deje los valores por defecto.
4. Haga clic en una intersección de rejilla. La zapata se centra en ella con su cara superior a la altura del nivel. La barra de estado indica, por ejemplo, "Zapata 2000 x 2000 x 600 bajo A/1."

También puede usar el formulario {{ui:Añadir por rejilla}} de la parte inferior del panel.

La zapata se dibuja transparente para que se vean sus barras, que se dibujan como tubos sólidos.

## Ajustes de la zapata

| Campo | Por defecto | Notas |
|---|---|---|
| Longitud L (mm) | 2000 | En x; de 300 a 50000 |
| Anchura B (mm) | 2000 | En y; de 300 a 50000 |
| Canto H (mm) | 600 | De 150 a 10000 |
| Hormigón | 4000 psi | Texto, impreso en la exportación IFC |

**Parrilla inferior**

| Campo | Por defecto | Notas |
|---|---|---|
| Barras largas | #5 | Barras paralelas a L, la capa inferior |
| Separación (mm) | 250 | La mayor separación permitida; las barras se reparten uniformemente a esta separación o menos |
| Barras cortas | #5 | Barras paralelas a B, colocadas sobre las barras largas |
| Separación (mm) | 250 | Igual que arriba |
| Recubrimiento (mm) | 75 | Recubrimiento libre en todas las caras |
| Ganchos extremos | Activado | Dobla ambos extremos de cada barra de la parrilla en un gancho estándar de 90° (forma U); desactivado da barras rectas (forma S) |

**Barras de arranque**

| Campo | Por defecto | Notas |
|---|---|---|
| Barras de arranque | Activado | Desactívelas para una zapata sin arranques |
| Barra | #6 | |
| Barras en L / Barras en B | 2 / 2 | Una cuadrícula de barras, centrada en la zapata |
| Separación en L / Separación en B | 250 / 250 | Entre centros de barras |
| Saliente sobre la cara superior | 600 | Cuánto sobresalen las barras por encima de la cara superior de la zapata |
| Gancho inferior | Activado | Un gancho de 90° hacia fuera, apoyado en la parrilla (forma L) |

Bajo los campos, DetailCraft muestra la longitud de la pata del gancho de las barras largas, por ejemplo "Longitud de la pata del gancho para #5: 254 mm de exterior a exterior."

## Cambiar una zapata colocada

Seleccione la zapata (haga clic en su hormigón lejos de cualquier pilar, o en una de sus barras). Obtiene los mismos campos más {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Cota superior z}} y {{ui:Giro (°)}}. Debajo, una tabla enumera las barras de esta zapata con sus marcas, cantidades y longitudes, y el volumen de hormigón en metros cúbicos.

Cada cambio se comprueba antes de guardarse. Un cambio que no se puede construir se rechaza y la barra de estado indica el motivo, por ejemplo "El recubrimiento no deja sitio para las barras en esta zapata.", "La zapata es demasiado poco canto para dos capas de barras dentro del recubrimiento." o "Las barras de arranque no caben dentro de la zapata con un recubrimiento de 75 mm."

Los cambios que se pueden construir pero requieren revisión aparecen bajo la zapata y en la pestaña {{ui:Problemas}}:

- "Barras #11 a 59.6 mm dejan menos de 35.8 mm libres (ACI 318-19 25.2.1)." La separación libre entre barras debe ser al menos el diámetro de la barra y al menos 25.4 mm.
- "Los ganchos #5 necesitan 254 mm de canto; solo caben 150 mm dentro del recubrimiento." Las patas de los ganchos se acortan para caber, por lo que ya no son ganchos estándar.
- "Los ganchos de arranque llegan al recubrimiento."
- "Las barras de arranque están más juntas que la separación libre mínima."

## Marcas de barras y tabla de doblado

Las barras idénticas (mismo tamaño, forma y dimensiones al milímetro) comparten una marca de barra en todas las zapatas. Las marcas se escriben `<número de barra>F<n>`: 5F1, 5F2 para barras #5, 6F1 para la primera barra #6, y así sucesivamente. Las zapatas con el mismo tamaño, hormigón, parrilla y arranques comparten una marca de zapata: F1, F2 …

1. Abra la pestaña {{ui:Tabla de doblado}} en la parte inferior. Cada fila es una marca de barra: tamaño, forma, dimensiones A, B y C, cantidad, longitud de corte, longitud total, masa por metro, peso de cada una, peso total y uso de la barra.
2. Elija {{ui:Descargar CSV}} en la pestaña, o {{ui:Doblado}} en el menú {{ui:Más}} del grupo {{ui:Salida}}, para `<name> bending schedule.csv`.

Las formas son códigos propios de DetailCraft, no de una norma: S recta, L un doblez, U dos dobleces. Las dimensiones son de exterior a exterior; la longitud de corte es la longitud exacta por la línea media a través de los dobleces. Véase [Referencia de armaduras](topic:rebar-reference).

## Lo que DetailCraft no comprueba

- Longitudes de anclaje y de solape, y si las barras de arranque son lo bastante largas para el pilar de encima.
- La parte del tamaño del árido de la regla de separación libre (no conoce la dosificación).
- Cualquier aspecto del pilar o de la placa de base situados encima: zapatas y acero se tratan por separado.

Véase también [Lo que aún no está incluido](topic:not-built-yet).
