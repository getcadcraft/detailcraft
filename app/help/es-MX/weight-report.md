---
title: Reporte de materiales y peso por fase
summary: Longitudes de corte, cantidades, pesos y áreas de pintura por fase, con sus pernos y varillas, en tabla, CSV o PDF.
keywords: reporte, peso, tonelaje, kg, pintura, área de pintura, área superficial, recubrimiento, longitud de corte, lista de materiales, fase, BOM, csv, pdf
from: 337d6d92
---

En el grupo {{ui:Salida}}, abra {{ui:Más}} y elija {{ui:Reporte de peso por fase}}, o abra la pestaña {{ui:Por fase}} debajo de la vista. Muestra:

- **Resumen por fase**: para cada fase, el número de piezas, el peso de acero, el área de pintura, los pernos y anclas, y las varillas; luego los totales.
- **Una tabla por fase**: cada marca de pieza con su tipo, perfil, material, longitud de corte, cantidad, peso unitario, peso y área de pintura; luego sus pernos y anclas.

{{ui:Descargar CSV}} guarda las mismas tablas en un solo archivo CSV (`<name> weight report.csv`). {{ui:Descargar PDF}} genera un reporte en el tamaño de hoja de [Configuración de DetailCraft](topic:settings#drawings), con el resumen primero, cada fase después, las tablas largas continuando en la página siguiente, y todas las páginas numeradas.

## Cómo se calculan las cifras

- **Los pesos son brutos**, como en la lista de materiales: el peso por metro del perfil multiplicado por la longitud de corte. No se descuentan agujeros ni recortes.
- **El área de pintura** es el exterior del perfil a lo largo de la longitud de corte: en un perfil en I, todas las caras de los patines y el alma; en una placa, ambas caras y los cantos; en un tubo, solo el exterior. Los extremos y los agujeros no se cuentan.
- **Las varillas** son el peso de las barras de las zapatas de la fase, según el [programa de doblado](topic:footings-and-rebar).
- Las placas y pernos de una conexión cuentan en la fase de su miembro principal. Vea [Fases](topic:phases).

Con [marcas por fase](topic:phases#marks-per-phase) activadas, cada fase tiene sus propias marcas (1-b1, 2-b1). Con la opción desactivada, una marca puede aparecer en más de una fase: cada fase lista las piezas que tiene.
