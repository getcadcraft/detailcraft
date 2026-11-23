---
title: Comprobar barras de aceiro segundo unha norma de cálculo
summary: Crear combinacións de cargas segundo ASCE 7 ou EN 1990, comprobar cada perfil en I de aceiro segundo AISC 360 ou EN 1993-1-1 e ver canta parte da súa capacidade usa cada barra. Unha axuda ata que un enxeñeiro a revise.
keywords: deseño, comprobación de deseño, deseño de aceiro, aproveitamento, utilización, capacidade, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinacións de cargas, LRFD, Anexo Nacional, pandeo, pandeo lateral-torsional, cortante, flexión, interacción, estrutural, estudantes, enxeñeiro
from: 15685c4e
---

Despois de executar a análise, o bloque {{ui:Design checks}} da pestana {{ui:Analysis}} converte os esforzos nun veredicto para cada barra de aceiro: canta capacidade usa a combinación máis desfavorable.

:::warning
É unha **axuda ata que un enxeñeiro a revise**. Usa só esforzos de primeira orde (sen efectos de segunda orde), non comproba torsión, nin partes esveltas (clase 4), nin perfís soldados, nin unións, e deixa fóra o que non pode comprobar e di que o fai. Non substitúe a comprobación dun enxeñeiro, e os seus resultados non son un selo.
:::

## Escoller unha norma

{{ui:Design code}} gárdase co modelo; escolla unha de dúas familias:

- **ASCE 7 + AISC 360** (EUA, LRFD): as combinacións de cargas de ASCE 7-16 §2.3.1 e as comprobacións de barras de ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): as combinacións de EN 1990 (Ec. 6.10, ou 6.10a e 6.10b) e as comprobacións de barras de EN 1993-1-1.

Despois escolla a {{ui:Steel grade}} (A992, A36 e outras; ou S235 a S450, coa resistencia ao límite elástico inferior por riba de 40 mm).

## Crear as combinacións

Dálle a cada caso de carga o seu **tipo** (permanente, sobrecarga, sobrecarga de cuberta, neve, vento, sísmica) na lista de casos, e prema {{ui:Make combinations}}. DetailCraft escribe as combinacións da norma como combinacións dos seus casos: todas as combinacións de resistencia que a norma lista para os tipos que ten, e combinacións de servizo para a frecha. As que vostede escribiu quedan; non se comprobán contra a norma. Un caso de tipo {{ui:Other}} non se combina.

Para o Eurocódigo os factores son os **valores recomendados** do EN 1990 Anexo A1 (γG 1,35, γQ 1,5, os valores ψ das cargas impostas, da neve e do vento) e do EN 1993-1-1 (γM0 = γM1 = 1,0). O Anexo Nacional do seu país cambia algúns deles: abra {{ui:National Annex values}}, escriba os seus, e volva crear as combinacións. Gárdanse co modelo.

## Comprobar as barras

Prema {{ui:Check members}}. Para cada perfil en I de aceiro a táboa mostra o seu **aproveitamento** (esforzo sobre capacidade: 100 % é o límite), se pasa, que comprobación rixe e que combinación. As barras colóranse no modelo: azul pouco usadas, verde case a metade, ocre preto do límite, vermello por riba do límite, gris sen comprobar. Prema no nome dunha barra para seleccionala.

As comprobacións, coa cláusula que segue cada unha (aparecen no informe):

- tracción, compresión con pandeo por flexión e torsión, flexión arredor dos dous eixes con pandeo lateral-torsional, cortante e flexión con esforzo axial;
- frecha das combinacións de servizo fronte ao {{ui:Deflection limit}} que estableza (L/360 para comezar; un valor do proxecto, non da norma).

**Lonxitudes.** A lonxitude arriostrada é unha fracción de cada peza analizada (1 = sen arriostrar); os arriostramentos tómanse equidistantes desde o inicio. Os factores K multiplican a lonxitude para o pandeo. Un nodo onde chega outra barra divide unha barra, e cada tramo compróbase coa súa propia lonxitude, tomada como arriostrada nese punto.

## Que non se comproba

Unha barra mostra **sen comprobar**, co motivo, en lugar dun número cando a súa sección non é un perfil que as comprobacións coñecen (cantoneiras, perfís en U; os tubos rectangulares e circulares compróbanse cando as paredes son compactas), cando é unha forma personalizada (soldada), ou cando unha parte é esvelta (AISC) ou de clase 4 (Eurocódigo) á flexión. Unha parte esvelta á compresión deixa fóra as comprobacións de compresión e a barra aparece como *pasa, comprobada en parte*. As soldaduras dos nodos teñen [a súa propia comprobación](topic:weld-checks). Tampouco están feitos: efectos de segunda orde, torsión, pandeo por cortante xunto con flexión, unións atornilladas, fatiga, incendio e detallado sísmico. Os elementos de formigón e as cargas sísmicas teñen [as súas propias comprobacións](topic:concrete-and-seismic). Ver [Non está feito aínda](topic:not-built-yet).

## O informe

{{ui:Report (PDF)}} e {{ui:Report (CSV)}} engaden as táboas de deseño unha vez comprobado: as edicións das normas, os axustes e os valores do Anexo Nacional, o aproveitamento por barra, todas as cláusulas usadas e, para cada barra, o esforzo, a capacidade e o aproveitamento de cada comprobación na súa combinación rectora.
