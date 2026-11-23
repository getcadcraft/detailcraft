---
title: Novedades de la versión 0.9 (anteriores)
summary: Tamaños de acero del Reino Unido y ángulos desiguales, planos de taller de cada pieza en un único juego de PDF, Mis perfiles para secciones personalizadas, P-Delta y frecuencias naturales, cargas de viento según ASCE 7, emplazamiento sísmico y combinaciones, y cursores en vivo con Seguir.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, acero del Reino Unido, Blue Book, ub, uc, pfc, shs, rhs, chs, ángulo desigual, plano de taller, planos de taller, juego de hojas, marca de pieza, pdf, mis perfiles, perfil personalizado, p-delta, segundo orden, frecuencia natural, elementos finitos, masa modal, carga de viento, asce 7, sísmica, emplazamiento sísmico, usgs, combinaciones de carga, lrfd, asd, en vivo, cursores, seguir, personas, descripciones emergentes, novedades, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de cargas, película, piloto automático, uniones, armadura, congestión, cimentación, zapata, asentamiento, entramado, madera, entramado ligero de acero, lista de corte, constructibilidad, acceso para soldar, proveedor, existencias, plazo de entrega, qué falla primero, hormigón, sísmica, losa, idiomas, asistente
from: ab0c7f05
---

Estos son los cambios de DetailCraft 0.9 respecto a la 0.8.1. La 0.9 incorpora los tamaños de acero del Reino Unido, un plano de taller para cada pieza de una vez, una pestaña {{ui:Analysis}} más grande para pórticos y una vista de los cursores de los demás cuando trabajan juntos.

## Novedades

### Acero del Reino Unido y planos de taller

- **Tamaños de acero del Reino Unido.** Las listas de perfiles incluyen ahora 976 tamaños del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS y RHS, con los perfiles huecos conformados en frío separados (sus nombres empiezan por CF). Los nombres se escriben primero por la familia, como UB305x165x40 o SHS100x100x5.0, y también funciona escribirlos como aparecen en los planos: 305x165x40 UB, L100x100x10, SHS100x5. Véase [Catálogo de perfiles](topic:profile-catalog).
- **Ángulos desiguales.** Los ángulos UEA conservan ambas alas en IFC de entrada y de salida y en los archivos NC, y un espejo da la vuelta a la pieza de extremo a extremo.
- **Todos los planos de taller a la vez.** Elija {{ui:Shop drawing}} en el grupo {{ui:Output}} sin nada seleccionado. La ventana lista todas las marcas de pieza, muestra una vista previa de cualquiera de ellas, y {{ui:Download all}} guarda un PDF con una página por marca, cada una titulada «Hoja 3 de 42». {{ui:Download this sheet}} guarda la que está viendo. Ahora los perfiles en U, los ángulos y los perfiles huecos también tienen hojas. Véase [Hacer planos de taller](topic:shop-drawings).
- **Mis perfiles.** Un perfil personalizado puede guardarse ahora para cada modelo nuevo. En el formulario de perfil personalizado, deje marcada la opción Guardar en Mis perfiles; la lista {{ui:My profiles}} que aparece debajo tiene {{ui:Keep}}, {{ui:Use here}} y {{ui:Remove}}. La lista se guarda en este navegador (hasta 200), no en su cuenta. Véase [Placas y perfiles](topic:plates-and-profiles).

### Análisis

- **Segundo orden (P-Delta).** Marque {{ui:Second order (P-Delta)}} junto a Ejecutar en la pestaña {{ui:Analysis}} y los axiles actúan sobre el pórtico deformado. Las placas y los forjados rígidos siguen siendo de primer orden, con un aviso. Véase [Esfuerzos, reacciones y flechas](topic:frame-analysis).
- **Frecuencias naturales.** El bloque {{ui:Finite elements: natural frequencies}} bajo los resultados encuentra los modos más bajos del mismo modelo, con periodo y masa modal efectiva, y muestra un modo en el modelo. Véase [Esfuerzos, reacciones y flechas](topic:frame-analysis).
- **Cargas de viento y emplazamiento sísmico.** Tres bloques nuevos en la pestaña {{ui:Analysis}}: {{ui:Wind loads (ASCE 7 directional procedure)}}, {{ui:Seismic site and system (ASCE 7)}} y {{ui:ASCE 7 load combinations}}. Véase [Viento, emplazamiento sísmico y combinaciones ASCE 7](topic:wind-seismic-combinations).

### Trabajo en equipo

