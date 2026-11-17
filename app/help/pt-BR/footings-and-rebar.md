---
title: Inserir sapatas com armadura
summary: Inserir sapatas isoladas retangulares com malha inferior e barras de espera, verificá-las e baixar a tabela de dobramento.
keywords: sapata, sapata isolada, fundação, armadura, barras, malha, barras de espera, tabela de dobramento, lista de barras, concreto, ganchos, cobrimento
from: 41a048be
---

Este tópico trata de sapatas isoladas retangulares. Vigas, pilares, lajes e paredes estão em [Detalhar concreto armado](topic:reinforced-concrete). Cada sapata recebe uma malha inferior nos dois sentidos e, se desejar, barras de espera saindo dela. As barras são de bitolas americanas #3 a #11.

## Inserir uma sapata

1. Escolha {{ui:Planta}} e selecione o nível do topo da sapata.
2. Escolha {{ui:Sapata}} no grupo {{ui:Inserir}}, ou pressione {{key:F}}.
3. Defina a sapata no painel {{ui:Propriedades}} (veja abaixo), ou mantenha os padrões.
4. Clique em uma interseção de eixos. A sapata é centralizada nela, com o topo no nível. A barra de status diz, por exemplo, "Sapata 2000 x 2000 x 600 sob A/1."

Também é possível usar o formulário {{ui:Adicionar por eixo}} na parte inferior do painel.

A sapata é desenhada transparente para que você veja as barras, que são desenhadas como tubos sólidos.

## Configurações da sapata

| Campo | Padrão | Observações |
|---|---|---|
| Comprimento L (mm) | 2000 | Na direção x; 300 a 50000 |
| Largura B (mm) | 2000 | Na direção y; 300 a 50000 |
| Altura H (mm) | 600 | 150 a 10000 |
| Concreto | 4000 psi | Texto, impresso na exportação IFC |

**Malha inferior**

| Campo | Padrão | Observações |
|---|---|---|
| Barras na direção L | #5 | Barras ao longo de L, na camada inferior |
| Espaçamento (mm) | 250 | O maior espaçamento permitido; as barras são distribuídas igualmente nesse valor ou menor |
| Barras na direção B | #5 | Barras ao longo de B, apoiadas sobre as barras da direção L |
| Espaçamento (mm) | 250 | Igual ao anterior |
| Cobrimento (mm) | 75 | Cobrimento livre em todas as faces |
| Ganchos nas extremidades | Ligado | Dobra as duas extremidades de cada barra da malha em gancho padrão de 90° (forma U); desligado resulta em barras retas (forma S) |

**Barras de espera**

| Campo | Padrão | Observações |
|---|---|---|
| Barras de espera | Ligado | Desligue para uma sapata sem barras de espera |
| Barra | #6 | |
| Barras na direção L / Barras na direção B | 2 / 2 | Uma malha de barras, centralizada na sapata |
| Espaçamento na direção L / Espaçamento na direção B | 250 / 250 | Entre centros das barras |
| Projeção acima do topo | 600 | Quanto as barras se projetam acima do topo da sapata |
| Gancho na base | Ligado | Gancho de 90° voltado para fora, apoiado na malha (forma L) |

Abaixo dos campos, o DetailCraft mostra a perna do gancho das barras na direção L, por exemplo "Perna do gancho para #5: 254 mm de fora a fora."

## Alterar uma sapata inserida

Selecione a sapata (clique no concreto longe de qualquer pilar, ou em uma de suas barras). Você obtém os mesmos campos, mais {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Topo z}} e {{ui:Rotação (°)}}. Abaixo deles, uma tabela lista as barras desta sapata com suas posições, quantidades e comprimentos, e o volume de concreto em metros cúbicos.

Cada alteração é verificada antes de ser mantida. Uma alteração que não pode ser executada é recusada, e a barra de status informa o motivo, por exemplo "O cobrimento não deixa espaço para barras nesta sapata.", "A sapata é rasa demais para duas camadas de barras dentro do cobrimento." ou "As barras de espera não cabem dentro da sapata com cobrimento de 75 mm."

Alterações que podem ser executadas, mas precisam de análise, são listadas abaixo da sapata e na guia {{ui:Problemas}}:

- "Barras #11 a 59.6 mm deixam menos de 35.8 mm livres (ACI 318-19 25.2.1)." O vão livre entre barras deve ser de pelo menos o diâmetro da barra e de pelo menos 25.4 mm.
- "Ganchos #5 precisam de 254 mm de altura; apenas 150 mm cabem dentro do cobrimento." As pernas dos ganchos são então encurtadas para caber, por isso deixam de ser ganchos padrão.
- "Os ganchos das barras de espera alcançam o cobrimento."
- "As barras de espera estão mais próximas do que o espaçamento livre mínimo."

## Posições das barras e tabela de dobramento

Barras idênticas (mesmo tamanho, forma e dimensões até o milímetro) compartilham uma posição de barra em todas as sapatas. As posições são escritas `<número da barra>F<n>`: 5F1, 5F2 para barras #5, 6F1 para a primeira barra #6, e assim por diante. Sapatas com o mesmo tamanho, concreto, malha e barras de espera compartilham uma marca de sapata: F1, F2 …

1. Abra a guia {{ui:Tabela de dobramento}} na parte inferior. Cada linha é uma posição de barra: tamanho, forma, dimensões A, B e C, quantidade, comprimento de corte, comprimento total, massa por metro, peso unitário, peso total e para que a barra é usada.
2. Escolha {{ui:Baixar CSV}} na guia, ou {{ui:Dobramento}} no menu {{ui:Mais}} do grupo {{ui:Saída}}, para `<name> bending schedule.csv`.

As formas são códigos próprios do DetailCraft, não de uma norma: S reta, L com uma dobra, U com duas dobras. As dimensões são de fora a fora; o comprimento de corte é o comprimento exato da linha de centro através das dobras. Veja [Referência de armaduras](topic:rebar-reference).

## O que o DetailCraft não verifica

- Comprimentos de ancoragem e de transpasse, e se as barras de espera são longas o bastante para o pilar acima.
- A parte do tamanho do agregado na regra de espaçamento livre (ele não conhece o traço).
- Qualquer coisa sobre o pilar ou a chapa de base acima: sapatas e aço são separados.

Veja também [O que ainda não foi implementado](topic:not-built-yet).
