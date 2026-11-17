---
title: Material- och viktrapport per etapp
summary: Kapade längder, antal, vikter och målade ytor för varje etapp, med dess bultar och armering, som tabell, CSV eller PDF.
keywords: rapport, vikt, ton, kg, färg, målad yta, ytarea, ytbehandling, kapad längd, materiallista, etapp, stycklista, csv, pdf
from: 337d6d92
---

I gruppen {{ui:Utdata}} öppnar du {{ui:Mer}} och väljer {{ui:Viktrapport per etapp}}, eller öppnar fliken {{ui:Per etapp}} under vyn. Den visar:

- **Sammanfattning per etapp**: för varje etapp antalet delar, stålvikten, den målade ytan, bultarna och ankarbultarna samt armeringen; sedan summorna.
- **En tabell per etapp**: varje delmärke i den med dess typ, profil, material, kapad längd, antal, vikt per styck, vikt och målad yta; sedan dess bultar och ankarbultar.

{{ui:Ladda ner CSV}} sparar samma tabeller i en enda CSV-fil (`<name> viktrapport.csv`). {{ui:Ladda ner PDF}} gör en rapport på pappersstorleken från [DetailCraft-inställningar](topic:settings#drawings), med sammanfattningen först, varje etapp efter den, långa tabeller fortsatta på nästa sida och varje sida numrerad.

## Så räknas siffrorna ut

- **Vikter** är brutto, som i stycklistan: profilens vikt per meter gånger den kapade längden. Hål och urtag dras inte av.
- **Målad yta** är profilens utsida längs den kapade längden: för en I-profil varje yta på flänsarna och livet, för en platta båda ytorna och kanterna, för ett rör bara utsidan. Ändarna och hålen räknas inte.
- **Armering** är vikten av stängerna i etappens grunder, från [bockningsförteckningen](topic:footings-and-rebar).
- Ett förbands plattor och bultar räknas i etappen för dess huvudstång. Se [Etapper](topic:phases).

Med [delmärken per etapp](topic:phases#marks-per-phase) på har varje etapp egna märken (1-b1, 2-b1). Med det avstängt kan ett märke finnas i fler än en etapp: varje etapp listar de delar den har.
