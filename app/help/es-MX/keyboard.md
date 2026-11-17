---
title: Teclas y acciones del ratón
summary: Cada atajo de teclado y cada acción del ratón, trackpad y pantalla táctil en DetailCraft, según el código.
keywords: teclado, atajos, teclas de acceso rápido, teclas, ratón, trackpad, táctil, ctrl, comando, chuleta
from: 05a2dea0
---

Cómo se escriben las teclas en esta ayuda: [Teclas, ratones y trackpads](common:keys). En un Mac, {{key:Mod}} es la tecla Command; en los demás equipos es Ctrl.

## Herramientas

Estas acciones funcionan cuando el cursor no está en un campo de texto o de número.

| Tecla | Hace |
|---|---|
| {{key:V}} | {{ui:Seleccionar}} |
| {{key:B}} | {{ui:Viga}} |
| {{key:C}} | {{ui:Columna}} |
| {{key:R}} | {{ui:Contraviento}} |
| {{key:P}} | {{ui:Placa}} |
| {{key:F}} | {{ui:Zapata}} |
| {{key:S}} | {{ui:Escalera}} |
| {{key:M}} | Desplaza la selección al designar dos intersecciones de ejes ([Seleccionar por ventana, desplazar, girar, simetría y cambiar varios](topic:select-and-change)) |
| {{key:Esc}} | Suelta la ventana de selección que se está arrastrando, o devuelve las piezas arrastradas a su sitio; cancela un desplazamiento, el primer punto de una viga, un contraviento o una placa, o un pegado; púlselo de nuevo para volver a {{ui:Seleccionar}}; en {{ui:Seleccionar}}, quita la selección. Con el menú {{ui:Más}} abierto, lo cierra |
| {{key:Delete}} o {{key:Backspace}} | Elimina la selección (todo lo seleccionado, en un solo paso de deshacer) |

## Archivo y edición

| Tecla | Hace |
|---|---|
| {{key:Mod+S}} | Guarda el modelo (descarga). Funciona aunque esté escribiendo en un campo |
| {{key:Mod+O}} | Abre un modelo. Funciona aunque esté escribiendo en un campo |
| {{key:Mod+Z}} | Deshacer (fuera de los campos de texto; dentro de uno, deshace lo que escribió) |
| {{key:Mod+Y}} o {{key:Mod+Shift+Z}} | Rehacer |

## Copiar y pegar

Estas acciones funcionan cuando el cursor no está en un campo de texto o de número (ahí copian, pegan y seleccionan su texto como de costumbre). Cada pegado, corte, duplicado o eliminación es un paso de deshacer. Más información: [Copiar, pegar y duplicar](topic:copy-paste).

| Tecla | Hace |
|---|---|
| {{key:Mod+C}} | {{ui:Copiar}} los miembros y zapatas seleccionados (con sus agujeros, cortes y conexiones) |
| {{key:Mod+X}} | {{ui:Cortar}}: copia la selección y luego la elimina |
| {{key:Mod+V}} | {{ui:Pegar}}: la copia sigue al puntero; haga clic en una intersección de ejes para colocarla |
| {{key:Mod+Shift+V}} | {{ui:Pegar en el mismo lugar}}: en las coordenadas desde las que se copió |
| {{key:Mod+D}} | {{ui:Duplicar}}: una copia inmediata, desplazada por el desfase de [Configuración de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Seleccionar todo}}: cada miembro, conexión y zapata |
| {{key:Esc}} | {{ui:No seleccionar nada}} |

Si ha seleccionado texto en la página (por ejemplo, en una tabla de informe) y nada en el modelo, {{key:Mod+C}} copia el texto, como de costumbre.

{{ui:Nuevo}}, {{ui:Ejemplo}} y las exportaciones no tienen teclas; use la barra de herramientas.

Ninguna de estas teclas hace nada mientras esté abierto un cuadro de diálogo (la vista previa del plano de taller o una pregunta).

## Campos y paneles

| Tecla | Hace |
|---|---|
| {{key:Enter}} o {{key:Tab}} | Aplica un valor escrito (cada cambio es un paso de deshacer) |
| {{key:Enter}} en un campo de {{ui:Ejes}}, {{ui:Niveles}}, {{ui:Perfil personalizado}}, agujero o corte | Lo mismo que pulsar el botón de ese formulario |
| {{key:Left}} {{key:Right}} | Se mueve entre las pestañas {{ui:Problemas}}, {{ui:Lista de materiales}} y {{ui:Tabla de doblado}} cuando una pestaña tiene el foco |
| {{key:Esc}} | Cierra la vista previa del plano de taller o un cuadro de diálogo de pregunta (igual que {{ui:Cancelar}}) |

