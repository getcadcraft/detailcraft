---
title: Comprobar miembros de acero según una norma de cálculo
summary: Genere combinaciones de carga a partir de ASCE 7 o EN 1990, compruebe cada perfil en I de acero según AISC 360 o EN 1993-1-1 y vea cuánta capacidad utiliza cada miembro. Es una ayuda hasta que un ingeniero la haya revisado.
keywords: cálculo, comprobación de cálculo, cálculo de acero, aprovechamiento, utilización, capacidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinaciones de carga, LRFD, Anexo Nacional, pandeo, pandeo lateral por torsión, cortante, flexión, interacción, estructural, estudiantes, ingeniero
from: 15685c4e
---

Después de ejecutar el análisis, el bloque {{ui:Design checks}} de la pestaña {{ui:Analysis}} convierte sus esfuerzos en un veredicto para cada miembro de acero: qué parte de su capacidad utiliza la combinación más desfavorable.

:::warning
Es una **ayuda hasta que un ingeniero la haya revisado**. Usa solo esfuerzos de primer orden (sin efectos de segundo orden), no comprueba la torsión, las partes esbeltas (clase 4), los perfiles soldados ni las uniones, y deja fuera lo que no puede comprobar, indicándolo. No sustituye la comprobación de un ingeniero, y sus resultados no son un sello de conformidad.
:::

## Elija una norma

{{ui:Design code}} se guarda con el modelo; elija una de dos familias:

- **ASCE 7 + AISC 360** (EE. UU., LRFD): las combinaciones de carga de ASCE 7-16 §2.3.1 y las comprobaciones de miembros de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): las combinaciones de EN 1990 (ec. 6.10, o 6.10a y 6.10b) y las comprobaciones de miembros de EN 1993-1-1.

Después elija la {{ui:Steel grade}} (A992, A36 y otras; o S235 a S450, con la resistencia de límite elástico inferior por encima de 40 mm).

## Genere las combinaciones

Asigne a cada hipótesis de carga su **tipo** (permanente, sobrecarga de uso, sobrecarga de cubierta, nieve, viento, sísmica) en la lista de hipótesis, y pulse {{ui:Make combinations}}. DetailCraft escribe las combinaciones de la norma como combinaciones de sus hipótesis: todas las combinaciones de resistencia que la norma indica para los tipos que tiene, y combinaciones de servicio para la flecha. Las que escribió usted mismo se mantienen; no se comprueban frente a la norma. Una hipótesis de tipo {{ui:Other}} no se combina.

Para el Eurocódigo, los coeficientes son los **valores recomendados** del EN 1990 Anexo A1 (γG 1.35, γQ 1.5, los valores ψ de las cargas de uso, nieve y viento) y del EN 1993-1-1 (γM0 = γM1 = 1.0). Su país cambia algunos de ellos con su Anexo Nacional: abra {{ui:National Annex values}}, escriba los suyos y vuelva a generar las combinaciones. Se guardan en el modelo.

## Compruebe los miembros

Pulse {{ui:Check members}}. Para cada perfil en I de acero, la tabla muestra su **aprovechamiento** (solicitación entre capacidad: 100 % es el límite), si cumple, qué comprobación gobierna y qué combinación. Los miembros se colorean en el modelo: azul, poco aprovechado; verde, cerca de la mitad; ocre, cerca del límite; rojo, por encima; gris, sin comprobar. Haga clic en el nombre de un miembro para seleccionarlo.

Las comprobaciones, con la cláusula que siguen (figuran en el informe):

- tracción, compresión con pandeo por flexión y por torsión, flexión respecto a los dos ejes con pandeo lateral por torsión, cortante y flexión con axil;
- flecha de las combinaciones de servicio frente al {{ui:Deflection limit}} que fije (L/360 para empezar; es un valor del proyecto, no de la norma).

**Longitudes.** La longitud arriostrada es una fracción de cada tramo analizado (1 = sin arriostrar); los arriostramientos se toman equidistantes desde el inicio. Los factores K multiplican la longitud para el pandeo. Una unión en la que llega otro miembro divide un miembro, y cada tramo se comprueba por su propia longitud, como arriostrado allí.

## Qué no se comprueba

Un miembro muestra **no comprobado**, con el motivo, en lugar de un número, cuando su sección no es una forma que conocen las comprobaciones (ángulos, UPN; los tubos rectangulares y redondos se comprueban cuando sus paredes son compactas), cuando es un perfil personalizado (soldado), o cuando una parte es esbelta (AISC) o de clase 4 (Eurocódigo) en flexión. Una parte esbelta en compresión excluye las comprobaciones de compresión, y el miembro aparece como *cumple, comprobado en parte*. Las soldaduras de los nudos tienen [su propia comprobación](topic:weld-checks). Tampoco están incluidos: efectos de segundo orden, torsión, pandeo por cortante junto con flexión, uniones atornilladas, fatiga, incendio y detallado sísmico. Los miembros de hormigón y las cargas sísmicas tienen [sus propias comprobaciones](topic:concrete-and-seismic). Véase [Aún no incluido](topic:not-built-yet).

## El informe

{{ui:Report (PDF)}} e {{ui:Report (CSV)}} incorporan las tablas de cálculo una vez que haya hecho la comprobación: las ediciones de las normas, los ajustes y los valores del Anexo Nacional, el aprovechamiento por miembro, cada cláusula utilizada y, para cada miembro, la solicitación, la capacidad y el aprovechamiento de cada comprobación en su combinación que gobierna.
