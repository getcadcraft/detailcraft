---
title: A keret elemzése
summary: A gerendák, oszlopok és merevítők erői, reakciói és lehajlásai a megrajzolt állapotban, a beállított teheresetek és kombinációk szerint. Elemzési segédeszköz, nem szabványellenőrzés; a tervezési ellenőrzések külön lépést jelentenek.
keywords: elemzés, szerkezeti elemzés, keretelemzés, merevségi módszer, terhek, teheresetek, kombináció, állandó teher, hasznos teher, saját súly, önsúly, támaszerők, hajlítónyomaték, nyíró erő, normálerő, lehajlás, alakváltozott alak, megtámasztások, csuklós, befogott, feloldás, jelentés, pdf, csv, craftscript, frame3d
from: ba0081bc
---

Az alul található {{ui:Analízis}} lap megadja a modell minden gerendájának, oszlopának és merevítőjének erőit, az oszlopalapok reakcióit és azt, hogy a rudak mennyire hajlanak meg a megadott terhekre.

:::warning
Ez **elemzési segédeszköz, nem szabványellenőrzés**. Az elemzés nem alkalmaz tervezési szabványt: nem méretezi a rudakat, nem ellenőrzi a teherbírást vagy a csomópontokat, és nem választ terhelési tényezőt. A modellt, annak terheit és megtámasztásait mérnök ellenőrzi, és ő dönti el, mit jelentenek az értékek. Az ASCE 7 / AISC 360 vagy az EN 1990 / EN 1993-1-1 szerinti rúdellenőrzésekhez lásd: [Acélrudak ellenőrzése tervezési szabvány szerint](topic:design-checks), ami szintén csak segédeszköz, külön lépésben.
:::

## Futtatás

1. Nyissa meg az {{ui:Analízis}} lapot.
2. Jelöljön ki egy vagy több rudat a nézetben, válassza ki az {{ui:Eset}}, a {{ui:Teher}} és az {{ui:Irány}} értékeket, írja be az értéket, majd nyomja meg a {{ui:Teher hozzáadása}} gombot. A rúdon megoszló terhelés kN/m-ben, a koncentrált teher kN-ban adandó meg. A {{ui:Lefelé (gravitáció)}} a szokásos.
3. Nyomja meg az {{ui:Analízis futtatása}} gombot.

A táblázat minden rúd legnagyobb normálerejét (N), nyíró erőit (Vz és Vy), hajlítónyomatékait (My és Mz), csavarónyomatékát (T) és lehajlását sorolja fel, a legnagyobb nyomaték szerint rendezve; a rúd nevére kattintva kijelölheti azt. Alatta az egyes támaszok reakciói láthatók. Az {{ui:A modellen}} gomb az alakváltozott alakot rajzolja ki, vagy egy hatást diagramként, az egyes rudak mellett, a legnagyobb értékkel a helyén. Az eredmények elavulnak, amint a modell változik: futtassa újra.

Minden terhelés, eset és beállítás egy visszavonási lépés ({{key:Mod+Z}}), és a modellfájlban mentődik.

## Teheresetek és kombinációk

Az elemzés három esettel indul: **Állandó** (a rudak saját súlya, a megrajzolt keresztmetszetekből és 7850 kg/m³ sűrűséggel), **Hasznos** (üres) és **Állandó + hasznos**. Adjon hozzá saját eseteket (szél, hó …) és kombinációkat: a kombináció az eseteket a megadott tényezőkkel összegzi. Az elemzés lineáris, ezért minden esetet egyszer oldunk meg, a kombinációk pedig összegek. A tényezőket kézzel írja be, vagy válasszon tervezési szabványt, és a {{ui:Kombinációk készítése}} gomb írja meg annak kombinációit ([Acélrudak ellenőrzése tervezési szabvány szerint](topic:design-checks)).

## A keret felépítése

- Gerendák, oszlopok és merevítők, mindegyik a munkavonalán (a megrajzolt vonalon), a keresztmetszet tényleges tulajdonságaival, a körvonalából számítva. Lemezek, lépcsők, alapok és csavarok nem részei a keretnek.
- A rúd ott kerül felosztásra, ahol egy másik rúd vége rá esik, így a félmagasságban az oszlopba csatlakozó gerenda ott kapcsolódik az oszlophoz.
- **Oszlopalapok**: befogott (a kezdőpont) vagy csuklós (helyben tartott és csavarodás ellen rögzített, de elfordulni képes). Az alaplemez mindig támaszt képez.
- **Gerendavégek**: a véglemez merev, a nyírólemez csuklós. A {{ui:Kapcsolat nélküli gerendavégek}} beállítja a többit. A **merevítők** mindkét végükön csuklósak.
- Jelöljön ki egy rudat, hogy a végeinek, vagy egy oszlop alapjának saját szabályt adjon.
- Mindenhol acél: E = 200 GPa, G = 77 GPa.

