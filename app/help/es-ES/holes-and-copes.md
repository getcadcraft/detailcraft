---
title: Añadir taladros y cortes
summary: Escriba taladros en almas, alas y placas, y corte las alas en el extremo de una viga, medidos desde el extremo de corte de la pieza.
keywords: taladro, taladros, taladro de tornillo, corte, cortes, recorte, muesca, cortar, perforar, punzonar, taladro en alma, taladro en ala
from: 33d12398
---

Los taladros y los cortes se escriben por posición. Pertenecen a la barra y se mueven con ella.

Los taladros hechos por las uniones (placas de testa, placas de base) se añaden automáticamente; no los escribe usted. Aparecen como "… taladros de uniones (edite la unión)".

## Desde dónde se miden las posiciones

- **x** corre a lo largo de la pieza desde su **inicio de corte**: el extremo de inicio después de cualquier unión que lo haya recortado. Así, x = 0 es el extremo real del acero, no el punto de la rejilla.
- **y** se mide a través de la cara desde el centro de la sección:
   - en el **alma**: hacia arriba (positivo) o hacia abajo desde la mitad del canto;
   - en un **ala** o una **placa**: a lo ancho, desde la línea central.
- El inicio de la barra es el primer punto en el que hizo clic al colocarla. Las filas {{ui:Extremos (x, y, z mm)}} muestran cuál es cada extremo.

## Añadir un taladro

1. Seleccione la barra.
2. En el cuadro {{ui:Taladros}} del panel {{ui:Propiedades}}, elija la {{ui:Cara}}: {{ui:Alma}}, {{ui:Ala superior}} o {{ui:Ala inferior}} (para perfil en I, en U o tubo rectangular), o {{ui:Cara de la placa}} (para una placa).
3. Escriba {{ui:x a lo largo (mm)}}, {{ui:y transversal (mm)}} y {{ui:Diámetro (mm)}}. El formulario empieza con x 100, y 0, diámetro 22.
4. Elija {{ui:Añadir taladro}}.

La barra de estado indica "Taladro añadido. x se mide desde el inicio de corte; y desde el centro de la sección (alma: hacia arriba, ala/placa: a lo ancho)." El taladro aparece en la lista, y en la vista como un tapón oscuro a través de la cara.

Para eliminar un taladro, elija la × junto a él en la lista.

Los ángulos y los tubos redondos todavía no admiten taladros: su cuadro {{ui:Taladros}} lo indica.

:::note
En la vista 3D los taladros se dibujan como tapones oscuros, no como cortes en el acero. Son taladros reales en los archivos NC, en los planos de taller y en la exportación IFC.
:::

Un taladro cuya x esté más allá de cualquier extremo de la pieza aparece en la pestaña {{ui:Problemas}} como "un taladro está fuera del extremo de la pieza".

## Añadir un corte

Los cortes son para perfiles en I: recortan el ala superior o inferior (y esa profundidad de alma) en un extremo, para que la viga libre a otra barra.

1. Seleccione una barra de perfil en I.
2. En el cuadro {{ui:Cortes}}, elija {{ui:Final}} ({{ui:Inicio}} o {{ui:Final}}) y {{ui:Lado}} ({{ui:Superior}} o {{ui:Inferior}}).
3. Escriba {{ui:Longitud (mm)}} (a lo largo de la viga desde ese extremo) y {{ui:Profundidad (mm)}} (hacia abajo desde arriba, o hacia arriba desde abajo). El formulario empieza con 100 x 40.
4. Elija {{ui:Añadir corte}}.

La vista muestra el corte recortado en el acero. La lista dice, por ejemplo, "Superior en el inicio: 100 x 40". Elimínelo con su ×.

Los cortes son cuadrados: todavía no tienen radio en la esquina interior.

## Cómo afectan los taladros y los cortes a las marcas

Dos piezas solo reciben la misma marca de pieza si sus taladros y cortes coinciden dentro de 1 mm, teniendo en cuenta que la pieza esté volteada. Añadir un taladro a una viga de un grupo le da una marca nueva. Véase [Reglas de marcas](topic:mark-rules).
