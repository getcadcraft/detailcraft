---
title: Recorrido por la pantalla
summary: Cada barra, panel y pestaña de DetailCraft con su nombre en pantalla y para qué sirve cada una.
keywords: pantalla, diseño, barra de herramientas, paneles, propiedades, barra de estado, informes, interfaz, ui, pestañas
from: 94f81073
---

DetailCraft ocupa la ventana del navegador debajo de la barra de aplicación. De arriba abajo: la barra de herramientas, después tres columnas (el panel {{ui:Modelo}}, la vista y el panel {{ui:Propiedades}}), luego las pestañas de informes y, por último, la barra de estado.

## La barra de aplicación

La barra fina de la parte superior pertenece al sitio de CadCraft, no al modelo. Muestra el nombre y la versión de la aplicación, un enlace a {{ui:Acerca de DetailCraft}}, {{ui:Ayuda}} (o {{key:F1}}) para esta ayuda, {{ui:Guardar para uso sin conexión}}, el botón de modo de pantalla y el conmutador {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Guardar para uso sin conexión}} mantiene DetailCraft, su vista 3D y esta ayuda en su navegador para que se abra sin conexión. Una vez guardado muestra {{ui:Listo sin conexión}}; haga clic entonces para ver {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. Consulte [Trabajar sin conexión](common:offline).
- {{ui:Papel}} da una pantalla clara y {{ui:Modelo}} una oscura. La vista 3D cambia de inmediato; nada de su modelo cambia.
- El botón de modo de pantalla y {{key:Ctrl+Shift+F}} alternan entre normal, pantalla completa y pantalla completa con las barras ocultas. {{key:Ctrl+Shift+F}} usa la tecla Control en todos los equipos, también en Mac. Con las barras ocultas, sitúe el puntero en el borde superior de la pantalla (o toque ese borde) para mostrarlas de nuevo. {{key:Esc}} sale de la pantalla completa.

## La barra de herramientas

La barra de herramientas tiene cinco grupos. Pase el ratón sobre un botón para ver qué hace y su tecla.

| Grupo | Botones | Qué hacen |
|---|---|---|
| {{ui:Archivo}} | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Ejemplo}} | Crean un modelo, abren un `.detailcraft.json` guardado o un archivo IFC, guardan uno o abren el marco de ejemplo |
| {{ui:Colocar}} | {{ui:Seleccionar}}, {{ui:Viga}}, {{ui:Pilar}}, {{ui:Diagonal}}, {{ui:Placa}}, {{ui:Zapata}}, {{ui:Escalera}} | La herramienta que usa el siguiente clic en la vista |
| {{ui:Conectar}} | {{ui:Chapas de testa}}, {{ui:Placa de base}}, y en {{ui:Más}}: {{ui:Cartelas de cortante}}, {{ui:Empalme}}, {{ui:Cartela}}, {{ui:Similares}} | Añaden una conexión a la viga, pilar o diagonal seleccionada, o copian la conexión seleccionada a cada unión similar |
| {{ui:Editar}} | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} | Retroceden y avanzan por las ediciones; copian la selección y la pegan. {{ui:Más}} abre un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Borrar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla |
| {{ui:Salida}} | {{ui:IFC}}, {{ui:Archivos NC}}, {{ui:Lista}}, {{ui:Plano de taller}}, {{ui:Planos}}, y en {{ui:Más}}: {{ui:Doblado}}, {{ui:Informe de pesos por fase}}, {{ui:Archivo KISS para software de fabricación}} | Descargan una exportación o abren las hojas de planos |

Los botones y elementos de menú que no pueden actuar en ese momento aparecen atenuados, y al pasar el ratón sobre uno se indica el motivo. {{ui:Chapas de testa}} necesita una viga seleccionada, {{ui:Placa de base}} un pilar seleccionado, {{ui:Similares}} una conexión seleccionada, {{ui:Plano de taller}} un modelo con piezas, {{ui:Copiar}} una barra o zapata seleccionada, y {{ui:Pegar}} algo copiado. Consulte [Copiar, pegar y duplicar](topic:copy-paste).

## El panel Modelo (izquierda)

- {{ui:Modelo}}: el {{ui:Nombre}} del modelo. Da nombre a cada archivo que guarda o exporta.
- {{ui:Rejillas}}: las líneas de rejilla y sus separaciones, y {{ui:Aplicar rejillas}}. Consulte [Configurar rejillas y niveles](topic:grids-and-levels).
- {{ui:Niveles}}: una fila por nivel (nombre y cota en mm), {{ui:Añadir nivel}} y {{ui:Aplicar niveles}}.
- {{ui:Perfil a medida}}: cree su propia sección paramétrica. Cerrado hasta que lo abra.
- {{ui:Marcas de pieza}}: cada marca de pieza del modelo con su perfil, longitud y cantidad. Haga clic en una marca para seleccionar la primera pieza con esa marca.

{{ui:Rejillas}}, {{ui:Niveles}} y {{ui:Perfil a medida}} se pliegan: haga clic en sus encabezados.

