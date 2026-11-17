---
title: Procedencia de otro software de detallado
summary: Cómo los hábitos de un paquete completo de detallado se corresponden con DetailCraft, y las diferencias que sorprenden a los detallistas experimentados.
keywords: cambio, migrar, familiar, flujo de trabajo, comparación, diferencias, numeración, componentes, catálogo, planos, hábitos
from: 39639a5d
---

Si detalla en Tekla Structures, la mayor parte de DetailCraft le resultará familiar: rejillas, niveles, perfiles de un catálogo, piezas y conjuntos, uniones, numeración, archivos NC, IFC. La escala es muy distinta: Tekla Structures es un sistema de producción completo, y DetailCraft es una aplicación de navegador pequeña y temprana que hace unas pocas tareas de principio a fin. Esta página le indica dónde se mantienen sus hábitos y dónde no.

:::tip
Si tiene asimilada la cinta de Tekla Structures, elija el estilo de menú {{ui:Cinta de acero}} en {{ui:Ajustes}} › {{ui:DetailCraft}} › {{ui:Menús, teclas y ratón}}: pestañas Modelado, Detallado, Editar, Planos, Fabricación y Vista, y el botón central desplaza la vista. Si viene de AutoCAD y le gusta escribir comandos, {{ui:Clásico de delineación}} añade una línea de comandos (BEAM, COLUMN, ENDPLATE, ZOOM …). Véase [Menús, teclas y ratón](topic:menus-keys-and-mouse).
:::

## Mapa rápido

| Lo que ya conoce | En DetailCraft |
|---|---|
| Crear rejillas con coordenadas en un cuadro de rejilla | {{ui:Rejillas}} en el panel izquierdo: etiquetas y separaciones entre líneas, no coordenadas absolutas. Las líneas numeradas van en un sentido, las líneas con letras en el otro |
| Niveles como coordenadas Z de la rejilla | Una lista aparte, {{ui:Niveles}}, con nombre y cota por fila, que se aplica con {{ui:Aplicar niveles}} |
| Elegir puntos en cualquier lugar con ajustes a objetos | Los clics solo se ajustan a nudos de rejilla. Los puntos fuera de rejilla se escriben en {{ui:Extremos (x, y, z mm)}} de un miembro |
| Los comandos de pilar, viga y placa | {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}), {{ui:Diagonal}} ({{key:R}}), {{ui:Placa}} ({{key:P}}), {{ui:Zapata}} ({{key:F}}) |
| Cuadro de propiedades de una pieza (doble clic en la pieza) | Un clic: el panel {{ui:Propiedades}} de la derecha está siempre activo; no hay cuadro de diálogo ni botón Modificar o Aplicar |
| Posición en el plano, giro y ajustes de profundidad | {{ui:Posición}} (cara superior del acero, centrado o inferior en la línea) y {{ui:Giro (°)}}. No hay desplazamientos horizontales aparte |
| El catálogo de perfiles | Una lista fija de 2,311 perfiles publicados (AISC W, S, C, L, HSS, Pipe; europeos IPE, HEA, HEB, UPN; británicos UB, UC, PFC, EA, UEA, SHS, RHS, CHS y secciones huecas conformadas en frío), además de placas paramétricas y sus propias secciones {{ui:Perfil a medida}} |
| El catálogo de materiales | Siete calidades en una lista: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Aplicar un componente de conexión y su cuadro | Seleccione la viga y elija {{ui:Chapas de testa}}. Los ajustes aparecen en el panel {{ui:Propiedades}}. Solo existen dos uniones (placa de testa a ala de pilar, y placa de base) |
| Conexión automática, o copiar una unión a uniones similares | Seleccione una unión y elija {{ui:Aplicar a similares (n)}} |
| Numerar con series y números de inicio | Sin comando: las marcas se actualizan solas tras cada cambio, con los prefijos fijos c, b, br, p y C, B, BR, P |
| Cuadros de tornillos y agujeros | Los agujeros se escriben por cara y posición. Los tornillos solo proceden de las uniones |
| Herramientas de corte, ajuste y corte poligonal | Entallas (superiores o inferiores, en cualquier extremo) solo en perfiles en I. Los recortes de unión son automáticos |
| Informes y plantillas | Tres informes fijos en pestañas en la parte inferior, y descargas en CSV |
| Creación de planos y lista de planos | Un plano de taller por marca de pieza, todos a la vez, con vista previa y luego descarga como un único PDF o hoja a hoja. No se guarda ni se edita nada |
| Exportación de archivos NC | {{ui:Archivos NC}}: un archivo DSTV por marca de pieza, solo perfiles en I y placas, comprimido en ZIP |
| Exportación IFC | {{ui:IFC}}: IFC4 de todo el modelo, con armaduras |
| Armadura en cualquier pieza de hormigón | Armaduras solo en zapatas rectangulares aisladas, con barras en tamaños US, una malla inferior y barras de arranque |
| Modelo guardado en una carpeta de proyecto, con varios usuarios | Un archivo `.detailcraft.json` que descarga. Un usuario, en su ordenador |
| Historial de deshacer | {{key:Mod+Z}} y {{key:Mod+Y}}, hasta 200 pasos, que se conservan hasta que abre o inicia otro modelo |

