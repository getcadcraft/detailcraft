---
title: Jelölési szabályok
summary: Pontosan mikor osztozik két alkatrész vagy két összeállítás egy jelölésen, hogyan számozódnak a jelölések, és hogyan működnek az alap- és a vasalásjelölések.
keywords: jelölések, számozás, alkatrészjel, összeállítási jel, darabjel, előtag, tűrés, azonos alkatrészek, vasalásjelek, alapjelölések
from: ce02c98e
---

A DetailCraft minden változtatás után újraszámolja az összes jelölést. Semmi sincs eltárolva, így a jelölések mindig a modell jelenlegi állapotát írják le. Azt, hogyan használja őket, a [Jelölések és az anyagjegyzék ellenőrzése](topic:marks-and-bom) részben találja.

## Alkatrészjelek

Két alkatrész akkor osztozik egy alkatrészjelen, ha mindezek egyeznek:

1. Az alkatrész típusa (gerenda, oszlop, merevítő vagy lemez).
2. A szelvény neve (a kis- és nagybetűk nem számítanak).
3. Az anyag (a kis- és nagybetűk nem számítanak).
4. A vágási hossz, 1 mm-en belül.
5. Minden furat: oldal, helyzet a hosszában és keresztben, 1 mm-en belül, átmérő 0,1 mm-en belül.
6. Minden kivágás: vég, oldal, hossz és mélység, 1 mm-en belül.

Az elem {{ui:Név}} tulajdonsága nem számít. Nem számít a modellbeli helye, a forgatása, sem az, hogy melyik irányban rajzolták, amíg maga az alkatrész ugyanaz.

### Megfordított alkatrészek

Az alkatrészt minden olyan módon összehasonlítjuk, ahogy megfordítható, és amely a keresztmetszetét önmagára képezi le. Ha ezek közül bármelyik másik alkatrészhez illeszti, egy jelölést kapnak.

| Alak | Figyelembe vett fordítások |
|---|---|
| I-szelvények, téglalap keresztmetszetű HSS, lemezek | Végükkel cserélve (függőleges tengely körül), végükkel cserélve (vízszintes tengely körül), és a saját hosszuk körül fejjel lefelé fordítva |
| Csatornaszelvények | Csak végükkel cserélve, vízszintes tengely körül, így a gerinc ugyanazon az oldalon marad |
| Szögacélok, kör keresztmetszetű HSS | Nincs: az elhelyezett állapotában hasonlítjuk össze |

Így a bal vége közelében furattal rendelkező gerenda megegyezik azzal a gerendával, amelynek ugyanilyen furata a jobb vége közelében van, és az egyik övben furatokkal rendelkező oszlop megegyezik azzal az oszloppal, amelynek ugyanezek a furatai a másik övben vannak.

### Számozás

| Típus | Alkatrész előtag | Összeállítás előtag |
|---|---|---|
| Oszlop | c | C |
| Gerenda | b | B |
| Merevítő | br | BR |
| Lemez (elhelyezett, véglemez vagy talplemez) | p | P |

Minden előtagon belül 1-től számozzuk a jelöléseket. A sorrend: oszlopok, majd gerendák, merevítők és lemezek; típuson belül a szelvény neve szerinti természetes sorrendben (W8x10 a W12x26 előtt); majd a hosszabb alkatrészek előre.

Mivel a számozás ezt a sorrendet követi, egy alkatrész hozzáadása vagy módosítása mások számát is eltolhatja.

## Összeállítási jelölések

- Minden alkatrész, amely nincs más alkatrészhez hegesztve, saját összeállításának főalkatrésze.
- A véglemezeket a gerendájukhoz, a talplemezeket az oszlopukhoz hegesztik, így az adott tag összeállításához tartoznak.
- Két összeállítás akkor osztozik egy jelölésen, ha főalkatrészeik alkatrészjelet osztanak, és a hozzájuk kapcsolt alkatrészek ugyanazokkal a jelekkel rendelkeznek ugyanazokon a helyeken (1 mm-en belül), a főalkatrészre megengedett fordításokat is figyelembe véve.
- Az összeállítási előtag a főalkatrészt követi: két véglemezzel rendelkező gerenda B összeállítás.

A {{ui:Lemez}} eszközzel elhelyezett lemezek semmihez sincsenek hegesztve, így mindegyik saját P összeállítás.

## Alapjelölések

Azonos hosszúságú, szélességű, mélységű, betonszöveggel, alsó hálóval és indítóvasalással rendelkező alapok egy jelölést kapnak: F1, F2 … az elhelyezés sorrendjében. A helyzet és a forgatás nem számít.

## Vasalásjelölések

Az azonos méretű, alakú és A, B, C méretű (milliméterre kerekített) vasak minden alapon egy jelölést kapnak. A jelölés a vas száma, majd F, és vasméretenként egy számláló: 5F1, 5F2, 6F1. Egy négyzet alap hosszirányú és rövidirányú vasa azonos vas, ezért egy jelölést kap; a kimutatás {{ui:Felhasználás}} oszlopa mindkét felhasználást felsorolja.
