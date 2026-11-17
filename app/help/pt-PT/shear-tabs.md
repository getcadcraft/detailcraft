---
title: Cutelos
summary: Aparafusar a alma de uma viga a uma chapa soldada em fábrica a um banzo ou a uma alma de pilar, também quando a viga encontra o pilar em ângulo, em planta ou com inclinação.
keywords: cutelo, chapa simples, chapa de aleta, ligação simples, ligação pela alma, oblíquo, inclinado, viga em ângulo, aparafusado, ligar
from: 18afc8ab
---

Um cutelo (chapa simples, chapa de aleta) é uma chapa soldada ao pilar em fábrica; em obra, a alma da viga é aparafusada a ela com uma fila vertical de parafusos. O DetailCraft coloca o cutelo, corta a viga para a afastar do pilar, fura o cutelo e a alma da viga, acrescenta os parafusos e a soldadura, e avisa sobre as distâncias às bordas e o encaixe.

## Onde funciona

- Uma viga (perfil em I ou em U) cuja extremidade fica na linha de um pilar de perfil em I **vertical**, encontrando o seu **banzo** ou a sua **alma**.
- **Quadrada, oblíqua em planta, ou inclinada**: o cutelo segue a alma da viga, e a viga é cortada para que o seu canto mais próximo mantenha a folga ao pilar. Uma viga que sobe ou desce a mais de 60° é recusada.

## Adicionar cutelos

1. Selecione a viga.
2. No grupo {{ui:Ligar}}, abra {{ui:Mais}} e escolha {{ui:Cutelos}} (ou escolha {{ui:Adicionar cutelos}} no painel {{ui:Propriedades}}).
3. Cada extremidade livre da viga que encontra um pilar recebe um cutelo. Cada extremidade de viga recebe uma só ligação: um cutelo ou uma chapa de topo.

Selecione um cutelo (clique nele, ou num parafuso) para ver e alterar as suas definições. {{ui:Aplicar a semelhantes}} copia-o, como cutelo, para cada ligação semelhante que ainda não tenha ligação.

## Definições (mm)

| Definição | Começa em | Significado |
|---|---|---|
| Espessura da chapa | 10 | A espessura do cutelo |
| Largura da chapa | 115 | Até onde o cutelo sai da face do pilar, ao longo da viga |
| Diâmetro do parafuso, Diâmetro do furo, Qualidade do parafuso | 20, 22, A325 | Como nas chapas de topo |
| Filas de parafusos, Passo entre filas | 3, 75 | Os parafusos da fila vertical |
| Distância à borda (parafusos superiores e inferiores) | 38 | Dos parafusos de cima e de baixo às extremidades do cutelo; o cutelo tem de altura filas × passo + 2 × este valor |
| Grupo de parafusos elevado em | 0 | 0 centra os parafusos na altura da viga |
| Folga ao pilar | 13 | Folga livre entre o pilar e o canto mais próximo da viga |
| Linha dos parafusos a partir da face do pilar | 65 | Ao longo da viga, da face do pilar até aos parafusos |
| Folga do comprimento do parafuso | 30 | Somada ao aperto (cutelo + alma da viga), arredondada para cima a 5 mm |
| Tamanho do cordão de ângulo | 6 | De ambos os lados do cutelo até ao pilar |

## Bom saber

- O cutelo faz parte da montagem do pilar (soldado em fábrica); a montagem da viga tem apenas os seus furos.
- Uma viga oblíqua ou inclinada é cortada mais para trás do que uma quadrada, para que o seu canto mais próximo mantenha a folga. O DetailCraft corta as vigas em quadrado: o fabricante corta a extremidade conforme necessário. A aresta do cutelo junto ao pilar também é desenhada em quadrado.
- O DetailCraft não verifica a resistência. Os avisos usam os valores mínimos da EN 1993-1-8, Tabela 3.3, para as distâncias às bordas e o passo, e indicam quando o cutelo é mais alto do que a alma da viga entre as suas concordâncias, ou quando os parafusos ficam demasiado perto da extremidade cortada da viga.
- A [verificação de conflitos](topic:clash-check) deixa de fora um cutelo e as barras que une: devem encontrar-se.
