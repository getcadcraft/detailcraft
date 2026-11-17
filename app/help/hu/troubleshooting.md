---
title: Hibaelhárítás
summary: A DetailCraft üzeneteinek jelentése és a teendők, a hiányzó 3D nézettől a fel nem épülő kapcsolatokig.
keywords: probléma, hiba, nem működik, súgó, javítás, üzenet, elutasítva, webgl, üres, figyelmeztetés, nem lehet, gond
from: f8c3b2b1
---

A legtöbb elutasítást az ablak alján lévő állapotsor magyarázza, vagy a {{ui:Problems}} lapon található részletek. Ezeket olvassa el először. Az alábbi üzeneteket úgy idézzük, ahogyan a DetailCraft megjeleníti.

## A 3D nézet hiányzik

**„Ez a böngésző nem tudta elindítani a 3D grafikát (WebGL). A modell, a jelentések és az exportálások továbbra is működnek.”**

A böngésző nem tudta elindítani a WebGL-t, a 3D grafikát, amellyel a DetailCraft rajzol.

1. Frissítse a böngészőt a legújabb verzióra.
2. Kapcsolja be a hardveres gyorsítást, és indítsa újra a böngészőt (lásd lent).
3. Frissítse a grafikus illesztőprogramot, vagy próbáljon másik böngészőt. Távoli asztalok és virtuális gépek gyakran nem támogatják a WebGL-t.
4. Addig is dolgozhat: elemeket az {{ui:Add by grid}} űrlappal helyezhet el, olvashatja a jelentéseket, és exportálhat. Csak a nézetben való kattintáshoz kell a WebGL.

:::chromium
A hardveres gyorsítás bekapcsolásához nyissa meg a **Beállítások, Rendszer** menüpontot, kapcsolja be a **Grafikus gyorsítás használata, ha elérhető** opciót, majd indítsa újra a böngészőt.
:::

:::firefox
A hardveres gyorsítás bekapcsolásához nyissa meg a **Beállítások, Általános, Teljesítmény** részt, törölje a **Javasolt teljesítménybeállítások használata** jelölését, és jelölje be a **Hardveres gyorsítás használata, ha elérhető** opciót. Indítsa újra a Firefoxot.
:::

:::safari
A Safari alapértelmezés szerint használja a WebGL-t. Ha a nézet így sem indul el, frissítse a macOS-t, és ellenőrizze, hogy nincs-e olyan bővítmény, amely blokkolja.
:::

További információ: [Böngészők és számítógépek](common:browsers).

## A nézetben kattintva nincs hatás

- **Nincs metszéspont a kattintás közelében.** A elhelyezőeszközök csak rácsmetszéspontokra illeszkednek. Ha a kattintás egyik pont mellé sem esik, nem történik semmi. Közelebb kell menni, amíg a pont fel nem világosodik.
- **Az eszköz a {{ui:Select}}, és üres helyre kattintott.** Ez megszünteti a kijelölést.
- **Húzott.** Ha a lenyomás és az elengedés között néhány pixelnél nagyobb a távolság, az húzásnak számít: elforgatja vagy eltolja a nézetet.
- **A rész le van vágva.** Az {{ui:Plan}} és az {{ui:Elevation}} nézetekben a metszeten kívüli acél rejtett, és nem kattintható. Váltson a {{ui:3D}} nézetre.
- **Rossz szinten van a metszéspont.** A {{ui:3D}} nézetben több szinten lévő metszéspontok a képen átfedhetnek; a kattintás a legközelebbit választja. Használja az {{ui:Plan}} vagy az {{ui:Elevation}} nézetet.

## Elhelyezési üzenetek

| Üzenet | Teendő |
|---|---|
| Nincs a Level 2 feletti szint, amelyet az oszlop elérne. Először adjon hozzá szintet. | Adjon hozzá szintet a {{ui:Levels}} részben, vagy kattintson alacsonyabb szintre |
| Válasszon másik metszéspontot a másik végéhez. | Ugyanarra a pontra kattintott kétszer |
| A két vég ugyanaz a pont. | Az {{ui:Add by grid}} űrlapon a „Honnan” és a „Hová” pont ugyanaz |
| Adjon hozzá rácsvonalakat a bal oldalon a tartók elhelyezéséhez. | A modellben egy irányban nincs rácsvonal |
| Ismeretlen profil „…” | A profil nincs a katalógusban vagy a modell egyéni profiljai között. Válasszon egyet a listából |
| Írjon be egy számot. | Egy számmező üres maradt, vagy szöveg van benne |

## Kapcsolatok nem épülnek fel

### „Ez a tartó nem egy oszlopvonalon végződik.”