## Diferencias que desconciertan

### Las marcas cambian solas

No hay paso de numeración. Las marcas se recalculan tras cada cambio, así que siempre están al día, pero también pueden renumerarse: añada un pilar y el c3 de ayer puede ser ahora c4. No hay "historial de numeración" que conserve marcas antiguas. Termine el modelo y luego emita la lista de materiales (BOM), los archivos NC y los planos de taller juntos, desde un mismo archivo guardado.

### El botón central del ratón amplía; no desplaza

En la vista 3D: arrastrar con el botón izquierdo gira, arrastrar con el derecho desplaza, la rueda amplía, y arrastrar con el botón central también amplía. Mantener {{key:Shift}} mientras arrastra con el izquierdo también desplaza. La rueda amplía hacia el centro de la vista, no hacia el puntero. No hay selección de centro de giro: el modelo gira alrededor del centro de la vista. Véase [Moverse por la vista 3D](topic:navigate-3d).

### Los pilares miran en una dirección por defecto

Con giro 0 las alas de un pilar miran en la dirección de la rejilla numerada. Las vigas que van entre líneas con letras acometen en el alma, y allí se rechazan las placas de testa ("Las vigas que acometen en el alma de un pilar todavía no se construyen"). Gire esos pilares 90° antes de añadir uniones.

### Alzados solo en líneas con letras

{{ui:Alzado}} mira solo a lo largo de las líneas de rejilla con letras. No hay vistas a lo largo de líneas numeradas, ni vistas guardadas ni planos de trabajo. Use {{ui:3D}} o {{ui:Añadir por rejilla}} para pórticos en líneas numeradas.

### Selección, copia y movimiento

Seleccione varias piezas con {{key:Shift}}+clic o {{key:Mod+A}}, y después cópielas, córtelas, péguelas (en un nudo de rejilla, con un desplazamiento escrito o en el mismo sitio) o duplíquelas, uniones incluidas ([Copiar, pegar y duplicar](topic:copy-paste)). No hay selección por ventana, ni filtro de selección, ni mover, simetría ni matriz, y las propiedades se cambian de una pieza cada vez en el panel {{ui:Propiedades}}.

### Las rejillas no arrastran los miembros

Los miembros conservan sus coordenadas al cambiar la separación de la rejilla; nada se mueve con las líneas de rejilla. Cambie la rejilla antes de colocar el acero, o edite después las coordenadas de cada extremo de miembro.

### Las uniones no se diseñan

Las dos uniones colocan placas, agujeros, tornillos y soldaduras a partir de los números que usted da. No hay ninguna comprobación de diseño, solo avisos de distancia al borde y de separación (de EN 1993-1-8, tabla 3.3).

### Los agujeros no se cortan en la vista 3D

Los agujeros aparecen como tapones oscuros. Son agujeros reales en los archivos NC, en los planos de taller y en el archivo IFC. Las entallas sí se cortan en la vista.

### Los pesos son brutos

El peso del acero no descuenta agujeros ni entallas, y no incluye el peso de los tornillos.

### Solo milímetros

Todo se escribe y se muestra en milímetros, incluso para perfiles AISC. Los nombres de perfil conservan su forma publicada (W12x50, HSS6x6x1/4).

### No hay planos que gestionar

No hay lista de planos, ni editor de planos, ni planos de disposición general ni de conjunto. Un plano de taller se genera cuando lo pide y se descarga; para cambiarlo, cambie el modelo y vuelva a generarlo.

### Funciona en un navegador

Guardar descarga un archivo. Los atajos de teclado que el navegador reserva para sí no se pueden usar. Sus modelos nunca salen de su ordenador: véase [Dónde van sus archivos](common:your-files).

## Lo que debe seguir haciendo en su software actual

Hoy DetailCraft sirve para pórticos pequeños, para comprobar una idea, para enseñar, o para producir archivos NC y planos de taller de trabajos sencillos de vigas y pilares. Mantenga las uniones complejas, los planos de disposición general, los planos de montaje, los proyectos multiusuario y todo lo que aparece en [Lo que todavía no está construido](topic:not-built-yet) en el software que usa ahora.
