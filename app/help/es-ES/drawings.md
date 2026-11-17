---
title: Planos de disposición general y de conjunto
summary: Genere plantas, alzados y un plano de conjunto por cada marca de conjunto a partir del modelo, en hojas A4 a A1 o ANSI B a D, emítalos con letras de revisión y descárguelos en PDF, DWG o DXF.
keywords: líneas ocultas, eliminación de líneas ocultas, discontinua, nube de revisión, nubes, triángulo de revisión, planta de pernos de anclaje, pernos de anclaje, tabla de pernos, tabla de placas base, replanteo, emisión, revisión, rev, tabla de revisiones, reemisión, registro de emisiones, transmisión, dwg, dxf, archivo cad, exportar planos, planos, disposición general, planta, alzado, plano de conjunto, tamaño de hoja, formato de papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloide, 11 x 17, 22 x 34, pdf, imprimir, escala, cajetín, referencia del modelo
from: 709f8604
---

Elija {{ui:Planos}} en el grupo {{ui:Salida}}. DetailCraft genera el conjunto completo a partir del modelo tal como está ahora. No se guarda nada: cambie el modelo, abra {{ui:Planos}} de nuevo y el conjunto se vuelve a generar.

## Qué contiene el conjunto

- **Plantas**, una por cada nivel que tenga algo, vistas desde arriba.
- **Alzados**, uno por cada línea de rejilla con miembros a menos de 1 m de ella.
- **La planta de pernos de anclaje**, cuando el modelo tiene placas base: cada placa base vista desde arriba con su pilar y sus pernos de anclaje, las rejillas con sus cotas, un detalle tipo de cada patrón de pernos (BP1, BP2 …) con la separación de pernos y las distancias al borde, y dos tablas: los pernos de anclaje por marca (R1, R2 …: cantidad, diámetro, longitud, resalte sobre la placa, empotramiento, calidad) y las placas base por rejilla (pilar, patrón, placa, pernos, cota superior de la placa). Un pilar fuera de la rejilla se sitúa por sus coordenadas.
- **Planos de conjunto**, uno por cada marca de conjunto: vistas de alzado, planta y extremo, cotas encadenadas a agujeros y bordes de placa, la lista de piezas, tornillos y pernos sueltos, y notas de soldadura y agujeros. Cada placa soldada lleva un símbolo de soldadura de filete en la vista de alzado (AWS A2.4): la flecha apunta a la unión, el triángulo bajo la línea de referencia indica el lado de la flecha, la cifra a su izquierda es el tamaño de soldadura en mm, y un círculo donde la flecha toca la línea indica soldadura en todo el perímetro.

**Líneas ocultas.** Las plantas y alzados omiten las líneas de una pieza cuando otra pieza situada totalmente delante la tapa (una viga vista de frente detrás de un pilar). Los planos de conjunto dibujan una placa en discontinuo donde la tapa la pieza principal: detrás del alma en la vista de alzado (vista desde el lado −u de la pieza), bajo el ala superior en la vista de planta. Las piezas que están a la misma profundidad, o que se solapan en profundidad, se dibujan ambas completas.

Cada hoja tiene un cajetín con el número de plano, la escala, el nombre del modelo, la fecha, el número de hoja con el tamaño de hoja, y la referencia del modelo: un código generado a partir del modelo guardado, de modo que una copia impresa pueda relacionarse con el modelo del que procede.

## Elija el tamaño de hoja

