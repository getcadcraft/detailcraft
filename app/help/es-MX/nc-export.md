---
title: Enviar archivos NC al taller
summary: Exporte los archivos NC DSTV de cada marca de pieza (secciones I, canales, ángulos, HSS, placas), comprimidos en un ZIP, y revíselos antes de que lleguen a una máquina.
keywords: nc, nc1, dstv, cnc, máquina, línea de vigas, línea de taladrado, corte de placas, exportar, fabricación, zip
from: 598b6091
---

DetailCraft escribe un archivo NC DSTV (`.nc1`) por cada marca de pieza, para secciones I, canales, ángulos, HSS rectangulares y redondas, y placas, y los agrupa en un ZIP. Las líneas de vigas y las máquinas de placas leen estos archivos para aserrar, taladrar y cortar.

## Exportar

1. Primero limpie la pestaña {{ui:Problemas}}: una conexión que no se pudo construir no agrega perforaciones.
2. Guarde el modelo ({{key:Mod+S}}), para que los archivos NC coincidan con un modelo guardado.
3. Elija {{ui:Archivos NC}} en el grupo {{ui:Salida}}.
4. El navegador descarga `<nombre> NC.zip`. La barra de estado indica cuántos archivos contiene y enumera las marcas que no pudo escribir (un ángulo o un tubo redondo con un recorte).

Dentro del ZIP, cada archivo se nombra según su marca de pieza: `b1.nc1`, `c1.nc1`, `p1.nc1` … El ZIP no está comprimido y se abre con cualquier programa para archivos ZIP.

Si el modelo no tiene piezas, la barra de estado lo indica.

## Qué contiene cada archivo

- **Encabezado (ST):** el nombre del modelo como pedido, la marca de pieza como dibujo y pieza, la fase 1, el grado del acero, la cantidad, el perfil y sus dimensiones, la masa por metro y la superficie de pintura por metro. Los cortes de sierra son a escuadra.
- **Contornos exteriores (AK):** el contorno del alma con los recortes ya retirados, y el contorno de cada patín acortado donde un recorte lo elimina.
- **Perforaciones (BO):** cada perforación con su cara, posición y diámetro, incluidas las hechas por las placas de extremo y las placas base.

Campo por campo, con las reglas de caras y coordenadas: [Campos del archivo NC](topic:nc1-fields).

## Qué no se escribe

- Ángulos y tubos redondos con un recorte: no hay archivo NC. Sus marcas aparecen en la barra de estado.
- Perforaciones en tubos redondos (DetailCraft no las hace).
- Biseles, contornos interiores, marcado de piezas (trazado) y ángulos de corte distintos de la escuadra.
- Perforaciones alargadas (DetailCraft solo tiene perforaciones redondas).

## Revise antes de maquinar

Los archivos NC de DetailCraft son verificados por su propio conjunto de pruebas, pero no se han ejecutado en las máquinas de su taller.

1. Abra los archivos en el visor NC de su taller o en el software de la máquina y compárelos con los planos de taller.
2. Revise una pieza de cada tipo en la máquina antes de correr un lote.
3. Revise cómo su software interpreta las coordenadas y de los patines y las caras de los canales: DetailCraft mide la y de los patines desde el borde trasero, y acuesta los canales sobre su espalda como lo dibuja la norma (vea [Campos del archivo NC](topic:nc1-fields#faces-and-coordinates)).