- **Cursores y nombres.** En una sesión en vivo, el puntero de cada persona se dibuja en el modelo con su nombre y su color, y lo que haya seleccionado recibe un recuadro.
- **Seguir a una persona.** Abra {{ui:People}} en la sesión y elija {{ui:Follow}} junto a un nombre; su vista se mueve con la de esa persona. El anfitrión puede elegir {{ui:Ask everyone to follow me}}. Véase [Seguir a una persona en una sesión en vivo](topic:follow-in-live).

### En todas las aplicaciones

- Las descripciones emergentes son de Bootstrap, la tarjeta de inicio tiene un botón de cierre, las barras de pestañas se desplazan lateralmente cuando no caben, y el nombre de la pestaña del navegador muestra el documento abierto seguido de DetailCraft y CadCraft.

## Corregido

- Un perfil personalizado se perdía al empezar un modelo nuevo.
- Faltaban los perfiles en U, los ángulos y los perfiles huecos en el juego de planos de taller.

## Límites reconocidos

- Los bloques de viento, sísmica y elementos finitos son ayudas para la comprobación. Su ingeniero revisa los resultados; no son una comprobación de norma. La consulta a USGS se probó con un sustituto, no con el servicio en directo.
- Los elementos finitos y P-Delta se comprobaron frente a soluciones a mano y soluciones analíticas cerradas, no frente a un edificio real. El análisis de pandeo no está incluido.
- Ningún fabricante del Reino Unido ha probado todavía los tamaños británicos, y los archivos NC de ángulos desiguales no se han ejecutado en una máquina.
- El juego de planos de taller solo está en PDF.
- Los idiomas distintos del inglés son borradores automáticos.
- Los instaladores de Windows no tienen firma de código (Más información, después Ejecutar de todas formas); la imagen de disco de macOS no está notarizada (clic con el botón derecho, después Abrir).

Los cambios anteriores están en las notas de la 0.8 y la 0.8.1, más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Estos son los cambios de DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), respecto a la 0.7. La 0.7 comprobaba miembros de acero; la 0.8 planifica los izados, propone las uniones, comprueba las cimentaciones y la armadura, y genera el entramado de muros, forjados y cubiertas de madera y de entramado ligero de acero.

### Novedades

**Montaje**

- **Plan de montaje y película.** En la pestaña {{ui:Erection}}, describa una grúa (dónde está, su gancho más alto, el aparejo que no figura en la tabla) y escriba las filas de su tabla de cargas. DetailCraft iza el modelo un conjunto cada vez, por orden de fase y nivel por nivel, y comprueba cada izado frente a la tabla a su radio y frente al margen que fije. {{ui:Save movie}} escribe un archivo HTML que se reproduce sin conexión en cualquier navegador, también en un teléfono. Los izados que superan la tabla, quedan fuera de ella o están demasiado altos figuran en {{ui:Problems}}. Es un plan a partir de sus datos, no un plan de izado. Véase [Plan de montaje y película](topic:erection-movie).

**Uniones**

- **Piloto automático de uniones.** La pestaña {{ui:Autopilot}} revisa cada nudo que no tiene unión y propone una a partir de las formas: placas de base, placas de cortante, placas de testa para las vigas que marque como vigas de momento, empalmes y cartelas. Indique una carga uniforme o un cortante en un extremo, y el número de tornillos sigue la resistencia de cálculo del tornillo. {{ui:Add them all}} añade las propuestas como un único paso de deshacer. Son valores iniciales que hay que revisar, no un diseño de unión.
- **Comprobaciones de constructibilidad.** {{ui:Problems}} avisa de un tornillo que una llave no alcanza, de tornillos demasiado juntos para el vaso, de cordones de soldadura en ángulo fuera de sus límites de tamaño y de perfiles huecos que retienen agua. El acceso para soldar es nuevo: una soldadura en ángulo perimetral que la antorcha del soldador no alcanza aparece listada con la pieza que estorba y la parte de la soldadura afectada. Véase [Comprobaciones de constructibilidad](topic:constructability).

**Cimentaciones y armadura**

