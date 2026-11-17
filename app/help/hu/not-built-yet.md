---
title: Ami még nincs elkészítve
summary: Mit nem tud ez a korai DetailCraft-verzió, és mit tegyen helyette most.
keywords: korlátok, korlátozások, hiányzó, ütemterv, nem támogatott, jövőbeli, tervezett, megoldás, teendő
from: ea411885
---

A DetailCraft korai verzió. Ez az oldal azt sorolja fel, amit még nem tud, hogy a munkáját ehhez igazíthassa. Itt semmi sem dátumra vonatkozó ígéret.

## Modellezés

| Még nem | Helyette, jelenleg |
|---|---|
| Egy elem egyik végének húzása (nyújtás) | A {{ui:Tulajdonságok}} panel {{ui:Végek (x, y, z mm)}} részében szerkessze a {{ui:Kezdet}} vagy a {{ui:Vég}} értéket |
| Kijelölésszűrő (csak gerendák, csak egy szelvény) | Húzzon ablakot, majd a {{key:Shift}}+kattintással vegye ki az alkatrészeket |
| Kijelölés sokszorozása; forgatás ferde tengely körül; tükrözés ferde síkban | Másolja és illessze be eltolt helyre, vagy használja a {{ui:Kettőzés}} parancsot; a forgatás és a tükrözés alaprajzban működik ([Kijelölés ablakkal, mozgatás, forgatás, tükrözés, több elem módosítása](topic:select-and-change)) |
| Rácson kívüli pontok kattintáskor | Helyezze el a rácson, majd írja be a végpontok koordinátáit |
| Homlokzatok a számozott rácsvonalak mentén; mentett nézetek; munkasíkok | Használja a {{ui:3D}} nézetet, vagy a {{ui:Hozzáadás rács szerint}} űrlapot |
| Lyukak valódi vágásként a 3D-nézetben | A lyukak sötét dugókként látszanak; minden exportban valódiak |
| Lekerekített vagy ferde kivágások, egyéb vágások és idomok | Csak derékszögű kivágások I-szelvényeken |
| Szögacélokhoz és kör keresztmetszetű csövekhez adott lyukak | A szögacél-lyukak csak [merevítő-csomólemezekből](topic:brace-gussets) származnak |
| Angolszász mértékegységű bevitel | Milliméterben írja be (25,4 mm hüvelykenként) |
| Egyéni szelvény szerkesztése vagy eltávolítása | Adjon hozzá egy javított szelvényt új névvel |

## Lépcsők

| Még nem | Helyette, jelenleg |
|---|---|
| Korlátok, pihenők, lábazati lemezek, rácsos fokok, csigalépcsők és törtvonalú lépcsők | Csak egyenes lépcsőkarok; lásd: [Lépcsők](topic:stairs) |
| A lépcsőkarok végvágása a szintekhez igazítva | Derékszögű végvágású lépcsőkarok; vágja le őket a műhelyszoftverben |

## Csomópontok

A DetailCraft hat csomópontot készít: merevítő-csomólemezt (lásd: [Merevítő-csomólemezek](topic:brace-gussets)); csavarozott toldást egy I-szelvény két darabja között (lásd: [Toldások](topic:splices)); ferde hajlást két, szögben találkozó I-szelvény között, csak vágással vagy csavarozott véglemezekkel (lásd: [Gérillesztések](topic:mitres)); síkban záródó vagy kinyúló csavarozott véglemezt egy szintes, függőleges I-szelvényű gerendától egy I-szelvényű oszlop övéhez vagy gerincéhez; nyírólemezt egy gerendától (derékszögű, ferde vagy lejtős) egy oszlop övéhez vagy gerincéhez; és oszlop-talpalemezt négy horgonycsavarral.

