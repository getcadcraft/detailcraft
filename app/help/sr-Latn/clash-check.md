---
title: Proveri sudare
summary: Pronađi delove, limove i temelje koji zadiru jedni u druge, izuzimajući delove koje veza namerava da spoji, i idi do svakog sudara.
keywords: sudar, provera sudara, kolizija, interferencija, preklapanje, presecanje, tvrdi sudar, koordinacija, provera modela
from: 04d72d3b
---

Otvori karticu {{ui:Sudari}} ispod prikaza i izaberi {{ui:Proveri sada}}. DetailCraft gleda svaki par delova u prikazanim fazama: čelik u čelik i čelik u temelj. Kartica navodi svaki sudar, najdublji prvi, sa:

- dva dela, po oznaci dela (ili oznaci temelja) i profilu;
- **Preklapanje (mm)**: koliko je tačka jednog dela unutar drugog, do najbliže površine;
- **Blizu**: presek mreže i nivo na kom je, ili njegove koordinate;
- {{ui:Prikaži}}: bira oba dela i dovodi to mesto u sredinu prikaza.

Naslov kartice pokazuje koliko je sudara našla poslednja provera. Provera ne radi sama: posle promene modela lista to kaže, a {{ui:Proveri sada}} je pokreće ponovo.

## Šta nije sudar

- Delovi koji se samo dodiruju: lim uz pojasnicu, bazni lim na svom temelju, dva elementa kraj do kraja. **Tolerancija (mm)** određuje koliko dva dela smeju da zalaze jedan u drugi pre nego što se broji (1 mm na početku; do 50).
- Delovi koje veza spaja: krajnji lim sa svojom gredom i sa pojasnicom stuba za koju je pričvršćen zavrtnjima, greda i stub tog spoja, bazni lim sa svojim stubom, limovi nastavka sa oba dela, dijagonala sa svojim čvornim limom (useček cevi se ne seče u modelu). Veza ih namerava da spoji.
- Smičuća papuča baznog lima u temelju ispod nje (sedi u džepu za malter).
- Zavrtnji i sidrene šipke (prolaze kroz rupe) i armatura.
- Delovi u skrivenim fazama. Vidi [Faze](topic:phases).

Dijagonala ili greda koja zadire u stub bez veze između njih **jeste** sudar: taj spoj još treba vezu. Dijagonala iz primera to pokazuje: nema čvorni lim. Izaberi je i klikni {{ui:Čvorni lim}} ([Čvorni lim za dijagonale](topic:brace-gussets)) i njeni sudari nestaju.

## Dobro je znati

- Preklapanje meri dubinu u materijalu, pa greda koja je zabodena u tanko rebro ili pojasnicu stuba pokazuje samo nekoliko milimetara čak i kada zadire daleko.
- Delovi se proveravaju onako kako su isečeni: izrezi i skraćenje grede na njenim krajnjim limovima se uzimaju u obzir. Rupe se ne uzimaju.
