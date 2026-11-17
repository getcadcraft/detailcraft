---
title: Regras de marcação
summary: Quando exatamente duas peças ou duas montagens compartilham uma marca, como as marcas são numeradas e como funcionam as marcas de sapatas e de barras.
keywords: marcas, numeração, marca da peça, marca da montagem, prefixo, tolerância, peças idênticas, marcas de barras, marcas de sapatas
from: ce02c98e
---

O DetailCraft recalcula cada marca após cada alteração. Nada é armazenado, por isso as marcas sempre descrevem o modelo como ele está agora. Veja [Conferir marcas e a lista de materiais](topic:marks-and-bom) para saber como usá-las.

## Marcas das peças

Duas peças compartilham uma marca de peça quando todos estes itens coincidem:

1. O tipo da peça (viga, pilar, contraventamento ou chapa).
2. O nome do perfil (sem diferenciar maiúsculas de minúsculas).
3. O material (sem diferenciar maiúsculas de minúsculas).
4. O comprimento de corte, com diferença de até 1 mm.
5. Cada furo: face, posição ao longo e transversal, com diferença de até 1 mm, e diâmetro com diferença de até 0.1 mm.
6. Cada rebaixo: extremidade, lado, comprimento e profundidade, com diferença de até 1 mm.

O {{ui:Nome}} da barra não conta. Também não contam sua posição no modelo, sua rotação nem o sentido em que foi desenhada, desde que a própria peça seja a mesma.

### Peças viradas

Uma peça é comparada em todas as formas de virá-la que levam sua seção sobre si mesma. Se alguma delas a fizer coincidir com outra peça, elas compartilham uma marca.

| Forma | Viradas que contam |
|---|---|
| Perfis I, HSS retangular, chapas | Ponta a ponta (em torno do eixo vertical), ponta a ponta (em torno do eixo horizontal), e de cabeça para baixo em torno do próprio comprimento |
| Perfis U | Ponta a ponta somente em torno do eixo horizontal, para que a alma fique do mesmo lado |
| Cantoneiras, HSS circular | Nenhuma: comparadas como posicionadas |

Assim, uma viga com um furo perto da extremidade esquerda coincide com uma viga com o mesmo furo perto da extremidade direita, e um pilar com furos em uma mesa coincide com um pilar com os mesmos furos na outra mesa.

### Numeração

| Tipo | Prefixo da peça | Prefixo da montagem |
|---|---|---|
| Pilar | c | C |
| Viga | b | B |
| Contraventamento | br | BR |
| Chapa (posicionada, de extremidade ou de base) | p | P |

As marcas são numeradas a partir de 1 dentro de cada prefixo. A ordem é: pilares, depois vigas, contraventamentos e chapas; dentro de um tipo, pelo nome do perfil em ordem natural (W8x10 antes de W12x26); depois as peças mais longas primeiro.

Como a numeração segue essa ordem, adicionar ou alterar uma peça pode mudar os números de outras.

## Marcas de montagem

- Cada peça que não está soldada a outra peça é a peça principal da sua própria montagem.
- Chapas de extremidade são soldadas à sua viga, e chapas de base ao seu pilar, por isso pertencem à montagem dessa barra.
- Duas montagens compartilham uma marca quando suas peças principais compartilham uma marca de peça e suas peças ligadas têm as mesmas marcas nos mesmos lugares (com diferença de até 1 mm), admitindo as mesmas viradas da peça principal.
- O prefixo da montagem segue a peça principal: uma viga com duas chapas de extremidade é uma montagem B.

As chapas que você posiciona com a ferramenta {{ui:Chapa}} não são soldadas a nada, por isso cada uma é sua própria montagem P.

## Marcas de sapatas

Sapatas com o mesmo comprimento, largura, profundidade, texto do concreto, malha inferior e barras de espera compartilham uma marca: F1, F2 … na ordem em que foram posicionadas. Posição e rotação não contam.

## Marcas de barras

Barras com o mesmo tamanho, forma e dimensões A, B e C (arredondadas ao milímetro) compartilham uma marca em todas as sapatas. A marca é o número da barra, F, e um contador por tamanho de barra: 5F1, 5F2, 6F1. Uma barra no sentido longo e uma barra no sentido curto de uma sapata quadrada são a mesma barra e compartilham uma marca; a coluna {{ui:Usada em}} da tabela de dobramento lista os dois usos.
