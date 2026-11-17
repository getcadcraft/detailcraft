---
title: Ligar vigas a pilares com chapas de extremidade
summary: Adicione chapas de extremidade parafusadas onde uma viga encontra a mesa ou a alma de um pilar, defina a chapa, os parafusos e a solda, e copie a ligação para todas as juntas semelhantes.
keywords: chapa de extremidade, endplate, ligação de momento, ligação parafusada, junta, parafusos, solda, chapa de extremidade estendida, rente, semelhante, copiar ligação, componente
from: 21e028b2
---

Uma ligação com chapa de extremidade solda uma chapa à extremidade da viga e a parafusa à mesa ou à alma do pilar. O DetailCraft posiciona a chapa, recorta a viga, fura a chapa e a mesa do pilar com furos correspondentes, adiciona os parafusos e a solda, e verifica distâncias às bordas e espaçamentos.

:::warning
O DetailCraft não dimensiona ligações. As configurações são valores iniciais para você alterar; nada verifica a resistência. Os avisos de borda e espaçamento usam os mínimos da EN 1993-1-8 Tabela 3.3, que podem ser diferentes das regras que você segue.
:::

## O que ela pode ligar

- Uma viga **nivelada** (as duas extremidades na mesma altura), na vertical (rotação 0), com perfil de seção I.
- Na **mesa** ou na **alma** de um pilar de seção I **vertical**, em esquadro com ele.
- A extremidade da viga deve estar sobre o eixo do pilar, entre a base e o topo do pilar.

Vigas inclinadas ou oblíquas e seções que não são I são recusadas com um motivo: use [chapas de cisalhamento](topic:shear-tabs) para esses casos. Em uma alma, a chapa e as mesas da viga devem caber entre as mesas do pilar; o DetailCraft avisa quando não cabem.

:::tip
Com rotação 0, as mesas de um pilar ficam voltadas na direção dos eixos numerados (x). Uma viga que vai de A a B encontra a alma e recebe uma chapa de extremidade na alma.
:::

## Adicionar chapas de extremidade a uma viga

1. Escolha {{ui:Selecionar}} ({{key:V}}) e clique na viga.
2. Escolha {{ui:Chapas de extremidade}} no grupo {{ui:Ligar}}, ou {{ui:Adicionar chapas de extremidade}} no painel {{ui:Propriedades}}.
3. Cada extremidade livre da viga que encontra uma mesa ou uma alma de pilar em esquadro recebe uma chapa. A barra de status diz "2 chapas de extremidade adicionadas. Selecione uma para alterar sua chapa, seus parafusos e sua solda; Semelhante copia para juntas como ela."
4. A primeira chapa nova fica selecionada, e suas configurações aparecem no painel {{ui:Propriedades}}.

Se nada acontecer, leia a barra de status:

- "Esta viga não termina em um eixo de pilar. As chapas de extremidade vão onde a extremidade de uma viga encontra um pilar vertical."
- "Esta viga encontra um pilar em ângulo ou tem inclinação: as chapas de extremidade são feitas para juntas em esquadro e niveladas. Use Chapas de cisalhamento."
- "Ambas as extremidades já têm ligações."

## Alterar a chapa, os parafusos e a solda

Clique na chapa de extremidade (ou em um de seus parafusos) para selecionar a ligação. Em {{ui:Chapa, parafusos e solda (mm)}}:

| Configuração | Padrão | O que faz |
|---|---|---|
| Espessura da chapa | 20 | A espessura da chapa; também quanto a viga é recortada além da mesa |
| Largura da chapa | 180 | Através da junta |
| Extensão acima da viga | 0 | Acima da mesa superior; acima de 0 cria uma chapa de extremidade estendida |
| Extensão abaixo da viga | 0 | Abaixo da mesa inferior |
| Diâmetro do parafuso | 20 | Tamanho nominal do parafuso |
| Diâmetro do furo | 22 | Sua folga de furo na chapa e na mesa do pilar |
| Classe do parafuso | A325 | Texto; impresso na lista de materiais |
| Linhas de parafusos | 4 | Linhas de dois parafusos, centradas na altura da chapa |
| Passo entre linhas | 75 | Espaçamento vertical entre linhas |
| Bitola | 100 | Espaçamento horizontal entre os dois parafusos de uma linha |
| Acréscimo no comprimento do parafuso | 30 | Somado à pega para a porca, a arruela e a rosca; veja abaixo |
| Tamanho do filete de solda | 8 | Em todo o contorno da extremidade da viga |
| Material da chapa | A36 | Texto |

Digite um novo valor e pressione {{key:Enter}} ou {{key:Tab}}. A chapa, os furos, os parafusos e o comprimento de corte da viga são atualizados de imediato. Cada alteração é uma etapa de desfazer.

Abaixo das configurações, você vê o que a ligação produz:

- {{ui:Parafusos}}: por exemplo, "8 × 20 × 70 A325 (pega 36.2)".
- {{ui:Solda}}: tamanho, onde e seu comprimento.
- {{ui:Chapa}}: seu tamanho e sua marca de peça.

### Como os números são calculados

- A viga é recortada pela metade da altura do pilar (na alma: metade da espessura da alma) mais a espessura da chapa, para que a chapa fique sobre a face.
- A altura da chapa é a altura da viga mais as duas extensões.
- Comprimento do parafuso = pega (espessura da chapa + espessura da mesa ou da alma do pilar) + acréscimo, arredondado para o próximo múltiplo de 5 mm.
- O comprimento de solda mostrado é o perímetro da seção da viga.

### Avisos

A ligação ainda é construída, mas estes aparecem sob ela e na guia {{ui:Problemas}}:

- Linhas de parafusos ou parafusos mais próximos da borda da chapa do que 1.2 × o diâmetro do furo.
- Passo entre linhas abaixo de 2.2 × o diâmetro do furo, ou bitola abaixo de 2.4 × o diâmetro do furo.
- Furos que atingem a alma do pilar ou seu arredondamento, ou que saem da mesa do pilar.
- Uma chapa mais larga que a mesa do pilar ou, em uma alma, mais larga que o espaço entre as mesas; mesas de viga que não cabem entre elas.
- Uma linha de parafusos próxima demais de uma mesa da viga, ou uma bitola apertada demais para a alma da viga e sua solda.

## Copiar para toda junta semelhante

1. Selecione a ligação que você configurou.
2. Escolha {{ui:Aplicar a semelhantes (n)}} no painel {{ui:Propriedades}}, ou {{ui:Semelhante}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}. O número entre colchetes é quantas juntas vão recebê-la.
3. Toda junta com o mesmo perfil de viga e o mesmo perfil de pilar, com a viga entrando na mesma face, que ainda não tem ligação recebe uma cópia com as mesmas configurações. A barra de status informa quantas.

As cópias são independentes: alterar uma depois não altera as outras. Juntas que já têm uma ligação são deixadas como estão; exclua-as primeiro se quiser substituí-las.

## Mover e excluir

As ligações são refeitas a partir de suas configurações sempre que o modelo muda, então mover ou redimensionar uma viga ou um pilar leva consigo suas chapas de extremidade. Se uma mudança significar que a junta não se encaixa mais, a ligação permanece no modelo, e a guia {{ui:Problemas}} diz o motivo, por exemplo, "A extremidade da viga não está mais sobre o eixo do pilar".

Para excluir uma ligação, selecione-a e pressione {{key:Delete}}. Excluir a viga ou o pilar também exclui suas ligações.

Próximo: [Adicionar chapas de base e chumbadores](topic:base-plates).
