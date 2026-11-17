---
title: Placas de nudo para contraventeos
summary: Conecte el extremo de un contraviento a una columna o viga con una placa de nudo: ángulos y soleras atornillados, tubos ranurados y soldados.
keywords: placa de nudo, gusset, placa de nudo, contraviento, arriostramiento vertical, contraviento de ángulo, solera, fleje, contraviento HSS, placa de cuchilla, tubo ranurado, conectar
from: 22f6598d
---

Una placa de nudo de contraviento es una placa soldada en taller a la columna (o viga) donde llega el contraviento, en el plano del contraviento. DetailCraft recorta el contraviento para que quede libre de todo en la junta, coloca y dimensiona la placa de nudo, y une el contraviento a ella: un **ángulo** o una **solera** con una línea de pernos, o un **tubo** (HSS cuadrado, rectangular o redondo) ranurado sobre la placa de nudo y soldado.

## Dónde funciona

- El extremo del contraviento queda sobre la línea de una columna o una viga (dentro de 1 mm), y el contraviento no es casi paralelo a esa línea. Una columna es el apoyo cuando existe; si no, es la viga.
- La placa de nudo queda en el plano del contraviento y en la línea del apoyo. Un **ángulo** debe tener un ala en ese plano, y una **solera** debe tener su cara en él: gire el contraviento (su {{ui:Rotación (°)}}) hasta lograrlo. Si las alas del ángulo están a 45° del plano, DetailCraft lo indica y no construye nada.
- Los perfiles I y los canales como contraventeos no se conectan.

## Agregar placas de nudo

1. Seleccione uno o más contraventeos.
2. Elija {{ui:Placa de nudo}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada extremo de los contraventeos seleccionados que llegue a una columna o viga y no tenga placa de nudo recibe una.

Seleccione una placa de nudo (haga clic en la placa) para cambiar sus ajustes. {{ui:Aplicar a similares (n)}} la copia a cada extremo libre de contraviento con los mismos perfiles de contraviento y de apoyo.

## Lo que calcula DetailCraft

- **Recorte.** El contraviento se acorta en ese extremo hasta que sus esquinas queden libres, por la {{ui:Holgura del contraviento}} (25), de cada miembro de la junta (a su lado, o más allá de su extremo cuando el miembro termina ahí) y de una placa base bajo la columna.
- **Pernos (ángulos, soleras).** {{ui:Pernos}} (3) en una línea a lo largo del contraviento, el primero a {{ui:Distancia de los pernos al extremo}} (40) del extremo cortado, con un {{ui:Paso de pernos}} (75). En un ángulo atraviesan el ala en el plano de la placa de nudo, a {{ui:Gramil de pernos}} desde el talón (0 = en medio del ala); en una solera, sobre su eje central (o desplazados del eje según el gramil). Longitud de sujeción de pernos = ala o solera + placa de nudo.
- **La placa de nudo.** Un rectángulo: desde la cara del apoyo hacia afuera, más allá del último perno la distancia al extremo, y a lo largo del apoyo lo que requieran los pernos. Queda contra la cara posterior del ala del ángulo (o contra la cara de la solera). En un tubo, corre por la parte media del tubo, bajo el {{ui:Traslape del tubo sobre la placa de nudo}} (200) del tubo, con espacio para las soldaduras.
- **Juntas.** En la base de una columna, la placa de nudo baja hasta la placa base. Donde una viga cruza la junta (un contraviento que sube a una esquina viga-columna), la placa de nudo queda por debajo o por encima de la viga. Si con eso los pernos o el traslape quedan sin su distancia al extremo, DetailCraft advierte.
- **Soldaduras.** La placa de nudo a su apoyo, por ambos lados. El tubo a la placa de nudo, con cuatro líneas a lo largo del traslape.

## Conviene saber

- La placa de nudo pertenece al ensamble del apoyo (soldada en taller). El contraviento sale con sus agujeros perforados y va a su propio archivo NC.
- La ranura de un tubo no se corta en el modelo; la [verificación de interferencias](topic:clash-check) deja fuera el contraviento y su placa de nudo.
- Todavía no se generan placas de nudo soldadas a la vez a viga y columna, esquinas con chaflán ni la disposición por punto de trabajo de una conexión Uniform Force Method. La placa de nudo no se suelda a una viga con la que toca.
- DetailCraft no diseña la placa de nudo ni los pernos (no hay verificaciones de resistencia); las advertencias son de separación y de ajuste.
