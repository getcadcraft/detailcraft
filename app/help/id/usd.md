---
title: Ekspor model baja sebagai USD
summary: Tulis setiap bagian dan rakitan sebagai USD untuk program rendering, penyusunan adegan, dan perangkat lunak 3D lainnya, dengan tanda, profil, dan berat.
keywords: usd, usda, usdc, usdz, openusd, ekspor, baja, rakitan, tanda, profil, rendering
from: c3f67931
---

1. Pilih {{ui:USD}} di grup {{ui:Keluaran}}.
2. Pilih {{ui:Teks (.usda)}}, {{ui:Biner (.usdc)}}, atau {{ui:Paket (.usdz)}}.

Setiap rakitan adalah satu objek yang memuat bagiannya; setiap bagian adalah profilnya sepanjang panjang potongnya, dengan coak yang sudah dipotong. Setiap bagian membawa tanda part, profil, kelas, panjang, dan beratnya. Semuanya dalam meter, dengan Z ke atas.

:::note
Lubang baut, baut, las, dan pondasi tidak ada di mesh USD. Semuanya ada di keluaran IFC, NC, dan BOM.
:::
