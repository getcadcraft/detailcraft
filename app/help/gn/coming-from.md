---
title: Ojeho mboyvegua detallado programa-gui
summary: Mba'épa oĩ detallado paquete-kuéra hábito DetailCraft-pe, ha diferencia oñandúva detallador-kuéra.
keywords: cambio, migrar, familiar, flujo de trabajo, comparación, diferencias, numeración, componentes, catálogo, planos, hábitos
from: 39639a5d
---

Tekla Structures-pe detallá rehe, DetailCraft mbovy ojehechakuaáta: grilla, nivel, perfil catálogo-gui, parte ha ensamblaje, conexión, numeración, NC archivo, IFC. Escala ndaha'éi: Tekla Structures ha'e sistema de producción tuichave, DetailCraft ha'e mbyky ha pyahu navegador aplicación, oñepyrũ tuichave tekoha ojapóva. Ko página omombe'u mba'epa hábito oho ha mba'epa ndohóiva.

:::tip
Tekla Structures cinta ojehechakuaa remiko, eiporu {{ui:Steel ribbon}} menú estilo {{ui:Settings}} › {{ui:DetailCraft}} › {{ui:Menus, keys and mouse}}: Modelado, Detallado, Editar, Dibujos, Fabricación ha Vista pestaña-kuéra, ha botón medio desplazar. AutoCAD-gui remiko ha ndaipóri nde comando-kuéra, {{ui:Drafting classic}} omoĩ línea de comando (BEAM, COLUMN, ENDPLATE, ZOOM …). Ehecha [Menus, keys and mouse](topic:menus-keys-and-mouse).
:::

## Ñemoañete mbyky

| Oikuaáva | DetailCraft-pe |
|---|---|
| Grilla coordenada diálogo-pe grilla-kuéra ojapo | {{ui:Grids}} panel izquierda: etiqueta ha línea hendápe espaciado, ndaha'éi coordenada absoluto. Número línea peteĩ tape, letra línea ambue |
| Nivel grilla Z koordenada-pe | Apartado {{ui:Levels}}, nombre ha elevación fila-gui, {{ui:Apply levels}} rupi oñemoĩ |
| Punto oñeikuaa ojopy snap-pe | Clic grilla intersección-pe nomove. Grilla ndoĩvape ojeikeha miembro {{ui:Ends (x, y, z mm)}} |
| Columna, viga ha placa comando-kuéra | {{ui:Column}} ({{key:C}}), {{ui:Beam}} ({{key:B}}), {{ui:Brace}} ({{key:R}}), {{ui:Plate}} ({{key:P}}), {{ui:Footing}} ({{key:F}}) |
| Parte propiedad diálogo (doble clic) | Peteĩ clic: {{ui:Properties}} panel derecha hendápe oĩ; diálogo ndoĩ ha Modify térã Apply botón ndoĩ |
| Posición plano-pe, rotación ha profundidad ajuste | {{ui:Position}} (acero tuichakue, centro térã línea abajo) ha {{ui:Rotation (°)}}. Horizontal desplazamiento separado ndoĩ |
| Perfil catálogo | Lista fija 2.311 tamaño publicado (AISC W, S, C, L, HSS, Pipe; europeo IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS ha frío formado hueco sección), ha paramétrico placa-kuéra ha nde {{ui:Custom profile}} sección-kuéra |
| Material catálogo | Siete grado lista-pe: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Conexión componente diálogo | Viga eiporu, eiporu {{ui:End plates}}. Ajuste ojehechakuaa {{ui:Properties}} panel-pe. Mokõi conexión ojeguereko (end plate columna flange-pe, placa base) |
| Auto-conexión, térã junta similar-pe copia | Conexión eiporu, eiporu {{ui:Apply to similar (n)}} |
| Numeración serie ha punta número-gui | Comando ndoĩ: marca mboyve ojeheka opavave cambio rire, prefijo fijo c, b, br, p ha C, B, BR, P |
| Orificio ha perno diálogo | Orificio ojeikeha cara ha posición-pe. Perno conexión-gui rejuhu |
| Corte, ajuste ha polígono herramienta | Cope (tuichakue térã abajo, punta mokõi) I-sección-pe rupi. Conexión cut-back automático |
| Informe ha plantilla | Mbohapy fijo informe pestaña pyapýpe, ha CSV descarga |
| Plano creación ha plano lista | Peteĩ taller plano parte marca-pe, opavave peteĩ jey ojapo, PDF térã hoja-gui peteĩ jey descarga. Ndaipóri ojepyrũ térã ojeheka |
| NC archivo exportación | {{ui:NC files}}: peteĩ DSTV archivo parte marca-pe, I-sección ha placa-kuéra añete, zip-pe |
| IFC exportación | {{ui:IFC}}: modelo tuichave IFC4, varilla rehe |
| Concreto parte varilla | Varilla rectángulo zapata-pe añete, EE. UU. barra tamaño, fondo malla ha punta barra |
| Modelo proyecto carpeta-pe, multiusuario | Peteĩ `.detailcraft.json` archivo descarga. Peteĩ usuario, nde computadora-pe |
| Deshacer historia | {{key:Mod+Z}} ha {{key:Mod+Y}}, 200 paso peve, modelo ojepyrũ térã oñepyrũ ambue rire ojokuaa |

