---
title: Conectar vigas a columnas con placas de extremo
summary: Agregue placas de extremo atornilladas donde una viga llega al ala o alma de una columna, configure la placa, los pernos y la soldadura, y copie la conexión a todas las uniones similares.
keywords: placa de extremo, placa extremo, conexión a momento, conexión atornillada, unión, pernos, soldadura, placa de extremo extendida, enrasada, similar, copiar conexión, componente
from: 21e028b2
---

Una conexión con placa de extremo suelda una placa al extremo de la viga y la atornilla al ala o alma de la columna. DetailCraft coloca la placa, recorta la viga, perfora agujeros coincidentes en la placa y en el ala de la columna, agrega los pernos y la soldadura, y verifica las distancias a los bordes y los espaciamientos.

:::warning
DetailCraft no diseña conexiones. Las configuraciones son valores de inicio para que usted las cambie; nada verifica la resistencia. Las advertencias de borde y espaciamiento usan los mínimos de la Tabla 3.3 de EN 1993-1-8, que pueden diferir de las reglas con las que usted trabaja.
:::

## Qué puede conectar

- Una viga **a nivel** (ambos extremos a la misma altura), vertical (rotación 0), con perfil doble T.
- Al **ala** o al **alma** de una columna doble T **vertical**, a escuadra.
- El extremo de la viga debe estar sobre la línea de la columna, entre la base y la parte superior de la columna.

Las vigas oblicuas o con pendiente y las secciones que no son doble T se rechazan con un motivo: para esas use [placas de corte](topic:shear-tabs). En un alma, la placa y las alas de la viga deben entrar entre las alas de la columna; DetailCraft avisa cuando no entran.

:::tip
Con rotación 0, las alas de una columna miran a lo largo de la dirección numerada de la grilla (x). Una viga que va de A a B llega al alma y recibe una placa de extremo en el alma.
:::

## Agregar placas de extremo a una viga

1. Elija {{ui:Select}} ({{key:V}}) y haga clic en la viga.
2. Elija {{ui:End plates}} en el grupo {{ui:Connect}}, o {{ui:Add end plates}} en el panel {{ui:Properties}}.
3. Cada extremo libre de la viga que llega a escuadra al ala o alma de una columna recibe una placa. La barra de estado dice "2 end plates added. Select one to change its plate, bolts and weld; Similar copies it to joints like it."
4. La primera placa de extremo nueva queda seleccionada y sus configuraciones aparecen en el panel {{ui:Properties}}.

Si no pasa nada, lea la barra de estado:

- "This beam does not end on a column line. End plates go where a beam end meets a vertical column."
- "This beam meets a column at an angle or slopes: end plates are built for square, level joints. Use Shear tabs."
- "Both ends already have connections."

## Cambiar la placa, los pernos y la soldadura

Haga clic en la placa de extremo (o en uno de sus pernos) para seleccionar la conexión. Debajo de {{ui:Plate, bolts and weld (mm)}}:

| Configuración | Valor inicial | Qué hace |
|---|---|---|
| Plate thickness | 20 | El espesor de la placa; también cuánto se recorta la viga pasando el ala |
| Plate width | 180 | A lo ancho de la unión |
| Extension above beam | 0 | Por encima del ala superior; por encima de 0 hace una placa de extremo extendida |
| Extension below beam | 0 | Por debajo del ala inferior |
| Bolt diameter | 20 | Tamaño nominal del perno |
| Hole diameter | 22 | Su agujero con holgura en la placa y en el ala de la columna |
| Bolt grade | A325 | Texto; se imprime en la lista de materiales |
| Bolt rows | 4 | Filas de dos pernos, centradas en la altura de la placa |
| Row pitch | 75 | Separación vertical entre filas |
| Gauge | 100 | Separación horizontal entre los dos pernos de una fila |
| Bolt length allowance | 30 | Se suma al agarre para la tuerca, la arandela y la rosca; vea abajo |
| Fillet weld size | 8 | En todo el contorno del extremo de la viga |
| Plate material | A36 | Texto |

Escriba un valor nuevo y presione {{key:Enter}} o {{key:Tab}}. La placa, los agujeros, los pernos y el largo de corte de la viga se actualizan de inmediato. Cada cambio es un paso de deshacer.

Debajo de las configuraciones ve lo que hace la conexión:

- {{ui:Bolts}}: por ejemplo "8 × 20 × 70 A325 (grip 36.2)".
- {{ui:Weld}}: tamaño, dónde, y su largo.
- {{ui:Plate}}: su tamaño y su marca de pieza.

### Cómo se calculan los números

- La viga se recorta la mitad de la altura de la columna (en un alma: la mitad del espesor del alma) más el espesor de la placa, para que la placa quede sobre la cara.
- La altura de la placa es la altura de la viga más las dos extensiones.
- Largo del perno = agarre (espesor de la placa + espesor del ala o alma de la columna) + holgura, redondeado hacia arriba al siguiente múltiplo de 5 mm.
- El largo de soldadura que se muestra es el perímetro de la sección de la viga.

### Advertencias

La conexión se construye igual, pero estas aparecen debajo de ella y en la pestaña {{ui:Problems}}:

- Filas de pernos o pernos más cerca del borde de la placa que 1.2 × el diámetro del agujero.
- Separación entre filas menor que 2.2 × el diámetro del agujero, o gauge menor que 2.4 × el diámetro del agujero.
- Agujeros que llegan al alma de la columna o a su radio de unión, o que salen del ala de la columna.
- Una placa más ancha que el ala de la columna, o (en un alma) más ancha que el espacio entre las alas; alas de viga que no entran entre ellas.
- Una fila de pernos demasiado cerca de un ala de viga, o un gauge demasiado ajustado para el alma de la viga y su soldadura.

## Copiar a cada unión similar

1. Seleccione la conexión que ya configuró.
2. Elija {{ui:Apply to similar (n)}} en el panel {{ui:Properties}}, o {{ui:Similar}} en el menú {{ui:More}} del grupo {{ui:Connect}}. El número entre paréntesis es cuántas uniones la recibirán.
3. Cada unión con el mismo perfil de viga y de columna, viga a la misma clase de cara, que todavía no tenga conexión recibe una copia con las mismas configuraciones. La barra de estado dice cuántas.

Las copias son independientes: cambiar una después no cambia las otras. Las uniones que ya tienen conexión se dejan como están; elimínelas antes si quiere reemplazarlas.

## Mover y eliminar

Las conexiones se rehacen a partir de sus configuraciones cada vez que cambia el modelo, así que mover o cambiar el tamaño de una viga o columna arrastra sus placas de extremo. Si un cambio hace que la unión ya no encaje, la conexión queda en el modelo y la pestaña {{ui:Problems}} dice por qué, por ejemplo "The beam end is not on the column line any more."

Para eliminar una conexión, selecciónela y presione {{key:Delete}}. Al eliminar la viga o la columna también se eliminan sus conexiones.

Siguiente: [Agregar placas base y barras de anclaje](topic:base-plates).
