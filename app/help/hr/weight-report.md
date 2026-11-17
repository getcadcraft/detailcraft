---
title: Izvješće o materijalu i masi po fazi
summary: Duljine reza, količine, mase i površine premaza za svaku fazu, sa svojim vijcima i armaturom, kao tablica, CSV ili PDF.
keywords: izvješće, masa, tonaža, kg, boja, površina premaza, površina, premaz, duljina reza, popis materijala, faza, sastavnica, csv, pdf
from: 337d6d92
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i odaberite {{ui:Izvješće o masi po fazi}}, ili otvorite karticu {{ui:Po fazi}} ispod prikaza. Prikazuje:

- **Sažetak po fazama**: za svaku fazu broj dijelova, masu čelika, površinu premaza, vijke i sidrene vijke te armaturu; zatim ukupno.
- **Jednu tablicu po fazi**: svaka oznaka dijela u njoj s vrstom, profilom, materijalom, duljinom reza, brojem, masom po komadu, masom i površinom premaza; zatim njezini vijci i sidreni vijci.

{{ui:Preuzmi CSV}} sprema iste tablice u jednu CSV datoteku (`<name> weight report.csv`). {{ui:Preuzmi PDF}} izrađuje izvješće na veličini lista iz [postavki DetailCrafta](topic:settings#drawings), sa sažetkom na početku, svakom fazom poslije, dugim tablicama prenesenim na sljedeću stranicu i svakom stranicom numeriranom.

## Kako se računaju brojke

- **Mase** su bruto, kao u sastavnici: masa profila po metru puta duljina reza. Rupe i izrezi se ne oduzimaju.
- **Površina premaza** je vanjski dio presjeka duž duljine reza: za I-profil svaka strana pojasnica i hrbata, za ploču obje strane i rubovi, za cijev samo vanjska strana. Krajevi i rupe se ne računaju.
- **Armatura** je masa šipki u temeljima faze, iz [plana savijanja](topic:footings-and-rebar).
- Ploče i vijci spoja broje se u fazi njegovog glavnog elementa. Vidi [Faze](topic:phases).

S uključenim [oznakama po fazi](topic:phases#marks-per-phase) svaka faza ima svoje oznake (1-b1, 2-b1). Kad je isključeno, oznaka se može pojaviti u više faza: svaka faza navodi dijelove koje ima.
