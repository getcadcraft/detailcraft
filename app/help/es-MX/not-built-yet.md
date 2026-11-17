---
title: Lo que todavía no está desarrollado
summary: Lo que esta versión temprana de DetailCraft todavía no puede hacer, y qué hacer en su lugar hoy.
keywords: límites, limitaciones, faltantes, hoja de ruta, no compatible, próximamente, planeado, solución alterna, pendiente
from: ea411885
---

DetailCraft es una versión temprana. Esta página enumera lo que todavía no hace, para que pueda planear alrededor de ello. Nada aquí es una promesa de fecha.

## Modelado

| Todavía no | En su lugar, hoy |
|---|---|
| Arrastrar un extremo de una pieza (estirarla) | Edite {{ui:Inicio}} o {{ui:Final}} en {{ui:Extremos (x, y, z mm)}} del panel {{ui:Propiedades}} |
| Un filtro de selección (solo vigas, solo un perfil) | Designe con una ventana y luego haga clic con {{key:Shift}} para quitar piezas |
| Hacer matrices de una selección; girar alrededor de un eje inclinado; reflejar en un plano inclinado | Copie y pegue con un desplazamiento, o {{ui:Duplicar}}; girar y reflejar funcionan en planta ([Designar por ventana, desplazar, girar, simetría y cambiar muchas piezas](topic:select-and-change)) |
| Puntos fuera de la rejilla al hacer clic | Coloque sobre la rejilla y luego escriba las coordenadas finales |
| Elevaciones a lo largo de ejes numerados; vistas guardadas; planos de trabajo | Use {{ui:3D}}, o {{ui:Agregar por ejes}} |
| Perforaciones dibujadas como cortes reales en la vista 3D | Las perforaciones se ven como tapones oscuros; son reales en todas las exportaciones |
| Recortes redondeados o angulados, otros cortes y herrajes | Solo recortes a escuadra en secciones I |
| Perforaciones que agregue a ángulos y tubos redondos | Las perforaciones de ángulos solo vienen de las [cartelas de contraviento](topic:brace-gussets) |
| Entrada en unidades imperiales | Escriba milímetros (25.4 por pulgada) |
| Editar o quitar un perfil personalizado | Agregue un perfil corregido con un nombre nuevo |

## Escaleras

| Todavía no | En su lugar, hoy |
|---|---|
| Pasamanos, descansos, pletinas de pie, peldaños de rejilla, escaleras de caracol o de dos tramos | Solo tramos rectos; vea [Escaleras](topic:stairs) |
| Cortes en el extremo de las zancas contra los pisos | Zancas con corte a escuadra; córtelas en el software de su taller |

## Conexiones

DetailCraft construye seis conexiones: una cartela de contraviento (vea [Cartelas de contraviento](topic:brace-gussets)); un empalme atornillado entre dos piezas de una misma sección I (vea [Empalmes](topic:splices)); una unión a inglete entre dos secciones I que se encuentran en ángulo, solo cortada o con placas de extremo atornilladas (vea [Uniones a inglete](topic:mitres)); una placa de extremo atornillada, a ras o extendida, desde una viga de sección I vertical y nivelada hasta el patín o el alma de una columna de sección I; una placa de cortante desde una viga (a escuadra, sesgada o inclinada) hasta el patín o el alma de una columna; y una placa base de columna con cuatro barras de anclaje.

| Todavía no | En su lugar, hoy |
|---|---|
| Placas de extremo sesgadas o inclinadas | Use [placas de cortante](topic:shear-tabs), que aceptan vigas sesgadas e inclinadas |
| Ángulos de sujeción; placas de relleno de empalmes y empalmes entre tamaños distintos; cartelas de esquina soldadas a viga y columna; cartelas biseladas | Deténgalos en otro software, o agregue placas y perforaciones a mano como piezas sueltas; vea [Empalmes](topic:splices), [Cartelas de contraviento](topic:brace-gussets) |
| Atiesadores de placa base biselados o ahusados; perforaciones de lechada; el hueco de cimentación para una llave de cortante | Atiesadores rectangulares; vea [Placas base](topic:base-plates) |
| Quiebres (haunches); inglete soldado con soldadura a tope; atiesadores alineados con los patines de la otra pieza | Un [inglete](topic:mitres) con placas de extremo y atiesadores de alma, o un corte de inglete simple; agregue otras placas a mano como piezas sueltas |
| Verificaciones de diseño de conexiones (resistencia) | Verifique las conexiones con los cálculos de su ingeniero; DetailCraft solo advierte sobre la distancia al borde y el espaciamiento |
| Perforaciones alargadas | Solo perforaciones redondas |

## Análisis

| Todavía no | En su lugar, hoy |
|---|---|
| Verificaciones de diseño más allá de secciones I de acero: tubos, ángulos, canales, perfiles soldados, piezas esbeltas o de clase 4, torsión, conexiones; concreto: esbeltez por desplome, torsión, detallado sísmico, losas y muros | La pestaña {{ui:Análisis}} verifica secciones I de acero según AISC 360 o EN 1993-1-1 ([Verificar miembros de acero según un código de diseño](topic:design-checks)); lo demás queda marcado como "no verificado"; un ingeniero revisa todo |
| Análisis de pandeo, vibración | El segundo orden es solo P-Delta (elástico); no hay análisis de pandeo (modal, espectro de respuesta, historia en el tiempo y empuje lateral están en la pestaña Análisis) |
| Verificaciones de diseño que un ingeniero haya revisado | Son una ayuda hasta entonces: verifique dos o tres miembros a mano o en el software de su ingeniero antes de confiar en ellas |
| Cargas de piso, viento y nieve generadas por usted a partir de áreas | Coloque las cargas en las piezas a mano, en kN/m o kN |
| Desfases de miembros, uniones excéntricas, contravientos que solo trabajan a tensión, placas y cimentaciones en el marco | Los miembros se analizan sobre sus líneas de trabajo; los contravientos resisten tensión y compresión |

