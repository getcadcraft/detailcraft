---
title: Materiaal- en gewigsverslag per fase
summary: Snitlengtes, getalle, gewigte en verfoppervlakke vir elke fase, met sy bouts en wapening, as ’n tabel, CSV of PDF.
keywords: verslag, gewig, tonnemaat, kg, verf, verfoppervlak, oppervlakte, bedekking, snitlengte, materiaallys, fase, csv, pdf
from: 337d6d92
---

In die {{ui:Uitvoer}}-groep, maak {{ui:Meer}} oop en kies {{ui:Gewigsverslag per fase}}, of maak die {{ui:Per fase}}-oortjie onder die aansig oop. Dit wys:

- **Opsomming per fase**: vir elke fase, die getal dele, die staalgewig, die verfoppervlakte, die bouts en ankerstawe, en die wapening; dan die totale.
- **Een tabel per fase**: elke onderdeelmerk daarin met sy tipe, profiel, materiaal, snitlengte, getal, gewig elk, gewig, en verfoppervlakte; dan sy bouts en ankerstawe.

{{ui:Laai CSV af}} stoor dieselfde tabelle in een CSV-lêer (`<name> weight report.csv`). {{ui:Laai PDF af}} maak ’n verslag op die bladgrootte uit [DetailCraft-instellings](topic:settings#drawings), met die opsomming eerste, elke fase daarna, lang tabelle wat na die volgende bladsy oorgedra word, en elke bladsy genommer.

## Hoe die syfers bereken word

- **Gewigte** is bruto, soos in die materiaallys: die profiel se gewig per meter maal die snitlengte. Gate en uitsnydings word nie afgetrek nie.
- **Verfoppervlakte** is die buitekant van die snit langs die snitlengte: vir ’n I-profiel elke vlak van die flense en die lyf, vir ’n plaat albei vlakke en die rande, vir ’n buis net die buitekant. Die eindpunte en die gate word nie getel nie.
- **Wapening** is die gewig van die stawe in die fase se fondasies, uit die [buigskedule](topic:footings-and-rebar).
- ’n Verbinding se plate en bouts tel in die fase van sy hoofdeel. Sien [Fases](topic:phases).

Met [merke per fase](topic:phases#marks-per-phase) aan, het elke fase sy eie merke (1-b1, 2-b1). Met dit af, kan ’n merk in meer as een fase verskyn: elke fase lys die stukke wat dit het.
