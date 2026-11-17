---
title: Analizar el entramado
summary: Fuerzas, reacciones y deformaciones de las vigas, columnas y riostras tal como están dibujadas, bajo casos de carga y combinaciones que definís. Una ayuda de análisis, no una verificación de norma; las verificaciones de diseño son un paso aparte.
keywords: análisis, análisis estructural, análisis de entramado, método de rigidez, cargas, caso de carga, combinación, carga permanente, sobrecarga, peso propio, reacciones, momento flector, corte, esfuerzo axil, deformación, forma deformada, apoyos, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d
from: ba0081bc
---

La pestaña {{ui:Análisis}} al pie encuentra las fuerzas en cada viga, columna y riostra del modelo, las reacciones en las bases de las columnas y cuánto se doblan los miembros, para las cargas que le des.

:::warning
Es una **ayuda de análisis, no una verificación de norma**. El análisis no aplica ningún código de diseño: no dimensiona miembros, no verifica capacidades ni uniones, ni elige factores de carga. Un ingeniero revisa el modelo, sus cargas y sus apoyos, y decide qué significan los números. Para las verificaciones de miembros según ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1 ver [Verificar miembros de acero según una norma de diseño](topic:design-checks), un paso aparte que también es una ayuda.
:::

## Ejecutarlo

1. Abrí la pestaña {{ui:Análisis}}.
2. Seleccioná uno o más miembros en la vista, elegí un {{ui:Caso}}, una {{ui:Carga}} y una {{ui:Dirección}}, escribí el valor y presioná {{ui:Agregar carga}}. Una carga repartida a lo largo de un miembro va en kN/m; una carga puntual, en kN. {{ui:Hacia abajo (gravedad)}} es la habitual.
3. Presioná {{ui:Ejecutar análisis}}.

La tabla lista para cada miembro el axil mayor N, los cortes Vz y Vy, los momentos flectores My y Mz, la torsión T y su deformación, empezando por el momento mayor; hacé clic en el nombre de un miembro para seleccionarlo. Debajo están las reacciones en cada apoyo. {{ui:En el modelo}} dibuja la forma deformada, o una acción como diagrama al lado de cada miembro con su valor mayor escrito en su lugar. Los resultados quedan desactualizados en cuanto cambia el modelo: ejecutalo de nuevo.

Cada carga, caso y ajuste es un paso de {{key:Mod+Z}} y se guarda en el archivo del modelo.

## Casos de carga y combinaciones

El análisis empieza con tres: **Permanente** (el peso propio de los miembros, según sus secciones dibujadas y 7850 kg/m³), **Sobrecarga** (vacío) y **Permanente + sobrecarga**. Agregá casos propios (viento, nieve …) y combinaciones: una combinación suma los casos con los factores que escribas. El análisis es lineal, así que cada caso se resuelve una vez y las combinaciones son sumas. Escribí los factores vos, o elegí un código de diseño y dejá que {{ui:Armar combinaciones}} escriba los del código ([Verificar miembros de acero según una norma de diseño](topic:design-checks)).

## De qué está hecho el entramado

- Vigas, columnas y riostras, cada una sobre su línea de trabajo (la línea que dibujaste), con las propiedades reales de la sección calculadas a partir de su contorno. Chapas, escaleras, zapatas y pernos no forman parte del entramado.
- Un miembro se parte donde el extremo de otro miembro cae sobre él, así que una viga que llega a una columna a media altura se une a ella allí.
- **Bases de columna**: empotradas (el inicio) o articuladas (sujetas en su lugar y contra la torsión, libres de girar). Una placa base siempre hace de apoyo.
- **Extremos de viga**: una chapa de extremo es rígida, una cartela de corte es articulada. {{ui:Extremos de vigas sin conexión}} define el resto. Las **riostras** están articuladas en ambos extremos.
- Seleccioná un miembro para darles a sus extremos, o a la base de una columna, una regla propia.
- Acero en todo: E = 200 GPa, G = 77 GPa.

Si el entramado puede moverse sin doblar nada, un mecanismo, como bases articuladas sin arriostramiento en una dirección, la ejecución se detiene e indica dónde y en qué dirección; sujetalo con un apoyo, una unión rígida o una riostra.

## Signos

N > 0 es tracción. My > 0 pone en tracción el lado local −z del miembro: una viga que se comba bajo la gravedad tiene My > 0. Mz > 0 pone en tracción el lado local −y. La deformación se mide desde la recta entre los extremos del miembro. El eje local z del miembro apunta hacia arriba (para una columna: a lo largo de X); sus ejes locales giran con la rotación del miembro.

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} contienen todo: los supuestos con los que se armó el entramado, las secciones, los casos y combinaciones, y luego, para cada caso y combinación, las reacciones (con las sumas de cargas y reacciones, que se equilibran), los esfuerzos de los miembros y los desplazamientos, y una envolvente de todos los casos. {{ui:Exportar como CraftScript}} escribe el mismo entramado como un script para el espacio de Script de PartCraft, donde la función de biblioteca `frame3d` lo resuelve paso a paso en código legible.

## Método

El método de la rigidez directa, lineal y de primer orden salvo que marques Segundo orden (P-Delta): vigas-columnas de dos nodos con rigideces axial, de torsión y de dos flexiones (sin deformación por corte, sin alabeo), liberaciones de extremo por condensación estática, cargas a lo largo de los miembros con sus propias funciones de forma. Sus respuestas se verifican contra casos clásicos de libro (voladizos, vigas simples, empotradas y continuas, un pórtico, una grilla en torsión, una celosía).

