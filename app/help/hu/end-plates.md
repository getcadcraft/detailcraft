---
title: Gerendák oszlopokhoz kapcsolása homloklemezekkel
summary: Adjon hozzá csavarozott homloklemezeket, ahol gerenda találkozik oszlop övlemezével vagy gerincével; állítsa be a lemezt, a csavarokat és a varratot, és másolja a kapcsolatot minden hasonló csomópontra.
keywords: homloklemez, endplate, nyomatéki kapcsolat, csavarozott kapcsolat, csomópont, csavarok, varrat, kihúzott homloklemez, síkba illesztett, hasonló, kapcsolat másolása, komponens
from: 21e028b2
---

A homloklemezes kapcsolat lemezt hegeszt a gerenda végéhez, és az oszlop övlemezéhez vagy gerincéhez csavarozza. A DetailCraft elhelyezi a lemezt, visszavágja a gerendát, illeszkedő lyukakat fúr a lemezbe és az oszlop övlemezébe, hozzáadja a csavarokat és a varratot, és ellenőrzi a széltávolságokat és a távolságokat.

:::warning
A DetailCraft nem tervez kapcsolatokat. A beállítások kiindulási értékek, amelyeket Ön módosíthat; semmi nem ellenőrzi a szilárdságot. A széltávolság- és távolságfigyelmeztetések az EN 1993-1-8 3.3 táblázatának minimumait használják, amelyek eltérhetnek az Ön által alkalmazott szabályoktól.
:::

## Mit tud összekötni

- Egy **szintes** gerenda (mindkét vége azonos magasságban), függőleges (elforgatás 0), I-szelvényű profillal.
- Egy **függőleges** I-szelvényű oszlop övlemezébe vagy gerincébe, arra merőlegesen.
- A gerenda végének az oszlop tengelyére kell esnie, az oszlop alja és teteje között.

A ferde vagy lejtős gerendák és a nem I-szelvények indoklással együtt elutasításra kerülnek: ezekhez használja a [nyírólemezeket](topic:shear-tabs). Gerincen a lemeznek és a gerenda övlemezeinek az oszlop övlemezei közé kell férniük; a DetailCraft figyelmeztet, ha nem.

:::tip
0 elforgatásnál az oszlop övlemezei a számozott rács irányába (x) néznek. Az A-ból B-be húzódó gerenda a gerinccel találkozik, és a gerincen kap homloklemezt.
:::

## Homloklemezek hozzáadása gerendához

1. Válassza a {{ui:Kijelölés}} gombot ({{key:V}}), és kattintson a gerendára.
2. Válassza a {{ui:Homloklemezek}} gombot a {{ui:Kapcsolás}} csoportban, vagy a {{ui:Tulajdonságok}} panel {{ui:Homloklemezek hozzáadása}} gombját.
3. A gerenda minden szabad vége, amely derékszögben csatlakozik oszlop övlemezéhez vagy gerincéhez, lemezt kap. Az állapotsor ezt írja: „2 homloklemez hozzáadva. Jelöljön ki egyet a lemez, a csavarok és a varrat módosításához; a Hasonló az ahhoz hasonló csomópontokra másolja."
4. Az első új homloklemez ki van jelölve, beállításai a {{ui:Tulajdonságok}} panelen vannak.

Ha nem történik semmi, olvassa el az állapotsort:

- „Ez a gerenda nem oszlop tengelyén végződik. A homloklemezek oda kerülnek, ahol egy gerendavég függőleges oszlopba ér."
- „Ez a gerenda szögben éri az oszlopot, vagy lejt: a homloklemezek derékszögű, szintes csomópontokhoz készülnek. Használja a Nyírólemezeket."
- „Mindkét végén már van kapcsolat."

## A lemez, a csavarok és a varrat módosítása

Kattintson a homloklemezre (vagy egyik csavarjára) a kapcsolat kijelöléséhez. A {{ui:Lemez, csavarok és varrat (mm)}} alatt:

