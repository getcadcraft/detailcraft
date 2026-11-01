---
title: Un recorrido por la pantalla
summary: Cada barra, panel y pestaña de DetailCraft con su nombre en pantalla, y para qué sirve cada uno.
keywords: pantalla, disposición, barra de herramientas, paneles, propiedades, barra de estado, informes, interfaz, pestañas
from: 454f74fd
---

DetailCraft llena la ventana del navegador bajo la barra de la aplicación. De arriba abajo: la barra de herramientas, después tres columnas (el panel {{ui:Modelo}}, la vista, el panel {{ui:Propiedades}}), después las pestañas de informes y por último la barra de estado.

## La barra de la aplicación

La barra delgada de la parte superior del todo pertenece al sitio de CadCraft, no al modelo. Muestra el nombre y la versión de la aplicación, un enlace a {{ui:Acerca de DetailCraft}}, {{ui:Ayuda}} (o {{key:F1}}) para esta ayuda, {{ui:Guardar para uso sin conexión}}, el botón de modo de pantalla y el conmutador {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Guardar para uso sin conexión}} conserva DetailCraft, su vista 3D y esta ayuda en su navegador para que se abra sin conexión. Dice {{ui:Listo sin conexión}} una vez guardado; entonces, haga clic en él para {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. Consulte [Trabajar sin conexión](common:offline).
- {{ui:Papel}} da una pantalla clara y {{ui:Modelo}} una oscura. La vista 3D la sigue al instante; nada de su modelo cambia.
- El botón de modo de pantalla y {{key:Ctrl+Shift+F}} recorren normal, pantalla completa, y pantalla completa con las barras ocultas. {{key:Ctrl+Shift+F}} usa la tecla Ctrl en todos los ordenadores, también en Mac. Con las barras ocultas, apunte al borde superior de la pantalla (o púlselo) para recuperarlas. {{key:Esc}} sale de la pantalla completa.

## La barra de herramientas

La barra de herramientas tiene cinco grupos. Sitúe el puntero sobre un botón para ver qué hace y su tecla.

| Grupo | Botones | Qué hacen |
|---|---|---|
| {{ui:Archivo}} | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Ejemplo}} | Empezar un modelo, abrir un `.detailcraft.json` guardado o un archivo IFC, guardar uno, o abrir la estructura de ejemplo |
| {{ui:Colocar}} | {{ui:Seleccionar}}, {{ui:Viga}}, {{ui:Pilar}}, {{ui:Diagonal}}, {{ui:Placa}}, {{ui:Zapata}}, {{ui:Escalera}} | La herramienta que usa el siguiente clic en la vista |
| {{ui:Conectar}} | {{ui:Chapas de testa}}, {{ui:Placa de base}}, y en {{ui:Más}}: {{ui:Cartelas de cortante}}, {{ui:Empalme}}, {{ui:Cartela}}, {{ui:Similares}} | Añadir una conexión a la viga, el pilar o la diagonal seleccionados, o copiar la conexión seleccionada a todas las uniones iguales |
| {{ui:Editar}} | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} | Retroceder y avanzar por las ediciones; copiar la selección y pegarla. {{ui:Más}} abre un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla |
| {{ui:Salida}} | {{ui:IFC}}, {{ui:Archivos NC}}, {{ui:Lista}}, {{ui:Plano de taller}}, {{ui:Planos}}, y en {{ui:Más}}: {{ui:Doblado}}, {{ui:Informe de pesos por fase}}, {{ui:Archivo KISS para software de fabricación}} | Descargar una exportación, o abrir las hojas de planos |

Los botones y elementos de menú que no pueden actuar en este momento aparecen en gris, y al situar el puntero encima se dice por qué. {{ui:Chapas de testa}} necesita una viga seleccionada, {{ui:Placa de base}} un pilar seleccionado, {{ui:Similares}} una conexión seleccionada, {{ui:Plano de taller}} una pieza seleccionada de perfil en I o placa, {{ui:Copiar}} un elemento o una zapata seleccionados, y {{ui:Pegar}} algo copiado. Consulte [Copiar, pegar y duplicar](topic:copy-paste).

## El panel Modelo (izquierda)

- {{ui:Modelo}}: el {{ui:Nombre}} del modelo. Da nombre a cada archivo que guarda o exporta.
- {{ui:Rejillas}}: las líneas de rejilla y sus separaciones, y {{ui:Aplicar rejillas}}. Consulte [Preparar rejillas y niveles](topic:grids-and-levels).
- {{ui:Niveles}}: una fila por nivel (nombre y cota en mm), {{ui:Añadir nivel}} y {{ui:Aplicar niveles}}.
- {{ui:Perfil a medida}}: cree su propia sección paramétrica. Cerrado hasta que lo abra.
- {{ui:Marcas de pieza}}: cada marca de pieza del modelo con su perfil, longitud y cantidad. Haga clic en una marca para seleccionar la primera pieza que la lleva.

