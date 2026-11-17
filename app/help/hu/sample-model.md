---
title: A mintakeret felfedezése
summary: Nyissa meg a beépített, kétfesztávú keretet, és használja arra, hogy megtanulja, mit készít a DetailCraft, a jelöléstől az NC-fájlokig.
keywords: minta, példa, bemutató, keret, tanulás, túra, kipróbálás
from: 5c5944dd
---

A mintakeret egy kicsi, teljes modell: a DetailCraft által készíthető minden fajta dolog legalább egyszer megjelenik benne. Ez a leggyorsabb módja az alkalmazás megismerésének, és egy export tesztelésének, mielőtt ráhagyatkozna.

## Megnyitás

1. Válassza a {{ui:Minta}} lehetőséget a {{ui:Fájl}} csoportban.
2. Ha az aktuális modellben nem mentett módosítások vannak, válassza a {{ui:Mentés előbb}} vagy a {{ui:Módosítások elvetése}} lehetőséget.
3. Az állapotsor ezt írja ki: „Mintakeret: 6 oszlop talplemezekkel, 4 gerenda véglemezekkel, egy merevítő, 7 alap vasalással.”

A minta új, „Mintakeret” nevű modellként nyílik meg. Mást nem változtat, és nincs visszavonható lépése.

## Mi van benne

- **Rácsok** 1, 2, 3 a 6000 mm-enként, A és B a 7000 mm-enként. **Szintek**: az 1. szint a 0-nál, a 2. szint a 4000-nél.
- **Hat oszlop**, W12x50, az 1. szinttől a 2. szintig minden metszéspontban, mindegyik 25 mm-es talplemezen, négy horgonyrúddal.
- **Négy gerenda**, W16x26, a 2. szinten az A és B rácsvonalak mentén, az acél felső széle a szinten, mindkét végén síkban csavarozott véglemezzel (összesen nyolc).
- **Egy merevítő**, HSS4x4x1/4, az A/1-től az 1. szinten az A/2-ig a 2. szinten.
- **Hat talpalap**, 2000 x 2000 x 600, mindegyik oszlop alatt, mindkét irányban horgos alsó hálózattal.
- **Még egy alap** a keret mellett, 2400 x 1800 x 600, hat horgos indítórúddal, amelyek felfelé állnak egy betonpillér számára.

## Próbálja ki

1. Kattintson egy gerendára. Olvassa le a {{ui:Alkatrészjel}}, {{ui:Összeállítás}}, {{ui:Vágott hossz}} és {{ui:Visszavágás}} értékeit: a vágott hossz rövidebb a 6000 mm-es rácstávolságnál, mert minden véglemez az oszlop mélységének felével és a lemez vastagságával vágja vissza a gerendát.
2. Kattintson egy oszlopra. A {{ui:Furatok}} alatt felsorolja a véglemezek által az övlemezeibe fúrt furatokat („8 furat a kapcsolatokból”; a középső oszlopoknak 16 van, egy-egy készlet mindkét övlemezben).
3. A bal oldali {{ui:Alkatrészjelek}} listában látható, hogy mind a négy gerenda egy jelet visel: ugyanaz az acéldarab. A sarokoszlopok is közös jelet kapnak, bár furataik ellentétes irányba néznek, mert az oszlop, amelyet végénél fordítunk meg, ugyanaz az alkatrész. A középső oszlopok, amelyeknek mindkét övlemezében van furat, másik jelet kapnak.
4. Kattintson egy véglemezre (vagy annak egyik csavarjára). A {{ui:Tulajdonságok}} panel mutatja a lemez-, csavar- és hegesztési beállításokat, a készített csavarokat (hosszukkal, amelyet a befogásból számítunk), valamint a szélvonal-távolságra vonatkozó figyelmeztetéseket.
5. Nyissa meg az {{ui:Anyagjegyzék}} fület. Az alkatrészek, összeállítások (egy gerenda két véglemezzel egy összeállítás), csavarok és horgonyrudak súlyokkal együtt listázva vannak. Hat alkatrészjelet kell látnia: c1 (a két középső oszlop) és c2 (a négy sarokoszlop), mindkettő W12x50, 3975 mm; b1, négy W16x26 gerenda, 5650 mm; br1, a merevítő; p1, nyolc PL20x180 véglemez; és p2, hat PL25x400 talplemez. A rögzítőelemek: 64 csavar 20 x 70 A325, és 24 horgonyrúd 20 x 575.
6. Nyissa meg a {{ui:Hajlítási kimutatás}} fület. A hat azonos alap osztozik a rúdjeleken; a pillér alapja a sajátját adja hozzá.
7. Kattintson a merevítőre, és nézze meg a {{ui:Kimenet}} csoportot: a {{ui:Gyártmányrajz}} inaktív (halvány), mert a gyártmányrajzok eddig csak I-szelvényeket és lemezeket fednek le.
8. Válassza az {{ui:NC-fájlok}} lehetőséget. A zip minden I-szelvény- és lemezjelhez tartalmaz egy fájlt; az állapotsor jelzi, hogy a merevítő jele nem lett kiírva.
9. Válassza az {{ui:IFC}} lehetőséget, és nyissa meg a fájlt bármely IFC-megjelenítővel, hogy lássa, a többi szoftver hogyan olvassa be.

## Kiindulópontként

A minta egy szokásos modell. Módosítsa, majd nevezze át a {{ui:Név}} mezőben, és mentse az új néven a {{key:Mod+S}} billentyűkombinációval.
