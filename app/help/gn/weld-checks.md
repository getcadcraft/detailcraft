---
title: Verificar las soldaduras donde se unen las piezas
summary: Después de la verificación de diseño, probar las soldaduras de filete y a tope alrededor de cada pieza donde se une con otra pieza o un apoyo, según AISC 360-16 Capítulo J o EN 1993-1-8, y ver qué grupo de soldadura está más usado y bajo qué combinación. Peteĩ ayuda hasta che ingeniero ohechaukávo peve.
keywords: soldadura, soldaduras, verificación de soldadura, soldadura de filete, soldadura a tope, penetración completa, AISC 360, EN 1993-1-8, grupo de soldadura, utilización, utilization, capacidad, unión, conexión, estructural, ingeniero
from: e8eebbe6
---

{{ui:Weld checks}} blóque {{ui:Analysis}} pestaña-pe, {{ui:Design checks}} rupi, última resuelta marco-pe fuerza-kuéra ha nde ojapo resistencia combinación-kuéra oipuru, ha soldadura opa-gui pieza peteĩ-peteĩ unión-pe ojehecha: umi pieza ojuhúva ótra pieza-pe térã apoyo-pe oñembohovái.

:::warning
Ha'e **peteĩ ayuda hasta che ingeniero ohechaukávo peve**. Soldadura opa-gui sección rupi ojapo, peteĩ grupo ramo, marco ipype extremo fuerza-kuéra-gui ojehecha. Ndohecha nde ojapo plano de taller-pe soldadura tamaño térã longitud, ha ndohecha perno, placa, apoyo, corte de bloque ni palanca. Ha'eʼỹ sello.
:::

## Ejapo

1. Resolvé marco {{ui:Analysis}} pestaña-pe ha eje peteĩ {{ui:Design code}} {{ui:Design checks}}-pe, upéi eprensa {{ui:Make combinations}} (soldadura verificación oporiahuvereko resistencia combinación-kuéra).
2. {{ui:Weld checks}}-pe emoĩ {{ui:Fillet leg (mm, 0 = the wall, at most 8)}}. 0 ha'e kuatia pared delgada sección rehe, 8 mm peve. AISC código-pe, {{ui:Weld metal strength F_EXX (MPa)}} ha'e soldadura metal resistencia (482.6 MPa ha'e E70 electrodo). EN 1993 rupi acero grado ome'ẽ soldadura metal resistencia ha correlación factor.
3. Eprensa {{ui:Check welds}}.

Tabla peteĩ línea ha'e peteĩ soldadura grupo (pieza peteĩ extremo unión). Números: gobernante verificación **utilización**, estado (pasa térã fallo), ha mba'e verificación cláusula oikóva mba'e combinación-pe. Grupo ndojuhúiva dictamen oñeñe'ẽ mba'e rekoha (ndaipóri acero grado, ndaipóri correlación factor EN 1993-1-8 Tabla 4.1-pe grado-pe, ndaipóri soldadura upe sección-pe) número ndoheknuhai.

Leg térã soldadura metal ambue ojapo, térã modelo ojapo, tabla oñemboty: ha'e valor vieja-pe. Eprensa {{ui:Check welds}} jey.

## Mba'e ojehechaúva

- **ASCE 7 + AISC 360:** filete soldadura metal (carga ángulo soldadura-pe ojehecha, J2.4), base metal corte ruptura (J4.2), ha penetración completa soldadura a tope (Tabla J2.5).
- **EN 1990 + EN 1993:** filete soldadura EN 1993-1-8 4.5.3.3 método simplificado rupi, ha soldadura a tope 4.7.1 rupi.
- Detallado advertencia mínimo ha máximo leg ha mínimo longitud rehe, comparado valor-pe.

Soldadura grupo ojeguerohóva línea sección ramo, vector elástico método rupi ojeporu: soldadura peteĩ parte opavave pieza axial fuerza, corte mokõi, torsión ha flexión momento mokõi ojeguerekóva, vector-pe ojejuntáva.

## Mba'e ndojehechaúi

Penetración parcial soldadura, filete oñemboty, enchufe ha ranura soldadura, interrumpida soldadura, centro instantáneo método, EN dirección método, fatiga ha base metal corte de bloque ndojapóiva. Estándar constante-kuéra estándar-gui oñemoĩ ha ndaikatúi comparación papel-pe; informe ohechauka mboapa número oúva (Informe PDF-pe soldadura tabla-kuéra ojeikuaa verificación rire). Ehecha [Verificar piezas de acero](topic:design-checks) ha [Todavía no construido](topic:not-built-yet).
