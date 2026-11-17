---
title: Acciones de teclas y ratón
summary: Todos los atajos de teclado y las acciones de ratón, trackpad y pantalla táctil de DetailCraft, a partir del código.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, trackpad, táctil, ctrl, comando, chuleta
from: 05a2dea0
---

Cómo se escriben las teclas en esta ayuda: [Teclas, ratones y trackpads](common:keys). En un Mac, {{key:Mod}} es la tecla Comando; en los demás equipos es Ctrl.

## Herramientas

Estas acciones funcionan cuando el cursor no está en un campo de texto o numérico.

| Tecla | Hace |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:B}} | {{ui:Viga}} |
| {{key:C}} | {{ui:Pilar}} |
| {{key:R}} | {{ui:Diagonal}} |
| {{key:P}} | {{ui:Placa}} |
| {{key:F}} | {{ui:Zapata}} |
| {{key:S}} | {{ui:Escalera}} |
| {{key:M}} | Mover la selección eligiendo dos intersecciones de rejilla ([Seleccionar con ventana, mover, girar, reflejar, cambiar varios](topic:select-and-change)) |
| {{key:Esc}} | Suelte una ventana de selección que se esté arrastrando, o devuelva las piezas arrastradas a su sitio; cancele un desplazamiento, el primer punto de una viga, diagonal o placa, o un pegado; pulse de nuevo para volver a {{ui:Seleccionar}}; en {{ui:Seleccionar}}, quite la selección. Con el menú {{ui:Más}} abierto, ciérrelo |
| {{key:Delete}} o {{key:Backspace}} | Borra la selección (todo lo seleccionado, en un único paso de deshacer) |

## Archivo y edición

| Tecla | Hace |
|---|---|
| {{key:Mod+S}} | Guarda el modelo (descarga). Funciona incluso mientras escribe en un campo |
| {{key:Mod+O}} | Abre un modelo. Funciona incluso mientras escribe en un campo |
| {{key:Mod+Z}} | Deshacer (fuera de los campos de texto; dentro de uno, deshace lo que haya escrito) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Copiar y pegar

Estas acciones funcionan cuando el cursor no está en un campo de texto o numérico (allí copian, pegan y seleccionan su texto como de costumbre). Cada pegado, corte, duplicado o borrado es un paso de deshacer. Más: [Copiar, pegar y duplicar](topic:copy-paste).

| Tecla | Hace |
|---|---|
| {{key:Mod+C}} | {{ui:Copiar}} los elementos y zapatas seleccionados (con sus agujeros, recortes y uniones) |
| {{key:Mod+X}} | {{ui:Cortar}}: copia la selección y después la borra |
| {{key:Mod+V}} | {{ui:Pegar}}: la copia sigue al puntero; haga clic en una intersección de rejilla para colocarla |
| {{key:Mod+Shift+V}} | {{ui:Pegar en el mismo lugar}}: en las coordenadas desde las que se copió |
| {{key:Mod+D}} | {{ui:Duplicar}}: una copia inmediata, desplazada según el desplazamiento de [Ajustes de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Seleccionar todo}}: todos los elementos, uniones y zapatas |
| {{key:Esc}} | {{ui:No seleccionar nada}} |

Si ha seleccionado texto de la página (por ejemplo, en una tabla de informe) y nada del modelo, {{key:Mod+C}} copia el texto, como de costumbre.

{{ui:Nuevo}}, {{ui:Ejemplo}} y las exportaciones no tienen teclas; use la barra de herramientas.

Ninguna de estas teclas hace nada mientras esté abierto un cuadro de diálogo (la vista previa del plano de taller o una pregunta).

## Campos y paneles

| Tecla | Hace |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Aplica un valor escrito (cada cambio es un paso de deshacer) |
| {{key:Enter}} en un campo de {{ui:Rejillas}}, {{ui:Niveles}}, {{ui:Perfil a medida}}, de agujero o de recorte | Lo mismo que pulsar el botón de ese formulario |
| {{key:Left}} {{key:Right}} | Se mueve entre las pestañas {{ui:Problemas}}, {{ui:Lista de materiales}} y {{ui:Tabla de doblado}} cuando una pestaña tiene el foco |
| {{key:Esc}} | Cierra la vista previa del plano de taller o un cuadro de diálogo de pregunta (igual que {{ui:Cancelar}}) |

## Pantalla y ayuda