{{ui:Rejillas}}, {{ui:Niveles}} y {{ui:Perfil a medida}} se pliegan: haga clic en sus encabezados.

## La vista (centro)

La vista muestra el modelo en 3D. Sobre ella, la barra de vista tiene tres botones y una lista:

- {{ui:3D}}: gire libremente alrededor del modelo.
- {{ui:Planta}}: mire directamente hacia abajo un nivel. Junto a los botones aparece una lista de niveles. Todo lo que está a más de 1,5 m sobre el nivel se corta para que pueda ver y pulsar el nivel con claridad.
- {{ui:Alzado}}: mire directamente una línea de rejilla con letra (Rejilla A, Rejilla B …). Aparece una lista de rejillas con letra. Solo se muestra el acero a menos de 1 m de esa línea.
- El botón de ajustar, en el extremo derecho de la barra de vista, hace zoom para mostrar todo el modelo.

Unos puntos pequeños marcan cada intersección de rejilla en cada nivel. Mientras una herramienta de colocación está activa, se ilumina el punto más cercano al puntero y la barra de estado lo nombra, por ejemplo "A/2 at Level 1". Los colores distinguen los tipos de elemento: pilares, vigas, diagonales y placas tienen cada uno su propio color, los tornillos y los pernos otro, las zapatas son transparentes y la armadura se dibuja como tubos. Los taladros se muestran como tapones oscuros; los despuntes están cortados.

Cómo girar, desplazar y hacer zoom: [Moverse por la vista 3D](topic:navigate-3d).

Cuando el modelo está vacío, la vista muestra una breve lista "Start a model". También puede soltar un archivo de modelo guardado en cualquier punto de la vista para abrirlo.

## El panel Propiedades (derecha)

Lo que muestra este panel depende de lo que esté haciendo, y su encabezado lo indica: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" o "Paste".

- **Nada seleccionado:** un resumen del modelo (elementos, conexiones, zapatas, piezas, marcas, tornillos, peso de acero y de armadura, rejillas, niveles).
- **Una herramienta de colocación activa:** las opciones de la pieza siguiente (perfil, material, posición, giro y, para pilares, {{ui:Hasta}}), un resumen del perfil elegido y un formulario {{ui:Añadir por rejilla}} para colocar sin hacer clic en la vista.
- **Un elemento seleccionado:** su nombre, perfil, material, posición, giro, las coordenadas de sus dos extremos, sus marcas, longitud de corte y peso, sus taladros y despuntes, y botones para conexiones, su plano de taller y {{ui:Borrar}}.
- **Una conexión seleccionada:** cada ajuste de placa, tornillo y soldadura, los tornillos y la soldadura que genera, sus avisos y {{ui:Aplicar a similares}}.
- **Una zapata seleccionada:** su posición y tamaño, la parrilla inferior, los arranques y las marcas de barra que usa.
- **Varios elementos seleccionados:** cuántos elementos de cada tipo, conexiones y zapatas, su peso de acero, y {{ui:Copiar}}, {{ui:Duplicar}} y {{ui:Borrar}}.
- **Pegando:** lo que hay en el portapapeles y formularios para pegar con un desplazamiento escrito o sobre una intersección de rejilla que elija en las listas.

Los campos numéricos surten efecto al pulsar {{key:Enter}} o al salir del campo. Cada cambio es un paso que puede deshacer.

## Las pestañas de informes (abajo)

- {{ui:Problemas}}: todo lo que DetailCraft no pudo construir o quiere que revise, con un botón {{ui:Seleccionar}} en cada línea. La pestaña muestra el recuento entre paréntesis.
- {{ui:Lista de materiales}}: piezas, conjuntos, y tornillos y pernos de anclaje, con pesos y un enlace {{ui:Descargar CSV}}. Haga clic en una marca de pieza para seleccionar esa pieza.
- {{ui:Tabla de doblado}}: cada marca de barra de cada zapata, con un enlace {{ui:Descargar CSV}}.

Con una pestaña enfocada, {{key:Left}} y {{key:Right}} se mueven entre pestañas.

## La barra de estado

La barra de la parte inferior tiene tres partes: la intersección de rejilla bajo el puntero mientras se coloca, el último mensaje (lo que acaba de ocurrir, o por qué se rechazó algo), y los totales acumulados de piezas, tornillos, peso de acero y peso de armadura. Cuando una acción parece no hacer nada, lea primero el mensaje de aquí.

El título de la pestaña del navegador empieza con un punto (•) mientras el modelo tiene cambios que no ha guardado.

## En una pantalla estrecha

Por debajo de unos 760 píxeles de ancho, las columnas se apilan: barra de herramientas, vista, barra de estado, {{ui:Propiedades}}, pestañas de informes y, al final, el panel {{ui:Modelo}}. Desplace la página para llegar a ellas. DetailCraft está diseñado para una pantalla de ordenador de sobremesa o portátil; un móvil sirve para mirar, no para detallar.
