---
title: Uma visita pela tela
summary: Cada barra, painel e guia do DetailCraft pelo nome na tela e para que serve cada um.
keywords: tela, layout, barra de ferramentas, painéis, propriedades, barra de status, relatórios, interface, ui, guias
from: 94f81073
---

O DetailCraft ocupa a janela do navegador abaixo da barra do aplicativo. De cima para baixo: a barra de ferramentas, depois três colunas (o painel {{ui:Model}}, a visualização e o painel {{ui:Properties}}), depois as guias de relatório e, por fim, a barra de status.

## A barra do aplicativo

A barra fina no topo pertence ao site do CadCraft, não ao modelo. Ela mostra o nome e a versão do aplicativo, um link para {{ui:About DetailCraft}} (Sobre o DetailCraft), {{ui:Help}} (ou {{key:F1}}) para esta ajuda, {{ui:Save for offline}}, o botão de modo de tela e a alternância {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} mantém o DetailCraft, a visualização 3D e esta ajuda no seu navegador, para que ele abra sem conexão. Depois de salvo, o botão mostra {{ui:Offline ready}}; clique nele então para {{ui:Save again (get the newest version)}} ou {{ui:Remove the offline copy}}. Veja [Trabalhar offline](common:offline).
- {{ui:Paper}} deixa a tela clara, e {{ui:Model}} a deixa escura. A visualização 3D acompanha na hora; nada no seu modelo muda.
- O botão de modo de tela e {{key:Ctrl+Shift+F}} alternam entre normal, tela cheia e tela cheia com as barras ocultas. {{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, inclusive em Mac. Com as barras ocultas, aponte para a borda superior da tela (ou toque nela) para trazê-las de volta. {{key:Esc}} sai da tela cheia.

## A barra de ferramentas

A barra de ferramentas tem cinco grupos. Passe o cursor sobre um botão para ver o que ele faz e a sua tecla de atalho.

| Grupo | Botões | O que fazem |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Iniciam um modelo, abrem um `.detailcraft.json` salvo ou um arquivo IFC, salvam um deles ou abrem o pórtico de exemplo |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | A ferramenta que o próximo clique na visualização usa |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, e em {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Adicionam uma ligação à viga, pilar ou diagonal selecionada, ou copiam a ligação selecionada para cada junta semelhante |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Voltam e avançam nas edições; copiam a seleção e a colam. {{ui:More}} abre um menu com {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} e {{ui:Select none}}, cada um com a sua tecla |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, e em {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Baixam uma exportação ou abrem as folhas de desenho |

Botões e itens de menu que não podem agir no momento ficam em cinza, e passar o cursor sobre um deles diz o motivo. {{ui:End plates}} precisa de uma viga selecionada, {{ui:Base plate}} de um pilar selecionado, {{ui:Similar}} de uma ligação selecionada, {{ui:Shop drawing}} de um modelo com peças, {{ui:Copy}} de uma barra ou sapata selecionada, e {{ui:Paste}} de algo copiado. Veja [Copiar, colar e duplicar](topic:copy-paste).

## O painel Modelo (à esquerda)

- {{ui:Model}}: o {{ui:Name}} do modelo. Ele dá nome a cada arquivo que você salva ou exporta.
- {{ui:Grids}}: as linhas de eixo e os seus espaçamentos, e {{ui:Apply grids}}. Veja [Configure eixos e níveis](topic:grids-and-levels).
- {{ui:Levels}}: uma linha por nível (nome e elevação em mm), {{ui:Add level}} e {{ui:Apply levels}}.
- {{ui:Custom profile}}: crie a sua própria seção paramétrica. Fica fechado até você abri-lo.
- {{ui:Part marks}}: cada marca de peça do modelo com o seu perfil, comprimento e quantidade. Clique em uma marca para selecionar a primeira peça com ela.

{{ui:Grids}}, {{ui:Levels}} e {{ui:Custom profile}} se recolhem: clique em seus títulos.

## A visualização (no meio)

A visualização mostra o modelo em 3D. Acima dela, a barra da visualização tem três botões e uma lista:

- {{ui:3D}}: gire livremente em torno do modelo.
- {{ui:Plan}}: olhe diretamente para um nível. Uma lista de níveis aparece ao lado dos botões. Tudo o que estiver a mais de 1,5 m acima do nível é recortado, para que você veja e clique no nível com clareza.
- {{ui:Elevation}}: olhe diretamente para uma linha de eixo com letra (Eixo A, Eixo B …). Aparece uma lista de eixos com letras. Só o aço a até 1 m dessa linha é mostrado.
- O botão de ajuste, no canto direito da barra da visualização, dá zoom para mostrar o modelo inteiro.

Pequenos pontos marcam cada interseção de eixos em cada nível. Enquanto uma ferramenta de posicionamento está ativa, o ponto mais próximo do ponteiro acende, e a barra de status o nomeia, por exemplo "A/2 no Nível 1". As cores diferenciam os tipos de peça: pilares, vigas, diagonais e chapas têm cada um a sua cor; parafusos e chumbadores têm outra; as sapatas são transparentes, e a armadura é desenhada como tubos. Os furos aparecem como tampões escuros; os rebaixos aparecem cortados.

Como girar, mover e dar zoom: [Mova-se na visualização 3D](topic:navigate-3d).

Quando o modelo está vazio, a visualização mostra uma breve lista "Iniciar um modelo". Você também pode soltar um arquivo de modelo salvo em qualquer lugar da visualização para abri-lo.

## O painel Propriedades (à direita)

O que este painel mostra depende do que você está fazendo, e o título diz o quê: "Modelo", "Inserir uma viga", "Viga b2", "Ligação de chapa de extremidade", "Chapa de base", "Sapata F1", "3 selecionados" ou "Colar".

- **Nada selecionado:** um resumo do modelo (barras, ligações, sapatas, peças, marcas, parafusos, peso de aço e de armadura, eixos, níveis).
- **Uma ferramenta de posicionamento ativa:** as opções da próxima peça (perfil, material, posição, rotação e, para pilares, {{ui:Up to}}), um resumo do perfil escolhido e um formulário {{ui:Add by grid}} para posicionar sem clicar na visualização.
- **Uma barra selecionada:** nome, perfil, material, posição, rotação, as coordenadas das duas extremidades, suas marcas, comprimento de corte e peso, seus furos e rebaixos, e botões para ligações, seu desenho de fabricação e {{ui:Delete}}.
- **Uma ligação selecionada:** cada configuração de chapa, parafuso e solda, os parafusos e a solda que ela faz, seus avisos e {{ui:Apply to similar}} (Aplicar a semelhantes).
- **Uma sapata selecionada:** sua posição e tamanho, a malha inferior, as barras de espera e as marcas de barra que ela usa.
- **Vários itens selecionados:** quantas peças de cada tipo, ligações e sapatas, o peso de aço deles, e {{ui:Copy}}, {{ui:Duplicate}} e {{ui:Delete}}.
- **Colando:** o que está na área de transferência, e formulários para colar por um deslocamento digitado ou em uma interseção de eixos que você escolhe em listas.

Os campos numéricos têm efeito quando você pressiona {{key:Enter}} ou sai do campo. Cada alteração é um passo que você pode desfazer.

## As guias de relatório (embaixo)

- {{ui:Problems}}: tudo o que o DetailCraft não conseguiu montar ou quer que você verifique, com um botão {{ui:Select}} em cada linha. A guia mostra a contagem entre colchetes.
- {{ui:Bill of materials}}: peças, montagens e parafusos e chumbadores, com pesos e um link {{ui:Download CSV}}. Clique em uma marca de peça para selecionar essa peça.
- {{ui:Bending schedule}}: cada marca de barra em cada sapata, com um link {{ui:Download CSV}}.

Com uma guia em foco, {{key:Left}} e {{key:Right}} movem entre as guias.

## A barra de status

A barra ao longo da parte inferior tem três partes: a interseção de eixos sob o ponteiro durante o posicionamento, a última mensagem (o que acabou de acontecer ou por que algo foi recusado) e os totais contínuos de peças, parafusos, peso de aço e peso de armadura. Quando uma ação parece não fazer nada, leia primeiro a mensagem aqui.

O título da aba do navegador começa com um ponto (•) enquanto o modelo tiver alterações não salvas.

## Em uma tela estreita

Abaixo de cerca de 760 pixels de largura, as colunas empilham: barra de ferramentas, visualização, barra de status, {{ui:Properties}}, guias de relatório e, por último, o painel {{ui:Model}}. Role a página para chegar a elas. O DetailCraft é feito para a tela de um computador ou notebook; um celular serve para ver, não para detalhar.
