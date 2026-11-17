---
title: Novidades na versão 0.9
summary: Tamanhos de aço do Reino Unido e cantoneiras desiguais, desenhos de fabricação de todas as peças em um único conjunto de PDF, Meus perfis para seções personalizadas, P-Delta e frequências naturais, cargas de vento ASCE 7, local sísmico e combinações, e cursores ao vivo com Seguir.
keywords: novidades, o que há de novo, notas de lançamento, changelog, 0.9, aço do Reino Unido, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira desigual, desenho de fabricação, desenhos de fabricação, conjunto de folhas, marca da peça, pdf, meus perfis, perfil personalizado, p-delta, segunda ordem, frequência natural, elementos finitos, massa modal, carga de vento, asce 7, sísmica, classe de local, usgs, combinações de carga, lrfd, asd, live, cursores, seguir, pessoas, dicas de ferramenta, 0.8, 0.8.1, versão, novos recursos, montagem, guindaste, tabela de carga, filme, piloto automático, ligações, armadura, congestionamento, fundação, sapata, radier, recalque, painéis de estrutura, madeira, light-gauge, lista de corte, construtibilidade, acesso à solda, fornecedor, estoque, prazo de entrega, o que quebra primeiro, concreto, laje, idiomas, assistente
from: 4c95a2de
---

Isto é o que mudou no DetailCraft 0.9, em comparação com a 0.8.1. A 0.9 traz os tamanhos de aço do Reino Unido, um desenho de fabricação para cada peça de uma só vez, uma guia {{ui:Análise}} maior para pórticos e uma visão dos cursores uns dos outros quando se trabalha junto.

## Novo

### Aço do Reino Unido e desenhos de fabricação

- **Tamanhos de aço do Reino Unido.** As listas de perfis agora trazem 976 tamanhos do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, com as seções tubulares formadas a frio separadas (os nomes começam com CF). Os nomes são escritos pela família primeiro, como UB305x165x40 ou SHS100x100x5.0, e digitar do jeito que os desenhos o escrevem também funciona: 305x165x40 UB, L100x100x10, SHS100x5. Veja [Catálogo de perfis](topic:profile-catalog).
- **Cantoneiras desiguais.** As cantoneiras UEA mantêm as duas abas na importação e na exportação IFC e nos arquivos NC, e um espelhamento inverte a peça de ponta a ponta.
- **Todos os desenhos de fabricação de uma vez.** Escolha {{ui:Desenho de fabricação}} no grupo {{ui:Saída}} sem nada selecionado. A janela lista cada marca de peça, visualiza qualquer uma delas, e {{ui:Baixar tudo}} salva um PDF com uma página por marca, cada uma intitulada "Folha 3 de 42". {{ui:Baixar PDF}} salva a folha que você está vendo. Canais, cantoneiras e seções tubulares agora também recebem folhas. Veja [Fazer desenhos de fabricação](topic:shop-drawings).
- **Meus perfis.** Um perfil personalizado agora pode ser mantido para todo novo modelo. No formulário de Perfil personalizado, deixe {{ui:Manter em Meus perfis}} marcado; a lista {{ui:Meus perfis}} abaixo dele tem {{ui:Manter}}, {{ui:Usar aqui}} e {{ui:Remover}}. A lista fica guardada neste navegador (até 200), não na sua conta. Veja [Chapas e perfis](topic:plates-and-profiles).

### Análise

- **Segunda ordem (P-Delta).** Marque {{ui:Segunda ordem (P-Delta)}} ao lado de {{ui:Executar}} na guia {{ui:Análise}}, e as forças normais atuam no pórtico deformado. Chapas e pisos rígidos ficam em primeira ordem, com um aviso. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Frequências naturais.** O bloco {{ui:Elementos finitos: frequências naturais}}, abaixo dos resultados, encontra os modos mais baixos do mesmo modelo, com período e massa modal efetiva, e mostra um modo no modelo. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Cargas de vento e local sísmico.** Três novos blocos na guia {{ui:Análise}}: {{ui:Cargas de vento (procedimento direcional ASCE 7)}}, {{ui:Local e sistema sísmico (ASCE 7)}} e {{ui:Combinações de carga ASCE 7}}. Veja [Vento, local sísmico e combinações ASCE 7](topic:wind-seismic-combinations).

### Trabalho em conjunto

