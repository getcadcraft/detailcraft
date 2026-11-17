---
title: Áttérés más részletterv-szoftverekről
summary: Hogyan képződnek le egy teljes körű részletterv-csomag szokásai a DetailCraftban, és azok a különbségek, amelyek a tapasztalt tervezőket is megtévesztik.
keywords: áttérés, migráció, ismerős, munkafolyamat, összehasonlítás, különbségek, számozás, komponensek, katalógus, rajzok, szokások
from: 39639a5d
---

Ha a Tekla Structures programban tervez, a DetailCraft nagy része ismerősnek fog tűnni: rácsok, szintek, katalógusból származó szelvények, alkatrészek és összeállítások, csomópontok, számozás, NC-fájlok, IFC. A méret nagyon eltérő: a Tekla Structures egy teljes körű gyártási rendszer, a DetailCraft pedig egy kicsi, korai böngészőalkalmazás, amely néhány feladatot végez el az elejétől a végéig. Ez az oldal megmutatja, hol visznek át a szokásai, és hol nem.

:::tip
Ha a Tekla Structures szalagját ismeri, válassza a {{ui:Acél szalag}} menüstílust a {{ui:Beállítások}} › {{ui:DetailCraft}} › {{ui:Menük, billentyűk és egér}} alatt: Modellezés, Részletezés, Szerkesztés, Rajzok, Gyártás és Nézet lapok, a középső gomb pedig eltol. Ha az AutoCAD-ből érkezik, és szeret parancsokat gépelni, a {{ui:Klasszikus rajzolás}} parancssort ad hozzá (BEAM, COLUMN, ENDPLATE, ZOOM …). Lásd [Menük, billentyűk és egér](topic:menus-keys-and-mouse).
:::

## Gyors áttekintés

| Amihez szokott | A DetailCraftban |
|---|---|
| Rácsok létrehozása koordinátákkal egy rácsablakban | {{ui:Rácsok}} a bal panelen: a jelölések és a vonalak közötti távolságok, nem abszolút koordináták. A számozott vonalak egyik irányban futnak, a betűs vonalak a másikban |
| Szintek mint rács Z-koordináták | Külön {{ui:Szintek}} lista, soronként név és magasság, amelyet a {{ui:Szintek alkalmazása}} gombbal alkalmaz |
| Pontok kiválasztása bárhol fogásokkal | A kattintások csak rácspontokra illeszkednek. A rácson kívüli pontokat egy tag {{ui:Végek (x, y, z mm)}} mezőjébe gépelje be |
| Oszlop-, gerenda- és lemezparancsok | {{ui:Oszlop}} ({{key:C}}), {{ui:Gerenda}} ({{key:B}}), {{ui:Merevítő}} ({{key:R}}), {{ui:Lemez}} ({{key:P}}), {{ui:Alap}} ({{key:F}}) |
| Alkatrész-tulajdonságok ablaka (dupla kattintás az alkatrészen) | Egy kattintás: a jobb oldali {{ui:Tulajdonságok}} panel mindig élő; nincs ablak, és nincs Módosítás vagy Alkalmaz gomb |
| Pozíció a síkon, forgatás és mélységbeállítások | {{ui:Pozíció}} (acél teteje, középre vagy alulra a vonalon) és {{ui:Elforgatás (°)}}. Nincs külön vízszintes eltolás |
| A szelvénykatalógus | Rögzített lista 2311 közzétett méretből (AISC W, S, C, L, HSS, cső; európai IPE, HEA, HEB, UPN; brit UB, UC, PFC, EA, UEA, SHS, RHS, CHS és hidegen hajlított üreges szelvények), plusz paraméteres lemezek és a saját {{ui:Egyéni szelvény}} szelvényei |
| Anyagkatalógus | Hét minőség listában: A992, A36, A572 Gr 50, A500 Gr C, S235, S275, S355 |
| Csatlakozóelem és párbeszédpanelje | Jelölje ki a gerendát, és válassza a {{ui:Homloklemezek}} gombot. A beállítások a {{ui:Tulajdonságok}} panelen jelennek meg. Csak két csatlakozás létezik: homloklemez az oszlopövhöz, és talplemez |
| Automatikus csatlakoztatás, vagy csomópont másolása hasonló csomópontokra | Jelöljön ki egy csatlakozást, és válassza a {{ui:Alkalmazás hasonlókra (n)}} gombot |
| Számozás sorozattal és kezdőszámokkal | Nincs parancs: a jelölések minden módosítás után magától frissülnek, rögzített előtagokkal: c, b, br, p és C, B, BR, P |
| Csavar- és lyukpanelek | A lyukakat felület és helyzet szerint gépelik be. Csavarok csak csatlakozásokból jönnek |
| Vágó-, illesztő- és sokszögvágó eszközök | Kivágások (felül vagy alul, bármelyik végen) csak I-szelvényeken. A csatlakozások visszavágásai automatikusak |
| Jelentések és sablonok | Három rögzített jelentés az alsó lapokon, és CSV-letöltések |
| Rajzkészítés és rajzlista | Egy műhelyrajz jelölésenként, mindegyik egyszerre készül, előnézet után letölthető egy PDF-ként vagy lapról lapra. Semmi nincs megtartva vagy szerkesztve |
| NC-fájl exportálás | {{ui:NC-fájlok}}: jelölésenként egy DSTV-fájl, csak I-szelvényekre és lemezekre, tömörítve |
| IFC export | {{ui:IFC}}: a teljes modell IFC4-ben, vasalással |
| Vasalás bármely betonelemben | Vasalás csak téglalap alakú lemezalapokban, amerikai rúdméretekkel, alsó hálóval és indító rudakkal |
| Modell mentése projektmappában, többfelhasználós módon | Egy letölthető `.detailcraft.json` fájl. Egy felhasználó, a saját számítógépén |
| Visszavonási előzmények | {{key:Mod+Z}} és {{key:Mod+Y}}, legfeljebb 200 lépés, amíg másik modellt nem nyit meg vagy nem kezd |

