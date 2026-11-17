---
title: Viento, sitio sísmico y combinaciones ASCE 7
summary: Crear casos de carga de viento para un edificio cerrado y rígido, calcular valores sísmicos de diseño para un sitio y hacer las combinaciones ASCE 7, en la pestaña Análisis.
keywords: viento, carga de viento, asce 7, procedimiento direccional, exposición, cerramiento, sísmico, clase de sitio, ss, s1, sds, sd1, usgs, espectro de diseño, combinaciones de carga, lrfd, asd, kzt, kd, ráfaga
from: 676fcbf3
---

Tres bloques de la pestaña {{ui:Análisis}} preparan las entradas de viento y sismo de un marco y las combinan: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Sitio y sistema sísmico (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Son ayudas: **no es una verificación de código; tu ingeniero revisa los resultados.**

## Lo que harás

Crear casos de carga de viento para un edificio cerrado y rígido, tomar los valores sísmicos para un sitio y hacer las combinaciones que los usan. El modelo necesita pisos, así que ejecuta primero el análisis (ver [Fuerzas, reacciones y deformaciones](topic:frame-analysis)).

## Pasos

1. Abre la pestaña {{ui:Análisis}} y elige {{ui:Ejecutar}}, para que se conozcan los pisos y el tamaño del edificio. Si un bloque dice que no hay pisos, elige {{ui:Buscar pisos}} en él.
2. En {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, elige la {{ui:Edición}}, escribe la {{ui:Velocidad básica del viento V}} de tu mapa de viento y elige su {{ui:Unidad de velocidad}}, luego la {{ui:Exposición}} y el {{ui:Cerramiento}}. También están Kzt, Kd, G, la elevación del terreno, el Cp de sotavento, la excentricidad y la dirección.
3. Lee la presión en cada piso y la fuerza en cada piso en la tabla, luego elige {{ui:Crear casos de viento}}. Los casos son +X, -X, +Y y -Y.
4. En {{ui:Sitio y sistema sísmico (ASCE 7)}}, elige la edición y escribe Ss y S1 (SMS, SM1 y S1 para ASCE 7-22), la clase de sitio A a D, la categoría de riesgo y el sistema sísmico resistente a fuerzas. O escribe la latitud y la longitud y elige {{ui:Consultar en USGS (en línea)}}; consulta al servicio en línea solo cuando lo pulsas.
5. Lee Fa, Fv, SDS y SD1, R, Cd y Omega0 y el espectro de diseño, luego elige {{ui:Usar en el bloque Sísmico}}. Pulsa {{ui:Generar casos sísmicos}} en el bloque sísmico (ver [Verificar piezas de hormigón y hacer cargas sísmicas](topic:concrete-and-seismic)).
6. En {{ui:Combinaciones de carga ASCE 7}}, elige el {{ui:Método}} (LRFD o ASD) y elige {{ui:Crear combinaciones ASCE 7}}. Ejecuta el análisis otra vez.

## Cosas que conviene saber

- Viento: solo edificio cerrado y rígido, con el procedimiento direccional. Un edificio flexible necesita un factor de ráfaga de la norma, que DetailCraft no calcula.
- Las clases de sitio E y F necesitan un estudio del sitio y no están hechas.
- Una lista de fuentes al final de los bloques indica de dónde viene cada número y qué se dejó afuera.
- La consulta a USGS se probó con un sustituto, no con el servicio en vivo.
