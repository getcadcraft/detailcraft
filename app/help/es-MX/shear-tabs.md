---
title: Placas de cortante
summary: Atornille el alma de una viga a una placa soldada en taller a un patín o alma de columna, también donde la viga llega a la columna en ángulo en planta o con pendiente.
keywords: placa de cortante, placa simple, placa de aleta, conexión simple, conexión de alma, esviaje, oblicua, con pendiente, inclinada, viga en ángulo, atornillada, conectar
from: 18afc8ab
---

Una placa de cortante (placa simple, placa de aleta) es una placa soldada a la columna en taller; en obra, el alma de la viga se atornilla a ella con una hilera vertical de pernos. DetailCraft coloca la placa, recorta la viga para que quede libre de la columna, perfora los agujeros en la placa y en el alma de la viga, agrega los pernos y la soldadura, y advierte sobre las distancias a los bordes y el ajuste.

## Dónde funciona

- Una viga (perfil I o canal) cuyo extremo queda sobre la línea de una columna de perfil I **vertical**, uniéndose a su **patín** o a su **alma**.
- **A escuadra, oblicua en planta o con pendiente**: la placa sigue el alma de la viga y la viga se recorta para que su esquina más cercana conserve la separación con la columna. Una viga que sube o baja más de 60° se rechaza.

## Agregar placas de cortante

1. Seleccione la viga.
2. En el grupo {{ui:Conectar}}, abra {{ui:Más}} y elija {{ui:Placas de cortante}} (o elija {{ui:Agregar placas de cortante}} en el panel {{ui:Propiedades}}).
3. Cada extremo libre de la viga que llegue a una columna recibe una placa. Cada extremo de viga admite una sola conexión: una placa de cortante o una placa de extremo.

Seleccione una placa (haga clic en ella o en un perno) para ver y cambiar su configuración. {{ui:Aplicar a similares}} la copia, como placa de cortante, a cada unión parecida que aún no tenga conexión.

## Configuración (mm)

| Opción | Inicia en | Significado |
|---|---|---|
| Espesor de placa | 10 | El espesor de la placa |
| Ancho de placa | 115 | Qué tanto sobresale la placa desde la cara de la columna, a lo largo de la viga |
| Diámetro de perno, diámetro de agujero, grado del perno | 20, 22, A325 | Igual que en las placas de extremo |
| Hileras de pernos, paso entre hileras | 3, 75 | Los pernos de la hilera vertical |
| Distancia al borde (pernos superior e inferior) | 38 | Desde los pernos superior e inferior hasta los extremos de la placa; la placa tiene un peralte de hileras × paso + 2 × este valor |
| Elevación del grupo de pernos | 0 | 0 centra los pernos en el peralte de la viga |
| Separación a la columna | 13 | Separación libre entre la columna y la esquina más cercana de la viga |
| Línea de pernos desde la cara de la columna | 65 | A lo largo de la viga, desde la cara de la columna hasta los pernos |
| Holgura de longitud del perno | 30 | Se suma al agarre (placa + alma de la viga), redondeada hacia arriba a 5 mm |
| Tamaño de la soldadura de filete | 6 | De ambos lados de la placa a la columna |

## Conviene saber

- La placa forma parte del ensamble de la columna (soldada en taller); el ensamble de la viga solo tiene sus agujeros.
- Una viga oblicua o con pendiente se recorta más que una a escuadra para que su esquina más cercana conserve la separación. DetailCraft corta las vigas a escuadra: el fabricante corta el extremo según convenga. El borde de la placa en la columna también se dibuja a escuadra.
- DetailCraft no verifica la resistencia. Las advertencias usan los mínimos de la Tabla 3.3 de EN 1993-1-8 para distancias al borde y paso, e indican cuándo la placa es más profunda que el alma de la viga entre sus filetes, o cuándo los pernos quedan demasiado cerca del extremo cortado de la viga.
- La [verificación de interferencias](topic:clash-check) excluye una placa y los miembros que une: deben encontrarse.
