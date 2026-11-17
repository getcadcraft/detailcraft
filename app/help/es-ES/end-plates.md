---
title: Unir vigas a pilares con chapas de testa
summary: Añada chapas de testa atornilladas donde una viga llega a un ala o alma de pilar, ajuste la placa, los tornillos y la soldadura, y copie la unión a todas las juntas similares.
keywords: chapa de testa, unión a momento, unión atornillada, junta, tornillos, soldadura, chapa prolongada, enrasada, similar, copiar unión, componente
from: 21e028b2
---

Una unión con chapa de testa suelda una placa al extremo de la viga y la atornilla al ala o al alma del pilar. DetailCraft coloca la placa, corta la viga hacia atrás, taladra agujeros coincidentes en la placa y en el ala del pilar, añade los tornillos y la soldadura, y comprueba las distancias a borde y las separaciones.

:::warning
DetailCraft no calcula uniones. Los ajustes son valores de partida para que los cambie; nada comprueba la resistencia. Los avisos de borde y separación usan los mínimos de EN 1993-1-8 Tabla 3.3, que pueden diferir de las reglas con las que usted trabaja.
:::

## Qué puede unir

- Una viga **horizontal** (ambos extremos a la misma altura), vertical (rotación 0), con perfil doble T.
- Al **ala** o al **alma** de un pilar de perfil doble T **vertical**, a escuadra.
- El extremo de la viga debe situarse sobre la línea del pilar, entre la base y la cabeza del pilar.

Las vigas oblicuas o inclinadas y las secciones que no son doble T se rechazan con un motivo: use [chapas de cortante](topic:shear-tabs) para esos casos. En un alma, la placa y las alas de la viga deben caber entre las alas del pilar; DetailCraft avisa cuando no caben.

:::tip
Con rotación 0, las alas de un pilar miran en la dirección numerada de la rejilla (x). Una viga que va de A a B llega al alma y recibe una chapa de testa en el alma.
:::

## Añadir chapas de testa a una viga

1. Elija {{ui:Seleccionar}} ({{key:V}}) y haga clic en la viga.
2. Elija {{ui:Chapas de testa}} en el grupo {{ui:Conectar}}, o {{ui:Añadir chapas de testa}} en el panel {{ui:Propiedades}}.
3. Cada extremo libre de la viga que llega a un ala o alma de pilar a escuadra recibe una placa. La barra de estado dice "2 chapas de testa añadidas. Seleccione una para cambiar su placa, tornillos y soldadura; Similares la copia a juntas como ella."
4. La primera chapa de testa nueva queda seleccionada y sus ajustes aparecen en el panel {{ui:Propiedades}}.

Si no ocurre nada, lea la barra de estado:

- "Esta viga no termina sobre una línea de pilar. Las chapas de testa van donde el extremo de una viga llega a un pilar vertical."
- "Esta viga llega a un pilar en ángulo o tiene pendiente: las chapas de testa se construyen para uniones a escuadra y horizontales. Use Chapas de cortante."
- "Ambos extremos ya tienen uniones."

## Cambiar la placa, los tornillos y la soldadura

Haga clic en la chapa de testa (o en uno de sus tornillos) para seleccionar la unión. Bajo {{ui:Placa, tornillos y soldadura (mm)}}:

| Ajuste | Valor por defecto | Qué hace |
|---|---|---|
| Espesor de placa | 20 | El espesor de la placa; también cuánto se corta la viga hacia atrás más allá del ala |
| Ancho de placa | 180 | Transversal a la unión |
| Prolongación sobre la viga | 0 | Por encima del ala superior; con valores mayores que 0 se obtiene una chapa de testa prolongada |
| Prolongación bajo la viga | 0 | Por debajo del ala inferior |
| Diámetro del tornillo | 20 | Tamaño nominal del tornillo |
| Diámetro del agujero | 22 | Su holgura en la placa y en el ala del pilar |
| Calidad del tornillo | A325 | Texto; se imprime en la lista de materiales |
| Filas de tornillos | 4 | Filas de dos tornillos, centradas en la altura de la placa |
| Paso entre filas | 75 | Separación vertical entre filas |
| Gramil | 100 | Separación horizontal entre los dos tornillos de una fila |
| Holgura de longitud del tornillo | 30 | Se suma al agarre para la tuerca, la arandela y la rosca; véase abajo |
| Tamaño del cordón de filete | 8 | En todo el contorno del extremo de la viga |
| Material de la placa | A36 | Texto |

Escriba un valor nuevo y pulse {{key:Enter}} o {{key:Tab}}. La placa, los agujeros, los tornillos y la longitud de corte de la viga se actualizan de inmediato. Cada cambio es un paso de deshacer.

Bajo los ajustes ve lo que hace la unión:

- {{ui:Tornillos}}: por ejemplo "8 × 20 × 70 A325 (agarre 36.2)".
- {{ui:Soldadura}}: tamaño, dónde y su longitud.
- {{ui:Placa}}: su tamaño y su marca de pieza.

### Cómo se calculan los números

- La viga se corta hacia atrás la mitad del canto del pilar (en un alma: la mitad del espesor del alma) más el espesor de la placa, de modo que la placa se apoye en la cara.
- La altura de la placa es el canto de la viga más las dos prolongaciones.
- Longitud del tornillo = agarre (espesor de placa + espesor del ala o alma del pilar) + holgura, redondeada al múltiplo de 5 mm superior.
- La longitud de soldadura mostrada es el perímetro de la sección de la viga.

### Avisos

La unión se construye igualmente, pero estos avisos aparecen bajo ella y en la pestaña {{ui:Problemas}}:

- Filas de tornillos o tornillos más cerca del borde de la placa que 1.2 × el diámetro del agujero.
- Paso entre filas inferior a 2.2 × el diámetro del agujero, o gramil inferior a 2.4 × el diámetro del agujero.
- Agujeros que entran en el alma del pilar o en su acuerdo, o fuera del ala del pilar.
- Una placa más ancha que el ala del pilar o (en un alma) más ancha que el espacio entre las alas; alas de viga que no caben entre ellas.
- Una fila de tornillos demasiado cerca de un ala de viga, o un gramil demasiado estrecho para el alma de la viga y su soldadura.

## Copiar a cada junta similar

1. Seleccione la unión que ha configurado.
2. Elija {{ui:Aplicar a similares (n)}} en el panel {{ui:Propiedades}}, o {{ui:Similares}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}. El número entre paréntesis es cuántas juntas la recibirán.
3. Cada junta con el mismo perfil de viga y el mismo perfil de pilar, con la viga llegando al mismo tipo de cara, que aún no tenga unión recibe una copia con los mismos ajustes. La barra de estado indica cuántas.

Las copias son independientes: cambiar una después no cambia las demás. Las juntas que ya tienen una unión no se tocan; bórrelas antes si quiere reemplazarlas.

## Mover y borrar

Las uniones se rehacen a partir de sus ajustes cada vez que cambia el modelo, de modo que mover o redimensionar una viga o un pilar arrastra también sus chapas de testa. Si un cambio hace que la junta ya no encaje, la unión se mantiene en el modelo y la pestaña {{ui:Problemas}} indica el motivo, por ejemplo "El extremo de la viga ya no está sobre la línea del pilar."

Para borrar una unión, selecciónela y pulse {{key:Delete}}. Borrar la viga o el pilar borra también sus uniones.

Siguiente: [Añada placas base y pernos de anclaje](topic:base-plates).
