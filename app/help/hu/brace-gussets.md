---
title: Merevítő csomólemezek
summary: Merevítésvég csatlakoztatása pillérhez vagy gerendához csomólemezzel: szögacélok és laposacélok csavarozva, csövek bevágva és hegesztve.
keywords: csomólemez, csomólemez-lemez, merevítés, függőleges merevítés, szögacélos merevítés, laposacél, szalagacél, hss merevítés, késlemez, bevágott cső, csatlakozás
from: 22f6598d
---

A merevítő csomólemez egy üzemben a pillérre (vagy gerendára) hegesztett lemez, amelyre a merevítés támaszkodik, a merevítés síkjában. A DetailCraft a csomópontnál minden mást figyelembe véve visszavágja a merevítést, elhelyezi és méretezi a csomólemezt, és összeköti vele a merevítést: egy **szögacél** vagy egy **laposacél** egy csavarsorral, vagy egy **cső** (négyzet-, téglalap- vagy kör alakú HSS), amely rá van húzva bevágással és hegesztve.

## Hol működik

- A merevítés vége egy pillér vagy gerenda tengelyén fekszik (1 mm-en belül), és a merevítés nincs szinte párhuzamosan ezzel a tengellyel. Ahol van pillér, az a tartóelem; egyébként a gerenda.
- A csomólemez a merevítés síkjában és a tartóelem tengelyének síkjában fekszik. Egy **szögacél**nek az egyik szárának ebben a síkban kell lennie, egy **laposacél**nak a lapjának: forgassa el a merevítést (a {{ui:Elforgatás (°)}} értékét), amíg ez teljesül. Ha a szögacél szárai 45°-ban állnak a síkhoz képest, a DetailCraft ezt jelzi, és nem épít semmit.
- Az I-szelvényű és U-szelvényű merevítések nem kapcsolódnak.

## Csomólemezek hozzáadása

1. Jelöljön ki egy vagy több merevítést.
2. Válassza a {{ui:Csomólemez}} lehetőséget a {{ui:Kapcsolás}} csoport {{ui:Továbbiak}} menüjében.
3. A kijelölt merevítések minden olyan vége, amely pillérre vagy gerendára fut, és nincs még csomólemeze, kap egyet.

Jelöljön ki egy csomólemezt (kattintson a lemezre), hogy módosítsa a beállításait. Az {{ui:Alkalmazás hasonlókra (N)}} gomb az összes szabad merevítésvégre másolja, amelyen ugyanaz a merevítés- és tartószelvény van.

## Amit a DetailCraft kiszámít

- **Visszavágás.** A merevítés ezen a végén annyira rövidül, hogy sarkai szabaddá váljanak: a {{ui:Merevítő hézaga}} (25) távolsággal minden elemtől a csomópontban (mellette, vagy a végénél túl, ha az elem ott végződik), és a pillér alatti talplemeztől.
- **Csavarok (szögacél, laposacél).** A {{ui:Csavarok}} (3) egy sorban a merevítés mentén, az első a vágott végtől a {{ui:Csavar végtávolsága}} (40) távolságra, a {{ui:Csavarosztás}} (75) osztással. Szögacélnál a szárakon mennek át, a csomólemez síkjában, a {{ui:Csavarsortávolság}} távolságra a sarkától (0 = a szár közepe); laposacélnál a középvonalán (vagy attól a sortávolsággal eltolva). Csavarfogás = a szár vagy a laposacél + a csomólemez.
- **A csomólemez.** Téglalap: a tartóelem síkjától a legutolsó csavarig, plusz a végtávolság; a tartóelem mentén annyira, amennyire a csavaroknak kell. A szögacél szárának (vagy a laposacél lapjának) hátulján fekszik. Csőnél a cső közepén fut, a cső alatt {{ui:Cső ráfedése a csomólemezen}} (200) hosszan, a hegesztésekhez szükséges hellyel.
- **Csomópontok.** Pillér talpnál a csomólemezt a talplemezig vezetik le. Ahol gerenda keresztezi a csomópontot (merevítés egy gerenda-pillér sarokba), a csomólemez a gerenda alatt vagy fölött marad. Ha ez miatt a csavaroknak vagy a ráfedésnek nincs meg a végtávolságuk, a DetailCraft figyelmeztet.
- **Hegesztések.** A csomólemez a tartóelemhez, mindkét oldalon. A cső a csomólemezhez, négy vonal mentén a ráfedésnél.

## Jó tudni

- A csomólemez a tartóelem összeállításához tartozik (üzemben hegesztve). A merevítés a furataival együtt szállítódik, és a saját NC-fájljába kerül.
- A cső résést nem vágják be a modellbe; az [ütközésellenőrzés](topic:clash-check) kihagyja a merevítést és a csomólemezét.
- A csomólemezt nem hegesztik ahhoz a gerendához, amelyet érint. A gerendához és a pillérhez egyszerre hegesztett sarok-csomólemezek, a letört sarkok és az Uniform Force Method kapcsolat munkapont-elrendezése még nincs elkészítve.
- A DetailCraft nem méretezi a csomólemezt és a csavarokat (nincs szilárdsági ellenőrzés); a figyelmeztetések a távolságokra és az illeszkedésre vonatkoznak.
