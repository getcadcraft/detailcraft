---
title: Regras das marcas
summary: Cando dúas pezas ou dous conxuntos comparten marca, como se numeran as marcas e como funcionan as marcas de zapatas e de barras.
keywords: marcas, numeración, marca da peza, marca do conxunto, prefixo, tolerancia, pezas idénticas, marcas de barras, marcas de zapatas
from: ce02c98e
---

DetailCraft recalcula todas as marcas despois de cada cambio. Non se garda nada, polo que as marcas sempre describen o modelo tal como está agora. Vexa [Comprobar as marcas e a lista de materiais](topic:marks-and-bom) para saber como usalas.

## Marcas de peza

Dúas pezas comparten marca de peza cando coinciden todos estes puntos:

1. O tipo de peza (viga, piar, riostra ou placa).
2. O nome do perfil (sen distinguir maiúsculas).
3. O material (sen distinguir maiúsculas).
4. A lonxitude de corte, dentro de 1 mm.
5. Cada furo: cara, posición ao longo e atravesando, dentro de 1 mm, e diámetro dentro de 0,1 mm.
6. Cada recorte: extremo, lado, lonxitude e profundidade, dentro de 1 mm.

O {{ui:Name}} da peza non conta. Tampouco a súa posición no modelo, a súa rotación nin o sentido no que foi debuxada, sempre que a peza sexa a mesma.

### Pezas xiradas

Compárase unha peza en cada xiro posible que leve a súa sección sobre si mesma. Se algún deles fai que coincida con outra peza, comparten marca.

| Forma | Xiros que contan |
|---|---|
| Perfís en I, HSS rectangulares, placas | De extremo a extremo (sobre o eixo vertical), de extremo a extremo (sobre o eixo horizontal) e boca abaixo arredor do seu propio eixo lonxitudinal |
| Perfís en U | De extremo a extremo só sobre o eixo horizontal, así que a alma queda do mesmo lado |
| Cantoneiras, HSS circulares | Ningún: compáranse tal como están colocadas |

Así, unha viga cun furo preto do extremo esquerdo coincide cunha viga co mesmo furo preto do extremo dereito, e un piar con furos nunha das ás coincide cun piar cos mesmos furos na outra á.

### Numeración

| Tipo | Prefixo da peza | Prefixo do conxunto |
|---|---|---|
| Piar | c | C |
| Viga | b | B |
| Riostra | br | BR |
| Placa (colocada, placa de extremo ou placa base) | p | P |

As marcas numéranse desde 1 dentro de cada prefixo. A orde é: piares, logo vigas, riostras e placas; dentro de cada tipo, polo nome do perfil en orde natural (W8x10 antes de W12x26); despois, as pezas máis longas primeiro.

Como a numeración segue esa orde, engadir ou cambiar unha peza pode desprazar os números doutras.

## Marcas de conxunto

- Cada peza que non está soldada a outra é a peza principal do seu propio conxunto.
- As placas de extremo están soldadas á súa viga, e as placas base ao seu piar, polo que pertencen ao conxunto dese elemento.
- Dous conxuntos comparten marca cando as súas pezas principais comparten marca de peza e as súas pezas unidas teñen as mesmas marcas nos mesmos lugares (dentro de 1 mm), permitindo os mesmos xiros que a peza principal.
- O prefixo do conxunto segue á peza principal: unha viga con dúas placas de extremo é un conxunto B.

As placas que coloca coa ferramenta {{ui:Plate}} non están soldadas a nada, así que cada unha é o seu propio conxunto P.

## Marcas de zapatas

Zapatas coa mesma lonxitude, anchura, profundidade, especificación do formigón, malla inferior e barras de arranque comparten marca: F1, F2 … na orde en que foron colocadas. Non contan a posición nin a rotación.

## Marcas de barras

Barras co mesmo tamaño, forma e dimensións A, B e C (redondeadas ao milímetro) comparten marca en todas as zapatas. A marca é o número da barra, F, e un contador por tamaño de barra: 5F1, 5F2, 6F1. Unha barra no sentido longo e unha no sentido curto dunha zapata cadrada son a mesma barra e comparten marca; a columna {{ui:Used for}} do cadro lista os dous usos.
