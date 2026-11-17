---
title: Raporti i materialeve dhe peshës sipas fazës
summary: Gjatësitë e prerjes, numrat, peshat dhe sipërfaqet e lyerjes për çdo fazë, me bulonat dhe shufrat e armaturës, si tabelë, CSV ose PDF.
keywords: raport, pesha, tonazh, kg, lyerje, sipërfaqe lyerjeje, sipërfaqe, veshje, gjatësi prerjeje, listë materialesh, fazë, listë e materialeve, bill of materials, csv, pdf
from: 337d6d92
---

Te grupi {{ui:Dalja}}, hap {{ui:Më shumë}} dhe zgjidh {{ui:Raporti i peshës sipas fazës}}, ose hap skedën {{ui:Sipas fazës}} nën pamjen. Ai shfaq:

- **Përmbledhje sipas fazës**: për çdo fazë, numri i pjesëve, pesha e çelikut, sipërfaqja e lyerjes, bulonat dhe shufrat e ankorimit, dhe armatura; pastaj totalet.
- **Një tabelë për fazë**: çdo shenjë pjese në të me tipin, profilin, materialin, gjatësinë e prerjes, numrin, peshën për copë, peshën dhe sipërfaqen e lyerjes; pastaj bulonat dhe shufrat e ankorimit të saj.

{{ui:Shkarko CSV}} ruan të njëjtat tabela në një skedar CSV (`<name> weight report.csv`). {{ui:Shkarko PDF}} bën një raport në madhësinë e fletës nga [cilësimet e DetailCraft](topic:settings#drawings), me përmbledhjen së pari, çdo fazë pas saj, tabelat e gjata të vazhduara në faqen tjetër, dhe çdo faqe e numëruar.

## Si llogariten shifrat

- **Peshat** janë bruto, si në listën e materialeve: pesha e profilit për metër shumëzuar me gjatësinë e prerjes. Vrimat dhe prerjet e përshtatjes nuk zbriten.
- **Sipërfaqja e lyerjes** është jashtësia e prerjes përgjatë gjatësisë së prerjes: për një profil I çdo faqe e flanxhave dhe e murit, për një pllakë të dy faqet dhe skajet, për një tub vetëm jashtë. Skajet dhe vrimat nuk numërohen.
- **Armatura** është pesha e shufrave në themelet e fazës, nga [plani i përkuljes](topic:footings-and-rebar).
- Pllakat dhe bulonat e një lidhjeje numërohen në fazën e elementit kryesor të saj. Shih [Fazat](topic:phases).

Me [shenjat për fazë](topic:phases#marks-per-phase) të ndezura, çdo fazë ka shenjat e veta (1-b1, 2-b1). Kur është e fikur, një shenjë mund të shfaqet në më shumë se një fazë: çdo fazë liston pjesët që ka.
