---
title: Configuración de DetailCraft
summary: Empiece nuevos miembros como perfiles estadounidenses o europeos, defina qué tanto se desplaza una copia con Duplicar, elija si las copias llevan sus conexiones, y muestre u oculte pernos en la vista 3D.
keywords: configuración, preferencias, tamaño de hoja, tamaño de papel, planos, opciones, acero, aisc, en, europeo, perfiles estadounidenses, perfil predeterminado, grado, s355, a992, desfase de duplicado, desfase al pegar, copiar conexiones, pernos, barras de anclaje, ocultar pernos, restablecer
from: e46cea57
---

Abra {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:DetailCraft}}, contiene la configuración propia de esta aplicación; {{ui:General}} contiene la que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). La configuración de DetailCraft existe solo en la aplicación: la cambia aquí, surte efecto de inmediato y este navegador la recuerda. No se guarda en el archivo de su modelo.

## Miembros nuevos

Con qué perfiles y grados empiezan las herramientas de colocación:

| Herramienta | Perfiles estadounidenses (AISC), A992 | Perfiles europeos (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Columna}} | W12x50, A992 | HEB200, S355 |
| {{ui:Contraviento}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placa}} | A36 | S355 |

Los perfiles estadounidenses son el inicio. La opción europea usa un HEA160 para los contraventeos porque el catálogo EN de DetailCraft aún no tiene secciones huecas ([Catálogo de perfiles](topic:profile-catalog)). Aún puede elegir cualquier perfil y grado para la siguiente pieza en el panel {{ui:Propiedades}} mientras una herramienta de colocación esté activa. Los miembros que ya están en el modelo conservan su propio perfil y grado.

## Duplicar y pegar

- **Desfase (mm)**: x, y y z. {{ui:Duplicar}} ({{key:Mod+D}}) coloca la copia a esta distancia del original, y el formulario {{ui:Pegar con desfase (mm, desde el original)}} comienza con ella. Inicia en 6000, 0, 0: una crujía de 6 m a lo largo de los ejes numerados. Defínala con la separación de sus crujías, o con una altura de nivel en z para copiar un piso hacia arriba.
- **Copiar placas de extremo y placas base con sus miembros** (activado al inicio): una conexión se copia con una copia solo cuando se copian todos los miembros que une. Desmárquela para copiar miembros y zapatas sin sus conexiones, por ejemplo para probar una conexión distinta en la copia.

Vea [Copiar, pegar y duplicar](topic:copy-paste).

## Vista 3D

**Mostrar pernos y barras de anclaje** (activado al inicio). Desmárquelo para ocultarlos en la vista y ver los agujeros y placas de una unión congestionada. Los pernos ocultos no se pueden seleccionar con clic; haga clic en la placa para seleccionar la conexión. La lista de materiales, los planos y cada exportación siguen incluyendo todos los pernos y barras.

## Indicador de esquina

Lo que se muestra en la esquina de la vista 3D: **Cubo de vistas** (el inicial; arriba a la derecha: haga clic en una cara, arista o esquina para mirar desde allí, arrástrelo para orbitar, arrastre su anillo de brújula para girar el modelo), **Icono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X en rojo, Y en verde, Z en azul) o **Ninguno**. Solo aplica en {{ui:3D}}; {{ui:Planta}} y {{ui:Elevación}} no muestran ninguno. Vea [El cubo de vistas](topic:view-cube).

## Restablecer

{{ui:Restablecer configuración de DetailCraft}} en la parte inferior del cuadro de diálogo devuelve estas opciones a sus valores iniciales (perfiles estadounidenses, desfase 6000, 0, 0, conexiones copiadas, pernos visibles), junto con las de {{ui:General}}.

## Planos

**Tamaño de hoja**: los planos en hoja y los planos de taller se hacen en horizontal: A4, A3 (el inicial), A2, A1, ANSI B, ANSI C o ANSI D. Las ventanas de {{ui:Planos}} y de planos de taller tienen la misma lista. Vea [Planos de disposición general y de ensamble](topic:drawings).

## Varilla

- **Nombres de barra ASTM**: #3 a #11, o los métricos blandos #10 a #36 para las mismas barras.
- **Códigos de forma de la tabla de doblado**: los S, L, U de DetailCraft; los tipos de ACI 315; o los códigos de forma de BS 8666. Vea [Referencia de varillas](topic:rebar-reference).

## Arrastrar para seleccionar

**Rectángulo** (como antes) o **Lazo**: una línea a mano alzada, con {{key:Space}} para alternar entre dentro, tocando y borde mientras arrastra. Vea [Seleccionar con una ventana](topic:select-and-change#select-with-a-window).
