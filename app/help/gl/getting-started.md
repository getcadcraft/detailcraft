---
title: Primeiros pasos con DetailCraft
summary: Que fai DetailCraft hoxe, como abrilo e un primeiro modelo, das cuadrículas a un debuxo de taller, en dez minutos.
keywords: inicio, primeiro modelo, introdución, detallado de aceiro, armadura, inicio rápido, titorial, visión xeral
from: e4f16bbe
---

DetailCraft é a aplicación de detallado de aceiro e de armaduras da familia CadCraft. Constrúe un modelo 3D dun armazón de aceiro sobre cuadrículas e niveis, conéctao e obtén o que o taller necesita: marcas de peza e de conxunto, unha lista de materiais, debuxos de taller de cada peza, ficheiros NC DSTV, un modelo IFC e un cadro de dobrado para as zapatas.

Esta é unha versión inicial. Fai poucas cousas con coidado, en lugar de todo a un tempo. Lea [Que aínda non está construído](topic:not-built-yet) antes de planear un traballo real con ela.

## O que fai hoxe

- Cuadrículas e niveis que escribe, en milímetros.
- Piares, vigas, riostras e placas a partir de catálogos de perfís publicados (AISC W, S, C, L, HSS e Pipe; IPE, HEA, HEB e UPN europeos; UB, UC, PFC, EA, UEA, SHS, RHS e CHS do Reino Unido), e os seus propios perfís paramétricos.
- Dúas conexións: unha placa de extremo atornillada dunha viga a unha ala de piar, e unha placa base de piar con catro varillas de ancoraxe. Cada unha pode copiarse a cada unión similar.
- Furos e recortes escritos pola súa posición.
- Zapatas rectangulares con malla inferior e barras de arranque.
- Marcas de peza e de conxunto que se actualizan soas despois de cada cambio.
- Exportacións: IFC4, ficheiros NC DSTV (perfís en I e placas), lista de materiais en CSV, cadro de dobrado en CSV e un PDF de debuxo de taller dunha peza.

## Abrir DetailCraft

1. Abra DetailCraft nun navegador de escritorio: Chrome, Edge, Firefox ou Safari. Consulte [Navegadores e ordenadores](common:browsers).
2. Agarde a que a pantalla se encha. A barra de estado da parte inferior di "Listo. Abra o Exemplo, ou defina cuadrículas e niveis e comece a colocar barras."

A vista do modelo necesita gráficos 3D (WebGL). Se o centro da pantalla di "Este navegador non puido iniciar os gráficos 3D (WebGL)", consulte [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Os seus modelos quedan no seu ordenador. Abrir un modelo lérao o navegador, e gardar descarga un ficheiro. Non se sube nada. Gardar na nube aínda non está dispoñible. Consulte [Onde van os seus ficheiros](common:your-files). Para usar DetailCraft sen conexión máis tarde, escolla {{ui:Save for offline}} na barra da aplicación unha vez, mentres estea en liña; consulte [Traballar sen conexión](common:offline).
:::

:::offline
Está sen conexión. DetailCraft funciona sen conexión só se antes se gardou para uso sen conexión: o botón {{ui:Save for offline}} da barra da aplicación entón amosa {{ui:Offline ready}}. Consulte [Traballar sen conexión](common:offline).
:::

## Vexa primeiro o exemplo

A forma máis rápida de ver o que fai DetailCraft é o armazón de exemplo.

1. Escolla {{ui:Sample}} no grupo {{ui:File}} da barra de ferramentas.
2. A vista amosa un armazón de dous vanos: seis piares con placas base, catro vigas con placas de extremo, unha riostra e sete zapatas con armadura.
3. Prema unha viga. O panel {{ui:Properties}} á dereita amosa a súa marca de peza, a lonxitude de corte, o peso e os furos que fixeron as placas de extremo.
4. Abra a lapela {{ui:Bill of materials}} na parte inferior para ver cada marca de peza coa súa cantidade e o seu peso.

O percorrido [Explorar o armazón de exemplo](topic:sample-model) revisa peza a peza.

## O seu primeiro modelo

Un modelo novo xa ten as cuadrículas 1 a 3 por A a B a 6000 mm e dous niveis, Nivel 1 en 0 e Nivel 2 en 4000.

1. Escolla {{ui:New}}. Se o modelo actual ten cambios, DetailCraft pregunta se os quere gardar antes.
2. Escolla {{ui:Plan}} enriba da vista. A lista de niveis que hai ao lado escolle o Nivel 1.
3. Escolla {{ui:Column}} na barra de ferramentas, ou prema {{key:C}}.
4. Prema na intersección de cuadrículas A/1. Aparece un piar W12x50 desde o Nivel 1 ata o Nivel 2. A barra de estado di onde foi.
5. Prema B/1, A/2 e B/2 para colocar outros tres.
6. Escolla o Nivel 2 na lista de niveis, e despois escolla {{ui:Beam}} ou prema {{key:B}}.
7. Prema A/1 e despois A/2. Unha viga W16x26 une os extremos superiores dos dous piares, coa cara superior do aceiro no nivel.
8. Prema {{key:Esc}} para volver a {{ui:Select}} e despois prema a viga.
9. Escolla {{ui:End plates}} no grupo {{ui:Connect}}. Os dous extremos reciben unha placa de extremo atornillada, a viga recórtase para encaixar e a primeira placa de extremo queda seleccionada.
10. Prema de novo na viga.
11. Escolla {{ui:Shop drawing}} no grupo {{ui:Output}}. Ábrese unha vista previa do debuxo de taller da viga. Escolla {{ui:Download PDF}}.
12. Prema {{key:Mod+S}} para gardar o modelo. O navegador descarga `Untitled.detailcraft.json`.

Renomee o modelo no campo {{ui:Name}}, arriba á esquerda, antes de gardar, para que o ficheiro e cada exportación leven o seu nome.

## Onde ir despois

- [Un percorrido pola pantalla](topic:workspace)
- [Definir cuadrículas e niveis](topic:grids-and-levels)
- [Moverse pola vista 3D](topic:navigate-3d), con rato, panel táctil ou pantalla táctil
- [Vir doutro software de detallado](topic:coming-from), se coñece algún paquete grande de detallado
- [Usar esta axuda](common:help)
