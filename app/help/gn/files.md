---
title: Abrir, guardar ha exportar archivos
summary: DetailCraft modelo archivo, opavave exportación ojapova, mávapa oho archivo-kuéra ha mba'épa ojoavy navegador ha conexión rupi.
keywords: abrir, guardar, exportar, descargar, archivo, json, ifc, nc1, dstv, csv, pdf, zip, formatos, importar
from: 6fbc8e8f
---

DetailCraft-pe oguereko peteĩ archivo ijeheguíva, modelo, ha mbohasa exportación. Opavave guardar ha opavave exportación ha'e peteĩ descarga. Ndaipóri oñesubi, ha ndaipóri oñongatu servidor-pe.

## Archivo modelo

DetailCraft modelo oñeguardáva `<name>.detailcraft.json` rupi, ha `<name>` ha'e nombre del modelo {{ui:Modelo}} panel-pe. Oguereko grillas, niveles, miembros (hoyo ha copes ndive), conexiones ha chupe ajuste, zapatas ha ne perfil personalizado-kuéra.

Piezas, marcas, pernos, soldaduras ha barras ndaoñeguardái: DetailCraft ojejapo jey peteĩ modelo rupi cada vez oñepe'áva. Upévare modelo archivo ha'e michĩ.

### Guardar

1. Emoĩ peteĩ nombre {{ui:Nombre}} campo-pe, {{ui:Modelo}} panel tuichaitépe.
2. Eiporavo {{ui:Guardar}} {{ui:Archivo}} grupo-pe, térã emboso {{key:Mod+S}}.
3. Navegador oñedescarga `<name>.detailcraft.json`. Barra de estado ohechauka "Guardado … (descargado)", ha punto navegador pestaña título pyrũme oñemboguejy.

Cada guardar ha'e peteĩ descarga pyahu. Navegador ndosobrescribí archivo ejepe'ava; ijajuste rupi ohenda peteĩ número, ejemplo `Frame (1).detailcraft.json`, térã ohendáta mávapa oñeguardaséva. Ne versiones oñongatu descargas renombrando rupi.

:::chromium
Chrome ha Edge oñeguardá ne Descargas carpeta-pe, ndaha'éi **Ohenda mávapa oñeguardáta cada archivo descargar mboyve** ojeheróva navegador ijajuste-pe. Eiporavo upe ojejapo haguã carpeta ha archivo nombre cada jey.
:::

:::firefox
Firefox oñeguardá ne Descargas carpeta-pe, térã oporandu cada jey **Always ask you where to save files** ijajuste-pe ojeheróva.
:::

:::safari
Safari oñeguardá ne Descargas carpeta-pe. Carpeta ojehecha haguã, eiporavo **Safari, Configuración, General, Ubicación de descarga de archivos**.
:::

### Abrir

1. Eiporavo {{ui:Abrir}} {{ui:Archivo}} grupo-pe, térã emboso {{key:Mod+O}}.
2. Eiporavo peteĩ `.detailcraft.json` archivo.

Térã eipyso archivo {{pick:mac=Finder|windows=File Explorer|linux=tu administrador de archivos}} rupi ha ejepu'a vista-pe. Vista ohechauka "Soltá un modelo de DetailCraft para abrirlo" eipysóva jave.

Modelo abierto-pe guardá ndaipóri cambio oĩ jave, DetailCraft oporandu primero: {{ui:Cancelar}}, {{ui:Descartar cambios}} térã {{ui:Guardar primero}}.

DetailCraft archivo cada campo oheha'ã antes oipuru. Ndaikatúi oipuru ojejuka ohejáta ha barra de estado ohechauka mba'épa, ejemplo "2 miembros ndaiporãi ha ohejáta." Modelo DetailCraft pyahu-gui oñeguardáva ndojejapói ojejuka rire ohechaukáva.

### Mba'e ojepe'a

