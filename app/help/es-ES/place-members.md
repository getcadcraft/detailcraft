---
title: Colocar pilares, vigas y diagonales
summary: Elija un perfil, un material y una posición, y después haga clic en las intersecciones de la rejilla o escriba sus coordenadas para colocar piezas de acero.
keywords: pilar, viga, diagonal, pieza, colocar, perfil, material, giro, posición, desplazamiento, insertar, añadir por rejilla
from: d6db0dc1
---

Las piezas se colocan en las intersecciones de la rejilla: un pilar en una, una viga o una diagonal entre dos. Configure antes las [rejillas y niveles](topic:grids-and-levels).

## Elegir una herramienta y sus opciones

1. Elija {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) o {{ui:Diagonal}} ({{key:R}}) en el grupo {{ui:Colocar}}.
2. El panel {{ui:Propiedades}} de la derecha pasa a «Colocar un pilar» (o una viga, o una diagonal) y muestra las opciones de la siguiente pieza:
   - {{ui:Perfil}}: elíjalo de la lista. Los tamaños se agrupan por catálogo (perfiles W, perfiles en U, cantoneras, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS y sus perfiles a medida). Consulte el [Catálogo de perfiles](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 o S355.
   - {{ui:Posición}}: dónde se sitúa la sección sobre la línea entre los dos puntos: {{ui:Cara superior del acero sobre la línea}}, {{ui:Centrada sobre la línea}} o {{ui:Cara inferior sobre la línea}}.
   - {{ui:Giro (°)}}: gira la sección alrededor del propio eje de la pieza.
   - {{ui:Hasta}} (solo pilares): {{ui:El siguiente nivel}}, o el nombre de un nivel.
3. Debajo de las opciones, un recuadro {{ui:Perfil}} enumera las dimensiones de la sección elegida, su área, la masa por metro y el catálogo de origen.

Los valores por defecto son W12x50 en A992 para pilares (centrado), W16x26 en A992 para vigas (cara superior sobre la línea) y HSS6x6x1/4 en A500 Gr C para diagonales (centrado). Las opciones se mantienen hasta que las cambie.

## Colocar haciendo clic

### Un pilar

1. Elija {{ui:Planta}} y seleccione el nivel en el que empieza el pilar.
2. Elija {{ui:Pilar}}.
3. Acerque el puntero a una intersección. El punto más cercano se ilumina y la barra de estado lo nombra.
4. Haga clic. El pilar va desde ese nivel hasta el siguiente (o hasta el nivel {{ui:Hasta}}). La barra de estado indica, por ejemplo, «Pilar W12x50 en A/1, Nivel 1 a Nivel 2».
5. Siga haciendo clic para colocar más. Pulse {{key:Esc}} al terminar.

Si no hay un nivel por encima del que ha marcado, la barra de estado indica: «No hay ningún nivel por encima de Nivel 2 que alcance el pilar. Añada antes un nivel.»

### Una viga

1. Elija {{ui:Planta}} y seleccione el nivel de la viga.
2. Elija {{ui:Viga}}.
3. Haga clic en la primera intersección. La barra de estado indica «Desde A/1 en Nivel 2. Ahora haga clic en el otro extremo (Esc cancela)». Una línea discontinua sigue al puntero.
4. Haga clic en la segunda intersección. La viga aparece.
5. Haga clic de nuevo para empezar la siguiente viga, o pulse {{key:Esc}}.

{{key:Esc}} tras el primer clic cancela solo ese punto; una segunda pulsación de {{key:Esc}} retira la herramienta.

### Una diagonal

Una diagonal va entre dos intersecciones de niveles distintos, así que es más fácil en {{ui:Alzado}}.

1. Elija {{ui:Alzado}} y seleccione la línea de rejilla con letra en la que está la diagonal.
2. Elija {{ui:Diagonal}}.
3. Haga clic en el extremo inferior y luego en el superior.

Los alzados solo existen para las líneas de rejilla con letra. Para una diagonal en un pórtico situado en una línea numerada (de A a B), use {{ui:3D}} o el formulario {{ui:Añadir por rejilla}} de más abajo.

:::touch
En una pantalla táctil, toque cerca de la intersección: un toque selecciona el punto más cercano a poca distancia y no hace nada si no hay ningún punto cerca. No hay resaltado antes de tocar, así que compruebe el mensaje de la barra de estado tras cada toque. Un arrastre con un dedo gira o desplaza la vista en lugar de colocar.
:::

## Colocar por rejilla, sin hacer clic

Cada herramienta de colocación tiene un formulario {{ui:Añadir por rejilla}} en la parte inferior del panel {{ui:Propiedades}}. Funciona solo con el teclado y no necesita la vista 3D.

1. Elija la herramienta, por ejemplo {{ui:Viga}}.
2. En {{ui:Añadir por rejilla}}, elija {{ui:Desde la rejilla (letra)}}, {{ui:Desde la rejilla (número)}} y {{ui:Desde el nivel}}.
3. Elija {{ui:Hasta la rejilla (letra)}}, {{ui:Hasta la rejilla (número)}} y {{ui:Hasta el nivel}}.
4. Elija {{ui:Añadir}}.

Para un pilar o una cimentación, el formulario tiene un solo punto: {{ui:Rejilla (letra)}}, {{ui:Rejilla (número)}} y {{ui:Nivel}}.

## Cambiar una pieza después de colocarla

1. Pulse {{key:Esc}} (o elija {{ui:Seleccionar}}, {{key:V}}) y haga clic en la pieza.
2. En el panel {{ui:Propiedades}}, cambie {{ui:Nombre}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posición}} o {{ui:Giro (°)}}.
3. Para moverla, edite la x, la y y la z de {{ui:Inicio}} o {{ui:Final}} en {{ui:Extremos (x, y, z mm)}}. Debajo de cada extremo aparece el nombre de la rejilla, o sus coordenadas si está fuera de ella.

Cada cambio es un paso de deshacer. Debajo de los campos verá la {{ui:Marca de pieza}}, el {{ui:Conjunto}}, la {{ui:Longitud de corte}}, el {{ui:Peso}} (bruto: no se descuentan agujeros ni recortes) y el catálogo del que procede el perfil.

Las piezas todavía no se pueden arrastrar ni formar en matriz. Para hacer otra igual, cópiela y péguela, o duplíquela ({{key:Mod+D}}): consulte [Copiar, pegar y duplicar](topic:copy-paste).

## Borrar una pieza

Selecciónela y pulse {{key:Delete}} o {{key:Backspace}}, o elija {{ui:Borrar}}. Las conexiones que dependan de ella también se borran. {{key:Mod+Z}} lo recupera todo.

## Cosas que conviene saber

- **Hacia dónde mira un pilar.** Con {{ui:Giro (°)}} 0, las alas de un pilar miran a lo largo de x, hacia las líneas de rejilla numeradas vecinas. Una viga de la rejilla 1 a la 2 se une por un ala; una viga de A a B se une por el alma. Las placas de extremo solo se construyen en las alas, así que si sus vigas van de A a B, dé a esos pilares un giro de 90.
- **Las vigas de un nivel cuelgan por debajo** con la opción {{ui:Cara superior del acero sobre la línea}} por defecto. Elija {{ui:Centrada sobre la línea}} si sus niveles son ejes de las piezas.
- **Los pilares van de nivel a nivel.** Para un pilar que atraviese dos plantas, ponga {{ui:Hasta}} en el nivel superior.
- **Se permiten vigas inclinadas** (elija extremos a niveles distintos), pero todavía no se construyen placas de extremo en ellas.

Siguiente: [Conectar vigas a pilares con placas de extremo](topic:end-plates).
