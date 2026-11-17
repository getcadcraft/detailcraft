---
title: Lista de corte
summary: Organize as vigas, pilares, contraventamentos e longarinas de escada em comprimentos de material bruto, com a espessura do corte da serra, e veja quantas barras comprar e a perda.
keywords: lista de corte, encaixe, comprimento de material bruto, barra, espessura do corte, serra, sobra, retalho, perda, combinação, compra, múltiplos
from: 81d06ce5
---

A guia {{ui:Lista de corte}}, sob a vista, calcula como cortar as peças lineares do modelo a partir de barras de material bruto: quantas barras de cada comprimento comprar para cada perfil e material, o que vai em cada barra, e a perda.

## Definir o material bruto

No topo da guia:

- **Comprimentos de material bruto (mm):** os comprimentos que você pode comprar, separados por espaços, por exemplo `6000 12000`, ou barras de 20 ft e 40 ft como `6096 12192`. Até oito.
- **Espessura do corte da serra (mm):** o que cada corte consome (3 como valor inicial).
- **Aparo da extremidade (mm):** o corte retirado da ponta de cada barra antes da primeira peça (0 como valor inicial).
- **Manter sobras a partir de (mm):** uma sobra com pelo menos este comprimento volta para o estoque; uma menor é sucata (500 como valor inicial).

Estes valores ficam guardados neste navegador, como as outras [configurações](topic:settings).

## Como o encaixe funciona

- Cada viga, pilar, contraventamento e longarina de escada, por marca de peça e quantidade; chapas são cortadas de chapa e não são encaixadas aqui.
- Cada perfil e material separadamente.
- As peças mais longas primeiro, cada uma na primeira barra em que cabe; uma nova barra começa com o maior comprimento de material bruto. Depois, cada barra é comprada com o menor comprimento de material bruto que ainda comporta seus cortes.
- Cada corte consome a espessura da serra (nenhuma após um corte que termina exatamente na extremidade da barra); cada barra perde o aparo da extremidade.
- Uma peça mais longa que todos os comprimentos de material bruto aparece em **Mais longa que qualquer material bruto**, sem encaixe: emende-a (veja [Emendas](topic:splices)) ou adicione um comprimento de material bruto maior.

## Ler a lista

- **Resumo:** por perfil e material, as peças, as barras a comprar (por exemplo, "2 × 12000, 1 × 6000"), os metros comprados e usados, e a perda.
- **Barras e seus cortes:** cada barra, seu comprimento de material bruto, seus cortes como marca de peça e comprimento, e a sobra, mantida ou sucata.

{{ui:Baixar CSV}} salva as duas tabelas como `<nome> lista de corte.csv`.

O DetailCraft não encaixa chapas em folhas e não mistura perfis ou materiais em uma mesma barra.