Véglemezekhez a tartó végének pontosan egy függőleges oszlop vonalán kell lennie, annak alja és teteje között (1 mm-en belül). Ellenőrizze a tartó {{ui:Ends (x, y, z mm)}} értékeit és az oszlop helyzetét.

### „Ez a tartó egy oszlop gerincéhez csatlakozik, vagy szögben áll.”

Vagy a {{ui:Problems}} lapon: „Az oszlop gerincébe csatlakozó tartók még nem készülnek el: forgassa el az oszlopot 90°-kal, vagy használjon másik kapcsolatot.”

A tartó az oszlop gerincébe csatlakozik. Jelölje ki az oszlopot, és állítsa be az {{ui:Rotation (°)}} értékét 90-re, majd próbálja újra. A ferde csatlakozások nem készülnek el.

### „A véglemezeket csak vízszintes tartókhoz építjük (ez a tartó lejt).”

A tartó két végének ugyanabban a magasságban kell lennie.

### „A véglemezekhez a tartónak függőlegesnek kell lennie (elforgatás 0).”

Állítsa vissza a tartó {{ui:Rotation (°)}} értékét 0-ra.

### „A véglemezekhez I-szelvényű tartó kell.” / „A véglemezekhez I-szelvényű oszlop kell.”

Csak I-szelvények (W, IPE, HEA, HEB vagy egyedi I) kapnak véglemezt.

### „A tartó vége már nincs az oszlopvonalon.”

A kapcsolat hozzáadása után mozgatta a tartót vagy az oszlopot. Helyezze vissza, vagy törölje a kapcsolatot.

### „A kapcsolatok ezt az elemet nullára vágták.”

A két végén lévő kapcsolatok a hosszánál jobban visszavágják az elemet, például egy nagyon rövid tartó két mély oszlop között. Ellenőrizze az elem végeit és a lemez vastagságát.

### „Nincs más ilyen csatlakozás … kapcsolat nélkül.”

A {{ui:Similar}} csak olyan csatlakozásokra másol, amelyeknek ugyanaz a tartóprofilja, oszlopprofilja és kapcsolattípusa (tartó az övbe), és még nincs kapcsolatuk.

### „Mindkét végén már van kapcsolat.” / „Ennek az oszlopnak már van talplemeze.”

Jelölje ki a meglévő kapcsolatot a módosításhoz, vagy előbb törölje.

## Figyelmeztetések a Problémák lapon

A figyelmeztetések nem akadályozzák meg a kapcsolat vagy az alap elkészítését; azt kérik, hogy ellenőrizze. A szél- és távolságelőírások az EN 1993-1-8 3.3 táblázatának minimumait használják (szél 1,2 × furat, osztás 2,2 × furat, sortávolság 2,4 × furat). Ha a projektje más szabályokat használ, a figyelmeztetés nem érvényes; a DetailCraft nem tervezi a kapcsolatokat.

„A furat a darab végén kívül van” azt jelenti, hogy a furat x értéke kisebb 0-nál, vagy nagyobb a vágott hossznál. Ne feledje, hogy az x a vágás kezdetétől mérődik, miután a kapcsolatok visszavágták a darabot.

## Alapmódosítások elutasítása

| Üzenet | Teendő |
|---|---|
| A betonfedés nem hagy helyet a rudaknak ebben az alapban. | Nagyobbítsa az alapot, vagy csökkentse a fedést |
| Az alap túl sekély két rétegnyi rúdhoz a fedésen belül. | Tegye mélyebbé, vagy csökkentse a fedést |
| A várakozó rudak nem férnek el az alapban 75 mm betonfedéssel. | Kevesebb várakozó rúd, sűrűbb osztás, vagy nagyobb alap |
| A rúdosztásnak 50–1000 mm között kell lennie. | Írjon be ebbe a tartományba eső osztást |
| A hosszúságnak 300–50000 mm között kell lennie. | Az alapméretek korlátai: hossz és szélesség 300–50000, mélység 150–10000 |

## Rácsok és szintek elutasítása

| Üzenet | Teendő |
|---|---|
| Számozott rácsoknál adjon meg egy osztást minden két vonal között (4). | Számolja meg a közöket: öt vonalhoz négy osztás kell |
| Betűs rácsoknál az osztásoknak pozitív milliméterben kell lenniük. | Nulla, negatív szám vagy szöveg nem adható meg |
| Számozott rácsoknál a rácsfeliratoknak különbözőknek kell lenniük. | Két vonalnak ugyanaz a felirata van |
| Irányonként legfeljebb 60 rácsvonal lehet. | Ossza fel a modellt |
| Legalább egy szintet tartson meg. | Minden szintsort eltávolított |
| Minden szintnek kell nevet adni. / Két szint neve „…”. | Adjon minden szintnek különböző nevet |

## Fájl megnyitása sikertelen

