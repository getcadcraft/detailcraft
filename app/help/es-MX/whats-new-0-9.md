---
title: Novedades de la versión 0.9 (anteriores)
summary: Tamaños de acero del Reino Unido y ángulos desiguales, planos de taller para cada pieza en un solo juego de PDF, Mis perfiles para secciones personalizadas, P-Delta y frecuencias naturales, cargas de viento ASCE 7, sitio sísmico y combinaciones, y cursores en vivo con Seguir.
keywords: novedades 0.9, versión anterior, novedades, qué hay de nuevo, notas de la versión, registro de cambios, 0.9, acero del reino unido, blue book, ub, uc, pfc, shs, rhs, chs, ángulo desigual, plano de taller, planos de taller, juego de hojas, marca de pieza, pdf, mis perfiles, perfil personalizado, p-delta, segundo orden, frecuencia natural, elementos finitos, masa modal, carga de viento, asce 7, sísmico, clase de sitio, usgs, combinaciones de carga, lrfd, asd, en vivo, cursores, seguir, personas, descripciones emergentes, novedades, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de carga, película, piloto automático, conexiones, varillas, congestión, cimentación, zapata, losa, armazón, madera, perfil ligero, lista de cortes, constructibilidad, acceso para soldar, proveedor, existencias, tiempo de entrega, qué falla primero, concreto, sísmico, losa, idiomas, asistente
from: ab0c7f05
---

Esto es lo que cambió en DetailCraft 0.9, en comparación con la 0.8.1. La 0.9 trae los tamaños de acero del Reino Unido, un plano de taller para cada pieza en una sola operación, una pestaña {{ui:Análisis}} más grande para marcos y una vista de los cursores de los demás cuando trabajan juntos.

## Nuevo

### Acero del Reino Unido y planos de taller

- **Tamaños de acero del Reino Unido.** Las listas de perfiles ahora incluyen 976 tamaños del Steel for Life Blue Book: UB, UC, PFC, EA, UEA, CHS, SHS y RHS, con los perfiles huecos formados en frío separados (sus nombres empiezan con CF). Los nombres se escriben primero con la familia, como UB305x165x40 o SHS100x100x5.0, y también funciona escribirlos como los dicen los planos: 305x165x40 UB, L100x100x10, SHS100x5. Vea [Catálogo de perfiles](topic:profile-catalog).
- **Ángulos desiguales.** Los ángulos UEA conservan ambas alas al leer y escribir IFC y en archivos NC, y una simetría invierte la pieza de extremo a extremo.
- **Todos los planos de taller a la vez.** Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}} sin nada seleccionado. La ventana enumera cada marca de pieza, muestra la vista previa de cualquiera de ellas, y {{ui:Descargar todo}} guarda un PDF con una página por marca, cada una con el título "Hoja 3 de 42". {{ui:Descargar PDF}} guarda la hoja que está viendo. Los canales, ángulos y perfiles huecos ahora también tienen hojas. Vea [Generar planos de taller](topic:shop-drawings).
- **Mis perfiles.** Un perfil personalizado ahora puede guardarse para cada modelo nuevo. En el formulario de perfil personalizado, deje marcada {{ui:Guardar en Mis perfiles}}; la lista {{ui:Mis perfiles}} que aparece debajo tiene {{ui:Guardar}}, {{ui:Usar aquí}} y {{ui:Quitar}}. La lista se guarda en este navegador (hasta 200), no en su cuenta. Vea [Placas y perfiles](topic:plates-and-profiles).

### Análisis

- **Segundo orden (P-Delta).** Marque {{ui:Segundo orden (P-Delta)}} junto a Ejecutar en la pestaña {{ui:Análisis}} y las fuerzas axiales actúan sobre el marco deformado. Las placas y los pisos rígidos siguen siendo de primer orden, con una advertencia. Vea [Fuerzas, reacciones y deflexiones](topic:frame-analysis).
- **Frecuencias naturales.** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo, con periodo y masa modal efectiva, y muestra un modo en el modelo. Vea [Fuerzas, reacciones y deflexiones](topic:frame-analysis).
- **Cargas de viento y sitio sísmico.** Tres bloques nuevos en la pestaña {{ui:Análisis}}: {{ui:Cargas de viento (procedimiento direccional ASCE 7)}}, {{ui:Sitio sísmico y sistema (ASCE 7)}} y {{ui:Combinaciones de carga ASCE 7}}. Vea [Viento, sitio sísmico y combinaciones ASCE 7](topic:wind-seismic-combinations).

