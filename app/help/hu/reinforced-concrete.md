---
title: Vasbeton gerendák, oszlopok, födémek és falak részletezése
summary: Betongerendák, oszlopok, födémek és falak hozzáadása rács szerint, rudak, kengyelek és kötőkengyelek megadása, átfedések és bekötések ellenőrzése az ACI 318-19 vagy az EN 1992-1-1 szerint, valamint gyártmányrajzok és hajlítási lapok készítése.
keywords: vasbeton, vasalás, gerenda, oszlop, födém, fal, kengyelek, kötőkengyelek, kampók, átfedések, átfedési hossz, bekötés, fejlesztési hossz, ld, ldh, lbd, betonfedés, távolság, keretvasak, nyílások, hálózatok, rúdjelek, hajlítási kimutatás, bbs, gyártmányrajz, ACI 318, EN 1992, Eurocode 2, IfcReinforcingBar, IFC-importálás
from: 3835b7ec
---

A nézet alatti {{ui:Beton}} fül a betongerendák, oszlopok, födémek és falak rúdjait részletezi. Ön megadja a méreteket és a rudakat; a DetailCraft elhelyezi és megszámozza az összes rudat, ellenőrzi az átfedéseket, a bekötést, a betonfedést és a távolságokat az azokat megadó szakasz szerint, majd megrajzolja őket.

:::warning
A DetailCraft a megadott rudakat részletezi. Nem tervezi meg azokat. Minden eredmény mérnöki ellenőrzésre szolgál.
:::

## A Beton fül megnyitása

Válassza a nézet alatti {{ui:Beton}} fület. Szalagos elrendezésben a {{ui:Beton}} a {{ui:Modellezés}} fülön van, a {{ui:Alap}} mellett. A rajzolási stílus parancssorában írja be: {{cmd:CONCRETE}}.

## Elem hozzáadása rács szerint

A betonelemek a modell rácsvonalaira és szintjeire kerülnek, ezért ezeket előbb állítsa be (bal panel).

1. A {{ui:Hozzáadás rács szerint}} részben válassza ki az {{ui:Elem}} típusát: {{ui:Betongerenda}}, {{ui:Betonoszlop}}, {{ui:Födém}} vagy {{ui:Fal}}.
2. Adja meg a rácsvonalakat és a szinteket:
   - a gerenda egyik rácsmetszéspontból a másikba fut, felső széle a szinten van;
   - az oszlop egy metszéspontban áll, egyik szinttől a másikig;
   - a födém a két számozott és két betűs rácsvonal közötti téglalapot tölti ki, felső széle a szinten van;
   - a fal a középvonala mentén fut egyik metszéspontból a másikba, egyik szinttől a másikig.
3. Adja meg a méretet, majd válassza a {{ui:Hozzáadás}} gombot. Az elem kijelölődik, mezői pedig a {{ui:Tulajdonságok}} panelen nyílnak meg.

Minden elem kezdőértékű rudakkal indul. Ezek kiindulási értékek, nem tervezési adatok: cserélje le a mérnök adataira.

## A rudak módosítása

Jelölje ki az elemet (a nézetben vagy a {{ui:Beton}} fülön lévő nevével). A {{ui:Tulajdonságok}} panel a következőket mutatja:

| Elem | Amit megad |
|---|---|
| Gerenda | Szélesség, magasság, tiszta betonfedés; felső és alsó rudak (méret, darabszám, egyenes vagy 90°-os kampó a végeken); oldalsó rudak; kengyelek (méret, 135° vagy 90° kampók, az első távolsága a támasz felületétől, a végzóna hossza és távolsága, a közbenső távolság); támaszhosszak; átfedési hosszak |
| Oszlop | Szélesség, átmérő keresztirányban, elforgatás, betonfedés; hosszanti rudak minden oldalon; kötőkengyelek a kengyelekhez hasonlóan; a rudak viselkedése a tetején (átfedés a fölötte lévő oszloppal, kampó a padlóba, vagy megállás) |
| Födém | Vastagság, méret, felső, betonfedések; alsó és felső hálózat mindkét irányban (méret és távolság); U-rudak a szélek körül; keretvasak; nyílások |
| Fal | Vastagság, betonfedés, egy vagy két réteg, vízszintes és függőleges rudak, U-rudak a végeken, a függőleges rudak átfedése a fölötte lévővel vagy annak hiánya, keretvasak, nyílások |

