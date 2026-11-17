---
title: Inserir pilares, vigas e contraventamentos
summary: Escolha um perfil, material e posição, depois clique nas interseções das grades ou digite-as para inserir barras de aço.
keywords: pilar, viga, contraventamento, barra, inserir, perfil, material, rotação, posição, deslocamento, colocar, adicionar por eixo
from: d6db0dc1
---

As barras são colocadas nas interseções das grades: um pilar em uma delas, uma viga ou um contraventamento entre duas. Defina [grades e níveis](topic:grids-and-levels) antes.

## Escolha uma ferramenta e suas opções

1. Escolha {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) ou {{ui:Contraventamento}} ({{key:R}}) no grupo {{ui:Inserir}}.
2. O painel {{ui:Propriedades}} à direita passa a mostrar "Inserir um pilar" (ou viga, ou contraventamento) e exibe as opções da próxima barra:
   - {{ui:Perfil}}: escolha na lista. Os tamanhos são agrupados por catálogo (perfis W, Perfil U, Cantoneiras, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS e seus perfis personalizados). Veja [Catálogo de perfis](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ou S355.
   - {{ui:Posição}}: onde a seção fica na linha entre os dois pontos: {{ui:Topo do aço na linha}}, {{ui:Centralizado na linha}} ou {{ui:Base na linha}}.
   - {{ui:Rotação (°)}}: gira a seção em torno do próprio eixo da barra.
   - {{ui:Até}} (só pilares): {{ui:O próximo nível acima}}, ou o nome de um nível.
3. Abaixo das opções, uma caixa {{ui:Perfil}} lista as dimensões da seção escolhida, a área, a massa por metro e o catálogo de onde ela vem.

Os padrões são W12x50 em A992 para pilares (centralizado), W16x26 em A992 para vigas (topo do aço na linha) e HSS6x6x1/4 em A500 Gr C para contraventamentos (centralizado). As opções permanecem definidas até você alterá-las.

## Colocar clicando

### Um pilar

1. Escolha {{ui:Planta}} e selecione o nível em que o pilar começa.
2. Escolha {{ui:Pilar}}.
3. Mova o ponteiro perto de uma interseção. O ponto mais próximo acende e a barra de status o identifica.
4. Clique. O pilar vai desse nível até o próximo nível acima (ou até o nível em {{ui:Até}}). A barra de status diz, por exemplo, "Pilar W12x50 em A/1, Nível 1 a Nível 2."
5. Continue clicando para inserir mais. Pressione {{key:Esc}} quando terminar.

Se não houver nível acima do que você clicou, a barra de status diz "Não há nível acima de Nível 2 para o pilar alcançar. Adicione um nível antes."

### Uma viga

1. Escolha {{ui:Planta}} e selecione o nível da viga.
2. Escolha {{ui:Viga}}.
3. Clique na primeira interseção. A barra de status diz "De A/1 no Nível 2. Agora clique na outra extremidade ({{key:Esc}} cancela)." Uma linha tracejada segue o ponteiro.
4. Clique na segunda interseção. A viga aparece.
5. Clique de novo para começar a próxima viga, ou pressione {{key:Esc}}.

{{key:Esc}} após o primeiro clique cancela só esse ponto; um segundo {{key:Esc}} guarda a ferramenta.

### Um contraventamento

Um contraventamento vai entre duas interseções em níveis diferentes, então é mais fácil em {{ui:Elevação}}.

1. Escolha {{ui:Elevação}} e selecione a grade com letra em que o contraventamento está.
2. Escolha {{ui:Contraventamento}}.
3. Clique na extremidade inferior e depois na superior.

Elevações existem só para grades com letra. Para um contraventamento em um pórtico ao longo de uma linha numerada (de A a B), use {{ui:3D}} ou o formulário {{ui:Adicionar por eixo}} abaixo.

:::touch
Em uma tela de toque, toque perto da interseção: um toque escolhe o ponto mais próximo a uma curta distância e não faz nada se nenhum ponto estiver perto. Não há destaque antes de tocar, então confira a mensagem da barra de status após cada toque. Arrastes com um dedo giram ou deslocam a vista em vez de inserir.
:::

## Colocar pela grade, sem clicar

Toda ferramenta de inserção tem um formulário {{ui:Adicionar por eixo}} na parte inferior do painel {{ui:Propriedades}}. Ele funciona só com o teclado e não precisa da vista 3D.

1. Escolha a ferramenta, por exemplo {{ui:Viga}}.
2. Em {{ui:Adicionar por eixo}}, escolha {{ui:Do eixo (letra)}}, {{ui:Do eixo (número)}} e {{ui:Do nível}}.
3. Escolha {{ui:Até o eixo (letra)}}, {{ui:Até o eixo (número)}} e {{ui:Até o nível}}.
4. Escolha {{ui:Adicionar}}.

Para um pilar ou uma fundação, o formulário tem um só ponto: {{ui:Eixo (letra)}}, {{ui:Eixo (número)}} e {{ui:Nível}}.

## Alterar uma barra depois de inseri-la

1. Pressione {{key:Esc}} (ou escolha {{ui:Selecionar}}, {{key:V}}) e clique na barra.
2. No painel {{ui:Propriedades}}, altere {{ui:Nome}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posição}} ou {{ui:Rotação (°)}}.
3. Para mover, edite x, y e z de {{ui:Início}} ou {{ui:Fim}} em {{ui:Extremidades (x, y, z mm)}}. O nome da grade de cada extremidade aparece embaixo, ou suas coordenadas quando ela está fora da grade.

Cada alteração é um passo de desfazer. Abaixo dos campos você vê a {{ui:Marca da peça}}, a {{ui:Montagem}}, o {{ui:Comprimento de corte}}, o {{ui:Peso}} (bruto: furos e rebaixos não são descontados) e de qual catálogo vem o perfil.

Barras ainda não podem ser arrastadas nem distribuídas em matriz. Para criar outra igual, copie e cole, ou duplique ({{key:Mod+D}}): veja [Copiar, colar e duplicar](topic:copy-paste).

## Excluir uma barra

Selecione-a e pressione {{key:Delete}} ou {{key:Backspace}}, ou escolha {{ui:Excluir}}. As ligações nela também são excluídas. {{key:Mod+Z}} traz tudo de volta.

## Coisas a saber

- **Para que lado um pilar fica.** Com {{ui:Rotação (°)}} 0, as mesas de um pilar ficam voltadas ao longo de x, em direção às grades numeradas vizinhas. Uma viga da grade 1 à grade 2 se encaixa numa mesa; uma viga de A a B se encaixa na alma. Chapas de extremidade são construídas só nas mesas, então, se suas vigas vão de A a B, dê a esses pilares uma rotação de 90.
- **Vigas em um nível ficam abaixo dele** com o padrão {{ui:Topo do aço na linha}}. Escolha {{ui:Centralizado na linha}} se seus níveis forem eixos das barras.
- **Pilares vão de nível a nível.** Para um pilar que atravessa dois pavimentos, defina {{ui:Até}} como o nível mais alto.
- **Vigas inclinadas** são permitidas (escolha extremidades em níveis diferentes), mas chapas de extremidade ainda não são criadas nelas.

Próximo: [Ligue vigas a pilares com chapas de extremidade](topic:end-plates).
