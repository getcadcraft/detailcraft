---
title: Verificar as soldaduras onde as barras se encontram
summary: Depois da verificação de dimensionamento, testar as soldaduras de ângulo e de topo em todo o perímetro de cada barra onde encontra outra barra ou um apoio, segundo a AISC 360-16 Capítulo J ou a EN 1993-1-8, e ver qual o grupo de soldadura mais utilizado e em que combinação. Uma ajuda até que um engenheiro a reveja.
keywords: soldadura, soldaduras, verificação de soldadura, soldadura de ângulo, soldadura de topo, penetração total, AISC 360, EN 1993-1-8, grupo de soldadura, utilização, utilizacao, capacidade, ligação, estrutural, engenheiro
from: e8eebbe6
---

O bloco {{ui:Verificações de soldadura}} do separador {{ui:Análise}}, em {{ui:Verificações de dimensionamento}}, usa os esforços do último pórtico resolvido e as combinações de resistência que criou, e testa a soldadura em todo o perímetro de cada barra em cada nó: onde uma barra encontra outra barra ou assenta num apoio.

:::warning
É uma **ajuda até que um engenheiro a reveja**. Verifica uma soldadura feita em todo o perímetro da secção, como um único grupo, a partir dos esforços de extremidade do próprio pórtico. Não lê a dimensão nem o comprimento das soldaduras que desenhou nos desenhos de fabrico, e não verifica parafusos, chapas, esmagamento, rotura em bloco por corte nem efeito de alavanca. Os seus resultados não são um carimbo.
:::

## Executar

1. Resolva o pórtico no separador {{ui:Análise}} e escolha uma {{ui:Norma de dimensionamento}} em {{ui:Verificações de dimensionamento}}; depois carregue em {{ui:Criar combinações}} (a verificação de soldadura precisa das mesmas combinações de resistência).
2. Em {{ui:Verificações de soldadura}}, defina o {{ui:Cateto do cordão (mm, 0 = a parede, no máximo 8)}}. 0 significa que o cateto segue a parede mais fina da secção, até 8 mm. Com a norma AISC, {{ui:Resistência do metal de soldadura F_EXX (MPa)}} é a resistência do metal de soldadura (482.6 MPa corresponde a um elétrodo E70). Com a EN 1993, a classe do aço dá a resistência do metal de soldadura e o fator de correlação.
3. Carregue em {{ui:Verificar soldaduras}}.

Cada linha da tabela é um grupo de soldadura (uma extremidade de uma barra numa ligação). Os números: a **utilização** da sua verificação que governa, o estado (passa ou falha) e qual a verificação e a cláusula que governaram, e em que combinação. Um grupo que a verificação não consegue avaliar diz porquê (sem classe do aço, sem fator de correlação para a classe na Tabela 4.1 da EN 1993-1-8, sem soldadura nessa secção) em vez de mostrar um número.

Alterar o cateto ou o metal de soldadura, ou editar o modelo, limpa a tabela, porque era para os valores antigos. Carregue em {{ui:Verificar soldaduras}} de novo.

## O que é verificado

- **ASCE 7 + AISC 360:** metal de soldadura de ângulo (o ângulo da carga em relação à soldadura conta, J2.4), rotura por corte do metal de base (J4.2) e soldaduras de topo de penetração total (Tabela J2.5).
- **EN 1990 + EN 1993:** soldaduras de ângulo pelo método simplificado da EN 1993-1-8 4.5.3.3 e soldaduras de topo a partir de 4.7.1.
- Avisos de pormenorização face ao cateto mínimo e máximo e ao comprimento mínimo, com o valor com que foram comparados.

O grupo de soldadura é tratado como uma secção linear e carregado pelo método vetorial elástico: cada parte da soldadura recebe o esforço axial da barra, os dois esforços transversos, a torção e os dois momentos fletores, somados como vetores.

## O que não é verificado

Ainda não estão implementados: soldaduras de penetração parcial, soldaduras de ângulo oblíquas, soldaduras de tampão e de entalhe, soldaduras descontínuas, o método do centro instantâneo, o método direcional da EN, fadiga e a rotura em bloco por corte do metal de base. Algumas constantes das normas foram escritas a partir das próprias normas e ainda não foram comparadas com uma cópia impressa; o relatório indica de onde vem cada número ({{ui:Relatório (PDF)}} passa a incluir as tabelas de soldadura depois de verificar). Veja [Verificar barras de aço](topic:design-checks) e [Ainda não implementado](topic:not-built-yet).
