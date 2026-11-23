---
title: Revisar las soldaduras donde se unen los miembros
summary: Después de la revisión de diseño, pruebe las soldaduras de filete y a tope en todo el perímetro de cada miembro donde se une con otro miembro o con un apoyo, según AISC 360-16 Capítulo J o EN 1993-1-8, y vea qué grupo de soldadura está más utilizado y bajo qué combinación. Es una ayuda hasta que un ingeniero lo haya revisado.
keywords: soldadura, soldaduras, revisión de soldaduras, soldadura de filete, soldadura a tope, penetración completa, AISC 360, EN 1993-1-8, grupo de soldadura, utilización, capacidad, unión, conexión, estructural, ingeniero
from: e8eebbe6
---

El bloque {{ui:Revisión de soldaduras}} de la pestaña {{ui:Análisis}}, bajo {{ui:Revisiones de diseño}}, toma las fuerzas del último marco resuelto y las combinaciones de resistencia que generó, y prueba la soldadura en todo el perímetro de cada miembro en cada unión: donde un miembro se encuentra con otro miembro o se apoya sobre un soporte.

:::warning
Es una **ayuda hasta que un ingeniero lo haya revisado**. Revisa una soldadura trazada en todo el perímetro de la sección, como un solo grupo, a partir de las fuerzas de extremo propias del marco. No lee el tamaño ni la longitud de las soldaduras que dibujó en los planos de taller, y no revisa tornillos, placas, aplastamiento, cortante en bloque ni efecto palanca. Sus resultados no son un sello.
:::

## Ejecutarla

1. Resuelva el marco en la pestaña {{ui:Análisis}} y elija un {{ui:Código de diseño}} en {{ui:Revisiones de diseño}}; luego pulse {{ui:Generar combinaciones}} (la revisión de soldaduras necesita las mismas combinaciones de resistencia).
2. En {{ui:Revisión de soldaduras}}, defina el {{ui:Cateto del filete (mm, 0 = la pared, máximo 8)}}. 0 significa que el cateto sigue el espesor menor de la pared de la sección, hasta 8 mm. Con el código AISC, {{ui:Resistencia del metal de aporte F_EXX (MPa)}} es la resistencia del metal de soldadura (482.6 MPa corresponde a un electrodo E70). Con EN 1993, el grado del acero da la resistencia del metal de soldadura y el factor de correlación.
3. Pulse {{ui:Revisar soldaduras}}.

Cada renglón de la tabla es un grupo de soldadura (un extremo de unión de un miembro). Las columnas muestran: la **utilización** de su revisión que rige, el estado (cumple o no cumple), y qué revisión y qué cláusula rigieron bajo qué combinación. Un grupo que la revisión no puede juzgar indica la razón (sin grado de acero, sin factor de correlación para ese grado en la Tabla 4.1 de EN 1993-1-8, sin soldadura en esa sección) en lugar de mostrar un número.

Cambiar el cateto o el metal de soldadura, o editar el modelo, borra la tabla: era para los valores anteriores. Pulse {{ui:Revisar soldaduras}} otra vez.

## Lo que se revisa

- **ASCE 7 + AISC 360:** metal de soldadura de filete (cuenta el ángulo de la carga respecto a la soldadura, J2.4), ruptura por cortante del metal base (J4.2) y soldaduras a tope de penetración completa (Tabla J2.5).
- **EN 1990 + EN 1993:** soldaduras de filete por el método simplificado de EN 1993-1-8 4.5.3.3 y soldaduras a tope de 4.7.1.
- Advertencias de detallado contra el cateto mínimo y máximo y la longitud mínima, con el valor con el que se compararon.

El grupo de soldadura se trata como una sección lineal y se carga por el método vectorial elástico: cada parte de la soldadura toma la fuerza axial del miembro, ambos cortantes, la torsión y ambos momentos flectores, sumados como vectores.

## Lo que no se revisa

No están incluidas las soldaduras de penetración parcial, los filetes oblicuos, las soldaduras de tapón y de ranura, las soldaduras intermitentes, el método del centro instantáneo, el método direccional de EN, la fatiga ni el cortante en bloque del metal base. Algunas constantes de las normas se escribieron a partir de ellas y todavía no se han comparado con una copia impresa; el informe indica de dónde sale cada número ({{ui:Informe (PDF)}} incorpora las tablas de soldadura una vez que haya revisado). Vea [Revisar miembros de acero](topic:design-checks) y [Aún no disponible](topic:not-built-yet).
