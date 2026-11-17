---
title: Referência de armadura
summary: Bitolas, dimensões de ganchos, códigos de forma, comprimentos de corte e colunas da tabela de dobramento que o DetailCraft usa.
keywords: armadura, bitolas, ganchos, diâmetro de dobra, códigos de forma, comprimento de corte, tabela de dobramento, lista de barras, astm a615, aci 318
from: 1583535e
---

## Bitolas das barras

De ASTM A615/A615M Tabela 1 (designações em polegadas-libra). Os milímetros e kg/m são conversões exatas dos valores publicados em polegadas e lb/ft. As listas mostram cada bitola como, por exemplo, "#5 (15.9 mm)".

| Barra | Diâmetro (mm) | Massa (kg/m) | Área (mm²) | Diâmetro interno da dobra | Perna do gancho de 90°, de fora a fora (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

Em [Configurações do DetailCraft](topic:settings) ({{ui:Armadura}}), **nomes de barras ASTM** podem mostrar essas barras pelos seus nomes métricos soft A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (as mesmas barras; a ACI 315-99 Tabela 1 lista os dois).

### Barras métricas (BS 4449)

| Barra | Diâmetro (mm) | kg/m | Raio mín. de dobra r (mm) | Perna do gancho = projeção final P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

A massa é a seção nominal vezes 7850 kg/m³. O raio e a projeção final são os mínimos da BS 8666:2020 (sua tabela de dimensões mínimas; o antigo diâmetro é 2r). Sapatas com barras BS recebem pernas de gancho de P e comprimentos de corte pelas fórmulas da BS 8666 abaixo. Escolher aço europeu nas configurações inicia novas sapatas com malhas H16 e barras de espera H20 em concreto C30/37.

## Ganchos

Barras ASTM: ganchos padrão de 90° da ACI 318-19 Tabela 25.3.1: diâmetro interno da dobra de 6 db para #3 a #8 e de 8 db para #9 a #11, com uma extensão reta de 12 db após a dobra. A perna do gancho, medida de fora a fora, é a metade do diâmetro da dobra + db + 12 db.

Se o gancho de uma barra da malha não couber na altura da sapata dentro do cobrimento, o DetailCraft encurta a perna para caber e lista um aviso.

## Formas

O DetailCraft guarda três formas. A tabela de dobramento as imprime como códigos do DetailCraft, como tipos da ACI 315 ou como códigos de forma da BS 8666: escolha **Códigos de forma da tabela de dobramento** em [Configurações do DetailCraft](topic:settings) ({{ui:Armadura}}).

| Código | Forma | Dimensões |
|---|---|---|
| S | Reta | A = comprimento |
| L | Uma dobra de 90° | A = perna principal, B = perna do gancho, ambas de fora a fora |
| U | Duas dobras de 90° do mesmo lado | A = meio, B e C = as duas pernas, de fora a fora |

Barras de malha com {{ui:Ganchos de extremidade}} ligado são U; sem, são S. Barras de espera com {{ui:Gancho na parte de baixo}} ligado são L; sem, são S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sem número de tipo |
| L | 11, L = A + B − 0.5r − d | sem número de tipo: a figura não tem barra com um gancho |
| U | 21, A e C as pernas, B o meio: L = A + B + C − r − 2d | Tipo 2, ganchos A e G, reta B |

Com os códigos BS 8666 ou ACI 315, as colunas A, B e C da tabela seguem a letragem daquela norma (o meio de um U é B).

## Comprimento de corte

Para barras BS 4449, o comprimento de corte é a fórmula da BS 8666 do código de forma da barra (acima). Para barras ASTM, é o comprimento exato da linha central da barra: as partes retas mais as dobras como arcos de metade do diâmetro da dobra mais metade do diâmetro da barra. Ele não é calculado a partir de uma tabela de descontos de dobra, então pode diferir em alguns milímetros de uma tabela de cortes que use uma.

## Disposição

- Malha inferior: as barras ao longo de L formam a camada inferior, e as barras ao longo de B ficam sobre elas. Cada conjunto é distribuído uniformemente pela sapata dentro do cobrimento, no espaçamento informado ou menor, com pelo menos duas barras.
- Barras de espera: uma grade de barras ao longo de L e ao longo de B nos espaçamentos informados, centralizada na sapata, apoiada na malha e projetando-se acima do topo pela projeção informada. Cada gancho aponta para fora.

## Verificações

| Verificação | Regra | Resultado |
|---|---|---|
| Espaço para as barras | O cobrimento dos dois lados deixa espaço para as barras | Recusado se não couber |
| Altura para duas camadas | A altura menos dois cobrimentos comporta as duas camadas da malha | Recusado se não couber |
| Esperas cabem | A grade de esperas cabe dentro do cobrimento | Recusado se não couber |
| Espaçamento livre | Pelo menos o maior entre 25.4 mm e db (ACI 318-19 25.2.1; tamanho do agregado não verificado) | Aviso |
| Altura do gancho | A perna do gancho cabe na altura dentro do cobrimento | Aviso, perna encurtada |
| Ganchos das esperas | Os ganchos ficam fora do cobrimento | Aviso |

## Colunas da tabela de dobramento

A guia {{ui:Tabela de dobramento}} e o CSV dela têm estas colunas: Posição da barra, Bitola, Forma, A (mm), B (mm), C (mm), Quantidade, Comprimento de corte (mm), Comprimento total (m), kg/m, Peso unitário (kg), Peso total (kg), Usado para. A última linha totaliza a quantidade, o comprimento e o peso.
