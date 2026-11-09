---
title: Abrir, guardar y exportar archivos
summary: El archivo de modelo de DetailCraft, cada exportación que genera, dónde se guardan los archivos y qué cambia según el navegador y la conexión.
keywords: abrir, guardar, exportar, descargar, archivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

DetailCraft tiene un archivo propio, el modelo, y cinco exportaciones. Cada guardado y cada exportación es una descarga. No se sube nada y no se guarda nada en un servidor.

## El archivo de modelo

Un modelo de DetailCraft se guarda como `<nombre>.detailcraft.json`, donde `<nombre>` es el nombre del modelo en el panel {{ui:Modelo}}. Contiene las rejillas, los niveles, las barras (con sus agujeros y recortes), las conexiones y sus ajustes, las zapatas y sus perfiles a medida.

Las piezas, las marcas, los tornillos, las soldaduras y las barras de armadura no se guardan: DetailCraft los vuelve a calcular a partir del modelo cada vez que se abre. Por eso un archivo de modelo es pequeño.

### Guardar

1. Escriba un nombre en el campo {{ui:Nombre}} de la parte superior del panel {{ui:Modelo}}.
2. Elija {{ui:Guardar}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+S}}.
3. El navegador descarga `<nombre>.detailcraft.json`. La barra de estado muestra «Guardado … (descargado)», y el punto al inicio del título de la pestaña del navegador desaparece.

Cada guardado es una descarga nueva. El navegador no sobrescribe el archivo que abrió; según sus ajustes, añade un número al nombre, como `Marco (1).detailcraft.json`, o le pregunta dónde guardarlo. Para conservar sus versiones, cambie el nombre de las descargas.

:::chromium
Chrome y Edge guardan en su carpeta de Descargas, a menos que **Preguntar dónde guardar cada archivo antes de descargarlo** esté activado en los ajustes de descargas del navegador. Actívelo si quiere elegir carpeta y nombre de archivo cada vez.
:::

:::firefox
Firefox guarda en su carpeta de Descargas, o le pregunta cada vez si la opción **Preguntar siempre dónde guardar los archivos** está activada en sus ajustes.
:::

:::safari
Safari guarda en su carpeta de Descargas. Para cambiar la carpeta, abra **Safari, Ajustes, General, Ubicación de descarga de archivos**.
:::

### Abrir

1. Elija {{ui:Abrir}} en el grupo {{ui:Archivo}}, o pulse {{key:Mod+O}}.
2. Seleccione un archivo `.detailcraft.json`.

También puede arrastrar el archivo desde {{pick:mac=Finder|windows=Explorador de archivos|linux=su gestor de archivos}} y soltarlo en la vista. La vista muestra «Suelte un modelo de DetailCraft para abrirlo» mientras arrastra.

Si el modelo abierto tiene cambios sin guardar, DetailCraft le pregunta primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} o {{ui:Guardar primero}}.

DetailCraft comprueba cada campo de un archivo antes de usarlo. Lo que no puede usar se omite y la barra de estado indica qué ocurre, por ejemplo «2 barras no eran válidas y se omitieron». Un modelo guardado por un DetailCraft más reciente se rechaza con un mensaje, en lugar de abrirse a medias.

### Qué abre

