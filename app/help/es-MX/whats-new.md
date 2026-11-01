---
title: Novedades de la versión 0.7
summary: Revisiones de diseño de perfiles I de acero con combinaciones de carga de ASCE 7 o EN 1990 y revisión de miembros según AISC 360 o EN 1993-1-1, exportación USD del modelo de acero, una herramienta de asistente para USD, una cinta Acero con botones grandes y pequeños, paneles que se recogen y diálogos que se mueven.
keywords: novedades, notas de la versión, registro de cambios, cambios, 0.7, versión, funciones nuevas, revisiones de diseño, diseño de acero, aprovechamiento, combinaciones de carga, ASCE 7, EN 1990, AISC 360, EN 1993-1-1, Eurocódigo, Anexo Nacional, carga viva de techo, límite de deflexión, usd, usda, usdc, usdz, openusd, asistente, mcp, cinta Acero, cinta, botón dividido, unidades, compacto, paneles, diálogos, portugués
from: 17d1e0bb
---

Esto es lo que cambió en DetailCraft 0.7, comparado con 0.6. El análisis de estructura de 0.6 ahora tiene un segundo paso: revisar los miembros de acero según un código de diseño.

## Novedades

### Juntas a inglete (0.7.1)

- **Dos perfiles I que se encuentran en ángulo**, como una rodilla de pórtico o una cumbrera: selecciónelos, elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}, y ambos extremos se cortan en el plano que divide el ángulo por la mitad. Las placas de extremo atornilladas entre sí y los atiesadores de alma son casillas en el nuevo diálogo Inglete, cuyos campos numerados coinciden con un dibujo de su junta que se hace mientras escribe. El inglete sigue a los miembros cuando se mueven y pasa a planos, archivos NC (cortes oblicuos), IFC y la lista de materiales. Vea [Juntas a inglete](topic:mitres).

### Revisiones de diseño

