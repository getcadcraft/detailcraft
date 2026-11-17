---
title: Pegar un área copiada como imagen de referencia
summary: Copiá parte de una hoja PDF en MarkupCraft y pegala en DetailCraft a su tamaño real, apoyada en un nivel debajo del acero, para modelar encima.
keywords: imagen, imagen de referencia, base, fondo, copiar área, markupcraft, pdf, calcar, tamaño real, escala, opacidad, superposición
from: 0c48445f
---

La herramienta Copiar área de MarkupCraft copia parte de una hoja como imagen que sabe cuán grande es. Pegala en DetailCraft y queda plana sobre un nivel, a su tamaño real, debajo de la grilla y del acero, para que puedas colocar miembros encima de una planta de los planos.

## Pegarla

1. En MarkupCraft, copiá el área con {{ui:Más}} › {{ui:Copiar un área de la página…}}, luego {{ui:Copiar}} (o {{ui:Copiar como superposición}}, que vuelve transparente el papel).
2. En DetailCraft (mismo navegador), presioná {{key:Mod+V}} o elegí {{ui:Pegar}}.

La imagen cae en el medio de la grilla, en el nivel que muestra {{ui:Planta}} (en 3D o en una elevación, en el nivel más bajo), y queda seleccionada. La barra de estado dice qué tamaño tiene.

- **Tamaño real:** cuando la hoja tenía escala de dibujo, un píxel se dibuja como el largo que muestra en el plano.
- **Tamaño en papel:** cuando la hoja no tenía escala, la imagen tiene el tamaño que el área tenía en papel, y la barra de estado lo dice. Escribí un nuevo **mm por píxel** en {{ui:Propiedades}} para escalarla.

Un área copiada como superposición comienza con la opacidad con que fue copiada.

{{key:Mod+V}} pega lo que copiaste por último: el área de MarkupCraft, o miembros y zapatas copiados en DetailCraft. Si otra imagen fue copiada al portapapeles después del área (desde otro programa), no se pega nada; copiá el área de nuevo.

## Mover, cambiar y eliminarla

- Hacé clic en la imagen para seleccionarla (lo que esté delante se toma primero). Un contorno azul muestra que está seleccionada.
- Arrastrala para moverla por el nivel. Su centro y sus esquinas se ajustan a las intersecciones de la grilla.
- En {{ui:Propiedades}}, escribí dónde va su centro (x, y) y el nivel en que queda (z), su **mm por píxel** y su **opacidad**.
- {{key:Delete}} o {{ui:Eliminar}} la quita.

Cada pegado, movimiento, cambio y eliminación es un paso: {{key:Mod+Z}} lo deshace.

La imagen se guarda en el archivo del modelo, así que se abre junto con el modelo. Es solo una referencia: no está en los planos, en las exportaciones, en la lista de materiales ni en una copia.
