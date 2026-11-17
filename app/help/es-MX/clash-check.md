---
title: Revisar interferencias
summary: Encuentre miembros, placas y zapatas que se meten unos en otros, dejando fuera las partes que una conexión pretende unir, y vaya a cada interferencia.
keywords: interferencia, revisión de interferencias, colisión, solapamiento, intersección, interferencia dura, coordinación, revisar modelo
from: 04d72d3b
---

Abra la pestaña {{ui:Interferencias}} bajo la vista y elija {{ui:Revisar ahora}}. DetailCraft revisa cada par de partes en las fases mostradas: acero contra acero, y acero contra una zapata. La pestaña lista cada interferencia, la más profunda primero, con:

- las dos partes, por marca de pieza (o marca de zapata) y perfil;
- **Solapamiento (mm)**: qué tan dentro de la otra parte está un punto de una, hasta la cara más cercana;
- **Cerca**: la intersección de ejes y el nivel donde está, o sus coordenadas;
- {{ui:Mostrar}}: selecciona ambas partes y lleva el lugar al centro de la vista.

El título de la pestaña muestra cuántas interferencias encontró la última revisión. La revisión no se ejecuta sola: después de cambiar el modelo, la lista lo indica, y {{ui:Revisar ahora}} la ejecuta de nuevo.

## Lo que no es una interferencia

- Partes que solo se tocan: una placa contra un patín, una placa base sobre su zapata, dos miembros de extremo a extremo. **Tolerancia (mm)** fija cuánto pueden meterse dos partes una en otra antes de contar (1 mm al inicio; hasta 50).
- Partes que una conexión une: una placa extrema con su viga y con el patín de columna al que está atornillada, la viga y la columna de esa unión, una placa base con su columna, las placas de un empalme con ambas piezas, un contraventeo con su placa de nudo (la ranura de un tubo no se corta en el modelo). La conexión pretende que se encuentren.
- La llave de cortante de una placa base en la zapata bajo ella (queda dentro de un hueco de mortero).
- Pernos y varillas de anclaje (pasan por agujeros) y varillas de refuerzo.
- Partes en fases ocultas. Vea [Fases](topic:phases).

Un contraventeo o viga que entra en una columna sin conexión entre ellos **sí** es una interferencia: esa unión todavía necesita una conexión. El contraventeo del marco de ejemplo lo muestra: no tiene placa de nudo. Selecciónelo y elija {{ui:Placa de nudo}} ([Placas de nudo de contraventeos](topic:brace-gussets)) y sus interferencias desaparecen.

## Bueno saber

- El solapamiento mide la profundidad dentro del material, así que un miembro que se mete en el alma o el patín delgado de una columna muestra solo unos pocos milímetros aunque entre mucho.
- Las partes se revisan tal como están cortadas: se toman en cuenta los recortes y el corte de una viga en sus placas extremas. Los agujeros no.