| Még nem | Helyette, jelenleg |
|---|---|
| Ferde vagy lejtős véglemezek | Használjon [nyírólemezeket](topic:shear-tabs), amelyek a ferde és lejtős gerendákat is kezelik |
| Rögzítő szögacélok; kitöltő lemezek toldásnál és különböző méretek közötti toldások; gerendához és oszlophoz hegesztett sarok-csomólemezek, letört csomólemezek | Részletezze más szoftverben, vagy adjon hozzá lemezeket és lyukakat kézzel, különálló alkatrészként; lásd: [Toldások](topic:splices), [Merevítő-csomólemezek](topic:brace-gussets) |
| Letört vagy kúpos talpbordák; injektáló lyukak; az alapozási zseb nyíróbordához | Derékszögű bordák; lásd: [Talpalemezek](topic:base-plates) |
| Könyökök (haunch); tompahegesztéses, hegesztett gérillesztések; bordák a másik elem öveivel egy vonalban | [Gérillesztés](topic:mitres) véglemezekkel és gerincbordákkal, vagy sima gérvágás; egyéb lemezeket kézzel, különálló alkatrészként adjon hozzá |
| Csomópontok tervezési ellenőrzése (szilárdság) | Ellenőrizze a csomópontokat a mérnöke számításaival; a DetailCraft csak a széltávolságra és a kiosztásra figyelmeztet |
| Hosszúlyukak | Csak kerek lyukak |

## Analízis

| Még nem | Helyette, jelenleg |
|---|---|
| Tervezési ellenőrzések az acél I-szelvényeken túl: csövek, szögacélok, U-szelvények, hegesztett szelvények, karcsú vagy 4. osztályú alkatrészek, csavarás, csomópontok; beton: oldalirányú karcsúság, csavarás, földrengési részletezés, födémek és falak | Az {{ui:Analízis}} lap az acél I-szelvényeket az AISC 360 vagy az EN 1993-1-1 szerint ellenőrzi ([Acél rudak ellenőrzése tervezési szabvány szerint](topic:design-checks)); a többit „nincs ellenőrizve” jelöléssel hagyja; az egészet mérnöknek kell átnéznie |
| Kihajlásvizsgálat, rezgés | A másodrendű számítás csak P-Delta (rugalmas); nincs kihajlásvizsgálat (a modális, válaszspektrum-, idő- és pushover-elemzés az {{ui:Analízis}} lapon van) |
| Mérnök által átnézett tervezési ellenőrzések | Addig segédeszköz: két-három elemet ellenőrizzen kézzel vagy mérnöke saját szoftverével, mielőtt támaszkodna rájuk |
| Padló-, szél- és hóterhelés területekből automatikusan | Terheléseket kN/m vagy kN egységben, kézzel adjon meg az elemekre |
| Elemek eltolása, excentrikus csomópontok, csak húzott merevítők, lemezek és alapok a keretben | Az elemek a tengelyvonalaikon kerülnek elemzésre; a merevítők húzást és nyomást is felvesznek |

## Vasalás