### Trabajo en conjunto

- **Cursores y nombres.** En una sesión en vivo, el puntero de cada persona se dibuja en el modelo con su nombre y color, y lo que seleccionó recibe un recuadro.
- **Seguir a una persona.** Abra {{ui:Personas}} en la sesión y elija {{ui:Seguir}} junto a un nombre; su vista se mueve con la de esa persona. El anfitrión puede elegir {{ui:Pedir a todos que me sigan}}. Vea [Seguir a una persona en una sesión en vivo](topic:follow-in-live).

### En todas las apps

- Las descripciones emergentes son de Bootstrap, la tarjeta de consejo de inicio tiene un botón de cierre, las barras de pestañas se desplazan lateralmente cuando no caben, y el nombre de la pestaña del navegador muestra el documento abierto seguido de DetailCraft y CadCraft.

## Corregido

- Un perfil personalizado se perdía al empezar un modelo nuevo.
- Los canales, ángulos y perfiles huecos faltaban en el juego de planos de taller.

## Límites reconocidos

- Los bloques de viento, sísmico y de elementos finitos son ayudas para la revisión. Su ingeniero revisa los resultados; no son una revisión de código. La consulta de USGS se probó con un sustituto, no con el servicio en vivo.
- Los elementos finitos y P-Delta se verificaron con respuestas a mano y cerradas, no con un edificio real. El análisis de pandeo no está incluido.
- Ningún fabricante del Reino Unido ha probado todavía los tamaños del Reino Unido, y los archivos NC de ángulos desiguales no se han ejecutado en una máquina.
- El juego de planos de taller es solo en PDF.
- Los idiomas distintos del inglés son borradores de máquina.
- Los instaladores de Windows no tienen firma de código (Más información, luego Ejecutar de todas formas); la imagen de disco de macOS no está notarizada (clic derecho, luego Abrir).

Los cambios anteriores están en las notas de las versiones 0.8 y 0.8.1, más abajo en esta página.

## Anteriores: 0.8 y 0.8.1

Esto es lo que cambió en DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), en comparación con la 0.7. La 0.7 revisaba miembros de acero; la 0.8 planea las izadas, propone las conexiones, revisa las cimentaciones y las varillas, y arma marcos de madera y de muros, pisos y techos de perfil ligero.

### Nuevo

**Montaje**

- **Plan de montaje y película.** En la pestaña {{ui:Montaje}}, describa una grúa (dónde está colocada, su gancho más alto, el aparejo que no viene en la tabla) y escriba las filas de su tabla de carga. DetailCraft iza el modelo un ensamblaje a la vez, en orden de fase y nivel por nivel, y revisa cada izada contra la tabla en su radio y contra el margen que defina. {{ui:Guardar película}} escribe un archivo HTML que se reproduce sin conexión en cualquier navegador, también en un teléfono. Las izadas que superan la tabla, están más allá de ella o son demasiado altas aparecen en {{ui:Problemas}}. Es un plan con sus números, no un plan de izaje. Vea [Plan de montaje y película](topic:erection-movie).

**Conexiones**

- **Piloto automático de conexiones.** La pestaña {{ui:Piloto automático}} revisa cada unión que no tiene conexión y propone una según las formas: placas base, placas de cortante, placas extremas para las vigas que marque como vigas de momento, empalmes y cartelas. Dé una carga uniforme o un cortante en un extremo, y el número de tornillos sigue la resistencia de diseño del tornillo. {{ui:Agregarlas todas}} agrega las propuestas como un solo paso de deshacer. Son valores iniciales para revisar, no un diseño de conexión.
- **Revisiones de constructibilidad.** {{ui:Problemas}} para un tornillo que una llave no alcanza, tornillos demasiado juntos para el dado, soldaduras de filete fuera de sus límites de tamaño y perfiles huecos que retienen agua. El acceso para soldar es nuevo: una soldadura de filete en todo el perímetro que el soplete del soldador no alcanza se lista con la pieza que estorba y la proporción de la soldadura afectada. Vea [Revisiones de constructibilidad](topic:constructability).

**Cimentaciones y varillas**

