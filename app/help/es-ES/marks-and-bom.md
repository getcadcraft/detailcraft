---
title: Comprobar marcas y la lista de materiales
summary: Lea las marcas de pieza y de conjunto que DetailCraft asigna a cada elemento, revise la lista de materiales y descárguela en CSV.
keywords: marcas, numeración, marca de pieza, marca de conjunto, marca de elemento, lista de materiales, listado de material, pesos, lista de tornillos, csv, numeración
from: caa2ee80
---

DetailCraft marca el modelo por sí mismo. No hay ningún comando de numeración ni nada que ejecutar: tras cada cambio, calcula qué piezas son el mismo elemento de acero y les asigna una sola marca.

## Dónde aparecen las marcas

- La lista {{ui:Marcas de pieza}} del panel {{ui:Modelo}}: cada marca con su perfil, longitud y cantidad. Haga clic en una para seleccionar la primera pieza con esa marca.
- El panel {{ui:Propiedades}} de un elemento seleccionado (y la lista **Marcas de pieza** del panel izquierdo): {{ui:Marca de pieza}} y {{ui:Conjunto}}. El encabezado del panel también muestra la marca, por ejemplo "Viga b1".
- La pestaña {{ui:Lista de materiales}}, el CSV, los nombres de los archivos NC, los planos de taller y la exportación IFC (como etiqueta de cada elemento).

## Cómo se marcan las piezas

- **Marcas de pieza:** c para pilares, b para vigas, br para diagonales, st para zancas de escalera, p para placas (incluidas las placas de testa y las placas de base). Después, un número: c1, c2, b1, p1… Cuando las piezas están en más de una fase, el número de fase va delante, por ejemplo 2-b1.
- **Marcas de conjunto:** C, B, BR o P. Un conjunto es un elemento principal y las placas soldadas a él, como una viga con sus dos placas de testa, o un pilar con su placa de base.
- Dos piezas comparten marca cuando tienen el mismo perfil, material y longitud de corte, y los mismos agujeros y rebajes, todo ello dentro de 1 mm, aunque una esté girada de extremo a extremo o boca abajo respecto a la otra.
- La numeración va primero con los pilares, y después con vigas, diagonales y placas; dentro de cada grupo, por nombre de perfil, primero la más larga.

Las reglas completas, incluidos los giros que cuentan en perfiles en U y angulares: [Reglas de marcado](topic:mark-rules).

:::warning
Las marcas se recalculan desde cero tras cada cambio, así que pueden renumerarse. Añadir una pieza, cambiar un perfil o añadir un agujero puede pasar b3 a b4. Considere las marcas definitivas solo cuando el modelo esté terminado, y genere la lista de materiales, los archivos NC y los planos de taller a partir del mismo modelo guardado.
:::

## Leer la lista de materiales

Abra la pestaña {{ui:Lista de materiales}} en la parte inferior. Tiene tres tablas.

**Piezas**, con el peso total de acero en el encabezado:

| Columna | Significado |
|---|---|
| Marca de pieza | Haga clic para seleccionar la primera pieza con esta marca |
| Tipo | viga, pilar, diagonal, zanca o placa |
| Perfil | Por ejemplo W16x26 o PL20x180 |
| Material | El grado que ha definido |
| Longitud (mm) | Longitud de corte, después de las uniones |
| Cantidad | Cuántas hay |
| Peso unitario (kg) | Masa del perfil por metro × longitud |
| Peso total (kg) | Peso unitario × cantidad |

La última fila da la cantidad total y el peso total.

**Conjuntos:** cada marca de conjunto, su pieza principal, todas sus piezas (por ejemplo "b1 + p1 + p1"), la cantidad, el peso unitario y el peso total.

**Tornillos y barras de anclaje:** agrupados por tipo, diámetro, longitud y grado, con una cantidad.

:::note
Los pesos son brutos: no se descuentan agujeros ni rebajes. Tornillos, tuercas, arandelas y soldaduras no están incluidos en el peso del acero.
:::

## Descargarla

Elija {{ui:Descargar CSV}} en la pestaña, o {{ui:Lista}} en el grupo {{ui:Salida}}. El archivo `<name> BOM.csv` contiene las tres tablas una tras otra, cada una bajo su título, con una línea en blanco entre ellas. Se abre en cualquier programa de hojas de cálculo.

## Compruebe antes de enviar

1. Abra la pestaña {{ui:Problemas}} y resuelva cada línea. Una unión que no se pudo construir no añade placa, agujeros ni tornillos, así que la lista de materiales quedaría incompleta.
2. Busque marcas que no esperaba. Dos vigas que cree iguales pero con marcas distintas suelen diferir en un agujero, un rebaje o una longitud de corte; seleccione cada una y compárelas.
3. Guarde el modelo y haga todas las exportaciones desde ese estado guardado.
