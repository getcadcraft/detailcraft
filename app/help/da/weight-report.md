---
title: Materiale- og vægtrapport pr. fase
summary: Skærelængder, antal, vægte og malingsarealer for hver fase, med dens bolte og armering, som tabel, CSV eller PDF.
keywords: rapport, vægt, tons, kg, maling, malingsareal, overfladeareal, belægning, skærelængde, materialeliste, fase, stykliste, csv, pdf
from: 337d6d92
---

I gruppen {{ui:Uddata}} åbner du {{ui:Mere}} og vælger {{ui:Vægtrapport pr. fase}}, eller du åbner fanen {{ui:Pr. fase}} under visningen. Den viser:

- **Oversigt pr. fase**: for hver fase antallet af dele, stålvægten, malingsarealet, boltene og ankerboltene samt armeringen; derefter totalerne.
- **En tabel pr. fase**: hvert positionsnummer i den med sin type, profil, materiale, skærelængde, antal, vægt pr. stk., vægt og malingsareal; derefter dens bolte og ankerbolte.

{{ui:Download CSV}} gemmer de samme tabeller i én CSV-fil (`<name> weight report.csv`). {{ui:Download PDF}} laver en rapport på arkstørrelsen fra [DetailCraft-indstillinger](topic:settings#drawings), med oversigten først, hver fase efter, lange tabeller fortsat på næste side, og hver side nummereret.

## Sådan beregnes tallene

- **Vægte** er brutto, ligesom i stykklisten: profilets vægt pr. meter gange skærelængden. Huller og udskæringer fratrækkes ikke.
- **Malingsarealet** er ydersiden af snittet langs skærelængden: for en I-profil hver flade på flangerne og livet, for en plade begge flader og kanterne, for et rør kun ydersiden. Enderne og hullerne tælles ikke med.
- **Armering** er vægten af jernene i fasens fundamenter, fra [bukkelisten](topic:footings-and-rebar).
- Forbindelsens plader og bolte tæller i fasen for dens hovedelement. Se [Faser](topic:phases).

Med [positionsnumre pr. fase](topic:phases#marks-per-phase) slået til har hver fase sine egne positionsnumre (1-b1, 2-b1). Slået fra kan et positionsnummer optræde i mere end én fase: hver fase lister de stykker, den har.
