---
title: Novidades da 0.7
summary: Verificações de dimensionamento de perfis I de aço com combinações de carga da ASCE 7 ou da EN 1990 e verificações de barras pela AISC 360 ou pela EN 1993-1-1, exportação USD do modelo de aço, uma ferramenta de assistente para USD, uma faixa Aço com botões grandes e pequenos, painéis que se recolhem e caixas de diálogo que se movem.
keywords: novidades, notas de versão, registro de alterações, alterações, 0.7, versão, novos recursos, verificações de dimensionamento, dimensionamento de aço, taxa de utilização, combinações de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocode, Anexo Nacional, sobrecarga de telhado, limite de flecha, usd, usda, usdc, usdz, openusd, assistente, mcp, faixa Aço, ribbon, botão dividido, unidades, compacto, painéis, caixas de diálogo, português
from: 17d1e0bb
---

Isto é o que mudou no DetailCraft 0.7, em comparação com a 0.6. A análise de pórtico da 0.6 agora tem um segundo passo: verificar as barras de aço segundo uma norma de projeto.

## Novo

### Juntas em meia-esquadria (0.7.1)

- **Dois perfis I que se encontram em ângulo**, como um joelho de pórtico ou uma cumeeira: selecione os dois, escolha {{ui:Meia-esquadria}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}, e as duas pontas são cortadas no plano que divide o ângulo ao meio. Chapas de extremidade parafusadas entre si e enrijecedores de alma são caixas de seleção na nova caixa de diálogo Meia-esquadria, cujos campos numerados correspondem a um desenho da sua junta feito enquanto você digita. A meia-esquadria acompanha as barras quando elas se movem e vai até os desenhos, os arquivos NC (cortes oblíquos), o IFC e a lista de materiais. Veja [Juntas em meia-esquadria](topic:mitres).

### Verificações de dimensionamento

