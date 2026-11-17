---
title: Detalhar vigas, pilares, lajes e paredes de betão armado
summary: Adicionar vigas, pilares, lajes e paredes de betão por eixo, dar-lhes varões, estribos e cintas, verificar emendas e amarrações segundo a ACI 318-19 ou a EN 1992-1-1, e fazer desenhos de fabrico e mapas de dobragem.
keywords: betão armado, armadura, viga, pilar, laje, parede, estribos, cintas, ligaduras, ganchos, emenda, emenda por sobreposição, amarração, comprimento de amarração, ld, ldh, lbd, recobrimento, espaçamento, reforços de contorno, aberturas, malhas, posições, mapa de dobragem, lista de dobragem, bbs, desenho de fabrico, ACI 318, EN 1992, Eurocódigo 2, IfcReinforcingBar, importação IFC
from: 3835b7ec
---

O separador {{ui:Betão}} abaixo da vista detalha os varões de vigas, pilares, lajes e paredes de betão. Indica as dimensões e os varões; o DetailCraft coloca cada varão, numera-o, verifica as emendas, a amarração, o recobrimento e o espaçamento contra a cláusula de onde vêm, e desenha-o.

:::warning
O DetailCraft detalha os varões que lhe indica. Não os dimensiona. Todos os resultados devem ser verificados por um engenheiro.
:::

## Abrir o separador Betão

Escolha o separador {{ui:Betão}} abaixo da vista. Numa disposição em friso, {{ui:Betão}} está no separador {{ui:Modelação}}, ao lado de {{ui:Sapata}}. Com a linha de comandos do estilo de desenho, escreva {{cmd:CONCRETE}}.

## Adicionar um elemento por eixo

Os elementos de betão são colocados nas linhas de eixo e nos níveis do modelo, por isso configure-os primeiro (painel da esquerda).

1. Em {{ui:Adicionar por eixo}}, escolha o {{ui:Elemento}}: {{ui:Viga de betão}}, {{ui:Pilar de betão}}, {{ui:Laje}} ou {{ui:Parede}}.
2. Escolha as linhas de eixo e os níveis:
   - uma viga vai de uma interseção da grelha a outra, com o topo no nível;
   - um pilar assenta numa interseção, de um nível a outro;
   - uma laje preenche o retângulo entre duas linhas numeradas e duas linhas com letras, com o topo no nível;
   - uma parede corre ao longo da sua linha central, de uma interseção a outra, de um nível a outro.
3. Indique a dimensão e escolha {{ui:Adicionar}}. O elemento fica selecionado e os seus campos abrem no painel {{ui:Propriedades}}.

Cada elemento começa com varões que são valores iniciais, não de projeto: altere-os para os do engenheiro.

## Alterar os varões

Selecione o elemento (na vista, ou pelo nome no separador {{ui:Betão}}). O painel {{ui:Propriedades}} mostra:

| Elemento | O que define |
|---|---|
| Viga | Largura, altura, recobrimento livre; varões superiores e inferiores (dimensão, número, retos ou com gancho de 90° nas extremidades); varões laterais; estribos (dimensão, ganchos de 135° ou 90°, a distância do primeiro à face do apoio, o comprimento e o espaçamento da zona de extremidade, o espaçamento entre estribos); comprimentos de apoio; comprimentos de emenda |
| Pilar | Largura, altura transversal, rotação, recobrimento; varões longitudinais em cada face; cintas, como os estribos; o que os varões fazem no topo (emenda com o pilar de cima, gancho no piso, ou terminam) |
| Laje | Espessura, dimensão, topo, recobrimentos; malha inferior e malha superior em cada direção (dimensão e espaçamento); varões em U à volta das bordas; reforços de contorno; aberturas |
| Parede | Espessura, recobrimento, uma ou duas camadas, varões horizontais e verticais, varões em U nas extremidades, varões verticais com ou sem emenda acima, reforços de contorno, aberturas |

Cada alteração é um passo de anulação. Uma alteração que não pode ser construída é recusada, e a barra de estado indica porquê, por exemplo: "A abertura não cabe dentro do elemento com o recobrimento."

Estribos e cintas são fechados, com os dois ganchos num mesmo canto. Os varões de uma viga entram num pilar de betão nas suas extremidades até à face oposta do pilar, menos o recobrimento; onde não existe pilar, indique o {{ui:Comprimento de apoio no início (mm)}} e no fim.

## Emendas e amarração

Os varões mais compridos do que o {{ui:Comprimento comercial do varão (mm)}} (12000 para começar) são cortados em peças de igual comprimento, com emendas. A tabela {{ui:Emendas e amarração}} lista cada emenda e cada amarração: o que é necessário, com a cláusula e os seus termos, e o que o detalhe tem.

- Um comprimento de emenda de 0 significa "conforme necessário": o comprimento que a norma dá, arredondado para cima a 25 mm.
- Escreva o seu próprio comprimento de emenda para o usar em vez disso. Se for mais curto do que o necessário, é um problema (ver abaixo) e fica marcado com * na tabela.
- A amarração é medida desde a face do apoio até à extremidade do varão dentro do apoio. Uma viga sem apoio conhecido indica-o em vez de a verificar.
- Um pilar assente numa sapata tem emenda com as armaduras de espera da sapata, e um pilar sobre outro pilar tem emenda com os varões desse pilar: essa emenda também é verificada.

