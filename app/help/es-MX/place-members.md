---
title: Colocar columnas, vigas y contravientos
summary: Elija un perfil, un material y una posición, y luego haga clic en las intersecciones de los ejes o escriba sus coordenadas para colocar miembros de acero.
keywords: columna, viga, contraviento, miembro, colocar, perfil, material, rotación, posición, desfase, insertar, agregar por ejes
from: d6db0dc1
---

Los miembros se colocan en las intersecciones de los ejes: una columna en una, una viga o un contraviento entre dos. Configure primero los [ejes y niveles](topic:grids-and-levels).

## Elija una herramienta y sus opciones

1. Elija {{ui:Columna}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) o {{ui:Contraviento}} ({{key:R}}) en el grupo {{ui:Colocar}}.
2. El panel {{ui:Propiedades}} de la derecha cambia a "Colocar una columna" (o viga, o contraviento) y muestra las opciones del siguiente miembro:
   - {{ui:Perfil}}: elija de la lista. Los tamaños se agrupan por catálogo (perfiles W, Canales, Ángulos, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, y sus perfiles personalizados). Vea [Catálogo de perfiles](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posición}}: dónde se ubica la sección sobre la línea entre los dos puntos: {{ui:Parte superior del acero sobre la línea}}, {{ui:Centrado en la línea}} o {{ui:Parte inferior sobre la línea}}.
   - {{ui:Rotación (°)}}: gira la sección sobre el eje propio del miembro.
   - {{ui:Hasta}} (solo columnas): {{ui:El siguiente nivel hacia arriba}}, o el nombre de un nivel.
3. Debajo de las opciones, un recuadro {{ui:Perfil}} enumera las dimensiones de la sección elegida, el área, la masa por metro y el catálogo del que proviene.

Los valores predeterminados son W12x50 en A992 para columnas (centrada), W16x26 en A992 para vigas (parte superior del acero sobre la línea) y HSS6x6x1/4 en A500 Gr C para contravientos (centrado). Las opciones se mantienen hasta que las cambie.

## Colocar haciendo clic

### Una columna

1. Elija {{ui:Planta}} y seleccione el nivel en el que empieza la columna.
2. Elija {{ui:Columna}}.
3. Mueva el puntero cerca de una intersección. El punto más cercano se ilumina y la barra de estado lo identifica.
4. Haga clic. La columna va desde ese nivel hasta el siguiente nivel hacia arriba (o hasta el nivel de {{ui:Hasta}}). La barra de estado dice, por ejemplo, "Columna W12x50 en A/1, Nivel 1 a Nivel 2."
5. Siga haciendo clic para colocar más. Presione {{key:Esc}} cuando termine.

Si no hay un nivel por encima del que hizo clic, la barra de estado dice "No hay un nivel por encima de Nivel 2 que la columna pueda alcanzar. Primero agregue un nivel."

### Una viga

1. Elija {{ui:Planta}} y seleccione el nivel de la viga.
2. Elija {{ui:Viga}}.
3. Haga clic en la primera intersección. La barra de estado dice "Desde A/1 en Nivel 2. Ahora haga clic en el otro extremo (Esc cancela)." Una línea discontinua sigue al puntero.
4. Haga clic en la segunda intersección. La viga aparece.
5. Haga clic de nuevo para empezar la siguiente viga, o presione {{key:Esc}}.

{{key:Esc}} después del primer clic cancela solo ese punto; un segundo {{key:Esc}} guarda la herramienta.

### Un contraviento

Un contraviento va entre dos intersecciones en niveles distintos, así que es más fácil en {{ui:Elevación}}.

1. Elija {{ui:Elevación}} y seleccione la línea de eje con letra en la que está el contraviento.
2. Elija {{ui:Contraviento}}.
3. Haga clic en el extremo inferior y luego en el superior.

Las elevaciones solo existen para los ejes con letra. Para un contraviento en un marco a lo largo de un eje numerado (de A a B), use {{ui:3D}} o el formulario {{ui:Agregar por ejes}} de abajo.

:::touch
En una pantalla táctil, toque cerca de la intersección: un toque elige el punto más cercano dentro de una distancia corta y no hace nada si no hay ningún punto cerca. No hay resaltado antes de tocar, así que revise el mensaje de la barra de estado después de cada toque. Arrastrar con un dedo gira o desplaza la vista en lugar de colocar.
:::

## Colocar por ejes, sin hacer clic

Cada herramienta de colocación tiene un formulario {{ui:Agregar por ejes}} al pie del panel {{ui:Propiedades}}. Funciona solo con el teclado y no necesita la vista 3D.

1. Elija la herramienta, por ejemplo {{ui:Viga}}.
2. En {{ui:Agregar por ejes}}, elija {{ui:Desde el eje (letra)}}, {{ui:Desde el eje (número)}} y {{ui:Desde el nivel}}.
3. Elija {{ui:Hasta el eje (letra)}}, {{ui:Hasta el eje (número)}} y {{ui:Hasta el nivel}}.
4. Elija {{ui:Agregar}}.

Para una columna o una cimentación, el formulario tiene un solo punto: {{ui:Eje (letra)}}, {{ui:Eje (número)}} y {{ui:Nivel}}.

## Cambiar un miembro después de colocarlo

1. Presione {{key:Esc}} (o elija {{ui:Seleccionar}}, {{key:V}}) y haga clic en el miembro.
2. En el panel {{ui:Propiedades}}, cambie {{ui:Nombre}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posición}} o {{ui:Rotación (°)}}.
3. Para moverlo, edite la x, la y y la z de {{ui:Inicio}} o {{ui:Final}} en {{ui:Extremos (x, y, z mm)}}. Debajo de los campos aparece el nombre del eje de cada extremo, o sus coordenadas si está fuera de la rejilla.

Cada cambio es un paso de deshacer. Debajo de los campos verá la {{ui:Marca de pieza}} del miembro, su {{ui:Ensamble}}, su {{ui:Longitud de corte}}, su {{ui:Peso}} (bruto: no se descuentan perforaciones ni recortes) y de qué catálogo proviene el perfil.

Todavía no se pueden arrastrar ni hacer matrices de miembros. Para hacer otro igual, copie y pegue, o duplíquelo ({{key:Mod+D}}): vea [Copiar, pegar y duplicar](topic:copy-paste).

## Eliminar un miembro

Selecciónelo y presione {{key:Delete}} o {{key:Backspace}}, o elija {{ui:Eliminar}}. Las conexiones que dependen de él también se eliminan. {{key:Mod+Z}} devuelve todo.

## Cosas que debe saber

- **Hacia dónde mira una columna.** Con {{ui:Rotación (°)}} en 0, los patines de una columna miran a lo largo de x, hacia los ejes numerados vecinos. Una viga del eje 1 al eje 2 se conecta al patín; una viga de A a B se conecta al alma. Las placas de extremo solo se construyen en los patines, así que si sus vigas van de A a B, dé a esas columnas una rotación de 90.
- **Las vigas en un nivel cuelgan por debajo de él** con la opción predeterminada {{ui:Parte superior del acero sobre la línea}}. Elija {{ui:Centrado en la línea}} si sus niveles son ejes de miembros.
- **Las columnas van de nivel a nivel.** Para una columna que atraviesa dos pisos, ponga {{ui:Hasta}} en el nivel más alto.
- **Se permiten vigas inclinadas** (elija extremos en niveles distintos), pero todavía no se construyen placas de extremo en ellas.

Siguiente: [Conectar vigas a columnas con placas de extremo](topic:end-plates).
