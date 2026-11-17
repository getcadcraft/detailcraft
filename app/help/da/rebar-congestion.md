---
title: Kort over armeringstrængsel
summary: Se hvor tæt armeringen efterlader hvert punktfundament, så betonen kan komme ned, med det tilslag og den vibrator du angiver.
keywords: armering, trængsel, afstand, frit mellemrum, betonering, tilslag, vibrator, studsarmering, krog, punktfundament, måtte
from: 40d029e6
---

Fanen {{ui:Trængsel}} tegner et varmekort af hvert punktfundament set oppefra. Lyseblå er åbent; gul og orange er ved at blive trangt; rød er tættere end jernene kræver. Mørke celler er selve jernene.

## Hvad kortet måler

Beton går ned gennem stålet lag for lag og kan bevæge sig sidelæns mellem lagene. Så i hvert punkt tager kortet det smalleste frie mellemrum i ethvert lag: mellem bundmåttens jern, mellem næste lag af jern og mellem studsarmeringens krogben øverst. Studsene står gennem dem alle.

## Hvad der tæller som tæt

Behovet er det største af 25 mm og jerndiameteren (ACI 318-19 25.2.1), eller, for BS 4449-jern, det største af jerndiameteren og 20 mm (EN 1992-1-1 8.2). To felter hæver det:

- {{ui:Største tilslag}}: behovet bliver 4/3 af tilslagsstørrelsen (ACI) eller tilslaget plus 5 mm (EN).
- {{ui:Vibratorhoved}}: behovet er mindst hovedets diameter.

Begge starter ved 0, hvilket betyder ukendt: DetailCraft kender ikke din blanding eller din pumpe.

## Problemer

Et fundament med et sted, der er tættere end behovet, står på listen i panelet {{ui:Problemer}} med den åbning, der blev fundet, og den åbning, der kræves. {{ui:Vælg}} ved siden af et kort vælger fundamentet.

Kortet ser ikke bindinger, koblinger, kanaler eller søjlens egne jern.
