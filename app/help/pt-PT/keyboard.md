---
title: Teclas e ações do rato
summary: Todos os atalhos de teclado e as ações do rato, do trackpad e do toque no DetailCraft, a partir do código.
keywords: teclado, atalhos, teclas de atalho, teclas, rato, trackpad, toque, Ctrl, comando, folha de consulta
from: 05a2dea0
---

Como as teclas são escritas nesta ajuda: [Teclas, ratos e trackpads](common:keys). Num Mac, {{key:Mod}} é a tecla Command; nos restantes sistemas é Ctrl.

## Ferramentas

Estas funcionam quando o cursor não está num campo de texto ou de número.

| Tecla | Faz |
|---|---|
| {{key:V}} | {{ui:Selecionar}} |
| {{key:B}} | {{ui:Viga}} |
| {{key:C}} | {{ui:Pilar}} |
| {{key:R}} | {{ui:Contraventamento}} |
| {{key:P}} | {{ui:Chapa}} |
| {{key:F}} | {{ui:Sapata}} |
| {{key:S}} | {{ui:Escada}} |
| {{key:M}} | Move a seleção ao escolher dois cruzamentos de eixos ([Selecionar por janela, mover, rodar, espelhar, alterar várias](topic:select-and-change)) |
| {{key:Esc}} | Larga uma janela de seleção que está a ser arrastada, ou repõe as peças arrastadas; cancela um movimento, o primeiro ponto de uma viga, contraventamento ou chapa, ou uma colagem; prima de novo para voltar a {{ui:Selecionar}}; em {{ui:Selecionar}}, limpa a seleção. Com o menu {{ui:Mais}} aberto, fecha-o |
| {{key:Delete}} ou {{key:Backspace}} | Elimina a seleção (tudo o que está selecionado, num único passo de anulação) |

## Ficheiro e edição

| Tecla | Faz |
|---|---|
| {{key:Mod+S}} | Guarda o modelo (transferência). Funciona mesmo enquanto escreve num campo |
| {{key:Mod+O}} | Abre um modelo. Funciona mesmo enquanto escreve num campo |
| {{key:Mod+Z}} | Anular (fora dos campos de texto; dentro de um, anula o que escreveu) |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refazer |

## Copiar e colar

Estas funcionam quando o cursor não está num campo de texto ou de número (aí copiam, colam e selecionam o texto como habitualmente). Cada colagem, corte, duplicação ou eliminação é um passo de anulação. Mais: [Copiar, colar e duplicar](topic:copy-paste).

| Tecla | Faz |
|---|---|
| {{key:Mod+C}} | {{ui:Copiar}} os elementos e sapatas selecionados (com os respetivos furos, recortes e ligações) |
| {{key:Mod+X}} | {{ui:Cortar}}: copia a seleção e depois elimina-a |
| {{key:Mod+V}} | {{ui:Colar}}: a cópia segue o ponteiro; clique num cruzamento de eixos para a colocar |
| {{key:Mod+Shift+V}} | {{ui:Colar no mesmo sítio}}: nas coordenadas de onde foi copiada |
| {{key:Mod+D}} | {{ui:Duplicar}}: uma cópia de imediato, deslocada pelo offset nas [Definições do DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Selecionar tudo}}: todos os elementos, ligações e sapatas |
| {{key:Esc}} | {{ui:Limpar seleção}} |

Se tiver selecionado texto na página (numa tabela de relatório, por exemplo) e nada no modelo, {{key:Mod+C}} copia o texto, como habitualmente.

{{ui:Novo}}, {{ui:Exemplo}} e as exportações não têm teclas; use a barra de ferramentas.

Nenhuma destas teclas faz seja o que for enquanto uma caixa de diálogo (a pré-visualização do desenho de fabrico ou uma pergunta) estiver aberta.

## Campos e painéis

| Tecla | Faz |
|---|---|
| {{key:Enter}} ou {{key:Tab}} | Aplica um valor escrito (cada alteração é um passo de anulação) |
| {{key:Enter}} num campo de {{ui:Eixos}}, {{ui:Níveis}}, {{ui:Perfil personalizado}}, furo ou recorte | O mesmo que escolher o botão desse formulário |
| {{key:Left}} {{key:Right}} | Passa entre os separadores {{ui:Problemas}}, {{ui:Lista de materiais}} e {{ui:Mapa de dobragem}} quando um separador tem o foco |
| {{key:Esc}} | Fecha a pré-visualização do desenho de fabrico ou uma caixa de diálogo de pergunta (o mesmo que {{ui:Cancelar}}) |

