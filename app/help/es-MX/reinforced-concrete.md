---
title: Detallar vigas, columnas, losas y muros de concreto reforzado
summary: Agregue vigas, columnas, losas y muros de concreto por ejes, asigne estribos, amarres y barras, verifique traslapes y anclajes según ACI 318-19 o EN 1992-1-1, y genere planos de taller y tablas de doblado.
keywords: concreto reforzado, varilla, armado, viga, columna, losa, muro, estribos, amarres, ligas, ganchos, traslapes, empalme por traslape, anclaje, longitud de desarrollo, ld, ldh, lbd, recubrimiento, separación, refuerzos de abertura, mallas, marcas de barra, tabla de doblado, bbs, plano de taller, ACI 318, EN 1992, Eurocódigo 2, IfcReinforcingBar, importación de IFC
from: 3835b7ec
---

La pestaña {{ui:Concreto}} debajo de la vista detalla las barras de vigas, columnas, losas y muros de concreto. Usted indica los tamaños y las barras; DetailCraft coloca cada barra, la numera, verifica los traslapes, el anclaje, el recubrimiento y la separación contra la cláusula de la que provienen, y la dibuja.

:::warning
DetailCraft detalla las barras que usted le indica. No las diseña. Todo resultado es para que lo revise un ingeniero.
:::

## Abrir la pestaña Concreto

Elija la pestaña {{ui:Concreto}} debajo de la vista. En una disposición de cinta, {{ui:Concreto}} está en la pestaña {{ui:Modelado}}, junto a {{ui:Zapata}}. Con la línea de comandos del estilo de dibujo, escriba {{cmd:CONCRETE}}.

## Agregar un elemento por ejes

Los elementos de concreto se colocan sobre los ejes y niveles del modelo, así que configúrelos primero (panel izquierdo).

1. En {{ui:Agregar por ejes}}, elija el {{ui:Elemento}}: {{ui:Viga de concreto}}, {{ui:Columna de concreto}}, {{ui:Losa}} o {{ui:Muro}}.
2. Precise los ejes y niveles:
   - una viga va de una intersección de ejes a otra, con su parte superior en el nivel;
   - una columna se apoya en una intersección, de un nivel a otro;
   - una losa llena el rectángulo entre dos ejes numerados y dos ejes con letra, con su parte superior en el nivel;
   - un muro corre a lo largo de su eje de una intersección a otra, de un nivel a otro.
3. Indique el tamaño y elija {{ui:Agregar}}. El elemento queda seleccionado y sus campos se abren en el panel {{ui:Propiedades}}.

Cada elemento inicia con barras que son valores de inicio, no un diseño: cámbielas por las del ingeniero.

## Cambiar las barras

Seleccione el elemento (en la vista o por su nombre en la pestaña {{ui:Concreto}}). El panel {{ui:Propiedades}} muestra:

| Elemento | Lo que se configura |
|---|---|
| Viga | Ancho, peralte, recubrimiento libre; barras superiores e inferiores (tamaño, número, recta o gancho de 90° en los extremos); barras laterales; estribos (tamaño, ganchos de 135° o 90°, la distancia del primero a la cara del apoyo, la longitud y separación de la zona de extremo, la separación entre ellos); longitudes de apoyo; longitudes de traslape |
| Columna | Ancho, peralte transversal, rotación, recubrimiento; barras longitudinales en cada cara; amarres igual que los estribos; qué hacen las barras en la parte superior (traslapar con la columna de arriba, anclar con gancho en la losa, o terminar) |
| Losa | Espesor, tamaño, superior, recubrimientos; malla inferior y malla superior en cada dirección (tamaño y separación); barras en U alrededor de los bordes; refuerzos de abertura; vanos |
| Muro | Espesor, recubrimiento, una o dos capas, barras horizontales y verticales, barras en U en los extremos, barras verticales traslapadas arriba o no, refuerzos de abertura, vanos |

Cada cambio es un paso de deshacer. Un cambio que no se puede construir se rechaza y la barra de estado indica por qué, por ejemplo: «El vano no cabe dentro del elemento con su recubrimiento».

Los estribos y amarres son cerrados, con ambos ganchos en una misma esquina. Las barras de una viga entran en la columna de concreto en sus extremos hasta la cara lejana de la columna menos el recubrimiento; donde no hay columna, indique la {{ui:Longitud de apoyo al inicio (mm)}} y la del final.

## Traslapes y anclaje

Las barras más largas que la {{ui:Longitud de varilla comercial (mm)}} (12000 de inicio) se cortan en piezas de igual longitud, traslapadas. La tabla {{ui:Traslapes y anclaje}} enumera cada traslape y cada anclaje: lo que se requiere, con la cláusula y sus términos, y lo que tiene el detalle.

- Una longitud de traslape de 0 significa «según se requiera»: la longitud que da la norma, redondeada hacia arriba a 25 mm.
- Escriba su propia longitud de traslape para usarla en su lugar. Si es menor que la requerida, es un problema (vea abajo) y se marca con * en la tabla.
- El anclaje se mide desde la cara del apoyo hasta el extremo de la barra dentro del apoyo. Una viga sin apoyo conocido lo indica en lugar de verificarlo.
- Una columna apoyada en una zapata se traslapa con las barras de arranque de la zapata, y con otra columna, con las barras de esa columna: su traslape también se verifica.

