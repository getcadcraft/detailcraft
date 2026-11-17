---
title: Verificar barras de aço segundo uma norma de dimensionamento
summary: Crie combinações de cargas segundo a ASCE 7 ou a EN 1990, verifique cada perfil em I de aço segundo a AISC 360 ou a EN 1993-1-1, e veja quanto da capacidade de cada barra é utilizado. Uma ajuda até um engenheiro a rever.
keywords: dimensionamento, verificação de dimensionamento, dimensionamento de aço, utilização, capacidade, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinações de cargas, LRFD, Anexo Nacional, encurvadura, encurvadura lateral-torsional, esforço transverso, flexão, interação, estrutural, estudantes, engenheiro
from: 66b6d545
---

Depois de correr a análise, o bloco {{ui:Verificações de dimensionamento}} do separador {{ui:Análise}} transforma os seus esforços num veredicto para cada barra de aço: quanto da capacidade é utilizado pela combinação mais desfavorável.

:::warning
É uma **ajuda até um engenheiro a rever**. Usa apenas esforços de primeira ordem (sem efeitos de segunda ordem), não verifica a torção, as partes esbeltas (classe 4), as formas soldadas nem as ligações, e deixa de fora o que não consegue verificar, dizendo-o. Não substitui a verificação de um engenheiro, e os seus resultados não são um carimbo.
:::

## Escolher a norma

{{ui:Norma de dimensionamento}} é guardada com o modelo; escolha uma de duas famílias:

- **ASCE 7 + AISC 360** (EUA, LRFD): as combinações de cargas da ASCE 7-16 §2.3.1 e as verificações de barras da ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): as combinações da EN 1990 (Eq. 6.10, ou 6.10a e 6.10b) e as verificações de barras da EN 1993-1-1.

Depois escolha a {{ui:Classe do aço}} (A992, A36 e outras; ou S235 a S450, com a tensão de cedência inferior acima de 40 mm).

## Criar as combinações

Atribua a cada caso de carga o seu **tipo** (permanente, variável, cobertura, neve, vento, sísmica) na lista de casos e prima {{ui:Criar combinações}}. O DetailCraft escreve as combinações da norma como combinações dos seus casos: todas as combinações de resistência que a norma indica para os tipos que tem, e combinações de estado limite de utilização para a deformação. As combinações que escreveu manualmente ficam; não são verificadas segundo a norma. Um caso do tipo {{ui:Outra}} não é combinado.

Para o Eurocódigo, os fatores são os **valores recomendados** do Anexo A1 da EN 1990 (γG 1.35, γQ 1.5, os valores de ψ das cargas de utilização, neve e vento) e da EN 1993-1-1 (γM0 = γM1 = 1.0). O Anexo Nacional altera alguns deles: abra {{ui:Valores do Anexo Nacional}}, escreva os valores nacionais e volte a criar as combinações. Ficam guardados no modelo.

## Verificar as barras

Prima {{ui:Verificar barras}}. Para cada perfil em I de aço, a tabela mostra a sua **utilização** (solicitação sobre capacidade: 100 % é o limite), se passa, qual a verificação determinante e qual a combinação. As barras são coloridas no modelo: azul pouco utilizada, verde cerca de metade, ocre perto do limite, vermelho acima dele, cinzento não verificada. Clique no nome de uma barra para a selecionar.

As verificações, com a cláusula que cada uma segue (estão listadas no relatório):

- tração, compressão com encurvadura por flexão e por torção, flexão em torno dos dois eixos com encurvadura lateral-torsional, esforço transverso, e flexão com esforço axial;
- deformação das combinações de estado limite de utilização face ao {{ui:Limite de deformação}} que definiu (L/360 para começar; um valor do projeto, não um valor da norma).

**Comprimentos.** O comprimento contraventado é uma fração de cada peça analisada (1 = sem contraventamento); os contraventamentos consideram-se igualmente espaçados a partir do início. Os fatores K multiplicam o comprimento para a encurvadura. Uma junta onde chega outra barra divide uma barra, e cada troço é verificado no seu próprio comprimento, como contraventado aí.

## O que não é verificado

Uma barra mostra **não verificada**, com o motivo, em vez de um número, quando a sua secção não é um perfil em I que as verificações conhecem (tubos, cantoneiras, perfis em U), quando é uma forma personalizada (soldada), ou quando uma parte é esbelta (AISC) ou de classe 4 (Eurocódigo) em flexão. Uma parte esbelta à compressão retira as verificações de compressão, e a barra aparece como *passa, parcialmente verificada*. Também não estão implementados: efeitos de segunda ordem, torção, encurvadura por esforço transverso combinada com flexão, ligações, fadiga, incêndio e pormenorização sísmica. Os elementos de betão e as cargas sísmicas têm [as suas próprias verificações](topic:concrete-and-seismic). Ver [Ainda não implementado](topic:not-built-yet).

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} passam a incluir as tabelas de dimensionamento depois de verificar: as edições das normas, as definições e os valores do Anexo Nacional, a utilização por barra, todas as cláusulas usadas e, para cada barra, a solicitação, a capacidade e a utilização de cada verificação na sua combinação determinante.
