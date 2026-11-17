---
title: Comprobaciones de constructibilidad
summary: Problemas de lo que un detallista detecta a simple vista: un tornillo al que una llave no llega, tornillos demasiado juntos para la llave de vaso, soldaduras en ángulo fuera de sus límites de tamaño, soldaduras a las que un soplete no llega y tubos que retienen agua.
keywords: constructibilidad, llave, llave de vaso, acceso a tornillos, apriete, tamaño de soldadura, soldadura en ángulo, soldadura mínima, soldadura máxima, agua, orificio de ventilación, orificio de drenaje, galvanizado, sección hueca, problemas
from: 72315151
---

DetailCraft busca cuatro tipos de problema que ninguna comprobación de resistencia encuentra, y los enumera en el panel {{ui:Problemas}}. Son avisos y notas que revisar, no errores: el modelo se construye igualmente.

## Un tornillo al que una llave no llega

Para cada tornillo, DetailCraft pone un vaso sobre la cabeza y sobre la tuerca. El vaso es un cilindro tan ancho como la tuerca entre sus esquinas más una pared de 4 mm, de 60 mm de largo. Si un alma de viga, un ala, una placa o una diagonal queda dentro de ese cilindro, el problema indica la unión, cuántos tornillos, qué pieza estorba y a qué distancia está del tornillo.

El vaso es una llave de impacto típica. Una llave de boca necesita menos espacio, y una herramienta mayor, más. Pida a su asistente conectado que ejecute `constructability_check` con otro `socketLength` para ver cómo cambia la respuesta.

## Tornillos demasiado juntos para el vaso

El vaso sobre un tornillo no debe tocar la cabeza del siguiente. Los tornillos de una unión más cercanos que la anchura del vaso más la cabeza del vecino se listan con la separación encontrada y la separación necesaria.

## Tamaños de soldadura en ángulo

AISC 360-16 tabla J2.4 fija la soldadura en ángulo mínima según el espesor de la pieza más delgada (3 mm hasta 6.35 mm de espesor, 5 mm hasta 12.7, 6 mm hasta 19.05, 8 mm por encima), y J2.2b la máxima a lo largo de un borde de material: no mayor que el material cuando este tiene menos de 6.35 mm, y en otro caso 1.6 mm menos. Las uniones con el mismo tamaño sobre el mismo espesor se listan como un solo problema.

El espesor usado es el de la pieza más delgada nombrada por la soldadura, así que una soldadura de 8 mm en todo el contorno de una viga con alma de 6.35 mm aparece en la lista.

## Agua y ventilación

- Un **extremo superior abierto** de una sección hueca que está vertical o inclinada más de 10° deja entrar la lluvia.
- Una sección hueca **cerrada por ambos extremos** necesita un orificio de ventilación y otro de drenaje; el galvanizado en caliente y la presión del aire calentado exigen uno.

## ¿Puede llegar el soldador?

Una soldadura en ángulo se hace con el soplete a medio camino entre las dos caras que une. Para cada soldadura en ángulo a todo el contorno (una placa de testa, una placa de base, una placa a inglete), la comprobación toma el contorno de la sección del miembro en la placa y, cada 20 mm, traza una trayectoria del soplete hacia fuera a 45° desde el punto donde su boquilla (radio de 10 mm para empezar) libra ambas caras por primera vez, durante otros 30 mm. Si la trayectoria choca con el ala de la propia viga o con otra pieza, esa parte de la soldadura se lista con la pieza y la distancia. Estos números son típicos, no los de una norma: pida a su fabricante el proceso y la boquilla. Las soldaduras a lo largo de dos bordes (una pletina de cortante) no se localizan y no se comprueban.
