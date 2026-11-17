---
title: Téglalap keresztmetszetű betonoszlop vasalása
summary: Kidolgozott példa egy téglalap keresztmetszetű betonoszlop részletezésére a DetailCraftban: elhelyezés, hosszanti vasak és kötőszálak megadása, az ellenőrzések, a fölötte lévő átfedés és a vasjelölések elolvasása, valamint a műhelylap megrajzolása.
keywords: betonoszlop, téglalap oszlop, oszlopvasalás, hosszanti vasak, függőleges vasak, kötőszálak, kötőkengyelek, átfedés, toldás, indító vasak, oszlop acélarány, 1 százalék, 8 százalék, kötőszál-osztás, ACI 318-19 25.7.2, EN 1992-1-1 9.5, gyártmányrajz, vasjelölés, 8C1, 3C2
from: aee2a3ca
---

Ez a témakör egy négyzet keresztmetszetű oszlopot visz a semmiből egy ellenőrzött, megrajzolt és kimutatásba foglalt részletig. A gerendákra, födémekre és falakra vonatkozó általános szabályok a [Vasbeton részletezése](topic:reinforced-concrete) témakörben vannak; ez az oszlop oldala, reprodukálható számokkal.

:::warning
A DetailCraft a megadott vasakat részletezi. Nem tervezi meg azokat. Az alábbi vasak a példa kiindulási értékei, nem ajánlás: a tervező mérnök választja meg a méretet, a számot és a kiosztást.
:::

## Mi az oszlop itt

Egy téglalap keresztmetszetű oszlopnak van szélessége (helyi x mentén) és keresztmetszeti mélysége (helyi y mentén), a kötőszálakig mért tiszta betonfedése, hosszanti vasai minden oldalon, és zárt kötőszálai. Forgatásakor az egész elfordul; a lapok „szélességi lap” és „mélységi lap” maradnak.

- A hosszanti vasakat szélességi lapon és mélységi lapon lévő számként adja meg. A sarokvasak mindkettőbe beleszámítanak, így 3 és 3 esetén 8 vas van; 4 és 4 esetén 12.
- A kötőszálak zárt téglalapok, két horoggal egy sarkon, 135°-os vagy 90°-os hajlítással. Az első kötőszál egy megadott távolságra van a padló felett (és a következő alatt), a véglezónákban sűrűbb, a közepén ritkább az osztás.
- Mit csinálnak a vasak felül: továbbfutnak és a fölöttük lévő vasakkal átfednek, 90°-os horoggal a padlóba fordulnak, vagy a felső szint alatt végződnek.

## A kidolgozott oszlop

400 × 400 mm-es oszlop, 3600 mm a fölötte és alatta lévő födém között, #8-as hosszanti vasak, #3-as kötőszálak, 40 mm tiszta betonfedés, f'c 28 MPa, fy 420 MPa, ACI 318-19, belső.

1. Nyissa meg a {{ui:Beton}} lapot, és állítsa be a rácsvonalakat és a szinteket, amelyeken az oszlop áll (bal panel).
2. A {{ui:Hozzáadás rács szerint}} részben válassza a {{ui:Betonoszlop}} lehetőséget, jelölje ki a rácspontot és a két szintet, állítsa a {{ui:Szélesség (mm)}} és a {{ui:Keresztmetszeti mélység (mm)}} értékét 400-ra, majd válassza a {{ui:Hozzáadás}} gombot.
3. A {{ui:Tulajdonságok}} panelen állítsa be:
   - {{ui:Tiszta betonfedés (mm)}} 40;
   - {{ui:Hosszanti vasak}} #8, {{ui:Rudak egy szélességi lapon}} 3, {{ui:Rudak egy mélységi lapon}} 3;
   - {{ui:Kötőszálak}} #3, {{ui:Horgok}} 135°, {{ui:Osztás közöttük (mm)}} 300, {{ui:Végzóna hossza (mm)}} 600, {{ui:Osztás a végzónákban (mm)}} 150, {{ui:Első a felülettől (mm)}} 50;
   - {{ui:Felső rudak}} {{ui:Továbbvezetés és átfedés a fölötte lévő rudakkal}}.

Minden módosítás egy visszavonási lépés.

### Mit kap

