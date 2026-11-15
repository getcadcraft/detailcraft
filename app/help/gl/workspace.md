---
title: Un percorrido pola pantalla
summary: Cada barra, panel e lapela de DetailCraft polo seu nome na pantalla e para que serve cada un.
keywords: pantalla, disposición, barra de ferramentas, paneis, propiedades, barra de estado, informes, interface, ui, lapelas
from: 94f81073
---

DetailCraft ocupa a xanela do navegador por debaixo da barra da aplicación. De arriba a abaixo: a barra de ferramentas, despois tres columnas (o panel {{ui:Model}}, a vista e o panel {{ui:Properties}}), despois as lapelas de informes e por último a barra de estado.

## A barra da aplicación

A barra fina da parte máis alta pertence ao sitio de CadCraft, non ao modelo. Amosa o nome e a versión da aplicación, unha ligazón a {{ui:About DetailCraft}}, {{ui:Help}} (ou {{key:F1}}) para esta axuda, {{ui:Save for offline}}, o botón do modo de pantalla e o interruptor {{ui:Paper}} / {{ui:Model}}.

- {{ui:Save for offline}} conserva DetailCraft, a súa vista 3D e esta axuda no seu navegador, para que se abra sen conexión. Unha vez gardado, le {{ui:Offline ready}}; prema entón para {{ui:Save again (get the newest version)}} ou {{ui:Remove the offline copy}}. Consulte [Traballar sen conexión](common:offline).
- {{ui:Paper}} dá unha pantalla clara e {{ui:Model}} unha escura. A vista 3D séguea de inmediato; nada do seu modelo cambia.
- O botón do modo de pantalla e {{key:Ctrl+Shift+F}} alternan entre normal, pantalla completa e pantalla completa con as barras ocultas. {{key:Ctrl+Shift+F}} usa a tecla Control en todos os ordenadores, tamén nun Mac. Con as barras ocultas, sitúe o punteiro na beira superior da pantalla (ou toque nela) para que volvan. {{key:Esc}} sae da pantalla completa.

## A barra de ferramentas

A barra de ferramentas ten cinco grupos. Pase o punteiro sobre un botón para ver o que fai e a súa tecla.

| Grupo | Botóns | Que fan |
|---|---|---|
| {{ui:File}} | {{ui:New}}, {{ui:Open}}, {{ui:Import IFC}}, {{ui:Save}}, {{ui:Sample}} | Crean un modelo, abren un `.detailcraft.json` gardado ou un ficheiro IFC, gardan un ou abren o armazón de exemplo |
| {{ui:Place}} | {{ui:Select}}, {{ui:Beam}}, {{ui:Column}}, {{ui:Brace}}, {{ui:Plate}}, {{ui:Footing}}, {{ui:Stair}} | A ferramenta que usa o seguinte clic na vista |
| {{ui:Connect}} | {{ui:End plates}}, {{ui:Base plate}}, e en {{ui:More}}: {{ui:Shear tabs}}, {{ui:Splice}}, {{ui:Gusset}}, {{ui:Similar}} | Engaden unha conexión á viga, ao piar ou á riostra seleccionados, ou copian a conexión seleccionada a cada unión parecida |
| {{ui:Edit}} | {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:More}} | Retroceden e avanzan polas edicións; copian a selección e a pegan. {{ui:More}} abre un menú con {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} e {{ui:Select none}}, cada un coa súa tecla |
| {{ui:Output}} | {{ui:IFC}}, {{ui:NC files}}, {{ui:BOM}}, {{ui:Shop drawing}}, {{ui:Drawings}}, e en {{ui:More}}: {{ui:Bending}}, {{ui:Weight report by phase}}, {{ui:KISS file for fabrication software}} | Descargan unha exportación ou abren as follas de debuxo |

Os botóns e os elementos de menú que non poden actuar agora aparecen en gris, e ao pasar o punteiro sobre un deles indícase o motivo. {{ui:End plates}} precisa unha viga seleccionada, {{ui:Base plate}} un piar seleccionado, {{ui:Similar}} unha conexión seleccionada, {{ui:Shop drawing}} un modelo con pezas, {{ui:Copy}} unha barra ou zapata seleccionada, e {{ui:Paste}} algo copiado. Consulte [Copiar, pegar e duplicar](topic:copy-paste).

## O panel do modelo (esquerda)

- {{ui:Model}}: o {{ui:Name}} do modelo. Dá nome a cada ficheiro que garde ou exporte.
- {{ui:Grids}}: as liñas de cuadrícula e os seus espazamentos, e {{ui:Apply grids}}. Consulte [Definir cuadrículas e niveis](topic:grids-and-levels).
- {{ui:Levels}}: unha fila por nivel (nome e cota en mm), {{ui:Add level}} e {{ui:Apply levels}}.
- {{ui:Custom profile}}: cree a súa propia sección paramétrica. Está pechado ata que o abra.
- {{ui:Part marks}}: cada marca de peza do modelo co seu perfil, lonxitude e número. Prema nunha marca para seleccionar a primeira peza con ela.

