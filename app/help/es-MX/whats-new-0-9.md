---
title: Novedades de la versión 0.9
summary: Tamaños de acero del Reino Unido y ángulos desiguales según el Blue Book, planos de taller de cada pieza en un solo juego PDF, Mis perfiles para secciones personalizadas, P-Delta y frecuencias naturales, cargas de viento de ASCE 7, sitio sísmico y combinaciones, y cursores en vivo con Seguir.
keywords: novedades, novedades, notas de la versión, registro de cambios, 0.9, acero del reino unido, blue book, ub, uc, pfc, shs, rhs, chs, ángulo desigual, plano de taller, planos de taller, juego de hojas, marca de pieza, pdf, mis perfiles, perfil personalizado, p-delta, segundo orden, frecuencia natural, elementos finitos, masa modal, carga de viento, asce 7, sísmico, clase de sitio, usgs, combinaciones de carga, lrfd, asd, en vivo, cursores, seguir, personas, información emergente, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de carga, película, piloto automático, conexiones, varilla, congestión, cimentación, zapata, losa de cimentación, asentamiento, armazón, madera, lámina delgada, lista de cortes, constructibilidad, acceso a soldadura, proveedor, existencias, tiempo de entrega, qué falla primero, en vivo, concreto, sísmico, losa, idiomas, asistente
from: 4c95a2de
---

Esto es lo que cambió en DetailCraft 0.9, en comparación con la 0.8.1. La 0.9 trae los tamaños de acero del Reino Unido, un plano de taller para cada pieza de una sola vez, una pestaña {{ui:Análisis}} más grande para marcos y una vista de los cursores de los demás cuando trabajan en conjunto.

## Novedades

### Acero del Reino Unido y planos de taller

- **Tamaños de acero del Reino Unido.** Las listas de perfiles ahora incluyen 976 tamaños del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS y RHS, con las secciones huecas formadas en frío separadas (sus nombres empiezan con CF). Los nombres se escriben primero por familia, como UB305x165x40 o SHS100x100x5.0, y también funciona escribirlos como lo dicen los planos: 305x165x40 UB, L100x100x10, SHS100x5. Vea [Catálogo de perfiles](topic:profile-catalog).
- **Ángulos desiguales.** Los ángulos UEA conservan ambas alas a través de IFC de entrada y salida y de los archivos NC, y una simetría invierte la pieza de extremo a extremo.
- **Todos los planos de taller a la vez.** Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}} sin nada designado. La ventana enumera todas las marcas de pieza, muestra la vista previa de cualquiera de ellas, y {{ui:Descargar todo}} guarda un solo PDF con una página por marca, cada una titulada "Hoja 3 de 42". {{ui:Descargar PDF}} guarda la hoja que está viendo. Los canales, ángulos y secciones huecas ahora también tienen hojas. Vea [Hacer planos de taller](topic:shop-drawings).
- **Mis perfiles.** Un perfil personalizado ahora puede conservarse para cada modelo nuevo. En el formulario de Perfil personalizado, deje marcada la casilla {{ui:Guardar en Mis perfiles}}; la lista {{ui:Mis perfiles}} debajo tiene {{ui:Guardar}}, {{ui:Usar aquí}} y {{ui:Quitar}}. La lista se guarda en este navegador (hasta 200), no en su cuenta. Vea [Placas y perfiles](topic:plates-and-profiles).

### Análisis

