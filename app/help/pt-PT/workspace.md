---
title: Visita ao ecrã
summary: Cada barra, painel e separador do DetailCraft pelo nome que tem no ecrã e para que serve.
keywords: ecrã, disposição, barra de ferramentas, painéis, propriedades, barra de estado, relatórios, interface, ui, separadores
from: 94f81073
---

O DetailCraft preenche a janela do navegador abaixo da barra da aplicação. De cima para baixo: a barra de ferramentas, depois três colunas (o painel {{ui:Modelo}}, a vista e o painel {{ui:Propriedades}}), depois os separadores de relatórios e, por fim, a barra de estado.

## A barra da aplicação

A barra fina no topo pertence ao site da CadCraft, não ao modelo. Mostra o nome e a versão da aplicação, uma ligação para {{ui:Acerca do DetailCraft}}, {{ui:Ajuda}} (ou {{key:F1}}) para esta ajuda, {{ui:Guardar para offline}}, o botão de modo de ecrã e o comutador {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Guardar para offline}} mantém o DetailCraft, a sua vista 3D e esta ajuda no navegador, para que abram sem ligação. Fica com {{ui:Pronto para offline}} depois de guardado; clique nele e depois escolha {{ui:Guardar novamente (obter a versão mais recente)}} ou {{ui:Remover a cópia offline}}. Ver [Trabalhar offline](common:offline).
- {{ui:Papel}} dá um ecrã claro e {{ui:Modelo}} um ecrã escuro. A vista 3D acompanha de imediato; nada no seu modelo muda.
- O botão de modo de ecrã e {{key:Ctrl+Shift+F}} alternam entre normal, ecrã inteiro e ecrã inteiro com as barras escondidas. {{key:Ctrl+Shift+F}} usa a tecla Control em todos os computadores, incluindo o Mac. Com as barras escondidas, aponte para a margem superior do ecrã (ou toque nela) para as trazer de volta. {{key:Esc}} sai do ecrã inteiro.

## A barra de ferramentas

A barra de ferramentas tem cinco grupos. Passe o cursor sobre um botão para ver o que faz e a sua tecla.

| Grupo | Botões | O que fazem |
|---|---|---|
| {{ui:Ficheiro}} | {{ui:Novo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Exemplo}} | Iniciar um modelo, abrir um `.detailcraft.json` guardado ou um ficheiro IFC, guardar um, ou abrir a estrutura de exemplo |
| {{ui:Colocar}} | {{ui:Selecionar}}, {{ui:Viga}}, {{ui:Pilar}}, {{ui:Contraventamento}}, {{ui:Chapa}}, {{ui:Sapata}}, {{ui:Escada}} | A ferramenta que o próximo clique na vista usa |
| {{ui:Ligar}} | {{ui:Chapas de topo}}, {{ui:Chapa de base}}, e em {{ui:Mais}}: {{ui:Cutelos}}, {{ui:Emenda}}, {{ui:Gousset}}, {{ui:Semelhantes}} | Adicionar uma ligação à viga, pilar ou contraventamento selecionado, ou copiar a ligação selecionada para cada junta semelhante |
| {{ui:Editar}} | {{ui:Anular}}, {{ui:Refazer}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Mais}} | Recuar e avançar nas edições; copiar a seleção e colá-la. {{ui:Mais}} abre um menu com {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Colar}}, {{ui:Colar no mesmo sítio}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Selecionar tudo}} e {{ui:Limpar seleção}}, cada um com a sua tecla |
| {{ui:Saída}} | {{ui:IFC}}, {{ui:Ficheiros NC}}, {{ui:LM}}, {{ui:Desenho de fabrico}}, {{ui:Desenhos}}, e em {{ui:Mais}}: {{ui:Dobragem}}, {{ui:Relatório de pesos por fase}}, {{ui:Ficheiro KISS para software de fabrico}} | Transferir uma exportação, ou abrir as folhas de desenho |

Os botões e itens de menu que não podem atuar de momento ficam a cinzento, e passar o cursor sobre um deles diz porquê. {{ui:Chapas de topo}} precisa de uma viga selecionada, {{ui:Chapa de base}} de um pilar selecionado, {{ui:Semelhantes}} de uma ligação selecionada, {{ui:Desenho de fabrico}} de um modelo com peças, {{ui:Copiar}} de uma barra ou sapata selecionada, e {{ui:Colar}} de algo copiado. Ver [Copiar, colar e duplicar](topic:copy-paste).

## O painel Modelo (à esquerda)

- {{ui:Modelo}}: o {{ui:Nome}} do modelo. Dá nome a cada ficheiro que guarda ou exporta.
- {{ui:Eixos}}: as linhas de eixo e os respetivos espaçamentos, e {{ui:Aplicar os eixos}}. Ver [Definir eixos e níveis](topic:grids-and-levels).
- {{ui:Níveis}}: uma linha por nível (nome e cota em mm), {{ui:Adicionar um nível}} e {{ui:Aplicar os níveis}}.
- {{ui:Perfil personalizado}}: crie a sua própria secção paramétrica. Fica fechado até o abrir.
- {{ui:Marcas das peças}}: cada marca de peça do modelo, com o seu perfil, comprimento e quantidade. Clique numa marca para selecionar a primeira peça com essa marca.

