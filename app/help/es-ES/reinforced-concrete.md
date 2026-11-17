---
title: Detallar vigas, pilares, losas y muros de hormigón armado
summary: Añada vigas, pilares, losas y muros de hormigón por rejilla, asígneles barras, estribos y cercos, compruebe solapes y anclajes según ACI 318-19 o EN 1992-1-1, y genere planos de taller y tablas de doblado.
keywords: hormigón armado, armadura, refuerzo, viga, pilar, losa, muro, estribos, cercos, ganchos, solapes, empalme por solape, anclaje, longitud de anclaje, ld, ldh, lbd, recubrimiento, separación, refuerzos de hueco, huecos, parrillas, marcas de barra, tabla de doblado, lista de doblado, bbs, plano de taller, ACI 318, EN 1992, Eurocódigo 2, IfcReinforcingBar, importación IFC
from: 3835b7ec
---

La pestaña {{ui:Hormigón}} bajo la vista detalla las barras de vigas, pilares, losas y muros de hormigón. Usted indica los tamaños y las barras; DetailCraft coloca cada barra, la numera, comprueba los solapes, el anclaje, el recubrimiento y la separación frente a la cláusula de la que proceden, y la dibuja.

:::warning
DetailCraft detalla las barras que usted le da. No las diseña. Cada resultado debe ser revisado por un ingeniero.
:::

## Abrir la pestaña Hormigón

Elija la pestaña {{ui:Hormigón}} bajo la vista. En una disposición con cinta, {{ui:Hormigón}} está en la pestaña {{ui:Modelado}}, junto a {{ui:Zapata}}. Con la línea de comandos del estilo de dibujo, escriba {{cmd:CONCRETE}}.

## Añadir un elemento por rejilla

Los elementos de hormigón se colocan sobre las líneas de rejilla y los niveles del modelo, así que configúrelos primero (panel izquierdo).

1. En {{ui:Añadir por rejilla}}, elija el {{ui:Elemento}}: {{ui:Viga de hormigón}}, {{ui:Pilar de hormigón}}, {{ui:Losa}} o {{ui:Muro}}.
2. Elija las líneas de rejilla y los niveles:
   - una viga va de una intersección de rejilla a otra, con su cara superior en el nivel;
   - un pilar se apoya en una intersección, desde un nivel hasta otro;
   - una losa rellena el rectángulo entre dos líneas de rejilla numeradas y dos con letra, con su cara superior en el nivel;
   - un muro va a lo largo de su línea central, de una intersección a otra, desde un nivel hasta otro.
3. Indique el tamaño y elija {{ui:Añadir}}. El elemento queda seleccionado y sus campos se abren en el panel {{ui:Propiedades}}.

Cada elemento empieza con barras que son valores de partida, no de diseño: cámbielas por las del ingeniero.

## Cambiar las barras

Seleccione el elemento (en la vista o por su nombre en la pestaña {{ui:Hormigón}}). El panel {{ui:Propiedades}} muestra:

| Elemento | Lo que se indica |
|---|---|
| Viga | Ancho, canto, recubrimiento libre; barras superiores e inferiores (tamaño, número, recta o gancho de 90° en los extremos); barras laterales; estribos (tamaño, ganchos de 135° o 90°, la distancia del primero a la cara de apoyo, la longitud y separación de la zona de extremo, la separación entre ellos); longitudes de apoyo; longitudes de solape |
| Pilar | Ancho, canto en sentido transversal, giro, recubrimiento; barras longitudinales en cada cara; cercos como los estribos; qué hacen las barras en la parte superior (solape con el pilar de encima, gancho en la losa o terminar) |
| Losa | Espesor, tamaño, armado superior, recubrimientos; parrilla inferior y parrilla superior en cada dirección (tamaño y separación); barras en U alrededor de los bordes; refuerzos de hueco; huecos |
| Muro | Espesor, recubrimiento, una o dos capas, barras horizontales y verticales, barras en U en los extremos, barras verticales solapadas hacia arriba o no, refuerzos de hueco, huecos |

Cada cambio es un paso de deshacer. Un cambio que no se puede construir se rechaza y la barra de estado indica el motivo, por ejemplo: "El hueco no cabe dentro del elemento con su recubrimiento."

Los estribos y cercos son cerrados, con ambos ganchos en una misma esquina. Las barras de una viga entran en un pilar de hormigón en sus extremos hasta la cara lejana del pilar menos el recubrimiento; donde no hay pilar, indique la {{ui:Longitud de apoyo en el inicio (mm)}} y la del final.

## Solapes y anclajes

Las barras más largas que la {{ui:Longitud comercial de barra (mm)}} (12000 para empezar) se cortan en piezas de igual longitud, solapadas. La tabla {{ui:Solapes y anclajes}} enumera cada solape y cada anclaje: qué se necesita, con la cláusula y sus términos, y lo que tiene el detalle.

- Una longitud de solape de 0 significa "según sea necesario": la longitud que da el código, redondeada hacia arriba a 25 mm.
- Escriba su propia longitud de solape para usarla en su lugar. Si es menor que la necesaria, es un problema (véase abajo) y se marca con * en la tabla.
- El anclaje se mide desde la cara de apoyo hasta el extremo de la barra dentro del apoyo. Una viga sin un apoyo conocido lo indica en lugar de comprobarlo.
- Un pilar apoyado en una zapata solapa con las barras de arranque de la zapata, y un pilar sobre otro pilar solapa con las barras de ese pilar: su solape también se comprueba.

