---
title: Novedades de la versión 0.9
summary: Tamaños de acero británicos y ángulos desiguales, planos de taller de cada pieza en un único conjunto PDF, Mis perfiles para secciones personalizadas, P-Delta y frecuencias naturales, cargas de viento ASCE 7, emplazamiento sísmico y combinaciones, y cursores en vivo con Seguir.
keywords: novedades, novedades, notas de la versión, registro de cambios, 0.9, acero británico, blue book, ub, uc, pfc, shs, rhs, chs, ángulo desigual, plano de taller, planos de taller, conjunto de hojas, marca de pieza, pdf, mis perfiles, perfil personalizado, p-delta, segundo orden, frecuencia natural, elementos finitos, masa modal, carga de viento, asce 7, sísmico, clase de emplazamiento, usgs, combinaciones de carga, lrfd, asd, en vivo, cursores, seguir, personas, información emergente, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de cargas, película, piloto automático, uniones, armadura, congestión, cimentación, zapata, losa, asiento, entramado, madera, entramado ligero, lista de corte, constructibilidad, acceso a soldadura, proveedor, existencias, plazo de entrega, qué falla primero, en vivo, hormigón, sísmico, losa, idiomas, asistente
from: 4c95a2de
---

Esto es lo que cambió en DetailCraft 0.9, en comparación con la 0.8.1. La 0.9 trae los tamaños de acero británicos, un plano de taller para cada pieza de una vez, una pestaña {{ui:Análisis}} más amplia para pórticos, y la visualización de los cursores de los demás cuando trabaja en equipo.

## Novedades

### Acero británico y planos de taller

- **Tamaños de acero británicos.** Las listas de perfiles incluyen ahora 976 tamaños del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS y RHS, con los perfiles huecos conformados en frío separados (sus nombres empiezan por CF). Los nombres se escriben primero por la familia, como UB305x165x40 o SHS100x100x5.0, y escribirlos como aparecen en los planos también funciona: 305x165x40 UB, L100x100x10, SHS100x5. Consulte [Catálogo de perfiles](topic:profile-catalog).
- **Ángulos desiguales.** Los ángulos UEA conservan ambas alas en IFC de entrada y de salida y en los archivos NC, y un espejo da la vuelta a la pieza de extremo a extremo.
- **Todos los planos de taller a la vez.** Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}} sin nada seleccionado. La ventana lista cada marca de pieza, previsualiza cualquiera de ellas, y {{ui:Descargar todo}} guarda un PDF con una página por marca, cada una titulada «Hoja 3 de 42». {{ui:Descargar PDF}} guarda la que está viendo. Los perfiles en U, angulares y huecos también tienen ahora hojas. Consulte [Crear planos de taller](topic:shop-drawings).
- **Mis perfiles.** Un perfil personalizado puede guardarse ahora para cada modelo nuevo. En el formulario de perfil personalizado, deje marcada {{ui:Guardar en Mis perfiles}}; la lista {{ui:Mis perfiles}} que aparece debajo tiene {{ui:Guardar}}, {{ui:Usar aquí}} y {{ui:Quitar}}. La lista se guarda en este navegador (hasta 200), no en su cuenta. Consulte [Placas y perfiles](topic:plates-and-profiles).

### Análisis

