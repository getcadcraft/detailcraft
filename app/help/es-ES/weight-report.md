---
title: Informe de material y peso por fase
summary: Longitudes de corte, cantidades, pesos y superficies de pintura de cada fase, con sus tornillos y su armadura, en tabla, CSV o PDF.
keywords: informe, peso, tonelaje, kg, pintura, área de pintura, superficie, recubrimiento, longitud de corte, lista de material, fase, lista de materiales, csv, pdf
from: 337d6d92
---

En el grupo {{ui:Output}}, abra {{ui:More}} y elija {{ui:Weight report by phase}}, o abra la pestaña {{ui:By phase}} bajo la vista. Muestra:

- **Resumen por fase**: para cada fase, el número de piezas, el peso del acero, la superficie de pintura, los tornillos y pernos de anclaje, y la armadura; después, los totales.
- **Una tabla por fase**: cada marca de pieza con su tipo, perfil, material, longitud de corte, cantidad, peso unitario, peso y superficie de pintura; después, sus tornillos y pernos de anclaje.

{{ui:Download CSV}} guarda las mismas tablas en un único archivo CSV (`<name> weight report.csv`). {{ui:Download PDF}} genera un informe en el tamaño de hoja de los [ajustes de DetailCraft](topic:settings#drawings), con el resumen primero, cada fase después, las tablas largas continuadas en la página siguiente y todas las páginas numeradas.

## Cómo se calculan las cifras

- **Los pesos** son brutos, como en la lista de materiales: el peso del perfil por metro multiplicado por la longitud de corte. No se descuentan los agujeros ni los recortes.
- **La superficie de pintura** es el exterior de la sección a lo largo de la longitud de corte: en un perfil en I, todas las caras de las alas y del alma; en una chapa, ambas caras y los cantos; en un tubo, solo el exterior. Los extremos y los agujeros no se cuentan.
- **La armadura** es el peso de las barras de las zapatas de la fase, según la [programación de doblado](topic:footings-and-rebar).
- Las chapas y los tornillos de una conexión cuentan en la fase de su pieza principal. Véase [Fases](topic:phases).

Con [marcas por fase](topic:phases#marks-per-phase) activadas, cada fase tiene sus propias marcas (1-b1, 2-b1). Desactivadas, una marca puede aparecer en más de una fase: cada fase lista las piezas que tiene.
