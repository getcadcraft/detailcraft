---
title: Exportera stålmodellen som USD
summary: Skriv varje del och monteringsenhet som USD för renderingsprogram, scenmontering och annan 3D-programvara, med märkningar, profiler och vikter.
keywords: usd, usda, usdc, usdz, openusd, export, stål, monteringsenhet, märkning, profiler, rendering
from: c3f67931
---

1. Välj {{ui:USD}} i gruppen {{ui:Utdata}}.
2. Välj {{ui:Text (.usda)}}, {{ui:Binär (.usdc)}} eller {{ui:Paket (.usdz)}}.

Varje monteringsenhet är ett objekt som håller sina delar; varje del är sin profil utefter hela sin längd, med urtag kapade. Varje del bär sitt delmärke, sin profil, kvalitet, längd och vikt. Allt är i meter med Z uppåt.

:::note
Bulthål, bultar, svetsar och grunder finns inte i USD-näten. De finns i IFC-, NC- och stycklisteutdata.
:::