Ha a keret úgy mozdulhat el, hogy nem hajlít semmit – mechanizmus, például csuklós talpak merevítés nélkül egy irányban –, a futtatás leáll, és megmondja, hol és melyik irányban; ezt támasszal, merev csomóponttal vagy merevítővel tartsa meg.

## Előjelek

N > 0 húzás. My > 0 a rúd helyi −z oldalát húzza: a gravitáció alatt lehajló gerenda My > 0. Mz > 0 a helyi −y oldalt húzza. A lehajlást a rúd végpontjai közötti egyenestől mérjük. A rúd helyi z tengelye felfelé mutat (oszlop esetén: X mentén); a helyi tengelyek a rúd elforgatásával együtt fordulnak el.

## A jelentés

A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} mindent tartalmaz: a keret felépítésének feltételezéseit, a keresztmetszeteket, az eseteket és a kombinációkat, majd minden eset és kombináció esetén a reakciókat (a terhek és reakciók összegeivel, amelyek kiegyenlítik egymást), a rúderőket és az elmozdulásokat, valamint minden eset burkológörbéjét. Az {{ui:Exportálás CraftScriptként}} gomb ugyanezt a keretet szkriptként írja ki a PartCraft Szkript munkaterületére, ahol a `frame3d` könyvtári függvény olvasható kódban, lépésenként oldja meg.

## Módszer

A közvetlen merevségi módszer, lineáris és elsőrendű, kivéve ha bejelöli a Másodrendű (P-Delta) lehetőséget: kétcsomópontos gerenda-oszlop elemek normál-, csavaró- és két hajlítási merevséggel (nincs nyírási alakváltozás, nincs vetemedés), a végfeloldások statikus kondenzációval, a rudakra ható terhek a rudak saját alakfüggvényein keresztül. Az eredményeit a klasszikus tankönyvi esetekkel ellenőrizzük (konzolok, egyszerű, befogott és folytonos gerendák, portálkeret, csavart rács, rácsos tartó).

**Másodrendű (P-Delta).** Jelölje be a *Másodrendű (P-Delta)* lehetőséget a Futtatás mellett: minden kombinációt újra megoldunk úgy, hogy a rudak normálerői a deformált kereten hatnak (minden rúd 4 részre van osztva, így a rúd végpontjai közötti hajlítás is számít), amíg a normálerők meg nem állnak. Az eredménysor megadja az iterációk számát és azt, mennyire nőtt az oldalirányú elmozdulás; a nyomatékok, az elmozdulások, a tervezési ellenőrzések és a jelentés ezeket az eredményeket használják. A keret rugalmas kritikus terhe felett a futtatás leáll, és ezt jelzi. Az elemzés rugalmas, kis elfordulású, csak hajlításos, merevségcsökkentés és fiktív terhek nélküli (önmagában nem az AISC közvetlen elemzési módszere); a födémek, falak és merev padlók elsőrendűek maradnak.

**Sajátfrekvenciák (véges elemek).** Az eredmények alatti {{ui:Véges elemek: sajátfrekvenciák}} blokk ugyanazon modell legalacsonyabb módusait keresi a véges elem motorral: a gerendákat a végfeloldásaikkal, a födémeket és falakat lapos négycsomópontos héjelemekként, a merev padlókat és a megtámasztásokat. Válassza ki a módusok számát (3, 6, 10 vagy 20) és a födémelemet (a négycsomópontos héjat vastag vagy vékony födémekhez, vagy a vékony födémelemet), majd nyomja meg a {{ui:Sajátfrekvenciák keresése}} gombot. A táblázat minden módus frekvenciáját Hz-ben, periódusát másodpercben, és az X, Y és Z irányú effektív modális tömegét adja meg a mozgatható tömeg arányában; a {{ui:Megjelenítés a modellen}} gombbal bármely módus kirajzolható, ahogyan az alakváltozott alak. A tömeg az anyag sűrűségének és a térfogatnak a szorzata: a terhek nem adnak tömeget, és a sűrűség nélküli anyagnak nincs tömege. A jelentés (PDF, CSV) tartalmazza a táblázatot. Az elemzés csak rugalmas és kis elmozdulású, és itt nem készül szabványból származó földrengési vagy szélteher. Nem szabványellenőrzés; a mérnök átnézi az eredményeket.

