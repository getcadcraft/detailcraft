---
title: Abrir, guardar y exportar archivos
summary: El archivo de modelo de DetailCraft, cada exportación que escribe, adónde van los archivos y qué cambia según el navegador y la conexión.
keywords: abrir, guardar, exportar, descargar, archivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: bd715ea3
---

DetailCraft tiene un archivo propio, el modelo, y cinco exportaciones. Cada guardado y cada exportación es una descarga. No se sube nada y no se conserva nada en un servidor.

## El archivo de modelo

Un modelo de DetailCraft se guarda como `<nombre>.detailcraft.json`, donde `<nombre>` es el nombre del modelo en el panel {{ui:Modelo}}. Contiene las rejillas, los niveles, los elementos (con sus taladros y despuntes), las conexiones y sus ajustes, las zapatas y sus perfiles a medida.

Las piezas, marcas, tornillos, soldaduras y barras no se almacenan: DetailCraft las vuelve a calcular a partir del modelo cada vez que lo abre. Por eso un archivo de modelo es pequeño.

### Guardar

1. Escriba un nombre en el campo {{ui:Nombre}} de la parte superior del panel {{ui:Modelo}}.
2. Elija {{ui:Guardar}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
3. El navegador descarga `<nombre>.detailcraft.json`. La barra de estado dice "Saved … (downloaded)", y el punto del principio del título de la pestaña del navegador desaparece.

Cada guardado es una descarga nueva. El navegador no sobrescribe el archivo que abrió; según sus ajustes, añade un número al nombre, como `Frame (1).detailcraft.json`, o pregunta dónde guardar. Conserve sus propias versiones cambiando el nombre de las descargas.

:::chromium
Chrome y Edge guardan en su carpeta Descargas a menos que esté activada la opción **Preguntar dónde guardar cada archivo antes de descargarlo** en los ajustes de descarga del navegador. Actívela si quiere elegir una carpeta y un nombre de archivo cada vez.
:::

:::firefox
Firefox guarda en su carpeta Descargas, o pregunta cada vez si está activada la opción **Preguntar siempre dónde guardar los archivos** en sus ajustes.
:::

:::safari
Safari guarda en su carpeta Descargas. Para cambiar la carpeta, abra **Safari, Ajustes, General, Ubicación de descarga de archivos**.
:::

### Abrir

1. Elija {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Elija un archivo `.detailcraft.json`.

O arrastre el archivo desde {{pick:mac=Finder|windows=el Explorador de archivos|linux=su gestor de archivos}} y suéltelo en la vista. La vista dice "Drop a DetailCraft model to open it" mientras arrastra.

Si el modelo abierto tiene cambios sin guardar, DetailCraft pregunta antes: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

DetailCraft comprueba cada campo de un archivo antes de usarlo. Todo lo que no puede usar se deja fuera y la barra de estado dice qué, por ejemplo "2 members were not valid and left out." Un modelo guardado por una versión más reciente de DetailCraft se rechaza con un mensaje en lugar de abrirse a medias.

### Qué abre

Sus propios archivos de modelo (`.json`, hasta 50 MB) y archivos IFC (`.ifc`, IFC2X3 o IFC4, hasta 200 MB). Un archivo IFC, abierto o traído con {{ui:Importar IFC}}, se convierte en un modelo nuevo con sus vigas, pilares, elementos, placas, rejillas y niveles, con los taladros y despuntes cortados en ellos y sus tornillos como tornillos sueltos; un informe enumera lo que se dejó fuera. Consulte [Exportación IFC](topic:ifc-export#import). Todavía no abre DWG, DXF ni el modelo de ningún otro programa de detallado; al intentarlo muestra "DetailCraft opens its own models (.detailcraft.json) and IFC files (.ifc)."

## Trabajo perdido, archivos recientes, la aplicación de escritorio

- Mientras el modelo tiene cambios sin guardar, DetailCraft conserva una copia en este navegador. Si la pestaña o el navegador se detienen antes de que guarde, la próxima vez que abra DetailCraft pregunta **¿Recuperar su trabajo?**: recupere la copia, o déjela. Consulte [Recuperar su trabajo](common:recover).
- Los modelos que abrió recientemente se enumeran en la pantalla de inicio cuando el navegador permite que DetailCraft los abra de nuevo; haga clic en uno para reabrirlo.
- En la aplicación de escritorio, {{ui:Guardar}} escribe el modelo de nuevo en el archivo que abrió (en el navegador descarga una copia), y al hacer doble clic en un modelo de DetailCraft o en un archivo IFC se abre en DetailCraft.

## Exportaciones

Todas las exportaciones usan el nombre del modelo. Elíjalas en el grupo {{ui:Salida}}.

| Botón | Archivo | Qué contiene |
|---|---|---|
| {{ui:IFC}} | `<nombre>.ifc` | IFC4: plantas, rejillas, cada pieza de acero como una extrusión de perfil con sus taladros y despuntes, conjuntos, tornillos y pernos de anclaje, zapatas y cada barra. Consulte [Exportar IFC](topic:ifc-export). |
| {{ui:Archivos NC}} | `<nombre> NC.zip` | Un archivo DSTV `.nc1` por marca de pieza. Consulte [Enviar archivos NC al taller](topic:nc-export). |
| {{ui:Lista}} | `<nombre> BOM.csv` | Tres tablas en un archivo: piezas, conjuntos, y tornillos y pernos de anclaje. Consulte [Marcas y lista de materiales](topic:marks-and-bom). |
| {{ui:Doblado}} | `<nombre> bending schedule.csv` | Cada marca de barra de las zapatas. Consulte [Zapatas y armaduras](topic:footings-and-rebar). |
| {{ui:Plano de taller}} | `<nombre> <marca>.pdf` | Una hoja (A3 salvo que elija otro tamaño) de la pieza seleccionada (perfiles en I y placas). Consulte [Hacer un plano de taller](topic:shop-drawings). |
| {{ui:Planos}} | `<nombre> drawings.pdf`, `<nombre> <hoja>.pdf`; `<nombre> <hoja>.dwg` o `.dxf`, varios en `<nombre> drawings DWG.zip` (o `DXF.zip`) | Las plantas, alzados y planos de conjunto en el tamaño de hoja que eligió; DWG y DXF a tamaño real, 1 unidad = 1 mm sobre el papel. Consulte [Planos de conjunto y de disposición general](topic:drawings). |

### Notas sobre los archivos CSV

- Empiezan con una marca de orden de bytes para que las hojas de cálculo lean correctamente los caracteres acentuados.
- Una celda que empieza por `=`, `+`, `-` o `@` (y no es un número simple) recibe un apóstrofo inicial, de modo que una hoja de cálculo nunca la ejecuta como fórmula.
- Las longitudes están en milímetros y los pesos en kilogramos.

### Notas sobre el PDF

El texto del PDF usa la fuente estándar Helvetica. Los caracteres que no tiene (fuera del conjunto de Europa occidental) se imprimen como "?", y la barra de estado le dice cuántos.

## Unidades

DetailCraft trabaja en milímetros en todo: rejillas, niveles, coordenadas, perfiles, taladros y cada exportación. Los nombres de perfil conservan su forma publicada (W12x50 es una designación de EE. UU. aunque sus dimensiones se muestren en mm). Todavía no hay entrada en unidades imperiales.

## Con y sin conexión

Abrir, guardar y exportar ocurren en su navegador, así que funcionan igual con o sin conexión una vez cargado DetailCraft.

Para usar DetailCraft sin conexión más adelante, elija {{ui:Guardar para uso sin conexión}} en la barra de la aplicación mientras está conectado. El botón va contando ("Saving 3 of 20") y después dice {{ui:Listo sin conexión}}. La copia guardada incluye la biblioteca de gráficos 3D (unos 2,6 MB) y esta ayuda, de modo que, una vez guardada, la vista 3D, todas las exportaciones y la ayuda funcionan sin conexión. Los detalles, y lo que aún necesita conexión: [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de la aplicación muestra {{ui:Listo sin conexión}}, abrir, guardar y exportar funcionan como de costumbre. Si no, mantenga abierta esta pestaña, no la recargue hasta que vuelva a tener conexión y guarde su modelo ahora.
:::

El guardado en la nube aún no está disponible, y todavía no hay versiones de escritorio. Haga copia de seguridad de sus archivos `.detailcraft.json` como lo hace con cualquier otro archivo de trabajo. Más en [Adónde van sus archivos](common:your-files).

## Trabajo sin guardar

DetailCraft conserva el modelo solo en la pestaña abierta. Si cierra o recarga la pestaña con cambios sin guardar, el navegador pregunta si desea abandonar la página; su redacción es la propia del navegador. Guarde a menudo con {{key:Mod+S}}.