Minden módosítás egy visszavonási lépés. A nem megépíthető módosítást a rendszer elutasítja, és az állapotsor megmondja az okát, például: „A nyílás a betonfedéssel nem fér bele az elembe.”

A kengyelek és kötőkengyelek zártak, mindkét kampójuk egy sarokban van. A gerenda rudai a végeiknél az oszlop távoli felületéig futnak, a betonfedést levonva. Ha nincs oszlop, adja meg a {{ui:Alátámasztás hossza az elején (mm)}} és a végén lévő értéket.

## Átfedések és bekötés

A {{ui:Rúd szabványos hossza (mm)}} (kezdetben 12 000) hosszabb rudak egyenlő hosszúságú darabokra vágódnak, átfedve.

A {{ui:Átfedések és bekötés}} táblázat minden átfedést és bekötést felsorol: mire van szükség, a szakaszt és annak feltételeit, valamint azt, hogy mit tartalmaz a részlet.

- Az átfedési hossz 0 azt jelenti: „szükség szerint”. Ez az a hossz, amelyet a szabvány előír, 25 mm-re felfelé kerekítve.
- Írja be a saját átfedési hosszát, ha azt szeretné használni. Ha rövidebb a szükségesnél, az probléma (lásd lent), és a táblázatban * jelöli.
- A bekötést a támasz felületétől mérjük a rúd végéig a támaszon belül. Ismeretlen támaszú gerendánál ezt jelzi a rendszer, ahelyett hogy ellenőrizné.
- Az alapon álló oszlop az alap indítórúdjaival, egy másik oszlopon pedig annak rúdjaival fed át: ezek átfedését is ellenőrizzük.

**ACI 318-19** (SI): húzott egyenes rudak 25.4.2.3 (a táblázat, ψt, ψe, ψg, λ), szabványos kampók 25.4.3.1 (ψr 1,6 és ψo 1,25, hacsak nincs más ismert), nyomott rudak 25.4.9.2, húzott átfedések 25.5.2.1 (B osztály, vagy a beállításokban megadott A osztály), nyomott átfedések 25.5.5.1.

**EN 1992-1-1**: bekötés 8.4.4, az fbd a 8.4.2 szerint (jó vagy gyenge tapadás), átfedések 8.7.3, α6 minden egy keresztmetszetben átfedett rúdra. A γc, γs és αct az ajánlott értékekkel indul; állítsa be a nemzeti melléklet értékeit.

## Ellenőrzések

Minden sikertelen ellenőrzés megjelenik a héj Problémák panelén (forrás: {{ui:Vasalási ellenőrzések}}), és az elem {{ui:Ellenőrzések}} listájában:

| Ellenőrzés | ACI 318-19 | EN 1992-1-1 |
|---|---|---|
| Betonfedés | 20.5.1.3.1 táblázat, kitettség szerint | Tapadási minimum, 4.2 táblázat (a tartóssági betonfedést Önnek kell megadnia) |
| Rudak tiszta távolsága | 25.2.1 (gerenda, födém, fal), 25.2.3 (oszlop) | 8.2 (2) |
| Kengyelek távolsága | 9.7.6.2.2 | 9.2.2 (6) |
| Gerenda minimális acélja | 9.6.1.2 | 9.2.1.1 (1) |
| Gerenda oldalsó rudai 900 mm-nél mélyebb gerendánál | 9.7.2.3 | nincs ellenőrizve |
| Oszlop acélaránya, rudak száma | 10.6.1.1, 10.7.3.1 | 9.5.2 |
| Kötőkengyelek: távolság, méret, keresztkötések | 25.7.2.1, 25.7.2.2, 25.7.2.3 | 9.5.3 (1), (3), (4) |
| Födém távolsága, minimális acél | 7.7.2.3, 24.4.3.2 | 9.3.1.1 |
| Fal távolsága, minimális acél, két réteg | 11.7.2.1, 11.7.3.1, 11.6.1, 11.7.2.3 | 9.6.2, 9.6.3 |
| Átfedések, bekötés | ahogy fent | ahogy fent |

