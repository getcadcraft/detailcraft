---
title: Cartelas de cortante
summary: Atornille el alma de una viga a una placa soldada en taller a un ala o alma de pilar, también donde la viga llega al pilar con un ángulo en planta o con pendiente.
keywords: cartela de cortante, placa simple, placa de aleta, conexión simple, conexión de alma, esviada, oblicua, inclinada, con pendiente, viga con ángulo, atornillada, conectar
from: 18afc8ab
---

Una cartela de cortante (placa simple, placa de aleta) es una placa soldada al pilar en taller; en obra, el alma de la viga se atornilla a ella con una fila vertical de tornillos. DetailCraft coloca la cartela, recorta la viga para dejarla libre del pilar, taladra los agujeros en la cartela y en el alma de la viga, añade los tornillos y la soldadura, y avisa de las distancias al borde y del ajuste.

## Dónde funciona

- Una viga (perfil en I o en U) cuyo extremo queda sobre la línea de un pilar de perfil en I **vertical**, uniéndose a su **ala** o a su **alma**.
- **Cuadrada, oblicua en planta o con pendiente**: la cartela sigue el alma de la viga y la viga se recorta de modo que su esquina más cercana conserve la separación al pilar. Una viga que sube o baja más de 60° se rechaza.

## Añadir cartelas de cortante

1. Seleccione la viga.
2. En el grupo {{ui:Conectar}}, abra {{ui:Más}} y elija {{ui:Cartelas de cortante}} (o elija {{ui:Añadir cartelas de cortante}} en el panel {{ui:Propiedades}}).
3. Cada extremo libre de la viga que llega a un pilar recibe una cartela. Cada extremo de viga admite una sola conexión: una cartela de cortante o una placa de testa.

Seleccione una cartela (púlsela, o un tornillo) para ver y cambiar sus ajustes. {{ui:Aplicar a similares}} la copia, como cartela de cortante, en cada unión parecida que aún no tenga conexión.

## Ajustes (mm)

| Ajuste | Valor inicial | Significado |
|---|---|---|
| Espesor de la placa | 10 | El espesor de la cartela |
| Ancho de la placa | 115 | Cuánto sobresale la cartela desde la cara del pilar, a lo largo de la viga |
| Diámetro del tornillo, Diámetro del agujero, Calidad del tornillo | 20, 22, A325 | Igual que en las placas de testa |
| Filas de tornillos, Paso entre filas | 3, 75 | Los tornillos de la fila vertical |
| Distancia al borde (tornillos superior e inferior) | 38 | Desde los tornillos superior e inferior hasta los extremos de la cartela; la cartela tiene de canto filas × paso + 2 × esta distancia |
| Grupo de tornillos elevado en | 0 | 0 centra los tornillos en el canto de la viga |
| Separación al pilar | 13 | Separación libre entre el pilar y la esquina más cercana de la viga |
| Línea de tornillos desde la cara del pilar | 65 | A lo largo de la viga, desde la cara del pilar hasta los tornillos |
| Holgura de longitud del tornillo | 30 | Se añade al agarre (cartela + alma de la viga), redondeado hacia arriba a 5 mm |
| Tamaño del cordón de soldadura en ángulo | 6 | En ambos lados de la cartela hasta el pilar |

## Conviene saber

- La cartela forma parte del conjunto del pilar (soldada en taller); el conjunto de la viga solo tiene los agujeros.
- Una viga oblicua o con pendiente se recorta más hacia atrás que una cuadrada, para que su esquina más cercana conserve la separación. DetailCraft corta las vigas a escuadra: el fabricante corta el extremo según convenga. El borde de la cartela junto al pilar también se dibuja a escuadra.
- DetailCraft no comprueba la resistencia. Las advertencias usan los mínimos de EN 1993-1-8 Tabla 3.3 para distancias al borde y paso, y avisan cuando la cartela es más profunda que el alma de la viga entre sus acuerdos, o cuando los tornillos quedan demasiado cerca del extremo cortado de la viga.
- La [comprobación de interferencias](topic:clash-check) deja fuera una cartela y las piezas que une: se supone que deben encontrarse.
