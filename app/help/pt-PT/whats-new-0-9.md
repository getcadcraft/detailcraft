---
title: Novidades na versão 0.9 (anteriores)
summary: Tamanhos de aço do Blue Book do Reino Unido e cantoneiras de abas desiguais, desenhos de fabrico de cada peça num único conjunto PDF, Os meus perfis para secções personalizadas, P-Delta e frequências naturais, cargas de vento ASCE 7, local sísmico e combinações, e cursores no Live com Seguir.
keywords: novidades 0.9, versão anterior, novidades, notas de lançamento, registo de alterações, 0.9, aço do Reino Unido, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira de abas desiguais, desenho de fabrico, desenhos de fabrico, conjunto de folhas, marca de peça, pdf, os meus perfis, perfil personalizado, P-Delta, segunda ordem, frequência natural, elementos finitos, massa modal, carga de vento, ASCE 7, sísmico, classe do local, USGS, combinações de cargas, LRFD, ASD, live, cursores, seguir, pessoas, sugestões, 0.8, 0.8.1, versão, novas funcionalidades, montagem, grua, tabela de cargas, filme, piloto automático, ligações, armadura, congestionamento, fundação, sapata, maciço, recalque, estrutura leve, madeira, aço leve, lista de corte, construtibilidade, acesso à soldadura, fornecedor, stock, prazo de entrega, o que cede primeiro, betão, sísmico, laje, línguas, assistente
from: ab0c7f05
---

Isto é o que mudou no DetailCraft 0.9, em comparação com a 0.8.1. A 0.9 traz os tamanhos de aço do Reino Unido, um desenho de fabrico para cada peça de uma só vez, um separador {{ui:Análise}} maior para pórticos e uma vista dos cursores uns dos outros quando trabalham em conjunto.

## Novidades

### Aço do Reino Unido e desenhos de fabrico

- **Tamanhos de aço do Reino Unido.** As listas de perfis incluem agora 976 tamanhos do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, com as secções ocas enformadas a frio mantidas à parte (os nomes começam por CF). Os nomes escrevem-se com a família primeiro, como UB305x165x40 ou SHS100x100x5.0, e escrevê-los como os desenhos os indicam também funciona: 305x165x40 UB, L100x100x10, SHS100x5. Veja [Catálogo de perfis](topic:profile-catalog).
- **Cantoneiras de abas desiguais.** As cantoneiras UEA mantêm as duas abas nos IFC de entrada e de saída e nos ficheiros NC, e um espelho inverte a peça de ponta a ponta.
- **Todos os desenhos de fabrico de uma vez.** Escolha {{ui:Desenho de fabrico}} no grupo {{ui:Saída}} sem nada selecionado. A janela lista todas as marcas de peça, pré-visualiza qualquer uma delas, e {{ui:Transferir tudo}} guarda um PDF com uma página por marca, cada uma intitulada "Folha 3 de 42". {{ui:Transferir PDF}} guarda a folha que está a ver. Perfis U, cantoneiras e secções ocas passam também a ter folhas. Veja [Criar desenhos de fabrico](topic:shop-drawings).
- **Os meus perfis.** Um perfil personalizado pode agora ficar guardado para cada modelo novo. No formulário Perfil personalizado, deixe {{ui:Manter em Os meus perfis}} marcado; a lista {{ui:Os meus perfis}} que aparece por baixo tem {{ui:Guardar}}, {{ui:Usar aqui}} e {{ui:Remover}}. A lista fica guardada neste navegador (até 200), e não na sua conta. Veja [Chapas e perfis](topic:plates-and-profiles).

### Análise

- **Segunda ordem (P-Delta).** Marque {{ui:Segunda ordem (P-Delta)}} ao lado de Executar no separador {{ui:Análise}} e os esforços axiais atuam sobre o pórtico deformado. As placas e os pisos rígidos ficam em primeira ordem, com um aviso. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Frequências naturais.** O bloco {{ui:Elementos finitos: frequências naturais}}, sob os resultados, encontra os modos mais baixos do mesmo modelo, com período e massa modal efetiva, e mostra um modo no modelo. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Cargas de vento e local sísmico.** Três blocos novos no separador {{ui:Análise}}: {{ui:Cargas de vento (procedimento direcional ASCE 7)}}, {{ui:Local e sistema sísmico (ASCE 7)}} e {{ui:Combinações de cargas ASCE 7}}. Veja [Vento, local sísmico e combinações ASCE 7](topic:wind-seismic-combinations).

### Trabalhar em conjunto

