---
title: Acél lépcsőgenerátor
summary: Teljes acél lépcső a szintek közötti magasságból, a futásból és a szélességből: a felmenő és a lépcsőfok-mélység a választott szabálykészlet szerint, pihenők, korlátok és korlátoszlopok, gyártmányrajzok és súlyokkal ellátott vágólista.
keywords: acél lépcső, lépcsőgenerátor, lépcsőhúr, lépcsőfok, gyémántmintás lemez, rács, hajlított lemeztálca, pihenő, korlát, korlátoszlop, felmenő, lépcsőfok-mélység, osha, ibc, approved document k, vágólista, súlyok, gyártmányrajz
from: a4f0a985
---

A lépcsőgenerátor egy teljes acél lépcsőt készít néhány számból: a lépcsőhúrokat, a lépcsőfokokat, pihenőket, ha a lépcsőkar túl magas, korlátokat oszlopokkal és korlátoszlopokkal, a lépcsőhúrok rögzítőfuratait, súlyos vágólistát és a gyártmányrajzokat. A {{ui:Lépcső}} eszközből indul, mint az egyszerű lépcső (lásd: Lépcsők), egy további kapcsolóval.

## Acél lépcső elhelyezése

1. Válassza a {{ui:Lépcső}} lehetőséget az {{ui:Elhelyezés}} csoportban, vagy nyomja meg az {{key:S}} billentyűt.
2. A jobb oldalon jelölje be az {{ui:Acél lépcsőgenerátor használata}} lehetőséget.
3. Válassza ki a **szabálykészletet**, amely arra vonatkozik, hol épül a lépcső, az **emelkedést** (szinttől szintig; 0 = a következő szintig), a **rendelkezésre álló futást** (0 = hagyja, hogy a szabály döntsön), a **tiszta szélességet** és a **lépcsőfok-típust**: gyémántmintás lemez, rács vagy hajlított lemeztálca.
4. Állítsa be a lépcsőhúr-szelvényt, a pihenőket (a szabály szerint vagy egy számmal), a korlátokat (mindkét oldalon, egy oldalon, vagy sehol), a korlát magasságát és a korlátoszlop-távolságot.
5. Kattintson egy rácsmetszetre: ez az első felmenő alja.

Jelölje ki a lépcsőt (kattintson egy lépcsőhúrra, lépcsőfokra vagy korlátra), hogy bármilyen beállítást módosítson; a tulajdonságok megmutatják a felmenőket, a lépcsőfok-mélységet, a lejtésszöget, a lépcsőkarokat és pihenőket, a benne lévő acélt, a vágólistát és a szabálykészlet forrásait.

## A szabálykészletek

A szabálykészlet korlátozza a lépcső alakját: az emelkedést és a lépcsőfok-mélységet, a 2 × felmenő + lépcsőfok-mélységet, a lejtést, a pihenőt, a korlát magasságát és a legnagyobb nyílást. A DetailCraft az alábbiakat kínálja; a terület beállítás, nem találgatás. A tulajdonságok között nyissa meg a **Honnan származnak ennek a szabálykészletnek a számai** részt: minden szám megnevezi a forrását, és azt, hogy mennyire lett ellenőrizve.

- **International Building Code 2021**: felmenő 4–7 in., lépcsőfok legalább 11 in., korlát 34–38 in. A pihenők közötti 12 ft-os határ *nem olvasott* jelölést kap, a korlátszámok pedig a szabályzatot idéző segédanyagokból olvasottak: ezeket erősítse meg, mielőtt rájuk hagyatkozna.
- **OSHA 29 CFR 1910.25 és 1910.29** (ipari szabványos lépcsők): 30° és 50° között, felmenő legfeljebb 9,5 in., lépcsőfok legalább 9,5 in., legalább 22 in. széles, a pihenők a lépcső szélességével egyezők és 30 in. mélyek, a kézikorlátként használt felső korlát 36–38 in. Ezeket magában a szabályzatban olvasták el.
- **Approved Document K 2013, Anglia** (általános hozzáférési és segédlépcsők): az emelkedés- és lépcsőfok-mélység-tartományok, valamint a 2 × felmenő + lépcsőfok-mélység 550–700 mm, egy kormányzat által megrendelt jelentésből olvasva, amely táblázatba foglalja őket. A dokumentum nem ad korlátmagasságot a DetailCraftnak, ezért a beállított magasságot használja, és a Problémák lista ezt jelzi.

Ha egy szabálykészlet nincs felsorolva, nem találgatunk: a lépcső ekkor a sima, 600–650 mm-es kényelmi szabályt követi, és jelzi, hogy nincs hozzá szabálya.

## Amit kiszámol

- **Felmenők és lépcsőfok-mélység.** A legkevesebb felmenő, amelynél a 2 × felmenő + lépcsőfok-mélység a szabály tartományának közepén van, anélkül, hogy a lépcsőfok-mélység a szabály minimuma alá esne. Ha futás van megadva, a lépcsőfok-mélység a futás osztva a lépcsőfokok számával; a szabályon kívül eső minden érték jelzésre kerül.
- **Karok és pihenők.** A szabálynál magasabb lépcsőkart a lépcső szélességével egyező, és a szabály minimumánál nem keskenyebb pihenő osztja; pihenőt is kérhet. A pihenő két oldalsó gerendából és két keresztszögvasból álló keret a fedőlemez alatt, két oszlopon.
- **Lépcsőfokok.** A gyémántmintás lemez hegesztett lemez (alapból 6 mm; a mintát nem számítják bele a súlyba). A hajlított lemeztálca az orrélnél visszahajlik, és a lépcsőhúr gerincén csavarozva van: két, a csavarnál 2 mm-rel nagyobb furat a mélység 0,3 és 0,7 részénél. A rács egyenértékű súlyú lemezként van ábrázolva (tartórúd mélysége × vastagság ÷ osztás); a keresztrudakat és a szalagokat nem számítják, és a vágólista ezt jelzi.
- **Korlátok.** Csőből készült felső korlát, oszlopokon, minden karon és minden pihenőn; a korlátoszlop-távolság olyan, hogy a szabály nyílásánál nagyobb gömb nem fér át rajta (alapértelmezetten legfeljebb 100 mm).

## Rajzok, vágólista, export

- A kar egy összeállítás; a korlátok egy másik (mindkét oldal ugyanaz az összeállítás, kétszer készítve). Mindkettőnek van összeállítási rajza, és a lépcsőhúr rajzán a furatok látszanak.
- A **lépcsőlap** (ST-…) a lépcsőkar lépcsőhúrját egyenesen mutatja, a furat-állomásokat az alsó végétől számítva írva ki, valamint a lépcsőfok-részletet: metszet, orrél, visszahajlás és a végperem a furataival.
- A {{ui:Vágólista és súlyok}} a tulajdonságokban minden szelvényt és hosszt felsorol, darabszámmal és kilogrammal; a {{ui:Vágólista letöltése (CSV)}} elmenti.
- Minden az anyagjegyzékbe, az NC-fájlokba és az IFC-be kerül szokásos alkatrészként (IfcMember, IfcColumn, IfcPlate).

## Jó tudni

- Ez kiindulási pont, nem tervezés. Semmi nincs ellenőrizve szilárdságra vagy lehajlásra; a szabálykészlet csak az alakot korlátozza.
- A lépcsőhúrok végeit a padlókhoz derékszögben vágják, és nincs részletezve; a pihenőoszlopok az alatta lévő szintig állnak, és nincs talplemezük.
- A lépcső egyetlen elemként való elhelyezése a BimCraftban még nincs elkészítve.
