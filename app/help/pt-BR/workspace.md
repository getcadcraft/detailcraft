---
title: Um tour pela tela
summary: Cada barra, painel e guia do DetailCraft pelo nome que aparece na tela e para que serve cada um.
keywords: tela, layout, barra de ferramentas, painéis, propriedades, barra de status, relatórios, interface, ui, guias
from: 454f74fd
---

O DetailCraft ocupa a janela do navegador abaixo da barra do aplicativo. De cima para baixo: a barra de ferramentas, depois três colunas (o painel {{ui:Modelo}}, a vista, o painel {{ui:Propriedades}}), depois as guias de relatório e a barra de status.

## A barra do aplicativo

A barra fina no topo pertence ao site do CadCraft, não ao modelo. Ela mostra o nome e a versão do aplicativo, um link para {{ui:Sobre o DetailCraft}}, {{ui:Ajuda}} (ou {{key:F1}}) para esta ajuda, {{ui:Salvar para uso offline}}, o botão de modo de tela e a chave {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Salvar para uso offline}} guarda o DetailCraft, sua vista 3D e esta ajuda no navegador para que abra sem conexão. Depois de salvo, o botão mostra {{ui:Pronto para uso offline}}; clique nele então para {{ui:Salvar de novo (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Veja [Trabalhar offline](common:offline).
- {{ui:Papel}} dá uma tela clara e {{ui:Modelo}} uma escura. A vista 3D acompanha na hora; nada no seu modelo muda.
- O botão de modo de tela e {{key:Ctrl+Shift+F}} alternam entre normal, tela cheia e tela cheia com as barras ocultas. {{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, inclusive no Mac. Com as barras ocultas, aponte para a borda superior da tela (ou toque nela) para trazê-las de volta. {{key:Esc}} sai da tela cheia.

## A barra de ferramentas

A barra de ferramentas tem cinco grupos. Passe o mouse sobre um botão para ver o que ele faz e sua tecla.

| Grupo | Botões | O que fazem |
|---|---|---|
| {{ui:Arquivo}} | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Salvar}}, {{ui:Exemplo}} | Começar um modelo, abrir um `.detailcraft.json` salvo ou um arquivo IFC, salvar um modelo ou abrir a estrutura de exemplo |
| {{ui:Inserir}} | {{ui:Selecionar}}, {{ui:Viga}}, {{ui:Pilar}}, {{ui:Contraventamento}}, {{ui:Chapa}}, {{ui:Sapata}}, {{ui:Escada}} | A ferramenta que o próximo clique na vista usa |
| {{ui:Ligar}} | {{ui:Chapas de extremidade}}, {{ui:Chapa de base}} e, em {{ui:Mais}}: {{ui:Chapas de cisalhamento}}, {{ui:Emenda}}, {{ui:Chapa de ligação}}, {{ui:Semelhante}} | Adicionar uma ligação à viga, ao pilar ou ao contraventamento selecionado, ou copiar a ligação selecionada para todas as juntas iguais a ela |
| {{ui:Editar}} | {{ui:Desfazer}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} | Voltar e avançar nas edições; copiar a seleção e colá-la. {{ui:Mais}} abre um menu com {{ui:Recortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo local}}, {{ui:Duplicar}}, {{ui:Excluir}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com sua tecla |
| {{ui:Saída}} | {{ui:IFC}}, {{ui:Arquivos NC}}, {{ui:LM}}, {{ui:Desenho de fabricação}}, {{ui:Desenhos}} e, em {{ui:Mais}}: {{ui:Dobramento}}, {{ui:Relatório de pesos por fase}}, {{ui:Arquivo KISS para software de fabricação}} | Baixar uma exportação ou abrir as folhas de desenho |

Botões e itens de menu que não podem agir no momento ficam acinzentados, e passar o mouse sobre um deles diz por quê. {{ui:Chapas de extremidade}} precisa de uma viga selecionada, {{ui:Chapa de base}} de um pilar selecionado, {{ui:Semelhante}} de uma ligação selecionada, {{ui:Desenho de fabricação}} de uma peça selecionada que seja perfil I ou chapa, {{ui:Copiar}} de uma barra ou sapata selecionada e {{ui:Colar}} de algo copiado. Veja [Copiar, colar e duplicar](topic:copy-paste).

## O painel Modelo (à esquerda)

- {{ui:Modelo}}: o {{ui:Nome}} do modelo. Ele dá nome a todo arquivo que você salva ou exporta.
- {{ui:Eixos}}: as linhas de eixo e seus espaçamentos, e {{ui:Aplicar eixos}}. Veja [Defina eixos e níveis](topic:grids-and-levels).
- {{ui:Níveis}}: uma linha por nível (nome e cota em mm), {{ui:Adicionar nível}} e {{ui:Aplicar níveis}}.
- {{ui:Perfil personalizado}}: crie sua própria seção paramétrica. Fechado até você abri-lo.
- {{ui:Marcas das peças}}: cada posição de peça do modelo com seu perfil, comprimento e quantidade. Clique em uma posição para selecionar a primeira peça com ela.

{{ui:Eixos}}, {{ui:Níveis}} e {{ui:Perfil personalizado}} se recolhem: clique nos títulos.

## A vista (no meio)

A vista mostra o modelo em 3D. Acima dela, a barra de vista tem três botões e uma lista:

- {{ui:3D}}: gire livremente em torno do modelo.
- {{ui:Planta}}: olhe direto para baixo em um nível. Uma lista de níveis aparece ao lado dos botões. Tudo que estiver mais de 1,5 m acima do nível é cortado, para que você veja e clique no nível com clareza.
- {{ui:Elevação}}: olhe direto para uma linha de eixo com letra (Eixo A, Eixo B …). Aparece uma lista dos eixos com letra. Só o aço a até 1 m dessa linha é mostrado.
- O botão de ajustar, na ponta direita da barra de vista, dá zoom para mostrar o modelo inteiro.

Pontos pequenos marcam cada interseção de eixos em cada nível. Com uma ferramenta de inserção ativa, o ponto mais próximo do ponteiro se acende e a barra de status o nomeia, por exemplo "A/2 no Nível 1". As cores distinguem os tipos de barra: pilares, vigas, contraventamentos e chapas têm cada um a sua cor, parafusos e chumbadores outra, as sapatas são transparentes e a armadura é desenhada como tubos. Os furos aparecem como tampões escuros; os rebaixos são recortados.

Como girar, fazer pan e dar zoom: [Movimente-se na vista 3D](topic:navigate-3d).

Quando o modelo está vazio, a vista mostra uma lista curta "Comece um modelo". Você também pode soltar um arquivo de modelo salvo em qualquer lugar da vista para abri-lo.

## O painel Propriedades (à direita)

O que este painel mostra depende do que você está fazendo, e o título diz o quê: "Modelo", "Inserir uma viga", "Viga b2", "Ligação com chapa de extremidade", "Chapa de base", "Sapata F1", "3 selecionados" ou "Colar".

- **Nada selecionado:** um resumo do modelo (barras, ligações, sapatas, peças, posições, parafusos, peso de aço e de armadura, eixos, níveis).
- **Uma ferramenta de inserção ativa:** as opções da próxima peça (perfil, material, posição, rotação e, para pilares, {{ui:Até}}), um resumo do perfil escolhido e um formulário {{ui:Adicionar por eixo}} para inserir sem clicar na vista.
- **Uma barra selecionada:** nome, perfil, material, posição, rotação, as coordenadas das duas pontas, suas posições, comprimento de corte e peso, seus furos e rebaixos, e botões para ligações, seu desenho de fabricação e {{ui:Excluir}}.
- **Uma ligação selecionada:** cada ajuste de chapa, parafuso e solda, os parafusos e a solda que ela produz, seus avisos e {{ui:Aplicar às semelhantes}}.
- **Uma sapata selecionada:** sua posição e tamanho, a malha inferior, as barras de espera e as posições de barra que ela usa.
- **Várias coisas selecionadas:** quantas barras de cada tipo, ligações e sapatas, o peso de aço delas e {{ui:Copiar}}, {{ui:Duplicar}} e {{ui:Excluir}}.
- **Colando:** o que está na área de transferência e formulários para colar por um deslocamento digitado ou em uma interseção de eixos escolhida nas listas.

Os campos numéricos têm efeito quando você pressiona {{key:Enter}} ou sai do campo. Cada alteração é um passo que você pode desfazer.

## As guias de relatório (embaixo)

- {{ui:Problemas}}: tudo que o DetailCraft não conseguiu construir ou quer que você confira, com um botão {{ui:Selecionar}} em cada linha. A guia mostra a contagem entre parênteses.
- {{ui:Lista de materiais}}: peças, conjuntos, parafusos e chumbadores, com pesos e um link {{ui:Baixar CSV}}. Clique em uma posição de peça para selecionar essa peça.
- {{ui:Tabela de dobramento}}: cada posição de barra em cada sapata, com um link {{ui:Baixar CSV}}.

Com uma guia em foco, {{key:Left}} e {{key:Right}} alternam entre as guias.

## A barra de status

A barra ao longo da parte de baixo tem três partes: a interseção de eixos sob o ponteiro durante a inserção, a última mensagem (o que acabou de acontecer ou por que algo foi recusado) e os totais correntes de peças, parafusos, peso de aço e peso de armadura. Quando uma ação parece não fazer nada, leia primeiro a mensagem aqui.

O título da guia do navegador começa com um ponto (•) enquanto o modelo tem alterações não salvas.

## Em uma tela estreita

Abaixo de cerca de 760 pixels de largura, as colunas se empilham: barra de ferramentas, vista, barra de status, {{ui:Propriedades}}, guias de relatório e, por último, o painel {{ui:Modelo}}. Role a página para alcançá-los. O DetailCraft foi pensado para a tela de um computador de mesa ou notebook; um celular serve para olhar, não para detalhar.
