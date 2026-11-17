---
title: Uniones a inglete
summary: Una dos piezas de perfil en I que se encuentran en ángulo: ambos extremos cortados en el plano que divide el ángulo en dos, con placas de testa, tornillos y rigidizadores si los quiere.
keywords: inglete, mitre, miter, unión a inglete, rodilla, cartela, pórtico, cumbrera, esquina, corte en ángulo, corte oblicuo, placa de testa, placa de testa atornillada, rigidizador, conectar
from: cd8380d4
---

Una unión a inglete une dos piezas de perfil en I cuyos extremos se encuentran en ángulo, como la rodilla de un pórtico, una cumbrera o dos vigas que giran una esquina en planta. DetailCraft corta ambos extremos en el plano que divide en dos el ángulo entre ellas, de modo que las dos caras de corte coinciden. Si lo desea, añade una placa de testa a cada extremo cortado, une las dos placas con tornillos y coloca un par de rigidizadores de alma en cada pieza.

## Dónde funciona

- Dos **perfiles en I** (IPE, HEA, HEB, W y similares) cuyos **extremos se encuentran en el mismo nudo**. Cualquiera de las piezas puede dibujarse en cualquier sentido.
- El ángulo entre las piezas debe ser de al menos 15°. Las piezas alineadas se rechazan: use un [empalme](topic:splices).
- El corte simple (sin placas) funciona sea cual sea la forma en que se encuentran las piezas. Las **placas de testa** necesitan que las dos piezas se encuentren en el plano de sus almas, como en la rodilla de un pórtico o en una cumbrera. Dos vigas que giran una esquina en planta se encuentran en el plano de sus alas, así que solo reciben el corte simple.
- Se unen piezas de distintos tamaños, pero con una advertencia: sus caras de corte no coinciden.

## Añadir un inglete

1. Seleccione las dos piezas: haga clic en una y después {{key:Shift}}+clic en la otra.
2. Elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}. Se abre el cuadro de diálogo Inglete.
3. Defina los campos numerados. El dibujo junto a ellos se genera con sus números a medida que escribe, y sus círculos numerados muestran lo que define cada campo.
4. Elija {{ui:Añadir el inglete}}. Si seleccionó más de dos piezas, cada nudo libre entre ellas recibe el mismo inglete.

Para cambiar un inglete más tarde, selecciónelo (haga clic en una de sus placas) y elija {{ui:Cuadro de diálogo del inglete con vista previa}} en el panel derecho, o cambie sus ajustes allí directamente. Un corte simple no tiene placas en las que hacer clic: seleccione sus dos piezas y elija de nuevo {{ui:Inglete}}; el cuadro de diálogo se abre con ese inglete. {{ui:Aplicar a similares (n)}} lo copia a cada nudo libre entre piezas de los mismos dos perfiles y con el mismo ángulo.

## Los campos numerados (mm)

| Nº | Ajuste | Por defecto | Qué hace |
|---|---|---|---|
| 1 | Separación entre placas (o entre los extremos cortados) | 0 | Separación libre en la unión. Cada lado conserva la mitad |
| 2 | Placas de testa, espesor de placa | activado, 20 | Una placa de testa soldada a todo alrededor en cada extremo cortado. Desmárquela para un corte simple |
| 3 | Filas de tornillos, paso entre filas, gramil, fila exterior | 4, 0, 0, desactivado | Paso 0 reparte las filas uniformemente entre las alas. Gramil 0 = la mitad del ancho de la placa, como mínimo 2.4 × el agujero. La fila exterior va en la prolongación de la placa más allá del ala exterior |
| 4 | Placa más allá del ala exterior | 0 | Cuánto llegan las placas más allá del ala exterior, a lo largo del corte |
| 5 | Placa más allá del ala interior | 0 | Lo mismo en el lado interior |
| 6 | Rigidizadores de alma, distancia más allá del corte | desactivado, 50 | Un par en cada pieza, a ambos lados del alma, perpendicular a la pieza, a esta distancia más allá del extremo lejano de su corte |
| 7 | Espesor del rigidizador | 10 | |

Bajo {{ui:Tornillos}}: diámetro del tornillo, agujero, calidad y margen de longitud (20, 22, A325, 30), como en las placas de testa. Bajo {{ui:Chapas y soldaduras}}: ancho de placa (0 = el ancho del ala), tamaño del cordón de soldadura en ángulo (8) y material de la placa (A36).

## Qué obtiene

- **Los cortes.** El extremo de cada pieza se corta en su plano. Su longitud en listas, planos y archivos NC es la **longitud total**, desde su extremo a escuadra hasta el punto más alejado del corte.
- **Las placas** pertenecen a su propia pieza: el conjunto de cada pieza es la pieza, su placa de testa y sus rigidizadores. Los tornillos son tornillos de obra de la unión: la lista de materiales los cuenta una vez, y el plano de conjunto de cada pieza los enumera como tornillos sueltos.
- **Los planos** muestran los extremos inclinados y las placas; el plano de taller de una pieza con inglete indica el ángulo de cada corte respecto a la escuadra.
- **Los archivos NC** (DSTV) llevan los ángulos de corte oblicuo en la cabecera, como exige la norma, y contornos que siguen el corte. Compruébelos en el visor NC de su taller antes de cortar, como con cualquier archivo NC.
- **IFC** recorta la extrusión de cada pieza según su plano de corte, para que otros programas muestren el corte real.
- **Marcas:** una pieza con inglete es distinta de una cortada a escuadra de la misma longitud. Dos piezas con los mismos cortes comparten marca, como las dos vigas inclinadas de una cumbrera.

## Conviene saber

- El inglete sigue activo. Mueva o redimensione cualquiera de las piezas y el corte, las placas y los tornillos la siguen. Borre cualquiera de las piezas y el inglete desaparece, y el extremo de la otra pieza vuelve a estar a escuadra.
- Las advertencias usan los mínimos de EN 1993-1-8 de las demás uniones (distancia al extremo y al borde 1.2 × el agujero, paso 2.2 × el agujero, gramil 2.4 × el agujero), además de filas de tornillos demasiado cerca de un ala, placas más estrechas que las alas y rigidizadores sin espacio.
- Los valores son de partida, no un diseño. DetailCraft no comprueba la resistencia de la unión, y no genera cartela, ni inglete soldado con soldadura a tope, ni rigidizadores alineados con las alas de la otra pieza.
