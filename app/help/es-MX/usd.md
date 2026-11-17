---
title: Exportar el modelo de acero como USD
summary: Escriba cada pieza y ensamblaje como USD para programas de render, ensamblaje de escenas y otro software 3D, con marcas, perfiles y pesos.
keywords: usd, usda, usdc, usdz, openusd, exportar, acero, ensamblaje, marcas, perfiles, render
from: c3f67931
---

1. Elija {{ui:USD}} en el grupo {{ui:Salida}}.
2. Elija {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}}.

Cada ensamblaje es un objeto que contiene sus piezas; cada pieza es su perfil a lo largo de su longitud, con los recortes hechos. Cada pieza lleva su marca de pieza, perfil, grado, longitud y peso. Todo está en metros, con Z hacia arriba.

:::note
Los agujeros, pernos, soldaduras y zapatas no están en las mallas de USD. Están en las salidas de IFC, NC y BOM.
:::
