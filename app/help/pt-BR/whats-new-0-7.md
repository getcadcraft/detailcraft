---
title: Novidades na versão 0.7 (anteriores)
summary: Verificações de dimensionamento de perfis I de aço com combinações de carga da ASCE 7 ou EN 1990 e verificação de barras pela AISC 360 ou EN 1993-1-1, exportação USD do modelo de aço, uma ferramenta de assistente para USD, uma faixa de opções de aço com botões grandes e pequenos, painéis que se recolhem e caixas de diálogo que se movem.
keywords: novidades 0.7, versão anterior, notas de lançamento, changelog, alterações, 0.7, versão, novos recursos, verificações de dimensionamento, dimensionamento de aço, aproveitamento, utilização, combinações de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga de cobertura, limite de deflexão, usd, usda, usdc, usdz, openusd, assistente, mcp, faixa de opções de aço, faixa de opções, botão dividido, unidades, compacta, painéis, caixas de diálogo, português
from: 54a7a8f0
---

Isto é o que mudou no DetailCraft 0.7, em comparação com a 0.6. A análise de pórtico da 0.6 agora tem uma segunda etapa: a verificação das barras de aço segundo uma norma de projeto.

## Novo

### Juntas em esquadria (0.7.1)

- **Dois perfis I se encontrando em ângulo**, como um joelho de pórtico ou uma cumeeira: selecione os dois, escolha {{ui:Esquadria}} no menu {{ui:Mais}} do grupo {{ui:Ligar}}, e as duas extremidades são cortadas no plano que divide o ângulo ao meio. Chapas de extremidade parafusadas uma na outra e enrijecedores de alma são caixas de seleção na nova caixa de diálogo Esquadria, cujos campos numerados correspondem a um desenho da sua junta feito à medida que você digita. A esquadria acompanha as barras quando elas se movem e passa para os desenhos, os arquivos NC (cortes oblíquos), o IFC e a lista de materiais. Veja [Juntas em esquadria](topic:mitres).

### Verificações de dimensionamento

