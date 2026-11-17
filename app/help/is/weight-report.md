---
title: Efnis- og þyngdarskýrsla eftir áfanga
summary: Skurðarlengdir, fjöldi, þyngdir og málningarflatarmál fyrir hvern áfanga, ásamt boltum og steypustyrktarjárni, sem tafla, CSV eða PDF.
keywords: skýrsla, þyngd, tonn, kg, málning, málningarflötur, yfirborðsflötur, húðun, skurðarlengd, efnislisti, áfangi, efnisyfirlit, csv, pdf
from: 337d6d92
---

Í hópnum {{ui:Útkoma}} opnaðu {{ui:Meira}} og veldu {{ui:Þyngdarskýrsla eftir áfanga}}, eða opnaðu flipann {{ui:Eftir áfanga}} undir myndinni. Hún sýnir:

- **Yfirlit eftir áfanga**: fyrir hvern áfanga, fjölda hluta, stálþyngd, málningarflöt, bolta og akkerisstangir, og steypustyrktarjárn; síðan samtölurnar.
- **Eina töflu fyrir hvern áfanga**: hvert hlutanúmer í honum með gerð, sniði, efni, skurðlengd, fjölda, þyngd hvers, þyngd og málningarflöt; síðan boltar og akkerisstangir.

{{ui:Sækja CSV}} vistar sömu töflur í eina CSV-skrá (`<name> weight report.csv`). {{ui:Sækja PDF}} býr til skýrslu á blaðstærðinni úr [stillingum DetailCraft](topic:settings#drawings), með yfirlitinu fyrst, hverjum áfanga á eftir, löngum töflum haldið áfram á næstu síðu, og hverri síðu númeraðri.

## Hvernig tölurnar eru reiknaðar

- **Þyngdir** eru brúttó, eins og í efnisskránni: þyngd prófílsins á metra margfölduð með skurðlengdinni. Göt og úrfellingar eru ekki dregin frá.
- **Málningarflöturinn** er ytra borð sniðsins eftir skurðlengdinni: fyrir I-snið öll andlit flansanna og vefsins, fyrir plötu bæði andlit og kantana, fyrir rör aðeins ytra borðið. Endar og göt eru ekki talin.
- **Steypustyrktarjárn** er þyngd stanganna í undirstöðum áfangans, úr [beygjuáætluninni](topic:footings-and-rebar).
- Plötur og boltar tengingar teljast í áfanga aðalbitans hennar. Sjá [Áfanga](topic:phases).

Með [merkjum eftir áfanga](topic:phases#marks-per-phase) kveikt hefur hver áfangi sín eigin merki (1-b1, 2-b1). Með því slökkt getur merki birst í fleiri en einum áfanga: hver áfangi telur upp þau stykki sem hann hefur.
