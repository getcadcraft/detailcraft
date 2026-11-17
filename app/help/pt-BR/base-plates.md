---
title: Adicionar chapas de base e chumbadores
summary: Coloque uma chapa de base soldada com quatro chumbadores sob um pilar, defina as dimensões e copie para todos os pilares semelhantes.
keywords: chapa de base, baseplate, chumbadores, parafusos de chumbamento, base de pilar, parafusos de fundação, semelhante
from: 619ebc64
---

Uma ligação com chapa de base coloca uma chapa sob o pilar, reduz o comprimento do pilar pela espessura da chapa, solda os dois juntos e adiciona quatro chumbadores através de furos na chapa.

:::warning
As dimensões são valores iniciais, não um projeto. O DetailCraft não verifica a pressão de apoio, a resistência dos chumbadores nem o embutimento.
:::

## Adicionar uma chapa de base

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique em um pilar. Ele precisa estar na vertical.
2. Escolha {{ui:Chapa de base}} no grupo {{ui:Ligar}}, ou {{ui:Adicionar chapa de base}} no painel {{ui:Propriedades}}.
3. A barra de status diz "Chapa de base adicionada com quatro chumbadores." A nova ligação fica selecionada.

Um pilar pode ter uma chapa de base. Se já tiver uma, a barra de status diz "Este pilar já tem uma chapa de base."

## Alterar

Selecione a chapa de base (clique na chapa ou em um chumbador). Em {{ui:Chapa, parafusos e solda (mm)}}:

| Configuração | Padrão | O que faz |
|---|---|---|
| Espessura da chapa | 25 | O pilar é encurtado por esse valor |
| Comprimento da chapa | 450 | Na profundidade do pilar |
| Largura da chapa | 400 | Transversal ao pilar |
| Diâmetro do chumbador | 20 | Tamanho do chumbador |
| Diâmetro do furo | 33 | Furo na chapa |
| Classe do parafuso | F1554 Gr 36 | A classe do chumbador, como texto |
| Espaçamento dos chumbadores (na profundidade) | 350 | Entre os centros dos chumbadores, ao longo do comprimento da chapa |
| Espaçamento dos chumbadores (transversal) | 300 | Entre os centros dos chumbadores, transversalmente |
| Projeção do chumbador acima da chapa | 100 | Do topo da chapa ao topo do chumbador |
| Embutimento do chumbador abaixo da chapa | 450 | Da face inferior da chapa para dentro do concreto |
| Tamanho da solda de filete | 8 | Em todo o contorno da base do pilar |
| Material da chapa | A36 | Texto |
| Espaço de graute | 0 | Espaço entre o topo do concreto e a face inferior da chapa |
| Enrijecedores | Nenhum | Escolha Nenhum, 2 (alinhados com a alma) ou 4 (também perpendiculares a ela); veja abaixo |
| Espessura, altura do enrijecedor | 12, 150 | |
| Profundidade do dente de cisalhamento | 0 | Até onde o dente desce abaixo da chapa; 0 = sem dente |
| Espessura, largura do dente de cisalhamento | 25, 150 | |
| Arruelas da chapa | Nenhuma | Em cada chumbador, ou nenhuma |
| Tamanho, espessura da arruela | 0, 0 | 0 = o mínimo do AISC Design Guide 1 para o chumbador |

Comprimento do chumbador = embutimento + espaço de graute + espessura da chapa + projeção. Com os padrões, isso dá 575 mm.

## Detalhes da base: graute, enrijecedores, dente de cisalhamento, arruelas

Os quatro estão desligados em uma nova chapa de base, e em chapas de base de modelos feitos antes do DetailCraft 0.4.

- **Espaço de graute.** A chapa fica esta distância acima do topo do concreto, e os chumbadores ficam mais longos nesse mesmo valor. O AISC Design Guide 1 (2.10) sugere 1 in. sobre piso acabado e 1½ a 2 in. sobre sapata ou pilar de concreto; mais para chapas grandes e chapas com dente de cisalhamento.
- **Enrijecedores.** Chapas verticais soldadas ao pilar e à chapa, da face do pilar até a borda da chapa, como retângulos (ainda sem chanfro ou conicidade). **2** ficam alinhados com a alma, além de cada mesa; **4** acrescentam dois perpendiculares à alma, entre as mesas, até as laterais da chapa. Em pilar tubular, ficam no meio de cada face. Cada um é soldado ao pilar e à chapa dos dois lados.
- **Dente de cisalhamento.** Uma chapa soldada em todo o contorno sob a chapa de base, alinhada com a profundidade do pilar e centralizada. O DetailCraft avisa se ele não for mais profundo que o espaço de graute. Ele não corta a cavidade na sapata; por isso, a [verificação de interferência](topic:clash-check) deixa o dente e a sapata de fora.
- **Arruelas da chapa.** Uma arruela quadrada em cada chumbador, apoiada sobre a chapa de base, listada na montagem do pilar como solta (entregue com o pilar, não soldada: Design Guide 1, 2.6). Com tamanho e espessura 0, o DetailCraft usa a menor arruela do AISC Design Guide 1, 2ª ed., Tabela 2.3 para o chumbador; um chumbador métrico usa o próximo tamanho em polegadas (um chumbador M20 recebe a linha de 7/8 in.: 2½ in. × 5/16 in.). O painel de propriedades mostra o tamanho usado. O furo da arruela é o diâmetro do chumbador + 1/16 in.: essa é uma escolha do DetailCraft, pois a tabela não dá um valor. O DetailCraft avisa quando os chumbadores podem não sobressair o suficiente para a arruela e a porca (projeção menor que espessura da arruela + diâmetro do chumbador).

O Design Guide 1, Tabela 2.3, também recomenda o furo do chumbador na chapa: 1-5/16 in. para chumbador de ¾ in., 1-9/16 in. para ⅞ in., 1-13/16 in. para 1 in. O DetailCraft não altera o tamanho do seu furo.

Os avisos também aparecem quando os furos dos chumbadores ficam a menos de 1.2 × o diâmetro do furo da borda da chapa, quando os chumbadores caem dentro do contorno do pilar, ou quando a chapa é menor que o pilar.

## Copiar para pilares semelhantes

1. Selecione a chapa de base.
2. Escolha {{ui:Aplicar a semelhantes (n)}}, ou {{ui:Semelhante}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}.
3. Cada pilar na vertical com o mesmo perfil, sem chapa de base e que não esteja apoiado em outro pilar, recebe uma cópia.

## Chapas de base e sapatas

Uma chapa de base não precisa de sapata, e a sapata não conhece a chapa de base acima dela: os chumbadores não são amarrados às barras da sapata. Insira sapatas com {{ui:Sapata}}; veja [Inserir sapatas com armadura](topic:footings-and-rebar).
