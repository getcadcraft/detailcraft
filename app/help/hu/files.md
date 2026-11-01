---
title: Fájlok megnyitása, mentése és exportálása
summary: A DetailCraft modellfájlja, minden export, amelyet ír, hová kerülnek a fájlok, és mi különbözik böngészőnként és kapcsolat szerint.
keywords: megnyitás, mentés, exportálás, letöltés, fájl, json, ifc, nc1, dstv, csv, pdf, zip, formátumok, importálás
from: bd715ea3
---

A DetailCraftnak egyetlen saját fájlja van, a modell, és öt exportja. Minden mentés és minden export letöltés. Semmi nem töltődik fel, és semmi nem marad kiszolgálón.

## A modellfájl

A DetailCraft-modell `<név>.detailcraft.json` néven mentődik, ahol a `<név>` a modell neve a {{ui:Modell}} panelen. Tartalmazza a rácsokat, a szinteket, a rúdelemeket (furataikkal és kivágásaikkal), a kapcsolatokat és beállításaikat, az alapokat és az egyéni szelvényeket.

Az alkatrészek, jelek, csavarok, hegesztések és vasak nem tárolódnak: a DetailCraft minden megnyitáskor újra kiszámítja őket a modellből. Ezért kicsi a modellfájl.

### Mentés

1. Írjon be egy nevet a {{ui:Modell}} panel tetején lévő {{ui:Név}} mezőbe.
2. Válassza a {{ui:Fájl}} csoportban a {{ui:Mentés}} lehetőséget, vagy nyomja meg a {{key:Mod+S}} billentyűkombinációt.
3. A böngésző letölti a `<név>.detailcraft.json` fájlt. Az állapotsor ezt írja: „Mentve … (letöltve)”, a böngészőlap címének elején lévő pont pedig eltűnik.

Minden mentés új letöltés. A böngésző nem írja felül a megnyitott fájlt; a beállításaitól függően számot fűz a névhez, például `Frame (1).detailcraft.json`, vagy rákérdez, hová mentsen. A saját verzióit a letöltések átnevezésével őrizheti meg.

:::chromium
A Chrome és az Edge a Letöltések mappába ment, hacsak a böngésző letöltési beállításaiban nincs bekapcsolva a **Letöltés előtt kérdezzen rá minden fájl mentési helyére**. Kapcsolja be, ha minden alkalommal mappát és fájlnevet szeretne választani.
:::

:::firefox
A Firefox a Letöltések mappába ment, vagy minden alkalommal rákérdez, ha a beállításaiban be van kapcsolva a **Mindig rákérdezés a fájlok mentési helyére**.
:::

:::safari
A Safari a Letöltések mappába ment. A mappa módosításához nyissa meg a **Safari, Beállítások, Általános, Fájlok letöltési helye** részt.
:::

### Megnyitás

1. Válassza a {{ui:Fájl}} csoportban a {{ui:Megnyitás}} lehetőséget, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt.
2. Válasszon ki egy `.detailcraft.json` fájlt.

Vagy húzza a fájlt a(z) {{pick:mac=Finder|windows=Fájlkezelő|linux=fájlkezelő}} ablakból, és ejtse a nézetre. Húzás közben a nézet ezt mondja: „Ejtse ide a megnyitáshoz a DetailCraft-modellt”.

Ha a megnyitott modellben vannak mentetlen módosítások, a DetailCraft előbb rákérdez: {{ui:Mégse}}, {{ui:Módosítások elvetése}} vagy {{ui:Mentés előbb}}.

A DetailCraft a fájl minden mezőjét ellenőrzi, mielőtt használja. Amit nem tud használni, azt kihagyja, és az állapotsor megmondja, mit, például „2 rúdelem érvénytelen volt, és kimaradt.” Az újabb DetailCrafttal mentett modellt üzenettel elutasítja, ahelyett hogy félig helyesen nyitná meg.

### Mit nyit meg

