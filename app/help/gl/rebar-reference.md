---
title: Referencia de armadura
summary: Tamaños de barra, dimensións dos ganchos, códigos de forma, lonxitudes de corte e as columnas do cadro de dobrado que usa DetailCraft.
keywords: armadura, tamaños de barra, ganchos, diámetro de dobrado, códigos de forma, lonxitude de corte, cadro de dobrado, lista de barras, astm a615, aci 318
from: 1583535e
---

## Tamaños de barra

Segundo a Táboa 1 da ASTM A615/A615M (designacións en unidades inglesas). Os milímetros e os kg/m son conversións exactas dos valores publicados en polgadas e lb/ft. As listas mostran cada tamaño así, por exemplo, "#5 (15.9 mm)".

| Barra | Diámetro (mm) | Masa (kg/m) | Área (mm²) | Diámetro interior de dobrado | Perna do gancho de 90°, de exterior a exterior (mm) |
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

Nos [Configuración de DetailCraft](topic:settings) ({{ui:Armadura}}), os **Nomes de barra ASTM** poden mostrar estas barras polos seus nomes métricos blandos A615M: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (as mesmas barras; a Táboa 1 da ACI 315-99 recolle ambos).

### Barras métricas (BS 4449)

| Barra | Diámetro (mm) | kg/m | Raio mínimo de dobrado r (mm) | Perna do gancho = proxección extrema P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

A masa é a sección nominal por 7850 kg/m³. O raio e a proxección extrema son os mínimos de BS 8666:2020 (a súa táboa de dimensións mínimas; o antigo diámetro é 2r). As zapatas con barras BS levan pernas de gancho de P e lonxitudes de corte segundo as fórmulas de BS 8666 de abaixo. Escoller aceiro europeo na configuración fai que as novas zapatas comecen con mallas de H16 e barras de arranque de H20 en formigón C30/37.

## Ganchos

Barras ASTM: ganchos estándar de 90° segundo a Táboa 25.3.1 da ACI 318-19: diámetro interior de dobrado de 6 db para #3 a #8 e de 8 db para #9 a #11, cunha prolongación recta de 12 db despois do dobrado. A perna do gancho, medida de exterior a exterior, é a metade do diámetro de dobrado + db + 12 db.

Se o gancho dunha barra de malla non cabe na altura da zapata dentro do recubrimento, DetailCraft acurta a perna para que caiba e amosa un aviso.

## Formas

DetailCraft almacena tres formas. O cadro de dobrado as imprime como códigos de DetailCraft, como tipos da ACI 315 ou como códigos de forma da BS 8666: escolla **Códigos de forma do cadro de dobrado** en [Configuración de DetailCraft](topic:settings) ({{ui:Armadura}}).

| Código | Forma | Dimensións |
|---|---|---|
| S | Recta | A = lonxitude |
| L | Un dobrado de 90° | A = perna principal, B = perna do gancho, ambas de exterior a exterior |
| U | Dous dobrados de 90° no mesmo lado | A = central, B e C = as dúas pernas, de exterior a exterior |

As barras de malla con {{ui:Ganchos nos extremos}} activados son U; sen eles, S. As barras de arranque con {{ui:Gancho na parte inferior}} activado son L; sen el, S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (Fig. 10) |
|---|---|---|
| S | 00, L = A | sen número de tipo |
| L | 11, L = A + B − 0.5r − d | sen número de tipo: a figura non ten barra con un só gancho |
| U | 21, A e C as pernas, B a central: L = A + B + C − r − 2d | Tipo 2, ganchos A e G, B recta |

Cos códigos BS 8666 ou ACI 315, as columnas A, B e C do cadro seguen a letración desa norma (o central dunha U é B).

## Lonxitude de corte

Para as barras BS 4449, a lonxitude de corte é a fórmula de BS 8666 do código de forma da barra (enriba). Para as barras ASTM, é a lonxitude exacta da liña central da barra: as partes rectas máis os dobrados como arcos de metade do diámetro de dobrado máis metade do diámetro da barra. Non se calcula a partir dunha táboa de deducións de dobrado, así que pode diferir en uns poucos milímetros dun cadro que sí a use.

## Disposición

- Malla inferior: as barras ao longo de L forman a capa inferior, e as barras ao longo de B descansan sobre elas. Cada conxunto distribúese de forma uniforme pola zapata dentro do recubrimento, co espazamento que dea ou máis pequeno, e con polo menos dúas barras.
- Barras de arranque: unha cuadrícula de barras ao longo de L e de B cos espazamentos que dea, centrada na zapata, apoiada na malla e sobresaíndo por enriba da cara superior a proxección que dea. Cada gancho apunta cara a fóra.

## Comprobacións

| Comprobación | Regra | Resultado |
|---|---|---|
| Espazo para as barras | O recubrimento dos dous lados deixa espazo para as barras | Rexeitada se non |
| Altura para dúas capas | A altura menos dous recubrimentos acolle as dúas capas de malla | Rexeitada se non |
| Caben as barras de arranque | A cuadrícula de arranque cabe dentro do recubrimento | Rexeitada se non |
| Espazamento libre | Polo menos o maior de 25.4 mm e db (ACI 318-19 25.2.1; non se comproba o tamaño do árido) | Aviso |
| Altura do gancho | A perna do gancho cabe na altura dentro do recubrimento | Aviso; perna acurtada |
| Ganchos de arranque | Os ganchos quedan fóra do recubrimento | Aviso |

## Columnas do cadro de dobrado

A lapela {{ui:Cadro de dobrado}} e o seu CSV teñen estas columnas: Marca da barra, Tamaño, Forma, A (mm), B (mm), C (mm), Cantidade, Lonxitude de corte (mm), Lonxitude total (m), kg/m, Peso de cada unidade (kg), Peso total (kg), Usada para. A última fila suma a cantidade, a lonxitude e o peso.
