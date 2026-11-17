---
title: Selecionar com janela, mover, girar, espelhar, alterar várias
summary: Arraste uma janela para selecionar, arraste as peças selecionadas para movê-las, mova, gire ou espelhe a seleção (ou uma cópia dela), ou altere o perfil, material, posição ou rotação de várias barras de uma vez.
keywords: laço, cerca, seleção à mão livre, arrastar, arrastar e soltar, mover arrastando, snap, janela, cruzamento, seleção por caixa, arrastar para selecionar, selecionar várias, mover, girar, espelhar, inverter, copiar, alterar várias, várias barras, perfil, material, posição, rotação, varia, linha da grade
from: 50b16f9a
---

Cada uma dessas ações é um único passo de desfazer: um {{key:Mod+Z}} desfaz tudo.

## Selecionar com uma janela

- Em {{ui:Planta}} e {{ui:Elevação}}, arraste com o botão esquerdo a partir de um espaço vazio. Em {{ui:3D}}, mantenha {{key:Shift}} pressionado e arraste (um arrasto simples gira o modelo).
- Arraste **para a direita** para uma janela: ela pega o que está totalmente dentro, desenhada com contorno contínuo.
- Arraste **para a esquerda** para uma janela de cruzamento: ela pega tudo o que tocar, desenhada tracejada.
- Mantenha {{key:Shift}} pressionado ao iniciar o arrasto para adicionar à seleção em vez de substituí-la.
- Uma planta ou elevação oferece apenas o que mostra: peças cortadas acima da planta, ou a mais de 1 m da linha de grade da elevação, não são selecionadas.
- {{key:Esc}} durante o arrasto descarta a janela.

### Laço

Escolha **Laço** em {{ui:Arrastar para selecionar}} nas [configurações do DetailCraft](topic:settings) e o mesmo arrasto desenha uma linha à mão livre em vez de um retângulo.

- Seu primeiro movimento para o lado define como ele seleciona: **para a direita**, o que está totalmente dentro (linha contínua); **para a esquerda**, o que ele toca (tracejada).
- Pressione {{key:Space}} durante o arrasto para alternar entre dentro, toque e **cerca**: uma linha aberta que pega o que ela cruza (pontilhada, laranja).
- {{key:Shift}} para adicionar e {{key:Esc}} para descartar funcionam como na janela.

:::touch
Em uma tela de toque, um dedo faz pan na planta e na elevação como antes; selecione as peças tocando nelas.
:::

Em {{ui:Planta}} e {{ui:Elevação}}, faça pan com o botão direito ou do meio enquanto a ferramenta {{ui:Selecionar}} estiver ativa.

## Arrastar peças para movê-las

1. Primeiro, selecione as peças (clique, {{key:Shift}}+clique ou uma janela).
2. Pressione sobre uma das peças selecionadas e arraste. Toda a seleção se move; um contorno tracejado mostra para onde ela vai.
3. Solte para posicionar. {{key:Esc}} antes de soltar devolve tudo ao lugar.

- Em {{ui:3D}} e {{ui:Planta}}, as peças se movem pelo nível. Mantenha {{key:Mod}} pressionado ao iniciar o arrasto em {{ui:3D}} para movê-las para cima e para baixo.
- Em {{ui:Elevação}}, elas se movem dentro da elevação: ao longo da linha de grade e para cima e para baixo.
- A peça que você segura encaixa na interseção da grade quando sua extremidade chega a alguns pixels de uma delas (a interseção acende e a barra de status a nomeia). Em outros pontos, o movimento segue em passos de 10 mm.
- Pressionar sobre uma peça não selecionada ainda gira ou faz pan na vista, então um arrasto nunca move algo por acidente.
- O arrasto é um único passo de desfazer, como {{ui:Mover}}. As ligações acompanham suas barras.

## Alterar uma propriedade em várias barras

Selecione duas ou mais barras. Em **Alterar em todas elas** no painel {{ui:Propriedades}}:

- {{ui:Perfil}}, {{ui:Posição}}: para as vigas, pilares e contraventamentos entre elas.
- {{ui:Espessura da chapa (mm)}} e {{ui:Largura da chapa (mm)}}: para as chapas.
- {{ui:Material}} e {{ui:Rotação (°)}}: para todas elas.

Um campo mostra **Varia** quando as barras não concordam. Escolha ou digite um valor e cada barra à qual ele se aplica o recebe; a barra de status informa quantas mudaram e quantas mantiveram o seu.

Os campos numéricos do painel {{ui:Propriedades}} também aceitam um cálculo: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Um cálculo que não pode ser lido é recusado, e a barra de status diz onde está o erro.

## Mover, girar ou espelhar

Selecione barras e sapatas (uma única também serve) e use **Mover, girar, espelhar** no painel {{ui:Propriedades}}. As ligações não se movem sozinhas: elas acompanham suas barras. Se você mover uma viga mas não o seu pilar, a barra de status informa quantas ligações agora unem uma barra movida a uma que ficou parada, e [Problemas](topic:troubleshooting) diz se elas não encaixam mais.

- **Mover:** digite x, y e z em milímetros e escolha {{ui:Mover}}. Ou escolha {{ui:Escolher dois pontos}} (ou pressione {{key:M}}): clique na interseção da grade de origem e depois na de destino. Um contorno tracejado acompanha o ponteiro.
- **Girar em planta:** digite o ângulo (anti-horário, visto de cima) e escolha em torno de quê girar: o centro da seleção ou uma interseção da grade. Os pilares giram com o quadro.
- **Espelhar:** escolha uma linha da grade. A imagem espelhada é o mesmo perfil virado ao contrário: um perfil I mantém suas mesas, um perfil U fica voltado para o outro lado (seu topo e base trocam de lugar), e furos e rebaixos acompanham a peça.
- Marque **Manter o original (criar uma cópia)** para deixar a seleção onde está e mover, girar ou espelhar uma cópia. As ligações da cópia vêm junto quando {{ui:Copiar chapas de extremidade e chapas de base junto com as barras}} estiver ativo em [configurações do DetailCraft](topic:settings).

Girar acontece em torno de uma linha vertical e espelhar ocorre em um plano vertical; assim, os níveis permanecem nivelados e as sapatas permanecem na vertical.
