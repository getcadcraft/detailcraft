---
title: Primeiros passos com o DetailCraft
summary: O que o DetailCraft faz hoje, como abri-lo e um primeiro modelo, dos eixos ao desenho de fabricação, em dez minutos.
keywords: início, primeiro modelo, introdução, detalhamento de aço, armadura, início rápido, tutorial, visão geral
from: 3682c0d8
---

O DetailCraft é o aplicativo de detalhamento de aço e armadura da família CadCraft. Você monta um modelo 3D de uma estrutura de aço sobre eixos e níveis, liga as barras e obtém o que a oficina precisa: posições de peças e de conjuntos, uma lista de materiais, desenhos de fabricação de uma peça, arquivos NC DSTV, um modelo IFC e uma tabela de dobramento para as sapatas.

Esta é uma versão inicial. Ela faz uma lista curta de coisas com cuidado, em vez de tudo de uma vez. Leia [O que ainda não foi implementado](topic:not-built-yet) antes de planejar um trabalho real com ela.

## O que ele faz hoje

- Eixos e níveis digitados por você, em milímetros.
- Pilares, vigas, contraventamentos e chapas a partir de catálogos de perfis publicados (AISC W, S, C, L, HSS e Pipe; europeus IPE, HEA, HEB e UPN), além de perfis paramétricos próprios.
- Duas ligações: uma chapa de extremidade parafusada de uma viga à mesa de um pilar e uma chapa de base de pilar com quatro chumbadores. Cada uma pode ser copiada para todas as juntas semelhantes.
- Furos e rebaixos digitados por posição.
- Sapatas retangulares com malha inferior e barras de espera.
- Posições de peças e de conjuntos que se atualizam sozinhas a cada alteração.
- Exportações: IFC4, arquivos NC DSTV (perfis I e chapas), lista de materiais em CSV, tabela de dobramento em CSV e um PDF de desenho de fabricação de uma peça.

## Abrir o DetailCraft

1. Abra o DetailCraft em um navegador de computador: Chrome, Edge, Firefox ou Safari. Veja [Navegadores e computadores](common:browsers).
2. Espere a tela ser preenchida. A barra de status, embaixo, diz "Pronto. Abra o Exemplo, ou defina eixos e níveis e comece a inserir barras."

A vista do modelo precisa de gráficos 3D (WebGL). Se o meio da tela disser "Este navegador não conseguiu iniciar os gráficos 3D (WebGL)", veja [Solução de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Seus modelos ficam no seu computador. Abrir um modelo o lê no navegador e salvar baixa um arquivo. Nada é enviado. O salvamento na nuvem ainda não está disponível. Veja [Para onde vão seus arquivos](common:your-files). Para usar o DetailCraft sem conexão mais tarde, escolha {{ui:Salvar para uso offline}} na barra do aplicativo uma vez, com conexão; veja [Trabalhar offline](common:offline).
:::

:::offline
Você está offline. O DetailCraft funciona sem conexão apenas se tiver sido salvo antes para uso offline: o botão {{ui:Salvar para uso offline}} na barra do aplicativo passa a mostrar {{ui:Pronto para uso offline}}. Veja [Trabalhar offline](common:offline).
:::

## Veja primeiro o exemplo

A forma mais rápida de ver o que o DetailCraft produz é a estrutura de exemplo.

1. Escolha {{ui:Exemplo}} no grupo {{ui:Arquivo}} da barra de ferramentas.
2. A vista mostra uma estrutura de dois vãos: seis pilares com chapas de base, quatro vigas com chapas de extremidade, um contraventamento e sete sapatas com armadura.
3. Clique em uma viga. O painel {{ui:Propriedades}}, à direita, mostra a posição da peça, o comprimento de corte, o peso e os furos feitos pelas chapas de extremidade.
4. Abra a guia {{ui:Lista de materiais}}, embaixo, para ver cada posição de peça com sua quantidade e seu peso.

O passo a passo [Explore a estrutura de exemplo](topic:sample-model) percorre tudo peça por peça.

## Seu primeiro modelo

Um modelo novo já tem eixos 1 a 3 por A a B a 6000 mm e dois níveis, Nível 1 em 0 e Nível 2 em 4000.

1. Escolha {{ui:Novo}}. Se o modelo atual tiver alterações, o DetailCraft pergunta se você quer salvá-las antes.
2. Escolha {{ui:Planta}} acima da vista. A lista de níveis ao lado seleciona o Nível 1.
3. Escolha {{ui:Pilar}} na barra de ferramentas ou pressione {{key:C}}.
4. Clique na interseção de eixos A/1. Um pilar W12x50 aparece do Nível 1 ao Nível 2. A barra de status diz onde ele foi parar.
5. Clique em B/1, A/2 e B/2 para inserir mais três.
6. Escolha o Nível 2 na lista de níveis e depois escolha {{ui:Viga}} ou pressione {{key:B}}.
7. Clique em A/1 e depois em A/2. Uma viga W16x26 liga os topos dos dois pilares, com o topo do aço no nível.
8. Pressione {{key:Esc}} para voltar a {{ui:Selecionar}} e clique na viga.
9. Escolha {{ui:Chapas de extremidade}} no grupo {{ui:Ligar}}. As duas pontas recebem uma chapa de extremidade parafusada, a viga é recuada para encaixar e a primeira chapa de extremidade fica selecionada.
10. Clique na viga de novo.
11. Escolha {{ui:Desenho de fabricação}} no grupo {{ui:Saída}}. Abre-se uma visualização do desenho de fabricação da viga. Escolha {{ui:Baixar PDF}}.
12. Pressione {{key:Mod+S}} para salvar o modelo. O navegador baixa `Untitled.detailcraft.json`.

Renomeie o modelo no campo {{ui:Nome}}, no canto superior esquerdo, antes de salvar, para que o arquivo e todas as exportações levem o nome dele.

## Para onde ir em seguida

- [Um tour pela tela](topic:workspace)
- [Defina eixos e níveis](topic:grids-and-levels)
- [Movimente-se na vista 3D](topic:navigate-3d), com mouse, trackpad ou tela de toque
- [Vindo de outros programas de detalhamento](topic:coming-from), se você conhece um grande pacote de detalhamento
- [Como usar esta ajuda](common:help)
