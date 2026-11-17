---
title: Escaleras
summary: Coloque una escalera de acero recta a partir de su desnivel, huella y ancho: dos zancas y placas de peldaño, en un solo ensamble soldado.
keywords: escalera, escaleras, staircase, zanca, peldaño, contrahuella, nariz, tramo, escalera de acero, ibc 1011, blondel
from: 62fa3845
---

Una escalera recta de acero: dos zancas (canales con sus patines hacia el interior, o soleras de canto) y una placa de peldaño en cada escalón, soldadas entre ellas. DetailCraft calcula el número de contrahuellas a partir del desnivel, las verifica contra los límites del reglamento de construcción y hace que la escalera sea un solo ensamble de taller.

## Colocar una escalera

1. Elija {{ui:Escalera}} en el grupo {{ui:Colocar}}, o presione {{key:S}}.
2. Defina la escalera en el panel de la derecha: la **dirección de subida** (0° sube a lo largo de +x, 90° a lo largo de +y), el **desnivel** (0 = hasta el siguiente nivel), la **huella**, el **ancho libre** entre zancas, la **contrahuella más alta permitida**, la **zanca**, el **espesor de la placa de peldaño**, la **nariz** y el material.
3. Haga clic en una intersección de rejilla: ese es el pie de la primera contrahuella, sobre el eje de la escalera.

La barra de estado indica cuántas contrahuellas generó. Seleccione la escalera (haga clic en una zanca o en un peldaño) para cambiar cualquiera de sus ajustes, su posición o su fase; las propiedades también muestran las contrahuellas, los peldaños, el recorrido, la inclinación y 2 × contrahuella + huella.

## Lo que calcula DetailCraft

- **Contrahuellas.** Las mínimas que mantengan cada contrahuella igual o por debajo de la más alta permitida: un desnivel de 3000 mm con 178 mm o menos da 17 contrahuellas de 176.5 mm. Hay un peldaño menos que contrahuellas (el piso superior es el último escalón).
- **Peldaños.** Una placa de huella + nariz de profundidad (280 + 25 = PL6x305 por defecto) y tan larga como el ancho libre, con su cara superior a la altura de cada contrahuella, y su borde frontal (la nariz) delante de la línea de la contrahuella.
- **Zancas.** Con la inclinación de la escalera, desde donde encuentran el piso inferior hasta donde encuentran el superior, justo fuera del ancho libre, con su borde superior 50 mm por encima de la línea de las narices. Los patines de un canal miran hacia el interior de la escalera; una solera como PL12x250 va de canto.
- **Soldaduras.** Cada peldaño a ambas zancas. Los peldaños y la zanca derecha se sueldan a la zanca izquierda, así que la escalera recibe una sola marca de ensamble (ST1) y su propio plano de ensamble; las zancas reciben marcas de pieza st…, y los peldaños, p….
- **Verificaciones.** Advertencias cuando una contrahuella queda fuera de 4 a 7 in. (102 a 178 mm) o la huella es menor de 11 in. (279 mm), los límites de IBC 2021, sección 1011.5.2; cuando 2 × contrahuella + huella queda fuera de 600 a 650 mm (una regla de confort habitual); y cuando la zanca es demasiado baja para soportar los peldaños. Un perfil de zanca desconocido impide construir la escalera.

## Conviene saber

- Desplazar, girar, aplicar simetría, copiar, pegar, borrar y las fases funcionan en una escalera igual que en un miembro. Un giro cambia la dirección de subida; una simetría la envía en sentido reflejado.
- Las zancas se exportan a IFC como IfcMember y los peldaños como IfcPlate; ambos van a los archivos NC y a la lista de materiales. La verificación de interferencias deja fuera las piezas propias de la escalera (están soldadas entre sí).
- Esta escalera sencilla es un solo tramo con peldaños de placa. Para descansos, pasamanos con balaustres, peldaños de charola doblada o de rejilla de piso, un conjunto de reglas que usted elija, una lista de corte y los planos de agujeros de la zanca, marque {{ui:Usar el generador de escaleras de acero}} en la herramienta Escalera (ver Generador de escaleras de acero).
- Las zancas se cortan a escuadra: sus cortes de extremo contra los pisos no se realizan.
- DetailCraft no diseña la escalera: las zancas y los peldaños no se verifican por resistencia ni por deflexión.
