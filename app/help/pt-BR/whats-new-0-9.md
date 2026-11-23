---
title: Novidades na versão 0.9 (anteriores)
summary: Tamanhos de aço do Blue Book do Reino Unido e cantoneiras desiguais, desenhos de fabricação de cada peça em um único conjunto de PDF, Meus perfis para seções personalizadas, P-Delta e frequências naturais, cargas de vento ASCE 7, local sísmico e combinações, e cursores ao vivo com Seguir.
keywords: novidades 0.9, versão anterior, novidades, notas de lançamento, changelog, 0.9, aço do Reino Unido, blue book, ub, uc, pfc, shs, rhs, chs, cantoneira desigual, desenho de fabricação, desenhos de fabricação, conjunto de folhas, marca de peça, pdf, meus perfis, perfil personalizado, p-delta, segunda ordem, frequência natural, elementos finitos, massa modal, carga de vento, asce 7, sísmico, classe de local, usgs, combinações de carga, lrfd, asd, live, cursores, seguir, pessoas, dicas, mudanças, 0.8, 0.8.1, versão, novos recursos, montagem, guindaste, tabela de cargas, filme, piloto automático, ligações, armadura, congestionamento, fundação, sapata, radier, recalque, painéis de estrutura, madeira, estrutura leve, lista de corte, construtibilidade, acesso à solda, fornecedor, estoque, prazo de entrega, o que quebra primeiro, concreto, laje, idiomas, assistente
from: ab0c7f05
---

Estas são as mudanças do DetailCraft 0.9, em comparação com a 0.8.1. A 0.9 traz os tamanhos de aço do Reino Unido, um desenho de fabricação para cada peça de uma só vez, uma guia {{ui:Análise}} maior para pórticos e a visualização dos cursores uns dos outros quando vocês trabalham juntos.

## Novidades

### Aço do Reino Unido e desenhos de fabricação

- **Tamanhos de aço do Reino Unido.** As listas de perfis agora trazem 976 tamanhos do Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS e RHS, com os perfis ocos formados a frio separados (seus nomes começam com CF). Os nomes são escritos começando pela família, como UB305x165x40 ou SHS100x100x5.0, e digitar do jeito que os desenhos os escrevem também funciona: 305x165x40 UB, L100x100x10, SHS100x5. Veja [Catálogo de perfis](topic:profile-catalog).
- **Cantoneiras desiguais.** As cantoneiras UEA mantêm as duas abas na importação e exportação de IFC e nos arquivos NC, e um espelhamento inverte a peça de ponta a ponta.
- **Todos os desenhos de fabricação de uma vez.** Escolha {{ui:Desenho de fabricação}} no grupo {{ui:Saída}} sem nada selecionado. A janela lista todas as marcas de peça, pré-visualiza qualquer uma delas, e {{ui:Baixar tudo}} salva um PDF com uma página por marca, cada uma intitulada "Folha 3 de 42". {{ui:Baixar PDF}} salva a folha que você está vendo. Canais, cantoneiras e perfis ocos agora também ganham folhas. Veja [Criar desenhos de fabricação](topic:shop-drawings).
- **Meus perfis.** Um perfil personalizado agora pode ser mantido para todo modelo novo. No formulário de perfil personalizado, deixe {{ui:Manter em Meus perfis}} marcado; a lista {{ui:Meus perfis}} abaixo dele tem {{ui:Manter}}, {{ui:Usar aqui}} e {{ui:Remover}}. A lista é salva neste navegador (até 200), não na sua conta. Veja [Chapas e perfis](topic:plates-and-profiles).

### Análise

- **Segunda ordem (P-Delta).** Marque {{ui:Segunda ordem (P-Delta)}} ao lado de Executar na guia {{ui:Análise}} e as forças axiais atuam sobre o pórtico deformado. Chapas e lajes rígidas continuam de primeira ordem, com um aviso. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Frequências naturais.** O bloco {{ui:Elementos finitos: frequências naturais}} abaixo dos resultados encontra os modos mais baixos do mesmo modelo, com período e massa modal efetiva, e mostra um modo no modelo. Veja [Esforços, reações e deslocamentos](topic:frame-analysis).
- **Cargas de vento e local sísmico.** Três blocos novos na guia {{ui:Análise}}: {{ui:Cargas de vento (procedimento direcional ASCE 7)}}, {{ui:Local e sistema sísmico (ASCE 7)}} e {{ui:Combinações de carga ASCE 7}}. Veja [Vento, local sísmico e combinações ASCE 7](topic:wind-seismic-combinations).

### Trabalhando juntos

