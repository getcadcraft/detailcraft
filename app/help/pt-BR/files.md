---
title: Abrir, salvar e exportar arquivos
summary: O arquivo de modelo do DetailCraft, cada exportação que ele grava, onde os arquivos ficam e o que muda conforme o navegador e a conexão.
keywords: abrir, salvar, exportar, baixar, arquivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

O DetailCraft tem um arquivo próprio, o modelo, e cinco exportações. Cada salvamento e cada exportação é um download. Nada é enviado, e nada fica armazenado em um servidor.

## O arquivo de modelo

Um modelo do DetailCraft é salvo como `<name>.detailcraft.json`, em que `<name>` é o nome do modelo no painel {{ui:Model}}. Ele contém os eixos, os níveis, as barras (com seus furos e rebaixos), as ligações e suas configurações, as sapatas e os seus perfis personalizados.

Peças, marcas, parafusos, soldas e barras não são armazenados: o DetailCraft os recalcula a partir do modelo toda vez que ele é aberto. É por isso que um arquivo de modelo é pequeno.

### Salvar

1. Digite um nome no campo {{ui:Name}} no topo do painel {{ui:Model}}.
2. Escolha {{ui:Save}} no grupo {{ui:File}}, ou pressione {{key:Mod+S}}.
3. O navegador baixa `<name>.detailcraft.json`. A barra de status mostra "Salvo … (baixado)", e o ponto no início do título da aba do navegador some.

Cada salvamento é um novo download. O navegador não sobrescreve o arquivo que você abriu; dependendo das configurações, ele acrescenta um número ao nome, como `Frame (1).detailcraft.json`, ou pergunta onde salvar. Para manter suas próprias versões, renomeie os downloads.

:::chromium
O Chrome e o Edge salvam na pasta Downloads, a menos que **Perguntar onde salvar cada arquivo antes de baixar** esteja ativado nas configurações de download do navegador. Ative essa opção se quiser escolher a pasta e o nome do arquivo a cada vez.
:::

:::firefox
O Firefox salva na pasta Downloads, ou pergunta a cada vez se **Sempre perguntar onde salvar arquivos** estiver ativado nas configurações.
:::

:::safari
O Safari salva na pasta Downloads. Para mudar a pasta, abra **Safari, Configurações, Geral, Local de download de arquivos**.
:::

### Abrir

1. Escolha {{ui:Open}} no grupo {{ui:File}}, ou pressione {{key:Mod+O}}.
2. Escolha um arquivo `.detailcraft.json`.

Ou arraste o arquivo do {{pick:mac=Finder|windows=File Explorer|linux=seu gerenciador de arquivos}} e solte-o na visualização. A visualização mostra "Solte um modelo do DetailCraft para abri-lo" enquanto você arrasta.

Se o modelo aberto tiver alterações não salvas, o DetailCraft pergunta antes: {{ui:Cancel}}, {{ui:Discard changes}} ou {{ui:Save first}}.

O DetailCraft verifica cada campo de um arquivo antes de usá-lo. O que não pode ser usado fica de fora, e a barra de status diz o quê, por exemplo "2 barras não eram válidas e ficaram de fora." Um modelo salvo por um DetailCraft mais novo é recusado com uma mensagem, em vez de ser aberto pela metade.

### O que ele abre

