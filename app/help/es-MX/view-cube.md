---
title: El cubo de vistas
summary: Haga clic en una cara, arista o esquina del cubo, en la esquina de la vista, para mirar desde allí; arrástrelo para orbitar, gire el anillo de la brújula, recorra las vistas de frente y vuelva al inicio.
keywords: cubo de vistas, viewcube, cubo, brújula, norte, vista de inicio, vistas estándar, superior, frontal, derecha, iso, esquina, arista, órbita, girar vista, icono de ejes, indicador de esquina, navegación
from: 3666ea8a
---

El cubo de vistas está en la parte superior derecha de la vista 3D, debajo de la barra de vistas (solo en {{ui:3D}}: {{ui:Planta}} y {{ui:Elevación}} ya miran directamente al modelo). Gira con la vista, así que siempre muestra hacia dónde está mirando: {{ui:Superior}} está arriba, {{ui:Frontal}} mira al sur (el lado desde el que se ven los ejes con letra en {{ui:Elevación}}), {{ui:Derecha}} mira al este, a lo largo de los ejes numerados. Permanece translúcido hasta que apunte hacia él.

## Mire desde un lado, una arista o una esquina

1. Apunte al cubo. La parte bajo el puntero se ilumina: el centro de una cara, una arista (se ilumina en las dos caras que comparte) o una esquina (en las tres caras).
2. Haga clic en ella. La vista gira para mirar desde allí, conservando el mismo centro y zoom.

Hay 26 lugares donde hacer clic: 6 caras ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Izquierda}}, {{ui:Derecha}}), 12 aristas y 8 esquinas. Una esquina da la clásica vista de tres cuartos; una arista se ve a medio camino entre dos caras.

Una vista de cara del cubo es una vista 3D, no {{ui:Planta}} ni {{ui:Elevación}}: nada se corta y el modelo puede seguir girando.

## Oriente arrastrando el cubo

Arrastre el cubo para girar la vista, igual que al orbitar en la vista misma. Un arrastre nunca se toma como un clic, así que puede tomar el cubo en cualquier parte.

## El anillo de la brújula

El anillo bajo el cubo tiene N, E, S y O.

- **Arrastre el anillo** para girar el modelo alrededor del eje vertical, como si estuviera sobre una plataforma giratoria. El anillo sigue al puntero.
- **Haga clic en una letra** para mirar desde ese lado, conservando qué tan inclinada es la mirada hacia abajo. En una vista desde arriba, la letra en la que hace clic va a la parte inferior de la pantalla.

## Vistas de frente: flechas

Cuando mira directamente a una cara, aparecen pequeñas flechas alrededor del cubo:

- Los cuatro **triángulos** llevan al frente la cara de ese lado: el triángulo sobre el cubo muestra la cara que estaba arriba, y así sucesivamente.
- Las dos **flechas curvas** en la parte superior derecha giran la imagen un cuarto de vuelta en sentido horario o antihorario, sin cambiar la cara que mira. Úselas para girar una planta de modo que un muro largo quede a lo ancho de la pantalla.

## Inicio

El botón de casa en la parte superior izquierda del cubo vuelve a la vista inicial de tres cuartos y ajusta todo el modelo en pantalla, igual que el botón de ajuste. {{key:Home}} hace lo mismo mientras el cubo tiene el foco del teclado.

## Con el teclado

{{key:Tab}} para llegar al cubo, y luego:

| Tecla | Hace |
|---|---|
| {{key:left}} / {{key:right}} | elige una cara, arista o esquina alrededor del cubo, en pasos de un octavo de vuelta (los lectores de pantalla dicen cuál) |
| {{key:up}} / {{key:down}} | elige una más alta o más baja, hasta {{ui:Superior}} o hasta {{ui:Inferior}} |
| {{key:Enter}} o {{key:Space}} | mira desde la elegida |
| {{key:Shift+left}} / {{key:Shift+right}} | gira la vista un cuarto de vuelta alrededor del eje vertical |
| {{key:Home}} | la vista de inicio |
| {{key:Esc}} | sale del cubo |

Las teclas pulsadas en el cubo se quedan en el cubo: no inician herramientas de DetailCraft.

## Icono de ejes o nada

Abra {{ui:Configuración}} ({{key:Mod+,}}), la pestaña {{ui:DetailCraft}}, y ponga **Indicador de esquina** en {{ui:Cubo de vistas}} (el predeterminado), {{ui:Icono de ejes}} (un pequeño marcador X, Y, Z abajo a la izquierda: X rojo, Y verde, Z azul) o {{ui:Ninguno}}. Este navegador recuerda la elección. Vea [Configuración de DetailCraft](topic:settings#corner-indicator).
