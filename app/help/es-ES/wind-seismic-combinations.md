---
title: Viento, emplazamiento sísmico y combinaciones ASCE 7
summary: Crear casos de carga de viento para un edificio cerrado y rígido, calcular los valores de diseño sísmico de un emplazamiento y crear las combinaciones ASCE 7, en la pestaña Análisis.
keywords: viento, carga de viento, asce 7, procedimiento direccional, exposición, cerramiento, sísmico, clase de emplazamiento, ss, s1, sds, sd1, usgs, espectro de diseño, combinaciones de carga, lrfd, asd, kzt, kd, ráfaga
from: 676fcbf3
---

Tres bloques de la pestaña {{ui:Análisis}} preparan las entradas de viento y sísmicas de un pórtico y las combinan: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Emplazamiento y sistema sísmico (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Son ayudas: **no son una comprobación según norma; su ingeniero revisa los resultados.**

## Qué va a hacer

Crear casos de carga de viento para un edificio cerrado y rígido, tomar los valores sísmicos de un emplazamiento y crear las combinaciones que los usan. El modelo necesita plantas, así que ejecute antes el análisis (consulte [Fuerzas, reacciones y flechas](topic:frame-analysis)).

## Pasos

1. Abra la pestaña {{ui:Análisis}} y pulse {{ui:Ejecutar}}, para que se conozcan las plantas y el tamaño del edificio. Si un bloque indica que no hay plantas, pulse {{ui:Buscar plantas}} en él.
2. En {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, elija la {{ui:Edición}}, escriba la {{ui:Velocidad básica del viento V}} de su mapa de viento y elija su {{ui:Unidad de velocidad}}; después, la {{ui:Exposición}} y el {{ui:Cerramiento}}. Kzt, Kd, G, la elevación del terreno, el Cp de sotavento, la excentricidad y la dirección también están ahí.
3. Lea la presión en cada planta y la fuerza sobre cada planta en la tabla, y después elija {{ui:Crear casos de viento}}. Los casos son +X, -X, +Y y -Y.
4. En {{ui:Emplazamiento y sistema sísmico (ASCE 7)}}, elija la edición y escriba Ss y S1 (SMS, SM1 y S1 para ASCE 7-22), la clase de emplazamiento de la A a la D, la categoría de riesgo y el sistema resistente a fuerzas sísmicas. O escriba la latitud y la longitud y elija {{ui:Consultar en USGS (en línea)}}; consulta el servicio en línea solo cuando lo pulsa.
5. Lea Fa, Fv, SDS y SD1, R, Cd y Omega0 y el espectro de diseño, y después elija {{ui:Usar en el bloque sísmico}}. Pulse {{ui:Generar casos sísmicos}} en el bloque sísmico (consulte [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic)).
6. En {{ui:Combinaciones de carga ASCE 7}}, elija el {{ui:Método}} (LRFD o ASD) y pulse {{ui:Crear combinaciones ASCE 7}}. Vuelva a ejecutar el análisis.

## Lo que conviene saber

- Viento: solo edificio cerrado y rígido, con el procedimiento direccional. Un edificio flexible necesita un factor de ráfaga de la norma, que DetailCraft no genera.
- Las clases de emplazamiento E y F necesitan un estudio del emplazamiento y no están incluidas.
- Una lista de fuentes al pie de los bloques indica de dónde sale cada valor y qué se ha dejado fuera.
- La consulta a USGS se probó con un sustituto, no con el servicio en vivo.