- **Segundo orden (P-Delta).** Marque {{ui:Segundo orden (P-Delta)}} junto a {{ui:Ejecutar}} en la pestaña {{ui:Análisis}} y las fuerzas axiales actúan sobre el marco deformado. Las placas y los diafragmas rígidos siguen siendo de primer orden, con una advertencia. Vea [Fuerzas, reacciones y deflexiones](topic:frame-analysis).
- **Frecuencias naturales.** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo, con periodo y masa modal efectiva, y muestra un modo en el modelo. Vea [Fuerzas, reacciones y deflexiones](topic:frame-analysis).
- **Cargas de viento y sitio sísmico.** Tres bloques nuevos en la pestaña {{ui:Análisis}}: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Sitio sísmico y sistema (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Vea [Viento, sitio sísmico y combinaciones ASCE 7](topic:wind-seismic-combinations).

### Trabajo en conjunto

- **Cursores y nombres.** En una sesión en vivo, el puntero de cada persona se dibuja en el modelo con su nombre y su color, y lo que seleccionó recibe un recuadro.
- **Seguir a una persona.** Abra {{ui:Personas}} en la sesión y elija {{ui:Seguir}} junto a un nombre; su vista se mueve con la de esa persona. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. Vea [Seguir a una persona en una sesión en vivo](topic:follow-in-live).

### En todas las aplicaciones

- Las sugerencias emergentes son de Bootstrap, la tarjeta de sugerencia inicial tiene un botón de cierre, las barras de pestañas se desplazan lateralmente cuando no caben, y el nombre de la pestaña del navegador muestra el documento abierto seguido de DetailCraft y CadCraft.

## Corregido

- Un perfil personalizado se perdía al iniciar un modelo nuevo.
- Los canales, ángulos y secciones huecas faltaban en el juego de planos de taller.

## Límites reales

- Los bloques de viento, sísmico y de elementos finitos son ayudas para revisar. Su ingeniero revisa los resultados; no son una revisión de código. La búsqueda en USGS se probó con un sustituto, no con el servicio en vivo.
- Los elementos finitos y P-Delta se verificaron con respuestas a mano y en forma cerrada, no con una edificación real. El análisis de pandeo no está construido.
- Ningún fabricante del Reino Unido ha probado todavía los tamaños del Reino Unido, y los archivos NC para ángulos desiguales no se han ejecutado en una máquina.
- El juego de planos de taller es solo PDF.
- Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar de todos modos); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

Los cambios anteriores están en las notas de la 0.8 y la 0.8.1 más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), en comparación con la 0.7. La 0.7 revisaba miembros de acero; la 0.8 planea los izajes, propone las conexiones, revisa las cimentaciones y el acero de refuerzo, y arma muros, pisos y techos de madera y de lámina delgada.

### Novedades

**Montaje**

- **Plan de montaje y película.** En la pestaña {{ui:Montaje}}, describa una grúa (dónde está colocada, su gancho más alto, el aparejo que no aparece en la tabla de carga) y escriba las filas de su tabla de carga. DetailCraft iza el modelo un ensamblaje a la vez, en orden de fase y nivel por nivel, y revisa cada izaje contra la tabla en su radio y contra el margen que usted fijó. {{ui:Guardar película}} escribe un solo archivo HTML que se reproduce sin conexión en cualquier navegador, incluso en un teléfono. Los izajes que superan la tabla, que quedan más allá de ella o que están demasiado altos aparecen en {{ui:Problemas}}. Es un plan a partir de sus números, no un plan de izaje. Vea [Plan de montaje y película](topic:erection-movie).

**Conexiones**

- **Piloto automático de conexiones.** La pestaña {{ui:Piloto automático}} revisa cada unión que no tiene conexión y propone una según los perfiles: placas base, placas de cortante, placas de extremo para las vigas que marque como vigas de momento, empalmes y placas de nudo. Indique una carga uniforme o un cortante en un extremo, y el número de pernos sigue la resistencia de diseño del perno. {{ui:Agregarlas todas}} agrega las propuestas como un solo paso de deshacer. Son valores iniciales para revisar, no un diseño de conexión.
- **Revisiones de constructibilidad.** {{ui:Problemas}} para un perno que una llave no alcanza, pernos demasiado cerca para el dado, soldaduras de filete fuera de sus límites de tamaño y secciones huecas que retienen agua. El acceso a la soldadura es nuevo: una soldadura de filete perimetral que la antorcha de un soldador no alcanza aparece listada con la pieza que estorba y la parte de la soldadura afectada. Vea [Revisiones de constructibilidad](topic:constructability).

**Cimentaciones y acero de refuerzo**

- **Revisiones de cimentación.** La pestaña {{ui:Cimentación}} revisa zapatas, zapatas combinadas y losas de cimentación sobre el suelo que usted describa: capacidad de carga, deslizamiento y volteo con cargas de servicio; flexión, cortante, punzonamiento, desarrollo y acero mínimo con cargas factorizadas (ACI 318-19). Una columna cerca de un borde o de una esquina se revisa con la sección recortada por el borde de la zapata. El asentamiento sale del módulo del suelo, una losa flexible se resuelve sobre resortes a partir de un módulo de subrasante, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de columna se pueden escribir o tomar del {{ui:Análisis}}. Vea [Revisiones de cimentación](topic:foundation-checks).
- **Mapa de congestión de acero de refuerzo.** La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde las varillas dejan muy poco espacio para que el concreto baje, contra la regla de separación libre y, si los indica, el agregado más grande y la cabeza del vibrador. Vea [Mapa de congestión de acero de refuerzo](topic:rebar-congestion).

