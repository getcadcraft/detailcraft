---
title: Pegar unha área copiada como imaxe de referencia
summary: Copie unha parte dunha folla PDF en MarkupCraft e péguea en DetailCraft a tamaño real, apoiada nun nivel debaixo do aceiro, para modelar sobre ela.
keywords: imaxe, imaxe de referencia, subxacente, fondo, copiar área, markupcraft, pdf, calcar, tamaño real, escala, opacidade, superposición
from: 0c48445f
---

A ferramenta Copiar área de MarkupCraft copia unha parte dunha folla como unha imaxe que coñece o seu tamaño real. Péguea en DetailCraft e quedará plana sobre un nivel, a tamaño real, debaixo da cuadrícula e do aceiro, para poder colocar elementos sobre unha planta dos debuxos.

## Pegar a imaxe

1. En MarkupCraft, copie a área con {{ui:Máis}} › {{ui:Copiar unha área da páxina…}}, despois {{ui:Copiar}} (ou {{ui:Copiar como superposición}}, que fai o papel transparente).
2. En DetailCraft (no mesmo navegador), prema {{key:Mod+V}} ou escolla {{ui:Pegar}}.

A imaxe colócase no centro da cuadrícula, no nivel que se amosa en {{ui:Planta}} (en 3D ou nun alzado, no nivel máis baixo) e queda seleccionada. A barra de estado indica o seu tamaño.

- **Tamaño real:** cando a folla tiña unha escala de debuxo, cada píxel debúxase coa lonxitude que amosa no debuxo.
- **Tamaño en papel:** cando a folla non tiña escala, a imaxe é tan grande como era a área no papel, e a barra de estado así o indica. Escriba uns **mm por píxel** novos en {{ui:Propiedades}} para escalala.

Unha área copiada como superposición comeza coa opacidade coa que se copiou.

{{key:Mod+V}} pega o último que copiou: a área de MarkupCraft ou os elementos e zapatas copiados en DetailCraft. Se despois da área se copiou ao portapapeis outra imaxe (desde outro programa), non se pega nada; copie de novo a área.

## Mover, cambiar e eliminar

- Prema na imaxe para seleccionala (o que estea diante dela escóllese primeiro). Un contorno azul indica que está seleccionada.
- Arrástrea para movela polo nivel. O seu centro e as súas esquinas encaixan nas interseccións da cuadrícula.
- En {{ui:Propiedades}}, escriba onde vai o seu centro (x, y) e o nivel no que está (z), os seus **mm por píxel** e a súa **opacidade**.
- {{key:Delete}} ou {{ui:Eliminar}} elimínaa.

Cada pegado, movemento, cambio e eliminación é un paso: {{key:Mod+Z}} desfai o paso.

A imaxe gárdase no ficheiro do modelo, así que se abre co modelo. É só unha referencia: non aparece nos debuxos, nas exportacións, na {{ui:Lista de materiais}} nin nunha copia.
