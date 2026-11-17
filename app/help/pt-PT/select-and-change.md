---
title: Selecionar com janela, mover, rodar, espelhar, alterar muitos
summary: Arraste uma janela para selecionar, arraste as peças selecionadas para as mover, mova, rode ou espelhe a seleção (ou uma cópia dela), ou altere o perfil, o material, a posição ou a rotação de muitas barras de uma só vez.
keywords: laço, vedação, seleção à mão livre, arrastar, arrastar e largar, mover arrastando, snap, janela, cruzamento, seleção por caixa, arrastar para selecionar, selecionar muitos, mover, rodar, espelhar, inverter, copiar, alterar muitos, várias barras, perfil, material, posição, rotação, varia, linha da grelha
from: 50b16f9a
---

Cada uma destas ações é um único passo de anular: um {{key:Mod+Z}} desfaz tudo.

## Selecionar com uma janela

- Em {{ui:Planta}} e {{ui:Alçado}}, arraste com o botão esquerdo a partir de um ponto vazio. Em {{ui:3D}}, mantenha {{key:Shift}} premido e arraste (um arrastar simples roda o modelo).
- Arraste **para a direita** para uma janela: apanha o que está totalmente dentro, desenhada com uma linha contínua.
- Arraste **para a esquerda** para uma janela de cruzamento: apanha tudo o que toca, desenhada a tracejado.
- Mantenha {{key:Shift}} premido ao iniciar o arrastar para acrescentar à seleção em vez de a substituir.
- Uma planta ou um alçado só oferece o que mostra: as peças cortadas acima da planta, ou a mais de 1 m da linha da grelha do alçado, não são selecionadas.
- {{key:Esc}} durante o arrastar cancela a janela.

### Laço

Escolha **Laço** em {{ui:Arrastar para selecionar}} nas [Definições do DetailCraft](topic:settings), e o mesmo arrastar desenha uma linha à mão livre em vez de um retângulo.

- O primeiro movimento lateral decide como seleciona: **para a direita**, o que fica totalmente dentro (linha contínua); **para a esquerda**, o que toca (tracejado).
- Prima {{key:Space}} durante o arrastar para alternar entre dentro, tocar e **vedação**: uma linha aberta que apanha tudo o que atravessa (pontilhado, laranja).
- {{key:Shift}} para acrescentar e {{key:Esc}} para cancelar funcionam como na janela.

:::touch
Num ecrã tátil, um dedo desloca a vista (pan) da planta e do alçado, como antes; selecione as peças tocando nelas.
:::

Em {{ui:Planta}} e {{ui:Alçado}}, desloque a vista (pan) com o botão direito ou o do meio enquanto a ferramenta {{ui:Selecionar}} estiver ativa.

## Arrastar peças para as mover

1. Selecione primeiro as peças (clique, {{key:Shift}}+clique ou uma janela).
2. Carregue numa das peças selecionadas e arraste. Toda a seleção se move; um contorno a tracejado mostra para onde vai.
3. Largue para a colocar. {{key:Esc}} antes de largar repõe tudo no sítio.

- Em {{ui:3D}} e {{ui:Planta}}, as peças movem-se pelo piso. Mantenha {{key:Mod}} premido ao iniciar o arrastar em {{ui:3D}} para as mover para cima e para baixo.
- Em {{ui:Alçado}} movem-se dentro do alçado: ao longo da linha da grelha e para cima e para baixo.
- A peça que segura faz snap a uma interseção da grelha quando a sua extremidade fica a alguns pixels de uma (a interseção fica destacada e a barra de estado indica-a). Fora disso, o movimento faz-se em passos de 10 mm.
- Carregar numa peça não selecionada continua a rodar ou a deslocar a vista, por isso um arrastar nunca move algo por engano.
- O arrastar é um único passo de anular, como {{ui:Mover}}. As ligações seguem as suas barras.

## Alterar uma propriedade em muitas barras

Selecione duas ou mais barras. Em **Alterar em todas elas** no painel {{ui:Propriedades}}:

- {{ui:Perfil}}, {{ui:Posição}}: para as vigas, pilares e contraventamentos entre elas.
- {{ui:Espessura da chapa (mm)}} e {{ui:Largura da chapa (mm)}}: para as chapas.
- {{ui:Material}} e {{ui:Rotação (°)}}: para todas.

Um campo mostra **Varia** quando as barras não concordam. Escolha ou escreva um valor, e cada barra a que ele se aplica fica com ele; a barra de estado indica quantas foram alteradas e quantas mantiveram a sua.

Os campos numéricos do painel {{ui:Propriedades}} também aceitam um cálculo: `2*450`, `4500/3`, `(1200-2*25)/2`, `6-1/2`. Um cálculo que não possa ser lido é recusado, e a barra de estado indica onde está o erro.

## Mover, rodar ou espelhar

Selecione barras e sapatas (uma só também serve) e depois use **Mover, rodar, espelhar** no painel {{ui:Propriedades}}. As ligações não se movem sozinhas: seguem as suas barras. Se mover uma viga mas não o seu pilar, a barra de estado indica quantas ligações passam a unir uma barra movida a uma que ficou, e [Problemas](topic:troubleshooting) diz se deixaram de encaixar.

- **Mover:** escreva x, y e z em milímetros e escolha {{ui:Mover}}. Ou escolha {{ui:Escolher dois pontos}} (ou prima {{key:M}}): clique na interseção da grelha de partida e depois na de chegada. Um contorno a tracejado segue o ponteiro.
- **Rodar em planta:** escreva o ângulo (no sentido contrário ao dos ponteiros do relógio, visto de cima) e escolha em torno de quê rodar: o centro da seleção ou uma interseção da grelha. Os pilares rodam com o referencial.
- **Espelhar:** escolha uma linha da grelha. A imagem espelhada é o mesmo perfil virado para o outro lado: um perfil em I mantém as suas abas, um perfil em U fica virado para o lado oposto (o topo e a base trocam), e os furos e recortes acompanham a peça.
- Marque **Manter o original (criar uma cópia)** para deixar a seleção onde está e mover, rodar ou espelhar uma cópia. As suas ligações vêm junto quando {{ui:Copiar as chapas de topo e as chapas de base com as suas barras}} estiver ativo nas [Definições do DetailCraft](topic:settings).

Rodar faz-se em torno de uma linha vertical e espelhar faz-se num plano vertical, por isso os pisos continuam nivelados e as sapatas continuam verticais.
