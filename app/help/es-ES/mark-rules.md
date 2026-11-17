---
title: Reglas de marcas
summary: Cuándo exactamente dos piezas o dos conjuntos comparten marca, cómo se numeran las marcas y cómo funcionan las marcas de zapatas y de barras.
keywords: marcas, numeración, marca de pieza, marca de conjunto, prefijo, tolerancia, piezas idénticas, marcas de barras, marcas de zapatas
from: ce02c98e
---

DetailCraft recalcula cada marca tras cada cambio. No se guarda nada, así que las marcas siempre describen el modelo tal como está ahora. Consulte [Comprobar marcas y la lista de materiales](topic:marks-and-bom) para saber cómo usarlas.

## Marcas de pieza

Dos piezas comparten marca de pieza cuando coinciden todos estos puntos:

1. El tipo de pieza (viga, pilar, diagonal o placa).
2. El nombre del perfil (sin distinguir mayúsculas).
3. El material (sin distinguir mayúsculas).
4. La longitud de corte, con una tolerancia de 1 mm.
5. Cada agujero: cara, posición a lo largo y a través, con 1 mm de tolerancia, y diámetro con 0.1 mm de tolerancia.
6. Cada recorte: extremo, lado, longitud y profundidad, con 1 mm de tolerancia.

El {{ui:Nombre}} del elemento no cuenta. Tampoco su posición en el modelo, su giro ni el sentido en que se dibujó, siempre que la pieza en sí sea la misma.

### Piezas volteadas

Una pieza se compara en todas las formas en que podría voltearse y que hacen coincidir su sección consigo misma. Si alguna de ellas la hace coincidir con otra pieza, comparten marca.

| Forma | Giros que cuentan |
|---|---|
| Perfiles en I, HSS rectangular, placas | De extremo a extremo (alrededor del eje vertical), de extremo a extremo (alrededor del eje horizontal), y boca abajo alrededor de su propia longitud |
| Perfiles en U | De extremo a extremo alrededor del eje horizontal solamente, para que el alma quede del mismo lado |
| Angulares, HSS redondo | Ninguno: se comparan tal como están colocados |

Así, una viga con un agujero cerca de su extremo izquierdo coincide con una viga con el mismo agujero cerca de su extremo derecho, y un pilar con agujeros en un ala coincide con un pilar con los mismos agujeros en la otra ala.

### Numeración

| Tipo | Prefijo de pieza | Prefijo de conjunto |
|---|---|---|
| Pilar | c | C |
| Viga | b | B |
| Diagonal | br | BR |
| Placa (colocada, placa de testa o placa de base) | p | P |

Las marcas se numeran desde 1 dentro de cada prefijo. El orden es: pilares, luego vigas, diagonales y placas; dentro de cada tipo, por nombre de perfil en orden natural (W8x10 antes que W12x26); y después las piezas más largas primero.

Como la numeración sigue ese orden, añadir o cambiar una pieza puede desplazar los números de otras.

## Marcas de conjunto

- Cada pieza que no está soldada a otra pieza es la pieza principal de su propio conjunto.
- Las placas de testa van soldadas a su viga, y las placas de base a su pilar, así que pertenecen al conjunto de ese elemento.
- Dos conjuntos comparten marca cuando sus piezas principales comparten marca de pieza y sus piezas unidas tienen las mismas marcas en los mismos puntos (con 1 mm de tolerancia), permitiendo los mismos giros que la pieza principal.
- El prefijo del conjunto sigue a la pieza principal: una viga con dos placas de testa es un conjunto B.

Las placas que coloque con la herramienta {{ui:Placa}} no van soldadas a nada, así que cada una es su propio conjunto P.

## Marcas de zapatas

Las zapatas con la misma longitud, anchura, profundidad, especificación del hormigón, malla inferior y barras de arranque comparten marca: F1, F2 … en el orden en que se colocaron. La posición y el giro no cuentan.

## Marcas de barras

Las barras con el mismo tamaño, forma y dimensiones A, B y C (redondeadas al milímetro) comparten marca en todas las zapatas. La marca es el número de barra, F, y un contador por tamaño de barra: 5F1, 5F2, 6F1. Una barra en sentido largo y una en sentido corto de una zapata cuadrada son la misma barra y comparten marca; la columna {{ui:Se usa en}} de la {{ui:Tabla de doblado}} enumera ambos usos.
