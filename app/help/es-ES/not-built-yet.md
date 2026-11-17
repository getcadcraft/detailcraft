---
title: Lo que todavía no está disponible
summary: Lo que esta versión temprana de DetailCraft aún no puede hacer y qué hacer hoy en su lugar.
keywords: límites, limitaciones, falta, hoja de ruta, no compatible, próximamente, previsto, alternativa, pendiente
from: ea411885
---

DetailCraft es una versión temprana. Esta página indica lo que todavía no hace, para que pueda planificar. Nada de lo que aquí se indica es una promesa de fecha.

## Modelado

| Aún no | Alternativa, hoy |
|---|---|
| Arrastrar un extremo de una pieza (estirarla) | Edite {{ui:Inicio}} o {{ui:Final}} en {{ui:Extremos (x, y, z mm)}} del panel {{ui:Propiedades}} |
| Un filtro de selección (solo vigas, solo un perfil) | Arrastre una ventana y luego {{key:Shift}}+clic para quitar piezas |
| Crear una matriz de una selección; girar alrededor de un eje inclinado; reflejar en un plano inclinado | Copie y pegue con un desplazamiento, o {{ui:Duplicar}}; girar y reflejar funcionan en planta ([Seleccionar por ventana, mover, girar, reflejar y cambiar muchas piezas](topic:select-and-change)) |
| Puntos fuera de la rejilla al hacer clic | Coloque sobre la rejilla y luego escriba las coordenadas de los extremos |
| Alzados según líneas de rejilla numeradas; vistas guardadas; planos de trabajo | Use {{ui:3D}} o {{ui:Añadir por rejilla}} |
| Agujeros dibujados como cortes reales en la vista 3D | Los agujeros se ven como tapones oscuros; son reales en todas las exportaciones |
| Recortes redondeados o angulados, otros cortes y herrajes | Recortes cuadrados solo en perfiles en I |
| Agujeros que añada en cantoneras y tubos redondos | Los agujeros de cantonera solo proceden de las [cartelas de diagonal](topic:brace-gussets) |
| Entrada en unidades imperiales | Escriba milímetros (25.4 por pulgada) |
| Editar o quitar un perfil a medida | Añada un perfil corregido con un nombre nuevo |

## Escaleras

| Aún no | Alternativa, hoy |
|---|---|
| Pasamanos, descansillos, rodapiés, peldaños de rejilla, escaleras de caracol y de dos tramos en U | Solo tramos rectos; consulte [Escaleras](topic:stairs) |
| Cortes de extremo de zancas contra los forjados | Zancas con corte a escuadra; córtelas en el software de su taller |

## Conexiones

DetailCraft construye seis conexiones: una cartela de diagonal (consulte [Cartelas de diagonal](topic:brace-gussets)); un empalme atornillado entre dos piezas de un mismo perfil en I (consulte [Empalmes](topic:splices)); un inglete entre dos perfiles en I que se encuentran en ángulo, solo cortado o con placas de extremo atornilladas (consulte [Juntas a inglete](topic:mitres)); una placa de extremo atornillada, enrasada o prolongada, desde una viga horizontal de perfil en I colocada en posición normal (no girada) hasta el ala o el alma de un pilar de perfil en I; una placa de cortante desde una viga (cuadrada, sesgada o inclinada) hasta el ala o el alma de un pilar; y una placa base de pilar con cuatro pernos de anclaje.

| Aún no | Alternativa, hoy |
|---|---|
| Placas de extremo sesgadas o inclinadas | Use [placas de cortante](topic:shear-tabs), que admiten vigas sesgadas e inclinadas |
| Cartabones; placas de relleno de empalme y empalmes entre tamaños distintos; cartelas de esquina soldadas a viga y pilar; cartelas achaflanadas | Detállelos en otro software, o añada placas y agujeros a mano como piezas sueltas; consulte [Empalmes](topic:splices) y [Cartelas de diagonal](topic:brace-gussets) |
| Rigidizadores de placa base biselados o ahusados; agujeros de mortero; el hueco de la zapata para una llave de cortante | Rigidizadores rectangulares; consulte [Placas base](topic:base-plates) |
| Ménsulas; ingletes soldados a tope; rigidizadores alineados con las alas de la otra pieza | Un [inglete](topic:mitres) con placas de extremo y rigidizadores de alma, o un inglete simple; añada otras placas a mano como piezas sueltas |
| Comprobaciones de diseño de la conexión (resistencia) | Compruebe las conexiones con los cálculos de su ingeniero; DetailCraft solo avisa de la distancia al borde y del espaciamiento |
| Agujeros alargados | Solo agujeros redondos |

## Análisis

| Aún no | Alternativa, hoy |
|---|---|
| Comprobaciones de diseño más allá de los perfiles de acero en I: tubos, cantoneras, perfiles en U, formas soldadas, piezas esbeltas o de clase 4, torsión, conexiones; hormigón: esbeltez frente a desplazamiento lateral, torsión, detallado sísmico, losas y muros | La pestaña {{ui:Análisis}} comprueba perfiles de acero en I según AISC 360 o EN 1993-1-1 ([Comprobar piezas de acero según una norma de diseño](topic:design-checks)); el resto lo deja marcado como «no comprobado»; un ingeniero revisa todo |
| Análisis de pandeo y de vibración | El análisis de segundo orden es solo P-Delta (elástico); no hay análisis de pandeo (modal, espectro de respuesta, historia en el tiempo y pushover están en la pestaña Análisis) |
| Comprobaciones de diseño revisadas por un ingeniero | Hasta entonces son solo una ayuda: compruebe dos o tres piezas a mano o en el software de su ingeniero antes de fiarse de ellas |
| Cargas de forjado, de viento y de nieve generadas automáticamente a partir de áreas | Aplique las cargas a las piezas a mano, en kN/m o kN |
| Desplazamientos de piezas, uniones excéntricas, diagonales solo a tracción, placas y cimentaciones en el pórtico | Las piezas se analizan sobre sus líneas de trabajo; las diagonales resisten tracción y compresión |

