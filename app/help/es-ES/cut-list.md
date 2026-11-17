---
title: Lista de corte
summary: Agrupe las vigas, pilares, riostras y zancas en longitudes comerciales con ancho de corte, y vea cuántas barras comprar y el desperdicio.
keywords: lista de corte, optimización de corte, anidado, longitud comercial, barra, ancho de corte, sierra, recorte, retal, desperdicio, combinar, compra, varias
from: 81d06ce5
---

La pestaña {{ui:Lista de corte}}, bajo la vista, calcula cómo cortar las piezas lineales del modelo a partir de barras comerciales: cuántas barras de cada longitud comprar para cada perfil y material, qué va en cada barra y el desperdicio.

## Definir las barras comerciales

En la parte superior de la pestaña:

- **Longitudes comerciales (mm):** las longitudes que puede comprar, separadas por espacios, por ejemplo `6000 12000`, o barras de 20 ft y 40 ft como `6096 12192`. Hasta ocho.
- **Ancho de corte (mm):** lo que ocupa cada corte (3 para empezar).
- **Recorte de extremo (mm):** se corta el extremo de cada barra antes de la primera pieza (0 para empezar).
- **Conservar recortes desde (mm):** un recorte de al menos esta longitud vuelve al almacén; si es más corto, es desecho (500 para empezar).

Estos valores se guardan en este navegador, como los demás [ajustes](topic:settings).

## Cómo optimiza

- Cada viga, pilar, riostra y zanca de escalera, por marca de pieza y número; las placas se cortan de chapa y no se optimizan aquí.
- Cada perfil y material por separado.
- Las piezas más largas primero, cada una en la primera barra donde quepa; una barra nueva empieza con la longitud comercial más larga. Después, cada barra se compra con la longitud comercial más corta que aún admite sus cortes.
- Cada corte consume el ancho de corte (ninguno después de un corte que termina exactamente en el extremo de la barra); cada barra pierde el recorte de extremo.
- Una pieza más larga que todas las longitudes comerciales aparece en **Más largo que cualquier longitud comercial**, sin optimizar: empálmela (véase [Empalmes](topic:splices)) o añada una longitud comercial mayor.

## Leer la lista

- **Resumen:** por perfil y material, las piezas, las barras que comprar (por ejemplo "2 × 12000, 1 × 6000"), los metros comprados y usados, y el desperdicio.
- **Barras y sus cortes:** cada barra, su longitud comercial, sus cortes como marca de pieza y longitud, y el recorte, conservado o desecho.

{{ui:Descargar CSV}} guarda ambas tablas como `<nombre> lista de corte.csv`.

DetailCraft no optimiza placas en chapas y no mezcla perfiles ni materiales en una misma barra.
