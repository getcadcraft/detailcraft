---
title: Mba'e pyahu 0.7 (ymaguare)
summary: Verificación de diseño de perfiles I de acero con combinaciones de carga de ASCE 7 o EN 1990 y verificación de piezas según AISC 360 o EN 1993-1-1, exportación USD del modelo de acero, herramienta asistente para USD, cinta Acero con botones grandes y pequeños, paneles que se guardan ordenados y diálogos que se mueven.
keywords: mba'e pyahu 0.7, versión anterior, notas de versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, verificaciones de diseño, diseño de acero, aprovechamiento, combinaciones de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, nieve en techo, límite de deformación, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta de acero, cinta, botón dividido, unidades, compacta, paneles, diálogos, portugués
from: 54a7a8f0
---

Kóva ha'e mba'e ojecambia DetailCraft 0.7-pe, 0.6 rehe jehechakuaápe. Ko 0.6 análisis de marco ahora oguereko mokõi tenda: piezas de acero ojeverifica diseño código rehe.

## Pyahu

### Juntas en inglete (0.7.1)

- **Mokõi perfil I ojoaju ángulo rupi**, ejemplo: rodilla de pórtico térã cumbrera: eiporãva mokõi, eiporu {{ui:Inglete}} grupo {{ui:Conectar}} menú {{ui:Más}} rupi, ha mokõi punta ojecorta plano rupi ojehecha ángulo mitad. Placas de extremo atornilladas juntos ha refuerzos de alma ha'e casillas de marcar diálogo nuevo {{ui:Inglete}}-pe, hag̃ua campos numerados ojeikuaa plano de tu junta ojapo ejehai jave. Inglete ojeaprovecha piezas ojeguejy jave, ha ojeguata planos, archivos NC (cortes oblicuos), IFC ha lista de materiales-pe. Ehecha [Juntas en inglete](topic:mitres).

### Verificaciones de diseño

