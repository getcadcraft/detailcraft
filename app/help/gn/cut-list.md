---
title: Lista de cortes
summary: Acomode las vigas, columnas, riostras y zancas en largos de barra comerciales con el ancho del corte, y vea cuántas barras comprar y el desperdicio.
keywords: lista de cortes, anidado, largo comercial, barra, ancho de corte, sierra, sobrante, recorte, desperdicio, combinación, compra, varios
from: 81d06ce5
---

La pestaña {{ui:Cut list}}, debajo de la vista, calcula cómo cortar las piezas lineales del modelo a partir de barras comerciales: cuántas barras de cada largo comprar para cada perfil y material, qué va en cada barra, y el desperdicio.

## Configurar el stock

En la parte superior de la pestaña:

- **Stock lengths (mm):** los largos que se pueden comprar, separados por espacios, por ejemplo `6000 12000`, o barras de 20 ft y 40 ft como `6096 12192`. Hasta ocho.
- **Saw kerf (mm):** lo que ocupa cada corte (3 al inicio).
- **End trim (mm):** corta el extremo de cada barra antes de la primera pieza (0 al inicio).
- **Keep drops from (mm):** un sobrante de al menos este largo vuelve al stock; si es más corto, es desecho (500 al inicio).

Estos valores se guardan en este navegador, igual que las otras [configuraciones](topic:settings).

## Cómo se acomoda

- Cada viga, columna, riostra y zanca de escalera, por marca de pieza y cantidad; las placas se cortan de chapa y no se acomodan aquí.
- Cada perfil y material por separado.
- Primero las piezas más largas, cada una en la primera barra donde entre; una barra nueva empieza con el largo comercial más grande. Después cada barra se compra con el largo comercial más corto que todavía alcance para sus cortes.
- Cada corte ocupa el ancho de corte (ninguno después de un corte que termina exactamente en el final de la barra); cada barra pierde el recorte de extremo.
- Una pieza más larga que todos los largos comerciales aparece en **Longer than any stock**, sin acomodar: empálmela (vea [Empalmes](topic:splices)) o agregue un largo comercial mayor.

## Leerla

- **Summary:** por perfil y material, las piezas, las barras a comprar (por ejemplo "2 × 12000, 1 × 6000"), los metros comprados y usados, y el desperdicio.
- **Bars and their cuts:** cada barra, su largo comercial, sus cortes como marca de pieza y largo, y el sobrante, guardado o desecho.

{{ui:Download CSV}} guarda ambas tablas como `<nombre> cut list.csv`.

DetailCraft no acomoda placas en hojas, y no mezcla perfiles ni materiales en una misma barra.
