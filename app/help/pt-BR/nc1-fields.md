---
title: Campos do arquivo NC
summary: O que o DetailCraft grava em cada arquivo NC DSTV, campo a campo, e como as faces e as coordenadas são medidas.
keywords: nc1, dstv, arquivo nc, bloco st, ak, bo, cabeçalho, faces, coordenadas, cnc, formato
from: 1b676fc1
---

Cada arquivo `.nc1` descreve uma marca de peça. As linhas terminam com CR LF. Campos de texto usam ASCII simples; outros caracteres viram "?". A segunda linha é um comentário, `** DetailCraft <mark>.nc1`.

## Cabeçalho (ST)

| Campo | Perfil I, perfil U | Cantoneira | HSS retangular | HSS redondo | Chapa |
|---|---|---|---|---|---|
| Pedido | O nome do modelo | ← | ← | ← | ← |
| Desenho, peça | Marca da peça | ← | ← | ← | ← |
| Fase | A fase da peça, ou 1 | ← | ← | ← | ← |
| Qualidade do aço | A classe do material | ← | ← | ← | ← |
| Quantidade | Número de peças com esta marca | ← | ← | ← | ← |
| Perfil | O nome do perfil, por exemplo W16x26 | ← | ← | ← | `PL<t>*<largura>` |
| Código do perfil | I ou U (perfil U) | L | M | RO | B |
| Comprimento | Comprimento de corte | ← | ← | ← | Comprimento |
| Altura | Altura d | Aba | Altura | Diâmetro | Largura da chapa |
| Largura da mesa | bf | Aba | Largura | Diâmetro | 0 |
| Espessura da mesa | tf | t | t da parede | t da parede | 0 |
| Espessura da alma | tw | t | t da parede | t da parede | Espessura da chapa |
| Raio | Raio de concordância (0 para perfis U AISC) | 0 | Raio externo do canto | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superfície de pintura por metro | Perímetro externo, m²/m | ← | ← | ← | 2 (as duas faces, m²/m²) |
| Ângulos de serra (4 campos) | 0 (reto) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

As chapas seguem a coluna "para chapas" da norma. A norma não tem coluna para tubos redondos: o DetailCraft grava o diâmetro como altura e como largura da mesa, e a espessura da parede como as duas espessuras.

## Contornos externos (AK)

- **Perfis I e perfis U:** a alma (v), com um entalhe retangular para cada rebaixo; cada mesa (o e u), encurtada numa extremidade onde um rebaixo for pelo menos tão fundo quanto a mesa.
- **HSS retangular:** as duas paredes laterais (v e h), entalhadas para os rebaixos, e as paredes superior e inferior (o e u).
- **Cantoneiras:** um retângulo por aba (v e u). Rebaixos em cantoneiras não são gravados: essa peça é listada como não gravada. Um contraventamento de cantoneira parafusado a uma [chapa de ligação](topic:brace-gussets) tem seus furos na aba parafusada: v para a aba ao longo do u da peça, u para a aba ao longo do v dela.
- **HSS redondo:** um retângulo em v, o tubo visto de frente (comprimento × diâmetro).
- **Chapas:** um retângulo na face v.

Cada contorno é fechado (o primeiro ponto se repete no fim) e percorre o sentido anti-horário.

## Furos (BO)

Uma linha por furo: face, x, y, diâmetro, profundidade 0 (passante). Todos os furos são incluídos, os que você digitou e os que as ligações criaram. Um furo que atravessa as paredes laterais de um HSS retangular é gravado duas vezes, uma em v e outra em h.

## Faces e coordenadas

Cada perfil é posicionado como a figura de posições de perfil da norma o desenha (DSTV 1998, p. 7): x ao longo da peça, Y através, Z para cima a partir da face de trás, com o ponto zero no canto externo. O DetailCraft nunca espelha uma peça para encaixá-la na figura.

| Face | Perfil I | Perfil U | Cantoneira | HSS retangular | Chapa |
|---|---|---|---|---|---|
| v | Alma, frente | Alma, vista do lado das abas | A aba ao longo do u da peça | Parede lateral em −u | A face da chapa |
| h | | | | Parede lateral em +u | |
| o | Mesa superior | **Mesa inferior** | | Parede superior | |
| u | Mesa inferior | **Mesa superior** | A aba ao longo do v da peça | Parede inferior | |

- **x** corre ao longo da peça a partir do início do corte.
- **Perfis I e HSS retangular:** y na alma ou nas paredes laterais a partir da face inferior do perfil; y numa mesa ou nas paredes superior e inferior a partir da sua borda do lado de trás (o lado +u da peça).
- **Perfis U** ficam deitados sobre o dorso, com as abas para cima, como na figura da norma. Assim, y na alma vai do lado externo da mesa superior para baixo, a mesa superior é a face u e a mesa inferior é a face o, e y numa mesa vai do dorso da alma em direção à aba.
- **Cantoneiras:** y em cada aba a partir do talão.
- **Chapas:** y a partir da borda −u da chapa.

Confira como o software da sua máquina lê as faces dos perfis U antes de cortar: alguns programas invertem os perfis U.

## Não gravado

Chanfros, contornos internos, marcações (SI), ângulos de serra diferentes de reto, furos oblongos, furos em tubos redondos (o DetailCraft não tem nenhum) e rebaixos em cantoneiras e tubos redondos.