Az adalékanyag mérete nem ismert, ezért a tiszta távolságot annak figyelembevétele nélkül ellenőrizzük.

## Nyílások, keretvasak és széli rudak

Válassza a {{ui:Nyílás hozzáadása}} lehetőséget egy kijelölt födém vagy fal alatt, és adja meg a helyét és méretét. A nyílást keresztező rudak a szélétől betonfedésnyi távolságra megállnak. A keretvasak mindkét oldalon hozzáadódnak, ugyanabban a rétegben, az elvágott rudak területének felét viszik, és a nyílás mögött egy bekötési hosszal túlnyúlnak. Ez a DetailCraft kezdő szabálya, nem szabványi előírás: a {{ui:Keretvasak}} beállításait cserélje le a mérnök adataira. Sarokrudak nem kerülnek hozzáadásra.

A födém szabad szélei körüli és a fal végein lévő U-rudak szárai egy átfedési hossz hosszúak.

## Rúdjelek és a hajlítási kimutatás

Az azonos rudak közös jelet kapnak: az alapok F jelet (5F1), a gerendák B, az oszlopok C, a födémek S, a falak W jelet kapnak (7B1, 8C1, 4S2). A {{ui:Hajlítási kimutatás}} fül és annak CSV-fájlja most a szerkezet minden rúdját felsorolja, az alapokkal kezdve. A {{ui:Kimenet}} › {{ui:Továbbiak}} › {{ui:Hajlítás}} lehetőséggel tölthető le.

## Gyártmányrajzok

Válassza a {{ui:Kimenet}} › {{ui:Továbbiak}} › {{ui:Vasalási rajzok}} lehetőséget, a {{ui:Vasalási rajzok}} gombot a {{ui:Beton}} fülön, vagy az egyes elem melletti {{ui:Gyártmányrajz}} gombot. Minden elem kap egy lapot egy homlokzattal (födém esetén alaprajzzal), amely minden rudat és jelét, a kengyel- és kötőkengyel-zónákat és a méretezett átfedéseket mutatja, továbbá egy metszetet a közepén. Ezt követően a hajlítási lapok felsorolják az összes jelet az alakjuk vázlatával, méreteikkel, darabszámukkal, vágott hosszukkal és súlyukkal.

A lapok minden alkalommal a modellből készülnek, és az ablak nyitva tartása alatt minden módosítás után újra: a címtáblázat tartalmazza a modellhivatkozást. Mentse az {{ui:Ez a lap PDF-ként}} vagy az {{ui:Összes lap PDF-ként}} parancsot.

## Rudak IFC-fájlból

Az {{ui:Fájl}} › {{ui:IFC importálása}} most beolvassa az IfcReinforcingBar elemeket: a középvonala mentén végighúzott korong egyenes szárakként és hajlításokként jön vissza, átmérőjével, jelével és az azt tartalmazó elemmel. A rudak a beolvasás szerinti formájukban maradnak (nem alakulnak át gerenda- vagy födémszabályokká), megjelennek a nézetben, szerepelnek a hajlítási kimutatásban, és az IFC-exporttal újra kiíródnak. Az importjelentés megmondja, hány rudat olvasott be, milyen méretűek, hány elemben vannak, valamint hogy mi maradt ki és miért.

Az adott fájl azon gerendája, oszlopa, födéme vagy fala, amely rudakat tartalmaz, vagy amelynek anyaga beton, nem minősül acélnak; ezt a jelentés kiírja. A DetailCraft saját IFC-exportja minden betonelem definícióját tartalmazza, így az önmagaként tér vissza, rudjai pedig belőle készülnek újra.

:::note
Szerkezettervező program saját (nem IFC) fájljainak olvasása nincs megvalósítva: exportálja IFC-formátumba.
:::

## Az IFC-export

A betongerendák, oszlopok, födémek (nyílásokkal) és falak IfcBeam, IfcColumn, IfcSlab és IfcWall elemekként kerülnek ki. Mindegyikhez hozzárendelve a rudjai IfcReinforcingBar elemekként (főrudak, ligatúrák a kengyelekhez és kötőkengyelekhez, széli rudak). Minden rúd a középvonala mentén végighúzott korong, valódi ívekkel a hajlításoknál, jelével és vágott hosszával együtt.
