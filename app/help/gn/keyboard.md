---
title: Teclas y acciones del mouse
summary: Cada atajo de teclado y cada acción de mouse, trackpad y pantalla táctil en DetailCraft, desde el código.
keywords: teclado, atajos, teclas de acceso rápido, teclas, mouse, trackpad, táctil, ctrl, comando, hoja de referencia
from: 05a2dea0
---

Cómo se escriben las teclas en esta ayuda: [Teclas, mouse y trackpads](common:keys). En una Mac, {{key:Mod}} es la tecla Command; en los demás, es Ctrl.

## Herramientas

Estas funcionan cuando el cursor no está en un campo de texto o de números.

| Tecla | Hace |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:B}} | {{ui:Viga}} |
| {{key:C}} | {{ui:Columna}} |
| {{key:R}} | {{ui:Riostra}} |
| {{key:P}} | {{ui:Placa}} |
| {{key:F}} | {{ui:Zapata}} |
| {{key:S}} | {{ui:Escalera}} |
| {{key:M}} | Mueve la selección eligiendo dos intersecciones de grilla ([Seleccionar por ventana, mover, rotar, espejar y cambiar muchos](topic:select-and-change)) |
| {{key:Esc}} | Suelta una ventana de selección que se arrastra, o devuelve las piezas arrastradas; cancela un movimiento, el primer punto de una viga, riostra o placa, o un pegado; presionalo otra vez para volver a {{ui:Seleccionar}}; en {{ui:Seleccionar}}, borra la selección. Con el menú {{ui:Más}} abierto, lo cierra |
| {{key:Delete}} o {{key:Backspace}} | Elimina la selección (todo lo seleccionado, en un solo paso de Deshacer) |

## Archivo y edición

| Tecla | Hace |
|---|---|
| {{key:Mod+S}} | Guarda el modelo (descarga). Funciona aunque estés escribiendo en un campo |
| {{key:Mod+O}} | Abre un modelo. Funciona aunque estés escribiendo en un campo |
| {{key:Mod+Z}} | Deshacer (fuera de los campos de texto; dentro de uno, deshace lo que escribiste) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Copiar y pegar

Estas funcionan cuando el cursor no está en un campo de texto o de números (ahí copian, pegan y seleccionan tu texto como siempre). Cada pegado, corte, duplicado o eliminación es un paso de Deshacer. Más: [Copiar, pegar y duplicar](topic:copy-paste).

| Tecla | Hace |
|---|---|
| {{key:Mod+C}} | {{ui:Copiar}} los miembros y zapatas seleccionados (con sus agujeros, recortes y conexiones) |
| {{key:Mod+X}} | {{ui:Cortar}}: copia la selección y luego la elimina |
| {{key:Mod+V}} | {{ui:Pegar}}: la copia sigue al puntero; hacé clic en una intersección de grilla para colocarla |
| {{key:Mod+Shift+V}} | {{ui:Pegar en el mismo lugar}}: en las coordenadas desde donde se copió |
| {{key:Mod+D}} | {{ui:Duplicar}}: una copia al instante, desplazada por el valor de la [configuración de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Seleccionar todo}}: cada miembro, conexión y zapata |
| {{key:Esc}} | {{ui:No seleccionar nada}} |

Si seleccionaste texto de la página (por ejemplo, en una tabla de informe) y nada del modelo, {{key:Mod+C}} copia el texto, como siempre.

{{ui:Nuevo}}, {{ui:Muestra}} y las exportaciones no tienen teclas; usá la barra de herramientas.

Ninguna de estas teclas hace nada mientras un diálogo (la vista previa del plano de taller o una pregunta) está abierto.

## Campos y paneles

| Tecla | Hace |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Aplica un valor escrito (cada cambio es un paso de Deshacer) |
| {{key:Enter}} en un campo de {{ui:Grillas}}, {{ui:Niveles}}, {{ui:Perfil personalizado}}, agujero o recorte | Lo mismo que elegir el botón de ese formulario |
| {{key:Left}} {{key:Right}} | Se mueve entre las pestañas {{ui:Problemas}}, {{ui:Lista de materiales}} y {{ui:Planilla de doblado}} cuando una pestaña tiene el foco |
| {{key:Esc}} | Cierra la vista previa del plano de taller o un diálogo de pregunta (lo mismo que {{ui:Cancelar}}) |

## Pantalla y ayuda

