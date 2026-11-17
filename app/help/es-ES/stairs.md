---
title: Escaleras
summary: Coloque una escalera recta de acero a partir de su desnivel, huella y ancho: dos zancas y placas de peldaño, en un único conjunto soldado.
keywords: escalera, escaleras, zanca, peldaño, contrahuella, huella, narizal, tramo, escalera de acero, ibc 1011, blondel
from: 62fa3845
---

Una escalera recta de acero: dos zancas (perfiles en U con las alas hacia dentro, o pletinas de canto) y una placa de peldaño en cada escalón, soldadas entre ellas. DetailCraft calcula el número de contrahuellas a partir del desnivel, las comprueba con los límites del código de edificación y hace de la escalera un único conjunto de taller.

## Colocar una escalera

1. Elija {{ui:Escalera}} en el grupo {{ui:Colocar}}, o pulse {{key:S}}.
2. Configure la escalera a la derecha: el **sentido de subida** (0° sube a lo largo de +x, 90° a lo largo de +y), el **desnivel** (0 = hasta el siguiente nivel), la **huella**, el **ancho libre** entre zancas, la **contrahuella máxima permitida**, la **zanca**, el **espesor de la placa de peldaño**, el **narizal** y el material.
3. Haga clic en una intersección de ejes: ese es el pie de la primera contrahuella, sobre el eje de la escalera.

La barra de estado indica cuántas contrahuellas ha creado. Seleccione la escalera (haga clic en una zanca o un peldaño) para cambiar cualquiera de sus ajustes, su posición o su fase; las propiedades también muestran las contrahuellas, los peldaños, la longitud en planta, la inclinación y 2 × contrahuella + huella.

## Lo que calcula DetailCraft

- **Contrahuellas.** Las mínimas que mantienen cada contrahuella igual o por debajo de la máxima permitida: un desnivel de 3000 mm con 178 mm o menos da 17 contrahuellas de 176.5 mm. Hay un peldaño menos que contrahuellas (la planta superior es el último escalón).
- **Peldaños.** Una placa de huella + narizal de profundidad (280 + 25 = PL6x305 por defecto) y tan larga como el ancho libre, con su cara superior a la altura de cada contrahuella, y su borde frontal (el narizal) delante de la línea de contrahuella.
- **Zancas.** Con la inclinación de la escalera, desde donde se unen con el forjado inferior hasta donde se unen con el superior, justo fuera del ancho libre, con su borde superior 50 mm por encima de la línea de narizales. Las alas de un perfil en U miran hacia el interior de la escalera; una pletina como PL12x250 se apoya de canto.
- **Soldaduras.** Cada peldaño a ambas zancas. Los peldaños y la zanca derecha se sueldan a la zanca izquierda, así que la escalera tiene una sola marca de conjunto (ST1) y su propio plano de conjunto; las zancas reciben marcas de pieza st…, y los peldaños, p….
- **Comprobaciones.** Avisos cuando una contrahuella queda fuera de 4 a 7 in. (102 a 178 mm) o la huella es menor de 11 in. (279 mm), los límites de IBC 2021, sección 1011.5.2; cuando 2 × contrahuella + huella queda fuera de 600 a 650 mm (una regla de confort habitual); y cuando la zanca es demasiado baja para soportar los peldaños. Un perfil de zanca desconocido impide construir la escalera.

## Conviene saber

- Mover, girar, reflejar, copiar, pegar, borrar y las fases funcionan en una escalera como en un elemento. Un giro cambia el sentido de subida; una simetría la envía en sentido contrario.
- Las zancas se exportan a IFC como IfcMember y los peldaños como IfcPlate; ambos van a los archivos NC y a la lista de materiales. La comprobación de interferencias deja en paz las piezas propias de una escalera (están soldadas entre sí).
- Esta escalera sencilla es un solo tramo con placas de peldaño. Para descansillos, pasamanos con balaustres, peldaños de bandeja plegada o de rejilla, un conjunto de normas a su elección, una lista de corte y los planos de agujeros de las zancas, marque {{ui:Usar el generador de escaleras de acero}} en la herramienta {{ui:Escalera}} (véase Generador de escaleras de acero).
- Las zancas se cortan a escuadra: sus cortes de extremo contra los forjados no se realizan.
- DetailCraft no calcula la escalera: las zancas y los peldaños no se comprueban a resistencia ni a flecha.