## Pantalla y ayuda

| Tecla | Hace |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, pantalla completa y pantalla completa con las barras ocultas. Control en todos los equipos, incluido Mac |
| {{key:Mod+,}} | Abre {{ui:Configuración}} ([Configuración de DetailCraft](topic:settings)) |
| {{key:Esc}} | Sale de pantalla completa |
| {{key:F1}} | Abre esta ayuda |

## Ratón

| Acción | En 3D | En Planta y Elevación |
|---|---|---|
| Clic | Seleccione una pieza, o colóquela en la intersección más cercana cuando una herramienta de colocación esté activa (o péguela ahí mientras pega) | Lo mismo |
| {{key:Shift}}, {{key:Ctrl}} o {{key:Mod}} y clic | Agrega la pieza a la selección, o la quita | Lo mismo |
| Presione sobre una pieza seleccionada y arrastre | Desplaza la selección por el nivel; con {{key:Mod}} presionada, hacia arriba y abajo | Desplaza la selección (en una elevación: a lo largo, y hacia arriba y abajo) |
| Arrastre con el botón izquierdo | Gira el modelo | Con {{ui:Seleccionar}}: una ventana de selección (hacia la derecha: totalmente dentro; hacia la izquierda: tocando). Al colocar: encuadra |
| {{key:Shift}} y arrastre con el botón izquierdo | Con {{ui:Seleccionar}}: una ventana de selección, agregada a la selección. Al colocar: encuadra | Con {{ui:Seleccionar}}: una ventana de selección, agregada a la selección |
| {{key:Ctrl}} o {{key:Mod}} y arrastre con el botón izquierdo | Encuadra | Nada |
| Arrastre con el botón derecho | Encuadra | Encuadra |
| Rueda | Zoom hacia el centro de la vista | Zoom |
| Arrastre con el botón central | Zoom | Con {{ui:Seleccionar}}: encuadra. De otro modo, zoom |
| Suelte un archivo `.detailcraft.json` sobre la app | Lo abre | Lo abre |

Un clic solo cuenta si el puntero se mueve menos de unos 5 píxeles entre que se presiona y se suelta; un movimiento mayor es un arrastre.

## Trackpad

| Acción | Hace |
|---|---|
| Deslizar con dos dedos hacia arriba o abajo, o pellizcar | Zoom |
| Presionar y arrastrar | Gira (3D) o encuadra (Planta y Elevación) |
| {{key:Shift}} y presionar y arrastrar | Encuadra en 3D |
| Clic con dos dedos | Clic derecho (no hay menú en la vista) |

## Táctil

En una tableta o una pantalla táctil:

| Acción | Hace |
|---|---|
| Toque | Selecciona una pieza, o la coloca en la intersección de ejes más cercana cuando una herramienta de colocación está activa (un toque a menos de un ancho de dedo cuenta) |
| Pulsación larga sobre una pieza | La agrega a la selección, o la quita (lo que hace {{key:Shift}}+clic con ratón) |
| Un dedo sobre una pieza seleccionada, luego arrastre | Desplaza la selección, ajustándose a las intersecciones de ejes |
| Un dedo en otro lugar | Gira el modelo (3D) o encuadra (Planta y Elevación) |
| Dos dedos | Pellizque para hacer zoom; muévalos juntos para encuadrar |

Los botones, listas y campos son más grandes cuando la pantalla es solo táctil. Las ventanas de selección necesitan un ratón; con los dedos, toque y mantenga presionado.

## Teclas que conserva el navegador

Algunos atajos pertenecen al navegador y ninguna página puede usarlos, por ejemplo {{key:Mod+W}} (cerrar pestaña), {{key:Mod+T}} (nueva pestaña) y {{key:Mod+N}} (nueva ventana). Si {{key:Mod+Y}} abre el historial de su navegador en lugar de rehacer, use {{key:Mod+Shift+Z}}.

Los atajos llegan a DetailCraft solo cuando la página tiene el teclado. Si una tecla no hace nada, o el navegador actúa en su lugar, haga clic primero en una parte vacía de la ventana de DetailCraft (por ejemplo, después de escribir en la barra de direcciones).

## Dónde está Desplazar

No hay comando Desplazar: seleccione una pieza y arrástrela por el nivel (mantenga {{key:Mod}} presionada para arrastrar hacia arriba y abajo), o edite su {{ui:Inicio}} y su {{ui:Final}} en {{ui:Propiedades}}.
