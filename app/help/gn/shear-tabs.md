---
title: Placas de corte
summary: Atornillá el alma de una viga a una placa soldada en taller a un ala o alma de columna, también donde la viga llega a la columna en ángulo en planta o con pendiente.
keywords: placa de corte, placa simple, placa de aleta, conexión simple, conexión de alma, oblicua, sesgo, inclinada, con pendiente, viga en ángulo, atornillada, conectar
from: 18afc8ab
---

Una placa de corte (placa simple, placa de aleta) es una placa soldada a la columna en taller; en obra, el alma de la viga se atornilla a ella con una fila vertical de pernos. DetailCraft ubica la placa, recorta la viga para que quede libre de la columna, hace los agujeros en la placa y en el alma de la viga, agrega los pernos y la soldadura, y avisa sobre distancias al borde y encaje.

## Dónde funciona

- Una viga (perfil I o U) cuyo extremo queda sobre la línea de un perfil I de columna **vertical**, llegando a su **ala** o a su **alma**.
- **Cuadrada, oblicua en planta o con pendiente**: la placa sigue el alma de la viga y la viga se recorta de modo que su esquina más cercana mantenga la separación con la columna. Una viga que sube o baja más de 60° se rechaza.

## Agregar placas de corte

1. Seleccioná la viga.
2. En el grupo {{ui:Conectar}}, abrí {{ui:Más}} y elegí {{ui:Placas de corte}} (o elegí {{ui:Agregar placas de corte}} en el panel {{ui:Propiedades}}).
3. Cada extremo libre de la viga que llega a una columna recibe una placa. Cada extremo de viga toma una sola conexión: una placa de corte o una placa de extremo.

Seleccioná una placa (haciendo clic en ella, o en un perno) para ver y cambiar sus configuraciones. {{ui:Aplicar a similares}} copia la placa, como placa de corte, a cada unión parecida que todavía no tenga conexión.

## Configuración (mm)

| Configuración | Inicia en | Significado |
|---|---|---|
| Espesor de placa | 10 | El espesor de la placa |
| Ancho de placa | 115 | Cuánto sale la placa de la cara de la columna, a lo largo de la viga |
| Diámetro de perno, Diámetro de agujero, Grado de perno | 20, 22, A325 | Como en las placas de extremo |
| Filas de pernos, Paso entre filas | 3, 75 | Los pernos de la fila vertical |
| Distancia al borde (pernos superior e inferior) | 38 | Desde los pernos superior e inferior hasta los extremos de la placa; la placa tiene una profundidad de filas × paso + 2 × este valor |
| Grupo de pernos elevado en | 0 | 0 centra los pernos en la profundidad de la viga |
| Separación a la columna | 13 | Separación libre entre la columna y la esquina más cercana de la viga |
| Línea de pernos desde la cara de la columna | 65 | A lo largo de la viga, desde la cara de la columna hasta los pernos |
| Margen de largo de perno | 30 | Se suma al agarre (placa + alma de viga), redondeado hacia arriba a 5 mm |
| Tamaño de soldadura de filete | 6 | A ambos lados de la placa hacia la columna |

## Para saber

- La placa forma parte del conjunto de la columna (soldada en taller); el conjunto de la viga tiene solo sus agujeros.
- Una viga oblicua o con pendiente se recorta más hacia atrás que una cuadrada para que su esquina más cercana mantenga la separación. DetailCraft corta las vigas a escuadra: el fabricante corta el extremo según convenga. El borde de la placa en la columna también se dibuja a escuadra.
- DetailCraft no verifica resistencia. Los avisos usan los mínimos de EN 1993-1-8 Tabla 3.3 para distancias al borde y paso, y dicen cuándo la placa es más profunda que el alma de la viga entre sus filetes, o cuando los pernos quedan demasiado cerca del extremo cortado de la viga.
- La [verificación de choques](topic:clash-check) deja fuera la placa y los miembros que une: se supone que deben encontrarse.
