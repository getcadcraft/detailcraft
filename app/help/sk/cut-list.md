---
title: Rezný plán
summary: Rozmiestnite nosníky, stĺpy, diagonály a schodiskové nosníky na tyče skladových dĺžok so šírkou rezu a zistite, koľko tyčí kúpiť a aký je odpad.
keywords: rezný plán, rozmiestňovanie, skladová dĺžka, tyč, šírka rezu, píla, odrezok, zvyšok, odpad, spájanie, nákup, viac
from: 81d06ce5
---

Karta {{ui:Rezný plán}} pod pohľadom spočíta, ako zo skladových tyčí narezať lineárne diely modelu: koľko tyčí každej dĺžky kúpiť pre každý profil a materiál, čo pôjde na každú tyč a aký je odpad.

## Nastavenie skladu

Na hornej časti karty:

- **Skladové dĺžky (mm):** dĺžky, ktoré môžete kúpiť, oddelené medzerami, napríklad `6000 12000`, alebo tyče 20 ft a 40 ft ako `6096 12192`. Najviac osem.
- **Šírka rezu (mm):** koľko zaberie každý rez (spočiatku 3).
- **Orezanie konca (mm):** odrežte koniec každej tyče pred prvým kusom (spočiatku 0).
- **Ponechať odrezky od (mm):** odrezok aspoň tejto dĺžky sa vráti na sklad; kratší je odpad (spočiatku 500).

Tieto hodnoty sa uchovávajú v tomto prehliadači, rovnako ako ostatné [nastavenia](topic:settings).

## Ako sa rozmiestňuje

- Každý nosník, stĺpec, diagonála a schodiskový nosník podľa značky dielu a počtu; plechy sa režú z tabúľ a tu sa nerozmiestňujú.
- Každý profil a materiál zvlášť.
- Najdlhšie kusy najskôr, každý do prvej tyče, do ktorej sa zmestí; nová tyč začína ako najdlhšia skladová dĺžka. Potom sa každá tyč kúpi ako najkratšia skladová dĺžka, ktorá ešte pojme jej rezy.
- Každý rez zoberie šírku rezu (žiadna po reze, ktorý končí presne na konci tyče); každá tyč stratí orezanie konca.
- Kus dlhší než každá skladová dĺžka je uvedený pod **Dlhšie ako ktorýkoľvek sklad**, nerozmiestňuje sa: spojte ho (pozri [Nadstavovanie](topic:splices)) alebo pridajte dlhšiu skladovú dĺžku.

## Čítanie

- **Súhrn:** pre každý profil a materiál kusy, tyče na kúpu (napríklad „2 × 12000, 1 × 6000“), kúpené a použité metre a odpad.
- **Tyče a ich rezy:** každá tyč, jej skladová dĺžka, jej rezy ako značka dielu a dĺžka, a odrezok, ktorý sa ponechá alebo je odpad.

{{ui:Stiahnuť CSV}} uloží obe tabuľky ako `<name> cut list.csv`.

DetailCraft nerozmiestňuje plechy do tabúľ a nemieša profily ani materiály na jednej tyči.