- **Combinaciones de carga del código.** Pestaña {{ui:Análisis}}-pe, bloque nuevo {{ui:Verificaciones de diseño}} tiene {{ui:Código de diseño}}: ASCE 7 + AISC 360 (EE. UU., LRFD) térã EN 1990 + EN 1993-1-1 (Eurocódigo). Emoĩ cada caso de carga su clase (muerta, viva, nieve en techo nueva, nieve, viento, sísmica), eapreta {{ui:Armar combinaciones}}, ha DetailCraft ohai combinaciones de resistencia y de servicio del código ndive casos. Combinaciones ndejapóiva ndaperdéi. Ehecha [Hacer las combinaciones](topic:design-checks#make-the-combinations).
- **Valores del Anexo Nacional.** Eurocódigo-pe factores oñepyrũ valores recomendados; {{ui:Valores del Anexo Nacional}} ndive eikuaauka tu país valores, ha oñongatu modelo-pe. Ehecha [Hacer las combinaciones](topic:design-checks#make-the-combinations).
- **Verificar piezas.** {{ui:Verificar piezas}} ohecha tuichaiterei perfil I de acero tensión, compresión con pandeo, flexión con pandeo lateral-torsional, cizalla, flexión con fuerza axial ha deformación según {{ui:Límite de deformación}} ndive eikuaauka. Tabla ohechauka aprovechamiento de cada pieza, verificación que manda ha combinación, ha pieza ohecho modelo-pe color (azul, verde, ocre, rojo, gris pa'i ndoverificáiva). Ehecha [Verificar las piezas](topic:design-checks#check-the-members).
- **Informe-pe.** {{ui:Informe (PDF)}} ha {{ui:Informe (CSV)}} oguereko ediciones del código, configuraciones, aprovechamiento por pieza ha cada cláusula ojeporúva. Ehecha [El informe](topic:design-checks#the-report).
- **Ayuda hasta ingeniero ojehechakuaa.** Ojeporu fuerzas de primer orden añoite. Tubos, ángulos, canales, formas soldadas ha partes esbeltas térã clase 4 ohechauka "no verificado", ohechauka mba'ére; torsión, conexiones ha hormigón ndojeverifíi. Ehecha [Qué no se verifica](topic:design-checks#what-is-not-checked).

### USD

- **Exportar modelo de acero como USD.** {{ui:USD}} grupo {{ui:Salida}}-pe ohai modelo {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} térã {{ui:Paquete (.usdz)}} programa de renderizado ha armado de escena rehe: cada conjunto oguereko sus piezas, cada pieza ha'e su sección ojeguejy hi'a rupi ha corte ojecortáva, ha cada una oguereko su marca de pieza, perfil, grado, largo ha peso. Agujeros de perno, pernos, soldaduras ha bases ndoguerekoi mallas USD-pe. Ehecha [Exportar el modelo de acero como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** Ndaipóri asistente tuichaiterei, ojeconecta CadCraft Studio rupi, ohai modelo USD (`usd_export`), ha Studio-pe ohai carpeta ejeporavo. Ehecha [Qué puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Ojeporavo

- **La cinta Acero** oguereko botones grandes ha pequeños: {{ui:Viga}} grande ha {{ui:Columna}}, {{ui:Riostra}} ha {{ui:Placa}} pequeño {{ui:Modelado}} › {{ui:Miembros}}-pe; {{ui:Placas de extremo}} grande {{ui:Detallado}} › {{ui:Conexiones}}-pe, {{ui:Empalme}} ha {{ui:Cartela}} oñeʼẽ mokõi botón dividido; {{ui:Pegar}} grande {{ui:Editar}} › {{ui:Portapapeles}}-pe, {{ui:Pegar en el mismo lugar}} ha {{ui:Duplicar}} grupo flecha rupi. {{ui:Fabricación}} › {{ui:Intercambio}}-pe oguereko {{ui:Exportar USD}} IFC ndive. Ambue menú ojehechaukáva joapy ojehecha ko'ẽrõ. Ehecha [Menús, teclas y mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analizar el marco](topic:frame-analysis) ahora ohechauka verificaciones de diseño, ha combinaciones ipuére código rehe ojapo ikatu.

## Ambue app-kuéra opa rupi

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}}-pe oguereko lista peteĩ-peteĩ longitud, superficie, volumen, ángulo ha pendiente, tamaño ojekuaáva unidades definiciónes rupi (pie de encuesta EE. UU. ha'e unidad iñambuéva). Eapaga unidades ndeporúiva ha oho listas-gui; eheja estrella ha trabajo pyahu hasẽ upe unidad-pe. Archivo opaite oguereko iñunidad. Las cajas de DetailCraft aún ndojeguejýi listas-pe: longitudes oñeʼẽ milímetros-pe. Ehecha [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Diseño más denso y paneles que se guardan.** {{ui:Configuración}} › {{ui:General}} › {{ui:Diseño densidad}} › {{ui:Compacta}} oike más pantalla-pe (pantalla táctil ha teléfono oguereko botones grandes). Cada panel lateral oguereko barra de título finita: eapreta ha eguejy hag̃ua panel, eguejy barra ambue panel ári pestañas rehe, eñongatu eguejy hag̃ua borde-pe, térã eñemboyke ha eñani. Ehecha [Ordenar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Eguejy diálogo barra de título rupi dibujo ndive ndojotývaicha; ojevuelve upe ojeheja. Eapreta mokõi jey barra de título centrado hag̃ua. Ehecha [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez pedido ejemplo asistente tuichaiterei rehe (ordenar dibujo, trazar conjunto, verificar planos, consultar modelo, sumar cómputo, probar variante de pieza…), cada uno tools ojeporúva ha permiso oikotevẽva, ha nuestros pruebas ohechaukáva. Apps ndoguerekoi IA. Ehecha [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** ha'e pyahu {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}-pe. Ha'e, **Português (Brasil)**, **Español (México)** ha **Bahasa Indonesia** oguereko ko'ẽrõ palabra apps-pe, borrador ndojehechakuaáiva peteĩ hablante nativo. Ayuda temas inglés-pe.
- **CadCraft Studio** ohechauka mba'éichapa update check ndojapóiva (ndaipóri archivo tu sistema-pe, ndaipóri red, firma ivaíva) "Hecho" ndaha'éiva gui, ha ndoĩmo más tarjeta Novedades ejapokuaáva peve ojeikuaa pyahu versión.

## Ndaha'éi ko versión-pe

- **0.7 ndoguerekoi firma de código.** Firma, ha paquete Microsoft Store oho 0.8-pe, ndaipórirõ validación de certificado. Eikuaa SHA-256 cada archivo rehe getcadcraft.com/download-pe. Windows-pe, SmartScreen ojapytyvõ instalador rehe, eheja {{ui:Más información}}, upéi {{ui:Ejecutar igual}}. Mac-pe, peteĩ jey, eapreta derecho CadCraft Studio rehe ha eheja {{ui:Abrir}}. CadCraft Studio ndaipóri tienda de apps, ha ndaipóri versión iPad térã iPhone.
- Listas de ángulo ha pendiente {{ui:Unidades}}-pe oñongatu, pero ndaipóri caja ojeheka umi-pe.
- **Verificaciones de diseño ndoñemoĩvaí ingeniero rehe.** Nuestros pruebas ojekotevẽ valores impresos de tablas ha fórmulas hechas mano, ndaha'éi guía de diseño ejemplos resueltos. Hasta revisión, ha'e ayuda: verifica piezas importante mano.
- Verificaciones de diseño ojeporu fuerzas de primer orden (ndaipóri efectos de segundo orden) ha ohecha I-shapes añoite. Ndaipóri hecho: tubos, ángulos, canales, formas soldadas, partes esbeltas (AISC) térã clase 4 (Eurocódigo) en flexión, torsión, pandeo por cizalla junto flexión, conexiones, fatiga, fuego, detallado sísmico ha hormigón. Parte esbelta en compresión oñemboyke verificación de compresión, ha pieza ohechauka "pasa, parcialmente verificada".
- Análisis de marco todavía primer orden ha lineal, ha ingeniero ndojapóiva trabajo real.
- Agujeros de perno, pernos, soldaduras y bases ndaipóri exportación USD.

Opa ambue ojeikuaa [Lo que todavía no está hecho](topic:not-built-yet).
