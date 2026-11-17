---
title: Colocar zapatas con varillas
summary: Coloque zapatas aisladas rectangulares con una parrilla inferior y varillas de arranque, revíselas y descargue la tabla de doblado.
keywords: zapata, zapata aislada, cimentación, varilla, refuerzo, varillas, parrilla, arranques, pasadores, tabla de doblado, lista de varillas, concreto, ganchos, recubrimiento
from: 41a048be
---

Este tema trata de zapatas aisladas rectangulares. Vigas, columnas, losas y muros están en [Detallar concreto reforzado](topic:reinforced-concrete). Cada zapata recibe una parrilla inferior en ambos sentidos y, si lo desea, varillas de arranque que salen hacia arriba. Las varillas son de tamaños US #3 a #11.

## Colocar una zapata

1. Elija {{ui:Planta}} y seleccione el nivel del borde superior de la zapata.
2. Elija {{ui:Zapata}} en el grupo {{ui:Colocar}}, o pulse {{key:F}}.
3. Ajuste la zapata en el panel {{ui:Propiedades}} (vea abajo), o conserve los valores predeterminados.
4. Haga clic en una intersección de ejes. La zapata queda centrada en ella con su borde superior en el nivel. La barra de estado indica, por ejemplo, "Zapata 2000 x 2000 x 600 bajo A/1."

También puede usar el formulario {{ui:Agregar por ejes}} en la parte inferior del panel.

La zapata se dibuja transparente para que vea sus varillas, que se dibujan como tubos sólidos.

## Configuración de la zapata

| Campo | Predeterminado | Notas |
|---|---|---|
| Longitud L (mm) | 2000 | En x; de 300 a 50000 |
| Ancho B (mm) | 2000 | En y; de 300 a 50000 |
| Profundidad H (mm) | 600 | De 150 a 10000 |
| Concreto | 4000 psi | Texto, impreso en la exportación IFC |

**Parrilla inferior**

| Campo | Predeterminado | Notas |
|---|---|---|
| Varillas largas | #5 | Varillas a lo largo de L, la capa inferior |
| Separación (mm) | 250 | La separación máxima permitida; las varillas se reparten de manera uniforme a esta separación o menor |
| Varillas cortas | #5 | Varillas a lo largo de B, colocadas sobre las varillas largas |
| Separación (mm) | 250 | Igual que arriba |
| Recubrimiento (mm) | 75 | Recubrimiento libre en todas las caras |
| Ganchos en los extremos | Activado | Dobla ambos extremos de cada varilla de la parrilla en un gancho estándar de 90° (forma U); desactivado da varillas rectas (forma S) |

**Varillas de arranque**

| Campo | Predeterminado | Notas |
|---|---|---|
| Varillas de arranque | Activado | Desactívelas para una zapata sin arranques |
| Varilla | #6 | |
| Varillas a lo largo de L / Varillas a lo largo de B | 2 / 2 | Una malla de varillas, centrada en la zapata |
| Separación a lo largo de L / Separación a lo largo de B | 250 / 250 | Entre centros de varillas |
| Proyección sobre el borde superior | 600 | Cuánto sobresalen las varillas sobre el borde superior de la zapata |
| Gancho en la base | Activado | Un gancho de 90° hacia afuera, apoyado en la parrilla (forma L) |

Debajo de los campos, DetailCraft muestra la pata del gancho de las varillas largas, por ejemplo "Pata de gancho para #5: 254 mm de exterior a exterior."

## Cambiar una zapata colocada

Seleccione la zapata (haga clic en su concreto, lejos de cualquier columna, o en una de sus varillas). Obtendrá los mismos campos más {{ui:Centro x}}, {{ui:Centro y}}, {{ui:z superior}} y {{ui:Rotación (°)}}. Debajo, una tabla enumera las varillas de esta zapata con sus marcas, cantidades y longitudes, y el volumen de concreto en metros cúbicos.

Cada cambio se verifica antes de conservarse. Un cambio que no se puede construir se rechaza y la barra de estado indica por qué, por ejemplo "El recubrimiento no deja espacio para varillas en esta zapata.", "La zapata es demasiado poco profunda para dos capas de varillas dentro del recubrimiento." o "Las varillas de arranque no caben dentro de la zapata con 75 mm de recubrimiento."

Los cambios que se pueden construir pero que requieren revisión aparecen debajo de la zapata y en la pestaña {{ui:Problemas}}:

- "Las varillas #11 a 59.6 mm dejan menos de 35.8 mm libres (ACI 318-19 25.2.1)." La separación libre entre varillas debe ser al menos el diámetro de la varilla y al menos 25.4 mm.
- "Los ganchos #5 necesitan 254 mm de profundidad; solo caben 150 mm dentro del recubrimiento." Las patas del gancho se recortan para caber, por lo que ya no son ganchos estándar.
- "Los ganchos de arranque invaden el recubrimiento."
- "Las varillas de arranque están más cerca que la separación libre mínima."

## Marcas de varilla y tabla de doblado

Las varillas idénticas (mismo tamaño, forma y dimensiones al milímetro) comparten una marca de varilla en todas las zapatas. Las marcas se escriben `<número de varilla>F<n>`: 5F1, 5F2 para varillas #5, 6F1 para la primera varilla #6, y así sucesivamente. Las zapatas con el mismo tamaño, concreto, parrilla y arranques comparten una marca de zapata: F1, F2 …

1. Abra la pestaña {{ui:Tabla de doblado}} en la parte inferior. Cada fila es una marca de varilla: tamaño, forma, dimensiones A, B y C, cantidad, longitud de corte, longitud total, masa por metro, peso de cada una, peso total y para qué se usa la varilla.
2. Elija {{ui:Descargar CSV}} en la pestaña, o {{ui:Doblado}} en el menú {{ui:Más}} del grupo {{ui:Salida}}, para `<name> bending schedule.csv`.

Las formas son códigos propios de DetailCraft, no de una norma: S recta, L un doblez, U dos dobleces. Las dimensiones son de exterior a exterior; la longitud de corte es la longitud exacta del eje a través de los dobleces. Vea [Referencia de varillas](topic:rebar-reference).

## Lo que DetailCraft no verifica

- Longitudes de desarrollo y de traslape, y si las varillas de arranque son lo bastante largas para la columna de arriba.
- La parte del tamaño del agregado de la regla de separación libre (no conoce la mezcla).
- Cualquier cosa sobre la columna o la placa base de arriba: zapatas y acero son elementos separados.

Vea también [Lo que todavía no está construido](topic:not-built-yet).
