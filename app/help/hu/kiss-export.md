---
title: KISS-fájl exportálása gyártásszervező szoftverhez
summary: Küldje el az anyagjegyzéket egy gyártásirányítási (MIS) programnak KISS 1.1 fájlként: összeállítások, alkatrészek, fázisok sorrendként, furatok, kivágások és varratok.
keywords: kiss, kss, mis, gyártásirányítás, gyártásvezérlés, árazás, anyagjegyzék, bom, export, fabtrol, sorrend
from: 30cf3951
---

A {{ui:Kimenet}} csoportban nyissa meg a {{ui:Továbbiak}} menüt, és válassza a {{ui:KISS-fájl gyártásszervező szoftverhez}} lehetőséget. A DetailCraft letölti a `<name>.kss` fájlt, egy KISS-fájlt („Keep It Simple, Steel”, 1.1-es verzió), a sima szöveges formátumot, amelyből a legtöbb gyártásirányítási program importálja az anyagjegyzéket.

## Mi van benne

- A fejléc: munkaszám (a modellnév első nyolc betűje és számjegye), a modellnév, a dátum és időpont, valamint az, hogy metrikusak-e a méretek.
- Minden összeállítási jelhez: a főalkatrésze (a mennyiség = hány darab az összeállításból), egy rajzsor (A-B1 és hasonlók, az összeállítási rajz száma), egy összeállítási sor (név, típus, tömeg, teljes hossz, mélység és szélesség), egy sorrendi sor minden [fázisra](topic:phases), amelyben az összeállítás szerepel, valamint munkadíj-sorok: furatok (darabszám, átmérő, átmenő vastagság), kivágások és varratok.
- Ezután az ahhoz tartozó minden alkatrész a **teljes** mennyiséggel (összeállításonként × összeállítások száma), ahogy a szabvány kéri.
- A laza csavarok és horgonyrudak a BOLTS rajzon, a FIELD összeállításban.
- Minden sor megadja a típust (W, C, L, HSS, PL, vagy MI egyéni szelvény esetén), a méretet, az acélminőséget, a vágási hosszt milliméterben, az alkatrész nevét és a tömeget.

## Angolszász vagy metrikus

A [DetailCraft beállításai](topic:settings) között a **KISS-fájl méretei** pontban választható:

- **Automatikus** (kiindulási érték): angolszász, ha minden tag AISC-szelvény, egyébként metrikus.
- **Angolszász**: szelvények az AISC jelölésük szerint (W 16X26, HSS 4X4X.250); a lemezek és a csavarok, amelyeket a DetailCraft milliméterben tart nyilván, a legközelebbi 1/16 in-ra kerekítve; a tömegek fontban.
- **Metrikus**: európai szelvények a nevük szerint (IPE300), a lemezek vastagság X szélesség formában, milliméterben; a tömegek kilogrammban.

A hosszak a beállítástól függetlenül mindig milliméterben, két tizedesjegyel szerepelnek: a KISS-szabvány ezt kéri, a fogadó program pedig átváltja őket.

:::note
A minőségek a szabvány nyolc karakteréhez igazodnak: az A572 Gr 50 A572-50 lesz. A nevekben a vesszők szóközökké válnak (a formátum nem ismeri az idézőjelezést). Egy importált fájlt ellenőrizzen a programjában, mielőtt támaszkodna rá: a DetailCraft KISS-fájljait itt a szabvány szerint ellenőrizzük, gyártásszervező programban még nem.
:::
