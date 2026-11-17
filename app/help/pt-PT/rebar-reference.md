---
title: Referência de armaduras
summary: Dimensões dos varões, dimensões dos ganchos, códigos de forma, comprimentos de corte e as colunas do mapa de dobragem que o DetailCraft usa.
keywords: armadura, dimensões dos varões, ganchos, diâmetro de dobragem, códigos de forma, comprimento de corte, mapa de dobragem, lista de varões, astm a615, aci 318
from: 1583535e
---

## Dimensões dos varões

Segundo a ASTM A615/A615M, Tabela 1 (designações em unidades inglesas). Os milímetros e os kg/m são conversões exatas dos valores publicados em polegadas e lb/ft. As listas mostram cada dimensão como, por exemplo, "#5 (15.9 mm)".

| Varão | Diâmetro (mm) | Massa (kg/m) | Área (mm²) | Diâmetro interior de dobragem | Perna do gancho a 90°, exterior a exterior (mm) |
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

Nas [Definições do DetailCraft](topic:settings) ({{ui:Armadura}}), os **Nomes ASTM dos varões** podem mostrar estes varões pelos nomes métricos A615M, em alternativa: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (os mesmos varões; a ACI 315-99, Tabela 1, indica ambos).

### Varões métricos (BS 4449)

| Varão | Diâmetro (mm) | kg/m | Raio mínimo de dobragem r (mm) | Perna do gancho = projeção final P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

A massa é a secção nominal multiplicada por 7850 kg/m³. O raio e a projeção final são os mínimos da BS 8666:2020 (a sua tabela de dimensões mínimas; o antigo diâmetro é 2r). As sapatas com varões BS recebem pernas de gancho de P e comprimentos de corte pelas fórmulas da BS 8666 abaixo. Escolher aço europeu nas definições inicia novas sapatas com malhas H16 e armaduras de espera H20 em betão C30/37.

## Ganchos

Varões ASTM: ganchos normais de 90° da ACI 318-19, Tabela 25.3.1: diâmetro interior de dobragem de 6 db para #3 a #8 e 8 db para #9 a #11, com uma extensão reta de 12 db após a dobragem. A perna do gancho, medida exterior a exterior, é metade do diâmetro de dobragem + db + 12 db.

Se o gancho de um varão da malha não couber na altura da sapata dentro do recobrimento, o DetailCraft encurta a perna para caber e indica um aviso.

## Formas

O DetailCraft guarda três formas. O mapa de dobragem imprime-as como códigos do DetailCraft, como tipos da ACI 315 ou como códigos de forma da BS 8666: escolha **Códigos de forma do mapa de dobragem** nas [Definições do DetailCraft](topic:settings) ({{ui:Armadura}}).

| Código | Forma | Dimensões |
|---|---|---|
| S | Reta | A = comprimento |
| L | Uma dobra de 90° | A = perna principal, B = perna do gancho, ambas exterior a exterior |
| U | Duas dobras de 90° do mesmo lado | A = meio, B e C = as duas pernas, exterior a exterior |

Os varões de malha com a opção {{ui:Ganchos nas extremidades}} ligada são U; desligada, S. As armaduras de espera com a opção {{ui:Gancho na base}} ligada são L; desligada, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sem número de tipo |
| L | 11, L = A + B − 0.5r − d | sem número de tipo: a figura não tem varão com um só gancho |
| U | 21, A e C as pernas, B o meio: L = A + B + C − r − 2d | Tipo 2, ganchos A e G, reta B |

Com os códigos BS 8666 ou ACI 315, as colunas A, B e C do mapa seguem a letragem dessa norma (o meio de um U é B).

## Comprimento de corte

Para os varões BS 4449, o comprimento de corte é a fórmula da BS 8666 do código de forma do varão (acima). Para os varões ASTM é o comprimento exato do eixo do varão: as partes retas mais as dobras como arcos de metade do diâmetro de dobragem mais metade do diâmetro do varão. Não é calculado a partir de uma tabela de deduções de dobragem, pelo que pode diferir em alguns milímetros de um mapa que use uma.

## Disposição

- Malha inferior: os varões ao longo de L formam a camada inferior; os varões ao longo de B assentam sobre eles. Cada conjunto é distribuído uniformemente pela sapata dentro do recobrimento, com o espaçamento indicado ou menor, e com pelo menos dois varões.
- Armaduras de espera: uma grelha de varões ao longo de L e de B, com os espaçamentos indicados, centrada na sapata, assente na malha e sobressaindo acima do topo pela projeção indicada. Cada gancho aponta para fora.

## Verificações

| Verificação | Regra | Resultado |
|---|---|---|
| Espaço para os varões | O recobrimento dos dois lados deixa espaço para os varões | Recusado se não |
| Altura para duas camadas | A altura menos dois recobrimentos comporta as duas camadas da malha | Recusado se não |
| Armaduras de espera ajustadas | A grelha de espera cabe dentro do recobrimento | Recusado se não |
| Espaçamento livre | Pelo menos o maior valor entre 25.4 mm e db (ACI 318-19 25.2.1; a dimensão do agregado não é verificada) | Aviso |
| Altura para o gancho | A perna do gancho cabe na altura dentro do recobrimento | Aviso, perna encurtada |
| Ganchos das armaduras de espera | Os ganchos ficam fora do recobrimento | Aviso |

## Colunas do mapa de dobragem

O separador {{ui:Mapa de dobragem}} e o seu CSV têm estas colunas: Posição, Dimensão, Forma, A (mm), B (mm), C (mm), Quantidade, Comprimento de corte (mm), Comprimento total (m), kg/m, Peso unitário (kg), Peso total (kg), Utilizado em. A última linha totaliza a quantidade, o comprimento e o peso.
