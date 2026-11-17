---
title: Agregar agujeros y despatines
summary: Escriba agujeros en almas, patines y placas, y despatine los patines en el extremo de una viga, medidos desde el extremo de corte de la pieza.
keywords: agujero, agujeros, agujero de perno, despatín, muesca, corte, despatinar, taladro, punzonar, agujero en alma, agujero en patín
from: 33d12398
---

Los agujeros y los despatines se escriben por posición. Pertenecen al miembro y se mueven con él.

Los agujeros hechos por conexiones (placas de extremo, placas base) se agregan por usted; no los escribe. Aparecen como "… agujeros de conexiones (edite la conexión)".

## Desde dónde se miden las posiciones

- **x** corre a lo largo de la pieza desde su **inicio de corte**: el extremo de inicio después de cualquier recorte de conexión. Así, x = 0 es el extremo real del acero, no el punto del eje.
- **y** se mide a través de la cara desde el centro de la sección:
   - en el **alma**: hacia arriba (positivo) o hacia abajo desde la mitad de la altura;
   - en un **patín** o una **placa**: a lo ancho, desde la línea central.
- El inicio del miembro es el primer punto en que hizo clic al colocarlo. Las filas {{ui:Extremos (x, y, z mm)}} muestran cuál extremo es cuál.

## Agregar un agujero

1. Seleccione el miembro.
2. En el cuadro {{ui:Agujeros}} del panel {{ui:Propiedades}}, elija la {{ui:Cara}}: {{ui:Alma}}, {{ui:Patín superior}} o {{ui:Patín inferior}} (para una sección I, canal o tubo rectangular), o {{ui:Cara de placa}} (para una placa).
3. Escriba {{ui:x a lo largo (mm)}}, {{ui:y transversal (mm)}} y {{ui:Diámetro (mm)}}. El formulario empieza con x 100, y 0, diámetro 22.
4. Elija {{ui:Agregar agujero}}.

La barra de estado dice "Agujero agregado. x se mide desde el inicio de corte; y desde el centro de la sección (alma: hacia arriba, patín/placa: a lo ancho)." El agujero aparece en la lista, y en la vista como un tapón oscuro a través de la cara.

Para quitar un agujero, elija la × junto a él en la lista.

Los ángulos y los tubos redondos todavía no admiten agujeros: su cuadro {{ui:Agujeros}} lo indica.

:::note
En la vista 3D los agujeros se dibujan como tapones oscuros, no cortados a través del acero. Son agujeros reales en los archivos NC, en los planos de taller y en la exportación IFC.
:::

Un agujero cuya x está más allá de cualquiera de los extremos de la pieza aparece en la pestaña {{ui:Problemas}} como "un agujero está fuera del extremo de la pieza".

## Agregar un despatín

Los despatines son para secciones I: cortan el patín superior o inferior (y esa altura del alma) en un extremo, para que la viga libre a otro miembro.

1. Seleccione un miembro de sección I.
2. En el cuadro {{ui:Despatines}}, elija el extremo ({{ui:Inicio}} o {{ui:Final}}) y el {{ui:Lado}} ({{ui:Superior}} o {{ui:Inferior}}).
3. Escriba {{ui:Longitud (mm)}} (a lo largo de la viga desde ese extremo) y {{ui:Profundidad (mm)}} (hacia abajo desde arriba, o hacia arriba desde abajo). El formulario empieza con 100 x 40.
4. Elija {{ui:Agregar despatín}}.

La vista muestra el despatín recortado en el acero. La lista dice, por ejemplo, "Superior en el inicio: 100 x 40". Quítelo con su ×.

Los despatines son cuadrados: todavía no hay radio en la esquina interior.

## Cómo los agujeros y despatines afectan las marcas

Dos piezas reciben la misma marca de pieza solo si sus agujeros y despatines coinciden dentro de 1 mm, teniendo en cuenta que la pieza esté volteada. Agregar un agujero a una viga de un grupo le da una marca nueva. Vea [Reglas de marcas](topic:mark-rules).
