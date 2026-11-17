---
title: Adicionar furos e rebaixos
summary: Digite furos em almas, mesas e chapas, e faça rebaixos nas mesas em uma extremidade de viga, medidos a partir da extremidade de corte da peça.
keywords: furo, furos, furo de parafuso, rebaixo, entalhe, corte, recorte, perfurar, puncionar, furo na alma, furo na mesa
from: 33d12398
---

Furos e rebaixos são digitados pela posição. Eles pertencem à barra e se movem com ela.

Os furos feitos por ligações (chapas de extremidade, chapas de base) são adicionados automaticamente; você não os digita. Eles aparecem listados como "… furos de ligações (edite a ligação)".

## De onde as posições são medidas

- **x** segue ao longo da peça a partir do seu **início de corte**: a extremidade inicial depois que qualquer ligação a tiver recortado. Assim, x = 0 é a extremidade real do aço, não o ponto do eixo.
- **y** é medido através da face a partir do centro da seção:
   - na **alma**: para cima (positivo) ou para baixo a partir da meia-altura;
   - em uma **mesa** ou em uma **chapa**: na largura, a partir da linha de centro.
- O início da barra é o primeiro ponto em que você clicou ao inseri-la. As linhas {{ui:Extremidades (x, y, z mm)}} mostram qual extremidade é qual.

## Adicionar um furo

1. Selecione a barra.
2. Na caixa {{ui:Furos}} do painel {{ui:Propriedades}}, escolha a {{ui:Face}}: {{ui:Alma}}, {{ui:Mesa superior}} ou {{ui:Mesa inferior}} (para perfil I, perfil U ou tubo retangular), ou {{ui:Face da chapa}} (para uma chapa).
3. Digite {{ui:x ao longo (mm)}}, {{ui:y transversal (mm)}} e {{ui:Diâmetro (mm)}}. O formulário começa com x 100, y 0, diâmetro 22.
4. Escolha {{ui:Adicionar furo}}.

A barra de status diz "Furo adicionado. x é medido a partir do início de corte; y a partir do centro da seção (alma: para cima; mesa/chapa: na largura)." O furo aparece na lista e, na vista, como um tampão escuro através da face.

Para remover um furo, escolha o × ao lado dele na lista.

Cantoneiras e tubos redondos ainda não aceitam furos: a caixa {{ui:Furos}} delas informa isso.

:::note
Na vista 3D, os furos são desenhados como tampões escuros, não cortados no aço. Eles são furos reais nos arquivos NC, nos desenhos de fabricação e na exportação IFC.
:::

Um furo cujo x esteja além de qualquer extremidade da peça aparece na guia {{ui:Problemas}} como "um furo está fora da extremidade da peça".

## Adicionar um rebaixo

Rebaixos são para perfis I: eles recortam a mesa superior ou inferior (e essa altura de alma) em uma extremidade, para que a viga livre outra barra.

1. Selecione uma barra de perfil I.
2. Na caixa {{ui:Rebaixos}}, escolha {{ui:Fim}} ({{ui:Início}} ou {{ui:Fim}}) e {{ui:Lado}} ({{ui:Superior}} ou {{ui:Inferior}}).
3. Digite {{ui:Comprimento (mm)}} (ao longo da viga a partir dessa extremidade) e {{ui:Profundidade (mm)}} (para baixo a partir do topo, ou para cima a partir da base). O formulário começa com 100 x 40.
4. Escolha {{ui:Adicionar rebaixo}}.

A vista mostra o rebaixo recortado no aço. A lista traz, por exemplo, "Superior no início: 100 x 40". Remova-o com o seu ×.

Os rebaixos são retos: ainda não há raio no canto interno.

## Como furos e rebaixos afetam as marcas

Duas peças recebem a mesma marca de peça somente se seus furos e rebaixos coincidirem dentro de 1 mm, considerando a peça virada. Adicionar um furo a uma viga de um grupo lhe dá uma nova marca. Veja [Regras de marcas](topic:mark-rules).
