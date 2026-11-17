---
title: Acél rúdelemek ellenőrzése tervezési előírás szerint
summary: Készítsen terhelési kombinációkat az ASCE 7 vagy az EN 1990 szerint, ellenőrizze minden acél I-szelvényt az AISC 360 vagy az EN 1993-1-1 szerint, és nézze meg, a teherbírás mekkora részét használja ki az egyes rúdelemek. Segédeszköz, amíg egy mérnök át nem nézte.
keywords: tervezés, tervezési ellenőrzés, acéltervezés, kihasználtság, kihasználás, teherbírás, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, terhelési kombinációk, LRFD, nemzeti melléklet, kihajlás, oldalirányú kifordulás, nyírás, hajlítás, kölcsönhatás, szerkezeti, hallgatók, mérnök
from: 66b6d545
---

Az analízis futtatása után a {{ui:Tervezési ellenőrzések}} blokk az {{ui:Analízis}} lapon minden acél rúdelemhez ítéletet ad: a legrosszabb kombináció mekkora részét használja ki a teherbírásának.

:::warning
Ez **segédeszköz, amíg egy mérnök át nem nézte**. Csak elsőrendű erőket használ (másodrendű hatások nélkül), nem ellenőriz csavarodást, nem vizsgálja a karcsú (4. osztályú) részeket, hegesztett szelvényeket és kapcsolatokat, és amit nem tud ellenőrizni, azt kihagyja, és ezt jelzi. Nem helyettesíti a mérnöki ellenőrzést, az eredményei nem jelentenek pecsétet.
:::

## Előírás kiválasztása

A {{ui:Tervezési előírás}} a modellel együtt mentődik; két család közül választhat:

- **ASCE 7 + AISC 360** (USA, LRFD): az ASCE 7-16 §2.3.1 terhelési kombinációi és az ANSI/AISC 360-16 rúdellenőrzései.
- **EN 1990 + EN 1993-1-1** (Eurocode): az EN 1990 kombinációi (6.10 egyenlet, vagy 6.10a és 6.10b) és az EN 1993-1-1 rúdellenőrzései.

Ezután válassza ki az {{ui:Acélminőség}}-et (A992, A36 és mások; vagy S235-től S450-ig, 40 mm felett a kisebb folyáshatárral).

## Kombinációk készítése

Adjon minden terhelési esetnek **típust** (állandó, hasznos, tetőhasznos, hó, szél, földrengés) az esetlistában, majd nyomja meg a {{ui:Kombinációk készítése}} gombot. A DetailCraft az előírás kombinációit a saját eseteinek kombinációiként írja meg: minden teherbírási kombinációt, amelyet az előírás a megadott típusokra felsorol, és a lehajlás miatti használhatósági kombinációkat. A kézzel beírt kombinációk megmaradnak; azokat nem ellenőrzi az előírás. A {{ui:Egyéb}} típusú eset nem kerül kombinálásra.

Eurocode esetén a tényezők az EN 1990 A1 mellékletének **ajánlott értékei** (γG 1.35, γQ 1.5, a ψ értékek a hasznos-, hó- és szélterhekhez), valamint az EN 1993-1-1 értékei (γM0 = γM1 = 1.0). Az országos nemzeti melléklet néhányat megváltoztat: nyissa meg a {{ui:Nemzeti melléklet értékei}} részt, írja be a sajátját, és készítse el újra a kombinációkat. Ezek a modellbe mentődnek.

## Rúdelemek ellenőrzése

Nyomja meg a {{ui:Rúdelemek ellenőrzése}} gombot. Minden acél I-szelvényre a táblázat megmutatja a **kihasználtságát** (igény a teherbíráshoz képest: 100% a határ), azt, hogy megfelel-e, melyik ellenőrzés az irányadó, és melyik kombinációban. A rúdelemek színezve jelennek meg a modellen: kék a kevéssé használt, zöld nagyjából a fele, okker a határ közelében, piros a határ felett, szürke a nem ellenőrzött. Kattintson egy rúdelem nevére a kijelöléséhez.

Az ellenőrzések, és az egyes ellenőrzésekre vonatkozó szakasz (ezek a jelentésben is szerepelnek):

- húzás, nyomás hajlítási és csavarodási kihajlással, hajlítás mindkét tengely körül oldalirányú kifordulással, nyírás, és hajlítás normálerővel;
- a használhatósági kombinációk lehajlása a beállított {{ui:Lehajlási határ}} szerint (kezdetben L/360; ez projektérték, nem előírásérték).

**Hosszak.** A megtámasztott hossz minden elemzett darab egy hányada (1 = nincs megtámasztva); a megtámasztásokat a kezdettől egyenlő távolságra veszi. A K-tényezők a kihajláshoz szorozzák a hosszt. Ahol másik rúdelem csatlakozik, ott a rúdelem darabokra oszlik, és minden darabot a saját hosszán ellenőriz, mint ott megtámasztottat.

## Mi nincs ellenőrizve

Egy rúdelem **nincs ellenőrizve** jelzést kap, az indokkal együtt, a szám helyett, ha szelvénye nem olyan I-szelvény, amelyet az ellenőrzések ismernek (csövek, szögacélok, U-idomok), ha egyedi (hegesztett) szelvény, vagy ha egy része hajlításban karcsú (AISC) vagy 4. osztályú (Eurocode). Egy karcsú rész nyomásban kizárja a nyomási ellenőrzéseket, és a rúdelem *megfelel, részben ellenőrizve* jelzést kap. Szintén nincs elkészítve: a másodrendű hatások, a csavarodás, a nyírási kihajlás hajlítással együtt, a kapcsolatok, a fáradás, a tűz és a földrengési részletszerkesztés. A betonelemekre és a földrengési terhekre [saját ellenőrzések](topic:concrete-and-seismic) vonatkoznak. Lásd: [Még nincs elkészítve](topic:not-built-yet).

## A jelentés

A {{ui:Jelentés (PDF)}} és a {{ui:Jelentés (CSV)}} a tervezési táblázatokkal bővül, miután ellenőrzött: az előírás kiadásai, a beállítások és a nemzeti melléklet értékei, a kihasználtság rúdelemenként, minden felhasznált szakasz, valamint minden rúdelemre az egyes ellenőrzések igénye, teherbírása és kihasználtsága az irányadó kombinációban.
