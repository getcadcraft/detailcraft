---
title: Desenhos de disposição geral e de montagem
summary: Faça plantas, alçados e um desenho de montagem por marca de montagem a partir do modelo, em folhas A4 a A1 ou ANSI B a D, emita-os com letras de revisão e transfira-os como PDF, DWG ou DXF.
keywords: linhas ocultas, remoção de linhas ocultas, tracejado, nuvem de revisão, nuvens, triângulo de revisão, planta de chumbadouros, mapa de chumbadouros, mapa de chapas de base, implantação, emissão, revisão, rev, tabela de revisões, reemissão, registo de emissões, guia de remessa, dwg, dxf, ficheiro CAD, exportar desenhos, desenhos, disposição geral, ga, planta, alçado, desenho de montagem, formato da folha, formato do papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloid, 11 x 17, 22 x 34, pdf, imprimir, escala, legenda, referência do modelo
from: 709f8604
---

Escolha {{ui:Desenhos}} no grupo {{ui:Saída}}. O DetailCraft faz o conjunto completo a partir do modelo tal como está agora. Nada é guardado: altere o modelo, abra {{ui:Desenhos}} de novo, e o conjunto é refeito.

## O que está no conjunto

- **Plantas**, uma por nível que tenha algo nele, vistas de cima.
- **Alçados**, um por eixo da grelha com barras a menos de 1 m dele.
- **A planta dos chumbadouros**, quando o modelo tem chapas de base: cada chapa de base vista de cima com o seu pilar e os seus chumbadouros, as grelhas com as suas cotas, um pormenor típico de cada padrão de chumbadouros (BP1, BP2 …) com o espaçamento dos chumbadouros e as distâncias às bordas, e dois mapas: os chumbadouros por marca (R1, R2 …: quantidade, diâmetro, comprimento, saliência acima da chapa, embebimento, classe) e as chapas de base por grelha (pilar, padrão, chapa, chumbadouros, topo da chapa). Um pilar fora da grelha é localizado pelas suas coordenadas.
- **Desenhos de montagem**, um por marca de montagem: vistas de frente, de cima e de topo, cotas encadeadas até aos furos e às bordas das chapas, a lista de peças, os parafusos e chumbadouros soltos, e notas de soldadura e de furos. Cada chapa soldada tem um símbolo de cordão de soldadura de ângulo na vista de frente (AWS A2.4): a seta aponta para a junta, o triângulo abaixo da linha de referência indica o lado da seta, o número à sua esquerda é o tamanho da soldadura em mm, e um círculo onde a seta encontra a linha indica soldadura em todo o perímetro.

**Linhas ocultas.** As plantas e os alçados omitem as linhas de uma peça onde outra peça, totalmente à sua frente, a tapa (uma viga vista de topo atrás de um pilar). Os desenhos de montagem desenham uma chapa a tracejado onde a peça principal a tapa: atrás da alma na vista de frente (vista a partir do lado −u da peça), por baixo do banzo superior na vista de cima. As peças que estão à mesma profundidade, ou que se sobrepõem em profundidade, são ambas desenhadas a cheio.

Cada folha tem uma legenda com o número do desenho, a escala, o nome do modelo, a data, o número da folha com o formato da folha, e a referência do modelo: um código gerado a partir do modelo guardado, para que uma impressão possa ser associada ao modelo de onde veio.

## Escolher o formato da folha

