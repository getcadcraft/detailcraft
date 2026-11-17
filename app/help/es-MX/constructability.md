---
title: Revisiones de constructibilidad
summary: Problemas de lo que un detallista detecta a simple vista: un perno al que una llave no llega, pernos demasiado juntos para el dado, soldaduras de filete fuera de sus límites de tamaño, soldaduras que una antorcha no alcanza y tubos que retienen agua.
keywords: constructibilidad, llave de tuercas, dado, acceso a pernos, apriete, tamaño de soldadura, soldadura de filete, soldadura mínima, soldadura máxima, agua, agujero de ventilación, agujero de drenaje, galvanizado, sección hueca, problemas
from: 72315151
---

DetailCraft busca cuatro tipos de problemas que ninguna revisión de resistencia encuentra, y los lista en el panel {{ui:Problemas}}. Son advertencias y notas para revisar, no errores: el modelo se sigue construyendo.

## Un perno al que una llave no alcanza

Para cada perno, DetailCraft coloca un dado sobre la cabeza y sobre la tuerca. El dado es un cilindro tan ancho como la tuerca de esquina a esquina más una pared de 4 mm, de 60 mm de largo. Si un alma de viga, un patín, una placa o un contraventeo se mete dentro de ese cilindro, el problema indica la conexión, cuántos pernos, qué pieza estorba y a qué distancia está del perno.

El dado es un dado de impacto típico. Una llave de tuercas necesita menos espacio, y una herramienta más grande, más. Pida a su asistente conectado que ejecute `constructability_check` con otro `socketLength` para ver cómo cambia la respuesta.

## Pernos demasiado juntos para el dado

El dado sobre un perno no debe tocar la cabeza del siguiente. Los pernos de una conexión que estén más cerca que el ancho del dado más la cabeza del vecino se listan con la separación encontrada y la separación necesaria.

## Tamaños de soldadura de filete

AISC 360-16 Tabla J2.4 fija la soldadura de filete más pequeña según el espesor de la parte más delgada (3 mm hasta 6.35 mm de espesor, 5 mm hasta 12.7, 6 mm hasta 19.05, 8 mm por encima), y J2.2b la más grande a lo largo de un borde de material: no mayor que el material cuando es más delgado que 6.35 mm, y si no, 1.6 mm menos. Las conexiones con el mismo tamaño sobre el mismo espesor se listan como un solo problema.

El espesor usado es la parte más delgada que nombra la soldadura, así que una soldadura de 8 mm en todo el contorno de una viga con un alma de 6.35 mm se lista.

## Agua y ventilación

- Un **extremo superior abierto** de una sección hueca que está vertical o inclinada más de 10° deja entrar la lluvia.
- Una sección hueca **cerrada en ambos extremos** necesita un agujero de ventilación y uno de drenaje; el galvanizado por inmersión en caliente y la presión del aire calentado los exigen.

## ¿Puede el soldador alcanzarla?

Una soldadura de filete se hace con la antorcha a medio camino entre las dos caras que une. Para cada soldadura de filete en todo el contorno (una placa extrema, una placa base, una placa de inglete), la revisión toma el contorno de la sección de la pieza en la placa y, cada 20 mm, traza una trayectoria de antorcha hacia afuera a 45° desde el punto donde su boquilla (radio de 10 mm al inicio) libera primero ambas caras, durante otros 30 mm. Si la trayectoria choca con el patín propio de la viga o con otra pieza, se lista esa parte de la soldadura con la pieza y la distancia. Estos números son típicos, no los de una norma: pida a su fabricante el proceso y la boquilla. Las soldaduras a lo largo de dos bordes (una lengüeta de cortante) no se ubican y no se revisan.
