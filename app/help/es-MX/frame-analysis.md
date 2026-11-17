---
title: Analizar el marco
summary: Fuerzas, reacciones y deflexiones de vigas, columnas y contraventeos tal como están dibujados, bajo casos de carga y combinaciones que defina. Una ayuda de análisis, no una revisión de código; las revisiones de diseño son un paso aparte.
keywords: análisis, análisis estructural, análisis de marco, método de rigideces, cargas, caso de carga, combinación, carga muerta, carga viva, peso propio, reacciones, momento flector, cortante, fuerza axial, deflexión, forma deformada, apoyos, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d
from: ba0081bc
---

La pestaña {{ui:Análisis}} en la parte inferior encuentra las fuerzas en cada viga, columna y contraventeo del modelo, las reacciones en las bases de las columnas y cuánto se flexionan los miembros, para las cargas que usted indique.

:::warning
Es una **ayuda de análisis, no una revisión de código**. El análisis no aplica ningún código de diseño: no dimensiona miembros, no revisa capacidades ni conexiones, ni elige factores de carga. Un ingeniero revisa el modelo, sus cargas y apoyos, y decide qué significan los números. Para revisiones de miembros según ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1, vea [Revisar miembros de acero según un código de diseño](topic:design-checks), un paso aparte que también es una ayuda.
:::

## Ejecutarlo

1. Abra la pestaña {{ui:Análisis}}.
2. Seleccione uno o más miembros en la vista, elija un {{ui:Caso}}, una {{ui:Carga}} y una {{ui:Dirección}}, escriba el valor y pulse {{ui:Agregar carga}}. Una carga repartida a lo largo de un miembro va en kN/m; una carga puntual, en kN. {{ui:Hacia abajo (gravedad)}} es la habitual.
3. Pulse {{ui:Ejecutar análisis}}.

La tabla enumera para cada miembro la fuerza axial N mayor, los cortantes Vz y Vy, los momentos flectores My y Mz, la torsión T y su deflexión, con el momento mayor primero; haga clic en el nombre de un miembro para seleccionarlo. Debajo están las reacciones en cada apoyo. {{ui:Sobre el modelo}} dibuja la forma deformada, o una acción como diagrama junto a cada miembro con su valor mayor escrito en su lugar. Los resultados quedan desactualizados en cuanto cambia el modelo: vuelva a ejecutarlo.

Cada carga, caso y ajuste es un paso de deshacer ({{key:Mod+Z}}) y se guarda en el archivo del modelo.

## Casos de carga y combinaciones

El análisis empieza con tres: **Muerta** (el peso propio de los miembros, a partir de sus secciones dibujadas y 7850 kg/m³), **Viva** (vacía) y **Muerta + viva**. Agregue casos propios (viento, nieve …) y combinaciones: una combinación suma los casos con los factores que escriba. El análisis es lineal, así que cada caso se resuelve una vez y las combinaciones son sumas. Escriba los factores usted mismo, o elija un código de diseño y deje que {{ui:Generar combinaciones}} escriba los del código ([Revisar miembros de acero según un código de diseño](topic:design-checks)).

## De qué está hecho el marco

- Vigas, columnas y contraventeos, cada uno sobre su línea de trabajo (la línea que dibujó), con las propiedades reales de la sección calculadas a partir de su contorno. Placas, escaleras, zapatas y pernos no forman parte del marco.
- Un miembro se divide donde termina en él el extremo de otro miembro, así que una viga que llega a una columna a media altura se une allí.
- **Bases de columna**: empotradas (el inicio) o articuladas (sujetas en su lugar y contra la torsión, libres de girar). Una placa base siempre hace un apoyo.
- **Extremos de viga**: una placa de extremo es rígida; una placa de cortante es articulada. {{ui:Extremos de viga sin conexión}} define el resto. Los **contraventeos** están articulados en ambos extremos.
- Seleccione un miembro para darle a sus extremos, o a la base de una columna, una regla propia.
- Acero en todo: E = 200 GPa, G = 77 GPa.

Si el marco puede moverse sin flexionar nada (un mecanismo, como bases articuladas sin contraventeo en una dirección), la ejecución se detiene y dice dónde y en qué dirección; sujételo ahí con un apoyo, una unión rígida o un contraventeo.

## Signos

N > 0 es tensión. My > 0 pone en tensión el lado −z local del miembro: una viga que se hunde bajo gravedad tiene My > 0. Mz > 0 pone en tensión el lado −y local. La deflexión se mide desde la línea recta entre los extremos del miembro. El eje z local de un miembro apunta hacia arriba (para una columna, a lo largo de X); sus ejes locales giran con la rotación del miembro.

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} contienen todo: los supuestos en que se construyó el marco, secciones, casos y combinaciones y, luego, para cada caso y combinación, las reacciones (con las sumas de cargas y reacciones, que se equilibran), las fuerzas de los miembros y los desplazamientos, y una envolvente de todos los casos. {{ui:Exportar como CraftScript}} escribe el mismo marco como un script para el espacio de trabajo Script de PartCraft, donde la función de biblioteca `frame3d` lo resuelve paso a paso en código legible.

## Método

Método de rigideces directas, lineal y de primer orden salvo que marque Segundo orden (P-Delta): miembros de viga-columna de dos nodos con rigideces axial, de torsión y de dos flexiones (sin deformación por cortante, sin alabeo), liberaciones de extremo por condensación estática, y cargas a lo largo de los miembros mediante sus propias funciones de forma. Sus respuestas se comparan con los casos clásicos de libro de texto (voladizos, vigas simples, empotradas y continuas, un pórtico, una rejilla en torsión, una armadura).

