---
title: Revisar marcas y la lista de materiales
summary: Lea las marcas de pieza y de ensamble que DetailCraft asigna a cada pieza, revise la lista de materiales y descárguela como CSV.
keywords: marcas, numeración, marca de pieza, marca de ensamble, marca de pieza, lista de materiales, bom, lista de materiales, pesos, lista de pernos, csv, numeración
from: caa2ee80
---

DetailCraft marca el modelo por sí mismo. No hay ningún comando de numeración ni nada que ejecutar: después de cada cambio determina qué piezas son el mismo elemento de acero y les asigna una sola marca.

## Dónde se muestran las marcas

- La lista {{ui:Marcas de pieza}} del panel {{ui:Modelo}}: cada marca con su perfil, longitud y cantidad. Haga clic en una para seleccionar la primera pieza con esa marca.
- El panel {{ui:Propiedades}} de un miembro seleccionado (y la lista **Marcas de pieza** en el panel izquierdo): {{ui:Marca de pieza}} y {{ui:Ensamble}}. El encabezado del panel también muestra la marca, por ejemplo «Viga b1».
- La pestaña {{ui:Lista de materiales}}, el CSV, los nombres de los archivos NC, los planos de taller y la exportación IFC (como etiqueta de cada elemento).

## Cómo se marcan las piezas

- **Marcas de pieza:** c para columnas, b para vigas, br para contraventeos, st para zancas de escalera, p para placas (incluidas las placas de extremo y las placas base). Después, un número: c1, c2, b1, p1 … Cuando las piezas están en más de una fase, primero va el número de fase, por ejemplo 2-b1.
- **Marcas de ensamble:** C, B, BR o P. Un ensamble es un miembro principal y las placas soldadas a él, como una viga con sus dos placas de extremo, o una columna con su placa base.
- Dos piezas comparten marca cuando tienen el mismo perfil, material y longitud de corte, y los mismos agujeros y recortes, todo dentro de 1 mm, aunque una esté girada de extremo a extremo o boca abajo respecto a la otra.
- La numeración sigue este orden: primero columnas, después vigas, contraventeos y placas; dentro de cada grupo, por nombre de perfil y luego de mayor a menor longitud.

Las reglas completas, incluido qué giros cuentan para canales y ángulos, están en [Reglas de marcado](topic:mark-rules).

:::warning
Las marcas se recalculan después de cada cambio, así que pueden renumerarse. Agregar una pieza, cambiar un perfil o agregar un agujero puede cambiar b3 a b4. Considere las marcas definitivas solo cuando el modelo esté terminado, y genere la lista de materiales, los archivos NC y los planos de taller a partir del mismo modelo guardado.
:::

## Lea la lista de materiales

Abra la pestaña {{ui:Lista de materiales}} en la parte inferior. Tiene tres tablas.

**Piezas**, con el peso total de acero en el encabezado:

| Columna | Significado |
|---|---|
| Marca de pieza | Haga clic para seleccionar la primera pieza con esta marca |
| Tipo | viga, columna, contraviento, zanca o placa |
| Perfil | Por ejemplo W16x26 o PL20x180 |
| Material | El grado que definió |
| Longitud (mm) | Longitud de corte, después de las conexiones |
| Cantidad | Cuántas hay |
| Peso unitario (kg) | Masa del perfil por metro × longitud |
| Peso total (kg) | Peso unitario × cantidad |

La última fila muestra la cantidad y el peso totales.

**Ensambles:** cada marca de ensamble, su pieza principal, todas sus piezas (por ejemplo «b1 + p1 + p1»), cantidad, peso unitario y peso total.

**Pernos y varillas de anclaje:** agrupados por tipo, diámetro, longitud y grado, con su cantidad.

:::note
Los pesos son brutos: no se descuentan los agujeros ni los recortes. Los pernos, tuercas, arandelas y soldaduras no están incluidos en el peso del acero.
:::

## Descárguela

Elija {{ui:Descargar CSV}} en la pestaña, o {{ui:Materiales}} en el grupo {{ui:Salida}}. El archivo `<name> BOM.csv` contiene las tres tablas una tras otra, cada una bajo su título, con una línea en blanco entre ellas. Se abre en cualquier programa de hojas de cálculo.

## Revise antes de enviar

1. Abra la pestaña {{ui:Problemas}} y resuelva cada línea. Una conexión que no pudo construirse no agrega placas, agujeros ni pernos, así que la lista de materiales quedaría incompleta.
2. Busque marcas que no esperaba. Dos vigas que cree iguales pero con marcas distintas suelen diferir en un agujero, un recorte o una longitud de corte; seleccione cada una y compárelas.
3. Guarde el modelo y haga todas las exportaciones a partir de ese estado guardado.
