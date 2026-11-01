---
title: Primeros pasos con DetailCraft
summary: Qué hace DetailCraft hoy, cómo abrirlo y un primer modelo, de los ejes a un plano de taller, en diez minutos.
keywords: inicio, primer modelo, introducción, detallado de acero, varilla, inicio rápido, tutorial, resumen
from: 3682c0d8
---

DetailCraft es la aplicación de detallado de acero y varilla de la familia CadCraft. Usted arma un modelo 3D de una estructura de acero sobre ejes y niveles, lo conecta y obtiene lo que el taller necesita: marcas de pieza y de ensamblaje, una lista de materiales, planos de taller de una sola pieza, archivos NC DSTV, un modelo IFC y una planilla de doblado para las zapatas.

Esta es una versión temprana. Hace pocas cosas, pero con cuidado, en lugar de todo a la vez. Lea [Lo que aún no está construido](topic:not-built-yet) antes de planear trabajo real con ella.

## Qué hace hoy

- Ejes y niveles que usted escribe, en milímetros.
- Columnas, vigas, contravientos y placas a partir de catálogos de perfiles publicados (AISC W, S, C, L, HSS y Pipe; europeos IPE, HEA, HEB y UPN), además de sus propios perfiles paramétricos.
- Dos conexiones: una placa de extremo atornillada de una viga al patín de una columna, y una placa base de columna con cuatro varillas de anclaje. Cada una se puede copiar a todos los nudos similares.
- Agujeros y despuntes escritos por posición.
- Zapatas rectangulares aisladas con parrilla inferior y varillas de arranque.
- Marcas de pieza y de ensamblaje que se actualizan solas después de cada cambio.
- Exportaciones: IFC4, archivos NC DSTV (perfiles I y placas), lista de materiales como CSV, planilla de doblado como CSV y un PDF de plano de taller de una pieza.

## Abrir DetailCraft

1. Abra DetailCraft en un navegador de escritorio: Chrome, Edge, Firefox o Safari. Vea [Navegadores y computadoras](common:browsers).
2. Espere a que se llene la pantalla. La barra de estado, abajo, dice "Ready. Open the Sample, or set grids and levels and start placing members."

La vista del modelo necesita gráficos 3D (WebGL). Si el centro de la pantalla dice "This browser could not start 3D graphics (WebGL)", vea [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sus modelos se quedan en su computadora. Abrir un modelo lo lee en el navegador y guardar descarga un archivo. No se sube nada. Aún no se puede guardar en la nube. Vea [A dónde van sus archivos](common:your-files). Para usar DetailCraft sin conexión más adelante, elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación una vez, con conexión; vea [Trabajar sin conexión](common:offline).
:::

:::offline
No tiene conexión. DetailCraft funciona sin conexión solo si se guardó antes para ese uso: el botón {{ui:Guardar para usar sin conexión}} de la barra de la aplicación dice entonces {{ui:Lista sin conexión}}. Vea [Trabajar sin conexión](common:offline).
:::

## Mire primero el ejemplo

La forma más rápida de ver lo que hace DetailCraft es la estructura de ejemplo.

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}} de la barra de herramientas.
2. La vista muestra una estructura de dos crujías: seis columnas con placas base, cuatro vigas con placas de extremo, un contraviento y siete zapatas con varilla.
3. Haga clic en una viga. El panel {{ui:Propiedades}} de la derecha muestra su marca de pieza, longitud de corte, peso y los agujeros que hicieron las placas de extremo.
4. Abra la pestaña {{ui:Lista de materiales}}, abajo, para ver cada marca de pieza con su cantidad y su peso.

El recorrido [Explore la estructura de ejemplo](topic:sample-model) la revisa pieza por pieza.

## Su primer modelo

Un modelo nuevo ya trae ejes de 1 a 3 por A a B a 6000 mm y dos niveles, Nivel 1 en 0 y Nivel 2 en 4000.

1. Elija {{ui:Nuevo}}. Si el modelo actual tiene cambios, DetailCraft pregunta si desea guardarlos primero.
2. Elija {{ui:Planta}} arriba de la vista. La lista de niveles a su lado elige el Nivel 1.
3. Elija {{ui:Columna}} en la barra de herramientas, o pulse {{key:C}}.
4. Haga clic en la intersección de ejes A/1. Aparece una columna W12x50 del Nivel 1 al Nivel 2. La barra de estado dice dónde quedó.
5. Haga clic en B/1, A/2 y B/2 para colocar otras tres.
6. Elija el Nivel 2 en la lista de niveles y luego {{ui:Viga}}, o pulse {{key:B}}.
7. Haga clic en A/1 y luego en A/2. Una viga W16x26 une las dos cabezas de columna, con su cara superior de acero en el nivel.
8. Pulse {{key:Esc}} para volver a {{ui:Seleccionar}} y haga clic en la viga.
9. Elija {{ui:Placas de extremo}} en el grupo {{ui:Conectar}}. Ambos extremos reciben una placa de extremo atornillada, la viga se acorta para ajustar y la primera placa de extremo queda seleccionada.
10. Haga clic otra vez en la viga.
11. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. Se abre una vista previa del plano de taller de la viga. Elija {{ui:Descargar PDF}}.
12. Pulse {{key:Mod+S}} para guardar el modelo. El navegador descarga `Untitled.detailcraft.json`.

Cambie el nombre del modelo en el campo {{ui:Nombre}}, arriba a la izquierda, antes de guardar, para que el archivo y cada exportación lleven ese nombre.

## A dónde ir después

- [Un recorrido por la pantalla](topic:workspace)
- [Configure ejes y niveles](topic:grids-and-levels)
- [Muévase por la vista 3D](topic:navigate-3d), con mouse, trackpad o pantalla táctil
- [Si viene de otro software de detallado](topic:coming-from), si conoce un paquete grande de detallado
- [Cómo usar esta ayuda](common:help)
