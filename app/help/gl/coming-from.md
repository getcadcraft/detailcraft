---
title: Vindo doutro software de detallado
summary: Como os hábitos dun paquete completo de detallado se corresponden con DetailCraft, e as diferenzas que sorprenden aos detalladores con experiencia.
keywords: cambio, migración, familiar, fluxo de traballo, comparación, diferenzas, numeración, compoñentes, catálogo, debuxos, hábitos
from: 39639a5d
---

Se detalla en Tekla Structures, a maior parte de DetailCraft resultaralle familiar: cuadrículas, niveis, perfís dun catálogo, pezas e conxuntos, conexións, numeración, ficheiros NC, IFC. A escala é moi distinta: Tekla Structures é un sistema de produción completo, e DetailCraft é unha aplicación de navegador pequena e en fase inicial que fai uns poucos traballos de principio a fin. Esta páxina indica onde os seus hábitos se manteñen e onde non.

:::tip
Se as súas mans coñecen a cinta de Tekla Structures, escolla o estilo de menú {{ui:Cinta de aceiro}} en {{ui:Configuración}} › {{ui:DetailCraft}} › {{ui:Menús, teclas e rato}}: as lapelas Modelado, Detallado, Edición, Debuxos, Fabricación e Vista, e o botón central desprázase. Se vén de AutoCAD e lle gusta escribir comandos, {{ui:Debuxo clásico 2D}} engade unha liña de comandos (BEAM, COLUMN, ENDPLATE, ZOOM …). Vexa [Menús, teclas e rato](topic:menus-keys-and-mouse).
:::

## Mapa rápido

| Está afeito a | En DetailCraft |
|---|---|
| Crear cuadrículas con coordenadas nun diálogo de cuadrícula | {{ui:Cuadrículas}} no panel esquerdo: etiquetas e distancias entre liñas, non coordenadas absolutas. As liñas numeradas corren nun sentido, e as liñas con letras no outro |
| Niveis como coordenadas Z da cuadrícula | Unha lista {{ui:Niveis}} separada, con nome e cota por fila, aplicada con {{ui:Aplicar niveis}} |
| Escoller puntos en calquera lugar con enganches | Os clics enganchan só a intersección de cuadrícula. Os puntos fóra de cuadrícula escríbense en {{ui:Extremos (x, y, z mm)}} dun membro |
| Os comandos de piar, viga e placa | {{ui:Piar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}), {{ui:Riostra}} ({{key:R}}), {{ui:Placa}} ({{key:P}}), {{ui:Zapata}} ({{key:F}}) |
| Diálogo de propiedades da peza (dobre clic sobre a peza) | Un clic: o panel {{ui:Propiedades}} da dereita está sempre activo; non hai diálogo nin botóns Modificar nin Aplicar |
| Posición no plano, axustes de rotación e profundidade | {{ui:Posición}} (parte superior do aceiro, centrado ou inferior na liña) e {{ui:Rotación (°)}}. Non hai desprazamentos horizontais separados |
| O catálogo de perfís | Unha lista fixa de 2.311 medidas publicadas (AISC W, S, C, L, HSS, Pipe; europeos IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS e seccións ocas conformadas en frío), máis placas paramétricas e as súas propias seccións {{ui:Perfil personalizado}} |
| Catálogo de materiais | Sete calidades nunha lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar un compoñente de conexión e o seu diálogo | Seleccione a viga e escolla {{ui:Placas de extremo}}. Os axustes aparecen no panel {{ui:Propiedades}}. Só existen dúas conexións (placa de extremo á aba do piar, e placa base) |
| Conexión automática, ou copiar unha unión a uniones similares | Seleccione unha conexión e escolla {{ui:Aplicar a similares (n)}} |
| Numeración con series e números de inicio | Sen comando: as marcas se actualizan soas despois de cada cambio, con prefixos fixos c, b, br, p e C, B, BR, P |
| Diálogos de parafusos e furos | Os furos escríbense por cara e posición. Os parafusos veñen só das conexións |
| Ferramentas de corte, axuste e corte poligonal | Recortes (superior ou inferior, en calquera extremo) só en perfís I. Os recortes de conexión son automáticos |
| Informes e modelos | Tres informes fixos en lapelas na parte inferior, e descargas en CSV |
| Creación de debuxos e lista de debuxos | Un debuxo de taller por marca de peza, feitos todos á vez, vistos previamente e descargados como un PDF ou folla a folla. Non se garda nin se edita nada |
| Exportación de ficheiros NC | {{ui:Ficheiros NC}}: un ficheiro DSTV por marca de peza, só perfís I e placas, comprimido |
| Exportación IFC | {{ui:IFC}}: IFC4 de todo o modelo, con armadura |
| Armadura en calquera peza de formigón | Armadura só en zapatas rectangulares de placa, tamaños de barra US, con malla inferior e barras de espera |
| Modelo gardado nunha carpeta de proxecto, con varios usuarios | Un ficheiro `.detailcraft.json` que descarga. Un só usuario, no seu ordenador |
| Historial de desfacer | {{key:Mod+Z}} e {{key:Mod+Y}}, ata 200 pasos, conservados ata que abre ou inicia outro modelo |

