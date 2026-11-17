---
title: Engadir buratos e recortes
summary: Escriba buratos nas almas, nas abas e nas placas, e recorte as abas nun extremo dunha viga, medido desde o extremo cortado da peza.
keywords: burato, buratos, burato de parafuso, recorte, entalla, corte, recortar, taladrar, punzonar, burato na alma, burato na aba
from: 33d12398
---

Os buratos e os recortes escríbense por posición. Pertencen á barra e móvense con ela.

Os buratos feitos polas conexións (placas de extremo, placas de base) engádense por vostede; non os escribe. Aparecen como "… buratos de conexións (editar a conexión)".

## De onde se miden as posicións

- **x** vai ao longo da peza desde o seu **inicio cortado**: o extremo de inicio despois de calquera conexión que o recortase. Así, x = 0 é o extremo real do aceiro, non o punto da cuadrícula.
- **y** mídese a través da cara desde o centro da sección:
   - na **alma**: cara arriba (positivo) ou cara abaixo desde a mitade da altura;
   - nunha **aba** ou nunha **placa**: a través do ancho, desde a liña central.
- O inicio da barra é o primeiro punto no que fixo clic ao colocala. As filas {{ui:Extremos (x, y, z mm)}} indican cal é cada extremo.

## Engadir un burato

1. Seleccione a barra.
2. Na caixa {{ui:Buratos}} do panel {{ui:Propiedades}}, escolla a {{ui:Cara}}: {{ui:Alma}}, {{ui:Aba superior}} ou {{ui:Aba inferior}} (para unha sección en I, en U ou un tubo rectangular), ou {{ui:Cara da placa}} (para unha placa).
3. Escriba {{ui:x ao longo (mm)}}, {{ui:y transversal (mm)}} e {{ui:Diámetro (mm)}}. O formulario comeza en x 100, y 0, diámetro 22.
4. Escolla {{ui:Engadir burato}}.

A barra de estado indica "Burato engadido. x dende o inicio do corte; y dende o centro da sección (alma: arriba, aba/placa: transversal)." O burato aparece na lista, e na vista como un tapón escuro atravesando a cara.

Para retirar un burato, escolla o × ao seu lado na lista.

As cantoneiras e os tubos redondos aínda non admiten buratos: a súa caixa {{ui:Buratos}} indícao.

:::note
Na vista 3D os buratos debúxanse como tapóns escuros, non cortados a través do aceiro. Son buratos reais nos ficheiros NC, nos debuxos de taller e na exportación IFC.
:::

Un burato cuxa x está máis aló de calquera extremo da peza aparece na pestana {{ui:Problemas}} como "un burato está fóra do extremo da peza".

## Engadir un recorte

Os recortes son para perfís en I: córtan a aba superior ou inferior (e esa profundidade de alma) nun extremo, para que a viga libre outra barra.

1. Seleccione unha barra de perfil en I.
2. Na caixa {{ui:Recortes}}, escolla o {{ui:Final}} ({{ui:Inicio}} ou {{ui:Final}}) e o {{ui:Lado}} ({{ui:Superior}} ou {{ui:Inferior}}).
3. Escriba {{ui:Lonxitude (mm)}} (ao longo da viga desde ese extremo) e {{ui:Profundidade (mm)}} (cara abaixo desde arriba, ou cara arriba desde abaixo). O formulario comeza en 100 x 40.
4. Escolla {{ui:Engadir recorte}}.

A vista amosa o recorte cortado no aceiro. A lista di, por exemplo, "Superior no inicio: 100 x 40". Retíreo co seu ×.

Os recortes son cuadrados: por agora non hai radio na esquina interior.

## Como os buratos e os recortes afectan as marcas

Dúas pezas só reciben a mesma marca de peza se os seus buratos e recortes coinciden con marxe de 1 mm, tendo en conta que a peza pode darse a volta. Engadir un burato a unha viga dun grupo lle dá unha marca nova. Ver [Regras de marcas](topic:mark-rules).
