---
title: Copiar, colar e duplicar
summary: Selecione várias peças, copie-as com os respetivos furos, recortes e ligações, e cole-as numa interseção da grelha, com um desvio, no mesmo sítio ou noutro separador. Corte, duplique, elimine e selecione tudo.
keywords: copiar, colar, cortar, duplicar, área de transferência, colar no mesmo sítio, selecionar tudo, limpar seleção, seleção múltipla, shift clicar, várias, repetir um vão, copiar um pórtico, desvio, eliminar várias, menu editar, menu mais
from: f25f1829
---

O grupo {{ui:Editar}} da barra de ferramentas tem {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}} e {{ui:Colar}}. O menu {{ui:Mais}} tem o resto: {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com a sua tecla. Um botão ou item de menu que não possa atuar neste momento fica desativado; passe o cursor por cima para ler o motivo (por exemplo, «nada copiado ainda»).

Cada colagem, corte, duplicação e eliminação é um único passo: um {{key:Mod+Z}} anula tudo.

## Selecionar várias peças

- Clique numa peça para a selecionar. Mantenha {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) premida e clique em mais peças para as acrescentar; clique numa peça já selecionada da mesma forma para a retirar.
- {{key:Mod+A}} ou {{ui:Selecionar tudo}} seleciona todas as barras, ligações e sapatas.
- {{key:Esc}} ou {{ui:Limpar seleção}} limpa a seleção.

Com várias coisas selecionadas, o painel {{ui:Propriedades}} tem o título «4 selecionados» (ou o número que for) e lista as barras por tipo, as ligações, as sapatas e o peso bruto do aço, com os botões {{ui:Copiar}}, {{ui:Duplicar}} e {{ui:Eliminar}}.

## Copiar

1. Selecione as barras e sapatas pretendidas.
2. Escolha {{ui:Copiar}} ou prima {{key:Mod+C}}.

O que vem junto:

- Cada barra completa: perfil, material, extremidades, posição, rotação, nome, furos e recortes. Qualquer perfil personalizado que use também é copiado.
- Cada sapata completa: dimensões, betão, malha inferior e armaduras de espera.
- Chapas de topo e chapas de base, mas só quando todas as barras que uma ligação une são copiadas: a chapa de topo de uma viga precisa da viga e do respetivo pilar. A barra de estado indica quantas ligações ficaram de fora. Para deixar ligações de fora de propósito, desmarque **Copiar chapas de topo e chapas de base com as respetivas barras** nas [definições do DetailCraft](topic:settings).

Uma ligação isolada não pode ser copiada; selecione antes as respetivas barras. Para dar a outras juntas a mesma ligação, use {{ui:Semelhantes}} (ver [Chapas de topo](topic:end-plates#copy-it-to-every-similar-joint)).

A cópia fica neste navegador até copiar outra coisa. Outro separador ou janela do DetailCraft no mesmo navegador pode colá-la, por isso pode copiar um pórtico de um modelo e colá-lo noutro.

## Colar numa interseção da grelha

1. Escolha {{ui:Colar}} ou prima {{key:Mod+V}}.
2. Mova o ponteiro sobre a vista. Um contorno a tracejado da cópia segue a interseção da grelha mais próxima do ponteiro.
3. Clique numa interseção. O ponto base da cópia (o seu canto mais baixo: o menor x, y e z de tudo o que foi copiado) fica aí.

As peças coladas ficam selecionadas, por isso pode colar de novo noutro sítio ou alterá-las. {{key:Esc}} cancela uma colagem; a cópia fica na área de transferência. {{ui:Planta}} e {{ui:Alçado}} tornam mais fácil acertar na interseção certa.

:::tip
Para repetir um vão, selecione as barras do vão (ou tudo com {{key:Mod+A}}), copie, cole e clique na interseção um vão mais adiante de onde estava o canto mais baixo da cópia.
:::

## Colar pelo teclado

Ao colar, o painel {{ui:Propriedades}} mostra o que está na área de transferência e dois formulários:

- {{ui:Colar com desvio (mm, a partir do original)}}: escreva x, y e z e escolha {{ui:Colar com este desvio}}. Começa com o desvio das [definições do DetailCraft](topic:settings).
- {{ui:Colar numa interseção de eixos}}: escolha uma grelha de letras, uma grelha numerada e um nível, e escolha {{ui:Colar aqui}}. O ponto base vai para lá.

## Colar no mesmo sítio

{{ui:Colar no mesmo sítio}} ({{key:Mod+Shift+V}}) põe a cópia exatamente nas coordenadas de onde foi copiada. Use-o depois de {{ui:Cortar}}, ou para trazer peças de outro modelo para o mesmo sítio. Se os originais ainda lá estiverem, a cópia fica por cima deles e a barra de estado avisa: mova as cópias pelos seus {{ui:Início}} e {{ui:Fim}} em {{ui:Propriedades}}, ou anule.

## Duplicar

{{ui:Duplicar}} ({{key:Mod+D}}) copia a seleção e cola-a de imediato, deslocada pelo desvio das [definições do DetailCraft](topic:settings) (6000 mm ao longo de x, para começar). Não altera o que está na área de transferência. As cópias ficam selecionadas, por isso, ao premir {{key:Mod+D}} de novo, a seguinte é feita a partir delas.

## Cortar e eliminar

- {{ui:Cortar}} ({{key:Mod+X}}) copia a seleção e depois elimina-a. Cole-a onde deve ficar.
- {{ui:Eliminar}} ({{key:Delete}} ou {{key:Backspace}}) elimina a seleção. Eliminar uma barra elimina também as respetivas ligações.

## Marcas depois de colar

As marcas de peça e de montagem nunca são guardadas; o DetailCraft volta a numerá-las a partir do modelo após cada alteração ([Como são atribuídas as marcas](topic:mark-rules)). Assim:

- Uma cópia que é a mesma peça que o original (mesmo perfil, classe, comprimento de corte, furos e recortes) partilha a marca do original, e a contagem em {{ui:Marcas das peças}} e na lista de materiais sobe.
- Uma cópia que fica diferente recebe uma marca própria. Uma viga colada sem as suas chapas de topo, por exemplo, não é cortada, por isso é uma peça diferente. As marcas são renumeradas em todo o modelo, por isso os números de outras peças também podem mudar.

Cada barra, furo, recorte, ligação e sapata colada recebe um novo identificador, por isso nada do modelo é partilhado entre uma cópia e o original.

## Se a área de transferência for recusada

O conteúdo da área de transferência é verificado com o mesmo cuidado que um ficheiro de modelo que se abre: o que não for uma peça válida do DetailCraft é descartado, e a barra de estado diz o que aconteceu. Uma área de transferência preenchida por um DetailCraft mais recente, ou por outra coisa, é recusada com uma mensagem e nada é colado. Se uma janela privada não conseguir guardar a cópia no armazenamento do navegador, a cópia continua a funcionar nesse separador.
