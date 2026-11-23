---
title: Verificar as soldas onde as barras se encontram
summary: Depois da verificação de dimensionamento, teste as soldas de filete e de topo em todo o contorno de cada barra onde ela encontra outra barra ou um apoio, conforme a AISC 360-16 Capítulo J ou a EN 1993-1-8, e veja qual grupo de solda é mais utilizado e sob qual combinação. Um auxílio até que um engenheiro tenha revisado.
keywords: solda, soldas, verificação de solda, solda de filete, solda de topo, penetração total, AISC 360, EN 1993-1-8, grupo de solda, utilização, capacidade, ligação, conexão, estrutural, engenheiro
from: e8eebbe6
---

O bloco {{ui:Verificações de solda}} na guia {{ui:Análise}}, abaixo de {{ui:Verificações de dimensionamento}}, usa os esforços do último pórtico resolvido e as combinações de resistência que você criou, e verifica a solda em todo o contorno de cada barra em cada nó: onde uma barra encontra outra barra ou se apoia em um apoio.

:::warning
É um **auxílio até que um engenheiro o tenha revisado**. Verifica uma solda desenhada em todo o contorno da seção, como um único grupo, a partir dos esforços de extremidade do próprio pórtico. Não lê o tamanho nem o comprimento das soldas que você desenhou nos desenhos de fabricação, e não verifica parafusos, chapas, pressão de contato, cisalhamento em bloco nem efeito alavanca. Seus resultados não são um selo de aprovação.
:::

## Executar

1. Resolva o pórtico na guia {{ui:Análise}} e escolha uma {{ui:Norma de projeto}} em {{ui:Verificações de dimensionamento}}; depois pressione {{ui:Criar combinações}} (a verificação de solda precisa das mesmas combinações de resistência).
2. Em {{ui:Verificações de solda}}, defina o {{ui:Cateto do filete (mm, 0 = a parede, no máximo 8)}}. 0 significa que o cateto segue a parede mais fina da seção, até 8 mm. Pela norma AISC, {{ui:Resistência do metal de solda F_EXX (MPa)}} é a resistência do metal de solda (482.6 MPa corresponde a um eletrodo E70). Pela EN 1993, a classe do aço define a resistência do metal de solda e o fator de correlação.
3. Pressione {{ui:Verificar soldas}}.

Cada linha da tabela é um grupo de solda (uma extremidade de ligação de uma barra). Os números: a **utilização** da sua verificação governante, o estado (passa ou falha), e qual verificação e cláusula governaram em qual combinação. Um grupo que a verificação não consegue julgar informa o motivo (sem classe de aço, sem fator de correlação para a classe na Tabela 4.1 da EN 1993-1-8, sem solda naquela seção) em vez de mostrar um número.

Alterar o cateto ou o metal de solda, ou editar o modelo, limpa a tabela: ela era para os valores antigos. Pressione {{ui:Verificar soldas}} de novo.

## O que é verificado

- **ASCE 7 + AISC 360:** metal da solda de filete (o ângulo da carga em relação à solda conta, J2.4), ruptura por cisalhamento do metal base (J4.2) e soldas de topo de penetração total (Tabela J2.5).
- **EN 1990 + EN 1993:** soldas de filete pelo método simplificado da EN 1993-1-8 4.5.3.3 e soldas de topo a partir de 4.7.1.
- Avisos de detalhamento comparando com o cateto mínimo e máximo e com o comprimento mínimo, com o valor com que foram comparados.

O grupo de solda é tratado como uma seção de linha e carregado pelo método vetorial elástico: cada parte da solda recebe a força axial da barra, os dois cisalhamentos, a torção e os dois momentos fletores, somados como vetores.

## O que não é verificado

Soldas de penetração parcial, filetes inclinados, soldas de tampão e de fenda, soldas intermitentes, o método do centro instantâneo, o método direcional da EN, fadiga e o cisalhamento em bloco do metal base não estão implementados. Algumas constantes das normas foram escritas a partir delas e ainda não foram comparadas com uma cópia impressa; o relatório lista de onde vem cada número ({{ui:Relatório (PDF)}} ganha as tabelas de solda depois da verificação). Veja [Verificar barras de aço](topic:design-checks) e [Ainda não implementado](topic:not-built-yet).
