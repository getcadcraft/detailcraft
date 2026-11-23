---
title: Comprobar las soldaduras donde se unen los miembros
summary: Tras la comprobación de cálculo, compruebe las soldaduras en ángulo y a tope alrededor de cada miembro donde se une a otro miembro o a un apoyo, según AISC 360-16 capítulo J o EN 1993-1-8, y vea qué grupo de soldadura es el más utilizado y con qué combinación. Es una ayuda hasta que un ingeniero la haya revisado.
keywords: soldadura, soldaduras, comprobación de soldadura, soldadura en ángulo, soldadura a tope, penetración completa, AISC 360, EN 1993-1-8, grupo de soldadura, aprovechamiento, utilización, capacidad, unión, conexión, estructural, ingeniero
from: e8eebbe6
---

El bloque {{ui:Weld checks}} de la pestaña {{ui:Analysis}}, bajo {{ui:Design checks}}, toma los esfuerzos del último pórtico resuelto y las combinaciones de resistencia que haya generado, y comprueba la soldadura alrededor de cada miembro en cada nudo: donde un miembro se une a otro o descansa sobre un apoyo.

:::warning
Es una **ayuda hasta que un ingeniero la haya revisado**. Comprueba una soldadura que rodea la sección, como un único grupo, a partir de los esfuerzos de extremo del propio pórtico. No lee el tamaño ni la longitud de las soldaduras que dibujó en los planos de taller, y no comprueba tornillos, placas, aplastamiento, cortante de bloque ni palanqueo. Sus resultados no son un sello de conformidad.
:::

## Ejecútela

1. Resuelva el pórtico en la pestaña {{ui:Analysis}}, elija una {{ui:Design code}} en {{ui:Design checks}} y pulse {{ui:Make combinations}} (la comprobación de soldadura necesita las mismas combinaciones de resistencia).
2. En {{ui:Weld checks}}, fije el {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 significa que el cateto sigue a la pared más delgada de la sección, hasta 8 mm. Con la norma AISC, {{ui:Weld metal strength F_EXX (MPa)}} es la resistencia del metal de aportación (482.6 MPa corresponde a un electrodo E70). Con EN 1993, la calidad del acero da la resistencia del metal de aportación y el factor de correlación.
3. Pulse {{ui:Check welds}}.

Cada línea de la tabla es un grupo de soldadura (un extremo de unión de un miembro). Los datos: el **aprovechamiento** de su comprobación que gobierna, el estado (cumple o no cumple), y qué comprobación y cláusula gobernaron con qué combinación. Un grupo que la comprobación no puede juzgar indica el motivo (sin calidad de acero, sin factor de correlación para esa calidad en la tabla 4.1 de EN 1993-1-8, sin soldadura en esa sección) en lugar de mostrar un número.

Si cambia el cateto o el metal de aportación, o edita el modelo, la tabla se borra porque era para los valores anteriores. Vuelva a pulsar {{ui:Check welds}}.

## Qué se comprueba

- **ASCE 7 + AISC 360:** metal de aportación de soldaduras en ángulo (cuenta el ángulo de la carga con la soldadura, J2.4), rotura por cortante del metal base (J4.2) y soldaduras a tope de penetración completa (tabla J2.5).
- **EN 1990 + EN 1993:** soldaduras en ángulo por el método simplificado de EN 1993-1-8 4.5.3.3 y soldaduras a tope de 4.7.1.
- Avisos de detallado frente al cateto mínimo y máximo y la longitud mínima, con el valor con el que se compararon.

El grupo de soldadura se trata como una sección lineal y se carga por el método vectorial elástico: cada parte de la soldadura toma la fuerza del axil del miembro, ambos cortantes, la torsión y ambos momentos flectores, sumados como vectores.

## Qué no se comprueba

Las soldaduras de penetración parcial, las soldaduras oblicuas en ángulo, las soldaduras de tapón y de ranura, las soldaduras discontinuas, el método del centro instantáneo, el método direccional de EN, la fatiga y el cortante de bloque del metal base no están incluidos. Algunas constantes de las normas se escribieron a partir de las normas y todavía no se han comparado con un ejemplar impreso; el informe indica de dónde sale cada número ({{ui:Report (PDF)}} incorpora las tablas de soldadura una vez que haya hecho la comprobación). Véase [Comprobar miembros de acero](topic:design-checks) y [Aún no incluido](topic:not-built-yet).
