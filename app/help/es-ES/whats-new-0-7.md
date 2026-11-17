---
title: Novedades de la versión 0.7 (anteriores)
summary: Comprobaciones de cálculo de perfiles de acero en I con combinaciones de carga de ASCE 7 o EN 1990 y comprobación de elementos según AISC 360 o EN 1993-1-1, exportación USD del modelo de acero, una herramienta de asistente para USD, una cinta de acero con botones grandes y pequeños, paneles que se recogen y diálogos que se mueven.
keywords: novedades 0.7, versión anterior, notas de la versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, comprobaciones de cálculo, cálculo de acero, aprovechamiento, utilización, combinaciones de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, sobrecarga de cubierta, límite de flecha, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta de acero, cinta, botón dividido, unidades, compacta, paneles, diálogos, portugués
from: 54a7a8f0
---

Esto es lo que cambió en DetailCraft 0.7, en comparación con la 0.6. El análisis de pórticos de la 0.6 tiene ahora un segundo paso: la comprobación de los elementos de acero según una norma de cálculo.

## Novedades

### Uniones a inglete (0.7.1)

- **Dos perfiles en I que se encuentran en ángulo**, como un nudo de pórtico o una cumbrera: seleccione ambos, elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}, y se cortan ambos extremos en el plano que divide el ángulo por la mitad. Las chapas de testa atornilladas entre sí y los rigidizadores de alma son casillas de verificación en el nuevo cuadro de diálogo de inglete, cuyos campos numerados coinciden con un dibujo de su unión que se va creando mientras escribe. El inglete sigue a los elementos cuando se mueven, y se traslada a los planos, a los archivos NC (cortes oblicuos), a IFC y a la lista de materiales. Consulte [Uniones a inglete](topic:mitres).

### Comprobaciones de cálculo

