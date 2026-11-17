---
title: Chapas de cisalhamento
summary: Parafuse a alma de uma viga em uma chapa soldada na fábrica a uma mesa ou alma de pilar, também onde a viga encontra o pilar em ângulo na planta ou em declive.
keywords: chapa de cisalhamento, chapa simples, chapa de aleta, ligação simples, ligação de alma, oblíqua, com inclinação, em declive, viga inclinada, parafusada, conectar
from: 18afc8ab
---

Uma chapa de cisalhamento (chapa simples, chapa de aleta) é uma chapa soldada ao pilar na fábrica; na obra, a alma da viga é parafusada nela com uma fileira vertical de parafusos. O DetailCraft posiciona a chapa, recorta a viga para afastá-la do pilar, fura a chapa e a alma da viga, adiciona os parafusos e a solda, e avisa sobre distâncias à borda e encaixe.

## Onde funciona

- Uma viga (perfil I ou U) cuja extremidade está na linha de um pilar perfil I **vertical**, encontrando a **mesa** ou a **alma** dele.
- **Reta, oblíqua na planta ou em declive**: a chapa segue a alma da viga, e a viga é recortada para que seu canto mais próximo mantenha a folga até o pilar. Uma viga subindo ou descendo com mais de 60° é recusada.

## Adicionar chapas de cisalhamento

1. Selecione a viga.
2. No grupo {{ui:Ligar}}, abra {{ui:Mais}} e escolha {{ui:Chapas de cisalhamento}} (ou escolha {{ui:Adicionar chapas de cisalhamento}} no painel {{ui:Propriedades}}).
3. Cada extremidade livre da viga que encontra um pilar recebe uma chapa. Cada extremidade de viga recebe uma só conexão: uma chapa de cisalhamento ou uma chapa de extremidade.

Selecione uma chapa (clique nela, ou em um parafuso) para ver e alterar suas configurações. {{ui:Aplicar a similares}} copia-a, como chapa de cisalhamento, para cada ligação parecida que ainda não tem conexão.

## Configurações (mm)

| Configuração | Começa em | Significado |
|---|---|---|
| Espessura da chapa | 10 | A espessura da chapa |
| Largura da chapa | 115 | Quanto a chapa avança para fora da face do pilar, ao longo da viga |
| Diâmetro do parafuso, Diâmetro do furo, Classe do parafuso | 20, 22, A325 | Como nas chapas de extremidade |
| Linhas de parafusos, Passo entre linhas | 3, 75 | Os parafusos na fileira vertical |
| Distância à borda (parafusos superior e inferior) | 38 | Dos parafusos superior e inferior até as extremidades da chapa; a chapa tem profundidade de linhas × passo + 2 × este valor |
| Grupo de parafusos elevado em | 0 | 0 centraliza os parafusos na altura da viga |
| Folga até o pilar | 13 | Folga livre entre o pilar e o canto mais próximo da viga |
| Linha dos parafusos a partir da face do pilar | 65 | Ao longo da viga, da face do pilar até os parafusos |
| Acréscimo ao comprimento do parafuso | 30 | Somado à pega (chapa + alma da viga), arredondado para cima em 5 mm |
| Tamanho do filete de solda | 6 | Dos dois lados da chapa até o pilar |

## Bom saber

- A chapa faz parte da montagem do pilar (soldada na fábrica); a montagem da viga tem apenas os furos.
- Uma viga oblíqua ou em declive é recortada mais para trás do que uma reta, para que o canto mais próximo mantenha a folga. O DetailCraft corta as vigas em esquadro: o fabricante corta a extremidade conforme o necessário. A borda da chapa junto ao pilar também é desenhada em esquadro.
- O DetailCraft não verifica resistência. Os avisos usam os mínimos da EN 1993-1-8 Tabela 3.3 para distâncias à borda e passo, e avisam quando a chapa é mais profunda que a alma da viga entre seus filetes, ou quando os parafusos ficam próximos demais da extremidade cortada da viga.
- A [verificação de interferência](topic:clash-check) deixa de fora uma chapa e as barras que ela liga: elas devem se encontrar.
