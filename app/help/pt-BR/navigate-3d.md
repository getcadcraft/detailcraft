---
title: Movimentar-se na vista 3D
summary: Gire, faça pan e dê zoom com mouse, trackpad ou tela de toque, e saiba quando usar Planta e Elevação em vez disso.
keywords: órbita, girar, pan, zoom, navegar, vista, câmera, trackpad, toque, planta, elevação, ajustar, mouse
from: 02c9c7b9
---

A vista tem três modos, escolhidos na barra de vista acima dela: {{ui:3D}}, {{ui:Planta}} e {{ui:Elevação}}. Os botões do mouse fazem coisas diferentes em 3D do que em Planta e Elevação, por isso leia as duas tabelas.

## Em 3D

:::mouse
| Para | Faça isto |
|---|---|
| Girar em torno do modelo | Arraste com o botão esquerdo |
| Fazer pan | Arraste com o botão direito, ou segure {{key:Shift}} e arraste com o botão esquerdo |
| Dar zoom | Gire a roda, ou arraste para cima e para baixo com o botão do meio (roda pressionada) |
| Selecionar uma peça | Clique nela (um clique que se move menos de alguns pixels) |
| Ver o modelo inteiro | O botão Ajustar no lado direito da barra de vista |
:::

:::touch
| Para | Faça isto |
|---|---|
| Girar em torno do modelo | Arraste com um dedo |
| Fazer pan | Arraste com dois dedos |
| Dar zoom | Pince com dois dedos |
| Selecionar uma peça | Toque nela |
| Ver o modelo inteiro | O botão Ajustar no lado direito da barra de vista |
:::

O cubo de vista no canto superior direito (abaixo da barra de vista) gira com o modelo: clique em uma face, aresta ou canto para olhar a partir dali, arraste para girar, ou clique no botão de início para voltar ao início. Veja [O cubo de vista](topic:view-cube).

O modelo gira em torno do centro da vista, e a roda dá zoom em direção ao centro da vista, não ao ponteiro. Para olhar de perto um canto, faça pan dele até o centro primeiro, depois dê zoom.

## Em Planta e Elevação

Essas vistas olham diretamente para o modelo e não podem ser giradas.

:::mouse
| Para | Faça isto |
|---|---|
| Fazer pan | Arraste com o botão esquerdo ou direito |
| Dar zoom | Gire a roda, ou arraste para cima e para baixo com o botão do meio |
| Selecionar uma peça | Clique nela |
:::

:::touch
| Para | Faça isto |
|---|---|
| Fazer pan | Arraste com um dedo |
| Dar zoom | Pince com dois dedos (arrastar com dois dedos também faz pan) |
| Selecionar uma peça | Toque nela |
:::

## No trackpad do Mac

:::mac
- **Zoom:** deslize para cima ou para baixo com dois dedos, ou pince. Ambos chegam à vista como zoom.
- **Girar (3D):** pressione o trackpad e arraste com um dedo. Se você usa toque para clicar, tocar duas vezes e arrastar também funciona quando o arrastar estiver ativado em **Ajustes do Sistema, Acessibilidade, Controle do Ponteiro, Opções do Trackpad**.
- **Pan (3D):** segure {{key:Shift}} e arraste. Segurar {{key:Ctrl}} ou {{key:Mod}} enquanto arrasta também faz pan. Um clique com dois dedos é um clique com o botão direito, mas arrastar com ele é incômodo em um trackpad.
- **Pan (Planta e Elevação):** basta arrastar.
- O Magic Mouse não tem botão do meio: use o arrastar com {{key:Shift}} para fazer pan e um deslize na sua superfície para dar zoom.
:::

Mais sobre o clique com o botão direito e o pan sem mouse: [Teclas, mouse e trackpads](common:keys).

## Planta e Elevação facilitam o posicionamento

Em {{ui:3D}}, cruzamentos em níveis diferentes podem ficar um sobre o outro na tela, e um clique vai para o ponto mais próximo. Em {{ui:Planta}} e {{ui:Elevação}}, só os pontos do nível ou da linha de eixo que você está vendo podem ser escolhidos.

1. Escolha {{ui:Planta}} e depois um nível na lista ao lado dos botões. A vista olha de cima para esse nível; tudo o que estiver mais de 1.5 m acima dele fica oculto.
2. Ou escolha {{ui:Elevação}} e depois uma linha de eixo com letra ("Eixo A", "Eixo B" …). A vista olha diretamente para essa linha; só o aço a menos de 1 m dela é mostrado.

As elevações existem apenas nas linhas de eixo com letra. Para trabalhar em uma linha de eixos numerados (um pórtico que vai de A a B), use {{ui:3D}}, ou posicione digitando no formulário {{ui:Adicionar por eixo}}. Veja [Posicionar pilares, vigas e contraventamentos](topic:place-members#place-by-grid-without-clicking).

## Selecionar

- Clique em uma peça para selecioná-la. Ela muda para a cor de destaque, e o painel {{ui:Propriedades}} a mostra.
- Clique em um espaço vazio, ou pressione {{key:Esc}}, para limpar a seleção.
- O aço tem prioridade sobre o concreto: um clique em um pilar dentro de uma sapata transparente seleciona o pilar. Clique na sapata longe do pilar, ou em uma de suas barras, para selecionar a sapata.
- Clicar em um parafuso ou em uma chapa de extremidade seleciona a sua ligação.
- Em Planta e Elevação, as peças ocultas não podem ser clicadas.
- Segure {{key:Shift}} (ou {{key:Ctrl}}, ou {{key:Mod}}) e clique para adicionar uma peça à seleção ou removê-la; {{key:Mod+A}} seleciona tudo. Ainda não há seleção por janela (arrastar uma caixa). O que você pode fazer com várias: [Copiar, colar e duplicar](topic:copy-paste).

Você também pode selecionar a partir de listas: clique em uma marca em {{ui:Marcas das peças}} à esquerda, em uma marca da peça na guia {{ui:Lista de materiais}}, ou em {{ui:Selecionar}} ao lado de uma linha em {{ui:Problemas}}.

## Se a vista parecer errada

- Perdeu o modelo? Escolha o botão Ajustar.
- A vista está em branco ou cinza com uma mensagem sobre WebGL: veja [Solução de problemas](topic:troubleshooting#the-3d-view-is-missing).
- Tudo continua funcionando sem a vista 3D, exceto clicar nela: os painéis, relatórios e exportações funcionam, e {{ui:Adicionar por eixo}} posiciona as barras por digitação.
