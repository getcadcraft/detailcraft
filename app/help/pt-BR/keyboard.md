---
title: Teclas e ações do mouse
summary: Cada atalho de teclado e ação de mouse, trackpad e toque no DetailCraft, a partir do código.
keywords: teclado, atalhos, teclas de atalho, teclas, mouse, trackpad, toque, ctrl, comando, resumo de atalhos
from: 05a2dea0
---

Como as teclas são escritas nesta ajuda: [Teclas, mouse e trackpads](common:keys). No Mac, {{key:Mod}} é a tecla Command; nos demais sistemas, é Ctrl.

## Ferramentas

Estas funcionam quando o cursor não está em um campo de texto ou de número.

| Tecla | Faz |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:B}} | {{ui:Viga}} |
| {{key:C}} | {{ui:Pilar}} |
| {{key:R}} | {{ui:Contraventamento}} |
| {{key:P}} | {{ui:Chapa}} |
| {{key:F}} | {{ui:Sapata}} |
| {{key:S}} | {{ui:Escada}} |
| {{key:M}} | Move a seleção escolhendo dois cruzamentos de eixos ([Selecionar por janela, mover, girar, espelhar, alterar muitos](topic:select-and-change)) |
| {{key:Esc}} | Solta uma janela de seleção que está sendo arrastada, ou devolve as peças arrastadas; cancela um movimento, o primeiro ponto de uma viga, contraventamento ou chapa, ou uma colagem; pressione de novo para voltar a {{ui:Selecionar}}; em {{ui:Selecionar}}, limpa a seleção. Com o menu {{ui:Mais}} aberto, fecha-o |
| {{key:Delete}} ou {{key:Backspace}} | Apaga a seleção (tudo o que estiver selecionado, em um único passo de desfazer) |

## Arquivo e edição

| Tecla | Faz |
|---|---|
| {{key:Mod+S}} | Salva o modelo (download). Funciona mesmo digitando em um campo |
| {{key:Mod+O}} | Abre um modelo. Funciona mesmo digitando em um campo |
| {{key:Mod+Z}} | Desfazer (fora dos campos de texto; dentro de um, desfaz sua digitação) |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |

## Copiar e colar

Estes funcionam quando o cursor não está em um campo de texto ou de número (ali, copiam, colam e selecionam seu texto normalmente). Cada colagem, recorte, duplicação ou exclusão é um único passo de desfazer. Mais: [Copiar, colar e duplicar](topic:copy-paste).

| Tecla | Faz |
|---|---|
| {{key:Mod+C}} | {{ui:Copiar}} as barras e sapatas selecionadas (com seus furos, rebaixos e ligações) |
| {{key:Mod+X}} | {{ui:Recortar}}: copia a seleção e depois a apaga |
| {{key:Mod+V}} | {{ui:Colar}}: a cópia segue o ponteiro; clique em um cruzamento de eixos para colocá-la ali |
| {{key:Mod+Shift+V}} | {{ui:Colar no mesmo local}}: nas coordenadas de onde foi copiada |
| {{key:Mod+D}} | {{ui:Duplicar}}: uma cópia imediata, deslocada pelo deslocamento definido em [Configurações do DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Selecionar tudo}}: cada barra, ligação e sapata |
| {{key:Esc}} | {{ui:Limpar seleção}} |

Se você tiver selecionado texto na página (em uma tabela de relatório, por exemplo) e nada no modelo, {{key:Mod+C}} copia o texto, como de costume.

{{ui:Novo}}, {{ui:Exemplo}} e as exportações não têm teclas; use a barra de ferramentas.

Nenhuma dessas teclas faz nada enquanto uma caixa de diálogo (a visualização do desenho de fabricação ou uma pergunta) estiver aberta.

## Campos e painéis

| Tecla | Faz |
|---|---|
| {{key:Enter}} ou {{key:Tab}} | Aplica um valor digitado (cada alteração é um passo de desfazer) |
| {{key:Enter}} em um campo de {{ui:Eixos}}, {{ui:Níveis}}, {{ui:Perfil personalizado}}, furo ou rebaixo | O mesmo que escolher o botão desse formulário |
| {{key:Left}} {{key:Right}} | Move entre as guias {{ui:Problemas}}, {{ui:Lista de materiais}} e {{ui:Tabela de dobramento}} quando uma guia tem o foco |
| {{key:Esc}} | Fecha a visualização do desenho de fabricação ou uma caixa de pergunta (o mesmo que {{ui:Cancelar}}) |

