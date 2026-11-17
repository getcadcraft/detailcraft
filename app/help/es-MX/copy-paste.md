---
title: Copiar, pegar y duplicar
summary: Seleccione varias piezas, cópielas con sus agujeros, recortes y conexiones, y péguelas en una intersección de ejes, con desfase, en el mismo lugar o en otra pestaña. Cortar, duplicar, eliminar y seleccionar todo.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, no seleccionar nada, selección múltiple, clic con Shift, varios, repetir un tramo, copiar un marco, desfase, eliminar varios, menú edición, menú más
from: f25f1829
---

El grupo {{ui:Edición}} de la barra de herramientas tiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}} y {{ui:Pegar}}. Su menú {{ui:Más}} contiene el resto: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla. Un botón o elemento de menú que no puede actuar en ese momento aparece atenuado; pase el puntero sobre él para leer el motivo (por ejemplo, "todavía no se ha copiado nada").

Cada pegado, corte, duplicado y eliminación es un solo paso: un {{key:Mod+Z}} lo deshace todo.

## Seleccionar varias piezas

- Haga clic en una pieza para seleccionarla. Mantenga presionado {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y haga clic en más piezas para agregarlas; haga clic en una seleccionada de la misma forma para quitarla.
- {{key:Mod+A}} o {{ui:Seleccionar todo}} selecciona cada miembro, conexión y cimentación.
- {{key:Esc}} o {{ui:No seleccionar nada}} borra la selección.

Con varios elementos seleccionados, el panel {{ui:Propiedades}} muestra el encabezado "4 seleccionados" (o la cantidad que corresponda) y enumera los miembros por tipo, las conexiones, las cimentaciones y el peso bruto de acero, con los botones {{ui:Copiar}}, {{ui:Duplicar}} y {{ui:Eliminar}}.

## Copiar

1. Seleccione los miembros y las cimentaciones que desea.
2. Elija {{ui:Copiar}} o presione {{key:Mod+C}}.

Lo que se copia:

- Cada miembro completo: perfil, material, extremos, posición, rotación, nombre, agujeros y recortes. También se copia el perfil personalizado que use.
- Cada cimentación completa: tamaño, concreto, malla inferior y barras de arranque.
- Placas de extremo y placas base, pero solo cuando se copian todos los miembros que une una conexión: la placa de extremo de una viga necesita la viga y su columna. La barra de estado indica cuántas conexiones se dejaron fuera. Para dejar conexiones fuera a propósito, desactive **Copiar placas de extremo y placas base con sus miembros** en la [configuración de DetailCraft](topic:settings).

Una conexión por sí sola no se puede copiar; seleccione sus miembros en su lugar. Para dar a otras uniones la misma conexión, use {{ui:Similares}} (vea [Placas de extremo](topic:end-plates#copy-it-to-every-similar-joint)).

La copia permanece en este navegador hasta que copie otra cosa. Otra pestaña o ventana de DetailCraft del mismo navegador puede pegarla, así que puede copiar un marco de un modelo y pegarlo en otro.

## Pegar en una intersección de ejes

1. Elija {{ui:Pegar}} o presione {{key:Mod+V}}.
2. Mueva el puntero sobre la vista. Un contorno punteado de la copia sigue a la intersección de ejes más cercana al puntero.
3. Haga clic en una intersección. El punto base de la copia (su esquina más baja: los valores mínimos de x, y y z de todo lo copiado) se coloca ahí.

Después de pegar, las piezas quedan seleccionadas, así que puede volver a pegar en otro lugar o modificarlas. {{key:Esc}} cancela un pegado; la copia permanece en el portapapeles. {{ui:Planta}} y {{ui:Elevación}} facilitan acertar en la intersección correcta.

:::tip
Para repetir un tramo, seleccione los miembros del tramo (o todo con {{key:Mod+A}}), copie, pegue y haga clic en la intersección un tramo más allá de donde estaba la esquina más baja de la copia.
:::

## Pegar desde el teclado

Mientras pega, el panel {{ui:Propiedades}} muestra lo que hay en el portapapeles y dos formularios:

- {{ui:Pegar con desfase (mm, desde el original)}}: escriba x, y y z y elija {{ui:Pegar con este desfase}}. Inicia con el desfase de la [configuración de DetailCraft](topic:settings).
- {{ui:Pegar en una intersección de ejes}}: elija un eje con letra, un eje numerado y un nivel, y elija {{ui:Pegar aquí}}. El punto base se coloca ahí.

## Pegar en el mismo lugar

{{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) coloca la copia exactamente en las coordenadas desde las que se copió. Úselo después de {{ui:Cortar}}, o para traer piezas de otro modelo al mismo lugar. Si los originales siguen ahí, la copia queda encima de ellos y la barra de estado se lo advierte: mueva las copias por su {{ui:Inicio}} y {{ui:Final}} en {{ui:Propiedades}}, o deshaga.

## Duplicar

{{ui:Duplicar}} ({{key:Mod+D}}) copia la selección y la pega de inmediato, desplazada por el desfase de la [configuración de DetailCraft](topic:settings) (6000 mm a lo largo de x al inicio). No cambia lo que hay en el portapapeles. Las copias quedan seleccionadas después, así que presionar {{key:Mod+D}} otra vez crea la siguiente a partir de ellas.

## Cortar y eliminar

- {{ui:Cortar}} ({{key:Mod+X}}) copia la selección y luego la elimina. Péguela donde corresponda.
- {{ui:Eliminar}} ({{key:Delete}} o {{key:Backspace}}) elimina la selección. Al eliminar un miembro, también se eliminan sus conexiones.

## Marcas después de pegar

Las marcas de pieza y de ensamble nunca se guardan; DetailCraft las vuelve a numerar a partir del modelo después de cada cambio ([Cómo se asignan las marcas](topic:mark-rules)). Por lo tanto:

- Una copia que es la misma pieza que su original (mismo perfil, grado, longitud de corte, agujeros y recortes) comparte la marca del original, y el conteo en {{ui:Marcas de pieza}} y en la lista de materiales aumenta.
- Una copia que resulta diferente recibe una marca propia. Una viga pegada sin sus placas de extremo, por ejemplo, no se recorta, así que es otra pieza. Las marcas se vuelven a numerar en todo el modelo, de modo que los números de otras piezas también pueden cambiar.

A cada miembro, agujero, recorte, conexión y cimentación pegados se le asigna un identificador nuevo, así que nada del modelo se comparte entre una copia y su original.

## Si el portapapeles se rechaza

Lo que hay en el portapapeles se revisa con el mismo cuidado que un archivo de modelo que abre: cualquier cosa que no sea una pieza válida de DetailCraft se descarta, y la barra de estado indica qué ocurrió. Un portapapeles llenado por una versión más nueva de DetailCraft, o por otra cosa, se rechaza con un mensaje y no se pega nada. Si una ventana privada no puede guardar la copia en el almacenamiento del navegador, la copia sigue funcionando en esa pestaña.
