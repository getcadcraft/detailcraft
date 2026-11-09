---
title: Novidades nas versões 0.8 e 0.8.1
summary: Um filme de montagem a partir da tabela de carga de um guindaste, um piloto automático de ligações, um mapa de congestionamento de armadura, verificações de fundação, painéis de madeira e de perfis leves, verificações de construtibilidade e de acesso à solda, estoque de fornecedores, o que quebra primeiro, um recálculo ao vivo, mais verificações de concreto e as correções da 0.8.1.
keywords: novidades, notas de versão, changelog, mudanças, 0.8, 0.8.1, versão, novos recursos, montagem, guindaste, tabela de carga, filme, piloto automático, ligações, armadura, congestionamento, fundação, sapata, malha, recalque, painéis, madeira, perfis leves, lista de corte, construtibilidade, acesso à solda, fornecedor, estoque, prazo de entrega, o que quebra primeiro, ao vivo, concreto, sísmico, laje, idiomas, assistente
from: 6e33e052
---

Estas são as mudanças do DetailCraft 0.8 (1 de novembro de 2026) e 0.8.1 (2 de novembro de 2026), em comparação com a 0.7. A 0.7 verificava barras de aço; a 0.8 planeja os içamentos, propõe as ligações, verifica as fundações e a armadura, e monta painéis de madeira e de perfis leves para paredes, pisos e coberturas.

## Novo

### Montagem

- **Plano de montagem e filme.** Na guia {{ui:Erection}}, descreva um guindaste (onde ele fica, seu gancho mais alto, o aparelho de içamento que não está na tabela) e digite as linhas da tabela de carga dele. O DetailCraft iça o modelo uma montagem por vez, na ordem das fases e camada por camada, e verifica cada içamento contra a tabela, no raio dele e contra a margem que você definiu. {{ui:Save movie}} grava um arquivo HTML que toca offline em qualquer navegador, inclusive em um celular. Os içamentos acima da capacidade da tabela, fora do alcance dela ou altos demais ficam em {{ui:Problems}}. É um plano com base nos seus números, não um plano de içamento. Veja [Plano de montagem e filme](topic:erection-movie).

### Ligações

- **Piloto automático de ligações.** A guia {{ui:Autopilot}} examina cada junta que não tem ligação e propõe uma a partir das formas: chapas de base, chapas de cisalhamento, chapas de extremidade para as vigas que você marcar como vigas de momento, emendas e chapas de ligação. Informe uma carga uniforme ou um cisalhamento em uma extremidade, e a quantidade de parafusos segue a resistência de projeto do parafuso. {{ui:Add them all}} adiciona as propostas como um único passo de desfazer. Elas são valores iniciais para revisar, não um projeto de ligação.
- **Verificações de construtibilidade.** {{ui:Problems}} para um parafuso que uma chave não alcança, parafusos próximos demais para o soquete, soldas de filete fora dos limites de tamanho e seções ocas que retêm água. O acesso à solda é novidade: uma solda de filete em todo o contorno que a tocha do soldador não alcança é listada com a peça que está no caminho e a parcela da solda afetada. Veja [Verificações de construtibilidade](topic:constructability).

### Fundações e armadura

- **Verificações de fundação.** A guia {{ui:Foundation}} verifica sapatas, sapatas combinadas e malhas sobre o solo que você descreve: capacidade de carga, deslizamento e tombamento sob cargas de serviço; flexão, cisalhamento, punção, ancoragem e armadura mínima sob cargas majoradas (ACI 318-19). Um pilar perto de uma borda ou de um canto é verificado com a seção cortada pela borda da sapata. O recalque vem do módulo do solo, uma malha flexível é resolvida sobre molas a partir de um módulo de reação do subleito, e grupos de estacas e muros de arrimo têm painéis próprios. As cargas dos pilares podem ser digitadas ou tiradas da {{ui:Analysis}}. Veja [Verificações de fundação](topic:foundation-checks).
- **Mapa de congestionamento de armadura.** A guia {{ui:Congestion}} desenha um mapa de calor de cada sapata vista de cima: onde as barras deixam pouco espaço para o concreto descer, em comparação com a regra do espaçamento livre e, se você informar, com o maior agregado e a cabeça do vibrador. Veja [Mapa de congestionamento de armadura](topic:rebar-congestion).

### Painéis e fornecimento

