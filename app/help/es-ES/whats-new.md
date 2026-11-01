---
title: Novedades de la 0.7
summary: Comprobaciones de cálculo de perfiles en I de acero con combinaciones de cargas de ASCE 7 o EN 1990 y comprobaciones de elementos según AISC 360 o EN 1993-1-1, exportación del modelo de acero a USD, una herramienta de asistente para USD, una cinta Acero con botones grandes y pequeños, paneles que se recogen y cuadros de diálogo que se mueven.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, comprobaciones de cálculo, cálculo de acero, aprovechamiento, combinaciones de cargas, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga de cubierta, límite de flecha, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta de acero, cinta, botón dividido, unidades, compacta, paneles, cuadros de diálogo, portugués
from: 17d1e0bb
---

Esto es lo que cambió en DetailCraft 0.7 respecto a la 0.6. El análisis de estructuras de la 0.6 tiene ahora un segundo paso: comprobar los elementos de acero según una norma de cálculo.

## Novedades

### Uniones a inglete (0.7.1)

- **Dos perfiles en I que se encuentran en ángulo**, como un nudo de pórtico o una cumbrera: seleccione ambos, elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}, y ambos extremos se cortan por el plano que divide el ángulo por la mitad. Las chapas de testa atornilladas entre sí y los rigidizadores de alma son casillas del nuevo cuadro Inglete, cuyos campos numerados coinciden con un dibujo de su unión que se hace mientras escribe. El inglete sigue a los elementos cuando se mueven, y pasa a los planos, los archivos NC (cortes oblicuos), el IFC y la lista de materiales. Consulte [Uniones a inglete](topic:mitres).

### Comprobaciones de cálculo

