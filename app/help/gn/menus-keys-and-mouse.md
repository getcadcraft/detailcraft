---
title: Menús, teclas y mouse
summary: Elegí un estilo de menú que coincida con tu forma de trabajar, asigná tu propia tecla a cualquier comando, mové comandos entre pestañas de la cinta, y definí qué hacen la rueda y los botones del mouse.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, mouse, rueda, invertir, dirección del zoom, botón del medio, botón derecho, desplazar, orbitar, exportar, importar, cambiar, familiar, dibujo clásico, cinta de acero
from: 4132c6e5
---

Los comandos de DetailCraft son los mismos sin importar cómo llegues a ellos. Un **estilo de menú** solo decide dónde se ubican en pantalla, cómo se llaman allí y con qué teclas se ejecutan. Elegilo en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menús, teclas y mouse}}; el cambio es inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtenés |
|---|---|
| {{ui:DetailCraft}} | La barra de herramientas propia de DetailCraft (Archivo, Colocar, Conectar, Editar, Salida) y sus teclas de una sola letra: {{key:V}} seleccionar, {{key:B}} viga, {{key:C}} columna, {{key:R}} riostra, {{key:P}} placa, {{key:F}} zapata, {{key:S}} escalera. El inicial. |
| {{ui:Dibujo clásico}} | Para quienes escriben comandos: una cinta pequeña ({{ui:Inicio}}, {{ui:Vista}}, {{ui:Salida}}) y una línea de comandos. Escribí BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (deshacer), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP y presioná {{key:Enter}}; {{key:Enter}} sin nada repite el último comando, {{key:Esc}} lo borra. Empezá a escribir en cualquier lugar y las letras van a la línea de comandos. El botón del medio desplaza; en 3D, {{key:Shift}} y el botón del medio orbitan. |
| {{ui:Cinta de acero}} | Pestañas como las ordenan los programas de detallado de acero: {{ui:Modelado}} (miembros, hormigón, escaleras), {{ui:Detallado}} (conexiones), {{ui:Editar}}, {{ui:Planos}} (planos e informes), {{ui:Fabricación}} (archivos NC, IFC) y {{ui:Vista}}, con un menú {{ui:Archivo}} y botones rápidos a la derecha. Las teclas de una sola letra se mantienen. El botón del medio desplaza; en 3D el botón izquierdo orbita. |

Todos los estilos mantienen {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} y {{key:Mod+A}}. Las cintas también contienen {{ui:3D}}, {{ui:Planta}}, {{ui:Elevación}} y {{ui:Ajustar}} de la barra de vista.

:::tip
Una tecla que pertenece al diseño propio de DetailCraft, pero que tu estilo asignó a otro comando, no hace nada, y la línea de estado indica adónde fue su comando ("En Mi cinta de acero, Columna es Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su significado, y mientras un miembro está a medio colocar o una copia sigue al puntero, las letras pertenecen a DetailCraft.
:::

## Hacelo tuyo

1. Elegí el estilo más cercano a lo que querés, y luego hacé clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, buscá un comando (el cuadro de búsqueda ayuda). {{ui:Agregar una tecla}} y presioná la tecla, o dos teclas seguidas para una tecla de dos letras. Hacé clic en una tecla para quitarla.
3. Con una cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Mouse}}, definí la rueda, los botones que desplazan los planos y elevaciones, y qué hace cada botón en la vista 3D.
5. Ponele un nombre y hacé clic en {{ui:Guardar}}.

Guardar un estilo integrado crea tu propia copia ("Mi cinta de acero"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y hay que corregirla antes de poder guardar.

## Mouse

- **Rueda del mouse**: {{ui:Subir acerca}} (el inicial) o {{ui:Subir aleja}}, y qué tan rápido. El pellizco del trackpad siempre hace zoom según cómo se mueven tus dedos.
- **Desplazar los planos y elevaciones con**: el botón del medio, el botón derecho, o ambos. Con la herramienta Seleccionar, el botón izquierdo siempre dibuja una ventana de selección.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} mantiene los botones de DetailCraft (izquierdo orbita, medio hace zoom, derecho desplaza). O podés asignar a cada botón orbitar, desplazar, hacer zoom o nada; {{key:Shift}} con un botón que orbita o desplaza invierte los dos.

## Llevalo con vos

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otra computadora o de un colega. Un archivo importado solo puede apuntar a los comandos propios de DetailCraft: lo demás se deja afuera y se cuenta en la línea de estado. {{ui:Eliminar este estilo}} quita uno de los tuyos.

:::note
Estas configuraciones quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} debajo de las tarjetas de estilo hace que cada aplicación abra en su estilo correspondiente (su propia barra de herramientas, una cinta o Dibujo clásico), con los cambios que hiciste en cada una. DetailCraft no tiene un estilo de barra de menús: cuando se elige la barra de menús de otra aplicación para todas, DetailCraft mantiene su propia barra de herramientas.
:::

Relacionado: [Teclado y mouse](topic:keyboard) · [Configuración de DetailCraft](topic:settings) · [Venir desde otro software de detallado](topic:coming-from)
