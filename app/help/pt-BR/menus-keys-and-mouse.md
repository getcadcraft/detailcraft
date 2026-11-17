---
title: Menus, teclas e mouse
summary: Escolha um estilo de menu que combine com o seu jeito de trabalhar, dê a qualquer comando sua própria tecla, mova comandos entre as guias da faixa de opções e defina o que a roda e os botões do mouse fazem.
keywords: estilo de menu, menus, faixa de opções, barra de ferramentas, linha de comando, atalhos de teclado, teclas de atalho, teclas, personalizar, reatribuir, mouse, roda, inverter, direção do zoom, botão do meio, botão direito, pan, órbita, exportar, importar, troca, familiar, desenho clássico, faixa de aço
from: 4132c6e5
---

Os comandos do DetailCraft são os mesmos, independentemente do caminho usado para chegar até eles. Um **estilo de menu** apenas define onde eles ficam na tela, como são chamados ali e quais teclas os executam. Escolha um em {{ui:Configurações}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, teclas e mouse}}; a mudança é imediata, e este navegador a lembra.

## Os três estilos

| Estilo | O que você obtém |
|---|---|
| {{ui:DetailCraft}} | A barra de ferramentas própria do DetailCraft (Arquivo, Posicionar, Ligar, Editar, Saída) e suas teclas de uma letra: {{key:V}} selecionar, {{key:B}} viga, {{key:C}} pilar, {{key:R}} contraventamento, {{key:P}} chapa, {{key:F}} sapata, {{key:S}} escada. O inicial. |
| {{ui:Desenho clássico}} | Para quem digita comandos: uma pequena faixa de opções ({{ui:Início}}, {{ui:Vista}}, {{ui:Saída}}) e uma linha de comando. Digite BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (desfazer), ZOOM, PLAN, 3D, DRAWINGS, NC ou HELP e pressione {{key:Enter}}; {{key:Enter}} sem nada repete o último comando, {{key:Esc}} limpa o comando. Comece a digitar em qualquer lugar e as letras vão para a linha de comando. O botão do meio faz pan; em 3D, {{key:Shift}} e o botão do meio orbitam. |
| {{ui:Faixa de aço}} | Guias organizadas como os programas de detalhamento de estruturas de aço as dispõem: {{ui:Modelagem}} (barras, concreto, escadas), {{ui:Detalhamento}} (ligações), {{ui:Editar}}, {{ui:Desenhos}} (desenhos e relatórios), {{ui:Fabricação}} (arquivos NC, IFC) e {{ui:Vista}}, com um menu {{ui:Arquivo}} e botões rápidos à direita. As teclas de uma letra continuam. O botão do meio faz pan; em 3D, o botão esquerdo orbita. |

Todos os estilos mantêm {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} e {{key:Mod+A}}. As faixas também contêm os botões {{ui:3D}}, {{ui:Planta}}, {{ui:Elevação}} e {{ui:Ajustar}} da barra de vista.

:::tip
Uma tecla que pertence ao layout próprio do DetailCraft, mas que seu estilo atribuiu a outro comando, não faz nada, e a linha de status informa para onde foi o comando ("Em Minha faixa de aço, Pilar é Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas sempre mantêm seu significado, e enquanto uma barra está meio posicionada ou uma cópia segue o ponteiro, as letras pertencem ao DetailCraft.
:::

## Personalize

1. Escolha o estilo mais próximo do que você quer e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de busca ajuda). Clique em {{ui:Adicionar uma tecla}} e pressione a tecla, ou duas teclas em sequência para uma tecla de duas letras. Clique em uma tecla para removê-la.
3. Com uma faixa de opções, {{ui:Onde fica}} move o comando para outra guia e painel, para o menu {{ui:Arquivo}}, ou para {{ui:Somente teclas}}.
4. Em {{ui:Mouse}}, defina a roda, os botões que fazem pan na planta e nas elevações, e o que cada botão faz na vista 3D.
5. Dê um nome e clique em {{ui:Salvar}}.

Salvar um estilo embutido cria sua própria cópia ("Minha faixa de aço"); o embutido nunca muda. Uma tecla atribuída a dois comandos aparece em vermelho e precisa ser corrigida antes de salvar.

## Mouse

- **Roda do mouse**: {{ui:Rolar para cima aproxima}} (o inicial) ou {{ui:Rolar para cima afasta}}, e a velocidade. Pinçar no trackpad sempre aplica zoom no sentido do movimento dos dedos.
- **Fazer pan na planta e nas elevações com**: o botão do meio, o botão direito, ou ambos. Com a ferramenta {{ui:Selecionar}}, o botão esquerdo sempre desenha uma janela de seleção.
- **Arrastar na vista 3D**: {{ui:Próprios de cada vista}} mantém os botões do DetailCraft (esquerdo orbita, meio aplica zoom, direito faz pan). Ou defina cada botão para orbitar, fazer pan, dar zoom ou nada; {{key:Shift}} com um botão que orbita ou faz pan troca os dois.

## Leve com você

{{ui:Exportar}} salva o estilo em uso como um pequeno arquivo `.ccinput.json`; {{ui:Importar…}} adiciona um, vindo de outro computador ou de um colega. Um arquivo importado só pode apontar para os comandos do próprio DetailCraft: o que mais houver nele fica de fora e é contado na linha de status. {{ui:Excluir este estilo}} remove um dos seus.

:::note
Estas configurações ficam neste navegador. {{ui:Usar este estilo em todos os apps}}, sob os cartões de estilo, faz com que cada app abra no estilo correspondente (a barra de ferramentas própria, uma faixa de opções ou o {{ui:Desenho clássico}}), com as alterações feitas em cada app. O DetailCraft não tem um estilo de barra de menus: quando a barra de menus de outro app é escolhida para todos os apps, o DetailCraft mantém a sua própria barra de ferramentas.
:::

Relacionados: [Teclado e mouse](topic:keyboard) · [Configurações do DetailCraft](topic:settings) · [Vindo de outro software de detalhamento](topic:coming-from)
