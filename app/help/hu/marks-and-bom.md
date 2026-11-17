---
title: Jelölések és az anyagjegyzék ellenőrzése
summary: Olvassa le a DetailCraft minden darabjához adott alkatrész- és összeállítási jelöléseket, ellenőrizze az anyagjegyzéket, és töltse le CSV-ként.
keywords: jelölés, számozás, alkatrészjel, összeállítási jel, darabjel, anyagjegyzék, anyaglista, súlyok, csavarlista, csv, számozás
from: caa2ee80
---

A DetailCraft magától jelöli a modellt. Nincs számozási parancs, és nincs mit futtatni: minden változtatás után megállapítja, mely alkatrészek alkotnak azonos acéldarabot, és egy jelet ad nekik.

## Hol látszanak a jelölések

- Az {{ui:Alkatrészjelek}} lista a {{ui:Modell}} panelen: minden jel a szelvényével, hosszával és darabszámával. Kattintson egy jelre, hogy kijelölje az első ilyen jelű alkatrészt.
- Egy kijelölt elem {{ui:Tulajdonságok}} panelje (és a bal panel **Alkatrészjelek** listája): {{ui:Alkatrészjel}} és {{ui:Összeállítás}}. A panel fejléce is tartalmazza a jelet, például „Gerenda b1”.
- Az {{ui:Anyagjegyzék}} lap, a CSV, az NC-fájlnevek, a gyártmányrajzok és az IFC-export (elemenként címkeként).

## Hogyan kapnak jelölést az alkatrészek

- **Alkatrészjelek:** c a pilléreknek, b a gerendáknak, br a merevítéseknek, st a lépcsőhúroknak, p a lemezeknek (beleértve a véglemezeket és a talplemezeket). Utána egy szám: c1, c2, b1, p1 … Ha az alkatrészek több ütemben vannak, az ütem száma elöl áll, például 2-b1.
- **Összeállítási jelek:** C, B, BR vagy P. Az összeállítás egy fő elem és a hozzá hegesztett lemezek, például egy gerenda a két véglemezével, vagy egy pillér a talplemezével.
- Két alkatrész akkor kap azonos jelet, ha azonos a szelvényük, az anyaguk és a vágási hosszuk, valamint azonosak a furataik és kivágásaik, mindez 1 mm-en belül, még ha az egyik a másikhoz képest vége-vége felé vagy fejjel lefelé van fordítva is.
- A számozás először a pilléreket veszi sorra, majd a gerendákat, merevítéseket és lemezeket; mindegyiken belül szelvénynév szerint, a leghosszabbal kezdve.

A teljes szabály, beleértve azt is, mely fordulatok számítanak csatornáknál és szögacéloknál: [Jelölési szabályok](topic:mark-rules).

:::warning
A jelöléseket minden változtatás után újra számítjuk, ezért átszámozódhatnak. Egy alkatrész hozzáadása, szelvény módosítása vagy furat hozzáadása a b3-at b4-re változtathatja. A jelöléseket csak akkor tekintse véglegesnek, ha a modell kész, és az anyagjegyzéket, az NC-fájlokat és a gyártmányrajzokat ugyanabból a mentett modellből készítse.
:::

## Az anyagjegyzék olvasása

Nyissa meg az {{ui:Anyagjegyzék}} lapot alul. Három táblázata van.

**Alkatrészek**, a teljes acélsúly a fejlécben:

| Oszlop | Jelentés |
|---|---|
| Alkatrészjel | Kattintson rá, hogy kijelölje az első ilyen jelű alkatrészt |
| Típus | gerenda, pillér, merevítés, lépcsőhúr vagy lemez |
| Szelvény | Például W16x26 vagy PL20x180 |
| Anyag | A beállított minőség |
| Hossz (mm) | Vágási hossz, a csatlakozások után |
| Darab | Hány darab |
| Egységsúly (kg) | Szelvénytömeg méterenként × hossz |
| Teljes súly (kg) | Egységsúly × darab |

Az utolsó sor a darabszám és a súly összegét adja.

**Összeállítások:** minden összeállítási jel, a fő alkatrésze, az összes alkatrésze (például „b1 + p1 + p1”), darabszám, egységsúly és teljes súly.

**Csavarok és horgonyrudak:** fajta, átmérő, hossz és minőség szerint csoportosítva, darabszámmal.

:::note
A súlyok bruttó értékek: a furatokat és kivágásokat nem vonják le. A csavarok, anyák, alátétek és hegesztések nincsenek benne az acélsúlyban.
:::

## Letöltés

Válassza a {{ui:CSV letöltése}} gombot a lapon, vagy az {{ui:Anyagjegyzék}} gombot a {{ui:Kimenet}} csoportban. A `<name> BOM.csv` fájl egymás után tartalmazza a három táblázatot, mindegyik a címe alatt, üres sorral elválasztva. Bármely táblázatkezelőben megnyitható.

## Küldés előtt ellenőrizze

1. Nyissa meg a {{ui:Problémák}} lapot, és szüntessen meg minden sort. Az a csatlakozás, amelyet nem lehetett felépíteni, nem ad hozzá lemezt, furatokat és csavarokat, így az anyagjegyzék hiányos lesz.
2. Nézze meg a váratlan jeleket. Két gerenda, amelyet azonosnak gondol, de eltérő jelük van, általában egy furatban, kivágásban vagy vágási hosszban különbözik; jelölje ki mindkettőt, és hasonlítsa össze őket.
3. Mentse a modellt, majd minden exportot a mentett állapotból készítsen.