## Diferenzas que confunden á xente

### As marcas cambian soas

Non hai un paso de numeración. As marcas se recalculan despois de cada cambio, así que sempre están ao día, pero tamén poden renumerarse: engada un piar e o c3 de onte pode ser agora c4. Non hai un "historial de numeración" para conservar marcas antigas. Remate o modelo e despois emita a lista de materiais, os ficheiros NC e os debuxos de taller xuntos, desde un ficheiro gardado.

### O botón central do rato fai zoom; non desprazar

Na vista 3D: o arrastre co botón esquerdo xira, o arrastre co dereito desprazamento, a roda fai zoom, e arrastrar co botón central tamén fai zoom. Manter {{key:Shift}} mentres arrastra co botón esquerdo tamén desprazamento. A roda fai zoom cara ao centro da vista, non cara ao punteiro. Non hai escolla de centro de xiro: o modelo xira ao redor do centro da vista. Vexa [Moverse pola vista 3D](topic:navigate-3d).

### Os piares miran por defecto nunha dirección

Coa rotación 0 as ás dun piar miran ao longo da dirección da cuadrícula numerada. As vigas que corren entre liñas con letras enmárcanse no alma, e as placas de extremo son rexeitadas alí ("As vigas que enmarcan nun alma de piar aínda non se constrúen"). Xire eses piares 90° antes de engadir conexións.

### Os alzados só en liñas con letras

{{ui:Alzado}} mira só ao longo das liñas de cuadrícula con letras. Non hai vistas ao longo das liñas numeradas, nin vistas gardadas, nin planos de traballo. Use {{ui:3D}} ou {{ui:Engadir pola cuadrícula}} para marcos nas liñas numeradas.

### Selección, copia e desprazamento

Seleccione varias pezas con {{key:Shift}}+clic ou {{key:Mod+A}}, despois copie, corte, pegue (sobre unha intersección de cuadrícula, cun desprazamento escrito, ou no mesmo sitio) e duplique, incluídas as conexións ([Copiar, pegar e duplicar](topic:copy-paste)). Non hai selección por xanela, nin filtro de selección, nin desprazar, espellar ou matriz, e as propiedades cámbianse un membro por vez no panel {{ui:Propiedades}}.

### As cuadrículas non arrastran os membros

Os membros conservan as súas coordenadas cando cambia a separación da cuadrícula; nada se move coas liñas. Cambie a cuadrícula antes de colocar o aceiro, ou edite despois as coordenadas de cada extremo do membro.

### As conexións non se deseñan

As dúas conexións colocan placas, furos, parafusos e soldaduras a partir dos números que vostede dá. Non hai comprobación de deseño de ningún tipo, só avisos de bordo e separación (da EN 1993-1-8 Táboa 3.3).

### Os furos non se cortan na vista 3D

Os furos aparecen como tapóns escuros. Son furos reais nos ficheiros NC, nos debuxos de taller e no ficheiro IFC. Os recortes si se cortan na vista.

### Os pesos son brutos

O peso do aceiro non desconta furos nin recortes, e o peso dos parafusos non se inclúe.

### Só milímetros

Todo se escribe e se mostra en milímetros, incluso para as formas AISC. Os nomes de perfil consérvanse na súa forma publicada (W12x50, HSS6x6x1/4).

### Non hai debuxos que xestionar

Non hai lista de debuxos, editor de debuxos, nin debuxos xerais de disposición ou de montaxe. Un debuxo de taller faise cando o pide e descárgase; para cambialo, cambie o modelo e fágao de novo.

### Funciona nun navegador

Gardar descarga un ficheiro. Os atallos de teclado que o navegador reserva para si non se poden usar. Os seus modelos nunca saen do seu ordenador: vexa [Onde van os teus ficheiros](common:your-files).

## Que seguir facendo no seu software actual

Hoxe DetailCraft convén a marcos pequenos, a comprobar unha idea, a ensinar, ou a producir ficheiros NC e debuxos de taller para traballos sinxelos de vigas e piares. Siga usando o software que ten agora para conexións complexas, debuxos xerais de disposición, debuxos de montaxe, proxectos de varios usuarios e todo o que figure en [O que aínda non está feito](topic:not-built-yet).