Escolha o formato na lista no topo da janela {{ui:Desenhos}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ou {{ui:ANSI D}} (22 × 34 in). Todas as folhas são em paisagem. O conjunto é refeito de imediato no novo formato, e o mesmo formato é usado nos desenhos de oficina. Também está nas [definições do DetailCraft](topic:settings#drawings), e este navegador o recorda.

- Uma folha maior desenha-se a uma escala maior. As escalas são sempre padrão (1:10, 1:20, 1:25, 1:50, 1:100 e assim por diante).
- O texto mantém o mesmo tamanho em todas as folhas, para continuar legível quando impresso.
- Numa folha pequena, uma montagem longa e fina pode ter uma escala maior na sua profundidade do que no seu comprimento. O título da vista indica então ambas as escalas, e prevalecem as cotas.

## Emitir desenhos e revisões

A linha acima da pré-visualização indica em que estado está a folha mostrada: **Ainda não emitida**, **Rev B, emitida … ; sem alterações desde então**, ou, a vermelho, **Alterada desde a rev B: precisa de reemissão**. A lista de folhas assinala as folhas emitidas com a sua revisão e as que precisam de reemissão.

- Escreva para que serve a emissão (começa como «Emitido para fabrico») e escolha {{ui:Emitir esta folha}}, ou {{ui:Emitir folhas alteradas}} para todas as folhas novas ou alteradas desde a última emissão.
- A primeira emissão de uma folha é a revisão A, depois B, C e assim por diante (I e O são saltados).
- A legenda mostra o número do desenho com a sua revisão («A-B1  rev B»), e uma tabela de revisões ao lado lista as emissões mais recentes: revisão, data e descrição. Numa folha pequena mostra as que couberem.
- Uma folha «muda» quando o que está desenhado nela muda: uma peça movida, um furo novo, uma marca renumerada. A data, a contagem de folhas e a própria tabela de revisões não contam. Alterar o formato da folha altera todas as folhas.
- O registo de emissões é guardado no ficheiro do modelo, e emitir é um único passo de anulação. O [ficheiro KISS](topic:kiss-export) transporta a última revisão de cada desenho.

### Nuvens de revisão

A partir da segunda emissão de uma folha, cada peça ou sapata que mudou fica desenhada dentro de uma nuvem de revisão, com um triângulo de revisão que indica a letra.

- Enquanto uma folha tiver mudado desde a última emissão, as nuvens mostram o que mudou desde então, com a revisão seguinte no triângulo (rev B emitida e alterada: os triângulos indicam C).
- Depois de emitir, as nuvens ficam nessa folha de revisão, como num conjunto impresso, até a folha mudar outra vez.
- Cada folha só assinala as alterações que mostra. As plantas e os alçados não desenham furos nem recortes, por isso assinalam uma barra que foi movida, rodada ou redimensionada, ou cuja marca mudou. Os desenhos de montagem e a planta dos chumbadouros assinalam também furos e recortes novos ou movidos.
- Uma marca renumerada conta: quando uma alteração faz de uma viga uma nova montagem, as vigas cuja marca subiu (B1 para B2) são assinaladas nas plantas e nos alçados.
- Uma peça eliminada não deixa nada para assinalar.
- As folhas emitidas antes de as nuvens de revisão existirem (DetailCraft 0.4) começam a assinalar a partir da emissão seguinte.
- As nuvens estão nos ficheiros PDF, DXF e DWG transferidos, e nunca contam como alteração por si.

## Transferir

Escolha o formato na lista ao lado dos botões, depois {{ui:Esta folha}} para a folha mostrada ou {{ui:Todas as folhas}} para o conjunto completo.

- **PDF**: para imprimir ou enviar. {{ui:Todas as folhas}} cria um PDF, uma página por folha, cada página no formato escolhido.
- **DWG**, nos formatos 2018, 2013, 2010, 2007, 2004 ou 2000: para abrir as folhas num programa CAD. Escolha um formato mais antigo para um programa mais antigo.
- **DXF (R12)**: a versão que quase todos os programas CAD abrem.

Uma folha DWG ou DXF é desenhada em tamanho real: uma unidade de desenho é um milímetro no papel, por isso imprime-se a 1:1 e cada vista mantém a escala que o seu título indica. Cada caneta é uma camada própria: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID e assim por diante, com a sua espessura de linha (DWG) e os seus traços. As palavras são texto no estilo de texto do DetailCraft (Arial). As cotas são as linhas e os números que vê, não objetos de cota. {{ui:Todas as folhas}} põe os ficheiros DWG ou DXF num zip, um ficheiro por folha.

:::note
O DXF R12 não tem espessuras de linha nem preenchimentos: as camadas mantêm os seus nomes, por isso defina as canetas por camada ao imprimir, e as formas preenchidas ficam de fora (a barra de estado indica quantas).
:::

Imprima a 100 % (sem «ajustar à página») em papel do mesmo formato, se quiser que as escalas indicadas se mantenham.
