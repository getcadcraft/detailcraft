---
title: Mapa de congestionamento de armaduras
summary: Veja quão apertadas as armaduras deixam cada sapata para o betão descer, com o agregado e o vibrador que indicar.
keywords: armadura, congestionamento, espaçamento, espaçamento livre, colocação do betão, agregado, vibrador, esperas, ganchos, sapata, malha
from: 40d029e6
---

O separador {{ui:Congestionamento}} desenha um mapa de calor de cada sapata vista de cima. Azul-claro é espaço livre; amarelo e laranja indicam que está a apertar; vermelho é mais apertado do que as armaduras exigem. As células escuras são as próprias barras de armadura.

## O que o mapa mede

O betão desce através do aço camada a camada e pode mover-se lateralmente entre as camadas. Assim, em cada ponto o mapa toma o menor vão livre em qualquer camada: entre as barras da malha inferior, entre a camada seguinte de barras e entre as pernas dos ganchos das barras de espera no topo. As barras de espera atravessam todas elas.

## O que conta como apertado

A exigência é o maior valor entre 25 mm e o diâmetro da barra (ACI 318-19 25.2.1), ou, para barras BS 4449, o maior valor entre o diâmetro da barra e 20 mm (EN 1992-1-1 8.2). Duas caixas aumentam-na:

- {{ui:Maior agregado}}: a exigência passa a ser 4/3 do tamanho do agregado (ACI) ou o agregado mais 5 mm (EN).
- {{ui:Cabeça do vibrador}}: a exigência é pelo menos o diâmetro da cabeça.

Ambas começam em 0, que significa não conhecido: o DetailCraft não conhece a sua mistura nem a sua bomba.

## Problemas

Uma sapata com um ponto mais apertado do que a exigência fica listada no painel {{ui:Problemas}}, com a abertura encontrada e a abertura exigida. {{ui:Selecionar}}, ao lado de um mapa, seleciona a sapata.

O mapa não vê as cintas, os acopladores, as condutas nem as próprias armaduras do pilar.
