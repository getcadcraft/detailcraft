---
title: Comprobaciones de cimentación
summary: Comprobar zapatas, zapatas combinadas y losas sobre el terreno que describa, asientos, una losa flexible sobre muelles, grupos de pilotes y muros de contención. Una ayuda para que un ingeniero la revise.
keywords: cimentación, zapata, zapata combinada, losa, asiento, coeficiente de balasto, muelles, pilar de borde, pilar de esquina, presión admisible, deslizamiento, vuelco, punzonamiento, cortante en una dirección, flexión, anclaje, armadura mínima, grupo de pilotes, muro de contención, ACI 318-19
from: 6961ad52
---

:::warning
Son comprobaciones de primer orden para que las revise un ingeniero, no una aprobación de diseño. La presión admisible sobre el terreno y el coeficiente de rozamiento son suyos: DetailCraft no conoce su terreno.
:::

La pestaña {{ui:Cimentación}} comprueba las zapatas del modelo frente a las cargas de pilar que les asigne.

## Describir el terreno

Escriba la {{ui:Presión admisible sobre el terreno}} y el {{ui:Coeficiente de rozamiento de la base}}. Ambos empiezan en 0, lo que significa "no introducido": la comprobación muestra entonces la presión como nota y no indica que cumpla. Para el asiento, escriba el módulo de deformación del terreno {{ui:Es}} (MPa), su coeficiente de Poisson y el asiento admisible (25 mm para empezar). Para una losa flexible, escriba un coeficiente de balasto {{ui:ks}}. También están el relleno sobre la zapata, el peso específico del terreno, los coeficientes de seguridad para deslizamiento y vuelco (1.5 para empezar) y el límite elástico de las barras.

## Introducir las cargas

Cada zapata tiene una lista de cargas de pilar. Utilice {{ui:Añadir una carga de pilar}} y rellene la fila de servicio (para presión, deslizamiento y vuelco) y la fila mayorada (para las comprobaciones de resistencia): la carga vertical P hacia abajo, los esfuerzos horizontales Vx y Vy en la cara superior de la zapata, los momentos Mx y My, la posición del pilar sobre la zapata y su tamaño.

O ejecute la pestaña {{ui:Análisis}} y pulse {{ui:Tomar las cargas de los pilares del Análisis}}: cada apoyo que se apoya en una zapata se convierte en una carga de pilar, a partir de los juegos de servicio y mayorados que elija. Un My positivo carga más el lado +x de la zapata; un Mx positivo carga más el lado −y.

## Qué se comprueba

A partir de las cargas de servicio, con el peso propio de la zapata y el relleno añadidos:

- **Presión sobre el terreno:** la presión bajo una zapata rígida. Dentro del tercio central, toda la base está en contacto; fuera de él, parte de la base se levanta y el pico es mayor. Una resultante fuera de la base no cumple.
- **Deslizamiento:** coeficiente de rozamiento por la carga vertical frente a la fuerza horizontal.
- **Vuelco:** distancia de la resultante al borde.
- **Asiento:** el asiento elástico de la presión media en un semiespacio con el módulo que introdujo, en el centro y en una esquina (solución de Timoshenko y Goodier para un rectángulo flexible), frente al límite. Es una cota superior para una zapata rígida y no tiene en cuenta una capa de suelo de profundidad limitada, el alivio por la excavación ni la consolidación. Sin módulo, muestra la presión como nota.

A partir únicamente de las cargas mayoradas de pilar (ACI 318-19):

- **Flexión** en la cara del pilar, con la armadura mínima (0.0018 para barras de 420 MPa) y las barras que dibujó.
- **Cortante en una dirección** a d de la cara.
- **Punzonamiento** a d/2 alrededor de cada pilar, con el momento del pilar. Para un pilar cerca de un borde, la sección crítica se corta por el borde de la zapata (tres lados en un borde, dos en una esquina; ACI 318-19 22.6.4.1 y el αs menor de la Tabla 22.6.5.2), y el momento respecto al centro de la propia sección incluye el desplazamiento de la carga.
- **Anclaje** de las barras más allá de la cara del pilar, rectas o con sus ganchos.
- **Canto** por encima de las barras inferiores (150 mm).

Una zapata combinada o una losa se toma como rígida, y el cortante y el momento salen de la estática en cortes a lo ancho completo.

## Una losa flexible sobre muelles

Marque {{ui:Analizar esta zapata como losa flexible sobre muelles}} cuando la zapata lleve muchos pilares y la zapata rígida sea demasiado tosca. La zapata se convierte en una placa de elementos de cuatro nudos sobre un lecho de muelles (el {{ui:ks}} que escribió, concentrado en los nudos), y la carga de cada pilar se reparte entre los nudos de su propia huella. Una segunda tabla da la mayor presión del terreno y el asiento (y la diferencia entre el mayor y el menor), el momento flector en cada dirección con la armadura que necesita, la tracción en la cara superior frente a la resistencia del hormigón sin armar (la zapata no tiene barras superiores), el cortante en una dirección a d de los pilares, y el punzonamiento con la presión propia de los muelles. La malla se afina hasta que un pilar tiene tres elementos de ancho; una losa grande tarda unos segundos. El peso propio de la losa y el terreno sobre ella se compensan y se omiten.

Todos los fallos figuran en el panel {{ui:Problemas}} con su cláusula.

## Grupos de pilotes y muros de contención

{{ui:Añadir un grupo de pilotes}} coloca una cuadrícula de pilotes bajo un encepado rígido: escriba la carga y los momentos, y lo que un pilote puede soportar a compresión y a tracción (los valores del diseño de pilotes, no los de esta pestaña). La reacción de cada pilote es P/n más su parte de los momentos (método elástico), y se comprueban la mayor compresión y cualquier tracción.

{{ui:Añadir un muro de contención}} comprueba un muro en voladizo sobre relleno horizontal, por metro: presión activa de Rankine, vuelco alrededor de la puntera, deslizamiento y presión en la base. No se tiene en cuenta la presión pasiva delante de la puntera. Su asistente puede ejecutar las mismas comprobaciones con `pile_group_check` y `retaining_wall_check`.

Los grupos de pilotes, los muros y la opción de losa flexible se guardan en el archivo del modelo, y un fallo aparece en {{ui:Problemas}}.
