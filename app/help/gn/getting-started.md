---
title: Oñepyrũ DetailCraft-pe
summary: Mba'épa DetailCraft ko'ẽrõ ojapo, mba'éichapa ojepe'a, ha peteĩ primer modelo grillas-gui plano de taller-pe diez minutope.
keywords: inicio, primer modelo, introducción, detallado de acero, armadura, inicio rápido, tutorial, panorama
from: e4f16bbe
---

DetailCraft ha'e acero ha armadura detallado aplicación CadCraft familia-pe. Grillas ha niveles-pe acero marco 3D modelo ojapo, conectáva ha taller oikóva ojuhu: pieza ha conjunto marcas, lista de materiales, peteĩ pieza plano de taller, DSTV NC archivos, IFC modelo ha zapatas doblado planilla.

Ko ha'e temprano versión. Peteĩ michĩ lista cuidadosamente ojapo, opavave peteĩ jave ndojapói. Eheka [Mba'e ndaipóri oñemoĩva aún](topic:not-built-yet) ante ejapo trabajo real rehe.

## Ko'ẽrõ mba'épa ojapo

- Grillas ha niveles ne-tipeáva, milímetros-pe.
- Columnas, vigas, riostras ha placas perfil catálogos publicados-gui (AISC W, S, C, L, HSS ha Pipe; europeo IPE, HEA, HEB ha UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS ha CHS), ha ne paramétrico perfiles.
- Mokõi conexión: viga-gui columna brida-pe atornillado placa de extremo, ha columna placa base cuatro varillas de anclaje ndive. Cada peteĩ similar unión-pe ojeporu oñemboguejy.
- Hoyos ha copes posición-pe tipeado.
- Zapatas rectangulares armadura inferior mat ha barras de inicio ndive.
- Pieza ha conjunto marcas cada cambio rire ojejapo.
- Exportaciones: IFC4, DSTV NC archivos (I-shapes ha placas), lista de materiales CSV, planilla de doblado CSV, ha peteĩ pieza plano de taller PDF.

## Oñepe'a DetailCraft

1. Oñepe'a DetailCraft navegador de escritorio-pe: Chrome, Edge, Firefox térã Safari. Ver [Navegadores y computadoras](common:browsers).
2. Eha'ã pantalla oñembohasa. Yvate barra de estado ohechauka: "Listo. Abrí Muestra, térã fijá grillas ha niveles ha comenzá a colocar miembros."

Modelo vista-pe 3D gráficos (WebGL) ojerure. Pantalla medio-pe "Ko navegador ndoikuaái 3D gráficos (WebGL) oñepyrũ" ohechaukáva, eheka [Solución de problemas](topic:troubleshooting#the-3d-view-is-missing).

:::note
Ne modelo-kuéra ne computadora-pe oĩ. Modelo ojepe'a navegador-pe oñemoĩ, guardar archivo oñedescarga. Ndaipóri oñesubi. Nube guardado aún ndaipóri. Ver [Mávapa oho ne archivo-kuéra](common:your-files). Upéi conexión ndaipóri DetailCraft oipuru haguã, conexión jave aplicación barra-pe peteĩ jey eiporavo {{ui:Guardar para usar sin conexión}}; ver [Trabajar sin conexión](common:offline).
:::

:::offline
Ndeikói conexión. DetailCraft conexión ndaipóri oñemba'apo, ko'ẽrõ sin conexión uso-pe oñeguardá jave: {{ui:Guardar para usar sin conexión}} botón aplicación barra-pe {{ui:Listo para usar sin conexión}} ohechauka. Ver [Trabajar sin conexión](common:offline).
:::

## Muestra primero ehecha

DetailCraft ojapo mba'e ehecha rapida ha'e muestra marco.

1. Eiporavo {{ui:Muestra}} herramienta barra {{ui:Archivo}} grupo-pe.
2. Vista ohechauka dos vanos marco: seis columnas base placas ndive, cuatro vigas placas de extremo ndive, peteĩ riostra ha siete zapatas armadura ndive.
3. Eipyso peteĩ viga. {{ui:Propiedades}} panel derecha ohechauka pieza marca, largo de corte, peso ha placas de extremo hoyos.
4. Eiporavo {{ui:Lista de materiales}} pestaña yvate-pe, ohechauka opavave pieza marca cantidad ha peso.

Recorrido [Ehecha muestra marco](topic:sample-model) pieza pieza ohechauka.

## Ne primer modelo

Pyahu modelo oguereko ja grillas 1 ha 3 A ha B-pe 6000 mm-pe, ha mokõi nivel, Nivel 1 0-pe ha Nivel 2 4000-pe.

1. Eiporavo {{ui:Nuevo}}. Modelo actual cambios oiko jave, DetailCraft oporandu primero guardar piko.
2. Eiporavo {{ui:Planta}} vista ryépe. Nivel lista ijyvýpe Nivel 1 oiporavo.
3. Eiporavo {{ui:Columna}} herramienta yvate-pe, térã eiporavo {{key:C}}.
4. Eipyso grilla intersección A/1. W12x50 columna oñemoĩ Nivel 1 gui Nivel 2 peve. Barra de estado ohechauka mávapa oho.
5. Eipyso B/1, A/2 ha B/2 mboyve, mbohapy ambue colocá haguã.
6. Eiporavo Nivel 2 nivel lista-pe, upéi {{ui:Viga}} térã {{key:B}}.
7. Eipyso A/1, upéi A/2. W16x26 viga columna tope mokõi ojuntá, acero tope nivel-pe.
8. Eiporavo {{key:Esc}} {{ui:Seleccionar}}-pe jeho haguã, upéi eipyso viga.
9. Eiporavo {{ui:Placas de extremo}} {{ui:Conectar}} grupo-pe. Mokõi extremo oguereko atornillado placa de extremo, viga ojejuka encajar haguã, ha primer placa de extremo seleccionado oĩ.
10. Eipyso viga peteĩ jey.
11. Eiporavo {{ui:Plano de taller}} {{ui:Salida}} grupo-pe. Viga plano de taller vista previa ojepe'a. Eiporavo {{ui:Descargar PDF}}.
12. Eiporavo {{key:Mod+S}} modelo guardá haguã. Navegador `Untitled.detailcraft.json` oñedescarga.

Modelo nombre cambiá {{ui:Nombre}} campo yvate izquierda-pe guardar mboyve, upéicha archivo ha opavave exportación nombre oguereko.

## Mávapa ejeho upéi

- [Peteĩ vista de la pantalla](topic:workspace)
- [Mboguejy grillas ha niveles](topic:grids-and-levels)
- [Moverse en la vista 3D](topic:navigate-3d), mouse, trackpad térã pantalla táctil ndive
- [Llegando desde otro software de detallado](topic:coming-from), paquete grande de detallado ejeikuaáva jave
- [Usando esta ayuda](common:help)
