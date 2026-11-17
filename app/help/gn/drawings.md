---
title: Planos de disposición general y de conjunto
summary: Haga plantas, elevaciones y un plano de conjunto por cada marca de conjunto a partir del modelo, en hojas A4 a A1 o ANSI B a D, emítalos con letras de revisión, y descárguelos como PDF, DWG o DXF.
keywords: líneas ocultas, eliminación de líneas ocultas, punteado, nube de revisión, nubes, triángulo de revisión, plano de pernos de anclaje, barras de anclaje, planilla de barras, planilla de placas base, replanteo, emisión, revisión, rev, tabla de revisiones, reemisión, registro de emisiones, transmittal, dwg, dxf, archivo cad, exportar planos, planos, disposición general, ga, planta, elevación, plano de conjunto, tamaño de hoja, tamaño de papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, imprimir, escala, cajetín, referencia del modelo
from: 709f8604
---

Elija {{ui:Drawings}} en el grupo {{ui:Output}}. DetailCraft hace el conjunto completo a partir del modelo tal como está ahora. No se guarda nada: cambie el modelo, abra {{ui:Drawings}} otra vez, y el conjunto se vuelve a hacer.

## Qué contiene el conjunto

- **Plantas**, una por cada nivel que tenga algo, vistas desde arriba.
- **Elevaciones**, una por cada línea de grilla con miembros a menos de 1 m.
- **El plano de pernos de anclaje**, cuando el modelo tiene placas base: cada placa base vista desde arriba con su columna y sus barras de anclaje, las grillas con sus cotas, un detalle típico de cada patrón de barras (BP1, BP2 …) con el espaciado de barras y las distancias a los bordes, y dos planillas: las barras de anclaje por marca (R1, R2 …: cantidad, diámetro, largo, saliente sobre la placa, empotramiento, grado) y las placas base por grilla (columna, patrón, placa, barras, cara superior de la placa). Una columna fuera de la grilla se ubica por sus coordenadas.
- **Planos de conjunto**, uno por cada marca de conjunto: vistas de frente, de arriba y de extremo, cotas encadenadas a agujeros y bordes de placa, la lista de piezas, los pernos y barras sueltos, y notas de soldadura y agujeros. Cada placa soldada tiene un símbolo de soldadura de filete en la vista de frente (AWS A2.4): la flecha apunta a la unión, el triángulo debajo de la línea de referencia indica el lado de la flecha, la cifra a su izquierda es el tamaño de la soldadura en mm, y un círculo donde la flecha toca la línea significa soldadura en todo el contorno.

**Líneas ocultas.** Las plantas y elevaciones dejan afuera las líneas de una pieza donde otra pieza que está totalmente delante la tapa (una viga vista de canto detrás de una columna). Los planos de conjunto dibujan una placa punteada donde la pieza principal la tapa: detrás del alma en la vista de frente (vista desde el lado −u de la pieza), debajo del ala superior en la vista de arriba. Las piezas que están a la misma profundidad, o que se superponen en profundidad, se dibujan completas.

Cada hoja tiene un cajetín con el número de plano, la escala, el nombre del modelo, la fecha, el número de hoja con el tamaño de hoja, y la referencia del modelo: un código hecho a partir del modelo guardado, para que una impresión se pueda asociar con el modelo del que salió.

## Elegir el tamaño de hoja

