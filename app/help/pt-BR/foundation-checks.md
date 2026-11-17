---
title: Verificações de fundação
summary: Verifique sapatas, sapatas combinadas e radiers no solo que você descreve, recalque, radier flexível sobre molas, grupos de estacas e muros de arrimo. Um auxílio para o engenheiro revisar.
keywords: fundação, sapata, sapata combinada, radier, recalque, módulo de reação do solo, molas, pilar de borda, pilar de canto, pressão no solo, deslizamento, tombamento, punção, cisalhamento em uma direção, flexão, ancoragem, armadura mínima, grupo de estacas, muro de arrimo, ACI 318-19
from: 6961ad52
---

:::warning
Estas são verificações de primeira ordem para um engenheiro revisar, não um aval de projeto. A pressão admissível no solo e o coeficiente de atrito são de sua responsabilidade: o DetailCraft não conhece o seu solo.
:::

A guia {{ui:Fundação}} verifica as sapatas do modelo contra as cargas dos pilares que você informar.

## Descreva o solo

Digite a {{ui:Pressão admissível no solo}} e o {{ui:Coeficiente de atrito da base}}. Ambos começam em 0, o que significa não informado: a verificação então mostra a pressão como nota e não diz que ela passa. Para o recalque, digite o módulo do solo {{ui:Es}} (MPa), seu coeficiente de Poisson e o recalque admissível (25 mm para começar). Para um radier flexível, digite um módulo de reação do solo {{ui:ks}}. O aterro sobre a sapata, o peso específico do solo, os coeficientes de segurança para deslizamento e tombamento (1.5 para começar) e a tensão de escoamento das barras também estão disponíveis.

## Informe as cargas

Cada sapata tem uma lista de cargas de pilar. Use {{ui:Adicionar uma carga de pilar}} e preencha a linha de serviço (para pressão no solo, deslizamento e tombamento) e a linha majorada (para as verificações de resistência): a carga vertical P para baixo, as forças horizontais Vx e Vy no topo da sapata, os momentos Mx e My, a posição do pilar sobre a sapata e a sua dimensão.

Ou execute a guia {{ui:Análise}} e pressione {{ui:Obter as cargas dos pilares da Análise}}: cada apoio que está sobre uma sapata se torna uma carga de pilar, a partir dos conjuntos de serviço e majorado que você escolher. Um My positivo carrega mais o lado +x da sapata; um Mx positivo carrega mais o lado −y.

## O que é verificado

A partir das cargas de serviço, somando o peso próprio da sapata e o aterro:

- **Pressão no solo:** a pressão sob uma sapata rígida. Dentro do terço médio, toda a base está em contato; fora dele, parte da base se descola e o pico é maior. Uma resultante fora da base é reprovada.
- **Deslizamento:** atrito multiplicado pela carga vertical, contra a força horizontal.
- **Tombamento:** a distância da resultante até a borda.
- **Recalque:** o recalque elástico da pressão média em um semiespaço com o módulo que você informou, no centro e em um canto (solução de Timoshenko e Goodier para um retângulo flexível), comparado ao limite. É um limite superior para uma sapata rígida e não considera uma camada de solo de profundidade limitada, o alívio pelo solo escavado nem o adensamento. Sem módulo, mostra a pressão como nota.

Apenas a partir das cargas de pilar majoradas (ACI 318-19):

- **Flexão** na face do pilar, com a armadura mínima (0.0018 para barras de 420 MPa) e as barras que você desenhou.
- **Cisalhamento em uma direção** a d da face.
- **Punção** a d/2 em torno de cada pilar, com o momento do pilar. Para um pilar próximo a uma borda, a seção crítica é cortada pela borda da sapata (três lados na borda, dois no canto; ACI 318-19 22.6.4.1 e o αs menor da Tabela 22.6.5.2), e o momento em relação ao centro da própria seção inclui o deslocamento da carga.
- **Ancoragem** das barras além da face do pilar, retas ou com seus ganchos.
- **Altura** acima das barras inferiores (150 mm).

Uma sapata combinada ou um radier é tratado como rígido, e o cisalhamento e o momento vêm da estática em cortes ao longo de toda a largura.

## Radier flexível sobre molas

Marque {{ui:Analisar esta sapata como radier flexível sobre molas}} quando a sapata suportar muitos pilares e a sapata rígida for grosseira demais. A sapata passa a ser uma placa de elementos de quatro nós sobre um leito de molas (o {{ui:ks}} que você digitou, concentrado nos nós), e a carga de cada pilar é distribuída pelos nós da sua própria área. Uma segunda tabela mostra a maior pressão e o maior recalque no solo (e a diferença entre o maior e o menor), o momento fletor em cada direção com a armadura necessária, a tração na face superior comparada à resistência do concreto simples (a sapata não tem barras superiores), o cisalhamento em uma direção a d dos pilares e a punção pela própria pressão das molas. A malha é refinada até que um pilar tenha três elementos de largura; um radier grande leva alguns segundos. O peso próprio do radier e o solo acima dele se anulam e não são considerados.

Toda verificação reprovada está no painel {{ui:Problemas}}, com sua cláusula.

## Grupos de estacas e muros de arrimo

{{ui:Adicionar um grupo de estacas}} coloca uma malha de estacas sob um bloco rígido: digite a carga e os momentos e o que uma estaca pode suportar à compressão e à tração (os valores do projeto de estacas, não desta guia). A reação de cada estaca é P/n mais sua parcela dos momentos (método elástico), e são verificadas a maior compressão e qualquer tração.

{{ui:Adicionar um muro de arrimo}} verifica um muro em balanço sobre aterro nivelado, por metro: pressão ativa de Rankine, tombamento em torno do pé, deslizamento e pressão na base. A pressão passiva na frente do pé não é considerada. O assistente pode executar as mesmas verificações com `pile_group_check` e `retaining_wall_check`.

Os grupos de estacas, os muros e a opção de radier são salvos no arquivo do modelo, e uma verificação reprovada aparece em {{ui:Problemas}}.
