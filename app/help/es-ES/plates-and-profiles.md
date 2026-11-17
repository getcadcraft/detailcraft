---
title: Colocar placas y añadir perfiles a medida
summary: Coloque placas sueltas por espesor y ancho, y defina sus propias secciones de tipo I, U, cantonera, tubo o pletina.
keywords: placa, plana, perfil a medida, perfil de usuario, paramétrico, sección, forma, sección transversal, pl
from: c24c3b51
---

## Colocar una placa

Una placa se coloca como una viga: va entre dos intersecciones, con su ancho transversal y su espesor hacia arriba.

1. Elija {{ui:Placa}} en el grupo {{ui:Colocar}}, o pulse {{key:P}}.
2. En el panel {{ui:Propiedades}}, defina {{ui:Espesor (mm)}} y {{ui:Ancho (mm)}}. Por defecto es 20 x 200 en A36.
3. Ajuste {{ui:Material}} y {{ui:Giro (°)}} si hace falta. Un giro de 90 pone la placa de canto.
4. Haga clic en dos intersecciones, o use el formulario {{ui:Añadir por rejilla}}.

El nombre de perfil de la placa se escribe `PL<espesor>x<ancho>`, por ejemplo PL20x200. Su longitud es la distancia entre los dos puntos.

Para cambiar el tamaño de una placa colocada, selecciónela y cambie {{ui:Espesor (mm)}} o {{ui:Ancho (mm)}}.

Las placas que usted coloca son piezas independientes (marca p, conjunto P). Las placas de extremo y las placas base que crean las conexiones también son placas, pero se cambian a través de su conexión; consulte [Placas de extremo](topic:end-plates).

## Añadir un perfil a medida

Cuando la sección que necesita no está en el catálogo, créela a partir de sus dimensiones. Un perfil a medida pertenece al modelo y se guarda con él. Para usarlo en todos los modelos nuevos, guárdelo en {{ui:Mis perfiles}}, como se describe en «Guardar un perfil para modelos nuevos» más abajo.

1. En el panel {{ui:Modelo}} de la izquierda, abra {{ui:Perfil a medida}}.
2. Escriba un {{ui:Nombre}}, por ejemplo `W8x18-custom` o `RHS 120x80x5`. No puede ser un nombre del catálogo ni parecer un nombre de placa.
3. Elija una {{ui:Forma}}: {{ui:Perfil en I}}, {{ui:Perfil en U}}, {{ui:Cantonera de lados iguales}}, {{ui:Tubo rectangular}}, {{ui:Tubo redondo}} o {{ui:Pletina}}.
4. Rellene las dimensiones que aparecen, todas en milímetros:

| Forma | Dimensiones |
|---|---|
| Perfil en I | Canto d, ancho de ala bf, espesor de alma tw, espesor de ala tf, radio de acuerdo r (puede ser 0) |
| Perfil en U | Canto d, ancho de ala bf, espesor de alma tw, espesor de ala tf (esquinas rectas) |
| Cantonera de lados iguales | Ancho b (cada ala), espesor t |
| Tubo rectangular | Altura h, ancho b, espesor t (radio exterior de esquina 2t) |
| Tubo redondo | Diámetro D, espesor t |
| Pletina | Ancho b, espesor t |

5. Deje marcado {{ui:Guardar en Mis perfiles}} para tenerlo en todos los modelos nuevos (véase abajo), o desmárquelo para conservarlo solo en este modelo.
6. Elija {{ui:Añadir perfil}}.

La barra de estado indica «Perfil "…" añadido; está en todas las listas de perfiles, en la sección A medida». Aparece en la lista bajo el formulario y al final de todas las listas de {{ui:Perfil}}.

DetailCraft comprueba que la forma pueda existir. Verá mensajes como «El alma y las alas no caben dentro del canto y el ancho.», «El radio de acuerdo es demasiado grande para el ala.» o «El espesor de pared es demasiado grande.» Corrija los números y elija {{ui:Añadir perfil}} de nuevo.

### Qué obtienen los perfiles a medida

- Masa por metro a partir del área × 7850 kg/m³ (los tamaños del catálogo usan el peso publicado).
- Los perfiles en I a medida reciben agujeros, recortes, placas de extremo, archivos NC y planos de taller, como los perfiles en I del catálogo.
- Las pletinas a medida se comportan como placas.
- Los perfiles en U y los tubos a medida reciben agujeros; las cantoneras y los tubos redondos todavía no.

No puede editar ni quitar un perfil a medida de un modelo una vez añadido (use {{key:Mod+Z}} enseguida si se equivocó). Dé un nombre nuevo a un perfil corregido.

## Guardar un perfil para modelos nuevos

{{ui:Mis perfiles}}, bajo el formulario, es su propia lista de perfiles a medida. Se guarda en este navegador, en este ordenador, no en un archivo de modelo ni en su cuenta.

- Un perfil añadido con {{ui:Guardar en Mis perfiles}} marcado entra en la lista. Cada modelo nuevo, incluido el que DetailCraft abre al iniciarlo, empieza con todos ellos en sus listas de perfiles.
- Un perfil que ya está en un modelo pero no en la lista tiene un botón {{ui:Guardar}} al lado.
- En un modelo que no tenga uno de sus perfiles (un archivo antiguo, por ejemplo), elija {{ui:Usar aquí}} para añadirlo.
- {{ui:Quitar}} saca un perfil de la lista. Los modelos que ya lo usan conservan su propia copia.
- Un modelo que abra mantiene los perfiles guardados en su archivo. Abrir un archivo nunca cambia su lista.
- Un nombre que ya está en la lista con dimensiones distintas se rechaza: dé al nuevo otro nombre.
- Borrar los datos del sitio del navegador, o usar otro navegador u otro ordenador, empieza con una lista vacía. Una ventana privada no puede conservarla; la aplicación lo indica.