- **Cursores e nomes.** Em uma sessão Live, o ponteiro de cada pessoa é desenhado no modelo com o nome e a cor dela, e o que a pessoa selecionou recebe uma caixa.
- **Seguir uma pessoa.** Abra {{ui:Pessoas}} na sessão e escolha {{ui:Seguir}} em um nome; sua vista acompanha a dela. O anfitrião pode escolher {{ui:Pedir a todos que me sigam}}. Veja [Seguir uma pessoa em uma sessão Live](topic:follow-in-live).

### Em todos os aplicativos

- As dicas de ferramenta são do Bootstrap, o cartão de dica inicial tem um botão de fechar, as faixas de guias rolam para os lados quando não cabem, e a guia do navegador mostra o nome do documento aberto seguido de DetailCraft e CadCraft.

## Corrigido

- Um perfil personalizado era perdido ao iniciar um modelo novo.
- Canais, cantoneiras e perfis ocos faltavam no conjunto de desenhos de fabricação.

## Limites declarados

- Os blocos de vento, sísmico e de elementos finitos são auxílios de verificação. Seu engenheiro revisa os resultados; eles não são uma verificação de norma. A consulta ao USGS foi testada com um substituto, não com o serviço real.
- Elementos finitos e P-Delta foram verificados contra respostas feitas à mão e em forma fechada, não contra um edifício real. A análise de flambagem não está implementada.
- Nenhum fabricante do Reino Unido testou ainda os tamanhos do Reino Unido, e os arquivos NC para cantoneiras desiguais não foram executados em uma máquina.
- O conjunto de desenhos de fabricação é somente em PDF.
- Os idiomas além do inglês são rascunhos de máquina.
- Os instaladores do Windows não são assinados digitalmente (Mais informações, depois Executar mesmo assim); a imagem de disco do macOS não é notarizada (clique com o botão direito, depois Abrir).

As mudanças anteriores estão nas notas da 0.8 e da 0.8.1 mais abaixo nesta página.

## Anteriores: 0.8 e 0.8.1

Estas são as mudanças do DetailCraft 0.8 (1 de novembro de 2026) e da 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificava barras de aço; a 0.8 planeja os içamentos, propõe as ligações, verifica as fundações e a armadura, e cria painéis de madeira e de estrutura leve para paredes, pisos e coberturas.

### Novidades

**Montagem**

- **Plano de montagem e filme.** Na guia {{ui:Montagem}}, descreva um guindaste (onde ele está, seu gancho mais alto, a aparelhagem que não consta na tabela) e digite as linhas da sua tabela de cargas. O DetailCraft iça o modelo uma montagem por vez, na ordem das fases e nível a nível, e verifica cada içamento contra a tabela no seu raio e contra a margem que você definiu. {{ui:Salvar filme}} grava um arquivo HTML que roda offline em qualquer navegador, inclusive no celular. Os içamentos acima da tabela, além dela ou alto demais estão em {{ui:Problemas}}. É um plano a partir dos seus números, não um plano de içamento. Veja [Plano de montagem e filme](topic:erection-movie).

**Ligações**

- **Piloto de ligações.** A guia {{ui:Piloto automático}} examina cada nó sem ligação e propõe uma a partir dos perfis: chapas de base, chapas de cisalhamento, chapas de extremidade para as vigas que você marcar como vigas de momento, emendas e chapas de nó (gusset). Informe uma carga uniforme ou um cisalhamento em uma extremidade e a quantidade de parafusos segue a resistência de cálculo do parafuso. {{ui:Adicionar todas}} adiciona as propostas como um único passo de desfazer. São valores iniciais para revisar, não um projeto de ligação.
- **Verificações de construtibilidade.** {{ui:Problemas}} para um parafuso que a chave não alcança, parafusos próximos demais para o soquete, soldas de filete fora dos seus limites de tamanho e perfis ocos que retêm água. O acesso à solda é novo: uma solda de filete em todo o contorno que a tocha do soldador não alcança é listada com a peça que está no caminho e a parcela da solda afetada. Veja [Verificações de construtibilidade](topic:constructability).

**Fundações e armadura**

