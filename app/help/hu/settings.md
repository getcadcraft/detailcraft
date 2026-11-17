---
title: A DetailCraft beállításai
summary: Állítsa be, hogy az új elemek amerikai vagy európai szelvényekként induljanak, adja meg, mennyivel mozduljon el a másolat a kettőzésnél, válassza ki, hogy a másolatok hozzák-e a kapcsolataikat, és mutassa vagy rejtse el a csavarokat a 3D-nézetben.
keywords: beállítások, preferenciák, lapméret, papírméret, rajzok, opciók, acél, aisc, en, európai, amerikai szelvények, metrikus szelvények, alapértelmezett szelvény, minőség, s355, a992, kettőzési eltolás, beillesztési eltolás, kapcsolatok másolása, csavarok, horgonyrudak, csavarok elrejtése, visszaállítás
from: e46cea57
---

A {{ui:Beállítások}} megnyitásához kattintson az alkalmazássáv fogaskerekére, vagy nyomja meg a {{key:Mod+,}} billentyűkombinációt. Az első lap, a {{ui:DetailCraft}}, az alkalmazáshoz tartozó beállításokat tartalmazza; a {{ui:Általános}} lap azokat, amelyeket minden CadCraft-alkalmazás közösen használ (téma, eszköztár, panelek). A DetailCraft beállításai csak az alkalmazásban léteznek: itt módosíthatók, azonnal érvényesülnek, és ez a böngésző megjegyzi őket. Nem mentődnek a modellfájlba.

## Új elemek

Az elhelyező eszközök ezekkel a szelvényekkel és minőségekkel indulnak:

| Eszköz | Amerikai szelvények (AISC), A992 | Európai szelvények (EN), S355 |
|---|---|---|
| {{ui:Gerenda}} | W16x26, A992 | IPE300, S355 |
| {{ui:Oszlop}} | W12x50, A992 | HEB200, S355 |
| {{ui:Merevítő}} | HSS6x6x1/4, A500 Gr C | HEA160, S355 |
| {{ui:Lemez}} | A36 | S355 |

Az amerikai szelvények az indulási állapot. Az európai választás a merevítőnél HEA160-at használ, mert a DetailCraft EN-katalógusában még nincsenek üreges szelvények ([Profilkatalógus](topic:profile-catalog)). Az elhelyező eszköz bekapcsolt állapotában a {{ui:Tulajdonságok}} panelen továbbra is bármely szelvényt és minőséget választhat a következő elemhez. A modellben már meglévő elemek megtartják saját szelvényüket és minőségüket.

## Kettőzés és beillesztés

- **Eltolás (mm)**: x, y és z. A {{ui:Kettőzés}} ({{key:Mod+D}}) ennyire helyezi a másolatot az eredetitől, és a {{ui:Beillesztés eltolással (mm, az eredetitől)}} űrlap ezzel indul. Kezdetben 6000, 0, 0: egy 6 m-es mező a számozott rácsok mentén. Állítsa be a mezőtávolságra, vagy egy szintmagasságra a z-ben, ha egy szintet szeretne felmásolni.
- **Homloklemezek és talplemezek másolása a rúdelemeikkel** (kezdetben bekapcsolva): kapcsolat csak akkor kerül a másolattal együtt, ha minden általa összekötött elem másolódik. Kapcsolja ki, hogy csak a tartóelemeket és alapokat másolja a kapcsolatok nélkül, például ha más kapcsolatot szeretne kipróbálni a másolaton.

Lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## 3D-nézet

**Csavarok és horgonyrudak megjelenítése** (kezdetben bekapcsolva). Kapcsolja ki, hogy elrejtse őket a nézetben, és lássa egy sűrű csomópont furatait és lemezeit. Az elrejtett csavarokra nem lehet kattintani; kattintson a lemezre a kapcsolat kijelöléséhez. Az anyagjegyzék, a rajzok és minden export továbbra is tartalmazza az összes csavart és rudat.

## Sarokjelző

A 3D-nézet sarkában megjelenő elem: **Nézetkocka** (kezdetben; jobb felül — kattintson egy lapra, élre vagy sarokra, hogy onnan nézzen; húzza a körüli forgatáshoz; az iránytű-gyűrűjét húzva forgatja a modellt), **Tengelyikon** (kis X, Y, Z jelölő bal alul, amely a nézettel együtt fordul: X piros, Y zöld, Z kék), vagy **Nincs**. Csak a {{ui:3D}} nézetben jelenik meg; az {{ui:Alaprajz}} és a {{ui:Homlokzat}} egyiket sem mutatja. Lásd: [A nézetkocka](topic:view-cube).

## Visszaállítás

A párbeszédpanel alján lévő {{ui:DetailCraft beállításainak visszaállítása}} mindezeket alaphelyzetbe állítja (amerikai szelvények, 6000, 0, 0 eltolás, másolt kapcsolatok, látható csavarok), a {{ui:Általános}} beállításokkal együtt.

## Rajzok

**Lapméret**: a lapos rajzok és a gyártmányrajzok fekvő tájolásban készülnek: A4, A3 (kezdetben), A2, A1, ANSI B, ANSI C vagy ANSI D. A {{ui:Rajzok}} és a gyártmányrajz ablak ugyanazt a listát mutatja. Lásd: [Általános elrendezési és összeállítási rajzok](topic:drawings).

## Vasalás

- **ASTM-rúdnevek**: #3-tól #11-ig, vagy a lágy metrikus #10-től #36-ig ugyanazokra a rudakra.
- **Hajlítási kimutatás alakkódjai**: a DetailCraft S, L, U kódjai; ACI 315 típusok; vagy BS 8666 alakkódok. Lásd: [Vasalási referencia](topic:rebar-reference).

## Húzással kijelölés

**Téglalap** (mint korábban) vagy **Lasszó**: szabadkézi vonal, a {{key:Space}} billentyű húzás közben vált a bent, az érintett és a kerítés mód között. Lásd: [Kijelölés ablakkal](topic:select-and-change#select-with-a-window).
