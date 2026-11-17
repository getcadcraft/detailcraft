---
title: Comprobar interferencias
summary: Encuentre miembros, placas y zapatas que se introducen unos en otros, dejando fuera las piezas que una unión pretende unir, y vaya a cada interferencia.
keywords: interferencia, comprobación de interferencias, colisión, solapamiento, interferencia dura, coordinación, comprobar modelo
from: 04d72d3b
---

Abra la pestaña {{ui:Interferencias}} bajo la vista y elija {{ui:Comprobar ahora}}. DetailCraft examina cada par de piezas en las fases mostradas: acero contra acero, y acero contra zapata. La pestaña lista cada interferencia, empezando por la más profunda, con:

- las dos piezas, por marca de pieza (o marca de zapata) y perfil;
- **Solapamiento (mm)**: cuánto se mete un punto de una pieza dentro de la otra, hasta la cara más cercana;
- **Cerca**: el nudo de rejilla y el nivel donde está, o sus coordenadas;
- {{ui:Mostrar}}: selecciona ambas piezas y lleva el lugar al centro de la vista.

El título de la pestaña indica cuántas interferencias encontró la última comprobación. La comprobación no se ejecuta sola: después de cambiar el modelo, la lista lo indica, y {{ui:Comprobar ahora}} la vuelve a ejecutar.

## Lo que no es una interferencia

- Piezas que solo se tocan: una placa contra un ala, una placa de base sobre su zapata, dos miembros extremo con extremo. **Tolerancia (mm)** fija cuánto pueden introducirse dos piezas una en otra antes de contar (1 mm por defecto; hasta 50).
- Piezas que una unión une: una placa de testa con su viga y con el ala del pilar a la que va atornillada, la viga y el pilar de esa unión, una placa de base con su pilar, las placas de un empalme con sus dos tramos, una diagonal con su cartela (la ranura de un tubo no se corta en el modelo). La unión pretende que se encuentren.
- La llave de cortante de una placa de base en la zapata bajo ella (se asienta en un hueco de mortero).
- Tornillos y barras de anclaje (atraviesan orificios) y armaduras.
- Piezas en fases ocultas. Véase [Fases](topic:phases).

Una diagonal o una viga que entra en un pilar sin unión entre ambos **sí** es una interferencia: esa junta todavía necesita una unión. La diagonal del marco de ejemplo lo muestra: no tiene cartela. Selecciónela y elija {{ui:Cartela}} ([Cartelas de diagonales](topic:brace-gussets)), y sus interferencias desaparecen.

## Conviene saber

- El solapamiento mide la profundidad dentro del material, así que un miembro que entra en el alma o en el ala delgada de un pilar muestra solo unos pocos milímetros aunque entre mucho.
- Las piezas se comprueban tal como se cortan: se tienen en cuenta las entallas y el recorte de una viga en sus placas de testa. Los agujeros no.