- **Combinaciones de carga del código.** En la pestaña {{ui:Análisis}}, el nuevo bloque {{ui:Revisiones de diseño}} tiene un {{ui:Código de diseño}}: ASCE 7 + AISC 360 (EE. UU., LRFD) o EN 1990 + EN 1993-1-1 (Eurocódigo). Dé a cada caso de carga su tipo (muerta, viva, la nueva viva de techo, nieve, viento, sísmica), pulse {{ui:Generar combinaciones}}, y DetailCraft escribe las combinaciones de resistencia y de servicio del código con sus casos. Las combinaciones que usted escribió se conservan. Vea [Genere las combinaciones](topic:design-checks#make-the-combinations).
- **Valores del Anexo Nacional.** Para el Eurocódigo los factores parten de los valores recomendados; {{ui:Valores del Anexo Nacional}} le permite escribir los de su país, y se guardan en el modelo. Vea [Genere las combinaciones](topic:design-checks#make-the-combinations).
- **Revisar miembros.** {{ui:Revisar miembros}} revisa cada perfil I de acero por tensión, compresión con pandeo, flexión con pandeo lateral por torsión, cortante, flexión con fuerza axial y deflexión contra el {{ui:Límite de deflexión (L / …)}} que usted fije. La tabla muestra el aprovechamiento de cada miembro, la revisión que rige y su combinación, y los miembros se colorean en el modelo (azul, verde, ocre, rojo, gris para no revisado). Vea [Revise los miembros](topic:design-checks#check-the-members).
- **En el informe.** {{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} agregan las ediciones de los códigos, los ajustes, el aprovechamiento por miembro y cada cláusula usada. Vea [El informe](topic:design-checks#the-report).
- **Una ayuda hasta que un ingeniero la revise.** Usa solo fuerzas de primer orden. Los tubos, ángulos, canales, perfiles soldados y piezas esbeltas o de clase 4 dicen "no revisado", con el motivo; no se revisan torsión, conexiones ni concreto. Vea [Qué no se revisa](topic:design-checks#what-is-not-checked).

### USD

- **Exporte el modelo de acero como USD.** {{ui:USD}} en el grupo {{ui:Salida}} escribe el modelo como {{ui:Texto (.usda)}}, {{ui:Binario (.usdc)}} o {{ui:Paquete (.usdz)}} para programas de render y armado de escenas: cada ensamblaje contiene sus piezas, cada pieza es su sección recorrida a lo largo con los despuntes cortados, y cada una lleva su marca de pieza, perfil, calidad, longitud y peso. Los agujeros de pernos, pernos, soldaduras y zapatas no están en las mallas USD. Vea [Exporte el modelo de acero como USD](topic:usd).

### Asistentes de IA

- **USD para asistentes.** Su propio asistente, conectado mediante CadCraft Studio, puede exportar el modelo como USD (`usd_export`) y, en Studio, escribirlo en una carpeta que usted permitió. Vea [Qué puede pedir un asistente](topic:use-with-ai-assistants#what-an-assistant-can-ask-for).

## Cambios

- **La cinta Acero** tiene botones grandes y pequeños: una {{ui:Viga}} grande junto a {{ui:Columna}}, {{ui:Contraviento}} y {{ui:Placa}} pequeños en {{ui:Modelado}} › {{ui:Miembros}}; unas {{ui:Placas de extremo}} grandes en {{ui:Detallado}} › {{ui:Conexiones}}, con {{ui:Empalme}} y {{ui:Cartela}} compartiendo un botón dividido; un {{ui:Pegar}} grande en {{ui:Edición}} › {{ui:Portapapeles}}, con {{ui:Pegar en el mismo lugar}} y {{ui:Duplicar}} tras la flecha del grupo. {{ui:Fabricación}} › {{ui:Intercambio}} tiene {{ui:Exportar USD}} junto a IFC. Los demás estilos de menú se ven como antes. Vea [Menús, teclas y mouse](topic:menus-keys-and-mouse#the-three-styles).
- [Analice la estructura](topic:frame-analysis) ahora remite a las revisiones de diseño, y sus combinaciones pueden generarse por código.

## En todas las aplicaciones

- **Unidades.** {{ui:Configuración}} › {{ui:General}} › {{ui:Unidades}} tiene una lista cada una para longitud, área, volumen, ángulo y pendiente, con los tamaños exactos que dan las definiciones de las unidades (el pie topográfico de EE. UU. es su propia unidad). Desactive las unidades que nunca usa y salen de las listas de unidades; marque una con estrella y el trabajo nuevo empieza en ella. Un archivo siempre conserva su propia unidad. Los cuadros propios de DetailCraft aún no siguen las listas: sus longitudes se siguen escribiendo en milímetros. Vea [Unidades, valores escritos y listas de unidades](common:unit-lists).
- **Un diseño más denso y paneles que se recogen.** {{ui:Configuración}} › {{ui:General}} › {{ui:Densidad del diseño}} › {{ui:Compacta}} cabe más en la pantalla (las pantallas táctiles y los teléfonos conservan sus botones grandes). Cada panel lateral tiene una barra de título delgada: arrástrela para acoplar o flotar el panel, suéltela sobre la barra de otro panel para compartir un marco como pestañas, fíjelo para que se deslice hacia el borde, u ocúltelo y tráigalo de vuelta desde el borde. Vea [Organice los paneles](common:arrange-panels#make-the-layout-denser).
- **Los diálogos se mueven.** Arrastre un diálogo por su barra de título para quitarlo del paso del dibujo; vuelve donde lo dejó. Haga doble clic en la barra de título para centrarlo otra vez. Vea [Mueva un diálogo](common:arrange-panels#move-a-dialog).
- **Recetas para asistentes de IA.** Diez peticiones resueltas para su propio asistente (ordenar un dibujo, trazar un juego, revisar dibujos, hacer preguntas a un modelo, totalizar una cuantificación, probar una variante de pieza…), cada una con las herramientas que llama y los permisos que necesita, y cada una reproducida por nuestras pruebas. Las aplicaciones no contienen IA. Vea [Recetas para asistentes de IA](common:assistants-recipes).
- **Idiomas.** **Português (Portugal)** es nuevo en {{ui:Configuración}} › {{ui:General}} › {{ui:Idioma}}. Ese, **Português (Brasil)**, **Español (México)** y **Bahasa Indonesia** ya tienen cada palabra de las aplicaciones, como borradores aún no revisados por un hablante nativo. Los temas de ayuda están en inglés.
- **CadCraft Studio** dice por qué falló una búsqueda de actualización (aún no hay archivo para su sistema, no hay red, firma incorrecta) en lugar de solo "Listo", y deja de traer una tarjeta de Novedades que usted cerró hasta que haya una versión más nueva.

## Aún no está en esta versión

- **0.7 no está firmada con certificado de código.** La firma y el paquete de Microsoft Store pasaron a 0.8 porque la validación del certificado aún no llega. Compruebe el SHA-256 junto a cada archivo en getcadcraft.com/download. En Windows, si SmartScreen detiene el instalador, elija {{ui:Más información}} y luego {{ui:Ejecutar de todas formas}}. En una Mac, la primera vez, haga clic derecho en CadCraft Studio y elija {{ui:Abrir}}. CadCraft Studio todavía no está en una tienda de aplicaciones y aún no hay versión para iPad ni iPhone.
- Las listas de ángulo y pendiente en {{ui:Unidades}} se guardan, pero ningún cuadro las lee todavía.
- **Las revisiones de diseño aún no las ha revisado un ingeniero.** Nuestras pruebas las comparan con valores impresos de tablas y fórmulas resueltas a mano, todavía no con ejemplos resueltos de una guía de diseño. Hasta una revisión, son una ayuda: revise a mano los miembros que importan.
- Las revisiones de diseño usan fuerzas de primer orden (sin efectos de segundo orden) y revisan solo perfiles I. No están construidos: tubos, ángulos, canales, perfiles soldados, piezas esbeltas (AISC) o de clase 4 (Eurocódigo) en flexión, torsión, pandeo por cortante junto con flexión, conexiones, fatiga, fuego, detallado sísmico y concreto. Una pieza esbelta en compresión deja fuera las revisiones de compresión, y el miembro dice "passes, partly checked".
- El análisis de estructura sigue siendo de primer orden y lineal, y aún no lo ha probado un ingeniero en un trabajo real.
- Los agujeros de pernos, pernos, soldaduras y zapatas no están en la exportación USD.

Todo lo demás está en [Lo que aún no está construido](topic:not-built-yet).
