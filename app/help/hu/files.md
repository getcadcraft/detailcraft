---
title: Fájlok megnyitása, mentése és exportálása
summary: A DetailCraft modellfájlja, minden általa írt export, hogy hová kerülnek a fájlok, és mi különbözik böngészőnként és kapcsolatonként.
keywords: megnyitás, mentés, exportálás, letöltés, fájl, json, ifc, nc1, dstv, csv, pdf, zip, formátumok, importálás
from: 6fbc8e8f
---

A DetailCraftnak egy saját fájlja van, a modell, és öt exportja. Minden mentés és minden export letöltés. Semmi nem töltődik fel, és semmi nem marad meg szerveren.

## A modellfájl

A DetailCraft-modell `<name>.detailcraft.json` néven mentődik, ahol a `<name>` a {{ui:Modell}} panelen lévő modellnév. Tartalmazza a rácsokat, szinteket, rúdelemeket (a furataikkal és kivágásaikkal), a kapcsolatokat és beállításaikat, az alapokat és az egyéni szelvényeit.

Az alkatrészek, jelek, csavarok, hegesztések és betétvasak nincsenek tárolva: a DetailCraft minden megnyitáskor újra kiszámolja őket a modellből. Ezért kicsi a modellfájl.

### Mentés

1. Írja be a nevet a {{ui:Név}} mezőbe a {{ui:Modell}} panel tetején.
2. Válassza a {{ui:Mentés}} gombot a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+S}} billentyűkombinációt.
3. A böngésző letölti a `<name>.detailcraft.json` fájlt. Az állapotsor ezt írja: „Mentve … (letöltve)”, a böngészőlap címének elején lévő pont pedig eltűnik.

Minden mentés új letöltés. A böngésző nem írja felül a megnyitott fájlt; beállításától függően számot ad a névhez, például `Frame (1).detailcraft.json`, vagy megkérdezi, hová mentse. A saját verzióit a letöltött fájlok átnevezésével őrizze meg.

:::chromium
A Chrome és az Edge a Letöltések mappába ment, hacsak a böngésző letöltési beállításaiban nincs bekapcsolva a **Kérdezze meg, hová mentse az egyes fájlokat letöltés előtt** lehetőség. Kapcsolja be, ha minden alkalommal mappát és fájlnevet szeretne választani.
:::

:::firefox
A Firefox a Letöltések mappába ment, vagy minden alkalommal megkérdezi, ha a beállításaiban be van kapcsolva a **Mindig kérdezze meg, hová mentse a fájlokat** lehetőség.
:::

:::safari
A Safari a Letöltések mappába ment. A mappa módosításához nyissa meg a **Safari, Beállítások, Általános, Fájlletöltési hely** menüpontot.
:::

### Megnyitás

1. Válassza a {{ui:Megnyitás}} gombot a {{ui:Fájl}} csoportban, vagy nyomja meg a {{key:Mod+O}} billentyűkombinációt.
2. Válasszon ki egy `.detailcraft.json` fájlt.

Vagy húzza a fájlt a {{pick:mac=Finder|windows=Fájlkezelő|linux=a fájlkezelő}} programból a nézetre. Húzás közben a nézet ezt írja: „Dobja ide a DetailCraft-modellt a megnyitáshoz”.

Ha a megnyitott modellnek nem mentett módosításai vannak, a DetailCraft előbb rákérdez: {{ui:Mégse}}, {{ui:Módosítások elvetése}} vagy {{ui:Mentés előbb}}.

A DetailCraft minden mezőt ellenőriz a fájlban, mielőtt használná. Ami nem használható, kimarad, és az állapotsor megmondja, mi, például: „2 rúdelem érvénytelen volt, és kimaradt.” Az újabb DetailCraft által mentett modellt üzenettel elutasítja, ahelyett hogy félig jól nyitná meg.

### Mit nyit meg

