---
title: Abrir, salvar e exportar arquivos
summary: O arquivo de modelo do DetailCraft, cada exportação que ele grava, para onde vão os arquivos e o que muda conforme o navegador e a conexão.
keywords: abrir, salvar, exportar, baixar, arquivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: bd715ea3
---

O DetailCraft tem um arquivo próprio, o modelo, e cinco exportações. Todo salvamento e toda exportação é um download. Nada é enviado e nada fica guardado em servidor.

## O arquivo de modelo

Um modelo do DetailCraft é salvo como `<name>.detailcraft.json`, em que `<name>` é o nome do modelo no painel {{ui:Modelo}}. Ele guarda os eixos, os níveis, as barras (com seus furos e rebaixos), as ligações e seus ajustes, as sapatas e seus perfis personalizados.

Peças, posições, parafusos, soldas e barras de armadura não são guardados: o DetailCraft os calcula de novo a partir do modelo toda vez que abre. Por isso um arquivo de modelo é pequeno.

### Salvar

1. Digite um nome no campo {{ui:Nome}}, no topo do painel {{ui:Modelo}}.
2. Escolha {{ui:Salvar}} no grupo {{ui:Arquivo}} ou pressione {{key:Mod+S}}.
3. O navegador baixa `<name>.detailcraft.json`. A barra de status diz "<name>.detailcraft.json salvo (baixado).", e o ponto no início do título da guia do navegador some.

Cada salvamento é um novo download. O navegador não sobrescreve o arquivo que você abriu; conforme as configurações dele, acrescenta um número ao nome, como `Frame (1).detailcraft.json`, ou pergunta onde salvar. Mantenha suas próprias versões renomeando os downloads.

:::chromium
O Chrome e o Edge salvam na sua pasta Downloads, a menos que **Perguntar onde salvar cada arquivo antes de fazer download** esteja ativada nas configurações de download do navegador. Ative-a se quiser escolher a pasta e o nome do arquivo a cada vez.
:::

:::firefox
O Firefox salva na sua pasta Downloads ou pergunta a cada vez se **Sempre perguntar onde salvar os arquivos** estiver ativada nas configurações dele.
:::

:::safari
O Safari salva na sua pasta Downloads. Para mudar a pasta, abra **Safari, Ajustes, Geral, Local de download de arquivos**.
:::

### Abrir

1. Escolha {{ui:Abrir}} no grupo {{ui:Arquivo}} ou pressione {{key:Mod+O}}.
2. Escolha um arquivo `.detailcraft.json`.

Ou arraste o arquivo de {{pick:mac=Finder|windows=Explorador de Arquivos|linux=seu gerenciador de arquivos}} e solte-o na vista. A vista diz "Solte um modelo do DetailCraft ou um arquivo IFC para abri-lo" enquanto você arrasta.

Se o modelo aberto tiver alterações não salvas, o DetailCraft pergunta antes: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Salvar primeiro}}.

O DetailCraft confere cada campo de um arquivo antes de usá-lo. O que ele não consegue usar é deixado de fora e a barra de status diz o quê, por exemplo "2 barras não eram válidas e foram deixadas de fora." Um modelo salvo por um DetailCraft mais novo é recusado com uma mensagem, em vez de aberto pela metade.

### O que ele abre