- **Combinaciones de cargas según la norma.** En la pestaña {{ui:Análisis}}, el nuevo bloque {{ui:Comprobaciones de cálculo}} tiene una {{ui:Norma de cálculo}}: ASCE 7 + AISC 360 (EE. UU., LRFD) o EN 1990 + EN 1993-1-1 (Eurocódigo). Dé a cada caso de carga su tipo (permanente, sobrecarga, la nueva sobrecarga de cubierta, nieve, viento, sismo), pulse {{ui:Generar combinaciones}}, y DetailCraft escribe las combinaciones de resistencia y de servicio de la norma para sus casos. Las combinaciones que escribió usted se conservan. Consulte [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Valores del Anexo Nacional.** Para el Eurocódigo los coeficientes parten de los valores recomendados; {{ui:Valores del Anexo Nacional}} le permite escribir los de su país, y se guardan en el modelo. Consulte [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Comprobar elementos.** {{ui:Comprobar miembros}} comprueba cada perfil en I de acero a tracción, a compresión con pandeo, a flexión con pandeo lateral por torsión, a cortante, a flexión con esfuerzo axil y a flecha frente al {{ui:Límite de flecha}} que usted establezca. La tabla muestra el aprovechamiento de cada elemento, la comprobación que rige y su combinación, y los elementos se colorean en el modelo (azul, verde, ocre, rojo, gris para no comprobado). Consulte [Comprobar los elementos](topic:design-checks#check-the-members).
- **En el informe.** {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} añaden las ediciones de las normas, los ajustes, el aprovechamiento por elemento y cada artículo utilizado. Consulte [El informe](topic:design-checks#the-report).
- **Una ayuda mientras no lo haya revisado un ingeniero.** Usa solo esfuerzos de primer orden. Los tubos, ángulos, perfiles en U, perfiles soldados y las piezas esbeltas o de clase 4 aparecen como "no comprobado", con el motivo; no se comprueban la torsión, las conexiones ni el hormigón. Consulte [Lo que no se comprueba](topic:design-checks#what-is-not-checked).

### USD

- **Exporte el modelo de acero como USD.** {{ui:USD}} en el grupo {{ui:Salida}} escribe el modelo como {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}} para programas de renderizado y montaje de escenas: cada conjunto contiene sus piezas, cada pieza es su sección extruida a lo largo de su longitud con los despuntes cortados, y cada una lleva su marca de pieza, perfil, calidad, longitud y peso. Los taladros, tornillos, soldaduras y zapatas no están en las mallas USD. Consulte [Exportar el modelo de acero como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** Su propio asistente, conectado mediante CadCraft Studio, puede exportar el modelo como USD (`usd_export`) y, en Studio, escribirlo en una carpeta que usted haya permitido. Consulte [Qué puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Cambios

- **La cinta Acero** tiene botones grandes y pequeños: un {{ui:Viga}} grande junto a {{ui:Pilar}}, {{ui:Diagonal}} y {{ui:Placa}} pequeños en {{ui:Modelado}} › {{ui:Elementos}}; un {{ui:Chapas de testa}} grande en {{ui:Detallado}} › {{ui:Conexiones}}, con {{ui:Empalme}} y {{ui:Cartela}} compartiendo un botón dividido; un {{ui:Pegar}} grande en {{ui:Editar}} › {{ui:Portapapeles}}, con {{ui:Pegar en el mismo lugar}} y {{ui:Duplicar}} tras la flecha del grupo. {{ui:Fabricación}} › {{ui:Intercambio}} tiene {{ui:Exportar USD}} junto a IFC. Los demás estilos de menú se ven como antes. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse#the-three-styles).
- [Analizar la estructura](topic:frame-analysis) ahora remite a las comprobaciones de cálculo, y sus combinaciones se pueden generar según la norma.

## En todas las aplicaciones

- **Unidades.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}} tiene una lista cada una para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es una unidad aparte). Desactive las unidades que nunca usa y salen de las listas de unidades; marque una con una estrella y el trabajo nuevo empieza con ella. Un archivo siempre conserva su propia unidad. Los cuadros propios de DetailCraft todavía no siguen las listas: sus longitudes se siguen escribiendo en milímetros. Consulte [Unidades, valores escritos y las listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se recogen.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjela para que se esconda en el borde, u oculte el panel y recupérelo desde el borde. Consulte [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para apartarlo del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo de nuevo. Consulte [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas paso a paso para su propio asistente (ordenar un dibujo, trazar un juego, comprobar dibujos, hacer preguntas a un modelo, totalizar una medición, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Consulte [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Ajustes}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ya tienen todas las palabras de las aplicaciones, como borradores que aún no ha revisado un hablante nativo. Los temas de ayuda de primeros pasos están ya en español de España; el resto de los temas de ayuda sigue en inglés.
- **CadCraft Studio** dice por qué falló una comprobación de actualizaciones (todavía no hay archivo para su sistema, no hay red, una firma incorrecta) en lugar de limitarse a "Done", y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más reciente.

## Todavía no en esta versión

- **La 0.7 no está firmada.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado todavía no ha llegado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y después {{ui:Ejecutar de todas formas}}. En un Mac, la primera vez, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en ninguna tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- **Las comprobaciones de cálculo todavía no las ha revisado un ingeniero.** Nuestras pruebas las comparan con valores de tablas impresas y con fórmulas resueltas a mano, todavía no con los ejemplos resueltos de una guía de cálculo. Hasta una revisión, son una ayuda: compruebe a mano los elementos que importen.
- Las comprobaciones de cálculo usan esfuerzos de primer orden (sin efectos de segundo orden) y comprueban solo perfiles en I. No construido: tubos, ángulos, perfiles en U, perfiles soldados, piezas esbeltas (AISC) o de clase 4 (Eurocódigo) a flexión, torsión, pandeo por cortante junto con flexión, conexiones, fatiga, fuego, detallado sísmico y hormigón. Una pieza esbelta a compresión deja fuera las comprobaciones de compresión, y el elemento aparece como "cumple, comprobado en parte".
- El análisis de estructuras sigue siendo de primer orden y lineal, y todavía no lo ha probado un ingeniero en un trabajo real.
- Los taladros, tornillos, soldaduras y zapatas no están en la exportación USD.

Todo lo demás está en [Lo que todavía no está construido](topic:not-built-yet).