## Különbségek, amelyek megzavarják az embereket

### A jelölések maguktól változnak

Nincs számozási lépés. A jelölések minden módosítás után újraszámolódnak, így mindig naprakészek, de át is számozódhatnak: ha hozzáad egy oszlopot, a tegnapi c3 most c4 lehet. Nincs „számozási előzmény”, amely a régi jelöléseket megtartaná. Fejezze be a modellt, majd a darabjegyzéket, az NC-fájlokat és a műhelyrajzokat együtt adja ki egyetlen mentett fájlból.

### Az egérgörgő nagyít, nem tol

A 3D-nézetben: bal húzással forgat, jobb húzással eltol, a görgő nagyít, a középső gombbal húzva szintén nagyít. A {{key:Shift}} lenyomva tartása bal húzás közben szintén eltol. A görgő a nézet közepe felé nagyít, nem a mutató felé. Nincs forgatási középpont kiválasztása: a modell a nézet közepe körül fordul. Lásd [Mozgás a 3D-nézetben](topic:navigate-3d).

### Az oszlopok alapértelmezés szerint egy irányba néznek

0°-os forgatásnál az oszlop övei a számozott rács irányába néznek. A betűs rácsvonalak között futó gerendák a gerincbe csatlakoznak, és ott a homloklemezek nem engedélyezettek („Az oszlop gerincébe csatlakozó gerendák még nincsenek elkészítve”). Forgassa ezeket az oszlopokat 90°-kal, mielőtt csatlakozásokat ad hozzá.

### Nézetek csak betűs vonalakon

{{ui:Homlokzat}} csak a betűs rácsvonalak mentén néz. Nincs nézet a számozott vonalak mentén, nincs mentett nézet és nincs munkasík. A számozott vonalakon álló keretekhez használja a {{ui:3D}} vagy a {{ui:Hozzáadás rács szerint}} gombot.

### Kijelölés, másolás és mozgatás

Több alkatrészt jelöljön ki a {{key:Shift}}+kattintással vagy a {{key:Mod+A}} billentyűvel, majd másolja, vágja ki, illessze be (rácspontra, gépelt eltolással vagy helyben), és kettőzze meg őket, a csatlakozásokkal együtt ([Másolás, beillesztés és kettőzés](topic:copy-paste)). Nincs ablakos kijelölés, nincs kijelölésszűrő, nincs mozgatás, tükrözés vagy sokszorozás, és a tulajdonságokat egyszerre egy tagon módosítják a {{ui:Tulajdonságok}} panelen.

### A rácsok nem húzzák magukkal a tagokat

A tagok megtartják koordinátáikat, amikor módosítja a rácstávolságot; semmi nem mozog a rácsvonalakkal. Az acél elhelyezése előtt módosítsa a rácsot, vagy utólag szerkessze az egyes tagok végkoordinátáit.

### A csatlakozásokat nem tervezik

A két csatlakozás a megadott számokból helyezi el a lemezeket, csavarokat, lyukakat és hegesztéseket. Nincs semmilyen tervezési ellenőrzés, csak él- és távolságfigyelmeztetések (az EN 1993-1-8 3.3 táblázatából).

### A lyukakat nem vágják ki a 3D-nézetben

A lyukak sötét dugókként látszanak. Valódi lyukak az NC-fájlokban, a műhelyrajzokon és az IFC-fájlban. A kivágásokat a nézetben vágják ki.

### A súlyok bruttó értékek

Az acélsúly nem vonja le a lyukakat vagy a kivágásokat, a csavarok súlya pedig nincs benne.

### Csak milliméter

Minden milliméterben gépelődik és jelenik meg, még az AISC-szelvények esetében is. A szelvénynevek megtartják a közzétett alakjukat (W12x50, HSS6x6x1/4).

### Nincs kezelendő rajz

Nincs rajzlista, nincs rajzszerkesztő, nincs általános elrendezési vagy összeállítási rajz. A műhelyrajz akkor készül, amikor kéri, és letöltődik; módosításhoz változtassa meg a modellt, és készítse el újra.

### Böngészőben fut

A mentés egy fájlt tölt le. A böngésző által magának fenntartott billentyűparancsok nem használhatók. A modelljei soha nem hagyják el a számítógépét: lásd [Hova kerülnek a fájljai](common:your-files).

## Amit továbbra is a jelenlegi szoftverében csináljon

Jelenleg a DetailCraft kis keretekhez, ötletek ellenőrzéséhez, oktatáshoz, vagy egyszerű gerenda- és oszlopmunkákhoz készült NC-fájlok és műhelyrajzok előállításához való. Tartsa meg a bonyolult csatlakozásokat, az általános elrendezési rajzokat, a szerelési rajzokat, a többfelhasználós projekteket és mindazt, ami a [Még nincs elkészítve](topic:not-built-yet) alatt szerepel, a jelenleg használt szoftverben.