Seus próprios arquivos de modelo (`.json`, até 50 MB) e arquivos IFC (`.ifc`, IFC2X3 ou IFC4, até 200 MB). Um arquivo IFC, aberto ou trazido com {{ui:Importar IFC}}, vira um modelo novo com suas vigas, pilares, barras, chapas, eixos e níveis, com os furos e rebaixos neles e seus parafusos como parafusos soltos; um relatório lista o que ficou de fora. Veja [Exportação IFC](topic:ifc-export#import). Ele ainda não abre DWG, DXF nem o modelo de outro programa de detalhamento; ao tentar, aparece "O DetailCraft abre os próprios modelos (.detailcraft.json) e arquivos IFC (.ifc)."

## Trabalho perdido, arquivos recentes, o aplicativo de desktop

- Enquanto o modelo tem alterações não salvas, o DetailCraft guarda uma cópia neste navegador. Se a guia ou o navegador parar antes de você salvar, na próxima vez que abrir o DetailCraft ele pergunta **Recuperar seu trabalho?**: recupere a cópia ou deixe-a de lado. Veja [Recupere seu trabalho](common:recover).
- Os modelos que você abriu recentemente aparecem na tela inicial quando o navegador permite que o DetailCraft os abra de novo; clique em um para reabri-lo.
- No aplicativo de desktop, {{ui:Salvar}} grava o modelo de volta no arquivo que você abriu (no navegador, baixa uma cópia), e dar um clique duplo em um modelo do DetailCraft ou em um arquivo IFC o abre no DetailCraft.

## Exportações

Todas as exportações usam o nome do modelo. Escolha-as no grupo {{ui:Saída}}.

| Botão | Arquivo | O que há nele |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: pavimentos, eixos, cada peça de aço como extrusão de perfil com seus furos e rebaixos, conjuntos, parafusos e chumbadores, sapatas e todas as barras de armadura. Veja [Exportar IFC](topic:ifc-export). |
| {{ui:Arquivos NC}} | `<name> NC.zip` | Um arquivo DSTV `.nc1` por posição de peça. Veja [Envie arquivos NC para a oficina](topic:nc-export). |
| {{ui:LM}} | `<name> BOM.csv` | Três tabelas em um arquivo: peças, conjuntos, e parafusos e chumbadores. Veja [Posições e a lista de materiais](topic:marks-and-bom). |
| {{ui:Dobramento}} | `<name> bending schedule.csv` | Cada posição de barra nas sapatas. Veja [Sapatas e armadura](topic:footings-and-rebar). |
| {{ui:Desenho de fabricação}} | `<name> <mark>.pdf` | Uma folha (A3, a menos que você escolha outro tamanho) da peça selecionada (perfis I e chapas). Veja [Faça um desenho de fabricação](topic:shop-drawings). |
| {{ui:Desenhos}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ou `.dxf`, vários em `<name> drawings DWG.zip` (ou `DXF.zip`) | As plantas, elevações e desenhos de conjunto no tamanho de folha escolhido; DWG e DXF em tamanho real, 1 unidade = 1 mm no papel. Veja [Desenhos de arranjo geral e de conjunto](topic:drawings). |

### Notas sobre os arquivos CSV

- Eles começam com uma marca de ordem de bytes, para que as planilhas leiam corretamente os caracteres acentuados.
- Uma célula que começa com `=`, `+`, `-` ou `@` (e não é um número simples) recebe um apóstrofo no início, para que a planilha nunca a execute como fórmula.
- Os comprimentos são em milímetros e os pesos em quilogramas.

### Notas sobre o PDF

O texto do PDF usa a fonte padrão Helvetica. Os caracteres que ela não tem (fora do conjunto da Europa Ocidental) saem impressos como "?", e a barra de status diz quantos são.

## Unidades

O DetailCraft trabalha em milímetros em tudo: eixos, níveis, coordenadas, perfis, furos e todas as exportações. Os nomes de perfil mantêm a forma publicada (W12x50 é uma designação dos EUA, embora suas dimensões sejam mostradas em mm). Ainda não há entrada em unidades imperiais.

## Online e offline

Abrir, salvar e exportar acontecem no seu navegador, então funcionam do mesmo jeito com ou sem conexão depois que o DetailCraft foi carregado.

Para usar o DetailCraft sem conexão mais tarde, escolha {{ui:Salvar para uso offline}} na barra do aplicativo enquanto estiver online. O botão conta em progresso ("Salvando 3 de 20") e depois mostra {{ui:Pronto para uso offline}}. A cópia salva inclui a biblioteca de gráficos 3D (cerca de 2,6 MB) e esta ajuda; depois de salva, a vista 3D, todas as exportações e a ajuda funcionam offline. Detalhes, e o que ainda precisa de conexão: [Trabalhar offline](common:offline).

:::offline
Você está offline. Se a barra do aplicativo mostrar {{ui:Pronto para uso offline}}, abrir, salvar e exportar funcionam como de costume. Se não mostrar, mantenha esta guia aberta, não a recarregue até voltar a ficar online e salve seu modelo agora.
:::

O salvamento na nuvem ainda não está disponível e ainda não há versões para desktop. Faça backup dos seus arquivos `.detailcraft.json` como faz com qualquer outro arquivo de trabalho. Mais em [Para onde vão seus arquivos](common:your-files).

## Trabalho não salvo

O DetailCraft guarda o modelo apenas na guia aberta. Se você fechar ou recarregar a guia com alterações não salvas, o navegador pergunta se deve sair da página; o texto é do próprio navegador. Salve com {{key:Mod+S}} com frequência.
