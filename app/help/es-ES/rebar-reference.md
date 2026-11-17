---
title: Referencia de armadura
summary: Diámetros de barra, dimensiones de ganchos, códigos de forma, longitudes de corte y columnas de la tabla de doblado que usa DetailCraft.
keywords: armadura, diámetros de barra, ganchos, diámetro de doblado, códigos de forma, longitud de corte, tabla de doblado, lista de barras, astm a615, aci 318
from: 1583535e
---

## Diámetros de barra

Según ASTM A615/A615M Tabla 1 (designaciones en unidades inglesas). Los milímetros y los kg/m son conversiones exactas de los valores publicados en pulgadas y lb/ft. Las listas muestran cada tamaño así, por ejemplo: "#5 (15.9 mm)".

| Barra | Diámetro (mm) | Masa (kg/m) | Área (mm²) | Diámetro interior de doblado | Patilla del gancho de 90°, de extremo a extremo (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

En [Ajustes de DetailCraft](topic:settings) ({{ui:Armadura}}), **nombres de barra ASTM** puede mostrar estas barras con sus nombres métricos blandos A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (las mismas barras; ACI 315-99 Tabla 1 recoge ambos).

### Barras métricas (BS 4449)

| Barra | Diámetro (mm) | kg/m | Radio mínimo de doblado r (mm) | Patilla del gancho = proyección en extremo P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

La masa es la sección nominal por 7850 kg/m³. El radio y la proyección en extremo son los mínimos de BS 8666:2020 (su tabla de dimensiones mínimas; el antiguo diámetro es 2r). Las zapatas con barras BS reciben patillas de P y longitudes de corte según las fórmulas de BS 8666 de abajo. Si elige acero europeo en los ajustes, las zapatas nuevas empiezan con parrillas H16 y barras de arranque H20 en hormigón C30/37.

## Ganchos

Barras ASTM: ganchos estándar de 90° de ACI 318-19 Tabla 25.3.1: diámetro interior de doblado de 6 db para #3 a #8 y de 8 db para #9 a #11, con una prolongación recta de 12 db después de la curva. La patilla del gancho, medida de extremo a extremo, es la mitad del diámetro de doblado + db + 12 db.

Si el gancho de una barra de parrilla no cabe en el canto de la zapata dentro del recubrimiento, DetailCraft acorta la patilla para que quepa y muestra una advertencia.

## Formas

DetailCraft guarda tres formas. La tabla de doblado las imprime con los códigos de DetailCraft, como tipos de ACI 315 o como códigos de forma de BS 8666: elija **Códigos de forma de la tabla de doblado** en [Ajustes de DetailCraft](topic:settings) ({{ui:Armadura}}).

| Código | Forma | Dimensiones |
|---|---|---|
| S | Recta | A = longitud |
| L | Una curva de 90° | A = pierna principal, B = pierna del gancho, ambas de extremo a extremo |
| U | Dos curvas de 90° hacia el mismo lado | A = central, B y C = las dos patillas, de extremo a extremo |

Las barras de parrilla con {{ui:Ganchos en los extremos}} activado son U; sin él, son S. Las barras de arranque con {{ui:Gancho en la parte inferior}} activado son L; sin él, son S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sin número de tipo |
| L | 11, L = A + B − 0.5r − d | sin número de tipo: la figura no tiene barras con un solo gancho |
| U | 21, A y C las patillas, B la central: L = A + B + C − r − 2d | Tipo 2, ganchos A y G, recta B |

Con los códigos BS 8666 o ACI 315, las columnas A, B y C de la tabla siguen la notación de esa norma (la central de una U es B).

## Longitud de corte

Para barras BS 4449, la longitud de corte es la fórmula de BS 8666 del código de forma de la barra (arriba). Para barras ASTM es la longitud exacta del eje de la barra: los tramos rectos más las curvas como arcos de medio diámetro de doblado más medio diámetro de la barra. No se calcula a partir de una tabla de descuentos por doblado, así que puede diferir unos pocos milímetros de una tabla que sí los use.

## Disposición

- Parrilla inferior: las barras a lo largo de L forman la capa inferior, y las barras a lo largo de B descansan sobre ellas. Cada conjunto se reparte de forma uniforme por la zapata dentro del recubrimiento, a la separación indicada o menor, con al menos dos barras.
- Barras de arranque: una malla de barras a lo largo de L y a lo largo de B, a las separaciones indicadas, centrada en la zapata, apoyada en la parrilla y sobresaliendo por encima de la cara superior la proyección indicada. Cada gancho apunta hacia fuera.

## Comprobaciones

| Comprobación | Regla | Resultado |
|---|---|---|
| Espacio para las barras | El recubrimiento a ambos lados deja espacio para las barras | Rechazado si no |
| Canto para dos capas | El canto menos dos recubrimientos aloja ambas capas de la parrilla | Rechazado si no |
| Ajuste de los arranques | La malla de arranque cabe dentro del recubrimiento | Rechazado si no |
| Separación libre | Al menos el mayor entre 25.4 mm y db (ACI 318-19 25.2.1; no se comprueba el tamaño del árido) | Advertencia |
| Canto del gancho | La pierna del gancho cabe en el canto dentro del recubrimiento | Advertencia, pierna acortada |
| Ganchos de arranque | Los ganchos quedan fuera del recubrimiento | Advertencia |

## Columnas de la tabla de doblado

La pestaña {{ui:Tabla de doblado}} y su CSV tienen estas columnas: Marca de barra, Tamaño, Forma, A (mm), B (mm), C (mm), Cantidad, Longitud de corte (mm), Longitud total (m), kg/m, Peso unitario (kg), Peso total (kg) y Utilizada para. La última fila totaliza la cantidad, la longitud y el peso.
