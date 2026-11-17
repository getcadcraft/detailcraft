---
title: Moverse por la vista 3D
summary: Gire, desplace y haga zoom con ratón, trackpad o pantalla táctil, y cuándo usar Planta y Alzado en su lugar.
keywords: orbitar, girar, desplazar, zoom, navegar, vista, cámara, trackpad, táctil, planta, alzado, ajustar, ratón
from: 02c9c7b9
---

La vista tiene tres modos, elegidos en la barra de vistas situada encima: {{ui:3D}}, {{ui:Planta}} y {{ui:Alzado}}. Los botones del ratón hacen cosas distintas en 3D que en Planta y Alzado, así que lea ambas tablas.

## En 3D

:::mouse
| Para | Haga lo siguiente |
|---|---|
| Girar alrededor del modelo | Arrastre con el botón izquierdo |
| Desplazar | Arrastre con el botón derecho, o mantenga {{key:Shift}} y arrastre con el botón izquierdo |
| Hacer zoom | Gire la rueda, o arrastre arriba y abajo con el botón central (rueda pulsada) |
| Seleccionar una pieza | Haga clic en ella (un clic que mueva menos de unos píxeles) |
| Ver el modelo completo | El botón de ajustar, en el extremo derecho de la barra de vistas |
:::

:::touch
| Para | Haga lo siguiente |
|---|---|
| Girar alrededor del modelo | Arrastre con un dedo |
| Desplazar | Arrastre con dos dedos |
| Hacer zoom | Pellizque con dos dedos |
| Seleccionar una pieza | Toque en ella |
| Ver el modelo completo | El botón de ajustar, en el extremo derecho de la barra de vistas |
:::

El cubo de vistas situado arriba a la derecha (bajo la barra de vistas) gira con el modelo: haga clic en una cara, arista o vértice para mirar desde allí, arrástrelo para girarlo, o haga clic en su botón de inicio para volver al punto de partida. Consulte [El cubo de vistas](topic:view-cube).

El modelo gira alrededor del centro de la vista, y la rueda hace zoom hacia el centro de la vista, no hacia el puntero. Para mirar de cerca una esquina, desplácela primero al centro y después haga zoom.

## En Planta y Alzado

Estas vistas miran de frente al modelo y no pueden girarse.

:::mouse
| Para | Haga lo siguiente |
|---|---|
| Desplazar | Arrastre con el botón izquierdo o el derecho |
| Hacer zoom | Gire la rueda, o arrastre arriba y abajo con el botón central |
| Seleccionar una pieza | Haga clic en ella |
:::

:::touch
| Para | Haga lo siguiente |
|---|---|
| Desplazar | Arrastre con un dedo |
| Hacer zoom | Pellizque con dos dedos (arrastrar con dos dedos también desplaza) |
| Seleccionar una pieza | Toque en ella |
:::

## En el trackpad de Mac

:::mac
- **Zoom:** deslice hacia arriba o abajo con dos dedos, o pellizque. Ambos llegan a la vista como zoom.
- **Girar (3D):** pulse el trackpad y arrastre con un dedo. Si usa tocar para hacer clic, el doble toque y arrastre también funciona cuando el arrastre está activado en **Ajustes del Sistema, Accesibilidad, Control del puntero, Opciones del trackpad**.
- **Desplazar (3D):** mantenga {{key:Shift}} y arrastre. Mantener {{key:Ctrl}} o {{key:Mod}} mientras arrastra también desplaza. Un clic con dos dedos es un clic derecho, pero arrastrar con él resulta incómodo en un trackpad.
- **Desplazar (Planta y Alzado):** simplemente arrastre.
- Un Magic Mouse no tiene botón central: use el arrastre con {{key:Shift}} para desplazar y un deslizamiento sobre su superficie para hacer zoom.
:::

Más sobre el clic derecho y el desplazamiento sin ratón: [Teclas, ratones y trackpads](common:keys).

## Planta y Alzado facilitan colocar

En {{ui:3D}}, las intersecciones de niveles distintos pueden quedar una encima de otra en pantalla, y un clic va al punto más cercano. En {{ui:Planta}} y {{ui:Alzado}} solo se pueden elegir los puntos del nivel o de la línea de rejilla que está mirando.

1. Elija {{ui:Planta}}, y después un nivel en la lista junto a los botones. La vista mira hacia abajo a ese nivel; lo que esté a más de 1.5 m por encima se oculta.
2. O elija {{ui:Alzado}}, y después una línea de rejilla con letra ("Rejilla A", "Rejilla B" …). La vista mira de frente a esa línea; solo se muestra el acero a menos de 1 m de ella.

Los alzados solo existen sobre líneas de rejilla con letra. Para trabajar en una línea de rejillas numeradas (un pórtico que va de A a B), use {{ui:3D}}, o coloque escribiendo en el formulario {{ui:Añadir por rejilla}}. Consulte [Colocar pilares, vigas y diagonales](topic:place-members#place-by-grid-without-clicking).

## Selección

- Haga clic en una pieza para seleccionarla. Se resalta con el color de selección y el panel {{ui:Propiedades}} la muestra.
- Haga clic en un espacio vacío, o pulse {{key:Esc}}, para quitar la selección.
- El acero tiene prioridad sobre el hormigón: un clic en un pilar dentro de una zapata transparente selecciona el pilar. Haga clic en la zapata lejos del pilar, o en una de sus barras, para seleccionar la zapata.
- Haga clic en un tornillo o en una placa de testa para seleccionar su unión.
- En Planta y Alzado, las piezas recortadas no se pueden pulsar.
- Mantenga pulsado {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y haga clic para añadir una pieza a la selección o quitarla; {{key:Mod+A}} selecciona todo. Todavía no hay selección por ventana (arrastrar un recuadro). Lo que puede hacer con varias: [Copiar, pegar y duplicar](topic:copy-paste).

También puede seleccionar desde listas: haga clic en una marca de {{ui:Marcas de pieza}} a la izquierda, en una marca de pieza de la pestaña {{ui:Lista de materiales}}, o en {{ui:Seleccionar}} junto a una línea de {{ui:Problemas}}.

## Si la vista se ve mal

- ¿Ha perdido el modelo? Elija el botón de ajustar.
- La vista aparece en blanco o gris con un mensaje sobre WebGL: consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Todo funciona sin la vista 3D salvo hacer clic en ella: los paneles, los informes y las exportaciones se ejecutan, y {{ui:Añadir por rejilla}} coloca elementos escribiendo.
