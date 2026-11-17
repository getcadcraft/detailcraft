---
title: Pegar un área copiada como imagen de referencia
summary: Copie parte de una hoja PDF en MarkupCraft y péguela en DetailCraft a su tamaño real, apoyada en un nivel bajo el acero, para modelar sobre ella.
keywords: imagen, imagen de referencia, base, fondo, copiar área, markupcraft, pdf, calcar, tamaño real, escala, opacidad, superposición
from: 0c48445f
---

La herramienta Copiar área de MarkupCraft copia una parte de una hoja como imagen que conoce su propio tamaño. Péguela en DetailCraft y quedará plana sobre un nivel, a su tamaño real, bajo la rejilla y el acero, para que pueda colocar piezas sobre una planta de los planos.

## Pegarla

1. En MarkupCraft, copie el área con {{ui:Más}} › {{ui:Copiar un área de la página…}} y después {{ui:Copiar}} (o {{ui:Copiar como superposición}}, que hace el papel transparente).
2. En DetailCraft (en el mismo navegador), pulse {{key:Mod+V}} o elija {{ui:Pegar}}.

La imagen aparece en el centro de la rejilla, en el nivel mostrado en {{ui:Planta}} (en 3D o en un alzado, en el nivel más bajo), y queda seleccionada. La barra de estado indica su tamaño.

- **Tamaño real:** cuando la hoja tenía escala de dibujo, cada píxel se dibuja con la longitud que indica el plano.
- **Tamaño en papel:** cuando la hoja no tenía escala, la imagen tiene el tamaño que el área tenía en papel, y la barra de estado lo indica. Escriba unos **mm por píxel** nuevos en {{ui:Propiedades}} para escalarla.

Un área copiada como superposición empieza con la opacidad con la que se copió.

{{key:Mod+V}} pega lo último que copió: el área de MarkupCraft o las piezas y zapatas copiadas en DetailCraft. Si se copió otra imagen al portapapeles después del área (desde otro programa), no se pega nada; copie el área de nuevo.

## Mover, cambiar y borrarla

- Pulse la imagen para seleccionarla (lo que esté delante de ella se elige primero). Un contorno azul indica que está seleccionada.
- Arrástrela para moverla por el nivel. Su centro y sus esquinas se ajustan a las intersecciones de la rejilla.
- En {{ui:Propiedades}}, escriba dónde va su centro (x, y) y el nivel en el que está (z), sus **mm por píxel** y su **opacidad**.
- {{key:Delete}} o {{ui:Borrar}} la elimina.

Cada pegado, movimiento, cambio y borrado es un paso: {{key:Mod+Z}} lo deshace.

La imagen se guarda en el archivo del modelo, por lo que se abre con el modelo. Es solo una referencia: no aparece en los planos, las exportaciones, la lista de materiales ni en una copia.
