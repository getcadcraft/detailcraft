---
title: Exportar el modelo de acero como USD
summary: Escribí cada pieza y conjunto como USD para programas de render, armado de escenas y otro software 3D, con marcas, perfiles y pesos.
keywords: usd, usda, usdc, usdz, openusd, exportar, acero, conjunto, marcas, perfiles, render
from: c3f67931
---

1. Elegí {{ui:USD}} en el grupo {{ui:Salida}}.
2. Elegí {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}}.

Cada conjunto es un objeto que contiene sus piezas; cada pieza es su perfil a lo largo de su longitud, con los recortes hechos. Cada pieza lleva su marca de pieza, perfil, grado, largo y peso. Todo está en metros con Z hacia arriba.

:::note
Los agujeros de bulón, los bulones, las soldaduras y las zapatas no están en las mallas USD. Están en las salidas IFC, NC y BOM.
:::
