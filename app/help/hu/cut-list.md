---
title: Vágási lista
summary: Rendezze el a gerendákat, oszlopokat, merevítőket és lépcsőkarokat készletes hosszakba a fűrészrés figyelembevételével, és nézze meg, hány rudat kell vásárolni, és mennyi a hulladék.
keywords: vágási lista, elrendezés, készletes hossz, rúd, fűrészrés, fűrész, lemaradt darab, levágási maradék, hulladék, összevonás, vásárlás, több
from: 81d06ce5
---

A {{ui:Vágási lista}} lap a nézet alatt azt számítja ki, hogyan lehet a modell lineáris elemeit készletrudakból kivágni: szelvényenként és anyagonként hány rudat érdemes megvásárolni az egyes hosszakból, mi kerül az egyes rudakra, és mennyi a hulladék.

## A készlet beállítása

A lap tetején:

- **Készletes hosszak (mm):** a vásárolható hosszak szóközzel elválasztva, például `6000 12000`, vagy 20 ft és 40 ft rudak `6096 12192` formában. Legfeljebb nyolc.
- **Fűrészrés (mm):** minden vágás mennyi anyagot vesz el (kezdetben 3).
- **Végvágás (mm):** a rúd elejéről levágott rész az első darab előtt (kezdetben 0).
- **Maradék megtartása ettől (mm):** az ennél hosszabb maradék visszakerül a készletbe; a rövidebb a selejt (kezdetben 500).

Ezek a böngészőben maradnak meg, mint a többi [beállítás](topic:settings).

## Elrendezés módja

- Minden gerenda, oszlop, merevítő és lépcsőkar, alkatrészjel és darabszám szerint; a lemezeket táblából vágják, ezért itt nem kerülnek elrendezésre.
- Minden szelvény és anyag külön.
- A leghosszabb darabok először, mindegyik abba a rúdba, amelybe elfér; új rúd a leghosszabb készletes hosszal indul. Ezután minden rudat a legrövidebb készletes hosszal vásárolnak, amely még befogadja a vágásait.
- Minden vágás a fűrészrést veszi el (a rúd végén záródó vágás után nincs); minden rúd elveszíti a végvágást.
- A legnagyobb készletes hossznál hosszabb darab a **Készletnél hosszabb** alatt szerepel, és nem kerül elrendezésre: toldja meg (lásd: [Toldások](topic:splices)), vagy adjon hozzá hosszabb készletes hosszt.

## Olvasás

- **Összesítés:** szelvényenként és anyagonként a darabok, a megvásárlandó rudak (például „2 × 12000, 1 × 6000"), a megvásárolt és felhasznált méterek, valamint a hulladék.
- **Rudak és vágásaik:** minden rúd, a készletes hossza, a vágásai alkatrészjellel és hosszal, valamint a maradék: megtartott vagy selejt.

A {{ui:CSV letöltése}} mindkét táblát elmenti `<name> cut list.csv` néven.

A DetailCraft nem rendezi a lemezeket táblákba, és nem keveri a szelvényeket vagy az anyagokat egy rúdon.
