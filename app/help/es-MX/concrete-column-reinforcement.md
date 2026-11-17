---
title: Refuerce una columna rectangular de concreto
summary: Un ejemplo resuelto de detallado de una columna rectangular de concreto en DetailCraft: colóquela, dele varillas longitudinales y amarres, lea las revisiones, el traslape encima y las marcas de varilla, y dibuje su hoja de taller.
keywords: columna de concreto, columna rectangular, refuerzo de columna, varillas longitudinales, varillas verticales, amarres, estribos, ganchos, amarres transversales, traslape, empalme, varillas de arranque, cuantía de acero de columna, 1 por ciento, 8 por ciento, separación de amarres, ACI 318-19 25.7.2, EN 1992-1-1 9.5, plano de taller, marcas de varilla, 8C1, 3C2
from: aee2a3ca
---

Este tema toma una columna cuadrada desde cero hasta un detalle revisado, dibujado y listado. Las reglas generales para vigas, losas y muros están en [Detallar concreto reforzado](topic:reinforced-concrete); esta es la parte de la columna, con números que usted puede reproducir.

:::warning
DetailCraft detalla las varillas que usted le da. No las diseña. Las varillas de abajo son valores iniciales para el ejemplo, no una recomendación: el ingeniero responsable elige el tamaño, el número y la separación.
:::

## Qué es una columna aquí

Una columna rectangular tiene un ancho (a lo largo de su x local) y un peralte transversal (a lo largo de su y local), un recubrimiento libre hasta los amarres, varillas longitudinales en cada cara y amarres cerrados. Al rotarla, gira todo el conjunto; las caras siguen siendo "cara de ancho" y "cara de peralte".

- Las varillas longitudinales se dan como el número en una cara de ancho y el número en una cara de peralte. Las varillas de esquina cuentan en ambas, así que 3 y 3 dan 8 varillas; 4 y 4 dan 12.
- Los amarres son rectángulos cerrados con dos ganchos en una esquina, de 135° o 90°. El primer amarre está a una distancia fija sobre el piso (y bajo el siguiente), las zonas de extremo tienen una separación más cerrada, y el centro, una más abierta.
- Qué hacen las varillas en la parte superior: continuar y traslapar con las varillas de arriba, doblarse hacia adentro con ganchos de 90° en el piso, o terminar bajo la parte superior.

## La columna de ejemplo

Una columna de 400 × 400 mm, 3600 mm entre el piso de arriba y el de abajo, varillas longitudinales #8, amarres #3, recubrimiento libre de 40 mm, f'c 28 MPa, fy 420 MPa, ACI 318-19, interior.

1. Abra la pestaña {{ui:Concreto}} y defina los ejes y niveles sobre los que se apoya la columna (panel izquierdo).
2. En {{ui:Agregar por ejes}}, elija {{ui:Columna de concreto}}, seleccione la intersección de ejes y los dos niveles, defina {{ui:Ancho (mm)}} y {{ui:Peralte transversal (mm)}} en 400, y elija {{ui:Agregar}}.
3. En el panel {{ui:Propiedades}} defina:
   - {{ui:Recubrimiento libre (mm)}} 40;
   - {{ui:Varillas longitudinales}} #8, {{ui:Varillas en una cara de ancho}} 3, {{ui:Varillas en una cara de peralte}} 3;
   - {{ui:Amarres}} #3, {{ui:Ganchos}} 135°, {{ui:Separación entre (mm)}} 300, {{ui:Longitud de la zona de extremo (mm)}} 600, {{ui:Separación en las zonas de extremo (mm)}} 150, {{ui:El primero desde la cara (mm)}} 50;
   - {{ui:Varillas en la parte superior}} {{ui:Continuar y traslapar con las varillas de arriba}}.

Cada cambio es un paso de deshacer.

### Lo que obtiene

