---
title: Goussets de contraventamento
summary: Ligue a extremidade de um contraventamento a um pilar ou viga com uma chapa de gousset: cantoneiras e barras chatas aparafusadas, tubos ranhurados e soldados.
keywords: gousset, chapa de gousset, contraventamento, contraventamento vertical, cantoneira de contraventamento, barra chata, tirante, contraventamento HSS, chapa de faca, tubo ranhurado, ligar
from: 22f6598d
---

Um gousset de contraventamento é uma chapa soldada em oficina ao pilar (ou viga) onde o contraventamento assenta, no plano do contraventamento. O DetailCraft corta o contraventamento para libertar tudo na ligação, posiciona e dimensiona o gousset e une o contraventamento a ele: uma **cantoneira** ou uma **barra chata** com uma linha de parafusos, ou um **tubo** (quadrado, retangular ou redondo HSS) encaixado sobre o gousset e soldado.

## Onde funciona

- A extremidade do contraventamento fica sobre a linha de um pilar ou de uma viga (com 1 mm de tolerância), e o contraventamento não é quase paralelo a essa linha. Um pilar é o apoio quando existe; caso contrário, a viga.
- O gousset fica no plano do contraventamento e na linha do apoio. Uma **cantoneira** tem de ter uma aba nesse plano, e uma **barra chata** a sua face: rode o contraventamento (a sua {{ui:Rotação (°)}}) até isso acontecer. Com as abas da cantoneira a 45° do plano, o DetailCraft indica-o e não constrói nada.
- Perfis em I e em U como contraventamentos não são ligados.

## Adicionar goussets

1. Selecione um ou mais contraventamentos.
2. Escolha {{ui:Gousset}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada extremidade dos contraventamentos selecionados que assente num pilar ou viga e não tenha gousset recebe um.

Selecione um gousset (clique na chapa) para alterar as suas definições. {{ui:Aplicar a semelhantes (n)}} copia-o para cada extremidade de contraventamento livre com os mesmos perfis de contraventamento e de apoio.

## O que o DetailCraft calcula

- **Corte.** O contraventamento é encurtado nessa extremidade até os seus cantos ficarem livres, pela {{ui:Folga do contraventamento}} (25), por cada barra na ligação (ao lado dela, ou para lá da sua extremidade quando a barra aí termina) e por uma chapa de base sob o pilar.
- **Parafusos (cantoneiras, barras chatas).** {{ui:Parafusos}} (3) numa linha ao longo do contraventamento, o primeiro a {{ui:Distância à extremidade dos parafusos}} (40) da extremidade cortada, com {{ui:Espaçamento dos parafusos}} (75). Numa cantoneira atravessam a aba no plano do gousset, a {{ui:Afastamento da linha de parafusos}} do talão (0 = meio da aba); numa barra chata, no seu eixo central (ou afastados dele pelo afastamento). Espessura a aparafusar = a aba ou a barra chata + o gousset.
- **O gousset.** Um retângulo: desde a face do apoio, para lá do último parafuso, pela distância à extremidade, e ao longo do apoio o necessário para os parafusos. Assenta contra o dorso da aba da cantoneira (ou a face da barra chata). Num tubo, atravessa o meio do tubo, sob a {{ui:Sobreposição do tubo na chapa de gousset}} (200) do tubo, com espaço para as soldaduras.
- **Ligações.** Na base de um pilar, o gousset desce até à chapa de base. Quando uma viga atravessa a ligação (um contraventamento que sobe até um canto viga-pilar), o gousset fica por baixo ou por cima da viga. Se isso deixar os parafusos ou a sobreposição sem a sua distância à extremidade, o DetailCraft avisa.
- **Soldaduras.** O gousset ao apoio, dos dois lados. Um tubo ao gousset, quatro linhas ao longo da sobreposição.

## Bom saber

- O gousset pertence à montagem do apoio (soldada em oficina). O contraventamento sai com os furos já feitos e vai para o seu próprio ficheiro NC.
- A ranhura de um tubo não é cortada no modelo; a [deteção de conflitos](topic:clash-check) deixa o contraventamento e o seu gousset de fora.
- O gousset não é soldado a uma viga que toque. Goussets de canto soldados à viga e ao pilar, cantos chanfrados e a disposição do ponto de trabalho de uma ligação pelo Uniform Force Method ainda não estão implementados.
- O DetailCraft não dimensiona o gousset nem os parafusos (sem verificações de resistência); os avisos são de espaçamento e de ajuste.
