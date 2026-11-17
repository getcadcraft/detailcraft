---
title: Exportar um arquivo KISS para software de fabricação
summary: Envie a lista de materiais a um programa de gestão de fabricação (MIS) como arquivo KISS 1.1: montagens, peças, fases como sequências, furos, rebaixos e soldas.
keywords: kiss, kss, mis, gestão de fabricação, controle de produção, orçamento, lista de materiais, LM, exportar, fabtrol, sequência
from: 30cf3951
---

No grupo {{ui:Saída}}, abra {{ui:Mais}} e escolha {{ui:Arquivo KISS para software de fabricação}}. O DetailCraft baixa `<name>.kss`, um arquivo KISS ("Keep It Simple, Steel", versão 1.1), o formato de texto simples do qual a maioria dos programas de gestão de fabricação importa a lista de materiais.

## O que ele contém

- O cabeçalho: um número de obra (as primeiras oito letras e dígitos do nome do modelo), o nome do modelo, a data e a hora, e se as medidas são métricas.
- Para cada marca de montagem: sua peça principal (quantidade = quantas montagens), uma linha de desenho (A-B1 e assim por diante, o número do desenho da montagem), uma linha de montagem (nome, tipo, peso, comprimento total, altura e largura), uma linha de sequência por [fase](topic:phases) em que a montagem está, e linhas de mão de obra: furos (quantos, diâmetro, espessura passante), rebaixos e soldas.
- Depois, cada peça ligada a ela, com a quantidade **total** (por montagem × montagens), como pede a norma.
- Parafusos avulsos e chumbadores no desenho BOLTS, montagem FIELD.
- Cada linha informa o tipo (W, C, L, HSS, PL, ou MI para perfil personalizado), a dimensão, o grau, o comprimento de corte em milímetros, o nome da peça e o peso.

## Imperial ou métrico

Em [Configurações do DetailCraft](topic:settings), **Tamanhos do arquivo KISS** escolhe:

- **Automático** (o inicial): imperial quando todas as barras são perfis AISC; métrico nos demais casos.
- **Imperial**: perfis pela designação AISC (W 16X26, HSS 4X4X.250); chapas e parafusos, que o DetailCraft mantém em milímetros, arredondados para a 1/16 in mais próxima; pesos em libras.
- **Métrico**: perfis europeus pelo nome (IPE300), chapas como espessura X largura em milímetros; pesos em quilogramas.

Os comprimentos são sempre em milímetros com duas casas decimais, qualquer que seja a configuração: a norma KISS pede isso e o programa receptor os converte.

:::note
Os graus são reduzidos aos oito caracteres da norma: A572 Gr 50 vira A572-50. Vírgulas nos nomes viram espaços (o formato não tem aspas). Confira uma importação no seu programa antes de confiar nela: os arquivos KISS do DetailCraft são verificados aqui contra a norma, ainda não em um programa de fabricação.
:::
