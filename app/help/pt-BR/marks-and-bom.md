---
title: Verificar marcas e a lista de materiais
summary: Leia as marcas de peça e de montagem que o DetailCraft dá a cada peça, confira a lista de materiais e baixe-a como CSV.
keywords: marcas, numeração, marca da peça, marca de montagem, marca de peça, bom, lista de materiais, pesos, lista de parafusos, csv
from: caa2ee80
---

O DetailCraft marca o modelo sozinho. Não há comando de numeração nem nada a executar: a cada alteração ele descobre quais peças são o mesmo pedaço de aço e lhes dá uma única marca.

## Onde as marcas aparecem

- A lista {{ui:Marcas das peças}} no painel {{ui:Modelo}}: cada marca com seu perfil, comprimento e quantidade. Clique em uma para selecionar a primeira peça com essa marca.
- O painel {{ui:Propriedades}} de uma barra selecionada (e a lista **Marcas das peças** no painel da esquerda): {{ui:Marca da peça}} e {{ui:Montagem}}. O cabeçalho do painel também mostra a marca, por exemplo "Viga b1".
- A aba {{ui:Lista de materiais}}, o CSV, os nomes dos arquivos NC, os desenhos de fabricação e a exportação IFC (como etiqueta de cada elemento).

## Como as peças são marcadas

- **Marcas das peças:** c para pilares, b para vigas, br para contraventamentos, st para longarinas de escada, p para chapas (incluindo chapas de extremidade e chapas de base). Depois, um número: c1, c2, b1, p1 … Quando as peças estão em mais de uma fase, o número da fase vem primeiro, por exemplo 2-b1.
- **Marcas de montagem:** C, B, BR ou P. Uma montagem é uma barra principal e as chapas soldadas a ela, como uma viga com suas duas chapas de extremidade, ou um pilar com sua chapa de base.
- Duas peças compartilham uma marca quando têm o mesmo perfil, material e comprimento de corte, e os mesmos furos e rebaixos, tudo dentro de 1 mm, mesmo que uma esteja invertida de ponta a ponta ou de cabeça para baixo em relação à outra.
- A numeração segue a ordem: primeiro pilares, depois vigas, contraventamentos e chapas; dentro de cada grupo, pelo nome do perfil e, depois, do maior para o menor.

As regras completas, incluindo quais giros contam para perfis U e cantoneiras: [Regras de marcação](topic:mark-rules).

:::warning
As marcas são recalculadas a cada alteração, então podem ser renumeradas. Adicionar uma peça, mudar um perfil ou adicionar um furo pode mudar b3 para b4. Considere as marcas definitivas somente quando o modelo estiver concluído, e gere a LM, os arquivos NC e os desenhos de fabricação a partir do mesmo modelo salvo.
:::

## Ler a lista de materiais

Abra a aba {{ui:Lista de materiais}} na parte inferior. Ela tem três tabelas.

**Peças**, com o peso total do aço no cabeçalho:

| Coluna | Significado |
|---|---|
| Marca da peça | Clique nela para selecionar a primeira peça com esta marca |
| Tipo | viga, pilar, contraventamento, longarina ou chapa |
| Perfil | Por exemplo W16x26 ou PL20x180 |
| Material | A classe que você definiu |
| Comprimento (mm) | Comprimento de corte, após as ligações |
| Contagem | Quantidade |
| Peso unitário (kg) | Massa do perfil por metro × comprimento |
| Peso total (kg) | Peso unitário × contagem |

A última linha traz a contagem e o peso totais.

**Montagens:** cada marca de montagem, sua peça principal, todas as suas peças (por exemplo "b1 + p1 + p1"), contagem, peso unitário e peso total.

**Parafusos e chumbadores:** agrupados por tipo, diâmetro, comprimento e classe, com a contagem.

:::note
Os pesos são brutos: furos e rebaixos não são descontados. Parafusos, porcas, arruelas e soldas não entram no peso do aço.
:::

## Baixar

Escolha {{ui:Baixar CSV}} na aba, ou {{ui:LM}} no grupo {{ui:Saída}}. O arquivo `<name> BOM.csv` contém as três tabelas, uma após a outra, cada uma sob seu título, com uma linha em branco entre elas. Ele abre em qualquer programa de planilhas.

## Verifique antes de enviar

1. Abra a aba {{ui:Problemas}} e resolva todas as linhas. Uma ligação que não pôde ser construída não adiciona chapa, furos nem parafusos, e a LM sairia incompleta.
2. Procure marcas que você não esperava. Duas vigas que você acha iguais, mas com marcas diferentes, geralmente diferem por um furo, um rebaixo ou um comprimento de corte; selecione cada uma e compare.
3. Salve o modelo e depois faça todas as exportações a partir desse estado salvo.
