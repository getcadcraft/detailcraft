---
title: Pegar un área copiada como imagen de referencia
summary: Copie parte de una hoja PDF en MarkupCraft y péguela en DetailCraft a su tamaño real, apoyada en un nivel bajo el acero, para modelar sobre ella.
keywords: imagen, imagen de referencia, subyacente, fondo, copiar área, markupcraft, pdf, calcar, tamaño real, escala, opacidad, superposición
from: 0c48445f
---

La herramienta Copiar área de MarkupCraft copia parte de una hoja como una imagen que conoce su tamaño real. Péguela en DetailCraft y quedará plana sobre un nivel, a su tamaño real, debajo de la retícula y del acero, para que pueda colocar miembros sobre una planta de los planos.

## Pegarla

1. En MarkupCraft, copie el área con {{ui:Más}} › {{ui:Copiar un área de la página…}}, y luego {{ui:Copiar}} (o {{ui:Copiar como superposición}}, que hace transparente el papel).
2. En DetailCraft (en el mismo navegador), pulse {{key:Mod+V}} o elija {{ui:Pegar}}.

La imagen se coloca en el centro de la retícula, en el nivel que muestra {{ui:Planta}} (en 3D o en una elevación, en el nivel más bajo), y queda seleccionada. La barra de estado indica su tamaño.

- **Tamaño real:** cuando la hoja tenía escala de dibujo, cada píxel se dibuja con la longitud que muestra en el dibujo.
- **Tamaño en papel:** cuando la hoja no tenía escala, la imagen tiene el tamaño que el área tenía en el papel, y la barra de estado lo indica. Escriba unos **mm por píxel** nuevos en {{ui:Propiedades}} para escalarla.

Un área copiada como superposición inicia con la opacidad con la que se copió.

{{key:Mod+V}} pega lo último que haya copiado: el área de MarkupCraft, o miembros y zapatas copiados en DetailCraft. Si después del área se copió al portapapeles otra imagen (desde otro programa), no se pega nada; copie el área de nuevo.

## Mover, cambiar y eliminarla

- Haga clic en la imagen para seleccionarla (primero se toma lo que esté delante de ella). Un contorno azul indica que está seleccionada.
- Arrástrela para moverla sobre el nivel. Su centro y sus esquinas se ajustan a las intersecciones de la retícula.
- En {{ui:Propiedades}}, escriba dónde va su centro (x, y) y el nivel en que se encuentra (z), sus **mm por píxel** y su **opacidad**.
- {{key:Delete}} o {{ui:Eliminar}} la quita.

Cada pegado, desplazamiento, cambio y eliminación es un solo paso: {{key:Mod+Z}} lo deshace.

La imagen se guarda en el archivo del modelo, así que se abre con el modelo. Es solo una referencia: no aparece en los planos, las exportaciones, la lista de materiales ni en una copia.
