---
title: Configuración de DetailCraft
summary: Empezá los miembros nuevos como perfiles US o europeos, elegí cuánto se corre una copia con Duplicar, decidí si las copias traen sus conexiones, y mostrá u ocultá los pernos en la vista 3D.
keywords: configuración, preferencias, tamaño de hoja, tamaño de papel, planos, opciones, acero, aisc, en, perfiles europeos, perfiles us, perfil predeterminado, grado, s355, a992, desplazamiento de duplicado, desplazamiento de pegado, copiar conexiones, pernos, barras de anclaje, ocultar pernos, restablecer
from: e46cea57
---

Abrí {{ui:Configuración}} con el engranaje de la barra de la aplicación o con {{key:Mod+,}}. La primera pestaña, {{ui:DetailCraft}}, tiene las configuraciones propias de esta aplicación; {{ui:General}} tiene las que comparten todas las aplicaciones de CadCraft (tema, barra de herramientas, paneles). Las configuraciones de DetailCraft existen solo en la aplicación: las cambiás acá, se aplican de inmediato y este navegador las recuerda. No se guardan en el archivo del modelo.

## Miembros nuevos

Con qué perfiles y grados empiezan las herramientas de colocación:

| Herramienta | Perfiles US (AISC), A992 | Perfiles europeos (EN), S355 |
|---|---|---|
| {{ui:Viga}} | W16x26, A992 | IPE300, S355 |
| {{ui:Columna}} | W12x50, A992 | HEB200, S355 |
| {{ui:Riostra}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Placa}} | A36 | S355 |

El punto de partida es perfiles US. La opción europea usa un HEA160 para las riostras porque el catálogo EN de DetailCraft todavía no tiene perfiles huecos ([Catálogo de perfiles](topic:profile-catalog)). Igual podés elegir cualquier perfil y grado para la próxima pieza en el panel {{ui:Propiedades}} mientras una herramienta de colocación esté activa. Los miembros que ya están en el modelo conservan su propio perfil y grado.

## Duplicar y pegar

- **Desplazamiento (mm)**: x, y y z. {{ui:Duplicar}} ({{key:Mod+D}}) pone la copia a esta distancia del original, y el formulario {{ui:Pegar por desplazamiento (mm, desde el original)}} empieza con él. Arranca en 6000, 0, 0: un vano de 6 m a lo largo de las grillas numeradas. Ponelo en tu separación de vanos, o en una altura de nivel en z para copiar un piso hacia arriba.
- **Copiar placas de extremo y placas base junto con sus miembros** (activado al empezar): una conexión viene con una copia solo cuando todos los miembros que une se copian. Desmarcalo para copiar miembros y zapatas sin sus conexiones, por ejemplo para probar otra conexión en la copia.

Ver [Copiar, pegar y duplicar](topic:copy-paste).

## Vista 3D

**Mostrar pernos y barras de anclaje** (activado al empezar). Desmarcalo para ocultarlos en la vista y ver los agujeros y placas de una unión cargada. Los pernos ocultos no se pueden hacer clic; hacé clic en la placa para seleccionar la conexión. La lista de materiales, los planos y todas las exportaciones siguen incluyendo cada perno y barra.

## Indicador de esquina

Qué se muestra en la esquina de la vista 3D: **Cubo de vista** (el inicial; arriba a la derecha: hacé clic en una cara, arista o esquina para mirar desde allí, arrastralo para orbitar, arrastrá su anillo de brújula para girar el modelo), **Ícono de ejes** (un pequeño marcador X, Y, Z abajo a la izquierda que gira con la vista: X rojo, Y verde, Z azul) o **Ninguno**. Solo en {{ui:3D}}; {{ui:Planta}} y {{ui:Elevación}} no muestran ninguno. Ver [El cubo de vista](topic:view-cube).

## Restablecer

{{ui:Restablecer configuración de DetailCraft}} al pie del diálogo devuelve estas configuraciones al inicio (perfiles US, desplazamiento 6000, 0, 0, conexiones copiadas, pernos visibles), junto con las de {{ui:General}}.

## Planos

**Tamaño de hoja**: los planos de hojas y los planos de taller se hacen en horizontal, en A4, A3 (el inicial), A2, A1, ANSI B, ANSI C o ANSI D. Las ventanas de {{ui:Planos}} y de plano de taller tienen la misma lista. Ver [Planos de disposición general y de conjunto](topic:drawings).

## Hierro de refuerzo

- **Nombres de barra ASTM**: #3 a #11, o los #10 a #36 blandos métricos para las mismas barras.
- **Códigos de forma de la planilla de doblado**: los S, L, U de DetailCraft; los tipos ACI 315; o los códigos de forma BS 8666. Ver [Referencia de hierro de refuerzo](topic:rebar-reference).

## Arrastre para seleccionar

**Rectángulo** (como antes) o **Lazo**: una línea a mano alzada, con {{key:Space}} cambiando entre adentro, tocando y cerca mientras arrastrás. Ver [Seleccionar con una ventana](topic:select-and-change#select-with-a-window).