Ijeheguíva modelo archivo (`.json`, 50 MB peve) ha IFC archivo (`.ifc`, IFC2X3 térã IFC4, 200 MB peve). IFC archivo, ojepe'a térã {{ui:Importar IFC}} rupi omoĩva, oñeme modelo pyahu vigas, columnas, miembros, placas, grillas ha niveles rehe, hoyos ha copes ojapo ha pernos suelto; informe ohechauka mba'e ohejáta. Ver [Exportación IFC](topic:ifc-export#import).

Ndoipe'ai DWG, DXF térã ambue detallado programa modelo ko'ẽrõ. Ojejuka jave ohechauka: "DetailCraft ojepe'a ihare modelo (.detailcraft.json) ha IFC archivo (.ifc)."

## Ojejapo mba'e, archivo recientes, aplicación de escritorio

- Modelo-pe nde ndoguardái mba'e oĩ jave, DetailCraft navegador-pe copia oñongatu. Pestaña térã navegador oñemboguejy ndejeguardái mboyve, pe próxima jey DetailCraft ojepe'a jave ohendáta **¿Recuperar ne trabajo?**: copia ojuhu térã ohejávo. Ver [Recuperar ne trabajo](common:recover).
- Modelo ndejepe'avaite, DetailCraft inicio pantalla-pe ojehechauka, navegador ohejáta jey DetailCraft-pe ojepe'a haguã; eipyso peteĩ ojepe'a jey.
- Aplicación de escritorio-pe, {{ui:Guardar}} ojeguarda modelo ejepe'a archivo-pe (navegador-pe peteĩ copia oñedescarga), ha DetailCraft modelo térã IFC archivo doble clic-pe ojepe'a DetailCraft-pe.

## Exportaciones

Opavave exportación oipuru modelo nombre. Eiporavo {{ui:Salida}} grupo-pe.

| Botón | Archivo | Mba'épa oguereko |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: pisos, grillas, cada pieza de acero perfil extrusión-pe hoyos ha copes ndive, conjuntos, pernos ha varillas de anclaje, zapatas ha cada barra. Ver [Exportar IFC](topic:ifc-export). |
| {{ui:Archivos NC}} | `<name> NC.zip` | Peteĩ DSTV `.nc1` archivo cada marca de pieza-pe. Ver [Enviar archivos NC al taller](topic:nc-export). |
| {{ui:BOM}} | `<name> BOM.csv` | Mbohapy tabla peteĩ archivo-pe: piezas, conjuntos, ha pernos ha varillas de anclaje. Ver [Marcas y lista de materiales](topic:marks-and-bom). |
| {{ui:Doblado}} | `<name> bending schedule.csv` | Cada marca de barra zapatas-pe. Ver [Zapatas y armadura](topic:footings-and-rebar). |
| {{ui:Plano de taller}} | `<name> <mark>.pdf` | `<name> Shop drawings.pdf` oguereko peteĩ hoja cada marca de pieza-pe; {{ui:Descargar esta hoja}} ohechaukáva oikuaauka (A3 ndeporavói ambue tamaño ndeporavói jave). Ver [Hacer planos de taller](topic:shop-drawings). |
| {{ui:Planos}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` térã `.dxf`, mbohapy `<name> drawings DWG.zip` (térã `DXF.zip`) peve | Planos, elevaciones ha planos de conjunto eiporavóva hoja tamaño-pe; DWG ha DXF tamaño completo, 1 unidad = 1 mm papel-pe. Ver [Planos de disposición general y de conjunto](topic:drawings). |

### Notas CSV archivo-kuéra rehe

- Oñepyrũ byte-order mark rupi, hoja de cálculo programa-kuéra ohecha acentos porã.
- Peteĩ celda ohóva `=`, `+`, `-` térã `@` (ha ndaha'éi número michĩ) apóstrofo oguereko, hoja de cálculo ndojapói fórmula.
- Largos mm-pe ha pesos kg-pe.

### Notas PDF rehe

PDF texto oipuru estándar fuente Helvetica. Ndaipóri letra (Europa occidental set ndive ndaha'éi) "?" rupi ohechauka, ha barra de estado ohechauka cuántos.

## Unidades

DetailCraft milímetro-pe opavave oñemba'apo: grillas, niveles, coordenadas, perfiles, hoyos ha opavave exportación. Perfil nombres ohechauka oñepublika haguéicha (W12x50 ha'e Estados Unidos designación, dimensiones mm-pe ohechaukaitépe avei). Ko'ẽrõ pulgada entrada ndaipóri.

## En línea ha sin conexión

Ojepe'a, guardar ha exportar opavave navegador-pe oñemba'apo, upévare conexión ndive térã ndive ojojoa DetailCraft ojejuhu rire.

Conexión ndaipóriramo oipuru haguã DetailCraft, conexión jave aplicación barra-pe eiporavo peteĩ jey {{ui:Guardar para usar sin conexión}}. Botón ohupyty ("Guardando 3 de 20") ha upéi ohechauka {{ui:Listo para usar sin conexión}}. Oñeguardáva copia oguereko 3D gráficos biblioteca (2.6 MB aproximadamente) ha ko ayuda; upévare oñeguardá rire, 3D vista, opavave exportación ha ayuda sin conexión ojojoa. Detalle ha ojerure conexión: [Trabajar sin conexión](common:offline).

:::offline
Ndeikói conexión. Aplicación barra-pe {{ui:Listo para usar sin conexión}} ohechauka jave, ojepe'a, guardar ha exportar ojojoa jepe'a. Ndohechauka jave, pestaña ejuhu, ndejepe'a jey conexión oñemoambue peve ha ko'ẽrõ guardá ne modelo.
:::

Nube guardado aún ndaipóri, ha escritorio versiones aún ndaipóri. Ne `.detailcraft.json` archivo-kuéra ko'ẽrõ ambue ne archivos de trabajo-icha backup-piko. Más: [Mávapa oho ne archivo-kuéra](common:your-files).

## Mba'e ndoguardái

DetailCraft modelo ojuhúva ko pestaña abierta-pe anive. Pestaña ojejuka térã ojehéramo mba'e ndoguardái, navegador oporandu oñemboguejy página; ohenda navegador ijeporu rupi.

Guardá {{key:Mod+S}} jey jey.
