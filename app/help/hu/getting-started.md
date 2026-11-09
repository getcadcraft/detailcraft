---
title: Első lépések a DetailCraft-tal
summary: Mit tud ma a DetailCraft, hogyan nyissa meg, és egy első modell a rácsoktól a gyártmányrajzig tíz perc alatt.
keywords: kezdés, első modell, bevezetés, acélszerkezet-tervezés, betétvas, gyors kezdés, oktatóanyag, áttekintés
from: e4f16bbe
---

A DetailCraft a CadCraft-családhoz tartozó acél- és betétvas-részletterv-készítő alkalmazás. Acélvázat 3D-ben modellez rácsokon és szinteken, összekapcsolja, és megadja, amire a műhelynek szüksége van: alkatrész- és összeállítási jelek, anyagjegyzék, egyes alkatrészek gyártmányrajzai, DSTV NC-fájlok, IFC-modell és az alapok hajlítási kimutatása.

Ez korai kiadás. Kevés dolgot végez el gondosan, nem mindent egyszerre. Mielőtt valódi munkát tervez hozzá, olvassa el: [Mi nincs még elkészítve](topic:not-built-yet).

## Mit tud ma

- Rácsok és szintek, amelyeket milliméterben ír be.
- Oszlopok, gerendák, merevítők és lemezek közzétett szelvénykatalógusokból (AISC W, S, C, L, HSS és Pipe; európai IPE, HEA, HEB és UPN; brit UB, UC, PFC, EA, UEA, SHS, RHS és CHS), valamint saját paraméteres szelvényei.
- Két kapcsolat: csavarozott homloklemez a gerendától az oszlop övlemezéig, és oszlop-talplemez négy horgonyrúddal. Mindkettő másolható minden hasonló csomópontra.
- Furatok és kivágások, amelyeket helyzettel ad meg.
- Téglalap alakú tömbalapok alsó hálóval és indítóvasakkal.
- Alkatrész- és összeállítási jelek, amelyek minden módosítás után maguktól frissülnek.
- Exportok: IFC4, DSTV NC-fájlok (I-szelvények és lemezek), anyagjegyzék CSV-ben, hajlítási kimutatás CSV-ben, és egy alkatrész gyártmányrajzának PDF-je.

## A DetailCraft megnyitása

1. Nyissa meg a DetailCraft-ot asztali böngészőben: Chrome, Edge, Firefox vagy Safari. Lásd: [Böngészők és számítógépek](common:browsers).
2. Várjon, amíg a képernyő kitöltődik. Az alsó állapotsor ezt írja: „Kész. Nyissa meg a Mintát, vagy adja meg a rácsokat és szinteket, és kezdje el elhelyezni a rúdelemeket.”

A modellnézethez 3D-grafika (WebGL) kell. Ha a képernyő közepén ez áll: „A böngésző nem tudta elindítani a 3D-grafikát (WebGL)”, lásd: [Hibaelhárítás](topic:troubleshooting#the-3d-view-is-missing).

:::note
A modellek a számítógépén maradnak. A megnyitás a böngészőben olvassa be a modellt, a mentés pedig fájlt tölt le. Semmi nem töltődik fel. A felhőbe mentés még nem érhető el. Lásd: [Hova kerülnek a fájljai](common:your-files). Hogy később kapcsolat nélkül is használhassa a DetailCraft-ot, kapcsolódva egyszer válassza az alkalmazássávban a {{ui:Mentés offline használatra}} gombot; lásd: [Munka offline](common:offline).
:::

:::offline
Nincs kapcsolat. A DetailCraft csak akkor működik kapcsolat nélkül, ha előbb offline használatra mentették: az alkalmazássávon lévő {{ui:Mentés offline használatra}} gombon ekkor a {{ui:Offline használatra kész}} felirat látszik. Lásd: [Munka offline](common:offline).
:::

## Először nézze meg a mintát

A leggyorsabb módja annak, hogy lássa, mit készít a DetailCraft, a mintaváz megnézése.

1. Válassza a {{ui:Minta}} gombot az eszköztár {{ui:Fájl}} csoportjában.
2. A nézeten egy kétmezős váz látszik: hat oszlop talplemezekkel, négy gerenda homloklemezekkel, egy merevítő és hét alap betétvassal.
3. Kattintson egy gerendára. A jobb oldali {{ui:Tulajdonságok}} panel mutatja az alkatrészjelét, a vágási hosszát, a tömegét, és a homloklemezek által készített furatokat.
4. Nyissa meg alul a {{ui:Anyagjegyzék}} lapot, hogy lássa minden alkatrészjelet a darabszámmal és a tömeggel.

A [Mintaváz bejárása](topic:sample-model) részenként végigvezeti.

## Az első modell

Egy új modell már tartalmaz rácsokat: 1–3 és A–B, 6000 mm-es osztással, valamint két szintet: az 1. szint 0-nál és a 2. szint 4000-nél.

1. Válassza a {{ui:Új}} gombot. Ha az aktuális modellben vannak módosítások, a DetailCraft előbb megkérdezi, mentse-e őket.
2. Válassza a {{ui:Alaprajz}} gombot a nézet fölött. A mellette lévő szintlista az 1. szintet választja ki.
3. Válassza az eszköztárban a {{ui:Oszlop}} gombot, vagy nyomja meg a {{key:C}} billentyűt.
4. Kattintson az A/1 rácsmetszéspontra. Egy W12x50 oszlop jelenik meg az 1. szinttől a 2. szintig. Az állapotsor megmondja, hová került.
5. Kattintson a B/1, A/2 és B/2 pontra, hogy még három oszlopot helyezzen el.
6. Válassza a 2. szintet a szintlistában, majd válassza a {{ui:Gerenda}} gombot, vagy nyomja meg a {{key:B}} billentyűt.
7. Kattintson az A/1, majd az A/2 pontra. Egy W16x26 gerenda köti össze a két oszlopfejet, az acél felső síkja a szinten van.
8. Nyomja meg az {{key:Esc}} billentyűt a {{ui:Kijelölés}} eszközre való visszatéréshez, majd kattintson a gerendára.
9. Válassza a {{ui:Homloklemezek}} gombot a {{ui:Kapcsolás}} csoportban. Mindkét végére csavarozott homloklemez kerül, a gerenda az illeszkedéshez visszavágódik, és most az első homloklemez van kijelölve.
10. Kattintson újra a gerendára.
11. Válassza a {{ui:Gyártmányrajz}} gombot a {{ui:Kimenet}} csoportban. Megnyílik a gerenda gyártmányrajzának előnézete. Válassza a {{ui:PDF letöltése}} gombot.
12. Nyomja meg a {{key:Mod+S}} billentyűt a modell mentéséhez. A böngésző letölti az `Untitled.detailcraft.json` fájlt.

Mentés előtt nevezze át a modellt a bal felső {{ui:Név}} mezőben, hogy a fájl és minden export ezt a nevet viselje.

## Merre tovább

- [A képernyő bemutatása](topic:workspace)
- [Rácsok és szintek beállítása](topic:grids-and-levels)
- [Mozgás a 3D-nézetben](topic:navigate-3d), egérrel, érintőpadon vagy érintőképernyőn
- [Átállás más részletterv-készítő szoftverről](topic:coming-from), ha ismer egy nagyobb szoftvercsomagot
- [A súgó használata](common:help)
