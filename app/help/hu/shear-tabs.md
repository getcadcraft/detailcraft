---
title: Nyírólemezek
summary: Csavarozza a gerenda gerincét egy oszlop övlemezéhez vagy gerincéhez gyárilag hegesztett lemezhez, akkor is, ha a gerenda alaprajzban szögben vagy lejtősen csatlakozik az oszlophoz.
keywords: nyírólemez, egylemezes, bordalemez, egyszerű csatlakozás, gerinccsatlakozás, ferde, ferdeség, lejtős, megdöntött, szögű gerenda, csavarozott, csatlakoztatás
from: 18afc8ab
---

A nyírólemez (egylemezes, bordalemez) egy lemez, amelyet gyárban hegesztenek az oszlophoz; a helyszínen a gerenda gerincét egy függőleges csavarsorral csavarozzák hozzá. A DetailCraft elhelyezi a lemezt, a gerendát az oszloptól megfelelő távolságra vágja vissza, furatokat fúr a lemezbe és a gerenda gerincébe, hozzáadja a csavarokat és a hegesztést, és figyelmeztet a szélvonal-távolságokra és az illeszkedésre.

## Hol működik

- Gerenda (I-szelvény vagy csatorna), amelynek vége egy **függőleges** I-szelvényű oszlop vonalán fekszik, és az oszlop **övlemezéhez** vagy **gerincéhez** csatlakozik.
- **Négyzetes, alaprajzban ferde vagy lejtős**: a lemez követi a gerenda gerincét, a gerendát pedig úgy vágják vissza, hogy legközelebbi sarka megtartsa a hézagot az oszloptól. A 60°-nál meredekebben emelkedő vagy eső gerendát a rendszer elutasítja.

## Nyírólemezek hozzáadása

1. Jelölje ki a gerendát.
2. A {{ui:Kapcsolás}} csoportban nyissa meg a {{ui:Továbbiak}} menüt, és válassza a {{ui:Nyírólemezek}} lehetőséget (vagy a {{ui:Tulajdonságok}} panelen a {{ui:Nyírólemezek hozzáadása}} lehetőséget).
3. A gerenda minden olyan szabad vége, amely oszlopot ér, lemezt kap. Minden gerendavég egy kapcsolatot vesz fel: vagy nyírólemezt, vagy véglemezt.

Jelöljön ki egy lemezt (kattintson rá vagy egy csavarjára), hogy lássa és módosítsa a beállításait. A {{ui:Hasonlókra alkalmazás}} gomb nyírólemezként másolja azt minden hasonló, még kapcsolat nélküli csomópontra.

## Beállítások (mm)

| Beállítás | Kezdőérték | Jelentés |
|---|---|---|
| Lemezvastagság | 10 | A lemez vastagsága |
| Lemezszélesség | 115 | Mennyire nyúlik ki a lemez az oszlop felületétől, a gerenda mentén |
| Csavar átmérője, Furat átmérője, Csavar minősége | 20, 22, A325 | Mint a véglemezeknél |
| Csavarsorok, Sortáv | 3, 75 | A függőleges sor csavarjai |
| Szélvonal-távolság (felső és alsó csavar) | 38 | A felső és alsó csavartól a lemez végéig; a lemez mélysége: sorok × sortáv + 2 × ez |
| Csavarcsoport emelése | 0 | 0 esetén a csavarok a gerenda magasságának közepére kerülnek |
| Távolság az oszloptól | 13 | A tiszta hézag az oszlop és a gerenda legközelebbi sarka között |
| Csavarvonal az oszlop felületétől | 65 | A gerenda mentén, az oszlop felületétől a csavarokig |
| Csavarhossz-tartalék | 30 | A befogáshoz (lemez + gerendagerinc) adódik, 5 mm-re felfelé kerekítve |
| Sarokhegesztés mérete | 6 | A lemez mindkét oldalán, az oszlopig |

## Jó tudni

- A lemez az oszlop összeállításának része (gyárban hegesztve); a gerenda összeállításának csak a furatai vannak meg.
- A ferde vagy lejtős gerenda messzebbre van vágva, mint a négyzetes, hogy legközelebbi sarka megtartsa a hézagot. A DetailCraft a gerendákat négyzetesen vágja: a gyártó a véget a helyzethez igazítja. A lemez oszlop felőli éle is négyzetesen van rajzolva.
- A DetailCraft nem ellenőriz szilárdságot. A figyelmeztetések az EN 1993-1-8 3.3 táblázatának minimumait használják a szélvonal-távolságokra és az osztásra, és jelzik, ha a lemez mélyebb, mint a gerinc a kerekítései között, vagy ha a csavarok túl közel vannak a gerenda levágott végéhez.
- Az [ütközésellenőrzés](topic:clash-check) kihagyja a lemezt és az általa összekötött elemeket: ezeknek találkozniuk kell.