- **Segundo orden (P-Delta).** Marque {{ui:Segundo orden (P-Delta)}} junto a {{ui:Ejecutar}} en la pestaña {{ui:Análisis}} y los axiles actúan sobre el pórtico deformado. Las placas y los forjados rígidos siguen siendo de primer orden, con un aviso. Consulte [Fuerzas, reacciones y flechas](topic:frame-analysis).
- **Frecuencias naturales.** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo, con periodo y masa modal efectiva, y muestra un modo en el modelo. Consulte [Fuerzas, reacciones y flechas](topic:frame-analysis).
- **Cargas de viento y emplazamiento sísmico.** Tres bloques nuevos en la pestaña {{ui:Análisis}}: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Emplazamiento y sistema sísmico (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Consulte [Viento, emplazamiento sísmico y combinaciones ASCE 7](topic:wind-seismic-combinations).

### Trabajo en equipo

- **Cursores y nombres.** En una sesión Live, el puntero de cada persona se dibuja en el modelo con su nombre y color, y lo que seleccionan recibe un recuadro.
- **Seguir a una persona.** Abra {{ui:Personas}} en la sesión y elija {{ui:Seguir}} junto a un nombre; su vista se mueve con la de esa persona. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. Consulte [Seguir a una persona en una sesión Live](topic:follow-in-live).

### En todas las apps

- Los consejos emergentes son de Bootstrap, la tarjeta de consejos de inicio tiene un botón de cierre, las barras de pestañas se desplazan lateralmente cuando no caben, y el nombre de la pestaña del navegador muestra el documento abierto seguido de DetailCraft y CadCraft.

## Corregido

- Un perfil personalizado se perdía al empezar un modelo nuevo.
- Faltaban perfiles en U, angulares y huecos en el conjunto de planos de taller.

## Límites reconocidos

- Los bloques de viento, sísmico y de elementos finitos son ayudas de comprobación. Su ingeniero revisa los resultados; no son una comprobación según norma. La consulta a USGS se probó con un sustituto, no con el servicio en vivo.
- Los elementos finitos y P-Delta se comprobaron con resultados calculados a mano y con soluciones cerradas, no con un edificio real. El análisis de pandeo no está incluido.
- Ningún fabricante británico ha probado todavía los tamaños británicos, y los archivos NC para ángulos desiguales no se han ejecutado en una máquina.
- El conjunto de planos de taller es solo en PDF.
- Los idiomas distintos del inglés son borradores de traducción automática.
- Los instaladores de Windows no están firmados digitalmente ({{ui:Más información}}, y después {{ui:Ejecutar de todas formas}}); la imagen de disco de macOS no está notarizada (clic con el botón derecho y después {{ui:Abrir}}).

Los cambios anteriores están en las notas de 0.8 y 0.8.1 más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), en comparación con la 0.7. La 0.7 comprobaba elementos de acero; la 0.8 planifica los izados, propone las uniones, comprueba las cimentaciones y las armaduras, y arma entramados de madera y de chapa ligera para muros, forjados y cubiertas.

### Novedades

**Montaje**

- **Plan de montaje y película.** En la pestaña {{ui:Montaje}}, describa una grúa (dónde está colocada, su gancho más alto, el aparejo que no figura en la tabla de cargas) y escriba las filas de su tabla de cargas. DetailCraft iza el modelo un conjunto cada vez, en orden de fase y nivel por nivel, y comprueba cada izado con la tabla a su radio y frente al margen que haya fijado. {{ui:Guardar película}} escribe un único archivo HTML que se reproduce sin conexión en cualquier navegador, también en un teléfono. Los izados que superan la tabla, que quedan fuera de su alcance o que son demasiado altos aparecen en {{ui:Problemas}}. Es un plan a partir de sus datos, no un plan de izado. Consulte [Plan de montaje y película](topic:erection-movie).

**Uniones**

- **Piloto automático de uniones.** La pestaña {{ui:Piloto automático}} revisa cada nudo que no tiene unión y propone una a partir de los perfiles: placas de base, placas de cortante, chapas de testa para las vigas que marque como vigas de momento, empalmes y cartelas. Indique una carga uniforme o un cortante en un extremo, y el número de tornillos se ajusta a la resistencia de cálculo del tornillo. {{ui:Añadirlas todas}} añade las propuestas en un único paso de deshacer. Son valores de partida para revisar, no un diseño de unión.
- **Comprobaciones de constructibilidad.** {{ui:Problemas}} señala un tornillo que una llave no alcanza, tornillos demasiado juntos para el vaso, cordones de soldadura en ángulo fuera de sus límites de tamaño y perfiles huecos que retienen agua. El acceso para soldar es nuevo: un cordón de ángulo perimetral que el soplete del soldador no alcanza aparece listado con la pieza que estorba y la proporción de la soldadura afectada. Consulte [Comprobaciones de constructibilidad](topic:constructability).

**Cimentaciones y armaduras**

