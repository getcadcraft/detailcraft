---
title: El cubo de vista
summary: Haga clic en una cara, arista o esquina del cubo de la esquina de la vista para mirar desde allí, arrástrelo para orbitar, gire el anillo de la brújula, avance por las vistas de cara y vuelva a la vista inicial.
keywords: cubo de vista, viewcube, cubo, brújula, norte, vista inicial, vistas estándar, superior, frontal, derecha, iso, esquina, arista, orbitar, girar vista, icono de ejes, indicador de esquina, navegación
from: 3666ea8a
---

El cubo de vista está en la esquina superior derecha de la vista 3D, bajo la barra de vista (solo en {{ui:3D}}: {{ui:Plan}} y {{ui:Elevation}} ya miran de frente al modelo). Gira con la vista, así que siempre indica hacia dónde mira: {{ui:Top}} queda arriba, {{ui:Front}} mira hacia el sur (el lado desde el que se ven las rejillas con letras en {{ui:Elevation}}), {{ui:Right}} mira hacia el este, a lo largo de las rejillas numeradas. Permanece translúcido hasta que apunte hacia él.

## Mirar desde un lado, una arista o una esquina

1. Apunte al cubo. La parte bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Haga clic. La vista gira para mirar desde allí, conservando el mismo centro y el mismo zoom.

Hay 26 posiciones en las que puede hacer clic: 6 caras ({{ui:Top}}, {{ui:Bottom}}, {{ui:Front}}, {{ui:Back}}, {{ui:Left}}, {{ui:Right}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista en tres cuartos; una arista queda a medio camino entre dos caras.

Una vista de cara del cubo es una vista 3D, no {{ui:Plan}} ni {{ui:Elevation}}: no se corta nada y el modelo puede seguir girando.

## Orbitar arrastrando el cubo

Arrastre el cubo para girar la vista, igual que al orbitar en la propia vista. Un arrastre nunca se toma como un clic, así que puede agarrar el cubo por cualquier punto.

## El anillo de la brújula

El anillo bajo el cubo tiene N, E, S y O.

- **Arrastre el anillo** para girar el modelo sobre el eje vertical, como si estuviera sobre una plataforma giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, conservando la inclinación con la que mira hacia abajo. En una vista desde arriba, la letra en la que hizo clic pasa a la parte inferior de la pantalla.

## Vistas de cara: flechas

Cuando mira directamente a una cara, aparecen pequeñas flechas alrededor del cubo:

- Los cuatro **triángulos** llevan la cara de ese lado al frente: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** de la parte superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara desde la que mira. Úselas para girar una planta de modo que un muro largo quede a lo ancho de la pantalla.

## Inicio

El botón con forma de casa, arriba a la izquierda del cubo, vuelve a la vista inicial en tres cuartos y encaja todo el modelo en pantalla, igual que el botón de ajustar. {{key:Home}} hace lo mismo cuando el cubo tiene el foco del teclado.

## Con el teclado

{{key:Tab}} hasta el cubo, y después:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige una cara, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla indican cuál) |
| {{key:up}} / {{key:down}} | elige una posición más alta o más baja, hasta {{ui:Top}} o hasta {{ui:Bottom}} |
| {{key:Enter}} o {{key:Space}} | mira desde la posición elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta sobre el eje vertical |
| {{key:Home}} | la vista inicial |
| {{key:Esc}} | sale del cubo |

Las teclas pulsadas en el cubo se quedan en el cubo: no activan herramientas de DetailCraft.

## Icono de ejes o nada en su lugar

Abra {{ui:Settings}} ({{key:Mod+,}}), la pestaña {{ui:DetailCraft}}, y ponga **Indicador de esquina** en {{ui:View cube}} (el predeterminado), {{ui:Axis icon}} (un pequeño marcador X, Y, Z abajo a la izquierda: X rojo, Y verde, Z azul) o {{ui:None}}. Este navegador recuerda la elección. Véase [Ajustes de DetailCraft](topic:settings#corner-indicator).
