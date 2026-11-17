---
title: Fazer desenhos de fabricação
summary: Uma folha por marca de peça, feitas de uma só vez: visualize qualquer uma e baixe uma folha ou o conjunto inteiro como PDF em A4 a A1 ou ANSI B a D, com furos, rebaixos, cotas e legenda.
keywords: desenho de fabricação, desenhos de fabricação, todas as peças, lote, conjunto inteiro, desenho de peça única, fabricação, pdf, desenho de detalhe, desenho de peça, imprimir
from: d25fe035
---

O DetailCraft faz uma folha por marca de peça, para cada viga, pilar, contraventamento e chapa do modelo, tudo de uma vez: você não precisa selecioná-los um a um. Peças idênticas compartilham uma marca e, portanto, uma folha. As folhas são geradas na hora a partir do modelo; elas não são armazenadas nem editadas.

## Gerar o conjunto inteiro

1. Escolha {{ui:Desenho de fabricação}} no grupo {{ui:Saída}}. Não é preciso selecionar nada. Com uma peça selecionada, a janela abre na folha dessa peça. No painel {{ui:Propriedades}}, o mesmo botão se chama {{ui:Desenho de fabricação}} para barras e {{ui:Desenho da chapa}} para ligações.
2. Uma pré-visualização abre, com o título da marca da peça, por exemplo "Desenho de fabricação b1". A primeira lista ao lado do título traz todas as marcas de peça com seu perfil, comprimento e quantidade: escolha uma para ver a sua folha. A segunda lista altera o tamanho da folha; o conjunto inteiro é gerado de novo nele (veja [Desenhos de disposição geral e de montagem](topic:drawings#choose-the-sheet-size)).
3. Escolha {{ui:Baixar tudo}} (o botão mostra a quantidade de folhas) para um PDF com uma página por marca de peça, `<name> Shop drawings.pdf`. Cada folha diz "Folha 3 de 42" em sua legenda. Ou escolha {{ui:Baixar PDF}} para a folha que você está vendo, `<name> <mark>.pdf`.
4. Feche a pré-visualização com o × ou com {{key:Esc}}.

Se {{ui:Desenho de fabricação}} estiver desativado, o modelo ainda não tem peças.

## O que há na folha

Para um perfil I:

- **Elevação**, olhando para a alma: a peça com seus rebaixos entalhados, os furos da alma como círculos e os furos das mesas como linhas ocultas (tracejadas).
- **Planta da mesa superior**, vista de cima, quando alguma mesa tem furos. Os furos da mesa inferior aparecem tracejados.
- **Corte** através do perfil.
- **Cotas:** posições dos furos em cadeia ao longo da peça, mais o comprimento total, alturas dos furos da alma, o gramil e as dimensões dos rebaixos.
- **Lista de furos:** cada grupo de furos, por exemplo "8 x Ø22 na mesa superior".
- **Solda**, quando a peça tem chapas soldadas a ela.
- **Legenda:** marca da peça, marca de montagem, perfil, material, comprimento, quantidade, peso unitário e total, nome do modelo e data.

Para um perfil U, uma cantoneira ou uma seção vazada, a folha é a mesma, olhando para a alma ou para o lado: as paredes de um tubo são linhas ocultas (tracejadas), e o corte mostra a espessura da parede.

Para uma chapa: a face da chapa com seus furos, e sua borda como corte.

## Escalas

A escala é escolhida em uma lista (de 1:1 até 1:200) para que a peça caiba na folha. Uma peça longa e rasa ficaria fina demais para ler em uma só escala; por isso, quando a profundidade sairia com menos de 30 mm no papel, ela é desenhada em uma escala maior que o comprimento. O título da vista então informa isso, por exemplo "comprimento 1:20, profundidade 1:5 (não em escala única; prevalecem as cotas)". Leia sempre as medidas pelas cotas, e não medindo a folha.

## Coisas a saber

- A quantidade é o número de peças com essa marca no modelo. As marcas podem ser renumeradas após uma alteração; veja [Verificar marcas e a lista de materiais](topic:marks-and-bom).
- Cada folha é uma única peça, sem símbolos de solda; os desenhos de montagem (com símbolos de solda) e os desenhos de disposição geral estão em [Desenhos](topic:drawings). A folha não pode ser editada nem anotada no DetailCraft. Para marcá-la, abra o PDF em um aplicativo de marcação de PDF, como o MarkupCraft.
- A legenda diz "DetailCraft, compilação de laboratório — milímetros".
- O texto usa a fonte padrão do PDF, Helvetica. Caracteres fora do conjunto da Europa Ocidental saem como "?", e a barra de status os conta.

## Imprimir

Abra o PDF baixado no seu visualizador de PDF e imprima em 100% (sem "ajustar à página") no papel do tamanho escolhido, se quiser que as escalas indicadas valham. Em uma folha menor, reduza-a e confie nas cotas.
