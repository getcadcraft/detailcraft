---
title: Analisar a estrutura
summary: Esforços, reações e flechas das vigas, pilares e contraventamentos tal como estão desenhados, sob casos e combinações de carga que definir. Uma ajuda à análise, não uma verificação de norma; as verificações de dimensionamento são um passo à parte.
keywords: análise, análise estrutural, análise de estrutura, método da rigidez, cargas, caso de carga, combinação, carga permanente, sobrecarga, peso próprio, reações, momento fletor, esforço transverso, esforço normal, flecha, deformada, apoios, articulado, encastrado, libertação, relatório, pdf, csv, craftscript, frame3d
from: ba0081bc
---

O separador {{ui:Análise}} na parte inferior encontra os esforços em cada viga, pilar e contraventamento do modelo, as reações nas bases dos pilares e a flecha das barras, para as cargas que indicar.

:::warning
É uma **ajuda à análise, não uma verificação de norma**. A análise não aplica nenhuma norma de cálculo: não dimensiona barras, não verifica capacidades nem ligações, nem escolhe coeficientes de majoração. Um engenheiro verifica o modelo, as suas cargas e apoios, e decide o que os números significam. Para verificações de barras segundo ASCE 7 / AISC 360 ou EN 1990 / EN 1993-1-1, veja [Verificar barras de aço segundo uma norma de cálculo](topic:design-checks), um passo à parte que também é uma ajuda.
:::

## Executar

1. Abra o separador {{ui:Análise}}.
2. Selecione uma ou mais barras na vista, escolha um {{ui:Caso}}, uma {{ui:Carga}} e uma {{ui:Direção}}, escreva o valor e clique em {{ui:Adicionar carga}}. Uma carga distribuída ao longo de uma barra é em kN/m; uma carga pontual, em kN. {{ui:Para baixo (gravidade)}} é a mais usual.
3. Clique em {{ui:Executar a análise}}.

A tabela lista, para cada barra, o maior esforço normal N, os esforços transversos Vz e Vy, os momentos fletores My e Mz, a torção T e a sua flecha, começando pelo maior momento; clique no nome de uma barra para a selecionar. Por baixo estão as reações em cada apoio. {{ui:No modelo}} desenha a deformada, ou um esforço como diagrama ao lado de cada barra, com o seu maior valor escrito no respetivo ponto. Os resultados ficam desatualizados assim que o modelo muda: execute a análise novamente.

Cada carga, caso e definição é um único passo de anulação ({{key:Mod+Z}}) e fica guardado no ficheiro do modelo.

## Casos de carga e combinações

A análise começa com três: **Permanente** (o peso próprio das barras, a partir das secções desenhadas e de 7850 kg/m³), **Variável** (vazio) e **Permanente + variável**. Acrescente casos próprios (vento, neve …) e combinações: uma combinação soma os casos com os coeficientes que escrever. A análise é linear, pelo que cada caso é resolvido uma vez e as combinações são somas. Escreva os coeficientes, ou escolha uma norma de cálculo e clique em {{ui:Criar combinações}} para que escreva os da norma ([Verificar barras de aço segundo uma norma de cálculo](topic:design-checks)).

## De que é feita a estrutura

- Vigas, pilares e contraventamentos, cada um na sua linha de trabalho (a linha que desenhou), com as propriedades reais da secção calculadas a partir do seu contorno. Chapas, escadas, sapatas e parafusos não fazem parte da estrutura.
- Uma barra é dividida onde a extremidade de outra barra incide sobre ela; assim, uma viga que entra num pilar a meia altura liga-se ao pilar aí.
- **Bases dos pilares**: encastradas (no início) ou articuladas (fixas na posição e contra a torção, livres para rodar). Uma chapa de base faz sempre um apoio.
- **Extremidades das vigas**: uma chapa de topo é rígida, uma chapa de corte é articulada. {{ui:Extremidades de vigas sem ligação}} define as restantes. **Contraventamentos** são articulados nas duas extremidades.
- Selecione uma só barra para dar às suas extremidades, ou à base de um pilar, uma regra própria.
- Aço em todo o lado: E = 200 GPa, G = 77 GPa.

Se a estrutura pode mover-se sem fletir nenhuma barra — um mecanismo, como bases articuladas sem contraventamento numa direção —, a execução para e indica onde e em que direção; trave-o aí com um apoio, uma ligação rígida ou um contraventamento.

## Convenção de sinais

N > 0 é tração. My > 0 põe o lado local −z da barra em tração: uma viga que flete sob a gravidade tem My > 0. Mz > 0 põe o lado local −y em tração. A flecha é medida a partir da reta entre as extremidades da barra. O eixo local z de uma barra aponta para cima (no caso de um pilar, segundo X); os seus eixos locais rodam com a rotação da barra.

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} contêm tudo: as hipóteses em que a estrutura assenta, as secções, os casos e as combinações e, depois, para cada caso e combinação, as reações (com as somas das cargas e das reações, que se equilibram), os esforços nas barras e os deslocamentos, e uma envolvente de todos os casos. {{ui:Exportar como CraftScript}} escreve a mesma estrutura como um script para a área de trabalho Script do PartCraft, onde a função de biblioteca `frame3d` a resolve passo a passo, em código legível.

## Método

O método da rigidez direta, linear e de primeira ordem, a menos que marque Segunda ordem (P-Delta): elementos de viga-pilar de dois nós, com rigidezes axial, de torção e duas de flexão (sem deformação por corte, sem empeno), libertações de extremidade por condensação estática, e cargas ao longo das barras através das suas próprias funções de forma. As respostas são verificadas contra os casos clássicos dos manuais (consolas, vigas simples, encastradas e contínuas, um pórtico, uma grelha em torção, uma treliça).

