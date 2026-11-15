---
title: Novedades de la versión 0.8 y 0.8.1
summary: Una película de montaje a partir de la tabla de cargas de una grúa, un piloto automático de conexiones, un mapa de congestión de armadura, comprobaciones de cimentación, paneles de entramado de madera y perfil ligero, comprobaciones de constructibilidad y de acceso de soldadura, existencias de proveedores, qué falla primero, un recálculo en vivo, más comprobaciones de hormigón y las correcciones de la versión 0.8.1.
keywords: novedades, qué hay de nuevo, notas de la versión, registro de cambios, cambios, 0.8, 0.8.1, versión, nuevas funciones, montaje, grúa, tabla de cargas, película, piloto automático, conexiones, armadura, congestión, cimentación, zapata, emparrillado, asentamiento, entramado, madera, perfil ligero, lista de corte, constructibilidad, acceso de soldadura, proveedor, existencias, plazo de entrega, qué falla primero, en vivo, hormigón, sísmico, forjado, idiomas, asistente
from: 6e33e052
---

Esto es lo que cambió en DetailCraft 0.8 (1 de noviembre de 2026) y 0.8.1 (2 de noviembre de 2026), en comparación con la 0.7. La 0.7 comprobaba barras de acero; la 0.8 planifica las elevaciones, propone las conexiones, comprueba las cimentaciones y la armadura, y genera el entramado de muros, forjados y cubiertas de madera y perfil ligero.

## Novedades

### Montaje

- **Plan de montaje y película.** En la pestaña {{ui:Montaje}}, describa una grúa (dónde está colocada, su gancho más alto, el aparejo que no figura en la tabla) y escriba las filas de su tabla de cargas. DetailCraft eleva el modelo un conjunto cada vez, por orden de fase y nivel por nivel, y comprueba cada elevación contra la tabla según su radio y el margen que haya fijado. {{ui:Guardar película}} escribe un archivo HTML que se reproduce sin conexión en cualquier navegador, también en un teléfono. Las elevaciones que superan la tabla, quedan fuera de ella o son demasiado altas aparecen en {{ui:Problemas}}. Es un plan a partir de sus cifras, no un plan de izado. Consulte [Plan de montaje y película](topic:erection-movie).

### Conexiones

- **Piloto automático de conexiones.** La pestaña {{ui:Piloto automático}} revisa cada unión que no tiene conexión y propone una según las formas: placas de base, cartelas de cortante, chapas de testa para las vigas que marque como vigas de momento, empalmes y cartelas. Indique una carga uniforme o un cortante en un extremo, y el número de tornillos se ajusta a la resistencia de cálculo del tornillo. {{ui:Añadirlas todas}} añade las propuestas como un solo paso de deshacer. Son valores de partida para revisar, no un diseño de conexión.
- **Comprobaciones de constructibilidad.** {{ui:Problemas}} avisa de un tornillo que una llave no alcanza, de tornillos demasiado cercanos para el vaso, de soldaduras de filete fuera de sus límites de tamaño y de perfiles huecos que retienen agua. El acceso de soldadura es nuevo: una soldadura de filete en todo el contorno que la antorcha del soldador no alcanza aparece listada con la pieza que estorba y la proporción de la soldadura afectada. Consulte [Comprobaciones de constructibilidad](topic:constructability).

### Cimentaciones y armadura

- **Comprobaciones de cimentación.** La pestaña {{ui:Cimentación}} comprueba zapatas, zapatas combinadas y emparrillados sobre el terreno que describa: capacidad portante, deslizamiento y vuelco con cargas de servicio; flexión, cortante, punzonamiento, anclaje y armadura mínima con cargas mayoradas (ACI 318-19). Un pilar cercano a un borde o a una esquina se comprueba con la sección que queda recortada por el borde de la zapata. El asentamiento se obtiene del módulo del terreno; un emparrillado flexible se resuelve sobre muelles a partir de un módulo de balasto, y los grupos de pilotes y los muros de contención tienen paneles propios. Las cargas de pilar se pueden escribir o tomar del {{ui:Análisis}}. Consulte [Comprobaciones de cimentación](topic:foundation-checks).
- **Mapa de congestión de armadura.** La pestaña {{ui:Congestión}} dibuja un mapa de calor de cada zapata vista desde arriba: dónde las barras dejan muy poco espacio para que el hormigón baje, frente a la regla de separación libre y, si las indica, el árido de mayor tamaño y el cabezal del vibrador. Consulte [Mapa de congestión de armadura](topic:rebar-congestion).

### Entramado y suministro

