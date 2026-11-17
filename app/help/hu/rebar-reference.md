---
title: Vasalási referencia
summary: A DetailCraft által használt rúdméretek, kampóméretek, alakkódok, vágott hosszak és a hajlítási kimutatás oszlopai.
keywords: vasalás, rúdméretek, kampók, hajlítási átmérő, alakkódok, vágott hossz, hajlítási kimutatás, rúdlista, astm a615, aci 318
from: 1583535e
---

## Rúdméretek

Az ASTM A615/A615M 1. táblázata alapján (hüvelyk–font jelölések). A milliméteres és kg/m értékek a közzétett hüvelyk- és lb/ft-értékek pontos átváltásai. A listákban minden méret így szerepel, például: „#5 (15.9 mm)".

| Rúd | Átmérő (mm) | Tömeg (kg/m) | Keresztmetszet (mm²) | Belső hajlítási átmérő | 90°-os kampó szára, külső élektől külső élig (mm) |
|---|---|---|---|---|---|
| #3 | 9.5 | 0.560 | 71 | 6 db | 152 |
| #4 | 12.7 | 0.994 | 129 | 6 db | 203 |
| #5 | 15.9 | 1.552 | 200 | 6 db | 254 |
| #6 | 19.1 | 2.235 | 284 | 6 db | 305 |
| #7 | 22.2 | 3.042 | 387 | 6 db | 356 |
| #8 | 25.4 | 3.973 | 510 | 6 db | 406 |
| #9 | 28.7 | 5.060 | 645 | 8 db | 487 |
| #10 | 32.3 | 6.404 | 819 | 8 db | 548 |
| #11 | 35.8 | 7.907 | 1006 | 8 db | 609 |

A [DetailCraft beállításai](topic:settings) ({{ui:Vasalás}}) részben az **ASTM-rúdnevek** ezeket a rudakat lágy metrikus, A615M szerinti nevükön is megjeleníthetik: #3 = #10, #4 = #13, #5 = #16, #6 = #19, #7 = #22, #8 = #25, #9 = #29, #10 = #32, #11 = #36 (ugyanazok a rudak; az ACI 315-99 1. táblázata mindkettőt felsorolja).

### Metrikus rudak (BS 4449)

| Rúd | Átmérő (mm) | kg/m | Min. hajlítási sugár r (mm) | Kampószár = végkiállás P (mm) |
|---|---|---|---|---|
| H8 | 8 | 0.395 | 16 | 115 |
| H10 | 10 | 0.617 | 20 | 120 |
| H12 | 12 | 0.888 | 24 | 125 |
| H16 | 16 | 1.578 | 32 | 130 |
| H20 | 20 | 2.466 | 70 | 190 |
| H25 | 25 | 3.853 | 87 | 240 |
| H32 | 32 | 6.313 | 112 | 305 |
| H40 | 40 | 9.865 | 140 | 380 |

A tömeg a névleges keresztmetszet és 7850 kg/m³ szorzata. A sugár és a végkiállás a BS 8666:2020 minimális méreteinek minimumai (a minimális méretek táblázata); a korábbi átmérő 2r. A BS-rudas alapok kampószára P, vágott hosszuk pedig az alábbi BS 8666-képletek szerint kapják. Ha a beállításokban az európai acélt választja, az új alapok H16-os hálózatokkal és H20-as indítórudakkal indulnak C30/37 betonban.

## Kampók

ASTM-rudak: szabványos 90°-os kampók az ACI 318-19 25.3.1. táblázata szerint: belső hajlítási átmérő 6 db a #3–#8 rudaknál és 8 db a #9–#11 rudaknál, a hajlítás után 12 db egyenes szakasszal. A kampószár külső élektől külső élig mérve a hajlítási átmérő fele + db + 12 db.

Ha egy hálózati rúd kampója nem fér el az alap betonfedésen belüli mélységében, a DetailCraft lerövidíti a szárat, hogy beleférjen, és figyelmeztetést ír ki.

