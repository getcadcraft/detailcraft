---
title: Verificar piezas de acero según un código de diseño
summary: Armar combinaciones de carga desde ASCE 7 o EN 1990, verificar cada perfil de doble T de acero según AISC 360 o EN 1993-1-1, y ver cuánto de su capacidad usa cada pieza. Peteĩ ayuda hasta che ingeniero ohechaukávo peve.
keywords: diseño, verificación de diseño, diseño de acero, utilización, utilization, capacidad, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocódigo, combinaciones de carga, LRFD, Anexo Nacional, pandeo, pandeo lateral-torsional, corte, flexión, interacción, estructural, estudiantes, ingeniero
from: 15685c4e
---

Análisis ojapo rire, {{ui:Analysis}} pestaña-pe {{ui:Design checks}} blóque ombohasa hague fuerza-kuéra veredicto-pe opavave pieza de acero-pe: mboapa capacidad peor combinación-pegua oipuru.

:::warning
Ha'e **peteĩ ayuda hasta che ingeniero ohechaukávo peve**. Oipuru primer orden fuerza-kuéra añoite (ndaipóri efecto de segundo orden), ndohechái torsión, ndohechái parte esbelta (clase 4), ndohechái soldadura-gui hecha forma ni unión-kuéra, ha oikuaaukáva ojehecha'ỹva ha upéva ohechauka. Ndaha'éi che ingeniero verificación-pe ha ndaha'éi sello.
:::

## Código ojepuraa

{{ui:Design code}} oñeñongatu modelo-rehe; eiporu mokõi familia-gui peteĩ:

- **ASCE 7 + AISC 360** (Estados Unidos, LRFD): ASCE 7-16 §2.3.1 combinaciones ha ANSI/AISC 360-16 pieza verificaciones.
- **EN 1990 + EN 1993-1-1** (Eurocódigo): EN 1990 combinaciones (Ec. 6.10, térã 6.10a ha 6.10b) ha EN 1993-1-1 pieza verificaciones.

Upéi eiporu {{ui:Steel grade}} (A992, A36 ha ambue; térã S235 aja S450 peve, 40 mm mboyve rupi límite de fluencia).

## Combinaciones ojapo

Peteĩ-peteĩ carga caso-pe eme'ẽ hag**ue** **tipo** (muerta, viva, viva de techo, nieve, viento, sísmica) caso lista-pe, upéi eprensa {{ui:Make combinations}}. DetailCraft ojapo código-pe combinaciones, tembiapo-kuéra combinación-kuéra gui, opa resistencia combinación oñemoĩva código-pe nde tipo-kuéra rehe, ha combinación de servicio flecha rehe. Nde ndejapóva ndaipórilo ojehechaukáva; ndojehechaukáiva código-pe. Caso de tipo {{ui:Other}} ndojuntáiva.

Eurocódigo-pe factor-kuéra ha'e **valor recomendado** EN 1990 Anexo A1 gui (γG 1.35, γQ 1.5, carga impuesta, nieve ha viento ψ valor-kuéra) ha EN 1993-1-1 gui (γM0 = γM1 = 1.0). Nde país Anexo Nacional oñemoambue hetáva: ejuhu {{ui:National Annex values}}, emoĩ nde valor-kuéra, ha ejapo combinaciones jey. Oñeñongatu modelo-pe.

## Pieza-kuéra ohecha

Eapreta {{ui:Check members}}. Peteĩ-peteĩ acero doble T-pe tabla ohechauka iutilización (demanda ha capacidad rapykue: 100 % ha'e límite), ojapo porã térã ndaiporãi, mba'e verificación oguerekóva ha mba'e combinación. Pieza-kuéra oñemoĩ modelo-pe tovajáva: azul kyre'ỹ oipuruva, verde mokõi mbovy ha'e, ocre límite-pe, pytã límite-gui mboyve, gris ndojehechaukáiva. Eapreta pieza réra ha ejepe'a hag̃ua.

Verificaciones, cláusula heñói rupi (informe-pe oñeikuaa):

- tensión, compresión flexión pandeo ha torsión pandeo-gui, flexión ambos eje-pe lateral-torsional pandeo-gui, corte, ha flexión axial fuerza-gui;
- segundo orden combinaciones flecha, nde ejapóva {{ui:Deflection limit}} rehe (L/360 kuatiaroguépe; proyecto valor, código valor ndaha'éi).

**Longitudes.** Braced longitud ha'e cada analizado pieza mokõiha (1 = unbraced); braces oñemoĩ ipu'aka hagua puntos eterã-pe. K factor-kuéra longitud-pe oñemoarandu pandeo-pe. Unión ojuhúva pieza ndojoha, pieza oñemboty; peteĩ-peteĩ mboty ijerére longitud-pe ojeguerojera, braced oikóicha.

## Mba'e ndojehechái

Pieza ohechauka **not checked**, mba'e rekoha ndaipórilo, tavy-pe ndaha'éi número: sección ndaha'éi forma oikuaáva verificaciones-pe (ángulo, canal; tubo rectangular ha redondo ojehechakuaa pared compacta oikóramo), forma personalizada (soldada) ha'e, térã parte esbelta (AISC) térã clase 4 (Eurocódigo) flexión-pe. Parte esbelta compresión-pe ndoguerekói compresión verificación, ha pieza ohechauka *passes, partly checked*. Unión-kuéra soldadura-kuéra oguereko [iverificación ijehe](topic:weld-checks). Ndojapóiva avei: efecto de segundo orden, torsión, corte pandeo flexión ndive, unión de perno, fatiga, fuego ha detallado sísmico. Hormigón pieza-kuéra ha carga sísmica oguereko [iverificación ijehe](topic:concrete-and-seismic). Ehecha [Todavía no construido](topic:not-built-yet).

## Informe

{{ui:Report (PDF)}} ha {{ui:Report (CSV)}} ojuhu diseño tabla-kuéra ejecutáramo verificación: código versión-kuéra, configuración ha Anexo Nacional valor-kuéra, pieza rehe utilización, opa cláusula oipuruva ha pieza peteĩ-peteĩ demanda, capacidad ha utilización verificación oguerekóva combinación oguerekóvape.
