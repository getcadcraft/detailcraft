---
title: Abrir, guardar y exportar archivos
summary: El archivo de modelo de DetailCraft, cada exportación que escribe, a dónde van los archivos y qué cambia según el navegador y la conexión.
keywords: abrir, guardar, exportar, descargar, archivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: bd715ea3
---

DetailCraft tiene un solo archivo propio, el modelo, y cinco exportaciones. Cada guardado y cada exportación es una descarga. No se sube nada y no se conserva nada en un servidor.

## El archivo de modelo

Un modelo de DetailCraft se guarda como `<nombre>.detailcraft.json`, donde `<nombre>` es el nombre del modelo en el panel {{ui:Modelo}}. Contiene los ejes, niveles, miembros (con sus agujeros y despuntes), conexiones y sus ajustes, zapatas y sus perfiles personalizados.

Las piezas, marcas, pernos, soldaduras y varillas no se almacenan: DetailCraft las calcula de nuevo a partir del modelo cada vez que abre. Por eso un archivo de modelo es pequeño.

### Guardar

1. Escriba un nombre en el campo {{ui:Nombre}}, arriba del panel {{ui:Modelo}}.
2. Elija {{ui:Guardar}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
3. El navegador descarga `<nombre>.detailcraft.json`. La barra de estado dice "Saved … (downloaded)" y el punto al inicio del título de la pestaña del navegador desaparece.

Cada guardado es una descarga nueva. El navegador no sobrescribe el archivo que abrió; según su configuración agrega un número al nombre, como `Frame (1).detailcraft.json`, o pregunta dónde guardar. Conserve sus propias versiones cambiando el nombre de las descargas.

:::chromium
Chrome y Edge guardan en su carpeta Descargas a menos que **Preguntar dónde guardar cada archivo antes de descargarlo** esté activado en la configuración de descargas del navegador. Actívelo si desea elegir carpeta y nombre de archivo cada vez.
:::

:::firefox
Firefox guarda en su carpeta Descargas, o pregunta cada vez si **Preguntar siempre dónde guardar los archivos** está activado en su configuración.
:::

:::safari
Safari guarda en su carpeta Descargas. Para cambiar la carpeta, abra **Safari, Configuración, General, Ubicación de descarga de archivos**.
:::

### Abrir

1. Elija {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Escoja un archivo `.detailcraft.json`.

O arrastre el archivo desde {{pick:mac=Finder|windows=el Explorador de archivos|linux=su administrador de archivos}} y suéltelo sobre la vista. La vista dice "Drop a DetailCraft model to open it" mientras arrastra.

Si el modelo abierto tiene cambios sin guardar, DetailCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

DetailCraft revisa cada campo de un archivo antes de usarlo. Lo que no puede usar se deja fuera y la barra de estado dice qué, por ejemplo "2 members were not valid and left out." Un modelo guardado por una versión más nueva de DetailCraft se rechaza con un mensaje en lugar de abrirse a medias.

### Qué abre

Sus propios archivos de modelo (`.json`, hasta 50 MB) y archivos IFC (`.ifc`, IFC2X3 o IFC4, hasta 200 MB). Un archivo IFC, abierto o traído con {{ui:Importar IFC}}, se convierte en un modelo nuevo con sus vigas, columnas, miembros, placas, ejes y niveles, con los agujeros y despuntes cortados en ellos y sus pernos como pernos sueltos; un informe enumera lo que se dejó fuera. Vea [Exportar IFC](topic:ifc-export#import). Todavía no abre DWG, DXF ni el modelo de otro programa de detallado; al intentarlo aparece "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Trabajo perdido, archivos recientes, la aplicación de escritorio

- Mientras el modelo tenga cambios sin guardar, DetailCraft conserva una copia en este navegador. Si la pestaña o el navegador se detienen antes de que guarde, la próxima vez que abra DetailCraft pregunta **Recover your work?**: recupere la copia o descártela. Vea [Recupere su trabajo](common:recover).
- Los modelos que abrió hace poco aparecen en la pantalla de inicio cuando el navegador permite a DetailCraft abrirlos de nuevo; haga clic en uno para reabrirlo.
- En la aplicación de escritorio, {{ui:Guardar}} escribe el modelo de vuelta en el archivo que abrió (en el navegador descarga una copia), y al hacer doble clic en un modelo de DetailCraft o en un archivo IFC se abre en DetailCraft.

## Exportaciones

Todas las exportaciones usan el nombre del modelo. Elíjalas en el grupo {{ui:Salida}}.

| Botón | Archivo | Qué contiene |
|---|---|---|
| {{ui:IFC}} | `<nombre>.ifc` | IFC4: niveles, ejes, cada pieza de acero como una extrusión de perfil con sus agujeros y despuntes, ensamblajes, pernos y varillas de anclaje, zapatas y cada varilla. Vea [Exportar IFC](topic:ifc-export). |
| {{ui:Archivos NC}} | `<nombre> NC.zip` | Un archivo DSTV `.nc1` por marca de pieza. Vea [Envíe archivos NC al taller](topic:nc-export). |
| {{ui:Materiales}} | `<nombre> BOM.csv` | Tres tablas en un archivo: piezas, ensamblajes, y pernos y varillas de anclaje. Vea [Marcas y lista de materiales](topic:marks-and-bom). |
| {{ui:Doblado}} | `<nombre> bending schedule.csv` | Cada marca de varilla de las zapatas. Vea [Zapatas y varilla](topic:footings-and-rebar). |
| {{ui:Plano de taller}} | `<nombre> <marca>.pdf` | Una hoja (A3 salvo que elija otro tamaño) de la pieza seleccionada (perfiles I y placas). Vea [Haga un plano de taller](topic:shop-drawings). |
| {{ui:Planos}} | `<nombre> drawings.pdf`, `<nombre> <hoja>.pdf`; `<nombre> <hoja>.dwg` o `.dxf`, varios en `<nombre> drawings DWG.zip` (o `DXF.zip`) | Las plantas, elevaciones y planos de ensamblaje en el tamaño de hoja que eligió; DWG y DXF a tamaño real, 1 unidad = 1 mm en el papel. Vea [Planos de disposición general y de ensamblaje](topic:drawings). |

### Notas sobre los archivos CSV

- Empiezan con una marca de orden de bytes para que las hojas de cálculo lean bien los caracteres con acento.
- Una celda que empieza con `=`, `+`, `-` o `@` (y no es un número simple) recibe un apóstrofo al inicio, para que una hoja de cálculo nunca la ejecute como fórmula.
- Las longitudes están en milímetros y los pesos en kilogramos.

### Notas sobre el PDF

El texto del PDF usa la fuente estándar Helvetica. Los caracteres que no tiene (fuera del conjunto de Europa occidental) se imprimen como "?", y la barra de estado le dice cuántos.

## Unidades

DetailCraft trabaja en milímetros en todo: ejes, niveles, coordenadas, perfiles, agujeros y cada exportación. Los nombres de perfil conservan su forma publicada (W12x50 es una designación de EE. UU. aunque sus dimensiones se muestren en mm). Todavía no hay entrada en unidades imperiales.

## Con y sin conexión

Abrir, guardar y exportar ocurren en su navegador, así que funcionan igual con o sin conexión una vez cargado DetailCraft.

Para usar DetailCraft sin conexión más adelante, elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación mientras tiene conexión. El botón cuenta ("Saving 3 of 20") y luego dice {{ui:Lista sin conexión}}. La copia guardada incluye la biblioteca de gráficos 3D (unos 2.6 MB) y esta ayuda, así que una vez guardada funcionan sin conexión la vista 3D, cada exportación y la ayuda. Detalles, y qué sigue necesitando conexión: [Trabajar sin conexión](common:offline).

:::offline
No tiene conexión. Si la barra de la aplicación dice {{ui:Lista sin conexión}}, abrir, guardar y exportar funcionan como siempre. Si no, mantenga abierta esta pestaña, no la recargue hasta recuperar la conexión y guarde su modelo ahora.
:::

Todavía no se puede guardar en la nube y aún no hay versiones de escritorio. Respalde sus archivos `.detailcraft.json` como respalda cualquier otro archivo de trabajo. Más en [A dónde van sus archivos](common:your-files).

## Trabajo sin guardar

DetailCraft conserva el modelo solo en la pestaña abierta. Si cierra o recarga la pestaña con cambios sin guardar, el navegador pregunta si desea salir de la página; su redacción es la del propio navegador. Guarde seguido con {{key:Mod+S}}.
