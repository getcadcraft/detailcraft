---
title: Novidades da 0.7
summary: Verificações de dimensionamento de perfis I de aço com combinações de ações da ASCE 7 ou da EN 1990 e verificações de barras segundo a AISC 360 ou a EN 1993-1-1, exportação USD do modelo de aço, uma ferramenta de assistente para USD, um friso Aço com botões grandes e pequenos, painéis que se arrumam e caixas de diálogo que se movem.
keywords: novidades, o que há de novo, notas de versão, registo de alterações, alterações, 0.7, versão, novas funcionalidades, verificações de dimensionamento, dimensionamento de aço, taxa de utilização, combinações de ações, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga de cobertura, limite de deformação, usd, usda, usdc, usdz, openusd, assistente, mcp, friso aço, friso, botão dividido, unidades, compacta, painéis, caixas de diálogo, português
from: 17d1e0bb
---

Isto é o que mudou no DetailCraft 0.7, em comparação com a 0.6. A análise de estruturas da 0.6 tem agora um segundo passo: verificar as barras de aço segundo uma norma de dimensionamento.

## Novo

### Ligações em esquadria (0.7.1)

- **Dois perfis I que se encontram em ângulo**, como um nó de pórtico ou uma cumeeira: selecione ambos, escolha {{ui:Esquadria}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}, e ambas as extremidades são cortadas no plano que divide o ângulo ao meio. As chapas de topo aparafusadas entre si e os reforços da alma são caixas de verificação na nova caixa de diálogo Esquadria, cujos campos numerados correspondem a um desenho da sua ligação feito à medida que escreve. A esquadria acompanha as barras quando se movem, e passa para os desenhos, os ficheiros NC (cortes enviesados), o IFC e a lista de materiais. Consulte [Ligações em esquadria](topic:mitres).

### Verificações de dimensionamento