- **Painéis de madeira e de perfis leves.** A guia {{ui:Framing}} monta painéis de parede, piso e cobertura com cada peça, uma lista de corte, o estoque a comprar e um desenho de fabricação em escala. {{ui:Place as members}} coloca as peças no modelo, e {{ui:PDF sheets}} salva uma folha para cada painel. Os tamanhos, espaçamentos e vergas são definidos por você: o DetailCraft não verifica se eles suportam a carga. Veja [Painéis de madeira e de perfis leves](topic:framing-panels).
- **Estoque de fornecedores e prazos de entrega.** A guia {{ui:Supply}} lê a lista de estoque de um fornecedor (CSV) e mostra, para cada seção que a lista de corte compra, se há estoque suficiente e quanto tempo é a espera. Faltas e seções atrasadas ficam em {{ui:Problems}}. Nada é pedido. Veja [Estoque de fornecedores e prazos de entrega](topic:supplier-stock).

### Análise e projeto

- **O que quebra primeiro?** Na guia {{ui:Analysis}}, o botão encontra a combinação de resistência que governa, a barra mais fraca, até onde as cargas podem crescer antes de a primeira barra atingir seu limite, e a chapa de extremidade ou de cisalhamento mais fraca, onde a resistência ao cisalhamento dos parafusos é conhecida. Ele precisa primeiro das combinações e de uma norma de projeto. Não são verificados: esmagamento, cisalhamento de bloco, soldas e efeito de alavanca. Seu assistente conectado pode fazer o mesmo pedido.
- **Ao vivo.** Marque {{ui:Live: solve again after each edit}}, e o pórtico é resolvido de novo após cada edição.
- **Concreto e mais.** Um pilar esbelto em um pórtico sem deslocamento lateral é dimensionado para o seu momento amplificado (ACI 318-19 6.6.4.5). O período sísmico pode ser obtido da análise pelo método de Rayleigh. Uma laje feita de chapas recebe o aço que cada camada precisa a partir dos seus momentos, além do cisalhamento em uma direção. Veja [Verificar elementos de concreto e criar cargas sísmicas](topic:concrete-and-seismic).
- **Para um engenheiro verificar.** Os resultados de fundação, de concreto e de O que quebra primeiro são auxílios. Cargas de vento ainda não estão implementadas.

### Em todos os aplicativos

- **Idiomas.** A ajuda está em 54 idiomas. Os que não são o inglês são rascunhos de máquina até que um falante nativo os revise; dez são novos (lituano, letão, bósnio, marata, telugu, albanês, africâner, filipino, suaíli e uzbeque).
- **Linhas da barra de ferramentas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} escolhe quebra de linha, 2 linhas ou 1 linha. Uma barra que já cabe continua como está; as demais rolam para o lado.
- **Grade de propriedades.** Os campos da sapata usam a grade compartilhada: categorias recolhíveis e densidade compacta. Aritmética digitada, como 2*450, continua funcionando.
- **Dispositivos de entrada.** Trackpad, caneta, mouse 3D, controle e MIDI podem controlar os aplicativos. Veja [Navegar em 3D](topic:navigate-3d).
- **Painel de problemas.** Os avisos das novas verificações acima aparecem no mesmo painel {{ui:Problems}} de antes.
- **Conecte sua IA.** Seu próprio assistente, conectado pelo CadCraft Studio, funciona com os oito aplicativos e vê apenas o que você permite. A conexão com um clique, o conector hospedado e a sua chave de API no Studio ainda estão por vir. Veja [Usar o DetailCraft com um assistente de IA](topic:use-with-ai-assistants).

## Corrigido na 0.8.1

- **Idiomas no Studio.** O Studio e as edições empacotadas podem trocar de idioma em tempo de execução; antes, eram somente em inglês. Ainda não foi testado em todas as plataformas: avise-nos se o idioma não mudar.
- **Seleção por janela de cruzamento.** Os instaladores da 0.8.1 trazem o comportamento de seleção por janela que já estava correto na versão web da 0.8; um instalador antigo não tinha isso.
- **Tablets na vertical.** O espaço de altura de grade que sobra vai para a área de desenho, e o layout de folha começa em 760 px ou menos.

## Não está nesta versão ainda

- **Enviar NC para uma máquina** não foi lançado.
- **Cargas de vento** para concreto ainda não estão implementadas, e as verificações de concreto e de fundação são para um engenheiro revisar.
- **Assinatura de código.** Os instaladores do Windows e o .dmg do macOS não são assinados, então o Windows pode exibir um aviso, e o macOS pede um clique com o botão direito e depois em Abrir.

As mudanças anteriores estão em [Novidades na 0.7](topic:whats-new-0-7).