Sus propios archivos de modelo (`.json`, hasta 50 MB) y archivos IFC (`.ifc`, IFC2X3 o IFC4, hasta 200 MB). Un archivo IFC, abierto o importado con {{ui:Importar IFC}}, se convierte en un modelo nuevo con sus vigas, pilares, barras, placas, rejillas y niveles, con los agujeros y recortes practicados y sus tornillos como tornillos sueltos; un informe indica lo que se omitió. Consulte [Exportación IFC](topic:ifc-export#import). Todavía no abre archivos DWG, DXF ni modelos de otros programas de detallado: al intentarlo aparece «DetailCraft abre sus propios modelos (.detailcraft.json) y archivos IFC (.ifc).».

## Trabajo perdido, archivos recientes, la aplicación de escritorio

- Mientras el modelo tenga cambios sin guardar, DetailCraft guarda una copia en este navegador. Si la pestaña o el navegador se cierran antes de guardar, la próxima vez que abra DetailCraft le preguntará **¿Recuperar su trabajo?**: recupere la copia o descártela. Consulte [Recuperar su trabajo](common:recover).
- Los modelos que abrió recientemente aparecen en la pantalla de inicio cuando el navegador permite volver a abrirlos; haga clic en uno para reabrirlo.
- En la aplicación de escritorio, {{ui:Guardar}} escribe el modelo en el archivo que abrió (en el navegador descarga una copia), y al hacer doble clic en un modelo de DetailCraft o en un archivo IFC se abre en DetailCraft.

## Exportaciones

Todas las exportaciones usan el nombre del modelo. Elíjalas en el grupo {{ui:Salida}}.

| Botón | Archivo | Contenido |
|---|---|---|
| {{ui:IFC}} | `<nombre>.ifc` | IFC4: niveles, rejillas, cada pieza de acero como extrusión de perfil con sus agujeros y recortes, conjuntos, tornillos y barras de anclaje, zapatas y todas las barras de armadura. Consulte [Exportar IFC](topic:ifc-export). |
| {{ui:Archivos NC}} | `<nombre> NC.zip` | Un archivo DSTV `.nc1` por cada marca de pieza. Consulte [Enviar archivos NC al taller](topic:nc-export). |
| {{ui:Lista}} | `<nombre> BOM.csv` | Tres tablas en un solo archivo: piezas, conjuntos, y tornillos y barras de anclaje. Consulte [Marcas y lista de materiales](topic:marks-and-bom). |
| {{ui:Doblado}} | `<nombre> bending schedule.csv` | Cada marca de barra de las zapatas. Consulte [Zapatas y armadura](topic:footings-and-rebar). |
| {{ui:Plano de taller}} | `<nombre> <marca>.pdf` | `<nombre> Shop drawings.pdf` contiene una hoja por cada marca de pieza; {{ui:Descargar esta hoja}} entrega la que se muestra (A3 salvo que elija otro tamaño). Consulte [Crear planos de taller](topic:shop-drawings). |
| {{ui:Planos}} | `<nombre> drawings.pdf`, `<nombre> <hoja>.pdf`; `<nombre> <hoja>.dwg` o `.dxf`, varios en `<nombre> drawings DWG.zip` (o `DXF.zip`) | Las plantas, alzados y planos de conjunto en el tamaño de hoja que elija; DWG y DXF a tamaño real, 1 unidad = 1 mm en el papel. Consulte [Planos de disposición general y de conjunto](topic:drawings). |

### Notas sobre los archivos CSV

- Empiezan con una marca de orden de bytes para que las hojas de cálculo lean correctamente los caracteres acentuados.
- Una celda que empieza por `=`, `+`, `-` o `@` (y que no es un número simple) recibe un apóstrofo al principio, para que la hoja de cálculo nunca la ejecute como fórmula.
- Las longitudes están en milímetros y los pesos en kilogramos.

### Notas sobre el PDF

El texto del PDF usa la fuente estándar Helvetica. Los caracteres que no tiene (fuera del conjunto de Europa occidental) se imprimen como «?», y la barra de estado indica cuántos son.

## Unidades

DetailCraft trabaja en milímetros en todo: rejillas, niveles, coordenadas, perfiles, agujeros y todas las exportaciones. Los nombres de perfil conservan su forma publicada (W12x50 es una designación de EE. UU. aunque sus dimensiones se muestren en mm). Todavía no hay entrada en pulgadas.

## En línea y sin conexión

Abrir, guardar y exportar se hacen todos en su navegador, así que funcionan igual con o sin conexión una vez que DetailCraft se ha cargado.

Para usar DetailCraft más adelante sin conexión, elija {{ui:Guardar para uso sin conexión}} en la barra de aplicación mientras esté en línea. El botón va contando («Guardando 3 de 20») y después muestra {{ui:Listo sin conexión}}. La copia guardada incluye la biblioteca de gráficos 3D (unos 2,6 MB) y esta ayuda, así que una vez guardada funcionan sin conexión la vista 3D, todas las exportaciones y la ayuda. Detalles, y lo que todavía necesita conexión: [Trabajar sin conexión](common:offline).

:::offline
Está sin conexión. Si la barra de aplicación muestra {{ui:Listo sin conexión}}, abrir, guardar y exportar funcionan como de costumbre. Si no lo muestra, mantenga esta pestaña abierta, no la recargue hasta que vuelva a tener conexión y guarde su modelo ahora.
:::

El guardado en la nube todavía no está disponible, y tampoco hay versiones de escritorio. Haga copias de seguridad de sus archivos `.detailcraft.json` como haría con cualquier otro archivo de trabajo. Más información en [Dónde se guardan sus archivos](common:your-files).

## Trabajo sin guardar

DetailCraft mantiene el modelo solo en la pestaña abierta. Si cierra o recarga la pestaña con cambios sin guardar, el navegador pregunta si desea abandonar la página; el texto es el del propio navegador. Guarde con {{key:Mod+S}} con frecuencia.