**Segundo orden (P-Delta).** Marque *Segundo orden (P-Delta)* junto a Ejecutar: cada combinación se resuelve de nuevo con las fuerzas axiales de los miembros actuando sobre el marco deformado (cada miembro dividido en 4 partes, para que también cuente la flexión entre sus extremos), hasta que las fuerzas axiales se estabilizan. La línea de resultado indica el número de pasadas y cuánto creció el desplazamiento lateral; los momentos, deflexiones, revisiones de diseño e informe usan entonces estos resultados. Por encima de la carga crítica elástica del marco, la ejecución se detiene y lo indica. Es elástico con rotaciones pequeñas, solo flexional, sin reducción de rigidez ni cargas nocionales (no es por sí solo el método de análisis directo de AISC); las losas, muros y pisos rígidos siguen siendo de primer orden.

**Frecuencias naturales (elementos finitos).** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo con el motor de elementos finitos: vigas con sus liberaciones de extremo, losas y muros como láminas planas de cuatro nodos, pisos rígidos y apoyos. Elija cuántos modos (3, 6, 10 o 20) y el elemento de losa (la lámina de cuatro nodos para losas gruesas o delgadas, o la de losa delgada), y pulse {{ui:Calcular las frecuencias}}. La tabla da la frecuencia de cada modo en Hz, su periodo en segundos y su masa modal efectiva en X, Y y Z como porcentaje de la masa que puede moverse; {{ui:Mostrar en el modelo}} dibuja cualquier modo como se dibuja la forma deformada. La masa es la densidad del material por el volumen: las cargas no agregan masa, y un material sin densidad no tiene. El informe (PDF, CSV) incluye la tabla. Es elástico y solo para movimientos pequeños, y aquí no se genera ninguna carga sísmica ni de viento a partir de un código. No es una revisión de código; su ingeniero revisa los resultados.

**Espectro de respuesta, historia en el tiempo y empuje progresivo.** Tres bloques más están debajo de las frecuencias, usando el mismo modelo de elementos finitos. La masa para todos ellos es la densidad del material más las cargas gravitacionales hacia abajo de los casos que marque, cada una multiplicada por un factor que escriba (por ejemplo, Muerta con 1 y Viva con la parte que cuente como masa).

{{ui:Espectro de respuesta}} lee cada modo de un espectro que usted da (una tabla de periodo y aceleración, o la forma ASCE 7 a partir de SDS, SD1 y TL; el botón {{ui:Usar los valores del bloque Sísmico}} copia esos valores del bloque Sísmico) y combina los modos por CQC, SRSS, la regla del diez por ciento o una suma absoluta; luego combina las direcciones X, Y y Z (100 % + 30 % o SRSS). Da el cortante basal, las derivas de entrepiso, las fuerzas en los extremos de los miembros y una tabla de modos que advierte cuando los modos usados llevan menos del 90 % de la masa. Puede escalar los resultados por un factor o hasta un cortante basal que escriba; el bloque nunca calcula por sí mismo ese cortante basal. Los resultados no tienen signo.

{{ui:Historia en el tiempo}} aplica una aceleración del suelo por superposición modal (exacta para las rectas del registro entre puntos) o por integración directa (aceleración media de Newmark con amortiguamiento de Rayleigh). La entrada es un seno o pulso inventado (siempre marcado como sintético), un registro que pegue, o un archivo de texto que abra (tiempo y aceleración, una aceleración por línea con un paso, o un archivo estilo PEER con encabezado DT=; en g o m/s²). Da el desplazamiento de la azotea y el cortante basal contra el tiempo, la deriva de cada nivel y la envolvente de las fuerzas en los extremos de los miembros. Los modelos con un registro muy largo lo conservan solo durante la sesión.

{{ui:Empuje progresivo}} empuja la azotea lateralmente en pasos pequeños (patrón como el primer modo, o uniforme), con articulaciones plásticas en los extremos de miembros con sección en I. Una articulación cede en el momento plástico, que disminuye al crecer la fuerza axial (calculado a partir de la forma dibujada, sin considerar los filetes); el endurecimiento es opcional, el P-delta es opcional, y se puede aplicar primero una combinación gravitacional. Da la curva de capacidad (cortante basal contra desplazamiento de la azotea), la primera articulación, y el estado y la rotación plástica de cada articulación. {{ui:Calcular la historia no lineal}} ejecuta las mismas articulaciones bajo el registro del bloque {{ui:Historia en el tiempo}}, en modelos pequeños. Las articulaciones se forman solo en los extremos de los miembros (ponga un nodo donde deba formarse una dentro de un claro); un miembro liberado en ambos extremos no tiene ninguna, y no se modelan la fluencia ni el pandeo de los contraventeos; las losas y muros siguen elásticos; no se dan criterios de aceptación. No es una revisión de código; su ingeniero revisa los resultados. La configuración se guarda con el modelo, y el informe incluye las tablas.

Aún no construido: análisis de pandeo, una corrección de masa faltante para el espectro de respuesta, escalamiento de registros, criterios de aceptación para articulaciones (la respuesta dinámica sí está, arriba), áreas y cargas de viento generadas automáticamente (las fuerzas sísmicas en pisos están en [Revisar miembros de concreto y generar cargas sísmicas](topic:concrete-and-seismic)), excentricidades de miembros y contraventeos que solo trabajan a tensión. Vea [Lo que todavía no está construido](topic:not-built-yet).