Elija el tamaño en la lista de la parte superior de la ventana {{ui:Planos}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) o {{ui:ANSI D}} (22 × 34 in). Todas las hojas son apaisadas. El conjunto se vuelve a generar de inmediato en el nuevo tamaño, y el mismo tamaño se usa para los planos de taller. También está en los [ajustes de DetailCraft](topic:settings#drawings), y este navegador lo recuerda.

- Una hoja mayor dibuja a una escala mayor. Las escalas son siempre estándar (1:10, 1:20, 1:25, 1:50, 1:100 y así sucesivamente).
- El texto mantiene el mismo tamaño en todas las hojas, para que se lea bien al imprimir.
- En una hoja pequeña, un conjunto largo y delgado puede tener una escala mayor en su canto que a lo largo de su longitud. El título de la vista indica entonces ambas escalas, y prevalecen las cotas.

## Emitir planos y revisiones

La línea sobre la vista previa indica la situación de la hoja mostrada: **Sin emitir todavía**, **Rev B, emitida … ; sin cambios desde entonces**, o, en rojo, **Cambiada desde la rev B: requiere reemisión**. La lista de hojas marca las hojas emitidas con su revisión y las que requieren reemisión.

- Escriba para qué es la emisión (empieza como "Emitido para fabricación") y elija {{ui:Emitir esta hoja}}, o {{ui:Emitir hojas modificadas}} para cada hoja nueva o cambiada desde su última emisión.
- La primera emisión de una hoja es la revisión A, después B, C y así sucesivamente (se omiten I y O).
- El cajetín muestra el número de plano con su revisión ("A-B1  rev B"), y junto a él una tabla de revisiones enumera las últimas emisiones: revisión, fecha y descripción. En una hoja pequeña muestra las que quepan.
- Una hoja "cambia" cuando cambia lo que se dibuja en ella: una pieza movida, un agujero nuevo, una marca renumerada. La fecha, el número de hojas y la propia tabla de revisiones no cuentan. Cambiar el tamaño de hoja cambia todas las hojas.
- El registro de emisiones se guarda en el archivo del modelo, y emitir es un solo paso de deshacer. El [archivo KISS](topic:kiss-export) lleva la última revisión de cada plano.

### Nubes de revisión

A partir de la segunda emisión de una hoja, cada pieza o zapata que haya cambiado se dibuja dentro de una nube de revisión con un triángulo de revisión que lleva la letra.

- Mientras una hoja haya cambiado desde su última emisión, las nubes muestran lo que ha cambiado desde entonces, con la próxima revisión en el triángulo (rev B emitida y cambiada: los triángulos dicen C).
- Una vez emitida, las nubes permanecen en la hoja de esa revisión, como en un juego impreso, hasta que la hoja cambie de nuevo.
- Cada hoja solo marca con nubes los cambios que muestra. Las plantas y alzados no dibujan agujeros ni recortes, así que marcan una pieza que se movió, giró o cambió de tamaño, o cuya marca cambió. Los planos de conjunto y la planta de pernos de anclaje también marcan con nubes los agujeros y recortes nuevos o movidos.
- Cuenta un cambio de numeración: cuando un cambio convierte una viga en un conjunto nuevo, las vigas cuya marca subió (B1 a B2) se marcan con nube en plantas y alzados.
- Una pieza borrada no deja nada que marcar.
- Las hojas emitidas antes de que llegaran las nubes de revisión (DetailCraft 0.4) empiezan a marcarlas en su siguiente emisión.
- Las nubes aparecen en las descargas PDF, DXF y DWG, y nunca cuentan como un cambio por sí mismas.

## Descargar

Elija el formato en la lista junto a los botones, y luego {{ui:Esta hoja}} para la hoja mostrada o {{ui:Todas las hojas}} para el conjunto completo.

- **PDF**: para imprimir o enviar. {{ui:Todas las hojas}} genera un PDF, una página por hoja, cada página con el tamaño elegido.
- **DWG**, en el formato 2018, 2013, 2010, 2007, 2004 o 2000: para abrir las hojas en un programa CAD. Elija un formato anterior para un programa anterior.
- **DXF (R12)**: la versión que casi todos los programas CAD abren.

Una hoja DWG o DXF se dibuja a tamaño real: una unidad de dibujo es un milímetro en el papel, de modo que se imprime a 1:1 y cada vista conserva la escala que indica su título. Cada plumilla es su propia capa: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID y así sucesivamente, con su grosor de línea (DWG) y sus trazos. Las palabras son texto en el estilo de texto de DetailCraft (Arial). Las cotas son las líneas y cifras que ve, no objetos de cota. {{ui:Todas las hojas}} pone los archivos DWG o DXF en un único zip, un archivo por hoja.

:::note
DXF R12 no tiene grosores de línea ni rellenos: las capas conservan sus nombres, así que defina las plumillas por capa al trazar, y las formas rellenas se omiten (la barra de estado indica cuántas).
:::

Imprima al 100 % (sin "ajustar a la página") en papel del mismo tamaño si quiere que las escalas indicadas se mantengan.
