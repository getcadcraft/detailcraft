---
title: Az acélmodell exportálása USD formátumban
summary: Minden alkatrészt és összeállítást USD-ként ír ki renderelő programokhoz, jelenetösszeállításhoz és más 3D szoftverekhez, jelekkel, szelvényekkel és tömegekkel.
keywords: usd, usda, usdc, usdz, openusd, exportálás, acél, összeállítás, jelek, szelvények, renderelés
from: c3f67931
---

1. Válassza a {{ui:USD}} lehetőséget a {{ui:Output}} csoportban.
2. Válassza a {{ui:Text (.usda)}}, a {{ui:Binary (.usdc)}} vagy a {{ui:Package (.usdz)}} lehetőséget.

Minden összeállítás egy objektum, amely a darabjait tartalmazza; minden darab a szelvényének hossza mentén van, a kivágásokkal együtt. Minden darab viseli az alkatrészjelét, profilját, minőségét, hosszát és tömegét. Minden méterben van, a Z tengely felfelé mutat.

:::note
A csavarfuratok, csavarok, hegesztések és alapok nincsenek benne a USD-hálókban. Ezek az IFC, az NC és az anyagjegyzék (BOM) kimenetekben találhatók meg.
:::
