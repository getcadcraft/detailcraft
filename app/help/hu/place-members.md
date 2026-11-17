---
title: Oszlopok, gerendák és merevítők elhelyezése
summary: Válasszon szelvényt, anyagot és pozíciót, majd kattintson a rácsmetszéspontokra, vagy írja be őket az acélelemek elhelyezéséhez.
keywords: oszlop, gerenda, merevítő, elem, elhelyezés, szelvény, anyag, elforgatás, pozíció, eltolás, beszúrás, hozzáadás rács szerint
from: d6db0dc1
---

Az elemek rácsmetszéspontokra kerülnek: az oszlop egy pontra, a gerenda vagy a merevítő két pont közé. Először állítsa be a [rácsokat és szinteket](topic:grids-and-levels).

## Eszköz és beállításai kiválasztása

1. Válassza az {{ui:Oszlop}} ({{key:C}}), a {{ui:Gerenda}} ({{key:B}}) vagy a {{ui:Merevítő}} ({{key:R}}) elemet az {{ui:Elhelyezés}} csoportban.
2. A jobb oldali {{ui:Tulajdonságok}} panel átvált erre: „Oszlop elhelyezése” (vagy gerenda, vagy merevítő), és megjeleníti a következő elem beállításait:
   - {{ui:Szelvény}}: válasszon a listából. A méretek katalógus szerint csoportosítva jelennek meg (W-szelvények, U-szelvények, szögacélok, HSS, IPE, HEA, HEB, UB, UC, PFC, EA, UEA, SHS, RHS, CHS, és az Ön egyéni szelvényei). Lásd: [Szelvénykatalógus](topic:profile-catalog).
   - {{ui:Anyag}}: A992, A36, A572 Gr 50, A500 Gr C, S235, S275 vagy S355.
   - {{ui:Pozíció}}: hol helyezkedik el a szelvény a két pont közötti vonalon: {{ui:Az acél teteje a vonalon}}, {{ui:A vonalra középre igazítva}} vagy {{ui:Az alja a vonalon}}.
   - {{ui:Elforgatás (°)}}: elforgatja a szelvényt az elem saját tengelye körül.
   - {{ui:Eddig}} (csak oszlopnál): {{ui:A következő szint}}, vagy egy szint neve.
3. Az opciók alatt a {{ui:Szelvény}} doboz felsorolja a kiválasztott szelvény méreteit, területét, méterenkénti tömegét és a katalógust, ahonnan származik.

Az alapértékek: W12x50, A992 minőségben oszlopnak (középre igazítva); W16x26, A992 minőségben gerendának (az acél teteje a vonalon); HSS6x6x1/4, A500 Gr C minőségben merevítőnek (középre igazítva). Az opciók addig maradnak beállítva, amíg nem módosítja őket.

## Elhelyezés kattintással

### Oszlop

1. Válassza az {{ui:Alaprajz}} nézetet, és válassza ki azt a szintet, ahonnan az oszlop indul.
2. Válassza az {{ui:Oszlop}} elemet.
3. Vigye a mutatót egy metszéspont közelébe. A legközelebbi pont kivilágosodik, és az állapotsor megnevezi.
4. Kattintson. Az oszlop az adott szinttől a következő szintig tart (vagy az {{ui:Eddig}} szintig). Az állapotsor például ezt írja: „Oszlop W12x50 itt: A/1, Szint 1 – Szint 2.”
5. Tovább kattintva több oszlopot helyezhet el. Ha végzett, nyomja meg az {{key:Esc}} billentyűt.

Ha a kattintott szint fölött nincs szint, az állapotsor ezt írja: „Nincs olyan szint a Szint 2 fölött, ameddig az oszlop elérhetne. Előbb adjon hozzá egy szintet.”

### Gerenda

1. Válassza az {{ui:Alaprajz}} nézetet, és válassza ki a gerenda szintjét.
2. Válassza a {{ui:Gerenda}} elemet.
3. Kattintson az első metszéspontra. Az állapotsor ezt írja: „Innen: A/1, Szint 2. Most kattintson a másik végpontra (Esc: mégse).” Szaggatott vonal követi a mutatót.
4. Kattintson a második metszéspontra. Megjelenik a gerenda.
5. Kattintson újra a következő gerenda kezdéséhez, vagy nyomja meg az {{key:Esc}} billentyűt.

Az első kattintás utáni {{key:Esc}} csak azt a pontot törli; a második {{key:Esc}} kilép az eszközből.

### Merevítő

A merevítő két, különböző szinten lévő metszéspont között fut, ezért a {{ui:Homlokzat}} nézetben a legegyszerűbb.