- **Verificações de fundação.** A guia {{ui:Fundação}} verifica sapatas, sapatas combinadas e radiers sobre o solo que você descreve: pressão de contato, deslizamento e tombamento a partir das cargas de serviço; flexão, cisalhamento, punção, ancoragem e armadura mínima a partir das cargas majoradas (ACI 318-19). Um pilar perto de uma borda ou de um canto é verificado com a seção cortada pela borda da sapata. O recalque vem do módulo do solo, um radier flexível é resolvido sobre molas a partir de um coeficiente de reação do solo, e grupos de estacas e muros de arrimo têm painéis próprios. As cargas dos pilares podem ser digitadas ou tiradas da {{ui:Análise}}. Veja [Verificações de fundação](topic:foundation-checks).
- **Mapa de congestionamento de armadura.** A guia {{ui:Congestionamento}} desenha um mapa de calor de cada sapata vista de cima: onde as barras deixam pouco espaço para o concreto descer, em relação à regra do espaçamento livre e, se você informar, ao maior agregado e à cabeça do vibrador. Veja [Mapa de congestionamento de armadura](topic:rebar-congestion).

**Painéis de estrutura e fornecimento**

- **Madeira e estrutura leve.** A guia {{ui:Painéis de estrutura}} monta painéis de parede, piso e cobertura com cada peça, uma lista de corte, o material a comprar e um desenho de fabricação em escala. {{ui:Colocar como barras}} coloca as peças no modelo, e {{ui:Folhas em PDF}} salva uma folha para cada painel. As dimensões, os espaçamentos e as vergas são de sua responsabilidade: o DetailCraft não verifica se eles suportam a carga. Veja [Painéis de madeira e estrutura leve](topic:framing-panels).
- **Estoque do fornecedor e prazos.** A guia {{ui:Fornecimento}} lê a lista de estoque de um fornecedor (CSV) e mostra, para cada seção que a lista de corte compra, se há o suficiente em estoque e qual é o tempo de espera. Faltas e seções atrasadas estão em {{ui:Problemas}}. Nada é pedido. Veja [Estoque do fornecedor e prazos](topic:supplier-stock).

**Análise e dimensionamento**

- **O que quebra primeiro?** Na guia {{ui:Análise}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até quanto as cargas podem crescer antes que a primeira barra atinja seu limite, e a chapa de extremidade ou a cantoneira de cisalhamento mais fraca onde a resistência ao cisalhamento dos parafusos é conhecida. Ele precisa antes das combinações e de uma norma de projeto. Pressão de contato, cisalhamento em bloco, soldas e efeito alavanca não são verificados. Seu assistente conectado pode pedir o mesmo.
- **Live.** Marque {{ui:Live: resolver de novo após cada edição}} e o pórtico é resolvido de novo a cada edição.
- **Concreto, e mais.** Um pilar esbelto em um pórtico contraventado é dimensionado para seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser obtido da análise pelo método de Rayleigh. Uma laje feita de chapas recebe a armadura que cada camada precisa a partir dos seus momentos, e o cisalhamento em uma direção. Veja [Verificar elementos de concreto e criar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados de fundação, de concreto e de O que quebra primeiro são auxílios. Cargas de vento não estão implementadas.

**Em todos os aplicativos**

- **Idiomas.** A ajuda está em 54 idiomas. Os que vão além do inglês são rascunhos de máquina até que um falante nativo os revise; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíle, uzbeque).
- **Linhas da barra de ferramentas.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Linhas da barra de ferramentas}} escolhe quebra de linha, 2 linhas ou 1 linha. Uma barra que já cabe continua como está; as demais rolam para os lados.
- **Grade de propriedades.** Os campos da sapata usam a grade compartilhada: categorias recolhíveis e densidade compacta. A digitação de contas como 2*450 continua funcionando.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle e MIDI podem controlar os aplicativos. Veja [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problemas}} de antes.
- **Conecte sua IA.** Seu próprio assistente, conectado pelo CadCraft Studio, funciona com todos os oito aplicativos e vê apenas o que você permite. A conexão com um clique, o conector hospedado e sua própria chave de API no Studio ainda estão por vir. Veja [Usar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

### Corrigido na 0.8.1

- **Idiomas no Studio.** O Studio e as edições empacotadas podem trocar de idioma em tempo de execução; antes, eram só em inglês. Ainda não foi testado em todas as plataformas: avise se o idioma não mudar.
- **Seleção por cruzamento de janela.** Os instaladores da 0.8.1 já trazem o comportamento de seleção por janela correto na versão web da 0.8; um instalador mais antigo não trazia.
- **Tablets na vertical.** A altura livre da grade vai para a área de desenho, e o layout da folha começa em 760 px ou menos.

### Ainda não nesta versão

- **Enviar NC para uma máquina** ainda não foi lançado.
- **Cargas de vento** para concreto não estão implementadas, e as verificações de concreto e de fundação são para um engenheiro revisar.
- **Assinatura de código.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o Windows pode exibir um aviso e o macOS pede um clique com o botão direito e depois Abrir.

As mudanças anteriores estão em [Novidades da versão 0.7](topic:whats-new-0-7).
