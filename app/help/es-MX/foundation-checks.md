---
title: Revisiones de cimentación
summary: Revise zapatas, zapatas combinadas y losas de cimentación sobre el suelo que describa, asentamiento, una losa flexible sobre resortes, grupos de pilotes y muros de contención. Una ayuda para que un ingeniero la revise.
keywords: cimentación, zapata, zapata combinada, losa de cimentación, asentamiento, módulo de balasto, resortes, columna de borde, columna de esquina, capacidad de carga, deslizamiento, volcamiento, punzonado, cortante en una dirección, flexión, desarrollo, acero mínimo, grupo de pilotes, muro de contención, ACI 318-19
from: 6961ad52
---

:::warning
Son verificaciones de primer orden para que un ingeniero las revise, no una aprobación de diseño. La {{ui:Presión admisible de apoyo}} y el coeficiente de fricción son datos suyos: DetailCraft no conoce su suelo.
:::

La pestaña {{ui:Cimentación}} revisa las zapatas del modelo contra las cargas de columna que les asigne.

## Describir el suelo

Escriba la {{ui:Presión admisible de apoyo}} y el {{ui:Coeficiente de fricción en la base}}. Ambos empiezan en 0, que significa "no capturado": la revisión entonces muestra la presión como nota y no indica que cumpla. Para el asentamiento, escriba el módulo del suelo {{ui:Es}} (MPa), su relación de Poisson y el asentamiento que admite (25 mm para empezar). Para una losa flexible, escriba un módulo de balasto {{ui:ks}}. También están el relleno sobre la zapata, el peso unitario del suelo, los factores de seguridad para deslizamiento y volcamiento (1.5 para empezar) y la resistencia a la fluencia del acero de refuerzo.

## Dar las cargas

Cada zapata tiene una lista de cargas de columna. Use {{ui:Agregar una carga de columna}} y llene la fila de servicio (para capacidad de carga, deslizamiento y volcamiento) y la fila factorizada (para las revisiones de resistencia): la carga vertical P hacia abajo, las fuerzas horizontales Vx y Vy en el borde superior de la zapata, los momentos Mx y My, la posición de la columna sobre la zapata y su tamaño.

O bien, ejecute la pestaña {{ui:Análisis}} y pulse {{ui:Tomar las cargas de las columnas del análisis}}: cada apoyo que está sobre una zapata se convierte en una carga de columna, a partir de los conjuntos de servicio y factorizados que elija. Un My positivo carga más el lado +x de la zapata; un Mx positivo carga más el lado −y.

## Qué se revisa

Con las cargas de servicio, y con el peso propio de la zapata y el relleno sumados:

- **Capacidad de carga:** la presión bajo una zapata rígida. Dentro del tercio medio, toda la base está en contacto; fuera de él, parte de la base se levanta y el pico es mayor. Una resultante fuera de la base falla.
- **Deslizamiento:** la fricción por la carga vertical contra la fuerza horizontal.
- **Volcamiento:** la distancia de la resultante al borde.
- **Asentamiento:** el asentamiento elástico de la presión media sobre un semiespacio con el módulo que dio, en el centro y en una esquina (solución de Timoshenko y Goodier para un rectángulo flexible), contra el límite. Es una cota superior para una zapata rígida y omite una capa de suelo de profundidad limitada, el alivio por el suelo excavado y la consolidación. Sin módulo, muestra la presión como nota.

Solo a partir de las cargas de columna factorizadas (ACI 318-19):

- **Flexión** en la cara de la columna, con el acero mínimo (0.0018 para varillas de 420 MPa) y las varillas que dibujó.
- **Cortante en una dirección** a d de la cara.
- **Punzonado** a d/2 alrededor de cada columna, con el momento de la columna. Para una columna cerca de un borde, la sección crítica se corta por el borde de la zapata (tres lados en un borde, dos en una esquina; ACI 318-19 22.6.4.1 y el αs menor de la Tabla 22.6.5.2), y el momento respecto al centro de la propia sección incluye el desplazamiento de la carga.
- **Desarrollo** de las varillas más allá de la cara de la columna, rectas o con sus ganchos.
- **Profundidad** sobre las varillas inferiores (150 mm).

Una zapata combinada o una losa se toma como rígida, y el cortante y el momento provienen de la estática en cortes a todo lo ancho.

## Una losa flexible sobre resortes

Marque {{ui:Analizar esta zapata como losa flexible sobre resortes}} cuando la zapata lleve muchas columnas y la zapata rígida sea demasiado burda. La zapata se convierte en una placa de elementos de cuatro nodos sobre un lecho de resortes (el {{ui:ks}} que escribió, concentrado en los nodos), y la carga de cada columna se reparte entre los nodos de su propia huella. Una segunda tabla da la mayor presión del suelo y el asentamiento (y la diferencia entre el mayor y el menor), el momento flector en cada dirección con el acero que necesita, la tensión en la parte superior frente a la resistencia del concreto simple (una zapata no tiene varillas superiores), el cortante en una dirección a d de las columnas y el punzonado con la presión de los propios resortes. La malla se refina hasta que una columna tenga tres elementos de ancho; una losa grande tarda unos segundos. El peso propio de la losa y el suelo sobre ella se cancelan y se omiten.

Cada revisión no aprobada aparece en el panel {{ui:Problemas}} con su cláusula.

## Grupos de pilotes y muros de contención

{{ui:Añadir un grupo de pilotes}} coloca una malla de pilotes bajo un cabezal rígido: escriba la carga y los momentos, y lo que un pilote puede resistir a compresión y a tensión (los números del diseño de pilotes, no de esta pestaña). La reacción de cada pilote es P/n más su parte de los momentos (método elástico), y se revisan la compresión mayor y cualquier tensión.

{{ui:Añadir un muro de contención}} revisa un muro en voladizo sobre relleno nivelado, por metro: presión activa de Rankine, volcamiento alrededor de la punta, deslizamiento y presión en la base. Se omite la presión pasiva frente a la punta. Su asistente puede ejecutar las mismas revisiones con `pile_group_check` y `retaining_wall_check`.

Los grupos de pilotes, los muros y la opción de losa flexible se guardan en el archivo del modelo, y una revisión no aprobada aparece en {{ui:Problemas}}.
