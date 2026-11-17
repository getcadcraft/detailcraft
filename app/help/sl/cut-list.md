---
title: Seznam krojenja
summary: Razporedite nosilce, stebre, diagonale in stopniščne nosilce v zalogne dolžine s širino reza ter preberite, koliko palic kupiti in koliko je odpadka.
keywords: seznam krojenja, razporejanje, zalogna dolžina, palica, širina reza, žaga, odrezek, odpadek, združevanje, nakup, več
from: 81d06ce5
---

Zavihek {{ui:Seznam krojenja}} pod pogledom izračuna, kako rezati linearne dele modela iz zalogovnih palic: koliko palic vsake dolžine kupiti za vsak profil in material, kaj gre na vsako palico in koliko odpadka nastane.

## Nastavite zalogo

Na vrhu zavihka:

- **Zalogne dolžine (mm):** dolžine, ki jih lahko kupite, ločene s presledki, na primer `6000 12000` ali palice po 20 ft in 40 ft kot `6096 12192`. Največ osem.
- **Širina reza (mm):** koliko vzame vsak rez (na začetku 3).
- **Obrez konca (mm):** odreže konec vsake palice pred prvim kosom (na začetku 0).
- **Ohrani odrezke od (mm):** odrezek, ki je vsaj tako dolg, se vrne v zalogo; krajši je odpad (na začetku 500).

Shranjene so v tem brskalniku, kot druge [nastavitve](topic:settings).

## Kako razporeja

- Vsak nosilec, steber, diagonala in stopniščni nosilec, po oznaki dela in številu; plošče se režejo iz pločevine in tu niso razporejene.
- Vsak profil in material posebej.
- Najdaljši kosi najprej, vsak v prvo palico, v katero se zmesti; nova palica se začne z najdaljšo zalogno dolžino. Nato se vsaka palica kupi kot najkrajša zalogna dolžina, ki še zadostuje za njene reze.
- Vsak rez vzame širino reza (ni je po rezu, ki konča točno na koncu palice); vsaka palica izgubi obrez konca.
- Kos, daljši od vseh zalognih dolžin, je naveden pod **Daljše od katere koli zaloge** in ni razporejen: spojite ga (glejte [Spajanje](topic:splices)) ali dodajte daljšo zalogno dolžino.

## Branje

- **Povzetek:** za vsak profil in material kosi, palice za nakup (na primer „2 × 12000, 1 × 6000“), kupljeni in porabljeni metri ter odpadek.
- **Palice in njihovi rezi:** vsaka palica, njena zalogna dolžina, njeni rezi kot oznaka dela in dolžina ter odrezek, ohranjen ali odpad.

{{ui:Prenesi CSV}} shrani obe tabeli kot `<name> cut list.csv`.

DetailCraft ne razporeja plošč v liste in ne meša profilov ali materialov na eni palici.
