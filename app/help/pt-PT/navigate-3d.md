---
title: Deslocar-se na vista 3D
summary: Rodar, deslocar e fazer zoom com um rato, um trackpad ou um ecrã tátil, e quando usar a Planta e o Alçado em vez disso.
keywords: órbita, rodar, deslocar, zoom, navegar, vista, câmara, trackpad, toque, planta, alçado, ajustar, rato
from: 02c9c7b9
---

A vista tem três modos, escolhidos na barra de vista acima dela: {{ui:3D}}, {{ui:Planta}} e {{ui:Alçado}}. Os botões do rato fazem coisas diferentes em 3D do que em Planta e Alçado, por isso leia as duas tabelas.

## Em 3D

:::mouse
| Para | Faça isto |
|---|---|
| Rodar em torno do modelo | Arraste com o botão esquerdo |
| Deslocar a vista | Arraste com o botão direito, ou mantenha {{key:Shift}} premida e arraste com o botão esquerdo |
| Fazer zoom | Rode a roda, ou arraste para cima e para baixo com o botão do meio (com a roda premida) |
| Selecionar uma peça | Clique nela (um clique que move menos de alguns pixels) |
| Ver o modelo inteiro | O botão {{ui:Ajustar}} na extremidade direita da barra de vista |
:::

:::touch
| Para | Faça isto |
|---|---|
| Rodar em torno do modelo | Arraste com um dedo |
| Deslocar a vista | Arraste com dois dedos |
| Fazer zoom | Pinça com dois dedos |
| Selecionar uma peça | Toque nela |
| Ver o modelo inteiro | O botão {{ui:Ajustar}} na extremidade direita da barra de vista |
:::

O cubo de vistas no canto superior direito (por baixo da barra de vista) roda com o modelo: clique numa face, aresta ou canto para olhar a partir daí, arraste-o para rodar, ou clique no seu botão de casa para voltar ao início. Veja [O cubo de vistas](topic:view-cube).

O modelo roda em torno do centro da vista, e a roda faz zoom para o centro da vista, não para o ponteiro. Para ver de perto um canto, desloque-o primeiro para o centro e depois faça zoom.

## Em Planta e Alçado

Estas vistas olham diretamente para o modelo e não podem ser rodadas.

:::mouse
| Para | Faça isto |
|---|---|
| Deslocar a vista | Arraste com o botão esquerdo ou com o direito |
| Fazer zoom | Rode a roda, ou arraste para cima e para baixo com o botão do meio |
| Selecionar uma peça | Clique nela |
:::

:::touch
| Para | Faça isto |
|---|---|
| Deslocar a vista | Arraste com um dedo |
| Fazer zoom | Pinça com dois dedos (arrastar com dois dedos também desloca a vista) |
| Selecionar uma peça | Toque nela |
:::

## Em trackpad de Mac

:::mac
- **Zoom:** deslize para cima ou para baixo com dois dedos, ou pinça. Ambos chegam à vista como zoom.
- **Rodar (3D):** prima o trackpad e arraste com um dedo. Se usar tocar para clicar, o duplo toque e arrastar também funciona quando o arrastar está ativado em **Definições do Sistema, Acessibilidade, Controlo do Ponteiro, Opções do Trackpad**.
- **Deslocar (3D):** mantenha {{key:Shift}} premida e arraste. Manter {{key:Ctrl}} ou {{key:Mod}} premida ao arrastar também desloca. Um clique com dois dedos é um clique com o botão direito, mas arrastar com ele é incómodo num trackpad.
- **Deslocar (Planta e Alçado):** basta arrastar.
- Um Magic Mouse não tem botão do meio: use o arrastar com {{key:Shift}} para deslocar e um deslize na sua superfície para fazer zoom.
:::

Mais sobre clicar com o botão direito e deslocar sem rato: [Teclas, ratos e trackpads](common:keys).

## Planta e Alçado facilitam a colocação

Em {{ui:3D}}, os cruzamentos em níveis diferentes podem ficar uns sobre os outros no ecrã, e um clique vai para o ponto mais próximo. Em {{ui:Planta}} e {{ui:Alçado}} só os pontos do nível ou da linha de eixo que está a ver podem ser escolhidos.

1. Escolha {{ui:Planta}} e depois um nível na lista ao lado dos botões. A vista olha para baixo, para esse nível; tudo o que estiver mais de 1.5 m acima dele é cortado.
2. Ou escolha {{ui:Alçado}} e depois uma linha de eixo com letra ("Eixo A", "Eixo B" …). A vista olha diretamente para essa linha; só o aço a menos de 1 m dela é mostrado.

Os alçados só existem nas linhas de eixo com letra. Para trabalhar numa linha de eixos numerados (um pórtico que vai de A a B), use {{ui:3D}}, ou coloque por escrita no formulário {{ui:Adicionar por eixo}}. Veja [Colocar pilares, vigas e contraventamentos](topic:place-members#place-by-grid-without-clicking).

## Selecionar

- Clique numa peça para a selecionar. Ela passa à cor de realce e o painel {{ui:Propriedades}} mostra-a.
- Clique num espaço vazio, ou prima {{key:Esc}}, para limpar a seleção.
- O aço tem prioridade sobre o betão: um clique num pilar dentro de uma sapata transparente seleciona o pilar. Clique na sapata longe do pilar, ou num dos seus varões, para selecionar a sapata.
- Clicar num parafuso ou numa chapa de topo seleciona a respetiva ligação.
- Em Planta e Alçado, as peças que foram cortadas não podem ser clicadas.
- Mantenha {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) premida e clique para acrescentar uma peça à seleção ou retirá-la; {{key:Mod+A}} seleciona tudo. Ainda não há seleção por janela (arrastar uma caixa). O que pode fazer com várias: [Copiar, colar e duplicar](topic:copy-paste).

Também pode selecionar a partir de listas: clique numa marca em {{ui:Marcas das peças}} à esquerda, numa marca de peça no separador {{ui:Lista de materiais}}, ou em {{ui:Selecionar}} ao lado de uma linha em {{ui:Problemas}}.

## Se a vista parecer errada

- Perdeu o modelo? Escolha o botão {{ui:Ajustar}}.
- A vista está em branco ou cinzenta com uma mensagem sobre WebGL: veja [Resolução de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Tudo continua a funcionar sem a vista 3D, exceto clicar nela: os painéis, relatórios e exportações funcionam todos, e {{ui:Adicionar por eixo}} coloca elementos por escrita.