## Diferencia oñeñandu tenonde

### Marca ojeko mboyve

Numeración paso ndoĩ. Marca cada cambio rire ojehecha, upévare oĩ rembe'y, ha mboyve oñemoambue: columna mbohapy ohejahápe c3 jasy c4 oiko. Marca oikuaáva ndoĩ. Modelo ojepyrũ rire, BOM, NC archivo ha taller plano peteĩ ojapo archivo guýpe.

### Mouse botón medio ojapo; ndaha'éi desplazar

3D vista-pe: izquierda arrastrar ojapo rotación, derecha arrastrar desplazar, rueda zoom, botón medio arrastrar zoom. Shift ojeikeha izquierda arrastrar desplazar. Rueda vista centro-pe zoom, puntero-pe ndaha'éi. Rotación centro ndoĩ: modelo vista centro rehe ojapo. Ehecha [Move around the 3D view](topic:navigate-3d).

### Columna oĩ peteĩ tape ojeikóva

Rotación 0 rehe columna flange numerado grilla tape-pe. Letra grilla línea-kuéra mbytépe viga web-pe ojeikeha, ha end plate upépe ndojapói ("Beams framing into a column web are not built yet"). Ko columna-kuéra conexión ojapo mboyve 90° rotar.

### Elevación letra línea-pe añete

{{ui:Elevation}} letra grilla línea rehe añete. Numerado línea-pe vista ndoĩ, vista oñongatuva ndoĩ, work plane ndoĩ. {{ui:3D}} térã {{ui:Add by grid}} numerado línea marco-pe eiporu.

### Marka, copia ha ñemboguejy

Shift+clic térã {{key:Mod+A}} rupi peteĩ térã mokõi parte marka, upe rire copia, cortar, pegar (grilla intersección-pe, ojeikeha desplazamiento-pe, térã mbytépe) ha duplicar, conexión-kuéra avei ([Copy, paste and duplicate](topic:copy-paste)). Ventana selección, filtro, mover, espejo ni array ndoĩ; propiedad {{ui:Properties}} panel-pe miembro peteĩ-peteĩ ojapo.

### Grilla ndoguejýi miembro

Miembro koordenada ojerovia grilla espaciado ojapo rire; grilla línea ndoguejýi nada. Acero omoĩ ántes grilla ojapo, térã miembro punta koordenada ojapo rire.

### Conexión ndoiporúi

Dos conexión placa, orificio, perno ha soldadura número ejapo rupi ojapo. Diseño chequeo ndoĩ, ha'e borde ha espaciado aviso (EN 1993-1-8 Tabla 3.3 rupi).

### Orificio 3D-pe ndojejokói

Orificio tapón oscuro ojehechakuaa. NC archivo, taller plano ha IFC archivo-pe orificio añete oĩ. Cope vista-pe ojejoko.

### Peso bruto

Acero peso ndojepe'a orificio térã cope, perno peso ndojejoko.

### Milímetro añete

Opavave milímetro-pe ojeikeha ha ojehechakuaa, AISC forma-pe avei. Perfil réra publicado forma-pe oñongatu (W12x50, HSS6x6x1/4).

### Plano ndoguerekóiva administrar

Plano lista, plano editor, disposición general térã montaje plano ndoĩ. Taller plano ojapo oikotevẽ rire ha descargado; oñemoambue modelo ha ojapo jey.

### Navegador-pe ojapo

Guardar archivo descarga. Navegador atajo ndoiporúi. Modelo ndoguejýi nde computadora ndoúi: ehecha [Where your files go](common:your-files).

## Mba'e tenonde nde programa-pe

Ko mbyky marco, idea chequeo, enseñanza, NC archivo ha taller plano viga columna simple-pe DetailCraft ojapo. Conexión complejo, disposición general, montaje plano, multiusuario proyecto ha [What is not built yet](topic:not-built-yet) ojekuaa nde programa-pe ojapo.
