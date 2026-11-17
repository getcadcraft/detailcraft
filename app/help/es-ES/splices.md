---
title: Empalmes
summary: Une dos piezas de una viga o de un pilar extremo con extremo, con placas cubrejuntas atornilladas en las alas y en el alma.
keywords: empalme, empalme de viga, empalme de pilar, cubrejuntas, placa de empalme, chapa de ala, chapa de alma, empalme atornillado, junta, tramo, conectar
from: 97d141c2
---

Un empalme atornillado une dos piezas de un mismo perfil en I extremo con extremo: una placa cubrejuntas en el exterior de cada ala y una placa a cada lado del alma, atornilladas a través de ambas piezas. DetailCraft recorta las piezas hasta la separación, coloca las cuatro placas, taladra los agujeros en las placas y en ambas piezas, añade los tornillos y avisa de las distancias al borde, de la separación y del ajuste.

## Dónde funciona

- Dos vigas, o dos tramos de pilar, del **mismo perfil en I**, que se encuentran **extremo con extremo y alineados**: los extremos separados no más de 50 mm, las piezas paralelas y sobre una misma línea (con una tolerancia de 1 mm). Cualquiera de las dos piezas puede estar dibujada en cualquier sentido.
- Funcionan las piezas horizontales, inclinadas o verticales.
- Se rechazan dos piezas de distinto canto o ancho de ala, así como canales, cantoneras y tubos.

## Añadir empalmes

1. Dibuje las dos piezas de modo que se encuentren extremo con extremo. Para dividir una pieza ya dibujada, vuelva a dibujarla como dos piezas.
2. Seleccione una (o ambas) y elija {{ui:Splice}} en el menú {{ui:More}} del grupo {{ui:Connect}}.
3. Cada unión libre de las piezas seleccionadas con otra pieza del mismo perfil recibe un empalme. La barra de estado indica cuántos.

Seleccione el empalme (haga clic en una de sus placas) para cambiar sus ajustes en el panel derecho. {{ui:Aplicar a similares (n)}} copia el empalme en cada otra unión libre entre piezas del mismo perfil.

## Ajustes (mm)

| Ajuste | Valor predeterminado | Qué hace |
|---|---|---|
| Separación entre los extremos | 10 | Cada pieza se recorta la mitad de esta separación |
| Diámetro del tornillo, agujero, calidad, margen de longitud | 20, 22, A325, 30 | Igual que en las placas de testa |
| Espesor de la chapa de ala | 12 | La placa tiene el mismo ancho que el ala |
| Filas de tornillos en el ala (cada lado) | 3 | Filas a lo ancho del ala, a cada lado de la unión |
| Paso de tornillos en el ala | 75 | A lo largo de la pieza |
| Gramil de tornillos en el ala | 0 | Entre las dos líneas de tornillos; 0 = ancho del ala menos 80 |
| Distancia al extremo en el ala | 40 | Del extremo de la pieza al primer tornillo, y del último tornillo al extremo de la placa |
| Espesor de la chapa de alma | 8 | Una a cada lado del alma |
| Filas de tornillos en el alma | 3 | A lo alto del alma, centradas |
| Columnas de tornillos en el alma (cada lado) | 2 | A lo largo de la pieza, a cada lado de la unión |
| Paso de tornillos en el alma, a lo alto del alma / a lo largo de la pieza | 75, 75 | |
| Distancia al extremo en el alma | 40 | Igual que en las alas |
| Altura de la chapa de alma | 0 | 0 = alma libre entre los acuerdos, menos 10 arriba y abajo |
| Material de la placa | A36 | Texto libre |

Las longitudes de las placas dependen de los tornillos: chapa de ala = separación + 2 × (2 × distancia al extremo + (filas − 1) × paso); las chapas de alma se calculan igual con sus columnas. Con los valores predeterminados, las chapas de ala miden 470 de largo.

## Notas útiles

- Las placas pertenecen a la **primera pieza dibujada** de las dos (en sus propiedades se llama primera pieza): aparecen en su plano de conjunto y se entregan con ella, atornilladas, no soldadas. El plano de conjunto de la segunda pieza muestra solo sus agujeros.
- Los tornillos del ala sujetan el ala y su placa; los del alma sujetan el alma y ambas chapas de alma. Las longitudes de los tornillos aparecen por separado en las propiedades.
- Los avisos usan los mínimos de EN 1993-1-8 de las demás conexiones (distancia al extremo y al borde 1.2 × agujero, paso 2.2 × agujero en la dirección de la pieza y 2.4 × agujero transversalmente), además de un aviso si una chapa de alma es más alta que el alma libre o si los tornillos del ala están demasiado cerca del alma para el acuerdo.
- DetailCraft no diseña el empalme (no hace comprobación resistente) y no fabrica chapas de relleno para piezas de distinto espesor.
- Copiar ambas piezas copia su empalme; borrar cualquiera de las dos piezas borra el empalme.