Elija el tamaño en la lista de arriba de la ventana {{ui:Drawings}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) o {{ui:ANSI D}} (22 × 34 in). Todas las hojas van en horizontal. El conjunto se vuelve a hacer de inmediato en el nuevo tamaño, y el mismo tamaño se usa para los planos de taller. También está en la [configuración de DetailCraft](topic:settings#drawings), y este navegador lo recuerda.

- Una hoja más grande dibuja a una escala mayor. Las escalas siempre son estándar (1:10, 1:20, 1:25, 1:50, 1:100 y así).
- El texto tiene el mismo tamaño en cada hoja, para que se pueda leer al imprimir.
- En una hoja chica, un ensamble largo y delgado puede tener una escala mayor en su profundidad que a lo largo. El título de la vista entonces muestra ambas escalas, y mandan las cotas.

## Emitir planos y revisiones

La línea encima de la vista previa indica en qué estado está la hoja mostrada: **Not issued yet**, **Rev B, issued … ; unchanged since**, o, en rojo, **Changed since rev B: needs re-issue**. La lista de hojas marca las hojas emitidas con su revisión y las que necesitan reemisión.

- Escriba para qué es la emisión (empieza como "Issued for fabrication") y elija {{ui:Issue this sheet}}, o {{ui:Issue changed sheets}} para cada hoja nueva o modificada desde su última emisión.
- La primera emisión de una hoja es la revisión A, luego B, C y así (se saltean I y O).
- El cajetín muestra el número de plano con su revisión ("A-B1  rev B"), y al lado una tabla de revisiones lista las últimas emisiones: revisión, fecha y descripción. En una hoja chica muestra las que quepan.
- Una hoja "cambia" cuando cambia lo que se dibuja en ella: una pieza movida, un agujero nuevo, una marca renumerada. La fecha, la cantidad de hojas y la tabla de revisiones en sí no cuentan. Cambiar el tamaño de hoja cambia todas las hojas.
- El registro de emisiones se guarda en el archivo del modelo, y emitir es un solo paso de deshacer. El [archivo KISS](topic:kiss-export) lleva la última revisión de cada plano.

### Nubes de revisión

Desde la segunda emisión de una hoja en adelante, cada pieza o zapata que cambió se dibuja dentro de una nube de revisión con un triángulo de revisión que lleva la letra.

- Mientras una hoja cambió desde su última emisión, las nubes muestran lo que cambió desde entonces, con la próxima revisión en el triángulo (rev B emitida y modificada: los triángulos dicen C).
- Una vez emitida, las nubes quedan en la hoja de esa revisión, como en un juego impreso, hasta que la hoja cambie otra vez.
- Cada hoja solo marca con nube los cambios que muestra. Las plantas y elevaciones no dibujan agujeros ni recortes, así que marcan una pieza que se movió, se giró o se cambió de tamaño, o cuya marca cambió. Los planos de conjunto y el plano de pernos de anclaje también marcan con nube los agujeros y recortes nuevos o movidos.
- Una marca renumerada cuenta: cuando un cambio hace que una viga pase a ser otro conjunto, las vigas cuya marca subió (B1 a B2) se marcan con nube en plantas y elevaciones.
- Una pieza que se eliminó no deja nada para marcar.
- Las hojas emitidas antes de que llegaran las nubes de revisión (DetailCraft 0.4) empiezan a marcarlas desde su próxima emisión.
- Las nubes están en las descargas PDF, DXF y DWG, y nunca cuentan como cambio por sí mismas.

## Descargar

Elija el formato en la lista al lado de los botones, y luego {{ui:This sheet}} para la hoja mostrada o {{ui:All sheets}} para todo el conjunto.

- **PDF**: para imprimir o enviar. {{ui:All sheets}} hace un solo PDF, una página por hoja, cada página en el tamaño elegido.
- **DWG**, en el formato 2018, 2013, 2010, 2007, 2004 o 2000: para abrir las hojas en un programa CAD. Elija un formato anterior para un programa anterior.
- **DXF (R12)**: la versión que casi todo programa CAD abre.

Una hoja DWG o DXF se dibuja a tamaño real: una unidad de dibujo es un milímetro en el papel, así que se imprime a 1:1 y cada vista mantiene la escala que dice su título. Cada pluma es su propia capa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID y así, con su grosor de línea (DWG) y sus trazos. Las palabras son texto en el estilo de texto de DetailCraft (Arial). Las cotas son las líneas y cifras que ve, no objetos de cota. {{ui:All sheets}} pone los archivos DWG o DXF en un zip, un archivo por hoja.

:::note
DXF R12 no tiene grosores de línea ni rellenos: las capas mantienen sus nombres, así que configure las plumas por capa al graficar, y las formas rellenas se dejan afuera (la barra de estado indica cuántas).
:::

Imprima al 100 % (sin "ajustar a la página") en papel del mismo tamaño si quiere que se cumplan las escalas indicadas.
