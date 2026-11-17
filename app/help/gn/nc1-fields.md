---
title: Archivo NC rehe umi campo
summary: Mba'e DetailCraft ohai cada archivo NC DSTV-pe, campo por campo, ha mba'éichapa cara ha coordenada ojemedi.
keywords: nc1, dstv, archivo nc, bloque st, ak, bo, encabezado, caras, coordenadas, cnc, formato
from: 1b676fc1
---

Cada archivo `.nc1` ohechauka peteĩ marca de pieza. Líneas oñemboty CR LF-pe. Campo de texto oguereko ASCII simple; ambue caracteres ojapo "?". Segunda línea ha comentario, `** DetailCraft <mark>.nc1`.

## Encabezado (ST)

| Campo | Perfil I, canal | Ángulo | HSS rectangular | HSS redondo | Placa |
|---|---|---|---|---|---|
| Orden | Nombre del modelo | ← | ← | ← | ← |
| Plano, pieza | Marca de pieza | ← | ← | ← | ← |
| Fase | Fase de la pieza, o 1 | ← | ← | ← | ← |
| Calidad de acero | Grado del material | ← | ← | ← | ← |
| Cantidad | Cantidad de piezas con esta marca | ← | ← | ← | ← |
| Perfil | Nombre del perfil, por ejemplo W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Código de perfil | I o U (canal) | L | M | RO | B |
| Largo | Largo de corte | ← | ← | ← | Largo |
| Altura | Profundidad d | Pierna | Altura | Diámetro | Ancho de placa |
| Ancho de ala | bf | Pierna | Ancho | Diámetro | 0 |
| Espesor de ala | tf | t | Pared t | Pared t | 0 |
| Espesor del alma | tw | t | Pared t | Pared t | Espesor de placa |
| Radio | Radio de filete (0 para canales AISC) | 0 | Radio exterior de esquina | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superficie de pintura por metro | Perímetro exterior, m²/m | ← | ← | ← | 2 (ambas caras, m²/m²) |
| Ángulos de sierra (4 campos) | 0 (cuadrado) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

Placas siguen la columna "para chapas" de la norma. La norma ndoguereko columna tubo redondo-pe: DetailCraft ohai diámetro altura ha ancho de ala-pe, ha pared ambos espesor-pe.

## Contornos exteriores (AK)

- **Perfiles I y canales:** el alma (v), con una muesca rectangular por cada cope; cada ala (o y u), acortada en un extremo donde un cope ojehasa ala-gui tan profundo como ela.
- **HSS rectangular:** ambas paredes laterales (v y h), con muescas por copes, y las paredes superior e inferior (o y u).
- **Ángulos:** un rectángulo por pierna (v y u). Los copes en ángulos ndojehaiva'ỹi: esa pieza oñemoĩ como no escrita. Una riostra de ángulo atornillada a una [placa de unión](topic:brace-gussets) oguereko agujero pierna atornillada-pe: v pierna-pe pieza u-pe ojeru, u pierna-pe pieza v-pe ojeru.
- **HSS redondo:** peteĩ rectángulo v-pe, tubo de frente ohechaukáva (largo × diámetro).
- **Placas:** peteĩ rectángulo cara v-pe.

Cada contorno oñemboty (primer punto ojehasa ipahápe) ha oho antihorario-pe.

## Agujeros (BO)

Peteĩ línea cada agujero-pe: cara, x, y, diámetro, profundidad 0 (pasante). Opa agujero oike, reheguaicha ha conexión-kuéra ojapo. Agujero pared lateral HSS rectangular-pe ojeporu mokõi jey: peteĩ v-pe ha ambue h-pe.

## Caras y coordenadas

Cada perfil omoĩ norma figura de posiciones de perfil ohechaukáicha (DSTV 1998, p. 7): x pieza ryépe, Y ojehasa, Z cara trasera-gui arriba, cero punto esquina exterior-pe. DetailCraft ndoinvertíri pieza figura-pe.

| Cara | Perfil I | Canal | Ángulo | HSS rectangular | Placa |
|---|---|---|---|---|---|
| v | Alma, adelante | Alma, visto desde lado de punta de ala | Pierna a lo largo de u de la pieza | Pared lateral en −u | Cara de la placa |
| h | | | | Pared lateral en +u | |
| o | Ala superior | **Ala inferior** | | Pared superior | |
| u | Ala inferior | **Ala superior** | Pierna a lo largo de v de la pieza | Pared inferior | |

- **x** corre a lo largo de la pieza desde su inicio de corte.
- **Perfiles I y HSS rectangular:** y en el alma o paredes laterales desde la parte inferior del perfil; y en un ala o paredes superior e inferior desde su borde en el lado trasero (lado +u de la pieza).
- **Canales** oñemoĩ sobre su espalda con punta arriba, ohechaukáicha norma figura-pe. Entonces y en el alma oje'ẽ desde afuera del ala superior hacia abajo, ala superior es cara u y ala inferior cara o, ha y en un ala oje'ẽ desde espalda del alma hacia punta.
- **Ángulos:** y en cada pierna desde talón.
- **Placas:** y desde borde −u de la placa.

Antes de cortar, revisá mba'éichapa tu programa máquina lee caras de canal: algunos programa oinvertí canal-kuéra.

## No escrito

Biseles, contornos internos, marcas (SI), ángulos de sierra ndaha cuadrado, agujero alargado, agujeros en tubo redondo (DetailCraft ndoguerekói), ha copes en ángulos ha tubo redondo.
