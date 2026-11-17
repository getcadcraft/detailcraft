---
title: Materiālu un svara atskaite pa fāzēm
summary: Griezumu garumi, skaiti, svari un krāsojamie laukumi katrai fāzei, ar tās skrūvēm un armatūru, tabulā, CSV vai PDF.
keywords: atskaite, svars, tonnāža, kg, krāsa, krāsojamais laukums, virsmas laukums, pārklājums, griezuma garums, materiālu saraksts, fāze, materiālu specifikācija, csv, pdf
from: 337d6d92
---

Izvades grupā atveriet {{ui:Vairāk}} un izvēlieties {{ui:Svara atskaite pa fāzēm}}, vai atveriet cilni {{ui:Pa fāzēm}} zem skata. Tā rāda:

- **Kopsavilkums pa fāzēm**: katrai fāzei detaļu skaitu, tērauda svaru, krāsojamo laukumu, skrūves un enkurstieņus, un armatūru; tad kopsummas.
- **Viena tabula katrai fāzei**: katru detaļas marķējumu tajā ar tā tipu, profilu, materiālu, griezuma garumu, skaitu, svaru katram, svaru un krāsojamo laukumu; tad tās skrūves un enkurstieņi.

{{ui:Lejupielādēt CSV}} saglabā tās pašas tabulas vienā CSV failā (`<name> weight report.csv`). {{ui:Lejupielādēt PDF}} izveido atskaiti uz lapas izmēra no [DetailCraft iestatījumiem](topic:settings#drawings), ar kopsavilkumu vispirms, katru fāzi pēc tam, garām tabulām pārnestām uz nākamo lapu un katru lapu numurētu.

## Kā aprēķina skaitļus

- **Svari** ir bruto, kā materiālu specifikācijā: profila svars metrā, reizināts ar griezuma garumu. Caurumi un izgriezumi nav atskaitīti.
- **Krāsojamais laukums** ir sekcijas ārpuse pa griezuma garumu: I formas profilam visas flanšu un stieņa skaldnes, plātnei abas skaldnes un malas, caurulei tikai ārpuse. Gali un caurumi netiek skaitīti.
- **Armatūra** ir stieņu svars fāzes pamatos, no [liekšanas saraksta](topic:footings-and-rebar).
- Savienojuma plātnes un skrūves skaitās tās galvenā elementa fāzē. Skatiet [Fāzes](topic:phases).

Ar ieslēgtiem [marķējumiem pa fāzēm](topic:phases#marks-per-phase) katrai fāzei ir savi marķējumi (1-b1, 2-b1). Ja tie ir izslēgti, marķējums var parādīties vairākās fāzēs: katra fāze uzskaita savus gabalus.