| Rész | Eredmény |
|---|---|
| Hosszanti vasak | 8 db #8 (3 × 3-as gyűrű), mindegyik 4375 mm hosszú: a 3600 mm-es oszlop plusz 775 mm átfedés fölötte |
| Átfedés | 757 mm szükséges nyomott átfedéshez (ACI 318-19 25.5.5.1, fy 420), 775 mm biztosítva: a szükséges érték a következő 25 mm-re felfelé kerekítve |
| Kötőszálak | 17 db #3, mindegyik kb. 1359 mm vágási hosszal, 150 mm osztással a két 600 mm-es véglezónában és 300 mm osztással között |
| Acélarány | 2,5% a bruttó keresztmetszetből (határok: 1% és 8%, ACI 318-19 10.6.1.1) |
| A vasak tiszta távolsága | 112 mm (legalább 40 mm kell, ACI 318-19 25.2.3) |
| Kötőszál-osztás | 300 mm (megengedett 400 mm: a 16 vasátmérő, a 48 kötőszál-átmérő és a kisebbik oldal közül a legkisebb, ACI 318-19 25.7.2.1) |
| Kötőszál mérete | #3 (megengedett egészen 9,5 mm-ig, ACI 318-19 25.7.2.2) |

Mindezek az elem {{ui:Ellenőrzések}} listájában vannak; az átfedés az {{ui:Átfedések és bekötés}} listában is megjelenik.

## Keresztkötőszálak

Egy perem-kötőszállal csak a sarokvasak vannak megtartva. Az ACI 318-19 25.7.2.3 engedi, hogy egy lap közepén lévő vas támasz nélkül maradjon, ha 150 mm tiszta távolságon belül van egy sarokvastól. A fenti példában, 3 vas esetén ez teljesül. 4 vagy több vas egy lapon esetén nem, és a DetailCraft ezt figyelmeztetésként jelzi ({{ui:Ellenőrzések}} és Problémák): „keresztkötőszálak” szükségesek. **A keresztkötőszálakat még nem rajzolja meg a program**: vegye fel őket kézzel a rajzon, vagy válasszon kevesebb vasat a lapon.

EN 1992-1-1 szerint a DetailCraft ellenőrzi a vas méretét (legalább 8 mm), a vasak számát (legalább 4), az acélterületet (a keresztmetszet 0,2%-a és 4%-a között), a tiszta távolságot és a kötőszál-osztást (9.5.2 és 9.5.3).

## Az átfedés, az alap és az alatta lévő oszlop

- Ha **a modell egy alapja áll az oszlop alatt**, az oszlop az alap indító vasaival fed át, és ezt az átfedést is ellenőrzik.
- Ha **egy másik oszlop áll alatta** a modellben, az annak vasaival fed át.
- Saját {{ui:Átfedés hossza (mm, 0 = szükség szerint)}} értéket adhat meg a felülíráshoz; a szükségesnél rövidebb probléma, és a táblázatban * jel jelzi.
- Alapértelmezésben nyomott átfedések vannak (a beállításokban: {{ui:Nyomott átfedés}}); válassza a {{ui:Húzott átfedés}} lehetőséget, ha az oszlop húzásnak lehet kitéve.

## Jelölések, kimutatás és a műhelylap

Az azonos vasak egy jelölést osztanak meg: a fölötte lévő oszlop hosszanti vasai 8C1, a kötőszálai 17C2 (először a szám, utána a C betű, amely az oszlopot jelzi, és a sorszám). Ezek a {{ui:Hajlítási kimutatás}} lapon jelennek meg, a vágási hosszal és a súllyal, valamint a {{ui:Kimenet}} › {{ui:Továbbiak}} › {{ui:Hajlítás}} alatti CSV-ben.

Válassza a {{ui:Gyártmányrajz}} gombot az oszlop mellett: egy lap az oszlop homlokzatával (minden vas, a jelölésük, a kötőszál-zónák és az átfedés méretezve), és a középen egy metszet, utána a vashajlító lap. Mentse a {{ui:Ez a lap PDF-ként}} lehetőséggel.

## Mit nem tesz ez

- Kerek oszlopok és spirálok, valamint nem téglalap keresztmetszetű oszlopok: még nincsenek elkészítve.
- Sarok- és keresztkötőszálak a keresztmetszeten belül, valamint szeizmikus részletezés (ACI 318-19 18. fejezet): még nincsenek elkészítve.
- Tetszőleges helyen vagy lépcsőzve történő toldások: minden vas egy metszetben fed át.
- Hogy a vasak elegendők-e a teherhez: az a mérnöki tervezés dolga.
