---
title: Novidades da versão 0.7 (anteriores)
summary: Verificações de dimensionamento de perfis em I de aço com combinações de carga da ASCE 7 ou da EN 1990 e verificação de barras segundo a AISC 360 ou a EN 1993-1-1, exportação USD do modelo de aço, uma ferramenta de apoio para USD, um friso Aço com botões grandes e pequenos, painéis que se arrumam e caixas de diálogo que se deslocam.
keywords: novidades 0.7, versão anterior, notas de lançamento, registo de alterações, alterações, 0.7, versão, novas funcionalidades, verificações de dimensionamento, dimensionamento de aço, utilização, combinações de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga na cobertura, limite de deformação, usd, usda, usdc, usdz, openusd, assistente, mcp, friso de aço, friso, botão dividido, unidades, compacto, painéis, caixas de diálogo, português
from: 54a7a8f0
---

Eis o que mudou no DetailCraft 0.7, em comparação com a 0.6. A análise de pórticos da 0.6 tem agora um segundo passo: a verificação das barras de aço segundo uma norma de dimensionamento.

## Novidades

### Juntas em esquadria (0.7.1)

- **Dois perfis em I que se encontram num ângulo**, como um joelho de pórtico ou uma cumeeira: selecione ambos, escolha {{ui:Mitre}} no menu {{ui:More}} do grupo {{ui:Connect}}, e ambas as extremidades são cortadas no plano que divide o ângulo ao meio. As chapas de topo aparafusadas entre si e os reforços da alma são caixas de verificação na nova caixa de diálogo Esquadria, cujos campos numerados correspondem a um desenho da junta feito enquanto escreve. A esquadria acompanha as barras quando se movem e chega aos desenhos, aos ficheiros NC (cortes oblíquos), ao IFC e à lista de materiais. Ver [Juntas em esquadria](topic:mitres).

### Verificações de dimensionamento