- **Cursores e nomes.** Em uma sessão Live, o ponteiro de cada pessoa é desenhado no modelo com o nome e a cor dela, e o que ela selecionou ganha uma caixa.
- **Seguir uma pessoa.** Abra {{ui:Pessoas}} na sessão e escolha {{ui:Seguir}} em um nome; a sua visão acompanha a dela. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. Veja [Seguir uma pessoa em uma sessão Live](topic:follow-in-live).

### Em todos os aplicativos

- As dicas de ferramenta são dicas do Bootstrap, o cartão de dica inicial tem um botão de fechar, as faixas de guias rolam para os lados quando não cabem, e o nome da aba do navegador mostra o documento aberto seguido de DetailCraft e CadCraft.

## Corrigido

- Um perfil personalizado se perdia quando você começava um novo modelo.
- Canais, cantoneiras e seções tubulares estavam faltando no conjunto de desenhos de fabricação.

## Limites reconhecidos

- Os blocos de vento, sísmico e de elementos finitos são auxílios de verificação. Seu engenheiro revisa os resultados; não são uma verificação de norma. A consulta ao USGS foi testada com um substituto, não com o serviço real.
- Elementos finitos e P-Delta foram verificados contra respostas feitas à mão e em forma fechada, não contra um edifício real. Análise de flambagem ainda não está implementada.
- Nenhum fabricante do Reino Unido testou ainda os tamanhos do Reino Unido, e os arquivos NC para cantoneiras desiguais não foram executados em uma máquina.
- O conjunto de desenhos de fabricação é somente PDF.
- Idiomas além do inglês são rascunhos de máquina.
- Os instaladores do Windows não têm assinatura de código ({{ui:Mais informações}}, depois {{ui:Executar assim mesmo}}); a imagem de disco do macOS não é notarizada (clique com o botão direito, depois {{ui:Abrir}}).

As alterações anteriores estão nas notas da 0.8 e da 0.8.1, mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Isto é o que mudou no DetailCraft 0.8 (1 de novembro de 2026) e na 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificou barras de aço; a 0.8 planeja os içamentos, propõe as ligações, verifica as fundações e a armadura, e monta painéis de madeira e de light-gauge para paredes, pisos e coberturas.

### Novo

**Montagem**

- **Plano de montagem e filme.** Na guia {{ui:Montagem}}, descreva um guindaste (onde ele está, seu gancho mais alto, a aparelhagem de içamento que não está na tabela de carga) e digite as linhas da tabela de carga dele. O DetailCraft iça o modelo uma montagem por vez, em ordem de fase e nível por nível, e verifica cada içamento contra a tabela no seu raio e contra a margem que você definir. {{ui:Salvar filme}} grava um arquivo HTML que roda offline em qualquer navegador, inclusive no celular. Içamentos acima da tabela, além dela ou alto demais ficam em {{ui:Problemas}}. É um plano a partir dos seus números, não um plano de içamento. Veja [Plano de montagem e filme](topic:erection-movie).

**Ligações**

- **Piloto automático de ligações.** A guia {{ui:Piloto automático}} examina cada junta sem ligação e propõe uma a partir dos perfis: chapas de base, chapas de cisalhamento, chapas de extremidade para as vigas que você marcar como vigas de momento, emendas e chapas de ligação. Dê uma carga uniforme ou um cisalhamento em uma extremidade, e a quantidade de parafusos segue a resistência de projeto do parafuso. {{ui:Adicionar todas}} acrescenta as propostas como uma única etapa de desfazer. São valores iniciais para revisar, não um projeto de ligação.
- **Verificações de construtibilidade.** {{ui:Problemas}} para um parafuso que a chave não alcança, parafusos próximos demais para o soquete, soldas de filete fora dos seus limites de tamanho e seções tubulares que retêm água. O acesso à solda é novo: uma solda de filete em volta toda que o maçarico do soldador não alcança é listada com a peça que está no caminho e a parcela da solda afetada. Veja [Verificações de construtibilidade](topic:constructability).

**Fundações e armadura**

