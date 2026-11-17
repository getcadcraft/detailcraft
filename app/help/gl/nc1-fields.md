---
title: Campos do ficheiro NC
summary: Que escribe DetailCraft en cada ficheiro NC DSTV, campo a campo, e como se miden as caras e as coordenadas.
keywords: nc1, dstv, ficheiro nc, bloque st, ak, bo, cabeceira, caras, coordenadas, cnc, formato
from: 1b676fc1
---

Cada ficheiro `.nc1` describe unha marca de peza. As liñas rematan con CR LF. Os campos de texto levan ASCII simple; os demais caracteres pasan a "?". A segunda liña é un comentario, `** DetailCraft <mark>.nc1`.

## Cabeceira (ST)

| Campo | Perfil en I, canle | Cantoneira | HSS rectangular | HSS redondo | Placa |
|---|---|---|---|---|---|
| Pedido | O nome do modelo | ← | ← | ← | ← |
| Debuxo, peza | Marca da peza | ← | ← | ← | ← |
| Fase | A fase da peza, ou 1 | ← | ← | ← | ← |
| Calidade do aceiro | O grao do aceiro | ← | ← | ← | ← |
| Cantidade | Número de pezas con esta marca | ← | ← | ← | ← |
| Perfil | O nome do perfil, por exemplo W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Código de perfil | I ou U (canle) | L | M | RO | B |
| Lonxitude | Lonxitude de corte | ← | ← | ← | Lonxitude |
| Altura | Canto d | Aba | Altura | Diámetro | Largura da placa |
| Largura de ala | bf | Aba | Largura | Diámetro | 0 |
| Espesor de ala | tf | t | Parede t | Parede t | 0 |
| Espesor da alma | tw | t | Parede t | Parede t | Espesor da placa |
| Raio | Raio de acordo (0 para canles AISC) | 0 | Raio exterior da esquina | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superficie de pintura por metro | Perímetro exterior, m²/m | ← | ← | ← | 2 (ambas caras, m²/m²) |
| Ángulos de serra (4 campos) | 0 (a escuadro) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

As placas seguen a columna "for the sheets" da norma. A norma non ten columna para os tubos redondos: DetailCraft escribe o diámetro como altura e como largura de ala, e a parede como os dous espesores.

## Contornos exteriores (AK)

- **Perfís en I e canles:** a alma (v), cun entalle rectangular por cada recorte; cada ala (o e u), acurtada nun extremo onde un recorte sexa polo menos tan fonda coma a ala.
- **HSS rectangular:** ambas paredes laterais (v e h), con entallas para os recortes, e as paredes superior e inferior (o e u).
- **Cantoneiras:** un rectángulo por aba (v e u). Os recortes nas cantoneiras non se escriben: esa peza aparece como non escrita. Unha riostra de cantoneira atornillada a unha [cartela](topic:brace-gussets) ten os seus buratos na aba atornillada: v para a aba ao longo da u da peza, u para a aba ao longo da v.
- **HSS redondo:** un rectángulo en v, o tubo visto de fronte (lonxitude × diámetro).
- **Placas:** un rectángulo na cara v.

Cada contorno está pechado (o primeiro punto repítese ao final) e percorre o sentido antihorario.

## Buratos (BO)

Unha liña por burato: cara, x, y, diámetro, profundidade 0 (pasante). Inclúense todos os buratos, os que vostede escribiu e os que fixeron as conexións. Un burato que atravesa as paredes laterais dun HSS rectangular escríbese dúas veces, unha en v e outra en h.

## Caras e coordenadas

Cada perfil colócase como o debuxa a figura de posicións de perfís da norma (DSTV 1998, p. 7): x ao longo da peza, Y transversal, Z cara arriba desde a cara posterior, co punto cero na esquina exterior. DetailCraft nunca reflicte unha peza para que encaixe na figura.

| Cara | Perfil en I | Canle | Cantoneira | HSS rectangular | Placa |
|---|---|---|---|---|---|
| v | Alma, fronte | Alma, vista desde o lado das puntas | A aba ao longo da u da peza | Parede lateral en −u | A cara da placa |
| h | | | | Parede lateral en +u | |
| o | Ala superior | **Ala inferior** | | Parede superior | |
| u | Ala inferior | **Ala superior** | A aba ao longo da v da peza | Parede inferior | |

- **x** corre ao longo da peza desde o seu inicio de corte.
- **Perfís en I e HSS rectangulares:** y na alma ou nas paredes laterais desde a cara inferior do perfil; y nunha ala ou nas paredes superior e inferior desde o seu bordo no lado posterior (o lado +u da peza).
- **Canles** deítanse sobre o dorso coas puntas cara arriba, como na figura da norma. Así, y na alma vai desde o exterior da ala superior cara abaixo, a ala superior é a cara u e a ala inferior a cara o, e y nunha ala vai desde o dorso da alma cara á punta.
- **Cantoneiras:** y en cada aba desde o talón.
- **Placas:** y desde o bordo −u da placa.

Comprobe como o software da súa máquina le as caras das canles antes de cortar: algúns programas colocan as canles do revés.

## Non escrito

Biseis, contornos interiores, marcaxes (SI), ángulos de serra distintos de recto, buratos alongados, buratos en tubos redondos (DetailCraft non ten ningún) e recortes en cantoneiras e tubos redondos.