**Segundo orden (P-Delta).** Marcá *Segundo orden (P-Delta)* junto a Ejecutar: cada combinación se resuelve otra vez con los axiles de los miembros actuando sobre el entramado deformado (cada miembro partido en 4 tramos, así que también cuenta la flexión entre sus extremos), hasta que los axiles se estabilizan. La línea de resultado indica la cantidad de pasadas y cuánto creció el desplazamiento lateral; los momentos, las deformaciones, las verificaciones de diseño y el informe usan entonces estos resultados. Por encima de la carga crítica elástica del entramado la ejecución se detiene y lo dice. Es elástica con rotaciones pequeñas, solo a flexión, sin reducción de rigidez ni cargas nocionales (no es por sí sola el método de análisis directo de AISC); las losas, los muros y los pisos rígidos siguen siendo de primer orden.

**Frecuencias naturales (elementos finitos).** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo con el motor de elementos finitos: vigas con sus liberaciones de extremo, losas y muros como láminas planas de cuatro nodos, pisos rígidos, apoyos. Elegí cuántos modos (3, 6, 10 o 20) y el elemento de losa (la lámina de cuatro nodos para losas gruesas o delgadas, o la de losa delgada), y presioná {{ui:Calcular las frecuencias}}. La tabla da la frecuencia de cada modo en Hz, su período en segundos y su masa modal efectiva en X, Y y Z como parte de la masa que puede moverse; {{ui:Mostrar en el modelo}} dibuja cualquier modo de la misma forma en que se dibuja la forma deformada. La masa es la densidad del material por el volumen: las cargas no agregan masa, y un material sin densidad no tiene masa. El informe (PDF, CSV) incluye la tabla. Es elástico y solo para movimientos pequeños, y aquí no se genera ninguna carga sísmica ni de viento a partir de una norma. No es una verificación de norma; tu ingeniero revisa los resultados.

**Espectro de respuesta, historia en el tiempo y empuje monotónico.** Otros tres bloques quedan debajo de las frecuencias, usando el mismo modelo de elementos finitos. La masa para todos ellos es la densidad del material más las cargas hacia abajo de los casos que marques, cada una por un factor que escribas (por ejemplo, Permanente en 1 y Sobrecarga en la parte que cuentes como masa).

{{ui:Espectro de respuesta}} lee cada modo de un espectro que des (una tabla de período y aceleración, o la forma ASCE 7 a partir de SDS, SD1 y TL; el botón {{ui:Usar los valores del bloque Sísmico}} copia esos valores del bloque Sísmico) y combina los modos por CQC, SRSS, la regla del diez por ciento o una suma absoluta, y luego junta las direcciones X, Y y Z (100 % + 30 % o SRSS). Da el corte basal, las derivas de piso, los esfuerzos en los extremos de los miembros y una tabla de modos que advierte cuando los modos usados tienen menos del 90 % de la masa. Podés escalar los resultados por un factor o hasta un corte basal que escribas; el bloque nunca calcula ese corte basal por sí mismo. Los resultados no tienen signo.

{{ui:Historia en el tiempo}} aplica una aceleración del suelo por superposición modal (exacta para las rectas del registro entre puntos) o por integración directa (aceleración media de Newmark con amortiguamiento de Rayleigh). La entrada es un seno o un pulso inventado (siempre marcado como sintético), un registro que pegues, o un archivo de texto que abras (tiempo y aceleración, una aceleración por línea con un paso, o un archivo de tipo PEER con encabezado DT=; en g o m/s²). Da el desplazamiento del techo y el corte basal en función del tiempo, la deriva de cada nivel y la envolvente de los esfuerzos en los extremos de los miembros. Los modelos con un registro muy largo lo guardan solo para la sesión.

{{ui:Empuje monotónico}} empuja el techo hacia un costado en pasos pequeños (patrón como el primer modo, o uniforme), con rótulas plásticas en los extremos de los miembros que tienen forma de I. Una rótula cede en el momento plástico, que baja a medida que crece el axil (calculado a partir de la forma dibujada, sin tener en cuenta los filetes); el endurecimiento es opcional, el P-delta es opcional, y una combinación de gravedad puede aplicarse antes. Da la curva de capacidad (corte basal frente al desplazamiento del techo), la primera rótula, y el estado y la rotación plástica de cada rótula. {{ui:Ejecutar la historia en el tiempo no lineal}} corre las mismas rótulas bajo el registro del bloque Historia en el tiempo, en modelos pequeños. Las rótulas se forman solo en los extremos de los miembros (poné un nodo donde debería formarse una dentro de un tramo); un miembro liberado en ambos extremos no tiene ninguna, y no se modelan la fluencia ni el pandeo de riostras; las losas y los muros siguen elásticos; no se dan criterios de aceptación. No es una verificación de norma; tu ingeniero revisa los resultados. Los ajustes se guardan con el modelo, y el informe incluye las tablas.

Todavía no está hecho: análisis de pandeo, una corrección por masa faltante para el espectro de respuesta, escalado de registros, criterios de aceptación para rótulas (la respuesta dinámica está, arriba), áreas y cargas de viento generadas para vos (las fuerzas sísmicas en pisos están en [Verificar miembros de hormigón y generar cargas sísmicas](topic:concrete-and-seismic)), excentricidades de miembros, riostras solo a tracción. Ver [Lo que todavía no está hecho](topic:not-built-yet).