{{ui:Eixos}}, {{ui:Níveis}} e {{ui:Perfil personalizado}} recolhem-se: clique nos seus títulos.

## A vista (ao centro)

A vista mostra o modelo em 3D. Por cima dela, a barra da vista tem três botões e uma lista:

- {{ui:3D}}: rode livremente em torno do modelo.
- {{ui:Planta}}: olhe diretamente para baixo, para um nível. Aparece uma lista de níveis ao lado dos botões. Tudo o que estiver mais de 1.5 m acima do nível fica cortado, para ver e clicar bem no nível.
- {{ui:Alçado}}: olhe diretamente para uma linha de eixo com letra (Eixo A, Eixo B …). Aparece uma lista de eixos com letra. Só o aço a menos de 1 m dessa linha é mostrado.
- O botão de ajustar, à direita da barra da vista, aproxima para mostrar o modelo inteiro.

Pequenos pontos marcam cada interseção de eixos em cada nível. Enquanto uma ferramenta de colocação está ativa, o ponto mais próximo do cursor acende-se e a barra de estado indica-o, por exemplo « A/2 no Nível 1 ». As cores distinguem os tipos de elementos: pilares, vigas, contraventamentos e chapas têm cada um a sua cor, os parafusos e os chumbadouros outra, as sapatas são transparentes e a armadura é desenhada como tubos. Os furos aparecem como tampões escuros; os recortes aparecem como cortes.

Como rodar, deslocar a vista e aproximar: [Mover-se na vista 3D](topic:navigate-3d).

Quando o modelo está vazio, a vista mostra uma lista curta « Iniciar um modelo ». Também pode largar um ficheiro de modelo guardado em qualquer ponto da vista para o abrir.

## O painel Propriedades (à direita)

O que este painel mostra depende do que está a fazer, e o seu título diz qual: « Modelo », « Colocar uma viga », « Viga b2 », « Ligação de chapa de topo », « Chapa de base », « Sapata F1 », « 3 selecionados » ou « Colar ».

- **Nada selecionado:** um resumo do modelo (barras, ligações, sapatas, peças, marcas, parafusos, peso de aço e de armadura, eixos e níveis).
- **Uma ferramenta de colocação ativa:** as opções da próxima peça (perfil, material, posição, rotação e, para os pilares, {{ui:Até}}), um resumo do perfil escolhido, e um formulário {{ui:Adicionar por eixo}} para colocar sem clicar na vista.
- **Uma barra selecionada:** o seu nome, perfil, material, posição, rotação, as coordenadas das duas extremidades, as suas marcas, o comprimento de corte e o peso, os seus furos e recortes, e botões para ligações, para o seu desenho de fabrico e para {{ui:Eliminar}}.
- **Uma ligação selecionada:** todas as definições de chapas, parafusos e soldadura, os parafusos e a soldadura que faz, os seus avisos, e {{ui:Aplicar a semelhantes}}.
- **Uma sapata selecionada:** a sua posição e tamanho, a malha inferior, as armaduras de espera e as posições de varão que usa.
- **Vários itens selecionados:** quantas barras de cada tipo, ligações e sapatas, o seu peso de aço, e {{ui:Copiar}}, {{ui:Duplicar}} e {{ui:Eliminar}}.
- **Colagem:** o que está na área de transferência, e formulários para colar por um desvio escrito ou sobre uma interseção de eixos que escolha nas listas.

Os campos numéricos aplicam-se ao premir {{key:Enter}} ou ao sair do campo. Cada alteração é um passo que se pode anular.

## Os separadores de relatórios (em baixo)

- {{ui:Problemas}}: tudo o que o DetailCraft não conseguiu construir ou quer que verifique, com um botão {{ui:Selecionar}} em cada linha. O separador mostra a quantidade entre parênteses.
- {{ui:Lista de materiais}}: peças, montagens, e parafusos e chumbadouros, com pesos e uma ligação {{ui:Transferir CSV}}. Clique numa marca de peça para selecionar essa peça.
- {{ui:Mapa de dobragem}}: cada posição de varão em cada sapata, com uma ligação {{ui:Transferir CSV}}.

Com um separador em foco, {{key:Left}} e {{key:Right}} movem-se entre separadores.

## A barra de estado

A barra ao longo da parte de baixo tem três partes: a interseção de eixos sob o cursor durante a colocação, a última mensagem (o que acabou de acontecer, ou porque foi recusado algo) e os totais acumulados de peças, parafusos, peso de aço e peso de armadura. Quando uma ação parece não fazer nada, leia primeiro a mensagem aqui.

O título do separador do navegador começa com um ponto (•) enquanto o modelo tiver alterações não guardadas.

## Num ecrã estreito

Abaixo de cerca de 760 píxeis de largura, as colunas empilham-se: barra de ferramentas, vista, barra de estado, {{ui:Propriedades}}, separadores de relatórios e, por último, o painel {{ui:Modelo}}. Desloque a página para as alcançar. O DetailCraft está desenhado para um ecrã de secretária ou de portátil; um telemóvel serve para ver, não para pormenorizar.