**Armazón y suministro**

- **Armazón de madera y de lámina delgada.** La pestaña {{ui:Armazón}} arma paneles de muro, piso y techo con cada pieza, una lista de cortes, el material que hay que comprar y un plano de taller a escala. {{ui:Colocar como miembros}} pone las piezas en el modelo, y {{ui:Hojas PDF}} guarda una hoja por cada panel. Los tamaños, la separación y los cabezales son suyos: DetailCraft no revisa que soporten la carga. Vea [Paneles de armazón de madera y lámina delgada](topic:framing-panels).
- **Existencias del proveedor y tiempos de entrega.** La pestaña {{ui:Suministro}} lee la lista de existencias de un proveedor (CSV) y muestra, para cada sección que compra la lista de cortes, si hay suficiente en existencia y cuánto dura la espera. Los faltantes y las secciones atrasadas están en {{ui:Problemas}}. No se hace ningún pedido. Vea [Existencias del proveedor y tiempos de entrega](topic:supplier-stock).

**Análisis y diseño**

- **¿Qué falla primero?** En la pestaña {{ui:Análisis}}, el botón encuentra la combinación de resistencia que rige, el miembro más débil, cuánto pueden crecer las cargas antes de que el primer miembro llegue a su límite, y la placa de extremo o la placa de cortante más débil, cuando se conoce la resistencia a cortante de sus pernos. Primero necesita las combinaciones y un código de diseño. La resistencia de apoyo, el cortante en bloque, las soldaduras y el pandeo local no se revisan. Su asistente conectado puede pedir lo mismo.
- **En vivo.** Marque {{ui:En vivo: resolver de nuevo tras cada edición}} y el marco se vuelve a resolver después de cada edición.
- **Concreto, y más.** Una columna esbelta en un marco sin desplazamiento se diseña para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico puede tomarse del análisis mediante el método de Rayleigh. Una losa hecha de placas recibe el acero que necesita cada capa a partir de sus momentos, y el cortante en una dirección. Vea [Revisar elementos de concreto y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que un ingeniero revise.** Los resultados de cimentación, concreto y ¿Qué falla primero? son ayudas. Las cargas de viento no están construidas.

**En todas las aplicaciones**

- **Idiomas.** La ayuda está en 54 idiomas. Los que no son inglés son borradores de máquina hasta que un hablante nativo los lea; diez son nuevos (lituano, letón, bosnio, maratí, telugu, albanés, afrikáans, filipino, suajili, uzbeko).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige ajustar, 2 filas o 1 fila. Una barra que ya cabe se queda igual; las demás se desplazan lateralmente.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula compartida: categorías plegables y densidad compacta. Las operaciones aritméticas escritas, como 2*450, siguen funcionando.
- **Dispositivos de entrada.** Almohadilla táctil, lápiz, ratón 3D, control y MIDI pueden manejar las aplicaciones. Vea [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Las advertencias de las nuevas revisiones de arriba aparecen en el mismo panel {{ui:Problemas}} de antes.
- **Conecte su IA.** Su propio asistente, conectado mediante CadCraft Studio, funciona con las ocho aplicaciones y solo ve lo que usted permite. La conexión con un clic, el conector alojado y su propia clave de API en Studio aún están por llegar. Vea [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Selección por ventana de captura.** Los instaladores 0.8.1 ya incluyen bien el comportamiento de selección por ventana de la versión web 0.8; un instalador anterior no lo tenía.
- **Tabletas en vertical.** El alto de cuadrícula sobrante se asigna al lienzo, y la disposición de la hoja empieza en 760 px o menos.

### Todavía no incluido en esta versión

- **Enviar NC a una máquina** no está publicado.
- **Cargas de viento** para concreto no están construidas, y los resultados de concreto y cimentación son para que un ingeniero los revise.
- **Firma de código.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede advertir y macOS pide clic derecho y luego Abrir.

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
