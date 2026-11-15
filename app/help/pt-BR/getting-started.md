---
title: Primeiros passos com o DetailCraft
summary: O que o DetailCraft faz hoje, como abri-lo e um primeiro modelo, de eixos a um desenho de fabricação, em dez minutos.
keywords: começar, primeiro modelo, introdução, detalhamento de aço, armadura, início rápido, tutorial, visão geral
from: e4f16bbe
---

O DetailCraft é o aplicativo de detalhamento de aço e de armadura da família CadCraft. Você monta um modelo 3D de uma estrutura de aço sobre eixos e níveis, liga as peças e obtém o que a fábrica precisa: marcas de peças e de montagens, uma lista de materiais, desenhos de fabricação de uma peça, arquivos NC DSTV, um modelo IFC e uma tabela de dobramento das sapatas.

Esta é uma versão inicial. Ela faz uma lista curta de coisas com cuidado, em vez de tudo de uma vez. Leia [O que ainda não está implementado](topic:not-built-yet) antes de planejar um trabalho real com ele.

## O que ele faz hoje

- Eixos e níveis que você digita, em milímetros.
- Pilares, vigas, contraventamentos e chapas a partir de catálogos de perfis publicados (AISC W, S, C, L, HSS e Pipe; IPE, HEA, HEB e UPN europeus; UB, UC, PFC, EA, UEA, SHS, RHS e CHS britânicos), além dos seus próprios perfis paramétricos.
- Duas ligações: uma chapa de extremidade parafusada de uma viga até a mesa de um pilar, e uma chapa de base de pilar com quatro chumbadores. Cada uma pode ser copiada para todas as ligações semelhantes.
- Furos e rebaixos digitados pela posição.
- Sapatas retangulares com malha inferior e barras de espera.
- Marcas de peças e de montagens que se atualizam sozinhas após cada alteração.
- Exportações: IFC4, arquivos NC DSTV (perfis I e chapas), lista de materiais em CSV, tabela de dobramento em CSV e um PDF de desenho de fabricação de uma peça.

## Abrir o DetailCraft

1. Abra o DetailCraft em um navegador de computador: Chrome, Edge, Firefox ou Safari. Veja [Navegadores e computadores](common:browsers).
2. Espere a tela preencher. A barra de status na parte inferior diz "Pronto. Abra o Exemplo, ou defina eixos e níveis e comece a posicionar barras."

A visualização do modelo precisa de gráficos 3D (WebGL). Se o meio da tela disser "Este navegador não conseguiu iniciar os gráficos 3D (WebGL)", veja [Solução de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Seus modelos ficam no seu computador. Abrir um modelo o lê no navegador, e salvar baixa um arquivo. Nada é enviado. O salvamento na nuvem ainda não está disponível. Veja [Onde ficam seus arquivos](common:your-files). Para usar o DetailCraft sem conexão depois, escolha {{ui:Save for offline}} na barra do aplicativo uma vez, enquanto estiver online; veja [Trabalhar offline](common:offline).
:::

:::offline
Você está offline. O DetailCraft só funciona sem conexão se tiver sido salvo para uso offline antes: o botão {{ui:Save for offline}} na barra do aplicativo então mostra {{ui:Offline ready}}. Veja [Trabalhar offline](common:offline).
:::

## Veja primeiro o exemplo

A forma mais rápida de ver o que o DetailCraft faz é o pórtico de exemplo.

1. Escolha {{ui:Sample}} no grupo {{ui:File}} da barra de ferramentas.
2. A visualização mostra um pórtico de dois vãos: seis pilares com chapas de base, quatro vigas com chapas de extremidade, uma diagonal e sete sapatas com armadura.
3. Clique em uma viga. O painel {{ui:Properties}} à direita mostra a marca da peça, o comprimento de corte, o peso e os furos feitos pelas chapas de extremidade.
4. Abra a guia {{ui:Bill of materials}} na parte inferior para ver cada marca de peça com sua quantidade e seu peso.

O passo a passo [Explore o pórtico de exemplo](topic:sample-model) percorre cada peça.

## Seu primeiro modelo

Um modelo novo já vem com os eixos 1 a 3 por A a B, de 6000 mm, e dois níveis: Nível 1 em 0 e Nível 2 em 4000.

1. Escolha {{ui:New}}. Se o modelo atual tiver alterações, o DetailCraft pergunta se você quer salvá-las antes.
2. Escolha {{ui:Plan}} acima da visualização. A lista de níveis ao lado escolhe o Nível 1.
3. Escolha {{ui:Column}} na barra de ferramentas, ou pressione {{key:C}}.
4. Clique na interseção de eixos A/1. Um pilar W12x50 aparece do Nível 1 ao Nível 2. A barra de status diz onde ele foi colocado.
5. Clique em B/1, A/2 e B/2 para colocar mais três.
6. Escolha o Nível 2 na lista de níveis e depois escolha {{ui:Beam}} ou pressione {{key:B}}.
7. Clique em A/1 e depois em A/2. Uma viga W16x26 liga os dois topos dos pilares, com o topo do aço no nível.
8. Pressione {{key:Esc}} para voltar a {{ui:Select}} e clique na viga.
9. Escolha {{ui:End plates}} no grupo {{ui:Connect}}. As duas extremidades recebem uma chapa de extremidade parafusada, a viga é cortada para encaixar e a primeira chapa de extremidade fica selecionada.
10. Clique na viga novamente.
11. Escolha {{ui:Shop drawing}} no grupo {{ui:Output}}. Uma prévia do desenho de fabricação da viga se abre. Escolha {{ui:Download PDF}}.
12. Pressione {{key:Mod+S}} para salvar o modelo. O navegador baixa `Untitled.detailcraft.json`.

Renomeie o modelo no campo {{ui:Name}}, no canto superior esquerdo, antes de salvar, para que o arquivo e todas as exportações levem o nome dele.

## Próximos passos

- [Uma visita pela tela](topic:workspace)
- [Configure eixos e níveis](topic:grids-and-levels)
- [Mova-se na visualização 3D](topic:navigate-3d), com mouse, trackpad ou tela de toque
- [Vindo de outro software de detalhamento](topic:coming-from), se você conhece algum grande pacote de detalhamento
- [Como usar esta ajuda](common:help)
