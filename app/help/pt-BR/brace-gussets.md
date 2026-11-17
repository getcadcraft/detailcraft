---
title: Chapas de ligação de contraventamento
summary: Conecte a extremidade de um contraventamento a um pilar ou viga com uma chapa de ligação: cantoneiras e barras chatas parafusadas, tubos com ranhura e soldados.
keywords: chapa de ligação, gusset, contraventamento, travamento vertical, contraventamento em cantoneira, barra chata, tirante, contraventamento HSS, chapa de faca, tubo ranhurado, ligar
from: 22f6598d
---

Uma chapa de ligação de contraventamento é uma chapa soldada em fábrica ao pilar (ou viga) onde o contraventamento chega, no plano do contraventamento. O DetailCraft recorta o contraventamento para que fique livre de tudo na ligação, posiciona e dimensiona a chapa de ligação e a une ao contraventamento: uma **cantoneira** ou uma **barra chata** com uma linha de parafusos, ou um **tubo** (HSS quadrado, retangular ou redondo) encaixado com ranhura sobre a chapa de ligação e soldado.

## Onde funciona

- A extremidade do contraventamento fica sobre a linha de um pilar ou de uma viga (a até 1 mm), e o contraventamento não está quase paralelo a essa linha. O pilar é o apoio quando existe; caso contrário, a viga.
- A chapa de ligação fica no plano do contraventamento e na linha do apoio. Uma **cantoneira** precisa ter uma aba nesse plano, e uma **barra chata**, a sua face: gire o contraventamento (sua {{ui:Rotação (°)}}) até isso acontecer. Com as abas da cantoneira a 45° do plano, o DetailCraft informa e não constrói nada.
- Perfis I e perfis U como contraventamentos não são ligados.

## Adicionar chapas de ligação

1. Selecione um ou mais contraventamentos.
2. Escolha {{ui:Chapa de ligação}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada extremidade dos contraventamentos selecionados que chega a um pilar ou viga e não tem chapa de ligação recebe uma.

Selecione uma chapa de ligação (clique na chapa) para alterar suas configurações. {{ui:Aplicar a semelhantes (n)}} a copia para cada extremidade livre de contraventamento com os mesmos perfis de contraventamento e de apoio.

## O que o DetailCraft calcula

- **Recorte.** O contraventamento é encurtado nessa extremidade até que seus cantos fiquem livres, por {{ui:Folga do contraventamento}} (25), de cada barra na ligação (ao lado dela, ou além da sua extremidade quando a barra termina ali) e de uma chapa de base sob o pilar.
- **Parafusos (cantoneiras, barras chatas).** {{ui:Parafusos}} (3) em uma linha ao longo do contraventamento, o primeiro a {{ui:Distância da extremidade ao parafuso}} (40) da extremidade cortada, com {{ui:Passo dos parafusos}} (75). Em uma cantoneira, eles passam pela aba no plano da chapa de ligação, a {{ui:Gramil dos parafusos}} do talão (0 = o meio da aba); em uma barra chata, no seu eixo central (ou deslocados dele pelo gramil). Pega do parafuso = aba ou barra chata + chapa de ligação.
- **A chapa de ligação.** Um retângulo: da face do apoio para fora, além do último parafuso pela distância da extremidade, e ao longo do apoio o quanto os parafusos precisarem. Ela fica encostada no dorso da aba da cantoneira (ou na face da barra chata). Para um tubo, ela passa pelo meio do tubo, sob {{ui:Transpasse do tubo na chapa de ligação}} (200) do tubo, com espaço para as soldas.
- **Ligações.** Na base de um pilar, a chapa de ligação desce até a chapa de base. Onde uma viga cruza a ligação (um contraventamento subindo até um canto viga-pilar), a chapa de ligação fica por baixo ou por cima da viga. Se isso deixar os parafusos ou o transpasse sem a distância da extremidade, o DetailCraft avisa.
- **Soldas.** A chapa de ligação ao apoio, dos dois lados. Um tubo à chapa de ligação, quatro linhas ao longo do transpasse.

## Bom saber

- A chapa de ligação pertence à montagem do apoio (soldada em fábrica). O contraventamento sai com os furos já feitos e vai para o seu próprio arquivo NC.
- A ranhura de um tubo não é cortada no modelo; a [verificação de interferência](topic:clash-check) deixa o contraventamento e a sua chapa de ligação de fora.
- A chapa de ligação não é soldada a uma viga que ela toque. Chapas de ligação de canto soldadas tanto à viga quanto ao pilar, cantos chanfrados e o layout do ponto de trabalho de uma ligação pelo Uniform Force Method ainda não estão implementados.
- O DetailCraft não projeta a chapa de ligação nem os parafusos (sem verificações de resistência); os avisos são sobre espaçamento e encaixe.