| Tecla | Hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, pantalla completa y pantalla completa con las barras ocultas. Ctrl en cualquier equipo, incluido Mac |
| {{key:Mod+,}} | Abre {{ui:Ajustes}} ([Ajustes de DetailCraft](topic:settings)) |
| {{key:Esc}} | Sale de pantalla completa |
| {{key:F1}} | Abre esta ayuda |

## Ratón

| Acción | En 3D | En Planta y Alzado |
|---|---|---|
| Clic | Selecciona una pieza, o la coloca en la intersección más cercana cuando hay activa una herramienta de colocación (o pega en ese punto mientras pega) | Lo mismo |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} y clic | Añade la pieza a la selección, o la quita | Lo mismo |
| Pulse sobre una pieza seleccionada y arrastre | Mueve la selección por el nivel; con {{key:Mod}} pulsado, hacia arriba y hacia abajo | Mueve la selección (en un alzado: a lo largo de él y hacia arriba y abajo) |
| Arrastre con el botón izquierdo | Gira el modelo | Con {{ui:Seleccionar}}: una ventana de selección (hacia la derecha: completamente dentro; hacia la izquierda: tocando). Al colocar: desplaza la vista |
| {{key:Shift}} y arrastre con el botón izquierdo | Con {{ui:Seleccionar}}: una ventana de selección, añadida a la selección. Al colocar: desplaza la vista | Con {{ui:Seleccionar}}: una ventana de selección, añadida a la selección |
| {{key:Ctrl}} o {{key:Mod}} y arrastre con el botón izquierdo | Desplaza la vista | Nada |
| Arrastre con el botón derecho | Desplaza la vista | Desplaza la vista |
| Rueda | Zoom hacia el centro de la vista | Zoom |
| Arrastre con el botón central | Zoom | Con {{ui:Seleccionar}}: desplaza la vista. Si no, zoom |
| Suelte un archivo `.detailcraft.json` en la aplicación | Lo abre | Lo abre |

Un clic solo cuenta si el puntero se mueve menos de unos 5 píxeles entre la pulsación y la liberación; un movimiento más largo es un arrastre.

## Trackpad

| Acción | Hace |
|---|---|
| Deslizamiento de dos dedos hacia arriba o abajo, o pellizco | Zoom |
| Pulse y arrastre | Gira (3D) o desplaza (Planta y Alzado) |
| {{key:Shift}} y pulse y arrastre | Desplaza en 3D |
| Clic con dos dedos | Clic derecho (no hay menú en la vista) |

## Pantalla táctil

En una tableta o una pantalla táctil:

| Acción | Hace |
|---|---|
| Toque | Selecciona una pieza, o la coloca en la intersección de rejilla más cercana cuando hay activa una herramienta de colocación (un toque a una distancia de un dedo de ella cuenta) |
| Pulsación larga sobre una pieza | La añade a la selección, o la quita (lo que hace {{key:Shift}}+clic con ratón) |
| Un dedo sobre una pieza seleccionada, y arrastre | Mueve la selección, ajustándola a las intersecciones de rejilla |
| Un dedo en otro lugar | Gira el modelo (3D) o desplaza la vista (Planta y Alzado) |
| Dos dedos | Pellizcar para hacer zoom; mover juntos para desplazar |

Los botones, las listas y los campos son más grandes cuando la pantalla es solo táctil. Las ventanas de selección necesitan ratón; con los dedos, use toque y pulsación larga.

## Teclas que el navegador se reserva

Algunos atajos pertenecen al navegador y ninguna página puede usarlos, por ejemplo {{key:Mod+W}} (cerrar pestaña), {{key:Mod+T}} (nueva pestaña) y {{key:Mod+N}} (nueva ventana). Si {{key:Mod+Y}} abre el historial del navegador en lugar de rehacer, use {{key:Mod+Shift+Z}}.

Los atajos llegan a DetailCraft solo cuando la página tiene el teclado. Si una tecla no hace nada, o la acción la realiza el navegador, haga clic primero en una zona vacía de la ventana de DetailCraft (por ejemplo, después de escribir en la barra de direcciones).

## Dónde está Mover

No existe un comando Mover: seleccione una pieza y arrástrela por el nivel (mantenga {{key:Mod}} pulsado para arrastrar hacia arriba y abajo), o edite su {{ui:Inicio}} y su {{ui:Final}} en {{ui:Propiedades}}.
