---
title: Verificações de construtibilidade
summary: Problemas para aquilo que um detalhista apanha à vista: um parafuso que a chave não alcança, parafusos demasiado próximos para a chave de caixa, soldaduras de ângulo fora dos seus limites de tamanho, soldaduras que a tocha não alcança e tubos que retêm água.
keywords: construtibilidade, chave, chave de caixa, acesso ao parafuso, aperto, tamanho da soldadura, soldadura de ângulo, soldadura mínima, soldadura máxima, água, furo de ventilação, furo de drenagem, galvanização, perfil oco, problemas
from: 72315151
---

O DetailCraft procura quatro tipos de problemas que nenhuma verificação de resistência encontra, e lista-os no painel {{ui:Problemas}}. São avisos e notas a observar, não erros: o modelo continua a ser construído.

## Um parafuso que a chave não alcança

Para cada parafuso, o DetailCraft põe uma chave de caixa sobre a cabeça e sobre a porca. A chave de caixa é um cilindro tão largo como a porca medida de canto a canto, mais uma parede de 4 mm, com 60 mm de comprimento. Se uma alma de viga, uma aba, uma chapa ou um contraventamento estiver dentro desse cilindro, o problema indica a ligação, quantos parafusos, qual a peça que está no caminho e a que distância do parafuso.

A chave de caixa é uma chave de impacto típica. Uma chave de bocas precisa de menos espaço, e uma ferramenta maior precisa de mais. Peça ao seu assistente ligado para executar `constructability_check` com outro `socketLength` para ver como a resposta muda.

## Parafusos demasiado próximos para a chave de caixa

Uma chave de caixa sobre um parafuso não pode tocar na cabeça do seguinte. Os parafusos de uma ligação mais próximos do que a largura da chave mais a cabeça do vizinho são listados com o espaçamento encontrado e o espaçamento necessário.

## Tamanhos das soldaduras de ângulo

O AISC 360-16 Tabela J2.4 fixa a soldadura de ângulo mais pequena pela espessura da parte mais fina (3 mm até 6.35 mm de espessura, 5 mm até 12.7, 6 mm até 19.05, 8 mm acima), e o J2.2b a maior ao longo de uma borda de material: não maior do que o material quando este é mais fino do que 6.35 mm, caso contrário 1.6 mm a menos. As ligações com o mesmo tamanho na mesma espessura são listadas como um só problema.

A espessura usada é a parte mais fina nomeada pela soldadura, por isso uma soldadura de 8 mm em toda a volta de uma viga com alma de 6.35 mm é listada.

## Água e ventilação

- Uma **extremidade superior aberta** de um perfil oco que fica vertical ou com inclinação superior a 10° deixa entrar a chuva.
- Um perfil oco **fechado nas duas extremidades** precisa de um furo de ventilação e um de drenagem; a galvanização por imersão a quente e a pressão do ar aquecido exigem ambos.

## O soldador consegue chegar lá

Uma soldadura de ângulo é feita com a tocha a meio caminho entre as duas faces que une. Para cada soldadura de ângulo em toda a volta (uma chapa de topo, uma chapa de base, uma chapa de meia-esquadria), a verificação toma o contorno da secção do elemento na chapa e, a cada 20 mm, percorre um trajeto da tocha a 45° desde o ponto em que o bico (raio de 10 mm para começar) passa livre das duas faces, durante mais 30 mm. Se o trajeto encontrar a própria aba da viga ou outra peça, essa parte da soldadura é listada com a peça e a distância. Estes números são típicos, não de uma norma: pergunte ao seu fabricante qual o processo e o bico. As soldaduras ao longo de duas bordas (uma chapa de corte) não são localizadas e não são verificadas.
