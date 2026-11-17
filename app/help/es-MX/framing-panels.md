---
title: Paneles de armazón de madera y acero ligero
summary: Arme paneles de muro, piso y techo en madera o acero ligero, con cada pieza, una lista de cortes, un plano de taller y el material por comprar.
keywords: armazón, madera, madera aserrada, acero ligero, conformado en frío, poste, vigueta, cabio, dintel, poste principal, poste de apoyo, poste corto, lista de cortes, plano de taller, panel
from: 3e38ffb9
---

La pestaña {{ui:Armazón}} arma los paneles que describa y le da lo que una cuadrilla de armado y un almacén de madera piden. Los paneles se guardan en el archivo del modelo.

:::warning
Las dimensiones, la separación y los dinteles son datos suyos. DetailCraft no verifica que un poste a esa separación soporte ese muro, ni que un dintel salve esa abertura: eso corresponde a las tablas de su código y a su ingeniero.
:::

## Agregar un panel

Elija {{ui:Agregar un muro}}, {{ui:Agregar un entrepiso}} o {{ui:Agregar un techo}}, luego llene las dimensiones en milímetros, el material (madera o acero ligero) y el tamaño de la pieza. Los tamaños de madera son los nombres nominales con sus medidas acepilladas (2×4 es 38 × 89 mm). Los postes de acero se nombran por altura y espesor, por ejemplo `C92-1.2`.

## Muros

Un muro tiene una solera inferior, una o más soleras superiores (una sola canal en acero), postes extremos, postes a la separación que dé, y para cada abertura: dos postes principales, dos postes de apoyo, un dintel del tamaño y las capas que elija, y postes cortos sobre el dintel (y bajo el alféizar de una ventana). Dé a cada abertura su distancia desde el extremo izquierdo, su ancho, y su altura superior e inferior en bruto, medidas desde el piso base; una puerta tiene una altura inferior de 0.

## Pisos y techos

Un piso tiene viguetas a lo ancho de su claro, a lo largo de su tramo, vigas de borde en ambos extremos y, si lo marca, bloqueo a medio claro. Un panel de techo es un frontón: un par de cabios a la separación que dé (su longitud incluye el alero a lo largo de la pendiente) y una cumbrera.

## Lo que obtiene

Cada panel muestra sus piezas en un dibujo a escala con cada pieza marcada, una lista de cortes por marca y un total. La tabla {{ui:Material por comprar}} acomoda todos los cortes de los paneles en longitudes de material, la más corta que alcanza para los cortes de cada pieza de material. {{ui:Guardar el plano de taller (SVG)}} escribe el dibujo; el botón {{ui:CSV}} escribe todas las listas de cortes y la lista de material.

## Colocar un panel en el modelo

Bajo cada panel, indique dónde va (x, y, z en milímetros y el ángulo) y pulse {{ui:Colocar como miembros}}: cada pieza se convierte en un miembro del modelo, con la sección acepillada de su tamaño y el peso del material (unos 500 kg/m³ para la madera, acero para los postes). Un muro corre a lo largo del ángulo desde su extremo inferior izquierdo, con su base en z; las viguetas de un piso quedan con su cara inferior en z; la elevación de frontón de un techo corre a lo largo del ángulo, con z en la parte superior de las soleras del muro. Cada capa del dintel es un miembro colocado lado a lado. Al pulsarlo de nuevo se reemplazan los miembros colocados antes, y {{ui:Quitar los miembros colocados}} los retira; cada uno es un paso de deshacer. El análisis deja estos miembros fuera: no son miembros de marco de acero.

## Hojas PDF

{{ui:Hojas PDF}} guarda una página A3 para cada panel: el panel a escala con cada pieza marcada, las dimensiones generales, la lista de cortes y una franja de título.

Problemas en el panel {{ui:Problemas}}: una abertura demasiado cerca del extremo de un muro o de otra, un dintel que no cabe bajo las soleras superiores, una pieza más larga que el material más largo.

El panel {{ui:Problemas}} también enumera **Interfaces (LOD 350)** para paneles de muro y muros de concreto: una abertura que pasa del extremo o de la parte superior de su muro, dos aberturas que se traslapan, y una abertura de muro de concreto de más de 1000 mm sin barra de refuerzo de la abertura. Son recomendaciones, las mismas reglas que ejecuta la auditoría de BimCraft; el ancho es el valor inicial de CadCraft, no una norma.
