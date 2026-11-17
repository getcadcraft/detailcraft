---
title: Novedades de la versión 0.7 (anteriores)
summary: Verificaciones de diseño de perfiles I de acero con combinaciones de carga de ASCE 7 o EN 1990 y revisión de miembros según AISC 360 o EN 1993-1-1, exportación USD del modelo de acero, una herramienta de asistente para USD, una cinta de Acero con botones grandes y pequeños, paneles que se ocultan y cuadros de diálogo que se mueven.
keywords: novedades 0.7, versión anterior, notas de la versión, registro de cambios, cambios, 0.7, versión, nuevas funciones, verificaciones de diseño, diseño de acero, aprovechamiento, utilización, combinaciones de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, carga viva de techo, límite de deflexión, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta de acero, cinta, botón dividido, unidades, compacta, paneles, cuadros de diálogo, portugués
from: 54a7a8f0
---

Esto es lo que cambió en DetailCraft 0.7, en comparación con la 0.6. El análisis de marcos de la 0.6 ahora tiene un segundo paso: la revisión de los miembros de acero según un código de diseño.

## Novedades

### Uniones a inglete (0.7.1)

- **Dos perfiles I que se encuentran en un ángulo**, como una rodilla de pórtico o una cumbrera: designe ambos, elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}, y ambos extremos se cortan en el plano que divide el ángulo a la mitad. Las placas de extremo atornilladas entre sí y los atiesadores del alma son casillas de verificación en el nuevo cuadro de diálogo Inglete, cuyos campos numerados coinciden con un dibujo de su unión que se genera mientras escribe. El inglete sigue a los miembros cuando se mueven, y se traslada a los planos, a los archivos NC (cortes oblicuos), a IFC y a la lista de materiales. Vea [Uniones a inglete](topic:mitres).

### Verificaciones de diseño