| Még nem | Helyette, jelenleg |
|---|---|
| Kör keresztmetszetű oszlopok, spirálok, lejtős vagy görbe gerendák, téglalaptól eltérő födémek, nem egyenes falak | Derékszögű gerendák, oszlopok, födémek és falak ([Vasbeton részletezése](topic:reinforced-concrete)) |
| Átfedésbe hajlított rudak, eltolt átfedések, tetszőleges helyre tett átfedések | Egyenlő lépésű átfedések, minden rúd egy keresztmetszetben átfedve (ACI Class B, EN α6 = 1.5) |
| Sarokrudak nyílásoknál, átütési nyírási vasalás, földrengési részletezés (ACI 318-19 18. fejezet) | A nyílások két oldalán közbenső rudak; a többit Ön ellenőrizze |
| Egy tervezőprogram saját fájljainak beolvasása | Exportálja IFC-formátumban: az IfcReinforcingBar elemei rudakként érkeznek be ([Rudak IFC-fájlból](topic:reinforced-concrete#bars-from-an-ifc-file)) |
| Az egyenes, egy hajlítású és U alakon túli alakkódok; ACI 315 típusok egyenes és egy horgos rudakhoz | A három alak BS 8666 00, 11, 21 vagy ACI 2. típusként íródik; lásd: [Vasalási referencia](topic:rebar-reference) |
| Más metrikus rudak, mint a BS 4449 H8–H40 (pl. CSA 10M–35M) | ASTM lágy metrikus jelölések #10–#36, vagy BS rudak |

## Rajzok és exportok

| Még nem | Helyette, jelenleg |
|---|---|
| Álló lapok, A0 és saját méretű lapok; elrendezési nézetek ferde rácson | Fekvő A4–A1 és ANSI B–D ([Elrendezési és szerelési rajzok](topic:drawings)); a PDF-et méretezze, ha más méretre szeretné nyomtatni |
| Hegesztési jelek egyalkatrészes gyártmányrajzokon; a sarokvarrattól eltérő jelek | A szerelési rajzok sarokvarrat-jeleket tartalmaznak; a gyártmányrajz a hegesztést szövegként adja meg |
| Rajz szerkesztése az alkalmazásban | Módosítsa a modellt, és készítse újra a rajzot; a PDF-et egy PDF-alkalmazásban jelölje meg, például MarkupCraft-ban |
| Rajzok DWG formátumban méretobjektumokkal, vagy a modell valós méretben a modelltérben, a lapok elrendezésként | Minden lap teljes méretű DWG vagy DXF a papírról, a méretek vonalakként és számokként ([Elrendezési és szerelési rajzok](topic:drawings#download)) |
| NC-lyukak kör keresztmetszetű csövekben; kivágások szögacélokon és kör keresztmetszetű csöveken az NC-fájlokban | Nem íródik; lásd: [NC-fájl mezői](topic:nc1-fields) |
| Élletörések, jelölések és belső kontúrok az NC-fájlokban | Egyelőre nincs |
| Csavarlyukak, csavarok, hegesztések és alapok az USD-exportban | Az IFC-, NC- és anyagjegyzék-kimenetekben vannak; lásd: [Acélmodell exportálása USD-ben](topic:usd) |
| Csomópontok, alapok, hosszúlyukak, téglalap alakú lyukak és kör keresztmetszetű csövekben lévő lyukak beolvasása IFC-fájlból | Az {{ui:IFC importálása}} gerendákat, oszlopokat, elemeket, lemezeket, rácsokat, szinteket, kerek lyukakat, kivágásokat, csavarokat és vasalási rudakat hoz be; a jelentés felsorolja, mi maradt ki |
| Egyéni jelentésformátumok | A három CSV-fájl |

## Panelek

| Még nem | Helyette, jelenleg |
|---|---|
| Az alul lévő jelentések ({{ui:Problémák}}, {{ui:Anyagjegyzék}}, {{ui:Hajlítási kimutatás}}) áthelyezése | Csak a {{ui:Modell}} és a {{ui:Tulajdonságok}} panel mozgatható. Lásd: [Panelek elrendezése](common:arrange-panels) |

## Együttműködés és mentés

| Még nem | Helyette, jelenleg |
|---|---|
| Felhőbe mentés és szinkronizálás számítógépek között | Mentse a `.detailcraft.json` fájlokat, és ossza meg őket, mint bármely fájlt. A felhőbe mentés még nem érhető el |
| Mások kurzorai és a „szerkeszti” jelölések egy Live TeamWork munkamenetben; rácsok, szintek és fázisok elemenkénti egyesítése | A szerkesztések még egyesülnek (a rácsok, szintek és fázisok egészben, a későbbi módosítás nyer); lásd: [Egy szerkezet közös, élő részletezése](topic:work-live) |
| Meghívóhivatkozások Live TeamWork munkamenethez az interneten keresztül | Csatlakozzon rövid kóddal, ugyanazon a hálózaton |

## Platformok

- A DetailCraft asztali gépre, laptopra vagy táblagépre készült. Telefonon is működik: a modell megtartja a képernyőt és a paneleket, a jelentések pedig a képernyő alján lévő sávból nyíló lapokként jelennek meg, de a paneleknek kevés hely jut.
- Offline használathoz először mentse a DetailCraftot offline használatra az alkalmazássávon lévő {{ui:Mentés offline használatra}} gombbal; amint ez az {{ui:Offline használatra kész}} állapotot mutatja, ebben a verzióban minden kapcsolat nélkül működik. Lásd: [Munka offline](common:offline).

Ha valamelyik hiányosság akadályozza a munkáját, jelezze a [támogatási oldalon](https://getcadcraft.com/support); ez segít eldönteni, mit építsünk legközelebb.