1. Válassza a {{ui:Homlokzat}} nézetet, és válassza ki azt a betűs rácsvonalat, amelyen a merevítő van.
2. Válassza a {{ui:Merevítő}} elemet.
3. Kattintson az alsó végre, majd a felsőre.

A homlokzat csak betűs rácsvonalakhoz készül. Ha a merevítő a számozott vonal mentén lévő keretben van (A-tól B-ig), használja a {{ui:3D}} nézetet vagy az alábbi {{ui:Hozzáadás rács szerint}} űrlapot.

:::touch
Érintőképernyőn koppintson a metszéspont közelébe: a koppintás a legközelebbi pontot választja ki, ha van pont rövid távolságon belül, és nem tesz semmit, ha nincs közel pont. Koppintás előtt nincs kiemelés, ezért minden koppintás után ellenőrizze az állapotsor üzenetét. Az egyujjas húzás forgatja vagy eltolja a nézetet, nem helyez el elemet.
:::

## Elhelyezés rács szerint, kattintás nélkül

Minden elhelyező eszköznek van egy {{ui:Hozzáadás rács szerint}} űrlapja a {{ui:Tulajdonságok}} panel alján. Csak billentyűzettel is működik, és nem kell hozzá a 3D-nézet.

1. Válassza az eszközt, például a {{ui:Gerenda}} elemet.
2. A {{ui:Hozzáadás rács szerint}} részben válassza ki a {{ui:Kezdő rács (betű)}}, a {{ui:Kezdő rács (szám)}} és a {{ui:Kezdő szint}} mezőket.
3. Válassza ki a {{ui:Végrács (betű)}}, a {{ui:Végrács (szám)}} és a {{ui:Végszint}} mezőket.
4. Válassza a {{ui:Hozzáadás}} gombot.

Oszlop vagy alap esetén az űrlapnak csak egy pontja van: {{ui:Rács (betű)}}, {{ui:Rács (szám)}} és {{ui:Szint}}.

## Elem módosítása elhelyezés után

1. Nyomja meg az {{key:Esc}} billentyűt (vagy válassza a {{ui:Kijelölés}} elemet, {{key:V}}), és kattintson az elemre.
2. A {{ui:Tulajdonságok}} panelban módosítsa a {{ui:Név}}, {{ui:Szelvény}}, {{ui:Anyag}}, {{ui:Pozíció}} vagy {{ui:Elforgatás (°)}} értéket.
3. Az elem mozgatásához szerkessze a {{ui:Kezdet}} vagy a {{ui:Vég}} x, y és z értékét a {{ui:Végek (x, y, z mm)}} alatt. Mindkét végnél a rácsnév látszik alul, vagy a koordináták, ha nincs rácson.

Minden módosítás egy visszavonási lépés. A mezők alatt látja az elem {{ui:Alkatrészjel}}, {{ui:Összeállítás}}, {{ui:Vágott hossz}} és {{ui:Tömeg}} értékét (a tömeg bruttó: a lyukak és kivágások nincsenek levonva), valamint azt, hogy a szelvény melyik katalógusból származik.

Az elemek még nem húzhatók és nem sokszorozhatók. Hasonló elem létrehozásához másolja és illessze be, vagy kettőzze meg ({{key:Mod+D}}): lásd: [Másolás, beillesztés és kettőzés](topic:copy-paste).

## Elem törlése

Jelölje ki, és nyomja meg a {{key:Delete}} vagy a {{key:Backspace}} billentyűt, vagy válassza a {{ui:Törlés}} elemet. A rajta lévő csomópontok is törlődnek. A {{key:Mod+Z}} mindent visszahoz.

## Tudnivalók

- **Melyik irányba néz egy oszlop.** A {{ui:Elforgatás (°)}} 0 esetén az oszlop övei x irányba néznek, a szomszédos számozott rácsvonalak felé. Az 1-es és a 2-es rács közötti gerenda övbe csatlakozik; az A-tól B-ig tartó gerenda gerincbe. Véglemezeket csak övbe lehet építeni, ezért ha a gerendái A-tól B-ig futnak, ezeknek az oszlopoknak adjon 90-es elforgatást.
- **A szinten lévő gerendák lelógnak** az alapértelmezett {{ui:Az acél teteje a vonalon}} beállítással. Válassza a {{ui:A vonalra középre igazítva}} beállítást, ha a szintjei elemtengelyek.
- **Az oszlopok szintről szintre futnak.** Két szinten átnyúló oszlop esetén az {{ui:Eddig}} mezőt állítsa a magasabb szintre.
- **Ferde gerendák** megengedettek (különböző szintű végeket választhat), de véglemezek még nem készülnek rájuk.

Következő: [Gerendák csatlakoztatása oszlopokhoz véglemezekkel](topic:end-plates).
