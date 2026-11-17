---
title: Crear planos de taller
summary: Una hoja por marca de pieza, creadas todas a la vez: vista previa de cualquiera y descarga de una hoja o de todo el juego en PDF, en A4 a A1 o ANSI B a D, con agujeros, rebajes, cotas y cajetín.
keywords: plano de taller, planos de taller, todas las piezas, lote, juego completo, plano de una pieza, plano de fabricación, pdf, plano de detalle, plano de pieza, imprimir
from: d25fe035
---

DetailCraft crea una hoja por marca de pieza, para cada viga, pilar, diagonal y placa del modelo, todas a la vez: no necesita seleccionarlas una a una. Las piezas idénticas comparten marca, y por tanto comparten hoja. Las hojas se generan en el momento a partir del modelo; no se guardan ni se editan.

## Crear el juego completo

1. Elija {{ui:Plano de taller}} en el grupo {{ui:Salida}}. No hace falta seleccionar nada. Con una pieza seleccionada, la ventana se abre en la hoja de esa pieza. En el panel {{ui:Propiedades}} el mismo botón se llama {{ui:Plano de taller}} para los elementos y {{ui:Plano de la placa}} para las uniones.
2. Se abre una vista previa, titulada con la marca de pieza, por ejemplo "Plano de taller b1". La primera lista junto al título contiene cada marca de pieza con su perfil, longitud y cantidad: elija una para ver su hoja. La segunda lista cambia el tamaño de la hoja; el juego completo se vuelve a generar con él (véase [Planos generales y de conjunto](topic:drawings#choose-the-sheet-size)).
3. Elija {{ui:Descargar todo}} (el botón muestra el número de hojas) para obtener un PDF con una página por marca de pieza, `<name> Shop drawings.pdf`. Cada hoja indica "Hoja 3 de 42" en su cajetín. O elija {{ui:Descargar PDF}} para la hoja que está viendo, `<name> <mark>.pdf`.
4. Cierre la vista previa con la × o con {{key:Esc}}.

Si {{ui:Plano de taller}} está atenuado, el modelo todavía no tiene piezas.

## Qué hay en la hoja

Para un perfil en I:

- **Alzado**, mirando el alma: la pieza con sus rebajes, los agujeros del alma como círculos y los agujeros de las alas como líneas ocultas (de trazos).
- **Planta del ala superior**, vista desde arriba, cuando alguna ala tiene agujeros. Los agujeros del ala inferior se muestran en trazos.
- **Sección** a través del perfil.
- **Cotas:** posiciones de los agujeros encadenadas a lo largo de la pieza más la longitud total, alturas de los agujeros del alma, el gramil y las medidas de los rebajes.
- **Lista de agujeros:** cada grupo de agujeros, por ejemplo "8 x Ø22 en el ala superior".
- **Soldadura**, cuando la pieza tiene placas soldadas.
- **Cajetín:** marca de pieza, marca de conjunto, perfil, material, longitud, cantidad, peso unitario y total, nombre del modelo y fecha.

Para un perfil en U, un angular o un perfil hueco, la hoja es la misma, mirando el alma o el lateral: las paredes de un tubo son líneas ocultas (de trazos), y la sección da el espesor de pared.

Para una placa: la cara de la placa con sus agujeros, y su borde como sección.

## Escalas

La escala se elige de una lista (de 1:1 a 1:200) para que la pieza quepa en la hoja. Una pieza larga y poco profunda quedaría demasiado fina para leerse a una sola escala, así que cuando el canto saldría con menos de 30 mm en papel, el canto se dibuja a una escala mayor que la longitud. El título de la vista lo indica, por ejemplo "longitud 1:20, canto 1:5 (no a una sola escala; mandan las cotas)". Lea siempre las medidas en las cotas, no midiendo la hoja.

## Conviene saber

- La cantidad es el número de piezas con esa marca en el modelo. Las marcas pueden renumerarse tras un cambio; véase [Comprobar marcas y la lista de materiales](topic:marks-and-bom).
- Cada hoja es una sola pieza, sin símbolos de soldadura; los planos de conjunto (con símbolos de soldadura) y los planos de disposición general están en [Planos](topic:drawings). La hoja no se puede editar ni anotar en DetailCraft. Para anotarla, abra el PDF en una aplicación de anotación de PDF, como MarkupCraft.
- El cajetín dice "Versión de laboratorio de DetailCraft — milímetros".
- El texto usa la fuente estándar Helvetica de PDF. Los caracteres fuera del conjunto de Europa occidental se imprimen como "?", y la barra de estado los cuenta.

## Imprimir

Abra el PDF descargado en su visor de PDF e imprímalo al 100 % (sin "ajustar a la página") en papel del tamaño elegido si quiere que se mantengan las escalas indicadas. En una hoja más pequeña, escálela y confíe en las cotas.
