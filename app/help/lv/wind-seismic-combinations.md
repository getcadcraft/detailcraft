---
title: Vēja, seismiskās vietas un ASCE 7 kombinācijas
summary: Izveidot vēja slodzes gadījumus slēgtai stingrai ēkai, aprēķināt seismiskās projektēšanas vērtības vietai un izveidot ASCE 7 kombinācijas cilnē Aprēķins.
keywords: vējš, vēja slodze, asce 7, virziena procedūra, iedarbības kategorija, noslēgtība, seismisks, vietas klase, ss, s1, sds, sd1, usgs, projektēšanas spektrs, slodžu kombinācijas, lrfd, asd, kzt, kd, grūdiens
from: 676fcbf3
---

Trīs bloki cilnē {{ui:Aprēķins}} izveido rāmja vēja un seismiskos ievaddatus un tos kombinē: {{ui:Vēja slodzes (ASCE 7 virziena procedūra)}}, {{ui:Seismiskā vieta un sistēma (ASCE 7)}} un {{ui:ASCE 7 slodžu kombinācijas}}. Tie ir palīgi: **nav normas pārbaude; jūsu inženieris pārskata rezultātus.**

## Ko jūs darīsiet

Izveidot vēja slodzes gadījumus slēgtai, stingrai ēkai, iegūt seismiskās vērtības vietai un izveidot kombinācijas, kas tās izmanto. Modelim vajag stāvus, tāpēc vispirms veiciet aprēķinu (skatiet [Spēki, reakcijas un pārvietojumi](topic:frame-analysis)).

## Soļi

1. Atveriet cilni {{ui:Aprēķins}} un izvēlieties {{ui:Palaist}}, lai stāvi un ēkas izmērs būtu zināmi. Ja kāds bloks saka, ka stāvu nav, tajā izvēlieties {{ui:Atrast stāvus}}.
2. Blokā {{ui:Vēja slodzes (ASCE 7 virziena procedūra)}} izvēlieties {{ui:Izdevums}}, ierakstiet {{ui:Pamata vēja ātrums V}} no sava vēja kartes un izvēlieties tā {{ui:Ātruma mērvienība}}, tad {{ui:Iedarbības kategorija}} un {{ui:Noslēgtība}}. Kzt, Kd, G, zemes augstums, aizvējas Cp, ekscentricitāte un virziens arī ir šeit.
3. Nolasiet spiedienu katrā stāvā un spēku uz katru stāvu tabulā, tad izvēlieties {{ui:Izveidot vēja gadījumus}}. Gadījumi ir +X, -X, +Y un -Y.
4. Blokā {{ui:Seismiskā vieta un sistēma (ASCE 7)}} izvēlieties izdevumu un ierakstiet Ss un S1 (SMS, SM1 un S1 ASCE 7-22), vietas klasi no A līdz D, riska kategoriju un seismiskās spēka pretestības sistēmu. Vai ierakstiet platuma un garuma grādus un izvēlieties {{ui:Meklēt USGS (tiešsaistē)}}; tas jautā tiešsaistes pakalpojumam tikai tad, kad to nospiežat.
5. Nolasiet Fa, Fv, SDS un SD1, R, Cd un Omega0 un projektēšanas spektru, tad izvēlieties {{ui:Izmantot seismiskajā blokā}}. Seismiskajā blokā nospiediet {{ui:Izveidot seismiskos gadījumus}} (skatiet [Betona elementu pārbaude un seismiskās slodzes](topic:concrete-and-seismic)).
6. Blokā {{ui:ASCE 7 slodžu kombinācijas}} izvēlieties {{ui:Metode}} (LRFD vai ASD) un izvēlieties {{ui:Izveidot ASCE 7 kombinācijas}}. Palaidiet aprēķinu vēlreiz.

## Lietas, kas jāzina

- Vējš: tikai slēgta, stinga ēka, virziena procedūra. Elastīgai ēkai vajag brāzmu koeficientu no standarta, ko DetailCraft neveido.
- Vietas klase E un F prasa vietas pētījumu un nav izveidota.
- Bloku apakšā esošais avotu saraksts parāda, no kurienes nāk katrs skaitlis un kas ir izlaists.
- USGS meklēšana tika testēta uz aizvietotāja, nevis uz tiešraides pakalpojuma.
