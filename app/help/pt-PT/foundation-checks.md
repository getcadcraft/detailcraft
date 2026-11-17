---
title: Verificações de fundações
summary: Verificar sapatas, sapatas combinadas e lajes de fundação no terreno que descreve, o assentamento, uma laje flexível sobre molas, grupos de estacas e muros de suporte. Uma ajuda para um engenheiro verificar.
keywords: fundação, sapata, sapata combinada, laje de fundação, malha, assentamento, módulo de reação do terreno, molas, pilar de bordo, pilar de canto, pressão no terreno, deslizamento, derrubamento, punçoamento, esforço transverso numa direção, flexão, amarração, armadura mínima, grupo de estacas, muro de suporte, ACI 318-19
from: 6961ad52
---

:::warning
Estas são verificações de primeira ordem, para um engenheiro rever, e não uma aprovação de projeto. A pressão admissível no terreno e o coeficiente de atrito são da responsabilidade de quem projeta: o DetailCraft não conhece o seu solo.
:::

O separador {{ui:Fundações}} verifica as sapatas do modelo contra as cargas de pilar que lhes indica.

## Descrever o terreno

Escreva a {{ui:Pressão admissível no terreno}} e o {{ui:Coeficiente de atrito da base}}. Ambos começam em 0, o que significa "não introduzido": a verificação mostra então a pressão como nota e não indica que passa. Para o assentamento, escreva o módulo de deformabilidade do terreno {{ui:Es}} (MPa), o coeficiente de Poisson do terreno e o assentamento admissível (25 mm para começar). Para uma laje flexível, escreva um módulo de reação do terreno {{ui:ks}}. Estão aqui também o aterro sobre a sapata, o peso volúmico do terreno, os coeficientes de segurança para deslizamento e derrubamento (1.5 para começar) e a tensão de cedência das armaduras.

## Indicar as cargas

Cada sapata tem uma lista de cargas de pilar. Use {{ui:Adicionar uma carga de pilar}} e preencha a linha de serviço (para a pressão, o deslizamento e o derrubamento) e a linha majorada (para as verificações de resistência): a carga vertical P para baixo, as forças horizontais Vx e Vy no topo da sapata, os momentos Mx e My, a posição do pilar na sapata e a sua dimensão.

Ou abra o separador {{ui:Análise}} e escolha {{ui:Tomar as cargas dos pilares da Análise}}: cada apoio que assenta numa sapata passa a ser uma carga de pilar, a partir dos conjuntos de serviço e majorados que escolher. Um My positivo carrega mais o lado +x da sapata; um Mx positivo carrega mais o lado −y.

## O que é verificado

A partir das cargas de serviço, com o peso próprio da sapata e o aterro somados:

- **Pressão no terreno:** a pressão sob uma sapata rígida. No terço médio, toda a base está em contacto; fora dele, parte da base levanta-se e o pico é mais alto. Uma resultante fora da base falha.
- **Deslizamento:** o atrito vezes a carga vertical contra a força horizontal.
- **Derrubamento:** a distância da resultante à aresta.
- **Assentamento:** o assentamento elástico da pressão média num semiespaço com o módulo indicado, no centro e num canto (solução de Timoshenko e Goodier para um retângulo flexível), contra o limite. É um limite superior para uma sapata rígida e não inclui uma camada de solo de profundidade limitada, o alívio pelo solo escavado nem a consolidação. Sem módulo, mostra a pressão como nota.

Apenas a partir das cargas de pilar majoradas (ACI 318-19):

- **Flexão** na face do pilar, com a armadura mínima (0.0018 para varões de 420 MPa) e os varões que desenhou.
- **Esforço transverso numa direção** a d da face.
- **Punçoamento** a d/2 em redor de cada pilar, com o momento do pilar. Para um pilar junto a uma aresta, a secção crítica é cortada pela aresta da sapata (três lados numa aresta, dois num canto; ACI 318-19 22.6.4.1 e o αs menor da Tabela 22.6.5.2), e o momento em relação ao centro da própria secção inclui o deslocamento da carga.
- **Amarração** dos varões para lá da face do pilar, retos ou com os seus ganchos.
- **Altura** acima dos varões inferiores (150 mm).

Uma sapata combinada ou uma laje de fundação é tratada como rígida, e o esforço transverso e o momento vêm da estática, em cortes ao longo de toda a largura.

## Uma laje flexível sobre molas

Marque {{ui:Analisar esta sapata como laje flexível sobre molas}} quando a sapata suporta muitos pilares e a sapata rígida é demasiado grosseira. A sapata passa a ser uma placa de elementos de quatro nós sobre um leito de molas (o {{ui:ks}} que escreveu, concentrado nos nós), e a carga de cada pilar é distribuída pelos nós da sua própria área de implantação. Uma segunda tabela indica a maior pressão no terreno e o assentamento (e a diferença entre o máximo e o mínimo), o momento fletor em cada direção com a armadura que exige, a tração no topo confrontada com a resistência do betão simples (uma sapata não tem varões superiores), o esforço transverso numa direção a d dos pilares, e o punçoamento com a pressão das próprias molas. A malha é refinada até que um pilar tenha três elementos de largura; uma laje grande demora alguns segundos. O peso próprio da laje e o solo acima dela anulam-se e não são incluídos.

Cada verificação que falha está no painel {{ui:Problemas}}, com a respetiva cláusula.

## Grupos de estacas e muros de suporte

{{ui:Adicionar um grupo de estacas}} coloca uma grelha de estacas sob um maciço rígido: escreva a carga e os momentos, e o que uma estaca pode suportar à compressão e à tração (os valores do dimensionamento das estacas, não os deste separador). A reação de cada estaca é P/n mais a sua parte dos momentos (método elástico), e verificam-se a maior compressão e qualquer tração.

{{ui:Adicionar um muro de suporte}} verifica um muro em consola sobre um aterro horizontal, por metro: pressão ativa de Rankine, derrubamento em torno do pé, deslizamento e pressão na base. A pressão passiva à frente do pé não é incluída. O assistente pode executar as mesmas verificações com `pile_group_check` e `retaining_wall_check`.

Os grupos de estacas, os muros e a opção de laje são guardados no ficheiro do modelo, e uma verificação que falha fica em {{ui:Problemas}}.
