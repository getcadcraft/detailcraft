---
title: Paneles de entramado de madera y perfiles livianos
summary: Armá paneles de muro, piso y techo en madera o acero liviano, con cada pieza, una lista de cortes, un plano de taller y el stock a comprar.
keywords: entramado, madera, tablas, acero liviano, conformado en frío, montante, viguета, cabio, dintel, montante de apoyo, montante de cajón, pieza corta, lista de cortes, plano de taller, panel
from: 3e38ffb9
---

La pestaña {{ui:Entramado}} arma paneles que describís y te da lo que piden una cuadrilla de carpintería y un corralón de maderas. Los paneles se guardan en el archivo del modelo.

:::warning
Las medidas, la separación y los dinteles son tuyos. DetailCraft no verifica que un montante con esa separación soporte ese muro, ni que un dintel cubra esa abertura: eso corresponde a las tablas de tu norma y a tu ingeniero.
:::

## Agregar un panel

Elegí {{ui:Agregar un muro}}, {{ui:Agregar un piso}} o {{ui:Agregar un techo}}, y luego completá las dimensiones en milímetros, el material (madera o acero liviano) y el tamaño del miembro. Los tamaños de madera son los nombres comerciales con sus medidas cepilladas (2×4 es 38 × 89 mm). Los montantes de acero se nombran por altura y espesor, por ejemplo `C92-1.2`.

## Muros

Un muro tiene una solera inferior, una o más soleras superiores (un solo riel para acero), montantes de extremo, montantes a la separación que des, y para cada abertura: dos montantes de apoyo, dos montantes de cajón, un dintel del tamaño y las capas que elijas, y piezas cortas sobre el dintel (y bajo el alféizar de una ventana). Dale a cada abertura su distancia desde el extremo izquierdo, su ancho, y su parte superior e inferior de vano en bruto medidas desde el contrapiso; una puerta tiene una base de 0.

## Pisos y techos

Un piso tiene vigas de piso a lo ancho de su luz, vigas de borde en ambos extremos y, si lo marcás, bloqueo a mitad de luz. Un panel de techo es un frontón: un par de cabios a la separación que des (su largo incluye el alero a lo largo de la pendiente) y una cumbrera.

## Lo que obtenés

Cada panel muestra sus piezas en un plano a escala con cada pieza marcada, una lista de cortes por marca y un total. La tabla {{ui:Stock a comprar}} agrupa todos los cortes de los paneles en largos comerciales, el más corto que alcanza para los cortes de cada barra. {{ui:Guardar el plano de taller (SVG)}} escribe el plano; el botón {{ui:CSV}} escribe todas las listas de cortes y la lista de stock.

## Colocar un panel en el modelo

Debajo de cada panel, indicá dónde va (x, y, z en milímetros y el ángulo) y presioná {{ui:Colocar como miembros}}: cada pieza pasa a ser un miembro del modelo, con la sección cepillada de su tamaño y el peso del material (unos 500 kg/m³ para la madera, acero para los montantes). Un muro corre a lo largo del ángulo desde su extremo inferior izquierdo, con su base en z; las vigas de un piso quedan con su cara inferior en z; la elevación de frontón de un techo corre a lo largo del ángulo con z en la parte superior de las soleras del muro. Cada capa de un dintel es un miembro al lado de la otra. Si lo presionás de nuevo, reemplaza los miembros colocados antes, y {{ui:Quitar los miembros colocados}} los saca; cada uno es un paso de deshacer. El Análisis deja afuera estos miembros: no son miembros de entramado de acero.

## PDF de planos

{{ui:PDF de planos}} guarda una página A3 por cada panel: el panel a escala con cada pieza marcada, las dimensiones generales, la lista de cortes y una franja de título.

Problemas en el panel {{ui:Problemas}}: una abertura demasiado cerca del extremo de un muro o de otra, un dintel que no entra bajo las soleras, una pieza más larga que el stock más largo.

El panel {{ui:Problemas}} también lista **Interfaces (LOD 350)** para paneles de muro y muros de hormigón: una abertura que pasa del extremo o de la parte superior de su muro, dos aberturas que se superponen, y una abertura en un muro de hormigón de más de 1000 mm sin barra de refuerzo de borde. Son recomendaciones, las mismas reglas que corre la auditoría de BimCraft; el ancho es el valor inicial de CadCraft, no una norma.
