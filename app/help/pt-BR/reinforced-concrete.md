---
title: Detalhar vigas, pilares, lajes e paredes de concreto armado
summary: Adicione vigas, pilares, lajes e paredes de concreto por linha de grade, defina as barras, estribos e amarrações, verifique transpasses e ancoragem pela ACI 318-19 ou EN 1992-1-1, e gere desenhos de fabricação e tabelas de dobramento.
keywords: concreto armado, armadura, viga, pilar, laje, parede, estribos, amarrações, ganchos, transpasses, emenda por transpasse, ancoragem, comprimento de ancoragem, ld, ldh, lbd, cobrimento, espaçamento, barras de reforço, vãos, malhas, posições das barras, tabela de dobramento, bbs, desenho de fabricação, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, importação IFC
from: 3835b7ec
---

A guia {{ui:Concreto}} abaixo da vista detalha as barras de vigas, pilares, lajes e paredes de concreto. Você informa as bitolas e as barras; o DetailCraft posiciona cada barra, numera, verifica os transpasses, a ancoragem, o cobrimento e o espaçamento contra a cláusula de onde vêm, e desenha tudo.

:::warning
O DetailCraft detalha as barras que você informa. Ele não as dimensiona. Todo resultado deve ser verificado por um engenheiro.
:::

## Abrir a guia Concreto

Escolha a guia {{ui:Concreto}} abaixo da vista. Em um layout com faixa de opções, {{ui:Concreto}} fica na guia {{ui:Modelagem}}, ao lado de {{ui:Sapata}}. Com a linha de comando do estilo de desenho, digite {{cmd:CONCRETE}}.

## Adicionar um elemento por linha de grade

Os elementos de concreto são posicionados nas linhas de grade e nos níveis do modelo, então configure-os primeiro (painel à esquerda).

1. Em {{ui:Adicionar por eixo}}, escolha o {{ui:Elemento}}: {{ui:Viga de concreto}}, {{ui:Pilar de concreto}}, {{ui:Laje}} ou {{ui:Parede}}.
2. Escolha as linhas de grade e os níveis:
   - uma viga vai de uma interseção de grade a outra, com o topo no nível;
   - um pilar fica em uma interseção, de um nível a outro;
   - uma laje preenche o retângulo entre duas linhas de grade numeradas e duas letradas, com o topo no nível;
   - uma parede corre ao longo da sua linha central de uma interseção a outra, de um nível a outro.
3. Informe o tamanho e escolha {{ui:Adicionar}}. O elemento fica selecionado e seus campos abrem no painel {{ui:Propriedades}}.

Cada elemento começa com barras de valores iniciais, não de projeto: altere-as para as do engenheiro.

## Alterar as barras

Selecione o elemento (na vista, ou pelo nome na guia {{ui:Concreto}}). O painel {{ui:Propriedades}} mostra:

| Elemento | O que você define |
|---|---|
| Viga | Largura, altura, cobrimento livre; barras superiores e inferiores (bitola, quantidade, reta ou gancho de 90° nas extremidades); barras laterais; estribos (bitola, ganchos de 135° ou 90°, a distância do primeiro até a face do apoio, o comprimento e o espaçamento da zona de extremidade, o espaçamento entre eles); comprimentos de apoio; comprimentos de transpasse |
| Pilar | Largura, profundidade, rotação, cobrimento; barras longitudinais em cada face; amarrações como as dos estribos; o que as barras fazem no topo (transpasse com o pilar de cima, gancho na laje ou parada) |
| Laje | Espessura, tamanho, topo, cobrimentos; malha inferior e malha superior em cada direção (bitola e espaçamento); barras em U nas bordas; barras de reforço; vãos |
| Parede | Espessura, cobrimento, uma ou duas camadas, barras horizontais e verticais, barras em U nas extremidades, barras verticais transpassadas acima ou não, barras de reforço, vãos |

Cada alteração é uma etapa de desfazer. Uma alteração que não pode ser construída é recusada, e a barra de status informa o motivo, por exemplo "O vão não cabe dentro do elemento com o cobrimento."

Estribos e amarrações são fechados, com os dois ganchos no mesmo canto. As barras de uma viga entram em um pilar de concreto nas extremidades até a face mais distante do pilar, menos o cobrimento; onde não há pilar, informe o {{ui:Comprimento de apoio no início (mm)}} e no fim.

## Transpasses e ancoragem

Barras mais longas que o {{ui:Comprimento comercial da barra (mm)}} (12000 para começar) são cortadas em pedaços de comprimento igual, transpassados. A tabela {{ui:Transpasses e ancoragem}} lista cada transpasse e cada ancoragem: o que é necessário, com a cláusula e seus termos, e o que o detalhe tem.

- Um comprimento de transpasse 0 significa "conforme necessário": o comprimento que a norma dá, arredondado para cima em 25 mm.
- Digite seu próprio comprimento de transpasse para usá-lo. Se for menor que o necessário, é um problema (veja abaixo) e recebe * na tabela.
- A ancoragem é medida da face do apoio até a extremidade da barra dentro do apoio. Uma viga sem apoio conhecido informa isso, em vez de verificá-lo.
- Um pilar sobre uma sapata transpassa com as barras de espera da sapata, e sobre outro pilar com as barras desse pilar: esse transpasse também é verificado.

