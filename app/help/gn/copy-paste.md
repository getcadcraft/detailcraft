---
title: Copiar, pegar y duplicar
summary: Seleccione varias piezas, copielas con sus agujeros, recortes y conexiones, y péguelas en una intersección de grilla, con desplazamiento, en el mismo lugar o en otra pestaña. Cortar, duplicar, eliminar y seleccionar todo.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, no seleccionar nada, selección múltiple, shift clic, varios, repetir un tramo, copiar un marco, desplazamiento, eliminar varios, menú editar, menú más
from: f25f1829
---

El grupo {{ui:Edit}} de la barra de herramientas oguereko {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} ha {{ui:Paste}}. Su menú {{ui:More}} oguereko ambue: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} ha {{ui:Select none}}, cada una con su tecla. Un botón o ítem de menú que no puede actuar ahora aparece en gris; pasá el puntero por encima para leer el motivo (por ejemplo "todavía no se copió nada").

Cada pegado, corte, duplicado y eliminación es un solo paso: un {{key:Mod+Z}} lo deshace todo.

## Seleccionar varias piezas

- Haga clic en una pieza para seleccionarla. Mantenga presionado {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y haga clic en más piezas para agregarlas; haga clic en una ya seleccionada de la misma manera para quitarla.
- {{key:Mod+A}} o {{ui:Select all}} selecciona cada miembro, conexión y cimiento.
- {{key:Esc}} o {{ui:Select none}} limpia la selección.

Con varias cosas seleccionadas, el panel {{ui:Properties}} muestra el título "4 seleccionados" (o la cantidad que sea) y lista los miembros por tipo, las conexiones, los cimientos y el peso bruto del acero, con los botones {{ui:Copy}}, {{ui:Duplicate}} y {{ui:Delete}}.

## Copiar

1. Seleccione los miembros y cimientos que quiera.
2. Elija {{ui:Copy}} o presione {{key:Mod+C}}.

Lo que se copia:

- Cada miembro completo: perfil, material, extremos, posición, rotación, nombre, agujeros y recortes. También se copia el perfil personalizado que use.
- Cada cimiento completo: tamaño, hormigón, malla inferior y barras de arranque.
- Placas de extremo y placas base, pero solo cuando se copian todos los miembros que une una conexión: la placa de extremo de una viga necesita la viga y su columna. La barra de estado indica cuántas conexiones quedaron afuera. Para dejar conexiones afuera a propósito, desmarque **Copy end plates and base plates with their members** en la [configuración de DetailCraft](topic:settings).

Una conexión sola no se puede copiar; seleccione sus miembros. Para dar a otras uniones la misma conexión, use {{ui:Similar}} (vea [Placas de extremo](topic:end-plates#copy-it-to-every-similar-joint)).

La copia queda en este navegador hasta que copie otra cosa. Otra pestaña o ventana de DetailCraft en el mismo navegador puede pegarla, así que puede copiar un marco de un modelo y pegarlo en otro.

## Pegar en una intersección de grilla

1. Elija {{ui:Paste}} o presione {{key:Mod+V}}.
2. Mueva el puntero sobre la vista. Un contorno punteado de la copia sigue a la intersección de grilla más cercana al puntero.
3. Haga clic en una intersección. El punto base de la copia (su esquina más baja: la x, y y z más pequeñas de todo lo copiado) se ubica ahí.

Las piezas pegadas quedan seleccionadas, así que puede pegar otra vez en otro lugar, o cambiarlas. {{key:Esc}} cancela un pegado; la copia queda en el portapapeles. {{ui:Plan}} y {{ui:Elevation}} facilitan acertar la intersección correcta.

:::tip
Para repetir un tramo, seleccione los miembros del tramo (o todo con {{key:Mod+A}}), copie, pegue y haga clic en la intersección un tramo más allá de donde estaba la esquina más baja de la copia.
:::

## Pegar desde el teclado

Mientras pega, el panel {{ui:Properties}} muestra qué hay en el portapapeles y dos formularios:

- {{ui:Paste by offset (mm, from the original)}}: escriba x, y y z y elija {{ui:Paste at this offset}}. Empieza con el desplazamiento de la [configuración de DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: elija una grilla con letra, una grilla numerada y un nivel, y elija {{ui:Paste here}}. El punto base va ahí.

## Pegar en el mismo lugar

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) pone la copia exactamente en las coordenadas de donde se copió. Úselo después de {{ui:Cut}}, o para traer piezas de otro modelo al mismo lugar. Si los originales siguen ahí, la copia queda encima de ellos y la barra de estado avisa: mueva las copias por su {{ui:Start}} y {{ui:End}} en {{ui:Properties}}, o deshaga.

## Duplicar

{{ui:Duplicate}} ({{key:Mod+D}}) copia la selección y la pega de una vez, desplazada por el desplazamiento de la [configuración de DetailCraft](topic:settings) (6000 mm a lo largo de x al inicio). No cambia lo que está en el portapapeles. Las copias quedan seleccionadas, así que presionar {{key:Mod+D}} otra vez hace la siguiente a partir de ellas.

## Cortar y eliminar

- {{ui:Cut}} ({{key:Mod+X}}) copia la selección y luego la elimina. Péguela donde corresponda.
- {{ui:Delete}} ({{key:Delete}} o {{key:Backspace}}) elimina la selección. Al eliminar un miembro se eliminan también sus conexiones.

## Marcas después de un pegado

Las marcas de pieza y de conjunto nunca se guardan; DetailCraft las numera otra vez a partir del modelo después de cada cambio ([cómo se asignan las marcas](topic:mark-rules)). Por eso:

- Una copia que es la misma pieza que su original (mismo perfil, grado, largo de corte, agujeros y recortes) comparte la marca del original, y la cuenta en {{ui:Part marks}} y en la lista de materiales sube.
- Una copia que queda diferente recibe una marca propia. Por ejemplo, una viga pegada sin sus placas de extremo no se recorta, así que es una pieza distinta. Las marcas se numeran otra vez en todo el modelo, por lo que también pueden cambiar los números de otras piezas.

Cada miembro, agujero, recorte, conexión y cimiento pegado recibe un id nuevo, así que nada del modelo se comparte entre una copia y su original.

## Si se rechaza el portapapeles

Lo que está en el portapapeles se revisa con el mismo cuidado que un archivo de modelo que abre: todo lo que no es una pieza válida de DetailCraft se descarta, y la barra de estado dice qué pasó. Un portapapeles cargado por un DetailCraft más nuevo, o por otra cosa, se rechaza con un aviso y no se pega nada. Si una ventana privada no puede guardar la copia en el almacenamiento del navegador, la copia igual funciona en esa pestaña.
