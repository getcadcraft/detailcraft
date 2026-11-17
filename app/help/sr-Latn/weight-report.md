---
title: Izveštaj o materijalu i težini po fazama
summary: Dužine sečenja, brojevi, težine i površine premaza za svaku fazu, sa njenim zavrtnjima i armaturom, kao tabela, CSV ili PDF.
keywords: izveštaj, težina, tonaža, kg, boja, površina premaza, površina, premaz, dužina sečenja, spisak materijala, faza, spisak materijala, csv, pdf
from: 337d6d92
---

U grupi {{ui:Izlaz}} otvorite {{ui:Više}} i izaberite {{ui:Izveštaj o težini po fazama}}, ili otvorite karticu {{ui:Po fazama}} ispod prikaza. Prikazuje:

- **Zbir po fazama**: za svaku fazu, broj delova, težinu čelika, površinu premaza, zavrtnje i sidrene šipke i armaturu; zatim ukupne vrednosti.
- **Jedna tabela po fazi**: svaka oznaka dela u njoj sa tipom, profilom, materijalom, dužinom sečenja, brojem, težinom po komadu, težinom i površinom premaza; zatim njeni zavrtnji i sidrene šipke.

{{ui:Preuzmi CSV}} čuva iste tabele u jednoj CSV datoteci (`<name> weight report.csv`). {{ui:Preuzmi PDF}} pravi izveštaj na veličini papira iz [Podešavanja DetailCraft-a](topic:settings#drawings), sa zbirom na početku, zatim svaka faza, duge tabele se prenose na sledeću stranu i svaka strana je numerisana.

## Kako se računaju vrednosti

- **Težine** su bruto, kao u spisku materijala: težina profila po metru puta dužina sečenja. Rupe i izrezi se ne oduzimaju.
- **Površina premaza** je spoljašnost preseka duž dužine sečenja: za I-profil svaka strana pojasa i rebra, za lim obe strane i ivice, za cev samo spoljašnost. Krajevi i rupe se ne računaju.
- **Armatura** je težina šipki u temeljima faze, iz [liste savijanja](topic:footings-and-rebar).
- Limovi i zavrtnji veze se računaju u fazi njenog glavnog elementa. Vidi [Faze](topic:phases).

Uz uključene [oznake po fazama](topic:phases#marks-per-phase), svaka faza ima sopstvene oznake (1-b1, 2-b1). Kada su isključene, oznaka se može pojaviti u više faza: svaka faza navodi komade koje ima.