- **Revisiones de cimentación.** La pestaña {{ui:Cimentación}} revisa zapatas, zapatas combinadas y losas de cimentación sobre el suelo que describa: apoyo, deslizamiento y volteo con cargas de servicio; flexión, cortante, punzonado, desarrollo y acero mínimo con cargas factorizadas (ACI 318-19). Una columna cerca de un borde o una esquina se revisa con la sección cortada por el borde de la zapata. El asentamiento sale del módulo del suelo, una losa flexible se resuelve sobre resortes a partir de un módulo de reacción de subrasante, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de columna se pueden escribir o tomar del {{ui:Análisis}}. Vea [Revisiones de cimentación](topic:foundation-checks).
- **Mapa de congestión de varillas.** La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde las varillas dejan muy poco espacio para que el concreto baje, contra la regla de separación libre y, si las da, el agregado más grande y la cabeza del vibrador. Vea [Mapa de congestión de varillas](topic:rebar-congestion).

**Armazón y suministro**

- **Armazón de madera y de perfil ligero.** La pestaña {{ui:Armazón}} arma paneles de muro, piso y techo con cada pieza, una lista de cortes, el material a comprar y un plano de taller a escala. {{ui:Colocar como miembros}} pone las piezas en el modelo, y {{ui:Hojas PDF}} guarda una hoja por cada panel. Los tamaños, la separación y los dinteles los define usted: DetailCraft no revisa que soporten la carga. Vea [Paneles de armazón de madera y de perfil ligero](topic:framing-panels).
- **Existencias del proveedor y tiempos de entrega.** La pestaña {{ui:Suministro}} lee la lista de existencias de un proveedor (CSV) y muestra, para cada sección que compra la lista de cortes, si hay suficiente en existencia y cuánto dura la espera. Los faltantes y las secciones atrasadas aparecen en {{ui:Problemas}}. No se ordena nada. Vea [Existencias del proveedor y tiempos de entrega](topic:supplier-stock).

**Análisis y diseño**

- **¿Qué falla primero?** En la pestaña {{ui:Análisis}}, el botón encuentra la combinación de resistencia que rige, el miembro más débil, cuánto pueden crecer las cargas antes de que el primer miembro llegue a su límite, y la placa extrema o la placa de cortante más débil donde se conoce la resistencia al cortante de sus tornillos. Primero necesita las combinaciones y un código de diseño. Aplastamiento, cortante en bloque, soldaduras y efecto palanca no se revisan. Su asistente conectado puede pedir lo mismo.
- **En vivo.** Marque {{ui:En vivo: resolver de nuevo tras cada edición}} y el marco se vuelve a resolver después de cada edición.
- **Concreto, más.** Una columna esbelta en un marco sin desplazamiento se diseña para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico puede tomarse del análisis por el método de Rayleigh. Una losa hecha de placas obtiene el acero que necesita cada capa a partir de sus momentos, y el cortante en una dirección. Vea [Revisar miembros de concreto y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que un ingeniero revise.** Los resultados de cimentación, de concreto y de ¿Qué falla primero? son ayudas. Las cargas de viento no están incluidas.

**En todas las apps**

- **Idiomas.** La ayuda está en 54 idiomas. Los que no son inglés son borradores de máquina hasta que un hablante nativo los lea; diez son nuevos (lituano, letón, bosnio, marati, telugu, albanés, afrikáans, filipino, suajili, uzbeko).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige ajustar, 2 filas o 1 fila. Una barra que ya cabe se queda igual; las demás se desplazan lateralmente.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula compartida: categorías plegables y una densidad compacta. La aritmética escrita, como 2*450, sigue funcionando.
- **Dispositivos de entrada.** El panel táctil, la pluma, el ratón 3D, el control y MIDI pueden manejar las apps. Vea [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Las advertencias de las nuevas revisiones de arriba aparecen en el mismo panel {{ui:Problemas}} de antes.
- **Conecte su IA.** Su propio asistente, conectado a través de CadCraft Studio, funciona con las ocho apps y solo ve lo que usted permite. La conexión con un clic, el conector alojado y su propia clave de API en Studio aún están por llegar. Vea [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

### Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Selección por captura.** Los instaladores 0.8.1 traen el comportamiento de selección por captura que ya estaba bien en la versión web 0.8; un instalador anterior no lo tenía.
- **Tabletas en vertical.** El alto de cuadrícula sobrante va al lienzo, y la disposición de la hoja empieza a 760 px o menos.

### Pendiente en esta versión

- **Enviar NC a una máquina** no está publicado.
- **Cargas de viento** para concreto no están incluidas, y las revisiones de concreto y de cimentación son para que un ingeniero las revise.
- **Firma de código.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede advertir y macOS pide clic derecho y luego Abrir.

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