| Üzenet | Ok |
|---|---|
| A DetailCraft a saját modelljeit nyitja meg (.detailcraft.json). Az IFC-import még nincs elkészítve. | A fájl nem `.json` fájl |
| Ez nem DetailCraft-modell (nem JSON). | A fájl sérült, vagy másik JSON-fájl |
| Ez nem DetailCraft-modell. | Másik program JSON-fájlja |
| Ezt a modellt újabb DetailCraft mentette (2-es formátum). | Nyissa meg abban az újabb DetailCraft-ban, amelyik mentette |
| Ez a fájl túl nagy ahhoz, hogy DetailCraft-modell legyen. | 50 MB felett |

Ha a fájl figyelmeztetésekkel nyílik meg, például „2 elem nem volt érvényes, és kimaradt.”, a modell többi része rendben van. Ne írja felül az eredeti fájlt, amíg nem ellenőrizte, mi maradt ki.

## Exportálások

| Üzenet | Ok |
|---|---|
| Még nincs mit exportálni. | {{ui:IFC}} üres modellel |
| Nincs I-szelvényű vagy lemezes alkatrész NC-fájlok írásához. | A modellben csak csatornák, szögacélok vagy csövek vannak |
| Nem íródott (eddig csak I-szelvények és lemezek): … | Ezek a jelek nem I-szelvények vagy lemezek; a többi megíródott |
| Nincs alap, így nincs ütemezendő rúd. | {{ui:Bending}} alapok nélkül |
| … karakter a PDF-betűkészleten kívül van, „?”-ként íródik ki. | A modellnévben vagy egy minőségben olyan karakterek vannak, amelyek a PDF-betűkészletből hiányoznak |

A {{ui:Shop drawing}} inaktív: a modellben még nincs alkatrész.

## Letöltések nem jelennek meg

Minden mentés és exportálás böngészőletöltés. Ellenőrizze a böngésző letöltési listáját. Ha a böngésző több fájl letöltése előtt kérdez, vagy blokkolja a letöltést ettől az oldaltól, engedélyezze. Safariban az eszköztáron lévő letöltések gombot nézze meg.

## A billentyűk nem működnek

- A kurzor szöveg- vagy számmezőben van: az eszközbillentyűk és a {{key:Delete}} itt figyelmen kívül maradnak, hogy lehessen írni. Nyomja meg a {{key:Tab}} billentyűt, vagy kattintson a nézetbe.
- Párbeszédpanel van nyitva: előbb zárja be.
- A böngészőnél van a billentyűzet (például a címsor): kattintson a DetailCraft területére.
- A {{key:Ctrl+Shift+F}} billentyűkombináció Mac gépen is a Control billentyűt használja.

## Offline problémák

Az alkalmazássávban lévő {{ui:Save for offline}} gomb mutatja az offline másolat állapotát. A mentés működéséről: [Munka offline módban](common:offline).

| A gomb felirata | Jelentése | Teendő |
|---|---|---|
| {{ui:Save for offline}} | Ebben a böngészőben még nincs offline másolat | Online állapotban válassza ki |
| Saving 5 of 20 | A mentés folyamatban van | Várja meg, amíg a gomb ilyen feliratra vált: {{ui:Offline ready}}; tartsa nyitva a lapot |
| {{ui:Offline ready}} | A DetailCraft, a 3D nézete, minden exportálás és ez a súgó kapcsolat nélkül is működik | Semmi. Kattintson rá, ha a {{ui:Save again (get the newest version)}} vagy az {{ui:Remove the offline copy}} lehetőséget szeretné |
| {{ui:Could not save}} | Néhány fájl nem töltődött le | Ellenőrizze a kapcsolatot, és kattintson rá az újrapróbáláshoz |
| {{ui:Offline not available}} | Ez az ablak nem tud offline másolatot tartani: a privát ablakok és egyes felügyelt számítógépek ezt blokkolják | Használjon normál ablakot, vagy dolgozzon online |

Ha offline van, és a gomb nem jelzi, hogy {{ui:Offline ready}}, ne töltse újra és ne zárja be a lapot: ami már betöltődött, tovább működik. Mentse a modellt a {{key:Mod+S}} billentyűvel, és várja meg, amíg újra online lesz.

## Nem mentett munka

Ha a böngésző rákérdez, hogy el akar-e hagyni az oldalt, a DetailCraftban nem mentett módosítások vannak. Válassza a maradást, majd nyomja meg a {{key:Mod+S}} billentyűt. A DetailCraft a lap bezárása után nem tudja helyreállítani a modellt.

## Még mindig nem sikerül

Jegyezze fel, mit tett és a pontos üzenetet, és jelezze nekünk a [támogatási oldalon](https://getcadcraft.com/support) keresztül.