**ACI 318-19** (SI): varões retos em tração 25.4.2.3 (a tabela, com ψt, ψe, ψg, λ), ganchos normais 25.4.3.1 (ψr 1.6 e ψo 1.25 adotados, salvo se se conhecerem outros valores), varões em compressão 25.4.9.2, emendas em tração 25.5.2.1 (Classe B, ou Classe A nas definições), emendas em compressão 25.5.5.1.

**EN 1992-1-1**: amarração 8.4.4 com fbd de 8.4.2 (aderência boa ou má), emendas 8.7.3 com α6 para cada varão emendado na mesma secção. γc, γs e αct começam nos valores recomendados; defina os do seu anexo nacional.

## As verificações

Cada verificação que falha está no painel Problemas da aplicação (origem {{ui:Verificações da armadura}}) e na lista {{ui:Verificações}} do elemento:

| Verificação | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recobrimento | Tabela 20.5.1.3.1, por exposição | Mínimo de aderência, Tabela 4.2 (o recobrimento de durabilidade cabe-lhe indicar) |
| Espaçamento livre dos varões | 25.2.1 (vigas, lajes, paredes), 25.2.3 (pilares) | 8.2 (2) |
| Espaçamento dos estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Armadura mínima da viga | 9.6.1.2 | 9.2.1.1 (1) |
| Varões laterais de vigas com mais de 900 mm de altura | 9.7.2.3 | não verificado |
| Taxa de armadura do pilar, número de varões | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Cintas: espaçamento, dimensão, cintas transversais | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Espaçamento da laje, armadura mínima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Espaçamento da parede, armadura mínima, duas camadas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Emendas, amarração | como acima | como acima |

A dimensão do agregado não é conhecida, pelo que o espaçamento livre é verificado sem ela.

## Aberturas, reforços de contorno e varões de bordo

Escolha {{ui:Adicionar um vão}} sob uma laje ou parede selecionada e indique onde fica e a sua dimensão. Os varões que ela atravessa param a um recobrimento da sua borda. Os {{ui:Reforços de contorno}} são acrescentados de cada lado, na mesma camada, com metade da área dos varões cortados, e com um comprimento de amarração para além da abertura. Essa é a regra de partida do DetailCraft, não uma cláusula de norma: altere os {{ui:Reforços de contorno}} para os do engenheiro. Não são acrescentados varões de canto.

Os varões em U à volta das bordas livres de uma laje e nas extremidades de uma parede têm pernas com um comprimento de emenda cada.

## Posições e mapa de dobragem

Varões idênticos partilham uma posição: as sapatas mantêm as posições F (5F1), as vigas recebem B, os pilares C, as lajes S e as paredes W (7B1, 8C1, 4S2). O separador {{ui:Mapa de dobragem}} e o seu CSV listam agora cada varão da estrutura, com as sapatas primeiro. {{ui:Saída}} › {{ui:Mais}} › {{ui:Dobragem}} transfere-o.

## Desenhos de fabrico

Escolha {{ui:Saída}} › {{ui:Mais}} › {{ui:Desenhos de armaduras}}, {{ui:Desenhos de armaduras}} no separador {{ui:Betão}}, ou {{ui:Desenho de fabrico}} ao lado de um elemento. Cada elemento recebe uma folha com um alçado (uma planta, para uma laje) que mostra cada varão e a sua posição, as zonas dos estribos ou das cintas e as emendas cotadas, e um corte a meio; depois, as folhas de dobragem listam cada posição com um esboço da sua forma, as suas dimensões, o número, o comprimento de corte e o peso.

As folhas são feitas a partir do modelo de cada vez, e de novo após cada alteração enquanto a janela estiver aberta: a legenda tem a referência do modelo. Guarde {{ui:Esta folha em PDF}} ou {{ui:Todas as folhas em PDF}}.

## Varões de um ficheiro IFC

{{ui:Ficheiro}} › {{ui:Importar IFC}} lê agora IfcReinforcingBar: o disco varrido ao longo da sua linha central volta como pernas retas e dobras, com o seu diâmetro, a sua posição e o elemento que o contém. Os varões são mantidos como foram lidos (não são convertidos em regras de uma viga ou de uma laje), mostrados na vista, listados no mapa de dobragem e escritos de novo com a exportação IFC. O relatório de importação indica quantos varões foram lidos, de que dimensões, em quantos elementos, e o que ficou de fora e porquê.

Uma viga, um pilar, uma laje ou uma parede desse ficheiro que tenham varões, ou cujo material seja betão, não é tomado por aço; o relatório indica-o. A exportação IFC do próprio DetailCraft inclui a definição de cada elemento de betão, pelo que volta como ele próprio, e os seus varões são refeitos a partir dessa definição.

:::note
A leitura dos ficheiros de um programa de cálculo estrutural (que não sejam IFC) ainda não está implementada: exporte IFC a partir dele.
:::

## A exportação IFC

Vigas, pilares, lajes de betão (com aberturas) e paredes saem como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada um com os seus varões como IfcReinforcingBar (varões principais, ligaduras para estribos e cintas, varões de bordo) associados a ele. Cada varão é um disco varrido ao longo da sua linha central, com arcos verdadeiros nas dobras, e tem a sua posição e o seu comprimento de corte.
