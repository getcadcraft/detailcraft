---
title: Mba'e ndojapóiva ko versión-pe
summary: Mba'e ko versión DetailCraft temprano ndaikatúi ojapo, ha mba'e ojapo ko'ágã umi tembiapo-pe.
keywords: límites, limitaciones, faltante, hoja de ruta, no compatible, próximamente, planificado, solución alternativa, pendiente
from: ea411885
---

DetailCraft ha'e peteĩ versión temprana. Ko página ohechauka mba'e ndaikatúi ojapo ko'ágã, ikatu reguapy haguã. Ninguno ko'ápe ha'e fecha prometida.

## Modelado

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Peteĩ extremo miembro-pe jejapo (estirar) | Mbohéi {{ui:Inicio}} térã {{ui:Fin}} {{ui:Extremos (x, y, z mm)}} rehe {{ui:Propiedades}} panel-pe |
| Peteĩ filtro selección (solo vigas, peteĩ perfil) | Ventana rehe mbojoaju, ha {{key:Shift}}+clic pieza-kuéra mboguejy haguã |
| Matriz de selección; rotar sobre eje inclinado; espejo en plano inclinado | Copia ha pegá offset-pe, térã {{ui:Duplicar}}; rotar ha espejo ojapo planta-pe ([Seleccionar por ventana, mover, rotar, espejar, cambiar muchos](topic:select-and-change)) |
| Puntos fuera de la grilla al clicar | Colocá grilla-pe, ha upéi escribí coordenadas extremo |
| Elevaciones sobre líneas de grilla numeradas; vistas guardadas; planos de trabajo | Usá {{ui:3D}}, térã {{ui:Agregar por grilla}} |
| Agujeros dibujados como cortes reales en vista 3D | Agujeros ohechauka tapones oscuros; reales opa exportación-pe |
| Copes redondeados o inclinados, otros cortes y accesorios | Copes cuadrados solo perfil I-pe |
| Agujeros ndejeregua ángulos ha tubo redondo-pe | Agujeros ángulo-pe oúva solo [placas de unión](topic:brace-gussets) |
| Entrada imperial | Escribí milímetros (25.4 por pulgada) |
| Editar térã eliminar perfil personalizado | Agregá perfil corregido peteĩ nombre pyahu-pe |

## Escaleras

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Barandas, descansos, placas de pie, peldaños de rejilla, escalera espiral ha de dos tramos | Solo tramos rectos; ver [Escaleras](topic:stairs) |
| Cortes de extremo de zancas contra los pisos | Zancas de corte cuadrado; cortalas tu programa taller-pe |

## Conexiones

DetailCraft oja'o seis conexión: placa de unión riostra (ver [Placas de unión](topic:brace-gussets)); empalme atornillado entre dos piezas de un perfil I (ver [Empalmes](topic:splices)); inglete entre dos perfiles I que se encuentran en ángulo, solo cortado térã con placas de extremo atornilladas (ver [Ingletes](topic:mitres)); placa de extremo atornillada enrasada térã extendida desde viga vertical de nivel de perfil I hacia ala o alma de columna perfil I; lengüeta de corte desde viga (cuadrada, sesgada o inclinada) hacia ala o alma de columna; y placa base de columna con cuatro barras de anclaje.

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Placas de extremo sesgadas o inclinadas | Usá [lengüetas de corte](topic:shear-tabs), que aceptan vigas sesgadas e inclinadas |
| Ángulos de sujeción; placas de relleno de empalme y empalmes entre tamaños distintos; placas de esquina soldadas a viga y columna, placas biseladas | Detallalas en otro programa, o agregá placas y agujeros a mano como piezas sueltas; ver [Empalmes](topic:splices), [Placas de unión](topic:brace-gussets) |
| Atiesadores de placa base biselados o ahusados; agujeros de lechada; hueco de zapata para lengüeta de corte | Atiesadores rectangulares; ver [Placas base](topic:base-plates) |
| Cartelas; ingletes soldados con soldadura a tope; atiesadores alineados con las alas de la otra pieza | Un [inglete](topic:mitres) con placas de extremo y atiesadores de alma, o inglete simple cortado; agregá otras placas a mano como piezas sueltas |
| Verificaciones de diseño de conexiones (resistencia) | Verificá conexiones con los cálculos de tu ingeniero; DetailCraft solo avisa sobre distancia al borde y separación |
| Agujeros alargados | Solo agujeros redondos |

## Análisis

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Verificaciones de diseño más allá de perfiles I de acero: tubos, ángulos, canales, formas soldadas, piezas esbeltas o clase 4, torsión, conexiones; hormigón: esbeltez por balanceo, torsión, detallado sísmico, losas y muros | La pestaña {{ui:Análisis}} verifica perfiles I de acero según AISC 360 o EN 1993-1-1 ([Verificar miembros de acero según código de diseño](topic:design-checks)); lo demás queda marcado "no verificado"; un ingeniero revisa todo |
| Análisis de pandeo, vibración | Segundo orden es solo P-Delta (elástico); sin análisis de pandeo (modal, espectro de respuesta, historia en el tiempo y pushover están en la pestaña Análisis) |
| Verificaciones de diseño revisadas por un ingeniero | Hasta entonces son una ayuda: verificá dos o tres miembros a mano o en el programa de tu ingeniero antes de confiar en ellas |
| Cargas de piso, viento y nieve calculadas a partir de áreas | Poné cargas en miembros a mano, en kN/m o kN |
| Desplazamientos de miembros, uniones excéntricas, riostras solo a tracción, placas y zapatas en el pórtico | Los miembros se analizan sobre sus líneas de trabajo; riostras soportan tracción y compresión |

