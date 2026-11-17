---
title: Verificações de construtibilidade
summary: Problemas para o que um detalhista percebe a olho: um parafuso que a chave não alcança, parafusos próximos demais para o soquete, soldas de filete fora dos limites de tamanho, soldas que o maçarico não alcança e tubos que retêm água.
keywords: construtibilidade, chave, soquete, acesso ao parafuso, aperto, tamanho da solda, solda de filete, solda mínima, solda máxima, água, furo de ventilação, furo de drenagem, galvanização, seção oca, problemas
from: 72315151
---

O DetailCraft procura quatro tipos de problema que nenhuma verificação de resistência encontra, e os lista no painel {{ui:Problemas}}. São avisos e notas para olhar, não erros: o modelo continua sendo construído.

## Um parafuso que a chave não alcança

Para cada parafuso, o DetailCraft coloca um soquete sobre a cabeça e sobre a porca. O soquete é um cilindro tão largo quanto a porca medida entre os cantos, mais uma parede de 4 mm, com 60 mm de comprimento. Se uma alma de viga, uma mesa, uma chapa ou um contraventamento estiver dentro desse cilindro, o problema nomeia a ligação, quantos parafusos, qual peça está no caminho e a que distância ela está do parafuso.

O soquete é um soquete de impacto típico. Uma chave de boca precisa de menos espaço, e uma ferramenta maior precisa de mais. Peça ao seu assistente conectado para executar `constructability_check` com outro `socketLength` para ver como a resposta muda.

## Parafusos próximos demais para o soquete

Um soquete sobre um parafuso não pode tocar a cabeça do seguinte. Os parafusos de uma ligação que estão mais próximos que a largura do soquete mais a cabeça do vizinho são listados com o espaçamento encontrado e o espaçamento necessário.

## Tamanhos de solda de filete

A AISC 360-16 Tabela J2.4 define a menor solda de filete pela espessura da parte mais fina (3 mm até 6.35 mm de espessura, 5 mm até 12.7, 6 mm até 19.05, 8 mm acima), e a J2.2b define a maior ao longo de uma borda de material: não maior que o material quando ele é mais fino que 6.35 mm, caso contrário 1.6 mm a menos. Ligações com o mesmo tamanho na mesma espessura são listadas como um único problema.

A espessura usada é a parte mais fina nomeada pela solda, então uma solda de 8 mm em todo o contorno de uma viga com alma de 6.35 mm é listada.

## Água e ventilação

- Uma **extremidade superior aberta** de uma seção oca que fica de pé ou inclinada em mais de 10° deixa entrar chuva.
- Uma seção oca **fechada nas duas extremidades** precisa de um furo de ventilação e um de drenagem; a galvanização a fogo e a pressão do ar aquecido exigem ambos.

## O soldador consegue alcançar?

Uma solda de filete é feita com o maçarico a meio caminho entre as duas faces que ela une. Para cada solda de filete em todo o contorno (uma chapa de topo, uma chapa de base, uma chapa de meia-esquadria), a verificação pega o contorno da seção do membro na chapa e, a cada 20 mm, traça um caminho do maçarico para fora a 45° a partir do ponto onde seu bico (raio de 10 mm para começar) livra as duas faces pela primeira vez, por mais 30 mm. Se o caminho encontra a própria mesa da viga ou outra peça, aquela parcela da solda é listada com a peça e a distância. Esses números são típicos, não de uma norma: pergunte ao seu fabricante qual é o processo e o bico. Soldas ao longo de duas bordas (uma chapa de cisalhamento) não são localizadas e não são verificadas.
