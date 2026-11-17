---
title: Ligar vigas a pilares com chapas de topo
summary: Acrescente chapas de topo aparafusadas onde uma viga encontra o banzo ou a alma de um pilar, defina a chapa, os parafusos e a soldadura, e copie a ligação para todas as juntas semelhantes.
keywords: chapa de topo, endplate, ligação de momento, ligação aparafusada, junta, parafusos, soldadura, chapa de topo prolongada, rasante, semelhantes, copiar ligação, componente
from: 21e028b2
---

Uma ligação com chapa de topo solda uma chapa à extremidade da viga e aparafusa-a ao banzo ou à alma do pilar. O DetailCraft posiciona a chapa, recua a viga, fura a chapa e o banzo do pilar de forma coincidente, acrescenta os parafusos e a soldadura, e verifica as distâncias às bordas e os espaçamentos.

:::warning
O DetailCraft não dimensiona ligações. As definições são valores de partida para alterar; nada verifica a resistência. Os avisos de bordas e espaçamentos usam os mínimos do Quadro 3.3 da EN 1993-1-8, que podem diferir das regras que segue.
:::

## O que pode ligar

- Uma viga **horizontal** (as duas extremidades à mesma altura), de pé (rotação 0), com perfil em I.
- Ao **banzo** ou à **alma** de um pilar em I **vertical**, em esquadria.
- A extremidade da viga tem de estar sobre a linha do pilar, entre a base e o topo do pilar.

Vigas enviesadas ou inclinadas e secções que não são em I são recusadas, com um motivo: use [chapas de corte](topic:shear-tabs) para esses casos. Numa alma, a chapa e os banzos da viga têm de caber entre os banzos do pilar; o DetailCraft avisa quando não cabem.

:::tip
Com rotação 0, os banzos de um pilar ficam virados para a direção da grelha numerada (x). Uma viga que vai de A a B encontra a alma, e recebe uma chapa de topo na alma.
:::

## Adicionar chapas de topo a uma viga

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique na viga.
2. Escolha {{ui:Chapas de topo}} no grupo {{ui:Ligar}}, ou {{ui:Adicionar chapas de topo}} no painel {{ui:Propriedades}}.
3. Cada extremidade livre da viga que encontra um banzo ou uma alma de pilar em esquadria recebe uma chapa. A barra de estado diz «2 chapas de topo adicionadas. Selecione uma para alterar a sua chapa, parafusos e soldadura; Semelhantes copia-a para juntas como esta.»
4. A primeira chapa de topo nova fica selecionada, e as suas definições aparecem no painel {{ui:Propriedades}}.

Se nada acontecer, leia a barra de estado:

- «Esta viga não termina sobre uma linha de pilar. As chapas de topo vão onde a extremidade de uma viga encontra um pilar vertical.»
- «Esta viga encontra um pilar em ângulo ou está inclinada: as chapas de topo são feitas para juntas em esquadria e horizontais. Use Chapas de corte.»
- «Ambas as extremidades já têm ligações.»

## Alterar a chapa, os parafusos e a soldadura

Clique na chapa de topo (ou num dos seus parafusos) para selecionar a ligação. Em {{ui:Chapa, parafusos e soldadura (mm)}}:

| Definição | Predefinido | O que faz |
|---|---|---|
| Espessura da chapa | 20 | A espessura da chapa; também o quanto a viga é recuada para lá do banzo |
| Largura da chapa | 180 | Transversalmente à junta |
| Prolongamento acima da viga | 0 | Acima do banzo superior; acima de 0 faz uma chapa de topo prolongada |
| Prolongamento abaixo da viga | 0 | Abaixo do banzo inferior |
| Diâmetro do parafuso | 20 | Dimensão nominal do parafuso |
| Diâmetro do furo | 22 | A sua folga de furo na chapa e no banzo do pilar |
| Classe do parafuso | A325 | Texto; impresso na lista de materiais |
| Linhas de parafusos | 4 | Linhas de dois parafusos, centradas na altura da chapa |
| Passo entre linhas | 75 | Espaçamento vertical entre linhas |
| Entre-eixos | 100 | Espaçamento horizontal entre os dois parafusos de uma linha |
| Folga do comprimento do parafuso | 30 | Acrescentada ao aperto para a porca, a anilha e a rosca; ver abaixo |
| Tamanho do cordão de soldadura | 8 | Em todo o perímetro da extremidade da viga |
| Material da chapa | A36 | Texto |

Escreva um novo valor e prima {{key:Enter}} ou {{key:Tab}}. A chapa, os furos, os parafusos e o comprimento de corte da viga atualizam-se de imediato. Cada alteração é um passo de anulação.

Abaixo das definições vê o que a ligação faz:

- {{ui:Parafusos}}: por exemplo, «8 × 20 × 70 A325 (aperto 36.2)».
- {{ui:Soldadura}}: tamanho, onde e o seu comprimento.
- {{ui:Chapa}}: o seu tamanho e a sua marca de peça.

### Como se calculam os números

- A viga é recuada de metade da altura do pilar (numa alma: metade da espessura da alma) mais a espessura da chapa, para que a chapa assente na face.
- A altura da chapa é a altura da viga mais os dois prolongamentos.
- Comprimento do parafuso = aperto (espessura da chapa + espessura do banzo ou da alma do pilar) + folga, arredondado para o múltiplo de 5 mm seguinte.
- O comprimento de soldadura indicado é o perímetro da secção da viga.

### Avisos

A ligação continua a ser construída, mas estes avisos aparecem por baixo dela e no separador {{ui:Problemas}}:

- Linhas de parafusos ou parafusos mais próximos da borda da chapa do que 1.2 × o diâmetro do furo.
- Passo entre linhas abaixo de 2.2 × o diâmetro do furo, ou entre-eixos abaixo de 2.4 × o diâmetro do furo.
- Furos que entram na alma do pilar ou no seu raio de concordância, ou que saem do banzo do pilar.
- Uma chapa mais larga do que o banzo do pilar, ou (numa alma) mais larga do que o espaço entre os banzos; banzos da viga que não cabem entre eles.
- Uma linha de parafusos demasiado perto de um banzo da viga, ou um entre-eixos demasiado apertado para a alma da viga e a sua soldadura.

## Copiar para todas as juntas semelhantes

1. Selecione a ligação que configurou.
2. Escolha {{ui:Aplicar a semelhantes (n)}} no painel {{ui:Propriedades}}, ou {{ui:Semelhantes}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}. O número entre parênteses é o número de juntas que a receberão.
3. Cada junta com o mesmo perfil de viga e de pilar, com a viga na mesma face, que ainda não tenha ligação recebe uma cópia com as mesmas definições. A barra de estado diz quantas.

As cópias são independentes: alterar uma mais tarde não altera as outras. As juntas que já têm uma ligação ficam como estão; elimine-as primeiro se quiser substituí-las.

## Mover e eliminar

As ligações são refeitas a partir das suas definições sempre que o modelo muda, por isso mover ou redimensionar uma viga ou um pilar arrasta consigo as suas chapas de topo. Se uma alteração fizer com que a junta deixe de encaixar, a ligação mantém-se no modelo e o separador {{ui:Problemas}} diz porquê, por exemplo «A extremidade da viga já não está sobre a linha do pilar.»

Para eliminar uma ligação, selecione-a e prima {{key:Delete}}. Eliminar a viga ou o pilar elimina também as respetivas ligações.

Seguinte: [Adicionar chapas de base e chumbadouros](topic:base-plates).
