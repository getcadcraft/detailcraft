---
title: Abrir, gardar e exportar ficheiros
summary: O ficheiro de modelo de DetailCraft, cada exportación que escribe, onde van os ficheiros e que cambia segundo o navegador e a conexión.
keywords: abrir, gardar, exportar, descargar, ficheiro, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

DetailCraft ten un ficheiro propio, o modelo, e cinco exportacións. Cada gardado e cada exportación é unha descarga. Non se sube nada e non se garda nada nun servidor.

## O ficheiro de modelo

Un modelo de DetailCraft gárdase como `<name>.detailcraft.json`, onde `<name>` é o nome do modelo no panel {{ui:Model}}. Contén as cuadrículas, os niveis, as barras (cos seus furos e recortes), as conexións e os seus axustes, as zapatas e os seus perfís personalizados.

As pezas, as marcas, os parafusos, as soldaduras e as armaduras non se gardan: DetailCraft recalcúaos a partir do modelo cada vez que o abre. Por iso un ficheiro de modelo é pequeno.

### Gardar

1. Escriba un nome no campo {{ui:Name}} da parte superior do panel {{ui:Model}}.
2. Escolla {{ui:Save}} no grupo {{ui:File}}, ou prema {{key:Mod+S}}.
3. O navegador descarga `<name>.detailcraft.json`. A barra de estado di "Gardado… (descargado)", e o punto ao inicio do título da pestana do navegador desaparece.

Cada gardado é unha descarga nova. O navegador non sobrescribe o ficheiro que abriu; segundo os seus axustes engade un número ao nome, como `Frame (1).detailcraft.json`, ou pregunta onde gardar. Conserve as súas propias versións cambiando o nome das descargas.

:::chromium
Chrome e Edge gardan na cartafol Descargas, salvo que estea activada a opción **Preguntar onde gardar cada ficheiro antes de descargar** nos axustes de descargas do navegador. Actívea se quere escoller cada vez a cartafol e o nome do ficheiro.
:::

:::firefox
Firefox garda na cartafol Descargas, ou pregunta cada vez se está activada a opción **Preguntar sempre onde gardar os ficheiros** nos seus axustes.
:::

:::safari
Safari garda na cartafol Descargas. Para cambiar a cartafol, abra **Safari, Axustes, Xeral, Ubicación das descargas de ficheiros**.
:::

### Abrir

1. Escolla {{ui:Open}} no grupo {{ui:File}}, ou prema {{key:Mod+O}}.
2. Escolla un ficheiro `.detailcraft.json`.

Ou arrastre o ficheiro desde {{pick:mac=Finder|windows=Explorador de ficheiros|linux=o seu xestor de ficheiros}} e solteo na vista. A vista di "Solte un modelo de DetailCraft para abrilo" mentres arrastra.

Se o modelo aberto ten cambios sen gardar, DetailCraft pregunta primeiro: {{ui:Cancel}}, {{ui:Discard changes}} ou {{ui:Save first}}.

DetailCraft comproba cada campo dun ficheiro antes de usalo. Calquera cousa que non poida usar déixase fóra e a barra de estado di o que foi, por exemplo "2 barras non eran válidas e déixáronse fóra." Un modelo gardado cunha versión máis nova de DetailCraft recházase cunha mensaxe, en vez de abrirse a medias.

### Que abre

