---
title: Primeros pasos con DetailCraft
summary: Qué hace DetailCraft hoy, cómo abrirlo y un primer modelo, desde los ejes hasta un plano de taller, en diez minutos.
keywords: inicio, primer modelo, introducción, detallado de acero, varilla, inicio rápido, tutorial, panorama general
from: e4f16bbe
---

DetailCraft es la aplicación de detallado de acero y de varilla de la familia CadCraft. Usted construye un modelo 3D de una estructura de acero sobre ejes y niveles, la conecta y obtiene lo que necesita el taller: marcas de pieza y de ensamblaje, una lista de materiales, planos de taller de una pieza, archivos NC DSTV, un modelo IFC y una tabla de doblado para las zapatas.

Esta es una versión temprana. Hace una lista corta de cosas con cuidado, en lugar de todo a la vez. Lea [Lo que todavía no está disponible](topic:not-built-yet) antes de planear trabajo real con ella.

## Lo que hace hoy

- Ejes y niveles que usted escribe, en milímetros.
- Columnas, vigas, contraventos y placas a partir de catálogos de perfiles publicados (AISC W, S, C, L, HSS y Tubo; IPE, HEA, HEB y UPN europeos; UB, UC, PFC, EA, UEA, SHS, RHS y CHS del Reino Unido), además de sus propios perfiles paramétricos.
- Dos conexiones: una placa de extremo atornillada de una viga a un patín de columna, y una placa base de columna con cuatro varillas de anclaje. Cada una puede copiarse a cada junta similar.
- Agujeros y recortes que usted escribe según la posición.
- Zapatas aisladas rectangulares con una malla inferior y varillas de arranque.
- Marcas de pieza y de ensamblaje que se actualizan solas después de cada cambio.
- Exportaciones: IFC4, archivos NC DSTV (perfiles I y placas), lista de materiales en CSV, tabla de doblado en CSV y un PDF de plano de taller de una pieza.

## Abrir DetailCraft

1. Abra DetailCraft en un navegador de escritorio: Chrome, Edge, Firefox o Safari. Vea [Navegadores y computadoras](common:browsers).
2. Espere a que la pantalla se llene. La barra de estado de la parte inferior dice "Listo. Abra el Ejemplo, o defina ejes y niveles y empiece a colocar miembros."

La vista del modelo necesita gráficos 3D (WebGL). Si en el centro de la pantalla dice "Este navegador no pudo iniciar los gráficos 3D (WebGL)", vea [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Sus modelos se quedan en su computadora. Al abrir un modelo, el navegador lo lee, y al guardar se descarga un archivo. No se sube nada. El guardado en la nube todavía no está disponible. Vea [Dónde están sus archivos](common:your-files). Para usar DetailCraft sin conexión más adelante, elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación una vez mientras esté en línea; vea [Trabajar sin conexión](common:offline).
:::

:::offline
Está sin conexión. DetailCraft funciona sin conexión solo si antes se guardó para uso sin conexión: el botón {{ui:Guardar para usar sin conexión}} de la barra de la aplicación debe mostrar {{ui:Lista sin conexión}}. Vea [Trabajar sin conexión](common:offline).
:::

## Vea primero el ejemplo

La forma más rápida de ver lo que hace DetailCraft es el marco de ejemplo.

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}} de la barra de herramientas.
2. La vista muestra un marco de dos crujías: seis columnas con placas base, cuatro vigas con placas de extremo, un contraviento y siete zapatas con varillas.
3. Haga clic en una viga. El panel {{ui:Propiedades}} de la derecha muestra su marca de pieza, su longitud de corte, su peso y los agujeros que hicieron las placas de extremo.
4. Abra la pestaña {{ui:Lista de materiales}} en la parte inferior para ver cada marca de pieza con su cantidad y su peso.

El recorrido [Explore el marco de ejemplo](topic:sample-model) lo muestra pieza por pieza.

## Su primer modelo

Un modelo nuevo ya tiene los ejes 1 a 3 por A a B, a 6000 mm, y dos niveles: Nivel 1 en 0 y Nivel 2 en 4000.

1. Elija {{ui:Nuevo}}. Si el modelo actual tiene cambios, DetailCraft pregunta si desea guardarlos primero.
2. Elija {{ui:Planta}} sobre la vista. La lista de niveles junto a ellos elige el Nivel 1.
3. Elija {{ui:Columna}} en la barra de herramientas, o pulse {{key:C}}.
4. Haga clic en la intersección de ejes A/1. Aparece una columna W12x50 desde el Nivel 1 hasta el Nivel 2. La barra de estado indica dónde quedó.
5. Haga clic en B/1, A/2 y B/2 para colocar tres más.
6. Elija el Nivel 2 en la lista de niveles, y luego elija {{ui:Viga}} o pulse {{key:B}}.
7. Haga clic en A/1, y luego en A/2. Una viga W16x26 une las dos cabezas de columna, con su parte superior de acero en el nivel.
8. Pulse {{key:Esc}} para volver a {{ui:Seleccionar}} y luego haga clic en la viga.
9. Elija {{ui:Placas de extremo}} en el grupo {{ui:Conectar}}. Ambos extremos reciben una placa de extremo atornillada, la viga se recorta para ajustarse, y la primera placa de extremo queda seleccionada.
10. Haga clic en la viga otra vez.
11. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. Se abre una vista previa del plano de taller de la viga. Elija {{ui:Descargar PDF}}.
12. Pulse {{key:Mod+S}} para guardar el modelo. El navegador descarga `Untitled.detailcraft.json`.

Renombre el modelo en el campo {{ui:Nombre}}, arriba a la izquierda, antes de guardar, para que el archivo y cada exportación lleven su nombre.

## Adónde ir después

- [Un recorrido por la pantalla](topic:workspace)
- [Configurar ejes y niveles](topic:grids-and-levels)
- [Moverse por la vista 3D](topic:navigate-3d), con ratón, panel táctil o pantalla táctil
- [Venir de otro software de detallado](topic:coming-from), si conoce un paquete de detallado grande
- [Usar esta ayuda](common:help)
