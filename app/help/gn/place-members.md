---
title: Colocar columnas, vigas y riostras
summary: Elegí perfil, material y posición, y después clicá intersecciones de grilla o escribilas para colocar miembros de acero.
keywords: columna, viga, riostra, miembro, colocar, perfil, material, rotación, posición, desplazamiento, insertar, agregar por grilla
from: d6db0dc1
---

Los miembros se colocan en intersecciones de grilla: una columna en una, una viga o una riostra entre dos. Primero armá [grillas y niveles](topic:grids-and-levels).

## Elegir una herramienta y sus opciones

1. Elegí {{ui:Columna}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) o {{ui:Riostra}} ({{key:R}}) en el grupo {{ui:Colocar}}.
2. El panel {{ui:Propiedades}} de la derecha pasa a "Colocar una columna" (o viga, o riostra) y muestra las opciones para el próximo miembro:
   - {{ui:Perfil}}: elegí de la lista. Los tamaños están agrupados por catálogo (formas W, canales, ángulos, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, y tus perfiles personalizados). Ver [Catálogo de perfiles](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posición}}: dónde se ubica la sección sobre la línea entre los dos puntos: {{ui:Tope del acero sobre la línea}}, {{ui:Centrado sobre la línea}} o {{ui:Base sobre la línea}}.
   - {{ui:Rotación (°)}}: gira la sección alrededor del eje propio del miembro.
   - {{ui:Hasta}} (solo columnas): {{ui:El próximo nivel superior}}, o el nombre de un nivel.
3. Debajo de las opciones, una caja {{ui:Perfil}} lista las dimensiones de la sección elegida, el área, la masa por metro y el catálogo del que viene.

Los valores por defecto son W12x50 en A992 para columnas (centrada), W16x26 en A992 para vigas (tope del acero sobre la línea) y HSS6x6x1/4 en A500 Gr C para riostras (centrada). Las opciones quedan fijas hasta que las cambiés.

## Colocar clicando

### Una columna

1. Elegí {{ui:Planta}} y elegí el nivel donde empieza la columna.
2. Elegí {{ui:Columna}}.
3. Acercá el puntero a una intersección. El punto más cercano se ilumina y la barra de estado lo nombra.
4. Clicá. La columna va desde ese nivel hasta el próximo nivel superior (o hasta el nivel de {{ui:Hasta}}). La barra de estado dice, por ejemplo, "Columna W12x50 en A/1, Nivel 1 a Nivel 2."
5. Seguí clicando para colocar más. Presioná {{key:Esc}} cuando termines.

Si no hay nivel encima del que clicaste, la barra de estado dice "No hay nivel encima de Nivel 2 que la columna pueda alcanzar. Primero agregá un nivel."

### Una viga

1. Elegí {{ui:Planta}} y elegí el nivel de la viga.
2. Elegí {{ui:Viga}}.
3. Clicá la primera intersección. La barra de estado dice "Desde A/1 en Nivel 2. Ahora clicá el otro extremo (Esc cancela)." Una línea punteada sigue al puntero.
4. Clicá la segunda intersección. La viga aparece.
5. Clicá otra vez para empezar la próxima viga, o presioná {{key:Esc}}.

{{key:Esc}} después del primer clic cancela solo ese punto; un segundo {{key:Esc}} guarda la herramienta.

### Una riostra

Una riostra va entre dos intersecciones de niveles distintos, así que es más fácil en {{ui:Elevación}}.

1. Elegí {{ui:Elevación}} y elegí la línea de grilla con letra donde está la riostra.
2. Elegí {{ui:Riostra}}.
3. Clicá el extremo inferior, y después el superior.

Las elevaciones existen solo para líneas de grilla con letra. Para una riostra en un pórtico sobre una línea numerada (de A a B), usá {{ui:3D}} o el formulario {{ui:Agregar por grilla}} de abajo.

:::touch
En pantalla táctil, tocá cerca de la intersección: un toque elige el punto más cercano dentro de una distancia corta, y no hace nada si no hay ningún punto cerca. No hay resaltado antes de tocar, así que revisá el mensaje de la barra de estado después de cada toque. Arrastrar con un dedo gira o desplaza la vista en lugar de colocar.
:::

## Colocar por grilla, sin clicar

Cada herramienta de colocación tiene un formulario {{ui:Agregar por grilla}} al pie del panel {{ui:Propiedades}}. Funciona solo con teclado y no necesita la vista 3D.

1. Elegí la herramienta, por ejemplo {{ui:Viga}}.
2. En {{ui:Agregar por grilla}}, elegí {{ui:Desde grilla (letra)}}, {{ui:Desde grilla (número)}} y {{ui:Desde nivel}}.
3. Elegí {{ui:Hasta grilla (letra)}}, {{ui:Hasta grilla (número)}} y {{ui:Hasta nivel}}.
4. Elegí {{ui:Agregar}}.

Para una columna o una zapata el formulario tiene un solo punto: {{ui:Grilla (letra)}}, {{ui:Grilla (número)}} y {{ui:Nivel}}.

## Cambiar un miembro después de colocarlo

1. Presioná {{key:Esc}} (o elegí {{ui:Seleccionar}}, {{key:V}}) y clicá el miembro.
2. En el panel {{ui:Propiedades}}, cambiá {{ui:Nombre}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posición}} o {{ui:Rotación (°)}}.
3. Para moverlo, editá la x, y y z de {{ui:Inicio}} o {{ui:Fin}} bajo {{ui:Extremos (x, y, z mm)}}. Debajo de los campos ves el nombre de grilla de cada extremo, o sus coordenadas si está fuera de la grilla.

Cada cambio es un paso de Deshacer. Debajo de los campos ves la {{ui:Marca de pieza}} del miembro, su {{ui:Conjunto}}, su {{ui:Largo de corte}}, su {{ui:Peso}} (bruto: no se descuentan agujeros ni copes) y de qué catálogo viene el perfil.

Los miembros todavía no se pueden arrastrar ni hacer en matriz. Para hacer otro igual, copiá y pegá, o duplicalo ({{key:Mod+D}}): ver [Copiar, pegar y duplicar](topic:copy-paste).

## Eliminar un miembro

Seleccionalo y presioná {{key:Delete}} o {{key:Backspace}}, o elegí {{ui:Eliminar}}. Las conexiones que lo tienen también se van. {{key:Mod+Z}} devuelve todo.

## Cosas para saber

- **Hacia dónde mira una columna.** Con {{ui:Rotación (°)}} 0, las alas de la columna miran a lo largo de x, hacia las líneas de grilla numeradas vecinas. Una viga de la grilla 1 a la grilla 2 entra en un ala; una viga de A a B entra en el alma. Las placas de extremo se construyen solo en las alas, así que si tus vigas van de A a B, dales a esas columnas una rotación de 90.
- **Las vigas en un nivel cuelgan por debajo** con el valor por defecto {{ui:Tope del acero sobre la línea}}. Elegí {{ui:Centrado sobre la línea}} si tus niveles son ejes de miembros.
- **Las columnas van de nivel a nivel.** Para una columna que atraviesa dos pisos, poné {{ui:Hasta}} en el nivel más alto.
- **Las vigas inclinadas** están permitidas (elegí extremos en niveles distintos), pero todavía no se construyen placas de extremo en ellas.

Siguiente: [Conectar vigas a columnas con placas de extremo](topic:end-plates).
