---
title: Armatūras blīvuma karte
summary: Redzēt, cik blīva armatūra atstāj katru pamatu betonam, lai tas nokļūtu līdz apakšai, ar jūsu norādīto agregātu un vibratoru.
keywords: armatūra, blīvums, atstarpe, brīva atstarpe, betona ieklāšana, agregāts, vibrators, sākotnējie stieņi, āķi, pamats, režģis
from: 40d029e6
---

Cilne {{ui:Blīvums}} zīmē siltuma karti katram pamatam, skatoties no augšas. Gaiši zila ir atvērta; dzeltena un oranža ir kļūstot šaurāka; sarkana ir šaurāka, nekā stieņi prasa. Tumšas šūnas ir paši stieņi.

## Ko karte mēra

Betons iet caur tēraudu slāni pēc slāņa un var pārvietoties sānis starp slāņiem. Tāpēc katrā punktā karte ņem šaurāko brīvo atstarpi jebkurā vienā slānī: starp apakšējā slāņa stieņiem, starp nākamā slāņa stieņiem un starp sākotnējo stieņu āķu kājiņām augšā. Sākotnējie stieņi iet cauri visiem.

## Kas uzskatāms par šauru

Nepieciešamība ir lielākais no 25 mm un stieņa diametra (ACI 318-19 25.2.1), vai BS 4449 stieņiem — lielākais no stieņa diametra un 20 mm (EN 1992-1-1 8.2). Divas kastes to paaugstina:

- {{ui:Lielākais agregāts}}: nepieciešamība kļūst par 4/3 no agregāta izmēra (ACI) vai agregāts plus 5 mm (EN).
- {{ui:Vibratora galva}}: nepieciešamība ir vismaz galvas diametrs.

Abas sākas ar 0, kas nozīmē "nav zināms": DetailCraft nezina jūsu maisījumu vai sūkni.

## Problēmas

Pamats, kuram vieta ir šaurāka par nepieciešamo, tiek uzskaitīts cilnē {{ui:Problēmas}} ar atrasto un nepieciešamo atvērumu. {{ui:Atlasīt}} blakus kartei atlasa pamatu.

Karte neredz saites, savienotājus, kanālus vai pašas kolonnas stieņus.
