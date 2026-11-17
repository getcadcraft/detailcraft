---
title: Painéis de estrutura em madeira e aço leve
summary: Enquadrar painéis de paredes, pisos e coberturas em madeira ou em aço leve, com todas as peças, uma lista de cortes, um desenho de fabrico e o material a comprar.
keywords: estrutura, estrutura leve, madeira, madeira serrada, aço leve, enformado a frio, montante, vigota, varedo, padieira, montante principal, montante secundário, montante curto, lista de cortes, desenho de fabrico, painel
from: 3e38ffb9
---

O separador {{ui:Estrutura leve}} enquadra os painéis que descreve e dá aquilo que uma equipa de montagem e um armazém de madeiras pedem. Os painéis ficam guardados no ficheiro do modelo.

:::warning
As medidas, o espaçamento e as padieiras são da sua responsabilidade. O DetailCraft não verifica se um montante com esse espaçamento suporta essa parede, nem se uma padieira vence aquele vão: isso cabe às tabelas da sua norma e ao seu engenheiro.
:::

## Adicionar um painel

Escolha {{ui:Adicionar uma parede}}, {{ui:Adicionar um pavimento}} ou {{ui:Adicionar uma cobertura}}, e depois preencha as dimensões em milímetros, o material (madeira ou aço leve) e a dimensão das peças. As medidas da madeira são as designações nominais, com as suas medidas reais (2×4 é 38 × 89 mm). Os montantes de aço são designados pela altura e pela espessura, por exemplo `C92-1.2`.

## Paredes

Uma parede tem uma travessa inferior, uma ou mais travessas superiores (uma calha, no caso do aço), montantes de extremidade, montantes no espaçamento indicado e, para cada vão: dois montantes principais, dois montantes secundários, uma padieira com a dimensão e as camadas que escolher, e montantes curtos sobre a padieira (e sob o peitoril de uma janela). Dê a cada vão a sua distância à extremidade esquerda, a sua largura, e o topo e a base do vão em bruto medidos a partir do subpavimento; uma porta tem a base em 0.

## Pavimentos e coberturas

Um pavimento tem vigotas ao longo da sua largura, segundo o vão, vigotas de bordadura nas duas extremidades e, se o marcar, travamentos a meio vão. Um painel de cobertura é uma empena: um par de varedos no espaçamento indicado (o seu comprimento inclui o beirado ao longo do declive) e uma cumeeira.

## O que obtém

Cada painel mostra as suas peças num desenho à escala, com todas as peças marcadas, uma lista de cortes por marca e um total. A tabela {{ui:Material a comprar}} agrupa todos os cortes dos painéis em comprimentos de material bruto, o mais curto que comporta os cortes de cada peça. {{ui:Guardar o desenho de fabrico (SVG)}} escreve o desenho; o botão {{ui:CSV}} escreve todas as listas de cortes e a lista de material.

## Colocar um painel no modelo

Por baixo de cada painel, indique onde fica (x, y, z em milímetros, e o ângulo) e clique em {{ui:Colocar como barras}}: cada peça torna-se uma barra do modelo, com a secção real da sua medida e o peso do material (cerca de 500 kg/m³ para a madeira; aço para os montantes). Uma parede segue o ângulo a partir da sua extremidade inferior esquerda, com a base em z; as vigotas de um pavimento ficam com a face inferior em z; a elevação de empena de uma cobertura segue o ângulo, com z no topo das travessas da parede. Cada camada da padieira é uma barra, lado a lado. Voltar a clicar substitui as barras colocadas antes, e {{ui:Remover as barras colocadas}} retira-as; cada uma é um passo de anulação. A Análise deixa estas barras de fora: não são barras de estrutura de aço.

## Folhas PDF

{{ui:Folhas PDF}} guarda uma página A3 por painel: o painel à escala, com todas as peças marcadas, as dimensões totais, a lista de cortes e uma faixa de título.

Problemas no painel {{ui:Problemas}}: um vão demasiado perto da extremidade de uma parede ou de outro vão, uma padieira que não cabe sob as travessas superiores, uma peça mais comprida do que o material mais comprido.

O painel {{ui:Problemas}} também lista **Interfaces (LOD 350)** para painéis de parede e paredes de betão: um vão que passa a extremidade ou o topo da sua parede, dois vãos que se sobrepõem, e um vão numa parede de betão mais largo do que 1000 mm sem varão de reforço do vão. São conselhos, com as mesmas regras que a auditoria do BimCraft executa; a largura é o valor inicial do CadCraft, não uma norma.
