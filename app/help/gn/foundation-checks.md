---
title: Verificaciones de cimentación
summary: Verificá zapatas, zapatas combinadas y losas de fundación sobre el suelo que describís, asentamiento, losa flexible sobre resortes, grupos de pilotes y muros de contención. Una ayuda para que un ingeniero revise.
keywords: cimentación, zapata, zapata combinada, losa de fundación, asentamiento, módulo de balasto, resortes, columna de borde, columna de esquina, capacidad portante, deslizamiento, vuelco, punzonado, corte en una dirección, flexión, anclaje, armadura mínima, grupo de pilotes, muro de contención, ACI 318-19
from: 6961ad52
---

:::warning
Estas son verificaciones de primer orden para que las revise un ingeniero, no una aprobación de diseño. La presión admisible del suelo y el coeficiente de fricción son tuyos: DetailCraft no conoce tu suelo.
:::

La pestaña {{ui:Cimentación}} verifica las zapatas del modelo contra las cargas de columna que les das.

## Describir el suelo

Escribí la {{ui:Presión admisible del suelo}} y el {{ui:Coeficiente de fricción de base}}. Ambos empiezan en 0, lo que significa "no cargado": la verificación muestra entonces la presión como nota y no dice que pasa. Para el asentamiento, escribí el módulo del suelo {{ui:Es}} (MPa), su coeficiente de Poisson y el asentamiento admitido (25 mm para empezar). Para una losa flexible, escribí un módulo de balasto {{ui:ks}}. También están el relleno sobre la zapata, el peso unitario del suelo, los factores de seguridad para deslizamiento y vuelco (1.5 para empezar) y la tensión de fluencia de las barras.

## Cargar las cargas

Cada zapata tiene una lista de cargas de columna. Usá {{ui:Agregar una carga de columna}} y completá la fila de servicio (para capacidad portante, deslizamiento y vuelco) y la fila mayorada (para las verificaciones de resistencia): la carga vertical P hacia abajo, las fuerzas horizontales Vx y Vy sobre el tope de la zapata, los momentos Mx y My, la posición de la columna sobre la zapata y su tamaño.

O bien abrí la pestaña {{ui:Análisis}} y presioná {{ui:Tomar cargas de columna del Análisis}}: cada apoyo que está sobre una zapata se convierte en una carga de columna, a partir de los conjuntos de servicio y mayorados que elijas. Un My positivo carga más el lado +x de la zapata; un Mx positivo carga más el lado −y.

## Qué se verifica

Con las cargas de servicio, más el peso propio de la zapata y el relleno:

- **Capacidad portante:** la presión bajo una zapata rígida. Dentro del tercio medio toda la base está en contacto; fuera de él, parte de la base se levanta y el pico es mayor. Una resultante fuera de la base falla.
- **Deslizamiento:** fricción por la carga vertical contra la fuerza horizontal.
- **Vuelco:** distancia de la resultante al borde.
- **Asentamiento:** el asentamiento elástico de la presión media sobre un semiespacio con el módulo que diste, en el centro y en una esquina (solución de Timoshenko y Goodier para un rectángulo flexible), contra el límite. Es una cota superior para una zapata rígida y no considera una capa de suelo de profundidad limitada, el alivio por el suelo excavado ni la consolidación. Sin módulo, muestra la presión como nota.

Solo con las cargas de columna mayoradas (ACI 318-19):

- **Flexión** en la cara de la columna, con la armadura mínima (0.0018 para barras de 420 MPa) y las barras que dibujaste.
- **Corte en una dirección** a d desde la cara.
- **Punzonado** a d/2 alrededor de cada columna, con el momento de la columna. Para una columna cerca de un borde, la sección crítica se corta por el borde de la zapata (tres lados en un borde, dos en una esquina; ACI 318-19 22.6.4.1 y el αs menor de la Tabla 22.6.5.2), y el momento respecto del centro de la sección incluye el desplazamiento de la carga.
- **Anclaje** de las barras más allá de la cara de la columna, rectas o con sus ganchos.
- **Altura** por encima de las barras inferiores (150 mm).

Una zapata combinada o una losa se toma como rígida, y el corte y el momento salen de la estática en cortes a lo ancho total.

## Una losa flexible sobre resortes

Marcá {{ui:Analizar esta zapata como losa flexible sobre resortes}} cuando la zapata carga muchas columnas y la zapata rígida es demasiado tosca. La zapata pasa a ser una placa de elementos de cuatro nodos sobre un lecho de resortes (el {{ui:ks}} que escribiste, concentrado en los nodos), y la carga de cada columna se reparte entre los nodos de su propia huella. Una segunda tabla da la mayor presión del suelo y el asentamiento (y la diferencia entre el mayor y el menor), el momento flector en cada dirección con el acero que necesita, la tracción arriba frente a la resistencia del hormigón simple (una zapata no tiene barras superiores), el corte en una dirección a d desde las columnas y el punzonado con la presión propia de los resortes. La malla se refina hasta que una columna tenga tres elementos de ancho; una losa grande tarda unos segundos. El peso propio de la losa y el suelo encima se cancelan y no se incluyen.

Cada verificación fallida aparece en el panel {{ui:Problemas}} con su cláusula.

## Grupos de pilotes y muros de contención

{{ui:Agregar un grupo de pilotes}} pone una grilla de pilotes bajo un cabezal rígido: escribí la carga y los momentos, y lo que un pilote puede tomar a compresión y a tracción (los números del diseño de pilotes, no de esta pestaña). La reacción de cada pilote es P/n más su parte de los momentos (método elástico), y se verifican la compresión mayor y cualquier tracción.

{{ui:Agregar un muro de contención}} verifica un muro en voladizo sobre relleno nivelado, por metro: presión activa de Rankine, vuelco alrededor de la punta, deslizamiento y presión de base. La presión pasiva delante de la punta no se incluye. Tu asistente puede correr las mismas verificaciones con `pile_group_check` y `retaining_wall_check`.

Los grupos de pilotes, los muros y el interruptor de losa se guardan en el archivo del modelo, y una verificación fallida aparece en {{ui:Problemas}}.
