---
title: Jehecha pantalla rehe
summary: DetailCraft-pe opavave barra, panel ha pestaña pantalla-pe ohechauka téra rehe, ha mba'épa ojoavy cada peteĩ.
keywords: pantalla, diseño, barra de herramientas, paneles, propiedades, barra de estado, informes, interfaz, ui, pestañas
from: 94f81073
---

DetailCraft navegador ventana aplicación barra guýpe ojejuhu. Yvatégui yvate-pe: herramienta barra, upéi mbohapy columna ({{ui:Modelo}} panel, vista, {{ui:Propiedades}} panel), upéi informe pestañas, upéi barra de estado.

## Barra de aplicación

Yvatekue hũ barra CadCraft sitio-pegua, modelo-pe ndaha'éi. Oikuaauka aplicación téra ha versión, enlace {{ui:DetailCraft rehe}}, {{ui:Ayuda}} (térã {{key:F1}}) ko ayuda-pe, {{ui:Guardar para usar sin conexión}}, pantalla modo botón ha {{ui:Papel}} / {{ui:Modelo}} cambio.

- {{ui:Guardar para usar sin conexión}} DetailCraft, 3D vista ha ko ayuda navegador-pe oñeguardá, upévare conexión ndaipóri ojepe'a. Oguardáva rire {{ui:Listo para usar sin conexión}} ohechauka; upéi eipyso ha eiporavo {{ui:Guardar otra vez (obtener la versión más nueva)}} térã {{ui:Quitar la copia sin conexión}}. Ver [Trabajar sin conexión](common:offline).
- {{ui:Papel}} pantalla ndovy'áiva, {{ui:Modelo}} oscura. 3D vista hikuái oñemoambue; modelo ndojemoambuei.
- Pantalla modo botón ha {{key:Ctrl+Shift+F}} normal, pantalla completa ha pantalla completa barra ndahechaukavéva oñemoambue. {{key:Ctrl+Shift+F}} opavave compu-pe {{key:Ctrl}} tecla oipuru, Mac avei. Barra ndahechaukavéva, pantalla yvate ñuguha (térã eñepyhy) barra ojevy haguã. {{key:Esc}} pantalla completa oheja.

## Barra de herramientas

Barra de herramientas-pe po grupo oguereko. Botón ryepy-pe eipyso ha mba'épa ojapo ha tecla ehechá.

| Grupo | Botones | Mba'épa ojapo |
|---|---|---|
| {{ui:Archivo}} | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Muestra}} | Modelo omoĩ, `.detailcraft.json` térã IFC archivo ojepe'a, peteĩ oguarda, térã muestra marco ojepe'a |
| {{ui:Colocar}} | {{ui:Seleccionar}}, {{ui:Viga}}, {{ui:Columna}}, {{ui:Riostra}}, {{ui:Placa}}, {{ui:Zapata}}, {{ui:Escalera}} | Próxima clic vista-pe ojeporu herramienta |
| {{ui:Conectar}} | {{ui:Placas de extremo}}, {{ui:Placa base}}, ha {{ui:Más}}-pe: {{ui:Placas de corte}}, {{ui:Empalme}}, {{ui:Cartela}}, {{ui:Similar}} | Seleccionado viga, columna térã riostra-pe conexión omoĩ, térã seleccionado conexión cada unión similar-pe ome'ẽ |
| {{ui:Editar}} | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} | Edición-kuéra jeheja ha jevy; seleccionado copia ha pega. {{ui:Más}} menú ohechauka {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} ha {{ui:No seleccionar nada}}, cada tecla ndive |
| {{ui:Salida}} | {{ui:IFC}}, {{ui:Archivos NC}}, {{ui:BOM}}, {{ui:Plano de taller}}, {{ui:Planos}}, ha {{ui:Más}}-pe: {{ui:Doblado}}, {{ui:Informe de peso por fase}}, {{ui:KISS file for fabrication software}} | Exportación descarga térã planos hojas ohechauka |

Botón térã menú ítem ndaikatúiva ojapo ahora gris-pe ohechauka, ha hover-pe mba'éichapa ndaikatúi ohechauka. {{ui:Placas de extremo}} viga seleccionado oporandu, {{ui:Placa base}} columna seleccionado, {{ui:Similar}} conexión seleccionado, {{ui:Plano de taller}} piezas ndive modelo, {{ui:Copiar}} miembro térã zapata seleccionado, ha {{ui:Pegar}} copiado oikóva. Ver [Copiar, pegar y duplicar](topic:copy-paste).

## Panel Modelo (izquierda)

- {{ui:Modelo}}: modelo {{ui:Nombre}}. Opavave guardado térã exportado archivo nombre ohechauka.
- {{ui:Grillas}}: grilla líneas ha espaciados, ha {{ui:Aplicar grillas}}. Ver [Mboguejy grillas ha niveles](topic:grids-and-levels).
- {{ui:Niveles}}: nivel peteĩ fila cada uno (nombre ha elevación mm-pe), {{ui:Agregar nivel}} ha {{ui:Aplicar niveles}}.
- {{ui:Perfil personalizado}}: ne paramétrico sección ojapo. Ojepe'a peve cerrado.
- {{ui:Marcas de pieza}}: opavave modelo pieza marca perfil, largo ha cantidad ndive. Marca eipyso primer pieza ndive seleccionado.

