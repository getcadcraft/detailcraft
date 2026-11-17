---
title: Referencia de hierro de refuerzo
summary: Tamaño de barra, dimensión de gancho, código de forma, largo de corte y columnas de la planilla de doblado ojeporúva DetailCraft-pe.
keywords: hierro de refuerzo, tamaño de barra, gancho, diámetro de doblado, código de forma, largo de corte, planilla de doblado, lista de barras, astm a615, aci 318
from: 1583535e
---

## Tamaño de barra

ASTM A615/A615M Tabla 1 rupi (designación en pulgadas). Milímetro ha kg/m ha'e conversión exacta de valor publicado en pulgada ha lb/ft. Lista-pe cada tamaño ohechauka upeicha, por ejemplo, "#5 (15.9 mm)".

| Barra | Diámetro (mm) | Masa (kg/m) | Superficie (mm²) | Diámetro interior de doblado | Pata de gancho de 90°, exterior a exterior (mm) |
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

En [Configuración de DetailCraft](topic:settings) ({{ui:Hierro de refuerzo}}), **Nombres de barra ASTM** puede mostrar estas barras con sus nombres métricos blandos A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (ha'e mismas barras; ACI 315-99 Tabla 1 ombohasa ambo).

### Barra métrica (BS 4449)

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

Masa ha'e sección nominal ojehechapa 7850 kg/m³-pe. Radio ha proyección en extremo ha'e mínimo de BS 8666:2020 (tabla de dimensiones mínimas; diámetro anterior ha'e 2r). Zapatas con barras BS ohupyty patas de gancho P ha largos de corte según fórmulas BS 8666 de abajo. Elegí acero europeo en la configuración ojapo zapata pyahu malla H16 ha barras de arranque H20 hormigón C30/37-pe.

## Ganchos

Barras ASTM: ganchos estándar de 90° de ACI 318-19 Tabla 25.3.1: diámetro interior de doblado 6 db para #3 a #8 ha 8 db para #9 a #11, con extensión recta de 12 db después del doblez. La pata de gancho, medida exterior a exterior, ha'e mitad del diámetro de doblado + db + 12 db.

Si el gancho de una barra de malla no entra en la profundidad de la zapata dentro del recubrimiento, DetailCraft acorta la pata para que entre y ohechauka aviso.

## Formas

DetailCraft ombyatýva mbohapy forma. La planilla de doblado ohechauka ramo códigos DetailCraft-gui, tipos ACI 315 térã códigos de forma BS 8666-gui: eiporavo **Códigos de forma de la planilla de doblado** en [Configuración de DetailCraft](topic:settings) ({{ui:Hierro de refuerzo}}).

| Código | Forma | Dimensiones |
|---|---|---|
| S | Recta | A = largo |
| L | Un doblez de 90° | A = pata principal, B = pata de gancho, ambas exterior a exterior |
| U | Dos dobleces de 90° del mismo lado | A = central, B y C = las dos patas, exterior a exterior |

Barras de malla con {{ui:Ganchos de extremo}} activado ha'e U; sin eso, S. Barras de arranque con {{ui:Gancho en la parte inferior}} activado ha'e L; sin eso, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sin número de tipo |
| L | 11, L = A + B − 0.5r − d | sin número de tipo: la figura no tiene barra con peteĩ gancho |
| U | 21, A y C las patas, B el central: L = A + B + C − r − 2d | Tipo 2, ganchos A y G, recta B |

Con códigos BS 8666 o ACI 315, las columnas A, B y C de la planilla siguen la letra de esa norma (el central de una U ha'e B).

## Largo de corte

Para barras BS 4449, el largo de corte ha'e fórmula BS 8666 del código de forma de la barra (arriba). Para barras ASTM ha'e el largo exacto del eje central de la barra: las partes rectas más los dobleces como arcos a mitad del diámetro de doblado más mitad del diámetro de la barra. No se calcula con una tabla de descuentos por doblez, upévare puede diferir unos milímetros de una planilla que sí use una.

## Disposición

- Malla inferior: las barras a lo largo de L forman la capa de abajo; las barras a lo largo de B descansan sobre ellas. Cada juego se reparte parejo en la zapata dentro del recubrimiento, a la separación ome'ẽva térã menor, con al menos dos barras.
- Barras de arranque: una grilla de barras a lo largo de L y a lo largo de B a las separaciones ome'ẽva, centrada en la zapata, apoyada en la malla y sobresaliendo por arriba la proyección ome'ẽva. Cada gancho apunta hacia afuera.

## Verificaciones

| Verificación | Regla | Resultado |
|---|---|---|
| Espacio para barras | El recubrimiento a ambos lados deja lugar para las barras | Rechazado si no |
| Profundidad para dos capas | La profundidad menos dos recubrimientos alberga ambas capas de malla | Rechazado si no |
| Entran las barras de arranque | La grilla de arranque entra dentro del recubrimiento | Rechazado si no |
| Separación libre | Al menos el mayor de 25.4 mm y db (ACI 318-19 25.2.1; tamaño de agregado no verificado) | Aviso |
| Profundidad del gancho | La pata del gancho entra en la profundidad dentro del recubrimiento | Aviso, pata acortada |
| Ganchos de arranque | Los ganchos quedan fuera del recubrimiento | Aviso |

## Columnas de la planilla de doblado

La pestaña {{ui:Planilla de doblado}} y su CSV tienen estas columnas: Marca de barra, Tamaño, Forma, A (mm), B (mm), C (mm), Cantidad, Largo de corte (mm), Largo total (m), kg/m, Peso por unidad (kg), Peso total (kg), Usado para. La última fila suma la cantidad, el largo y el peso.