## Varillas

| Todavía no | En su lugar, hoy |
|---|---|
| Columnas redondas, espirales, vigas inclinadas o curvas, losas que no sean rectangulares, muros que no sean rectos | Vigas, columnas, losas y muros rectangulares ([Detallar concreto reforzado](topic:reinforced-concrete)) |
| Varillas dobladas para formar un traslape, traslapes escalonados, traslapes colocados donde usted elija | Traslapes a intervalos iguales, con todas las varillas traslapadas en una sola sección (ACI clase B, EN α6 = 1.5) |
| Varillas de esquina en aberturas, refuerzo de cortante por punzonado, detallado sísmico (ACI 318-19 capítulo 18) | Refuerzos de borde a cada lado de una abertura; revise el resto usted mismo |
| Leer los archivos propios de un programa de diseño estructural | Exporte IFC desde ese programa: sus IfcReinforcingBar entran como varillas ([Varillas de un archivo IFC](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Códigos de forma más allá de recta, un doblez y en U; tipos ACI 315 para varillas rectas y con un gancho | Las tres formas se imprimen como BS 8666 00, 11, 21 o ACI tipo 2; vea [Referencia de varillas](topic:rebar-reference) |
| Varillas métricas distintas de BS 4449 H8–H40 (por ejemplo CSA 10M–35M) | Nombres ASTM de métrica blanda #10–#36, o varillas BS |

## Dibujos y exportaciones

| Todavía no | En su lugar, hoy |
|---|---|
| Hojas en vertical, A0, y hojas de tamaño propio; vistas de disposición general en rejillas sesgadas | Hojas A4 a A1 y ANSI B a D en horizontal ([Dibujos de disposición general y de ensamble](topic:drawings)); escale el PDF para imprimir en otro tamaño |
| Símbolos de soldadura en planos de taller de una sola pieza; símbolos distintos de cordones de filete | Los planos de ensamble llevan símbolos de cordón de filete; el plano de taller indica la soldadura como texto |
| Editar un dibujo dentro de la aplicación | Cambie el modelo y vuelva a generar el dibujo; marque el PDF en una aplicación de PDF como MarkupCraft |
| Dibujos en DWG con objetos de cota, o el modelo a escala real en espacio modelo con las hojas como presentaciones | Cada hoja es un DWG o DXF de tamaño completo del papel, con cotas como líneas y cifras ([Dibujos de disposición general y de ensamble](topic:drawings#download)) |
| Perforaciones NC en tubos redondos, recortes en ángulos y tubos redondos en los archivos NC | No se escriben; vea [Campos del archivo NC](topic:nc1-fields) |
| Biseles, marcas y contornos interiores en los archivos NC | Ninguno por ahora |
| Perforaciones para pernos, pernos, soldaduras y cimentaciones en la exportación USD | Están en las salidas IFC, NC y lista de materiales; vea [Exportar el modelo de acero a USD](topic:usd) |
| Traer conexiones, cimentaciones, perforaciones alargadas o rectangulares y perforaciones en tubos redondos desde un archivo IFC | {{ui:Importar IFC}} trae vigas, columnas, miembros, placas, ejes, niveles, perforaciones redondas, recortes, pernos y varillas de refuerzo, y su informe enumera lo que dejó fuera |
| Diseños personalizados de informes | Los tres archivos CSV |

## Paneles

| Todavía no | En su lugar, hoy |
|---|---|
| Mover los informes de la parte inferior ({{ui:Problemas}}, {{ui:Lista de materiales}}, {{ui:Tabla de doblado}}) | Solo los paneles {{ui:Modelo}} y {{ui:Propiedades}} se pueden mover. Vea [Organizar los paneles](common:arrange-panels) |

## Trabajo en equipo y guardado

| Todavía no | En su lugar, hoy |
|---|---|
| Guardado en la nube y sincronización entre computadoras | Guarde archivos `.detailcraft.json` y compártalos como cualquier archivo. El guardado en la nube todavía no está disponible |
| Cursores de otras personas y etiquetas de "está editando" en una sesión de TeamWork en vivo; ejes, niveles y fases fusionados elemento por elemento | Las ediciones siguen fusionándose (ejes, niveles y fases se reemplazan completos, gana el cambio más reciente); vea [Detallar una estructura juntos, en vivo](topic:work-live) |
| Enlaces de invitación a una sesión de TeamWork en vivo por internet | Únase con un código corto en la misma red |

## Plataformas

- DetailCraft está hecho para la pantalla de una computadora de escritorio, portátil o tableta. También funciona en un teléfono: el modelo conserva la pantalla y los paneles, e informes se abren como hojas desde una barra en la parte inferior, pero hay poco espacio para los paneles.
- El uso sin conexión requiere primero guardar DetailCraft para usar sin conexión, con {{ui:Guardar para usar sin conexión}} en la barra de la aplicación; cuando diga {{ui:Lista sin conexión}}, todo lo de esta versión funciona sin conexión. Vea [Trabajar sin conexión](common:offline).

Si alguno de estos faltantes bloquea su trabajo, háganoslo saber en la [página de soporte](https://getcadcraft.com/support); nos ayuda a decidir qué desarrollar después.
