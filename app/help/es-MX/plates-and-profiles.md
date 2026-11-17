---
title: Colocar placas y agregar perfiles personalizados
summary: Coloque placas sueltas por espesor y ancho, y defina sus propias secciones I, de canal, de ángulo, de tubo o de solera.
keywords: placa, plana, perfil personalizado, perfil de usuario, paramétrico, sección, forma, sección transversal, pl
from: c24c3b51
---

## Colocar una placa

Una placa se coloca como una viga: va entre dos intersecciones, con su ancho a lo ancho y su espesor hacia arriba.

1. Elija {{ui:Placa}} en el grupo {{ui:Colocar}}, o presione {{key:P}}.
2. En el panel {{ui:Propiedades}}, ajuste {{ui:Espesor (mm)}} y {{ui:Ancho (mm)}}. El valor predeterminado es 20 x 200 en A36.
3. Ajuste {{ui:Material}} y {{ui:Rotación (°)}} si hace falta. Una rotación de 90 pone la placa de canto.
4. Haga clic en dos intersecciones, o use el formulario {{ui:Agregar por ejes}}.

El nombre de perfil de la placa se escribe `PL<espesor>x<ancho>`, por ejemplo PL20x200. Su longitud es la distancia entre los dos puntos.

Para cambiar el tamaño de una placa colocada, selecciónela y cambie {{ui:Espesor (mm)}} o {{ui:Ancho (mm)}}.

Las placas que usted coloca son piezas propias (marca p, ensamble P). Las placas de extremo y las placas base que hacen las conexiones también son placas, pero se cambian a través de su conexión; vea [Placas de extremo](topic:end-plates).

## Agregar un perfil personalizado

Cuando la sección que necesita no está en el catálogo, créela a partir de sus dimensiones. Un perfil personalizado pertenece al modelo y se guarda con él. Para usarlo en todos los modelos nuevos, guárdelo en Mis perfiles, como se describe en "Guardar un perfil para modelos nuevos" más abajo.

1. En el panel {{ui:Modelo}} de la izquierda, abra {{ui:Perfil personalizado}}.
2. Escriba un {{ui:Nombre}}, por ejemplo `W8x18-custom` o `RHS 120x80x5`. No puede ser un nombre del catálogo ni parecerse a un nombre de placa.
3. Elija una {{ui:Forma}}: {{ui:Sección I}}, {{ui:Canal}}, {{ui:Ángulo de lados iguales}}, {{ui:Tubo rectangular}}, {{ui:Tubo redondo}} o {{ui:Solera}}.
4. Llene las dimensiones que aparecen, todas en milímetros:

| Forma | Dimensiones |
|---|---|
| Sección I | Peralte d, Ancho del patín bf, Alma tw, Patín tf, Radio de empalme r (puede ser 0) |
| Canal | Peralte d, Ancho del patín bf, Alma tw, Patín tf (esquinas a escuadra) |
| Ángulo de lados iguales | Ancho b (cada ala), Espesor t |
| Tubo rectangular | Altura h, Ancho b, Espesor t (radio exterior de esquina 2t) |
| Tubo redondo | Diámetro D, Espesor t |
| Solera | Ancho b, Espesor t |

5. Deje marcada {{ui:Guardar en Mis perfiles}} para tenerlo en todos los modelos nuevos (vea abajo), o desmárquela para conservarlo solo en este modelo.
6. Elija {{ui:Agregar perfil}}.

La barra de estado dice "Perfil "…" agregado; está en todas las listas de perfiles, en Personalizados." Aparece en la lista debajo del formulario y al final de cada lista de {{ui:Perfil}}.

DetailCraft verifica que la forma pueda existir. Verá mensajes como "El alma y los patines no caben dentro del peralte y el ancho.", "El radio de empalme es demasiado grande para el patín." o "La pared es demasiado gruesa." Corrija los números y vuelva a elegir {{ui:Agregar perfil}}.

### Lo que obtienen los perfiles personalizados

- Masa por metro a partir del área × 7850 kg/m³ (los tamaños del catálogo usan el peso publicado).
- Las secciones I personalizadas reciben perforaciones, recortes, placas de extremo, archivos NC y planos de taller, como las secciones I del catálogo.
- Las solera personalizadas se comportan como placas.
- Los canales y tubos personalizados reciben perforaciones; los ángulos y los tubos redondos todavía no.

Una vez agregado, no puede editar ni quitar un perfil personalizado de un modelo (use {{key:Mod+Z}} de inmediato si cometió un error). Dé un nombre nuevo al perfil corregido.

## Guardar un perfil para modelos nuevos

{{ui:Mis perfiles}}, debajo del formulario, es su propia lista de perfiles personalizados. Se guarda en este navegador, en esta computadora, no en un archivo de modelo ni en su cuenta.

- Un perfil agregado con {{ui:Guardar en Mis perfiles}} marcado entra en la lista. Cada modelo nuevo, incluido el que DetailCraft abre al iniciarlo, empieza con todos ellos en sus listas de perfiles.
- Un perfil que ya está en un modelo pero no en la lista tiene un botón {{ui:Guardar}} a su lado.
- En un modelo que no tiene uno de sus perfiles (un archivo antiguo, por ejemplo), elija {{ui:Usar aquí}} para agregarlo.
- {{ui:Quitar}} saca un perfil de la lista. Los modelos que ya lo usan conservan su propia copia.
- Un modelo que abre conserva los perfiles guardados en su archivo. Abrir un archivo nunca cambia su lista.
- Un nombre que ya está en la lista con dimensiones distintas se rechaza: dé al nuevo otro nombre.
- Si borra los datos del sitio en el navegador, o usa otro navegador o computadora, la lista empieza vacía. Una ventana privada no puede conservarla; la aplicación lo indica.
