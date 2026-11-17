---
title: Colocar sapatas com armaduras
summary: Colocar sapatas isoladas retangulares com malha inferior e armaduras de espera, verificá-las e transferir o mapa de dobragem.
keywords: sapata, sapata isolada, fundação, armadura, reforço, varões, malha, armaduras de espera, espigões, mapa de dobragem, lista de varões, betão, ganchos, recobrimento
from: 41a048be
---

Este tópico trata de sapatas isoladas retangulares. Vigas, pilares, lajes e paredes estão em [Detalhar betão armado](topic:reinforced-concrete). Cada sapata recebe uma malha inferior nos dois sentidos e, se quiser, armaduras de espera que sobem a partir dela. Os varões são dos tamanhos US #3 a #11.

## Colocar uma sapata

1. Escolha {{ui:Plan}} e indique o nível do topo da sapata.
2. Escolha {{ui:Footing}} no grupo {{ui:Place}}, ou prima {{key:F}}.
3. Defina a sapata no painel {{ui:Properties}} (ver abaixo), ou mantenha as predefinições.
4. Clique numa interseção da grelha. A sapata fica centrada nela, com o topo ao nível indicado. A barra de estado indica, por exemplo, "Sapata 2000 x 2000 x 600 sob A/1."

Também pode usar o formulário {{ui:Adicionar por eixo}} na parte inferior do painel.

A sapata é desenhada em transparência, para ver os seus varões, que são desenhados como tubos sólidos.

## Definições da sapata

| Campo | Predefinido | Notas |
|---|---|---|
| Comprimento L (mm) | 2000 | Segundo x; de 300 a 50000 |
| Largura B (mm) | 2000 | Segundo y; de 300 a 50000 |
| Altura H (mm) | 600 | De 150 a 10000 |
| Betão | 4000 psi | Texto, impresso na exportação IFC |

**Malha inferior**

| Campo | Predefinido | Notas |
|---|---|---|
| Varões longos | #5 | Varões ao longo de L, na camada inferior |
| Espaçamento (mm) | 250 | O maior espaçamento permitido; os varões são distribuídos uniformemente a este espaçamento ou menos |
| Varões curtos | #5 | Varões ao longo de B, colocados sobre os varões longos |
| Espaçamento (mm) | 250 | Como acima |
| Recobrimento (mm) | 75 | Recobrimento livre em todas as faces |
| Ganchos nas extremidades | Ligado | Dobra as duas pontas de cada varão da malha num gancho normal de 90° (forma U); desligado dá varões retos (forma S) |

**Armaduras de espera**

| Campo | Predefinido | Notas |
|---|---|---|
| Armaduras de espera | Ligado | Desligado para uma sapata sem armaduras de espera |
| Varão | #6 | |
| Varões ao longo de L / Varões ao longo de B | 2 / 2 | Uma grelha de varões, centrada na sapata |
| Espaçamento ao longo de L / Espaçamento ao longo de B | 250 / 250 | Entre centros dos varões |
| Projeção acima do topo | 600 | Altura a que os varões sobem acima do topo da sapata |
| Gancho na base | Ligado | Gancho de 90° virado para fora, apoiado na malha (forma L) |

Por baixo dos campos, o DetailCraft mostra a perna do gancho dos varões longos, por exemplo "Perna do gancho para #5: 254 mm, de exterior a exterior."

## Alterar uma sapata colocada

Selecione a sapata (clique no betão afastado de qualquer pilar, ou num dos seus varões). Obtém os mesmos campos, mais {{ui:Centro x}}, {{ui:Centro y}}, {{ui:Topo z}} e {{ui:Rotação (°)}}. Por baixo deles, uma tabela lista os varões desta sapata com as respetivas posições, quantidades e comprimentos, e o volume de betão em metros cúbicos.

Cada alteração é verificada antes de ser mantida. Uma alteração que não pode ser construída é recusada e a barra de estado indica o motivo, por exemplo "O recobrimento não deixa espaço para varões nesta sapata.", "A sapata é pouco alta para duas camadas de varões dentro do recobrimento." ou "As armaduras de espera não cabem dentro da sapata com 75 mm de recobrimento."

As alterações que podem ser construídas, mas que exigem uma análise, são listadas por baixo da sapata e no separador {{ui:Problems}}:

- "Varões #11 a 59.6 mm deixam menos de 35.8 mm livres (ACI 318-19 25.2.1)." O espaço livre entre varões tem de ser pelo menos igual ao diâmetro do varão e pelo menos 25.4 mm.
- "Ganchos #5 precisam de 254 mm de altura; só cabem 150 mm dentro do recobrimento." As pernas dos ganchos são então cortadas para caber, pelo que deixam de ser ganchos normalizados.
- "Os ganchos das armaduras de espera entram no recobrimento."
- "As armaduras de espera estão mais próximas do que o espaçamento livre mínimo."

## Marcas dos varões e mapa de dobragem

Varões idênticos (mesmo tamanho, forma e dimensões ao milímetro) partilham a mesma posição em todas as sapatas. As posições são escritas `<número do varão>F<n>`: 5F1, 5F2 para varões #5, 6F1 para o primeiro varão #6, e assim por diante. As sapatas com o mesmo tamanho, betão, malha e armaduras de espera partilham uma marca de sapata: F1, F2 …

1. Abra o separador {{ui:Mapa de dobragem}} na parte inferior. Cada linha é uma posição: tamanho, forma, dimensões A, B e C, quantidade, comprimento de corte, comprimento total, massa por metro, peso de cada um, peso total e a finalidade do varão.
2. Escolha {{ui:Transferir CSV}} no separador, ou {{ui:Dobragem}} no menu {{ui:Mais}} do grupo {{ui:Saída}}, para obter `<name> bending schedule.csv`.

As formas são códigos próprios do DetailCraft, não de uma norma: S reta, L com uma dobra, U com duas dobras. As dimensões são de exterior a exterior; o comprimento de corte é o comprimento exato do eixo ao longo das dobras. Ver [Referência de armaduras](topic:rebar-reference).

## O que o DetailCraft não verifica

- Comprimentos de amarração e de sobreposição, e se as armaduras de espera têm comprimento suficiente para o pilar acima.
- A parte do espaçamento livre que depende da dimensão do agregado (não conhece a composição do betão).
- Tudo o que diga respeito ao pilar ou à chapa de base acima: sapatas e aço são elementos separados.

Ver também [Ainda não implementado](topic:not-built-yet).
