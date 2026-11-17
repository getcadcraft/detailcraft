---
title: Reglas de marcas
summary: Cuándo exactamente dos piezas o dos conjuntos comparten una marca, cómo se numeran las marcas, y cómo funcionan las marcas de zapata y de barra.
keywords: marcas, numeración, marca de pieza, marca de conjunto, marca de pieza de fabricación, prefijo, tolerancia, piezas idénticas, marcas de barra, marcas de zapata
from: ce02c98e
---

DetailCraft recalcula cada marca después de cada cambio. No se guarda nada, así que las marcas siempre describen el modelo tal como está ahora. Ver [Revisar marcas y la lista de materiales](topic:marks-and-bom) para saber cómo usarlas.

## Marcas de pieza

Dos piezas comparten una marca de pieza cuando todo esto coincide:

1. El tipo de pieza (viga, columna, riostra o placa).
2. El nombre del perfil (sin distinguir mayúsculas).
3. El material (sin distinguir mayúsculas).
4. La longitud de corte, dentro de 1 mm.
5. Cada agujero: cara, posición a lo largo y a través, dentro de 1 mm, y diámetro dentro de 0,1 mm.
6. Cada recorte: extremo, lado, longitud y profundidad, dentro de 1 mm.

El {{ui:Nombre}} del miembro no cuenta. Tampoco su posición en el modelo, su rotación, ni hacia qué lado se dibujó, siempre que la pieza en sí sea la misma.

### Piezas dadas vuelta

Una pieza se compara en todas las formas en que se puede dar vuelta y que lleva su sección sobre sí misma. Si alguna de esas vueltas la hace coincidir con otra pieza, comparten una marca.

| Forma | Vueltas que cuentan |
|---|---|
| Perfiles I, HSS rectangulares, placas | De punta a punta (alrededor del eje vertical), de punta a punta (alrededor del eje horizontal), y boca abajo alrededor de su propia longitud |
| Canales | De punta a punta alrededor del eje horizontal solamente, así el alma queda del mismo lado |
| Ángulos, HSS redondos | Ninguna: se comparan tal como están colocados |

Entonces, una viga con un agujero cerca de su extremo izquierdo coincide con una viga con el mismo agujero cerca de su extremo derecho, y una columna con agujeros en un ala coincide con una columna con los mismos agujeros en la otra ala.

### Numeración

| Tipo | Prefijo de pieza | Prefijo de conjunto |
|---|---|---|
| Columna | c | C |
| Viga | b | B |
| Riostra | br | BR |
| Placa (colocada, placa de extremo o placa base) | p | P |

Las marcas se numeran desde 1 dentro de cada prefijo. El orden es: columnas, luego vigas, riostras y placas; dentro de un tipo, por nombre de perfil en orden natural (W8x10 antes que W12x26); y luego las piezas más largas primero.

Como la numeración sigue ese orden, agregar o cambiar una pieza puede modificar los números de otras.

## Marcas de conjunto

- Cada pieza que no está soldada a otra pieza es la pieza principal de su propio conjunto.
- Las placas de extremo se sueldan a su viga, y las placas base a su columna, así que pertenecen al conjunto de ese miembro.
- Dos conjuntos comparten una marca cuando sus piezas principales comparten una marca de pieza y sus piezas unidas tienen las mismas marcas en los mismos lugares (dentro de 1 mm), permitiendo las mismas vueltas que la pieza principal.
- El prefijo del conjunto sigue a la pieza principal: una viga con dos placas de extremo es un conjunto B.

Las placas que colocás con la herramienta {{ui:Placa}} no están soldadas a nada, así que cada una es su propio conjunto P.

## Marcas de zapata

Las zapatas con la misma longitud, ancho, profundidad, texto de hormigón, malla inferior y barras de arranque comparten una marca: F1, F2 … en el orden en que se colocaron. La posición y la rotación no cuentan.

## Marcas de barra

Las barras con el mismo tamaño, forma y dimensiones A, B y C (redondeadas al milímetro) comparten una marca en todas las zapatas. La marca es el número de barra, F, y un contador por tamaño de barra: 5F1, 5F2, 6F1. Una barra en el sentido largo y una en el sentido corto de una zapata cuadrada son la misma barra y comparten una marca; la columna {{ui:Usado para}} de la planilla enumera ambos usos.