- **Combinações de ações da norma.** No separador {{ui:Análise}}, o novo bloco {{ui:Verificações de dimensionamento}} tem uma {{ui:Norma de dimensionamento}}: ASCE 7 + AISC 360 (EUA, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocódigo). Dê a cada caso de carga o seu tipo (permanente, sobrecarga, a nova sobrecarga de cobertura, neve, vento, sismo), prima {{ui:Criar combinações}}, e o DetailCraft escreve as combinações de resistência e de utilização da norma para os seus casos. As combinações que escreveu mantêm-se. Consulte [Criar as combinações](topic:design-checks#make-the-combinations).
- **Valores do Anexo Nacional.** No Eurocódigo, os fatores começam nos valores recomendados; {{ui:Valores do Anexo Nacional}} permite-lhe escrever os do seu país, e são guardados no modelo. Consulte [Criar as combinações](topic:design-checks#make-the-combinations).
- **Verificar barras.** {{ui:Verificar barras}} verifica todos os perfis I de aço quanto a tração, compressão com encurvadura, flexão com encurvadura lateral por torção, esforço transverso, flexão com esforço axial e deformação face ao {{ui:Limite de deformação (L / …)}} que definir. A tabela mostra a taxa de utilização de cada barra, a verificação condicionante e a sua combinação, e as barras são coloridas no modelo (azul, verde, ocre, vermelho, cinzento para não verificada). Consulte [Verificar as barras](topic:design-checks#check-the-members).
- **No relatório.** {{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} acrescentam as edições das normas, as definições, a taxa de utilização por barra e todas as cláusulas usadas. Consulte [O relatório](topic:design-checks#the-report).
- **Uma ajuda até um engenheiro a rever.** Usa apenas esforços de primeira ordem. Os tubos, cantoneiras, perfis em U, perfis soldados e peças esbeltas ou de classe 4 dizem "não verificado", com o motivo; a torção, as ligações e o betão não são verificados. Consulte [O que não é verificado](topic:design-checks#what-is-not-checked).

### USD

- **Exportar o modelo de aço como USD.** {{ui:USD}} no grupo {{ui:Saída}} escreve o modelo como {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}} para programas de renderização e montagem de cenas: cada montagem contém as suas peças, cada peça é a sua secção estendida ao longo do comprimento com os recortes cortados, e cada uma leva a sua marca de peça, perfil, classe, comprimento e peso. Os furos de parafusos, os parafusos, as soldaduras e as sapatas não estão nas malhas USD. Consulte [Exportar o modelo de aço como USD](topic:usd).

### Assistentes de IA

- **USD para assistentes.** O seu próprio assistente, ligado através do CadCraft Studio, pode exportar o modelo como USD (`usd_export`) e, no Studio, escrevê-lo numa pasta que autorizou. Consulte [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Alterado

- **O friso Aço** tem botões grandes e pequenos: uma {{ui:Viga}} grande ao lado de {{ui:Pilar}}, {{ui:Contraventamento}} e {{ui:Chapa}} pequenos em {{ui:Modelação}} › {{ui:Barras}}; umas {{ui:Chapas de topo}} grandes em {{ui:Pormenorização}} › {{ui:Ligações}}, com {{ui:Emenda}} e {{ui:Gousset}} a partilhar um botão dividido; um {{ui:Colar}} grande em {{ui:Editar}} › {{ui:Área de transferência}}, com {{ui:Colar no mesmo sítio}} e {{ui:Duplicar}} atrás da seta do grupo. {{ui:Fabrico}} › {{ui:Intercâmbio}} tem {{ui:Exportar USD}} ao lado de IFC. Os outros estilos de menu têm o mesmo aspeto de antes. Consulte [Menus, teclas e rato](topic:menus-keys-and-mouse#the-three-styles).
- [Analisar a estrutura](topic:frame-analysis) remete agora para as verificações de dimensionamento, e as suas combinações podem ser criadas pela norma.

## Em todas as aplicações

- **Unidades.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para o comprimento, a área, o volume, o ângulo e a inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desligue as unidades que nunca usa e saem das listas de unidades; marque uma com estrela e o trabalho novo começa nela. Um ficheiro mantém sempre a sua própria unidade. As caixas do próprio DetailCraft ainda não seguem as listas: os seus comprimentos continuam a ser escritos em milímetros. Consulte [Unidades, valores escritos e as listas de unidades](common:unit-lists).
- **Uma disposição mais densa e painéis que se arrumam.** {{ui:Definições}} › {{ui:Geral}} › {{ui:Densidade do esquema}} › {{ui:Compacta}} faz caber mais no ecrã (os ecrãs táteis e os telemóveis mantêm os seus botões grandes). Cada painel lateral tem uma barra de título fina: arraste-a para ancorar ou fazer flutuar o painel, largue-a na barra de outro painel para partilharem uma moldura como separadores, fixe-a para deslizar para a margem, ou oculte-a e traga-a de volta a partir da margem. Consulte [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **As caixas de diálogo movem-se.** Arraste uma caixa de diálogo pela barra de título para a tirar da frente do desenho; volta a ficar onde a deixou. Faça duplo clique na barra de título para a centrar de novo. Consulte [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos resolvidos para o seu próprio assistente (arrumar um desenho, imprimir um conjunto, verificar desenhos, fazer perguntas a um modelo, totalizar uma medição de quantidades, experimentar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um reproduzido pelos nossos testes. As aplicações não contêm IA. Consulte [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Definições}} › {{ui:Geral}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia** têm agora todas as palavras das aplicações, como rascunhos ainda não revistos por um falante nativo. Os tópicos de ajuda estão em inglês.
- **O CadCraft Studio** diz porque falhou uma verificação de atualizações (ainda não há ficheiro para o seu sistema, sem rede, assinatura inválida) em vez de apenas "Concluído", e deixa de trazer de volta um cartão Novidades que fechou até haver uma versão mais recente.

## Ainda não nesta versão

- **A 0.7 não está assinada digitalmente.** A assinatura, e o pacote da Microsoft Store, passaram para a 0.8 porque a validação do certificado ainda não chegou. Confirme o SHA-256 junto a cada ficheiro em getcadcraft.com/download. No Windows, se o SmartScreen parar o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar mesmo assim}}. Num Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está numa loja de aplicações, e ainda não há versão para iPad nem iPhone.
- As listas de ângulo e de inclinação em {{ui:Unidades}} são guardadas, mas nenhuma caixa as lê ainda.
- **As verificações de dimensionamento ainda não foram revistas por um engenheiro.** Os nossos testes comparam-nas com valores de tabelas impressas e fórmulas resolvidas à mão, ainda não com exemplos resolvidos de um guia de dimensionamento. Até uma revisão, são uma ajuda: verifique à mão as barras que importam.
- As verificações de dimensionamento usam esforços de primeira ordem (sem efeitos de segunda ordem) e verificam apenas perfis I. Não implementado: tubos, cantoneiras, perfis em U, perfis soldados, peças esbeltas (AISC) ou de classe 4 (Eurocódigo) à flexão, torção, encurvadura por esforço transverso em conjunto com flexão, ligações, fadiga, fogo, pormenorização sísmica e betão. Uma peça esbelta à compressão deixa de fora as verificações de compressão, e a barra diz "cumpre, verificada em parte".
- A análise de estruturas continua a ser de primeira ordem e linear, e ainda não foi experimentada por um engenheiro num trabalho real.
- Os furos de parafusos, os parafusos, as soldaduras e as sapatas não estão na exportação USD.

Tudo o resto está em [O que ainda não está implementado](topic:not-built-yet).
