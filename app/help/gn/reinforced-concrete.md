---
title: Detallar vigas, columnas, losas y muros de hormigón armado
summary: Agregá vigas, columnas, losas y muros de hormigón por grilla, dales barras, estribos y amarres, verificá empalmes y anclajes según ACI 318-19 o EN 1992-1-1, y hacé planos de taller y planillas de doblado.
keywords: hormigón armado, hierro de refuerzo, armadura, viga, columna, losa, muro, estribos, amarres, ganchos, empalmes, traslape, anclaje, longitud de desarrollo, ld, ldh, lbd, recubrimiento, separación, barras de cierre, aberturas, mallas, marcas de barra, planilla de doblado, bbs, plano de taller, ACI 318, EN 1992, Eurocódigo 2, IfcReinforcingBar, importación IFC
from: 3835b7ec
---

La pestaña {{ui:Hormigón}} debajo de la vista detalla las barras de vigas, columnas, losas y muros de hormigón. Vos das los tamaños y las barras; DetailCraft ubica cada barra, la numera, verifica empalmes, anclaje, recubrimiento y separación contra la cláusula de la que vienen, y la dibuja.

:::warning
DetailCraft detalla las barras que le das. No las diseña. Todo resultado es para que lo verifique un ingeniero.
:::

## Abrir la pestaña Hormigón

Elegí la pestaña {{ui:Hormigón}} debajo de la vista. En un diseño con cinta, {{ui:Hormigón}} está en la pestaña {{ui:Modelado}}, al lado de {{ui:Zapata}}. Con la línea de comandos del estilo de dibujo, escribí {{cmd:CONCRETE}}.

## Agregar un elemento por grilla

Los elementos de hormigón se ubican sobre las líneas de grilla y los niveles del modelo, así que configuralos primero (panel izquierdo).

1. En {{ui:Agregar por grilla}}, elegí el {{ui:Elemento}}: {{ui:Viga de hormigón}}, {{ui:Columna de hormigón}}, {{ui:Losa}} o {{ui:Muro}}.
2. Elegí las líneas de grilla y los niveles:
   - una viga va de una intersección de grilla a otra, con su parte superior en el nivel;
   - una columna se apoya en una intersección, de un nivel a otro;
   - una losa llena el rectángulo entre dos líneas de grilla numeradas y dos letradas, con su parte superior en el nivel;
   - un muro va a lo largo de su eje central de una intersección a otra, de un nivel a otro.
3. Dale el tamaño y elegí {{ui:Agregar}}. El elemento queda seleccionado y sus campos se abren en el panel {{ui:Propiedades}}.

Cada elemento empieza con barras que son valores de partida, no de diseño: cambialas por las del ingeniero.

## Cambiar las barras

Seleccioná el elemento (en la vista o su nombre en la pestaña {{ui:Hormigón}}). El panel {{ui:Propiedades}} muestra:

| Elemento | Qué se configura |
|---|---|
| Viga | Ancho, profundidad, recubrimiento libre; barras superiores e inferiores (tamaño, cantidad, gancho recto o de 90° en los extremos); barras laterales; estribos (tamaño, ganchos de 135° o 90°, la distancia del primero a la cara del apoyo, el largo y la separación de la zona de extremo, la separación entre ellos); longitudes de apoyo; longitudes de empalme |
| Columna | Ancho, profundidad, rotación, recubrimiento; barras longitudinales en cada cara; amarres como los estribos; qué hacen las barras en la parte superior (empalme con la columna de arriba, gancho en el piso o terminar) |
| Losa | Espesor, tamaño, superior, recubrimientos; malla inferior y malla superior en cada dirección (tamaño y separación); barras en U alrededor de los bordes; barras de cierre; aberturas |
| Muro | Espesor, recubrimiento, una o dos capas, barras horizontales y verticales, barras en U en los extremos, barras verticales empalmadas por arriba o no, barras de cierre, aberturas |

Cada cambio es un paso de deshacer. Un cambio que no se puede construir se rechaza y la barra de estado dice por qué, por ejemplo "La abertura no entra dentro del elemento con su recubrimiento."

Los estribos y los amarres son cerrados, con los dos ganchos en una misma esquina. Las barras de una viga entran en una columna de hormigón en sus extremos hasta la cara lejana de la columna menos el recubrimiento; donde no hay columna, dá la {{ui:Longitud de apoyo al inicio (mm)}} y en el extremo.

## Empalmes y anclaje

Las barras más largas que la {{ui:Largo de barra comercial (mm)}} (12000 para empezar) se cortan en piezas de igual largo, empalmadas. La tabla {{ui:Empalmes y anclaje}} lista cada empalme y cada anclaje: qué se necesita, con la cláusula y sus términos, y qué tiene el detalle.

- Una longitud de empalme de 0 significa "según se necesite": el largo que da el código, redondeado hacia arriba a 25 mm.
- Escribí tu propia longitud de empalme para usarla. Si es más corta que la necesaria, es un problema (ver abajo), y se marca con * en la tabla.
- El anclaje se mide desde la cara del apoyo hasta el extremo de la barra dentro del apoyo. Una viga sin apoyo conocido lo dice en vez de verificarlo.
- Una columna apoyada en una zapata empalma con las barras de arranque de la zapata, y sobre otra columna con las barras de esa columna: su empalme también se verifica.

