---
title: Fázy
summary: Rozdeľte model na fázy (postupy montáže alebo dodávky), zobrazujte alebo skrývajte každú fázu, zaraďujte dielce do fáz a číslujte značky podľa fáz.
keywords: fáza, fázy, správca fáz, postup montáže, dodávka, dávka, sekvencia, skryť fázu, zobraziť fázu, filter, číslovanie, predpona značky, podľa fázy
from: bae506f5
---

Fáza je skupina dielcov, ktoré sa vyrábajú, dodávajú alebo montujú spoločne: postup montáže, dodávka, dávka. Každý prvok a základ je v jednej fáze. Spoj je vo fáze svojho hlavného prvku: nosník čelnej dosky, stĺp pätnej dosky. Nový model má jednu fázu.

## Panel fáz

Sekcia {{ui:Fázy}} na paneli {{ui:Model}} vypisuje všetky fázy:

- zaškrtávacie políčko zobrazí alebo skryje fázu v pohľade;
- číslo a názov, ktorý môžete zadať (prázdne = "Fáza 2" a tak ďalej);
- koľko dielcov je v nej;
- tlačidlo {{ui:×}} odstráni fázu. Odstrániť sa dá iba prázdna fáza: najprv dielce presuňte do inej fázy.

{{ui:Pridať fázu}} pridá ďalšie číslo a nastaví ju ako fázu, do ktorej idú nové dielce.

## Zaradenie dielcov do fázy

- **Nové dielce:** {{ui:Nové dielce idú do}} vyberá fázu, do ktorej pôjde každý prvok a základ, ktorý od teraz umiestnite.
- **Jeden dielec:** vyberte ho a zmeňte {{ui:Fáza}} na paneli {{ui:Vlastnosti}}.
- **Viac dielcov:** vyberte ich (oknom, {{key:Shift}}+klikom, {{key:Mod+A}}) a zmeňte {{ui:Fáza}} v hornej časti panela {{ui:Vlastnosti}}. Keď sú v rôznych fázach, zobrazí sa **Rôzne**. Jedna zmena je jeden krok späť.

Kópie si zachovajú fázu dielca, z ktorého boli skopírované, a to aj vtedy, keď sa vložia do iného modelu (fáza sa tam pridá).

## Zobrazenie a skrytie fáz

Skrytá fáza sa v pohľade nekreslí, nedá sa na ňu kliknúť ani ju zachytiť výberovým oknom a {{key:Mod+A}} ju vynechá. Stále je v kusovníku, v zostavách, vo výkresoch a v každom exporte. Skrytie platí iba pre pohľad: neukladá sa a nedá sa vrátiť späť.

## Značky podľa fáz

Keď je zapnuté **Číslovať značky podľa fáz** (na začiatku je zapnuté) a dielce sú vo viac než jednej fáze, každá fáza sa čísluje samostatne a jej značky začínajú číslom fázy: značky dielcov 1-b1, 2-b1, značky zostáv 2-B1, základy 2-F1. Dva rovnaké nosníky v rôznych fázach potom majú rôzne značky, lebo sa vyrábajú a dodávajú v iných časoch. Ak sa používa jedna fáza, značky nemajú predponu. Vypnutím sa celý model očísluje ako jeden celok, takže rovnaké kusy zdieľajú značku bez ohľadu na fázu.

Fáza sa zapisuje do exportu IFC (sada vlastností DetailCraft, Phase).

:::note
Modely s fázami sa ukladajú vo formáte súborov DetailCraft 2. Vydanie 0.3 programu DetailCraft ich nedokáže otvoriť; táto verzia otvára staršie súbory, pričom všetky dielce sú vo fáze 1.
:::
