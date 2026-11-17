---
title: Colocar pilares, vigas e contraventamentos
summary: Escolha um perfil, um material e uma posição, depois clique nas interseções dos eixos ou escreva-as para colocar elementos de aço.
keywords: pilar, viga, contraventamento, elemento, colocar, perfil, material, rotação, posição, deslocamento, inserir, adicionar por eixo
from: d6db0dc1
---

Os elementos são colocados nas interseções dos eixos: um pilar numa delas, uma viga ou um contraventamento entre duas. Defina primeiro [eixos e níveis](topic:grids-and-levels).

## Escolher uma ferramenta e as suas opções

1. Escolha {{ui:Pilar}} ({{key:C}}), {{ui:Viga}} ({{key:B}}) ou {{ui:Contraventamento}} ({{key:R}}) no grupo {{ui:Colocar}}.
2. O painel {{ui:Propriedades}} à direita passa a "Colocar um pilar" (ou uma viga, ou um contraventamento) e mostra as opções do próximo elemento:
   - {{ui:Perfil}}: escolha na lista. Os tamanhos estão agrupados por catálogo (perfis W, perfis U, cantoneiras, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS e os seus perfis personalizados). Ver [Catálogo de perfis](topic:profile-catalog).
   - {{ui:Material}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 ou S355.
   - {{ui:Posição}}: onde a secção fica na linha entre os dois pontos: {{ui:Face superior do aço no eixo}}, {{ui:Centrado no eixo}} ou {{ui:Face inferior no eixo}}.
   - {{ui:Rotação (°)}}: roda a secção em torno do próprio eixo do elemento.
   - {{ui:Até}} (só pilares): {{ui:O nível seguinte acima}}, ou o nome de um nível.
3. Abaixo das opções, uma caixa {{ui:Perfil}} lista as dimensões da secção escolhida, a área, a massa por metro e o catálogo de onde vem.

As predefinições são W12x50 em A992 para pilares (centrado), W16x26 em A992 para vigas ({{ui:Face superior do aço no eixo}}) e HSS6x6x1/4 em A500 Gr C para contraventamentos (centrado). As opções mantêm-se até as alterar.

## Colocar com clique

### Um pilar

1. Escolha {{ui:Planta}} e escolha o nível onde o pilar começa.
2. Escolha {{ui:Pilar}}.
3. Mova o ponteiro para perto de uma interseção. O ponto mais próximo acende-se e a barra de estado indica-o.
4. Clique. O pilar vai desse nível até ao nível seguinte acima (ou até ao nível de {{ui:Até}}). A barra de estado diz, por exemplo, "Pilar W12x50 em A/1, Nível 1 a Nível 2."
5. Continue a clicar para colocar mais. Prima {{key:Esc}} quando terminar.

Se não houver nenhum nível acima do que clicou, a barra de estado diz: "Não há nenhum nível acima de Nível 2 que o pilar alcance. Adicione primeiro um nível."

### Uma viga

1. Escolha {{ui:Planta}} e escolha o nível da viga.
2. Escolha {{ui:Viga}}.
3. Clique na primeira interseção. A barra de estado diz "De A/1 no Nível 2. Clique agora na outra extremidade (Esc cancela)." Uma linha tracejada segue o ponteiro.
4. Clique na segunda interseção. A viga aparece.
5. Clique de novo para começar a viga seguinte, ou prima {{key:Esc}}.

Um {{key:Esc}} depois do primeiro clique cancela apenas esse ponto; um segundo {{key:Esc}} desativa a ferramenta.

### Um contraventamento

Um contraventamento vai entre duas interseções em níveis diferentes, por isso é mais fácil em {{ui:Alçado}}.

1. Escolha {{ui:Alçado}} e escolha a linha de eixo com letra onde está o contraventamento.
2. Escolha {{ui:Contraventamento}}.
3. Clique na extremidade inferior e depois na superior.

Os alçados existem só para eixos com letra. Para um contraventamento num pórtico ao longo de uma linha numerada (de A a B), use {{ui:3D}} ou o formulário {{ui:Adicionar por eixo}} abaixo.

:::touch
Num ecrã tátil, toque perto da interseção: um toque escolhe o ponto mais próximo a uma curta distância e não faz nada se nenhum ponto estiver perto. Não há realce antes de tocar, por isso verifique a mensagem da barra de estado após cada toque. Arrastar com um dedo roda ou desloca a vista em vez de colocar.
:::

## Colocar por eixo, sem clicar

Todas as ferramentas de colocação têm um formulário {{ui:Adicionar por eixo}} na parte inferior do painel {{ui:Propriedades}}. Funciona só com o teclado e não precisa da vista 3D.

1. Escolha a ferramenta, por exemplo {{ui:Viga}}.
2. Em {{ui:Adicionar por eixo}}, escolha {{ui:Do eixo (letra)}}, {{ui:Do eixo (número)}} e {{ui:Do nível}}.
3. Escolha {{ui:Até ao eixo (letra)}}, {{ui:Até ao eixo (número)}} e {{ui:Até ao nível}}.
4. Escolha {{ui:Adicionar}}.

Para um pilar ou uma sapata, o formulário tem só um ponto: {{ui:Eixo (letra)}}, {{ui:Eixo (número)}} e {{ui:Nível}}.

## Alterar um elemento depois de o colocar

1. Prima {{key:Esc}} (ou escolha {{ui:Selecionar}}, {{key:V}}) e clique no elemento.
2. No painel {{ui:Propriedades}}, altere {{ui:Nome}}, {{ui:Perfil}}, {{ui:Material}}, {{ui:Posição}} ou {{ui:Rotação (°)}}.
3. Para o mover, edite os x, y e z de {{ui:Início}} ou {{ui:Fim}} em {{ui:Extremidades (x, y, z mm)}}. O nome do eixo de cada extremidade aparece por baixo, ou as suas coordenadas quando está fora da grelha.

Cada alteração é um único passo de anulação. Abaixo dos campos vê a {{ui:Marca da peça}}, a {{ui:Montagem}}, o {{ui:Comprimento de corte}}, o {{ui:Peso}} (bruto: os furos e recortes não são descontados) e o catálogo de onde vem o perfil.

Os elementos ainda não podem ser arrastados nem dispostos em matriz. Para fazer outro igual, copie e cole, ou duplique-o ({{key:Mod+D}}): ver [Copiar, colar e duplicar](topic:copy-paste).

## Eliminar um elemento

Selecione-o e prima {{key:Delete}} ou {{key:Backspace}}, ou escolha {{ui:Eliminar}}. As ligações nele também são eliminadas. {{key:Mod+Z}} repõe tudo.

## Coisas a saber

- **Para que lado fica virado um pilar.** Com {{ui:Rotação (°)}} 0, as abas de um pilar ficam viradas ao longo de x, para as linhas de eixo numeradas vizinhas. Uma viga do eixo 1 ao eixo 2 liga-se a uma aba; uma viga de A a B liga-se à alma. As chapas de topo só são construídas em abas, por isso, se as suas vigas vão de A a B, dê a esses pilares uma rotação de 90.
- **As vigas num nível ficam penduradas abaixo dele** com a predefinição {{ui:Face superior do aço no eixo}}. Escolha {{ui:Centrado no eixo}} se os seus níveis forem eixos dos elementos.
- **Os pilares vão de nível a nível.** Para um pilar que atravesse dois pisos, defina {{ui:Até}} como o nível mais alto.
- **Vigas inclinadas** são permitidas (escolha extremidades em níveis diferentes), mas as chapas de topo ainda não são construídas nelas.

Seguinte: [Ligar vigas a pilares com chapas de topo](topic:end-plates).
