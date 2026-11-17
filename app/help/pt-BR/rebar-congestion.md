---
title: Mapa de congestionamento de armadura
summary: Veja o quanto a armadura deixa cada fundação apertada para o concreto passar, com o agregado e o vibrador que você informar.
keywords: armadura, congestionamento, espaçamento, espaçamento livre, lançamento do concreto, agregado, vibrador, barras de espera, ganchos, fundação, malha
from: 40d029e6
---

A guia {{ui:Congestionamento}} desenha um mapa de calor de cada fundação vista de cima. Azul-claro é livre; amarelo e laranja estão ficando apertados; vermelho está mais apertado do que as barras exigem. Células escuras são as próprias barras.

## O que o mapa mede

O concreto desce pelo aço camada após camada e pode se deslocar lateralmente entre as camadas. Assim, em cada ponto o mapa toma a menor folga livre em qualquer camada: entre as barras da malha inferior, entre a camada seguinte de barras, e entre as pernas dos ganchos das barras de espera no topo. As barras de espera atravessam todas elas.

## O que é apertado

A exigência é o maior valor entre 25 mm e o diâmetro da barra (ACI 318-19 25.2.1), ou, para barras BS 4449, o maior valor entre o diâmetro da barra e 20 mm (EN 1992-1-1 8.2). Duas caixas a aumentam:

- {{ui:Maior agregado}}: a exigência passa a ser 4/3 do tamanho do agregado (ACI) ou o agregado mais 5 mm (EN).
- {{ui:Cabeça do vibrador}}: a exigência é pelo menos o diâmetro da cabeça.

Ambas começam em 0, que significa desconhecido: o DetailCraft não conhece o seu traço nem a sua bomba.

## Problemas

Uma fundação com um ponto mais apertado que a exigência é listada no painel {{ui:Problemas}}, com a abertura encontrada e a abertura exigida. {{ui:Selecionar}} ao lado de um mapa seleciona a fundação.

O mapa não enxerga amarrações, luvas, dutos nem as próprias barras do pilar.