## Armadura

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Columnas redondas, espirales, vigas inclinadas o curvas, losas que no sean rectangulares, muros que no sean rectos | Vigas, columnas, losas y muros rectangulares ([Detallar hormigón armado](topic:reinforced-concrete)) |
| Barras dobladas en empalme, empalmes escalonados, empalmes ubicados donde elijas | Empalmes a pasos iguales, todas las barras empalmadas en una sección (ACI Clase B, EN α6 = 1.5) |
| Barras de esquina en aberturas, armadura de corte por punzonamiento, detallado sísmico (ACI 318-19 capítulo 18) | Refuerzos a cada lado de una abertura; revisá lo demás vos mismo |
| Leer archivos propios de un programa de diseño estructural | Exportá IFC desde él: sus IfcReinforcingBar entran como barras ([Barras desde un archivo IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Códigos de forma más allá de recta, un doblez y U; tipos ACI 315 para barras rectas y con un gancho | Las tres formas se imprimen como BS 8666 00, 11, 21 o ACI Tipo 2; ver [Referencia de armadura](topic:rebar-reference) |
| Barras métricas distintas de BS 4449 H8–H40 (p. ej. CSA 10M–35M) | Nombres ASTM de barra blanda métrica #10–#36, o barras BS |

## Dibujos y exportaciones

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Hojas en vertical, A0, y hojas de tu propio tamaño; vistas de disposición general en grillas sesgadas | Hojas horizontales A4 a A1 y ANSI B a D ([Dibujos de disposición general y de conjunto](topic:drawings)); escalá el PDF para imprimir en otro tamaño |
| Símbolos de soldadura en planos de taller de piezas sueltas; símbolos distintos de filete | Los dibujos de conjunto llevan símbolos de soldadura de filete; el plano de taller da la soldadura como texto |
| Editar un dibujo en la aplicación | Cambiá el modelo y volvé a hacer el dibujo; anotá el PDF en una aplicación de PDF como MarkupCraft |
| Dibujos como DWG con objetos de cota, o el modelo a escala real en espacio modelo con las hojas como presentaciones | Cada hoja es un DWG o DXF de tamaño real del papel, cotas como líneas y cifras ([Dibujos de disposición general y de conjunto](topic:drawings#download)) |
| Agujeros NC en tubos redondos, copes en ángulos y tubos redondos en archivos NC | No escrito; ver [Campos del archivo NC](topic:nc1-fields) |
| Biseles, marcas y contornos internos en archivos NC | Ninguno por ahora |
| Agujeros de pernos, pernos, soldaduras y zapatas en la exportación USD | Están en las salidas IFC, NC y BOM; ver [Exportar el modelo de acero a USD](topic:usd) |
| Traer conexiones, zapatas, agujeros alargados o rectangulares y agujeros en tubos redondos desde un archivo IFC | {{ui:Importar IFC}} trae vigas, columnas, miembros, placas, grillas, niveles, agujeros redondos, copes, pernos y barras de armadura, y su informe lista lo que dejó afuera |
| Diseños personalizados de informes | Los tres archivos CSV |

## Paneles

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Mover los informes de abajo ({{ui:Problemas}}, {{ui:Lista de materiales}}, {{ui:Planilla de doblado}}) | Solo los paneles {{ui:Modelo}} y {{ui:Propiedades}} se mueven. Ver [Organizar los paneles](common:arrange-panels) |

## Trabajo en equipo y guardado

| Ko'ágã ndojapóiva | Ko'ágã oĩva |
|---|---|
| Guardado en la nube y sincronización entre computadoras | Guardá archivos `.detailcraft.json` y compartilos como cualquier archivo. El guardado en la nube aún no está disponible |
| Cursores de otras personas y etiquetas "está editando" en una sesión Live TeamWork; grillas, niveles y fases fusionados ítem por ítem | Las ediciones igual se fusionan (grillas, niveles y fases se pasan enteros, gana el cambio más reciente); ver [Detallar una estructura juntos, en vivo](topic:work-live) |
| Enlaces de invitación a una sesión Live TeamWork por internet | Unite con un código corto en la misma red |

## Plataformas

- DetailCraft está hecho para pantalla de escritorio, laptop o tableta. También funciona en teléfono: el modelo conserva la pantalla y los paneles, y los informes se abren como hojas desde una barra inferior, pero hay poco espacio para los paneles.
- El uso sin conexión necesita primero DetailCraft guardado para uso sin conexión, con {{ui:Guardar para usar sin conexión}} en la barra de la aplicación; cuando diga {{ui:Listo para usar sin conexión}}, todo lo de esta versión funciona sin conexión. Ver [Trabajar sin conexión](common:offline).

Si alguna de estas limitaciones bloquea tu trabajo, avisanos por la [página de soporte](https://getcadcraft.com/support); nos ayuda a decidir qué construir después.
