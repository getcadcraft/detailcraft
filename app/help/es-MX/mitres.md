---
title: Uniones a inglete
summary: Una dos piezas de perfil en I que se encuentran en un ángulo, con ambos extremos cortados en el plano que divide el ángulo en dos, con placas de extremo, pernos y atiesadores si los quiere.
keywords: inglete, ingletes, unión a inglete, rodilla, acartelamiento, pórtico, cumbrera, esquina, corte en ángulo, corte oblicuo, placa de extremo, placa de extremo atornillada, atiesador, conectar
from: cd8380d4
---

Un inglete une dos miembros de perfil en I cuyos extremos se encuentran en un ángulo, como la rodilla de un pórtico, una cumbrera o dos vigas que giran una esquina en planta. DetailCraft corta ambos extremos en el plano que divide en dos el ángulo entre ellos, de modo que las dos caras cortadas coinciden. Si lo quiere, agrega una placa de extremo a cada extremo cortado, une las dos placas con pernos y coloca un par de atiesadores de alma en cada miembro.

## Dónde funciona

- Dos perfiles **en I** (IPE, HEA, HEB, W y similares) cuyos **extremos se encuentran en el mismo nodo**. Cualquiera de los miembros puede dibujarse en cualquier dirección.
- El ángulo entre los miembros debe ser de al menos 15°. Los miembros alineados se rechazan: use un [empalme](topic:splices).
- El corte simple (sin placas) funciona sin importar cómo se encuentren los miembros. Las **placas de extremo** requieren que los dos miembros se encuentren en el plano de sus almas, como en la rodilla de un pórtico o en una cumbrera. Dos vigas que giran una esquina en planta se encuentran en el plano de sus patines, así que solo reciben el corte simple.
- Se pueden unir miembros de distinto tamaño, pero con una advertencia: sus caras cortadas no coinciden.

## Agregar un inglete

1. Seleccione los dos miembros: haga clic en uno y luego {{key:Shift}}+clic en el otro.
2. Elija {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}. Se abre el cuadro de diálogo de inglete.
3. Configure los campos numerados. El dibujo junto a ellos se hace con sus números mientras escribe, y sus círculos numerados muestran lo que configura cada campo.
4. Elija {{ui:Agregar el inglete}}. Si seleccionó más de dos miembros, cada unión libre entre ellos recibe el mismo inglete.

Para cambiar un inglete después, selecciónelo (haga clic en una de sus placas) y elija {{ui:Cuadro de diálogo de inglete con vista previa}} en el panel derecho, o cambie su configuración ahí directamente. Un corte simple no tiene placas en las que hacer clic: seleccione sus dos miembros y elija {{ui:Inglete}} de nuevo, y el cuadro de diálogo se abrirá en ese inglete. {{ui:Aplicar a similares (n)}} lo copia a cada unión libre entre miembros de los mismos dos perfiles con el mismo ángulo.

## Los campos numerados (mm)

| Núm. | Configuración | Predeterminado | Qué hace |
|---|---|---|---|
| 1 | Separación entre las placas (o los extremos cortados) | 0 | Separación libre en la unión. Cada lado conserva la mitad |
| 2 | Placas de extremo, espesor de placa | activado, 20 | Una placa de extremo soldada en todo su perímetro en cada extremo cortado. Desmarque para un corte simple |
| 3 | Filas de pernos, paso entre filas, gramil, fila exterior | 4, 0, 0, desactivado | Paso 0 reparte las filas de manera uniforme entre los patines. Gramil 0 = la mitad del ancho de la placa, como mínimo 2.4 × el agujero. La fila exterior va en la prolongación de la placa más allá del patín exterior |
| 4 | Placa más allá del patín exterior | 0 | Qué tanto alcanzan las placas más allá del patín exterior, a lo largo del corte |
| 5 | Placa más allá del patín interior | 0 | Lo mismo para el interior |
| 6 | Atiesadores de alma, distancia más allá del corte | desactivado, 50 | Un par en cada miembro, a ambos lados del alma, en escuadra con el miembro, a esta distancia más allá del extremo lejano de su corte |
| 7 | Espesor del atiesador | 10 | |

Bajo {{ui:Pernos}}: diámetro del perno, agujero, grado y margen de longitud (20, 22, A325, 30), igual que en las placas de extremo. Bajo {{ui:Placas y soldaduras}}: ancho de placa (0 = el ancho del patín), tamaño de soldadura de filete (8) y material de la placa (A36).

## Qué obtiene

- **Los cortes.** El extremo de cada miembro se corta en su plano. Su longitud en listas, planos y archivos NC es la **longitud total**, desde su extremo cuadrado hasta el punto más alejado del corte.
- **Las placas** pertenecen a su propio miembro: el ensamblaje de cada miembro es el miembro, su placa de extremo y sus atiesadores. Los pernos son pernos de obra de la unión: la lista de materiales los cuenta una sola vez, y el plano de ensamblaje de cada miembro los enumera como pernos sueltos.
- **Los planos** muestran los extremos inclinados y las placas; el plano de taller de un miembro con inglete anota el ángulo de cada corte respecto a la escuadra.
- **Los archivos NC** (DSTV) llevan los ángulos de corte oblicuo en el encabezado, como exige la norma, y contornos que siguen el corte. Revíselos en el visor NC de su taller antes de cortar, como con cualquier archivo NC.
- **IFC** recorta la extrusión de cada miembro con su plano de corte, para que otros programas muestren el corte real.
- **Marcas:** un miembro con inglete es una pieza distinta de uno de la misma longitud con corte a escuadra. Dos miembros con los mismos cortes comparten una marca, como los dos cabios de una cumbrera.

## Puntos útiles

- El inglete permanece activo. Mueva o cambie el tamaño de cualquiera de los miembros y el corte, las placas y los pernos lo siguen. Elimine cualquiera de los miembros y el inglete desaparece, y el extremo del otro miembro vuelve a ser cuadrado.
- Las advertencias usan los mismos mínimos de EN 1993-1-8 que las otras conexiones (distancia al extremo y al borde 1.2 × el agujero, paso 2.2 × el agujero, gramil 2.4 × el agujero), además de filas de pernos demasiado cerca de un patín, placas más angostas que los patines y atiesadores sin espacio.
- Los valores son puntos de partida, no un diseño. DetailCraft no verifica la resistencia de la conexión, y no crea cartelas, ni inglete soldado a tope, ni atiesadores alineados con los patines del otro miembro.
