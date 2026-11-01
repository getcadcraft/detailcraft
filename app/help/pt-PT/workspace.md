---
title: Uma visita ao ecrã
summary: Todas as barras, painéis e separadores do DetailCraft pelo nome que têm no ecrã, e para que serve cada um.
keywords: ecrã, disposição, barra de ferramentas, painéis, propriedades, barra de estado, relatórios, interface, ui, separadores
from: 454f74fd
---

O DetailCraft ocupa a janela do navegador por baixo da barra da aplicação. De cima para baixo: a barra de ferramentas, depois três colunas (o painel {{ui:Modelo}}, a vista, o painel {{ui:Propriedades}}), depois os separadores de relatórios, depois a barra de estado.

## A barra da aplicação

A barra fina no topo pertence ao site do CadCraft, não ao modelo. Mostra o nome e a versão da aplicação, uma ligação para {{ui:Acerca do DetailCraft}}, {{ui:Ajuda}} (ou {{key:F1}}) para esta ajuda, {{ui:Guardar para offline}}, o botão de modo de ecrã e o interruptor {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Guardar para offline}} mantém o DetailCraft, a sua vista 3D e esta ajuda no navegador para que abra sem ligação. Diz {{ui:Pronto para offline}} depois de guardado; clique então nele para {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Consulte [Trabalhar offline](common:offline).
- {{ui:Papel}} dá um ecrã claro e {{ui:Modelo}} um escuro. A vista 3D acompanha de imediato; nada no seu modelo muda.
- O botão de modo de ecrã e {{key:Ctrl+Shift+F}} alternam entre normal, ecrã inteiro, e ecrã inteiro com as barras ocultas. {{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, incluindo os Mac. Com as barras ocultas, aponte para o limite superior do ecrã (ou toque nele) para as fazer voltar. {{key:Esc}} sai do ecrã inteiro.

## A barra de ferramentas

A barra de ferramentas tem cinco grupos. Pare o ponteiro sobre um botão para ver o que faz e a sua tecla.

| Grupo | Botões | O que fazem |
|---|---|---|
| {{ui:Ficheiro}} | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Exemplo}} | Iniciar um modelo, abrir um `.detailcraft.json` guardado ou um ficheiro IFC, guardar um, ou abrir a estrutura de exemplo |
| {{ui:Colocar}} | {{ui:Selecionar}}, {{ui:Viga}}, {{ui:Pilar}}, {{ui:Contraventamento}}, {{ui:Chapa}}, {{ui:Sapata}}, {{ui:Escada}} | A ferramenta que o clique seguinte na vista utiliza |
| {{ui:Ligar}} | {{ui:Chapas de topo}}, {{ui:Chapa de base}}, e em {{ui:Mais}}: {{ui:Cutelos}}, {{ui:Emenda}}, {{ui:Gousset}}, {{ui:Semelhantes}} | Acrescentar uma ligação à viga, pilar ou contraventamento selecionado, ou copiar a ligação selecionada para todas as juntas iguais |
| {{ui:Editar}} | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} | Recuar e avançar nas edições; copiar a seleção e colá-la. {{ui:Mais}} abre um menu com {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com a sua tecla |
| {{ui:Saída}} | {{ui:IFC}}, {{ui:Ficheiros NC}}, {{ui:LM}}, {{ui:Desenho de fabrico}}, {{ui:Desenhos}}, e em {{ui:Mais}}: {{ui:Dobragem}}, {{ui:Relatório de pesos por fase}}, {{ui:Ficheiro KISS para software de fabrico}} | Transferir uma exportação, ou abrir as folhas de desenho |

Os botões e itens de menu que não podem atuar neste momento ficam a cinzento, e parar o ponteiro sobre um diz porquê. {{ui:Chapas de topo}} precisa de uma viga selecionada, {{ui:Chapa de base}} de um pilar selecionado, {{ui:Semelhantes}} de uma ligação selecionada, {{ui:Desenho de fabrico}} de uma peça selecionada que seja um perfil em I ou uma chapa, {{ui:Copiar}} de uma barra ou sapata selecionada, e {{ui:Colar}} de algo copiado. Consulte [Copiar, colar e duplicar](topic:copy-paste).

## O painel Modelo (esquerda)

- {{ui:Modelo}}: o {{ui:Nome}} do modelo. Dá nome a todos os ficheiros que guarda ou exporta.
- {{ui:Eixos}}: as linhas de eixo e os seus espaçamentos, e {{ui:Aplicar os eixos}}. Consulte [Definir eixos e níveis](topic:grids-and-levels).
- {{ui:Níveis}}: uma linha por nível (nome e cota em mm), {{ui:Adicionar um nível}} e {{ui:Aplicar os níveis}}.
- {{ui:Perfil personalizado}}: crie a sua própria secção paramétrica. Fechado até o abrir.
- {{ui:Marcas das peças}}: todas as marcas de peças do modelo com o respetivo perfil, comprimento e contagem. Clique numa marca para selecionar a primeira peça que a tem.

{{ui:Eixos}}, {{ui:Níveis}} e {{ui:Perfil personalizado}} recolhem-se: clique nos seus títulos.

## A vista (meio)

A vista mostra o modelo em 3D. Por cima, a barra da vista tem três botões e uma lista:

- {{ui:3D}}: rodar livremente à volta do modelo.
- {{ui:Planta}}: olhar diretamente de cima para um nível. Uma lista de níveis aparece ao lado dos botões. Tudo o que fica a mais de 1,5 m acima do nível é cortado para que possa ver e clicar claramente no nível.
- {{ui:Alçado}}: olhar diretamente para uma linha de eixo com letra (Eixo A, Eixo B …). Aparece uma lista de eixos com letra. Só é mostrado o aço a menos de 1 m dessa linha.
- O botão de ajustar, na extremidade direita da barra da vista, faz zoom para mostrar o modelo todo.

Pequenos pontos assinalam cada interseção de eixos em cada nível. Enquanto uma ferramenta de colocação está ligada, o ponto mais próximo do ponteiro acende-se e a barra de estado dá-lhe o nome, por exemplo "A/2 no Nível 1". As cores distinguem os tipos de barras: os pilares, as vigas, os contraventamentos e as chapas têm cada um a sua cor, os parafusos e os chumbadouros outra, as sapatas são transparentes e as armaduras são desenhadas como tubos. Os furos aparecem como tampões escuros; os recortes estão cortados.

Como rodar, deslocar a vista e aproximar: [Mover-se na vista 3D](topic:navigate-3d).

Quando o modelo está vazio, a vista mostra uma pequena lista "Comece um modelo". Também pode largar um ficheiro de modelo guardado em qualquer ponto da vista para o abrir.

## O painel Propriedades (direita)

O que este painel mostra depende do que está a fazer, e o seu título diz o quê: "Modelo", "Colocar uma viga", "Viga b2", "Ligação com chapa de topo", "Chapa de base", "Sapata F1", "3 selecionados" ou "Colar".

- **Nada selecionado:** um resumo do modelo (barras, ligações, sapatas, peças, marcas, parafusos, peso do aço e das armaduras, eixos, níveis).
- **Uma ferramenta de colocação ligada:** as opções da peça seguinte (perfil, material, posição, rotação e, para pilares, {{ui:Até}}), um resumo do perfil escolhido e um formulário {{ui:Adicionar por eixo}} para colocar sem clicar na vista.
- **Uma barra selecionada:** o seu nome, perfil, material, posição, rotação, as coordenadas das suas duas extremidades, as suas marcas, comprimento de corte e peso, os seus furos e recortes, e botões para ligações, o seu desenho de fabrico e {{ui:Eliminar}}.
- **Uma ligação selecionada:** todas as definições de chapa, parafusos e soldadura, os parafusos e a soldadura que produz, os seus avisos e {{ui:Aplicar a semelhantes}}.
- **Uma sapata selecionada:** a sua posição e tamanho, a malha inferior, as armaduras de espera e as marcas de varão que utiliza.
- **Várias coisas selecionadas:** quantas barras de cada tipo, ligações e sapatas, o seu peso de aço, e {{ui:Copiar}}, {{ui:Duplicar}} e {{ui:Eliminar}}.
- **A colar:** o que está na área de transferência, e formulários para colar com um desvio escrito ou numa interseção de eixos que escolhe nas listas.

Os campos numéricos têm efeito quando prime {{key:Enter}} ou sai do campo. Cada alteração é um passo que pode anular.

## Os separadores de relatórios (em baixo)

- {{ui:Problemas}}: tudo o que o DetailCraft não conseguiu construir ou quer que verifique, com um botão {{ui:Selecionar}} em cada linha. O separador mostra a contagem entre parênteses.
- {{ui:Lista de materiais}}: peças, montagens, e parafusos e chumbadouros, com pesos e uma ligação {{ui:Transferir CSV}}. Clique numa marca de peça para selecionar essa peça.
- {{ui:Mapa de dobragem}}: todas as marcas de varão em todas as sapatas, com uma ligação {{ui:Transferir CSV}}.

Com um separador em foco, {{key:Left}} e {{key:Right}} movem-se entre separadores.

## A barra de estado

A barra ao longo de baixo tem três partes: a interseção de eixos sob o ponteiro durante a colocação, a mensagem mais recente (o que acabou de acontecer, ou porque algo foi recusado) e os totais acumulados de peças, parafusos, peso de aço e peso de armaduras. Quando uma ação parece não fazer nada, leia primeiro a mensagem aqui.

O título do separador do navegador começa com um ponto (•) enquanto o modelo tem alterações que não guardou.

## Num ecrã estreito

Abaixo de cerca de 760 píxeis de largura, as colunas empilham-se: barra de ferramentas, vista, barra de estado, {{ui:Propriedades}}, separadores de relatórios e, por fim, o painel {{ui:Modelo}}. Desloque a página para chegar a elas. O DetailCraft está disposto para um ecrã de computador de secretária ou portátil; um telemóvel serve para ver, não para pormenorizar.
