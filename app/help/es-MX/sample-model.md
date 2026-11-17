---
title: Explorar el marco de ejemplo
summary: Abra el marco de dos crujías integrado y úselo para conocer lo que genera DetailCraft, desde las marcas hasta los archivos NC.
keywords: ejemplo, muestra, demo, marco, aprender, recorrido, probar
from: 5c5944dd
---

El marco de ejemplo es un modelo pequeño y completo: aparece al menos una vez cada tipo de elemento que construye DetailCraft. Es la forma más rápida de aprender la aplicación y de probar una exportación antes de confiar en ella.

## Abrirlo

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}}.
2. Si su modelo actual tiene cambios sin guardar, elija {{ui:Guardar primero}} o {{ui:Descartar cambios}}.
3. La barra de estado indica «Marco de ejemplo: 6 columnas con placas base, 4 vigas con placas de extremo, un contraviento, 7 zapatas con varillas».

La muestra se abre como un modelo nuevo llamado «Marco de ejemplo». No cambia nada más y no tiene nada que deshacer.

## Qué contiene

- **Ejes** 1, 2, 3 a 6000 mm y A, B a 7000 mm. **Niveles** Nivel 1 en 0 y Nivel 2 en 4000.
- **Seis columnas**, W12x50, del Nivel 1 al Nivel 2 en cada intersección, cada una sobre una placa base de 25 mm con cuatro barras de anclaje.
- **Cuatro vigas**, W16x26, en el Nivel 2 a lo largo de los ejes A y B, con la parte superior del acero en el nivel, con una placa de extremo atornillada a ras en ambos extremos (ocho en total).
- **Un contraviento**, HSS4x4x1/4, de A/1 en el Nivel 1 hasta A/2 en el Nivel 2.
- **Seis zapatas aisladas**, 2000 x 2000 x 600, una bajo cada columna, con malla inferior con ganchos en ambas direcciones.
- **Una zapata más** junto al marco, 2400 x 1800 x 600, con seis barras de arranque con gancho que sobresalen para un pedestal de concreto.

## Cosas por probar

1. Haga clic en una viga. Lea su {{ui:Marca de pieza}}, {{ui:Ensamble}}, {{ui:Longitud de corte}} y {{ui:Recorte}}: la longitud de corte es menor que la separación de ejes de 6000 mm porque cada placa de extremo recorta la viga la mitad del peralte de la columna más el espesor de la placa.
2. Haga clic en una columna. Bajo {{ui:Agujeros}} enumera los agujeros que hicieron las placas de extremo en su patín («8 agujeros de conexiones»; las columnas centrales tienen 16, un juego en cada patín).
3. En la lista {{ui:Marcas de pieza}} de la izquierda, observe que las cuatro vigas comparten una marca: son la misma pieza de acero. Las columnas de esquina también comparten una marca, aunque sus agujeros miren en direcciones opuestas, porque una columna girada de extremo a extremo es la misma pieza. Las columnas centrales, con agujeros en ambos patines, reciben otra marca.
4. Haga clic en una placa de extremo (o en uno de sus pernos). El panel {{ui:Propiedades}} muestra la configuración de la placa, del perno y de la soldadura, los pernos que genera (con su longitud calculada a partir del agarre) y cualquier advertencia de distancia al borde.
5. Abra la pestaña {{ui:Lista de materiales}}. Las piezas, los ensambles (una viga con sus dos placas de extremo es un ensamble) y los pernos y barras de anclaje aparecen enumerados con sus pesos. Debe ver seis marcas de pieza: c1 (las dos columnas centrales) y c2 (las cuatro columnas de esquina), ambas W12x50 de 3975 mm; b1, cuatro vigas W16x26 de 5650 mm; br1, el contraviento; p1, ocho placas de extremo PL20x180; y p2, seis placas base PL25x400. Los sujetadores son 64 pernos 20 x 70 A325 y 24 barras de anclaje 20 x 575.
6. Abra la pestaña {{ui:Tabla de doblado}}. Las seis zapatas idénticas comparten marcas de barra; la zapata del pedestal agrega las suyas.
7. Haga clic en el contraviento y mire el grupo {{ui:Salida}}: {{ui:Plano de taller}} aparece atenuado, porque los planos de taller, por ahora, solo cubren perfiles I y placas.
8. Elija {{ui:Archivos NC}}. El archivo ZIP contiene un archivo para cada marca de perfil I y de placa; la barra de estado indica que la marca del contraviento no se escribió.
9. Elija {{ui:IFC}} y abra el archivo en cualquier visor de IFC para comprobar cómo lo lee su otro software.

## Usarlo como punto de partida

El ejemplo es un modelo común. Cámbielo, después renómbrelo en el campo {{ui:Nombre}} y guárdelo con su nuevo nombre con {{key:Mod+S}}.
