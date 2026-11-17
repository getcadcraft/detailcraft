---
title: Novidades da versão 0.9
summary: Tamanhos de aço do Reino Unido segundo o Blue Book e cantoneiras desiguais, desenhos de fabrico de todas as peças num só conjunto de PDF, Os meus perfis para secções personalizadas, P-Delta e frequências naturais, cargas de vento segundo a ASCE 7, local sísmico e combinações, e cursores no Live com Seguir.
keywords: novidades, o que há de novo, notas de lançamento, registo de alterações, 0.9, aço do Reino Unido, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira desigual, desenho de fabrico, desenhos de fabrico, conjunto de folhas, marca da peça, pdf, os meus perfis, perfil personalizado, p-delta, segunda ordem, frequência natural, elementos finitos, massa modal, carga de vento, asce 7, sísmico, classe de local, usgs, combinações de carga, lrfd, asd, live, cursores, seguir, pessoas, dicas, novidades, notas de lançamento, alterações, 0.8, 0.8.1, versão, novas funcionalidades, montagem, grua, tabela de cargas, filme, piloto automático, ligações, armadura, congestionamento, fundação, sapata, radier, recalque, estrutura leve, madeira, aço enformado a frio, lista de corte, construtibilidade, acesso à soldadura, fornecedor, stock, prazo de entrega, o que cede primeiro, betão, sísmico, laje, línguas, assistente
from: 4c95a2de
---

Eis o que mudou no DetailCraft 0.9, em comparação com a 0.8.1. A 0.9 traz os tamanhos de aço do Reino Unido, um desenho de fabrico para cada peça de uma só vez, um separador {{ui:Analysis}} maior para pórticos e uma vista dos cursores uns dos outros quando trabalham em conjunto.

## Novidades

### Aço do Reino Unido e desenhos de fabrico

- **Tamanhos de aço do Reino Unido.** As listas de perfis passam a ter 976 tamanhos do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, com as secções ocas enformadas a frio separadas (os nomes começam por CF). Os nomes são escritos começando pela família, como UB305x165x40 ou SHS100x100x5.0, e escrevê-los como se dizem nos desenhos também funciona: 305x165x40 UB, L100x100x10, SHS100x5. Ver [Catálogo de perfis](topic:profile-catalog).
- **Cantoneiras desiguais.** As cantoneiras UEA mantêm as duas abas na importação e na exportação IFC e nos ficheiros NC, e um espelho inverte a peça de ponta a ponta.
- **Todos os desenhos de fabrico de uma vez.** Escolha {{ui:Shop drawing}} no grupo {{ui:Output}} sem nada selecionado. A janela lista todas as marcas de peça, pré-visualiza qualquer uma delas, e {{ui:Download all}} (Transferir tudo) guarda um só PDF com uma página por marca, cada uma intitulada « Folha 3 de 42 ». {{ui:Download this sheet}} guarda apenas a que está a ver. Canais, cantoneiras e secções ocas passam também a ter folhas. Ver [Criar desenhos de fabrico](topic:shop-drawings).
- **Os meus perfis.** Um perfil personalizado pode agora ficar guardado para todos os modelos novos. No formulário Perfil personalizado, deixe {{ui:Keep in My profiles}} (Guardar em Os meus perfis) assinalado; a lista {{ui:My profiles}} por baixo tem {{ui:Keep}}, {{ui:Use here}} e {{ui:Remove}}. A lista fica guardada neste navegador (até 200), não na sua conta. Ver [Chapas e perfis](topic:plates-and-profiles).

### Análise

- **Segunda ordem (P-Delta).** Assinale {{ui:Second order (P-Delta)}} ao lado de {{ui:Run}} no separador {{ui:Analysis}} e as forças axiais atuam sobre o pórtico deformado. As chapas e os pisos rígidos ficam em primeira ordem, com um aviso. Ver [Forças, reações e deformações](topic:frame-analysis).
- **Frequências naturais.** O bloco {{ui:Finite elements: natural frequencies}}, por baixo dos resultados, encontra os modos mais baixos do mesmo modelo, com período e massa modal efetiva, e mostra um modo no modelo. Ver [Forças, reações e deformações](topic:frame-analysis).
- **Cargas de vento e local sísmico.** Três blocos novos no separador {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} e {{ui:ASCE 7 load combinations}}. Ver [Vento, local sísmico e combinações ASCE 7](topic:wind-seismic-combinations).

### Trabalhar em conjunto

