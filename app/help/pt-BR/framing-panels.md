---
title: Painéis de estrutura em madeira e aço leve
summary: Monte painéis de parede, piso e cobertura em madeira ou aço leve, com todas as peças, uma lista de corte, um desenho de fabricação e o material a comprar.
keywords: estrutura, madeira, madeira serrada, aço leve, perfil formado a frio, montante, barrote, caibro, verga, montante de vão, montante de ombreira, montante curto, lista de corte, desenho de fabricação, painel
from: 3e38ffb9
---

A guia {{ui:Painéis de estrutura}} monta os painéis que você descreve e fornece o que uma equipe de montagem e uma madeireira pedem. Os painéis são salvos no arquivo do modelo.

:::warning
As dimensões, o espaçamento e as vergas são de sua responsabilidade. O DetailCraft não verifica se um montante nesse espaçamento sustenta essa parede ou se uma verga vence esse vão: isso cabe às tabelas da sua norma e ao seu engenheiro.
:::

## Adicionar um painel

Escolha {{ui:Adicionar uma parede}}, {{ui:Adicionar um piso}} ou {{ui:Adicionar um telhado}}, depois preencha as dimensões em milímetros, o material (madeira ou aço leve) e a seção da peça. As dimensões da madeira são os nomes nominais com suas dimensões reais (2×4 é 38 × 89 mm). Os montantes de aço são nomeados pela altura e pela espessura, por exemplo `C92-1.2`.

## Paredes

Uma parede tem uma travessa inferior, uma ou mais travessas superiores (uma guia, no aço), montantes de extremidade, montantes no espaçamento que você informar e, para cada vão: dois montantes de vão, dois montantes de ombreira, uma verga do tamanho e das lâminas que você escolher, e montantes curtos sobre a verga (e sob o peitoril de uma janela). Informe para cada vão sua distância da extremidade esquerda, sua largura, e o topo e a base do vão bruto medidos a partir do contrapiso; uma porta tem base 0.

## Pisos e coberturas

Um piso tem barrotes ao longo do vão, distribuídos na largura, barrotes de borda nas duas extremidades e, se você marcar, reforços no meio do vão. Um painel de cobertura é de duas águas: um par de caibros no espaçamento que você informar (seu comprimento inclui o beiral ao longo da inclinação) e uma cumeeira.

## O que você obtém

Cada painel mostra suas peças em um desenho em escala com cada peça marcada, uma lista de corte por marca e um total. A tabela {{ui:Material a comprar}} encaixa todos os cortes dos painéis em comprimentos comerciais, os menores que comportam os cortes de cada barra. {{ui:Salvar o desenho de fabricação (SVG)}} grava o desenho; o botão {{ui:CSV}} grava todas as listas de corte e a lista de material.

## Inserir um painel no modelo

Abaixo de cada painel, informe onde ele fica (x, y, z em milímetros e o ângulo) e pressione {{ui:Colocar como barras}}: cada peça se torna uma barra do modelo, com a seção real do seu tamanho e o peso do material (cerca de 500 kg/m³ para a madeira, aço para os montantes). Uma parede segue o ângulo a partir de sua extremidade inferior esquerda, com a base em z; os barrotes de um piso ficam com a face inferior em z; a elevação da empena de uma cobertura segue o ângulo, com z no topo das travessas da parede. Cada lâmina da verga é uma barra lado a lado. Pressionar de novo substitui as barras colocadas antes, e {{ui:Remover as barras colocadas}} as retira; cada ação é uma etapa de desfazer. A análise deixa essas barras de fora: elas não são barras do pórtico de aço.

## Folhas em PDF

{{ui:Folhas em PDF}} salva uma página A3 para cada painel: o painel em escala com cada peça marcada, as dimensões totais, a lista de corte e uma faixa de legenda.

Problemas no painel {{ui:Problemas}}: um vão muito próximo da extremidade de uma parede ou de outro vão, uma verga que não cabe sob as travessas superiores, uma peça maior que o maior comprimento comercial.

O painel {{ui:Problemas}} também lista **Interfaces (LOD 350)** para painéis de parede e paredes de concreto: um vão que ultrapassa a extremidade ou o topo da sua parede, dois vãos que se sobrepõem, e um vão em parede de concreto com mais de 1000 mm de largura sem barra de reforço de abertura. São recomendações, as mesmas regras que a auditoria do BimCraft executa; a largura é o valor inicial do CadCraft, não uma norma.
