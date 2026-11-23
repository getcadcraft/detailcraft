---
title: Hegesztések ellenőrzése a rúdelemek találkozásánál
summary: A tervezési ellenőrzés után ellenőrizze a sarok- és tompavarratokat minden rúdelem körül, ahol másik rúdelemhez vagy támaszhoz csatlakozik, az AISC 360-16 J. fejezete vagy az EN 1993-1-8 szerint, és lássa, melyik varratcsoport a legterheltebb és melyik kombináció alatt. Segédeszköz, amíg mérnök át nem nézte.
keywords: hegesztés, hegesztések, hegesztésellenőrzés, sarokvarrat, tompavarrat, teljes átolvadás, AISC 360, EN 1993-1-8, varratcsoport, kihasználtság, teherbírás, csomópont, kapcsolat, szerkezeti, mérnök
from: e8eebbe6
---

Az {{ui:Analysis}} lap {{ui:Design checks}} alatti {{ui:Weld checks}} blokkja az utoljára megoldott keret erőit és az Ön által készített teherbírási kombinációkat veszi, és minden csomópontban ellenőrzi a hegesztést minden rúdelem körül: ahol a rúdelem másik rúdelemhez csatlakozik, vagy támaszon áll.

:::warning
Mérnök általi átnézésig segédeszköz. A keret saját végi erőiből, a szelvény körül körbefutó, egyetlen csoportként kezelt hegesztést ellenőrzi. Nem olvassa ki a gyártmányrajzokon megadott hegesztések méretét vagy hosszát, és nem ellenőriz csavarokat, lemezeket, palástnyomást, blokknyírást vagy kinyílást. Az eredményei nem jelentenek hitelesítést.
:::

## Futtatás

1. Oldja meg a keretet az {{ui:Analysis}} lapon, majd a {{ui:Design checks}} alatt válassza ki a {{ui:Design code}} értéket, és nyomja meg a {{ui:Make combinations}} gombot (a hegesztésellenőrzéshez ugyanezek a teherbírási kombinációk kellenek).
2. A {{ui:Weld checks}} részben állítsa be a {{ui:Fillet leg (mm, 0 = the wall, at most 8)}} értéket. A 0 azt jelenti, hogy a szár a szelvény vékonyabb falához igazodik, legfeljebb 8 mm-ig. Az AISC előírás szerint a {{ui:Weld metal strength F_EXX (MPa)}} a varratfém szilárdsága (482,6 MPa egy E70 elektródának felel meg). EN 1993 esetén az acélminőség adja meg a varratfém szilárdságát és a korrelációs tényezőt.
3. Nyomja meg a {{ui:Check welds}} gombot.

A táblázat minden sora egy hegesztési csoport (a rúdelem egy csomóponti vége). Az adatok: az irányadó ellenőrzés **kihasználtsága**, az állapota (megfelel vagy nem felel meg), valamint hogy melyik ellenőrzés és melyik pont volt irányadó melyik kombináció alatt. Ha az ellenőrzés nem tudja megítélni a csoportot, megadja az okát (nincs acélminőség, nincs korrelációs tényező a minőséghez az EN 1993-1-8 4.1 táblázatában, nincs hegesztés ezen a szelvényen), számot pedig nem mutat.

A szár vagy a varratfém módosítása, illetve a modell szerkesztése törli a táblázatot, mert az a régi értékekre vonatkozott. Ilyenkor nyomja meg ismét a {{ui:Check welds}} gombot.

## Mit ellenőriz

- **ASCE 7 + AISC 360:** sarokvarrat-fém (a teher szöge a varrathoz számít, J2.4), alapanyag nyírási szakadása (J4.2), és teljes átolvadású tompavarratok (J2.5 táblázat).
- **EN 1990 + EN 1993:** sarokvarratok az EN 1993-1-8 4.5.3.3 egyszerűsített módszerével, tompavarratok a 4.7.1 pont szerint.
- Részletezési figyelmeztetések a minimális és maximális szárméretre és a minimális hosszra, a hozzájuk viszonyított értékkel együtt.

A hegesztési csoportot vonalmenti keresztmetszetként kezeli a rendszer, és rugalmas vektormódszerrel terheli: a hegesztés minden pontja felveszi a rúdelem normálerejét, mindkét nyíróerőt, a csavarónyomatékot és mindkét hajlítónyomatékot, vektorosan összeadva.

## Mit nem ellenőriz

Nincs elkészítve: a részleges átolvadású hegesztések, a ferde sarokvarratok, a lyuk- és hornyosvarratok, a szaggatott hegesztések, az azonnali forgásközéppont-módszer, az EN irányított módszer, a fáradás és az alapanyag blokknyírása. Az előírások néhány állandóját az előírásokból írták be, és még nem hasonlították össze nyomtatott példánnyal; a jelentés felsorolja, honnan származik az egyes szám. A {{ui:Report (PDF)}} a hegesztési táblázatokkal bővül, miután ellenőrzött. Lásd: [Acélrúdelemek ellenőrzése tervezési előírás szerint](topic:design-checks) és [Még nincs elkészítve](topic:not-built-yet).
