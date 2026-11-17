---
title: Analisar o pórtico
summary: Esforços, reações e deslocamentos das vigas, pilares e contraventamentos como desenhados, sob casos e combinações de carga que você define. Um auxílio para análise, não uma verificação de norma; as verificações de projeto são uma etapa separada.
keywords: análise, análise estrutural, análise de pórtico, método da rigidez, cargas, caso de carga, combinação, carga permanente, sobrecarga, peso próprio, reações, momento fletor, cisalhamento, força normal, deslocamento, forma deformada, apoios, articulado, engastado, liberação, relatório, pdf, csv, craftscript, frame3d
from: ba0081bc
---

A guia {{ui:Análise}} na parte inferior calcula os esforços em cada viga, pilar e contraventamento do modelo, as reações nas bases dos pilares e o quanto as barras se deformam, para as cargas que você informar.

:::warning
É um **auxílio para análise, não uma verificação de norma**. A análise não aplica nenhuma norma de projeto: não dimensiona barras, não verifica capacidades nem ligações, nem escolhe coeficientes de majoração de carga. Um engenheiro verifica o modelo, suas cargas e apoios, e decide o que os números significam. Para verificações de barras de acordo com ASCE 7 / AISC 360 ou EN 1990 / EN 1993-1-1, veja [Verificar barras de aço conforme uma norma de projeto](topic:design-checks), uma etapa separada que também é um auxílio.
:::

## Executar

1. Abra a guia {{ui:Análise}}.
2. Selecione uma ou mais barras na vista, escolha um {{ui:Caso}}, uma {{ui:Carga}} e uma {{ui:Direção}}, digite o valor e pressione {{ui:Adicionar carga}}. Uma carga distribuída ao longo de uma barra é em kN/m; uma carga pontual, em kN. {{ui:Para baixo (gravidade)}} é a mais usual.
3. Pressione {{ui:Executar análise}}.

A tabela lista, para cada barra, a maior força normal N, os cisalhamentos Vz e Vy, os momentos fletores My e Mz, a torção T e seu deslocamento, com o maior momento primeiro; clique no nome de uma barra para selecioná-la. Abaixo estão as reações em cada apoio. {{ui:No modelo}} desenha a forma deformada, ou um dos esforços como diagrama ao lado de cada barra, com seu maior valor escrito no seu lugar. Os resultados ficam desatualizados assim que o modelo muda: execute novamente.

Cada carga, caso e configuração é uma etapa de desfazer ({{key:Mod+Z}}) e é salvo no arquivo do modelo.

## Casos de carga e combinações

A análise começa com três: **Permanente** (o peso próprio das barras, a partir das seções desenhadas e de 7850 kg/m³), **Sobrecarga** (vazio) e **Permanente + sobrecarga**. Adicione casos próprios (vento, neve …) e combinações: uma combinação soma os casos com os coeficientes que você digitar. A análise é linear, então cada caso é resolvido uma vez e as combinações são somas. Digite os coeficientes você mesmo, ou escolha uma norma de projeto e deixe {{ui:Criar combinações}} gerar as da norma ([Verificar barras de aço conforme uma norma de projeto](topic:design-checks)).

## Do que o pórtico é feito

- Vigas, pilares e contraventamentos, cada um sobre sua linha de trabalho (a linha que você desenhou), com as propriedades reais da seção calculadas a partir de seu contorno. Chapas, escadas, sapatas e parafusos não fazem parte do pórtico.
- Uma barra é dividida onde a extremidade de outra barra incide sobre ela, então uma viga que chega a um pilar na altura média se liga ao pilar ali.
- **Bases dos pilares**: engastada (o início) ou articulada (presa no lugar e contra torção, livre para girar). Uma chapa de base sempre forma um apoio.
- **Extremidades das vigas**: uma chapa de extremidade é rígida, uma aba de cisalhamento é articulada. {{ui:Pontas de viga sem ligação}} define as demais. **Contraventamentos** são articulados nas duas extremidades.
- Selecione uma barra para dar às suas extremidades, ou à base de um pilar, uma regra própria.
- Aço em todos os elementos: E = 200 GPa, G = 77 GPa.

Se o pórtico puder se mover sem flexionar nada — um mecanismo, como bases articuladas sem contraventamento em uma direção —, a execução para e informa onde e em qual sentido; contenha-o com um apoio, uma ligação rígida ou um contraventamento.

## Sinais

N > 0 é tração. My > 0 coloca em tração o lado −z local da barra: uma viga que flete para baixo sob a gravidade tem My > 0. Mz > 0 coloca em tração o lado −y local. O deslocamento é medido a partir da reta entre as extremidades da barra. O eixo z local de uma barra aponta para cima (para um pilar: ao longo de X); seus eixos locais giram com a rotação da barra.

## O relatório