- **Cursores e nomes.** Numa sessão Live, o ponteiro de cada pessoa é desenhado no modelo com o seu nome e a sua cor, e o que cada pessoa selecionou recebe uma caixa.
- **Seguir uma pessoa.** Abra {{ui:People}} (Pessoas) na sessão e escolha {{ui:Follow}} junto a um nome; a sua vista move-se com a dessa pessoa. O anfitrião pode escolher {{ui:Ask everyone to follow me}}. Ver [Seguir uma pessoa numa sessão Live](topic:follow-in-live).

### Em todas as aplicações

- As dicas de ferramenta são tooltips do Bootstrap, o cartão de dica inicial tem um botão de fecho, as faixas de separadores deslocam-se lateralmente quando não cabem, e o nome do separador do navegador indica o documento aberto seguido de DetailCraft e CadCraft.

## Corrigido

- Um perfil personalizado perdia-se ao começar um modelo novo.
- Canais, cantoneiras e secções ocas faltavam no conjunto de desenhos de fabrico.

## Limites assumidos

- Os blocos de vento, sísmico e de elementos finitos são ajudas de verificação. O seu engenheiro revê os resultados; não são uma verificação de norma. A consulta ao USGS foi testada num substituto, e não no serviço real.
- Os elementos finitos e o P-Delta foram verificados com respostas feitas à mão e em forma fechada, e não com um edifício real. A análise de encurvadura ainda não está implementada.
- Nenhum fabricante do Reino Unido experimentou ainda os tamanhos do Reino Unido, e os ficheiros NC para cantoneiras desiguais ainda não foram executados numa máquina.
- O conjunto de desenhos de fabrico é apenas em PDF.
- As línguas para além do inglês são rascunhos automáticos.
- Os instaladores do Windows não são assinados (Mais informações e depois Executar mesmo assim); a imagem de disco do macOS não está notarizada (clique com o botão direito e depois em Abrir).

As alterações anteriores estão nas notas de 0.8 e 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Eis o que mudou no DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificava as barras de aço; a 0.8 planeia as elevações, propõe as ligações, verifica as fundações e as armaduras, e cria estruturas em madeira e em painéis leves de aço enformado a frio para paredes, pisos e coberturas.

### Novidades

**Montagem**

- **Plano de montagem e filme.** No separador {{ui:Erection}}, descreva uma grua (onde está colocada, o seu gancho mais alto, o aparelho de elevação que não consta da tabela) e escreva as linhas da sua tabela de cargas. O DetailCraft eleva o modelo um conjunto de cada vez, por ordem de fase e nível a nível, e verifica cada elevação contra a tabela, ao seu raio e contra a margem que definir. {{ui:Save movie}} escreve um só ficheiro HTML que se reproduz offline em qualquer navegador, também num telemóvel. As elevações que estão fora da tabela, além dela ou demasiado altas ficam em {{ui:Problems}}. É um plano a partir dos seus números, não um plano de elevação. Ver [Plano de montagem e filme](topic:erection-movie).

**Ligações**

- **Piloto automático de ligações.** O separador {{ui:Autopilot}} analisa cada junta que não tem ligação e propõe uma a partir das formas: chapas de base, orelhas de corte, chapas de topo para as vigas que marcar como vigas de momento, emendas e goussets. Indique uma carga uniforme ou um corte numa extremidade e o número de parafusos segue a resistência de cálculo do parafuso. {{ui:Add them all}} acrescenta as propostas como um só passo de anulação. São valores de partida a rever, e não um dimensionamento de ligação.
- **Verificações de construtibilidade.** {{ui:Problems}} assinala um parafuso que uma chave não consegue alcançar, parafusos demasiado próximos para a chave de caixa, cordões de soldadura de ângulo fora dos limites de tamanho e secções ocas que retêm água. O acesso à soldadura é novo: um cordão de soldadura de ângulo contínuo que a tocha do soldador não alcança é indicado com a peça que está no caminho e a parte da soldadura afetada. Ver [Verificações de construtibilidade](topic:constructability).

**Fundações e armaduras**

- **Verificações de fundações.** O separador {{ui:Foundation}} verifica sapatas, sapatas combinadas e radiers no solo que descrever: capacidade de carga, deslizamento e derrubamento a partir das cargas de serviço; flexão, corte, punçoamento, amarração e armadura mínima a partir das cargas majoradas (ACI 318-19). Um pilar junto a uma borda ou a um canto é verificado com a secção cortada pela borda da sapata. O recalque vem do módulo do solo, um radier flexível é resolvido sobre molas a partir de um módulo de reação do terreno, e os grupos de estacas e os muros de suporte têm painéis próprios. As cargas dos pilares podem ser escritas ou tiradas da {{ui:Analysis}}. Ver [Verificações de fundações](topic:foundation-checks).
- **Mapa de congestionamento de armaduras.** O separador {{ui:Congestion}} desenha um mapa de calor de cada sapata vista de cima: onde as armaduras deixam pouco espaço para o betão descer, face à regra de espaçamento livre e, se a indicar, ao maior agregado e à cabeça do vibrador. Ver [Mapa de congestionamento de armaduras](topic:rebar-congestion).

