---
title: Lista de corte
summary: Faça o nesting das vigas, pilares, contraventamentos e longarinas de escada em comprimentos de bruto, com a espessura do corte da serra, e veja quantas barras comprar e o desperdício.
keywords: lista de corte, nesting, comprimento de bruto, barra, espessura de corte, serra, sobra, retalho, desperdício, combinar, compra, múltiplo
from: 81d06ce5
---

O separador {{ui:Lista de corte}}, por baixo da vista, calcula como cortar as peças lineares do modelo a partir de barras em bruto: quantas barras de cada comprimento comprar para cada perfil e material, o que vai em cada barra e o desperdício.

## Definir o bruto

No topo do separador:

- **Comprimentos em bruto (mm):** os comprimentos que pode comprar, separados por espaços, por exemplo `6000 12000`, ou barras de 20 ft e 40 ft como `6096 12192`. Até oito.
- **Espessura do corte da serra (mm):** o que tira cada corte (3 para começar).
- **Aparo da extremidade (mm):** corta o fim de cada barra antes da primeira peça (0 para começar).
- **Manter sobras a partir de (mm):** uma sobra com pelo menos este comprimento volta ao bruto; as mais curtas são sucata (500 para começar).

Estes valores ficam guardados neste navegador, tal como as outras [definições](topic:settings).

## Como faz o nesting

- Cada viga, pilar, contraventamento e longarina de escada, por marca de peça e quantidade; as chapas são cortadas de chapa e não entram aqui no nesting.
- Cada perfil e material separadamente.
- As peças mais longas primeiro, cada uma na primeira barra onde cabe; uma barra nova começa com o maior comprimento em bruto. Depois, cada barra é comprada com o menor comprimento em bruto que ainda comporta os seus cortes.
- Cada corte tira a espessura da serra (nenhuma após um corte que termina exatamente no fim da barra); cada barra perde o aparo da extremidade.
- Uma peça mais longa do que todos os comprimentos em bruto aparece em **Mais longa do que qualquer bruto**, sem nesting: faça-lhe uma emenda (ver [Emendas](topic:splices)) ou acrescente um comprimento em bruto mais longo.

## Ler os resultados

- **Resumo:** por perfil e material, as peças, as barras a comprar (por exemplo, "2 × 12000, 1 × 6000"), os metros comprados e usados, e o desperdício.
- **Barras e os respetivos cortes:** cada barra, o seu comprimento em bruto, os seus cortes como marca da peça e comprimento, e a sobra, mantida ou sucata.

{{ui:Transferir CSV}} guarda as duas tabelas como `<name> cut list.csv`.

O DetailCraft não faz o nesting de chapas em folhas, nem mistura perfis ou materiais numa mesma barra.
