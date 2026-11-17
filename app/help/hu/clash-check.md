---
title: Ütközések ellenőrzése
summary: Olyan tagok, lemezek és alapok keresése, amelyek egymásba nyúlnak, kihagyva azokat a részeket, amelyeket egy csomópont szándékosan összeköt, és ugrás minden ütközéshez.
keywords: ütközés, ütközésellenőrzés, összeütközés, interferencia, átfedés, metszés, kemény ütközés, koordináció, modellellenőrzés
from: 04d72d3b
---

Nyissa meg a nézet alatti {{ui:Ütközések}} lapot, és válassza az {{ui:Ellenőrzés most}} gombot. A DetailCraft a látható fázisokban minden alkatrészpárt megvizsgál: acél az acélba, és acél az alapba. A lap minden ütközést felsorol, a legmélyebbtől kezdve, a következőkkel:

- a két alkatrész, a jelölésével (vagy az alap jelölésével) és a szelvényével;
- **Átfedés (mm)**: milyen mélyen van az egyik alkatrész egy pontja a másikban, a legközelebbi felületig;
- **Közel**: a rácspont és a szint, ahol van, vagy a koordinátái;
- {{ui:Megjelenítés}}: kijelöli mindkét alkatrészt, és a hely a nézet közepére kerül.

A lap címe mutatja, hány ütközést talált az utolsó ellenőrzés. Az ellenőrzés nem fut magától: a modell módosítása után a lista ezt jelzi, és az {{ui:Ellenőrzés most}} gomb újra futtatja.

## Mi nem ütközés

- Csak érintkező alkatrészek: lemez egy övvel szemben, talplemez az alapján, két tag végig egymáshoz. A **Tűrés (mm)** beállítja, mennyire nyúlhatnak egymásba az alkatrészek, mielőtt ütközésnek számítana (kezdetben 1 mm; legfeljebb 50).
- Alkatrészek, amelyeket egy csomópont összeköt: végi lemez a gerendájával és a hozzá csavarozott oszlopövvel, a csomópont gerendája és oszlopa, talplemez az oszlopával, toldás lemezei mindkét darabbal, merevítő a csomólemezével (a cső hasítása nincs kivágva a modellben). A csomópont szándéka, hogy ezek találkozzanak.
- A talplemez nyírókonzolja az alatta lévő alapban (habarcszsebben ül).
- Csavarok és horgonyrudak (átmennek a lyukakon), valamint vasalás.
- Rejtett fázisokban lévő alkatrészek. Lásd [Fázisok](topic:phases).

Egy merevítő vagy gerenda, amely kapcsolat nélkül fut egy oszlopba, **ütközés**: a csomópontnak még csatlakozásra van szüksége. A minta keret merevítőjén ez látszik: nincs csomólemeze. Jelölje ki, és válassza a {{ui:Csomólemez}} gombot ([Merevítő csomólemezek](topic:brace-gussets)), és az ütközései megszűnnek.

## Jó tudni

- Az átfedés az anyagba mért mélységet méri, így egy oszlop vékony gerincébe vagy övébe futó tag csak néhány milliméteres átfedést mutat, még ha messzire is fut bele.
- Az alkatrészeket a vágott állapotuk szerint vizsgálja: a kivágások, valamint a gerenda visszavágása a végi lemezeinél figyelembe vannak véve. A lyukak nincsenek.