{{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} contêm tudo: as premissas em que o pórtico foi montado, seções, casos e combinações; em seguida, para cada caso e combinação, as reações (com as somas das cargas e das reações, que se equilibram), os esforços nas barras e os deslocamentos, e uma envoltória de todos os casos. {{ui:Exportar como CraftScript}} grava o mesmo pórtico como um script para a área de trabalho Script do PartCraft, onde a função de biblioteca `frame3d` o resolve passo a passo em código legível.

## Método

O método da rigidez direta, linear e de primeira ordem, a menos que você marque Segunda ordem (P-Delta): vigas-pilares de dois nós com rigidezes axial, de torção e duas de flexão (sem deformação por cisalhamento e sem empenamento), liberações nas extremidades por condensação estática, cargas ao longo das barras por meio das próprias funções de forma das barras. Suas respostas são verificadas contra casos clássicos de livros-texto (balanços, vigas simples, engastadas e contínuas, um pórtico plano, uma grelha em torção, uma treliça).

**Segunda ordem (P-Delta).** Marque *Segunda ordem (P-Delta)* ao lado de Executar: cada combinação é resolvida novamente com as forças normais das barras atuando sobre o pórtico deformado (cada barra dividida em 4 trechos, de modo que a flexão de uma barra entre suas extremidades também conta), até que as forças normais se estabilizem. A linha de resultado informa o número de passagens e quanto o deslocamento lateral cresceu; os momentos, deslocamentos, verificações de projeto e o relatório passam então a usar esses resultados. Acima da carga crítica elástica do pórtico, a execução para e informa isso. É elástico com pequenas rotações, apenas flexional, sem redução de rigidez nem cargas nocionais (não é o método de análise direta da AISC por si só); lajes, paredes e pisos rígidos permanecem de primeira ordem.

**Frequências naturais (elementos finitos).** O bloco {{ui:Elementos finitos: frequências naturais}} abaixo dos resultados encontra os modos mais baixos do mesmo modelo com o motor de elementos finitos: vigas com suas liberações nas extremidades, lajes e paredes como cascas planas de quatro nós, pisos rígidos e apoios. Escolha quantos modos (3, 6, 10 ou 20) e o elemento de laje (a casca de quatro nós para lajes espessas ou finas, ou o de laje fina), e pressione {{ui:Encontrar as frequências}}. A tabela informa a frequência de cada modo em Hz, seu período em segundos e sua massa modal efetiva em X, Y e Z como fração da massa que pode se mover; {{ui:Mostrar no modelo}} desenha qualquer modo da mesma forma que a forma deformada. A massa é a densidade do material vezes o volume: as cargas não adicionam massa, e um material sem densidade não tem massa. O relatório (PDF, CSV) contém a tabela. É apenas elástico e de pequenos movimentos, e nenhuma carga sísmica ou de vento é gerada aqui a partir de norma. Não é uma verificação de norma; seu engenheiro revisa os resultados.

**Espectro de resposta, histórico no tempo e pushover.** Mais três blocos ficam abaixo das frequências, usando o mesmo modelo de elementos finitos. A massa de todos eles é a densidade do material mais as cargas para baixo dos casos que você marcar, cada uma multiplicada por um fator que você digitar (por exemplo, Permanente com 1 e Sobrecarga com a parcela que você considera como massa).

{{ui:Espectro de resposta}} lê cada modo de um espectro que você fornece (uma tabela de período e aceleração, ou a forma da ASCE 7 a partir de SDS, SD1 e TL; o botão {{ui:Usar os valores do bloco Sísmico}} copia esses valores do bloco Sísmico) e combina os modos por CQC, SRSS, pela regra de dez por cento ou por soma absoluta, depois combina as direções X, Y e Z (100 % + 30 % ou SRSS). Fornece o cortante na base, os deslocamentos entre pavimentos, os esforços nas extremidades das barras e uma tabela de modos que alerta quando os modos usados contêm menos de 90 % da massa. Você pode escalar os resultados por um fator ou até um cortante na base que digitar; o bloco nunca calcula esse cortante sozinho. Os resultados não têm sinal.

{{ui:Histórico no tempo}} aplica uma aceleração do solo por superposição modal (exata para as retas do registro entre pontos) ou por integração direta (aceleração média de Newmark com amortecimento de Rayleigh). A entrada é um seno ou pulso gerado (sempre identificado como sintético), um registro que você cola, ou um arquivo de texto que você abre (tempo e aceleração, uma aceleração por linha com um passo, ou um arquivo no estilo PEER com cabeçalho DT=; em g ou m/s²). Fornece o deslocamento do topo e o cortante na base ao longo do tempo, o deslocamento entre cada pavimento e a envoltória dos esforços nas extremidades das barras. Modelos com registro muito longo o mantêm apenas durante a sessão.

{{ui:Pushover}} empurra o topo lateralmente em pequenos passos (padrão semelhante ao do primeiro modo, ou uniforme), com rótulas plásticas nas extremidades das barras de seção I. Uma rótula escoa no momento plástico, que diminui à medida que a força normal cresce (calculado a partir da forma desenhada, desconsiderados os arredondamentos); o endurecimento é opcional, o P-delta é opcional, e uma combinação de gravidade pode ser aplicada antes. Fornece a curva de capacidade (cortante na base contra deslocamento do topo), a primeira rótula, e o estado e a rotação plástica de cada rótula. {{ui:Executar o histórico no tempo não linear}} aplica as mesmas rótulas sob o registro do bloco Histórico no tempo, em modelos pequenos. As rótulas se formam apenas nas extremidades das barras (coloque um nó onde uma rótula deva se formar dentro de um vão); uma barra liberada nas duas extremidades não recebe nenhuma, e o escoamento e a flambagem de contraventamentos não são modelados; lajes e paredes permanecem elásticas; não são dados critérios de aceitação. Não é uma verificação de norma; seu engenheiro revisa os resultados. As configurações são salvas com o modelo, e o relatório contém as tabelas.

Ainda não implementado: análise de flambagem, correção de massa faltante para o espectro de resposta, escala de registros, critérios de aceitação para rótulas (a resposta dinâmica já existe, acima), cargas de área e de vento geradas automaticamente (as forças sísmicas em pisos estão em [Verificar elementos de concreto e gerar cargas sísmicas](topic:concrete-and-seismic)), excentricidades das barras, contraventamentos que trabalham apenas à tração. Veja [Ainda não implementado](topic:not-built-yet).
