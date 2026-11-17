---
title: Menus, teclas e rato
summary: Escolher um estilo de menu que corresponda à forma como já trabalha, atribuir a qualquer comando a sua própria tecla, mover comandos entre separadores do friso e definir o que a roda e os botões do rato fazem.
keywords: estilo de menu, menus, friso, barra de ferramentas, linha de comandos, atalhos de teclado, teclas de atalho, teclas, personalizar, reatribuir, rato, roda, inverter, sentido do zoom, botão do meio, botão direito, deslocar, rodar, exportar, importar, alternar, familiar, desenho clássico, friso de aço
from: 4132c6e5
---

Os comandos do DetailCraft são os mesmos, seja qual for a forma como lhes chega. Um **estilo de menu** decide apenas onde ficam no ecrã, como se chamam lá e que teclas os executam. Escolha um em {{ui:Definições}} ({{key:Mod+,}}) › {{ui:DetailCraft}} › {{ui:Menus, teclas e rato}}; a alteração é imediata, e este navegador guarda-a.

## Os três estilos

| Estilo | O que obtém |
|---|---|
| {{ui:DetailCraft}} | A barra de ferramentas própria do DetailCraft (Ficheiro, Colocar, Ligar, Editar, Saída) e as teclas de uma letra: {{key:V}} selecionar, {{key:B}} viga, {{key:C}} pilar, {{key:R}} contraventamento, {{key:P}} chapa, {{key:F}} sapata, {{key:S}} escada. O predefinido. |
| {{ui:Desenho clássico}} | Para quem escreve comandos: um pequeno friso ({{ui:Base}}, {{ui:Vista}}, {{ui:Saída}}) e uma linha de comandos. Escreva BEAM, COLUMN, BRACE, PLATE, FOOTING, STAIR, ENDPLATE, BASEPLATE, SHEARTAB, SPLICE, GUSSET, U (anular), ZOOM, PLAN, 3D, DRAWINGS, NC ou HELP e prima {{key:Enter}}; {{key:Enter}} sem nada repete o último comando, {{key:Esc}} limpa-o. Comece a escrever em qualquer sítio e as letras vão para a linha de comandos. O botão do meio desloca a vista; em 3D, {{key:Shift}} e o botão do meio rodam a vista. |
| {{ui:Friso de aço}} | Separadores organizados como nos programas de pormenorização de aço: {{ui:Modelação}} (elementos, betão, escadas), {{ui:Pormenorização}} (ligações), {{ui:Editar}}, {{ui:Desenhos}} (desenhos e relatórios), {{ui:Fabrico}} (ficheiros NC, IFC) e {{ui:Vista}}, com um menu {{ui:Ficheiro}} e botões rápidos à direita. As teclas de uma letra mantêm-se. O botão do meio desloca a vista; em 3D, o botão esquerdo roda-a. |

Cada estilo mantém {{key:Mod+Z}}, {{key:Mod+Y}}, {{key:Mod+S}}, {{key:Mod+O}}, {{key:Mod+C}}, {{key:Mod+X}}, {{key:Mod+V}}, {{key:Mod+Shift+V}}, {{key:Mod+D}} e {{key:Mod+A}}. Os frisos também incluem {{ui:3D}}, {{ui:Planta}}, {{ui:Alçado}} e {{ui:Ajustar}} da barra de vista.

:::tip
Uma tecla que pertence ao esquema próprio do DetailCraft, mas que o seu estilo atribuiu a outro comando, não faz nada, e a linha de estado indica para onde foi o comando ("No meu friso de aço, Pilar é Ctrl+Alt+C"). {{key:Delete}}, {{key:Esc}}, {{key:Enter}}, {{key:Tab}}, {{key:Space}} e as setas mantêm sempre o seu significado, e enquanto um elemento está a meio da colocação ou uma cópia segue o ponteiro, as letras pertencem ao DetailCraft.
:::

## Personalizar

1. Escolha o estilo mais próximo do que pretende e clique em {{ui:Personalizar…}}.
2. Em {{ui:Teclas e menus}}, encontre um comando (a caixa de pesquisa ajuda). Clique em {{ui:Adicionar uma tecla}} e prima a tecla, ou duas teclas seguidas para uma tecla de duas letras. Clique numa tecla para a retirar.
3. Com um friso, {{ui:Onde fica}} move o comando para outro separador e painel, para o menu {{ui:Ficheiro}}, ou para {{ui:Só teclas}}.
4. Em {{ui:Rato}}, defina a roda, os botões que deslocam a planta e os alçados, e o que cada botão faz na vista 3D.
5. Dê-lhe um nome e clique em {{ui:Guardar}}.

Guardar um estilo incorporado cria a sua própria cópia ("O meu friso de aço"); o estilo incorporado nunca muda. Uma tecla atribuída a dois comandos aparece a vermelho e tem de ser corrigida antes de poder guardar.

## Rato

- **Roda do rato**: {{ui:Rodar para cima aproxima}} (o predefinido) ou {{ui:Rodar para cima afasta}}, e a velocidade. Um pinçamento no trackpad faz sempre zoom no sentido em que os dedos se movem.
- **Deslocar a planta e os alçados com**: o botão do meio, o botão direito, ou ambos. Com a ferramenta {{ui:Selecionar}}, o botão esquerdo desenha sempre uma janela de seleção.
- **Arrastar na vista 3D**: {{ui:Próprio de cada vista}} mantém os botões do DetailCraft (o esquerdo roda, o do meio faz zoom, o direito desloca). Ou defina cada botão para rodar, deslocar, fazer zoom ou nada; {{key:Shift}} com um botão que roda ou desloca troca os dois.

## Levar consigo

{{ui:Exportar}} guarda o estilo em uso como um pequeno ficheiro `.ccinput.json`; {{ui:Importar…}} acrescenta um, de outro computador ou de um colega. Um ficheiro importado só pode apontar para os comandos do próprio DetailCraft: o que lá estiver a mais é deixado de fora e contado na linha de estado. {{ui:Eliminar este estilo}} remove um dos seus.

:::note
Estas definições ficam neste navegador. {{ui:Utilizar este estilo em todas as aplicações}}, por baixo dos cartões de estilo, faz com que cada aplicação abra no estilo correspondente (a sua própria barra de ferramentas, um friso ou {{ui:Desenho clássico}}), com as alterações feitas em cada aplicação. O DetailCraft não tem estilo de barra de menus: quando a barra de menus de outra aplicação é escolhida para todas as aplicações, o DetailCraft mantém a sua própria barra de ferramentas.
:::

Ver também: [Teclado e rato](topic:keyboard) · [Definições do DetailCraft](topic:settings) · [Vindo de outro software de pormenorização](topic:coming-from)
