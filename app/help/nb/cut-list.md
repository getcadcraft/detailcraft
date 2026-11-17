---
title: Kappeliste
summary: Plasser bjelker, søyler, avstivninger og trappevanger i lagerlengder med sagsnitt, og se hvor mange stenger du må kjøpe og hvor mye som blir spill.
keywords: kappeliste, nesting, lagerlengde, stang, sagsnitt, sag, rest, kapperest, spill, kombinering, innkjøp, flere
from: 81d06ce5
---

Fanen {{ui:Kappeliste}} under visningen finner ut hvordan modellens lineære deler kan kappes fra lagerstenger: hvor mange stenger av hver lengde du må kjøpe for hver profil og hvert materiale, hva som går på hver stang, og spillet.

## Angi lageret

Øverst på fanen:

- **Lagerlengder (mm):** lengdene du kan kjøpe, adskilt med mellomrom, for eksempel `6000 12000`, eller 20 ft- og 40 ft-stenger som `6096 12192`. Opptil åtte.
- **Sagsnitt (mm):** hva hvert kutt tar (3 til å begynne med).
- **Endekapping (mm):** kapper av enden på hver stang før første del (0 til å begynne med).
- **Behold rester fra (mm):** en rest som er minst så lang, går tilbake til lageret; kortere er skrap (500 til å begynne med).

Disse lagres i denne nettleseren, som de andre [innstillingene](topic:settings).

## Hvordan den nester

- Hver bjelke, søyle, avstivning og trappevange, etter delenummer og antall; plater kappes fra plate og nestes ikke her.
- Hver profil og hvert materiale for seg.
- Lengste deler først, hver inn i den første stangen den får plass i; en ny stang starter som den lengste lagerlengden. Deretter kjøpes hver stang som den korteste lagerlengden som fortsatt tar kuttene.
- Hvert kutt tar sagsnittet (ingen etter et kutt som slutter nøyaktig ved stangens ende); hver stang mister endekappingen.
- En del som er lengre enn alle lagerlengdene listes under **Lengre enn noe lager**, og nestes ikke: skjøt den (se [Skjøter](topic:splices)) eller legg til en lengre lagerlengde.

## Les den

- **Oppsummering:** per profil og materiale: delene, stengene som skal kjøpes (for eksempel "2 × 12000, 1 × 6000"), meterne kjøpt og brukt, og spillet.
- **Stenger og deres kutt:** hver stang, lagerlengden, kuttene som delenummer og lengde, og resten, enten behold eller skrap.

{{ui:Last ned CSV}} lagrer begge tabellene som `<name> cut list.csv`.

DetailCraft nester ikke plater i ark, og blander ikke profiler eller materialer på en stang.
