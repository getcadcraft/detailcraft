---
title: Trengselkart for armering
summary: Se hvor trangt armeringen etterlater plass for betongen til hvert fundament, med tilslaget og vibratoren du oppgir.
keywords: armering, trengsel, avstand, fri avstand, betongutlegging, tilslag, vibrator, startstaver, kroker, fundament, matte
from: 40d029e6
---

Fanen {{ui:Trengsel}} tegner et varmekart for hvert fundament sett ovenfra. Lys blå er åpen; gul og oransje er blitt trang; rød er tettere enn stavene krever. Mørke celler er selve stavene.

## Hva kartet måler

Betong går ned gjennom stålet lag for lag og kan bevege seg sideveis mellom lagene. Derfor tar kartet i hvert punkt den smaleste frie åpningen i ett lag: mellom bunnmattens staver, mellom neste lag av staver, og mellom krokbena til startstavene på toppen. Startstavene går gjennom alle sammen.

## Hva som regnes som trangt

Kravet er det største av 25 mm og stavdiameteren (ACI 318-19 25.2.1), eller, for BS 4449-staver, det største av stavdiameteren og 20 mm (EN 1992-1-1 8.2). To bokser øker det:

- {{ui:Største tilslag}}: kravet blir 4/3 av tilslagsstørrelsen (ACI) eller tilslaget pluss 5 mm (EN).
- {{ui:Vibratorhode}}: kravet er minst hodets diameter.

Begge starter på 0, som betyr ukjent: DetailCraft kjenner ikke din blanding eller din pumpe.

## Problemer

Et fundament med et sted som er tettere enn kravet, listes i panelet {{ui:Problemer}} med åpningen som ble funnet og åpningen som trengs. {{ui:Velg}} ved siden av et kart velger fundamentet.

Kartet ser ikke bindinger, koblinger, kanaler eller søylens egne staver.
