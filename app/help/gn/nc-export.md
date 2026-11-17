---
title: Archivos NC omondo taller-pe
summary: Oexporta archivos NC DSTV cada marca de pieza rehe (perfil I, canal, ángulo, HSS, placa), zip-pe ojoaju, ha ohecha umi antes de oha máquina-pe.
keywords: nc, nc1, dstv, cnc, máquina, línea de vigas, línea de perforación, corte de placa, exportar, fabricación, zip
from: 598b6091
---

DetailCraft ojapo peteĩ archivo DSTV NC (`.nc1`) cada marca de pieza-pe, perfil I, canal, ángulo, HSS rectangular ha redondo, ha placa-pe, ha ojoaju zip-pe. Líneas de vigas ha máquinas de placas ojeporúva umi archivo-pe para serruchar, perforar ha cortar.

## Exportar

1. Primero, limpiá la pestaña {{ui:Problemas}}: peteĩ conexión ndaikatúi ojapo ndojapói agujero.
2. Guardá el modelo ({{key:Mod+S}}), ha upéicha umi archivo NC ojoaju modelo guardado-pe.
3. Elegí {{ui:Archivos NC}} grupo {{ui:Salida}}-pe.
4. Navegador ojeguerú `<name> NC.zip`. Barra de estado ohechauka cuántos archivo oguereko, ha ohechauka umi marca ndojapói (ángulo térã tubo redondo con cope).

Zip-pe cada archivo oñeheʼẽ marca de pieza-pe: `b1.nc1`, `c1.nc1`, `p1.nc1` … Zip ndoguereko compresión ha ojeporu hendaitépe zip herramienta cualquiera-pe.

Modelo-pe pieza ndaiporiri, barra de estado upéva ohechauka.

## Mba'e oguereko cada archivo

- **Encabezado (ST):** modelo réra orden-ichupe, marca de pieza plano ha pieza-ichupe, pieza fase térã 1, grado de material, cantidad, perfil ha sus dimensiones, masa por metro ha superficie de pintura por metro. Cortes de sierra ojapo cuadrados.
- **Contornos exteriores (AK):** alma web-pe (v) con muesca rectangular cada cope-pe; cada ala (o ha u), acortada peteĩ extremo-pe cope ojehasa ala-gui profundidad hasa.
- **Agujeros (BO):** cada agujero cara, posición ha diámetro ndive, opa agujero ha conexión ojapo, placa de extremo ha placa base-pe ojapo agujero avei.

Campo por campo, cara ha coordenada regla-kuéra: [Campos del archivo NC](topic:nc1-fields).

## Mba'e ndojapóiva

- Ángulos ha tubo redondo cope-ndive: ndaiporiri archivo NC. Umi marca ohechauka barra de estado-pe.
- Agujero tubo redondo-pe (DetailCraft ndojapói).
- Biseles, contornos internos, marcado de pieza (scribing) ha ángulos de sierra ndaha cuadrado.
- Agujero alargado (DetailCraft oguereko agujero redondo añoite).

## Revisar antes de mecanizar

DetailCraft-pe archivo NC oñeha'ã umi prueba-kuéra ndejehe, pero ndojapo'ỹi taller-pe máquina-kuéra-pe.

1. Abrí umi archivo taller-pe NC visor-pe térã máquina programa-pe ha compará umi plano de taller-pe.
2. Revisá peteĩ pieza cada clase máquina-pe lote oñeme'ẽ ántes.
3. Revisá mba'éichapa tuichakue programa oheja coordenada y ala ha cara canal-kuéra: DetailCraft medí ala y desde borde trasero, ha omoĩ canal-kuéra ijypýpe, norma ohechaukáicha (ver [Campos del archivo NC](topic:nc1-fields#faces-and-coordinates)).
