---
title: Abrir, guardar e exportar ficheiros
summary: O ficheiro de modelo do DetailCraft, cada exportação que escreve, para onde vão os ficheiros e o que muda conforme o navegador e a ligação.
keywords: abrir, guardar, exportar, transferir, ficheiro, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

O DetailCraft tem um ficheiro próprio, o modelo, e cinco exportações. Cada ação de guardar e cada exportação é uma transferência. Nada é carregado, e nada fica guardado num servidor.

## O ficheiro de modelo

Um modelo do DetailCraft é guardado como `<name>.detailcraft.json`, em que `<name>` é o nome do modelo no painel {{ui:Modelo}}. Contém os eixos, os níveis, as barras (com os seus furos e recortes), as ligações e as respetivas definições, as sapatas e os seus perfis personalizados.

Peças, marcas, parafusos, soldaduras e varões não são guardados: o DetailCraft recalcula-os a partir do modelo sempre que o abre. Por isso, um ficheiro de modelo é pequeno.

### Guardar

1. Escreva um nome no campo {{ui:Nome}} no topo do painel {{ui:Modelo}}.
2. Escolha {{ui:Guardar}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+S}}.
3. O navegador transfere `<name>.detailcraft.json`. A barra de estado diz « Guardado … (transferido) », e o ponto no início do título do separador do navegador desaparece.

Cada vez que guarda é uma nova transferência. O navegador não substitui o ficheiro que abriu; conforme as definições, acrescenta um número ao nome, como `Frame (1).detailcraft.json`, ou pergunta onde guardar. Mantenha as suas próprias versões mudando o nome às transferências.

:::chromium
O Chrome e o Edge guardam na pasta Transferências, a não ser que **Perguntar onde guardar cada ficheiro antes de transferir** esteja ativo nas definições de transferência do navegador. Ative-a se quiser escolher uma pasta e um nome de ficheiro de cada vez.
:::

:::firefox
O Firefox guarda na pasta Transferências, ou pergunta sempre onde guardar se **Perguntar sempre onde guardar os ficheiros** estiver ativo nas definições.
:::

:::safari
O Safari guarda na pasta Transferências. Para mudar a pasta, abra **Safari, Definições, Geral, Local de transferência de ficheiros**.
:::

### Abrir

1. Escolha {{ui:Abrir}} no grupo {{ui:Ficheiro}}, ou prima {{key:Mod+O}}.
2. Escolha um ficheiro `.detailcraft.json`.

Ou arraste o ficheiro de {{pick:mac=Finder|windows=Explorador de Ficheiros|linux=o seu gestor de ficheiros}} e largue-o na vista. A vista diz « Largue um modelo do DetailCraft para o abrir » enquanto arrasta.

Se o modelo aberto tiver alterações não guardadas, o DetailCraft pergunta primeiro: {{ui:Cancelar}}, {{ui:Descartar alterações}} ou {{ui:Guardar primeiro}}.

O DetailCraft verifica cada campo de um ficheiro antes de o usar. O que não consegue usar fica de fora, e a barra de estado diz o quê, por exemplo « 2 barras não eram válidas e foram deixadas de fora. » Um modelo guardado por um DetailCraft mais recente é recusado com uma mensagem, em vez de ser aberto meio certo.

### O que abre

