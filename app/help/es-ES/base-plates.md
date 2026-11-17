---
title: Añadir placas de base y barras de anclaje
summary: Coloque una placa de base soldada con cuatro barras de anclaje bajo un pilar, defina sus dimensiones y cópiela a cada pilar similar.
keywords: placa de base, placa base, barras de anclaje, pernos de anclaje, pernos de sujeción, base de pilar, pernos de cimentación, similar
from: 619ebc64
---

Una unión con placa de base coloca una placa bajo el pilar, acorta el pilar en el espesor de la placa, suelda ambos entre sí y añade cuatro barras de anclaje que atraviesan orificios de la placa.

:::warning
Las dimensiones son valores de partida, no un diseño. DetailCraft no comprueba la resistencia al aplastamiento, la resistencia de las barras ni el empotramiento.
:::

## Añadir una placa de base

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en un pilar. Debe estar en vertical.
2. Elija {{ui:Placa de base}} en el grupo {{ui:Conectar}}, o {{ui:Añadir placa de base}} en el panel {{ui:Propiedades}}.
3. La barra de estado indica "Placa de base añadida con cuatro barras de anclaje." La nueva unión queda seleccionada.

Un pilar puede tener una placa de base. Si ya tiene una, la barra de estado indica "Este pilar ya tiene una placa de base."

## Modificarla

Seleccione la placa de base (haga clic en la placa o en una barra). En {{ui:Placa, tornillos y soldadura (mm)}}:

| Ajuste | Valor predeterminado | Qué hace |
|---|---|---|
| Espesor de la placa | 25 | El pilar se acorta en esta medida |
| Longitud de la placa | 450 | A lo largo del canto del pilar |
| Ancho de la placa | 400 | Transversal al pilar |
| Diámetro de la barra | 20 | Tamaño de la barra de anclaje |
| Diámetro del agujero | 33 | Agujero en la placa |
| Grado del tornillo | F1554 Gr 36 | El grado de la barra, como texto |
| Separación de barras (según el canto) | 350 | Entre centros de barras, a lo largo de la longitud de la placa |
| Separación de barras (transversal) | 300 | Entre centros de barras, en sentido transversal |
| Saliente de la barra sobre la placa | 100 | Desde la cara superior de la placa hasta el extremo superior de la barra |
| Empotramiento de la barra bajo la placa | 450 | Desde la cara inferior de la placa hacia abajo, dentro del hormigón |
| Tamaño del cordón de soldadura | 8 | Alrededor de la base del pilar |
| Material de la placa | A36 | Texto |
| Espacio de mortero | 0 | Espacio entre la cara superior del hormigón y la cara inferior de la placa |
| Rigidizadores | Ninguno | Elija Ninguno, 2 (alineados con el alma) o 4 (además perpendiculares a ella); véase abajo |
| Espesor, altura del rigidizador | 12, 150 | |
| Profundidad del tope a cortante | 0 | Hasta dónde llega el tope bajo la placa; 0 = sin tope |
| Espesor, ancho del tope a cortante | 25, 150 | |
| Arandelas de placa | Ninguna | En cada barra, o ninguna |
| Tamaño, espesor de la arandela | 0, 0 | 0 = el mínimo de AISC Design Guide 1 para la barra |

Longitud de la barra = empotramiento + espacio de mortero + espesor de la placa + saliente. Con los valores predeterminados son 575 mm.

## Detalles de la base: mortero, rigidizadores, tope a cortante, arandelas

Las cuatro opciones están desactivadas en una placa de base nueva y en las placas de modelos creados antes de DetailCraft 0.4.

- **Espacio de mortero.** La placa queda a esta distancia sobre la cara superior del hormigón, y las barras se alargan en la misma medida. AISC Design Guide 1 (2.10) sugiere 1 in. sobre un forjado acabado y de 1½ a 2 in. en una zapata o un pilar; más para placas grandes y para placas con tope a cortante.
- **Rigidizadores.** Placas verticales soldadas al pilar y a la placa, desde la cara del pilar hasta el borde de la placa, como rectángulos (todavía sin chaflán ni conicidad). **2** quedan alineados con el alma, más allá de cada ala; **4** añaden dos perpendiculares al alma, entre las alas, hasta los laterales de la placa. En un pilar tubular se sitúan en el centro de cada cara. Cada uno va soldado al pilar y a la placa por ambos lados.
- **Tope a cortante.** Placa soldada en todo su perímetro bajo la placa de base, alineada con el canto del pilar y centrada. DetailCraft avisa si no es más profundo que el espacio de mortero. No corta el rebaje en la zapata; por eso la [comprobación de interferencias](topic:clash-check) deja fuera el tope y la zapata.
- **Arandelas de placa.** Una arandela cuadrada en cada barra, apoyada sobre la placa de base, que aparece en el conjunto del pilar como suelta (se suministra con el pilar, no soldada: Design Guide 1, 2.6). Con tamaño y espesor 0, DetailCraft toma la arandela mínima de AISC Design Guide 1, 2.ª ed., Tabla 2.3 para la barra; una barra métrica toma la siguiente medida en pulgadas (una barra M20 usa la fila de 7/8 in.: 2½ in. × 5/16 in.). El panel de propiedades muestra el tamaño usado. El agujero de la arandela es el diámetro de la barra + 1/16 in.: es una elección de DetailCraft, la tabla no la indica. DetailCraft avisa cuando las barras podrían no sobresalir lo suficiente para la arandela y una tuerca (saliente menor que el espesor de la arandela + el diámetro de la barra).

La Tabla 2.3 de Design Guide 1 también recomienda el agujero de la barra en la placa: 1-5/16 in. para una barra de ¾ in., 1-9/16 in. para ⅞ in., 1-13/16 in. para 1 in. DetailCraft no cambia el tamaño del agujero que usted indique.

También aparecen avisos cuando los agujeros de las barras están a menos de 1.2 × el diámetro del agujero del borde de la placa, cuando las barras caen dentro del contorno del pilar o cuando la placa es más pequeña que el pilar.

## Copiarla a pilares similares

1. Seleccione la placa de base.
2. Elija {{ui:Aplicar a similares (n)}}, o {{ui:Similares}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada pilar vertical con el mismo perfil que no tenga placa de base y que no esté apoyado sobre otro pilar recibe una copia.

## Placas de base y zapatas

Una placa de base no necesita zapata, y una zapata no tiene en cuenta la placa de base situada encima: las barras de anclaje no se atan a las barras de la armadura de la zapata. Coloque las zapatas con {{ui:Zapata}}; véase [Colocar zapatas con armadura](topic:footings-and-rebar).
