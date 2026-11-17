---
title: Cartelas de cizalla
summary: Atornille a alma dunha viga a unha placa soldada en taller a unha aba ou alma dun piar, tamén onde a viga se une ao piar en ángulo en planta ou inclinada.
keywords: cartela de cizalla, placa simple, placa de aleta, conexión simple, conexión por alma, oblicua, oblicuidade, inclinada, en pendente, viga en ángulo, atornillada, unir
from: 18afc8ab
---

Unha cartela de cizalla (placa simple, placa de aleta) é unha placa soldada ao piar en taller; en obra, a alma da viga atornillase a ela cunha fila vertical de parafusos. DetailCraft coloca a cartela, recorta a viga para que quede libre do piar, fura os buratos da cartela e da alma da viga, engade os parafusos e a soldadura, e avisa sobre as distancias ao bordo e o encaixe.

## Onde funciona

- Unha viga (perfil en I ou en U) cuxo extremo está sobre a liña dun piar de perfil en I **vertical**, que se une á súa **aba** ou á súa **alma**.
- **Cuadrada, oblicua en planta ou inclinada**: a cartela segue a alma da viga e a viga recórtase para que a súa esquina máis próxima conserve a separación ao piar. Unha viga que sobe ou baixa a máis de 60° rexéitase.

## Engadir cartelas de cizalla

1. Seleccione a viga.
2. No grupo {{ui:Unir}}, abra {{ui:Máis}} e escolla {{ui:Cartelas de cizalla}} (ou escolla {{ui:Engadir cartelas de cizalla}} no panel {{ui:Propiedades}}).
3. Cada extremo libre da viga que se une a un piar recibe unha cartela. Cada extremo de viga admite unha conexión: unha cartela de cizalla ou unha placa de extremo.

Seleccione unha cartela (prémaa, ou un parafuso) para ver e cambiar a súa configuración. {{ui:Aplicar a similares}} copia a cartela, como cartela de cizalla, a cada unión semellante que aínda non teña conexión.

## Configuración (mm)

| Opción | Inicia en | Significado |
|---|---|---|
| Grosor da placa | 10 | O grosor da cartela |
| Largura da placa | 115 | Ata onde chega a cartela desde a cara do piar, ao longo da viga |
| Diámetro do parafuso, Diámetro do burato, Calidade do parafuso | 20, 22, A325 | Igual que nas placas de extremo |
| Filas de parafusos, Paso entre filas | 3, 75 | Os parafusos da fila vertical |
| Distancia ao bordo (parafusos superior e inferior) | 38 | Desde os parafusos superior e inferior ata os extremos da cartela; a cartela ten de altura filas × paso + 2 × este valor |
| Grupo de parafusos elevado en | 0 | 0 centra os parafusos na altura da viga |
| Separación ao piar | 13 | Separación libre entre o piar e a esquina máis próxima da viga |
| Liña de parafusos desde a cara do piar | 65 | Ao longo da viga, desde a cara do piar ata os parafusos |
| Folga de lonxitude do parafuso | 30 | Engadida ao agarre (cartela + alma da viga), redondeada por enriba a 5 mm |
| Tamaño da soldadura en ángulo | 6 | Os dous lados da cartela ao piar |

## Cousas que convén saber

- A cartela forma parte do conxunto do piar (soldada en taller); o conxunto da viga só ten os buratos.
- Unha viga oblicua ou inclinada recórtase máis atrás que unha cuadrada para que a súa esquina máis próxima conserve a separación. DetailCraft corta as vigas a escuadra: o fabricante corta o extremo segundo corresponda. O bordo da cartela no piar tamén se debuxa a escuadra.
- DetailCraft non comproba a resistencia. Os avisos usan os mínimos da Táboa 3.3 da EN 1993-1-8 para as distancias ao bordo e o paso, e indican cando a cartela é máis alta que a alma da viga entre os seus acordos, ou cando os parafusos quedan demasiado preto do extremo cortado da viga.
- A [comprobación de interferencias](topic:clash-check) deixa fóra unha cartela e os elementos que une: deben encontrarse.
