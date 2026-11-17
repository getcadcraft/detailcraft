---
title: Exportar o modelo em aço como USD
summary: Escreva cada peça e montagem em USD para programas de renderização, montagem de cenas e outro software 3D, com marcas, perfis e pesos.
keywords: usd, usda, usdc, usdz, openusd, exportar, aço, montagem, marcas, perfis, renderização
from: c3f67931
---

1. Escolha {{ui:USD}} no grupo {{ui:Saída}}.
2. Escolha {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}}.

Cada montagem é um objeto que contém as suas peças; cada peça é o seu perfil ao longo do comprimento, com os recortes feitos. Cada peça traz a sua marca, perfil, classe, comprimento e peso. Tudo em metros, com Z para cima.

:::note
Os furos dos parafusos, os parafusos, as soldaduras e as sapatas não estão nas malhas USD. Estão nos resultados IFC, NC e BOM.
:::
