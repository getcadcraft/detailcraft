---
title: Verificar barras de aço conforme uma norma de projeto
summary: Crie combinações de carga a partir da ASCE 7 ou da EN 1990, verifique cada perfil I de aço conforme a AISC 360 ou a EN 1993-1-1 e veja quanto da capacidade de cada barra é utilizada. Um auxílio até que um engenheiro tenha revisado.
keywords: dimensionamento, verificação de dimensionamento, projeto de aço, utilização, capacidade, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, combinações de carga, LRFD, Anexo Nacional, flambagem, flambagem lateral com torção, cisalhamento, flexão, interação, estrutural, estudantes, engenheiro
from: 15685c4e
---

Depois de executar a análise, o bloco {{ui:Verificações de dimensionamento}} na guia {{ui:Análise}} transforma os esforços em um veredito para cada barra de aço: quanto da capacidade dela a combinação mais desfavorável utiliza.

:::warning
É um **auxílio até que um engenheiro o tenha revisado**. Usa apenas esforços de primeira ordem (sem efeitos de segunda ordem), não verifica torção, nem partes esbeltas (classe 4), nem perfis soldados, nem ligações, e deixa de fora o que não consegue verificar, avisando isso. Não substitui a verificação de um engenheiro, e seus resultados não são um selo de aprovação.
:::

## Escolher uma norma

A {{ui:Norma de projeto}} é salva com o modelo; escolha uma de duas famílias:

- **ASCE 7 + AISC 360** (EUA, LRFD): as combinações de carga da ASCE 7-16 §2.3.1 e as verificações de barras da ANSI/AISC 360-16.
- **EN 1990 + EN 1993-1-1** (Eurocode): as combinações da EN 1990 (Eq. 6.10, ou 6.10a e 6.10b) e as verificações de barras da EN 1993-1-1.

Em seguida, escolha a {{ui:Classe do aço}} (A992, A36 e outras; ou S235 a S450, com a menor resistência ao escoamento acima de 40 mm).

## Criar as combinações

Atribua a cada caso de carga seu **tipo** (permanente, sobrecarga, sobrecarga de cobertura, neve, vento, sísmico) na lista de casos e pressione {{ui:Criar combinações}}. O DetailCraft escreve as combinações da norma como combinações dos seus casos: todas as combinações de resistência que a norma lista para os tipos que você tem, e combinações de serviço para a flecha. As que você digitou por conta própria permanecem; elas não são verificadas contra a norma. Um caso do tipo {{ui:Outra}} não entra em combinações.

Para o Eurocode, os fatores são os **valores recomendados** do Anexo A1 da EN 1990 (γG 1,35, γQ 1,5, os valores de ψ das cargas acidentais, de neve e de vento) e da EN 1993-1-1 (γM0 = γM1 = 1,0). O Anexo Nacional do seu país altera alguns deles: abra {{ui:Valores do Anexo Nacional}}, digite os seus e crie as combinações de novo. Eles são salvos no modelo.

## Verificar as barras

Pressione {{ui:Verificar barras}}. Para cada perfil I de aço, a tabela mostra sua **utilização** (demanda sobre capacidade: 100 % é o limite), se ela passa, qual verificação governa e qual combinação. As barras são coloridas no modelo: azul pouco usada, verde cerca de metade, ocre perto do limite, vermelha acima dele, cinza não verificada. Clique no nome de uma barra para selecioná-la.

As verificações, com a cláusula que cada uma segue (elas aparecem listadas no relatório):

- tração, compressão com flambagem por flexão e por torção, flexão em torno dos dois eixos com flambagem lateral com torção, cisalhamento e flexão com força axial;
- flecha das combinações de serviço em relação ao {{ui:Limite de flecha}} que você definiu (L/360 como ponto de partida; é um valor de projeto, não um valor da norma).

**Comprimentos.** O comprimento contraventado é uma fração de cada trecho analisado (1 = sem contraventamento); os contraventamentos são considerados igualmente espaçados a partir do início. Os fatores K multiplicam o comprimento para a flambagem. Um nó onde outra barra chega divide uma barra, e cada trecho é verificado pelo próprio comprimento, como contraventado ali.

## O que não é verificado

Uma barra aparece como **não verificada**, com o motivo, em vez de um número, quando sua seção não é um perfil que as verificações conhecem (cantoneiras, perfis U; tubos retangulares e redondos são verificados quando suas paredes são compactas), quando é um perfil personalizado (soldado), ou quando uma parte é esbelta (AISC) ou de classe 4 (Eurocode) à flexão. Uma parte esbelta comprimida retira as verificações de compressão e a barra aparece como *passa, verificada em parte*. As soldas nas ligações têm [verificação própria](topic:weld-checks). Também não estão implementados: efeitos de segunda ordem, torção, flambagem por cisalhamento combinada com flexão, ligações parafusadas, fadiga, detalhamento contra incêndio e sísmico. Elementos de concreto e cargas sísmicas têm [verificações próprias](topic:concrete-and-seismic). Veja [Ainda não implementado](topic:not-built-yet).

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} ganham as tabelas de dimensionamento depois da verificação: as edições das normas, as configurações e os valores do Anexo Nacional, a utilização por barra, todas as cláusulas usadas e, para cada barra, a demanda, a capacidade e a utilização de cada verificação na sua combinação governante.
