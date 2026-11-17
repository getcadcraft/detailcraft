---
title: Copiar, pegar y duplicar
summary: Seleccione varias piezas, cópielas con sus agujeros, recortes y uniones, y péguelas en una intersección de rejilla, con desplazamiento, en el mismo lugar o en otra pestaña. Cortar, duplicar, borrar y seleccionar todo.
keywords: copiar, pegar, cortar, duplicar, portapapeles, pegar en el mismo lugar, seleccionar todo, no seleccionar nada, selección múltiple, Mayús clic, varios, repetir una crujía, copiar un pórtico, desplazamiento, borrar varios, menú editar, menú más
from: f25f1829
---

El grupo {{ui:Editar}} de la barra de herramientas tiene {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}} y {{ui:Pegar}}. Su menú {{ui:Más}} contiene el resto: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla. Un botón o elemento de menú que no pueda actuar en ese momento aparece atenuado; sitúe el puntero encima para leer el motivo (por ejemplo, "todavía no hay nada copiado").

Cada pegado, corte, duplicado y borrado es un solo paso: un {{key:Mod+Z}} lo deshace todo.

## Seleccionar varias piezas

- Haga clic en una pieza para seleccionarla. Mantenga pulsada {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y haga clic en más piezas para añadirlas; haga clic en una seleccionada del mismo modo para quitarla.
- {{key:Mod+A}} o {{ui:Seleccionar todo}} selecciona todos los miembros, uniones y zapatas.
- {{key:Esc}} o {{ui:No seleccionar nada}} borra la selección.

Con varios elementos seleccionados, el panel {{ui:Propiedades}} se titula "4 seleccionados" (o el número que corresponda) y enumera los miembros por tipo, las uniones, las zapatas y el peso bruto de acero, con los botones {{ui:Copiar}}, {{ui:Duplicar}} y {{ui:Borrar}}.

## Copiar

1. Seleccione los miembros y las zapatas que desee.
2. Elija {{ui:Copiar}} o pulse {{key:Mod+C}}.

Lo que se copia:

- Cada miembro completo: perfil, material, extremos, posición, rotación, nombre, agujeros y recortes. También se copia cualquier perfil personalizado que use.
- Cada zapata completa: dimensiones, hormigón, armadura inferior y barras de arranque.
- Chapas de testa y placas base, pero solo cuando se copian todos los miembros que une una unión: la chapa de testa de una viga necesita la viga y su pilar. La barra de estado indica cuántas uniones se han dejado fuera. Para dejar uniones fuera a propósito, desmarque **Copiar chapas de testa y placas base con sus miembros** en los [ajustes de DetailCraft](topic:settings).

Una unión por sí sola no se puede copiar; seleccione en su lugar sus miembros. Para dar a otras juntas la misma unión, use {{ui:Similares}} (véase [Chapas de testa](topic:end-plates#copy-it-to-every-similar-joint)).

La copia permanece en este navegador hasta que copie otra cosa. Otra pestaña o ventana de DetailCraft en el mismo navegador puede pegarla, de modo que puede copiar un pórtico de un modelo y pegarlo en otro.

## Pegar en una intersección de rejilla

1. Elija {{ui:Pegar}} o pulse {{key:Mod+V}}.
2. Mueva el puntero sobre la vista. Un contorno discontinuo de la copia sigue la intersección de rejilla más cercana al puntero.
3. Haga clic en una intersección. El punto base de la copia (su esquina más baja: la menor x, y y z de todo lo copiado) se sitúa allí.

Las piezas pegadas quedan seleccionadas después, de modo que puede volver a pegar en otro lugar o modificarlas. {{key:Esc}} cancela el pegado; la copia permanece en el portapapeles. {{ui:Planta}} y {{ui:Alzado}} facilitan acertar con la intersección correcta.

:::tip
Para repetir una crujía, seleccione los miembros de la crujía (o todo con {{key:Mod+A}}), copie, pegue y haga clic en la intersección situada una crujía más allá de donde estaba la esquina más baja de la copia.
:::

## Pegar desde el teclado

Mientras pega, el panel {{ui:Propiedades}} muestra lo que hay en el portapapeles y dos formularios:

- {{ui:Pegar por desplazamiento (mm, desde el original)}}: escriba x, y y z y elija {{ui:Pegar con este desplazamiento}}. Empieza con el desplazamiento de los [ajustes de DetailCraft](topic:settings).
- {{ui:Pegar en una intersección de rejilla}}: elija una rejilla con letra, una rejilla numerada y un nivel, y elija {{ui:Pegar aquí}}. El punto base se coloca allí.

## Pegar en el mismo lugar

{{ui:Pegar en el mismo lugar}} ({{key:Mod+Shift+V}}) coloca la copia exactamente en las coordenadas desde las que se copió. Úselo después de {{ui:Cortar}}, o para traer piezas de otro modelo al mismo lugar. Si los originales siguen ahí, la copia queda encima de ellos y la barra de estado se lo advierte: mueva las copias por su {{ui:Inicio}} y su {{ui:Final}} en {{ui:Propiedades}}, o deshaga.

## Duplicar

{{ui:Duplicar}} ({{key:Mod+D}}) copia la selección y la pega de inmediato, desplazada por el desplazamiento de los [ajustes de DetailCraft](topic:settings) (6000 mm a lo largo de x, para empezar). No cambia lo que hay en el portapapeles. Las copias quedan seleccionadas después, de modo que pulsar {{key:Mod+D}} de nuevo crea la siguiente a partir de ellas.

## Cortar y borrar

- {{ui:Cortar}} ({{key:Mod+X}}) copia la selección y luego la borra. Péguela donde corresponda.
- {{ui:Borrar}} ({{key:Delete}} o {{key:Backspace}}) borra la selección. Borrar un miembro borra también sus uniones.

## Marcas después de pegar

Las marcas de pieza y de conjunto nunca se guardan; DetailCraft las vuelve a numerar a partir del modelo después de cada cambio ([Cómo se asignan las marcas](topic:mark-rules)). Por tanto:

- Una copia que es la misma pieza que su original (mismo perfil, calidad, longitud de corte, agujeros y recortes) comparte la marca del original, y el recuento en {{ui:Marcas de pieza}} y en la lista de materiales aumenta.
- Una copia que resulta distinta recibe una marca propia. Una viga pegada sin sus chapas de testa, por ejemplo, no se corta, así que es una pieza diferente. Las marcas se vuelven a numerar en todo el modelo, de modo que también pueden cambiar los números de otras piezas.

Cada miembro, agujero, recorte, unión y zapata pegados recibe un nuevo identificador, de modo que nada del modelo se comparte nunca entre una copia y su original.

## Si se rechaza el portapapeles

Lo que hay en el portapapeles se comprueba con el mismo cuidado que un archivo de modelo que abre: cualquier cosa que no sea una pieza válida de DetailCraft se descarta, y la barra de estado indica qué. Un portapapeles llenado por una versión más reciente de DetailCraft, o por otra cosa, se rechaza con un mensaje y no se pega nada. Si una ventana privada no puede guardar la copia en el almacenamiento del navegador, la copia sigue funcionando en esa pestaña.
