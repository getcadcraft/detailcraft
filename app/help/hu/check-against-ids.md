---
title: Az IFC-export ellenőrzése az ügyfél IDS-ével
summary: Töltse be a kapott .ids fájlt, és a Problémák panelen lássa az összes exportált alkatrészt, amely nem felel meg neki, mielőtt elküldi az IFC-t.
keywords: ids, információszolgáltatási előírás, buildingsmart, követelmények, átadás, ellenőrzés, validálás, minőségbiztosítás, ifc-export, tulajdonság, anyag, beszerzés
from: 50d0f785
---

## Mit fog csinálni

Az IDS (Information Delivery Specification, egy buildingSMART-szabvány) az a lista, hogy mit kell tartalmaznia egy IFC-nek. A DetailCraft azt az IFC-t ellenőrzi, amelyet exportálna (ugyanazt a fájlt, amelyet a {{ui:IFC}} ír), a kapott IDS-sel szemben, és felsorolja az összes olyan elemet, amely nem felel meg.

## Lépések

1. Nyissa meg vagy rajzolja meg a modellt.
2. Kattintson az eszköztár {{ui:Kimenet}} csoportjában a {{ui:Ellenőrzés IDS ellen…}} gombra.
3. Kattintson a {{ui:.ids fájl betöltése…}} gombra, és válassza ki a fájlt. Semmi nem töltődik fel.
4. Olvassa el az eredményt: minden előírás mellett {{ui:Megfelel}} vagy {{ui:Nem felel meg}} szerepel, valamint az, hogy hány elemre vonatkozik.
5. Nyissa meg a Problémákat ({{key:Ctrl+Shift+M}}), és kattintson egy hibára: a tag, a csomópont, a lépcső vagy az alap, ahonnan származik, kijelölődik, és a nézet arra nagyít.

## Mit kell látnia

- Egy figyelmeztetés minden exportált elemre és minden olyan követelményre, amelyet nem teljesít, az előírás nevével, azzal, amit az IDS kér, és azzal, amit az export tartalmaz.
- Az ellenőrzési jelentés (a Problémákban) az IDS-sel kezdődik: a címe, a verziója, a szerzője, és minden előírás darabszámai.

## Jó tudni

- Az IDS a modellfájlban van mentve, ezért a modell megnyitásakor újra ellenőrzésre kerül. Betöltése vagy eltávolítása egy visszavonható lépés.
- Minden módosítást kis idő múlva újra ellenőriz; nagy modellnél az ellenőrzések között kicsit tovább várakozik.
- Az export GlobalId-jai a modell nevéből és a DetailCraft-on belüli alkatrészszámokból származnak, ezért egyik ellenőrzéstől a másikig megmaradnak. A modell átnevezése minden elemnek új GlobalId-t ad.
- A számokat SI-egységekben hasonlítja össze (az export milliméterben készül; a hosszúságokat először méterre váltja át).
- Az IDS-ben a minták a teljes értékre vonatkoznak. A sor elején álló `^` és a végén álló `$` szintén „a teljes érték” jelentésű, ahogy a legtöbb IDS-fájl gondolja.

## Tovább

- [IFC exportálása](topic:ifc-export)
