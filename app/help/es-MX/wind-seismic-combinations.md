---
title: Viento, sitio sísmico y combinaciones ASCE 7
summary: Cree casos de carga de viento para un edificio rígido cerrado, obtenga los valores de diseño sísmico de un sitio y genere las combinaciones ASCE 7, en la pestaña Análisis.
keywords: viento, carga de viento, asce 7, procedimiento direccional, exposición, cerramiento, sísmico, clase de sitio, ss, s1, sds, sd1, usgs, espectro de diseño, combinaciones de carga, lrfd, asd, kzt, kd, ráfaga
from: 676fcbf3
---

Tres bloques de la pestaña {{ui:Análisis}} preparan las entradas de viento y sísmicas de un marco y las combinan: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Sitio sísmico y sistema (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Son ayudas: **no son una revisión de código; su ingeniero revisa los resultados.**

## Lo que hará

Cree casos de carga de viento para un edificio cerrado y rígido, tome los valores sísmicos de un sitio y genere las combinaciones que los usan. El modelo necesita pisos, así que ejecute primero el análisis (vea [Fuerzas, reacciones y deflexiones](topic:frame-analysis)).

## Pasos

1. Abra la pestaña {{ui:Análisis}} y elija {{ui:Ejecutar}}, para que se conozcan los pisos y el tamaño del edificio. Si un bloque indica que no hay pisos, elija {{ui:Buscar pisos}} en él.
2. En {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, seleccione la {{ui:Edición}}, escriba la {{ui:Velocidad básica del viento V}} de su mapa de viento y elija su {{ui:Unidad de velocidad}}, luego la {{ui:Exposición}} y el {{ui:Cerramiento}}. También están Kzt, Kd, G, la elevación del terreno, el Cp de sotavento, la excentricidad y la dirección.
3. Lea la presión en cada piso y la fuerza sobre cada piso en la tabla, luego elija {{ui:Hacer casos de viento}}. Los casos son +X, -X, +Y y -Y.
4. En {{ui:Sitio sísmico y sistema (ASCE 7)}}, seleccione la edición y escriba Ss y S1 (SMS, SM1 y S1 para ASCE 7-22), la clase de sitio de A a D, la categoría de riesgo y el sistema sísmico resistente a fuerzas. O escriba la latitud y la longitud y elija {{ui:Consultar al USGS (en línea)}}; el servicio en línea solo se consulta cuando lo pulsa.
5. Lea Fa, Fv, SDS y SD1, R, Cd y Omega0 y el espectro de diseño, luego elija {{ui:Usar en el bloque sísmico}}. Pulse {{ui:Hacer casos sísmicos}} en el bloque sísmico (vea [Revisar elementos de concreto y generar cargas sísmicas](topic:concrete-and-seismic)).
6. En {{ui:Combinaciones de carga ASCE 7}}, seleccione el {{ui:Método}} (LRFD o ASD) y elija {{ui:Hacer combinaciones ASCE 7}}. Ejecute el análisis de nuevo.

## Cosas que debe saber

- Viento: solo para un edificio cerrado y rígido, con el procedimiento direccional. Un edificio flexible necesita un factor de ráfaga de la norma, que DetailCraft no genera.
- Las clases de sitio E y F requieren un estudio del sitio y no están construidas.
- Una lista de fuentes al final de los bloques indica de dónde viene cada número y qué se dejó fuera.
- La búsqueda en USGS se probó con un sustituto, no con el servicio en vivo.
