---
title: Abrir, guardar e exportar ficheiros
summary: O ficheiro de modelo do DetailCraft, todas as exportações que escreve, para onde vão os ficheiros e o que difere consoante o navegador e a ligação.
keywords: abrir, guardar, exportar, transferir, ficheiro, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: bd715ea3
---

O DetailCraft tem um ficheiro próprio, o modelo, e cinco exportações. Cada gravação e cada exportação é uma transferência. Nada é carregado, e nada é mantido num servidor.

## O ficheiro de modelo

Um modelo do DetailCraft é guardado como `<nome>.detailcraft.json`, em que `<nome>` é o nome do modelo no painel {{ui:Modelo}}. Contém os eixos, níveis, barras (com os seus furos e recortes), ligações e as suas definições, sapatas e os seus perfis personalizados.

As peças, marcas, parafusos, soldaduras e varões não são guardados: o DetailCraft volta a calculá-los a partir do modelo sempre que o abre. É por isso que um ficheiro de modelo é pequeno.

### Guardar

1. Escreva um nome no campo {{ui:Nome}}, no topo do painel {{ui:Modelo}}.
2. Escolha {{ui:Guardar}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+S}}.
3. O navegador transfere `<nome>.detailcraft.json`. A barra de estado diz "<nome>.detailcraft.json guardado (transferido).", e o ponto no início do título do separador do navegador desaparece.

Cada gravação é uma transferência nova. O navegador não substitui o ficheiro que abriu; consoante as suas definições, acrescenta um número ao nome, como `Frame (1).detailcraft.json`, ou pergunta onde guardar. Mantenha as suas próprias versões mudando o nome às transferências.

:::chromium
O Chrome e o Edge guardam na pasta Transferências, a não ser que **Perguntar onde guardar cada ficheiro antes de transferir** esteja ativo nas definições de transferências do navegador. Ative-o se quiser escolher uma pasta e um nome de ficheiro de cada vez.
:::

:::firefox
O Firefox guarda na pasta Transferências, ou pergunta de cada vez se **Perguntar sempre onde guardar os ficheiros** estiver ativo nas suas definições.
:::

:::safari
O Safari guarda na pasta Transferências. Para mudar a pasta, abra **Safari, Definições, Geral, Localização de transferência de ficheiros**.
:::

### Abrir

1. Escolha {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Escolha um ficheiro `.detailcraft.json`.

Ou arraste o ficheiro {{pick:mac=do Finder|windows=do Explorador de Ficheiros|linux=do seu gestor de ficheiros}} e largue-o na vista. A vista diz "Largue um modelo do DetailCraft ou um ficheiro IFC para o abrir" enquanto arrasta.

Se o modelo aberto tiver alterações não guardadas, o DetailCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Guardar primeiro}}.

O DetailCraft verifica todos os campos de um ficheiro antes de o utilizar. Tudo o que não consegue usar é deixado de fora e a barra de estado diz o quê, por exemplo "2 barras não eram válidas e ficaram de fora." Um modelo guardado por um DetailCraft mais recente é recusado com uma mensagem em vez de ser aberto de forma incorreta.

### O que abre

