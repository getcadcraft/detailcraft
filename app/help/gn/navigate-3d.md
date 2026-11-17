---
title: Moverse por la vista 3D
summary: Girá, desplazá y hacé zoom con mouse, trackpad o pantalla táctil, y cuándo usar Planta y Elevación en su lugar.
keywords: orbitar, girar, desplazar, zoom, navegar, vista, cámara, trackpad, táctil, planta, elevación, ajustar, mouse
from: 02c9c7b9
---

La vista tiene tres modos, elegidos en la barra de vista de arriba: {{ui:3D}}, {{ui:Planta}} y {{ui:Elevación}}. Los botones del mouse hacen cosas distintas en 3D que en Planta y Elevación, así que leé las dos tablas.

## En 3D

:::mouse
| Para | Hacé esto |
|---|---|
| Girar alrededor del modelo | Arrastrar con el botón izquierdo |
| Desplazar | Arrastrar con el botón derecho, o mantener {{key:Shift}} y arrastrar con el botón izquierdo |
| Hacer zoom | Girar la rueda, o arrastrar hacia arriba y abajo con el botón del medio (rueda presionada) |
| Seleccionar una pieza | Hacer clic en ella (un clic que se mueve menos de unos pocos píxeles) |
| Ver el modelo completo | El botón de ajustar al extremo derecho de la barra de vista |
:::

:::touch
| Para | Hacé esto |
|---|---|
| Girar alrededor del modelo | Arrastrar con un dedo |
| Desplazar | Arrastrar con dos dedos |
| Hacer zoom | Pellizcar con dos dedos |
| Seleccionar una pieza | Tocarla |
| Ver el modelo completo | El botón de ajustar al extremo derecho de la barra de vista |
:::

El cubo de vista arriba a la derecha (debajo de la barra de vista) gira con el modelo: hacé clic en una cara, arista o esquina para mirar desde ahí, arrastralo para girar, o hacé clic en su botón de inicio para volver al punto de partida. Ver [El cubo de vista](topic:view-cube).

El modelo gira alrededor del centro de la vista, y la rueda hace zoom hacia el centro de la vista, no hacia el puntero. Para mirar de cerca una esquina, primero desplazala al centro y después hacé zoom.

## En Planta y Elevación

Estas vistas miran el modelo de frente y no se pueden girar.

:::mouse
| Para | Hacé esto |
|---|---|
| Desplazar | Arrastrar con el botón izquierdo o el derecho |
| Hacer zoom | Girar la rueda, o arrastrar hacia arriba y abajo con el botón del medio |
| Seleccionar una pieza | Hacer clic en ella |
:::

:::touch
| Para | Hacé esto |
|---|---|
| Desplazar | Arrastrar con un dedo |
| Hacer zoom | Pellizcar con dos dedos (arrastrar con dos dedos también desplaza) |
| Seleccionar una pieza | Tocarla |
:::

## En trackpad de Mac

:::mac
- **Zoom:** deslizá hacia arriba o abajo con dos dedos, o pellizcá. Ambos llegan a la vista como zoom.
- **Girar (3D):** presioná el trackpad y arrastrá con un dedo. Si usás tocar para hacer clic, el doble toque y arrastrar también funciona cuando el arrastre está activado en **Configuración del sistema, Accesibilidad, Control del puntero, Opciones del trackpad**.
- **Desplazar (3D):** mantené {{key:Shift}} y arrastrá. Mantener {{key:Ctrl}} o {{key:Mod}} mientras arrastrás también desplaza. Un clic con dos dedos es un clic derecho, pero arrastrar con él es incómodo en un trackpad.
- **Desplazar (Planta y Elevación):** simplemente arrastrá.
- Un Magic Mouse no tiene botón del medio: usá el arrastre con {{key:Shift}} para desplazar y un deslizamiento sobre su superficie para hacer zoom.
:::

Más sobre clic derecho y desplazamiento sin mouse: [Teclas, mouse y trackpads](common:keys).

## Planta y Elevación facilitan colocar

En {{ui:3D}}, las intersecciones de distintos niveles pueden quedar una sobre otra en pantalla, y un clic va al punto más cercano. En {{ui:Planta}} y {{ui:Elevación}} solo se pueden elegir los puntos del nivel o de la línea de grilla que estás mirando.

1. Elegí {{ui:Planta}}, y luego un nivel de la lista al lado de los botones. La vista mira hacia abajo a ese nivel; todo lo que esté a más de 1,5 m por encima se corta y no se muestra.
2. O elegí {{ui:Elevación}}, y luego una línea de grilla con letra ("Grilla A", "Grilla B" …). La vista mira de frente a esa línea; solo se muestra el acero a menos de 1 m de ella.

Las elevaciones solo están en líneas de grilla con letra. Para trabajar en una línea de grillas numeradas (un pórtico de A a B), usá {{ui:3D}}, o colocá escribiendo en el formulario {{ui:Agregar por grilla}}. Ver [Colocar columnas, vigas y riostras](topic:place-members#place-by-grid-without-clicking).

## Seleccionar

- Hacé clic en una pieza para seleccionarla. Se pone del color de resaltado y el panel {{ui:Propiedades}} la muestra.
- Hacé clic en un espacio vacío, o presioná {{key:Esc}}, para borrar la selección.
- El acero tiene prioridad sobre el hormigón: un clic en una columna dentro de una zapata transparente selecciona la columna. Hacé clic en la zapata lejos de la columna, o en una de sus barras, para seleccionar la zapata.
- Hacer clic en un perno o en una placa de extremo selecciona su conexión.
- En Planta y Elevación, las piezas que están cortadas no se pueden clicar.
- Mantené {{key:Shift}} (o {{key:Ctrl}}, o {{key:Mod}}) y hacé clic para agregar una pieza a la selección o quitarla; {{key:Mod+A}} selecciona todo. Todavía no hay selección por ventana (arrastrar un recuadro). Lo que podés hacer con varias: [Copiar, pegar y duplicar](topic:copy-paste).

También podés seleccionar desde las listas: hacé clic en una marca de {{ui:Marcas de pieza}} a la izquierda, en una marca de pieza de la pestaña {{ui:Lista de materiales}}, o en {{ui:Seleccionar}} al lado de una línea de {{ui:Problemas}}.

## Si la vista se ve mal

- ¿Perdiste el modelo? Elegí el botón de ajustar.
- La vista está en blanco o gris con un mensaje sobre WebGL: ver [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Todo sigue funcionando sin la vista 3D excepto hacer clic en ella: los paneles, informes y exportaciones funcionan, y {{ui:Agregar por grilla}} coloca miembros escribiendo.
