---
title: Ajustes de DetailCraft
summary: Empiece nuevas piezas como perfiles estadounidenses o europeos, defina cuánto se desplaza una copia con Duplicar, elija si las copias llevan sus uniones, y muestre u oculte los tornillos en la vista 3D.
keywords: ajustes, preferencias, tamaño de hoja, tamaño de papel, planos, opciones, acero, aisc, en, europeo, perfiles estadounidenses, perfil predeterminado, calidad, s355, a992, desplazamiento de duplicado, desplazamiento al pegar, copiar uniones, tornillos, barras de anclaje, ocultar tornillos, restablecer
from: e46cea57
---

Abra {{ui:Ajustes}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:DetailCraft}}, contiene los ajustes propios de esta aplicación; {{ui:General}} contiene los que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). Los ajustes de DetailCraft solo existen en la aplicación: los cambia aquí, surten efecto de inmediato y este navegador los recuerda. No se guardan en su archivo de modelo.

## Piezas nuevas

Qué perfiles y calidades usan al principio las herramientas de colocación:

| Herramienta | Perfiles US (AISC), A992 | Perfiles europeos (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Pilar}} | W12x50, A992 | HEB200, S355 |
| {{ui:Diagonal}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placa}} | A36 | S355 |

Los perfiles US (AISC) son el punto de partida. La opción europea usa un HEA160 para las diagonales porque el catálogo EN de DetailCraft aún no tiene perfiles huecos ([Catálogo de perfiles](topic:profile-catalog)). Aún puede elegir cualquier perfil y calidad para la siguiente pieza en el panel {{ui:Propiedades}} mientras una herramienta de colocación está activa. Las piezas que ya están en el modelo conservan su propio perfil y calidad.

## Duplicar y pegar

- **Desplazamiento (mm)**: x, y y z. {{ui:Duplicar}} ({{key:Mod+D}}) coloca la copia a esta distancia del original, y el formulario {{ui:Pegar por desplazamiento (mm, desde el original)}} empieza con él. Empieza en 6000, 0, 0: un vano de 6 m a lo largo de los ejes numerados. Ajústelo a la separación de sus vanos, o a una altura de nivel en z para copiar una planta hacia arriba.
- **Copiar chapas de testa y placas de base con sus elementos** (activado al inicio): una unión llega con una copia solo cuando se copian todas las piezas que une. Desactívelo para copiar piezas y zapatas sin sus uniones, por ejemplo para probar otra unión en la copia.

Véase [Copiar, pegar y duplicar](topic:copy-paste).

## Vista 3D

**Mostrar tornillos y barras de anclaje** (activado al inicio). Desactívelo para ocultarlos en la vista y ver los taladros y placas de una unión congestionada. Los tornillos ocultos no se pueden pulsar; pulse la placa para seleccionar la unión. La lista de materiales, los planos y todas las exportaciones siguen incluyendo todos los tornillos y barras.

## Indicador de esquina

Lo que aparece en la esquina de la vista 3D: **Cubo de vista** (el inicial, arriba a la derecha: pulse una cara, arista o vértice para mirar desde allí, arrástrelo para orbitar, arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Solo en {{ui:3D}}; {{ui:Planta}} y {{ui:Alzado}} no muestran ninguno. Véase [El cubo de vista](topic:view-cube).

## Restablecer

{{ui:Restablecer ajustes de DetailCraft}} al pie del cuadro devuelve estos ajustes a su valor inicial (perfiles US, desplazamiento 6000, 0, 0, uniones copiadas, tornillos visibles), junto con los de {{ui:General}}.

## Planos

**Tamaño de hoja**: las hojas de planos y de taller se hacen en horizontal: A4, A3 (el inicial), A2, A1, ANSI B, ANSI C o ANSI D. Las ventanas de {{ui:Planos}} y de plano de taller tienen la misma lista. Véase [Planos de conjunto y de disposición general](topic:drawings).

## Armadura

- **Nombres de barra ASTM**: de #3 a #11, o los métricos blandos de #10 a #36 para las mismas barras.
- **Códigos de forma de la tabla de doblado**: S, L, U de DetailCraft; tipos de ACI 315; o códigos de forma de BS 8666. Véase [Referencia de armadura](topic:rebar-reference).

## Arrastre para seleccionar

**Rectángulo** (como antes) o **Lazo**: una línea a mano alzada, con {{key:Space}} para cambiar entre dentro, tocar y valla mientras arrastra. Véase [Seleccionar con una ventana](topic:select-and-change#select-with-a-window).