Os seus próprios ficheiros de modelo (`.json`, até 50 MB) e ficheiros IFC (`.ifc`, IFC2X3 ou IFC4, até 200 MB). Um ficheiro IFC, aberto ou trazido com {{ui:Importar IFC}}, torna-se um modelo novo com as suas vigas, pilares, barras, chapas, eixos e níveis, com os furos e recortes neles cortados e os seus parafusos como parafusos soltos; um relatório lista o que ficou de fora. Consulte [Exportação IFC](topic:ifc-export#import). Ainda não abre DWG, DXF nem o modelo de qualquer outro programa de pormenorização; tentar mostra "O DetailCraft abre os seus próprios modelos (.detailcraft.json) e ficheiros IFC (.ifc)."

## Trabalho perdido, ficheiros recentes, a aplicação de ambiente de trabalho

- Enquanto o modelo tem alterações que não guardou, o DetailCraft mantém uma cópia neste navegador. Se o separador ou o navegador pararem antes de guardar, da próxima vez que abrir o DetailCraft ele pergunta **Recuperar o seu trabalho?**: recupere a cópia, ou deixe-a ir. Consulte [Recuperar o seu trabalho](common:recover).
- Os modelos que abriu recentemente são listados no ecrã inicial quando o navegador deixa o DetailCraft abri-los de novo; clique num para o reabrir.
- Na aplicação de ambiente de trabalho, {{ui:Guardar}} escreve o modelo de volta no ficheiro que abriu (no navegador transfere uma cópia), e fazer duplo clique num modelo do DetailCraft ou num ficheiro IFC abre-o no DetailCraft.

## Exportações

Todas as exportações usam o nome do modelo. Escolha-as no grupo {{ui:Saída}}.

| Botão | Ficheiro | O que contém |
|---|---|---|
| {{ui:IFC}} | `<nome>.ifc` | IFC4: pisos, eixos, todas as peças de aço como extrusão de perfil com os seus furos e recortes, montagens, parafusos e chumbadouros, sapatas e todos os varões. Consulte [Exportar IFC](topic:ifc-export). |
| {{ui:Ficheiros NC}} | `<nome> NC.zip` | Um ficheiro DSTV `.nc1` por marca de peça. Consulte [Enviar ficheiros NC para a oficina](topic:nc-export). |
| {{ui:LM}} | `<nome> BOM.csv` | Três tabelas num só ficheiro: peças, montagens, e parafusos e chumbadouros. Consulte [Marcas e a lista de materiais](topic:marks-and-bom). |
| {{ui:Dobragem}} | `<nome> bending schedule.csv` | Todas as marcas de varão nas sapatas. Consulte [Sapatas e armaduras](topic:footings-and-rebar). |
| {{ui:Desenho de fabrico}} | `<nome> <marca>.pdf` | Uma folha (A3, a menos que tenha escolhido outro formato) para a peça selecionada (perfis em I e chapas). Consulte [Fazer um desenho de fabrico](topic:shop-drawings). |
| {{ui:Desenhos}} | `<nome> drawings.pdf`, `<nome> <folha>.pdf`; `<nome> <folha>.dwg` ou `.dxf`, vários em `<nome> drawings DWG.zip` (ou `DXF.zip`) | As plantas, alçados e desenhos de montagem no formato de folha que escolheu; DWG e DXF em tamanho real, 1 unidade = 1 mm no papel. Consulte [Desenhos de conjunto e de montagem](topic:drawings). |

### Notas sobre os ficheiros CSV

- Começam com uma marca de ordem de bytes para que os programas de folha de cálculo leiam corretamente os carateres acentuados.
- Uma célula que comece por `=`, `+`, `-` ou `@` (e não seja um número simples) recebe um apóstrofo inicial, para que uma folha de cálculo nunca a execute como fórmula.
- Os comprimentos são em milímetros e os pesos em quilogramas.

### Notas sobre o PDF

O texto do PDF usa o tipo de letra Helvetica normalizado. Os carateres que ele não tem (fora do conjunto da Europa Ocidental) imprimem-se como "?", e a barra de estado diz quantos.

## Unidades

O DetailCraft trabalha em milímetros em todo o lado: eixos, níveis, coordenadas, perfis, furos e todas as exportações. Os nomes dos perfis mantêm a forma publicada (W12x50 é uma designação dos EUA, ainda que as suas dimensões sejam mostradas em mm). Ainda não há introdução em unidades imperiais.

## Online e offline

Abrir, guardar e exportar acontecem todos no navegador, pelo que funcionam da mesma forma com ou sem ligação depois de o DetailCraft carregar.

Para utilizar o DetailCraft mais tarde sem ligação, escolha {{ui:Guardar para offline}} na barra da aplicação enquanto estiver online. O botão vai contando ("A guardar 3 de 20") e depois diz {{ui:Pronto para offline}}. A cópia guardada inclui a biblioteca de gráficos 3D (cerca de 2,6 MB) e esta ajuda, pelo que, depois de guardada, a vista 3D, todas as exportações e a ajuda funcionam offline. Pormenores, e o que ainda precisa de ligação: [Trabalhar offline](common:offline).

:::offline
Está offline. Se a barra da aplicação mostrar {{ui:Pronto para offline}}, abrir, guardar e exportar funcionam como habitualmente. Se não, mantenha este separador aberto, não o recarregue até voltar a estar online e guarde agora o seu modelo.
:::

A gravação na nuvem ainda não está disponível, e ainda não há versões para ambiente de trabalho. Faça cópias de segurança dos seus ficheiros `.detailcraft.json` como faria com qualquer outro ficheiro de trabalho. Mais em [Para onde vão os seus ficheiros](common:your-files).

## Trabalho não guardado

O DetailCraft mantém o modelo apenas no separador aberto. Se fechar ou recarregar o separador com alterações não guardadas, o navegador pergunta se quer sair da página; a redação é do próprio navegador. Guarde muitas vezes com {{key:Mod+S}}.
