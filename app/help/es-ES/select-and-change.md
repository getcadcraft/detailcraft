---
title: Seleccionar con ventana, mover, girar, reflejar y cambiar varios
summary: Arrastre una ventana para seleccionar, arrastre las piezas seleccionadas para moverlas, mueva, gire o refleje la selección (o una copia de ella), o cambie el perfil, material, posición o giro de muchos elementos a la vez.
keywords: lazo, valla, selección a mano alzada, arrastrar, arrastrar y soltar, mover arrastrando, ajuste, ventana, cruce, selección por recuadro, arrastre para seleccionar, seleccionar varios, mover, girar, reflejar, simetría, copiar, cambiar varios, varios elementos, perfil, material, posición, giro, varía, eje
from: 50b16f9a
---

Cada una de estas acciones es un solo paso de deshacer: una pulsación de {{key:Mod+Z}} lo deshace todo.

## Seleccionar con una ventana

- En {{ui:Planta}} y {{ui:Alzado}}, arrastre con el botón izquierdo desde un punto vacío. En {{ui:3D}}, mantenga pulsado {{key:Shift}} y arrastre (un arrastre simple gira el modelo).
- Arrastre **hacia la derecha** para una ventana: toma lo que queda completamente dentro, dibujada con borde continuo.
- Arrastre **hacia la izquierda** para una ventana de cruce: toma todo lo que toca, dibujada con trazos.
- Mantenga pulsado {{key:Shift}} al empezar el arrastre para añadir a la selección en lugar de reemplazarla.
- Una planta o un alzado solo ofrece lo que muestra: las piezas cortadas por encima de la planta, o a más de 1 m de la línea de eje del alzado, no se seleccionan.
- {{key:Esc}} durante el arrastre suelta la ventana.

### Lazo

Elija **Lazo** en {{ui:Arrastre para seleccionar}} en la configuración de [DetailCraft](topic:settings) y el mismo arrastre dibujará una línea a mano alzada en lugar de un rectángulo.

- Su primer movimiento lateral decide cómo selecciona: **hacia la derecha**, lo que queda completamente dentro (línea continua); **hacia la izquierda**, lo que toca (trazos).
- Pulse {{key:Space}} durante el arrastre para cambiar entre dentro, tocando y **valla**: una línea abierta que toma lo que cruza (punteada, naranja).
- {{key:Shift}} para añadir y {{key:Esc}} para soltarlo funcionan igual que con la ventana.

:::touch
En una pantalla táctil, un dedo desplaza la planta y el alzado como antes; seleccione las piezas tocándolas.
:::

En {{ui:Planta}} y {{ui:Alzado}}, desplace la vista con el botón derecho o central mientras la herramienta {{ui:Seleccionar}} está activa.

## Arrastrar piezas para moverlas

1. Seleccione primero las piezas (clic, {{key:Shift}}+clic o una ventana).
2. Pulse sobre una de las piezas seleccionadas y arrastre. Toda la selección se mueve; un contorno de trazos indica adónde va.
3. Suelte para colocarla. {{key:Esc}} antes de soltar devuelve todo a su sitio.

- En {{ui:3D}} y {{ui:Planta}} las piezas se mueven por el nivel. Mantenga pulsado {{key:Mod}} al empezar el arrastre en {{ui:3D}} para moverlas arriba y abajo.
- En {{ui:Alzado}} se mueven dentro del alzado: a lo largo de la línea de eje y arriba y abajo.
- La pieza que sostiene se ajusta a una intersección de ejes cuando su extremo queda a pocos píxeles de una (la intersección se ilumina y la barra de estado la nombra). En otro caso, el movimiento va en pasos de 10 mm.
- Pulsar sobre una pieza no seleccionada sigue girando o desplazando la vista, así que un arrastre nunca mueve algo por accidente.
- El arrastre es un paso de deshacer, como {{ui:Mover}}. Las uniones siguen a sus elementos.

## Cambiar una propiedad en varios elementos

Seleccione dos o más elementos. Bajo **Cambiar en todos ellos** en el panel {{ui:Propiedades}}:

- {{ui:Perfil}}, {{ui:Posición}}: para las vigas, pilares y diagonales entre ellos.
- {{ui:Espesor de la placa (mm)}} y {{ui:Ancho de la placa (mm)}}: para las placas.
- {{ui:Material}} y {{ui:Giro (°)}}: para todos ellos.

Un campo muestra **Varía** cuando los elementos no coinciden. Elija o escriba un valor y cada elemento al que se aplique lo tomará; la barra de estado indica cuántos cambiaron y cuántos conservaron el suyo.

Los campos numéricos del panel {{ui:Propiedades}} también admiten cálculos: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Un cálculo que no se pueda leer se rechaza, y la barra de estado indica dónde está el error.

## Mover, girar o reflejar

Seleccione elementos y zapatas (incluso uno solo), y use **Mover, girar, simetría** en el panel {{ui:Propiedades}}. Las uniones no se mueven por sí solas: siguen a sus elementos. Si mueve una viga pero no su pilar, la barra de estado indica cuántas uniones unen ahora un elemento movido con uno que no se movió, y [Problemas](topic:troubleshooting) indica si ya no encajan.

- **Mover:** escriba x, y y z en milímetros y elija {{ui:Mover}}. O elija {{ui:Elegir dos puntos}} (o pulse {{key:M}}): haga clic en la intersección de ejes desde la que mover y después en la de destino. Un contorno de trazos sigue al puntero.
- **Girar en planta:** escriba el ángulo (en sentido antihorario, visto desde arriba) y elija alrededor de qué girar: el centro de la selección, o una intersección de ejes. Los pilares giran con el marco.
- **Simetría:** elija un eje. La imagen especular es el mismo perfil girado al otro lado: un perfil en I conserva sus alas, un perfil en U mira al otro lado (su parte superior e inferior se intercambian), y los agujeros y rebajes van con la pieza.
- Marque **Conservar el original (crear una copia)** para dejar la selección en su sitio y mover, girar o reflejar una copia. Sus uniones la acompañan cuando {{ui:Copiar placas de testa y placas de base con sus elementos}} esté activado en la configuración de [DetailCraft](topic:settings).

Girar se hace alrededor de una línea vertical y la simetría es en un plano vertical, así que los niveles siguen nivelados y las zapatas siguen verticales.
