---
title: Moverse pola vista 3D
summary: Xirar, desprazar e facer zoom cun rato, un trackpad ou unha pantalla táctil, e cando usar Planta e Alzado.
keywords: orbitar, xirar, desprazar, zoom, navegar, vista, cámara, trackpad, táctil, planta, alzado, axustar, rato
from: 02c9c7b9
---

A vista ten tres modos, escollidos na barra de vista enriba dela: {{ui:3D}}, {{ui:Plan}} e {{ui:Elevation}}. Os botóns do rato fan cousas distintas en 3D que en Planta e Alzado, así que lea as dúas táboas.

## En 3D

:::mouse
| Para | Faga isto |
|---|---|
| Xirar ao redor do modelo | Arrastrar co botón esquerdo |
| Desprazar | Arrastrar co botón dereito, ou manter {{key:Shift}} e arrastrar co botón esquerdo |
| Facer zoom | Xirar a roda, ou arrastrar cara arriba e abaixo co botón central (co botón premido) |
| Seleccionar unha peza | Facer clic nela (un clic que se move menos de uns píxeles) |
| Ver todo o modelo | O botón de axuste no extremo dereito da barra de vista |
:::

:::touch
| Para | Faga isto |
|---|---|
| Xirar ao redor do modelo | Arrastrar cun dedo |
| Desprazar | Arrastrar con dous dedos |
| Facer zoom | Pinzar con dous dedos |
| Seleccionar unha peza | Tocala |
| Ver todo o modelo | O botón de axuste no extremo dereito da barra de vista |
:::

O cubo de vista arriba á dereita (debaixo da barra de vista) xira co modelo: faga clic nunha cara, aresta ou vértice para mirar desde alí, arrástreo para xirar, ou faga clic no seu botón de inicio para volver ao punto de partida. Vexa [O cubo de vista](topic:view-cube).

O modelo xira ao redor do centro da vista, e a roda fai zoom cara ao centro da vista, non cara ao punteiro. Para mirar de preto unha esquina, desprácea primeiro ao centro e logo faga zoom.

## En Planta e Alzado

Estas vistas miran directamente o modelo e non se poden xirar.

:::mouse
| Para | Faga isto |
|---|---|
| Desprazar | Arrastrar co botón esquerdo ou co dereito |
| Facer zoom | Xirar a roda, ou arrastrar cara arriba e abaixo co botón central |
| Seleccionar unha peza | Facer clic nela |
:::

:::touch
| Para | Faga isto |
|---|---|
| Desprazar | Arrastrar cun dedo |
| Facer zoom | Pinzar con dous dedos (arrastrar con dous dedos tamén despraza) |
| Seleccionar unha peza | Tocala |
:::

## Nun trackpad de Mac

:::mac
- **Zoom:** pasar dous dedos cara arriba ou abaixo, ou pinzar. Ambos chegan á vista como zoom.
- **Xirar (3D):** premer o trackpad e arrastrar cun dedo. Se usa tocar para facer clic, o toque dobre e arrastrar tamén funciona cando o arrastre está activado en **Axustes do sistema, Accesibilidade, Control do punteiro, Opcións do trackpad**.
- **Desprazar (3D):** manter {{key:Shift}} e arrastrar. Manter {{key:Ctrl}} ou {{key:Mod}} mentres se arrastra tamén despraza. Un clic con dous dedos é un clic dereito, pero arrastrar con el é incómodo nun trackpad.
- **Desprazar (Planta e Alzado):** só arrastrar.
- Un Magic Mouse non ten botón central: use o arrastre con {{key:Shift}} para desprazar e un pasar sobre a súa superficie para facer zoom.
:::

Máis sobre o clic dereito e o desprazamento sen rato: [Teclas, ratos e trackpads](common:keys).

## Planta e Alzado facilitan a colocación

En {{ui:3D}}, os cruzamentos de niveis distintos poden quedar superpostos na pantalla, e un clic vai ao punto máis próximo. En {{ui:Plan}} e {{ui:Elevation}} só se poden escoller os puntos do nivel ou da liña de cuadrícula que está mirando.

1. Escolla {{ui:Plan}} e logo un nivel na lista ao lado dos botóns. A vista mira cara abaixo a ese nivel; todo o que estea a máis de 1,5 m por enriba del queda recortado.
2. Ou escolla {{ui:Elevation}} e logo unha liña de cuadrícula con letra ("Cuadrícula A", "Cuadrícula B" …). A vista mira directamente a esa liña; só se mostra o aceiro a menos de 1 m dela.

Os alzados só existen nas liñas de cuadrícula con letra. Para traballar nunha liña de cuadrículas numeradas (un pórtico que vai de A a B), use {{ui:3D}}, ou coloque escribindo no formulario {{ui:Add by grid}}. Vexa [Colocar piares, vigas e riostras](topic:place-members#place-by-grid-without-clicking).

## Seleccionar

- Faga clic nunha peza para seleccionala. Esta toma a cor de resalte e o panel {{ui:Properties}} móstraa.
- Faga clic nun espazo baleiro, ou prema {{key:Esc}}, para borrar a selección.
- O aceiro gaña ao formigón: un clic nun piar dentro dunha zapata transparente selecciona o piar. Faga clic na zapata lonxe do piar, ou nunha das súas barras, para seleccionar a zapata.
- Facer clic nun parafuso ou nunha placa de extremo selecciona a súa unión.
- En Planta e Alzado, as pezas recortadas non se poden picar.
- Manteña {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) e faga clic para engadir unha peza á selección ou sacala; {{key:Mod+A}} selecciona todo. Aínda non hai selección por xanela (arrastrar unha caixa). O que pode facer con varias: [Copiar, pegar e duplicar](topic:copy-paste).

Tamén pode seleccionar desde as listas: faga clic nunha marca en {{ui:Part marks}} á esquerda, nunha marca de peza na lapela {{ui:Bill of materials}}, ou en {{ui:Select}} xunto a unha liña de {{ui:Problems}}.

## Se a vista parece mal

- Perdeu o modelo? Escolla o botón de axuste.
- A vista está en branco ou gris cunha mensaxe sobre WebGL: vexa [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Todo segue funcionando sen a vista 3D, agás o clic nela: os paneis, os informes e as exportacións funcionan todos, e {{ui:Add by grid}} coloca os elementos escribindo.
