---
title: Verificar barras de aço segundo uma norma de dimensionamento
summary: Criar combinações de cargas a partir da ASCE 7 ou da EN 1990, verificar cada perfil em I de aço contra a AISC 360 ou a EN 1993-1-1 e ver que parte da capacidade cada barra utiliza. Uma ajuda até que um engenheiro a reveja.
keywords: dimensionamento, verificação de dimensionamento, dimensionamento de aço, utilização, utilizacao, capacidade, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinações de cargas, LRFD, Anexo Nacional, encurvadura, encurvadura lateral-torsional, esforço transverso, flexão, interação, estrutural, estudantes, engenheiro
from: 15685c4e
---

Depois de executar a análise, o bloco {{ui:Verificações de dimensionamento}} do separador {{ui:Análise}} converte os esforços num veredicto para cada barra de aço: quanto da capacidade é utilizada pela combinação mais desfavorável.

:::warning
É uma **ajuda até que um engenheiro a reveja**. Usa apenas esforços de primeira ordem (sem efeitos de segunda ordem), não verifica a torção, nem partes esbeltas (classe 4), nem perfis soldados, nem ligações, e deixa de fora o que não consegue verificar, dizendo-o. Não substitui a verificação de um engenheiro, e os seus resultados não são um carimbo.
:::

## Escolher uma norma

{{ui:Norma de dimensionamento}} é guardada com o modelo; escolha uma de duas famílias:

- **ASCE 7 + AISC 360** (EUA, LRFD): as combinações de cargas da ASCE 7-16 §2.3.1 e as verificações de barras da ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): as combinações da EN 1990 (Eq. 6.10, ou 6.10a e 6.10b) e as verificações de barras da EN 1993-1-1.

Escolha depois a {{ui:Classe do aço}} (A992, A36 e outras; ou S235 a S450, com a tensão de cedência inferior acima de 40 mm).

## Criar as combinações

Atribua a cada caso de carga o seu **tipo** (permanente, variável, sobrecarga de cobertura, neve, vento, sísmica) na lista de casos e, depois, carregue em {{ui:Criar combinações}}. O DetailCraft escreve as combinações da norma como combinações dos seus casos: todas as combinações de resistência que a norma indica para os tipos que tem, e combinações de serviço para a flecha. As que escreveu manualmente mantêm-se; não são verificadas contra a norma. Um caso do tipo {{ui:Outra}} não é combinado.

Para o Eurocódigo, os coeficientes são os **valores recomendados** da EN 1990 Anexo A1 (γG 1.35, γQ 1.5, os valores ψ das cargas variáveis, da neve e do vento) e da EN 1993-1-1 (γM0 = γM1 = 1.0). O Anexo Nacional do seu país altera alguns deles: abra {{ui:Valores do Anexo Nacional}}, escreva os seus valores e volte a criar as combinações. Ficam guardados no modelo.

## Verificar as barras

Carregue em {{ui:Verificar barras}}. Para cada perfil de aço em I, a tabela mostra a sua **utilização** (solicitação sobre capacidade: 100 % é o limite), se passa, qual a verificação que governa e qual a combinação. As barras ficam coloridas no modelo: azul pouco utilizada, verde cerca de metade, ocre perto do limite, vermelha acima dele, cinzenta não verificada. Clique no nome de uma barra para a selecionar.

As verificações, com a cláusula que cada uma segue (estão listadas no relatório):

- tração, compressão com encurvadura por flexão e por torção, flexão em torno dos dois eixos com encurvadura lateral-torsional, esforço transverso, e flexão com esforço axial;
- flecha das combinações de serviço contra o {{ui:Limite de flecha}} que definiu (L/360 para começar; é um valor do projeto, não um valor da norma).

**Comprimentos.** O comprimento contraventado é uma fração de cada troço analisado (1 = sem contraventamento); os contraventamentos são considerados igualmente espaçados a partir do início. Os fatores K multiplicam o comprimento para a encurvadura. Um nó onde chega outra barra divide uma barra, e cada troço é verificado no seu próprio comprimento, como contraventado nesse ponto.

## O que não é verificado

Uma barra mostra **não verificada**, com o motivo, em vez de um número, quando a sua secção não é um perfil que as verificações conhecem (cantoneiras, perfis U; tubos retangulares e circulares são verificados quando as paredes são compactas), quando é um perfil personalizado (soldado) ou quando uma parte é esbelta (AISC) ou de classe 4 (Eurocódigo) em flexão. Uma parte esbelta à compressão retira as verificações de compressão, e a barra aparece como *passa, parcialmente verificada*. As soldaduras nas ligações têm [a sua própria verificação](topic:weld-checks). Também ainda não estão implementados: efeitos de segunda ordem, torção, encurvadura por corte combinada com flexão, ligações aparafusadas, fadiga, incêndio e pormenorização sísmica. Os elementos de betão e as cargas sísmicas têm [as suas próprias verificações](topic:concrete-and-seismic). Veja [Ainda não implementado](topic:not-built-yet).

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} passam a incluir as tabelas de dimensionamento depois de verificar: as edições das normas, as definições e os valores do Anexo Nacional, a utilização por barra, cada cláusula usada e, para cada barra, a solicitação, a capacidade e a utilização de cada verificação na sua combinação que governa.
