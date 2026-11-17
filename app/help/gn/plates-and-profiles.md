---
title: Colocar placas y agregar perfiles personalizados
summary: Colocá placas sueltas por espesor y ancho, y definí tus propias secciones I, canal, ángulo, tubo o planchuela.
keywords: placa, plana, perfil personalizado, perfil de usuario, paramétrico, sección, forma, sección transversal, pl
from: c24c3b51
---

## Colocar una placa

Una placa se coloca como una viga: va entre dos intersecciones, con su ancho a través y su espesor hacia arriba.

1. Elegí {{ui:Placa}} en el grupo {{ui:Colocar}}, o presioná {{key:P}}.
2. En el panel {{ui:Propiedades}}, poné {{ui:Espesor (mm)}} y {{ui:Ancho (mm)}}. El valor por defecto es 20 x 200 en A36.
3. Poné {{ui:Material}} y {{ui:Rotación (°)}} si hace falta. Una rotación de 90 para la placa de canto.
4. Clicá dos intersecciones, o usá el formulario {{ui:Agregar por grilla}}.

El nombre de perfil de la placa se escribe `PL<espesor>x<ancho>`, por ejemplo PL20x200. Su largo es la distancia entre los dos puntos.

Para cambiar el tamaño de una placa colocada, seleccionala y cambiá {{ui:Espesor (mm)}} o {{ui:Ancho (mm)}}.

Las placas que colocás son piezas propias (marca p, conjunto P). Las placas de extremo y placas base que hacen las conexiones también son placas, pero las cambiás a través de su conexión; ver [Placas de extremo](topic:end-plates).

## Agregar un perfil personalizado

Cuando la sección que necesitás no está en el catálogo, creala a partir de sus dimensiones. Un perfil personalizado pertenece al modelo y se guarda con él. Para usarlo en cada modelo nuevo, guardalo en {{ui:Mis perfiles}}, descrito en "Guardar un perfil para modelos nuevos" más abajo.

1. En el panel {{ui:Modelo}} de la izquierda, abrí {{ui:Perfil personalizado}}.
2. Escribí un {{ui:Nombre}}, por ejemplo `W8x18-custom` o `RHS 120x80x5`. No puede ser un nombre del catálogo ni parecer un nombre de placa.
3. Elegí una {{ui:Forma}}: {{ui:Perfil I}}, {{ui:Canal}}, {{ui:Ángulo de alas iguales}}, {{ui:Tubo rectangular}}, {{ui:Tubo redondo}} o {{ui:Planchuela}}.
4. Completá las dimensiones que aparecen, todas en milímetros:

| Forma | Dimensiones |
|---|---|
| Perfil I | Profundidad d, ancho de ala bf, alma tw, ala tf, radio de filete r (puede ser 0) |
| Canal | Profundidad d, ancho de ala bf, alma tw, ala tf (esquinas cuadradas) |
| Ángulo de alas iguales | Ancho b (cada pierna), espesor t |
| Tubo rectangular | Altura h, ancho b, espesor t (radio de esquina exterior 2t) |
| Tubo redondo | Diámetro D, espesor t |
| Planchuela | Ancho b, espesor t |

5. Dejá tildado {{ui:Guardar en Mis perfiles}} para tenerlo en cada modelo nuevo (ver abajo), o destildalo para mantenerlo solo en este modelo.
6. Elegí {{ui:Agregar perfil}}.

La barra de estado dice "Perfil "…" agregado; está en cada lista de perfiles bajo Personalizado." Aparece en la lista debajo del formulario y al final de cada lista {{ui:Perfil}}.

DetailCraft verifica que la forma pueda existir. Verás mensajes como "El alma y las alas no entran dentro de la profundidad y el ancho.", "El radio de filete es demasiado grande para el ala." o "La pared es demasiado gruesa." Corregí los números y elegí {{ui:Agregar perfil}} otra vez.

### Qué obtienen los perfiles personalizados

- Masa por metro a partir del área × 7850 kg/m³ (los tamaños del catálogo usan el peso publicado).
- Los perfiles I personalizados reciben agujeros, copes, placas de extremo, archivos NC y planos de taller, como los perfiles I del catálogo.
- Las planchuelas personalizadas se comportan como placas.
- Los canales y tubos personalizados reciben agujeros; los ángulos y tubos redondos todavía no.

No podés editar ni quitar un perfil personalizado de un modelo una vez agregado (usá {{key:Mod+Z}} enseguida si te equivocaste). Dale un nombre nuevo a uno corregido.

## Guardar un perfil para modelos nuevos

{{ui:Mis perfiles}}, debajo del formulario, es tu propia lista de perfiles personalizados. Se guarda en este navegador, en esta computadora, no en un archivo de modelo ni en tu cuenta.

- Un perfil agregado con {{ui:Guardar en Mis perfiles}} tildado entra en la lista. Cada modelo nuevo, incluido el que DetailCraft abre al iniciar, empieza con todos ellos en sus listas de perfiles.
- Un perfil que ya está en un modelo pero no en la lista tiene un botón {{ui:Guardar}} al lado.
- En un modelo que no tiene uno de tus perfiles (un archivo antiguo, por ejemplo), elegí {{ui:Usar aquí}} para agregarlo.
- {{ui:Quitar}} saca un perfil de la lista. Los modelos que ya lo usan conservan su propia copia.
- Un modelo que abrís conserva los perfiles guardados en su archivo. Abrir un archivo nunca cambia tu lista.
- Un nombre que ya está en la lista con dimensiones distintas se rechaza: dale otro nombre al nuevo.
- Borrar los datos del sitio del navegador, o usar otro navegador o computadora, empieza con una lista vacía. Una ventana privada no puede guardarla; la aplicación lo avisa.
