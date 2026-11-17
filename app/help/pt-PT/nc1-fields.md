---
title: Campos do ficheiro NC
summary: O que o DetailCraft escreve em cada ficheiro NC DSTV, campo a campo, e como são medidas as faces e as coordenadas.
keywords: nc1, dstv, ficheiro nc, bloco st, ak, bo, cabeçalho, faces, coordenadas, cnc, formato
from: 1b676fc1
---

Cada ficheiro `.nc1` descreve uma marca de peça. As linhas terminam com CR LF. Os campos de texto usam ASCII simples; os outros caracteres passam a "?". A segunda linha é um comentário, `** DetailCraft <mark>.nc1`.

## Cabeçalho (ST)

| Campo | Perfil em I, perfil U | Cantoneira | HSS retangular | HSS circular | Chapa |
|---|---|---|---|---|---|
| Encomenda | O nome do modelo | ← | ← | ← | ← |
| Desenho, peça | Marca da peça | ← | ← | ← | ← |
| Fase | A fase da peça, ou 1 | ← | ← | ← | ← |
| Qualidade do aço | A qualidade do aço | ← | ← | ← | ← |
| Quantidade | Número de peças com esta marca | ← | ← | ← | ← |
| Perfil | O nome do perfil, por exemplo W16x26 | ← | ← | ← | `PL<t>*<width>` |
| Código do perfil | I ou U (perfil U) | L | M | RO | B |
| Comprimento | Comprimento de corte | ← | ← | ← | Comprimento |
| Altura | Altura d | Aba | Altura | Diâmetro | Largura da chapa |
| Largura do banzo | bf | Aba | Largura | Diâmetro | 0 |
| Espessura do banzo | tf | t | Espessura da parede t | Espessura da parede t | 0 |
| Espessura da alma | tw | t | Espessura da parede t | Espessura da parede t | Espessura da chapa |
| Raio | Raio de concordância (0 para perfis U AISC) | 0 | Raio do canto exterior | 0 | 0 |
| Peso por metro | kg/m | kg/m | kg/m | kg/m | kg/m² |
| Superfície de pintura por metro | Perímetro exterior, m²/m | ← | ← | ← | 2 (ambas as faces, m²/m²) |
| Ângulos de serra (4 campos) | 0 (reto) | ← | ← | ← | ← |
| Campos de texto (4) | `-` | ← | ← | ← | ← |

As chapas seguem a coluna da norma "para as chapas". A norma não tem coluna para tubos circulares: o DetailCraft escreve o diâmetro como altura e largura do banzo, e a parede como as duas espessuras.

## Contornos exteriores (AK)

- **Perfis em I e perfis U:** a alma (v), com um entalhe retangular por cada recorte; cada banzo (o e u), encurtado numa extremidade onde um recorte seja pelo menos tão fundo como o banzo.
- **HSS retangular:** ambas as paredes laterais (v e h), com entalhes para os recortes, e as paredes superior e inferior (o e u).
- **Cantoneiras:** um retângulo por aba (v e u). Os recortes em cantoneiras não são escritos: essa peça fica listada como não escrita. Um contraventamento em cantoneira aparafusado a uma [chapa de gousset](topic:brace-gussets) tem os furos na aba aparafusada: v para a aba ao longo do u da peça, u para a aba ao longo do seu v.
- **HSS circular:** um retângulo em v, o tubo visto de frente (comprimento × diâmetro).
- **Chapas:** um retângulo na face v.

Cada contorno é fechado (o primeiro ponto repete-se no fim) e percorre-se no sentido anti-horário.

## Furos (BO)

Uma linha por furo: face, x, y, diâmetro, profundidade 0 (passante). Estão incluídos todos os furos, os que escreveu e os que as ligações criaram. Um furo através das paredes laterais de um HSS retangular é escrito duas vezes, uma em v e outra em h.

## Faces e coordenadas

Cada perfil é colocado como a figura de posições de perfis da norma o desenha (DSTV 1998, p. 7): x ao longo da peça, Y de um lado ao outro, Z para cima a partir da face traseira, com o ponto zero no canto exterior. O DetailCraft nunca espelha uma peça para a fazer encaixar na figura.

| Face | Perfil em I | Perfil U | Cantoneira | HSS retangular | Chapa |
|---|---|---|---|---|---|
| v | Alma, frente | Alma, vista do lado das abas | A aba ao longo do u da peça | Parede lateral em −u | A face da chapa |
| h | | | | Parede lateral em +u | |
| o | Banzo superior | **Banzo inferior** | | Parede superior | |
| u | Banzo inferior | **Banzo superior** | A aba ao longo do v da peça | Parede inferior | |

- **x** corre ao longo da peça a partir do seu início de corte.
- **Perfis em I e HSS retangulares:** y na alma ou nas paredes laterais a partir da face inferior do perfil; y num banzo ou nas paredes superior e inferior a partir da sua borda, no lado traseiro (o lado +u da peça).
- **Perfis U** ficam deitados sobre as costas, com as abas para cima, como na figura da norma. Assim, y na alma parte do exterior do banzo superior para baixo, o banzo superior é a face u e o banzo inferior é a face o, e y num banzo vai das costas da alma em direção à aba.
- **Cantoneiras:** y em cada aba a partir do talão.
- **Chapas:** y a partir da borda −u da chapa.

Verifique, antes de cortar, como o software da sua máquina lê as faces dos perfis U: alguns programas viram os perfis ao contrário.

## Não escrito

Chanfros, contornos interiores, marcações (SI), ângulos de serra diferentes de reto, furos oblongos, furos em tubos circulares (o DetailCraft não os tem) e recortes em cantoneiras e tubos circulares.
