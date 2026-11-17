---
title: El cubo de vista
summary: Hacé clic en una cara, arista o esquina del cubo en la esquina de la vista para mirar desde ahí, arrastralo para orbitar, girá el anillo de la brújula, recorré una vista de frente y volvé al inicio.
keywords: cubo de vista, viewcube, cubo, brújula, norte, vista inicial, vistas estándar, arriba, frente, derecha, iso, esquina, arista, orbitar, girar vista, ícono de ejes, indicador de esquina, navegación
from: 3666ea8a
---

El cubo de vista está arriba a la derecha de la vista 3D, debajo de la barra de vista (solo en {{ui:3D}}: {{ui:Planta}} y {{ui:Elevación}} ya miran de frente al modelo). Gira junto con la vista, así que siempre muestra hacia dónde estás mirando: {{ui:Arriba}} es hacia arriba, {{ui:Frente}} mira al sur (el lado desde el que se ven las grillas con letras en {{ui:Elevación}}), {{ui:Derecha}} mira al este, a lo largo de las grillas numeradas. Queda semitransparente hasta que lo señalás.

## Mirar desde un lado, una arista o una esquina

1. Señalá el cubo. La parte bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Hacé clic. La vista gira para mirar desde ahí, manteniendo el mismo centro y zoom.

Hay 26 lugares donde hacer clic: 6 caras ({{ui:Arriba}}, {{ui:Abajo}}, {{ui:Frente}}, {{ui:Atrás}}, {{ui:Izquierda}}, {{ui:Derecha}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista de tres cuartos; una arista queda a mitad de camino entre dos caras.

Una vista de cara del cubo es una vista 3D, no {{ui:Planta}} ni {{ui:Elevación}}: no se recorta nada, y el modelo igual se puede girar.

## Orbitar arrastrando el cubo

Arrastrá el cubo para girar la vista, igual que orbitar en la propia vista. Un arrastre nunca se toma como un clic, así que podés agarrar el cubo en cualquier parte.

## El anillo de la brújula

El anillo debajo del cubo tiene N, E, S y O.

- **Arrastrá el anillo** para girar el modelo alrededor del eje vertical, como si estuviera sobre un plato giratorio. El anillo sigue al puntero.
- **Hacé clic en una letra** para mirar desde ese lado, manteniendo cuán inclinada es la mirada hacia abajo. En una vista desde arriba, la letra que elegís va a la parte inferior de la pantalla.

## Vistas de frente: flechas

Cuando mirás una cara de frente, aparecen flechas pequeñas alrededor del cubo:

- Los cuatro **triángulos** llevan la cara de ese lado al frente: el triángulo de arriba del cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** arriba a la derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar qué cara estás mirando. Usalas para girar una planta de modo que una pared larga quede atravesando la pantalla.

## Inicio

El botón de casa arriba a la izquierda del cubo vuelve a la vista inicial de tres cuartos y ajusta todo el modelo en pantalla, igual que el botón de ajustar. {{key:Home}} hace lo mismo mientras el cubo tenga el foco del teclado.

## Con el teclado

{{key:Tab}} hasta el cubo, y después:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige una cara, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla dicen cuál) |
| {{key:up}} / {{key:down}} | elige una más alta o más baja, hasta {{ui:Arriba}} o hasta {{ui:Abajo}} |
| {{key:Enter}} o {{key:Space}} | mira desde la elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta alrededor del eje vertical |
| {{key:Home}} | la vista inicial |
| {{key:Esc}} | sale del cubo |

Las teclas presionadas en el cubo se quedan en el cubo: no inician herramientas de DetailCraft.

## Ícono de ejes o nada en su lugar

Abrí {{ui:Configuración}} ({{key:Mod+,}}), la pestaña {{ui:DetailCraft}}, y poné **Indicador de esquina** en {{ui:Cubo de vista}} (el inicial), {{ui:Ícono de ejes}} (un pequeño marcador X, Y, Z abajo a la izquierda: X rojo, Y verde, Z azul) o {{ui:Ninguno}}. Este navegador recuerda la elección. Ver [Ajustes de DetailCraft](topic:settings#corner-indicator).
