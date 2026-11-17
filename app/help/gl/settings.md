---
title: Configuración de DetailCraft
summary: Comece os elementos novos como perfís americanos ou europeos, escolla a distancia que move unha copia ao duplicar, decida se as copias levan as súas conexións, e amose ou oculte os parafusos na vista 3D.
keywords: configuración, preferencias, tamaño de folla, tamaño de papel, debuxos, opcións, aceiro, aisc, en, europeo, perfís americanos, perfís europeos, perfil predeterminado, calidade, s355, a992, desprazamento de duplicado, desprazamento de pegado, copiar conexións, parafusos, varas de ancoraxe, ocultar parafusos, restablecer
from: e46cea57
---

Abra {{ui:Configuración}} coa roda dentada da barra da aplicación ou con {{key:Mod+,}}. A primeira lapela, {{ui:DetailCraft}}, contén as configuracións propias desta aplicación; {{ui:Xeral}} contén as que comparten todas as aplicacións de CadCraft (tema, barra de ferramentas, paneis). As configuracións de DetailCraft existen só na aplicación: cámbiaas aquí, aplícanse de inmediato e este navegador recórdaas. Non se gardan no ficheiro do modelo.

## Elementos novos

Cos perfís e calidades coas que comezan as ferramentas de colocación:

| Ferramenta | Perfís americanos (AISC), A992 | Perfís europeos (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Piar}} | W12x50, A992 | HEB200, S355 |
| {{ui:Riostra}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placa}} | A36 | S355 |

Os perfís americanos son o inicio. A opción europea usa un HEA160 para as riostras porque o catálogo EN de DetailCraft aínda non ten perfís ocos ([Catálogo de perfís](topic:profile-catalog)). Aínda pode escoller calquera perfil e calidade para a seguinte peza no panel {{ui:Propiedades}} mentres unha ferramenta de colocación estea activa. Os elementos que xa están no modelo conservan o seu propio perfil e calidade.

## Duplicar e pegar

- **Desprazamento (mm)**: x, y e z. {{ui:Duplicar}} ({{key:Mod+D}}) coloca a copia a esta distancia do orixinal, e o formulario {{ui:Pegar por desprazamento (mm, desde o orixinal)}} comeza con ela. Comeza en 6000, 0, 0: un ván de 6 m ao longo das liñas numeradas. Estableza o espazamento dos seus váns, ou unha altura de nivel en z para copiar un piso cara arriba.
- **Copiar placas de extremo e placas base cos seus elementos** (activado de inicio): unha conexión vai con unha copia só cando se copia cada elemento que une. Desmárquese para copiar elementos e zapatas sen as súas conexións, por exemplo para probar outra conexión na copia.

Vexa [Copiar, pegar e duplicar](topic:copy-paste).

## Vista 3D

**Mostrar parafusos e varas de ancoraxe** (activado de inicio). Desmárquese para ocultalos na vista e ver os buratos e as placas dunha unión cargada. Os parafusos ocultos non se poden premer; prema na placa para seleccionar a conexión. A lista de materiais, os debuxos e cada exportación seguen incluíndo todos os parafusos e varas.

## Indicador da esquina

O que se amosa na esquina da vista 3D: **Cubo de vista** (o de inicio; arriba á dereita — prema nunha cara, arista ou esquina para mirar desde alí, arrástreo para orbitar, arrastre o seu anel de brúxula para xirar o modelo), **Icona de eixes** (un pequeno marcador X, Y, Z abaixo á esquerda que xira coa vista: X vermello, Y verde, Z azul) ou **Ningún**. Só en {{ui:3D}}; {{ui:Planta}} e {{ui:Alzado}} non amosan ningún dos dous. Vexa [O cubo de vista](topic:view-cube).

## Restablecer

{{ui:Restablecer a configuración de DetailCraft}} na parte inferior do diálogo devolve estas ao inicio (perfís americanos, desprazamento 6000, 0, 0, conexións copiadas, parafusos amosados), xunto coas de {{ui:Xeral}}.

## Debuxos

**Tamaño da folla**: os debuxos de folla e os debuxos de taller fanse en horizontal: A4, A3 (o de inicio), A2, A1, ANSI B, ANSI C ou ANSI D. As xanelas de {{ui:Debuxos}} e de debuxos de taller teñen a mesma lista. Vexa [Debuxos de disposición xeral e de conxunto](topic:drawings).

## Armadura

- **Nomes de barra ASTM**: #3 a #11, ou os métricos blandos #10 a #36 para as mesmas barras.
- **Códigos de forma do cadro de dobrado**: os S, L, U de DetailCraft; os tipos da ACI 315; ou os códigos de forma da BS 8666. Vexa [Referencia de armadura](topic:rebar-reference).

## Arrastrar para seleccionar

**Rectángulo** (como antes) ou **Laso**: unha liña a man alzada, con {{key:Space}} alternando entre dentro, tocar e valado mentres arrastra. Vexa [Seleccionar cunha xanela](topic:select-and-change#select-with-a-window).
