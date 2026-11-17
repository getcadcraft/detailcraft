---
title: Export ocelového modelu do USD
summary: Zapište každý díl a sestavu jako USD pro renderovací programy, skládání scén a jiný 3D software, s značkami, profily a hmotnostmi.
keywords: usd, usda, usdc, usdz, openusd, export, ocel, sestava, značky, profily, renderování
from: c3f67931
---

1. Zvolte {{ui:USD}} ve skupině {{ui:Výstup}}.
2. Vyberte {{ui:Text (.usda)}}, {{ui:Binární (.usdc)}} nebo {{ui:Balíček (.usdz)}}.

Každá sestava je jeden objekt, který drží své díly; každý díl je jeho průřez vedený podél délky, s vyříznutými vruby. Každý díl nese svou značku dílu, profil, jakost, délku a hmotnost. Vše je v metrech, osa Z nahoru.

:::note
Otvory pro šrouby, šrouby, svary a základy nejsou v sítích USD. Jsou ve výstupech IFC, NC a kusovníku (BOM).
:::
