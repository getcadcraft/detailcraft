---
title: Analizar el pórtico
summary: Esfuerzos, reacciones y flechas de las vigas, pilares y riostras tal como están dibujados, bajo las hipótesis y combinaciones de carga que defina. Una ayuda para el análisis, no una comprobación normativa; las comprobaciones de diseño son un paso aparte.
keywords: análisis, análisis estructural, análisis de pórticos, método de la rigidez, cargas, hipótesis de carga, combinación, carga permanente, sobrecarga, peso propio, reacciones, momento flector, cortante, esfuerzo axil, flecha, deformada, apoyos, articulado, empotrado, liberación, informe, pdf, csv, craftscript, frame3d
from: ba0081bc
---

La pestaña {{ui:Análisis}} de la parte inferior calcula los esfuerzos de cada viga, pilar y riostra del modelo, las reacciones en las bases de los pilares y cuánto se flectan las barras, para las cargas que introduzca.

:::warning
Es una **ayuda para el análisis, no una comprobación normativa**. El análisis no aplica ningún código de diseño: no dimensiona barras, no comprueba resistencias ni uniones, ni elige coeficientes de mayoración. Un ingeniero revisa el modelo, sus cargas y sus apoyos, y decide qué significan los resultados. Para las comprobaciones de barras según ASCE 7 / AISC 360 o EN 1990 / EN 1993-1-1 consulte [Comprobar barras de acero según un código de diseño](topic:design-checks), un paso aparte que también es solo una ayuda.
:::

## Ejecutarlo

1. Abra la pestaña {{ui:Análisis}}.
2. Seleccione una o más barras en la vista, elija una {{ui:Hipótesis}}, una {{ui:Carga}} y una {{ui:Dirección}}, escriba el valor y pulse {{ui:Añadir carga}}. Una carga repartida a lo largo de una barra se da en kN/m, una carga puntual en kN. {{ui:Hacia abajo (gravedad)}} es la habitual.
3. Pulse {{ui:Calcular el análisis}}.

La tabla enumera para cada barra el mayor esfuerzo axil N, los cortantes Vz y Vy, los momentos flectores My y Mz, el momento torsor T y su flecha, con el mayor momento primero; haga clic en el nombre de una barra para seleccionarla. Debajo están las reacciones en cada apoyo. {{ui:Sobre el modelo}} dibuja la deformada, o un esfuerzo como diagrama junto a cada barra con su mayor valor escrito en su posición. Los resultados quedan obsoletos en cuanto cambia el modelo: vuelva a calcular.

Cada carga, hipótesis y ajuste es un paso de deshacer ({{key:Mod+Z}}) y se guarda en el archivo del modelo.

## Hipótesis y combinaciones

El análisis empieza con tres: **Permanente** (el peso propio de las barras, según sus secciones dibujadas y 7850 kg/m³), **Sobrecarga** (vacía) y **Permanente + sobrecarga**. Añada hipótesis propias (viento, nieve…) y combinaciones: una combinación suma las hipótesis con los coeficientes que escriba. El análisis es lineal, así que cada hipótesis se resuelve una vez y las combinaciones son sumas. Escriba los coeficientes usted mismo, o elija un código de diseño y deje que {{ui:Generar combinaciones}} escriba los del código ([Comprobar barras de acero según un código de diseño](topic:design-checks)).

## De qué está hecho el pórtico

- Vigas, pilares y riostras, cada una sobre su línea de trabajo (la que dibujó), con las propiedades reales de la sección calculadas a partir de su contorno. Chapas, escaleras, zapatas y tornillos no forman parte del pórtico.
- Una barra se divide donde el extremo de otra barra cae sobre ella, de modo que una viga que llega a un pilar a media altura se une allí.
- **Bases de pilares**: empotradas (en el inicio) o articuladas (sujetas en su posición y contra el giro, libres para girar). Una placa de base siempre forma un apoyo.
- **Extremos de vigas**: una placa de testa es rígida, una cartela de cortante es articulada. {{ui:Extremos de viga sin conexión}} define el resto. Las **riostras** están articuladas en ambos extremos.
- Seleccione una barra para dar a sus extremos, o a la base de un pilar, una regla propia.
- Acero en todos los elementos: E = 200 GPa, G = 77 GPa.