A saját modellfájljait (`.json`, legfeljebb 50 MB) és az IFC-fájlokat (`.ifc`, IFC2X3 vagy IFC4, legfeljebb 200 MB). Az IFC-fájl, akár megnyitja, akár az {{ui:IFC importálása}} paranccsal hozza be, gerendáiból, oszlopaiból, rúdelemeiből, lemezeiből, rácsaiból és szintjeiből új modell lesz, a beléjük vágott furatokkal és kivágásokkal, a csavarjai pedig különálló csavarok; egy jelentés felsorolja, mi maradt ki. Lásd: [IFC-exportálás](topic:ifc-export#import). DWG-t, DXF-et vagy más részletezőprogram modelljét még nem nyitja meg; a próbálkozás ezt mutatja: „A DetailCraft a saját modelljeit (.detailcraft.json) és az IFC-fájlokat (.ifc) nyitja meg.”

## Elveszett munka, legutóbbi fájlok, az asztali alkalmazás

- Amíg a modellben vannak nem mentett módosítások, a DetailCraft másolatot tart ebben a böngészőben. Ha a lap vagy a böngésző mentés előtt leáll, a DetailCraft következő megnyitásakor rákérdez: **Helyreállítja a munkáját?**: állítsa helyre a másolatot, vagy engedje el. Lásd: [Munka helyreállítása](common:recover).
- A nemrég megnyitott modellek a kezdőképernyőn vannak felsorolva, ha a böngésző engedi, hogy a DetailCraft újra megnyissa őket; kattintson egyre az újranyitáshoz.
- Az asztali alkalmazásban a {{ui:Mentés}} visszaírja a modellt a megnyitott fájlba (a böngészőben másolatot tölt le), és a DetailCraft-modell vagy az IFC-fájl duplán kattintása a DetailCraftban nyitja meg.

## Exportok

Minden export a modell nevét használja. A {{ui:Kimenet}} csoportban választhatja őket.

| Gomb | Fájl | Mi van benne |
|---|---|---|
| {{ui:IFC}} | `<név>.ifc` | IFC4: szintek, rácsok, minden acél alkatrész szelvénykihúzásként a furataival és kivágásaival, összeállítások, csavarok és horgonyszárak, alapok és minden vas. Lásd: [IFC exportálása](topic:ifc-export). |
| {{ui:NC-fájlok}} | `<név> NC.zip` | Alkatrészjelenként egy DSTV `.nc1` fájl. Lásd: [NC-fájlok küldése a műhelybe](topic:nc-export). |
| {{ui:Anyagjegyzék}} | `<név> BOM.csv` | Három táblázat egy fájlban: alkatrészek, összeállítások, valamint csavarok és horgonyszárak. Lásd: [Jelek és az anyagjegyzék](topic:marks-and-bom). |
| {{ui:Hajlítás}} | `<név> bending schedule.csv` | Az alapok minden vasjele. Lásd: [Alapok és vasalás](topic:footings-and-rebar). |
| {{ui:Gyártmányrajz}} | `<név> <jel>.pdf` | Egy lap (A3, hacsak más méretet nem választott) a kijelölt alkatrészhez (I-szelvények és lemezek). Lásd: [Gyártmányrajz készítése](topic:shop-drawings). |
| {{ui:Rajzok}} | `<név> drawings.pdf`, `<név> <lap>.pdf`; `<név> <lap>.dwg` vagy `.dxf`, több a `<név> drawings DWG.zip` (vagy `DXF.zip`) fájlban | Az alaprajzok, homlokzatok és összeállítási rajzok a választott lapméreten; a DWG és a DXF teljes méretben, 1 egység = 1 mm a papíron. Lásd: [Általános elrendezési és összeállítási rajzok](topic:drawings). |

### A CSV-fájlokról

- Bájtsorrend-jellel kezdődnek, hogy a táblázatkezelők helyesen olvassák az ékezetes karaktereket.
- Az a cella, amely `=`, `+`, `-` vagy `@` jellel kezdődik (és nem egyszerű szám), egy bevezető aposztrófot kap, így a táblázatkezelő soha nem futtatja képletként.
- A hosszak milliméterben, a tömegek kilogrammban vannak.

### A PDF-ről

A PDF szövege a szabványos Helvetica betűtípust használja. Az olyan karakterek, amelyek nincsenek meg benne (a nyugat-európai készleten kívül), „?” jelként nyomtatódnak, és az állapotsor megmondja, hányat.

## Mértékegységek

A DetailCraft mindenhol milliméterben dolgozik: rácsok, szintek, koordináták, szelvények, furatok és minden export. A szelvénynevek megtartják a közzétett alakjukat (a W12x50 amerikai jelölés, bár a méretei mm-ben látszanak). Angolszász bevitel még nincs.

## Online és offline

A megnyitás, a mentés és az exportálás mind a böngészőben történik, így a DetailCraft betöltése után kapcsolattal és anélkül is ugyanúgy működnek.

Ha később kapcsolat nélkül szeretné használni a DetailCraftot, online állapotban válassza az alkalmazássávon a {{ui:Mentés offline használatra}} lehetőséget. A gomb felfelé számol („Mentés: 3 / 20”), majd az {{ui:Offline használatra kész}} feliratot mutatja. A mentett példány tartalmazza a 3D grafikus könyvtárat (kb. 2,6 MB) és ezt a súgót, így a mentés után a 3D nézet, minden export és a súgó is működik offline. A részletek, és hogy mihez kell még kapcsolat: [Munka offline](common:offline).

:::offline
Offline van. Ha az alkalmazássáv az {{ui:Offline használatra kész}} feliratot mutatja, a megnyitás, a mentés és az exportálás a szokott módon működik. Ha nem, tartsa nyitva ezt a lapot, ne töltse újra, amíg újra nem lesz online, és most mentse a modelljét.
:::

Felhőbe mentés még nincs, asztali változat sincs még. A `.detailcraft.json` fájljairól készítsen biztonsági mentést úgy, ahogy bármely más munkafájlról. Több információ: [Hová kerülnek a fájljai](common:your-files).

## Mentetlen munka

A DetailCraft a modellt csak a nyitott lapban tartja. Ha mentetlen módosításokkal bezárja vagy újratölti a lapot, a böngésző rákérdez, hogy elhagyja-e az oldalt; a megfogalmazása a böngészőé. Gyakran mentsen a {{key:Mod+S}} billentyűkombinációval.
