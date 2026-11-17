---
title: Desenhos de arranjo geral e de montagem
summary: Gere plantas, elevações e um desenho de montagem por marca de montagem a partir do modelo, em folhas A4 a A1 ou ANSI B a D, emita-os com letras de revisão e baixe-os como PDF, DWG ou DXF.
keywords: linhas ocultas, remoção de linhas ocultas, tracejado, nuvem de revisão, nuvens, triângulo de revisão, planta de chumbadores, chumbadores, quadro de barras, quadro de chapas de base, locação, emitir, revisão, rev, tabela de revisões, reemissão, registro de emissões, transmittal, dwg, dxf, arquivo CAD, exportar desenhos, desenhos, arranjo geral, ga, planta, elevação, desenho de montagem, tamanho da folha, tamanho do papel, a4, a3, a2, a1, ansi b, ansi c, ansi d, tabloide, 11 x 17, 22 x 34, pdf, imprimir, escala, legenda, referência do modelo
from: 709f8604
---

Escolha {{ui:Desenhos}} no grupo {{ui:Saída}}. O DetailCraft gera o conjunto inteiro a partir do modelo como ele está agora. Nada é armazenado: altere o modelo, abra {{ui:Desenhos}} de novo, e o conjunto é gerado novamente.

## O que está no conjunto

- **Plantas**, uma por nível que tenha algo nele, vistas de cima.
- **Elevações**, uma por eixo com barras a até 1 m dele.
- **A planta de chumbadores**, quando o modelo tem chapas de base: cada chapa de base vista de cima com seu pilar e seus chumbadores, os eixos com suas cotas, um detalhe típico de cada padrão de chumbadores (BP1, BP2 …) com o espaçamento dos chumbadores e as distâncias às bordas, e dois quadros: os chumbadores por marca (R1, R2 …: quantidade, diâmetro, comprimento, projeção acima da chapa, embutimento, classe) e as chapas de base por eixo (pilar, padrão, chapa, chumbadores, topo da chapa). Um pilar fora do eixo é localizado pelas suas coordenadas.
- **Desenhos de montagem**, um por marca de montagem: vistas frontal, superior e de extremidade, cotas encadeadas até os furos e as bordas das chapas, a lista de peças, os parafusos e chumbadores avulsos, e notas de solda e de furos. Cada chapa soldada tem um símbolo de solda de filete na vista frontal (AWS A2.4): a seta aponta para a junta, o triângulo abaixo da linha de referência indica o lado da seta, o número à sua esquerda é o tamanho da solda em mm, e um círculo onde a seta encontra a linha significa contorno em todo o perímetro.

**Linhas ocultas.** Plantas e elevações omitem as linhas de uma peça onde outra peça inteiramente à sua frente a cobre (uma viga vista de topo atrás de um pilar). Desenhos de montagem desenham uma chapa tracejada onde a peça principal a cobre: atrás da alma na vista frontal (vista do lado −u da peça), sob a mesa superior na vista superior. Peças na mesma profundidade, ou que se sobrepõem em profundidade, são desenhadas inteiras.

Cada folha tem uma legenda com o número do desenho, a escala, o nome do modelo, a data, o número da folha com o tamanho da folha, e a referência do modelo: um código feito a partir do modelo salvo, para que uma impressão possa ser associada ao modelo de onde veio.

## Escolher o tamanho da folha