**Segunda ordem (P-Delta).** Marque *Segunda ordem (P-Delta)* ao lado de Executar: cada combinação é resolvida de novo com os esforços normais das barras a atuar na estrutura deformada (cada barra dividida em 4 partes, para que a flexão de uma barra entre as extremidades também conte), até os esforços normais estabilizarem. A linha de resultado indica o número de passagens e quanto cresceu o deslocamento lateral; os momentos, as flechas, as verificações de dimensionamento e o relatório usam então estes resultados. Acima da carga crítica elástica da estrutura, a execução para e indica-o. É elástica com pequenas rotações, apenas à flexão, sem redução de rigidez nem cargas nocionais (não é apenas o método de análise direta do AISC); lajes, paredes e pisos rígidos continuam de primeira ordem.

**Frequências naturais (elementos finitos).** O bloco {{ui:Elementos finitos: frequências naturais}} por baixo dos resultados encontra os modos mais baixos do mesmo modelo, com o motor de elementos finitos: vigas com as suas libertações de extremidade, lajes e paredes como cascas planas de quatro nós, pisos rígidos e apoios. Escolha quantos modos (3, 6, 10 ou 20) e o elemento da laje (a casca de quatro nós para lajes grossas ou finas, ou a de laje fina) e clique em {{ui:Calcular as frequências}}. A tabela dá a frequência de cada modo em Hz, o seu período em segundos e a sua massa modal efetiva segundo X, Y e Z, como percentagem da massa que pode mover-se. {{ui:Mostrar no modelo}} desenha qualquer modo da mesma forma que a deformada. A massa é a densidade do material vezes o volume: as cargas não acrescentam massa, e um material sem densidade não tem massa. O relatório (PDF, CSV) inclui a tabela. É elástica e apenas para pequenos movimentos, e não se criam aqui cargas sísmicas nem de vento a partir de uma norma. Não é uma verificação de norma; o seu engenheiro revê os resultados.

**Espetro de resposta, histórico no tempo e pushover.** Três blocos mais estão por baixo das frequências, usando o mesmo modelo de elementos finitos. A massa para todos é a densidade do material mais as cargas gravíticas dos casos que marcar, cada uma multiplicada por um coeficiente que escrever (por exemplo, Permanente a 1 e Variável na parte que conta como massa).

{{ui:Espetro de resposta}} lê cada modo a partir de um espetro que indicar (uma tabela de período e aceleração, ou a forma da ASCE 7 a partir de SDS, SD1 e TL; o botão {{ui:Usar os valores do bloco Sísmico}} copia esses valores do bloco Sísmico), e combina os modos por CQC, SRSS, pela regra dos dez por cento ou por uma soma absoluta, depois reúne as direções X, Y e Z (100 % + 30 % ou SRSS). Apresenta o esforço de corte na base, as derivas de piso, os esforços nas extremidades das barras e uma tabela de modos que avisa quando os modos usados levam menos de 90 % da massa. Pode escalar os resultados por um fator ou até um esforço de corte na base que escrever; o bloco nunca calcula esse esforço sozinho. Os resultados não têm sinal.

{{ui:Histórico no tempo}} aplica uma aceleração do solo por sobreposição modal (exata para as retas do registo entre pontos) ou por integração direta (aceleração média de Newmark com amortecimento de Rayleigh). A entrada é um seno ou um pulso inventado (sempre marcado como sintético), um registo que cole, ou um ficheiro de texto que abra (tempo e aceleração, uma aceleração por linha com um passo, ou um ficheiro do tipo PEER com um cabeçalho DT=; em g ou m/s²). Apresenta o deslocamento do topo e o esforço de corte na base em função do tempo, a deriva de cada piso e a envolvente dos esforços nas extremidades das barras. Modelos com um registo muito longo mantêm-no apenas durante a sessão.

{{ui:Pushover}} empurra o topo lateralmente em pequenos passos (padrão semelhante ao do primeiro modo, ou uniforme), com rótulas plásticas nas extremidades das barras com forma de I. Uma rótula cede no momento plástico, que diminui à medida que o esforço normal cresce (calculado a partir da forma desenhada, ignorando os raios de concordância); o endurecimento é opcional, o P-delta é opcional, e pode ser aplicada primeiro uma combinação de gravidade. Apresenta a curva de capacidade (esforço de corte na base em função do deslocamento do topo), a primeira rótula e o estado e a rotação plástica de cada rótula. {{ui:Executar o histórico no tempo não linear}} executa as mesmas rótulas com o registo do bloco Histórico no tempo, em modelos pequenos. As rótulas formam-se apenas nas extremidades das barras (coloque um nó onde deva formar-se uma no meio de um vão); uma barra libertada nas duas extremidades não tem nenhuma; não se modelam o escoamento nem a encurvadura dos contraventamentos; lajes e paredes continuam elásticas; não são dados critérios de aceitação. Não é uma verificação de norma; o seu engenheiro revê os resultados. As definições ficam guardadas com o modelo, e o relatório inclui as tabelas.

Ainda não implementado: análise de encurvadura, uma correção de massa em falta para o espetro de resposta, escala de registos, critérios de aceitação para rótulas (a resposta dinâmica existe, acima), áreas e cargas de vento criadas automaticamente (as forças sísmicas em pisos estão em [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic)), excentricidades das barras, contraventamentos que só trabalham à tração. Ver [Ainda não implementado](topic:not-built-yet).
