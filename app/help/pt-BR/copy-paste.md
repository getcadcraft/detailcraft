---
title: Copiar, colar e duplicar
summary: Selecione várias peças, copie-as com seus furos, recortes e ligações, e cole-as em uma interseção de eixos, com um deslocamento, no mesmo local ou em outra guia. Recortar, duplicar, excluir e selecionar tudo.
keywords: copiar, colar, recortar, duplicar, área de transferência, colar no mesmo local, selecionar tudo, limpar seleção, seleção múltipla, Shift, clique, vários, repetir um vão, copiar um pórtico, deslocamento, excluir vários, menu editar, menu mais
from: f25f1829
---

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}} e {{ui:Colar}}. Seu menu {{ui:Mais}} tem o restante: {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com sua tecla. Um botão ou item de menu que não pode agir no momento fica esmaecido; passe o ponteiro sobre ele para ler o motivo (por exemplo, "nada copiado ainda").

Cada colagem, recorte, duplicação e exclusão é uma única etapa: um {{key:Mod+Z}} desfaz tudo.

## Selecionar várias peças

- Clique em uma peça para selecioná-la. Mantenha {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) pressionada e clique em mais peças para adicioná-las; clique em uma selecionada da mesma forma para removê-la.
- {{key:Mod+A}} ou {{ui:Selecionar tudo}} seleciona todas as barras, ligações e sapatas.
- {{key:Esc}} ou {{ui:Limpar seleção}} limpa a seleção.

Com várias coisas selecionadas, o painel {{ui:Propriedades}} fica com o título "4 selecionados" (ou o número que for) e lista as barras por tipo, as ligações, as sapatas e o peso bruto do aço, com os botões {{ui:Copiar}}, {{ui:Duplicar}} e {{ui:Excluir}}.

## Copiar

1. Selecione as barras e as sapatas desejadas.
2. Escolha {{ui:Copiar}} ou pressione {{key:Mod+C}}.

O que vem junto:

- Cada barra inteira: perfil, material, extremidades, posição, rotação, nome, furos e recortes. Qualquer perfil personalizado que ela use também é copiado.
- Cada sapata inteira: dimensões, concreto, malha inferior e barras de espera.
- Chapas de extremidade e chapas de base, mas somente quando todas as barras que uma ligação conecta forem copiadas: a chapa de extremidade de uma viga precisa da viga e de seu pilar. A barra de status informa quantas ligações ficaram de fora. Para deixar ligações de fora de propósito, desmarque **Copiar chapas de extremidade e chapas de base com suas barras** nas [configurações do DetailCraft](topic:settings).

Uma ligação sozinha não pode ser copiada; selecione suas barras. Para dar às outras juntas a mesma ligação, use {{ui:Semelhante}} (veja [Chapas de extremidade](topic:end-plates#copy-it-to-every-similar-joint)).

A cópia permanece neste navegador até que você copie outra coisa. Outra guia ou janela do DetailCraft no mesmo navegador pode colá-la, então você pode copiar um pórtico de um modelo e colá-lo em outro.

## Colar em uma interseção de eixos

1. Escolha {{ui:Colar}} ou pressione {{key:Mod+V}}.
2. Mova o ponteiro sobre a vista. Um contorno tracejado da cópia segue a interseção de eixos mais próxima do ponteiro.
3. Clique em uma interseção. O ponto base da cópia (seu canto mais baixo: o menor x, y e z de tudo que foi copiado) cai ali.

As peças coladas ficam selecionadas depois, então você pode colar de novo em outro lugar ou alterá-las. {{key:Esc}} cancela uma colagem; a cópia continua na área de transferência. {{ui:Planta}} e {{ui:Elevação}} facilitam acertar a interseção certa.

:::tip
Para repetir um vão, selecione as barras do vão (ou tudo com {{key:Mod+A}}), copie, cole e clique na interseção um vão adiante de onde estava o canto mais baixo da cópia.
:::

## Colar pelo teclado

Durante a colagem, o painel {{ui:Propriedades}} mostra o que está na área de transferência e dois formulários:

- {{ui:Colar por deslocamento (mm, a partir do original)}}: digite x, y e z e escolha {{ui:Colar com este deslocamento}}. Ele começa com o deslocamento das [configurações do DetailCraft](topic:settings).
- {{ui:Colar em uma interseção de eixos}}: escolha um eixo com letra, um eixo numerado e um nível, e escolha {{ui:Colar aqui}}. O ponto base vai para lá.

## Colar no mesmo local

{{ui:Colar no mesmo local}} ({{key:Mod+Shift+V}}) coloca a cópia exatamente nas coordenadas de onde foi copiada. Use-o depois de {{ui:Recortar}}, ou para trazer peças de outro modelo para o mesmo lugar. Se os originais ainda estiverem lá, a cópia fica sobre eles e a barra de status avisa: mova as cópias pelo {{ui:Início}} e pelo {{ui:Fim}} em {{ui:Propriedades}}, ou desfaça.

## Duplicar

{{ui:Duplicar}} ({{key:Mod+D}}) copia a seleção e a cola de imediato, deslocada pelo deslocamento das [configurações do DetailCraft](topic:settings) (6000 mm ao longo de x, no início). Não altera o que está na área de transferência. As cópias ficam selecionadas depois, então pressionar {{key:Mod+D}} de novo cria a próxima a partir delas.

## Recortar e excluir

- {{ui:Recortar}} ({{key:Mod+X}}) copia a seleção e depois a exclui. Cole-a onde ela deve ficar.
- {{ui:Excluir}} ({{key:Delete}} ou {{key:Backspace}}) exclui a seleção. Excluir uma barra também exclui suas ligações.

## Marcas após uma colagem

As marcas de peça e de montagem nunca são armazenadas; o DetailCraft as numera de novo a partir do modelo após cada alteração ([Como as marcas são atribuídas](topic:mark-rules)). Assim:

- Uma cópia que é a mesma peça do original (mesmo perfil, classe, comprimento de corte, furos e recortes) compartilha a marca do original, e a contagem em {{ui:Marcas das peças}} e na lista de materiais aumenta.
- Uma cópia que ficou diferente recebe uma marca própria. Uma viga colada sem suas chapas de extremidade, por exemplo, não é cortada de volta, então é uma peça diferente. As marcas são numeradas de novo em todo o modelo, então os números de outras peças também podem mudar.

Cada barra, furo, recorte, ligação e sapata colados recebe um novo identificador, então nada no modelo é compartilhado entre uma cópia e seu original.

## Se a área de transferência for recusada

O conteúdo da área de transferência é verificado com o mesmo cuidado de um arquivo de modelo que você abre: o que não for uma peça válida do DetailCraft é descartado, e a barra de status informa o que foi feito. Uma área de transferência preenchida por um DetailCraft mais novo, ou por outro programa, é recusada com uma mensagem e nada é colado. Se uma janela privativa não conseguir manter a cópia no armazenamento do navegador, a cópia continua funcionando nessa guia.
