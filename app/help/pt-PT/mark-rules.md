---
title: Regras das marcas
summary: Quando duas peças ou duas montagens partilham exatamente uma marca, como as marcas são numeradas e como funcionam as marcas das sapatas e dos varões.
keywords: marcas, numeração, marca da peça, marca de montagem, marca de peça, prefixo, tolerância, peças idênticas, marcas dos varões, marcas das sapatas
from: ce02c98e
---

O DetailCraft recalcula todas as marcas após cada alteração. Nada é guardado, por isso as marcas descrevem sempre o modelo tal como está agora. Veja [Verificar as marcas e a lista de materiais](topic:marks-and-bom) para saber como as usar.

## Marcas das peças

Duas peças partilham uma marca da peça quando todas estas condições coincidem:

1. O tipo de peça (viga, pilar, contraventamento ou chapa).
2. O nome do perfil (sem distinguir maiúsculas).
3. O material (sem distinguir maiúsculas).
4. O comprimento de corte, com 1 mm de tolerância.
5. Cada furo: face, posição ao longo e transversal, dentro de 1 mm, e diâmetro dentro de 0.1 mm.
6. Cada recorte: extremidade, lado, comprimento e profundidade, dentro de 1 mm.

O {{ui:Name}} do elemento não conta. Também não contam a sua posição no modelo, a sua rotação, nem o sentido em que foi desenhado, desde que a própria peça seja a mesma.

### Peças viradas

Uma peça é comparada em todas as formas como pode ser virada que façam coincidir a sua secção consigo própria. Se alguma delas a tornar igual a outra peça, as duas partilham uma marca.

| Forma | Viragens que contam |
|---|---|
| Perfis I, HSS retangulares, chapas | De ponta a ponta (em torno do eixo vertical), de ponta a ponta (em torno do eixo horizontal), e de cabeça para baixo em torno do seu próprio comprimento |
| Perfis U | De ponta a ponta em torno do eixo horizontal apenas, para que a alma fique do mesmo lado |
| Cantoneiras, HSS redondos | Nenhuma: comparados como colocados |

Assim, uma viga com um furo perto da extremidade esquerda coincide com uma viga com o mesmo furo perto da extremidade direita, e um pilar com furos num banzo coincide com um pilar com os mesmos furos no outro banzo.

### Numeração

| Tipo | Prefixo da peça | Prefixo da montagem |
|---|---|---|
| Pilar | c | C |
| Viga | b | B |
| Contraventamento | br | BR |
| Chapa (colocada, chapa de topo ou chapa de base) | p | P |

As marcas são numeradas a partir de 1 dentro de cada prefixo. A ordem é: pilares, depois vigas, contraventamentos e chapas; dentro de cada tipo, pelo nome do perfil em ordem natural (W8x10 antes de W12x26); e depois as peças mais longas primeiro.

Como a numeração segue esta ordem, acrescentar ou alterar uma peça pode deslocar os números de outras.

## Marcas de montagem

- Cada peça que não está soldada a outra peça é a peça principal da sua própria montagem.
- As chapas de topo são soldadas à respetiva viga, e as chapas de base ao respetivo pilar, por isso pertencem à montagem desse elemento.
- Duas montagens partilham uma marca quando as suas peças principais partilham uma marca da peça e as peças ligadas têm as mesmas marcas nos mesmos sítios (dentro de 1 mm), admitindo as mesmas viragens da peça principal.
- O prefixo da montagem segue a peça principal: uma viga com duas chapas de topo é uma montagem B.

As chapas colocadas com a ferramenta {{ui:Chapa}} não estão soldadas a nada, por isso cada uma é a sua própria montagem P.

## Marcas das sapatas

Sapatas com o mesmo comprimento, largura, profundidade, betão, malha inferior e armaduras de espera partilham uma marca: F1, F2 … pela ordem em que foram colocadas. A posição e a rotação não contam.

## Marcas dos varões

Varões com o mesmo tamanho, forma e dimensões A, B e C (arredondadas ao milímetro) partilham uma marca em todas as sapatas. A marca é o número do varão, F, e um contador por tamanho de varão: 5F1, 5F2, 6F1. Um varão no sentido longo e um varão no sentido curto de uma sapata quadrada são o mesmo varão e partilham uma marca; a coluna {{ui:Usado em}} do mapa indica as duas utilizações.
