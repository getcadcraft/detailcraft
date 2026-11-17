---
title: Engadir placas base e varillas de anclaxe
summary: Colocar unha placa base soldada con catro varillas de anclaxe debaixo dun piar, definir as súas dimensións e copiala a cada piar similar.
keywords: placa base, varillas de anclaxe, parafusos de anclaxe, parafusos de fixación, base de piar, parafusos de cimentación, similar
from: 619ebc64
---

Unha conexión con placa base coloca unha placa debaixo do piar, acorta o piar polo grosor da placa, solda os dous xuntos e engade catro varillas de anclaxe que pasan por furos da placa.

:::warning
Os tamaños son valores de partida, non un deseño. DetailCraft non comproba o aplastamento, a resistencia das varillas nin o empotramento.
:::

## Engadir unha placa base

1. Escolla {{ui:Seleccionar}} ({{key:V}}) e prema nun piar. Ten que ser vertical.
2. Escolla {{ui:Placa base}} no grupo {{ui:Unir}}, ou {{ui:Engadir placa base}} no panel {{ui:Propiedades}}.
3. A barra de estado indica "Placa base engadida con catro varillas de anclaxe." A nova conexión queda seleccionada.

Un piar só pode ter unha placa base. Se xa ten unha, a barra de estado indica "Este piar xa ten unha placa base."

## Cambiala

Seleccione a placa base (prema na placa ou nunha varilla). Baixo {{ui:Placa, parafusos e soldadura (mm)}}:

| Axuste | Predeterminado | Función |
|---|---|---|
| Grosor da placa | 25 | O piar acórtase en esta medida |
| Lonxitude da placa | 450 | Ao longo do fondo do piar |
| Largura da placa | 400 | Transversal ao piar |
| Diámetro da varilla | 20 | Tamaño da varilla de anclaxe |
| Diámetro do furo | 33 | Furo na placa |
| Calidade do parafuso | F1554 Gr 36 | A calidade da varilla, como texto |
| Espazamento das varillas (ao longo do fondo) | 350 | Entre os centros das varillas, ao longo da lonxitude da placa |
| Espazamento das varillas (transversal) | 300 | Entre os centros das varillas, transversalmente |
| Saínte das varillas sobre a placa | 100 | Desde a parte superior da placa ata a parte superior da varilla |
| Empotramento das varillas baixo a placa | 450 | Desde a cara inferior da placa ata o formigón |
| Tamaño da soldadura de filete | 8 | En todo o contorno da base do piar |
| Material da placa | A36 | Texto |
| Espazo de morteiro | 0 | Espazo entre a parte superior do formigón e a cara inferior da placa |
| Rigidizadores | Ningún | Escolla Ningún, 2 (en liña coa alma) ou 4 (tamén en ángulo recto con ela); ver abaixo |
| Grosor e altura do rigidizador | 12, 150 | |
| Profundidade do dente de cortante | 0 | Ata onde chega o dente baixo a placa; 0 = sen dente |
| Grosor e largura do dente de cortante | 25, 150 | |
| Arandelas de placa | Ningunha | En cada varilla, ou ningunha |
| Tamaño e grosor da arandela | 0, 0 | 0 = o mínimo da AISC Design Guide 1 para a varilla |

A lonxitude da varilla = empotramento + espazo de morteiro + grosor da placa + saínte. Cos valores predeterminados é 575 mm.

## Detalles da base: morteiro, rigidizadores, dente de cortante, arandelas

Os catro están desactivados nunha placa base nova e nas placas base dos modelos feitos antes de DetailCraft 0.4.

- **Espazo de morteiro.** A placa queda esta distancia por riba da parte superior do formigón, e as varillas alárganse outro tanto. AISC Design Guide 1 (2.10) suxire 1 in. nun piso acabado e 1½ a 2 in. nunha zapata ou pilar; máis para placas grandes e placas con dente de cortante.
- **Rigidizadores.** Placas verticais soldadas ao piar e á placa, desde a cara do piar ata o bordo da placa, como rectángulos (aínda sen chafrán nin conicidade). **2** están en liña coa alma, máis aló de cada ala; **4** engade dous en ángulo recto coa alma, entre as alas, ata os lados da placa. Nun piar de tubo sitúanse no centro de cada cara. Cada un está soldado ao piar e á placa polos dous lados.
- **Dente de cortante.** Unha placa soldada por todo o contorno debaixo da placa base, en liña coa lonxitude do piar e centrada. DetailCraft avisa se non é máis fondo que o espazo de morteiro. Non corta o oco na zapata; por iso o [control de interferencias](topic:clash-check) deixa fóra o dente e a zapata.
- **Arandelas de placa.** Unha arandela cadrada en cada varilla, apoiada sobre a placa base, e listada no conxunto do piar como solta (entregada co piar, non soldada: Design Guide 1, 2.6). Con tamaño e grosor 0, DetailCraft toma a arandela mínima da AISC Design Guide 1, 2ª ed., Táboa 2.3 para a varilla; unha varilla métrica toma a medida en polgadas seguinte (unha varilla M20 toma a fila de 7/8 in.: 2½ in. × 5/16 in.). O panel de propiedades mostra o tamaño usado. O furo da arandela é o diámetro da varilla + 1/16 in.: é escolla de DetailCraft, a táboa non dá ningún. DetailCraft avisa cando as varillas poden non sobresaír o suficiente para a arandela e unha porca (saínte menor que o grosor da arandela + o diámetro da varilla).

Design Guide 1, Táboa 2.3, tamén recomenda o furo da varilla na placa: 1-5/16 in. para unha varilla de ¾ in., 1-9/16 in. para ⅞ in., 1-13/16 in. para 1 in. DetailCraft non cambia o tamaño do seu furo.

Hai avisos tamén cando os furos das varillas están máis preto do bordo da placa que 1,2 × o diámetro do furo, cando as varillas caen dentro do contorno do piar, ou cando a placa é máis pequena que o piar.

## Copiala a piares similares

1. Seleccione a placa base.
2. Escolla {{ui:Aplicar a similares (n)}}, ou {{ui:Similar}} no menú {{ui:Máis}} do grupo {{ui:Unir}}.
3. Cada piar vertical co mesmo perfil que non teña placa base e non se apoie noutro piar recibe unha copia.

## Placas base e zapatas

Unha placa base non necesita zapata, e unha zapata non coñece a placa base de enriba: as varillas de anclaxe non se atan ás barras da zapata. Coloque as zapatas con {{ui:Zapata}}; ver [Colocar zapatas con armadura](topic:footings-and-rebar).