## Tela e ajuda

| Tecla | Faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, tela cheia e tela cheia com as barras ocultas. Ctrl em todos os computadores, inclusive no Mac |
| {{key:Mod+,}} | Abre {{ui:Configurações}} ([Configurações do DetailCraft](topic:settings)) |
| {{key:Esc}} | Sai da tela cheia |
| {{key:F1}} | Abre esta ajuda |

## Mouse

| Ação | Em 3D | Em Planta e Elevação |
|---|---|---|
| Clique | Seleciona uma peça, ou posiciona no cruzamento mais próximo quando uma ferramenta de posicionamento está ativa (ou cola ali durante a colagem) | O mesmo |
| {{key:Shift}}, {{key:Ctrl}} ou {{key:Mod}} e clique | Adiciona a peça à seleção, ou a remove | O mesmo |
| Pressionar sobre uma peça selecionada e arrastar | Move a seleção pelo nível; com {{key:Mod}} pressionada, para cima e para baixo | Move a seleção (em uma elevação: ao longo dela e para cima e para baixo) |
| Arrastar com o botão esquerdo | Gira o modelo | Com {{ui:Selecionar}}: uma janela de seleção (para a direita: totalmente dentro; para a esquerda: tocando). Ao posicionar: pan |
| {{key:Shift}} e arrastar com o botão esquerdo | Com {{ui:Selecionar}}: uma janela de seleção, somada à seleção. Ao posicionar: pan | Com {{ui:Selecionar}}: uma janela de seleção, somada à seleção |
| {{key:Ctrl}} ou {{key:Mod}} e arrastar com o botão esquerdo | Pan | Nada |
| Arrastar com o botão direito | Pan | Pan |
| Roda | Zoom em direção ao centro da vista | Zoom |
| Arrastar com o botão do meio | Zoom | Com {{ui:Selecionar}}: pan. Caso contrário, zoom |
| Soltar um arquivo `.detailcraft.json` no app | Abre o arquivo | Abre o arquivo |

Um clique só conta se o ponteiro se mover menos de cerca de 5 pixels entre o pressionamento e a soltura; um movimento maior é um arrasto.

## Trackpad

| Ação | Faz |
|---|---|
| Deslizar com dois dedos para cima ou para baixo, ou pinçar | Zoom |
| Pressionar e arrastar | Gira (3D) ou faz pan (Planta e Elevação) |
| {{key:Shift}} e pressionar e arrastar | Pan em 3D |
| Clique com dois dedos | Clique com o botão direito (não há menu na vista) |

## Toque

Em um tablet ou tela sensível ao toque:

| Ação | Faz |
|---|---|
| Toque | Seleciona uma peça, ou posiciona no cruzamento de eixos mais próximo quando uma ferramenta de posicionamento está ativa (um toque a até cerca de uma largura de dedo dele conta) |
| Toque longo em uma peça | Adiciona à seleção, ou remove (o que {{key:Shift}}+clique faz com o mouse) |
| Um dedo sobre uma peça selecionada, depois arrastar | Move a seleção, encaixando nos cruzamentos de eixos |
| Um dedo em outro lugar | Gira o modelo (3D) ou faz pan (Planta e Elevação) |
| Dois dedos | Pinçar para zoom; mover juntos para pan |

Botões, listas e campos ficam maiores quando a tela é só de toque. Janelas de seleção precisam de mouse; com os dedos, use toque e toque longo.

## Teclas que o navegador mantém

Alguns atalhos pertencem ao navegador, e nenhuma página pode usá-los; por exemplo, {{key:Mod+W}} (fechar guia), {{key:Mod+T}} (nova guia) e {{key:Mod+N}} (nova janela). Se {{key:Mod+Y}} abrir o histórico do navegador em vez de refazer, use {{key:Mod+Shift+Z}}.

Os atalhos chegam ao DetailCraft somente quando a página tem o teclado. Se uma tecla não fizer nada, ou se o navegador agir no lugar dela, clique primeiro em uma área vazia da janela do DetailCraft (por exemplo, depois de digitar na barra de endereços).

## Onde fica Mover

Não há um comando Mover: selecione uma peça e arraste-a pelo nível (segure {{key:Mod}} para arrastar para cima e para baixo), ou edite o {{ui:Início}} e o {{ui:Fim}} em {{ui:Propriedades}}.
