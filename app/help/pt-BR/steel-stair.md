---
title: Gerador de escada em aço
summary: Uma escada de aço a partir da altura entre pavimentos, da projeção horizontal e da largura: o desnível e a pisada por um conjunto de regras que você escolhe, patamares, corrimãos e balaústres, desenhos de fabricação e uma lista de corte com pesos.
keywords: escada de aço, gerador de escada, longarina, piso, chapa xadrez, grelha, bandeja dobrada, patamar, corrimão, balaústres, desnível, pisada, osha, ibc, approved document k, lista de corte, pesos, desenho de fabricação
from: a4f0a985
---

O gerador de escada cria uma escada de aço completa a partir de poucos números: as longarinas, os pisos, os patamares quando o lance é alto demais, corrimãos com montantes e balaústres, os furos de fixação nas longarinas, uma lista de corte com pesos e os desenhos de fabricação. Ele começa pela ferramenta {{ui:Escada}}, como a escada simples (veja Escadas), com uma opção a mais.

## Inserir uma escada de aço

1. Escolha {{ui:Escada}} no grupo {{ui:Inserir}}, ou pressione {{key:S}}.
2. À direita, marque {{ui:Usar o gerador de escada em aço}}.
3. Escolha o **conjunto de regras** para o local onde a escada será construída, o **desnível** (de pavimento a pavimento; 0 = até o próximo pavimento), a **projeção horizontal disponível** (0 = deixar a regra decidir), a **largura livre** e o **tipo de piso**: chapa xadrez, grelha ou bandeja dobrada.
4. Defina o perfil da longarina, os patamares (pela regra, ou um número), os corrimãos (dos dois lados, de um lado, nenhum), a altura do corrimão e o espaço entre balaústres.
5. Clique em uma interseção da grade: esse é o pé do primeiro espelho.

Selecione a escada (clique em uma longarina, piso ou corrimão) para alterar qualquer configuração; as propriedades mostram os espelhos, a pisada, a inclinação, os lances e patamares, o aço da escada, a lista de corte e as fontes do conjunto de regras.

## Os conjuntos de regras

O conjunto de regras limita a forma da escada: o desnível e a pisada, 2 × espelho + pisada, a inclinação, o patamar, a altura do corrimão e a maior abertura. O DetailCraft oferece os de baixo; a região é uma configuração, não um palpite. Abra **De onde vêm os números deste conjunto de regras** nas propriedades: cada número informa sua fonte e diz quão bem foi verificado.

- **International Building Code 2021**: espelho de 4 a 7 in., piso de pelo menos 11 in., corrimãos de 34 a 38 in. O limite de 12 ft entre patamares aparece como *não lido*, e os números dos corrimãos como lidos em apostilas que citam o código: confirme-os antes de depender deles.
- **OSHA 29 CFR 1910.25 e 1910.29** (escadas industriais padrão): 30° a 50°, espelho de no máximo 9.5 in., piso de pelo menos 9.5 in., pelo menos 22 in. de largura, patamares tão largos quanto a escada e 30 in. de profundidade, um corrimão superior usado como corrimão de apoio de 36 a 38 in. Estes foram lidos no próprio regulamento.
- **Approved Document K 2013, Inglaterra** (escadas gerais de acesso e de serviço): as faixas de desnível e pisada e 2 × espelho + pisada de 550 a 700 mm, lidas no relatório encomendado pelo governo que as tabela. O documento não dá ao DetailCraft uma altura de corrimão; por isso, usa-se a altura que você definir e a lista de Problemas informa isso.

Um conjunto de regras que não está aqui não é adivinhado: a escada então segue a regra de conforto simples de 600 a 650 mm e informa que não tem regra.

## O que ele calcula

- **Espelhos e pisada.** O menor número de espelhos cuja soma 2 × espelho + pisada fique no meio da faixa da regra, sem que a pisada caia abaixo do mínimo da regra. Com uma projeção horizontal informada, a pisada é a projeção sobre os pisos, e qualquer valor fora da regra é informado.
- **Lances e patamares.** Um lance mais alto do que a regra permite é dividido com um patamar tão largo quanto a escada e não menor que o mínimo da regra; você também pode pedir patamares. Um patamar é um quadro de duas vigas laterais e duas cantoneiras transversais sob um tampo, apoiado em dois montantes.
- **Pisos.** A chapa xadrez é uma chapa soldada (6 mm por padrão; o desenho não é somado ao peso). Uma bandeja de chapa dobrada tem uma aba de retorno no bocel e é parafusada através da alma da longarina: dois furos 2 mm maiores que o parafuso, a 0.3 e 0.7 da profundidade. A grelha é desenhada como uma chapa de mesmo peso (altura da barra portante × espessura ÷ passo); as barras transversais e as faixas não são contadas, e a lista de corte informa isso.
- **Corrimãos.** Um corrimão superior de tubo sobre montantes ao longo de cada lance e de cada patamar, com um espaço entre balaústres pelo qual nenhuma esfera maior que a abertura da regra passe (100 mm no máximo por padrão).

## Desenhos, lista de corte, exportação

- O lance é uma montagem; os corrimãos são outra (os dois lados são a mesma montagem, feita duas vezes). Cada uma tem seu desenho de montagem, e o desenho da longarina mostra os seus furos.
- A **folha da escada** (ST-…) mostra a longarina de cada lance reta, com as estações dos furos escritas a partir da extremidade inferior, e o detalhe do piso: corte, bocel, aba de retorno e a aba de extremidade com seus furos.
- {{ui:Lista de corte e pesos}} nas propriedades lista cada perfil e comprimento com quantidades e quilogramas; {{ui:Baixar a lista de corte (CSV)}} salva o arquivo.
- Tudo vai para a lista de materiais, os arquivos NC e o IFC como peças comuns (IfcMember, IfcColumn, IfcPlate).

## Bom saber

- Este é um ponto de partida, não um projeto. Nada é verificado quanto à resistência ou à flecha; o conjunto de regras apenas limita a forma.
- As extremidades das longarinas contra os pavimentos são cortadas em esquadro e não são detalhadas; os montantes dos patamares ficam apoiados no pavimento inferior e não têm chapas de base.
- Inserir a escada como um único elemento no BimCraft ainda não está implementado.