**ACI 318-19** (SI): barras rectas en tracción 25.4.2.3 (la tabla, con ψt, ψe, ψg, λ), ganchos estándar 25.4.3.1 (se toman ψr 1.6 y ψo 1.25 salvo que se conozcan otros), barras en compresión 25.4.9.2, solapes en tracción 25.5.2.1 (Clase B, o Clase A en los ajustes), solapes en compresión 25.5.5.1.

**EN 1992-1-1**: anclaje 8.4.4 con fbd de 8.4.2 (adherencia buena o mala), solapes 8.7.3 con α6 para cada barra solapada en una sección. γc, γs y αct empiezan con los valores recomendados; establezca los de su anexo nacional.

## Las comprobaciones

Cada comprobación que falla aparece en el panel de Problemas de la aplicación (origen {{ui:Comprobaciones de armado}}) y en la lista {{ui:Comprobaciones}} del elemento:

| Comprobación | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Recubrimiento | Tabla 20.5.1.3.1, según la exposición | Recubrimiento mínimo por adherencia, Tabla 4.2 (el recubrimiento por durabilidad lo indica usted) |
| Separación libre de barras | 25.2.1 (vigas, losas, muros), 25.2.3 (pilares) | 8.2 (2) |
| Separación de estribos | 9.7.6.2.2 | 9.2.2 (6) |
| Armadura mínima de vigas | 9.6.1.2 | 9.2.1.1 (1) |
| Barras laterales de vigas de más de 900 mm de canto | 9.7.2.3 | no se comprueba |
| Cuantía de pilares, número de barras | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Cercos: separación, tamaño, cercos transversales | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Losas: separación, armadura mínima | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Muros: separación, armadura mínima, dos capas | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Solapes, anclajes | como arriba | como arriba |

No se conoce el tamaño del árido, así que la separación libre se comprueba sin él.

## Huecos, refuerzos y barras de borde

Elija {{ui:Añadir un hueco}} bajo una losa o un muro seleccionado y defina dónde está y su tamaño. Las barras que atraviesa se detienen a un recubrimiento de su borde. Los {{ui:Refuerzos de hueco}} se añaden a cada lado, en la misma capa, con la mitad del área de las barras cortadas, y se prolongan una longitud de anclaje más allá del hueco. Es la regla de partida de DetailCraft, no una cláusula de código: cambie los refuerzos por los del ingeniero. No se añaden barras de esquina.

Las barras en U alrededor de los bordes libres de una losa y en los extremos de un muro tienen patillas de una longitud de solape.

## Marcas de barra y tabla de doblado

Las barras idénticas comparten una marca: las zapatas conservan marcas F (5F1), las vigas tienen B, los pilares C, las losas S y los muros W (7B1, 8C1, 4S2). La pestaña {{ui:Tabla de doblado}} y su CSV listan ahora cada barra de la estructura, primero las zapatas. {{ui:Salida}} › {{ui:Más}} › {{ui:Doblado}} la descarga.

## Planos de taller

Elija {{ui:Salida}} › {{ui:Más}} › {{ui:Planos de armado}}, {{ui:Planos de armado}} en la pestaña {{ui:Hormigón}}, o {{ui:Plano de taller}} junto a un elemento. Cada elemento obtiene una hoja con un alzado (una planta, en el caso de una losa) que muestra cada barra y su marca, las zonas de estribos o cercos y los solapes acotados, y una sección en el centro; después, las hojas de tablas de doblado enumeran cada marca con un croquis de su forma, sus dimensiones, la cantidad, la longitud de corte y el peso.

Las hojas se generan a partir del modelo cada vez, y de nuevo tras cada cambio mientras la ventana esté abierta: el cajetín lleva la referencia del modelo. Guarde {{ui:Esta hoja en PDF}} o {{ui:Todas las hojas en PDF}}.

## Barras desde un archivo IFC

{{ui:Archivo}} › {{ui:Importar IFC}} ahora lee IfcReinforcingBar: el disco barrido a lo largo de su línea central vuelve como tramos rectos y curvas, con su diámetro, su marca y el elemento que la contiene. Las barras se conservan tal como se leyeron (no se convierten en reglas de una viga o de una losa), se muestran en la vista, aparecen en la tabla de doblado y se vuelven a escribir con la exportación IFC. El informe de importación indica cuántas barras se leyeron, de qué tamaños, en cuántos elementos, y qué se dejó fuera y por qué.

Una viga, pilar, losa o muro de ese archivo que contenga barras o cuyo material sea hormigón no se toma por acero; el informe lo indica. La exportación IFC de DetailCraft incluye la definición de cada elemento de hormigón, así que vuelve como ese mismo elemento y sus barras se generan de nuevo a partir de él.

:::note
Leer los archivos propios de un programa de cálculo estructural (que no sean IFC) no está implementado: exporte IFC desde él.
:::

## La exportación IFC

Las vigas, pilares, losas (con huecos) y muros de hormigón salen como IfcBeam, IfcColumn, IfcSlab e IfcWall, cada uno con sus barras como IfcReinforcingBar (barras principales, estribos y cercos, barras de borde) agregadas a él; cada barra es un disco barrido a lo largo de su línea central, con arcos reales en los dobleces, y lleva su marca y su longitud de corte.
