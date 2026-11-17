---
title: Seleccionar con ventana, desplazar, girar, simetría y cambiar varios
summary: Arrastre una ventana para seleccionar, arrastre las piezas seleccionadas para desplazarlas, desplace, gire o aplique simetría a la selección (o a una copia), o cambie el perfil, material, posición o rotación de varios miembros a la vez.
keywords: lazo, lasso, borde, selección a mano alzada, arrastrar, arrastrar y soltar, mover arrastrando, ajuste, ventana, captura, selección por recuadro, arrastrar para seleccionar, seleccionar varios, desplazar, girar, simetría, voltear, copiar, cambiar varios, varios miembros, perfil, material, posición, rotación, varía, línea de rejilla
from: 50b16f9a
---

Cada una de estas acciones es un solo paso de deshacer: una vez {{key:Mod+Z}} lo revierte todo.

## Seleccionar con una ventana

- En {{ui:Planta}} y {{ui:Elevación}}, arrastre con el botón izquierdo desde un espacio vacío. En {{ui:3D}}, mantenga presionado {{key:Shift}} y arrastre (un arrastre simple gira el modelo).
- Arrastre **hacia la derecha** para una ventana: toma lo que queda completamente dentro, dibujada con borde continuo.
- Arrastre **hacia la izquierda** para una captura: toma todo lo que toque, dibujada con línea discontinua.
- Mantenga presionado {{key:Shift}} al iniciar el arrastre para agregar a la selección en lugar de reemplazarla.
- Una planta o una elevación solo ofrece lo que muestra: las piezas recortadas por encima de la planta, o a más de 1 m de la línea de rejilla de la elevación, no se seleccionan.
- {{key:Esc}} durante el arrastre cancela la ventana.

### Lazo

Elija **Lazo** en {{ui:Arrastrar para seleccionar}} en [configuración de DetailCraft](topic:settings) y el mismo arrastre dibujará una línea libre en lugar de un rectángulo.

- Su primer movimiento lateral decide cómo selecciona: **hacia la derecha**, lo que queda completamente dentro (línea continua); **hacia la izquierda**, lo que toca (discontinua).
- Presione {{key:Space}} mientras arrastra para cambiar entre dentro, tocar y **borde**: una línea abierta que toma todo lo que cruza (punteada, naranja).
- {{key:Shift}} para agregar y {{key:Esc}} para cancelarlo funcionan igual que con la ventana.

:::touch
En una pantalla táctil, un dedo encuadra la planta y la elevación como antes; seleccione piezas tocándolas.
:::

En {{ui:Planta}} y {{ui:Elevación}}, encuadre la vista con el botón derecho o el central mientras la herramienta {{ui:Seleccionar}} esté activa.

## Arrastrar piezas para desplazarlas

1. Primero seleccione las piezas (clic, {{key:Shift}}+clic o una ventana).
2. Presione sobre una de las piezas seleccionadas y arrastre. Se mueve toda la selección; un contorno discontinuo muestra adónde va.
3. Suelte para colocarla. {{key:Esc}} antes de soltar devuelve todo a su lugar.

- En {{ui:3D}} y {{ui:Planta}}, las piezas se mueven a lo largo del nivel. Mantenga presionado {{key:Mod}} al iniciar el arrastre en {{ui:3D}} para moverlas hacia arriba y hacia abajo.
- En {{ui:Elevación}} se mueven dentro de la elevación: a lo largo de la línea de rejilla y hacia arriba y abajo.
- La pieza que sostiene se ajusta a una intersección de rejilla cuando su extremo llega a pocos píxeles de una (la intersección se ilumina y la barra de estado la nombra). En otros casos, el desplazamiento avanza en pasos de 10 mm.
- Presionar sobre una pieza que no está seleccionada sigue girando o encuadrando la vista, así que un arrastre nunca mueve algo por accidente.
- El arrastre es un solo paso de deshacer, igual que {{ui:Desplazar}}. Las conexiones siguen a sus miembros.

## Cambiar una propiedad en varios miembros

Seleccione dos o más miembros. Bajo **Cambiar en todos** en el panel {{ui:Propiedades}}:

- {{ui:Perfil}}, {{ui:Posición}}: para las vigas, columnas y contraventeos que haya entre ellos.
- {{ui:Espesor de placa (mm)}} y {{ui:Ancho de placa (mm)}}: para las placas.
- {{ui:Material}} y {{ui:Rotación (°)}}: para todos.

Un campo muestra **Varía** cuando los miembros no coinciden. Elija o escriba un valor y todos los miembros a los que aplique lo tomarán; la barra de estado dice cuántos cambiaron y cuántos conservaron el suyo.

Los campos numéricos del panel {{ui:Propiedades}} también aceptan un cálculo: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un cálculo que no se pueda leer se rechaza, y la barra de estado indica dónde está el error.

## Desplazar, girar o aplicar simetría

Seleccione miembros y zapatas (también sirve uno solo) y luego use **Desplazar, girar, simetría** en el panel {{ui:Propiedades}}. Las conexiones no se mueven por sí solas: siguen a sus miembros. Si mueve una viga pero no su columna, la barra de estado indica cuántas conexiones unen ahora un miembro movido con uno que se quedó, y [Problemas](topic:troubleshooting) dice si ya no encajan.

- **Desplazar:** escriba x, y y z en milímetros y elija {{ui:Desplazar}}. O elija {{ui:Precisar dos puntos}} (o presione {{key:M}}): haga clic en la intersección de rejilla de origen y luego en la de destino. Un contorno discontinuo sigue al puntero.
- **Girar en planta:** escriba el ángulo (en sentido antihorario, visto desde arriba) y elija alrededor de qué girar: el centro de la selección o una intersección de rejilla. Las columnas giran con el marco.
- **Simetría:** elija una línea de rejilla. La imagen reflejada es el mismo perfil volteado al otro lado: un perfil I conserva sus patines, un canal se orienta hacia el otro lado (su parte superior e inferior se intercambian), y los agujeros y recortes van con la pieza.
- Marque **Conservar el original (crear una copia)** para dejar la selección donde está y desplazar, girar o aplicar simetría a una copia. Sus conexiones la acompañan cuando {{ui:Copiar placas de extremo y placas base con sus miembros}} esté activado en [configuración de DetailCraft](topic:settings).

Girar gira alrededor de una línea vertical, y la simetría se aplica en un plano vertical; así, los niveles siguen nivelados y las zapatas siguen verticales.
