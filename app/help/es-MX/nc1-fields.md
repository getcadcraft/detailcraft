---
title: Campos del archivo NC
summary: Qué escribe DetailCraft en cada archivo NC DSTV, campo por campo, y cómo se miden las caras y las coordenadas.
keywords: nc1, dstv, archivo nc, bloque st, ak, bo, encabezado, caras, coordenadas, cnc, formato
from: 1b676fc1
---

Cada archivo `.nc1` describe una marca de pieza. Las líneas terminan con CR LF. Los campos de texto llevan ASCII simple; los demás caracteres se convierten en "?". La segunda línea es un comentario, `** DetailCraft <marca>.nc1`.

## Encabezado (ST)

| Campo | Sección I, canal | Ángulo | HSS rectangular | HSS redondo | Placa |
|---|---|---|---|---|---|
| Pedido, dibujo y pieza | Nombre del modelo | ← | ← | ← | ← |
| Dibujo, pieza | Marca de pieza | ← | ← | ← | ← |
| Fase | La fase de la pieza, o 1 | ← | ← | ← | ← |
| Calidad del acero | El grado del material | ← | ← | ← | ← |
| Cantidad | Número de piezas con esta marca | ← | ← | ← | ← |
| Perfil | El nombre del perfil, por ejemplo W16x26 | ← | ← | ← | `PL<t>*<ancho>` |
| Código de perfil | I o U (canal) | L | M | RO | B |
| Longitud | Longitud de corte | ← | ← | ← | Longitud |
| Altura | Peralte d | Ala | Altura | Diámetro | Ancho de la placa |
| Ancho del patín | bf | Ala | Ancho | Diámetro | 0 |
| Espesor del patín | tf | t | Pared t | Pared t | 0 |
| Espesor del alma | tw | t | Pared t | Pared t | Espesor de la placa |
| Radio | Radio de empalme (0 para canales AISC) | 0 | Radio exterior de esquina | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superficie de pintura por metro | Perímetro exterior, m²/m | ← | ← | ← | 2 (ambas caras, m²/m²) |
| Ángulos de corte (4 campos) | 0 (escuadra) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

Las placas siguen la columna de la norma "para las láminas". La norma no tiene columna para tubos redondos: DetailCraft escribe el diámetro como altura y como ancho de patín, y la pared como ambos espesores.

## Contornos exteriores (AK)

- **Secciones I y canales:** el alma (v), con una muesca rectangular por cada recorte; cada patín (o y u), acortado en un extremo donde un recorte tenga al menos la profundidad del patín.
- **HSS rectangular:** ambas paredes laterales (v y h), con muescas para los recortes, y las paredes superior e inferior (o y u).
- **Ángulos:** un rectángulo por ala (v y u). Los recortes en ángulos no se escriben: esa pieza aparece como no escrita. Un contraviento de ángulo atornillado a una [cartela](topic:brace-gussets) tiene sus perforaciones en el ala atornillada: v para el ala a lo largo de u de la pieza, u para el ala a lo largo de v.
- **HSS redondo:** un rectángulo en v, el tubo visto de frente (longitud × diámetro).
- **Placas:** un rectángulo en la cara v.

Cada contorno está cerrado (el primer punto se repite al final) y recorre en sentido antihorario.

## Perforaciones (BO)

Una línea por perforación: cara, x, y, diámetro, profundidad 0 (pasante). Se incluyen todas las perforaciones, las que usted escribió y las que hicieron las conexiones. Una perforación que atraviesa las paredes laterales de un HSS rectangular se escribe dos veces, una en v y otra en h.

## Caras y coordenadas

Cada perfil se coloca como lo dibuja la figura de posiciones de perfiles de la norma (DSTV 1998, p. 7): x a lo largo de la pieza, Y a través, Z hacia arriba desde la cara trasera, con el punto cero en la esquina exterior. DetailCraft nunca refleja una pieza para ajustarla a la figura.

| Cara | Sección I | Canal | Ángulo | HSS rectangular | Placa |
|---|---|---|---|---|---|
| v | Alma, de frente | Alma, vista desde el lado de las puntas de los patines | El ala a lo largo de u de la pieza | Pared lateral en −u | La cara de la placa |
| h | | | | Pared lateral en +u | |
| o | Patín superior | Patín **inferior** | | Pared superior | |
| u | Patín inferior | Patín **superior** | El ala a lo largo de v de la pieza | Pared inferior | |

- **x** corre a lo largo de la pieza desde su inicio de corte.
- **Secciones I y HSS rectangulares:** y en el alma o en las paredes laterales se mide desde la cara inferior del perfil; y en un patín o en las paredes superior e inferior se mide desde su borde del lado trasero (el lado +u de la pieza).
- **Canales:** se apoyan sobre su espalda con las puntas hacia arriba, como en la figura de la norma. Así, y en el alma corre desde la cara exterior del patín superior hacia abajo; el patín superior es la cara u y el inferior la cara o; y y en un patín corre desde la espalda del alma hacia la punta.
- **Ángulos:** y en cada ala desde el talón.
- **Placas:** y desde el borde −u de la placa.

Revise cómo su software de máquina interpreta las caras de los canales antes de cortar: algunos programas los voltean al revés.

## No se escribe

Biseles, contornos interiores, marcado (SI), ángulos de corte distintos de la escuadra, perforaciones alargadas, perforaciones en tubos redondos (DetailCraft no tiene ninguna), y recortes en ángulos y tubos redondos.