- **Combinações de carga da norma.** No separador {{ui:Analysis}}, o novo bloco {{ui:Design checks}} tem uma {{ui:Design code}}: ASCE 7 + AISC 360 (EUA, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocódigo). Indique o tipo de cada caso de carga (permanente, sobrecarga, a nova sobrecarga na cobertura, neve, vento, sismo), prima {{ui:Make combinations}}, e o DetailCraft escreve as combinações de resistência e de utilização da norma para os seus casos. As combinações que escreveu manualmente mantêm-se. Ver [Criar as combinações](topic:design-checks#make-the-combinations).
- **Valores do Anexo Nacional.** Para o Eurocódigo, os coeficientes começam nos valores recomendados; {{ui:National Annex values}} permite introduzir os do seu país, e ficam guardados no modelo. Ver [Criar as combinações](topic:design-checks#make-the-combinations).
- **Verificar barras.** {{ui:Check members}} verifica cada perfil em I de aço à tração, à compressão com encurvadura, à flexão com encurvadura lateral por torção, ao corte, à flexão com força axial e à deformação, em relação ao {{ui:Deflection limit}} que definir. A tabela mostra o aproveitamento de cada barra, a verificação que a governa e a respetiva combinação, e as barras ficam coloridas no modelo (azul, verde, ocre, vermelho, cinzento para não verificada). Ver [Verificar as barras](topic:design-checks#check-the-members).
- **No relatório.** {{ui:Report (PDF)}} e {{ui:Report (CSV)}} acrescentam as edições das normas, as definições, o aproveitamento por barra e cada cláusula utilizada. Ver [O relatório](topic:design-checks#the-report).
- **Uma ajuda até um engenheiro a rever.** Usa apenas forças de primeira ordem. Tubos, cantoneiras, canais, perfis soldados e partes esbeltas ou de classe 4 ficam como "não verificado", com o motivo; a torção, as ligações e o betão não são verificados. Ver [O que não é verificado](topic:design-checks#what-is-not-checked).

### USD

- **Exportar o modelo de aço em USD.** {{ui:USD}} no grupo {{ui:Output}} escreve o modelo como {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} ou {{ui:Package (.usdz)}} para programas de renderização e montagem de cenas: cada conjunto contém as suas peças, cada peça é a sua secção ao longo do comprimento com os recortes feitos, e cada uma tem a marca, o perfil, a qualidade, o comprimento e o peso. Os furos, os parafusos, as soldaduras e as fundações não estão nas malhas USD. Ver [Exportar o modelo de aço em USD](topic:usd).

### Assistentes de IA

- **USD para assistentes.** O seu próprio assistente, ligado através do CadCraft Studio, pode exportar o modelo em USD (`usd_export`) e, no Studio, escrevê-lo numa pasta que tenha autorizado. Ver [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Alterações

- **O friso Aço** tem botões grandes e pequenos: um {{ui:Beam}} grande ao lado de {{ui:Column}}, {{ui:Brace}} e {{ui:Plate}} pequenos em {{ui:Modeling}} › {{ui:Members}}; um {{ui:End plates}} grande em {{ui:Detailing}} › {{ui:Connections}}, com {{ui:Splice}} e {{ui:Gusset}} a partilharem um botão dividido; um {{ui:Paste}} grande em {{ui:Edit}} › {{ui:Clipboard}}, com {{ui:Paste in place}} e {{ui:Duplicate}} atrás da seta do grupo. {{ui:Fabrication}} › {{ui:Exchange}} tem {{ui:Export USD}} ao lado do IFC. Os outros estilos de menu mantêm o aspeto que tinham. Ver [Menus, teclas e rato](topic:menus-keys-and-mouse#the-three-styles).
- [Analisar o pórtico](topic:frame-analysis) remete agora para as verificações de dimensionamento, e as suas combinações podem ser criadas pela norma.

## Em todas as aplicações

- **Unidades.** {{ui:Settings}} › {{ui:General}} › {{ui:Units}} tem uma lista para cada um de comprimento, área, volume, ângulo e declive, com os tamanhos exatos que as definições das unidades indicam (o pé de inquérito dos EUA é uma unidade própria). Desative as unidades que nunca usa e saem das listas; marque uma com estrela e o trabalho novo começa nela. Um ficheiro mantém sempre a sua própria unidade. As caixas próprias do DetailCraft ainda não seguem as listas: os comprimentos continuam a ser introduzidos em milímetros. Ver [Unidades, valores introduzidos e listas de unidades](common:unit-lists).
- **Um esquema mais denso e painéis que se arrumam.** {{ui:Settings}} › {{ui:General}} › {{ui:Layout density}} › {{ui:Compact}} cabe mais no ecrã (os ecrãs táteis e os telemóveis mantêm os botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para ancorar ou flutuar o painel, largue-a sobre a barra de outro painel para partilhar uma mesma moldura em separadores, fixe-o para que deslize até à borda, ou oculte-o e traga-o de volta a partir da borda. Ver [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo deslocam-se.** Arraste uma caixa de diálogo pela barra de título para fora do caminho do desenho; volta ao sítio onde a deixou. Faça duplo clique na barra de título para a centrar outra vez. Ver [Deslocar uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos resolvidos para o seu próprio assistente (arrumar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas a um modelo, somar uma medição, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um repetido pelos nossos testes. As aplicações não contêm IA. Ver [Receitas para assistentes de IA](common:assistants-recipes).
- **Línguas.** **Português (Portugal)** é novo em {{ui:Settings}} › {{ui:General}} › {{ui:Language}}. Esta língua, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** indica o motivo de uma verificação de atualizações ter falhado (ainda não há ficheiro para o seu sistema, falta de rede, uma assinatura inválida) em vez de apenas "Concluído", e deixa de voltar a mostrar um cartão de Novidades que tenha fechado enquanto não houver uma versão mais recente.

## Não disponível nesta versão ainda

- **A versão 0.7 não tem assinatura de código.** A assinatura, e o pacote para a Microsoft Store, passaram para a 0.8 porque a validação do certificado ainda não chegou. Verifique o SHA-256 junto de cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen bloquear o instalador, escolha {{ui:More info}} e depois {{ui:Run anyway}}. Num Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Open}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não existe uma versão para iPad ou iPhone.
- As listas de ângulo e de declive em {{ui:Units}} são guardadas, mas nenhuma caixa as lê ainda.
- **As verificações de dimensionamento ainda não foram revistas por um engenheiro.** Os nossos testes comparam-nas com valores de tabelas impressas e com fórmulas resolvidas à mão, ainda não com os exemplos resolvidos de um guia de dimensionamento. Até à revisão, são uma ajuda: verifique à mão as barras que importam.
- As verificações de dimensionamento usam forças de primeira ordem (sem efeitos de segunda ordem) e verificam apenas perfis em I. Ainda não estão implementados: tubos, cantoneiras, canais, perfis soldados, partes esbeltas (AISC) ou de classe 4 (Eurocódigo) à flexão, torção, encurvadura ao corte combinada com flexão, ligações, fadiga, incêndio, detalhe sísmico e betão. Uma parte esbelta à compressão deixa de fora as verificações à compressão, e a barra fica como "passa, parcialmente verificada".
- A análise de pórticos continua a ser de primeira ordem e linear, e ainda nenhum engenheiro a testou numa obra real.
- Os furos, os parafusos, as soldaduras e as fundações não estão na exportação USD.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet).
