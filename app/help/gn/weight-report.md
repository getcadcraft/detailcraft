---
title: Informe de material y peso por fase
summary: Largos de corte, cantidades, pesos y áreas de pintura de cada fase, con sus bulones y barras de refuerzo, en tabla, CSV o PDF.
keywords: informe, peso, tonelaje, kg, pintura, área de pintura, superficie, recubrimiento, largo de corte, lista de materiales, fase, lista de materiales, csv, pdf
from: 337d6d92
---

En el grupo {{ui:Salida}}, abrí {{ui:Más}} y elegí {{ui:Informe de peso por fase}}, o abrí la pestaña {{ui:Por fase}} debajo de la vista. Muestra:

- **Resumen por fase**: para cada fase, la cantidad de piezas, el peso del acero, el área de pintura, los bulones y las barras de anclaje, y las barras de refuerzo; después los totales.
- **Una tabla por fase**: cada marca de pieza con su tipo, perfil, material, largo de corte, cantidad, peso unitario, peso y área de pintura; después sus bulones y barras de anclaje.

{{ui:Descargar CSV}} guarda las mismas tablas en un solo archivo CSV (`<nombre> informe de peso.csv`). {{ui:Descargar PDF}} hace un informe en el tamaño de hoja de [Ajustes de DetailCraft](topic:settings#drawings), con el resumen primero, cada fase después, las tablas largas continuadas en la página siguiente, y todas las páginas numeradas.

## Cómo se calculan las cifras

- **Los pesos son brutos**, como en la lista de materiales: el peso del perfil por metro multiplicado por el largo de corte. No se descuentan agujeros ni recortes.
- **El área de pintura** es el exterior de la sección a lo largo del largo de corte: para un perfil I, todas las caras de las alas y del alma; para una placa, las dos caras y los bordes; para un tubo, solo el exterior. Los extremos y los agujeros no se cuentan.
- **El refuerzo** es el peso de las barras de las zapatas de la fase, según el [programa de doblado](topic:footings-and-rebar).
- Las placas y los bulones de una conexión cuentan en la fase de su miembro principal. Ver [Fases](topic:phases).

Con [marcas por fase](topic:phases#marks-per-phase) activadas, cada fase tiene sus propias marcas (1-b1, 2-b1). Desactivadas, una marca puede aparecer en más de una fase: cada fase lista las piezas que tiene.
