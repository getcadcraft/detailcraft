---
title: Configurar rejillas y niveles
summary: Escriba las líneas de rejilla, sus separaciones y los niveles sobre los que se coloca cada barra.
keywords: rejilla, rejillas, ejes, líneas de rejilla, niveles, cotas, plantas, forjados, separación, configuración
from: 9cad233c
---

Cada barra de DetailCraft se coloca en una intersección de rejilla, a una altura de nivel. Defina primero las rejillas y los niveles; puede cambiarlos después.

## Cómo funcionan aquí las rejillas

- Las **líneas numeradas** van en un sentido, las **líneas con letras** en el otro. Los nombres son solo costumbre: una etiqueta puede ser cualquier texto de hasta 8 caracteres (1, 2, 3 o A1, A2, o 10, 20).
- Escriba las etiquetas y las separaciones entre ellas, no las coordenadas. La primera línea de cada conjunto está en 0.
- Las líneas numeradas son líneas de x constante; las líneas con letras son líneas de y constante. Así, una viga de la rejilla 1 a la 2 discurre a lo largo de x, y una viga de A a B discurre a lo largo de y.
- Todos los valores están en milímetros.

Un modelo nuevo empieza con las líneas numeradas 1 2 3 en 6000 6000, las líneas con letras A B en 6000, y dos niveles.

## Definir las rejillas

1. En el panel {{ui:Modelo}} de la izquierda, abra {{ui:Rejillas}} si está plegado.
2. En {{ui:Líneas numeradas}}, escriba las etiquetas separadas por espacios, por ejemplo `1 2 3 4 5`.
3. En el campo {{ui:Separaciones}} de debajo, escriba una separación por cada tramo, por ejemplo `6000 6000 7500 6000`. Cuatro tramos para cinco líneas.
4. Haga lo mismo en {{ui:Líneas con letras}} y su {{ui:Separaciones}}, por ejemplo `A B C` y `8000 8000`.
5. Elija {{ui:Aplicar rejillas}}.

La barra de estado indica "Rejillas actualizadas." y la vista se amplía a la nueva rejilla. Las comas también valen como separadores.

Si algo no cuadra, no cambia nada y la barra de estado indica por qué, por ejemplo "Rejillas numeradas: indique una separación entre cada par de líneas (4)." Otras comprobaciones: las separaciones deben ser milímetros positivos, las etiquetas deben ser distintas, y puede haber como máximo 60 líneas en cada sentido.

:::note
Las barras conservan sus coordenadas cuando las rejillas se mueven. Si cambia una separación después de colocar acero, el acero se queda donde estaba y ya no está sobre la rejilla. Cambie primero la rejilla, o mueva las barras editando las coordenadas de sus extremos.
:::

## Definir los niveles

1. Abra {{ui:Niveles}} en el panel {{ui:Modelo}}.
2. Cada fila tiene un nombre de nivel y su cota en milímetros. Edítelos como quiera.
3. Elija {{ui:Añadir nivel}} para otra fila. Se llama "Nivel 3" (y así sucesivamente) y se coloca 4000 mm por encima del nivel más alto; cambie ambos si lo necesita.
4. Para eliminar un nivel, elija el botón × al final de su fila.
5. Elija {{ui:Aplicar niveles}}.

Nada cambia hasta que elija {{ui:Aplicar niveles}}. Los niveles se ordenan por cota al aplicarlos. Cada nivel necesita un nombre, dos niveles no pueden compartir nombre, y debe quedar al menos un nivel.

Los niveles pueden estar bajo cero (un sótano en `-3500`) y no necesitan estar espaciados por igual.

## Cómo se usan los niveles

- Un pilar colocado en un nivel sube hasta el siguiente nivel, o hasta el nivel que elija en {{ui:Hasta}}.
- Las vigas y las placas se colocan entre dos intersecciones, en el nivel en que hace clic.
- Las zapatas se colocan con su cara superior en el nivel en que hace clic.
- {{ui:Planta}} mira hacia abajo a un solo nivel cada vez.
- La exportación IFC crea una planta de edificio por cada nivel.

## Deshacer

Los cambios de rejilla y de nivel son ediciones como cualquier otra: {{key:Mod+Z}} devuelve la rejilla anterior.

## Siguiente

[Colocar pilares, vigas y riostras](topic:place-members)
