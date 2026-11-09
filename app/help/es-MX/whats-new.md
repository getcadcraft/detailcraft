---
title: Novedades de 0.8 y 0.8.1
summary: Una película de montaje a partir de la tabla de carga de una grúa, un piloto automático de conexiones, un mapa de congestión de varillas, revisiones de cimentación, paneles de armazón de madera y de perfiles ligeros, revisiones de constructibilidad y de acceso para soldadura, inventario de proveedores, qué falla primero, un recálculo en vivo, más revisiones de concreto y las correcciones de 0.8.1.
keywords: novedades, qué hay de nuevo, notas de versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de carga, película, piloto automático, conexiones, varillas, congestión, cimentación, zapata, losa, asentamiento, armazón, madera, perfiles ligeros, lista de cortes, constructibilidad, acceso para soldadura, proveedor, inventario, tiempo de entrega, qué falla primero, en vivo, concreto, sísmico, idiomas, asistente
from: 6e33e052
---

Esto es lo que cambió en DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), en comparación con la 0.7. La 0.7 revisaba miembros de acero; la 0.8 planea los izajes, propone las conexiones, revisa las cimentaciones y las varillas, y arma muros, pisos y techos de madera y de perfiles ligeros.

## Nuevo

### Montaje

- **Plan de montaje y película.** En la pestaña {{ui:Montaje}}, describa una grúa (dónde está, su gancho más alto, el aparejo que no viene en la tabla de carga) y escriba las filas de su tabla de carga. DetailCraft iza el modelo un ensamblaje a la vez, en orden de fase y nivel por nivel, y revisa cada izaje contra la tabla a su radio y contra el margen que usted fije. {{ui:Guardar película}} escribe un archivo HTML que se reproduce sin conexión en cualquier navegador, también en un teléfono. Los izajes que están sobre la tabla, fuera de ella o demasiado altos aparecen en {{ui:Problemas}}. Es un plan a partir de sus números, no un plan de izaje. Vea [Plan de montaje y película](topic:erection-movie).

### Conexiones

- **Piloto automático de conexiones.** La pestaña {{ui:Piloto automático}} revisa cada junta que no tiene conexión y propone una a partir de las formas: placas base, placas de cortante, placas de extremo para las vigas que usted marque como vigas de momento, empalmes y placas de nudo. Dé una carga uniforme o un cortante en un extremo, y el número de pernos sigue la resistencia de diseño del perno. {{ui:Agregarlas todas}} agrega las propuestas como un solo paso de {{ui:Deshacer}}. Son valores iniciales para revisar, no un diseño de conexión.
- **Revisiones de constructibilidad.** {{ui:Problemas}} para un perno que una llave no alcanza, pernos demasiado juntos para el dado, soldaduras de filete fuera de sus límites de tamaño y secciones huecas que retienen agua. El acceso para soldadura es nuevo: una soldadura de filete perimetral que el soplete del soldador no alcanza se enumera con la pieza que estorba y la proporción de la soldadura afectada. Vea [Revisiones de constructibilidad](topic:constructability).

### Cimentaciones y varillas

- **Revisiones de cimentación.** La pestaña {{ui:Cimentación}} revisa zapatas, zapatas combinadas y losas de cimentación sobre el suelo que usted describa: capacidad de carga, deslizamiento y volcamiento con cargas de servicio; flexión, cortante, punzonamiento, desarrollo y acero mínimo con cargas factorizadas (ACI 318-19). Una columna cerca de un borde o de una esquina se revisa con la sección que queda cortada por el borde de la zapata. El asentamiento sale del módulo del suelo, una losa flexible se resuelve sobre resortes a partir de un módulo de subrasante, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de columna pueden escribirse o tomarse de {{ui:Análisis}}. Vea [Revisiones de cimentación](topic:foundation-checks).
- **Mapa de congestión de varillas.** La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde las varillas dejan muy poco espacio para que el concreto baje, frente a la regla de separación libre y, si las indica, el agregado más grande y la cabeza del vibrador. Vea [Mapa de congestión de varillas](topic:rebar-congestion).

