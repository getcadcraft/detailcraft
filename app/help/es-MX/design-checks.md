---
title: Revisar miembros de acero según un código de diseño
summary: Genere combinaciones de cargas según ASCE 7 o EN 1990, revise cada perfil de acero en I según AISC 360 o EN 1993-1-1, y vea qué porcentaje de su capacidad usa cada miembro. Es una ayuda hasta que un ingeniero la revise.
keywords: diseño, revisión de diseño, diseño de acero, utilización, capacidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinaciones de cargas, LRFD, Anexo Nacional, pandeo, pandeo lateral-torsional, cortante, flexión, interacción, estructural, estudiantes, ingeniero
from: 66b6d545
---

Después de ejecutar el análisis, el bloque {{ui:Revisiones de diseño}} de la pestaña {{ui:Análisis}} convierte sus fuerzas en un veredicto para cada miembro de acero: qué porcentaje de su capacidad usa la combinación más desfavorable.

:::warning
Es una **ayuda hasta que un ingeniero la haya revisado**. Usa solo fuerzas de primer orden (sin efectos de segundo orden), no revisa torsión, partes esbeltas (clase 4), perfiles soldados ni conexiones, y omite lo que no puede revisar y lo indica. No sustituye la revisión de un ingeniero, y sus resultados no son un sello.
:::

## Elegir un código

{{ui:Código de diseño}} se guarda con el modelo; elija una de dos familias:

- **ASCE 7 + AISC 360** (EE. UU., LRFD): las combinaciones de cargas de ASCE 7-16 §2.3.1 y las revisiones de miembros de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): las combinaciones de EN 1990 (Ec. 6.10, o 6.10a y 6.10b) y las revisiones de miembros de EN 1993-1-1.

Luego elija el {{ui:Grado del acero}} (A992, A36 y otros; o S235 a S450, con la resistencia de fluencia inferior arriba de 40 mm).

## Generar las combinaciones

Asigne a cada caso de carga su **tipo** (muerta, viva, viva de techo, nieve, viento, sísmica) en la lista de casos, y luego presione {{ui:Generar combinaciones}}. DetailCraft escribe las combinaciones del código como combinaciones de sus casos: cada combinación de resistencia que el código indica para los tipos que tiene, y combinaciones de servicio para la deflexión. Las que usted escribió a mano se conservan; no se revisan contra el código. Un caso de tipo {{ui:Otra}} no se combina.

Para el Eurocódigo, los factores son los **valores recomendados** del Anexo A1 de EN 1990 (γG 1.35, γQ 1.5, los valores ψ de cargas impuestas, de nieve y de viento) y de EN 1993-1-1 (γM0 = γM1 = 1.0). El Anexo Nacional de su país cambia algunos de ellos: abra {{ui:Valores del Anexo Nacional}}, escriba los suyos y vuelva a generar las combinaciones. Se guardan en el modelo.

## Revisar los miembros

Presione {{ui:Revisar miembros}}. Para cada perfil de acero en I, la tabla muestra su **utilización** (demanda entre capacidad: 100 % es el límite), si cumple, qué revisión rige y qué combinación. Los miembros se colorean en el modelo: azul poco usado, verde alrededor de la mitad, ocre cerca del límite, rojo por encima, gris sin revisar. Haga clic en el nombre de un miembro para seleccionarlo.

Las revisiones, con la cláusula que sigue cada una (aparecen en el informe):

- tensión, compresión con pandeo por flexión y torsión, flexión alrededor de ambos ejes con pandeo lateral-torsional, cortante, y flexión con fuerza axial;
- deflexión de las combinaciones de servicio contra el {{ui:Límite de deflexión}} que defina (L/360 al inicio; es un valor del proyecto, no del código).

**Longitudes.** La longitud arriostrada es una fracción de cada pieza analizada (1 = sin arriostrar); los arriostramientos se toman equidistantes desde el inicio. Los factores K multiplican la longitud para el pandeo. Una unión donde llega otro miembro divide un miembro, y cada tramo se revisa con su propia longitud, como arriostrado ahí.

## Lo que no se revisa

Un miembro muestra **no revisado**, con el motivo, en lugar de un número cuando su sección no es un perfil en I que las revisiones conocen (tubos, ángulos, canales), cuando es una forma personalizada (soldada), o cuando una parte es esbelta (AISC) o clase 4 (Eurocódigo) en flexión. Una parte esbelta en compresión excluye las revisiones de compresión y el miembro aparece como *cumple, parcialmente revisado*. Tampoco están incluidos: efectos de segundo orden, torsión, pandeo por cortante combinado con flexión, conexiones, fatiga, fuego y detallado sísmico. Los miembros de concreto y las cargas sísmicas tienen [sus propias revisiones](topic:concrete-and-seismic). Vea [Aún no incluido](topic:not-built-yet).

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} agregan las tablas de diseño una vez que haya revisado: las ediciones de los códigos, la configuración y los valores del Anexo Nacional, la utilización por miembro, cada cláusula usada y, para cada miembro, la demanda, la capacidad y la utilización de cada revisión en su combinación que rige.
