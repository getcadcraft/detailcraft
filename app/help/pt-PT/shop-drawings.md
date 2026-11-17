---
title: Fazer desenhos de fabrico
summary: Uma folha por marca de peça, feita de uma só vez: visualize qualquer uma delas e transfira uma folha ou o conjunto completo em PDF, em A4 a A1 ou ANSI B a D, com furos, recortes, cotas e legenda.
keywords: desenho de fabrico, desenhos de fabrico, todas as peças, lote, conjunto completo, desenho de uma peça, fabrico, pdf, desenho de pormenor, desenho de peça, imprimir
from: d25fe035
---

O DetailCraft faz uma folha por marca de peça, para cada viga, pilar, contraventamento e chapa do modelo, tudo de uma vez: não é preciso selecioná-los um a um. Peças idênticas partilham uma marca e, por isso, partilham uma folha. As folhas são feitas na hora a partir do modelo; não são guardadas nem editadas.

## Fazer o conjunto completo

1. Escolha {{ui:Desenho de fabrico}} no grupo {{ui:Saída}}. Não é preciso selecionar nada. Com uma peça selecionada, a janela abre na folha dessa peça. No painel {{ui:Propriedades}}, o mesmo botão chama-se {{ui:Desenho de fabrico}} para barras e {{ui:Desenho da chapa}} para ligações.
2. Abre-se uma pré-visualização, com a marca da peça no título, por exemplo "Desenho de fabrico b1". A primeira lista ao lado do título contém todas as marcas de peça com o seu perfil, comprimento e quantidade: escolha uma para ver a sua folha. A segunda lista altera o tamanho da folha; o conjunto completo é refeito nesse tamanho (ver [Desenhos de disposição geral e de montagem](topic:drawings#choose-the-sheet-size)).
3. Escolha {{ui:Transferir tudo}} (o botão indica o número de folhas) para um PDF com uma página por marca de peça, `<name> Shop drawings.pdf`. Cada folha indica "Folha 3 de 42" na sua legenda. Ou escolha {{ui:Transferir PDF}} para a folha que está a ver, `<name> <mark>.pdf`.
4. Feche a pré-visualização com o × ou {{key:Esc}}.

Se {{ui:Desenho de fabrico}} estiver a cinzento, o modelo ainda não tem peças.

## O que está na folha

Para um perfil em I:

- **Alçado**, olhando para a alma: a peça com os seus recortes, os furos da alma como círculos e os furos das abas como linhas ocultas (tracejadas).
- **Planta da aba superior**, vista de cima, quando alguma aba tem furos. Os furos da aba inferior aparecem a tracejado.
- **Corte** através do perfil.
- **Cotas:** cotagem encadeada das posições dos furos ao longo da peça, mais o comprimento total, as alturas dos furos da alma, o afastamento e as dimensões dos recortes.
- **Lista de furos:** cada grupo de furos, por exemplo "8 x Ø22 na aba superior".
- **Soldadura**, quando a peça tem chapas soldadas.
- **Legenda:** marca da peça, marca da montagem, perfil, material, comprimento, quantidade, peso unitário e total de cada, nome do modelo e data.

Para um perfil em U, uma cantoneira ou um perfil oco, a folha é igual, olhando para a alma ou para o lado: as paredes de um tubo são linhas ocultas (tracejadas), e o corte indica a espessura da parede.

Para uma chapa: a face da chapa com os seus furos, e a sua borda como corte.

## Escalas

A escala é escolhida numa lista (1:1 até 1:200) para a peça caber na folha. Uma peça longa e baixa ficaria demasiado fina para ler numa só escala, por isso, quando a altura daria menos de 30 mm no papel, a altura é desenhada numa escala maior do que o comprimento. O título da vista indica-o, por exemplo "comprimento 1:20, altura 1:5 (não à mesma escala; prevalecem as cotas)". Leia sempre as dimensões a partir das cotas, não medindo a folha.

## Bom saber

- A quantidade é o número de peças com essa marca no modelo. As marcas podem renumerar-se após uma alteração; ver [Verificar as marcas e a lista de materiais](topic:marks-and-bom).
- Cada folha é uma peça isolada, sem símbolos de soldadura; os desenhos de montagem (com símbolos de soldadura) e os desenhos de disposição geral estão em [Desenhos](topic:drawings). A folha não pode ser editada nem anotada no DetailCraft. Para a anotar, abra o PDF numa aplicação de anotação de PDF, como o MarkupCraft.
- O bloco de legenda diz "DetailCraft compilação de laboratório — milímetros".
- O texto usa a fonte Helvetica padrão do PDF. Os caracteres fora do conjunto da Europa Ocidental saem como "?", e a barra de estado conta-os.

## Imprimir

Abra o PDF transferido no seu leitor de PDF e imprima a 100% (sem "ajustar à página") em papel do tamanho escolhido, se quiser que as escalas indicadas se mantenham. Numa folha mais pequena, reduza a escala e confie nas cotas.