- **Verificações de fundação.** A guia {{ui:Fundação}} verifica sapatas, sapatas combinadas e radiers sobre o solo que você descreve: capacidade de carga, deslizamento e tombamento sob cargas de serviço; flexão, cisalhamento, punção, ancoragem e armadura mínima sob cargas majoradas (ACI 318-19). Um pilar perto de uma borda ou de um canto é verificado com a seção cortada pela borda da sapata. O recalque vem do módulo do solo, um radier flexível é resolvido em molas a partir de um módulo de reação do subleito, e grupos de estacas e muros de arrimo têm painéis próprios. As cargas dos pilares podem ser digitadas ou tiradas da {{ui:Análise}}. Veja [Verificações de fundação](topic:foundation-checks).
- **Mapa de congestionamento da armadura.** A guia {{ui:Congestionamento}} desenha um mapa de calor de cada sapata vista de cima: onde as barras deixam pouco espaço para o concreto descer, em relação à regra de espaçamento livre e, se você informar, ao maior agregado e à cabeça do vibrador. Veja [Mapa de congestionamento da armadura](topic:rebar-congestion).

**Painéis de estrutura e fornecimento**

- **Painéis de madeira e de light-gauge.** A guia {{ui:Painéis de estrutura}} monta painéis de parede, piso e cobertura com cada peça, uma lista de corte, o estoque a comprar e um desenho de fabricação em escala. {{ui:Colocar como barras}} põe as peças no modelo, e {{ui:Folhas em PDF}} salva uma folha para cada painel. Os tamanhos, espaçamentos e vergas são definidos por você: o DetailCraft não verifica se eles suportam a carga. Veja [Painéis de estrutura de madeira e de light-gauge](topic:framing-panels).
- **Estoque de fornecedores e prazos.** A guia {{ui:Fornecimento}} lê a lista de estoque de um fornecedor (CSV) e mostra, para cada seção que a lista de corte compra, se há estoque suficiente e qual é o prazo de espera. Faltas e seções atrasadas ficam em {{ui:Problemas}}. Nada é encomendado. Veja [Estoque de fornecedores e prazos](topic:supplier-stock).

**Análise e dimensionamento**

- **O que quebra primeiro?** Na guia {{ui:Análise}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até onde as cargas podem crescer antes que a primeira barra atinja o seu limite, e a chapa de extremidade ou a chapa de cisalhamento mais fraca, quando a resistência ao cisalhamento dos parafusos é conhecida. Ele precisa primeiro das combinações e de uma norma de projeto. Esmagamento, cisalhamento em bloco, soldas e efeito alavanca não são verificados. Seu assistente conectado pode pedir o mesmo.
- **Ao vivo.** Marque {{ui:Live: resolver de novo após cada edição}} e o pórtico é resolvido de novo após cada edição.
- **Concreto, e mais.** Um pilar esbelto em pórtico sem deslocamento lateral é dimensionado para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser obtido da análise pelo método de Rayleigh. Uma laje feita de chapas recebe o aço que cada camada precisa a partir dos seus momentos, e também o cisalhamento em uma direção. Veja [Verificar elementos de concreto e gerar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados de fundação, de concreto e de O que quebra primeiro são auxílios. Cargas de vento ainda não estão implementadas.

**Em todos os aplicativos**

- **Idiomas.** A ajuda está em 54 idiomas. Os que não são o inglês são rascunhos de máquina até que um falante nativo os leia; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíle, uzbeque).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe quebra automática, 2 linhas ou 1 linha. Uma barra que já cabe continua como está; as demais rolam para os lados.
- **Grade de propriedades.** Os campos da sapata usam a grade comum: categorias recolhíveis e densidade compacta. Aritmética digitada, como 2*450, continua funcionando.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle e MIDI podem controlar os aplicativos. Veja [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problemas}} de antes.
- **Conecte sua IA.** Seu próprio assistente, conectado pelo CadCraft Studio, funciona com os oito aplicativos e vê apenas o que você permite. A conexão com um clique, o conector hospedado e a sua própria chave de API no Studio ainda estão por vir. Veja [Usar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Idiomas no Studio.** O Studio e as edições empacotadas podem trocar de idioma em tempo de execução; antes, eram somente em inglês. Ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.
- **Seleção por janela de cruzamento.** Os instaladores da 0.8.1 já trazem o comportamento correto de seleção por janela da versão web da 0.8; um instalador mais antigo não trazia.
- **Tablets na vertical.** O espaço livre da grade vai para a área de desenho, e o layout da folha começa em 760 px ou menos.

### Ainda não nesta versão

- **Enviar NC para uma máquina** ainda não foi lançado.
- **Cargas de vento** para concreto ainda não estão implementadas, e as verificações de concreto e de fundação são para um engenheiro revisar.
- **Assinatura de código.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o Windows pode exibir um aviso e o macOS pede um clique com o botão direito, depois {{ui:Abrir}}.

As alterações anteriores estão em [Novidades na versão 0.7](topic:whats-new-0-7).
