---
title: Provjeri kolizije
summary: Pronađi elemente, limove i temelje koji zadiru jedni u druge, izostavljajući dijelove koje spoj namjerava spojiti, i idi do svake kolizije.
keywords: kolizija, provjera kolizija, sudar, interferencija, preklapanje, presijecanje, tvrda kolizija, koordinacija, provjera modela
from: 04d72d3b
---

Otvori karticu {{ui:Kolizije}} ispod pogleda i odaberi {{ui:Provjeri sada}}. DetailCraft gleda svaki par dijelova u prikazanim fazama: čelik u čelik, i čelik u temelj. Kartica navodi svaku koliziju, najdublju prvu, sa:

- dva dijela, po oznaci dijela (ili oznaci temelja) i profilu;
- **Preklapanje (mm)**: koliko je tačka jednog dijela unutar drugog, do najbliže površine;
- **Blizu**: presjek mreže i nivo na kojem je, ili njegove koordinate;
- {{ui:Prikaži}}: označava oba dijela i dovodi mjesto u sredinu pogleda.

Naslov kartice pokazuje koliko je kolizija pronašla posljednja provjera. Provjera ne radi sama: nakon promjene modela lista to kaže, a {{ui:Provjeri sada}} je pokreće ponovo.

## Šta nije kolizija

- Dijelovi koji se samo dodiruju: ploča uz prirubnicu, temeljna ploča na temelju, dva elementa kraj do kraja. **Tolerancija (mm)** određuje koliko dva dijela smiju zadirati jedan u drugi prije nego se računa (1 mm na početku; do 50).
- Dijelovi koje spoj spaja: čeona ploča sa svojom gredom i sa prirubnicom stuba za koju je zavrnuta, greda i stub tog spoja, temeljna ploča sa svojim stubom, ploče nastavka sa oba dijela, dijagonala sa svojim čvornim limom (useček cijevi nije urezan u model). Spoj znači da se oni trebaju sresti.
- Smični zub temeljne ploče u temelju ispod nje (sjedi u džepu za podlijevanje).
- Vijci i sidrene šipke (prolaze kroz rupe) i armatura.
- Dijelovi u sakrivenim fazama. Vidi [Faze](topic:phases).

Dijagonala ili greda koja upada u stub bez veze između njih **jeste** kolizija: taj spoj i dalje treba vezu. Dijagonala u primjernom okviru to pokazuje: nema čvorni lim. Izaberi je i odaberi {{ui:Čvorni lim}} ([Čvorni limovi za dijagonale](topic:brace-gussets)) i njene kolizije nestaju.

## Korisno znati

- Preklapanje mjeri dubinu u materijalu, pa greda koja upada u tanku rebro ili pojasnicu stuba pokazuje samo nekoliko milimetara, čak i kada ide daleko unutra.
- Dijelovi se provjeravaju onako kako su isječeni: uzimaju se u obzir useci i odsijecanje grede na krajnjim pločama. Rupe se ne uzimaju.
