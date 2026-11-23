---
title: Acélrúdelemek ellenőrzése tervezési előírás szerint
summary: Teherkombinációk készítése ASCE 7 vagy EN 1990 szerint, acél I-szelvények ellenőrzése AISC 360 vagy EN 1993-1-1 szerint, és annak megmutatása, hogy az egyes rúdelemek teherbírásuknak mekkora részét használják ki. Segédeszköz, amíg mérnök át nem nézte.
keywords: tervezés, tervezési ellenőrzés, acélszerkezet-tervezés, kihasználtság, teherbírás, AISC 360, ASCE 7, EN 1990, EN 1993-1-1, Eurocode, teherkombinációk, LRFD, nemzeti melléklet, kihajlás, kifordulás, nyírás, hajlítás, kölcsönhatás, szerkezeti, hallgatók, mérnök
from: 15685c4e
---

Az elemzés futtatása után az {{ui:Analysis}} lap {{ui:Design checks}} blokkja minden acélrúdelemhez ítéletet ad az erőiből: mekkora részét használja ki a legrosszabb kombináció a teherbírásának.

:::warning
Mérnök általi átnézésig segédeszköz. Csak elsőrendű erőket használ, másodrendű hatások nélkül, nem ellenőriz csavarást, karcsú (4. osztályú) részeket, hegesztett szelvényeket és csomópontokat, és amit nem tud ellenőrizni, azt kihagyja, és ezt jelzi. Nem helyettesíti a mérnöki ellenőrzést, az eredményei pedig nem jelentenek hitelesítést.
:::

## Előírás kiválasztása

Az {{ui:Design code}} a modellel együtt mentődik; két család közül lehet választani:

- **ASCE 7 + AISC 360** (USA, LRFD): az ASCE 7-16 §2.3.1 teherkombinációi és az ANSI/AISC 360-16 rúdelem-ellenőrzései.
- **EN 1990 + EN 1993-1-1** (Eurocode): az EN 1990 kombinációi (6.10 egyenlet, vagy 6.10a és 6.10b) és az EN 1993-1-1 rúdelem-ellenőrzései.

Ezután válassza ki a {{ui:Steel grade}} értéket (A992, A36 és mások; vagy S235-től S450-ig, 40 mm felett a kisebb folyáshatárral).

## Kombinációk készítése

Minden teheresethez adja meg a **típusát** (állandó, hasznos, tetőre ható hasznos, hó, szél, földrengés) a teheresetek listájában, majd nyomja meg a {{ui:Make combinations}} gombot. A DetailCraft az előírás kombinációit a teheresetei kombinációiként írja fel: az összes teherbírási kombinációt, amelyet az előírás a megadott típusokra felsorol, és a használhatósági kombinációkat a lehajláshoz. Az Ön által beírt kombinációk megmaradnak; azokat nem ellenőrzi az előírás szerint. A {{ui:Other}} típusú teheresetek nem kerülnek kombinálásra.

Eurocode esetén a tényezők az EN 1990 A1 melléklet **ajánlott értékei** (γG 1,35, γQ 1,5, a ψ-értékek a hasznos-, hó- és szélterheknél) és az EN 1993-1-1 értékei (γM0 = γM1 = 1,0). Az ország nemzeti melléklete némelyiket megváltoztatja: nyissa meg a {{ui:National Annex values}} részt, írja be a saját értékeit, és készítse el újra a kombinációkat. Ezek a modellbe mentődnek.

## Rúdelemek ellenőrzése

Nyomja meg a {{ui:Check members}} gombot. Minden acél I-szelvényhez a táblázat megmutatja a **kihasználtságát** (igénybevétel a teherbíráshoz viszonyítva: 100% a határ), azt, hogy megfelel-e, melyik ellenőrzés az irányadó, és melyik kombináció. A rúdelemek a modellen színezve jelennek meg: a kék kevéssé terhelt, a zöld nagyjából a fele, az okker a határ közelében van, a piros a határ felett, a szürke nincs ellenőrizve. A rúdelem nevére kattintva jelölheti ki.

Az ellenőrzések, és az előírási pont, amelyet mindegyik követ (a jelentésben is felsorolva):

- húzás, nyomás hajlító- és csavarókihajlással, hajlítás mindkét tengely körül kifordulással, nyírás, és hajlítás normálerővel;
- a használhatósági kombinációk lehajlása a beállított {{ui:Deflection limit}} értékhez képest (kezdésként L/360; ez projektérték, nem előírási érték).

**Hosszak.** A megtámasztott hossz az elemzett darab hányadaként adható meg (1 = nincs megtámasztva); a megtámasztásokat az elejétől kezdve egyenlő közönnel veszi a rendszer. A K-tényezők a hosszal szorzódnak a kihajláshoz. Ahol másik rúdelem csatlakozik, a csomópont felosztja a rúdelemet, és minden darab a saját hosszán, ott megtámasztottként ellenőrződik.

## Mit nem ellenőriz

A rúdelem **nem ellenőrzött** állapotot kap, az okkal együtt, szám helyett, ha a szelvénye nem olyan alak, amelyet az ellenőrzések ismernek (szögacélok, csatornák; a téglalap és kör keresztmetszetű csövek akkor ellenőrződnek, ha a falvastagságuk kompakt), ha egyedi (hegesztett) alak, vagy ha valamelyik rész hajlításban karcsú (AISC) vagy 4. osztályú (Eurocode). A nyomásban karcsú rész kihagyja a nyomási ellenőrzéseket, és a rúdelem állapota *megfelel, részben ellenőrizve* lesz. A csomópontok hegesztései [saját ellenőrzéssel](topic:weld-checks) rendelkeznek. Szintén nincs elkészítve: a másodrendű hatások, a csavarás, a nyírási kihajlás hajlítással együtt, a csavarozott kapcsolatok, a fáradás, a tűz és a földrengési részletezés. A betonelemek és a földrengési terhek [saját ellenőrzéssel](topic:concrete-and-seismic) rendelkeznek. Lásd: [Még nincs elkészítve](topic:not-built-yet).

## A jelentés

A {{ui:Report (PDF)}} és a {{ui:Report (CSV)}} az ellenőrzés után a tervezési táblázatokkal bővül: az előírások kiadásai, a beállítások és a nemzeti melléklet értékei, a kihasználtság rúdelemenként, minden felhasznált előírási pont, és minden rúdelemre az egyes ellenőrzések igénybevétele, teherbírása és kihasználtsága az irányadó kombinációban.
