---
title: Agregar placas base y varillas de anclaje
summary: Coloque una placa base soldada con cuatro varillas de anclaje bajo una columna, defina sus medidas y cópiela a cada columna similar.
keywords: placa base, baseplate, varillas de anclaje, pernos de anclaje, pernos de sujeción, base de columna, pernos de cimentación, similares
from: 619ebc64
---

Una conexión de placa base coloca una placa bajo la columna, acorta la columna en el espesor de la placa, la suelda a ella y agrega cuatro varillas de anclaje que atraviesan los agujeros de la placa.

:::warning
Las medidas son valores iniciales, no un diseño. DetailCraft no verifica el aplastamiento, la resistencia de las varillas ni la profundidad de empotramiento.
:::

## Agregar una placa base

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en una columna. Debe ser vertical.
2. Elija {{ui:Placa base}} en el grupo {{ui:Conectar}}, o {{ui:Agregar placa base}} en el panel {{ui:Propiedades}}.
3. La barra de estado dice «Placa base agregada con cuatro varillas de anclaje». La nueva conexión queda seleccionada.

Una columna puede tener una sola placa base. Si ya tiene una, la barra de estado dice «Esta columna ya tiene una placa base».

## Cambiarla

Seleccione la placa base (haga clic en la placa o en una varilla). En {{ui:Placa, pernos y soldadura (mm)}}:

| Ajuste | Valor predeterminado | Qué hace |
|---|---|---|
| Espesor de placa | 25 | La columna se acorta esta cantidad |
| Longitud de placa | 450 | A lo largo del peralte de la columna |
| Ancho de placa | 400 | Transversal a la columna |
| Diámetro de varilla | 20 | Medida de la varilla de anclaje |
| Diámetro del agujero | 33 | Agujero en la placa |
| Grado de perno | F1554 Gr 36 | Grado de la varilla, como texto |
| Separación de varillas (a lo largo del peralte) | 350 | Entre centros de varillas, a lo largo de la longitud de la placa |
| Separación de varillas (transversal) | 300 | Entre centros de varillas, transversalmente |
| Saliente de varilla sobre la placa | 100 | Desde la parte superior de la placa hasta la parte superior de la varilla |
| Empotramiento de varilla bajo la placa | 450 | Desde la cara inferior de la placa hacia abajo, dentro del concreto |
| Tamaño de soldadura de filete | 8 | Alrededor de toda la base de la columna |
| Material de placa | A36 | Texto |
| Separación de mortero | 0 | Espacio entre la parte superior del concreto y la cara inferior de la placa |
| Atiesadores | Ninguno | Elija Ninguno, 2 (alineados con el alma) o 4 (además perpendiculares a ella); vea abajo |
| Espesor, altura de atiesador | 12, 150 | |
| Profundidad del dentellón de cortante | 0 | Hasta dónde baja el dentellón bajo la placa; 0 = sin dentellón |
| Espesor, ancho del dentellón de cortante | 25, 150 | |
| Arandelas de placa | Ninguna | En cada varilla, o ninguna |
| Medida, espesor de arandela | 0, 0 | 0 = el mínimo de AISC Design Guide 1 para la varilla |

Longitud de varilla = empotramiento + separación de mortero + espesor de placa + saliente. Con los valores predeterminados, son 575 mm.

## Detalles de la base: mortero, atiesadores, dentellón y arandelas

Las cuatro opciones están desactivadas en una placa base nueva y en las placas base de modelos creados antes de DetailCraft 0.4.

- **Separación de mortero.** La placa queda a esta distancia sobre la parte superior del concreto, y las varillas se alargan en la misma medida. AISC Design Guide 1 (2.10) sugiere 1 in. sobre piso terminado y de 1½ a 2 in. sobre una zapata o pedestal; más para placas grandes y placas con dentellón de cortante.
- **Atiesadores.** Placas verticales soldadas a la columna y a la placa, desde la cara de la columna hasta el borde de la placa, como rectángulos (todavía sin chaflán ni conicidad). **2** quedan alineados con el alma, más allá de cada patín; **4** agregan dos perpendiculares al alma, entre los patines, hasta los lados de la placa. En una columna de tubo, quedan en el centro de cada cara. Cada uno se suelda a la columna y a la placa por ambos lados.
- **Dentellón de cortante.** Placa soldada en todo su perímetro bajo la placa base, alineada con el peralte de la columna y centrada. DetailCraft advierte si no es más profundo que la separación de mortero. No corta el hueco en la zapata; por esa razón, la [verificación de interferencias](topic:clash-check) deja fuera el dentellón y la zapata.
- **Arandelas de placa.** Una arandela cuadrada de placa en cada varilla, apoyada sobre la placa base, que aparece en el ensamble de la columna como suelta (se envía con la columna, no soldada: Design Guide 1, 2.6). Con medida y espesor 0, DetailCraft toma la arandela mínima de AISC Design Guide 1, 2.ª ed., Tabla 2.3, para la varilla; una varilla métrica toma la siguiente medida en pulgadas (una varilla M20 usa la fila de 7/8 in.: 2½ in. × 5/16 in.). El panel de propiedades muestra la medida usada. El agujero de la arandela es el diámetro de la varilla + 1/16 in.: esa es una decisión de DetailCraft, la tabla no la indica. DetailCraft advierte cuando las varillas podrían no sobresalir lo suficiente para la arandela y una tuerca (saliente menor que el espesor de la arandela + el diámetro de la varilla).

La Design Guide 1, Tabla 2.3, también recomienda el agujero de la varilla en la placa: 1-5/16 in. para una varilla de ¾ in., 1-9/16 in. para ⅞ in., 1-13/16 in. para 1 in. DetailCraft no cambia el tamaño de su agujero.

También aparecen advertencias cuando los agujeros de varilla están a menos de 1.2 × el diámetro del agujero del borde de la placa, cuando las varillas caen dentro del contorno de la columna o cuando la placa es más pequeña que la columna.

## Copiarla a columnas similares

1. Seleccione la placa base.
2. Elija {{ui:Aplicar a similares (n)}}, o {{ui:Similares}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada columna vertical con el mismo perfil que no tenga placa base y que no se apoye sobre otra columna recibe una copia.

## Placas base y zapatas

Una placa base no necesita una zapata, y una zapata no conoce la placa base que está sobre ella: las varillas de anclaje no se amarran a las varillas de la zapata. Coloque zapatas con {{ui:Zapata}}; vea [Colocar zapatas con varillas de refuerzo](topic:footings-and-rebar).
