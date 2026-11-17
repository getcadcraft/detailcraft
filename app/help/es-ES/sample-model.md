---
title: Explorar el marco de ejemplo
summary: Abra el marco de dos vanos incluido y úselo para aprender lo que genera DetailCraft, desde las marcas hasta los archivos NC.
keywords: ejemplo, muestra, demo, marco, aprender, recorrido, probar
from: 5c5944dd
---

El marco de ejemplo es un modelo pequeño y completo: aparece al menos una vez cada tipo de elemento que genera DetailCraft. Es la forma más rápida de conocer la aplicación y de probar una exportación antes de confiar en ella.

## Abrirlo

1. Elija {{ui:Ejemplo}} en el grupo {{ui:Archivo}}.
2. Si el modelo actual tiene cambios sin guardar, elija {{ui:Guardar primero}} o {{ui:Descartar cambios}}.
3. La barra de estado indica "Marco de ejemplo: 6 pilares con placas base, 4 vigas con placas de testa, una diagonal, 7 zapatas con armadura."

El ejemplo se abre como un modelo nuevo llamado "Marco de ejemplo". No cambia nada más y no tiene nada que deshacer.

## Qué contiene

- **Ejes** 1, 2, 3 a 6000 mm y A, B a 7000 mm. **Niveles** Nivel 1 en 0 y Nivel 2 en 4000.
- **Seis pilares**, W12x50, desde el Nivel 1 hasta el Nivel 2 en cada intersección, cada uno sobre una placa base de 25 mm con cuatro pernos de anclaje.
- **Cuatro vigas**, W16x26, en el Nivel 2 a lo largo de los ejes A y B, con la cara superior del acero en el nivel y una placa de testa atornillada enrasada en ambos extremos (ocho en total).
- **Una diagonal**, HSS4x4x1/4, desde A/1 en el Nivel 1 hasta A/2 en el Nivel 2.
- **Seis zapatas aisladas**, 2000 x 2000 x 600, una bajo cada pilar, con una parrilla inferior con gancho en ambas direcciones.
- **Una zapata más** junto al marco, 2400 x 1800 x 600, con seis barras de arranque con gancho que sobresalen para un pedestal de hormigón.

## Cosas para probar

1. Pulse una viga. Lea su {{ui:Marca de pieza}}, {{ui:Conjunto}}, {{ui:Longitud de corte}} y {{ui:Recorte}}: la longitud de corte es menor que la separación de 6000 mm de la rejilla porque cada placa de testa recorta la viga la mitad del canto del pilar más el espesor de la placa.
2. Pulse un pilar. En {{ui:Taladros}} aparecen los taladros que las placas de testa hicieron en sus alas ("8 taladros por uniones"; los pilares centrales tienen 16, un juego en cada ala).
3. En la lista {{ui:Marcas de pieza}} de la izquierda, vea que las cuatro vigas comparten una marca: son la misma pieza de acero. Los pilares de esquina también comparten una marca, aunque sus taladros miren en sentidos opuestos, porque un pilar girado de extremo a extremo sigue siendo la misma pieza. Los pilares centrales, con taladros en ambas alas, reciben otra marca.
4. Pulse una placa de testa (o uno de sus tornillos). El panel {{ui:Propiedades}} muestra los ajustes de placa, tornillo y soldadura, los tornillos que genera (con su longitud calculada a partir del agarre) y las advertencias de distancia al borde.
5. Abra la pestaña {{ui:Lista de materiales}}. Se listan las piezas, los conjuntos (una viga con sus dos placas de testa es un conjunto), y los tornillos y barras de anclaje, con sus pesos. Debe ver seis marcas de pieza: c1 (los dos pilares centrales) y c2 (los cuatro pilares de esquina), ambos W12x50 de 3975 mm; b1, cuatro vigas W16x26 de 5650 mm; br1, la diagonal; p1, ocho placas de testa PL20x180; y p2, seis placas base PL25x400. Los elementos de fijación son 64 tornillos 20 x 70 A325 y 24 barras de anclaje 20 x 575.
6. Abra la pestaña {{ui:Tabla de doblado}}. Las seis zapatas idénticas comparten marcas de barra; la zapata del pedestal añade las suyas.
7. Pulse la diagonal y mire el grupo {{ui:Salida}}: {{ui:Plano de taller}} aparece atenuado, porque por ahora los planos de taller cubren solo perfiles en I y placas.
8. Elija {{ui:Archivos NC}}. El zip contiene un archivo por cada marca de perfil en I y de placa; la barra de estado indica que la marca de la diagonal no se escribió.
9. Elija {{ui:IFC}} y abra el archivo con cualquier visor IFC para comprobar cómo lo lee su otro software.

## Úselo como punto de partida

El ejemplo es un modelo normal. Cámbielo, después renómbrelo en el campo {{ui:Nombre}} y guárdelo con su nuevo nombre con {{key:Mod+S}}.
