---
title: Paneles de entramado de madera y de acero conformado en frío
summary: Enmarcar paneles de muro, forjado y cubierta en madera o acero conformado en frío, con cada pieza, una lista de cortes, un plano de taller y el material que hay que comprar.
keywords: entramado, madera, madera aserrada, acero conformado en frío, perfil, pie derecho, vigueta, par, dintel, pie derecho principal, pie derecho secundario, pie derecho corto, lista de cortes, plano de taller, panel
from: 3e38ffb9
---

La pestaña {{ui:Entramado}} enmarca los paneles que describa y le da lo que piden una cuadrilla de carpintería y un almacén de madera. Los paneles se guardan en el archivo del modelo.

:::warning
Las dimensiones, la separación y los dinteles son suyos. DetailCraft no comprueba que un pie derecho a esa separación soporte ese muro, ni que un dintel salve ese hueco: eso corresponde a las tablas de su código y a su ingeniero.
:::

## Añadir un panel

Elija {{ui:Añadir un muro}}, {{ui:Añadir un forjado}} o {{ui:Añadir una cubierta}}, y luego rellene las dimensiones en milímetros, el material (madera o acero conformado en frío) y el tamaño de la pieza. Los tamaños de madera son las denominaciones nominales con sus medidas netas (2×4 es 38 × 89 mm). Los montantes de acero se nombran por canto y espesor, por ejemplo `C92-1.2`.

## Muros

Un muro tiene una solera inferior, una o más soleras superiores (una sola canal en acero), pies derechos de extremo, pies derechos a la separación que indique y, para cada hueco: dos pies derechos principales, dos pies derechos secundarios, un dintel del tamaño y las capas que elija, y pies derechos cortos sobre el dintel (y bajo el antepecho de una ventana). Dé a cada hueco su distancia al extremo izquierdo, su anchura y la altura superior e inferior del hueco de obra, medida desde el suelo base; una puerta tiene una altura inferior de 0.

## Forjados y cubiertas

Un forjado tiene viguetas a lo ancho de su luz a lo largo de su vano, vigas de borde en ambos extremos y, si lo marca, cadenetas en el centro del vano. Un panel de cubierta es a dos aguas: una pareja de pares a la separación que indique (su longitud incluye el vuelo del alero a lo largo de la pendiente) y una cumbrera.

## Lo que obtiene

Cada panel muestra sus piezas en un dibujo a escala con cada pieza marcada, una lista de cortes por marca y un total. La tabla {{ui:Material que hay que comprar}} agrupa todos los cortes de los paneles en longitudes de material, la más corta que sirve para los cortes de cada barra. {{ui:Guardar el plano de taller (SVG)}} escribe el dibujo; el botón {{ui:CSV}} escribe todas las listas de cortes y la lista de material.

## Colocar un panel en el modelo

Bajo cada panel, indique dónde va (x, y, z en milímetros y el ángulo) y pulse {{ui:Colocar como barras}}: cada pieza se convierte en una barra del modelo, con la sección de medidas netas de su tamaño y el peso del material (unos 500 kg/m³ para la madera, acero para los montantes). Un muro discurre a lo largo del ángulo desde su extremo inferior izquierdo, con su base en z; las viguetas de un forjado se sitúan con su cara inferior en z; el alzado a dos aguas de una cubierta discurre a lo largo del ángulo, con z en la parte superior de las soleras del muro. Cada capa del dintel es una barra colocada al lado de la otra. Pulsarlo de nuevo sustituye las barras colocadas antes, y {{ui:Quitar las barras colocadas}} las elimina; cada una es un paso de deshacer. El Análisis excluye estas barras: no son barras de un pórtico de acero.

## Hojas PDF

{{ui:Hojas PDF}} guarda una página A3 por cada panel: el panel a escala con cada pieza marcada, las dimensiones totales, la lista de cortes y una franja de título.

Problemas en el panel {{ui:Problemas}}: un hueco demasiado cerca del extremo de un muro o de otro hueco, un dintel que no cabe bajo las soleras superiores, una pieza más larga que el material más largo disponible.

El panel {{ui:Problemas}} también enumera **Interfaces (LOD 350)** para paneles de muro y muros de hormigón: un hueco que se sale del extremo o de la parte superior de su muro, dos huecos que se solapan, y un hueco en un muro de hormigón de más de 1000 mm de ancho sin barra de refuerzo de borde del hueco. Son recomendaciones, con las mismas reglas que ejecuta la auditoría de BimCraft; la anchura es el valor inicial de CadCraft, no una norma.