## Armadura

| Aún no | Alternativa, hoy |
|---|---|
| Pilares redondos, espirales, vigas inclinadas o curvas, losas que no sean rectangulares, muros que no sean rectos | Vigas, pilares, losas y muros rectangulares ([Detallar hormigón armado](topic:reinforced-concrete)) |
| Barras acodadas para formar un solape, solapes escalonados, solapes colocados donde usted elija | Solapes a intervalos iguales, con todas las barras solapadas en una misma sección (ACI clase B, EN α6 = 1.5) |
| Barras de esquina en huecos, armadura de punzonamiento, armado sísmico (ACI 318-19 capítulo 18) | Refuerzos (trimmers) a cada lado de un hueco; compruebe el resto usted mismo |
| Leer los archivos propios de un programa de cálculo estructural | Exporte IFC desde él: sus IfcReinforcingBar entran como barras ([Barras de un archivo IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Códigos de forma distintos de recta, un doblez y en U; tipos de ACI 315 para barras rectas y con un gancho | Las tres formas se imprimen como BS 8666 00, 11, 21 o ACI tipo 2; consulte [Referencia de armaduras](topic:rebar-reference) |
| Barras métricas distintas de BS 4449 H8–H40 (p. ej., CSA 10M–35M) | Nombres métricos blandos ASTM #10–#36, o barras BS |

## Planos y exportaciones

| Aún no | Alternativa, hoy |
|---|---|
| Hojas en vertical, A0 y hojas de su propio tamaño; vistas de disposición general sobre rejillas sesgadas | Hojas A4 a A1 y ANSI B a D apaisadas ([Planos de conjunto y de disposición general](topic:drawings)); escale el PDF para imprimir en otro tamaño |
| Símbolos de soldadura en planos de taller de una sola pieza; símbolos distintos del de soldadura de ángulo | Los planos de conjunto llevan símbolos de soldadura de ángulo; el plano de taller indica la soldadura en texto |
| Editar un plano en la aplicación | Cambie el modelo y vuelva a generar el plano; anote el PDF con una aplicación de PDF como MarkupCraft |
| Planos en DWG con objetos de cota, o el modelo a escala real en el espacio modelo con las hojas como presentaciones | Cada hoja es un DWG o DXF a tamaño real del papel, con las cotas como líneas y cifras ([Planos de conjunto y de disposición general](topic:drawings#download)) |
| Agujeros NC en tubos redondos, recortes en cantoneras y tubos redondos en archivos NC | No se escriben; consulte [Campos del archivo NC](topic:nc1-fields) |
| Biseles, marcas y contornos interiores en archivos NC | Ninguno por ahora |
| Agujeros de tornillos, tornillos, soldaduras y cimentaciones en la exportación USD | Están en las salidas IFC, NC y de lista de materiales; consulte [Exportar el modelo de acero a USD](topic:usd) |
| Traer conexiones, cimentaciones, agujeros alargados o rectangulares y agujeros en tubos redondos desde un archivo IFC | {{ui:Importar IFC}} trae vigas, pilares, piezas, placas, rejillas, niveles, agujeros redondos, recortes, tornillos y barras de armadura, y su informe enumera lo que dejó fuera |
| Diseños de informe personalizados | Los tres archivos CSV |

## Paneles

| Aún no | Alternativa, hoy |
|---|---|
| Mover los informes de la parte inferior ({{ui:Problemas}}, {{ui:Lista de materiales}}, {{ui:Tabla de doblado}}) | Solo se mueven los paneles {{ui:Modelo}} y {{ui:Propiedades}}. Consulte [Organizar los paneles](common:arrange-panels) |

## Trabajo en equipo y guardado

| Aún no | Alternativa, hoy |
|---|---|
| Guardado en la nube y sincronización entre ordenadores | Guarde los archivos `.detailcraft.json` y compártalos como cualquier otro archivo. El guardado en la nube todavía no está disponible |
| Cursores de otras personas y etiquetas de «está editando» en una sesión de Live TeamWork; rejillas, niveles y fases combinados elemento a elemento | Las ediciones siguen combinándose (rejillas, niveles y fases se combinan por completo; gana el cambio más reciente); consulte [Detallar una estructura en equipo, en directo](topic:work-live) |
| Enlaces de invitación a una sesión de Live TeamWork por internet | Únase con un código corto en la misma red |

## Plataformas

- DetailCraft está pensado para pantallas de escritorio, portátil o tableta. También funciona en el móvil: el modelo conserva la pantalla y los paneles, y los informes se abren como hojas desde una barra inferior, pero hay poco espacio para los paneles.
- Para usarlo sin conexión, primero debe guardar DetailCraft para uso sin conexión, con {{ui:Guardar para uso sin conexión}} en la barra de la aplicación; cuando muestre {{ui:Listo sin conexión}}, todo lo de esta versión funciona sin conexión. Consulte [Trabajo sin conexión](common:offline).

Si alguna de estas carencias bloquea su trabajo, háganoslo saber a través de la [página de soporte](https://getcadcraft.com/support); nos ayuda a decidir qué desarrollar después.