**ACI 318-19** (SI): barras retas à tração 25.4.2.3 (a tabela, com ψt, ψe, ψg, λ), ganchos padrão 25.4.3.1 (ψr 1.6 e ψo 1.25 adotados, salvo se conhecidos de outro modo), barras comprimidas 25.4.9.2, transpasses à tração 25.5.2.1 (Classe B, ou Classe A nas configurações), transpasses à compressão 25.5.5.1.

**EN 1992-1-1**: ancoragem 8.4.4 com fbd de 8.4.2 (aderência boa ou ruim), transpasses 8.7.3 com α6 para cada barra transpassada em uma mesma seção. γc, γs e αct começam com os valores recomendados; informe os do seu anexo nacional.

## As verificações

Toda verificação que falha aparece no painel Problemas do aplicativo (origem {{ui:Verificações de armadura}}) e na lista {{ui:Verificações}} do elemento:

| Verificação | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Cobrimento | Tabela 20.5.1.3.1, por exposição | Cobrimento mínimo de aderência, Tabela 4.2 (o cobrimento de durabilidade cabe a você informar) |
| Espaçamento livre das barras | 25.2.1 (vigas, lajes, paredes), 25.2.3 (pilares) | 8.2 (2) |
| Espaçamento dos estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Armadura mínima de viga | 9.6.1.2 | 9.2.1.1 (1) |
| Barras laterais de viga com mais de 900 mm de altura | 9.7.2.3 | não verificado |
| Taxa de armadura do pilar, número de barras | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Amarrações: espaçamento, bitola, amarrações transversais | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Espaçamento de laje, armadura mínima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Espaçamento de parede, armadura mínima, duas camadas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Transpasses, ancoragem | como acima | como acima |

O tamanho do agregado não é conhecido, então o espaçamento livre é verificado sem ele.

## Vãos, reforços e barras de borda

Escolha {{ui:Adicionar um vão}} sob uma laje ou parede selecionada e defina onde ele fica e seu tamanho. As barras que ele cruza param a uma distância de cobrimento da sua borda. As barras de reforço são adicionadas dos dois lados, na mesma camada, com metade da área das barras cortadas, e se estendem um comprimento de ancoragem além do vão. Essa é a regra inicial do DetailCraft, não uma cláusula de norma: altere as {{ui:Barras de reforço}} para as do engenheiro. Barras de canto não são adicionadas.

As barras em U nas bordas livres de uma laje e nas extremidades de uma parede têm pernas de um comprimento de transpasse.

## Posições das barras e tabela de dobramento

Barras idênticas compartilham uma posição: as sapatas mantêm posições F (5F1), vigas recebem B, pilares C, lajes S e paredes W (7B1, 8C1, 4S2). A guia {{ui:Tabela de dobramento}} e o CSV dela agora listam cada barra da estrutura, começando pelas sapatas. {{ui:Saída}} › {{ui:Mais}} › {{ui:Dobramento}} baixa a tabela.

## Desenhos de fabricação

Escolha {{ui:Saída}} › {{ui:Mais}} › {{ui:Desenhos de armadura}}, {{ui:Desenhos de armadura}} na guia {{ui:Concreto}}, ou {{ui:Desenho de fabricação}} ao lado de um elemento. Cada elemento recebe uma folha com uma elevação (uma planta, para uma laje) mostrando cada barra e sua posição, as zonas de estribos ou amarrações e os transpasses cotados, e um corte no meio. Em seguida, as tabelas de dobramento listam cada posição com um esboço da sua forma, suas dimensões, a quantidade, o comprimento de corte e o peso.

As folhas são geradas a partir do modelo a cada vez, e de novo após cada alteração enquanto a janela estiver aberta: a legenda traz a referência do modelo. Salve {{ui:Esta folha em PDF}} ou {{ui:Todas as folhas em PDF}}.

## Barras de um arquivo IFC

{{ui:Arquivo}} › {{ui:Importar IFC}} agora lê IfcReinforcingBar: o disco varrido ao longo da linha central volta como pernas retas e dobras, com seu diâmetro, sua posição e o elemento que a contém. As barras são mantidas como foram lidas (não são convertidas em regras de viga ou de laje), mostradas na vista, listadas na tabela de dobramento e gravadas de novo com a exportação IFC. O relatório de importação informa quantas barras foram lidas, de quais bitolas, em quantos elementos, e o que ficou de fora e por quê.

Uma viga, pilar, laje ou parede desse arquivo que tenha barras, ou cujo material seja concreto, não é tomado como aço; o relatório informa isso. A exportação IFC do próprio DetailCraft leva a definição de cada elemento de concreto, então ele volta como ele mesmo, e suas barras são refeitas a partir dela.

:::note
A leitura de arquivos próprios de um programa de cálculo estrutural (que não sejam IFC) ainda não está implementada: exporte IFC a partir dele.
:::

## A exportação IFC

Vigas, pilares, lajes de concreto (com vãos) e paredes saem como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada um com suas barras como IfcReinforcingBar (barras principais, ligaduras para estribos e amarrações, barras de borda) agregadas a ele. Cada barra é um disco varrido ao longo da linha central, com arcos verdadeiros nas dobras, sua marca e seu comprimento de corte.