- **Combinaciones de carga según la norma.** En la pestaña {{ui:Análisis}}, el nuevo bloque {{ui:Comprobaciones de cálculo}} tiene una {{ui:Norma de cálculo}}: ASCE 7 + AISC 360 (EE. UU., LRFD) o EN 1990 + EN 1993-1-1 (Eurocódigo). Indique el tipo de cada caso de carga (permanente, sobrecarga de uso, la nueva sobrecarga de cubierta, nieve, viento, sísmica), pulse {{ui:Generar combinaciones}}, y DetailCraft escribe las combinaciones de resistencia y de servicio de la norma para sus casos. Las combinaciones que usted escribió a mano se conservan. Consulte [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Valores del Anexo Nacional.** Para el Eurocódigo, los coeficientes parten de los valores recomendados; {{ui:Valores del Anexo Nacional}} le permite escribir los de su país, y se guardan en el modelo. Consulte [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Comprobar elementos.** {{ui:Comprobar elementos}} revisa cada perfil de acero en I a tracción, a compresión con pandeo, a flexión con pandeo lateral por torsión, a cortante, a flexión con axil y a flecha frente al {{ui:Límite de flecha}} que haya fijado. La tabla muestra el aprovechamiento de cada elemento, la comprobación que gobierna y su combinación, y los elementos se colorean en el modelo (azul, verde, ocre, rojo, y gris si no se ha comprobado). Consulte [Comprobar los elementos](topic:design-checks#check-the-members).
- **En el informe.** {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} añaden las ediciones de la norma, los ajustes, el aprovechamiento por elemento y cada cláusula utilizada. Consulte [El informe](topic:design-checks#the-report).
- **Una ayuda hasta que un ingeniero la revise.** Usa solo fuerzas de primer orden. Los perfiles tubulares, angulares, en U, soldados y las piezas esbeltas o de clase 4 aparecen como «no comprobado», con el motivo; la torsión, las uniones y el hormigón no se comprueban. Consulte [Qué no se comprueba](topic:design-checks#what-is-not-checked).

### USD

- **Exportar el modelo de acero como USD.** {{ui:USD}} en el grupo {{ui:Salida}} escribe el modelo como {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}} para programas de renderizado y montaje de escenas: cada conjunto contiene sus piezas, cada pieza es su sección barrida a lo largo de su longitud con los recortes hechos, y cada una lleva su marca de pieza, perfil, calidad, longitud y peso. Los agujeros de tornillos, los tornillos, las soldaduras y las zapatas no están en las mallas USD. Consulte [Exportar el modelo de acero como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** Su propio asistente, conectado a través de CadCraft Studio, puede exportar el modelo como USD (`usd_export`) y, en Studio, escribirlo en una carpeta que haya autorizado. Consulte [Lo que puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Modificado

- **La cinta de acero** tiene botones grandes y pequeños: una {{ui:Viga}} grande junto a {{ui:Pilar}}, {{ui:Diagonal}} y {{ui:Placa}} pequeños en {{ui:Modelado}} › {{ui:Elementos}}; {{ui:Chapas de testa}} grande en {{ui:Detallado}} › {{ui:Conexiones}}, con {{ui:Empalme}} y {{ui:Cartela}} compartiendo un botón dividido; {{ui:Pegar}} grande en {{ui:Editar}} › {{ui:Portapapeles}}, con {{ui:Pegar en el mismo lugar}} y {{ui:Duplicar}} tras la flecha del grupo. {{ui:Fabricación}} › {{ui:Intercambio}} tiene {{ui:Exportar USD}} junto a IFC. Los demás estilos de menú se ven como antes. Consulte [Menús, teclas y ratón](topic:menus-keys-and-mouse#the-three-styles).
- [Analizar el pórtico](topic:frame-analysis) ahora remite a las comprobaciones de cálculo, y sus combinaciones pueden generarse según la norma.

## En todas las apps

- **Unidades.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, superficie, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de cada unidad (el pie de topografía de EE. UU. es una unidad propia). Desactive las unidades que no usa y salen de las listas; marque una como favorita y el trabajo nuevo empieza en ella. Un archivo conserva siempre su propia unidad. Los cuadros propios de DetailCraft todavía no siguen las listas: sus longitudes se siguen escribiendo en milímetros. Consulte [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se recogen.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Densidad de la disposición}} › {{ui:Compacta}} cabe más en pantalla (las pantallas táctiles y los teléfonos mantienen sus botones grandes). Cada panel lateral tiene una barra de título estrecha: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjela para que se deslice hasta el borde, u oculte el panel y recupérelo desde el borde. Consulte [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Arrastre un diálogo por su barra de título para apartarlo del dibujo; vuelve a donde lo dejó. Haga doble clic en la barra de título para volver a centrarlo. Consulte [Mover un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un conjunto, revisar planos, hacer preguntas a un modelo, totalizar una medición, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una repetida por nuestras pruebas. Las apps no contienen IA. Consulte [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Ajustes}} › {{ui:General}} › {{ui:Idioma}}. Este, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** tienen ahora todas las palabras de las apps, como borradores aún no revisados por un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** indica por qué falló la comprobación de actualizaciones (todavía no hay archivo para su sistema, no hay red, una firma incorrecta) en lugar de solo «Listo», y deja de volver a mostrar una tarjeta de Novedades que cerró hasta que haya una versión más reciente.

## Todavía no incluido en esta versión

- **La 0.7 no está firmada digitalmente.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado todavía no ha llegado. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y después {{ui:Ejecutar de todas formas}}. En un Mac, la primera vez, haga clic con el botón derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente de {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- **Las comprobaciones de cálculo todavía no han sido revisadas por un ingeniero.** Nuestras pruebas las comparan con valores de tablas impresas y con fórmulas resueltas a mano, todavía no con los ejemplos resueltos de una guía de diseño. Hasta que se revisen, son una ayuda: compruebe a mano los elementos importantes.
- Las comprobaciones de cálculo usan fuerzas de primer orden (sin efectos de segundo orden) y comprueban solo perfiles en I. No están incluidos: perfiles tubulares, angulares, en U, soldados, piezas esbeltas (AISC) o de clase 4 (Eurocódigo) a flexión, torsión, pandeo por cortante combinado con flexión, uniones, fatiga, incendio, detallado sísmico y hormigón. Una pieza esbelta a compresión deja fuera las comprobaciones de compresión, y el elemento aparece como «cumple, parcialmente comprobado».
- El análisis de pórticos sigue siendo de primer orden y lineal, y todavía no lo ha probado un ingeniero en una obra real.
- Los agujeros de tornillos, los tornillos, las soldaduras y las zapatas no están en la exportación USD.

Todo lo demás está en [Lo que aún no está incluido](topic:not-built-yet).