## La vista (centro)

La vista muestra el modelo en 3D. Encima, la barra de vista tiene tres botones y una lista:

- {{ui:3D}}: gire libremente alrededor del modelo.
- {{ui:Planta}}: mire directamente hacia abajo a un nivel. Junto a los botones aparece una lista de niveles. Todo lo que esté a más de 1,5 m por encima del nivel se oculta, para que pueda ver y seleccionar bien el nivel.
- {{ui:Alzado}}: mire de frente a una línea de rejilla con letra (Rejilla A, Rejilla B …). Aparece una lista de rejillas con letra. Solo se muestra el acero a menos de 1 m de esa línea.
- El botón de ajustar en el extremo derecho de la barra de vista amplía para mostrar todo el modelo.

Pequeños puntos marcan cada intersección de rejillas en cada nivel. Mientras una herramienta de colocación está activa, el punto más cercano al puntero se ilumina y la barra de estado lo nombra, por ejemplo «A/2 en Nivel 1». Los colores distinguen los tipos de elemento: pilares, vigas, diagonales y placas tienen cada uno su color; los tornillos y las barras de anclaje, otro; las zapatas son translúcidas y la armadura se dibuja como tubos. Los agujeros se ven como tapones oscuros; los recortes, cortados.

Cómo girar, desplazar y ampliar: [Moverse por la vista 3D](topic:navigate-3d).

Cuando el modelo está vacío, la vista muestra una breve lista de «Empezar un modelo». También puede soltar un archivo de modelo guardado en cualquier parte de la vista para abrirlo.

## El panel Propiedades (derecha)

Lo que muestra este panel depende de lo que esté haciendo, y su encabezado lo indica: «Modelo», «Colocar una viga», «Viga b2», «Conexión de chapa de testa», «Placa de base», «Zapata F1», «3 seleccionados» o «Pegar».

- **Nada seleccionado:** un resumen del modelo (barras, conexiones, zapatas, piezas, marcas, tornillos, peso de acero y de armadura, rejillas, niveles).
- **Una herramienta de colocación activa:** las opciones de la siguiente pieza (perfil, material, posición, rotación y, para los pilares, {{ui:Hasta}}), un resumen del perfil elegido y un formulario de {{ui:Añadir por rejilla}} para colocar sin hacer clic en la vista.
- **Una barra seleccionada:** su nombre, perfil, material, posición, rotación, las coordenadas de sus dos extremos, sus marcas, longitud de corte y peso, sus agujeros y recortes, y botones para conexiones, su plano de taller y {{ui:Borrar}}.
- **Una conexión seleccionada:** cada ajuste de placa, tornillo y soldadura, los tornillos y la soldadura que genera, sus advertencias, y {{ui:Aplicar a similares}}.
- **Una zapata seleccionada:** su posición y tamaño, el emparrillado inferior, las barras de arranque y las marcas de barra que usa.
- **Varios elementos seleccionados:** cuántas barras de cada tipo, conexiones y zapatas hay, su peso de acero, y {{ui:Copiar}}, {{ui:Duplicar}} y {{ui:Borrar}}.
- **Pegar:** lo que hay en el portapapeles, y formularios para pegar con un desplazamiento escrito o sobre una intersección de rejillas que elija de las listas.

Los campos numéricos se aplican al pulsar {{key:Enter}} o al salir del campo. Cada cambio es un paso que puede deshacer.

## Las pestañas de informes (abajo)

- {{ui:Problemas}}: todo lo que DetailCraft no pudo construir o le pide revisar, con un botón {{ui:Seleccionar}} en cada línea. La pestaña muestra el número entre corchetes.
- {{ui:Lista de materiales}}: piezas, conjuntos, tornillos y barras de anclaje, con pesos y un enlace {{ui:Descargar CSV}}. Haga clic en una marca de pieza para seleccionar esa pieza.
- {{ui:Tabla de doblado}}: cada marca de barra de cada zapata, con un enlace {{ui:Descargar CSV}}.

Con una pestaña enfocada, {{key:Left}} y {{key:Right}} se mueven entre pestañas.

## La barra de estado

La barra de la parte inferior tiene tres partes: la intersección de rejillas bajo el puntero mientras se coloca, el último mensaje (lo que acaba de ocurrir o por qué se rechazó algo) y los totales acumulados de piezas, tornillos, peso de acero y peso de armadura. Cuando una acción parece no hacer nada, lea primero el mensaje de esta barra.

El título de la pestaña del navegador empieza con un punto (•) mientras el modelo tenga cambios sin guardar.

## En una pantalla estrecha

Por debajo de unos 760 píxeles de ancho, las columnas se apilan: barra de herramientas, vista, barra de estado, {{ui:Propiedades}}, pestañas de informes y, al final, el panel {{ui:Modelo}}. Desplácese por la página para llegar a ellos. DetailCraft está diseñado para una pantalla de escritorio o portátil; un teléfono sirve para consultar, no para detallar.