- **Cursores e nomes.** Numa sessão Live, o ponteiro de cada pessoa é desenhado no modelo com o seu nome e cor, e o que selecionou fica com uma caixa.
- **Seguir uma pessoa.** Abra {{ui:Pessoas}} na sessão e escolha {{ui:Seguir}} num nome; a sua vista move-se com a dela. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. Veja [Seguir uma pessoa numa sessão Live](topic:follow-in-live).

### Em todas as aplicações

- As sugestões ao passar o rato são sugestões Bootstrap, o cartão de sugestão inicial tem um botão de fechar, as barras de separadores deslocam-se lateralmente quando não cabem, e o nome do separador do navegador indica o documento aberto seguido de DetailCraft e CadCraft.

## Corrigido

- Um perfil personalizado perdia-se quando começava um modelo novo.
- Perfis U, cantoneiras e secções ocas faltavam no conjunto de desenhos de fabrico.

## Limites conhecidos

- Os blocos de vento, sísmico e de elementos finitos são ajudas à verificação. O seu engenheiro revê os resultados; não são uma verificação de norma. A consulta USGS foi testada com um substituto, e não com o serviço em funcionamento.
- Os elementos finitos e o P-Delta foram verificados contra respostas à mão e em forma fechada, não contra um edifício real. A análise de encurvadura não está implementada.
- Nenhum fabricante britânico experimentou ainda os tamanhos do Reino Unido, e os ficheiros NC para cantoneiras de abas desiguais ainda não foram executados numa máquina.
- O conjunto de desenhos de fabrico é só em PDF.
- As línguas além do inglês são rascunhos automáticos.
- Os instaladores para Windows não têm assinatura de código (Mais informações e depois Executar mesmo assim); a imagem de disco para macOS não está notarizada (clique com o botão direito e depois Abrir).

As alterações anteriores estão nas notas da 0.8 e da 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Isto é o que mudou no DetailCraft 0.8 (1 de novembro de 2026) e na 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificava barras de aço; a 0.8 planeia os içamentos, propõe as ligações, verifica as fundações e as armaduras, e estrutura paredes, pisos e coberturas de madeira e de aço leve enformado a frio.

### Novidades

**Montagem**

- **Plano de montagem e filme.** No separador {{ui:Montagem}}, descreva uma grua (onde está, o seu gancho mais alto, os aparelhos de elevação que não constam da tabela) e escreva as linhas da sua tabela de cargas. O DetailCraft eleva o modelo uma montagem de cada vez, por ordem de fase e nível a nível, e verifica cada içamento contra a tabela ao seu raio e contra a margem que definiu. {{ui:Guardar filme}} escreve um ficheiro HTML que se reproduz offline em qualquer navegador, também num telemóvel. Os içamentos acima da tabela, para além dela ou demasiado altos estão em {{ui:Problemas}}. É um plano a partir dos seus números, não um plano de içamento. Veja [Plano de montagem e filme](topic:erection-movie).

**Ligações**

- **Piloto automático de ligações.** O separador {{ui:Piloto automático}} examina cada nó sem ligação e propõe uma a partir dos perfis: chapas de base, chapas de corte, chapas de topo para as vigas que marcar como vigas de momento, emendas e chapas de gousset. Indique uma carga uniforme ou um esforço transverso numa extremidade, e o número de parafusos segue a resistência de cálculo de cada parafuso. {{ui:Adicionar todas}} adiciona as propostas como um único passo de anulação. São valores de partida a rever, não um dimensionamento de ligações.
- **Verificações de construtibilidade.** {{ui:Problemas}} para um parafuso que uma chave não alcança, parafusos demasiado próximos para a chave de caixa, soldaduras de ângulo fora dos seus limites de dimensão e secções ocas que retêm água. O acesso à soldadura é novo: uma soldadura de ângulo em todo o perímetro que a tocha do soldador não alcança aparece com a peça que está no caminho e a parte da soldadura afetada. Veja [Verificações de construtibilidade](topic:constructability).

**Fundações e armaduras**

- **Verificações de fundações.** O separador {{ui:Fundações}} verifica sapatas, sapatas combinadas e maciços sobre o solo que descreve: capacidade de carga, deslizamento e derrubamento a partir das cargas de serviço; flexão, corte, punçoamento, amarração e armadura mínima a partir das cargas majoradas (ACI 318-19). Um pilar junto a uma borda ou a um canto é verificado com a secção cortada pela borda da sapata. O assentamento vem do módulo do solo, um maciço flexível é resolvido sobre molas a partir de um coeficiente de reação do solo, e grupos de estacas e muros de suporte têm painéis próprios. As cargas dos pilares podem ser escritas ou tiradas da {{ui:Análise}}. Veja [Verificações de fundações](topic:foundation-checks).
- **Mapa de congestionamento de armaduras.** O separador {{ui:Congestionamento}} desenha um mapa de calor de cada sapata vista de cima: onde as barras deixam pouco espaço para o betão descer, face à regra do espaçamento livre e, se os indicar, ao maior agregado e à cabeça do vibrador. Veja [Mapa de congestionamento de armaduras](topic:rebar-congestion).