- **Combinaciones de carga del código.** En la pestaña {{ui:Análisis}}, el nuevo bloque {{ui:Revisiones de diseño}} tiene un {{ui:Código de diseño}}: ASCE 7 + AISC 360 (EE. UU., LRFD) o EN 1990 + EN 1993-1-1 (Eurocódigo). Indique el tipo de cada caso de carga (muerta, viva, la nueva carga viva de techo, nieve, viento, sísmica), pulse {{ui:Generar combinaciones}} y DetailCraft escribe las combinaciones de resistencia y de servicio del código a partir de sus casos. Las combinaciones que usted escribió se conservan. Vea [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Valores del Anexo Nacional.** Para el Eurocódigo, los factores parten de los valores recomendados; {{ui:Valores del Anexo Nacional}} le permite escribir los de su país, y se guardan en el modelo. Vea [Generar las combinaciones](topic:design-checks#make-the-combinations).
- **Revisar miembros.** {{ui:Revisar miembros}} revisa cada perfil I de acero por tensión, compresión con pandeo, flexión con pandeo lateral-torsional, cortante, flexión con fuerza axial y deflexión contra el {{ui:Límite de deflexión}} que haya fijado. La tabla muestra el aprovechamiento de cada miembro, la revisión que rige y su combinación, y los miembros se colorean en el modelo (azul, verde, ocre, rojo, gris para los no revisados). Vea [Revisar los miembros](topic:design-checks#check-the-members).
- **En el informe.** {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} agregan las ediciones de los códigos, la configuración, el aprovechamiento por miembro y cada cláusula utilizada. Vea [El informe](topic:design-checks#the-report).
- **Una ayuda hasta que un ingeniero la revise.** Solo usa fuerzas de primer orden. Los tubos, los ángulos, los canales, las formas soldadas y las piezas esbeltas o de clase 4 aparecen como "no revisado", con la razón; la torsión, las conexiones y el concreto no se revisan. Vea [Lo que no se revisa](topic:design-checks#what-is-not-checked).

### USD

- **Exporte el modelo de acero como USD.** {{ui:USD}} en el grupo {{ui:Salida}} escribe el modelo como {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}} para programas de render y ensamblado de escenas: cada ensamblaje contiene sus piezas, cada pieza es su sección a lo largo de su longitud con los recortes hechos, y cada una lleva su marca de pieza, perfil, grado, longitud y peso. Los agujeros de perno, los pernos, las soldaduras y las cimentaciones no están en las mallas USD. Vea [Exportar el modelo de acero como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** Su propio asistente, conectado mediante CadCraft Studio, puede exportar el modelo como USD (`usd_export`) y, en Studio, escribirlo en una carpeta que usted haya permitido. Vea [Lo que un asistente puede solicitar](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Cambiado

- **La cinta de Acero** tiene botones grandes y pequeños: un {{ui:Viga}} grande junto a {{ui:Columna}}, {{ui:Contraviento}} y {{ui:Placa}} pequeños en {{ui:Modelado}} › {{ui:Miembros}}; un {{ui:Placas de extremo}} grande en {{ui:Detallado}} › {{ui:Conexiones}}, con {{ui:Empalme}} y {{ui:Placa de nudo}} compartiendo un botón dividido; un {{ui:Pegar}} grande en {{ui:Edición}} › {{ui:Portapapeles}}, con {{ui:Pegar en el mismo lugar}} y {{ui:Duplicar}} detrás de la flecha del grupo. {{ui:Fabricación}} › {{ui:Intercambio}} tiene {{ui:Exportar USD}} junto a IFC. Los demás estilos de menú se ven como antes. Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse#the-three-styles).
- [Analice el marco](topic:frame-analysis) ahora remite a las verificaciones de diseño, y sus combinaciones pueden generarse según el código.

## En todas las aplicaciones

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} tiene una lista para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de cada unidad (el pie de inspección de EE. UU. es una unidad propia). Desactive las unidades que nunca usa y salen de las listas; marque una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. Los cuadros propios de DetailCraft todavía no siguen las listas: sus longitudes se siguen escribiendo en milímetros. Vea [Unidades, valores escritos y las listas de unidades](common:unit-lists).
- **Una disposición más densa y paneles que se ocultan.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos mantienen sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un mismo marco como pestañas, fíjelo para que se deslice hacia el borde, u oculte el panel y vuelva a traerlo desde el borde. Vea [Organizar los paneles](common:arrange-panels#make-the-layout-denser).
- **Los cuadros de diálogo se mueven.** Arrastre un cuadro de diálogo por su barra de título para quitarlo del dibujo; regresa al lugar donde lo dejó. Haga doble clic en la barra de título para volver a centrarlo. Vea [Mover un cuadro de diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez solicitudes resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar planos, hacer preguntas a un modelo, totalizar una cuantificación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Ese idioma, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ahora tienen todas las palabras de las aplicaciones, como borradores que aún no revisa un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** indica por qué falló una búsqueda de actualizaciones (todavía no hay archivo para su sistema, no hay red, una firma no es válida) en lugar de solo "Listo", y deja de volver a mostrar una tarjeta de Novedades que usted cerró hasta que haya una versión más nueva.

## Todavía no incluido en esta versión

- **La versión 0.7 no tiene firma de código.** La firma, y el paquete de Microsoft Store, pasaron a la 0.8 porque la validación del certificado aún no llega. Verifique el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todos modos}}. En un Mac, la primera vez, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones, y todavía no hay versión para iPad ni para iPhone.
- Las listas de ángulo y de pendiente de {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- **Las verificaciones de diseño todavía no han sido revisadas por un ingeniero.** Nuestras pruebas las comparan con valores de tablas impresas y con fórmulas resueltas a mano, pero aún no con los ejemplos resueltos de una guía de diseño. Hasta que haya una revisión, son una ayuda: revise a mano los miembros que importen.
- Las verificaciones de diseño usan fuerzas de primer orden (sin efectos de segundo orden) y solo revisan perfiles I. No están incluidos: tubos, ángulos, canales, formas soldadas, piezas esbeltas (AISC) o de clase 4 (Eurocódigo) en flexión, torsión, pandeo por cortante junto con flexión, conexiones, fatiga, incendio, detallado sísmico y concreto. Una pieza esbelta en compresión deja fuera las revisiones de compresión, y el miembro aparece como "cumple, revisado en parte".
- El análisis de marcos sigue siendo de primer orden y lineal, y un ingeniero todavía no lo ha probado en una obra real.
- Los agujeros de perno, los pernos, las soldaduras y las cimentaciones no están en la exportación USD.

Todo lo demás está en [Lo que todavía no está construido](topic:not-built-yet).
