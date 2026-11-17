---
title: Explorar el marco de muestra
summary: Abrí el marco de dos vanos incorporado y usalo para conocer lo que hace DetailCraft, desde las marcas hasta los archivos NC.
keywords: muestra, ejemplo, demo, marco, aprender, recorrido, probar
from: 5c5944dd
---

El marco de muestra es un modelo pequeño y completo: aparece al menos una vez cada tipo de cosa que construye DetailCraft. Es la forma más rápida de aprender la aplicación y de probar una exportación antes de confiar en ella.

## Abrirlo

1. Elegí {{ui:Muestra}} en el grupo {{ui:Archivo}}.
2. Si tu modelo actual tiene cambios sin guardar, elegí {{ui:Guardar primero}} o {{ui:Descartar cambios}}.
3. La barra de estado dice "Marco de muestra: 6 columnas con placas base, 4 vigas con placas de extremo, una riostra, 7 zapatas con hierro de refuerzo."

La muestra se abre como un modelo nuevo llamado "Marco de muestra". No cambia nada más y no tiene nada para deshacer.

## Qué contiene

- **Grillas** 1, 2, 3 a 6000 mm y A, B a 7000 mm. **Niveles** Nivel 1 en 0 y Nivel 2 en 4000.
- **Seis columnas**, W12x50, del Nivel 1 al Nivel 2 en cada intersección, cada una sobre una placa base de 25 mm con cuatro barras de anclaje.
- **Cuatro vigas**, W16x26, en el Nivel 2 sobre las líneas de grilla A y B, con la cara superior del acero sobre el nivel, con una placa de extremo atornillada a ras en ambos extremos (ocho en total).
- **Una riostra**, HSS4x4x1/4, de A/1 en el Nivel 1 hasta A/2 en el Nivel 2.
- **Seis zapatas aisladas**, 2000 x 2000 x 600, una bajo cada columna, con una malla inferior en gancho en ambos sentidos.
- **Una zapata más** al lado del marco, 2400 x 1800 x 600, con seis barras de arranque en gancho que sobresalen para un pilar de hormigón.

## Cosas para probar

1. Hacé clic en una viga. Leé su {{ui:Marca de pieza}}, su {{ui:Conjunto}}, su {{ui:Largo de corte}} y su {{ui:Recorte}}: el largo de corte es más corto que la separación de grilla de 6000 mm porque cada placa de extremo recorta la viga la mitad de la profundidad de la columna más el espesor de la placa.
2. Hacé clic en una columna. En {{ui:Agujeros}} lista los agujeros que hicieron las placas de extremo en su ala ("8 agujeros por conexiones"; las columnas del medio tienen 16, un juego en cada ala).
3. En la lista {{ui:Marcas de pieza}} de la izquierda, mirá que las cuatro vigas comparten una marca: son la misma pieza de acero. Las columnas de las esquinas también comparten una marca, aunque sus agujeros miren en sentidos opuestos, porque una columna girada de punta a punta es la misma pieza. Las columnas del medio, con agujeros en ambas alas, reciben otra marca.
4. Hacé clic en una placa de extremo (o en uno de sus pernos). El panel {{ui:Propiedades}} muestra la configuración de placa, perno y soldadura, los pernos que hace (con su largo calculado a partir del agarre) y las advertencias de distancia al borde.
5. Abrí la pestaña {{ui:Lista de materiales}}. Se listan las piezas, los conjuntos (una viga con sus dos placas de extremo es un conjunto) y los pernos y barras de anclaje, con sus pesos. Deberías ver seis marcas de pieza: c1 (las dos columnas del medio) y c2 (las cuatro columnas de las esquinas), ambas W12x50 de 3975 mm; b1, cuatro vigas W16x26 de 5650 mm; br1, la riostra; p1, ocho placas de extremo PL20x180; y p2, seis placas base PL25x400. Los elementos de sujeción son 64 pernos 20 x 70 A325 y 24 barras de anclaje 20 x 575.
6. Abrí la pestaña {{ui:Planilla de doblado}}. Las seis zapatas idénticas comparten marcas de barra; la zapata del pilar agrega las suyas.
7. Hacé clic en la riostra y mirá el grupo {{ui:Salida}}: {{ui:Plano de taller}} aparece en gris, porque por ahora los planos de taller cubren solo perfiles I y placas.
8. Elegí {{ui:Archivos NC}}. El zip tiene un archivo por cada marca de perfil I y de placa; la barra de estado lista la marca de la riostra como no escrita.
9. Elegí {{ui:IFC}} y abrí el archivo en cualquier visor IFC para ver cómo lo lee tu otro software.

## Usarlo como punto de partida

La muestra es un modelo común. Cambiala, luego renombrala en el campo {{ui:Nombre}} y guardala con su nombre nuevo con {{key:Mod+S}}.
