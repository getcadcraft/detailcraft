---
title: Novidades das versões 0.8 e 0.8.1
summary: Um filme de montagem a partir da tabela de cargas de um guindaste, um piloto automático de ligações, um mapa de congestionamento de armadura, verificações de fundações, painéis de estrutura leve, verificações de construtibilidade e de acesso à soldadura, stock de fornecedores, o que falha primeiro, cálculo ao vivo, mais verificações de betão e as correções da 0.8.1.
keywords: novidades, notas de lançamento, registo de alterações, alterações, 0.8, 0.8.1, versão, novas funcionalidades, montagem, guindaste, tabela de cargas, filme, piloto automático, ligações, armadura, congestionamento, fundações, sapata, laje de fundação, assentamento, estrutura leve, madeira, lista de corte, construtibilidade, acesso à soldadura, fornecedor, stock, prazo de entrega, o que falha primeiro, ao vivo, betão, sísmico, laje, idiomas, assistente
from: 6e33e052
---

Isto é o que mudou no DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificava barras de aço; a 0.8 planeia os içamentos, propõe as ligações, verifica as fundações e a armadura, e compõe paredes, pavimentos e coberturas em madeira e em estrutura leve.

## Novo

### Montagem

- **Plano de montagem e filme.** No separador {{ui:Montagem}}, descreva um guindaste (onde está, o gancho mais alto, a aparelhagem que não consta da tabela) e escreva as linhas da sua tabela de cargas. O DetailCraft ergue o modelo um conjunto de cada vez, por ordem de fase e nível a nível, e verifica cada içamento contra a tabela, no seu raio e contra a margem que definiu. {{ui:Guardar filme}} grava um único ficheiro HTML que funciona offline em qualquer navegador, também num telemóvel. Os içamentos acima da tabela, para lá dela ou demasiado altos estão em {{ui:Problemas}}. É um plano a partir dos seus números, não um plano de içamento. Ver [Plano de montagem e filme](topic:erection-movie).

### Ligações

- **Piloto automático de ligações.** O separador {{ui:Piloto automático}} examina cada junta sem ligação e propõe uma a partir das formas: chapas de base, {{ui:Cutelos}}, chapas de topo para as vigas que marcar como vigas de momento, emendas e chapas de gousset. Indique uma carga uniforme ou um esforço transverso numa extremidade, e o número de parafusos segue a resistência de cálculo do parafuso. {{ui:Adicionar todas}} acrescenta as propostas como um só passo de anulação. São valores de partida a rever, não um dimensionamento de ligação.
- **Verificações de construtibilidade.** {{ui:Problemas}} para um parafuso que uma chave não alcança, parafusos demasiado juntos para a chave de caixa, soldaduras de canto fora dos seus limites de dimensão e secções ocas onde fica água. O acesso à soldadura é novo: uma soldadura de canto contínua que a tocha do soldador não alcança aparece listada, com a peça que está no caminho e a parte da soldadura afetada. Ver [Verificações de construtibilidade](topic:constructability).

### Fundações e armadura

- **Verificações de fundações.** O separador {{ui:Fundações}} verifica sapatas, sapatas combinadas e lajes de fundação no solo que descrever: capacidade de carga, deslizamento e derrubamento a partir das cargas de serviço; flexão, esforço transverso, punçoamento, amarração e armadura mínima a partir das cargas majoradas (ACI 318-19). Um pilar perto de uma borda ou de um canto é verificado com a secção cortada pela borda da sapata. O assentamento vem do módulo do solo; uma laje de fundação flexível é resolvida sobre molas a partir de um módulo de reação; os grupos de estacas e os muros de suporte têm painéis próprios. As cargas dos pilares podem ser escritas ou tiradas da {{ui:Análise}}. Ver [Verificações de fundações](topic:foundation-checks).
- **Mapa de congestionamento de armadura.** O separador {{ui:Congestionamento}} desenha um mapa de calor de cada sapata, vista de cima: onde os varões deixam pouco espaço para o betão descer, face à regra de espaçamento livre e, se os indicar, ao maior agregado e à cabeça do vibrador. Ver [Mapa de congestionamento de armadura](topic:rebar-congestion).

