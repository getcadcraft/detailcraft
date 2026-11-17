---
title: Planos de disposición general y de ensamble
summary: Genere plantas, elevaciones y un plano de ensamble por marca de ensamble a partir del modelo, en hojas A4 a A1 o ANSI B a D, emítalos con letras de revisión y descárguelos en PDF, DWG o DXF.
keywords: líneas ocultas, eliminación de líneas ocultas, discontinua, nube de revisión, nubes, triángulo de revisión, planta de anclajes, barras de anclaje, cuadro de barras, cuadro de placas base, trazado de ejes, emitir, revisión, rev, tabla de revisiones, reemisión, registro de emisiones, transmisión, dwg, dxf, archivo CAD, exportar planos, planos, disposición general, ga, planta, elevación, plano de ensamble, tamaño de hoja, tamaño de papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, imprimir, escala, cajetín, referencia de modelo
from: 709f8604
---

Elija {{ui:Planos}} en el grupo {{ui:Salida}}. DetailCraft genera el conjunto completo a partir del modelo tal como está ahora. No se guarda nada: cambie el modelo, abra {{ui:Planos}} otra vez, y el conjunto se vuelve a generar.

## Lo que contiene el conjunto

- **Plantas**, una por cada nivel que tenga algo, vistas desde arriba.
- **Elevaciones**, una por cada eje con miembros a menos de 1 m de él.
- **La planta de barras de anclaje**, cuando el modelo tiene placas base: cada placa base vista desde arriba con su columna y sus barras de anclaje, los ejes con sus cotas, un detalle típico de cada patrón de barras (BP1, BP2 …) con la separación de barras y las distancias a borde, y dos cuadros: las barras de anclaje por marca (R1, R2 …: cantidad, diámetro, longitud, saliente sobre la placa, empotramiento, grado) y las placas base por eje (columna, patrón, placa, barras, parte superior de la placa). Una columna fuera de eje se ubica por sus coordenadas.
- **Planos de ensamble**, uno por cada marca de ensamble: vistas frontal, superior y de extremo, cotas encadenadas a agujeros y bordes de placa, la lista de partes, pernos y barras sueltos, y notas de soldadura y de agujeros. Cada placa soldada tiene un símbolo de soldadura de filete en la vista frontal (AWS A2.4): la flecha apunta a la unión, el triángulo debajo de la línea de referencia indica el lado de la flecha, la cifra a su izquierda es el tamaño de la soldadura en mm, y un círculo donde la flecha toca la línea significa soldadura en todo el perímetro.

**Líneas ocultas.** Las plantas y elevaciones omiten las líneas de una parte donde una parte completamente delante la cubre (una viga vista de frente detrás de una columna). Los planos de ensamble dibujan una placa con línea discontinua donde la pieza principal la cubre: detrás del alma en la vista frontal (vista desde el lado −u de la pieza), debajo del ala superior en la vista superior. Las partes que están a la misma profundidad, o que se traslapan en profundidad, se dibujan completas.

Cada hoja tiene un cajetín con el número de plano, la escala, el nombre del modelo, la fecha, el número de hoja con el tamaño de hoja, y la referencia de modelo: un código generado a partir del modelo guardado, para que una impresión pueda relacionarse con el modelo del que proviene.

## Elegir el tamaño de hoja

