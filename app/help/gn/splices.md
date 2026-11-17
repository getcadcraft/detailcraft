---
title: Empalmes
summary: Ejunta mokõi pieza de viga o columna punta a punta, con placas de cubierta de ala y alma atornilladas.
keywords: empalme, empalme de viga, empalme de columna, placa de cubierta, placa de empalme, placa de ala, placa de alma, empalme atornillado, junta, levantar, conectar
from: 97d141c2
---

Un empalme atornillado ejunta mokõi pieza de un mismo perfil I punta a punta: placa de cubierta afuera de cada ala y una placa a cada lado del alma, atornillada por ambas piezas. DetailCraft recorta las piezas hasta el hueco, coloca las cuatro placas, perfora los agujeros en las placas y en ambas piezas, agrega los bulones y avisa sobre las distancias al borde, la separación y el ajuste.

## Dónde funciona

- Mokõi viga, o mokõi elevación de columna, del **mismo perfil I**, que se encuentran **punta a punta en línea**: los extremos no más de 50 mm separados, las piezas paralelas y en una misma línea (dentro de 1 mm). Cualquiera de las piezas puede estar dibujada en cualquier dirección.
- Funcionan piezas horizontales, inclinadas o verticales.
- Se rechazan dos piezas de distinta altura o ancho de ala, y también canales, ángulos y tubos.

## Agregar empalmes

1. Dibujá las dos piezas para que se encuentren punta a punta. Para dividir una pieza que ya está dibujada, volvé a dibujarla como dos piezas.
2. Seleccioná una (o las dos) y elegí {{ui:Empalme}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada junta libre de las piezas seleccionadas con otra pieza del mismo perfil recibe un empalme. La barra de estado indica cuántos.

Seleccioná el empalme (hacé clic en una de sus placas) para cambiar sus ajustes en el panel derecho. {{ui:Aplicar a similares (n)}} copia el empalme a cada otra junta libre entre piezas del mismo perfil.

## Ajustes (mm)

| Ajuste | Predeterminado | Qué hace |
|---|---|---|
| Separación entre los extremos | 10 | Cada pieza se recorta la mitad de esta medida |
| Diámetro de bulón, agujero, grado, margen de largo | 20, 22, A325, 30 | Igual que en las placas de extremo |
| Espesor de placa de ala | 12 | La placa tiene el mismo ancho que el ala |
| Filas de bulones de ala (a cada lado) | 3 | Filas a lo ancho del ala, a cada lado de la junta |
| Paso de bulones de ala | 75 | A lo largo de la pieza |
| Calibre de bulones de ala | 0 | Entre las dos líneas de bulones; 0 = ancho del ala menos 80 |
| Distancia al extremo del ala | 40 | Del extremo de la pieza al primer bulón, y del último bulón al extremo de la placa |
| Espesor de placa de alma | 8 | Una a cada lado del alma |
| Filas de bulones de alma | 3 | A lo alto del alma, centradas |
| Columnas de bulones de alma (a cada lado) | 2 | A lo largo de la pieza, a cada lado de la junta |
| Paso de bulones de alma, a lo alto del alma / a lo largo de la pieza | 75, 75 | |
| Distancia al extremo del alma | 40 | Igual que en las alas |
| Altura de placa de alma | 0 | 0 = el alma libre entre los filetes menos 10 arriba y abajo |
| Material de placa | A36 | Texto |

Los largos de placa salen de los bulones: placa de ala = separación + 2 × (2 × distancia al extremo + (filas − 1) × paso); las placas de alma igual, con sus columnas. Con los predeterminados, las placas de ala miden 470 de largo.

## Para saber

- Las placas pertenecen a la **primera pieza dibujada** de las dos (sus propiedades la llaman primera pieza): aparecen en su plano de conjunto y salen con ella, atornilladas, no soldadas. El plano de conjunto de la segunda pieza muestra solo sus agujeros.
- Los bulones de ala sujetan el ala y su placa; los bulones de alma sujetan el alma y ambas placas de alma. Los largos de bulón se listan aparte en las propiedades.
- Las advertencias usan los mínimos de EN 1993-1-8 de las demás conexiones (distancia al extremo y al borde de 1,2 × agujero, paso de 2,2 × agujero a lo largo y 2,4 × agujero a lo ancho), más una placa de alma más alta que el alma libre y bulones de ala demasiado cerca del alma para el filete.
- DetailCraft no diseña el empalme (no hace verificación de resistencia) y no fabrica placas de relleno para piezas de distinto espesor.
- Copiar ambas piezas copia también su empalme; eliminar cualquiera de las piezas elimina el empalme.
