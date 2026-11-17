---
title: Adicionar chapas de base e chumbadouros
summary: Coloque uma chapa de base soldada com quatro chumbadouros sob um pilar, defina as suas dimensões e copie-a para todos os pilares semelhantes.
keywords: chapa de base, chapa-base, chumbadouros, parafusos de ancoragem, parafusos de fixação, base do pilar, parafusos de fundação, semelhantes
from: 619ebc64
---

Uma ligação com chapa de base coloca uma chapa sob o pilar, encurta o pilar pela espessura da chapa, solda os dois e acrescenta quatro chumbadouros através de furos na chapa.

:::warning
As dimensões são valores iniciais, não um projeto. O DetailCraft não verifica a pressão de apoio, a resistência dos chumbadouros nem o embebimento.
:::

## Adicionar uma chapa de base

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique num pilar. Tem de ser vertical.
2. Escolha {{ui:Chapa de base}} no grupo {{ui:Ligar}}, ou {{ui:Adicionar uma chapa de base}} no painel {{ui:Propriedades}}.
3. A barra de estado indica "Chapa de base adicionada com quatro chumbadouros." A nova ligação fica selecionada.

Um pilar pode ter uma chapa de base. Se já tiver uma, a barra de estado indica "Este pilar já tem uma chapa de base."

## Alterar

Selecione a chapa de base (clique na chapa ou num chumbadouro). Em {{ui:Chapa, parafusos e soldadura (mm)}}:

| Definição | Predefinido | O que faz |
|---|---|---|
| Espessura da chapa | 25 | O pilar é encurtado por este valor |
| Comprimento da chapa | 450 | Ao longo da profundidade do pilar |
| Largura da chapa | 400 | Transversalmente ao pilar |
| Diâmetro do chumbadouro | 20 | Dimensão do chumbadouro |
| Diâmetro do furo | 33 | Furo na chapa |
| Classe do parafuso | F1554 Gr 36 | A classe do chumbadouro, como texto |
| Espaçamento dos chumbadouros (em profundidade) | 350 | Entre os centros dos chumbadouros, ao longo do comprimento da chapa |
| Espaçamento dos chumbadouros (transversal) | 300 | Entre os centros dos chumbadouros, transversalmente |
| Saída do chumbadouro acima da chapa | 100 | Do topo da chapa ao topo do chumbadouro |
| Embebimento do chumbadouro abaixo da chapa | 450 | Da face inferior da chapa para baixo, no betão |
| Dimensão da soldadura de canto | 8 | Em todo o perímetro da base do pilar |
| Material da chapa | A36 | Texto |
| Folga de grout | 0 | Espaço entre o topo do betão e a face inferior da chapa |
| Reforços | Nenhum | Escolha Nenhum, 2 (alinhados com a alma) ou 4 (também perpendiculares a ela); ver abaixo |
| Espessura, altura do reforço | 12, 150 | |
| Profundidade da cavilha de corte | 0 | Até onde a cavilha desce abaixo da chapa; 0 = sem cavilha |
| Espessura, largura da cavilha de corte | 25, 150 | |
| Anilhas de chapa | Nenhuma | Em cada chumbadouro, ou nenhuma |
| Dimensão, espessura da anilha | 0, 0 | 0 = o mínimo do AISC Design Guide 1 para o chumbadouro |

Comprimento do chumbadouro = embebimento + folga de grout + espessura da chapa + saída. Com os predefinidos, são 575 mm.

## Detalhes da base: grout, reforços, cavilha de corte, anilhas

As quatro opções estão desligadas numa chapa de base nova e nas chapas de base de modelos feitos antes do DetailCraft 0.4.

- **Folga de grout.** A chapa fica esta distância acima do topo do betão, e os chumbadouros ficam mais compridos por esse valor. O AISC Design Guide 1 (2.10) sugere 1 in. num piso acabado e 1½ a 2 in. numa sapata ou pedestal; mais para chapas grandes e chapas com cavilha de corte.
- **Reforços.** Chapas verticais soldadas ao pilar e à chapa, desde a face do pilar até à borda da chapa, como retângulos (ainda sem chanfro nem conicidade). **2** ficam alinhados com a alma, para lá de cada banzo; **4** acrescentam dois perpendiculares à alma, entre os banzos, até às faces laterais da chapa. Num pilar tubular ficam no meio de cada face. Cada um é soldado ao pilar e à chapa dos dois lados.
- **Cavilha de corte.** Uma chapa soldada em todo o perímetro, por baixo da chapa de base, alinhada com a profundidade do pilar e centrada. O DetailCraft avisa se ela não for mais funda do que a folga de grout. Não corta o bolso na sapata; por essa razão, a [deteção de conflitos](topic:clash-check) deixa de fora a cavilha e a sapata.
- **Anilhas de chapa.** Uma anilha quadrada em cada chumbadouro, assente na chapa de base e listada na montagem do pilar como solta (fornecida com o pilar, não soldada: Design Guide 1, 2.6). Com dimensão e espessura 0, o DetailCraft usa a anilha mínima do AISC Design Guide 1, 2.ª ed., Tabela 2.3 para o chumbadouro; um chumbadouro métrico usa a medida em polegadas imediatamente acima (um chumbadouro M20 fica com a linha de 7/8 in.: 2½ in. × 5/16 in.). O painel de propriedades mostra a dimensão usada. O furo da anilha é o diâmetro do chumbadouro + 1/16 in.: é uma escolha do DetailCraft, a tabela não a indica. O DetailCraft avisa quando os chumbadouros podem não sair o suficiente para a anilha e a porca (saída menor do que a espessura da anilha + diâmetro do chumbadouro).

A Tabela 2.3 do Design Guide 1 também recomenda o furo do chumbadouro na chapa: 1-5/16 in. para um chumbadouro de ¾ in., 1-9/16 in. para ⅞ in., 1-13/16 in. para 1 in. O DetailCraft não altera o tamanho do furo definido.

Também aparecem avisos quando os furos dos chumbadouros ficam a menos de 1.2 × o diâmetro do furo da borda da chapa, quando os chumbadouros caem dentro do contorno do pilar, ou quando a chapa é menor do que o pilar.

## Copiar para pilares semelhantes

1. Selecione a chapa de base.
2. Escolha {{ui:Aplicar a semelhantes (n)}}, ou {{ui:Semelhantes}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada pilar vertical com o mesmo perfil, sem chapa de base e que não assente noutro pilar, recebe uma cópia.

## Chapas de base e sapatas

Uma chapa de base não precisa de sapata, e a sapata não conhece a chapa de base por cima: os chumbadouros não ficam ligados às armaduras da sapata. Coloque sapatas com {{ui:Sapata}}; ver [Colocar sapatas com armadura](topic:footings-and-rebar).