Os próprios arquivos de modelo (`.json`, até 50 MB) e arquivos IFC (`.ifc`, IFC2X3 ou IFC4, até 200 MB). Um arquivo IFC, aberto ou trazido com {{ui:Import IFC}}, vira um novo modelo com suas vigas, pilares, barras, chapas, eixos e níveis, com os furos e rebaixos feitos neles e seus parafusos como parafusos soltos; um relatório lista o que ficou de fora. Veja [Exportação IFC](topic:ifc-export#import). Ele ainda não abre DWG, DXF nem o modelo de nenhum outro programa de detalhamento; a tentativa mostra "O DetailCraft abre os próprios modelos (.detailcraft.json) e arquivos IFC (.ifc)."

## Trabalho perdido, arquivos recentes, o aplicativo de desktop

- Enquanto o modelo tiver alterações que você não salvou, o DetailCraft guarda uma cópia neste navegador. Se a aba ou o navegador fechar antes de você salvar, na próxima vez que abrir o DetailCraft ele pergunta **Recuperar seu trabalho?**: recupere a cópia ou descarte-a. Veja [Recuperar seu trabalho](common:recover).
- Os modelos abertos recentemente aparecem na tela inicial quando o navegador permite que o DetailCraft os abra novamente; clique em um deles para reabri-lo.
- No aplicativo de desktop, {{ui:Save}} grava o modelo de volta no arquivo que você abriu (no navegador, ele baixa uma cópia), e um clique duplo em um modelo do DetailCraft ou em um arquivo IFC o abre no DetailCraft.

## Exportações

Todas as exportações usam o nome do modelo. Escolha-as no grupo {{ui:Output}}.

| Botão | Arquivo | O que contém |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: pavimentos, eixos, cada peça de aço como uma extrusão de perfil com seus furos e rebaixos, montagens, parafusos e chumbadores, sapatas e todas as barras. Veja [Exportar IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Um arquivo DSTV `.nc1` por marca de peça. Veja [Enviar arquivos NC para a fábrica](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Três tabelas em um único arquivo: peças, montagens e parafusos e chumbadores. Veja [Marcas e lista de materiais](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Cada marca de barra nas sapatas. Veja [Sapatas e armadura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contém uma folha por marca de peça; {{ui:Download this sheet}} baixa a folha exibida (A3, salvo se você escolheu outro tamanho). Veja [Fazer desenhos de fabricação](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ou `.dxf`, vários em `<name> drawings DWG.zip` (ou `DXF.zip`) | As plantas, elevações e desenhos de montagem geral no tamanho de folha escolhido; DWG e DXF em tamanho real, 1 unidade = 1 mm no papel. Veja [Desenhos de disposição geral e de montagem](topic:drawings). |

### Observações sobre os arquivos CSV

- Eles começam com uma marca de ordem dos bytes, para que os programas de planilha leiam corretamente os caracteres acentuados.
- Uma célula que começa com `=`, `+`, `-` ou `@` (e não é um número simples) recebe um apóstrofo no início, para que a planilha nunca a execute como fórmula.
- Os comprimentos são em milímetros e os pesos em quilogramas.

### Observações sobre o PDF

O texto do PDF usa a fonte padrão Helvetica. Caracteres que ela não tem (fora do conjunto da Europa Ocidental) saem impressos como "?", e a barra de status informa quantos foram.

## Unidades

O DetailCraft trabalha em milímetros do início ao fim: eixos, níveis, coordenadas, perfis, furos e todas as exportações. Os nomes de perfis mantêm a forma publicada (W12x50 é uma designação dos EUA, mesmo que as dimensões sejam mostradas em mm). Ainda não há entrada em unidades imperiais.

## Online e offline

Abrir, salvar e exportar acontecem todos no seu navegador; por isso funcionam da mesma forma com ou sem conexão, depois que o DetailCraft carregou.

Para usar o DetailCraft sem conexão depois, escolha {{ui:Save for offline}} na barra do aplicativo enquanto estiver online. O botão mostra a contagem ("Salvando 3 de 20") e depois exibe {{ui:Offline ready}}. A cópia salva inclui a biblioteca de gráficos 3D (cerca de 2,6 MB) e esta ajuda; assim, depois de salva, a visualização 3D, todas as exportações e a ajuda funcionam offline. Detalhes, e o que ainda precisa de conexão: [Trabalhar offline](common:offline).

:::offline
Você está offline. Se a barra do aplicativo mostrar {{ui:Offline ready}}, abrir, salvar e exportar funcionam normalmente. Se não mostrar, mantenha esta aba aberta, não a recarregue até voltar a ficar online e salve seu modelo agora.
:::

O salvamento na nuvem ainda não está disponível, e ainda não há versões para computador. Faça backup dos seus arquivos `.detailcraft.json` como faz com qualquer outro arquivo de trabalho. Mais em [Onde ficam seus arquivos](common:your-files).

## Trabalho não salvo

O DetailCraft mantém o modelo somente na aba aberta. Se você fechar ou recarregar a aba com alterações não salvas, o navegador pergunta se você quer sair da página; o texto é do próprio navegador. Salve com {{key:Mod+S}} com frequência.
