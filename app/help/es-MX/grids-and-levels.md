---
title: Configurar ejes y niveles
summary: Escriba las líneas de ejes, sus separaciones y los niveles sobre los que se coloca cada miembro.
keywords: eje, ejes, líneas de eje, niveles, elevaciones, pisos, separación, configuración
from: 9cad233c
---

Cada miembro de DetailCraft se coloca en una intersección de ejes, en un nivel. Configure primero los ejes y los niveles; puede cambiarlos después.

## Cómo funcionan aquí los ejes

- Las **líneas numeradas** van en un sentido; las **líneas con letra**, en el otro. Los nombres son solo costumbre: una etiqueta puede ser cualquier texto de hasta 8 caracteres (1, 2, 3 o A1, A2, o 10, 20).
- Usted escribe las etiquetas y las separaciones entre ellas, no coordenadas. La primera línea de cada conjunto está en 0.
- Las líneas numeradas son líneas de x constante; las líneas con letra son líneas de y constante. Así, una viga del eje 1 al 2 corre a lo largo de x, y una viga de A a B corre a lo largo de y.
- Todos los valores están en milímetros.

Un modelo nuevo empieza con las líneas numeradas 1 2 3 a 6000 6000, las líneas con letra A B a 6000 y dos niveles.

## Configurar los ejes

1. En el panel {{ui:Modelo}} a la izquierda, abra {{ui:Ejes}} si está plegado.
2. En {{ui:Ejes numerados}}, escriba las etiquetas separadas por espacios, por ejemplo `1 2 3 4 5`.
3. En el campo {{ui:Separaciones}} debajo, escriba una separación por cada tramo, por ejemplo `6000 6000 7500 6000`. Cuatro tramos para cinco líneas.
4. Haga lo mismo en {{ui:Ejes con letra}} y su {{ui:Separaciones}}, por ejemplo `A B C` y `8000 8000`.
5. Elija {{ui:Aplicar ejes}}.

La barra de estado dice "Ejes actualizados." y la vista hace zoom a la nueva malla. Las comas también funcionan como separadores.

Si algo no cuadra, nada cambia y la barra de estado indica por qué, por ejemplo "Ejes numerados: dé una separación entre cada par de líneas (4)." Otras revisiones: las separaciones deben ser milímetros positivos, las etiquetas deben ser distintas, y puede haber como máximo 60 líneas en cada sentido.

:::note
Los miembros conservan sus coordenadas cuando se mueven los ejes. Si cambia una separación después de colocar acero, el acero se queda donde estaba y ya no está sobre el eje. Cambie primero el eje, o mueva los miembros editando las coordenadas de sus extremos.
:::

## Configurar los niveles

1. Abra {{ui:Niveles}} en el panel {{ui:Modelo}}.
2. Cada fila tiene un nombre de nivel y su elevación en milímetros. Edítelos como quiera.
3. Elija {{ui:Agregar nivel}} para otra fila. Se llama "Nivel 3" (y así sucesivamente) y se coloca 4000 mm por encima del nivel más alto; cambie ambos si lo necesita.
4. Para quitar un nivel, elija el botón × al final de su fila.
5. Elija {{ui:Aplicar niveles}}.

Nada cambia hasta que elija {{ui:Aplicar niveles}}. Los niveles se ordenan por elevación al aplicarlos. Cada nivel necesita un nombre, dos niveles no pueden compartir un nombre y debe conservar al menos un nivel.

Los niveles pueden estar bajo cero (un sótano en `-3500`) y no necesitan estar espaciados de manera uniforme.

## Cómo se usan los niveles

- Una columna colocada en un nivel sube hasta el siguiente nivel, o hasta el nivel que elija en {{ui:Hasta}}.
- Las vigas y las placas se colocan entre dos intersecciones, en el nivel en que haga clic.
- Las zapatas se colocan con su borde superior en el nivel en que haga clic.
- {{ui:Planta}} mira hacia abajo a un nivel a la vez.
- La exportación IFC crea un nivel de edificación por cada nivel.

## Deshacer

Los cambios de ejes y niveles son ediciones como cualquier otra: {{key:Mod+Z}} restaura el eje anterior.

## Siguiente

[Colocar columnas, vigas y contraventeos](topic:place-members)