{{ui:Grids}}, {{ui:Levels}} e {{ui:Custom profile}} pléganse: prema nos seus títulos.

## A vista (centro)

A vista amosa o modelo en 3D. Enriba dela, a barra de vista ten tres botóns e unha lista:

- {{ui:3D}}: xire libremente ao redor do modelo.
- {{ui:Plan}}: mire en vertical cara abaixo a un nivel. Xunto aos botóns aparece unha lista de niveis. Calquera cousa máis de 1,5 m por enriba do nivel recórtase, para que o nivel se vexa e se prema con claridade.
- {{ui:Elevation}}: mire de frente cara a unha liña de cuadrícula con letra (Cuadrícula A, Cuadrícula B…). Aparece unha lista de cuadrículas con letra. Só se amosa o aceiro a menos de 1 m desa liña.
- O botón de axustar á vista, no extremo dereito da barra de vista, achega o zoom para ver todo o modelo.

Pequenos puntos marcan cada intersección de cuadrículas en cada nivel. Mentres está activa unha ferramenta de colocación, o punto máis próximo ao punteiro ilumínase e a barra de estado di o seu nome, por exemplo "A/2 no Nivel 1". As cores distinguen os tipos de elemento: piares, vigas, riostras e placas teñen cada un a súa cor, os parafusos e as varillas outra, as zapatas son transparentes e a armadura debúxase como tubos. Os furos amósanse como tapóns escuros; os recortes están cortados.

Como xirar, desprazar e achegar: [Moverse pola vista 3D](topic:navigate-3d).

Cando o modelo está baleiro, a vista amosa unha breve lista "Comezar un modelo". Tamén pode soltar un ficheiro de modelo gardado en calquera parte da vista para abrilo.

## O panel de propiedades (dereita)

O que amosa este panel depende do que estea facendo, e o seu título indica cal: "Modelo", "Colocar unha viga", "Viga b2", "Conexión de placa de extremo", "Placa base", "Zapata F1", "3 seleccionados" ou "Pegar".

- **Nada seleccionado:** un resumo do modelo (barras, conexións, zapatas, pezas, marcas, parafusos, peso de aceiro e de armadura, cuadrículas e niveis).
- **Ferramenta de colocación activa:** as opcións da seguinte peza (perfil, material, posición, rotación e, para os piares, {{ui:Up to}}), un resumo do perfil escollido e un formulario {{ui:Add by grid}} para colocar sen premer na vista.
- **Barra seleccionada:** o seu nome, perfil, material, posición, rotación, as coordenadas dos seus dous extremos, as súas marcas, a lonxitude de corte e o peso, os seus furos e recortes, e botóns para as conexións, o seu debuxo de taller e {{ui:Delete}}.
- **Conexión seleccionada:** cada axuste de placa, parafuso e soldadura, os parafusos e a soldadura que fai, os seus avisos e {{ui:Apply to similar}}.
- **Zapata seleccionada:** a súa posición e tamaño, a malla inferior, as barras de arranque e as marcas de barra que usa.
- **Varios elementos seleccionados:** cantas barras de cada tipo, conexións e zapatas hai, o seu peso de aceiro, e {{ui:Copy}}, {{ui:Duplicate}} e {{ui:Delete}}.
- **Pegar:** o que hai no portapapeis, e formularios para pegar por un desprazamento escrito ou sobre unha intersección de cuadrícula que escolla das listas.

Os campos numéricos aplícanse ao premer {{key:Enter}} ou ao saír do campo. Cada cambio é un paso que pode desfacer.

## As lapelas de informes (abaixo)

- {{ui:Problems}}: todo o que DetailCraft non puido construír ou quere que vostede comprobe, cun botón {{ui:Select}} en cada liña. A lapela amosa o número entre parénteses.
- {{ui:Bill of materials}}: pezas, conxuntos, e parafusos e varillas de ancoraxe, con pesos e unha ligazón {{ui:Download CSV}}. Prema nunha marca de peza para seleccionar esa peza.
- {{ui:Bending schedule}}: cada marca de barra de cada zapata, con unha ligazón {{ui:Download CSV}}.

Con unha lapela enfocada, {{key:Left}} e {{key:Right}} moven entre lapelas.

## A barra de estado

A barra ao longo da parte inferior ten tres partes: a intersección de cuadrícula baixo o punteiro mentres se coloca, a última mensaxe (o que acaba de pasar ou por que se rexeitou algo) e os totais acumulados de pezas, parafusos, peso de aceiro e peso de armadura. Cando unha acción parece non facer nada, lea primeiro aquí a mensaxe.

O título da pestana do navegador comeza cun punto (•) mentres o modelo teña cambios sen gardar.

## Nunha pantalla estreita

Por debaixo de uns 760 píxeles de ancho, as columnas apílanse: barra de ferramentas, vista, barra de estado, {{ui:Properties}}, lapelas de informes e por último o panel {{ui:Model}}. Desprace a páxina para chegar a eles. DetailCraft está deseñado para unha pantalla de escritorio ou de portátil; un teléfono serve para mirar, non para detallar.
