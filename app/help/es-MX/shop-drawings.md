---
title: Generar planos de taller
summary: Un plano por marca de pieza, generados todos a la vez: vea cualquiera de ellos y descargue una hoja o el juego completo como PDF en A4 a A1 o ANSI B a D, con agujeros, recortes, cotas y cajetín.
keywords: plano de taller, planos de taller, todas las piezas, lote, juego completo, plano de pieza individual, plano de fabricación, pdf, plano de detalle, plano de pieza, imprimir
from: d25fe035
---

DetailCraft genera una hoja por marca de pieza, para cada viga, columna, contraviento y placa del modelo, todo de una vez: no necesita seleccionarlas una por una. Las piezas idénticas comparten marca y, por lo tanto, comparten hoja. Las hojas se generan al momento a partir del modelo; no se guardan ni se editan.

## Generar el juego completo

1. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. No es necesario seleccionar nada. Si hay una pieza seleccionada, la ventana se abre en la hoja de esa pieza. En el panel {{ui:Propiedades}}, el mismo botón se llama {{ui:Plano de taller}} para miembros y {{ui:Plano de placa}} para conexiones.
2. Se abre una vista previa, titulada con la marca de pieza, por ejemplo «Plano de taller b1». La primera lista junto al título contiene cada marca de pieza con su perfil, longitud y cantidad: elija una para ver su hoja. La segunda lista cambia el tamaño de la hoja; el juego completo se genera de nuevo con ese tamaño (vea [Planos de conjunto y de arreglo general](topic:drawings#choose-the-sheet-size)).
3. Elija {{ui:Descargar todo}} (el botón muestra el número de hojas) para obtener un solo PDF con una página por marca de pieza, `<name> Shop drawings.pdf`. Cada hoja dice «Hoja 3 de 42» en su cajetín. O elija {{ui:Descargar PDF}} para la hoja que está viendo, `<name> <mark>.pdf`.
4. Cierre la vista previa con la × o con {{key:Esc}}.

Si {{ui:Plano de taller}} aparece atenuado, el modelo todavía no tiene piezas.

## Qué contiene la hoja

Para un perfil I:

- **Elevación**, vista desde el alma: la pieza con sus recortes en muesca, los agujeros del alma como círculos y los agujeros de patín como líneas ocultas (discontinuas).
- **Planta del patín superior**, vista desde arriba, cuando algún patín tiene agujeros. Los agujeros del patín inferior se muestran discontinuos.
- **Sección** a través del perfil.
- **Cotas:** posiciones de agujeros en cadena a lo largo de la pieza más la longitud total, alturas de los agujeros del alma, el gramil y las dimensiones de los recortes.
- **Lista de agujeros:** cada grupo de agujeros, por ejemplo «8 x Ø22 en el patín superior».
- **Soldadura**, cuando la pieza tiene placas soldadas.
- **Cajetín:** marca de pieza, marca de ensamble, perfil, material, longitud, cantidad, peso unitario y total, nombre del modelo y fecha.

Para un canal, un ángulo o una sección hueca, la hoja es igual, vista desde el alma o desde el lado: las paredes de un tubo se muestran como líneas ocultas (discontinuas), y la sección indica el espesor de pared.

Para una placa: la cara de la placa con sus agujeros, y su borde como sección.

## Escalas

La escala se elige de una lista (de 1:1 hasta 1:200) para que la pieza quepa en la hoja. Una pieza larga y poco peraltada se vería demasiado delgada a una sola escala, así que cuando el peralte saldría en el papel con menos de 30 mm, se dibuja con una escala mayor que la longitud. El título de la vista lo indica, por ejemplo «longitud 1:20, peralte 1:5 (no a una sola escala; mandan las cotas)». Lea siempre las medidas de las cotas, no midiendo la hoja.

## Conviene saber

- La cantidad es el número de piezas con esa marca en el modelo. Las marcas pueden renumerarse después de un cambio; vea [Revisar marcas y la lista de materiales](topic:marks-and-bom).
- Cada hoja es una sola pieza, sin símbolos de soldadura; los planos de ensamble (con símbolos de soldadura) y los planos de arreglo general están en [Planos](topic:drawings). La hoja no se puede editar ni anotar en DetailCraft. Para marcarla, abra el PDF en una app de marcado de PDF como MarkupCraft.
- El cajetín dice «compilación de laboratorio de DetailCraft — milímetros».
- El texto usa la fuente estándar Helvetica de PDF. Los caracteres fuera del conjunto de caracteres de Europa occidental se imprimen como «?», y la barra de estado los cuenta.

## Imprímalo

Abra el PDF descargado en su visor de PDF e imprímalo al 100 % (sin «ajustar a la página») en papel del tamaño elegido, si desea que se mantengan las escalas indicadas. En una hoja más pequeña, escálelo y confíe en las cotas.
