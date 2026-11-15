---
title: Abrir, guardar y exportar archivos
summary: El archivo de modelo de DetailCraft, cada exportación que genera, dónde se guardan los archivos y qué cambia según el navegador y la conexión.
keywords: abrir, guardar, exportar, descargar, archivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

DetailCraft tiene un archivo propio, el modelo, y cinco exportaciones. Cada guardado y cada exportación es una descarga. No se sube nada y nada se guarda en un servidor.

## El archivo de modelo

Un modelo de DetailCraft se guarda como `<name>.detailcraft.json`, donde `<name>` es el nombre del modelo en el panel {{ui:Modelo}}. Contiene los {{ui:Ejes}}, los {{ui:Niveles}}, los miembros (con sus agujeros y recortes), las conexiones y su configuración, las zapatas y sus perfiles personalizados.

Las piezas, las marcas, los pernos, las soldaduras y las varillas no se guardan: DetailCraft los calcula de nuevo a partir del modelo cada vez que lo abre. Por eso un archivo de modelo es pequeño.

### Guardar

1. Escriba un nombre en el campo {{ui:Nombre}} en la parte superior del panel {{ui:Modelo}}.
2. Elija {{ui:Guardar}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
3. El navegador descarga `<name>.detailcraft.json`. La barra de estado dice "Guardado … (descargado)", y el punto al inicio del título de la pestaña del navegador desaparece.

Cada guardado es una descarga nueva. El navegador no sobrescribe el archivo que abrió; según su configuración, agrega un número al nombre, como `Frame (1).detailcraft.json`, o le pregunta dónde guardarlo. Conserve sus propias versiones renombrando las descargas.

:::chromium
Chrome y Edge guardan en su carpeta Descargas, a menos que **Preguntar dónde guardar cada archivo antes de descargarlo** esté activado en la configuración de descargas del navegador. Actívelo si quiere elegir una carpeta y un nombre de archivo cada vez.
:::

:::firefox
Firefox guarda en su carpeta Descargas, o pregunta cada vez si **Preguntar siempre dónde guardar los archivos** está activado en su configuración.
:::

:::safari
Safari guarda en su carpeta Descargas. Para cambiar la carpeta, abra **Safari, Configuración, General, Ubicación de descarga de archivos**.
:::

### Abrir

1. Elija {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Seleccione un archivo `.detailcraft.json`.

O arrastre el archivo desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su administrador de archivos}} y suéltelo en la vista. La vista dice "Suelte un modelo de DetailCraft para abrirlo" mientras arrastra.

Si el modelo abierto tiene cambios sin guardar, DetailCraft pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

DetailCraft revisa cada campo de un archivo antes de usarlo. Lo que no puede usar se omite, y la barra de estado indica qué fue, por ejemplo "2 miembros no eran válidos y se omitieron." Un modelo guardado con una versión más reciente de DetailCraft se rechaza con un mensaje, en lugar de abrirse a medias.

### Qué abre