- **Comprobaciones de cimentación.** La pestaña {{ui:Foundation}} comprueba zapatas, zapatas combinadas y losas sobre el terreno que describa: presión de apoyo, deslizamiento y vuelco con cargas de servicio; flexión, cortante, punzonamiento, anclaje de armaduras y armadura mínima con cargas mayoradas (ACI 318-19). Un pilar cerca de un borde o de una esquina se comprueba con la sección recortada por el borde de la zapata. El asentamiento sale del módulo del terreno, una losa flexible se resuelve sobre muelles a partir de un módulo de balasto, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de pilar se pueden escribir o tomar de {{ui:Analysis}}. Véase [Comprobaciones de cimentación](topic:foundation-checks).
- **Mapa de congestión de armadura.** La pestaña {{ui:Congestion}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde dejan las barras muy poco espacio para que el hormigón baje, frente a la regla de separación libre y, si las indica, el árido de mayor tamaño y la cabeza del vibrador. Véase [Mapa de congestión de armadura](topic:rebar-congestion).

**Entramado y suministro**

- **Entramado de madera y de entramado ligero de acero.** La pestaña {{ui:Framing}} genera los paneles de muro, forjado y cubierta con cada pieza, una lista de corte, las existencias que hay que comprar y un plano de taller a escala. {{ui:Place as members}} coloca las piezas en el modelo, y {{ui:PDF sheets}} guarda una hoja por cada panel. Las secciones, separaciones y dinteles los fija usted: DetailCraft no comprueba que resistan la carga. Véase [Paneles de entramado de madera y ligero](topic:framing-panels).
- **Existencias de proveedores y plazos de entrega.** La pestaña {{ui:Supply}} lee la lista de existencias de un proveedor (CSV) y muestra, para cada sección que compra la lista de corte, si hay existencias suficientes y cuánto dura la espera. Los faltantes y las secciones con retraso figuran en {{ui:Problems}}. No se realiza ningún pedido. Véase [Existencias de proveedores y plazos de entrega](topic:supplier-stock).

**Análisis y cálculo**

- **¿Qué falla primero?** En la pestaña {{ui:Analysis}}, el botón encuentra la combinación de resistencia que gobierna, el miembro más débil, cuánto pueden crecer las cargas antes de que el primer miembro alcance su límite, y la placa de testa o la placa de cortante más débil cuando se conoce la resistencia a cortante de sus tornillos. Necesita antes las combinaciones y una norma de cálculo. No se comprueban el aplastamiento, el cortante de bloque, las soldaduras ni el palanqueo. Su asistente conectado también puede pedir lo mismo.
- **En vivo.** Marque {{ui:Live: solve again after each edit}} y el pórtico se vuelve a resolver tras cada edición.
- **Hormigón y más.** Un pilar esbelto en un pórtico intraslacional se diseña para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico puede tomarse del análisis por el método de Rayleigh. Una losa hecha de placas recibe el acero que necesita cada capa a partir de sus momentos, y el cortante unidireccional. Véase [Comprobar miembros de hormigón y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que lo revise un ingeniero.** Los resultados de cimentación, de hormigón y de ¿Qué falla primero? son ayudas. Las cargas de viento no están incluidas.

**En todas las aplicaciones**

- **Idiomas.** La ayuda está en 54 idiomas. Los distintos del inglés son borradores automáticos hasta que un hablante nativo los revise; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili y uzbeko).
- **Filas de la barra de herramientas.** {{ui:Settings}} › {{ui:General}} › {{ui:Toolbar rows}} elige ajustar, 2 filas o 1 fila. Una barra que ya cabe se queda como está; las demás se desplazan lateralmente.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula compartida: categorías plegables y densidad compacta. Las operaciones escritas como 2*450 siguen funcionando.
- **Dispositivos de entrada.** El panel táctil, el lápiz digital, el ratón 3D, el mando y MIDI pueden manejar las aplicaciones. Véase [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Los avisos de las nuevas comprobaciones anteriores aparecen en el mismo panel {{ui:Problems}} de siempre.
- **Conecte su IA.** Su propio asistente, conectado a través de CadCraft Studio, funciona con las ocho aplicaciones y solo ve lo que usted permita. La conexión con un clic, el conector alojado y su propia clave de API en Studio todavía están por llegar. Véase [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: díganos si el idioma no cambia.
- **Selección por ventana cruzada.** Los instaladores de la 0.8.1 incorporan ya el comportamiento correcto de selección por ventana que tenía la versión web de la 0.8; un instalador anterior no lo tenía.
- **Tabletas en vertical.** El alto de cuadrícula sobrante va al lienzo, y la disposición de hoja empieza a 760 px o menos.

### Todavía no incluido en esta versión

- **Enviar NC a una máquina** no está disponible todavía.
- **Cargas de viento** para hormigón no están incluidas, y las comprobaciones de hormigón y de cimentación son para que las revise un ingeniero.
- **Firma de código.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede avisar y macOS pide clic con el botón derecho y después Abrir.

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
