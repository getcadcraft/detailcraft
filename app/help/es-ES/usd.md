---
title: Exportar el modelo de acero como USD
summary: Escriba cada pieza y cada conjunto como USD para programas de renderizado, montaje de escenas y otro software 3D, con marcas, perfiles y pesos.
keywords: usd, usda, usdc, usdz, openusd, exportar, acero, conjunto, marcas, perfiles, renderizado
from: c3f67931
---

1. Elija {{ui:USD}} en el grupo {{ui:Output}}.
2. Seleccione {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} o {{ui:Package (.usdz)}}.

Cada conjunto es un objeto que contiene sus piezas; cada pieza es su sección a lo largo de su longitud, con los recortes hechos. Cada pieza lleva su marca de pieza, perfil, calidad, longitud y peso. Todo está en metros, con Z hacia arriba.

:::note
Los agujeros de tornillo, los tornillos, las soldaduras y las zapatas no están en las mallas USD. Están en las salidas IFC, NC y BOM.
:::
