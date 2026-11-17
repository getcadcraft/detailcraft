---
title: Teclas e accións do rato
summary: Cada atallo de teclado e cada acción do rato, do trackpad e da pantalla táctil en DetailCraft, tomados do código.
keywords: teclado, atallos, teclas de atallo, teclas, rato, trackpad, táctil, ctrl, command, folla de consulta
from: 05a2dea0
---

Como se escriben as teclas nesta axuda: [Teclas, ratos e trackpads](common:keys). Nun Mac, {{key:Mod}} é a tecla Command; noutros sistemas é Ctrl.

## Ferramentas

Estas funcionan cando o cursor non está nun campo de texto ou de números.

| Tecla | Fai |
|---|---|
| {{key:V}} | {{ui:Select}} |
| {{key:B}} | {{ui:Beam}} |
| {{key:C}} | {{ui:Column}} |
| {{key:R}} | {{ui:Brace}} |
| {{key:P}} | {{ui:Plate}} |
| {{key:F}} | {{ui:Footing}} |
| {{key:S}} | {{ui:Stair}} |
| {{key:M}} | Mover a selección elixindo dous cruzamentos de cuadrícula ([Seleccionar por xanela, mover, xirar, espellar, cambiar moitos](topic:select-and-change)) |
| {{key:Esc}} | Soltar unha xanela de selección que se arrastra, ou devolver as pezas arrastradas; cancelar un movemento, o primeiro punto dunha viga, riostra ou placa, ou un pegado; premer de novo para volver a {{ui:Select}}; en {{ui:Select}}, borrar a selección. Con o menú {{ui:More}} aberto, pecháeo |
| {{key:Delete}} ou {{key:Backspace}} | Eliminar a selección (todo o seleccionado, nun só paso de Desfacer) |

## Ficheiro e edición

| Tecla | Fai |
|---|---|
| {{key:Mod+S}} | Gardar o modelo (descarga). Funciona aínda escribindo nun campo |
| {{key:Mod+O}} | Abrir un modelo. Funciona aínda escribindo nun campo |
| {{key:Mod+Z}} | Desfacer (fóra dos campos de texto; dentro deles desfai o que escribiu) |
| {{key:Mod+Y}} ou {{key:Mod+Shift+Z}} | Refacer |

## Copiar e pegar

Estas funcionan cando o cursor non está nun campo de texto ou de números (alí copian, pegan e seleccionan o seu texto como de costume). Cada pegado, cortado, duplicado ou eliminación é un paso de Desfacer. Máis: [Copiar, pegar e duplicar](topic:copy-paste).

| Tecla | Fai |
|---|---|
| {{key:Mod+C}} | {{ui:Copy}} as barras e as zapatas seleccionadas (cos seus furos, recortes e unións) |
| {{key:Mod+X}} | {{ui:Cut}}: copiar a selección e logo eliminala |
| {{key:Mod+V}} | {{ui:Paste}}: a copia segue o punteiro; faga clic nunha intersección de cuadrícula para colocala |
| {{key:Mod+Shift+V}} | {{ui:Paste in place}}: nas coordenadas desde as que se copiou |
| {{key:Mod+D}} | {{ui:Duplicate}}: unha copia de inmediato, desprazada polo desfase das [configuración de DetailCraft](topic:settings) |
| {{key:Mod+A}} | {{ui:Select all}}: cada barra, unión e zapata |
| {{key:Esc}} | {{ui:Select none}} |

Se seleccionou texto na páxina (nunha táboa de informe, por exemplo) e nada no modelo, {{key:Mod+C}} copia o texto, como de costume.

{{ui:New}}, {{ui:Sample}} e as exportacións non teñen teclas; use a barra de ferramentas.

Ningunha destas teclas fai nada mentres estea aberto un diálogo (a vista previa do plano de taller ou unha pregunta).

## Campos e paneis

| Tecla | Fai |
|---|---|
| {{key:Enter}} ou {{key:Tab}} | Aplicar un valor escrito (cada cambio é un paso de Desfacer) |
| {{key:Enter}} nun campo de {{ui:Grids}}, {{ui:Levels}}, {{ui:Custom profile}}, furo ou recorte | O mesmo que escoller o botón dese formulario |
| {{key:Left}} {{key:Right}} | Moverse entre as lapelas {{ui:Problems}}, {{ui:Bill of materials}} e {{ui:Bending schedule}} cando unha lapela ten o foco |
| {{key:Esc}} | Pechar a vista previa do plano de taller ou un diálogo de pregunta (o mesmo que {{ui:Cancel}}) |