**ACI 318-19** (SI): barras rectas en tracción 25.4.2.3 (la tabla, con ψt, ψe, ψg, λ), ganchos estándar 25.4.3.1 (ψr 1.6 y ψo 1.25 tomados salvo que se conozcan otros), barras en compresión 25.4.9.2, empalmes en tracción 25.5.2.1 (Clase B, o Clase A en la configuración), empalmes en compresión 25.5.5.1.

**EN 1992-1-1**: anclaje 8.4.4 con fbd de 8.4.2 (adherencia buena o pobre), empalmes 8.7.3 con α6 para cada barra empalmada en una misma sección. γc, γs y αct empiezan con los valores recomendados; poné los de tu anexo nacional.

## Las verificaciones

Cada verificación que falla está en el panel de Problemas del shell (fuente {{ui:Verificaciones de armado}}), y en la lista {{ui:Verificaciones}} del elemento:

| Verificación | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recubrimiento | Tabla 20.5.1.3.1, según exposición | Mínimo de adherencia, Tabla 4.2 (el recubrimiento por durabilidad lo das vos) |
| Separación libre de barras | 25.2.1 (vigas, losas, muros), 25.2.3 (columnas) | 8.2 (2) |
| Separación de estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Acero mínimo de vigas | 9.6.1.2 | 9.2.1.1 (1) |
| Barras laterales de viga con más de 900 mm de profundidad | 9.7.2.3 | no se verifica |
| Cuantía de acero de columna, cantidad de barras | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Amarres: separación, tamaño, cruzados | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Separación de losa, acero mínimo | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Separación de muro, acero mínimo, dos capas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Empalmes, anclaje | como arriba | como arriba |

No se conoce el tamaño del agregado, así que la separación libre se verifica sin él.

## Aberturas, barras de cierre y barras de borde

Elegí {{ui:Agregar una abertura}} con una losa o muro seleccionado y configurá dónde está y su tamaño. Las barras que cruza se detienen a recubrimiento de su borde. Las barras de cierre se agregan a cada lado, en la misma capa, con la mitad del área de las barras cortadas, pasando una longitud de anclaje más allá de la abertura. Esa es la regla de inicio de DetailCraft, no una cláusula del código: cambiá las {{ui:Barras de cierre}} por las del ingeniero. No se agregan barras de esquina.

Las barras en U alrededor de los bordes libres de una losa y en los extremos de un muro tienen patas de una longitud de empalme cada una.

## Marcas de barra y planilla de doblado

Las barras idénticas comparten una marca: las zapatas conservan marcas F (5F1), las vigas tienen B, las columnas C, las losas S y los muros W (7B1, 8C1, 4S2). La pestaña {{ui:Planilla de doblado}} y su CSV ahora listan cada barra de la estructura, primero las zapatas. {{ui:Salida}} › {{ui:Más}} › {{ui:Doblado}} la descarga.

## Planos de taller

Elegí {{ui:Salida}} › {{ui:Más}} › {{ui:Planos de armado}}, {{ui:Planos de armado}} en la pestaña {{ui:Hormigón}}, o {{ui:Plano de taller}} junto a un elemento. Cada elemento tiene una hoja con una elevación (una planta, para una losa) que muestra cada barra y su marca, las zonas de estribos o amarres y los empalmes acotados, y un corte en el medio; luego las hojas de planilla de doblado listan cada marca con un croquis de su forma, sus dimensiones, la cantidad, el largo de corte y el peso.

Las hojas se hacen de nuevo a partir del modelo cada vez, y otra vez después de cada cambio mientras la ventana está abierta: el cuadro de título lleva la referencia del modelo. Guardá {{ui:Esta hoja como PDF}} o {{ui:Todas las hojas como PDF}}.

## Barras desde un archivo IFC

{{ui:Archivo}} › {{ui:Importar IFC}} ahora lee IfcReinforcingBar: el disco barrido a lo largo de su eje central vuelve como patas rectas y dobleces, con su diámetro, su marca y el elemento que la contiene. Las barras se conservan tal como se leyeron (no se convierten en reglas de una viga o de una losa), se muestran en la vista, aparecen en la planilla de doblado y se vuelven a escribir con la exportación IFC. El informe de importación dice cuántas barras se leyeron, de qué tamaños, en cuántos elementos, y qué se dejó afuera y por qué.

Una viga, columna, losa o muro de ese archivo que tenga barras o cuyo material sea hormigón no se toma como acero; el informe lo dice. La exportación IFC de DetailCraft incluye la definición de cada elemento de hormigón, así que vuelve como él mismo, y sus barras se rehacen a partir de ella.

:::note
Leer archivos propios de un programa de diseño estructural (que no sean IFC) no está hecho: exportá IFC desde ese programa.
:::

## La exportación IFC

Las vigas, columnas, losas (con aberturas) y muros de hormigón se exportan como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada uno con sus barras como IfcReinforcingBar (barras principales, ligaduras para estribos y amarres, barras de borde) agrupadas en él; cada barra es un disco barrido a lo largo de su eje central, con arcos verdaderos en los dobleces, su marca y su largo de corte.
