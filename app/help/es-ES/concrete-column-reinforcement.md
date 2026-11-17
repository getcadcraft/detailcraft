---
title: Armar un pilar rectangular de hormigón
summary: Ejemplo resuelto de detallado de un pilar rectangular de hormigón en DetailCraft: colóquelo, dele barras longitudinales y cercos, lea las comprobaciones, el solape encima y las marcas de barras, y dibuje su hoja de taller.
keywords: pilar de hormigón, pilar rectangular, armadura de pilar, barras longitudinales, barras verticales, cercos, estribos, cercos transversales, empalme por solape, solape, barras de arranque, cuantía de pilar, 1 por ciento, 8 por ciento, separación de cercos, ACI 318-19 25.7.2, EN 1992-1-1 9.5, plano de taller, marcas de barras, 8C1, 3C2
from: aee2a3ca
---

Este tema lleva un pilar cuadrado desde cero hasta un detalle comprobado, dibujado y con su lista de barras. Las reglas generales de vigas, losas y muros están en [Detallar hormigón armado](topic:reinforced-concrete); esto es la parte del pilar, con números que puede reproducir.

:::warning
DetailCraft detalla las barras que usted le da. No las diseña. Las barras de abajo son valores de partida para el ejemplo, no una recomendación: el ingeniero responsable elige el tamaño, el número y la separación.
:::

## Qué es un pilar aquí

Un pilar rectangular tiene un ancho (a lo largo de su x local) y un canto transversal (a lo largo de su y local), un recubrimiento libre hasta los cercos, barras longitudinales en cada cara y cercos cerrados. Al girarlo, gira todo el conjunto; las caras siguen siendo "cara de ancho" y "cara de canto".

- Las barras longitudinales se dan como el número en una cara de ancho y el número en una cara de canto. Las barras de esquina cuentan en ambas, así que 3 y 3 dan 8 barras; 4 y 4 dan 12.
- Los cercos son rectángulos cerrados con dos ganchos en una esquina, de 135° o de 90°. El primer cerco está a una distancia fija sobre el suelo (y bajo el siguiente); las zonas de extremo tienen una separación menor, y la zona central una mayor.
- Lo que hacen las barras en la parte superior: prolongarse y solaparse con las barras de encima, doblarse con ganchos de 90° hacia el forjado, o detenerse bajo la parte superior.

## El pilar trabajado

Un pilar de 400 × 400 mm, 3600 mm entre el forjado de arriba y el de abajo, barras longitudinales #8, cercos #3, 40 mm de recubrimiento libre, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Abra la pestaña {{ui:Hormigón}} y defina las líneas de rejilla y los niveles sobre los que se apoya el pilar (panel izquierdo).
2. En {{ui:Añadir por rejilla}}, elija {{ui:Pilar de hormigón}}, seleccione el nudo de rejilla y los dos niveles, ponga {{ui:Ancho (mm)}} y {{ui:Canto transversal (mm)}} en 400, y elija {{ui:Añadir}}.
3. En el panel {{ui:Propiedades}} establezca:
   - {{ui:Recubrimiento libre (mm)}} 40;
   - {{ui:Barras longitudinales}} #8, {{ui:Barras en una cara de anchura}} 3, {{ui:Barras en una cara de canto}} 3;
   - {{ui:Cercos}} #3, {{ui:Ganchos}} 135°, {{ui:Separación entre (mm)}} 300, {{ui:Longitud de la zona de extremo (mm)}} 600, {{ui:Separación en las zonas de extremo (mm)}} 150, {{ui:Primero desde la cara (mm)}} 50;
   - {{ui:Barras en la cabeza}} {{ui:Prolongadas y solapadas con las barras de arriba}}.

Cada cambio es un paso de deshacer.

### Lo que obtiene

| Parte | Resultado |
|---|---|
| Barras longitudinales | 8 barras #8 (un anillo de 3 × 3), cada una de 4375 mm: el pilar de 3600 mm más un solape de 775 mm encima |
| Solape | 757 mm necesarios para un solape a compresión (ACI 318-19 25.5.5.1, fy 420), 775 mm dispuestos: la necesidad redondeada al siguiente múltiplo de 25 mm |
| Cercos | 17 cercos #3, cada uno con una longitud de corte de unos 1359 mm, separados 150 mm en las dos zonas de extremo de 600 mm y 300 mm entre ellas |
| Cuantía | 2.5 % de la sección bruta (límites de 1 % a 8 %, ACI 318-19 10.6.1.1) |
| Separación libre de las barras | 112 mm (se necesitan al menos 40 mm, ACI 318-19 25.2.3) |
| Separación de cercos | 300 mm (permitido 400 mm: el menor de 16 diámetros de barra, 48 diámetros de cerco y el lado menor, ACI 318-19 25.7.2.1) |
| Tamaño de cerco | #3 (permitido hasta 9.5 mm, ACI 318-19 25.7.2.2) |

Todos estos valores están en la lista {{ui:Comprobaciones}} del elemento; el solape también está en {{ui:Solapes y anclajes}}.

## Cercos transversales

Con un solo cerco perimetral, solo quedan sujetas las barras de esquina. ACI 318-19 25.7.2.3 permite que una barra intermedia de una cara quede sin sujetar si está a menos de 150 mm libres de una barra de esquina. Con 3 barras en una cara, como arriba, se cumple. Con 4 o más barras en una cara no se cumple, y DetailCraft lo indica como aviso ({{ui:Comprobaciones}} y Problemas): hacen falta "cercos transversales". **Los cercos transversales todavía no se dibujan**: añádalos a mano en el plano, o elija menos barras en la cara.

Para EN 1992-1-1, DetailCraft comprueba el tamaño de barra (al menos 8 mm), el número de barras (al menos 4), el área de acero (del 0.2 % al 4 % de la sección), la separación libre y la separación de cercos (9.5.2 y 9.5.3).

## El solape, la zapata y el pilar inferior

- Cuando **una zapata del modelo está bajo el pilar**, el pilar se solapa con las barras de arranque de la zapata, y ese solape también se comprueba.
- Cuando **otro pilar del modelo está bajo él**, se solapa con las barras de ese pilar.
- Introduzca su propia {{ui:Longitud de solape (mm, 0 = según necesidad)}} para anularlo; uno menor que el necesario es un problema y se marca con * en la tabla.
- Por defecto se usan solapes a compresión ({{ui:Solape a compresión}} en los ajustes); elija {{ui:Solape a tracción}} cuando el pilar pueda estar en tracción.

## Marcas, lista y hoja de taller

Las barras idénticas comparten una marca: las barras longitudinales del pilar de arriba son 8C1, y sus cercos, 17C2 (primero el número, luego la letra C de pilar y el número correlativo). Aparecen en la pestaña {{ui:Tabla de doblado}}, con la longitud de corte y el peso, y en el CSV de {{ui:Salida}} › {{ui:Más}} › {{ui:Doblado}}.

Elija {{ui:Plano de taller}} junto al pilar para obtener una hoja con el pilar en alzado (todas las barras, su marca, las zonas de cercos y el solape acotados) y una sección en el centro, seguida de la hoja de doblado de barras. Guárdela con {{ui:Esta hoja en PDF}}.

## Lo que no hace esto

- Pilares redondos, espirales y pilares que no son rectangulares: no construidos.
- Cercos de esquina y transversales dentro de la sección, y detallado sísmico (ACI 318-19 capítulo 18): no construidos.
- Empalmes en posiciones que usted elija, o escalonados: todas las barras se solapan en una misma sección.
- Si las barras bastan para la carga: eso es el diseño del ingeniero.