- **Combinações de carga da norma.** Na guia {{ui:Análise}}, o novo bloco {{ui:Verificações de dimensionamento}} tem uma {{ui:Norma de projeto}}: ASCE 7 + AISC 360 (EUA, LRFD) ou EN 1990 + EN 1993-1-1 (Eurocódigo). Dê a cada caso de carga o seu tipo (permanente, variável, a nova sobrecarga de cobertura, neve, vento, sísmica), escolha {{ui:Criar combinações}}, e o DetailCraft grava as combinações de resistência e de serviço da norma para os seus casos. As combinações que você digitou continuam. Veja [Criar as combinações](topic:design-checks#make-the-combinations).
- **Valores do Anexo Nacional.** Para o Eurocódigo, os fatores começam nos valores recomendados; {{ui:Valores do Anexo Nacional}} permite digitar os do seu país, e eles são salvos no modelo. Veja [Criar as combinações](topic:design-checks#make-the-combinations).
- **Verificar barras.** {{ui:Verificar barras}} verifica cada perfil I de aço quanto a tração, compressão com flambagem, flexão com flambagem lateral por torção, cisalhamento, flexão com força normal e flecha contra o {{ui:Limite de deflexão}} que você definir. A tabela mostra o aproveitamento de cada barra, a verificação que governa e a sua combinação, e as barras são coloridas no modelo (azul, verde, ocre, vermelho, cinza para não verificada). Veja [Verificar as barras](topic:design-checks#check-the-members).
- **No relatório.** {{ui:Relatório (PDF)}} e {{ui:Relatório (CSV)}} acrescentam as edições das normas, as configurações, o aproveitamento por barra e cada cláusula usada. Veja [O relatório](topic:design-checks#the-report).
- **Um auxílio até que um engenheiro revise.** Usa apenas esforços de primeira ordem. Tubos, cantoneiras, perfis U, seções soldadas e partes esbeltas ou de classe 4 aparecem como "não verificada", com o motivo; torção, ligações e concreto não são verificados. Veja [O que não é verificado](topic:design-checks#what-is-not-checked).

### USD

- **Exportar o modelo de aço como USD.** {{ui:USD}} no grupo {{ui:Saída}} grava o modelo como {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}} para programas de renderização e montagem de cenas: cada montagem guarda as suas peças, cada peça é a sua seção percorrendo o comprimento, com os recortes feitos, e cada uma leva a sua marca, perfil, classe de aço, comprimento e peso. Furos, parafusos, soldas e sapatas não estão nas malhas USD. Veja [Exportar o modelo de aço como USD](topic:usd).

### Assistentes de IA

- **USD para assistentes.** O seu próprio assistente, conectado pelo CadCraft Studio, pode exportar o modelo como USD (`usd_export`), e no Studio gravá-lo em uma pasta que você liberou. Veja [O que um assistente pode pedir](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Alterado

- **A faixa de opções de aço** tem botões grandes e pequenos: um {{ui:Viga}} grande ao lado de {{ui:Pilar}}, {{ui:Contraventamento}} e {{ui:Chapa}} pequenos em {{ui:Modelagem}} › {{ui:Barras}}; um {{ui:Chapas de extremidade}} grande em {{ui:Detalhamento}} › {{ui:Ligações}}, com {{ui:Emenda}} e {{ui:Chapa de ligação}} compartilhando um botão dividido; um {{ui:Colar}} grande em {{ui:Editar}} › {{ui:Área de transferência}}, com {{ui:Colar no mesmo local}} e {{ui:Duplicar}} atrás da seta do grupo. {{ui:Fabricação}} › {{ui:Intercâmbio}} tem {{ui:Exportar USD}} ao lado do IFC. Os outros estilos de menu continuam como estavam. Veja [Menus, teclas e mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analisar o pórtico](topic:frame-analysis) agora aponta para as verificações de dimensionamento, e as suas combinações podem ser criadas pela norma.

## Em todos os aplicativos

- **Unidades.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Unidades}} tem uma lista para cada um de comprimento, área, volume, ângulo e inclinação, com os tamanhos exatos que as definições das unidades dão (o pé de levantamento dos EUA é uma unidade própria). Desative as unidades que você nunca usa e elas saem das listas; destaque uma e o novo trabalho começa nela. Um arquivo sempre mantém a sua própria unidade. As caixas do próprio DetailCraft ainda não seguem as listas: os seus comprimentos continuam digitados em milímetros. Veja [Unidades, valores digitados e listas de unidades](common:unit-lists).
- **Layout mais denso e painéis que se recolhem.** {{ui:Configurações}} › {{ui:Geral}} › {{ui:Densidade do layout}} › {{ui:Compacta}} cabe mais na tela (telas sensíveis ao toque e celulares mantêm os botões grandes). Cada painel lateral tem uma barra de título estreita: arraste-a para acoplar ou flutuar o painel, solte-a sobre a barra de outro painel para compartilhar um quadro como guias, fixe-a para que deslize até a borda, ou oculte-o e traga-o de volta pela borda. Veja [Organizar os painéis](common:arrange-panels#make-the-layout-denser).
- **Caixas de diálogo se movem.** Arraste uma caixa de diálogo pela barra de título para tirá-la do caminho do desenho; ela volta onde você a deixou. Clique duas vezes na barra de título para centralizá-la de novo. Veja [Mover uma caixa de diálogo](common:arrange-panels#move-a-dialog).
- **Receitas para assistentes de IA.** Dez pedidos prontos para o seu próprio assistente (organizar um desenho, plotar um conjunto, verificar desenhos, fazer perguntas ao modelo, totalizar um levantamento de quantitativos, testar uma variante de peça…), cada um com as ferramentas que chama e as permissões de que precisa, e cada um repetido pelos nossos testes. Os aplicativos não contêm IA. Veja [Receitas para assistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** é novo em {{ui:Configurações}} › {{ui:Geral}} › {{ui:Idioma}}. Ele, junto com **Português (Brasil)**, **Español (México)** e **Bahasa Indonesia**, agora tem todas as palavras dos aplicativos, como rascunhos ainda não revisados por um falante nativo. Os tópicos de ajuda estão em inglês.
- **CadCraft Studio** informa por que uma verificação de atualização falhou (ainda não há arquivo para o seu sistema, sem rede, assinatura inválida), em vez de apenas "Concluído", e deixa de trazer de volta um cartão de Novidades que você fechou até haver uma versão mais recente.

## Ainda não nesta versão

- **A 0.7 não tem assinatura de código.** A assinatura e o pacote da Microsoft Store passaram para a 0.8, porque a validação do certificado ainda não chegou. Confira o SHA-256 ao lado de cada arquivo em getcadcraft.com/download. No Windows, se o SmartScreen interromper o instalador, escolha {{ui:Mais informações}} e depois {{ui:Executar assim mesmo}}. No Mac, na primeira vez, clique com o botão direito no CadCraft Studio e escolha {{ui:Abrir}}. O CadCraft Studio ainda não está em uma loja de aplicativos, e ainda não há versão para iPad ou iPhone.
- Os valores de ângulo e inclinação em {{ui:Unidades}} são salvos, mas nenhuma caixa os lê ainda.
- **As verificações de dimensionamento ainda não foram revisadas por um engenheiro.** Nossos testes as comparam com valores de tabelas impressas e fórmulas resolvidas à mão, ainda não com exemplos resolvidos de um guia de projeto. Até a revisão, são um auxílio: verifique à mão as barras que importam.
- As verificações usam esforços de primeira ordem (sem efeitos de segunda ordem) e verificam apenas perfis I. Ainda não implementado: tubos, cantoneiras, perfis U, seções soldadas, partes esbeltas (AISC) ou de classe 4 (Eurocódigo) em flexão, torção, flambagem por cisalhamento combinada com flexão, ligações, fadiga, incêndio, detalhamento sísmico e concreto. Uma peça esbelta comprimida deixa de fora as verificações de compressão, e a barra aparece como "passa, parcialmente verificada".
- A análise de pórtico ainda é de primeira ordem e linear, e ainda não foi testada por um engenheiro em uma obra real.
- Furos, parafusos, soldas e sapatas não estão na exportação USD.

Tudo o mais está em [O que ainda não foi implementado](topic:not-built-yet).
