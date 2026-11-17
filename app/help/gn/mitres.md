---
title: Uniones a inglete
summary: Uní dos miembros de perfil I que se encuentran en un ángulo: ambos extremos cortados en el plano que divide el ángulo, con placas de extremo, pernos y atiesadores si los querés.
keywords: inglete, uniones a inglete, unión a inglete, rodilla, cartela, pórtico, cumbrera, esquina, corte en ángulo, corte oblicuo, placa de extremo, placa de extremo atornillada, atiesador, conectar
from: cd8380d4
---

Un inglete une dos miembros de perfil I cuyos extremos se encuentran en un ángulo, como la rodilla de un pórtico, una cumbrera, o dos vigas que giran una esquina en planta. DetailCraft corta ambos extremos en el plano que divide el ángulo entre ellos, de modo que las dos caras de corte coinciden. Si lo querés, agrega una placa de extremo a cada extremo cortado, atornilla las dos placas entre sí, y pone un par de atiesadores de alma en cada miembro.

## Dónde funciona

- Dos **perfiles I** (IPE, HEA, HEB, W y similares) cuyos **extremos se encuentran en el mismo nodo**. Cualquiera de los miembros puede estar dibujado en cualquier sentido.
- El ángulo entre los miembros debe ser de al menos 15°. Los miembros en línea se rechazan: usá un [empalme](topic:splices).
- El corte simple (sin placas) funciona sin importar cómo se encuentren los miembros. Las **placas de extremo** necesitan que los dos miembros se encuentren en el plano de sus almas, como en una rodilla de pórtico o una cumbrera. Dos vigas que giran una esquina en planta se encuentran en el plano de sus alas, así que solo reciben el corte simple.
- Se pueden unir miembros de distintos tamaños, pero con una advertencia: sus caras de corte no coinciden.

## Agregar un inglete

1. Seleccioná los dos miembros: hacé clic en uno, y luego {{key:Shift}}+clic en el otro.
2. Elegí {{ui:Inglete}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}. Se abre el diálogo Inglete.
3. Completá los campos numerados. El dibujo al lado se genera con tus números mientras escribís, y sus círculos numerados muestran qué define cada campo.
4. Elegí {{ui:Agregar el inglete}}. Si seleccionaste más de dos miembros, cada unión libre entre ellos recibe el mismo inglete.

Para cambiar un inglete después, seleccionalo (hacé clic en una de sus placas) y elegí {{ui:Diálogo de inglete con vista previa}} en el panel derecho, o cambiá sus valores ahí directamente. Un corte simple no tiene placas donde hacer clic: seleccioná sus dos miembros y elegí {{ui:Inglete}} otra vez, y el diálogo se abre con ese inglete. {{ui:Aplicar a similares (n)}} lo copia a cada unión libre entre miembros de los mismos dos perfiles con el mismo ángulo.

## Los campos numerados (mm)

| N.º | Configuración | Predeterminado | Qué hace |
|---|---|---|---|
| 1 | Separación entre las placas (o los extremos de corte) | 0 | Separación libre en la unión. Cada lado conserva la mitad |
| 2 | Placas de extremo, espesor de placa | activado, 20 | Una placa de extremo soldada por todo el contorno de cada extremo cortado. Desmarcar para un corte simple |
| 3 | Filas de pernos, paso entre filas, gramil, fila exterior | 4, 0, 0, desactivado | Paso 0 reparte las filas parejamente entre las alas. Gramil 0 = la mitad del ancho de la placa, al menos 2,4 × el agujero. La fila exterior va en la prolongación de la placa más allá del ala exterior |
| 4 | Placa más allá del ala exterior | 0 | Cuánto llegan las placas más allá del ala exterior, a lo largo del corte |
| 5 | Placa más allá del ala interior | 0 | Lo mismo para el lado interior |
| 6 | Atiesadores de alma, distancia más allá del corte | desactivado, 50 | Un par en cada miembro, a ambos lados del alma, perpendicular al miembro, esta distancia más allá del extremo lejano de su corte |
| 7 | Espesor del atiesador | 10 | |

Bajo {{ui:Pernos}}: diámetro del perno, agujero, calidad y margen de longitud (20, 22, A325, 30), igual que para las placas de extremo. Bajo {{ui:Placas y soldaduras}}: ancho de placa (0 = el ancho del ala), tamaño de soldadura de filete (8) y material de placa (A36).

## Qué obtenés

- **Los cortes.** El extremo de cada miembro se corta en su plano. Su longitud en listas, planos y archivos NC es la **longitud total**, desde su extremo a escuadra hasta el punto más alejado del corte.
- **Las placas** pertenecen a su propio miembro: el conjunto de cada miembro es el miembro, su placa de extremo y sus atiesadores. Los pernos son pernos de obra de la unión: la lista de materiales los cuenta una sola vez, y el plano del conjunto de cada miembro los lista como pernos sueltos.
- **Los planos** muestran los extremos oblicuos y las placas; el plano de taller de un miembro con inglete indica el ángulo de cada corte respecto de la escuadra.
- **Los archivos NC** (DSTV) llevan los ángulos de corte oblicuo en el encabezado, como pide la norma, y contornos que siguen el corte. Verificalos en el visor NC de tu taller antes de cortar, como con cualquier archivo NC.
- **IFC** recorta la extrusión de cada miembro por su plano de corte, para que otros programas muestren el corte real.
- **Marcas:** un miembro con inglete es una pieza distinta de uno de la misma longitud con corte a escuadra. Dos miembros con los mismos cortes comparten una marca, como los dos pares de un cumbrera.

## Bueno saberlo

- El inglete sigue activo. Movés o cambiás el tamaño de cualquiera de los miembros y el corte, las placas y los pernos lo siguen. Si eliminás cualquiera de los miembros, el inglete desaparece, y el extremo del otro miembro vuelve a quedar a escuadra.
- Las advertencias usan los mismos mínimos de EN 1993-1-8 que las otras conexiones (distancia al extremo y al borde 1,2 × agujero, paso 2,2 × agujero, gramil 2,4 × agujero), más filas de pernos demasiado cerca de un ala, placas más angostas que las alas y atiesadores sin lugar.
- Los valores son valores de partida, no un diseño. DetailCraft no verifica la resistencia de la conexión, y no hace cartela, ni inglete soldado con soldadura a tope, ni atiesadores alineados con las alas del otro miembro.
