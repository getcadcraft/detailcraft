---
title: Empalmes
summary: Una dos piezas de una viga o columna de extremo a extremo con placas de cubierta empernadas en los patines y el alma.
keywords: empalme, empalme de viga, empalme de columna, placa de cubierta, placa de empalme, placa de patín, placa de alma, empalme empernado, junta, tramo, conectar
from: 97d141c2
---

Un empalme empernado une dos piezas de un mismo perfil en I de extremo a extremo: una placa de cubierta por fuera de cada patín y una placa a cada lado del alma, empernadas a través de ambas piezas. DetailCraft recorta las piezas hasta la separación, coloca las cuatro placas, perfora los agujeros en las placas y en ambas piezas, agrega los pernos y advierte sobre las distancias al borde, el espaciamiento y el ajuste.

## Dónde funciona

- Dos vigas, o dos tramos de columna, del **mismo perfil en I**, que se unen de extremo a extremo **en línea**: los extremos a no más de 50 mm entre sí, las piezas paralelas y sobre una misma línea (dentro de 1 mm). Cualquiera de las dos piezas puede estar dibujada en cualquier dirección.
- Funcionan las piezas horizontales, inclinadas o verticales.
- Se rechazan dos piezas de distinta altura o distinto ancho de patín, así como canales, ángulos y tubos.

## Agregar empalmes

1. Dibuje las dos piezas de modo que se unan de extremo a extremo. Para dividir un miembro que ya está dibujado, vuelva a dibujarlo como dos piezas.
2. Seleccione una (o ambas) y elija {{ui:Empalme}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada unión libre de las piezas seleccionadas con otra pieza del mismo perfil recibe un empalme. La barra de estado indica cuántos.

Seleccione el empalme (haga clic en una de sus placas) para cambiar sus opciones en el panel derecho. {{ui:Aplicar a similares (n)}} copia el empalme a cada otra unión libre entre piezas del mismo perfil.

## Opciones (mm)

| Opción | Predeterminado | Qué hace |
|---|---|---|
| Separación entre los extremos | 10 | Cada pieza se recorta la mitad de este valor |
| Diámetro del perno, agujero, grado, margen de longitud | 20, 22, A325, 30 | Igual que en las placas de extremo |
| Espesor de la placa de patín | 12 | La placa tiene el ancho del patín |
| Filas de pernos en el patín (cada lado) | 3 | Filas a lo ancho del patín, a cada lado de la unión |
| Paso de pernos en el patín | 75 | A lo largo del miembro |
| Gramil de pernos en el patín | 0 | Entre las dos líneas de pernos; 0 = ancho del patín menos 80 |
| Distancia al extremo del patín | 40 | Del extremo del miembro al primer perno, y del último perno al extremo de la placa |
| Espesor de la placa de alma | 8 | Una a cada lado del alma |
| Filas de pernos en el alma | 3 | A lo alto del alma, centradas |
| Columnas de pernos en el alma (cada lado) | 2 | A lo largo del miembro, a cada lado de la unión |
| Paso de pernos en el alma, a lo alto del alma / a lo largo del miembro | 75, 75 | |
| Distancia al extremo del alma | 40 | Igual que en los patines |
| Altura de la placa de alma | 0 | 0 = el alma libre entre los radios de unión, menos 10 arriba y abajo |
| Material de la placa | A36 | Texto |

Las longitudes de las placas se derivan de los pernos: placa de patín = separación + 2 × (2 × distancia al extremo + (filas − 1) × paso); las placas de alma se calculan igual con sus columnas. Con los valores predeterminados, las placas de patín miden 470 de largo.

## Conviene saber

- Las placas pertenecen a la **primera pieza dibujada** de las dos (sus propiedades la llaman la primera pieza): aparecen en su plano de ensamblaje y se envían con ella, empernadas, no soldadas. El plano de ensamblaje de la segunda pieza muestra solo sus agujeros.
- Los pernos de patín sujetan el patín y su placa; los pernos de alma sujetan el alma y ambas placas de alma. Las longitudes de los pernos se listan aparte en las propiedades.
- Las advertencias usan los mínimos de EN 1993-1-8 de las demás conexiones (distancia al extremo y al borde de 1.2 × agujero, paso de 2.2 × agujero a lo largo y 2.4 × agujero a lo ancho), además de una placa de alma más profunda que el alma libre y pernos de patín demasiado cerca del alma para el radio de unión.
- DetailCraft no diseña el empalme (no hay revisión de resistencia) y no fabrica placas de relleno para piezas de distinto espesor.
- Copiar ambas piezas copia su empalme; borrar cualquiera de las dos piezas lo borra.