- **Entramado de madera y perfil ligero.** La pestaña {{ui:Entramado}} arma paneles de muro, forjado y cubierta con cada pieza, una lista de corte, las existencias que hay que comprar y un plano de taller a escala. {{ui:Colocar como barras}} pone las piezas en el modelo, y {{ui:Hojas PDF}} guarda una hoja por cada panel. Las secciones, separaciones y dinteles los define usted: DetailCraft no comprueba que soporten la carga. Consulte [Paneles de entramado de madera y perfil ligero](topic:framing-panels).
- **Existencias de proveedores y plazos de entrega.** La pestaña {{ui:Suministro}} lee la lista de existencias de un proveedor (CSV) y muestra, para cada sección que compra la lista de corte, si hay suficiente en stock y cuánto dura la espera. Los faltantes y las secciones con retraso aparecen en {{ui:Problemas}}. No se hace ningún pedido. Consulte [Existencias de proveedores y plazos de entrega](topic:supplier-stock).

### Análisis y diseño

- **¿Qué falla primero?** En la pestaña {{ui:Análisis}}, el botón busca la combinación de resistencia que gobierna, la barra más débil, cuánto pueden crecer las cargas antes de que la primera barra alcance su límite, y la chapa de testa o la cartela de cortante más débil, cuando se conoce la resistencia a cortante de sus tornillos. Antes necesita las combinaciones y un código de diseño. No se comprueban aplastamiento, cortante de bloque, soldaduras ni palanqueo. Su asistente conectado puede pedir lo mismo.
- **En vivo.** Marque {{ui:En vivo: resolver de nuevo tras cada edición}} y el marco se vuelve a resolver tras cada edición.
- **Hormigón y más.** Un pilar esbelto en un pórtico sin desplazamiento se diseña para su momento amplificado (ACI 318-19 6.6.4.5). El periodo sísmico se puede tomar del análisis por el método de Rayleigh. Un forjado hecho de placas recibe el acero que cada capa necesita a partir de sus momentos, y el cortante en una dirección. Consulte [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic).
- **Para que lo revise un ingeniero.** Los resultados de cimentación, de hormigón y de «¿Qué falla primero?» son ayudas. Las cargas de viento no están incluidas.

### En todas las aplicaciones

- **Idiomas.** La ayuda está disponible en 54 idiomas. Los que no son el inglés son borradores automáticos hasta que los revise un hablante nativo; diez son nuevos (lituano, letón, bosnio, marati, telugu, albanés, afrikáans, filipino, suajili y uzbeko).
- **Filas de la barra de herramientas.** {{ui:Ajustes}} › {{ui:General}} › {{ui:Filas de la barra de herramientas}} permite elegir ajuste de línea, 2 filas o 1 fila. Una barra que ya cabe se queda como está; el resto se desplaza lateralmente.
- **Cuadrícula de propiedades.** Los campos de la zapata usan la cuadrícula compartida: categorías plegables y una densidad compacta. Las operaciones escritas, como 2*450, siguen funcionando.
- **Dispositivos de entrada.** El panel táctil, el lápiz, el ratón 3D, el mando y MIDI pueden manejar las aplicaciones. Consulte [Navegar en 3D](topic:navigate-3d).
- **Panel de problemas.** Las advertencias de las nuevas comprobaciones anteriores aparecen en el mismo panel {{ui:Problemas}} de siempre.
- **Conecte su IA.** Su propio asistente, conectado a través de CadCraft Studio, funciona con las ocho aplicaciones y solo ve lo que usted permite. La conexión con un clic, el conector alojado y su propia clave de API en Studio todavía están por llegar. Consulte [Usar DetailCraft con un asistente de IA](topic:use-with-ai-assistants).

## Corregido en 0.8.1

- **Idiomas en Studio.** Studio y las ediciones empaquetadas pueden cambiar de idioma en tiempo de ejecución; antes solo estaban en inglés. Todavía no se ha probado en todas las plataformas: avísenos si el idioma no cambia.
- **Selección por ventana cruzada.** Los instaladores de la 0.8.1 incluyen el comportamiento de selección por ventana que ya era correcto en la versión web de la 0.8; un instalador anterior no lo tenía.
- **Tabletas en vertical.** La altura sobrante de la rejilla va al lienzo, y el diseño de la hoja empieza a 760 px o menos.

## Todavía no incluido en esta versión

- **Enviar NC a una máquina** no está publicado.
- **Cargas de viento** para hormigón no están incluidas, y las comprobaciones de hormigón y de cimentación son para que las revise un ingeniero.
- **Firma de código.** Los instaladores de Windows y el .dmg de macOS no están firmados, así que Windows puede avisar y macOS pide hacer clic con el botón derecho y elegir Abrir.

Los cambios anteriores están en [Novedades de la versión 0.7](topic:whats-new-0-7).