### Estrutura leve e fornecimento

- **Estrutura leve em madeira e em aço leve.** O separador {{ui:Estrutura leve}} organiza painéis de parede, de pavimento e de cobertura, com cada peça, uma lista de corte, o stock a comprar e um desenho de fabrico à escala. {{ui:Colocar como barras}} põe as peças no modelo, e {{ui:Folhas PDF}} grava uma folha para cada painel. As dimensões, os espaçamentos e as vergas são da sua responsabilidade: o DetailCraft não verifica se aguentam a carga. Ver [Painéis de estrutura leve em madeira e em aço leve](topic:framing-panels).
- **Stock de fornecedores e prazos de entrega.** O separador {{ui:Fornecimento}} lê a lista de stock de um fornecedor (CSV) e mostra, para cada secção que a lista de corte compra, se há stock suficiente e quanto tempo é a espera. As faltas e as secções atrasadas estão em {{ui:Problemas}}. Nada é encomendado. Ver [Stock de fornecedores e prazos de entrega](topic:supplier-stock).

### Análise e cálculo

- **O que falha primeiro?** No separador {{ui:Análise}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até onde as cargas podem crescer antes de a primeira barra atingir o seu limite, e a chapa de topo ou o cutelo mais fraco, onde a resistência ao corte dos parafusos é conhecida. Primeiro precisa das combinações e de um código de cálculo. Não são verificados a pressão de apoio, o corte em bloco, as soldaduras nem o efeito de alavanca. O seu assistente ligado pode pedir o mesmo.
- **Ao vivo.** Marque {{ui:Live: resolver de novo após cada edição}} e a estrutura é resolvida de novo após cada edição.
- **Betão, e mais.** Um pilar esbelto num pórtico sem deslocamento lateral é dimensionado para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser tirado da análise pelo método de Rayleigh. Uma laje feita de chapas recebe o aço que cada camada precisa a partir dos seus momentos, e o esforço transverso numa direção. Ver [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados de fundações, de betão e de O que falha primeiro são auxiliares. As cargas de vento ainda não estão implementadas.

### Em todas as aplicações

- **Idiomas.** A ajuda está em 54 idiomas. Os que não são o inglês são rascunhos automáticos até um falante nativo os rever; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli, uzbeque).
- **Linhas da barra de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe quebra de linha, 2 linhas ou 1 linha. Uma barra que já cabe fica como está; as restantes deslocam-se lateralmente.
- **Grelha de propriedades.** Os campos da sapata usam a grelha comum: categorias que se podem recolher e densidade compacta. A aritmética escrita, como 2*450, continua a funcionar.
- **Dispositivos de entrada.** Trackpad, caneta, rato 3D, comando e MIDI podem acionar as aplicações. Ver [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problemas}} de antes.
- **Ligue o seu assistente de IA.** O seu próprio assistente, ligado através do CadCraft Studio, funciona com as oito aplicações e vê apenas o que permitir. A ligação com um clique, o conector alojado e a sua própria chave de API no Studio ainda estão para chegar. Ver [Utilizar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Idiomas no Studio.** O Studio e as edições empacotadas podem mudar de idioma em tempo de execução; antes, eram só em inglês. Ainda não foi testado em todas as plataformas: informe-nos se o idioma não mudar.
- **Seleção por janela de cruzamento.** Os instaladores da 0.8.1 já trazem o comportamento de seleção por janela de cruzamento, correto na versão web 0.8; um instalador mais antigo não o tinha.
- **Tablets na vertical.** O espaço livre em altura da grelha vai para a área de desenho, e a disposição da folha começa aos 760 px ou menos.

## Ainda não está nesta versão

- **Enviar NC para uma máquina** ainda não está disponível.
- **Cargas de vento** para betão ainda não estão implementadas, e as verificações de betão e de fundações são para um engenheiro rever.
- **Assinatura de código.** Os instaladores do Windows e o .dmg do macOS não estão assinados, por isso o Windows pode avisar, e o macOS pede um clique com o botão direito e depois « Abrir ».

As alterações anteriores estão em [Novidades da 0.7](topic:whats-new-0-7).