**ACI 318-19** (SI): barras rectas en tensión 25.4.2.3 (la tabla, con ψt, ψe, ψg, λ), ganchos estándar 25.4.3.1 (se toman ψr 1.6 y ψo 1.25 salvo que se conozcan otros valores), barras en compresión 25.4.9.2, traslapes en tensión 25.5.2.1 (Clase B, o Clase A en la configuración), traslapes en compresión 25.5.5.1.

**EN 1992-1-1**: anclaje 8.4.4 con fbd de 8.4.2 (adherencia buena o mala), traslapes 8.7.3 con α6 para cada barra traslapada en una misma sección. γc, γs y αct inician con los valores recomendados; configure los de su anexo nacional.

## Las verificaciones

Cada verificación que falle aparece en el panel Problemas de la aplicación (origen {{ui:Revisiones de armado}}) y en la lista {{ui:Verificaciones}} del elemento:

| Verificación | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recubrimiento | Tabla 20.5.1.3.1, según la exposición | Mínimo por adherencia, Tabla 4.2 (el recubrimiento por durabilidad lo indica usted) |
| Separación libre de barras | 25.2.1 (vigas, losas, muros), 25.2.3 (columnas) | 8.2 (2) |
| Separación de estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Acero mínimo en vigas | 9.6.1.2 | 9.2.1.1 (1) |
| Barras laterales de viga con peralte mayor de 900 mm | 9.7.2.3 | no se verifica |
| Cuantía de acero en columnas, número de barras | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Amarres: separación, tamaño, amarres transversales | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Separación en losas, acero mínimo | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Separación en muros, acero mínimo, dos capas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Traslapes, anclaje | como arriba | como arriba |

No se conoce el tamaño del agregado, así que la separación libre se verifica sin considerarlo.

## Vanos, refuerzos y barras de borde

Elija {{ui:Agregar un vano}} debajo de una losa o muro seleccionado e indique su ubicación y su tamaño. Las barras que cruza se detienen a un recubrimiento de su borde. Los {{ui:Refuerzos de abertura}} se agregan a cada lado, en la misma capa, con la mitad del área de las barras cortadas, y se prolongan una longitud de anclaje más allá del vano. Esa es la regla de inicio de DetailCraft, no una cláusula de norma: cambie los {{ui:Refuerzos de abertura}} por los del ingeniero. No se agregan barras de esquina.

Las barras en U alrededor de los bordes libres de una losa y en los extremos de un muro tienen patas de una longitud de traslape.

## Marcas de barra y tabla de doblado

Las barras idénticas comparten una misma marca: las zapatas conservan marcas F (5F1), las vigas reciben B, las columnas C, las losas S y los muros W (7B1, 8C1, 4S2). La pestaña {{ui:Tabla de doblado}} y su CSV ahora enumeran cada barra de la estructura, con las zapatas primero. {{ui:Salida}} › {{ui:Más}} › {{ui:Doblado}} la descarga.

## Planos de taller

Elija {{ui:Salida}} › {{ui:Más}} › {{ui:Planos de armado}}, {{ui:Planos de armado}} en la pestaña {{ui:Concreto}}, o {{ui:Plano de taller}} junto a un elemento. Cada elemento obtiene una hoja con una elevación (una planta en el caso de una losa) que muestra cada barra y su marca, las zonas de estribos o amarres y los traslapes acotados, y una sección en el centro; después, las hojas de doblado de barras enumeran cada marca con un croquis de su forma, sus dimensiones, la cantidad, la longitud de corte y el peso.

Las hojas se generan a partir del modelo cada vez, y de nuevo después de cada cambio mientras la ventana esté abierta: el cajetín lleva la referencia del modelo. Guarde {{ui:Esta hoja en PDF}} o {{ui:Todas las hojas en PDF}}.

## Barras de un archivo IFC

{{ui:Archivo}} › {{ui:Importar IFC}} ahora lee IfcReinforcingBar: el disco barrido a lo largo de su eje regresa como patas rectas y dobleces, con su diámetro, su marca y el elemento que la contiene. Las barras se conservan tal como se leyeron (no se convierten en reglas de una viga ni de una losa), se muestran en la vista, aparecen en la tabla de doblado y se vuelven a escribir con la exportación IFC. El informe de importación indica cuántas barras se leyeron, de qué tamaños, en cuántos elementos, y qué se omitió y por qué.

Una viga, columna, losa o muro de ese archivo que contenga barras o cuyo material sea concreto no se toma como acero; el informe lo indica. La exportación IFC propia de DetailCraft incluye la definición de cada elemento de concreto, así que regresa como él mismo, y sus barras se vuelven a generar a partir de ella.

:::note
Leer los archivos propios de un programa de diseño estructural (que no sean IFC) no está disponible: exporte IFC desde ese programa.
:::

## La exportación IFC

Las vigas, columnas, losas (con vanos) y muros de concreto se exportan como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada uno con sus barras como IfcReinforcingBar (barras principales, ligaduras para estribos y amarres, barras de borde) agregadas a él; cada barra es un disco barrido a lo largo de su eje, con arcos verdaderos en los dobleces, su marca y su longitud de corte.