Os seus propios ficheiros de modelo (`.json`, ata 50 MB) e ficheiros IFC (`.ifc`, IFC2X3 ou IFC4, ata 200 MB). Un ficheiro IFC, aberto ou importado con {{ui:Import IFC}}, convértese nun modelo novo das súas vigas, piares, barras, placas, cuadrículas e niveis, cos furos e recortes cortados neles e os seus parafusos como parafusos soltos; un informe indica o que quedou fóra. Consulte [Exportación IFC](topic:ifc-export#import). Aínda non abre DWG, DXF nin o modelo doutro programa de detallado; ao intentalo amósase "DetailCraft abre os seus propios modelos (.detailcraft.json) e ficheiros IFC (.ifc)."

## Traballo perdido, ficheiros recentes, a aplicación de escritorio

- Mentres o modelo teña cambios sen gardar, DetailCraft conserva unha copia neste navegador. Se a pestana ou o navegador se pechan antes de gardar, a seguinte vez que abra DetailCraft preguntará **Recuperar o seu traballo?**: recupere a copia ou deixe que se perda. Consulte [Recuperar o traballo](common:recover).
- Os modelos que abriu recentemente aparecen na pantalla de inicio cando o navegador permite a DetailCraft volver abrilos; prema nun para reabrilo.
- Na aplicación de escritorio, {{ui:Save}} escribe o modelo no ficheiro que abriu (no navegador descarga unha copia), e un dobre clic nun modelo de DetailCraft ou nun ficheiro IFC ábreo en DetailCraft.

## Exportacións

Todas as exportacións usan o nome do modelo. Escóllaas no grupo {{ui:Output}}.

| Botón | Ficheiro | Que contén |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: pisos, cuadrículas, cada peza de aceiro como extrusión de perfil cos seus furos e recortes, conxuntos, parafusos e varillas de ancoraxe, zapatas e cada barra de armadura. Consulte [Exportar IFC](topic:ifc-export). |
| {{ui:NC files}} | `<name> NC.zip` | Un ficheiro DSTV `.nc1` por marca de peza. Consulte [Enviar ficheiros NC ao taller](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Tres táboas nun ficheiro: pezas, conxuntos, e parafusos e varillas de ancoraxe. Consulte [Marcas e lista de materiais](topic:marks-and-bom). |
| {{ui:Bending}} | `<name> bending schedule.csv` | Cada marca de barra das zapatas. Consulte [Zapatas e armadura](topic:footings-and-rebar). |
| {{ui:Shop drawing}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contén unha folla por marca de peza; {{ui:Download this sheet}} dá a que se amosa (A3, salvo que escolla outro tamaño). Consulte [Facer debuxos de taller](topic:shop-drawings). |
| {{ui:Drawings}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` ou `.dxf`, varios en `<name> drawings DWG.zip` (ou `DXF.zip`) | As plantas, alzados e debuxos de conxunto no tamaño de folla que escolla; DWG e DXF a tamaño completo, 1 unidade = 1 mm no papel. Consulte [Debuxos de disposición xeral e de conxunto](topic:drawings). |

### Notas sobre os ficheiros CSV

- Comezan cunha marca de orde de bytes para que os programas de follas de cálculo lean ben os caracteres acentuados.
- Unha cela que comeza por `=`, `+`, `-` ou `@` (e que non é un número simple) recibe unha apóstrofe ao principio, para que a folla de cálculo nunca a execute como fórmula.
- As lonxitudes están en milímetros e os pesos en quilogramos.

### Notas sobre o PDF

O texto do PDF usa a tipografía estándar Helvetica. Os caracteres que non ten (fóra do conxunto da Europa occidental) imprímense como "?", e a barra de estado indica cantos son.

## Unidades

DetailCraft traballa en milímetros en todo: cuadrículas, niveis, coordenadas, perfís, furos e todas as exportacións. Os nomes dos perfís conservan a súa forma publicada (W12x50 é unha designación US, aínda que as súas dimensións se amosen en mm). Aínda non hai entrada en unidades imperiais.

## En liña e sen conexión

Abrir, gardar e exportar fanse todos no seu navegador, así que funcionan igual con ou sen conexión unha vez cargado DetailCraft.

Para usar DetailCraft sen conexión máis tarde, escolla {{ui:Save for offline}} na barra da aplicación mentres está en liña. O botón conta ("Gardando 3 de 20") e despois amosa {{ui:Offline ready}}. A copia gardada inclúe a biblioteca gráfica 3D (uns 2,6 MB) e esta axuda, así que, unha vez gardada, a vista 3D, todas as exportacións e a axuda funcionan sen conexión. Detalles, e o que aínda precisa conexión: [Traballar sen conexión](common:offline).

:::offline
Está sen conexión. Se a barra da aplicación amosa {{ui:Offline ready}}, abrir, gardar e exportar funcionan como de costume. Se non, manteña esta pestana aberta, non a recargue ata que volva estar en liña e garde o seu modelo agora.
:::

Gardar na nube aínda non está dispoñible, e aínda non hai versións de escritorio. Faga copia de seguranza dos seus ficheiros `.detailcraft.json` do mesmo xeito que o fai con calquera outro ficheiro de traballo. Máis en [Onde van os seus ficheiros](common:your-files).

## Traballo sen gardar

DetailCraft conserva o modelo só na pestana aberta. Se pecha ou recarga a pestana con cambios sen gardar, o navegador pregunta se quere saír da páxina; o texto é o do propio navegador. Garde con {{key:Mod+S}} con frecuencia.
