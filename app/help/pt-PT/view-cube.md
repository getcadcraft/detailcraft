---
title: O cubo de vistas
summary: Clique numa face, aresta ou canto do cubo, no canto da vista, para olhar a partir daí; arraste-o para orbitar, rode o anel da bússola, avance à volta de uma vista de face e volte ao início.
keywords: cubo de vistas, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, superior, frontal, direita, iso, canto, aresta, orbitar, rodar vista, ícone dos eixos, indicador de canto, navegação
from: 3666ea8a
---

O cubo de vistas está no canto superior direito da vista 3D, abaixo da barra de vistas (apenas em {{ui:3D}}: {{ui:Planta}} e {{ui:Alçado}} já olham diretamente para o modelo). Roda com a vista, por isso mostra sempre para onde está a olhar: {{ui:Superior}} fica para cima, {{ui:Frontal}} vira para Sul (o lado a partir do qual se veem as grelhas com letras em {{ui:Alçado}}), {{ui:Direita}} vira para Este, ao longo das grelhas numeradas. Fica transparente até apontar para ele.

## Olhar de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A parte sob o ponteiro acende: o centro de uma face, uma aresta (acende nas duas faces que a partilham) ou um canto (nas três faces).
2. Clique nela. A vista roda para olhar a partir daí, mantendo o mesmo centro e o mesmo zoom.

Há 26 sítios onde clicar: 6 faces ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista a três quartos; uma aresta fica a meio caminho entre duas faces.

Uma vista de face do cubo é uma vista 3D, não {{ui:Planta}} nem {{ui:Alçado}}: nada fica cortado e o modelo continua a poder ser rodado.

## Orbitar arrastando o cubo

Arraste o cubo para rodar a vista, do mesmo modo que orbita na própria vista. Um arrastamento nunca é tomado como clique, por isso pode agarrar o cubo em qualquer ponto.

## O anel da bússola

O anel debaixo do cubo tem N, E, S e O.

- **Arraste o anel** para rodar o modelo em torno do eixo vertical, como se estivesse numa plataforma giratória. O anel segue o ponteiro.
- **Clique numa letra** para olhar a partir desse lado, mantendo a inclinação com que olha para baixo. Numa vista a partir de cima, a letra em que clicou vai para a parte inferior do ecrã.

## Vistas de face: setas

Quando olha diretamente para uma face, aparecem pequenas setas à volta do cubo:

- Os quatro **triângulos** trazem a face desse lado para a frente: o triângulo acima do cubo mostra a face que estava em cima, e assim por diante.
- As duas **setas curvas** no canto superior direito rodam a imagem um quarto de volta no sentido horário ou anti-horário, sem mudar a face para que olha. Use-as para rodar uma planta de modo a que uma parede comprida fique atravessada no ecrã.

## Início

O botão da casa, no canto superior esquerdo do cubo, volta à vista inicial a três quartos e ajusta o modelo inteiro, tal como o botão de ajustar. {{key:Home}} faz o mesmo enquanto o cubo tiver o foco do teclado.

## Com o teclado

{{key:Tab}} até ao cubo e depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe uma face, aresta ou canto à volta do cubo, em passos de um oitavo de volta (os leitores de ecrã dizem qual) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Superior}} ou até {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir do escolhido |
| {{key:Shift+left}} / {{key:Shift+right}} | roda a vista um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas premidas no cubo ficam no cubo: não iniciam ferramentas do DetailCraft.

## Ícone dos eixos ou nada

Abra {{ui:Definições}} ({{key:Mod+,}}), o separador {{ui:DetailCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vistas}} (a predefinição), {{ui:Ícone dos eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X vermelho, Y verde, Z azul) ou {{ui:Nenhum}}. Este navegador memoriza a escolha. Ver [Definições do DetailCraft](topic:settings#corner-indicator).
