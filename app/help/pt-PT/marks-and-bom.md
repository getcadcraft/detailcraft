---
title: Verificar as marcas e a lista de materiais
summary: Leia as marcas de peça e de montagem que o DetailCraft atribui a cada elemento, verifique a lista de materiais e transfira-a em CSV.
keywords: marcas, numeração, marca da peça, marca da montagem, LM, lista de materiais, pesos, lista de parafusos, csv, numeração
from: caa2ee80
---

O DetailCraft marca o modelo por si. Não há nenhum comando de numeração nem nada para executar: após cada alteração, calcula quais as peças que são a mesma peça de aço e atribui-lhes uma só marca.

## Onde aparecem as marcas

- A lista {{ui:Marcas das peças}} no painel {{ui:Modelo}}: cada marca com o seu perfil, comprimento e quantidade. Clique numa para selecionar a primeira peça com essa marca.
- O painel {{ui:Propriedades}} de uma barra selecionada (e a lista **Marcas das peças** no painel esquerdo): {{ui:Marca da peça}} e {{ui:Montagem}}. O cabeçalho do painel também mostra a marca, por exemplo "Viga b1".
- O separador {{ui:Lista de materiais}}, o CSV, os nomes dos ficheiros NC, os desenhos de fabrico e a exportação IFC (como etiqueta de cada elemento).

## Como as peças são marcadas

- **Marcas das peças:** c para pilares, b para vigas, br para contraventamentos, st para longarinas de escada, p para chapas (incluindo chapas de topo e chapas de base). Depois um número: c1, c2, b1, p1 … Quando as peças estão em mais de uma fase, o número da fase vem primeiro, por exemplo 2-b1.
- **Marcas de montagem:** C, B, BR ou P. Uma montagem é uma barra principal e as chapas soldadas a ela, como uma viga com as suas duas chapas de topo, ou um pilar com a sua chapa de base.
- Duas peças partilham uma marca quando têm o mesmo perfil, material e comprimento de corte, e os mesmos furos e recortes, todos dentro de 1 mm, mesmo que uma esteja rodada de ponta a ponta ou de cabeça para baixo em relação à outra.
- A numeração segue primeiro os pilares, depois as vigas, os contraventamentos e as chapas; dentro de cada grupo, pelo nome do perfil, a começar pela mais comprida.

As regras completas, incluindo as rotações que contam para perfis em U e cantoneiras: [Regras das marcas](topic:mark-rules).

:::warning
As marcas são recalculadas após cada alteração, por isso podem renumerar-se. Acrescentar uma peça, mudar um perfil ou acrescentar um furo pode passar b3 a b4. Considere as marcas definitivas só quando o modelo estiver concluído, e faça a LM, os ficheiros NC e os desenhos de fabrico a partir do mesmo modelo guardado.
:::

## Ler a lista de materiais

Abra o separador {{ui:Lista de materiais}} em baixo. Tem três tabelas.

**Peças**, com o peso total do aço no cabeçalho:

| Coluna | Significado |
|---|---|
| Marca da peça | Clique para selecionar a primeira peça com esta marca |
| Tipo | viga, pilar, contraventamento, longarina ou chapa |
| Perfil | Por exemplo W16x26 ou PL20x180 |
| Material | A classe que definiu |
| Comprimento (mm) | Comprimento de corte, depois das ligações |
| Quantidade | Quantas |
| Peso unitário (kg) | Massa do perfil por metro × comprimento |
| Peso total (kg) | Peso unitário × quantidade |

A última linha indica a quantidade e o peso totais.

**Montagens:** cada marca de montagem, a sua peça principal, todas as suas peças (por exemplo "b1 + p1 + p1"), quantidade, peso unitário e peso total.

**Parafusos e chumbadouros:** agrupados por tipo, diâmetro, comprimento e classe, com uma quantidade.

:::note
Os pesos são brutos: os furos e recortes não são descontados. Parafusos, porcas, anilhas e soldaduras não estão incluídos no peso do aço.
:::

## Transferir

Escolha {{ui:Transferir CSV}} no separador, ou {{ui:LM}} no grupo {{ui:Saída}}. O ficheiro `<name> BOM.csv` contém as três tabelas, uma a seguir à outra, cada uma sob o seu título, com uma linha em branco entre elas. Abre em qualquer programa de folhas de cálculo.

## Verificar antes de enviar

1. Abra o separador {{ui:Problemas}} e resolva todas as linhas. Uma ligação que não pôde ser construída não acrescenta chapa, furos nem parafusos, por isso a LM ficaria incompleta.
2. Procure marcas que não esperava. Duas vigas que julga iguais, mas com marcas diferentes, normalmente diferem num furo, num recorte ou num comprimento de corte; selecione cada uma e compare.
3. Guarde o modelo e faça todas as exportações a partir desse estado guardado.
