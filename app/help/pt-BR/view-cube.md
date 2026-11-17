---
title: O cubo de vista
summary: Clique em uma face, aresta ou canto do cubo no canto da vista para olhar de lá, arraste-o para girar, gire o anel da bússola, avance entre vistas de face e volte à vista inicial.
keywords: cubo de vista, viewcube, cubo, bússola, norte, vista inicial, vistas padrão, superior, frontal, direita, iso, canto, aresta, órbita, girar vista, ícone de eixos, indicador de canto, navegação
from: 3666ea8a
---

O cubo de vista fica no canto superior direito da vista 3D, abaixo da barra de vista (somente em {{ui:3D}}: {{ui:Planta}} e {{ui:Elevação}} já olham diretamente para o modelo). Ele gira com a vista, então sempre mostra para onde você está olhando: {{ui:Superior}} fica para cima, {{ui:Frontal}} fica voltado para o sul (o lado de onde se veem os eixos com letras na {{ui:Elevação}}), {{ui:Direita}} fica voltado para o leste, ao longo dos eixos numerados. Ele fica translúcido até você apontar para ele.

## Olhar de um lado, de uma aresta ou de um canto

1. Aponte para o cubo. A parte sob o ponteiro acende: o centro de uma face, uma aresta (acende nas duas faces que ela une) ou um canto (nas três faces).
2. Clique nela. A vista gira para olhar de lá, mantendo o mesmo centro e o mesmo zoom.

Há 26 lugares para clicar: 6 faces ({{ui:Superior}}, {{ui:Inferior}}, {{ui:Frontal}}, {{ui:Posterior}}, {{ui:Esquerda}}, {{ui:Direita}}), 12 arestas e 8 cantos. Um canto dá a clássica vista de três quartos; uma aresta olha a meio caminho entre duas faces.

Uma vista de face do cubo é uma vista 3D, não {{ui:Planta}} ou {{ui:Elevação}}: nada é cortado, e o modelo ainda pode ser girado.

## Orbitar arrastando o cubo

Arraste o cubo para girar a vista, igual à órbita na própria vista. Um arrasto nunca é tomado como clique, então você pode pegar o cubo em qualquer ponto.

## O anel da bússola

O anel abaixo do cubo traz N, L, S e O.

- **Arraste o anel** para girar o modelo em torno do eixo vertical, como se estivesse em uma plataforma giratória. O anel acompanha o ponteiro.
- **Clique em uma letra** para olhar desse lado, mantendo a inclinação com que você olha para baixo. Em uma vista de cima, a letra clicada vai para a parte inferior da tela.

## Vistas de face: setas

Quando você olha diretamente para uma face, pequenas setas aparecem ao redor do cubo:

- Os quatro **triângulos** trazem a face daquele lado para a frente: o triângulo acima do cubo mostra a face que estava no topo, e assim por diante.
- As duas **setas curvas** no canto superior direito giram a imagem um quarto de volta no sentido horário ou anti-horário, sem mudar a face para a qual você olha. Use-as para girar uma planta de modo que uma parede longa atravesse a tela.

## Início

O botão de casa no canto superior esquerdo do cubo volta à vista inicial de três quartos e ajusta o modelo inteiro à tela, igual ao botão de ajustar. {{key:Home}} faz o mesmo enquanto o cubo tiver o foco do teclado.

## Com o teclado

{{key:Tab}} até o cubo, depois:

| Tecla | Faz |
|---|---|
| {{key:left}} / {{key:right}} | escolhe uma face, aresta ou canto ao redor do cubo, em passos de um oitavo de volta (leitores de tela dizem qual é) |
| {{key:up}} / {{key:down}} | escolhe um mais alto ou mais baixo, até {{ui:Superior}} ou até {{ui:Inferior}} |
| {{key:Enter}} ou {{key:Space}} | olha a partir do escolhido |
| {{key:Shift+left}} / {{key:Shift+right}} | gira a vista um quarto de volta em torno do eixo vertical |
| {{key:Home}} | a vista inicial |
| {{key:Esc}} | sai do cubo |

As teclas pressionadas no cubo ficam com o cubo: elas não acionam ferramentas do DetailCraft.

## Ícone de eixos ou nada

Abra {{ui:Configurações}} ({{key:Mod+,}}), a aba {{ui:DetailCraft}}, e defina **Indicador de canto** como {{ui:Cubo de vista}} (o inicial), {{ui:Ícone de eixos}} (um pequeno marcador X, Y, Z no canto inferior esquerdo: X vermelho, Y verde, Z azul) ou {{ui:Nenhum}}. Este navegador lembra a escolha. Veja [Configurações do DetailCraft](topic:settings#corner-indicator).