Si el pórtico puede moverse sin flectar nada (un mecanismo, como bases articuladas sin arriostramiento en una dirección), el cálculo se detiene e indica dónde y en qué dirección; sujételo con un apoyo, un nudo rígido o una riostra.

## Signos

N > 0 es tracción. My > 0 pone en tracción el lado local −z de la barra: una viga que flecta hacia abajo por la gravedad tiene My > 0. Mz > 0 pone en tracción el lado local −y. La flecha se mide desde la recta que une los extremos de la barra. El eje local z de una barra apunta hacia arriba (para un pilar, a lo largo de X); sus ejes locales giran con la rotación de la barra.

## El informe

{{ui:Informe (PDF)}} e {{ui:Informe (CSV)}} recogen todo: las hipótesis en que se basó el pórtico, secciones, hipótesis y combinaciones; luego, para cada hipótesis y combinación, las reacciones (con las sumas de cargas y reacciones, que se equilibran), los esfuerzos de las barras y los desplazamientos, y una envolvente de todas las hipótesis. {{ui:Exportar como CraftScript}} escribe el mismo pórtico como un script para el área de trabajo Script de PartCraft, donde la función de biblioteca `frame3d` lo resuelve paso a paso en código legible.

## Método

El método de la rigidez directa, lineal y de primer orden salvo que marque Segundo orden (P-Delta): elementos viga-pilar de dos nudos con las rigideces axial, de torsión y de dos flexiones (sin deformación por cortante ni alabeo), liberaciones de extremos por condensación estática, y cargas a lo largo de las barras mediante sus propias funciones de forma. Sus resultados se comprueban con los casos clásicos de libro (voladizos, vigas simplemente apoyadas, empotradas y continuas, un pórtico, una parrilla en torsión, una celosía).

**Segundo orden (P-Delta).** Marque *Segundo orden (P-Delta)* junto a Calcular: cada combinación se vuelve a resolver con los esfuerzos axiles de las barras actuando sobre el pórtico deformado (cada barra dividida en 4 tramos, para que también cuente la flexión entre sus extremos), hasta que los esfuerzos axiles se estabilizan. La línea de resultado indica el número de pasadas y cuánto creció el desplome; los momentos, las flechas, las comprobaciones de diseño y el informe usan entonces estos resultados. Por encima de la carga crítica elástica del pórtico, el cálculo se detiene y lo indica. Es elástico con giros pequeños, solo a flexión, sin reducción de rigidez ni cargas nocionales (no es por sí solo el método de análisis directo de AISC); las losas, los muros y los forjados rígidos siguen siendo de primer orden.

**Frecuencias naturales (elementos finitos).** El bloque {{ui:Elementos finitos: frecuencias naturales}} bajo los resultados encuentra los modos más bajos del mismo modelo con el motor de elementos finitos: vigas con sus liberaciones de extremos, losas y muros como láminas de cuatro nudos, forjados rígidos, apoyos. Elija cuántos modos (3, 6, 10 o 20) y el elemento de losa (la lámina de cuatro nudos para losas gruesas o finas, o el de losa fina) y pulse {{ui:Calcular las frecuencias}}. La tabla da la frecuencia de cada modo en Hz, su periodo en segundos y su masa modal efectiva a lo largo de X, Y y Z, como porcentaje de la masa que puede moverse; {{ui:Mostrar en el modelo}} dibuja cualquier modo como se dibuja la deformada. La masa es la densidad del material por el volumen: las cargas no añaden masa, y un material sin densidad no tiene masa. El informe (PDF, CSV) incluye la tabla. Es elástico y solo para movimientos pequeños, y aquí no se genera ninguna carga sísmica ni de viento a partir de un código. No es una comprobación normativa; su ingeniero revisa los resultados.

