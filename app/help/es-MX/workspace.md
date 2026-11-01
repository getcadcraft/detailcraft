---
title: Un recorrido por la pantalla
summary: Cada barra, panel y pestaña de DetailCraft con su nombre en pantalla, y para qué sirve cada uno.
keywords: pantalla, diseño, barra de herramientas, paneles, propiedades, barra de estado, informes, interfaz, ui, pestañas
from: 454f74fd
---

DetailCraft llena la ventana del navegador debajo de la barra de la aplicación. De arriba abajo: la barra de herramientas, luego tres columnas (el panel {{ui:Modelo}}, la vista y el panel {{ui:Propiedades}}), luego las pestañas de informes y la barra de estado.

## La barra de la aplicación

La barra delgada de hasta arriba pertenece al sitio de CadCraft, no al modelo. Muestra el nombre y la versión de la aplicación, un vínculo a {{ui:Acerca de DetailCraft}}, {{ui:Ayuda}} (o {{key:F1}}) para esta ayuda, {{ui:Guardar para usar sin conexión}}, el botón de modo de pantalla y el interruptor {{ui:Papel}} / {{ui:Modelo}}.

- {{ui:Guardar para usar sin conexión}} conserva DetailCraft, su vista 3D y esta ayuda en su navegador para que abra sin conexión. Dice {{ui:Lista sin conexión}} una vez guardado; entonces haga clic para ver {{ui:Guardar de nuevo (obtener la versión más reciente)}} o {{ui:Quitar la copia sin conexión}}. Vea [Trabajar sin conexión](common:offline).
- {{ui:Papel}} da una pantalla clara y {{ui:Modelo}} una oscura. La vista 3D la sigue al instante; nada cambia en su modelo.
- El botón de modo de pantalla y {{key:Ctrl+Shift+F}} recorren normal, pantalla completa y pantalla completa con las barras ocultas. {{key:Ctrl+Shift+F}} usa la tecla Control en todas las computadoras, también en una Mac. Con las barras ocultas, apunte al borde superior de la pantalla (o tóquelo) para traerlas de vuelta. {{key:Esc}} sale de pantalla completa.

## La barra de herramientas

La barra de herramientas tiene cinco grupos. Pase el cursor sobre un botón para ver qué hace y su tecla.

| Grupo | Botones | Qué hacen |
|---|---|---|
| {{ui:Archivo}} | {{ui:Nuevo}}, {{ui:Abrir}}, {{ui:Importar IFC}}, {{ui:Guardar}}, {{ui:Ejemplo}} | Inician un modelo, abren un `.detailcraft.json` guardado o un archivo IFC, guardan uno o abren la estructura de ejemplo |
| {{ui:Colocar}} | {{ui:Seleccionar}}, {{ui:Viga}}, {{ui:Columna}}, {{ui:Contraviento}}, {{ui:Placa}}, {{ui:Zapata}}, {{ui:Escalera}} | La herramienta que usa el siguiente clic en la vista |
| {{ui:Conectar}} | {{ui:Placas de extremo}}, {{ui:Placa base}}, y en {{ui:Más}}: {{ui:Placas de cortante}}, {{ui:Empalme}}, {{ui:Cartela}}, {{ui:Similares}} | Agregan una conexión a la viga, columna o contraviento seleccionados, o copian la conexión seleccionada a todos los nudos iguales |
| {{ui:Edición}} | {{ui:Deshacer}}, {{ui:Rehacer}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Más}} | Retroceden y avanzan por las ediciones; copian la selección y la pegan. {{ui:Más}} abre un menú con {{ui:Cortar}}, {{ui:Copiar}}, {{ui:Pegar}}, {{ui:Pegar en el mismo lugar}}, {{ui:Duplicar}}, {{ui:Eliminar}}, {{ui:Seleccionar todo}} y {{ui:No seleccionar nada}}, cada uno con su tecla |
| {{ui:Salida}} | {{ui:IFC}}, {{ui:Archivos NC}}, {{ui:Materiales}}, {{ui:Plano de taller}}, {{ui:Planos}}, y en {{ui:Más}}: {{ui:Doblado}}, {{ui:Reporte de peso por fase}}, {{ui:Archivo KISS para software de fabricación}} | Descargan una exportación o abren las hojas de planos |

Los botones y elementos de menú que no pueden actuar ahora aparecen en gris, y al pasar el cursor se dice por qué. {{ui:Placas de extremo}} necesita una viga seleccionada, {{ui:Placa base}} una columna seleccionada, {{ui:Similares}} una conexión seleccionada, {{ui:Plano de taller}} una pieza seleccionada de perfil I o placa, {{ui:Copiar}} un miembro o una zapata seleccionados y {{ui:Pegar}} algo copiado. Vea [Copiar, pegar y duplicar](topic:copy-paste).

## El panel Modelo (izquierda)

- {{ui:Modelo}}: el {{ui:Nombre}} del modelo. Da nombre a cada archivo que guarda o exporta.
- {{ui:Ejes}}: las líneas de eje y sus separaciones, y {{ui:Aplicar ejes}}. Vea [Configure ejes y niveles](topic:grids-and-levels).
- {{ui:Niveles}}: una fila por nivel (nombre y elevación en mm), {{ui:Agregar nivel}} y {{ui:Aplicar niveles}}.
- {{ui:Perfil personalizado}}: haga su propia sección paramétrica. Cerrado hasta que lo abra.
- {{ui:Marcas de pieza}}: cada marca de pieza del modelo con su perfil, longitud y cantidad. Haga clic en una marca para seleccionar la primera pieza que la lleva.