Elija el tamaño en la lista de la parte superior de la ventana {{ui:Planos}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) o {{ui:ANSI D}} (22 × 34 in). Todas las hojas son horizontales. El conjunto se vuelve a generar de inmediato en el nuevo tamaño, y se usa el mismo tamaño para los planos de taller. También está en la [configuración de DetailCraft](topic:settings#drawings), y este navegador lo recuerda.

- Una hoja más grande se dibuja a una escala mayor. Las escalas siempre son estándar (1:10, 1:20, 1:25, 1:50, 1:100 y así sucesivamente).
- El texto mantiene el mismo tamaño en cada hoja, para que se lea bien al imprimir.
- En una hoja pequeña, un ensamble largo y delgado puede tener una escala mayor en su profundidad que a lo largo. El título de la vista indica entonces ambas escalas, y las cotas prevalecen.

## Emitir planos y revisiones

La línea sobre la vista previa indica en qué situación está la hoja mostrada: **Aún no emitida**, **Rev B, emitida … ; sin cambios desde entonces**, o, en rojo, **Cambió desde la rev B: requiere reemisión**. La lista de hojas marca las hojas emitidas con su revisión y las que requieren reemisión.

- Escriba para qué es la emisión (empieza como "Emitido para fabricación") y elija {{ui:Emitir esta hoja}}, o {{ui:Emitir hojas modificadas}} para cada hoja que sea nueva o haya cambiado desde su última emisión.
- La primera emisión de una hoja es la revisión A, luego B, C y así sucesivamente (se omiten I y O).
- El cajetín muestra el número de plano con su revisión ("A-B1  rev B"), y junto a él una tabla de revisiones lista las últimas emisiones: revisión, fecha y descripción. En una hoja pequeña muestra cuantas quepan.
- Una hoja "cambia" cuando lo que se dibuja en ella cambia: un miembro movido, un agujero nuevo, una marca renumerada. La fecha, la cantidad de hojas y la tabla de revisiones en sí no cuentan. Cambiar el tamaño de hoja cambia todas las hojas.
- El registro de emisiones se guarda en el archivo del modelo, y emitir es un solo paso de deshacer. El [archivo KISS](topic:kiss-export) lleva la última revisión de cada plano.

### Nubes de revisión

A partir de la segunda emisión de una hoja, cada parte o zapata que cambió se dibuja dentro de una nube de revisión con un triángulo de revisión que lleva la letra.

- Mientras una hoja haya cambiado desde su última emisión, las nubes muestran lo que cambió desde entonces, con la próxima revisión en el triángulo (rev B emitida y modificada: los triángulos dicen C).
- Una vez que la emita, las nubes se quedan en la hoja de esa revisión, como en un juego impreso, hasta que la hoja vuelva a cambiar.
- Cada hoja solo marca con nube los cambios que muestra. Las plantas y elevaciones no dibujan agujeros ni recortes, así que marcan con nube un miembro que se movió, giró o cambió de tamaño, o cuya marca cambió. Los planos de ensamble y la planta de barras de anclaje también marcan con nube los agujeros y recortes nuevos o movidos.
- Cuenta una marca renumerada: cuando un cambio convierte una viga en un ensamble nuevo, las vigas cuya marca subió (B1 a B2) se marcan con nube en plantas y elevaciones.
- Una parte eliminada no deja nada que marcar con nube.
- Las hojas emitidas antes de que llegaran las nubes de revisión (DetailCraft 0.4) empiezan a marcarlas desde su siguiente emisión.
- Las nubes aparecen en las descargas PDF, DXF y DWG, y nunca cuentan como cambio en sí mismas.

## Descargar

Elija el formato en la lista junto a los botones, y luego {{ui:Esta hoja}} para la hoja mostrada o {{ui:Todas las hojas}} para el conjunto completo.

- **PDF**: para imprimir o enviar. {{ui:Todas las hojas}} genera un solo PDF, una página por hoja, cada página en el tamaño elegido.
- **DWG**, en formato 2018, 2013, 2010, 2007, 2004 o 2000: para abrir las hojas en un programa CAD. Elija un formato anterior para un programa más antiguo.
- **DXF (R12)**: la versión que casi todos los programas CAD abren.

Una hoja DWG o DXF se dibuja a tamaño real: una unidad de dibujo equivale a un milímetro en el papel, así que se imprime a 1:1 y cada vista conserva la escala que indica su título. Cada pluma es su propia capa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID y así sucesivamente, con su grosor de línea (DWG) y sus trazos. Los textos son texto con el estilo de texto de DetailCraft (Arial). Las cotas son las líneas y cifras que ve, no objetos de cota. {{ui:Todas las hojas}} pone los archivos DWG o DXF en un solo zip, un archivo por hoja.

:::note
DXF R12 no tiene grosores de línea ni rellenos: las capas conservan sus nombres, así que configure las plumas por capa al trazar, y las formas rellenas se omiten (la barra de estado indica cuántas).
:::

Imprima al 100 % (sin "ajustar a la página") en papel del mismo tamaño si quiere que las escalas indicadas se mantengan.
