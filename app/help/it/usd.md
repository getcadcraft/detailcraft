---
title: Esporta il modello in acciaio come USD
summary: Scrive ogni pezzo e ogni assieme come USD per programmi di rendering, composizione di scene e altro software 3D, con marchi, profili e pesi.
keywords: usd, usda, usdc, usdz, openusd, esporta, acciaio, assieme, marchi, profili, rendering
from: c3f67931
---

1. Scegliere {{ui:USD}} nel gruppo {{ui:Uscita}}.
2. Scegliere {{ui:Testo (.usda)}}, {{ui:Binario (.usdc)}} oppure {{ui:Pacchetto (.usdz)}}.

Ogni assieme è un unico oggetto che contiene i suoi pezzi; ogni pezzo è la sua sezione lungo la lunghezza, con gli scassi già tagliati. Ogni pezzo porta il suo marchio di pezzo, il profilo, la classe, la lunghezza e il peso. Tutto è espresso in metri, con Z verso l'alto.

:::note
Fori dei bulloni, bulloni, saldature e fondazioni non sono nelle mesh USD. Sono negli output IFC, NC e nella distinta base.
:::
