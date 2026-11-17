---
title: Materiale- og vektrapport etter fase
summary: Kuttlengder, antall, vekter og malingsarealer for hver fase, med boltene og armeringen, som tabell, CSV eller PDF.
keywords: rapport, vekt, tonnasje, kg, maling, malingsareal, overflateareal, belegg, kuttlengde, materialliste, fase, stykkliste, csv, pdf
from: 337d6d92
---

I gruppen {{ui:Utdata}} åpner du {{ui:Mer}} og velger {{ui:Vektrapport etter fase}}, eller åpner fanen {{ui:Etter fase}} under visningen. Den viser:

- **Oppsummering etter fase**: for hver fase antall deler, stålvekten, malingsarealet, boltene og forankringsstengene, og armeringen; deretter summene.
- **En tabell per fase**: hvert delemerke i den med type, profil, materiale, kuttlengde, antall, vekt per stykk, vekt og malingsareal; deretter boltene og forankringsstengene.

{{ui:Last ned CSV}} lagrer de samme tabellene i én CSV-fil (`<navn> vektrapport.csv`). {{ui:Last ned PDF}} lager en rapport på arkstørrelsen fra [innstillingene i DetailCraft](topic:settings#drawings), med oppsummeringen først, deretter hver fase, lange tabeller videre på neste side, og hver side nummerert.

## Slik beregnes tallene

- **Vekter** er brutto, som i stykklisten: profilens vekt per meter ganget med kuttlengden. Hull og utklinkinger trekkes ikke fra.
- **Malingsarealet** er utsiden av profilen langs kuttlengden: for en I-profil alle flatene på flensene og steget, for en plate begge flatene og kantene, for et rør bare utsiden. Endene og hullene telles ikke.
- **Armering** er vekten av armeringsstengene i fasens fundamenter, fra [bøyelisten](topic:footings-and-rebar).
- Platene og boltene i en forbindelse telles i fasen til hovedstavet. Se [Faser](topic:phases).

Med [merker per fase](topic:phases#marks-per-phase) slått på, har hver fase egne merker (1-b1, 2-b1). Er det slått av, kan et merke forekomme i flere faser: hver fase lister opp de delene den har.
