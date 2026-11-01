---
title: Primeros pasos con DetailCraft
summary: Qué hace DetailCraft hoy, cómo abrirlo y un primer modelo, desde las rejillas hasta un plano de taller, en diez minutos.
keywords: inicio, primer modelo, introducción, detallado de acero, armaduras, inicio rápido, tutorial, resumen
from: 3682c0d8
---

DetailCraft es la aplicación de detallado de acero y armaduras de la familia CadCraft. Usted construye un modelo 3D de una estructura de acero sobre rejillas y niveles, la conecta, y obtiene lo que necesita el taller: marcas de pieza y de conjunto, una lista de materiales, planos de taller de piezas individuales, archivos NC DSTV, un modelo IFC y una tabla de doblado para las zapatas.

Esta es una versión temprana. Hace con cuidado una lista corta de cosas en lugar de todo a la vez. Lea [Lo que todavía no está construido](topic:not-built-yet) antes de planificar un trabajo real con ella.

## Lo que hace hoy

- Rejillas y niveles que usted escribe, en milímetros.
- Pilares, vigas, diagonales y placas a partir de catálogos de perfiles publicados (AISC W, S, C, L, HSS y Pipe; europeos IPE, HEA, HEB y UPN), además de sus propios perfiles paramétricos.
- Dos conexiones: una chapa de testa atornillada de una viga al ala de un pilar, y una placa de base de pilar con cuatro pernos de anclaje. Cada una se puede copiar a todas las uniones similares.
- Taladros y despuntes escritos por posición.
- Zapatas aisladas rectangulares con parrilla inferior y arranques.
- Marcas de pieza y de conjunto que se actualizan solas después de cada cambio.
- Exportaciones: IFC4, archivos NC DSTV (perfiles en I y placas), lista de materiales como CSV, tabla de doblado como CSV, y un PDF de plano de taller de una pieza.

## Abrir DetailCraft

1. Abra DetailCraft en un navegador de escritorio: Chrome, Edge, Firefox o Safari. Consulte [Navegadores y ordenadores](common:browsers).
2. Espere a que se llene la pantalla. La barra de estado de la parte inferior dice "Ready. Open the Sample, or set grids and levels and start placing members."

La vista del modelo necesita gráficos 3D (WebGL). Si el centro de la pantalla dice "This browser could not start 3D graphics (WebGL)", consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sus modelos se quedan en su ordenador. Abrir un modelo lo lee en el navegador, y guardar descarga un archivo. No se sube nada. El guardado en la nube aún no está disponible. Consulte [Adónde van sus archivos](common:your-files). Para usar DetailCraft sin conexión más adelante, elija una vez {{ui:Guardar para uso sin conexión}} en la barra de la aplicación mientras está conectado; consulte [Trabajar sin conexión](common:offline).
:::

:::offline
Está sin conexión. DetailCraft funciona sin conexión solo si se guardó antes para uso sin conexión: el botón {{ui:Guardar para uso sin conexión}} de la barra de la aplicación dice entonces {{ui:Listo sin conexión}}. Consulte [Trabajar sin conexión](common:offline).
:::

## Mire primero el ejemplo

La forma más rápida de ver lo que produce DetailCraft es la estructura de ejemplo.

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}} de la barra de herramientas.
2. La vista muestra una estructura de dos vanos: seis pilares con placas de base, cuatro vigas con chapas de testa, una diagonal y siete zapatas con armadura.
3. Haga clic en una viga. El panel {{ui:Propiedades}} de la derecha muestra su marca de pieza, longitud de corte, peso y los taladros que hicieron las chapas de testa.
4. Abra la pestaña {{ui:Lista de materiales}} de la parte inferior para ver cada marca de pieza con su cantidad y peso.

El recorrido [Explorar la estructura de ejemplo](topic:sample-model) lo repasa pieza por pieza.

## Su primer modelo

Un modelo nuevo ya tiene rejillas de 1 a 3 por A a B a 6000 mm y dos niveles, Nivel 1 a 0 y Nivel 2 a 4000.

1. Elija {{ui:Nuevo}}. Si el modelo actual tiene cambios, DetailCraft pregunta si desea guardarlos antes.
2. Elija {{ui:Planta}} sobre la vista. La lista de niveles de al lado elige Nivel 1.
3. Elija {{ui:Pilar}} en la barra de herramientas, o pulse {{key:C}}.
4. Haga clic en la intersección de rejilla A/1. Aparece un pilar W12x50 desde el Nivel 1 hasta el Nivel 2. La barra de estado dice dónde se colocó.
5. Haga clic en B/1, A/2 y B/2 para colocar otros tres.
6. Elija Nivel 2 en la lista de niveles y después elija {{ui:Viga}} o pulse {{key:B}}.
7. Haga clic en A/1 y después en A/2. Una viga W16x26 une las cabezas de los dos pilares, con su cara superior de acero en el nivel.
8. Pulse {{key:Esc}} para volver a {{ui:Seleccionar}} y haga clic en la viga.
9. Elija {{ui:Chapas de testa}} en el grupo {{ui:Conectar}}. Ambos extremos reciben una chapa de testa atornillada, la viga se recorta para encajar, y la primera chapa de testa queda seleccionada.
10. Haga clic en la viga otra vez.
11. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. Se abre una vista previa del plano de taller de la viga. Elija {{ui:Descargar PDF}}.
12. Pulse {{key:Mod+S}} para guardar el modelo. El navegador descarga `Untitled.detailcraft.json`.

Cambie el nombre del modelo en el campo {{ui:Nombre}} de la parte superior izquierda antes de guardar, para que el archivo y todas las exportaciones lleven su nombre.

## Adónde ir después

- [Un recorrido por la pantalla](topic:workspace)
- [Preparar rejillas y niveles](topic:grids-and-levels)
- [Moverse por la vista 3D](topic:navigate-3d), con un ratón, un panel táctil o una pantalla táctil
- [Si viene de otro programa de detallado](topic:coming-from), si conoce un paquete de detallado importante
- [Usar esta ayuda](common:help)
