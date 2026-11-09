---
title: Começar com o DetailCraft
summary: O que o DetailCraft faz hoje, como o abrir, e um primeiro modelo, desde os eixos até um desenho de fabrico, em dez minutos.
keywords: começar, primeiro modelo, introdução, pormenorização de aço, armadura, início rápido, tutorial, visão geral
from: e4f16bbe
---

O DetailCraft é a aplicação de pormenorização de aço e de armadura da família CadCraft. Constrói um modelo 3D de uma estrutura metálica sobre eixos e níveis, liga-o e produz o que a oficina precisa: marcas de peças e de montagens, uma lista de materiais, desenhos de fabrico de uma peça, ficheiros NC DSTV, um modelo IFC e um mapa de dobragem para as sapatas.

Esta é uma versão inicial. Faz uma lista curta de coisas com cuidado, em vez de tudo de uma vez. Leia [O que ainda não está implementado](topic:not-built-yet) antes de planear trabalho real com ela.

## O que faz hoje

- Eixos e níveis que escreve, em milímetros.
- Pilares, vigas, contraventamentos e chapas a partir de catálogos publicados de perfis (AISC W, S, C, L, HSS e Pipe; IPE, HEA, HEB e UPN europeus; UB, UC, PFC, EA, UEA, SHS, RHS e CHS do Reino Unido), além dos seus próprios perfis paramétricos.
- Duas ligações: uma chapa de topo aparafusada, de uma viga à banda de um pilar, e uma chapa de base de pilar com quatro chumbadouros. Cada uma pode ser copiada para todas as ligações semelhantes.
- Furos e recortes introduzidos pela posição.
- Sapatas isoladas retangulares com uma malha inferior e armaduras de espera.
- Marcas de peças e de montagens que se atualizam sozinhas após cada alteração.
- Exportações: IFC4, ficheiros NC DSTV (perfis em I e chapas), lista de materiais em CSV, mapa de dobragem em CSV, e um PDF de desenho de fabrico de uma peça.

## Abrir o DetailCraft

1. Abra o DetailCraft num navegador de computador: Chrome, Edge, Firefox ou Safari. Ver [Navegadores e computadores](common:browsers).
2. Aguarde que o ecrã preencha. A barra de estado em baixo diz « Pronto. Abra o Exemplo, ou defina eixos e níveis e comece a colocar barras. »

A vista do modelo precisa de gráficos 3D (WebGL). Se o meio do ecrã disser « Este navegador não conseguiu iniciar os gráficos 3D (WebGL) », veja [Resolução de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Os seus modelos ficam no seu computador. Abrir um modelo lê-o no navegador, e guardar transfere um ficheiro. Nada é carregado. Guardar na nuvem ainda não está disponível. Ver [Onde ficam os seus ficheiros](common:your-files). Para usar o DetailCraft sem ligação mais tarde, escolha uma vez {{ui:Guardar para offline}} na barra da aplicação enquanto estiver ligado; ver [Trabalhar offline](common:offline).
:::

:::offline
Está offline. O DetailCraft só funciona sem ligação se tiver sido guardado para uso offline primeiro: o botão {{ui:Guardar para offline}} na barra da aplicação então mostra {{ui:Pronto para offline}}. Ver [Trabalhar offline](common:offline).
:::

## Veja primeiro o exemplo

A forma mais rápida de ver o que o DetailCraft faz é a estrutura de exemplo.

1. Escolha {{ui:Exemplo}} no grupo {{ui:Ficheiro}} da barra de ferramentas.
2. A vista mostra uma estrutura de dois vãos: seis pilares com chapas de base, quatro vigas com chapas de topo, um contraventamento e sete sapatas com armadura.
3. Clique numa viga. O painel {{ui:Propriedades}} à direita mostra a sua marca de peça, o comprimento de corte, o peso e os furos que as chapas de topo fizeram.
4. Abra o separador {{ui:Lista de materiais}} em baixo para ver cada marca de peça com a quantidade e o peso.

O passo a passo [Explorar a estrutura de exemplo](topic:sample-model) percorre-a peça a peça.

## O seu primeiro modelo

Um modelo novo já tem os eixos 1 a 3 por A a B, com 6000 mm, e dois níveis, Nível 1 em 0 e Nível 2 em 4000.

1. Escolha {{ui:Novo}}. Se o modelo atual tiver alterações, o DetailCraft pergunta se as quer guardar primeiro.
2. Escolha {{ui:Planta}} acima da vista. A lista de níveis ao lado escolhe o Nível 1.
3. Escolha {{ui:Pilar}} na barra de ferramentas, ou prima {{key:C}}.
4. Clique na interseção de eixos A/1. Aparece um pilar W12x50 do Nível 1 ao Nível 2. A barra de estado diz onde ficou.
5. Clique em B/1, A/2 e B/2 para colocar mais três.
6. Escolha o Nível 2 na lista de níveis e depois escolha {{ui:Viga}}, ou prima {{key:B}}.
7. Clique em A/1 e depois em A/2. Uma viga W16x26 liga os topos dos dois pilares, com o topo do aço no nível.
8. Prima {{key:Esc}} para voltar a {{ui:Selecionar}} e clique na viga.
9. Escolha {{ui:Chapas de topo}} no grupo {{ui:Ligar}}. As duas extremidades ficam com uma chapa de topo aparafusada, a viga é cortada para encaixar, e a primeira chapa de topo fica agora selecionada.
10. Clique na viga outra vez.
11. Escolha {{ui:Desenho de fabrico}} no grupo {{ui:Saída}}. Abre-se uma pré-visualização do desenho de fabrico da viga. Escolha {{ui:Transferir PDF}}.
12. Prima {{key:Mod+S}} para guardar o modelo. O navegador transfere `Untitled.detailcraft.json`.

Renomeie o modelo no campo {{ui:Nome}}, no canto superior esquerdo, antes de guardar, para que o ficheiro e cada exportação levem o seu nome.

## Onde ir a seguir

- [Visita ao ecrã](topic:workspace)
- [Definir eixos e níveis](topic:grids-and-levels)
- [Mover-se na vista 3D](topic:navigate-3d), com rato, trackpad ou ecrã tátil
- [Vindo de outro software de pormenorização](topic:coming-from), se conhecer um grande pacote de pormenorização
- [Utilizar esta ajuda](common:help)