Saját modellfájlokat (`.json`, legfeljebb 50 MB) és IFC-fájlokat (`.ifc`, IFC2X3 vagy IFC4, legfeljebb 200 MB) nyit meg. Az IFC-fájl, akár megnyitva, akár a {{ui:IFC importálása}} gombbal behozva, új modellé válik a gerendáival, oszlopaival, rúdelemeivel, lemezeivel, rácsaival és szintjeivel; a furatok és kivágások bennük maradnak, a csavarok pedig önálló csavarokként. Egy jelentés felsorolja, mi maradt ki. Lásd: [IFC-export](topic:ifc-export#import). DWG-, DXF-fájlt vagy más szerkesztőprogram modelljét még nem nyit meg; ha ezt megpróbálja, a következő üzenet jelenik meg: „A DetailCraft a saját modelljeit (.detailcraft.json) és IFC-fájlokat (.ifc) nyit meg.”

## Elveszett munka, legutóbbi fájlok, az asztali alkalmazás

- Amíg a modellen olyan módosítások vannak, amelyeket nem mentett, a DetailCraft másolatot tart ebben a böngészőben. Ha a lap vagy a böngésző a mentés előtt leáll, a DetailCraft a következő megnyitásakor megkérdezi: **Helyreállítja a munkáját?** Állítsa helyre a másolatot, vagy engedje el. Lásd: [Munka helyreállítása](common:recover).
- A legutóbb megnyitott modellek a kezdőképernyőn listázódnak, ha a böngésző engedi, hogy a DetailCraft újra megnyissa őket; kattintson rá az újbóli megnyitáshoz.
- Az asztali alkalmazásban a {{ui:Mentés}} visszaírja a modellt a megnyitott fájlba (böngészőben másolatot tölt le), a DetailCraft-modellre vagy IFC-fájlra duplán kattintva pedig a DetailCraft megnyitja azt.

## Exportok

Minden export a modell nevét használja. A {{ui:Kimenet}} csoportban válassza ki őket.

| Gomb | Fájl | Mi van benne |
|---|---|---|
| {{ui:IFC}} | `<name>.ifc` | IFC4: szintek, rácsok, minden acélalkatrész szelvényextrúzióként a furataival és kivágásaival, összeállítások, csavarok és horgonyrudak, alapok és minden betétvas. Lásd: [IFC exportálása](topic:ifc-export). |
| {{ui:NC-fájlok}} | `<name> NC.zip` | Egy DSTV `.nc1` fájl alkatrészjelenként. Lásd: [NC-fájlok küldése a műhelybe](topic:nc-export). |
| {{ui:Anyagjegyzék}} | `<name> BOM.csv` | Három táblázat egy fájlban: alkatrészek, összeállítások, valamint csavarok és horgonyrudak. Lásd: [Jelek és az anyagjegyzék](topic:marks-and-bom). |
| {{ui:Hajlítás}} | `<name> bending schedule.csv` | Az alapokban lévő minden betétvas-jel. Lásd: [Alapok és betétvas](topic:footings-and-rebar). |
| {{ui:Gyártmányrajz}} | `<name> <mark>.pdf` | A `<name> Shop drawings.pdf` fájl alkatrészjelenként egy lapot tartalmaz; a {{ui:PDF letöltése}} a megjelenítettet adja (A3, ha nem más méretet választott). Lásd: [Gyártmányrajzok készítése](topic:shop-drawings). |
| {{ui:Rajzok}} | `<name> drawings.pdf`, `<name> <sheet>.pdf`; `<name> <sheet>.dwg` vagy `.dxf`, több a `<name> drawings DWG.zip` (vagy `DXF.zip`) fájlban | A kiválasztott lapméreten az alaprajzok, homlokzatok és összeállítási rajzok; a DWG és DXF teljes méretben, 1 egység = 1 mm a papíron. Lásd: [Általános elrendezési és összeállítási rajzok](topic:drawings). |

### Megjegyzések a CSV-fájlokhoz

- Bájtsorrend-jelölővel kezdődnek, hogy a táblázatkezelő programok helyesen olvassák az ékezetes karaktereket.
- A `=`, `+`, `-` vagy `@` jellel kezdődő cella (ha nem sima szám) elé aposztróf kerül, hogy a táblázatkezelő soha ne futtassa képletként.
- A hosszúságok milliméterben, a tömegek kilogrammban vannak.

### Megjegyzések a PDF-hez

A PDF szövege a szabványos Helvetica betűtípust használja. Azok a karakterek, amelyek nincsenek meg benne (a nyugat-európai készleten kívül), „?” jelként nyomtatódnak, és az állapotsor megmondja, hányat.

## Mértékegységek

A DetailCraft mindenhol milliméterben dolgozik: rácsok, szintek, koordináták, szelvények, furatok és minden export. A szelvénynevek megtartják közzétett alakjukat (a W12x50 amerikai jelölés, bár méretei mm-ben láthatók). Imperiális mértékegységű bevitel még nincs.

## Online és offline

A megnyitás, a mentés és az exportálás mind a böngészőben történik, ezért a DetailCraft betöltése után kapcsolat nélkül is ugyanúgy működnek.

Hogy később kapcsolat nélkül is használhassa a DetailCraftot, kapcsolódva válassza az alkalmazássávban a {{ui:Mentés offline használatra}} gombot. A gomb számol („Mentés: 3 / 20”), majd a {{ui:Offline használatra kész}} feliratot mutatja. A mentett másolat tartalmazza a 3D-grafikai könyvtárat (kb. 2,6 MB) és ezt a súgót, így a mentés után a 3D-nézet, minden export és a súgó offline is működik. Részletek, és hogy mihez van még szükség kapcsolatra: [Munka offline](common:offline).

:::offline
Nincs kapcsolat. Ha az alkalmazássávon a {{ui:Offline használatra kész}} felirat látszik, a megnyitás, a mentés és az exportálás a szokásos módon működik. Ha nem, tartsa nyitva ezt a lapot, ne töltse újra, amíg vissza nem kapcsolódik, és most mentse el a modelljét.
:::

A felhőbe mentés még nem érhető el, és asztali változatok sincsenek még. Készítsen biztonsági másolatot a `.detailcraft.json` fájlokról ugyanúgy, ahogy bármely más munkafájlról. Részletek: [Hova kerülnek a fájljai](common:your-files).

## Nem mentett munka

A DetailCraft a modellt csak a megnyitott lapon tartja. Ha nem mentett módosításokkal zárja be vagy tölti be újra a lapot, a böngésző megkérdezi, el akarja-e hagyni az oldalt; a szöveg a böngésző saját szövege. Gyakran mentsen a {{key:Mod+S}} billentyűkombinációval.