**Espectro de respuesta, historia en el tiempo y empuje incremental.** Tres bloques más aparecen bajo las frecuencias, con el mismo modelo de elementos finitos. La masa de todos ellos es la densidad del material más las cargas permanentes hacia abajo de las hipótesis que marque, cada una multiplicada por un coeficiente que escriba (por ejemplo, Permanente a 1 y Sobrecarga con la fracción que cuente como masa).

{{ui:Espectro de respuesta}} lee cada modo a partir de un espectro que usted proporciona (una tabla de periodo y aceleración, o la forma ASCE 7 a partir de SDS, SD1 y TL; el botón {{ui:Usar los valores del bloque Sísmico}} copia esos valores del bloque Sísmico), y combina los modos mediante CQC, SRSS, la regla del diez por ciento o una suma en valor absoluto; luego combina las direcciones X, Y y Z (100 % + 30 % o SRSS). Da el cortante en la base, las derivas entre plantas, los esfuerzos en los extremos de las barras y una tabla de modos que avisa cuando los modos usados llevan menos del 90 % de la masa. Puede escalar los resultados por un factor o hasta un cortante en la base que escriba; el bloque nunca calcula ese cortante en la base por sí mismo. Los resultados no tienen signo.

{{ui:Historia en el tiempo}} aplica una aceleración del suelo por superposición modal (exacta para las rectas del registro entre puntos) o por integración directa (aceleración media de Newmark con amortiguamiento de Rayleigh). La entrada es un seno o un pulso inventado (siempre marcado como sintético), un registro que pegue, o un archivo de texto que abra (tiempo y aceleración, una aceleración por línea con un paso, o un archivo estilo PEER con cabecera DT=; en g o m/s²). Da el desplazamiento de cubierta y el cortante en la base frente al tiempo, la deriva de cada planta y la envolvente de los esfuerzos en los extremos de las barras. Los modelos con un registro muy largo lo guardan solo para la sesión.

{{ui:Empuje incremental (pushover)}} empuja la cubierta lateralmente en pequeños pasos (patrón como el primer modo, o uniforme), con rótulas plásticas en los extremos de las barras con perfil en I. Una rótula plastifica al momento plástico, que disminuye al crecer el esfuerzo axil (calculado a partir de la forma dibujada, ignorando los redondeos); el endurecimiento es opcional, el P-delta es opcional, y puede aplicarse antes una combinación de gravedad. Da la curva de capacidad (cortante en la base frente al desplazamiento de cubierta), la primera rótula, y el estado y la rotación plástica de cada rótula. {{ui:Calcular la historia en el tiempo no lineal}} aplica las mismas rótulas bajo el registro del bloque Historia en el tiempo, en modelos pequeños. Las rótulas solo se forman en los extremos de las barras (ponga un nudo donde deba formarse una dentro de un vano); una barra liberada en ambos extremos no recibe ninguna, y la plastificación y el pandeo de las riostras no se modelan; las losas y los muros siguen siendo elásticos; no se dan criterios de aceptación. No es una comprobación normativa; su ingeniero revisa los resultados. Los ajustes se guardan con el modelo, y el informe incluye las tablas.

Aún no incluido: análisis de pandeo, una corrección de masa faltante para el espectro de respuesta, escalado de registros, criterios de aceptación para rótulas (la respuesta dinámica sí está, arriba), cargas de área y de viento generadas automáticamente (las fuerzas sísmicas en forjados están en [Comprobar elementos de hormigón y generar cargas sísmicas](topic:concrete-and-seismic)), excentricidades de barras y riostras que solo trabajan a tracción. Véase [Lo que aún no está incluido](topic:not-built-yet).
