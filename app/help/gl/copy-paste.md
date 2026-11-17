---
title: Copiar, pegar e duplicar
summary: Seleccione varias pezas, copie as cos seus buratos, recortes e conexións, e péguea nunha intersección da cuadrícula, cun desprazamento, no mesmo sitio ou noutra pestana. Cortar, duplicar, eliminar e seleccionar todo.
keywords: copiar, pegar, cortar, duplicar, portapapeis, pegar no mesmo sitio, seleccionar todo, deseleccionar todo, selección múltiple, clic con Shift, varios, repetir un tramo, copiar un marco, desprazamento, eliminar varios, menú editar, menú máis
from: f25f1829
---

O grupo {{ui:Edit}} da barra de ferramentas ten {{ui:Undo}}, {{ui:Redo}}, {{ui:Copy}} e {{ui:Paste}}. O seu menú {{ui:More}} contén o resto: {{ui:Cut}}, {{ui:Copy}}, {{ui:Paste}}, {{ui:Paste in place}}, {{ui:Duplicate}}, {{ui:Delete}}, {{ui:Select all}} e {{ui:Select none}}, cada un coa súa tecla. Un botón ou elemento de menú que non pode actuar neste momento aparece en gris; pase o punteiro por riba para ler o motivo (por exemplo, «aínda non se copiou nada»).

Cada pegado, cortado, duplicado e eliminación é un só paso: un {{key:Mod+Z}} desfai todo.

## Seleccionar varias pezas

- Faga clic nunha peza para seleccionala. Manteña premida {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) e faga clic en máis pezas para engadilas; faga clic nunha seleccionada do mesmo xeito para quitala.
- {{key:Mod+A}} ou {{ui:Select all}} selecciona todas as barras, conexións e sapatas.
- {{key:Esc}} ou {{ui:Select none}} borra a selección.

Cando hai varios elementos seleccionados, o panel {{ui:Properties}} ten como título «4 seleccionados» (ou o número que sexa) e enumera as barras por tipo, as conexións, as sapatas e o peso bruto do aceiro, cos botóns {{ui:Copy}}, {{ui:Duplicate}} e {{ui:Delete}}.

## Copiar

1. Seleccione as barras e as sapatas que quere.
2. Escolla {{ui:Copy}} ou prema {{key:Mod+C}}.

Que se copia:

- Cada barra completa: perfil, material, extremos, posición, rotación, nome, buratos e recortes. Tamén se copia calquera perfil personalizado que use.
- Cada sapata completa: dimensións, formigón, malla inferior e barras de arranque.
- Placas de extremo e placas base, pero só cando se copian todas as barras que une unha conexión: a placa de extremo dunha viga necesita a viga e o seu piar. A barra de estado indica cantas conexións quedaron fóra. Para deixar conexións fóra a propósito, desmarque **Copiar placas de extremo e placas base cos seus elementos** en [configuración de DetailCraft](topic:settings).

Unha conexión non se pode copiar por si soa; seleccione as súas barras. Para dar a outras uniones a mesma conexión, use {{ui:Similar}} (ver [Placas de extremo](topic:end-plates#copy-it-to-every-similar-joint)).

A copia permanece neste navegador ata que copie outra cousa. Outra pestana ou xanela de DetailCraft no mesmo navegador pode pegala, así que pode copiar un marco dun modelo e pegalo noutro.

## Pegar nunha intersección da cuadrícula

1. Escolla {{ui:Paste}} ou prema {{key:Mod+V}}.
2. Mova o punteiro sobre a vista. Un contorno discontinuo da copia segue a intersección da cuadrícula máis próxima ao punteiro.
3. Faga clic nunha intersección. O punto base da copia (a súa esquina máis baixa: o menor x, y e z de todo o copiado) cae ali.

As pezas pegadas quedan seleccionadas despois, así que pode pegar de novo noutro lugar ou cambialas. {{key:Esc}} cancela un pegado; a copia permanece no portapapeis. {{ui:Plan}} e {{ui:Elevation}} facilitan acertar na intersección correcta.

:::tip
Para repetir un tramo, seleccione as barras do tramo (ou todo con {{key:Mod+A}}), copie, pegue e faga clic na intersección un tramo máis aló de onde estaba a esquina máis baixa da copia.
:::

## Pegar desde o teclado

Mentres pega, o panel {{ui:Properties}} mostra o que hai no portapapeis e dous formularios:

- {{ui:Paste by offset (mm, from the original)}}: escriba x, y e z e escolla {{ui:Paste at this offset}}. Comeza co desprazamento de [configuración de DetailCraft](topic:settings).
- {{ui:Paste onto a grid intersection}}: escolla unha cuadrícula con letras, unha cuadrícula numerada e un nivel, e escolla {{ui:Paste here}}. O punto base vai alí.

## Pegar no mesmo sitio

{{ui:Paste in place}} ({{key:Mod+Shift+V}}) coloca a copia exactamente nas coordenadas desde as que se copiou. Úseo despois de {{ui:Cut}}, ou para traer pezas doutro modelo ao mesmo lugar. Se os orixinais seguen alí, a copia queda enriba deles e a barra de estado avísao: mova as copias polos seus {{ui:Start}} e {{ui:End}} en {{ui:Properties}}, ou desfaga.

## Duplicar

{{ui:Duplicate}} ({{key:Mod+D}}) copia a selección e pégaa de inmediato, desprazada polo desprazamento de [configuración de DetailCraft](topic:settings) (6000 mm ao longo de x para empezar). Non cambia o que hai no portapapeis. As copias quedan seleccionadas despois, así que premer de novo {{key:Mod+D}} fai a seguinte a partir delas.

## Cortar e eliminar

- {{ui:Cut}} ({{key:Mod+X}}) copia a selección e despois a elimina. Pégueaa onde corresponda.
- {{ui:Delete}} ({{key:Delete}} ou {{key:Backspace}}) elimina a selección. Eliminar unha barra elimina tamén as súas conexións.

## Marcas despois dun pegado

As marcas de peza e de conxunto non se almacenan; DetailCraft volve numeralas a partir do modelo despois de cada cambio ([Como se asignan as marcas](topic:mark-rules)). Así:

- Unha copia que é a mesma peza que o orixinal (mesmo perfil, calidade, lonxitude de corte, buratos e recortes) comparte a marca do orixinal, e o recontó en {{ui:Part marks}} e na lista de materiais aumenta.
- Unha copia que resulta diferente recibe unha marca propia. Unha viga pegada sen as súas placas de extremo, por exemplo, non se corta, así que é unha peza diferente. As marcas volven numerarse en todo o modelo, así que os números doutras pezas tamén poden cambiar.

Cada barra, burato, recorte, conexión e sapata pegada recibe un identificador novo, así que nada do modelo se comparte nunca entre unha copia e o seu orixinal.

## Se o portapapeis é rexeitado

O contido do portapapeis compróbase con tanto coidado como un ficheiro de modelo que abra: calquera elemento que non sexa unha peza válida de DetailCraft descártase, e a barra de estado di cal. Un portapapeis cheo por un DetailCraft máis novo, ou por outra cousa, recházase cunha mensaxe e non se pega nada. Se unha xanela privada non pode gardar a copia no almacenamento do navegador, a copia segue funcionando nesa pestana.
