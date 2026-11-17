---
title: Comprobar miembros de acero según una norma de cálculo
summary: Genere combinaciones de cargas según ASCE 7 o EN 1990, compruebe cada perfil doble T de acero según AISC 360 o EN 1993-1-1, y vea qué parte de su capacidad usa cada miembro. Una ayuda hasta que un ingeniero la revise.
keywords: cálculo, comprobación de cálculo, cálculo de acero, aprovechamiento, utilización, capacidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinaciones de cargas, LRFD, Anexo Nacional, pandeo, pandeo lateral-torsional, cortante, flexión, interacción, estructural, estudiantes, ingeniero
from: 66b6d545
---

Tras ejecutar el análisis, el bloque {{ui:Comprobaciones de cálculo}} de la pestaña {{ui:Análisis}} convierte sus esfuerzos en un veredicto para cada miembro de acero: qué parte de su capacidad usa la combinación más desfavorable.

:::warning
Es una **ayuda hasta que un ingeniero la haya revisado**. Usa solo esfuerzos de primer orden (sin efectos de segundo orden), no comprueba torsión, ni partes esbeltas (clase 4), ni perfiles soldados, ni uniones, y deja fuera lo que no puede comprobar y lo indica. No sustituye la comprobación de un ingeniero, y sus resultados no son un sello.
:::

## Elija una norma

{{ui:Norma de cálculo}} se guarda con el modelo; elija una de dos familias:

- **ASCE 7 + AISC 360** (EE. UU., LRFD): las combinaciones de carga de ASCE 7-16 §2.3.1 y las comprobaciones de miembros de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): las combinaciones de EN 1990 (ec. 6.10, o 6.10a y 6.10b) y las comprobaciones de miembros de EN 1993-1-1.

A continuación elija la {{ui:Calidad del acero}} (A992, A36 y otras; o S235 a S450, con el límite elástico inferior por encima de 40 mm).

## Generar las combinaciones

Asigne a cada hipótesis de carga su **tipo** (permanente, sobrecarga, sobrecarga de cubierta, nieve, viento, sísmica) en la lista de hipótesis, y pulse {{ui:Generar combinaciones}}. DetailCraft escribe las combinaciones de la norma como combinaciones de sus hipótesis: todas las combinaciones de resistencia que la norma indica para los tipos que tiene, y combinaciones de servicio para flecha. Las que haya escrito usted se mantienen; no se comprueban frente a la norma. Una hipótesis de tipo {{ui:Otra}} no se combina.

Para el Eurocódigo, los coeficientes son los **valores recomendados** de EN 1990 Anexo A1 (γG 1.35, γQ 1.5, los valores ψ de sobrecargas, nieve y viento) y de EN 1993-1-1 (γM0 = γM1 = 1.0). El Anexo Nacional de su país modifica algunos: abra {{ui:Valores del Anexo Nacional}}, escriba los suyos y vuelva a generar las combinaciones. Se guardan en el modelo.

## Comprobar los miembros

Pulse {{ui:Comprobar miembros}}. Para cada perfil doble T de acero, la tabla muestra su **aprovechamiento** (solicitación frente a capacidad: 100 % es el límite), si cumple, qué comprobación gobierna y qué combinación. Los miembros se colorean en el modelo: azul muy poco usado, verde en torno a la mitad, ocre cerca del límite, rojo por encima, gris sin comprobar. Haga clic en el nombre de un miembro para seleccionarlo.

Las comprobaciones, con la cláusula que sigue cada una (se listan en el informe):

- tracción, compresión con pandeo por flexión y por torsión, flexión respecto a ambos ejes con pandeo lateral-torsional, cortante y flexión con axil;
- flecha de las combinaciones de servicio frente al {{ui:Límite de flecha}} que defina (L/360 para empezar; un valor del proyecto, no de la norma).

**Longitudes.** La longitud arriostrada es una fracción de cada pieza analizada (1 = sin arriostrar); los arriostramientos se toman equidistantes desde el inicio. Los factores K multiplican la longitud para el pandeo. Un nudo donde llega otro miembro divide un miembro, y cada tramo se comprueba con su propia longitud, como arriostrado allí.

## Qué no se comprueba

Un miembro muestra **no comprobado**, con el motivo, en lugar de un número cuando su sección no es un perfil doble T que las comprobaciones conocen (tubos, cantoneras, perfiles U), cuando es una sección personalizada (soldada), o cuando una parte es esbelta (AISC) o de clase 4 (Eurocódigo) en flexión. Una parte esbelta en compresión deja fuera las comprobaciones de compresión y el miembro aparece como *cumple, parcialmente comprobado*. Tampoco están incluidos: efectos de segundo orden, torsión, pandeo por cortante junto con flexión, uniones, fatiga, incendio ni detallado sísmico. Los miembros de hormigón y las cargas sísmicas tienen [sus propias comprobaciones](topic:concrete-and-seismic). Véase [Aún no disponible](topic:not-built-yet).

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} incorporan las tablas de cálculo una vez comprobado: las ediciones de las normas, los ajustes y los valores del Anexo Nacional, el aprovechamiento por miembro, cada cláusula utilizada y, para cada miembro, la solicitación, la capacidad y el aprovechamiento de cada comprobación en su combinación determinante.