**Válaszspektrum, idősor-elemzés és pushover.** A sajátfrekvenciák alatt további három blokk található, ugyanazt a véges elemes modellt használva. Mindegyiknél a tömeg az anyag sűrűsége plusz a bejelölt esetek lefelé ható terhei, mindegyik a megadott tényezővel szorozva (például az Állandó 1-es, a Hasznos pedig a tömegként figyelembe vett arányban).

A {{ui:Válaszspektrum}} minden módust az megadott spektrumról olvas le (periódus és gyorsulás táblázata, vagy az ASCE 7 alak az SDS, SD1 és TL értékekből; a {{ui:Használja a Szeizmikus blokk értékeit}} gomb ezeket a Szeizmikus blokkból másolja át), és a módusokat CQC, SRSS, a tíz százalékos szabály vagy abszolút összeg szerint kombinálja, majd összeilleszti az X, Y és Z irányokat (100 % + 30 % vagy SRSS). Megadja az alapnyíró erőt, a szintenkénti elmozdulásokat (drift), a rúdvégi erőket, valamint egy módustáblázatot, amely figyelmeztet, ha a felhasznált módusok 90 %-nál kevesebb tömeget hordoznak. Az eredményeket szorozhatja egy tényezővel, vagy a megadott alapnyíró erőre skálázhatja; a blokk ezt az alapnyíró erőt sosem számítja ki magától. Az eredményeknek nincs előjelük.

Az {{ui:Idősor-elemzés}} talajgyorsulást futtat módusos szuperpozícióval (pontos a felvétel pontok közötti egyenes szakaszaira) vagy közvetlen integrálással (Newmark-féle átlagos gyorsulás Rayleigh-csillapítással). A bemenet egy kitalált szinusz vagy impulzus (mindig szintetikusnak jelölve), egy beillesztett felvétel, vagy egy megnyitott szövegfájl (idő és gyorsulás; soronként egy gyorsulás lépésközzel, vagy PEER-jellegű fájl DT= fejléccel; g vagy m/s² egységben). Megadja a tetőelmozdulást és az alapnyíró erőt az idő függvényében, az egyes szintek elmozdulását (drift), és a rúdvégi erők burkológörbéjét. A nagyon hosszú felvételű modellek a felvételt csak a munkamenetre tartják meg.

A {{ui:Pushover}} a tetőt kis lépésekben oldalirányban tolja (az első módushoz hasonló mintázattal vagy egyenletesen), I-szelvényű rudak végein képlékeny csuklókkal. A csukló a képlékeny nyomatéknál megfolyik, amely csökken, ahogy a normálerő nő (a megrajzolt alakból számítva, a lekerekítéseket figyelmen kívül hagyva); a keményedés opcionális, a P-delta opcionális, és elsőként egy gravitációs kombináció alkalmazható. Megadja a teherbírási görbét (alapnyíró erő a tető elmozdulásának függvényében), az első csuklót, valamint minden csukló állapotát és képlékeny elfordulását. A {{ui:Nemlineáris idősor-elemzés futtatása}} gombbal ugyanezek a csuklók futnak az Idősor-elemzés blokk felvételén, kis modelleken. A csuklók csak a rúdvégeken alakulnak ki (ahol csuklót várunk a fesztávon belül, tegyen oda csomópontot); a mindkét végén feloldott rúd nem kap csuklót, a merevítők folyását és kihajlását nem modellezzük; a födémek és falak rugalmasak maradnak; elfogadási kritériumot nem adunk meg. Nem szabványellenőrzés; a mérnök átnézi az eredményeket. A beállítások a modellel együtt mentődnek, a jelentés pedig tartalmazza a táblázatokat.

Még nincs elkészítve: kihajlási elemzés, a hiányzó tömeg korrekciója a válaszspektrumhoz, felvétel-skálázás, csuklók elfogadási kritériumai (a dinamikus válasz fent már megvan), területi és szélterhek automatikus készítése (a födémekre ható földrengési erők itt találhatók: [Betonelemek ellenőrzése és szeizmikus terhek készítése](topic:concrete-and-seismic)), rúdeltolások, csak húzott merevítők. Lásd: [Még nincs elkészítve](topic:not-built-yet).
