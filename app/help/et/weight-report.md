---
title: Materjali- ja kaaluaruanne faasiti
summary: Lõikepikkused, arvud, kaalud ja värvipinnad iga faasi kohta koos selle poltide ja armatuuriga tabelina, CSV-na või PDF-na.
keywords: aruanne, kaal, tonnaaž, kg, värv, värvipind, pindala, kate, lõikepikkus, materjalinimekiri, faas, materjalikulu, csv, pdf
from: 337d6d92
---

Rühmas {{ui:Väljund}} ava {{ui:Veel}} ja vali {{ui:Kaalu aruanne faasiti}}, või ava vaate all vahekaart {{ui:Faasiti}}. See näitab:

- **Kokkuvõte faasiti**: iga faasi kohta osade arv, terase kaal, värvipind, poldid ja ankurvardad ning armatuur; seejärel kokku.
- **Üks tabel faasi kohta**: iga selles oleva detailimärgise tüüp, profiil, materjal, lõikepikkus, arv, kaal tüki kohta, kaal ja värvipind; seejärel selle poldid ja ankurvardad.

{{ui:Download CSV}} salvestab samad tabelid ühte CSV-faili (`<name> weight report.csv`). {{ui:Download PDF}} koostab aruande [DetailCraft'i sätetes](topic:settings#drawings) määratud lehesuuruses: kõigepealt kokkuvõte, seejärel iga faas, pikad tabelid lähevad järgmisele lehele ja iga leht on nummerdatud.

## Kuidas näitajad arvutatakse

- **Kaalud** on brutokaalud, nagu materjalinimekirjas: profiili kaal meetri kohta korrutatuna lõikepikkusega. Auke ja lõikeid maha ei arvestata.
- **Värvipind** on lõigu väliskülg lõikepikkuse ulatuses: I-profiili puhul kõik flensside ja võrgu pinnad, plaadi puhul mõlemad küljed ja servad, toru puhul ainult väliskülg. Otsi ja auke ei loeta.
- **Armatuur** on selle faasi vundamentide armatuuri kaal [painutusloendist](topic:footings-and-rebar).
- Liidete plaadid ja poldid loetakse selle peamise elemendi faasi. Vt [Faasid](topic:phases).

Kui [märgised faasi kaupa](topic:phases#marks-per-phase) on sisse lülitatud, on igal faasil oma märgised (1-b1, 2-b1). Kui need on välja lülitatud, võib märgis esineda mitmes faasis: iga faas loetleb tükid, mis tal on.
