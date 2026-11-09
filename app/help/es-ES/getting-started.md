---
title: Primeros pasos con DetailCraft
summary: Qué hace DetailCraft hoy, cómo abrirlo y un primer modelo desde las rejillas hasta un plano de taller en diez minutos.
keywords: inicio, primer modelo, introducción, detallado de acero, armadura, inicio rápido, tutorial, visión general
from: e4f16bbe
---

DetailCraft es la aplicación de detallado de acero y armadura de la familia CadCraft. Usted construye un modelo 3D de un marco de acero sobre rejillas y niveles, lo conecta y obtiene lo que necesita el taller: marcas de pieza y de conjunto, una lista de materiales, planos de taller de una sola pieza, archivos NC DSTV, un modelo IFC y una tabla de doblado para las zapatas.

Esta es una versión temprana. Hace bien una lista corta de cosas en lugar de todo a la vez. Lea [Lo que todavía no está incluido](topic:not-built-yet) antes de planificar un trabajo real con ella.

## Lo que hace hoy

- Rejillas y niveles que introduce usted, en milímetros.
- Pilares, vigas, diagonales y placas a partir de catálogos publicados de perfiles (AISC W, S, C, L, HSS y Pipe; europeos IPE, HEA, HEB y UPN; británicos UB, UC, PFC, EA, UEA, SHS, RHS y CHS), además de sus propios perfiles paramétricos.
- Dos conexiones: una chapa de testa atornillada desde una viga a un ala de pilar, y una placa de base de pilar con cuatro barras de anclaje. Cada una se puede copiar a todas las uniones similares.
- Agujeros y recortes introducidos por posición.
- Zapatas aisladas rectangulares con emparrillado inferior y barras de arranque.
- Marcas de pieza y de conjunto que se actualizan solas tras cada cambio.
- Exportaciones: IFC4, archivos NC DSTV (perfiles en I y placas), lista de materiales en CSV, tabla de doblado en CSV y un PDF de plano de taller de una pieza.

## Abrir DetailCraft

1. Abra DetailCraft en un navegador de escritorio: Chrome, Edge, Firefox o Safari. Consulte [Navegadores y equipos](common:browsers).
2. Espere a que la pantalla se llene. La barra de estado de la parte inferior dice «Listo. Abra el Ejemplo, o defina rejillas y niveles y empiece a colocar barras».

La vista del modelo necesita gráficos 3D (WebGL). Si en el centro de la pantalla aparece «Este navegador no pudo iniciar los gráficos 3D (WebGL)», consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sus modelos se quedan en su equipo. Al abrir un modelo, el navegador lo lee, y al guardar se descarga un archivo. No se sube nada. El guardado en la nube todavía no está disponible. Consulte [Dónde se guardan sus archivos](common:your-files). Para usar DetailCraft más adelante sin conexión, elija {{ui:Guardar para uso sin conexión}} en la barra de aplicación una vez, estando en línea; consulte [Trabajar sin conexión](common:offline).
:::

:::offline
Está sin conexión. DetailCraft funciona sin conexión solo si antes se guardó para uso sin conexión: el botón {{ui:Guardar para uso sin conexión}} de la barra de aplicación debe mostrar entonces {{ui:Listo sin conexión}}. Consulte [Trabajar sin conexión](common:offline).
:::

## Vea primero el ejemplo

La forma más rápida de ver lo que genera DetailCraft es el marco de ejemplo.

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}} de la barra de herramientas.
2. La vista muestra un marco de dos vanos: seis pilares con placas de base, cuatro vigas con chapas de testa, una diagonal y siete zapatas con armadura.
3. Haga clic en una viga. El panel {{ui:Propiedades}} de la derecha muestra su marca de pieza, longitud de corte, peso y los agujeros que hicieron las chapas de testa.
4. Abra la pestaña {{ui:Lista de materiales}} en la parte inferior para ver cada marca de pieza con su cantidad y peso.

El recorrido [Explore el marco de ejemplo](topic:sample-model) lo repasa pieza a pieza.

## Su primer modelo

Un modelo nuevo ya tiene las rejillas 1 a 3 por A a B a 6000 mm y dos niveles: Nivel 1 en 0 y Nivel 2 en 4000.

1. Elija {{ui:Nuevo}}. Si el modelo actual tiene cambios, DetailCraft le pregunta si desea guardarlos primero.
2. Elija {{ui:Planta}} encima de la vista. La lista de niveles junto a ella selecciona el Nivel 1.
3. Elija {{ui:Pilar}} en la barra de herramientas, o pulse {{key:C}}.
4. Haga clic en la intersección de rejillas A/1. Aparece un pilar W12x50 desde el Nivel 1 hasta el Nivel 2. La barra de estado indica dónde se colocó.
5. Haga clic en B/1, A/2 y B/2 para colocar otros tres.
6. Seleccione el Nivel 2 en la lista de niveles y elija {{ui:Viga}} o pulse {{key:B}}.
7. Haga clic en A/1 y después en A/2. Aparece una viga W16x26 que une las cabezas de los dos pilares, con su cara superior de acero en el nivel.
8. Pulse {{key:Esc}} para volver a {{ui:Seleccionar}} y haga clic en la viga.
9. Elija {{ui:Chapas de testa}} en el grupo {{ui:Conectar}}. Ambos extremos reciben una chapa de testa atornillada, la viga se recorta para ajustarse y la primera chapa de testa queda seleccionada.
10. Haga clic de nuevo en la viga.
11. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. Se abre una vista previa del plano de taller de la viga. Elija {{ui:Descargar PDF}}.
12. Pulse {{key:Mod+S}} para guardar el modelo. El navegador descarga `Sin título.detailcraft.json`.

Cambie el nombre del modelo en el campo {{ui:Nombre}}, arriba a la izquierda, antes de guardar, para que el archivo y cada exportación lleven ese nombre.

## Qué hacer a continuación

- [Recorrido por la pantalla](topic:workspace)
- [Configurar rejillas y niveles](topic:grids-and-levels)
- [Moverse por la vista 3D](topic:navigate-3d), con ratón, panel táctil o pantalla táctil
- [Si viene de otro software de detallado](topic:coming-from), si conoce un paquete de detallado importante
- [Usar esta ayuda](common:help)