| Tecla | Hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Cambia entre normal, pantalla completa y pantalla completa con las barras ocultas. Control en todas las computadoras, incluida la Mac |
| {{key:Mod+,}} | Abre {{ui:Configuración}} ([Configuración de DetailCraft](topic:settings)) |
| {{key:Esc}} | Sale de pantalla completa |
| {{key:F1}} | Abre esta ayuda |

## Mouse

| Acción | En 3D | En Planta y Elevación |
|---|---|---|
| Clic | Selecciona una pieza, o la coloca en la intersección más cercana cuando una herramienta de colocación está activa (o la pega ahí si estás pegando) | Lo mismo |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} y clic | Agrega la pieza a la selección, o la quita | Lo mismo |
| Presionar sobre una pieza seleccionada y arrastrar | Mueve la selección a lo largo del nivel; con {{key:Mod}} presionada, hacia arriba y abajo | Mueve la selección (en una elevación: a lo largo y hacia arriba y abajo) |
| Arrastrar con el botón izquierdo | Gira el modelo | Con {{ui:Seleccionar}}: una ventana de selección (hacia la derecha: totalmente adentro; hacia la izquierda: tocando). Al colocar: desplaza la vista |
| {{key:Shift}} y arrastrar con el botón izquierdo | Con {{ui:Seleccionar}}: una ventana de selección, agregada a la selección. Al colocar: desplaza la vista | Con {{ui:Seleccionar}}: una ventana de selección, agregada a la selección |
| {{key:Ctrl}} o {{key:Mod}} y arrastrar con el botón izquierdo | Desplaza la vista | Nada |
| Arrastrar con el botón derecho | Desplaza la vista | Desplaza la vista |
| Rueda | Hace zoom hacia el centro de la vista | Zoom |
| Arrastrar con el botón del medio | Zoom | Con {{ui:Seleccionar}}: desplaza la vista. Si no, zoom |
| Soltar un archivo `.detailcraft.json` sobre la aplicación | Lo abre | Lo abre |

Un clic cuenta solo si el puntero se mueve menos de unos 5 píxeles entre presionar y soltar; un movimiento más largo es un arrastre.

## Trackpad

| Acción | Hace |
|---|---|
| Deslizar dos dedos hacia arriba o abajo, o pellizcar | Zoom |
| Presionar y arrastrar | Gira (3D) o desplaza la vista (Planta y Elevación) |
| {{key:Shift}} y presionar y arrastrar | Desplaza la vista en 3D |
| Clic con dos dedos | Clic derecho (no hay menú en la vista) |

## Táctil

En una tableta o una pantalla táctil:

| Acción | Hace |
|---|---|
| Toque | Selecciona una pieza, o la coloca en la intersección de grilla más cercana cuando una herramienta de colocación está activa (un toque dentro de unos dos dedos de ancho cuenta) |
| Mantener presionado sobre una pieza | La agrega a la selección, o la quita (lo que hace {{key:Shift}}+clic con mouse) |
| Un dedo sobre una pieza seleccionada, y arrastrar | Mueve la selección, ajustándose a las intersecciones de grilla |
| Un dedo en otro lugar | Gira el modelo (3D) o desplaza la vista (Planta y Elevación) |
| Dos dedos | Pellizcar para hacer zoom, mover juntos para desplazar |

Los botones, listas y campos son más grandes cuando la pantalla es solo táctil. Las ventanas de selección necesitan mouse; con los dedos, tocá y mantené presionado.

## Teclas que se queda el navegador

Algunos atajos son del navegador y ninguna página puede usarlos, por ejemplo {{key:Mod+W}} (cerrar pestaña), {{key:Mod+T}} (nueva pestaña) y {{key:Mod+N}} (nueva ventana). Si {{key:Mod+Y}} abre el historial del navegador en lugar de rehacer, usá {{key:Mod+Shift+Z}}.

Los atajos llegan a DetailCraft solo cuando la página tiene el teclado. Si una tecla no hace nada, o la acción la toma el navegador, hacé clic primero en una parte vacía de la ventana de DetailCraft (por ejemplo, después de escribir en la barra de direcciones).

## Dónde está Mover

No hay un comando Mover: seleccioná una pieza y arrastrala a lo largo del nivel (mantené {{key:Mod}} para arrastrar hacia arriba y abajo), o editá sus {{ui:Inicio}} y {{ui:Fin}} en {{ui:Propiedades}}.
