---
title: Cartelas de riostras
summary: Unir o extremo dunha riostra a un piar ou viga cunha placa de cartela: cantoneiras e pletinas atornilladas, tubos ranurados e soldados.
keywords: cartela, placa de cartela, riostra, arriostramento, arriostramento vertical, riostra en cantoneira, pletina, tirante, riostra HSS, placa de coitela, tubo ranurado, unir
from: 22f6598d
---

Unha cartela de riostra é unha placa soldada en taller ao piar (ou viga) onde cae a riostra, no plano da riostra. DetailCraft recorta a riostra para que quede libre de todo na unión, coloca e dimensiona a cartela e une a riostra a ela: unha **cantoneira** ou unha **pletina** con unha liña de parafusos, ou un **tubo** (cadrado, rectangular ou redondo HSS) ranurado sobre a cartela e soldado.

## Onde funciona

- O extremo da riostra cae sobre a liña dun piar ou dunha viga (a menos de 1 mm), e a riostra non é case paralela a esa liña. Un piar é o apoio cando o hai; se non, a viga.
- A cartela queda no plano da riostra e da liña do apoio. Unha **cantoneira** debe ter unha aba nese plano, e unha **pletina** a súa cara: xire a riostra (o seu {{ui:Rotación (°)}}) ata que o cumpra. Con as abas da cantoneira a 45° do plano, DetailCraft informa e non constrúe nada.
- Os perfís en I e en U como riostras non se unen.

## Engadir cartelas

1. Seleccione unha ou máis riostras.
2. Escolla {{ui:Cartela}} no menú {{ui:Máis}} do grupo {{ui:Unir}}.
3. Cada extremo das riostras seleccionadas que cae sobre un piar ou viga e non ten cartela recibe unha.

Seleccione unha cartela (prema na placa) para cambiar os seus axustes. {{ui:Aplicar a similares (n)}} copia a cartela a cada extremo libre de riostra co mesmo perfil de riostra e de apoio.

## Que calcula DetailCraft

- **Recorte.** A riostra acórtase nese extremo ata que as súas esquinas queden libres, por {{ui:Folga da riostra}} (25), por cada elemento do nó (ao lado, ou máis aló do seu extremo cando o elemento termina alí) e por unha placa base debaixo do piar.
- **Parafusos (cantoneiras, pletinas).** {{ui:Parafusos}} (3) nunha liña ao longo da riostra, o primeiro a {{ui:Distancia ao extremo do parafuso}} (40) da extremidade cortada, con {{ui:Paso do parafuso}} (75). Nunha cantoneira atravesan a aba no plano da cartela, a {{ui:Entrepaso do parafuso}} do talón (0 = o centro da aba); nunha pletina, no seu eixo central (ou desprazados polo entrepaso). Espesor a unir = aba ou pletina + cartela.
- **A cartela.** Un rectángulo: desde a cara do apoio ata máis aló do último parafuso pola distancia ao extremo, e ao longo do apoio canto precisen os parafusos. Apóiase contra o dorso da aba da cantoneira (ou a cara da pletina). Nun tubo atravesa o centro do tubo, con {{ui:Solape do tubo sobre a cartela}} (200) do tubo, con espazo para as soldaduras.
- **Nós.** Na base dun piar a cartela baixa ata a placa base. Onde unha viga cruza o nó (unha riostra que sobe ata a esquina viga-piar), a cartela queda debaixo ou enriba da viga. Se iso deixa os parafusos ou o solape sen a súa distancia ao extremo, DetailCraft avisa.
- **Soldaduras.** A cartela ao seu apoio, polos dous lados. Un tubo á cartela, catro liñas ao longo do solape.

## Bo saber

- A cartela pertence ao conxunto do apoio (soldada en taller). A riostra sae cos seus furos feitos e vai ao seu propio ficheiro NC.
- A ranura dun tubo non se corta no modelo; o [control de interferencias](topic:clash-check) deixa en paz a riostra e a súa cartela.
- A cartela non se solda a unha viga que toca. As cartelas de esquina soldadas á vez a viga e ao piar, os cantos achaflanados e o trazado por punto de traballo dunha conexión Uniform Force Method aínda non se fan.
- DetailCraft non deseña a cartela nin os parafusos (sen comprobacións de resistencia); os avisos son de espazamento e axuste.