Sus propios archivos de modelo (`.json`, de hasta 50 MB) y archivos IFC (`.ifc`, IFC2X3 o IFC4, de hasta 200 MB). Un archivo IFC, abierto o importado con {{ui:Importar IFC}}, se convierte en un modelo nuevo con sus vigas, columnas, miembros, placas, ejes y niveles, con los agujeros y recortes practicados en ellos y sus pernos como pernos sueltos; un informe enumera lo que se omitió. Vea [Exportación IFC](topic:ifc-export#import). Todavía no abre archivos DWG, DXF ni modelos de otro programa de detallado; al intentarlo aparece "DetailCraft abre sus propios modelos (.detailcraft.json) y archivos IFC (.ifc)."

## Trabajo perdido, archivos recientes, la aplicación de escritorio

- Mientras el modelo tenga cambios que no ha guardado, DetailCraft conserva una copia en este navegador. Si la pestaña o el navegador se detienen antes de que guarde, la próxima vez que abra DetailCraft preguntará **¿Recuperar su trabajo?**: recupere la copia o descártela. Vea [Recuperar su trabajo](common:recover).
- Los modelos que abrió recientemente aparecen en la pantalla de inicio cuando el navegador permite que DetailCraft los abra de nuevo; haga clic en uno para reabrirlo.
- En la aplicación de escritorio, {{ui:Guardar}} escribe el modelo de vuelta en el archivo que abrió (en el navegador descarga una copia), y al hacer doble clic en un modelo de DetailCraft o en un archivo IFC se abre en DetailCraft.

## Exportaciones

Todas las exportaciones usan el nombre del modelo. Elíjalas en el grupo {{ui:Salida}}.

| Botón | Archivo | Qué contiene |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: niveles, ejes, cada pieza de acero como extrusión de perfil con sus agujeros y recortes, ensamblajes, pernos y varillas de anclaje, zapatas y cada varilla. Vea [Exportar IFC](topic:ifc-export). |
| {{ui:Archivos NC}} | `<name> NC.zip` | Un archivo DSTV `.nc1` por cada marca de pieza. Vea [Enviar archivos NC al taller](topic:nc-export). |
| {{ui:Materiales}} | `<name> BOM.csv` | Tres tablas en un solo archivo: piezas, ensamblajes, y pernos y varillas de anclaje. Vea [Marcas y lista de materiales](topic:marks-and-bom). |
| {{ui:Doblado}} | `<name> bending schedule.csv` | Cada marca de varilla de las zapatas. Vea [Zapatas y varillas](topic:footings-and-rebar). |
| {{ui:Plano de taller}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` contiene una hoja por cada marca de pieza; {{ui:Descargar PDF}} descarga la hoja que se muestra (A3, salvo que elija otro tamaño). Vea [Hacer planos de taller](topic:shop-drawings). |
| {{ui:Planos}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` o `.dxf`, varios en `<name> drawings DWG.zip` (o `DXF.zip`) | Las plantas, elevaciones y planos de ensamblaje en el tamaño de hoja que eligió; DWG y DXF a tamaño completo, 1 unidad = 1 mm en el papel. Vea [Planos de disposición general y de ensamblaje](topic:drawings). |

### Notas sobre los archivos CSV

- Comienzan con una marca de orden de bytes para que los programas de hojas de cálculo lean bien los caracteres acentuados.
- Una celda que empieza con `=`, `+`, `-` o `@` (y no es un número simple) recibe un apóstrofo al inicio, para que la hoja de cálculo nunca la ejecute como fórmula.
- Las longitudes están en milímetros y los pesos en kilogramos.

### Notas sobre el PDF

El texto del PDF usa la fuente estándar Helvetica. Los caracteres que no tiene (fuera del conjunto de Europa occidental) se imprimen como "?", y la barra de estado indica cuántos son.

## Unidades

DetailCraft trabaja en milímetros en todo: ejes, niveles, coordenadas, perfiles, agujeros y cada exportación. Los nombres de perfil conservan su forma publicada (W12x50 es una designación de EE. UU. aunque sus dimensiones se muestren en mm). Todavía no hay entrada en unidades imperiales.

## En línea y sin conexión

Abrir, guardar y exportar ocurren todos en su navegador, así que funcionan igual con o sin conexión una vez que DetailCraft se ha cargado.

Para usar DetailCraft sin conexión más adelante, elija {{ui:Guardar para usar sin conexión}} en la barra de la aplicación mientras esté en línea. El botón cuenta ("Guardando 3 de 20") y luego muestra {{ui:Lista sin conexión}}. La copia guardada incluye la biblioteca de gráficos 3D (unos 2.6 MB) y esta ayuda, así que, una vez guardada, la vista 3D, cada exportación y la ayuda funcionan sin conexión. Detalles, y qué todavía necesita conexión: [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de la aplicación muestra {{ui:Lista sin conexión}}, abrir, guardar y exportar funcionan como siempre. Si no lo muestra, mantenga esta pestaña abierta, no la recargue hasta que vuelva a estar en línea, y guarde su modelo ahora.
:::

El guardado en la nube todavía no está disponible, y aún no hay versiones de escritorio. Respalde sus archivos `.detailcraft.json` como respalda cualquier otro archivo de trabajo. Más en [Dónde están sus archivos](common:your-files).

## Trabajo sin guardar

DetailCraft mantiene el modelo solo en la pestaña abierta. Si cierra o recarga la pestaña con cambios sin guardar, el navegador pregunta si desea salir de la página; su texto es el del propio navegador. Guarde con {{key:Mod+S}} con frecuencia.
