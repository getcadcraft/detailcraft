---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que encaje con su forma de trabajar, asigne a cualquier comando su propia tecla, mueva comandos entre pestañas de la cinta y defina qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, desplazar, orbitar, exportar, importar, cambiar, familiar, clásico de delineación, cinta de acero
from: 4132c6e5
---

Los comandos de DetailCraft son los mismos sea cual sea la forma de llegar a ellos. Un **estilo de menú** solo decide dónde se sitúan en pantalla, cómo se llaman allí y qué teclas los ejecutan. Elíjalo en {{ui:Ajustes}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menús, teclas y ratón}}; el cambio es inmediato y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:DetailCraft}} | La barra de herramientas propia de DetailCraft (Archivo, Colocar, Conectar, Editar, Salida) y sus teclas de una sola letra: {{key:V}} seleccionar, {{key:B}} viga, {{key:C}} pilar, {{key:R}} diagonal, {{key:P}} placa, {{key:F}} zapata, {{key:S}} escalera. El inicial. |
| {{ui:Clásico de delineación}} | Para quien escribe comandos: una cinta pequeña ({{ui:Inicio}}, {{ui:Vista}}, {{ui:Salida}}) y una línea de comandos. Escriba BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (deshacer), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP y pulse {{key:Enter}}; {{key:Enter}} sin nada repite el último comando, y {{key:Esc}} lo borra. Empiece a escribir en cualquier parte y las letras van a la línea de comandos. El botón central desplaza; en 3D, {{key:Shift}} y el botón central orbitan. |
| {{ui:Cinta de acero}} | Pestañas como las que usan los programas de detallado de acero: {{ui:Modelado}} (elementos, hormigón, escaleras), {{ui:Detallado}} (uniones), {{ui:Editar}}, {{ui:Planos}} (planos e informes), {{ui:Fabricación}} (archivos NC, IFC) y {{ui:Vista}}, con un menú {{ui:Archivo}} y botones rápidos a la derecha. Las teclas de una sola letra se mantienen. El botón central desplaza; en 3D, el botón izquierdo orbita. |

Cada estilo mantiene {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} y {{key:Mod+A}}. Las cintas también contienen {{ui:3D}}, {{ui:Planta}}, {{ui:Alzado}} y {{ui:Ajustar}} de la barra de vistas.

:::tip
Una tecla que pertenece a la distribución propia de DetailCraft pero que su estilo asignó a otro comando no hace nada, y la línea de estado indica adónde fue a parar su comando ("En Mi cinta de acero, Pilar es Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas conservan siempre su significado, y mientras un elemento está a medio colocar o una copia sigue al puntero, las letras pertenecen a DetailCraft.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Añadir una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con una cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, defina la rueda, los botones que desplazan la planta y los alzados, y qué hace cada botón en la vista 3D.
5. Póngale un nombre y haga clic en {{ui:Guardar}}.

Guardar un estilo integrado crea su propia copia («Mi cinta de acero»); el integrado nunca cambia. Una tecla asignada a dos comandos aparece en rojo y hay que corregirla antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicial) o {{ui:Girar hacia arriba aleja}}, y la velocidad. Un pellizco en el trackpad siempre hace zoom en el sentido en que se mueven los dedos.
- **Desplazar la planta y los alzados con**: el botón central, el botón derecho, o ambos. Con la herramienta {{ui:Seleccionar}}, el botón izquierdo siempre dibuja una ventana de selección.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} conserva los botones de DetailCraft (el izquierdo orbita, el central hace zoom, el derecho desplaza). O asigne a cada botón orbitar, desplazar, zoom o nada; {{key:Shift}} con un botón que orbita o desplaza intercambia las dos acciones.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} añade uno, desde otro equipo o de un compañero. Un archivo importado solo puede apuntar a los comandos propios de DetailCraft: cualquier otra cosa se omite y se cuenta en la línea de estado. {{ui:Borrar este estilo}} elimina uno de los suyos.

:::note
Estos ajustes se quedan en este navegador. {{ui:Usar este estilo en todas las aplicaciones}} bajo las tarjetas de estilo hace que cada aplicación se abra en su estilo correspondiente (su propia barra de herramientas, una cinta o Clásico de delineación), con los cambios que haya hecho en cada una. DetailCraft no tiene estilo de barra de menús: cuando se elige para todas las aplicaciones la barra de menús de otra aplicación, DetailCraft mantiene su propia barra de herramientas.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Ajustes de DetailCraft](topic:settings) · [Llegar desde otro software de detallado](topic:coming-from)