Escolha o tamanho na lista no topo da janela {{ui:Desenhos}}: {{ui:A4}}, {{ui:A3}}, {{ui:A2}}, {{ui:A1}}, {{ui:ANSI B}} (11 × 17 in), {{ui:ANSI C}} (17 × 22 in) ou {{ui:ANSI D}} (22 × 34 in). Todas as folhas são em paisagem. O conjunto é gerado de novo no novo tamanho imediatamente, e o mesmo tamanho é usado para os desenhos de fabricação. Ele também está nas [configurações do DetailCraft](topic:settings#drawings), e este navegador o lembra.

- Uma folha maior desenha em escala maior. As escalas são sempre padronizadas (1:10, 1:20, 1:25, 1:50, 1:100 e assim por diante).
- O texto mantém o mesmo tamanho em todas as folhas, para continuar legível quando impresso.
- Em uma folha pequena, uma montagem longa e fina pode ter escala maior na profundidade do que no comprimento. O título da vista então indica as duas escalas, e as cotas prevalecem.

## Emitir desenhos e revisões

A linha acima da visualização diz em que situação está a folha exibida: **Ainda não emitida**, **Rev B, emitida … ; sem alterações desde então**, ou, em vermelho, **Alterada desde a rev B: precisa de reemissão**. A lista de folhas marca as folhas emitidas com sua revisão e as que precisam de reemissão.

- Digite para que serve a emissão (começa como "Emitido para fabricação") e escolha {{ui:Emitir esta folha}}, ou {{ui:Emitir folhas alteradas}} para cada folha que seja nova ou tenha mudado desde sua última emissão.
- A primeira emissão de uma folha é a revisão A, depois B, C e assim por diante (I e O são pulados).
- O título da legenda mostra o número do desenho com sua revisão ("A-B1  rev B"), e uma tabela de revisões ao lado lista as emissões mais recentes: revisão, data e descrição. Em uma folha pequena, mostra quantas couberem.
- Uma folha "muda" quando o que está desenhado nela muda: uma peça movida, um furo novo, uma marca renumerada. A data, a contagem de folhas e a própria tabela de revisões não contam. Mudar o tamanho da folha altera todas as folhas.
- O registro de emissões é salvo no arquivo do modelo, e emitir é uma única etapa de desfazer. O [arquivo KISS](topic:kiss-export) carrega a revisão mais recente de cada desenho.

### Nuvens de revisão

A partir da segunda emissão de uma folha, cada peça ou sapata que mudou é desenhada dentro de uma nuvem de revisão com um triângulo de revisão contendo a letra.

- Enquanto uma folha tiver mudado desde sua última emissão, as nuvens mostram o que mudou desde então, com a próxima revisão no triângulo (rev B emitida e alterada: os triângulos dizem C).
- Depois que você emite, as nuvens permanecem na folha daquela revisão, como em um conjunto impresso, até que a folha mude de novo.
- Cada folha só faz nuvens das mudanças que ela mostra. Plantas e elevações não desenham furos nem recortes, então fazem nuvem de uma barra que foi movida, girada ou redimensionada, ou cuja marca mudou. Desenhos de montagem e a planta de chumbadores também fazem nuvem de furos e recortes novos ou movidos.
- Uma marca renumerada conta: quando uma mudança transforma uma viga em uma nova montagem, as vigas cuja marca subiu (B1 para B2) recebem nuvem em plantas e elevações.
- Uma peça que foi excluída não deixa nada para fazer nuvem.
- Folhas emitidas antes da chegada das nuvens de revisão (DetailCraft 0.4) começam a ter nuvens a partir da próxima emissão.
- As nuvens estão nos downloads PDF, DXF e DWG, e nunca contam como mudança por si mesmas.

## Baixar

Escolha o formato na lista ao lado dos botões, depois {{ui:Esta folha}} para a folha exibida ou {{ui:Todas as folhas}} para o conjunto inteiro.

- **PDF**: para imprimir ou enviar. {{ui:Todas as folhas}} gera um PDF, uma página por folha, cada página no tamanho escolhido.
- **DWG**, nos formatos 2018, 2013, 2010, 2007, 2004 ou 2000: para abrir as folhas em um programa de CAD. Escolha um formato mais antigo para um programa mais antigo.
- **DXF (R12)**: a versão que quase todo programa de CAD abre.

Uma folha DWG ou DXF é desenhada em tamanho real: uma unidade de desenho é um milímetro no papel, então imprime em 1:1 e cada vista mantém a escala indicada no seu título. Cada caneta é uma camada própria: DC-OUTLINE, DC-THICK, DC-THIN, DC-HIDDEN, DC-CENTER, DC-GRID e assim por diante, com sua espessura de linha (DWG) e seus traços. Os textos são texto no estilo de texto do DetailCraft (Arial). As cotas são as linhas e números que você vê, não objetos de cota. {{ui:Todas as folhas}} coloca os arquivos DWG ou DXF em um único zip, um arquivo por folha.

:::note
O DXF R12 não tem espessuras de linha nem preenchimentos: as camadas mantêm seus nomes, então defina as canetas por camada ao plotar, e formas preenchidas ficam de fora (a barra de status informa quantas).
:::

Imprima em 100% (sem "ajustar à página") em papel do mesmo tamanho se quiser que as escalas indicadas se mantenham.
