---
title: Viene de otro software de detallado
summary: Cómo se corresponden los hábitos de un paquete de detallado completo con DetailCraft, y las diferencias que sorprenden a los detallistas con experiencia.
keywords: cambio, migración, familiar, flujo de trabajo, comparación, diferencias, numeración, componentes, catálogo, planos, hábitos
from: 39639a5d
---

Si detalla en Tekla Structures, la mayor parte de DetailCraft le resultará familiar: ejes, niveles, perfiles de un catálogo, piezas y ensambles, conexiones, numeración, archivos NC, IFC. La escala es muy distinta: Tekla Structures es un sistema de producción completo, y DetailCraft es una aplicación de navegador pequeña y temprana que realiza unas cuantas tareas de principio a fin. Esta página le indica dónde sus hábitos se trasladan y dónde no.

:::tip
Si sus manos conocen la cinta de Tekla Structures, elija el estilo de menú {{ui:Cinta de acero}} en {{ui:Configuración}} › {{ui:DetailCraft}} › {{ui:Menús, teclas y ratón}}: pestañas Modelado, Detallado, Editar, Planos, Fabricación y Vista, y el botón central hace encuadre. Si viene de AutoCAD y le gusta escribir comandos, {{ui:Dibujo clásico}} agrega una línea de comandos (BEAM, COLUMN, ENDPLATE, ZOOM …). Vea [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

## Mapa rápido

| Está acostumbrado a | En DetailCraft |
|---|---|
| Crear ejes con coordenadas en un cuadro de diálogo de ejes | {{ui:Ejes}} en el panel izquierdo: etiquetas y separaciones entre líneas, no coordenadas absolutas. Las líneas numeradas van en una dirección, las líneas con letras en la otra |
| Niveles como coordenadas Z de los ejes | Una lista aparte de {{ui:Niveles}}, con nombre y elevación por fila, aplicada con {{ui:Aplicar niveles}} |
| Elegir puntos en cualquier lugar con referencias a objetos | Los clics se ajustan solo a intersecciones de ejes. Los puntos fuera de la malla se escriben en {{ui:Extremos (x, y, z mm)}} de un miembro |
| Los comandos de columna, viga y placa | {{ui:Columna}} ({{key:C}}), {{ui:Viga}} ({{key:B}}), {{ui:Contraviento}} ({{key:R}}), {{ui:Placa}} ({{key:P}}), {{ui:Zapata}} ({{key:F}}) |
| Cuadro de diálogo de propiedades de una pieza (doble clic en la pieza) | Un clic: el panel {{ui:Propiedades}} de la derecha siempre está activo; no hay cuadro de diálogo ni botón Modificar o Aplicar |
| Posición en el plano, rotación y ajustes de profundidad | {{ui:Posición}} (parte superior del acero, centrado o inferior en la línea) y {{ui:Rotación (°)}}. No hay desfases horizontales separados |
| El catálogo de perfiles | Una lista fija de 2,311 tamaños publicados (AISC W, S, C, L, HSS, Pipe; europeos IPE, HEA, HEB, UPN; UK UB, UC, PFC, EA, UEA, SHS, RHS, CHS y secciones huecas conformadas en frío), más placas paramétricas y sus propias secciones {{ui:Perfil personalizado}} |
| Catálogo de materiales | Siete grados en una lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar un componente de conexión y su cuadro de diálogo | Seleccione la viga y elija {{ui:Placas de extremo}}. Los ajustes aparecen en el panel {{ui:Propiedades}}. Solo existen dos conexiones (placa extrema a patín de columna, y placa base) |
| Conexión automática, o copiar una unión a uniones similares | Seleccione una conexión y elija {{ui:Aplicar a similares (n)}} |
| Numeración con series y números iniciales | Sin comando: las marcas se actualizan solas después de cada cambio, con prefijos fijos c, b, br, p y C, B, BR, P |
| Cuadros de diálogo de pernos y agujeros | Los agujeros se escriben por cara y posición. Los pernos vienen solo de las conexiones |
| Herramientas de corte, ajuste y corte por polígono | Recortes (superior o inferior, en cualquiera de los extremos) solo en perfiles I. Los recortes de conexión son automáticos |
| Informes y plantillas | Tres informes fijos en pestañas en la parte inferior, y descargas CSV |
| Creación de planos y lista de planos | Un plano de taller por marca de pieza, todos a la vez; se previsualizan y luego se descargan como un PDF o hoja por hoja. No se guarda ni se edita nada |
| Exportación de archivos NC | {{ui:Archivos NC}}: un archivo DSTV por marca de pieza, solo perfiles I y placas, comprimido en ZIP |
| Exportación IFC | {{ui:IFC}}: IFC4 de todo el modelo, con varillas |
| Varillas en cualquier pieza de concreto | Varillas solo en zapatas rectangulares, con tamaños de barra estadounidenses, con malla inferior y varillas de arranque |
| Modelo guardado en una carpeta de proyecto, multiusuario | Un archivo `.detailcraft.json` que usted descarga. Un solo usuario, en su computadora |
| Historial de deshacer | {{key:Mod+Z}} y {{key:Mod+Y}}, hasta 200 pasos, que se conservan hasta que abre o inicia otro modelo |

## Diferencias que confunden a la gente

### Las marcas cambian solas

No hay paso de numeración. Las marcas se recalculan después de cada cambio, así que siempre están al día, pero también pueden renumerarse: si agrega una columna, la c3 de ayer puede ser ahora c4. No hay "historial de numeración" que conserve marcas antiguas. Termine el modelo y luego emita la lista de materiales, los archivos NC y los planos de taller juntos, desde un solo archivo guardado.

### El botón central del ratón hace zoom; no hace encuadre

En la vista 3D: arrastrar con el botón izquierdo gira, arrastrar con el derecho hace encuadre, la rueda hace zoom, y arrastrar con el botón central también hace zoom. Mantener {{key:Shift}} mientras arrastra con el botón izquierdo también hace encuadre. La rueda hace zoom hacia el centro de la vista, no hacia el puntero. No hay selección de centro de rotación: el modelo gira alrededor del centro de la vista. Vea [Moverse por la vista 3D](topic:navigate-3d).

### Las columnas miran hacia un lado por defecto

Con rotación 0, los patines de una columna miran a lo largo de la dirección de los ejes numerados. Las vigas que van entre ejes con letra se conectan al alma, y ahí se rechazan las placas extremas ("Beams framing into a column web are not built yet": las vigas que llegan al alma de una columna todavía no se construyen). Gire esas columnas 90° antes de agregar conexiones.

### Elevaciones solo en líneas con letra

{{ui:Elevación}} mira solo a lo largo de las líneas de ejes con letra. No hay vistas a lo largo de las líneas numeradas, ni vistas guardadas, ni planos de trabajo. Use {{ui:3D}} o {{ui:Agregar por ejes}} para marcos sobre líneas numeradas.

### Selección, copia y desplazamiento

Seleccione varias piezas con {{key:Shift}}+clic o {{key:Mod+A}}, luego copie, corte, pegue (sobre una intersección de ejes, con un desfase escrito, o en el mismo lugar) y duplique, incluidas las conexiones ([Copiar, pegar y duplicar](topic:copy-paste)). No hay selección por ventana, ni filtro de selección, ni desplazar, simetría ni matriz, y las propiedades se cambian un miembro a la vez en el panel {{ui:Propiedades}}.

### Los ejes no arrastran las piezas

Los miembros conservan sus coordenadas cuando cambia la separación de los ejes; nada se mueve con las líneas de eje. Cambie la malla antes de colocar el acero, o edite después las coordenadas de extremo de cada miembro.

### Las conexiones no se diseñan

Las dos conexiones colocan placas, agujeros, pernos y soldaduras a partir de los números que usted da. No hay ninguna revisión de diseño, solo advertencias de borde y de separación (de EN 1993-1-8, Tabla 3.3).

### Los agujeros no se cortan en la vista 3D

Los agujeros se ven como tapones oscuros. Son agujeros reales en los archivos NC, en los planos de taller y en el archivo IFC. Los recortes sí se cortan en la vista.

### Los pesos son brutos

El peso del acero no descuenta agujeros ni recortes, y no se incluye el peso de los pernos.

### Solo milímetros

Todo se escribe y se muestra en milímetros, incluso para perfiles AISC. Los nombres de perfil conservan su forma publicada (W12x50, HSS6x6x1/4).

### No hay planos que administrar

No hay lista de planos, ni editor de planos, ni planos de disposición general ni de ensamble. Un plano de taller se crea cuando lo pide y se descarga; para cambiarlo, cambie el modelo y vuelva a crearlo.

### Funciona en un navegador

Guardar descarga un archivo. Los atajos de teclado que el navegador reserva para sí no se pueden usar. Sus modelos nunca salen de su computadora: vea [Dónde van sus archivos](common:your-files).

## Lo que debe seguir haciendo en su software actual

Hoy DetailCraft sirve para marcos pequeños, para revisar una idea, para enseñar, o para producir archivos NC y planos de taller de trabajos sencillos de vigas y columnas. Siga usando el software que usa ahora para conexiones complejas, planos de disposición general, planos de montaje, proyectos multiusuario y todo lo que aparezca en [Lo que todavía no está construido](topic:not-built-yet).