**Estrutura e fornecimento**

- **Estrutura em madeira e aço leve.** O separador {{ui:Estrutura leve}} estrutura painéis de parede, de piso e de cobertura com todas as peças, uma lista de corte, o stock a comprar e um desenho de fabrico à escala. {{ui:Colocar como barras}} põe as peças no modelo, e {{ui:Folhas PDF}} guarda uma folha por painel. As dimensões, os espaçamentos e as vergas são seus: o DetailCraft não verifica se suportam a carga. Veja [Painéis de estrutura em madeira e aço leve](topic:framing-panels).
- **Stock de fornecedores e prazos de entrega.** O separador {{ui:Fornecimento}} lê a lista de stock de um fornecedor (CSV) e mostra, para cada secção que a lista de corte compra, se há stock suficiente e quanto tempo é a espera. As faltas e as secções atrasadas estão em {{ui:Problemas}}. Nada é encomendado. Veja [Stock de fornecedores e prazos de entrega](topic:supplier-stock).

**Análise e dimensionamento**

- **O que cede primeiro?** No separador {{ui:Análise}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até onde as cargas podem crescer antes de a primeira barra atingir o seu limite, e a chapa de topo ou a chapa de corte mais fraca, quando a resistência ao corte dos seus parafusos é conhecida. Precisa primeiro das combinações e de uma norma de dimensionamento. Esmagamento, rotura em bloco por corte, soldaduras e efeito de alavanca não são verificados. O seu assistente ligado pode pedir o mesmo.
- **Live.** Marque {{ui:Live: resolver de novo após cada edição}} e o pórtico é resolvido de novo após cada edição.
- **Betão, mais.** Um pilar esbelto num pórtico contraventado é dimensionado para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser tirado da análise pelo método de Rayleigh. Uma laje feita de placas recebe o aço que cada camada precisa a partir dos seus momentos, e também o esforço transverso unidirecional. Veja [Verificar elementos de betão e criar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados de fundações, de betão e de O que cede primeiro são ajudas. As cargas de vento ainda não estão implementadas.

**Em todas as aplicações**

- **Línguas.** A ajuda está em 54 línguas. As que estão além do inglês são rascunhos automáticos até que um falante nativo as reveja; dez são novas (lituano, letão, bósnio, marata, télugo, albanês, africâner, filipino, suaíli, uzbeque).
- **Barras de ferramentas.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe quebra de linha, 2 linhas ou 1 linha. Uma barra que já cabe fica como está; as restantes deslocam-se lateralmente.
- **Grelha de propriedades.** Os campos da sapata usam a grelha partilhada: categorias recolhíveis e uma densidade compacta. A aritmética escrita, como 2*450, continua a funcionar.
- **Dispositivos de entrada.** Trackpad, caneta, rato 3D, comando e MIDI podem controlar as aplicações. Veja [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problemas}} de antes.
- **Ligue a sua IA.** O seu próprio assistente, ligado através do CadCraft Studio, funciona com as oito aplicações e vê apenas o que permite. A ligação com um clique, o conector alojado e a sua própria chave de API no Studio ainda não estão disponíveis. Veja [Usar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Idiomas no Studio.** O Studio e as edições empacotadas podem mudar de idioma em tempo de execução; antes, eram apenas em inglês. Ainda não foi testado em todas as plataformas: diga-nos se o idioma não mudar.
- **Seleção por janela de cruzamento.** Os instaladores da 0.8.1 já trazem o comportamento de seleção por janela de cruzamento que a versão web da 0.8 tinha corrigido; um instalador mais antigo não o tinha.
- **Tablets na vertical.** O espaço livre da grelha vai para a área de desenho, e o layout da folha começa nos 760 px ou menos.

### Não nesta versão

- **Enviar NC para uma máquina** ainda não foi lançado.
- **Cargas de vento** para betão ainda não estão implementadas, e as verificações de betão e de fundações são para um engenheiro rever.
- **Assinatura de código.** Os instaladores para Windows e o .dmg para macOS não estão assinados, por isso o Windows pode avisar e o macOS pede clique com o botão direito e depois Abrir.

As alterações anteriores estão em [Novidades na versão 0.7](topic:whats-new-0-7).