**Estruturas e fornecimento**

- **Estruturas em madeira e em aço enformado a frio.** O separador {{ui:Framing}} estrutura painéis de parede, de piso e de cobertura com todas as peças, uma {{ui:Cut list}} (lista de corte), o stock a comprar e um desenho de fabrico à escala. {{ui:Place as members}} coloca as peças no modelo, e {{ui:PDF sheets}} guarda uma folha por painel. As dimensões, os espaçamentos e as vergas são seus: o DetailCraft não verifica se aguentam a carga. Ver [Painéis de estrutura em madeira e aço enformado a frio](topic:framing-panels).
- **Stock do fornecedor e prazos de entrega.** O separador {{ui:Supply}} lê a lista de stock de um fornecedor (CSV) e mostra, para cada secção que a lista de corte compra, se há stock suficiente e quanto tempo é a espera. As faltas e as secções atrasadas ficam em {{ui:Problems}}. Nada é encomendado. Ver [Stock do fornecedor e prazos de entrega](topic:supplier-stock).

**Análise e dimensionamento**

- **O que cede primeiro?** No separador {{ui:Analysis}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até onde as cargas podem crescer antes de a primeira barra atingir o seu limite, e a chapa de topo ou orelha de corte mais fraca, quando se conhece a resistência ao corte dos seus parafusos. Requer primeiro as combinações e uma norma de dimensionamento. Não são verificados o esmagamento, o corte de bloco, as soldaduras e o efeito de alavanca. O seu assistente ligado pode pedir o mesmo.
- **Live.** Assinale {{ui:Live: solve again after each edit}} e o pórtico é resolvido de novo após cada edição.
- **Mais betão.** Um pilar esbelto num pórtico sem deslocamento lateral é dimensionado para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser tirado da análise pelo método de Rayleigh. Uma laje feita de placas recebe o aço que cada camada necessita a partir dos seus momentos, e o corte unidirecional. Ver [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados das fundações, do betão e de O que cede primeiro são ajudas. As cargas de vento ainda não estão implementadas.

**Em todas as aplicações**

- **Línguas.** A ajuda está em 54 línguas. As que não são o inglês são rascunhos automáticos até que um falante nativo as leia; dez são novas (lituano, letão, bósnio, marata, telugu, albanês, africânder, filipino, suaíle, uzbeque).
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} escolhe quebra, 2 linhas ou 1 linha. Uma barra que já cabe fica como está; as restantes deslocam-se lateralmente.
- **Grelha de propriedades.** Os campos da sapata usam a grelha partilhada: categorias recolhíveis e uma densidade compacta. As operações aritméticas escritas, como 2*450, continuam a funcionar.
- **Dispositivos de entrada.** O trackpad, a caneta, o rato 3D, o comando e o MIDI podem controlar as aplicações. Ver [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problems}} de antes.
- **Ligue o seu assistente de IA.** O seu próprio assistente, ligado através do CadCraft Studio, funciona com as oito aplicações e vê apenas o que autorizar. A ligação com um clique, o conector alojado e a sua própria chave de API no Studio ainda estão para vir. Ver [Usar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Línguas no Studio.** O Studio e as edições empacotadas podem mudar de língua em tempo de execução; antes, estavam apenas em inglês. Ainda não foi testado em todas as plataformas: diga-nos se a língua não mudar.
- **Seleção por janela de cruzamento.** Os instaladores da 0.8.1 trazem já o comportamento correto da seleção por janela que a versão web da 0.8 tinha; um instalador mais antigo não tinha.
- **Tablets na vertical.** A altura livre da grelha passa para a área de desenho, e a disposição da folha começa aos 760 px ou menos.

### Não disponível nesta versão ainda

- **O envio de NC para uma máquina** ainda não foi lançado.
- **As cargas de vento** para betão ainda não estão implementadas, e as verificações de betão e de fundações são para um engenheiro rever.
- **Assinatura de código.** Os instaladores do Windows e a imagem .dmg do macOS não são assinados, por isso o Windows pode avisar e o macOS pede que clique com o botão direito e depois em Abrir.

As alterações anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).