{{ui:Grillas}}, {{ui:Niveles}} ha {{ui:Perfil personalizado}} eipyso ijuhúva.

## Vista (medio)

Vista-pe modelo 3D-pe ohechauka. Ipyte vista barra-pe mbohapy botón ha peteĩ lista oguereko:

- {{ui:3D}}: modelo ryepy-pe libremente eñemboty.
- {{ui:Planta}}: peteĩ nivel rehe straight ehechá. Nivel lista botones kotyguépe ohechauka. 1.5 m ha nivel-pe mbovy ohechaukavéva ojeheja ndaipóri, nivel ehecha ha clic ndaporãi.
- {{ui:Elevación}}: peteĩ letra grilla línea-pe (Grilla A, Grilla B …) straight ehechá. Letra grillas lista ohechauka. Solo 1 m mboyve línea-pe acero ohechauka.
- Vista barra derecha ajuste botón opavave modelo zoom ohechauka.

Pequeños puntos marcan cada intersección de grilla en cada nivel. Colocación herramienta oñemoĩ jave, pointer-pe ohóva punto ohechauka ha barra de estado ohechauka, ejemplo "A/2 en Nivel 1". Color ojehechauka: columnas, vigas, riostras ha placas peteĩ color, pernos ha varillas ambue, zapatas transparentes ha armadura tubos rupi ojejapo. Hoyos oscuro tapones-gui ohechauka; copes ojekuatia.

Cómo eñemboty, desplazar ha zoom: [Moverse por la vista 3D](topic:navigate-3d).

Modelo ndaipóri jave, vista "Oñepyrũ modelo" michĩ lista ohechauka. Guardado modelo archivo vista-pe mbojere ojepe'a haguã.

## Panel Propiedades (derecha)

Ko panel ohechauka mba'e reheta:, heading oñeha'ã: "Modelo", "Colocar viga", "Viga b2", "Conexión placa de extremo", "Placa base", "Zapata F1", "3 seleccionados" térã "Pegar".

- **Nada seleccionado:** modelo resumen (miembros, conexiones, zapatas, piezas, marcas, pernos, acero ha armadura peso, grillas, niveles).
- **Colocación herramienta oñemoĩ:** próxima pieza opciones (perfil, material, posición, rotación, columnas: {{ui:Hasta}}), elegido perfil resumen, ha {{ui:Agregar por grilla}} formulario vista clic ndaipóriva colocá haguã.
- **Miembro seleccionado:** nombre, perfil, material, posición, rotación, dos extremos coordenadas, marcas, largo de corte ha peso, hoyos ha copes, conexiones botones, plano de taller ha {{ui:Eliminar}}.
- **Conexión seleccionada:** opavave placa, perno ha soldadura ajuste, pernos ha soldadura ojeporu, advertencias, ha {{ui:Aplicar a similar-kuéra}}.
- **Zapata seleccionada:** posición ha tamaño, mat inferior, barras de inicio ha armadura marcas.
- **Varias cosas seleccionadas:** miembro cada tipo cuántos, conexiones ha zapatas, acero peso, ha {{ui:Copiar}}, {{ui:Duplicar}} ha {{ui:Eliminar}}.
- **Pegando:** portapapeles mba'e ha formularios tipeado desplazamiento ha grilla intersección elegida lista-pe.

Número campos {{key:Enter}} eiporavo térã campo ejepe ramo oñemoambue. Cada cambio peteĩ paso deshacer ha'e.

## Informe pestañas (abajo)

- {{ui:Problemas}}: DetailCraft ndaikatúi ojapo térã eñeñandu haguã ohechaukáva, cada línea {{ui:Seleccionar}} botón ndive. Pestaña cuenta corchete-pe ohechauka.
- {{ui:Lista de materiales}}: piezas, conjuntos, pernos ha varillas, peso ha {{ui:Descargar CSV}} enlace. Pieza marca eipyso pieza seleccionado.
- {{ui:Planilla de doblado}}: cada zapata cada barra marca, {{ui:Descargar CSV}} enlace ndive.

Pestaña enfocada jave, {{key:Left}} ha {{key:Right}} pestañas mboyve oñemboguejy.

## Barra de estado

Yvate barra mbohapy parte: colocación jave pointer guýpe grilla intersección, mensaje tuichave (mba'e ojejuka térã mba'éichapa ndaikatúi), ha piezas, pernos, acero peso ha armadura peso total. Acción ndaporãiva ojevy jave, primero ko barra mensaje eñeñandu.

Navegador pestaña título punto (•) ohechauka modelo ndoguardái cambio oĩ jave.

## Pantalla estrecha-pe

760 pixel mboyve, columnas ojeapila: herramienta barra, vista, barra de estado, {{ui:Propiedades}}, informe pestañas, upéi {{ui:Modelo}} panel ipahápe. Página eipyso ejuhu haguã. DetailCraft escritorio térã laptop pantalla-pe oñemboguejy; teléfono mirá haguã porã, detallado ndaporãi.
