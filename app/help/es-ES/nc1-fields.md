---
title: Campos del archivo NC
summary: Lo que DetailCraft escribe en cada archivo NC DSTV, campo por campo, y cómo se miden las caras y las coordenadas.
keywords: nc1, dstv, archivo nc, bloque st, ak, bo, cabecera, caras, coordenadas, cnc, formato
from: 1b676fc1
---

Cada archivo `.nc1` describe una marca de pieza. Las líneas terminan en CR LF. Los campos de texto contienen ASCII simple; los demás caracteres se convierten en «?». La segunda línea es un comentario, `** DetailCraft <mark>.nc1`.

## Cabecera (ST)

| Campo | Perfil en I, en U | Cantonera | HSS rectangular | HSS redondo | Placa |
|---|---|---|---|---|---|
| Orden | El nombre del modelo | ← | ← | ← | ← |
| Plano, pieza | Marca de pieza | ← | ← | ← | ← |
| Fase | La fase de la pieza, o 1 | ← | ← | ← | ← |
| Calidad del acero | El grado del material | ← | ← | ← | ← |
| Cantidad | Número de piezas con esta marca | ← | ← | ← | ← |
| Perfil | El nombre del perfil, por ejemplo W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Código de perfil | I o U (perfil en U) | L | M | RO | B |
| Longitud | Longitud de corte | ← | ← | ← | Longitud |
| Altura | Canto d | Ala | Altura | Diámetro | Ancho de la placa |
| Ancho de ala | bf | Ala | Ancho | Diámetro | 0 |
| Espesor de ala | tf | t | Pared t | Pared t | 0 |
| Espesor de alma | tw | t | Pared t | Pared t | Espesor de la placa |
| Radio | Radio de acuerdo (0 para perfiles en U AISC) | 0 | Radio de esquina exterior | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superficie de pintura por metro | Perímetro exterior, m²/m | ← | ← | ← | 2 (ambas caras, m²/m²) |
| Ángulos de sierra (4 campos) | 0 (a escuadra) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

Las placas siguen la columna de la norma «para chapas». La norma no tiene columna para tubos redondos: DetailCraft escribe el diámetro como altura y como ancho de ala, y la pared como ambos espesores.

## Contornos exteriores (AK)

- **Perfiles en I y en U:** el alma (v), con una muesca rectangular por cada recorte; cada ala (o y u), acortada en un extremo donde un recorte es al menos tan profundo como el ala.
- **HSS rectangular:** ambas paredes laterales (v y h), con muescas para los recortes, y las paredes superior e inferior (o y u).
- **Cantoneras:** un rectángulo por ala (v y u). Los recortes en cantoneras no se escriben: una pieza así figura como no escrita. Una diagonal de cantonera atornillada a una [cartela de diagonal](topic:brace-gussets) tiene sus agujeros en el ala atornillada: v para el ala a lo largo de u de la pieza, y u para el ala a lo largo de v.
- **HSS redondo:** un rectángulo sobre v, el tubo visto de frente (longitud × diámetro).
- **Placas:** un rectángulo sobre la cara v.

Cada contorno está cerrado (el primer punto se repite al final) y va en sentido antihorario.

## Agujeros (BO)

Una línea por agujero: cara, x, y, diámetro, profundidad 0 (pasante). Se incluyen todos los agujeros, los que usted escribió y los que crean las conexiones. Un agujero que atraviesa las paredes laterales de un HSS rectangular se escribe dos veces, una sobre v y otra sobre h.

## Caras y coordenadas

Cada perfil se coloca como lo dibuja la figura de posiciones de perfiles de la norma (DSTV 1998, p. 7): x a lo largo de la pieza, Y a través, Z hacia arriba desde la cara posterior, con el punto cero en la esquina exterior. DetailCraft nunca refleja una pieza para ajustarla a la figura.

| Cara | Perfil en I | Perfil en U | Cantonera | HSS rectangular | Placa |
|---|---|---|---|---|---|
| v | Alma, delante | Alma, visto desde el lado de las alas | El ala a lo largo de u de la pieza | Pared lateral en −u | La cara de la placa |
| h | | | | Pared lateral en +u | |
| o | Ala superior | **Ala inferior** | | Pared superior | |
| u | Ala inferior | **Ala superior** | El ala a lo largo de v de la pieza | Pared inferior | |

- **x** recorre la pieza desde su inicio de corte.
- **Perfiles en I y HSS rectangulares:** y en el alma o en las paredes laterales se mide desde la cara inferior del perfil; y en un ala, o en las paredes superior e inferior, desde su borde en el lado posterior (lado +u de la pieza).
- **Perfiles en U:** van tumbados sobre su espalda con las alas hacia arriba, como en la figura de la norma. Así, y en el alma va desde el exterior del ala superior hacia abajo, el ala superior es la cara u y el ala inferior la cara o, y y en un ala va desde el dorso del alma hacia la punta del ala.
- **Cantoneras:** y en cada ala, desde el talón.
- **Placas:** y desde el borde −u de la placa.

Compruebe cómo su software de máquina interpreta las caras de los perfiles en U antes de cortar: algunos programas los invierten.

## No se escribe

Biseles, contornos interiores, marcado (SI), ángulos de sierra distintos de a escuadra, agujeros alargados, agujeros en tubos redondos (DetailCraft no tiene ninguno) y recortes en cantoneras y tubos redondos.
