---
title: Első lépések a DetailCrafttal
summary: Mit tud ma a DetailCraft, hogyan nyissa meg, és az első modell a rácsoktól a gyártmányrajzig tíz perc alatt.
keywords: indítás, első modell, bevezetés, acélszerkezeti részletezés, vasalás, gyors útmutató, oktatóanyag, áttekintés
from: 3682c0d8
---

A DetailCraft a CadCraft-család acél- és vasalásrészletező alkalmazása. Rácsokon és szinteken megépíti egy acélszerkezeti keret 3D modelljét, összekapcsolja az elemeket, és megadja, amire a gyártásnak szüksége van: alkatrész- és összeállításjeleket, anyagjegyzéket, egyes alkatrészek gyártmányrajzait, DSTV NC-fájlokat, egy IFC-modellt és hajlítási kimutatást az alapokhoz.

Ez egy korai build. Rövid listányi dolgot csinál gondosan, nem mindent egyszerre. Mielőtt valódi munkát tervezne rá, olvassa el a [Mi nincs még elkészítve](topic:not-built-yet) témakört.

## Mit tud ma

- Rácsok és szintek, amelyeket milliméterben ír be.
- Oszlopok, gerendák, merevítők és lemezek közzétett szelvénykatalógusokból (AISC W, S, C, L, HSS és Pipe; európai IPE, HEA, HEB és UPN), valamint a saját paraméteres szelvényei.
- Két kapcsolat: csavarozott homloklemez a gerendától az oszlop övlemezéig, és oszloptalplemez négy horgonyszárral. Mindegyik másolható minden hasonló csomópontra.
- Furatok és kivágások, helyzet szerint beírva.
- Négyszögletes pillérek alapjai alsó hálóval és indítóvasakkal.
- Alkatrész- és összeállításjelek, amelyek minden módosítás után maguktól frissülnek.
- Exportok: IFC4, DSTV NC-fájlok (I-szelvények és lemezek), anyagjegyzék CSV-ként, hajlítási kimutatás CSV-ként, és egy alkatrész gyártmányrajz-PDF-je.

## A DetailCraft megnyitása

1. Nyissa meg a DetailCraftot asztali böngészőben: Chrome, Edge, Firefox vagy Safari. Lásd: [Böngészők és számítógépek](common:browsers).
2. Várja meg, amíg a képernyő megtelik. Az alul lévő állapotsor ezt írja: „Kész. Nyissa meg a Mintát, vagy állítson be rácsokat és szinteket, és kezdjen el rúdelemeket elhelyezni.”

A modellnézethez 3D grafika (WebGL) szükséges. Ha a képernyő közepén ez áll: „Ez a böngésző nem tudta elindítani a 3D grafikát (WebGL)”, lásd a [Hibaelhárítás](topic:troubleshooting#the-3d-view-is-missing) témakört.

:::note
A modelljei az Ön számítógépén maradnak. A modell megnyitása a böngészőben olvassa be, a mentés pedig fájlt tölt le. Semmi nem töltődik fel. Felhőbe mentés még nincs. Lásd: [Hová kerülnek a fájljai](common:your-files). Ha később kapcsolat nélkül szeretné használni a DetailCraftot, egyszer, online állapotban válassza az alkalmazássávon a {{ui:Mentés offline használatra}} lehetőséget; lásd [Munka offline](common:offline).
:::

:::offline
Offline van. A DetailCraft kapcsolat nélkül csak akkor működik, ha előbb offline használatra el lett mentve: az alkalmazássáv {{ui:Mentés offline használatra}} gombja ekkor ezt írja: {{ui:Offline használatra kész}}. Lásd: [Munka offline](common:offline).
:::

## Előbb nézze meg a mintát

A leggyorsabb módja, hogy lássa, mit készít a DetailCraft, a mintakeret.

1. Az eszköztár {{ui:Fájl}} csoportjában válassza a {{ui:Minta}} gombot.
2. A nézet egy kétmezős keretet mutat: hat oszlopot talplemezekkel, négy gerendát homloklemezekkel, egy merevítőt és hét vasalt alapot.
3. Kattintson egy gerendára. A jobb oldali {{ui:Tulajdonságok}} panel mutatja az alkatrészjelét, a vágott hosszát, a tömegét és a homloklemezek által készített furatokat.
4. Nyissa meg alul az {{ui:Anyagjegyzék}} lapot, hogy lássa minden alkatrészjelet darabszámmal és tömeggel.

Az [A mintakeret felfedezése](topic:sample-model) végigvezeti darabonként.

## Az első modell

Az új modellben már van 1-től 3-ig és A-tól B-ig terjedő rács 6000 mm-es osztással, és két szint: a Level 1 a 0 magasságon, a Level 2 a 4000-en.

1. Válassza az {{ui:Új}} lehetőséget. Ha a jelenlegi modellben vannak módosítások, a DetailCraft rákérdez, hogy előbb mentse-e őket.
2. Válassza a nézet fölött az {{ui:Alaprajz}} lehetőséget. A mellette lévő szintlistában válassza a Level 1 szintet.
3. Válassza az eszköztáron az {{ui:Oszlop}} lehetőséget, vagy nyomja meg a {{key:C}} billentyűt.
4. Kattintson az A/1 rácsmetszéspontra. Megjelenik egy W12x50 oszlop a Level 1-től a Level 2-ig. Az állapotsor megmondja, hová került.
5. Kattintson a B/1, A/2 és B/2 pontra három további elhelyezéséhez.
6. A szintlistában válassza a Level 2 szintet, majd válassza a {{ui:Gerenda}} lehetőséget vagy nyomja meg a {{key:B}} billentyűt.
7. Kattintson az A/1, majd az A/2 pontra. Egy W16x26 gerenda köti össze a két oszlopfejet, az acél felső síkja a szinten.
8. Az {{key:Esc}} megnyomásával térjen vissza a {{ui:Kijelölés}} eszközhöz, majd kattintson a gerendára.
9. Válassza a {{ui:Kapcsolás}} csoportban a {{ui:Homloklemezek}} lehetőséget. Mindkét vég csavarozott homloklemezt kap, a gerenda visszavágódik, hogy illeszkedjen, és az első homloklemez most ki van jelölve.
10. Kattintson újra a gerendára.
11. Válassza a {{ui:Kimenet}} csoportban a {{ui:Gyártmányrajz}} lehetőséget. Megnyílik a gerenda gyártmányrajzának előnézete. Válassza a {{ui:PDF letöltése}} lehetőséget.
12. Nyomja meg a {{key:Mod+S}} billentyűkombinációt a modell mentéséhez. A böngésző letölti az `Untitled.detailcraft.json` fájlt.

Mentés előtt nevezze át a modellt a bal felső sarokban lévő {{ui:Név}} mezőben, hogy a fájl és minden export a nevét viselje.

## Merre tovább

- [A képernyő körútja](topic:workspace)
- [Rácsok és szintek beállítása](topic:grids-and-levels)
- [Mozgás a 3D nézetben](topic:navigate-3d), egérrel, trackpaddel vagy érintőképernyővel
- [Más részletezőszoftverekből érkezőknek](topic:coming-from), ha ismer egy nagy részletezőcsomagot
- [A súgó használata](common:help)
