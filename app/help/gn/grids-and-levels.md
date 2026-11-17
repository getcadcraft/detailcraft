---
title: Configurar grillas y niveles
summary: Escribí las líneas de grilla, sus separaciones y los niveles sobre los que se coloca cada miembro.
keywords: grilla, grillas, ejes, líneas de grilla, niveles, cotas, pisos, plantas, separación, configuración
from: 9cad233c
---

Cada miembro de DetailCraft se coloca en una intersección de grilla, a un nivel. Configurá primero las grillas y los niveles; podés cambiarlos después.

## Cómo funcionan las grillas aquí

- Las **líneas numeradas** van en una dirección, las **líneas con letras** en la otra. Los nombres son solo una costumbre: una etiqueta puede ser cualquier texto de hasta 8 caracteres (1, 2, 3 o A1, A2, o 10, 20).
- Escribís las etiquetas y las separaciones entre ellas, no coordenadas. La primera línea de cada conjunto está en 0.
- Las líneas numeradas son líneas de x constante; las líneas con letras son líneas de y constante. Así, una viga de la grilla 1 a la 2 corre a lo largo de x, y una viga de A a B corre a lo largo de y.
- Todos los valores van en milímetros.

Un modelo nuevo empieza con las líneas numeradas 1 2 3 a 6000 6000, las líneas con letras A B a 6000, y dos niveles.

## Configurar las grillas

1. En el panel {{ui:Modelo}} de la izquierda, abrí {{ui:Grillas}} si está plegado.
2. En {{ui:Líneas numeradas}}, escribí las etiquetas separadas por espacios, por ejemplo `1 2 3 4 5`.
3. En el campo {{ui:Separaciones}} de debajo, escribí una separación por cada espacio, por ejemplo `6000 6000 7500 6000`. Cuatro espacios para cinco líneas.
4. Hacé lo mismo en {{ui:Líneas con letras}} y su {{ui:Separaciones}}, por ejemplo `A B C` y `8000 8000`.
5. Elegí {{ui:Aplicar grillas}}.

La barra de estado dice "Grillas actualizadas." y la vista hace zoom a la nueva grilla. Las comas también sirven como separadores.

Si algo no cuadra, nada cambia y la barra de estado dice por qué, por ejemplo "Grillas numeradas: poné una separación entre cada par de líneas (4)." Otras verificaciones: las separaciones deben ser milímetros positivos, las etiquetas deben ser distintas, y puede haber como máximo 60 líneas en cada dirección.

:::note
Los miembros conservan sus coordenadas cuando se mueven las grillas. Si cambiás una separación después de colocar acero, el acero queda donde estaba y ya no está sobre la grilla. Cambiá primero la grilla, o mové los miembros editando las coordenadas de sus extremos.
:::

## Configurar los niveles

1. Abrí {{ui:Niveles}} en el panel {{ui:Modelo}}.
2. Cada fila tiene un nombre de nivel y su cota en milímetros. Editalos como quieras.
3. Elegí {{ui:Agregar nivel}} para otra fila. Se llama "Nivel 3" (y así sucesivamente) y se coloca 4000 mm por encima del nivel más alto; cambiá ambos si hace falta.
4. Para quitar un nivel, elegí el botón × al final de su fila.
5. Elegí {{ui:Aplicar niveles}}.

Nada cambia hasta que elijas {{ui:Aplicar niveles}}. Los niveles se ordenan por cota al aplicarlos. Cada nivel necesita un nombre, dos niveles no pueden tener el mismo nombre, y debés conservar al menos un nivel.

Los niveles pueden estar bajo cero (un sótano en `-3500`) y no necesitan estar espaciados por igual.

## Cómo se usan los niveles

- Una columna colocada en un nivel sube hasta el siguiente nivel, o hasta el nivel que elijas en {{ui:Hasta}}.
- Las vigas y las placas se colocan entre dos intersecciones, al nivel donde hacés clic.
- Las zapatas se colocan con su tope en el nivel donde hacés clic.
- {{ui:Planta}} mira hacia abajo a un nivel por vez.
- La exportación IFC hace un piso de edificio por cada nivel.

## Deshacer

Los cambios de grilla y de nivel son ediciones como cualquier otra: {{key:Mod+Z}} vuelve a poner la grilla anterior.

## Siguiente

[Colocar columnas, vigas y riostras](topic:place-members)