## Pantalla e axuda

| Tecla | Fai |
|---|---|
| {{key:Ctrl+Shift+F}} | Alternar entre normal, pantalla completa e pantalla completa con as barras ocultas. Control en todos os ordenadores, tamén nun Mac |
| {{key:Mod+,}} | Abrir {{ui:Settings}} ([Configuración de DetailCraft](topic:settings)) |
| {{key:Esc}} | Saír da pantalla completa |
| {{key:F1}} | Abrir esta axuda |

## Rato

| Acción | En 3D | En Planta e Alzado |
|---|---|---|
| Clic | Seleccionar unha peza, ou colocala na intersección máis próxima cando estea activa unha ferramenta de colocación (ou pegala aí durante un pegado) | O mesmo |
| {{key:Shift}}, {{key:Ctrl}} ou {{key:Mod}} e clic | Engadir a peza á selección, ou sacala | O mesmo |
| Premer sobre unha peza seleccionada e arrastrar | Mover a selección ao longo do nivel; con {{key:Mod}} premida, arriba e abaixo | Mover a selección (nun alzado: ao longo del e arriba e abaixo) |
| Arrastrar co botón esquerdo | Xirar o modelo | Con {{ui:Select}}: unha xanela de selección (cara á dereita: completamente dentro; cara á esquerda: tocando). Ao colocar: desprazar |
| {{key:Shift}} e arrastrar co botón esquerdo | Con {{ui:Select}}: unha xanela de selección, engadida á selección. Ao colocar: desprazar | Con {{ui:Select}}: unha xanela de selección, engadida á selección |
| {{key:Ctrl}} ou {{key:Mod}} e arrastrar co botón esquerdo | Desprazar | Nada |
| Arrastrar co botón dereito | Desprazar | Desprazar |
| Roda | Zoom cara ao centro da vista | Zoom |
| Arrastrar co botón central | Zoom | Con {{ui:Select}}: desprazar. Doutro xeito, zoom |
| Soltar un ficheiro `.detailcraft.json` na aplicación | Abrilo | Abrilo |

Un clic só conta se o punteiro se move menos de uns 5 píxeles entre o premido e a liberación; un movemento máis longo é un arrastre.

## Trackpad

| Acción | Fai |
|---|---|
| Pasar dous dedos cara arriba ou abaixo, ou pinzar | Zoom |
| Premer e arrastrar | Xirar (3D) ou desprazar (Planta e Alzado) |
| {{key:Shift}} e premer e arrastrar | Desprazar en 3D |
| Clic con dous dedos | Clic dereito (non hai menú na vista) |

## Táctil

Nun tablet ou nunha pantalla táctil:

| Acción | Fai |
|---|---|
| Toque | Seleccionar unha peza, ou colocala na intersección de cuadrícula máis próxima cando estea activa unha ferramenta de colocación (un toque a menos dun dedo de distancia tamén conta) |
| Premer longamente sobre unha peza | Engadila á selección, ou sacala (o que fai {{key:Shift}}+clic cun rato) |
| Un dedo sobre unha peza seleccionada e arrastrar | Mover a selección, encaixándoa nos cruzamentos da cuadrícula |
| Un dedo noutro lugar | Xirar o modelo (3D) ou desprazar (Planta e Alzado) |
| Dous dedos | Pinzar para facer zoom; mover xuntos para desprazar |

Botóns, listas e campos son máis grandes cando a pantalla é só táctil. As xanelas de selección precisan rato; con dedos, use o toque e o premido longo.

## Atallos que garda o navegador

Algúns atallos pertencen ao navegador e ningunha páxina os pode usar, por exemplo {{key:Mod+W}} (pechar pestana), {{key:Mod+T}} (nova pestana) e {{key:Mod+N}} (nova xanela). Se {{key:Mod+Y}} abre o historial do navegador en vez de refacer, use {{key:Mod+Shift+Z}}.

Os atallos chegan a DetailCraft só cando a páxina ten o teclado. Se unha tecla non fai nada, ou o navegador actúa sobre ela, faga clic primeiro nunha parte baleira da xanela de DetailCraft (por exemplo, despois de escribir na barra de enderezos).

## Onde está Mover

Non hai un comando Mover: seleccione unha peza e arrástreaa ao longo do nivel (manteña {{key:Mod}} premida para arrastrar cara arriba e abaixo), ou edite os seus {{ui:Start}} e {{ui:End}} en {{ui:Properties}}.
