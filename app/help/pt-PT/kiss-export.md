---
title: Exportar um ficheiro KISS para software de fabrico
summary: Enviar a lista de materiais para um programa de gestão de fabrico (MIS) como ficheiro KISS 1.1: montagens, peças, fases como sequências, furos, recortes e soldaduras.
keywords: kiss, kss, mis, gestão de fabrico, controlo de produção, orçamento, lista de materiais, LM, exportar, fabtrol, sequência
from: 30cf3951
---

No grupo {{ui:Saída}}, abra {{ui:Mais}} e escolha {{ui:Ficheiro KISS para software de fabrico}}. O DetailCraft transfere `<name>.kss`, um ficheiro KISS ("Keep It Simple, Steel", versão 1.1), o formato de texto simples a partir do qual a maioria dos programas de gestão de fabrico importa uma lista de materiais.

## O que contém

- O cabeçalho: um número de obra (as primeiras oito letras e algarismos do nome do modelo), o nome do modelo, a data e a hora, e se os tamanhos são métricos.
- Para cada marca de montagem: a respetiva peça principal (quantidade = quantas montagens), uma linha de desenho (A-B1 e assim por diante, o número do desenho da montagem), uma linha de montagem (nome, tipo, peso, comprimento total, altura e largura), uma linha de sequência por [fase](topic:phases) em que a montagem está, e linhas de mão de obra: furos (quantos, diâmetro, espessura atravessada), recortes e soldaduras.
- Depois, cada peça ligada a ela, com a quantidade **total** (por montagem × montagens), como a norma exige.
- Parafusos soltos e varões de ancoragem no desenho BOLTS, montagem FIELD.
- Cada linha indica o tipo (W, C, L, HSS, PL, ou MI para um perfil personalizado), o tamanho, a classe, o comprimento de corte em milímetros, o nome da peça e o peso.

## Polegadas ou métrico

Em [Definições do DetailCraft](topic:settings), **Tamanhos do ficheiro KISS** escolhe:

- **Automático** (o predefinido): imperial quando todos os elementos são perfis AISC, métrico caso contrário.
- **Imperial**: perfis pela designação AISC (W 16X26, HSS 4X4X.250); chapas e parafusos, que o DetailCraft mantém em milímetros, até à 1/16 in mais próxima; pesos em libras.
- **Métrico**: perfis europeus pelo nome (IPE300), chapas como espessura X largura em milímetros; pesos em quilogramas.

Os comprimentos são sempre em milímetros com duas casas decimais, seja qual for a definição: a norma KISS o exige e o programa recetor converte-os.

:::note
Os nomes das classes são reduzidos aos oito caracteres da norma: A572 Gr 50 passa a A572-50. As vírgulas nos nomes passam a espaços (o formato não tem aspas). Verifique uma importação no seu programa antes de confiar nela: os ficheiros KISS do DetailCraft estão verificados aqui contra a norma, ainda não num programa de fabrico.
:::
