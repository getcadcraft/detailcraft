---
title: Exportar o modelo de aço como USD
summary: Grave cada peça e cada montagem como USD para programas de renderização, montagem de cenas e outros softwares 3D, com marcas, perfis e pesos.
keywords: usd, usda, usdc, usdz, openusd, exportar, aço, montagem, marcas, perfis, renderização
from: c3f67931
---

1. Escolha {{ui:USD}} no grupo {{ui:Saída}}.
2. Escolha {{ui:Texto (.usda)}}, {{ui:Binário (.usdc)}} ou {{ui:Pacote (.usdz)}}.

Cada montagem é um objeto que contém suas peças; cada peça é o seu perfil ao longo do comprimento, com os recortes feitos. Cada peça traz sua marca, perfil, classe, comprimento e peso. Tudo está em metros, com Z para cima.

:::note
Furos de parafusos, parafusos, soldas e sapatas não estão nas malhas USD. Eles estão nas saídas IFC, NC e na lista de materiais (BOM).
:::