| Parte | Resultado |
|---|---|
| Varillas longitudinales | 8 varillas #8 (un anillo de 3 × 3), cada una de 4375 mm de largo: la columna de 3600 mm más un traslape de 775 mm encima |
| Traslape | 757 mm necesarios para un traslape a compresión (ACI 318-19 25.5.5.1, fy 420), 775 mm dados: la necesidad redondeada al siguiente múltiplo de 25 mm |
| Amarres | 17 amarres #3, cada uno con una longitud de corte de unos 1359 mm, con separación de 150 mm en las dos zonas de extremo de 600 mm y de 300 mm entre ellas |
| Cuantía de acero | 2.5 % de la sección bruta (límites de 1 % a 8 %, ACI 318-19 10.6.1.1) |
| Separación libre de las varillas | 112 mm (se necesitan al menos 40 mm, ACI 318-19 25.2.3) |
| Separación de amarres | 300 mm (permitido 400 mm: lo menor de 16 diámetros de varilla, 48 diámetros de amarre y el lado menor, ACI 318-19 25.7.2.1) |
| Tamaño de amarre | #3 (permitido hasta 9.5 mm, ACI 318-19 25.7.2.2) |

Todos estos están en la lista de {{ui:Verificaciones}} del elemento; el traslape también está en {{ui:Traslapes y anclaje}}.

## Amarres transversales

Con un solo amarre perimetral, solo se sostienen las varillas de esquina. ACI 318-19 25.7.2.3 permite que una varilla intermedia en una cara quede sin apoyo si está a menos de 150 mm libres de una varilla de esquina. Con 3 varillas en una cara, como arriba, eso se cumple. Con 4 o más varillas en una cara no se cumple, y DetailCraft lo indica como advertencia ({{ui:Verificaciones}} y Problemas): se necesitan "amarres transversales". **Los amarres transversales todavía no se dibujan**: agréguelos a mano en el dibujo, o elija menos varillas en la cara.

Para EN 1992-1-1, DetailCraft revisa el tamaño de varilla (al menos 8 mm), el número de varillas (al menos 4), el área de acero (0.2 % a 4 % de la sección), la separación libre y la separación de los amarres (9.5.2 y 9.5.3).

## El traslape, la zapata y la columna de abajo

- Cuando **una zapata del modelo queda bajo la columna**, la columna se traslapa con las varillas de arranque de la zapata, y ese traslape también se revisa.
- Cuando **otra columna del modelo queda bajo ella**, se traslapa con las varillas de esa columna.
- Dé su propia {{ui:Longitud de traslape (mm, 0 = según se requiera)}} para sustituirla; una más corta de lo necesario es un problema y se marca con * en la tabla.
- Los traslapes a compresión se usan por defecto ({{ui:Traslape a compresión}} en la configuración); elija {{ui:Traslape a tensión}} cuando la columna pueda quedar en tensión.

## Marcas, listado y hoja de taller

Las varillas idénticas comparten una marca: las varillas longitudinales de la columna de arriba son 8C1, y sus amarres 17C2 (primero el número, luego la letra del tipo C de columna y el número consecutivo). Aparecen en la pestaña {{ui:Tabla de doblado}}, con la longitud de corte y el peso, y en el CSV de {{ui:Salida}} › {{ui:Más}} › {{ui:Doblado}}.

Elija {{ui:Plano de taller}} junto a la columna para obtener una hoja con la columna en elevación (cada varilla, su marca, las zonas de amarre y el traslape acotados) y una sección en el centro, seguida de la hoja de doblado de varillas. Guarde {{ui:Esta hoja en PDF}}.

## Lo que esto no hace

- Columnas redondas y espirales, y columnas que no son rectangulares: no construidas.
- Amarres de esquina y transversales dentro de la sección, y detallado sísmico (ACI 318-19 capítulo 18): no construidos.
- Empalmes en posiciones que usted elija, o escalonados: todas las varillas se traslapan en una misma sección.
- Si las varillas bastan para la carga: eso es el diseño del ingeniero.
