---
title: Izvještaj o materijalu i težini po fazama
summary: Dužine reza, količine, težine i površine premaza za svaku fazu, sa njenim vijcima i armaturom, kao tabela, CSV ili PDF.
keywords: izvještaj, težina, tona, kg, premaz, površina premaza, površina, dužina reza, lista materijala, faza, predmjer, csv, pdf
from: 337d6d92
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i izaberite {{ui:Izvještaj o težini po fazama}}, ili otvorite karticu {{ui:Po fazama}} ispod prikaza. Prikazuje:

- **Sažetak po fazama**: za svaku fazu, broj dijelova, težinu čelika, površinu premaza, vijke i sidrene šipke, i armaturu; zatim ukupno.
- **Jednu tabelu po fazi**: svaka oznaka dijela u njoj sa tipom, profilom, materijalom, dužinom reza, brojem, težinom po komadu, težinom i površinom premaza; zatim njeni vijci i sidrene šipke.

{{ui:Preuzmi CSV}} čuva iste tabele u jednoj CSV datoteci (`<name> weight report.csv`). {{ui:Preuzmi PDF}} pravi izvještaj na veličini papira iz [Postavki DetailCraft-a](topic:settings#drawings), sa sažetkom na početku, svakom fazom poslije, dugim tabelama koje se prenose na sljedeću stranicu i svakom stranicom numerisanom.

## Kako se računaju brojke

- **Težine** su bruto, kao u predmjeru: težina profila po metru puta dužina reza. Rupe i izrezi se ne oduzimaju.
- **Površina premaza** je vanjska strana presjeka duž dužine reza: za I-profil svaka strana prirubnica i rebra, za ploču obje strane i ivice, za cijev samo vanjska strana. Krajevi i rupe se ne računaju.
- **Armatura** je težina šipki u temeljima faze, iz [rasporeda savijanja](topic:footings-and-rebar).
- Ploče i vijci spoja broje se u fazi njegovog glavnog elementa. Vidi [Faze](topic:phases).

Sa uključenim [oznakama po fazama](topic:phases#marks-per-phase), svaka faza ima svoje oznake (1-b1, 2-b1). Kada je isključeno, oznaka se može pojaviti u više faza: svaka faza navodi komade koje ima.
