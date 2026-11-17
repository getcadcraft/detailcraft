---
title: Gerador de escadas de aço
summary: Uma escada de aço completa a partir da altura entre pisos, do desenvolvimento e da largura: o desnível e a pisada por um conjunto de regras à sua escolha, patamares, corrimãos e balaústres, desenhos de fabrico e uma lista de corte com pesos.
keywords: escada de aço, gerador de escadas, longarina, cobertor, chapa xadrez, grelha, chapa dobrada, patamar, corrimão, balaústres, desnível, pisada, osha, ibc, approved document k, lista de corte, pesos, desenho de fabrico
from: a4f0a985
---

O gerador de escadas cria uma escada de aço completa a partir de alguns números: as longarinas, os cobertores, os patamares quando o lanço é demasiado alto, os corrimãos com postes e balaústres, os furos de fixação nas longarinas, uma lista de corte com pesos e os desenhos de fabrico. Parte da ferramenta {{ui:Escada}}, como a escada simples (ver Escadas), com um interruptor acrescentado.

## Colocar uma escada de aço

1. Escolha {{ui:Escada}} no grupo {{ui:Colocar}}, ou prima {{key:S}}.
2. À direita, marque {{ui:Usar o gerador de escadas de aço}}.
3. Escolha o **conjunto de regras** para o local onde a escada é construída, o **desnível** (de piso a piso; 0 = até ao piso seguinte), o **desenvolvimento disponível** (0 = deixar a regra decidir), a **largura livre** e o **tipo de cobertor**: chapa xadrez, grelha ou chapa dobrada.
4. Defina o perfil da longarina, os patamares (pela regra, ou um número), os corrimãos (dos dois lados, de um só, nenhum), a altura do corrimão e o vão entre balaústres.
5. Clique numa interseção da grelha: é o pé do primeiro espelho.

Selecione a escada (clique numa longarina, num cobertor ou num corrimão) para alterar qualquer definição. As propriedades mostram os espelhos, a pisada, a inclinação, os lanços e patamares, o aço que a compõe, a lista de corte e as fontes do conjunto de regras.

## Os conjuntos de regras

O conjunto de regras limita a forma da escada: o desnível e a pisada, 2 × espelho + pisada, a inclinação, o patamar, a altura do corrimão e a maior abertura. O DetailCraft oferece os abaixo; a região é uma definição, não uma suposição. Abra **De onde vêm os números deste conjunto de regras** nas propriedades: cada número indica a sua fonte e o grau de verificação.

- **International Building Code 2021**: espelho de 4 a 7 in., cobertor com pelo menos 11 in., corrimãos de 34 a 38 in. O limite de 12 ft entre patamares aparece como *não lido*, e os números dos corrimãos como lidos em folhetos que citam o código: confirme-os antes de confiar neles.
- **OSHA 29 CFR 1910.25 e 1910.29** (escadas industriais normalizadas): 30° a 50°, espelho no máximo 9.5 in., cobertor com pelo menos 9.5 in., com pelo menos 22 in. de largura, patamares com a largura da escada e 30 in. de profundidade, e um corrimão superior usado como corrimão de 36 a 38 in. Estes foram lidos no próprio regulamento.
- **Approved Document K 2013, England** (escadas gerais de acesso e de serviço): as faixas de desnível e de pisada, e 2 × espelho + pisada de 550 a 700 mm, lidas no relatório encomendado pelo governo que as tabela. O documento não dá ao DetailCraft nenhuma altura de corrimão, por isso é usada a altura que definiu, e a lista {{ui:Problemas}} indica-o.

Um conjunto de regras que não esteja aqui não é adivinhado: a escada segue então a regra de conforto simples de 600 a 650 mm e indica que não tem regra.

## O que calcula

- **Espelhos e pisada.** O menor número de espelhos cuja 2 × espelho + pisada fica no meio da faixa da regra, sem que a pisada desça abaixo do mínimo da regra. Com um desenvolvimento indicado, a pisada é o desenvolvimento dividido pelos cobertores, e qualquer valor fora da regra é assinalado.
- **Lanços e patamares.** Um lanço mais alto do que a regra permite é dividido com um patamar com a largura da escada e não inferior ao mínimo da regra; também pode pedir patamares. Um patamar é um quadro de duas vigas laterais e duas cantoneiras transversais, sob uma cobertura, apoiado em dois postes.
- **Cobertores.** A chapa xadrez é uma chapa soldada (6 mm por predefinição; o padrão não é somado ao peso). Uma chapa dobrada tem um rebordo no focinho e é aparafusada através da alma da longarina: dois furos 2 mm maiores do que o parafuso, a 0.3 e 0.7 da profundidade. A grelha é desenhada como chapa de peso equivalente (altura da barra portante × espessura ÷ passo); as barras transversais e as cintas de bordo não são contadas, e a lista de corte indica-o.
- **Corrimãos.** Um corrimão superior de tubo sobre postes ao longo de cada lanço e de cada patamar, com um vão entre balaústres que nenhuma esfera maior do que a abertura da regra atravessa (100 mm no máximo por predefinição).

## Desenhos, lista de corte, exportação

- O lanço é um conjunto; os corrimãos são outro (os dois lados são o mesmo conjunto, feito duas vezes). Cada um tem o seu desenho de montagem, e o desenho da longarina mostra os seus furos.
- O **desenho da escada** (ST-…) mostra a longarina de cada lanço em reta, com as posições dos furos escritas a partir da extremidade inferior, e o pormenor do cobertor: corte, focinho, rebordo e a aba final com os seus furos.
- {{ui:Lista de corte e pesos}} nas propriedades lista cada perfil e comprimento, com quantidades e quilogramas; {{ui:Transferir a lista de corte (CSV)}} guarda-a.
- Tudo vai para a lista de materiais, para os ficheiros NC e para o IFC como peças normais (IfcMember, IfcColumn, IfcPlate).

## Bom saber

- Isto é um ponto de partida, não um projeto. Nada é verificado quanto a resistência ou deformação; o conjunto de regras apenas limita a forma.
- As extremidades das longarinas contra os pisos são cortadas em esquadria e não são detalhadas; os postes dos patamares assentam no piso inferior e não têm chapas de base.
- Colocar a escada como um só elemento no BimCraft ainda não está implementado.
