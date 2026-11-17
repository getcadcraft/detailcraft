---
title: Verificar miembros de acero según un código de diseño
summary: Arme combinaciones de cargas según ASCE 7 o EN 1990, verifique cada perfil doble T de acero según AISC 360 o EN 1993-1-1, y vea cuánto de su capacidad usa cada miembro. Una ayuda hasta que la revise un ingeniero.
keywords: diseño, verificación de diseño, diseño de acero, utilización, capacidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinaciones de cargas, LRFD, Anexo Nacional, pandeo, pandeo lateral-torsional, corte, flexión, interacción, estructural, estudiantes, ingeniero
from: 66b6d545
---

Después de correr el análisis, el bloque {{ui:Design checks}} de la pestaña {{ui:Analysis}} convierte sus fuerzas en un veredicto para cada miembro de acero: cuánto de su capacidad usa la combinación más desfavorable.

:::warning
Es una **ayuda hasta que la revise un ingeniero**. Usa solo fuerzas de primer orden (sin efectos de segundo orden), no verifica torsión, partes esbeltas (clase 4), perfiles soldados ni conexiones, y deja afuera lo que no puede verificar y lo dice. No reemplaza la verificación de un ingeniero, y sus resultados no son un sello.
:::

## Elegir un código

{{ui:Design code}} se guarda con el modelo; elija una de dos familias:

- **ASCE 7 + AISC 360** (EE. UU., LRFD): las combinaciones de cargas de ASCE 7-16 §2.3.1 y las verificaciones de miembros de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): las combinaciones de EN 1990 (Ec. 6.10, o 6.10a y 6.10b) y las verificaciones de miembros de EN 1993-1-1.

Después elija el {{ui:Steel grade}} (A992, A36 y otros; o S235 a S450, con la resistencia de fluencia menor por encima de 40 mm).

## Armar las combinaciones

Asigne a cada caso de carga su **tipo** (permanente, sobrecarga, sobrecarga de techo, nieve, viento, sísmica) en la lista de casos, y presione {{ui:Make combinations}}. DetailCraft escribe las combinaciones del código como combinaciones de sus casos: todas las combinaciones de resistencia que el código lista para los tipos que usted tiene, y combinaciones de servicio para la flecha. Las que usted escribió a mano se mantienen; no se verifican contra el código. Un caso de tipo {{ui:Other}} no se combina.

Para el Eurocódigo, los factores son los **valores recomendados** del Anexo A1 de EN 1990 (γG 1.35, γQ 1.5, los valores ψ de sobrecargas, nieve y viento) y de EN 1993-1-1 (γM0 = γM1 = 1.0). El Anexo Nacional de su país cambia algunos: abra {{ui:National Annex values}}, escriba los suyos y arme las combinaciones otra vez. Se guardan en el modelo.

## Verificar los miembros

Presione {{ui:Check members}}. Para cada perfil doble T de acero, la tabla muestra su **utilización** (demanda sobre capacidad: 100 % es el límite), si pasa, qué verificación rige y qué combinación. Los miembros se colorean en el modelo: azul poco usado, verde cerca de la mitad, ocre cerca del límite, rojo por encima, gris sin verificar. Haga clic en el nombre de un miembro para seleccionarlo.

Las verificaciones, con la cláusula que siguen (figuran en el informe):

- tracción, compresión con pandeo por flexión y torsional, flexión en ambos ejes con pandeo lateral-torsional, corte, y flexión con fuerza axial;
- flecha de las combinaciones de servicio contra el {{ui:Deflection limit}} que usted fije (L/360 al inicio; es un valor del proyecto, no del código).

**Longitudes.** La longitud arriostrada es una parte de cada pieza analizada (1 = sin arriostrar); los arriostres se toman equiespaciados desde el inicio. Los factores K multiplican la longitud para el pandeo. Un nudo donde llega otro miembro divide un miembro, y cada tramo se verifica con su propia longitud, como arriostrada allí.

## Lo que no se verifica

Un miembro muestra **not checked**, con el motivo, en lugar de un número cuando su sección no es un perfil doble T que las verificaciones conocen (tubos, ángulos, canales), cuando es una forma personalizada (soldada), o cuando una parte es esbelta (AISC) o de clase 4 (Eurocódigo) en flexión. Una parte esbelta en compresión deja afuera las verificaciones de compresión y el miembro se lee *passes, partly checked*. Tampoco están hechos los efectos de segundo orden, la torsión, el pandeo por corte junto con la flexión, las conexiones, la fatiga, el fuego ni el detallado sísmico. Los miembros de hormigón y las cargas sísmicas tienen [sus propias verificaciones](topic:concrete-and-seismic). Vea [Todavía no implementado](topic:not-built-yet).

## El informe

{{ui:Report (PDF)}} y {{ui:Report (CSV)}} incorporan las tablas de diseño una vez que verificó: las ediciones de los códigos, las configuraciones y los valores del Anexo Nacional, la utilización por miembro, cada cláusula usada, y para cada miembro la demanda, la capacidad y la utilización de cada verificación en su combinación que rige.