## Ecrã e ajuda

| Tecla | Faz |
|---|---|
| {{key:Ctrl+Shift+F}} | Alterna entre normal, ecrã inteiro e ecrã inteiro com as barras ocultas. Ctrl em todos os computadores, incluindo Mac |
| {{key:Mod+,}} | Abre {{ui:Definições}} ([Definições do DetailCraft](topic:settings)) |
| {{key:Esc}} | Sai do ecrã inteiro |
| {{key:F1}} | Abre esta ajuda |

## Rato

| Ação | Em 3D | Em Planta e Alçado |
|---|---|---|
| Clique | Seleciona uma peça, ou coloca no cruzamento mais próximo quando uma ferramenta de colocação está ativa (ou cola aí durante uma colagem) | O mesmo |
| {{key:Shift}}, {{key:Ctrl}} ou {{key:Mod}} e clique | Acrescenta a peça à seleção, ou retira-a | O mesmo |
| Premir numa peça selecionada e arrastar | Move a seleção ao longo do nível; com {{key:Mod}} premida, para cima e para baixo | Move a seleção (num alçado: ao longo dele e para cima e para baixo) |
| Arrastar com o botão esquerdo | Roda o modelo | Com {{ui:Selecionar}}: uma janela de seleção (para a direita: totalmente dentro; para a esquerda: a tocar). Ao colocar: desloca a vista |
| {{key:Shift}} e arrastar com o botão esquerdo | Com {{ui:Selecionar}}: uma janela de seleção, acrescentada à seleção. Ao colocar: desloca a vista | Com {{ui:Selecionar}}: uma janela de seleção, acrescentada à seleção |
| {{key:Ctrl}} ou {{key:Mod}} e arrastar com o botão esquerdo | Desloca a vista | Nada |
| Arrastar com o botão direito | Desloca a vista | Desloca a vista |
| Roda do rato | Zoom para o centro da vista | Zoom |
| Arrastar com o botão do meio | Zoom | Com {{ui:Selecionar}}: desloca a vista. Caso contrário, zoom |
| Largar um ficheiro `.detailcraft.json` na aplicação | Abre-o | Abre-o |

Um clique só conta se o ponteiro se mover menos de cerca de 5 pixels entre premir e soltar; um movimento mais longo é um arrasto.

## Trackpad

| Ação | Faz |
|---|---|
| Deslizar dois dedos para cima ou para baixo, ou pinça | Zoom |
| Premir e arrastar | Roda (3D) ou desloca a vista (Planta e Alçado) |
| {{key:Shift}} e premir e arrastar | Desloca a vista em 3D |
| Clique com dois dedos | Clique com o botão direito (não há menu na vista) |

## Toque

Num tablet ou num ecrã tátil:

| Ação | Faz |
|---|---|
| Toque | Seleciona uma peça, ou coloca no cruzamento de eixos mais próximo quando uma ferramenta de colocação está ativa (um toque a cerca de uma largura de dedo conta) |
| Toque prolongado numa peça | Acrescenta-a à seleção, ou retira-a (o que {{key:Shift}}+clique faz com um rato) |
| Um dedo numa peça selecionada e arrastar | Move a seleção, encaixando nos cruzamentos de eixos |
| Um dedo noutro sítio | Roda o modelo (3D) ou desloca a vista (Planta e Alçado) |
| Dois dedos | Pinça para fazer zoom; juntos, deslocam a vista |

Botões, listas e campos são maiores quando o ecrã é só tátil. As janelas de seleção precisam de rato; com os dedos, use o toque e o toque prolongado.

## Teclas que o navegador mantém

Alguns atalhos pertencem ao navegador e nenhuma página os pode usar, por exemplo {{key:Mod+W}} (fechar separador), {{key:Mod+T}} (novo separador) e {{key:Mod+N}} (nova janela). Se {{key:Mod+Y}} abrir o histórico do navegador em vez de refazer, use {{key:Mod+Shift+Z}}.

Os atalhos chegam ao DetailCraft apenas quando a página tem o teclado. Se uma tecla não fizer nada, ou se o navegador agir sobre ela, clique primeiro numa parte vazia da janela do DetailCraft (por exemplo, depois de escrever na barra de endereços).

## Onde fica o MOVE

Não existe um comando MOVE: selecione uma peça e arraste-a ao longo do nível (mantenha {{key:Mod}} premida para arrastar para cima e para baixo), ou edite o respetivo {{ui:Início}} e {{ui:Fim}} em {{ui:Propriedades}}.
