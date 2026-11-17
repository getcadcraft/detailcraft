---
title: Adicionar furos e recortes
summary: Escreva os furos nas almas, nos banzos e nas chapas, e recorte os banzos na extremidade de uma viga, medidos a partir da extremidade de corte da peça.
keywords: furo, furos, furo para parafuso, recorte, entalhe, corte, recortar, furar, puncionar, furo na alma, furo no banzo
from: 33d12398
---

Os furos e os recortes são escritos por posição. Pertencem à barra e movem-se com ela.

Os furos feitos pelas ligações (chapas de topo, chapas de base) são criados por si; não os escreve. Ficam listados como "… furos das ligações (edite a ligação)".

## Onde as posições são medidas

- **x** segue ao longo da peça a partir do seu **início de corte**: a extremidade inicial, depois de qualquer ligação a ter cortado. Assim, x = 0 é a extremidade real do aço, e não o ponto da grelha.
- **y** é medido ao longo da face a partir do centro da secção:
   - na **alma**: para cima (positivo) ou para baixo a partir da meia altura;
   - num **banzo** ou numa **chapa**: ao longo da largura, a partir da linha central.
- O início da barra é o primeiro ponto em que clicou ao colocá-la. As linhas {{ui:Extremidades (x, y, z mm)}} mostram qual é cada extremidade.

## Adicionar um furo

1. Selecione a barra.
2. Na caixa {{ui:Furos}} do painel {{ui:Propriedades}}, escolha a {{ui:Face}}: {{ui:Alma}}, {{ui:Banzo superior}} ou {{ui:Banzo inferior}} (para um perfil I, um U ou um tubo retangular), ou {{ui:Face da chapa}} (para uma chapa).
3. Escreva {{ui:x ao longo (mm)}}, {{ui:y transversal (mm)}} e {{ui:Diâmetro (mm)}}. O formulário começa em x 100, y 0, diâmetro 22.
4. Escolha {{ui:Adicionar furo}}.

A barra de estado indica "Furo adicionado. x é a partir do início de corte; y a partir do centro da secção (alma: para cima; banzo/chapa: transversal)." O furo aparece na lista e, na vista, como um tampão escuro através da face.

Para remover um furo, clique no × ao lado dele na lista.

Cantoneiras e tubos redondos ainda não aceitam furos: a respetiva caixa {{ui:Furos}} indica-o.

:::note
Na vista 3D, os furos são desenhados como tampões escuros, e não cortados através do aço. São furos reais nos ficheiros NC, nos desenhos de fabrico e na exportação IFC.
:::

Um furo cujo x fique além de qualquer extremidade da peça aparece no separador {{ui:Problemas}} como "um furo está fora da extremidade da peça".

## Adicionar um recorte

Os recortes são para perfis I: cortam o banzo superior ou inferior (e essa altura de alma) numa extremidade, para que a viga passe por outra barra.

1. Selecione uma barra de perfil I.
2. Na caixa {{ui:Recortes}}, escolha {{ui:Fim}} ({{ui:Início}} ou {{ui:Fim}}) e {{ui:Lado}} ({{ui:Superior}} ou {{ui:Inferior}}).
3. Escreva {{ui:Comprimento (mm)}} (ao longo da viga a partir dessa extremidade) e {{ui:Profundidade (mm)}} (para baixo a partir do topo, ou para cima a partir da base). O formulário começa em 100 x 40.
4. Escolha {{ui:Adicionar recorte}}.

A vista mostra o recorte cortado no aço. A lista lê, por exemplo, "Superior no início: 100 x 40". Remova-o com o seu ×.

Os recortes são quadrados: ainda não há raio no canto interior.

## Como os furos e recortes afetam as marcas

Duas peças só recebem a mesma marca de peça se os seus furos e recortes coincidirem com uma tolerância de 1 mm, tendo em conta que a peça pode ser virada. Adicionar um furo a uma viga de um grupo dá-lhe uma nova marca. Ver [Regras das marcas](topic:mark-rules).
