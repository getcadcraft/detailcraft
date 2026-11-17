---
title: Cartelas de diagonal
summary: Una el extremo de una diagonal a un pilar o una viga con una cartela: angulares y pletinas atornillados, tubos ranurados y soldados.
keywords: cartela, placa de cartela, diagonal, arriostramiento, arriostramiento vertical, diagonal de angular, pletina, fleje, diagonal HSS, placa de cuchillo, tubo ranurado, conectar
from: 22f6598d
---

Una cartela de diagonal es una placa soldada en taller al pilar (o a la viga) donde llega la diagonal, en el plano de esta. DetailCraft recorta la diagonal en ese extremo para dejar libres todos los elementos de la unión, sitúa y dimensiona la cartela, y une la diagonal a ella: un **angular** o una **pletina** con una línea de tornillos, o un **tubo** (HSS cuadrado, rectangular o redondo) ranurado sobre la cartela y soldado.

## Dónde funciona

- El extremo de la diagonal está sobre la línea de un pilar o una viga (con 1 mm de tolerancia), y la diagonal no es casi paralela a esa línea. Si hay pilar como apoyo, se usa; si no, la viga.
- La cartela está en el plano de la diagonal y en la línea del apoyo. Un **angular** debe tener un ala en ese plano, y una **pletina** su cara: gire la diagonal ({{ui:Giro (°)}}) hasta que lo cumpla. Con las alas del angular a 45° del plano, DetailCraft lo indica y no construye nada.
- Los perfiles en I y en U como diagonales no se conectan.

## Añadir cartelas

1. Seleccione una o varias diagonales.
2. Elija {{ui:Cartela}} en el menú {{ui:Más}} del grupo {{ui:Conectar}}.
3. Cada extremo de las diagonales seleccionadas que llegue a un pilar o una viga y no tenga cartela recibe una.

Seleccione una cartela (haga clic en la placa) para cambiar sus ajustes. {{ui:Aplicar a similares (n)}} la copia a cada extremo libre de diagonal con los mismos perfiles de diagonal y de apoyo.

## Lo que calcula DetailCraft

- **Recorte.** La diagonal se acorta en ese extremo hasta que sus esquinas quedan libres, según la {{ui:Holgura de la diagonal}} (25), respecto de cada elemento de la unión (a su lado, o más allá de su extremo cuando el elemento termina ahí) y de una placa de base bajo el pilar.
- **Tornillos (angulares, pletinas).** {{ui:Tornillos}} (3) en una línea a lo largo de la diagonal, el primero a {{ui:Distancia al extremo del tornillo}} (40) del extremo cortado, con {{ui:Paso de tornillos}} (75). En un angular atraviesan el ala situada en el plano de la cartela, a {{ui:Gramil de tornillos}} desde el talón (0 = el centro del ala); en una pletina, sobre su línea central (o desplazados de ella según el gramil). Agarre del tornillo = el ala o la pletina + la cartela.
- **La cartela.** Un rectángulo: desde la cara del apoyo hacia fuera, más allá del último tornillo la distancia al extremo, y a lo largo del apoyo lo que necesiten los tornillos. Se apoya en el dorso del ala del angular (o en la cara de la pletina). En un tubo atraviesa el centro del tubo, con el {{ui:Solape del tubo sobre la cartela}} (200) del tubo, dejando espacio para las soldaduras.
- **Uniones.** En la base de un pilar, la cartela baja hasta la placa de base. Cuando una viga cruza la unión (una diagonal que sube hasta una esquina viga-pilar), la cartela queda por debajo o por encima de la viga. Si con eso los tornillos o el solape no tienen su distancia al extremo, DetailCraft avisa.
- **Soldaduras.** La cartela con su apoyo, por ambos lados. Un tubo con la cartela, en cuatro líneas a lo largo del solape.

## Conviene saber

- La cartela pertenece al conjunto del apoyo (soldada en taller). La diagonal se suministra con sus agujeros taladrados y va a su propio archivo NC.
- La ranura de un tubo no se corta en el modelo; la [comprobación de interferencias](topic:clash-check) deja la diagonal y su cartela sin tocar.
- La cartela no se suelda a una viga con la que toque. Las cartelas soldadas a la vez a viga y pilar, las esquinas biseladas y la disposición en punto de trabajo de una unión Uniform Force Method aún no están hechas.
- DetailCraft no diseña la cartela ni los tornillos (sin comprobaciones de resistencia); los avisos son de separación y ajuste.
