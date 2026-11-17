---
title: Enviar archivos NC al taller
summary: Exporte los archivos NC DSTV de cada marca de pieza (perfiles en I, perfiles en U, cantoneras, HSS y placas), comprimidos en zip, y compruébelos antes de que lleguen a una máquina.
keywords: nc, nc1, dstv, cnc, máquina, línea de vigas, línea de taladrado, corte de placas, exportar, fabricación, zip
from: 598b6091
---

DetailCraft escribe un archivo NC DSTV (`.nc1`) por cada marca de pieza, para perfiles en I, perfiles en U, cantoneras, HSS rectangulares y redondos, y placas, y los reúne en un zip. Las líneas de vigas y las máquinas de placas leen estos archivos para serrar, taladrar y cortar.

## Exportar

1. Vacíe primero la pestaña {{ui:Problemas}}: una conexión que no se pudo construir no añade agujeros.
2. Guarde el modelo ({{key:Mod+S}}), para que los archivos NC coincidan con un modelo guardado.
3. Elija {{ui:Archivos NC}} en el grupo {{ui:Salida}}.
4. El navegador descarga `<name> NC.zip`. La barra de estado indica cuántos archivos contiene y muestra las marcas que no ha escrito (una cantonera o un tubo redondo con recorte).

Dentro del zip, cada archivo lleva el nombre de su marca de pieza: `b1.nc1`, `c1.nc1`, `p1.nc1` … El zip no está comprimido y se abre con cualquier utilidad de zip.

Si el modelo no tiene piezas, la barra de estado lo indica.

## Qué contiene cada archivo

- **Cabecera (ST):** el nombre del modelo como pedido, la marca de pieza como plano y pieza, la fase 1, la calidad del acero, la cantidad, el perfil y sus dimensiones, la masa por metro y la superficie de pintura por metro. Los cortes de sierra son a escuadra.
- **Contornos exteriores (AK):** el alma con los recortes practicados, y cada ala acortada donde un recorte la elimina.
- **Agujeros (BO):** cada agujero con su cara, posición y diámetro, incluidos los agujeros hechos por las placas de extremo y las placas base.

Campo por campo, con las reglas de caras y coordenadas: [Campos del archivo NC](topic:nc1-fields).

## Qué no se escribe

- Cantoneras y tubos redondos con recorte: no hay archivo NC. Sus marcas aparecen en la barra de estado.
- Agujeros en tubos redondos (DetailCraft no genera ninguno).
- Biseles, contornos interiores, marcado de piezas (trazado) y ángulos de sierra distintos de a escuadra.
- Agujeros alargados (DetailCraft solo tiene agujeros redondos).

## Comprobar antes de mecanizar

Los archivos NC de DetailCraft son verificados por su propio conjunto de pruebas, pero no se han ejecutado en las máquinas de su taller.

1. Abra los archivos en el visor NC de su taller o en el software de la máquina y compárelos con los planos de taller.
2. Compruebe una pieza de cada tipo en la máquina antes de lanzar un lote.
3. Compruebe cómo su software interpreta las coordenadas y de las alas y las caras de los perfiles en U. DetailCraft mide la y de las alas desde el borde posterior y coloca los perfiles en U sobre su espalda, como lo dibuja la norma (consulte [Campos del archivo NC](topic:nc1-fields#faces-and-coordinates)).
