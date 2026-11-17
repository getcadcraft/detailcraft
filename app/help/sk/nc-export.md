---
title: Odoslanie súborov NC do dielne
summary: Exportujte súbory NC vo formáte DSTV pre každú značku dielca (profily I, U, uholníky, HSS, plechy), zabalené v archíve ZIP, a skontrolujte ich skôr, než sa dostanú k stroju.
keywords: nc, nc1, dstv, cnc, stroj, linka nosníkov, linka vŕtania, rezanie plechov, export, výroba, zip
from: 598b6091
---

DetailCraft zapisuje jeden súbor DSTV NC (`.nc1`) pre každú značku dielca – pre profily I, U, uholníky, obdĺžnikové a kruhové HSS a plechy – a všetky ich zabalí do jedného archívu ZIP. Linky pre nosníky a stroje na plechy tieto súbory čítajú, aby podľa nich pílili, vŕtali a rezali.

## Export

1. Najprv vyriešte všetky problémy na karte {{ui:Problémy}}: spoj, ktorý sa nepodarilo vytvoriť, nepridá žiadne otvory.
2. Uložte model ({{key:Mod+S}}), aby súbory NC zodpovedali uloženému modelu.
3. Vyberte {{ui:Súbory NC}} v skupine {{ui:Výstup}}.
4. Prehliadač stiahne súbor `<name> NC.zip`. Stavový riadok uvedie, koľko súborov obsahuje, a vypíše značky, pre ktoré nezapísal súbor (uholník alebo kruhovú rúrku s výrezom).

V archíve je každý súbor pomenovaný podľa svojej značky dielca: `b1.nc1`, `c1.nc1`, `p1.nc1` … Archív je nekomprimovaný a otvorí sa v ľubovoľnom nástroji na prácu s archívmi.

Ak model neobsahuje žiadne dielce, stavový riadok to uvedie.

## Čo obsahuje každý súbor

- **Hlavička (ST):** názov modelu ako zákazka, značka dielca ako výkres a kus, fáza 1, trieda materiálu, množstvo, profil a jeho rozmery, hmotnosť na meter a plocha náteru na meter. Rezy píly sú kolmé.
- **Vonkajšie obrysy (AK):** obrys stojiny s vyrezanými výrezmi a obrys každej pásnice skrátený tam, kde výrez pásnicu odstráni.
- **Otvory (BO):** každý otvor s plochou, polohou a priemerom vrátane otvorov, ktoré vytvorili čelné dosky a pätné dosky.

Pole po poli, spolu s pravidlami pre plochy a súradnice: [Polia súboru NC](topic:nc1-fields).

## Čo sa nezapisuje

- Uholníky a kruhové rúrky s výrezom: súbor NC sa nevytvorí. Ich značky sa uvedú v stavovom riadku.
- Otvory v kruhových rúrkach (DetailCraft ich nevytvára).
- Skosenia, vnútorné obrysy, značenie dielcov (rysovanie) a iné uhly rezu píly než kolmé.
- Podlhovasté otvory (DetailCraft pozná iba okrúhle otvory).

## Kontrola pred obrábaním

Súbory NC programu DetailCraft overuje jeho vlastná testovacia sada, ale na strojoch vašej dielne ešte neboli spustené.

1. Otvorte súbory v prehliadači NC vašej dielne alebo v softvéri stroja a porovnajte ich s dielenskými výkresmi.
2. Pred spustením celej dávky skontrolujte na stroji jeden dielec každého druhu.
3. Overte, ako váš softvér číta súradnice y pásnic a plochy profilov U: DetailCraft meria y pásnice od zadnej hrany a profily U kladie na chrbát tak, ako ich kreslí norma (pozri [Polia súboru NC](topic:nc1-fields#faces-and-coordinates)).
