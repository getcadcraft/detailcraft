---
title: Eksport model keluli sebagai USD
summary: Tulis setiap bahagian dan himpunan sebagai USD untuk program render, gabungan adegan dan perisian 3D lain, dengan tanda, profil dan berat.
keywords: usd, usda, usdc, usdz, openusd, eksport, keluli, himpunan, tanda, profil, render
from: c3f67931
---

1. Pilih {{ui:USD}} dalam kumpulan {{ui:Output}}.
2. Pilih {{ui:Text (.usda)}}, {{ui:Binary (.usdc)}} atau {{ui:Package (.usdz)}}.

Setiap himpunan ialah satu objek yang memegang bahagiannya; setiap bahagian ialah keratannya sepanjang panjangnya, dengan potongan hujung dibuat. Setiap bahagian membawa tanda bahagiannya, profil, gred, panjang dan berat. Semuanya dalam meter dengan Z ke atas.

:::note
Lubang bolt, bolt, kimpalan dan asas tidak berada dalam mesh USD. Ia berada dalam output IFC, NC dan BOM.
:::