- **Comprobaciones de cimentación.** La pestaña {{ui:Cimentación}} comprueba zapatas, zapatas combinadas y losas de cimentación sobre el terreno que describa: capacidad portante, deslizamiento y vuelco por cargas de servicio; flexión, cortante, punzonamiento, longitud de anclaje y armadura mínima por cargas mayoradas (ACI 318-19). Un pilar cerca de un borde o de una esquina se comprueba con la sección recortada por el borde de la zapata. Los asientos salen del módulo del terreno, una losa flexible se resuelve sobre muelles a partir de un módulo de balasto, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de pilares pueden escribirse o tomarse del {{ui:Análisis}}. Consulte [Comprobaciones de cimentación](topic:foundation-checks).
- **Mapa de congestión de armaduras.** La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde dejan las barras muy poco espacio para que baje el hormigón, frente a la regla de separación libre y, si los indica, el árido de mayor tamaño y el cabezal del vibrador. Consulte [Mapa de congestión de armaduras](topic:rebar-congestion).

**Entramado y suministro**

- **Entramados de madera y de chapa ligera.** La pestaña {{ui:Entramado}} arma paneles de muro, forjado y cubierta con cada pieza, una lista de corte, las existencias que comprar y un plano de taller a escala. {{ui:Colocar como barras}} sitúa las piezas en el modelo, y {{ui:Hojas PDF}} guarda una hoja por cada panel. Los tamaños, separaciones y dinteles los define usted: DetailCraft no comprueba que resistan la carga. Consulte [Paneles de entramado de madera y de chapa ligera](topic:framing-panels).
- **Existencias del proveedor y plazos de entrega.** La pestaña {{ui:Suministro}} lee la lista de existencias de un proveedor (CSV) y muestra, para cada perfil que compra la lista de corte, si hay suficiente en stock y cuánto dura la espera. Los faltantes y los perfiles con retraso aparecen en {{ui:Problemas}}. No se pide nada. Consulte [Existencias del proveedor y plazos de entrega](topic:supplier-stock).

**Análisis y cálculo**

- **¿Qué falla primero?** En la pestaña {{ui:Análisis}}, el botón busca la combinación de resistencia que gobierna, el elemento más débil, cuánto pueden crecer las cargas antes de que el primer elemento llegue a su límite, y la chapa de testa o la placa de cortante más débil donde se conoce la resistencia a cortante de sus tornillos. Antes necesita las combinaciones y una norma de cálculo. No se comprueban aplastamiento, cortante en bloque, soldaduras ni palanca. Su asistente conectado puede pedir lo mismo.
- **En vivo.** Marque {{ui:En vivo: resolver de nuevo tras cada edición}} y el pórtico se vuelve a resolver tras cada edición.
- **Más hormigón.** Un pilar esbelto en un pórtico intraslacional se dimensiona para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico puede tomarse del análisis por el método de Rayleigh. Una losa hecha de placas recibe el acero que necesita cada capa a partir de sus momentos y del cortante en una dirección. Consulte [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que lo revise un ingeniero.** Los resultados de cimentación, de hormigón y de ¿Qué falla primero? son ayudas. Las cargas de viento no están incluidas.

**En todas las apps**

- **Idiomas.** La ayuda está en 54 idiomas. Los que no son inglés son borradores de traducción automática hasta que un hablante nativo los lea; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige ajuste de línea, 2 filas o 1 fila. Una barra que ya cabe se queda como está; las demás se desplazan lateralmente.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula común: categorías plegables y una densidad compacta. Las operaciones escritas, como 2*450, siguen funcionando.
- **Dispositivos de entrada.** El panel táctil, el lápiz, el ratón 3D, el mando y MIDI pueden controlar las apps. Consulte [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Las advertencias de las nuevas comprobaciones anteriores aparecen en el mismo panel {{ui:Problemas}} de antes.
- **Conecte su IA.** Su propio asistente, conectado a través de CadCraft Studio, funciona con las ocho apps y solo ve lo que usted permite. La conexión con un clic, el conector alojado y su propia clave de API en Studio están todavía por llegar. Consulte [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Selección por ventana cruzada.** Los instaladores de 0.8.1 incluyen el comportamiento de selección por ventana que ya era correcto en la versión web de 0.8; un instalador anterior no lo incluía.
- **Tabletas en vertical.** La altura sobrante de la cuadrícula va al lienzo, y la disposición de la hoja se activa a 760 px o menos.

### Todavía no incluido en esta versión

- **Enviar NC a una máquina** no está disponible todavía.
- **Las cargas de viento** para hormigón no están incluidas, y las comprobaciones de hormigón y de cimentación son para que las revise un ingeniero.
- **Firma digital.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede avisar y macOS pide un clic con el botón derecho y después Abrir.

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