- **Combinações de carga pela norma.** Na guia {{ui:Análise}}, o novo bloco {{ui:Verificações de dimensionamento}} tem uma {{ui:Norma de projeto}}: ASCE 7 + AISC 360 (EUA, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocode). Dê a cada caso de carga o seu tipo (permanente, variável, a nova sobrecarga de telhado, neve, vento, sísmico), pressione {{ui:Criar combinações}}, e o DetailCraft escreve as combinações de resistência e de serviço da norma para os seus casos. As combinações que você digitou continuam. Veja [Crie as combinações](topic:design-checks#make-the-combinations).
- **Valores do Anexo Nacional.** No Eurocode, os fatores começam nos valores recomendados; {{ui:Valores do Anexo Nacional}} permite digitar os do seu país, e eles são salvos no modelo. Veja [Crie as combinações](topic:design-checks#make-the-combinations).
- **Verificar barras.** {{ui:Verificar barras}} verifica cada perfil I de aço quanto a tração, compressão com flambagem, flexão com flambagem lateral com torção, cisalhamento, flexão com força axial e flecha contra o {{ui:Limite de flecha}} que você definir. A tabela mostra a taxa de utilização de cada barra, a verificação que governa e a sua combinação, e as barras são coloridas no modelo (azul, verde, ocre, vermelho, cinza para não verificada). Veja [Verifique as barras](topic:design-checks#check-the-members).
- **No relatório.** {{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} acrescentam as edições das normas, os ajustes, a taxa de utilização por barra e cada item de norma usado. Veja [O relatório](topic:design-checks#the-report).
- **Uma ajuda até que um engenheiro a revise.** Usa apenas esforços de primeira ordem. Tubos, cantoneiras, perfis U, perfis soldados e peças esbeltas ou de classe 4 aparecem como "não verificado", com o motivo; torção, ligações e concreto não são verificados. Veja [O que não é verificado](topic:design-checks#what-is-not-checked).

### USD

- **Exporte o modelo de aço como USD.** {{ui:USD}} no grupo {{ui:Saída}} grava o modelo como {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}} para programas de renderização e montagem de cena: cada conjunto contém suas peças, cada peça é a sua seção estendida ao longo do comprimento com os rebaixos cortados, e cada uma leva sua posição de peça, perfil, classe de aço, comprimento e peso. Furos de parafuso, parafusos, soldas e sapatas não estão nas malhas USD. Veja [Exporte o modelo de aço como USD](topic:usd).

### Assistentes de IA

- **USD para assistentes.** Seu próprio assistente, conectado pelo CadCraft Studio, pode exportar o modelo como USD (`usd_export`) e, no Studio, gravá-lo em uma pasta que você autorizou. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Alterado

- **A faixa Aço** tem botões grandes e pequenos: um {{ui:Viga}} grande ao lado de {{ui:Pilar}}, {{ui:Contraventamento}} e {{ui:Chapa}} pequenos em {{ui:Modelagem}} › {{ui:Barras}}; um {{ui:Chapas de extremidade}} grande em {{ui:Detalhamento}} › {{ui:Ligações}}, com {{ui:Emenda}} e {{ui:Chapa de ligação}} dividindo um botão dividido; um {{ui:Colar}} grande em {{ui:Editar}} › {{ui:Área de transferência}}, com {{ui:Colar no mesmo local}} e {{ui:Duplicar}} atrás da seta do grupo. {{ui:Fabricação}} › {{ui:Intercâmbio}} tem {{ui:Exportar USD}} ao lado de IFC. Os outros estilos de menu continuam como eram. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analise o pórtico](topic:frame-analysis) agora aponta para as verificações de dimensionamento, e suas combinações podem ser criadas pela norma.

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista cada para comprimento, área, volume, ângulo e declividade, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade à parte). Desligue as unidades que você nunca usa e elas saem das listas; marque uma com estrela e o trabalho novo começa nela. Um arquivo sempre mantém a sua própria unidade. As caixas do próprio DetailCraft ainda não seguem as listas: os comprimentos ainda são digitados em milímetros. Veja [Unidades, valores digitados e as listas de unidades](common:unit-lists).
- **Um layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacto}} coloca mais coisas na tela (telas de toque e celulares mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para acoplar ou flutuar o painel, solte-a na barra de outro painel para dividir um quadro como guias, fixe-a para deslizar até a borda ou oculte-a e traga-a de volta pela borda. Veja [Organize os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la da frente do desenho; ela volta onde você a deixou. Dê um clique duplo na barra de título para centralizá-la de novo. Veja [Mova uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos completos para o seu próprio assistente (arrumar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reproduzido pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** agora têm todas as palavras dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos da ajuda estão em inglês.
- **O CadCraft Studio** diz por que uma busca de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão Novidades que você fechou até haver uma versão mais nova.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para a 0.8 porque a validação do certificado ainda não saiu. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen barrar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. No Mac, na primeira vez, clique com o botão direito em CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em uma loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- As listas de ângulo e declividade em {{ui:Unidades}} são salvas, mas nenhuma caixa as lê ainda.
- **As verificações de dimensionamento ainda não foram revisadas por um engenheiro.** Nossos testes as comparam com valores de tabelas impressas e fórmulas resolvidas à mão, ainda não com os exemplos resolvidos de um guia de projeto. Até uma revisão, são uma ajuda: confira à mão as barras que importam.
- As verificações de dimensionamento usam esforços de primeira ordem (sem efeitos de segunda ordem) e verificam apenas perfis I. Não implementado: tubos, cantoneiras, perfis U, perfis soldados, peças esbeltas (AISC) ou de classe 4 (Eurocode) em flexão, torção, flambagem por cisalhamento junto com flexão, ligações, fadiga, incêndio, detalhamento sísmico e concreto. Uma peça esbelta em compressão fica de fora das verificações de compressão, e a barra aparece como "passa, verificada em parte".
- A análise de pórtico ainda é de primeira ordem e linear, e ainda não foi testada por um engenheiro em um trabalho real.
- Furos de parafuso, parafusos, soldas e sapatas não estão na exportação USD.

Todo o resto está em [O que ainda não foi implementado](topic:not-built-yet).
