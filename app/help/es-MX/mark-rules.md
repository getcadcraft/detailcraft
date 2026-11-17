---
title: Reglas de marcas
summary: Cuándo exactamente dos piezas o dos ensamblajes comparten una marca, cómo se numeran las marcas y cómo funcionan las marcas de zapatas y de varillas.
keywords: marcas, numeración, marca de pieza, marca de ensamblaje, prefijo, tolerancia, piezas idénticas, marcas de varillas, marcas de zapatas
from: ce02c98e
---

DetailCraft recalcula cada marca después de cada cambio. No se guarda nada, así que las marcas siempre describen el modelo tal como está ahora. Vea [Revisar marcas y la lista de materiales](topic:marks-and-bom) para saber cómo usarlas.

## Marcas de pieza

Dos piezas comparten una marca de pieza cuando coinciden todos estos puntos:

1. El tipo de pieza (viga, columna, contraviento o placa).
2. El nombre del perfil (no distingue mayúsculas).
3. El material (no distingue mayúsculas).
4. La longitud de corte, dentro de 1 mm.
5. Cada agujero: cara, posición a lo largo y a lo ancho, dentro de 1 mm, y diámetro dentro de 0.1 mm.
6. Cada corte: extremo, lado, longitud y profundidad, dentro de 1 mm.

El {{ui:Nombre}} del miembro no cuenta. Tampoco su posición en el modelo, su rotación ni la forma en que se dibujó, siempre que la pieza sea la misma.

### Piezas volteadas

Una pieza se compara de todas las formas en que podría voltearse y que hagan coincidir su sección consigo misma. Si alguna de ellas la hace coincidir con otra pieza, comparten una marca.

| Forma | Giros que cuentan |
|---|---|
| Perfiles en I, HSS rectangulares, placas | De extremo a extremo (sobre el eje vertical), de extremo a extremo (sobre el eje horizontal), y boca abajo sobre su propia longitud |
| Canales | De extremo a extremo sobre el eje horizontal únicamente, para que el alma quede del mismo lado |
| Ángulos, HSS redondos | Ninguno: se comparan tal como están colocados |

Así, una viga con un agujero cerca de su extremo izquierdo coincide con una viga con el mismo agujero cerca de su extremo derecho, y una columna con agujeros en un patín coincide con una columna con los mismos agujeros en el otro patín.

### Numeración

| Tipo | Prefijo de pieza | Prefijo de ensamblaje |
|---|---|---|
| Columna | c | C |
| Viga | b | B |
| Contraviento | br | BR |
| Placa (colocada, placa de extremo o placa base) | p | P |

Las marcas se numeran desde 1 dentro de cada prefijo. El orden es: columnas, luego vigas, contravientos y placas; dentro de cada tipo, por nombre de perfil en orden natural (W8x10 antes que W12x26); después, las piezas más largas primero.

Como la numeración sigue ese orden, agregar o cambiar una pieza puede desplazar los números de otras.

## Marcas de ensamblaje

- Toda pieza que no esté soldada a otra pieza es la pieza principal de su propio ensamblaje.
- Las placas de extremo se sueldan a su viga, y las placas base a su columna, así que pertenecen al ensamblaje de ese miembro.
- Dos ensamblajes comparten una marca cuando sus piezas principales comparten una marca de pieza y sus piezas unidas tienen las mismas marcas en los mismos lugares (dentro de 1 mm), permitiendo los mismos giros que la pieza principal.
- El prefijo del ensamblaje sigue a la pieza principal: una viga con dos placas de extremo es un ensamblaje B.

Las placas que coloque con la herramienta {{ui:Placa}} no están soldadas a nada, así que cada una es su propio ensamblaje P.

## Marcas de zapatas

Las zapatas con la misma longitud, ancho, profundidad, texto de concreto, malla inferior y varillas de arranque comparten una marca: F1, F2 … en el orden en que se colocaron. La posición y la rotación no cuentan.

## Marcas de varillas

Las varillas con el mismo tamaño, forma y dimensiones A, B y C (redondeadas al milímetro) comparten una marca en todas las zapatas. La marca es el número de varilla, F y un contador por tamaño de varilla: 5F1, 5F2, 6F1. Una varilla en el sentido largo y una en el sentido corto de una zapata cuadrada son la misma varilla y comparten una marca; la columna {{ui:Uso}} del cuadro de cortes enumera ambos usos.
