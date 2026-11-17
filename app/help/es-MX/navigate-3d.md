---
title: Desplácese por la vista 3D
summary: Gire, encuadre y haga zoom con ratón, trackpad o pantalla táctil, y cuándo usar Planta y Elevación en su lugar.
keywords: orbitar, girar, encuadrar, zoom, navegar, vista, cámara, trackpad, táctil, planta, elevación, ajustar, ratón
from: 02c9c7b9
---

La vista tiene tres modos, elegidos en la barra de vista de arriba: {{ui:3D}}, {{ui:Planta}} y {{ui:Elevación}}. Los botones del ratón hacen cosas distintas en 3D que en Planta y Elevación, así que lea ambas tablas.

## En 3D

:::mouse
| Para | Haga esto |
|---|---|
| Girar alrededor del modelo | Arrastre con el botón izquierdo |
| Encuadrar | Arrastre con el botón derecho, o mantenga {{key:Shift}} y arrastre con el botón izquierdo |
| Zoom | Gire la rueda, o arrastre hacia arriba y abajo con el botón central (con la rueda presionada) |
| Seleccionar una pieza | Haga clic en ella (un clic que se mueva menos de unos pocos píxeles) |
| Ver el modelo completo | El botón {{ui:Ajustar}} al extremo derecho de la barra de vista |
:::

:::touch
| Para | Haga esto |
|---|---|
| Girar alrededor del modelo | Arrastre con un dedo |
| Encuadrar | Arrastre con dos dedos |
| Zoom | Pellizque con dos dedos |
| Seleccionar una pieza | Toque |
| Ver el modelo completo | El botón {{ui:Ajustar}} al extremo derecho de la barra de vista |
:::

El cubo de vistas en la parte superior derecha (debajo de la barra de vista) gira con el modelo: haga clic en una cara, arista o esquina para mirar desde ahí, arrástrelo para girar, o haga clic en su botón de inicio para volver al punto de partida. Vea [El cubo de vistas](topic:view-cube).

El modelo gira alrededor del centro de la vista, y la rueda hace zoom hacia el centro de la vista, no hacia el puntero. Para ver de cerca una esquina, encuádrela primero en el centro y luego haga zoom.

## En Planta y Elevación

Estas vistas miran de frente al modelo y no pueden girar.

:::mouse
| Para | Haga esto |
|---|---|
| Encuadrar | Arrastre con el botón izquierdo o el derecho |
| Zoom | Gire la rueda, o arrastre hacia arriba y abajo con el botón central |
| Seleccionar una pieza | Haga clic en ella |
:::

:::touch
| Para | Haga esto |
|---|---|
| Encuadrar | Arrastre con un dedo |
| Zoom | Pellizque con dos dedos (arrastrar con dos dedos también encuadra) |
| Seleccionar una pieza | Toque |
:::

## En el trackpad de Mac

:::mac
- **Zoom:** deslice hacia arriba o abajo con dos dedos, o pellizque. Ambos llegan a la vista como zoom.
- **Girar (3D):** presione el trackpad y arrastre con un dedo. Si usa tocar para hacer clic, el doble toque y arrastrar también funciona cuando el arrastre está activado en **Configuración del Sistema, Accesibilidad, Control del puntero, Opciones del trackpad**.
- **Encuadrar (3D):** mantenga {{key:Shift}} y arrastre. Mantener {{key:Ctrl}} o {{key:Mod}} mientras arrastra también encuadra. Un clic con dos dedos es un clic derecho, pero arrastrar con él es incómodo en un trackpad.
- **Encuadrar (Planta y Elevación):** simplemente arrastre.
- Un Magic Mouse no tiene botón central: use el arrastre con {{key:Shift}} para encuadrar, y un deslizamiento sobre su superficie para hacer zoom.
:::

Más sobre el clic derecho y el encuadre sin ratón: [Teclas, ratones y trackpads](common:keys).

## Planta y Elevación facilitan colocar

En {{ui:3D}}, las intersecciones de niveles distintos pueden quedar una sobre otra en pantalla, y un clic va al punto más cercano. En {{ui:Planta}} y {{ui:Elevación}} solo se pueden elegir los puntos del nivel o de la línea de ejes que está viendo.

1. Elija {{ui:Planta}}, luego seleccione un nivel en la lista junto a los botones. La vista mira hacia abajo a ese nivel; todo lo que esté a más de 1.5 m por encima se recorta.
2. O elija {{ui:Elevación}}, luego seleccione una línea de ejes con letra ("Eje A", "Eje B" …). La vista mira de frente a esa línea; solo se muestra el acero a menos de 1 m de ella.

Las elevaciones solo existen en líneas de ejes con letra. Para trabajar en una línea de ejes numerados (un marco que va de A a B), use {{ui:3D}}, o coloque escribiendo en el formulario {{ui:Agregar por ejes}}. Vea [Colocar columnas, vigas y contravientos](topic:place-members#place-by-grid-without-clicking).

## Selección

- Haga clic en una pieza para seleccionarla. Cambia al color de resaltado y el panel {{ui:Propiedades}} la muestra.
- Haga clic en un espacio vacío, o pulse {{key:Esc}}, para quitar la selección.
- El acero tiene prioridad sobre el concreto: un clic en una columna dentro de una zapata transparente selecciona la columna. Haga clic en la zapata lejos de la columna, o en una de sus varillas, para seleccionar la zapata.
- Al hacer clic en un perno o en una placa de extremo se selecciona su conexión.
- En Planta y Elevación, las piezas recortadas no se pueden seleccionar.
- Mantenga {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y haga clic para agregar una pieza a la selección o quitarla; {{key:Mod+A}} selecciona todo. Todavía no hay selección por ventana (arrastrar un recuadro). Lo que puede hacer con varias: [Copiar, pegar y duplicar](topic:copy-paste).

También puede seleccionar desde listas: haga clic en una marca en {{ui:Marcas de pieza}} a la izquierda, en una marca de pieza en la pestaña {{ui:Lista de materiales}}, o en {{ui:Seleccionar}} junto a una línea en {{ui:Problemas}}.

## Si la vista se ve mal

- ¿Perdió el modelo? Elija el botón {{ui:Ajustar}}.
- La vista está en blanco o gris con un mensaje sobre WebGL: vea [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Todo sigue funcionando sin la vista 3D, excepto hacer clic en ella: los paneles, informes y exportaciones funcionan, y {{ui:Agregar por ejes}} coloca miembros al escribir.
