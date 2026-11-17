---
title: Lista de corte
summary: Acomode las vigas, columnas, contravientos y zancas en longitudes comerciales de barra con el espesor del corte de sierra, y vea cuántas barras comprar y el desperdicio.
keywords: lista de corte, anidado, longitud comercial, barra, espesor de corte, sierra, sobrante, recorte, desperdicio, combinar, compra, varios
from: 81d06ce5
---

La pestaña {{ui:Lista de corte}}, debajo de la vista, calcula cómo cortar las piezas lineales del modelo a partir de barras comerciales: cuántas barras de cada longitud comprar para cada perfil y material, qué va en cada barra y el desperdicio.

## Definir las existencias

En la parte superior de la pestaña:

- **Longitudes comerciales (mm):** las longitudes que puede comprar, separadas por espacios, por ejemplo `6000 12000`, o barras de 20 ft y 40 ft como `6096 12192`. Hasta ocho.
- **Espesor del corte de sierra (mm):** lo que ocupa cada corte (3 al inicio).
- **Recorte de extremo (mm):** se corta el extremo de cada barra antes de la primera pieza (0 al inicio).
- **Conservar sobrantes desde (mm):** un sobrante de al menos esta longitud regresa a existencias; si es más corto, es desperdicio (500 al inicio).

Estos valores se guardan en este navegador, como las demás [configuraciones](topic:settings).

## Cómo acomoda

- Cada viga, columna, contraviento y zanca de escalera, por marca de pieza y cantidad; las placas se cortan de lámina y no se acomodan aquí.
- Cada perfil y material por separado.
- Primero las piezas más largas, cada una en la primera barra donde quepa; una barra nueva empieza con la longitud comercial más larga. Después, cada barra se compra con la longitud comercial más corta que aún alcance para sus cortes.
- Cada corte ocupa el espesor de sierra (ninguno después de un corte que termina exactamente en el extremo de la barra); cada barra pierde el recorte de extremo.
- Una pieza más larga que todas las longitudes comerciales aparece en **Más larga que cualquier existencia**, sin acomodar: haga un empalme (vea [Empalmes](topic:splices)) o agregue una longitud comercial mayor.

## Leer los resultados

- **Resumen:** por perfil y material, las piezas, las barras a comprar (por ejemplo "2 × 12000, 1 × 6000"), los metros comprados y usados, y el desperdicio.
- **Barras y sus cortes:** cada barra, su longitud comercial, sus cortes como marca de pieza y longitud, y el sobrante, conservado o desperdicio.

{{ui:Descargar CSV}} guarda ambas tablas como `<name> cut list.csv`.

DetailCraft no acomoda placas en láminas, y no mezcla perfiles ni materiales en una barra.