| Beállítás | Alapérték | Mit csinál |
|---|---|---|
| Lemezvastagság | 20 | A lemez vastagsága; azt is megadja, mennyivel vágódik vissza a gerenda az övlemez mögött |
| Lemezszélesség | 180 | A csomóponton keresztül |
| Kinyúlás a gerenda fölött | 0 | A felső övlemez fölött; 0-nál nagyobb értéknél kihúzott homloklemez lesz |
| Kinyúlás a gerenda alatt | 0 | Az alsó övlemez alatt |
| Csavarátmérő | 20 | Névleges csavarméret |
| Lyuk átmérője | 22 | A szabad lyuk a lemezben és az oszlop övlemezében |
| Csavarminőség | A325 | Szöveg; az anyagjegyzékben jelenik meg |
| Csavarsorok | 4 | Két csavarból álló sorok, a lemez magasságának közepére igazítva |
| Sorosztás | 75 | A sorok közötti függőleges távolság |
| Csavartávolság | 100 | Egy sor két csavarja közötti vízszintes távolság |
| Csavarhossz-tartalék | 30 | A fogáshoz adódik az anyának, alátétnek és menetnek; lásd lent |
| Sarokvarrat mérete | 8 | Körbe a gerenda végén |
| Lemez anyaga | A36 | Szöveg |

Írjon be új értéket, és nyomja meg az {{key:Enter}} vagy a {{key:Tab}} billentyűt. A lemez, a lyukak, a csavarok és a gerenda vágási hossza azonnal frissül. Minden módosítás egy visszavonási lépés.

A beállítások alatt látszik, mit készít a kapcsolat:

- {{ui:Csavarok}}: például „8 × 20 × 70 A325 (fogás 36.2)".
- {{ui:Varrat}}: mérete, helye és hossza.
- {{ui:Lemez}}: mérete és alkatrészjele.

### Hogyan számolódnak a számok

- A gerendát az oszlop mélységének felével (gerincen: a gerinc vastagságának felével) és a lemez vastagságával vágja vissza, hogy a lemez a felületen üljön.
- A lemez magassága a gerenda magassága plusz a két kinyúlás.
- Csavarhossz = fogás (lemezvastagság + oszlop övlemezének vagy gerincének vastagsága) + tartalék, felfelé kerekítve a következő 5 mm-re.
- A megjelenített varrathossz a gerendaszelvény kerülete.

### Figyelmeztetések

A kapcsolat még elkészül, de ezek a kapcsolat alatt és a {{ui:Problémák}} lapon jelennek meg:

- Csavarsorok vagy csavarok a lemez szélétől közelebb, mint 1.2 × a lyuk átmérője.
- Sorosztás 2.2 × a lyuk átmérője alatt, vagy csavartávolság 2.4 × a lyuk átmérője alatt.
- Lyukak, amelyek az oszlop gerincébe vagy annak kerekítésébe futnak, vagy kilógnak az övlemezről.
- Lemez, amely szélesebb az oszlop övlemezénél, vagy (gerincen) szélesebb az övlemezek közötti résnél; gerenda övlemezei, amelyek nem férnek el közöttük.
- Csavarsor túl közel a gerenda övlemezéhez, vagy csavartávolság, amely túl szűk a gerenda gerincéhez és annak varratához.

## Ugyanez minden hasonló csomópontra

1. Jelölje ki a beállított kapcsolatot.
2. Válassza az {{ui:Alkalmazás hasonlóra (n)}} gombot a {{ui:Tulajdonságok}} panelen, vagy a {{ui:Hasonló}} gombot a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjében. A zárójeles szám azt mutatja, hány csomópont kapja meg.
3. Minden olyan csomópont, amelynek azonos a gerenda- és az oszlopprofilja, a gerenda ugyanolyan felületbe csatlakozik, és még nincs kapcsolata, az azonos beállításokkal másolatot kap. Az állapotsor megmondja, hány.

A másolatok függetlenek: egy későbbi módosítás az egyiket nem változtatja meg a többiben. Azok a csomópontok, amelyeknek már van kapcsolata, érintetlenek maradnak; ha ezeket le akarja cserélni, előbb törölje őket.

## Mozgatás és törlés

A kapcsolatok a beállításaikból minden modellmódosításkor újra elkészülnek, így a gerenda vagy az oszlop mozgatása, átméretezése a homloklemezeket is viszi. Ha egy módosítás miatt a csomópont már nem illeszkedik, a kapcsolat a modellben marad, a {{ui:Problémák}} lap pedig megmondja az okát, például: „A gerendavég már nincs az oszlop tengelyén."

Kapcsolat törléséhez jelölje ki, és nyomja meg a {{key:Delete}} billentyűt. A gerenda vagy az oszlop törlésekor a kapcsolataik is törlődnek.

Következő: [Talplemezek és horgonycsavarok hozzáadása](topic:base-plates).
