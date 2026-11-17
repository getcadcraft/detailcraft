---
title: Lépcsők
summary: Egyenes acél lépcső elhelyezése az emelkedés, a lépcsőfok-mélység és a szélesség alapján: két lépcsőhúr és lemez lépcsőfokok, egy hegesztett összeállítás.
keywords: lépcső, lépcsők, lépcsőház, lépcsőhúr, lépcsőfok, felmenő, lépcsőfok-mélység, orrél, lépcsőkar, acél lépcső, ibc 1011, blondel
from: 62fa3845
---

Egyenes acél lépcső: két lépcsőhúr (csatornák, a lábukkal befelé fordítva, vagy élre állított laposacélok), és minden lépcsőfokhoz egy lemez, amely közöttük hegesztve van. A DetailCraft a felmenők számát az emelkedésből számítja, ellenőrzi az építési szabályzat határértékeivel, és a lépcsőt egy üzemi összeállításként készíti el.

## Lépcső elhelyezése

1. Válassza a {{ui:Lépcső}} lehetőséget az {{ui:Elhelyezés}} csoportban, vagy nyomja meg az {{key:S}} billentyűt.
2. Állítsa be a lépcsőt a jobb oldalon: a **felfutás irányát** (0° a +x mentén, 90° a +y mentén), az **emelkedést** (0 = a következő szintig), a **lépcsőfok-mélységet**, a **tiszta szélességet** a lépcsőhúrok között, a **megengedett legmagasabb felmenőt**, a **lépcsőhúrt**, a **lépcsőfok-lemez vastagságát**, az **orrélt** és az anyagot.
3. Kattintson egy rácsmetszetre: ez az első felmenő alja, a lépcső középvonalán.

Az állapotsor megmondja, hány felmenőt készített. Jelölje ki a lépcsőt (kattintson egy lépcsőhúrra vagy egy lépcsőfokra), hogy bármelyik beállítását, helyzetét vagy ütemét módosítsa; a tulajdonságok megmutatják a felmenőket, a lépcsőfokokat, a vízszintes hosszt, a lejtésszöget és a 2 × felmenő + lépcsőfok-mélység értéket is.

## Amit a DetailCraft kiszámol

- **Felmenők.** Annyi, amennyivel minden felmenő a megengedett legmagasabb alatt vagy azon marad: 3000 mm emelkedés, 178 mm-nél kisebb értékkel, 17 felmenőt ad, mindegyik 176,5 mm. Eggyel kevesebb lépcsőfok van, mint felmenő (a felső szint az utolsó lépés).
- **Lépcsőfokok.** Egy lemez, amely lépcsőfok-mélység + orrél mély (alapból 280 + 25 = PL6x305), a tiszta szélességgel megegyező hosszban; felső széle minden felmenő magasságában, elülső éle (az orrél) a felmenő vonala előtt van.
- **Lépcsőhúrok.** A lépcső lejtésével, az alsó szinthez csatlakozásuktól a felső szinthez csatlakozásukig, közvetlenül a tiszta szélességen kívül; felső élük 50 mm-rel az orrélek vonala fölött van. A csatorna lábai a lépcső felé néznek; egy laposacél, például PL12x250, élre állítva áll.
- **Hegesztések.** Minden lépcsőfok mindkét lépcsőhúrhoz. A lépcsőfokok és a jobb oldali lépcsőhúr a bal lépcsőhúrhoz vannak hegesztve, így a lépcső egy összeállítási jelet kap (ST1), és saját összeállítási rajza lesz; a lépcsőhúrok st… jelet, a lépcsőfokok p… jelet kapnak.
- **Ellenőrzések.** Figyelmeztetések, ha egy felmenő a 4–7 in. (102–178 mm) tartományon kívül esik, vagy a lépcsőfok-mélység 11 in. (279 mm) alatt van, az IBC 2021 1011.5.2 szakaszának határértékei szerint; ha 2 × felmenő + lépcsőfok-mélység 600–650 mm-en kívül esik (gyakori kényelmi szabály); és ha a lépcsőhúr túl alacsony ahhoz, hogy megtartsa a lépcsőfokokat. Ismeretlen lépcsőhúr-szelvény esetén a lépcső nem épül meg.

## Jó tudni

- Az áthelyezés, forgatás, tükrözés, másolás, beillesztés, törlés és az ütemek úgy működnek a lépcsőnél, mint egy elemnél. A forgatás elforgatja a felfutást; a tükrözés a tükrözött irányba fordítja.
- A lépcsőhúrok IFC-be IfcMember-ként, a lépcsőfokok IfcPlate-ként exportálódnak; mindkettő NC-fájlba és az anyagjegyzékbe kerül. Az ütközésellenőrzés kihagyja a lépcső saját részeit (egymáshoz vannak hegesztve).
- Ez az egyszerű lépcső egy szakasz lemez lépcsőfokokkal. Pihenőkhöz, korlátokhoz korlátoszlopokkal, hajlított lemeztálcás vagy rácsos lépcsőfokokhoz, választott szabálykészlethez, vágólistához és a lépcsőhúr-furatrajzokhoz jelölje be az {{ui:Acél lépcsőgenerátor használata}} lehetőséget a Lépcső eszközben (lásd: Acél lépcsőgenerátor).
- A lépcsőhúrok derékszögben vannak vágva: a padlókhoz csatlakozó végvágásaik nem készülnek el.
- A DetailCraft nem tervezi a lépcsőt: a lépcsőhúrokat és a lépcsőfokokat nem ellenőrzi szilárdságra vagy lehajlásra.