{{ui:Ejes}}, {{ui:Niveles}} y {{ui:Perfil personalizado}} se pliegan: haga clic en sus títulos.

## La vista (centro)

La vista muestra el modelo en 3D. Arriba de ella, la barra de vista tiene tres botones y una lista:

- {{ui:3D}}: gire libremente alrededor del modelo.
- {{ui:Planta}}: mire directo hacia abajo a un nivel. Junto a los botones aparece una lista de niveles. Todo lo que esté a más de 1.5 m sobre el nivel se corta para que pueda ver y hacer clic en el nivel con claridad.
- {{ui:Elevación}}: mire de frente una línea de eje con letra (Eje A, Eje B …). Aparece una lista de ejes con letra. Solo se muestra el acero a menos de 1 m de esa línea.
- El botón de ajuste, al extremo derecho de la barra de vista, hace zoom para mostrar todo el modelo.

Puntos pequeños marcan cada intersección de ejes en cada nivel. Mientras una herramienta de colocación está activa, el punto más cercano al puntero se ilumina y la barra de estado lo nombra, por ejemplo "A/2 at Level 1". Los colores distinguen los tipos de miembro: columnas, vigas, contravientos y placas tienen cada uno su color, pernos y varillas otro, las zapatas son transparentes y la varilla se dibuja como tubos. Los agujeros se ven como tapones oscuros; los despuntes están cortados.

Cómo girar, encuadrar y hacer zoom: [Muévase por la vista 3D](topic:navigate-3d).

Cuando el modelo está vacío, la vista muestra una lista corta "Start a model". También puede soltar un archivo de modelo guardado en cualquier parte de la vista para abrirlo.

## El panel Propiedades (derecha)

Lo que muestra este panel depende de lo que esté haciendo, y su encabezado lo dice: "Model", "Place a beam", "Beam b2", "End plate connection", "Base plate", "Footing F1", "3 selected" o "Paste".

- **Nada seleccionado:** un resumen del modelo (miembros, conexiones, zapatas, piezas, marcas, pernos, peso de acero y de varilla, ejes, niveles).
- **Una herramienta de colocación activa:** las opciones de la siguiente pieza (perfil, material, posición, rotación y, para columnas, {{ui:Hasta}}), un resumen del perfil elegido y un formulario {{ui:Agregar por ejes}} para colocar sin hacer clic en la vista.
- **Un miembro seleccionado:** su nombre, perfil, material, posición, rotación, las coordenadas de sus dos extremos, sus marcas, longitud de corte y peso, sus agujeros y despuntes, y botones para conexiones, su plano de taller y {{ui:Eliminar}}.
- **Una conexión seleccionada:** cada ajuste de placa, perno y soldadura, los pernos y la soldadura que produce, sus advertencias y {{ui:Aplicar a similares}}.
- **Una zapata seleccionada:** su posición y tamaño, la parrilla inferior, las varillas de arranque y las marcas de varilla que usa.
- **Varias cosas seleccionadas:** cuántos miembros de cada tipo, conexiones y zapatas, su peso de acero, y {{ui:Copiar}}, {{ui:Duplicar}} y {{ui:Eliminar}}.
- **Al pegar:** qué hay en el portapapeles y formularios para pegar con un desfase escrito o en una intersección de ejes que elija de las listas.

Los campos numéricos surten efecto al pulsar {{key:Enter}} o al salir del campo. Cada cambio es un paso que se puede deshacer.

## Las pestañas de informes (abajo)

- {{ui:Problemas}}: todo lo que DetailCraft no pudo construir o quiere que usted revise, con un botón {{ui:Seleccionar}} en cada línea. La pestaña muestra la cuenta entre paréntesis.
- {{ui:Lista de materiales}}: piezas, ensamblajes, y pernos y varillas de anclaje, con pesos y un vínculo {{ui:Descargar CSV}}. Haga clic en una marca de pieza para seleccionar esa pieza.
- {{ui:Planilla de doblado}}: cada marca de varilla en cada zapata, con un vínculo {{ui:Descargar CSV}}.

Con una pestaña enfocada, {{key:Left}} y {{key:Right}} pasan de una pestaña a otra.

## La barra de estado

La barra de abajo tiene tres partes: la intersección de ejes bajo el puntero al colocar, el último mensaje (qué acaba de pasar, o por qué algo se rechazó) y los totales acumulados de piezas, pernos, peso de acero y peso de varilla. Cuando una acción parece no hacer nada, lea primero el mensaje aquí.

El título de la pestaña del navegador empieza con un punto (•) mientras el modelo tiene cambios sin guardar.

## En una pantalla angosta

Por debajo de unos 760 píxeles de ancho, las columnas se apilan: barra de herramientas, vista, barra de estado, {{ui:Propiedades}}, pestañas de informes y al final el panel {{ui:Modelo}}. Desplace la página para llegar a ellos. DetailCraft está pensado para una pantalla de escritorio o de laptop; un teléfono sirve para mirar, no para detallar.
