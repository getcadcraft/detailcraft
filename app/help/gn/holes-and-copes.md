---
title: Agregar agujeros y recortes
summary: Escribí agujeros en almas, alas y placas, y recortá las alas en el extremo de una viga, medidos desde el extremo de corte de la pieza.
keywords: agujero, agujeros, agujero de perno, recorte, muesca, corte, recortado, taladro, punzón, agujero en alma, agujero en ala
from: 33d12398
---

Los agujeros y los recortes se escriben por posición. Pertenecen al miembro y se mueven con él.

Los agujeros hechos por las uniones (chapas de extremo, placas base) se agregan solos; no los escribís vos. Aparecen listados como "… agujeros de uniones (editar la unión)".

## Desde dónde se miden las posiciones

- **x** corre a lo largo de la pieza desde su **inicio de corte**: el extremo de inicio después de cualquier recorte de unión. Así, x = 0 es el extremo real del acero, no el punto de la grilla.
- **y** se mide sobre la cara desde el centro de la sección:
   - en el **alma**: hacia arriba (positivo) o hacia abajo desde la mitad de la altura;
   - en un **ala** o una **placa**: a lo ancho, desde la línea central.
- El inicio del miembro es el primer punto donde hiciste clic al colocarlo. Las filas {{ui:Extremos (x, y, z mm)}} muestran cuál extremo es cuál.

## Agregar un agujero

1. Seleccioná el miembro.
2. En el cuadro {{ui:Agujeros}} del panel {{ui:Propiedades}}, elegí la {{ui:Cara}}: {{ui:Alma}}, {{ui:Ala superior}} o {{ui:Ala inferior}} (para perfil I, canal o tubo rectangular), o {{ui:Cara de placa}} (para una placa).
3. Escribí {{ui:x a lo largo (mm)}}, {{ui:y a través (mm)}} y {{ui:Diámetro (mm)}}. El formulario empieza con x 100, y 0, diámetro 22.
4. Elegí {{ui:Agregar agujero}}.

La barra de estado dice "Agujero agregado. x se mide desde el inicio de corte; y desde el centro de la sección (alma: hacia arriba, ala/placa: a lo ancho)." El agujero aparece en la lista, y en la vista como un tapón oscuro a través de la cara.

Para quitar un agujero, elegí la × al lado de él en la lista.

Los ángulos y los tubos redondos todavía no admiten agujeros: su cuadro {{ui:Agujeros}} lo dice.

:::note
En la vista 3D los agujeros se dibujan como tapones oscuros, no cortados a través del acero. Son agujeros reales en los archivos NC, los planos de taller y la exportación IFC.
:::

Un agujero cuya x queda más allá de cualquiera de los extremos de la pieza aparece en la pestaña {{ui:Problemas}} como "un agujero está fuera del extremo de la pieza".

## Agregar un recorte

Los recortes son para perfiles I: cortan el ala superior o inferior (y esa profundidad de alma) en un extremo, para que la viga libre a otro miembro.

1. Seleccioná un miembro de perfil I.
2. En el cuadro {{ui:Recortes}}, elegí el {{ui:Extremo}} ({{ui:Inicio}} o {{ui:Fin}}) y el {{ui:Lado}} ({{ui:Superior}} o {{ui:Inferior}}).
3. Escribí {{ui:Longitud (mm)}} (a lo largo de la viga desde ese extremo) y {{ui:Profundidad (mm)}} (hacia abajo desde arriba, o hacia arriba desde abajo). El formulario empieza con 100 x 40.
4. Elegí {{ui:Agregar recorte}}.

La vista muestra el recorte cortado en el acero. La lista dice, por ejemplo, "Superior en el inicio: 100 x 40". Quitalo con su ×.

Los recortes son cuadrados: todavía no hay radio en la esquina interior.

## Cómo los agujeros y los recortes afectan las marcas

Dos piezas reciben la misma marca solo si sus agujeros y recortes coinciden dentro de 1 mm, admitiendo que la pieza esté dada vuelta. Agregar un agujero a una viga de un grupo le da una marca nueva. Ver [Reglas de marcas](topic:mark-rules).