### Armazón y suministro

- **Armazón de madera y de perfiles ligeros.** La pestaña {{ui:Armazón}} arma paneles de muro, piso y techo con cada pieza, una lista de cortes, el material que hay que comprar y un plano de taller a escala. {{ui:Colocar como miembros}} pone las piezas en el modelo, y {{ui:Hojas PDF}} guarda una hoja por cada panel. Las dimensiones, la separación y los cabezales son suyos: DetailCraft no revisa que soporten la carga. Vea [Paneles de armazón de madera y de perfiles ligeros](topic:framing-panels).
- **Inventario del proveedor y tiempos de entrega.** La pestaña {{ui:Suministro}} lee la lista de inventario de un proveedor (CSV) y muestra, para cada sección que compra la lista de cortes, si hay suficiente en existencia y cuánto dura la espera. Los faltantes y las secciones atrasadas aparecen en {{ui:Problemas}}. No se hace ningún pedido. Vea [Inventario del proveedor y tiempos de entrega](topic:supplier-stock).

### Análisis y diseño

- **¿Qué falla primero?** En la pestaña {{ui:Análisis}}, el botón encuentra la combinación de resistencia que gobierna, el miembro más débil, cuánto pueden crecer las cargas antes de que el primer miembro llegue a su límite, y la placa de extremo o la placa de cortante más débil donde se conoce la resistencia al cortante de sus pernos. Necesita primero las combinaciones y un código de diseño. Aplastamiento, cortante de bloque, soldaduras y pandeo local por palanca no se revisan. Su asistente conectado puede pedir lo mismo.
- **En vivo.** Marque {{ui:En vivo: resolver de nuevo tras cada edición}} y el marco se vuelve a resolver después de cada edición.
- **Concreto, más.** Una columna esbelta en un marco sin desplazamiento lateral se diseña para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico puede tomarse del análisis por el método de Rayleigh. Una losa hecha de placas obtiene el acero que necesita cada capa a partir de sus momentos, y también el cortante en una dirección. Vea [Revisar elementos de concreto y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que un ingeniero lo revise.** Los resultados de cimentación, de concreto y de ¿Qué falla primero? son auxiliares. Las cargas de viento no están incluidas.

### En todas las aplicaciones

- **Idiomas.** La ayuda está en 54 idiomas. Los que no son el inglés son borradores de máquina hasta que un hablante nativo los revise; diez son nuevos (lituano, letón, bosnio, marati, telugu, albanés, afrikáans, filipino, suajili y uzbeko).
- **Filas de la barra de herramientas.** {{ui:Configuración}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} elige ajustar, 2 filas o 1 fila. Una barra que ya cabe se queda igual; las demás se desplazan de lado.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula compartida: categorías plegables y una densidad compacta. Las operaciones aritméticas escritas, como 2*450, siguen funcionando.
- **Dispositivos de entrada.** El panel táctil, el lápiz, el ratón 3D, el control y MIDI pueden controlar las aplicaciones. Vea [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Las advertencias de las nuevas revisiones de arriba aparecen en el mismo panel {{ui:Problemas}} de siempre.
- **Conecte su IA.** Su propio asistente, conectado mediante CadCraft Studio, funciona con las ocho aplicaciones y solo ve lo que usted permita. La conexión en un clic, el conector alojado y su propia clave de API en Studio todavía están por llegar. Vea [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Selección por ventana de cruce.** Los instaladores 0.8.1 ya traen el comportamiento correcto de selección por ventana que tenía la versión web 0.8; un instalador anterior no lo tenía.
- **Tabletas en vertical.** El alto de cuadrícula sobrante va al lienzo, y la disposición de la hoja empieza a 760 px o menos.

## Todavía no está en esta versión

- **Enviar NC a una máquina** todavía no se publica.
- **Cargas de viento** para concreto aún no están incluidas, y las revisiones de concreto y de cimentación son para que un ingeniero las revise.
- **Firma de código.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede advertir, y macOS pide un clic derecho y luego Abrir.

Los cambios anteriores están en [Novedades de 0.7](topic:whats-new-0-7).
