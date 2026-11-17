---
title: Referencia de varillas
summary: Tamaños de barra, dimensiones de ganchos, códigos de forma, longitudes de corte y columnas de la tabla de doblado que usa DetailCraft.
keywords: varilla, tamaños de barra, ganchos, diámetro de doblado, códigos de forma, longitud de corte, tabla de doblado, lista de barras, astm a615, aci 318
from: 1583535e
---

## Tamaños de barra

De la Tabla 1 de ASTM A615/A615M (designaciones en unidades inglesas). Los milímetros y los kg/m son conversiones exactas de los valores publicados en pulgadas y lb/ft. Las listas muestran cada tamaño así, por ejemplo, «#5 (15.9 mm)».

| Barra | Diámetro (mm) | Masa (kg/m) | Área (mm²) | Diámetro interior de doblado | Pata de gancho de 90°, de exterior a exterior (mm) |
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

En [Configuración de DetailCraft](topic:settings) ({{ui:Varilla}}), los **Nombres de barra ASTM** pueden mostrar estas barras con sus nombres métricos blandos de A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (las mismas barras; la Tabla 1 de ACI 315-99 incluye ambos).

### Barras métricas (BS 4449)

| Barra | Diámetro (mm) | kg/m | Radio mínimo de doblado r (mm) | Pata de gancho = proyección en extremo P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

La masa es la sección nominal por 7850 kg/m³. El radio y la proyección en extremo son los mínimos de BS 8666:2020 (su tabla de dimensiones mínimas; el diámetro de antes es 2r). Las zapatas con barras BS reciben patas de gancho de P y longitudes de corte según las fórmulas de BS 8666 de abajo. Elegir acero europeo en la configuración inicia nuevas zapatas con mallas H16 y barras de arranque H20 en concreto C30/37.

## Ganchos

Barras ASTM: ganchos estándar de 90° según la Tabla 25.3.1 de ACI 318-19: diámetro interior de doblado de 6 db para #3 a #8 y de 8 db para #9 a #11, con una extensión recta de 12 db después del doblez. La pata del gancho, medida de exterior a exterior, es igual a la mitad del diámetro de doblado + db + 12 db.

Si el gancho de una barra de malla no cabe en el peralte de la zapata dentro del recubrimiento, DetailCraft acorta la pata para que quepa y muestra una advertencia.

## Formas

DetailCraft guarda tres formas. La tabla de doblado las imprime como códigos de DetailCraft, como tipos de ACI 315 o como códigos de forma de BS 8666: elija **Códigos de forma de la tabla de doblado** en [Configuración de DetailCraft](topic:settings) ({{ui:Varilla}}).

| Código | Forma | Dimensiones |
|---|---|---|
| S | Recta | A = longitud |
| L | Un doblez de 90° | A = pata principal, B = pata del gancho, ambas de exterior a exterior |
| U | Dos dobleces de 90° del mismo lado | A = tramo central, B y C = las dos patas, de exterior a exterior |

Las barras de malla con {{ui:Ganchos en los extremos}} activado son U; si no, S. Las barras de arranque con {{ui:Gancho en la parte inferior}} activado son L; si no, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sin número de tipo |
| L | 11, L = A + B − 0.5r − d | sin número de tipo: la figura no tiene barra con un solo gancho |
| U | 21, A y C las patas, B el tramo central: L = A + B + C − r − 2d | Tipo 2, ganchos A y G, recta B |

Con códigos de BS 8666 o ACI 315, las columnas A, B y C de la tabla siguen la nomenclatura de esa norma (el tramo central de una U es B).

## Longitud de corte

En barras BS 4449, la longitud de corte es la fórmula de BS 8666 del código de forma de la barra (arriba). En barras ASTM es la longitud exacta del eje de la barra: los tramos rectos más los dobleces como arcos de radio igual a la mitad del diámetro de doblado más la mitad del diámetro de la barra. No se calcula a partir de una tabla de descuentos por doblez, así que puede diferir en unos pocos milímetros de una tabla que sí los use.

## Disposición

- Malla inferior: las barras a lo largo de L forman la capa inferior, y las barras a lo largo de B descansan sobre ellas. Cada juego se reparte uniformemente en la zapata dentro del recubrimiento, con la separación que dé o menor, con al menos dos barras.
- Barras de arranque: una retícula de barras a lo largo de L y de B, con las separaciones que dé, centrada en la zapata, apoyada en la malla y sobresaliendo por encima de la parte superior la proyección que dé. Cada gancho apunta hacia afuera.

## Verificaciones

| Verificación | Regla | Resultado |
|---|---|---|
| Espacio para las barras | El recubrimiento de ambos lados deja espacio para las barras | Se rechaza si no |
| Peralte para dos capas | El peralte menos dos recubrimientos aloja ambas capas de malla | Se rechaza si no |
| Barras de arranque caben | La retícula de arranque cabe dentro del recubrimiento | Se rechaza si no |
| Separación libre | Al menos el mayor de 25.4 mm y db (ACI 318-19 25.2.1; no se verifica el tamaño del agregado) | Advertencia |
| Peralte del gancho | La pata del gancho cabe en el peralte dentro del recubrimiento | Advertencia, pata acortada |
| Ganchos de arranque | Los ganchos no invaden el recubrimiento | Advertencia |

## Columnas de la tabla de doblado

La pestaña {{ui:Tabla de doblado}} y su CSV tienen estas columnas: Marca de barra, Tamaño, Forma, A (mm), B (mm), C (mm), Cantidad, Longitud de corte (mm), Longitud total (m), kg/m, Peso unitario (kg), Peso total (kg), Uso. La última fila suma la cantidad, la longitud y el peso.
