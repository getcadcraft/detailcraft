---
title: Conectar vigas a columnas con placas de extremo
summary: Agregue placas de extremo atornilladas donde una viga llega a un ala o alma de columna, configure la placa, los pernos y la soldadura, y copie la conexión a cada unión similar.
keywords: placa de extremo, endplate, conexión a momento, conexión atornillada, unión, pernos, soldadura, placa de extremo extendida, a paño, similar, copiar conexión, componente
from: 21e028b2
---

Una conexión con placa de extremo suelda una placa al extremo de la viga y la atornilla al ala o alma de la columna. DetailCraft coloca la placa, recorta la viga, taladra agujeros coincidentes en la placa y en el ala de la columna, agrega los pernos y la soldadura, y revisa las distancias a borde y la separación.

:::warning
DetailCraft no diseña conexiones. La configuración son valores iniciales para que usted los cambie; nada revisa la resistencia. Las advertencias de borde y separación usan los mínimos de la Tabla 3.3 de EN 1993-1-8, que pueden diferir de las reglas con las que usted trabaja.
:::

## Qué puede conectar

- Una viga **a nivel** (ambos extremos a la misma altura), vertical (rotación 0), con perfil en I.
- Hacia el **ala** o el **alma** de una columna en I **vertical**, a escuadra.
- El extremo de la viga debe estar sobre la línea de la columna, entre la base y la parte superior de la columna.

Las vigas sesgadas o inclinadas y las secciones que no son en I se rechazan con un motivo: para ellas use [placas de cortante](topic:shear-tabs). En un alma, la placa y las alas de la viga deben caber entre las alas de la columna; DetailCraft advierte cuando no caben.

:::tip
Con rotación 0, las alas de una columna miran en la dirección de los ejes numerados (x). Una viga que va de A a B llega al alma y recibe una placa de extremo en el alma.
:::

## Agregar placas de extremo a una viga

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en la viga.
2. Elija {{ui:Placas de extremo}} en el grupo {{ui:Conectar}}, o {{ui:Agregar placas de extremo}} en el panel {{ui:Propiedades}}.
3. Cada extremo libre de la viga que llega a un ala o alma de columna a escuadra recibe una placa. La barra de estado dice "2 placas de extremo agregadas. Seleccione una para cambiar su placa, pernos y soldadura; Similares la copia a uniones como ella."
4. La primera placa de extremo nueva queda seleccionada y su configuración aparece en el panel {{ui:Propiedades}}.

Si no pasa nada, lea la barra de estado:

- "Esta viga no termina en una línea de columna. Las placas de extremo van donde el extremo de una viga llega a una columna vertical."
- "Esta viga llega a una columna en ángulo o tiene pendiente: las placas de extremo se construyen para uniones a escuadra y a nivel. Use Placas de cortante."
- "Ambos extremos ya tienen conexiones."

## Cambiar la placa, los pernos y la soldadura

Haga clic en la placa de extremo (o en uno de sus pernos) para seleccionar la conexión. En {{ui:Placa, pernos y soldadura (mm)}}:

| Configuración | Valor predeterminado | Qué hace |
|---|---|---|
| Espesor de la placa | 20 | El espesor de la placa; también cuánto se recorta la viga pasando el ala |
| Ancho de la placa | 180 | A lo ancho de la unión |
| Extensión sobre la viga | 0 | Por encima del ala superior; mayor que 0 hace una placa de extremo extendida |
| Extensión bajo la viga | 0 | Por debajo del ala inferior |
| Diámetro del perno | 20 | Tamaño nominal del perno |
| Diámetro del agujero | 22 | Su holgura de agujero en la placa y en el ala de la columna |
| Grado del perno | A325 | Texto; se imprime en la lista de materiales |
| Filas de pernos | 4 | Filas de dos pernos, centradas en la altura de la placa |
| Paso entre filas | 75 | Separación vertical entre filas |
| Gramil | 100 | Separación horizontal entre los dos pernos de una fila |
| Holgura de longitud del perno | 30 | Se suma al agarre para la tuerca, la arandela y la rosca; vea abajo |
| Tamaño de soldadura de filete | 8 | En todo el perímetro del extremo de la viga |
| Material de la placa | A36 | Texto |

Escriba un valor nuevo y presione {{key:Enter}} o {{key:Tab}}. La placa, los agujeros, los pernos y la longitud de corte de la viga se actualizan de inmediato. Cada cambio es un paso de deshacer.

Debajo de la configuración ve lo que genera la conexión:

- {{ui:Pernos}}: por ejemplo "8 × 20 × 70 A325 (agarre 36.2)".
- {{ui:Soldadura}}: tamaño, dónde y su longitud.
- {{ui:Placa}}: su tamaño y su marca de pieza.

### Cómo se calculan los números

- La viga se recorta la mitad de la profundidad de la columna (en un alma: la mitad del espesor del alma) más el espesor de la placa, para que la placa quede sobre la cara.
- La altura de la placa es la altura de la viga más las dos extensiones.
- Longitud del perno = agarre (espesor de la placa + espesor del ala o alma de la columna) + holgura, redondeado al siguiente múltiplo de 5 mm.
- La longitud de soldadura mostrada es el perímetro de la sección de la viga.

### Advertencias

La conexión se construye igual, pero estas aparecen debajo de ella y en la pestaña {{ui:Problemas}}:

- Filas de pernos o pernos más cerca del borde de la placa que 1.2 × el diámetro del agujero.
- Paso entre filas menor que 2.2 × el diámetro del agujero, o gramil menor que 2.4 × el diámetro del agujero.
- Agujeros que entran en el alma de la columna o en su filete, o que salen del ala de la columna.
- Una placa más ancha que el ala de la columna, o (en un alma) más ancha que el espacio entre las alas; alas de viga que no caben entre ellas.
- Una fila de pernos demasiado cerca de un ala de viga, o un gramil demasiado cerrado para el alma de la viga y su soldadura.

## Copiar a cada unión similar

1. Seleccione la conexión que configuró.
2. Elija {{ui:Aplicar a similares (n)}} en el panel {{ui:Propiedades}}, o {{ui:Similares}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}. El número entre paréntesis es cuántas uniones la recibirán.
3. Cada unión con el mismo perfil de viga y de columna, con la viga llegando al mismo tipo de cara, que aún no tenga conexión recibe una copia con la misma configuración. La barra de estado indica cuántas.

Las copias son independientes: cambiar una después no cambia las demás. Las uniones que ya tienen conexión no se tocan; elimínelas primero si quiere reemplazarlas.

## Mover y eliminar

Las conexiones se rehacen a partir de su configuración cada vez que cambia el modelo, así que al mover o cambiar el tamaño de una viga o columna, sus placas de extremo se mueven con ella. Si un cambio hace que la unión ya no encaje, la conexión permanece en el modelo y la pestaña {{ui:Problemas}} explica por qué, por ejemplo "El extremo de la viga ya no está sobre la línea de la columna."

Para eliminar una conexión, selecciónela y presione {{key:Delete}}. Al eliminar la viga o la columna también se eliminan sus conexiones.

Siguiente: [Agregar placas base y barras de anclaje](topic:base-plates).