Os seus próprios ficheiros de modelo (`.json`, até 50 MB) e ficheiros IFC (`.ifc`, IFC2X3 ou IFC4, até 200 MB). Um ficheiro IFC, aberto ou importado com {{ui:Importar IFC}}, torna-se um novo modelo das suas vigas, pilares, barras, chapas, eixos e níveis, com os furos e recortes feitos e os parafusos como parafusos soltos; um relatório indica o que ficou de fora. Ver [Exportação IFC](topic:ifc-export#import). Por enquanto, não abre DWG, DXF nem o modelo de qualquer outro programa de pormenorização; se tentar, aparece « O DetailCraft abre os seus próprios modelos (.detailcraft.json) e ficheiros IFC (.ifc). »

## Trabalho perdido, ficheiros recentes, a aplicação de ambiente de trabalho

- Enquanto o modelo tiver alterações que não guardou, o DetailCraft mantém uma cópia neste navegador. Se o separador ou o navegador parar antes de guardar, na próxima vez que abrir o DetailCraft ele pergunta **Recuperar o seu trabalho?**: recupere a cópia ou descarte-a. Ver [Recuperar o seu trabalho](common:recover).
- Os modelos que abriu recentemente aparecem no ecrã inicial quando o navegador deixa o DetailCraft voltar a abri-los; clique num para o reabrir.
- Na aplicação de ambiente de trabalho, {{ui:Guardar}} grava o modelo de volta no ficheiro que abriu (no navegador transfere uma cópia), e um duplo clique num modelo do DetailCraft ou num ficheiro IFC abre-o no DetailCraft.

## Exportações

Todas as exportações usam o nome do modelo. Escolha-as no grupo {{ui:Saída}}.

| Botão | Ficheiro | O que contém |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: pisos, eixos, cada peça de aço como extrusão de perfil com os seus furos e recortes, montagens, parafusos e chumbadouros, sapatas e cada varão. Ver [Exportar IFC](topic:ifc-export). |
| {{ui:Ficheiros NC}} | `<name> NC.zip` | Um ficheiro DSTV `.nc1` por marca de peça. Ver [Enviar ficheiros NC para a oficina](topic:nc-export). |
| {{ui:LM}} | `<name> BOM.csv` | Três tabelas num só ficheiro: peças, montagens, e parafusos e chumbadouros. Ver [Marcas e lista de materiais](topic:marks-and-bom). |
| {{ui:Dobragem}} | `<name> bending schedule.csv` | Cada posição de varão nas sapatas. Ver [Sapatas e armadura](topic:footings-and-rebar). |
| {{ui:Desenho de fabrico}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contém uma folha por marca de peça; {{ui:Transferir PDF}} dá a folha mostrada (A3, a não ser que tenha escolhido outro formato). Ver [Fazer desenhos de fabrico](topic:shop-drawings). |
| {{ui:Desenhos}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ou `.dxf`, vários em `<name> drawings DWG.zip` (ou `DXF.zip`) | Plantas, alçados e desenhos de montagem no formato de folha que escolheu; DWG e DXF à escala real, 1 unidade = 1 mm no papel. Ver [Desenhos de disposição geral e de montagem](topic:drawings). |

### Notas sobre os ficheiros CSV

- Começam com uma marca de ordem de bytes, para que as folhas de cálculo leiam bem os caracteres acentuados.
- Uma célula que começa por `=`, `+`, `-` ou `@` (e não é um número simples) recebe um apóstrofo à frente, para que a folha de cálculo nunca a execute como fórmula.
- Os comprimentos estão em milímetros e os pesos em quilogramas.

### Notas sobre o PDF

O texto do PDF usa o tipo de letra padrão Helvetica. Os caracteres que não tem (fora do conjunto da Europa Ocidental) saem como «?», e a barra de estado indica quantos.

## Unidades

O DetailCraft trabalha em milímetros em tudo: eixos, níveis, coordenadas, perfis, furos e cada exportação. Os nomes dos perfis mantêm a forma publicada (W12x50 é uma designação dos EUA, embora as dimensões apareçam em mm). Ainda não existe introdução em unidades imperiais.

## Online e offline

Abrir, guardar e exportar acontecem todos no navegador, por isso funcionam da mesma forma com ou sem ligação, uma vez carregado o DetailCraft.

Para usar o DetailCraft mais tarde sem ligação, escolha {{ui:Guardar para offline}} na barra da aplicação enquanto estiver online. O botão conta (« A guardar 3 de 20 ») e depois mostra {{ui:Pronto para offline}}. A cópia guardada inclui a biblioteca gráfica 3D (cerca de 2.6 MB) e esta ajuda, por isso, depois de guardada, a vista 3D, todas as exportações e a ajuda funcionam offline. Pormenores, e o que ainda precisa de ligação: [Trabalhar offline](common:offline).

:::offline
Está offline. Se a barra da aplicação mostrar {{ui:Pronto para offline}}, abrir, guardar e exportar funcionam como de costume. Se não mostrar, mantenha este separador aberto, não o recarregue até voltar a estar online, e guarde já o seu modelo.
:::

Guardar na nuvem ainda não está disponível, e ainda não há versões para ambiente de trabalho. Faça cópias de segurança dos seus ficheiros `.detailcraft.json` como faz com qualquer outro ficheiro de trabalho. Mais em [Onde ficam os seus ficheiros](common:your-files).

## Trabalho não guardado

O DetailCraft mantém o modelo apenas no separador aberto. Se fechar ou recarregar o separador com alterações não guardadas, o navegador pergunta se quer sair da página; o texto é o do próprio navegador. Guarde com frequência com {{key:Mod+S}}.
