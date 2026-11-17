---
title: Menús, teclas y ratón
summary: Elija un estilo de menú que coincida con su forma de trabajar, asigne su propia tecla a cualquier comando, mueva comandos entre pestañas de la cinta y configure qué hacen la rueda y los botones del ratón.
keywords: estilo de menú, menús, cinta, barra de herramientas, línea de comandos, atajos de teclado, teclas de acceso rápido, teclas, personalizar, reasignar, ratón, rueda, invertir, dirección del zoom, botón central, botón derecho, encuadrar, orbitar, exportar, importar, cambiar, familiar, dibujo clásico, cinta de acero
from: 4132c6e5
---

Los comandos de DetailCraft son los mismos sin importar cómo llegue a ellos. Un **estilo de menú** solo decide dónde aparecen en pantalla, cómo se llaman allí y con qué teclas se ejecutan. Elija uno en {{ui:Configuración}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menús, teclas y ratón}}; el cambio se aplica de inmediato, y este navegador lo recuerda.

## Los tres estilos

| Estilo | Qué obtiene |
|---|---|
| {{ui:DetailCraft}} | La barra de herramientas propia de DetailCraft ({{ui:Archivo}}, Colocar, {{ui:Conectar}}, {{ui:Edición}}, {{ui:Salida}}) y sus teclas de una sola letra: {{key:V}} seleccionar, {{key:B}} viga, {{key:C}} columna, {{key:R}} contraviento, {{key:P}} placa, {{key:F}} zapata, {{key:S}} escalera. El inicial. |
| {{ui:Dibujo clásico}} | Para quienes escriben comandos: una pequeña cinta ({{ui:Inicio}}, {{ui:Vista}}, {{ui:Salida}}) y una línea de comandos. Escriba BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (deshacer), ZOOM, PLAN, 3D, DRAWINGS, NC o HELP y pulse {{key:Enter}}; {{key:Enter}} sin nada repite el último comando, y {{key:Esc}} lo borra. Comience a escribir en cualquier parte y las letras van a la línea de comandos. El botón central encuadra; en 3D, {{key:Shift}} y el botón central orbitan. |
| {{ui:Cinta de acero}} | Pestañas como las de los programas de detallado de acero: {{ui:Modelado}} (miembros, concreto, escaleras), {{ui:Detallado}} (conexiones), {{ui:Edición}}, {{ui:Planos}} (planos e informes), {{ui:Fabricación}} (archivos NC, IFC) y {{ui:Vista}}, con un menú {{ui:Archivo}} y botones rápidos a la derecha. Las teclas de una sola letra se mantienen. El botón central encuadra; en 3D, el botón izquierdo orbita. |

Todos los estilos conservan {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} y {{key:Mod+A}}. Las cintas también contienen los botones de la barra de vista {{ui:3D}}, {{ui:Planta}}, {{ui:Elevación}} y {{ui:Ajustar}}.

:::tip
Una tecla que pertenece al diseño propio de DetailCraft, pero que su estilo asignó a otro comando, no hace nada, y la línea de estado indica adónde fue ese comando ("En Mi cinta de acero, Columna es Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} y las flechas siempre conservan su función, y mientras una pieza se está colocando a medias o una copia sigue al puntero, las letras pertenecen a DetailCraft.
:::

## Hágalo suyo

1. Elija el estilo más parecido a lo que quiere y haga clic en {{ui:Personalizar…}}.
2. En {{ui:Teclas y menús}}, busque un comando (el cuadro de búsqueda ayuda). Haga clic en {{ui:Agregar una tecla}} y pulse la tecla, o dos teclas seguidas para una tecla de dos letras. Haga clic en una tecla para quitarla.
3. Con una cinta, {{ui:Dónde está}} mueve el comando a otra pestaña y panel, al menú {{ui:Archivo}}, o a {{ui:Solo teclas}}.
4. En {{ui:Ratón}}, configure la rueda, los botones que encuadran las plantas y elevaciones, y lo que hace cada botón en la vista 3D.
5. Asígnele un nombre y haga clic en {{ui:Guardar}}.

Al guardar un estilo integrado se crea su propia copia ("Mi cinta de acero"); el integrado nunca cambia. Una tecla asignada a dos comandos se muestra en rojo y debe corregirse antes de poder guardar.

## Ratón

- **Rueda del ratón**: {{ui:Girar hacia arriba acerca}} (el inicial) o {{ui:Girar hacia arriba aleja}}, y qué tan rápido. Un pellizco en el trackpad siempre hace zoom en el sentido en que se mueven sus dedos.
- **Encuadrar las plantas y elevaciones con**: el botón central, el botón derecho, o ambos. Con la herramienta {{ui:Seleccionar}}, el botón izquierdo siempre dibuja una ventana de selección.
- **Arrastrar en la vista 3D**: {{ui:Propio de cada vista}} conserva los botones de DetailCraft (izquierdo orbita, central hace zoom, derecho encuadra). O configure cada botón para orbitar, encuadrar, hacer zoom o nada; {{key:Shift}} con un botón que orbita o encuadra intercambia los dos.

## Llévelo consigo

{{ui:Exportar}} guarda el estilo en uso como un pequeño archivo `.ccinput.json`; {{ui:Importar…}} agrega uno, desde otro equipo o de un colega. Un archivo importado solo puede apuntar a los comandos propios de DetailCraft: lo demás se omite y se cuenta en la línea de estado. {{ui:Eliminar este estilo}} quita uno de los suyos.

:::note
Estas configuraciones se quedan en este navegador. {{ui:Usar este estilo en todas las apps}}, bajo las tarjetas de estilo, hace que cada app abra en su estilo correspondiente (su propia barra de herramientas, una cinta o Dibujo clásico), con los cambios que hizo en cada app. DetailCraft no tiene estilo de barra de menús: cuando se elige la barra de menús de otra app para todas las apps, DetailCraft conserva su propia barra de herramientas.
:::

Relacionado: [Teclado y ratón](topic:keyboard) · [Configuración de DetailCraft](topic:settings) · [Cómo migrar desde otro software de detallado](topic:coming-from)