## Alakok

A DetailCraft három alakot tárol. A hajlítási kimutatás ezeket a DetailCraft kódjaiként, ACI 315 típusokként vagy BS 8666 alakkódokként írja ki: válassza a **Hajlítási kimutatás alakkódjai** lehetőséget a [DetailCraft beállításai](topic:settings) ({{ui:Vasalás}}) részben.

| Kód | Alak | Méretek |
|---|---|---|
| S | Egyenes | A = hossz |
| L | Egy 90°-os hajlítás | A = főszár, B = kampószár, mindkettő külső élektől külső élig |
| U | Két 90°-os hajlítás ugyanazon az oldalon | A = közép, B és C = a két szár, külső élektől külső élig |

Az {{ui:Végkampók}} bekapcsolt hálózati rudak U alakúak, kikapcsolva S. A {{ui:Kampó alul}} bekapcsolt indítórudak L alakúak, kikapcsolva S.

| DetailCraft | BS 8666:2020 | ACI 315-99 (10. ábra) |
|---|---|---|
| S | 00, L = A | nincs típusszám |
| L | 11, L = A + B − 0.5r − d | nincs típusszám: az ábrán nincs egykampós rúd |
| U | 21, A és C a szárak, B a közép: L = A + B + C − r − 2d | 2. típus, A és G kampók, B egyenes |

BS 8666 vagy ACI 315 kódok esetén a kimutatás A, B és C oszlopai az adott szabvány betűzését követik (az U közepe B).

## Vágott hossz

BS 4449 rudaknál a vágott hossz a rúd alakkódjának BS 8666-képlete szerint számítódik (lásd fent). ASTM-rudaknál a rúd középvonalának pontos hossza: az egyenes részek plusz a hajlítások körívei, amelyek sugara a hajlítási átmérő fele plusz a rúdátmérő fele. Nem táblázatos hajlításlevonásokból számítódik, ezért néhány milliméterrel eltérhet attól a kimutatástól, amely ilyet használ.

## Elrendezés

- Alsó hálózat: az L mentén futó rudak alkotják az alsó réteget, a B mentén futók ezekre kerülnek. Mindegyik csoport egyenletesen oszlik el az alap betonfedésen belül, a megadott vagy annál sűrűbb távolsággal, legalább két rúddal.
- Indítórudak: az L és B mentén futó rudak rácsa a megadott távolságokkal, az alap közepére igazítva, a hálózaton állva, és a megadott kiállással a felső él fölé nyúlva. Minden kampó kifelé mutat.

## Ellenőrzések

| Ellenőrzés | Szabály | Eredmény |
|---|---|---|
| Hely a rudaknak | A két oldali betonfedés hagy helyet a rudaknak | Nem fér el: elutasítva |
| Mélység két rétegnek | A mélység mínusz két betonfedés befogadja mindkét hálózati réteget | Elutasítva, ha nem |
| Az indítórudak elférnek | Az indítórács a betonfedésen belül fér el | Elutasítva, ha nem |
| Tiszta távolság | Legalább a 25.4 mm és a db közül a nagyobb (ACI 318-19 25.2.1; az adalékanyag méretét nem ellenőrzi) | Figyelmeztetés |
| Kampómélység | A kampószár befér a betonfedésen belüli mélységbe | Figyelmeztetés, a szár lerövidül |
| Indítókampók | A kampók a betonfedésen kívül maradnak | Figyelmeztetés |

## Hajlítási kimutatás oszlopai

A {{ui:Hajlítási kimutatás}} fül és a CSV-fájlja ezeket az oszlopokat tartalmazza: Rúdjel, Méret, Alak, A (mm), B (mm), C (mm), Darabszám, Vágott hossz (mm), Teljes hossz (m), kg/m, Darabsúly (kg), Teljes súly (kg), Felhasználás. Az utolsó sor a darabszámot, a hosszt és a súlyt összesíti.
